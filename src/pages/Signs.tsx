/* Signs of the Hour: searchable sign index + individual sign pages. */
import { useMemo, useState } from 'react';
import { signs, signOrder, signBySlug } from '../data/signs';
import { Headpiece, RuleStar } from '../components/chrome';
import type { Moment } from '../types';

const PAGE_SIZE = 9;

function SignEmblem() {
  return (
    <span className="pearl-emblem" aria-hidden="true">
      <svg viewBox="0 0 32 32" fill="none">
        <circle cx="16" cy="16" r="11" fill="#f4ead2" stroke="#a8842f" strokeWidth="1.6" />
        <ellipse cx="12.5" cy="12" rx="4" ry="2.6" fill="#ffffff" opacity="0.75" transform="rotate(-24 12.5 12)" />
      </svg>
    </span>
  );
}

export function SignsIndex() {
  const ordered = useMemo(() => signOrder.map((s) => signBySlug[s]), []);
  const categories = useMemo(() => {
    const seen: string[] = [];
    ordered.forEach((p) => {
      if (!seen.includes(p.category)) seen.push(p.category);
    });
    return seen;
  }, [ordered]);
  const spotlight = useMemo(() => {
    if (!ordered.length) return null;
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
      <p className="kicker reveal" data-delay="1">Minor and major signs, verified</p>
      <h1 className="antique-gold reveal" data-delay="1">Signs of the Hour</h1>
      <p className="lede reveal" data-delay="2">
        The signs of the Last Day — the Dajjal, Gog and Magog, the Beast, the Mahdi,
        and the smaller signs before them — each one traced to its source before it is set down.
      </p>
      <RuleStar />

      {ordered.length === 0 ? (
        <section className="reveal" data-delay="2" style={{ textAlign: 'center', marginTop: 32 }}>
          <p className="lede">
            These accounts are being prepared with care — every narration checked
            against its source before it appears here. Return soon, in shaa Allah.
          </p>
        </section>
      ) : (
        <>
          {spotlight ? (
          <section className="pearl-spotlight reveal" data-delay="2" aria-label="Sign of the day">
            <p className="pearl-spot-kicker">
              <SignEmblem /> <span>Sign of the day</span>
            </p>
            <a className="pearl-spot-card" href={'?p=' + spotlight.slug}>
              <span className="pearl-title">{spotlight.title}</span>
              <span className="pearl-teaser">{spotlight.teaser}</span>
              <span className="pearl-read">
                Read today&apos;s sign <span aria-hidden="true">&rarr;</span>
              </span>
            </a>
          </section>
          ) : null}

          <div className="pearl-controls reveal" data-delay="2">
            <label className="pearl-search">
              <span className="visually-hidden">Search signs</span>
              <input
                type="search"
                placeholder="Search signs..."
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
              ? 'No signs found. Try another search.'
              : 'Showing ' +
                visible.length +
                ' of ' +
                filtered.length +
                (filtered.length === 1 ? ' sign' : ' signs')}
          </p>

          <div className="pearl-grid">
            {visible.map((p) => (
              <a className="pearl-grid-card" href={'?p=' + p.slug} key={p.slug}>
                <SignEmblem />
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
        </>
      )}
    </main>
  );
}

export function SignStoryPage({ sign }: { sign: Moment }) {
  return (
    <main className="pearl-story">
      <Headpiece />
      <p className="reveal">
        <a className="pearl-back" href="./">
          <span aria-hidden="true">&larr;</span> All signs
        </a>
      </p>
      <p className="kicker reveal" data-delay="1">
        {sign.category} &middot; {sign.era}
      </p>
      <h1 className="antique-gold reveal" data-delay="1">{sign.title}</h1>
      <RuleStar />
      <div className="pearl-body reveal" data-delay="2">
        {sign.body.map((para, i) => (
          <p key={i}>{para}</p>
        ))}
      </div>
      {sign.source && sign.source.label ? (
        <aside className="pearl-source reveal">
          <p className="pearl-source-kicker">Source</p>
          <p>
            {sign.source.url ? (
              <a href={sign.source.url} target="_blank" rel="noopener noreferrer">
                {sign.source.label}
              </a>
            ) : (
              <span>{sign.source.label}</span>
            )}
            {sign.source.narrator ? <span> &middot; narrated by {sign.source.narrator}</span> : null}
          </p>
          {sign.source.grade ? <p className="pearl-grade">{sign.source.grade}</p> : null}
        </aside>
      ) : null}
      {sign.lesson ? (
        <aside className="pearl-lesson reveal">
          <p className="pearl-source-kicker">The sign in it</p>
          <p>{sign.lesson}</p>
        </aside>
      ) : null}
      <p className="reveal" style={{ textAlign: 'center', marginTop: 36 }}>
        <a className="pearl-back" href="./">
          <span aria-hidden="true">&larr;</span> All signs
        </a>
      </p>
    </main>
  );
}
