import React from 'react'
import { Link } from 'react-router'
import { ProjectList } from './ProjectList'

export const Home = () => {
	return (
		<div className='home'>
			<h1>
				Hola, soy <strong>Alejandro Medina</strong> y soy Desarrollador Web en Granada.
				Ofrezco mis servicios de <strong>programación</strong> y <strong>desarrollo</strong> en
				todo tipo de proyectos web.
			</h1>

			<h2 className='title'>
				Te ayudo a crear tu sitio o aplicación web, tener más
				visibilidad y relevancia en Internet. <Link to="/contacto">Contacta conmigo.</Link>
			</h2>

			<section className='last-works'>
				<h2 className='heading'>Algunos de mis proyectos</h2>
				<p>Estos son algunos de mis trabajos de desarrollo web</p>

				<ProjectList limit="3" />
			</section>
		</div>
	)
}
