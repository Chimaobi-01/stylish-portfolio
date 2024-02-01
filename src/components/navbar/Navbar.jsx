import { NavLink } from "react-router-dom"
import { links } from '../../data'
import './navbar.scss'
import { useState } from "react"


const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false)

  return (
    <nav>

      <div className={`${showMenu ? "nav_menu show_menu" : "nav_menu"}`}>

        <ul className="nav_list">
          {
            links.map(link => (
              <li key={link.id}>
                <NavLink 
                  to={link.path} 
                  className={({ isActive }) => isActive ? 'nav_link active_nav' : 'nav_link'}
                  onClick={() => setShowMenu(!showMenu)}
                  >
                  {link.icon}
                  <h3 className="nav_name">{link.name}</h3>
                </NavLink>
              </li>
            ))
          }
        </ul>

      </div>

      <div className={`${showMenu ? "nav_toggle animate_toggle" : "nav_toggle"}`} onClick={() => setShowMenu(!showMenu)}>
        <span></span>
        <span></span>
        <span></span>
      </div>

    </nav>
  )
}

export default Navbar