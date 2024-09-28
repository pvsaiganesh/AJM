import {
  Swiper,
  SwiperSlide,
  // useSwiper
} from "swiper/react";
import {
  // Pagination,
  Navigation,
  Scrollbar,
  // A11y,
  Controller,
  Thumbs,
} from "swiper/modules";
import "swiper/scss";
import "./ProductDetails.scss";
import { useCallback, useRef, useState } from "react";
import "../../../node_modules/swiper/modules/navigation";
import "../../../node_modules/swiper/modules/pagination";
import "../../../node_modules/swiper/modules";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import Image from "react-bootstrap/esm/Image";
import img1 from "../../assets/small-image.svg";
import img2 from "../../assets/thumb-image.svg";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Button, Rating, Typography } from "@mui/material";
import "../../App.scss";
// import "swiper/scss";
// import "swiper/scss/navigation";
// import "swiper/scss/pagination";
// import ProductDetails from './../VerticalCarousal/VerticalCarousal';
// const images = [
//   {
//     src: "https://picsum.photos/320/240?v1",
//   },
//   {
//     src: "https://picsum.photos/320/240?v2",
//   },
//   {
//     src: "https://picsum.photos/320/240?v3",
//   },
//   {
//     src: "https://picsum.photos/320/240?v4",
//   },
// ];

// const VerticalCarousal = () => {
//   // Bind swiper and swiper thumbs
//   // useEffect(() => {
//   //   if (swiper && swiperThumbs) {
//   //     swiper.controller.control = swiperThumbs;
//   //     swiperThumbs.controller.control = swiper;
//   //   }
//   // }, [swiper, swiperThumbs]);

//   return (
//     <Swiper
//       className="vertical-carousal"
//       // install Swiper modules
//       modules={[Navigation, Pagination]}
//       // spaceBetween={50}
//       slidesPerView={1}
//       navigation
//       // pagination={{ clickable: true }}
//       // scrollbar={{ draggable: true }}
//       // onSwiper={(swiper) => console.log(swiper)}
//       // onSlideChange={() => console.log("slide change")}
//     >
//       <SwiperSlide>Slide 1</SwiperSlide>
//       <SwiperSlide>Slide 2</SwiperSlide>
//       <SwiperSlide>Slide 3</SwiperSlide>
//       <SwiperSlide>Slide 4</SwiperSlide>
//     </Swiper>
//   );
// };

