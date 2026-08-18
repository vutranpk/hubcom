const fs = require('fs');

const files = [
  'src/app/service/infrastructure/page.tsx',
  'src/app/service/software/page.tsx',
  'src/app/service/ai-customer-service/page.tsx'
];

files.forEach(f => {
  let content = fs.readFileSync(f, 'utf8');
  content = '/* eslint-disable react/no-unescaped-entities, @next/next/no-img-element */\n' + content;
  fs.writeFileSync(f, content);
});
