import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2, Disc3, Download, HardDrive, Layers, Trophy, Users } from 'lucide-react';
import { useI18n } from '../i18n';

export function HomePage() {
  const { t } = useI18n();

  return (
    <section className="hero">
      <div className="hero-badge">
        <span className="hero-badge-dots" aria-hidden="true">
          <span className="badge-dot eight">8</span>
          <span className="badge-dot nine">9</span>
          <span className="badge-dot ten">10</span>
        </span>
        <span>{t('hero.badge')}</span>
      </div>

      <h1 className="hero-title">
        {t('hero.titleBefore')}
        <span className="hero-inline-art" aria-hidden="true">
          <img src="/assets/trophy-blue.png" alt="" />
        </span>
        {t('hero.titleAfter')}
        <br />
        {t('hero.titleLine2')}
      </h1>

      <p className="hero-subtitle">{t('hero.subtitle')}</p>

      <div className="hero-cta-row">
        <Link to="/download" className="btn btn-primary">
          <Download size={15} />
          <span>{t('hero.ctaPrimary')}</span>
        </Link>
        <Link to="/fitur" className="btn btn-secondary">
          <span>{t('hero.ctaSecondary')}</span>
          <ArrowRight size={15} />
        </Link>
      </div>

      <div className="hero-stage">
        {/* Left floating feature stack (matches reference fading pills) */}
        <div className="hero-left-stack" aria-label="Highlights">
          <div className="float-pill fade-2">
            <span className="float-pill-icon"><Users size={14} /></span>
            <span>{t('hero.pill1')}</span>
          </div>
          <div className="float-pill fade-1">
            <span className="float-pill-icon"><Layers size={14} /></span>
            <span>{t('hero.pill2')}</span>
          </div>
          <div className="float-pill featured">
            <span className="float-pill-icon"><CheckCircle2 size={15} /></span>
            <span>{t('hero.pill3')}</span>
          </div>
          <div className="float-pill fade-1">
            <span className="float-pill-icon"><Disc3 size={14} /></span>
            <span>{t('hero.pill4')}</span>
          </div>
          <div className="float-pill fade-2">
            <span className="float-pill-icon"><HardDrive size={14} /></span>
            <span>{t('hero.pill5')}</span>
          </div>
        </div>

        {/* Center 3D Hero Asset */}
        <div className="hero-center-art">
          <img
            src="/assets/hero-center.png"
            alt="Apexia 3D Billiard 9-Ball & Rack"
            className="hero-center-img"
          />
        </div>

        {/* Right tilted metric cards (matches reference scale cards) */}
        <div className="hero-right-cards">
          <div className="metric-card tilt-left">
            <span className="metric-tag">{t('hero.stat1Tag')}</span>
            <span className="metric-value">{t('hero.stat1Value')}</span>
            <span className="metric-diamond" aria-hidden="true">
              <Trophy size={12} />
            </span>
            <div className="metric-ruler" aria-hidden="true">
              <span>3</span>
              <span>4</span>
              <span>5</span>
              <span className="active-tick">6</span>
              <span>7</span>
              <span>8</span>
            </div>
          </div>

          <div className="metric-card tilt-right">
            <span className="metric-tag">{t('hero.stat2Tag')}</span>
            <span className="metric-value">{t('hero.stat2Value')}</span>
            <span className="metric-diamond" aria-hidden="true">
              <Users size={12} />
            </span>
            <div className="metric-ruler" aria-hidden="true">
              <span>8</span>
              <span>16</span>
              <span>32</span>
              <span className="active-tick">64</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
