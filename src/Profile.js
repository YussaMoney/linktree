import profileImg from './img/profile-img.jpg';

export default function Profile() {
  return (
    <section className="profile-section">
      <div id="profile-img">
        <img src={profileImg} alt="profile-img" />
      </div>
    </section>
  )
}
