import React from 'react';
import discordB from '../../assets/icons/discordB.png';
import twitterB from '../../assets/icons/twitterB.png';
import telegramB from '../../assets/icons/telegramB.png';
import syrah from '../../assets/wines/syrah.png';
import pinotnoir from '../../assets/wines/pinotnoir.png';
import blend from '../../assets/wines/blend.png';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';
import { Autoplay } from 'swiper';
import Nav from '../Nav';

const Hero = () => {
  return (
    <div className="h-screen flex flex-col font-poppins">
      <Nav />
      <div className="w-11/12 h-[93.5%] mx-auto mt-auto md:flex justify-between">
        <div className="md:w-5/12 md:flex md:flex-col justify-between h-[20%] md:h-full">
          <div className="flex flex-col h-full md:h-fit md:mt-[1%]">
            <p className="text-[48px] font-black md:text-[64px]">Vintme</p>
            <p className="text-[16px] font-extralight -mt-[0.8%] md:text-[24px]">
            <img
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/20e3aa5412d43c102ac2d24db2ba7c0587238dad7cb9bb882a1fa0df16fa926c?apiKey=3d6c53ba5d484a2cb38c48b0b1fe4ccc&"
        alt="Descriptive alternative text of the image"
        className="img"
        loading="lazy"
      />
              UNDER CONSTRUCTION
            </p>
            <button className="bg-black hover:bg-darkGrey py-[10px] px-[2.5%] rounded-[14px] w-fit mt-auto md:mt-[5%] text-white text-[16px] font-semibold md:text-[24px] transition duration-150">
              Compra en Open Sea
            </button>
          </div>
          <div className="w-5/12 mb-14 hidden md:flex">
            <div className="w-full flex flex-col">
              <p className="mx-auto font-poppins font-regular text-[24px] text-black">
                Únete a nosotros
              </p>
              <div className="w-full flex justify-around gap-2">
                <div className="flex flex-col">
                  <img
                    src={discordB}
                    alt="discord"
                    className="m-auto mt-5 mb-2 max-h-[25px]"
                  ></img>
                  <p className="font-poppins text-black font-regular text-[16px]">
                    discord
                  </p>
                </div>
                
                <a href="https://www.linkedin.com/in/garciajimena" target="_blank"  without rel="noreferrer">
                  <div className="flex flex-col">
                    <img src={twitterB} alt="twitter" className="m-auto mt-5 mb-2 max-h-[25px]"/>
                    <p className="font-poppins text-black font-regular text-[16px]">twitter</p>
                  </div>
                </a>
                <div className="flex flex-col">
                  <img
                    src={telegramB}
                    alt="telegram"
                    className="m-auto mt-5 mb-2 max-h-[25px]"
                  ></img>
                  <p className="font-poppins text-black font-regular text-[16px]">
                    telegram
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full m-auto h-[80%] md:w-6/12 overflow-visible">
          <Swiper
            slidesPerView={3}
            loop={true}
            centeredSlides={true}
            autoplay={{
              delay: 3500,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
            }}
            modules={[Autoplay]}
            className="mySwiper h-full overflow-visible"
          >
            <SwiperSlide className="flex overflow-visible">
              {({ isActive }) => (
                <div
                  className={
                    isActive
                      ? 'z-50 md:h-[80%] m-auto'
                      : 'z-30 w-[60%] md:h-[55%]  m-auto'
                  }
                >
                  <img src={blend} alt="blend" className="md:h-full"></img>
                  <div
                    className={
                      isActive && 'bg-black h-3 w-4/6 rounded-full blur-xl'
                    }
                  ></div>
                </div>
              )}
            </SwiperSlide>
            <SwiperSlide className="flex overflow-visible">
              {({ isActive }) => (
                <div
                  className={
                    isActive
                      ? 'z-50 md:h-[80%] m-auto'
                      : 'z-30 w-[60%] md:h-[55%]  m-auto'
                  }
                >
                  <img src={syrah} alt="syrah" className="md:h-full"></img>
                  <div
                    className={
                      isActive && 'bg-black h-3 w-4/6 rounded-full blur-xl'
                    }
                  ></div>
                </div>
              )}
            </SwiperSlide>
            <SwiperSlide className="flex overflow-visible">
              {({ isActive }) => (
                <div
                  className={
                    isActive
                      ? 'z-50 md:h-[80%] m-auto'
                      : 'z-30 w-[60%] md:h-[55%]  m-auto'
                  }
                >
                  <img
                    src={pinotnoir}
                    alt="pinotnoir"
                    className="md:h-full"
                  ></img>
                  <div
                    className={
                      isActive && 'bg-black h-3 w-4/6 rounded-full blur-xl'
                    }
                  ></div>
                </div>
              )}
            </SwiperSlide>
          </Swiper>
          {/*
          <img
            src={wineshero}
            alt="wine"
            className="md:h-[800px] mr-auto"
          ></img>
        */}
        </div>
      </div>
    </div>
  );
};

export default Hero;
