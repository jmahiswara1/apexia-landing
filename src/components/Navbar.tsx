import { NavLink, Link } from 'react-router-dom';
import { Download, LayoutGrid, Home } from 'lucide-react';
import { useI18n } from '../i18n';

export function Navbar() {
  const { locale, setLocale, t } = useI18n();

  return (
    <header className="navbar-wrap">
      <nav className="navbar" aria-label="Primary">
        <Link to="/" className="brand-mark">
          <span className="brand-icon" aria-hidden="true">
            <img src="/assets/rack-blue.png" alt="" width={22} height={22} style={{ objectFit: 'contain' }} />
          </span>
          <span className="brand-wordmark">apexia</span>
        </Link>

        <div className="nav-pill">
          <NavLink to="/" end className={({ isActive }) => `nav-link${isActive ? ' active' : ''}`}>
            <Home size={14} />
            <span>{t('nav.home')}</span>
          </NavLink>
          <NavLink to="/fitur" className={({ isActive }) => `nav-link${isActive ? ' active' : ''}`}>
            <LayoutGrid size={14} />
            <span>{t('nav.features')}</span>
          </NavLink>
          <NavLink to="/download" className={({ isActive }) => `nav-link${isActive ? ' active' : ''}`}>
            <Download size={14} />
            <span>{t('nav.download')}</span>
          </NavLink>
        </div>

        <div className="nav-actions">
          <div className="lang-toggle" role="group" aria-label="Language">
            <button
              type="button"
              className={`lang-btn${locale === 'id' ? ' active' : ''}`}
              onClick={() => setLocale('id')}
            >
              ID
            </button>
            <button
              type="button"
              className={`lang-btn${locale === 'en' ? ' active' : ''}`}
              onClick={() => setLocale('en')}
            >
              EN
            </button>
          </div>
          <Link to="/download" className="btn btn-primary">
            {t('nav.getApp')}
          </Link>
        </div>
      </nav>
    </header>
  );
}
