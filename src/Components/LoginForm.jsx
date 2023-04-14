import {useContext, useState} from "react";
import styles from "./Form.module.css";
import api from "../util/api";
import {useNavigate} from "react-router-dom";
import LoginContext from "../context/loginContext";

const LoginForm = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const {setToken} = useContext(LoginContext);

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      const response = await api.post("/auth", {
        username,
        password
      });
      if (response.status == 200) {
        const token = response.data.token;
        localStorage.setItem("@dhOdonto_token", token);
        setToken(token);
        navigate("/home");
      }
    } catch (error) {
      alert(error);
    }
    //Nesse handlesubmit você deverá usar o preventDefault,
    //enviar os dados do formulário e enviá-los no corpo da requisição
    //para a rota da api que faz o login /auth
    //lembre-se que essa rota vai retornar um Bearer Token e o mesmo deve ser salvo
    //no localstorage para ser usado em chamadas futuras
    //Com tudo ocorrendo corretamente, o usuário deve ser redirecionado a página principal,com react-router
    //Lembre-se de usar um alerta para dizer se foi bem sucedido ou ocorreu um erro
  };

  return (
    <>
      {/* //Na linha seguinte deverá ser feito um teste se a aplicação
        // está em dark mode e deverá utilizar o css correto */}
      <div className={`text-center card container ${styles.card}`}>
        <div className={`card-body ${styles.CardBody}`}>
          <form onSubmit={handleSubmit}>
            <input
              className={`form-control ${styles.inputSpacing}`}
              placeholder="Login"
              name="login"
              onChange={event => setUsername(event.target.value)}
              required
            />
            <input
              className={`form-control ${styles.inputSpacing}`}
              placeholder="Password"
              name="password"
              type="password"
              onChange={event => setPassword(event.target.value)}
              required
            />
            <button className="btn btn-primary" type="submit">
              Send
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default LoginForm;
