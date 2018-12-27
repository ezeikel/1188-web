import styled from "styled-components";
import Link from "next/link";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Wrapper = styled.footer`
  display: grid;
  grid-template-rows: 80px auto 1fr;
  place-items: center;
  grid-row-gap: var(--spacing-large);
  padding: var(--spacing-large);
  background-color: var(--color-black);
  span {
    color: var(--color-white);
    span span {
      color: var(--color-red);
    }
  }
  @media (min-width: 768px) {
    grid-row-gap: var(--spacing-huge);
    padding: var(--spacing-huge);
    grid-template-rows: 1fr 1fr;
    grid-template-columns: 1fr 1fr;
    grid-row-gap: var(--spacing-medium);
  }
`;

const Copy = styled.span`
  display: grid;
  grid-row-gap: var(--spacing-medium);
  text-align: center;
  font-weight: 300;
  font-size: 1.8rem;
  line-height: 21px;
  a,
  a:link,
  a:active,
  a:visited,
  a:focus {
    color: var(--color-white);
    text-decoration: underline;
  }
  @media (min-width: 768px) {
    grid-row: 2 / -1;
    align-self: end;
  }
`;

const Logo = styled.div`
  display: grid;
  place-items: center;
  z-index: 1;
  margin: 0;
  width: 100px;
  @media (min-width: 768px) {
    grid-row: 1 / -1;
    grid-column: 1 / span 1;
  }
`;

const SocialLinks = styled.ul`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  justify-items: center;
  width: 100%;
  margin: 0;
  a {
    color: var(--color-white);
  }
  @media (min-width: 768px) {
    width: auto;
    grid-template-columns: repeat(4, 80px);
    grid-row: 1 / span 1;
    grid-column: 2 / span 1;
    align-self: center;
  }
`;

const Footer = () => (
  <Wrapper>
    <Logo>
      <Link href="/">
        <a>
          <img src="/static/logos/1188-outline-white.svg" />
        </a>
      </Link>
    </Logo>
    <SocialLinks>
      <li>
        <Link href="https://twitter.com/118eighty8">
          <a><FontAwesomeIcon icon={['fab', 'twitter']} color="#fff" size="2x" /></a>
        </Link>
      </li>
      <li>
        <Link href="https://twitter.com/118eighty8">
          <a><FontAwesomeIcon icon={['fab', 'instagram']} color="#fff" size="2x" /></a>
        </Link>
      </li>
      <li>
        <Link href="https://twitter.com/118eighty8">
          <a><FontAwesomeIcon icon={['fab', 'facebook-f']} color="#fff" size="2x" /></a>
        </Link>
      </li>
      <li>
        <Link href="https://twitter.com/118eighty8">
          <a><FontAwesomeIcon icon={['fab', 'linkedin-in']} color="#fff" size="2x" /></a>
        </Link>
      </li>
    </SocialLinks>
    <Copy>
      <span>All rights reserved &copy; {new Date().getFullYear()}. 1188</span>
      <span>Made with <span>♡</span> in South London.</span>
    </Copy>
  </Wrapper>
);

export default Footer;
