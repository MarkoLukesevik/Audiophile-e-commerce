import { createContext, useEffect } from "react";
import UseFetch from "../../hooks/UseFetch";

export const AppContext = createContext([]);

export function AppProvider({ children }) {
  const { data, fetchData } = UseFetch("/data.json");

  useEffect(() => {
    fetchData();
  }, []);

  const headphones = data.filter(
    (product) => product.category === "headphones"
  );
  const speakers = data.filter((product) => product.category === "speakers");
  const earphones = data.filter((product) => product.category === "earphones");

  return (
    <AppContext.Provider value={{ data, headphones, speakers, earphones }}>
      {children}
    </AppContext.Provider>
  );
}
