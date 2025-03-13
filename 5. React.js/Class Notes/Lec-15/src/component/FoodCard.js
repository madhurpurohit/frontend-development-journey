import { useState } from "react";
import { addItems, removeItems } from "./slice2";
import { useDispatch } from "react-redux";

export default function FoodCard(value) {
  const [cardText, setCardText] = useState("Add");
  const dispatch = useDispatch();

  function changeText() {
    //   cardText == "Add" ? setCardText("Remove") : setCardText("Add");

    if (cardText == "Add") {
      setCardText("Remove");
      dispatch(addItems());
    } else {
      setCardText("Add");
      dispatch(removeItems());
    }
  }

  return (
    <>
      <h1>{value.food}</h1>
      <div className="render-btn">
        <h2>Price: {value.price}</h2>
        <button onClick={changeText}>{cardText}</button>
      </div>
    </>
  );
}
