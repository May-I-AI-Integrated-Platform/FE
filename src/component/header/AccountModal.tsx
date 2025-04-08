import useUserStore from "@/store/useUserStore";
import { AccountIcon, ExitIcon } from "../../../public/svgs"
import { axiosInstance } from "@/apis/axiosInstance";
import { useRouter } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import useModalStore from "@/store/useModalStore";

const AccountModal = () => {

  const {
    userEmail,
    userName,
  } = useUserStore();

  const {
    isAccountModalOpen,
    setIsAccountModalOpen,
  } = useModalStore();

  const router = useRouter();

  const logOut = async () => {
    try {
      await axiosInstance.post(`${process.env.NEXT_PUBLIC_DOMAIN}/user/logout`)
      router.push('/');
    } catch (error) {
      router.push('/');
    }
  }

  return (
    <AnimatePresence>
      {isAccountModalOpen &&
        <motion.div
          initial={{ height: 100, opacity: 0 }}
          animate={{ height: 232, opacity: 1 }}
          exit={{ height: 100, opacity: 0 }}
          transition={{ duration: 0.6 }}
          onMouseOver={() => setIsAccountModalOpen(true)}
          onMouseOut={() => setIsAccountModalOpen(false)}

          className="flex flex-col justify-center gap-5 items-center px-5 pb-5 absolute top-[80px] right-[40px] rounded-[8px] text-gray-50 bg-gray-600 overflow-hidden">
          
          <AccountIcon className={`w-[60px] pt-5`} />
          
          <div className={`flex flex-col gap-2.5 items-start w-full gao-2.5 text-subhead-16-sb`}>
            <p>{userEmail ? userEmail : "example@naver.com"}</p>
            <p className={`text-gray-300`}>{userName ? userName : "이름"}</p>
          </div>
          <button
            className={`text-gray-50 bg-[#FF5D5D] rounded py-2 w-full flex justify-center`}
            onClick={logOut}>
            <ExitIcon className={`w-4`} />
          </button>
        </motion.div>
      }
    </AnimatePresence>
  )
}

export default AccountModal;