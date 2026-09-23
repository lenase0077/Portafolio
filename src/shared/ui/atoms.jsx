import React from 'react';

/** Circular icon button. */
export function IconButton({ label, onClick, children, className = '' }) {
  return (
    <button type="button" className={`icon-btn ${className}`} onClick={onClick} aria-label={label}>
      {children}
    </button>
  );
}

/** Pill button with optional icon. */
export function GhostButton({ onClick, title, children, className = '' }) {
  return (
    <button type="button" className={`ghost-btn ${className}`} onClick={onClick} title={title}>
      {children}
    </button>
  );
}

/** Amber primary CTA. */
export function PrimaryButton({ onClick, children }) {
  return (
    <button type="button" className="primary-btn" onClick={onClick}>
      {children}
    </button>
  );
}

export function Chip({ children, mono = false, className = '' }) {
  return <span className={`chip ${mono ? 'mono' : ''} ${className}`}>{children}</span>;
}

export function SectionBlock({ title, children }) {
  return (
    <section className="panel-section">
      {title ? <h4 className="panel-section-title">{title}</h4> : null}
      {children}
    </section>
  );
}

export function ProjectThumb({ src, name }) {
  const [failed, setFailed] = React.useState(false);
  if (!src || failed) {
    return (
      <div className="project-thumb project-thumb-fallback" aria-hidden>
        <span>{name.slice(0, 2).toUpperCase()}</span>
      </div>
    );
  }
  return (
    <div className="project-thumb">
      <img src={src} alt="" loading="lazy" onError={() => setFailed(true)} />
    </div>
  );
}

/** Render a lucide-like component factory without JSX unused-var noise. */
export function IconSlot({ as: AsComp, size = 16 }) {
  return React.createElement(AsComp, { size });
}
