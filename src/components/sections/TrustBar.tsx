import { CERTIFICATIONS } from '@/constants'

export function TrustBar() {
  // Double the items so the seamless loop works
  const items = [...CERTIFICATIONS, ...CERTIFICATIONS]

  return (
    <section
      className="bg-slate-surface border-y border-gold/10 py-5 overflow-hidden"
      aria-label="Certifications and accolades"
    >
      <div className="flex animate-ticker whitespace-nowrap" aria-hidden="true">
        {items.map((cert, i) => (
          <div
            key={`${cert.name}-${i}`}
            className="inline-flex items-center gap-3 px-8 flex-shrink-0"
          >
            <span className="font-body text-xs font-bold tracking-widest uppercase text-gold">
              {cert.name}
            </span>
            <span className="font-body text-xs text-text-muted">
              {cert.detail}
            </span>
            <span className="text-gold/30 mx-2" aria-hidden="true">◆</span>
          </div>
        ))}
      </div>
      {/* Visually hidden accessible list */}
      <ul className="sr-only" role="list">
        {CERTIFICATIONS.map((cert) => (
          <li key={cert.name}>
            {cert.name}: {cert.detail}
          </li>
        ))}
      </ul>
    </section>
  )
}
