import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'
import style from './App.css'
function Layout() {
  return (
    <div>

                  <NavLink
                  
                    to={"/"}
                    className={({ isActive }) =>
                      isActive ? style.activeStyle : style.navLink
                    }
                  >
    
                  </NavLink>
                 

         <Outlet />
    </div>
  )
}

export default Layout