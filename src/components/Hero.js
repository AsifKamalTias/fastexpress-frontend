const Hero = () =>
{
    return(
        <div className="container my-5">
            <div className="row p-4 pb-0 pe-lg-0 pt-lg-5 align-items-center rounded-3 border shadow-lg">
                <div className="col-lg-7 p-3 p-lg-5 pt-lg-3">
                    <h1 className="display-4 fw-bold lh-1">Send loves anytime anywhere.</h1>
                    <p className="lead">#1 Parcel and Courier Service in Bangladesh. Send parcels securely & quickly.</p>
                </div>
                <div className='col-lg-5'>
                    <img src={require('../images/sendlove.jpg')} alt="" className="img-fluid" style={{width: "500px"}}></img>
                </div>
            </div>
        </div>
    );
}

export default Hero;