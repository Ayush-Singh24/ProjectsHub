import { useState } from "react";
import Button from "./components/Button";
import InputBox from "./components/InputBox";
import { useRouter } from "next/router";

export default function SignUp() {
  const router = useRouter();

  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");
  const [email, setEmail] = useState<string>("");

  const handleSignUp = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    router.push("/login");
  };

  return (
    <section className="bg-gray-20 max-w-[1550px] flex justify-center items-center h-full mx-auto">
      <form
        action="submit"
        className="w-3/4 rounded shadow-2xl"
        onSubmit={handleSignUp}
      >
        <div className="flex flex-col gap-4 p-3 bg-white rounded">
          <div className="flex flex-col items-center justify-center bg-white">
            <img src="images/user.png" alt="user" className="h-24" />
            <h2 className="text-3xl">Sign Up</h2>
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
            name="Email"
            type="email"
            value={email}
            onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
              setEmail(event.target.value);
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
          <InputBox
            name="Confirm Password"
            type="password"
            value={confirmPassword}
            onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
              setConfirmPassword(event.target.value)
            }
          />
          <Button text="Sign Up" type="submit" />
        </div>
      </form>
    </section>
  );
}
