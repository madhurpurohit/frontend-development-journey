import React from "react";
import ReactDOM from "react-dom/client";

const cardDetails = [
  {
    image_src:
      "https://cdn.pixabay.com/photo/2024/04/29/04/21/tshirt-8726721_1280.jpg",
    cloth_type: "T-Shirt",
    offer: "40-60% OFF",
    price: "299",
  },
  {
    image_src:
      "https://cdn.pixabay.com/photo/2020/09/18/22/05/man-5583034_960_720.jpg",
    cloth_type: "Shirt",
    offer: "30-45% OFF",
    price: "349",
  },

  {
    image_src:
      "https://cdn.pixabay.com/photo/2017/09/29/15/45/woman-2799490_640.jpg",
    cloth_type: "Jeans",
    offer: "10-25% OFF",
    price: "499",
  },
  {
    image_src:
      "https://cdn.pixabay.com/photo/2017/08/27/05/33/trousers-2685231_1280.jpg",
    cloth_type: "Trousers",
    offer: "25-50% OFF",
    price: "399",
  },
  {
    image_src:
      "https://cdn.pixabay.com/photo/2017/08/27/05/33/suit-2685226_640.jpg",
    cloth_type: "Suits",
    offer: "5-15% OFF",
    price: "1399",
  },
  {
    image_src:
      "https://cdn.pixabay.com/photo/2024/06/01/06/52/sneakers-8801656_640.jpg",
    cloth_type: "Footwear",
    offer: "55-65% OFF",
    price: "929",
  },
  {
    image_src:
      "https://cdn.pixabay.com/photo/2018/05/21/09/53/tennis-3417785_640.jpg",
    cloth_type: "Sportswear",
    offer: "35-40% OFF",
    price: "779",
  },
  {
    image_src:
      "https://cdn.pixabay.com/photo/2021/05/14/14/27/man-6253523_640.jpg",
    cloth_type: "Coats",
    offer: "65-80% OFF",
    price: "1745",
  },
  {
    image_src:
      "https://cdn.pixabay.com/photo/2016/11/29/01/36/businessman-1866582_640.jpg",
    cloth_type: "Bags",
    offer: "75-90% OFF",
    price: "849",
  },
];

function Card(props) {
  return (
    <div className="card">
      <div className="card-image">
        <img src={props.image_src} alt="Cloths Images" />
      </div>

      <div className="card-details">
        <p className="cloth-type">{props.cloth_type}</p>
        <p className="offer">{props.offer}</p>
        <p className="btn">Shop Now</p>
      </div>
    </div>
  );
}

function CardCombine() {
  return (
    <div className="grid">
      {cardDetails.map((value, index) => (
        <Card
          key={index}
          image_src={value.image_src}
          cloth_type={value.cloth_type}
          offer={value.offer}
        />
      ))}
    </div>
  );
}

const ReactRoot = ReactDOM.createRoot(document.getElementById("root"));
ReactRoot.render(<CardCombine />);
