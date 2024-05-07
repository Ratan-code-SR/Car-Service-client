import axios from "axios";
import { useContext, useEffect } from "react";
import { AuthContext } from "../components/provider/ContextProvider";
import { useNavigate } from "react-router-dom";




const axiosSecure = axios.create({
    baseURL: 'https://car-service-server-ochre.vercel.app',
    withCredentials: true
})


const useAxiosSecure = () => {
    const { logOut } = useContext(AuthContext)
    const navigate = useNavigate()
    useEffect(() => {
        axiosSecure.interceptors.response.use(res => {
            return res;
        }, error => {
            console.log("error take in the interceptors", error.response);
            if (error.response.status === 401 || error.response.status === 403) {
                console.log("logout the user");
                logOut()
                    .then(() => {
                        navigate("/login")
                    })
                    .catch(error => {
                        console.log(error);
                    })

            }
        }
        )

    }, [])
    return axiosSecure;
};

export default useAxiosSecure;