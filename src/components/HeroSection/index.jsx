'use client'
import Image from "next/image";
import { FaStar } from "react-icons/fa";

const HeroSection = () => {
  return (
    <section className="container mx-auto px-4 py-12">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        {/* Left Side - Text Content */}
        <div>
          <h1 className="text-4xl md:text-5xl font-bold text-blue">
            Your Path to a <span className="text-pink">Healthier Mind</span> Starts Here
          </h1>
          <p className="text-gray-600 mt-4">
            Unlock the power of mindfulness with MentalSpace. Guided meditations and
            exercises for a happier, more peaceful life.
          </p>
          <button className="mt-6 bg-blue text-white px-6 py-3 rounded-md">
            Get Started for Free
          </button>

          {/* User Ratings */}
          <div className="mt-6 flex items-center space-x-4">
            {/* User Avatars */}
            <div className="flex -space-x-2">
              <Image src="/assets/user1.png" alt="user" width={40} height={40} className="rounded-full" />
              <Image src="/assets/user2.png" alt="user" width={40} height={40} className="rounded-full" />
              <Image src="/assets/user3.png" alt="user" width={40} height={40} className="rounded-full" />
            </div>
            {/* Rating */}
            <div className="flex items-center text-blue">
              <FaStar className="text-yellow-400" />
              <span className="ml-1 text-lg font-semibold">4.8</span>
              <p className="ml-2 text-gray-600">10M+ users transforming their lives with mindfulness</p>
            </div>
          </div>
        </div>

        {/* Right Side - Image */}
        <div className="relative">
          <Image
            src="/assets/hero.png"
            alt="Meditation"
            width={500}
            height={500}
            className="rounded-lg"
          />
        
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
