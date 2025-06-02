/**
 * Script to copy images from WordPress export to the Next.js public folder
 * 
 * Usage:
 * 1. Make sure Node.js is installed
 * 2. Run: node scripts/copy-images.js
 */

const fs = require('fs');
const path = require('path');

// Configuration
const config = {
  // Source WordPress uploads directory
  sourceDir: '../simply-static/wp-content/uploads',
  
  // Destination directories in public/images
  destDir: './public/images',
  
  // Image mapping for specific service images
  // Format: 'source-filename-part': { dest: 'destination-folder', rename: 'new-name' }
  imageMapping: {
    // Service images
    'botox-servic': { dest: 'services', rename: 'botox.jpg' },
    'fillers-servic': { dest: 'services', rename: 'filler.jpg' },
    'laser-service': { dest: 'services', rename: 'laser.jpg' },
    'prf-servic': { dest: 'services', rename: 'prp.jpg' },
    'weight-loss-works': { dest: 'services', rename: 'weight-loss.jpg' },
    'iv-therapy': { dest: 'services', rename: 'iv-therapy.jpg' },
    'vitamin-injections': { dest: 'services', rename: 'vitamin-injections.jpg' },
    'morpheus8': { dest: 'services', rename: 'morpheus8.jpg' },
    'kybella': { dest: 'services', rename: 'kybella.jpg' },
    'sculptra': { dest: 'services', rename: 'sculptra.jpg' },
    'microblading': { dest: 'services', rename: 'microblading.jpg' },
    'permanent-makeup': { dest: 'services', rename: 'permanent-makeup.jpg' },
    'lip-blushing': { dest: 'services', rename: 'lip-blushing.jpg' },
    'facials': { dest: 'services', rename: 'facials.jpg' },
    
    // Hero images
    'banner-weight-loss': { dest: 'services', rename: 'wellness-hero.jpg' },
    'beautiful-female-face': { dest: 'services', rename: 'skin-hero.jpg' },
    'close-up-woman-getting-lip-fillers': { dest: 'services', rename: 'filler-hero.jpg' },
    'Upper-Face-Treatment': { dest: 'services', rename: 'botox-hero.jpg' },
    'woman-receiving-facial-mask': { dest: 'services', rename: 'facial-balancing-hero.jpg' },
    
    // Team images
    'Caitlin': { dest: 'team', rename: 'caitlin.webp' },
    'Rachel': { dest: 'team', rename: 'rachel.webp' },
    'Hayley': { dest: 'team', rename: 'hayley.webp' },
    'natasha': { dest: 'team', rename: 'natasha.webp' },
    'Fix-Clinic-Group-Photo': { dest: 'team', rename: 'team.png' },
    
    // Logo
    'Main-Logo': { dest: 'logo', rename: 'main-logo.png' },
    'newfavicon': { dest: 'logo', rename: 'favicon.png' },
    
    // Before & After images
    'Before-After': { dest: 'gallery', rename: '' }, // Will keep original filenames
    'lip-before': { dest: 'gallery', rename: '' },
    'lip-after': { dest: 'gallery', rename: '' },
    
    // Awards
    'AAABestOfAshburnLogo': { dest: 'awards', rename: 'best-of-ashburn.png' },
    'BOA-WHITE-BLACK-GREEN': { dest: 'awards', rename: 'boa-award.png' },
    'BOAM-2023-LogoORANGE': { dest: 'awards', rename: 'boam-award.png' },
    'merz-vip-logo': { dest: 'awards', rename: 'merz-vip.png' },
    'executive': { dest: 'awards', rename: 'executive-award.png' },
    
    // Additional images
    'weight-loss-women': { dest: 'services', rename: 'weight-loss-women.webp' },
    'welcome-sec-img': { dest: 'services', rename: 'welcome-section.png' },
    'young-woman-getting-beauty-treatment-her-eyebrows': { dest: 'services', rename: 'eyebrow-treatment.webp' },
  }
};

// Create destination directories if they don't exist
function createDestDirs() {
  if (!fs.existsSync(config.destDir)) {
    fs.mkdirSync(config.destDir, { recursive: true });
  }
  
  // Create subdirectories
  const subdirs = [
    'services', 
    'team', 
    'logo', 
    'gallery', 
    'awards',
    'testimonials',
    'services/botox',
    'services/filler',
    'services/sculptra',
    'services/kybella',
    'services/morpheus8',
    'services/prp-prf',
    'services/facials',
    'services/laser',
    'services/permanent-makeup',
    'services/microblading',
    'services/lip-blushing',
    'services/weight-loss',
    'services/iv-therapy',
    'services/vitamin-injections'
  ];
  
  subdirs.forEach(dir => {
    const fullPath = path.join(config.destDir, dir);
    if (!fs.existsSync(fullPath)) {
      fs.mkdirSync(fullPath, { recursive: true });
    }
  });
}

// Find and copy images based on mapping
function copyImages() {
  if (!fs.existsSync(config.sourceDir)) {
    console.error(`Source directory not found: ${config.sourceDir}`);
    return;
  }
  
  // Create a misc directory for unmatched images
  const miscDir = path.join(config.destDir, 'misc');
  if (!fs.existsSync(miscDir)) {
    fs.mkdirSync(miscDir, { recursive: true });
  }
  
  // Recursive function to scan directories
  function scanDir(dir) {
    const items = fs.readdirSync(dir);
    
    items.forEach(item => {
      const sourcePath = path.join(dir, item);
      const stats = fs.statSync(sourcePath);
      
      if (stats.isDirectory()) {
        scanDir(sourcePath);
      } else {
        // Check if this file matches any of our mapping rules
        let matched = false;
        
        for (const [pattern, options] of Object.entries(config.imageMapping)) {
          if (item.includes(pattern)) {
            matched = true;
            
            // Determine destination filename
            let destFilename = item;
            if (options.rename) {
              destFilename = options.rename;
            }
            
            const destPath = path.join(config.destDir, options.dest, destFilename);
            
            // Copy the file
            fs.copyFileSync(sourcePath, destPath);
            console.log(`Copied (mapped): ${sourcePath} → ${destPath}`);
            break;
          }
        }
        
        // For unmatched images, copy them to the misc directory
        if (!matched && (item.endsWith('.jpg') || item.endsWith('.png') || item.endsWith('.webp'))) {
          // Only copy the original (not the resized) versions of thumbnails
          if (!item.match(/-\d+x\d+\.(jpg|png|webp)$/)) {
            const destPath = path.join(miscDir, item);
            fs.copyFileSync(sourcePath, destPath);
            console.log(`Copied (unmatched): ${sourcePath} → ${destPath}`);
          } else {
            console.log(`Skipped thumbnail: ${sourcePath}`);
          }
        }
      }
    });
  }
  
  scanDir(config.sourceDir);
}

// Main execution
try {
  console.log('Creating destination directories...');
  createDestDirs();
  
  console.log('Copying images...');
  copyImages();
  
  console.log('Image copy complete!');
} catch (error) {
  console.error('Error:', error);
}