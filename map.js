'use strict'        // let the browser know we're serious

// debug statement letting us know the file is loaded
console.log('Loaded map.js')

// your mapbox token
mapboxgl.accessToken = 'pk.eyJ1IjoiaW1hbmRlbCIsImEiOiJjankxdjU4ODMwYTViM21teGFpenpsbmd1In0.IN9K9rp8-I5pTbYTmwRJ4Q'

let map = new mapboxgl.Map({
    container: 'map',
 style: 'mapbox://styles/imandel/ck9srz4am04wk1intd7cpwp9x/draft',
    center: [-73.9611769410821, 40.754369605088925],
    zoom: 15.5,
    pitch: 60,
    bearing: 0
})

