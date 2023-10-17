import { InputHTMLAttributes, ReactNode } from "react";
import { useToggle } from "react-use";
import { UseFormRegister } from "react-hook-form";
import { AiOutlineEyeInvisible, AiOutlineEye } from "react-icons/ai";
export interface CTEInputProps extends InputHTMLAttributes<HTMLInputElement> {
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
  error?: string;
}

export default function CTEInput({
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
  ...props
}: CTEInputProps) {
  const [showPassword, toggleShowPassword] = useToggle(false);
  return (
    <div className={`w-full ${className}`}>
      {label && (
        <div>
          <label htmlFor="" className="text-[16px] mb-[6px] ml-3 font-semibold">
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
          className={`rounded-[8px] border-[2px] px-5 h-[48px] text-[14px] md:text-[16px] w-full outline-none hover:border-neutral3 focus:border-yellow-500 ${
            iconLeft && "pl-[32px]"
          }  ${inputClassName}`}
          placeholder={placeholder}
        />
        {iconRight && (
          <div className="absolute inset-y-0 right-0 flex items-center justify-center w-8">
            {iconRight}
          </div>
        )}
        {type === "password" && (
          <div className="absolute inset-y-0 right-0 flex items-center justify-center w-8 mr-[12px]">
            <button
              type="button"
              className="focus:outline-none text-neutral-500 cursor-pointer"
              onClick={toggleShowPassword}
            >
              {showPassword ? (
                <AiOutlineEyeInvisible className=" text-[24px]" />
              ) : (
                <AiOutlineEye className=" text-[24px]" />
              )}
            </button>
          </div>
        )}
      </div>

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
