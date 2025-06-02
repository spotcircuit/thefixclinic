/**
 * Script to create font directory and copy font files from WordPress
 */

const fs = require('fs');
const path = require('path');

// Create fonts directory if it doesn't exist
const fontsDir = path.join(__dirname, '../public/fonts');
if (!fs.existsSync(fontsDir)) {
  fs.mkdirSync(fontsDir, { recursive: true });
  console.log('Created fonts directory:', fontsDir);
}

// Source path for font files
const sourceDir = path.join(__dirname, '../../simply-static/wp-content/uploads/2024/07');

// Font files to copy
const fontFiles = [
  'ApfelGrotezk-Regular.woff',
  'Jen-Wagner-Co.-Versailles-Regular.ttf'
];

// Create placeholder font files
const placeholderFonts = [
  'montserrat-var.woff2',
  'cormorant-garamond-var.woff2'
];

// Copy font files if they exist
fontFiles.forEach(fontFile => {
  const sourcePath = path.join(sourceDir, fontFile);
  const destPath = path.join(fontsDir, fontFile);
  
  if (fs.existsSync(sourcePath)) {
    fs.copyFileSync(sourcePath, destPath);
    console.log(`Copied font: ${sourcePath} → ${destPath}`);
  } else {
    console.log(`Font file not found: ${sourcePath}`);
  }
});

// Create placeholder files for fonts that we'll load from Google Fonts
placeholderFonts.forEach(fontFile => {
  const destPath = path.join(fontsDir, fontFile);
  
  // Create empty file
  fs.writeFileSync(destPath, '/* Placeholder file - font loaded from Google Fonts */');
  console.log(`Created placeholder font: ${destPath}`);
});

console.log('Font setup complete!');