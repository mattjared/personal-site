import { EmailTemplate } from "../../components/email-template";
import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST() {
  console.log('asdf');
  try {
    const data = await resend.emails.send({
      from: 'onboarding@resend.dev',
      to: 'mattjared9@gmail.com',
      subject: 'Hello World',
      react: EmailTemplate({ firstName: 'John' }),
    });

    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error });
  }
}
