import ContactForm from "../components/ContactForm";
import Navbar from "../components/Navbar";
import Title from "../components/Title";
import SocialMedia from "../components/SocialMedia";

const ContactMe = () => (
  <body>
    <Navbar />
    <div style={{ marginTop: 80 }}>
      <Title str="Contact Me" />
      <div style={{ marginLeft: '10%', marginRight: '10%' }}>
        <p>
          Do you want to work on a project together? Do you have a question on anything? Do you have any feedback?
          Do you want to schedule a coffee chat? Feel free to contact me for anything.
        </p>
        <ContactForm />
      </div>
      <Title str="Social Media" />
      <div style={{ marginLeft: '10%', marginRight: '10%' }}>
        <p>
          You can also follow me on different social media. I'm not very active, but you might catch me posting something
          in a while.
        </p>
        <SocialMedia />
      </div>
    </div>
  </body>
);

export default ContactMe;
