export default function CoinCard(value) {
  return (
    <div className="card">
      <img src={value.image} alt={value.id} />
      <h2>{value.name}</h2>
      <p className="first-para">Price: ${value.current_price}</p>
      <p className="second-para">Market Cup Rank: ${value.market_cap_rank}</p>
    </div>
  );
}
