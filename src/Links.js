import slack from './img/slack-icon.jpg'
import github from './img/github-icon.png'

export default function Links() {
  return (
    <div className="links">
      <a href="https://twitter.com/YussaMoney" id="twitter_link">
        Twitter Link
      </a><br />
      <a href="https://training.zuri.team/" id="btn_zuri">
        Zuri Team
      </a><br />
      <a href="http://books.zuri.team" id="books">
        Zuri Books
      </a><br />
      <a href="https://books.zuri.team/python-for-beginners?ref_id=Yussassiph" id="book_python">
        Python Books
      </a><br />
      <a href="https://background.zuri.team" id="pitch">
        Background Check for Coders
      </a><br />
      <a href="https://books.zuri.team/design-rules" id="book_design">
        Design Books
      </a>
      <div className="social-icon">
        <img src={slack} alt="slack-icon" id="slack-icon" />
        <img src={github} alt="github-icon" id="github-icon" />
      </div>
      <hr />
    </div>
  )
}
