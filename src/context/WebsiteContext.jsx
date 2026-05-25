import { createContext, useContext } from "react";
import { siteContent } from "../content";

const WebsiteContext = createContext(siteContent);

export function WebsiteProvider({ children }) {
  return (
    <WebsiteContext.Provider value={siteContent}>
      {children}
    </WebsiteContext.Provider>
  );
}

export function useWebsite() {
  return useContext(WebsiteContext);
}
