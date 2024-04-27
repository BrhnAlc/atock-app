import { useDispatch, useSelector } from "react-redux"
import { fetchFail, fetchStart ,getFirmsSuccess,getSalesSuccess} from "../features/authSlice"
import axios from "axios"


const useStockCall = () => {
    const { token } = useSelector((state) => state.auth)
    const dispatch = useDispatch()

    const getFirms = async () => {
        
        dispatch(fetchStart())


        try {
          const { data } = await axios(`${import.meta.VITE_BASE_URL}/stock/firms/`,
           {
            headers: { Authorization: `Token ${token}` },
          })
          dispatch(getFirmsSuccess(data))
        } catch (error) {
          dispatch(fetchFail())
          console.error("Firms fetching error:", error) // Hata durumunda kullanıcıya geri bildirim sağlamak için konsola loglayın
        }
      }

      const getSales = async () => {
        
        dispatch(fetchStart())


        try {
          const { data } = await axios(`${import.meta.VITE_BASE_URL}/stock/sales/`,
           {
            headers: { Authorization: `Token ${token}` },
          })
          dispatch(getSalesSuccess(data))
        } catch (error) {
          dispatch(fetchFail())
          console.error("Sales fetching error:", error) // Hata durumunda kullanıcıya geri bildirim sağlamak için konsola loglayın
        }
      }
  return {getFirms , getSales}
}

export default useStockCall;