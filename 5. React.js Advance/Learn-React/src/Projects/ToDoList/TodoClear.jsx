export const TodoClear = ({ onSetTask }) => {
  function handleClearAll() {
    onSetTask([]);
  }

  return (
    <button className="clear-btn" onClick={handleClearAll}>
      Clear All
    </button>
  );
};
