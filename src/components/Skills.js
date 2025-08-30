import React from 'react'
import skillsIcon from '../assets/icons/skills-icon.png'
import { skills } from '../data/skills';

export const Skills = () => {

	const pathImages = "../../public/images/skills/";

	return (
		<div className='page'>
			<div className='title-container-head'>
				<img src={skillsIcon} className='icon-title' alt='icon' />
				<h1 className='heading'>Tecnologías</h1>
			</div>

			<section className='skills'>
				{skills.map(skill => (
					<div className='skill-container  special-border'>
						<img src={pathImages + skill.file} className='icon-skill' alt='skill' />
						<span className='label-skill'>{skill.name}</span>
					</div>
				))}
			</section>
		</div>
	)
}
