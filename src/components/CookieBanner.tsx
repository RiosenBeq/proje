import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const KEY = 'onmuzik-cookie-consent-v1';

export default function CookieBanner() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    const stored = window.localStorage.getItem(KEY);
    if (!stored) {
      const t = window.setTimeout(() => setShow(true), 600);
      return () => window.clearTimeout(t);
    }
    return undefined;
  }, []);

  function dismiss(value: 'accepted' | 'rejected') {
    try {
      window.localStorage.setItem(KEY, JSON.stringify({ value, at: Date.now() }));
    } catch {
      /* localStorage may be disabled — ignore */
    }
    setShow(false);
  }

  if (!show) return null;
  return (
    <div className="cookie-banner" role="dialog" aria-live="polite" aria-label="Çerez bildirimi">
      <div className="cb-inner">
        <div className="cb-text">
          <strong>Çerez bildirimi.</strong> Site deneyiminizi iyileştirmek ve form gönderimlerini güvenli hale getirmek için
          temel çerezler kullanıyoruz. Detaylar için{' '}
          <Link to="/gizlilik-politikasi">Gizlilik</Link> ve <Link to="/kvkk">KVKK</Link> metinlerimize bakabilirsiniz.
        </div>
        <div className="cb-actions">
          <button type="button" className="btn btn-ghost cb-btn" onClick={() => dismiss('rejected')}>Reddet</button>
          <button type="button" className="btn btn-red cb-btn" onClick={() => dismiss('accepted')}>Kabul Et</button>
        </div>
      </div>
    </div>
  );
}
