import { readFile } from 'node:fs/promises';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import sharp from 'sharp';

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, '..');

const width = 1200;
const height = 630;
const bandHeight = Math.round(height * 0.32);
const bandY = height - bandHeight;

const fontDataUri = async (relativePath) => {
  const file = await readFile(join(root, relativePath));
  return `data:font/woff2;base64,${file.toString('base64')}`;
};

const [inter300, inter400, cormorant300, cormorant300Italic] = await Promise.all([
  fontDataUri('node_modules/@fontsource/inter/files/inter-latin-300-normal.woff2'),
  fontDataUri('node_modules/@fontsource/inter/files/inter-latin-400-normal.woff2'),
  fontDataUri('node_modules/@fontsource/cormorant-garamond/files/cormorant-garamond-latin-300-normal.woff2'),
  fontDataUri('node_modules/@fontsource/cormorant-garamond/files/cormorant-garamond-latin-300-italic.woff2'),
]);

const svg = `
<svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}" viewBox="0 0 ${width} ${height}">
  <defs>
    <style>
      @font-face {
        font-family: 'Inter';
        src: url('${inter300}') format('woff2');
        font-weight: 300;
        font-style: normal;
      }
      @font-face {
        font-family: 'Inter';
        src: url('${inter400}') format('woff2');
        font-weight: 400;
        font-style: normal;
      }
      @font-face {
        font-family: 'Cormorant Garamond';
        src: url('${cormorant300}') format('woff2');
        font-weight: 300;
        font-style: normal;
      }
      @font-face {
        font-family: 'Cormorant Garamond';
        src: url('${cormorant300Italic}') format('woff2');
        font-weight: 300;
        font-style: italic;
      }
      .eyebrow {
        fill: #4a4744;
        font-family: 'Inter', 'Arial', sans-serif;
        font-size: 18px;
        font-weight: 400;
        letter-spacing: 0.3em;
      }
      .title {
        fill: #1C1C1C;
        font-family: 'Cormorant Garamond', Georgia, serif;
        font-size: 96px;
        font-weight: 300;
      }
      .tagline {
        fill: #4a4744;
        font-family: 'Inter', 'Arial', sans-serif;
        font-size: 24px;
        font-weight: 300;
      }
      .domain {
        fill: #f7f3ec;
        font-family: 'Inter', 'Arial', sans-serif;
        font-size: 22px;
        font-weight: 400;
        letter-spacing: 0.18em;
        text-transform: uppercase;
      }
    </style>
  </defs>
  <rect width="${width}" height="${height}" fill="#FAF8F5" />
  <rect y="${bandY}" width="${width}" height="${bandHeight}" fill="#3D5A42" />

  <text class="eyebrow" x="${width / 2}" y="150" text-anchor="middle">SUNCADIA RESORT · CLE ELUM</text>
  <text class="title" x="${width / 2}" y="272" text-anchor="middle">
    <tspan>Pine &amp; </tspan><tspan font-style="italic">Prairie</tspan><tspan> Cabin</tspan>
  </text>
  <text class="tagline" x="${width / 2}" y="342" text-anchor="middle">A Scandinavian-modern retreat ninety minutes east of Seattle</text>

  <text class="domain" x="${width / 2}" y="${bandY + bandHeight / 2}" dominant-baseline="middle" text-anchor="middle">PINEANDPRAIRIECABIN.COM</text>
</svg>`;

const output = join(root, 'public', 'og.png');

await sharp(Buffer.from(svg)).png().toFile(output);
console.log(`Generated ${output} (${width}x${height})`);
