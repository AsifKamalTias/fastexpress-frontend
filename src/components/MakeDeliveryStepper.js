import * as React from 'react';
import {useState} from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import MapLocationInput from './MapLocationInput';
import DeliveryInfo from './DeliveryInfo';
import DeliveryConfirm from './DeliveryConfirm';
import DeliveryStepsDone from './DeliveyStepsComplete';

const steps = ['Set Pickup Point', 'Set Destination Point', 'Provide Delivery Information', 'Confirm Delivery'];

export default function MakeDeliveryStepper() {
  const [sourceAddress, setSourceAddress] = useState();
  const [destinationAddress, setDestinationAddress] = useState();
  const [productName, setProductName] = useState();
  const [receiverPhone, setReceiverPhone] = useState();

  const getSourceAddress = (lat, lon) => {
    lat = lat.toFixed(4);
    lon = lon.toFixed(4);
    let address = `${lat}, ${lon}`;
    setSourceAddress(address);
  }

  const getDestinationAddress = (lat, lon) => {
    lat = lat.toFixed(4);
    lon = lon.toFixed(4);
    let address = `${lat}, ${lon}`;
    setDestinationAddress(address);
  }

  const getDeliveryInfo = (name, phone) => {
    setProductName(name);
    setReceiverPhone(phone);
  }

  const [activeStep, setActiveStep] = React.useState(0);
  
  const lastStep = (lastStepNo = 0) => {
    if(lastStep !== 0)
    {
      setActiveStep(lastStepNo);
    }
  }

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleDisableNext = () => {
    if(activeStep === 0 && (sourceAddress === undefined || sourceAddress === ''))
    {
      return true;
    }
    else if(activeStep === 1 && (destinationAddress === undefined || destinationAddress === ''))
    {
      return true;
    }
    else if(activeStep === 2 && (productName === undefined || receiverPhone === undefined || productName === '' || receiverPhone === '' || receiverPhone.length < 10))
    {
      return true;
    }
    else
    {
      return false;
    }
  }

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const setContent = () => {
    if(activeStep === 0){
      return <MapLocationInput getAddress={getSourceAddress}></MapLocationInput>
    }
    else if(activeStep === 1){
      return <MapLocationInput getAddress={getDestinationAddress}></MapLocationInput>
    }
    else if(activeStep === 2){
        return <DeliveryInfo getDeliveryData={getDeliveryInfo}></DeliveryInfo>
    }
    else if(activeStep === 3){
        return <DeliveryConfirm productName={productName} receiverPhone={receiverPhone} sourceAddress={sourceAddress} destinationAddress={destinationAddress} theEnd={lastStep}></DeliveryConfirm>
    }
    else{
        return <div><p>Error</p></div>
    }
  }

  return (
    <Box sx={{ width: '100%' }}>
      <Stepper activeStep={activeStep}>
        {steps.map((label, index) => {
          const stepProps = {};
          const labelProps = {};
          return (
            <Step key={label} {...stepProps}>
              <StepLabel {...labelProps}>{label}</StepLabel>
            </Step>
          );
        })}
      </Stepper>
      {activeStep === steps.length ? (
        <React.Fragment>
          <Typography sx={{ mt: 2, mb: 1 }}>
            <DeliveryStepsDone></DeliveryStepsDone>
          </Typography>
          <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
            <Box sx={{ flex: '1 1 auto' }} />
          </Box>
        </React.Fragment>
      ) : (
        <React.Fragment>
          <Box sx={{ mt: 2, mb: 1 }}>
            {setContent()}
          </Box>
          <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
            <Button
              color="inherit"
              disabled={activeStep === 0}
              onClick={handleBack}
              sx={{ mr: 1 }}
            >
              Back
            </Button>
            <Box sx={{ flex: '1 1 auto' }} />
            {
            activeStep !== steps.length - 1 ? 
            <Button onClick={handleNext} disabled={handleDisableNext()}>
              Next
            </Button>
            :
            ""
          }
            
          </Box>
        </React.Fragment>
      )}
    </Box>
  );
}
