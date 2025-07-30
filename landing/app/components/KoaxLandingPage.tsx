"use client";
import React, { useState, useEffect } from "react";
import {
  ChevronDown,
  Phone,
  Mail,
  MapPin,
  Menu,
  X,
  ArrowRight,
} from "lucide-react";
import Link from "next/link";

const KoaxLandingPage = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const services = [
    {
      icon: "/koax-tech-nobg.png",
      name: "Koax Tech",
      text: "Comprehensive online services including digital marketing strategies, custom software development, and technology consulting.",
    },
    {
      icon: "/petwala-nobg.png",
      name: "Pet Wala",
      text: "Your trusted wholesale partner for premium pet products. Located in Electronic City, Bangalore.",
    },
    {
      icon: "/pa-nobg.png",
      name: "PathwayAtlas",
      text: "Complete study abroad consultancy service guiding students through their international education journey.",
    },
    {
      icon: "/koax-brokers-nobg.png",
      name: "Koax Brokers",
      text: "Professional rental property consultancy helping you find the perfect rental flats tailored to your needs.",
    },
  ];

  const features = [
    {
      title: "Technology Solutions",
      text: "Advanced software development and digital marketing services.",
      icon: "💻",
    },
    {
      title: "Pet Care Products",
      text: "Quality wholesale pet products with competitive pricing.",
      icon: "🐾",
    },
    {
      title: "Study Abroad Guidance",
      text: "End-to-end support for international education aspirants.",
      icon: "🎓",
    },
    {
      title: "Property Solutions",
      text: "Personalized rental property matching services.",
      icon: "🏠",
    },
  ];

  const whyChooseUs = [
    "Multi-industry expertise",
    "Innovative solutions",
    "Quality service delivery",
    "Customer-centric approach",
    "Proven track record",
    "Comprehensive services",
    "Expert team members",
    "Reliable partnerships",
  ];

  return (
    <div className="h-full bg-black text-white overflow-x-hidden">
      {/* Navigation */}
      <nav className="bg-black/80 backdrop-blur-xl fixed w-full top-0 z-50 transition-all duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center">
              <div className="text-2xl font-light text-white tracking-wider">
                KOAX
              </div>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:block">
              <div className="flex items-center space-x-12">
                <a
                  href="#home"
                  className="text-gray-400 hover:text-white text-sm font-light transition-all duration-500 tracking-wide"
                >
                  Home
                </a>
                <a
                  href="#about"
                  className="text-gray-400 hover:text-white text-sm font-light transition-all duration-500 tracking-wide"
                >
                  About
                </a>
                <a
                  href="#services"
                  className="text-gray-400 hover:text-white text-sm font-light transition-all duration-500 tracking-wide"
                >
                  Services
                </a>
                <a
                  href="#contact"
                  className="text-gray-400 hover:text-white text-sm font-light transition-all duration-500 tracking-wide"
                >
                  Contact
                </a>
              </div>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-400 hover:text-white transition-colors duration-300"
              >
                {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`md:hidden transition-all duration-500 ease-in-out ${
            isMenuOpen ? "max-h-64 opacity-100" : "max-h-0 opacity-0"
          } overflow-hidden`}
        >
          <div className="bg-black/95 backdrop-blur-xl px-4 py-6 space-y-4">
            <a
              href="#home"
              className="block text-gray-400 hover:text-white transition-colors duration-300 text-sm font-light tracking-wide"
            >
              Home
            </a>
            <a
              href="#about"
              className="block text-gray-400 hover:text-white transition-colors duration-300 text-sm font-light tracking-wide"
            >
              About
            </a>
            <a
              href="#services"
              className="block text-gray-400 hover:text-white transition-colors duration-300 text-sm font-light tracking-wide"
            >
              Services
            </a>
            <a
              href="#contact"
              className="block text-gray-400 hover:text-white transition-colors duration-300 text-sm font-light tracking-wide"
            >
              Contact
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section
        id="home"
        className="relative pt-20 bg-black overflow-hidden min-h-screen flex items-center"
      >
        {/* Minimal Background Gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-gray-900/20 via-black to-black" />

        {/* Background Image */}
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: "url('/bg-koax.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="text-center animate-fade-in-up">
            <h1 className="text-7xl md:text-9xl font-extralight text-white mb-8 leading-none tracking-tight">
              KOAX
            </h1>
            <p className="text-xl md:text-2xl text-gray-400 mb-4 font-light tracking-wide">
              Multi-Industry Solutions
            </p>
            <p className="text-base text-gray-500 mb-12 max-w-2xl mx-auto leading-relaxed font-light">
              Innovating across industries with our diverse portfolio—from tech
              and pet care to education and real estate.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <button className="group px-8 py-4 bg-white text-black font-light tracking-wide hover:bg-gray-100 transition-all duration-500 ease-out transform hover:scale-105">
                <Link
                  href={"/#services"}
                  className="flex items-center justify-center"
                >
                  Explore Services
                  <ArrowRight className="ml-3 w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                </Link>
              </button>
              <button className="px-8 py-4 text-white font-light tracking-wide hover:text-gray-300 transition-all duration-500 relative overflow-hidden group">
                <Link href={"/#contact"}>
                  <span className="relative z-10">Get In Touch</span>
                  <div className="absolute inset-0 bg-white/5 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
                </Link>
              </button>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <ChevronDown className="animate-bounce text-gray-600" size={24} />
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-32 bg-black relative">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20 animate-fade-in-up">
            <h2 className="text-5xl md:text-6xl font-extralight text-white mb-6 tracking-tight">
              About
            </h2>
            <div className="w-16 h-px bg-gray-700 mx-auto mb-12"></div>
          </div>

          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div className="space-y-8 animate-fade-in-left">
              <p className="text-lg text-gray-400 leading-relaxed font-light">
                KOAX is a diversified company operating through multiple
                specialized subsidiaries, each dedicated to excellence in their
                respective fields.
              </p>
              <p className="text-lg text-gray-400 leading-relaxed font-light">
                We combine innovation, quality service, and deep industry
                expertise across technology, pet care, education, and real
                estate sectors.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-6 animate-fade-in-right">
              {whyChooseUs.map((item, index) => (
                <div
                  key={index}
                  className="group p-6 hover:bg-gray-900/30 transition-all duration-700 cursor-default"
                  style={{
                    animationDelay: `${index * 100}ms`,
                  }}
                >
                  <div className="flex items-center">
                    <div className="w-1 h-1 bg-white rounded-full mr-4 group-hover:w-2 transition-all duration-500"></div>
                    <span className="text-gray-400 font-light text-sm group-hover:text-white transition-colors duration-500">
                      {item}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-32 bg-black relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20 animate-fade-in-up">
            <h2 className="text-5xl md:text-6xl font-extralight text-white mb-6 tracking-tight">
              Services
            </h2>
            <div className="w-16 h-px bg-gray-700 mx-auto mb-12"></div>
            <p className="text-lg text-gray-500 max-w-2xl mx-auto font-light">
              Comprehensive solutions across multiple industries
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {services.map((service, index) => (
              <div
                key={index}
                className="group p-8 hover:bg-gray-900/20 transition-all duration-700 cursor-default animate-fade-in-up"
                style={{
                  animationDelay: `${index * 200}ms`,
                }}
              >
                <div className="flex flex-col space-y-6">
                  <div className="flex items-center justify-center h-20">
                    <img
                      src={service.icon}
                      className="h-16 w-auto opacity-60 group-hover:opacity-100 transition-opacity duration-500 filter brightness-0 invert"
                      alt={service.name}
                    />
                  </div>
                  <div className="text-center">
                    <h3 className="text-xl font-light text-white mb-4 group-hover:text-gray-300 transition-colors duration-500">
                      {service.name}
                    </h3>
                    <p className="text-gray-500 leading-relaxed font-light group-hover:text-gray-400 transition-colors duration-500">
                      {service.text}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-32 bg-black relative">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20 animate-fade-in-up">
            <h2 className="text-5xl md:text-6xl font-extralight text-white mb-6 tracking-tight">
              Why Choose KOAX
            </h2>
            <div className="w-16 h-px bg-gray-700 mx-auto mb-12"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
            {features.map((feature, index) => (
              <div
                key={index}
                className="text-center group animate-fade-in-up"
                style={{
                  animationDelay: `${index * 150}ms`,
                }}
              >
                <div className="w-16 h-16 mx-auto mb-8 flex items-center justify-center text-2xl opacity-60 group-hover:opacity-100 transition-all duration-500 group-hover:scale-110">
                  {feature.icon}
                </div>
                <h3 className="text-lg font-light text-white mb-4 group-hover:text-gray-300 transition-colors duration-500">
                  {feature.title}
                </h3>
                <p className="text-gray-500 leading-relaxed font-light text-sm group-hover:text-gray-400 transition-colors duration-500">
                  {feature.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-32 bg-black text-white relative">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20 animate-fade-in-up">
            <h2 className="text-5xl md:text-6xl font-extralight mb-6 tracking-tight">
              Contact
            </h2>
            <div className="w-16 h-px bg-gray-700 mx-auto mb-12"></div>
            <p className="text-lg text-gray-500 max-w-2xl mx-auto font-light">
              Ready to discuss your needs? Let&apos;s explore how we can help
              you succeed.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-12 text-center">
            <div
              className="group animate-fade-in-up"
              style={{ animationDelay: "100ms" }}
            >
              <MapPin
                size={32}
                className="mx-auto mb-6 text-gray-600 group-hover:text-white transition-colors duration-500"
              />
              <h3 className="text-lg font-light mb-4">Address</h3>
              <p className="text-gray-500 font-light text-sm leading-relaxed">
                Electronic City
                <br />
                Bangalore, Karnataka
                <br />
                India
              </p>
            </div>

            <div
              className="group animate-fade-in-up"
              style={{ animationDelay: "200ms" }}
            >
              <Phone
                size={32}
                className="mx-auto mb-6 text-gray-600 group-hover:text-white transition-colors duration-500"
              />
              <h3 className="text-lg font-light mb-4">Phone</h3>
              <p className="text-gray-500 font-light text-sm">
                +91 92721 97552
              </p>
            </div>

            <div
              className="group animate-fade-in-up"
              style={{ animationDelay: "300ms" }}
            >
              <Mail
                size={32}
                className="mx-auto mb-6 text-gray-600 group-hover:text-white transition-colors duration-500"
              />
              <h3 className="text-lg font-light mb-4">Email</h3>
              <p className="text-gray-500 font-light text-sm">info@koax.com</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="text-2xl font-light text-white mb-8 tracking-widest">
              KOAX
            </div>
            <p className="text-gray-600 mb-12 font-light text-sm">
              Multi-Industry Solutions
            </p>

            <div className="grid md:grid-cols-4 gap-8 mb-12">
              <div className="group">
                <h4 className="font-light mb-4 text-white group-hover:text-gray-400 transition-colors duration-500 text-sm">
                  Koax Tech
                </h4>
                <p className="text-gray-600 text-xs font-light">
                  Digital Solutions
                </p>
              </div>
              <div className="group">
                <h4 className="font-light mb-4 text-white group-hover:text-gray-400 transition-colors duration-500 text-sm">
                  Pet Wala
                </h4>
                <p className="text-gray-600 text-xs font-light">Pet Products</p>
              </div>
              <div className="group">
                <h4 className="font-light mb-4 text-white group-hover:text-gray-400 transition-colors duration-500 text-sm">
                  PathwayAtlas
                </h4>
                <p className="text-gray-600 text-xs font-light">Study Abroad</p>
              </div>
              <div className="group">
                <h4 className="font-light mb-4 text-white group-hover:text-gray-400 transition-colors duration-500 text-sm">
                  Koax Brokers
                </h4>
                <p className="text-gray-600 text-xs font-light">
                  Property Solutions
                </p>
              </div>
            </div>

            <div className="pt-8 border-t border-gray-900">
              <p className="text-gray-600 text-xs font-light">
                © 2025 KOAX. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </footer>

      <style jsx>{`
        .animate-fade-in-up {
          animation: fadeInUp 1s ease-out forwards;
          opacity: 0;
        }
        .animate-fade-in-left {
          animation: fadeInLeft 1s ease-out 0.3s forwards;
          opacity: 0;
        }
        .animate-fade-in-right {
          animation: fadeInRight 1s ease-out 0.5s forwards;
          opacity: 0;
        }
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
        @keyframes fadeInLeft {
          from {
            opacity: 0;
            transform: translateX(-30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        @keyframes fadeInRight {
          from {
            opacity: 0;
            transform: translateX(30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
      `}</style>
    </div>
  );
};

export default KoaxLandingPage;
