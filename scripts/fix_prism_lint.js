const fs = require('fs');
let content = fs.readFileSync('src/components/sections/process-prism.tsx', 'utf8');

content = content.replace(/\/\/ PHASE 01/g, '{"// PHASE 01"}');
content = content.replace(/\/\/ PHASE 02/g, '{"// PHASE 02"}');
content = content.replace(/\/\/ PHASE 03/g, '{"// PHASE 03"}');
content = content.replace(/\/\/ PHASE 04/g, '{"// PHASE 04"}');
content = content.replace(/so it's not just beautiful/g, 'so it&apos;s not just beautiful');

fs.writeFileSync('src/components/sections/process-prism.tsx', content);
