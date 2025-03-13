import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FetchData } from "./slicer1";
import CoinCard from "./CoinCard";

export default function CoinCreate() {
  const dispatch = useDispatch();

  const { data, loading, error } = useSelector((state) => state.slice1);

  useEffect(() => {
    dispatch(FetchData(20)); // In this FetchData(20) is a function not an action.
  }, []);

  // Display the information of user.
  if (loading) {
    return <h1>Data is loading....</h1>;
  }
  if (error) {
    return <h1>Error has Occurred.</h1>;
  }

  return (
    <div className="container">
      {data.map((value, index) => (
        <CoinCard
          kay={value.id}
          image={value.image}
          id={value.id}
          name={value.name}
          current_price={value.current_price}
          market_cap_rank={value.market_cap_rank}
        />
      ))}
    </div>
  );
}
