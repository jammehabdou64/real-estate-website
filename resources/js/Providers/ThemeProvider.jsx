import * as React from "react";
import { ThemeProvider as ReactThemesProvider } from "next-themes";

export function ThemeProvider({ children, ...props }) {
  return <ReactThemesProvider {...props}>{children}</ReactThemesProvider>;
}
