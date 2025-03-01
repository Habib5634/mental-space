export default function Footer() {
    return (
      <footer className="bg-blue text-gray-300 py-10 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Left Section - Logo & Address */}
          <div>
            <div className="flex items-center space-x-2">
              <span className="text-pink-500 text-3xl">✿</span>
              <h2 className="text-2xl font-bold text-white">MentalSpace</h2>
            </div>
            <p className="mt-3 text-sm">
              Your guide to a healthier mind. <br />
              Start meditating today.
            </p>
            <div className="mt-3 flex items-center space-x-2">
              <span>📍</span>
              <p className="text-sm">123 Wellness Street, Peace City, CA</p>
            </div>
          </div>
  
          {/* Resources Section */}
          <div>
            <h3 className="text-white font-semibold">Resources</h3>
            <ul className="mt-3 space-y-2 text-sm">
              <li><a href="#" className="hover:text-pink-500">Mindfulness Exercises</a></li>
              <li><a href="#" className="hover:text-pink-500">Meditation Guide</a></li>
              <li><a href="#" className="hover:text-pink-500">Sleep Guide</a></li>
            </ul>
          </div>
  
          {/* Support Section */}
          <div>
            <h3 className="text-white font-semibold">Support</h3>
            <ul className="mt-3 space-y-2 text-sm">
              <li><a href="#" className="hover:text-pink-500">Contact Us</a></li>
              <li><a href="#" className="hover:text-pink-500">Help Center</a></li>
              <li><a href="#" className="hover:text-pink-500">FAQ</a></li>
            </ul>
          </div>
  
          {/* Legal Section */}
          <div>
            <h3 className="text-white font-semibold">Legal</h3>
            <ul className="mt-3 space-y-2 text-sm">
              <li><a href="#" className="hover:text-pink-500">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-pink-500">Terms of Service</a></li>
              <li><a href="#" className="hover:text-pink-500">Cookie Policy</a></li>
            </ul>
          </div>
        </div>
  
        {/* Copyright Section */}
        <div className="text-center text-sm mt-8 text-gray-500">
          © Typerline. 2020-2024. All rights reserved.
        </div>
      </footer>
    );
  }
  