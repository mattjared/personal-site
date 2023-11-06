// "use client"
// import { useEffect, useState } from "react";
// import { useRouter } from 'next/navigation';
// import { routingUrl } from "./utils/routing";

// export default function Contact() {
//   const router = useRouter();
//   const [form, setForm] = useState({
//     name: "",
//     email: "",
//     message: "",
//   });
//   const [formSubmitted, setFormSubmitted] = useState(false);
//   const [isValid, setIsValid] = useState(false);

//   const handleChange = (e) => {
//     setForm({
//       ...form,
//       [e.target.name]: e.target.value
//     });
//   }

//   const submitForm = async (e) => {
//     e.preventDefault();
//     if (isValid) {
//       setFormSubmitted(true);
//     }
//     const res = await fetch(`${routingUrl}/form`, {
//       body: JSON.stringify({
//         name: form.name,
//         email: form.email,
//         message: form.message,
//       }),
//       headers: {
//         "Content-Type": "application/json",
//       },
//       method: "POST"
//     });
//     if (!res.ok) {
//     // This will activate the closest `error.js` Error Boundary
//       throw new Error('Failed to fetch data');
//     } else {
//       router.push('/thanks')
//     }
//   }

//   useEffect(() => {
//     const { name, email, message } = form;
//     const isValid = name !== "" && email !== "" && message !== "";
//     setIsValid(isValid);
//   }, [form])

//   return (
//     <div className="shadow p-6 flex-col mb-10">
//       <h2 className="text-2xl font-semibold mb-2">Contact</h2>
//       {!formSubmitted ? (
//         <form action="/api/form" method="post" onSubmit={submitForm}>
//           <div className="flex flex-col mb-4">
//             <label className="mb-1" htmlFor="name">Name:</label>
//             <input className="border p-3 bg-transparent" placeholder="Full Name" type="text" id="name" name="name" required onChange={handleChange}/>
//           </div>
//           <div className="flex flex-col mb-4">
//             <label className="mb-1" htmlFor="email">Email:</label>
//             <input className="border p-3 bg-transparent" placeholder="email@example.com" type="email" id="email" name="email" required onChange={handleChange} />
//           </div>
//           <div className="flex flex-col mb-4">
//             <label className="mb-1" htmlFor="message">Message:</label>
//             <textarea className="border p-3 bg-transparent" placeholder="Hi. Here is a great message" type="message" id="message" name="message" required onChange={handleChange} />
//           </div>
//           <button type="submit" className={`bg-altBlue font-bold p-2 text-mainBlue ${isValid ? "opacity-100" : "opacity-50"}`} disabled={!isValid}>Submit</button>
//         </form>
//       ) : (
//         <h3>... redirecting ...</h3>
//     )}
//     </div>
    
//   )
// }