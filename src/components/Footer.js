import {Link} from 'react-router-dom';
const Footer = () =>{
    return(
        <>
            <footer>
                <div className="footer-bg p-5 text-white">
                    <div className="container text-white d-flex justify-content-around">
                    <div>
                        <Link to="/about">About</Link>
                        <Link to="/contact">Contact</Link>
                        <Link to="/feedback">Feedback</Link>
                    </div>
                    <div>
                        <Link to="/how-it-works">How it works</Link>
                        <Link to="/faq">FAQ</Link>
                        <Link to="/terms-conditions">Terms & Conditions</Link>
                    </div>
                    <div>
                        <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">Facebook</a>
                        <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">Instagram</a>
                        <a href="https://www.youtube.com/" target="_blank" rel="noopener noreferrer">Youtube</a>
                    </div>
                    </div>   
                    <div className="d-flex justify-content-center mt-5">
                        <Link to="/delivery-man" className="btn btn-success">Join as Deliveryman</Link>
                    </div>
                    <hr/>
                    <div className="d-flex justify-content-center text-white mt-3">
                        <p>&copy; {new Date().getFullYear()} FastExpress. All rights reserved.</p>
                    </div>    
                </div>
            </footer>
        </>
    );
}

export default Footer;