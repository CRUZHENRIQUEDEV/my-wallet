import React, {
  createContext, // Função para criar o contexto
  useState, // Hook para gerenciar o estado
  useContext, // Hook para consumir o contexto
  ReactNode, // Tipo para definir os nós React (usado nas propriedades dos componentes)
  useEffect, // Hook para efeitos colaterais
} from "react";
import dark from "../styles/themes/dark"; // Importa o tema escuro
import light from "../styles/themes/light"; // Importa o tema claro

// Interface para o contexto do tema, define as funções e dados disponíveis no contexto
interface IThemeContext {
  toggleTheme(): void; // Função para alternar o tema
  theme: ITheme; // O tema atual
}

// Interface para o tema, define a estrutura dos dados de um tema
interface ITheme {
  title: string; // Título do tema
  colors: {
    // Cores do tema
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

// Cria o contexto do tema com um valor padrão
const ThemeContext = createContext<IThemeContext>({} as IThemeContext);

// Componente provedor do tema
const ThemeProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  // Estado para o tema, inicializado com o valor do localStorage ou o tema escuro
  const [theme, setTheme] = useState<ITheme>(() => {
    const storedTheme = localStorage.getItem("@my-wallet:theme"); // Tenta obter o tema armazenado no localStorage
    return storedTheme ? JSON.parse(storedTheme) : dark; // Se existir, parseia o tema, senão, usa o tema escuro
  });

  // Efeito colateral para armazenar o tema no localStorage sempre que ele mudar
  useEffect(() => {
    localStorage.setItem("@my-wallet:theme", JSON.stringify(theme)); // Armazena o tema atual no localStorage
  }, [theme]); // Dependência do efeito, será executado sempre que o tema mudar

  // Função para alternar entre o tema escuro e claro
  const toggleTheme = () => {
    setTheme(theme.title === "dark" ? light : dark); // Se o tema atual for escuro, muda para claro, senão, muda para escuro
  };

  // Retorna o provedor do contexto com o valor atual do tema e a função para alternar o tema
  return (
    <ThemeContext.Provider value={{ toggleTheme, theme }}>
      {children}
    </ThemeContext.Provider>
  );
};

// Hook personalizado para consumir o contexto do tema
const useTheme = (): IThemeContext => {
  const context = useContext(ThemeContext); // Obtém o contexto
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider"); // Verifica se o contexto está disponível
  }
  return context; // Retorna o contexto
};

// Exporta o provedor do tema e o hook personalizado
export { ThemeProvider, useTheme };
