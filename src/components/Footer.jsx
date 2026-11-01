import "./Footer.css";
import { Link } from "react-router-dom";

export default function Footer() {
    return (
        <div id="footer-container">
            <div>
               <Link className="h3-footer" to="/">Guilhem Rebéjac © 2025</Link>
            </div>
        </div>
    );
}