import { useState } from "react";

const Counter = () => {
  const [state, setState] = useState("Hallo Leute");
  const stateAendern = () => {
    setState("Ciao Kakao");

    console.log(state);
  };
  return (
    <section>
      <h4>{state}</h4>
      <button onClick={stateAendern}> Bitte ändere den Wert </button>
    </section>
  );
};

export default Counter;
