// src/pages/index.js
import * as React from "react";

const WHATSAPP = "593961954607"; // ← cámbialo si es otro número (sin + ni espacios)
const wa = (txt) =>
  `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(txt)}`;

const productos = [
  {
    nombre: "Country Loaf 800 g",
    precio: 6.5,
    img:
      "https://images.unsplash.com/photo-1563630422139-56c9e1a7db03?q=80&w=1200&auto=format&fit=crop",
    nota: "Harina, agua, sal. Corte rústico.",
  },
  {
    nombre: "Integral con semillas 900 g",
    precio: 7.5,
    img:
      "https://images.unsplash.com/photo-1551218808-94e220e084d2?q=80&w=1200&auto=format&fit=crop",
    nota: "Avena, linaza y sésamo.",
  },
  {
    nombre: "Baguette de masa madre",
    precio: 2.5,
    img:
      "https://images.unsplash.com/photo-1585478259715-876acc5ddb7d?q=80&w=1200&auto=format&fit=crop",
    nota: "Corteza crujiente.",
  },
  {
    nombre: "Focaccia 25×35 cm",
    precio: 9.0,
    img:
      "https://images.unsplash.com/photo-1512058564366-18510be2db19?q=80&w=1200&auto=format&fit=crop",
    nota: "Romero y oliva extra virgen.",
  },
  {
    nombre: "Sourdough Brioche 600 g",
    precio: 8.5,
    img:
      "https://images.unsplash.com/photo-1548943487-a2e4e43b4853?q=80&w=1200&auto=format&fit=crop",
    nota: "Enriquecido (mantequilla y huevo).",
  },
  {
    nombre: "Ciabatta x 2",
    precio: 3.8,
    img:
      "https://images.unsplash.com/photo-1604908811187-1d1a5f2b375a?q=80&w=1200&auto=format&fit=crop",
    nota: "Miga alveolada.",
  },
];

export default function IndexPage() {
  return (
    <main style={styles.page}>
      <header style={styles.header}>
        <a href="#inicio" style={styles.brand}>
          <div style={styles.logo}>MM</div>
          <strong>Pan Artesanal</strong>
        </a>
        <nav style={styles.nav}>
          <a href="#productos">Productos</a>
          <a href="#beneficios">Beneficios</a>
          <a href="#pedir" style={styles.btn} rel="noopener" hrefLang="es"
             target="_blank"
             onClick={(e) => {
               e.preventDefault();
               window.location.href = wa(
                 "Hola, vengo desde la web. Quiero hacer un pedido."
               );
             }}>
            Pedir por WhatsApp
          </a>
        </nav>
      </header>

      <section id="inicio" style={styles.hero}>
        <div>
          <h1 style={styles.h1}>
            Pan de masa madre, natural y de fermentación lenta
          </h1>
          <p style={styles.muted}>
            Horneamos por encargo para asegurar frescura. Encargos hasta las
            18:00 para entrega al día siguiente.
          </p>
          <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
            <a
              style={styles.btn}
              href={wa("Hola, me interesa hacer un pedido.")}
            >
              Pedir por WhatsApp
            </a>
            <a style={styles.btnGhost} href="#productos">
              Ver productos
            </a>
          </div>
        </div>
        <figure style={styles.heroCard}>
          <img
            alt="Pan de masa madre artesanal"
            src="https://images.unsplash.com/photo-1549931319-a545dcf3bc73?q=80&w=1200&auto=format&fit=crop"
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
            loading="eager"
          />
        </figure>
      </section>

      <section id="productos" style={styles.section}>
        <h2 style={styles.h2}>Productos</h2>
        <p style={styles.muted}>
          Elige tu pan y pide por WhatsApp. Personalizamos hidratación y cortes.
        </p>
        <ul style={styles.grid}>
          {productos.map((p) => (
            <li key={p.nombre} style={styles.card}>
              <img
                src={p.img}
                alt={p.nombre}
                style={{ width: "100%", aspectRatio: "4/3", objectFit: "cover" }}
                loading="lazy"
              />
              <div style={{ padding: 14 }}>
                <strong>{p.nombre}</strong>
                <div style={{ fontWeight: 800, margin: "6px 0" }}>
                  ${p.precio.toFixed(2)}
                </div>
                <div style={{ color: "#666", fontSize: 14 }}>{p.nota}</div>
                <a
                  style={{ ...styles.btn, marginTop: 10, display: "inline-block" }}
                  href={wa(
                    `Hola, quiero *${p.nombre}* (precio $${p.precio.toFixed(
                      2
                    )}). ¿Hay disponibilidad para mañana?`
                  )}
                >
                  Pedir por WhatsApp
                </a>
              </div>
            </li>
          ))}
        </ul>
      </section>

      <section id="beneficios" style={styles.section}>
        <h2 style={styles.h2}>Beneficios de la masa madre</h2>
        <p style={styles.muted}>
          Fermentación lenta, sabores complejos y lista corta de ingredientes.
        </p>
        <div style={styles.benefits}>
          <article style={styles.benefit}>
            <h3>Fermentación lenta</h3>
            <p>Desarrolla sabor y textura naturalmente.</p>
          </article>
          <article style={styles.benefit}>
            <h3>Mejor miga y corteza</h3>
            <p>Estructura alveolada y corteza crujiente.</p>
          </article>
          <article style={styles.benefit}>
            <h3>Ingredientes simples</h3>
            <p>Harina, agua y sal. Sin aditivos innecesarios.</p>
          </article>
          <article style={styles.benefit}>
            <h3>Horneado por encargo</h3>
            <p>Frescura garantizada en cada entrega.</p>
          </article>
        </div>
      </section>

      <section id="pedir" style={styles.section}>
        <h2 style={styles.h2}>Cómo pedir</h2>
        <ol style={styles.steps}>
          <li><strong>Elige tu pan</strong> y pulsa “Pedir por WhatsApp”.</li>
          <li><strong>Coordina</strong> hora y punto de entrega.</li>
          <li><strong>Listo</strong>: horneamos y te avisamos.</li>
        </ol>
      </section>

      {/* Botón WA flotante */}
      <a
        aria-label="WhatsApp"
        href={wa("Hola, me interesa hacer un pedido.")}
        style={styles.floatWA}
      >
        WA
      </a>

      <footer style={styles.footer}>
        © {new Date().getFullYear()} María Lucía · Pan de Masa Madre
      </footer>
    </main>
  );
}

