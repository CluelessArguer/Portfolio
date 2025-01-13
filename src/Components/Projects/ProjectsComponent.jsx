import styles from "./Projects.module.css";
import ProjectComponent from "./ProjectComponent";

const ProjectsComponent=()=>{
    return(
        <div id="projects" className={styles.project}>
            <div className={styles.project_outer}>
                <h2 className={styles.project_title}> 
                    <span className="accent_color">02.</span> Projects
                </h2>
                <ProjectComponent/>
            </div>
        </div>
    )
}

export default ProjectsComponent;