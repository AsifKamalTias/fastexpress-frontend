import { useState } from "react";
const DeliveryInfo = (props) => {

    const [productName, setProductName] = useState();
    const [receiverPhone, setReceiverPhone] = useState();

    const updateData = () => {
        props.getDeliveryData(productName, receiverPhone);
    }

    const inputStyle = {
        border: "none",  
        outline: "none", 
        padding: "10px", 
        boxShadow: "0 .5rem 1rem rgba(0,0,0,.15)", 
        width: "300px"
    }
    return(
        <>
            <div className="d-flex justify-content-center">
                <form>
                    <label>Product Name </label>
                    <input type="text" className="m-3" style={inputStyle} placeholder="Product Name" value={productName} onChange={(e)=>{setProductName(e.target.value); updateData()}}></input><br/>
                    <label>Receiver Phone</label>
                    <input type="text" className="m-3" style={inputStyle} placeholder="Receiver Phone" value={receiverPhone} onChange={(e)=>{setReceiverPhone(e.target.value); updateData()}}></input>
                </form>
            </div>
        </>
    )
}

export default DeliveryInfo;