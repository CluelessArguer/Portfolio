import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faGithub, faLinkedin} from "@fortawesome/free-brands-svg-icons";
import {faEnvelope, faFileLines} from "@fortawesome/free-solid-svg-icons";

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
            social:"Email",
            icon:faEnvelope
        },
        {
            social:"Resume",
            icon:faFileLines
        }
    ];
    return(
        <div>
            {
                socialLinks.map((social,index)=>{
                    return (
                        <FontAwesomeIcon className="icon" icon={social.icon} size="xl"/>
                    )
                })
            }
        </div>
    )
}

export default SocialIconsComponent;