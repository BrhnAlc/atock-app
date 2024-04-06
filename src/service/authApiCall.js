import axios from "axios";
import { toastSuccessNotify } from "../helper/ToastNotify";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";



// Bir hook sadece bir react component ve bir custom hook içerisinde çağrılabilir..Bir js fonksiyonu içerisinde çağıramaz..
export const login = async (userData) => {
  const navigate = useNavigate(); 
  const dispatch = useDispatch();

  const BASE_URL = "https://21105.fullstack.clarusway.com";
  dispatch(fetchStart())
  try {
    const { data } = await axios.post(`${BASE_URL}/account/auth/login/`, userData);
    console.log(data);

    dispatch(loginSuccess(data))

    toastSuccessNotify("Login Performed");

    navigate("/stock"); 
  } catch (error) {
    console.log(error);
    dispatch(fetchFail())

  }
};
