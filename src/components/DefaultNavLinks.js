import { Link } from "react-router-dom";

const DefaultNavLinks = () => {

    return(
        <>
            <li className="nav-item">
                <Link className="nav-link" to="/get-in">Get in</Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link" to="/register">Register</Link>
            </li>
        </>
    )
}
export default DefaultNavLinks;