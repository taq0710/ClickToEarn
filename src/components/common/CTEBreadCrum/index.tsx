'use client';
import React, { Fragment, useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import './styles.css';
import { RightOutlined } from '@ant-design/icons';
const getPathFromUrl = (url: string): string => {
  return url.split(/[?#]/)[0];
};
const convertBreadcrumb = (
  title: string,
  toUpperCase: boolean | undefined,
  replaceCharacterList: Array<CharacterMap> | undefined,
  transformLabel?: ((title: string) => React.ReactNode) | undefined
): React.ReactNode => {
  let transformedTitle = getPathFromUrl(title);

  if (transformLabel) {
    return transformLabel(transformedTitle);
  }

  if (replaceCharacterList) {
    for (let i = 0; i < replaceCharacterList.length; i++) {
      transformedTitle = transformedTitle.replaceAll(
        replaceCharacterList[i].from,
        replaceCharacterList[i].to
      );
    }
  }
  return toUpperCase
    ? decodeURI(transformedTitle).toUpperCase()
    : decodeURI(transformedTitle);
};

export interface Breadcrumb {
  breadcrumb: string;
  href: string;
}

export interface CharacterMap {
  from: string;
  to: string;
}

export interface BreadcrumbsProps {
  useDefaultStyle?: boolean;
  rootLabel?: string | null;
  omitRootLabel?: boolean;
  labelsToUppercase?: boolean | undefined;
  replaceCharacterList?: Array<CharacterMap> | undefined;
  transformLabel?: ((title: string) => React.ReactNode) | undefined;
  omitIndexList?: Array<number> | undefined;
  containerClassName?: string;
  listClassName?: string;
  inactiveItemClassName?: string;
  activeItemClassName?: string;
}

const CTEBreadcrumbs = ({
  useDefaultStyle = false,
  rootLabel = 'Trang chủ',
  omitRootLabel = false,
  labelsToUppercase = false,
  replaceCharacterList = [{ from: '-', to: ' ' }],
  transformLabel = undefined,
  omitIndexList = undefined,
  containerClassName = '',
  listClassName = '',
  inactiveItemClassName = '',
  activeItemClassName = '',
}: BreadcrumbsProps) => {
  const router = useRouter();
  const pathName = usePathname();
  const [breadcrumbs, setBreadcrumbs] = useState<Array<Breadcrumb> | null>(
    null
  );

  useEffect(() => {
    if (router) {
      const linkPath = pathName.split('/');
      linkPath.shift();

      const pathArray = linkPath.map((path, i) => {
        return {
          breadcrumb: path,
          href: '/' + linkPath.slice(0, i + 1).join('/'),
        };
      });

      setBreadcrumbs(pathArray);
    }
  }, [router]);

  if (!breadcrumbs) {
    return null;
  }

  return (
    <nav
      className={`flex text-neutral1 py-3 my-4 md:my-[42px] text-sm md:text-base ${containerClassName}`}
      aria-label="breadcrumbs"
    >
      <ol className={`flex flex-wrap ${useDefaultStyle ? '_2jvtI' : listClassName}`}>
        {!omitRootLabel && (
          <li className={`pr-4 sm:pr-6 md:pr-11 ${inactiveItemClassName}`}>
            <Link href="/">
              {convertBreadcrumb(
                rootLabel || 'Home',
                labelsToUppercase,
                replaceCharacterList,
                transformLabel
              )}
            </Link>
          </li>
        )}
        {breadcrumbs.length >= 1 &&
          breadcrumbs.map((breadcrumb, i) => {
            if (
              !breadcrumb ||
              breadcrumb.breadcrumb.length === 0 ||
              (omitIndexList && omitIndexList.find((value) => value === i))
            ) {
              return;
            }
            return (
              <Fragment key={i}>
                <div>
                  <RightOutlined />
                </div>
                <li
                  key={breadcrumb.href}
                  className={`px-4 sm:px-6 md:px-11 capitalize ${
                    i === breadcrumbs.length - 1
                      ? `text-primary1 ${activeItemClassName}`
                      : inactiveItemClassName
                  }`}
                >
                  <Link href={breadcrumb.href}>
                    {convertBreadcrumb(
                      breadcrumb.breadcrumb,
                      labelsToUppercase,
                      replaceCharacterList,
                      transformLabel
                    )}
                  </Link>
                </li>
              </Fragment>
            );
          })}
      </ol>
    </nav>
  );
};

export default CTEBreadcrumbs;
