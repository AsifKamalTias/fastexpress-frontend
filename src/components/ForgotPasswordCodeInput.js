import { useState, useEffect } from "react";
import axios from "axios";
import {Spinner, Button} from "react-bootstrap";

const ForgotPasswordCodeInput = () => {

    const [email, setEmail] = useState('');
    const [code, setCode] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState('');

    useEffect(() => {
        if(localStorage.getItem('forgot-password-queue') !== null){
            setEmail(localStorage.getItem('forgot-password-queue'));
        }
    } , []);

    const sendCode = (e) => {
        e.preventDefault();
        setIsLoading(true);
        const data = {
            email: email,
            code: code,
            password: password,
            confirmPassword: confirmPassword
        };
        axios
            .post("http://127.0.0.1:8000/api/client/forgot-password/code", data)
            .then((rsp) => {
                setIsLoading(false);
                setError("");
                localStorage.removeItem("forgot-password-queue");
                localStorage.setItem("notification", "Password reset successfully.");
                window.location.href = "/get-in";
            }).catch((er) => {
                setError(er.response.data);
                //console.log(er.response.data.message);
                setIsLoading(false);
            }
        );
    }

    return (
        <>
            <div className="d-flex justify-content-center flex-column m-5">
                <div>
                    <h1 className="text-center">Reset Password</h1>
                    <p>Please check your email for a confirmation code.</p>
                </div>
                <br/>
                    {error.message? <span className="text-danger">{error.message}</span>:''}
                <br/>
                <div>
                    <form onSubmit={sendCode} method="POST">
                        <label htmlFor="email">Email</label><br/>
                        <input id="email-field" className="code-input" type="email" name="email" value={email} onChange={(e)=>{setEmail(e.target.value)}} placeholder="Email" readOnly/><br/>
                        <label htmlFor="code">Code</label><br/>
                        <input className="code-input" type="text" name="code" placeholder="Enter code" value={code} onChange={(e)=>{setCode(e.target.value)}}/><br/>
                        <span className='input-err'>{error.code? error.code[0]:''}</span><br/>
                        <label htmlFor="password">New Password</label><br/>
                        <input className="code-input" type="password" name="password" placeholder="Enter password" value={password} onChange={(e)=>{setPassword(e.target.value)}}/><br/>
                        <span className='input-err'>{error.password? error.password[0]:''}</span><br/>
                        <label htmlFor="password_confirmation">Confirm Password</label><br/>
                        <input className="code-input" type="password" name="password_confirmation" placeholder="Confirm password" value={confirmPassword} onChange={(e)=>{setConfirmPassword(e.target.value)}}/><br/><br/>
                        <span className='input-err'>{error.passwordConfirmation? error.passwordConfirmation[0]:''}</span><br/>
                        <Button className="btn btn-success btn-md mt-3" type="submit" variant="success">{isLoading && <Spinner as="span" className="me-2" animation="border" size="sm" role="status" aria-hidden="true"/>} Reset</Button>
                    </form>
                </div>
                <br/>
            </div>
        
        </>
    );
 }


export default ForgotPasswordCodeInput;