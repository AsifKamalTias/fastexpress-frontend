import Footer from "../../../components/Footer";
import ClientNav from "../../../components/ClientNav";
import MakeDeliveryStepper from '../../../components/MakeDeliveryStepper';

const MakeDelivery = () =>{
    return (
        <div>
            <ClientNav></ClientNav>
                <h2 className="text-center m-5">Make Delivery</h2>
                <div className="container mx-auto my-5 p-5 bg-light"> 
                    <MakeDeliveryStepper></MakeDeliveryStepper>
                </div>
            <Footer></Footer>
        </div>
    )
}
export default MakeDelivery;