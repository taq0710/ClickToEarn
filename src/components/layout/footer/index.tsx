import FlexCenter from "@/components/common/CTECenter";
import Image from "next/image";
import FaceBook from "/public/images/facebook.png"
import Instagram from "/public/images/instagram.png"
import Twitter from "/public/images/twitter.png"
import Logo from "/public/images/logomain.png"
export interface FooterProps {}

export default function Footer(props: FooterProps) {
  return (
    <footer className="flex justify-between items-center py-3">
      <FlexCenter>
          <Image alt="clickToEarn" src={Logo} width={90}/>
      </FlexCenter>
      <span>@copy right 2023 </span>
      <FlexCenter className="gap-x-2">
        <FlexCenter className="rounded-full overflow-hidden">
          <Image alt="facebook clickToEarn" src={FaceBook} width={25}/>
        </FlexCenter>
        <FlexCenter className="rounded-full overflow-hidden">
          <Image alt="instagram clickToEarn" src={Instagram} width={25}/>
        </FlexCenter>
        <FlexCenter className="rounded-full overflow-hidden">
          <Image alt="twitter clickToEarn" src={Twitter} width={25}/>
        </FlexCenter>
      </FlexCenter>
    </footer>
  );
}
