import React, { useState, useEffect } from "react";
import "./alertComponent.css";

function AlertComponent({ errorMessage, hideError }) {
  const [modalDisplay, toggleDisplay] = useState("none");

  const openModal = () => {
    toggleDisplay("block");
  };

  const closeModal = () => {
    toggleDisplay("none");
    hideError(null);
  };

  useEffect(() => {
    if (errorMessage !== null) {
      openModal();
    } else {
      closeModal();
    }
  });

  const getErrorHtml = () => {
    return (
      <div
        className={"alert alert-danger card col-12 col-lg-6  hv-center"}
        role="alert"
        style={{ display: modalDisplay }}
      >
        <button
          type="button"
          className="close"
          aria-label="Close"
          onClick={() => closeModal()}
        >
          <span aria-hidden="true">&times;</span>
        </button>
        {errorMessage.map((error, index) => (
          <div key={`error-${index}`} className="d-flex alertMessage">
            <p key={error}>Error: {error}</p>
          </div>
        ))}
      </div>
    );
  };

  return errorMessage?.length ? getErrorHtml() : <div></div>;
}

export default AlertComponent;
