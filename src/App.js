import "./App.css";
import Navbar from "./components/navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" component={Home} exact/>
          <Route path="/About" component={About} exact/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
