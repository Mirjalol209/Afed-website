import "./header.css";

function Header() {
  return (
    <div className="header">
      <div className="header__logo">
        <h1>
          <u>A</u>FED<span>Group</span>
        </h1>
      </div>
      <div className="header__menu"></div>
      <div className="header__contact"></div>
    </div>
  );
}

export default Header;
