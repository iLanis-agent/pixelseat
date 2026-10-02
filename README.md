# PixelSeat

How far should you sit from a screen? Pick a monitor, TV or phone (or enter resolution and diagonal) and a viewing distance. Get pixel density, pixels per degree, a plain verdict, and the distance at which pixels vanish.

Method: ppi = sqrt(w^2 + h^2) / diagonal; pixels per degree = ppi x 2 d tan(0.5 deg); 20/20 vision resolves about 1 arcminute, so 60 pixels per degree is the "retina" threshold (https://calculatormatters.com/conversion/pixel-density-converter). Preset PPI values follow https://www.unittables.com/tv-video/ppi-calculator.
Tests: 27 checks. 27 in 4K = 163 ppi, 27 in QHD = 109, 24 in 1080p = 92, 32 in 4K = 138, 55 in 4K = 80, iPhone 15 Pro Max = 460, Galaxy S24 Ultra = 505, MacBook Pro 14 = 254; 163.18 ppi at 24 in = 68.36 pixels per degree; 461 ppi at 12 in = about 97; retina distance for 326 ppi = 10.5 in; panel size, scaling and verdict boundaries.
Deviations: screen centre, flat panel, ideal contrast; the 60 ppd limit is a rule of thumb (some people resolve finer detail). The verdict bands at 30 and 40 ppd are my own plain-language choice.

Static client-side. `node test-engine.js` runs the tests.
