import styles from "./Contact.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faReact, faGit, faGithub, faHtml5, faCss, faJs } from "@fortawesome/free-brands-svg-icons";
import { faUserAstronaut, faMobile } from "@fortawesome/free-solid-svg-icons";
import { Tooltip } from 'react-tooltip';

const ContactComponent=()=>{
    return(
        <div id="get-in-touch" className={styles.contact}>
            <h2 className={styles.contact_title}>
                <span className="accent_color">03.</span> Get in Touch
            </h2>
            <p>Feel free to send me an email regarding any and all inquiries!</p>
            <div className={styles.icons}>
                <FontAwesomeIcon className={styles.icon} icon={faHtml5} size="xl" data-tooltip-id="html-tooltip" data-tooltip-content="Html5"/>
                <FontAwesomeIcon className={styles.icon} icon={faCss} size="xl" data-tooltip-id="css-tooltip" data-tooltip-content="CSS"/>
                <FontAwesomeIcon className={styles.icon} icon={faJs} size="xl" data-tooltip-id="js-tooltip" data-tooltip-content="JavaScript"/>
                <FontAwesomeIcon className={styles.icon} icon={faReact} size="xl" data-tooltip-id="react-tooltip" data-tooltip-content="React"/>
                <FontAwesomeIcon className={styles.icon} icon={faUserAstronaut} size="xl" data-tooltip-id="astro-tooltip" data-tooltip-content="Astro"/>
                <FontAwesomeIcon className={styles.icon} icon={faGit} size="xl" data-tooltip-id="git-tooltip" data-tooltip-content="Git"/>
                <FontAwesomeIcon className={styles.icon} icon={faGithub} size="xl" data-tooltip-id="github-tooltip" data-tooltip-content="Github"/>
                <FontAwesomeIcon className={styles.icon} icon={faMobile} size="xl" data-tooltip-id="mobile-tooltip" data-tooltip-content="Responsive Design"/>
                <Tooltip id="html-tooltip" />
                <Tooltip id="css-tooltip" />
                <Tooltip id="js-tooltip" />
                <Tooltip id="react-tooltip" />
                <Tooltip id="astro-tooltip" />
                <Tooltip id="git-tooltip" />
                <Tooltip id="github-tooltip" />
                <Tooltip id="mobile-tooltip" />

            </div>
            <a className={styles.contact_button} href="mailto:webdev.design.code@gmail.com">Get in Touch</a>
        </div>
    )
}

export default ContactComponent;