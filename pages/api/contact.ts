import { NextApiRequest, NextApiResponse } from "next";
const postmark = require("postmark");

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

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === "POST") {
    const {
      body: { firstName, lastName, email, message },
    } = req;

    const client = new postmark.ServerClient(process.env.POSTMARK_TOKEN);

    try {
      await client.sendEmail({
        From: "contact-form@1188.agency",
        To: "ezeikel@1188.agency",
        Subject: `Enquiry via 1188.agency from ${firstName} ${lastName} (${email})`,
        HtmlBody: createEmail(message),
        TextBody: message,
        MessageStream: "outbound",
      });

      res.status(200).json({
        message: "Email sent successfully.",
      });

      return {
        statusCode: 200,
        body: "Email sent",
      };
    } catch (error) {
      const statusCode = typeof error.code === "number" ? error.code : 500;

      res.status(statusCode).json({
        message: error.message,
      });
    }
  } else {
    res.status(404).json({
      message: "HTTP method not supported.",
    });
  }
};

export default handler;
