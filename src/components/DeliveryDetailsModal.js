import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';


function DeliveryDetailsModal(props) {

  const downloadDetails = () => {
    window.open('http://127.0.0.1:8000/api/delivery-details/download/' + props.id);
  };

  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Delivery Details # {props.id}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div>
          <ul className="list-group">
            <li className="list-group-item">Order Id : {props.id}</li>
            <li className="list-group-item">Product Name: {props.productName}</li>
            <li className="list-group-item">Pickup Point: {props.pickupPoint}</li>
            <li className="list-group-item">Destination: {props.destination}</li>
            <li className="list-group-item">Receiver's Phone: {props.receiverPhone}</li>
            <li className="list-group-item">Cost: {props.cost}</li>
            <li className="list-group-item">Status: {props.status}</li>
            <li className="list-group-item">Ordered At : {props.orderedAt}</li>
          </ul>
        </div>
        <div>
          <Button className="my-5" variant="success" onClick={downloadDetails}><i class="bi bi-download"></i> Download </Button>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="outline-success"onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default DeliveryDetailsModal;