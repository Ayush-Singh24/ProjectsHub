import { useRouter } from "next/router";
import Button from "./components/Button";

export default function Login() {
  const router = useRouter();

  const handleLogin = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    router.push("/dashboard");
  };

  return (
    <section className="bg-gray-20 max-w-[1550px] flex justify-center items-center h-full mx-auto">
      <form action="submit" className="w-3/4" onSubmit={handleLogin}>
        <div className="flex flex-col gap-4 p-3 bg-white rounded">
          <h2 className="text-3xl">Login</h2>
          <div className="flex flex-col gap-1">
            <h3>Username</h3>
            <input
              type="text"
              className="p-2 rounded focus:outline-none bg-gray-50"
              placeholder="Enter Username"
              required
            />
          </div>
          <div className="flex flex-col gap-1">
            <h3>Password</h3>
            <input
              type="password"
              className="p-2 rounded focus:outline-none bg-gray-50"
              placeholder="Enter password"
              required
            />
          </div>
          <Button text="Login" buttonType="submit" />
        </div>
      </form>
    </section>
  );
}
