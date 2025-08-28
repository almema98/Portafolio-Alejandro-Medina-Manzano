import React from 'react'
import contactIcon from '../assets/icons/contact-icon.png'
import gmailImage from '../assets/icons/gmail-contact.png'
import linkedinImage from '../assets/icons/linkedin-contact.png'
import githubImage from '../assets/icons/github-contact.png'
import { Link } from 'react-router'

export const Contact = () => {
	return (
		<div className='page'>
			<div className='title-container-head'>
				<img src={contactIcon} className='icon-title' alt='icon' />
				<h1 className='heading'>Contacto</h1>
			</div>

			<section className='contact'>
				<div className='description-contact'>
					<p>
						Acutalmente me encuentro en búsqueda de mi primera oportunidad profesional en el
						ámbito del desarrollo de software. Aunque mi especialización es el desarrollo web,
						me mantengo abierto a explorar diferentes áreas dentro del sector.
					</p>
					<p>
						Si deseas ponerte en contacto conmigo para colaborar o comentar posibles oportunidades,
						¡estaré encantado de escucharte!
					</p>
				</div>
				<div className='social-contact'>
					<Link to='mailto:almema98@gmail.com'>
						<img src={gmailImage} className='icon-contact special-border' alt='gmail' />
					</Link>
					<Link to='https://www.linkedin.com/in/alejandro-medina-manzano' target='_blank'>
						<img src={linkedinImage} className='icon-contact special-border' alt='linkedin' />
					</Link>
					<Link to='https://www.github.com/almema98' target='_blank'>
						<img src={githubImage} className='icon-contact special-border' alt='github' />
					</Link>
				</div>
			</section>
		</div>
	)
}
