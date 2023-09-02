import { useState } from "react"
import { logIn } from "../authService"

// credentials is an object in the format { username: string, password: string }
const useSignIn = () => {
  const [ user, setUser ] = useState(null)
  const [ isSuccess, setSuccess ] = useState(false)
  const [ error, setError ] = useState("")
  const [ isLoading, setLoading ] = useState(false)

  const signIn = async (credentials) => {
    setError(false)
    setLoading(true)
    setSuccess(false)

    await logIn(credentials)
    .then((res) => {
      setLoading(false)
      setSuccess(true)
      setUser(res.user)
    }).catch((error) => {
      setLoading(false)
      setError(error.message)
    })
  }

  return { user, isSuccess, error, isLoading, signIn }
}

export default useSignIn
