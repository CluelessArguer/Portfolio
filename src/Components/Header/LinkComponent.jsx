import styles from "./Header.module.css";

const LinkComponent=({number,title,href})=>{
    return(
    <a className={`${styles.nav_link}`} href={href}>
        <span className={styles.numbering_link}>{number}</span>
            {title}
        </a>
    )
}

export default LinkComponent;