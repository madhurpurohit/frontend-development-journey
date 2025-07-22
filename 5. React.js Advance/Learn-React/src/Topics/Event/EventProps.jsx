export const EventAsProps = () => {
  const handleButtonClick = () => {
    alert(`Hey why you clicked me.`);
  };

  const handleHover = () => {
    alert(`Hey don't hover on me.`);
  };

  return (
    <div className="full-container">
      <WelcomeUser
        onButtonClick={() => handleButtonClick()}
        onMouseEnter={() => handleHover()}
      />
    </div>
  );
};

function WelcomeUser(props) {
  const { onButtonClick, onMouseEnter } = props;

  const handleGreetings = () => {
    console.log("Thanks to greet me");
    onButtonClick();
  };

  return (
    <>
      <button onClick={onButtonClick}>Click me</button>
      <button onMouseEnter={() => onMouseEnter()}>Hover me</button>

      <button onClick={handleGreetings}>Greetings</button>
    </>
  );
}
