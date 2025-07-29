import { useEffect, useState } from "react";
import faq from "../../api/faq.json";
import { FAQ } from "../UI/FAQ";

export const Accordion = () => {
  const [data, setData] = useState([]);
  const [activeId, setActiveId] = useState(false);

  useEffect(() => {
    setData(faq);
  }, []);

  // console.log(data);

  const handleButton = (id) => {
    setActiveId((prevId) => (prevId === id ? false : id));
  };

  return (
    <>
      <h1>Welcome to Accordion Website</h1>
      <ul className="section-accordion">
        {data.map((curElem) => {
          return (
            <FAQ
              key={curElem.id}
              curData={curElem}
              isActive={activeId === curElem.id}
              onToggle={() => handleButton(curElem.id)}
            />
          );
        })}
      </ul>
    </>
  );
};
