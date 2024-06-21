module.exports = function (eleventyConfig) {
  eleventyConfig.addCollection("tours", function (collectionApi) {
    return collectionApi.getFilteredByGlob("src/tours/*.md");
  });

  eleventyConfig.addCollection("blogs", function (collectionApi) {
    return collectionApi.getFilteredByGlob("src/blogs/*.md");
  });

  return {
    dir: {
      input: "src",
      includes: "_includes",
      data: "_data",
      output: "_site",
    },
  };
};
