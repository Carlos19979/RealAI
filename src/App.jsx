import './App.css'
import { Route, Routes } from "react-router-dom";
import Layout from './components/Layout';

function App() {
      
  return (
    <div className="App ">
      <Routes>
        <Route path="/" element={<Layout/>} />
      </Routes>
    </div>
  );
}


export default App
