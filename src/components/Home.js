import React from 'react'
import { Link } from 'react-router'
import { ProjectList } from './ProjectList'
import projectIcon from '../assets/icons/projects-icon.png'

export const Home = () => {
	return (
		<div className='home'>
			<div className='introduction-home'>
				<div className='container-image'>
					<img src='/images/foto_personal.JPG' className='special-border' alt='alejandro medina manzano' />
				</div>
				<h1>
					Soy <strong>Alejandro Medina</strong>, ingeniero informático residente en Granada (España),
					especializado en el <strong>desarrollo de software</strong> con un enfoque particular
					en el <strong>desarrollo web</strong>.<br/><br/>
					Me apasiona crear soluciones prácticas, intuitivas y eficientes, cuidando la experiencia del usuario. Mi objetivo es seguir creciendo como profesional, aplicando mis
					conocimientos a través de nuevos retos dentro de un equipo. 
				</h1>
			</div>

			<h2 className='title'>
				Actualmente estoy abierto a nuevas oportunidades profesionales. <Link to="/contacto">Contacta conmigo</Link>
			</h2>

			<section className='last-works'>
				<div className='title-container'>
					<img src={projectIcon} className='icon' alt='icon'/>
					<h2 className='heading'>Algunos de mis proyectos</h2>
				</div>
				<p>Estos son algunos de mis trabajos de desarrollo web</p>

				<ProjectList limit="3" />
			</section>
		</div>
	)
}
