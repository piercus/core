(sand.define("core/deepSmoothExtend", ['core/isArray'], function(r) {
  
  var f = function(o, p) {
    for (var i in p) if (p.hasOwnProperty(i)) {
      if (typeof(o[i]) === 'object' && !r.isArray(o[i])) {
        f(o[i], p[i]);
      }
      else {
        o[i] = p[i];
      }
    }
    return o;
  }
  return f;
  
}));