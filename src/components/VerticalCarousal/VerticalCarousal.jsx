import { Swiper, SwiperSlide } from "swiper/react";
import {
  Pagination,
  Navigation,
  Scrollbar,
  A11y,
  Controller,
  Thumbs,
} from "swiper/modules";
import "swiper/scss";
import "./VerticalCarousal.scss";
import React, { useState } from "react";
import "../../../node_modules/swiper/modules/navigation.scss";
import "../../../node_modules/swiper/modules/pagination.scss";
import "../../../node_modules/swiper/modules";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";

// import "swiper/scss";
// import "swiper/scss/navigation";
// import "swiper/scss/pagination";
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

const VerticalCarousal = () => {
  // store controlled swiper instance
  const [controlledSwiper, setControlledSwiper] = useState(null);
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  const thumbsProps = {
    spaceBetween: 10,
    slidesPerView: 4,
    direction: "vertical",
    loop: true,

    // If we need pagination
    pagination: {
      el: ".swiper-pagination",
    },

    // Navigation arrows
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },

    // And if we need scrollbar
    scrollbar: {
      el: ".swiper-scrollbar",
    },
  };
  return (
    <Container className="hero" fluid>
      <Row>
        <Col lg="2">
          <Swiper
            className="thumbs-carousal"
            modules={[Thumbs, Pagination, Navigation, Scrollbar]}
            watchSlidesProgress
            // onSwiper={setThumbsSwiper}
            // controller={{ control: controlledSwiper }}
            {...thumbsProps}
          >
            <SwiperSlide>Slide 1</SwiperSlide>
            <SwiperSlide>Slide 2</SwiperSlide>
            <SwiperSlide>Slide 3</SwiperSlide>
            <SwiperSlide>Slide 4</SwiperSlide>
            <SwiperSlide>Slide 5</SwiperSlide>
            <SwiperSlide>Slide 6</SwiperSlide>
            <SwiperSlide>Slide 7</SwiperSlide>
            <SwiperSlide>Slide 8</SwiperSlide>
          </Swiper>
        </Col>
        <Col lg="5">
          <Swiper
            className="main-carousal"
            modules={[Thumbs, Pagination, Navigation, Scrollbar]}
            // onSwiper={setControlledSwiper}
            thumbs={{ swiper: thumbsSwiper }}
          >
            <SwiperSlide>Slide 1</SwiperSlide>
            <SwiperSlide>Slide 2</SwiperSlide>
            <SwiperSlide>Slide 3</SwiperSlide>
            <SwiperSlide>Slide 4</SwiperSlide>
          </Swiper>
        </Col>
      </Row>
    </Container>
  );
};

export default VerticalCarousal;
