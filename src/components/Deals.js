import React from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import "./../styles/deals.css";
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
      <Container fluid className="dealarea">
        <Row>
          <Col>
            <img className="deal_agent_pic" src="./images/profile.png" />
          </Col>
          <Col>
            <div className="topscreen_hed_deal">Ash Brown Deals</div>
          </Col>
        </Row>

        <Row className="reel_box_deal">
          <Col>
            <div className="img_area" onClick={() => { navigate('/reelvideo') }}>
              <img src="./images/5.jpg" />
              <p className="sign">DocuSign</p>   

            </div>
          </Col>
          <Col>
            <div className="info_area">
              <p>
                <b>Moonta Bay</b>
              </p>
             
              <p className="">
               <b>$698,000</b>

              </p>
              <p className="info_box_text">
              60 Moonta Road, Moonta Bay
              </p>
              <p className="info_box_text">
              Bed 4 Bath 1105m2
              </p>
            </div>
            
              <Button className="chatbtn_double">View</Button>
          </Col>
        </Row>
        <Row className="reel_box_deal">
          <Col>
            <div className="img_area" onClick={() => { navigate('/reelvideo') }}>
              <img src="./images/6.jpg" />
              <p className="sign">DocuSign</p>   

            </div>
          </Col>
          <Col>
          <div className="info_area">
              <p>
                <b>Beveridge</b>
              </p>
             
              <p className="">
               <b>$124,000</b>

              </p>
              <p className="info_box_text">
              9 Numbat Drive, Beveridge
              </p>
              <p className="info_box_text">
              4 Bed 2 Bath 362m2
              </p>
            </div>
              <Button className="chatbtn_double">View</Button>
          </Col>
        </Row>
        <Row className="reel_box_deal">
          <Col>
            <div className="img_area" onClick={() => { navigate('/reelvideo') }}>
              <img src="./images/7.jpg" />
              <p className="sign">DocuSign</p>   

            </div>
          </Col>
          <Col>
          <div className="info_area">
              <p>
                <b>Capel Sound</b>
              </p>
             
              <p className="">
               <b>$102,000</b>

              </p>
              <p className="info_box_text">
              2/22 Chatfield Avenue, Capel Sound
              </p>
              <p className="info_box_text">
              3 Bed 2 Bath 310m2
              </p>
            </div>
            
              <Button className="chatbtn_double">View</Button>
          </Col>
        </Row>

        <Row className="">
          <Col>
           
              <Button className="create_btn">CREATE NEW</Button>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
