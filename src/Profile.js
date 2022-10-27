import profileImg from './img/profile-img.jpg';

export default function Profile() {
  return (
    <div className="profile">
      <div id="profile-img">
        <img src={profileImg} alt="profile-img" />
      </div>
    </div>
  )
}
