import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { CgMenu } from "react-icons/cg";
import Logo from "../../assets/rickandmorty-logo.svg";
import "./styles.scss";

const Header = () => {
  const [isActiveMenu, setIsActiveMenu] = useState(false);

  return (
    <div>
      <div className="main-header">
        <div className="header-img-buttons">
          <img src={Logo} />
          <div className="header-buttons">
            <button>Characters</button>
            <button>Episodes</button>
            <button>Locations</button>
          </div>
          <div className="header-buttons-mobile">
            <button>
              <CgMenu
                className="ham-icon"
                onClick={() => setIsActiveMenu(!isActiveMenu)}
              />
            </button>
          </div>
        </div>
      </div>

      {isActiveMenu && (
        <div className="nav-buttons-mobile">
          <button>Characters</button>
          <button>Episodes</button>
          <button>Locations</button>
        </div>
      )}
    </div>
  );
};

export default Header;
