import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "./style/Contact.css";
export default function Contact() {
  return (
    <>
      <section class="contact-section" id="contact">
        <div class="row aa">
          <div class="col">
            <h3>CATEGORIES</h3>
            <div className="contact-content">
              <ul>
                <li>
                  <a href="#">TOPS</a>
                </li>
                <li>
                  <a href="#">TROUSERS</a>
                </li>
                <li>
                  <a href="#">BAGS</a>
                </li>
                <li>
                  <a href="#">HAIRS</a>
                </li>
                <li>
                  <a href="#">BELTS</a>
                </li>
                <li>
                  <a href="#">SHOES</a>
                </li>
              </ul>
            </div>
          </div>
          <div class="col">
            <h3>GET IN TOUCH</h3>
            <div className="contact-content">
              <p className="getintouch">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odio
                tempore nisi, aliquam doloremque et perferendis. Architecto
                veritatis dolorem accusantium soluta dicta similique quam
                suscipit distinctio repellendus quos tempore, est pariatur.
              </p>
              <div className="social mt-4 d-flex gap-3">
                <a href="#">
                  <i class="bi bi-facebook"></i>
                </a>
                <a href="#">
                  <i class="bi bi-instagram"></i>
                </a>
                <a href="#">
                  <i class="bi bi-twitter"></i>
                </a>
              </div>
            </div>
          </div>
          <div class="col">
            <h3>CONTACT INFO</h3>
            <div className="contact-content">
              <p className="contact-info">
                <i class="bi bi-geo-alt"></i>
                <span>
                  1 Ogunneye Close, Obalende, Ijebu Ode, Ogun State, Nigeria
                </span>
              </p>
              <p className="contact-info">
                <i class="bi bi-telephone"></i>
                <span>+234 802 362 0892</span>
              </p>
              <p className="contact-info">
                <i class="bi bi-envelope"></i>
                <span>infowagwan@gmail.com</span>
              </p>
            </div>
          </div>
        </div>
        <footer>
          <p>Copyright © Wagwan 2023 All rights reserved</p>
        </footer>
      </section>
    </>
  );
}
