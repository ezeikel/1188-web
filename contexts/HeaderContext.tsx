import { createContext } from "react";

const HeaderContext = createContext({
  sticky: false,
  toggle: () => null,
});

export default HeaderContext;
