// import React from 'react'
// import './Contact.css'
// import emailjs from '@emailjs/browser'
// import Swal from 'sweetalert2'
// import { useRef } from 'react'
// import { MdOutlineEmail } from 'react-icons/md'

// const Contact = () => {
//   const form = useRef();

//   const sendEmail = (e) => {
//     e.preventDefault();

//     emailjs.sendForm('service_xumwlle', 'template_thvnzgo', form.current, 'd0l0ghi26nOVr46wH')
//       .then((result) => {
//         console.log(result.text);
//       }, (error) => {
//         console.log(error.text);
//       });
//     e.target.reset()
//     Swal.fire(
//       'Good job!',
//       'Your message has been sent!',
//       'success'
//     )
//   };

//   return (
//     <section id='reach'>
//       <div className="dm">
//         {/* <div className="mails">
//           <article className="mail">
//             <MdOutlineEmail className='contact__option-icon' />
//             <h4>Contact Us</h4>
//             <small>info@lucidcontracting.design</small>
//             <a href="Email" target="_blank">Send a message</a>
//           </article> */}
//         {/* </div> */}
//         <form ref={form} onSubmit={sendEmail} className="artform">
//           <input type="text" name='subject' placeholder='Subject' required />
//           <input type="text" name='name' placeholder='Your Full Name' required />
//           <input type="email" name='email' placeholder='Your Email' required />
//           <textarea name="message" rows="7" placeholder='Your Message' required ></textarea>
//           <button type='submit' className='btn btn-primary'>Submit</button>
//         </form>
//       </div>
//     </section >

//   )
// }

// export default Contact