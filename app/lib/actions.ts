'use server'

import { createClient } from '@supabase/supabase-js'

const supabase = createClient(
  process.env.SUPABASE_URL!,
  process.env.SUPABASE_ANON_KEY!
)

interface ContactFormData {
  name: string
  email: string
  message: string
}

interface ContactResult {
  error?: string
  success?: boolean
  message?: string
}

export async function createContact(formData: FormData): Promise<ContactResult> {
  const name = formData.get('name') as string
  const email = formData.get('email') as string
  const message = formData.get('message') as string

  if (!name || !email || !message) {
    return { error: 'All fields are required' }
  }

  if (!/\S+@\S+\.\S+/.test(email)) {
    return { error: 'Invalid email address' }
  }

  if (message.length < 1) {
    return { error: 'Message must be at least 1 characters long' }
  }

  try {
    const { error } = await supabase
      .from('personal_site_contact_form')
      .insert([{ name, email, message } as ContactFormData])

    if (error) throw error

    return { success: true, message: 'Message sent successfully. I will get back to you as soon as possible.\n\n 🏄🏻‍♂️🏄🏻‍♂️🏄🏻‍♂️ Thank you! 🏄🏻‍♂️🏄🏻‍♂️🏄🏻‍♂️' }
  } catch (error) {
    console.error('Error submitting form:', error)
    return { error: 'There was a problem sending your message. Please try again.' }
  }
}