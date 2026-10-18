/* Signs of the Hour: one URL, content switches by the sign chosen.
   /signs-of-the-hour/  -> sign index
   /signs-of-the-hour/?p=the-dajjal  -> the sign
   (hash #<slug> also works) */
import { createRoot } from 'react-dom/client';
import { useEffect } from 'react';
import { SignsIndex, SignStoryPage } from '../pages/Signs.jsx';
import { StoryNav, Footer } from '../components/chrome.jsx';
import { useSiteEffects } from '../hooks/effects.js';
import { signBySlug } from '../data/signs.js';

function slugFromUrl() {
  try {
    const q = new URLSearchParams(window.location.search).get('p');
    if (q && signBySlug[q]) return q;
  } catch {
    /* URLSearchParams unavailable, fall through to hash */
  }
  const hsh = window.location.hash.replace(/^\#\/?/, '');
  if (hsh && signBySlug[hsh]) return hsh;
  return null;
}

function SignsApp() {
  const slug = slugFromUrl();
  const sign = slug ? signBySlug[slug] : null;
  useSiteEffects();
  useEffect(() => {
    document.title = sign ? sign.title + ' \u00b7 Signs of the Hour' : 'Signs of the Hour \u00b7 Qasas ul-Huda';
    if (sign) window.scrollTo(0, 0);
  }, [slug, sign]);
  return (
    <>
      <StoryNav />
      {sign ? <SignStoryPage sign={sign} /> : <SignsIndex />}
      <Footer />
    </>
  );
}

createRoot(document.getElementById('root')).render(<SignsApp />);
