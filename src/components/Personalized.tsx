import { Button } from "./Button";
import { TitleText } from "./TitleText";

export const Personalized = () => {
  return (
    <div className="md:max-w-[50%] px-10 py-6">
      <div className="font-bold text-3xl pb-8">
        <TitleText text="Get Your Personalized" />
        <TitleText text="Luxurious Umbrella Now" />
      </div>
      <p className="max-w-[225px] text-sm" style={{ color: "#9e9e9e" }}>
        We ship worldwide and offer FREE shipping on all UK orders.
      </p>
      <div className="py-6">
        <Button text="Locate Our Store" />
      </div>
    </div>
  );
};
