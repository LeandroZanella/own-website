import React from "react";
import { Link } from "react-scroll";

export default function Header() {
  return (
    <nav className="bg-gray-950 max-w-screen w-full top-0 fixed z-50">
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        <div className="relative flex items-center justify-between h-16">
          <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
            <div className="flex-shrink-0">
            <Link
                component="button"
                activeClass="active"
                to="start"
                spy={true}
                smooth={true}
                duration={1000}
                className="text-white font-bold cursor-pointer"
              >
                Início
              </Link>
            </div>
          </div>

          <div className="hidden sm:block sm:ml-6">
            <div className="flex space-x-4">
              <Link
                activeClass="active"
                to="start"
                spy={true}
                smooth={true}
                duration={1000}
                className="px-3 py-2 rounded-md text-sm font-medium text-gray-300 hover:text-white hover:bg-gray-900 transition duration- cursor-pointer"
              >
                Início
              </Link>

              <Link
                activeClass="active"
                to="about"
                spy={true}
                smooth={true}
                duration={1000}
                className="px-3 py-2 rounded-md text-sm font-medium text-gray-300 hover:text-white hover:bg-gray-900 transition duration- cursor-pointer"
              >
                Sobre
              </Link>

              <Link
                activeClass="active"
                to="experience"
                spy={true}
                smooth={true}
                duration={1000}
                className="px-3 py-2 rounded-md text-sm font-medium text-gray-300 hover:text-white hover:bg-gray-900 transition duration- cursor-pointer"
              >
                Experiências
              </Link>

              <Link
                activeClass="active"
                to="content"
                spy={true}
                smooth={true}
                duration={1000}
                className="px-3 py-2 rounded-md text-sm font-medium text-gray-300 hover:text-white hover:bg-gray-900 transition duration- cursor-pointer"
              >
                Competências
              </Link>

              <Link
                activeClass="active"
                to="contact"
                spy={true}
                smooth={true}
                duration={1000}
                className="px-3 py-2 rounded-md text-sm font-medium text-gray-300 hover:text-white hover:bg-gray-900 transition duration- cursor-pointer"
              >
                Contato
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}