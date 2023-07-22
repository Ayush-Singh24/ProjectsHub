import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";

export default function Navbar() {
  const router = useRouter();

  const [showNav, setShowNav] = useState<boolean>(false);

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

  const handleNav = (event: React.ChangeEvent<HTMLInputElement>) => {
    setShowNav(event.target.checked);
  };

  return (
    <div className="max-w-[1550px] w-full mx-auto">
      <div className="p-2 md:p-2 max-w-[1550px] w-full fixed bg-gray-100 flex justify-between items-center text-gray-500">
        <h2 className="font-montserrat font-bold text-sm">Projects hub</h2>
        <div className="relative z-[2000]">
          <div className="md:hidden">
            <input
              type="checkbox"
              className="hidden"
              name="nav-toggle"
              id="nav-toggle"
              checked={showNav}
              onChange={handleNav}
            />
            <label
              htmlFor="nav-toggle"
              className={`h-10 w-10 rounded-[50%] flex justify-center items-center transition-all hover:bg-primary-300 ${
                showNav ? "bg-primary-500" : ""
              }`}
            >
              <span
                className={`relative w-6 h-[3px] rounded bg-gray-500 inline-block transition-all after:rounded after:w-6 after:h-[3px] after:bg-gray-500 after:inline-block after:transition-all before:w-6 before:h-[3px] before:bg-gray-500 before:inline-block before:transition-all after:content-[''] after:absolute before:content-[''] before:rounded before:absolute after:left-0 before:left-0 after:-top-2 before:top-2 ${
                  showNav
                    ? "bg-transparent after:translate-y-2 after:rotate-[-135deg] before:-translate-y-2 before:rotate-[135deg]"
                    : ""
                }`}
              >
                &nbsp;
              </span>
            </label>
          </div>
          <ul
            className={`fixed h-screen z-[2000] flex flex-col gap-2 transition-all md:flex md:gap-5 -right-[300px] top-[8.2%] ${
              showNav ? "bg-gray-100 right-[0px] w-1/2" : ""
            }`}
          >
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
