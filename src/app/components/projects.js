import Link from 'next/link.js';
import { project_data } from '../data/project-data.js';
import './projects.css';
import '../common.css';

export default function Projects() {
    const project_entries = project_data.map(project =>
        <li key={project.id}>
            <div className='Project-Entry soft-box'>
                <div className='Project-Image'>
                    <Link href={`/projects/${project.id}`}>
                        <img className='round img-cover' src={project.srcs[0]} alt={project.name}/>
                    </Link>
                </div>
                <div class='Project-Details'>
                    <Link href={`/projects/${project.id}`}>
                        <h2 className='Project-Name title'>{project.name}</h2>
                    </Link>
                    <i className='Project-Role text'>{project.role}</i>
                    <p className='Project-Brief text'>{project.brief}</p>
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