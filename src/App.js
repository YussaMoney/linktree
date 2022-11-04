import { Routes, Route } from 'react-router-dom';
import Contact from './Contact';
import Content from './Content';

function App() {
  return (
    <Routes>
      <Route path="/linktree" element={<Content />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  );
}

export default App;
