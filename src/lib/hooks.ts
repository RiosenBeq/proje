import { useEffect, useRef, useState, type RefObject } from 'react';

const easeOutCubic = (t: number) => 1 - Math.pow(1 - t, 3);

export function useCountUp(end: number, duration = 1400) {
  const ref = useRef<HTMLSpanElement>(null);
  const [val, setVal] = useState(0);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setVal(end);
      return;
    }
    let raf = 0;
    let started = false;
    const io = new IntersectionObserver((entries) => {
      if (!entries[0].isIntersecting || started) return;
      started = true;
      const start = performance.now();
      const tick = (now: number) => {
        const t = Math.min(1, (now - start) / duration);
        setVal(Math.round(end * easeOutCubic(t)));
        if (t < 1) raf = requestAnimationFrame(tick);
      };
      raf = requestAnimationFrame(tick);
      io.disconnect();
    }, { threshold: 0.4 });
    io.observe(el);
    return () => { io.disconnect(); cancelAnimationFrame(raf); };
  }, [end, duration]);
  return { ref, value: val };
}

export function useMagnetic<T extends HTMLElement>(strength = 0.25): RefObject<T | null> {
  const ref = useRef<T>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia('(hover: none)').matches) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const onMove = (e: MouseEvent) => {
      const r = el.getBoundingClientRect();
      const x = e.clientX - (r.left + r.width / 2);
      const y = e.clientY - (r.top + r.height / 2);
      el.style.transform = `translate(${x * strength}px, ${y * strength}px)`;
    };
    const onLeave = () => { el.style.transform = ''; };
    el.addEventListener('mousemove', onMove);
    el.addEventListener('mouseleave', onLeave);
    return () => {
      el.removeEventListener('mousemove', onMove);
      el.removeEventListener('mouseleave', onLeave);
    };
  }, [strength]);
  return ref;
}

export function useScrollSpy(selectors: string[], offset = 96) {
  const [active, setActive] = useState<string | null>(null);
  useEffect(() => {
    const targets = selectors
      .map((s) => document.querySelector<HTMLElement>(s))
      .filter((el): el is HTMLElement => !!el);
    if (!targets.length) return;
    let raf = 0;
    const update = () => {
      const y = window.scrollY + offset + 1;
      let current: string | null = null;
      for (const el of targets) {
        if (el.offsetTop <= y) current = `#${el.id}`;
      }
      setActive(current);
    };
    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(update);
    };
    update();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    };
  }, [selectors.join('|'), offset]);
  return active;
}

export function smoothScrollToHash(hash: string, headerOffset = 80) {
  const el = document.querySelector(hash);
  if (!(el instanceof HTMLElement)) return;
  const top = el.getBoundingClientRect().top + window.scrollY - headerOffset;
  window.scrollTo({ top, behavior: 'smooth' });
}
