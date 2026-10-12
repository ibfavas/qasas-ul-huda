/* Homepage v4: original illuminated cover. All artwork generated for Qasas ul-Huda. */
import { HomeNav, Footer, ColophonRule } from '../components/chrome.jsx';
import { prophets } from '../data/prophets.js';
import { foundations, foundationOrder } from '../data/foundations.js';
import { caliphs } from '../data/caliphs.js';
import { useSiteEffects } from '../hooks/effects.js';

const ROMAN = ['I', 'II', 'III', 'IV', 'V', 'VI'];

function ProphetItem({ p }) {
  const medallion = (
    <span
      className="medallion"
      dangerouslySetInnerHTML={{
        __html: '<svg viewBox="0 0 48 48"' + p.svgAttrs + ' aria-hidden="true">' + p.svgInner + '</svg>',
      }}
    />
  );
  const inner = (
    <>
      {medallion}
      <span className="pnum">{p.pnum}</span>
      <span className="pname" dangerouslySetInnerHTML={{ __html: p.pname }} />
      {p.soon && <span className="soon-tag">Soon</span>}
    </>
  );
  return p.tag === 'a' ? (
    <a className="prophet" role="listitem" href={p.href} aria-label={p.aria}>
      {inner}
    </a>
  ) : (
    <span className="prophet soon" role="listitem">
      {inner}
    </span>
  );
}

/* Foundations as bookmark tabs (design 3): nine index-divider tabs fanned
   across the page, colored by family. Every tab is a hand-drawn SVG
   bookmark; no generated imagery. Falls back to a grouped list on small
   screens. */
const FJ_TITLE_LINES = {
  iman: ['The Six Articles', 'of Faith'],
  pillars: ['The Five Pillars', 'of Islam'],
  oneness: ['Why Muslims Say:', 'God Is One'],
  night: ['The Night the', 'Quran Began'],
  quran: ['The Standardization', 'of the Quran'],
  recitation: ['How the Quran', 'Is Recited'],
  ijaz: ['The Quran That', 'Cannot Be Imitated'],
  'no-compulsion': ['No Compulsion:', 'Faith, War and Peace'],
  women: ['Women in Islam'],
};

const FS3_FAMILIES = [
  { name: 'Belief and Practice', bg: '#0e4a42', fg: '#f3e6c3', edge: '#d9bd76', frame: 'rgba(217,189,118,0.5)' },
  { name: 'The Quran', bg: '#c19a2e', fg: '#2b2117', edge: '#8a6a24', frame: 'rgba(43,33,23,0.45)' },
  { name: 'Faith Among People', bg: '#1c2433', fg: '#f3e6c3', edge: '#d9bd76', frame: 'rgba(217,189,118,0.5)' },
];

/* Greedy word-wrap for tab titles */
function fs3Wrap(text, max) {
  const words = text.split(' ');
  const lines = [];
  let cur = '';
  for (const w of words) {
    const next = (cur + ' ' + w).trim();
    if (next.length > max && cur) {
      lines.push(cur.trim());
      cur = w;
    } else {
      cur = next;
    }
  }
  if (cur.trim()) lines.push(cur.trim());
  return lines;
}

function fs3Tab(slug, n, angle, fam) {
  const title = foundations[slug].hero.title.toUpperCase();
  const lines = fs3Wrap(title, 14);
  return (
    <a
      key={slug}
      href={'foundations/?p=' + slug}
      className="fs3-tab"
      style={{ transform: 'rotate(' + angle + 'deg)' }}
      aria-label={foundations[slug].hero.title + ', ' + fam.name}
    >
      <svg viewBox="0 0 150 360" className="fs3-tabsvg" aria-hidden="true">
        <path
          d="M14 344 L14 54 Q14 28 40 28 L62 28 A16 16 0 0 1 94 28 L116 28 Q142 28 142 54 L142 344 Q142 348 138 348 L18 348 Q14 348 14 344 Z"
          fill={fam.bg}
          stroke={fam.edge}
          strokeWidth="2"
        />
        <path
          d="M24 334 L24 62 Q24 40 46 40 L68 40 A12 12 0 0 1 92 40 L114 40 Q136 40 136 62 L136 334 Q136 338 132 338 L28 338 Q24 338 24 334 Z"
          fill="none"
          stroke={fam.frame}
          strokeWidth="1"
        />
        <text x="78" y="88" className="fs3-num" fill={fam.fg}>
          {String(n).padStart(2, '0')}
        </text>
        <line x1="58" y1="106" x2="98" y2="106" stroke={fam.frame} strokeWidth="1" />
        {lines.map((line, li) => (
          <text key={li} x="78" y={132 + li * 18} className="fs3-title" fill={fam.fg}>
            {line}
          </text>
        ))}
        <rect
          x="74"
          y="312"
          width="8"
          height="8"
          transform="rotate(45 78 316)"
          fill={fam.edge}
          opacity="0.8"
        />
      </svg>
    </a>
  );
}

