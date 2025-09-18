export function HomeIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" width={20} height={20} aria-hidden="true" {...props}>
      <path fill="currentColor" d="M12 3 3 10v10h6v-6h6v6h6V10z" />
    </svg>
  );
}

export function AboutIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" width={20} height={20} aria-hidden="true" {...props}>
      <circle cx="12" cy="8" r="3" fill="currentColor" />
      <rect x="7" y="12" width="10" height="8" rx="2" fill="currentColor" opacity=".6" />
    </svg>
  );
}

export function ProjectsIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" width={20} height={20} aria-hidden="true" {...props}>
      <path fill="currentColor" d="M3 5h8v6H3zM13 5h8v6h-8zM3 13h8v6H3zM13 13h8v6h-8z"/>
    </svg>
  );
}

export function ContactIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" width={20} height={20} aria-hidden="true" {...props}>
      <path fill="currentColor" d="M3 5h18v14H3z"/>
      <path fill="#fff" d="M4 6l8 6 8-6v2l-8 6-8-6z"/>
    </svg>
  );
}

export function ResumeIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" width={20} height={20} aria-hidden="true" {...props}>
      <path fill="currentColor" d="M6 3h9l6 6v12H6z"/>
      <path fill="#fff" d="M15 3v6h6"/>
    </svg>
  );
}

export function GithubIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" width={18} height={18} aria-hidden="true" {...props}>
      <path fill="currentColor" d="M12 2a10 10 0 00-3.16 19.49c.5.1.68-.22.68-.48v-1.7c-2.78.6-3.37-1.2-3.37-1.2-.46-1.17-1.12-1.48-1.12-1.48-.92-.63.07-.62.07-.62 1.02.07 1.56 1.06 1.56 1.06.9 1.55 2.36 1.1 2.94.84.09-.66.35-1.1.63-1.35-2.22-.25-4.56-1.11-4.56-4.95 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.28.1-2.66 0 0 .84-.27 2.75 1.02A9.56 9.56 0 0112 6.8c.85.004 1.7.115 2.49.337 1.9-1.29 2.74-1.02 2.74-1.02.55 1.38.2 2.4.1 2.66.64.7 1.02 1.59 1.02 2.68 0 3.85-2.34 4.7-4.57 4.95.36.31.68.93.68 1.88v2.79c0 .26.18.58.69.48A10 10 0 0012 2z"/>
    </svg>
  );
}

export function LinkedInIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" width={18} height={18} aria-hidden="true" {...props}>
      <path fill="currentColor" d="M4 3a2 2 0 110 4 2 2 0 010-4zm0 5h4v13H4zM10 8h4v2h.06A4.39 4.39 0 0118 8c3 0 5 2 5 6v7h-4v-6c0-1.6-.6-3-2-3s-2 1.4-2 3v6h-4z"/>
    </svg>
  );
}
// Named exports only - no default export needed