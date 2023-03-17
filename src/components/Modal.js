import React from "react";

export default function (props) {
  return (
    <div className="modal-ent">
      <div className="modal-content">
        <div className="modal-header">
          <h1>{props.title}</h1>
          <img
            src="https://www.freeiconspng.com/thumbs/close-icon/close-icon-30.png"
            onClick={() => props.setShow(false)}
          />
        </div>
        <div className="main">{props.children}</div>
        <div className="modal-footer">
          <button onClick={() => props.setShow(false)}>Cancel</button>
          <button onClick={() => props.setShow(false)}>Confirm</button>
        </div>
      </div>
    </div>
  );
}
