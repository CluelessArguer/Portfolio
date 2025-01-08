import styles from "./Navigation.module.css";

const NavigationComponent=()=>{
    return(
        <div>
            <a className={`${styles.home_link} ${styles.header_link}`}>Home</a>
            <a className={`${styles.skill_link} ${styles.header_link}`}>Skills</a>
            <a className={`${styles.experience_link} ${styles.header_link}`}>Experience</a>
            <a className={`${styles.project_link} ${styles.header_link}`}>Projects</a>
        </div>
    )
}

export default NavigationComponent;