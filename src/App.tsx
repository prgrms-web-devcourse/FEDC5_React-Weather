<<<<<<< HEAD
import './style/index.scss';
=======
import './App.scss';
>>>>>>> 1006392 (✨Feat: 메인페이지 컴포넌트 스타일링)
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Main from './Routes/Main';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={<Main />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
