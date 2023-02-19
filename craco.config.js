const path = require('path');

module.exports = {
  webpack: {
    alias: {
      '@main': path.resolve(__dirname, './src/components/main'), // จะเป็นการไปที่ไฟล์ index.js ของ folder main ที่ export * ของ atom ออกมา
      '@utils': path.resolve(__dirname, './src/utils') // จะเป็นการไปที่ไฟล์ index.js ของ folder main ที่ export * ของ atom ออกมา
    }
  }
};
