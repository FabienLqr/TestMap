import logoGithub from "../assets/github.svg";
import logoLinkedin from "../assets/linkedin.svg";

function Footer() {
  return (
    <>
      <footer>
        <p>Fabien</p>
        <a href="https://github.com/FabienLqr" className="hrefGithub">
          <img className="logoGithub" src={logoGithub} alt="logo github"></img>
        </a>
        <a
          href="https://www.linkedin.com/in/fabien-laquerriere/"
          className="hrefGithub"
        >
          <img
            className="logoGithub"
            src={logoLinkedin}
            alt="logo github"
          ></img>
        </a>
      </footer>
    </>
  );
}

export default Footer;
