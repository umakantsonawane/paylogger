import "../styles/navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <h2>💰 PayLogger</h2>

      <div className="nav-links">
        <span>Dashboard</span>
        <span>Transactions</span>
        <span>Reports</span>
      </div>
    </nav>
  );
}

export default Navbar;