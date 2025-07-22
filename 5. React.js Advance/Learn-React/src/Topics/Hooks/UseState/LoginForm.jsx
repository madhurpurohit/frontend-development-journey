import { useState } from "react";

//* Method1:- Using Object State with Spread Operator
// export const LoginForm = () => {
//   const [userData, setUserData] = useState({
//     username: "",
//     password: "",
//   });

//   const handleUserInput = (e) => {
//     const { name, value } = e.target;
//     setUserData((prevData) => ({ ...prevData, [name]: value }));
//   };

//   const handleFormSubmit = (e) => {
//     e.preventDefault();

//     console.log(userData);
//   };

//   return (
//     <>
//       <div className="box-container">
//         <h1>Login Form</h1>

//         <form onSubmit={handleFormSubmit}>
//           <div className="data-box">
//             <label htmlFor="userName">User Name</label>
//             <input
//               type="text"
//               name="username"
//               id="userName"
//               className="input-elem"
//               value={userData.username}
//               onChange={handleUserInput}
//             />
//           </div>
//           <div className="data-box">
//             <label htmlFor="password">Password</label>
//             <input
//               type="password"
//               name="password"
//               id="password"
//               className="input-elem"
//               value={userData.password}
//               onChange={handleUserInput}
//             />
//           </div>

//           <button type="submit">Login</button>
//         </form>
//       </div>
//     </>
//   );
// };

//* Method2:- Using Multiple State Variables
export const LoginForm = () => {
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const handleFormSubmit = (e) => {
    e.preventDefault();

    const loginData = {
      username,
      password,
    };

    console.log(loginData);
  };

  return (
    <>
      <div className="box-container">
        <h1>Login Form</h1>

        <form onSubmit={handleFormSubmit}>
          <div className="data-box">
            <label htmlFor="userName">User Name</label>
            <input
              type="text"
              name="username"
              id="userName"
              className="input-elem"
              value={username}
              onChange={(e) => setUserName(e.target.value)}
              required
              autoComplete="off"
            />
          </div>
          <div className="data-box">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              name="password"
              id="password"
              className="input-elem"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              autoComplete="off"
            />
          </div>

          <button type="submit">Login</button>
        </form>
      </div>
    </>
  );
};
