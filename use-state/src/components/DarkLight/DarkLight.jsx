import { useState } from "react";
import "./DarkLight.css";

const DarkLight = () => {
  const [darkOrLight, setDarkOrLight] = useState(false);

  return (
    <section className={darkOrLight ? "dark" : "light"}>
      <h2>{darkOrLight ? "Nacht" : "Tag"}</h2>
      <button onClick={() => setDarkOrLight((darkOrLight) => !darkOrLight)}>
        Change to{darkOrLight ? " Day" : " Night"}
      </button>
    </section>
  );
};

export default DarkLight;
