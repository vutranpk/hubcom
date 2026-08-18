const fs = require('fs');

const files = [
  'src/app/service/infrastructure/page.tsx',
  'src/app/service/software/page.tsx',
  'src/app/service/ai-customer-service/page.tsx'
];

files.forEach(f => {
  let content = fs.readFileSync(f, 'utf8');
  content = content.replace(/<!--([\s\S]*?)-->/g, ''); // just remove HTML comments completely
  // also fix some HTML properties like 'class=' that might have been missed
  content = content.replace(/ class=/g, ' className=');
  // and fix `srcSet=` to `srcSet=` (usually already correct, but just in case it's missed)
  content = content.replace(/srcset=/gi, 'srcSet=');
  fs.writeFileSync(f, content);
});
