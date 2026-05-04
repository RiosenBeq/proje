import type { ImgHTMLAttributes } from 'react';

type Props = ImgHTMLAttributes<HTMLImageElement> & {
  /** Eager load + fetchpriority high for above-the-fold images */
  priority?: boolean;
};

const WIDTHS = [480, 900, 1600] as const;
const DEFAULT_SIZES = '(max-width: 720px) 100vw, (max-width: 1100px) 50vw, 33vw';

/** Replace or insert a query param value */
function setParam(url: string, key: string, value: string | number): string {
  const re = new RegExp(`([?&])${key}=[^&]*`);
  if (re.test(url)) return url.replace(re, `$1${key}=${value}`);
  return url + (url.includes('?') ? '&' : '?') + `${key}=${value}`;
}

function isPexels(src: string)   { return src.includes('images.pexels.com'); }
function isUnsplash(src: string) { return src.includes('images.unsplash.com'); }
function isResponsive(src: string) { return isPexels(src) || isUnsplash(src); }

/**
 * Adds `auto=format` to Unsplash URLs so supporting clients receive WebP/AVIF.
 * Pexels already serves auto-compressed JPEG/WebP via Accept header.
 */
function ensureFormat(src: string): string {
  if (!isUnsplash(src)) return src;
  if (src.includes('auto=format')) return src;
  return src + (src.includes('?') ? '&auto=format' : '?auto=format');
}

/** Build srcset with 3 width variants for Pexels/Unsplash; null otherwise */
function buildSrcSet(src: string): string | undefined {
  if (!isResponsive(src)) return undefined;
  const formatted = ensureFormat(src);
  return WIDTHS.map((w) => `${setParam(formatted, 'w', w)} ${w}w`).join(', ');
}

/** Default-size variant (~ middle of WIDTHS) used as `src` fallback */
function buildSrc(src: string): string {
  if (!isResponsive(src)) return src;
  return setParam(ensureFormat(src), 'w', 900);
}

/**
 * Shared image wrapper with perf + a11y defaults:
 * - Pexels / Unsplash → automatic srcset (480/900/1600w) + WebP via auto=format
 * - lazy + async decode by default; eager + fetchPriority="high" via `priority`
 * - adds `.loaded` class on load so the shimmer skeleton fades out
 */
export default function Img({
  priority,
  loading,
  decoding,
  fetchPriority,
  src,
  sizes,
  onLoad,
  ...rest
}: Props) {
  const effectiveLoading = loading ?? (priority ? 'eager' : 'lazy');
  const effectiveDecoding = decoding ?? 'async';
  const effectiveFetchPriority = fetchPriority ?? (priority ? 'high' : undefined);
  const responsive = src && isResponsive(src);
  const finalSrc = src ? buildSrc(src) : src;
  const srcSet = src ? buildSrcSet(src) : undefined;
  const finalSizes = responsive ? (sizes ?? DEFAULT_SIZES) : sizes;

  return (
    <img
      {...rest}
      src={finalSrc}
      srcSet={srcSet}
      sizes={finalSizes}
      loading={effectiveLoading}
      decoding={effectiveDecoding}
      fetchPriority={effectiveFetchPriority}
      onLoad={(e) => {
        e.currentTarget.classList.add('loaded');
        onLoad?.(e);
      }}
    />
  );
}
