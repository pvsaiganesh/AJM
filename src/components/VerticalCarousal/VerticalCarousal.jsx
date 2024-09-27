import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
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
import React, { useRef, useState } from "react";
import "../../../node_modules/swiper/modules/navigation";
import "../../../node_modules/swiper/modules/pagination";
import "../../../node_modules/swiper/modules";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import Image from "react-bootstrap/esm/Image";
import img1 from "../../assets/small-image.svg";
import img2 from "../../assets/thumb-image.svg";

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
  const thumbsSwiperRef = useRef();
  const [thumbsSwiper, setThumbsSwiper] = useState(thumbsSwiperRef.current);

  const thumbsProps = {
    spaceBetween: 10,
    slidesPerView: 4,
    direction: "vertical",
    navigation: true,
    pagination: true,
    // If we need pagination
    // pagination: {
    //   el: ".swiper-pagination",
    // },

    // // Navigation arrows
    // navigation: {
    //   nextEl: ".swiper-button-next",
    //   prevEl: ".swiper-button-prev",
    // },

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
  return (
    <Container className="hero" fluid>
      <Row>
        <Col lg="2">
          <Swiper
            ref={thumbsSwiperRef}
            className="thumbs-carousal"
            modules={[Thumbs, Pagination, Navigation, Scrollbar]}
            watchSlidesProgress
            style={{
              "--swiper-navigation-color": "#000",
              "--swiper-pagination-color": "#000",
            }}
            // onSwiper={(swiper) => {
            //   setThumbsSwiper(swiper);
            // }}
            // controller={{ control: controlledSwiper }}
            {...thumbsProps}
          >
            <SwiperSlide className="slide-main">
              <Image src={img1} />
            </SwiperSlide>
            <SwiperSlide className="slide-main">
              <Image src={img2} />
            </SwiperSlide>
            <SwiperSlide className="slide-main">Slide 4</SwiperSlide>
            <SwiperSlide className="slide">
              <Image src={img2} className="thumb-img" />
            </SwiperSlide>
            <SwiperSlide className="slide">
              <Image src={img1} className="thumb-img" />
            </SwiperSlide>
            <SwiperSlide className="slide">Slide 5</SwiperSlide>
            <SwiperSlide className="slide">Slide 6</SwiperSlide>
            <SwiperSlide className="slide">Slide 7</SwiperSlide>
            <SwiperSlide className="slide">Slide 8</SwiperSlide>
          </Swiper>
        </Col>
        <Col lg="5">
          <Swiper
            className="main-carousal"
            modules={[Thumbs, Pagination, Navigation, Scrollbar]}
            // onSwiper={(swiper) => {
            //   setThumbsSwiper(swiper);
            // }}
            thumbs={{ swiper: thumbsSwiper }}
          >
            <SwiperSlide className="slide">
              <Image src={img1} className="thumb-img" />
            </SwiperSlide>
            <SwiperSlide className="slide">
              <Image src={img2} className="thumb-img" />
            </SwiperSlide>
            <SwiperSlide className="slide">Slide 4</SwiperSlide>
          </Swiper>
        </Col>
      </Row>
    </Container>
  );
};

export default VerticalCarousal;
