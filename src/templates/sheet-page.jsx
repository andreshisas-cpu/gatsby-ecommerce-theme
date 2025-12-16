import React from "react";
import ReactMarkdown from "react-markdown";
import Layout from "../components/Layout";

function Block({ b }) {
  const type = String(b.blockType || "").trim();

  if (type === "hero") {
    return (
      <section className="card">
        {b.heading ? <h1 style={{ marginTop: 0 }}>{b.heading}</h1> : null}
        {b.subheading ? <p>{b.subheading}</p> : null}
        {b.imageUrl ? <img src={b.imageUrl} alt={b.heading || ""} /> : null}
      </section>
    );
  }

  if (type === "text") {
    return (
      <section className="card">
        {b.heading ? <h2 style={{ marginTop: 0 }}>{b.heading}</h2> : null}
        {b.bodyMd ? <ReactMarkdown>{String(b.bodyMd)}</ReactMarkdown> : null}
      </section>
    );
  }

  if (type === "gallery") {
    return (
      <section className="card">
        {b.heading ? <h2 style={{ marginTop: 0 }}>{b.heading}</h2> : null}
        {b.imageUrl ? <img src={b.imageUrl} alt={b.heading || "Imagen"} /> : null}
        {b.bodyMd ? <ReactMarkdown>{String(b.bodyMd)}</ReactMarkdown> : null}
      </section>
    );
  }

  if (type === "cta") {
    return (
      <section className="card">
        {b.heading ? <h2 style={{ marginTop: 0 }}>{b.heading}</h2> : null}
        {b.bodyMd ? <ReactMarkdown>{String(b.bodyMd)}</ReactMarkdown> : null}
        {b.ctaLink && b.ctaText ? (
          <a className="btn" href={b.ctaLink} target="_blank" rel="noreferrer">
            {b.ctaText}
          </a>
        ) : null}
      </section>
    );
  }

  return null;
}

export default function SheetPage({ pageContext }) {
  const { title, blocks = [], nav = [] } = pageContext;

  return (
    <Layout nav={nav}>
      <h1>{title}</h1>
      {blocks.map((b, i) => (
        <Block key={`${b.blockType}-${b.order}-${i}`} b={b} />
      ))}
    </Layout>
  );
}
