/**
 * Script to fix missing images by creating placeholder images
 */

const fs = require('fs');
const path = require('path');

// Create directories if they don't exist
const miscDir = path.join(__dirname, '../public/images/misc');
const imagesDir = path.join(__dirname, '../public/images');

if (!fs.existsSync(miscDir)) {
  fs.mkdirSync(miscDir, { recursive: true });
  console.log('Created misc directory:', miscDir);
}

// List of missing images that need to be fixed
const missingImages = [
  { path: path.join(imagesDir, 'image3.webp') },
  { path: path.join(miscDir, 'tour-1-231x300.jpg') },
  { path: path.join(miscDir, 'tour-2-231x300.jpg') },
  { path: path.join(miscDir, 'tour-5-231x300.jpg') }
];

// Check if images already exist in misc and copy them if not
const sourceDir = path.join(__dirname, '../../simply-static/wp-content/uploads/2024/08');

// Try to find and copy any tour images first
try {
  const tourImages = fs.readdirSync(sourceDir)
    .filter(file => file.includes('tour') && (file.endsWith('.jpg') || file.endsWith('.png') || file.endsWith('.webp')));
  
  console.log('Found tour images:', tourImages);
  
  tourImages.forEach(image => {
    const sourcePath = path.join(sourceDir, image);
    const destPath = path.join(miscDir, image);
    
    // Copy file if it exists
    try {
      fs.copyFileSync(sourcePath, destPath);
      console.log(`Copied: ${sourcePath} → ${destPath}`);
    } catch (err) {
      console.error(`Error copying ${sourcePath}:`, err.message);
    }
  });
} catch (err) {
  console.error('Error searching for tour images:', err.message);
}

// Create blank placeholders for any remaining missing images
missingImages.forEach(image => {
  if (!fs.existsSync(image.path)) {
    // Create a tiny 1x1 pixel transparent PNG as a placeholder
    // This is just a base64 encoded 1x1 transparent PNG
    const transparentPixel = Buffer.from('iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII=', 'base64');
    
    try {
      fs.writeFileSync(image.path, transparentPixel);
      console.log(`Created placeholder image: ${image.path}`);
    } catch (err) {
      console.error(`Error creating placeholder for ${image.path}:`, err.message);
    }
  } else {
    console.log(`Image already exists: ${image.path}`);
  }
});

// Create image3.webp specifically since it's showing up in multiple places
const image3Path = path.join(imagesDir, 'image3.webp');
if (!fs.existsSync(image3Path)) {
  // Find another image to use as a replacement
  const imagesToTry = [
    path.join(sourceDir, 'image3.webp'),
    path.join(sourceDir, 'Caitlin1.webp'),
    path.join(sourceDir, 'Rachel.webp'),
    path.join(sourceDir, 'Hayley.webp')
  ];
  
  let copied = false;
  for (const srcPath of imagesToTry) {
    try {
      if (fs.existsSync(srcPath)) {
        fs.copyFileSync(srcPath, image3Path);
        console.log(`Copied replacement for image3.webp: ${srcPath} → ${image3Path}`);
        copied = true;
        break;
      }
    } catch (err) {
      console.error(`Error copying ${srcPath}:`, err.message);
    }
  }
  
  if (!copied) {
    console.log('Could not find a suitable replacement for image3.webp, creating blank placeholder');
    const transparentPixel = Buffer.from('iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII=', 'base64');
    fs.writeFileSync(image3Path, transparentPixel);
  }
}

console.log('Image fix completed!');