'use client'

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Logo } from "../../../public/svgs";


export default function Signup() {

  const router = useRouter();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordValid, setPasswordValid] = useState("");

  const handleSignup = () => {
    router.push('/')
  }

  return (
    <div className={`w-screen h-screen flex flex-col items-center justify-center gap-5`}>
      <div className={`w-[40%] max-w-[500px] flex flex-col gap-10`}>
        <Logo className={`cursor-pointer`} onClick={() => router.push('/')} />
        <div className={`flex flex-col gap-2 `}>
          <p className={`text-display-24-b`}>이름</p>
          <input
            className={`border-b border-gray-500 text-body-16-r pb-1 placeholder:text-gray-300`}
            placeholder="이름을 입력해주세요"
            value={name}
            onChange={(e) => setName(e.target.value)} />
        </div>
        <div className={`flex flex-col gap-8 w-full`}>
          <div className={`flex flex-col gap-2 `}>
            <p className={`text-display-24-b`}>이메일</p>
            <input
              className={`border-b border-gray-500 text-body-16-r pb-1 placeholder:text-gray-300`}
              placeholder="이메일을 입력해주세요"
              value={email}
              onChange={(e) => setEmail(e.target.value)} />
          </div>
          <div className={`flex flex-col gap-2 `}>
            <p className={`text-display-24-b`}>비밀번호</p>
            <input
              className={`border-b border-gray-500 text-body-16-r pb-1 placeholder:text-gray-300`}
              type="password"
              placeholder="비밀번호를 입력해주세요"
              value={password}
              onChange={(e) => setPassword(e.target.value)} />
          </div>
          <div className={`flex flex-col gap-2 `}>
            <p className={`text-display-24-b`}>비밀번호 확인</p>
            <input
              className={`border-b border-gray-500 text-body-16-r pb-1 placeholder:text-gray-300`}
              type="password"
              placeholder="비밀번호를 재입력해주세요"
              value={passwordValid}
              onChange={(e) => setPasswordValid(e.target.value)} />
          </div>
        </div>

        <div className={`flex flex-col gap-[60px]`}>
          <div className={`flex flex-col gap-5 w-full`}>
            <button
              className={`self-center rounded bg-point text-gray-900 w-full h-[48px] disabled:bg-gray-500 disabled:text-gray-50`}
              disabled={
                name.trim() === "" ||
                email.trim() === "" || 
                password.trim() === "" || 
                passwordValid.trim() === ""}
              onClick={handleSignup}>
              확인
            </button>
          </div>

        </div>
      </div>
    </div>
  );
}
