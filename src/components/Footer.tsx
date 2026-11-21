import { Link } from 'react-router-dom';
import { useI18n } from '../i18n';

export function Footer() {
  const { t } = useI18n();
  const year = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <div className="footer-brand">
          <Link to="/" className="brand-mark">
            <span className="brand-icon" aria-hidden="true">
              <img src="/assets/rack-blue.png" alt="" width={20} height={20} style={{ objectFit: 'contain' }} />
            </span>
            <span className="brand-wordmark">apexia</span>
          </Link>
          <span className="footer-tagline">{t('footer.tagline')}</span>
        </div>

        <div className="footer-links">
          <Link to="/">{t('nav.home')}</Link>
          <Link to="/fitur">{t('nav.features')}</Link>
          <Link to="/download">{t('nav.download')}</Link>
        </div>

        <span className="footer-copy">{t('footer.rights', { year })}</span>
      </div>
    </footer>
  );
}
