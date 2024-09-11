import { useState } from "react"
import { NavLink } from "react-router-dom"

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  const toggleDropdown = () => {
    setIsOpen(!isOpen)
  }

  return (
    <header>
      <div className="container">
        <div className="header-content">
          <div className="branding">
            <img src="/icon.png" alt="logotipo" />
            <h1>NUQUITO STYLE</h1>
          </div>

          <nav className="navbar">
            <div className="dropdown">
              <button onClick={toggleDropdown} className="dropbtn">
                ☰
              </button>
              <div className={`nav-links ${isOpen ? "show" : ""}`}>
                <NavLink
                  to="/"
                  className={({ isActive }) => (isActive ? "active-link" : "inactive-link")}
                >
                  Home
                </NavLink>
                <NavLink
                  to="/products"
                  className={({ isActive }) => (isActive ? "active-link" : "inactive-link")}
                >
                  Productos
                </NavLink>
                <NavLink
                  to="/favorites"
                  className={({ isActive }) => (isActive ? "active-link" : "inactive-link")}
                >
                  Favoritos
                </NavLink>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </header>
  )
}
