import { useRouter } from "next/router";
import Button from "./components/Button";
import InputBox from "./components/InputBox";
import { ChangeEvent, useEffect, useState } from "react";

export default function Login() {
  const router = useRouter();

  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const handleLogin = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    router.push("/dashboard");
  };

  return (
    <section className="bg-gray-20 max-w-[1550px] flex justify-center items-center h-full mx-auto">
      <form
        action="submit"
        className="w-3/4 border-2 border-gray-500 rounded"
        onSubmit={handleLogin}
      >
        <div className="flex flex-col gap-4 p-3 bg-white rounded">
          <h2 className="text-3xl">Login</h2>
          <InputBox
            name="Username"
            type="text"
            value={username}
            onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
              setUsername(event.target.value);
            }}
          />
          <InputBox
            name="Password"
            type="password"
            value={password}
            onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
              setPassword(event.target.value)
            }
          />
          <Button text="Login" type="submit" />
        </div>
      </form>
    </section>
  );
}
