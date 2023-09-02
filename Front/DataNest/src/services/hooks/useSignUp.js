import { useState } from "react"
import { register } from "../authService"

// credentials is an object in the format { username: string, email: string, password: string }
const useSignUp = () => {
  const [ user, setUser ] = useState(null)
  const [ isSuccess, setSuccess ] = useState(false)
  const [ error, setError ] = useState("")
  const [ isLoading, setLoading ] = useState(false)

  const signUp = async (credentials) => {
    setError(false)
    setLoading(true)
    setUser(null)
    setSuccess(false)

    await register(credentials)
    .then((res) => {
      setLoading(false)
      setSuccess(true)
      setUser(res.newUser)
    }).catch((error) => {
      setLoading(false)
      setError(error.message)
    })
  }

  return { user, isSuccess, error, isLoading, signUp }
}

export default useSignUp
