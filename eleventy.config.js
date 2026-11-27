export default function (eleventyConfig) {
  // Static files (images, fonts, scripts, icons) are copied to the site's root as they are.
  eleventyConfig.addPassthroughCopy({ public: "/" });

  // Tailwind writes the stylesheet straight into the output folder; reload the browser when it does.
  eleventyConfig.setServerOptions({ watch: ["_site/css/**/*.css"] });

  // The app's name set like its logo: bold, condensed capitals.
  eleventyConfig.addShortcode(
    "wordmark",
    () => `<strong class="font-display font-bold uppercase [font-stretch:75%]">Manual Play</strong>`
  );

  // The current year, for the footer.
  eleventyConfig.addShortcode("year", () => String(new Date().getFullYear()));
}

export const config = {
  dir: {
    input: "src",
    output: "_site",
  },
  // Plain HTML pages, Nunjucks layouts, and Markdown all run through Nunjucks.
  templateFormats: ["njk", "md", "html"],
  htmlTemplateEngine: "njk",
  markdownTemplateEngine: "njk",
};
