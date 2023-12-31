import { useRouter } from "next/router";
import { useState } from "react";
import NavItem from "./NavItem";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import { Service } from "@/service/service";
import { AlertStatus, ResponseStatus } from "@/utils/constants";
import { useDispatch } from "react-redux";
import { openAlert } from "@/redux/reducers/alert";
import { setIsAuth, setIsLoading } from "@/redux/reducers/auth";
import Loader from "./Loader";

export default function Navbar() {
  const router = useRouter();
  const dispatch = useDispatch();

  const [showNav, setShowNav] = useState<boolean>(false);
  const { isAuth, isLoading } = useSelector((state: RootState) => state.auth);

  const bottomScrollPosition: ScrollToOptions = {
    top: 100,
    left: 0,
    behavior: "smooth",
  };

  const NavSpanStyle: string =
    "relative block font-montserrat font-bold text-sm w-full h-full md:w-fit md:h-fit before:content-[''] before:h-1 before:absolute before:top-full before:left-0 before:w-0 before:z-10 before:transition-all before:bg-gray-500 before:rounded md:hover:before:w-full cursor-pointer rounded";

  const goToBottom = () => {
    console.log("contact us button clicked!");
    window.scrollTo(bottomScrollPosition);
  };

  const handleNav = (event: React.ChangeEvent<HTMLInputElement>) => {
    setShowNav(event.target.checked);
  };

  const handleLogout = async () => {
    setShowNav(false);
    dispatch(setIsLoading(true));
    const response = await Service.logout();
    if (response.status === ResponseStatus.Ok) {
      dispatch(
        openAlert({ message: response.message, status: AlertStatus.Success })
      );
      dispatch(setIsLoading(false));
      dispatch(setIsAuth(null));
      router.push("/");
    }
  };

  if (isAuth === null || isLoading) {
    return <Loader />;
  }

  return (
    <div className="max-w-[1550px] w-full mx-auto relative z-50">
      <div className="p-2 md:p-[0.01rem] max-w-[1550px] w-full fixed bg-gray-100 flex justify-between items-center text-gray-500">
        <h2 className="px-2 text-sm font-bold font-montserrat">
          <img src="/images/logo.png" alt="logo" className="h-8" />
        </h2>
        <div className="">
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
              className={`h-10 w-10 rounded-[50%] flex justify-center items-center transition-all ${
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
            className={`fixed h-screen flex flex-col p-2 gap-2 transition-all md:flex md:flex-row z-50 md:static -right-[400px] top-[54px] md:h-full md:w-fit bg-gray-100 w-1/2 ${
              showNav ? " right-[0.0001px]" : ""
            }`}
          >
            <NavItem name="Home" route="/" setShowNav={setShowNav} />
            <NavItem name="Plans" route="/plans" setShowNav={setShowNav} />
            {isAuth ? (
              <>
                <NavItem
                  name="Dashboard"
                  route="/dashboard"
                  setShowNav={setShowNav}
                />
                <li
                  className={`p-2 md:py-2 md:px-3 rounded transition-all noSelect active:bg-primary-500`}
                >
                  <span className={NavSpanStyle} onClick={handleLogout}>
                    Log Out
                  </span>
                </li>
              </>
            ) : (
              <>
                <NavItem name="Log In" route="/login" setShowNav={setShowNav} />
                <NavItem
                  name="Sign Up"
                  route="/signup"
                  setShowNav={setShowNav}
                />
              </>
            )}
            <li className="hidden p-2 transition-all rounded md:list-item">
              <span className={NavSpanStyle} onClick={goToBottom}>
                Contact Us
              </span>
            </li>
            <li className="p-2 md:hidden flex flex-col w-full mt-auto gap-5 mb-[25%] border-t-2 border-gray-500 text-xs">
              <div className="flex flex-col gap-2">
                <span>Contact Us :</span>
                <div className="flex items-center">
                  <img
                    src="icons/whatsapp.png"
                    alt="wp"
                    className="h-4 md:h-5"
                  />
                  <p>: +91 9999999999</p>
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <span className="">About Us :</span>
                <p className="">
                  We are students of SRM-KTR college and wanted to make a cool
                  project as a side hustle
                </p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