export const Head = () => (
  <>
    <title>Pan Artesanal | Pan de Masa Madre</title>
    <meta
      name="description"
      content="Pan de masa madre artesanal horneado por encargo. Pide por WhatsApp."
    />
    <meta name="theme-color" content="#6b8e23" />
  </>
);

const styles = {
  page: { fontFamily: "system-ui, Segoe UI, Roboto, Arial", background: "#faf7f2", color: "#222" },
  header: {
    position: "sticky", top: 0, background: "rgba(250,247,242,.9)",
    borderBottom: "1px solid #e9e1d8", padding: "14px 20px",
    display: "flex", justifyContent: "space-between", alignItems: "center", backdropFilter: "blur(6px)",
  },
  brand: { display: "flex", gap: 10, alignItems: "center", textDecoration: "none", color: "inherit" },
  logo: { width: 36, height: 36, borderRadius: 10, background: "linear-gradient(135deg,#6b8e23,#2f855a)", color: "#fff", display: "grid", placeItems: "center", fontWeight: 800 },
  nav: { display: "flex", gap: 16, alignItems: "center" },
  btn: { background: "#6b8e23", color: "#fff", padding: "10px 14px", borderRadius: 12, fontWeight: 700, textDecoration: "none", boxShadow: "0 6px 20px rgba(107,142,35,.25)" },
  btnGhost: { padding: "10px 14px", borderRadius: 12, fontWeight: 700, textDecoration: "none", border: "1.5px solid #6b8e23", color: "#2f855a" },
  hero: { display: "grid", gridTemplateColumns: "1.1fr .9fr", gap: 24, alignItems: "center", padding: 20 },
  heroCard: { borderRadius: 16, overflow: "hidden", border: "1px solid #eee", boxShadow: "0 20px 40px rgba(0,0,0,.08)" },
  h1: { fontSize: "clamp(28px,5vw,46px)", lineHeight: 1.05, margin: "6px 0 10px" },
  h2: { fontSize: "clamp(22px,3.5vw,32px)", margin: "10px 0 6px" },
  muted: { color: "#666", margin: "0 0 12px" },
  section: { padding: "10px 20px" },
  grid: { listStyle: "none", padding: 0, margin: "12px 0 0", display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 16 },
  card: { background: "#fff", border: "1px solid #eee", borderRadius: 16, overflow: "hidden" },
  benefits: { display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 16 },
  benefit: { background: "#fff", border: "1px solid #eee", borderRadius: 16, padding: 16 },
  steps: { maxWidth: 780, margin: "8px auto", lineHeight: 1.6 },
  footer: { borderTop: "1px solid #e9e1d8", color: "#555", padding: 16, textAlign: "center", marginTop: 24 },
  floatWA: {
    position: "fixed", right: 16, bottom: 16, width: 56, height: 56, borderRadius: "50%",
    display: "grid", placeItems: "center", background: "#25D366", color: "#fff",
    textDecoration: "none", boxShadow: "0 12px 24px rgba(37,211,102,.3)", fontWeight: 800,
  },
  "@media": {},
};
