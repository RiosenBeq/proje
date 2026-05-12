import { useEffect, useState } from 'react';

const WHATSAPP_URL = 'https://wa.me/908502419515?text=Merhaba%2C%20web%20sitesinden%20yaz%C4%B1yorum.';

export default function WhatsAppFab() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const t = window.setTimeout(() => setShow(true), 1200);
    return () => window.clearTimeout(t);
  }, []);

  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      className={`whatsapp-fab${show ? ' show' : ''}`}
      aria-label="WhatsApp ile yazın - 0850 241 9515"
      title="WhatsApp ile yazın"
    >
      <span className="wf-pulse" aria-hidden />
      <svg width="26" height="26" viewBox="0 0 32 32" fill="currentColor" aria-hidden>
        <path d="M16 2.667C8.636 2.667 2.667 8.636 2.667 16c0 2.353.622 4.563 1.706 6.484L2.667 29.333l7.014-1.685A13.276 13.276 0 0 0 16 29.333c7.364 0 13.333-5.969 13.333-13.333S23.364 2.667 16 2.667Zm0 24.32a11.04 11.04 0 0 1-5.624-1.534l-.404-.24-4.165 1l1.018-4.06-.263-.42A10.97 10.97 0 0 1 4.987 16C4.987 9.93 9.93 4.987 16 4.987c6.07 0 11.013 4.943 11.013 11.013S22.07 26.987 16 26.987Zm6.054-8.234c-.331-.166-1.962-.969-2.266-1.08-.305-.111-.527-.166-.748.166-.222.332-.857 1.08-1.052 1.302-.193.222-.387.249-.719.083-.331-.166-1.4-.516-2.668-1.646-.987-.88-1.654-1.967-1.847-2.299-.193-.331-.02-.51.146-.676.15-.149.331-.387.497-.581.166-.193.221-.331.331-.553.111-.222.055-.415-.028-.581-.083-.166-.748-1.804-1.024-2.469-.27-.65-.544-.561-.748-.572l-.637-.011a1.221 1.221 0 0 0-.886.415c-.305.332-1.163 1.136-1.163 2.768 0 1.633 1.19 3.21 1.357 3.432.166.222 2.343 3.577 5.674 5.018.793.342 1.412.546 1.894.7.795.252 1.519.217 2.092.131.638-.094 1.962-.802 2.239-1.578.276-.776.276-1.44.193-1.578-.083-.138-.305-.221-.636-.387Z"/>
      </svg>
      <span className="wf-label">WhatsApp</span>
    </a>
  );
}
