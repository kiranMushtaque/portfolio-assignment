import React from "react";

const Contact = () => {
  return (
    <div className="bg-red-200 min-h-screen flex flex-col items-center justify-center">
      <h1 className="text-2xl font-bold mb-4">Contact Me</h1>
      
      <form className="space-y-4 mt-4">
        <input
          type="text"
          placeholder="Your Name"
          className="p-2 border rounded w-full"
          required
        />
        <input
          type="email"
          placeholder="Your Email"
          className="p-2 border rounded w-full"
          required
        />
        <textarea
          placeholder="Your Message"
          className="p-2 border rounded w-full"
          rows="4"
          required
        ></textarea>
        <button type="submit" className="bg-blue-500 text-white p-2 rounded">
          Send Message
        </button>
      </form>
      <div className="mt-8">
        <p>Phone: +1234567890</p>
        <p>Email: example@example.com</p>
        <p>
          Follow me on{" "}
          <a
            href="https://linkedin.com"
            target="_blank"
            className="text-blue-600"
          >
            LinkedIn
          </a>
        </p>
      </div>
    </div>
  );
};

export default Contact;
