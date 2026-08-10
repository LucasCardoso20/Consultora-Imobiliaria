import { Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import HomePage from './pages/Home/HomePage';

import { GlowBackdrop, GlowShape } from './App.styles';
import ImoveisPage from './pages/Imoveis/ImoveisPage';
import ImovelDetalhePage from './pages/Imoveis/ImovelDetalhePage';

function App() {
  return (
    <>
      <GlowBackdrop>
        <GlowShape />
      </GlowBackdrop>

      <Header />

      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/imoveis" element={<ImoveisPage />} />
          <Route path="/imoveis/:slug" element={<ImovelDetalhePage />} />
        </Routes>
      </main>

      <Footer />
    </>
  );
}

export default App;