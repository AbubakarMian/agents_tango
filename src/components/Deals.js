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
import Nav_bar_area from "./NavBar";

export default function Reels_page_export(props) {
  const navigate = useNavigate();

  const navigateToPath = (path) => {
    navigate(path);
  };
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

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
            <div
              className="img_area"
              onClick={() => {
                navigate("/reelvideo");
              }}
            >
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
              <p className="info_box_text">60 Moonta Road, Moonta Bay</p>
              <p className="info_box_text">Bed 4 Bath 1105m2</p>
            </div>

            <Button className="chatbtn_double">View</Button>
          </Col>
        </Row>
        <Row className="reel_box_deal">
          <Col>
            <div
              className="img_area"
              onClick={() => {
                navigate("/reelvideo");
              }}
            >
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
              <p className="info_box_text">9 Numbat Drive, Beveridge</p>
              <p className="info_box_text">4 Bed 2 Bath 362m2</p>
            </div>
            <Button className="chatbtn_double">View</Button>
          </Col>
        </Row>
        <Row className="reel_box_deal">
          <Col>
            <div
              className="img_area"
              onClick={() => {
                navigate("/reelvideo");
              }}
            >
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
              <p className="info_box_text">3 Bed 2 Bath 310m2</p>
            </div>

            <Button className="chatbtn_double">View</Button>
          </Col>
        </Row>

        <Row className="">
          <Col>
            <Button className="create_btn" onClick={handleShow}>
              CREATE NEW
            </Button>
            <div className="modal_plac">
              <Modal
                show={show}
                onHide={handleClose}
                {...props}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
              >
                <Modal.Header closeButton>
                  <Modal.Title>Select Type</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <p> What kind of deal you want to make?</p>
                  <div className="buttons_area">
                    {/* <Button className="modal_btn"> Hire</Button> */}

                    <CreateHireModal />

                    {/* <Button className="modal_btn"> collaboration</Button> */}
                    <CreateCollaborationModal />
                  </div>
                </Modal.Body>
                <Modal.Footer>
                  <Button variant="secondary" onClick={handleClose}>
                    Close
                  </Button>
                </Modal.Footer>
              </Modal>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

const CreateHireModal = () => {
  const [show, setShow] = useState(false);
  return (
    <>
      <Button className="modal_btn" onClick={() => setShow(true)}>
        {" "}
        Hire
      </Button>
      <Modal
        show={show}
        onHide={() => setShow(false)}
        dialogClassName="modal-90w"
        aria-labelledby="example-custom-modal-styling-title"
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-custom-modal-styling-title">
            Hire{" "}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>Hire</Modal.Body>
      </Modal>
    </>
  );
};

const CreateCollaborationModal = () => {
  const [show, setShow] = useState(false);
  return (
    <>
      <Button className="modal_btn" onClick={() => setShow(true)}>
        {" "}
        collaboration
      </Button>
      <Modal
        show={show}
        onHide={() => setShow(false)}
        dialogClassName="modal-90w"
        aria-labelledby="example-custom-modal-styling-title"
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-custom-modal-styling-title">
collaboration          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
        collaboration
        </Modal.Body>
      </Modal>
    </>
  );
};
