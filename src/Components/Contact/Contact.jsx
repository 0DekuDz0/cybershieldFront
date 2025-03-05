import ContactForm from "./ContactForm/ContactForm";
import "./Contact.css";

export default function Contact() {
  return (
    <>
      <div className="contact">
        <div>
          <h3 className="sectionTitle">{`<Have_Question?>`}</h3>
          <h1 className="mentorsTitle">
            Contact Us!
          </h1>
        </div>
        <ContactForm></ContactForm>
        <div className="contactInfo">
            <div>
                <h3>Phone</h3>
                <p className="subP">0549695923</p>
            </div>
            <div>
            <h3>Email</h3>
                <p className="subP">boudjayanis@gmail.com</p>

            </div>
        </div>
      </div>
    </>
  );
}
