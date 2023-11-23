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
    // mutate data
    // revalidate cache
    try {
      await sql`
        INSERT INTO contactforms (name, email, message)
        VALUES (${formattedFormData.name}, ${formattedFormData.email}, ${formattedFormData.message})
      `;
    } catch (error) {
      console.log(error)
    }
    revalidatePath('/');
    redirect('/');
  }
  return (
    <div className="shadow p-6 flex-col mb-10">
      <h2 className="text-2xl font-semibold mb-2">Contact</h2>
      <div className="flex flex-col mb-4">
        <form action={create}>
          <div>
            <label className="mb-1" htmlFor="name">Name:</label>
            <input className="border p-3 bg-transparent" placeholder="Full Name" type="text" id="name" name="name" required />
          </div>
          <div>
            <label className="mb-1" htmlFor="name">Email:</label>
            <input className="border p-3 bg-transparent" placeholder="Email" type="email" id="email" name="email" required />
          </div>
          <div>
            <label className="mb-1" htmlFor="message">Message:</label>
            <input className="border p-3 bg-transparent" placeholder="Message" type="text" id="message" name="message" required />
          </div>
          <button type="submit">Contact Me</button>
        </form>
      </div>
    </div>
  )
}