import Counter from "../../components/Counter/Counter";
import Faq from "../../components/Faq/Faq";
import Input from "../../components/Input/Input";
import "./Home.css";

const Home = () => {
  return (
    <main>
      <Faq />
      <Counter />
      <Input />
    </main>
  );
};

export default Home;
