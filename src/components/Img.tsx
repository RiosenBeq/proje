import type { ImgHTMLAttributes } from 'react';

type Props = ImgHTMLAttributes<HTMLImageElement> & {
  /** Eager load + fetchpriority high for above-the-fold images */
  priority?: boolean;
};

/**
 * Adds Unsplash &fm=webp transform when applicable; serves the original URL otherwise.
 * Unsplash supports `auto=format` which already returns WebP/AVIF for supporting clients,
 * so we just ensure that param is present.
 */
function transform(src: string | undefined): string | undefined {
  if (!src) return src;
  if (!src.includes('images.unsplash.com')) return src;
  if (src.includes('auto=format')) return src;
  return src + (src.includes('?') ? '&auto=format' : '?auto=format');
}

/**
 * Shared image wrapper with sensible perf + a11y defaults:
 * - lazy + async decode by default
 * - eager + high priority when `priority` is set
 * - adds `.loaded` class on load (drives the shimmer fade-in)
 */
export default function Img({
  priority,
  loading,
  decoding,
  fetchPriority,
  src,
  onLoad,
  ...rest
}: Props) {
  const effectiveLoading = loading ?? (priority ? 'eager' : 'lazy');
  const effectiveDecoding = decoding ?? 'async';
  const effectiveFetchPriority = fetchPriority ?? (priority ? 'high' : undefined);

  return (
    <img
      {...rest}
      src={transform(src)}
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
