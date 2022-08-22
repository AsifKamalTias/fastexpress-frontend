import ClientNav from "../components/ClientNav";
import Footer from "../components/Footer";

const HowItWorks = () => {
    return (
        <>
        <ClientNav></ClientNav>
            <div class="m-5">
                <h1 class="text-center mb-5">How it works</h1>
                <div style={{maxWidth: "500px"}} className="container d-lg-flex justify-content-center flex-column">
                    <p className="fs-4">It works in only few steps...</p>
                    <ul className="list-group">
                        <li className="list-group-item fw-bolder fs-5"><i class="bi bi-arrow-right"></i> Register to the application.</li>
                        <li className="list-group-item fw-bolder fs-5"><i class="bi bi-arrow-right"></i> Get in to the application.</li>
                        <li className="list-group-item fw-bolder fs-5"><i class="bi bi-arrow-right"></i> Choose location.</li>
                        <li className="list-group-item fw-bolder fs-5"><i class="bi bi-arrow-right"></i> Fill up criterias.</li>
                        <li className="list-group-item fw-bolder fs-5"><i class="bi bi-arrow-right"></i> Transfer goods to delivery man.</li>
                        <li className="list-group-item fw-bolder fs-5"><i class="bi bi-arrow-right"></i> Get delivered.</li>
                    </ul>
                </div>
            </div>  
            <Footer></Footer>
        </>
    );
    }

    export default HowItWorks;