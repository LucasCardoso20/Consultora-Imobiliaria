// src/App.jsx
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import HomePage from './pages/Home/HomePage';
import ImoveisPage from './pages/ImoveisPage';
import ImovelDetalhePage from './pages/ImovelDetalhePage';

function App() {
  return (
    <>
      {/* Subtle background glow */}
      <div className="pointer-events-none fixed inset-0 -z-10">
        <div
          className="absolute left-1/2 top-[-140px] h-[520px] w-[980px] -translate-x-1/2 rounded-full bg-gradient-to-b from-sand-100 to-white blur-3xl"
        ></div>
      </div>

      <Header /> {/* Componente Header */}

      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/imoveis" element={<ImoveisPage />} />
          <Route path="/imoveis/:slug" element={<ImovelDetalhePage />} />
        </Routes>
      </main>

      <Footer /> {/* Componente Footer */}
    </>
  );
}

export default App;