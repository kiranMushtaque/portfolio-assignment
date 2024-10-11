import React from "react";

const Footer = () => {
  return (
    <div className="bg-gray-800 text-white p-4 text-center">
      <p>© 2024 Kiran. All rights reserved.</p>
      <div>
        <a
          href="https://facebook.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Facebook
        </a>{" "}
        |
        <a
          href="https://linkedin.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          LinkedIn
        </a>{" "}
        |
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
          Twitter
        </a>
      </div>
      <p>
        Contact:{" "}
        <a href="mailto:your-email@example.com" className="text-white">
          your-email@example.com
        </a>
      </p>
      <div>
        <a href="/terms" className="text-gray-400">
          Terms of Service
        </a>{" "}
        |
        <a href="/privacy" className="text-gray-400">
          Privacy Policy
        </a>{" "}
        |
        <a href="/about" className="text-gray-400">
          About Us
        </a>
      </div>
    </div>
  );
};

export default Footer;
