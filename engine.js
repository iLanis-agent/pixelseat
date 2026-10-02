(function (root) {
  'use strict';
  var CM_PER_IN = 2.54;
  // 20/20 vision resolves about 1 arcminute, so 60 pixels per degree (PPD) is the "retina" threshold (calculatormatters.com/conversion/pixel-density-converter)
  var RETINA_PPD = 60;
  function ppi(w, h, diag) { return Math.sqrt(w * w + h * h) / diag; }
  // Pixels per degree at the screen centre for a viewing distance d (same length unit as 1/ppi): one degree spans 2 d tan(0.5 deg) of screen
  function ppd(ppiVal, d) { return ppiVal * 2 * d * Math.tan(0.5 * Math.PI / 180); }
  // Distance at which pixels reach the 60 PPD limit
  function retinaDistance(ppiVal) { return RETINA_PPD / (ppiVal * 2 * Math.tan(0.5 * Math.PI / 180)); }
  function size(w, h, diag) { var d = Math.sqrt(w * w + h * h); return { width: diag * w / d, height: diag * h / d }; }
  function verdict(p) { return p >= RETINA_PPD ? 'Pixels invisible' : p >= 40 ? 'Sharp, pixels barely visible' : p >= 30 ? 'Pixels visible on close look' : 'Pixels clearly visible'; }
  function megapixels(w, h) { return w * h / 1e6; }
  var api = { ppi: ppi, ppd: ppd, retinaDistance: retinaDistance, size: size, verdict: verdict, megapixels: megapixels, RETINA_PPD: RETINA_PPD, CM_PER_IN: CM_PER_IN };
  if (typeof module !== 'undefined' && module.exports) module.exports = api; else root.Pixel = api;
})(typeof window !== 'undefined' ? window : this);
