import React from "react";
import Button from "./components/Button";
import { useRouter } from "next/router";

export default function Home() {
  const router = useRouter();

  return (
    <section className="bg-gray-20 h-full max-w-[1550px] p-5 flex flex-col justify-center mx-auto">
      <div className="flex flex-col items-center justify-between gap-5 my-auto font-montserrat h-3/4 lg:flex-row lg:justify-center">
        <div className="flex flex-col items-center justify-center max-w-3xl gap-5 text-center basis-1/2">
          <div className="flex flex-col gap-2">
            <h2
              className="relative text-5xl font-bold after:content-['']
               after:h-[105%] after:absolute after:top-0 after:p-1 after:z-10 after:-right-6 after:w-[110%] after:transition-all after:bg-gray-20 bg-transparent after:animate-type-animation after:fill-mode-forwards 
               before:z-20
            before:content-[''] before:bg-gray-500 before:w-2 before:h-[105%] before:absolute before:-right-6 before:animate-type-bar-animation before:fill-mode-forwards"
            >
              Projects Hub
            </h2>
            <p className="text-xl">Revolutionary projects</p>
          </div>
          <p className="text-base font-bold text-left font-dmsans">
            We make price worthy projects. Lorem ipsum dolor, sit amet
            consectetur adipisicing elit. Vel, tempora dicta. Corporis non
            ratione repelle
          </p>
          <Button
            handleClick={(
              event: React.MouseEvent<HTMLButtonElement, MouseEvent>
            ) => router.push("/plans")}
            type="button"
            text="Buy Now!"
          />
        </div>
        <div className="h-1/2 md:h-[65%] lg:h-3/4 xl:h-[90%] basis-1/2 flex justify-center items-center">
          <img
            src="/images/HomePageGraphic.png"
            alt="home"
            className="h-full bg-gray-20"
          />
        </div>
      </div>
    </section>
  );
}
