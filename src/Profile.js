import profileImg from './img/profile-img.jpg';

export default function Profile() {
  return (
    <div className="profile">
      <div id="profile_img">
        <img src={profileImg} alt="profile-img" />
      </div>
      <p id="twitter">
        Yusuf Azeez
      </p>
      <p id="slack">
        Yussassiph
      </p>
    </div>
  )
}
