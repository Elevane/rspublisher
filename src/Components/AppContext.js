import { createContext } from "react";

const AppContext = createContext({
    googleLogged: false,
    setGoogleLogged: () => {}
  });

export default AppContext;