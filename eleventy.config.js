import { EleventyRenderPlugin } from "@11ty/eleventy";

export default function (eleventyConfig) {
  // Static files (images, fonts, scripts, icons) are copied to the site's root as they are.
  eleventyConfig.addPassthroughCopy({ public: "/" });

  // Lets the home page pull in the essay, which is written in Markdown.
  eleventyConfig.addPlugin(EleventyRenderPlugin);

  // Tailwind writes the stylesheet straight into the output folder; reload the browser when it does.
  eleventyConfig.setServerOptions({ watch: ["_site/css/**/*.css"] });

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
