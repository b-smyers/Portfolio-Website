import { project_data } from "../../data/project-data.js";
import "./page.css";
import "../../common.css";

export default function Page({params}) {
    const project = getProject(params.id);
    const images = project.srcs;

    const image_entries = project.srcs.map((src, index) =>
        <li key={index}>
            <img className="Image-Entry img-cover round" src={src} alt=""/>
        </li>
    );

    return (
        <div className="window">
            <div className="Project-Panel flex-row padding-20">
                <div className="Image-Panel flex-2 soft-box">
                    <ul className="Image-List padding-10">{image_entries}</ul>
                </div>
                <div className="soft-box flex-4 flex-column padding-10">
                    <h1 className="title">{project.name}</h1>
                    <i className="text">{project.timeFrame}</i>
                    <div className="Pad-Below flex-row">
                        <i className="flex-1 text-left text">{project.role}</i>
                        <a className="flex-1 text-right text" href={project.link}>Project Link</a>
                    </div>
                    <div className="Pad-Below">
                        <h2 className="subtitle">Brief</h2>
                        <p className="text">{project.brief}</p>
                    </div>
                    <div className="Pad-Below">
                        <h2 className="subtitle">My story</h2>
                        <p className="text">{project.long_description}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

function getProject(id) {
    // Bad solution
    return project_data[id];
}

export async function generateStaticParams() {
    return project_data.map((project) => ({
        id: project.id.toString(),
        project: {project}
    }));
}