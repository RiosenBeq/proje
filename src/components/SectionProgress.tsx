import { useScrollSpy, smoothScrollToHash } from '../lib/hooks';

const SECTIONS: Array<{ id: string; label: string }> = [
  { id: '#disiplinler', label: 'Disiplinler' },
  { id: '#cozum-yollari', label: 'Çözüm Yolları' },
  { id: '#surec', label: 'Süreç' },
  { id: '#mekanlar', label: 'Mekânlar' },
  { id: '#projeler', label: 'Projeler' },
  { id: '#iletisim', label: 'İletişim' },
  { id: '#sss', label: 'SSS' },
];

export default function SectionProgress() {
  const active = useScrollSpy(SECTIONS.map((s) => s.id));
  return (
    <nav className="section-progress" aria-label="Sayfa bölümleri">
      <ul>
        {SECTIONS.map((s, i) => (
          <li key={s.id} className={active === s.id ? 'on' : ''}>
            <a
              href={s.id}
              onClick={(e) => { e.preventDefault(); smoothScrollToHash(s.id); }}
              aria-label={s.label}
            >
              <span className="sp-num">0{i + 1}</span>
              <span className="sp-dot" />
              <span className="sp-lbl">{s.label}</span>
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
