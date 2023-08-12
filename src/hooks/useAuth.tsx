import { Service } from "@/service/service";
import { ResponseStatus } from "@/utils/constants";
import { useEffect, useState } from "react";

export const useAuth = async () => {
  const [isAuth, setIsAuth] = useState<boolean | null>(null);
  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;
    Service.verify(signal).then((response) => {
      if ((response.status = ResponseStatus.Ok)) {
        setIsAuth(true);
      } else {
        setIsAuth(false);
      }
    });

    return () => controller.abort();
  }, []);

  return isAuth;
};
