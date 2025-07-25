import React, { useRef } from 'react';
import './Contact.scss';
import emailjs from "@emailjs/browser";

export default function Contact() {
  const formRef = useRef();

   const sendEmail = (e) => {
     e.preventDefault();

     emailjs
       .sendForm(
         "service_bow2k4n", // öz Service ID-n
         "template_9gdv2ft", // öz Template ID-n
         formRef.current,
         "whebQz9C9McfENLUY" // öz Public Key-in
       )
       .then(
         (result) => {
           console.log("Mesaj göndərildi:", result.text);
           alert("Mesajınız uğurla göndərildi!");
         },
         (error) => {
           console.log("Xəta:", error.text);
           alert("Mesaj göndərilə bilmədi.");
         }
       );

     e.target.reset(); // formu sıfırla
   };

  return (
    <section>
      <div className="contact">
        <div className="contactContainer">
          <div className="contactHead">Contact for Work</div>
          <div className="contactForm">
            <form ref={formRef} onSubmit={sendEmail} className="form">
              <div className="name">
                <span>Your Name</span>
                <input
                  type="text"
                  name="name"
                  placeholder="Enter your Name"
                  required
                />
              </div>
              <div className="name">
                <span>Your Email</span>
                <input
                  type="email"
                  name="email"
                  placeholder="Email ünvanınız"
                  required
                />
              </div>
              <div className="name">
                <span>Your Message</span>
                <textarea
                  name="message"
                  placeholder="Enter Your Message"
                  required
                />
              </div>
              <input
                type="hidden"
                name="time"
                value={new Date().toLocaleString()}
              />

              <button type="submit" className="contactBtn">
                <div>Get Started</div>
                <div className="cardIcon">
                  <i className="fa-solid fa-arrow-right-long"></i>
                </div>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
