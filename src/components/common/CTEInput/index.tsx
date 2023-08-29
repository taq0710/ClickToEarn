import { InputHTMLAttributes, ReactNode } from "react";
import { useToggle } from "react-use";
import { UseFormRegister } from "react-hook-form";
import { AiOutlineEyeInvisible,AiOutlineEye } from 'react-icons/ai';
export interface MBInputProps extends InputHTMLAttributes<HTMLInputElement> {
  placeholder?: string;
  icon?: ReactNode;
  iconLeft?: ReactNode;
  iconRight?: ReactNode;
  password?: boolean;
  inputClassName?: string;
  className?: string;
  defaultValue?: string;
  label?: string;
  name: string;
  required?: boolean;
  description?: string;
  error?:string;
  register: UseFormRegister<any>;
}

export default function MBInput({
  placeholder,
  icon,
  iconLeft,
  iconRight,
  password,
  inputClassName,
  className,
  defaultValue,
  label,
  type,
  required,
  name,
  description,
  error,
  register,
  ...props
}: MBInputProps) {
  const [showPassword, toggleShowPassword] = useToggle(false);
  return (
    <div className={`w-full ${className}`}>
      {label && (
        <div className="flex space-x-1 pb-[6px]">
          <label htmlFor="" className="text-neutral3 font-semibold text-[14px] md:text-[16px]">
            {label}
          </label>
          {required && <span className="text-primary2 font-semibold ">*</span>}
        </div>
      )}
      <div className="relative ">
        {iconLeft && (
          <div className="absolute inset-y-0 left-1 flex items-center justify-center w-8">
            {iconLeft}
          </div>
        )}
        <input
          type={type === "password" && showPassword ? "text" : type}
          className={`rounded-[8px] border-[2px] border-neutral5 px-5 h-[44px] text-[14px] md:text-[16px] w-full 
          outline-none hover:border-neutral3 focus:border-primary1 ${
            iconLeft && "pl-[32px]"
          }  ${inputClassName}`}
          placeholder={placeholder}
          {...register(name as string, { required })}
        />
        {iconRight && (
          <div className="absolute inset-y-0 right-0 flex items-center justify-center w-8">
            {iconRight}
          </div>
        )}
        {type === "password" && (
          <div className="absolute inset-y-0 right-0 flex items-center justify-center w-8">
            <button
              type="button"
              className="focus:outline-none text-neutral-500"
              onClick={toggleShowPassword}
            >
              {showPassword ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
            </button>
          </div>
        )}
      </div>

      {error ? (
        <p className="text-primary2 text-[12px] text-end mt-[6px]">{error as string}</p>
      ) : (
        description && (
          <p className="text-neutral3 text-[12px] text-end mt-[6px]">{description}</p>
        )
      )}
    </div>
  );
}
