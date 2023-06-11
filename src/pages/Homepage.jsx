import { Container, Row, Col } from "react-bootstrap";
import HeroImage from "../assets/img/hero3.png";

import { listPsikolog, dataSwiper } from "../data/index";

import { useNavigate } from "react-router-dom";

import FaqComponent from "../components/FaqComponent";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper";

const Homepage = () => {
  let navigate = useNavigate();
  return (
    <div className="homepage">
      <header className="w-100 min-vh-100 d-flex align-items-center">
        <Container>
          <Row className="header-box d-flex align-items-center pt-lg-5">
            <Col lg="6">
              <h1 className="mb-4">
                Merasa Cemas? <br /> <span>Ayo Konsultasi</span> <br />
                Sekarang!
              </h1>
              <p className="mb-4">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
                aspernatur, expedita molestias delectus labore quia sint
                incidunt qui maiores alias?
              </p>
              <button
                className="btn btn-success btn-lg rounded-1 me-2 mb-xs-0 mb-2"
                onClick={() => navigate("/consultation")}>
                Lihat Psikolog
              </button>
              <button className="btn btn-outline-success btn-lg rounded-1 me-2 mb-xs-0 mb-2">
                Lihat Promo
              </button>
            </Col>
            <Col lg="6" className="pt-lg-0 pt-5">
              <img src={HeroImage} alt="hero-img" />
            </Col>
          </Row>
        </Container>
      </header>
      <div className="consul w-100 min-vh-100">
        <Container>
          <Row>
            <Col>
              <h1 className="text-center fw-bold">List Psikolog</h1>
              <p className="text-center">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </p>
            </Col>
          </Row>
          <Row>
            {listPsikolog.map((psikolog) => {
              return (
                <Col key={psikolog.id} className="shadow rounded">
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
          <Row>
            <Col className="text-center">
              <button
                className="btn btn-success rounded-5 btn-lg"
                onClick={() => navigate("/consultation")}>
                Lihat Semua Psikolog
                <i className="fa-solid fa-chevron-right ms-1"></i>
              </button>
            </Col>
          </Row>
        </Container>
      </div>
      <div className="testimonials py-5">
        <Container>
          <Row>
            <Col>
              <h1 className="text-center fw-bold my-5">Testimonials</h1>
            </Col>
          </Row>
          <Row>
            <Swiper
              slidesPerView={1}
              spaceBetween={10}
              pagination={{
                clickable: true,
              }}
              breakpoints={{
                640: {
                  slidesPerView: 1,
                  spaceBetween: 20,
                },
                768: {
                  slidesPerView: 2,
                  spaceBetween: 40,
                },
                992: {
                  slidesPerView: 2,
                  spaceBetween: 50,
                },
                1200: {
                  slidesPerView: 3,
                  spaceBetween: 50,
                },
              }}
              modules={[Pagination]}
              className="mySwiper">
              {dataSwiper.map((data) => {
                return (
                  <SwiperSlide key={data.id} className="shadow-sm">
                    <p className="desc">{data.desc}</p>
                    <div className="people">
                      <img src={data.image} alt="" />
                      <div>
                        <h5 className="mb-1">{data.name}</h5>
                        <p className="m-0 fw-bold">{data.skill}</p>
                      </div>
                    </div>
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </Row>
        </Container>
      </div>
      {/* Section FAQ */}
      <FaqComponent />
      {/* Section FAQ */}
    </div>
  );
};

export default Homepage;
