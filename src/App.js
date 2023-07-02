import Banner from "./components/Banner";
import Form from "./components/Form";
import Team from "./components/Team";
import { useState } from "react";

function App() {
  const teams = [
    {
      name: "Front-end",
      primaryColor: "#57C278",
      secondaryColor: "#D9F7E9",
    },
    {
      name: "Back-end",
      primaryColor: "#82CFFA",
      secondaryColor: "#E8F8FF",
    },
    {
      name: "Arquitetura",
      primaryColor: "#A6D157",
      secondaryColor: "#F0F8E2",
    },
    {
      name: "Devops",
      primaryColor: "#E06B69",
      secondaryColor: "#FDE7E8",
    },
    {
      name: "QA",
      primaryColor: "#DB6EBF",
      secondaryColor: "#FAE9F5",
    },
    {
      name: "Scrum",
      primaryColor: "#FFBA05",
      secondaryColor: "#FFF5D9",
    },
  ];
  const [colaboradores, setColaboradores] = useState([]);

  const onNewRegister = (colaborador) => {
    console.log(colaborador);
    setColaboradores([...colaboradores, colaborador]);
    console.log("Lista de colaboradores ==>", colaboradores);
  };

  return (
    <div className="App">
      <Banner />
      <Form
        teams={teams.map((team) => team.name)}
        onRegister={(colaborador) => onNewRegister(colaborador)}
      />
      {teams.map(({ name, primaryColor, secondaryColor }) => (
        <Team
          key={name}
          name={name}
          primaryColor={primaryColor}
          secondaryColor={secondaryColor}
          employees={colaboradores.filter(colaborador => colaborador.time === name)}
        />
      ))}
    </div>
  );
}

export default App;
