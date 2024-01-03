import {
  faXTwitter,
  faInstagram,
  faTiktok,
  faWhatsapp,
} from '@fortawesome/free-brands-svg-icons';
import { NavigationItem } from './types';

export const NAVIGATION_ITEMS: NavigationItem[] = [
  { id: '1', label: 'Home', href: '/' },
  { id: '2', label: 'What we do', href: '/what-we-do' },
  { id: '3', label: 'Who we are', href: '/who-we-are"' },
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
