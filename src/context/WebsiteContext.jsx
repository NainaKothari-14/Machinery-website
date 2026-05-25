import { createContext, useContext } from "react";
import { companyInfo } from "../data/companyInfo";

const WebsiteContext = createContext({ companyInfo });

export function WebsiteProvider({ children }) {
  return (
    <WebsiteContext.Provider value={{ companyInfo }}>
      {children}
    </WebsiteContext.Provider>
  );
}

export function useWebsite() {
  return useContext(WebsiteContext);
}
