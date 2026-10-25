import type { Chapter } from '../types';
/* Chapter registry for the single story page.
   Add future prophets here; the story page renders whichever slug is in ?p=. */
import { chapter as adam } from './adam';
import { chapter as yusuf } from './yusuf';
import { chapter as idris } from './idris';
import { chapter as nuh } from './nuh';
import { chapter as hud } from './hud';
import { chapter as salih } from './salih';
import { chapter as ibrahim } from './ibrahim';
import { chapter as lut } from './lut';
import { chapter as ismail } from './ismail';
import { chapter as ishaq } from './ishaq';
import { chapter as yaqub } from './yaqub';
import { chapter as ayyub } from './ayyub';
import { chapter as shuayb } from './shuayb';
import { chapter as musa } from './musa';
import { chapter as harun } from './harun';
import { chapter as dhulKifl } from './dhul-kifl';
import { chapter as dawud } from './dawud';
import { chapter as sulayman } from './sulayman';
import { chapter as ilyas } from './ilyas';
import { chapter as alYasa } from './al-yasa';
import { chapter as yunus } from './yunus';
import { chapter as zakariya } from './zakariya';
import { chapter as yahya } from './yahya';
import { chapter as isa } from './isa';
import { chapter as muhammad } from './muhammad';

export const chapters: Record<string, Chapter> = {
  adam,
  yusuf,
  idris,
  nuh,
  hud,
  salih,
  ibrahim,
  lut,
  ismail,
  ishaq,
  yaqub,
  ayyub,
  shuayb,
  musa,
  harun,
  'dhul-kifl': dhulKifl,
  dawud,
  sulayman,
  ilyas,
  'al-yasa': alYasa,
  yunus,
  zakariya,
  yahya,
  isa,
  muhammad,
};

export const chapterOrder = ['adam', 'idris', 'nuh', 'hud', 'salih', 'ibrahim', 'lut', 'ismail', 'ishaq', 'yaqub', 'yusuf', 'ayyub', 'shuayb', 'musa', 'harun', 'dhul-kifl', 'dawud', 'sulayman', 'ilyas', 'al-yasa', 'yunus', 'zakariya', 'yahya', 'isa', 'muhammad'];
