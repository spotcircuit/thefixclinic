/**
 * Script to copy a specific image from WordPress to Next.js public folder
 */

const fs = require('fs');
const path = require('path');

// Configuration
const sourceDir = '../simply-static/wp-content/uploads';
const destDir = './public/images';

// Create destination directory if it doesn't exist
if (!fs.existsSync(destDir)) {
  fs.mkdirSync(destDir, { recursive: true });
  console.log(`Created directory: ${destDir}`);
}

// Specific image to find
const imageToFind = 'tour-2-1-2';

// Recursive function to scan directories
function scanDirForImage(dir) {
  try {
    const items = fs.readdirSync(dir);
    
    for (const item of items) {
      const sourcePath = path.join(dir, item);
      const stats = fs.statSync(sourcePath);
      
      if (stats.isDirectory()) {
        scanDirForImage(sourcePath);
      } else if (item.includes(imageToFind)) {
        // Copy the file to the destination
        const destPath = path.join(destDir, item);
        fs.copyFileSync(sourcePath, destPath);
        console.log(`Copied: ${sourcePath} → ${destPath}`);
      }
    }
  } catch (error) {
    console.error(`Error scanning directory ${dir}:`, error);
  }
}

// Find and copy the specific image
console.log(`Looking for images containing "${imageToFind}"...`);
scanDirForImage(sourceDir);
console.log('Search complete!');