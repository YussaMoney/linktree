import slack from './img/slack-icon.jpg'
import github from './img/github-icon.png'

export default function Links() {
  return (
    <div className="links">
      <a href="https://twitter.com/YussaMoney">
        <button id="twitter-link">
          Twitter Link
        </button>
      </a><br />
      <a href="https://training.zuri.team/">
        <button id="btn-zuri">
          Zuri Team
        </button>
      </a><br />
      <a href="http://books.zuri.team">
        <button id="books">
          Zuri Books
        </button>
      </a><br />
      <a href="https://books.zuri.team/python-for-beginners?ref_id=Yussassiph">
        <button id="book-python">
          Python Books
        </button>
      </a><br />
      <a href="https://background.zuri.team">
        <button id="pitch">
          Background Check for Coders
        </button>
      </a><br />
      <a href="https://books.zuri.team/design-rules ">
        <button id="book-design">
          Design Books
        </button>
      </a>
      <div className="social-icon">
        <img src={slack} alt="slack-icon" id="slack-icon" />
        <img src={github} alt="github-icon" id="github-icon" />
      </div>
    </div>
  )
}
