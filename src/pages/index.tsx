import Button from "./components/Button";

export default function Home() {
  return (
    <section className="bg-gray-20 h-full max-w-[1550px] p-5 flex flex-col justify-center mx-auto">
      <div>
        <h2 className="font-montserrat font-bold text-sm">Projects hub</h2>
      </div>
      <div className="font-montserrat flex flex-col gap-3 justify-center items-center h-3/4 my-auto lg:flex-row lg:justify-between">
        <div className="flex flex-col gap-5 text-center max-w-3xl">
          <div className="flex flex-col gap-2">
            <h2 className="text-5xl font-bold">Projects Hub</h2>
            <p className="text-xl">Revolutionary projects</p>
          </div>
          <p className="text-base font-dmsans font-bold mb-5 text-left">
            We make price worthy projects. Lorem ipsum dolor, sit amet
            consectetur adipisicing elit. Vel, tempora dicta. Corporis non
            ratione repelle
          </p>
          <Button action="ourplans" />
        </div>
        <img
          src="/images/HomePageGraphic.png"
          alt="home"
          className="bg-gray-20 h-1/2 md:h-[1/2] lg:h-3/4 xl:h-[90%]"
        />
      </div>
    </section>
  );
}
