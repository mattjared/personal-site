'use client'
// import { Resend } from 'resend';
// const resend = new Resend(process.env.RESEND_API_KEY);
// import { EmailTemplate } from "./email-template";
import { createContact } from '../lib/actions';
import { useState } from 'react';
import { useFormStatus } from 'react-dom';
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

function SubmitButton() {
  const { pending } = useFormStatus();
  return <Button type="submit" disabled={pending}>{pending ? 'Submitting...' : 'Contact Me'}</Button>
}

export default function Contact() {
  const [message, setMessage] = useState('');
  async function create(formData) {
    const email = formData.get('email');
    const vercelEmailPattern = /^[a-zA-Z0-9._%+-]+@vercel\.com$/;
    if (!vercelEmailPattern.test(email)) {
      setMessage('Only @vercel.com email addresses are allowed');
      return;
    }
    
    const result = await createContact(formData);
    if (result.error) {
      setMessage(result.error);
    } else {
      setMessage(result.message);
    }
  }

  return (
    <Card className="p-6 flex-col mb-10">
      <CardContent>
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
      </CardContent>
    </Card>
  )
}