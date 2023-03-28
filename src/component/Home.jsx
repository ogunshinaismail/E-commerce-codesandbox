import slider1 from "../images/slider-1.png";
import slider2 from "../images/slider-2.webp";
import './style/Home.css'
// https://m.media-amazon.com/images/I/71IeYI6nTFL._AC_UX395_.jpg
export default function Home() {
  return (
    <div id="home" className="home-section">
      <div
        id="carouselExampleFade"
        class="carousel slide carousel-fade"
        data-bs-ride="carousel"
      >
        <div class="carousel-inner">
          <div class="carousel-item active" data-bs-interval="2000">
            <img src={slider2} class="d-block w-100" alt="..." />
          </div>
          <div class="carousel-item">
            <img src={slider1} class="d-block w-100" alt="..." />
          </div>
          <div class="carousel-item">
            <img src={slider2} class="d-block w-100" alt="..." />
          </div>
        </div>
        <button
          class="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleFade"
          data-bs-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button
          class="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleFade"
          data-bs-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
}
