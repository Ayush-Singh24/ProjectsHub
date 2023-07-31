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
        className="w-full h-full duration-500 z-[1000] flex justify-center items-center md:z-0 md:h-fit md:items-stretch rounded shadow-2xl md:w-3/4 md:justify-center animate-in fade-in"
        onSubmit={handleLogin}
      >
        <img
          src="images/loginPageGraphic.png"
          alt="image"
          className="hidden object-cover w-1/2 md:block basis-1/2"
        />
        <div className="flex flex-col justify-center w-full h-full gap-8 p-8 bg-white rounded md:p-4 lg:p-5 md:rounded-none md:basis-1/2 md:text-base lg:justify-between lg:text-lg md:h-auto md:w-auto">
          <img
            src="images/backbutton.png"
            alt="backbutton"
            className="absolute w-20 h-20 left-2 top-10 md:hidden noSelect"
            onClick={() => router.push("/")}
          />
          <div className="flex flex-col items-center justify-center bg-white">
            <img src="images/user.png" alt="user" className="h-40 md:h-28" />
            <h2 className="text-3xl">Login</h2>
          </div>
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
