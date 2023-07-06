import React from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Offcanvas from "react-bootstrap/Offcanvas";

import "./../styles/chat.css";
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
import 'react-chat-elements/dist/main.css';
import { MessageBox, ChatItem, Input } from 'react-chat-elements';
// import { ChatItem } from 'react-chat-elements'



export default function Chat() {
    const navigate = useNavigate();
    let inputReferance = React.createRef()
    let inputClear = () => { }
    // inputClear()

    const navigateToPath = (path) => {
        navigate(path);
    };
    return (
        <section className="">
            <Nav_bar_area />
            <Container fluid className="reelArea">
                {/* <Row> */}
                {/* <Col>
            <div className="topscreen_hed">Chat</div>
          </Col> */}
                <ChatItem
                    avatar={"./images/profile.png"}
                    alt={'Reactjs'}
                    title={'Facebook'}
                    subtitle={'What are you doing?'}
                    date={new Date()}
                    unread={0}
                />
                <ChatItem
                    avatar={"./images/driver.png"}
                    alt={'Reactjs'}
                    title={'Facebook'}
                    subtitle={'What are you doing?'}
                    date={new Date()}
                    unread={0}
                />


                {/* </Row> */}
                <div className="txt-box">
                <Input
                    referance={inputReferance}
                    placeholder='Type here...'
                    // multiline={true}
                    type="text"
                    value={""}
                    className="inpu_box"
                    rightButtons={<Button className="btn-chat-custom" text='Send' >Send</Button>
                }
                /></div>

                {/* ;<Input clear={clear => (inputClear = clear)} placeholder='Type here...' /> */}

            </Container>
        </section>
    );

}

