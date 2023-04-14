import {useEffect} from "react";
import Card from "../Components/Card";
import api from "../util/api";
import BaseTemplate from "../templates/BaseTemplate/BaseTemplate";
import { useDentists } from "../context/DentistContext";

const Home = () => {
  const {dentists, setDentists} = useDentists();

  const getDentistas = async () => {
    const {data} = await api.get("/dentista");
    try {
      setDentists(data);
    } catch (error) {
      alert(error);
    }
  };

  useEffect(() => {
    if (!dentists || dentists.length == 0) getDentistas();
    //Nesse useEffect, deverá ser obtido todos os dentistas da API
    //Armazena-los em um estado para posteriormente fazer um map
    //Usando o componente <Card />
  }, []);

  return (
    <BaseTemplate>
      <h1>Home</h1>
      <div>
        <ul className="card-grid container">
          {dentists.map(({ nome, matricula, usuario }) => (
            <li key={matricula}>
              <Card nome={nome} matricula={matricula} usuario={usuario} />
            </li>
          ))}
        </ul>
      </div>
    </BaseTemplate>
  );
};

export default Home;
