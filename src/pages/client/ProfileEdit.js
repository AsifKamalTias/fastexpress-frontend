import { useState, useEffect } from "react";
import axiosConfig from '../../components/axiosConfig';
import ClientNav from "../../components/ClientNav";
import Footer from "../../components/Footer";

import { Button, Spinner } from "react-bootstrap";
import { Link } from "react-router-dom";

const ProfileEdit = () =>{
    const [name, setName] = useState('');
    const [address, setAddress] = useState('');
    const [email, setEmail] = useState('');
    const [created, setCreated] = useState('');
    const [profilePicture, setProfilePicture] = useState();

    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState('');

    useEffect(() => {
        axiosConfig.post("/client/profile").then
            ((rsp)=>{
                setName(rsp.data.client.name)
                setAddress(rsp.data.client.address)
                setEmail(rsp.data.client.email)
                setCreated(rsp.data.client.created_at)
                setProfilePicture(rsp.data.client.profile_picture)
                setIsLoading(false);
                
            },(err)=>{
                setIsLoading(false);
                window.location.href = "/get-in";
            })
    } , []);

    const updateInfo = (e) => {
        e.preventDefault();
        setIsLoading(true);
        const data = {
            name,
            address
        };
        axiosConfig.post("/client/edit-info", data).then
            ((rsp) => {
                localStorage.setItem('notification', 'Profile updated successfully!');
                setIsLoading(false);
                window.location.href = "/profile";
            }
            , (err) => {
                setError(err.response.data);
                setIsLoading(false);
                console.log(err);
            }
            )
    }
    return(
        <>
            <ClientNav></ClientNav>
            <div>
                <h1 className="m-5 text-center">Edit Profile</h1>
                <div className="container">
                    <div className="main-body">
                        <div className="row mb-5">
                            <div className="col-lg-4">
                                <div className="card">
                                    <div className="card-body">
                                        <div className="d-flex flex-column align-items-center text-center">
                                            {
                                                profilePicture === null ? 
                                                <img src="http://127.0.0.1:8000/storage/profile_pictures/default.jpg" alt="" className="img-fluid rounded-circle" style={{width: "200px", height: "200px"}}></img>
                                                :
                                                <img src={`http://127.0.0.1:8000/storage/profile_pictures/${profilePicture}`} alt="" className="img-fluid rounded-circle" style={{width: "200px", height: "200px"}}></img>
                                            }   
                                            <div className="mt-3">
                                                <h4>{name}</h4>
                                                <p className="text-secondary mb-1">{address}</p>
                                                <p className="text-muted font-size-sm">Member since {created.substr(0, 10)}</p>
                                                <Link className="btn btn-outline-success" to="/profile/edit/picture"><i className="bi bi-camera-fill"></i> Update Picture</Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-8 mb-5">
                                <div className="card">
                                    <div className="card-body">
                                        <form onSubmit={updateInfo} method="POST">
                                        <div className="row mb-3">
                                            <div className="col-sm-3">
                                                <h6 className="mb-0">Name</h6>
                                            </div>
                                            <div className="col-sm-9 text-secondary">
                                                <input type="text" name="name" className="form-control" value={name} onChange={(e)=>{setName(e.target.value)}}/>
                                                <span className='input-err'>{error.name? error.name[0]:''}</span>
                                            </div>
                                            
                                        </div>
                                        <div className="row mb-3">
                                            <div className="col-sm-3">
                                                <h6 className="mb-0">Email</h6>
                                            </div>
                                            <div className="col-sm-9 text-secondary">
                                                <input type="text" name="email" className="form-control" value={email} disabled/>
                                            </div>
                                        </div>
                                        <div className="row mb-3">
                                            <div className="col-sm-3">
                                                <h6 className="mb-0">Address</h6>
                                            </div>
                                            <div className="col-sm-9 text-secondary">
                                                <input type="text" name="address" className="form-control" value={address} onChange={(e)=>{setAddress(e.target.value)}}/>
                                                <span className='input-err'>{error.address? error.address[0]:''}</span>
                                            </div>
                                            
                                        </div>
                                        <div className="row">
                                            <div className="col-sm-3"></div>
                                            <div className="col-sm-9 text-secondary">
                                            <Button className="btn btn-success btn-sm" type="submit" variant="success" disabled={isLoading}>{isLoading && <Spinner as="span" className="me-2" animation="border" size="sm" role="status" aria-hidden="true"/>} Save</Button> 
                                            </div>
                                        </div>
                                        </form>
                                        <Link className="text-success" to="/profile/edit/password">Change Password</Link>
                                    </div>
                                </div>
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </>
    );
}

export default ProfileEdit;