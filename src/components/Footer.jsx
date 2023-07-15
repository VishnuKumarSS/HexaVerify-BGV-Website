import React from "react";
import { TbMail } from "react-icons/tb";
import { IoDocumentTextOutline } from "react-icons/io5";
import {
  RiLinkedinLine,
  RiInstagramLine,
  RiTwitterLine,
  RiGithubLine,
} from "react-icons/ri";
import logo from "../assets/NavBar/logo2.svg";

const Left = () => {
  return (
    <div
      className="flex flex-col items-center gap-5 tracking-wider md:tracking-widest text-center"
      data-aos="fade-up"
    >
      <button className="dark:bg-mybg-dark dark:border-mywhite-dark dark:shadow-mywhite-dark font-poppins font-extrabold text-xl lg:text-3xl flex gap-4 justify-center items-center lg:px-10 lg:py-5 px-5 py-3 bg-mywhite  rounded-xl duration-300 w-fit border-[3px] border-myblack hover:shadow-myshadow2 shadow-myshadow4 md:shadow-myshadow6 shadow-myblack tracking-wider">
        <img
          src={logo}
          className=" w-[20px] h-[20px] lg:w-[20px] lg:h-[20px] xl:w-[20px] xl:h-[20px]"
        ></img>
        <span>HexaVerify</span>
      </button>
    </div>
  );
};

const Center = () => {
  return (
    <div
      className="flex flex-col gap-5 items-center lg:items-start"
      data-aos="zoom-out"
    >
      <h1 className="font-extrabold text-2xl font-poppins tracking-wider md:tracking-widest text-center">
        Resources
      </h1>
      <div className="flex flex-col font-medium text-lg gap-4 tracking-wider text-gray-300">
        <button className="flex items-center gap-3">Blog</button>
        <button className="flex items-center gap-3">User guides</button>
      </div>
    </div>
  );
};

const Right = () => {
  return (
    <div>
      <span className="footer-title">Subscribe to our Newsletter</span>
      <div className="form-control w-80">
        <label className="label">
          <span className="label-text">Enter your email address</span>
        </label>
        <div className="relative">
          <input
            type="text"
            placeholder="username@site.com"
            className="input input-bordered w-full pr-16"
          />
          <button className="btn btn-primary absolute top-0 right-0 rounded-l-none">
            Subscribe
          </button>
        </div>
      </div>
    </div>
  );
};

const Footer = () => {
  return (
    <div className="flex flex-col gap-[50px] mx-5 sm:mx-[50px] md:mt-[50px] items-center">
      <div
        className="dark:bg-mybg-darklight w-full flex flex-col lg:flex-row bg-myyellowlight items-center font-spacegrotesk gap-[50px] rounded-xl border-[3px] border-myblack justify-between p-8 md:px-[75px] sm:py-[50px]"
        data-aos="zoom-in"
      >
        <Left />
        <div className="flex flex-col sm:flex-row gap-10 sm:gap-[70px] items-center p-5 rounded-xl dark:text-mywhite-dark">
          <Center />
          <Right />
        </div>
      </div>
      <div className=" rounded-t-lg dark:bg-mybg-darklight dark:text-mywhite/60 bg-myyellowlight w-fit p-3 font-spacegrotesk tracking-widest sm:text-[16px] text-[14px]">
        © 2023 HexaVerify
      </div>
    </div>
  );
};

export default Footer;
