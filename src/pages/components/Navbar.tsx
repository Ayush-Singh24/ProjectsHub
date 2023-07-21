import { NavLinkActiveState, NavSpanStyle } from "@/utils/styles";
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

  const goToBottom = () => {
    console.log("contact us button clicked!");
    window.scrollTo(bottomScrollPosition);
  };

  return (
    <div className="max-w-[1550px] w-full mx-auto">
      <div className="p-3 md:p-2 max-w-[1550px] w-full fixed bg-gray-50 flex justify-between items-center text-gray-500">
        <h2 className="font-montserrat font-bold text-sm">Projects hub</h2>
        <div className="hidden md:block">
          <ul>
            <li className="flex gap-5">
              <div
                className={`p-2 rounded transition-all ${
                  router.pathname === "/" ? NavLinkActiveState : ""
                }`}
              >
                <Link className={NavSpanStyle} href="/">
                  Home
                </Link>
              </div>
              <div
                className={`p-2 rounded transition-all ${
                  router.pathname === "/plans" ? NavLinkActiveState : ""
                }`}
              >
                <Link className={NavSpanStyle} href="/plans">
                  Plans
                </Link>
              </div>
              <div
                className={`p-2 rounded transition-all ${
                  router.pathname === "/login" ? NavLinkActiveState : ""
                }`}
              >
                <Link className={NavSpanStyle} href="/login">
                  Log In
                </Link>
              </div>
              <div
                className={`p-2 rounded transition-all ${
                  router.pathname === "/signup" ? NavLinkActiveState : ""
                }`}
              >
                <Link className={NavSpanStyle} href="/signup">
                  Sign Up
                </Link>
              </div>
              <div className="p-2 rounded transition-all">
                <span className={NavSpanStyle} onClick={goToBottom}>
                  Contact Us
                </span>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
