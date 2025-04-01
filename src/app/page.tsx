export default function Login() {
  return (
    <div className={`w-screen h-screen flex flex-col items-center justify-center gap-5`}>
      <p className={`jersey text-[96px]`}>May I</p>

      <div className={`flex flex-col gap-15 w-full items-center`}>
        {/* 이메일/비밀번호 */}
        <div className={`w-[60%] max-w-[600px]`}>
          <div className={`flex flex-col gap-4`}>
            <div className={`flex flex-col gap-2 `}>
              <p className={`text-display-24-b`}>이메일</p>
              <input
                className={`border-b border-gray-50 text-body-16-r pb-1`}
                placeholder="이메일을 입력해주세요" />
            </div>
            <div className={`flex flex-col gap-2 `}>
              <p className={`text-display-24-b`}>비밀번호</p>
              <input
                className={`border-b border-gray-50 text-body-16-r pb-1`}
                type="password"
                placeholder="비밀번호를 입력해주세요" />
            </div>
          </div>
        </div>

        <div className={`flex gap-4`}>
          <button className={`self-center rounded bg-gray-500 w-[150px] h-[48px]`}>로그인</button>
          <button className={`self-center rounded bg-gray-500 w-[150px] h-[48px]`}>회원가입</button>
        </div>

        <div className={`flex flex-col gap-3`}>
          <div className={`bg-[#FEE500] rounded w-[320px] h-[48px] self-center text-center content-center`}>
            <p className={`text-subhead-16-sb text-gray-900`}>카카오 로그인</p>
          </div>

          <div className={`bg-white rounded w-[320px] h-[48px] self-center text-center content-center`}>
            <p className={`text-subhead-16-sb text-gray-900`}>구글 로그인</p>
          </div>

          <div className={`bg-[#03C75A] rounded w-[320px] h-[48px] self-center text-center content-center`}>
            <p className={`text-subhead-16-sb text-white`}>네이버 로그인</p>
          </div>

        </div>

      </div>
    </div>
  );
}
