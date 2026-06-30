const fs = require('fs');
const path = require('path');
const root = path.join('c:', 'Users', 'HP', 'Desktop', 'practic', 'projects', 'book store', 'frontend');
const filePath = path.join(root, 'src', 'website', 'pages', 'MultipalOption.jsx');
let text = fs.readFileSync(filePath, 'utf8');
const patterns = [
  /className="flex flex-wrap items-center gap-5"/g,
  /className="border border-zinc-300 h-14 px-5 flex items-center gap-3 min-w-\[270px\]"/g,
  /className="flex flex-1 min-w-\[350px\]"/g,
  /className="w-96 h-5 bg-zinc-200 blur-xl rounded-full mx-auto mt-10"/g,
];
const counts = patterns.map((pattern) => ((text.match(pattern) || []).length));
console.log('counts before patch:', counts);
text = text.replace(patterns[0], 'className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between"');
text = text.replace(patterns[1], 'className="border border-zinc-300 h-14 px-5 flex items-center gap-3 w-full max-w-xs"');
text = text.replace(patterns[2], 'className="flex flex-1 min-w-0 w-full"');
text = text.replace(patterns[3], 'className="w-full max-w-xs h-5 bg-zinc-200 blur-xl rounded-full mx-auto mt-10"');
const countsAfter = patterns.map((pattern) => ((text.match(pattern) || []).length));
console.log('counts after patch:', countsAfter);
fs.writeFileSync(filePath, text, 'utf8');
console.log('patched', filePath);
