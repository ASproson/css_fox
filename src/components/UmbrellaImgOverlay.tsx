import womanUmbrella from "../assets/womanUmbrella.png";

export const UmbrellaImgOverlay = () => {
  return (
    <div className="flex justify-end relative z-0">
      <div className="absolute -right-40 -top-[300px] md:-top-[250px] hidden md:block">
        <img
          src={womanUmbrella}
          alt="woman holding umbrella"
          className="h-[570px] w-[420px]"
        />
        <div
          className="IMG FADE absolute -bottom-5 left-0 h-[200px] w-full -rotate-12"
          style={{
            backgroundImage:
              "linear-gradient(to bottom, rgba(255, 255, 255, 0), rgba(255, 255, 255, 1) 50%)",
          }}
        ></div>
      </div>
    </div>
  );
};
