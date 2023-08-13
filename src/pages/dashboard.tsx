import { useAuth } from "@/hooks/useAuth";
import { useRouter } from "next/router";
import Loader from "./components/Loader";
import { useEffect, useState } from "react";

export default function Dashboard() {
  const router = useRouter();
  const isAuth = useAuth();

  useEffect(() => {
    console.log(isAuth);
  }, [isAuth]);

  if (isAuth === null) {
    return <Loader />;
  }

  if (!isAuth) {
    console.log("false ran");
    router.push("/login");
    return <Loader />;
  }

  return (
    <section className="bg-gray-20 max-w-[1550px] flex flex-col justify-center items-center h-full mx-auto">
      <div className="self-start w-full h-full p-6 mt-10 bg-orange-500 md:p-5">
        <h2 className="text-2xl">Orders</h2>
        <div className="bg-white rounded h-[95%]"></div>
      </div>
    </section>
  );
}
