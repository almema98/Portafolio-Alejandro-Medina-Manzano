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

export const MyRoutes = () => {
	return (
		<BrowserRouter>
			{/* HEADER Y NAVEGACIÓN */}
			<HeaderNav />

			{/* CONTENIDO CENTRAL */}
			<section className='content'>
				<Routes>
					<Route path='/' element={<Navigate to='/inicio' />} />
					<Route path='/inicio' element={<Home />} />
					<Route path='/portafolio' element={<Portfolio />} />
					<Route path='/tecnologias' element={<Skills />} />
					<Route path='/curriculum' element={<Resume />} />
					<Route path='/contacto' element={<Contact />} />
					<Route path='/proyecto/:id' element={<Project />} />
					<Route path='/Portafolio-Alejandro-Medina-Manzano' element={<Navigate to='/inicio' />} />
					<Route path='/error' element={
						<div className='page'>
							<h1 className='heading'>Error 404</h1>
						</div>}
					/>
					<Route path='*' element={<Navigate to="/error" />} />
				</Routes>
			</section>

			{/* FOOTER */}
			<Footer />
		</BrowserRouter>
	)
}
