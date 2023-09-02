import { useState } from "react"

const useSignup = () => {
  const [ isSuccess, setSuccess ] = useState(false)
  const [ error, setError ] = useState("")
  const [ isLoading, setLoading ] = useState(false)

  return { isSuccess, error, isLoading }
}

export default useSignup
