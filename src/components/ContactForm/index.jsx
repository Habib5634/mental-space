'use client'
import { useState } from "react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    firstName: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data:", formData);
  };

  return (
    <section className="flex flex-col items-center py-16 px-6">
      <button className="bg-blue text-pink px-4 py-1 rounded-md">Contact Us</button>
      <h2 className="text-3xl font-bold mt-4">We're Here to Help</h2>
      <p className="text-gray-500 mt-2">
        Reach out to our support team for any questions or inquiries.
      </p>

      <form onSubmit={handleSubmit} className="mt-6 w-full max-w-3xl">
        <div className="mb-4">
          <label className="block font-semibold">First Name*</label>
          <input
            type="text"
            name="firstName"
            placeholder="Your name"
            value={formData.firstName}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-blue rounded-md mt-1"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block font-semibold">Email*</label>
          <input
            type="email"
            name="email"
            placeholder="Your email address"
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-blue rounded-md mt-1"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block font-semibold">Subject*</label>
          <input
            type="text"
            name="subject"
            placeholder="Write your subject"
            value={formData.subject}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-blue rounded-md mt-1"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block font-semibold">Write Message*</label>
          <textarea
            name="message"
            placeholder="Write your message here"
            value={formData.message}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-blue rounded-md mt-1 h-24"
            required
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue text-pink py-2 rounded-md hover:bg-gray-800"
        >
          Send Message
        </button>
      </form>
    </section>
  );
}
