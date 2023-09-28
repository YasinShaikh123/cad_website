import React from 'react'
import {  Paper } from '@mui/material';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom'
import Modal from '@mui/material/Modal';
import GifData from '../../assets/image/successimg.gif'

const style = {
    position: 'absolute',
    top: '52%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 500,
    bgcolor: 'background.paper',
    border: 'none',
    boxShadow: 24,
    borderRadius:2  ,
    padding: '3rem 5px',
  };

const SeccessfulModal = ({ gifData }) => {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    console.log(open);
  return (
    <div>
        <Button onClick={handleOpen}>Open modal</Button>
        <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        >
        <Paper className='sucess-modal' sx={style}>
            <div className='sucess-image' style={{textAlign:'center',marginBottom:'10px'}}>
              <img src={GifData} />
            </div>
            <h2 style={{fontSize:'26px',fontWeight:'700',textAlign:'center'}}>Registration Successful</h2>
            <p style={{fontSize:'16px',fontWeight:'500',textAlign:'center',paddingTop:'10px'}}>Your account has been successful created.<br/>
            Please click on the button to continue</p>
            <div className='next-btn'>
                <Link to="">Next</Link>
            </div>
        </Paper>
        </Modal>
    </div>
  )
}

export default SeccessfulModal
