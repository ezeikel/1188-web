import { FunctionComponent, ReactElement } from "react";
import styled from "styled-components";
import { Formik, Form, Field, ErrorMessage } from "formik";
import axios from "axios";
import * as yup from "yup";

type ContactFormProps = {
  className?: string;
};

const FormWrapper = styled(Form)`
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
  .error {
    font-size: var(--font-size-tiny);
    background-color: var(--color-red);
    color: var(--color-white);
    padding: var(--spacing-small);
  }
  button {
    background-color: var(--color-tertiary);
  }
`;

const Label = styled.label`
  color: var(--color-black);
  text-transform: capitalize;
`;

const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

const ContactSchema = yup.object().shape({
  firstName: yup.string().required("First Name is required."),
  lastName: yup.string().required("Last Name is required."),
  email: yup
    .string()
    .email("Email provided is not valid. Please try again.")
    .required("Email is required."),
  phoneNumber: yup
    .string()
    .required("Phone number is required.")
    .matches(
      phoneRegExp,
      "Phone number provided is not valid. Please try again.",
    ),
  message: yup.string(),
});

const ContactForm: FunctionComponent<ContactFormProps> = ({ className }) => (
  <Formik
    initialValues={{
      firstName: "",
      lastName: "",
      email: "",
      phoneNumber: "",
      message: "",
    }}
    validationSchema={ContactSchema}
    onSubmit={async (values, actions): Promise<void> => {
      console.log(actions);
      try {
        await axios.post(
          "https://nc0j2ha6l0.execute-api.eu-west-1.amazonaws.com/PRODUCTION",
          values,
        );
      } catch (error) {
        console.log(error);
      } finally {
        actions.setSubmitting(false);
        actions.resetForm();
        actions.setStatus("submitted");
      }
    }}
  >
    {({ isValid, isSubmitting, touched }): ReactElement => (
      <FormWrapper className={className} data-testid="contact-form">
        <DoubleFormfield>
          <Fieldset>
            <Label htmlFor="firstName">First Name</Label>
            <Field
              data-testid="first-name-input"
              type="text"
              name="firstName"
            />
            <ErrorMessage name="firstName">
              {(msg): ReactElement => <div className="error">{msg}</div>}
            </ErrorMessage>
          </Fieldset>
          <Fieldset>
            <Label htmlFor="lastName">Last Name</Label>
            <Field type="text" name="lastName" data-testid="last-name-input" />
            <ErrorMessage name="lastName">
              {(msg): ReactElement => <div className="error">{msg}</div>}
            </ErrorMessage>
          </Fieldset>
        </DoubleFormfield>
        <SingleFormfield>
          <Fieldset>
            <Label htmlFor="email">Email</Label>
            <Field type="email" name="email" data-testid="email-input" />
            <ErrorMessage name="email">
              {(msg): ReactElement => <div className="error">{msg}</div>}
            </ErrorMessage>
          </Fieldset>
          <Fieldset>
            <Label htmlFor="phoneNumber">Phone Number</Label>
            <Field
              type="tel"
              name="phoneNumber"
              data-testid="phone-number-input"
            />
            <ErrorMessage name="phoneNumber">
              {(msg): ReactElement => <div className="error">{msg}</div>}
            </ErrorMessage>
          </Fieldset>
          <Fieldset>
            <Label htmlFor="message">Message</Label>
            <Field
              component="textarea"
              name="message"
              data-testid="message-input"
            />
            <ErrorMessage name="message">
              {(msg): ReactElement => <div className="error">{msg}</div>}
            </ErrorMessage>
          </Fieldset>
          <Fieldset>
            <button
              type="submit"
              disabled={
                isSubmitting ||
                !isValid ||
                !touched.firstName ||
                !touched.lastName ||
                !touched.email ||
                !touched.phoneNumber
              }
            >
              Send{isSubmitting ? "ing" : null}
            </button>
          </Fieldset>
        </SingleFormfield>
      </FormWrapper>
    )}
  </Formik>
);

export default ContactForm;
