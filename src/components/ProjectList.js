import React from 'react'
import { projects } from '../data/projects';
import { Link } from 'react-router';

export const ProjectList = ({limit}) => {

    const projectImagesPath = "/images/projects/";

    return (
        <section className='projects'>
            {
                projects.slice(0, limit).map(project => (
                    <article key={project.id} className='project-item'>
                        <div className='mask'>
                            <img src={projectImagesPath + project.id + ".png"} alt="project" />
                        </div>

                        <span>{project.categories}</span>
                        
                        <h2><Link to={"/proyecto/" + project.id}>{project.name}</Link></h2>
                        
                        <h3>{project.technologies}</h3>
                    </article>
                ))
            }
        </section>
    )
}
