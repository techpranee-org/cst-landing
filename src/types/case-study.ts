import { ISocialLinks } from './socials';

// ----------------------------------------------------------------------

export type ICaseStudyProps = {
  id: string;
  title: string;
  description: string;
  category: string;
  coverImg: string;
  heroImg: string;
  createdAt: Date | string | number;
  galleryImgs: string[];
  website: string;
  socialLinks?: ISocialLinks;
  // id: string,
  // name: string,
  // url: string,
  // category: string,
  // image: string
};
