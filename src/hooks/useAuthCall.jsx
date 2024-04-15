import axios from "axios"
import {toastErrorNotify , toastSuccessNotify } from "../helper/ToastNotify"
import { useNavigate } from "react-router-dom"
import { useDispatch } from "react-redux"
import { fetchFail, fetchStart, loginSuccess, logoutSuccess } from "../features/authSlice"


//? Bir hook sadece bir react component ve bir custom hook icersinde cagrilabilir. Bir Js fonksiyonu icerisinde hook cagiralamaz.

const useAuthCall=() =>{

    const navigate = useNavigate()
    const dispatch = useDispatch()


 const login = async (userData) => {
  
console.log(import.meta.env.VITE_API_KEY);
  

  dispatch(fetchStart())
  try {
    const { data } = await axios.post(
      `${import.meta.env.VITE_BASE_URL}/account/auth/login/`,
      userData
    )
    dispatch(loginSuccess(data))
    toastSuccessNotify("login islemi basarili")
    navigate("/stock")
  } catch (error) {
    console.log(error)
    dispatch(fetchFail())
    toastErrorNotify("login islemi basarısız")

  }
}

const logout = async () => {
  


  dispatch(fetchStart())
  try {
     await axios.post(
      `${import.meta.env.VITE_BASE_URL}/account/auth/logout/`)
    dispatch(logoutSuccess())
    toastSuccessNotify("logout islemi basarili")
    navigate("/")
  } catch (error) {
    console.log(error.message)
    dispatch(fetchFail())
    toastErrorNotify(error.response.data.non_field_errors[0])

  }
}

return {login, logout}
}

export default useAuthCall;