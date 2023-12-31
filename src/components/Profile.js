import React from "react";
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';
import './../styles/profile.css';
import Carousel from 'react-bootstrap/Carousel';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserPlus,
        faLocationDot }
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



export default function Profile() {
    const navigate = useNavigate();

    const navigateToPath = (path) => {
        navigate(path);
    };
    return (
        <div>
            <Nav_bar_area />
            
        <section className="bg_color">

            
            <h3 className="profile_head">Profile</h3>
            <Container fluid>
                <Row>
                    <div>
                        <div className="pic_area">
                        <img
                            src="../images/profile.png"
                        />
                        </div>
                    </div>
                </Row>

            </Container>
            <Container>
                <div className="form_cover_profile">
                    <Row>
                        <Col>
                            <div className="form_area">
                                <Form>
                                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                        <Form.Label>Full Name</Form.Label>
                                        <Form.Control type="text" placeholder="Full Name" value={'Jhon Michel'} readOnly/>
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
                                        <Form.Label>Email</Form.Label>
                                        <Form.Control type="email" placeholder="name@example.com" value={'Jhon@mail.com'} readOnly />
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
                                        <Form.Label>Mobile Number</Form.Label>
                                        <Form.Control type="text" placeholder="Enter Mobile No" value={'+123-456-789'} readOnly />
                                    </Form.Group>

                                </Form>
                            </div>
                        </Col>
                    </Row>
                    <Row>
                            <h2 className="headinprofile">Area of Interest:</h2>
                        </Row>
                    <Row>
                    <Col>
                                <div className="form_area">
                                    <Form>
                                        <Form.Group className="mb-3 " controlId="exampleForm.ControlInput1">
                                            <Form.Label>Home State:</Form.Label>
                                            <Form.Control type="text" placeholder="Enter State"  value={'NewYork'} readOnly   />
                                        </Form.Group>
                                    </Form>
                                </div>
                            </Col>
                            <Col>
                                <div className="form_area">
                                    <Form>
                                        <Form.Group className="mb-3 " controlId="exampleForm.ControlInput1">
                                            <Form.Label>Home County:</Form.Label>
                                            <Form.Control type="text" placeholder="Enter County"  value={'USA'} readOnly  />
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
                                        <Form.Label>Avaliable For</Form.Label>
                                        <Form.Control type="text" placeholder="Full Name" value={'Collaboration'} readOnly/>
                                    </Form.Group>

                                </Form>
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <div className="form_area">
                                <Form>
                                    <Button onClick={()=>navigateToPath('/search')}className="submit_btn">Edit Profile</Button>

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

