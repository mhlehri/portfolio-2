"use client";
import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

const ContactUs = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_zk0y0f7",
        "template_6ezgw36",
        form.current,
        "K7_A3hcVSMQuWp5rV"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="max-w-screen-xl mx-auto px-5 my-28" id="contact">
      <div className="">
        <h1 className="font-medium  sm:text-2xl lg:text-4xl border-[#174074] text-center mb-12 border-b-4 w-2/5 md:w-1/5 sm:pb-5 mx-auto">
          Contact me
        </h1>
      </div>
      <div className=" md:w-1/2 mx-auto">
        <form
          ref={form}
          onSubmit={sendEmail}
          className="flex-1 flex flex-col gap-3"
        >
          <input
            required
            type="text"
            placeholder="Your Name"
            name="user_name"
            className="p-3 outline-none drop-shadow-md hover:drop-shadow-xl  rounded-lg"
          />

          <input
            required
            type="email"
            placeholder="Your Email"
            name="user_email"
            className="p-3 outline-none drop-shadow-md hover:drop-shadow-xl  rounded-lg"
          />

          <textarea
            required
            name="message"
            placeholder="Message"
            className="p-3 outline-none drop-shadow-md hover:drop-shadow-xl  rounded-lg"
          />
          <button
            type="submit"
            className="w-min text-xl mx-auto font-semibold px-12 py-3 rounded-lg hover:scale-95 duration-300 bg-[#174074]  text-[#ffffff]"
          >
            Send
          </button>
        </form>
      </div>
    </div>
  );
};
export default ContactUs;
