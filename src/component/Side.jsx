import model from "../images/model_6.png.webp";
import { useNavigate } from 'react-router-dom'
import "./style/Side.css";
export default function Side() {
  const navigate = useNavigate()
  return (
    <>
      <section className="side-section">
        <div className="side-content">
          <img class="img-fluid d-block w-70" src={model} alt="..." />
          <div className="text">
            <h2>
              Best Price, <br /> Best Quality
            </h2>
            <p>
              Believe the hype by chosing <mark>WAGWAN</mark>
            </p>
            {/* Go to the list of all product */}
            <button  onClick={() => navigate('/Product')}>
              <a href="">SHOP NOW</a>
            </button> 
          </div>
        </div>
      </section>
    </>
  );
}
