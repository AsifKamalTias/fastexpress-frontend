import {Link} from 'react-router-dom';
import DefaultNavLinks from './DefaultNavLinks';
import LoggedNavLinks from './LoggedNavLinks';
const ClientNav = () => {
    return (
        <>
         <nav className="navbar navbar-expand-lg bg-white shadow-sm">
            <div className="container">
            <Link className="navbar-brand fs-3 text-success" to="/">FastExpress</Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
                <ul className="navbar-nav">
                <li className="nav-item">
                    <Link className="nav-link" aria-current="page" to="/">Home</Link>
                </li>
               {
                localStorage.getItem('_authToken') === null ?
                    <DefaultNavLinks></DefaultNavLinks>
                    :
                    <LoggedNavLinks></LoggedNavLinks>
               }
                <li className="nav-item">
                    <Link className="nav-link" to="/blogs">Blogs</Link>
                </li>
                </ul>
                </div>
            </div>
        </nav>
        </>
    );
}
export default ClientNav;