import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import { projects } from '../data/projects';

export const Project = () => {

    const [project, setProyecto] = useState({});
    const params = useParams();

    // Get the data project.
    useEffect(() => {
        let projectFilter = projects.filter(project => project.id === params.id);
        setProyecto(projectFilter[0]);
    }, [params.id]);

    return (
        <section className='page page-project'>
            <div className='mask'>
                <img src={"/images/" + project.id+".png"} alt='proyect'/>
            </div>

            <h1 className='heading'>Proyecto: {project.name}</h1>
            
            <p>{project.technologies}</p>
            
            <p>{project.description}</p>
            
            <a href={"https://" + project.url} target="_blank" rel='noreferrer'>Ir al proyecto</a>
        </section>
    )
}
