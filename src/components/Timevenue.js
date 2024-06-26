import React from "react";
import img from "../images/Web-developer.svg";
import { Link } from "react-router-dom";

const Timevenue = () => {
  return (
    <>
      <div className="m-auto max-w-6xl p-2 md:p-12 h-5/6" id="about">
        <div
          className="flex flex-col-reverse lg:flex-row py-8 justify-between lg:text-left"
          data-aos="fade-up"
        >
          <div className="lg:w-1/2 flex flex-col lg:mx-4 justify-center">
            <img
              alt="card img"
              className="rounded-t float-right mb-5"
              src="./assets/logo/venue.jpg"
            />
            <a className="font-bold">
              Lokasi Venue: {" "}  
              <a
                href="https://maps.app.goo.gl/vh15YCjxTGiJY7Gy9"
                target="_blank" 
              >
                 Klik Disini
              </a>
            </a>
          </div>

          <div className="lg:w-1/2 flex flex-col lg:mx-4 justify-center lg:w-1/2  px-8">
            <img
              alt="card img"
              className="rounded-t float-right mb-5"
              src="./assets/logo/time.jpg"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Timevenue;
