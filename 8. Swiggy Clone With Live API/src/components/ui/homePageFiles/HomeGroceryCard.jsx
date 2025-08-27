import { groceryData } from "../../../data/groceryData";
import { SliderCard } from "../../layout/SliderCard";

export const HomeGroceryCard = () => {
  return (
    <>
      <SliderCard
        data={groceryData}
        space={"mt-30"}
        show={true}
        title={"Shop groceries on Instamart"}
      />
    </>
  );
};
