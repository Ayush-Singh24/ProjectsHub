import { setIsAuth } from "@/redux/reducers/auth";
import { Service } from "@/service/service";
import { ResponseStatus } from "@/utils/constants";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

export const useAuth = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;
    Service.verify(signal).then((response) => {
      if (response.status === ResponseStatus.Ok) {
        dispatch(setIsAuth(true));
      } else {
        dispatch(setIsAuth(false));
      }
    });
  }, []);
};
