import { useState } from "react";
import Button from "./components/Button";
import InputBox from "./components/InputBox";
import { useRouter } from "next/router";
import { Service } from "@/service/service";
import { useDispatch } from "react-redux";
import { openAlert } from "@/redux/reducers/alert";
import { AlertStatus, ResponseStatus } from "@/utils/constants";
import Loader from "./components/Loader";
import { useAuth } from "@/hooks/useAuth";

export default function SignUp() {
  const router = useRouter();
  const dispatch = useDispatch();

  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const isAuth = useAuth();

  const handleSignUp = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!username || !email || !password || password !== confirmPassword) {
      dispatch(
        openAlert({
          status: AlertStatus.Error,
          message: "Enter vaild credentials",
        })
      );
      return;
    } else {
      setIsLoading(true);
      const response = await Service.signup({ username, email, password });
      if (response.status === ResponseStatus.Created) {
        dispatch(
          openAlert({ status: AlertStatus.Success, message: response.message })
        );
        router.push("/login");
      } else {
        setIsLoading(false);
        dispatch(
          openAlert({ status: AlertStatus.Success, message: response.message })
        );
      }
    }
  };

  if (isAuth === null || isLoading) {
    return <Loader />;
  }

  if (isAuth) {
    router.push("/dashboard");
    return <Loader />;
  }
  return (
    <section className="bg-gray-20 max-w-[1550px] flex justify-center items-center h-full mx-auto">
      <form
        action="submit"
        className="w-full h-full flex justify-center items-center z-[1000] md:z-0 duration-500 rounded shadow-2xl md:w-3/4 md:justify-center md:items-stretch md:h-fit animate-in fade-in"
        onSubmit={handleSignUp}
      >
        <img
          src="images/signupPageGraphic.png"
          alt="image"
          className="hidden object-cover w-1/2 md:block basis-1/2"
        />
        <div className="flex flex-col justify-center w-full h-full gap-8 p-8 bg-white rounded md:gap-6 md:p-4 lg:p-5 md:rounded-none md:basis-1/2 md:text-base md:justify-evenly lg:text-lg md:h-auto md:w-auto">
          <img
            src="images/backbutton.png"
            alt="backbutton"
            className="absolute w-20 h-20 left-2 top-2 md:hidden noSelect"
            onClick={() => router.push("/")}
          />
          <div className="flex flex-col items-center justify-center bg-white">
            <img src="images/user.png" alt="user" className="h-40 md:h-28" />
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
