import styles from "./Navigation.module.css";

const NavigationComponent=()=>{
    return(
        <div className={styles.header_links}>
            <a className={`${styles.home_link} ${styles.header_link}`}>
                <span className={styles.number_link}>01.</span>
                About
            </a>
            <a className={`${styles.skill_link} ${styles.header_link}`}>
            <span className={styles.number_link}>02.</span>
                Experience
            </a>
            <a className={`${styles.experience_link} ${styles.header_link}`}>
                <span className={styles.number_link}>03.</span>
                Projects
            </a>
            <a className={`${styles.project_link} ${styles.header_link}`}>
                <span className={styles.number_link}>04.</span>
                Skills
            </a>
            <a className={`${styles.project_link} ${styles.header_link}`}>
                <span className={styles.number_link}>05.</span>
                Contact
            </a>
        </div>
    )
}

export default NavigationComponent;