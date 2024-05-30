import { HandMade } from "./HandMade";
import { Socials } from "./Socials";
import { TitleText } from "./TitleText";
import { UmbrellaImgOverlay } from "./UmbrellaImgOverlay";

export const HeroText = () => {
  return (
    <div className="mt-10 md:mt-32 relative h-[300px] sm:h-[400px] md:h-[500px]">
      <div className="text-[40px] sm:text-[50px] md:text-[70px] lg:text-[90px] font-bold text-center md:text-left">
        <TitleText text="Fox Umbrellas" />
      </div>
      <UmbrellaImgOverlay />
      <Socials />
      <HandMade />
    </div>
  );
};
