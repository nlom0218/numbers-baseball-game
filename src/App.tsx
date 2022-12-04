import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import Play from './Pages/Play';
import Setup from './Pages/Setup';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/rules" element={<div>규칙</div>} />
      <Route path="/setup" element={<Setup />} />
      <Route path="/play/:mode" element={<Play />} />
      <Route path="/result" element={<div>게임 결과</div>} />
    </Routes>
  );
}

export default App;
