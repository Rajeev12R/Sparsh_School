import React, { useState, useEffect } from "react"

const Mission = () => {
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
    <>
      <div className="slideshow w-full bg-green-100 h-[200px] relative overflow-hidden rounded-lg text-white gap-32 md:max-w-screen-lg rounded-b-lg mx-auto">
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
      <div className="flex items-start justify-center w-full h-screen text-white gap-32 md:max-w-screen-lg rounded-b-lg mx-auto">
        <div className="flex w-full mt-4 gap-2">
          {/* Left side content */}
          <div className="w-[70%] flex text-sm leading-6 flex-col h-full">
            <div className="flex-1 text-justify">
              <h1
                className="text-lg text-lime-600 mt-4 uppercase"
                style={{ wordSpacing: 1 }}
              >
                School Mission
              </h1>
              <hr />
              <div className="bg-white p-4 rounded-lg mt-4 shadow-lg">
                  <p className="text-gray-600">
                  Sparsh World School aims to nurture students to become responsible global citizens, equipped to thrive and lead in a dynamic and evolving world. The school fosters an inclusive environment where learners of varying abilities are supported by dedicated educators skilled in their disciplines and child development. We offer a well-rounded curriculum that caters to diverse learning styles and encourages critical thinking, creativity, and collaboration. Our unwavering commitment to equity, excellence, and innovation forms the foundation of our school ethos.
                </p>
            </div>
            </div>
          </div>

          {/* Right side content */}
          <div className="w-[30%] h-full flex flex-col">
            <div className="h-full w-full bg-white p-4 flex flex-col">
              <h3 className="bg-green-600 text-base text-center py-2">
                Announcements
              </h3>
              <div className="mt-2 space-y-4 h-80 overflow-y-auto">
                <div className="bg-white p-4 rounded-lg shadow-lg">
                  <h4 className="font-semibold text-gray-800">
                    Important Announcement
                  </h4>
                  <p className="text-gray-600">
                    We are starting new sessions soon. Stay tuned for more
                    updates.
                  </p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-lg">
                  <h4 className="font-semibold text-gray-800">
                    Holiday Schedule
                  </h4>
                  <p className="text-gray-600">
                    Winter holidays will start from December 20th.
                  </p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-lg">
                  <h4 className="font-semibold text-gray-800">
                    Annual Sports Day
                  </h4>
                  <p className="text-gray-600">
                    The Annual Sports Day will be held on February 10th. All
                    students are encouraged to participate.
                  </p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-lg">
                  <h4 className="font-semibold text-gray-800">
                    Annual Sports Day
                  </h4>
                  <p className="text-gray-600">
                    The Annual Sports Day will be held on February 10th. All
                    students are encouraged to participate.
                  </p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-lg">
                  <h4 className="font-semibold text-gray-800">
                    Annual Sports Day
                  </h4>
                  <p className="text-gray-600">
                    The Annual Sports Day will be held on February 10th. All
                    students are encouraged to participate.
                  </p>
                </div>
                {/* Add more announcements here */}
              </div>
            </div>

            {/* Feed */}
            <div className="h-[50%] w-full bg-white mt-4 p-4 flex flex-col overflow-auto">
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
    </>
  )
}

export default Mission
