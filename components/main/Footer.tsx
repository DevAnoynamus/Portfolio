"use client";

import React from "react";
import { RxGithubLogo, RxInstagramLogo } from "react-icons/rx";
import { FaTelegramPlane } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="w-full py-6 bg-black text-white text-center">
      <div className="flex justify-center gap-8 flex-wrap">
        <a
          href="https://github.com/DevAnoynamus"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 hover:text-gray-300 cursor-pointer"
        >
          <RxGithubLogo size={20} />
          <span className="underline">Github</span>
        </a>
        <a
          href="https://instagram.com/dealer.blood"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 hover:text-gray-300 cursor-pointer"
        >
          <RxInstagramLogo size={20} />
          <span className="underline">Instagram</span>
        </a>
        <a
          href="https://t.me/anoynamus"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 hover:text-gray-300 cursor-pointer"
        >
          <FaTelegramPlane size={20} />
          <span className="underline">Telegram</span>
        </a>
      </div>
      <p className="text-sm text-gray-500 mt-4">
        &copy; Anoynamus. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
