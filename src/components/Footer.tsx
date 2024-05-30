import footerimg from "../assets/footerimg.png";

export const Footer = () => {
  return (
    <footer className="px-10 py-10 text-white bg-black relative text-sm">
      <div className="absolute bg-black top-0 -left-12 w-20 h-full"></div>
      <div className="absolute bg-black top-10 -left-12 w-20 h-full"></div>
      <div className="absolute bg-black top-0 -right-12 w-20 h-full"></div>
      <div className="absolute bg-black top-10 -right-12 w-20 h-full"></div>
      <div className="absolute bg-black -bottom-10 left-0 w-full h-10"></div>

      <div className="absolute bg-white top-0 -left-2 w-1 h-[125px]"></div>
      <div className="absolute bg-white top-10 -left-[6.5px] w-[1.5px] h-[230px]"></div>

      <div className="absolute h-[400px] w-[400px] -top-40 -right-4 overflow-visible hidden lg:block">
        <img src={footerimg} alt="Man in overcoat with umbrella" />
      </div>

      <h3 className="pb-4 font-bold font-serif text-lg">Fox Umbrella</h3>
      <p>KEEPING YOU DRY SINCE 1868</p>
      <p>Hand Made in England</p>
      <div className="sm:flex py-10">
        <div>
          <h3 className="font-bold font-serif text-lg">Navigation</h3>
          <p>HOME</p>
          <p>OUR STORY</p>
          <p>PRODUCTS</p>
          <p>HISTORY</p>
        </div>
        <div className="sm:ml-24 pt-10 sm:pt-0">
          <h3 className="font-bold font-serif text-lg">Support</h3>
          <p>PRIVACY POLICY</p>
          <p>TERMS AND CONDITIONS</p>
          <p>SHIPPING AND RETURNS</p>
          <p>HELP AND FAQ</p>
        </div>
      </div>
      <p>© FOX UMBRELLA - ALL RIGHTS RESERVED</p>
    </footer>
  );
};
