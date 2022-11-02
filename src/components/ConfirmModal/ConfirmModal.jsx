import React, { useState, useEffect } from "react";
import Modal from "../Modal/Modal";

import "./ConfirmModal.scss";

const ConfirmModal = ({
  title,
  message,
  onConfirm,
  onCancel,
  show,
  setShow,
}) => {
  console.log(show);
  return (
    <Modal onClose={onCancel} open={show} title={title} width="400px">
      <div className="confirm-modal">
        <p className="confirm-modal__message">{message}</p>
        <div className="confirm-modal__buttons">
          <button className="confirm-modal__button__confirm" onClick={onConfirm}>
            Confirmar
          </button>
          <button className="confirm-modal__button__cancel" onClick={onCancel}>
            Cancelar
          </button>
        </div>
      </div>
    </Modal>
  );
};

export default ConfirmModal;
