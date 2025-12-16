# María Lucía (Gatsby + Google Sheets + Netlify)

## Requisitos
- Node 18 (Gatsby 5 en Netlify suele requerir Node 18)
- Un Google Spreadsheet con varias hojas (cada hoja = una página)

## Variables de entorno
Crea un .env (no se sube a git) basado en .env.example:
- SPREADSHEET_ID
- GOOGLE_SERVICE_ACCOUNT_CREDENTIALS (JSON completo de Service Account)
- WHATSAPP_PHONE (ej: 593999999999)

## Estructura del Google Sheet
Cada hoja (tab) debe tener estas columnas:
pageSlug, pageTitle, order, blockType, heading, subheading, bodyMd, imageUrl, ctaText, ctaLink

Regla:
- Debe existir una fila con blockType = meta y order = 0
- pageSlug = "inicio" crea la ruta "/"

## Desarrollo local
npm install
npm run develop

## Deploy en Netlify
Build command: npm run build
Publish directory: public
Environment:
- NODE_VERSION=18
- SPREADSHEET_ID=...
- GOOGLE_SERVICE_ACCOUNT_CREDENTIALS=...
- WHATSAPP_PHONE=...
