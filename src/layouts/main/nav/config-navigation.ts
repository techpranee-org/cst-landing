// routes
import { paths } from 'src/routes/paths';

// ----------------------------------------------------------------------

export const pageLinks = [
  {
    order: '1',
    subheader: 'Services',
    // cover: 'https://tparticles.s3.ap-south-1.amazonaws.com/4_83dbc57b3c.jpg',
    cover: '/assets/images/cst/service.webp',
    items: [
      { title: 'Healthcare Recruitment', path: "/healthcare-recruitment" },
      { title: 'IT Recruitment Services', path: "/it-recruitment" },
      { title: 'Embedded Software Services', path: "/embedded-software" },
      { title: 'Web Development Services', path: "/web-development-service" },
      { title: 'Cloud Services', path: "/cloud" },
      { title: 'Resourcing & Talent', path: "/resourcing-talent" },
    ],
  },
  /* {
    order: '2',
    subheader: 'Product Development',
    // cover: 'https://tparticles.s3.ap-south-1.amazonaws.com/5_e1078bd47a.jpg',
    cover: 'https://tparticles.s3.ap-south-1.amazonaws.com/web_development_services_d1e50b538e.png?updated_at=2024-05-14T10:40:18.817Z',
    items: [
      { title: 'Landing Pages', path: "/web-development" },
      { title: 'Static Website', path: "/web-development"},
      { title: 'Custom Dynamic Website', path: "/web-development"},
      { title: 'CMS Websites', path:"/web-development" },
      { title: 'E-Commerce Websites', path: "/web-development" },
      { title: 'Mobile App Development', path:"/web-development" },
      { title: 'Web Analytics', path: "/web-development"},
    ],
  }, */
  /* {
    order: '3',
    subheader: 'SEO',
    // cover: 'https://tparticles.s3.ap-south-1.amazonaws.com/6_685399f2a7.jpg',
    cover: 'https://tparticles.s3.ap-south-1.amazonaws.com/seo_services_3b1a5e6b71.png?updated_at=2024-05-14T10:40:18.988Z',
    items: [
      { title: 'On-Page SEO', path: "/seo" },
      { title: 'Off-Page SEO', path:"/seo"  },
      { title: 'Local SEO', path:"/seo"  },
      { title: 'E-Commerce SEO', path: "/seo"  },
      { title: 'Technical SEO', path: "/seo"  },
      { title: 'Content Development', path: "/seo"  }
    ],
  }, */
  /* {
    order: '4',
    subheader: 'Advertising',
    // cover: 'https://tparticles.s3.ap-south-1.amazonaws.com/7_4ccf76f064.jpg',
    cover: 'https://tparticles.s3.ap-south-1.amazonaws.com/advertising_services_af6432d2ab.png?updated_at=2024-05-14T10:40:18.829Z',
    items: [
      { title: 'Google Ads', path: "/online-advertising" },
      { title: 'Facebook Ads', path: "/online-advertising" },
      { title: 'Social Media Advertising', path: "/online-advertising"},
      { title: 'Creative Development', path: "/online-advertising" },
      { title: 'Analytics and Reporting', path: "/online-advertising" },
      // { title: 'About', path: paths.career.about },
      // { title: 'Contact', path: paths.career.contact },
    ],
  }, */
  /* {
    order: '5',
    subheader: 'Marketing',
    // cover: 'https://tparticles.s3.ap-south-1.amazonaws.com/8_f33490ecc8.jpg',
    cover: 'https://tparticles.s3.ap-south-1.amazonaws.com/marketing_services_c42f5c87ba.png?updated_at=2024-05-14T10:40:18.786Z',
    items: [
      { title: 'Social Media Marketing', path: "/digital-marketing"},
      { title: 'SMS Marketing', path: "/digital-marketing"},
      { title: 'Whatsapp Marketing', path: "/digital-marketing"},
      { title: 'E-Mail Marketing', path: "/digital-marketing"},
      { title: 'Social Media Optimization', path: "/digital-marketing" },
      { title: 'Online PR Management', path: "/digital-marketing" }
    ],
  }, */
  /* {
    // isNew: true,
    order: '6',
    subheader: 'Graphic Designing',
    // cover: 'https://tparticles.s3.ap-south-1.amazonaws.com/9_1586a27ff5.jpg',
    cover: 'https://tparticles.s3.ap-south-1.amazonaws.com/graphic_designing_services_9b7e3f7e26.png?updated_at=2024-05-14T10:40:19.123Z',
    items: [
      { title: 'Infographics & Illustration', path: "/graphic-designing" },
      { title: 'Digital Posters & Banners', path: "/graphic-designing" },
      { title: 'Catalogs & Digital Menu', path: "/graphic-designing" },
      { title: 'Presentations & Decks', path: "/graphic-designing" },
      // { title: 'Cataloges', path: paths.eCommerce.checkout },
      // { title: 'Presentations', path: paths.eCommerce.orderCompleted },
      // { title: 'Pitch Decks', path: paths.eCommerce.wishlist }
    ],
  }, */
  
  // {
  //   order: '4',
  //   subheader: 'Common',
  //   items: [
  //     { title: 'Login Cover', path: paths.loginCover },
  //     { title: 'Login Illustration', path: paths.loginIllustration },
  //     { title: 'Login Background', path: paths.loginBackground },
  //     { title: 'Register Cover', path: paths.registerCover },
  //     { title: 'Register Illustration', path: paths.registerIllustration },
  //     { title: 'Register Background', path: paths.registerBackground },
  //     { title: 'Reset Password', path: paths.resetPassword },
  //     { title: 'Verify Code', path: paths.verifyCode },
  //     { title: '404 Error', path: paths.page404 },
  //     { title: '500 Error', path: paths.page500 },
  //     { title: 'Maintenance', path: paths.maintenance },
  //     { title: 'ComingSoon', path: paths.comingsoon },
  //     { title: 'Pricing 01', path: paths.pricing01 },
  //     { title: 'Pricing 02', path: paths.pricing02 },
  //     { title: 'Payment', path: paths.payment },
  //     { title: 'Support', path: paths.support },
  //   ],
  // },
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
