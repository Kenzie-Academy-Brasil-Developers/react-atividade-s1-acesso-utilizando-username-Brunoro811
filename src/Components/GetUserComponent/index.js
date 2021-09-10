import { useState } from "react";

import "./style.css";
function GetUserComponent({ setUser, setIsLoggedIn }) {
  const [userInput, setUserInput] = useState("");

  const HandleLogin = (userInput) => {
    if (userInput !== "") {
      setUser(userInput);
      setIsLoggedIn(true);
    }
  };
  return (
    <form action="" className="Form-Acessar">
      <input
        required
        className="Input-Name"
        value={userInput}
        onChange={(e) => setUserInput(e.target.value)}
        placeholder="Digite seu Nome"
      ></input>
      <button
        onClick={() => HandleLogin(userInput)}
        className="Button Button--Acessar"
      >
        Acessar
      </button>
    </form>
  );
}
export default GetUserComponent;
