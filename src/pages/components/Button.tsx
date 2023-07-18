import { useRouter } from "next/router";

export default function Button({ action }: { action: string }) {
  const router = useRouter();

  const handleAction = () => {
    if (action === "ourplans") {
      router.push("/ourplans");
    }
  };
  return (
    <button
      className="self-center bg-secondary-400 rounded font-medium py-2 px-4 transition-all hover:scale-105 hover:bg-secondary-500 active:scale-100"
      onClick={handleAction}
    >
      Buy Now!
    </button>
  );
}
