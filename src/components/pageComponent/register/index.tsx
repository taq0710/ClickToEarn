"use client";
import { signUp } from "@/redux/features/auth/authSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { getItemLocalStorage } from "@/utils/localStorageUtil";
import { signIn } from "next-auth/react";
import { usePathname } from "next/navigation";
import * as React from "react";
import { BiLogoFacebookCircle } from "react-icons/bi";
import { BsEyeFill, BsEyeSlashFill } from "react-icons/bs";
import { FcGoogle } from "react-icons/fc";
import { useToggle } from "react-use";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";

export interface IRegisterProps {}

export default function Register(props: IRegisterProps) {
  const [showPassword, toggleShowPassword] = useToggle(false);
  const [passwordMatchError, setPasswordMatchError] = React.useState("");
  const [fullName, setFullName] = React.useState("");
  const [email, setEmail] = React.useState<string>("");
  const [password, setPassword] = React.useState<string>("");
  const [confirmPassword, setConfirmPassword] = React.useState("");
  const pathname = usePathname();
  const [error, setError] = React.useState<string>("");
  const token = getItemLocalStorage("token");
  const dispatch = useAppDispatch();
  const loginInfo = useAppSelector((state) => state.login);
  const handleConfirmPasswordChange = (e: any) => {
    const newConfirmPassword = e.target.value;
    setConfirmPassword(newConfirmPassword);
    if (password !== newConfirmPassword) {
      setPasswordMatchError("Mật khẩu và xác nhận mật khẩu không khớp.");
    } else {
      setPasswordMatchError("");
    }
  };
  const handlePasswordChange = (e: any) => {
    const newPassword = e.target.value;
    setPassword(newPassword);
    if (newPassword !== confirmPassword) {
      setPasswordMatchError("Mật khẩu và xác nhận mật khẩu không khớp.");
    } else {
      setPasswordMatchError("");
    }
  };
  const handleLogin = () => {
    if (
      email === "" ||
      password === "" ||
      fullName === "" ||
      password === "" ||
      password !== confirmPassword
    ) {
      alert("Vui kiểm tra lại thông tin ");
    } else {
      if (/^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/.test(email)) {
        setError("");
        if (pathname === "/register") {
          dispatch({
            type: signUp({
              email: email,
              password: password,
              fullName: fullName,
              role: "user",
            }).type,
            payload: {
              email: email,
              password: password,
              fullName: fullName,
              role: "user",
            },
          });
        } else if (pathname === "/agency/register") {
          dispatch({
            type: signUp({
              email: email,
              password: password,
              fullName: fullName,
              role: "agency",
            }).type,
            payload: {
              email: email,
              password: password,
              fullName: fullName,
              role: "agency",
            },
          });
        }
      } else {
        setError("Invalid email!");
      }
    }
  };
  return (
    <div className="flex items-center h-screen justify-center w-full ">
      <div className="w-full mx-[16px] flex flex-col gap-8">
        <div className={` flex justify-center text-[32px] font-bold`}>
          Đăng ký
        </div>
        <div>
          <form className="">
            <div className="flex flex-col gap-5 mb-[24px]">
              <div>
                <div className="text-[14px] mb-[6px] ml-3">
                  <label htmlFor="">Email</label>
                </div>
                <input
                  className="rounded-[8px] border-[2px] px-5 h-[48px] text-[14px] md:text-[16px] w-full outline-none hover:border-neutral3 focus:border-yellow-500"
                  type="email"
                  placeholder="example@gmail.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <div>
                <div className="text-[14px] mb-[6px] ml-3">
                  <label htmlFor="">Mật khẩu</label>
                </div>
                <div className="relative">
                  <input
                    className="rounded-[8px] border-[2px] px-5 h-[48px] text-[14px] md:text-[16px] w-full outline-none hover:border-neutral3 focus:border-yellow-500"
                    type={showPassword ? "text" : "password"}
                    placeholder="Nhập mật khẩu"
                    value={password}
                    onChange={handlePasswordChange}
                    id="password"
                    required
                  />
                  <div className="absolute inset-y-0 right-0 flex items-center justify-center w-8">
                    <button
                      type="button"
                      className="focus:outline-none text-neutral-500"
                      onClick={toggleShowPassword}
                    >
                      {showPassword ? (
                        <AiOutlineEyeInvisible className=" text-[24px]" />
                      ) : (
                        <AiOutlineEye className=" text-[24px]" />
                      )}
                    </button>
                  </div>
                </div>
              </div>
              <div>
                <div className="text-[14px] mb-[6px] ml-3">
                  <label htmlFor="">Nhập lại mật khẩu</label>
                </div>
                <div className="relative">
                  <input
                    className="rounded-[8px] border-[2px] px-5 h-[48px] text-[14px] md:text-[16px] w-full outline-none hover:border-neutral3 focus:border-yellow-500"
                    type={showPassword ? "text" : "password"}
                    placeholder="Nhập lại mật khẩu"
                    value={confirmPassword}
                    onChange={handleConfirmPasswordChange}
                    id="confirmPassword"
                    required
                  />
                  <div className="absolute inset-y-0 right-0 flex items-center justify-center w-8">
                    <button
                      type="button"
                      className="focus:outline-none text-neutral-500"
                      onClick={toggleShowPassword}
                    >
                      {showPassword ? (
                        <AiOutlineEyeInvisible className=" text-[24px]" />
                      ) : (
                        <AiOutlineEye className=" text-[24px]" />
                      )}
                    </button>
                  </div>
                </div>
                {passwordMatchError && (
                  <p className="text-red-500">{passwordMatchError}</p>
                )}
              </div>
            </div>

            <div className="w-full flex justify-center">
              <div
                onClick={handleLogin}
                className="w-[190px] py-[9px] px-[28px] flex justify-center items-center h-[40px] rounded-[40px] bg-[#1D1D1D] text-base font-semibold cursor-pointer text-[#FDBE44]"
              >
                Đăng ký
              </div>
            </div>
          </form>
          <div>
            <div className="text-center py-[33px] text-[#727272] text-[14px]">
              Hoặc tiếp tục với
            </div>
            <div className="flex justify-center">
              <div className="flex justify-between mb-[16px] w-[340px]">
                <div className="border border-[#B0B0B0] flex px-[36px] py-[10px] w-[165px] gap-1 justify-center rounded-[27px] cursor-pointer items-center">
                  <FcGoogle className="text-lg" />
                  Google
                </div>
                <div
                  onClick={() => signIn()}
                  className="border border-[#B0B0B0] flex px-[36px] py-[10px] w-[165px] gap-1 justify-center items-center rounded-[27px] cursor-pointer items"
                >
                  <div>
                    <BiLogoFacebookCircle className="text-[#1B74E4] text-[20px]" />
                  </div>
                  <div>Facebook</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
