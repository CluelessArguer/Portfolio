import {faGithub, faLinkedin} from "@fortawesome/free-brands-svg-icons";
import {faFileLines} from "@fortawesome/free-solid-svg-icons";
import { faCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { forwardRef } from "react";

//Navigation Component
export const navLinks=[
    {
        number:"01.",
        name:"Experience",
        href:"#related-experience"
    },
    {
        number:"02.",
        name:"Projects",
        href:"#projects"
    },
    {
        number:"03.",
        name:"Contact",
        href:"#get-in-touch"
    },
    {
        number:"04.",
        name:"Resume",
        href:"#"
    },
];

//Social Icons Component
export const socialLinks=[
        {
            social:"Github",
            icon:faGithub
        },
        {
            social: "LinkedIn",
            icon:faLinkedin
        },
        {
            social:"Resume",
            icon:faFileLines
        }
];

//Work Component
export const jobs=[
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

export const RangeText = forwardRef((props, forwardedRef) => (
	<button {...props} ref={forwardedRef} />
));

//Projects Component
export const projects=[
    {
        name:'Barraco Physiotherapy',
        location:'Windsor, ON',
        skills:['Wordpress','PHP','CSS'],
        body:[
            'Using plugins for backups, form automation, etc ...',
            'Migrate from dev to live server (databases, files)',
            'Using Wordpress interface to make responsive website'
        ],
        date:'Dec 2024',
        github:false,
        link:'https://barracophysiotherapy.com/'
    },
    {
        name:'Boggs Coffee',
        location:'Windsor, ON',
        skills:['Astro','Shopify/API','TypeScript','React', 'GraphQL'],
        body:[
            'Shopify Storefront API is prevalent across many of the webpages to display '+
            'products, display blogs, cart mutation, and provide the checkout link',
            'Form Validation, Brevo API, Responsive Design, Routing'
        ],
        date:'July 2024 - Dec 2024',
        github:false,
        link:'https://boggscoffee.com/'
    },
    {
        name:'Stellar Structures',
        location:'Windsor, ON',
        skills:['Astro', 'Tailwind'],
        body:[
            'Single page incorporating carousel, gallery, load more button, and contact form'
        ],
        date:'July 2024',
        github:false,
        link:'https://stellarstructuresinc.com/'
    },
    {
        name:'Copper Tunnel',
        location:'Windsor, ON',
        skills:['HTML','CSS', 'Reponsive Design'],
        body:['Sleek modern design and responsive design',
            'Incorportates CSS grid and flex'
        ],
        date:'June 2024',
        github:false,
        link:'https://www.coppertunnel.net/'
    },
    {
        name:'Boggs Coffee Landing Page',
        location:'Windsor, ON',
        skills:['HTML','CSS'],
        body:['Review latest Boggs Coffee entry',
            'Exchanged landing page for full fledged website'],
        date:'May 2024',
        github:false,
        link:'https://boggscoffee.com/'
    },
    {
        name:'Weather Application',
        location:'Windsor, ON',
        skills:['React','HTML','CSS','JavaScript'],
        body:'Are you curious to know the current or forecasted weather for a location? '+
             'Find out right here (live website unavailable for the moment).',
        date:'July 2023 - August 2023',
        github:true,
        link:'https://github.com/CluelessArguer/Weather',
        githubLink: 'https://github.com/CluelessArguer/Weather'
    },
    {
        name:'Personal Website',
        location:'Windsor, ON',
        skills:['React','HTML','CSS','JavaScript'],
        body:'This is the website you\'re currently browsing. I hope you are enjoying '+
                'your experience and thank you for taking the time to browse my website.',
        date:'June 2023 - July 2023',
        github:false,
        link:'cluelessarguer.github.io/PersonalWebsite'
    }
];
