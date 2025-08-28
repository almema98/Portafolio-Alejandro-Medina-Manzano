import React from 'react'
import { ProjectList } from './ProjectList'
import portfolioIcon from '../assets/icons/portfolio-icon.png'

export const Portfolio = () => {
	return (
		<div className='page'>
			<div className='title-container-head'>
				<img src={portfolioIcon} className='icon-title' alt='icon' />
				<h1 className='heading'>Portafolio</h1>
			</div>

			<ProjectList />
		</div>
	)
}