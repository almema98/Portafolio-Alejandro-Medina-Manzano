import React from 'react'
import { NavLink } from 'react-router'

export const HeaderNav = () => {
  return (
    <header className='header'>
        <div className='logo'>
            <span className='logo-A'>A</span>
            <h3>Alejandro Medina Manzano</h3>
        </div>
        <nav>
            <ul>
                <li>
                    <NavLink to='/inicio' className={({isActive}) => isActive ? "active" : ""}>Inicio</NavLink>
                </li>
                <li>
                    <NavLink to='/portafolio' className={({isActive}) => isActive ? "active" : ""}>Portafolio</NavLink>
                </li>
                <li>
                    <NavLink to='/tecnologias' className={({isActive}) => isActive ? "active" : ""}>Tecnologías</NavLink>
                </li>
                <li>
                    <NavLink to='/curriculum' className={({isActive}) => isActive ? "active" : ""}>Curriculum</NavLink>
                </li>
                <li>
                    <NavLink to='/contacto' className={({isActive}) => isActive ? "active" : ""}>Contacto</NavLink>
                </li>
            </ul>
        </nav>
    </header>
  )
}
