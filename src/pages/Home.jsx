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

/* Foundations as an unfolding scroll (design 2): nine articles as chapters
   along a hand-built parchment scroll, grouped under three family
   cartouches. All ornament is drawn in SVG/CSS, no generated imagery.
   On small screens it falls back to a grouped list. */
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

const FJ_ROMAN = ['I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX'];

/* Eight-petal rosette ornament */
function fsRosette() {
  const petals = [];
  for (let k = 0; k < 8; k++) {
    petals.push(
      <ellipse
        key={k}
        cx="13"
        cy="6.5"
        rx="2.6"
        ry="5"
        transform={'rotate(' + k * 45 + ' 13 13)'}
      />
    );
  }
  return (
    <svg viewBox="0 0 26 26" className="fs-rosette" aria-hidden="true">
      <g fill="#b3924d">{petals}</g>
      <circle cx="13" cy="13" r="3.6" fill="#8a6a24" />
      <circle cx="13" cy="13" r="1.5" fill="#f3e9cf" />
    </svg>
  );
}

/* Rolled end of the scroll; `right` picks the mirrored gradient id */
function fsRoll(right) {
  const gid = right ? 'fs-rollb' : 'fs-rolla';
  return (
    <svg viewBox="0 0 76 260" preserveAspectRatio="none" className="fs-rollsvg" aria-hidden="true">
      <defs>
        <linearGradient id={gid} x1="0" y1="0" x2="1" y2="0">
          <stop offset="0" stopColor="#8a6f3e" />
          <stop offset="0.3" stopColor="#f4e8c8" />
          <stop offset="0.55" stopColor="#e2cb94" />
          <stop offset="0.8" stopColor="#c8a869" />
          <stop offset="1" stopColor="#7d6335" />
        </linearGradient>
      </defs>
      <rect x="14" y="8" width="48" height="244" rx="24" fill={'url(#' + gid + ')'} stroke="#6d5527" strokeWidth="1.5" />
      <line x1="17" y1="70" x2="59" y2="70" stroke="#6d5527" strokeWidth="1" opacity="0.35" />
      <line x1="17" y1="130" x2="59" y2="130" stroke="#6d5527" strokeWidth="1" opacity="0.35" />
      <line x1="17" y1="190" x2="59" y2="190" stroke="#6d5527" strokeWidth="1" opacity="0.35" />
      <ellipse cx="38" cy="13" rx="22" ry="9" fill="#f6eed6" stroke="#6d5527" strokeWidth="2" />
      <ellipse cx="38" cy="13" rx="13" ry="5" fill="none" stroke="#6d5527" strokeWidth="1.4" />
      <ellipse cx="38" cy="13" rx="6" ry="2.4" fill="none" stroke="#6d5527" strokeWidth="1.2" />
      <ellipse cx="38" cy="247" rx="22" ry="9" fill="#e9d9ae" stroke="#6d5527" strokeWidth="2" />
      <ellipse cx="38" cy="247" rx="13" ry="5" fill="none" stroke="#6d5527" strokeWidth="1.4" />
      <ellipse cx="38" cy="247" rx="6" ry="2.4" fill="none" stroke="#6d5527" strokeWidth="1.2" />
    </svg>
  );
}

/* Small centered flourish divider */
function fsFlourish() {
  return (
    <svg viewBox="0 0 320 22" className="fs-flourish" aria-hidden="true">
      <line x1="0" y1="11" x2="128" y2="11" stroke="#d9bd76" strokeWidth="1" opacity="0.7" />
      <line x1="192" y1="11" x2="320" y2="11" stroke="#d9bd76" strokeWidth="1" opacity="0.7" />
      <g fill="#d9bd76">
        <ellipse cx="160" cy="11" rx="3" ry="5" />
        <ellipse cx="160" cy="11" rx="3" ry="5" transform="rotate(60 160 11)" />
        <ellipse cx="160" cy="11" rx="3" ry="5" transform="rotate(120 160 11)" />
      </g>
      <circle cx="160" cy="11" r="2.4" fill="#0d3b34" stroke="#d9bd76" strokeWidth="1" />
      <rect x="135" y="8.5" width="5" height="5" transform="rotate(45 137.5 11)" fill="#d9bd76" />
      <rect x="180" y="8.5" width="5" height="5" transform="rotate(45 182.5 11)" fill="#d9bd76" />
    </svg>
  );
}

function FoundationsScroll() {
  const groups = [...new Set(foundationOrder.map((slug) => foundations[slug].group))];
  return (
    <div className="fs reveal" data-delay="3">
      <div className="fs-inner">
        <div className="fs-cartouches" aria-label="Article families">
          {groups.map((group) => (
            <div className="fs-cartouche" key={group}>
              <span>{group}</span>
            </div>
          ))}
        </div>
        <div className="fs-scrollwrap">
          <div className="fs-roll">{fsRoll(false)}</div>
          <div className="fs-scroll" role="list" aria-label="Foundations articles">
            <div className="fs-ornament" aria-hidden="true" />
            <div className="fs-chapters">
              {foundationOrder.map((slug, i) => (
                <a
                  key={slug}
                  className="fs-chapter"
                  role="listitem"
                  href={'foundations/?p=' + slug}
                  aria-label={foundations[slug].hero.title + ', ' + foundations[slug].group}
                >
                  {fsRosette()}
                  <span className="fs-numeral" aria-hidden="true">
                    {FJ_ROMAN[i]}
                  </span>
                  <span className="fs-chtitle">
                    {FJ_TITLE_LINES[slug].map((line, li) => (
                      <span key={li} className="fs-chline">
                        {line}
                      </span>
                    ))}
                  </span>
                </a>
              ))}
            </div>
            <div className="fs-ornament" aria-hidden="true" />
          </div>
          <div className="fs-roll">{fsRoll(true)}</div>
        </div>
        <div className="fs-list">
          {groups.map((group) => (
            <div className="fs-group" key={group}>
              <h3 className="fs-group-name">{group}</h3>
              <ul>
                {foundationOrder
                  .filter((s) => foundations[s].group === group)
                  .map((slug) => (
                    <li key={slug}>
                      <a className="fs-row" href={'foundations/?p=' + slug}>
                        <span className="fs-badge" aria-hidden="true">
                          {FJ_ROMAN[foundationOrder.indexOf(slug)]}
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
        {fsFlourish()}
        <p className="fs-cap">Nine articles in three families</p>
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
          <FoundationsScroll />
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
