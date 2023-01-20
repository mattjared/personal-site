import { useEffect, useState } from "react";
import { useRouter } from 'next/router'

export default function Contact() {
  const router = useRouter();
  const [form, setForm] =useState({
    name: "",
    email: "",
    message: "",
  });
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [isValid, setIsValid] = useState(false);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
    console.log(form);
  }

  const submitForm = async (e) => {
    e.preventDefault();
    if (isValid) {
      setFormSubmitted(true);
    }
    const res = await fetch("/api/form", {
      body: JSON.stringify({
        name: form.name,
        email: form.email,
        message: form.message,
      }),
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST"
    });
    const { error } = await res.json();
    if (error) {
      console.log(error);
      return;
    } else {
      router.push('/thanks')
    }
  }

  useEffect(() => {
    if (form.name[0] !== "" && form.email[0] !== ""  && form.message[0] !== "") {
      setIsValid(true);
    } 
    if (form.name[0] === "" || form.email[0] === "" || form.message[0] === "" ) {
      setIsValid(false);
    }
  }, [form])

  return (
    <>
      {!formSubmitted ? (
        <form action="/api/form" method="post" onSubmit={submitForm}>
          
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" required onChange={handleChange}/>
          
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" required onChange={handleChange} />

          <label htmlFor="message">Message:</label>
          <textarea type="message" id="message" name="message" required onChange={handleChange} />
          
          <button type="submit">Submit</button>
        </form>
      ) : (
        <h3>heard ya. ill be in touch</h3>
    )}
        {isValid ? "its valid" : "its not valid"}
    </>
    
  )
}