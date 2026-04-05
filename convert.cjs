const fs = require('fs');
const path = require('path');

const filesToConvert = {
    'Home.html': 'HomeView',
    'Problem.html': 'ProblemView',
    'Approach.html': 'ApproachView',
    'CaseStudies.html': 'CaseStudiesView',
    'Platform.html': 'PlatformView',
    'Pricing.html': 'PricingView'
};

function htmlToJsx(html) {
    let jsx = html;
    
    // Replace class= with className=
    jsx = jsx.replace(/class=/g, 'className=');
    jsx = jsx.replace(/for=/g, 'htmlFor=');
    
    // SVG attributes
    jsx = jsx.replace(/stroke-width=/g, 'strokeWidth=');
    jsx = jsx.replace(/stroke-linecap=/g, 'strokeLinecap=');
    jsx = jsx.replace(/stroke-linejoin=/g, 'strokeLinejoin=');
    jsx = jsx.replace(/fill-rule=/g, 'fillRule=');
    jsx = jsx.replace(/clip-rule=/g, 'clipRule=');
    jsx = jsx.replace(/viewbox=/gi, 'viewBox=');
    
    // Self-closing tags
    jsx = jsx.replace(/<img(.*?)>/g, (match, p1) => p1.endsWith('/') ? match : `<img${p1} />`);
    jsx = jsx.replace(/<input(.*?)>/g, (match, p1) => p1.endsWith('/') ? match : `<input${p1} />`);
    jsx = jsx.replace(/<br>/g, '<br />');
    jsx = jsx.replace(/<hr>/g, '<hr />');

    // Inline styles - BETTER FIX
    jsx = jsx.replace(/style="([^"]*)"/g, (match, p1) => {
        const rules = p1.split(';').filter(x => x.trim().length > 0);
        const obj = {};
        rules.forEach(rule => {
            const [key, val] = rule.split(':');
            if (key && val) {
                const camelKey = key.trim().replace(/-([a-z])/g, g => g[1].toUpperCase());
                obj[camelKey] = val.trim();
            }
        });
        return `style={${JSON.stringify(obj).replace(/"/g, "'")}}`;
    });

    // Remove comments
    jsx = jsx.replace(/<!--[\s\S]*?-->/g, '');

    return jsx;
}

for (const [htmlFile, viewName] of Object.entries(filesToConvert)) {
    const htmlPath = path.join(__dirname, 'downloaded_screens', htmlFile);
    if (!fs.existsSync(htmlPath)) continue;

    let content = fs.readFileSync(htmlPath, 'utf8');
    const mainMatch = content.match(/<main[^>]*>([\s\S]*?)<\/main>/i);
    let mainContent = '';
    
    if (mainMatch) {
         const mainTagStart = content.match(/<main[^>]*>/i)[0];
         mainContent = mainTagStart + mainMatch[1] + '</main>';
    } else {
         const bodyMatch = content.match(/<body[^>]*>([\s\S]*?)<\/body>/i);
         if(bodyMatch){
             let b = bodyMatch[1].replace(/<nav[^>]*>[\s\S]*?<\/nav>/i, '').replace(/<footer[^>]*>[\s\S]*?<\/footer>/i, '');
             mainContent = `<main className="pt-32 pb-24">${b}</main>`;
         }
    }

    let jsxContent = htmlToJsx(mainContent);
    jsxContent = jsxContent.replace(/(<button[^>]*>)([^<]*(?:Get Started|Schedule|Contact|Request)[^<]*)(<\/button>)/gi, (match, start, text, end) => {
        return start.includes('onClick') ? match : `${start.slice(0, -1)} onClick={onCtaClick}>${text}${end}`;
    });

    const tsxCode = `import React from 'react';\n\ninterface ${viewName}Props {\n  onCtaClick?: () => void;\n}\n\nconst ${viewName}: React.FC<${viewName}Props> = ({ onCtaClick }) => {\n  return (\n    ${jsxContent}\n  );\n};\n\nexport default ${viewName};\n`;
    
    fs.writeFileSync(path.join(__dirname, 'src', 'views', `${viewName}.tsx`), tsxCode);
}
