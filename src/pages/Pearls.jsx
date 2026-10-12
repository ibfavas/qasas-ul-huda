/* Pearls of the Seerah: timeline index + individual story pages. */
import { pearls, pearlOrder, pearlBySlug } from '../data/pearls.js';
import { Headpiece, RuleStar } from '../components/chrome.jsx';

function PearlEmblem() {
  return (
    <span className="pearl-emblem" aria-hidden="true">
      <svg viewBox="0 0 32 32" fill="none">
        <circle cx="16" cy="16" r="11" fill="#f4ead2" stroke="#a8842f" strokeWidth="1.6" />
        <ellipse cx="12.5" cy="12" rx="4" ry="2.6" fill="#ffffff" opacity="0.75" transform="rotate(-24 12.5 12)" />
      </svg>
    </span>
  );
}

export function PearlsIndex() {
  const ordered = pearlOrder.map((s) => pearlBySlug[s]);
  let lastEra = null;
  return (
    <main className="pearl-index">
      <Headpiece />
      <p className="reveal pearl-plaque-row">
        <span className="chapter-plaque">Qasas ul-Huda</span>
      </p>
      <p className="kicker reveal" data-delay="1">Short stories, verified</p>
      <h1 className="antique-gold reveal" data-delay="1">Pearls of the Seerah</h1>
      <p className="lede reveal" data-delay="2">
        Short, verified stories from the life of the Prophet Muhammad ﷺ: moments of mercy,
        courage, and character, each one traced to its source before it is set down.
      </p>
      <RuleStar />
      <div className="pearl-timeline reveal" data-delay="2">
        {ordered.map((p, i) => {
          const showEra = p.era !== lastEra;
          lastEra = p.era;
          return (
            <div key={p.slug}>
              {showEra ? (
                <p className="pearl-era" aria-label={p.era}>
                  <span>{p.era}</span>
                </p>
              ) : null}
              <div className={'pearl-node' + (i % 2 ? ' flip' : '')}>
                <span className="pearl-dot" aria-hidden="true">
                  <PearlEmblem />
                </span>
                <a className="pearl-card" href={'?p=' + p.slug}>
                  <span className="pearl-cat">{p.category}</span>
                  <span className="pearl-title">{p.title}</span>
                  <span className="pearl-teaser">{p.teaser}</span>
                  <span className="pearl-read">
                    Read the story <span aria-hidden="true">&rarr;</span>
                  </span>
                </a>
              </div>
            </div>
          );
        })}
      </div>
    </main>
  );
}

export function PearlStoryPage({ pearl }) {
  return (
    <main className="pearl-story">
      <Headpiece />
      <p className="reveal">
        <a className="pearl-back" href="./">
          <span aria-hidden="true">&larr;</span> All pearls
        </a>
      </p>
      <p className="kicker reveal" data-delay="1">
        {pearl.category} &middot; {pearl.era}
      </p>
      <h1 className="antique-gold reveal" data-delay="1">{pearl.title}</h1>
      <RuleStar />
      <div className="pearl-body reveal" data-delay="2">
        {pearl.body.map((para, i) => (
          <p key={i}>{para}</p>
        ))}
      </div>
      {pearl.source && pearl.source.label ? (
        <aside className="pearl-source reveal">
          <p className="pearl-source-kicker">Source</p>
          <p>
            {pearl.source.url ? (
              <a href={pearl.source.url} target="_blank" rel="noopener noreferrer">
                {pearl.source.label}
              </a>
            ) : (
              <span>{pearl.source.label}</span>
            )}
            {pearl.source.narrator ? <span> &middot; narrated by {pearl.source.narrator}</span> : null}
          </p>
          {pearl.source.grade ? <p className="pearl-grade">{pearl.source.grade}</p> : null}
        </aside>
      ) : null}
      {pearl.lesson ? (
        <aside className="pearl-lesson reveal">
          <p className="pearl-source-kicker">The pearl in it</p>
          <p>{pearl.lesson}</p>
        </aside>
      ) : null}
      <p className="reveal" style={{ textAlign: 'center', marginTop: 36 }}>
        <a className="pearl-back" href="./">
          <span aria-hidden="true">&larr;</span> All pearls
        </a>
      </p>
    </main>
  );
}
