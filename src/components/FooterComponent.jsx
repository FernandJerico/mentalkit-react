import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
const FooterComponent = () => {
  return (
    <div className="footer py-5">
      <Container>
        <Row className="d-flex justify-content-between">
          <Col lg="6">
            <h3 className="fw-bold">MentalKit</h3>
            <p className="desc">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quia
              officia reiciendis alias numquam ullam consequatur totam odio
              quod, ex beatae.
            </p>
            <div className="number mb-1 mt-4">
              <Link className="text-decoration-none">
                <i className="fa-brands fa-whatsapp"></i>
                <p className="m-0">+62 8877665544</p>
              </Link>
            </div>
            <div className="email">
              <Link className="text-decoration-none">
                <i className="fa-regular fa-envelope"></i>
                <p className="m-0">admin@mentalkit.com</p>
              </Link>
            </div>
          </Col>
          <Col className="d-flex flex-column col-lg-2 col mt-lg-0 mt-5">
            <h5 className="fw-bold">Menu</h5>
            <Link to="/">Home</Link>
            <Link to="/consultation">Consultation</Link>
            <Link to="/testimonial">Testimonial</Link>
            <Link to="/faq">FAQ</Link>
            <Link to="/terms">Terms and Condition</Link>
          </Col>
          <Col col="4" className="mt-lg-0 mt-5">
            <h5 className="fw-bold mb-3">Dapatkan info promo menarik</h5>
            <div className="subscribe">
              <input type="text" placeholder="Subscribe..." />
              <button className="btn btn-success rounded-end rounded-0">
                Subscribe
              </button>
            </div>
            <div className="social mt-3">
              <Link>
                <i className="fa-brands fa-facebook"></i>
              </Link>
              <Link>
                <i className="fa-brands fa-twitter"></i>
              </Link>
              <Link>
                <i className="fa-brands fa-instagram"></i>
              </Link>
              <Link>
                <i className="fa-brands fa-youtube"></i>
              </Link>
            </div>
          </Col>
        </Row>
        <Row>
          <Col>
            <p className="text-center px-md-0">
              &copy; Copyright {new Date().getFullYear()} by{" "}
              <span className="fw-bold">Nanreff</span>, All Right Reserved
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default FooterComponent;
