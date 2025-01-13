import styles from "./Footer.module.css";

const FooterComponent=()=>{
    return(
        <footer className={styles.footer}>
            Developed by 
            <span className={styles.name}> Marc Mansour</span>
            <span className="accent_color"> 2025</span>
        </footer>
    )
}

export default FooterComponent;