export default function Home() {
  return (
    <section className="bg-gray-20 h-screen max-w-[1920px] p-5">
      <div>
        <h2 className="font-montserrat font-bold text-sm mb-20">
          Projects hub
        </h2>
      </div>
      <div className="font-montserrat flex flex-col gap-3 justify-center items-center">
        <div className="flex flex-col gap-1 text-center">
          <h2 className="text-5xl font-bold">Projects Hub</h2>
          <p className="text-xl">Revolutionary projects</p>
        </div>
        <p className="text-base font-dmsans font-bold mb-5">
          We make price worthy projects. Lorem ipsum dolor, sit amet consectetur
          adipisicing elit. Vel, tempora dicta. Corporis non ratione repelle
        </p>
        <button className="bg-secondary-400 rounded font-medium py-2 px-4 transition-all hover:scale-105 hover:bg-secondary-500">
          Buy Now!
        </button>
        <div>
          <img src="/images/HomePageGraphic.png" alt="home" />
        </div>
      </div>
    </section>
  );
}
