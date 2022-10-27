import Foot from "./Foot.js";
import Links from "./Links.js";
import Profile from "./Profile.js";

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
