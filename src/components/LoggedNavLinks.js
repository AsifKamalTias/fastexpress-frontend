import { Link } from "react-router-dom";
import axiosConfig from "./axiosConfig"
const LoggedNavLinks = () => {

    const getOut = () => {
        axiosConfig.post("/client/get-out").then
        ((rsp) => {
            localStorage.removeItem('_authToken');
            window.location.href = "/get-in";
        } , (err) => {
            console.log(err);
        })

    }

    return(
        <>
            <li className="nav-item">
                <Link className="nav-link" to="/profile">Profile</Link>
            </li>
            <li className="nav-item">
                <button className="nav-link" style={{background: "none", border: "none"}} onClick={getOut}>Get out</button>
            </li>
        </>
    )
}
export default LoggedNavLinks;