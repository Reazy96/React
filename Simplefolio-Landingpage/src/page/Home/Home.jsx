import Nav from "../../components/Nav/Nav";
import Header from "../../components/Header/Header";
import Projects from "../../components/Projects /Projects";
import Skills from "../../components/Skills/Skills";
import Contact from "../../components/Contact/Contact";

import "./Home.css";

const Home = () => {
  return (
    <div className="home">
      <Nav />
      <Header />
      <Projects />
      <Skills />
      <Contact />
    </div>
  );
};

export default Home;
