import React from "react";
import { Link } from "react-router-dom";
import "./style/Category.css";

const Category = (props) => {
  return (
    <>
      <div class="col-lg-6">
        <div className="list-item">
          <img class="img-fluid d-block w-100" src={props.imgURL} alt="..." />
          <h3>{props.details}</h3>
          <div className="button">
            <button>
              <Link to="/product">{props.type1}</Link>
            </button>
            <button className={props.type2 === undefined ? "hide" : "nothide"}>
              <Link to="#">{props.type2 === undefined ? "tt" : props.type2}</Link>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default  Category
