import { createContext } from "react";

interface MenuContextProps {
  active: boolean;
  toggle: (value?: string) => void;
}

const MenuContext = createContext({} as MenuContextProps);

export default MenuContext;
