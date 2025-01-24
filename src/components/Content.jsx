import React, { useState, useEffect } from "react"

const Content = () => {
  const images = [
    "https://plus.unsplash.com/premium_photo-1684581214880-2043e5bc8b8b?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YmxvZyUyMGNvdmVyfGVufDB8fDB8fHww",
    "https://plus.unsplash.com/premium_photo-1682284353484-4e16001c58eb?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8c2Nob29sfGVufDB8fDB8fHww",
    "https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHNjaG9vbHxlbnwwfHwwfHx8MA%3D%3D",
    "https://images.unsplash.com/photo-1706078352329-977b4cb3f889?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c2Nob29sJTIwY2FtcHVzfGVufDB8fDB8fHww",
    "https://images.unsplash.com/photo-1590579491624-f98f36d4c763?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHNjaG9vbCUyMGNhbXB1c3xlbnwwfHwwfHx8MA%3D%3D",
    "https://images.unsplash.com/photo-1680084521631-e4e6d77704d8?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8c2Nob29sJTIwY2FtcHVzJTIwaW5kaWFufGVufDB8fDB8fHww",
    "https://images.unsplash.com/photo-1613332116422-a99c39d3f53c?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8c3BvcnRzJTIwc2Nob29sfGVufDB8fDB8fHww",
  ]

  const [currentIndex, setCurrentIndex] = useState(0)

  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length)
  }

  const prevImage = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    )
  }

  useEffect(() => {
    const intervalId = setInterval(nextImage, 3000)

    return () => clearInterval(intervalId)
  }, [])

  const newsEvents = [
    {
      date: "17 Jan",
      event: "Class VIII Trip to ‘Bengaluru, Mysuru, and Coorg’",
    },
    { date: "17 Jan", event: "Grades VI-VIII organized ‘Veer Baal Diwas’" },
    { date: "17 Jan", event: "Nursery Class celebrated ‘Brown Colour Day’" },
    { date: "17 Jan", event: "Pre-Primary Wing celebrated ‘Lohri’" },
  ]

  return (
    <div className="flex items-start justify-center w-full h-screen text-white gap-32 md:max-w-screen-lg rounded-b-lg mx-auto">
      <div className="flex w-full mt-4 gap-2">
        {/* Left side content */}
        <div className="w-[70%] pl-3 md:pl-2 flex flex-col h-full">
          <div className="slideshow w-full bg-green-100 h-[400px] relative overflow-hidden rounded-lg">
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

          <div className="content flex text-black my-8 gap-2 justify-between">
            <div className="flex-1 text-justify">
              <h1
                className="text-lg text-lime-600 uppercase"
                style={{ wordSpacing: 1 }}
              >
                Welcome to Sparsh World School
              </h1>
              <hr />
              <p className="mt-3 text-gray-600">
                Welcome to Sparsh World School, established in 2024, where we
                nurture the leaders of tomorrow. Our school is designed to
                provide an innovative and enriching environment, encouraging the
                holistic development of each child. Featuring modern
                architecture, expansive classrooms, and cutting-edge facilities,
                Sparsh World School offers students a truly transformative
                educational experience. We pride ourselves on fostering academic
                excellence while also promoting creativity, critical thinking,
                and effective communication. Our vision is to empower students
                to be compassionate, responsible citizens who are ready to make
                an impact on the world. With a rapidly growing community, Sparsh
                World School is poised to become a beacon of learning and a
                symbol of progress in the region.
              </p>
            </div>
            <div className="flex-1 px-3 md:px-2 justify-center">
              <h1
                className="text-lg text-center text-lime-600 uppercase"
                style={{ wordSpacing: 1 }}
              >
                News & Events
              </h1>
              <div className=" flex flex-col mt-2 p-4 space-y-4">
                {newsEvents.map((item, index) => (
                  <div
                    key={index}
                    className="flex gap-2 md:gap-3 flex-wrap justify-between p-4 bg-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    <span className="font-semibold text-gray-800">
                      {item.date}
                    </span>
                    <span className="text-gray-600">{item.event}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

{/* Right side content */}
<div className="w-[30%] pr-3 md:pr-2 h-full flex flex-col">
  <div className="h-full w-full bg-white p-4 flex flex-col">
    <h3 className="bg-green-600 text-base text-center py-2">Announcements</h3>
    <div className="mt-2 space-y-4 h-80 overflow-y-auto">
      <div className="bg-white p-4 rounded-lg shadow-lg">
        <h4 className="font-semibold text-gray-800">Important Announcement</h4>
        <p className="text-gray-600">
          We are starting new sessions soon. Stay tuned for more updates.
        </p>
      </div>
      <div className="bg-white p-4 rounded-lg shadow-lg">
        <h4 className="font-semibold text-gray-800">Holiday Schedule</h4>
        <p className="text-gray-600">
          Winter holidays will start from December 20th.
        </p>
      </div>
      <div className="bg-white p-4 rounded-lg shadow-lg">
        <h4 className="font-semibold text-gray-800">Annual Sports Day</h4>
        <p className="text-gray-600">
          The Annual Sports Day will be held on February 10th. All students are
          encouraged to participate.
        </p>
      </div>
      <div className="bg-white p-4 rounded-lg shadow-lg">
        <h4 className="font-semibold text-gray-800">Annual Sports Day</h4>
        <p className="text-gray-600">
          The Annual Sports Day will be held on February 10th. All students are
          encouraged to participate.
        </p>
      </div>
      <div className="bg-white p-4 rounded-lg shadow-lg">
        <h4 className="font-semibold text-gray-800">Annual Sports Day</h4>
        <p className="text-gray-600">
          The Annual Sports Day will be held on February 10th. All students are
          encouraged to participate.
        </p>
      </div>
      {/* Add more announcements here */}
    </div>
  </div>

  {/* <div className="searchbar h-10 flex items-center mt-2 justify-center">
          <input type="search" name="" id="" placeholder="Search Any Keyword" className="py-2 px-4 w-full text-stone-700 h-full border-none outline-none hover:outline-stone-600 rounded-lg"/>
  </div> */}

  {/* Feed */}
  <div className="h-[50%] w-full bg-white mt-2 p-4 flex flex-col overflow-auto">
            <h3 className="bg-blue-600 text-base text-center py-2">Feed</h3>
            <div className="mt-2 space-y-4 h-96 overflow-y-auto">
              <div className="bg-gray-200 p-4 rounded-lg shadow-lg">
                <h4 className="font-semibold text-gray-800">YouTube Post</h4>
                <img
                  src="https://via.placeholder.com/300x150"
                  alt="YouTube Banner"
                  className="w-full h-auto mt-2 rounded-lg"
                />
              </div>
              <div className="bg-gray-200 p-4 rounded-lg shadow-lg">
                <h4 className="font-semibold text-gray-800">Facebook Post</h4>
                <img
                  src="https://via.placeholder.com/300x150"
                  alt="Facebook Banner"
                  className="w-full h-auto mt-2 rounded-lg"
                />
              </div>
              <div className="bg-gray-200 p-4 rounded-lg shadow-lg">
                <h4 className="font-semibold text-gray-800">YouTube Post</h4>
                <img
                  src="https://via.placeholder.com/300x150"
                  alt="YouTube Banner"
                  className="w-full h-auto mt-2 rounded-lg"
                />
              </div>
              <div className="bg-gray-200 p-4 rounded-lg shadow-lg">
                <h4 className="font-semibold text-gray-800">Facebook Post</h4>
                <img
                  src="https://via.placeholder.com/300x150"
                  alt="Facebook Banner"
                  className="w-full h-auto mt-2 rounded-lg"
                />
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Content
