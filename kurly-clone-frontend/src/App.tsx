import { Route, Routes } from 'react-router-dom'
import { Main, LogIn, SignUp } from './pages';
import './reset.css'


function App() {

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/login" element={<LogIn />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </div>
  );
}

export default App;
