import FooterBelow from './footerBelow';

function Footer({ status }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    e.target.submit();
    e.target.reset();
  };

  return (
    <footer>
      <div className="flex flex-col justify-center items-center mt-5 w-full h-[400px] bg-gray-300">
        <h1 className="text-2xl font-bold">Message Us!!!</h1>
        <h2 className="mt-2 text-center text-lg">
          We would love to take criticism to make our website better
        </h2>

        <form
          action="https://formspree.io/f/xblzqzvj"
          method="POST"
          className="flex justify-center items-center mt-5 gap-2 p-2 flex-col sm:flex-row"
          onSubmit={handleSubmit}
        >
          <input
            type="hidden"
            name="email"
            value={status?.account?.Email || "unknown@example.com"}
          />
          <textarea
            name="message"
            placeholder="Your message"
            className="w-[400px] h-[50px] p-2 text-lg bg-white border border-gray-900 rounded transition-all duration-300 resize-none"
            required
          />
          <button
            type="submit"
            className="w-[200px] h-[50px] blButtonStyle"
          >
            Send
          </button>
        </form>

        <p className="mt-5 text-lg font-bold text-black text-center px-4">
          Thank you for helping my crew build a website beyond greatness.
        </p>
      </div>

      <FooterBelow />
    </footer>
  );
}

export default Footer;
