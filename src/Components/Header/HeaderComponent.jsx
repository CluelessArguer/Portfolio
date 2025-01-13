import styles from "./Header.module.css";
import NavigationComponent from "./NavigationComponent";
import SocialIconsComponent from "./SocialIconsComponents";
import HeaderTitlesComponent from "./HeaderTitlesComponent";

const HeaderComponent=()=>{
    return (
        <div className={styles.header}>
            <NavigationComponent/>
            <div className={styles.header_social_titles}>
                <SocialIconsComponent/>
                <HeaderTitlesComponent/>
            </div>
        </div>
    )
}

export default HeaderComponent;
