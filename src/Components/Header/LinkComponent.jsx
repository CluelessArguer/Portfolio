import styles from "./Header.module.css";

const LinkComponent=({number,title,href, menuon})=>{
    return(
    <a className={`${styles.nav_link}`} href={href} onClick={menuon}>
        <span className={styles.numbering_link}>{number}</span>
            {title}
        </a>
    )
}

export default LinkComponent;