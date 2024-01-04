/* eslint-disable import/prefer-default-export */

import { NextRequest } from 'next/server';
import postmark from 'postmark';

const createEmail = (text: string) => `
  <div style="
    border: 1px solid black;
    padding: 20px;
    font-family: sans-serif;
    line-height: 2;
    font-size: 20px;
  ">
    <p>${text}</p>
  </div>
`;

export async function POST(request: NextRequest) {
  const { firstName, lastName, email, message } = await request.json();

  const client = new postmark.ServerClient(
    process.env.POSTMARK_TOKEN as string,
  );

  try {
    await client.sendEmail({
      From: 'contact-form@1188.agency',
      To: 'ezeikel@1188.agency',
      Subject: `Enquiry via 1188.agency from ${firstName} ${lastName} (${email})`,
      HtmlBody: createEmail(message),
      TextBody: message,
      MessageStream: 'outbound',
    });

    return Response.json(
      {
        message: 'Email sent successfully.',
      },
      {
        status: 200,
      },
    );
  } catch (error) {
    const statusCode = typeof error.code === 'number' ? error.code : 500;

    return Response.json(
      {
        message: error.message,
      },
      {
        status: statusCode,
      },
    );
  }
}
