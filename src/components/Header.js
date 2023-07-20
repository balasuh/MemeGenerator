import logo from '../troll-face.png';


function Header() {
    return (
      <div className="app-header">
        <div className="header-left">
            <img src={logo} className="app-logo" alt="logo" />
            <h1>Meme Generator</h1>
        </div>
        <div className="header-right">
            <h2>React Demo Project</h2>
        </div>
      </div>
    );
  }

  export default Header;