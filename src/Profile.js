import profileImg from './img/profile-img.jpg';
import arrow from './img/arrow.png';
import tripleDot from './img/triple-dot.png';

export default function Profile() {
  return (
    <div className="profile">
      <img src={profileImg} alt="profile-img" id="profile_img" />
      <a href="/"><img src={arrow} alt="arrow" className="arrow" /></a>
      <a href="/"><img src={tripleDot} alt="arrow" className="triple-dot" /></a>
      <h2 id="twitter">
        Yusuf Azeez
      </h2>
      <h2 id="slack">
        Yussassiph
      </h2>
    </div>
  );
}
