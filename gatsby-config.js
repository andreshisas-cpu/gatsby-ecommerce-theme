require("dotenv").config();

function readServiceAccountCredentials() {
  if (!process.env.GOOGLE_SERVICE_ACCOUNT_CREDENTIALS) return null;

  const creds = JSON.parse(process.env.GOOGLE_SERVICE_ACCOUNT_CREDENTIALS);

  // En Netlify suele venir con \n escapados
  if (creds.private_key) {
    creds.private_key = creds.private_key.replace(/\\n/g, "\n");
  }
  return creds;
}

module.exports = {
  siteMetadata: {
    title: "María Lucía",
    siteUrl: "https://maria-lucia.com"
  },
  plugins: [
    {
      resolve: "gatsby-source-google-spreadsheet",
      options: {
        spreadsheetId: process.env.SPREADSHEET_ID,
        spreadsheetName: "SiteContent",
        typePrefix: "GoogleSheet",
        credentials: readServiceAccountCredentials()
      }
    },
    "gatsby-plugin-netlify"
  ]
};
