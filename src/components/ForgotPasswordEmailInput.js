import axios from "axios";
import { Spinner, Button } from "react-bootstrap";
import { useState } from "react";

const ForgotPasswordEmailInput = () => {
    const [email, setEmail] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(false);

    const sendEmail = (e) => {
        e.preventDefault();
        setIsLoading(true);
        const data = {
            email: email
        };
        axios
            .post("http://127.0.0.1:8000/api/client/forgot-password/email", data)
            .then((rsp) => {
                setIsLoading(false);
                setIsError(false);
                localStorage.setItem("forgot-password-queue", email); 
                window.location.href = "/client/forgot-pass";
            }).catch((er) => {
                setIsLoading(false);
                setIsError(true);
            }
    );

    }
    return(
        <>
            <div className="d-flex justify-content-center flex-column m-5">
                <div>
                    <h1 className="text-center">Reset Password</h1>
                    <p className="fw-bold">A verification code will be send to your email.</p>
                </div>
                <br/><br/>
                <br/>
                <div>
                    <form method="POST" onSubmit={sendEmail}>
                        <label htmlFor="email">Email</label><br/>
                        <input id="email-field" className="code-input" type="text" name="email" value={email} onChange={(e)=>{setEmail(e.target.value)}} placeholder="Enter your email"/><br/><br/>
                        {isError && <p className="text-danger">Invalid email</p>}
                        <Button className="btn btn-success btn-md mt-3" type="submit" variant="success">{isLoading && <Spinner as="span" className="me-2" animation="border" size="sm" role="status" aria-hidden="true"/>} Submit</Button>
                    </form>
                </div>
                <br/>
            </div>        
        </>
    );
}

export default ForgotPasswordEmailInput;