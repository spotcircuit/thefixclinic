/**
 * Script to create font directories and placeholder font files
 */

const fs = require('fs');
const path = require('path');

// Create fonts directory if it doesn't exist
const fontsDir = path.join(__dirname, '../public/fonts');
if (!fs.existsSync(fontsDir)) {
  fs.mkdirSync(fontsDir, { recursive: true });
  console.log('Created fonts directory:', fontsDir);
}

// Create placeholder font files
const fontFiles = [
  'montserrat-var.woff2',
  'cormorant-garamond-var.woff2'
];

// Empty font file content - just a small placeholder
const emptyFont = Buffer.from('d09GMgABAAAAAAMQAA0AAAAAHQAAALAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABmAAABNgIkA1UEHAAKAB4AATYCJAMcBCAFg3oHIBtcBsiuMTaG9nQRyYQmJ9u6F0hj6r9E8P1+O/fNfN+qSiSNEKvp0kkmFEKniobQKJRYt/+czu4+eRKb+l9LchLtgSMJmVH3z1ZpMoFN0etcohB2wDP4E/gEJuAfkMDmQCOMAMSz9lpgoImvBsQ2XAuNYK/A8u6+ARG+RYRmGipCE8FwB39cF+EJ4RG+QeCJH0Bk4A/gNgC+OD8+IoLgkZJZICy79Sh10atvCG+lRNg2IRz+G34AN3bgAbEG1IGOmTiJnoyeVEbxT0YOEGeBUDQGECKQBwCEIRgAGlAsQCi0F3hlwn80kE8B6U8/gZa16kAmQvlMEjYVRKHNoKHQVhCH9hHa1wTCMSw9kP2XvP/If//yP7lCL1fIxL/Gv/FXA2L91Xr/1XwVEP7VOP/Vf9UQ20faDFr+X63JQPhXs//V+tfBqf5qAK4AuD1QD2j5/1pVqFSr1f9/KQBx5zPgl7CeIXOKQIRQCG2AIKEtgLShA4B0oaMgLoXOUOgqQjcovCF0hyIYQg8IQyH0gjAcQm8II1LoA2E0hL5Ae0MYC6Ef0LEQ+gOdAGEA0EkQBgKdAmEQ0GkQBgOdAWEI0FkQhgKdA2EY0HkQhgNdAGEE0EUQRgJdAmEU0GUQRgNdAWEM0FUQxgJdA2Ec0HUQxgNsVwSOkIpPDRzJoipgcZwsyhplWRLlyJoWJ2vKakySpTiOiGM4IrKGbf7/DQBtewB6AA==', 'base64');

fontFiles.forEach(fontFile => {
  const filePath = path.join(fontsDir, fontFile);
  if (!fs.existsSync(filePath)) {
    fs.writeFileSync(filePath, emptyFont);
    console.log(`Created placeholder font file: ${filePath}`);
  } else {
    console.log(`Font file already exists: ${filePath}`);
  }
});

console.log('Font fix completed!');