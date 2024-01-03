'use client';

import { ReactElement } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import axios from 'axios';
import * as yup from 'yup';
import { cn } from '@/lib/utils';
import InputError from '../InputError/InputError';

const phoneRegExp =
  /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

const ContactSchema = yup.object().shape({
  firstName: yup.string().required('First Name is required.'),
  lastName: yup.string().required('Last Name is required.'),
  email: yup
    .string()
    .email('Email provided is not valid. Please try again.')
    .required('Email is required.'),
  phoneNumber: yup
    .string()
    .required('Phone number is required.')
    .matches(
      phoneRegExp,
      'Phone number provided is not valid. Please try again.',
    ),
  message: yup.string(),
});

type ContactFormProps = {
  className?: string;
};

const ContactForm = ({ className }: ContactFormProps) => (
  <Formik
    initialValues={{
      firstName: '',
      lastName: '',
      email: '',
      phoneNumber: '',
      message: '',
    }}
    validationSchema={ContactSchema}
    onSubmit={async (
      values,
      { setSubmitting, resetForm, setStatus },
    ): Promise<void> => {
      // TODO: cleanup/trim data being sent
      try {
        await axios.post('/api/contact', values);
      } catch (error) {
        console.log(error);
      } finally {
        setSubmitting(false);
        resetForm();
        setStatus('submitted');
      }
    }}
  >
    {({ isValid, isSubmitting, touched }): ReactElement => (
      <Form
        className={cn('grid gap-y-4', {
          [className as string]: !!className,
        })}
        data-testid="contact-form"
      >
        <section className="grid gap-y-4 md:grid-cols-[1fr_1fr] md:gap-x-4">
          <div className="flex flex-col gap-y-4">
            <label
              className="text-base text-black capitalize"
              htmlFor="firstName"
            >
              First Name
            </label>
            <Field
              data-testid="first-name-input"
              type="text"
              name="firstName"
              className="text-base text-black"
            />
            <ErrorMessage name="firstName" component={InputError} />
          </div>
          <div className="flex flex-col gap-y-4">
            <label
              className="text-base text-black capitalize"
              htmlFor="lastName"
            >
              Last Name
            </label>
            <Field
              type="text"
              name="lastName"
              data-testid="last-name-input"
              className="text-base text-black"
            />
            <ErrorMessage name="lastName" component={InputError} />
          </div>
        </section>
        <section className="flex flex-col gap-y-4">
          <div className="grid grid-rows-[auto_1fr]">
            <label className="text-base text-black capitalize" htmlFor="email">
              Email
            </label>
            <Field
              type="email"
              name="email"
              data-testid="email-input"
              className="text-base text-black"
            />
            <ErrorMessage name="email" component={InputError} />
          </div>
          <div className="flex flex-col gap-y-4">
            <label
              className="text-base text-black capitalize"
              htmlFor="phoneNumber"
            >
              Phone Number
            </label>
            <Field
              type="tel"
              name="phoneNumber"
              data-testid="phone-number-input"
              className="text-base text-black"
            />
            <ErrorMessage name="phoneNumber" component={InputError} />
          </div>
          <div className="flex flex-col gap-y-4">
            <label
              className="text-base text-black capitalize"
              htmlFor="message"
            >
              Message
            </label>
            <Field
              component="textarea"
              name="message"
              data-testid="message-input"
              className="text-base text-black resize-none"
            />
            <ErrorMessage name="message" component={InputError} />
          </div>
          <div className="flex flex-col gap-y-4">
            <button
              type="submit"
              className="bg-tertiary p-4 text-base text-white uppercase"
              disabled={
                isSubmitting ||
                !isValid ||
                !touched.firstName ||
                !touched.lastName ||
                !touched.email ||
                !touched.phoneNumber
              }
            >
              Send{isSubmitting ? 'ing' : null}
            </button>
          </div>
        </section>
      </Form>
    )}
  </Formik>
);

export default ContactForm;
