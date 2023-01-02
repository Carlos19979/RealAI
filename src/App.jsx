import "./App.css";
import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import Register from "./components/Register/Register";

function App() {
  return (
    <div className="App ">
      <Routes>
        <Route path="/" element={<Layout />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </div>
  );
}

export default App;
