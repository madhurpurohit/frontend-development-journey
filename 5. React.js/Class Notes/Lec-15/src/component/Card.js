import FoodCard from "./FoodCard";

const dummyData = [
  { id: 1, food: "Pizza", price: "200" },
  { id: 2, food: "Momos", price: "300" },
  { id: 3, food: "Poha", price: "879" },
  { id: 4, food: "Paneer", price: "457" },
  { id: 5, food: "Rice", price: "2000" },
  { id: 6, food: "Burger", price: "899" },
  { id: 7, food: "Sandwich", price: "577" },
  { id: 8, food: "Dosa", price: "450" },
  { id: 9, food: "Pav Bhaji", price: "400" },
  { id: 10, food: "French Fries", price: "700" },
];

export default function Card() {
  return (
    <div className="container">
      {dummyData.map((value) => {
        return (
          <div key={value.id} className="card">
            <FoodCard food={value.food} price={value.price} />
          </div>
        );
      })}
    </div>
  );
}
