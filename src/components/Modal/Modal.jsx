import React, { forwardRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import "./Modal.scss";

const Modal = forwardRef(({ title, onClose, children, width }, ref) => {
  return (
    <div className="modal__container" style={{ width: width }}>
      <div className="modal__header">
        <h6 className="modal__title">{title}</h6>
        <button className="modal__close" onClick={onClose}>
          <FontAwesomeIcon icon={faTimes} />
        </button>
      </div>
      {children}
    </div>
  );
});

export default Modal;
