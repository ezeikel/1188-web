import { FunctionComponent } from "react";
import styled from "styled-components";
import ContactForm from "./ContactForm";
import Title from "./styles/Title";

type ContactProps = {
  className?: string;
};

const Wrapper = styled.div`
  display: grid;
  grid-row-gap: var(--spacing-large);
  padding: var(--spacing-large);
  @media (min-width: 768px) {
    grid-template-columns: repeat(4, 1fr);
    grid-column-gap: var(--spacing-huge);
    padding: var(--spacing-huge);
  }
`;

const Copy = styled.div`
  p {
    color: var(--color-black);
    font-size: 1.8rem;
    line-height: 3.2rem;
    margin: 0;
    a {
      color: var(--color-primary);
    }
  }
  @media (min-width: 768px) {
    grid-column: 1 / 3;
  }
`;

const StyledContactForm = styled(ContactForm)`
  @media (min-width: 768px) {
    grid-column: 3 / -1;
  }
`;

const Contact: FunctionComponent<ContactProps> = ({ className }) => (
  <Wrapper className={className} id="contact">
    <Title>Holla.</Title>
    <Copy>
      <p>
        Great idea for the next big thing? Let us help you bring it to life.
        Send us a quick message and we&apos;ll get back to you as soon as we
        can. The more detail the better, but if you&apos;re still not 100% sure
        on all the specifics, thats fine too. Alternatively you can shoot us an
        email at <a href="mailto:ezeikel@1188.agency">ezeikel@1188.agency</a>.
      </p>
    </Copy>
    <StyledContactForm className={className} />
  </Wrapper>
);

export default Contact;
