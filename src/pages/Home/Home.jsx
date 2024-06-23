import React, { useEffect, useState } from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './Home.css';

// images
import images from '../../images/images';

// components
import ServiceItem from '../../components/ServiceItem';
import ServicesAbout from '../../components/ServicesAbout';
import AboutUs from '../../components/AboutUs';
import OurTeams from '../../components/OurTeams';
import Contact from '../../components/Contact';

const Home = () => {
  const [animate, setAnimate] = useState(false);
  const [text, setText] = useState("");
  const message = "Bu murakkab biznes amaliyotlarini avtomatlashtirishga mo'ljallangan kompaniya.";

  useEffect(() => {
    setAnimate(true);
    let index = 0;
    const interval = setInterval(() => {
      setText(message.slice(0, index + 1));
      index++;
      if (index === message.length) {
        clearInterval(interval);
      }
    }, 50);
    return () => clearInterval(interval);
  }, [message]);

  const settings = {
    className: 'slider-image-wrapper',
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
  };

  return (
    <div className="Home">
      <div className="hero-section container">
        <div className="slider-container">
          <Slider {...settings}>
            <div>
              <img src={images.slide1} alt="slide1" />
            </div>
            <div>
              <img src={images.slide2} alt="slide2" />
            </div>
          </Slider>
        </div>
        <div className="info-container">
          <h1 className={animate ? 'highlight animate' : 'highlight'}>TechCraft</h1>
          <p>{text}</p>
        </div>
      </div>

      {/* about us */}
      <AboutUs/>

      {/* services */}
      <div className="services">
        <div className="container">
          <ServicesAbout/>
          <div className="services-cards">
            <ServiceItem
              img={images.icon1}
              title="Savdo bo`limi"
            />
            <ServiceItem
              img={images.icon2}
              title="Banklar"
            />
            <ServiceItem
              img={images.icon3}
              title="Kilinikalar"
            />
            <ServiceItem
              img={images.icon1}
              title="Savdo bo`limi"
            />
            <ServiceItem
              img={images.icon2}
              title="Banklar"
              />
            <ServiceItem
              img={images.icon3}
              title="Kilinikalar"
              />
            <ServiceItem
              img={images.icon1}
              title="Savdo bo`limi"
              />
            <ServiceItem
              img={images.icon2}
              title="Banklar"
              />
            <ServiceItem
              img={images.icon3}
              title="Kilinikalar"
              />
            <ServiceItem
              img={images.icon3}
              title="Kilinikalar"
              />
            <ServiceItem
              img={images.icon3}
              title="Kilinikalar"
              />
          </div>
        </div>
      </div>

      {/* teams */}
      <OurTeams/>
      {/* contact */}
      <Contact/>
    </div>
  );
}

export default Home;
