import { Resend } from 'resend';
const resend = new Resend(process.env.RESEND_API_KEY);
import { EmailTemplate } from "./components/email-template";
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';
import { sql } from '@vercel/postgres';

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
    <div className="shadow p-6 flex-col mb-10">
      <h2 className="text-2xl font-semibold mb-4">Contact</h2>
      <div className="mb-4">
        <form action={create}>
          <div className="grid grid-cols-2 gap-8 mb-8">
            <div>
              <label className="mb-1" htmlFor="name">Name:</label>
              <input className="shadow-bottom p-3 bg-transparent w-full" placeholder="Full Name" type="text" id="name" name="name" required />
            </div>
            <div>
              <label className="mb-1" htmlFor="name">Email:</label>
              <input className="shadow-bottom p-3 bg-transparent w-full" placeholder="Email" type="email" id="email" name="email" required />
            </div>
          </div>
          <div className='mb-10'>
            <label className="mb-1" htmlFor="message">Message:</label>
            <input className="shadow-bottom p-3 bg-transparent w-full" placeholder="Message" type="text" id="message" name="message" required />
          </div>
          <button type="submit">Contact Me</button>
        </form>
      </div>
    </div>
  )
}