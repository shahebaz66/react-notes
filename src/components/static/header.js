import React, { useState } from 'react'
import { Button, Modal, Container, Row, Col } from 'react-bootstrap'

const Header = (props) => {
    const [show, setShow] = useState(false);
    const [text, setText] = useState("");
    const [date, setDate] = useState("");
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const change = (e) => {
        setText(e.target.value)
    }
    const changeDate = (e) => {


        setDate(e.target.value)
    }
    const send = () => {
        if (text !== "" && date !== "") {
            props.add(text, date)
            setShow(false);
        }
    }
    return (
        <header className="header-section">
            <Container>
                <Row>
                    <Col lg="4" md="3">
                        <div className="logo">
                            <h2 className="site-logo">My Notes</h2>
                        </div>
                    </Col>
                </Row>
            </Container>

            <div className="button">
                <Button variant="primary" onClick={handleShow}>Add Notes</Button>
            </div>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Add New Note!!!</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <input style={{marginBottom:"5px"}} type="date" onChange={(e) => changeDate(e)} />
                    <textarea cols="40" onChange={(e) => change(e)} />

                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
          </Button>
                    <Button variant="primary" onClick={send}>
                        Save Changes
          </Button>
                </Modal.Footer>
            </Modal>
        </header>
    )
}

export default Header