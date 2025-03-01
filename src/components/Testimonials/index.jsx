import { FaStar } from "react-icons/fa";

export default function TestimonialsSection() {
  return (
    <section className="py-16 px-6 md:px-12 lg:px-24">
      {/* Top Section */}
      <div className="bg-blue text-white p-8 rounded-lg flex items-center flex-col lg:flex-row gap-4 ">
        <div>

        <h2 className="text-2xl md:text-3xl font-bold">What Our Users Are Saying</h2>
        <p className="text-gray-400 mt-2">
          Hear from the people who have transformed their mental well-being with Headspace.
        </p>
        </div>

        {/* Stats Section */}
        <div className="mt-6 grid grid-cols-2 gap-4">
          <div className="bg-gray-300 p-4 rounded-lg text-center">
            <p className="text-pink-400 text-2xl font-bold">90%</p>
            <div className="flex justify-center text-yellow-400 mt-1">
              {[...Array(5)].map((_, i) => (
                <FaStar key={i} />
              ))}
            </div>
            <p className="text-gray-400 text-sm mt-1">Users feel calmer</p>
          </div>
          <div className="bg-gray-300 p-4 rounded-lg text-center">
            <p className="text-pink-400 text-2xl font-bold">4.8/5</p>
            <div className="flex justify-center text-yellow-400 mt-1">
              {[...Array(5)].map((_, i) => (
                <FaStar key={i} />
              ))}
            </div>
            <p className="text-gray-400 text-sm mt-1">Trusted by users</p>
          </div>
        </div>
      </div>

      {/* Testimonial Section */}
      <div className="bg-blue text-white p-8 rounded-lg mt-8 flex flex-col md:flex-row items-center">
        {/* Text Section */}
        <div className="flex-1">
          <div className="flex text-yellow-400">
            {[...Array(5)].map((_, i) => (
              <FaStar key={i} />
            ))}
          </div>
          <p className="text-lg md:text-xl font-semibold mt-3">
            Headspace has completely transformed how I manage my mental health. The meditations
            are easy to follow, and I feel more in control of my stress and anxiety.
          </p>
          <div className="flex items-center mt-4">
            <div className="w-10 h-10 rounded-full bg-gray-300"></div>
            <div className="ml-3">
              <p className="text-pink-400 font-semibold">Sarah Steiner</p>
              <p className="text-gray-400 text-sm">Graphic Designer</p>
            </div>
          </div>
        </div>

        {/* Image Section */}
        <div className="w-full md:w-1/3 mt-6 md:mt-0">
          <img
            src="/assets/testimonial.png"
            alt="Testimonial"
            className="w-full h-full object-cover rounded-lg"
          />
        </div>
      </div>

      {/* Dots & Arrows (Just UI, No Functionality) */}
      <div className="flex justify-center items-center gap-6 mt-6">
        <button className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-300 text-gray-800 hover:bg-gray-400">
          ←
        </button>
        <div className="flex space-x-2">
          <span className="w-3 h-3 rounded-full bg-gray-400"></span>
          <span className="w-3 h-3 rounded-full bg-gray-700"></span>
          <span className="w-3 h-3 rounded-full bg-gray-400"></span>
        </div>
        <button className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-300 text-gray-800 hover:bg-gray-400">
          →
        </button>
      </div>
    </section>
  );
}
