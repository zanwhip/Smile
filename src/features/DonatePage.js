import React from "react";

function donatePage() {
  return (
    <>
      <button id="openModalButton">Open Modal</button>
      <div id="modal" class="modal">
        <div class="modal-content">
          <span id="closeModal" class="close">
            &times;
          </span>
          <p>Your modal content goes here.</p>
        </div>
      </div>
    </>
  );
}
export default modal;
