import React from "react";
import { Link } from "gatsby";

export default function Header({ nav = [], brand = "María Lucía" }) {
  return (
    <header className="container">
      <div style={{ display: "flex", justifyContent: "space-between", gap: 14, alignItems: "center" }}>
        <Link to="/" style={{ fontWeight: 700, color: "#111" }}>{brand}</Link>
        <nav className="nav">
          {nav.map((n) => (
            <Link key={n.path} to={n.path} style={{ color: "#111" }}>
              {n.title}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
