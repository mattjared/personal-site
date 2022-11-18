// import { inject } from '@vercel/analytics';
const { inject } = require('@vercel/analytics');

module.exports = function (eleventyConfig) {
  eleventyConfig.addPlugin(inject);
  eleventyConfig.addPassthroughCopy('src/styles.css');
  eleventyConfig.addPassthroughCopy('src/script.js');
  // eleventyConfig.addPassthroughCopy({"node_modules/@vercel/analytics": "analytics"});
  return {
    passthroughFileCopy: true,
    dir: {
      input: 'src',
      includes: '_includes',
      data: '_data',
      // output: 'docs'
    }
  }
};