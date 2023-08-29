import { Select } from 'antd';
import * as React from 'react';
import { useForm, Controller, SubmitHandler, Control } from 'react-hook-form';
import styles from './styles.module.scss';
import { MdArrowDropDown } from 'react-icons/md';
export interface MBSelectProps {
  control: Control<any>;
  option: { value: string; label: string }[];
  name: string;
  label?: string;
  required?: boolean;
  description?: string;
  error?: string;
}

export default function MBSelect({
  control,
  option,
  name,
  label,
  required,
  description,
  error,
}: MBSelectProps) {
  return (
    <div className={styles.selectWrapper}>
      {label && (
        <div className="flex space-x-1 pb-[6px]">
          <label htmlFor="" className="text-neutral3 font-semibold text-[14px] md:text-[16px]">
            {label}
          </label>
          {required && <span className="text-primary2 font-semibold ">*</span>}
        </div>
      )}
      <Controller
        control={control}
        name={name}
        render={({ field }) => (
          <Select
            {...field}
            className={styles.selectField}
            suffixIcon={<MdArrowDropDown />}
          >
            {Object.values(option).map((foo) => (
              <Select.Option value={foo.value} key={foo.value}>
                {foo.label}
              </Select.Option>
            ))}
          </Select>
        )}
      />
      {error ? (
        <p className="text-primary2 text-[12px] text-end mt-[6px]">
          {error as string}
        </p>
      ) : (
        description && (
          <p className="text-neutral3 text-[12px] text-end mt-[6px]">
            {description}
          </p>
        )
      )}
    </div>
  );
}
