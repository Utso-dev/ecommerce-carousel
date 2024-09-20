"use client";
import Image from "next/image";
import { Carousel } from "react-bootstrap";
import bannerImage from "../../../public/images/Banner/banner.jpg";

const Promotionproducts = () => {
  return (
    <div className="container py-5">
      <div className="row">
        <Carousel>
          <Carousel.Item>
            <Image
              src={bannerImage}
              width={1920}
              height={500}
              alt="First slide"
              style={{ width: "100%", height: "auto" }}
            />
            <Carousel.Caption>
              <h3>First slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item>
            <Image
              src={bannerImage}
              width={1920}
              height={500}
              alt="Second slide"
              style={{ width: "100%", height: "auto" }}
            />
            <Carousel.Caption>
              <h3>Second slide label</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item>
            <Image
              src={bannerImage}
              width={1920}
              height={500}
              alt="Third slide"
              style={{ width: "100%", height: "auto" }}
            />
            <Carousel.Caption>
              <h3>Third slide label</h3>
              <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
    </div>
  );
};

export default Promotionproducts;
