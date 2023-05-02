import { Outlet } from 'react-router-dom';
import '../styles/layout.scss';

export default function Layout() {
  return (
    <>
      <nav className="navbar">
        <h1 className="navbar__h1">Math Magicians</h1>
        <ul className="navbar__ul">
          <li className="navbar__li"><a className="navbar__a" href="https://github.com/microverseinc/curriculum-react-redux/blob/main/math-magicians/project_full_website_v2.md">Home</a></li>
          <li className="navbar__li"><a className="navbar__a" href="https://github.com/microverseinc/curriculum-react-redux/blob/main/math-magicians/project_full_website_v2.md">Calculator</a></li>
          <li className="navbar__li"><a className="navbar__a" href="https://github.com/microverseinc/curriculum-react-redux/blob/main/math-magicians/project_full_website_v2.md">Quote</a></li>
        </ul>
      </nav>
      <Outlet />
    </>
  );
}
