import {ChromePicker} from 'react-color';
import { useState } from "react";
import { setThemeColor,setHeadingColor,setTextColor,setAccentColor,$textColor,$themeColor,$accentColor,$headingColor} from "../../stores.ts";
import { faPalette } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import styles from "./Header.module.css";
import ColorDropdownComponent from './ColorDropdownComponent.jsx';
import {useStore} from "@nanostores/react";

const ColorPickerComponent=()=>{
    const [onPicker,setBoolPicker]=useState(0);
    const [currentColor, setCurrentColor]=useState("Theme");
    const colors=["Theme","Text","Accent","Heading"];
    const themeColor=useStore($themeColor);
    const textColor=useStore($textColor);
    const accentColor=useStore($accentColor);
    const headingColor=useStore($headingColor);

    const changeColor=(color)=>{
        if(currentColor=="Theme")
            setThemeColor(color.hex);
        else if(currentColor=="Heading")
            setHeadingColor(color.hex);
        else if(currentColor=="Text")
            setTextColor(color.hex);
        else
            setAccentColor(color.hex);
    }

    const themeColors=(themeColor,textColor,accentColor,headingColor)=>{
        setThemeColor(themeColor);
        setTextColor(textColor);
        setAccentColor(accentColor);
        setHeadingColor(headingColor);
    }

    return(
        <div className={styles.color_picker}>
            <FontAwesomeIcon onClick={()=>setBoolPicker(prev=>prev?0:1)} icon={faPalette} size="xl" />
            {
            onPicker?
                <>
                    <ChromePicker
                        className={styles.chrome_picker}
                        color={currentColor=="Theme"?themeColor:currentColor=="Text"?textColor:currentColor=="Accent"?accentColor:headingColor}
                        onChange={changeColor}
                        onChangeComplete={changeColor}
                        disableAlpha={true}
                    />
                    <ul className={styles.color_list}>
                            {
                                colors.map((color,index)=>{
                                    return (
                                        <ColorDropdownComponent key={index} number={index+1} value={color} setCurrentColor={setCurrentColor}  classes={`${currentColor==color? `${styles.active_color_item}` :`${styles.color_item}`}`}/>
                                    )
                                })
                            }
                            <li className={styles.color_item} onClick={(e)=>{
                                themeColors("#EAEAEA","#756266","#6D0608","#504648");
                            }}><span className={styles.numbering_link}>05.</span>Light Mode</li>
                            <li className={styles.color_item} onClick={(e)=>{
                                themeColors("#000000","#b9b9b9","#dca2a3","#e2e2e2");
                            }}><span className={styles.numbering_link}>06.</span>Dark Mode</li>
                            <li className={styles.color_item} onClick={(e)=>{
                                themeColors("#3e1d26","#b9b9b9","#b19f49","#e2e2e2");
                            }}><span className={styles.numbering_link}>07.</span>Reset to Default</li>
                    </ul>
                </>:""
            }
        </div>
    )
}

export default ColorPickerComponent;