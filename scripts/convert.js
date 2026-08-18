const fs = require('fs');
const path = require('path');

const files = [
  {
    src: '/Users/macmini/.gemini/antigravity/brain/15e33edb-c989-4789-9bc9-b6e7978b8b7c/.system_generated/steps/3165/content.md',
    dest: 'src/app/service/infrastructure/page.tsx'
  },
  {
    src: '/Users/macmini/.gemini/antigravity/brain/15e33edb-c989-4789-9bc9-b6e7978b8b7c/.system_generated/steps/3166/content.md',
    dest: 'src/app/service/software/page.tsx'
  },
  {
    src: '/Users/macmini/.gemini/antigravity/brain/15e33edb-c989-4789-9bc9-b6e7978b8b7c/.system_generated/steps/3167/content.md',
    dest: 'src/app/service/ai-customer-service/page.tsx'
  }
];

function extractAndConvert(html) {
  const match = html.match(/<main[^>]*>([\s\S]*?)<\/main>/i);
  if (!match) return null;
  let mainContent = match[0];

  // Fix attributes for React
  mainContent = mainContent.replace(/class=/g, 'className=');
  mainContent = mainContent.replace(/stroke-width=/g, 'strokeWidth=');
  mainContent = mainContent.replace(/stroke-linecap=/g, 'strokeLinecap=');
  mainContent = mainContent.replace(/stroke-linejoin=/g, 'strokeLinejoin=');
  mainContent = mainContent.replace(/fill-rule=/g, 'fillRule=');
  mainContent = mainContent.replace(/clip-rule=/g, 'clipRule=');
  mainContent = mainContent.replace(/charSet=/g, 'charSet=');
  
  // Custom simple style conversion
  mainContent = mainContent.replace(/style="([^"]*)"/g, (m, p1) => {
    const rules = p1.split(';').filter(Boolean);
    const obj = {};
    rules.forEach(rule => {
      let [key, val] = rule.split(':');
      if(key && val) {
        key = key.trim().replace(/-([a-z])/g, (g) => g[1].toUpperCase());
        obj[key] = val.trim();
      }
    });
    return `style={${JSON.stringify(obj)}}`;
  });

  // Self closing tags
  mainContent = mainContent.replace(/<img([^>]*[^\/])>/g, '<img$1 />');
  mainContent = mainContent.replace(/<br>/g, '<br />');
  mainContent = mainContent.replace(/<hr>/g, '<hr />');
  mainContent = mainContent.replace(/<input([^>]*[^\/])>/g, '<input$1 />');
  
  // React issues
  mainContent = mainContent.replace(/&#x27;/g, "'");
  mainContent = mainContent.replace(/&amp;/g, "&");
  mainContent = mainContent.replace(/ data-nimg="[^"]*"/g, '');
  mainContent = mainContent.replace(/ fetchPriority="[^"]*"/g, '');

  return mainContent;
}

files.forEach(f => {
  const html = fs.readFileSync(f.src, 'utf8');
  const mainReact = extractAndConvert(html);
  
  if (mainReact) {
    const componentCode = `import React from 'react';\n\nexport default function Page() {\n  return (\n    ${mainReact}\n  );\n}\n`;
    
    const dir = path.dirname(f.dest);
    if (!fs.existsSync(dir)){
      fs.mkdirSync(dir, { recursive: true });
    }
    
    fs.writeFileSync(f.dest, componentCode);
    console.log('Created ' + f.dest);
  } else {
    console.log('Could not extract main for ' + f.dest);
  }
});
