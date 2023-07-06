import React from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import "./../styles/myagents.css";
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
            <div className="topscreen_hed">My Agents</div>
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
            <div className="flx">
            <Button className="chatbtn_double">Chat</Button>
            <Button className="chatbtn_double">Deals</Button>
            </div>
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
            <div className="flx">
            <Button className="chatbtn_double">Chat</Button>
            <Button className="chatbtn_double">Deals</Button>
            </div>
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
            <div className="flx">
            <Button className="chatbtn_double">Chat</Button>
            <Button className="chatbtn_double">Deals</Button>
            </div>
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
            <div className="flx">
            <Button className="chatbtn_double">Chat</Button>
            <Button className="chatbtn_double">Deals</Button>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
