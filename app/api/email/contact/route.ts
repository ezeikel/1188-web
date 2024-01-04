/* eslint-disable import/prefer-default-export */

import { NextRequest } from 'next/server';
import { Resend } from 'resend';
import ContactEnquiryClientEmail from '@/emails/ContactEnquiryClientEmail';
import ContactEnquiryTeamEmail from '@/emails/ContactEnquiryTeamEmail';

const resend = new Resend(process.env.RESEND_API_KEY as string);

export async function POST(request: NextRequest) {
  const { firstName, lastName, email, phoneNumber, message } =
    await request.json();

  // email to team
  await resend.emails.send({
    from: 'enquiries@1188.agency',
    to: 'ezeikel@1188.agency',
    subject: `Action Required: Enquiry Received from ${firstName} ${lastName}`,
    react: ContactEnquiryTeamEmail({
      firstName,
      lastName,
      email,
      phoneNumber,
      message,
    }),
  });

  // email to client
  await resend.emails.send({
    from: 'no-reply@1188.agency',
    to: email,
    subject: `We've Received Your Enquiry, ${firstName}!`,
    react: ContactEnquiryClientEmail({
      firstName,
      lastName,
    }),
  });

  return Response.json(
    {
      message: 'Email sent successfully.',
    },
    {
      status: 200,
    },
  );
}
