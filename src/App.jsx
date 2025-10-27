import { Route, Routes } from "react-router-dom";
import "./App.css";
import EmployeeDashboard from "./components/EmployeeDashboard";
import Login from "./components/Login";
import Welcome from "./components/Welcome";

function App() {
  return (
    <>
   
      <Routes>
        <Route path="/" element={<Welcome />}></Route>

        <Route path="/login" element={<Login />}></Route>

        <Route path="/dashboard" element={<EmployeeDashboard />}></Route>

        
      </Routes>
      
    </>
  );
}

export default App;
