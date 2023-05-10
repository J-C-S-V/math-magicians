import { Outlet, Link } from 'react-router-dom';
import '../styles/layout.scss';

export default function Navbar() {
  return (
    <>
      <nav data-testid="navbar" className="navbar">
        <h1 className="navbar__h1">Math Magicians</h1>
        <ul className="navbar__ul">
          <li className="navbar__li">
            <Link className="navbar__a" to="/">
              Home
            </Link>
          </li>
          <li className="navbar__li">
            <Link className="navbar__a" to="/calculator">
              Calculator
            </Link>
          </li>
          <li className="navbar__li">
            <Link className="navbar__a" to="/quote">
              Quote
            </Link>
          </li>
        </ul>
      </nav>
      <Outlet />
    </>
  );
}
