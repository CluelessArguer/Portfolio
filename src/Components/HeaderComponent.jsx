import styles from "./Header.module.css";
import NavigationComponent from "./NavigationComponent";
import SocialIconsComponent from "./SocialIconsComponents";

const HeaderComponent=()=>{
    return (
        <div 
        className={styles.header}
        >
            <NavigationComponent/>
            <div className={styles.header_social}>
            <SocialIconsComponent/>
            <div className={styles.header_titles}>
                <h1 className={styles.title}>Marc Mansour</h1>
                <h2 className={styles.subtitle}>Aspiring Web Developer</h2>
                <p className={styles.about}>
                    As a relatively newcomer to web development I hope my creations will provide
                    a smooth and fun experience to the user. In this regard, I strive to grow my skillset and knowledge
                    in web dev technologies.
                </p>

                <p className="mt-sm">
                    It is joy of mine to learn about web dev technologies and apply them!
                </p>
            </div>
            </div>
        </div>
    )
}

export default HeaderComponent;
