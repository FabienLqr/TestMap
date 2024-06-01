import { NavLink, Outlet } from "react-router-dom";

function NavBar() {
  return (
    <>
      <nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/map">Map</NavLink>
        <NavLink to="/leaflet">Leaflet Map</NavLink>
      </nav>
      <main>
        <Outlet />
      </main>
    </>
  );
}

export default NavBar;
