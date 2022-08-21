import { useState } from "react";
import axios from "axios";
import {Spinner, Button} from 'react-bootstrap';
import ClientNav from "../components/ClientNav";
import Footer from "../components/Footer";

const Feedback = () => {
    const [title, setTitle] = useState("");
    const [message, setMessage] = useState("");
    const [success, setSuccess] = useState(false);
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);

    const submitFeedback = (e) => {
        e.preventDefault();
        setLoading(true);
        const data = {
            title,
            message
        };
        axios.post('http://127.0.0.1:8000/api/feedback', data)
        .then(success => {
            setSuccess(true);
            setLoading(false);
        }, (error) => {
            setError(error.response.data);
            setLoading(false);
           
        });
    }
    return(
        <>
            <ClientNav></ClientNav>
            <div className="d-flex justify-content-center flex-column m-5">
                <div>
                    <h1 className="text-center">Feedback</h1>
                </div>
                <br/>
                    {success?
                        <div className="alert alert-success">
                            <span>Thanks for your feedback.</span>
                        </div>
                        :""
                    }
                <br/>
                <div>
                    <form method="POST" onSubmit={submitFeedback}>
                        <label htmlFor="feedback-title">Feedback Title</label><br/>
                        <input id="email-field" className="code-input" type="text" value={title} onChange={(e)=>{setTitle(e.target.value)}} placeholder="Title of Feedback"/><br/>
                        {error.title? <span className='input-err'>{error.title[0]}</span> :""}
                        <br/>
                        <label htmlFor="message">Feedback</label><br/>
                        <textarea id="message-field" className="code-input" value={message} onChange={(e)=>{setMessage(e.target.value)}} placeholder="Enter your feedback"></textarea><br/>
                        {error.message? <span className='input-err'>{error.message[0]}</span> :""}
                        <br/><br/>
                        <Button className="code-input" type="submit" variant="success">{loading && <Spinner as="span" className="me-2" animation="border" size="sm" role="status" aria-hidden="true"/>} Send</Button>
                    </form>
                </div>
                <br/>
            </div>
        
        <Footer></Footer>
        </>
    );
}

export default Feedback;