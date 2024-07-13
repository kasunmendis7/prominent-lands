import React from "react";

export default function About() {
  return (
    <div className="bg-gray-100 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-700 sm:text-4xl">
            About Us
          </h2>
          <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4">
            Established in 2024, our real estate platform aims to revolutionize
            the way you find and manage your dream home.
          </p>
        </div>

        <div className="mt-10 space-y-10">
          <div className="text-center">
            <h3 className="text-3xl font-bold text-gray-700">Our Vision</h3>
            <p className="mt-4 text-lg text-gray-500">
              Our vision is becoming the leading real estate platform that
              empowers individuals and families to find their perfect home,
              seamlessly and efficiently
            </p>
          </div>
          <div className="text-center">
            <h3 className="text-2xl font-bold text-gray-700">Our Mission</h3>
            <p className="mt-4 text-lg text-gray-500">
              Our mission is to provide a user-friendly and comprehensive platform that connects buyers, sellers, and real estate professionals, enabling them to navigate the real estate market with confidence and ease.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
