import { Link } from "react-router-dom";

const DefaultNavLinks = () => {

    return(
        <>
            <li className="nav-item">
                <Link className="btn btn-outline-success me-2 mt-1" to="/get-in"><i className="bi bi-box-arrow-in-right"></i> Get in</Link>
            </li>
            <li className="nav-item">
                <Link className="btn btn-outline-success me-2 mt-1" to="/register"><i className="bi bi-pen"></i> Register</Link>
            </li>
        </>
    )
}
export default DefaultNavLinks;