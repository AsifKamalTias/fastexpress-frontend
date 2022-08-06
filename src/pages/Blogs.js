import { useState, useEffect } from "react";
import axios from 'axios';
import Spinner from 'react-bootstrap/Spinner';
import ClientNav from "../components/ClientNav";
import Pagination from "../components/Pagination";

const Blogs = () => {
    const [blogs, setBlogs] = useState([]);
    const [url] = useState('http://127.0.0.1:8000/api/blogs');
    const [paginatedUrl, setPaginatedUrl] = useState('http://127.0.0.1:8000/api/blogs?page=1');
    const [isLoading, setIsLoading] = useState(true);

    const changePaginateUrl = (clickedUrl) => {
        setPaginatedUrl(clickedUrl);
    }
        

    useEffect(() => {
        axios
            .get(paginatedUrl)
            .then(response => {
                setBlogs(response.data.data);
                setIsLoading(false);
            })
            .catch(error => {
                console.log(error);
            }
            );
    }, [paginatedUrl]);

    return (
        <>
            <ClientNav />
            <div className="container mt-5 mb-5">
                <h2 className="mb-3 text-success">Blogs</h2>
                {isLoading && <Spinner animation="border" variant="success" />}
                <div className="row">
                    {blogs.map(blog => (
                        <div className="col-md-6" key={blog.id}>
                            <div className="card mb-4">
                                <div className="card-body">
                                    <h5 className="card-title">{blog.blog_title}</h5>
                                    <a href={`/blog/${blog.id}`} className="btn btn-success mt-3">Read More</a>
                                </div>
                                <div className="card-footer text-muted">
                                    {blog.updated_at.substring(0, 10)}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <Pagination url={url} updatePaginatedUrl={changePaginateUrl}/>
        </>
    );
}
export default Blogs;