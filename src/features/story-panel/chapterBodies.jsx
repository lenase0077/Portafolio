import React from 'react';
import { Download, Github, Linkedin, Mail, MapPin, Phone } from 'lucide-react';
import { contentRepository } from '../../data/contentRepository.js';
import { Chip, ProjectThumb, SectionBlock } from '../../shared/ui/atoms.jsx';

const contact = contentRepository.getContact();

export function ArrivalBody({ lang, t }) {
  const ch = contentRepository.getChapter('arrival');
  return (
    <>
      <p className="panel-lead">{ch.body[lang]}</p>
      <div className="panel-meta">
        <Chip>UTN</Chip>
        <Chip>C++ / Python</Chip>
        <Chip>Open to work</Chip>
      </div>
      <p className="panel-hint">{t('explore')}</p>
    </>
  );
}

export function StoryBody({ lang }) {
  const ch = contentRepository.getChapter('story');
  return (
    <>
      <p className="panel-lead">{ch.body[lang]}</p>
      <SectionBlock>
        <ul className="highlight-list">
          {ch.highlights[lang].map((h) => (
            <li key={h.title}>
              <strong>{h.title}</strong>
              <span>{h.text}</span>
            </li>
          ))}
        </ul>
      </SectionBlock>
    </>
  );
}

export function WorkBody({ lang }) {
  const ch = contentRepository.getChapter('work');
  return (
    <>
      <p className="panel-lead">{ch.body[lang]}</p>
      <div className="project-list">
        {ch.projects.map((p) => (
          <article key={p.id} className="project-card">
            <ProjectThumb src={p.image} name={p.name} />
            <div className="project-body">
              <h5>{p.name}</h5>
              <div className="stack-row">
                {p.stack.map((s) => (
                  <Chip key={s} mono>
                    {s}
                  </Chip>
                ))}
              </div>
              <p>{p.blurb[lang]}</p>
            </div>
          </article>
        ))}
      </div>
      <p className="panel-note">{ch.more[lang]}</p>
    </>
  );
}

export function ToolsBody({ lang }) {
  const ch = contentRepository.getChapter('tools');
  return (
    <>
      <p className="panel-lead">{ch.body[lang]}</p>
      {ch.groups.map((g) => (
        <SectionBlock key={g.id} title={g.title[lang]}>
          <div className="stack-row wrap">
            {g.items.map((item) => (
              <Chip key={item} mono>
                {item}
              </Chip>
            ))}
          </div>
        </SectionBlock>
      ))}
    </>
  );
}

export function PathBody({ lang }) {
  const ch = contentRepository.getChapter('path');
  return (
    <>
      <p className="panel-lead">{ch.body[lang]}</p>
      <ol className="timeline">
        {ch.timeline.map((step) => (
          <li key={`${step.year}-${step.title.en}`}>
            <div className="timeline-year">{step.year}</div>
            <div className="timeline-content">
              <h5>{step.title[lang]}</h5>
              <div className="timeline-place">{step.place}</div>
              <p>{step.desc[lang]}</p>
            </div>
          </li>
        ))}
      </ol>
      <SectionBlock title={ch.goal.title[lang]}>
        <p className="panel-lead">{ch.goal.text[lang]}</p>
      </SectionBlock>
    </>
  );
}

export function HelloBody({ lang }) {
  const ch = contentRepository.getChapter('hello');
  const cvHref = contentRepository.getCvHref(lang);
  return (
    <>
      <p className="panel-lead">{ch.body[lang]}</p>
      <div className="contact-grid">
        <a className="contact-card" href={`mailto:${contact.email}`}>
          <Mail size={18} />
          <div>
            <strong>{ch.links.email[lang]}</strong>
            <span>{contact.email}</span>
          </div>
        </a>
        <a className="contact-card" href={contact.github} target="_blank" rel="noreferrer">
          <Github size={18} />
          <div>
            <strong>{ch.links.github[lang]}</strong>
            <span>Lenase0077</span>
          </div>
        </a>
        <a className="contact-card" href={contact.linkedin} target="_blank" rel="noreferrer">
          <Linkedin size={18} />
          <div>
            <strong>{ch.links.linkedin[lang]}</strong>
            <span>leandro-serrano</span>
          </div>
        </a>
        <a className="contact-card" href={cvHref} download>
          <Download size={18} />
          <div>
            <strong>{ch.links.cv[lang]}</strong>
            <span>PDF</span>
          </div>
        </a>
      </div>
      <div className="panel-meta">
        <span className="meta-pill">
          <MapPin size={14} /> {contact.location[lang]}
        </span>
        <span className="meta-pill">
          <Phone size={14} /> {contact.phone}
        </span>
      </div>
    </>
  );
}
