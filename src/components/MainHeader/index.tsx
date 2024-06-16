import React, { useMemo, useState } from "react"; // Importa React, useMemo e useState

import { Container, Profile, Welcome, UserName } from "./styles"; // Importa os componentes estilizados

import Toggle from "../Toggle"; // Importa o componente Toggle
import emojis from "../../utils/emojis"; // Importa a lista de emojis

import { useTheme } from "../../hooks/theme"; // Importa o hook useTheme

// Define o componente funcional MainHeader
const MainHeader: React.FC = () => {
  const { toggleTheme, theme } = useTheme(); // Obtém as funções toggleTheme e theme do hook useTheme

  // Define um estado para o tema escuro, inicializando com base no título do tema atual
  const [darkTheme, setDarkTheme] = useState(() =>
    theme.title === "dark" ? true : false
  );

  // Função para alternar o tema
  const handleChangeTheme = () => {
    setDarkTheme(!darkTheme); // Inverte o estado darkTheme
    toggleTheme(); // Alterna o tema
  };

  // Usa useMemo para selecionar um emoji aleatório da lista de emojis
  const emoji = useMemo(() => {
    const indice = Math.floor(Math.random() * emojis.length);
    return emojis[indice];
  }, []); // A lista de dependências vazia significa que este efeito só será executado uma vez, quando o componente for montado

  return (
    <Container>
      {/* Componente Toggle para alternar entre temas claro e escuro */}
      <Toggle
        labelLeft="Light"
        labelRight="Dark"
        checked={darkTheme} // Controla o estado do Toggle com o estado darkTheme
        onChange={handleChangeTheme} // Função chamada ao alternar o Toggle
      />

      {/* Seção do perfil do usuário */}
      <Profile>
        <Welcome>Olá, {emoji}</Welcome>{" "}
        {/* Exibe uma mensagem de boas-vindas com um emoji aleatório */}
        <UserName>Henrique da Cruz</UserName> {/* Exibe o nome do usuário */}
      </Profile>
    </Container>
  );
};

export default MainHeader; // Exporta o componente para ser usado em outros lugares
