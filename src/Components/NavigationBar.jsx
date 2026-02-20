import { Disclosure } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import React, { useState } from "react";
import ContactModal from "./ContactModal";

// Import images properly for Vite
import reactLogo from "../assets/react.svg";
import flaskLogo from "../assets/Flask.png";
import pythonLogo from "../assets/Python.png";
import githubLogo from "../assets/Github.png";
import postgresLogo from "../assets/PostgresSQL.png";
import linuxLogo from "../assets/Linux.png";
import css3Logo from "../assets/CSS3.png";
import jsLogo from "../assets/JavaScript.png";
import appManagerImg from "../assets/AppMnager.png";
import Footer from "./Footer";

const navigation = [
  { name: "Home", href: "#home", current: false },
  { name: "Skills", href: "#skills", current: false },
  { name: "Projects", href: "#projects", current: false },
  { name: "Contact", href: "#contact", current: false, isModal: true },
];

const skills = [
  {
    name: "React",
    icon: reactLogo,
    description: "Frontend Framework",
  },
  {
    name: "Flask",
    icon: flaskLogo,
    description: "Python Framework",
  },
  {
    name: "Python",
    icon: pythonLogo,
    description: "Programming Language",
  },
  {
    name: "Git",
    icon: githubLogo,
    description: "Version Control",
  },
  {
    name: "PostgreSQL",
    icon: postgresLogo,
    description: "Database",
  },
  {
    name: "Linux",
    icon: linuxLogo,
    description: "Operating System",
  },
  {
    name: "CSS3",
    icon: css3Logo,
    description: "Styling",
  },
  {
    name: "JavaScript",
    icon: jsLogo,
    description: "Programming Language",
  }
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function NavigationBar() {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  const handleNavClick = (e, item) => {
    if (item.isModal) {
      e.preventDefault();
      setIsContactModalOpen(true);
    }
  };

  return (
    <>
      {/* Contact Modal */}
      <ContactModal 
        isOpen={isContactModalOpen} 
        closeModal={() => setIsContactModalOpen(false)} 
      />

      {/* Navigation Bar */}
      <Disclosure as="nav" className="bg-gradient-to-r from-gray-900 via-gray-800 to-black text-white border-b border-sky-500/30 fixed w-full z-50 backdrop-blur-sm bg-opacity-90">
        {({ open }) => (
          <>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex justify-between h-16 items-center">
                {/* Logo */}
                <div className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                  Portfolio
                </div>

                {/* Menu desktop */}
                <div className="hidden sm:flex space-x-1">
                  {navigation.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      onClick={(e) => handleNavClick(e, item)}
                      className={classNames(
                        "px-4 py-2 rounded-lg transition-all duration-300 font-medium cursor-pointer",
                        item.current
                          ? "bg-gradient-to-r from-cyan-500 to-blue-500 text-white"
                          : "hover:bg-white/10 hover:text-cyan-400"
                      )}
                    >
                      {item.name}
                    </a>
                  ))}
                </div>

                {/* Menu mobile button */}
                <div className="sm:hidden">
                  <Disclosure.Button className="p-2 rounded-lg hover:bg-white/10 transition-colors">
                    {open ? (
                      <XMarkIcon className="h-6 w-6" />
                    ) : (
                      <Bars3Icon className="h-6 w-6" />
                    )}
                  </Disclosure.Button>
                </div>
              </div>
            </div>

            {/* Menu mobile */}
            <Disclosure.Panel className="sm:hidden bg-gray-900/95 backdrop-blur-md">
              <div className="px-2 pt-2 pb-3 space-y-1">
                {navigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    onClick={(e) => handleNavClick(e, item)}
                    className={classNames(
                      "block px-4 py-3 rounded-lg transition-all duration-300 font-medium cursor-pointer",
                      item.current
                        ? "bg-gradient-to-r from-cyan-500 to-blue-500 text-white"
                        : "hover:bg-white/10 hover:text-cyan-400"
                    )}
                  >
                    {item.name}
                  </a>
                ))}
              </div>
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>

      {/* Hero Section */}
      <section id="home" className="text-white pt-32 pb-20 px-4 bg-gradient-to-b from-gray-900 to-black">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Text Content */}
            <div className="space-y-6 order-2 lg:order-1">
              <h1 className="text-5xl md:text-6xl font-bold leading-tight">
                <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
                  Junior Wilfrid Metellus
                </span>
              </h1>
              <p className="text-2xl text-gray-300 leading-relaxed">Full-Stack Web Developer & Systems Administrator</p>
              
              <p className="text-lg text-gray-300 leading-relaxed">
                Distinguished by creativity and innovation. I build elegant solutions 
                to complex problems using modern web technologies.
              </p>
              
              <div className="space-y-3 text-gray-400">
                <p className="flex items-center gap-2">
                  <span className="text-cyan-400">✓</span>
                  Full-stack web development with modern frameworks
                </p>
                <p className="flex items-center gap-2">
                  <span className="text-cyan-400">✓</span>
                  Responsive and user-friendly interface design
                </p>
                <p className="flex items-center gap-2">
                  <span className="text-cyan-400">✓</span>
                  Performance optimization and best practices
                </p>
              </div>

              <div className="flex gap-4 pt-4">
                <a
                  href="#projects"
                  className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-8 py-3 rounded-lg font-semibold hover:shadow-lg hover:shadow-cyan-500/50 transition-all duration-300"
                >
                  View Projects
                </a>
                <button
                  onClick={() => setIsContactModalOpen(true)}
                  className="border-2 border-cyan-500 text-cyan-400 px-8 py-3 rounded-lg font-semibold hover:bg-cyan-500/10 transition-all duration-300"
                >
                  Contact Me
                </button>
              </div>
            </div>

            {/* Image */}
            <div className="order-1 lg:order-2 flex justify-center">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full blur-3xl opacity-30 animate-pulse"></div>
                <img
                  className="relative h-80 w-80 object-contain animate-float"
                  src={reactLogo}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-4 bg-black">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Technical <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Skills</span>
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              A comprehensive toolkit of modern technologies and frameworks I use to bring ideas to life
            </p>
          </div>

          {/* Skills Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {skills.map((skill, index) => (
              <div
                key={skill.name}
                className="group relative bg-gradient-to-br from-gray-900 to-gray-800 rounded-xl p-6 border border-gray-700 hover:border-cyan-500/50 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-cyan-500/20"
                style={{
                  animation: `fadeInUp 0.5s ease-out ${index * 0.1}s both`
                }}
              >
                <div className="relative z-10">
                  <div className="mb-4 transform group-hover:scale-110 transition-transform duration-300">
                    <img src={skill.icon} className="w-16 h-16 object-contain" alt={`${skill.name} icon`} />
                  </div>
                  
                  <h3 className="text-xl font-bold text-white mb-2">
                    {skill.name}
                  </h3>
                  
                  <p className="text-gray-400 text-sm">
                    {skill.description}
                  </p>
                </div>

              
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -skew-x-12"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>


      <section id="projects" className="py-20 px-4 bg-gradient-to-b from-black to-gray-900 relative overflow-hidden">

        <div className="absolute top-0 left-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          {/* Section Header */}
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Featured <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Projects</span>
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Full-stack applications showcasing modern web development practices
            </p>
          </div>

          {/* Project Card */}
          <div className="group relative">
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              {/* Project Image */}
              <div className="order-2 lg:order-1 relative">
                <div className="relative overflow-hidden rounded-2xl shadow-2xl transform transition-all duration-500 group-hover:scale-105 group-hover:shadow-cyan-500/50">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-300 z-10"></div>
                  
                  <img
                    src={appManagerImg}
                    alt="E-Commerce Platform"
                    className="w-full h-[500px] object-cover"
                  />
                </div>
                
                <div className="absolute -bottom-6 -right-6 w-72 h-72 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-full blur-3xl -z-10"></div>
              </div>

              {/* Project Details */}
              <div className="order-1 lg:order-2 space-y-6">
                <div>
                  <span className="text-cyan-400 font-semibold text-sm uppercase tracking-wider">Full-Stack Application</span>
                  <h3 className="text-3xl md:text-4xl font-bold text-white mt-2 mb-4">
                    Password Manager
                  </h3>
                  <p className="text-gray-300 text-lg leading-relaxed">
                        An enterprise-grade credential and device management platform designed to 
                        securely store, encrypt, and manage access credentials for servers, switches, 
                        and storage infrastructure. Built with React frontend and Django backend, 
                        featuring JWT authentication and PostgreSQL database.
                  </p>
                </div>

                {/* Features */}
                <div className="space-y-3">
                  <h4 className="text-white font-semibold text-lg">Key Features:</h4>
                  <ul className="space-y-2 text-gray-400">
                    <li className="flex items-start gap-2">
                      <span className="text-cyan-400 mt-1">▹</span>
                      <span>JWT-based authentication and authorization</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-cyan-400 mt-1">▹</span>
                      <span>Password hashing and AES encryption at rest</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-cyan-400 mt-1">▹</span>
                      <span>Device inventory management (servers, switches, routers, storage)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-cyan-400 mt-1">▹</span>
                      <span>Secure credential vault with role-based access control</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-cyan-400 mt-1">▹</span>
                      <span>RESTful API architecture</span>
                    </li>
                  </ul>
                </div>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-3">
                  <span className="bg-gray-800 text-cyan-400 px-4 py-2 rounded-lg text-sm font-medium border border-gray-700">React</span>
                  <span className="bg-gray-800 text-cyan-400 px-4 py-2 rounded-lg text-sm font-medium border border-gray-700">Django</span>
                  <span className="bg-gray-800 text-cyan-400 px-4 py-2 rounded-lg text-sm font-medium border border-gray-700">PostgreSQL</span>
                  <span className="bg-gray-800 text-cyan-400 px-4 py-2 rounded-lg text-sm font-medium border border-gray-700">Bootstrap</span>
                </div>

                {/* Action Buttons */}
                <div className="flex pt-1">
                  <a
                    href="#project1"
                    className="bg-black-to-r from-cyan-500 to-blue-500 text-white px-6 py-3 rounded-lg font-semibold hover:shadow-lg hover:shadow-cyan-500/50 transition-all duration-300 flex items-center gap-2"
                  >
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
     <Footer/>

      {/* CSS Animations */}
      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-20px);
          }
        }

        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
      `}</style>
    </>
  );
}
