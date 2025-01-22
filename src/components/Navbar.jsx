import React from "react"
import school_logo from "../assets/sparsh world school logo.png"

const Navbar = ({ onNavClick }) => {
  return (
    <>
      <div className="w-full bg-white">
        <div className="flex items-center justify-center w-full h-28 bg-white gap-32 md:max-w-screen-xl mx-auto">
          <div className="flex items-center">
            <div className="w-24 h-24 p-2">
              <img
                src={school_logo}
                alt=""
                className="object-cover w-full h-full"
              />
            </div>
            <div className="flex flex-col">
              <h2 className="text-3xl text-green-600 font-bold uppercase">
                Sparsh World School
              </h2>
              <h2 className="text-2xl text-amber-500 font-bold uppercase">
                Suratgarh, Rajasthan
              </h2>
            </div>
          </div>
          <div className="flex flex-col">
            <div className="flex gap-3 my-4 text-sm text-gray-500">
              <a href="#" onClick={() => onNavClick("home")}>
                Home
              </a>
              <a href="#" onClick={() => onNavClick("school-profile")}>
                About Us
              </a>
              <a href="#">Parent's login</a>
              <a href="#">Teacher's login</a>
              <a href="#">Book List</a>
              <a href="#">Bus Routes</a>
              <a href="#">Pay Fees</a>
            </div>
            <div>
              <button className="relative inline-flex items-center justify-center px-8 py-3  text-lg font-medium text-white bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 rounded-full shadow-lg group overflow-hidden hover:bg-opacity-80 transition-all duration-300">
                <span className="relative z-10">
                  Admission Notice Session (2025 - 2026)
                </span>
                <span className="absolute inset-0 bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 opacity-30 blur-md scale-110 group-hover:scale-100 transition-all duration-500"></span>
                <span className="absolute inset-0 border-4 border-transparent bg-gradient-to-r from-yellow-400 to-green-400 opacity-80 group-hover:border-yellow-400 group-hover:border-4 group-hover:opacity-100 animate-pulse transition-all duration-500"></span>
              </button>
            </div>
          </div>
        </div>
      </div>
      <nav className="flex items-start justify-center w-full bg-green-700 text-white gap-32 md:max-w-screen-lg rounded-b-lg mx-auto">
        <div className="flex gap-2 py-[4px]">
          <a
            href="#"
            onClick={() => onNavClick("home")}
            className="hover:bg-[rgb(40,88,37)] px-2 py-3 text-sm rounded-md"
          >
            Home
          </a>

          <div className="relative group flex items-center z-50">
            <a
              href="#"
              className="hover:bg-[rgb(40,88,37)] px-2 py-3 text-sm rounded-md"
            >
              About Us
            </a>
            <div className="absolute hidden group-hover:flex flex-col bg-white text-sm text-stone-700 w-48 top-full rounded-md shadow-lg z-50">
              <a
                href="#"
                onClick={() => onNavClick("school-profile")}
                className="hover:bg-gray-100 px-4 py-2 border-b-2 border"
              >
                School Profile
              </a>
              <a
                href="#"
                onClick={() => onNavClick("school-information")}
                className="hover:bg-gray-100 px-4 py-2 border-b-2 border"
              >
                School Information
              </a>
              <a
                href="#"
                onClick={() => onNavClick("about-team")}
                className="hover:bg-gray-100 px-4 py-2 border-b-2 border"
              >
                About Our Principal
              </a>
              <a
                href="#"
                onClick={() => onNavClick("affiliation-status")}
                className="hover:bg-gray-100 px-4 py-2 border-b-2 border"
              >
                Affiliation Status
              </a>
              <a
                href="#"
                onClick={() => onNavClick("our-mission")}
                className="hover:bg-gray-100 px-4 py-2 border-b-2 border"
              >
                Our Mission
              </a>
              <a
                href="#"
                onClick={() => onNavClick("")}
                className="hover:bg-gray-100 px-4 py-2 border-b-2 border"
              >
                Additional Information
              </a>
            </div>
          </div>

          <div className="relative group flex items-center z-50">
            <a
              href="#"
              className="hover:bg-[rgb(40,88,37)] px-2 py-3 text-sm rounded-md"
            >
              Academics
            </a>
            <div className="absolute hidden group-hover:flex flex-col bg-white text-sm text-stone-700 w-48 top-full rounded-md shadow-lg z-50">
              <a
                href="#"
                onClick={() => onNavClick("about-mission")}
                className="hover:bg-gray-100 px-4 py-2 border-b-2 border"
              >
                Workshops & Events/Seminars
              </a>
              <a
                href="#"
                onClick={() => onNavClick("about-vision")}
                className="hover:bg-gray-100 px-4 py-2 border-b-2 border"
              >
                Teaching Methodology
              </a>
            </div>
          </div>

          <div className="relative group flex items-center z-50">
            <a
              href="#"
              className="hover:bg-[rgb(40,88,37)] px-2 py-3 text-sm rounded-md"
            >
              Infrastructure
            </a>
            <div className="absolute hidden group-hover:flex flex-col bg-white text-sm text-stone-700 w-48 top-full rounded-md shadow-lg z-50">
              <a
                href="#"
                onClick={() => onNavClick("about-mission")}
                className="hover:bg-gray-100 px-4 py-2 border-b-2 border"
              >
                Auditorium
              </a>
              <a
                href="#"
                onClick={() => onNavClick("about-vision")}
                className="hover:bg-gray-100 px-4 py-2 border-b-2 border"
              >
                Library
              </a>
              <a
                href="#"
                onClick={() => onNavClick("about-team")}
                className="hover:bg-gray-100 px-4 py-2 border-b-2 border"
              >
                Computer Lab
              </a>
              <a
                href="#"
                onClick={() => onNavClick("about-team")}
                className="hover:bg-gray-100 px-4 py-2 border-b-2 border"
              >
               Science & Mathematics Lab
              </a>
              <a
                href="#"
                onClick={() => onNavClick("about-team")}
                className="hover:bg-gray-100 px-4 py-2 border-b-2 border"
              >
               Sports Complex
              </a>
              <a
                href="#"
                onClick={() => onNavClick("about-team")}
                className="hover:bg-gray-100 px-4 py-2 border-b-2 border"
              >
               Other Facilities
              </a>
            </div>
          </div>

          <a
            href="#"
            className="hover:bg-[rgb(40,88,37)] px-2 py-3 text-sm rounded-md"
          >
            Achievements
          </a>
          <a
            href="#"
            className="hover:bg-[rgb(40,88,37)] px-2 py-3 text-sm rounded-md"
          >
            Photo Gallery
          </a>
          <a
            href="#"
            className="hover:bg-[rgb(40,88,37)] px-2 py-3 text-sm rounded-md"
          >
            School News
          </a>
          <a
            href="#"
            className="hover:bg-[rgb(40,88,37)] px-2 py-3 text-sm rounded-md"
          >
            Career
          </a>
          <div className="relative group flex items-center z-50">
            <a
              href="#"
              className="hover:bg-[rgb(40,88,37)] px-2 py-3 text-sm rounded-md"
            >
              Uniform
            </a>
            <div className="absolute hidden group-hover:flex flex-col bg-white text-sm text-stone-700 w-48 top-full rounded-md shadow-lg z-50">
              <a
                href="#"
                onClick={() => onNavClick("about-mission")}
                className="hover:bg-gray-100 px-4 py-2 border-b-2 border"
              >
                Boys Outfit
              </a>
              <a
                href="#"
                onClick={() => onNavClick("about-vision")}
                className="hover:bg-gray-100 px-4 py-2 border-b-2 border"
              >
                Girls Outfit
              </a>
            </div>
          </div>
          <a
            href="#"
            className="hover:bg-[rgb(40,88,37)] px-2 py-3 text-sm rounded-md"
          >
            Contact Us
          </a>
        </div>
      </nav>
    </>
  )
}

export default Navbar
