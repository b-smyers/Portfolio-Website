import { project_data } from '../data/project-data.js';
import './projects.css';

export default function Projects() {
    const project_entries = project_data.map(project =>
        <li key={project.id}>
            <div className='Project-Entry'>
                <div className='Project-Image'>
                    <img className='Project-Thumbnail' src={project.src} alt={project.name}/>
                </div>
                <div class='Project-Details'>
                    <h2 className='Project-Name'>{project.name}</h2>
                    <i className='Project-Role'>{project.role}</i>
                    <p className='Project-Brief'>{project.brief}</p>
                </div>
            </div>
        </li>
    );

    return (
        <div className='Project-List'>
            <ul>{project_entries}</ul>
        </div>
    );
}