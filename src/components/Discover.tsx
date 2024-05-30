import { TitleText } from "./TitleText";
import discoverUmbrella from "../assets/discoverUmbrella.png";
import handles from "../assets/handles.png";
import { Button } from "./Button";

export const Discover = () => {
  return (
    <div className="grid md:grid-cols-2 gap-20 px-6 items-center">
      <div className="flex">
        <img
          src={discoverUmbrella}
          alt="Opened umbrella"
          className="h-[200px] w-[200px] sm:h[250px] sm:w-[250px] md:h-[300px]  md:w-[300px] lg:h-[400px] lg:w-[400px] object-contain"
        />
      </div>
      <div>
        <div className="font-bold text-3xl">
          <TitleText text="Discover Our" />
          <TitleText text="Popular Umbrellas" />
        </div>
        <p
          className="pt-8 max-w-[300px] text-sm tracking-tight "
          style={{ color: "#9e9e9e" }}
        >
          Our range of umbrellas is expansive, as such we have pur together a
          selection of our most popular umbrellas sold across the globe.
        </p>
        <div className="py-6">
          <Button text="Explore More" />
        </div>
        <div className="flex justify-end relative">
          <img
            src={handles}
            alt="Umbrella handles"
            className="h-[150px] w-[150px] object-cover z-20"
          />
          <div className="absolute top-[155px] right-[70px] text-xs w-[80px]">
            <div className="flex justify-between hover:scale-110 transition ease-in-out">
              <span>View Full</span>
              <span>{">"}</span>
            </div>
          </div>
          <div
            className="absolute w-16 h-16 top-24 -right-2 z-10"
            style={{ backgroundColor: "#916f4a" }}
          ></div>
        </div>
      </div>
    </div>
  );
};
