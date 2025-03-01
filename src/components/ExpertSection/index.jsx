import { FaInstagram, FaTwitter, FaLinkedin } from "react-icons/fa";

const experts = [
  {
    name: "Dr. Sarah Thompson",
    role: "Clinical Psychologist",
    image: "/assets/exp1.png",
  },
  {
    name: "John Matthews",
    role: "Mindfulness Coach",
    image: "/assets/exp2.png",
  },
  {
    name: "Dr. Emily Garcia",
    role: "Psychiatrist",
    image: "/assets/exp3.png",
  },
  {
    name: "Michael Lee",
    role: "Cognitive Behavioral Therapist",
    image: "/assets/exp4.png",
  },
  {
    name: "David Harris",
    role: "Emotional Well-being Coach",
    image: "/assets/exp5.png",
  },
  {
    name: "Dr. Rachel Wong",
    role: "Licensed Therapist",
    image: "/assets/exp6.png",
  },
  {
    name: "James Clark",
    role: "Meditation Instructor",
    image: "/assets/exp7.png",
  },
  {
    name: "Dr. Olivia Kim",
    role: "Wellness Expert",
    image: "/assets/exp8.png",
  },
];

export default function ExpertsSection() {
  return (
    <section className="py-16 px-6 md:px-12 lg:px-24 text-center">
      {/* Heading */}
      <div className="max-w-2xl mx-auto">
        <span className="bg-blue text-pink text-sm font-medium px-4 py-1 rounded-full">
          Meet Our Experts
        </span>
        <h2 className="text-3xl md:text-4xl font-bold mt-4 text-pink">
          Our Dedicated Team of <br /> Mental Health Professionals
        </h2>
        <p className="text-gray-500 mt-4">
          Our team consists of experienced professionals who are committed to helping you on your mental
          health journey. Get to know the experts behind Headspace.
        </p>
      </div>

      {/* Experts Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-12">
        {experts.map((expert, index) => (
          <div key={index} className="flex flex-col items-center text-center">
            <img
              src={expert.image}
              alt={expert.name}
              className="w-40 h-40 rounded-xl object-cover"
            />
            <h3 className="mt-4 text-lg font-semibold text-black">{expert.name}</h3>
            <p className="text-gray-500 text-sm">{expert.role}</p>
            {/* Social Icons */}
            <div className="flex space-x-3 mt-3 text-gray-400">
              <FaInstagram className="text-xl cursor-pointer hover:text-pink" />
              <FaTwitter className="text-xl cursor-pointer hover:text-pink" />
              <FaLinkedin className="text-xl cursor-pointer hover:text-pink" />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
