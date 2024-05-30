import {
  faEnvelope,
  faCamera,
  faPhoneVolume,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const Socials = () => {
  const icons = [
    <FontAwesomeIcon icon={faEnvelope} />,
    <FontAwesomeIcon icon={faCamera} />,
    <FontAwesomeIcon icon={faPhoneVolume} />,
  ];

  return (
    <div className="relative">
      <p
        className="absolute top-20 -left-16  -rotate-90  tracking-widest max-w-min text-xs whitespace-nowrap hidden sm:block"
        style={{ color: "#9e9e9e" }}
      >
        ALL LUXURY UMBRELLA
      </p>

      <div className="absolute top-6 sm:top-44 left-1">
        {icons.map((icon, idx) => {
          return (
            <p
              key={idx}
              className="mb-2 hover:scale-125 transition ease-in-out"
              style={{ color: "#9e9e9e" }}
            >
              <button>{icon}</button>
            </p>
          );
        })}
      </div>
    </div>
  );
};
