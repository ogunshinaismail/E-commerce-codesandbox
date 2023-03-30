import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "bootstrap-icons/font/bootstrap-icons.css";
// import "font-awesome/css/font-awesome.min.css";
// import { faSearch } from "@fortawesome/free-solid-svg-icons";
// import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
// import { faHeart } from "@fortawesome/free-solid-svg-icons";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./style/Header.css";
import logo from "../images/logo.png";
import { useEffect, useRef, useState } from "react";
import { CartState } from "../context/Context";
import CartModal from "./CartModal";
import { Link, useLocation, useNavigate } from 'react-router-dom'

export default function Header() {
  const [isSearch, setIsSearch] = useState(false);
  const location = useLocation()

  const trending = useRef(null)
  // const [searcTerm, setSearchTerm] = useState("");
  const [showCart, setShowCart] = useState(false);
  const navigate = useNavigate();
  const { 
      state: { wishlist, cart },
      productDispatch, 
  } = CartState();

  const processClick =(id) => {
    if (document.getElementById("close")) {
    document.getElementById("close").click()
      
    }
    if(document.getElementById(id)) {
      document.getElementById(id).scrollIntoView({behavior: 'smooth'})


    }

  }
  useEffect(()=>{
    if(location.hash || location.hash !== '') {
      processClick(location.hash.substring(1))
      // console.log(43567);
    }
  },[])
 
  

  return (
    <>
      <nav class="navbar navbar-expand-xl fixed-top py-3 px-5 bg-white">
        <div class="container-fluid header">
          <Link to="/" class="navbar-brand">
            <img class="d-block" src={logo} alt="WAGWAN" />
          </Link>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasNavbar"
            aria-controls="offcanvasNavbar"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div
            class="offcanvas offcanvas-end"
            tabindex="-1"
            id="offcanvasNavbar"
            aria-labelledby="offcanvasNavbarLabel"
          >
            <div class="offcanvas-header mt-3">
              <div class="offcanvas-title" id="offcanvasNavbarLabel">
                <img src={logo} alt="WAGWAN" />
              </div>
              <button
                type="button"
                id="close"
                class="btn-close"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
              ></button>
            </div>

            <div class="offcanvas-body">
              <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
                <li class="nav-item">
                  <a class="nav-link" href="/#home" onClick={() => processClick('home')}>
                    HOME
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="/#trending" onClick={() => processClick('trending')}>
                    TRENDING
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="/#category" onClick={() => processClick('category')}>
                    CATEGORY
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="/#contact" onClick={() => processClick('contact')}>
                    CONTACT
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">
                    LOGIN
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className={isSearch ? "search-form active" : "search-form"}>
            <input 
              type="search" 
              placeholder="What are you looking for ?" 
              onKeyDown={(e) => {
                if (e.key === 'Enter') {
                  navigate("/product")
                }
                productDispatch({
                  type: "FILTER_BY_SEARCH",
                  payload: e.target.value
                })
              }} 
            />
            <label for="search-box" class=""></label>
          </div>
          
          <button
            onClick={() => {
              setIsSearch(!isSearch);
            }}
            className="search-icon"
          >
            <i class="bi bi-search"></i>
          </button>

          <button className="favorite" onClick={() => navigate("/wishlist")}>
            <i class="bi bi-heart"></i>
            <div className="cart-length">
              <p>{wishlist.length}</p>
            </div>
          </button>

          <button className="shopping-crat" onClick={() => setShowCart(true)}>
            <i class="bi bi-bag"></i>
            <div className="cart-length">
              <p>{cart.length}</p>
            </div>
          </button>
        </div>
      </nav>

      {showCart ? <CartModal setShowCart={setShowCart} /> : null}
    </>
  );
}
