import { useState } from "react";
import axios from "axios";

import { Spinner, Button } from 'react-bootstrap';

const ClientRegisterConfirm = (props) =>{

    const [email, setEmail] = useState(props.email);
    const [code, setCode] = useState('');
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const confirmRegistration = (e) => {
        e.preventDefault();
        setIsLoading(true);
        const data = {
            email,
            code
        };
        axios.post('http://127.0.0.1:8000/api/client/register/confirm', data)
        .then(success => {
            localStorage.removeItem('registrationQueue');
            setIsLoading(false);
            window.location.href = "/get-in";
        }, (error) => {
            setError('Invalid code!');
            setIsLoading(false);
        });

    }

    const removeRegistrationQueue = () => {
        localStorage.removeItem('registrationQueue');
        window.location.href = "/register";
    }

    return(
        <>
            <div className="d-flex justify-content-center flex-column m-5">
                <div>
                    <h1 className="text-center">Confirm Registration</h1>
                    <p className="text-center">Please check your email for a confirmation code.</p>
                </div>
                <br/>
                {error !== ''? <div className="d-flex justify-content-center"><div className="alert alert-danger">{error}</div></div>:''}
                <br/><br/>
                <div className="d-flex justify-content-center">
                    <form method="POST" onSubmit={confirmRegistration}>
                        <label htmlFor="email">Email</label><br/>
                        <input id="email-field" className="code-input disabled" type="email" value={email} onChange={(e)=>{setEmail(e.target.value)}} placeholder="Email" readOnly disabled></input><br/><br/>
                        <label htmlFor="code">Code</label><br/>
                        <input className="code-input" type="text" value={code} onChange={(e)=>{setCode(e.target.value)}} placeholder="Enter code"></input><br/><br/>
                        {/* <button className="btn btn-success" type="submit">Confirm {isLoading && <Spinner as="span" animation="border" size="sm" role="status" aria-hidden="true" /> }</button> */}
                        <Button type="submit" variant="success">{isLoading && <Spinner as="span" className="me-2" animation="border" size="sm" role="status" aria-hidden="true"/>} Confirm</Button>
                    </form>
                    <br/>
                </div>
                <br/>
                <p className="text-center text-success text-decoration-underline" onClick={removeRegistrationQueue}>Try with different email</p>
            </div>
        </>
    );
}

export default ClientRegisterConfirm;