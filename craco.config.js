const path = require('path');
module.exports = {
  webpack: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
      '@': path.resolve(__dirname, 'src'),
      '@': path.resolve(__dirname, 'src'),
      '@': path.resolve(__dirname, 'src'),
      '@': path.resolve(__dirname, 'src'),
      "../components/*": path.resolve(__dirname, 'src/components'),
      "@common/*": path.resolve(__dirname, 'src/components/common'),
      "../styles/*": path.resolve(__dirname, 'src/styles'),
      "../services/*": path.resolve(__dirname, 'src/services'),
      "@hooks/*": path.resolve(__dirname, 'src/hooks'),
      "@utils/*": path.resolve(__dirname, 'src/utils'),
      "@types/*": path.resolve(__dirname, 'src/types'),
      "@pages/*": path.resolve(__dirname, 'src/pages'),
    },
  },
};
