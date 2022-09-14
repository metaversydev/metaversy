import React, { useEffect, useRef } from "react";
import "./Spacebanner.scss";
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation } from "swiper";
import { Space } from "../space/Space";

const Spacebanner = ({ spaces }) => {
  SwiperCore.use([Navigation]);
  const banner = useRef();
  const colors = [
    "linear-gradient(89.85deg, #E04F46 1.89%, rgba(41, 97, 206, 0.953125) 81.71%, rgba(68, 65, 211, 0.328125) 162.88%, rgba(218, 46, 46, 0) 261.63%)",
    "linear-gradient(97.34deg, #F015FE 0%, #22E2AD 52.58%, #2BC0E3 93.75%)",
    "linear-gradient(89.85deg, #DD46E0 1.89%, rgba(183, 206, 41, 0.953125) 81.71%)",
    "linear-gradient(89.85deg, #381892 1.89%, rgba(57, 207, 198, 0.957097) 114.17%)"
  ];

  const backgroundChange = () => {
    let i = Math.floor(Math.random() * colors.length);
    if (banner.current != null) {
      banner.current.style.background = colors[i];
    }
  };

  return (
    <section className="space-banner" ref={banner} id="kesfet">
      <div className="container">
        <div className="row">
          <h2>
            Üç boyutlu sosyal medya <br /> Metaversy’yi keşfet.
          </h2>
        </div>
        <div className="row">
          <Swiper
            onSlideChange={backgroundChange}
            slidesPerView={3}
            spaceBetween={20}
            navigation={{
              prevEl: ".slide-left",
              nextEl: ".slide-right"
            }}
            breakpoints={{
              200: {
                slidesPerView: 1
              },
              768: {
                slidesPerView: 2
              },
              1280: {
                slidesPerView: 3
              }
            }}
            loop
          >
            {spaces.length > 0 &&
              spaces.map(space => {
                return (
                  <SwiperSlide key={space.id}>
                    <Space space={space} />
                  </SwiperSlide>
                );
              })}
          </Swiper>
        </div>
        <div className="row slider-button-row">
          <div className="button-container">
            <div className="btn slide-left" id="btn-left">
              <svg width="41" height="41" viewBox="0 0 41 41" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clip-path="url(#clip0_36_17)">
                  <path
                    d="M20.3572 40.7143C31.5808 40.7143 40.7144 31.5824 40.7144 20.3572C40.7144 9.13361 31.5808 6.83091e-06 20.3572 5.84972e-06C9.13192 4.86837e-06 7.14254e-05 9.1336 7.04442e-05 20.3571C6.94629e-05 31.5824 9.13192 40.7143 20.3572 40.7143ZM8.61281 19.7091C8.69933 19.5021 8.82314 19.3138 8.97924 19.1578L15.7649 12.3721C16.0957 12.0413 16.53 11.8751 16.9643 11.8751C17.3986 11.8751 17.8312 12.0413 18.1637 12.3721C18.8253 13.0354 18.8253 14.1093 18.1637 14.7709L14.2738 18.6607L30.5358 18.6607C31.4722 18.6607 32.2322 19.4207 32.2322 20.3572C32.2322 21.2952 31.4722 22.0536 30.5358 22.0536L14.2738 22.0536L18.1637 25.9434C18.8253 26.6067 18.8253 27.6806 18.1637 28.3422C17.5005 29.0054 16.4266 29.0054 15.765 28.3422L8.97932 21.5581C8.82322 21.402 8.69941 21.2137 8.61289 21.0051C8.44153 20.5913 8.44153 20.1247 8.61281 19.7091Z"
                    fill="white"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_36_17">
                    <rect
                      width="40.7143"
                      height="40.7143"
                      fill="white"
                      transform="translate(40.7144 40.7143) rotate(-180)"
                    />
                  </clipPath>
                </defs>
              </svg>
            </div>
            <div className="btn slide-right" id="btn-right">
              <svg width="41" height="41" viewBox="0 0 41 41" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clip-path="url(#clip0_36_36)">
                  <path
                    d="M20.6428 0C9.41924 0 0.285645 9.13185 0.285645 20.3571C0.285645 31.5807 9.41924 40.7143 20.6428 40.7143C31.8681 40.7143 40.9999 31.5807 40.9999 20.3571C40.9999 9.13185 31.8681 0 20.6428 0ZM32.3872 21.0052C32.3007 21.2121 32.1769 21.4004 32.0208 21.5565L25.2351 28.3422C24.9043 28.673 24.47 28.8392 24.0357 28.8392C23.6014 28.8392 23.1688 28.673 22.8363 28.3422C22.1747 27.6789 22.1747 26.605 22.8363 25.9434L26.7262 22.0535L10.4642 22.0535C9.52779 22.0535 8.76781 21.2936 8.76781 20.3571C8.76781 19.419 9.52779 18.6607 10.4642 18.6607L26.7262 18.6607L22.8363 14.7709C22.1747 14.1076 22.1747 13.0337 22.8363 12.3721C23.4995 11.7089 24.5734 11.7089 25.235 12.3721L32.0207 19.1562C32.1768 19.3123 32.3006 19.5006 32.3871 19.7092C32.5585 20.123 32.5585 20.5896 32.3872 21.0052Z"
                    fill="white"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_36_36">
                    <rect width="40.7143" height="40.7143" fill="white" transform="translate(0.285645)" />
                  </clipPath>
                </defs>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Spacebanner;
