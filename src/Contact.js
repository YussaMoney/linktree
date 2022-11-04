export default function Contact() {
  const name = 'Yussassiph';
  const contact = {
    title: 'Contact Me',
    titleFoot: 'Hi there, contact me to ask me about anything you have in mind.',
    checkMessage: `You agree to providing your data to ${name} who may contact you.`,
  };

  return (
    <div className="contact">
      <h1 className="title">{contact.title}</h1>
      <p className="titleFoot">{contact.titleFoot}</p>

      <form action="/" method="post">
        <label htmlFor="first_name" id="first_name">
          First name
          <input
            type="text"
            id="first_name"
            placeholder="Enter your first name"
            required
          />
        </label>

        <label htmlFor="last_name" id="last_name">
          Last name
          <input
            type="text"
            id="last_name"
            placeholder="Enter your last name"
            required
          />
        </label>

        <label htmlFor="email" id="email">
          Email
          <input
            type="text"
            id="email"
            placeholder="yourname@email.com"
            required
          />
        </label>

        <label htmlFor="message" id="message">
          Message
          <textarea
            name="message"
            id="message"
            placeholder="Send me a message and I'll reply you as soon as possible..."
            required
          />
        </label>

        <label htmlFor="confirm" id="confirm">
          <input
            type="checkbox"
            name="confirm"
            id="confirm"
          />
          {contact.checkMessage}
        </label>

        <button type="submit" id="btn__submit">Send message</button>
      </form>
    </div>
  );
}
