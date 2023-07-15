import React from "react";
import logo from "../assets/NavBar/logo2.svg";
import profile_icon from "../assets/NavBar/profile_icon.png";
import { useState } from "react";
import { MdOutlineDarkMode, MdOutlineWbSunny } from "react-icons/md";
import { CgMenuRightAlt } from "react-icons/cg";
import { RiCloseLine } from "react-icons/ri";
import { FiBell } from "react-icons/fi";
import { CgLogOut } from "react-icons/cg";

import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";

const Logo = () => {
  return (
    <div className="dark:bg-myyellowlight-dark dark:text-myblack-dark dark:border-myblack-darklight cursor-default items-center flex flex-row px-2 py-2 lg:px-2 lg:py-[6px] xl:px-4 xl:py-[6px] bg-myyellow font-poppins font-extrabold text-myblack lg:text-20 xl:text-22 tracking-[0.1em] gap-2.5 rounded-xl border-[3px] border-myblack duration-300 w-full">
      <img
        src={logo}
        className=" w-[20px] h-[20px] lg:w-[20px] lg:h-[20px] xl:w-[20px] xl:h-[20px]"
      ></img>
      <p className="px-3">HexaVerify</p>
    </div>
  );
};

const Sections = (props) => {
  const [active, setActive] = useState("");

  function handleScrollToHeroSection() {
    window.scrollTo({ top: 0, behavior: "smooth" });
    setActive("hero");
  }

  function handleScrollToExperience() {
    props.passScrollState("experienceRef");
    setActive("experience");
  }

  function handleScrollToSkills() {
    props.passScrollState("skillsRef");
    setActive("skills");
  }

  function handleScrollToProjects() {
    props.passScrollState("projectsRef");
    setActive("projects");
  }
  return (
    <div className="hidden md:flex flex-row space-between  lg:gap-3 xl:gap-5 2xl:gap-10 mx-3 xl:mx-5 xl:px-8 lg:text-18 rounded-xl">
      <Link to="/">
        <button
          className={
            "p-[10px] hover:text-myred hover:transition duration-300 ease-in-out " +
            (active == "hero" ? " text-myred" : "")
          }
          onClick={handleScrollToHeroSection}
        >
          Home
        </button>
      </Link>
      <Link to="/employee">
        <button
          className={
            "p-[10px] hover:text-myred hover:transition duration-300 ease-in-out " +
            (active == "experience" ? " text-myred" : "")
          }
          onClick={handleScrollToExperience}
        >
          Employee
        </button>
      </Link>
      <Link to="/hr">
        <button
          className={
            "p-[10px] hover:text-myred hover:transition duration-300 ease-in-out " +
            (active == "skills" ? " text-myred" : "")
          }
          onClick={handleScrollToSkills}
        >
          HR
        </button>
      </Link>
      <Link to="/vendor">
        <button
          className={
            "p-[10px] hover:text-myred hover:transition duration-300 ease-in-out " +
            (active == "projects" ? " text-myred" : "")
          }
        >
          Vendor
        </button>
      </Link>

      <Link to="/manager">
        <button
          className={
            "p-[10px] hover:text-myred hover:transition duration-300 ease-in-out " +
            (active == "projects" ? " text-myred" : "")
          }
        >
          Manager
        </button>
      </Link>
      {/* </Link> */}
    </div>
  );
};

// const Theme = () => {
//   const [toggleTheme, setToggleTheme] = useState(true);
//   let bodyElement = document.body;

//   const handleToggleTheme = () => {
//     setToggleTheme(!toggleTheme); // switch ICON - Sun or Moon
//     bodyElement.classList.toggle("dark"); // add class for body named "dark"
//   };
//   return (
//     <>
//       <button
//         onClick={handleToggleTheme}
//         className="text-24 hover:bg-slate-200 p-2 rounded-xl transition duration-300 ease-in-out dark:hover:bg-slate-700"
//       >
//         {toggleTheme ? <MdOutlineWbSunny /> : <MdOutlineDarkMode />}
//       </button>
//     </>
//   );
// };

const ContactButton = (props) => {
  // function handleScrollToContact() {
  //   props.passScrollState("contactRef");
  // }
  return (
    <div
      // className=" hidden md:block dark:border-myblack-darklight bg-mywhite border-myblack dark:bg-mybg-darklight px-5 py-2 rounded-xl border-[3px] text-[14px] lg:text-16 hover:transition delay-75 ease-in-out duration-300 font-semibold"
      className=" dark:text-myblack-dark dark:border-myblack-darklight cursor-default items-center flex flex-row px-2 py-2 lg:px-2 lg:py-[6px] xl:px-4 xl:py-[6px]  font-poppins font-extrabold text-mywhite lg:text-20 xl:text-22 tracking-[0.1em] gap-2.5 rounded-xl"
      // onClick={handleScrollToContact}
    >
      <img
        src={profile_icon}
        className=" w-[25px] h-[25px] lg:w-[30px] lg:h-[30px] xl:w-[30px] xl:h-[30px]"
      ></img>
      <p className="text-mywhite">User</p>
    </div>
  );
};

