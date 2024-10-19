import { Resend } from 'resend';
const resend = new Resend(process.env.RESEND_API_KEY);
import { EmailTemplate } from "./email-template";
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';
import { sql } from '@vercel/postgres';
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function Contact() {
  async function create(formData) {
    'use server'
    const formattedFormData = {
      name: formData.get("name").toString(),
      email: formData.get("email").toString(),
      message: formData.get("message").toString(),
    }
    try {
      await sql`
        INSERT INTO contactforms (name, email, message)
        VALUES (${formattedFormData.name}, ${formattedFormData.email}, ${formattedFormData.message})
      `;
    } catch (error) {
      console.log(error)
    }
    // const formData = await request.formData()
    const name = formData.get('name')
    const email = formData.get('email')
    const submittedTime = new Date();
    try {
      await resend.emails.send({
        from: email,
        to: 'mattjared9@gmail.com',
        subject: 'Contact Form Submission',
        react: EmailTemplate({ firstName: name, email: email, submittedTime: submittedTime }),
      });
    } catch (error) {
      throw(error);
    }
    revalidatePath('/');
    redirect('/');
  }
  return (
    <Card className="p-6 flex-col mb-10">
      <CardContent>
        <form action={create}>
          <div className="mb-4">
            <Input placeholder="Full Name" type="text" id="name" name="name" required />
          </div>
          <div className="mb-4">
            <Input placeholder="Email" type="email" id="email" name="email" required />
          </div>
          <div className="mb-4">
            <Input placeholder="Message" type="text" id="message" name="message" required />
          </div>
          <Button type="submit">Contact Me</Button>
        </form>
      </CardContent>
    </Card>
  )
}