import FetchProducts from "./FetchProducts";
import StaticText from "./StaticText";

export default function Bottom() {
  return (
    <div className="flex justify-evenly">
      <div>
        <StaticText />
      </div>
      <div className="flex">
        <FetchProducts />
      </div>
    </div>
  );
}
