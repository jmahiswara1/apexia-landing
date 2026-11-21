import { Link } from 'react-router-dom';
import { Download } from 'lucide-react';
import { useI18n, type TranslationKey } from '../i18n';

const featureItems: readonly { art: string; titleKey: TranslationKey; descKey: TranslationKey }[] = [
  { art: '/assets/profile-blue.png', titleKey: 'features.item1Title', descKey: 'features.item1Desc' },
  { art: '/assets/bracket-blue.png', titleKey: 'features.item2Title', descKey: 'features.item2Desc' },
  { art: '/assets/rack-blue.png', titleKey: 'features.item3Title', descKey: 'features.item3Desc' },
  { art: '/assets/wheel-blue.png', titleKey: 'features.item4Title', descKey: 'features.item4Desc' },
  { art: '/assets/trophy-blue.png', titleKey: 'features.item5Title', descKey: 'features.item5Desc' },
  { art: '/assets/table-blue.png', titleKey: 'features.item6Title', descKey: 'features.item6Desc' },
];

export function FeaturesPage() {
  const { t } = useI18n();

  return (
    <section className="page-container">
      <div className="page-header">
        <h1 className="page-title">{t('features.title')}</h1>
        <p className="page-subtitle">{t('features.subtitle')}</p>
      </div>

      <div className="features-grid">
        {featureItems.map((item) => (
          <article key={item.titleKey} className="feature-card">
            <div className="feature-art-box">
              <img src={item.art} alt="" />
            </div>
            <h3>{t(item.titleKey)}</h3>
            <p>{t(item.descKey)}</p>
          </article>
        ))}
      </div>

      <div className="features-bottom-cta">
        <Link to="/download" className="btn btn-primary">
          <Download size={15} />
          <span>{t('features.cta')}</span>
        </Link>
      </div>
    </section>
  );
}
