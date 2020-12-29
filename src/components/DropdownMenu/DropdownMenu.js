import React, { useRef } from "react";
import "./DropdownMenu.css";
import { useDetectOutsideClick } from "./useDetectOutsideClick";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars,faSignInAlt} from '@fortawesome/free-solid-svg-icons';

const DropdownMenu = ()=>{
    const dropdownRef = useRef(null);
    const [isActive, setIsActive] = useDetectOutsideClick(dropdownRef, false);
    const onClick = () => setIsActive(!isActive);
    return (
      <div className="menu-container">
        <button onClick={onClick} className="menu-trigger">
        <FontAwesomeIcon className ='font-awesome' icon={faBars} />
        </button>
        <button onClick={onClick} className="sign-in">
        <FontAwesomeIcon className ='font-awesome' icon={faSignInAlt} />
        </button>
        <nav
          ref={dropdownRef}
          className={`menu ${isActive ? "active" : "inactive"}`}
        >
          <ul>
            <li>
              <a href="/">Projects</a>
            </li>
            <li>
              <a href="/">Apps</a>
            </li>
            <li>
              <a href="/">Contact</a>
            </li>
          </ul>
        </nav>
      </div>
    );
   
  }
  export default DropdownMenu;
    