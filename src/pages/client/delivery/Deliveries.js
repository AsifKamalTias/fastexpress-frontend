import Footer from "../../../components/Footer";
import ClientNav from "../../../components/ClientNav";
import axiosConfig from "../../../components/axiosConfig";
import { useState, useEffect } from "react";
import DeliveryDetailsModal from "../../../components/DeliveryDetailsModal";
import {Spinner} from "react-bootstrap";
const Deliveries = () =>{

    const [isLoading, setIsLoading] = useState(false);
    const [deliveries, setDeliveries] = useState([]);

    const [modalShow, setModalShow] = useState(false);
    const [activeItemId, setActiveItemId] = useState();
    const [activeItemProductName, setActiveItemProductName] = useState();
    const [activeItemPickupPoint, setActiveItemPickupPoint] = useState();
    const [activeItemDestination, setActiveItemDestination] = useState();
    const [activeItemReceiverPhone, setActiveItemReceiverPhone] = useState();
    const [activeItemCost, setActiveItemCost] = useState();
    const [activeItemStatus, setActiveItemStatus] = useState();
    const [activeItemOrderedAt, setActiveItemOrderedAt] = useState();


    useEffect(() => {
        setIsLoading(true);
        axiosConfig.post("/client/deliveries").then
        ((rsp)=>{
            setDeliveries(rsp.data.deliveries);
            setIsLoading(false);
        },(err)=>{
            setIsLoading(false);
            console.log(err);
        })
    } , []);

    const openDetails = (id) =>{
        setActiveItemId(deliveries[id].id);
        //id = id - 1;
        setActiveItemProductName(deliveries[id].delivery_product_name);
        setActiveItemPickupPoint(deliveries[id].delivery_source_address);
        setActiveItemDestination(deliveries[id].delivery_destination_address);
        setActiveItemReceiverPhone(deliveries[id].delivery_contact);
        setActiveItemCost(deliveries[id].delivery_price);
        setActiveItemStatus(deliveries[id].delivery_status);
        //setActiveItemDeliveryman(deliveries[id].deliveryman_name);
        setActiveItemOrderedAt(deliveries[id].created_at);
        setModalShow(true);
    }

    return(
        <>
            <ClientNav></ClientNav>
                <h2 className="text-center m-5">Ordered Deliveries</h2>
                <div className="d-flex justify-content-center m-5 mx-5">
                <table className="table  table-striped table-hover">
                    <thead className="table-success">
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Product Name</th>
                            <th scope="col">Status</th>
                            <th scope="col">Cost</th>
                            <th scope="col">Details</th>
                        </tr>
                    </thead>
                    <tbody>
                        { isLoading ? <Spinner animation="border" variant="success" /> :
                            deliveries.map((delivery, index) => {
                                return (
                                    <tr key={index}>
                                        <th scope="row">{delivery.id}</th>
                                        <td>{delivery.delivery_product_name}</td>
                                        <td>{delivery.delivery_status}</td>
                                        <td>{delivery.delivery_price}</td>
                                        <td><button className="btn btn-outline-success" onClick={()=>{openDetails(index)}}>Details</button></td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
                </div>
            <Footer></Footer>

            <DeliveryDetailsModal 
            show={modalShow} 
            onHide={() => setModalShow(false)}
            id={activeItemId}
            productName={activeItemProductName}
            pickupPoint={activeItemPickupPoint}
            destination={activeItemDestination}
            receiverPhone={activeItemReceiverPhone}
            cost={activeItemCost}
            status={activeItemStatus}
            orderedAt={activeItemOrderedAt}
            ></DeliveryDetailsModal>
        </>
    );
}
export default Deliveries;