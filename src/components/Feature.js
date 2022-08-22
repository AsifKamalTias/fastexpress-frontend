const Feature = ({featureName, featureIcon}) => {
    return (
        <div className="feature-item d-flex flex-column justify-content center shadow p-3 mb-5 bg-white rounded mx-2">
            <div className="icon m-auto"><i className={featureIcon}></i></div>
            <div className="text-center"><h6>{featureName}</h6></div>
        </div>
    );
}

export default Feature;