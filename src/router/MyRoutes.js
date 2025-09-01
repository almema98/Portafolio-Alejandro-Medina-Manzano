import React from 'react'
import { Routes, Route, BrowserRouter, Navigate } from 'react-router';
import { Home } from '../components/Home';
import { Portfolio } from '../components/Portfolio';
import { Skills } from '../components/Skills';
import { Resume } from '../components/Resume';
import { Contact } from '../components/Contact';
import { HeaderNav } from '../components/layout/HeaderNav';
import { Footer } from '../components/layout/Footer';
import { Project } from '../components/Project';
import { Global } from '../helpers/Global';

export const MyRoutes = () => {

	const githubDirectory = Global.routerPath;

	return (
		<BrowserRouter>
			{/* HEADER Y NAVEGACIÓN */}
			<HeaderNav />

			{/* CONTENIDO CENTRAL */}
			<section className='content'>
				<Routes>
					<Route path='/' element={<Navigate to={githubDirectory + '/inicio'} />} />
					<Route path={githubDirectory + '/inicio'} element={<Home />} />
					<Route path={githubDirectory + '/portafolio'} element={<Portfolio />} />
					<Route path={githubDirectory + '/tecnologias'} element={<Skills />} />
					<Route path={githubDirectory + '/curriculum'} element={<Resume />} />
					<Route path={githubDirectory + '/contacto'} element={<Contact />} />
					<Route path={githubDirectory + '/proyecto/:id'} element={<Project />} />
					<Route path='/Portafolio-Alejandro-Medina-Manzano' element={<Navigate to='/' />} />
					<Route path={githubDirectory + '/error'} element={
						<div className='page'>
							<h1 className='heading'>Error 404</h1>
							<Navigate to='/'>Volver a la página principal</Navigate>
						</div>}
					/>
					<Route path='*' element={<Navigate to={githubDirectory + "/error"} />} />
				</Routes>
			</section>

			{/* FOOTER */}
			<Footer />
		</BrowserRouter>
	)
}
