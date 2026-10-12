/* Pearls of the Seerah: one URL, content switches by the story chosen.
   /pearls/  -> timeline index
   /pearls/?p=day-of-badr  -> the story
   (hash #<slug> also works) */
import { createRoot } from 'react-dom/client';
import { useEffect } from 'react';
import { PearlsIndex, PearlStoryPage } from '../pages/Pearls.jsx';
import { StoryNav, Footer } from '../components/chrome.jsx';
import { useSiteEffects } from '../hooks/effects.js';
import { pearlBySlug } from '../data/pearls.js';

function slugFromUrl() {
  try {
    const q = new URLSearchParams(window.location.search).get('p');
    if (q && pearlBySlug[q]) return q;
  } catch {
    /* URLSearchParams unavailable, fall through to hash */
  }
  const hsh = window.location.hash.replace(/^#\/?/, '');
  if (hsh && pearlBySlug[hsh]) return hsh;
  return null;
}

function PearlsApp() {
  const slug = slugFromUrl();
  const pearl = slug ? pearlBySlug[slug] : null;
  useSiteEffects();
  useEffect(() => {
    document.title = pearl ? pearl.title + ' \u00b7 Pearls of the Seerah' : 'Pearls of the Seerah \u00b7 Qasas ul-Huda';
    if (pearl) window.scrollTo(0, 0);
  }, [slug, pearl]);
  return (
    <>
      <StoryNav />
      {pearl ? <PearlStoryPage pearl={pearl} /> : <PearlsIndex />}
      <Footer />
    </>
  );
}

createRoot(document.getElementById('root')).render(<PearlsApp />);
