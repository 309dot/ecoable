import imagemin from 'imagemin';
import jpegtran from 'imagemin-jpegtran';
import pngquant from 'imagemin-pngquant';
import webp from 'imagemin-webp';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const IMAGE_DIR = path.join(__dirname, '../public/images');

async function optimizeImages() {
  const files = fs.readdirSync(IMAGE_DIR).filter(file =>
    /\.(jpe?g|png|webp)$/i.test(file)
  );

  for (const file of files) {
    const filePath = path.join(IMAGE_DIR, file);
    const buffer = fs.readFileSync(filePath);
    let plugins = [];
    if (/\.jpe?g$/i.test(file)) plugins.push(jpegtran({ progressive: true }));
    if (/\.png$/i.test(file)) plugins.push(pngquant({ quality: [0.6, 0.8] }));
    if (/\.webp$/i.test(file)) plugins.push(webp({ quality: 75 }));
    const [optimized] = await imagemin.buffer(buffer, { plugins });
    if (optimized && optimized.length > 0) {
      fs.writeFileSync(filePath, optimized);
      console.log(`Optimized: ${file}`);
    } else {
      console.log(`Copied (no change): ${file}`);
    }
  }
}

optimizeImages().catch(err => {
  console.error(err);
  process.exit(1);
}); 