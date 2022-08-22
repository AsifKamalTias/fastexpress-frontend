import { useState } from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
import { Spinner, Button } from 'react-bootstrap';
const RegisterForm = () => {
    const [name, setName] = useState('');
    const [address, setAddress] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [retypePassword, setRetypePassword] = useState('');
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState();

    const handleRegistration = (e) => {
        e.preventDefault();
        setIsLoading(true);
        const data = {
            name,
            address,
            email,
            password,
            retypePassword,
        };
        axios.post('http://127.0.0.1:8000/api/client/register', data)
        .then(success => {
            localStorage.setItem('registrationQueue', email);
            setIsLoading(false);
            window.location.href = "/register";
        }, (error) => {
            setError(error.response.data);
            setIsLoading(false);
        });
    }
    return (
        <div>
            <section className="mb-5 mt-5">
                <div className="container-fluid h-custom">
                    <div className="row d-flex justify-content-center align-items-center h-100">
                        <div className="col-md-9 col-lg-6 col-xl-5">
                            <h1>Registration</h1>
                        </div>
                            <div className="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
                                <br/><br/>
                                <form method="POST" action="" onSubmit={handleRegistration} className="auth-form">                                
                                    <div>
                                        <label htmlFor="name">Name</label><br/>
                                        <input type="text" value={name} onChange={(e)=>{setName(e.target.value)}} placeholder="Enter your name"></input><br/>
                                        <span className='input-err'>{error.name? error.name[0]:''}</span>
                                        <br/>
                                    </div>
                                    <div>
                                        <label htmlFor="address">Address</label><br/>
                                        <input type="text" value={address} onChange={(e)=>{setAddress(e.target.value)}} placeholder="Enter your address"></input><br/>
                                        <span className='input-err'>{error.address? error.address[0]:''}</span>
                                        <br/>
                                    </div>
                                    <div>
                                        <label htmlFor="email">Email</label><br/>
                                        <input type="text" value={email} onChange={(e)=>{setEmail(e.target.value)}} placeholder="Enter your email"></input><br/>
                                        <span className='input-err'>{error.email? error.email[0]:''}</span>
                                        <br/>
                                    </div>
                                    <div>
                                        <label htmlFor="password">Password</label><br/>
                                        <input type="password" value={password} onChange={(e)=>{setPassword(e.target.value)}} placeholder="Enter password"></input><br/>
                                        <span className='input-err'>{error.password? error.password[0]:''}</span>
                                        <br/>
                                    </div>
                                    <div>
                                        <label htmlFor="retype_password">Retype Password</label><br/>
                                        <input type="password" value={retypePassword} onChange={(e)=>{setRetypePassword(e.target.value)}} placeholder="Retype password"></input><br/>
                                        <span className='input-err'>{error.retypePassword? error.retypePassword[0]:''}</span>
                                        <br/><br/>
                                    </div>
                                    <Button className="code-input" type="submit" variant="success" disabled={isLoading}>{isLoading && <Spinner as="span" className="me-2" animation="border" size="sm" role="status" aria-hidden="true"/>} Register</Button>
                                </form>
                                <br/>
                                <p className="small fw-bold mt-2 pt-1 mb-0">Already have an account? <Link to="/get-in" className="link-danger">Get in</Link></p>
                            </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default RegisterForm;