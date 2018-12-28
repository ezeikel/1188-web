import styled from 'styled-components';

const Form = styled.form`
  display: grid;
  grid-row-gap: var(--spacing-medium);
`;

const SingleFormfield = styled.section`
  display: grid;
  grid-row-gap: var(--spacing-medium);
`;

const DoubleFormfield = styled.section`
  display: grid;
  grid-row-gap: var(--spacing-medium);
  @media (min-width: 768px) {
    grid-template-columns: 1fr 1fr;
    grid-column-gap: var(--spacing-medium);
  }
`;

const Fieldset = styled.div`
  display: grid;
  grid-template-rows: auto 1fr;
  grid-row-gap: var(--spacing-medium);
`;

const Label = styled.label`
  color: var(--color-black);
  text-transform: capitalize;
`;

// const SubmitMessage = styled.div `
//   padding: var(--spacing-medium);
//   margin-bottom: var(--spacing-large);
//   text-align: center;
//   p {
//     color: var(--color-white);
//     margin: 0;
//   }
//   &--success {
//     background-color: var(--color-green);
//   }
//   span {
//     text-decoration: underline;
//   }
// `;


const ContactForm = ({ className }) => (
  <Form className={className}>
    <DoubleFormfield>
      <Fieldset>
        <Label htmlFor="first-name">First Name</Label>
        <input type="text" name="first-name" placeholder="Biggie" autoComplete="off" required />
      </Fieldset>
      <Fieldset>
        <Label htmlFor="last-name">Last Name</Label>
        <input type="text" name="last-name" placeholder="Smalls" autoComplete="off" required />
      </Fieldset>
    </DoubleFormfield>
    <SingleFormfield>
      <Fieldset>
        <Label htmlFor="email">Email</Label>
        <input autoCapitalize="off" autoComplete="off" email="true" name="email" pattern="^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$" placeholder="biggie@smalls.com" required type="email" />
      </Fieldset>
      <Fieldset>
        <Label htmlFor="tel">Phone number</Label>
        <input autoComplete="off" maxLength="11" minLength="11" name="tel" placeholder="07953005302" required type="tel" />
      </Fieldset>
      <Fieldset>
        <Label htmlFor="message">Message</Label>
        <textarea autoComplete="off" maxLength="160" name="message" placeholder="Hi, I need some dope work done. Can you help ASAP?" type="text" />
      </Fieldset>
      <Fieldset>
        <button type="submit" disabled>Send</button>
      </Fieldset>
    </SingleFormfield>
  </Form>
);

export default ContactForm;
