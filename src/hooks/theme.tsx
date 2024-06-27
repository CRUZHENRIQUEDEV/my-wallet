import React, {
  createContext,
  useState,
  useContext,
  ReactNode,
  useEffect,
} from "react";
import dark from "../styles/themes/dark";
import light from "../styles/themes/light";

interface IThemeContext {
  toggleTheme(): void;
  theme: ITheme;
}

interface ITheme {
  title: string;
  colors: {
    primary: string;
    secondary: string;
    tertiary: string;
    white: string;
    black: string;
    gray: string;
    success: string;
    info: string;
    warning: string;
  };
}

const ThemeContext = createContext<IThemeContext>({} as IThemeContext);

const ThemeProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [theme, setTheme] = useState<ITheme>(() => {
    const storedTheme = localStorage.getItem("@my-wallet:theme");
    return storedTheme ? JSON.parse(storedTheme) : dark;
  });

  useEffect(() => {
    localStorage.setItem("@my-wallet:theme", JSON.stringify(theme));
  }, [theme]);

  const toggleTheme = () => {
    const newTheme = theme.title === "dark" ? light : dark;
    setTheme(newTheme);
  };

  return (
    <ThemeContext.Provider value={{ toggleTheme, theme }}>
      {children}
    </ThemeContext.Provider>
  );
};

const useTheme = (): IThemeContext => {
  const context = useContext(ThemeContext);

  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }

  return context;
};

export { ThemeProvider, useTheme };
