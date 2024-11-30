// const baseURL = 'demo.magic-portfolio.com'

// // Enable localization
// const i18n = false;

// // Manage localized content in the messages folder
// const i18nOptions = {
//     locales: ['en'],            // A list of all locales that are supported, e.g. ['en','id']
//     defaultLocale: 'en'         // Locale used by default and as a fallback
// }

// const routes = {
//     '/':        true,
//     '/about':   true,
//     '/work':    true,
//     '/blog':    true,
//     '/gallery': true,
// }

// // Enable password protection on selected routes
// // Set password in pages/api/authenticate.ts
// const protectedRoutes = {
//     '/work/automate-design-handovers-with-a-figma-to-code-pipeline': true
// }

// const effects = {
//     mask: 'cursor',             // none | cursor | topLeft | topRight | bottomLeft | bottomRight
//     gradient: {
//         display: true,
//         opacity: 0.4            // 0 - 1
//     },
//     dots: {
//         display: true,
//         opacity: 0.4,           // 0 - 1
//         size: '24'              // 2 | 4 | 8 | 12 | 16 | 20 | 24 | 32 | 40 | 48 | 56 | 634
//     },
//     lines: {
//         display: false,
//     },
// }

// const style = {
//     theme:       'dark',         // dark | light
//     neutral:     'gray',         // sand | gray | slate
//     brand:       'emerald',      // blue | indigo | violet | magenta | pink | red | orange | yellow | moss | green | emerald | aqua | cyan
//     accent:      'indigo',       // blue | indigo | violet | magenta | pink | red | orange | yellow | moss | green | emerald | aqua | cyan
//     solid:       'contrast',     // color | contrast
//     solidStyle:  'flat',         // flat | plastic
//     border:      'playful',      // rounded | playful | conservative
//     surface:     'translucent',  // filled | translucent
//     transition:  'all'           // all | micro | macro
// }

// const display = {
//     location: true,
//     time:     true
// }

// const mailchimp = {
//     action: 'https://url/subscribe/post?parameters',
//     effects: {
//         mask: 'topRight',           // none | cursor | topLeft | topRight | bottomLeft | bottomRight
//         gradient: {
//             display: true,
//             opacity: 0.6            // 0 - 1
//         },
//         dots: {
//             display: false,
//         },
//         lines: {
//             display: false,
//         },
//     }
// }

// export { routes, protectedRoutes, effects, style, display, mailchimp, baseURL, i18n, i18nOptions };


import { InlineCode } from '@/once-ui/components';

const person = {
  firstName: 'Kadir',
  lastName: 'Yaren',
  get name() {
    return `${this.firstName} ${this.lastName}`;
  },
  role: 'Full Stack Developer',
  avatar: '/images/avatar.jpg',
  location: 'Asia/Istanbul', // Adjusted location to match your timezone
  languages: ['English', 'Turkish'], // Added language proficiency
};

const newsletter = {
  display: true,
  title: <>Subscribe to {person.firstName}'s Newsletter</>,
  description: (
    <>
      I occasionally write about software development, technology trends, and innovative solutions
      in web applications.
    </>
  ),
};

const social = [
  {
    name: 'GitHub',
    icon: 'github',
    link: 'https://github.com/kadiryaren', // Update to your GitHub profile
  },
  {
    name: 'LinkedIn',
    icon: 'linkedin',
    link: 'https://www.linkedin.com/in/kadiryaren/', // Update to your LinkedIn profile
  },
  {
    name: 'X',
    icon: 'x',
    link: '', // Add your X (Twitter) profile if available
  },
  {
    name: 'Email',
    icon: 'email',
    link: 'mailto:kadiryaren20@gmail.com',
  },
];

const home = {
  label: 'Home',
  title: `${person.name}'s Portfolio`,
  description: `Portfolio website showcasing my work as a ${person.role}`,
  headline: <>Full Stack Developer</>,
  subline: (
    <>
      I'm Kadir, a full-stack developer with experience in building scalable and AI-powered web
      applications. My focus is on crafting efficient and effective solutions.
    </>
  ),
};

const about = {
  label: 'About',
  title: 'About me',
  description: `Meet ${person.name}, a ${person.role} from ${person.location}`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: true,
    link: 'https://cal.com/kadiryaren',
  },
  intro: {
    display: true,
    title: 'Introduction',
    description: (
      <>
        Kadir is a passionate full-stack developer with a knack for solving challenging problems.
        Experienced in both frontend and backend technologies, Kadir thrives on creating robust web
        applications.
      </>
    ),
  },
  work: {
    display: true,
    title: 'Work Experience',
    experiences: [
      {
        company: 'Vireup Inc',
        timeframe: '2023 Sep - Present',
        role: 'Full-Stack App Developer',
        achievements: [
          <>
            Developed scalable and AI-powered interview and recruitment applications using NestJS,
            Next.js, and MongoDB.
          </>,
        ],
        images: [],
      },
      {
        company: 'BluetFuture',
        timeframe: '2023 Mar - Sep',
        role: 'Full-Stack Developer',
        achievements: [
          <>
            Built a full-stack AI-powered waterflow monitoring tool using ExpressJS, PostgreSQL, and
            Next.js.
          </>,
        ],
        images: [],
      },
      {
        company: 'Upwork',
        timeframe: '2022 - Present',
        role: 'Instructor - Freelancer',
        achievements: [
          <>
            Completed numerous freelance projects involving mobile and web app development, API
            integration, and cloud deployments.
          </>,
        ],
        images: [],
      },
    ],
  },
  studies: {
    display: true,
    title: 'Education',
    institutions: [
      {
        name: 'Pamukkale University',
        description: <>Studied Computer Engineering from 2018 to 2023.</>,
      },
    ],
  },
  technical: {
    display: true,
    title: 'Technical Skills',
    skills: [
      {
        title: 'Next.js',
        description: <>Building next-gen applications with Next.js and modern frameworks.</>,
        images: [],
      },
      {
        title: 'Python & Selenium',
        description: <>Automating workflows and data scraping using Python and Selenium.</>,
        images: [],
      },
    ],
  },
};

const blog = {
  label: 'Blog',
  title: 'Writing about development and technology...',
  description: `Read what ${person.name} has been up to recently.`,
};

const work = {
  label: 'Work',
  title: 'My Projects',
  description: `Showcasing design and development projects by ${person.name}.`,
};

const gallery = {
  label: 'Gallery',
  title: 'My Photo Gallery',
  description: `A collection of photos by ${person.name}.`,
  images: [],
};

export { person, social, newsletter, home, about, blog, work, gallery };
