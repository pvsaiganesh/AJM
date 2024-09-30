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
import {
  Button,
  Typography,
  Select,
  FormControl,
  InputLabel,
  MenuItem,
} from "@mui/material";
import "../../App.scss";
import brand from "../../assets/brand.svg";
import { useParams } from "react-router-dom";
import Rating from "@mui/material/Rating";
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

import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import Description from "./Description/Description";
import CustomerReviews from "./CustomerReviews/CustomerReviews";
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

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};
const ProductDetails = () => {
  const params = useParams();
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
    spaceBetween: 0,
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
  function a11yProps(index) {
    return {
      id: `simple-tab-${index}`,
      "aria-controls": `simple-tabpanel-${index}`,
    };
  }

  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  // useEffect(() => {
  //   let mySwiper = new Swiper(".swiper-container", {
  //     ...thumbsProps,
  //   });
  //   setSwiperRef(mySwiper);
  // }, []);
  return (
    <Container className="hero p-1 p-lg-5 pt-0" fluid="true">
      <Row fluid="true">
        <Col
          lg="2"
          xs="4"
          className="text-start text-md-center d-flex flex-column justify-content-start rounded"
        >
          <Button
            className="bg-white text-dark"
            fullWidth
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
            <SwiperSlide className="slide-main">
              <Image loading="lazy" src={img2} className="thumb-img" />
            </SwiperSlide>
            <SwiperSlide className="slide-main">
              <Image loading="lazy" src={img1} className="thumb-img" />
            </SwiperSlide>
            <SwiperSlide className="slide-main">Slide 6</SwiperSlide>
            <SwiperSlide className="slide-main">Slide 7</SwiperSlide>
            <SwiperSlide className="slide-main">Slide 8</SwiperSlide>
            <SwiperSlide className="slide-main">Slide 9</SwiperSlide>
          </Swiper>
          <Button
            fullWidth
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
          lg="4"
          xs="8"
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
            <SwiperSlide className="slide-main">
              <Image loading="lazy" src={img2} className="thumb-img" />
            </SwiperSlide>
            <SwiperSlide className="slide-main">
              <Image loading="lazy" src={img1} className="thumb-img" />
            </SwiperSlide>
            <SwiperSlide className="slide-main">Slide 6</SwiperSlide>
            <SwiperSlide className="slide-main">Slide 7</SwiperSlide>
            <SwiperSlide className="slide-main">Slide 8</SwiperSlide>
            <SwiperSlide className="slide-main">Slide 9</SwiperSlide>
          </Swiper>
        </Col>
        <Col xs="12" lg="6" className=" ps-0 p-3">
          <ThemeProvider theme={theme}>
            <Container className="ps-4" fluid="true">
              <Row fluid="true">
                <Col xs="12" lg="12">
                  <Typography variant="h1" className="fs-2 fw-bold pt-3 pb-3">
                    Chinese Tiles {params.productId}
                    <Button className="ms-3" variant="contained" color="info">
                      Instock
                    </Button>
                  </Typography>
                  <Typography
                    variant="span"
                    color="secondary"
                    className="d-flex flex-row align-items-center pb-3"
                  >
                    <Rating
                      defaultValue={5}
                      value={5}
                      readOnly
                      size="small"
                      sx={{ width: "100px" }}
                      className="me-2"
                    />{" "}
                    4 Reviews
                  </Typography>

                  <Row xs="12">
                    <Col xs="12" lg="6">
                      <FormControl fullWidth>
                        <InputLabel id="demo-simple-select-label">
                          Location
                        </InputLabel>
                        <Select
                          labelId="demo-simple-select-label"
                          id="demo-simple-select"
                          // value={40}
                          label="Age"
                          // onChange={handleChange}
                        >
                          <MenuItem value={10}>Ten</MenuItem>
                          <MenuItem value={20}>Twenty</MenuItem>
                          <MenuItem value={30}>Thirty</MenuItem>
                        </Select>
                      </FormControl>
                    </Col>
                    <Col xs="3" lg="3" className="text-end">
                      <Typography
                        variant="span"
                        className="fs-4 text-decoration-line-through text-reset"
                      >
                        ₹4800
                      </Typography>
                    </Col>
                    <Col xs="3" lg="3" className="text-start">
                      <Typography
                        variant="span"
                        className="fs-4 fw-bold"
                        color="text"
                      >
                        ₹1728
                      </Typography>
                    </Col>
                  </Row>
                  <Row xs="12" className="pt-3 pb-3">
                    <Col xs="8" lg="3">
                      <Row fluid="true" className="text-start text-lg-start">
                        <Col xs="6" lg="6">
                          Brand:
                        </Col>
                        <Col xs="6" lg="6">
                          <Image fluid src={brand} loading="lazy" />
                        </Col>
                      </Row>
                    </Col>
                    <Col xs="4" lg="9" className="text-end text-lg-end">
                      <Button className=" bg-orange p-2 rounded-circle">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="18"
                          height="18"
                          fill="white"
                          className="bi bi-share"
                          viewBox="0 0 16 16"
                        >
                          <path d="M13.5 1a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3M11 2.5a2.5 2.5 0 1 1 .603 1.628l-6.718 3.12a2.5 2.5 0 0 1 0 1.504l6.718 3.12a2.5 2.5 0 1 1-.488.876l-6.718-3.12a2.5 2.5 0 1 1 0-3.256l6.718-3.12A2.5 2.5 0 0 1 11 2.5m-8.5 4a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3m11 5.5a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3" />
                        </svg>
                      </Button>
                    </Col>
                  </Row>
                  <Col xs="12" lg="12">
                    <Typography variant="h6">
                      Class aptent taciti sociosqu ad litora torquent per
                      conubia nostra, per inceptos himenaeos. Nulla nibh diam,
                      blandit vel consequat nec, ultrices et ipsum. Nulla varius
                      magna a consequat pulvinar.
                    </Typography>
                  </Col>
                  <Col xs="12" lg="12">
                    <Row
                      fluid="true"
                      className="shadow ps-3 pt-3 pb-3 mb-3 d-flex flex-row justify-content-center align-items-center rounded"
                    >
                      <Col xs="10" lg="4" className="">
                        <Row
                          fluid="true"
                          className="text-center align-self-center border rounded-pill"
                        >
                          <Col xs="3" lg="5">
                            <Button className="rounded-circle">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="32"
                                height="32"
                                fill="black"
                                className="bi bi-dash-circle"
                                viewBox="0 0 16 16"
                              >
                                <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16" />
                                <path d="M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8" />
                              </svg>
                            </Button>
                          </Col>

                          <Col xs="6" lg="2" className="align-self-center">
                            <Typography variant="span">5</Typography>
                          </Col>
                          <Col xs="3" lg="5">
                            <Button className="rounded-circle">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="32"
                                height="32"
                                fill="black"
                                className="bi bi-plus-circle"
                                viewBox="0 0 16 16"
                              >
                                <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16" />
                                <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4" />
                              </svg>
                            </Button>
                          </Col>
                        </Row>
                      </Col>

                      <Col xs="6" lg="6">
                        <Button
                          variant="contained"
                          className="bg-orange rounded-pill"
                          fullWidth
                          size="large"
                        >
                          Add to Cart
                        </Button>
                      </Col>
                      <Col xs="4" lg="2">
                        <Button
                          className="rounded-circle p-2 "
                          variant="contained"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            fill="#1d6383"
                            className="bi bi-heart"
                            viewBox="0 0 16 16"
                          >
                            <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143q.09.083.176.171a3 3 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15" />
                          </svg>
                        </Button>
                      </Col>
                    </Row>
                  </Col>
                  <Col lg="12">
                    <Typography variant="p">
                      <Typography variant="span" className="fw-bold">
                        Category:{" "}
                      </Typography>
                      Sand
                    </Typography>
                  </Col>
                  <Col lg="12">
                    <Typography variant="p">
                      <Typography variant="span" className="fw-bold">
                        Tag:{" "}
                      </Typography>
                      Best sand in vizag Construction Material
                    </Typography>
                  </Col>
                </Col>
              </Row>
            </Container>
          </ThemeProvider>
        </Col>
        <Col className="d-flex flex-row justify-content-center pt-5">
          <Box sx={{ width: "100%" }}>
            <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
              <Tabs
                value={value}
                onChange={handleChange}
                // TabIndicatorProps={{ sx: { display: "none" } }}
                sx={{
                  "& .MuiTabs-flexContainer": {
                    flexWrap: "wrap",
                  },
                }}
                // variant="fullWidth"
                centered
                aria-label="basic tabs example"
              >
                <Tab label="Description" {...a11yProps(0)} />
                <Tab label="Customer Feedback" {...a11yProps(1)} />
                {/* <Tab label="Item Three" {...a11yProps(2)} /> */}
              </Tabs>
            </Box>
            <CustomTabPanel value={value} index={0}>
              <Description />
            </CustomTabPanel>
            <CustomTabPanel value={value} index={1}>
              <CustomerReviews />
            </CustomTabPanel>
          </Box>
        </Col>
      </Row>
    </Container>
  );
};

export default ProductDetails;
