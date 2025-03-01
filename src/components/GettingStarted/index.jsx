import React from 'react'

const GettingStarted = () => {
  return (
    <section className="flex flex-col items-center text-center py-16 px-6">
    <div className="flex flex-col md:flex-row bg-gray-100 rounded-lg shadow-lg overflow-hidden max-w-4xl">
      {/* Left Section - Text Content */}
      <div className="md:w-1/2 bg-blue text-white p-8 flex flex-col justify-center items-start">
        <h1 className="text-3xl font-bold leading-tight">
          Start Your Journey to <br /> Better Mental Health
        </h1>
        <p className="mt-3 text-gray-300">
          Join millions of users finding peace and balance with MentalSpace.
        </p>
        <button className="mt-5 bg-pink-500 text-white px-6 py-2 rounded-lg font-semibold hover:bg-pink-600 transition">
          Get Started Now
        </button>

        {/* Rating & Users */}
        <div className="mt-6 flex items-center">
          <span className="text-yellow-400 text-lg font-bold">4.8</span>
          <div className="ml-2 flex">
            ⭐⭐⭐⭐⭐
          </div>
          <p className="ml-3 text-sm text-gray-300">
            10M+ users transforming their lives with mindfulness
          </p>
        </div>
      </div>

      {/* Right Section - Image */}
      <div className="md:w-1/2  flex items-center justify-center">
        <img
          src="/assets/started.png"
          alt="Woman practicing mindfulness"
          className="rounded-lg object-cover w-full h-auto"
        />
      </div>
    </div>

    {/* Logo */}
    <div className=" flex items-center space-x-2">
      <img src="/assets/whiteLogo.png" alt="" />
    </div>
  </section>
  )
}

export default GettingStarted
