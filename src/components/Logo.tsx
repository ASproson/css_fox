import foxLogo from "../assets/foxLogo.png";

export const Logo = () => {
  return (
    <>
      <div
        className="bg-cover bg-center h-12 w-12"
        style={{ backgroundImage: `url(${foxLogo})` }}
      ></div>
      <div className="-mt-5">
        <span
          className="tracking-tighter font-bold text-[6px]"
          style={{ color: "#b28e4f" }}
        >
          {"FOX UMBRELLAS" + "\u2122"}
        </span>
      </div>
    </>
  );
};
