import { Outlet } from 'react-router-dom';
import '../styles/layout.scss';

export default function Navbar() {
  return (
    <>
      <nav data-testid="navbar" className="navbar">
        <h1 className="navbar__h1">Math Magicians</h1>
        <ul className="navbar__ul">
          <li className="navbar__li">
            <a className="navbar__a" href="http://localhost:3000/">
              Home
            </a>
          </li>
          <li className="navbar__li">
            <a className="navbar__a" href="http://localhost:3000/calculator">
              Calculator
            </a>
          </li>
          <li className="navbar__li">
            <a className="navbar__a" href="http://localhost:3000/quote">
              Quote
            </a>
          </li>
        </ul>
      </nav>
      <Outlet />
    </>
  );
}
