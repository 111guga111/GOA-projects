function Contact() {
  return (
    <div className="min-h-screen">
      <div className="flex justify-center mt-16 ">
        <div className="bg-gray-900 border border-gray-700 rounded-2xl shadow-xl p-10 w-4/5 max-w-2xl flex flex-col gap-6">
          <h1 className="text-4xl font-bold text-white text-center mb-4">Contact Us</h1>

          <p className="text-gray-300 text-lg text-center">
            Have a question or feedback? Fill out the form below and we will get back to you as soon as possible.
          </p>

          <form className="flex flex-col gap-4">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              className="bg-gray-800 text-white px-4 py-3 rounded-xl border border-gray-700 focus:outline-none focus:border-blue-500"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              className="bg-gray-800 text-white px-4 py-3 rounded-xl border border-gray-700 focus:outline-none focus:border-blue-500"
              required
            />
            <textarea
              name="message"
              placeholder="Your Message"
              rows="5"
              className="bg-gray-800 text-white px-4 py-3 rounded-xl border border-gray-700 focus:outline-none focus:border-blue-500 resize-none"
              required
            />
            <button
              type="submit"
              className="bg-blue-700 text-white px-6 py-3 rounded-full hover:bg-blue-600 transition-colors duration-200 mt-2"
            >
              Send Message
            </button>
          </form>

          <div className="text-gray-400 text-center text-sm mt-4">
            Or reach us at: <span className="text-blue-400">support@autogu.com</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
