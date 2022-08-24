import { Link } from "react-router-dom";

const DeliveryStepsDone = () => {
    return (
        <>
            <div className="d-flex justify-content-center my-5">
                <h3 className="mt-3">You're Done!</h3>
            </div>
            <div className="d-flex justify-content-center my-5">
                <Link className="btn btn-outline-primary" to="/profile">Back to Profile</Link>
            </div>      
        </>
    );
}

export default DeliveryStepsDone;