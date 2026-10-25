/* Four Caliphs page entry. One shared entry; the slug comes from the URL path. */
import { createRoot } from 'react-dom/client';
import { CaliphPage } from '../pages/Caliph';
import { useSiteEffects } from '../hooks/effects';

function CaliphApp() {
  useSiteEffects();
  return <CaliphPage />;
}

createRoot(document.getElementById('root')!).render(<CaliphApp />);
