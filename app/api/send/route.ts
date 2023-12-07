// import { route } from "../utils/routing";
// const POSTMARK_API = process.env.NEXT_PUBLIC_POSTMARK_API;
// const POSTMARK_EMAIL_FROM = process.env.NEXT_PUBLIC_POSTMARK_EMAIL_FROM;
// const POSTMARK_EMAIL_TO=process.env.NEXT_PUBLIC_POSTMARK_EMAIL_TO;
// const postmark = require("postmark");
// const postmarkApp = new postmark.ServerClient(POSTMARK_API);

// export async function POST(request) {
//   const data = await request.json();
//   try {
//     const messageInfo = `\n---\n>>>from:${data.email} \n>>>name: ${data.name} \n>>>url: ${route}`;
//     postmarkApp.sendEmail({
//         "From": POSTMARK_EMAIL_FROM,
//         "To": POSTMARK_EMAIL_TO,
//         "Subject": data.subject,
//         "TextBody": `${data.message} ${messageInfo}`,
//     });
//   } catch (error) {
//       response.status(400).send('Message not sent.');
//       throw new Error(error);
//   }
//   const options = { status: 200 }
//   return new Response(data, options);
// }

// import { EmailTemplate } from "../../components/email-template";
// import { Resend } from 'resend';
// const resend = new Resend(process.env.RESEND_API_KEY);
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: Request) {
  const data = await request.json();
  console.log(data);
  return new Response(data);
  // const data = await request.json();
  // console.log(data);
  // const body = await request.text();
  // const data = await request.formData();
  // console.log(data);
  // return new Response(JSON.stringify(data))
  // return new Response("Hello, Next.js!");
  
  // const formData = await request.formData()
  // const name = formData.get('name')
  // const email = formData.get('email')
  // return Response.json({ name, email })
  // try {
  //   const data = await resend.emails.send({
  //     from: 'onboarding@resend.dev',
  //     to: 'mattjared9@gmail.com',
  //     subject: 'Hello World',
  //     react: EmailTemplate({ firstName: 'John' }),
  //   });

  //   return NextResponse.json(data);
  // } catch (error) {
  //   return NextResponse.json({ error });
  // }
}
