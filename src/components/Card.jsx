import React from "react";

function Card(props) {
  if (props.state === true) {
    return (
      <div className="item-div" onClick={props.updateState}>
        <div className="q-div">
          <p
            id={props.id}
            style={{ color: "hsl(237, 12%, 33%)" }}
            className="title"
          >
            {props.info.title}
          </p>
          <img
            src="images\icon-arrow-down.svg"
            style={{ transform: "rotate(180deg)" }}
            alt="arrow"
          />
        </div>
        <p className="body-text">{props.info.body}</p>
      </div>
    );
  } else {
    return (
      <div className="item-div" onClick={props.updateState} aria-hidden="true">
        <div className="q-div">
          <p id={props.id} className="title">
            {props.info.title}
          </p>
          <img src="images\icon-arrow-down.svg" alt="arrow" id={props.id} />
        </div>
      </div>
    );
  }
}

export default Card;
