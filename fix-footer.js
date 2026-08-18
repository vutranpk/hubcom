const fs = require('fs');
const path = require('path');

function walk(dir) {
    let results = [];
    const list = fs.readdirSync(dir);
    list.forEach(file => {
        file = path.join(dir, file);
        const stat = fs.statSync(file);
        if (stat && stat.isDirectory()) {
            results = results.concat(walk(file));
        } else {
            if (file.endsWith('.tsx')) {
                results.push(file);
            }
        }
    });
    return results;
}

const files = walk('./src/app');
files.forEach(file => {
    let content = fs.readFileSync(file, 'utf8');
    const regex = /\{\/\*\s*Sticky Reveal Footer Wrapper\s*\*\/\}\s*<div[^>]*>\s*<div[^>]*>\s*<Footer \/>\s*<\/div>\s*<\/div>/g;
    if (regex.test(content)) {
        content = content.replace(regex, '<Footer />');
        fs.writeFileSync(file, content);
        console.log('Fixed:', file);
    }
});

// Also fix the Footer component itself to remove h-full min-h-screen
const footerPath = './src/components/sections/footer.tsx';
let footerContent = fs.readFileSync(footerPath, 'utf8');
footerContent = footerContent.replace('h-full min-h-screen', '');
fs.writeFileSync(footerPath, footerContent);
console.log('Fixed Footer CSS');
