import { getTokenFromLocalStorage } from "../authService"

const useJwtToken = () => {
  return getTokenFromLocalStorage();
}

export default useJwtToken
