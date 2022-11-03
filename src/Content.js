// import Contact from './Contact';
import Foot from './Foot';
import Links from './Links';
import Profile from './Profile';

export default function Content() {
  return (
    <div className="app">
      <main className="app-main">
        <section className="profile-section">
          <Profile />
        </section>
        <section className="links-section">
          <Links />
        </section>
        <section className="foot-section">
          <Foot />
        </section>
      </main>
    </div>
  );
}
