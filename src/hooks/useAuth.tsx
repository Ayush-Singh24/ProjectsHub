import { setIsAuth } from "@/redux/reducers/auth";
import { RootState } from "@/redux/store";
import { Service } from "@/service/service";
import { ResponseStatus } from "@/utils/constants";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";

export const useAuth = () => {
  const dispatch = useDispatch();
  const { isAuth } = useSelector((state: RootState) => state.auth);

  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;
    if (!isAuth) {
      Service.verify(signal).then((response) => {
        if (response.status === ResponseStatus.Ok) {
          dispatch(setIsAuth(true));
        } else {
          dispatch(setIsAuth(false));
        }
      });
    }
  }, []);
};
