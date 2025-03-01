'use client'


const TrustedByMillions = () => {
    return (
      <section className="container mx-auto px-4 py-12 text-center">
        {/* Section Title */}
        <div className="mb-8">
          <p className="text-white bg-blue px-4 py-1 rounded-full inline-block text-sm font-semibold">
            Why Choose Us
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-gray mt-4">
            Trusted by <span className="text-pink">Millions</span>
          </h2>
        </div>
  
        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Users Worldwide */}
          <div>
            <p className="text-3xl font-bold text-pink">10M+</p>
            <h3 className="font-semibold text-gray">Users Worldwide</h3>
            <p className="text-gray-600 mt-2">
              Who are experiencing a mental health transformation.
            </p>
          </div>
  
          {/* Feeling Calmer */}
          <div>
            <p className="text-3xl font-bold text-pink">95%</p>
            <h3 className="font-semibold text-gray">Report Feeling Calmer</h3>
            <p className="text-gray-600 mt-2">
              Our users feel more at peace after using MentalSpace.
            </p>
          </div>
  
          {/* Guided Meditations */}
          <div>
            <p className="text-3xl font-bold text-pink">100+</p>
            <h3 className="font-semibold text-gray">Guided Meditations</h3>
            <p className="text-gray-600 mt-2">
              Access a library of meditations for every need.
            </p>
          </div>
  
          {/* Average Rating */}
          <div>
            <p className="text-3xl font-bold text-pink">4.8/5</p>
            <h3 className="font-semibold text-gray">Average Rating</h3>
            <p className="text-gray-600 mt-2">
              Our community loves MentalSpace. See for yourself!
            </p>
          </div>
        </div>
      </section>
    );
  };
  
  export default TrustedByMillions;
  