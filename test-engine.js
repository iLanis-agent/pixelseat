var E = require('./engine.js'), n = 0, bad = 0;
function near(a, b, tol, m) { n++; if (!(Math.abs(a - b) <= tol)) { bad++; console.log('FAIL', m, a, b); } }
function is(a, b, m) { n++; if (a !== b) { bad++; console.log('FAIL', m, a, b); } }
// unittables.com PPI table: 27" 4K = 163, 27" QHD = 109, 24" FHD = 92, 32" 4K = 138, 55" 4K = 80, iPhone 15 Pro Max (6.7", 2796x1290) = 460, Galaxy S24 Ultra (6.8", 3120x1440) = 505, MacBook Pro 14" (3024x1964) = 254
near(E.ppi(3840, 2160, 27), 163, 0.5, '27 4K'); near(E.ppi(2560, 1440, 27), 109, 0.5, '27 QHD'); near(E.ppi(1920, 1080, 24), 92, 0.5, '24 FHD');
near(E.ppi(3840, 2160, 32), 138, 0.5, '32 4K'); near(E.ppi(3840, 2160, 55), 80, 0.5, '55 4K');
near(E.ppi(2796, 1290, 6.7), 460, 1, 'iPhone'); near(E.ppi(3120, 1440, 6.8), 505, 1, 'Galaxy'); near(E.ppi(3024, 1964, 14.2), 254, 1, 'MBP 14');
// calculatormatters.com: 163.18 ppi at 24 in = 68.36 pixels per degree; 92 ppi at 24 in = about 38 PPD; 461 ppi at 12 in = about 97 PPD
near(E.ppd(163.18, 24), 68.36, 0.05, '68.36 ppd'); near(E.ppd(92, 24), 38.5, 0.5, '92 at 24'); near(E.ppd(461, 12), 96.5, 0.6, 'phone 12');
// retina distance: PPD there is exactly 60; roughly 3438 / ppi inches
near(E.ppd(163, E.retinaDistance(163)), 60, 1e-9, 'retina ppd'); near(E.retinaDistance(326), 10.55, 0.05, '326 ppi'); near(E.retinaDistance(163), 21.1, 0.1, '163 ppi'); near(E.retinaDistance(92), 37.4, 0.1, '92 ppi');
// the distance scales inversely with pixel density and PPD scales linearly with distance
near(E.retinaDistance(200) * 2, E.retinaDistance(100), 1e-9, 'inverse'); near(E.ppd(100, 20) * 2, E.ppd(100, 40), 1e-9, 'linear');
// physical size of a 27in 16:9 panel: 23.53 x 13.24 in
var s = E.size(3840, 2160, 27); near(s.width, 23.53, 0.01, 'width'); near(s.height, 13.24, 0.01, 'height'); near(Math.sqrt(s.width * s.width + s.height * s.height), 27, 1e-9, 'diag');
// verdict boundaries
is(E.verdict(60), 'Pixels invisible', '60'); is(E.verdict(59.9), 'Sharp, pixels barely visible', '59.9'); is(E.verdict(40), 'Sharp, pixels barely visible', '40'); is(E.verdict(39.9), 'Pixels visible on close look', '39.9'); is(E.verdict(30), 'Pixels visible on close look', '30'); is(E.verdict(29.9), 'Pixels clearly visible', '29.9');
near(E.megapixels(3840, 2160), 8.2944, 1e-9, 'MP');
console.log((n - bad) + '/' + n + ' passed'); process.exit(bad ? 1 : 0);
