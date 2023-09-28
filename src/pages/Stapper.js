import * as React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import StepOne from '../components/Steps/StepOne';
import StepTwo from '../components/Steps/StepTwo';
import StepThree from '../components/Steps/StepThree';
import SeccessfulModal from '../components/Steps/SeccessfulModal';

const steps = ['','',''];



export default function HorizontalLinearStepper() {
  const [activeStep, setActiveStep] = React.useState(0);
  const [skipped, setSkipped] = React.useState(new Set());

//   console.log(activeStep);

  const isStepOptional = (step) => {
    return step === 1;
  };

  const isStepSkipped = (step) => {
    return skipped.has(step);
  };

  const handleNext = () => {
    let newSkipped = skipped;
    if (isStepSkipped(activeStep)) {
      newSkipped = new Set(newSkipped.values());
      newSkipped.delete(activeStep);
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped(newSkipped);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleSkip = () => {

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped((prevSkipped) => {
      const newSkipped = new Set(prevSkipped.values());
      newSkipped.add(activeStep);
      return newSkipped;
    });
  };

  const handleOpen = () => {
    console.log("modalOpen");
  }


  return (
    <div className="registration">
        <div className="container">
            <div className="rigester-box stapper-box">
                <h2 style={{fontSize:'40px',fontWeight:'600',marginBottom:'72px'}}>Get Started</h2>
                <Box sx={{ width: '100%' }}>
                    <Stepper activeStep={activeStep} style={{marginBottom:'50px'}}>
                        {steps.map((label, index) => {
                        const stepProps = {};
                        const labelProps = {};
                        if (isStepOptional(index)) {
                            labelProps.optional = (
                            <Typography variant="caption"></Typography>
                            );
                        }
                        if (isStepSkipped(index)) {
                            stepProps.completed = false;
                        }
                        return (
                            <Step key={label} {...stepProps}>
                                <StepLabel {...labelProps}>{label}</StepLabel>
                            </Step>
                        );
                        })}
                    </Stepper>
                {activeStep === steps.length ? (
                    <>
                        <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
                            <Box sx={{ flex: '1 1 auto' }} />
                        </Box>
                    </>
                ) : (
                    <React.Fragment>

                    {activeStep === 0 ? (
                        <StepOne/>
                    ) : activeStep === 1 ? (
                        <StepTwo/>
                    ) : (
                        <StepThree/>
                    )}

                    <Box sx={{ display: 'flex', flexDirection: 'row', pt: 10 }}>
                        <Button className='back-btn'
                            disabled={activeStep === 0}
                            onClick={handleBack}
                            sx={{ mr: 1 }}
                        >
                        Back
                        </Button>
                        <Box sx={{ flex: '1 1 auto' }} />

                        <Button onClick={activeStep < 2 ? handleNext : handleOpen } className='next-btn'>
                            {activeStep < 2  ? 'Next' : 'Finesh'}
                            <SeccessfulModal  />
                        </Button>
                    </Box>
                    </React.Fragment>
                )}
                </Box>
            </div>
        </div>
    </div>
  );
}
