"use client";
import { useRouter } from "next/navigation";
import Image from "next/image";
import React from "react";
import Footer from "./footer/page";

const Page = () => {
  const route = useRouter();

  return (
    <div className="bg-[#F9E795] min-h-screen">
      <nav className="bg-[#F96167] shadow p-4">
        <div className="flex justify-end space-x-28">
          <button
            onClick={() => route.push("/about")}
            className="text-gray-800 font-bold"
          >
            About
          </button>
          <button
            onClick={() => route.push("/contact")} 
            className="text-gray-800 font-bold"
          >
            Contact
          </button>
        </div>
      </nav>
      <div className="flex justify-start items-center mt-20">
        <Image
          src="/picture.jpeg"
          alt="picture"
          width={400}
          height={600}
          className="rounded-lg"
        />
        <span className="text-gray-800 font-bold text-4xl ml-10 underline">
          I'm Kiran
        </span>
      </div>
      <Footer /> 
    </div>
  );
};

export default Page;
