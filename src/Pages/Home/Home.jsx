// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

import "./styles.css";

// import required modules
import { Navigation } from "swiper";
import Container from "../../Shared/Container";
import PopularClass from "./PopularClass/PopularClass";
import { useEffect, useState } from "react";

const Home = () => {
const [datas,setDatas]=useState([])
useEffect(()=>{
  fetch('data.json')
  .the(res=>res.json())
  .then(data=>setDatas(data))
},[])
console.log(datas);

  return (
    <>
      {/* banner section */}
      <section>
        <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
          <SwiperSlide>
            <img
              src="https://i.ibb.co/JHwFJVS/rsz-alexis-brown-omeahbefln4-unsplash.jpg"
              alt=""
              className="w-full  relative   contrast-[50%]  blur-[2px]"
            />
            <div className="absolute">
              <Container>
                <p className="text-xl font-semibold text-white mb-5">
                  welcome to our powerlearn
                </p>
                <h1 className=" text-6xl font-bold capitalize text-white mb-5">
                  Education is the best key <br /> success in life
                </h1>
                <button className="btn  btn-primary tex-xl">Our Cours</button>
              </Container>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://i.ibb.co/r2nFSvZ/rsz-brooke-cagle-g1kr4ozfoac-unsplash.jpg"
              alt=""
              className="w-full  relative   contrast-[50%]  blur-[2px]"
            />
            <div className="absolute">
              <Container>
                <p className="text-xl font-semibold text-white mb-5">
                  welcome to our powerlearn
                </p>
                <h1 className=" text-6xl font-bold capitalize text-white mb-5">
                  Education is the <br /> backbone of a nation
                </h1>
                <button className="btn  btn-primary tex-xl">Our Cours</button>
              </Container>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://i.ibb.co/HTMr00b/rsz-john-schnobrich-2fpjlaymqta-unsplash.jpg"
              alt=""
              className="w-full  relative   contrast-[50%]  blur-[2px]"
            />
            <div className="absolute">
              <Container>
                <p className="text-xl font-semibold text-white mb-5">
                  welcome to our powerlearn
                </p>
                <h1 className=" text-6xl font-bold capitalize text-white mb-5">
                  Education is the best key <br /> success in life
                </h1>
                <button className="btn  btn-primary tex-xl">Our Cours</button>
              </Container>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://i.ibb.co/kKDQ7JC/rsz-cdc-8lituykzrio-unsplash.jpg"
              alt=""
              className="w-full  relative   contrast-[50%]  blur-[2px]"
            />
            <div className="absolute">
              <Container>
                <p className="text-xl font-semibold text-white mb-5">
                  welcome to our powerlearn
                </p>
                <h1 className=" text-6xl font-bold capitalize text-white mb-5">
                  Education is the best key <br /> success in life
                </h1>
                <button className="btn  btn-primary tex-xl">Our Cours</button>
              </Container>
            </div>
          </SwiperSlide>
        </Swiper>
      </section>
      {/* Explore Our Popular Courses section */}
      <section className="bg-neutral-100">
        <Container>
          <div className="mx-auto text-center my-[70px] ">
            <h1 className=" text-6xl font-bold capitalize text-neutral-900 mb-5 pt-8">
              Explore Our <br /> Popular Courses
            </h1>
            <p className="text-xl  text-slate-600 mb-5">
              Jeffrey crikey victoria sponge mush spiffing super arse over tit
              matie <br /> boy smashing. The little rotter off his nut
              codswallop.!
            </p>
          </div>



          <PopularClass></PopularClass>
        </Container>
      </section>
    </>
  );
};

export default Home;
