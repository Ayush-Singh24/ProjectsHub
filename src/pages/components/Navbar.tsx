import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";

export default function Navbar() {
  const router = useRouter();
  const bottomScrollPosition: ScrollToOptions = {
    top: 100,
    left: 0,
    behavior: "smooth",
  };

  const NavSpanStyle: string =
    "relative font-montserrat font-bold text-sm before:content-[''] before:h-1 before:absolute before:top-full before:left-0 before:w-0 before:-z-10 before:transition-all before:bg-gray-500 before:rounded hover:before:w-full cursor-pointer pb-1 rounded";

  const NavLinkActiveState: string = "bg-primary-300 hover:bg-primary-500";

  const goToBottom = () => {
    console.log("contact us button clicked!");
    window.scrollTo(bottomScrollPosition);
  };

  return (
    <div className="max-w-[1550px] w-full mx-auto">
      <div className="p-3 md:p-2 max-w-[1550px] w-full fixed bg-gray-100 flex justify-between items-center text-gray-500">
        <h2 className="font-montserrat font-bold text-sm">Projects hub</h2>
        <div className="">
          <div className="md:hidden">
            <input type="checkbox" className="hidden" name="nav-toggle" />
            <label
              htmlFor="nav-toggle"
              className="h-10 w-10 rounded-[50%] flex justify-center items-center hover:bg-primary-300"
            >
              <span className="relative w-6 h-[3px] rounded bg-gray-500 inline-block transition-all after:rounded after:w-6 after:h-[3px] after:bg-gray-500 after:inline-block after:transition-all before:w-6 before:h-[3px] before:bg-gray-500 before:inline-block before:transition-all after:content-[''] after:absolute before:content-[''] before:rounded before:absolute after:left-0 before:left-0 after:-top-2 before:top-2 ">
                &nbsp;
              </span>
            </label>
          </div>
          <ul className="hidden md:flex gap-5">
            <li
              className={`p-2 rounded transition-all ${
                router.pathname === "/" ? NavLinkActiveState : ""
              }`}
            >
              <Link className={NavSpanStyle} href="/">
                Home
              </Link>
            </li>
            <li
              className={`p-2 rounded transition-all ${
                router.pathname === "/plans" ? NavLinkActiveState : ""
              }`}
            >
              <Link className={NavSpanStyle} href="/plans">
                Plans
              </Link>
            </li>
            <li
              className={`p-2 rounded transition-all ${
                router.pathname === "/login" ? NavLinkActiveState : ""
              }`}
            >
              <Link className={NavSpanStyle} href="/login">
                Log In
              </Link>
            </li>
            <li
              className={`p-2 rounded transition-all ${
                router.pathname === "/signup" ? NavLinkActiveState : ""
              }`}
            >
              <Link className={NavSpanStyle} href="/signup">
                Sign Up
              </Link>
            </li>
            <li className="p-2 rounded transition-all">
              <span className={NavSpanStyle} onClick={goToBottom}>
                Contact Us
              </span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
