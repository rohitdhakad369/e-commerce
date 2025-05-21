

import React from "react";
import Services from "../components/common/components/Services.jsx";
import StatsCardExported from "../components/About/StatsCard.jsx";
import deepaknagar from "./deepak.jpg"
import deepak from "./dee.jpg"
import diya from "./diyaa.jpg"



const teamMembers = [
  {
    name: "Deepak Nagar",
    image: deepaknagar,
    link: "https://linkedin.com/in/deepakjiobp",
    role: "ID:2411981177",
    rle: "Developer and Team Leader",
  },
  {
    name: "Diya Batra",
    image: diya,
    link: "https://linkedin.com/in/",
    role: "ID:2411981204",
    rle: "Designing and Testing",
  },
  {
    name: "Garima Sigla",
    image: "https://via.placeholder.com/150",
    link: "https://linkedin.com/in/",
    role: "ID:2411981212",
    rle: "Developer and Report Making",

  },
  {
    name: "Deepak",
    image: deepak,
    link: "https://linkedin.com/in/",
    role: "ID:2411981176",
    rle: "Designing and Requirements",

  },
];

const AboutPage = () => {
  return (
    <>
      <div className="pt-20">
        <div className="container mx-auto py-20 px-8 bg-gradient-to-r min-h-screen">
          <h1 className="text-6xl font-extrabold text-center text-gray-900 mb-14">
            Meet Our Team
          </h1>
          <p className="text-center text-xl text-gray-700 max-w-3xl mx-auto mb-20 leading-relaxed">
            Our team consists of innovative professionals dedicated to delivering
            a top-notch eCommerce experience. Meet the people behind the brand.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 justify-items-center px-[135px]">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-3xl shadow-xl transform transition duration-500 hover:scale-105 hover:shadow-2xl text-center max-w-md w-full"
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-52 h-52 mx-auto rounded-full mb-6 border-4 border-gray-100 shadow-md"
                />
                <h3 className="text-2xl font-bold text-gray-800 mb-1">
                  {member.name}
                </h3>
                <p className="text-lg text-gray-800 mb-1">{member.role}</p>
                <p className="text-lg text-gray-500 mb-4">{member.rle}</p>

                <a
                  href={member.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-gray-600 text-white px-6 py-2 rounded-full text-lg font-medium hover:bg-indigo-800 transition"
                >
                  View Profile
                </a>
              </div>
            ))}
          </div>

          <div className="flex pt-40 flex-col items-center justify-center gap-8">
            <StatsCardExported />
          </div>

          {/* Compact Contact Section */}
          <div className="mt-32 max-w-2xl mx-auto bg-white p-8 rounded-xl shadow-lg">
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-2">Call To Us</h2>
              <p className="text-gray-700 mb-1">Available 24/7</p>
              <p className="text-lg font-medium text-gray-800">+91 8319805741</p>
            </div>

            <div className="border-t border-gray-200 pt-8 mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-2">Write To Us</h2>
              <p className="text-gray-700 mb-4">We'll respond within 24 hours</p>
              <p className="text-gray-700">
                deepaknagar2436@gmail.com
              </p>
            </div>

            <form className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md"
                  />
                </div>
                <div>
                  <input
                    type="email"
                    placeholder="Your Email"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md"
                  />
                </div>
              </div>

              <div>
                <input
                  type="tel"
                  placeholder="Your Phone Number"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md"
                />
              </div>

              <div>
                <textarea
                  rows="3"
                  placeholder="Your Message"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-stone-800 text-white py-2 px-4 rounded-md font-medium hover:bg-indigo-700 transition"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
        <Services />
      </div>
    </>
  );
};

export default AboutPage;