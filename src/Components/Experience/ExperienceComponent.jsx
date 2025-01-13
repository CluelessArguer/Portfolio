import { useState } from "react";
import styles from "./Experience.module.css";
import YearSliderComponent from "./YearSliderComponent";
import JobComponent from "./JobComponent";

const ExperienceComponent=()=>{
    const [rangeValue,setRangeValue]=useState(2024.9);
    const range=(e)=>{
        setRangeValue(e[0]);
    }

    return(
        <div id="related-experience" className={styles.experience}>
            <div className={styles.related_experience}>
                <h2 className={styles.experience_title}>
                    <span className="accent_color">01.</span> Related Experience
                </h2>
                <div className={styles.experience_container}>
                    <YearSliderComponent rangeValue={rangeValue} range={range}/>
                    <JobComponent rangeValue={rangeValue}/>
                </div>
            </div>
        </div>
    )
}

export default ExperienceComponent;