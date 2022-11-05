import { Routes, Route } from 'react-router-dom';
import Contact from './Contact';
import Content from './Content';
import Foot from './Foot';

function App() {
  return (
    <div className="app">
      <Routes>
        <Route path="/linktree" element={<Content />} />
        <Route path="linktree/contact" element={<Contact />} />
      </Routes>
      <section className="foot-section">
        <Foot />
      </section>
    </div>
  );
}

export default App;
