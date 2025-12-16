const path = require("path");

// Crea páginas a partir de TODAS las hojas encontradas en el schema GraphQL.
// Cada hoja debe tener columnas: pageSlug, pageTitle, order, blockType, heading, subheading, bodyMd, imageUrl, ctaText, ctaLink
exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions;

  // Descubre automáticamente los campos del root Query
  const schemaRes = await graphql(`
    {
      __schema {
        queryType {
          fields {
            name
          }
        }
      }
    }
  `);

  if (schemaRes.errors) {
    reporter.panic("Error leyendo el schema GraphQL", schemaRes.errors);
    return;
  }

  const queryFields = schemaRes.data.__schema.queryType.fields.map((f) => f.name);

  // typePrefix = GoogleSheet => campos típicos: allGoogleSheet<SpreadsheetName><Hoja>
  const sheetQueries = queryFields.filter((n) => n.startsWith("allGoogleSheet"));

  const template = path.resolve("./src/templates/sheet-page.jsx");

  // Primero: construir navegación desde las filas meta de cada hoja
  const nav = [];

  const pages = [];

  for (const qName of sheetQueries) {
    const dataRes = await graphql(`
      {
        ${qName} {
          nodes {
            pageSlug
            pageTitle
            order
            blockType
            heading
            subheading
            bodyMd
            imageUrl
            ctaText
            ctaLink
          }
        }
      }
    `);

    if (dataRes.errors) {
      reporter.warn(`Error consultando ${qName}: ${dataRes.errors}`);
      continue;
    }

    const nodes = dataRes.data[qName]?.nodes || [];
    if (!nodes.length) continue;

    const meta = nodes.find((n) => n.blockType === "meta") || nodes[0];

    const slug = String(meta.pageSlug || "").trim();
    const title = String(meta.pageTitle || "").trim() || "Página";

    if (!slug) {
      reporter.warn(`Hoja sin pageSlug (fila meta). Query: ${qName}`);
      continue;
    }

    const pagePath = slug === "inicio" ? "/" : `/${slug}`;

    nav.push({
      path: pagePath,
      title,
      order: meta.order ?? 9999
    });

    const blocks = nodes
      .filter((n) => n.blockType !== "meta")
      .sort((a, b) => (a.order ?? 9999) - (b.order ?? 9999));

    pages.push({ pagePath, slug, title, blocks });
  }

  nav.sort((a, b) => (a.order ?? 9999) - (b.order ?? 9999));

  // Segundo: crear páginas
  for (const p of pages) {
    createPage({
      path: p.pagePath,
      component: template,
      context: {
        slug: p.slug,
        title: p.title,
        blocks: p.blocks,
        nav
      }
    });
  }
};
