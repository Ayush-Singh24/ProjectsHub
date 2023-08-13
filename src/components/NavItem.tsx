import { useRouter } from "next/router";
import Link from "next/link";
import { Dispatch, SetStateAction } from "react";

export default function NavItem({
  name,
  route,
  setShowNav,
}: {
  name: string;
  route: string;
  setShowNav: Dispatch<SetStateAction<boolean>>;
}) {
  const router = useRouter();

  const NavSpanStyle: string =
    "relative block font-montserrat font-bold text-sm w-full h-full md:w-fit md:h-fit before:content-[''] before:h-1 before:absolute before:top-full before:left-0 before:w-0 before:z-10 before:transition-all before:bg-gray-500 before:rounded md:hover:before:w-full cursor-pointer rounded";

  const NavLinkActiveState: string = "bg-primary-300 hover:bg-primary-500";

  return (
    <li
      className={`p-2 md:py-2 md:px-3 rounded transition-all noSelect active:bg-primary-500 ${
        router.pathname === route ? NavLinkActiveState : ""
      }`}
    >
      <Link
        className={NavSpanStyle}
        href={route}
        onClick={() => setShowNav(false)}
      >
        {name}
      </Link>
    </li>
  );
}
