import { useId } from "react";

//* Method1:- If we have one or two element which needs an unique id than we separately use useId Hook.
// export const UseIdHook = () => {
//   const username = useId();
//   const password = useId();
//   const email = useId();

//   return (
//     <form>
//       <div>
//         <label htmlFor={username}>Username: </label>
//         <input type="text" name="username" id={username} />
//       </div>
//       <div>
//         <label htmlFor={password}>Password: </label>
//         <input type="password" name="password" id={password} />
//       </div>
//       <div>
//         <label htmlFor={email}>Email: </label>
//         <input type="email" name="email" id={email} />
//       </div>
//       <button type="submit">Submit</button>
//     </form>
//   );
// };

// Method2:- If we have multiple elements than we use only single id & add some unique Id after this.
export const UseIdHook = () => {
  const id = useId();

  return (
    <form>
      <div>
        <label htmlFor={id + "username"}>Username: </label>
        <input type="text" name="username" id={id + "username"} />
      </div>
      <div>
        <label htmlFor={id + "password"}>Password: </label>
        <input type="password" name="password" id={id + "password"} />
      </div>
      <div>
        <label htmlFor={id + "email"}>Email: </label>
        <input type="email" name="email" id={id + "email"} />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};
