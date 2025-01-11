import {faGithub, faLinkedin} from "@fortawesome/free-brands-svg-icons";
import {faFileLines} from "@fortawesome/free-solid-svg-icons";

//Navigation Component
export const navLinks=[
    {
        number:"01.",
        name:"Experience",
        href:"#"
    },
    {
        number:"02.",
        name:"Projects",
        href:"#"
    },
    {
        number:"03.",
        name:"Skills",
        href:"#"
    },
    {
        number:"04.",
        name:"Contact",
        href:"#"
    },
    {
        number:"05.",
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
export const projects=[
    {
        h3:'Anime',
        h4:'Windsor, ON',
        skills:['Wordpress','PHP','CSS'],
        body:[
            'Using plugins for backups, form automation, etc ...',
            'Migrate from dev to live server (databases, files)',
            'Using Wordpress interface to make responsive website'
        ],
        date:'Dec 2024',
        button:true,
        list:true,
        github:false,
        link:'https://barracophysiotherapy.com/'
    },
    {
        h3:'Barraco Physiotherapy',
        h4:'Windsor, ON',
        skills:['Wordpress','PHP','CSS'],
        body:[
            'Using plugins for backups, form automation, etc ...',
            'Migrate from dev to live server (databases, files)',
            'Using Wordpress interface to make responsive website'
        ],
        date:'Dec 2024',
        button:true,
        list:true,
        github:false,
        link:'https://barracophysiotherapy.com/'
    },
    {
        h3:'Boggs Coffee',
        h4:'Windsor, ON',
        skills:['Astro','Shopify/API','TypeScript','React','Responsive Design'],
        body:[
            'Shopify Storefront API is prevalent across many of the webpages to display '+
            'products, display blogs, cart mutation, and provide the checkout link',
            'Form Validation, Brevo API, Responsive Design, Routing'
        ],
        date:'July 2024 - Dec 2024',
        button:true,
        list:true,
        github:false,
        link:'https://boggscoffee.com/'
    },
    {
        h3:'Stellar Structures',
        h4:'Windsor, ON',
        skills:['Astro', 'Tailwind'],
        body:[
            'Single page incorporating carousel, gallery, load more button, and contact form'
        ],
        date:'July 2024',
        button:true,
        list:true,
        github:false,
        link:'https://stellarstructuresinc.com/'
    },
    {
        h3:'Copper Tunnel',
        h4:'Windsor, ON',
        skills:['HTML','CSS', 'Reponsive Design'],
        body:['Sleek modern design and responsive design',
            'Incorportates CSS grid and flex'
        ],
        date:'June 2024',
        button:true,
        list:true,
        github:false,
        link:'https://www.coppertunnel.net/'
    },
    {
        h3:'Boggs Coffee Landing Page',
        h4:'Windsor, ON',
        skills:['HTML','CSS'],
        body:['Review latest Boggs Coffee entry',
            'Exchanged landing page for full fledged website'],
        date:'May 2024',
        button:true,
        list:true,
        github:false,
        link:'https://boggscoffee.com/'
    },
    {
        h3:'Weather Application',
        h4:'Windsor, ON',
        skills:['React','HTML','CSS','JavaScript'],
        body:'Are you curious to know the current or forecasted weather for a location? '+
             'Find out right here (live website unavailable for the moment).',
        date:'July 2023 - August 2023',
        button:true,
        list:false,
        github:true,
        link:'https://github.com/CluelessArguer/Weather',
        githubLink: 'https://github.com/CluelessArguer/Weather'
    },
    {
        h3:'Personal Website',
        h4:'Windsor, ON',
        skills:['React','HTML','CSS','JavaScript'],
        body:'This is the website you\'re currently browsing. I hope you are enjoying '+
                'your experience and thank you for taking the time to browse my website.',
        date:'June 2023 - July 2023',
        button:false,
        list:false,
        github:false,
        link:''
    },
    {
        h3:'Mock E-commerce Website',
        h4:'Windsor, ON',
        skills:['HTML','CSS','JavaScript','PHP','MySQL'],
        body:'This mimics an e-commerce website experience without a checkout ' +
             'functionality. Create an account and experience it as an user. When ' +
             'registering, use fake information as this project was meant to provide ' +
             'web development practice.',
        date:'January 2022 - April 2022',
        button:false,
        list:false,
        github:false,
        link:'https://manso118.myweb.cs.uwindsor.ca/COMP3077/FinalProject/PHP/home/index.php'
    },
];

export const jobs=[
    {
        h3:'Cowlick Studios',
        h4:'Windsor,ON | Remote',
        skills:['Astro', 'Shopify', 'React', 'Tailwind'],
        body:['Developed responsive websites using technologies that met the client’s requirements (with Astro and Tailwind being predominantly used)',
            'Worked with form validation, databases, API’s, nanostores, and more',
            'Discussed with colleagues to exchange ideas to solve issues regarding images, mailer, and API’s'
        ],
        date:'May 2024 - Present',
        link:'https://cowlickstudios.com/',
    },
    {
        h3:'Bachelor of Computer Science, Honours',
        h4:'University of Windsor | Windsor, ON | Co-op',
        skills:['Problem Solving','Fast Learner','Motivation'],
        body:'Networking, making friends, and developing hard/soft skills is the essence '+
              'of an university education.',
        date:'September 2017 - April 2023',
        link:''
    },
    {
        h3:'Web Designer',
        h4:'University of Windsor | Windsor, ON | Co-op',
        skills:['Drupal','HTML','CSS','Web Accessibility'],
        body:[
                'Discussed potential web design ideas with co-workers while adhering to web accessibility guidelines',
                'Built a modern looking and accessible website with the assistance of Drupal in addition to the use of ' +
                'custom HTML and CSS code',
                'Developed thorough instructional videos to assist future website maintainers'
             ],
        date:'May 2021 - September 2021',
        link:'https://www.uwindsor.ca/institutional-analysis/'
    },
    {
        h3:'UX/UI Designer',
        h4:'Communitech | Remote | Co-op',
        skills:['Wordpress','Squarespace','Teamwork','Wireframing'],
        body:[
                'Understood client needs and outlined a plan of action to complete the deliverables within the two-to-six ' +
                'week engagement',
                'Discussed website design ideas with teammates and created wireframes using Adobe XD',
                'Created and redesigned websites using content management systems such as Squarespace and WordPress'
             ],
        date:'September 2020 - December 2020',
        link:''
    },
    {
        h3:'Tier 1 Support Technician',
        h4:'University of Windsor | Windsor, ON | Co-op',
        skills:['Troubleshoot','Customer Service','TeamDynamix'],
        body:[
                'Created service request tickets on behalf of faculty, staff, and students using TeamDynamix',
                'Engaged with colleagues to find quick and suitable solutions to a client\'s technical problems',
                'Provided support to clients in the areas of password resets, minor network problems, and more'
             ],
        date:'January 2020 - March 2020',
        link:''
    }
];