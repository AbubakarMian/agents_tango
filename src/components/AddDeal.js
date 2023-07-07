import React from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Offcanvas from "react-bootstrap/Offcanvas";
import "./../styles/adddeal.css";
import Carousel from "react-bootstrap/Carousel";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faLocationDot } from "@fortawesome/free-solid-svg-icons";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Modal from "react-bootstrap/Modal";
import { useState } from "react";
import Collapse from "react-bootstrap/Collapse";
import InputGroup from "react-bootstrap/InputGroup";
import { useNavigate } from "react-router-dom";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import ToggleButton from "react-bootstrap/ToggleButton";
import Dropdown from "react-bootstrap/Dropdown";
import Nav_bar_area from "./NavBar";
{
  /* <Nav_bar_area /> */
}

export default function Profile() {
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
      <div className="background">
        <section className="">
          <Container>
            <div className="head_cover">
              <Row className="">
                <Col>
                  <img className="deal_agent_pic" src="./images/profile.png" />
                </Col>
                <Col>
                  <div className="head_title">Ash Brown</div>
                </Col>
              </Row>
            </div>
            <div className="box_cover">
              <Row>
                <div className="deal_head">New Deal</div>
              </Row>
              <Row>
                <Col>
                  <div className="form_area">
                    <Form>
                      <Form.Group
                        className="mb-3"
                        controlId="exampleForm.ControlInput1"
                      >
                        <Form.Label>Property Name:</Form.Label>
                        <Form.Control type="text" placeholder="Property Name" />
                      </Form.Group>
                    </Form>
                  </div>
                </Col>
              </Row>

              <Row>
                <Col>
                  <div className="form_area">
                    <Form>
                      <Form.Group
                        className="mb-3"
                        controlId="exampleForm.ControlInput1"
                      >
                        <Form.Label>Agent Name:</Form.Label>
                        <Form.Control type="text" placeholder="Agent Name" />
                      </Form.Group>
                    </Form>
                  </div>
                </Col>
              </Row>

              <Row>
                <Col>
                  <div className="form_area">
                    <Form>
                      <Form.Group
                        className="mb-3"
                        controlId="exampleForm.ControlInput1"
                      >
                        <Form.Label>Docusign URL:</Form.Label>
                        <Form.Control type="text" placeholder="Docusign Url" />
                      </Form.Group>
                    </Form>
                  </div>
                </Col>
              </Row>

              <Row>
                <Col>
                  <div className="form_area">
                    <Form>
                      <Form.Group
                        className="mb-3"
                        controlId="exampleForm.ControlInput1"
                      >
                        <Form.Label> Description:</Form.Label>
                        <Form.Control
                          as="textarea"
                          placeholder="Description"
                          style={{ height: "100px" }}
                        />
                      </Form.Group>
                    </Form>
                  </div>
                </Col>
              </Row>
              <Row>
                <Col>
                  <div className="form_area">
                    <Form>
                      <Form.Group
                        className="mb-3"
                        controlId="exampleForm.ControlInput1"
                      >
                        <Form.Label> Property:</Form.Label>
                        <Button className="prp_btn">Buy</Button>
                        <Button className="prp_btn">Sell</Button>
                      </Form.Group>
                    </Form>
                  </div>
                </Col>
              </Row>
              <Row>
                <Col>
                  <div className="form_area">
                    <Form>
                      <Form.Group
                        className="mb-3"
                        controlId="exampleForm.ControlInput1"
                      >
                        <Form.Label> Deal Type:</Form.Label>
                        <Form.Select aria-label="Default select example">
                          <option>select</option>
                          <option value="1">Hire</option>
                          <option value="2">Collaboration</option>
                        </Form.Select>{" "}
                      </Form.Group>
                    </Form>
                  </div>
                </Col>
              </Row>
              <Row>
                <Col>
                  <Button className="save_btn_prp">Save</Button>
                </Col>
              </Row>
            </div>
          </Container>
        </section>
      </div>
    </div>
  );
}
