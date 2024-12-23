const siteMetadata = require("./src/utils/siteMetaData");

module.exports = {
    siteUrl: siteMetadata.siteUrl, 
    generateRobotsTxt: true, // (Optional) Generates a robots.txt file
    sitemapSize: 7000, // Number of URLs per sitemap file
  }