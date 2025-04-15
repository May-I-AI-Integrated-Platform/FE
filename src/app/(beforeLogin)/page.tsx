'use client'

import { useEffect, useState } from "react";
import { GoogleIcon, KakaoIcon, Logo, NaverIcon } from "../../../public/svgs"
import { useRouter } from "next/navigation";
import InputForm from "@/component/sign/InputForm";
import useValidate from "@/hooks/useValidate";
import { axiosInstance } from "@/apis/axiosInstance";
import { AnimatePresence, motion } from "framer-motion";
import { AxiosError } from "axios";
import useModalStore from "@/store/useModalStore";


export default function Login() {

  const emailReg = /^[a-zA-Z0-9+-\_.]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;

  const router = useRouter();

  const {
    setIsAccountModalOpen,
  } = useModalStore();

  const [isEmailValid, setIsEmailValid] = useState(true);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [isError, setIsError] = useState(false);

  const handleLogin = async () => {
    try {
      await axiosInstance.post(`${process.env.NEXT_PUBLIC_DOMAIN}/user/login`, {
        userEmail: email,
        userPassword: password,
      })

      router.push('/home');

    } catch (e: unknown) {
      console.log(e)
      if (e instanceof AxiosError && (e.response?.data?.code === 'USER502' || e.response?.data?.code === 'USER503')) {
        setIsError(true)
      }
    }
  }

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && email.trim() !== "" && password.trim() !== "") {
      handleLogin();
    }
  }

  useValidate(
    emailReg.test(email),
    setIsEmailValid,
    [email]
  )

  useEffect(() => {
    setIsError(false)
  }, [email, password])

  useEffect(() => {
    setIsAccountModalOpen(false);
  }, [])

  return (
    <div className={`w-screen h-screen flex flex-col items-center justify-center gap-5`}>
      <div className={`w-[40%] max-w-[500px] flex flex-col items-center gap-10`}>
        <Logo className={`cursor-pointer`} onClick={() => router.push('/')} />

        <div className="flex flex-col w-full items-center">
          <div className={`flex flex-col gap-8 w-full`}>
            <InputForm
              title={"이메일"}
              placeholder={"이메일을 입력해주세요"}
              error={"이메일을 확인해주세요"}
              value={email}
              setValue={setEmail}
              isValid={isEmailValid}
              handleKeyDown={handleKeyDown} />

            <div className={`flex flex-col gap-2 `}>
              <p className={`text-display-24-b`}>비밀번호</p>
              <input
                className={`border-b border-gray-500 text-body-16-r pb-1 placeholder:text-gray-300`}
                type="password"
                placeholder="비밀번호를 입력해주세요"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                onKeyDown={handleKeyDown} />
            </div>
          </div>
          <AnimatePresence>
          {isError &&
            <motion.p
              initial={{ height: 0, opacity: 0, paddingTop: 0 }}
              animate={{ height: 54.4, opacity: 1, paddingTop:40 }}
              exit={{ height: 0, opacity: 0, paddingTop:0 }}
              transition={{ duration: 0.3 }}
              className="text-subhead-12-sb text-[#FF5D5D]">이메일 또는 비밀번호를 확인해주세요
            </motion.p>
          }
        </AnimatePresence>
        </div>
        
        <div className={`flex flex-col gap-[60px] w-full`}>
          <div className={`flex flex-col gap-5 w-full`}>
            <button
              className={`self-center rounded bg-point text-gray-900 w-full h-[48px] disabled:bg-gray-500 disabled:text-gray-50`}
              onClick={handleLogin}
              disabled={!isEmailValid || password.trim() === ""}>
              로그인
            </button>
            <div className={`flex gap-2.5 items-center justify-center`}>
              <p className={`text-body-16-r`}>계정이 없으신가요?</p>
              <p
                className={`text-subhead-16-sb text-point cursor-pointer`}
                onClick={() => router.push('/signup')}>회원가입</p>
            </div>
          </div>

          <div className={`flex gap-5 w-full justify-center`}>
            <button className={`w-[42.5px] h-[42.5px] flex justify-center items-center bg-[#FEE500] rounded-full text-center content-center`}>
              <KakaoIcon className={`w-[22.5px]`} />
            </button>
            <button className={`w-[42.5px] h-[42.5px] flex justify-center items-center bg-white rounded-full text-center content-center`}>
              <GoogleIcon className={`w-[22.5px]`} />
            </button>
            <button className={`w-[42.5px] h-[42.5px] flex justify-center items-center bg-[#03C75A] rounded-full text-center content-center`}>
              <NaverIcon className={`w-[20px]`} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