const LogoutButton = (props) => {
  function handleOnClick() {
    props.passHide(true);
  }
  return (
    <div>
      <Link to="/login">
        <button
          // className=" hidden md:block dark:border-myblack-darklight bg-mywhite border-myblack dark:bg-mybg-darklight px-5 py-2 rounded-xl border-[3px] text-[14px] lg:text-16 hover:transition delay-75 ease-in-out duration-300 font-semibold"
          className="bg-red-500 dark:text-myblack-dark dark:border-myblack-darklight items-center flex flex-row px-2 py-2 lg:px-2 lg:py-[6px] xl:px-4 xl:py-[6px]  font-poppins text-mywhite lg:text-18 xl:text-18 tracking-[0.1em] gap-2.5 rounded-xl"
          onClick={handleOnClick}
        >
          <CgLogOut className="text-mywhite" />
          <p className="text-mywhite">Logout</p>
        </button>
      </Link>
    </div>
  );
};

const DropDown = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  function handleScrollToHeroSection() {
    window.scrollTo({ top: 0, behavior: "smooth" });
    setIsOpen(!isOpen);
  }

  function handleScrollToExperience() {
    props.passScrollState("experienceRef");
    setIsOpen(!isOpen);
  }

  function handleScrollToSkills() {
    props.passScrollState("skillsRef");
    setIsOpen(!isOpen);
  }

  function handleScrollToProjects() {
    props.passScrollState("projectsRef");
    setIsOpen(!isOpen);
  }

  function handleScrollToContact() {
    props.passScrollState("contactRef");
    setIsOpen(!isOpen);
  }

  return (
    <>
      <button
        className={
          "text-24 md:hidden block hover:bg-slate-200 p-2 rounded-xl transition duration-300 ease-in-out dark:hover:bg-slate-700 z-50" +
          (isOpen && " border-[3px]")
        }
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <RiCloseLine /> : <CgMenuRightAlt />}
      </button>
      <div
        className={
          "md:hidden fixed w-3/4 top-0 right-0 items-center justify-end text-center flex bg-mywhite dark:bg-mybg-dark rounded-l-3xl drop-shadow-xl" +
          (isOpen ? " block" : " hidden")
        }
      >
        {isOpen && (
          <div className="flex flex-col items-center justify-between h-screen w-full py-[100px]">
            <div className="flex flex-col gap-5 min-w-fit w-1/2">
              <button
                className="dark:border-mybg-darklight dark:bg-mybg-darklight px-3 py-2 border-[3px] rounded-xl"
                onClick={handleScrollToHeroSection}
              >
                Home
              </button>
              <button
                className="dark:border-mybg-darklight dark:bg-mybg-darklight px-3 py-2 border-[3px] rounded-xl"
                onClick={handleScrollToExperience}
              >
                Experience
              </button>
              <button
                className="dark:border-mybg-darklight dark:bg-mybg-darklight px-3 py-2 border-[3px] rounded-xl"
                onClick={handleScrollToSkills}
              >
                Skills
              </button>
              <button
                className="dark:border-mybg-darklight dark:bg-mybg-darklight px-3 py-2 border-[3px] rounded-xl"
                onClick={handleScrollToProjects}
              >
                Projects
              </button>
            </div>
            <button
              className="dark:border-myblack-darklight bg-mywhite dark:bg-mybg-darklight px-5 py-2 rounded-xl border-[3px] text-[14px] lg:text-16 hover:transition delay-75 ease-in-out duration-300 font-semibold"
              onClick={handleScrollToContact}
            >
              <p className="bg-clip-text text-transparent bg-gradient-to-r from-myblue dark:from-myyellow-dark dark:to-myred to-myred">
                CONTACT
              </p>
            </button>
          </div>
        )}
      </div>
    </>
  );
};

const NavBar = (props) => {
  const [hide, setHide] = useState(false);
  // const logoutOnClick = () => {
  //   setHide(true);
  //   console.log("abc", hide);
  // };
  console.log(hide);
  return (
    <div className="sticky flex flex-row h-[100px] w-full bg-mywhite/80 dark:bg-mybg-dark/80 top-0 m-0 items-center gap-10 justify-between z-50 backdrop-blur-lg font-medium">
      <div className="ml-5 sm:ml-[50px] lg:ml-[90px] xl:ml-32 2xl:ml-40">
        <Logo />
      </div>
      <div>
        <Sections />
      </div>
      <div className="flex flex-row gap-3 xl:gap-3 items-center mr-5 sm:mr-[50px] lg:mr-[90px] xl:mr-32 2xl:mr-40">
        {/* <Theme /> */}

        {/* {!hide && <LogoutButton onClick={logoutOnClick} />} */}
        {!hide && <LogoutButton passHide={setHide} />}

        <FiBell className="text-24 text-mywhite" />
        <ContactButton />
        <DropDown />
      </div>
    </div>
  );
};

export default NavBar;
