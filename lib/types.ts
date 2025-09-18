export type Locale = 'th'|'en';

export interface Project {
  title: string;
  slug: string;
  year: string;
  role: string;
  summary: string;
  tech: string[];
  cover?: string;
  links?: {label: string; href: string}[];
}
