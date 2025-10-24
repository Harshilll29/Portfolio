import { useState, useRef } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";
import { styles } from "../styles";


import resumePDF from "../assets/resume.pdf";

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        "service_9p3s4p4",
        "template_vibgpeh",
        {
          name: form.name,
          email: form.email,
          message: form.message,
        },
        "tsoe_5jPXbMTaVjah"
      )
      .then(
        () => {
          setLoading(false);
          alert("Thank you. I will get back to you as soon as possible.");

          setForm({
            name: "",
            email: "",
            message: "",
          });
        },
        (error) => {
          setLoading(false);
          console.log(error);
          alert("Something went wrong.");
        }
      );
  };

  const handleResumeDownload = () => {
    try {
      
      const link = document.createElement("a");
      link.href = resumePDF;
      link.download = "Harshil_Joshi_Resume.pdf";
      link.target = "_blank";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } catch (error) {
      console.error("Error downloading resume:", error);
      alert(
        "Sorry, there was an error downloading the resume. Please try again."
      );
    }
  };

  return (
    <div className="xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden">
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className="w-full md:w-[700px] bg-gradient-to-br from-[#1f1f1f] to-[#2c2c2c] p-10 rounded-2xl shadow-2xl backdrop-blur-md border border-gray-700"
      >
        <p className={`${styles.sectionSubText} text-gradient`}>Get in touch</p>
        <h3 className={`${styles.sectionHeadText} text-white`}>Contact.</h3>

        {/* Resume Download Button - Centered */}
        <div className="mt-8 mb-8 flex flex-col items-center">
          <button
            onClick={handleResumeDownload}
            className="bg-gradient-to-r from-green-500 to-blue-600 hover:from-blue-600 hover:to-green-500 py-4 px-10 outline-none text-white font-bold shadow-lg rounded-xl transition-all duration-300 transform hover:scale-105 flex items-center gap-3"
            style={{ padding: "1rem 2.5rem", margin: "0.5rem 0" }} // Extra padding and margin
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
              />
            </svg>
            <span className="px-2 py-1">Download Resume</span>{" "}
            {/* Padding inside text */}
          </button>
        </div>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="mt-12 flex flex-col gap-8"
        >
          {/* Name */}
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4 text-left">
              Your Name
            </span>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="What's your name?"
              className="bg-[#2d2d2d] py-4 px-6 placeholder:text-gray-300 text-white rounded-lg border border-transparent hover:border-purple-500 transition-all duration-200"
            />
          </label>

          {/* Email */}
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4 text-left">
              Your Email
            </span>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="What's your email?"
              className="bg-[#2d2d2d] py-4 px-6 placeholder:text-gray-300 text-white rounded-lg border border-transparent hover:border-blue-400 transition-all duration-200"
            />
          </label>

          {/* Message */}
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4 text-left">
              Your Message
            </span>
            <textarea
              rows="7"
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="What do you want to say?"
              className="bg-[#2d2d2d] py-4 px-6 placeholder:text-gray-300 text-white rounded-lg border border-transparent hover:border-pink-400 transition-all duration-200"
            />
          </label>

          {/* Submit Button */}
          <button
            type="submit"
            className="bg-gradient-to-r from-purple-500 to-indigo-600 hover:from-indigo-600 hover:to-purple-500 py-3 px-8 outline-none w-fit text-white font-bold shadow-lg rounded-xl transition-transform transform hover:scale-105"
            style={{ padding: "0.75rem 2rem", margin: "0.5rem 0" }} // Extra padding and margin
          >
            <span className="px-2 py-1">{loading ? "Sending..." : "Send"}</span>{" "}
            {/* Padding inside text */}
          </button>
        </form>
      </motion.div>

      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]"
      >
        <EarthCanvas />
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
