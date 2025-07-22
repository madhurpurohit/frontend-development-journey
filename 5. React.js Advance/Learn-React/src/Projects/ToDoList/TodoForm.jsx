import { useState } from "react";

export const TodoForm = ({ onFormSubmit }) => {
  const [inputValue, setInputValue] = useState({});

  function handleInputChange(value) {
    setInputValue({
      id: value,
      content: value,
      checked: false,
    });
  }

  function handleFormSubmit(e) {
    e.preventDefault();
    onFormSubmit(inputValue); // It will call handleFormSubmit() with inputValue argument, which is present inside Todo.jsx. means data will flow from child to parent.
    setInputValue({ id: "", content: "", checked: false });
  }

  return (
    <section className="form">
      <form onSubmit={(e) => handleFormSubmit(e)}>
        <div>
          <input
            type="text"
            autoComplete="off"
            value={inputValue.content}
            onChange={(event) => handleInputChange(event.target.value)}
          />
          <button type="submit">Add Task</button>
        </div>
      </form>
    </section>
  );
};
