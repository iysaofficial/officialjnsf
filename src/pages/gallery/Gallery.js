import React from "react";
import NavBar from "../../components/Navbar/NavBar";
import Footer from "../../components/Footer";

const Gallery = () => {
  return (
    <>
      <div>
        <NavBar />
      </div>
      <div id="services" className="bg-gray-100 py-12 mt-8">
        <section data-aos="zoom-in-down mt-8">
          <div className="my-4 py-4">
            <h2 className="my-2 text-center text-3xl text-[#101084] uppercase font-bold">
              Galeri
            </h2>

            <div className="flex justify-center">
              <div className="w-24 border-b-4 border-[#101084]"></div>
            </div>
          </div>

          <div className="px-12" data-aos="fade-down" data-aos-delay="600">
            <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-5">
              <div className="bg-white transition-all ease-in-out duration-400  overflow-hidden text-gray-700 hover:bg-gray-500 hover:text-white rounded-lg shadow-2xl p-3 group">
                <div className="m-2 text-justify text-sm">
                  <h2 className="font-semibold my-4 text-2xl text-center">
                    Galeri 2026
                  </h2>
                  <p className="font-bold text-center">
                    <a
                      href="https://drive.google.com/drive/folders/1_WUayO8ktr3hN6oekDWNvnhsUD6hUBtj?usp=sharing"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Klik Disini
                    </a>
                  </p>
                </div>
              </div>
              <div className="bg-white transition-all ease-in-out duration-400  overflow-hidden text-gray-700 hover:bg-gray-500 hover:text-white rounded-lg shadow-2xl p-3 group">
                <div className="m-2 text-justify text-sm">
                  <h2 className="font-semibold my-4 text-2xl text-center">
                    Galeri 2025
                  </h2>
                  <p className="font-bold text-center">
                    <a
                      href="https://drive.google.com/drive/folders/18DpMiBLoEB-6W9V__VOscvW0UuaDxngd?usp=drive_link"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Klik Disini
                    </a>
                  </p>
                </div>
              </div>
              <div className="bg-white transition-all ease-in-out duration-400  overflow-hidden text-gray-700 hover:bg-gray-500 hover:text-white rounded-lg shadow-2xl p-3 group">
                <div className="m-2 text-justify text-sm">
                  <h2 className="font-semibold my-4 text-2xl text-center">
                    Galeri 2024
                  </h2>
                  <p className="font-bold text-center">
                    <a
                      href="https://drive.google.com/drive/folders/1QANPEv3rGpzyC_WGWThKehNCNhw8CuK6?usp=sharing"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Klik Disini
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default Gallery;
