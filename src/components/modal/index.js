import React from "react";
import { Modal, Button } from "react-bootstrap";
import LoginForm from "./LoginForm";
import RegisterForm from "./RegisterForm";
import "./style.css";

const ModalWrapper = ({show,login,handleShow,handleClose,registerClicked,loginClicked}) => {
  return (
    <Modal
    show={show} handleClose={handleClose}
      size="sm"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      id="loginModal"
      className="modal fade login"
    >
      <Modal.Body>
        <div className="modal--close--button" onClick={handleClose}>
          <i className="fas fa-times"></i>
        </div>
        {login ? (
              <LoginForm registerClicked={registerClicked} />
            ) : (
          <RegisterForm loginClicked={loginClicked} />
        )}
      </Modal.Body>
    </Modal>
  );
};


export default ModalWrapper;
