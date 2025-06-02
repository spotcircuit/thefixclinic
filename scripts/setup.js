/**
 * Complete setup script for The Fix Clinic Next.js site
 * Runs all fix scripts in sequence
 */

const { execSync } = require('child_process');
const path = require('path');

console.log('Starting The Fix Clinic setup...');

// Scripts to run in order
const scripts = [
  'fix-fonts.js',
  'copy-key-images.js',
  'fix-missing-images.js'
];

// Run each script in sequence
scripts.forEach(script => {
  const scriptPath = path.join(__dirname, script);
  console.log(`\nRunning ${script}...`);
  
  try {
    // Load and run the script directly
    require(scriptPath);
    console.log(`✓ ${script} completed successfully`);
  } catch (error) {
    console.error(`× Error running ${script}:`, error.message);
  }
});

console.log('\nSetup completed!');
console.log('Run "npm run dev" to start the development server');