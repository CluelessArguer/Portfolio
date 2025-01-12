import { projects } from "../../constants";
import styles from "./Projects.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import SimpleBar from 'simplebar-react';
import 'simplebar-react/dist/simplebar.min.css';
const ProjectComponent=()=>{
    return(
            <SimpleBar className={styles.project_container}>
            {
                projects.map((project,index)=>{
                    return(
                        <div key={index} className={styles.project_individual}>
                            <div className={styles.project_split}>
                                <h3 className={styles.project_name}>{project.name}</h3>
                                <h4 className={styles.project_date}>{project.date}</h4>
                                <div className={styles.project_skills}>
                                    {
                                        project.skills.map((skill,index)=>{
                                            return (
                                                <span key={index} className={styles.project_skill}>{skill}</span>
                                            )
                                        })
                                    }
                                </div>
                            </div>
                            <div className={styles.project_split_two}>
                                <p className={styles.project_description}>{project.body}</p>
                                <div className={styles.git_ext_icon}>
                                    <a className={styles.project_link} href={project.link} target="_blank">
                                        <FontAwesomeIcon icon={faArrowUpRightFromSquare} size="lg"/>
                                    </a>
                                    {
                                        project.github?
                                        <a className={styles.project_github} href={project.githubLink}>
                                            <FontAwesomeIcon icon={faGithub} size="xl"/>
                                        </a>
                                        :""
                                    }
                                </div>
                            </div>
                        </div>
                    )
                })
            }
            </SimpleBar>
    )
}

export default ProjectComponent;