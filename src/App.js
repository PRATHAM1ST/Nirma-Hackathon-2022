import Home from "./pages/Home";
import { Routes, Route, useParams } from "react-router-dom";
import Signin from "./pages/Signin";
import Register from "./pages/Register";

// css
import "./css/root.css";
import "./css/index.css";
import "./css/header.css";
import "./css/program.css";
import "./css/auth.css";
import "./css/page.css";
import Page from "./pages/Page";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/SignIn" element={<Signin/>} />
        <Route path="/Register" element={<Register/>} />
        <Route path="/Page/:id" exact element={<Page/>} />
        <Route path="/Create" exact element={<Page/>} />
      </Routes>
    </div>
  );
}

export default App;
