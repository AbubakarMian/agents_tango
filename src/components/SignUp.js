import React from "react";
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';
import './../styles/signup.css';
import Carousel from 'react-bootstrap/Carousel';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faUserPlus,
    faArrowLeft,
    faLocationDot
}
    from '@fortawesome/free-solid-svg-icons'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Modal from 'react-bootstrap/Modal';
import { useState } from 'react';
import Collapse from 'react-bootstrap/Collapse';
import InputGroup from 'react-bootstrap/InputGroup';
import { useNavigate } from "react-router-dom";
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import ToggleButton from 'react-bootstrap/ToggleButton';
import Dropdown from 'react-bootstrap/Dropdown';
import Nav_bar_area from './NavBar';
{/* <Nav_bar_area /> */ }



export default function Signup() {
    const navigate = useNavigate();

    const navigateToPath = (path) => {
        navigate(path);
    };
    return (
        <div>
            <Container>
                <Row>
                    <Col>
                        <Button className="backbtnsignup" onClick={() => navigate(-1)}><FontAwesomeIcon icon={faArrowLeft} /> </Button>
                    </Col>
                </Row>
            </Container>
            <section className="bg_clr">

                <h3 className="signup_head">Sign Up</h3>
                <Container fluid>
                    <Row>
                        <div>
                            <div className="pic_area">
                                <Button onClick={() => navigateToPath('/camera')} className="add_picbtn">
                                    <FontAwesomeIcon icon={faUserPlus} />
                                </Button>
                            </div>
                        </div>
                    </Row>

                </Container>
                <Container>
                    <div className="form_cover_signup">
                        <Row>
                            <Col>
                                <div className="form_area">
                                    <Form>
                                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                            <Form.Label>Full Name*</Form.Label>
                                            <Form.Control type="text" placeholder="Enter First Name" />
                                        </Form.Group>

                                    </Form>
                                </div>
                            </Col>
                        </Row>
                        {/* <Row>
                        <Col>
                            <div className="form_area">
                                <Form>
                                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                        <Form.Label>Last Name*</Form.Label>
                                        <Form.Control type="text" placeholder="Enter Last Name" />
                                    </Form.Group>

                                </Form>
                            </div>
                        </Col>
                    </Row> */}
                        <Row>
                            <Col>
                                <div className="form_area">
                                    <Form>
                                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                            <Form.Label>Email*</Form.Label>
                                            <Form.Control type="email" placeholder="name@example.com" />
                                        </Form.Group>

                                    </Form>
                                </div>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <div className="form_area">
                                    <Form>
                                        <Form.Group className="mb-3 mob_num" controlId="exampleForm.ControlInput1">
                                            <Form.Label>Mobile Number*</Form.Label>
                                            <Form.Control type="number" placeholder="Enter Mobile No" />
                                        </Form.Group>

                                    </Form>
                                </div>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <div className="form_area">
                                    <Form>
                                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                            <Form.Label>Password*</Form.Label>
                                            <Form.Control type="password" placeholder="Password" />
                                        </Form.Group>

                                    </Form>
                                </div>
                            </Col>
                            {/* <Col>
                                <div className="form_area">
                                    <Form>
                                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                            <Form.Label>ReEnter*</Form.Label>
                                            <Form.Control type="password" placeholder="Password" />
                                        </Form.Group>

                                    </Form>
                                </div>
                            </Col> */}
                        </Row>

                        <Row>
                            <h2 className="headin">Area of Interest:</h2>
                        </Row>


                        <Row>
                            <Col>
                                <div className="form_area">
                                    <Form>
                                        <Form.Group className="mb-3 " controlId="exampleForm.ControlInput1">
                                            <Form.Label>Home State:*</Form.Label>
                                            <Form.Control type="text" placeholder="Enter State" />
                                        </Form.Group>
                                    </Form>
                                </div>
                            </Col>

                        </Row>
                        <Row>
                            <Col>
                                <div className="form_area">
                                    <Form>
                                        <Form.Group className="mb-3 " controlId="exampleForm.ControlInput1">
                                            <Form.Label>Home County:*</Form.Label>
                                            <Form.Control type="text" placeholder="Enter County" />
                                        </Form.Group>
                                    </Form>
                                </div>
                            </Col>
                        </Row>
                        <Row>
                            <Col className="avail">
                                Avaliable for:
                            </Col>
                        </Row>
                        <Row>
                            
                            <Col>
                                <div className="form_area">
                                    <div key={`default-checkbox`} className="mb-3">
                                        <Form.Check // prettier-ignore
                                            type='checkbox'
                                            id={`default-checkbox`}
                                            label={`Collaboration`}
                                            className="remeasdasmber"
                                        />
                                    </div>
                                    
                                    
                                </div>
                            </Col>
                            <Col>
                            <div className="form_area">

                            <div key={`default-checkbox`} className="mb-3">
                                        <Form.Check // prettier-ignore
                                            type='checkbox'
                                            id={`default-checkbox`}
                                            label={`Hirement`}
                                            className="remeasdasmber"
                                        />
                                    </div>
                                    </div>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <div className="form_area">
                                    <Form>
                                        <Button onClick={() => navigateToPath('/search')} className="sub_btn">Submit</Button>

                                    </Form>
                                </div>
                            </Col>
                        </Row>
                    </div>
                </Container>
            </section>
        </div>

    );
}