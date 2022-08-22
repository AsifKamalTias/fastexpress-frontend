import { useState } from "react";
import axios from "axios";
import { Spinner } from 'react-bootstrap';

const NewsLetter = () => {
    const [email, setEmail] = useState('');
    // const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsLoading(true);
        const data = {
            email
        };
        axios.post('http://127.0.0.1:8000/api/newsletter', data)
        .then(success => {
            localStorage.setItem('notification', 'Thank you for subscribing to our newsletter!');
            setIsLoading(false);
            window.location.href = "/"; 
        }, (error) => {
            // setError(error.response.data);
            setIsLoading(false);
            localStorage.setItem('notification', error.response.data.errors.email[0]);
            window.location.href ="/"; 
        });

    }

    return(
        <>
            <div className="container-fluid bg-light p-4">
                <div className="container">
                    <h3>Newsletter</h3>
                </div>
                <div className="d-flex justify-content-center pb-5">
                    <form method="POST" onSubmit={handleSubmit} className="mt-4">
                        <input type="text" class="track-input" value={email} onChange={(e)=>{setEmail(e.target.value)}} placeholder="Email Address"/>
                        <button type="submit" className="track-btn bg-success text-white border-0" disabled={isLoading}>{isLoading ?<Spinner animation="border" variant="white" size="sm"></Spinner>: <i className="bi bi-arrow-right"></i>}</button>
                    </form>
                </div>
            </div>
        </>
    );
}

export default NewsLetter;