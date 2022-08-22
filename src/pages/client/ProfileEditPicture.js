import { useState } from "react";
import axiosConfig from '../../components/axiosConfig';

import ClientNav from "../../components/ClientNav";
import Footer from "../../components/Footer";

import { Button, Spinner } from "react-bootstrap";

const ProfileEditPicture = () => {

    const [profilePicture, setProfilePicture] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState('');

    const updateProfilePicture = (e) => {
        e.preventDefault();
        setIsLoading(true);
       if(profilePicture !== null){
        var data = new FormData();
        data.append("file", profilePicture, profilePicture.name);
        axiosConfig.post("/client/edit-info/picture", data, ).then((rsp)=>{
            localStorage.setItem('notification', 'Profile picture updated successfully!');
            setIsLoading(false);
            window.location.href = "/profile";
        },(er)=>{
            setIsLoading(false);
            //setError('Error updating profile picture!');
        });
       }
       else
       {
           setIsLoading(false);
           setError('Please select a profile picture!');
       }
    }
    return (
    <>
        <ClientNav></ClientNav>
        <div className="container my-5 d-lg-flex justify-content-center">
        <div className="row">
            <div className="col-md-12">
            <div className="card">
                <div className="card-header">
                <h4>Update Profile Picture</h4>
                </div>
                <div className="card-body my-5">
                    {error === "" ? "" : <div className="alert alert-danger">{error}</div>}
                <form onSubmit={updateProfilePicture}>
                    <div className="form-group">
                    <label htmlFor="profilePicture">Profile Picture</label>
                    <input type="file" className="form-control" id="profilePicture" onChange={(e)=>{setProfilePicture(e.target.files[0])}}/>
                    </div>
                    <Button className="btn btn-success btn-md mt-3" type="submit" variant="success" disabled={isLoading}>{isLoading && <Spinner as="span" className="me-2" animation="border" size="sm" role="status" aria-hidden="true"/>} Update</Button> 
                </form>
                </div>
            </div>
            </div>
        </div>
        </div>
        <Footer></Footer>
    </>
    );
    }
export default ProfileEditPicture;