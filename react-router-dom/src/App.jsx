import "./App.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Speisekarte from "./pages/Speisekarte/Speisekarte";
import Kontakt from "./pages/Kontakt/Kontakt";
import Oeffungszeiten from "./pages/Öffnugszeiten/Oeffnungszeiten";
import Galerie from "./pages/Galerie/Galerie";

function App() {
  return (
    <BrowserRouter>
      <Header />;
      <Routes>
        <Route path="/" element={<Speisekarte />} />
        <Route path="/kontakt" element={<Kontakt />} />
        <Route path="/oeffnungszeiten" element={<Oeffungszeiten />} />
        <Route path="/galerie" element={<Galerie />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
