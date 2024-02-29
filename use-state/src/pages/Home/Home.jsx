import Counter from "../../components/Counter/Counter";
import DarkLight from "../../components/DarkLight/DarkLight";
import Faq from "../../components/Faq/Faq";
import Input from "../../components/Input/Input";
import "./Home.css";

const Home = () => {
  return (
    <main>
      <Faq />
      <Counter />
      <Input />
      <DarkLight />
    </main>
  );
};

export default Home;
