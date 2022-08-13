import { useEffect, useState } from 'react';
import ClientNav from '../components/ClientNav';
import Footer from '../components/Footer';
import NewsLetter from '../components/NewsLetter';
import ToastView from '../components/ToastView';
const Home = () => {

    const [notification, setNotification] = useState(false);

    useEffect(() => {
        if (localStorage.getItem("notification") !== null) {
            setNotification(true);
        }
    } , [notification]);

    return (
    <>
        <ClientNav />
        {notification ? <ToastView message={localStorage.getItem('notification')}></ToastView> : ""}
        <div>
            <div className="container my-5">
                <div className="row p-4 pb-0 pe-lg-0 pt-lg-5 align-items-center rounded-3 border shadow-lg">
                <div className="col-lg-7 p-3 p-lg-5 pt-lg-3">
                    <h1 className="display-4 fw-bold lh-1">Send loves anytime anywhere.</h1>
                    <p className="lead">#1 Parcel and Courier Service in Bangladesh. Send parcels securely & quickly.</p>
                </div>
                </div>
            </div>

            <section id="feature" className="container mt-4 mb-4">
                <div className="d-flex justify-content-center align-items-center mt-5">
                <div className="feature-item d-flex flex-column justify-content center shadow p-3 mb-5 bg-white rounded mx-2">
                    <div className="icon m-auto"><i className="bi bi-truck fs-4"></i></div>
                    <div className="text-center"><h6>Fast</h6></div>
                </div>
                <div className="feature-item d-flex flex-column justify-content center shadow p-3 mb-5 bg-white rounded mx-2">
                    <div className="icon m-auto"><i className="bi bi-shield-lock fs-4"></i></div>
                    <div className="text-center"><h6>Secure</h6></div>
                </div>
                <div className="feature-item d-flex flex-column justify-content center shadow p-3 mb-5 bg-white rounded mx-2">
                    <div className="icon m-auto"><i className="bi bi-heart fs-4"></i></div>
                    <div className="text-center"><h6>Trust</h6></div>
                </div>
                </div>
            </section>
            <NewsLetter></NewsLetter>
        </div>
        <Footer></Footer>
    </>
);
}
export default Home;