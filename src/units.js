import { default as languages, fill as fillFallbacks } from './languages.js'
import { lookup } from './generated-lookup-format.js'

const lookupMapping = fillFallbacks(lookup);

export default function units(iso) {
    let lang = languages(iso);

    for (let i = 0; i < lang.length; ++i) {
        let key = lang[i];
        let fmt = lookupMapping[key];
        if (fmt) return { d3: fmt, iso639: key.replace('_', '-') };    
    }
    
    return { d3: lookup.en_US, iso639: 'en-US'};
}