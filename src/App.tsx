import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/rules" element={<div>규칙</div>} />
      <Route path="/setup" element={<div>설정</div>} />
      <Route path="/play" element={<div>게임 진행하기</div>} />
      <Route path="/result" element={<div>게임 결과</div>} />
    </Routes>
  );
}

export default App;
