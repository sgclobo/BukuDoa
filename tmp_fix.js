const fs = require('fs');

const tsxPath = 'app/(tabs)/devosoens.tsx';
let content = fs.readFileSync(tsxPath, 'utf8');

// The file got duplicated imports inside oTercoData. 
// We will replace the mess from line 13 to line 26 effectively fixing the array.
content = content.replace(/,\s*\{\s*import React,.*?\nconst oTercoData = \[\s*\{\s*"id": "terco",\s*"number": 36,\s*"title": "O Terço",[\s\S]*?"Mistérios Gloriosos.*?\"/m, '');

// Also, the render block for novenaSantaRitaData is missing the rest of the file layout. Let's fix it by rewriting it completely safely.
// Actually, it's safer to just fetch an older working working file if available, or I can just fix it!

fs.writeFileSync(tsxPath, content, 'utf8');
