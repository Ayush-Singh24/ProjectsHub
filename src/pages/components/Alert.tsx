import { RootState } from "@/redux/store";
import { useRef } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";

export default function Alert() {
  const { alertMessage, status, isOpen } = useSelector(
    (state: RootState) => state.alert
  );
  const alertRef = useRef<HTMLDivElement>();
  const dispatch = useDispatch();
  return (
    <>
      <div className="absolute flex items-center justify-center px-10 py-5 rounded-lg bottom-5 left-5">
        {" "}
        Hello{" "}
      </div>
    </>
  );
}
