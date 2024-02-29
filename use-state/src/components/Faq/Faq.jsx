import { useState } from "react";
import "./Faq.css";

const Faq = () => {
  const [popup, setPopup] = useState(false);
  console.log(popup);

  return (
    <>
      <section>
        <p>Why is React great?</p>
        <button onClick={() => setPopup((popup) => !popup)}>-</button>
      </section>

      {popup && (
        <section>
          <p>Fast learning curve</p>
        </section>
      )}
    </>
  );
};

export default Faq;
