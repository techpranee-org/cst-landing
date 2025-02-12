// routes
import { paths } from 'src/routes/paths';

// ----------------------------------------------------------------------

export const pageLinks = [
  {
    order: '1',
    subheader: 'Services',
    // cover: 'https://tparticles.s3.ap-south-1.amazonaws.com/4_83dbc57b3c.jpg',
    cover: '/assets/images/img_2.jpg',
    items: [
      { title: 'Healthcare Recruitment', path: "/healthcare-recruitment" },
      { title: 'IT Recruitment Services', path: "/it-recruitment" },
      { title: 'Embedded Software Services', path: "/embedded-software" },
      { title: 'Web Development Services', path: "/web-development-service" },
      { title: 'Cloud Services', path: "/cloud" },
      { title: 'Resourcing & Talent', path: "/resourcing-talent" },
    ],
  },
  
];

export const navConfig = [
  { title: 'About', path: '/about' },
  {
    title: 'Services',
    path: paths.pages,
    children: [pageLinks[0]],
    dropdownStyle: { width: '100%' },
  },
  /* { title: 'Portfolio', path: '/portfolio' }, */
  // { title: 'Careers', path: '/careers' },
  /* { title: 'Blog', path: '/blog' }, */
  { title: 'Career', path: '/career' },
  { title: 'Contact', path: '/contact' },
  
];
