import path from 'path';

export default {
  webpack: {
    alias: {
      '@components': path.resolve(__dirname, 'src/components'),
      '@themes': path.resolve(__dirname, 'src/themes'),
      '@constants': path.resolve(__dirname, 'src/constants'),
      '@services': path.resolve(__dirname, 'src/services'),
      '@ui': path.resolve(__dirname, 'src/components/common/ui'),
      '@pages': path.resolve(__dirname, 'src/pages'),
      '@hooks': path.resolve(__dirname, 'src/hooks'),
      '@api': path.resolve(__dirname, 'src/api'),
      '@utils': path.resolve(__dirname, 'src/utils'),
      "@icons": path.resolve(__dirname, "src/components/Icons"),
    },
  },
};
