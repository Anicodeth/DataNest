import { useState } from "react"
import { register } from "../authService"

// credentials is an object in the format { username: string, email: string, password: string }
const useSignUp = () => {
  const [ isSuccess, setSuccess ] = useState(false)
  const [ error, setError ] = useState("")
  const [ isLoading, setLoading ] = useState(false)

  const signUp = async (credentials) => {
    setError(false)
    setLoading(true)

    await register(credentials)
    .then((res) => {
      setLoading(false)
      setSuccess(true)
      console.log(res)
    }).catch((error) => {
      setLoading(false)
      setSuccess(false)
      console.log(error);
      setError(error.message)
    })
  }

  return { isSuccess, error, isLoading, signUp }
}

export default useSignUp
