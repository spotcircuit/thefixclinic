/**
 * Script to copy key images from WP export to public directory
 */

const fs = require('fs');
const path = require('path');

// Create image directories
const publicDir = path.join(__dirname, '../public');
const imagesDir = path.join(publicDir, 'images');
const miscDir = path.join(imagesDir, 'misc');

// Create directories if they don't exist
[imagesDir, miscDir].forEach(dir => {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
    console.log(`Created directory: ${dir}`);
  }
});

// Source paths for images from WordPress export
const sourceDir = path.join(__dirname, '../../simply-static/wp-content/uploads/2024/08');

// List of needed images
const neededImages = [
  'Caitlin1.webp',
  'Rachel.webp',
  'Hayley.webp',
  'natasha.webp',
  'lip-after-3.webp',
  'lip-after-4.webp',
  'lip-after-7.webp',
  'lip-after-9.webp',
  'lip-after-10.webp',
  'natasha-Signature-Logo-1.webp'
];

// Check if source directory exists
if (!fs.existsSync(sourceDir)) {
  console.error(`Source directory not found: ${sourceDir}`);
  process.exit(1);
}

// Copy needed images
for (const image of neededImages) {
  const sourcePath = path.join(sourceDir, image);
  const destPath = path.join(miscDir, image);
  
  try {
    if (fs.existsSync(sourcePath)) {
      fs.copyFileSync(sourcePath, destPath);
      console.log(`Copied: ${sourcePath} → ${destPath}`);
    } else {
      console.error(`Source image not found: ${sourcePath}`);
      
      // Create a blank placeholder
      const transparentPixel = Buffer.from('iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII=', 'base64');
      fs.writeFileSync(destPath, transparentPixel);
      console.log(`Created placeholder for: ${destPath}`);
    }
  } catch (err) {
    console.error(`Error copying ${image}:`, err.message);
  }
}

// Also create the image3.webp file in the root images directory
const image3Path = path.join(imagesDir, 'image3.webp');
try {
  // Try to copy an existing webp file as image3.webp
  const sourcePath = path.join(sourceDir, 'Rachel.webp');
  if (fs.existsSync(sourcePath)) {
    fs.copyFileSync(sourcePath, image3Path);
    console.log(`Copied as image3.webp: ${sourcePath} → ${image3Path}`);
  } else {
    // Create a placeholder
    const transparentPixel = Buffer.from('iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII=', 'base64');
    fs.writeFileSync(image3Path, transparentPixel);
    console.log(`Created placeholder for: ${image3Path}`);
  }
} catch (err) {
  console.error(`Error creating image3.webp:`, err.message);
}

console.log('Key images copy completed!');