import { Footer } from "./Footer";
import { HeroText } from "./HeroText";
import { Logo } from "./Logo";
import { Nav } from "./Nav";
import { Personalized } from "./Personalized";
import { Discover } from "./Discover";

export const FoxUmbrellas = () => {
  return (
    <div className="min-h-screen" style={{ backgroundColor: "#e6e6e6" }}>
      <div className="py-10 px-4 sm:px-14 flex justify-center">
        <div className="bg-white h-full rounded-sm shadow-xl overflow-hidden w-[1000px] relative">
          <div className="px-12 pb-10">
            <div className="relative flex justify-end items-center pt-10">
              <div className="absolute  top-7 left-0">
                <Logo />
              </div>
              <Nav />
            </div>
            <HeroText />
            <div className="py-10 sm:py-0">
              <Discover />
            </div>
            <div className="py-10 sm:py-0">
              <Personalized />
            </div>
            <Footer />
          </div>
        </div>
      </div>
    </div>
  );
};
