/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack(config) {
    // Find the rule that handles SVG imports
    const fileLoaderRule = config.module.rules.find(
      (rule) => rule.test && typeof rule.test === 'object' && rule.test instanceof RegExp && rule.test.test('.svg')
    );

    // Modify the rule to ignore SVG files
    if (fileLoaderRule) {
      fileLoaderRule.exclude = /\.svg$/;
    }

    // Add the new rule to use @svgr/webpack for SVG imports
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    });

    return config;
  },
};

export default nextConfig;
