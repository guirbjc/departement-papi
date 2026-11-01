import "./Header.css";
import { Link, NavLink } from "react-router-dom";

export default function HeaderApp() {
  return (
    <div id="header-container">
      {/* Conteneur logo */}
      <div className="logo-container">
        <img
          src={`${import.meta.env.BASE_URL}france4.png`}
          alt="Logo"
          className="logo-image"
        />
      </div>

      <Link className="h1-header" to="/">C'est quel département Papi ?</Link>

      <div className="header-buttons">
        <NavLink className="my-linkbutton full-link" to="/Dep">Les départements</NavLink>
        <NavLink className="my-linkbutton full-link" to="/Game">C'est quel département ?</NavLink>
      </div>
    </div>
  );
}
