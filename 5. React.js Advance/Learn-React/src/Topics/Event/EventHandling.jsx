export default function EventHandle() {
  const handleButtonClick = (event) => {
    console.log(event);
    console.log(event.target);
    console.log(event.target.type);
    alert("Don't click on this button.");
  };

  const handleUserWelcome = (props) => {
    alert(`Hello ${props}, Welcome`);
  };

  return (
    <div className="full-container">
      {/* // ?  Function Components with Named Functions  */
      /* Remember how we haven't called this function, if you call this function here  then it will run without even clicking. You just need to pass reference and not call here. */}
      <button onClick={handleButtonClick}>Click me</button>

      {/* In React, event handlers receive the event object as an argument by default. However, when you use an arrow function directly in the onClick attribute without passing the event explicitly, React doesn't pass the event object to your handler function. This is because the arrow function creates a new function and calls your handler without passing any arguments. */}
      <button onClick={(event) => handleButtonClick(event)}>Click me 2</button>

      {/* {/* //? Passing Arguments to Event Handlers } */}
      {/* <button onClick={handleWelcomeUser("vinod")}>click Me</button> */}
      <button onClick={() => handleUserWelcome("DevFLux")}>Props Send</button>

      {/* /* //? Inline Event Handlers} */}
      <button onClick={(event) => console.log(event)}>Inline Event</button>

      {/* //? Function Components with Inline Arrow Functions */}
      <button onClick={() => alert("Hello Everyone")}>
        Inline Arrow Function
      </button>
    </div>
  );
}
