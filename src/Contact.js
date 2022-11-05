/* eslint-disable no-param-reassign */
/* eslint-disable no-else-return */
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Contact() {
  const name = 'Yussassiph';
  const contact = {
    first: 'First name',
    last: 'Last name',
    title: 'Contact Me',
    titleFoot: 'Hi there, contact me to ask me about anything you have in mind.',
    checkMessage: `You agree to providing your data to ${name} who may contact you.`,
  };
  const navigate = useNavigate();
  const initialData = {
    first_name: '', last_name: '', email: '', message: '',
  };
  const [formData, setFormData] = useState(initialData);
  const [errors, setErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  function handleUpdate(e) {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  }

  function validate(values) {
    const formInput = document.querySelectorAll('form input');
    formInput.forEach((input) => {
      if (input.value === '') {
        input.classList.add('red-border');
      } else {
        input.classList.remove('red-border');
      }
    });
    const textArea = document.querySelector('form textarea');
    if (textArea.value === '') {
      textArea.classList.add('red-border');
    } else {
      textArea.classList.remove('red-border');
    }
    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if (!values.first_name) {
      errors.first_name = 'First name is required!';
    }
    if (!values.last_name) {
      errors.last_name = 'Last name is required!';
    }
    if (!values.message) {
      errors.message = 'Please enter a message!';
    } else if (values.message.length < 5) {
      errors.message = 'Message too short!';
    }
    if (!values.email) {
      errors.email = 'Email address is required!';
    } else if (!regex.test(values.email)) {
      errors.email = 'Email address is invalid!';
    }

    const notifyText = document.querySelector('#notify-text');
    if (values.message.length > 5 && values.first_name !== '' && values.last_name !== '' && values.email !== '') {
      notifyText.style.display = 'block';
      values.message = '';
      values.email = '';
      values.first_name = '';
      values.last_name = '';
      setTimeout(() => {
        notifyText.style.display = 'none';
        navigate('/linktree');
      }, 1500);
    }
    return errors;
  }

  function handleSubmit(e) {
    e.preventDefault();
    setErrors(validate(formData));
    setIsSubmit(true);
  }

  useEffect(() => {
    if (Object.keys(errors).length === 0 && isSubmit) {
      // eslint-disable-next-line no-useless-return
      return;
    }
  }, [errors, isSubmit]);

  return (
    <div className="contact">
      <div id="notify-text">
        Your message has been sent successfully!
      </div>
      <h1>{contact.title}</h1>
      <br />
      <p>{contact.titleFoot}</p>
      <br />

      <form onSubmit={handleSubmit}>
        <div id="name">
          <label htmlFor="first_name" id="first_name">
            First name
            <input
              type="text"
              id="first_name"
              name="first_name"
              placeholder="Enter your first name"
              value={formData.first_name}
              onChange={handleUpdate}
            />
            <p className="error-message">{errors.first_name}</p>
          </label>

          <label htmlFor="last_name" id="last_name">
            Last name
            <input
              type="text"
              id="last_name"
              name="last_name"
              placeholder="Enter your last name"
              value={formData.last_name}
              onChange={handleUpdate}
            />
            <p className="error-message">{errors.last_name}</p>
          </label>
        </div>
        <br />

        <label htmlFor="email" id="email">
          Email
          <input
            type="text"
            id="email"
            name="email"
            placeholder="yourname@email.com"
            value={formData.email}
            onChange={handleUpdate}
          />
        </label>
        <p className="error-message">{errors.email}</p>
        <br />

        <label htmlFor="message" id="message">
          Message
          <textarea
            name="message"
            id="message"
            cols="30"
            rows="10"
            value={formData.message}
            onChange={handleUpdate}
            placeholder="Send me a message and I'll reply you as soon as possible..."
          />
        </label>
        <p className="error-message">{errors.message}</p>
        <br />

        <label htmlFor="check" id="check">
          <input
            type="checkbox"
            name="check"
            id="check"
          />
          {contact.checkMessage}
        </label>
        <br />

        <button type="submit" id="btn__submit">Send message</button>
      </form>
    </div>
  );
}
