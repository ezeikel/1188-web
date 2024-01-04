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
} from '@react-email/components';

// const baseUrl = process.env.VERCEL_URL
//   ? `https://${process.env.VERCEL_URL}`
//   : '';
// FIX: process.env only checks ./react-email directory not parent so hardcoding for now - https://github.com/resend/react-email/issues/668
const baseUrl = 'https://1188.agency';

type ContactEnquiryClientEmailProps = {
  firstName: string;
};

const ContactEnquiryClientEmail = ({
  firstName,
}: ContactEnquiryClientEmailProps) => {
  return (
    <Tailwind
      config={{
        theme: {
          extend: {
            fontFamily: {
              primary:
                '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Ubuntu,sans-serif',
            },
          },
        },
      }}
    >
      <Html>
        <Head />
        <Preview>Thank You for Reaching Out, {firstName}!</Preview>
        <Body className="bg-[#f6f9fc] font-primary">
          <Container className="bg-white mx-auto pt-[20px] pb-[48px] mb-[64px]">
            <Section className="px-[48px]">
              <Img
                src={`${baseUrl}/images/logo.png`}
                width="50"
                alt="1188 Logo"
              />
              <Hr className="border-[#e6ebf1] my-[20px]" />
              <Text className="text-[#525f7f] text-base text-left">
                Thank you for reaching out to us! We have received your enquiry
                and our team will get back to you as soon as possible.
              </Text>
              <Text className="text-[#525f7f] text-base text-left">
                — The 1188 team
              </Text>
              <Hr className="border-[#e6ebf1] my-[20px]" />
              <Text className="text-[#8898aa] text-xs">
                1188, Pop Brixton, 49 Brixton Station Rd, London SW9 8PQ
              </Text>
            </Section>
          </Container>
        </Body>
      </Html>
    </Tailwind>
  );
};

export default ContactEnquiryClientEmail;
