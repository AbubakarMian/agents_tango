import React from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Offcanvas from "react-bootstrap/Offcanvas";
import "./../styles/property.css";
import Carousel from "react-bootstrap/Carousel";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserPlus, faLocationDot } from "@fortawesome/free-solid-svg-icons";
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
      <Nav_bar_area />
      <div className="background">
        <section className="bg_color_property">
          <Container>
            <Row>
              <div className="add_head">
                <h4>Add Property</h4>
              </div>
            </Row>
            <Row>
              <div className="main_head">
                <h4>Basic Property Information</h4>
              </div>
            </Row>

            <Row>
              <Col>
                <div className="form_area">
                  <Form>
                    <Form.Group
                      className="mb-3"
                      controlId="exampleForm.ControlInput1"
                    >
                      <Form.Label>Property Address:</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Property Address:"
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
                      <Form.Label>Owner Name:</Form.Label>
                      <Form.Control type="text" placeholder="Owner Name:" />
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
                      <Form.Label>Tax / Parcel ID:</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Tax / Parcel ID:"
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
                      <Form.Label>Legal Description:</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Legal Description:"
                      />
                    </Form.Group>
                  </Form>
                </div>
              </Col>
            </Row>
            <Row>
              <div className="main_head">
                <h4>Chain Of Title Information</h4>
              </div>
            </Row>
            <Row>
              <Col>
                <div className="form_area">
                  <Form>
                    <Form.Group
                      className="mb-3"
                      controlId="exampleForm.ControlInput1"
                    >
                      <Form.Label>Deed Holder: </Form.Label>
                      <Form.Control type="text" placeholder="Deed Holder: " />
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
                      <Form.Label>Deed Type:</Form.Label>
                      <Form.Control type="text" placeholder="Deed Type:" />
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
                      <Form.Label>Deed Dated:</Form.Label>
                      <Form.Control type="text" placeholder="Deed Dated:" />
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
                      <Form.Label>Deed Recorded:</Form.Label>
                      <Form.Control type="text" placeholder="Deed Recorded:" />
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
                      <Form.Label>Deed Document #:</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Deed Document #:"
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
                      <Form.Label>Deeded From:</Form.Label>
                      <Form.Control type="text" placeholder="Deeded From:" />
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
                      <Form.Label>Deed Comments:</Form.Label>
                      <Form.Control type="text" placeholder="Deed Comments:" />
                    </Form.Group>
                  </Form>
                </div>
              </Col>
            </Row>
            <Row>
              <div className="main_head">
                <h4>Property Tax Information</h4>
              </div>
            </Row>
            <Row>
              <Col>
                <div className="form_area">
                  <Form>
                    <Form.Group
                      className="mb-3"
                      controlId="exampleForm.ControlInput1"
                    >
                      <Form.Label>Total Value:</Form.Label>
                      <Form.Control type="text" placeholder="Total Value" />
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
                      <Form.Label>Exemption:</Form.Label>
                      <Form.Control type="text" placeholder="Exemption" />
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
                      <Form.Label>Yearly Taxes:</Form.Label>
                      <Form.Control type="text" placeholder="Yearly Taxes" />
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
                      <Form.Label>Taxes Paid:</Form.Label>
                      <Form.Control type="text" placeholder="Taxes Paid" />
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
                      <Form.Label>Due Date:</Form.Label>
                      <Form.Control type="text" placeholder="Due Date" />
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
                      <Form.Label>Paid Date:</Form.Label>
                      <Form.Control type="text" placeholder="Paid Date" />
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
                      <Form.Label>Payment Status:</Form.Label>
                      <Form.Control type="text" placeholder="Payment Status" />
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
                      <Form.Label>Tax Comments:</Form.Label>
                      <Form.Control type="text" placeholder="Tax Comments" />
                    </Form.Group>
                  </Form>
                </div>
              </Col>
            </Row>
            <Row>
              <div className="main_head">
                <h4>Mortgage</h4>
              </div>
            </Row>
            <Row>
              <Col>
                <div className="form_area">
                  <Form>
                    <Form.Group
                      className="mb-3"
                      controlId="exampleForm.ControlInput1"
                    >
                      <Form.Label>Mortgage Lender:</Form.Label>
                      <Form.Control type="text" placeholder="Mortgage Lender" />
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
                      <Form.Label>Mortgage Borrower:</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Mortgage Borrower"
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
                      <Form.Label>Date | Recorded:</Form.Label>
                      <Form.Control type="text" placeholder="Property" />
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
                      <Form.Label>Mortgage Amount:</Form.Label>
                      <Form.Control type="text" placeholder="Mortgage Amount" />
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
                      <Form.Label>Document #: </Form.Label>
                      <Form.Control type="text" placeholder="Document #" />
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
                      <Form.Label>Mortgage Litigation:</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Mortgage Litigation"
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
                      <Form.Label>Mortgage Comments:</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Mortgage Comments:"
                      />
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
          </Container>
        </section>
      </div>
    </div>
  );
}
