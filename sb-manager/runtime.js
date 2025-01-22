var Ld = Object.create;
var rn = Object.defineProperty;
var Nd = Object.getOwnPropertyDescriptor;
var Fd = Object.getOwnPropertyNames;
var Bd = Object.getPrototypeOf, Hd = Object.prototype.hasOwnProperty;
var a = (e, t) => rn(e, "name", { value: t, configurable: !0 }), ro = /* @__PURE__ */ ((e) => typeof require < "u" ? require : typeof Proxy <
"u" ? new Proxy(e, {
  get: (t, o) => (typeof require < "u" ? require : t)[o]
}) : e)(function(e) {
  if (typeof require < "u") return require.apply(this, arguments);
  throw Error('Dynamic require of "' + e + '" is not supported');
});
var Se = (e, t) => () => (t || e((t = { exports: {} }).exports, t), t.exports);
var zd = (e, t, o, i) => {
  if (t && typeof t == "object" || typeof t == "function")
    for (let n of Fd(t))
      !Hd.call(e, n) && n !== o && rn(e, n, { get: () => t[n], enumerable: !(i = Nd(t, n)) || i.enumerable });
  return e;
};
var Be = (e, t, o) => (o = e != null ? Ld(Bd(e)) : {}, zd(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  t || !e || !e.__esModule ? rn(o, "default", { value: e, enumerable: !0 }) : o,
  e
));

// ../node_modules/prop-types/lib/ReactPropTypesSecret.js
var ba = Se((dC, ya) => {
  "use strict";
  var Wd = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
  ya.exports = Wd;
});

// ../node_modules/prop-types/factoryWithThrowingShims.js
var Sa = Se((fC, Ia) => {
  "use strict";
  var jd = ba();
  function va() {
  }
  a(va, "emptyFunction");
  function xa() {
  }
  a(xa, "emptyFunctionWithReset");
  xa.resetWarningCache = va;
  Ia.exports = function() {
    function e(i, n, r, l, u, c) {
      if (c !== jd) {
        var p = new Error(
          "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. \
Read more at http://fb.me/use-check-prop-types"
        );
        throw p.name = "Invariant Violation", p;
      }
    }
    a(e, "shim"), e.isRequired = e;
    function t() {
      return e;
    }
    a(t, "getShim");
    var o = {
      array: e,
      bigint: e,
      bool: e,
      func: e,
      number: e,
      object: e,
      string: e,
      symbol: e,
      any: e,
      arrayOf: t,
      element: e,
      elementType: e,
      instanceOf: t,
      node: e,
      objectOf: t,
      oneOf: t,
      oneOfType: t,
      shape: t,
      exact: t,
      checkPropTypes: xa,
      resetWarningCache: va
    };
    return o.PropTypes = o, o;
  };
});

// ../node_modules/prop-types/index.js
var mn = Se((yC, wa) => {
  wa.exports = Sa()();
  var hC, gC;
});

// ../node_modules/react-fast-compare/index.js
var Ca = Se((bC, Ea) => {
  var Vd = typeof Element < "u", $d = typeof Map == "function", Kd = typeof Set == "function", Ud = typeof ArrayBuffer == "function" && !!ArrayBuffer.
  isView;
  function Vo(e, t) {
    if (e === t) return !0;
    if (e && t && typeof e == "object" && typeof t == "object") {
      if (e.constructor !== t.constructor) return !1;
      var o, i, n;
      if (Array.isArray(e)) {
        if (o = e.length, o != t.length) return !1;
        for (i = o; i-- !== 0; )
          if (!Vo(e[i], t[i])) return !1;
        return !0;
      }
      var r;
      if ($d && e instanceof Map && t instanceof Map) {
        if (e.size !== t.size) return !1;
        for (r = e.entries(); !(i = r.next()).done; )
          if (!t.has(i.value[0])) return !1;
        for (r = e.entries(); !(i = r.next()).done; )
          if (!Vo(i.value[1], t.get(i.value[0]))) return !1;
        return !0;
      }
      if (Kd && e instanceof Set && t instanceof Set) {
        if (e.size !== t.size) return !1;
        for (r = e.entries(); !(i = r.next()).done; )
          if (!t.has(i.value[0])) return !1;
        return !0;
      }
      if (Ud && ArrayBuffer.isView(e) && ArrayBuffer.isView(t)) {
        if (o = e.length, o != t.length) return !1;
        for (i = o; i-- !== 0; )
          if (e[i] !== t[i]) return !1;
        return !0;
      }
      if (e.constructor === RegExp) return e.source === t.source && e.flags === t.flags;
      if (e.valueOf !== Object.prototype.valueOf && typeof e.valueOf == "function" && typeof t.valueOf == "function") return e.valueOf() ===
      t.valueOf();
      if (e.toString !== Object.prototype.toString && typeof e.toString == "function" && typeof t.toString == "function") return e.toString() ===
      t.toString();
      if (n = Object.keys(e), o = n.length, o !== Object.keys(t).length) return !1;
      for (i = o; i-- !== 0; )
        if (!Object.prototype.hasOwnProperty.call(t, n[i])) return !1;
      if (Vd && e instanceof Element) return !1;
      for (i = o; i-- !== 0; )
        if (!((n[i] === "_owner" || n[i] === "__v" || n[i] === "__o") && e.$$typeof) && !Vo(e[n[i]], t[n[i]]))
          return !1;
      return !0;
    }
    return e !== e && t !== t;
  }
  a(Vo, "equal");
  Ea.exports = /* @__PURE__ */ a(function(t, o) {
    try {
      return Vo(t, o);
    } catch (i) {
      if ((i.message || "").match(/stack|recursion/i))
        return console.warn("react-fast-compare cannot handle circular refs"), !1;
      throw i;
    }
  }, "isEqual");
});

// ../node_modules/invariant/browser.js
var _a = Se((xC, Ta) => {
  "use strict";
  var qd = /* @__PURE__ */ a(function(e, t, o, i, n, r, l, u) {
    if (!e) {
      var c;
      if (t === void 0)
        c = new Error(
          "Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings."
        );
      else {
        var p = [o, i, n, r, l, u], d = 0;
        c = new Error(
          t.replace(/%s/g, function() {
            return p[d++];
          })
        ), c.name = "Invariant Violation";
      }
      throw c.framesToPop = 1, c;
    }
  }, "invariant");
  Ta.exports = qd;
});

// ../node_modules/shallowequal/index.js
var Oa = Se((SC, ka) => {
  ka.exports = /* @__PURE__ */ a(function(t, o, i, n) {
    var r = i ? i.call(n, t, o) : void 0;
    if (r !== void 0)
      return !!r;
    if (t === o)
      return !0;
    if (typeof t != "object" || !t || typeof o != "object" || !o)
      return !1;
    var l = Object.keys(t), u = Object.keys(o);
    if (l.length !== u.length)
      return !1;
    for (var c = Object.prototype.hasOwnProperty.bind(o), p = 0; p < l.length; p++) {
      var d = l[p];
      if (!c(d))
        return !1;
      var g = t[d], h = o[d];
      if (r = i ? i.call(n, g, h, d) : void 0, r === !1 || r === void 0 && g !== h)
        return !1;
    }
    return !0;
  }, "shallowEqual");
});

// ../node_modules/memoizerific/memoizerific.js
var cr = Se((Il, zn) => {
  (function(e) {
    if (typeof Il == "object" && typeof zn < "u")
      zn.exports = e();
    else if (typeof define == "function" && define.amd)
      define([], e);
    else {
      var t;
      typeof window < "u" ? t = window : typeof global < "u" ? t = global : typeof self < "u" ? t = self : t = this, t.memoizerific = e();
    }
  })(function() {
    var e, t, o;
    return (/* @__PURE__ */ a(function i(n, r, l) {
      function u(d, g) {
        if (!r[d]) {
          if (!n[d]) {
            var h = typeof ro == "function" && ro;
            if (!g && h) return h(d, !0);
            if (c) return c(d, !0);
            var y = new Error("Cannot find module '" + d + "'");
            throw y.code = "MODULE_NOT_FOUND", y;
          }
          var f = r[d] = { exports: {} };
          n[d][0].call(f.exports, function(b) {
            var S = n[d][1][b];
            return u(S || b);
          }, f, f.exports, i, n, r, l);
        }
        return r[d].exports;
      }
      a(u, "s");
      for (var c = typeof ro == "function" && ro, p = 0; p < l.length; p++) u(l[p]);
      return u;
    }, "e"))({ 1: [function(i, n, r) {
      n.exports = function(l) {
        if (typeof Map != "function" || l) {
          var u = i("./similar");
          return new u();
        } else
          return /* @__PURE__ */ new Map();
      };
    }, { "./similar": 2 }], 2: [function(i, n, r) {
      function l() {
        return this.list = [], this.lastItem = void 0, this.size = 0, this;
      }
      a(l, "Similar"), l.prototype.get = function(u) {
        var c;
        if (this.lastItem && this.isEqual(this.lastItem.key, u))
          return this.lastItem.val;
        if (c = this.indexOf(u), c >= 0)
          return this.lastItem = this.list[c], this.list[c].val;
      }, l.prototype.set = function(u, c) {
        var p;
        return this.lastItem && this.isEqual(this.lastItem.key, u) ? (this.lastItem.val = c, this) : (p = this.indexOf(u), p >= 0 ? (this.lastItem =
        this.list[p], this.list[p].val = c, this) : (this.lastItem = { key: u, val: c }, this.list.push(this.lastItem), this.size++, this));
      }, l.prototype.delete = function(u) {
        var c;
        if (this.lastItem && this.isEqual(this.lastItem.key, u) && (this.lastItem = void 0), c = this.indexOf(u), c >= 0)
          return this.size--, this.list.splice(c, 1)[0];
      }, l.prototype.has = function(u) {
        var c;
        return this.lastItem && this.isEqual(this.lastItem.key, u) ? !0 : (c = this.indexOf(u), c >= 0 ? (this.lastItem = this.list[c], !0) :
        !1);
      }, l.prototype.forEach = function(u, c) {
        var p;
        for (p = 0; p < this.size; p++)
          u.call(c || this, this.list[p].val, this.list[p].key, this);
      }, l.prototype.indexOf = function(u) {
        var c;
        for (c = 0; c < this.size; c++)
          if (this.isEqual(this.list[c].key, u))
            return c;
        return -1;
      }, l.prototype.isEqual = function(u, c) {
        return u === c || u !== u && c !== c;
      }, n.exports = l;
    }, {}], 3: [function(i, n, r) {
      var l = i("map-or-similar");
      n.exports = function(d) {
        var g = new l(!1), h = [];
        return function(y) {
          var f = /* @__PURE__ */ a(function() {
            var b = g, S, E, m = arguments.length - 1, v = Array(m + 1), I = !0, w;
            if ((f.numArgs || f.numArgs === 0) && f.numArgs !== m + 1)
              throw new Error("Memoizerific functions should always be called with the same number of arguments");
            for (w = 0; w < m; w++) {
              if (v[w] = {
                cacheItem: b,
                arg: arguments[w]
              }, b.has(arguments[w])) {
                b = b.get(arguments[w]);
                continue;
              }
              I = !1, S = new l(!1), b.set(arguments[w], S), b = S;
            }
            return I && (b.has(arguments[m]) ? E = b.get(arguments[m]) : I = !1), I || (E = y.apply(null, arguments), b.set(arguments[m], E)),
            d > 0 && (v[m] = {
              cacheItem: b,
              arg: arguments[m]
            }, I ? u(h, v) : h.push(v), h.length > d && c(h.shift())), f.wasMemoized = I, f.numArgs = m + 1, E;
          }, "memoizerific");
          return f.limit = d, f.wasMemoized = !1, f.cache = g, f.lru = h, f;
        };
      };
      function u(d, g) {
        var h = d.length, y = g.length, f, b, S;
        for (b = 0; b < h; b++) {
          for (f = !0, S = 0; S < y; S++)
            if (!p(d[b][S].arg, g[S].arg)) {
              f = !1;
              break;
            }
          if (f)
            break;
        }
        d.push(d.splice(b, 1)[0]);
      }
      a(u, "moveToMostRecentLru");
      function c(d) {
        var g = d.length, h = d[g - 1], y, f;
        for (h.cacheItem.delete(h.arg), f = g - 2; f >= 0 && (h = d[f], y = h.cacheItem.get(h.arg), !y || !y.size); f--)
          h.cacheItem.delete(h.arg);
      }
      a(c, "removeCachedResult");
      function p(d, g) {
        return d === g || d !== d && g !== g;
      }
      a(p, "isEqual");
    }, { "map-or-similar": 1 }] }, {}, [3])(3);
  });
});

// ../node_modules/picoquery/lib/string-util.js
var Kn = Se(($n) => {
  "use strict";
  Object.defineProperty($n, "__esModule", { value: !0 });
  $n.encodeString = Sm;
  var ot = Array.from({ length: 256 }, (e, t) => "%" + ((t < 16 ? "0" : "") + t.toString(16)).toUpperCase()), Im = new Int8Array([
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    1,
    0,
    0,
    0,
    0,
    0,
    1,
    1,
    1,
    1,
    0,
    0,
    1,
    1,
    0,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    0,
    0,
    0,
    0,
    1,
    0,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    0,
    0,
    0,
    1,
    0
  ]);
  function Sm(e) {
    let t = e.length;
    if (t === 0)
      return "";
    let o = "", i = 0, n = 0;
    e: for (; n < t; n++) {
      let r = e.charCodeAt(n);
      for (; r < 128; ) {
        if (Im[r] !== 1 && (i < n && (o += e.slice(i, n)), i = n + 1, o += ot[r]), ++n === t)
          break e;
        r = e.charCodeAt(n);
      }
      if (i < n && (o += e.slice(i, n)), r < 2048) {
        i = n + 1, o += ot[192 | r >> 6] + ot[128 | r & 63];
        continue;
      }
      if (r < 55296 || r >= 57344) {
        i = n + 1, o += ot[224 | r >> 12] + ot[128 | r >> 6 & 63] + ot[128 | r & 63];
        continue;
      }
      if (++n, n >= t)
        throw new Error("URI malformed");
      let l = e.charCodeAt(n) & 1023;
      i = n + 1, r = 65536 + ((r & 1023) << 10 | l), o += ot[240 | r >> 18] + ot[128 | r >> 12 & 63] + ot[128 | r >> 6 & 63] + ot[128 | r & 63];
    }
    return i === 0 ? e : i < t ? o + e.slice(i) : o;
  }
  a(Sm, "encodeString");
});

// ../node_modules/picoquery/lib/shared.js
var pr = Se((rt) => {
  "use strict";
  Object.defineProperty(rt, "__esModule", { value: !0 });
  rt.defaultOptions = rt.defaultShouldSerializeObject = rt.defaultValueSerializer = void 0;
  var Un = Kn(), wm = /* @__PURE__ */ a((e) => {
    switch (typeof e) {
      case "string":
        return (0, Un.encodeString)(e);
      case "bigint":
      case "boolean":
        return "" + e;
      case "number":
        if (Number.isFinite(e))
          return e < 1e21 ? "" + e : (0, Un.encodeString)("" + e);
        break;
    }
    return e instanceof Date ? (0, Un.encodeString)(e.toISOString()) : "";
  }, "defaultValueSerializer");
  rt.defaultValueSerializer = wm;
  var Em = /* @__PURE__ */ a((e) => e instanceof Date, "defaultShouldSerializeObject");
  rt.defaultShouldSerializeObject = Em;
  var El = /* @__PURE__ */ a((e) => e, "identityFunc");
  rt.defaultOptions = {
    nesting: !0,
    nestingSyntax: "dot",
    arrayRepeat: !1,
    arrayRepeatSyntax: "repeat",
    delimiter: 38,
    valueDeserializer: El,
    valueSerializer: rt.defaultValueSerializer,
    keyDeserializer: El,
    shouldSerializeObject: rt.defaultShouldSerializeObject
  };
});

// ../node_modules/picoquery/lib/object-util.js
var qn = Se((dr) => {
  "use strict";
  Object.defineProperty(dr, "__esModule", { value: !0 });
  dr.getDeepObject = _m;
  dr.stringifyObject = Cl;
  var Ot = pr(), Cm = Kn();
  function Tm(e) {
    return e === "__proto__" || e === "constructor" || e === "prototype";
  }
  a(Tm, "isPrototypeKey");
  function _m(e, t, o, i, n) {
    if (Tm(t))
      return e;
    let r = e[t];
    return typeof r == "object" && r !== null ? r : !i && (n || typeof o == "number" || typeof o == "string" && o * 0 === 0 && o.indexOf(".") ===
    -1) ? e[t] = [] : e[t] = {};
  }
  a(_m, "getDeepObject");
  var km = 20, Om = "[]", Pm = "[", Am = "]", Dm = ".";
  function Cl(e, t, o = 0, i, n) {
    let { nestingSyntax: r = Ot.defaultOptions.nestingSyntax, arrayRepeat: l = Ot.defaultOptions.arrayRepeat, arrayRepeatSyntax: u = Ot.defaultOptions.
    arrayRepeatSyntax, nesting: c = Ot.defaultOptions.nesting, delimiter: p = Ot.defaultOptions.delimiter, valueSerializer: d = Ot.defaultOptions.
    valueSerializer, shouldSerializeObject: g = Ot.defaultOptions.shouldSerializeObject } = t, h = typeof p == "number" ? String.fromCharCode(
    p) : p, y = n === !0 && l, f = r === "dot" || r === "js" && !n;
    if (o > km)
      return "";
    let b = "", S = !0, E = !1;
    for (let m in e) {
      let v = e[m], I;
      i ? (I = i, y ? u === "bracket" && (I += Om) : f ? (I += Dm, I += m) : (I += Pm, I += m, I += Am)) : I = m, S || (b += h), typeof v ==
      "object" && v !== null && !g(v) ? (E = v.pop !== void 0, (c || l && E) && (b += Cl(v, t, o + 1, I, E))) : (b += (0, Cm.encodeString)(I),
      b += "=", b += d(v, m)), S && (S = !1);
    }
    return b;
  }
  a(Cl, "stringifyObject");
});

// ../node_modules/fast-decode-uri-component/index.js
var Ol = Se((Ak, kl) => {
  "use strict";
  var Tl = 12, Mm = 0, Gn = [
    // The first part of the table maps bytes to character to a transition.
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    2,
    2,
    2,
    2,
    2,
    2,
    2,
    2,
    2,
    2,
    2,
    2,
    2,
    2,
    2,
    2,
    3,
    3,
    3,
    3,
    3,
    3,
    3,
    3,
    3,
    3,
    3,
    3,
    3,
    3,
    3,
    3,
    3,
    3,
    3,
    3,
    3,
    3,
    3,
    3,
    3,
    3,
    3,
    3,
    3,
    3,
    3,
    3,
    4,
    4,
    5,
    5,
    5,
    5,
    5,
    5,
    5,
    5,
    5,
    5,
    5,
    5,
    5,
    5,
    5,
    5,
    5,
    5,
    5,
    5,
    5,
    5,
    5,
    5,
    5,
    5,
    5,
    5,
    5,
    5,
    6,
    7,
    7,
    7,
    7,
    7,
    7,
    7,
    7,
    7,
    7,
    7,
    7,
    8,
    7,
    7,
    10,
    9,
    9,
    9,
    11,
    4,
    4,
    4,
    4,
    4,
    4,
    4,
    4,
    4,
    4,
    4,
    // The second part of the table maps a state to a new state when adding a
    // transition.
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    12,
    0,
    0,
    0,
    0,
    24,
    36,
    48,
    60,
    72,
    84,
    96,
    0,
    12,
    12,
    12,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    24,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    24,
    24,
    24,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    24,
    24,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    48,
    48,
    48,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    48,
    48,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    48,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    // The third part maps the current transition to a mask that needs to apply
    // to the byte.
    127,
    63,
    63,
    63,
    0,
    31,
    15,
    15,
    15,
    7,
    7,
    7
  ];
  function Lm(e) {
    var t = e.indexOf("%");
    if (t === -1) return e;
    for (var o = e.length, i = "", n = 0, r = 0, l = t, u = Tl; t > -1 && t < o; ) {
      var c = _l(e[t + 1], 4), p = _l(e[t + 2], 0), d = c | p, g = Gn[d];
      if (u = Gn[256 + u + g], r = r << 6 | d & Gn[364 + g], u === Tl)
        i += e.slice(n, l), i += r <= 65535 ? String.fromCharCode(r) : String.fromCharCode(
          55232 + (r >> 10),
          56320 + (r & 1023)
        ), r = 0, n = t + 3, t = l = e.indexOf("%", n);
      else {
        if (u === Mm)
          return null;
        if (t += 3, t < o && e.charCodeAt(t) === 37) continue;
        return null;
      }
    }
    return i + e.slice(n);
  }
  a(Lm, "decodeURIComponent");
  var Nm = {
    0: 0,
    1: 1,
    2: 2,
    3: 3,
    4: 4,
    5: 5,
    6: 6,
    7: 7,
    8: 8,
    9: 9,
    a: 10,
    A: 10,
    b: 11,
    B: 11,
    c: 12,
    C: 12,
    d: 13,
    D: 13,
    e: 14,
    E: 14,
    f: 15,
    F: 15
  };
  function _l(e, t) {
    var o = Nm[e];
    return o === void 0 ? 255 : o << t;
  }
  a(_l, "hexCodeToInt");
  kl.exports = Lm;
});

// ../node_modules/picoquery/lib/parse.js
var Ml = Se((ut) => {
  "use strict";
  var Fm = ut && ut.__importDefault || function(e) {
    return e && e.__esModule ? e : { default: e };
  };
  Object.defineProperty(ut, "__esModule", { value: !0 });
  ut.numberValueDeserializer = ut.numberKeyDeserializer = void 0;
  ut.parse = zm;
  var fr = qn(), Pt = pr(), Pl = Fm(Ol()), Bm = /* @__PURE__ */ a((e) => {
    let t = Number(e);
    return Number.isNaN(t) ? e : t;
  }, "numberKeyDeserializer");
  ut.numberKeyDeserializer = Bm;
  var Hm = /* @__PURE__ */ a((e) => {
    let t = Number(e);
    return Number.isNaN(t) ? e : t;
  }, "numberValueDeserializer");
  ut.numberValueDeserializer = Hm;
  var Al = /\+/g, Dl = /* @__PURE__ */ a(function() {
  }, "Empty");
  Dl.prototype = /* @__PURE__ */ Object.create(null);
  function mr(e, t, o, i, n) {
    let r = e.substring(t, o);
    return i && (r = r.replace(Al, " ")), n && (r = (0, Pl.default)(r) || r), r;
  }
  a(mr, "computeKeySlice");
  function zm(e, t) {
    let { valueDeserializer: o = Pt.defaultOptions.valueDeserializer, keyDeserializer: i = Pt.defaultOptions.keyDeserializer, arrayRepeatSyntax: n = Pt.
    defaultOptions.arrayRepeatSyntax, nesting: r = Pt.defaultOptions.nesting, arrayRepeat: l = Pt.defaultOptions.arrayRepeat, nestingSyntax: u = Pt.
    defaultOptions.nestingSyntax, delimiter: c = Pt.defaultOptions.delimiter } = t ?? {}, p = typeof c == "string" ? c.charCodeAt(0) : c, d = u ===
    "js", g = new Dl();
    if (typeof e != "string")
      return g;
    let h = e.length, y = "", f = -1, b = -1, S = -1, E = g, m, v = "", I = "", w = !1, k = !1, T = !1, _ = !1, C = !1, O = !1, P = !1, D = 0,
    M = -1, N = -1, Y = -1;
    for (let j = 0; j < h + 1; j++) {
      if (D = j !== h ? e.charCodeAt(j) : p, D === p) {
        if (P = b > f, P || (b = j), S !== b - 1 && (I = mr(e, S + 1, M > -1 ? M : b, T, w), v = i(I), m !== void 0 && (E = (0, fr.getDeepObject)(
        E, m, v, d && C, d && O))), P || v !== "") {
          P && (y = e.slice(b + 1, j), _ && (y = y.replace(Al, " ")), k && (y = (0, Pl.default)(y) || y));
          let Q = o(y, v);
          if (l) {
            let H = E[v];
            H === void 0 ? M > -1 ? E[v] = [Q] : E[v] = Q : H.pop ? H.push(Q) : E[v] = [H, Q];
          } else
            E[v] = Q;
        }
        y = "", f = j, b = j, w = !1, k = !1, T = !1, _ = !1, C = !1, O = !1, M = -1, S = j, E = g, m = void 0, v = "";
      } else D === 93 ? (l && n === "bracket" && Y === 91 && (M = N), r && (u === "index" || d) && b <= f && (S !== N && (I = mr(e, S + 1, j,
      T, w), v = i(I), m !== void 0 && (E = (0, fr.getDeepObject)(E, m, v, void 0, d)), m = v, T = !1, w = !1), S = j, O = !0, C = !1)) : D ===
      46 ? r && (u === "dot" || d) && b <= f && (S !== N && (I = mr(e, S + 1, j, T, w), v = i(I), m !== void 0 && (E = (0, fr.getDeepObject)(
      E, m, v, d)), m = v, T = !1, w = !1), C = !0, O = !1, S = j) : D === 91 ? r && (u === "index" || d) && b <= f && (S !== N && (I = mr(e,
      S + 1, j, T, w), v = i(I), d && m !== void 0 && (E = (0, fr.getDeepObject)(E, m, v, d)), m = v, T = !1, w = !1, C = !1, O = !0), S = j) :
      D === 61 ? b <= f ? b = j : k = !0 : D === 43 ? b > f ? _ = !0 : T = !0 : D === 37 && (b > f ? k = !0 : w = !0);
      N = j, Y = D;
    }
    return g;
  }
  a(zm, "parse");
});

// ../node_modules/picoquery/lib/stringify.js
var Ll = Se((Yn) => {
  "use strict";
  Object.defineProperty(Yn, "__esModule", { value: !0 });
  Yn.stringify = Wm;
  var Rm = qn();
  function Wm(e, t) {
    if (e === null || typeof e != "object")
      return "";
    let o = t ?? {};
    return (0, Rm.stringifyObject)(e, o);
  }
  a(Wm, "stringify");
});

// ../node_modules/picoquery/lib/main.js
var Nl = Se((Xe) => {
  "use strict";
  var jm = Xe && Xe.__createBinding || (Object.create ? function(e, t, o, i) {
    i === void 0 && (i = o);
    var n = Object.getOwnPropertyDescriptor(t, o);
    (!n || ("get" in n ? !t.__esModule : n.writable || n.configurable)) && (n = { enumerable: !0, get: /* @__PURE__ */ a(function() {
      return t[o];
    }, "get") }), Object.defineProperty(e, i, n);
  } : function(e, t, o, i) {
    i === void 0 && (i = o), e[i] = t[o];
  }), Vm = Xe && Xe.__exportStar || function(e, t) {
    for (var o in e) o !== "default" && !Object.prototype.hasOwnProperty.call(t, o) && jm(t, e, o);
  };
  Object.defineProperty(Xe, "__esModule", { value: !0 });
  Xe.stringify = Xe.parse = void 0;
  var $m = Ml();
  Object.defineProperty(Xe, "parse", { enumerable: !0, get: /* @__PURE__ */ a(function() {
    return $m.parse;
  }, "get") });
  var Km = Ll();
  Object.defineProperty(Xe, "stringify", { enumerable: !0, get: /* @__PURE__ */ a(function() {
    return Km.stringify;
  }, "get") });
  Vm(pr(), Xe);
});

// ../node_modules/toggle-selection/index.js
var Wl = Se((tO, Rl) => {
  Rl.exports = function() {
    var e = document.getSelection();
    if (!e.rangeCount)
      return function() {
      };
    for (var t = document.activeElement, o = [], i = 0; i < e.rangeCount; i++)
      o.push(e.getRangeAt(i));
    switch (t.tagName.toUpperCase()) {
      // .toUpperCase handles XHTML
      case "INPUT":
      case "TEXTAREA":
        t.blur();
        break;
      default:
        t = null;
        break;
    }
    return e.removeAllRanges(), function() {
      e.type === "Caret" && e.removeAllRanges(), e.rangeCount || o.forEach(function(n) {
        e.addRange(n);
      }), t && t.focus();
    };
  };
});

// ../node_modules/copy-to-clipboard/index.js
var $l = Se((oO, Vl) => {
  "use strict";
  var Xm = Wl(), jl = {
    "text/plain": "Text",
    "text/html": "Url",
    default: "Text"
  }, Zm = "Copy to clipboard: #{key}, Enter";
  function Jm(e) {
    var t = (/mac os x/i.test(navigator.userAgent) ? "\u2318" : "Ctrl") + "+C";
    return e.replace(/#{\s*key\s*}/g, t);
  }
  a(Jm, "format");
  function eh(e, t) {
    var o, i, n, r, l, u, c = !1;
    t || (t = {}), o = t.debug || !1;
    try {
      n = Xm(), r = document.createRange(), l = document.getSelection(), u = document.createElement("span"), u.textContent = e, u.ariaHidden =
      "true", u.style.all = "unset", u.style.position = "fixed", u.style.top = 0, u.style.clip = "rect(0, 0, 0, 0)", u.style.whiteSpace = "p\
re", u.style.webkitUserSelect = "text", u.style.MozUserSelect = "text", u.style.msUserSelect = "text", u.style.userSelect = "text", u.addEventListener(
      "copy", function(d) {
        if (d.stopPropagation(), t.format)
          if (d.preventDefault(), typeof d.clipboardData > "u") {
            o && console.warn("unable to use e.clipboardData"), o && console.warn("trying IE specific stuff"), window.clipboardData.clearData();
            var g = jl[t.format] || jl.default;
            window.clipboardData.setData(g, e);
          } else
            d.clipboardData.clearData(), d.clipboardData.setData(t.format, e);
        t.onCopy && (d.preventDefault(), t.onCopy(d.clipboardData));
      }), document.body.appendChild(u), r.selectNodeContents(u), l.addRange(r);
      var p = document.execCommand("copy");
      if (!p)
        throw new Error("copy command was unsuccessful");
      c = !0;
    } catch (d) {
      o && console.error("unable to copy using execCommand: ", d), o && console.warn("trying IE specific stuff");
      try {
        window.clipboardData.setData(t.format || "text", e), t.onCopy && t.onCopy(window.clipboardData), c = !0;
      } catch (g) {
        o && console.error("unable to copy using clipboardData: ", g), o && console.error("falling back to prompt"), i = Jm("message" in t ?
        t.message : Zm), window.prompt(i, e);
      }
    } finally {
      l && (typeof l.removeRange == "function" ? l.removeRange(r) : l.removeAllRanges()), u && document.body.removeChild(u), n();
    }
    return c;
  }
  a(eh, "copy");
  Vl.exports = eh;
});

// ../node_modules/downshift/node_modules/react-is/cjs/react-is.production.min.js
var Kc = Se((ce) => {
  "use strict";
  var ai = Symbol.for("react.element"), li = Symbol.for("react.portal"), kr = Symbol.for("react.fragment"), Or = Symbol.for("react.strict_mo\
de"), Pr = Symbol.for("react.profiler"), Ar = Symbol.for("react.provider"), Dr = Symbol.for("react.context"), Jg = Symbol.for("react.server_\
context"), Mr = Symbol.for("react.forward_ref"), Lr = Symbol.for("react.suspense"), Nr = Symbol.for("react.suspense_list"), Fr = Symbol.for(
  "react.memo"), Br = Symbol.for("react.lazy"), ey = Symbol.for("react.offscreen"), $c;
  $c = Symbol.for("react.module.reference");
  function $e(e) {
    if (typeof e == "object" && e !== null) {
      var t = e.$$typeof;
      switch (t) {
        case ai:
          switch (e = e.type, e) {
            case kr:
            case Pr:
            case Or:
            case Lr:
            case Nr:
              return e;
            default:
              switch (e = e && e.$$typeof, e) {
                case Jg:
                case Dr:
                case Mr:
                case Br:
                case Fr:
                case Ar:
                  return e;
                default:
                  return t;
              }
          }
        case li:
          return t;
      }
    }
  }
  a($e, "v");
  ce.ContextConsumer = Dr;
  ce.ContextProvider = Ar;
  ce.Element = ai;
  ce.ForwardRef = Mr;
  ce.Fragment = kr;
  ce.Lazy = Br;
  ce.Memo = Fr;
  ce.Portal = li;
  ce.Profiler = Pr;
  ce.StrictMode = Or;
  ce.Suspense = Lr;
  ce.SuspenseList = Nr;
  ce.isAsyncMode = function() {
    return !1;
  };
  ce.isConcurrentMode = function() {
    return !1;
  };
  ce.isContextConsumer = function(e) {
    return $e(e) === Dr;
  };
  ce.isContextProvider = function(e) {
    return $e(e) === Ar;
  };
  ce.isElement = function(e) {
    return typeof e == "object" && e !== null && e.$$typeof === ai;
  };
  ce.isForwardRef = function(e) {
    return $e(e) === Mr;
  };
  ce.isFragment = function(e) {
    return $e(e) === kr;
  };
  ce.isLazy = function(e) {
    return $e(e) === Br;
  };
  ce.isMemo = function(e) {
    return $e(e) === Fr;
  };
  ce.isPortal = function(e) {
    return $e(e) === li;
  };
  ce.isProfiler = function(e) {
    return $e(e) === Pr;
  };
  ce.isStrictMode = function(e) {
    return $e(e) === Or;
  };
  ce.isSuspense = function(e) {
    return $e(e) === Lr;
  };
  ce.isSuspenseList = function(e) {
    return $e(e) === Nr;
  };
  ce.isValidElementType = function(e) {
    return typeof e == "string" || typeof e == "function" || e === kr || e === Pr || e === Or || e === Lr || e === Nr || e === ey || typeof e ==
    "object" && e !== null && (e.$$typeof === Br || e.$$typeof === Fr || e.$$typeof === Ar || e.$$typeof === Dr || e.$$typeof === Mr || e.$$typeof ===
    $c || e.getModuleId !== void 0);
  };
  ce.typeOf = $e;
});

// ../node_modules/downshift/node_modules/react-is/index.js
var qc = Se((LL, Uc) => {
  "use strict";
  Uc.exports = Kc();
});

// ../node_modules/fuse.js/dist/fuse.js
var td = Se((Co, Ji) => {
  (function(e, t) {
    typeof Co == "object" && typeof Ji == "object" ? Ji.exports = t() : typeof define == "function" && define.amd ? define("Fuse", [], t) : typeof Co ==
    "object" ? Co.Fuse = t() : e.Fuse = t();
  })(Co, function() {
    return function(e) {
      var t = {};
      function o(i) {
        if (t[i]) return t[i].exports;
        var n = t[i] = { i, l: !1, exports: {} };
        return e[i].call(n.exports, n, n.exports, o), n.l = !0, n.exports;
      }
      return a(o, "r"), o.m = e, o.c = t, o.d = function(i, n, r) {
        o.o(i, n) || Object.defineProperty(i, n, { enumerable: !0, get: r });
      }, o.r = function(i) {
        typeof Symbol < "u" && Symbol.toStringTag && Object.defineProperty(i, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(
        i, "__esModule", { value: !0 });
      }, o.t = function(i, n) {
        if (1 & n && (i = o(i)), 8 & n || 4 & n && typeof i == "object" && i && i.__esModule) return i;
        var r = /* @__PURE__ */ Object.create(null);
        if (o.r(r), Object.defineProperty(r, "default", { enumerable: !0, value: i }), 2 & n && typeof i != "string") for (var l in i) o.d(r,
        l, (function(u) {
          return i[u];
        }).bind(null, l));
        return r;
      }, o.n = function(i) {
        var n = i && i.__esModule ? function() {
          return i.default;
        } : function() {
          return i;
        };
        return o.d(n, "a", n), n;
      }, o.o = function(i, n) {
        return Object.prototype.hasOwnProperty.call(i, n);
      }, o.p = "", o(o.s = 0);
    }([function(e, t, o) {
      function i(d) {
        return (i = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(g) {
          return typeof g;
        } : function(g) {
          return g && typeof Symbol == "function" && g.constructor === Symbol && g !== Symbol.prototype ? "symbol" : typeof g;
        })(d);
      }
      a(i, "n");
      function n(d, g) {
        for (var h = 0; h < g.length; h++) {
          var y = g[h];
          y.enumerable = y.enumerable || !1, y.configurable = !0, "value" in y && (y.writable = !0), Object.defineProperty(d, y.key, y);
        }
      }
      a(n, "o");
      var r = o(1), l = o(7), u = l.get, c = (l.deepValue, l.isArray), p = function() {
        function d(f, b) {
          var S = b.location, E = S === void 0 ? 0 : S, m = b.distance, v = m === void 0 ? 100 : m, I = b.threshold, w = I === void 0 ? 0.6 :
          I, k = b.maxPatternLength, T = k === void 0 ? 32 : k, _ = b.caseSensitive, C = _ !== void 0 && _, O = b.tokenSeparator, P = O === void 0 ?
          / +/g : O, D = b.findAllMatches, M = D !== void 0 && D, N = b.minMatchCharLength, Y = N === void 0 ? 1 : N, j = b.id, Q = j === void 0 ?
          null : j, H = b.keys, V = H === void 0 ? [] : H, z = b.shouldSort, te = z === void 0 || z, F = b.getFn, B = F === void 0 ? u : F, L = b.
          sortFn, W = L === void 0 ? function(de, Ie) {
            return de.score - Ie.score;
          } : L, Z = b.tokenize, re = Z !== void 0 && Z, J = b.matchAllTokens, pe = J !== void 0 && J, se = b.includeMatches, ue = se !== void 0 &&
          se, le = b.includeScore, xe = le !== void 0 && le, ge = b.verbose, ke = ge !== void 0 && ge;
          (function(de, Ie) {
            if (!(de instanceof Ie)) throw new TypeError("Cannot call a class as a function");
          })(this, d), this.options = { location: E, distance: v, threshold: w, maxPatternLength: T, isCaseSensitive: C, tokenSeparator: P, findAllMatches: M,
          minMatchCharLength: Y, id: Q, keys: V, includeMatches: ue, includeScore: xe, shouldSort: te, getFn: B, sortFn: W, verbose: ke, tokenize: re,
          matchAllTokens: pe }, this.setCollection(f), this._processKeys(V);
        }
        a(d, "e");
        var g, h, y;
        return g = d, (h = [{ key: "setCollection", value: /* @__PURE__ */ a(function(f) {
          return this.list = f, f;
        }, "value") }, { key: "_processKeys", value: /* @__PURE__ */ a(function(f) {
          if (this._keyWeights = {}, this._keyNames = [], f.length && typeof f[0] == "string") for (var b = 0, S = f.length; b < S; b += 1) {
            var E = f[b];
            this._keyWeights[E] = 1, this._keyNames.push(E);
          }
          else {
            for (var m = null, v = null, I = 0, w = 0, k = f.length; w < k; w += 1) {
              var T = f[w];
              if (!T.hasOwnProperty("name")) throw new Error('Missing "name" property in key object');
              var _ = T.name;
              if (this._keyNames.push(_), !T.hasOwnProperty("weight")) throw new Error('Missing "weight" property in key object');
              var C = T.weight;
              if (C < 0 || C > 1) throw new Error('"weight" property in key must bein the range of [0, 1)');
              v = v == null ? C : Math.max(v, C), m = m == null ? C : Math.min(m, C), this._keyWeights[_] = C, I += C;
            }
            if (I > 1) throw new Error("Total of weights cannot exceed 1");
          }
        }, "value") }, { key: "search", value: /* @__PURE__ */ a(function(f) {
          var b = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : { limit: !1 };
          this._log(`---------
Search pattern: "`.concat(f, '"'));
          var S = this._prepareSearchers(f), E = S.tokenSearchers, m = S.fullSearcher, v = this._search(E, m);
          return this._computeScore(v), this.options.shouldSort && this._sort(v), b.limit && typeof b.limit == "number" && (v = v.slice(0, b.
          limit)), this._format(v);
        }, "value") }, { key: "_prepareSearchers", value: /* @__PURE__ */ a(function() {
          var f = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "", b = [];
          if (this.options.tokenize) for (var S = f.split(this.options.tokenSeparator), E = 0, m = S.length; E < m; E += 1) b.push(new r(S[E],
          this.options));
          return { tokenSearchers: b, fullSearcher: new r(f, this.options) };
        }, "value") }, { key: "_search", value: /* @__PURE__ */ a(function() {
          var f = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [], b = arguments.length > 1 ? arguments[1] : void 0, S = this.
          list, E = {}, m = [];
          if (typeof S[0] == "string") {
            for (var v = 0, I = S.length; v < I; v += 1) this._analyze({ key: "", value: S[v], record: v, index: v }, { resultMap: E, results: m,
            tokenSearchers: f, fullSearcher: b });
            return m;
          }
          for (var w = 0, k = S.length; w < k; w += 1) for (var T = S[w], _ = 0, C = this._keyNames.length; _ < C; _ += 1) {
            var O = this._keyNames[_];
            this._analyze({ key: O, value: this.options.getFn(T, O), record: T, index: w }, { resultMap: E, results: m, tokenSearchers: f, fullSearcher: b });
          }
          return m;
        }, "value") }, { key: "_analyze", value: /* @__PURE__ */ a(function(f, b) {
          var S = this, E = f.key, m = f.arrayIndex, v = m === void 0 ? -1 : m, I = f.value, w = f.record, k = f.index, T = b.tokenSearchers,
          _ = T === void 0 ? [] : T, C = b.fullSearcher, O = b.resultMap, P = O === void 0 ? {} : O, D = b.results, M = D === void 0 ? [] : D;
          (/* @__PURE__ */ a(function N(Y, j, Q, H) {
            if (j != null) {
              if (typeof j == "string") {
                var V = !1, z = -1, te = 0;
                S._log(`
Key: `.concat(E === "" ? "--" : E));
                var F = C.search(j);
                if (S._log('Full text: "'.concat(j, '", score: ').concat(F.score)), S.options.tokenize) {
                  for (var B = j.split(S.options.tokenSeparator), L = B.length, W = [], Z = 0, re = _.length; Z < re; Z += 1) {
                    var J = _[Z];
                    S._log(`
Pattern: "`.concat(J.pattern, '"'));
                    for (var pe = !1, se = 0; se < L; se += 1) {
                      var ue = B[se], le = J.search(ue), xe = {};
                      le.isMatch ? (xe[ue] = le.score, V = !0, pe = !0, W.push(le.score)) : (xe[ue] = 1, S.options.matchAllTokens || W.push(
                      1)), S._log('Token: "'.concat(ue, '", score: ').concat(xe[ue]));
                    }
                    pe && (te += 1);
                  }
                  z = W[0];
                  for (var ge = W.length, ke = 1; ke < ge; ke += 1) z += W[ke];
                  z /= ge, S._log("Token score average:", z);
                }
                var de = F.score;
                z > -1 && (de = (de + z) / 2), S._log("Score average:", de);
                var Ie = !S.options.tokenize || !S.options.matchAllTokens || te >= _.length;
                if (S._log(`
Check Matches: `.concat(Ie)), (V || F.isMatch) && Ie) {
                  var Te = { key: E, arrayIndex: Y, value: j, score: de };
                  S.options.includeMatches && (Te.matchedIndices = F.matchedIndices);
                  var De = P[H];
                  De ? De.output.push(Te) : (P[H] = { item: Q, output: [Te] }, M.push(P[H]));
                }
              } else if (c(j)) for (var et = 0, Pe = j.length; et < Pe; et += 1) N(et, j[et], Q, H);
            }
          }, "e"))(v, I, w, k);
        }, "value") }, { key: "_computeScore", value: /* @__PURE__ */ a(function(f) {
          this._log(`

Computing score:
`);
          for (var b = this._keyWeights, S = !!Object.keys(b).length, E = 0, m = f.length; E < m; E += 1) {
            for (var v = f[E], I = v.output, w = I.length, k = 1, T = 0; T < w; T += 1) {
              var _ = I[T], C = _.key, O = S ? b[C] : 1, P = _.score === 0 && b && b[C] > 0 ? Number.EPSILON : _.score;
              k *= Math.pow(P, O);
            }
            v.score = k, this._log(v);
          }
        }, "value") }, { key: "_sort", value: /* @__PURE__ */ a(function(f) {
          this._log(`

Sorting....`), f.sort(this.options.sortFn);
        }, "value") }, { key: "_format", value: /* @__PURE__ */ a(function(f) {
          var b = [];
          if (this.options.verbose) {
            var S = [];
            this._log(`

Output:

`, JSON.stringify(f, function(_, C) {
              if (i(C) === "object" && C !== null) {
                if (S.indexOf(C) !== -1) return;
                S.push(C);
              }
              return C;
            }, 2)), S = null;
          }
          var E = [];
          this.options.includeMatches && E.push(function(_, C) {
            var O = _.output;
            C.matches = [];
            for (var P = 0, D = O.length; P < D; P += 1) {
              var M = O[P];
              if (M.matchedIndices.length !== 0) {
                var N = { indices: M.matchedIndices, value: M.value };
                M.key && (N.key = M.key), M.hasOwnProperty("arrayIndex") && M.arrayIndex > -1 && (N.arrayIndex = M.arrayIndex), C.matches.push(
                N);
              }
            }
          }), this.options.includeScore && E.push(function(_, C) {
            C.score = _.score;
          });
          for (var m = 0, v = f.length; m < v; m += 1) {
            var I = f[m];
            if (this.options.id && (I.item = this.options.getFn(I.item, this.options.id)[0]), E.length) {
              for (var w = { item: I.item }, k = 0, T = E.length; k < T; k += 1) E[k](I, w);
              b.push(w);
            } else b.push(I.item);
          }
          return b;
        }, "value") }, { key: "_log", value: /* @__PURE__ */ a(function() {
          var f;
          this.options.verbose && (f = console).log.apply(f, arguments);
        }, "value") }]) && n(g.prototype, h), y && n(g, y), d;
      }();
      e.exports = p;
    }, function(e, t, o) {
      function i(c, p) {
        for (var d = 0; d < p.length; d++) {
          var g = p[d];
          g.enumerable = g.enumerable || !1, g.configurable = !0, "value" in g && (g.writable = !0), Object.defineProperty(c, g.key, g);
        }
      }
      a(i, "n");
      var n = o(2), r = o(3), l = o(6), u = function() {
        function c(h, y) {
          var f = y.location, b = f === void 0 ? 0 : f, S = y.distance, E = S === void 0 ? 100 : S, m = y.threshold, v = m === void 0 ? 0.6 :
          m, I = y.maxPatternLength, w = I === void 0 ? 32 : I, k = y.isCaseSensitive, T = k !== void 0 && k, _ = y.tokenSeparator, C = _ ===
          void 0 ? / +/g : _, O = y.findAllMatches, P = O !== void 0 && O, D = y.minMatchCharLength, M = D === void 0 ? 1 : D, N = y.includeMatches,
          Y = N !== void 0 && N;
          (function(j, Q) {
            if (!(j instanceof Q)) throw new TypeError("Cannot call a class as a function");
          })(this, c), this.options = { location: b, distance: E, threshold: v, maxPatternLength: w, isCaseSensitive: T, tokenSeparator: C, findAllMatches: P,
          includeMatches: Y, minMatchCharLength: M }, this.pattern = T ? h : h.toLowerCase(), this.pattern.length <= w && (this.patternAlphabet =
          l(this.pattern));
        }
        a(c, "e");
        var p, d, g;
        return p = c, (d = [{ key: "search", value: /* @__PURE__ */ a(function(h) {
          var y = this.options, f = y.isCaseSensitive, b = y.includeMatches;
          if (f || (h = h.toLowerCase()), this.pattern === h) {
            var S = { isMatch: !0, score: 0 };
            return b && (S.matchedIndices = [[0, h.length - 1]]), S;
          }
          var E = this.options, m = E.maxPatternLength, v = E.tokenSeparator;
          if (this.pattern.length > m) return n(h, this.pattern, v);
          var I = this.options, w = I.location, k = I.distance, T = I.threshold, _ = I.findAllMatches, C = I.minMatchCharLength;
          return r(h, this.pattern, this.patternAlphabet, { location: w, distance: k, threshold: T, findAllMatches: _, minMatchCharLength: C,
          includeMatches: b });
        }, "value") }]) && i(p.prototype, d), g && i(p, g), c;
      }();
      e.exports = u;
    }, function(e, t) {
      var o = /[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g;
      e.exports = function(i, n) {
        var r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : / +/g, l = new RegExp(n.replace(o, "\\$&").replace(r, "|")),
        u = i.match(l), c = !!u, p = [];
        if (c) for (var d = 0, g = u.length; d < g; d += 1) {
          var h = u[d];
          p.push([i.indexOf(h), h.length - 1]);
        }
        return { score: c ? 0.5 : 1, isMatch: c, matchedIndices: p };
      };
    }, function(e, t, o) {
      var i = o(4), n = o(5);
      e.exports = function(r, l, u, c) {
        for (var p = c.location, d = p === void 0 ? 0 : p, g = c.distance, h = g === void 0 ? 100 : g, y = c.threshold, f = y === void 0 ? 0.6 :
        y, b = c.findAllMatches, S = b !== void 0 && b, E = c.minMatchCharLength, m = E === void 0 ? 1 : E, v = c.includeMatches, I = v !== void 0 &&
        v, w = d, k = r.length, T = f, _ = r.indexOf(l, w), C = l.length, O = [], P = 0; P < k; P += 1) O[P] = 0;
        if (_ !== -1) {
          var D = i(l, { errors: 0, currentLocation: _, expectedLocation: w, distance: h });
          if (T = Math.min(D, T), (_ = r.lastIndexOf(l, w + C)) !== -1) {
            var M = i(l, { errors: 0, currentLocation: _, expectedLocation: w, distance: h });
            T = Math.min(M, T);
          }
        }
        _ = -1;
        for (var N = [], Y = 1, j = C + k, Q = 1 << (C <= 31 ? C - 1 : 30), H = 0; H < C; H += 1) {
          for (var V = 0, z = j; V < z; )
            i(l, { errors: H, currentLocation: w + z, expectedLocation: w, distance: h }) <= T ? V = z : j = z, z = Math.floor((j - V) / 2 +
            V);
          j = z;
          var te = Math.max(1, w - z + 1), F = S ? k : Math.min(w + z, k) + C, B = Array(F + 2);
          B[F + 1] = (1 << H) - 1;
          for (var L = F; L >= te; L -= 1) {
            var W = L - 1, Z = u[r.charAt(W)];
            if (Z && (O[W] = 1), B[L] = (B[L + 1] << 1 | 1) & Z, H !== 0 && (B[L] |= (N[L + 1] | N[L]) << 1 | 1 | N[L + 1]), B[L] & Q && (Y =
            i(l, { errors: H, currentLocation: W, expectedLocation: w, distance: h })) <= T) {
              if (T = Y, (_ = W) <= w) break;
              te = Math.max(1, 2 * w - _);
            }
          }
          if (i(l, { errors: H + 1, currentLocation: w, expectedLocation: w, distance: h }) > T) break;
          N = B;
        }
        var re = { isMatch: _ >= 0, score: Y === 0 ? 1e-3 : Y };
        return I && (re.matchedIndices = n(O, m)), re;
      };
    }, function(e, t) {
      e.exports = function(o, i) {
        var n = i.errors, r = n === void 0 ? 0 : n, l = i.currentLocation, u = l === void 0 ? 0 : l, c = i.expectedLocation, p = c === void 0 ?
        0 : c, d = i.distance, g = d === void 0 ? 100 : d, h = r / o.length, y = Math.abs(p - u);
        return g ? h + y / g : y ? 1 : h;
      };
    }, function(e, t) {
      e.exports = function() {
        for (var o = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [], i = arguments.length > 1 && arguments[1] !== void 0 ?
        arguments[1] : 1, n = [], r = -1, l = -1, u = 0, c = o.length; u < c; u += 1) {
          var p = o[u];
          p && r === -1 ? r = u : p || r === -1 || ((l = u - 1) - r + 1 >= i && n.push([r, l]), r = -1);
        }
        return o[u - 1] && u - r >= i && n.push([r, u - 1]), n;
      };
    }, function(e, t) {
      e.exports = function(o) {
        for (var i = {}, n = o.length, r = 0; r < n; r += 1) i[o.charAt(r)] = 0;
        for (var l = 0; l < n; l += 1) i[o.charAt(l)] |= 1 << n - l - 1;
        return i;
      };
    }, function(e, t) {
      var o = /* @__PURE__ */ a(function(l) {
        return Array.isArray ? Array.isArray(l) : Object.prototype.toString.call(l) === "[object Array]";
      }, "r"), i = /* @__PURE__ */ a(function(l) {
        return l == null ? "" : function(u) {
          if (typeof u == "string") return u;
          var c = u + "";
          return c == "0" && 1 / u == -1 / 0 ? "-0" : c;
        }(l);
      }, "n"), n = /* @__PURE__ */ a(function(l) {
        return typeof l == "string";
      }, "o"), r = /* @__PURE__ */ a(function(l) {
        return typeof l == "number";
      }, "i");
      e.exports = { get: /* @__PURE__ */ a(function(l, u) {
        var c = [];
        return (/* @__PURE__ */ a(function p(d, g) {
          if (g) {
            var h = g.indexOf("."), y = g, f = null;
            h !== -1 && (y = g.slice(0, h), f = g.slice(h + 1));
            var b = d[y];
            if (b != null) if (f || !n(b) && !r(b)) if (o(b)) for (var S = 0, E = b.length; S < E; S += 1) p(b[S], f);
            else f && p(b, f);
            else c.push(i(b));
          } else c.push(d);
        }, "e"))(l, u), c;
      }, "get"), isArray: o, isString: n, isNum: r, toString: i };
    }]);
  });
});

// ../node_modules/store2/dist/store2.js
var fd = Se((Jr, en) => {
  (function(e, t) {
    var o = {
      version: "2.14.2",
      areas: {},
      apis: {},
      nsdelim: ".",
      // utilities
      inherit: /* @__PURE__ */ a(function(n, r) {
        for (var l in n)
          r.hasOwnProperty(l) || Object.defineProperty(r, l, Object.getOwnPropertyDescriptor(n, l));
        return r;
      }, "inherit"),
      stringify: /* @__PURE__ */ a(function(n, r) {
        return n === void 0 || typeof n == "function" ? n + "" : JSON.stringify(n, r || o.replace);
      }, "stringify"),
      parse: /* @__PURE__ */ a(function(n, r) {
        try {
          return JSON.parse(n, r || o.revive);
        } catch {
          return n;
        }
      }, "parse"),
      // extension hooks
      fn: /* @__PURE__ */ a(function(n, r) {
        o.storeAPI[n] = r;
        for (var l in o.apis)
          o.apis[l][n] = r;
      }, "fn"),
      get: /* @__PURE__ */ a(function(n, r) {
        return n.getItem(r);
      }, "get"),
      set: /* @__PURE__ */ a(function(n, r, l) {
        n.setItem(r, l);
      }, "set"),
      remove: /* @__PURE__ */ a(function(n, r) {
        n.removeItem(r);
      }, "remove"),
      key: /* @__PURE__ */ a(function(n, r) {
        return n.key(r);
      }, "key"),
      length: /* @__PURE__ */ a(function(n) {
        return n.length;
      }, "length"),
      clear: /* @__PURE__ */ a(function(n) {
        n.clear();
      }, "clear"),
      // core functions
      Store: /* @__PURE__ */ a(function(n, r, l) {
        var u = o.inherit(o.storeAPI, function(p, d, g) {
          return arguments.length === 0 ? u.getAll() : typeof d == "function" ? u.transact(p, d, g) : d !== void 0 ? u.set(p, d, g) : typeof p ==
          "string" || typeof p == "number" ? u.get(p) : typeof p == "function" ? u.each(p) : p ? u.setAll(p, d) : u.clear();
        });
        u._id = n;
        try {
          var c = "__store2_test";
          r.setItem(c, "ok"), u._area = r, r.removeItem(c);
        } catch {
          u._area = o.storage("fake");
        }
        return u._ns = l || "", o.areas[n] || (o.areas[n] = u._area), o.apis[u._ns + u._id] || (o.apis[u._ns + u._id] = u), u;
      }, "Store"),
      storeAPI: {
        // admin functions
        area: /* @__PURE__ */ a(function(n, r) {
          var l = this[n];
          return (!l || !l.area) && (l = o.Store(n, r, this._ns), this[n] || (this[n] = l)), l;
        }, "area"),
        namespace: /* @__PURE__ */ a(function(n, r, l) {
          if (l = l || this._delim || o.nsdelim, !n)
            return this._ns ? this._ns.substring(0, this._ns.length - l.length) : "";
          var u = n, c = this[u];
          if ((!c || !c.namespace) && (c = o.Store(this._id, this._area, this._ns + u + l), c._delim = l, this[u] || (this[u] = c), !r))
            for (var p in o.areas)
              c.area(p, o.areas[p]);
          return c;
        }, "namespace"),
        isFake: /* @__PURE__ */ a(function(n) {
          return n ? (this._real = this._area, this._area = o.storage("fake")) : n === !1 && (this._area = this._real || this._area), this._area.
          name === "fake";
        }, "isFake"),
        toString: /* @__PURE__ */ a(function() {
          return "store" + (this._ns ? "." + this.namespace() : "") + "[" + this._id + "]";
        }, "toString"),
        // storage functions
        has: /* @__PURE__ */ a(function(n) {
          return this._area.has ? this._area.has(this._in(n)) : this._in(n) in this._area;
        }, "has"),
        size: /* @__PURE__ */ a(function() {
          return this.keys().length;
        }, "size"),
        each: /* @__PURE__ */ a(function(n, r) {
          for (var l = 0, u = o.length(this._area); l < u; l++) {
            var c = this._out(o.key(this._area, l));
            if (c !== void 0 && n.call(this, c, this.get(c), r) === !1)
              break;
            u > o.length(this._area) && (u--, l--);
          }
          return r || this;
        }, "each"),
        keys: /* @__PURE__ */ a(function(n) {
          return this.each(function(r, l, u) {
            u.push(r);
          }, n || []);
        }, "keys"),
        get: /* @__PURE__ */ a(function(n, r) {
          var l = o.get(this._area, this._in(n)), u;
          return typeof r == "function" && (u = r, r = null), l !== null ? o.parse(l, u) : r ?? l;
        }, "get"),
        getAll: /* @__PURE__ */ a(function(n) {
          return this.each(function(r, l, u) {
            u[r] = l;
          }, n || {});
        }, "getAll"),
        transact: /* @__PURE__ */ a(function(n, r, l) {
          var u = this.get(n, l), c = r(u);
          return this.set(n, c === void 0 ? u : c), this;
        }, "transact"),
        set: /* @__PURE__ */ a(function(n, r, l) {
          var u = this.get(n), c;
          return u != null && l === !1 ? r : (typeof l == "function" && (c = l, l = void 0), o.set(this._area, this._in(n), o.stringify(r, c),
          l) || u);
        }, "set"),
        setAll: /* @__PURE__ */ a(function(n, r) {
          var l, u;
          for (var c in n)
            u = n[c], this.set(c, u, r) !== u && (l = !0);
          return l;
        }, "setAll"),
        add: /* @__PURE__ */ a(function(n, r, l) {
          var u = this.get(n);
          if (u instanceof Array)
            r = u.concat(r);
          else if (u !== null) {
            var c = typeof u;
            if (c === typeof r && c === "object") {
              for (var p in r)
                u[p] = r[p];
              r = u;
            } else
              r = u + r;
          }
          return o.set(this._area, this._in(n), o.stringify(r, l)), r;
        }, "add"),
        remove: /* @__PURE__ */ a(function(n, r) {
          var l = this.get(n, r);
          return o.remove(this._area, this._in(n)), l;
        }, "remove"),
        clear: /* @__PURE__ */ a(function() {
          return this._ns ? this.each(function(n) {
            o.remove(this._area, this._in(n));
          }, 1) : o.clear(this._area), this;
        }, "clear"),
        clearAll: /* @__PURE__ */ a(function() {
          var n = this._area;
          for (var r in o.areas)
            o.areas.hasOwnProperty(r) && (this._area = o.areas[r], this.clear());
          return this._area = n, this;
        }, "clearAll"),
        // internal use functions
        _in: /* @__PURE__ */ a(function(n) {
          return typeof n != "string" && (n = o.stringify(n)), this._ns ? this._ns + n : n;
        }, "_in"),
        _out: /* @__PURE__ */ a(function(n) {
          return this._ns ? n && n.indexOf(this._ns) === 0 ? n.substring(this._ns.length) : void 0 : (
            // so each() knows to skip it
            n
          );
        }, "_out")
      },
      // end _.storeAPI
      storage: /* @__PURE__ */ a(function(n) {
        return o.inherit(o.storageAPI, { items: {}, name: n });
      }, "storage"),
      storageAPI: {
        length: 0,
        has: /* @__PURE__ */ a(function(n) {
          return this.items.hasOwnProperty(n);
        }, "has"),
        key: /* @__PURE__ */ a(function(n) {
          var r = 0;
          for (var l in this.items)
            if (this.has(l) && n === r++)
              return l;
        }, "key"),
        setItem: /* @__PURE__ */ a(function(n, r) {
          this.has(n) || this.length++, this.items[n] = r;
        }, "setItem"),
        removeItem: /* @__PURE__ */ a(function(n) {
          this.has(n) && (delete this.items[n], this.length--);
        }, "removeItem"),
        getItem: /* @__PURE__ */ a(function(n) {
          return this.has(n) ? this.items[n] : null;
        }, "getItem"),
        clear: /* @__PURE__ */ a(function() {
          for (var n in this.items)
            this.removeItem(n);
        }, "clear")
      }
      // end _.storageAPI
    }, i = (
      // safely set this up (throws error in IE10/32bit mode for local files)
      o.Store("local", function() {
        try {
          return localStorage;
        } catch {
        }
      }())
    );
    i.local = i, i._ = o, i.area("session", function() {
      try {
        return sessionStorage;
      } catch {
      }
    }()), i.area("page", o.storage("page")), typeof t == "function" && t.amd !== void 0 ? t("store2", [], function() {
      return i;
    }) : typeof en < "u" && en.exports ? en.exports = i : (e.store && (o.conflict = e.store), e.store = i);
  })(Jr, Jr && Jr.define);
});

// global-externals:react
var s = __REACT__, { Children: R0, Component: Ne, Fragment: we, Profiler: W0, PureComponent: j0, StrictMode: V0, Suspense: $0, __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: K0,
cloneElement: ds, createContext: jt, createElement: U0, createFactory: q0, createRef: G0, forwardRef: fs, isValidElement: Y0, lazy: Q0, memo: no,
startTransition: X0, unstable_act: Z0, useCallback: A, useContext: ko, useDebugValue: J0, useDeferredValue: ms, useEffect: R, useId: ev, useImperativeHandle: tv,
useInsertionEffect: ov, useLayoutEffect: dt, useMemo: K, useReducer: Vt, useRef: q, useState: $, useSyncExternalStore: rv, useTransition: hs,
version: nv } = __REACT__;

// global-externals:@storybook/core/channels
var iv = __STORYBOOK_CHANNELS__, { Channel: sv, HEARTBEAT_INTERVAL: av, HEARTBEAT_MAX_LATENCY: lv, PostMessageTransport: uv, WebsocketTransport: cv,
createBrowserChannel: gs } = __STORYBOOK_CHANNELS__;

// ../node_modules/@storybook/global/dist/index.mjs
var ie = (() => {
  let e;
  return typeof window < "u" ? e = window : typeof globalThis < "u" ? e = globalThis : typeof global < "u" ? e = global : typeof self < "u" ?
  e = self : e = {}, e;
})();

// global-externals:@storybook/icons
var fv = __STORYBOOK_ICONS__, { AccessibilityAltIcon: mv, AccessibilityIcon: hv, AddIcon: gv, AdminIcon: yv, AlertAltIcon: bv, AlertIcon: Oo,
AlignLeftIcon: vv, AlignRightIcon: xv, AppleIcon: Iv, ArrowBottomLeftIcon: Sv, ArrowBottomRightIcon: wv, ArrowDownIcon: Ev, ArrowLeftIcon: ys,
ArrowRightIcon: Cv, ArrowSolidDownIcon: Tv, ArrowSolidLeftIcon: _v, ArrowSolidRightIcon: kv, ArrowSolidUpIcon: Ov, ArrowTopLeftIcon: Pv, ArrowTopRightIcon: Av,
ArrowUpIcon: Dv, AzureDevOpsIcon: Mv, BackIcon: Lv, BasketIcon: Nv, BatchAcceptIcon: Fv, BatchDenyIcon: Bv, BeakerIcon: Hv, BellIcon: zv, BitbucketIcon: Rv,
BoldIcon: Wv, BookIcon: jv, BookmarkHollowIcon: Vv, BookmarkIcon: $v, BottomBarIcon: Po, BottomBarToggleIcon: bs, BoxIcon: Kv, BranchIcon: Uv,
BrowserIcon: qv, ButtonIcon: Gv, CPUIcon: Yv, CalendarIcon: Qv, CameraIcon: Xv, CategoryIcon: Zv, CertificateIcon: Jv, ChangedIcon: ex, ChatIcon: tx,
CheckIcon: Re, ChevronDownIcon: $t, ChevronLeftIcon: ox, ChevronRightIcon: vs, ChevronSmallDownIcon: rx, ChevronSmallLeftIcon: nx, ChevronSmallRightIcon: ix,
ChevronSmallUpIcon: xs, ChevronUpIcon: sx, ChromaticIcon: ax, ChromeIcon: lx, CircleHollowIcon: ux, CircleIcon: Is, ClearIcon: cx, CloseAltIcon: Ao,
CloseIcon: qe, CloudHollowIcon: px, CloudIcon: dx, CogIcon: nn, CollapseIcon: Ss, CommandIcon: fx, CommentAddIcon: mx, CommentIcon: hx, CommentsIcon: gx,
CommitIcon: yx, CompassIcon: bx, ComponentDrivenIcon: vx, ComponentIcon: sn, ContrastIcon: xx, ControlsIcon: Ix, CopyIcon: Sx, CreditIcon: wx,
CrossIcon: Ex, DashboardIcon: Cx, DatabaseIcon: Tx, DeleteIcon: _x, DiamondIcon: kx, DirectionIcon: Ox, DiscordIcon: Px, DocChartIcon: Ax, DocListIcon: Dx,
DocumentIcon: Kt, DownloadIcon: Mx, DragIcon: Lx, EditIcon: Nx, EllipsisIcon: ws, EmailIcon: Fx, ExpandAltIcon: Es, ExpandIcon: Cs, EyeCloseIcon: Ts,
EyeIcon: Do, FaceHappyIcon: Bx, FaceNeutralIcon: Hx, FaceSadIcon: zx, FacebookIcon: Rx, FailedIcon: _s, FastForwardIcon: Wx, FigmaIcon: jx, FilterIcon: ks,
FlagIcon: Vx, FolderIcon: $x, FormIcon: Kx, GDriveIcon: Ux, GithubIcon: Mo, GitlabIcon: qx, GlobeIcon: an, GoogleIcon: Gx, GraphBarIcon: Yx,
GraphLineIcon: Qx, GraphqlIcon: Xx, GridAltIcon: Zx, GridIcon: Jx, GrowIcon: eI, HeartHollowIcon: tI, HeartIcon: Os, HomeIcon: oI, HourglassIcon: rI,
InfoIcon: Ps, ItalicIcon: nI, JumpToIcon: iI, KeyIcon: sI, LightningIcon: As, LightningOffIcon: aI, LinkBrokenIcon: lI, LinkIcon: Ds, LinkedinIcon: uI,
LinuxIcon: cI, ListOrderedIcon: pI, ListUnorderedIcon: dI, LocationIcon: fI, LockIcon: Lo, MarkdownIcon: mI, MarkupIcon: Ms, MediumIcon: hI,
MemoryIcon: gI, MenuIcon: No, MergeIcon: yI, MirrorIcon: bI, MobileIcon: vI, MoonIcon: xI, NutIcon: II, OutboxIcon: SI, OutlineIcon: wI, PaintBrushIcon: EI,
PaperClipIcon: CI, ParagraphIcon: TI, PassedIcon: _I, PhoneIcon: kI, PhotoDragIcon: OI, PhotoIcon: PI, PinAltIcon: AI, PinIcon: DI, PlayAllHollowIcon: Ls,
PlayBackIcon: MI, PlayHollowIcon: Ns, PlayIcon: LI, PlayNextIcon: NI, PlusIcon: Fs, PointerDefaultIcon: FI, PointerHandIcon: BI, PowerIcon: HI,
PrintIcon: zI, ProceedIcon: RI, ProfileIcon: WI, PullRequestIcon: jI, QuestionIcon: VI, RSSIcon: $I, RedirectIcon: KI, ReduxIcon: UI, RefreshIcon: qI,
ReplyIcon: GI, RepoIcon: YI, RequestChangeIcon: QI, RewindIcon: XI, RulerIcon: ZI, SaveIcon: JI, SearchIcon: Fo, ShareAltIcon: st, ShareIcon: eS,
ShieldIcon: tS, SideBySideIcon: oS, SidebarAltIcon: Bo, SidebarAltToggleIcon: rS, SidebarIcon: nS, SidebarToggleIcon: iS, SpeakerIcon: sS, StackedIcon: aS,
StarHollowIcon: lS, StarIcon: uS, StatusFailIcon: Bs, StatusPassIcon: Hs, StatusWarnIcon: zs, StickerIcon: cS, StopAltHollowIcon: pS, StopAltIcon: Rs,
StopIcon: dS, StorybookIcon: Ws, StructureIcon: fS, SubtractIcon: mS, SunIcon: hS, SupportIcon: gS, SwitchAltIcon: yS, SyncIcon: ft, TabletIcon: bS,
ThumbsUpIcon: vS, TimeIcon: js, TimerIcon: xS, TransferIcon: IS, TrashIcon: Vs, TwitterIcon: SS, TypeIcon: wS, UbuntuIcon: ES, UndoIcon: CS,
UnfoldIcon: TS, UnlockIcon: _S, UnpinIcon: kS, UploadIcon: OS, UserAddIcon: PS, UserAltIcon: AS, UserIcon: DS, UsersIcon: MS, VSCodeIcon: LS,
VerifiedIcon: NS, VideoIcon: FS, WandIcon: $s, WatchIcon: BS, WindowsIcon: HS, WrenchIcon: zS, XIcon: RS, YoutubeIcon: WS, ZoomIcon: Ks, ZoomOutIcon: Us,
ZoomResetIcon: qs, iconList: jS } = __STORYBOOK_ICONS__;

// global-externals:@storybook/theming
var $S = __STORYBOOK_THEMING__, { CacheProvider: KS, ClassNames: US, Global: qS, ThemeProvider: GS, background: YS, color: Gs, convert: QS, create: XS,
createCache: ZS, createGlobal: JS, createReset: ew, css: tw, darken: ow, ensure: rw, ignoreSsrWarning: nw, isPropValid: iw, jsx: sw, keyframes: aw,
lighten: lw, styled: uw, themes: cw, typography: pw, useTheme: dw, withTheme: fw } = __STORYBOOK_THEMING__;

// global-externals:@storybook/core/core-events
var hw = __STORYBOOK_CORE_EVENTS__, { ARGTYPES_INFO_REQUEST: Ys, ARGTYPES_INFO_RESPONSE: Qs, CHANNEL_CREATED: Xs, CHANNEL_WS_DISCONNECT: Zs,
CONFIG_ERROR: gw, CREATE_NEW_STORYFILE_REQUEST: Js, CREATE_NEW_STORYFILE_RESPONSE: ea, CURRENT_STORY_WAS_SET: yw, DOCS_PREPARED: bw, DOCS_RENDERED: vw,
FILE_COMPONENT_SEARCH_REQUEST: ta, FILE_COMPONENT_SEARCH_RESPONSE: Ho, FORCE_REMOUNT: ln, FORCE_RE_RENDER: xw, GLOBALS_UPDATED: Iw, NAVIGATE_URL: Sw,
PLAY_FUNCTION_THREW_EXCEPTION: ww, PRELOAD_ENTRIES: It, PREVIEW_BUILDER_PROGRESS: oa, PREVIEW_KEYDOWN: Ew, REGISTER_SUBSCRIPTION: Cw, REQUEST_WHATS_NEW_DATA: Tw,
RESET_STORY_ARGS: _w, RESULT_WHATS_NEW_DATA: kw, SAVE_STORY_REQUEST: ra, SAVE_STORY_RESPONSE: na, SELECT_STORY: Ow, SET_CONFIG: Pw, SET_CURRENT_STORY: ia,
SET_FILTER: Aw, SET_GLOBALS: Dw, SET_INDEX: Mw, SET_STORIES: Lw, SET_WHATS_NEW_CACHE: Nw, SHARED_STATE_CHANGED: Fw, SHARED_STATE_SET: Bw, STORIES_COLLAPSE_ALL: io,
STORIES_EXPAND_ALL: un, STORY_ARGS_UPDATED: Hw, STORY_CHANGED: zw, STORY_ERRORED: Rw, STORY_FINISHED: Ww, STORY_INDEX_INVALIDATED: jw, STORY_MISSING: Vw,
STORY_PREPARED: $w, STORY_RENDERED: Kw, STORY_RENDER_PHASE_CHANGED: Uw, STORY_SPECIFIED: qw, STORY_THREW_EXCEPTION: Gw, STORY_UNCHANGED: Yw,
TELEMETRY_ERROR: Qw, TESTING_MODULE_CANCEL_TEST_RUN_REQUEST: Xw, TESTING_MODULE_CANCEL_TEST_RUN_RESPONSE: Zw, TESTING_MODULE_CONFIG_CHANGE: cn,
TESTING_MODULE_CRASH_REPORT: pn, TESTING_MODULE_PROGRESS_REPORT: dn, TESTING_MODULE_RUN_ALL_REQUEST: Jw, TESTING_MODULE_RUN_REQUEST: eE, TESTING_MODULE_WATCH_MODE_REQUEST: tE,
TOGGLE_WHATS_NEW_NOTIFICATIONS: oE, UNHANDLED_ERRORS_WHILE_PLAYING: rE, UPDATE_GLOBALS: nE, UPDATE_QUERY_PARAMS: iE, UPDATE_STORY_ARGS: sE } = __STORYBOOK_CORE_EVENTS__;

// global-externals:@storybook/core/manager-api
var lE = __STORYBOOK_API__, { ActiveTabs: uE, Consumer: me, ManagerContext: cE, Provider: sa, RequestResponseError: pE, addons: Ge, combineParameters: dE,
controlOrMetaKey: fE, controlOrMetaSymbol: mE, eventMatchesShortcut: hE, eventToShortcut: aa, experimental_requestResponse: zo, isMacLike: gE,
isShortcutTaken: yE, keyToSymbol: bE, merge: Ro, mockChannel: vE, optionOrAltSymbol: xE, shortcutMatchesShortcut: la, shortcutToHumanString: Ye,
types: be, useAddonState: IE, useArgTypes: SE, useArgs: wE, useChannel: EE, useGlobalTypes: CE, useGlobals: TE, useParameter: _E, useSharedState: kE,
useStoryPrepared: OE, useStorybookApi: ne, useStorybookState: Me } = __STORYBOOK_API__;

// global-externals:react-dom/client
var AE = __REACT_DOM_CLIENT__, { createRoot: ua, hydrateRoot: DE } = __REACT_DOM_CLIENT__;

// global-externals:@storybook/core/router
var LE = __STORYBOOK_ROUTER__, { BaseLocationProvider: NE, DEEPLY_EQUAL: FE, Link: Wo, Location: jo, LocationProvider: ca, Match: pa, Route: so,
buildArgsParam: BE, deepDiff: HE, getMatch: zE, parsePath: RE, queryFromLocation: WE, stringifyQuery: jE, useNavigate: da } = __STORYBOOK_ROUTER__;

// global-externals:@storybook/core/theming
var $E = __STORYBOOK_THEMING__, { CacheProvider: KE, ClassNames: UE, Global: Ut, ThemeProvider: fn, background: qE, color: GE, convert: YE, create: QE,
createCache: XE, createGlobal: fa, createReset: ZE, css: JE, darken: eC, ensure: ma, ignoreSsrWarning: tC, isPropValid: oC, jsx: rC, keyframes: St,
lighten: nC, styled: x, themes: iC, typography: sC, useTheme: Oe, withTheme: ha } = __STORYBOOK_THEMING__;

// global-externals:@storybook/core/manager-errors
var lC = __STORYBOOK_CORE_EVENTS_MANAGER_ERRORS__, { Category: uC, ProviderDoesNotExtendBaseProviderError: ga, UncaughtManagerError: cC } = __STORYBOOK_CORE_EVENTS_MANAGER_ERRORS__;

// ../node_modules/react-helmet-async/lib/index.module.js
var oe = Be(mn()), Fa = Be(Ca()), vn = Be(_a()), Ba = Be(Oa());
function ve() {
  return ve = Object.assign || function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var o = arguments[t];
      for (var i in o) Object.prototype.hasOwnProperty.call(o, i) && (e[i] = o[i]);
    }
    return e;
  }, ve.apply(this, arguments);
}
a(ve, "a");
function wn(e, t) {
  e.prototype = Object.create(t.prototype), e.prototype.constructor = e, xn(e, t);
}
a(wn, "s");
function xn(e, t) {
  return xn = Object.setPrototypeOf || function(o, i) {
    return o.__proto__ = i, o;
  }, xn(e, t);
}
a(xn, "c");
function Pa(e, t) {
  if (e == null) return {};
  var o, i, n = {}, r = Object.keys(e);
  for (i = 0; i < r.length; i++) t.indexOf(o = r[i]) >= 0 || (n[o] = e[o]);
  return n;
}
a(Pa, "u");
var X = { BASE: "base", BODY: "body", HEAD: "head", HTML: "html", LINK: "link", META: "meta", NOSCRIPT: "noscript", SCRIPT: "script", STYLE: "\
style", TITLE: "title", FRAGMENT: "Symbol(react.fragment)" }, Gd = { rel: ["amphtml", "canonical", "alternate"] }, Yd = { type: ["applicatio\
n/ld+json"] }, Qd = { charset: "", name: ["robots", "description"], property: ["og:type", "og:title", "og:url", "og:image", "og:image:alt", "\
og:description", "twitter:url", "twitter:title", "twitter:description", "twitter:image", "twitter:image:alt", "twitter:card", "twitter:site"] },
Aa = Object.keys(X).map(function(e) {
  return X[e];
}), Uo = { accesskey: "accessKey", charset: "charSet", class: "className", contenteditable: "contentEditable", contextmenu: "contextMenu", "\
http-equiv": "httpEquiv", itemprop: "itemProp", tabindex: "tabIndex" }, Xd = Object.keys(Uo).reduce(function(e, t) {
  return e[Uo[t]] = t, e;
}, {}), Gt = /* @__PURE__ */ a(function(e, t) {
  for (var o = e.length - 1; o >= 0; o -= 1) {
    var i = e[o];
    if (Object.prototype.hasOwnProperty.call(i, t)) return i[t];
  }
  return null;
}, "T"), Zd = /* @__PURE__ */ a(function(e) {
  var t = Gt(e, X.TITLE), o = Gt(e, "titleTemplate");
  if (Array.isArray(t) && (t = t.join("")), o && t) return o.replace(/%s/g, function() {
    return t;
  });
  var i = Gt(e, "defaultTitle");
  return t || i || void 0;
}, "g"), Jd = /* @__PURE__ */ a(function(e) {
  return Gt(e, "onChangeClientState") || function() {
  };
}, "b"), hn = /* @__PURE__ */ a(function(e, t) {
  return t.filter(function(o) {
    return o[e] !== void 0;
  }).map(function(o) {
    return o[e];
  }).reduce(function(o, i) {
    return ve({}, o, i);
  }, {});
}, "v"), ef = /* @__PURE__ */ a(function(e, t) {
  return t.filter(function(o) {
    return o[X.BASE] !== void 0;
  }).map(function(o) {
    return o[X.BASE];
  }).reverse().reduce(function(o, i) {
    if (!o.length) for (var n = Object.keys(i), r = 0; r < n.length; r += 1) {
      var l = n[r].toLowerCase();
      if (e.indexOf(l) !== -1 && i[l]) return o.concat(i);
    }
    return o;
  }, []);
}, "A"), ao = /* @__PURE__ */ a(function(e, t, o) {
  var i = {};
  return o.filter(function(n) {
    return !!Array.isArray(n[e]) || (n[e] !== void 0 && console && typeof console.warn == "function" && console.warn("Helmet: " + e + ' shou\
ld be of type "Array". Instead found type "' + typeof n[e] + '"'), !1);
  }).map(function(n) {
    return n[e];
  }).reverse().reduce(function(n, r) {
    var l = {};
    r.filter(function(g) {
      for (var h, y = Object.keys(g), f = 0; f < y.length; f += 1) {
        var b = y[f], S = b.toLowerCase();
        t.indexOf(S) === -1 || h === "rel" && g[h].toLowerCase() === "canonical" || S === "rel" && g[S].toLowerCase() === "stylesheet" || (h =
        S), t.indexOf(b) === -1 || b !== "innerHTML" && b !== "cssText" && b !== "itemprop" || (h = b);
      }
      if (!h || !g[h]) return !1;
      var E = g[h].toLowerCase();
      return i[h] || (i[h] = {}), l[h] || (l[h] = {}), !i[h][E] && (l[h][E] = !0, !0);
    }).reverse().forEach(function(g) {
      return n.push(g);
    });
    for (var u = Object.keys(l), c = 0; c < u.length; c += 1) {
      var p = u[c], d = ve({}, i[p], l[p]);
      i[p] = d;
    }
    return n;
  }, []).reverse();
}, "C"), tf = /* @__PURE__ */ a(function(e, t) {
  if (Array.isArray(e) && e.length) {
    for (var o = 0; o < e.length; o += 1) if (e[o][t]) return !0;
  }
  return !1;
}, "O"), Ha = /* @__PURE__ */ a(function(e) {
  return Array.isArray(e) ? e.join("") : e;
}, "S"), gn = /* @__PURE__ */ a(function(e, t) {
  return Array.isArray(e) ? e.reduce(function(o, i) {
    return function(n, r) {
      for (var l = Object.keys(n), u = 0; u < l.length; u += 1) if (r[l[u]] && r[l[u]].includes(n[l[u]])) return !0;
      return !1;
    }(i, t) ? o.priority.push(i) : o.default.push(i), o;
  }, { priority: [], default: [] }) : { default: e };
}, "E"), Da = /* @__PURE__ */ a(function(e, t) {
  var o;
  return ve({}, e, ((o = {})[t] = void 0, o));
}, "I"), of = [X.NOSCRIPT, X.SCRIPT, X.STYLE], yn = /* @__PURE__ */ a(function(e, t) {
  return t === void 0 && (t = !0), t === !1 ? String(e) : String(e).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(
  /"/g, "&quot;").replace(/'/g, "&#x27;");
}, "w"), Ma = /* @__PURE__ */ a(function(e) {
  return Object.keys(e).reduce(function(t, o) {
    var i = e[o] !== void 0 ? o + '="' + e[o] + '"' : "" + o;
    return t ? t + " " + i : i;
  }, "");
}, "x"), La = /* @__PURE__ */ a(function(e, t) {
  return t === void 0 && (t = {}), Object.keys(e).reduce(function(o, i) {
    return o[Uo[i] || i] = e[i], o;
  }, t);
}, "L"), Ko = /* @__PURE__ */ a(function(e, t) {
  return t.map(function(o, i) {
    var n, r = ((n = { key: i })["data-rh"] = !0, n);
    return Object.keys(o).forEach(function(l) {
      var u = Uo[l] || l;
      u === "innerHTML" || u === "cssText" ? r.dangerouslySetInnerHTML = { __html: o.innerHTML || o.cssText } : r[u] = o[l];
    }), s.createElement(e, r);
  });
}, "j"), We = /* @__PURE__ */ a(function(e, t, o) {
  switch (e) {
    case X.TITLE:
      return { toComponent: /* @__PURE__ */ a(function() {
        return n = t.titleAttributes, (r = { key: i = t.title })["data-rh"] = !0, l = La(n, r), [s.createElement(X.TITLE, l, i)];
        var i, n, r, l;
      }, "toComponent"), toString: /* @__PURE__ */ a(function() {
        return function(i, n, r, l) {
          var u = Ma(r), c = Ha(n);
          return u ? "<" + i + ' data-rh="true" ' + u + ">" + yn(c, l) + "</" + i + ">" : "<" + i + ' data-rh="true">' + yn(c, l) + "</" + i +
          ">";
        }(e, t.title, t.titleAttributes, o);
      }, "toString") };
    case "bodyAttributes":
    case "htmlAttributes":
      return { toComponent: /* @__PURE__ */ a(function() {
        return La(t);
      }, "toComponent"), toString: /* @__PURE__ */ a(function() {
        return Ma(t);
      }, "toString") };
    default:
      return { toComponent: /* @__PURE__ */ a(function() {
        return Ko(e, t);
      }, "toComponent"), toString: /* @__PURE__ */ a(function() {
        return function(i, n, r) {
          return n.reduce(function(l, u) {
            var c = Object.keys(u).filter(function(g) {
              return !(g === "innerHTML" || g === "cssText");
            }).reduce(function(g, h) {
              var y = u[h] === void 0 ? h : h + '="' + yn(u[h], r) + '"';
              return g ? g + " " + y : y;
            }, ""), p = u.innerHTML || u.cssText || "", d = of.indexOf(i) === -1;
            return l + "<" + i + ' data-rh="true" ' + c + (d ? "/>" : ">" + p + "</" + i + ">");
          }, "");
        }(e, t, o);
      }, "toString") };
  }
}, "M"), In = /* @__PURE__ */ a(function(e) {
  var t = e.baseTag, o = e.bodyAttributes, i = e.encode, n = e.htmlAttributes, r = e.noscriptTags, l = e.styleTags, u = e.title, c = u === void 0 ?
  "" : u, p = e.titleAttributes, d = e.linkTags, g = e.metaTags, h = e.scriptTags, y = { toComponent: /* @__PURE__ */ a(function() {
  }, "toComponent"), toString: /* @__PURE__ */ a(function() {
    return "";
  }, "toString") };
  if (e.prioritizeSeoTags) {
    var f = function(b) {
      var S = b.linkTags, E = b.scriptTags, m = b.encode, v = gn(b.metaTags, Qd), I = gn(S, Gd), w = gn(E, Yd);
      return { priorityMethods: { toComponent: /* @__PURE__ */ a(function() {
        return [].concat(Ko(X.META, v.priority), Ko(X.LINK, I.priority), Ko(X.SCRIPT, w.priority));
      }, "toComponent"), toString: /* @__PURE__ */ a(function() {
        return We(X.META, v.priority, m) + " " + We(X.LINK, I.priority, m) + " " + We(X.SCRIPT, w.priority, m);
      }, "toString") }, metaTags: v.default, linkTags: I.default, scriptTags: w.default };
    }(e);
    y = f.priorityMethods, d = f.linkTags, g = f.metaTags, h = f.scriptTags;
  }
  return { priority: y, base: We(X.BASE, t, i), bodyAttributes: We("bodyAttributes", o, i), htmlAttributes: We("htmlAttributes", n, i), link: We(
  X.LINK, d, i), meta: We(X.META, g, i), noscript: We(X.NOSCRIPT, r, i), script: We(X.SCRIPT, h, i), style: We(X.STYLE, l, i), title: We(X.TITLE,
  { title: c, titleAttributes: p }, i) };
}, "k"), $o = [], Sn = /* @__PURE__ */ a(function(e, t) {
  var o = this;
  t === void 0 && (t = typeof document < "u"), this.instances = [], this.value = { setHelmet: /* @__PURE__ */ a(function(i) {
    o.context.helmet = i;
  }, "setHelmet"), helmetInstances: { get: /* @__PURE__ */ a(function() {
    return o.canUseDOM ? $o : o.instances;
  }, "get"), add: /* @__PURE__ */ a(function(i) {
    (o.canUseDOM ? $o : o.instances).push(i);
  }, "add"), remove: /* @__PURE__ */ a(function(i) {
    var n = (o.canUseDOM ? $o : o.instances).indexOf(i);
    (o.canUseDOM ? $o : o.instances).splice(n, 1);
  }, "remove") } }, this.context = e, this.canUseDOM = t, t || (e.helmet = In({ baseTag: [], bodyAttributes: {}, encodeSpecialCharacters: !0,
  htmlAttributes: {}, linkTags: [], metaTags: [], noscriptTags: [], scriptTags: [], styleTags: [], title: "", titleAttributes: {} }));
}, "N"), za = s.createContext({}), rf = oe.default.shape({ setHelmet: oe.default.func, helmetInstances: oe.default.shape({ get: oe.default.func,
add: oe.default.func, remove: oe.default.func }) }), nf = typeof document < "u", mt = /* @__PURE__ */ function(e) {
  function t(o) {
    var i;
    return (i = e.call(this, o) || this).helmetData = new Sn(i.props.context, t.canUseDOM), i;
  }
  return a(t, "r"), wn(t, e), t.prototype.render = function() {
    return s.createElement(za.Provider, { value: this.helmetData.value }, this.props.children);
  }, t;
}(Ne);
mt.canUseDOM = nf, mt.propTypes = { context: oe.default.shape({ helmet: oe.default.shape() }), children: oe.default.node.isRequired }, mt.defaultProps =
{ context: {} }, mt.displayName = "HelmetProvider";
var qt = /* @__PURE__ */ a(function(e, t) {
  var o, i = document.head || document.querySelector(X.HEAD), n = i.querySelectorAll(e + "[data-rh]"), r = [].slice.call(n), l = [];
  return t && t.length && t.forEach(function(u) {
    var c = document.createElement(e);
    for (var p in u) Object.prototype.hasOwnProperty.call(u, p) && (p === "innerHTML" ? c.innerHTML = u.innerHTML : p === "cssText" ? c.styleSheet ?
    c.styleSheet.cssText = u.cssText : c.appendChild(document.createTextNode(u.cssText)) : c.setAttribute(p, u[p] === void 0 ? "" : u[p]));
    c.setAttribute("data-rh", "true"), r.some(function(d, g) {
      return o = g, c.isEqualNode(d);
    }) ? r.splice(o, 1) : l.push(c);
  }), r.forEach(function(u) {
    return u.parentNode.removeChild(u);
  }), l.forEach(function(u) {
    return i.appendChild(u);
  }), { oldTags: r, newTags: l };
}, "Y"), bn = /* @__PURE__ */ a(function(e, t) {
  var o = document.getElementsByTagName(e)[0];
  if (o) {
    for (var i = o.getAttribute("data-rh"), n = i ? i.split(",") : [], r = [].concat(n), l = Object.keys(t), u = 0; u < l.length; u += 1) {
      var c = l[u], p = t[c] || "";
      o.getAttribute(c) !== p && o.setAttribute(c, p), n.indexOf(c) === -1 && n.push(c);
      var d = r.indexOf(c);
      d !== -1 && r.splice(d, 1);
    }
    for (var g = r.length - 1; g >= 0; g -= 1) o.removeAttribute(r[g]);
    n.length === r.length ? o.removeAttribute("data-rh") : o.getAttribute("data-rh") !== l.join(",") && o.setAttribute("data-rh", l.join(","));
  }
}, "B"), Na = /* @__PURE__ */ a(function(e, t) {
  var o = e.baseTag, i = e.htmlAttributes, n = e.linkTags, r = e.metaTags, l = e.noscriptTags, u = e.onChangeClientState, c = e.scriptTags, p = e.
  styleTags, d = e.title, g = e.titleAttributes;
  bn(X.BODY, e.bodyAttributes), bn(X.HTML, i), function(b, S) {
    b !== void 0 && document.title !== b && (document.title = Ha(b)), bn(X.TITLE, S);
  }(d, g);
  var h = { baseTag: qt(X.BASE, o), linkTags: qt(X.LINK, n), metaTags: qt(X.META, r), noscriptTags: qt(X.NOSCRIPT, l), scriptTags: qt(X.SCRIPT,
  c), styleTags: qt(X.STYLE, p) }, y = {}, f = {};
  Object.keys(h).forEach(function(b) {
    var S = h[b], E = S.newTags, m = S.oldTags;
    E.length && (y[b] = E), m.length && (f[b] = h[b].oldTags);
  }), t && t(), u(e, y, f);
}, "K"), lo = null, qo = /* @__PURE__ */ function(e) {
  function t() {
    for (var i, n = arguments.length, r = new Array(n), l = 0; l < n; l++) r[l] = arguments[l];
    return (i = e.call.apply(e, [this].concat(r)) || this).rendered = !1, i;
  }
  a(t, "e"), wn(t, e);
  var o = t.prototype;
  return o.shouldComponentUpdate = function(i) {
    return !(0, Ba.default)(i, this.props);
  }, o.componentDidUpdate = function() {
    this.emitChange();
  }, o.componentWillUnmount = function() {
    this.props.context.helmetInstances.remove(this), this.emitChange();
  }, o.emitChange = function() {
    var i, n, r = this.props.context, l = r.setHelmet, u = null, c = (i = r.helmetInstances.get().map(function(p) {
      var d = ve({}, p.props);
      return delete d.context, d;
    }), { baseTag: ef(["href"], i), bodyAttributes: hn("bodyAttributes", i), defer: Gt(i, "defer"), encode: Gt(i, "encodeSpecialCharacters"),
    htmlAttributes: hn("htmlAttributes", i), linkTags: ao(X.LINK, ["rel", "href"], i), metaTags: ao(X.META, ["name", "charset", "http-equiv",
    "property", "itemprop"], i), noscriptTags: ao(X.NOSCRIPT, ["innerHTML"], i), onChangeClientState: Jd(i), scriptTags: ao(X.SCRIPT, ["src",
    "innerHTML"], i), styleTags: ao(X.STYLE, ["cssText"], i), title: Zd(i), titleAttributes: hn("titleAttributes", i), prioritizeSeoTags: tf(
    i, "prioritizeSeoTags") });
    mt.canUseDOM ? (n = c, lo && cancelAnimationFrame(lo), n.defer ? lo = requestAnimationFrame(function() {
      Na(n, function() {
        lo = null;
      });
    }) : (Na(n), lo = null)) : In && (u = In(c)), l(u);
  }, o.init = function() {
    this.rendered || (this.rendered = !0, this.props.context.helmetInstances.add(this), this.emitChange());
  }, o.render = function() {
    return this.init(), null;
  }, t;
}(Ne);
qo.propTypes = { context: rf.isRequired }, qo.displayName = "HelmetDispatcher";
var sf = ["children"], af = ["children"], uo = /* @__PURE__ */ function(e) {
  function t() {
    return e.apply(this, arguments) || this;
  }
  a(t, "r"), wn(t, e);
  var o = t.prototype;
  return o.shouldComponentUpdate = function(i) {
    return !(0, Fa.default)(Da(this.props, "helmetData"), Da(i, "helmetData"));
  }, o.mapNestedChildrenToProps = function(i, n) {
    if (!n) return null;
    switch (i.type) {
      case X.SCRIPT:
      case X.NOSCRIPT:
        return { innerHTML: n };
      case X.STYLE:
        return { cssText: n };
      default:
        throw new Error("<" + i.type + " /> elements are self-closing and can not contain children. Refer to our API for more information.");
    }
  }, o.flattenArrayTypeChildren = function(i) {
    var n, r = i.child, l = i.arrayTypeChildren;
    return ve({}, l, ((n = {})[r.type] = [].concat(l[r.type] || [], [ve({}, i.newChildProps, this.mapNestedChildrenToProps(r, i.nestedChildren))]),
    n));
  }, o.mapObjectTypeChildren = function(i) {
    var n, r, l = i.child, u = i.newProps, c = i.newChildProps, p = i.nestedChildren;
    switch (l.type) {
      case X.TITLE:
        return ve({}, u, ((n = {})[l.type] = p, n.titleAttributes = ve({}, c), n));
      case X.BODY:
        return ve({}, u, { bodyAttributes: ve({}, c) });
      case X.HTML:
        return ve({}, u, { htmlAttributes: ve({}, c) });
      default:
        return ve({}, u, ((r = {})[l.type] = ve({}, c), r));
    }
  }, o.mapArrayTypeChildrenToProps = function(i, n) {
    var r = ve({}, n);
    return Object.keys(i).forEach(function(l) {
      var u;
      r = ve({}, r, ((u = {})[l] = i[l], u));
    }), r;
  }, o.warnOnInvalidChildren = function(i, n) {
    return (0, vn.default)(Aa.some(function(r) {
      return i.type === r;
    }), typeof i.type == "function" ? "You may be attempting to nest <Helmet> components within each other, which is not allowed. Refer to o\
ur API for more information." : "Only elements types " + Aa.join(", ") + " are allowed. Helmet does not support rendering <" + i.type + "> e\
lements. Refer to our API for more information."), (0, vn.default)(!n || typeof n == "string" || Array.isArray(n) && !n.some(function(r) {
      return typeof r != "string";
    }), "Helmet expects a string as a child of <" + i.type + ">. Did you forget to wrap your children in braces? ( <" + i.type + ">{``}</" +
    i.type + "> ) Refer to our API for more information."), !0;
  }, o.mapChildrenToProps = function(i, n) {
    var r = this, l = {};
    return s.Children.forEach(i, function(u) {
      if (u && u.props) {
        var c = u.props, p = c.children, d = Pa(c, sf), g = Object.keys(d).reduce(function(y, f) {
          return y[Xd[f] || f] = d[f], y;
        }, {}), h = u.type;
        switch (typeof h == "symbol" ? h = h.toString() : r.warnOnInvalidChildren(u, p), h) {
          case X.FRAGMENT:
            n = r.mapChildrenToProps(p, n);
            break;
          case X.LINK:
          case X.META:
          case X.NOSCRIPT:
          case X.SCRIPT:
          case X.STYLE:
            l = r.flattenArrayTypeChildren({ child: u, arrayTypeChildren: l, newChildProps: g, nestedChildren: p });
            break;
          default:
            n = r.mapObjectTypeChildren({ child: u, newProps: n, newChildProps: g, nestedChildren: p });
        }
      }
    }), this.mapArrayTypeChildrenToProps(l, n);
  }, o.render = function() {
    var i = this.props, n = i.children, r = Pa(i, af), l = ve({}, r), u = r.helmetData;
    return n && (l = this.mapChildrenToProps(n, l)), !u || u instanceof Sn || (u = new Sn(u.context, u.instances)), u ? /* @__PURE__ */ s.createElement(
    qo, ve({}, l, { context: u.value, helmetData: void 0 })) : /* @__PURE__ */ s.createElement(za.Consumer, null, function(c) {
      return s.createElement(qo, ve({}, l, { context: c }));
    });
  }, t;
}(Ne);
uo.propTypes = { base: oe.default.object, bodyAttributes: oe.default.object, children: oe.default.oneOfType([oe.default.arrayOf(oe.default.node),
oe.default.node]), defaultTitle: oe.default.string, defer: oe.default.bool, encodeSpecialCharacters: oe.default.bool, htmlAttributes: oe.default.
object, link: oe.default.arrayOf(oe.default.object), meta: oe.default.arrayOf(oe.default.object), noscript: oe.default.arrayOf(oe.default.object),
onChangeClientState: oe.default.func, script: oe.default.arrayOf(oe.default.object), style: oe.default.arrayOf(oe.default.object), title: oe.default.
string, titleAttributes: oe.default.object, titleTemplate: oe.default.string, prioritizeSeoTags: oe.default.bool, helmetData: oe.default.object },
uo.defaultProps = { defer: !0, encodeSpecialCharacters: !0, prioritizeSeoTags: !1 }, uo.displayName = "Helmet";

// src/manager/constants.ts
var Qe = "@media (min-width: 600px)";

// src/manager/components/hooks/useMedia.tsx
function Ra(e) {
  let t = /* @__PURE__ */ a((r) => typeof window < "u" ? window.matchMedia(r).matches : !1, "getMatches"), [o, i] = $(t(e));
  function n() {
    i(t(e));
  }
  return a(n, "handleChange"), R(() => {
    let r = window.matchMedia(e);
    return n(), r.addEventListener("change", n), () => {
      r.removeEventListener("change", n);
    };
  }, [e]), o;
}
a(Ra, "useMediaQuery");

// src/manager/components/layout/LayoutProvider.tsx
var Wa = jt({
  isMobileMenuOpen: !1,
  setMobileMenuOpen: /* @__PURE__ */ a(() => {
  }, "setMobileMenuOpen"),
  isMobileAboutOpen: !1,
  setMobileAboutOpen: /* @__PURE__ */ a(() => {
  }, "setMobileAboutOpen"),
  isMobilePanelOpen: !1,
  setMobilePanelOpen: /* @__PURE__ */ a(() => {
  }, "setMobilePanelOpen"),
  isDesktop: !1,
  isMobile: !1
}), ja = /* @__PURE__ */ a(({ children: e }) => {
  let [t, o] = $(!1), [i, n] = $(!1), [r, l] = $(!1), u = Ra(`(min-width: ${600}px)`), c = !u, p = K(
    () => ({
      isMobileMenuOpen: t,
      setMobileMenuOpen: o,
      isMobileAboutOpen: i,
      setMobileAboutOpen: n,
      isMobilePanelOpen: r,
      setMobilePanelOpen: l,
      isDesktop: u,
      isMobile: c
    }),
    [
      t,
      o,
      i,
      n,
      r,
      l,
      u,
      c
    ]
  );
  return /* @__PURE__ */ s.createElement(Wa.Provider, { value: p }, e);
}, "LayoutProvider"), he = /* @__PURE__ */ a(() => ko(Wa), "useLayout");

// global-externals:@storybook/core/components
var FC = __STORYBOOK_COMPONENTS__, { A: BC, ActionBar: HC, AddonPanel: zC, Badge: Go, Bar: RC, Blockquote: WC, Button: fe, ClipboardCode: jC,
Code: VC, DL: $C, Div: KC, DocumentWrapper: UC, EmptyTabContent: Va, ErrorFormatter: $a, FlexBar: qC, Form: Yo, H1: GC, H2: YC, H3: QC, H4: XC,
H5: ZC, H6: JC, HR: eT, IconButton: ee, IconButtonSkeleton: tT, Icons: Ka, Img: oT, LI: rT, Link: Ae, ListItem: lf, Loader: Qo, Modal: wt, OL: nT,
P: iT, Placeholder: sT, Pre: aT, ProgressSpinner: Ua, ResetWrapper: lT, ScrollArea: Xo, Separator: Yt, Spaced: at, Span: uT, StorybookIcon: cT,
StorybookLogo: Zo, Symbols: pT, SyntaxHighlighter: dT, TT: fT, TabBar: Jo, TabButton: er, TabWrapper: mT, Table: hT, Tabs: qa, TabsState: gT,
TooltipLinkList: ht, TooltipMessage: yT, TooltipNote: je, UL: bT, WithTooltip: ye, WithTooltipPure: vT, Zoom: Ga, codeCommon: xT, components: IT,
createCopyToClipboardFunction: ST, getStoryHref: Qt, icons: wT, interleaveSeparators: ET, nameSpaceClassNames: CT, resetComponents: TT, withReset: _T } = __STORYBOOK_COMPONENTS__;

// ../node_modules/@babel/runtime/helpers/esm/extends.js
function U() {
  return U = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var o = arguments[t];
      for (var i in o) ({}).hasOwnProperty.call(o, i) && (e[i] = o[i]);
    }
    return e;
  }, U.apply(null, arguments);
}
a(U, "_extends");

// ../node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js
function Ya(e) {
  if (e === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
a(Ya, "_assertThisInitialized");

// ../node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js
function gt(e, t) {
  return gt = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(o, i) {
    return o.__proto__ = i, o;
  }, gt(e, t);
}
a(gt, "_setPrototypeOf");

// ../node_modules/@babel/runtime/helpers/esm/inheritsLoose.js
function Xt(e, t) {
  e.prototype = Object.create(t.prototype), e.prototype.constructor = e, gt(e, t);
}
a(Xt, "_inheritsLoose");

// ../node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js
function tr(e) {
  return tr = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(t) {
    return t.__proto__ || Object.getPrototypeOf(t);
  }, tr(e);
}
a(tr, "_getPrototypeOf");

// ../node_modules/@babel/runtime/helpers/esm/isNativeFunction.js
function Qa(e) {
  try {
    return Function.toString.call(e).indexOf("[native code]") !== -1;
  } catch {
    return typeof e == "function";
  }
}
a(Qa, "_isNativeFunction");

// ../node_modules/@babel/runtime/helpers/esm/isNativeReflectConstruct.js
function En() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch {
  }
  return (En = /* @__PURE__ */ a(function() {
    return !!e;
  }, "_isNativeReflectConstruct"))();
}
a(En, "_isNativeReflectConstruct");

// ../node_modules/@babel/runtime/helpers/esm/construct.js
function Xa(e, t, o) {
  if (En()) return Reflect.construct.apply(null, arguments);
  var i = [null];
  i.push.apply(i, t);
  var n = new (e.bind.apply(e, i))();
  return o && gt(n, o.prototype), n;
}
a(Xa, "_construct");

// ../node_modules/@babel/runtime/helpers/esm/wrapNativeSuper.js
function or(e) {
  var t = typeof Map == "function" ? /* @__PURE__ */ new Map() : void 0;
  return or = /* @__PURE__ */ a(function(i) {
    if (i === null || !Qa(i)) return i;
    if (typeof i != "function") throw new TypeError("Super expression must either be null or a function");
    if (t !== void 0) {
      if (t.has(i)) return t.get(i);
      t.set(i, n);
    }
    function n() {
      return Xa(i, arguments, tr(this).constructor);
    }
    return a(n, "Wrapper"), n.prototype = Object.create(i.prototype, {
      constructor: {
        value: n,
        enumerable: !1,
        writable: !0,
        configurable: !0
      }
    }), gt(n, i);
  }, "_wrapNativeSuper"), or(e);
}
a(or, "_wrapNativeSuper");

// ../node_modules/polished/dist/polished.esm.js
var tt = /* @__PURE__ */ function(e) {
  Xt(t, e);
  function t(o) {
    var i;
    if (1)
      i = e.call(this, "An error occurred. See https://github.com/styled-components/polished/blob/main/src/internalHelpers/errors.md#" + o +
      " for more information.") || this;
    else
      for (var n, r, l; l < n; l++)
        ;
    return Ya(i);
  }
  return a(t, "PolishedError"), t;
}(/* @__PURE__ */ or(Error));
function Cn(e) {
  return Math.round(e * 255);
}
a(Cn, "colorToInt");
function uf(e, t, o) {
  return Cn(e) + "," + Cn(t) + "," + Cn(o);
}
a(uf, "convertToInt");
function co(e, t, o, i) {
  if (i === void 0 && (i = uf), t === 0)
    return i(o, o, o);
  var n = (e % 360 + 360) % 360 / 60, r = (1 - Math.abs(2 * o - 1)) * t, l = r * (1 - Math.abs(n % 2 - 1)), u = 0, c = 0, p = 0;
  n >= 0 && n < 1 ? (u = r, c = l) : n >= 1 && n < 2 ? (u = l, c = r) : n >= 2 && n < 3 ? (c = r, p = l) : n >= 3 && n < 4 ? (c = l, p = r) :
  n >= 4 && n < 5 ? (u = l, p = r) : n >= 5 && n < 6 && (u = r, p = l);
  var d = o - r / 2, g = u + d, h = c + d, y = p + d;
  return i(g, h, y);
}
a(co, "hslToRgb");
var Za = {
  aliceblue: "f0f8ff",
  antiquewhite: "faebd7",
  aqua: "00ffff",
  aquamarine: "7fffd4",
  azure: "f0ffff",
  beige: "f5f5dc",
  bisque: "ffe4c4",
  black: "000",
  blanchedalmond: "ffebcd",
  blue: "0000ff",
  blueviolet: "8a2be2",
  brown: "a52a2a",
  burlywood: "deb887",
  cadetblue: "5f9ea0",
  chartreuse: "7fff00",
  chocolate: "d2691e",
  coral: "ff7f50",
  cornflowerblue: "6495ed",
  cornsilk: "fff8dc",
  crimson: "dc143c",
  cyan: "00ffff",
  darkblue: "00008b",
  darkcyan: "008b8b",
  darkgoldenrod: "b8860b",
  darkgray: "a9a9a9",
  darkgreen: "006400",
  darkgrey: "a9a9a9",
  darkkhaki: "bdb76b",
  darkmagenta: "8b008b",
  darkolivegreen: "556b2f",
  darkorange: "ff8c00",
  darkorchid: "9932cc",
  darkred: "8b0000",
  darksalmon: "e9967a",
  darkseagreen: "8fbc8f",
  darkslateblue: "483d8b",
  darkslategray: "2f4f4f",
  darkslategrey: "2f4f4f",
  darkturquoise: "00ced1",
  darkviolet: "9400d3",
  deeppink: "ff1493",
  deepskyblue: "00bfff",
  dimgray: "696969",
  dimgrey: "696969",
  dodgerblue: "1e90ff",
  firebrick: "b22222",
  floralwhite: "fffaf0",
  forestgreen: "228b22",
  fuchsia: "ff00ff",
  gainsboro: "dcdcdc",
  ghostwhite: "f8f8ff",
  gold: "ffd700",
  goldenrod: "daa520",
  gray: "808080",
  green: "008000",
  greenyellow: "adff2f",
  grey: "808080",
  honeydew: "f0fff0",
  hotpink: "ff69b4",
  indianred: "cd5c5c",
  indigo: "4b0082",
  ivory: "fffff0",
  khaki: "f0e68c",
  lavender: "e6e6fa",
  lavenderblush: "fff0f5",
  lawngreen: "7cfc00",
  lemonchiffon: "fffacd",
  lightblue: "add8e6",
  lightcoral: "f08080",
  lightcyan: "e0ffff",
  lightgoldenrodyellow: "fafad2",
  lightgray: "d3d3d3",
  lightgreen: "90ee90",
  lightgrey: "d3d3d3",
  lightpink: "ffb6c1",
  lightsalmon: "ffa07a",
  lightseagreen: "20b2aa",
  lightskyblue: "87cefa",
  lightslategray: "789",
  lightslategrey: "789",
  lightsteelblue: "b0c4de",
  lightyellow: "ffffe0",
  lime: "0f0",
  limegreen: "32cd32",
  linen: "faf0e6",
  magenta: "f0f",
  maroon: "800000",
  mediumaquamarine: "66cdaa",
  mediumblue: "0000cd",
  mediumorchid: "ba55d3",
  mediumpurple: "9370db",
  mediumseagreen: "3cb371",
  mediumslateblue: "7b68ee",
  mediumspringgreen: "00fa9a",
  mediumturquoise: "48d1cc",
  mediumvioletred: "c71585",
  midnightblue: "191970",
  mintcream: "f5fffa",
  mistyrose: "ffe4e1",
  moccasin: "ffe4b5",
  navajowhite: "ffdead",
  navy: "000080",
  oldlace: "fdf5e6",
  olive: "808000",
  olivedrab: "6b8e23",
  orange: "ffa500",
  orangered: "ff4500",
  orchid: "da70d6",
  palegoldenrod: "eee8aa",
  palegreen: "98fb98",
  paleturquoise: "afeeee",
  palevioletred: "db7093",
  papayawhip: "ffefd5",
  peachpuff: "ffdab9",
  peru: "cd853f",
  pink: "ffc0cb",
  plum: "dda0dd",
  powderblue: "b0e0e6",
  purple: "800080",
  rebeccapurple: "639",
  red: "f00",
  rosybrown: "bc8f8f",
  royalblue: "4169e1",
  saddlebrown: "8b4513",
  salmon: "fa8072",
  sandybrown: "f4a460",
  seagreen: "2e8b57",
  seashell: "fff5ee",
  sienna: "a0522d",
  silver: "c0c0c0",
  skyblue: "87ceeb",
  slateblue: "6a5acd",
  slategray: "708090",
  slategrey: "708090",
  snow: "fffafa",
  springgreen: "00ff7f",
  steelblue: "4682b4",
  tan: "d2b48c",
  teal: "008080",
  thistle: "d8bfd8",
  tomato: "ff6347",
  turquoise: "40e0d0",
  violet: "ee82ee",
  wheat: "f5deb3",
  white: "fff",
  whitesmoke: "f5f5f5",
  yellow: "ff0",
  yellowgreen: "9acd32"
};
function cf(e) {
  if (typeof e != "string") return e;
  var t = e.toLowerCase();
  return Za[t] ? "#" + Za[t] : e;
}
a(cf, "nameToHex");
var pf = /^#[a-fA-F0-9]{6}$/, df = /^#[a-fA-F0-9]{8}$/, ff = /^#[a-fA-F0-9]{3}$/, mf = /^#[a-fA-F0-9]{4}$/, Tn = /^rgb\(\s*(\d{1,3})\s*(?:,)?\s*(\d{1,3})\s*(?:,)?\s*(\d{1,3})\s*\)$/i,
hf = /^rgb(?:a)?\(\s*(\d{1,3})\s*(?:,)?\s*(\d{1,3})\s*(?:,)?\s*(\d{1,3})\s*(?:,|\/)\s*([-+]?\d*[.]?\d+[%]?)\s*\)$/i, gf = /^hsl\(\s*(\d{0,3}[.]?[0-9]+(?:deg)?)\s*(?:,)?\s*(\d{1,3}[.]?[0-9]?)%\s*(?:,)?\s*(\d{1,3}[.]?[0-9]?)%\s*\)$/i,
yf = /^hsl(?:a)?\(\s*(\d{0,3}[.]?[0-9]+(?:deg)?)\s*(?:,)?\s*(\d{1,3}[.]?[0-9]?)%\s*(?:,)?\s*(\d{1,3}[.]?[0-9]?)%\s*(?:,|\/)\s*([-+]?\d*[.]?\d+[%]?)\s*\)$/i;
function Pn(e) {
  if (typeof e != "string")
    throw new tt(3);
  var t = cf(e);
  if (t.match(pf))
    return {
      red: parseInt("" + t[1] + t[2], 16),
      green: parseInt("" + t[3] + t[4], 16),
      blue: parseInt("" + t[5] + t[6], 16)
    };
  if (t.match(df)) {
    var o = parseFloat((parseInt("" + t[7] + t[8], 16) / 255).toFixed(2));
    return {
      red: parseInt("" + t[1] + t[2], 16),
      green: parseInt("" + t[3] + t[4], 16),
      blue: parseInt("" + t[5] + t[6], 16),
      alpha: o
    };
  }
  if (t.match(ff))
    return {
      red: parseInt("" + t[1] + t[1], 16),
      green: parseInt("" + t[2] + t[2], 16),
      blue: parseInt("" + t[3] + t[3], 16)
    };
  if (t.match(mf)) {
    var i = parseFloat((parseInt("" + t[4] + t[4], 16) / 255).toFixed(2));
    return {
      red: parseInt("" + t[1] + t[1], 16),
      green: parseInt("" + t[2] + t[2], 16),
      blue: parseInt("" + t[3] + t[3], 16),
      alpha: i
    };
  }
  var n = Tn.exec(t);
  if (n)
    return {
      red: parseInt("" + n[1], 10),
      green: parseInt("" + n[2], 10),
      blue: parseInt("" + n[3], 10)
    };
  var r = hf.exec(t.substring(0, 50));
  if (r)
    return {
      red: parseInt("" + r[1], 10),
      green: parseInt("" + r[2], 10),
      blue: parseInt("" + r[3], 10),
      alpha: parseFloat("" + r[4]) > 1 ? parseFloat("" + r[4]) / 100 : parseFloat("" + r[4])
    };
  var l = gf.exec(t);
  if (l) {
    var u = parseInt("" + l[1], 10), c = parseInt("" + l[2], 10) / 100, p = parseInt("" + l[3], 10) / 100, d = "rgb(" + co(u, c, p) + ")", g = Tn.
    exec(d);
    if (!g)
      throw new tt(4, t, d);
    return {
      red: parseInt("" + g[1], 10),
      green: parseInt("" + g[2], 10),
      blue: parseInt("" + g[3], 10)
    };
  }
  var h = yf.exec(t.substring(0, 50));
  if (h) {
    var y = parseInt("" + h[1], 10), f = parseInt("" + h[2], 10) / 100, b = parseInt("" + h[3], 10) / 100, S = "rgb(" + co(y, f, b) + ")", E = Tn.
    exec(S);
    if (!E)
      throw new tt(4, t, S);
    return {
      red: parseInt("" + E[1], 10),
      green: parseInt("" + E[2], 10),
      blue: parseInt("" + E[3], 10),
      alpha: parseFloat("" + h[4]) > 1 ? parseFloat("" + h[4]) / 100 : parseFloat("" + h[4])
    };
  }
  throw new tt(5);
}
a(Pn, "parseToRgb");
function bf(e) {
  var t = e.red / 255, o = e.green / 255, i = e.blue / 255, n = Math.max(t, o, i), r = Math.min(t, o, i), l = (n + r) / 2;
  if (n === r)
    return e.alpha !== void 0 ? {
      hue: 0,
      saturation: 0,
      lightness: l,
      alpha: e.alpha
    } : {
      hue: 0,
      saturation: 0,
      lightness: l
    };
  var u, c = n - r, p = l > 0.5 ? c / (2 - n - r) : c / (n + r);
  switch (n) {
    case t:
      u = (o - i) / c + (o < i ? 6 : 0);
      break;
    case o:
      u = (i - t) / c + 2;
      break;
    default:
      u = (t - o) / c + 4;
      break;
  }
  return u *= 60, e.alpha !== void 0 ? {
    hue: u,
    saturation: p,
    lightness: l,
    alpha: e.alpha
  } : {
    hue: u,
    saturation: p,
    lightness: l
  };
}
a(bf, "rgbToHsl");
function Ja(e) {
  return bf(Pn(e));
}
a(Ja, "parseToHsl");
var vf = /* @__PURE__ */ a(function(t) {
  return t.length === 7 && t[1] === t[2] && t[3] === t[4] && t[5] === t[6] ? "#" + t[1] + t[3] + t[5] : t;
}, "reduceHexValue"), kn = vf;
function Et(e) {
  var t = e.toString(16);
  return t.length === 1 ? "0" + t : t;
}
a(Et, "numberToHex");
function _n(e) {
  return Et(Math.round(e * 255));
}
a(_n, "colorToHex");
function xf(e, t, o) {
  return kn("#" + _n(e) + _n(t) + _n(o));
}
a(xf, "convertToHex");
function rr(e, t, o) {
  return co(e, t, o, xf);
}
a(rr, "hslToHex");
function If(e, t, o) {
  if (typeof e == "number" && typeof t == "number" && typeof o == "number")
    return rr(e, t, o);
  if (typeof e == "object" && t === void 0 && o === void 0)
    return rr(e.hue, e.saturation, e.lightness);
  throw new tt(1);
}
a(If, "hsl");
function Sf(e, t, o, i) {
  if (typeof e == "number" && typeof t == "number" && typeof o == "number" && typeof i == "number")
    return i >= 1 ? rr(e, t, o) : "rgba(" + co(e, t, o) + "," + i + ")";
  if (typeof e == "object" && t === void 0 && o === void 0 && i === void 0)
    return e.alpha >= 1 ? rr(e.hue, e.saturation, e.lightness) : "rgba(" + co(e.hue, e.saturation, e.lightness) + "," + e.alpha + ")";
  throw new tt(2);
}
a(Sf, "hsla");
function On(e, t, o) {
  if (typeof e == "number" && typeof t == "number" && typeof o == "number")
    return kn("#" + Et(e) + Et(t) + Et(o));
  if (typeof e == "object" && t === void 0 && o === void 0)
    return kn("#" + Et(e.red) + Et(e.green) + Et(e.blue));
  throw new tt(6);
}
a(On, "rgb");
function nr(e, t, o, i) {
  if (typeof e == "string" && typeof t == "number") {
    var n = Pn(e);
    return "rgba(" + n.red + "," + n.green + "," + n.blue + "," + t + ")";
  } else {
    if (typeof e == "number" && typeof t == "number" && typeof o == "number" && typeof i == "number")
      return i >= 1 ? On(e, t, o) : "rgba(" + e + "," + t + "," + o + "," + i + ")";
    if (typeof e == "object" && t === void 0 && o === void 0 && i === void 0)
      return e.alpha >= 1 ? On(e.red, e.green, e.blue) : "rgba(" + e.red + "," + e.green + "," + e.blue + "," + e.alpha + ")";
  }
  throw new tt(7);
}
a(nr, "rgba");
var wf = /* @__PURE__ */ a(function(t) {
  return typeof t.red == "number" && typeof t.green == "number" && typeof t.blue == "number" && (typeof t.alpha != "number" || typeof t.alpha >
  "u");
}, "isRgb"), Ef = /* @__PURE__ */ a(function(t) {
  return typeof t.red == "number" && typeof t.green == "number" && typeof t.blue == "number" && typeof t.alpha == "number";
}, "isRgba"), Cf = /* @__PURE__ */ a(function(t) {
  return typeof t.hue == "number" && typeof t.saturation == "number" && typeof t.lightness == "number" && (typeof t.alpha != "number" || typeof t.
  alpha > "u");
}, "isHsl"), Tf = /* @__PURE__ */ a(function(t) {
  return typeof t.hue == "number" && typeof t.saturation == "number" && typeof t.lightness == "number" && typeof t.alpha == "number";
}, "isHsla");
function el(e) {
  if (typeof e != "object") throw new tt(8);
  if (Ef(e)) return nr(e);
  if (wf(e)) return On(e);
  if (Tf(e)) return Sf(e);
  if (Cf(e)) return If(e);
  throw new tt(8);
}
a(el, "toColorString");
function tl(e, t, o) {
  return /* @__PURE__ */ a(function() {
    var n = o.concat(Array.prototype.slice.call(arguments));
    return n.length >= t ? e.apply(this, n) : tl(e, t, n);
  }, "fn");
}
a(tl, "curried");
function An(e) {
  return tl(e, e.length, []);
}
a(An, "curry");
function Dn(e, t, o) {
  return Math.max(e, Math.min(t, o));
}
a(Dn, "guard");
function _f(e, t) {
  if (t === "transparent") return t;
  var o = Ja(t);
  return el(U({}, o, {
    lightness: Dn(0, 1, o.lightness - parseFloat(e))
  }));
}
a(_f, "darken");
var kf = /* @__PURE__ */ An(_f), ir = kf;
function Of(e, t) {
  if (t === "transparent") return t;
  var o = Ja(t);
  return el(U({}, o, {
    lightness: Dn(0, 1, o.lightness + parseFloat(e))
  }));
}
a(Of, "lighten");
var Pf = /* @__PURE__ */ An(Of), po = Pf;
function Af(e, t) {
  if (t === "transparent") return t;
  var o = Pn(t), i = typeof o.alpha == "number" ? o.alpha : 1, n = U({}, o, {
    alpha: Dn(0, 1, +(i * 100 - parseFloat(e) * 100).toFixed(2) / 100)
  });
  return nr(n);
}
a(Af, "transparentize");
var Df = /* @__PURE__ */ An(Af), Ee = Df;

// src/manager/components/notifications/NotificationItem.tsx
var Mf = St({
  "0%": {
    opacity: 0,
    transform: "translateY(30px)"
  },
  "100%": {
    opacity: 1,
    transform: "translateY(0)"
  }
}), Lf = St({
  "0%": {
    width: "0%"
  },
  "100%": {
    width: "100%"
  }
}), ol = x.div(
  ({ theme: e }) => ({
    position: "relative",
    display: "flex",
    border: `1px solid ${e.appBorderColor}`,
    padding: "12px 6px 12px 12px",
    borderRadius: e.appBorderRadius + 1,
    alignItems: "center",
    animation: `${Mf} 500ms`,
    background: e.base === "light" ? "hsla(203, 50%, 20%, .97)" : "hsla(203, 30%, 95%, .97)",
    boxShadow: "0 2px 5px 0 rgba(0, 0, 0, 0.05), 0 5px 15px 0 rgba(0, 0, 0, 0.1)",
    color: e.color.inverseText,
    textDecoration: "none",
    overflow: "hidden",
    [Qe]: {
      boxShadow: `0 1px 2px 0 rgba(0, 0, 0, 0.05), 0px -5px 20px 10px ${e.background.app}`
    }
  }),
  ({ duration: e, theme: t }) => e && {
    "&::after": {
      content: '""',
      display: "block",
      position: "absolute",
      bottom: 0,
      left: 0,
      height: 3,
      background: t.color.secondary,
      animation: `${Lf} ${e}ms linear forwards reverse`
    }
  }
), rl = x(ol)({
  cursor: "pointer",
  border: "none",
  outline: "none",
  textAlign: "left",
  transition: "all 150ms ease-out",
  transform: "translate3d(0, 0, 0)",
  "&:hover": {
    transform: "translate3d(0, -3px, 0)",
    boxShadow: "0 1px 3px 0 rgba(30,167,253,0.5), 0 2px 5px 0 rgba(0,0,0,0.05), 0 5px 15px 0 rgba(0,0,0,0.1)"
  },
  "&:active": {
    transform: "translate3d(0, 0, 0)",
    boxShadow: "0 1px 3px 0 rgba(30,167,253,0.5), 0 2px 5px 0 rgba(0,0,0,0.05), 0 5px 15px 0 rgba(0,0,0,0.1)"
  },
  "&:focus": {
    boxShadow: "rgba(2,156,253,1) 0 0 0 1px inset, 0 1px 3px 0 rgba(30,167,253,0.5), 0 2px 5px 0 rgba(0,0,0,0.05), 0 5px 15px 0 rgba(0,0,0,0\
.1)"
  }
}), Nf = rl.withComponent("div"), Ff = rl.withComponent(Wo), Bf = x.div(() => ({
  display: "flex",
  marginRight: 10,
  alignItems: "center",
  svg: {
    width: 16,
    height: 16
  }
})), Hf = x.div(({ theme: e }) => ({
  width: "100%",
  display: "flex",
  flexDirection: "column",
  color: e.base === "dark" ? e.color.mediumdark : e.color.mediumlight
})), zf = x.div(({ theme: e, hasIcon: t }) => ({
  height: "100%",
  alignItems: "center",
  whiteSpace: "balance",
  overflow: "hidden",
  textOverflow: "ellipsis",
  fontSize: e.typography.size.s1,
  lineHeight: "16px",
  fontWeight: e.typography.weight.bold
})), Rf = x.div(({ theme: e }) => ({
  color: Ee(0.25, e.color.inverseText),
  fontSize: e.typography.size.s1 - 1,
  lineHeight: "14px",
  marginTop: 2,
  whiteSpace: "balance"
})), Mn = /* @__PURE__ */ a(({
  icon: e,
  content: { headline: t, subHeadline: o }
}) => {
  let i = Oe(), n = i.base === "dark" ? i.color.mediumdark : i.color.mediumlight;
  return /* @__PURE__ */ s.createElement(s.Fragment, null, !e || /* @__PURE__ */ s.createElement(Bf, null, s.isValidElement(e) ? e : typeof e ==
  "object" && "name" in e && /* @__PURE__ */ s.createElement(Ka, { icon: e.name, color: e.color || n })), /* @__PURE__ */ s.createElement(Hf,
  null, /* @__PURE__ */ s.createElement(zf, { title: t, hasIcon: !!e }, t), o && /* @__PURE__ */ s.createElement(Rf, null, o)));
}, "ItemContent"), Wf = x(ee)(({ theme: e }) => ({
  width: 28,
  alignSelf: "center",
  marginTop: 0,
  color: e.base === "light" ? "rgba(255,255,255,0.7)" : " #999999"
})), Ln = /* @__PURE__ */ a(({ onDismiss: e }) => /* @__PURE__ */ s.createElement(
  Wf,
  {
    title: "Dismiss notification",
    onClick: (t) => {
      t.preventDefault(), t.stopPropagation(), e();
    }
  },
  /* @__PURE__ */ s.createElement(Ao, { size: 12 })
), "DismissNotificationItem"), y_ = x.div({
  height: 48
}), jf = /* @__PURE__ */ a(({
  notification: { content: e, duration: t, link: o, onClear: i, onClick: n, id: r, icon: l },
  onDismissNotification: u,
  zIndex: c
}) => {
  let p = A(() => {
    u(r), i && i({ dismissed: !1, timeout: !0 });
  }, [r, u, i]), d = q(null);
  R(() => {
    if (t)
      return d.current = setTimeout(p, t), () => clearTimeout(d.current);
  }, [t, p]);
  let g = A(() => {
    clearTimeout(d.current), u(r), i && i({ dismissed: !0, timeout: !1 });
  }, [r, u, i]);
  return o ? /* @__PURE__ */ s.createElement(Ff, { to: o, duration: t, style: { zIndex: c } }, /* @__PURE__ */ s.createElement(Mn, { icon: l,
  content: e }), /* @__PURE__ */ s.createElement(Ln, { onDismiss: g })) : n ? /* @__PURE__ */ s.createElement(
    Nf,
    {
      duration: t,
      onClick: () => n({ onDismiss: g }),
      style: { zIndex: c }
    },
    /* @__PURE__ */ s.createElement(Mn, { icon: l, content: e }),
    /* @__PURE__ */ s.createElement(Ln, { onDismiss: g })
  ) : /* @__PURE__ */ s.createElement(ol, { duration: t, style: { zIndex: c } }, /* @__PURE__ */ s.createElement(Mn, { icon: l, content: e }),
  /* @__PURE__ */ s.createElement(Ln, { onDismiss: g }));
}, "NotificationItem"), nl = jf;

// src/manager/components/notifications/NotificationList.tsx
var sr = /* @__PURE__ */ a(({
  notifications: e,
  clearNotification: t
}) => {
  let { isMobile: o } = he();
  return /* @__PURE__ */ s.createElement(Vf, { isMobile: o }, e && e.map((i, n) => /* @__PURE__ */ s.createElement(
    nl,
    {
      key: i.id,
      onDismissNotification: (r) => t(r),
      notification: i,
      zIndex: e.length - n
    }
  )));
}, "NotificationList"), Vf = x.div(
  {
    zIndex: 200,
    "> * + *": {
      marginTop: 12
    },
    "&:empty": {
      display: "none"
    }
  },
  ({ isMobile: e }) => e && {
    position: "fixed",
    bottom: 40,
    margin: 20
  }
);

// src/manager/container/Notifications.tsx
var $f = /* @__PURE__ */ a(({ state: e, api: t }) => ({
  notifications: e.notifications,
  clearNotification: t.clearNotification
}), "mapper"), il = /* @__PURE__ */ a((e) => /* @__PURE__ */ s.createElement(me, { filter: $f }, (t) => /* @__PURE__ */ s.createElement(sr, {
...e, ...t })), "Notifications");

// src/manager/components/mobile/navigation/MobileAddonsDrawer.tsx
var Kf = x.div(({ theme: e }) => ({
  position: "relative",
  boxSizing: "border-box",
  width: "100%",
  background: e.background.content,
  height: "42vh",
  zIndex: 11,
  overflow: "hidden"
})), sl = /* @__PURE__ */ a(({ children: e }) => /* @__PURE__ */ s.createElement(Kf, null, e), "MobileAddonsDrawer");

// ../node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js
function _e(e, t) {
  if (e == null) return {};
  var o = {};
  for (var i in e) if ({}.hasOwnProperty.call(e, i)) {
    if (t.indexOf(i) >= 0) continue;
    o[i] = e[i];
  }
  return o;
}
a(_e, "_objectWithoutPropertiesLoose");

// global-externals:react-dom
var fo = __REACT_DOM__, { __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: B_, createPortal: H_, createRoot: z_, findDOMNode: R_, flushSync: mo,
hydrate: W_, hydrateRoot: j_, render: V_, unmountComponentAtNode: $_, unstable_batchedUpdates: K_, unstable_renderSubtreeIntoContainer: U_, version: q_ } = __REACT_DOM__;

// ../node_modules/react-transition-group/esm/config.js
var Nn = {
  disabled: !1
};

// ../node_modules/react-transition-group/esm/TransitionGroupContext.js
var Fn = s.createContext(null);

// ../node_modules/react-transition-group/esm/utils/reflow.js
var al = /* @__PURE__ */ a(function(t) {
  return t.scrollTop;
}, "forceReflow");

// ../node_modules/react-transition-group/esm/Transition.js
var ho = "unmounted", Ct = "exited", Tt = "entering", Jt = "entered", Bn = "exiting", lt = /* @__PURE__ */ function(e) {
  Xt(t, e);
  function t(i, n) {
    var r;
    r = e.call(this, i, n) || this;
    var l = n, u = l && !l.isMounting ? i.enter : i.appear, c;
    return r.appearStatus = null, i.in ? u ? (c = Ct, r.appearStatus = Tt) : c = Jt : i.unmountOnExit || i.mountOnEnter ? c = ho : c = Ct, r.
    state = {
      status: c
    }, r.nextCallback = null, r;
  }
  a(t, "Transition"), t.getDerivedStateFromProps = /* @__PURE__ */ a(function(n, r) {
    var l = n.in;
    return l && r.status === ho ? {
      status: Ct
    } : null;
  }, "getDerivedStateFromProps");
  var o = t.prototype;
  return o.componentDidMount = /* @__PURE__ */ a(function() {
    this.updateStatus(!0, this.appearStatus);
  }, "componentDidMount"), o.componentDidUpdate = /* @__PURE__ */ a(function(n) {
    var r = null;
    if (n !== this.props) {
      var l = this.state.status;
      this.props.in ? l !== Tt && l !== Jt && (r = Tt) : (l === Tt || l === Jt) && (r = Bn);
    }
    this.updateStatus(!1, r);
  }, "componentDidUpdate"), o.componentWillUnmount = /* @__PURE__ */ a(function() {
    this.cancelNextCallback();
  }, "componentWillUnmount"), o.getTimeouts = /* @__PURE__ */ a(function() {
    var n = this.props.timeout, r, l, u;
    return r = l = u = n, n != null && typeof n != "number" && (r = n.exit, l = n.enter, u = n.appear !== void 0 ? n.appear : l), {
      exit: r,
      enter: l,
      appear: u
    };
  }, "getTimeouts"), o.updateStatus = /* @__PURE__ */ a(function(n, r) {
    if (n === void 0 && (n = !1), r !== null)
      if (this.cancelNextCallback(), r === Tt) {
        if (this.props.unmountOnExit || this.props.mountOnEnter) {
          var l = this.props.nodeRef ? this.props.nodeRef.current : fo.findDOMNode(this);
          l && al(l);
        }
        this.performEnter(n);
      } else
        this.performExit();
    else this.props.unmountOnExit && this.state.status === Ct && this.setState({
      status: ho
    });
  }, "updateStatus"), o.performEnter = /* @__PURE__ */ a(function(n) {
    var r = this, l = this.props.enter, u = this.context ? this.context.isMounting : n, c = this.props.nodeRef ? [u] : [fo.findDOMNode(this),
    u], p = c[0], d = c[1], g = this.getTimeouts(), h = u ? g.appear : g.enter;
    if (!n && !l || Nn.disabled) {
      this.safeSetState({
        status: Jt
      }, function() {
        r.props.onEntered(p);
      });
      return;
    }
    this.props.onEnter(p, d), this.safeSetState({
      status: Tt
    }, function() {
      r.props.onEntering(p, d), r.onTransitionEnd(h, function() {
        r.safeSetState({
          status: Jt
        }, function() {
          r.props.onEntered(p, d);
        });
      });
    });
  }, "performEnter"), o.performExit = /* @__PURE__ */ a(function() {
    var n = this, r = this.props.exit, l = this.getTimeouts(), u = this.props.nodeRef ? void 0 : fo.findDOMNode(this);
    if (!r || Nn.disabled) {
      this.safeSetState({
        status: Ct
      }, function() {
        n.props.onExited(u);
      });
      return;
    }
    this.props.onExit(u), this.safeSetState({
      status: Bn
    }, function() {
      n.props.onExiting(u), n.onTransitionEnd(l.exit, function() {
        n.safeSetState({
          status: Ct
        }, function() {
          n.props.onExited(u);
        });
      });
    });
  }, "performExit"), o.cancelNextCallback = /* @__PURE__ */ a(function() {
    this.nextCallback !== null && (this.nextCallback.cancel(), this.nextCallback = null);
  }, "cancelNextCallback"), o.safeSetState = /* @__PURE__ */ a(function(n, r) {
    r = this.setNextCallback(r), this.setState(n, r);
  }, "safeSetState"), o.setNextCallback = /* @__PURE__ */ a(function(n) {
    var r = this, l = !0;
    return this.nextCallback = function(u) {
      l && (l = !1, r.nextCallback = null, n(u));
    }, this.nextCallback.cancel = function() {
      l = !1;
    }, this.nextCallback;
  }, "setNextCallback"), o.onTransitionEnd = /* @__PURE__ */ a(function(n, r) {
    this.setNextCallback(r);
    var l = this.props.nodeRef ? this.props.nodeRef.current : fo.findDOMNode(this), u = n == null && !this.props.addEndListener;
    if (!l || u) {
      setTimeout(this.nextCallback, 0);
      return;
    }
    if (this.props.addEndListener) {
      var c = this.props.nodeRef ? [this.nextCallback] : [l, this.nextCallback], p = c[0], d = c[1];
      this.props.addEndListener(p, d);
    }
    n != null && setTimeout(this.nextCallback, n);
  }, "onTransitionEnd"), o.render = /* @__PURE__ */ a(function() {
    var n = this.state.status;
    if (n === ho)
      return null;
    var r = this.props, l = r.children, u = r.in, c = r.mountOnEnter, p = r.unmountOnExit, d = r.appear, g = r.enter, h = r.exit, y = r.timeout,
    f = r.addEndListener, b = r.onEnter, S = r.onEntering, E = r.onEntered, m = r.onExit, v = r.onExiting, I = r.onExited, w = r.nodeRef, k = _e(
    r, ["children", "in", "mountOnEnter", "unmountOnExit", "appear", "enter", "exit", "timeout", "addEndListener", "onEnter", "onEntering", "\
onEntered", "onExit", "onExiting", "onExited", "nodeRef"]);
    return (
      // allows for nested Transitions
      /* @__PURE__ */ s.createElement(Fn.Provider, {
        value: null
      }, typeof l == "function" ? l(n, k) : s.cloneElement(s.Children.only(l), k))
    );
  }, "render"), t;
}(s.Component);
lt.contextType = Fn;
lt.propTypes = {};
function Zt() {
}
a(Zt, "noop");
lt.defaultProps = {
  in: !1,
  mountOnEnter: !1,
  unmountOnExit: !1,
  appear: !1,
  enter: !0,
  exit: !0,
  onEnter: Zt,
  onEntering: Zt,
  onEntered: Zt,
  onExit: Zt,
  onExiting: Zt,
  onExited: Zt
};
lt.UNMOUNTED = ho;
lt.EXITED = Ct;
lt.ENTERING = Tt;
lt.ENTERED = Jt;
lt.EXITING = Bn;
var _t = lt;

// src/manager/components/upgrade/UpgradeBlock.tsx
var ar = /* @__PURE__ */ a(({ onNavigateToWhatsNew: e }) => {
  let t = ne(), [o, i] = $("npm");
  return /* @__PURE__ */ s.createElement(Uf, null, /* @__PURE__ */ s.createElement("strong", null, "You are on Storybook ", t.getCurrentVersion().
  version), /* @__PURE__ */ s.createElement("p", null, "Run the following script to check for updates and upgrade to the latest version."), /* @__PURE__ */ s.
  createElement(qf, null, /* @__PURE__ */ s.createElement(Hn, { active: o === "npm", onClick: () => i("npm") }, "npm"), /* @__PURE__ */ s.createElement(
  Hn, { active: o === "yarn", onClick: () => i("yarn") }, "yarn"), /* @__PURE__ */ s.createElement(Hn, { active: o === "pnpm", onClick: () => i(
  "pnpm") }, "pnpm")), /* @__PURE__ */ s.createElement(Gf, null, o === "npm" ? "npx storybook@latest upgrade" : `${o} dlx storybook@latest u\
pgrade`), e && // eslint-disable-next-line jsx-a11y/anchor-is-valid
  /* @__PURE__ */ s.createElement(Ae, { onClick: e }, "See what's new in Storybook"));
}, "UpgradeBlock"), Uf = x.div(({ theme: e }) => ({
  border: "1px solid",
  borderRadius: 5,
  padding: 20,
  marginTop: 0,
  borderColor: e.appBorderColor,
  fontSize: e.typography.size.s2,
  width: "100%",
  [Qe]: {
    maxWidth: 400
  }
})), qf = x.div({
  display: "flex",
  gap: 2
}), Gf = x.pre(({ theme: e }) => ({
  background: e.base === "light" ? "rgba(0, 0, 0, 0.05)" : e.appBorderColor,
  fontSize: e.typography.size.s2 - 1,
  margin: "4px 0 16px"
})), Hn = x.button(({ theme: e, active: t }) => ({
  all: "unset",
  alignItems: "center",
  gap: 10,
  color: e.color.defaultText,
  fontSize: e.typography.size.s2 - 1,
  borderBottom: "2px solid transparent",
  borderBottomColor: t ? e.color.secondary : "none",
  padding: "0 10px 5px",
  marginBottom: "5px",
  cursor: "pointer"
}));

// src/manager/components/mobile/about/MobileAbout.tsx
var cl = /* @__PURE__ */ a(() => {
  let { isMobileAboutOpen: e, setMobileAboutOpen: t } = he(), o = q(null);
  return /* @__PURE__ */ s.createElement(
    _t,
    {
      nodeRef: o,
      in: e,
      timeout: 300,
      appear: !0,
      mountOnEnter: !0,
      unmountOnExit: !0
    },
    (i) => /* @__PURE__ */ s.createElement(Yf, { ref: o, state: i, transitionDuration: 300 }, /* @__PURE__ */ s.createElement(Zf, { onClick: () => t(
    !1), title: "Close about section" }, /* @__PURE__ */ s.createElement(ys, null), "Back"), /* @__PURE__ */ s.createElement(Qf, null, /* @__PURE__ */ s.
    createElement(ll, { href: "https://github.com/storybookjs/storybook", target: "_blank" }, /* @__PURE__ */ s.createElement(ul, null, /* @__PURE__ */ s.
    createElement(Mo, null), /* @__PURE__ */ s.createElement("span", null, "Github")), /* @__PURE__ */ s.createElement(st, { width: 12 })), /* @__PURE__ */ s.
    createElement(
      ll,
      {
        href: "https://storybook.js.org/docs/react/get-started/install/",
        target: "_blank"
      },
      /* @__PURE__ */ s.createElement(ul, null, /* @__PURE__ */ s.createElement(Ws, null), /* @__PURE__ */ s.createElement("span", null, "Do\
cumentation")),
      /* @__PURE__ */ s.createElement(st, { width: 12 })
    )), /* @__PURE__ */ s.createElement(ar, null), /* @__PURE__ */ s.createElement(Xf, null, "Open source software maintained by", " ", /* @__PURE__ */ s.
    createElement(Ae, { href: "https://chromatic.com", target: "_blank" }, "Chromatic"), " ", "and the", " ", /* @__PURE__ */ s.createElement(
    Ae, { href: "https://github.com/storybookjs/storybook/graphs/contributors" }, "Storybook Community")))
  );
}, "MobileAbout"), Yf = x.div(
  ({ theme: e, state: t, transitionDuration: o }) => ({
    position: "absolute",
    width: "100%",
    height: "100%",
    top: 0,
    left: 0,
    zIndex: 11,
    transition: `all ${o}ms ease-in-out`,
    overflow: "scroll",
    padding: "25px 10px 10px",
    color: e.color.defaultText,
    background: e.background.content,
    opacity: `${(() => {
      switch (t) {
        case "entering":
        case "entered":
          return 1;
        case "exiting":
        case "exited":
          return 0;
        default:
          return 0;
      }
    })()}`,
    transform: `${(() => {
      switch (t) {
        case "entering":
        case "entered":
          return "translateX(0)";
        case "exiting":
        case "exited":
          return "translateX(20px)";
        default:
          return "translateX(0)";
      }
    })()}`
  })
), Qf = x.div({
  marginTop: 20,
  marginBottom: 20
}), ll = x.a(({ theme: e }) => ({
  all: "unset",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  fontSize: e.typography.size.s2 - 1,
  height: 52,
  borderBottom: `1px solid ${e.appBorderColor}`,
  cursor: "pointer",
  padding: "0 10px",
  "&:last-child": {
    borderBottom: "none"
  }
})), ul = x.div(({ theme: e }) => ({
  display: "flex",
  alignItems: "center",
  fontSize: e.typography.size.s2 - 1,
  height: 40,
  gap: 5
})), Xf = x.div(({ theme: e }) => ({
  fontSize: e.typography.size.s2 - 1,
  marginTop: 30
})), Zf = x.button(({ theme: e }) => ({
  all: "unset",
  display: "flex",
  alignItems: "center",
  gap: 10,
  color: "currentColor",
  fontSize: e.typography.size.s2 - 1,
  padding: "0 10px"
}));

// src/manager/components/mobile/navigation/MobileMenuDrawer.tsx
var pl = /* @__PURE__ */ a(({ children: e }) => {
  let t = q(null), o = q(null), i = q(null), { isMobileMenuOpen: n, setMobileMenuOpen: r, isMobileAboutOpen: l, setMobileAboutOpen: u } = he();
  return /* @__PURE__ */ s.createElement(s.Fragment, null, /* @__PURE__ */ s.createElement(
    _t,
    {
      nodeRef: t,
      in: n,
      timeout: 300,
      mountOnEnter: !0,
      unmountOnExit: !0,
      onExited: () => u(!1)
    },
    (c) => /* @__PURE__ */ s.createElement(Jf, { ref: t, state: c }, /* @__PURE__ */ s.createElement(
      _t,
      {
        nodeRef: o,
        in: !l,
        timeout: 300
      },
      (p) => /* @__PURE__ */ s.createElement(em, { ref: o, state: p }, e)
    ), /* @__PURE__ */ s.createElement(cl, null))
  ), /* @__PURE__ */ s.createElement(
    _t,
    {
      nodeRef: i,
      in: n,
      timeout: 300,
      mountOnEnter: !0,
      unmountOnExit: !0
    },
    (c) => /* @__PURE__ */ s.createElement(
      tm,
      {
        ref: i,
        state: c,
        onClick: () => r(!1),
        "aria-label": "Close navigation menu"
      }
    )
  ));
}, "MobileMenuDrawer"), Jf = x.div(({ theme: e, state: t }) => ({
  position: "fixed",
  boxSizing: "border-box",
  width: "100%",
  background: e.background.content,
  height: "80%",
  bottom: 0,
  left: 0,
  zIndex: 11,
  borderRadius: "10px 10px 0 0",
  transition: `all ${300}ms ease-in-out`,
  overflow: "hidden",
  transform: `${t === "entering" || t === "entered" ? "translateY(0)" : t === "exiting" || t === "exited" ? "translateY(100%)" : "translateY\
(0)"}`
})), em = x.div(({ theme: e, state: t }) => ({
  position: "absolute",
  width: "100%",
  height: "100%",
  top: 0,
  left: 0,
  zIndex: 1,
  transition: `all ${300}ms ease-in-out`,
  overflow: "hidden",
  opacity: `${t === "entered" || t === "entering" ? 1 : t === "exiting" || t === "exited" ? 0 : 1}`,
  transform: `${(() => {
    switch (t) {
      case "entering":
      case "entered":
        return "translateX(0)";
      case "exiting":
      case "exited":
        return "translateX(-20px)";
      default:
        return "translateX(0)";
    }
  })()}`
})), tm = x.div(({ state: e }) => ({
  position: "fixed",
  boxSizing: "border-box",
  background: "rgba(0, 0, 0, 0.5)",
  top: 0,
  bottom: 0,
  right: 0,
  left: 0,
  zIndex: 10,
  transition: `all ${300}ms ease-in-out`,
  cursor: "pointer",
  opacity: `${(() => {
    switch (e) {
      case "entering":
      case "entered":
        return 1;
      case "exiting":
      case "exited":
        return 0;
      default:
        return 0;
    }
  })()}`,
  "&:hover": {
    background: "rgba(0, 0, 0, 0.6)"
  }
}));

// src/manager/components/mobile/navigation/MobileNavigation.tsx
function om(e, t) {
  let o = { ...e || {} };
  return Object.values(t).forEach((i) => {
    i.index && Object.assign(o, i.index);
  }), o;
}
a(om, "combineIndexes");
var rm = /* @__PURE__ */ a(() => {
  let { index: e, refs: t } = Me(), o = ne(), i = o.getCurrentStoryData();
  if (!i)
    return "";
  let n = om(e, t || {}), r = i.renderLabel?.(i, o) || i.name, l = n[i.id];
  for (; l && "parent" in l && l.parent && n[l.parent] && r.length < 24; )
    l = n[l.parent], r = `${l.renderLabel?.(l, o) || l.name}/${r}`;
  return r;
}, "useFullStoryName"), dl = /* @__PURE__ */ a(({ menu: e, panel: t, showPanel: o }) => {
  let { isMobileMenuOpen: i, isMobilePanelOpen: n, setMobileMenuOpen: r, setMobilePanelOpen: l } = he(), u = rm();
  return /* @__PURE__ */ s.createElement(nm, null, /* @__PURE__ */ s.createElement(pl, null, e), n ? /* @__PURE__ */ s.createElement(sl, null,
  t) : /* @__PURE__ */ s.createElement(im, { className: "sb-bar" }, /* @__PURE__ */ s.createElement(sm, { onClick: () => r(!i), title: "Open\
 navigation menu" }, /* @__PURE__ */ s.createElement(No, null), /* @__PURE__ */ s.createElement(am, null, u)), o && /* @__PURE__ */ s.createElement(
  ee, { onClick: () => l(!0), title: "Open addon panel" }, /* @__PURE__ */ s.createElement(bs, null))));
}, "MobileNavigation"), nm = x.div(({ theme: e }) => ({
  bottom: 0,
  left: 0,
  width: "100%",
  zIndex: 10,
  background: e.barBg,
  borderTop: `1px solid ${e.appBorderColor}`
})), im = x.div({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  width: "100%",
  height: 40,
  padding: "0 6px"
}), sm = x.button(({ theme: e }) => ({
  all: "unset",
  display: "flex",
  alignItems: "center",
  gap: 10,
  color: e.barTextColor,
  fontSize: `${e.typography.size.s2 - 1}px`,
  padding: "0 7px",
  fontWeight: e.typography.weight.bold,
  WebkitLineClamp: 1,
  "> svg": {
    width: 14,
    height: 14,
    flexShrink: 0
  }
})), am = x.p({
  display: "-webkit-box",
  WebkitLineClamp: 1,
  WebkitBoxOrient: "vertical",
  overflow: "hidden"
});

// src/manager/components/layout/useDragging.ts
var fl = 30, lr = 240, ur = 270, ml = 0.9;
function hl(e, t, o) {
  return Math.min(Math.max(e, t), o);
}
a(hl, "clamp");
function gl(e, t, o) {
  return t + (o - t) * e;
}
a(gl, "interpolate");
function yl({
  setState: e,
  isPanelShown: t,
  isDesktop: o
}) {
  let i = q(null), n = q(null);
  return R(() => {
    let r = i.current, l = n.current, u = document.querySelector("#storybook-preview-wrapper"), c = null, p = /* @__PURE__ */ a((h) => {
      h.preventDefault(), e((y) => ({
        ...y,
        isDragging: !0
      })), h.currentTarget === r ? c = r : h.currentTarget === l && (c = l), window.addEventListener("mousemove", g), window.addEventListener(
      "mouseup", d), u && (u.style.pointerEvents = "none");
    }, "onDragStart"), d = /* @__PURE__ */ a((h) => {
      e((y) => c === l && y.navSize < lr && y.navSize > 0 ? {
        ...y,
        isDragging: !1,
        navSize: lr
      } : c === r && y.panelPosition === "right" && y.rightPanelWidth < ur && y.rightPanelWidth > 0 ? {
        ...y,
        isDragging: !1,
        rightPanelWidth: ur
      } : {
        ...y,
        isDragging: !1
      }), window.removeEventListener("mousemove", g), window.removeEventListener("mouseup", d), u?.removeAttribute("style"), c = null;
    }, "onDragEnd"), g = /* @__PURE__ */ a((h) => {
      if (h.buttons === 0) {
        d(h);
        return;
      }
      e((y) => {
        if (c === l) {
          let f = h.clientX;
          return f === y.navSize ? y : f <= fl ? {
            ...y,
            navSize: 0
          } : f <= lr ? {
            ...y,
            navSize: gl(ml, f, lr)
          } : {
            ...y,
            // @ts-expect-error (non strict)
            navSize: hl(f, 0, h.view.innerWidth)
          };
        }
        if (c === r) {
          let f = y.panelPosition === "bottom" ? "bottomPanelHeight" : "rightPanelWidth", b = y.panelPosition === "bottom" ? (
            // @ts-expect-error (non strict)
            h.view.innerHeight - h.clientY
          ) : (
            // @ts-expect-error (non strict)
            h.view.innerWidth - h.clientX
          );
          if (b === y[f])
            return y;
          if (b <= fl)
            return {
              ...y,
              [f]: 0
            };
          if (y.panelPosition === "right" && b <= ur)
            return {
              ...y,
              [f]: gl(
                ml,
                b,
                ur
              )
            };
          let S = (
            // @ts-expect-error (non strict)
            y.panelPosition === "bottom" ? h.view.innerHeight : h.view.innerWidth
          );
          return {
            ...y,
            [f]: hl(b, 0, S)
          };
        }
        return y;
      });
    }, "onDrag");
    return r?.addEventListener("mousedown", p), l?.addEventListener("mousedown", p), () => {
      r?.removeEventListener("mousedown", p), l?.removeEventListener("mousedown", p), u?.removeAttribute("style");
    };
  }, [
    // we need to rerun this effect when the panel is shown/hidden or when changing between mobile/desktop to re-attach the event listeners
    t,
    o,
    e
  ]), { panelResizerRef: i, sidebarResizerRef: n };
}
a(yl, "useDragging");

// src/manager/components/layout/Layout.tsx
var lm = 100, bl = /* @__PURE__ */ a((e, t) => e.navSize === t.navSize && e.bottomPanelHeight === t.bottomPanelHeight && e.rightPanelWidth ===
t.rightPanelWidth && e.panelPosition === t.panelPosition, "layoutStateIsEqual"), um = /* @__PURE__ */ a(({
  managerLayoutState: e,
  setManagerLayoutState: t,
  isDesktop: o,
  hasTab: i
}) => {
  let n = s.useRef(e), [r, l] = $({
    ...e,
    isDragging: !1
  });
  R(() => {
    r.isDragging || // don't interrupt user's drag
    bl(e, n.current) || (n.current = e, l((f) => ({ ...f, ...e })));
  }, [r.isDragging, e, l]), dt(() => {
    if (r.isDragging || // wait with syncing managerLayoutState until user is done dragging
    bl(e, r))
      return;
    let f = {
      navSize: r.navSize,
      bottomPanelHeight: r.bottomPanelHeight,
      rightPanelWidth: r.rightPanelWidth
    };
    n.current = {
      ...n.current,
      ...f
    }, t(f);
  }, [r, t]);
  let u = e.viewMode !== "story" && e.viewMode !== "docs", c = e.viewMode === "story" && !i, { panelResizerRef: p, sidebarResizerRef: d } = yl(
  {
    setState: l,
    isPanelShown: c,
    isDesktop: o
  }), { navSize: g, rightPanelWidth: h, bottomPanelHeight: y } = r.isDragging ? r : e;
  return {
    navSize: g,
    rightPanelWidth: h,
    bottomPanelHeight: y,
    panelPosition: e.panelPosition,
    panelResizerRef: p,
    sidebarResizerRef: d,
    showPages: u,
    showPanel: c,
    isDragging: r.isDragging
  };
}, "useLayoutSyncingState"), xl = /* @__PURE__ */ a(({ managerLayoutState: e, setManagerLayoutState: t, hasTab: o, ...i }) => {
  let { isDesktop: n, isMobile: r } = he(), {
    navSize: l,
    rightPanelWidth: u,
    bottomPanelHeight: c,
    panelPosition: p,
    panelResizerRef: d,
    sidebarResizerRef: g,
    showPages: h,
    showPanel: y,
    isDragging: f
  } = um({ managerLayoutState: e, setManagerLayoutState: t, isDesktop: n, hasTab: o });
  return /* @__PURE__ */ s.createElement(
    cm,
    {
      navSize: l,
      rightPanelWidth: u,
      bottomPanelHeight: c,
      panelPosition: e.panelPosition,
      isDragging: f,
      viewMode: e.viewMode,
      showPanel: y
    },
    h && /* @__PURE__ */ s.createElement(fm, null, i.slotPages),
    /* @__PURE__ */ s.createElement(pa, { path: /(^\/story|docs|onboarding\/|^\/$)/, startsWith: !1 }, ({ match: b }) => /* @__PURE__ */ s.createElement(
    dm, { shown: !!b }, i.slotMain)),
    n && /* @__PURE__ */ s.createElement(s.Fragment, null, /* @__PURE__ */ s.createElement(pm, null, /* @__PURE__ */ s.createElement(vl, { ref: g }),
    i.slotSidebar), y && /* @__PURE__ */ s.createElement(mm, { position: p }, /* @__PURE__ */ s.createElement(
      vl,
      {
        orientation: p === "bottom" ? "horizontal" : "vertical",
        position: p === "bottom" ? "left" : "right",
        ref: d
      }
    ), i.slotPanel)),
    r && /* @__PURE__ */ s.createElement(s.Fragment, null, /* @__PURE__ */ s.createElement(il, null), /* @__PURE__ */ s.createElement(
      dl,
      {
        menu: i.slotSidebar,
        panel: i.slotPanel,
        showPanel: y
      }
    ))
  );
}, "Layout"), cm = x.div(
  ({ navSize: e, rightPanelWidth: t, bottomPanelHeight: o, viewMode: i, panelPosition: n, showPanel: r }) => ({
    width: "100%",
    height: ["100vh", "100dvh"],
    // This array is a special Emotion syntax to set a fallback if 100dvh is not supported
    overflow: "hidden",
    display: "flex",
    flexDirection: "column",
    [Qe]: {
      display: "grid",
      gap: 0,
      gridTemplateColumns: `minmax(0, ${e}px) minmax(${lm}px, 1fr) minmax(0, ${t}px)`,
      gridTemplateRows: `1fr minmax(0, ${o}px)`,
      gridTemplateAreas: i === "docs" || !r ? `"sidebar content content"
                  "sidebar content content"` : n === "right" ? `"sidebar content panel"
                  "sidebar content panel"` : `"sidebar content content"
                "sidebar panel   panel"`
    }
  })
), pm = x.div(({ theme: e }) => ({
  backgroundColor: e.background.app,
  gridArea: "sidebar",
  position: "relative",
  borderRight: `1px solid ${e.color.border}`
})), dm = x.div(({ theme: e, shown: t }) => ({
  flex: 1,
  position: "relative",
  backgroundColor: e.background.content,
  display: t ? "grid" : "none",
  // This is needed to make the content container fill the available space
  overflow: "auto",
  [Qe]: {
    flex: "auto",
    gridArea: "content"
  }
})), fm = x.div(({ theme: e }) => ({
  gridRowStart: "sidebar-start",
  gridRowEnd: "-1",
  gridColumnStart: "sidebar-end",
  gridColumnEnd: "-1",
  backgroundColor: e.background.content,
  zIndex: 1
})), mm = x.div(
  ({ theme: e, position: t }) => ({
    gridArea: "panel",
    position: "relative",
    backgroundColor: e.background.content,
    borderTop: t === "bottom" ? `1px solid ${e.color.border}` : void 0,
    borderLeft: t === "right" ? `1px solid ${e.color.border}` : void 0
  })
), vl = x.div(
  ({ theme: e }) => ({
    position: "absolute",
    opacity: 0,
    transition: "opacity 0.2s ease-in-out",
    zIndex: 100,
    "&:after": {
      content: '""',
      display: "block",
      backgroundColor: e.color.secondary
    },
    "&:hover": {
      opacity: 1
    }
  }),
  ({ orientation: e = "vertical", position: t = "left" }) => e === "vertical" ? {
    width: t === "left" ? 10 : 13,
    height: "100%",
    top: 0,
    right: t === "left" ? "-7px" : void 0,
    left: t === "right" ? "-7px" : void 0,
    "&:after": {
      width: 1,
      height: "100%",
      marginLeft: t === "left" ? 3 : 6
    },
    "&:hover": {
      cursor: "col-resize"
    }
  } : {
    width: "100%",
    height: "13px",
    top: "-7px",
    left: 0,
    "&:after": {
      width: "100%",
      height: 1,
      marginTop: 6
    },
    "&:hover": {
      cursor: "row-resize"
    }
  }
);

// global-externals:@storybook/core/types
var rk = __STORYBOOK_TYPES__, { Addon_TypesEnum: Ce } = __STORYBOOK_TYPES__;

// src/manager/container/Panel.tsx
var Vn = Be(cr(), 1);

// src/manager/components/panel/Panel.tsx
var jn = class jn extends Ne {
  constructor(t) {
    super(t), this.state = { hasError: !1 };
  }
  componentDidCatch(t, o) {
    this.setState({ hasError: !0 }), console.error(t, o);
  }
  // @ts-expect-error (we know this is broken)
  render() {
    let { hasError: t } = this.state, { children: o } = this.props;
    return t ? /* @__PURE__ */ s.createElement("h1", null, "Something went wrong.") : o;
  }
};
a(jn, "SafeTab");
var Rn = jn, Wn = s.memo(
  ({
    panels: e,
    shortcuts: t,
    actions: o,
    selectedPanel: i = null,
    panelPosition: n = "right",
    absolute: r = !0
  }) => {
    let { isDesktop: l, setMobilePanelOpen: u } = he();
    return /* @__PURE__ */ s.createElement(
      qa,
      {
        absolute: r,
        ...i && e[i] ? { selected: i } : {},
        menuName: "Addons",
        actions: o,
        showToolsWhenEmpty: !0,
        emptyState: /* @__PURE__ */ s.createElement(
          Va,
          {
            title: "Storybook add-ons",
            description: /* @__PURE__ */ s.createElement(s.Fragment, null, "Integrate your tools with Storybook to connect workflows and unl\
ock advanced features."),
            footer: /* @__PURE__ */ s.createElement(Ae, { href: "https://storybook.js.org/integrations", target: "_blank", withArrow: !0 }, /* @__PURE__ */ s.
            createElement(Kt, null), " Explore integrations catalog")
          }
        ),
        tools: /* @__PURE__ */ s.createElement(hm, null, l ? /* @__PURE__ */ s.createElement(s.Fragment, null, /* @__PURE__ */ s.createElement(
          ee,
          {
            key: "position",
            onClick: o.togglePosition,
            title: `Change addon orientation [${Ye(
              t.panelPosition
            )}]`
          },
          n === "bottom" ? /* @__PURE__ */ s.createElement(Bo, null) : /* @__PURE__ */ s.createElement(Po, null)
        ), /* @__PURE__ */ s.createElement(
          ee,
          {
            key: "visibility",
            onClick: o.toggleVisibility,
            title: `Hide addons [${Ye(t.togglePanel)}]`
          },
          /* @__PURE__ */ s.createElement(qe, null)
        )) : /* @__PURE__ */ s.createElement(ee, { onClick: () => u(!1), title: "Close addon panel" }, /* @__PURE__ */ s.createElement(qe, null))),
        id: "storybook-panel-root"
      },
      Object.entries(e).map(([c, p]) => (
        // @ts-expect-error (we know this is broken)
        /* @__PURE__ */ s.createElement(Rn, { key: c, id: c, title: typeof p.title == "function" ? /* @__PURE__ */ s.createElement(p.title, null) :
        p.title }, p.render)
      ))
    );
  }
);
Wn.displayName = "AddonPanel";
var hm = x.div({
  display: "flex",
  alignItems: "center",
  gap: 6
});

// src/manager/container/Panel.tsx
var gm = (0, Vn.default)(1)((e) => ({
  onSelect: /* @__PURE__ */ a((t) => e.setSelectedPanel(t), "onSelect"),
  toggleVisibility: /* @__PURE__ */ a(() => e.togglePanel(), "toggleVisibility"),
  togglePosition: /* @__PURE__ */ a(() => e.togglePanelPosition(), "togglePosition")
})), ym = (0, Vn.default)(1)((e, t) => {
  let o = e.getElements(Ce.PANEL);
  if (!o || !t || t.type !== "story")
    return o;
  let { parameters: i } = t, n = {};
  return Object.entries(o).forEach(([r, l]) => {
    let { paramKey: u } = l;
    u && i && i[u] && i[u].disable || l.disabled === !0 || typeof l.disabled == "function" && l.disabled(i) || (n[r] = l);
  }), n;
}), bm = /* @__PURE__ */ a(({ state: e, api: t }) => ({
  panels: ym(t, t.getCurrentStoryData()),
  selectedPanel: t.getSelectedPanel(),
  panelPosition: e.layout.panelPosition,
  actions: gm(t),
  shortcuts: t.getShortcutKeys()
}), "mapper"), vm = /* @__PURE__ */ a((e) => /* @__PURE__ */ s.createElement(me, { filter: bm }, (t) => /* @__PURE__ */ s.createElement(Wn, {
...e, ...t })), "Panel"), Sl = vm;

// src/manager/container/Preview.tsx
var yo = Be(cr(), 1);

// src/manager/components/preview/Iframe.tsx
var xm = x.iframe(({ theme: e }) => ({
  backgroundColor: e.background.preview,
  display: "block",
  boxSizing: "content-box",
  height: "100%",
  width: "100%",
  border: "0 none",
  transition: "background-position 0s, visibility 0s",
  backgroundPosition: "-1px -1px, -1px -1px, -1px -1px, -1px -1px",
  margin: "auto",
  boxShadow: "0 0 100px 100vw rgba(0,0,0,0.5)"
}));
function wl(e) {
  let { active: t, id: o, title: i, src: n, allowFullScreen: r, scale: l, ...u } = e, c = s.useRef(null);
  return /* @__PURE__ */ s.createElement(Ga.IFrame, { scale: l, active: t, iFrameRef: c }, /* @__PURE__ */ s.createElement(
    xm,
    {
      "data-is-storybook": t ? "true" : "false",
      onLoad: (p) => p.currentTarget.setAttribute("data-is-loaded", "true"),
      id: o,
      title: i,
      src: n,
      allow: "clipboard-write;",
      allowFullScreen: r,
      ref: c,
      ...u
    }
  ));
}
a(wl, "IFrame");

// src/manager/components/preview/utils/stringifyQueryParams.tsx
var Fl = Be(Nl(), 1);
var Bl = /* @__PURE__ */ a((e) => {
  let t = (0, Fl.stringify)(e);
  return t === "" ? "" : `&${t}`;
}, "stringifyQueryParams");

// src/manager/components/preview/FramesRenderer.tsx
var Um = /* @__PURE__ */ a((e, t) => e && t[e] ? `storybook-ref-${e}` : "storybook-preview-iframe", "getActive"), qm = x(fe)(({ theme: e }) => ({
  display: "none",
  "@media (min-width: 600px)": {
    position: "absolute",
    display: "block",
    top: 10,
    right: 15,
    padding: "10px 15px",
    fontSize: e.typography.size.s1,
    transform: "translateY(-100px)",
    "&:focus": {
      transform: "translateY(0)",
      zIndex: 1
    }
  }
})), Gm = /* @__PURE__ */ a(({ api: e, state: t }) => ({
  isFullscreen: e.getIsFullscreen(),
  isNavShown: e.getIsNavShown(),
  selectedStoryId: t.storyId
}), "whenSidebarIsVisible"), Ym = {
  '#root [data-is-storybook="false"]': {
    display: "none"
  },
  '#root [data-is-storybook="true"]': {
    display: "block"
  }
}, Hl = /* @__PURE__ */ a(({
  refs: e,
  scale: t,
  viewMode: o = "story",
  refId: i,
  queryParams: n = {},
  baseUrl: r,
  storyId: l = "*"
}) => {
  let u = e[i]?.version, c = Bl({
    ...n,
    ...u && { version: u }
  }), p = Um(i, e), { current: d } = q({}), g = Object.values(e).filter((h) => h.type === "auto-inject" || h.id === i, {});
  return d["storybook-preview-iframe"] || (d["storybook-preview-iframe"] = Qt(r, l, {
    ...n,
    ...u && { version: u },
    viewMode: o
  })), g.forEach((h) => {
    let y = `storybook-ref-${h.id}`, f = d[y]?.split("/iframe.html")[0];
    if (!f || h.url !== f) {
      let b = `${h.url}/iframe.html?id=${l}&viewMode=${o}&refId=${h.id}${c}`;
      d[y] = b;
    }
  }), /* @__PURE__ */ s.createElement(we, null, /* @__PURE__ */ s.createElement(Ut, { styles: Ym }), /* @__PURE__ */ s.createElement(me, { filter: Gm },
  ({ isFullscreen: h, isNavShown: y, selectedStoryId: f }) => h || !y || !f ? null : /* @__PURE__ */ s.createElement(qm, { asChild: !0 }, /* @__PURE__ */ s.
  createElement("a", { href: `#${f}`, tabIndex: 0, title: "Skip to sidebar" }, "Skip to sidebar"))), Object.entries(d).map(([h, y]) => /* @__PURE__ */ s.
  createElement(we, { key: h }, /* @__PURE__ */ s.createElement(
    wl,
    {
      active: h === p,
      key: h,
      id: h,
      title: h,
      src: y,
      allowFullScreen: !0,
      scale: t
    }
  ))));
}, "FramesRenderer");

// src/manager/components/preview/tools/addons.tsx
var Qm = /* @__PURE__ */ a(({ api: e, state: t }) => ({
  isVisible: e.getIsPanelShown(),
  singleStory: t.singleStory,
  panelPosition: t.layout.panelPosition,
  toggle: /* @__PURE__ */ a(() => e.togglePanel(), "toggle")
}), "menuMapper"), zl = {
  title: "addons",
  id: "addons",
  type: be.TOOL,
  match: /* @__PURE__ */ a(({ viewMode: e, tabId: t }) => e === "story" && !t, "match"),
  render: /* @__PURE__ */ a(() => /* @__PURE__ */ s.createElement(me, { filter: Qm }, ({ isVisible: e, toggle: t, singleStory: o, panelPosition: i }) => !o &&
  !e && /* @__PURE__ */ s.createElement(s.Fragment, null, /* @__PURE__ */ s.createElement(ee, { "aria-label": "Show addons", key: "addons", onClick: t,
  title: "Show addons" }, i === "bottom" ? /* @__PURE__ */ s.createElement(Po, null) : /* @__PURE__ */ s.createElement(Bo, null)))), "render")
};

// src/manager/components/preview/tools/copy.tsx
var Kl = Be($l(), 1);
var { PREVIEW_URL: th, document: oh } = ie, rh = /* @__PURE__ */ a(({ state: e }) => {
  let { storyId: t, refId: o, refs: i } = e, { location: n } = oh, r = i[o], l = `${n.origin}${n.pathname}`;
  return l.endsWith("/") || (l += "/"), {
    refId: o,
    baseUrl: r ? `${r.url}/iframe.html` : th || `${l}iframe.html`,
    storyId: t,
    queryParams: e.customQueryParams
  };
}, "copyMapper"), Ul = {
  title: "copy",
  id: "copy",
  type: be.TOOL,
  match: /* @__PURE__ */ a(({ viewMode: e, tabId: t }) => e === "story" && !t, "match"),
  render: /* @__PURE__ */ a(() => /* @__PURE__ */ s.createElement(me, { filter: rh }, ({ baseUrl: e, storyId: t, queryParams: o }) => t ? /* @__PURE__ */ s.
  createElement(
    ee,
    {
      key: "copy",
      onClick: () => (0, Kl.default)(Qt(e, t, o)),
      title: "Copy canvas link"
    },
    /* @__PURE__ */ s.createElement(Ds, null)
  ) : null), "render")
};

// src/manager/components/preview/tools/eject.tsx
var { PREVIEW_URL: nh } = ie, ih = /* @__PURE__ */ a(({ state: e }) => {
  let { storyId: t, refId: o, refs: i } = e, n = i[o];
  return {
    refId: o,
    baseUrl: n ? `${n.url}/iframe.html` : nh || "iframe.html",
    storyId: t,
    queryParams: e.customQueryParams
  };
}, "ejectMapper"), ql = {
  title: "eject",
  id: "eject",
  type: be.TOOL,
  match: /* @__PURE__ */ a(({ viewMode: e, tabId: t }) => e === "story" && !t, "match"),
  render: /* @__PURE__ */ a(() => /* @__PURE__ */ s.createElement(me, { filter: ih }, ({ baseUrl: e, storyId: t, queryParams: o }) => t ? /* @__PURE__ */ s.
  createElement(ee, { key: "opener", asChild: !0 }, /* @__PURE__ */ s.createElement(
    "a",
    {
      href: Qt(e, t, o),
      target: "_blank",
      rel: "noopener noreferrer",
      title: "Open canvas in new tab"
    },
    /* @__PURE__ */ s.createElement(st, null)
  )) : null), "render")
};

// src/manager/components/preview/tools/remount.tsx
var sh = x(ee)(({ theme: e, animating: t, disabled: o }) => ({
  opacity: o ? 0.5 : 1,
  svg: {
    animation: t ? `${e.animation.rotate360} 1000ms ease-out` : void 0
  }
})), ah = /* @__PURE__ */ a(({ api: e, state: t }) => {
  let { storyId: o } = t;
  return {
    storyId: o,
    remount: /* @__PURE__ */ a(() => e.emit(ln, { storyId: t.storyId }), "remount"),
    api: e
  };
}, "menuMapper"), Gl = {
  title: "remount",
  id: "remount",
  type: be.TOOL,
  match: /* @__PURE__ */ a(({ viewMode: e, tabId: t }) => e === "story" && !t, "match"),
  render: /* @__PURE__ */ a(() => /* @__PURE__ */ s.createElement(me, { filter: ah }, ({ remount: e, storyId: t, api: o }) => {
    let [i, n] = $(!1), r = /* @__PURE__ */ a(() => {
      t && e();
    }, "remountComponent");
    return o.on(ln, () => {
      n(!0);
    }), /* @__PURE__ */ s.createElement(
      sh,
      {
        key: "remount",
        title: "Remount component",
        onClick: r,
        onAnimationEnd: () => n(!1),
        animating: i,
        disabled: !t
      },
      /* @__PURE__ */ s.createElement(ft, null)
    );
  }), "render")
};

// src/manager/components/preview/tools/zoom.tsx
var go = 1, Yl = jt({ value: go, set: /* @__PURE__ */ a((e) => {
}, "set") }), Xn = class Xn extends Ne {
  constructor() {
    super(...arguments);
    this.state = {
      value: go
    };
    this.set = /* @__PURE__ */ a((o) => this.setState({ value: o }), "set");
  }
  render() {
    let { children: o, shouldScale: i } = this.props, { set: n } = this, { value: r } = this.state;
    return /* @__PURE__ */ s.createElement(Yl.Provider, { value: { value: i ? r : go, set: n } }, o);
  }
};
a(Xn, "ZoomProvider");
var hr = Xn, { Consumer: Qn } = Yl, lh = no(/* @__PURE__ */ a(function({ zoomIn: t, zoomOut: o, reset: i }) {
  return /* @__PURE__ */ s.createElement(s.Fragment, null, /* @__PURE__ */ s.createElement(ee, { key: "zoomin", onClick: t, title: "Zoom in" },
  /* @__PURE__ */ s.createElement(Ks, null)), /* @__PURE__ */ s.createElement(ee, { key: "zoomout", onClick: o, title: "Zoom out" }, /* @__PURE__ */ s.
  createElement(Us, null)), /* @__PURE__ */ s.createElement(ee, { key: "zoomreset", onClick: i, title: "Reset zoom" }, /* @__PURE__ */ s.createElement(
  qs, null)));
}, "Zoom"));
var uh = no(/* @__PURE__ */ a(function({
  set: t,
  value: o
}) {
  let i = A(
    (l) => {
      l.preventDefault(), t(0.8 * o);
    },
    [t, o]
  ), n = A(
    (l) => {
      l.preventDefault(), t(1.25 * o);
    },
    [t, o]
  ), r = A(
    (l) => {
      l.preventDefault(), t(go);
    },
    [t, go]
  );
  return /* @__PURE__ */ s.createElement(lh, { key: "zoom", zoomIn: i, zoomOut: n, reset: r });
}, "ZoomWrapper"));
function ch() {
  return /* @__PURE__ */ s.createElement(s.Fragment, null, /* @__PURE__ */ s.createElement(Qn, null, ({ set: e, value: t }) => /* @__PURE__ */ s.
  createElement(uh, { set: e, value: t })), /* @__PURE__ */ s.createElement(Yt, null));
}
a(ch, "ZoomToolRenderer");
var Ql = {
  title: "zoom",
  id: "zoom",
  type: be.TOOL,
  match: /* @__PURE__ */ a(({ viewMode: e, tabId: t }) => e === "story" && !t, "match"),
  render: ch
};

// src/manager/components/preview/Toolbar.tsx
var ph = /* @__PURE__ */ a(({ api: e, state: t }) => ({
  toggle: e.toggleFullscreen,
  isFullscreen: e.getIsFullscreen(),
  shortcut: Ye(e.getShortcutKeys().fullScreen),
  hasPanel: Object.keys(e.getElements(Ce.PANEL)).length > 0,
  singleStory: t.singleStory
}), "fullScreenMapper"), Zl = {
  title: "fullscreen",
  id: "fullscreen",
  type: be.TOOL,
  // @ts-expect-error (non strict)
  match: /* @__PURE__ */ a((e) => ["story", "docs"].includes(e.viewMode), "match"),
  render: /* @__PURE__ */ a(() => {
    let { isMobile: e } = he();
    return e ? null : /* @__PURE__ */ s.createElement(me, { filter: ph }, ({ toggle: t, isFullscreen: o, shortcut: i, hasPanel: n, singleStory: r }) => (!r ||
    r && n) && /* @__PURE__ */ s.createElement(
      ee,
      {
        key: "full",
        onClick: t,
        title: `${o ? "Exit full screen" : "Go full screen"} [${i}]`,
        "aria-label": o ? "Exit full screen" : "Go full screen"
      },
      o ? /* @__PURE__ */ s.createElement(qe, null) : /* @__PURE__ */ s.createElement(Cs, null)
    ));
  }, "render")
};
var Jl = s.memo(/* @__PURE__ */ a(function({
  isShown: t,
  tools: o,
  toolsExtra: i,
  tabs: n,
  tabId: r,
  api: l
}) {
  return n || o || i ? /* @__PURE__ */ s.createElement(fh, { className: "sb-bar", key: "toolbar", shown: t, "data-test-id": "sb-preview-tool\
bar" }, /* @__PURE__ */ s.createElement(mh, null, /* @__PURE__ */ s.createElement(eu, null, n.length > 1 ? /* @__PURE__ */ s.createElement(we,
  null, /* @__PURE__ */ s.createElement(Jo, { key: "tabs" }, n.map((u, c) => /* @__PURE__ */ s.createElement(
    er,
    {
      disabled: !!u.disabled,
      active: u.id === r || u.id === "canvas" && !r,
      onClick: () => {
        l.applyQueryParams({ tab: u.id === "canvas" ? void 0 : u.id });
      },
      key: u.id || `tab-${c}`
    },
    u.title
  ))), /* @__PURE__ */ s.createElement(Yt, null)) : null, /* @__PURE__ */ s.createElement(Xl, { key: "left", list: o })), /* @__PURE__ */ s.
  createElement(hh, null, /* @__PURE__ */ s.createElement(Xl, { key: "right", list: i })))) : null;
}, "ToolbarComp")), Xl = s.memo(/* @__PURE__ */ a(function({ list: t }) {
  return /* @__PURE__ */ s.createElement(s.Fragment, null, t.filter(Boolean).map(({ render: o, id: i, ...n }, r) => (
    // @ts-expect-error (Converted from ts-ignore)
    /* @__PURE__ */ s.createElement(o, { key: i || n.key || `f-${r}` })
  )));
}, "Tools"));
function dh(e, t) {
  let o = t?.type === "story" && t?.prepared ? t?.parameters : {}, i = "toolbar" in o ? o.toolbar : void 0, { toolbar: n } = Ge.getConfig(),
  r = Ro(
    n || {},
    i || {}
  );
  return r ? !!r[e?.id]?.hidden : !1;
}
a(dh, "toolbarItemHasBeenExcluded");
function Zn(e, t, o, i, n, r) {
  let l = /* @__PURE__ */ a((u) => u && (!u.match || u.match({
    storyId: t?.id,
    refId: t?.refId,
    viewMode: o,
    location: i,
    path: n,
    tabId: r
  })) && !dh(u, t), "filter");
  return e.filter(l);
}
a(Zn, "filterToolsSide");
var fh = x.div(({ theme: e, shown: t }) => ({
  position: "relative",
  color: e.barTextColor,
  width: "100%",
  height: 40,
  flexShrink: 0,
  overflowX: "auto",
  overflowY: "hidden",
  marginTop: t ? 0 : -40,
  boxShadow: `${e.appBorderColor}  0 -1px 0 0 inset`,
  background: e.barBg,
  zIndex: 4
})), mh = x.div({
  position: "absolute",
  width: "calc(100% - 20px)",
  display: "flex",
  justifyContent: "space-between",
  flexWrap: "nowrap",
  flexShrink: 0,
  height: 40,
  marginLeft: 10,
  marginRight: 10
}), eu = x.div({
  display: "flex",
  whiteSpace: "nowrap",
  flexBasis: "auto",
  gap: 6,
  alignItems: "center"
}), hh = x(eu)({
  marginLeft: 30
});

// src/manager/components/preview/utils/components.ts
var tu = x.main({
  display: "flex",
  flexDirection: "column",
  width: "100%",
  height: "100%",
  overflow: "hidden"
}), ou = x.div({
  overflow: "auto",
  width: "100%",
  zIndex: 3,
  background: "transparent",
  flex: 1
}), ru = x.div(
  {
    alignContent: "center",
    alignItems: "center",
    justifyContent: "center",
    justifyItems: "center",
    overflow: "auto",
    gridTemplateColumns: "100%",
    gridTemplateRows: "100%",
    position: "relative",
    width: "100%",
    height: "100%"
  },
  ({ show: e }) => ({ display: e ? "grid" : "none" })
), VO = x(Wo)({
  color: "inherit",
  textDecoration: "inherit",
  display: "inline-block"
}), $O = x.span({
  // Hides full screen icon at mobile breakpoint defined in app.js
  "@media (max-width: 599px)": {
    display: "none"
  }
}), gr = x.div(({ theme: e }) => ({
  alignContent: "center",
  alignItems: "center",
  justifyContent: "center",
  justifyItems: "center",
  overflow: "auto",
  display: "grid",
  gridTemplateColumns: "100%",
  gridTemplateRows: "100%",
  position: "relative",
  width: "100%",
  height: "100%"
})), nu = x.div(({ theme: e }) => ({
  position: "absolute",
  top: 0,
  left: 0,
  bottom: 0,
  right: 0,
  background: e.background.preview,
  zIndex: 1
}));

// src/manager/components/preview/Wrappers.tsx
var iu = /* @__PURE__ */ a(({
  wrappers: e,
  id: t,
  storyId: o,
  children: i
}) => /* @__PURE__ */ s.createElement(we, null, e.reduceRight(
  (n, r, l) => /* @__PURE__ */ s.createElement(r.render, { index: l, children: n, id: t, storyId: o }),
  i
)), "ApplyWrappers"), su = [
  {
    id: "iframe-wrapper",
    type: Ce.PREVIEW,
    render: /* @__PURE__ */ a((e) => /* @__PURE__ */ s.createElement(gr, { id: "storybook-preview-wrapper" }, e.children), "render")
  }
];

// src/manager/components/preview/Preview.tsx
var yh = /* @__PURE__ */ a(({ state: e, api: t }) => ({
  storyId: e.storyId,
  refId: e.refId,
  viewMode: e.viewMode,
  customCanvas: t.renderPreview,
  queryParams: e.customQueryParams,
  getElements: t.getElements,
  entry: t.getData(e.storyId, e.refId),
  previewInitialized: e.previewInitialized,
  refs: e.refs
}), "canvasMapper"), au = /* @__PURE__ */ a(() => ({
  id: "canvas",
  type: be.TAB,
  title: "Canvas",
  route: /* @__PURE__ */ a(({ storyId: e, refId: t }) => t ? `/story/${t}_${e}` : `/story/${e}`, "route"),
  match: /* @__PURE__ */ a(({ viewMode: e }) => !!(e && e.match(/^(story|docs)$/)), "match"),
  render: /* @__PURE__ */ a(() => null, "render")
}), "createCanvasTab"), lu = s.memo(/* @__PURE__ */ a(function(t) {
  let {
    api: o,
    id: i,
    options: n,
    viewMode: r,
    storyId: l,
    entry: u = void 0,
    description: c,
    baseUrl: p,
    withLoader: d = !0,
    tools: g,
    toolsExtra: h,
    tabs: y,
    wrappers: f,
    tabId: b
  } = t, S = y.find((I) => I.id === b)?.render, E = r === "story", { showToolbar: m } = n, v = q(l);
  return R(() => {
    if (u && r) {
      if (l === v.current)
        return;
      if (v.current = l, r.match(/docs|story/)) {
        let { refId: I, id: w } = u;
        o.emit(ia, {
          storyId: w,
          viewMode: r,
          options: { target: I }
        });
      }
    }
  }, [u, r, l, o]), /* @__PURE__ */ s.createElement(we, null, i === "main" && /* @__PURE__ */ s.createElement(uo, { key: "description" }, /* @__PURE__ */ s.
  createElement("title", null, c)), /* @__PURE__ */ s.createElement(hr, { shouldScale: E }, /* @__PURE__ */ s.createElement(tu, null, /* @__PURE__ */ s.
  createElement(
    Jl,
    {
      key: "tools",
      isShown: m,
      tabId: b,
      tabs: y,
      tools: g,
      toolsExtra: h,
      api: o
    }
  ), /* @__PURE__ */ s.createElement(ou, { key: "frame" }, S && /* @__PURE__ */ s.createElement(gr, null, S({ active: !0 })), /* @__PURE__ */ s.
  createElement(ru, { show: !b }, /* @__PURE__ */ s.createElement(bh, { withLoader: d, baseUrl: p, wrappers: f }))))));
}, "Preview"));
var bh = /* @__PURE__ */ a(({ baseUrl: e, withLoader: t, wrappers: o }) => /* @__PURE__ */ s.createElement(me, { filter: yh }, ({
  entry: i,
  refs: n,
  customCanvas: r,
  storyId: l,
  refId: u,
  viewMode: c,
  queryParams: p,
  previewInitialized: d
}) => {
  let g = "canvas", [h, y] = $(void 0);
  R(() => {
    if (ie.CONFIG_TYPE === "DEVELOPMENT")
      try {
        Ge.getChannel().on(oa, (v) => {
          y(v);
        });
      } catch {
      }
  }, []);
  let f = !!n[u] && !n[u].previewInitialized, b = !(h?.value === 1 || h === void 0), S = !u && (!d || b), E = i && f || S;
  return /* @__PURE__ */ s.createElement(Qn, null, ({ value: m }) => /* @__PURE__ */ s.createElement(s.Fragment, null, t && E && /* @__PURE__ */ s.
  createElement(nu, null, /* @__PURE__ */ s.createElement(Qo, { id: "preview-loader", role: "progressbar", progress: h })), /* @__PURE__ */ s.
  createElement(iu, { id: g, storyId: l, viewMode: c, wrappers: o }, r ? r(l, c, g, e, m, p) : /* @__PURE__ */ s.createElement(
    Hl,
    {
      baseUrl: e,
      refs: n,
      scale: m,
      entry: i,
      viewMode: c,
      refId: u,
      queryParams: p,
      storyId: l
    }
  ))));
}), "Canvas");
function uu(e, t) {
  let { previewTabs: o } = Ge.getConfig(), i = t ? t.previewTabs : void 0;
  if (o || i) {
    let n = Ro(o || {}, i || {}), r = Object.keys(n).map((l, u) => ({
      index: u,
      ...typeof n[l] == "string" ? { title: n[l] } : n[l],
      id: l
    }));
    return e.filter((l) => {
      let u = r.find((c) => c.id === l.id);
      return u === void 0 || u.id === "canvas" || !u.hidden;
    }).map((l, u) => ({ ...l, index: u })).sort((l, u) => {
      let c = r.find((h) => h.id === l.id), p = c ? c.index : r.length + l.index, d = r.find((h) => h.id === u.id), g = d ? d.index : r.length +
      u.index;
      return p - g;
    }).map((l) => {
      let u = r.find((c) => c.id === l.id);
      return u ? {
        ...l,
        title: u.title || l.title,
        disabled: u.disabled,
        hidden: u.hidden
      } : l;
    });
  }
  return e;
}
a(uu, "filterTabs");

// src/manager/components/preview/tools/menu.tsx
var vh = /* @__PURE__ */ a(({ api: e, state: t }) => ({
  isVisible: e.getIsNavShown(),
  singleStory: t.singleStory,
  toggle: /* @__PURE__ */ a(() => e.toggleNav(), "toggle")
}), "menuMapper"), cu = {
  title: "menu",
  id: "menu",
  type: be.TOOL,
  // @ts-expect-error (non strict)
  match: /* @__PURE__ */ a(({ viewMode: e }) => ["story", "docs"].includes(e), "match"),
  render: /* @__PURE__ */ a(() => /* @__PURE__ */ s.createElement(me, { filter: vh }, ({ isVisible: e, toggle: t, singleStory: o }) => !o &&
  !e && /* @__PURE__ */ s.createElement(s.Fragment, null, /* @__PURE__ */ s.createElement(ee, { "aria-label": "Show sidebar", key: "menu", onClick: t,
  title: "Show sidebar" }, /* @__PURE__ */ s.createElement(No, null)), /* @__PURE__ */ s.createElement(Yt, null))), "render")
};

// src/manager/container/Preview.tsx
var xh = [au()], Ih = [cu, Gl, Ql], Sh = [zl, Zl, ql, Ul], wh = [], Eh = (0, yo.default)(1)(
  (e, t, o, i) => i ? uu([...xh, ...Object.values(t)], o) : wh
), Ch = (0, yo.default)(1)(
  (e, t, o) => Zn([...Ih, ...Object.values(t)], ...o)
), Th = (0, yo.default)(1)(
  (e, t, o) => Zn([...Sh, ...Object.values(t)], ...o)
), _h = (0, yo.default)(1)((e, t) => [
  ...su,
  ...Object.values(t)
]), { PREVIEW_URL: kh } = ie, Oh = /* @__PURE__ */ a((e) => e.split("/").join(" / ").replace(/\s\s/, " "), "splitTitleAddExtraSpace"), Ph = /* @__PURE__ */ a(
(e) => {
  if (e?.type === "story" || e?.type === "docs") {
    let { title: t, name: o } = e;
    return t && o ? Oh(`${t} - ${o} \u22C5 Storybook`) : "Storybook";
  }
  return e?.name ? `${e.name} \u22C5 Storybook` : "Storybook";
}, "getDescription"), Ah = /* @__PURE__ */ a(({
  api: e,
  state: t
  // @ts-expect-error (non strict)
}) => {
  let { layout: o, location: i, customQueryParams: n, storyId: r, refs: l, viewMode: u, path: c, refId: p } = t, d = e.getData(r, p), g = Object.
  values(e.getElements(Ce.TAB)), h = Object.values(e.getElements(Ce.PREVIEW)), y = Object.values(e.getElements(Ce.TOOL)), f = Object.values(
  e.getElements(Ce.TOOLEXTRA)), b = e.getQueryParam("tab"), S = Ch(y.length, e.getElements(Ce.TOOL), [
    d,
    u,
    i,
    c,
    // @ts-expect-error (non strict)
    b
  ]), E = Th(
    f.length,
    e.getElements(Ce.TOOLEXTRA),
    // @ts-expect-error (non strict)
    [d, u, i, c, b]
  );
  return {
    api: e,
    entry: d,
    options: o,
    description: Ph(d),
    viewMode: u,
    refs: l,
    storyId: r,
    baseUrl: kh || "iframe.html",
    queryParams: n,
    tools: S,
    toolsExtra: E,
    tabs: Eh(
      g.length,
      e.getElements(Ce.TAB),
      d ? d.parameters : void 0,
      o.showTabs
    ),
    wrappers: _h(
      h.length,
      e.getElements(Ce.PREVIEW)
    ),
    tabId: b
  };
}, "mapper"), Dh = s.memo(/* @__PURE__ */ a(function(t) {
  return /* @__PURE__ */ s.createElement(me, { filter: Ah }, (o) => /* @__PURE__ */ s.createElement(lu, { ...t, ...o }));
}, "PreviewConnected")), pu = Dh;

// src/manager/hooks/useDebounce.ts
function du(e, t) {
  let [o, i] = $(e);
  return R(() => {
    let n = setTimeout(() => {
      i(e);
    }, t);
    return () => {
      clearTimeout(n);
    };
  }, [e, t]), o;
}
a(du, "useDebounce");

// src/manager/hooks/useMeasure.tsx
function fu() {
  let [e, t] = s.useState({
    width: null,
    height: null
  }), o = s.useRef(null);
  return [s.useCallback((n) => {
    if (o.current && (o.current.disconnect(), o.current = null), n?.nodeType === Node.ELEMENT_NODE) {
      let r = new ResizeObserver(([l]) => {
        if (l && l.borderBoxSize) {
          let { inlineSize: u, blockSize: c } = l.borderBoxSize[0];
          t({ width: u, height: c });
        }
      });
      r.observe(n), o.current = r;
    }
  }, []), e];
}
a(fu, "useMeasure");

// ../node_modules/@tanstack/virtual-core/dist/esm/utils.js
function At(e, t, o) {
  let i = o.initialDeps ?? [], n;
  return () => {
    var r, l, u, c;
    let p;
    o.key && ((r = o.debug) != null && r.call(o)) && (p = Date.now());
    let d = e();
    if (!(d.length !== i.length || d.some((y, f) => i[f] !== y)))
      return n;
    i = d;
    let h;
    if (o.key && ((l = o.debug) != null && l.call(o)) && (h = Date.now()), n = t(...d), o.key && ((u = o.debug) != null && u.call(o))) {
      let y = Math.round((Date.now() - p) * 100) / 100, f = Math.round((Date.now() - h) * 100) / 100, b = f / 16, S = /* @__PURE__ */ a((E, m) => {
        for (E = String(E); E.length < m; )
          E = " " + E;
        return E;
      }, "pad");
      console.info(
        `%c\u23F1 ${S(f, 5)} /${S(y, 5)} ms`,
        `
            font-size: .6rem;
            font-weight: bold;
            color: hsl(${Math.max(
          0,
          Math.min(120 - 120 * b, 120)
        )}deg 100% 31%);`,
        o?.key
      );
    }
    return (c = o?.onChange) == null || c.call(o, n), n;
  };
}
a(At, "memo");
function yr(e, t) {
  if (e === void 0)
    throw new Error(`Unexpected undefined${t ? `: ${t}` : ""}`);
  return e;
}
a(yr, "notUndefined");
var mu = /* @__PURE__ */ a((e, t) => Math.abs(e - t) < 1, "approxEqual");

// ../node_modules/@tanstack/virtual-core/dist/esm/index.js
var Mh = /* @__PURE__ */ a((e) => e, "defaultKeyExtractor"), Lh = /* @__PURE__ */ a((e) => {
  let t = Math.max(e.startIndex - e.overscan, 0), o = Math.min(e.endIndex + e.overscan, e.count - 1), i = [];
  for (let n = t; n <= o; n++)
    i.push(n);
  return i;
}, "defaultRangeExtractor"), hu = /* @__PURE__ */ a((e, t) => {
  let o = e.scrollElement;
  if (!o)
    return;
  let i = /* @__PURE__ */ a((r) => {
    let { width: l, height: u } = r;
    t({ width: Math.round(l), height: Math.round(u) });
  }, "handler");
  if (i(o.getBoundingClientRect()), typeof ResizeObserver > "u")
    return () => {
    };
  let n = new ResizeObserver((r) => {
    let l = r[0];
    if (l?.borderBoxSize) {
      let u = l.borderBoxSize[0];
      if (u) {
        i({ width: u.inlineSize, height: u.blockSize });
        return;
      }
    }
    i(o.getBoundingClientRect());
  });
  return n.observe(o, { box: "border-box" }), () => {
    n.unobserve(o);
  };
}, "observeElementRect");
var gu = /* @__PURE__ */ a((e, t) => {
  let o = e.scrollElement;
  if (!o)
    return;
  let i = /* @__PURE__ */ a(() => {
    t(o[e.options.horizontal ? "scrollLeft" : "scrollTop"]);
  }, "handler");
  return i(), o.addEventListener("scroll", i, {
    passive: !0
  }), () => {
    o.removeEventListener("scroll", i);
  };
}, "observeElementOffset");
var Nh = /* @__PURE__ */ a((e, t, o) => {
  if (t?.borderBoxSize) {
    let i = t.borderBoxSize[0];
    if (i)
      return Math.round(
        i[o.options.horizontal ? "inlineSize" : "blockSize"]
      );
  }
  return Math.round(
    e.getBoundingClientRect()[o.options.horizontal ? "width" : "height"]
  );
}, "measureElement");
var yu = /* @__PURE__ */ a((e, {
  adjustments: t = 0,
  behavior: o
}, i) => {
  var n, r;
  let l = e + t;
  (r = (n = i.scrollElement) == null ? void 0 : n.scrollTo) == null || r.call(n, {
    [i.options.horizontal ? "left" : "top"]: l,
    behavior: o
  });
}, "elementScroll"), Jn = class Jn {
  constructor(t) {
    this.unsubs = [], this.scrollElement = null, this.isScrolling = !1, this.isScrollingTimeoutId = null, this.scrollToIndexTimeoutId = null,
    this.measurementsCache = [], this.itemSizeCache = /* @__PURE__ */ new Map(), this.pendingMeasuredCacheIndexes = [], this.scrollDirection =
    null, this.scrollAdjustments = 0, this.measureElementCache = /* @__PURE__ */ new Map(), this.observer = /* @__PURE__ */ (() => {
      let o = null, i = /* @__PURE__ */ a(() => o || (typeof ResizeObserver < "u" ? o = new ResizeObserver((n) => {
        n.forEach((r) => {
          this._measureElement(r.target, r);
        });
      }) : null), "get");
      return {
        disconnect: /* @__PURE__ */ a(() => {
          var n;
          return (n = i()) == null ? void 0 : n.disconnect();
        }, "disconnect"),
        observe: /* @__PURE__ */ a((n) => {
          var r;
          return (r = i()) == null ? void 0 : r.observe(n, { box: "border-box" });
        }, "observe"),
        unobserve: /* @__PURE__ */ a((n) => {
          var r;
          return (r = i()) == null ? void 0 : r.unobserve(n);
        }, "unobserve")
      };
    })(), this.range = null, this.setOptions = (o) => {
      Object.entries(o).forEach(([i, n]) => {
        typeof n > "u" && delete o[i];
      }), this.options = {
        debug: !1,
        initialOffset: 0,
        overscan: 1,
        paddingStart: 0,
        paddingEnd: 0,
        scrollPaddingStart: 0,
        scrollPaddingEnd: 0,
        horizontal: !1,
        getItemKey: Mh,
        rangeExtractor: Lh,
        onChange: /* @__PURE__ */ a(() => {
        }, "onChange"),
        measureElement: Nh,
        initialRect: { width: 0, height: 0 },
        scrollMargin: 0,
        gap: 0,
        scrollingDelay: 150,
        indexAttribute: "data-index",
        initialMeasurementsCache: [],
        lanes: 1,
        ...o
      };
    }, this.notify = (o) => {
      var i, n;
      (n = (i = this.options).onChange) == null || n.call(i, this, o);
    }, this.maybeNotify = At(
      () => (this.calculateRange(), [
        this.isScrolling,
        this.range ? this.range.startIndex : null,
        this.range ? this.range.endIndex : null
      ]),
      (o) => {
        this.notify(o);
      },
      {
        key: !1,
        debug: /* @__PURE__ */ a(() => this.options.debug, "debug"),
        initialDeps: [
          this.isScrolling,
          this.range ? this.range.startIndex : null,
          this.range ? this.range.endIndex : null
        ]
      }
    ), this.cleanup = () => {
      this.unsubs.filter(Boolean).forEach((o) => o()), this.unsubs = [], this.scrollElement = null;
    }, this._didMount = () => (this.measureElementCache.forEach(this.observer.observe), () => {
      this.observer.disconnect(), this.cleanup();
    }), this._willUpdate = () => {
      let o = this.options.getScrollElement();
      this.scrollElement !== o && (this.cleanup(), this.scrollElement = o, this._scrollToOffset(this.scrollOffset, {
        adjustments: void 0,
        behavior: void 0
      }), this.unsubs.push(
        this.options.observeElementRect(this, (i) => {
          this.scrollRect = i, this.maybeNotify();
        })
      ), this.unsubs.push(
        this.options.observeElementOffset(this, (i) => {
          this.scrollAdjustments = 0, this.scrollOffset !== i && (this.isScrollingTimeoutId !== null && (clearTimeout(this.isScrollingTimeoutId),
          this.isScrollingTimeoutId = null), this.isScrolling = !0, this.scrollDirection = this.scrollOffset < i ? "forward" : "backward", this.
          scrollOffset = i, this.maybeNotify(), this.isScrollingTimeoutId = setTimeout(() => {
            this.isScrollingTimeoutId = null, this.isScrolling = !1, this.scrollDirection = null, this.maybeNotify();
          }, this.options.scrollingDelay));
        })
      ));
    }, this.getSize = () => this.scrollRect[this.options.horizontal ? "width" : "height"], this.memoOptions = At(
      () => [
        this.options.count,
        this.options.paddingStart,
        this.options.scrollMargin,
        this.options.getItemKey
      ],
      (o, i, n, r) => (this.pendingMeasuredCacheIndexes = [], {
        count: o,
        paddingStart: i,
        scrollMargin: n,
        getItemKey: r
      }),
      {
        key: !1
      }
    ), this.getFurthestMeasurement = (o, i) => {
      let n = /* @__PURE__ */ new Map(), r = /* @__PURE__ */ new Map();
      for (let l = i - 1; l >= 0; l--) {
        let u = o[l];
        if (n.has(u.lane))
          continue;
        let c = r.get(
          u.lane
        );
        if (c == null || u.end > c.end ? r.set(u.lane, u) : u.end < c.end && n.set(u.lane, !0), n.size === this.options.lanes)
          break;
      }
      return r.size === this.options.lanes ? Array.from(r.values()).sort((l, u) => l.end === u.end ? l.index - u.index : l.end - u.end)[0] :
      void 0;
    }, this.getMeasurements = At(
      () => [this.memoOptions(), this.itemSizeCache],
      ({ count: o, paddingStart: i, scrollMargin: n, getItemKey: r }, l) => {
        let u = this.pendingMeasuredCacheIndexes.length > 0 ? Math.min(...this.pendingMeasuredCacheIndexes) : 0;
        this.pendingMeasuredCacheIndexes = [];
        let c = this.measurementsCache.slice(0, u);
        for (let p = u; p < o; p++) {
          let d = r(p), g = this.options.lanes === 1 ? c[p - 1] : this.getFurthestMeasurement(c, p), h = g ? g.end + this.options.gap : i + n,
          y = l.get(d), f = typeof y == "number" ? y : this.options.estimateSize(p), b = h + f, S = g ? g.lane : p % this.options.lanes;
          c[p] = {
            index: p,
            start: h,
            size: f,
            end: b,
            key: d,
            lane: S
          };
        }
        return this.measurementsCache = c, c;
      },
      {
        key: !1,
        debug: /* @__PURE__ */ a(() => this.options.debug, "debug")
      }
    ), this.calculateRange = At(
      () => [this.getMeasurements(), this.getSize(), this.scrollOffset],
      (o, i, n) => this.range = o.length > 0 && i > 0 ? Fh({
        measurements: o,
        outerSize: i,
        scrollOffset: n
      }) : null,
      {
        key: !1,
        debug: /* @__PURE__ */ a(() => this.options.debug, "debug")
      }
    ), this.getIndexes = At(
      () => [
        this.options.rangeExtractor,
        this.calculateRange(),
        this.options.overscan,
        this.options.count
      ],
      (o, i, n, r) => i === null ? [] : o({
        ...i,
        overscan: n,
        count: r
      }),
      {
        key: !1,
        debug: /* @__PURE__ */ a(() => this.options.debug, "debug")
      }
    ), this.indexFromElement = (o) => {
      let i = this.options.indexAttribute, n = o.getAttribute(i);
      return n ? parseInt(n, 10) : (console.warn(
        `Missing attribute name '${i}={index}' on measured element.`
      ), -1);
    }, this._measureElement = (o, i) => {
      let n = this.measurementsCache[this.indexFromElement(o)];
      if (!n || !o.isConnected) {
        this.measureElementCache.forEach((u, c) => {
          u === o && (this.observer.unobserve(o), this.measureElementCache.delete(c));
        });
        return;
      }
      let r = this.measureElementCache.get(n.key);
      r !== o && (r && this.observer.unobserve(r), this.observer.observe(o), this.measureElementCache.set(n.key, o));
      let l = this.options.measureElement(o, i, this);
      this.resizeItem(n, l);
    }, this.resizeItem = (o, i) => {
      let n = this.itemSizeCache.get(o.key) ?? o.size, r = i - n;
      r !== 0 && ((this.shouldAdjustScrollPositionOnItemSizeChange !== void 0 ? this.shouldAdjustScrollPositionOnItemSizeChange(o, r, this) :
      o.start < this.scrollOffset + this.scrollAdjustments) && this._scrollToOffset(this.scrollOffset, {
        adjustments: this.scrollAdjustments += r,
        behavior: void 0
      }), this.pendingMeasuredCacheIndexes.push(o.index), this.itemSizeCache = new Map(this.itemSizeCache.set(o.key, i)), this.notify(!1));
    }, this.measureElement = (o) => {
      o && this._measureElement(o, void 0);
    }, this.getVirtualItems = At(
      () => [this.getIndexes(), this.getMeasurements()],
      (o, i) => {
        let n = [];
        for (let r = 0, l = o.length; r < l; r++) {
          let u = o[r], c = i[u];
          n.push(c);
        }
        return n;
      },
      {
        key: !1,
        debug: /* @__PURE__ */ a(() => this.options.debug, "debug")
      }
    ), this.getVirtualItemForOffset = (o) => {
      let i = this.getMeasurements();
      return yr(
        i[bu(
          0,
          i.length - 1,
          (n) => yr(i[n]).start,
          o
        )]
      );
    }, this.getOffsetForAlignment = (o, i) => {
      let n = this.getSize();
      i === "auto" && (o <= this.scrollOffset ? i = "start" : o >= this.scrollOffset + n ? i = "end" : i = "start"), i === "start" ? o = o :
      i === "end" ? o = o - n : i === "center" && (o = o - n / 2);
      let r = this.options.horizontal ? "scrollWidth" : "scrollHeight", u = (this.scrollElement ? "document" in this.scrollElement ? this.scrollElement.
      document.documentElement[r] : this.scrollElement[r] : 0) - this.getSize();
      return Math.max(Math.min(u, o), 0);
    }, this.getOffsetForIndex = (o, i = "auto") => {
      o = Math.max(0, Math.min(o, this.options.count - 1));
      let n = yr(this.getMeasurements()[o]);
      if (i === "auto")
        if (n.end >= this.scrollOffset + this.getSize() - this.options.scrollPaddingEnd)
          i = "end";
        else if (n.start <= this.scrollOffset + this.options.scrollPaddingStart)
          i = "start";
        else
          return [this.scrollOffset, i];
      let r = i === "end" ? n.end + this.options.scrollPaddingEnd : n.start - this.options.scrollPaddingStart;
      return [this.getOffsetForAlignment(r, i), i];
    }, this.isDynamicMode = () => this.measureElementCache.size > 0, this.cancelScrollToIndex = () => {
      this.scrollToIndexTimeoutId !== null && (clearTimeout(this.scrollToIndexTimeoutId), this.scrollToIndexTimeoutId = null);
    }, this.scrollToOffset = (o, { align: i = "start", behavior: n } = {}) => {
      this.cancelScrollToIndex(), n === "smooth" && this.isDynamicMode() && console.warn(
        "The `smooth` scroll behavior is not fully supported with dynamic size."
      ), this._scrollToOffset(this.getOffsetForAlignment(o, i), {
        adjustments: void 0,
        behavior: n
      });
    }, this.scrollToIndex = (o, { align: i = "auto", behavior: n } = {}) => {
      o = Math.max(0, Math.min(o, this.options.count - 1)), this.cancelScrollToIndex(), n === "smooth" && this.isDynamicMode() && console.warn(
        "The `smooth` scroll behavior is not fully supported with dynamic size."
      );
      let [r, l] = this.getOffsetForIndex(o, i);
      this._scrollToOffset(r, { adjustments: void 0, behavior: n }), n !== "smooth" && this.isDynamicMode() && (this.scrollToIndexTimeoutId =
      setTimeout(() => {
        if (this.scrollToIndexTimeoutId = null, this.measureElementCache.has(
          this.options.getItemKey(o)
        )) {
          let [c] = this.getOffsetForIndex(o, l);
          mu(c, this.scrollOffset) || this.scrollToIndex(o, { align: l, behavior: n });
        } else
          this.scrollToIndex(o, { align: l, behavior: n });
      }));
    }, this.scrollBy = (o, { behavior: i } = {}) => {
      this.cancelScrollToIndex(), i === "smooth" && this.isDynamicMode() && console.warn(
        "The `smooth` scroll behavior is not fully supported with dynamic size."
      ), this._scrollToOffset(this.scrollOffset + o, {
        adjustments: void 0,
        behavior: i
      });
    }, this.getTotalSize = () => {
      var o;
      let i = this.getMeasurements(), n;
      return i.length === 0 ? n = this.options.paddingStart : n = this.options.lanes === 1 ? ((o = i[i.length - 1]) == null ? void 0 : o.end) ??
      0 : Math.max(
        ...i.slice(-this.options.lanes).map((r) => r.end)
      ), n - this.options.scrollMargin + this.options.paddingEnd;
    }, this._scrollToOffset = (o, {
      adjustments: i,
      behavior: n
    }) => {
      this.options.scrollToFn(o, { behavior: n, adjustments: i }, this);
    }, this.measure = () => {
      this.itemSizeCache = /* @__PURE__ */ new Map(), this.notify(!1);
    }, this.setOptions(t), this.scrollRect = this.options.initialRect, this.scrollOffset = typeof this.options.initialOffset == "function" ?
    this.options.initialOffset() : this.options.initialOffset, this.measurementsCache = this.options.initialMeasurementsCache, this.measurementsCache.
    forEach((o) => {
      this.itemSizeCache.set(o.key, o.size);
    }), this.maybeNotify();
  }
};
a(Jn, "Virtualizer");
var br = Jn, bu = /* @__PURE__ */ a((e, t, o, i) => {
  for (; e <= t; ) {
    let n = (e + t) / 2 | 0, r = o(n);
    if (r < i)
      e = n + 1;
    else if (r > i)
      t = n - 1;
    else
      return n;
  }
  return e > 0 ? e - 1 : 0;
}, "findNearestBinarySearch");
function Fh({
  measurements: e,
  outerSize: t,
  scrollOffset: o
}) {
  let i = e.length - 1, r = bu(0, i, /* @__PURE__ */ a((u) => e[u].start, "getOffset"), o), l = r;
  for (; l < i && e[l].end < o + t; )
    l++;
  return { startIndex: r, endIndex: l };
}
a(Fh, "calculateRange");

// ../node_modules/@tanstack/react-virtual/dist/esm/index.js
var Bh = typeof document < "u" ? dt : R;
function Hh(e) {
  let t = Vt(() => ({}), {})[1], o = {
    ...e,
    onChange: /* @__PURE__ */ a((n, r) => {
      var l;
      r ? mo(t) : t(), (l = e.onChange) == null || l.call(e, n, r);
    }, "onChange")
  }, [i] = $(
    () => new br(o)
  );
  return i.setOptions(o), R(() => i._didMount(), []), Bh(() => i._willUpdate()), i;
}
a(Hh, "useVirtualizerBase");
function vu(e) {
  return Hh({
    observeElementRect: hu,
    observeElementOffset: gu,
    scrollToFn: yu,
    ...e
  });
}
a(vu, "useVirtualizer");

// src/manager/components/sidebar/FIleSearchList.utils.tsx
var xu = /* @__PURE__ */ a(({
  parentRef: e,
  rowVirtualizer: t,
  selectedItem: o
}) => {
  R(() => {
    let i = /* @__PURE__ */ a((n) => {
      if (!e.current)
        return;
      let r = t.options.count, l = document.activeElement, u = parseInt(l.getAttribute("data-index") || "-1", 10), c = l.tagName === "INPUT",
      p = /* @__PURE__ */ a(() => document.querySelector('[data-index="0"]'), "getFirstElement"), d = /* @__PURE__ */ a(() => document.querySelector(
      `[data-index="${r - 1}"]`), "getLastElement");
      if (n.code === "ArrowDown" && l) {
        if (n.stopPropagation(), c) {
          p()?.focus();
          return;
        }
        if (u === r - 1) {
          mo(() => {
            t.scrollToIndex(0, { align: "start" });
          }), setTimeout(() => {
            p()?.focus();
          }, 100);
          return;
        }
        if (o === u) {
          document.querySelector(
            `[data-index-position="${o}_first"]`
          )?.focus();
          return;
        }
        if (o !== null && l.getAttribute("data-index-position")?.includes("last")) {
          document.querySelector(
            `[data-index="${o + 1}"]`
          )?.focus();
          return;
        }
        l.nextElementSibling?.focus();
      }
      if (n.code === "ArrowUp" && l) {
        if (c) {
          mo(() => {
            t.scrollToIndex(r - 1, { align: "start" });
          }), setTimeout(() => {
            d()?.focus();
          }, 100);
          return;
        }
        if (o !== null && l.getAttribute("data-index-position")?.includes("first")) {
          document.querySelector(
            `[data-index="${o}"]`
          )?.focus();
          return;
        }
        l.previousElementSibling?.focus();
      }
    }, "handleArrowKeys");
    return document.addEventListener("keydown", i, { capture: !0 }), () => {
      document.removeEventListener("keydown", i, { capture: !0 });
    };
  }, [t, o, e]);
}, "useArrowKeyNavigation");

// src/manager/components/sidebar/FileList.tsx
var Iu = x("div")(({ theme: e }) => ({
  marginTop: "-16px",
  // after element which fades out the list
  "&::after": {
    content: '""',
    position: "fixed",
    pointerEvents: "none",
    bottom: 0,
    left: 0,
    right: 0,
    height: "80px",
    background: `linear-gradient(${nr(e.barBg, 0)} 10%, ${e.barBg} 80%)`
  }
})), vr = x("div")(({ theme: e }) => ({
  height: "280px",
  overflow: "auto",
  msOverflowStyle: "none",
  scrollbarWidth: "none",
  position: "relative",
  "::-webkit-scrollbar": {
    display: "none"
  }
})), Su = x("li")(({ theme: e }) => ({
  ":focus-visible": {
    outline: "none",
    ".file-list-item": {
      borderRadius: "4px",
      background: e.base === "dark" ? "rgba(255,255,255,.1)" : e.color.mediumlight,
      "> svg": {
        display: "flex"
      }
    }
  }
})), xr = x("div")(({ theme: e }) => ({
  display: "flex",
  flexDirection: "column",
  position: "relative"
})), wu = x.div(({ theme: e, selected: t, disabled: o, error: i }) => ({
  display: "flex",
  alignItems: "flex-start",
  gap: "8px",
  alignSelf: "stretch",
  padding: "8px 16px",
  cursor: "pointer",
  borderRadius: "4px",
  ...t && {
    borderRadius: "4px",
    background: e.base === "dark" ? "rgba(255,255,255,.1)" : e.color.mediumlight,
    "> svg": {
      display: "flex"
    }
  },
  ...o && {
    cursor: "not-allowed",
    div: {
      color: `${e.color.mediumdark} !important`
    }
  },
  ...i && {
    background: e.base === "light" ? "#00000011" : "#00000033"
  },
  "&:hover": {
    background: i ? "#00000022" : e.base === "dark" ? "rgba(255,255,255,.1)" : e.color.mediumlight,
    "> svg": {
      display: "flex"
    }
  }
})), Eu = x("ul")({
  margin: 0,
  padding: "0 0 0 0",
  width: "100%",
  position: "relative"
}), Cu = x("div")({
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  width: "calc(100% - 50px)"
}), Tu = x("div")(({ theme: e, error: t }) => ({
  color: t ? e.color.negativeText : e.color.secondary
})), _u = x("div")(({ theme: e, error: t }) => ({
  color: t ? e.color.negativeText : e.base === "dark" ? e.color.lighter : e.color.darkest,
  fontSize: "14px",
  whiteSpace: "nowrap",
  textOverflow: "ellipsis",
  overflow: "hidden",
  maxWidth: "100%"
})), ku = x("div")(({ theme: e }) => ({
  color: e.color.mediumdark,
  fontSize: "14px",
  whiteSpace: "nowrap",
  textOverflow: "ellipsis",
  overflow: "hidden",
  maxWidth: "100%"
})), Ou = x("ul")(({ theme: e }) => ({
  margin: 0,
  padding: 0
})), Pu = x("li")(({ theme: e, error: t }) => ({
  padding: "8px 16px 8px 16px",
  marginLeft: "30px",
  display: "flex",
  gap: "8px",
  alignItems: "center",
  justifyContent: "space-between",
  fontSize: "14px",
  cursor: "pointer",
  borderRadius: "4px",
  ":focus-visible": {
    outline: "none"
  },
  ...t && {
    background: "#F9ECEC",
    color: e.color.negativeText
  },
  "&:hover,:focus-visible": {
    background: t ? "#F9ECEC" : e.base === "dark" ? "rgba(255, 255, 255, 0.1)" : e.color.mediumlight,
    "> svg": {
      display: "flex"
    }
  },
  "> div > svg": {
    color: t ? e.color.negativeText : e.color.secondary
  }
})), Au = x("div")(({ theme: e }) => ({
  display: "flex",
  alignItems: "center",
  gap: "8px",
  width: "calc(100% - 20px)"
})), Du = x("span")(({ theme: e }) => ({
  whiteSpace: "nowrap",
  textOverflow: "ellipsis",
  overflow: "hidden",
  maxWidth: "calc(100% - 160px)",
  display: "inline-block"
})), Mu = x("span")(({ theme: e }) => ({
  display: "inline-block",
  padding: `1px ${e.appBorderRadius}px`,
  borderRadius: "2px",
  fontSize: "10px",
  color: e.base === "dark" ? e.color.lightest : "#727272",
  backgroundColor: e.base === "dark" ? "rgba(255, 255, 255, 0.1)" : "#F2F4F5"
})), Lu = x("div")(({ theme: e }) => ({
  textAlign: "center",
  maxWidth: "334px",
  margin: "16px auto 50px auto",
  fontSize: "14px",
  color: e.base === "dark" ? e.color.lightest : "#000"
})), Nu = x("p")(({ theme: e }) => ({
  margin: 0,
  color: e.base === "dark" ? e.color.defaultText : e.color.mediumdark
}));

// src/manager/components/sidebar/FileSearchListSkeleton.tsx
var zh = x("div")(({ theme: e }) => ({
  display: "flex",
  alignItems: "flex-start",
  gap: "8px",
  alignSelf: "stretch",
  padding: "8px 16px"
})), Rh = x("div")({
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  width: "100%",
  borderRadius: "3px"
}), Wh = x.div(({ theme: e }) => ({
  width: "14px",
  height: "14px",
  borderRadius: "3px",
  marginTop: "1px",
  background: e.base === "dark" ? "rgba(255,255,255,.1)" : "rgba(0,0,0,.1)",
  animation: `${e.animation.glow} 1.5s ease-in-out infinite`
})), Fu = x.div(({ theme: e }) => ({
  height: "16px",
  borderRadius: "3px",
  background: e.base === "dark" ? "rgba(255,255,255,.1)" : "rgba(0,0,0,.1)",
  animation: `${e.animation.glow} 1.5s ease-in-out infinite`,
  width: "100%",
  maxWidth: "100%",
  "+ div": {
    marginTop: "6px"
  }
})), Bu = /* @__PURE__ */ a(() => /* @__PURE__ */ s.createElement(vr, null, [1, 2, 3].map((e) => /* @__PURE__ */ s.createElement(xr, { key: e },
/* @__PURE__ */ s.createElement(zh, null, /* @__PURE__ */ s.createElement(Wh, null), /* @__PURE__ */ s.createElement(Rh, null, /* @__PURE__ */ s.
createElement(Fu, { style: { width: "90px" } }), /* @__PURE__ */ s.createElement(Fu, { style: { width: "300px" } })))))), "FileSearchListLoa\
dingSkeleton");

// src/manager/components/sidebar/FileSearchList.tsx
var Hu = x(vs)(({ theme: e }) => ({
  display: "none",
  alignSelf: "center",
  color: e.color.mediumdark
})), jh = x($t)(({ theme: e }) => ({
  display: "none",
  alignSelf: "center",
  color: e.color.mediumdark
})), zu = no(/* @__PURE__ */ a(function({
  isLoading: t,
  searchResults: o,
  onNewStory: i,
  errorItemId: n
}) {
  let [r, l] = $(null), u = s.useRef(), c = K(() => [...o ?? []].sort((f, b) => {
    let S = f.exportedComponents === null || f.exportedComponents?.length === 0, E = f.storyFileExists, m = b.exportedComponents === null ||
    b.exportedComponents?.length === 0, v = b.storyFileExists;
    return E && !v ? -1 : v && !E || S && !m ? 1 : !S && m ? -1 : 0;
  }), [o]), p = o?.length || 0, d = vu({
    count: p,
    // @ts-expect-error (non strict)
    getScrollElement: /* @__PURE__ */ a(() => u.current, "getScrollElement"),
    paddingStart: 16,
    paddingEnd: 40,
    estimateSize: /* @__PURE__ */ a(() => 54, "estimateSize"),
    overscan: 2
  });
  xu({ rowVirtualizer: d, parentRef: u, selectedItem: r });
  let g = A(
    ({ virtualItem: f, searchResult: b, itemId: S }) => {
      b?.exportedComponents?.length > 1 ? l((E) => E === f.index ? null : f.index) : b?.exportedComponents?.length === 1 && i({
        componentExportName: b.exportedComponents[0].name,
        componentFilePath: b.filepath,
        componentIsDefaultExport: b.exportedComponents[0].default,
        selectedItemId: S,
        componentExportCount: 1
      });
    },
    [i]
  ), h = A(
    ({ searchResult: f, component: b, id: S }) => {
      i({
        componentExportName: b.name,
        componentFilePath: f.filepath,
        componentIsDefaultExport: b.default,
        selectedItemId: S,
        // @ts-expect-error (non strict)
        componentExportCount: f.exportedComponents.length
      });
    },
    [i]
  ), y = A(
    ({ virtualItem: f, selected: b, searchResult: S }) => {
      let E = n === S.filepath, m = b === f.index;
      return /* @__PURE__ */ s.createElement(
        xr,
        {
          "aria-expanded": m,
          "aria-controls": `file-list-export-${f.index}`,
          id: `file-list-item-wrapper-${f.index}`
        },
        /* @__PURE__ */ s.createElement(
          wu,
          {
            className: "file-list-item",
            selected: m,
            error: E,
            disabled: S.exportedComponents === null || S.exportedComponents?.length === 0
          },
          /* @__PURE__ */ s.createElement(Tu, { error: E }, /* @__PURE__ */ s.createElement(sn, null)),
          /* @__PURE__ */ s.createElement(Cu, null, /* @__PURE__ */ s.createElement(_u, { error: E }, S.filepath.split("/").at(-1)), /* @__PURE__ */ s.
          createElement(ku, null, S.filepath)),
          m ? /* @__PURE__ */ s.createElement(jh, null) : /* @__PURE__ */ s.createElement(Hu, null)
        ),
        S?.exportedComponents?.length > 1 && m && /* @__PURE__ */ s.createElement(
          Ou,
          {
            role: "region",
            id: `file-list-export-${f.index}`,
            "aria-labelledby": `file-list-item-wrapper-${f.index}`,
            onClick: (v) => {
              v.stopPropagation();
            },
            onKeyUp: (v) => {
              v.key === "Enter" && v.stopPropagation();
            }
          },
          S.exportedComponents?.map((v, I) => {
            let w = n === `${S.filepath}_${I}`, k = I === 0 ? "first" : (
              // @ts-expect-error (non strict)
              I === S.exportedComponents.length - 1 ? "last" : "middle"
            );
            return /* @__PURE__ */ s.createElement(
              Pu,
              {
                tabIndex: 0,
                "data-index-position": `${f.index}_${k}`,
                key: v.name,
                error: w,
                onClick: () => {
                  h({
                    searchResult: S,
                    component: v,
                    id: `${S.filepath}_${I}`
                  });
                },
                onKeyUp: (T) => {
                  T.key === "Enter" && h({
                    searchResult: S,
                    component: v,
                    id: `${S.filepath}_${I}`
                  });
                }
              },
              /* @__PURE__ */ s.createElement(Au, null, /* @__PURE__ */ s.createElement(sn, null), v.default ? /* @__PURE__ */ s.createElement(
              s.Fragment, null, /* @__PURE__ */ s.createElement(Du, null, S.filepath.split("/").at(-1)?.split(".")?.at(0)), /* @__PURE__ */ s.
              createElement(Mu, null, "Default export")) : v.name),
              /* @__PURE__ */ s.createElement(Hu, null)
            );
          })
        )
      );
    },
    [h, n]
  );
  return t && (o === null || o?.length === 0) ? /* @__PURE__ */ s.createElement(Bu, null) : o?.length === 0 ? /* @__PURE__ */ s.createElement(
  Lu, null, /* @__PURE__ */ s.createElement("p", null, "We could not find any file with that name"), /* @__PURE__ */ s.createElement(Nu, null,
  "You may want to try using different keywords, check for typos, and adjust your filters")) : c?.length > 0 ? /* @__PURE__ */ s.createElement(
  Iu, null, /* @__PURE__ */ s.createElement(vr, { ref: u }, /* @__PURE__ */ s.createElement(
    Eu,
    {
      style: {
        height: `${d.getTotalSize()}px`
      }
    },
    d.getVirtualItems().map((f) => {
      let b = c[f.index], S = b.exportedComponents === null || b.exportedComponents?.length === 0, E = {};
      return /* @__PURE__ */ s.createElement(
        Su,
        {
          key: f.key,
          "data-index": f.index,
          ref: d.measureElement,
          onClick: () => {
            g({
              virtualItem: f,
              itemId: b.filepath,
              searchResult: b
            });
          },
          onKeyUp: (m) => {
            m.key === "Enter" && g({
              virtualItem: f,
              itemId: b.filepath,
              searchResult: b
            });
          },
          style: {
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            transform: `translateY(${f.start}px)`
          },
          tabIndex: 0
        },
        S ? /* @__PURE__ */ s.createElement(
          ye,
          {
            ...E,
            style: { width: "100%" },
            hasChrome: !1,
            closeOnOutsideClick: !0,
            tooltip: /* @__PURE__ */ s.createElement(
              je,
              {
                note: S ? "We can't evaluate exports for this file. You can't create a story for it automatically" : null
              }
            )
          },
          /* @__PURE__ */ s.createElement(
            y,
            {
              searchResult: b,
              selected: r,
              virtualItem: f
            }
          )
        ) : /* @__PURE__ */ s.createElement(
          y,
          {
            ...E,
            key: f.index,
            searchResult: b,
            selected: r,
            virtualItem: f
          }
        )
      );
    })
  ))) : null;
}, "FileSearchList"));

// src/manager/components/sidebar/FileSearchModal.tsx
var Vh = 418, $h = x(wt)(() => ({
  boxShadow: "none",
  background: "transparent",
  overflow: "visible"
})), Kh = x.div(({ theme: e, height: t }) => ({
  backgroundColor: e.background.bar,
  borderRadius: 6,
  boxShadow: "rgba(255, 255, 255, 0.05) 0 0 0 1px inset, rgba(14, 18, 22, 0.35) 0px 10px 18px -10px",
  padding: "16px",
  transition: "height 0.3s",
  height: t ? `${t + 32}px` : "auto",
  overflow: "hidden"
})), Uh = x(wt.Content)(({ theme: e }) => ({
  margin: 0,
  color: e.base === "dark" ? e.color.lighter : e.color.mediumdark
})), qh = x(Yo.Input)(({ theme: e }) => ({
  paddingLeft: 40,
  paddingRight: 28,
  fontSize: 14,
  height: 40,
  ...e.base === "light" && {
    color: e.color.darkest
  },
  "::placeholder": {
    color: e.color.mediumdark
  },
  "&:invalid:not(:placeholder-shown)": {
    boxShadow: `${e.color.negative} 0 0 0 1px inset`
  },
  "&::-webkit-search-decoration, &::-webkit-search-cancel-button, &::-webkit-search-results-button, &::-webkit-search-results-decoration": {
    display: "none"
  }
})), Gh = x.div({
  display: "flex",
  flexDirection: "column",
  flexGrow: 1,
  position: "relative"
}), Yh = x.div(({ theme: e }) => ({
  position: "absolute",
  top: 0,
  left: 16,
  zIndex: 1,
  pointerEvents: "none",
  color: e.darkest,
  display: "flex",
  alignItems: "center",
  height: "100%"
})), Qh = x.div(({ theme: e }) => ({
  position: "absolute",
  top: 0,
  right: 16,
  zIndex: 1,
  color: e.darkest,
  display: "flex",
  alignItems: "center",
  height: "100%",
  "@keyframes spin": {
    from: { transform: "rotate(0deg)" },
    to: { transform: "rotate(360deg)" }
  },
  animation: "spin 1s linear infinite"
})), Xh = x(wt.Error)({
  position: "absolute",
  padding: "8px 40px 8px 16px",
  bottom: 0,
  maxHeight: "initial",
  width: "100%",
  div: {
    wordBreak: "break-word"
  },
  "> div": {
    padding: 0
  }
}), Zh = x(Ao)({
  position: "absolute",
  top: 4,
  right: -24,
  cursor: "pointer"
}), Ru = /* @__PURE__ */ a(({
  open: e,
  onOpenChange: t,
  fileSearchQuery: o,
  setFileSearchQuery: i,
  isLoading: n,
  error: r,
  searchResults: l,
  onCreateNewStory: u,
  setError: c,
  container: p
}) => {
  let [d, g] = fu(), [h, y] = $(g.height), [, f] = hs(), [b, S] = $(o);
  return R(() => {
    h < g.height && y(g.height);
  }, [g.height, h]), /* @__PURE__ */ s.createElement(
    $h,
    {
      height: Vh,
      width: 440,
      open: e,
      onOpenChange: t,
      onEscapeKeyDown: () => {
        t(!1);
      },
      onInteractOutside: () => {
        t(!1);
      },
      container: p
    },
    /* @__PURE__ */ s.createElement(Kh, { height: o === "" ? g.height : h }, /* @__PURE__ */ s.createElement(Uh, { ref: d }, /* @__PURE__ */ s.
    createElement(wt.Header, null, /* @__PURE__ */ s.createElement(wt.Title, null, "Add a new story"), /* @__PURE__ */ s.createElement(wt.Description,
    null, "We will create a new story for your component")), /* @__PURE__ */ s.createElement(Gh, null, /* @__PURE__ */ s.createElement(Yh, null,
    /* @__PURE__ */ s.createElement(Fo, null)), /* @__PURE__ */ s.createElement(
      qh,
      {
        placeholder: "./components/**/*.tsx",
        type: "search",
        required: !0,
        autoFocus: !0,
        value: b,
        onChange: (E) => {
          let m = E.target.value;
          S(m), f(() => {
            i(m);
          });
        }
      }
    ), n && /* @__PURE__ */ s.createElement(Qh, null, /* @__PURE__ */ s.createElement(ft, null))), /* @__PURE__ */ s.createElement(
      zu,
      {
        errorItemId: r?.selectedItemId,
        isLoading: n,
        searchResults: l,
        onNewStory: u
      }
    ))),
    r && o !== "" && /* @__PURE__ */ s.createElement(Xh, null, /* @__PURE__ */ s.createElement("div", null, r.error), /* @__PURE__ */ s.createElement(
      Zh,
      {
        onClick: () => {
          c(null);
        }
      }
    ))
  );
}, "FileSearchModal");

// src/manager/components/sidebar/FileSearchModal.utils.tsx
function Wu(e) {
  return Object.keys(e).reduce(
    (o, i) => {
      let n = e[i];
      if (typeof n.control == "object" && "type" in n.control)
        switch (n.control.type) {
          case "object":
            o[i] = {};
            break;
          case "inline-radio":
          case "radio":
          case "inline-check":
          case "check":
          case "select":
          case "multi-select":
            o[i] = n.control.options?.[0];
            break;
          case "color":
            o[i] = "#000000";
            break;
          default:
            break;
        }
      return Ir(n.type, o, i), o;
    },
    {}
  );
}
a(Wu, "extractSeededRequiredArgs");
function Ir(e, t, o) {
  if (!(typeof e == "string" || !e.required))
    switch (e.name) {
      case "boolean":
        t[o] = !0;
        break;
      case "number":
        t[o] = 0;
        break;
      case "string":
        t[o] = o;
        break;
      case "array":
        t[o] = [];
        break;
      case "object":
        t[o] = {}, Object.entries(e.value ?? {}).forEach(([i, n]) => {
          Ir(n, t[o], i);
        });
        break;
      case "function":
        t[o] = () => {
        };
        break;
      case "intersection":
        e.value?.every((i) => i.name === "object") && (t[o] = {}, e.value?.forEach((i) => {
          i.name === "object" && Object.entries(i.value ?? {}).forEach(([n, r]) => {
            Ir(r, t[o], n);
          });
        }));
        break;
      case "union":
        e.value?.[0] !== void 0 && Ir(e.value[0], t, o);
        break;
      case "enum":
        e.value?.[0] !== void 0 && (t[o] = e.value?.[0]);
        break;
      case "other":
        typeof e.value == "string" && e.value === "tuple" && (t[o] = []);
        break;
      default:
        break;
    }
}
a(Ir, "setArgType");
async function Sr(e, t, o = 1) {
  if (o > 10)
    throw new Error("We could not select the new story. Please try again.");
  try {
    await e(t);
  } catch {
    return await new Promise((n) => setTimeout(n, 500)), Sr(e, t, o + 1);
  }
}
a(Sr, "trySelectNewStory");

// src/manager/components/sidebar/CreateNewStoryFileModal.tsx
var Jh = /* @__PURE__ */ a((e) => JSON.stringify(e, (t, o) => typeof o == "function" ? "__sb_empty_function_arg__" : o), "stringifyArgs"), ju = /* @__PURE__ */ a(
({ open: e, onOpenChange: t }) => {
  let [o, i] = $(!1), [n, r] = $(""), l = du(n, 600), u = ms(l), c = q(null), [p, d] = $(
    null
  ), g = ne(), [h, y] = $(null), f = A(
    (m) => {
      g.addNotification({
        id: "create-new-story-file-success",
        content: {
          headline: "Story file created",
          subHeadline: `${m} was created`
        },
        duration: 8e3,
        icon: /* @__PURE__ */ s.createElement(Re, null)
      }), t(!1);
    },
    [g, t]
  ), b = A(() => {
    g.addNotification({
      id: "create-new-story-file-error",
      content: {
        headline: "Story already exists",
        subHeadline: "Successfully navigated to existing story"
      },
      duration: 8e3,
      icon: /* @__PURE__ */ s.createElement(Re, null)
    }), t(!1);
  }, [g, t]), S = A(() => {
    i(!0);
    let m = Ge.getChannel(), v = /* @__PURE__ */ a((I) => {
      I.id === u && (I.success ? y(I.payload.files) : d({ error: I.error }), m.off(Ho, v), i(!1), c.current = null);
    }, "set");
    return m.on(Ho, v), u !== "" && c.current !== u ? (c.current = u, m.emit(ta, {
      id: u,
      payload: {}
    })) : (y(null), i(!1)), () => {
      m.off(Ho, v);
    };
  }, [u]), E = A(
    async ({
      componentExportName: m,
      componentFilePath: v,
      componentIsDefaultExport: I,
      componentExportCount: w,
      selectedItemId: k
    }) => {
      try {
        let T = Ge.getChannel(), _ = await zo(T, Js, ea, {
          componentExportName: m,
          componentFilePath: v,
          componentIsDefaultExport: I,
          componentExportCount: w
        });
        d(null);
        let C = _.storyId;
        await Sr(g.selectStory, C);
        try {
          let P = (await zo(T, Ys, Qs, {
            storyId: C
          })).argTypes, D = Wu(P);
          await zo(
            T,
            ra,
            na,
            {
              args: Jh(D),
              importPath: _.storyFilePath,
              csfId: C
            }
          );
        } catch {
        }
        f(m), S();
      } catch (T) {
        switch (T?.payload?.type) {
          case "STORY_FILE_EXISTS":
            let _ = T;
            await Sr(g.selectStory, _.payload.kind), b();
            break;
          default:
            d({ selectedItemId: k, error: T?.message });
            break;
        }
      }
    },
    [g?.selectStory, f, S, b]
  );
  return R(() => {
    d(null);
  }, [u]), R(() => S(), [S]), /* @__PURE__ */ s.createElement(
    Ru,
    {
      error: p,
      fileSearchQuery: n,
      fileSearchQueryDeferred: u,
      onCreateNewStory: E,
      isLoading: o,
      onOpenChange: t,
      open: e,
      searchResults: h,
      setError: d,
      setFileSearchQuery: r
    }
  );
}, "CreateNewStoryFileModal");

// src/manager/components/sidebar/HighlightStyles.tsx
var Vu = /* @__PURE__ */ a(({ refId: e, itemId: t }) => /* @__PURE__ */ s.createElement(
  Ut,
  {
    styles: ({ color: o }) => {
      let i = Ee(0.85, o.secondary);
      return {
        [`[data-ref-id="${e}"][data-item-id="${t}"]:not([data-selected="true"])`]: {
          '&[data-nodetype="component"], &[data-nodetype="group"]': {
            background: i,
            "&:hover, &:focus": { background: i }
          },
          '&[data-nodetype="story"], &[data-nodetype="document"]': {
            color: o.defaultText,
            background: i,
            "&:hover, &:focus": { background: i }
          }
        }
      };
    }
  }
), "HighlightStyles");

// src/manager/utils/tree.ts
var eo = Be(cr(), 1);
var { document: ei, window: eg } = ie, wr = /* @__PURE__ */ a((e, t) => !t || t === it ? e : `${t}_${e}`, "createId"), Uu = /* @__PURE__ */ a(
(e, t) => `${ei.location.pathname}?path=/${e.type}/${wr(e.id, t)}`, "getLink");
var $u = (0, eo.default)(1e3)((e, t) => t[e]), tg = (0, eo.default)(1e3)((e, t) => {
  let o = $u(e, t);
  return o && o.type !== "root" ? $u(o.parent, t) : void 0;
}), qu = (0, eo.default)(1e3)((e, t) => {
  let o = tg(e, t);
  return o ? [o, ...qu(o.id, t)] : [];
}), bo = (0, eo.default)(1e3)(
  (e, t) => qu(t, e).map((o) => o.id)
), nt = (0, eo.default)(1e3)((e, t, o) => {
  let i = e[t];
  return (i.type === "story" || i.type === "docs" ? [] : i.children).reduce((r, l) => {
    let u = e[l];
    return !u || o && (u.type === "story" || u.type === "docs") || r.push(l, ...nt(e, l, o)), r;
  }, []);
});
function Gu(e, t) {
  let o = e.type !== "root" && e.parent ? t.index[e.parent] : null;
  return o ? [...Gu(o, t), o.name] : t.id === it ? [] : [t.title || t.id];
}
a(Gu, "getPath");
var ti = /* @__PURE__ */ a((e, t) => ({ ...e, refId: t.id, path: Gu(e, t) }), "searchItem");
function Yu(e, t, o) {
  let i = t + o % e.length;
  return i < 0 && (i = e.length + i), i >= e.length && (i -= e.length), i;
}
a(Yu, "cycle");
var Dt = /* @__PURE__ */ a((e, t = !1) => {
  if (!e)
    return;
  let { top: o, bottom: i } = e.getBoundingClientRect();
  if (!o || !i)
    return;
  let n = ei?.querySelector("#sidebar-bottom-wrapper")?.getBoundingClientRect().top || eg.innerHeight || ei.documentElement.clientHeight;
  i > n && e.scrollIntoView({ block: t ? "center" : "nearest" });
}, "scrollIntoView"), Qu = /* @__PURE__ */ a((e, t, o, i) => {
  switch (!0) {
    case t:
      return "auth";
    case o:
      return "error";
    case e:
      return "loading";
    case i:
      return "empty";
    default:
      return "ready";
  }
}, "getStateType"), Mt = /* @__PURE__ */ a((e, t) => !e || !t ? !1 : e === t ? !0 : Mt(e.parentElement || void 0, t), "isAncestor"), Ku = /* @__PURE__ */ a(
(e) => e.replaceAll(/(\s|-|_)/gi, ""), "removeNoiseFromName"), Xu = /* @__PURE__ */ a((e, t) => Ku(e) === Ku(t), "isStoryHoistable");

// global-externals:@storybook/core/client-logger
var $A = __STORYBOOK_CLIENT_LOGGER__, { deprecate: KA, logger: Zu, once: UA, pretty: qA } = __STORYBOOK_CLIENT_LOGGER__;

// src/manager/components/sidebar/Loader.tsx
var Ju = [0, 0, 1, 1, 2, 3, 3, 3, 1, 1, 1, 2, 2, 2, 3], og = x.div(
  {
    cursor: "progress",
    fontSize: 13,
    height: "16px",
    marginTop: 4,
    marginBottom: 4,
    alignItems: "center",
    overflow: "hidden"
  },
  ({ depth: e = 0 }) => ({
    marginLeft: e * 15,
    maxWidth: 85 - e * 5
  }),
  ({ theme: e }) => e.animation.inlineGlow,
  ({ theme: e }) => ({
    background: e.appBorderColor
  })
), vo = x.div({
  display: "flex",
  flexDirection: "column",
  paddingLeft: 20,
  paddingRight: 20
}), ec = /* @__PURE__ */ a(({ size: e }) => {
  let t = Math.ceil(e / Ju.length), o = Array.from(Array(t)).fill(Ju).flat().slice(0, e);
  return /* @__PURE__ */ s.createElement(we, null, o.map((i, n) => /* @__PURE__ */ s.createElement(og, { depth: i, key: n })));
}, "Loader");

// src/manager/components/sidebar/RefBlocks.tsx
var { window: tc } = ie, rg = x.div(({ theme: e }) => ({
  fontSize: e.typography.size.s2,
  lineHeight: "20px",
  margin: 0
})), oi = x.div(({ theme: e }) => ({
  fontSize: e.typography.size.s2,
  lineHeight: "20px",
  margin: 0,
  code: {
    fontSize: e.typography.size.s1
  },
  ul: {
    paddingLeft: 20,
    marginTop: 8,
    marginBottom: 8
  }
})), ng = x.pre(
  {
    width: 420,
    boxSizing: "border-box",
    borderRadius: 8,
    overflow: "auto",
    whiteSpace: "pre"
  },
  ({ theme: e }) => ({
    color: e.color.dark
  })
), oc = /* @__PURE__ */ a(({ loginUrl: e, id: t }) => {
  let [o, i] = $(!1), n = A(() => {
    tc.document.location.reload();
  }, []), r = A((l) => {
    l.preventDefault();
    let u = tc.open(e, `storybook_auth_${t}`, "resizable,scrollbars"), c = setInterval(() => {
      u ? u.closed && (clearInterval(c), i(!0)) : (Zu.error("unable to access loginUrl window"), clearInterval(c));
    }, 1e3);
  }, []);
  return /* @__PURE__ */ s.createElement(vo, null, /* @__PURE__ */ s.createElement(at, null, o ? /* @__PURE__ */ s.createElement(we, null, /* @__PURE__ */ s.
  createElement(oi, null, "Authentication on ", /* @__PURE__ */ s.createElement("strong", null, e), " concluded. Refresh the page to fetch t\
his Storybook."), /* @__PURE__ */ s.createElement("div", null, /* @__PURE__ */ s.createElement(fe, { small: !0, gray: !0, onClick: n }, /* @__PURE__ */ s.
  createElement(ft, null), "Refresh now"))) : /* @__PURE__ */ s.createElement(we, null, /* @__PURE__ */ s.createElement(oi, null, "Sign in t\
o browse this Storybook."), /* @__PURE__ */ s.createElement("div", null, /* @__PURE__ */ s.createElement(fe, { small: !0, gray: !0, onClick: r },
  /* @__PURE__ */ s.createElement(Lo, null), "Sign in")))));
}, "AuthBlock"), rc = /* @__PURE__ */ a(({ error: e }) => /* @__PURE__ */ s.createElement(vo, null, /* @__PURE__ */ s.createElement(at, null,
/* @__PURE__ */ s.createElement(rg, null, "Oh no! Something went wrong loading this Storybook.", /* @__PURE__ */ s.createElement("br", null),
/* @__PURE__ */ s.createElement(
  ye,
  {
    tooltip: /* @__PURE__ */ s.createElement(ng, null, /* @__PURE__ */ s.createElement($a, { error: e }))
  },
  /* @__PURE__ */ s.createElement(Ae, { isButton: !0 }, "View error ", /* @__PURE__ */ s.createElement($t, null))
), " ", /* @__PURE__ */ s.createElement(Ae, { withArrow: !0, href: "https://storybook.js.org/docs", cancel: !1, target: "_blank" }, "View do\
cs")))), "ErrorBlock"), ig = x(at)({
  display: "flex"
}), sg = x(at)({
  flex: 1
}), nc = /* @__PURE__ */ a(({ isMain: e }) => /* @__PURE__ */ s.createElement(vo, null, /* @__PURE__ */ s.createElement(ig, { col: 1 }, /* @__PURE__ */ s.
createElement(sg, null, /* @__PURE__ */ s.createElement(oi, null, e ? /* @__PURE__ */ s.createElement(s.Fragment, null, "Oh no! Your Storybo\
ok is empty. Possible reasons why:", /* @__PURE__ */ s.createElement("ul", null, /* @__PURE__ */ s.createElement("li", null, "The glob speci\
fied in ", /* @__PURE__ */ s.createElement("code", null, "main.js"), " isn't correct."), /* @__PURE__ */ s.createElement("li", null, "No sto\
ries are defined in your story files."), /* @__PURE__ */ s.createElement("li", null, "You're using filter-functions, and all stories are fil\
tered away.")), " ") : /* @__PURE__ */ s.createElement(s.Fragment, null, "This composed storybook is empty, maybe you're using filter-functi\
ons, and all stories are filtered away."))))), "EmptyBlock"), ic = /* @__PURE__ */ a(({ isMain: e }) => /* @__PURE__ */ s.createElement(vo, null,
/* @__PURE__ */ s.createElement(ec, { size: e ? 17 : 5 })), "LoaderBlock");

// src/manager/components/sidebar/RefIndicator.tsx
var { document: ag, window: lg } = ie, ug = x.aside(({ theme: e }) => ({
  height: 16,
  display: "flex",
  alignItems: "center",
  "& > * + *": {
    marginLeft: e.layoutMargin
  }
})), cg = x.button(({ theme: e }) => ({
  height: 20,
  width: 20,
  padding: 0,
  margin: 0,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  background: "transparent",
  outline: "none",
  border: "1px solid transparent",
  borderRadius: "100%",
  cursor: "pointer",
  color: e.base === "light" ? Ee(0.3, e.color.defaultText) : Ee(0.6, e.color.defaultText),
  "&:hover": {
    color: e.barSelectedColor
  },
  "&:focus": {
    color: e.barSelectedColor,
    borderColor: e.color.secondary
  },
  svg: {
    height: 10,
    width: 10,
    transition: "all 150ms ease-out",
    color: "inherit"
  }
})), Lt = x.span(({ theme: e }) => ({
  fontWeight: e.typography.weight.bold
})), Nt = x.a(({ theme: e }) => ({
  textDecoration: "none",
  lineHeight: "16px",
  padding: 15,
  display: "flex",
  flexDirection: "row",
  alignItems: "flex-start",
  color: e.color.defaultText,
  "&:not(:last-child)": {
    borderBottom: `1px solid ${e.appBorderColor}`
  },
  "&:hover": {
    background: e.background.hoverable,
    color: e.color.darker
  },
  "&:link": {
    color: e.color.darker
  },
  "&:active": {
    color: e.color.darker
  },
  "&:focus": {
    color: e.color.darker
  },
  "& > *": {
    flex: 1
  },
  "& > svg": {
    marginTop: 3,
    width: 16,
    height: 16,
    marginRight: 10,
    flex: "unset"
  }
})), pg = x.div({
  width: 280,
  boxSizing: "border-box",
  borderRadius: 8,
  overflow: "hidden"
}), dg = x.div(({ theme: e }) => ({
  display: "flex",
  alignItems: "center",
  fontSize: e.typography.size.s1,
  fontWeight: e.typography.weight.regular,
  color: e.base === "light" ? Ee(0.3, e.color.defaultText) : Ee(0.6, e.color.defaultText),
  "& > * + *": {
    marginLeft: 4
  },
  svg: {
    height: 10,
    width: 10
  }
})), fg = /* @__PURE__ */ a(({ url: e, versions: t }) => {
  let o = K(() => {
    let i = Object.entries(t).find(([n, r]) => r === e);
    return i && i[0] ? i[0] : "current";
  }, [e, t]);
  return /* @__PURE__ */ s.createElement(dg, null, /* @__PURE__ */ s.createElement("span", null, o), /* @__PURE__ */ s.createElement($t, null));
}, "CurrentVersion"), sc = s.memo(
  fs(
    ({ state: e, ...t }, o) => {
      let i = ne(), n = K(() => Object.values(t.index || {}), [t.index]), r = K(
        () => n.filter((u) => u.type === "component").length,
        [n]
      ), l = K(
        () => n.filter((u) => u.type === "docs" || u.type === "story").length,
        [n]
      );
      return /* @__PURE__ */ s.createElement(ug, { ref: o }, /* @__PURE__ */ s.createElement(
        ye,
        {
          placement: "bottom-start",
          trigger: "click",
          closeOnOutsideClick: !0,
          tooltip: /* @__PURE__ */ s.createElement(pg, null, /* @__PURE__ */ s.createElement(at, { row: 0 }, e === "loading" && /* @__PURE__ */ s.
          createElement(vg, { url: t.url }), (e === "error" || e === "empty") && /* @__PURE__ */ s.createElement(bg, { url: t.url }), e === "\
ready" && /* @__PURE__ */ s.createElement(s.Fragment, null, /* @__PURE__ */ s.createElement(mg, { url: t.url, componentCount: r, leafCount: l }),
          t.sourceUrl && /* @__PURE__ */ s.createElement(hg, { url: t.sourceUrl })), e === "auth" && /* @__PURE__ */ s.createElement(gg, { ...t }),
          t.type === "auto-inject" && e !== "error" && /* @__PURE__ */ s.createElement(xg, null), e !== "loading" && /* @__PURE__ */ s.createElement(
          yg, null)))
        },
        /* @__PURE__ */ s.createElement(cg, { "data-action": "toggle-indicator", "aria-label": "toggle indicator" }, /* @__PURE__ */ s.createElement(
        an, null))
      ), t.versions && Object.keys(t.versions).length ? /* @__PURE__ */ s.createElement(
        ye,
        {
          placement: "bottom-start",
          trigger: "click",
          closeOnOutsideClick: !0,
          tooltip: (u) => /* @__PURE__ */ s.createElement(
            ht,
            {
              links: Object.entries(t.versions).map(([c, p]) => ({
                icon: p === t.url ? /* @__PURE__ */ s.createElement(Re, null) : void 0,
                id: c,
                title: c,
                href: p,
                onClick: /* @__PURE__ */ a((d, g) => {
                  d.preventDefault(), i.changeRefVersion(t.id, g.href), u.onHide();
                }, "onClick")
              }))
            }
          )
        },
        /* @__PURE__ */ s.createElement(fg, { url: t.url, versions: t.versions })
      ) : null);
    }
  )
), mg = /* @__PURE__ */ a(({ url: e, componentCount: t, leafCount: o }) => {
  let i = Oe();
  return /* @__PURE__ */ s.createElement(Nt, { href: e.replace(/\/?$/, "/index.html"), target: "_blank" }, /* @__PURE__ */ s.createElement(an,
  { color: i.color.secondary }), /* @__PURE__ */ s.createElement("div", null, /* @__PURE__ */ s.createElement(Lt, null, "View external Story\
book"), /* @__PURE__ */ s.createElement("div", null, "Explore ", t, " components and ", o, " stories in a new browser tab.")));
}, "ReadyMessage"), hg = /* @__PURE__ */ a(({ url: e }) => {
  let t = Oe();
  return /* @__PURE__ */ s.createElement(Nt, { href: e, target: "_blank" }, /* @__PURE__ */ s.createElement(Ms, { color: t.color.secondary }),
  /* @__PURE__ */ s.createElement("div", null, /* @__PURE__ */ s.createElement(Lt, null, "View source code")));
}, "SourceCodeMessage"), gg = /* @__PURE__ */ a(({ loginUrl: e, id: t }) => {
  let o = Oe(), i = A((n) => {
    n.preventDefault();
    let r = lg.open(e, `storybook_auth_${t}`, "resizable,scrollbars"), l = setInterval(() => {
      r ? r.closed && (clearInterval(l), ag.location.reload()) : clearInterval(l);
    }, 1e3);
  }, []);
  return /* @__PURE__ */ s.createElement(Nt, { onClick: i }, /* @__PURE__ */ s.createElement(Lo, { color: o.color.gold }), /* @__PURE__ */ s.
  createElement("div", null, /* @__PURE__ */ s.createElement(Lt, null, "Log in required"), /* @__PURE__ */ s.createElement("div", null, "You\
 need to authenticate to view this Storybook's components.")));
}, "LoginRequiredMessage"), yg = /* @__PURE__ */ a(() => {
  let e = Oe();
  return /* @__PURE__ */ s.createElement(Nt, { href: "https://storybook.js.org/docs/sharing/storybook-composition", target: "_blank" }, /* @__PURE__ */ s.
  createElement(Kt, { color: e.color.green }), /* @__PURE__ */ s.createElement("div", null, /* @__PURE__ */ s.createElement(Lt, null, "Read \
Composition docs"), /* @__PURE__ */ s.createElement("div", null, "Learn how to combine multiple Storybooks into one.")));
}, "ReadDocsMessage"), bg = /* @__PURE__ */ a(({ url: e }) => {
  let t = Oe();
  return /* @__PURE__ */ s.createElement(Nt, { href: e.replace(/\/?$/, "/index.html"), target: "_blank" }, /* @__PURE__ */ s.createElement(Oo,
  { color: t.color.negative }), /* @__PURE__ */ s.createElement("div", null, /* @__PURE__ */ s.createElement(Lt, null, "Something went wrong"),
  /* @__PURE__ */ s.createElement("div", null, "This external Storybook didn't load. Debug it in a new tab now.")));
}, "ErrorOccurredMessage"), vg = /* @__PURE__ */ a(({ url: e }) => {
  let t = Oe();
  return /* @__PURE__ */ s.createElement(Nt, { href: e.replace(/\/?$/, "/index.html"), target: "_blank" }, /* @__PURE__ */ s.createElement(js,
  { color: t.color.secondary }), /* @__PURE__ */ s.createElement("div", null, /* @__PURE__ */ s.createElement(Lt, null, "Please wait"), /* @__PURE__ */ s.
  createElement("div", null, "This Storybook is loading.")));
}, "LoadingMessage"), xg = /* @__PURE__ */ a(() => {
  let e = Oe();
  return /* @__PURE__ */ s.createElement(Nt, { href: "https://storybook.js.org/docs/sharing/storybook-composition", target: "_blank" }, /* @__PURE__ */ s.
  createElement(As, { color: e.color.gold }), /* @__PURE__ */ s.createElement("div", null, /* @__PURE__ */ s.createElement(Lt, null, "Reduce\
 lag"), /* @__PURE__ */ s.createElement("div", null, "Learn how to speed up Composition performance.")));
}, "PerformanceDegradedMessage");

// src/manager/components/sidebar/IconSymbols.tsx
var Ig = x.svg`
  position: absolute;
  width: 0;
  height: 0;
  display: inline-block;
  shape-rendering: inherit;
  vertical-align: middle;
`, ac = "icon--group", lc = "icon--component", uc = "icon--document", cc = "icon--story", pc = "icon--success", dc = "icon--error", fc = "ic\
on--warning", mc = "icon--dot", hc = /* @__PURE__ */ a(() => /* @__PURE__ */ s.createElement(Ig, { "data-chromatic": "ignore" }, /* @__PURE__ */ s.
createElement("symbol", { id: ac }, /* @__PURE__ */ s.createElement(
  "path",
  {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M6.586 3.504l-1.5-1.5H1v9h12v-7.5H6.586zm.414-1L5.793 1.297a1 1 0 00-.707-.293H.5a.5.5 0 00-.5.5v10a.5.5 0 00.5.5h13a.5.5 0 00.5-.5v\
-8.5a.5.5 0 00-.5-.5H7z",
    fill: "currentColor"
  }
)), /* @__PURE__ */ s.createElement("symbol", { id: lc }, /* @__PURE__ */ s.createElement(
  "path",
  {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M3.5 1.004a2.5 2.5 0 00-2.5 2.5v7a2.5 2.5 0 002.5 2.5h7a2.5 2.5 0 002.5-2.5v-7a2.5 2.5 0 00-2.5-2.5h-7zm8.5 5.5H7.5v-4.5h3a1.5 1.5 0\
 011.5 1.5v3zm0 1v3a1.5 1.5 0 01-1.5 1.5h-3v-4.5H12zm-5.5 4.5v-4.5H2v3a1.5 1.5 0 001.5 1.5h3zM2 6.504h4.5v-4.5h-3a1.5 1.5 0 00-1.5 1.5v3z",
    fill: "currentColor"
  }
)), /* @__PURE__ */ s.createElement("symbol", { id: uc }, /* @__PURE__ */ s.createElement(
  "path",
  {
    d: "M4 5.5a.5.5 0 01.5-.5h5a.5.5 0 010 1h-5a.5.5 0 01-.5-.5zM4.5 7.5a.5.5 0 000 1h5a.5.5 0 000-1h-5zM4 10.5a.5.5 0 01.5-.5h5a.5.5 0 010 \
1h-5a.5.5 0 01-.5-.5z",
    fill: "currentColor"
  }
), /* @__PURE__ */ s.createElement(
  "path",
  {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M1.5 0a.5.5 0 00-.5.5v13a.5.5 0 00.5.5h11a.5.5 0 00.5-.5V3.207a.5.5 0 00-.146-.353L10.146.146A.5.5 0 009.793 0H1.5zM2 1h7.5v2a.5.5 0\
 00.5.5h2V13H2V1z",
    fill: "currentColor"
  }
)), /* @__PURE__ */ s.createElement("symbol", { id: cc }, /* @__PURE__ */ s.createElement(
  "path",
  {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M3.5 0h7a.5.5 0 01.5.5v13a.5.5 0 01-.454.498.462.462 0 01-.371-.118L7 11.159l-3.175 2.72a.46.46 0 01-.379.118A.5.5 0 013 13.5V.5a.5.\
5 0 01.5-.5zM4 12.413l2.664-2.284a.454.454 0 01.377-.128.498.498 0 01.284.12L10 12.412V1H4v11.413z",
    fill: "currentColor"
  }
)), /* @__PURE__ */ s.createElement("symbol", { id: pc }, /* @__PURE__ */ s.createElement(
  "path",
  {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M10.854 4.146a.5.5 0 010 .708l-5 5a.5.5 0 01-.708 0l-2-2a.5.5 0 11.708-.708L5.5 8.793l4.646-4.647a.5.5 0 01.708 0z",
    fill: "currentColor"
  }
)), /* @__PURE__ */ s.createElement("symbol", { id: dc }, /* @__PURE__ */ s.createElement(
  "path",
  {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M7 4a3 3 0 100 6 3 3 0 000-6zM3 7a4 4 0 118 0 4 4 0 01-8 0z",
    fill: "currentColor"
  }
)), /* @__PURE__ */ s.createElement("symbol", { id: fc }, /* @__PURE__ */ s.createElement(
  "path",
  {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M7.206 3.044a.498.498 0 01.23.212l3.492 5.985a.494.494 0 01.006.507.497.497 0 01-.443.252H3.51a.499.499 0 01-.437-.76l3.492-5.984a.4\
97.497 0 01.642-.212zM7 4.492L4.37 9h5.26L7 4.492z",
    fill: "currentColor"
  }
)), /* @__PURE__ */ s.createElement("symbol", { id: mc }, /* @__PURE__ */ s.createElement("circle", { cx: "3", cy: "3", r: "3", fill: "curre\
ntColor" }))), "IconSymbols"), Le = /* @__PURE__ */ a(({ type: e }) => e === "group" ? /* @__PURE__ */ s.createElement("use", { xlinkHref: `\
#${ac}` }) : e === "component" ? /* @__PURE__ */ s.createElement("use", { xlinkHref: `#${lc}` }) : e === "document" ? /* @__PURE__ */ s.createElement(
"use", { xlinkHref: `#${uc}` }) : e === "story" ? /* @__PURE__ */ s.createElement("use", { xlinkHref: `#${cc}` }) : e === "success" ? /* @__PURE__ */ s.
createElement("use", { xlinkHref: `#${pc}` }) : e === "error" ? /* @__PURE__ */ s.createElement("use", { xlinkHref: `#${dc}` }) : e === "war\
ning" ? /* @__PURE__ */ s.createElement("use", { xlinkHref: `#${fc}` }) : e === "dot" ? /* @__PURE__ */ s.createElement("use", { xlinkHref: `\
#${mc}` }) : null, "UseSymbol");

// src/manager/utils/status.tsx
var Sg = x(Is)({
  // specificity hack
  "&&&": {
    width: 6,
    height: 6
  }
}), wg = x(Sg)(({ theme: { animation: e, color: t, base: o } }) => ({
  // specificity hack
  animation: `${e.glow} 1.5s ease-in-out infinite`,
  color: o === "light" ? t.mediumdark : t.darker
})), Eg = ["unknown", "pending", "success", "warn", "error"], xo = {
  unknown: [null, null],
  pending: [/* @__PURE__ */ s.createElement(wg, { key: "icon" }), "currentColor"],
  success: [
    /* @__PURE__ */ s.createElement("svg", { key: "icon", viewBox: "0 0 14 14", width: "14", height: "14" }, /* @__PURE__ */ s.createElement(
    Le, { type: "success" })),
    "currentColor"
  ],
  warn: [
    /* @__PURE__ */ s.createElement("svg", { key: "icon", viewBox: "0 0 14 14", width: "14", height: "14" }, /* @__PURE__ */ s.createElement(
    Le, { type: "warning" })),
    "#A15C20"
  ],
  error: [
    /* @__PURE__ */ s.createElement("svg", { key: "icon", viewBox: "0 0 14 14", width: "14", height: "14" }, /* @__PURE__ */ s.createElement(
    Le, { type: "error" })),
    "brown"
  ]
}, Io = /* @__PURE__ */ a((e) => Eg.reduce(
  (t, o) => e.includes(o) ? o : t,
  "unknown"
), "getHighestStatus");
function Er(e, t) {
  return Object.values(e).reduce((o, i) => {
    if (i.type === "group" || i.type === "component") {
      let n = nt(e, i.id, !1).map((l) => e[l]).filter((l) => l.type === "story"), r = Io(
        // @ts-expect-error (non strict)
        n.flatMap((l) => Object.values(t?.[l.id] || {})).map((l) => l.status)
      );
      r && (o[i.id] = r);
    }
    return o;
  }, {});
}
a(Er, "getGroupStatus");

// src/manager/components/sidebar/StatusButton.tsx
var gc = /* @__PURE__ */ a(({ theme: e, status: t }) => {
  let o = e.base === "light" ? Ee(0.3, e.color.defaultText) : Ee(0.6, e.color.defaultText);
  return {
    color: {
      pending: o,
      success: e.color.positive,
      error: e.color.negative,
      warn: e.color.warning,
      unknown: o
    }[t]
  };
}, "withStatusColor"), yc = x.div(gc, {
  margin: 3
}), So = x(ee)(
  gc,
  ({ theme: e, height: t, width: o }) => ({
    transition: "none",
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    width: o || 28,
    height: t || 28,
    "&:hover": {
      color: e.color.secondary,
      background: e.base === "dark" ? ir(0.3, e.color.secondary) : po(0.4, e.color.secondary)
    },
    '[data-selected="true"] &': {
      background: e.color.secondary,
      boxShadow: `0 0 5px 5px ${e.color.secondary}`,
      "&:hover": {
        background: po(0.1, e.color.secondary)
      }
    },
    "&:focus": {
      color: e.color.secondary,
      borderColor: e.color.secondary,
      "&:not(:focus-visible)": {
        borderColor: "transparent"
      }
    }
  }),
  ({ theme: e, selectedItem: t }) => t && {
    "&:hover": {
      boxShadow: `inset 0 0 0 2px ${e.color.secondary}`,
      background: "rgba(255, 255, 255, 0.2)"
    }
  }
);

// src/manager/components/sidebar/ContextMenu.tsx
var Cg = {
  onMouseEnter: /* @__PURE__ */ a(() => {
  }, "onMouseEnter"),
  node: null
}, Tg = x(ye)({
  position: "absolute",
  right: 0,
  zIndex: 1
}), _g = x(So)({
  background: "var(--tree-node-background-hover)",
  boxShadow: "0 0 5px 5px var(--tree-node-background-hover)"
}), bc = /* @__PURE__ */ a((e, t, o) => {
  let [i, n] = $(0), [r, l] = $(!1), u = K(() => ({
    onMouseEnter: /* @__PURE__ */ a(() => {
      n((d) => d + 1);
    }, "onMouseEnter"),
    onOpen: /* @__PURE__ */ a((d) => {
      d.stopPropagation(), l(!0);
    }, "onOpen"),
    onClose: /* @__PURE__ */ a(() => {
      l(!1);
    }, "onClose")
  }), []), p = K(() => {
    let d = o.getElements(
      Ce.experimental_TEST_PROVIDER
    );
    return i ? vc(d, e) : [];
  }, [o, e, i]).length > 0 || t.length > 0;
  return K(() => globalThis.CONFIG_TYPE !== "DEVELOPMENT" ? Cg : {
    onMouseEnter: u.onMouseEnter,
    node: p ? /* @__PURE__ */ s.createElement(
      Tg,
      {
        "data-displayed": r ? "on" : "off",
        closeOnOutsideClick: !0,
        placement: "bottom-end",
        "data-testid": "context-menu",
        onVisibleChange: (d) => {
          d ? l(!0) : u.onClose();
        },
        tooltip: /* @__PURE__ */ s.createElement(kg, { context: e, links: t })
      },
      /* @__PURE__ */ s.createElement(_g, { type: "button", status: "pending" }, /* @__PURE__ */ s.createElement(ws, null))
    ) : null
  }, [e, u, r, p, t]);
}, "useContextMenu"), kg = /* @__PURE__ */ a(({
  context: e,
  links: t,
  ...o
}) => {
  let { testProviders: i } = Me(), n = vc(i, e), l = (Array.isArray(t[0]) ? t : [t]).concat([n]);
  return /* @__PURE__ */ s.createElement(ht, { ...o, links: l });
}, "LiveContextMenu");
function vc(e, t) {
  return Object.entries(e).map(([o, i]) => {
    if (!i)
      return null;
    let n = i.sidebarContextMenu?.({ context: t, state: i });
    return n ? {
      id: o,
      content: n
    } : null;
  }).filter(Boolean);
}
a(vc, "generateTestProviderLinks");

// src/manager/components/sidebar/StatusContext.tsx
var ri = jt({}), xc = /* @__PURE__ */ a((e) => {
  let { data: t, status: o, groupStatus: i } = ko(ri), n = {
    counts: { pending: 0, success: 0, error: 0, warn: 0, unknown: 0 },
    statuses: { pending: {}, success: {}, error: {}, warn: {}, unknown: {} }
  };
  if (t && o && i && ["pending", "warn", "error"].includes(i[e.id]))
    for (let r of nt(t, e.id, !1))
      for (let l of Object.values(o[r] || {}))
        n.counts[l.status]++, n.statuses[l.status][r] = n.statuses[l.status][r] || [], n.statuses[l.status][r].push(l);
  return n;
}, "useStatusSummary");

// src/manager/components/sidebar/components/CollapseIcon.tsx
var Og = x.div(({ theme: e, isExpanded: t }) => ({
  width: 8,
  height: 8,
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  color: Ee(0.4, e.textMutedColor),
  transform: t ? "rotateZ(90deg)" : "none",
  transition: "transform .1s ease-out"
})), Ft = /* @__PURE__ */ a(({ isExpanded: e }) => /* @__PURE__ */ s.createElement(Og, { isExpanded: e }, /* @__PURE__ */ s.createElement("s\
vg", { xmlns: "http://www.w3.org/2000/svg", width: "8", height: "8", fill: "none" }, /* @__PURE__ */ s.createElement(
  "path",
  {
    fill: "#73828C",
    fillRule: "evenodd",
    d: "M1.896 7.146a.5.5 0 1 0 .708.708l3.5-3.5a.5.5 0 0 0 0-.708l-3.5-3.5a.5.5 0 1 0-.708.708L5.043 4 1.896 7.146Z",
    clipRule: "evenodd"
  }
))), "CollapseIcon");

// src/manager/components/sidebar/TreeNode.tsx
var yt = x.svg(
  ({ theme: e, type: t }) => ({
    width: 14,
    height: 14,
    flex: "0 0 auto",
    color: t === "group" ? e.base === "dark" ? e.color.primary : e.color.ultraviolet : t === "component" ? e.color.secondary : t === "docume\
nt" ? e.base === "dark" ? e.color.gold : "#ff8300" : t === "story" ? e.color.seafoam : "currentColor"
  })
), Ic = x.button(({ theme: e, depth: t = 0, isExpandable: o = !1 }) => ({
  width: "100%",
  border: "none",
  cursor: "pointer",
  display: "flex",
  alignItems: "start",
  textAlign: "left",
  paddingLeft: `${(o ? 8 : 22) + t * 18}px`,
  color: "inherit",
  fontSize: `${e.typography.size.s2}px`,
  background: "transparent",
  minHeight: 28,
  borderRadius: 4,
  gap: 6,
  paddingTop: 5,
  paddingBottom: 4
})), Sc = x.a(({ theme: e, depth: t = 0 }) => ({
  width: "100%",
  cursor: "pointer",
  color: "inherit",
  display: "flex",
  gap: 6,
  flex: 1,
  alignItems: "start",
  paddingLeft: `${22 + t * 18}px`,
  paddingTop: 5,
  paddingBottom: 4,
  fontSize: `${e.typography.size.s2}px`,
  textDecoration: "none",
  overflowWrap: "break-word",
  wordWrap: "break-word",
  wordBreak: "break-word"
})), wc = x.div(({ theme: e }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  marginTop: 16,
  marginBottom: 4,
  fontSize: `${e.typography.size.s1 - 1}px`,
  fontWeight: e.typography.weight.bold,
  lineHeight: "16px",
  minHeight: 28,
  letterSpacing: "0.16em",
  textTransform: "uppercase",
  color: e.textMutedColor
})), Cr = x.div({
  display: "flex",
  alignItems: "center",
  gap: 6,
  marginTop: 2
}), Ec = s.memo(/* @__PURE__ */ a(function({
  children: t,
  isExpanded: o = !1,
  isExpandable: i = !1,
  ...n
}) {
  return /* @__PURE__ */ s.createElement(Ic, { isExpandable: i, tabIndex: -1, ...n }, /* @__PURE__ */ s.createElement(Cr, null, i && /* @__PURE__ */ s.
  createElement(Ft, { isExpanded: o }), /* @__PURE__ */ s.createElement(yt, { viewBox: "0 0 14 14", width: "14", height: "14", type: "group" },
  /* @__PURE__ */ s.createElement(Le, { type: "group" }))), t);
}, "GroupNode")), Cc = s.memo(
  /* @__PURE__ */ a(function({ theme: t, children: o, isExpanded: i, isExpandable: n, isSelected: r, ...l }) {
    return /* @__PURE__ */ s.createElement(Ic, { isExpandable: n, tabIndex: -1, ...l }, /* @__PURE__ */ s.createElement(Cr, null, n && /* @__PURE__ */ s.
    createElement(Ft, { isExpanded: i }), /* @__PURE__ */ s.createElement(yt, { viewBox: "0 0 14 14", width: "12", height: "12", type: "comp\
onent" }, /* @__PURE__ */ s.createElement(Le, { type: "component" }))), o);
  }, "ComponentNode")
), Tc = s.memo(
  /* @__PURE__ */ a(function({ theme: t, children: o, docsMode: i, ...n }) {
    return /* @__PURE__ */ s.createElement(Sc, { tabIndex: -1, ...n }, /* @__PURE__ */ s.createElement(Cr, null, /* @__PURE__ */ s.createElement(
    yt, { viewBox: "0 0 14 14", width: "12", height: "12", type: "document" }, /* @__PURE__ */ s.createElement(Le, { type: "document" }))), o);
  }, "DocumentNode")
), _c = s.memo(/* @__PURE__ */ a(function({
  theme: t,
  children: o,
  ...i
}) {
  return /* @__PURE__ */ s.createElement(Sc, { tabIndex: -1, ...i }, /* @__PURE__ */ s.createElement(Cr, null, /* @__PURE__ */ s.createElement(
  yt, { viewBox: "0 0 14 14", width: "12", height: "12", type: "story" }, /* @__PURE__ */ s.createElement(Le, { type: "story" }))), o);
}, "StoryNode"));

// ../node_modules/es-toolkit/dist/function/debounce.mjs
function Tr(e, t, { signal: o, edges: i } = {}) {
  let n, r = null, l = i != null && i.includes("leading"), u = i == null || i.includes("trailing"), c = /* @__PURE__ */ a(() => {
    r !== null && (e.apply(n, r), n = void 0, r = null);
  }, "invoke"), p = /* @__PURE__ */ a(() => {
    u && c(), y();
  }, "onTimerEnd"), d = null, g = /* @__PURE__ */ a(() => {
    d != null && clearTimeout(d), d = setTimeout(() => {
      d = null, p();
    }, t);
  }, "schedule"), h = /* @__PURE__ */ a(() => {
    d !== null && (clearTimeout(d), d = null);
  }, "cancelTimer"), y = /* @__PURE__ */ a(() => {
    h(), n = void 0, r = null;
  }, "cancel"), f = /* @__PURE__ */ a(() => {
    h(), c();
  }, "flush"), b = /* @__PURE__ */ a(function(...S) {
    if (o?.aborted)
      return;
    n = this, r = S;
    let E = d == null;
    g(), l && E && c();
  }, "debounced");
  return b.schedule = g, b.cancel = y, b.flush = f, o?.addEventListener("abort", y, { once: !0 }), b;
}
a(Tr, "debounce");

// ../node_modules/es-toolkit/dist/function/throttle.mjs
function ni(e, t, { signal: o, edges: i = ["leading", "trailing"] } = {}) {
  let n = null, r = Tr(e, t, { signal: o, edges: i }), l = /* @__PURE__ */ a(function(...u) {
    n == null ? n = Date.now() : Date.now() - n >= t && (n = Date.now(), r.cancel(), r(...u)), r(...u);
  }, "throttled");
  return l.cancel = r.cancel, l.flush = r.flush, l;
}
a(ni, "throttle");

// src/manager/keybinding.ts
var Pg = {
  // event.code => event.key
  Space: " ",
  Slash: "/",
  ArrowLeft: "ArrowLeft",
  ArrowUp: "ArrowUp",
  ArrowRight: "ArrowRight",
  ArrowDown: "ArrowDown",
  Escape: "Escape",
  Enter: "Enter"
}, Ag = { alt: !1, ctrl: !1, meta: !1, shift: !1 }, bt = /* @__PURE__ */ a((e, t) => {
  let { alt: o, ctrl: i, meta: n, shift: r } = e === !1 ? Ag : e;
  return !(typeof o == "boolean" && o !== t.altKey || typeof i == "boolean" && i !== t.ctrlKey || typeof n == "boolean" && n !== t.metaKey ||
  typeof r == "boolean" && r !== t.shiftKey);
}, "matchesModifiers"), Ve = /* @__PURE__ */ a((e, t) => t.code ? t.code === e : t.key === Pg[e], "matchesKeyCode");

// src/manager/components/sidebar/useExpanded.ts
var { document: ii } = ie, Dg = /* @__PURE__ */ a(({
  refId: e,
  data: t,
  initialExpanded: o,
  highlightedRef: i,
  rootIds: n
}) => {
  let r = i.current?.refId === e ? bo(t, i.current?.itemId) : [];
  return [...n, ...r].reduce(
    // @ts-expect-error (non strict)
    (l, u) => Object.assign(l, { [u]: u in o ? o[u] : !0 }),
    {}
  );
}, "initializeExpanded"), Mg = /* @__PURE__ */ a(() => {
}, "noop"), kc = /* @__PURE__ */ a(({
  containerRef: e,
  isBrowsing: t,
  refId: o,
  data: i,
  initialExpanded: n,
  rootIds: r,
  highlightedRef: l,
  setHighlightedItemId: u,
  selectedStoryId: c,
  onSelectStoryId: p
}) => {
  let d = ne(), [g, h] = Vt(
    (m, { ids: v, value: I }) => v.reduce((w, k) => Object.assign(w, { [k]: I }), { ...m }),
    // @ts-expect-error (non strict)
    { refId: o, data: i, highlightedRef: l, rootIds: r, initialExpanded: n },
    Dg
  ), y = A(
    (m) => e.current?.querySelector(`[data-item-id="${m}"]`),
    [e]
  ), f = A(
    (m) => {
      u(m.getAttribute("data-item-id")), Dt(m);
    },
    [u]
  ), b = A(
    ({ ids: m, value: v }) => {
      if (h({ ids: m, value: v }), m.length === 1) {
        let I = e.current?.querySelector(
          `[data-item-id="${m[0]}"][data-ref-id="${o}"]`
        );
        I && f(I);
      }
    },
    [e, f, o]
  );
  R(() => {
    h({ ids: bo(i, c), value: !0 });
  }, [i, c]);
  let S = A(() => {
    let m = Object.keys(i).filter((v) => !r.includes(v));
    h({ ids: m, value: !1 });
  }, [i, r]), E = A(() => {
    h({ ids: Object.keys(i), value: !0 });
  }, [i]);
  return R(() => d ? (d.on(io, S), d.on(un, E), () => {
    d.off(io, S), d.off(un, E);
  }) : Mg, [d, S, E]), R(() => {
    let m = ii.getElementById("storybook-explorer-menu"), v = ni((I) => {
      let w = l.current?.refId === o && l.current?.itemId;
      if (!t || !e.current || !w || I.repeat || !bt(!1, I))
        return;
      let k = Ve("Enter", I), T = Ve("Space", I), _ = Ve("ArrowLeft", I), C = Ve("ArrowRight", I);
      if (!(k || T || _ || C))
        return;
      let O = y(w);
      if (!O || O.getAttribute("data-ref-id") !== o)
        return;
      let P = I.target;
      if (!Mt(m, P) && !Mt(P, m))
        return;
      if (P.hasAttribute("data-action")) {
        if (k || T)
          return;
        P.blur();
      }
      let D = O.getAttribute("data-nodetype");
      (k || T) && ["component", "story", "document"].includes(D) && p(w);
      let M = O.getAttribute("aria-expanded");
      if (_) {
        if (M === "true") {
          h({ ids: [w], value: !1 });
          return;
        }
        let N = O.getAttribute("data-parent-id"), Y = N && y(N);
        if (Y && Y.getAttribute("data-highlightable") === "true") {
          f(Y);
          return;
        }
        h({ ids: nt(i, w, !0), value: !1 });
        return;
      }
      C && (M === "false" ? b({ ids: [w], value: !0 }) : M === "true" && b({ ids: nt(i, w, !0), value: !0 }));
    }, 60);
    return ii.addEventListener("keydown", v), () => ii.removeEventListener("keydown", v);
  }, [
    e,
    t,
    o,
    i,
    l,
    u,
    p
  ]), [g, b];
}, "useExpanded");

// src/manager/components/sidebar/Tree.tsx
var Lg = x.div((e) => ({
  marginTop: e.hasOrphans ? 20 : 0,
  marginBottom: 20
})), Ng = x.button(({ theme: e }) => ({
  all: "unset",
  display: "flex",
  padding: "0px 8px",
  borderRadius: 4,
  transition: "color 150ms, box-shadow 150ms",
  gap: 6,
  alignItems: "center",
  cursor: "pointer",
  height: 28,
  "&:hover, &:focus": {
    outline: "none",
    background: "var(--tree-node-background-hover)"
  }
})), Oc = x.div(({ theme: e }) => ({
  position: "relative",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "flex-start",
  color: e.color.defaultText,
  background: "transparent",
  minHeight: 28,
  borderRadius: 4,
  overflow: "hidden",
  "--tree-node-background-hover": e.background.content,
  [Qe]: {
    "--tree-node-background-hover": e.background.app
  },
  "&:hover, &:focus": {
    "--tree-node-background-hover": e.base === "dark" ? ir(0.35, e.color.secondary) : po(0.45, e.color.secondary),
    background: "var(--tree-node-background-hover)",
    outline: "none"
  },
  '& [data-displayed="off"]': {
    visibility: "hidden"
  },
  '&:hover [data-displayed="off"]': {
    visibility: "visible"
  },
  '& [data-displayed="on"] + *': {
    visibility: "hidden"
  },
  '&:hover [data-displayed="off"] + *': {
    visibility: "hidden"
  },
  '&[data-selected="true"]': {
    color: e.color.lightest,
    background: e.color.secondary,
    fontWeight: e.typography.weight.bold,
    "&&:hover, &&:focus": {
      "--tree-node-background-hover": e.color.secondary,
      background: "var(--tree-node-background-hover)"
    },
    svg: { color: e.color.lightest }
  },
  a: { color: "currentColor" }
})), Fg = x(fe)(({ theme: e }) => ({
  display: "none",
  "@media (min-width: 600px)": {
    display: "block",
    fontSize: "10px",
    overflow: "hidden",
    width: 1,
    height: "20px",
    boxSizing: "border-box",
    opacity: 0,
    padding: 0,
    "&:focus": {
      opacity: 1,
      padding: "5px 10px",
      background: "white",
      color: e.color.secondary,
      width: "auto"
    }
  }
})), Bg = /* @__PURE__ */ a((e) => {
  let t = Oe();
  return /* @__PURE__ */ s.createElement(Hs, { ...e, color: t.color.positive });
}, "SuccessStatusIcon"), Hg = /* @__PURE__ */ a((e) => {
  let t = Oe();
  return /* @__PURE__ */ s.createElement(Bs, { ...e, color: t.color.negative });
}, "ErrorStatusIcon"), zg = /* @__PURE__ */ a((e) => {
  let t = Oe();
  return /* @__PURE__ */ s.createElement(zs, { ...e, color: t.color.warning });
}, "WarnStatusIcon"), Rg = /* @__PURE__ */ a((e) => {
  let t = Oe();
  return /* @__PURE__ */ s.createElement(ft, { ...e, size: 12, color: t.color.defaultText });
}, "PendingStatusIcon"), si = {
  success: /* @__PURE__ */ s.createElement(Bg, null),
  error: /* @__PURE__ */ s.createElement(Hg, null),
  warn: /* @__PURE__ */ s.createElement(zg, null),
  pending: /* @__PURE__ */ s.createElement(Rg, null),
  unknown: null
};
var Pc = ["success", "error", "warn", "pending", "unknown"], Ac = s.memo(/* @__PURE__ */ a(function({
  item: t,
  status: o,
  groupStatus: i,
  refId: n,
  docsMode: r,
  isOrphan: l,
  isDisplayed: u,
  isSelected: c,
  isFullyExpanded: p,
  setFullyExpanded: d,
  isExpanded: g,
  setExpanded: h,
  onSelectStoryId: y,
  api: f
}) {
  let { isDesktop: b, isMobile: S, setMobileMenuOpen: E } = he(), { counts: m, statuses: v } = xc(t);
  if (!u)
    return null;
  let I = K(() => {
    if (t.type === "story" || t.type === "docs")
      return Object.entries(o || {}).filter(([, T]) => T.sidebarContextMenu !== !1).sort((T, _) => Pc.indexOf(T[1].status) - Pc.indexOf(_[1].
      status)).map(([T, _]) => ({
        id: T,
        title: _.title,
        description: _.description,
        "aria-label": `Test status for ${_.title}: ${_.status}`,
        icon: si[_.status],
        onClick: /* @__PURE__ */ a(() => {
          y(t.id), _.onClick?.();
        }, "onClick")
      }));
    if (t.type === "component" || t.type === "group") {
      let T = [];
      return m.error && T.push({
        id: "errors",
        icon: si.error,
        title: `${m.error} ${m.error === 1 ? "story" : "stories"} with errors`,
        onClick: /* @__PURE__ */ a(() => {
          let [_, [C]] = Object.entries(v.error)[0];
          y(_), C.onClick?.();
        }, "onClick")
      }), m.warn && T.push({
        id: "warnings",
        icon: si.warn,
        title: `${m.warn} ${m.warn === 1 ? "story" : "stories"} with warnings`,
        onClick: /* @__PURE__ */ a(() => {
          let [_, [C]] = Object.entries(v.warn)[0];
          y(_), C.onClick?.();
        }, "onClick")
      }), T;
    }
    return [];
  }, [
    m.error,
    m.warn,
    t.id,
    t.type,
    y,
    o,
    v.error,
    v.warn
  ]), w = wr(t.id, n), k = n === "storybook_internal" ? bc(t, I, f) : { node: null, onMouseEnter: /* @__PURE__ */ a(() => {
  }, "onMouseEnter") };
  if (t.type === "story" || t.type === "docs") {
    let T = t.type === "docs" ? Tc : _c, _ = Io(Object.values(o || {}).map((P) => P.status)), [C, O] = xo[_];
    return /* @__PURE__ */ s.createElement(
      Oc,
      {
        key: w,
        className: "sidebar-item",
        "data-selected": c,
        "data-ref-id": n,
        "data-item-id": t.id,
        "data-parent-id": t.parent,
        "data-nodetype": t.type === "docs" ? "document" : "story",
        "data-highlightable": u,
        onMouseEnter: k.onMouseEnter
      },
      /* @__PURE__ */ s.createElement(
        T,
        {
          style: c ? {} : { color: O },
          href: Uu(t, n),
          id: w,
          depth: l ? t.depth : t.depth - 1,
          onClick: (P) => {
            P.preventDefault(), y(t.id), S && E(!1);
          },
          ...t.type === "docs" && { docsMode: r }
        },
        t.renderLabel?.(t, f) || t.name
      ),
      c && /* @__PURE__ */ s.createElement(Fg, { asChild: !0 }, /* @__PURE__ */ s.createElement("a", { href: "#storybook-preview-wrapper" },
      "Skip to canvas")),
      k.node,
      C ? /* @__PURE__ */ s.createElement(
        So,
        {
          "aria-label": `Test status: ${_}`,
          role: "status",
          type: "button",
          status: _,
          selectedItem: c
        },
        C
      ) : null
    );
  }
  if (t.type === "root")
    return /* @__PURE__ */ s.createElement(
      wc,
      {
        key: w,
        id: w,
        className: "sidebar-subheading",
        "data-ref-id": n,
        "data-item-id": t.id,
        "data-nodetype": "root"
      },
      /* @__PURE__ */ s.createElement(
        Ng,
        {
          type: "button",
          "data-action": "collapse-root",
          onClick: (T) => {
            T.preventDefault(), h({ ids: [t.id], value: !g });
          },
          "aria-expanded": g
        },
        /* @__PURE__ */ s.createElement(Ft, { isExpanded: g }),
        t.renderLabel?.(t, f) || t.name
      ),
      g && /* @__PURE__ */ s.createElement(
        ee,
        {
          className: "sidebar-subheading-action",
          "aria-label": p ? "Expand" : "Collapse",
          "data-action": "expand-all",
          "data-expanded": p,
          onClick: (T) => {
            T.preventDefault(), d();
          }
        },
        p ? /* @__PURE__ */ s.createElement(Ss, null) : /* @__PURE__ */ s.createElement(Es, null)
      )
    );
  if (t.type === "component" || t.type === "group") {
    let T = i?.[t.id], _ = T ? xo[T][1] : null, C = t.type === "component" ? Cc : Ec;
    return /* @__PURE__ */ s.createElement(
      Oc,
      {
        key: w,
        className: "sidebar-item",
        "data-ref-id": n,
        "data-item-id": t.id,
        "data-parent-id": t.parent,
        "data-nodetype": t.type,
        "data-highlightable": u,
        onMouseEnter: k.onMouseEnter
      },
      /* @__PURE__ */ s.createElement(
        C,
        {
          id: w,
          style: _ ? { color: _ } : {},
          "aria-controls": t.children && t.children[0],
          "aria-expanded": g,
          depth: l ? t.depth : t.depth - 1,
          isComponent: t.type === "component",
          isExpandable: t.children && t.children.length > 0,
          isExpanded: g,
          onClick: (O) => {
            O.preventDefault(), h({ ids: [t.id], value: !g }), t.type === "component" && !g && b && y(t.id);
          },
          onMouseEnter: () => {
            t.type === "component" && f.emit(It, {
              ids: [t.children[0]],
              options: { target: n }
            });
          }
        },
        t.renderLabel?.(t, f) || t.name
      ),
      k.node,
      ["error", "warn"].includes(T) && /* @__PURE__ */ s.createElement(So, { type: "button", status: T }, /* @__PURE__ */ s.createElement("s\
vg", { key: "icon", viewBox: "0 0 6 6", width: "6", height: "6", type: "dot" }, /* @__PURE__ */ s.createElement(Le, { type: "dot" })))
    );
  }
  return null;
}, "Node")), Wg = s.memo(/* @__PURE__ */ a(function({
  setExpanded: t,
  isFullyExpanded: o,
  expandableDescendants: i,
  ...n
}) {
  let r = A(
    () => t({ ids: i, value: !o }),
    [t, o, i]
  );
  return /* @__PURE__ */ s.createElement(
    Ac,
    {
      ...n,
      setExpanded: t,
      isFullyExpanded: o,
      setFullyExpanded: r
    }
  );
}, "Root")), Dc = s.memo(/* @__PURE__ */ a(function({
  isBrowsing: t,
  isMain: o,
  refId: i,
  data: n,
  status: r,
  docsMode: l,
  highlightedRef: u,
  setHighlightedItemId: c,
  selectedStoryId: p,
  onSelectStoryId: d
}) {
  let g = q(null), h = ne(), [y, f, b] = K(
    () => Object.keys(n).reduce(
      (C, O) => {
        let P = n[O];
        return P.type === "root" ? C[0].push(O) : P.parent || C[1].push(O), P.type === "root" && P.startCollapsed && (C[2][O] = !1), C;
      },
      [[], [], {}]
    ),
    [n]
  ), { expandableDescendants: S } = K(() => [...f, ...y].reduce(
    (C, O) => (C.expandableDescendants[O] = nt(n, O, !1).filter(
      (P) => !["story", "docs"].includes(n[P].type)
    ), C),
    { orphansFirst: [], expandableDescendants: {} }
  ), [n, y, f]), E = K(() => Object.keys(n).filter((C) => {
    let O = n[C];
    if (O.type !== "component")
      return !1;
    let { children: P = [], name: D } = O;
    if (P.length !== 1)
      return !1;
    let M = n[P[0]];
    return M.type === "docs" ? !0 : M.type === "story" ? Xu(M.name, D) : !1;
  }), [n]), m = K(
    () => Object.keys(n).filter((C) => !E.includes(C)),
    [E]
  ), v = K(() => E.reduce(
    (C, O) => {
      let { children: P, parent: D, name: M } = n[O], [N] = P;
      if (D) {
        let Y = [...n[D].children];
        Y[Y.indexOf(O)] = N, C[D] = { ...n[D], children: Y };
      }
      return C[N] = {
        ...n[N],
        name: M,
        parent: D,
        depth: n[N].depth - 1
      }, C;
    },
    { ...n }
  ), [n]), I = K(() => m.reduce(
    (C, O) => Object.assign(C, { [O]: bo(v, O) }),
    {}
  ), [m, v]), [w, k] = kc({
    // @ts-expect-error (non strict)
    containerRef: g,
    isBrowsing: t,
    refId: i,
    data: v,
    initialExpanded: b,
    rootIds: y,
    highlightedRef: u,
    setHighlightedItemId: c,
    selectedStoryId: p,
    onSelectStoryId: d
  }), T = K(() => Er(v, r), [v, r]), _ = K(() => m.map((C) => {
    let O = v[C], P = wr(C, i);
    if (O.type === "root") {
      let M = S[O.id], N = M.every((Y) => w[Y]);
      return (
        // @ts-expect-error (TODO)
        /* @__PURE__ */ s.createElement(
          Wg,
          {
            api: h,
            key: P,
            item: O,
            refId: i,
            collapsedData: v,
            isOrphan: !1,
            isDisplayed: !0,
            isSelected: p === C,
            isExpanded: !!w[C],
            setExpanded: k,
            isFullyExpanded: N,
            expandableDescendants: M,
            onSelectStoryId: d
          }
        )
      );
    }
    let D = !O.parent || I[C].every((M) => w[M]);
    return D === !1 ? null : /* @__PURE__ */ s.createElement(
      Ac,
      {
        api: h,
        collapsedData: v,
        key: P,
        item: O,
        status: r?.[C],
        groupStatus: T,
        refId: i,
        docsMode: l,
        isOrphan: f.some((M) => C === M || C.startsWith(`${M}-`)),
        isDisplayed: D,
        isSelected: p === C,
        isExpanded: !!w[C],
        setExpanded: k,
        onSelectStoryId: d
      }
    );
  }), [
    I,
    h,
    v,
    m,
    l,
    S,
    w,
    T,
    d,
    f,
    i,
    p,
    k,
    r
  ]);
  return /* @__PURE__ */ s.createElement(ri.Provider, { value: { data: n, status: r, groupStatus: T } }, /* @__PURE__ */ s.createElement(Lg,
  { ref: g, hasOrphans: o && f.length > 0 }, /* @__PURE__ */ s.createElement(hc, null), _));
}, "Tree"));

// src/manager/components/sidebar/Refs.tsx
var jg = x.div(({ isMain: e }) => ({
  position: "relative",
  marginTop: e ? void 0 : 0
})), Vg = x.div(({ theme: e }) => ({
  fontWeight: e.typography.weight.bold,
  fontSize: e.typography.size.s2,
  // Similar to ListItem.tsx
  textDecoration: "none",
  lineHeight: "16px",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  background: "transparent",
  width: "100%",
  marginTop: 20,
  paddingTop: 16,
  paddingBottom: 12,
  borderTop: `1px solid ${e.appBorderColor}`,
  color: e.base === "light" ? e.color.defaultText : Ee(0.2, e.color.defaultText)
})), $g = x.div({
  textOverflow: "ellipsis",
  whiteSpace: "nowrap",
  flex: 1,
  overflow: "hidden",
  marginLeft: 2
}), Kg = x.button(({ theme: e }) => ({
  all: "unset",
  display: "flex",
  padding: "0px 8px",
  gap: 6,
  alignItems: "center",
  cursor: "pointer",
  overflow: "hidden",
  "&:focus": {
    borderColor: e.color.secondary,
    "span:first-of-type": {
      borderLeftColor: e.color.secondary
    }
  }
})), Mc = s.memo(
  /* @__PURE__ */ a(function(t) {
    let { docsOptions: o } = Me(), i = ne(), {
      filteredIndex: n,
      id: r,
      title: l = r,
      isLoading: u,
      isBrowsing: c,
      selectedStoryId: p,
      highlightedRef: d,
      setHighlighted: g,
      loginUrl: h,
      type: y,
      expanded: f = !0,
      indexError: b,
      previewInitialized: S
    } = t, E = K(() => n ? Object.keys(n).length : 0, [n]), m = q(null), v = r === it, w = u || (y === "auto-inject" && !S || y === "server-\
checked") || y === "unknown", C = Qu(w, !!h && E === 0, !!b, !w && E === 0), [O, P] = $(f);
    R(() => {
      n && p && n[p] && P(!0);
    }, [P, n, p]);
    let D = A(() => P((Y) => !Y), [P]), M = A(
      (Y) => g({ itemId: Y, refId: r }),
      [g]
    ), N = A(
      // @ts-expect-error (non strict)
      (Y) => i && i.selectStory(Y, void 0, { ref: !v && r }),
      [i, v, r]
    );
    return /* @__PURE__ */ s.createElement(s.Fragment, null, v || /* @__PURE__ */ s.createElement(
      Vg,
      {
        "aria-label": `${O ? "Hide" : "Show"} ${l} stories`,
        "aria-expanded": O
      },
      /* @__PURE__ */ s.createElement(Kg, { "data-action": "collapse-ref", onClick: D }, /* @__PURE__ */ s.createElement(Ft, { isExpanded: O }),
      /* @__PURE__ */ s.createElement($g, { title: l }, l)),
      /* @__PURE__ */ s.createElement(sc, { ...t, state: C, ref: m })
    ), O && /* @__PURE__ */ s.createElement(jg, { "data-title": l, isMain: v }, C === "auth" && /* @__PURE__ */ s.createElement(oc, { id: r,
    loginUrl: h }), C === "error" && /* @__PURE__ */ s.createElement(rc, { error: b }), C === "loading" && /* @__PURE__ */ s.createElement(ic,
    { isMain: v }), C === "empty" && /* @__PURE__ */ s.createElement(nc, { isMain: v }), C === "ready" && /* @__PURE__ */ s.createElement(
      Dc,
      {
        status: t.status,
        isBrowsing: c,
        isMain: v,
        refId: r,
        data: n,
        docsMode: o.docsMode,
        selectedStoryId: p,
        onSelectStoryId: N,
        highlightedRef: d,
        setHighlightedItemId: M
      }
    )));
  }, "Ref")
);

// src/manager/components/sidebar/useHighlighted.ts
var { document: _r, window: Lc } = ie, Nc = /* @__PURE__ */ a((e) => e ? { itemId: e.storyId, refId: e.refId } : null, "fromSelection"), Fc = /* @__PURE__ */ a(
(e, t = {}, o = 1) => {
  let { containerRef: i, center: n = !1, attempts: r = 3, delay: l = 500 } = t, u = (i ? i.current : _r)?.querySelector(e);
  u ? Dt(u, n) : o <= r && setTimeout(Fc, l, e, t, o + 1);
}, "scrollToSelector"), Bc = /* @__PURE__ */ a(({
  containerRef: e,
  isLoading: t,
  isBrowsing: o,
  selected: i
}) => {
  let n = Nc(i), r = q(n), [l, u] = $(n), c = ne(), p = A(
    (g) => {
      r.current = g, u(g);
    },
    [r]
  ), d = A(
    (g, h = !1) => {
      let y = g.getAttribute("data-item-id"), f = g.getAttribute("data-ref-id");
      !y || !f || (p({ itemId: y, refId: f }), Dt(g, h));
    },
    [p]
  );
  return R(() => {
    let g = Nc(i);
    p(g), g && Fc(`[data-item-id="${g.itemId}"][data-ref-id="${g.refId}"]`, {
      containerRef: e,
      center: !0
    });
  }, [e, i, p]), R(() => {
    let g = _r.getElementById("storybook-explorer-menu"), h, y = /* @__PURE__ */ a((f) => {
      if (t || !o || !e.current || !bt(!1, f))
        return;
      let b = Ve("ArrowUp", f), S = Ve("ArrowDown", f);
      if (!(b || S))
        return;
      let E = Lc.requestAnimationFrame(() => {
        Lc.cancelAnimationFrame(h), h = E;
        let m = f.target;
        if (!Mt(g, m) && !Mt(m, g))
          return;
        m.hasAttribute("data-action") && m.blur();
        let v = Array.from(
          e.current?.querySelectorAll("[data-highlightable=true]") || []
        ), I = v.findIndex(
          (T) => T.getAttribute("data-item-id") === r.current?.itemId && T.getAttribute("data-ref-id") === r.current?.refId
        ), w = Yu(v, I, b ? -1 : 1), k = b ? w === v.length - 1 : w === 0;
        if (d(v[w], k), v[w].getAttribute("data-nodetype") === "component") {
          let { itemId: T, refId: _ } = r.current, C = c.resolveStory(T, _ === "storybook_internal" ? void 0 : _);
          C.type === "component" && c.emit(It, {
            // @ts-expect-error (non strict)
            ids: [C.children[0]],
            options: { target: _ }
          });
        }
      });
    }, "navigateTree");
    return _r.addEventListener("keydown", y), () => _r.removeEventListener("keydown", y);
  }, [t, o, r, d]), [l, p, r];
}, "useHighlighted");

// src/manager/components/sidebar/Explorer.tsx
var Hc = s.memo(/* @__PURE__ */ a(function({
  isLoading: t,
  isBrowsing: o,
  dataset: i,
  selected: n
}) {
  let r = q(null), [l, u, c] = Bc({
    containerRef: r,
    isLoading: t,
    isBrowsing: o,
    selected: n
  });
  return /* @__PURE__ */ s.createElement(
    "div",
    {
      ref: r,
      id: "storybook-explorer-tree",
      "data-highlighted-ref-id": l?.refId,
      "data-highlighted-item-id": l?.itemId
    },
    l && /* @__PURE__ */ s.createElement(Vu, { ...l }),
    i.entries.map(([p, d]) => /* @__PURE__ */ s.createElement(
      Mc,
      {
        ...d,
        key: p,
        isLoading: t,
        isBrowsing: o,
        selectedStoryId: n?.refId === d.id ? n.storyId : null,
        highlightedRef: c,
        setHighlighted: u
      }
    ))
  );
}, "Explorer"));

// src/manager/components/sidebar/Brand.tsx
var Ug = x(Zo)(({ theme: e }) => ({
  width: "auto",
  height: "22px !important",
  display: "block",
  color: e.base === "light" ? e.color.defaultText : e.color.lightest
})), qg = x.img({
  display: "block",
  maxWidth: "150px !important",
  maxHeight: "100px"
}), zc = x.a(({ theme: e }) => ({
  display: "inline-block",
  height: "100%",
  margin: "-3px -4px",
  padding: "2px 3px",
  border: "1px solid transparent",
  borderRadius: 3,
  color: "inherit",
  textDecoration: "none",
  "&:focus": {
    outline: 0,
    borderColor: e.color.secondary
  }
})), Rc = ha(({ theme: e }) => {
  let { title: t = "Storybook", url: o = "./", image: i, target: n } = e.brand, r = n || (o === "./" ? "" : "_blank");
  if (i === null)
    return t === null ? null : o ? /* @__PURE__ */ s.createElement(zc, { href: o, target: r, dangerouslySetInnerHTML: { __html: t } }) : /* @__PURE__ */ s.
    createElement("div", { dangerouslySetInnerHTML: { __html: t } });
  let l = i ? /* @__PURE__ */ s.createElement(qg, { src: i, alt: t }) : /* @__PURE__ */ s.createElement(Ug, { alt: t });
  return o ? /* @__PURE__ */ s.createElement(zc, { title: t, href: o, target: r }, l) : /* @__PURE__ */ s.createElement("div", null, l);
});

// src/manager/components/sidebar/Menu.tsx
var Wc = x(ee)(({ highlighted: e, theme: t }) => ({
  position: "relative",
  overflow: "visible",
  marginTop: 0,
  zIndex: 1,
  ...e && {
    "&:before, &:after": {
      content: '""',
      position: "absolute",
      top: 6,
      right: 6,
      width: 5,
      height: 5,
      zIndex: 2,
      borderRadius: "50%",
      background: t.background.app,
      border: `1px solid ${t.background.app}`,
      boxShadow: `0 0 0 2px ${t.background.app}`
    },
    "&:after": {
      background: t.color.positive,
      border: "1px solid rgba(0, 0, 0, 0.1)",
      boxShadow: `0 0 0 2px ${t.background.app}`
    },
    "&:hover:after, &:focus-visible:after": {
      boxShadow: `0 0 0 2px ${Ee(0.88, t.color.secondary)}`
    }
  }
})), Gg = x.div({
  display: "flex",
  gap: 4
}), Yg = /* @__PURE__ */ a(({ menu: e, onClick: t }) => /* @__PURE__ */ s.createElement(ht, { links: e, onClick: t }), "SidebarMenuList"), jc = /* @__PURE__ */ a(
({ menu: e, isHighlighted: t, onClick: o }) => {
  let [i, n] = $(!1), { isMobile: r, setMobileMenuOpen: l } = he();
  return r ? /* @__PURE__ */ s.createElement(Gg, null, /* @__PURE__ */ s.createElement(
    Wc,
    {
      title: "About Storybook",
      "aria-label": "About Storybook",
      highlighted: t,
      active: !1,
      onClick: o
    },
    /* @__PURE__ */ s.createElement(nn, null)
  ), /* @__PURE__ */ s.createElement(
    ee,
    {
      title: "Close menu",
      "aria-label": "Close menu",
      onClick: () => l(!1)
    },
    /* @__PURE__ */ s.createElement(qe, null)
  )) : /* @__PURE__ */ s.createElement(
    ye,
    {
      placement: "top",
      closeOnOutsideClick: !0,
      tooltip: ({ onHide: u }) => /* @__PURE__ */ s.createElement(Yg, { onClick: u, menu: e }),
      onVisibleChange: n
    },
    /* @__PURE__ */ s.createElement(
      Wc,
      {
        title: "Shortcuts",
        "aria-label": "Shortcuts",
        highlighted: t,
        active: i
      },
      /* @__PURE__ */ s.createElement(nn, null)
    )
  );
}, "SidebarMenu");

// src/manager/components/sidebar/Heading.tsx
var Qg = x.div(({ theme: e }) => ({
  fontSize: e.typography.size.s2,
  fontWeight: e.typography.weight.bold,
  color: e.color.defaultText,
  marginRight: 20,
  display: "flex",
  width: "100%",
  alignItems: "center",
  minHeight: 22,
  "& > * > *": {
    maxWidth: "100%"
  },
  "& > *": {
    maxWidth: "100%",
    height: "auto",
    display: "block",
    flex: "1 1 auto"
  }
})), Xg = x.div({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  position: "relative",
  minHeight: 42,
  paddingLeft: 8
}), Zg = x(fe)(({ theme: e }) => ({
  display: "none",
  "@media (min-width: 600px)": {
    display: "block",
    position: "absolute",
    fontSize: e.typography.size.s1,
    zIndex: 3,
    border: 0,
    width: 1,
    height: 1,
    padding: 0,
    margin: -1,
    overflow: "hidden",
    clip: "rect(0, 0, 0, 0)",
    whiteSpace: "nowrap",
    wordWrap: "normal",
    opacity: 0,
    transition: "opacity 150ms ease-out",
    "&:focus": {
      width: "100%",
      height: "inherit",
      padding: "10px 15px",
      margin: 0,
      clip: "unset",
      overflow: "unset",
      opacity: 1
    }
  }
})), Vc = /* @__PURE__ */ a(({
  menuHighlighted: e = !1,
  menu: t,
  skipLinkHref: o,
  extra: i,
  isLoading: n,
  onMenuClick: r,
  ...l
}) => /* @__PURE__ */ s.createElement(Xg, { ...l }, o && /* @__PURE__ */ s.createElement(Zg, { asChild: !0 }, /* @__PURE__ */ s.createElement(
"a", { href: o, tabIndex: 0 }, "Skip to canvas")), /* @__PURE__ */ s.createElement(Qg, null, /* @__PURE__ */ s.createElement(Rc, null)), n ?
null : i.map(({ id: u, render: c }) => /* @__PURE__ */ s.createElement(c, { key: u })), /* @__PURE__ */ s.createElement(jc, { menu: t, isHighlighted: e,
onClick: r })), "Heading");

// ../node_modules/downshift/dist/downshift.esm.js
var G = Be(mn());
var oy = Be(qc());

// ../node_modules/compute-scroll-into-view/dist/index.js
var Gc = /* @__PURE__ */ a((e) => typeof e == "object" && e != null && e.nodeType === 1, "t"), Yc = /* @__PURE__ */ a((e, t) => (!t || e !==
"hidden") && e !== "visible" && e !== "clip", "e"), ui = /* @__PURE__ */ a((e, t) => {
  if (e.clientHeight < e.scrollHeight || e.clientWidth < e.scrollWidth) {
    let o = getComputedStyle(e, null);
    return Yc(o.overflowY, t) || Yc(o.overflowX, t) || ((i) => {
      let n = ((r) => {
        if (!r.ownerDocument || !r.ownerDocument.defaultView) return null;
        try {
          return r.ownerDocument.defaultView.frameElement;
        } catch {
          return null;
        }
      })(i);
      return !!n && (n.clientHeight < i.scrollHeight || n.clientWidth < i.scrollWidth);
    })(e);
  }
  return !1;
}, "n"), Hr = /* @__PURE__ */ a((e, t, o, i, n, r, l, u) => r < e && l > t || r > e && l < t ? 0 : r <= e && u <= o || l >= t && u >= o ? r -
e - i : l > t && u < o || r < e && u > o ? l - t + n : 0, "o"), ty = /* @__PURE__ */ a((e) => {
  let t = e.parentElement;
  return t ?? (e.getRootNode().host || null);
}, "l"), Qc = /* @__PURE__ */ a((e, t) => {
  var o, i, n, r;
  if (typeof document > "u") return [];
  let { scrollMode: l, block: u, inline: c, boundary: p, skipOverflowHiddenElements: d } = t, g = typeof p == "function" ? p : (j) => j !== p;
  if (!Gc(e)) throw new TypeError("Invalid target");
  let h = document.scrollingElement || document.documentElement, y = [], f = e;
  for (; Gc(f) && g(f); ) {
    if (f = ty(f), f === h) {
      y.push(f);
      break;
    }
    f != null && f === document.body && ui(f) && !ui(document.documentElement) || f != null && ui(f, d) && y.push(f);
  }
  let b = (i = (o = window.visualViewport) == null ? void 0 : o.width) != null ? i : innerWidth, S = (r = (n = window.visualViewport) == null ?
  void 0 : n.height) != null ? r : innerHeight, { scrollX: E, scrollY: m } = window, { height: v, width: I, top: w, right: k, bottom: T, left: _ } = e.
  getBoundingClientRect(), { top: C, right: O, bottom: P, left: D } = ((j) => {
    let Q = window.getComputedStyle(j);
    return { top: parseFloat(Q.scrollMarginTop) || 0, right: parseFloat(Q.scrollMarginRight) || 0, bottom: parseFloat(Q.scrollMarginBottom) ||
    0, left: parseFloat(Q.scrollMarginLeft) || 0 };
  })(e), M = u === "start" || u === "nearest" ? w - C : u === "end" ? T + P : w + v / 2 - C + P, N = c === "center" ? _ + I / 2 - D + O : c ===
  "end" ? k + O : _ - D, Y = [];
  for (let j = 0; j < y.length; j++) {
    let Q = y[j], { height: H, width: V, top: z, right: te, bottom: F, left: B } = Q.getBoundingClientRect();
    if (l === "if-needed" && w >= 0 && _ >= 0 && T <= S && k <= b && w >= z && T <= F && _ >= B && k <= te) return Y;
    let L = getComputedStyle(Q), W = parseInt(L.borderLeftWidth, 10), Z = parseInt(L.borderTopWidth, 10), re = parseInt(L.borderRightWidth, 10),
    J = parseInt(L.borderBottomWidth, 10), pe = 0, se = 0, ue = "offsetWidth" in Q ? Q.offsetWidth - Q.clientWidth - W - re : 0, le = "offse\
tHeight" in Q ? Q.offsetHeight - Q.clientHeight - Z - J : 0, xe = "offsetWidth" in Q ? Q.offsetWidth === 0 ? 0 : V / Q.offsetWidth : 0, ge = "\
offsetHeight" in Q ? Q.offsetHeight === 0 ? 0 : H / Q.offsetHeight : 0;
    if (h === Q) pe = u === "start" ? M : u === "end" ? M - S : u === "nearest" ? Hr(m, m + S, S, Z, J, m + M, m + M + v, v) : M - S / 2, se =
    c === "start" ? N : c === "center" ? N - b / 2 : c === "end" ? N - b : Hr(E, E + b, b, W, re, E + N, E + N + I, I), pe = Math.max(0, pe +
    m), se = Math.max(0, se + E);
    else {
      pe = u === "start" ? M - z - Z : u === "end" ? M - F + J + le : u === "nearest" ? Hr(z, F, H, Z, J + le, M, M + v, v) : M - (z + H / 2) +
      le / 2, se = c === "start" ? N - B - W : c === "center" ? N - (B + V / 2) + ue / 2 : c === "end" ? N - te + re + ue : Hr(B, te, V, W, re +
      ue, N, N + I, I);
      let { scrollLeft: ke, scrollTop: de } = Q;
      pe = ge === 0 ? 0 : Math.max(0, Math.min(de + pe / ge, Q.scrollHeight - H / ge + le)), se = xe === 0 ? 0 : Math.max(0, Math.min(ke + se /
      xe, Q.scrollWidth - V / xe + ue)), M += de - pe, N += ke - se;
    }
    Y.push({ el: Q, top: pe, left: se });
  }
  return Y;
}, "r");

// ../node_modules/tslib/tslib.es6.mjs
var Bt = /* @__PURE__ */ a(function() {
  return Bt = Object.assign || /* @__PURE__ */ a(function(t) {
    for (var o, i = 1, n = arguments.length; i < n; i++) {
      o = arguments[i];
      for (var r in o) Object.prototype.hasOwnProperty.call(o, r) && (t[r] = o[r]);
    }
    return t;
  }, "__assign"), Bt.apply(this, arguments);
}, "__assign");

// ../node_modules/downshift/dist/downshift.esm.js
var ry = 0;
function Xc(e) {
  return typeof e == "function" ? e : Fe;
}
a(Xc, "cbToCb");
function Fe() {
}
a(Fe, "noop");
function np(e, t) {
  if (e) {
    var o = Qc(e, {
      boundary: t,
      block: "nearest",
      scrollMode: "if-needed"
    });
    o.forEach(function(i) {
      var n = i.el, r = i.top, l = i.left;
      n.scrollTop = r, n.scrollLeft = l;
    });
  }
}
a(np, "scrollIntoView");
function Zc(e, t, o) {
  var i = e === t || t instanceof o.Node && e.contains && e.contains(t);
  return i;
}
a(Zc, "isOrContainsNode");
function Qr(e, t) {
  var o;
  function i() {
    o && clearTimeout(o);
  }
  a(i, "cancel");
  function n() {
    for (var r = arguments.length, l = new Array(r), u = 0; u < r; u++)
      l[u] = arguments[u];
    i(), o = setTimeout(function() {
      o = null, e.apply(void 0, l);
    }, t);
  }
  return a(n, "wrapper"), n.cancel = i, n;
}
a(Qr, "debounce");
function ae() {
  for (var e = arguments.length, t = new Array(e), o = 0; o < e; o++)
    t[o] = arguments[o];
  return function(i) {
    for (var n = arguments.length, r = new Array(n > 1 ? n - 1 : 0), l = 1; l < n; l++)
      r[l - 1] = arguments[l];
    return t.some(function(u) {
      return u && u.apply(void 0, [i].concat(r)), i.preventDownshiftDefault || i.hasOwnProperty("nativeEvent") && i.nativeEvent.preventDownshiftDefault;
    });
  };
}
a(ae, "callAllEventHandlers");
function Ze() {
  for (var e = arguments.length, t = new Array(e), o = 0; o < e; o++)
    t[o] = arguments[o];
  return function(i) {
    t.forEach(function(n) {
      typeof n == "function" ? n(i) : n && (n.current = i);
    });
  };
}
a(Ze, "handleRefs");
function ip() {
  return String(ry++);
}
a(ip, "generateId");
function ny(e) {
  var t = e.isOpen, o = e.resultCount, i = e.previousResultCount;
  return t ? o ? o !== i ? o + " result" + (o === 1 ? " is" : "s are") + " available, use up and down arrow keys to navigate. Press Enter ke\
y to select." : "" : "No results are available." : "";
}
a(ny, "getA11yStatusMessage");
function Jc(e, t) {
  return e = Array.isArray(e) ? (
    /* istanbul ignore next (preact) */
    e[0]
  ) : e, !e && t ? t : e;
}
a(Jc, "unwrapArray");
function iy(e) {
  return typeof e.type == "string";
}
a(iy, "isDOMElement");
function sy(e) {
  return e.props;
}
a(sy, "getElementProps");
var ay = ["highlightedIndex", "inputValue", "isOpen", "selectedItem", "type"];
function zr(e) {
  e === void 0 && (e = {});
  var t = {};
  return ay.forEach(function(o) {
    e.hasOwnProperty(o) && (t[o] = e[o]);
  }), t;
}
a(zr, "pickState");
function Eo(e, t) {
  return !e || !t ? e : Object.keys(e).reduce(function(o, i) {
    return o[i] = $r(t, i) ? t[i] : e[i], o;
  }, {});
}
a(Eo, "getState");
function $r(e, t) {
  return e[t] !== void 0;
}
a($r, "isControlledProp");
function to(e) {
  var t = e.key, o = e.keyCode;
  return o >= 37 && o <= 40 && t.indexOf("Arrow") !== 0 ? "Arrow" + t : t;
}
a(to, "normalizeArrowKey");
function Je(e, t, o, i, n) {
  n === void 0 && (n = !1);
  var r = o.length;
  if (r === 0)
    return -1;
  var l = r - 1;
  (typeof e != "number" || e < 0 || e > l) && (e = t > 0 ? -1 : l + 1);
  var u = e + t;
  u < 0 ? u = n ? l : 0 : u > l && (u = n ? 0 : l);
  var c = vt(u, t < 0, o, i, n);
  return c === -1 ? e >= r ? -1 : e : c;
}
a(Je, "getHighlightedIndex");
function vt(e, t, o, i, n) {
  n === void 0 && (n = !1);
  var r = o.length;
  if (t) {
    for (var l = e; l >= 0; l--)
      if (!i(o[l], l))
        return l;
  } else
    for (var u = e; u < r; u++)
      if (!i(o[u], u))
        return u;
  return n ? vt(t ? r - 1 : 0, t, o, i) : -1;
}
a(vt, "getNonDisabledIndex");
function Kr(e, t, o, i) {
  return i === void 0 && (i = !0), o && t.some(function(n) {
    return n && (Zc(n, e, o) || i && Zc(n, o.document.activeElement, o));
  });
}
a(Kr, "targetWithinDownshift");
var ly = Qr(function(e) {
  sp(e).textContent = "";
}, 500);
function sp(e) {
  var t = e.getElementById("a11y-status-message");
  return t || (t = e.createElement("div"), t.setAttribute("id", "a11y-status-message"), t.setAttribute("role", "status"), t.setAttribute("ar\
ia-live", "polite"), t.setAttribute("aria-relevant", "additions text"), Object.assign(t.style, {
    border: "0",
    clip: "rect(0 0 0 0)",
    height: "1px",
    margin: "-1px",
    overflow: "hidden",
    padding: "0",
    position: "absolute",
    width: "1px"
  }), e.body.appendChild(t), t);
}
a(sp, "getStatusDiv");
function ap(e, t) {
  if (!(!e || !t)) {
    var o = sp(t);
    o.textContent = e, ly(t);
  }
}
a(ap, "setStatus");
function uy(e) {
  var t = e?.getElementById("a11y-status-message");
  t && t.remove();
}
a(uy, "cleanupStatusDiv");
var lp = 0, up = 1, cp = 2, Rr = 3, Wr = 4, pp = 5, dp = 6, fp = 7, mp = 8, hp = 9, gp = 10, yp = 11, bp = 12, vp = 13, xp = 14, Ip = 15, Sp = 16,
cy = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  unknown: lp,
  mouseUp: up,
  itemMouseEnter: cp,
  keyDownArrowUp: Rr,
  keyDownArrowDown: Wr,
  keyDownEscape: pp,
  keyDownEnter: dp,
  keyDownHome: fp,
  keyDownEnd: mp,
  clickItem: hp,
  blurInput: gp,
  changeInput: yp,
  keyDownSpaceButton: bp,
  clickButton: vp,
  blurButton: xp,
  controlledPropUpdatedSelectedItem: Ip,
  touchEnd: Sp
}), py = ["refKey", "ref"], dy = ["onClick", "onPress", "onKeyDown", "onKeyUp", "onBlur"], fy = ["onKeyDown", "onBlur", "onChange", "onInput",
"onChangeText"], my = ["refKey", "ref"], hy = ["onMouseMove", "onMouseDown", "onClick", "onPress", "index", "item"], gy = /* @__PURE__ */ function() {
  var e = /* @__PURE__ */ function(t) {
    function o(n) {
      var r;
      r = t.call(this, n) || this, r.id = r.props.id || "downshift-" + ip(), r.menuId = r.props.menuId || r.id + "-menu", r.labelId = r.props.
      labelId || r.id + "-label", r.inputId = r.props.inputId || r.id + "-input", r.getItemId = r.props.getItemId || function(m) {
        return r.id + "-item-" + m;
      }, r.items = [], r.itemCount = null, r.previousResultCount = 0, r.timeoutIds = [], r.internalSetTimeout = function(m, v) {
        var I = setTimeout(function() {
          r.timeoutIds = r.timeoutIds.filter(function(w) {
            return w !== I;
          }), m();
        }, v);
        r.timeoutIds.push(I);
      }, r.setItemCount = function(m) {
        r.itemCount = m;
      }, r.unsetItemCount = function() {
        r.itemCount = null;
      }, r.isItemDisabled = function(m, v) {
        var I = r.getItemNodeFromIndex(v);
        return I && I.hasAttribute("disabled");
      }, r.setHighlightedIndex = function(m, v) {
        m === void 0 && (m = r.props.defaultHighlightedIndex), v === void 0 && (v = {}), v = zr(v), r.internalSetState(U({
          highlightedIndex: m
        }, v));
      }, r.clearSelection = function(m) {
        r.internalSetState({
          selectedItem: null,
          inputValue: "",
          highlightedIndex: r.props.defaultHighlightedIndex,
          isOpen: r.props.defaultIsOpen
        }, m);
      }, r.selectItem = function(m, v, I) {
        v = zr(v), r.internalSetState(U({
          isOpen: r.props.defaultIsOpen,
          highlightedIndex: r.props.defaultHighlightedIndex,
          selectedItem: m,
          inputValue: r.props.itemToString(m)
        }, v), I);
      }, r.selectItemAtIndex = function(m, v, I) {
        var w = r.items[m];
        w != null && r.selectItem(w, v, I);
      }, r.selectHighlightedItem = function(m, v) {
        return r.selectItemAtIndex(r.getState().highlightedIndex, m, v);
      }, r.internalSetState = function(m, v) {
        var I, w, k = {}, T = typeof m == "function";
        return !T && m.hasOwnProperty("inputValue") && r.props.onInputValueChange(m.inputValue, U({}, r.getStateAndHelpers(), m)), r.setState(
        function(_) {
          var C;
          _ = r.getState(_);
          var O = T ? m(_) : m;
          O = r.props.stateReducer(_, O), I = O.hasOwnProperty("selectedItem");
          var P = {};
          return I && O.selectedItem !== _.selectedItem && (w = O.selectedItem), (C = O).type || (C.type = lp), Object.keys(O).forEach(function(D) {
            _[D] !== O[D] && (k[D] = O[D]), D !== "type" && (O[D], $r(r.props, D) || (P[D] = O[D]));
          }), T && O.hasOwnProperty("inputValue") && r.props.onInputValueChange(O.inputValue, U({}, r.getStateAndHelpers(), O)), P;
        }, function() {
          Xc(v)();
          var _ = Object.keys(k).length > 1;
          _ && r.props.onStateChange(k, r.getStateAndHelpers()), I && r.props.onSelect(m.selectedItem, r.getStateAndHelpers()), w !== void 0 &&
          r.props.onChange(w, r.getStateAndHelpers()), r.props.onUserAction(k, r.getStateAndHelpers());
        });
      }, r.rootRef = function(m) {
        return r._rootNode = m;
      }, r.getRootProps = function(m, v) {
        var I, w = m === void 0 ? {} : m, k = w.refKey, T = k === void 0 ? "ref" : k, _ = w.ref, C = _e(w, py), O = v === void 0 ? {} : v, P = O.
        suppressRefError, D = P === void 0 ? !1 : P;
        r.getRootProps.called = !0, r.getRootProps.refKey = T, r.getRootProps.suppressRefError = D;
        var M = r.getState(), N = M.isOpen;
        return U((I = {}, I[T] = Ze(_, r.rootRef), I.role = "combobox", I["aria-expanded"] = N, I["aria-haspopup"] = "listbox", I["aria-owns"] =
        N ? r.menuId : void 0, I["aria-labelledby"] = r.labelId, I), C);
      }, r.keyDownHandlers = {
        ArrowDown: /* @__PURE__ */ a(function(v) {
          var I = this;
          if (v.preventDefault(), this.getState().isOpen) {
            var w = v.shiftKey ? 5 : 1;
            this.moveHighlightedIndex(w, {
              type: Wr
            });
          } else
            this.internalSetState({
              isOpen: !0,
              type: Wr
            }, function() {
              var k = I.getItemCount();
              if (k > 0) {
                var T = I.getState(), _ = T.highlightedIndex, C = Je(_, 1, {
                  length: k
                }, I.isItemDisabled, !0);
                I.setHighlightedIndex(C, {
                  type: Wr
                });
              }
            });
        }, "ArrowDown"),
        ArrowUp: /* @__PURE__ */ a(function(v) {
          var I = this;
          if (v.preventDefault(), this.getState().isOpen) {
            var w = v.shiftKey ? -5 : -1;
            this.moveHighlightedIndex(w, {
              type: Rr
            });
          } else
            this.internalSetState({
              isOpen: !0,
              type: Rr
            }, function() {
              var k = I.getItemCount();
              if (k > 0) {
                var T = I.getState(), _ = T.highlightedIndex, C = Je(_, -1, {
                  length: k
                }, I.isItemDisabled, !0);
                I.setHighlightedIndex(C, {
                  type: Rr
                });
              }
            });
        }, "ArrowUp"),
        Enter: /* @__PURE__ */ a(function(v) {
          if (v.which !== 229) {
            var I = this.getState(), w = I.isOpen, k = I.highlightedIndex;
            if (w && k != null) {
              v.preventDefault();
              var T = this.items[k], _ = this.getItemNodeFromIndex(k);
              if (T == null || _ && _.hasAttribute("disabled"))
                return;
              this.selectHighlightedItem({
                type: dp
              });
            }
          }
        }, "Enter"),
        Escape: /* @__PURE__ */ a(function(v) {
          v.preventDefault(), this.reset(U({
            type: pp
          }, !this.state.isOpen && {
            selectedItem: null,
            inputValue: ""
          }));
        }, "Escape")
      }, r.buttonKeyDownHandlers = U({}, r.keyDownHandlers, {
        " ": /* @__PURE__ */ a(function(v) {
          v.preventDefault(), this.toggleMenu({
            type: bp
          });
        }, "_")
      }), r.inputKeyDownHandlers = U({}, r.keyDownHandlers, {
        Home: /* @__PURE__ */ a(function(v) {
          var I = this.getState(), w = I.isOpen;
          if (w) {
            v.preventDefault();
            var k = this.getItemCount();
            if (!(k <= 0 || !w)) {
              var T = vt(0, !1, {
                length: k
              }, this.isItemDisabled);
              this.setHighlightedIndex(T, {
                type: fp
              });
            }
          }
        }, "Home"),
        End: /* @__PURE__ */ a(function(v) {
          var I = this.getState(), w = I.isOpen;
          if (w) {
            v.preventDefault();
            var k = this.getItemCount();
            if (!(k <= 0 || !w)) {
              var T = vt(k - 1, !0, {
                length: k
              }, this.isItemDisabled);
              this.setHighlightedIndex(T, {
                type: mp
              });
            }
          }
        }, "End")
      }), r.getToggleButtonProps = function(m) {
        var v = m === void 0 ? {} : m, I = v.onClick;
        v.onPress;
        var w = v.onKeyDown, k = v.onKeyUp, T = v.onBlur, _ = _e(v, dy), C = r.getState(), O = C.isOpen, P = {
          onClick: ae(I, r.buttonHandleClick),
          onKeyDown: ae(w, r.buttonHandleKeyDown),
          onKeyUp: ae(k, r.buttonHandleKeyUp),
          onBlur: ae(T, r.buttonHandleBlur)
        }, D = _.disabled ? {} : P;
        return U({
          type: "button",
          role: "button",
          "aria-label": O ? "close menu" : "open menu",
          "aria-haspopup": !0,
          "data-toggle": !0
        }, D, _);
      }, r.buttonHandleKeyUp = function(m) {
        m.preventDefault();
      }, r.buttonHandleKeyDown = function(m) {
        var v = to(m);
        r.buttonKeyDownHandlers[v] && r.buttonKeyDownHandlers[v].call(r, m);
      }, r.buttonHandleClick = function(m) {
        if (m.preventDefault(), r.props.environment) {
          var v = r.props.environment.document, I = v.body, w = v.activeElement;
          I && I === w && m.target.focus();
        }
        r.internalSetTimeout(function() {
          return r.toggleMenu({
            type: vp
          });
        });
      }, r.buttonHandleBlur = function(m) {
        var v = m.target;
        r.internalSetTimeout(function() {
          if (!(r.isMouseDown || !r.props.environment)) {
            var I = r.props.environment.document.activeElement;
            (I == null || I.id !== r.inputId) && I !== v && r.reset({
              type: xp
            });
          }
        });
      }, r.getLabelProps = function(m) {
        return U({
          htmlFor: r.inputId,
          id: r.labelId
        }, m);
      }, r.getInputProps = function(m) {
        var v = m === void 0 ? {} : m, I = v.onKeyDown, w = v.onBlur, k = v.onChange, T = v.onInput;
        v.onChangeText;
        var _ = _e(v, fy), C, O = {};
        C = "onChange";
        var P = r.getState(), D = P.inputValue, M = P.isOpen, N = P.highlightedIndex;
        if (!_.disabled) {
          var Y;
          O = (Y = {}, Y[C] = ae(k, T, r.inputHandleChange), Y.onKeyDown = ae(I, r.inputHandleKeyDown), Y.onBlur = ae(w, r.inputHandleBlur),
          Y);
        }
        return U({
          "aria-autocomplete": "list",
          "aria-activedescendant": M && typeof N == "number" && N >= 0 ? r.getItemId(N) : void 0,
          "aria-controls": M ? r.menuId : void 0,
          "aria-labelledby": _ && _["aria-label"] ? void 0 : r.labelId,
          // https://developer.mozilla.org/en-US/docs/Web/Security/Securing_your_site/Turning_off_form_autocompletion
          // revert back since autocomplete="nope" is ignored on latest Chrome and Opera
          autoComplete: "off",
          value: D,
          id: r.inputId
        }, O, _);
      }, r.inputHandleKeyDown = function(m) {
        var v = to(m);
        v && r.inputKeyDownHandlers[v] && r.inputKeyDownHandlers[v].call(r, m);
      }, r.inputHandleChange = function(m) {
        r.internalSetState({
          type: yp,
          isOpen: !0,
          inputValue: m.target.value,
          highlightedIndex: r.props.defaultHighlightedIndex
        });
      }, r.inputHandleBlur = function() {
        r.internalSetTimeout(function() {
          var m;
          if (!(r.isMouseDown || !r.props.environment)) {
            var v = r.props.environment.document.activeElement, I = (v == null || (m = v.dataset) == null ? void 0 : m.toggle) && r._rootNode &&
            r._rootNode.contains(v);
            I || r.reset({
              type: gp
            });
          }
        });
      }, r.menuRef = function(m) {
        r._menuNode = m;
      }, r.getMenuProps = function(m, v) {
        var I, w = m === void 0 ? {} : m, k = w.refKey, T = k === void 0 ? "ref" : k, _ = w.ref, C = _e(w, my), O = v === void 0 ? {} : v, P = O.
        suppressRefError, D = P === void 0 ? !1 : P;
        return r.getMenuProps.called = !0, r.getMenuProps.refKey = T, r.getMenuProps.suppressRefError = D, U((I = {}, I[T] = Ze(_, r.menuRef),
        I.role = "listbox", I["aria-labelledby"] = C && C["aria-label"] ? void 0 : r.labelId, I.id = r.menuId, I), C);
      }, r.getItemProps = function(m) {
        var v, I = m === void 0 ? {} : m, w = I.onMouseMove, k = I.onMouseDown, T = I.onClick;
        I.onPress;
        var _ = I.index, C = I.item, O = C === void 0 ? (
          /* istanbul ignore next */
          void 0
        ) : C, P = _e(I, hy);
        _ === void 0 ? (r.items.push(O), _ = r.items.indexOf(O)) : r.items[_] = O;
        var D = "onClick", M = T, N = (v = {
          // onMouseMove is used over onMouseEnter here. onMouseMove
          // is only triggered on actual mouse movement while onMouseEnter
          // can fire on DOM changes, interrupting keyboard navigation
          onMouseMove: ae(w, function() {
            _ !== r.getState().highlightedIndex && (r.setHighlightedIndex(_, {
              type: cp
            }), r.avoidScrolling = !0, r.internalSetTimeout(function() {
              return r.avoidScrolling = !1;
            }, 250));
          }),
          onMouseDown: ae(k, function(j) {
            j.preventDefault();
          })
        }, v[D] = ae(M, function() {
          r.selectItemAtIndex(_, {
            type: hp
          });
        }), v), Y = P.disabled ? {
          onMouseDown: N.onMouseDown
        } : N;
        return U({
          id: r.getItemId(_),
          role: "option",
          "aria-selected": r.getState().highlightedIndex === _
        }, Y, P);
      }, r.clearItems = function() {
        r.items = [];
      }, r.reset = function(m, v) {
        m === void 0 && (m = {}), m = zr(m), r.internalSetState(function(I) {
          var w = I.selectedItem;
          return U({
            isOpen: r.props.defaultIsOpen,
            highlightedIndex: r.props.defaultHighlightedIndex,
            inputValue: r.props.itemToString(w)
          }, m);
        }, v);
      }, r.toggleMenu = function(m, v) {
        m === void 0 && (m = {}), m = zr(m), r.internalSetState(function(I) {
          var w = I.isOpen;
          return U({
            isOpen: !w
          }, w && {
            highlightedIndex: r.props.defaultHighlightedIndex
          }, m);
        }, function() {
          var I = r.getState(), w = I.isOpen, k = I.highlightedIndex;
          w && r.getItemCount() > 0 && typeof k == "number" && r.setHighlightedIndex(k, m), Xc(v)();
        });
      }, r.openMenu = function(m) {
        r.internalSetState({
          isOpen: !0
        }, m);
      }, r.closeMenu = function(m) {
        r.internalSetState({
          isOpen: !1
        }, m);
      }, r.updateStatus = Qr(function() {
        var m;
        if ((m = r.props) != null && (m = m.environment) != null && m.document) {
          var v = r.getState(), I = r.items[v.highlightedIndex], w = r.getItemCount(), k = r.props.getA11yStatusMessage(U({
            itemToString: r.props.itemToString,
            previousResultCount: r.previousResultCount,
            resultCount: w,
            highlightedItem: I
          }, v));
          r.previousResultCount = w, ap(k, r.props.environment.document);
        }
      }, 200);
      var l = r.props, u = l.defaultHighlightedIndex, c = l.initialHighlightedIndex, p = c === void 0 ? u : c, d = l.defaultIsOpen, g = l.initialIsOpen,
      h = g === void 0 ? d : g, y = l.initialInputValue, f = y === void 0 ? "" : y, b = l.initialSelectedItem, S = b === void 0 ? null : b, E = r.
      getState({
        highlightedIndex: p,
        isOpen: h,
        inputValue: f,
        selectedItem: S
      });
      return E.selectedItem != null && r.props.initialInputValue === void 0 && (E.inputValue = r.props.itemToString(E.selectedItem)), r.state =
      E, r;
    }
    a(o, "Downshift"), Xt(o, t);
    var i = o.prototype;
    return i.internalClearTimeouts = /* @__PURE__ */ a(function() {
      this.timeoutIds.forEach(function(r) {
        clearTimeout(r);
      }), this.timeoutIds = [];
    }, "internalClearTimeouts"), i.getState = /* @__PURE__ */ a(function(r) {
      return r === void 0 && (r = this.state), Eo(r, this.props);
    }, "getState$1"), i.getItemCount = /* @__PURE__ */ a(function() {
      var r = this.items.length;
      return this.itemCount != null ? r = this.itemCount : this.props.itemCount !== void 0 && (r = this.props.itemCount), r;
    }, "getItemCount"), i.getItemNodeFromIndex = /* @__PURE__ */ a(function(r) {
      return this.props.environment ? this.props.environment.document.getElementById(this.getItemId(r)) : null;
    }, "getItemNodeFromIndex"), i.scrollHighlightedItemIntoView = /* @__PURE__ */ a(function() {
      {
        var r = this.getItemNodeFromIndex(this.getState().highlightedIndex);
        this.props.scrollIntoView(r, this._menuNode);
      }
    }, "scrollHighlightedItemIntoView"), i.moveHighlightedIndex = /* @__PURE__ */ a(function(r, l) {
      var u = this.getItemCount(), c = this.getState(), p = c.highlightedIndex;
      if (u > 0) {
        var d = Je(p, r, {
          length: u
        }, this.isItemDisabled, !0);
        this.setHighlightedIndex(d, l);
      }
    }, "moveHighlightedIndex"), i.getStateAndHelpers = /* @__PURE__ */ a(function() {
      var r = this.getState(), l = r.highlightedIndex, u = r.inputValue, c = r.selectedItem, p = r.isOpen, d = this.props.itemToString, g = this.
      id, h = this.getRootProps, y = this.getToggleButtonProps, f = this.getLabelProps, b = this.getMenuProps, S = this.getInputProps, E = this.
      getItemProps, m = this.openMenu, v = this.closeMenu, I = this.toggleMenu, w = this.selectItem, k = this.selectItemAtIndex, T = this.selectHighlightedItem,
      _ = this.setHighlightedIndex, C = this.clearSelection, O = this.clearItems, P = this.reset, D = this.setItemCount, M = this.unsetItemCount,
      N = this.internalSetState;
      return {
        // prop getters
        getRootProps: h,
        getToggleButtonProps: y,
        getLabelProps: f,
        getMenuProps: b,
        getInputProps: S,
        getItemProps: E,
        // actions
        reset: P,
        openMenu: m,
        closeMenu: v,
        toggleMenu: I,
        selectItem: w,
        selectItemAtIndex: k,
        selectHighlightedItem: T,
        setHighlightedIndex: _,
        clearSelection: C,
        clearItems: O,
        setItemCount: D,
        unsetItemCount: M,
        setState: N,
        // props
        itemToString: d,
        // derived
        id: g,
        // state
        highlightedIndex: l,
        inputValue: u,
        isOpen: p,
        selectedItem: c
      };
    }, "getStateAndHelpers"), i.componentDidMount = /* @__PURE__ */ a(function() {
      var r = this;
      if (!this.props.environment)
        this.cleanup = function() {
          r.internalClearTimeouts();
        };
      else {
        var l = /* @__PURE__ */ a(function() {
          r.isMouseDown = !0;
        }, "onMouseDown"), u = /* @__PURE__ */ a(function(y) {
          r.isMouseDown = !1;
          var f = Kr(y.target, [r._rootNode, r._menuNode], r.props.environment);
          !f && r.getState().isOpen && r.reset({
            type: up
          }, function() {
            return r.props.onOuterClick(r.getStateAndHelpers());
          });
        }, "onMouseUp"), c = /* @__PURE__ */ a(function() {
          r.isTouchMove = !1;
        }, "onTouchStart"), p = /* @__PURE__ */ a(function() {
          r.isTouchMove = !0;
        }, "onTouchMove"), d = /* @__PURE__ */ a(function(y) {
          var f = Kr(y.target, [r._rootNode, r._menuNode], r.props.environment, !1);
          !r.isTouchMove && !f && r.getState().isOpen && r.reset({
            type: Sp
          }, function() {
            return r.props.onOuterClick(r.getStateAndHelpers());
          });
        }, "onTouchEnd"), g = this.props.environment;
        g.addEventListener("mousedown", l), g.addEventListener("mouseup", u), g.addEventListener("touchstart", c), g.addEventListener("touch\
move", p), g.addEventListener("touchend", d), this.cleanup = function() {
          r.internalClearTimeouts(), r.updateStatus.cancel(), g.removeEventListener("mousedown", l), g.removeEventListener("mouseup", u), g.
          removeEventListener("touchstart", c), g.removeEventListener("touchmove", p), g.removeEventListener("touchend", d);
        };
      }
    }, "componentDidMount"), i.shouldScroll = /* @__PURE__ */ a(function(r, l) {
      var u = this.props.highlightedIndex === void 0 ? this.getState() : this.props, c = u.highlightedIndex, p = l.highlightedIndex === void 0 ?
      r : l, d = p.highlightedIndex, g = c && this.getState().isOpen && !r.isOpen, h = c !== d;
      return g || h;
    }, "shouldScroll"), i.componentDidUpdate = /* @__PURE__ */ a(function(r, l) {
      $r(this.props, "selectedItem") && this.props.selectedItemChanged(r.selectedItem, this.props.selectedItem) && this.internalSetState({
        type: Ip,
        inputValue: this.props.itemToString(this.props.selectedItem)
      }), !this.avoidScrolling && this.shouldScroll(l, r) && this.scrollHighlightedItemIntoView(), this.updateStatus();
    }, "componentDidUpdate"), i.componentWillUnmount = /* @__PURE__ */ a(function() {
      this.cleanup();
    }, "componentWillUnmount"), i.render = /* @__PURE__ */ a(function() {
      var r = Jc(this.props.children, Fe);
      this.clearItems(), this.getRootProps.called = !1, this.getRootProps.refKey = void 0, this.getRootProps.suppressRefError = void 0, this.
      getMenuProps.called = !1, this.getMenuProps.refKey = void 0, this.getMenuProps.suppressRefError = void 0, this.getLabelProps.called = !1,
      this.getInputProps.called = !1;
      var l = Jc(r(this.getStateAndHelpers()));
      if (!l)
        return null;
      if (this.getRootProps.called || this.props.suppressRefError)
        return l;
      if (iy(l))
        return /* @__PURE__ */ ds(l, this.getRootProps(sy(l)));
    }, "render"), o;
  }(Ne);
  return e.defaultProps = {
    defaultHighlightedIndex: null,
    defaultIsOpen: !1,
    getA11yStatusMessage: ny,
    itemToString: /* @__PURE__ */ a(function(o) {
      return o == null ? "" : String(o);
    }, "itemToString"),
    onStateChange: Fe,
    onInputValueChange: Fe,
    onUserAction: Fe,
    onChange: Fe,
    onSelect: Fe,
    onOuterClick: Fe,
    selectedItemChanged: /* @__PURE__ */ a(function(o, i) {
      return o !== i;
    }, "selectedItemChanged"),
    environment: (
      /* istanbul ignore next (ssr) */
      typeof window > "u" ? void 0 : window
    ),
    stateReducer: /* @__PURE__ */ a(function(o, i) {
      return i;
    }, "stateReducer"),
    suppressRefError: !1,
    scrollIntoView: np
  }, e.stateChangeTypes = cy, e;
}(), Rt = gy;
var wp = {
  highlightedIndex: -1,
  isOpen: !1,
  selectedItem: null,
  inputValue: ""
};
function yy(e, t, o) {
  var i = e.props, n = e.type, r = {};
  Object.keys(t).forEach(function(l) {
    by(l, e, t, o), o[l] !== t[l] && (r[l] = o[l]);
  }), i.onStateChange && Object.keys(r).length && i.onStateChange(U({
    type: n
  }, r));
}
a(yy, "callOnChangeProps");
function by(e, t, o, i) {
  var n = t.props, r = t.type, l = "on" + di(e) + "Change";
  n[l] && i[e] !== void 0 && i[e] !== o[e] && n[l](U({
    type: r
  }, i));
}
a(by, "invokeOnChangeHandler");
function vy(e, t) {
  return t.changes;
}
a(vy, "stateReducer");
var ep = Qr(function(e, t) {
  ap(e, t);
}, 200), xy = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u" ? dt : R, Ep = "useId" in s ?
/* @__PURE__ */ a(function(t) {
  var o = t.id, i = t.labelId, n = t.menuId, r = t.getItemId, l = t.toggleButtonId, u = t.inputId, c = "downshift-" + s.useId();
  o || (o = c);
  var p = q({
    labelId: i || o + "-label",
    menuId: n || o + "-menu",
    getItemId: r || function(d) {
      return o + "-item-" + d;
    },
    toggleButtonId: l || o + "-toggle-button",
    inputId: u || o + "-input"
  });
  return p.current;
}, "useElementIds") : /* @__PURE__ */ a(function(t) {
  var o = t.id, i = o === void 0 ? "downshift-" + ip() : o, n = t.labelId, r = t.menuId, l = t.getItemId, u = t.toggleButtonId, c = t.inputId,
  p = q({
    labelId: n || i + "-label",
    menuId: r || i + "-menu",
    getItemId: l || function(d) {
      return i + "-item-" + d;
    },
    toggleButtonId: u || i + "-toggle-button",
    inputId: c || i + "-input"
  });
  return p.current;
}, "useElementIds");
function pi(e, t, o, i) {
  var n, r;
  if (e === void 0) {
    if (t === void 0)
      throw new Error(i);
    n = o[t], r = t;
  } else
    r = t === void 0 ? o.indexOf(e) : t, n = e;
  return [n, r];
}
a(pi, "getItemAndIndex");
function Iy(e) {
  return /^\S{1}$/.test(e);
}
a(Iy, "isAcceptedCharacterKey");
function di(e) {
  return "" + e.slice(0, 1).toUpperCase() + e.slice(1);
}
a(di, "capitalizeString");
function Xr(e) {
  var t = q(e);
  return t.current = e, t;
}
a(Xr, "useLatestRef");
function Cp(e, t, o, i) {
  var n = q(), r = q(), l = A(function(y, f) {
    r.current = f, y = Eo(y, f.props);
    var b = e(y, f), S = f.props.stateReducer(y, U({}, f, {
      changes: b
    }));
    return S;
  }, [e]), u = Vt(l, t, o), c = u[0], p = u[1], d = Xr(t), g = A(function(y) {
    return p(U({
      props: d.current
    }, y));
  }, [d]), h = r.current;
  return R(function() {
    var y = Eo(n.current, h?.props), f = h && n.current && !i(y, c);
    f && yy(h, y, c), n.current = c;
  }, [c, h, i]), [c, g];
}
a(Cp, "useEnhancedReducer");
function Tp(e, t, o, i) {
  var n = Cp(e, t, o, i), r = n[0], l = n[1];
  return [Eo(r, t), l];
}
a(Tp, "useControlledReducer$1");
var wo = {
  itemToString: /* @__PURE__ */ a(function(t) {
    return t ? String(t) : "";
  }, "itemToString"),
  itemToKey: /* @__PURE__ */ a(function(t) {
    return t;
  }, "itemToKey"),
  stateReducer: vy,
  scrollIntoView: np,
  environment: (
    /* istanbul ignore next (ssr) */
    typeof window > "u" ? void 0 : window
  )
};
function He(e, t, o) {
  o === void 0 && (o = wp);
  var i = e["default" + di(t)];
  return i !== void 0 ? i : o[t];
}
a(He, "getDefaultValue$1");
function Ht(e, t, o) {
  o === void 0 && (o = wp);
  var i = e[t];
  if (i !== void 0)
    return i;
  var n = e["initial" + di(t)];
  return n !== void 0 ? n : He(e, t, o);
}
a(Ht, "getInitialValue$1");
function _p(e) {
  var t = Ht(e, "selectedItem"), o = Ht(e, "isOpen"), i = Ht(e, "highlightedIndex"), n = Ht(e, "inputValue");
  return {
    highlightedIndex: i < 0 && t && o ? e.items.findIndex(function(r) {
      return e.itemToKey(r) === e.itemToKey(t);
    }) : i,
    isOpen: o,
    selectedItem: t,
    inputValue: n
  };
}
a(_p, "getInitialState$2");
function zt(e, t, o) {
  var i = e.items, n = e.initialHighlightedIndex, r = e.defaultHighlightedIndex, l = e.isItemDisabled, u = e.itemToKey, c = t.selectedItem, p = t.
  highlightedIndex;
  return i.length === 0 ? -1 : n !== void 0 && p === n && !l(i[n]) ? n : r !== void 0 && !l(i[r]) ? r : c ? i.findIndex(function(d) {
    return u(c) === u(d);
  }) : o < 0 && !l(i[i.length - 1]) ? i.length - 1 : o > 0 && !l(i[0]) ? 0 : -1;
}
a(zt, "getHighlightedIndexOnOpen");
function kp(e, t, o) {
  var i = q({
    isMouseDown: !1,
    isTouchMove: !1,
    isTouchEnd: !1
  });
  return R(function() {
    if (!e)
      return Fe;
    var n = t.map(function(d) {
      return d.current;
    });
    function r() {
      i.current.isTouchEnd = !1, i.current.isMouseDown = !0;
    }
    a(r, "onMouseDown");
    function l(d) {
      i.current.isMouseDown = !1, Kr(d.target, n, e) || o();
    }
    a(l, "onMouseUp");
    function u() {
      i.current.isTouchEnd = !1, i.current.isTouchMove = !1;
    }
    a(u, "onTouchStart");
    function c() {
      i.current.isTouchMove = !0;
    }
    a(c, "onTouchMove");
    function p(d) {
      i.current.isTouchEnd = !0, !i.current.isTouchMove && !Kr(d.target, n, e, !1) && o();
    }
    return a(p, "onTouchEnd"), e.addEventListener("mousedown", r), e.addEventListener("mouseup", l), e.addEventListener("touchstart", u), e.
    addEventListener("touchmove", c), e.addEventListener("touchend", p), /* @__PURE__ */ a(function() {
      e.removeEventListener("mousedown", r), e.removeEventListener("mouseup", l), e.removeEventListener("touchstart", u), e.removeEventListener(
      "touchmove", c), e.removeEventListener("touchend", p);
    }, "cleanup");
  }, [e, o]), i.current;
}
a(kp, "useMouseAndTouchTracker");
var fi = /* @__PURE__ */ a(function() {
  return Fe;
}, "useGetterPropsCalledChecker");
function mi(e, t, o, i) {
  i === void 0 && (i = {});
  var n = i.document, r = Zr();
  R(function() {
    if (!(!e || r || !n)) {
      var l = e(t);
      ep(l, n);
    }
  }, o), R(function() {
    return function() {
      ep.cancel(), uy(n);
    };
  }, [n]);
}
a(mi, "useA11yMessageStatus");
function Op(e) {
  var t = e.highlightedIndex, o = e.isOpen, i = e.itemRefs, n = e.getItemNodeFromIndex, r = e.menuElement, l = e.scrollIntoView, u = q(!0);
  return xy(function() {
    t < 0 || !o || !Object.keys(i.current).length || (u.current === !1 ? u.current = !0 : l(n(t), r));
  }, [t]), u;
}
a(Op, "useScrollIntoView");
var hi = Fe;
function Ur(e, t, o) {
  var i;
  o === void 0 && (o = !0);
  var n = ((i = e.items) == null ? void 0 : i.length) && t >= 0;
  return U({
    isOpen: !1,
    highlightedIndex: -1
  }, n && U({
    selectedItem: e.items[t],
    isOpen: He(e, "isOpen"),
    highlightedIndex: He(e, "highlightedIndex")
  }, o && {
    inputValue: e.itemToString(e.items[t])
  }));
}
a(Ur, "getChangesOnSelection");
function Pp(e, t) {
  return e.isOpen === t.isOpen && e.inputValue === t.inputValue && e.highlightedIndex === t.highlightedIndex && e.selectedItem === t.selectedItem;
}
a(Pp, "isDropdownsStateEqual");
function Zr() {
  var e = s.useRef(!0);
  return s.useEffect(function() {
    return e.current = !1, function() {
      e.current = !0;
    };
  }, []), e.current;
}
a(Zr, "useIsInitialMount");
var jr = {
  environment: G.default.shape({
    addEventListener: G.default.func.isRequired,
    removeEventListener: G.default.func.isRequired,
    document: G.default.shape({
      createElement: G.default.func.isRequired,
      getElementById: G.default.func.isRequired,
      activeElement: G.default.any.isRequired,
      body: G.default.any.isRequired
    }).isRequired,
    Node: G.default.func.isRequired
  }),
  itemToString: G.default.func,
  itemToKey: G.default.func,
  stateReducer: G.default.func
}, Ap = U({}, jr, {
  getA11yStatusMessage: G.default.func,
  highlightedIndex: G.default.number,
  defaultHighlightedIndex: G.default.number,
  initialHighlightedIndex: G.default.number,
  isOpen: G.default.bool,
  defaultIsOpen: G.default.bool,
  initialIsOpen: G.default.bool,
  selectedItem: G.default.any,
  initialSelectedItem: G.default.any,
  defaultSelectedItem: G.default.any,
  id: G.default.string,
  labelId: G.default.string,
  menuId: G.default.string,
  getItemId: G.default.func,
  toggleButtonId: G.default.string,
  onSelectedItemChange: G.default.func,
  onHighlightedIndexChange: G.default.func,
  onStateChange: G.default.func,
  onIsOpenChange: G.default.func,
  scrollIntoView: G.default.func
});
function Dp(e, t, o) {
  var i = t.type, n = t.props, r;
  switch (i) {
    case o.ItemMouseMove:
      r = {
        highlightedIndex: t.disabled ? -1 : t.index
      };
      break;
    case o.MenuMouseLeave:
      r = {
        highlightedIndex: -1
      };
      break;
    case o.ToggleButtonClick:
    case o.FunctionToggleMenu:
      r = {
        isOpen: !e.isOpen,
        highlightedIndex: e.isOpen ? -1 : zt(n, e, 0)
      };
      break;
    case o.FunctionOpenMenu:
      r = {
        isOpen: !0,
        highlightedIndex: zt(n, e, 0)
      };
      break;
    case o.FunctionCloseMenu:
      r = {
        isOpen: !1
      };
      break;
    case o.FunctionSetHighlightedIndex:
      r = {
        highlightedIndex: t.highlightedIndex
      };
      break;
    case o.FunctionSetInputValue:
      r = {
        inputValue: t.inputValue
      };
      break;
    case o.FunctionReset:
      r = {
        highlightedIndex: He(n, "highlightedIndex"),
        isOpen: He(n, "isOpen"),
        selectedItem: He(n, "selectedItem"),
        inputValue: He(n, "inputValue")
      };
      break;
    default:
      throw new Error("Reducer called without proper action type.");
  }
  return U({}, e, r);
}
a(Dp, "downshiftCommonReducer");
function Sy(e) {
  for (var t = e.keysSoFar, o = e.highlightedIndex, i = e.items, n = e.itemToString, r = e.isItemDisabled, l = t.toLowerCase(), u = 0; u < i.
  length; u++) {
    var c = (u + o + (t.length < 2 ? 1 : 0)) % i.length, p = i[c];
    if (p !== void 0 && n(p).toLowerCase().startsWith(l) && !r(p, c))
      return c;
  }
  return o;
}
a(Sy, "getItemIndexByCharacterKey");
var KL = Bt(Bt({}, Ap), { items: G.default.array.isRequired, isItemDisabled: G.default.func }), wy = Bt(Bt({}, wo), { isItemDisabled: /* @__PURE__ */ a(
function() {
  return !1;
}, "isItemDisabled") }), Ey = Fe, Vr = 0, gi = 1, yi = 2, qr = 3, bi = 4, vi = 5, xi = 6, Ii = 7, Si = 8, wi = 9, Ei = 10, Gr = 11, Mp = 12,
Lp = 13, Ci = 14, Np = 15, Fp = 16, Bp = 17, Hp = 18, Ti = 19, ci = 20, zp = 21, Rp = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  ToggleButtonClick: Vr,
  ToggleButtonKeyDownArrowDown: gi,
  ToggleButtonKeyDownArrowUp: yi,
  ToggleButtonKeyDownCharacter: qr,
  ToggleButtonKeyDownEscape: bi,
  ToggleButtonKeyDownHome: vi,
  ToggleButtonKeyDownEnd: xi,
  ToggleButtonKeyDownEnter: Ii,
  ToggleButtonKeyDownSpaceButton: Si,
  ToggleButtonKeyDownPageUp: wi,
  ToggleButtonKeyDownPageDown: Ei,
  ToggleButtonBlur: Gr,
  MenuMouseLeave: Mp,
  ItemMouseMove: Lp,
  ItemClick: Ci,
  FunctionToggleMenu: Np,
  FunctionOpenMenu: Fp,
  FunctionCloseMenu: Bp,
  FunctionSetHighlightedIndex: Hp,
  FunctionSelectItem: Ti,
  FunctionSetInputValue: ci,
  FunctionReset: zp
});
function Cy(e, t) {
  var o, i = t.type, n = t.props, r = t.altKey, l;
  switch (i) {
    case Ci:
      l = {
        isOpen: He(n, "isOpen"),
        highlightedIndex: He(n, "highlightedIndex"),
        selectedItem: n.items[t.index]
      };
      break;
    case qr:
      {
        var u = t.key, c = "" + e.inputValue + u, p = !e.isOpen && e.selectedItem ? n.items.findIndex(function(y) {
          return n.itemToKey(y) === n.itemToKey(e.selectedItem);
        }) : e.highlightedIndex, d = Sy({
          keysSoFar: c,
          highlightedIndex: p,
          items: n.items,
          itemToString: n.itemToString,
          isItemDisabled: n.isItemDisabled
        });
        l = {
          inputValue: c,
          highlightedIndex: d,
          isOpen: !0
        };
      }
      break;
    case gi:
      {
        var g = e.isOpen ? Je(e.highlightedIndex, 1, n.items, n.isItemDisabled) : r && e.selectedItem == null ? -1 : zt(n, e, 1);
        l = {
          highlightedIndex: g,
          isOpen: !0
        };
      }
      break;
    case yi:
      if (e.isOpen && r)
        l = Ur(n, e.highlightedIndex, !1);
      else {
        var h = e.isOpen ? Je(e.highlightedIndex, -1, n.items, n.isItemDisabled) : zt(n, e, -1);
        l = {
          highlightedIndex: h,
          isOpen: !0
        };
      }
      break;
    // only triggered when menu is open.
    case Ii:
    case Si:
      l = Ur(n, e.highlightedIndex, !1);
      break;
    case vi:
      l = {
        highlightedIndex: vt(0, !1, n.items, n.isItemDisabled),
        isOpen: !0
      };
      break;
    case xi:
      l = {
        highlightedIndex: vt(n.items.length - 1, !0, n.items, n.isItemDisabled),
        isOpen: !0
      };
      break;
    case wi:
      l = {
        highlightedIndex: Je(e.highlightedIndex, -10, n.items, n.isItemDisabled)
      };
      break;
    case Ei:
      l = {
        highlightedIndex: Je(e.highlightedIndex, 10, n.items, n.isItemDisabled)
      };
      break;
    case bi:
      l = {
        isOpen: !1,
        highlightedIndex: -1
      };
      break;
    case Gr:
      l = U({
        isOpen: !1,
        highlightedIndex: -1
      }, e.highlightedIndex >= 0 && ((o = n.items) == null ? void 0 : o.length) && {
        selectedItem: n.items[e.highlightedIndex]
      });
      break;
    case Ti:
      l = {
        selectedItem: t.selectedItem
      };
      break;
    default:
      return Dp(e, t, Rp);
  }
  return U({}, e, l);
}
a(Cy, "downshiftSelectReducer");
var Ty = ["onClick"], _y = ["onMouseLeave", "refKey", "ref"], ky = ["onBlur", "onClick", "onPress", "onKeyDown", "refKey", "ref"], Oy = ["it\
em", "index", "onMouseMove", "onClick", "onMouseDown", "onPress", "refKey", "disabled", "ref"];
Wp.stateChangeTypes = Rp;
function Wp(e) {
  e === void 0 && (e = {}), Ey(e, Wp);
  var t = U({}, wy, e), o = t.scrollIntoView, i = t.environment, n = t.getA11yStatusMessage, r = Tp(Cy, t, _p, Pp), l = r[0], u = r[1], c = l.
  isOpen, p = l.highlightedIndex, d = l.selectedItem, g = l.inputValue, h = q(null), y = q(null), f = q({}), b = q(null), S = Ep(t), E = Xr(
  {
    state: l,
    props: t
  }), m = A(function(H) {
    return f.current[S.getItemId(H)];
  }, [S]);
  mi(n, l, [c, p, d, g], i);
  var v = Op({
    menuElement: y.current,
    highlightedIndex: p,
    isOpen: c,
    itemRefs: f,
    scrollIntoView: o,
    getItemNodeFromIndex: m
  });
  R(function() {
    return b.current = Qr(function(H) {
      H({
        type: ci,
        inputValue: ""
      });
    }, 500), function() {
      b.current.cancel();
    };
  }, []), R(function() {
    g && b.current(u);
  }, [u, g]), hi({
    props: t,
    state: l
  }), R(function() {
    var H = Ht(t, "isOpen");
    H && h.current && h.current.focus();
  }, []);
  var I = kp(i, [h, y], A(/* @__PURE__ */ a(function() {
    E.current.state.isOpen && u({
      type: Gr
    });
  }, "handleBlur"), [u, E])), w = fi("getMenuProps", "getToggleButtonProps");
  R(function() {
    c || (f.current = {});
  }, [c]);
  var k = K(function() {
    return {
      ArrowDown: /* @__PURE__ */ a(function(V) {
        V.preventDefault(), u({
          type: gi,
          altKey: V.altKey
        });
      }, "ArrowDown"),
      ArrowUp: /* @__PURE__ */ a(function(V) {
        V.preventDefault(), u({
          type: yi,
          altKey: V.altKey
        });
      }, "ArrowUp"),
      Home: /* @__PURE__ */ a(function(V) {
        V.preventDefault(), u({
          type: vi
        });
      }, "Home"),
      End: /* @__PURE__ */ a(function(V) {
        V.preventDefault(), u({
          type: xi
        });
      }, "End"),
      Escape: /* @__PURE__ */ a(function() {
        E.current.state.isOpen && u({
          type: bi
        });
      }, "Escape"),
      Enter: /* @__PURE__ */ a(function(V) {
        V.preventDefault(), u({
          type: E.current.state.isOpen ? Ii : Vr
        });
      }, "Enter"),
      PageUp: /* @__PURE__ */ a(function(V) {
        E.current.state.isOpen && (V.preventDefault(), u({
          type: wi
        }));
      }, "PageUp"),
      PageDown: /* @__PURE__ */ a(function(V) {
        E.current.state.isOpen && (V.preventDefault(), u({
          type: Ei
        }));
      }, "PageDown"),
      " ": /* @__PURE__ */ a(function(V) {
        V.preventDefault();
        var z = E.current.state;
        if (!z.isOpen) {
          u({
            type: Vr
          });
          return;
        }
        z.inputValue ? u({
          type: qr,
          key: " "
        }) : u({
          type: Si
        });
      }, "_")
    };
  }, [u, E]), T = A(function() {
    u({
      type: Np
    });
  }, [u]), _ = A(function() {
    u({
      type: Bp
    });
  }, [u]), C = A(function() {
    u({
      type: Fp
    });
  }, [u]), O = A(function(H) {
    u({
      type: Hp,
      highlightedIndex: H
    });
  }, [u]), P = A(function(H) {
    u({
      type: Ti,
      selectedItem: H
    });
  }, [u]), D = A(function() {
    u({
      type: zp
    });
  }, [u]), M = A(function(H) {
    u({
      type: ci,
      inputValue: H
    });
  }, [u]), N = A(function(H) {
    var V = H === void 0 ? {} : H, z = V.onClick, te = _e(V, Ty), F = /* @__PURE__ */ a(function() {
      var L;
      (L = h.current) == null || L.focus();
    }, "labelHandleClick");
    return U({
      id: S.labelId,
      htmlFor: S.toggleButtonId,
      onClick: ae(z, F)
    }, te);
  }, [S]), Y = A(function(H, V) {
    var z, te = H === void 0 ? {} : H, F = te.onMouseLeave, B = te.refKey, L = B === void 0 ? "ref" : B, W = te.ref, Z = _e(te, _y), re = V ===
    void 0 ? {} : V, J = re.suppressRefError, pe = J === void 0 ? !1 : J, se = /* @__PURE__ */ a(function() {
      u({
        type: Mp
      });
    }, "menuHandleMouseLeave");
    return w("getMenuProps", pe, L, y), U((z = {}, z[L] = Ze(W, function(ue) {
      y.current = ue;
    }), z.id = S.menuId, z.role = "listbox", z["aria-labelledby"] = Z && Z["aria-label"] ? void 0 : "" + S.labelId, z.onMouseLeave = ae(F, se),
    z), Z);
  }, [u, w, S]), j = A(function(H, V) {
    var z, te = H === void 0 ? {} : H, F = te.onBlur, B = te.onClick;
    te.onPress;
    var L = te.onKeyDown, W = te.refKey, Z = W === void 0 ? "ref" : W, re = te.ref, J = _e(te, ky), pe = V === void 0 ? {} : V, se = pe.suppressRefError,
    ue = se === void 0 ? !1 : se, le = E.current.state, xe = /* @__PURE__ */ a(function() {
      u({
        type: Vr
      });
    }, "toggleButtonHandleClick"), ge = /* @__PURE__ */ a(function() {
      le.isOpen && !I.isMouseDown && u({
        type: Gr
      });
    }, "toggleButtonHandleBlur"), ke = /* @__PURE__ */ a(function(Te) {
      var De = to(Te);
      De && k[De] ? k[De](Te) : Iy(De) && u({
        type: qr,
        key: De
      });
    }, "toggleButtonHandleKeyDown"), de = U((z = {}, z[Z] = Ze(re, function(Ie) {
      h.current = Ie;
    }), z["aria-activedescendant"] = le.isOpen && le.highlightedIndex > -1 ? S.getItemId(le.highlightedIndex) : "", z["aria-controls"] = S.menuId,
    z["aria-expanded"] = E.current.state.isOpen, z["aria-haspopup"] = "listbox", z["aria-labelledby"] = J && J["aria-label"] ? void 0 : "" +
    S.labelId, z.id = S.toggleButtonId, z.role = "combobox", z.tabIndex = 0, z.onBlur = ae(F, ge), z), J);
    return J.disabled || (de.onClick = ae(B, xe), de.onKeyDown = ae(L, ke)), w("getToggleButtonProps", ue, Z, h), de;
  }, [u, S, E, I, w, k]), Q = A(function(H) {
    var V, z = H === void 0 ? {} : H, te = z.item, F = z.index, B = z.onMouseMove, L = z.onClick, W = z.onMouseDown;
    z.onPress;
    var Z = z.refKey, re = Z === void 0 ? "ref" : Z, J = z.disabled, pe = z.ref, se = _e(z, Oy);
    J !== void 0 && console.warn('Passing "disabled" as an argument to getItemProps is not supported anymore. Please use the isItemDisabled \
prop from useSelect.');
    var ue = E.current, le = ue.state, xe = ue.props, ge = pi(te, F, xe.items, "Pass either item or index to getItemProps!"), ke = ge[0], de = ge[1],
    Ie = xe.isItemDisabled(ke, de), Te = /* @__PURE__ */ a(function() {
      I.isTouchEnd || de === le.highlightedIndex || (v.current = !1, u({
        type: Lp,
        index: de,
        disabled: Ie
      }));
    }, "itemHandleMouseMove"), De = /* @__PURE__ */ a(function() {
      u({
        type: Ci,
        index: de
      });
    }, "itemHandleClick"), et = /* @__PURE__ */ a(function(oo) {
      return oo.preventDefault();
    }, "itemHandleMouseDown"), Pe = U((V = {}, V[re] = Ze(pe, function(Ke) {
      Ke && (f.current[S.getItemId(de)] = Ke);
    }), V["aria-disabled"] = Ie, V["aria-selected"] = "" + (ke === le.selectedItem), V.id = S.getItemId(de), V.role = "option", V), se);
    return Ie || (Pe.onClick = ae(L, De)), Pe.onMouseMove = ae(B, Te), Pe.onMouseDown = ae(W, et), Pe;
  }, [E, S, I, v, u]);
  return {
    // prop getters.
    getToggleButtonProps: j,
    getLabelProps: N,
    getMenuProps: Y,
    getItemProps: Q,
    // actions.
    toggleMenu: T,
    openMenu: C,
    closeMenu: _,
    setHighlightedIndex: O,
    selectItem: P,
    reset: D,
    setInputValue: M,
    // state.
    highlightedIndex: p,
    isOpen: c,
    selectedItem: d,
    inputValue: g
  };
}
a(Wp, "useSelect");
var _i = 0, ki = 1, Oi = 2, Pi = 3, Ai = 4, Di = 5, Mi = 6, Li = 7, Ni = 8, Yr = 9, Fi = 10, jp = 11, Vp = 12, Bi = 13, $p = 14, Kp = 15, Up = 16,
qp = 17, Gp = 18, Hi = 19, Yp = 20, Qp = 21, zi = 22, Xp = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  InputKeyDownArrowDown: _i,
  InputKeyDownArrowUp: ki,
  InputKeyDownEscape: Oi,
  InputKeyDownHome: Pi,
  InputKeyDownEnd: Ai,
  InputKeyDownPageUp: Di,
  InputKeyDownPageDown: Mi,
  InputKeyDownEnter: Li,
  InputChange: Ni,
  InputBlur: Yr,
  InputClick: Fi,
  MenuMouseLeave: jp,
  ItemMouseMove: Vp,
  ItemClick: Bi,
  ToggleButtonClick: $p,
  FunctionToggleMenu: Kp,
  FunctionOpenMenu: Up,
  FunctionCloseMenu: qp,
  FunctionSetHighlightedIndex: Gp,
  FunctionSelectItem: Hi,
  FunctionSetInputValue: Yp,
  FunctionReset: Qp,
  ControlledPropUpdatedSelectedItem: zi
});
function Py(e) {
  var t = _p(e), o = t.selectedItem, i = t.inputValue;
  return i === "" && o && e.defaultInputValue === void 0 && e.initialInputValue === void 0 && e.inputValue === void 0 && (i = e.itemToString(
  o)), U({}, t, {
    inputValue: i
  });
}
a(Py, "getInitialState$1");
var UL = U({}, Ap, {
  items: G.default.array.isRequired,
  isItemDisabled: G.default.func,
  inputValue: G.default.string,
  defaultInputValue: G.default.string,
  initialInputValue: G.default.string,
  inputId: G.default.string,
  onInputValueChange: G.default.func
});
function Ay(e, t, o, i) {
  var n = q(), r = Cp(e, t, o, i), l = r[0], u = r[1], c = Zr();
  return R(function() {
    if ($r(t, "selectedItem")) {
      if (!c) {
        var p = t.itemToKey(t.selectedItem) !== t.itemToKey(n.current);
        p && u({
          type: zi,
          inputValue: t.itemToString(t.selectedItem)
        });
      }
      n.current = l.selectedItem === n.current ? t.selectedItem : l.selectedItem;
    }
  }, [l.selectedItem, t.selectedItem]), [Eo(l, t), u];
}
a(Ay, "useControlledReducer");
var Dy = Fe, My = U({}, wo, {
  isItemDisabled: /* @__PURE__ */ a(function() {
    return !1;
  }, "isItemDisabled")
});
function Ly(e, t) {
  var o, i = t.type, n = t.props, r = t.altKey, l;
  switch (i) {
    case Bi:
      l = {
        isOpen: He(n, "isOpen"),
        highlightedIndex: He(n, "highlightedIndex"),
        selectedItem: n.items[t.index],
        inputValue: n.itemToString(n.items[t.index])
      };
      break;
    case _i:
      e.isOpen ? l = {
        highlightedIndex: Je(e.highlightedIndex, 1, n.items, n.isItemDisabled, !0)
      } : l = {
        highlightedIndex: r && e.selectedItem == null ? -1 : zt(n, e, 1),
        isOpen: n.items.length >= 0
      };
      break;
    case ki:
      e.isOpen ? r ? l = Ur(n, e.highlightedIndex) : l = {
        highlightedIndex: Je(e.highlightedIndex, -1, n.items, n.isItemDisabled, !0)
      } : l = {
        highlightedIndex: zt(n, e, -1),
        isOpen: n.items.length >= 0
      };
      break;
    case Li:
      l = Ur(n, e.highlightedIndex);
      break;
    case Oi:
      l = U({
        isOpen: !1,
        highlightedIndex: -1
      }, !e.isOpen && {
        selectedItem: null,
        inputValue: ""
      });
      break;
    case Di:
      l = {
        highlightedIndex: Je(e.highlightedIndex, -10, n.items, n.isItemDisabled, !0)
      };
      break;
    case Mi:
      l = {
        highlightedIndex: Je(e.highlightedIndex, 10, n.items, n.isItemDisabled, !0)
      };
      break;
    case Pi:
      l = {
        highlightedIndex: vt(0, !1, n.items, n.isItemDisabled)
      };
      break;
    case Ai:
      l = {
        highlightedIndex: vt(n.items.length - 1, !0, n.items, n.isItemDisabled)
      };
      break;
    case Yr:
      l = U({
        isOpen: !1,
        highlightedIndex: -1
      }, e.highlightedIndex >= 0 && ((o = n.items) == null ? void 0 : o.length) && t.selectItem && {
        selectedItem: n.items[e.highlightedIndex],
        inputValue: n.itemToString(n.items[e.highlightedIndex])
      });
      break;
    case Ni:
      l = {
        isOpen: !0,
        highlightedIndex: He(n, "highlightedIndex"),
        inputValue: t.inputValue
      };
      break;
    case Fi:
      l = {
        isOpen: !e.isOpen,
        highlightedIndex: e.isOpen ? -1 : zt(n, e, 0)
      };
      break;
    case Hi:
      l = {
        selectedItem: t.selectedItem,
        inputValue: n.itemToString(t.selectedItem)
      };
      break;
    case zi:
      l = {
        inputValue: t.inputValue
      };
      break;
    default:
      return Dp(e, t, Xp);
  }
  return U({}, e, l);
}
a(Ly, "downshiftUseComboboxReducer");
var Ny = ["onMouseLeave", "refKey", "ref"], Fy = ["item", "index", "refKey", "ref", "onMouseMove", "onMouseDown", "onClick", "onPress", "dis\
abled"], By = ["onClick", "onPress", "refKey", "ref"], Hy = ["onKeyDown", "onChange", "onInput", "onBlur", "onChangeText", "onClick", "refKe\
y", "ref"];
Zp.stateChangeTypes = Xp;
function Zp(e) {
  e === void 0 && (e = {}), Dy(e, Zp);
  var t = U({}, My, e), o = t.items, i = t.scrollIntoView, n = t.environment, r = t.getA11yStatusMessage, l = Ay(Ly, t, Py, Pp), u = l[0], c = l[1],
  p = u.isOpen, d = u.highlightedIndex, g = u.selectedItem, h = u.inputValue, y = q(null), f = q({}), b = q(null), S = q(null), E = Zr(), m = Ep(
  t), v = q(), I = Xr({
    state: u,
    props: t
  }), w = A(function(F) {
    return f.current[m.getItemId(F)];
  }, [m]);
  mi(r, u, [p, d, g, h], n);
  var k = Op({
    menuElement: y.current,
    highlightedIndex: d,
    isOpen: p,
    itemRefs: f,
    scrollIntoView: i,
    getItemNodeFromIndex: w
  });
  hi({
    props: t,
    state: u
  }), R(function() {
    var F = Ht(t, "isOpen");
    F && b.current && b.current.focus();
  }, []), R(function() {
    E || (v.current = o.length);
  });
  var T = kp(n, [S, y, b], A(/* @__PURE__ */ a(function() {
    I.current.state.isOpen && c({
      type: Yr,
      selectItem: !1
    });
  }, "handleBlur"), [c, I])), _ = fi("getInputProps", "getMenuProps");
  R(function() {
    p || (f.current = {});
  }, [p]), R(function() {
    var F;
    !p || !(n != null && n.document) || !(b != null && (F = b.current) != null && F.focus) || n.document.activeElement !== b.current && b.current.
    focus();
  }, [p, n]);
  var C = K(function() {
    return {
      ArrowDown: /* @__PURE__ */ a(function(B) {
        B.preventDefault(), c({
          type: _i,
          altKey: B.altKey
        });
      }, "ArrowDown"),
      ArrowUp: /* @__PURE__ */ a(function(B) {
        B.preventDefault(), c({
          type: ki,
          altKey: B.altKey
        });
      }, "ArrowUp"),
      Home: /* @__PURE__ */ a(function(B) {
        I.current.state.isOpen && (B.preventDefault(), c({
          type: Pi
        }));
      }, "Home"),
      End: /* @__PURE__ */ a(function(B) {
        I.current.state.isOpen && (B.preventDefault(), c({
          type: Ai
        }));
      }, "End"),
      Escape: /* @__PURE__ */ a(function(B) {
        var L = I.current.state;
        (L.isOpen || L.inputValue || L.selectedItem || L.highlightedIndex > -1) && (B.preventDefault(), c({
          type: Oi
        }));
      }, "Escape"),
      Enter: /* @__PURE__ */ a(function(B) {
        var L = I.current.state;
        !L.isOpen || B.which === 229 || (B.preventDefault(), c({
          type: Li
        }));
      }, "Enter"),
      PageUp: /* @__PURE__ */ a(function(B) {
        I.current.state.isOpen && (B.preventDefault(), c({
          type: Di
        }));
      }, "PageUp"),
      PageDown: /* @__PURE__ */ a(function(B) {
        I.current.state.isOpen && (B.preventDefault(), c({
          type: Mi
        }));
      }, "PageDown")
    };
  }, [c, I]), O = A(function(F) {
    return U({
      id: m.labelId,
      htmlFor: m.inputId
    }, F);
  }, [m]), P = A(function(F, B) {
    var L, W = F === void 0 ? {} : F, Z = W.onMouseLeave, re = W.refKey, J = re === void 0 ? "ref" : re, pe = W.ref, se = _e(W, Ny), ue = B ===
    void 0 ? {} : B, le = ue.suppressRefError, xe = le === void 0 ? !1 : le;
    return _("getMenuProps", xe, J, y), U((L = {}, L[J] = Ze(pe, function(ge) {
      y.current = ge;
    }), L.id = m.menuId, L.role = "listbox", L["aria-labelledby"] = se && se["aria-label"] ? void 0 : "" + m.labelId, L.onMouseLeave = ae(Z,
    function() {
      c({
        type: jp
      });
    }), L), se);
  }, [c, _, m]), D = A(function(F) {
    var B, L, W = F === void 0 ? {} : F, Z = W.item, re = W.index, J = W.refKey, pe = J === void 0 ? "ref" : J, se = W.ref, ue = W.onMouseMove,
    le = W.onMouseDown, xe = W.onClick;
    W.onPress;
    var ge = W.disabled, ke = _e(W, Fy);
    ge !== void 0 && console.warn('Passing "disabled" as an argument to getItemProps is not supported anymore. Please use the isItemDisabled\
 prop from useCombobox.');
    var de = I.current, Ie = de.props, Te = de.state, De = pi(Z, re, Ie.items, "Pass either item or index to getItemProps!"), et = De[0], Pe = De[1],
    Ke = Ie.isItemDisabled(et, Pe), oo = "onClick", _o = xe, ct = /* @__PURE__ */ a(function() {
      T.isTouchEnd || Pe === Te.highlightedIndex || (k.current = !1, c({
        type: Vp,
        index: Pe,
        disabled: Ke
      }));
    }, "itemHandleMouseMove"), xt = /* @__PURE__ */ a(function() {
      c({
        type: Bi,
        index: Pe
      });
    }, "itemHandleClick"), pt = /* @__PURE__ */ a(function(Md) {
      return Md.preventDefault();
    }, "itemHandleMouseDown");
    return U((B = {}, B[pe] = Ze(se, function(Ue) {
      Ue && (f.current[m.getItemId(Pe)] = Ue);
    }), B["aria-disabled"] = Ke, B["aria-selected"] = "" + (Pe === Te.highlightedIndex), B.id = m.getItemId(Pe), B.role = "option", B), !Ke &&
    (L = {}, L[oo] = ae(_o, xt), L), {
      onMouseMove: ae(ue, ct),
      onMouseDown: ae(le, pt)
    }, ke);
  }, [c, m, I, T, k]), M = A(function(F) {
    var B, L = F === void 0 ? {} : F, W = L.onClick;
    L.onPress;
    var Z = L.refKey, re = Z === void 0 ? "ref" : Z, J = L.ref, pe = _e(L, By), se = I.current.state, ue = /* @__PURE__ */ a(function() {
      c({
        type: $p
      });
    }, "toggleButtonHandleClick");
    return U((B = {}, B[re] = Ze(J, function(le) {
      S.current = le;
    }), B["aria-controls"] = m.menuId, B["aria-expanded"] = se.isOpen, B.id = m.toggleButtonId, B.tabIndex = -1, B), !pe.disabled && U({}, {
      onClick: ae(W, ue)
    }), pe);
  }, [c, I, m]), N = A(function(F, B) {
    var L, W = F === void 0 ? {} : F, Z = W.onKeyDown, re = W.onChange, J = W.onInput, pe = W.onBlur;
    W.onChangeText;
    var se = W.onClick, ue = W.refKey, le = ue === void 0 ? "ref" : ue, xe = W.ref, ge = _e(W, Hy), ke = B === void 0 ? {} : B, de = ke.suppressRefError,
    Ie = de === void 0 ? !1 : de;
    _("getInputProps", Ie, le, b);
    var Te = I.current.state, De = /* @__PURE__ */ a(function(pt) {
      var Ue = to(pt);
      Ue && C[Ue] && C[Ue](pt);
    }, "inputHandleKeyDown"), et = /* @__PURE__ */ a(function(pt) {
      c({
        type: Ni,
        inputValue: pt.target.value
      });
    }, "inputHandleChange"), Pe = /* @__PURE__ */ a(function(pt) {
      if (n != null && n.document && Te.isOpen && !T.isMouseDown) {
        var Ue = pt.relatedTarget === null && n.document.activeElement !== n.document.body;
        c({
          type: Yr,
          selectItem: !Ue
        });
      }
    }, "inputHandleBlur"), Ke = /* @__PURE__ */ a(function() {
      c({
        type: Fi
      });
    }, "inputHandleClick"), oo = "onChange", _o = {};
    if (!ge.disabled) {
      var ct;
      _o = (ct = {}, ct[oo] = ae(re, J, et), ct.onKeyDown = ae(Z, De), ct.onBlur = ae(pe, Pe), ct.onClick = ae(se, Ke), ct);
    }
    return U((L = {}, L[le] = Ze(xe, function(xt) {
      b.current = xt;
    }), L["aria-activedescendant"] = Te.isOpen && Te.highlightedIndex > -1 ? m.getItemId(Te.highlightedIndex) : "", L["aria-autocomplete"] =
    "list", L["aria-controls"] = m.menuId, L["aria-expanded"] = Te.isOpen, L["aria-labelledby"] = ge && ge["aria-label"] ? void 0 : m.labelId,
    L.autoComplete = "off", L.id = m.inputId, L.role = "combobox", L.value = Te.inputValue, L), _o, ge);
  }, [c, m, n, C, I, T, _]), Y = A(function() {
    c({
      type: Kp
    });
  }, [c]), j = A(function() {
    c({
      type: qp
    });
  }, [c]), Q = A(function() {
    c({
      type: Up
    });
  }, [c]), H = A(function(F) {
    c({
      type: Gp,
      highlightedIndex: F
    });
  }, [c]), V = A(function(F) {
    c({
      type: Hi,
      selectedItem: F
    });
  }, [c]), z = A(function(F) {
    c({
      type: Yp,
      inputValue: F
    });
  }, [c]), te = A(function() {
    c({
      type: Qp
    });
  }, [c]);
  return {
    // prop getters.
    getItemProps: D,
    getLabelProps: O,
    getMenuProps: P,
    getInputProps: N,
    getToggleButtonProps: M,
    // actions.
    toggleMenu: Y,
    openMenu: Q,
    closeMenu: j,
    setHighlightedIndex: H,
    setInputValue: z,
    selectItem: V,
    reset: te,
    // state.
    highlightedIndex: d,
    isOpen: p,
    selectedItem: g,
    inputValue: h
  };
}
a(Zp, "useCombobox");
var Jp = {
  activeIndex: -1,
  selectedItems: []
};
function tp(e, t) {
  return Ht(e, t, Jp);
}
a(tp, "getInitialValue");
function op(e, t) {
  return He(e, t, Jp);
}
a(op, "getDefaultValue");
function zy(e) {
  var t = tp(e, "activeIndex"), o = tp(e, "selectedItems");
  return {
    activeIndex: t,
    selectedItems: o
  };
}
a(zy, "getInitialState");
function rp(e) {
  if (e.shiftKey || e.metaKey || e.ctrlKey || e.altKey)
    return !1;
  var t = e.target;
  return !(t instanceof HTMLInputElement && // if element is a text input
  t.value !== "" && // and we have text in it
  // and cursor is either not at the start or is currently highlighting text.
  (t.selectionStart !== 0 || t.selectionEnd !== 0));
}
a(rp, "isKeyDownOperationPermitted");
function Ry(e, t) {
  return e.selectedItems === t.selectedItems && e.activeIndex === t.activeIndex;
}
a(Ry, "isStateEqual");
var qL = {
  stateReducer: jr.stateReducer,
  itemToKey: jr.itemToKey,
  environment: jr.environment,
  selectedItems: G.default.array,
  initialSelectedItems: G.default.array,
  defaultSelectedItems: G.default.array,
  getA11yStatusMessage: G.default.func,
  activeIndex: G.default.number,
  initialActiveIndex: G.default.number,
  defaultActiveIndex: G.default.number,
  onActiveIndexChange: G.default.func,
  onSelectedItemsChange: G.default.func,
  keyNavigationNext: G.default.string,
  keyNavigationPrevious: G.default.string
}, Wy = {
  itemToKey: wo.itemToKey,
  stateReducer: wo.stateReducer,
  environment: wo.environment,
  keyNavigationNext: "ArrowRight",
  keyNavigationPrevious: "ArrowLeft"
}, jy = Fe, Ri = 0, Wi = 1, ji = 2, Vi = 3, $i = 4, Ki = 5, Ui = 6, qi = 7, Gi = 8, Yi = 9, Qi = 10, Xi = 11, Zi = 12, Vy = /* @__PURE__ */ Object.
freeze({
  __proto__: null,
  SelectedItemClick: Ri,
  SelectedItemKeyDownDelete: Wi,
  SelectedItemKeyDownBackspace: ji,
  SelectedItemKeyDownNavigationNext: Vi,
  SelectedItemKeyDownNavigationPrevious: $i,
  DropdownKeyDownNavigationPrevious: Ki,
  DropdownKeyDownBackspace: Ui,
  DropdownClick: qi,
  FunctionAddSelectedItem: Gi,
  FunctionRemoveSelectedItem: Yi,
  FunctionSetSelectedItems: Qi,
  FunctionSetActiveIndex: Xi,
  FunctionReset: Zi
});
function $y(e, t) {
  var o = t.type, i = t.index, n = t.props, r = t.selectedItem, l = e.activeIndex, u = e.selectedItems, c;
  switch (o) {
    case Ri:
      c = {
        activeIndex: i
      };
      break;
    case $i:
      c = {
        activeIndex: l - 1 < 0 ? 0 : l - 1
      };
      break;
    case Vi:
      c = {
        activeIndex: l + 1 >= u.length ? -1 : l + 1
      };
      break;
    case ji:
    case Wi: {
      if (l < 0)
        break;
      var p = l;
      u.length === 1 ? p = -1 : l === u.length - 1 && (p = u.length - 2), c = U({
        selectedItems: [].concat(u.slice(0, l), u.slice(l + 1))
      }, {
        activeIndex: p
      });
      break;
    }
    case Ki:
      c = {
        activeIndex: u.length - 1
      };
      break;
    case Ui:
      c = {
        selectedItems: u.slice(0, u.length - 1)
      };
      break;
    case Gi:
      c = {
        selectedItems: [].concat(u, [r])
      };
      break;
    case qi:
      c = {
        activeIndex: -1
      };
      break;
    case Yi: {
      var d = l, g = u.findIndex(function(f) {
        return n.itemToKey(f) === n.itemToKey(r);
      });
      if (g < 0)
        break;
      u.length === 1 ? d = -1 : g === u.length - 1 && (d = u.length - 2), c = {
        selectedItems: [].concat(u.slice(0, g), u.slice(g + 1)),
        activeIndex: d
      };
      break;
    }
    case Qi: {
      var h = t.selectedItems;
      c = {
        selectedItems: h
      };
      break;
    }
    case Xi: {
      var y = t.activeIndex;
      c = {
        activeIndex: y
      };
      break;
    }
    case Zi:
      c = {
        activeIndex: op(n, "activeIndex"),
        selectedItems: op(n, "selectedItems")
      };
      break;
    default:
      throw new Error("Reducer called without proper action type.");
  }
  return U({}, e, c);
}
a($y, "downshiftMultipleSelectionReducer");
var Ky = ["refKey", "ref", "onClick", "onKeyDown", "selectedItem", "index"], Uy = ["refKey", "ref", "onKeyDown", "onClick", "preventKeyActio\
n"];
ed.stateChangeTypes = Vy;
function ed(e) {
  e === void 0 && (e = {}), jy(e, ed);
  var t = U({}, Wy, e), o = t.getA11yStatusMessage, i = t.environment, n = t.keyNavigationNext, r = t.keyNavigationPrevious, l = Tp($y, t, zy,
  Ry), u = l[0], c = l[1], p = u.activeIndex, d = u.selectedItems, g = Zr(), h = q(null), y = q();
  y.current = [];
  var f = Xr({
    state: u,
    props: t
  });
  mi(o, u, [p, d], i), R(function() {
    g || (p === -1 && h.current ? h.current.focus() : y.current[p] && y.current[p].focus());
  }, [p]), hi({
    props: t,
    state: u
  });
  var b = fi("getDropdownProps"), S = K(function() {
    var C;
    return C = {}, C[r] = function() {
      c({
        type: $i
      });
    }, C[n] = function() {
      c({
        type: Vi
      });
    }, C.Delete = /* @__PURE__ */ a(function() {
      c({
        type: Wi
      });
    }, "Delete"), C.Backspace = /* @__PURE__ */ a(function() {
      c({
        type: ji
      });
    }, "Backspace"), C;
  }, [c, n, r]), E = K(function() {
    var C;
    return C = {}, C[r] = function(O) {
      rp(O) && c({
        type: Ki
      });
    }, C.Backspace = /* @__PURE__ */ a(function(P) {
      rp(P) && c({
        type: Ui
      });
    }, "Backspace"), C;
  }, [c, r]), m = A(function(C) {
    var O, P = C === void 0 ? {} : C, D = P.refKey, M = D === void 0 ? "ref" : D, N = P.ref, Y = P.onClick, j = P.onKeyDown, Q = P.selectedItem,
    H = P.index, V = _e(P, Ky), z = f.current.state, te = pi(Q, H, z.selectedItems, "Pass either item or index to getSelectedItemProps!"), F = te[1],
    B = F > -1 && F === z.activeIndex, L = /* @__PURE__ */ a(function() {
      c({
        type: Ri,
        index: F
      });
    }, "selectedItemHandleClick"), W = /* @__PURE__ */ a(function(re) {
      var J = to(re);
      J && S[J] && S[J](re);
    }, "selectedItemHandleKeyDown");
    return U((O = {}, O[M] = Ze(N, function(Z) {
      Z && y.current.push(Z);
    }), O.tabIndex = B ? 0 : -1, O.onClick = ae(Y, L), O.onKeyDown = ae(j, W), O), V);
  }, [c, f, S]), v = A(function(C, O) {
    var P, D = C === void 0 ? {} : C, M = D.refKey, N = M === void 0 ? "ref" : M, Y = D.ref, j = D.onKeyDown, Q = D.onClick, H = D.preventKeyAction,
    V = H === void 0 ? !1 : H, z = _e(D, Uy), te = O === void 0 ? {} : O, F = te.suppressRefError, B = F === void 0 ? !1 : F;
    b("getDropdownProps", B, N, h);
    var L = /* @__PURE__ */ a(function(re) {
      var J = to(re);
      J && E[J] && E[J](re);
    }, "dropdownHandleKeyDown"), W = /* @__PURE__ */ a(function() {
      c({
        type: qi
      });
    }, "dropdownHandleClick");
    return U((P = {}, P[N] = Ze(Y, function(Z) {
      Z && (h.current = Z);
    }), P), !V && {
      onKeyDown: ae(j, L),
      onClick: ae(Q, W)
    }, z);
  }, [c, E, b]), I = A(function(C) {
    c({
      type: Gi,
      selectedItem: C
    });
  }, [c]), w = A(function(C) {
    c({
      type: Yi,
      selectedItem: C
    });
  }, [c]), k = A(function(C) {
    c({
      type: Qi,
      selectedItems: C
    });
  }, [c]), T = A(function(C) {
    c({
      type: Xi,
      activeIndex: C
    });
  }, [c]), _ = A(function() {
    c({
      type: Zi
    });
  }, [c]);
  return {
    getSelectedItemProps: m,
    getDropdownProps: v,
    addSelectedItem: I,
    removeSelectedItem: w,
    setSelectedItems: k,
    setActiveIndex: T,
    reset: _,
    selectedItems: d,
    activeIndex: p
  };
}
a(ed, "useMultipleSelection");

// src/manager/components/sidebar/Search.tsx
var od = Be(td(), 1);

// src/manager/components/sidebar/types.ts
function To(e) {
  return !!(e && e.showAll);
}
a(To, "isExpandType");
function es(e) {
  return !!(e && e.item);
}
a(es, "isSearchResult");

// src/manager/components/sidebar/Search.tsx
var { document: qy } = ie, ts = 50, Gy = {
  shouldSort: !0,
  tokenize: !0,
  findAllMatches: !0,
  includeScore: !0,
  includeMatches: !0,
  threshold: 0.2,
  location: 0,
  distance: 100,
  maxPatternLength: 32,
  minMatchCharLength: 1,
  keys: [
    { name: "name", weight: 0.7 },
    { name: "path", weight: 0.3 }
  ]
}, Yy = x.div({
  display: "flex",
  flexDirection: "row",
  columnGap: 6
}), Qy = x.label({
  position: "absolute",
  left: -1e4,
  top: "auto",
  width: 1,
  height: 1,
  overflow: "hidden"
}), Xy = x.div(({ theme: e }) => ({
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  padding: 2,
  flexGrow: 1,
  height: 32,
  width: "100%",
  boxShadow: `${e.button.border} 0 0 0 1px inset`,
  borderRadius: e.appBorderRadius + 2,
  "&:has(input:focus), &:has(input:active)": {
    boxShadow: `${e.color.secondary} 0 0 0 1px inset`,
    background: e.background.app
  }
})), Zy = x.div(({ theme: e, onClick: t }) => ({
  cursor: t ? "pointer" : "default",
  flex: "0 0 28px",
  height: "100%",
  pointerEvents: t ? "auto" : "none",
  color: e.textMutedColor,
  display: "flex",
  alignItems: "center",
  justifyContent: "center"
})), Jy = x.input(({ theme: e }) => ({
  appearance: "none",
  height: 28,
  width: "100%",
  padding: 0,
  border: 0,
  background: "transparent",
  fontSize: `${e.typography.size.s1 + 1}px`,
  fontFamily: "inherit",
  transition: "all 150ms",
  color: e.color.defaultText,
  outline: 0,
  "&::placeholder": {
    color: e.textMutedColor,
    opacity: 1
  },
  "&:valid ~ code, &:focus ~ code": {
    display: "none"
  },
  "&:invalid ~ svg": {
    display: "none"
  },
  "&:valid ~ svg": {
    display: "block"
  },
  "&::-ms-clear": {
    display: "none"
  },
  "&::-webkit-search-decoration, &::-webkit-search-cancel-button, &::-webkit-search-results-button, &::-webkit-search-results-decoration": {
    display: "none"
  }
})), eb = x.code(({ theme: e }) => ({
  margin: 5,
  marginTop: 6,
  height: 16,
  lineHeight: "16px",
  textAlign: "center",
  fontSize: "11px",
  color: e.base === "light" ? e.color.dark : e.textMutedColor,
  userSelect: "none",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  gap: 4,
  flexShrink: 0
})), tb = x.span({
  fontSize: "14px"
}), ob = x.div({
  display: "flex",
  alignItems: "center",
  gap: 2
}), rb = x.div({ outline: 0 }), rd = s.memo(/* @__PURE__ */ a(function({
  children: t,
  dataset: o,
  enableShortcuts: i = !0,
  getLastViewed: n,
  initialQuery: r = "",
  searchBarContent: l,
  searchFieldContent: u
}) {
  let c = ne(), p = q(null), [d, g] = $("Find components"), [h, y] = $(!1), f = c ? Ye(c.getShortcutKeys().search) : "/", b = A(() => {
    let w = o.entries.reduce((k, [T, { index: _, status: C }]) => {
      let O = Er(_ || {}, C);
      return _ && k.push(
        ...Object.values(_).map((P) => {
          let D = C && C[P.id] ? Io(Object.values(C[P.id] || {}).map((M) => M.status)) : null;
          return {
            ...ti(P, o.hash[T]),
            status: D || O[P.id] || null
          };
        })
      ), k;
    }, []);
    return new od.default(w, Gy);
  }, [o]), S = A(
    (w) => {
      let k = b();
      if (!w)
        return [];
      let T = [], _ = /* @__PURE__ */ new Set(), C = k.search(w).filter(({ item: O }) => !(O.type === "component" || O.type === "docs" || O.
      type === "story") || // @ts-expect-error (non strict)
      _.has(O.parent) ? !1 : (_.add(O.id), !0));
      return C.length && (T = C.slice(0, h ? 1e3 : ts), C.length > ts && !h && T.push({
        showAll: /* @__PURE__ */ a(() => y(!0), "showAll"),
        totalCount: C.length,
        moreCount: C.length - ts
      })), T;
    },
    [h, b]
  ), E = A(
    (w) => {
      if (es(w)) {
        let { id: k, refId: T } = w.item;
        c?.selectStory(k, void 0, { ref: T !== it && T }), p.current.blur(), y(!1);
        return;
      }
      To(w) && w.showAll();
    },
    [c]
  ), m = A((w, k) => {
    y(!1);
  }, []), v = A(
    (w, k) => {
      switch (k.type) {
        case Rt.stateChangeTypes.blurInput:
          return {
            ...k,
            // Prevent clearing the input on blur
            inputValue: w.inputValue,
            // Return to the tree view after selecting an item
            isOpen: w.inputValue && !w.selectedItem
          };
        case Rt.stateChangeTypes.mouseUp:
          return w;
        case Rt.stateChangeTypes.keyDownEscape:
          return w.inputValue ? { ...k, inputValue: "", isOpen: !0, selectedItem: null } : { ...k, isOpen: !1, selectedItem: null };
        case Rt.stateChangeTypes.clickItem:
        case Rt.stateChangeTypes.keyDownEnter:
          return es(k.selectedItem) ? { ...k, inputValue: w.inputValue } : To(k.selectedItem) ? w : k;
        default:
          return k;
      }
    },
    []
  ), { isMobile: I } = he();
  return (
    // @ts-expect-error (non strict)
    /* @__PURE__ */ s.createElement(
      Rt,
      {
        initialInputValue: r,
        stateReducer: v,
        itemToString: (w) => w?.item?.name || "",
        scrollIntoView: (w) => Dt(w),
        onSelect: E,
        onInputValueChange: m
      },
      ({
        isOpen: w,
        openMenu: k,
        closeMenu: T,
        inputValue: _,
        clearSelection: C,
        getInputProps: O,
        getItemProps: P,
        getLabelProps: D,
        getMenuProps: M,
        getRootProps: N,
        highlightedIndex: Y
      }) => {
        let j = _ ? _.trim() : "", Q = j ? S(j) : [], H = !j && n();
        H && H.length && (Q = H.reduce((F, { storyId: B, refId: L }) => {
          let W = o.hash[L];
          if (W && W.index && W.index[B]) {
            let Z = W.index[B], re = Z.type === "story" ? W.index[Z.parent] : Z;
            F.some((J) => J.item.refId === L && J.item.id === re.id) || F.push({ item: ti(re, o.hash[L]), matches: [], score: 0 });
          }
          return F;
        }, []));
        let V = "storybook-explorer-searchfield", z = O({
          id: V,
          ref: p,
          required: !0,
          type: "search",
          placeholder: d,
          onFocus: /* @__PURE__ */ a(() => {
            k(), g("Type to find...");
          }, "onFocus"),
          onBlur: /* @__PURE__ */ a(() => g("Find components"), "onBlur"),
          onKeyDown: /* @__PURE__ */ a((F) => {
            F.key === "Escape" && _.length === 0 && p.current.blur();
          }, "onKeyDown")
        }), te = D({
          htmlFor: V
        });
        return /* @__PURE__ */ s.createElement(s.Fragment, null, /* @__PURE__ */ s.createElement(Qy, { ...te }, "Search for components"), /* @__PURE__ */ s.
        createElement(Yy, null, /* @__PURE__ */ s.createElement(
          Xy,
          {
            ...N({ refKey: "" }, { suppressRefError: !0 }),
            className: "search-field"
          },
          /* @__PURE__ */ s.createElement(Zy, null, /* @__PURE__ */ s.createElement(Fo, null)),
          /* @__PURE__ */ s.createElement(Jy, { ...z }),
          !I && i && !w && /* @__PURE__ */ s.createElement(eb, null, f === "\u2318 K" ? /* @__PURE__ */ s.createElement(s.Fragment, null, /* @__PURE__ */ s.
          createElement(tb, null, "\u2318"), "K") : f),
          /* @__PURE__ */ s.createElement(ob, null, w && /* @__PURE__ */ s.createElement(ee, { onClick: () => C() }, /* @__PURE__ */ s.createElement(
          qe, null)), u)
        ), l), /* @__PURE__ */ s.createElement(rb, { tabIndex: 0, id: "storybook-explorer-menu" }, t({
          query: j,
          results: Q,
          isBrowsing: !w && qy.activeElement !== p.current,
          closeMenu: T,
          getMenuProps: M,
          getItemProps: P,
          highlightedIndex: Y
        })));
      }
    )
  );
}, "Search"));

// src/manager/components/sidebar/SearchResults.tsx
var { document: nd } = ie, nb = x.ol({
  listStyle: "none",
  margin: 0,
  padding: 0
}), ib = x.li(({ theme: e, isHighlighted: t }) => ({
  width: "100%",
  border: "none",
  cursor: "pointer",
  display: "flex",
  alignItems: "start",
  justifyContent: "space-between",
  textAlign: "left",
  color: "inherit",
  fontSize: `${e.typography.size.s2}px`,
  background: t ? e.background.hoverable : "transparent",
  minHeight: 28,
  borderRadius: 4,
  gap: 6,
  paddingTop: 7,
  paddingBottom: 7,
  paddingLeft: 8,
  paddingRight: 8,
  "&:hover, &:focus": {
    background: Ee(0.93, e.color.secondary),
    outline: "none"
  }
})), sb = x.div({
  marginTop: 2
}), ab = x.div({
  flex: 1,
  display: "flex",
  flexDirection: "column"
}), lb = x.div(({ theme: e }) => ({
  marginTop: 20,
  textAlign: "center",
  fontSize: `${e.typography.size.s2}px`,
  lineHeight: "18px",
  color: e.color.defaultText,
  small: {
    color: e.textMutedColor,
    fontSize: `${e.typography.size.s1}px`
  }
})), ub = x.mark(({ theme: e }) => ({
  background: "transparent",
  color: e.color.secondary
})), cb = x.div({
  marginTop: 8
}), pb = x.div(({ theme: e }) => ({
  display: "flex",
  justifyContent: "space-between",
  fontSize: `${e.typography.size.s1 - 1}px`,
  fontWeight: e.typography.weight.bold,
  minHeight: 28,
  letterSpacing: "0.16em",
  textTransform: "uppercase",
  color: e.textMutedColor,
  marginTop: 16,
  marginBottom: 4,
  alignItems: "center",
  ".search-result-recentlyOpened-clear": {
    visibility: "hidden"
  },
  "&:hover": {
    ".search-result-recentlyOpened-clear": {
      visibility: "visible"
    }
  }
})), id = s.memo(/* @__PURE__ */ a(function({
  children: t,
  match: o
}) {
  if (!o)
    return t;
  let { value: i, indices: n } = o, { nodes: r } = n.reduce(
    ({ cursor: l, nodes: u }, [c, p], d, { length: g }) => (u.push(/* @__PURE__ */ s.createElement("span", { key: `${d}-1` }, i.slice(l, c))),
    u.push(/* @__PURE__ */ s.createElement(ub, { key: `${d}-2` }, i.slice(c, p + 1))), d === g - 1 && u.push(/* @__PURE__ */ s.createElement(
    "span", { key: `${d}-3` }, i.slice(p + 1))), { cursor: p + 1, nodes: u }),
    { cursor: 0, nodes: [] }
  );
  return /* @__PURE__ */ s.createElement("span", null, r);
}, "Highlight")), db = x.div(({ theme: e }) => ({
  display: "grid",
  justifyContent: "start",
  gridAutoColumns: "auto",
  gridAutoFlow: "column",
  "& > span": {
    display: "block",
    whiteSpace: "nowrap",
    overflow: "hidden",
    textOverflow: "ellipsis"
  }
})), fb = x.div(({ theme: e }) => ({
  display: "grid",
  justifyContent: "start",
  gridAutoColumns: "auto",
  gridAutoFlow: "column",
  fontSize: `${e.typography.size.s1 - 1}px`,
  "& > span": {
    display: "block",
    whiteSpace: "nowrap",
    overflow: "hidden",
    textOverflow: "ellipsis"
  },
  "& > span + span": {
    "&:before": {
      content: "' / '"
    }
  }
})), mb = s.memo(/* @__PURE__ */ a(function({ item: t, matches: o, onClick: i, ...n }) {
  let r = A(
    (d) => {
      d.preventDefault(), i?.(d);
    },
    [i]
  ), l = ne();
  R(() => {
    l && n.isHighlighted && t.type === "component" && l.emit(It, { ids: [t.children[0]] }, { options: { target: t.refId } });
  }, [n.isHighlighted, t]);
  let u = o.find((d) => d.key === "name"), c = o.filter((d) => d.key === "path"), [p] = t.status ? xo[t.status] : [];
  return /* @__PURE__ */ s.createElement(ib, { ...n, onClick: r }, /* @__PURE__ */ s.createElement(sb, null, t.type === "component" && /* @__PURE__ */ s.
  createElement(yt, { viewBox: "0 0 14 14", width: "14", height: "14", type: "component" }, /* @__PURE__ */ s.createElement(Le, { type: "com\
ponent" })), t.type === "story" && /* @__PURE__ */ s.createElement(yt, { viewBox: "0 0 14 14", width: "14", height: "14", type: "story" }, /* @__PURE__ */ s.
  createElement(Le, { type: "story" })), !(t.type === "component" || t.type === "story") && /* @__PURE__ */ s.createElement(yt, { viewBox: "\
0 0 14 14", width: "14", height: "14", type: "document" }, /* @__PURE__ */ s.createElement(Le, { type: "document" }))), /* @__PURE__ */ s.createElement(
  ab, { className: "search-result-item--label" }, /* @__PURE__ */ s.createElement(db, null, /* @__PURE__ */ s.createElement(id, { match: u },
  t.name)), /* @__PURE__ */ s.createElement(fb, null, t.path.map((d, g) => /* @__PURE__ */ s.createElement("span", { key: g }, /* @__PURE__ */ s.
  createElement(id, { match: c.find((h) => h.arrayIndex === g) }, d))))), t.status ? /* @__PURE__ */ s.createElement(yc, { status: t.status },
  p) : null);
}, "Result")), sd = s.memo(/* @__PURE__ */ a(function({
  query: t,
  results: o,
  closeMenu: i,
  getMenuProps: n,
  getItemProps: r,
  highlightedIndex: l,
  isLoading: u = !1,
  enableShortcuts: c = !0,
  clearLastViewed: p
}) {
  let d = ne();
  R(() => {
    let y = /* @__PURE__ */ a((f) => {
      if (!(!c || u || f.repeat) && bt(!1, f) && Ve("Escape", f)) {
        if (f.target?.id === "storybook-explorer-searchfield")
          return;
        f.preventDefault(), i();
      }
    }, "handleEscape");
    return nd.addEventListener("keydown", y), () => nd.removeEventListener("keydown", y);
  }, [i, c, u]);
  let g = A((y) => {
    if (!d)
      return;
    let f = y.currentTarget, b = f.getAttribute("data-id"), S = f.getAttribute("data-refid"), E = d.resolveStory(b, S === "storybook_interna\
l" ? void 0 : S);
    E?.type === "component" && d.emit(It, {
      // @ts-expect-error (TODO)
      ids: [E.isLeaf ? E.id : E.children[0]],
      options: { target: S }
    });
  }, []), h = /* @__PURE__ */ a(() => {
    p(), i();
  }, "handleClearLastViewed");
  return /* @__PURE__ */ s.createElement(nb, { ...n() }, o.length > 0 && !t && /* @__PURE__ */ s.createElement(pb, { className: "search-resu\
lt-recentlyOpened" }, "Recently opened", /* @__PURE__ */ s.createElement(
    ee,
    {
      className: "search-result-recentlyOpened-clear",
      onClick: h
    },
    /* @__PURE__ */ s.createElement(Vs, null)
  )), o.length === 0 && t && /* @__PURE__ */ s.createElement("li", null, /* @__PURE__ */ s.createElement(lb, null, /* @__PURE__ */ s.createElement(
  "strong", null, "No components found"), /* @__PURE__ */ s.createElement("br", null), /* @__PURE__ */ s.createElement("small", null, "Find \
components by name or path."))), o.map((y, f) => {
    if (To(y))
      return /* @__PURE__ */ s.createElement(cb, { key: "search-result-expand" }, /* @__PURE__ */ s.createElement(
        fe,
        {
          ...y,
          ...r({ key: f, index: f, item: y }),
          size: "small"
        },
        "Show ",
        y.moreCount,
        " more results"
      ));
    let { item: b } = y, S = `${b.refId}::${b.id}`;
    return /* @__PURE__ */ s.createElement(
      mb,
      {
        key: b.id,
        ...y,
        ...r({ key: S, index: f, item: y }),
        isHighlighted: l === f,
        "data-id": y.item.id,
        "data-refid": y.item.refId,
        onMouseOver: g,
        className: "search-result-item"
      }
    );
  }));
}, "SearchResults"));

// src/manager/components/sidebar/LegacyRender.tsx
var hb = x.div({
  display: "flex",
  justifyContent: "space-between",
  padding: "8px 2px"
}), gb = x.div({
  display: "flex",
  flexDirection: "column",
  marginLeft: 6
}), yb = x.div({
  display: "flex",
  gap: 6
}), bb = x.div(({ crashed: e, theme: t }) => ({
  fontSize: t.typography.size.s1,
  fontWeight: e ? "bold" : "normal",
  color: e ? t.color.negativeText : t.color.defaultText
})), vb = x.div(({ theme: e }) => ({
  fontSize: e.typography.size.s1,
  color: e.textMutedColor
})), xb = x(Ua)({
  margin: 2
}), Ib = x(Rs)({
  width: 10
}), ad = /* @__PURE__ */ a(({ ...e }) => {
  let t = e.description, o = e.title, i = ne();
  return /* @__PURE__ */ s.createElement(hb, null, /* @__PURE__ */ s.createElement(gb, null, /* @__PURE__ */ s.createElement(bb, { crashed: e.
  crashed, id: "testing-module-title" }, /* @__PURE__ */ s.createElement(o, { ...e })), /* @__PURE__ */ s.createElement(vb, { id: "testing-m\
odule-description" }, /* @__PURE__ */ s.createElement(t, { ...e }))), /* @__PURE__ */ s.createElement(yb, null, e.watchable && /* @__PURE__ */ s.
  createElement(
    ye,
    {
      hasChrome: !1,
      trigger: "hover",
      tooltip: /* @__PURE__ */ s.createElement(
        je,
        {
          note: `${e.watching ? "Disable" : "Enable"} watch mode for ${e.name}`
        }
      )
    },
    /* @__PURE__ */ s.createElement(
      fe,
      {
        "aria-label": `${e.watching ? "Disable" : "Enable"} watch mode for ${e.name}`,
        variant: "ghost",
        padding: "small",
        active: e.watching,
        onClick: () => i.setTestProviderWatchMode(e.id, !e.watching),
        disabled: e.crashed || e.running
      },
      /* @__PURE__ */ s.createElement(Do, null)
    )
  ), e.runnable && /* @__PURE__ */ s.createElement(s.Fragment, null, e.running && e.cancellable ? /* @__PURE__ */ s.createElement(
    ye,
    {
      hasChrome: !1,
      trigger: "hover",
      tooltip: /* @__PURE__ */ s.createElement(je, { note: `Stop ${e.name}` })
    },
    /* @__PURE__ */ s.createElement(
      fe,
      {
        "aria-label": `Stop ${e.name}`,
        variant: "ghost",
        padding: "none",
        onClick: () => i.cancelTestProvider(e.id),
        disabled: e.cancelling
      },
      /* @__PURE__ */ s.createElement(
        xb,
        {
          percentage: e.progress?.percentageCompleted ?? e.details?.buildProgressPercentage
        },
        /* @__PURE__ */ s.createElement(Ib, null)
      )
    )
  ) : /* @__PURE__ */ s.createElement(
    ye,
    {
      hasChrome: !1,
      trigger: "hover",
      tooltip: /* @__PURE__ */ s.createElement(je, { note: `Start ${e.name}` })
    },
    /* @__PURE__ */ s.createElement(
      fe,
      {
        "aria-label": `Start ${e.name}`,
        variant: "ghost",
        padding: "small",
        onClick: () => i.runTestProvider(e.id),
        disabled: e.crashed || e.running
      },
      /* @__PURE__ */ s.createElement(Ns, null)
    )
  ))));
}, "LegacyRender");

// src/manager/components/sidebar/TestingModule.tsx
var os = 500, Sb = St({
  "0%": { transform: "rotate(0deg)" },
  "10%": { transform: "rotate(10deg)" },
  "40%": { transform: "rotate(170deg)" },
  "50%": { transform: "rotate(180deg)" },
  "60%": { transform: "rotate(190deg)" },
  "90%": { transform: "rotate(350deg)" },
  "100%": { transform: "rotate(360deg)" }
}), wb = x.div(({ crashed: e, failed: t, running: o, theme: i, updated: n }) => ({
  position: "relative",
  lineHeight: "20px",
  width: "100%",
  padding: 1,
  overflow: "hidden",
  backgroundColor: `var(--sb-sidebar-bottom-card-background, ${i.background.content})`,
  borderRadius: `var(--sb-sidebar-bottom-card-border-radius, ${i.appBorderRadius + 1}px)`,
  boxShadow: `inset 0 0 0 1px ${e && !o ? i.color.negative : n ? i.color.positive : i.appBorderColor}, var(--sb-sidebar-bottom-card-box-shad\
ow, 0 1px 2px 0 rgba(0, 0, 0, 0.05), 0px -5px 20px 10px ${i.background.app})`,
  transition: "box-shadow 1s",
  "&:after": {
    content: '""',
    display: o ? "block" : "none",
    position: "absolute",
    left: "50%",
    top: "50%",
    marginLeft: "calc(max(100vw, 100vh) * -0.5)",
    marginTop: "calc(max(100vw, 100vh) * -0.5)",
    height: "max(100vw, 100vh)",
    width: "max(100vw, 100vh)",
    animation: `${Sb} 3s linear infinite`,
    background: t ? (
      // Hardcoded colors to prevent themes from messing with them (orange+gold, secondary+seafoam)
      "conic-gradient(transparent 90deg, #FC521F 150deg, #FFAE00 210deg, transparent 270deg)"
    ) : "conic-gradient(transparent 90deg, #029CFD 150deg, #37D5D3 210deg, transparent 270deg)",
    opacity: 1,
    willChange: "auto"
  }
})), Eb = x.div(({ theme: e }) => ({
  position: "relative",
  zIndex: 1,
  borderRadius: e.appBorderRadius,
  backgroundColor: e.background.content,
  "&:hover #testing-module-collapse-toggle": {
    opacity: 1
  }
})), Cb = x.div(({ theme: e }) => ({
  overflow: "hidden",
  willChange: "auto",
  boxShadow: `inset 0 -1px 0 ${e.appBorderColor}`
})), Tb = x.div({
  display: "flex",
  flexDirection: "column"
}), _b = x.div(({ onClick: e }) => ({
  display: "flex",
  width: "100%",
  cursor: e ? "pointer" : "default",
  userSelect: "none",
  alignItems: "center",
  justifyContent: "space-between",
  overflow: "hidden",
  padding: "6px"
})), kb = x.div({
  display: "flex",
  flexBasis: "100%",
  justifyContent: "flex-end",
  gap: 6
}), Ob = x(fe)({
  opacity: 0,
  transition: "opacity 250ms",
  willChange: "auto",
  "&:focus, &:hover": {
    opacity: 1
  }
}), ld = x(fe)(
  { minWidth: 28 },
  ({ active: e, status: t, theme: o }) => !e && (o.base === "light" ? {
    background: {
      negative: o.background.negative,
      warning: o.background.warning
    }[t],
    color: {
      negative: o.color.negativeText,
      warning: o.color.warningText
    }[t]
  } : {
    background: {
      negative: `${o.color.negative}22`,
      warning: `${o.color.warning}22`
    }[t],
    color: {
      negative: o.color.negative,
      warning: o.color.warning
    }[t]
  })
), Pb = x.div(({ theme: e }) => ({
  padding: 4,
  "&:not(:last-child)": {
    boxShadow: `inset 0 -1px 0 ${e.appBorderColor}`
  }
})), ud = /* @__PURE__ */ a(({
  testProviders: e,
  errorCount: t,
  errorsActive: o,
  setErrorsActive: i,
  warningCount: n,
  warningsActive: r,
  setWarningsActive: l
}) => {
  let u = ne(), c = q(null), p = q(null), [d, g] = $(os), [h, y] = $(!1), [f, b] = $(!0), [S, E] = $(!1);
  R(() => {
    if (p.current) {
      g(p.current?.getBoundingClientRect().height || os);
      let T = new ResizeObserver(() => {
        requestAnimationFrame(() => {
          if (p.current && !f) {
            let _ = p.current?.getBoundingClientRect().height || os;
            g(_);
          }
        });
      });
      return T.observe(p.current), () => T.disconnect();
    }
  }, [f]), R(() => {
    let T, _ = /* @__PURE__ */ a(() => {
      y(!0), T = setTimeout(y, 1e3, !1);
    }, "handler");
    return u.on(cn, _), () => {
      u.off(cn, _), clearTimeout(T);
    };
  }, [u]);
  let m = A((T) => {
    T.stopPropagation(), E(!0), b((_) => !_), c.current && clearTimeout(c.current), c.current = setTimeout(() => {
      E(!1);
    }, 250);
  }, []), v = e.some((T) => T.running), I = e.some((T) => T.crashed), w = e.some((T) => T.failed), k = e.length > 0;
  return !k && (!t || !n) ? null : /* @__PURE__ */ s.createElement(
    wb,
    {
      id: "storybook-testing-module",
      running: v,
      crashed: I,
      failed: w || t > 0,
      updated: h
    },
    /* @__PURE__ */ s.createElement(Eb, null, k && /* @__PURE__ */ s.createElement(
      Cb,
      {
        "data-testid": "collapse",
        style: {
          transition: S ? "max-height 250ms" : "max-height 0ms",
          display: k ? "block" : "none",
          maxHeight: f ? 0 : d
        }
      },
      /* @__PURE__ */ s.createElement(Tb, { ref: p }, e.map((T) => {
        let { render: _ } = T;
        return /* @__PURE__ */ s.createElement(Pb, { key: T.id, "data-module-id": T.id }, _ ? /* @__PURE__ */ s.createElement(_, { ...T }) :
        /* @__PURE__ */ s.createElement(ad, { ...T }));
      }))
    ), /* @__PURE__ */ s.createElement(_b, { ...k ? { onClick: m } : {} }, k && /* @__PURE__ */ s.createElement(
      fe,
      {
        variant: "ghost",
        padding: "small",
        onClick: (T) => {
          T.stopPropagation(), e.filter((_) => !_.running && _.runnable).forEach(({ id: _ }) => u.runTestProvider(_));
        },
        disabled: v
      },
      /* @__PURE__ */ s.createElement(Ls, null),
      v ? "Running..." : "Run tests"
    ), /* @__PURE__ */ s.createElement(kb, null, k && /* @__PURE__ */ s.createElement(
      ye,
      {
        hasChrome: !1,
        tooltip: /* @__PURE__ */ s.createElement(
          je,
          {
            note: f ? "Expand testing module" : "Collapse testing module"
          }
        ),
        trigger: "hover"
      },
      /* @__PURE__ */ s.createElement(
        Ob,
        {
          variant: "ghost",
          padding: "small",
          onClick: m,
          id: "testing-module-collapse-toggle",
          "aria-label": f ? "Expand testing module" : "Collapse testing module"
        },
        /* @__PURE__ */ s.createElement(
          xs,
          {
            style: {
              transform: f ? "none" : "rotate(180deg)",
              transition: "transform 250ms",
              willChange: "auto"
            }
          }
        )
      )
    ), t > 0 && /* @__PURE__ */ s.createElement(
      ye,
      {
        hasChrome: !1,
        tooltip: /* @__PURE__ */ s.createElement(je, { note: "Toggle errors" }),
        trigger: "hover"
      },
      /* @__PURE__ */ s.createElement(
        ld,
        {
          id: "errors-found-filter",
          variant: "ghost",
          padding: t < 10 ? "medium" : "small",
          status: "negative",
          active: o,
          onClick: (T) => {
            T.stopPropagation(), i(!o);
          },
          "aria-label": "Toggle errors"
        },
        t < 100 ? t : "99+"
      )
    ), n > 0 && /* @__PURE__ */ s.createElement(
      ye,
      {
        hasChrome: !1,
        tooltip: /* @__PURE__ */ s.createElement(je, { note: "Toggle warnings" }),
        trigger: "hover"
      },
      /* @__PURE__ */ s.createElement(
        ld,
        {
          id: "warnings-found-filter",
          variant: "ghost",
          padding: n < 10 ? "medium" : "small",
          status: "warning",
          active: r,
          onClick: (T) => {
            T.stopPropagation(), l(!r);
          },
          "aria-label": "Toggle warnings"
        },
        n < 100 ? n : "99+"
      )
    ))))
  );
}, "TestingModule");

// src/manager/components/sidebar/SidebarBottom.tsx
var Ab = "sidebar-bottom-spacer", Db = "sidebar-bottom-wrapper", Mb = /* @__PURE__ */ a(() => !0, "filterNone"), Lb = /* @__PURE__ */ a(({ status: e = {} }) => Object.
values(e).some((t) => t?.status === "warn"), "filterWarn"), Nb = /* @__PURE__ */ a(({ status: e = {} }) => Object.values(e).some((t) => t?.status ===
"error"), "filterError"), Fb = /* @__PURE__ */ a(({ status: e = {} }) => Object.values(e).some((t) => t?.status === "warn" || t?.status === "\
error"), "filterBoth"), Bb = /* @__PURE__ */ a((e = !1, t = !1) => e && t ? Fb : e ? Lb : t ? Nb : Mb, "getFilter"), Hb = x.div({
  pointerEvents: "none"
}), zb = x.div(({ theme: e }) => ({
  position: "absolute",
  bottom: 0,
  left: 0,
  right: 0,
  padding: "12px 0",
  margin: "0 12px",
  display: "flex",
  flexDirection: "column",
  gap: 12,
  color: e.color.defaultText,
  fontSize: e.typography.size.s1,
  overflow: "hidden",
  "&:empty": {
    display: "none"
  },
  // Integrators can use these to style their custom additions
  "--sb-sidebar-bottom-card-background": e.background.content,
  "--sb-sidebar-bottom-card-border": `1px solid ${e.appBorderColor}`,
  "--sb-sidebar-bottom-card-border-radius": `${e.appBorderRadius + 1}px`,
  "--sb-sidebar-bottom-card-box-shadow": `0 1px 2px 0 rgba(0, 0, 0, 0.05), 0px -5px 20px 10px ${e.background.app}`
})), Rb = /* @__PURE__ */ a(({
  api: e,
  notifications: t = [],
  status: o = {},
  isDevelopment: i
}) => {
  let n = q(null), r = q(null), [l, u] = $(!1), [c, p] = $(!1), { testProviders: d } = Me(), g = Object.values(o).filter(
    (S) => Object.values(S).some((E) => E?.status === "warn")
  ), h = Object.values(o).filter(
    (S) => Object.values(S).some((E) => E?.status === "error")
  ), y = g.length > 0, f = h.length > 0;
  R(() => {
    if (n.current && r.current) {
      let S = new ResizeObserver(() => {
        n.current && r.current && (n.current.style.height = `${r.current.scrollHeight}px`);
      });
      return S.observe(r.current), () => S.disconnect();
    }
  }, []), R(() => {
    let S = Bb(y && l, f && c);
    e.experimental_setFilter("sidebar-bottom-filter", S);
  }, [e, y, f, l, c]), dt(() => {
    let S = /* @__PURE__ */ a(({ providerId: m, ...v }) => {
      e.updateTestProviderState(m, {
        error: { name: "Crashed!", message: v.error.message },
        running: !1,
        crashed: !0,
        watching: !1
      });
    }, "onCrashReport"), E = /* @__PURE__ */ a(async ({
      providerId: m,
      ...v
    }) => {
      let I = "status" in v ? v.status : void 0;
      e.updateTestProviderState(
        m,
        I === "failed" ? { ...v, running: !1, failed: !0 } : { ...v, running: I === "pending" }
      );
    }, "onProgressReport");
    return e.on(pn, S), e.on(dn, E), () => {
      e.off(pn, S), e.off(dn, E);
    };
  }, [e, d]);
  let b = Object.values(d || {});
  return !y && !f && !b.length && !t.length ? null : /* @__PURE__ */ s.createElement(we, null, /* @__PURE__ */ s.createElement(Hb, { id: Ab,
  ref: n }), /* @__PURE__ */ s.createElement(zb, { id: Db, ref: r }, /* @__PURE__ */ s.createElement(sr, { notifications: t, clearNotification: e.
  clearNotification }), i && /* @__PURE__ */ s.createElement(
    ud,
    {
      testProviders: b,
      errorCount: h.length,
      errorsActive: c,
      setErrorsActive: p,
      warningCount: g.length,
      warningsActive: l,
      setWarningsActive: u
    }
  )));
}, "SidebarBottomBase"), cd = /* @__PURE__ */ a(({ isDevelopment: e }) => {
  let t = ne(), { notifications: o, status: i } = Me();
  return /* @__PURE__ */ s.createElement(
    Rb,
    {
      api: t,
      notifications: o,
      status: i,
      isDevelopment: e
    }
  );
}, "SidebarBottom");

// src/manager/components/sidebar/TagsFilterPanel.tsx
var Wb = /* @__PURE__ */ new Set(["play-fn"]), jb = x.div({
  minWidth: 180,
  maxWidth: 220
}), pd = /* @__PURE__ */ a(({
  api: e,
  allTags: t,
  selectedTags: o,
  toggleTag: i,
  isDevelopment: n
}) => {
  let r = t.filter((c) => !Wb.has(c)), l = e.getDocsUrl({ subpath: "writing-stories/tags#filtering-by-custom-tags" }), u = [
    t.map((c) => {
      let p = o.includes(c), d = `tag-${c}`;
      return {
        id: d,
        title: c,
        right: /* @__PURE__ */ s.createElement(
          "input",
          {
            type: "checkbox",
            id: d,
            name: d,
            value: c,
            checked: p,
            onChange: () => {
            }
          }
        ),
        onClick: /* @__PURE__ */ a(() => i(c), "onClick")
      };
    })
  ];
  return t.length === 0 && u.push([
    {
      id: "no-tags",
      title: "There are no tags. Use tags to organize and filter your Storybook.",
      isIndented: !1
    }
  ]), r.length === 0 && n && u.push([
    {
      id: "tags-docs",
      title: "Learn how to add tags",
      icon: /* @__PURE__ */ s.createElement(st, null),
      href: l
    }
  ]), /* @__PURE__ */ s.createElement(jb, null, /* @__PURE__ */ s.createElement(ht, { links: u }));
}, "TagsFilterPanel");

// src/manager/components/sidebar/TagsFilter.tsx
var Vb = "tags-filter", $b = /* @__PURE__ */ new Set([
  "dev",
  "docs-only",
  "test-only",
  "autodocs",
  "test",
  "attached-mdx",
  "unattached-mdx"
]), Kb = x.div({
  position: "relative"
}), Ub = x(Go)(({ theme: e }) => ({
  position: "absolute",
  top: 7,
  right: 7,
  transform: "translate(50%, -50%)",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  padding: 3,
  height: 6,
  minWidth: 6,
  lineHeight: "px",
  boxShadow: `${e.barSelectedColor} 0 0 0 1px inset`,
  fontSize: e.typography.size.s1 - 1,
  background: e.color.secondary,
  color: e.color.lightest
})), dd = /* @__PURE__ */ a(({
  api: e,
  indexJson: t,
  initialSelectedTags: o = [],
  isDevelopment: i
}) => {
  let [n, r] = $(o), [l, u] = $(!1), c = n.length > 0;
  R(() => {
    e.experimental_setFilter(Vb, (h) => n.length === 0 ? !0 : n.some((y) => h.tags?.includes(y)));
  }, [e, n]);
  let p = Object.values(t.entries).reduce((h, y) => (y.tags?.forEach((f) => {
    $b.has(f) || h.add(f);
  }), h), /* @__PURE__ */ new Set()), d = A(
    (h) => {
      n.includes(h) ? r(n.filter((y) => y !== h)) : r([...n, h]);
    },
    [n, r]
  ), g = A(
    (h) => {
      h.preventDefault(), u(!l);
    },
    [l, u]
  );
  return p.size === 0 && !i ? null : /* @__PURE__ */ s.createElement(
    ye,
    {
      placement: "bottom",
      trigger: "click",
      onVisibleChange: u,
      tooltip: () => /* @__PURE__ */ s.createElement(
        pd,
        {
          api: e,
          allTags: Array.from(p).toSorted(),
          selectedTags: n,
          toggleTag: d,
          isDevelopment: i
        }
      ),
      closeOnOutsideClick: !0
    },
    /* @__PURE__ */ s.createElement(Kb, null, /* @__PURE__ */ s.createElement(ee, { key: "tags", title: "Tag filters", active: c, onClick: g },
    /* @__PURE__ */ s.createElement(ks, null)), n.length > 0 && /* @__PURE__ */ s.createElement(Ub, null))
  );
}, "TagsFilter");

// ../node_modules/es-toolkit/dist/compat/function/debounce.mjs
function rs(e, t = 0, o = {}) {
  typeof o != "object" && (o = {});
  let { signal: i, leading: n = !1, trailing: r = !0, maxWait: l } = o, u = Array(2);
  n && (u[0] = "leading"), r && (u[1] = "trailing");
  let c, p = null, d = Tr(function(...y) {
    c = e.apply(this, y), p = null;
  }, t, { signal: i, edges: u }), g = /* @__PURE__ */ a(function(...y) {
    if (l != null) {
      if (p === null)
        p = Date.now();
      else if (Date.now() - p >= l)
        return c = e.apply(this, y), p = Date.now(), d.cancel(), d.schedule(), c;
    }
    return d.apply(this, y), c;
  }, "debounced"), h = /* @__PURE__ */ a(() => (d.flush(), c), "flush");
  return g.cancel = d.cancel, g.flush = h, g;
}
a(rs, "debounce");

// src/manager/components/sidebar/useLastViewed.ts
var tn = Be(fd(), 1);
var md = rs((e) => tn.default.set("lastViewedStoryIds", e), 1e3), hd = /* @__PURE__ */ a((e) => {
  let t = K(() => {
    let n = tn.default.get("lastViewedStoryIds");
    return !n || !Array.isArray(n) ? [] : n.some((r) => typeof r == "object" && r.storyId && r.refId) ? n : [];
  }, [tn.default]), o = q(t), i = A(
    (n) => {
      let r = o.current, l = r.findIndex(
        ({ storyId: u, refId: c }) => u === n.storyId && c === n.refId
      );
      l !== 0 && (l === -1 ? o.current = [n, ...r] : o.current = [n, ...r.slice(0, l), ...r.slice(l + 1)], md(o.current));
    },
    [o]
  );
  return R(() => {
    e && i(e);
  }, [e]), {
    getLastViewed: A(() => o.current, [o]),
    clearLastViewed: A(() => {
      o.current = o.current.slice(0, 1), md(o.current);
    }, [o])
  };
}, "useLastViewed");

// src/manager/components/sidebar/Sidebar.tsx
var it = "storybook_internal", qb = x.nav(({ theme: e }) => ({
  position: "absolute",
  zIndex: 1,
  left: 0,
  top: 0,
  bottom: 0,
  right: 0,
  width: "100%",
  height: "100%",
  display: "flex",
  flexDirection: "column",
  background: e.background.content,
  [Qe]: {
    background: e.background.app
  }
})), Gb = x(at)({
  paddingLeft: 12,
  paddingRight: 12,
  paddingBottom: 20,
  paddingTop: 16,
  flex: 1
}), Yb = x(je)({
  margin: 0
}), Qb = x(ee)(({ theme: e }) => ({
  color: e.color.mediumdark,
  width: 32,
  height: 32,
  borderRadius: e.appBorderRadius + 2
})), Xb = s.memo(/* @__PURE__ */ a(function({
  children: t,
  condition: o
}) {
  let [i, n] = s.Children.toArray(t);
  return /* @__PURE__ */ s.createElement(s.Fragment, null, /* @__PURE__ */ s.createElement("div", { style: { display: o ? "block" : "none" } },
  i), /* @__PURE__ */ s.createElement("div", { style: { display: o ? "none" : "block" } }, n));
}, "Swap")), Zb = /* @__PURE__ */ a((e, t, o, i, n) => {
  let r = K(
    () => ({
      [it]: {
        index: e,
        filteredIndex: e,
        indexError: t,
        previewInitialized: o,
        status: i,
        title: null,
        id: it,
        url: "iframe.html"
      },
      ...n
    }),
    [n, e, t, o, i]
  );
  return K(() => ({ hash: r, entries: Object.entries(r) }), [r]);
}, "useCombination"), Jb = ie.STORYBOOK_RENDERER === "react", gd = s.memo(/* @__PURE__ */ a(function({
  // @ts-expect-error (non strict)
  storyId: t = null,
  refId: o = it,
  index: i,
  indexJson: n,
  indexError: r,
  status: l,
  previewInitialized: u,
  menu: c,
  extra: p,
  menuHighlighted: d = !1,
  enableShortcuts: g = !0,
  isDevelopment: h = ie.CONFIG_TYPE === "DEVELOPMENT",
  refs: y = {},
  onMenuClick: f,
  showCreateStoryButton: b = h && Jb
}) {
  let [S, E] = $(!1), m = K(() => t && { storyId: t, refId: o }, [t, o]), v = Zb(i, r, u, l, y), I = !i && !r, w = hd(m), { isMobile: k } = he(),
  T = ne();
  return /* @__PURE__ */ s.createElement(qb, { className: "container sidebar-container" }, /* @__PURE__ */ s.createElement(Xo, { vertical: !0,
  offset: 3, scrollbarSize: 6 }, /* @__PURE__ */ s.createElement(Gb, { row: 1.6 }, /* @__PURE__ */ s.createElement(
    Vc,
    {
      className: "sidebar-header",
      menuHighlighted: d,
      menu: c,
      extra: p,
      skipLinkHref: "#storybook-preview-wrapper",
      isLoading: I,
      onMenuClick: f
    }
  ), /* @__PURE__ */ s.createElement(
    rd,
    {
      dataset: v,
      enableShortcuts: g,
      searchBarContent: b && /* @__PURE__ */ s.createElement(s.Fragment, null, /* @__PURE__ */ s.createElement(
        ye,
        {
          trigger: "hover",
          hasChrome: !1,
          tooltip: /* @__PURE__ */ s.createElement(Yb, { note: "Create a new story" })
        },
        /* @__PURE__ */ s.createElement(
          Qb,
          {
            onClick: () => {
              E(!0);
            },
            variant: "outline"
          },
          /* @__PURE__ */ s.createElement(Fs, null)
        )
      ), /* @__PURE__ */ s.createElement(
        ju,
        {
          open: S,
          onOpenChange: E
        }
      )),
      searchFieldContent: n && /* @__PURE__ */ s.createElement(dd, { api: T, indexJson: n, isDevelopment: h }),
      ...w
    },
    ({
      query: _,
      results: C,
      isBrowsing: O,
      closeMenu: P,
      getMenuProps: D,
      getItemProps: M,
      highlightedIndex: N
    }) => /* @__PURE__ */ s.createElement(Xb, { condition: O }, /* @__PURE__ */ s.createElement(
      Hc,
      {
        dataset: v,
        selected: m,
        isLoading: I,
        isBrowsing: O
      }
    ), /* @__PURE__ */ s.createElement(
      sd,
      {
        query: _,
        results: C,
        closeMenu: P,
        getMenuProps: D,
        getItemProps: M,
        highlightedIndex: N,
        enableShortcuts: g,
        isLoading: I,
        clearLastViewed: w.clearLastViewed
      }
    ))
  )), k || I ? null : /* @__PURE__ */ s.createElement(cd, { isDevelopment: h })));
}, "Sidebar"));

// src/manager/container/Menu.tsx
var e0 = {
  storySearchField: "storybook-explorer-searchfield",
  storyListMenu: "storybook-explorer-menu",
  storyPanelRoot: "storybook-panel-root"
}, t0 = x.span(({ theme: e }) => ({
  display: "inline-block",
  height: 16,
  lineHeight: "16px",
  textAlign: "center",
  fontSize: "11px",
  background: e.base === "light" ? "rgba(0,0,0,0.05)" : "rgba(255,255,255,0.05)",
  color: e.base === "light" ? e.color.dark : e.textMutedColor,
  borderRadius: 2,
  userSelect: "none",
  pointerEvents: "none",
  padding: "0 6px"
})), o0 = x.code(
  ({ theme: e }) => `
  padding: 0;
  vertical-align: middle;

  & + & {
    margin-left: 6px;
  }
`
), ze = /* @__PURE__ */ a(({ keys: e }) => /* @__PURE__ */ s.createElement(s.Fragment, null, /* @__PURE__ */ s.createElement(t0, null, e.map(
(t, o) => /* @__PURE__ */ s.createElement(o0, { key: t }, Ye([t]))))), "Shortcut"), yd = /* @__PURE__ */ a((e, t, o, i, n, r, l) => {
  let u = t.getShortcutKeys(), c = K(
    () => ({
      id: "about",
      title: "About your Storybook",
      onClick: /* @__PURE__ */ a(() => t.changeSettingsTab("about"), "onClick"),
      icon: /* @__PURE__ */ s.createElement(Ps, null)
    }),
    [t]
  ), p = K(() => ({
    id: "documentation",
    title: "Documentation",
    href: t.getDocsUrl({ versioned: !0, renderer: !0 }),
    icon: /* @__PURE__ */ s.createElement(st, null)
  }), [t]), d = e.whatsNewData?.status === "SUCCESS" && !e.disableWhatsNewNotifications, g = t.isWhatsNewUnread(), h = K(
    () => ({
      id: "whats-new",
      title: "What's new?",
      onClick: /* @__PURE__ */ a(() => t.changeSettingsTab("whats-new"), "onClick"),
      right: d && g && /* @__PURE__ */ s.createElement(Go, { status: "positive" }, "Check it out"),
      icon: /* @__PURE__ */ s.createElement($s, null)
    }),
    [t, d, g]
  ), y = K(
    () => ({
      id: "shortcuts",
      title: "Keyboard shortcuts",
      onClick: /* @__PURE__ */ a(() => t.changeSettingsTab("shortcuts"), "onClick"),
      right: l ? /* @__PURE__ */ s.createElement(ze, { keys: u.shortcutsPage }) : null
    }),
    [t, l, u.shortcutsPage]
  ), f = K(
    () => ({
      id: "S",
      title: "Show sidebar",
      onClick: /* @__PURE__ */ a(() => t.toggleNav(), "onClick"),
      active: r,
      right: l ? /* @__PURE__ */ s.createElement(ze, { keys: u.toggleNav }) : null,
      icon: r ? /* @__PURE__ */ s.createElement(Re, null) : null
    }),
    [t, l, u, r]
  ), b = K(
    () => ({
      id: "T",
      title: "Show toolbar",
      onClick: /* @__PURE__ */ a(() => t.toggleToolbar(), "onClick"),
      active: o,
      right: l ? /* @__PURE__ */ s.createElement(ze, { keys: u.toolbar }) : null,
      icon: o ? /* @__PURE__ */ s.createElement(Re, null) : null
    }),
    [t, l, u, o]
  ), S = K(
    () => ({
      id: "A",
      title: "Show addons",
      onClick: /* @__PURE__ */ a(() => t.togglePanel(), "onClick"),
      active: n,
      right: l ? /* @__PURE__ */ s.createElement(ze, { keys: u.togglePanel }) : null,
      icon: n ? /* @__PURE__ */ s.createElement(Re, null) : null
    }),
    [t, l, u, n]
  ), E = K(
    () => ({
      id: "D",
      title: "Change addons orientation",
      onClick: /* @__PURE__ */ a(() => t.togglePanelPosition(), "onClick"),
      right: l ? /* @__PURE__ */ s.createElement(ze, { keys: u.panelPosition }) : null
    }),
    [t, l, u]
  ), m = K(
    () => ({
      id: "F",
      title: "Go full screen",
      onClick: /* @__PURE__ */ a(() => t.toggleFullscreen(), "onClick"),
      active: i,
      right: l ? /* @__PURE__ */ s.createElement(ze, { keys: u.fullScreen }) : null,
      icon: i ? /* @__PURE__ */ s.createElement(Re, null) : null
    }),
    [t, l, u, i]
  ), v = K(
    () => ({
      id: "/",
      title: "Search",
      onClick: /* @__PURE__ */ a(() => t.focusOnUIElement(e0.storySearchField), "onClick"),
      right: l ? /* @__PURE__ */ s.createElement(ze, { keys: u.search }) : null
    }),
    [t, l, u]
  ), I = K(
    () => ({
      id: "up",
      title: "Previous component",
      onClick: /* @__PURE__ */ a(() => t.jumpToComponent(-1), "onClick"),
      right: l ? /* @__PURE__ */ s.createElement(ze, { keys: u.prevComponent }) : null
    }),
    [t, l, u]
  ), w = K(
    () => ({
      id: "down",
      title: "Next component",
      onClick: /* @__PURE__ */ a(() => t.jumpToComponent(1), "onClick"),
      right: l ? /* @__PURE__ */ s.createElement(ze, { keys: u.nextComponent }) : null
    }),
    [t, l, u]
  ), k = K(
    () => ({
      id: "prev",
      title: "Previous story",
      onClick: /* @__PURE__ */ a(() => t.jumpToStory(-1), "onClick"),
      right: l ? /* @__PURE__ */ s.createElement(ze, { keys: u.prevStory }) : null
    }),
    [t, l, u]
  ), T = K(
    () => ({
      id: "next",
      title: "Next story",
      onClick: /* @__PURE__ */ a(() => t.jumpToStory(1), "onClick"),
      right: l ? /* @__PURE__ */ s.createElement(ze, { keys: u.nextStory }) : null
    }),
    [t, l, u]
  ), _ = K(
    () => ({
      id: "collapse",
      title: "Collapse all",
      onClick: /* @__PURE__ */ a(() => t.emit(io), "onClick"),
      right: l ? /* @__PURE__ */ s.createElement(ze, { keys: u.collapseAll }) : null
    }),
    [t, l, u]
  ), C = A(() => {
    let O = t.getAddonsShortcuts(), P = u;
    return Object.entries(O).filter(([D, { showInMenu: M }]) => M).map(([D, { label: M, action: N }]) => ({
      id: D,
      title: M,
      onClick: /* @__PURE__ */ a(() => N(), "onClick"),
      right: l ? /* @__PURE__ */ s.createElement(ze, { keys: P[D] }) : null
    }));
  }, [t, l, u]);
  return K(
    () => [
      [
        c,
        ...e.whatsNewData?.status === "SUCCESS" ? [h] : [],
        p,
        y
      ],
      [
        f,
        b,
        S,
        E,
        m,
        v,
        I,
        w,
        k,
        T,
        _
      ],
      C()
    ],
    [
      c,
      e,
      h,
      p,
      y,
      f,
      b,
      S,
      E,
      m,
      v,
      I,
      w,
      k,
      T,
      _,
      C
    ]
  );
}, "useMenu");

// src/manager/container/Sidebar.tsx
var r0 = s.memo(/* @__PURE__ */ a(function({ onMenuClick: t }) {
  return /* @__PURE__ */ s.createElement(me, { filter: /* @__PURE__ */ a(({ state: i, api: n }) => {
    let {
      ui: { name: r, url: l, enableShortcuts: u },
      viewMode: c,
      storyId: p,
      refId: d,
      layout: { showToolbar: g },
      // FIXME: This is the actual `index.json` index where the `index` below
      // is actually the stories hash. We should fix this up and make it consistent.
      // eslint-disable-next-line @typescript-eslint/naming-convention
      internal_index: h,
      filteredIndex: y,
      status: f,
      indexError: b,
      previewInitialized: S,
      refs: E
    } = i, m = yd(
      i,
      n,
      g,
      n.getIsFullscreen(),
      n.getIsPanelShown(),
      n.getIsNavShown(),
      u
    ), v = i.whatsNewData?.status === "SUCCESS" && !i.disableWhatsNewNotifications, I = n.getElements(Ce.experimental_SIDEBAR_TOP), w = K(() => Object.
    values(I), [Object.keys(I).join("")]);
    return {
      title: r,
      url: l,
      indexJson: h,
      index: y,
      indexError: b,
      status: f,
      previewInitialized: S,
      refs: E,
      storyId: p,
      refId: d,
      viewMode: c,
      menu: m,
      menuHighlighted: v && n.isWhatsNewUnread(),
      enableShortcuts: u,
      extra: w
    };
  }, "mapper") }, (i) => /* @__PURE__ */ s.createElement(gd, { ...i, onMenuClick: t }));
}, "Sideber")), bd = r0;

// src/manager/App.tsx
var vd = /* @__PURE__ */ a(({ managerLayoutState: e, setManagerLayoutState: t, pages: o, hasTab: i }) => {
  let { setMobileAboutOpen: n } = he();
  return /* @__PURE__ */ s.createElement(s.Fragment, null, /* @__PURE__ */ s.createElement(Ut, { styles: fa }), /* @__PURE__ */ s.createElement(
    xl,
    {
      hasTab: i,
      managerLayoutState: e,
      setManagerLayoutState: t,
      slotMain: /* @__PURE__ */ s.createElement(pu, { id: "main", withLoader: !0 }),
      slotSidebar: /* @__PURE__ */ s.createElement(bd, { onMenuClick: () => n((r) => !r) }),
      slotPanel: /* @__PURE__ */ s.createElement(Sl, null),
      slotPages: o.map(({ id: r, render: l }) => /* @__PURE__ */ s.createElement(l, { key: r }))
    }
  ));
}, "App");

// src/manager/provider.ts
var ns = class ns {
  getElements(t) {
    throw new Error("Provider.getElements() is not implemented!");
  }
  handleAPI(t) {
    throw new Error("Provider.handleAPI() is not implemented!");
  }
  getConfig() {
    return console.error("Provider.getConfig() is not implemented!"), {};
  }
};
a(ns, "Provider");
var Wt = ns;

// src/manager/settings/About.tsx
var n0 = x.div({
  display: "flex",
  alignItems: "center",
  flexDirection: "column",
  marginTop: 40
}), i0 = x.header({
  marginBottom: 32,
  alignItems: "center",
  display: "flex",
  "> svg": {
    height: 48,
    width: "auto",
    marginRight: 8
  }
}), s0 = x.div(({ theme: e }) => ({
  marginBottom: 24,
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  color: e.base === "light" ? e.color.dark : e.color.lightest,
  fontWeight: e.typography.weight.regular,
  fontSize: e.typography.size.s2
})), a0 = x.div({
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  marginBottom: 24,
  marginTop: 24,
  gap: 16
}), xd = x(Ae)(({ theme: e }) => ({
  "&&": {
    fontWeight: e.typography.weight.bold,
    color: e.base === "light" ? e.color.dark : e.color.light
  },
  "&:hover": {
    color: e.base === "light" ? e.color.darkest : e.color.lightest
  }
})), Id = /* @__PURE__ */ a(({ onNavigateToWhatsNew: e }) => /* @__PURE__ */ s.createElement(n0, null, /* @__PURE__ */ s.createElement(i0, null,
/* @__PURE__ */ s.createElement(Zo, { alt: "Storybook" })), /* @__PURE__ */ s.createElement(ar, { onNavigateToWhatsNew: e }), /* @__PURE__ */ s.
createElement(s0, null, /* @__PURE__ */ s.createElement(a0, null, /* @__PURE__ */ s.createElement(fe, { asChild: !0 }, /* @__PURE__ */ s.createElement(
"a", { href: "https://github.com/storybookjs/storybook" }, /* @__PURE__ */ s.createElement(Mo, null), "GitHub")), /* @__PURE__ */ s.createElement(
fe, { asChild: !0 }, /* @__PURE__ */ s.createElement("a", { href: "https://storybook.js.org/docs" }, /* @__PURE__ */ s.createElement(Kt, { style: {
display: "inline", marginRight: 5 } }), "Documentation"))), /* @__PURE__ */ s.createElement("div", null, "Open source software maintained by",
" ", /* @__PURE__ */ s.createElement(xd, { href: "https://www.chromatic.com/" }, "Chromatic"), " and the", " ", /* @__PURE__ */ s.createElement(
xd, { href: "https://github.com/storybookjs/storybook/graphs/contributors" }, "Storybook Community")))), "AboutScreen");

// src/manager/settings/AboutPage.tsx
var ss = class ss extends Ne {
  componentDidMount() {
    let { api: t, notificationId: o } = this.props;
    t.clearNotification(o);
  }
  render() {
    let { children: t } = this.props;
    return t;
  }
};
a(ss, "NotificationClearer");
var is = ss, Sd = /* @__PURE__ */ a(() => {
  let e = ne(), t = Me(), o = A(() => {
    e.changeSettingsTab("whats-new");
  }, [e]);
  return /* @__PURE__ */ s.createElement(is, { api: e, notificationId: "update" }, /* @__PURE__ */ s.createElement(
    Id,
    {
      onNavigateToWhatsNew: t.whatsNewData?.status === "SUCCESS" ? o : void 0
    }
  ));
}, "AboutPage");

// src/manager/settings/SettingsFooter.tsx
var l0 = x.div(({ theme: e }) => ({
  display: "flex",
  paddingTop: 20,
  marginTop: 20,
  borderTop: `1px solid ${e.appBorderColor}`,
  fontWeight: e.typography.weight.bold,
  "& > * + *": {
    marginLeft: 20
  }
})), u0 = /* @__PURE__ */ a((e) => /* @__PURE__ */ s.createElement(l0, { ...e }, /* @__PURE__ */ s.createElement(Ae, { secondary: !0, href: "\
https://storybook.js.org", cancel: !1, target: "_blank" }, "Docs"), /* @__PURE__ */ s.createElement(Ae, { secondary: !0, href: "https://gith\
ub.com/storybookjs/storybook", cancel: !1, target: "_blank" }, "GitHub"), /* @__PURE__ */ s.createElement(
  Ae,
  {
    secondary: !0,
    href: "https://storybook.js.org/community#support",
    cancel: !1,
    target: "_blank"
  },
  "Support"
)), "SettingsFooter"), wd = u0;

// src/manager/settings/shortcuts.tsx
var c0 = x.header(({ theme: e }) => ({
  marginBottom: 20,
  fontSize: e.typography.size.m3,
  fontWeight: e.typography.weight.bold,
  alignItems: "center",
  display: "flex"
})), Ed = x.div(({ theme: e }) => ({
  fontWeight: e.typography.weight.bold
})), p0 = x.div({
  alignSelf: "flex-end",
  display: "grid",
  margin: "10px 0",
  gridTemplateColumns: "1fr 1fr 12px",
  "& > *:last-of-type": {
    gridColumn: "2 / 2",
    justifySelf: "flex-end",
    gridRow: "1"
  }
}), d0 = x.div(({ theme: e }) => ({
  padding: "6px 0",
  borderTop: `1px solid ${e.appBorderColor}`,
  display: "grid",
  gridTemplateColumns: "1fr 1fr 0px"
})), f0 = x.div({
  display: "grid",
  gridTemplateColumns: "1fr",
  gridAutoRows: "minmax(auto, auto)",
  marginBottom: 20
}), m0 = x.div({
  alignSelf: "center"
}), h0 = x(Yo.Input)(
  ({ valid: e, theme: t }) => e === "error" ? {
    animation: `${t.animation.jiggle} 700ms ease-out`
  } : {},
  {
    display: "flex",
    width: 80,
    flexDirection: "column",
    justifySelf: "flex-end",
    paddingLeft: 4,
    paddingRight: 4,
    textAlign: "center"
  }
), g0 = St`
0%,100% { opacity: 0; }
  50% { opacity: 1; }
`, y0 = x(Re)(
  ({ valid: e, theme: t }) => e === "valid" ? {
    color: t.color.positive,
    animation: `${g0} 2s ease forwards`
  } : {
    opacity: 0
  },
  {
    alignSelf: "center",
    display: "flex",
    marginLeft: 10,
    height: 14,
    width: 14
  }
), b0 = x.div(({ theme: e }) => ({
  fontSize: e.typography.size.s2,
  padding: "3rem 20px",
  maxWidth: 600,
  margin: "0 auto"
})), v0 = {
  fullScreen: "Go full screen",
  togglePanel: "Toggle addons",
  panelPosition: "Toggle addons orientation",
  toggleNav: "Toggle sidebar",
  toolbar: "Toggle canvas toolbar",
  search: "Focus search",
  focusNav: "Focus sidebar",
  focusIframe: "Focus canvas",
  focusPanel: "Focus addons",
  prevComponent: "Previous component",
  nextComponent: "Next component",
  prevStory: "Previous story",
  nextStory: "Next story",
  shortcutsPage: "Go to shortcuts page",
  aboutPage: "Go to about page",
  collapseAll: "Collapse all items on sidebar",
  expandAll: "Expand all items on sidebar",
  remount: "Remount component"
}, x0 = ["escape"];
function as(e) {
  return Object.entries(e).reduce(
    // @ts-expect-error (non strict)
    (t, [o, i]) => x0.includes(o) ? t : { ...t, [o]: { shortcut: i, error: !1 } },
    {}
  );
}
a(as, "toShortcutState");
var ls = class ls extends Ne {
  constructor(o) {
    super(o);
    this.onKeyDown = /* @__PURE__ */ a((o) => {
      let { activeFeature: i, shortcutKeys: n } = this.state;
      if (o.key === "Backspace")
        return this.restoreDefault();
      let r = aa(o);
      if (!r)
        return !1;
      let l = !!Object.entries(n).find(
        ([u, { shortcut: c }]) => u !== i && c && la(r, c)
      );
      return this.setState({
        shortcutKeys: { ...n, [i]: { shortcut: r, error: l } }
      });
    }, "onKeyDown");
    this.onFocus = /* @__PURE__ */ a((o) => () => {
      let { shortcutKeys: i } = this.state;
      this.setState({
        activeFeature: o,
        shortcutKeys: {
          ...i,
          [o]: { shortcut: null, error: !1 }
        }
      });
    }, "onFocus");
    this.onBlur = /* @__PURE__ */ a(async () => {
      let { shortcutKeys: o, activeFeature: i } = this.state;
      if (o[i]) {
        let { shortcut: n, error: r } = o[i];
        return !n || r ? this.restoreDefault() : this.saveShortcut();
      }
      return !1;
    }, "onBlur");
    this.saveShortcut = /* @__PURE__ */ a(async () => {
      let { activeFeature: o, shortcutKeys: i } = this.state, { setShortcut: n } = this.props;
      await n(o, i[o].shortcut), this.setState({ successField: o });
    }, "saveShortcut");
    this.restoreDefaults = /* @__PURE__ */ a(async () => {
      let { restoreAllDefaultShortcuts: o } = this.props, i = await o();
      return this.setState({ shortcutKeys: as(i) });
    }, "restoreDefaults");
    this.restoreDefault = /* @__PURE__ */ a(async () => {
      let { activeFeature: o, shortcutKeys: i } = this.state, { restoreDefaultShortcut: n } = this.props, r = await n(o);
      return this.setState({
        shortcutKeys: {
          ...i,
          ...as({ [o]: r })
        }
      });
    }, "restoreDefault");
    this.displaySuccessMessage = /* @__PURE__ */ a((o) => {
      let { successField: i, shortcutKeys: n } = this.state;
      return o === i && n[o].error === !1 ? "valid" : void 0;
    }, "displaySuccessMessage");
    this.displayError = /* @__PURE__ */ a((o) => {
      let { activeFeature: i, shortcutKeys: n } = this.state;
      return o === i && n[o].error === !0 ? "error" : void 0;
    }, "displayError");
    this.renderKeyInput = /* @__PURE__ */ a(() => {
      let { shortcutKeys: o, addonsShortcutLabels: i } = this.state;
      return Object.entries(o).map(([r, { shortcut: l }]) => /* @__PURE__ */ s.createElement(d0, { key: r }, /* @__PURE__ */ s.createElement(
      m0, null, v0[r] || i[r]), /* @__PURE__ */ s.createElement(
        h0,
        {
          spellCheck: "false",
          valid: this.displayError(r),
          className: "modalInput",
          onBlur: this.onBlur,
          onFocus: this.onFocus(r),
          onKeyDown: this.onKeyDown,
          value: l ? Ye(l) : "",
          placeholder: "Type keys",
          readOnly: !0
        }
      ), /* @__PURE__ */ s.createElement(y0, { valid: this.displaySuccessMessage(r) })));
    }, "renderKeyInput");
    this.renderKeyForm = /* @__PURE__ */ a(() => /* @__PURE__ */ s.createElement(f0, null, /* @__PURE__ */ s.createElement(p0, null, /* @__PURE__ */ s.
    createElement(Ed, null, "Commands"), /* @__PURE__ */ s.createElement(Ed, null, "Shortcut")), this.renderKeyInput()), "renderKeyForm");
    this.state = {
      // @ts-expect-error (non strict)
      activeFeature: void 0,
      // @ts-expect-error (non strict)
      successField: void 0,
      // The initial shortcutKeys that come from props are the defaults/what was saved
      // As the user interacts with the page, the state stores the temporary, unsaved shortcuts
      // This object also includes the error attached to each shortcut
      // @ts-expect-error (non strict)
      shortcutKeys: as(o.shortcutKeys),
      addonsShortcutLabels: o.addonsShortcutLabels
    };
  }
  render() {
    let o = this.renderKeyForm();
    return /* @__PURE__ */ s.createElement(b0, null, /* @__PURE__ */ s.createElement(c0, null, "Keyboard shortcuts"), o, /* @__PURE__ */ s.createElement(
      fe,
      {
        variant: "outline",
        size: "small",
        id: "restoreDefaultsHotkeys",
        onClick: this.restoreDefaults
      },
      "Restore defaults"
    ), /* @__PURE__ */ s.createElement(wd, null));
  }
};
a(ls, "ShortcutsScreen");
var on = ls;

// src/manager/settings/ShortcutsPage.tsx
var Cd = /* @__PURE__ */ a(() => /* @__PURE__ */ s.createElement(me, null, ({
  api: {
    getShortcutKeys: e,
    getAddonsShortcutLabels: t,
    setShortcut: o,
    restoreDefaultShortcut: i,
    restoreAllDefaultShortcuts: n
  }
}) => /* @__PURE__ */ s.createElement(
  on,
  {
    shortcutKeys: e(),
    addonsShortcutLabels: t(),
    setShortcut: o,
    restoreDefaultShortcut: i,
    restoreAllDefaultShortcuts: n
  }
)), "ShortcutsPage");

// src/manager/settings/whats_new.tsx
var Td = x.div({
  top: "50%",
  position: "absolute",
  transform: "translateY(-50%)",
  width: "100%",
  textAlign: "center"
}), I0 = x.div({
  position: "relative",
  height: "32px"
}), _d = x.div(({ theme: e }) => ({
  paddingTop: "12px",
  color: e.textMutedColor,
  maxWidth: "295px",
  margin: "0 auto",
  fontSize: `${e.typography.size.s1}px`,
  lineHeight: "16px"
})), S0 = x.div(({ theme: e }) => ({
  position: "absolute",
  width: "100%",
  bottom: "40px",
  background: e.background.bar,
  fontSize: "13px",
  borderTop: "1px solid",
  borderColor: e.appBorderColor,
  padding: "8px 12px",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between"
})), w0 = /* @__PURE__ */ a(({
  isNotificationsEnabled: e,
  onToggleNotifications: t,
  onCopyLink: o
}) => {
  let i = Oe(), [n, r] = $("Copy Link"), l = /* @__PURE__ */ a(() => {
    o(), r("Copied!"), setTimeout(() => r("Copy Link"), 4e3);
  }, "copyLink");
  return /* @__PURE__ */ s.createElement(S0, null, /* @__PURE__ */ s.createElement("div", { style: { display: "flex", alignItems: "center", gap: 10 } },
  /* @__PURE__ */ s.createElement(Os, { color: i.color.mediumdark }), /* @__PURE__ */ s.createElement("div", null, "Share this with your tea\
m."), /* @__PURE__ */ s.createElement(fe, { onClick: l, size: "small", variant: "ghost" }, n)), e ? /* @__PURE__ */ s.createElement(fe, { size: "\
small", variant: "ghost", onClick: t }, /* @__PURE__ */ s.createElement(Ts, null), "Hide notifications") : /* @__PURE__ */ s.createElement(fe,
  { size: "small", variant: "ghost", onClick: t }, /* @__PURE__ */ s.createElement(Do, null), "Show notifications"));
}, "WhatsNewFooter"), E0 = x.iframe(
  {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    border: 0,
    margin: 0,
    padding: 0,
    width: "100%",
    height: "calc(100% - 80px)",
    background: "white"
  },
  ({ isLoaded: e }) => ({ visibility: e ? "visible" : "hidden" })
), C0 = x((e) => /* @__PURE__ */ s.createElement(Oo, { ...e }))(({ theme: e }) => ({
  color: e.textMutedColor,
  width: 32,
  height: 32,
  margin: "0 auto"
})), T0 = /* @__PURE__ */ a(() => /* @__PURE__ */ s.createElement(Td, null, /* @__PURE__ */ s.createElement(I0, null, /* @__PURE__ */ s.createElement(
Qo, null)), /* @__PURE__ */ s.createElement(_d, null, "Loading...")), "WhatsNewLoader"), _0 = /* @__PURE__ */ a(() => /* @__PURE__ */ s.createElement(
Td, null, /* @__PURE__ */ s.createElement(C0, null), /* @__PURE__ */ s.createElement(_d, null, "The page couldn't be loaded. Check your inte\
rnet connection and try again.")), "MaxWaitTimeMessaging"), k0 = /* @__PURE__ */ a(({
  didHitMaxWaitTime: e,
  isLoaded: t,
  onLoad: o,
  url: i,
  onCopyLink: n,
  onToggleNotifications: r,
  isNotificationsEnabled: l
}) => /* @__PURE__ */ s.createElement(we, null, !t && !e && /* @__PURE__ */ s.createElement(T0, null), e ? /* @__PURE__ */ s.createElement(_0,
null) : /* @__PURE__ */ s.createElement(s.Fragment, null, /* @__PURE__ */ s.createElement(E0, { isLoaded: t, onLoad: o, src: i, title: "What\
's new?" }), /* @__PURE__ */ s.createElement(
  w0,
  {
    isNotificationsEnabled: l,
    onToggleNotifications: r,
    onCopyLink: n
  }
))), "PureWhatsNewScreen"), O0 = 1e4, kd = /* @__PURE__ */ a(() => {
  let e = ne(), t = Me(), { whatsNewData: o } = t, [i, n] = $(!1), [r, l] = $(!1);
  if (R(() => {
    let c = setTimeout(() => !i && l(!0), O0);
    return () => clearTimeout(c);
  }, [i]), o?.status !== "SUCCESS")
    return null;
  let u = !o.disableWhatsNewNotifications;
  return /* @__PURE__ */ s.createElement(
    k0,
    {
      didHitMaxWaitTime: r,
      isLoaded: i,
      onLoad: () => {
        e.whatsNewHasBeenRead(), n(!0);
      },
      url: o.url,
      isNotificationsEnabled: u,
      onCopyLink: () => {
        navigator.clipboard?.writeText(o.blogUrl ?? o.url);
      },
      onToggleNotifications: () => {
        u ? ie.confirm("All update notifications will no longer be shown. Are you sure?") && e.toggleWhatsNewNotifications() : e.toggleWhatsNewNotifications();
      }
    }
  );
}, "WhatsNewScreen");

// src/manager/settings/whats_new_page.tsx
var Od = /* @__PURE__ */ a(() => /* @__PURE__ */ s.createElement(kd, null), "WhatsNewPage");

// src/manager/settings/index.tsx
var { document: Pd } = ie, P0 = x.div(({ theme: e }) => ({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  height: 40,
  boxShadow: `${e.appBorderColor}  0 -1px 0 0 inset`,
  background: e.barBg,
  paddingRight: 8
})), us = s.memo(/* @__PURE__ */ a(function({
  changeTab: t,
  id: o,
  title: i
}) {
  return /* @__PURE__ */ s.createElement(jo, null, ({ path: n }) => {
    let r = n.includes(`settings/${o}`);
    return /* @__PURE__ */ s.createElement(
      er,
      {
        id: `tabbutton-${o}`,
        className: ["tabbutton"].concat(r ? ["tabbutton-active"] : []).join(" "),
        type: "button",
        key: "id",
        active: r,
        onClick: () => t(o),
        role: "tab"
      },
      i
    );
  });
}, "TabBarButton")), A0 = x(Xo)(({ theme: e }) => ({
  background: e.background.content
})), D0 = /* @__PURE__ */ a(({ changeTab: e, onClose: t, enableShortcuts: o = !0, enableWhatsNew: i }) => (s.useEffect(() => {
  let n = /* @__PURE__ */ a((r) => {
    !o || r.repeat || bt(!1, r) && Ve("Escape", r) && (r.preventDefault(), t());
  }, "handleEscape");
  return Pd.addEventListener("keydown", n), () => Pd.removeEventListener("keydown", n);
}, [o, t]), /* @__PURE__ */ s.createElement(we, null, /* @__PURE__ */ s.createElement(P0, { className: "sb-bar" }, /* @__PURE__ */ s.createElement(
Jo, { role: "tablist" }, /* @__PURE__ */ s.createElement(us, { id: "about", title: "About", changeTab: e }), i && /* @__PURE__ */ s.createElement(
us, { id: "whats-new", title: "What's new?", changeTab: e }), /* @__PURE__ */ s.createElement(us, { id: "shortcuts", title: "Keyboard shortc\
uts", changeTab: e })), /* @__PURE__ */ s.createElement(
  ee,
  {
    onClick: (n) => (n.preventDefault(), t()),
    title: "Close settings page"
  },
  /* @__PURE__ */ s.createElement(qe, null)
)), /* @__PURE__ */ s.createElement(A0, { vertical: !0, horizontal: !1 }, /* @__PURE__ */ s.createElement(so, { path: "about" }, /* @__PURE__ */ s.
createElement(Sd, { key: "about" })), /* @__PURE__ */ s.createElement(so, { path: "whats-new" }, /* @__PURE__ */ s.createElement(Od, { key: "\
whats-new" })), /* @__PURE__ */ s.createElement(so, { path: "shortcuts" }, /* @__PURE__ */ s.createElement(Cd, { key: "shortcuts" }))))), "P\
ages"), M0 = /* @__PURE__ */ a(() => {
  let e = ne(), t = Me(), o = /* @__PURE__ */ a((i) => e.changeSettingsTab(i), "changeTab");
  return /* @__PURE__ */ s.createElement(
    D0,
    {
      enableWhatsNew: t.whatsNewData?.status === "SUCCESS",
      enableShortcuts: t.ui.enableShortcuts,
      changeTab: o,
      onClose: e.closeSettings
    }
  );
}, "SettingsPages"), Ad = {
  id: "settings",
  url: "/settings/",
  title: "Settings",
  type: be.experimental_PAGE,
  render: /* @__PURE__ */ a(() => /* @__PURE__ */ s.createElement(so, { path: "/settings/", startsWith: !0 }, /* @__PURE__ */ s.createElement(
  M0, null)), "render")
};

// src/manager/index.tsx
fn.displayName = "ThemeProvider";
mt.displayName = "HelmetProvider";
var L0 = /* @__PURE__ */ a(({ provider: e }) => /* @__PURE__ */ s.createElement(mt, { key: "helmet.Provider" }, /* @__PURE__ */ s.createElement(
ca, { key: "location.provider" }, /* @__PURE__ */ s.createElement(N0, { provider: e }))), "Root"), N0 = /* @__PURE__ */ a(({ provider: e }) => {
  let t = da();
  return /* @__PURE__ */ s.createElement(jo, { key: "location.consumer" }, (o) => /* @__PURE__ */ s.createElement(
    sa,
    {
      key: "manager",
      provider: e,
      ...o,
      navigate: t,
      docsOptions: ie?.DOCS_OPTIONS || {}
    },
    (i) => {
      let { state: n, api: r } = i, l = A(
        (c) => {
          r.setSizes(c);
        },
        [r]
      ), u = K(
        () => [Ad, ...Object.values(r.getElements(be.experimental_PAGE))],
        [Object.keys(r.getElements(be.experimental_PAGE)).join()]
      );
      return /* @__PURE__ */ s.createElement(fn, { key: "theme.provider", theme: ma(n.theme) }, /* @__PURE__ */ s.createElement(ja, null, /* @__PURE__ */ s.
      createElement(
        vd,
        {
          key: "app",
          pages: u,
          managerLayoutState: {
            ...n.layout,
            viewMode: n.viewMode
          },
          hasTab: !!r.getQueryParam("tab"),
          setManagerLayoutState: l
        }
      )));
    }
  ));
}, "Main");
function Dd(e, t) {
  if (!(t instanceof Wt))
    throw new ga();
  ua(e).render(/* @__PURE__ */ s.createElement(L0, { key: "root", provider: t }));
}
a(Dd, "renderStorybookUI");

// src/manager/runtime.tsx
var F0 = "CORE/WS_DISCONNECTED", ps = class ps extends Wt {
  constructor() {
    super();
    this.wsDisconnected = !1;
    let o = gs({ page: "manager" });
    Ge.setChannel(o), o.emit(Xs), this.addons = Ge, this.channel = o, ie.__STORYBOOK_ADDONS_CHANNEL__ = o;
  }
  getElements(o) {
    return this.addons.getElements(o);
  }
  getConfig() {
    return this.addons.getConfig();
  }
  handleAPI(o) {
    this.addons.loadAddons(o), this.channel.on(Zs, (i) => {
      this.wsDisconnected = !0, o.addNotification({
        id: F0,
        content: {
          headline: i.code === 3008 ? "Server timed out" : "Connection lost",
          subHeadline: "Please restart your Storybook server and reload the page"
        },
        icon: /* @__PURE__ */ s.createElement(_s, { color: Gs.negative }),
        link: void 0
      });
    });
  }
};
a(ps, "ReactProvider");
var cs = ps, { document: B0 } = ie, H0 = B0.getElementById("root");
setTimeout(() => {
  Dd(H0, new cs());
}, 0);
