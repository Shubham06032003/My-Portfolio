import fs from 'fs';
import path from 'path';

const outDir = './public/sequence';
if (!fs.existsSync(outDir)) {
    fs.mkdirSync(outDir, { recursive: true });
}

// 1x1 black pixel WebP base64
const webPData = "UklGRjIAAABXRUJQVlA4ICYAAACyAgCdASoBAAEALmk0mk0iIiIiIgBoSygABc6zbAAA/v56QAAAAA==";
const buffer = Buffer.from(webPData, 'base64');

for (let i = 0; i < 89; i++) {
    const x = i.toString().padStart(2, "0");
    fs.writeFileSync(path.join(outDir, `frame_${x}_delay-0.067s.webp`), buffer);
}
console.log("Created 89 placeholder webp images in public/sequence");
