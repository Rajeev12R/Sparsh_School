import React, { useState, useEffect } from "react";

const SchoolProfile = () => {
  const images = [
    "https://plus.unsplash.com/premium_photo-1684581214880-2043e5bc8b8b?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YmxvZyUyMGNvdmVyfGVufDB8fDB8fHww",
    "https://plus.unsplash.com/premium_photo-1682284353484-4e16001c58eb?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8c2Nob29sfGVufDB8fDB8fHww",
    "https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHNjaG9vbHxlbnwwfHwwfHx8MA%3D%3D",
    "https://images.unsplash.com/photo-1706078352329-977b4cb3f889?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c2Nob29sJTIwY2FtcHVzfGVufDB8fDB8fHww",
    "https://images.unsplash.com/photo-1590579491624-f98f36d4c763?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHNjaG9vbCUyMGNhbXB1c3xlbnwwfHwwfHx8MA%3D%3D",
    "https://images.unsplash.com/photo-1680084521631-e4e6d77704d8?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8c2Nob29sJTIwY2FtcHVzJTIwaW5kaWFufGVufDB8fDB8fHww",
    "https://images.unsplash.com/photo-1613332116422-a99c39d3f53c?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8c3BvcnRzJTIwc2Nob29sfGVufDB8fDB8fHww",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  useEffect(() => {
    const intervalId = setInterval(nextImage, 3000);
    return () => clearInterval(intervalId);
  }, []);

  const newsEvents = [
    {
      date: "17 Jan",
      event: "Class VIII Trip to ‘Bengaluru, Mysuru, and Coorg’",
    },
    { date: "17 Jan", event: "Grades VI-VIII organized ‘Veer Baal Diwas’" },
    { date: "17 Jan", event: "Nursery Class celebrated ‘Brown Colour Day’" },
    { date: "17 Jan", event: "Pre-Primary Wing celebrated ‘Lohri’" },
  ];

  return (
    <>
      {/* Slideshow */}
      <div className="slideshow w-full bg-green-100 h-[200px] relative overflow-hidden rounded-lg text-white gap-32 md:max-w-screen-lg mx-auto">
        <img
          src={images[currentIndex]}
          alt={`Slideshow ${currentIndex + 1}`}
          className="w-full h-full object-cover transition-all duration-500"
        />
        <div className="absolute top-1/2 left-1 right-1 flex items-center justify-between transform -translate-y-1/2">
          <button
            className="bg-black bg-opacity-50 text-white w-10 h-10 rounded-full hover:bg-opacity-75 transition-all duration-300"
            onClick={prevImage}
          >
            &lt;
          </button>
          <button
            className="bg-black bg-opacity-50 text-white w-10 h-10 rounded-full hover:bg-opacity-75 transition-all duration-300"
            onClick={nextImage}
          >
            &gt;
          </button>
        </div>
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {images.map((_, index) => (
            <span
              key={index}
              className={`w-3 h-3 rounded-full ${
                index === currentIndex ? "bg-blue-500" : "bg-gray-300"
              } transition-all duration-300`}
            ></span>
          ))}
        </div>
      </div>

      {/* Main Content */}
      <div className="flex items-start justify-center w-full text-black gap-8 md:max-w-screen-lg mx-auto mt-8">
        {/* Left Side */}
        <div className="w-2/3 pl-4 md:pl-3">
          <h1 className="text-xl font-bold text-lime-600 uppercase">
            School Profile
          </h1>
          <hr className="my-3" />
          <p className="text-justify text-gray-700">
            Sparsh World School, established in 2003, provides a truly enabling
            environment to contribute to the holistic development of each
            student. Nestled in a picturesque environment, our institution is
            synonymous with academic excellence, creativity, and innovation. We
            prepare students not only for exams but for life by instilling in
            them values, confidence, and the skill set to thrive in today’s
            world.
          </p>
          <h2 className="text-lg font-semibold mt-6">Aim & Objectives</h2>
          <p className="text-justify text-gray-700 mt-3">
            Our mission is to nurture individuals who are confident,
            self-sufficient, and socially responsible. Our primary objectives
            include:
            <ul className="list-disc list-inside mt-2">
              <li>Encouraging lifelong learning and independent thought.</li>
              <li>
                Providing a curriculum that balances academics with creative
                expression.
              </li>
              <li>
                Developing ethical behavior and instilling the values of
                empathy, respect, and responsibility.
              </li>
            </ul>
          </p>
          <h2 className="text-lg font-semibold mt-6">Curriculum</h2>
          <p className="text-justify text-gray-700 mt-3">
            Sparsh World School follows the ICSE syllabus, complemented by
            activities that promote critical thinking and practical knowledge.
            Key highlights of our curriculum include:
            <ul className="list-disc list-inside mt-2">
              <li>
                Core subjects like Mathematics, Science, and Languages to build
                a strong foundation.
              </li>
              <li>
                Extracurricular activities like arts, music, drama, and sports.
              </li>
              <li>
                Special attention to STEM (Science, Technology, Engineering, and
                Mathematics) education.
              </li>
            </ul>
          </p>
        </div>

        {/* Right Side */}
        <div className="w-1/3  pr-4 md:pr-2">
          <h3 className="bg-green-600 text-white text-center py-2 rounded-md">
            Announcements
          </h3>
          <div className="bg-white shadow-md rounded-md mt-3 p-3">
            {newsEvents.map((news, index) => (
              <div key={index} className="mb-4">
                <h4 className="font-bold text-gray-800">{news.date}</h4>
                <p className="text-sm text-gray-600">{news.event}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default SchoolProfile;
