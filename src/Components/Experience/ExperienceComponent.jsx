import { useState } from "react";
import styles from "./Experience.module.css";
import * as Slider from "@radix-ui/react-slider";
import { forwardRef } from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faSquareCaretRight } from "@fortawesome/free-solid-svg-icons";
import { faCircle } from "@fortawesome/free-solid-svg-icons";
import { useMediaQuery } from 'react-responsive';

const RangeText = forwardRef((props, forwardedRef) => (
	<button {...props} ref={forwardedRef} />
));

const ExperienceComponent=()=>{
    const [rangeValue,setRangeValue]=useState(2024.9);
    const range=(e)=>{
        console.log(rangeValue)
        setRangeValue(e[0]);
    }
    const test=[
        {
            name:"test",
            max:2024.9,
            min:2023.1
        },
        {
            name:"test two",
            max:2023,
            min:2022.1
        }
    ]
    const jobs=[
        {
            job:"Web Developer",
            location:<>Cowlick Studios <FontAwesomeIcon className="mx-xs" icon={faCircle} size="2xs"/> Windsor, ON <FontAwesomeIcon className="mx-xs" icon={faCircle} size="2xs"/> Contract</>,
            skills:['Astro', 'Shopify', 'React', 'Tailwind'],
            body:['Developed responsive websites using technologies that met the client’s requirements (with Astro and Tailwind being predominantly used)',
                'Worked with form validation, databases, API’s, nanostores, and more',
                'Discussed with colleagues to exchange ideas to solve issues regarding images, mailer, and API’s'
            ],
            date:'May 2024 - Present',
            link:'https://cowlickstudios.com/',
            max:2024.9,
            min:2024
        },
        {
            job:'Bachelor of Computer Science, Honours',
            location:<>University of Windsor <FontAwesomeIcon className="mx-xs" icon={faCircle} size="2xs"/> Windsor, ON <FontAwesomeIcon className="mx-xs" icon={faCircle} size="2xs"/> Co-op</>,
            skills:['Problem Solving','Fast Learner','Motivation'],
            body:['Networking, making friends, and developing hard/soft skills is the essence '+
                  'of an university education','',''],
            date:'September 2017 - April 2023',
            link:'',
            max:2023.9,
            min:2022
        },
        {
            job:'Web Designer',
            location:<>University of Windsor <FontAwesomeIcon className="mx-xs" icon={faCircle} size="2xs"/> Windsor, ON <FontAwesomeIcon className="mx-xs" icon={faCircle} size="2xs"/> Co-op</>,
            skills:['Drupal','HTML','CSS','Web Accessibility'],
            body:[
                    'Discussed potential web design ideas with co-workers while adhering to web accessibility guidelines',
                    'Built a modern looking and accessible website with the assistance of Drupal in addition to the use of ' +
                    'custom HTML and CSS code',
                    'Developed thorough instructional videos to assist future website maintainers'
                 ],
            date:'May 2021 - September 2021',
            link:'https://www.uwindsor.ca/institutional-analysis/',
            max:2021.9,
            min:2021
        },
        {
            job:'UX/UI Designer',
            location:<>Communitech <FontAwesomeIcon className="mx-xs" icon={faCircle} size="2xs"/> Remote <FontAwesomeIcon className="mx-xs" icon={faCircle} size="2xs"/> Co-op</>,
            skills:['Wordpress','Squarespace','Teamwork','Wireframing'],
            body:[
                    'Understood client needs and outlined a plan of action to complete the deliverables within the two-to-six ' +
                    'week engagement',
                    'Discussed website design ideas with teammates and created wireframes using Adobe XD',
                    'Created and redesigned websites using content management systems such as Squarespace and WordPress'
                 ],
            date:'September 2020 - December 2020',
            link:'',
            max:2020.9,
            min:2020.5
        },
        {
            job:'Tier 1 Support Technician',
            location:<>University of Windsor <FontAwesomeIcon className="mx-xs" icon={faCircle} size="2xs"/> Windsor, ON <FontAwesomeIcon className="mx-xs" icon={faCircle} size="2xs"/> Co-op</>,
            skills:['Troubleshoot','Customer Service','TeamDynamix'],
            body:[
                    'Created service request tickets on behalf of faculty, staff, and students using TeamDynamix',
                    'Engaged with colleagues to find quick and suitable solutions to a client\'s technical problems',
                    'Provided support to clients in the areas of password resets, minor network problems, and more'
                 ],
            date:'January 2020 - March 2020',
            link:'',
            max:2020.4,
            min:2020
        }
    ];
    const isMobile = useMediaQuery({
        query: '(max-width: 576px)'
      })
    return(
        <div className={styles.experience}>
            <div className={styles.test_b}>
            <h2 className={styles.experience_title}>01. Related Experience</h2>
                <div className={styles.experience_container}>
                <Slider.Root className={styles.SliderRoot} defaultValue={[rangeValue]} max={2024.9} min={2020} range={rangeValue} step={0.1} onValueChange={range} orientation={`${isMobile?"horizontal":"vertical"}`}>
                    <Slider.Track className={styles.SliderTrack} >
                        <Slider.Range className={styles.SliderRange} />
                    </Slider.Track>
                    <Slider.Thumb className={styles.SliderThumb} aria-label="Volume" value={rangeValue} asChild>
                        <RangeText>{Math.trunc(rangeValue)}</RangeText>
                    </Slider.Thumb>
                </Slider.Root>
                <div className={styles.job_experience}>
                    {
                        jobs.map((job,index)=>{
                            if(job.max>=rangeValue && job.min<=rangeValue){
                                return (
                                    <div key={index}>
                                        <h3 className={styles.job_title}>{job.job}</h3>
                                        <h4 className={styles.job_location}>{job.location}</h4>
                                        <h5 className={styles.job_date}>{job.date}</h5>
                                        <ul className={`${styles.job_description} fa-ul`}>
                                            <li className={styles.job_desc_item}><span className="fa-li"><FontAwesomeIcon icon={faSquareCaretRight} /></span>{job.body[0]}</li>
                                            {   
                                                job.max!=2023.9?
                                                <>
                                                    <li className={styles.job_desc_item}><span className="fa-li"><FontAwesomeIcon icon={faSquareCaretRight} /></span>{job.body[1]}</li>
                                                    <li className={styles.job_desc_item}><span className="fa-li"><FontAwesomeIcon icon={faSquareCaretRight} /></span>{job.body[2]}</li>
                                                </>:""
                                            }
                                        </ul>
                                        <div className={styles.job_skills}>
                                        {
                                            job.skills.map((skill,index)=>{
                                                return(
                                                    <span className={styles.job_skill}>{skill}</span>
                                                )
                                            })
                                        }
                                        </div>
                                    </div>
                                )
                            }
                        })
                    }
                </div>
            </div>
            </div>
            </div>
    )
}

export default ExperienceComponent;