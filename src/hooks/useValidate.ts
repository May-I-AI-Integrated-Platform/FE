import { Dispatch, SetStateAction, useEffect } from "react"

const useValidate = (
  isValid: boolean,
  setValid: Dispatch<SetStateAction<boolean>>,
  dependencies: unknown[],
) => {
  useEffect(() => {
    if (isValid) {
      setValid(true)
    } else {
      setValid(false)
    }
  }, dependencies)
}

export default useValidate;