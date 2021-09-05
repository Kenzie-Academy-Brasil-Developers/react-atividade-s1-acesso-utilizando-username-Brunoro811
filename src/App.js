import { useState } from "react";
import "./App.css";
import GetUserComponent from "./Components/GetUserComponent";
import WelcomePage from "./Components/WelcomePage";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState("");
  return (
    <div className="App App-header">
      {isLoggedIn ? (
        <WelcomePage user={user} setIsLoggedIn={setIsLoggedIn} />
      ) : (
        <GetUserComponent setUser={setUser} setIsLoggedIn={setIsLoggedIn} />
      )}
    </div>
  );
}

export default App;
