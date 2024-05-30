// import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";

import {
  faMagnifyingGlass,
  faBagShopping,
  faBars,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState, useEffect } from "react";

export const Nav = () => {
  const navElements = [
    { name: "HOME", element: null },
    { name: "OUR STORY", element: null },
    { name: "PRODUCTS", element: null },
    { name: "HISTORY", element: null },
    { name: "SEARCH", element: <FontAwesomeIcon icon={faMagnifyingGlass} /> },
    { name: "CART", element: <FontAwesomeIcon icon={faBagShopping} /> },
  ];

  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 525);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  if (isSmallScreen) {
    return (
      <DropdownMenu.Root>
        <DropdownMenu.Trigger asChild>
          <button aria-label="Collapsed menu">
            <FontAwesomeIcon icon={faBars} />
          </button>
        </DropdownMenu.Trigger>

        <DropdownMenu.Portal>
          <DropdownMenu.Content
            className="tracking-tighter text-gray-500 font-semibold text-xs text-right"
            align="end"
          >
            {navElements.map(({ name }) => (
              <DropdownMenu.Item key={name} className="py-[2px]">
                {name}
              </DropdownMenu.Item>
            ))}
          </DropdownMenu.Content>
        </DropdownMenu.Portal>
      </DropdownMenu.Root>
    );
  } else {
    return (
      <nav
        className="space-x-6 tracking-tighter text-gray-500 font-semibold text-xs"
        style={{ color: "#6f6f6f" }}
      >
        {navElements.map(({ name, element }) => (
          <button key={name} className="hover:scale-110 transition ease-in-out">
            {element ? element : name}
          </button>
        ))}
      </nav>
    );
  }
};
