import './App.css';
import LoginMain from "./components/login/LoginMain";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Dashboard from "./components/dashboard";

function App() {
  return (
    <div className="App">
        <Router>
            <Routes>
                <Route path="/" element={<LoginMain />} />
                <Route path="/login" element={<LoginMain/>} />
                <Route path="/dashboard" element={<Dashboard/>} />
            </Routes>
        </Router>
    </div>
  );
}

export default App;
