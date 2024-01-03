import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { SOCIAL_LINKS } from '@/app/constants';
import LogoOutline from './svgs/LogoOutline';

const Footer = () => (
  <footer className="flex md:grid md:grid-cols-3 md:grid-rows-4 flex-col gap-y-8 p-8 bg-[#000] text-dark-grey text-sm md:gap-x-16 md:justify-items-start">
    <Link
      href="/"
      className="self-center md:col-[1_/_span_1] md:row-[1_/_span_1]"
    >
      <LogoOutline className="w-[100px] stroke-white" />
    </Link>
    <section className="flex flex-col gap-y-4 items-center md:col-[1_/_span_1] md:row-[2_/_span_1]">
      <h4 className="m-0 text-white font-bold text-center md:self-start">
        Inspire
      </h4>
      <p>
        We create possibilities for the diverse connected world.{' '}
        <span className="text-white">Be Bold.</span>
      </p>
    </section>
    <section className="flex flex-col gap-y-4 items-center md:col-[2_/_span_1] md:row-[2_/_span_1]">
      <h4 className="m-0 text-white font-bold text-center md:self-start">
        Visit
      </h4>
      <address className="not-italic">
        Pop Brixton, 49 Brixton Station Rd, London SW9 8PQ
      </address>
    </section>
    <section className="flex flex-col gap-y-4 items-center md:col-[3_/_span_1] md:row-[2_/_span_1]">
      <h4 className="m-0 text-white font-bold md:self-start">New business</h4>
      <a href="mailto:ezeikel@1188.agency" className="md:self-start">
        Email us
      </a>
      <a href="tel:447932442879">+44 7932442879</a>
    </section>
    <section className="flex flex-col gap-y-4 items-center md:items-start md:w-full md:col-[1_/_span_1] md:row-[3_/_span_1]">
      <h4 className="m-0 text-white font-bold">Follow</h4>
      <ul className="w-full flex gap-x-8 justify-center md:justify-start">
        {SOCIAL_LINKS.map(({ label, href, icon }) => (
          <li>
            <a href={href} className="group" aria-label={`${label} link`}>
              <FontAwesomeIcon
                icon={icon}
                size="2x"
                className="fill-dark-grey md:group-hover:text-white md:group-hover:transition-colors md:group-hover:duration-300 md:group-hover:fill-white md:group-hover:ease-in-out"
              />
            </a>
          </li>
        ))}
      </ul>
    </section>
    <section className="flex flex-col md:flex-row md:justify-between md:items-center gap-y-4 text-center font-light md:col-[1_/_-1] md:row-[4_/_span_1] w-full">
      <span>&copy; {new Date().getFullYear()} 1188. All rights reserved.</span>
      <span>
        Made with <span className="text-red">♡</span> in{' '}
        <span className="text-white">South London</span>.
      </span>
    </section>
  </footer>
);

export default Footer;