function FoundationsTabs() {
  const groups = [...new Set(foundationOrder.map((slug) => foundations[slug].group))];
  const famOf = (slug) => FS3_FAMILIES[groups.indexOf(foundations[slug].group)];
  return (
    <div className="fs3 reveal" data-delay="3">
      <div className="fs3-inner">
        <div className="fs3-fan" role="list" aria-label="Foundations articles">
          {foundationOrder.map((slug, i) => (
            <div key={slug} role="listitem" className="fs3-slot">
              {fs3Tab(slug, i + 1, (i - 4) * 2.5, famOf(slug))}
            </div>
          ))}
        </div>
        <div className="fs3-legend" aria-label="Article families">
          {FS3_FAMILIES.map((fam) => (
            <span className="fs3-key" key={fam.name}>
              <span className="fs3-chip" style={{ background: fam.bg, borderColor: fam.edge }} />
              <span className="fs3-keyname">{fam.name}</span>
            </span>
          ))}
        </div>
        <div className="fs-list">
          {groups.map((group) => (
            <div className="fs-group" key={group}>
              <h3 className="fs-group-name">{group}</h3>
              <ul>
                {foundationOrder
                  .filter((s) => foundations[s].group === group)
                  .map((slug, i) => (
                    <li key={slug}>
                      <a className="fs-row" href={'foundations/?p=' + slug}>
                        <span className="fs-badge" aria-hidden="true">
                          {String(foundationOrder.indexOf(slug) + 1).padStart(2, '0')}
                        </span>
                        <span className="fs-row-title">{foundations[slug].hero.title}</span>
                        <span className="fs-row-arrow" aria-hidden="true">
                          &rarr;
                        </span>
                      </a>
                    </li>
                  ))}
              </ul>
            </div>
          ))}
        </div>
        <p className="fs3-cap">Nine articles in three families</p>
      </div>
    </div>
  );
}

const PILLARS = [
  {
    icon: 'assets/home/icon-scroll.png',
    title: 'Authentic Narrations',
    text: 'Carefully researched stories drawn from classical sources, presented with reverence and clarity.',
  },
  {
    icon: 'assets/home/icon-star.png',
    title: 'Interactive Timeline',
    text: 'Explore the chronological journey through historical periods and pivotal moments.',
  },
  {
    icon: 'assets/home/icon-lantern.png',
    title: 'Scholarly Insights',
    text: 'Lessons and reflections from each story, drawn only from the verses and authentic narrations.',
  },
];

const ERAS = [
  { numeral: 'I', name: 'Creation' },
  { numeral: 'II', name: 'Call' },
  { numeral: 'III', name: 'Migration' },
  { numeral: 'IV', name: 'Revelation' },
  { numeral: 'V', name: 'Trial' },
  { numeral: 'VI', name: 'Triumph' },
  { numeral: 'VII', name: 'Legacy' },
];

/* 12:101: copied verbatim from verses.json, the same strings the Yusuf chapter renders. */
const CALLOUT = {
  ar: 'رَبِّ قَدْ ءَاتَيْتَنِى مِنَ ٱلْمُلْكِ وَعَلَّمْتَنِى مِن تَأْوِيلِ ٱلْأَحَادِيثِ ۚ فَاطِرَ ٱلسَّمَـٰوَٰتِ وَٱلْأَرْضِ أَنتَ وَلِىِّۦ فِى ٱلدُّنْيَا وَٱلْـَٔاخِرَةِ ۖ تَوَفَّنِى مُسْلِمًا وَأَلْحِقْنِى بِٱلصَّـٰلِحِينَ',
  en: 'My Lord, You have given me [something] of sovereignty and taught me of the interpretation of dreams. Creator of the heavens and earth, You are my protector in this world and the Hereafter. Cause me to die a Muslim and join me with the righteous."',
  cite: 'Surah Yusuf · 12:101',
};

