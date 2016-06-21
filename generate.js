#!/usr/bin/env node

// Simple script to generate javascript from JSON in the locale

'use strict'

if (process.argv.length < 3) {
    console.log('Usage: ' + __filename + ' locale JSON files');
    process.exit(-1);
}

const loc = process.argv[2];
const fs = require('fs');
const path = require('path');

let locales = fs.readdirSync(loc).filter((f) => path.extname(f).toLowerCase() === '.json');
let jsLocales = locales.map((f) => path.basename(f, path.extname(f)).replace('-', '_'));

let jsLoc = loc;
let pos = loc.indexOf('node_modules');
if (pos > -1) {
    jsLoc = jsLoc.substring(pos + 'node_modules'.length + 1);
}

let imports = locales.map((f, i) => 'import * as ' + jsLocales[i] + ' from \'' + jsLoc + '/' + f + '\'');
console.log(imports.join('\n'));

let jsLookup = jsLocales.map((s) => '\t' + s + ': ' + s).join(',\n');

let lookup = '\nexport const lookup = {\n' + jsLookup + '\n}\n';
console.log(lookup);