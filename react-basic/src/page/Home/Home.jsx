// sfc= damit erstellen wir eine jsx funktion.

import Header from "../../components/Header/Header";
import "./Home.css";

const Home = () => {
  // funktion

  return (
    // hier kommt das html rein
    <div className="home">
      <header />
      <h1> Ich bin die Home Seite</h1>
    </div>
  );
};

export default Home;
