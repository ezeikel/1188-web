import * as React from 'react';
import {
  Tailwind,
  Html,
  Head,
  Preview,
  Body,
  Container,
  Section,
  Img,
  Hr,
  Text,
  Font,
} from '@react-email/components';

// Configure path to assets folder
const baseUrl = process.env.VERCEL_URL ? process.env.VERCEL_URL : '/static';

type ContactEnquiryTeamEmailProps = {
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  message: string;
};

const ContactEnquiryTeamEmail = ({
  firstName,
  lastName,
  email,
  phoneNumber,
  message,
}: ContactEnquiryTeamEmailProps) => {
  return (
    <Tailwind
      config={{
        theme: {
          extend: {},
        },
      }}
    >
      <Html>
        <Head>
          <Font
            fontFamily="Roboto"
            fallbackFontFamily="Verdana"
            webFont={{
              url: 'https://fonts.gstatic.com/s/roboto/v27/KFOmCnqEu92Fr1Mu4mxKKTU1Kg.woff2',
              format: 'woff2',
            }}
            fontWeight={400}
            fontStyle="normal"
          />
        </Head>
        <Preview>
          New Enquiry from {firstName} {lastName}
        </Preview>
        <Body>
          <Container>
            <Section>
              <Img
                src={`${baseUrl}/images/logo.png`}
                width="49"
                height="21"
                alt="Company Logo"
              />
              <Hr />
              <Text className="text-white">
                A new client enquiry has been received. Here are the details:
              </Text>
              <Text className="text-white font-bold mt-2">
                Name: {firstName} {lastName}
              </Text>
              <Text className="text-white">Email: {email}</Text>
              <Text className="text-white">Phone number: {phoneNumber}</Text>
              <Text className="text-white mt-2">Message: {message}</Text>
              <Text className="text-white mt-4">
                Please review and follow up accordingly.
              </Text>
            </Section>
          </Container>
        </Body>
      </Html>
    </Tailwind>
  );
};

export default ContactEnquiryTeamEmail;
