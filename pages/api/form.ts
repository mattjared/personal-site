// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { GoogleSpreadsheet } from 'google-spreadsheet';

type Data = {
  data: string
}

const SPREADSHEET_ID = process.env.NEXT_PUBLIC_SPREADSHEET_ID;
const SHEET_ID = process.env.NEXT_PUBLIC_SHEET_ID;
const GOOGLE_CLIENT_EMAIL = process.env.NEXT_PUBLIC_GOOGLE_CLIENT_EMAIL;
const GOOGLE_SERVICE_PRIVATE_KEY =
  process.env.NEXT_PUBLIC_GOOGLE_SERVICE_PRIVATE_KEY;

const doc = new GoogleSpreadsheet(SPREADSHEET_ID);

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const body = req.body;
  console.log(body);
  const newRow = {
    Name: body.name,
    Email: body.email,
    Message: body.message
  };
  if (GOOGLE_CLIENT_EMAIL && GOOGLE_SERVICE_PRIVATE_KEY && SHEET_ID) {
    try {
      await doc.useServiceAccountAuth({
        client_email: GOOGLE_CLIENT_EMAIL,
        private_key: GOOGLE_SERVICE_PRIVATE_KEY.replace(/\\n/g, '\n'),
      });
      await doc.loadInfo();
      const sheet = doc.sheetsById[SHEET_ID];
      await sheet.addRow(newRow);
    } catch(e) {
      console.error("Error: ", e);
    };
  }
  res.status(200).json({ data: body })
}
