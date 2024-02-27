import Nav from "../../components/Nav/Nav";
import Header from "../../components/Header/Header";
import Projects from "../../components/Projects /Projects";

import "./Home.css";

const Home = () => {
  return (
    <div className="home">
      <Nav />
      <Header />
      <Projects />
    </div>
  );
};

export default Home;
