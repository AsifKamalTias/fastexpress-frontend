import { useEffect, useState } from 'react';
import ClientFaq from '../components/ClientFaq';
import ClientNav from '../components/ClientNav';
import Feature from '../components/Feature';
import Footer from '../components/Footer';
import Hero from '../components/Hero';
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
        <ClientNav></ClientNav>
        <div>
            <Hero></Hero>
            <section id="feature" className="container mt-5">
                <div className="d-flex justify-content-center align-items-center mt-5">
                    <Feature featureName="Fast" featureIcon="bi bi-truck fs-4"></Feature>
                    <Feature featureName="Secure" featureIcon="bi bi-shield-lock fs-4"></Feature>
                    <Feature featureName="Trust" featureIcon="bi bi-heart fs-4"></Feature>
                </div>
            </section>
            <div className="container py-5">
                <div className='row'>
                    <div className='col-lg-6'>
                        <h3 className="mb-4">FAQ</h3>
                        <ClientFaq></ClientFaq>
                    </div>
                    <div className='col-lg-6'>
                        <div className='container d-flex flex-column justify-content-center align-items-center align-content-center text-center mt-5 w-75'>
                            <h3 className='fs-1'>Currently available in Dhaka & Chattogram</h3><br/>
                            <p className='fs-5'>We are currently available in Dhaka and Chattogram. We are constantly expanding to more places! Parcel will cover more places soon.</p>
                        </div>
                    </div>
                </div>
            </div>
            <section id='news-letter'>
                <NewsLetter></NewsLetter>
            </section>
        </div>
        <Footer></Footer>
        {notification ? <ToastView message={localStorage.getItem('notification')}></ToastView> : ""}
    </>
);
}
export default Home;