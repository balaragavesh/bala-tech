import "./App.css";
import About from "./component/About";
import Hero from "./component/Home/Hero";
import Navbar from "./component/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Services from "./component/Services";
import Laptop from "./component/Laptop";
function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Hero />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/services" element={<Services />} />
          <Route exact path="/laptop" element={<Laptop />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
