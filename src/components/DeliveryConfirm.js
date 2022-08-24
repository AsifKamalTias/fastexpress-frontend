import { useState, useEffect } from "react";
import axios from "axios";
import axiosConfig from "./axiosConfig";
import {Spinner, Button} from 'react-bootstrap';

function calcCrow(lat1, lon1, lat2, lon2) 
{
  var R = 6371; // km
  var dLat = toRad(lat2-lat1);
  var dLon = toRad(lon2-lon1);
  var lat1 = toRad(lat1);
  var lat2 = toRad(lat2);

  var a = Math.sin(dLat/2) * Math.sin(dLat/2) +
    Math.sin(dLon/2) * Math.sin(dLon/2) * Math.cos(lat1) * Math.cos(lat2); 
  var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a)); 
  var d = R * c;
  return d;
}

// Converts numeric degrees to radians
function toRad(Value) 
{
    return Value * Math.PI / 180;
}

const DeliveryConfirm = (props) => {
    const [costPerKm, setCostPerKm] = useState(0);
    const [productName, setProductName] = useState(props.productName);
    const [receiverPhone, setReceiverPhone] = useState(props.receiverPhone);
    const [sourceAddress, setSourceAddress] = useState(props.sourceAddress);
    const [destinationAddress, setDestinationAddress] = useState(props.destinationAddress);
    const [totalCost, setTotalCost] = useState(props.totalCost);
    const [isLoading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        axios.get('http://127.0.0.1:8000/api/costPerKm')
        .then(res => {
          setCostPerKm(res.data.price);
            setTotalCost((res.data.price * calcCrow(sourceAddress.split(',')[0], sourceAddress.split(',')[1], destinationAddress.split(',')[0], destinationAddress.split(',')[1])).toFixed(2));
            setLoading(false);
        }).catch(err => {
          console.log(err);
          setLoading(false);
        })
    }, []);

    const handleSubmit = () => {
        setLoading(true);
        const data = {
            sourceAddress,
            destinationAddress,
            totalCost,
            productName,
            receiverPhone
        };
        axiosConfig.post("/client/delivery/make-delivery", data).then
            ((rsp) => {
                setLoading(false);
                props.theEnd(4);
            }
            , (err) => {
                setLoading(false);
                console.log(err);
            }
            )
    }


    const inputStyle = {
        border: "none",
        outline: "none",
        padding: "10px",
        boxShadow: "0 .5rem 1rem rgba(0,0,0,.15)",
        width: "300px"
    }

    return (
        <div>
            <div className="d-flex justify-content-center my-5">
                <form>
                    <label className="ms-3">Product Name </label><br/>
                    <input type="text" className="m-3" style={inputStyle} placeholder="Product Name" value={productName}></input><br/>
                    <label className="ms-3">Receiver Phone</label><br/>
                    <input type="text" className="m-3" style={inputStyle} placeholder="Receiver Phone" value={receiverPhone}></input><br/>
                    <label className="ms-3">Pickup Point</label><br/>
                    <input type="text" className="m-3" style={inputStyle} placeholder="Receiver Phone" value={sourceAddress}></input><br/>
                    <label className="ms-3">Destination Point</label><br/>
                    <input type="text" className="m-3" style={inputStyle} placeholder="Receiver Phone" value={destinationAddress}></input><br/>
                    <label className="ms-3">Total Cost </label><br/>
                    <input type="text" className="m-3" style={inputStyle} placeholder="Total Cost" value={totalCost}></input><br/>
                    <Button className="ms-3" type="submit" variant="outline-primary" onClick={handleSubmit} disabled={isLoading}>{isLoading && <Spinner as="span" className="me-2" animation="border" size="sm" role="status" aria-hidden="true"/>}Confirm</Button>
                </form>
            </div>
        </div>
    );
    }
export default DeliveryConfirm;