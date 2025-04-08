'use client'

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Logo } from "../../../../public/svgs";
import InputForm from "@/component/sign/InputForm";
import useValidate from "@/hooks/useValidate";


export default function Signup() {

  const router = useRouter();

  const emailReg = /^[a-zA-Z0-9+-\_.]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
  const passwordReg = /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,15}$/

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordValid, setPasswordValid] = useState("");

  const [isNameValid, setIsNameValid] = useState(true);
  const [isEmailValid, setIsEmailValid] = useState(true);
  const [isPasswordValid, setIsPasswordValid] = useState(true);
  const [isPasswordSame, setIsPasswordSame] = useState(true);


  const handleSignup = () => {
    router.push('/')
  }

  useValidate(
    name.length > 1,
    setIsNameValid,
    [name]
  )

  useValidate(
    emailReg.test(email),
    setIsEmailValid,
    [email]
  )

  useValidate(
    passwordReg.test(password),
    setIsPasswordValid,
    [password]
  )

  useValidate(
    password === passwordValid,
    setIsPasswordSame,
    [password, passwordValid]
  )

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && name.trim() !== "" && email.trim() !== "" && password.trim() !== "" && passwordValid.trim() !== "") {
      handleSignup();
    }
  }

  return (
    <div className={`w-screen h-screen flex flex-col items-center justify-center gap-5`}>
      <div className={`w-[40%] max-w-[500px] flex flex-col gap-10 items-center`}>
        <Logo className={`cursor-pointer`} onClick={() => router.push('/')} />
        <div className={`flex flex-col gap-8 w-full`}>

          <InputForm
            title={"이름"}
            placeholder={"이름을 입력해주세요"}
            error={"이름은 2자 이상이어야 합니다"}
            value={name}
            setValue={setName}
            isValid={isNameValid}
            handleKeyDown={handleKeyDown} />

          <InputForm
            title={"이메일"}
            placeholder={"이메일을 입력해주세요"}
            error={"이메일을 확인해주세요"}
            value={email}
            setValue={setEmail}
            isValid={isEmailValid}
            handleKeyDown={handleKeyDown} />

          <InputForm
            title={"비밀번호"}
            placeholder={"비밀번호를 입력해주세요"}
            error={"비밀번호는 영문/숫자/특수기호 조합 8자리 이상이어야 합니다"}
            value={password}
            setValue={setPassword}
            isValid={isPasswordValid}
            handleKeyDown={handleKeyDown}
            isPassword={true} />

          <InputForm
            title={"비밀번호 확인"}
            placeholder={"비밀번호를 재입력해주세요"}
            error={"비밀번호가 일치하지 않습니다"}
            value={passwordValid}
            setValue={setPasswordValid}
            isValid={isPasswordSame}
            handleKeyDown={handleKeyDown}
            isPassword={true} />

        </div>
        <div className={`flex flex-col gap-5 w-full`}>
          <button
            className={`self-center rounded bg-point text-gray-900 w-full h-[48px] disabled:bg-gray-500 disabled:text-gray-50`}
            disabled={
              name.trim() === "" ||
              email.trim() === "" || !isEmailValid ||
              password.trim() === "" || !isPasswordValid ||
              passwordValid.trim() === "" || !isPasswordSame}
            onClick={handleSignup}>
            확인
          </button>
        </div>
      </div>
    </div>
  );
}
