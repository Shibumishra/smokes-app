import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Group2 from '../../assets/images/Group 2.png';

const Models = ({show, setShow}) => {
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <Modal show={show} onHide={handleClose}>
                <div style={{textAlign: 'center', marginTop: '50px'}} closeButton>
                    <Modal.Title><img src={Group2} alt='' width={180} /></Modal.Title>
                </div>
               
               <div>
                <form>
                    <label>Email</label> <br />
                    <input /> <br />
                    <label>Password</label> <br />
                    <input /> <br />
                    <p>Forgot Your Password?</p>

                    <button>Enter</button>
                </form>
               </div>
                {/* <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleClose}>
                        Save Changes
                    </Button>
                </Modal.Footer> */}
            </Modal>
        </>
    )
}

export default Models;