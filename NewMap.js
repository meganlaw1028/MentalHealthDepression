import { slect, json } from 'd3';


json('https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json')
    .the(data => { console.log(data) });