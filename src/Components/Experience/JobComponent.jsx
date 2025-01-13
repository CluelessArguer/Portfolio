import { jobs } from "../../constants";
import styles from "./Experience.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquareCaretRight } from "@fortawesome/free-solid-svg-icons";

const JobComponent=({rangeValue})=>{
    return(
        <div className={styles.job_experience}>
        {
            jobs.map((job,index)=>{
                if(job.max>=rangeValue && job.min<=rangeValue){
                    return (
                        <div key={index}>
                        <h3 className={styles.job_title}>{job.job}</h3>
                        <h4 className={styles.job_location}>{job.location}</h4>
                        <h5 className={styles.job_date}>{job.date}</h5>
                        <ul className={`${styles.job_description} fa-ul`}>
                            <li className={styles.job_desc_item}><span className="fa-li"><FontAwesomeIcon icon={faSquareCaretRight} /></span>{job.body[0]}</li>
                            {   
                                job.max!=2023.9?
                                <>
                                    <li className={styles.job_desc_item}><span className="fa-li"><FontAwesomeIcon icon={faSquareCaretRight} /></span>{job.body[1]}</li>
                                    <li className={styles.job_desc_item}><span className="fa-li"><FontAwesomeIcon icon={faSquareCaretRight} /></span>{job.body[2]}</li>
                                </>:""
                            }
                        </ul>
                        <div className={styles.job_skills}>
                        {
                            job.skills.map((skill,index)=>{
                                return(
                                    <span key={index} className={styles.job_skill}>{skill}</span>
                                )
                            })
                        }
                        </div>
                    </div>
                    )
                }
            })
        }
    </div>
       
    )
}

export default JobComponent;