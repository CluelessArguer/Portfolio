import styles from "./Navigation.module.css";
import SocialIconsComponent from "./SocialIconsComponents";
import {AlphaPicker, BlockPicker, ChromePicker} from 'react-color';
import { useState } from "react";
import { setThemeColor,setHeadingColor,setTextColor,setAccentColor } from "../stores.ts";
import { faPalette } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
const NavigationComponent=()=>{
    const [colorPicker, setColor]=useState({hex:"#000"});
    const [onPicker,setBoolPicker]=useState(0);
    const [currentColor, setCurrentColor]=useState("Theme");
    const [onColorDropdown,setColorDropdownOn]=useState(0);
    const changeColor=(color)=>{
        if(currentColor=="Theme")
            setThemeColor(color.hex);
        else if(currentColor=="Heading")
            setHeadingColor(color.hex);
        else if(currentColor=="Text")
            setTextColor(color.hex);
        else
            setAccentColor(color.hex);

        setColor(color);
        
    }
    return(
        <div 
        className={styles.header_links}
        >
            <div className={styles.initials}>
                M
            </div>
            <div class={styles.links}>
                <a className={`${styles.skill_link} ${styles.header_link}`} href="#">
                <span className={styles.number_link}>01.</span>
                    Experience
                </a>
                <a className={`${styles.experience_link} ${styles.header_link}`} href="#">
                    <span className={styles.number_link}>02.</span>
                    Projects
                </a>
                <a className={`${styles.project_link} ${styles.header_link}`} href="#">
                    <span className={styles.number_link}>03.</span>
                    Skills
                </a>
                <a className={`${styles.project_link} ${styles.header_link}`} href="#">
                    <span className={styles.number_link}>04.</span>
                    Contact
                </a>
                <a className={`${styles.resume_link} ${styles.header_link}`} href="#">
                    <span className={styles.number_link}>05.</span>
                    Resume
                </a>
                <div className={styles.color_picker}>
                    <FontAwesomeIcon onClick={()=>setBoolPicker(prev=>prev?0:1)} icon={faPalette} size="xl" />
                    {onPicker?
                    <>
                    <ChromePicker
                        className={styles.chrome_picker}
                        color={colorPicker}
                        onChange={changeColor}
                        onChangeComplete={changeColor}
                        disableAlpha={true}
                    />
                    <ul className={styles.color_list}>
                        <li className={styles.list_flex} value={currentColor} onClick={()=>setColorDropdownOn(prev=>prev?0:1)}>
                            <span>{currentColor} Color </span>
                            <FontAwesomeIcon icon={faChevronDown} />
                        </li>
                        {
                            onColorDropdown?
                            <>
                            {
                            currentColor!="Theme"?
                            <li data-value="Theme" onClick={(e)=>{
                                setCurrentColor(e.target.attributes[0].nodeValue);
                                setColorDropdownOn(prev=>prev?0:1);
                            }}>Theme Color</li>:""
                            }
                            {
                                 currentColor!="Text"?
                            <li data-value="Text" onClick={(e)=>{
                                setCurrentColor(e.target.attributes[0].nodeValue);
                                setColorDropdownOn(prev=>prev?0:1);
                            }
                            }>Text Color</li>:""
                            }
                            {
                                currentColor!="Accent"?
                            <li data-value="Accent" onClick={(e)=>{
                                setCurrentColor(e.target.attributes[0].nodeValue);
                                setColorDropdownOn(prev=>prev?0:1);
                            }}>Accent Color</li>:""
                            }
                            {
                                 currentColor!="Heading"?
                            <li data-value="Heading" onClick={(e)=>{
                                setCurrentColor(e.target.attributes[0].nodeValue);
                                setColorDropdownOn(prev=>prev?0:1);
                            }}>Heading Color</li>:""
                            }
                            <li onClick={(e)=>{
                                setThemeColor("#3e1d26");
                                setTextColor("#b9b9b9");
                                setAccentColor("#b19f49");
                                setHeadingColor("#e2e2e2");
                                setColorDropdownOn(prev=>prev?0:1);
                            }}>Reset to Default</li>
                            </>:""
                        }

                    </ul>
                    </>:""
                    }
                </div>
            </div>
        </div>
    )
}

export default NavigationComponent;