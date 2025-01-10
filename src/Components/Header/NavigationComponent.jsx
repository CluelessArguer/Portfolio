import styles from "./Header.module.css";
import LinkComponent from "./LinkComponent.jsx";
import { navLinks } from "../../constants.js";
import ColorPickerComponent from "./ColorPickerComponent.jsx";

const NavigationComponent=()=>{

    return(
        <div className={styles.nav_bar}>
            <div className={styles.nav_initials}>
                M
            </div>
            <div className={styles.nav_links}>
                {
                    navLinks.map((link,index)=>{
                        return (
                            <LinkComponent key={index} number={link.number} title={link.name} href={link.href}/>
                        )
                    })
                }
                <ColorPickerComponent/>
            </div>
        </div>
    )
}

export default NavigationComponent;