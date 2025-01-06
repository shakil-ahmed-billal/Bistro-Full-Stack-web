import axios from "axios"
import { useNavigate } from "react-router-dom"
import useAuth from "./useAuth"



const axiosSecure = axios.create({
  baseURL: "http://localhost:5000",
})

const useAxiosSecure = () => {


  // user hooks
  const { LogOutUser } = useAuth()
  const navigate = useNavigate()

  // axios request send for server
  axiosSecure.interceptors.request.use((config) => {

    // request interceptor to add authorization header for every secure call api
    const token = localStorage.getItem('token')
    config.headers.authorization = `Bearer ${token}`
    return config
  })


  // axios response for server data or error
  axiosSecure.interceptors.response.use((res) => {
    // user response for valid then return
    return res
  }, async (err) => {
    // user response for error den logout
    console.log('error for interceptor', err)
    const status = err.response.status;
    if (status === 401 || status === 403) {
      await LogOutUser()
      navigate('/login')
    }
    return Promise.reject(err)
  })
  return axiosSecure
}

export default useAxiosSecure
