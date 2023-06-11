import { Container, Row, Col } from "react-bootstrap";
import { listPsikolog } from "../data/index";
import FaqComponent from "../components/FaqComponent";

const ConsultationPage = () => {
  return (
    <div className="consultation-page">
      <div className="consultation min-vh-100">
        <Container>
          <Row>
            <Col>
              <h1 className="fw-bold text-center animate__animated animate__fadeInUp animate__delay-1s">
                All Psikolog
              </h1>
              <p className="text-center animate__animated animate__fadeInUp animate__delay-1s">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Molestiae, impedit!
              </p>
            </Col>
          </Row>
          <Row>
            {listPsikolog.map((psikolog) => {
              return (
                <Col
                  key={psikolog.id}
                  className="shadow rounded"
                  data-aos="fade-up"
                  data-aos-duration="1000"
                  data-aos-delay={psikolog.delay}>
                  <img
                    src={psikolog.image}
                    alt="unsplash.com"
                    className="w-100 mb-5 rounded-top"
                  />
                  <div className="star mb-2 px-3">
                    <i className={psikolog.star1}></i>
                    <i className={psikolog.star2}></i>
                    <i className={psikolog.star3}></i>
                    <i className={psikolog.star4}></i>
                    <i className={psikolog.star5}></i>
                  </div>
                  <h5 className="mb-5 px-3">{psikolog.name}</h5>
                  <div className="keterangan d-flex justify-content-between align-items-center px-3 pb-3">
                    <p className="m-0 text-primary fw-bold">{psikolog.role}</p>
                    <button className=" rounded-1">{psikolog.detail}</button>
                  </div>
                </Col>
              );
            })}
          </Row>
        </Container>
      </div>
      <FaqComponent />
    </div>
  );
};

export default ConsultationPage;
