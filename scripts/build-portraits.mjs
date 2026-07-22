// scripts/build-portraits.mjs
// Erzeugt aus den Original-Fotos die Website-Zuschnitte.
// Ausführen aus dem Repo-Root:  npm i -D sharp && node scripts/build-portraits.mjs
import sharp from "sharp";
import { mkdir } from "node:fs/promises";
import path from "node:path";

const SRC_DIR = path.resolve("../Foto-Genarator/unsere Fotos/Darina-Fotos");
const OUT_DIR = path.resolve("public/images/team");

// Koordinaten beziehen sich auf die Originale (1366 × 2048 px, keine EXIF-Rotation).
// Weite, natürliche Zuschnitte — kein enger Face-Zoom, kein Quadrat. Der linke
// Bildbereich mit der Neon-Zeichnung bleibt in allen Ausgaben ausgeschlossen
// (left-Werte rechts davon).
const CROPS = [
  // 2:3 — Hochformat-Portrait (Kamera-Blick) für /about-Hero, Startseite und Kontakt
  { out: "darina-portrait.jpg", src: "WhatsApp Image 2026-07-22 at 11.55.18-2.jpeg", left: 510, top: 190, width: 856, height: 1284 },
  // 3:4 — Arbeitsszene (liest Unterlagen) für /about
  { out: "darina-arbeit.jpg",   src: "WhatsApp Image 2026-07-22 at 11.55.18-7.jpeg", left: 300, top: 540, width: 800, height: 1067 },
];

await mkdir(OUT_DIR, { recursive: true });

for (const c of CROPS) {
  const inFile = path.join(SRC_DIR, c.src);
  const meta = await sharp(inFile).metadata();
  if (c.left + c.width > meta.width || c.top + c.height > meta.height) {
    throw new Error(`Crop außerhalb des Bildes: ${c.out} (Quelle ${meta.width}×${meta.height})`);
  }
  await sharp(inFile)
    .extract({ left: c.left, top: c.top, width: c.width, height: c.height })
    .jpeg({ quality: 88, mozjpeg: true, chromaSubsampling: "4:4:4" })
    .toFile(path.join(OUT_DIR, c.out));
  console.log(`✓ ${c.out}  ${c.width}×${c.height}`);
}
