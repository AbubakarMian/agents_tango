import React from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Offcanvas from "react-bootstrap/Offcanvas";
import "./../styles/agentlist.css";
import "./../styles/video-react.css";
import Carousel from "react-bootstrap/Carousel";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { faThumbsUp } from "@fortawesome/free-solid-svg-icons";
import { faCameraRetro } from "@fortawesome/free-solid-svg-icons";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Modal from "react-bootstrap/Modal";
import { useState } from "react";
import Collapse from "react-bootstrap/Collapse";
import InputGroup from "react-bootstrap/InputGroup";
import { useNavigate } from "react-router-dom";
import { Player } from "video-react";
import Nav_bar_area from './NavBar';

export default function Reels_page_export() {
  const navigate = useNavigate();

  const navigateToPath = (path) => {
    navigate(path);
  };
  return (
    <section className="">
      <Nav_bar_area />
      <Container fluid className="reelArea">
        <Row>
          <Col>
            <div className="topscreen_hed">Agents List</div>
          </Col>
        </Row>
        
        <Row className="reel_box">
          <Col>
            <div className="img_area" onClick={() => { navigate('/reelvideo') }}>
              <img src="./images/profile.png" />

            </div>
          </Col>
          <Col>
            <div className="info_area">
              <p>
                <b>Robert</b>
              </p>
              <p>
                <FontAwesomeIcon icon={faStar} style={{ color: "#fb9d23" }} /> 3.9 (40 reviews)

              </p>
              <p className="info_box_text">
                10 reviews in last 12 months
              </p>
              <p className="info_box_text">
                Licensee in Charge/Sales...
              </p>
              <p className="info_box_text">
                One Agency - Orange.
              </p>
            </div>
            <Button className="chatbtn">Chat</Button>
          </Col>
        </Row>
        <Row className="reel_box">
          <Col>
            <div className="img_area" onClick={() => { navigate('/reelvideo') }}>
              <img src="./images/profile2.png" />
            </div>
          </Col>
          <Col>
            <div className="info_area">
              <p>
                <b>Albert</b>
              </p>
              <p>
                <FontAwesomeIcon icon={faStar} style={{ color: "#fb9d23" }} /> 3.9 (40 reviews)

              </p>
              <p className="info_box_text">
                10 reviews in last 12 months
              </p>
              <p className="info_box_text">
                Licensee in Charge/Sales...
              </p>
              <p className="info_box_text">
                One Agency - Orange.
              </p>
            </div>
            <Button className="chatbtn">Chat</Button>
          </Col>
        </Row>
        <Row className="reel_box">
          <Col>
            <div className="img_area" onClick={() => { navigate('/reelvideo') }}>
              <img src="./images/profile3.png" />
            </div>
          </Col>
          <Col>
            <div className="info_area">
              <p>
                <b>Smith</b>
              </p>

              <p>
                <FontAwesomeIcon icon={faStar} style={{ color: "#fb9d23" }} /> 3.9 (40 reviews)

              </p>
              <p className="info_box_text">
                10 reviews in last 12 months
              </p>
              <p className="info_box_text">
                Licensee in Charge/Sales...
              </p>
              <p className="info_box_text">
                One Agency - Orange.
              </p>
            </div>
            <Button className="chatbtn">Chat</Button>
          </Col>
        </Row>

        <Row className="reel_box">
          <Col>
            <div className="img_area" onClick={() => { navigate('/reelvideo') }}>
              <img src="./images/profile4.png" />
            </div>
          </Col>
          <Col>
            <div className="info_area">
              <p>
                <b>Jacob</b>
              </p>
              <p>
                <FontAwesomeIcon icon={faStar} style={{ color: "#fb9d23" }} /> 3.9 (40 reviews)

              </p>
              <p className="info_box_text">
                10 reviews in last 12 months
              </p>
              <p className="info_box_text">
                Licensee in Charge/Sales...
              </p>
              <p className="info_box_text">
                One Agency - Orange.
              </p>
            </div>
            <Button className="chatbtn">Chat</Button>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

const Login_form = () => {
  return (
    <>
      <Form.Label className="labl" htmlFor="basic-url">
        Email (required*)
      </Form.Label>
      <InputGroup className="mb-3">
        <InputGroup.Text id="basic-addon1">@</InputGroup.Text>
        <Form.Control
          placeholder="Enter your Email Address"
          aria-label="Username"
          aria-describedby="basic-addon1"
        />
      </InputGroup>
      <Form.Label className="labl" htmlFor="basic-url">
        Password (required*)
      </Form.Label>
      <InputGroup className="mb-3">
        <InputGroup.Text id="basic-addon1">#</InputGroup.Text>
        <Form.Control
          placeholder="Enter Password"
          aria-label="Password"
          aria-describedby="basic-addon1"
        />
      </InputGroup>
      <div key={`default-checkbox`} className="mb-3">
        <Form.Check // prettier-ignore
          type="checkbox"
          id={`default-checkbox`}
          label={`Remember Me`}
          className="remember"
        />
      </div>
      <Button className="login_btn" variant="primary">
        LOG IN
      </Button>
    </>
  );
};
