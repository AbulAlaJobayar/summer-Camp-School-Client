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
import PopularInstactor from "./PopularInstactor/PopularInstactor";

const Home = () => {
  const [datas, setDatas] = useState([]);
  const [teachers, setTeachers] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/class")
      .then((res) => res.json())
      .then((data) => setDatas(data));
  }, []);
  useEffect(() => {
    fetch("http://localhost:5000/teacher")
      .then((res) => res.json())
      .then((data) => setTeachers(data));
  }, []);

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

      <section  className="mt-36 bg-neutral-100">
        <Container>
        <div className="flex flex-col sm:flex-row justify-between gap-10">
          <img src="https://i.ibb.co/LSHf7qL/about.png" alt="" />
          <div className="mt-10 flex flex-col justify-center">
            <h1 className="text-6xl font-bold text-[#0b1c39]">
              We are Experts <br />
              Learning Institution
            </h1>
            <h3 className="text-3xl font-semibold text-[#2572ff] mt-5">20 Years of Experience</h3>
            <p className="text-base text-[#626a77] mt-5 font-semibold">
              Do one absolutely bladdered say bugger all mate only a br quid that <br />
              chip shop amongst, cuppa excuse my French lemon squeezy bender <br />
              zonked my lady gosh cup of tea, have it spiffing good time naff
              wind up codswallop crikey.
            </p>
            <h3 className="text-3xl font-semibold text-[#2572ff] mt-5">Call Us +8801928000000</h3>
          <button className="btn btn-primary mt-5">View Courses</button>
          </div>
        </div>
        </Container>
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

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 mx-4">
            {datas.map((data) => (
              <PopularClass key={data._id} data={data}></PopularClass>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-neutral-100">
        <Container>
          <div className="mx-auto text-center my-[70px] ">
            <h1 className=" text-6xl font-bold capitalize text-neutral-900 mb-5 pt-8">
              Top Instructor
            </h1>
            <p className="text-xl  text-slate-600 mb-5">
              Jeffrey crikey victoria sponge mush spiffing super arse over tit
              matie <br /> boy smashing. The little rotter off his nut
              codswallop.!
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3  gap-5 mx-4">
            {teachers.map((teacher) => (
              <PopularInstactor
                key={teacher._id}
                teacher={teacher}
              ></PopularInstactor>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
};

export default Home;
