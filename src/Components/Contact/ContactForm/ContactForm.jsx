import "./ContactForm.css";

export default function ContactForm() {
  return (
    <>
      <div className="contactForm">
        <form action="">
          <input type="text" placeholder="Name *" required />
          <input type="email" placeholder="Email *" required />
          <input type="text" placeholder="Subject" />
          <input type="text" placeholder="Message" />
          <div>
          <button type="submit"><p>Send Message</p></button>
          </div>
        </form>
      </div>
    </>
  );
}
