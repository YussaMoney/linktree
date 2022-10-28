import slack from './img/slack-icon.jpg'
import github from './img/github-icon.png'

export default function Links() {
  return (
    <div className="links"><br />
      <a href="https://twitter.com/YussaMoney" id="twitter_link">
        Twitter Link
      </a><br /><br />
      <a href="https://training.zuri.team/" id="btn_zuri">
        Zuri Team
      </a><br /><br />
      <a href="http://books.zuri.team" id="books">
        <span>Zuri Books</span>
        <small>gghshsh</small>
      </a><br /><br />
      <a href="https://books.zuri.team/python-for-beginners?ref_id=Yussassiph" id="book_python">
        <span>Python Books</span>
        <small>gghshsh</small>
      </a><br /><br />
      <a href="https://background.zuri.team" id="pitch">
        <span>Background Check for Coders</span>
        <small>gghshsh</small>
      </a><br /><br />
      <a href="https://books.zuri.team/design-rules" id="book_design">
        <span>Design Books</span>
        <small>gghshsh</small>
      </a><br /><br />
      <div className="social-icon">
        <img src={slack} alt="slack-icon" id="slack-icon" />
        <img src={github} alt="github-icon" id="github-icon" />
      </div><br /><br /><br />
    </div>
  )
}
