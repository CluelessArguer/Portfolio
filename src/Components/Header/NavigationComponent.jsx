import styles from "./Header.module.css";
import LinkComponent from "./LinkComponent.jsx";
import { navLinks } from "../../constants.js";
import ColorPickerComponent from "./ColorPickerComponent.jsx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faX } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

const NavigationComponent=()=>{
    const [menuOn, setMenuOn]=useState(0);
    const setHamburgerMenuOn=()=>{
        setMenuOn(prev=>prev?0:1);
    }
    
    return(
        <div className={styles.nav_bar}>
            <div className={styles.nav_initials}>
                M
            </div>
            <div className={`${styles.nav_links}`}>
                {
                    navLinks.map((link,index)=>{
                        return (
                            <LinkComponent key={index} number={link.number} title={link.name} href={link.href}/>
                        )
                    })
                }
                <ColorPickerComponent/>
            </div>
            <FontAwesomeIcon className={styles.hamburger_menu} icon={faBars} onClick={setHamburgerMenuOn} size="2xl" />
            {
                menuOn?
                <div className={`${styles.mobile_nav_links}`}>
                    <FontAwesomeIcon className={styles.close_menu} icon={faX} size="xl" onClick={setHamburgerMenuOn} />
                    {
                        navLinks.map((link,index)=>{
                            return (
                                <LinkComponent key={index} number={link.number} title={link.name} href={link.href}/>
                            )
                        })
                    }
                    <ColorPickerComponent/>
                </div>:""
            }
        </div>
    )
}

export default NavigationComponent;