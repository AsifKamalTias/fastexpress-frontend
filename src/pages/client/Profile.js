import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axiosConfig from '../../components/axiosConfig';
import ClientNav from '../../components/ClientNav';
import Footer from '../../components/Footer';
import {Spinner} from 'react-bootstrap';
import ToastView from '../../components/ToastView';

const Profile = () => {
    const [name, setName] = useState('');
    const [address, setAddress] = useState('');
    const [created, setCreated] = useState('');
    const [profilePicture, setProfilePicture] = useState();

    const [isLoading, setIsLoading] = useState(true);
    

    useEffect(() => {
        axiosConfig.post("/client/profile").then
            ((rsp)=>{
                setName(rsp.data.client.name)
                setAddress(rsp.data.client.address)
                setCreated(rsp.data.client.created_at)
                setProfilePicture(rsp.data.client.profile_picture)
                setIsLoading(false);
                
            },(err)=>{
                setIsLoading(false);
                window.location.href = "/get-in";
            })
    } , []);

    const getOut = () => {
        axiosConfig.post("/client/get-out").then
        ((rsp) => {
            localStorage.removeItem('_authToken');
            window.location.href = "/get-in";
        } , (err) => {
            console.log(err);
        })

    }

    return (
       <>
            <ClientNav></ClientNav>
            {
                isLoading ?
                <div className='m-5'>
                    <Spinner animation="border" variant="success" />
                </div>
                :
                <div className="container">
                    <div className="main-body mb-5 mt-5">    
                            <div className="row gutters-sm">
                            <div className="col-md-4 mb-3">
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
                                        <Link className="btn btn-success m-1" to="/profile/edit"><i className="bi bi-vector-pen"></i> Edit</Link>
                                        <button className="btn btn-outline-success" onClick={getOut}><i className="bi bi-box-arrow-left"></i> Get Out</button>
                                    </div>
                                    </div>
                                </div>
                                </div>
                                <div className="m-3">
                                
                                </div>
                            </div>
                            
                            <div className="col-md-8">
                                {/* @if(session('success'))
                                    <div class="alert alert-success">
                                        {{session('success')}}
                                    </div>
                                    <br>
                                @endif */}
                                <h1>Order Actions</h1>
                                <div className="d-grid gap-3 m-5">
                                    <a className="btn btn-success" type="button" href="/create-delivery"><i className="bi bi-plus-circle"></i> Make a Delivery</a>
                                    <a className="btn btn-outline-success" type="button" href="/deliveries"><i className="bi bi-card-checklist"></i> Ordered Deliveries</a>
                                </div>
                            </div>
                            </div>

                        </div>
                    </div>
            }
            <Footer></Footer>
            {localStorage.getItem("notification") !== null ? <ToastView message={localStorage.getItem('notification')}></ToastView> : ""}
       </>
    );
}
export default Profile;