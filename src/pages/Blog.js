import axios from "axios";
import {useState, useEffect } from "react";
import {useParams } from 'react-router-dom';
import { Spinner } from 'react-bootstrap';
import ClientNav from "../components/ClientNav";

const Blog = () => {
    
    const { id } = useParams();
    const [blogTitle, setBlogTitle] = useState(null);
    const [blogContent, setBlogContent] = useState(null);
    
    const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
        axios
            .get(`http://127.0.0.1:8000/api/blog/${id}`)
            .then(response => {
                setBlogTitle(response.data.blog_title);
                setBlogContent(response.data.blog_content);
                setIsLoading(false);
            })
            .catch(error => {
                console.log(error);
            });
    }, [id]);

    return (
        <>
            <ClientNav/>
            {isLoading && 
                <div className="d-flex justify-content-center m-5">
                    <Spinner animation="border" variant="success" />
                </div>
            }
            <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <h2 className="text-success mt-5 mb-3">{blogTitle}</h2>
                    <p>{blogContent}</p>
                </div>
            </div>
            </div>
        </>
    );
}

export default Blog;
