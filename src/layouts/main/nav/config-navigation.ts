// routes
import { paths } from 'src/routes/paths';

// ----------------------------------------------------------------------

export const aboutPageLinks = [
  {
    order: '1',
    subheader: '',
    items: [
      { title: 'Our Company', path: "/about" },
    ],
  },


];

export const servicePageLinks = [
  {
    order: '1',
    subheader: '',
    items: [
      { title: 'Healthcare Services', path: "/healthcare-recruitment" },
    ],
  },

  {
    order: '2',
    subheader: '',
    items: [
      { title: 'IT Recruitment Services', path: "/it-recruitment" },
    ],
  },

  {
    order: '3',
    subheader: '',
    items: [
      { title: 'Embedded Solutions', path: "/embedded-software" },
    ],
  },

  {
    order: '4',
    subheader: '',
    items: [
      { title: 'Web Development Services', path: "/web-development-service" },
    ],
  },

  {
    order: '5',
    subheader: '',
    items: [
      { title: 'Cloud Services', path: "/cloud" },
    ],
  },

  
];

export const navConfig = [
  {
    title: 'Who We Are',
    path: paths.pages,
    children: [aboutPageLinks[0]],
    dropdownStyle: { width: '100%' },
  },
  {
    title: 'Services',
    path: paths.pages,
    children: [servicePageLinks[0], servicePageLinks[1], servicePageLinks[2], servicePageLinks[3], servicePageLinks[4]],
    dropdownStyle: { width: '100%' },
  },
  /* { title: 'Portfolio', path: '/portfolio' }, */
  // { title: 'Careers', path: '/careers' },
  /* { title: 'Blog', path: '/blog' }, */
  { title: 'Career', path: '/career' },
  { title: 'Contact', path: '/contact' },
  
];
