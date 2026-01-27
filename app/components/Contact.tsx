'use client'

import { useState } from 'react';
import { useFormStatus } from 'react-dom';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { sendEmail } from '@/app/lib/actions';

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" disabled={pending}>
      {pending ? 'Submitting...' : 'Contact Me'}
    </Button>
  );
}

export default function Contact() {
  const [message, setMessage] = useState('');

  async function handleSubmit(formData: FormData) {
    const result = await sendEmail(formData);
    if (result.success) {
      setMessage('Message sent successfully. I will get back to you as soon as possible.\n\n 🏄🏻‍♂️🏄🏻‍♂️🏄🏻‍♂️ Thank you! 🏄🏻‍♂️🏄🏻‍♂️🏄🏻‍♂️');
    } else {
      setMessage(`Failed to send: ${result.error}`);
    }
  }

  if (message) {
    return <p>{message}</p>;
  }

  return (
    <form action={handleSubmit}>
      <div className="mb-4">
        <Input placeholder="Full Name" type="text" name="name" required />
      </div>
      <div className="mb-4">
        <Input placeholder="Email" type="email" name="email" required />
      </div>
      <div className="mb-4">
        <Input placeholder="Message" type="text" name="message" required />
      </div>
      <SubmitButton />
    </form>
  );
}
