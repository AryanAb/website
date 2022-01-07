import { useState } from "react";
import axios from "axios";

import formStyles from "../styles/contactme.module.css";

const ContactForm = () => {
  const [status, setStatus] = useState({
    submitted: false,
    submitting: false,
    info: { error: false, msg: null }
  });

  const [inputs, setInputs] = useState({
    email: '',
    subject: '',
    message: ''
  });

  const handleServerResponse = (ok, msg) => {
    if (ok) {
      setStatus({
        submitted: true,
        submitting: false,
        info: { error: false, msg: msg }
      });
      setInputs({
        email: '',
        subject: '',
        message: ''
      });
    } else {
      setStatus({
        info: { error: true, msg: msg }
      });
    }
  };

  const handleOnChange = e => {
    e.persist();
    setInputs(prev => ({
      ...prev,
      [e.target.id]: e.target.value
    }));
    setStatus({
      submitted: false,
      submitting: false,
      info: { error: false, msg: null }
    });
  };

  const handleOnSubmit = e => {
    e.preventDefault();
    setStatus(prevStatus => ({ ...prevStatus, submitting: true }));
    axios({
      method: 'POST',
      url: 'https://formspree.io/f/mzbozkgb',
      data: inputs
    }).then(response => {
      handleServerResponse(true, 'Thank You, your message has been submitted')
    }).catch(error => {
      handleServerResponse(false, error.response.data.error);
    });
  };

  return (
    <div>
      <form onSubmit={handleOnSubmit} className={formStyles.form}>
        <label htmlFor="email">Email</label>
        <input className={formStyles.textbox} id="email" name="_replyto" required type="email" onChange={handleOnChange} value={inputs.email} />

        <label htmlFor="subject">Subject</label>
        <input className={formStyles.textbox} id="subject" name="_subject" required type="text" onChange={handleOnChange} value={inputs.subject} />

        <label htmlFor="message">Message</label>
        <textarea className={formStyles.textarea} id="message" name="message" required onChange={handleOnChange} value={inputs.message} />

        <button type="submit" disabled={status.submitting} className={formStyles.submit}>{!status.submitting ? !status.submitted ? 'SUBMIT' : 'SUBMITTED' : 'SUBMITTING ...'}</button>
      </form>
      {status.info.error && (<div className="error">Error: {status.info.msg}</div>)}
      {!status.info.error && status.info.msg && <p>{status.info.msg}</p>}
    </div>
  );
};

export default ContactForm;
