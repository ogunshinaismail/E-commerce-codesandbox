import React from 'react'
import Header from './Header'
import Contact from './Contact'
import { useParams } from 'react-router-dom'
// import trendinglist from '../Trending'
import { Carousel } from "react-responsive-carousel";
import styles from 'react-responsive-carousel/lib/styles/carousel.min.css';
import Productdata from '../ProductData'
import { CartState } from '../context/Context'
import './style/ProductDetails.css'

const ProductDetails = () => {
  const { id } = useParams();
  // const product = trendinglist[id - 1]
  const product = Productdata[id - 1]
  console.log(product);
  const {imgURL, details, price, img2, img3} = product;
  const { dispatch } = CartState()

  return (
    <div>
      <Header />
        
      <section className="productdetails--section">
        <div class="row g-0">
          {/* first coloumn start */}
          <div class="col-md-6 col-sm-12 ">
            <div className="product-corousel">
              <Carousel 
                showStatus={false}
                showIndicators={false}
                thumbWidth="200px"
                // infiniteLoop={true}
              >
                <div>
                  <img alt="..." src={imgURL} class='product-detail-img img-fluid'/>
                </div>
                <div>
                  <img alt="..." src={img2} class='product-detail-img img-fluid'/>
                </div>
                <div>
                  <img alt="..." src={img3} class='product-detail-img img-fluid'/>
                </div>
              </Carousel>
            </div>
          </div>
          {/* first column end */}
          <div class="col-md-6 col-sm-12 mt-5 product--info">
            <h2 className="product-name" class="text-black">
              {details}
            </h2>

            <p className="product--price">₦{price}</p>

            <ul class="pt-3">
              <li class="mb-3">Fabric: 60% cotton/37% polyester/3% elastane</li>
              <li class="mb-3">Machine wash</li>
              <li class="mb-3">Imported</li>
              <li class="mb-3">Colour Shown: White/Black/ Mix</li>
              <li class="mb-3">Style: SX7676-100</li>
            </ul>

            <label for="sizetype" class="mt-2 sizeS">
              Select Sizes (S-XXL) :
            </label>

            <select name="size" className="option-box" id="size">
              <option value=""> Choose an option</option>
              <option value="Small">S</option>
              <option value="Large">L</option>
              <option value="Xtra-large">XL</option>
            </select>

            <div class="mt-5 d-flex align-items-center gap-4">
              <div class="d-flex align-items-center incrementt-button">
                <span class="p-3">-</span>
                <span class="p-3">1</span>
                <span class="p-3">+</span>
              </div>

              <button 
                className="product-addtc"
                onClick={() => {
                  dispatch({
                      type: 'ADD_TO_CART',
                      payload: product
                  })
              }}
              >
                ADD TO CART
              </button>
            </div>

            <div class="mt-4">
              <p onClick={() => {
                  dispatch({
                      type: 'ADD_TO_WISHLIST',
                      payload: product
                  })
                }}
              >
                <i class="bi bi-heart product-wish"></i> Add to wishlist
              </p>
            </div>

            <div
              class="accordion accordion-flush mt-5"
              id="accordionFlushExample"
            >
              <div class="accordion-item">
                <h2 class="accordion-header" id="flush-headingOne">
                  <button
                    class="accordion-button collapsed text-uppercase"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#flush-collapseOne"
                    aria-expanded="false"
                    aria-controls="flush-collapseOne"
                  >
                    DESCRIPTION
                  </button>
                </h2>
                <div
                  id="flush-collapseOne"
                  class="accordion-collapse collapse"
                  aria-labelledby="flush-headingOne"
                  data-bs-parent="#accordionFlushExample"
                >
                  <div class="accordion-body">
                    <h4>SWEAT-WICKING COMFORT.</h4>
                    <p>
                      Power through your workout with the Nike Everyday Socks.
                      Soft yarns with sweat-wicking technology help keep your
                      feet comfortable and dry.
                    </p>
                    <h4 class="mb-3">Benefits</h4>
                    <ul>
                      <li>
                        Dri-FIT Technology helps your feet stay dry and
                        comfortable.
                      </li>
                      <li>Crew silhouette covers your ankle and lower calf.</li>
                      <li>Ribbed cuffs help keep the socks in place.</li>
                      <li>Arch band provides a supportive feel.</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div class="accordion-item">
                <h2 class="accordion-header" id="flush-headingTwo">
                  <button
                    class="accordion-button collapsed text-uppercase"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#flush-collapseTwo"
                    aria-expanded="false"
                    aria-controls="flush-collapseTwo"
                  >
                    Additional Information
                  </button>
                </h2>
                <div
                  id="flush-collapseTwo"
                  class="accordion-collapse collapse"
                  aria-labelledby="flush-headingTwo"
                  data-bs-parent="#accordionFlushExample"
                >
                  <div class="accordion-body">
                    <p>Amazing packaging</p>
                  </div>
                </div>
              </div>
              <div class="accordion-item">
                <h2 class="accordion-header" id="flush-headingThree">
                  <button
                    class="accordion-button collapsed text-uppercase"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#flush-collapseThree"
                    aria-expanded="false"
                    aria-controls="flush-collapseThree"
                  >
                    Reviews (0)
                  </button>
                </h2>
                <div
                  id="flush-collapseThree"
                  class="accordion-collapse collapse"
                  aria-labelledby="flush-headingThree"
                  data-bs-parent="#accordionFlushExample"
                >
                  <div class="accordion-body">
                    <p>There are no reviews yet.</p>
                    <h4 class="text-dark">
                      BE THE FIRST TO REVIEW “NIKE LIGHTWEIGHT CREW SOCKS (3
                      PAIRS) BLACK”
                    </h4>
                    <p>
                      Your email address will not be published. Required fields
                      are marked <b>*</b>
                    </p>
                    <p>
                      Your review <b>*</b>
                    </p>
                    <br />
                    <form className="review-form">
                      <textarea className="review-text"></textarea>
                      <div>
                        <label class="mt-2" for="name">
                          Name <b>*</b>
                        </label>
                        <br />
                        <input type="text" />
                      </div>
                      <div>
                        <label class="mt-2" for="email">
                          Email <b>*</b>
                        </label>
                        <br />
                        <input type="email" />
                      </div>
                      <button class="mt-4" type="submit">
                        Submit
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      <Contact />
    </div>
  )
}

export default ProductDetails