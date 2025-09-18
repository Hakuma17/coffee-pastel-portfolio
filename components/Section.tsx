export default function Section({
  title, children, tone = 'card'
}: {title?: string; children?: any; tone?: 'hero'|'card'}) {
  const skin = tone === 'hero' ? 'bg-card' : 'card-skin';
  return (
    <section className={`rounded-2xl ${skin} p-6 md:p-8 shadow-soft`}>
      {title ? <h2 className="mb-4 text-2xl font-semibold">{title}</h2> : null}
      {children}
    </section>
  );
}
