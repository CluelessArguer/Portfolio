import {useStore} from "@nanostores/react";
import { $themeColor,$headingColor,$accentColor,$textColor } from "../stores.ts";

const BodyWrapperComponent=(props)=>{
    const themeColor=useStore($themeColor);
    const headingColor=useStore($headingColor);
    const accentColor=useStore($accentColor);
    const textColor=useStore($textColor);
    return (
        <div className="body"
            style={{
                "--theme-color":themeColor,
                "--heading-color":headingColor,
                "--accent-color":accentColor,
                "--text-color":textColor
           }}
        >
            {props.children}
        </div>
    )
}

export default BodyWrapperComponent;