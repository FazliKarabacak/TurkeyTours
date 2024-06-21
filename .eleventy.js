module.exports = function (eleventyConfig) {
  eleventyConfig.addCollection("tours", function (collectionApi) {
    return collectionApi.getFilteredByGlob("src/tours/*.md");
  });

  eleventyConfig.addCollection("blogs", function (collectionApi) {
    return collectionApi.getFilteredByGlob("src/blogs/*.md");
  });

  eleventyConfig.addShortcode("baseurl", function () {
    return "/TurkeyTours";
  });

  return {
    pathPrefix: "/TurkeyTours/",
    dir: {
      input: "src",
      includes: "_includes",
      data: "_data",
      output: "docs",
    },
  };
};
