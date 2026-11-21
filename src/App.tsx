import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { Footer } from './components/Footer';
import { Navbar } from './components/Navbar';
import { I18nProvider } from './i18n';
import { DownloadPage } from './pages/DownloadPage';
import { FeaturesPage } from './pages/FeaturesPage';
import { HomePage } from './pages/HomePage';

export function App() {
  return (
    <I18nProvider>
      <BrowserRouter>
        <div className="site-shell">
          <Navbar />
          <main className="site-main">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/fitur" element={<FeaturesPage />} />
              <Route path="/download" element={<DownloadPage />} />
              <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </BrowserRouter>
    </I18nProvider>
  );
}
