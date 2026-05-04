import { useEffect } from 'react';

const SITE_URL = 'https://onmuzik.com';
const DEFAULT_IMAGE = `${SITE_URL}/assets/on-music-logo.png`;

type JsonLd = Record<string, unknown> | Array<Record<string, unknown>>;

export type SeoOptions = {
  title: string;
  description: string;
  path: string;
  image?: string;
  jsonLd?: JsonLd;
  noIndex?: boolean;
};

function setMeta(attr: 'name' | 'property', key: string, content: string) {
  let tag = document.head.querySelector<HTMLMetaElement>(`meta[${attr}="${key}"]`);
  if (!tag) {
    tag = document.createElement('meta');
    tag.setAttribute(attr, key);
    document.head.appendChild(tag);
  }
  tag.setAttribute('content', content);
}

function setLink(rel: string, href: string) {
  let tag = document.head.querySelector<HTMLLinkElement>(`link[rel="${rel}"]`);
  if (!tag) {
    tag = document.createElement('link');
    tag.setAttribute('rel', rel);
    document.head.appendChild(tag);
  }
  tag.setAttribute('href', href);
}

const PAGE_LD_ID = '__page_jsonld__';

export function useSeo(opts: SeoOptions) {
  useEffect(() => {
    const url = `${SITE_URL}${opts.path}`;
    const image = opts.image ?? DEFAULT_IMAGE;
    const robots = opts.noIndex ? 'noindex,follow' : 'index,follow,max-image-preview:large,max-snippet:-1,max-video-preview:-1';

    document.title = opts.title;
    setMeta('name', 'description', opts.description);
    setMeta('name', 'robots', robots);
    setMeta('property', 'og:title', opts.title);
    setMeta('property', 'og:description', opts.description);
    setMeta('property', 'og:url', url);
    setMeta('property', 'og:image', image);
    setMeta('name', 'twitter:title', opts.title);
    setMeta('name', 'twitter:description', opts.description);
    setMeta('name', 'twitter:image', image);
    setLink('canonical', url);

    let scriptEl = document.getElementById(PAGE_LD_ID);
    if (opts.jsonLd) {
      if (!scriptEl) {
        scriptEl = document.createElement('script');
        scriptEl.setAttribute('type', 'application/ld+json');
        scriptEl.id = PAGE_LD_ID;
        document.head.appendChild(scriptEl);
      }
      scriptEl.textContent = JSON.stringify(opts.jsonLd);
    } else if (scriptEl) {
      scriptEl.remove();
    }
  }, [opts.title, opts.description, opts.path, opts.image, opts.noIndex, JSON.stringify(opts.jsonLd ?? null)]);
}
