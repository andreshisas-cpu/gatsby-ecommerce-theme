import React from "react";

export default function Footer() {
  const phone = process.env.WHATSAPP_PHONE || "";
  const wa = phone ? `https://wa.me/${phone}` : null;

  return (
    <footer className="container footer">
      <div style={{ display: "flex", justifyContent: "space-between", gap: 12, flexWrap: "wrap" }}>
        <div>© {new Date().getFullYear()} María Lucía</div>
        {wa ? (
          <a className="btn" href={wa} target="_blank" rel="noreferrer">
            Pedir por WhatsApp
          </a>
        ) : (
          <div>Configura WHATSAPP_PHONE en Netlify.</div>
        )}
      </div>
    </footer>
  );
}
