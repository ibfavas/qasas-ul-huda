import { renderToStaticMarkup } from 'react-dom/server';
import { HomePage } from '../src/pages/Home';
import { ChapterPage } from '../src/pages/Chapter';
import { chapter as adam } from '../src/data/adam';
import { chapter as yusuf } from '../src/data/yusuf';

const out = {
  home: renderToStaticMarkup(<HomePage />),
  adam: renderToStaticMarkup(<ChapterPage chapter={adam} />),
  yusuf: renderToStaticMarkup(<ChapterPage chapter={yusuf} />),
};
process.stdout.write(JSON.stringify(out));
