import { useState } from "react";
import {Link} from 'react-router-dom';
import axiosConfig from '../../components/axiosConfig';
import { Button, Spinner } from "react-bootstrap";

import ClientNav from "../../components/ClientNav";
import ToastView from "../../components/ToastView";
import Footer from "../../components/Footer";

const GetIn = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const handleGetIn = (e) => {
        e.preventDefault();
        setIsLoading(true);
        const data = {
            email,
            password,
        };
        // axios.post('http://127.0.0.1:8000/api/client/getin', data)
        // .then(success => {
        //     localStorage.setItem('token', success.data.token);
        //     setIsLoading(false);
        //     window.location.href = "/profile";
        // }).catch(error => {
        //     setError(error.response.data);
        //     setIsLoading(false);
        // }
        // );
        axiosConfig.post("client/getin", data)
        .then(
            (success)=>{
                localStorage.setItem('_authToken', success.data.token);
                setIsLoading(false)
                window.location.href = '/profile';
            },
            (error)=>{
                setError('Invalid email or password!');
                setIsLoading(false);
            }
        )
    }

    return (
        <>
            <ClientNav></ClientNav>
            <section className="mt-5">
                <div className="container-fluid h-custom">
                    <div className="row d-flex justify-content-center align-items-center h-100">
                        <div className="col-md-9 col-lg-6 col-xl-5">
                            <h1>Get in</h1>
                            <br/><br/>
                        </div>
                        <div className="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
                            {/* @if(Session()->has('invalid-auth'))
                                <p class="text-danger">{{Session::get('invalid-auth')}}</p>
                            @endif
                            @if(Session()->has('password-changed'))
                                <p class="text-success">{{Session::get('password-changed')}}</p>
                            @endif */}
                            {error !== ''? <div className="alert alert-danger">{error}</div>:''}
                            <br/><br/>
                            <form onSubmit={handleGetIn} method="POST">
                                <div className="form-outline mb-4">
                                    <label className="form-label">Email address</label>
                                    <input type="email" className="form-control form-control-lg" value={email} onChange={(e)=>{setEmail(e.target.value)}}
                                        placeholder="Enter a valid email address"/>
                                        <span className='input-err'>{error.email? error.email[0]:''}</span>
                                </div>
                                <div className="form-outline mb-3">
                                    <label className="form-label">Password</label>
                                    <input type="password" className="form-control form-control-lg" value={password} onChange={(e)=>{setPassword(e.target.value)}}
                                        placeholder="Enter password" />
                                        <span className='input-err'>{error.password? error.password[0]:''}</span>
                                </div>
            
                                <div className="d-flex justify-content-between align-items-center">
                                    {/* <!-- Checkbox -->
                                    <!--
                                    <div class="form-check mb-0">
                                        <input class="form-check-input me-2" type="checkbox" name="remember" value="remember" checked/>
                                        <label class="form-check-label" for="remember">
                                        Remember me
                                        </label>
                                    </div>
                                    --> */}
                                    <Link to="/client/forgot-pass" className="text-body">Forgot password?</Link>
                                </div>
            
                                <div className="text-center text-lg-start mt-4 pt-2">
                                    <Button className="btn btn-success btn-lg" type="submit" variant="success" disabled={isLoading}>{isLoading && <Spinner as="span" className="me-2" animation="border" size="sm" role="status" aria-hidden="true"/>} Get in</Button>    
                                    <p className="small fw-bold mt-2 pt-1 mb-0">Don't have an account? <Link to="/register"
                                        className="link-danger">Register</Link></p>
                                </div>            
                            </form>
                        </div>
                    </div>
                </div>
                <br/><br/>
            </section>
            <Footer></Footer>
            {localStorage.getItem("notification") !== null ? <ToastView message={localStorage.getItem('notification')}></ToastView> : ""}
        </>
    );
}

export default GetIn;