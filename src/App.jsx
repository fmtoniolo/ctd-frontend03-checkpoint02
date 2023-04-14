import {BrowserRouter, Route, Routes} from "react-router-dom";
import Detail from "./Routes/Detail";
import Home from "./Routes/Home";
import Login from "./Routes/Login";
import LoginContext from "./context/loginContext";
import {useEffect, useState} from "react";
import { DentistProvider } from "./context/DentistContext";

function App() {
  const [token, setToken] = useState("");

  useEffect(() => {
    let token = localStorage.getItem("@dhOdonto_token")

    if (token) setToken(() => token)
  }, []);

  return (
    <>
      {/* //Na linha seguinte deverá ser feito um teste se a aplicação
        // está em dark mode e deverá utilizar a classe dark ou light */}
      <DentistProvider>
        <LoginContext.Provider value={{token, setToken}}>
            <div className={`app light`}>
              <BrowserRouter>
                <Routes>
                  <Route path="/" element={<Login />} />
                  <Route path="/login" element={<Login />} />
                  <Route path="/home" element={<Home />} />
                  <Route path="/dentist/:id" element={<Detail />} />
                </Routes>
              </BrowserRouter>
            </div>
        </LoginContext.Provider>
      </DentistProvider>
    </>
  );
}

export default App;
