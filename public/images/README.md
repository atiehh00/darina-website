# Bilder-Übersicht

Die meisten Bilder wurden von Unsplash heruntergeladen und sind **lizenzfrei für kommerzielle Nutzung** (Unsplash License — keine Attribution erforderlich, aber gerne). **Ausnahme:** die Portraits in `team/` sind eigene Aufnahmen (siehe Abschnitt „Team").

Gesamtgröße: ~4.7 MB. Vor Deployment noch einmal durch https://squoosh.app schicken für zusätzliche ~60% Reduktion.

---

## Zuordnung pro Seite

### Startseite / Kontakt — `hero/`

| Datei | Motiv | Verwendung |
| ----- | ----- | ---------- |
| `hero/vienna-stephansdom-sunset.jpg` | Stephansdom bei Sonnenuntergang, Wien | Hero-Hintergrund, Kontakt-Seite, Footer |
| `hero/european-old-town.jpg` | Europäische Altstadt mit Blumen | Alternativer Hero, „Leben in Österreich"-Sektion |

### Rechtsberatung — `legal/`

| Datei | Motiv | Verwendung |
| ----- | ----- | ---------- |
| `legal/law-library-busts.jpg` | Alte Bibliothek mit Büsten (Trinity College) | Hero Rechtsberatung, starke erste Impression |
| `legal/gavel-marble.jpg` | Richterhammer auf hellem Marmor | Juristische Begleitung Hero |
| `legal/signing-document.jpg` | Hand signiert Dokument mit Füller | Vertragsprüfung, Juristische Begleitung |
| `legal/justitia-bronze.jpg` | Bronze-Justitia mit Waage | Sektion „Meine Werte", Rechtsberatung Detail |
| `legal/justitia-silver.jpg` | Silber-Justitia Nahaufnahme | Alternative zur Bronze, Icon-Verwendung |
| `legal/house-keys.jpg` | Rotes Mini-Haus mit Schlüssel | Immobilien in Österreich Hero |

### Immigration — `immigration/`

| Datei | Motiv | Verwendung |
| ----- | ----- | ---------- |
| `immigration/globe-europe.jpg` | Globus mit Europa-Fokus | Übersicht Immigration, Visum-Seiten |

> **Noch fehlend für Immigration:** Passport-Nahaufnahme, Familie am Flughafen (Silhouette), Studienplatz Wien. Empfehlung: bei Gelegenheit noch 2–3 ergänzen.

### Integrationskurse — `integration/`

| Datei | Motiv | Verwendung |
| ----- | ----- | ---------- |
| `integration/classroom-presentation.jpg` | Kursraum mit Präsentation, aufmerksame Teilnehmende | Integrationskurse Hero |
| `integration/bookstore-interior.jpg` | Buchhandlung mit aufgeschlagenem Buch | Rechtskurse, Lernen |
| `integration/bookshelves.jpg` | Hohe gefüllte Bücherregale | Hintergrund, Textur |

### Über mich / Beratungsszenen — `about/`

| Datei | Motiv | Verwendung |
| ----- | ----- | ---------- |
| `about/business-woman-coffee.jpg` | Geschäftsfrau mit Kaffee, Backstein | Optionales Beratungsmotiv (nicht mehr Platzhalter für Darina) |
| `about/consultation-meeting.jpg` | Zwei Frauen im Beratungsgespräch | Sektion „Wie ich arbeite", Beratungsszene |
| `about/people-meeting-table.jpg` | Meeting am langen Tisch | Team/Beratung/Kurse |

### Team — echte Fotos von Darina — `team/`

**Eigene Aufnahmen** aus einem Shooting (kein Unsplash). Erzeugt mit `scripts/build-portraits.mjs` aus den Originalen in `../Foto-Genarator/unsere Fotos/Darina-Fotos/` (Originale 1366 × 2048 px, keine EXIF-Rotation). Neu erzeugen: `npm i -D sharp && node scripts/build-portraits.mjs`. Die Originale liegen **nicht** in `public/`.

| Datei | Motiv | Quelle (Original) | Crop `left, top, w×h` | Verwendung |
| ----- | ----- | ----------------- | --------------------- | ---------- |
| `team/darina-portrait.jpg` — 840×1120 (3:4) | Halbportrait, heller Blazer | `WhatsApp Image 2026-07-22 at 11.55.18-2.jpeg` | `500, 260, 840×1120` | `/about` Hero |
| `team/darina-square.jpg` — 700×700 (1:1) | Kopfbild | `…11.55.18-2.jpeg` | `500, 330, 700×700` | Startseite (Drop-Cap-Sektion), `/contact` Avatar |
| `team/darina-arbeit.jpg` — 936×702 (4:3) | Arbeitsszene, liest Unterlagen | `…11.55.18-7.jpeg` | `430, 700, 936×702` | `/about` Arbeitsszene |
| `team/darina-arbeit-wide.jpg` — 936×527 (16:9) | Arbeitsszene, Querband | `…11.55.18-7.jpeg` | `430, 760, 936×527` | Reserve, aktuell ungenutzt |

**Auflösungsgrenzen** — max. Anzeigebreite ohne sichtbares Hochskalieren (bei 2× Retina): `darina-portrait` ~420 px · `darina-square` ~350 px · `darina-arbeit` / `-wide` ~460 px. Deshalb bekommt jedes Bild einen `max-w-[…]`-Container — **kein** Vollbild-Hero, kein `100vw` auf Desktop.

**Lizenz:** Eigene Fotos aus einem Shooting — **keine** Unsplash-Lizenz, keine Attribution nötig.

### Bereits vorhanden — Hero-Illustration

| Datei | Motiv | Verwendung |
| ----- | ----- | ---------- |
| `/darina-justitia.png` | Darina als Justitia mit Österreich-Flagge | Haupt-Hero (Startseite) |

---

## Einbinden in Next.js

### Als `next/image` (empfohlen — automatische Optimierung):

```tsx
import Image from "next/image";

<Image
  src="/images/legal/law-library-busts.jpg"
  alt="Anwaltsbibliothek"
  width={2000}
  height={1333}
  className="rounded-sm"
  priority={false}
/>
```

### Als CSS-Hintergrund:

```tsx
<section
  className="relative bg-cover bg-center min-h-[500px]"
  style={{ backgroundImage: "url('/images/hero/vienna-stephansdom-sunset.jpg')" }}
>
  {/* Overlay für Lesbarkeit */}
  <div className="absolute inset-0 bg-black/40" />
  <div className="relative z-10 …">…</div>
</section>
```

### Mit Burgundy-Farbton-Overlay (passt zum Design):

```tsx
<div className="relative">
  <Image src="/images/legal/gavel-marble.jpg" alt="..." fill className="object-cover" />
  <div className="absolute inset-0 bg-[#a12d2d]/20 mix-blend-multiply" />
</div>
```

---

## Empfohlene Verwendung pro Seite

```
/                           → /darina-justitia.png (Hero)
                              /images/hero/vienna-stephansdom-sunset.jpg (Sektion „In Wien")
                              /images/about/consultation-meeting.jpg (Sektion „Wie ich arbeite")

/legal                      → /images/legal/law-library-busts.jpg (Hero)
/legal/support              → /images/legal/signing-document.jpg
/legal/certificates         → /images/legal/justitia-bronze.jpg
/legal/real-estate          → /images/legal/house-keys.jpg

/immigration                → /images/immigration/globe-europe.jpg (Hero)
/immigration/rwr-plus       → /images/legal/signing-document.jpg
/immigration/family-reuni.  → (emotional Motiv noch ergänzen)
/immigration/student-visa   → /images/integration/bookshelves.jpg

/integration                → /images/integration/classroom-presentation.jpg (Hero)
/integration/german-rwr     → /images/integration/bookstore-interior.jpg
/integration/legal-courses  → /images/legal/law-library-busts.jpg

/prices                     → (kein Hauptbild empfohlen, Tabelle im Fokus)
/about                      → /images/team/darina-portrait.jpg (Hero) + /images/team/darina-arbeit.jpg (Arbeitsszene)
/contact                    → /images/hero/vienna-stephansdom-sunset.jpg
```

---

## Lizenz-Hinweis

Alle Bilder stammen von [Unsplash](https://unsplash.com). Die [Unsplash License](https://unsplash.com/license) erlaubt:
- ✅ Kommerzielle Nutzung
- ✅ Keine Attribution notwendig
- ✅ Modifikation erlaubt
- ❌ Wiederverkauf als Stockfoto nicht erlaubt

Empfohlen (nicht verpflichtend): Auf einer Unterseite oder im Footer eine kleine Credits-Zeile — erzeugt Goodwill bei Fotograf:innen.

---

*Stand: Juli 2026 · 19 Bilder (inkl. 4 eigene Darina-Portraits in `team/`) · gesamt ~5 MB*
