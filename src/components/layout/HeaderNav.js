import React from 'react'
import { NavLink } from 'react-router'
import { Global } from '../../helpers/Global'

export const HeaderNav = () => {
    return (
        <header className='header'>
            <nav className='nav'>
                <div className='nav__container'>

                    <figure className='nav__figure'>
                        <div className='nav__logo'>
                            <span className='logo-A'>A</span>
                            <h3>Alejandro Medina Manzano</h3>
                        </div>
                    </figure>

                    <label className='nav__toggle'>
                        <input type='checkbox' id='menu-input' className='nav__input' />
                    </label>

                    <ul className='nav__list'>
                        <li className='nav__item'>
                            <NavLink to={Global.routerPath + '/inicio'} className={({ isActive }) => isActive ? "nav__link active" : "nav__link"}>Inicio</NavLink>
                        </li>
                        <li className='nav__item'>
                            <NavLink to={Global.routerPath + '/portafolio'} className={({ isActive }) => isActive ? "nav__link active" : "nav__link"}>Portafolio</NavLink>
                        </li>
                        <li className='nav__item'>
                            <NavLink to={Global.routerPath + '/tecnologias'} className={({ isActive }) => isActive ? "nav__link active" : "nav__link"}>Tecnologías</NavLink>
                        </li>
                        <li className='nav__item'>
                            <NavLink to={Global.routerPath + '/curriculum'} className={({ isActive }) => isActive ? "nav__link active" : "nav__link"}>Curriculum</NavLink>
                        </li>
                        <li className='nav__item'>
                            <NavLink to={Global.routerPath + '/contacto'} className={({ isActive }) => isActive ? "nav__link active" : "nav__link"}>Contacto</NavLink>
                        </li>
                    </ul>
                </div>
            </nav>
        </header>
    )
}
