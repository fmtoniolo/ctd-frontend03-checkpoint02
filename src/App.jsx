import {BrowserRouter, Outlet, Route, Routes} from "react-router-dom";
import Home from "./Routes/Home";
import Login from "./Routes/Login";
import Detail from "./Routes/Detail";

function App() {
  return (
    <>
      {/* //Na linha seguinte deverá ser feito um teste se a aplicação
        // está em dark mode e deverá utilizar a classe dark ou light */}
      <div className={`app light}`}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/login" element={<Login />} />
            <Route path="/home" element={<Home />} />
            <Route path="/detail" element={<Detail />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
