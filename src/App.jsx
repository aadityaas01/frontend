import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AuroraBackgroundDemo } from './components(main)/Aurora-Background';
import SignupFormDemo from './components(main)/signup-form-demo';
import LoginPage from './components(main)/Login';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AuroraBackgroundDemo />} />
        <Route path="/signup" element={<SignupFormDemo />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </BrowserRouter>
   
  );
}

export default App;
