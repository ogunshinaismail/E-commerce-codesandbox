import React from "react";
import { Link } from "react-router-dom";
import "./style/Category.css";
import CategoryList from "../category";

const Category = (props) => {
  return (
    <>
      <div class="row g-0">
        {CategoryList && CategoryList.map( cat => (
          <div class='col-lg-6'>
            <div className="list-item">
            <img class="img-fluid d-block w-100" src={cat.imgURL} alt="..." />
            <h3>{cat.details}</h3>
            <div className="button">
              <button>
                <Link to={`/product/${cat.details.toLocaleLowerCase()}/?filter=men`}>{cat.type1}</Link>
              </button>
              <button className={cat.type2 === undefined ? "hide" : "nothide"}>
                <Link to={`/product/${cat.details.toLocaleLowerCase()}/?filter=women`}>{cat.type2 === undefined ? "tt" : cat.type2}</Link>
              </button>
            </div>
          </div>
          </div>
        ))}
      </div>
      
    </>
  );
}

export default  Category
