import React, { useState } from "react";
import NavBar from "../components/Navbar/NavBar";
import Footer from "../components/Footer";
import { useDocTitle } from "../components/CustomHook";
import axios from "axios";
import Notiflix from "notiflix";

const Aftermovie = () => {
  useDocTitle("JNSF - Official");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState([]);

  const clearErrors = () => {
    setErrors([]);
  };

  const clearInput = () => {
    setFirstName("");
    setLastName("");
    setEmail("");
    setPhone("");
    setMessage("");
  };

  const sendEmail = (e) => {
    e.preventDefault();
    document.getElementById("submitBtn").disabled = true;
    document.getElementById("submitBtn").innerHTML = "Loading...";
    let fData = new FormData();
    fData.append("first_name", firstName);
    fData.append("last_name", lastName);
    fData.append("email", email);
    fData.append("phone_number", phone);
    fData.append("message", message);

    axios({
      method: "post",
      url: process.env.REACT_APP_CONTACT_API,
      data: fData,
      headers: {
        "Content-Type": "multipart/form-data",
      },
    })
      .then(function (response) {
        document.getElementById("submitBtn").disabled = false;
        document.getElementById("submitBtn").innerHTML = "send message";
        clearInput();
        //handle success
        Notiflix.Report.success("Success", response.data.message, "Okay");
      })
      .catch(function (error) {
        document.getElementById("submitBtn").disabled = false;
        document.getElementById("submitBtn").innerHTML = "send message";
        //handle error
        const { response } = error;
        if (response.status === 500) {
          Notiflix.Report.failure(
            "An error occurred",
            response.data.message,
            "Okay"
          );
        }
        if (response.data.errors !== null) {
          setErrors(response.data.errors);
        }
      });
  };
  return (
    <>
      <div></div>
      <div
        id="contact"
        className="flex justify-center items-center mt-8 w-full bg-white py-12 lg:py-24 "
      >
        <div
          className="container mx-auto my-8 px-4 lg:px-20"
          data-aos="zoom-in"
        >
          <form action="https://formspree.io/f/xvoeewgj" method="POST">
            <div className="w-full bg-white p-8 my-4 md:px-12 lg:w-9/12 lg:pl-20 lg:pr-40 mr-auto rounded-2xl shadow-2xl">
              <div className="flex">
                <h1 className="font-bold text-center lg:text-left text-blue-900 uppercase text-4xl">
                  After Movie 2025
                </h1>
              </div>
              <div className="grid grid-cols-1 gap-5 md:grid-cols-2 mt-5">
                <iframe src="https://www.youtube.com/embed/DI6GevLONso?si=f-qedf1E82ht34hf"></iframe>
                {/* <div>
                  <input
                    name="first_name"
                    className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                    type="text"
                    placeholder="Nama Depan*"
                    required
                  />
                  {errors && (
                    <p className="text-red-500 text-sm">{errors.first_name}</p>
                  )}
                </div>

                <div>
                  <input
                    name="last_name"
                    className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                    type="text"
                    placeholder="Nam Belakang*"
                    required
                  />
                  {errors && (
                    <p className="text-red-500 text-sm">{errors.last_name}</p>
                  )}
                </div>

                <div>
                  <input
                    name="email"
                    className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                    type="email"
                    placeholder="Email*"
                    required
                  />
                  {errors && (
                    <p className="text-red-500 text-sm">{errors.email}</p>
                  )}
                </div>
              </div>
              <div className="my-4">
                <textarea
                  name="message"
                  placeholder="Pesan*"
                  className="w-full h-32 bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                  required
                ></textarea>
                {errors && (
                  <p className="text-red-500 text-sm">{errors.message}</p>
                )}
              </div>
              <div className="my-2 w-1/2 lg:w-2/4">
                <button
                  type="submit"
                  id="submitBtn"
                  className="uppercase text-sm font-bold tracking-wide bg-gray-500 hover:bg-blue-900 text-gray-100 p-3 rounded-lg w-full 
                    focus:outline-none focus:shadow-outline"
                >
                  Kirim Pesan
                </button> */}
              </div>
            </div>
          </form>
          <div className="w-full  lg:-mt-96 lg:w-2/6 px-8 py-6 ml-auto bg-blue-900 rounded-2xl">
            <div className="flex flex-col text-white">
              <div className="flex my-4 w-2/3 lg:w-3/4">
                <div className="flex flex-col">
                  <i className="fas fa-map-marker-alt pt-2 pr-2" />
                </div>
                <div className="flex flex-col">
                  <h2 className="text-2xl">After Movie JNSF</h2>
                  <p>
                    After Movie Adalah sebuah video dokumentasi dari kegiatan
                    event dari rangkaian opening sampai dengan awarding pada
                    event tersebut
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Aftermovie;
