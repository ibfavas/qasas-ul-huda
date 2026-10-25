/* Shared data shapes for Qasas ul-Huda.
   Data files annotate their exports with these types, so a malformed
   story, article, or name fails the typecheck instead of the build. */

export interface Hero {
  plaque: string;
  title: string;
  sub: string;
  img?: string;
  imgAlt?: string;
  caption?: string;
}

/* Scene blocks: the manuscript building blocks. */
export interface VerseBlock {
  t: 'verse';
  ref: string;
  arabic: string;
  translation: string;
  citation: string;
}

export interface HadithBlock {
  t: 'hadith';
  label: string;
  text: string;
  narrator: string;
  href: string;
}

export interface TafsirBlock {
  t: 'tafsir';
  label: string;
  text: string;
  href: string;
}

export interface VignetteBlock {
  t: 'vignette';
  img: string;
  alt: string;
  caption: string;
}

export interface TextBlock {
  t: 'kicker' | 'h2' | 'p';
  html: string;
  cls?: string;
}

export interface LineageBlock {
  t: 'lineage';
}

export type Block =
  | VerseBlock
  | HadithBlock
  | TafsirBlock
  | VignetteBlock
  | TextBlock
  | LineageBlock;

export interface Scene {
  id: string;
  ariaLabel?: string;
  title?: string;
  blocks: Block[];
}

export interface QuizQuestion {
  q: string;
  options: string[];
  answer: number;
  ref: string;
}

export interface PrevNextItem {
  href: string;
  label: string;
  title: string;
  arrow: string;
}

export interface Chapter {
  hero: Hero;
  railLabels: string[];
  scenes: Scene[];
  lessons: string[];
  quiz: QuizQuestion[];
  prevNext: PrevNextItem[];
}

export interface FoundationArticle {
  group?: string;
  hero: Hero;
  introHtml: string;
  railLabels: string[];
  sections: Scene[];
  prevNext: PrevNextItem[];
  soon?: boolean;
}

/* Moments and Signs share one story shape. */
export interface MomentSource {
  label: string;
  url?: string;
  narrator?: string;
  grade?: string;
}

export interface Moment {
  slug: string;
  title: string;
  teaser: string;
  category: string;
  era: string;
  order: number;
  source: MomentSource;
  body: string[];
  lesson: string;
}

export interface Prophet {
  tag: string;
  soon?: boolean;
  href?: string;
  aria?: string;
  svgAttrs: string;
  svgInner: string;
  pnum: string | number;
  pname: string;
}

export interface AsmaName {
  n: number;
  ar: string;
  tr: string;
  en: string;
}

export interface Caliph {
  slug: string;
  numeral: string;
  name: string;
  honorific: string;
  years: string;
  title: string;
}

export interface LineageNode {
  n: string;
  ar?: string;
  h?: string;
  p?: number;
  num?: number | string;
}

export interface LineageBranch {
  from: string;
  nodes: LineageNode[];
}

/* A lineage node placed on the chart by the layout functions. */
export interface PositionedNode extends LineageNode {
  x: number;
  y: number;
}

/* A mobile-chart row: a positioned node with its indent and parent. */
export interface MobileRow extends PositionedNode {
  indent: number;
  parent: string | null;
  branchStart?: boolean;
}

export interface LayoutResult {
  nodes: PositionedNode[];
  links: { d: string }[];
  width: number;
  height: number;
}
