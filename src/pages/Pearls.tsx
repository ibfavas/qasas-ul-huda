/* Moments: searchable story index + individual story pages. */
import { useMemo, useState } from 'react';
import { pearls, pearlOrder, pearlBySlug } from '../data/pearls';
import { Headpiece, RuleStar } from '../components/chrome';
import type { Moment } from '../types';

const PAGE_SIZE = 9;

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
  const ordered = useMemo(() => pearlOrder.map((s) => pearlBySlug[s]), []);
  const categories = useMemo(() => {
    const seen: string[] = [];
    ordered.forEach((p) => {
      if (!seen.includes(p.category)) seen.push(p.category);
    });
    return seen;
  }, [ordered]);
  const spotlight = useMemo(() => {
    const day = Math.floor(Date.now() / 86400000);
    return ordered[day % ordered.length];
  }, [ordered]);

  const [query, setQuery] = useState('');
  const [cat, setCat] = useState('All');
  const [shown, setShown] = useState(PAGE_SIZE);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return ordered.filter((p) => {
      if (cat !== 'All' && p.category !== cat) return false;
      if (!q) return true;
      return (p.title + ' ' + p.teaser + ' ' + p.category).toLowerCase().includes(q);
    });
  }, [ordered, query, cat]);
  const visible = filtered.slice(0, shown);

  const pickCat = (c: string) => {
    setCat(c);
    setShown(PAGE_SIZE);
  };
  const typeQuery = (v: string) => {
    setQuery(v);
    setShown(PAGE_SIZE);
  };

  return (
    <main className="pearl-index">
      <Headpiece />
      <p className="reveal pearl-plaque-row">
        <span className="chapter-plaque">Qasas ul-Huda</span>
      </p>
      <p className="kicker reveal" data-delay="1">Short stories, verified</p>
      <h1 className="antique-gold reveal" data-delay="1">Moments</h1>
      <p className="lede reveal" data-delay="2">
        Short, verified stories from the life of the Prophet Muhammad ﷺ: moments of mercy,
        courage, and character, each one traced to its source before it is set down.
      </p>
      <RuleStar />

      <section className="pearl-spotlight reveal" data-delay="2" aria-label="Moment of the day">
        <p className="pearl-spot-kicker">
          <PearlEmblem /> <span>Moment of the day</span>
        </p>
        <a className="pearl-spot-card" href={'?p=' + spotlight.slug}>
          <span className="pearl-title">{spotlight.title}</span>
          <span className="pearl-teaser">{spotlight.teaser}</span>
          <span className="pearl-read">
            Read today&apos;s moment <span aria-hidden="true">&rarr;</span>
          </span>
        </a>
      </section>

      <div className="pearl-controls reveal" data-delay="2">
        <label className="pearl-search">
          <span className="visually-hidden">Search stories</span>
          <input
            type="search"
            placeholder="Search stories..."
            value={query}
            onChange={(e) => typeQuery(e.target.value)}
          />
        </label>
        <div className="pearl-pills" role="group" aria-label="Filter by theme">
          {['All'].concat(categories).map((c) => (
            <button
              key={c}
              type="button"
              className={'pearl-pill' + (cat === c ? ' active' : '')}
              aria-pressed={cat === c}
              onClick={() => pickCat(c)}
            >
              {c}
            </button>
          ))}
        </div>
      </div>

      <p className="pearl-count" aria-live="polite">
        {filtered.length === 0
          ? 'No stories found. Try another search.'
          : 'Showing ' +
            visible.length +
            ' of ' +
            filtered.length +
            (filtered.length === 1 ? ' story' : ' stories')}
      </p>

      <div className="pearl-grid">
        {visible.map((p) => (
          <a className="pearl-grid-card" href={'?p=' + p.slug} key={p.slug}>
            <PearlEmblem />
            <span className="pearl-title">{p.title}</span>
            <span className="pearl-teaser">{p.teaser}</span>
            <span className="pearl-cat">{p.category}</span>
          </a>
        ))}
      </div>

      {visible.length < filtered.length ? (
        <p className="pearl-more-row">
          <button type="button" className="pearl-more" onClick={() => setShown((n) => n + PAGE_SIZE)}>
            Load more
          </button>
        </p>
      ) : null}
    </main>
  );
}

export function PearlStoryPage({ pearl }: { pearl: Moment }) {
  return (
    <main className="pearl-story">
      <Headpiece />
      <p className="reveal">
        <a className="pearl-back" href="./">
          <span aria-hidden="true">&larr;</span> All moments
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
      <p className="reveal" style={{ textAlign: 'center', marginTop: 36 }}>
        <a className="pearl-back" href="./">
          <span aria-hidden="true">&larr;</span> All moments
        </a>
      </p>
    </main>
  );
}
