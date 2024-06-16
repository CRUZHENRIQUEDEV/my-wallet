import React from "react"; // Importa a biblioteca React
import ReactDOM from "react-dom"; // Importa o módulo ReactDOM para manipulação do DOM
import { BrowserRouter as Router } from "react-router-dom"; // Importa o componente Router do react-router-dom
import App from "../App"; // Importa o componente principal da aplicação (ajuste o caminho conforme necessário)

ReactDOM.render(
  <React.StrictMode>
    {" "}
    {/* Envolvendo o aplicativo em React.StrictMode para destacar possíveis problemas na aplicação */}
    <Router>
      {" "}
      {/* Componente Router para habilitar o roteamento em toda a aplicação */}
      <App /> {/* Componente principal da aplicação */}
    </Router>
  </React.StrictMode>,
  document.getElementById("root") // Seleciona o elemento com id 'root' no DOM para renderizar a aplicação React
);
