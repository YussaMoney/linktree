import Links from './Links';
import Profile from './Profile';

export default function Content() {
  return (
    <main className="app-main">
      <section className="profile-section">
        <Profile />
      </section>
      <section className="links-section">
        <Links />
      </section>
    </main>
  );
}
