import { useEffect, useState } from "react"
import { login } from "../authService"

// credentials is an object in the format { username: string, password: string }
const useSignIn = () => {
  const [ isSuccess, setSuccess ] = useState(false)
  const [ error, setError ] = useState("")
  const [ isLoading, setLoading ] = useState(false)

  const signIn = async (credentials) => {
    setError(false)
    setLoading(true)

    await login(credentials)
    .then((res) => {
      setLoading(false)
      setSuccess(true)
      console.log(res)
    }).catch((error) => {
      setLoading(false)
      setSuccess(false)
      setError(error.message)
    })
  }

  return { isSuccess, error, isLoading, signIn }
}

export default useSignIn