const theme = createTheme({
  palette: {
    primary: {
      main: "#008ecc33",
    },
    text: {
      main: "#1d6383",
    },
    secondary: {
      main: "#666666",
    },
  },
});
const ProductDetails = () => {
  // store controlled swiper instance
  const [swiperRef, setSwiperRef] = useState(null);
  // const [controlledSwiper, setControlledSwiper] = useState(null);
  const thumbsSwiperRef = useRef();
  // const [thumbsSwiper, setThumbsSwiper] = useState(swiperRef);
  const handlePrevious = useCallback(() => {
    swiperRef?.slidePrev();
  }, [swiperRef]);

  const handleNext = useCallback(() => {
    swiperRef?.slideNext();
  }, [swiperRef]);
  const [controlledSwiper, setControlledSwiper] = useState(null);
  const thumbsProps = {
    spaceBetween: 5,
    slidesPerView: 4,
    direction: "vertical",
    // pagination: true,
    // // If we need pagination
    // pagination: {
    //   el: ".swiper-pagination",
    // },

    // Navigation arrows
    navigation: {
      nextEl: ".swiper-button-next-unique",
      prevEl: ".swiper-button-prev-unique",
    },

    // And if we need scrollbar
    scrollbar: {
      el: ".swiper-scrollbar",
      draggable: true,
      clickable: true,
    },
    mousewheel: {
      invert: true,
    },
  };

  // useEffect(() => {
  //   let mySwiper = new Swiper(".swiper-container", {
  //     ...thumbsProps,
  //   });
  //   setSwiperRef(mySwiper);
  // }, []);
  return (
    <Container className="hero p-5 pt-2" fluid>
      <Row>
        <Col
          lg="1"
          className="text-center d-flex flex-column justify-content-center rounded"
        >
          <Button
            className="bg-white text-dark"
            startIcon={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-chevron-up"
                viewBox="0 0 16 16"
              >
                <path
                  fillRule="evenodd"
                  d="M7.646 4.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 5.707l-5.646 5.647a.5.5 0 0 1-.708-.708z"
                />
              </svg>
            }
            onClick={handlePrevious}
          ></Button>

          <Swiper
            ref={thumbsSwiperRef}
            className="thumbs-carousal"
            modules={[Controller, Thumbs, Navigation, Scrollbar]}
            watchSlidesProgress
            style={{
              "--swiper-navigation-color": "#000",
              "--swiper-pagination-color": "#000",
            }}
            controller={{ control: controlledSwiper }}
            // thumbs={{ swiper: thumbsSwiper }}
            onSwiper={setSwiperRef}
            // controller={{ control: controlledSwiper }}
            {...thumbsProps}
          >
            <SwiperSlide className="slide-main">
              <Image loading="lazy" src={img1} />
            </SwiperSlide>
            <SwiperSlide className="slide-main">
              <Image loading="lazy" src={img2} />
            </SwiperSlide>
            <SwiperSlide className="slide-main">Slide 3</SwiperSlide>
            <SwiperSlide className="slide">
              <Image loading="lazy" src={img2} className="thumb-img" />
            </SwiperSlide>
            <SwiperSlide className="slide">
              <Image loading="lazy" src={img1} className="thumb-img" />
            </SwiperSlide>
            <SwiperSlide className="slide">Slide 6</SwiperSlide>
            <SwiperSlide className="slide">Slide 7</SwiperSlide>
            <SwiperSlide className="slide">Slide 8</SwiperSlide>
            <SwiperSlide className="slide">Slide 9</SwiperSlide>
          </Swiper>
          <Button
            className="bg-white text-dark"
            onClick={handleNext}
            startIcon={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-chevron-down"
                viewBox="0 0 16 16"
              >
                <path
                  fillRule="evenodd"
                  d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708"
                />
              </svg>
            }
          ></Button>
        </Col>
        <Col
          lg="6"
          className="d-flex flex-column justify-content-center rounded ps-0 p-3"
        >
          <Swiper
            className="main-carousal"
            modules={[Controller, Thumbs, Navigation, Scrollbar]}
            spaceBetween={100}
            slidesPerView={1}
            // onSwiper={setThumbsSwiper}
            // modules={[Controller]}
            onSwiper={setControlledSwiper}
          >
            <SwiperSlide className="slide-main">
              <Image loading="lazy" src={img1} />
            </SwiperSlide>
            <SwiperSlide className="slide-main">
              <Image loading="lazy" src={img2} />
            </SwiperSlide>
            <SwiperSlide className="slide-main">Slide 3</SwiperSlide>
            <SwiperSlide className="slide">
              <Image loading="lazy" src={img2} className="thumb-img" />
            </SwiperSlide>
            <SwiperSlide className="slide">
              <Image loading="lazy" src={img1} className="thumb-img" />
            </SwiperSlide>
            <SwiperSlide className="slide">Slide 6</SwiperSlide>
            <SwiperSlide className="slide">Slide 7</SwiperSlide>
            <SwiperSlide className="slide">Slide 8</SwiperSlide>
            <SwiperSlide className="slide">Slide 9</SwiperSlide>
          </Swiper>
        </Col>
        <Col lg="5" className=" ps-0 p-3">
          <ThemeProvider theme={theme}>
            <Container>
              <Row>
                <Col lg="12">
                  <Typography variant="h1" className="fs-2 fw-bold pt-3 pb-3">
                    Chinese Tiles
                    <Button className="ms-3" variant="contained" color="info">
                      Instock
                    </Button>
                  </Typography>

                  <Typography color="secondary">
                    {" "}
                    <Rating value={5} readOnly className="pe-4" />4 Reviews
                  </Typography>
                </Col>
              </Row>
            </Container>
          </ThemeProvider>
        </Col>
      </Row>
    </Container>
  );
};

export default ProductDetails;
