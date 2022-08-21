import ClientNav from "../../components/ClientNav";
import Footer from "../../components/Footer";

import { useState } from "react";
import axiosConfig from "../../components/axiosConfig";
import { Spinner, Button } from "react-bootstrap";

const ProfileEditPassword = () => {

    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState('');

    const changePassword = (e) => {
        e.preventDefault();
        setIsLoading(true);
        const data = {
            password,
            confirmPassword
        };
        axiosConfig.post("/client/edit-info/password", data).then
            ((rsp) => {
                localStorage.setItem('notification', 'Password updated successfully!');
                setIsLoading(false);
                window.location.href = "/profile";
            }
            , (err) => {
                setIsLoading(false);
                setError(err.response.data);
                window.location.href = "/profile";
            }
            )
    }

    return (
        <>
            <ClientNav></ClientNav>
            <div className="container m-5">
                <h1 className="text-center">Change Password</h1>
                <div>
                    <form onSubmit={changePassword} method="POST"> 
                        <div className="form-group">
                            <label for="new_password">New Password</label>
                            <input type="password" className="form-control" id="new_password" value={password} onChange={(e)=>{setPassword(e.target.value)}}/>
                            {error.password && <small className="text-danger">{error.password}</small>}
                        </div>
                        <br/>
                        <div class="form-group">
                            <label for="new_password_confirmation">Confirm Password</label>
                            <input type="password" className="form-control" id="new_password_confirmation" value={confirmPassword} onChange={(e)=>{setConfirmPassword(e.target.value)}}/>
                            {error.confirmPassword && <small className="text-danger">{error.confirmPassword}</small>}
                        </div>
                        <br/>
                        <Button className="btn btn-success btn-md mt-3" type="submit" variant="success">{isLoading && <Spinner as="span" className="me-2" animation="border" size="sm" role="status" aria-hidden="true"/>} Update</Button>
                    </form>
                </div>
            </div>
            <Footer></Footer>
        </>
    );
    }
export default ProfileEditPassword;