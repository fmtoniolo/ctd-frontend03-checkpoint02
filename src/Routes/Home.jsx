import {useEffect, useState} from "react";
import Card from "../Components/Card";
import api from "../util/api";
import BaseTemplate from "../templates/BaseTemplate/BaseTemplate";

const Home = () => {
  const [dentistas, setDentistas] = useState([]);

  const getDentistas = async () => {
    const {data} = await api.get("/dentista");
    try {
      setDentistas(data);
    } catch (error) {
      alert(error);
    }
  };

  useEffect(() => {
    getDentistas();
    //Nesse useEffect, deverá ser obtido todos os dentistas da API
    //Armazena-los em um estado para posteriormente fazer um map
    //Usando o componente <Card />
  }, []);

  return (
    <BaseTemplate>
      <h1>Home</h1>
      <div className="card-grid container">
        <ul>
          {dentistas.map(dentista => (
            <li key={dentista.matricula}>
              <Card />
            </li>
          ))}
        </ul>
      </div>
    </BaseTemplate>
  );
};

export default Home;
