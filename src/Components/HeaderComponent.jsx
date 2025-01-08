import styles from "./Header.module.css";

const HeaderComponent=()=>{
    return (
        <div className={styles.header}>
            <div className={styles.header_titles}>
                <h1 className={styles.title}>Marc Mansour</h1>
                <h2 className={styles.subtitle}>Front End Web Developer</h2>
                <p>Aspiring Web Developer</p>
            </div>
        </div>
    )
}

export default HeaderComponent;
