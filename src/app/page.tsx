'use client'

import { useState } from "react";
import { GoogleIcon, KakaoIcon, Logo, NaverIcon } from "../../public/svgs"
import { useRouter } from "next/navigation";


export default function Login() {

  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    router.push('/home')
  }

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && email.trim() !== "" && password.trim() !== "") {
      handleLogin();
    }
  }

  return (
    <div className={`w-screen h-screen flex flex-col items-center justify-center gap-5`}>
      <div className={`w-[40%] max-w-[500px] flex flex-col gap-10`}>
        <Logo className={`cursor-pointer`} onClick={() => router.push('/')}/>

        <div className={`flex flex-col gap-8 w-full`}>
          <div className={`flex flex-col gap-2 `}>
            <p className={`text-display-24-b`}>이메일</p>
            <input
              className={`border-b border-gray-500 text-body-16-r pb-1 placeholder:text-gray-300`}
              placeholder="이메일을 입력해주세요"
              value={email}
              onChange={(e) => setEmail(e.target.value)} 
              onKeyDown={handleKeyDown}/>
          </div>
          <div className={`flex flex-col gap-2 `}>
            <p className={`text-display-24-b`}>비밀번호</p>
            <input
              className={`border-b border-gray-500 text-body-16-r pb-1 placeholder:text-gray-300`}
              type="password"
              placeholder="비밀번호를 입력해주세요"
              value={password}
              onChange={(e) => setPassword(e.target.value)} 
              onKeyDown={handleKeyDown}/>
          </div>
        </div>

        <div className={`flex flex-col gap-[60px]`}>
          <div className={`flex flex-col gap-5 w-full`}>
            <button
              className={`self-center rounded bg-point text-gray-900 w-full h-[48px] disabled:bg-gray-500 disabled:text-gray-50`}
              onClick={handleLogin}
              disabled={email.trim() === "" || password.trim() === ""}>
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
