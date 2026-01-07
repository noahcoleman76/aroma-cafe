import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

export default function Navbar({ phoneDisplay, phoneTel }) {
  return (
    <div className="nav">
      <div className="container navInner">
        <Link to="/" className="brand" aria-label="Aroma Cafe Home">
          <img src={logo} alt="Aroma Cafe logo" />
          <div className="brandText">
            <div className="brandName">Aroma Cafe</div>
          </div>
        </Link>

        <div className="navRight">
          <Link className="btn btnPrimary" to="/menu">
            Menu
          </Link>
          <a className="chip" href={phoneTel} aria-label="Call Aroma Cafe">
            {phoneDisplay}
          </a>
        </div>
      </div>
    </div>
  );
}
