import ReactDOM from 'react-dom'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal'
import { useState } from 'react';
import axios from 'axios';
import { useRef } from 'react'; 

const ComposeMail = () => {
    const [show, setShow] = useState(false);

    const refTo = useRef('')
    const refSubject = useRef('')
    const refText = useRef('')

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const sendMailHandler = async() => {

        const email = refTo.current.value
        const subject = refSubject.current.value
        const text = refText.current.value

        try{
           await axios.post('https://mailboxclient-62a75-default-rtdb.firebaseio.com/sent.json', {email, subject, text})
           handleClose()
           setTimeout(()=>alert('Mail Sent Successfully'), 1000) 
        }
        catch(error){
            alert('Mail Not Sent')
        }

    }

  return (
    <div>
        <Button variant="secondary" onClick={handleShow}>
            Compose 
        </Button>

        {ReactDOM.createPortal(
            <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
            <Modal.Title>New Message</Modal.Title>
            </Modal.Header>
            <Modal.Body>
            <Form>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>To</Form.Label>
                <Form.Control
                    type="email"
                    placeholder="name@example.com"
                    autoFocus
                    ref={refTo}
                    required
                />
                </Form.Group>

                <Form.Group className="mb-3" controlId="exampleForm.ControlInput2">
                <Form.Label></Form.Label>
                <Form.Control
                    type="text"
                    placeholder='Subject'
                    autoFocus
                    ref={refSubject}
                    required
                />
                </Form.Group>

                <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlTextarea1"
                >
                <Form.Label></Form.Label>
                <Form.Control as="textarea" rows={3} ref={refText} required/>
                </Form.Group>
            </Form>
            </Modal.Body>
            <Modal.Footer>
            <Button variant="primary" onClick={sendMailHandler}>
                Send
            </Button>
            </Modal.Footer>
        </Modal>, document.getElementById('modal')
        )}
         
    </div>
  )
}

export default ComposeMail
