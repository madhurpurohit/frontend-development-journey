import Decrement from "./Decrement";

function Increment({ counts, setCounts }) {
  return (
    <>
      <button onClick={() => setCounts(counts + 1)}>Increment</button>
      <Decrement counts={counts} setCounts={setCounts} />
    </>
  );
}

export default Increment;
