import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import cardDetails from "./utils/dummy_data";
import Card from "./component/Card";
import Header from "./component/Header";
import Footer from "./component/Footer";

function App() {
  let [arr, setArr] = useState(cardDetails); // All cardDetails value are assigned to arr, & we use arr instead of cardDetails.

  function sortData() {
    //* Method-1
    // const updateArr = structuredClone(arr.sort((a, b) => a.price - b.price));
    // setArr(updateArr);

    //* Method-2
    arr.sort((a, b) => a.price - b.price);
    setArr([...arr]);

    //? Both method is works same,

    // setArr(arr); // It will not show the UI in ascending order because array is use as reference, so before this function call & after the function call arr is same, even if the values of arr is changed but in this it will only look for reference, & here reference is not changed so it assume that value is also remains unchanged.
  }

  function priceAbove500() {
    const arr1 = arr.filter((value) => value.price >= 500);
    setArr(arr1);
  }

  function priceBelow500() {
    const arr2 = arr.filter((value) => value.price < 500);
    setArr(arr2);
  }

  return (
    <>
      <div className="navigation-menu">
        <Header />
      </div>
      <div className="filter-menu">
        <button onClick={sortData} className="btn-1">
          Sort
        </button>
        <button onClick={priceAbove500} className="btn-1">
          Price above 500
        </button>
        <button onClick={priceBelow500} className="btn-1">
          Price below 500
        </button>
      </div>
      <div className="grid">
        {arr.map((value, index) => (
          <Card
            key={index}
            image_src={value.image_src}
            cloth_type={value.cloth_type}
            offer={value.offer}
            price={value.price}
          />
        ))}
      </div>
      <div className="footer">
        <Footer />
      </div>
    </>
  );
}

const ReactRoot = ReactDOM.createRoot(document.getElementById("root"));
ReactRoot.render(<App />);
