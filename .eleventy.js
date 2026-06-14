module.exports = function (eleventyConfig) {
  // Pass-through assets so Eleventy copies them to _site
  eleventyConfig.addPassthroughCopy("assets");

  // Watch CSS and JS for changes during dev
  eleventyConfig.addWatchTarget("assets/css/");
  eleventyConfig.addWatchTarget("assets/js/");

  // Shortcode: current year (useful in footer)
  eleventyConfig.addShortcode("year", () => `${new Date().getFullYear()}`);

  // Filter: ISO date for sitemap lastmod
  eleventyConfig.addFilter("dateToRfc3339", (date) => {
    return new Date(date).toISOString();
  });

  return {
    dir: {
      input: "src",
      output: "_site",
      includes: "_includes",
      data: "_data",
    },
    templateFormats: ["njk", "html", "md"],
    htmlTemplateEngine: "njk",
    markdownTemplateEngine: "njk",
  };
};
