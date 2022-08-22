import { Link } from "react-router-dom";
const LoggedNavLinks = () => {


    return(
        <>
            <li className="nav-item mt-1 ms-2">
                <Link className="btn btn-outline-success btn-md" to="/profile"><i className="bi bi-person-circle"></i> Profile</Link>
            </li>
        </>
    )
}
export default LoggedNavLinks;