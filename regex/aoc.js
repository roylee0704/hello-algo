import fs from 'fs';

const re = new RegExp(/(\d+) (.+?) bags?[,.]/g);
const s = fs.readFileSync('aoc.in', 'utf-8').trim();
// safe
let m;
do {
    m = re.exec(s);
    if (m) {
        console.log(m);// m is same as matchAll output
    }
} while (m);


// es-9
console.log([...s.matchAll(re)]);