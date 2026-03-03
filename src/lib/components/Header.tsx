import { Link } from "@tanstack/react-router"
import React, { useState } from "react"

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const activeLinkStyle = {
    fontWeight: "bold",
    textDecoration: "underline",
  }

  return (
    <header className="bg-gray-400 shadow-md w-full">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <Link to="/">
              <img
                src="/brandLogo.png"
                alt="Brand Logo"
                className="h-14 w-14"
              />
            </Link>
          </div>
          <nav className="hidden md:flex items-center space-x-4">
            <Link
              to="/about"
              className="text-white hover:text-gray-900"
              activeProps={{ style: activeLinkStyle }}
            >
              About Us
            </Link>
            <Link
              to="/services"
              className="text-white hover:text-gray-900"
              activeProps={{ style: activeLinkStyle }}
            >
              Services
            </Link>
            <Link
              to="/project-details"
              className="text-white hover:text-gray-900"
              activeProps={{ style: activeLinkStyle }}
            >
              Project Details
            </Link>
            <Link
              to="/contact"
              className="text-white hover:text-gray-900"
              activeProps={{ style: activeLinkStyle }}
            >
              Contact Us
            </Link>
          </nav>
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-white hover:text-gray-900 focus:outline-none"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                {isMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link
              to="/about"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
              activeProps={{ style: activeLinkStyle }}
            >
              About Us
            </Link>
            <Link
              to="/services"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
              activeProps={{ style: activeLinkStyle }}
            >
              Services
            </Link>
            <Link
              to="/project-details"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
              activeProps={{ style: activeLinkStyle }}
            >
              Project Details
            </Link>
            <Link
              to="/contact"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
              activeProps={{ style: activeLinkStyle }}
            >
              Contact Us
            </Link>
          </div>
        </div>
      )}
    </header>
  )
}

export default Header
