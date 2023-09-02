import { getUserFromLocalStorage } from "../authService"

const useUser = () => {
  return getUserFromLocalStorage();
}

export default useUser