export function HomePage() {
  useSiteEffects();
  return (
    <>
      <HomeNav />

      <header className="hero-night">
        <div className="hero-night-bg" aria-hidden="true">
          <img src="assets/home/hero-night-dunes.jpg" alt="" fetchPriority="high" />
        </div>
        <div className="wrap hero-night-inner">
          <img
            className="hero-emblem reveal"
            src="assets/brand/logo.png"
            alt=""
            width="116"
            height="116"
          />
          <p className="hero-night-kicker reveal" data-delay="1">
            A free illuminated manuscript
          </p>
          <h1 className="hero-title reveal" data-delay="1">
            Qasas ul-Huda
          </h1>
          <p className="hero-night-sub reveal" data-delay="2">
            Stories of Guidance
          </p>
          <p className="hero-night-lede reveal" data-delay="3">
            Twenty-five lives, one thread of guidance, told from the verses themselves, with nothing added and
            nothing hidden.
          </p>
          <div className="hero-night-ctas reveal" data-delay="4">
            <a className="btn" href="stories/?p=adam">
              Begin with Adam
            </a>
            <a className="btn btn-ghost" href="#timeline">
              Explore the timeline
            </a>
          </div>
        </div>
        <span className="hero-night-scroll" aria-hidden="true">
          <i></i>
        </span>
      </header>

      <div className="wrap">
        <div className="flourish flourish-home reveal" aria-hidden="true">
          <img src="assets/home/flourish-divider.png" alt="" loading="lazy" />
        </div>
      </div>

      <main>
        <section className="section verse-callout-sec" aria-label="From the Quran">
          <div className="wrap">
            <figure className="verse-callout reveal">
              <img className="vc-emblem" src="assets/brand/logo.png" alt="" width="54" height="54" />
              <blockquote>
                <p className="vc-ar" dir="rtl" lang="ar">
                  {CALLOUT.ar}
                </p>
                <p className="vc-en">{CALLOUT.en}</p>
              </blockquote>
              <figcaption>{CALLOUT.cite}</figcaption>
            </figure>
          </div>
        </section>

        <section className="section pillars" aria-label="What Qasas ul-Huda offers">
          <div className="wrap">
            <div className="pillar-grid">
              {PILLARS.map((p, i) => (
                <div className="pillar-card reveal" data-delay={i + 1} key={p.title}>
                  <img className="pillar-icon" src={p.icon} alt="" loading="lazy" />
                  <h3>{p.title}</h3>
                  <p>{p.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section timeline" id="timeline">
          <div className="wrap">
            <p className="kicker reveal">The Timeline</p>
            <h2 className="section-title reveal" data-delay="1">
              The prophets in order
            </h2>
            <p className="lede reveal" data-delay="2">
              Twenty-five messengers, from the first to the last. All twenty-five chapters are ready to read.
            </p>
            <div className="timeline-rail reveal" data-delay="2" role="list" aria-label="Prophets in chronological order">
              {prophets.map((p, i) => (
                <ProphetItem p={p} key={i} />
              ))}
            </div>
            <p className="timeline-hint">Scroll sideways to travel through all twenty-five</p>
          </div>
        </section>

        <section className="section" id="foundations">
          <div className="wrap">
            <p className="kicker reveal">Foundations</p>
            <h2 className="section-title reveal" data-delay="1">
              Beyond the stories
            </h2>
            <p className="lede reveal" data-delay="2">
              Short articles on the essentials every story stands on, each one verified from the Quran and authentic
              hadith before it is set down.
            </p>
          </div>
          <FoundationsTabs />
        </section>

        <section className="section" id="caliphs">
          <div className="wrap">
            <p className="kicker reveal">The Rightly Guided</p>
            <h2 className="section-title reveal" data-delay="1">
              The Four Caliphs
            </h2>
            <p className="lede reveal" data-delay="2">
              Short stories from the lives of the four rightly guided caliphs, each one verified before it is set
              down.
            </p>
            <div className="caliph-rows reveal" data-delay="3">
              {caliphs.map((c) => (
                <a className="caliph-row" href={'caliphs/' + c.slug + '/'} key={c.slug}>
                  <span className="cr-medal" aria-hidden="true">{c.numeral}</span>
                  <span className="cr-text">
                    <span className="cr-name">{c.name} (RA)</span>
                    <span className="cr-sub">{c.honorific} &middot; {c.years}</span>
                  </span>
                  <span className="cr-arrow" aria-hidden="true">&rarr;</span>
                </a>
              ))}
            </div>
          </div>
        </section>

        <section className="section eras" aria-label="The journey of the prophets">
          <div className="wrap">
            <p className="kicker reveal">The Journey</p>
            <h2 className="section-title reveal" data-delay="1">
              Seven ages, one story
            </h2>
            <div className="era-journey reveal" data-delay="2">
              {ERAS.map((e) => (
                <div className="era-station" key={e.name}>
                  <span className="era-dot" aria-hidden="true">
                    {e.numeral}
                  </span>
                  <span className="era-name">{e.name}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section" id="about">
          <div className="wrap">
            <p className="kicker reveal">About</p>
            <h2 className="section-title reveal" data-delay="1">
              Why Qasas ul-Huda exists
            </h2>
            <div className="narrative">
              <p className="reveal dropcap" data-delay="2">
                The Quran calls the stories of the messengers a reminder and a lesson for people of understanding.
                Qasas ul-Huda is an attempt to gather those stories in one place, told plainly, anchored in the verses
                themselves, and designed with the reverence they deserve.
              </p>
              <p className="reveal" data-delay="3">
                Every chapter shows its sources: the Arabic text of each verse, the Saheeh International translation,
                and the exact surah and verse number: no invented dialogue, no embellished details.
              </p>
              <p className="reveal" data-delay="3">
                Qasas ul-Huda is a free educational project. It carries no ads and sells nothing; knowledge of the prophets
                should reach everyone.
              </p>
            </div>
          </div>
        </section>

        <section className="section" id="resources">
          <div className="wrap">
            <p className="kicker reveal">Resources</p>
            <h2 className="section-title reveal" data-delay="1">
              Where every word comes from
            </h2>
            <p className="lede reveal" data-delay="2">
              Qasas ul-Huda adds nothing of its own to the sources. Read them yourself: every verse and hadith on this site
              links back to where it was verified.
            </p>
            <div className="resource-grid">
              <a
                className="resource-card reveal"
                data-delay="1"
                href="https://quran.com"
                target="_blank"
                rel="noopener"
              >
                <h3>Quran.com</h3>
                <p>
                  Arabic in Uthmani script, with the Saheeh International translation. The first and final authority
                  for every chapter.
                </p>
                <span className="read-link">Visit quran.com</span>
              </a>
              <a
                className="resource-card reveal"
                data-delay="2"
                href="https://sunnah.com"
                target="_blank"
                rel="noopener"
              >
                <h3>Sunnah.com</h3>
                <p>The hadith collections, checked one narration at a time. Only authentic narrations are ever quoted.</p>
                <span className="read-link">Visit sunnah.com</span>
              </a>
            </div>
          </div>
        </section>

        <section className="section" id="colophon" aria-label="Colophon">
          <div className="colophon reveal">
            <p className="kicker">Colophon</p>
            <p>
              Qasas ul-Huda is set by hand in Cormorant Garamond and EB Garamond, with Amiri for the Arabic of the Quran.
              Every verse was copied from the mushaf and checked word for word; every hadith was verified on
              Sunnah.com, and each one links back to its source.
            </p>
            <p>
              This site is free, and it will stay free. There are no advertisements, no trackers, no accounts, and
              nothing for sale: the stories of the prophets belong to everyone.
            </p>
            <ColophonRule />
            <p>Set down in 2026. If a verse or a citation is ever wrong here, it will be corrected.</p>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
