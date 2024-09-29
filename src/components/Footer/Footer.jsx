import Container from "react-bootstrap/esm/Container";
import "./Footer.scss";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import Logo from "../../assets/AJM.svg";
import Image from "react-bootstrap/esm/Image";
import "./Footer.scss";
import { Typography } from "@mui/material";
import { Link } from "react-router-dom";
// import { InstagramEmbed } from "react-social-media-embed";
const Footer = () => {
  return (
    <>
      <Container className="footer-bg p-5" fluid="true">
        <Row>
          <Col lg="12" className="text-center pb-5">
            <Link to="/">
              <Image
                loading="lazy"
                src={Logo}
                fluid="true"
                thumbnail
                height="150px"
                width="250px"
              />
            </Link>
          </Col>
          <Col lg="12" className="text-white pb-3">
            <Row>
              <Col lg="3" className="pb-3">
                <Typography variant="h5" className="pb-3">
                  About AJM
                </Typography>
                <Typography variant="h6" className="pb-3">
                  Morbi cursus porttitor enim lobortis molestie. Duis gravida
                  turpis dui, eget bibendum magna congue nec.
                </Typography>
                <a
                  className="text-decoration-none text-white"
                  href="tel:+919908048048"
                >
                  9908048048
                </a>
                {" or "}
                <a
                  className="text-decoration-none text-white"
                  href="mailto:AJM@gmail.com?subject=Mail to AJM"
                  target="_blank"
                >
                  AJM@gmail.com
                </a>
              </Col>
              <Col xs="6" lg="2" className="pb-3">
                <Typography variant="h5" className="pb-3">
                  Pages
                </Typography>
                <ul className="footer-list ps-0">
                  <li className="pb-3">Home</li>
                  <li className="pb-3">About Us</li>
                  <li className="pb-3">Blogs</li>
                  <li className="pb-3">Contact Us</li>
                </ul>
              </Col>
              <Col xs="6" lg="2" className="pb-3">
                <Typography variant="h5" className="pb-3">
                  My Account
                </Typography>
                <ul className="footer-list ps-0">
                  <li className="pb-3">Profile</li>
                  <li className="pb-3">Order History</li>
                  <li className="pb-3">Shoping Cart</li>
                  <li className="pb-3">Wishlist</li>
                </ul>
              </Col>

              <Col lg="2" className="pb-3">
                <Typography variant="h5" className="pb-3">
                  Help
                </Typography>
                <ul className="footer-list ps-0">
                  <li className="pb-3">Contact</li>
                  <li className="pb-3">Support</li>
                  <li className="pb-3">Terms & Conditions</li>
                  <li className="pb-3">Privacy Policy</li>
                </ul>
              </Col>
              <Col lg="3" className="pb-3">
                <Typography variant="h5" className="pb-3">
                  Instagram
                </Typography>
                <div>
                  {/* <InstagramEmbed
                    url="https://www.instagram.com/p/CUbHfhpswxt/"
                    width={300}
                    height={100}
                  /> */}
                </div>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
      <Container fluid="true" className="bg-orange">
        <Row className="d-flex flex-row justify-content-between text-white p-3 text-center">
          <Col lg="4 text-lg-start">Social Links</Col>
          <Col lg="4 text-lg-center">AJM © 2024. All Rights Reserved</Col>
          <Col lg="4 text-lg-end">Designed & Developed by Vasmi Group</Col>
        </Row>
      </Container>
    </>
  );
};

export default Footer;
