export default function Contact() {
  const name = 'Yussassiph';
  const contact = {
    title: 'Contact Me',
    titleFoot: 'Hi there, contact me to ask me about anything you have in mind.',
    checkMessage: `You agree to providing your data to ${name} who may contact you.`,
  };

  return (
    <div className="contact">
      <h1>{contact.title}</h1>
      <p>{contact.titleFoot}</p>

      <form action="/linktree" method="post">
        <div id="name">
          <label htmlFor="first_name" id="first_name">
            First name
            <input
              type="text"
              id="first_name"
              placeholder="Enter your first name"
            />
          </label>
          <label htmlFor="last_name" id="last_name">
            Last name
            <input
              type="text"
              id="last_name"
              placeholder="Enter your last name"
            />
          </label>
        </div>

        <label htmlFor="email" id="email">
          Email
          <input
            type="text"
            id="email"
            placeholder="yourname@email.com"
          />
        </label>

        <label htmlFor="message" id="message">
          Message
          <textarea
            name="message"
            id="message"
            cols="30"
            rows="10"
            placeholder="Send me a message and I'll reply you as soon as possible..."
          />
        </label>

        <label htmlFor="check" id="check">
          <input
            type="checkbox"
            name="check"
            id="check"
          />
          {contact.checkMessage}
        </label>

        <button type="submit" id="btn__submit">Send message</button>
      </form>
    </div>
  );
}
