import { useState } from "react";
import axios from "axios";
import {Spinner, Button} from 'react-bootstrap';
import ClientNav from "../components/ClientNav";
import Footer from "../components/Footer";
const Contact = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [success, setSuccess] = useState(false);
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);
    
    const submitContact = (e) => {
        e.preventDefault();
        setLoading(true);
        const data = {
            name,
            email,
            message
        };
        axios.post('http://127.0.0.1:8000/api/contact', data)
        .then(success => {
            setSuccess(true);
            clearFields();
            setLoading(false);
        }, (error) => {
            setError(error.response.data);
            setLoading(false);
           
        });
    }

    const clearFields = () => {
        setName("");
        setEmail("");
        setMessage("");
    }

    return (
        <>
        <ClientNav></ClientNav>
        <div className="d-flex justify-content-center flex-column m-5">
            <div>
                <h1 className="text-center">Contact</h1>
            </div>
            <br/>
                {success? 
                    <div className="mx-auto">
                        <div className="alert alert-success">
                            <span>Thanks for your message. We will reach you soon!</span>
                        </div>
                    </div>
                    : ""
                }
            <br/>
            <div className="container d-lg-flex justify-content-center">
                <form method="POST" onSubmit={submitContact}>
                    <label htmlFor="email">Name</label><br/>
                    <input id="email-field" class="code-input" type="text" value={name} onChange={(e)=>{setName(e.target.value)}} placeholder="Enter your name"/><br/>
                    <span className='input-err'>{error.name? error.name[0]:''}</span>
                    <br/>
                    <label htmlFor="email">Email</label><br/>
                    <input id="email-field" class="code-input" type="text" name="email" value={email} onChange={(e)=>{setEmail(e.target.value)}} placeholder="Enter your email"/><br/>
                    <span className='input-err'>{error.email? error.email[0]:''}</span>
                    <br/>
                    <label htmlFor="message">Message</label><br/>
                    <textarea id="message-field" style={{borderRadius: "5px"}} cols="51" rows="5" name="message" value={message} onChange={(e)=>{setMessage(e.target.value)}} placeholder="Enter your message"></textarea><br/>
                    <span className='input-err'>{error.message? error.message[0]:''}</span>
                    <br/><br/>
                    <Button className="code-input" type="submit" variant="success" disabled={loading}>{loading && <Spinner as="span" className="me-2" animation="border" size="sm" role="status" aria-hidden="true"/>} Send</Button>
                </form>
            </div>
            <br/>
        </div>
        <Footer></Footer>
        </>
    );
}
export default Contact;