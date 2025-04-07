import { AnimatePresence, motion } from "framer-motion";

interface InputFormProps {
  title: string;
  placeholder: string;
  error: string;
  value: string;
  setValue: (value: string) => void;
  isValid: boolean;
  handleKeyDown: (e: React.KeyboardEvent<HTMLInputElement>) => void;
  isPassword?: boolean;
}

const InputForm:React.FC<InputFormProps> = ({
  title,
  placeholder,
  error,
  value,
  setValue,
  isValid,
  handleKeyDown,
  isPassword,
}) => {

  return (
    <div>
      <div className={`flex flex-col gap-2 `}>
        <p className={`text-display-24-b`}>{title}</p>
        <input
          className={`border-b border-gray-500 text-body-16-r pb-1 placeholder:text-gray-300`}
          placeholder={placeholder}
          value={value}
          onChange={(e) => setValue(e.target.value)}
          onKeyDown={handleKeyDown} 
          type={isPassword ? `password` : `text`}/>
      </div>
      <AnimatePresence>
        {!isValid && value.trim() !== "" &&
          <motion.p
            initial={{ height: 0, opacity: 0, paddingTop: 0, }}
            animate={{ height: 23.2, opacity: 1, paddingTop: 10 }}
            exit={{ height: 0, opacity: 0, paddingTop: 0 }}
            transition={{ duration: 0.3 }}
            className="text-subhead-12-sb text-[#FF5D5D]">{error}
          </motion.p>
        }
      </AnimatePresence>
    </div>
  )
}

export default InputForm;