"use client";
import { useState } from "react";
import { useToggle } from "react-use";
import { FcGoogle } from "react-icons/fc";
import { BiLogoFacebookCircle } from "react-icons/bi";
import Link from "next/link";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { loginHome } from "@/redux/features/auth/authSlice";
import { signIn } from "next-auth/react";
import { usePathname } from "next/navigation";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import CTEInput from "@/components/common/CTEInput";

export interface ILoginProps {}

export default function Login(props: ILoginProps) {
  const [showPassword, toggleShowPassword] = useToggle(false);
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const pathname = usePathname();
  const [error, setError] = useState<string>("");
  const dispatch = useAppDispatch();
  const loginInfo = useAppSelector((state) => state.login);

  const handleLogin = () => {
    if (email === "" || password === "") {
      alert("Please complete all information");
    } else {
      if (/^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/.test(email)) {
        setError("");
        dispatch({
          type: loginHome({
            email: email,
            password: password,
          }).type,
          payload: {
            email: email,
            password: password,
          },
        });
      } else {
        setError("Invalid email!");
      }
    }
  };
  const href =
    pathname === "/dang-nhap"
      ? "/dang-ky"
      : pathname === "/agency/login"
      ? "/agency/register"
      : "";
  return (
    <div className="flex items-center h-screen justify-center w-full ">
      <div className="w-full mx-[16px] flex flex-col gap-8">
        <div className={` flex justify-center text-[32px] font-bold`}>
          Đăng nhập
        </div>
        <div>
          <form className="">
            <div className="flex flex-col gap-5 mb-[24px]">
              <CTEInput
                name="email"
                label="Email"
                type="email"
                placeholder="example@gmail.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <CTEInput
                name="Mật khẩu"
                label="Mật khẩu"
                type="password"
                placeholder="Nhập mật khẩu"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="flex justify-end mb-[34px]">
              <div className="text-[12px] text-[#FD4B4B] font-normal cursor-pointer">
                Quên mật khẩu?
              </div>
            </div>
            <div className="w-full flex justify-center">
              <div
                onClick={handleLogin}
                className="w-[190px] py-[9px] px-[28px] flex justify-center items-center h-[40px] rounded-[40px] bg-[#1D1D1D] text-base font-semibold cursor-pointer text-[#FDBE44]"
              >
                Đăng nhập
              </div>
            </div>
          </form>
          <div>
            <div className="text-center py-[33px] text-[#727272] text-[12px]">
              Hoặc đăng nhập với
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
            <div className="text-[14px] text-center">
              Bạn chưa có tài khoản?{" "}
              <span className="text-[#F9D916] text-[15px]">
                <Link href={href}>Đăng ký ngay</Link>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
