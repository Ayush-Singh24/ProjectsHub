import { useAuth } from "@/hooks/useAuth";

export default function Plans() {
  useAuth();
  return (
    <section className="h-full max-w-[1550px] mx-auto bg-gray-20 p-5 flex flex-col justify-center items-center">
      <div className="flex flex-col justify-center h-full gap-[5%] w-full mt-10">
        <div className="bg-orange-500 rounded-3xl h-1/2">
          <div className="rounded-t-3xl h-1/2 bg-lime-500"></div>
          <div className="flex flex-col gap-2 p-5 h-1/2">
            <h2 className="text-xl font-bold">Heading</h2>
            <span className="">
              My name is ayush singh and i m the best one outthere
            </span>
          </div>
        </div>
        <div className="bg-green-500 h-1/2 rounded-3xl">
          <div className="rounded-t-3xl h-1/2 bg-lime-500"></div>
          <div className="flex flex-col gap-2 p-5 h-1/2">
            <h2 className="text-xl font-bold">Heading</h2>
            <span className="">
              My name is ayush singh and i m the best one outthere
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
