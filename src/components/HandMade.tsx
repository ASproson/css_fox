import { Button } from "./Button";

export const HandMade = () => {
  return (
    <div className="relative">
      <div className="w-[200px] sm:w-[280px] absolute top-6 left-14 sm:left-24">
        <h3 className="mb-4 text-black tracking-tight">Hand Made in England</h3>
        <p className="mb-6 text-xs" style={{ color: "#9e9e9e" }}>
          Fox Umbrellas Ltd was founded in 1868 and has been producing the
          worlds finest umbrellas for over 150 years. If you want the best
          umbrella, make sure it's a Fox Umbrella.
        </p>
        <Button text="Discover Our Story" />
      </div>
    </div>
  );
};
