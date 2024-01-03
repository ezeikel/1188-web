import {
  faXTwitter,
  faInstagram,
  faTiktok,
  faWhatsapp,
} from '@fortawesome/free-brands-svg-icons';
import {
  faBrowser,
  faFillDrip,
  faMapMarkerAlt,
  faMobile,
  faPaperPlane,
  faTablet,
} from '@fortawesome/pro-light-svg-icons';
import { NavigationItem } from './types';

export const NAVIGATION_ITEMS: NavigationItem[] = [
  { id: '1', label: 'Home', href: '/' },
  { id: '2', label: 'What we do', href: '/what-we-do' },
  { id: '3', label: 'Who we are', href: '/who-we-are' },
  {
    id: '4',

    label: 'Blog',
    href: 'https://medium.com/@118eighty8',
    isExternal: true,
  },
  { id: '5', label: 'Contact', href: '/#contact' },
];

export const SOCIAL_LINKS = [
  {
    id: '1',
    label: 'X',
    href: 'https://x.com/118eighty8',
    icon: faXTwitter,
  },
  {
    id: '2',
    label: 'Instagram',
    href: 'https://instagram.com/118eighty8',
    icon: faInstagram,
  },
  {
    id: '3',
    label: 'TikTok',
    href: 'https://tiktok.com/118eighty8',
    icon: faTiktok,
  },
  {
    id: '4',
    label: 'WhatsApp',
    href: 'https://whatsapp.com/118eighty8',
    icon: faWhatsapp,
  },
];

export const CAROUSEL_ITEMS = [
  {
    id: '1',
    icon: faTablet,
    title: 'Platforms & Apps',
    copy: `Creating platforms & apps is what we are most passionate
      about. 1188 has worked with a number of different industries to
      create market leading platforms, from property portals to
      community spaces.`,
    buttonLink: '#',
    buttonCopy: 'Find out more',
  },
  {
    id: '2',
    icon: faBrowser,
    title: 'Websites',
    copy: `We specialise in the design & development of websites that
      work – for your users and you. Powered by sophisticated backend
      systems and APIs, they generate leads, sales, enquiries and
      whatever else your online goals may be.`,
    buttonLink: '#',
    buttonCopy: 'Find out more',
  },
  {
    id: '3',
    icon: faMobile,
    title: 'Mobile',
    copy: `Mobile first – always! With the opportunity to reach users at any
      given moment, we deliver expert mobile strategy, responsive design
      and mobile application development.`,
    buttonLink: '#',
    buttonCopy: 'Find out more',
  },
  {
    id: '4',
    icon: faMapMarkerAlt,
    title: 'Digital Strategy',
    copy: `Analysis, research and insight to position brands at the forefront
      of digital.`,
    buttonLink: '#',
    buttonCopy: 'Find out more',
  },
  {
    id: '5',
    icon: faFillDrip,
    title: 'Design & UX',
    copy: `Let our team of talented designers craft your digital experience.
      We create beautiful, functional and delicious design solutions
      and, we're proud of it!`,
    buttonLink: '#',
    buttonCopy: 'Find out more',
  },
  {
    id: '6',
    icon: faPaperPlane,
    title: 'Marketing',
    copy: `Our experienced team, along with our proven platforms, will help
      build your business. With proven results on the board, we not only
      offer solutions, we deliver game changing ideas.`,
    buttonLink: '#',
    buttonCopy: 'Find out more',
  },
];

export const DOS = [
  'World-class digital',
  'Expect creativity',
  'Hustle',
  'Obsess over details',
  'Value relationships',
  'High-five',
  'Make things, break things',
  'Meme',
  'Exceed expectations',
  'Party',
];

export const DONTS = [
  'Work late / weekends',
  'Have a sales team',
  'Resist cake',
  'Sacrifice quality for profit',
  'Fax',
  'Lose at Mario Kart',
  'Work for free',
  'Egos',
  'Impossible dealines',
  'Outsource',
];

export const TEAM = [
  {
    name: 'Ezeikel Pemberton',
    role: 'Founder & CTO',
  },
  {
    name: 'Shirley Denchie',
    role: 'Design Lead',
  },
  {
    name: 'Anthony Allen',
    role: 'Head of Marketing',
  },
  {
    name: 'Deji Ishola',
    role: 'Head of Operations',
  },
  {
    name: 'Kunle Ogunjimi',
    role: 'Android & Web Developer',
  },
  {
    name: 'Maya Rowe',
    role: 'Social Media Manager',
  },
  {
    name: 'Romaine Smith',
    role: 'Digital Content Management & Strategist',
  },
];

export const AVAILABLE_ROLES = [
  // 'Design Lead',
  // 'Development Lead',
  // 'Project Manager Lead',
  // 'QA Lead',
  // 'UI Designer',
  // 'UX Designer',
  // 'Front End Developer',
  // 'Back End Developer',
  // 'Project Manager',
  // 'QA Engineer'
  // 'Social Media Manager (Intern)',
  'Writer (Intern)',
];
