// components/Contact.js
import React, { useState } from "react";
import { Send, Phone, Mail, MapPin } from "lucide-react";

const Contact = ({ darkMode }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus("success");
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });

      // Reset status after 5 seconds
      setTimeout(() => {
        setSubmitStatus(null);
      }, 5000);
    }, 1500);
  };

  return (
    <section
      id="contact"
      className={`py-20 ${darkMode ? "bg-gray-800" : "bg-gray-50"}`}
    >
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Contact Me</h2>
          <div
            className={`h-1 w-20 mx-auto rounded-full ${
              darkMode ? "bg-blue-500" : "bg-blue-600"
            }`}
          ></div>
        </div>

        <div className="flex flex-col md:flex-row gap-8">
          {/* Contact Information */}
          <div className="md:w-1/3">
            <div
              className={`p-6 rounded-xl shadow-lg ${
                darkMode ? "bg-gray-900" : "bg-white"
              }`}
            >
              <h3 className="text-2xl font-bold mb-6">Contact Information</h3>

              <div className="space-y-6">
                <div className="flex items-start">
                  <div
                    className={`p-3 rounded-lg mr-4 ${
                      darkMode
                        ? "bg-blue-900/30 text-blue-400"
                        : "bg-blue-100 text-blue-600"
                    }`}
                  >
                    <Phone size={20} />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold mb-1">Phone</h4>
                    <p
                      className={`${
                        darkMode ? "text-gray-300" : "text-gray-700"
                      }`}
                    >
                      +91 6367097548
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div
                    className={`p-3 rounded-lg mr-4 ${
                      darkMode
                        ? "bg-green-900/30 text-green-400"
                        : "bg-green-100 text-green-600"
                    }`}
                  >
                    <Mail size={20} />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold mb-1">Email</h4>
                    <p
                      className={`${
                        darkMode ? "text-gray-300" : "text-gray-700"
                      }`}
                    >
                      tohid1193407@gmail.com
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div
                    className={`p-3 rounded-lg mr-4 ${
                      darkMode
                        ? "bg-purple-900/30 text-purple-400"
                        : "bg-purple-100 text-purple-600"
                    }`}
                  >
                    <MapPin size={20} />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold mb-1">Location</h4>
                    <p
                      className={`${
                        darkMode ? "text-gray-300" : "text-gray-700"
                      }`}
                    >
                      Udaipur, India
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <h4 className="text-lg font-semibold mb-4">Connect with me</h4>
                <div className="flex space-x-4">
                  <a
                    href="https://github.com/tohidkhan2464"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`p-3 rounded-lg ${
                      darkMode
                        ? "bg-gray-800 hover:bg-gray-700"
                        : "bg-gray-200 hover:bg-gray-300"
                    }`}
                    aria-label="GitHub"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-github"
                    >
                      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path>
                      <path d="M9 18c-4.51 2-5-2-7-2"></path>
                    </svg>
                  </a>
                  <a
                    href="https://www.linkedin.com/in/tohidkhan324/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`p-3 rounded-lg ${
                      darkMode
                        ? "bg-gray-800 hover:bg-gray-700"
                        : "bg-gray-200 hover:bg-gray-300"
                    }`}
                    aria-label="LinkedIn"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-linkedin"
                    >
                      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                      <rect width="4" height="12" x="2" y="9"></rect>
                      <circle cx="4" cy="4" r="2"></circle>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="md:w-2/3">
            <div
              className={`py-3 px-6 rounded-xl shadow-lg ${
                darkMode ? "bg-gray-900" : "bg-white"
              }`}
            >
              <h3 className="text-2xl font-bold mb-6">Send me a message</h3>

              <form onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-2">
                  <div>
                    <label
                      htmlFor="name"
                      className={`block mb-1 ${
                        darkMode ? "text-gray-300" : "text-gray-700"
                      }`}
                    >
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 rounded-lg ${
                        darkMode
                          ? "bg-gray-800 text-white border-gray-700"
                          : "bg-gray-50 text-gray-900 border-gray-200"
                      } border focus:outline-none focus:ring-2 focus:ring-blue-500`}
                      required
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className={`block mb-1 ${
                        darkMode ? "text-gray-300" : "text-gray-700"
                      }`}
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 rounded-lg ${
                        darkMode
                          ? "bg-gray-800 text-white border-gray-700"
                          : "bg-gray-50 text-gray-900 border-gray-200"
                      } border focus:outline-none focus:ring-2 focus:ring-blue-500`}
                      required
                    />
                  </div>
                </div>

                <div className="mb-2">
                  <label
                    htmlFor="subject"
                    className={`block mb-1 ${
                      darkMode ? "text-gray-300" : "text-gray-700"
                    }`}
                  >
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 rounded-lg ${
                      darkMode
                        ? "bg-gray-800 text-white border-gray-700"
                        : "bg-gray-50 text-gray-900 border-gray-200"
                    } border focus:outline-none focus:ring-2 focus:ring-blue-500`}
                    required
                  />
                </div>

                <div className="mb-2">
                  <label
                    htmlFor="message"
                    className={`block mb-1 ${
                      darkMode ? "text-gray-300" : "text-gray-700"
                    }`}
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows="2"
                    value={formData.message}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 rounded-lg ${
                      darkMode
                        ? "bg-gray-800 text-white border-gray-700"
                        : "bg-gray-50 text-gray-900 border-gray-200"
                    } border focus:outline-none focus:ring-2 focus:ring-blue-500`}
                    required
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className={`px-6 py-3 rounded-lg font-medium flex items-center ${
                    isSubmitting ? "opacity-70 cursor-not-allowed" : ""
                  } ${
                    darkMode
                      ? "bg-blue-600 hover:bg-blue-700"
                      : "bg-blue-500 hover:bg-blue-600"
                  } text-white transition-colors`}
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                  {!isSubmitting && <Send className="ml-2" size={18} />}
                </button>

                {submitStatus === "success" && (
                  <div className="mt-4 p-3 bg-green-100 text-green-700 rounded-lg">
                    Thank you for your message! I'll get back to you soon.
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
