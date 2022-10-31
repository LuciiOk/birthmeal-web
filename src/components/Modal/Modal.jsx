import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import './Modal.scss';

const Modal = ({ title, handleOpen, children }) => {
  return (
    <div className="modal__container">
      <div className="modal__header">
        <h6 className="modal__title">{title}</h6>
        <button className="modal__close" onClick={() => handleOpen(false)}>
          <FontAwesomeIcon icon={faTimes} />
        </button>
      </div>
      {children}
    </div>
  );
};

export default Modal;
