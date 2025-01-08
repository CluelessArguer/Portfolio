import styles from "./Header.module.css";
import NavigationComponent from "./NavigationComponent";
import SocialIconsComponent from "./SocialIconsComponents";

const HeaderComponent=()=>{
    return (
        <div className={styles.header}>
            <div className={styles.header_titles}>
                <h1 className={styles.title}>Marc Mansour</h1>
                <h2 className={styles.subtitle}>Front End Web Developer</h2>
                <p>I build digital experiences for the web for everyone to enjoy</p>
                <NavigationComponent/>
                <SocialIconsComponent/>
            </div>
          
        </div>
    )
}

export default HeaderComponent;
