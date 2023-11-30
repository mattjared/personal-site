import { EmailTemplate } from "../../components/email-template";
import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  const data = await request.json();
  // console.log(data);
  const body = await request.text();
  console.log(data, body);
  return new Response("Hello, Next.js!");
  
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
