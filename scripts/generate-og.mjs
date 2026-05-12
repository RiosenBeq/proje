// Generate /public/assets/og-image.png (1200×630) from an inline SVG.
// Runs as prebuild step. Brand-aligned: ink background, frequency curve motif,
// disc-shaped accent, brand wordmark + tagline. No remote requests at build.

import sharp from 'sharp';
import { writeFileSync, mkdirSync, readFileSync } from 'node:fs';
import { resolve, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = resolve(__dirname, '..');
const OUT_PNG = resolve(ROOT, 'public/assets/og-image.png');
const OUT_FAVICON = resolve(ROOT, 'public/favicon.png');

mkdirSync(dirname(OUT_PNG), { recursive: true });

// Read the disc PNG once and embed it inside the SVG as a data URI so the SVG
// renderer doesn't try to fetch it.
const discBase64 = readFileSync(resolve(ROOT, 'public/assets/on-music-disc.png')).toString('base64');
const discDataUri = `data:image/png;base64,${discBase64}`;

const svg = `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630">
  <defs>
    <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0" stop-color="#14110C"/>
      <stop offset="1" stop-color="#1F1A12"/>
    </linearGradient>
    <radialGradient id="redGlow" cx="0.85" cy="0.15" r="0.6">
      <stop offset="0" stop-color="#E8412B" stop-opacity="0.28"/>
      <stop offset="1" stop-color="#E8412B" stop-opacity="0"/>
    </radialGradient>
    <radialGradient id="goldGlow" cx="0.1" cy="0.95" r="0.55">
      <stop offset="0" stop-color="#D6A33A" stop-opacity="0.18"/>
      <stop offset="1" stop-color="#D6A33A" stop-opacity="0"/>
    </radialGradient>
    <linearGradient id="waveGrad" x1="0" y1="0" x2="1" y2="0">
      <stop offset="0" stop-color="#E8412B" stop-opacity="0"/>
      <stop offset="0.5" stop-color="#E8412B" stop-opacity="0.7"/>
      <stop offset="1" stop-color="#E8412B" stop-opacity="0"/>
    </linearGradient>
  </defs>

  <rect width="1200" height="630" fill="url(#bg)"/>
  <rect width="1200" height="630" fill="url(#redGlow)"/>
  <rect width="1200" height="630" fill="url(#goldGlow)"/>

  <!-- Layered sine waves (audio identity) -->
  <g fill="none" stroke-linecap="round" opacity="0.5">
    <path d="M0 320 Q 75 260 150 320 T 300 320 T 450 320 T 600 320 T 750 320 T 900 320 T 1050 320 T 1200 320"
          stroke="rgba(245,239,224,0.18)" stroke-width="1.2"/>
    <path d="M0 360 Q 60 300 120 360 T 240 360 T 360 360 T 480 360 T 600 360 T 720 360 T 840 360 T 960 360 T 1080 360 T 1200 360"
          stroke="url(#waveGrad)" stroke-width="1.5" stroke-dasharray="3 9"/>
    <path d="M0 280 Q 100 220 200 280 T 400 280 T 600 280 T 800 280 T 1000 280 T 1200 280"
          stroke="rgba(214,163,58,0.35)" stroke-width="0.9"/>
  </g>

  <!-- EQ-style vertical bars decoration, bottom-right -->
  <g transform="translate(840 470)">
    ${Array.from({ length: 22 }, (_, i) => {
      const h = 8 + Math.round(60 * Math.abs(Math.sin(i * 0.7)));
      const x = i * 14;
      const opacity = 0.25 + (i % 5) * 0.12;
      return `<rect x="${x}" y="${100 - h}" width="6" height="${h}" rx="1" fill="rgba(245,239,224,${opacity.toFixed(2)})"/>`;
    }).join('')}
  </g>

  <!-- Disc visual, top-right -->
  <image href="${discDataUri}" x="980" y="80" width="120" height="120" opacity="0.92"/>

  <!-- Eyebrow -->
  <text x="80" y="130"
        font-family="'JetBrains Mono', ui-monospace, monospace"
        font-size="18" letter-spacing="6" fill="rgba(245,239,224,0.55)" font-weight="500">
    İSTANBUL · 2009'DAN BERİ
  </text>
  <line x1="80" y1="150" x2="120" y2="150" stroke="#E8412B" stroke-width="2"/>

  <!-- Wordmark / Brand -->
  <text x="80" y="240"
        font-family="Fraunces, Georgia, 'Times New Roman', serif"
        font-size="84" font-weight="300" letter-spacing="-2" fill="#F5EFE0">
    On Muzik <tspan font-style="italic" fill="#E8412B">Proje</tspan>
  </text>

  <!-- Headline -->
  <text x="80" y="350"
        font-family="Fraunces, Georgia, 'Times New Roman', serif"
        font-size="58" font-weight="300" letter-spacing="-1.5" fill="#F5EFE0">
    Akustik tasarım &amp; profesyonel
  </text>
  <text x="80" y="418"
        font-family="Fraunces, Georgia, 'Times New Roman', serif"
        font-size="58" font-weight="300" font-style="italic" letter-spacing="-1.5" fill="#D6A33A">
    ses sistemi mühendisliği.
  </text>

  <!-- Stat strip -->
  <g transform="translate(80 490)" font-family="'JetBrains Mono', ui-monospace, monospace" fill="#F5EFE0">
    <g>
      <text x="0" y="0" font-size="14" letter-spacing="4" fill="rgba(245,239,224,0.5)">PROJE</text>
      <text x="0" y="36" font-size="32" font-weight="500">240+</text>
    </g>
    <g transform="translate(160 0)">
      <text x="0" y="0" font-size="14" letter-spacing="4" fill="rgba(245,239,224,0.5)">DİSİPLİN</text>
      <text x="0" y="36" font-size="32" font-weight="500">6</text>
    </g>
    <g transform="translate(280 0)">
      <text x="0" y="0" font-size="14" letter-spacing="4" fill="rgba(245,239,224,0.5)">İL</text>
      <text x="0" y="36" font-size="32" font-weight="500">81</text>
    </g>
    <g transform="translate(380 0)">
      <text x="0" y="0" font-size="14" letter-spacing="4" fill="rgba(245,239,224,0.5)">YIL</text>
      <text x="0" y="36" font-size="32" font-weight="500">16+</text>
    </g>
  </g>

  <!-- Domain bottom-right -->
  <text x="1120" y="595" text-anchor="end"
        font-family="'JetBrains Mono', ui-monospace, monospace"
        font-size="16" letter-spacing="3" fill="rgba(245,239,224,0.55)">
    onmuzikproje.com
  </text>
</svg>`;

writeFileSync(resolve(ROOT, 'public/assets/og-image.svg'), svg);

await sharp(Buffer.from(svg))
  .resize(1200, 630, { fit: 'cover' })
  .png({ compressionLevel: 9 })
  .toFile(OUT_PNG);

console.log(`✓ og-image.png  (1200×630)  → public/assets/og-image.png`);

// Render the SVG favicon into raster sizes for legacy browsers / OG fallbacks.
const faviconSvg = readFileSync(resolve(ROOT, 'public/favicon.svg'));
for (const size of [16, 32, 48, 192]) {
  const out = size === 32
    ? OUT_FAVICON
    : resolve(ROOT, `public/favicon-${size}.png`);
  await sharp(faviconSvg)
    .resize(size, size, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } })
    .png({ compressionLevel: 9 })
    .toFile(out);
  console.log(`✓ favicon-${size}  → ${out.replace(ROOT + '/', '')}`);
}

// Apple touch icon (180×180) — rendered from the brand favicon SVG so the badge
// stays sharp on iOS home screens.
await sharp(faviconSvg)
  .resize(180, 180, { fit: 'contain', background: { r: 20, g: 17, b: 12, alpha: 1 } })
  .png({ compressionLevel: 9 })
  .toFile(resolve(ROOT, 'public/apple-touch-icon.png'));
console.log(`✓ apple-touch-icon (180×180) → public/apple-touch-icon.png`);

// Larger disc for PWA / Android (512×512)
await sharp(resolve(ROOT, 'public/assets/on-music-disc.png'))
  .resize(512, 512, { fit: 'cover' })
  .png()
  .toFile(resolve(ROOT, 'public/assets/on-music-disc-512.png'));
console.log(`✓ disc-512  (512×512)        → public/assets/on-music-disc-512.png`);

// 192×192 PWA icon
await sharp(resolve(ROOT, 'public/assets/on-music-disc.png'))
  .resize(192, 192, { fit: 'cover' })
  .png()
  .toFile(resolve(ROOT, 'public/assets/on-music-disc-192.png'));
console.log(`✓ disc-192  (192×192)        → public/assets/on-music-disc-192.png`);
