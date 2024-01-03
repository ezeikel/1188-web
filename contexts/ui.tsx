import {
  createContext,
  useContext,
  useEffect,
  useState,
  Dispatch,
  SetStateAction,
} from 'react';

type UIContextShape = {
  hydrated: boolean;
  isMenuOpen: boolean;
  openMenu: () => void;
  closeMenu: () => void;
  toggleMenu: () => void;
  headerHeight: number;
  setHeaderHeight: Dispatch<SetStateAction<number>>;
};

export const UIContext = createContext<UIContextShape>({
  hydrated: false,
  isMenuOpen: false,
  openMenu: () => {},
  closeMenu: () => {},
  toggleMenu: () => {},
  headerHeight: 0,
  setHeaderHeight: () => {},
});

export const UIContextProvider = ({ children }) => {
  const [hydrated, setHydrated] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [headerHeight, setHeaderHeight] = useState(100);

  const openMenu = () => setIsMenuOpen(true);
  const closeMenu = () => setIsMenuOpen(false);
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  useEffect(() => {
    setHydrated(true);
  }, []);

  return (
    <UIContext.Provider
      // eslint-disable-next-line react/jsx-no-constructed-context-values
      value={{
        hydrated,
        isMenuOpen,
        openMenu,
        closeMenu,
        toggleMenu,
        headerHeight,
        setHeaderHeight,
      }}
    >
      {children}
    </UIContext.Provider>
  );
};

export const useUIContext = () => {
  const context = useContext(UIContext);
  if (context === undefined) {
    throw new Error('useUIContext must be used within a UIContextProvider');
  }

  return context;
};
