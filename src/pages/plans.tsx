import { useAuth } from "@/hooks/useAuth";

export default function Plans() {
  useAuth();
  return (
    <section className="h-full max-w-[1550px] mx-auto bg-gray-20 p-5 flex flex-col justify-center items-center">
      <div className="flex flex-col justify-center h-3/4 gap-[10%] w-full">
        <div className="bg-orange-500 h-[50%]">hello</div>
        <div className="bg-green-500 h-[50%]">hello</div>
      </div>
    </section>
  );
}
