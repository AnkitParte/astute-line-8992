import { useEffect } from "react";
import { useSelector } from "react-redux"
import { useNavigate } from "react-router-dom";


export default function PrivateRoute({ children }) {
    const { isAuth } = useSelector((store) => store.auth);
    const navigate = useNavigate();
    console.log(isAuth)

    useEffect(() => {
        if (!isAuth) {
            return navigate("/login");
        }
    }, [isAuth])
    //setTimeout(()=>{
        return children
    //},500)
    
}