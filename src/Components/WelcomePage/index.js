import "./style.css";
function WelcomePage({ user, setIsLoggedIn }) {
  const HandleLogout = () => {
    setIsLoggedIn(false);
  };
  return (
    <div>
      <h2>Bem Vindo {user} </h2>
      <button className="Button Button--Logout" onClick={HandleLogout}>
        Logout
      </button>
    </div>
  );
}
export default WelcomePage;
