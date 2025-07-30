"use client";
import React, { useState } from "react";
import { ChevronDown, Phone, Mail, MapPin, Menu, X } from "lucide-react";
import Link from "next/link";

const KoaxLandingPage = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const services = [
    {
      icon: "/koax-tech-nobg.png",
      name: "Koax Tech",
      text: "Comprehensive online services including digital marketing strategies, custom software development, and technology consulting. We help businesses leverage technology for growth and efficiency.",
      // contact: "9272197552",
      // location: "Worldwide",
    },
    {
      icon: "/petwala-nobg.png",
      name: "Pet Wala",
      text: "Your trusted wholesale partner for premium pet products. Located in Electronic City, Bangalore, we provide everything your furry friends need at competitive wholesale prices.",
      // contact: "8390623352",
      // location: "Electronic City, Bangalore",
    },
    {
      icon: "/pa-nobg.png",
      name: "PathwayAtlas",
      text: "Complete study abroad consultancy service guiding students through every step of their international education journey, from applications to visa processing and settlement support.",
      // contact: "6377194210",
      // location: "Pune",
    },
    {
      icon: "/koax-brokers-nobg.png",
      name: "Koax Brokers",
      text: "Professional rental property consultancy helping you find the perfect rental flats tailored to your specific requirements, budget, and lifestyle preferences.",
      // contact: "9272197552",
      // location: "Marathahalli, Bangalore",
    },
  ];

  const features = [
    {
      title: "Technology Solutions",
      text: "Advanced software development and digital marketing services to help businesses thrive in the digital landscape.",
      gradient: "from-blue-500 to-purple-600",
    },
    {
      title: "Pet Care Products",
      text: "Quality wholesale pet products ensuring the health and happiness of your beloved pets with competitive pricing.",
      gradient: "from-green-500 to-teal-600",
    },
    {
      title: "Study Abroad Guidance",
      text: "End-to-end support for international education aspirants, making your study abroad dreams a reality.",
      gradient: "from-orange-500 to-red-600",
    },
    {
      title: "Property Solutions",
      text: "Personalized rental property matching services to help you find your ideal home that fits your specifications.",
      gradient: "from-purple-500 to-pink-600",
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
    <div className="h-full bg-white">
      {/* Navigation */}
      <nav className="bg-white shadow-lg fixed w-full top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <div className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                KOAX
              </div>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                <a
                  href="#home"
                  className="text-gray-900 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors"
                >
                  Home
                </a>
                <a
                  href="#about"
                  className="text-gray-900 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors"
                >
                  About
                </a>
                <a
                  href="#services"
                  className="text-gray-900 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors"
                >
                  Services
                </a>
                <a
                  href="#contact"
                  className="text-gray-900 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors"
                >
                  Contact
                </a>
              </div>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-900 hover:text-blue-600"
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-white shadow-lg">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <a
                href="#home"
                className="block px-3 py-2 text-gray-900 hover:text-blue-600"
              >
                Home
              </a>
              <a
                href="#about"
                className="block px-3 py-2 text-gray-900 hover:text-blue-600"
              >
                About
              </a>
              <a
                href="#services"
                className="block px-3 py-2 text-gray-900 hover:text-blue-600"
              >
                Services
              </a>
              <a
                href="#contact"
                className="block px-3 py-2 text-gray-900 hover:text-blue-600"
              >
                Contact
              </a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section
        id="home"
        className="pt-16 bg-gradient-to-br from-blue-50 via-white to-purple-50"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6">
              KOAX
              <span className="block text-3xl md:text-4xl bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mt-2">
                Multi-Industry Solutions
              </span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
              Innovating across industries with our diverse portfolio of
              subsidiaries. From cutting-edge technology solutions to lifestyle
              services, we deliver excellence in every sector we serve.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all transform hover:scale-105 shadow-lg">
                <Link href={"/#services"}>Explore Our Services</Link>
              </button>
              <button className="px-8 py-4 border-2 border-gray-300 text-gray-700 rounded-lg hover:border-blue-600 hover:text-blue-600 transition-all">
                <Link href={"/#contact"}>Get In Touch</Link>
              </button>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="flex justify-center pb-8">
          <ChevronDown className="animate-bounce text-gray-400" size={32} />
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              About KOAX
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-8"></div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                KOAX is a diversified company operating through multiple
                specialized subsidiaries, each dedicated to excellence in their
                respective fields. We combine innovation, quality service, and
                deep industry expertise to serve our clients across technology,
                pet care, education, and real estate sectors.
              </p>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Our integrated approach ensures comprehensive solutions tailored
                to meet diverse market needs.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {whyChooseUs.map((item, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-br from-gray-50 to-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow border border-gray-100"
                >
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full mr-3"></div>
                    <span className="text-gray-800 font-medium">{item}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section
        id="services"
        className="py-20 bg-gradient-to-br from-gray-50 to-white"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Our Services
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-8"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover our comprehensive range of services across multiple
              industries
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100"
              >
                <div className="p-8 flex flex-row h-full justify-between">
                  <div className="flex items-center mb-6 p-6">
                    <img
                      src={service.icon}
                      height={100}
                      width={100}
                      className={
                        index == 0
                          ? "w-[400px] h-full scale-1.75"
                          : "w-[400px] h-full"
                      }
                    />
                    {/* <h3 className="text-2xl font-bold text-gray-900">
                      {service.name}
                    </h3> */}
                  </div>
                  <div>
                    <p className="text-gray-600 mb-6 text-xl leading-relaxed">
                      {service.text}
                    </p>
                    {/* <div className="space-y-3">
                      <div className="flex items-center text-blue-600">
                        <Phone size={18} className="mr-3" />
                        <span className="font-medium">{service.contact}</span>
                      </div>
                      {service.location && (
                        <div className="flex items-center text-gray-600">
                          <MapPin size={18} className="mr-3" />
                          <span>{service.location}</span>
                        </div>
                      )}
                    </div> */}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Why Choose KOAX
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-8"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center group">
                <div
                  className={`w-20 h-20 mx-auto mb-6 rounded-2xl bg-gradient-to-r ${feature.gradient} flex items-center justify-center transform group-hover:scale-110 transition-transform shadow-lg`}
                >
                  <div className="w-8 h-8 bg-white rounded-lg"></div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">{feature.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        className="py-20 bg-gradient-to-br from-blue-600 to-purple-700 text-white"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Get In Touch</h2>
            <div className="w-24 h-1 bg-white mx-auto mb-8"></div>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Ready to discuss your needs? Contact us today and let's explore
              how we can help you succeed.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/20 transition-all">
              <MapPin size={48} className="mx-auto mb-4 text-blue-200" />
              <h3 className="text-xl font-bold mb-2">Address</h3>
              <p className="text-blue-100">
                Electronic City, Bangalore, Karnataka, India
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/20 transition-all">
              <Phone size={48} className="mx-auto mb-4 text-blue-200" />
              <h3 className="text-xl font-bold mb-2">Phone</h3>
              <p className="text-blue-100">+91 92721 97552</p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/20 transition-all">
              <Mail size={48} className="mx-auto mb-4 text-blue-200" />
              <h3 className="text-xl font-bold mb-2">Email</h3>
              <p className="text-blue-100">info@koax.com</p>
            </div>
          </div>

          {/* <div className="text-center mt-12">
            <button className="px-8 py-4 bg-white text-blue-600 rounded-lg hover:bg-gray-100 transition-all transform hover:scale-105 shadow-lg font-medium">
              Start Your Project Today
            </button>
          </div> */}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-4">
              KOAX
            </div>
            <p className="text-gray-400 mb-8">
              Multi-Industry Solutions for Modern Businesses
            </p>

            <div className="grid md:grid-cols-4 gap-8 mb-8">
              <div>
                <h4 className="font-bold mb-4">Koax Tech</h4>
                <p className="text-gray-400 text-sm">Digital Solutions</p>
              </div>
              <div>
                <h4 className="font-bold mb-4">Pet Wala</h4>
                <p className="text-gray-400 text-sm">Pet Products</p>
              </div>
              <div>
                <h4 className="font-bold mb-4">PathwayAtlas</h4>
                <p className="text-gray-400 text-sm">Study Abroad</p>
              </div>
              <div>
                <h4 className="font-bold mb-4">Koax Brokers</h4>
                <p className="text-gray-400 text-sm">Property Solutions</p>
              </div>
            </div>

            <div className="border-t border-gray-800 pt-8">
              <p className="text-gray-400 text-sm">
                © 2025 KOAX. All rights reserved. | Innovating across industries
                with excellence.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default KoaxLandingPage;
