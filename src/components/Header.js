import logo from "../images/logo.svg"

function Header () {
    return (
    <header className="header">
      <a href="#root">
        <img
          src={logo}
          alt="Логотип"
          className="header__logo"
        />
      </a>
    </header>
    )
}

export default Header;