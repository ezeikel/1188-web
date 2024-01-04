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

// configure path to assest folder
const baseUrl = process.env.VERCEL_URL ? process.env.VERCEL_URL : '/static';

type ContactEnquiryClientEmailProps = {
  firstName: string;
  lastName: string;
};

const ContactEnquiryClientEmail = ({
  firstName,
  lastName,
}: ContactEnquiryClientEmailProps) => {
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
          Hi {firstName} {lastName},
        </Preview>
        <Body>
          <Container>
            <Section>
              <Img
                src={`${baseUrl}/images/logo.png`}
                width="49"
                height="21"
                alt="1188"
              />
              <Hr />
              <Text className="text-white">
                Thank you for reaching out to us! We have received your enquiry
                and our team will get back to you as soon as possible.
              </Text>
            </Section>
          </Container>
        </Body>
      </Html>
    </Tailwind>
  );
};

export default ContactEnquiryClientEmail;
