import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import BodyApp from "./components/BodyApp";

export default function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<BodyApp />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}
