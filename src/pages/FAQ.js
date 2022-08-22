import ClientFaq from "../components/ClientFaq";
import ClientNav from "../components/ClientNav";
import Footer from "../components/Footer";

const FAQ = () => {
    return(
        <>
        <ClientNav></ClientNav>
        <div className="m-5">
        <h1 className="text-center mb-5">Frequently Asked Question</h1>
        <div style={{maxWidth: "800px"}} className="container d-lg-flex justify-content-center flex-column">
            <ClientFaq></ClientFaq>
        </div>
    </div>
    <Footer></Footer>
    </>
    );
}
export default FAQ; 