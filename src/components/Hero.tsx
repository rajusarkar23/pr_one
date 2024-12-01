import Bottom from "./Bottom";
import Top from "./Top";

export default function Hero() {
  return (
    <div>
      <div className="mt-3 flex justify-center items-center">
        <Top />
      </div>
      <div className="mt-3">
        <Bottom />
      </div>
    </div>
  );
}
