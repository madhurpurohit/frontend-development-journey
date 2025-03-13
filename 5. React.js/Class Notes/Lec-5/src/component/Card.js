function Card(props) {
  return (
    <div className="card">
      <div className="card-image">
        <img src={props.image_src} alt="Cloths Images" />
      </div>

      <div className="card-details">
        <p className="cloth-type">{props.cloth_type}</p>
        <p className="offer">{props.offer}</p>
        <p className="price">₹{props.price}</p>
        <p className="shop-btn">Shop Now</p>
      </div>
    </div>
  );
}

export default Card;
