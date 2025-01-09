import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faGithub, faLinkedin} from "@fortawesome/free-brands-svg-icons";
import {faEnvelope, faFileLines} from "@fortawesome/free-solid-svg-icons";
import styles from "./Header.module.css";

const SocialIconsComponent=()=>{
    const socialLinks=[
        {
            social:"Github",
            icon:faGithub
        },
        {
            social: "LinkedIn",
            icon:faLinkedin
        },
        {
            social:"Resume",
            icon:faFileLines
        }
    ];
    return(
        <div className={styles.social_links}>
            
            {
                socialLinks.map((social,index)=>{
                    return (
                        <FontAwesomeIcon className="icon" icon={social.icon} size="2xl"/>
                    )
                })
            }
        </div>
    )
}

export default SocialIconsComponent;