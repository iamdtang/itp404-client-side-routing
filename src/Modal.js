import "./Modal.css";
import { createPortal } from "react-dom";

export default function Modal(props) {
  return createPortal(
    <>
      <div className="custom-modal-backdrop"></div>
      <div className="custom-modal">
        <button type="button" onClick={props.onClose}>
          Close
        </button>

        <h3>{props.title}</h3>
        <div>{props.children}</div>
      </div>
    </>,
    document.getElementById("modal-container")
  );
}
