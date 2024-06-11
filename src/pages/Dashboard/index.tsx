import React from "react"; // import React from "react";

// Dashboard é o nome da pagina importada;
//React.FC tipo da pagina;
//= () => { aponta para uma função;
//Sempre retorna um único elemento;
const Dashboard: React.FC = () => {
  return (
    <div>
      <h1>Dashboard</h1>
      <p>Teste</p>
    </div>
    // Não pode ter outro h1 fora da div <h1>Dashboard</h1>;
  );
};

export default Dashboard;
