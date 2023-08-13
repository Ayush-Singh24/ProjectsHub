import { useRouter } from "next/router";
import Button from "../components/Button";
import InputBox from "../components/InputBox";
import { ChangeEvent, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { openAlert } from "@/redux/reducers/alert";
import { AlertStatus, ResponseStatus } from "@/utils/constants";
import { Service } from "@/service/service";
import Loader from "../components/Loader";
import { useAuth } from "@/hooks/useAuth";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import { setIsAuth, setIsLoading } from "@/redux/reducers/auth";

export default function Login() {
  const router = useRouter();
  const dispatch = useDispatch();

  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const { isAuth, isLoading } = useSelector((state: RootState) => state.auth);
  useAuth();

  const handleLogin = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!username || !password) {
      dispatch(
        openAlert({
          status: AlertStatus.Error,
          message: "Enter all credentials",
        })
      );
      return;
    } else {
      dispatch(setIsLoading(true));
      const response = await Service.login({ username, password });
      if (response.status === ResponseStatus.Ok) {
        dispatch(
          openAlert({ status: AlertStatus.Success, message: response.message })
        );
        dispatch(setIsAuth(true));
        router.push("/dashboard");
        dispatch(setIsLoading(false));
      } else {
        dispatch(setIsLoading(false));
        dispatch(
          openAlert({ status: AlertStatus.Error, message: response.message })
        );
      }
    }
  };

  // if (isAuth === null || isLoading) {
  //   return <Loader />;
  // }

  if (isAuth) {
    router.push("/dashboard");
    return <Loader />;
  }

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
        <div className="flex flex-col justify-center w-full h-full gap-8 p-8 bg-white rounded md:p-4 lg:p-5 md:rounded-none md:basis-1/2 md:text-base md:justify-evenly lg:text-lg md:h-auto md:w-auto">
          <img
            src="images/backbutton.png"
            alt="backbutton"
            className="absolute w-20 h-20 top-2 left-2 md:hidden noSelect"
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
