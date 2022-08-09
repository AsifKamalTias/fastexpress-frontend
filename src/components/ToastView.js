import { useState } from 'react';
import Toast from 'react-bootstrap/Toast';
import ToastContainer from 'react-bootstrap/ToastContainer';

function ToastView(props) {
  const [showA, setShowA] = useState(true);
  const toggleShowA = () => setShowA(!showA);

  const clearNotification = () => {
    localStorage.removeItem('notification');
  }

  return (
    <ToastContainer className="p-3" position="bottom-start">
      <Toast show={showA} onClose={()=>{toggleShowA(); clearNotification();}}>
      <Toast.Header>
        <strong className="me-auto">FastExpress</strong>
      </Toast.Header>
      <Toast.Body>{props.message}</Toast.Body>
    </Toast>
    </ToastContainer>
  );
}

export default ToastView;