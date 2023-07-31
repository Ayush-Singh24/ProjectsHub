import { closeAlert } from "@/redux/reducers/alert";
import { RootState } from "@/redux/store";
import { AlertStatus } from "@/utils/constants";
import { LegacyRef, useEffect, useRef } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";

export default function Alert() {
  const { alertMessage, status, isOpen } = useSelector(
    (state: RootState) => state.alert
  );
  const alertRef = useRef<HTMLDivElement | null>(null);
  const dispatch = useDispatch();

  const colorVariation = {
    Success: "bg-color-success text-white",
    Error: "bg-color-error text-black",
  };

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => {
        alertRef.current?.classList.remove("animate-in", "fade-in");
        alertRef.current?.classList.add("animate-out", "fade-out");
      }, 2500);
      setTimeout(() => {
        dispatch(closeAlert());
      }, 3000);
    }
  }, [isOpen]);

  return (
    <>
      {isOpen ? (
        <div
          ref={alertRef}
          className={`absolute flex items-center justify-center px-10 py-5 rounded-lg bottom-5 left-5 ${
            status === AlertStatus.Success
              ? colorVariation.Success
              : colorVariation.Error
          } animate-in fade-in duration-500`}
        >
          {alertMessage}
        </div>
      ) : (
        <></>
      )}
    </>
  );
}
