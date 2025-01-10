import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from "./Header.module.css";
import { socialLinks } from '../../constants';

const SocialIconsComponent=()=>{

    return(
        <div className={styles.header_social}>
            <div className={styles.social_links}>
                {
                    socialLinks.map((social,index)=>{
                        return (
                            <FontAwesomeIcon key={index} className="icon" icon={social.icon} size="2xl"/>
                        )
                    })
                }
            </div>
            <div className={styles.line}></div>
        </div> 
    )
}

export default SocialIconsComponent;