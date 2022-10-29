import Foot from './Foot';
import Links from './Links';
import Profile from './Profile';

function App() {
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

export default App;
