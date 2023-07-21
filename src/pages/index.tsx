import React from "react";
import Button from "./components/Button";
import { useRouter } from "next/router";

export default function Home() {
  const router = useRouter();

  return (
    <section className="bg-gray-20 h-full max-w-[1550px] p-5 flex flex-col justify-center mx-auto">
      <div className="font-montserrat flex flex-col gap-5 justify-between items-center h-3/4 my-auto lg:flex-row lg:justify-center">
        <div className="flex flex-col gap-5 text-center justify-center items-center max-w-3xl basis-1/2">
          <div className="flex flex-col gap-2">
            <h2 className="text-5xl font-bold">Projects Hub</h2>
            <p className="text-xl">Revolutionary projects</p>
          </div>
          <p className="text-base font-dmsans font-bold text-left">
            We make price worthy projects. Lorem ipsum dolor, sit amet
            consectetur adipisicing elit. Vel, tempora dicta. Corporis non
            ratione repelle
          </p>
          <Button
            handleClick={(
              event: React.MouseEvent<HTMLButtonElement, MouseEvent>
            ) => router.push("/plans")}
            buttonType="button"
            text="Buy Now!"
          />
        </div>
        <div className="h-1/2 md:h-[65%] lg:h-3/4 xl:h-[90%] basis-1/2 flex justify-center items-center">
          <img
            src="/images/HomePageGraphic.png"
            alt="home"
            className="bg-gray-20 h-full"
          />
        </div>
      </div>
    </section>
  );
}
