export default function MentalHealthFeatures() {
    return (
      <section className="bg-white  py-16 ">
        <div className="text-center px-6 md:px-12 lg:px-24">
          <span className="bg-blue text-pink text-sm font-medium px-4 py-1 rounded-full">
            Key Features
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mt-4">
            Tools to Support Your <br /> Mental Health Journey
          </h2>
          <p className="text-gray-900 mt-4 max-w-2xl mx-auto">
            Our app offers a range of features to help you manage your mental wellness on a daily basis.
          </p>
        </div>
  
        <div className="relative bg-blue text-white flex flex-col md:flex-row items-center justify-center py-16 mt-12 px-6 md:px-12 lg:px-24">
          {/* Left Column */}
          <div className="flex flex-col space-y-8 max-w-sm">
            <div className="flex items-start space-x-4">
              <span className="bg-pink-500 text-white text-lg p-2 rounded-full">✦</span>
              <div>
                <h3 className="text-lg font-semibold ">Personalized Meditation Plans</h3>
                <p className="text-gray-300 text-sm">
                  Custom plans based on your unique needs and personal goals. Whether you're seeking relaxation,
                  focus, or emotional balance, we provide the right meditation for your journey.
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <span className="bg-pink-500 text-white text-lg p-2 rounded-full">✦</span>
              <div>
                <h3 className="text-lg font-semibold">Sleepcasts and Soundscapes</h3>
                <p className="text-gray-300 text-sm">
                  Wind down after a long day with calming sleepcasts and soothing soundscapes. These specially designed
                  audio experiences will help you relax and drift into a deep sleep.
                </p>
              </div>
            </div>
          </div>
  
          {/* Center Mobile Image */}
          <div className="relative my-8 md:mx-12">
            <img
              src="/assets/mobile.png"
              alt="Mental Health App"
              className="w-[280px] sm:w-[320px] drop-shadow-lg"
            />
          </div>
  
          {/* Right Column */}
          <div className="flex flex-col space-y-8 max-w-sm">
            <div className="flex items-start space-x-4">
              <span className="bg-pink-500 text-white text-lg p-2 rounded-full">✦</span>
              <div>
                <h3 className="text-lg font-semibold">On-the-Go Mindfulness</h3>
                <p className="text-gray-300 text-sm">
                  Stay present and grounded no matter where you are with our quick mindfulness exercises. Perfect for
                  taking a break at work, during travel, or in moments of high stress.
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <span className="bg-pink-500 text-white text-lg p-2 rounded-full">✦</span>
              <div>
                <h3 className="text-lg font-semibold">Progress Tracking</h3>
                <p className="text-gray-300 text-sm">
                  Monitor your journey with detailed progress tracking. Keep track of your meditation streaks, goals
                  achieved, and how your mindfulness practices evolve over time.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
  