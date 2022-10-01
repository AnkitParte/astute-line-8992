import { useSelector } from "react-redux"
import { useNavigate } from "react-router-dom";


export default function PrivateRoute({children}){
    const {isAuth} = useSelector((store)=>store.auth);
    const navigate = useNavigate();
    if(!isAuth){
        navigate("/");
    }
    return children
}