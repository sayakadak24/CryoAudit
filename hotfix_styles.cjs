const fs = require('fs');
const path = require('path');

const viewsDir = path.join(__dirname, 'src', 'views');
const files = fs.readdirSync(viewsDir).filter(f => f.endsWith('.tsx'));

files.forEach(f => {
    const fp = path.join(viewsDir, f);
    let content = fs.readFileSync(fp, 'utf8');

    // Pattern 1: style={{'fontVariationSettings':''FILL' 1'}}
    content = content.replace(/style={{'fontVariationSettings':''FILL' ([01])'}}/g, "style={{fontVariationSettings: \"'FILL' $1\"}}");
    content = content.replace(/style={{'fontVariationSettings':''wght' ([0-9]+)'}}/g, "style={{fontVariationSettings: \"'wght' $1\"}}");
    
    // Pattern 2: style={{fontVariationSettings: ''FILL' 1'}} - correctly matching what we see in Pricing
    content = content.replace(/style={{fontVariationSettings: ''FILL' ([01])'}}/g, "style={{fontVariationSettings: \"'FILL' $1\"}}");
    content = content.replace(/style={{fontVariationSettings: ''wght' ([0-9]+)'}}/g, "style={{fontVariationSettings: \"'wght' $1\"}}");

    // Pattern 3: The double single quote issue from my previous bad fix attempt
    content = content.replace(/style={{'fontVariationSettings':''''}}/g, "style={{fontVariationSettings: \"'FILL' 1\"}}");

    fs.writeFileSync(fp, content);
});
console.log('Fixed syntax errors in views (Attempt 2).');
