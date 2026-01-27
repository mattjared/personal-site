'use client'
import { useState } from 'react';
import { useFormStatus } from 'react-dom';
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { sendEmail } from '@/app/lib/actions';
function SubmitButton() {
  const { pending } = useFormStatus();
  return <Button type="submit" disabled={pending}>{pending ? 'Submitting...' : 'Contact Me'}</Button>
}

export default function Contact() {
  const [message, setMessage] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  async function create(formData) {
    const result = await sendEmail(formData);
    if (result.success) {
      setMessage('Message sent successfully. I will get back to you as soon as possible.\n\n 🏄🏻‍♂️🏄🏻‍♂️🏄🏻‍♂️ Thank you! 🏄🏻‍♂️🏄🏻‍♂️🏄🏻‍♂️');
    } else {
      setMessage(`Failed to send: ${result.error}`);
    }
  }

  return (
    <div className="flex-col">
      <>
        { message ? (
          <p>{message}</p>
        ) : (
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
          <SubmitButton />
          </form>
        )}
      </>
    </div>
  )
}