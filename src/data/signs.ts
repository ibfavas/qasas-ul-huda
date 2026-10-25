import type { Moment } from '../types';
/* Signs of the Hour: the minor and major signs of the Last Day — Dajjal,
   Gog and Magog, the Beast, the Mahdi — each traced to its source.
   Each sign: slug, title, teaser, category, era, timeline order,
   source attribution, body paragraphs, and a closing lesson.
   Adding a sign here adds it everywhere automatically. */

export const signs: Moment[] = [
];

export const signOrder = signs
  .slice()
  .sort((a, b) => a.order - b.order)
  .map((s) => s.slug);

export const signBySlug = Object.fromEntries(signs.map((s) => [s.slug, s]));
