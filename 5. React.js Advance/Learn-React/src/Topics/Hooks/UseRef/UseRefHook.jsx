//* When we use useRef() Hook than it will give us an object with one key, which is current. This key holds the reference element value. So to get the value we use ourRef.current.

import { useRef } from "react";

export const UseRefHook = () => {
  const username = useRef("");
  const password = useRef("");

  function handleFormSubmit(e) {
    e.preventDefault();
    console.log(
      `Username is:- ${username.current.value} \n Password is:- ${password.current.value}`
    );
  }

  return (
    <>
      <form onSubmit={handleFormSubmit}>
        <input type="text" id="username" ref={username} />
        <br />
        <br />
        <input type="text" id="password" ref={password} />
        <br />
        <br />

        <button type="submit">Submit</button>
      </form>
    </>
  );
};
