import logo from "../assets/logo.png";

function Header() {
  return (
    <header>
      <img src={logo} alt="logo" className="imgLogo" />
      <h1 className="headerTitle">
        Test de différentes façons de rendre une map en JS
      </h1>
      <img src={logo} alt="logo" className="imgLogo" />
    </header>
  );
}

export default Header;
