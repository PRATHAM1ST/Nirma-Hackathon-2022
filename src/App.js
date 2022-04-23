import Home from "./pages/Home";
import { Routes, Route } from "react-router-dom";
import Signin from "./pages/Signin";
import Register from "./pages/Register";

// css
import "./css/root.css";
import "./css/index.css";
import "./css/header.css";
import "./css/program.css";
import "./css/auth.css";
import Header from "./elements/Header";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/SignIn" element={<Signin/>} />
        <Route path="/Register" element={<Register/>} />
      </Routes>
    </div>
  );
}

export default App;
