import { useEffect } from 'react';

const SITE_URL = 'https://onmuzikproje.com';
const DEFAULT_IMAGE = `${SITE_URL}/assets/on-music-logo.png`;

type JsonLd = Record<string, unknown> | Array<Record<string, unknown>>;

/**
 * Open Graph türü. "website" varsayılan; "article" Bilgi Merkezi'nde; "product"
 * Hızla Kirala ürün detay sayfalarında kullanılır (og:type=product, Facebook
 * ürün ürün katalog desteği için).
 */
type OgType = 'website' | 'article' | 'product';

export type SeoOptions = {
  title: string;
  description: string;
  path: string;
  /** Tek bir OG image URL'i. SITE_URL prefix yoksa eklenir. */
  image?: string;
  ogType?: OgType;
  /** og:type=product için. SITE_URL prefix yoksa eklenir, gerekirse fiyat + currency. */
  product?: {
    priceAmount: string;
    priceCurrency?: string;
    availability?: 'instock' | 'oos' | 'pending';
    brand?: string;
    category?: string;
  };
  /** Comma-separated keywords (legacy SEO; modern engines yine de tüketir). */
  keywords?: string;
  /** Tek bir JSON-LD blok veya birden fazla - script tag'i sayısı buna göre değişir. */
  jsonLd?: JsonLd;
  noIndex?: boolean;
  /** article:author / article:published_time gibi article özelinde alanlar. */
  article?: {
    publishedTime?: string;
    modifiedTime?: string;
    author?: string;
    section?: string;
  };
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

function removeMeta(attr: 'name' | 'property', key: string) {
  document.head.querySelector<HTMLMetaElement>(`meta[${attr}="${key}"]`)?.remove();
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

function toAbsolute(url: string | undefined): string | undefined {
  if (!url) return undefined;
  if (/^https?:\/\//.test(url)) return url;
  if (url.startsWith('/')) return `${SITE_URL}${url}`;
  return url;
}

const PAGE_LD_PREFIX = '__page_jsonld__';

export function useSeo(opts: SeoOptions) {
  useEffect(() => {
    const url = `${SITE_URL}${opts.path}`;
    const image = toAbsolute(opts.image) ?? DEFAULT_IMAGE;
    const robots = opts.noIndex
      ? 'noindex,follow'
      : 'index,follow,max-image-preview:large,max-snippet:-1,max-video-preview:-1';

    document.title = opts.title;
    setMeta('name', 'description', opts.description);
    setMeta('name', 'robots', robots);
    if (opts.keywords) setMeta('name', 'keywords', opts.keywords);
    setMeta('property', 'og:type', opts.ogType ?? 'website');
    setMeta('property', 'og:title', opts.title);
    setMeta('property', 'og:description', opts.description);
    setMeta('property', 'og:url', url);
    setMeta('property', 'og:image', image);
    setMeta('property', 'og:image:alt', opts.title);
    setMeta('property', 'og:locale', 'tr_TR');
    setMeta('property', 'og:site_name', 'On Muzik Proje');
    setMeta('name', 'twitter:card', 'summary_large_image');
    setMeta('name', 'twitter:title', opts.title);
    setMeta('name', 'twitter:description', opts.description);
    setMeta('name', 'twitter:image', image);
    setMeta('name', 'twitter:image:alt', opts.title);
    setLink('canonical', url);

    // og:type=product için ek meta (Facebook product catalog, Pinterest Rich Pin,
    // bazı arama motorları bu meta'lardan fiyat / availability çıkarır).
    if (opts.product) {
      const avail = opts.product.availability ?? 'instock';
      setMeta('property', 'product:price:amount', opts.product.priceAmount);
      setMeta('property', 'product:price:currency', opts.product.priceCurrency ?? 'TRY');
      setMeta('property', 'product:availability', avail);
      if (opts.product.brand) setMeta('property', 'product:brand', opts.product.brand);
      if (opts.product.category) setMeta('property', 'product:category', opts.product.category);
    } else {
      removeMeta('property', 'product:price:amount');
      removeMeta('property', 'product:price:currency');
      removeMeta('property', 'product:availability');
      removeMeta('property', 'product:brand');
      removeMeta('property', 'product:category');
    }

    if (opts.article) {
      if (opts.article.publishedTime) setMeta('property', 'article:published_time', opts.article.publishedTime);
      if (opts.article.modifiedTime)  setMeta('property', 'article:modified_time',  opts.article.modifiedTime);
      if (opts.article.author)        setMeta('property', 'article:author',         opts.article.author);
      if (opts.article.section)       setMeta('property', 'article:section',        opts.article.section);
    } else {
      removeMeta('property', 'article:published_time');
      removeMeta('property', 'article:modified_time');
      removeMeta('property', 'article:author');
      removeMeta('property', 'article:section');
    }

    // JSON-LD: önceki turdaki tek-script id'sini koruyup, ek scriptleri
    // numaralı id'lerle yöneteceğiz. Önce eski tüm sayfa-LD'leri temizle.
    document.head.querySelectorAll(`script[id^="${PAGE_LD_PREFIX}"]`).forEach((el) => el.remove());

    if (opts.jsonLd) {
      const blocks = Array.isArray(opts.jsonLd) ? opts.jsonLd : [opts.jsonLd];
      blocks.forEach((block, i) => {
        const scriptEl = document.createElement('script');
        scriptEl.setAttribute('type', 'application/ld+json');
        scriptEl.id = `${PAGE_LD_PREFIX}_${i}`;
        scriptEl.textContent = JSON.stringify(block);
        document.head.appendChild(scriptEl);
      });
    }
  }, [
    opts.title, opts.description, opts.path, opts.image,
    opts.noIndex, opts.ogType, opts.keywords,
    JSON.stringify(opts.product ?? null),
    JSON.stringify(opts.article ?? null),
    JSON.stringify(opts.jsonLd ?? null),
  ]);
}

export { SITE_URL };
