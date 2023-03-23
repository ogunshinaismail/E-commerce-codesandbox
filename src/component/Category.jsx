import React from "react";
import "./style/Category.css";

export default function Category(props) {
  return (
    <>
      <div class="col-lg-6">
        <div className="list-item">
          <img class="img-fluid d-block w-100" src={props.imgURL} alt="..." />
          <h3>{props.details}</h3>
          <div className="button">
            <button>
              <a href="#">{props.type1}</a>
            </button>
            {console.log(props.type2)}
            <button className={props.type2 === undefined ? "hide" : "nothide"}>
              <a href="#">{props.type2 === undefined ? "tt" : props.type2}</a>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
