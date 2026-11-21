import { ExternalLink, Globe, Smartphone } from 'lucide-react';
import { siteConfig } from '../config';
import { useI18n } from '../i18n';

export function DownloadPage() {
  const { t } = useI18n();

  return (
    <section className="page-container">
      <div className="page-header">
        <h1 className="page-title">{t('download.title')}</h1>
        <p className="page-subtitle">{t('download.subtitle')}</p>
      </div>

      <div className="download-grid">
        <article className="download-card featured">
          <span className="download-badge">{t('download.pwaBadge')}</span>
          <h3>{t('download.pwaTitle')}</h3>
          <p>{t('download.pwaDesc')}</p>
          <a href={siteConfig.downloads.webAppUrl} target="_blank" rel="noreferrer" className="btn btn-inverse">
            <Globe size={15} />
            <span>{t('download.pwaCta')}</span>
            <ExternalLink size={14} />
          </a>
        </article>

        <article className="download-card">
          <span className="download-badge">{t('download.androidBadge')}</span>
          <h3>{t('download.androidTitle')}</h3>
          <p>{t('download.androidDesc')}</p>
          <a href={siteConfig.downloads.androidApkUrl} className="btn btn-secondary">
            <Smartphone size={15} />
            <span>{t('download.androidCta')}</span>
          </a>
        </article>

        <article className="download-card">
          <span className="download-badge">{t('download.iosBadge')}</span>
          <h3>{t('download.iosTitle')}</h3>
          <p>{t('download.iosDesc')}</p>
          <a href={siteConfig.downloads.iosPwaUrl} target="_blank" rel="noreferrer" className="btn btn-secondary">
            <ExternalLink size={15} />
            <span>{t('download.iosCta')}</span>
          </a>
        </article>
      </div>

      <div className="guide-card">
        <h2>{t('download.guideTitle')}</h2>
        <div className="guide-steps">
          <div className="guide-step">
            <h4>{t('download.step1Title')}</h4>
            <p>{t('download.step1Desc')}</p>
          </div>
          <div className="guide-step">
            <h4>{t('download.step2Title')}</h4>
            <p>{t('download.step2Desc')}</p>
          </div>
          <div className="guide-step">
            <h4>{t('download.step3Title')}</h4>
            <p>{t('download.step3Desc')}</p>
          </div>
        </div>
      </div>

      <p className="placeholder-note">{t('download.placeholderNote')}</p>
    </section>
  );
}
