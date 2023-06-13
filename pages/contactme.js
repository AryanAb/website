import ContactForm from "../components/ContactForm";
import Navbar from "../components/Navbar";
import Title from "../components/Title";
import SocialMedia from "../components/SocialMedia";
import Head from "next/head";

const ContactMe = () => (
  <>
    <Head>
      <title> Contact Me | Ari Abed </title>

      <meta property="og:title" content="Ari Abed" />
      <meta
        property="og:url"
        content="https://website-aryanab.vercel.app/contactme"
      />
      <meta property="og:image" content="/images/fun.jpg" />
      <meta property="og:type" content="website" />
      <meta
        property="og:description"
        content="Contact me easily through the form on this webpage, or through one of my social media."
      />
    </Head>

    <body>
      <Navbar />
      <div style={{ marginTop: 80 }}>
        <Title str="Contact Me" />
        <div style={{ marginLeft: "10%", marginRight: "10%" }}>
          <p>
            Do you want to work on a project together? Do you have a question on
            anything? Do you have any feedback? Do you want to schedule a coffee
            chat? Feel free to contact me for anything.
          </p>
          <ContactForm />
        </div>
        <Title str="Social Media" />
        <div style={{ marginLeft: "10%", marginRight: "10%" }}>
          <p>
            You can also follow me on different social media. I'm not very
            active, but you might catch me posting something in a while.
          </p>
          <SocialMedia />
        </div>
      </div>
    </body>
  </>
);

export default ContactMe;
