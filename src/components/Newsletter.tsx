import { useState, type FormEvent } from 'react';

type Status = 'idle' | 'sending' | 'success' | 'error';

export default function Newsletter() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<Status>('idle');
  const [errorMsg, setErrorMsg] = useState('');

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (status === 'sending') return;
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setStatus('error');
      setErrorMsg('Geçerli bir e-posta girin.');
      return;
    }
    setStatus('sending');
    setErrorMsg('');
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          source: 'newsletter',
          name: 'Newsletter aboneliği',
          email,
          message: 'Yeni bülten aboneliği talebi.',
        }),
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok || !data.ok) throw new Error(data.error || `Sunucu hatası (${res.status})`);
      setStatus('success');
      setEmail('');
    } catch (err) {
      setStatus('error');
      setErrorMsg(err instanceof Error ? err.message : 'Beklenmedik bir hata oluştu.');
    }
  }

  return (
    <form className="newsletter" onSubmit={onSubmit} noValidate>
      <div className="nl-head">
        <h6>BÜLTEN</h6>
        <p>Yeni proje teslimleri ve teknik rehberler için ayda 1 e-posta. Spam yok.</p>
      </div>
      <div className="nl-row">
        <input
          type="email"
          placeholder="ornek@ornek.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          aria-label="E-posta adresi"
          required
        />
        <button type="submit" disabled={status === 'sending'}>
          {status === 'sending' ? '…' : 'Abone ol'}
        </button>
      </div>
      {status === 'success' && <p className="nl-ok">Aboneliğiniz alındı. İlk bülten en geç 30 gün içinde yolda.</p>}
      {status === 'error' && <p className="nl-err">{errorMsg}</p>}
    </form>
  );
}
