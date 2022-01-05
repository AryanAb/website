import ContactForm from "../components/ContactForm";
import Navbar from "../components/Navbar";

const ContactMe = () => {
  return (
    <>
      <Navbar />
      <h1>Contact Me</h1>
      <p>
        Do you want to work on a project together? Do you have a question on anything? Do you have any feedback?
        Do you want to schedule a coffee chat? Feel free to contact me for anything.
      </p>
      <ContactForm />
    </>
  );
};

export default ContactMe;
