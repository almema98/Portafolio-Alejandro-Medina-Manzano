import React from 'react'
import resumeIcon from '../assets/icons/resume-icon.png'
import { Link } from 'react-router'

export const Resume = () => {
  return (
    <div className='page'>
			<div className='title-container-head'>
				<img src={resumeIcon} className='icon-title' alt='icon' />
				<h1 className='heading'>Currículum Vitae</h1>
			</div>

			<section className='resume'>
				<div className='resume-container'>
					<img src='/images/curriculum.png' className='special-border' alt='cv' />
				</div>

				<Link to={'https://www.google.es'} className='link-download-resume'>
					<button className='button-resume'>Descargar CV</button>
				</Link>
			</section>
		</div>
  )
}
