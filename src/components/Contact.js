"use client";
import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const ContactUs = () => {
  const form = useRef();
  const [ok, setOk] = useState(false);

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
          if (result.text === "OK") {
            setOk(true);
            e.target.from_name.value = "";
            e.target.user_email.value = "";
            e.target.message.value = "";
          }
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
      <div className="flex flex-wrap gap-3 items-start justify-center">
        <div className="flex-1 space-y-4">
          <h1 className="text-sm md:text-xl lg:text-2xl">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="inline mr-2 w-4 h-4 md:w-8 md:h-8 fill-[#174074]"
              viewBox="0 0 24 24"
            >
              <path d="M12 1c-3.148 0-6 2.553-6 5.702 0 3.148 2.602 6.907 6 12.298 3.398-5.391 6-9.15 6-12.298 0-3.149-2.851-5.702-6-5.702zm0 8c-1.105 0-2-.895-2-2s.895-2 2-2 2 .895 2 2-.895 2-2 2zm8 6h-3.135c-.385.641-.798 1.309-1.232 2h3.131l.5 1h-4.264l-.344.544-.289.456h.558l.858 2h-7.488l.858-2h.479l-.289-.456-.343-.544h-2.042l-1.011-1h2.42c-.435-.691-.848-1.359-1.232-2h-3.135l-4 8h24l-4-8zm-12.794 6h-3.97l1.764-3.528 1.516 1.528h1.549l-.859 2zm8.808-2h3.75l1 2h-3.892l-.858-2z" />
            </svg>
            Dhaka, Bangladesh
          </h1>
          <h1 className="md:text-xl lg:text-2xl">
            <svg
              className="inline mr-2 w-6 h-6 md:w-8 md:h-8 fill-[#174074]"
              xmlns="http://www.w3.org/2000/svg"
              fillRule="evenodd"
              clipRule="evenodd"
            >
              <path d="M16 22.621l-3.521-6.795c-.007.004-1.974.97-2.064 1.011-2.24 1.086-6.799-7.82-4.609-8.994l2.082-1.026-3.492-6.817-2.106 1.039c-1.622.845-2.298 2.627-2.289 4.843.027 6.902 6.711 18.013 12.212 18.117.575.011 1.137-.098 1.677-.345.121-.055 2.102-1.029 2.11-1.033zm4-5.621h-1v-13h1v13zm-2-2h-1v-9h1v9zm4-1h-1v-7h1v7zm-6-1h-1v-5h1v5zm-2-1h-1v-3h1v3zm10 0h-1v-3h1v3zm-12-1h-1v-1h1v1z" />
            </svg>
            +880 1575357645
          </h1>
          <h1 className="md:text-xl lg:text-2xl">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="inline mr-2 w-4 h-4 md:w-8 md:h-8 fill-[#174074]"
              viewBox="0 0 24 24"
            >
              <path d="M12 12.713l-11.985-9.713h23.971l-11.986 9.713zm-5.425-1.822l-6.575-5.329v12.501l6.575-7.172zm10.85 0l6.575 7.172v-12.501l-6.575 5.329zm-1.557 1.261l-3.868 3.135-3.868-3.135-8.11 8.848h23.956l-8.11-8.848z" />
            </svg>{" "}
            lehrimirza101@gmail.com
          </h1>
        </div>
        <div className="flex-1 md:w-1/2">
          <form
            ref={form}
            onSubmit={sendEmail}
            className="flex-1 flex flex-col gap-3"
          >
            <input
              required
              type="text"
              placeholder="Your Name"
              name="from_name"
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
          <p className="text-center"> {ok ? "Successfully sent!" : ""} </p>
        </div>
      </div>
    </div>
  );
};
export default ContactUs;
