// import { forwardRef } from "react";
import { useRef } from "react";

export const ForwardRefHook = () => {
  const username = useRef("");
  const password = useRef("");

  function handleFormSubmit(e) {
    e.preventDefault();

    console.log(
      `Username is:- ${username.current.value}\n Password is:- ${password.current.value}`
    );
  }

  return (
    <>
      <form onSubmit={handleFormSubmit}>
        <BeforeReactV19 label="username" ref={username} />
        <BeforeReactV19 label="password" ref={password} />
        <button type="submit">Submit</button>
      </form>
    </>
  );
};

// const BeforeReactV19 = forwardRef((props, ref) => {
//   return (
//     <div>
//       <label>{props.label}</label>
//       <input type="text" name="username" ref={ref} />
//       <br />
//       <br />
//     </div>
//   );
// });

//* We can also destructure this props like {label, ref} & use this.
const BeforeReactV19 = (props) => {
  return (
    <div>
      <label>{props.label}</label>
      <input type="text" name="username" ref={props.ref} />
      <br />
      <br />
    </div>
  );
};
