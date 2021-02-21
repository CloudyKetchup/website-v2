import { createContext, useContext } from "react";

const Context = createContext({});

export const useNavbar = () => {
  const context = useContext(Context);

  return context;
};

export const NavbarProvider = ({ children, value }) => {
  return (
  <Context.Provider value={value}>
    {children}
  </Context.Provider>
);};