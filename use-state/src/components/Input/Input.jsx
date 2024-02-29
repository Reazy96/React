import { useState } from "react";
import "./Input.css";

const Input = () => {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [mail, setMail] = useState("");

  return (
    <section className="input-wrapper">
      <div className="input">
        {" "}
        <input
          placeholder="Vorname"
          type="text"
          onChange={(event) => setFirstname(event.target.value)}
          value={firstname}
        />
        <input
          placeholder="Nachname"
          type="text"
          onChange={(event) => setLastname(event.target.value)}
          value={lastname}
        />
        <input placeholder="E-Mail" type="email" onChange={(event) => setMail(event.target.value)} value={mail} />
      </div>

      <div className="output">
        <p>Vorname: {firstname}</p>
        <p>Nachname:{lastname}</p>
        <p>E-Mail: {mail}</p>
      </div>
    </section>
  );
};

export default Input;
