import { FallingLines } from "react-loader-spinner";

export default function Loader() {
  return (
    <div className="flex h-full justify-center items-center">
      <FallingLines width="200" color="#5E0000" />
    </div>
  );
}
