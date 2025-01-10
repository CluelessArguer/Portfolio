import styles from "./Header.module.css";

const ColorDropdownComponent=({number,value,setCurrentColor, classes})=>{
    return(
        <>
            <li className={classes} data-value={value} onClick={(e)=>{
                setCurrentColor(e.target.attributes[1].nodeValue);
            }}>
                <span className={styles.numbering_link}>0{number}.</span>
                {value}
            </li>
        </>
    )
}

export default ColorDropdownComponent;