/*! For license information please see LICENSES */
(window.webpackJsonp = window.webpackJsonp || []).push([
    [0], {
        0: function(t, e, r) {
            "use strict";
            r.d(e, "k", (function() {
                return w
            })), r.d(e, "m", (function() {
                return y
            })), r.d(e, "l", (function() {
                return k
            })), r.d(e, "e", (function() {
                return _
            })), r.d(e, "b", (function() {
                return C
            })), r.d(e, "s", (function() {
                return j
            })), r.d(e, "g", (function() {
                return O
            })), r.d(e, "h", (function() {
                return $
            })), r.d(e, "d", (function() {
                return z
            })), r.d(e, "r", (function() {
                return E
            })), r.d(e, "j", (function() {
                return S
            })), r.d(e, "t", (function() {
                return A
            })), r.d(e, "o", (function() {
                return P
            })), r.d(e, "q", (function() {
                return M
            })), r.d(e, "f", (function() {
                return N
            })), r.d(e, "c", (function() {
                return L
            })), r.d(e, "i", (function() {
                return I
            })), r.d(e, "p", (function() {
                return D
            })), r.d(e, "a", (function() {
                return J
            })), r.d(e, "v", (function() {
                return Q
            })), r.d(e, "n", (function() {
                return V
            })), r.d(e, "u", (function() {
                return G
            }));
            var o = r(15),
                n = r(11),
                l = r(26),
                d = r(19),
                m = (r(49), r(100), r(32), r(50), r(51), r(43), r(130), r(184), r(54), r(53), r(40), r(52), r(247), r(79), r(80), r(39), r(65), r(20), r(249), r(27), r(33), r(133), r(41), r(186), r(81), r(187), r(188), r(42), r(1)),
                c = r(30);

            function f(t, e) {
                var r = Object.keys(t);
                if (Object.getOwnPropertySymbols) {
                    var o = Object.getOwnPropertySymbols(t);
                    e && (o = o.filter((function(e) {
                        return Object.getOwnPropertyDescriptor(t, e).enumerable
                    }))), r.push.apply(r, o)
                }
                return r
            }

            function h(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var r = null != arguments[e] ? arguments[e] : {};
                    e % 2 ? f(Object(r), !0).forEach((function(e) {
                        Object(l.a)(t, e, r[e])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r)) : f(Object(r)).forEach((function(e) {
                        Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(r, e))
                    }))
                }
                return t
            }

            function x(t, e) {
                var r = "undefined" != typeof Symbol && t[Symbol.iterator] || t["@@iterator"];
                if (!r) {
                    if (Array.isArray(t) || (r = function(t, e) {
                            if (!t) return;
                            if ("string" == typeof t) return v(t, e);
                            var r = Object.prototype.toString.call(t).slice(8, -1);
                            "Object" === r && t.constructor && (r = t.constructor.name);
                            if ("Map" === r || "Set" === r) return Array.from(t);
                            if ("Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return v(t, e)
                        }(t)) || e && t && "number" == typeof t.length) {
                        r && (t = r);
                        var i = 0,
                            o = function() {};
                        return {
                            s: o,
                            n: function() {
                                return i >= t.length ? {
                                    done: !0
                                } : {
                                    done: !1,
                                    value: t[i++]
                                }
                            },
                            e: function(t) {
                                throw t
                            },
                            f: o
                        }
                    }
                    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }
                var n, l = !0,
                    d = !1;
                return {
                    s: function() {
                        r = r.call(t)
                    },
                    n: function() {
                        var t = r.next();
                        return l = t.done, t
                    },
                    e: function(t) {
                        d = !0, n = t
                    },
                    f: function() {
                        try {
                            l || null == r.return || r.return()
                        } finally {
                            if (d) throw n
                        }
                    }
                }
            }

            function v(t, e) {
                (null == e || e > t.length) && (e = t.length);
                for (var i = 0, r = new Array(e); i < e; i++) r[i] = t[i];
                return r
            }

            function w(t) {
                m.a.config.errorHandler && m.a.config.errorHandler(t)
            }

            function y(t) {
                return t.then((function(t) {
                    return t.default || t
                }))
            }

            function k(t) {
                return t.$options && "function" == typeof t.$options.fetch && !t.$options.fetch.length
            }

            function _(t) {
                var e, r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [],
                    o = x(t.$children || []);
                try {
                    for (o.s(); !(e = o.n()).done;) {
                        var n = e.value;
                        n.$fetch && r.push(n), n.$children && _(n, r)
                    }
                } catch (t) {
                    o.e(t)
                } finally {
                    o.f()
                }
                return r
            }

            function C(t, e) {
                if (e || !t.options.__hasNuxtData) {
                    var r = t.options._originDataFn || t.options.data || function() {
                        return {}
                    };
                    t.options._originDataFn = r, t.options.data = function() {
                        var data = r.call(this, this);
                        return this.$ssrContext && (e = this.$ssrContext.asyncData[t.cid]), h(h({}, data), e)
                    }, t.options.__hasNuxtData = !0, t._Ctor && t._Ctor.options && (t._Ctor.options.data = t.options.data)
                }
            }

            function j(t) {
                return t.options && t._Ctor === t || (t.options ? (t._Ctor = t, t.extendOptions = t.options) : (t = m.a.extend(t))._Ctor = t, !t.options.name && t.options.__file && (t.options.name = t.options.__file)), t
            }

            function O(t) {
                var e = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                    r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "components";
                return Array.prototype.concat.apply([], t.matched.map((function(t, o) {
                    return Object.keys(t[r]).map((function(n) {
                        return e && e.push(o), t[r][n]
                    }))
                })))
            }

            function $(t) {
                return O(t, arguments.length > 1 && void 0 !== arguments[1] && arguments[1], "instances")
            }

            function z(t, e) {
                return Array.prototype.concat.apply([], t.matched.map((function(t, r) {
                    return Object.keys(t.components).reduce((function(o, n) {
                        return t.components[n] ? o.push(e(t.components[n], t.instances[n], t, n, r)) : delete t.components[n], o
                    }), [])
                })))
            }

            function E(t, e) {
                return Promise.all(z(t, function() {
                    var t = Object(n.a)(regeneratorRuntime.mark((function t(r, o, n, l) {
                        var d, m;
                        return regeneratorRuntime.wrap((function(t) {
                            for (;;) switch (t.prev = t.next) {
                                case 0:
                                    if ("function" != typeof r || r.options) {
                                        t.next = 11;
                                        break
                                    }
                                    return t.prev = 1, t.next = 4, r();
                                case 4:
                                    r = t.sent, t.next = 11;
                                    break;
                                case 7:
                                    throw t.prev = 7, t.t0 = t.catch(1), t.t0 && "ChunkLoadError" === t.t0.name && "undefined" != typeof window && window.sessionStorage && (d = Date.now(), (!(m = parseInt(window.sessionStorage.getItem("nuxt-reload"))) || m + 6e4 < d) && (window.sessionStorage.setItem("nuxt-reload", d), window.location.reload(!0))), t.t0;
                                case 11:
                                    return n.components[l] = r = j(r), t.abrupt("return", "function" == typeof e ? e(r, o, n, l) : r);
                                case 13:
                                case "end":
                                    return t.stop()
                            }
                        }), t, null, [
                            [1, 7]
                        ])
                    })));
                    return function(e, r, o, n) {
                        return t.apply(this, arguments)
                    }
                }()))
            }

            function S(t) {
                return R.apply(this, arguments)
            }

            function R() {
                return (R = Object(n.a)(regeneratorRuntime.mark((function t(e) {
                    return regeneratorRuntime.wrap((function(t) {
                        for (;;) switch (t.prev = t.next) {
                            case 0:
                                if (e) {
                                    t.next = 2;
                                    break
                                }
                                return t.abrupt("return");
                            case 2:
                                return t.next = 4, E(e);
                            case 4:
                                return t.abrupt("return", h(h({}, e), {}, {
                                    meta: O(e).map((function(t, r) {
                                        return h(h({}, t.options.meta), (e.matched[r] || {}).meta)
                                    }))
                                }));
                            case 5:
                            case "end":
                                return t.stop()
                        }
                    }), t)
                })))).apply(this, arguments)
            }

            function A(t, e) {
                return T.apply(this, arguments)
            }

            function T() {
                return (T = Object(n.a)(regeneratorRuntime.mark((function t(e, r) {
                    var n, l, m, f;
                    return regeneratorRuntime.wrap((function(t) {
                        for (;;) switch (t.prev = t.next) {
                            case 0:
                                return e.context || (e.context = {
                                    isStatic: !1,
                                    isDev: !1,
                                    isHMR: !1,
                                    app: e,
                                    store: e.store,
                                    payload: r.payload,
                                    error: r.error,
                                    base: e.router.options.base,
                                    env: {}
                                }, r.req && (e.context.req = r.req), r.res && (e.context.res = r.res), r.ssrContext && (e.context.ssrContext = r.ssrContext), e.context.redirect = function(t, path, r) {
                                    if (t) {
                                        e.context._redirected = !0;
                                        var n = Object(o.a)(path);
                                        if ("number" == typeof t || "undefined" !== n && "object" !== n || (r = path || {}, path = t, n = Object(o.a)(path), t = 302), "object" === n && (path = e.router.resolve(path).route.fullPath), !/(^[.]{1,2}\/)|(^\/(?!\/))/.test(path)) throw path = Object(c.d)(path, r), window.location.assign(path), new Error("ERR_REDIRECT");
                                        e.context.next({
                                            path: path,
                                            query: r,
                                            status: t
                                        })
                                    }
                                }, e.context.nuxtState = window.__NUXT__), t.next = 3, Promise.all([S(r.route), S(r.from)]);
                            case 3:
                                n = t.sent, l = Object(d.a)(n, 2), m = l[0], f = l[1], r.route && (e.context.route = m), r.from && (e.context.from = f), r.error && (e.context.error = r.error), e.context.next = r.next, e.context._redirected = !1, e.context._errored = !1, e.context.isHMR = !1, e.context.params = e.context.route.params || {}, e.context.query = e.context.route.query || {};
                            case 16:
                            case "end":
                                return t.stop()
                        }
                    }), t)
                })))).apply(this, arguments)
            }

            function P(t, e, r) {
                return !t.length || e._redirected || e._errored || r && r.aborted ? Promise.resolve() : M(t[0], e).then((function() {
                    return P(t.slice(1), e, r)
                }))
            }

            function M(t, e) {
                var r;
                return (r = 2 === t.length ? new Promise((function(r) {
                    t(e, (function(t, data) {
                        t && e.error(t), r(data = data || {})
                    }))
                })) : t(e)) && r instanceof Promise && "function" == typeof r.then ? r : Promise.resolve(r)
            }

            function N(base, t) {
                if ("hash" === t) return window.location.hash.replace(/^#\//, "");
                base = decodeURI(base).slice(0, -1);
                var path = decodeURI(window.location.pathname);
                base && path.startsWith(base) && (path = path.slice(base.length));
                var e = (path || "/") + window.location.search + window.location.hash;
                return Object(c.c)(e)
            }

            function L(t, e) {
                return function(t, e) {
                    for (var r = new Array(t.length), i = 0; i < t.length; i++) "object" === Object(o.a)(t[i]) && (r[i] = new RegExp("^(?:" + t[i].pattern + ")$", X(e)));
                    return function(e, o) {
                        for (var path = "", data = e || {}, n = (o || {}).pretty ? B : encodeURIComponent, l = 0; l < t.length; l++) {
                            var d = t[l];
                            if ("string" != typeof d) {
                                var m = data[d.name || "pathMatch"],
                                    c = void 0;
                                if (null == m) {
                                    if (d.optional) {
                                        d.partial && (path += d.prefix);
                                        continue
                                    }
                                    throw new TypeError('Expected "' + d.name + '" to be defined')
                                }
                                if (Array.isArray(m)) {
                                    if (!d.repeat) throw new TypeError('Expected "' + d.name + '" to not repeat, but received `' + JSON.stringify(m) + "`");
                                    if (0 === m.length) {
                                        if (d.optional) continue;
                                        throw new TypeError('Expected "' + d.name + '" to not be empty')
                                    }
                                    for (var f = 0; f < m.length; f++) {
                                        if (c = n(m[f]), !r[l].test(c)) throw new TypeError('Expected all "' + d.name + '" to match "' + d.pattern + '", but received `' + JSON.stringify(c) + "`");
                                        path += (0 === f ? d.prefix : d.delimiter) + c
                                    }
                                } else {
                                    if (c = d.asterisk ? F(m) : n(m), !r[l].test(c)) throw new TypeError('Expected "' + d.name + '" to match "' + d.pattern + '", but received "' + c + '"');
                                    path += d.prefix + c
                                }
                            } else path += d
                        }
                        return path
                    }
                }(function(t, e) {
                    var r, o = [],
                        n = 0,
                        l = 0,
                        path = "",
                        d = e && e.delimiter || "/";
                    for (; null != (r = U.exec(t));) {
                        var m = r[0],
                            c = r[1],
                            f = r.index;
                        if (path += t.slice(l, f), l = f + m.length, c) path += c[1];
                        else {
                            var h = t[l],
                                x = r[2],
                                v = r[3],
                                w = r[4],
                                y = r[5],
                                k = r[6],
                                _ = r[7];
                            path && (o.push(path), path = "");
                            var C = null != x && null != h && h !== x,
                                j = "+" === k || "*" === k,
                                O = "?" === k || "*" === k,
                                $ = r[2] || d,
                                pattern = w || y;
                            o.push({
                                name: v || n++,
                                prefix: x || "",
                                delimiter: $,
                                optional: O,
                                repeat: j,
                                partial: C,
                                asterisk: Boolean(_),
                                pattern: pattern ? K(pattern) : _ ? ".*" : "[^" + H($) + "]+?"
                            })
                        }
                    }
                    l < t.length && (path += t.substr(l));
                    path && o.push(path);
                    return o
                }(t, e), e)
            }

            function I(t, e) {
                var r = {},
                    o = h(h({}, t), e);
                for (var n in o) String(t[n]) !== String(e[n]) && (r[n] = !0);
                return r
            }

            function D(t) {
                var e;
                if (t.message || "string" == typeof t) e = t.message || t;
                else try {
                    e = JSON.stringify(t, null, 2)
                } catch (r) {
                    e = "[".concat(t.constructor.name, "]")
                }
                return h(h({}, t), {}, {
                    message: e,
                    statusCode: t.statusCode || t.status || t.response && t.response.status || 500
                })
            }
            window.onNuxtReadyCbs = [], window.onNuxtReady = function(t) {
                window.onNuxtReadyCbs.push(t)
            };
            var U = new RegExp(["(\\\\.)", "([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))"].join("|"), "g");

            function B(t, e) {
                var r = e ? /[?#]/g : /[/?#]/g;
                return encodeURI(t).replace(r, (function(t) {
                    return "%" + t.charCodeAt(0).toString(16).toUpperCase()
                }))
            }

            function F(t) {
                return B(t, !0)
            }

            function H(t) {
                return t.replace(/([.+*?=^!:${}()[\]|/\\])/g, "\\$1")
            }

            function K(t) {
                return t.replace(/([=!:$/()])/g, "\\$1")
            }

            function X(t) {
                return t && t.sensitive ? "" : "i"
            }

            function J(t, e, r) {
                t.$options[e] || (t.$options[e] = []), t.$options[e].includes(r) || t.$options[e].push(r)
            }
            var Q = c.b,
                V = (c.e, c.a);

            function G(t) {
                try {
                    window.history.scrollRestoration = t
                } catch (t) {}
            }
        },
        103: function(t, e, r) {
            "use strict";
            t.exports = function(t) {
                var e = [];
                return e.toString = function() {
                    return this.map((function(e) {
                        var content = t(e);
                        return e[2] ? "@media ".concat(e[2], " {").concat(content, "}") : content
                    })).join("")
                }, e.i = function(t, r, o) {
                    "string" == typeof t && (t = [
                        [null, t, ""]
                    ]);
                    var n = {};
                    if (o)
                        for (var i = 0; i < this.length; i++) {
                            var l = this[i][0];
                            null != l && (n[l] = !0)
                        }
                    for (var d = 0; d < t.length; d++) {
                        var m = [].concat(t[d]);
                        o && n[m[0]] || (r && (m[2] ? m[2] = "".concat(r, " and ").concat(m[2]) : m[2] = r), e.push(m))
                    }
                }, e
            }
        },
        104: function(t, e, r) {
            t.exports = r.p + "img/logo.7605c1f.png"
        },
        105: function(t, e, r) {
            t.exports = r.p + "img/cover01.b1ed4c3.jpg"
        },
        106: function(t, e, r) {
            "use strict";

            function o(t, e) {
                for (var r = [], o = {}, i = 0; i < e.length; i++) {
                    var n = e[i],
                        l = n[0],
                        d = {
                            id: t + ":" + i,
                            css: n[1],
                            media: n[2],
                            sourceMap: n[3]
                        };
                    o[l] ? o[l].parts.push(d) : r.push(o[l] = {
                        id: l,
                        parts: [d]
                    })
                }
                return r
            }
            r.r(e), r.d(e, "default", (function() {
                return w
            }));
            var n = "undefined" != typeof document;
            if ("undefined" != typeof DEBUG && DEBUG && !n) throw new Error("vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.");
            var l = {},
                head = n && (document.head || document.getElementsByTagName("head")[0]),
                d = null,
                m = 0,
                c = !1,
                f = function() {},
                h = null,
                x = "data-vue-ssr-id",
                v = "undefined" != typeof navigator && /msie [6-9]\b/.test(navigator.userAgent.toLowerCase());

            function w(t, e, r, n) {
                c = r, h = n || {};
                var d = o(t, e);
                return y(d),
                    function(e) {
                        for (var r = [], i = 0; i < d.length; i++) {
                            var n = d[i];
                            (m = l[n.id]).refs--, r.push(m)
                        }
                        e ? y(d = o(t, e)) : d = [];
                        for (i = 0; i < r.length; i++) {
                            var m;
                            if (0 === (m = r[i]).refs) {
                                for (var c = 0; c < m.parts.length; c++) m.parts[c]();
                                delete l[m.id]
                            }
                        }
                    }
            }

            function y(t) {
                for (var i = 0; i < t.length; i++) {
                    var e = t[i],
                        r = l[e.id];
                    if (r) {
                        r.refs++;
                        for (var o = 0; o < r.parts.length; o++) r.parts[o](e.parts[o]);
                        for (; o < e.parts.length; o++) r.parts.push(_(e.parts[o]));
                        r.parts.length > e.parts.length && (r.parts.length = e.parts.length)
                    } else {
                        var n = [];
                        for (o = 0; o < e.parts.length; o++) n.push(_(e.parts[o]));
                        l[e.id] = {
                            id: e.id,
                            refs: 1,
                            parts: n
                        }
                    }
                }
            }

            function k() {
                var t = document.createElement("style");
                return t.type = "text/css", head.appendChild(t), t
            }

            function _(t) {
                var e, r, o = document.querySelector("style[" + x + '~="' + t.id + '"]');
                if (o) {
                    if (c) return f;
                    o.parentNode.removeChild(o)
                }
                if (v) {
                    var n = m++;
                    o = d || (d = k()), e = O.bind(null, o, n, !1), r = O.bind(null, o, n, !0)
                } else o = k(), e = $.bind(null, o), r = function() {
                    o.parentNode.removeChild(o)
                };
                return e(t),
                    function(o) {
                        if (o) {
                            if (o.css === t.css && o.media === t.media && o.sourceMap === t.sourceMap) return;
                            e(t = o)
                        } else r()
                    }
            }
            var C, j = (C = [], function(t, e) {
                return C[t] = e, C.filter(Boolean).join("\n")
            });

            function O(t, e, r, o) {
                var n = r ? "" : o.css;
                if (t.styleSheet) t.styleSheet.cssText = j(e, n);
                else {
                    var l = document.createTextNode(n),
                        d = t.childNodes;
                    d[e] && t.removeChild(d[e]), d.length ? t.insertBefore(l, d[e]) : t.appendChild(l)
                }
            }

            function $(t, e) {
                var r = e.css,
                    o = e.media,
                    n = e.sourceMap;
                if (o && t.setAttribute("media", o), h.ssrId && t.setAttribute(x, e.id), n && (r += "\n/*# sourceURL=" + n.sources[0] + " */", r += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(n)))) + " */"), t.styleSheet) t.styleSheet.cssText = r;
                else {
                    for (; t.firstChild;) t.removeChild(t.firstChild);
                    t.appendChild(document.createTextNode(r))
                }
            }
        },
        111: function(t, e, r) {
            "use strict";
            r(32), r(50), r(51), r(43), r(52), r(130), r(54), r(53), r(40), r(20), r(27), r(33), r(133), r(41), r(39), r(42), r(84);
            var o = r(1);

            function n(t, e) {
                var r = "undefined" != typeof Symbol && t[Symbol.iterator] || t["@@iterator"];
                if (!r) {
                    if (Array.isArray(t) || (r = function(t, e) {
                            if (!t) return;
                            if ("string" == typeof t) return l(t, e);
                            var r = Object.prototype.toString.call(t).slice(8, -1);
                            "Object" === r && t.constructor && (r = t.constructor.name);
                            if ("Map" === r || "Set" === r) return Array.from(t);
                            if ("Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return l(t, e)
                        }(t)) || e && t && "number" == typeof t.length) {
                        r && (t = r);
                        var i = 0,
                            o = function() {};
                        return {
                            s: o,
                            n: function() {
                                return i >= t.length ? {
                                    done: !0
                                } : {
                                    done: !1,
                                    value: t[i++]
                                }
                            },
                            e: function(t) {
                                throw t
                            },
                            f: o
                        }
                    }
                    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }
                var n, d = !0,
                    m = !1;
                return {
                    s: function() {
                        r = r.call(t)
                    },
                    n: function() {
                        var t = r.next();
                        return d = t.done, t
                    },
                    e: function(t) {
                        m = !0, n = t
                    },
                    f: function() {
                        try {
                            d || null == r.return || r.return()
                        } finally {
                            if (m) throw n
                        }
                    }
                }
            }

            function l(t, e) {
                (null == e || e > t.length) && (e = t.length);
                for (var i = 0, r = new Array(e); i < e; i++) r[i] = t[i];
                return r
            }
            var d = window.requestIdleCallback || function(t) {
                    var e = Date.now();
                    return setTimeout((function() {
                        t({
                            didTimeout: !1,
                            timeRemaining: function() {
                                return Math.max(0, 50 - (Date.now() - e))
                            }
                        })
                    }), 1)
                },
                m = window.cancelIdleCallback || function(t) {
                    clearTimeout(t)
                },
                c = window.IntersectionObserver && new window.IntersectionObserver((function(t) {
                    t.forEach((function(t) {
                        var e = t.intersectionRatio,
                            link = t.target;
                        e <= 0 || !link.__prefetch || link.__prefetch()
                    }))
                }));
            e.a = {
                name: "NuxtLink",
                extends: o.a.component("RouterLink"),
                props: {
                    prefetch: {
                        type: Boolean,
                        default: !0
                    },
                    noPrefetch: {
                        type: Boolean,
                        default: !1
                    }
                },
                mounted: function() {
                    this.prefetch && !this.noPrefetch && (this.handleId = d(this.observe, {
                        timeout: 2e3
                    }))
                },
                beforeDestroy: function() {
                    m(this.handleId), this.__observed && (c.unobserve(this.$el), delete this.$el.__prefetch)
                },
                methods: {
                    observe: function() {
                        c && this.shouldPrefetch() && (this.$el.__prefetch = this.prefetchLink.bind(this), c.observe(this.$el), this.__observed = !0)
                    },
                    shouldPrefetch: function() {
                        return this.getPrefetchComponents().length > 0
                    },
                    canPrefetch: function() {
                        var t = navigator.connection;
                        return !(this.$nuxt.isOffline || t && ((t.effectiveType || "").includes("2g") || t.saveData))
                    },
                    getPrefetchComponents: function() {
                        return this.$router.resolve(this.to, this.$route, this.append).resolved.matched.map((function(t) {
                            return t.components.default
                        })).filter((function(t) {
                            return "function" == typeof t && !t.options && !t.__prefetched
                        }))
                    },
                    prefetchLink: function() {
                        if (this.canPrefetch()) {
                            c.unobserve(this.$el);
                            var t, e = n(this.getPrefetchComponents());
                            try {
                                for (e.s(); !(t = e.n()).done;) {
                                    var r = t.value,
                                        o = r();
                                    o instanceof Promise && o.catch((function() {})), r.__prefetched = !0
                                }
                            } catch (t) {
                                e.e(t)
                            } finally {
                                e.f()
                            }
                        }
                    }
                }
            }
        },
        138: function(t, e, r) {
            "use strict";
            var o = {};
            o.game = r(246), o.game = o.game.default || o.game, e.a = o
        },
        139: function(t, e, r) {
            "use strict";
            var o = {
                name: "ClientOnly",
                functional: !0,
                props: {
                    placeholder: String,
                    placeholderTag: {
                        type: String,
                        default: "div"
                    }
                },
                render: function(t, e) {
                    var r = e.parent,
                        o = e.slots,
                        n = e.props,
                        l = o(),
                        d = l.default;
                    void 0 === d && (d = []);
                    var m = l.placeholder;
                    return r._isMounted ? d : (r.$once("hook:mounted", (function() {
                        r.$forceUpdate()
                    })), n.placeholderTag && (n.placeholder || m) ? t(n.placeholderTag, {
                        class: ["client-only-placeholder"]
                    }, n.placeholder || m) : d.length > 0 ? d.map((function() {
                        return t(!1)
                    })) : t(!1))
                }
            };
            t.exports = o
        },
        190: function(t, e, r) {
            var content = r(271);
            content.__esModule && (content = content.default), "string" == typeof content && (content = [
                [t.i, content, ""]
            ]), content.locals && (t.exports = content.locals);
            (0, r(106).default)("df4d8422", content, !0, {
                sourceMap: !1
            })
        },
        191: function(t, e, r) {
            var content = r(273);
            content.__esModule && (content = content.default), "string" == typeof content && (content = [
                [t.i, content, ""]
            ]), content.locals && (t.exports = content.locals);
            (0, r(106).default)("1d48dc9a", content, !0, {
                sourceMap: !1
            })
        },
        200: function(t, e, r) {
            "use strict";

            function o(t, e) {
                return e = e || {}, new Promise((function(r, o) {
                    var s = new XMLHttpRequest,
                        n = [],
                        u = {},
                        a = function t() {
                            return {
                                ok: 2 == (s.status / 100 | 0),
                                statusText: s.statusText,
                                status: s.status,
                                url: s.responseURL,
                                text: function() {
                                    return Promise.resolve(s.responseText)
                                },
                                json: function() {
                                    return Promise.resolve(s.responseText).then(JSON.parse)
                                },
                                blob: function() {
                                    return Promise.resolve(new Blob([s.response]))
                                },
                                clone: t,
                                headers: {
                                    keys: function() {
                                        return n
                                    },
                                    entries: function() {
                                        return n.map((function(t) {
                                            return [t, s.getResponseHeader(t)]
                                        }))
                                    },
                                    get: function(t) {
                                        return s.getResponseHeader(t)
                                    },
                                    has: function(t) {
                                        return null != s.getResponseHeader(t)
                                    }
                                }
                            }
                        };
                    for (var i in s.open(e.method || "get", t, !0), s.onload = function() {
                            s.getAllResponseHeaders().toLowerCase().replace(/^(.+?):/gm, (function(t, e) {
                                u[e] || n.push(u[e] = e)
                            })), r(a())
                        }, s.onerror = o, s.withCredentials = "include" == e.credentials, e.headers) s.setRequestHeader(i, e.headers[i]);
                    s.send(e.body || null)
                }))
            }
            r.d(e, "a", (function() {
                return o
            }))
        },
        202: function(t, e, r) {
            "use strict";
            var o = function(t) {
                return function(t) {
                    return !!t && "object" == typeof t
                }(t) && ! function(t) {
                    var e = Object.prototype.toString.call(t);
                    return "[object RegExp]" === e || "[object Date]" === e || function(t) {
                        return t.$$typeof === n
                    }(t)
                }(t)
            };
            var n = "function" == typeof Symbol && Symbol.for ? Symbol.for("react.element") : 60103;

            function l(t, e) {
                return !1 !== e.clone && e.isMergeableObject(t) ? h((r = t, Array.isArray(r) ? [] : {}), t, e) : t;
                var r
            }

            function d(t, source, e) {
                return t.concat(source).map((function(element) {
                    return l(element, e)
                }))
            }

            function m(t) {
                return Object.keys(t).concat(function(t) {
                    return Object.getOwnPropertySymbols ? Object.getOwnPropertySymbols(t).filter((function(symbol) {
                        return Object.propertyIsEnumerable.call(t, symbol)
                    })) : []
                }(t))
            }

            function c(object, t) {
                try {
                    return t in object
                } catch (t) {
                    return !1
                }
            }

            function f(t, source, e) {
                var r = {};
                return e.isMergeableObject(t) && m(t).forEach((function(o) {
                    r[o] = l(t[o], e)
                })), m(source).forEach((function(o) {
                    (function(t, e) {
                        return c(t, e) && !(Object.hasOwnProperty.call(t, e) && Object.propertyIsEnumerable.call(t, e))
                    })(t, o) || (c(t, o) && e.isMergeableObject(source[o]) ? r[o] = function(t, e) {
                        if (!e.customMerge) return h;
                        var r = e.customMerge(t);
                        return "function" == typeof r ? r : h
                    }(o, e)(t[o], source[o], e) : r[o] = l(source[o], e))
                })), r
            }

            function h(t, source, e) {
                (e = e || {}).arrayMerge = e.arrayMerge || d, e.isMergeableObject = e.isMergeableObject || o, e.cloneUnlessOtherwiseSpecified = l;
                var r = Array.isArray(source);
                return r === Array.isArray(t) ? r ? e.arrayMerge(t, source, e) : f(t, source, e) : l(source, e)
            }
            h.all = function(t, e) {
                if (!Array.isArray(t)) throw new Error("first argument should be an array");
                return t.reduce((function(t, r) {
                    return h(t, r, e)
                }), {})
            };
            var x = h;
            t.exports = x
        },
        203: function(t, e, r) {
            "use strict";
            var o = r(11),
                n = (r(49), r(20), r(84), r(1)),
                l = r(0),
                d = window.__NUXT__;

            function m() {
                if (!this._hydrated) return this.$fetch()
            }

            function c() {
                if ((t = this).$vnode && t.$vnode.elm && t.$vnode.elm.dataset && t.$vnode.elm.dataset.fetchKey) {
                    var t;
                    this._hydrated = !0, this._fetchKey = this.$vnode.elm.dataset.fetchKey;
                    var data = d.fetch[this._fetchKey];
                    if (data && data._error) this.$fetchState.error = data._error;
                    else
                        for (var e in data) n.a.set(this.$data, e, data[e])
                }
            }

            function f() {
                var t = this;
                return this._fetchPromise || (this._fetchPromise = h.call(this).then((function() {
                    delete t._fetchPromise
                }))), this._fetchPromise
            }

            function h() {
                return x.apply(this, arguments)
            }

            function x() {
                return (x = Object(o.a)(regeneratorRuntime.mark((function t() {
                    var e, r, o, n = this;
                    return regeneratorRuntime.wrap((function(t) {
                        for (;;) switch (t.prev = t.next) {
                            case 0:
                                return this.$nuxt.nbFetching++, this.$fetchState.pending = !0, this.$fetchState.error = null, this._hydrated = !1, e = null, r = Date.now(), t.prev = 6, t.next = 9, this.$options.fetch.call(this);
                            case 9:
                                t.next = 15;
                                break;
                            case 11:
                                t.prev = 11, t.t0 = t.catch(6), e = Object(l.p)(t.t0);
                            case 15:
                                if (!((o = this._fetchDelay - (Date.now() - r)) > 0)) {
                                    t.next = 19;
                                    break
                                }
                                return t.next = 19, new Promise((function(t) {
                                    return setTimeout(t, o)
                                }));
                            case 19:
                                this.$fetchState.error = e, this.$fetchState.pending = !1, this.$fetchState.timestamp = Date.now(), this.$nextTick((function() {
                                    return n.$nuxt.nbFetching--
                                }));
                            case 23:
                            case "end":
                                return t.stop()
                        }
                    }), t, this, [
                        [6, 11]
                    ])
                })))).apply(this, arguments)
            }
            e.a = {
                beforeCreate: function() {
                    Object(l.l)(this) && (this._fetchDelay = "number" == typeof this.$options.fetchDelay ? this.$options.fetchDelay : 200, n.a.util.defineReactive(this, "$fetchState", {
                        pending: !1,
                        error: null,
                        timestamp: Date.now()
                    }), this.$fetch = f.bind(this), Object(l.a)(this, "created", c), Object(l.a)(this, "beforeMount", m))
                }
            }
        },
        205: function(t, e, r) {
            t.exports = r(206)
        },
        206: function(t, e, r) {
            "use strict";
            r.r(e),
                function(t) {
                    var e = r(15),
                        o = r(11),
                        n = (r(112), r(214), r(227), r(229), r(49), r(32), r(50), r(51), r(100), r(43), r(52), r(130), r(54), r(53), r(40), r(65), r(20), r(27), r(33), r(133), r(41), r(39), r(42), r(84), r(1)),
                        l = r(200),
                        d = r(138),
                        m = r(0),
                        c = r(31),
                        f = r(203),
                        h = r(111);

                    function x(t, e) {
                        var r = "undefined" != typeof Symbol && t[Symbol.iterator] || t["@@iterator"];
                        if (!r) {
                            if (Array.isArray(t) || (r = function(t, e) {
                                    if (!t) return;
                                    if ("string" == typeof t) return v(t, e);
                                    var r = Object.prototype.toString.call(t).slice(8, -1);
                                    "Object" === r && t.constructor && (r = t.constructor.name);
                                    if ("Map" === r || "Set" === r) return Array.from(t);
                                    if ("Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return v(t, e)
                                }(t)) || e && t && "number" == typeof t.length) {
                                r && (t = r);
                                var i = 0,
                                    o = function() {};
                                return {
                                    s: o,
                                    n: function() {
                                        return i >= t.length ? {
                                            done: !0
                                        } : {
                                            done: !1,
                                            value: t[i++]
                                        }
                                    },
                                    e: function(t) {
                                        throw t
                                    },
                                    f: o
                                }
                            }
                            throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                        }
                        var n, l = !0,
                            d = !1;
                        return {
                            s: function() {
                                r = r.call(t)
                            },
                            n: function() {
                                var t = r.next();
                                return l = t.done, t
                            },
                            e: function(t) {
                                d = !0, n = t
                            },
                            f: function() {
                                try {
                                    l || null == r.return || r.return()
                                } finally {
                                    if (d) throw n
                                }
                            }
                        }
                    }

                    function v(t, e) {
                        (null == e || e > t.length) && (e = t.length);
                        for (var i = 0, r = new Array(e); i < e; i++) r[i] = t[i];
                        return r
                    }
                    n.a.__nuxt__fetch__mixin__ || (n.a.mixin(f.a), n.a.__nuxt__fetch__mixin__ = !0), n.a.component(h.a.name, h.a), n.a.component("NLink", h.a), t.fetch || (t.fetch = l.a);
                    var w, y, k = [],
                        _ = window.__NUXT__ || {},
                        C = _.config || {};
                    C._app && (r.p = Object(m.v)(C._app.cdnURL, C._app.assetsPath)), Object.assign(n.a.config, {
                        silent: !0,
                        performance: !1
                    });
                    var j = n.a.config.errorHandler || console.error;

                    function O(t, e, r) {
                        for (var o = function(component) {
                                var t = function(component, t) {
                                    if (!component || !component.options || !component.options[t]) return {};
                                    var option = component.options[t];
                                    if ("function" == typeof option) {
                                        for (var e = arguments.length, r = new Array(e > 2 ? e - 2 : 0), o = 2; o < e; o++) r[o - 2] = arguments[o];
                                        return option.apply(void 0, r)
                                    }
                                    return option
                                }(component, "transition", e, r) || {};
                                return "string" == typeof t ? {
                                    name: t
                                } : t
                            }, n = r ? Object(m.g)(r) : [], l = Math.max(t.length, n.length), d = [], c = function() {
                                var e = Object.assign({}, o(t[i])),
                                    r = Object.assign({}, o(n[i]));
                                Object.keys(e).filter((function(t) {
                                    return void 0 !== e[t] && !t.toLowerCase().includes("leave")
                                })).forEach((function(t) {
                                    r[t] = e[t]
                                })), d.push(r)
                            }, i = 0; i < l; i++) c();
                        return d
                    }

                    function $(t, e, r) {
                        return z.apply(this, arguments)
                    }

                    function z() {
                        return (z = Object(o.a)(regeneratorRuntime.mark((function t(e, r, o) {
                            var n, l, d, c, f = this;
                            return regeneratorRuntime.wrap((function(t) {
                                for (;;) switch (t.prev = t.next) {
                                    case 0:
                                        if (this._routeChanged = Boolean(w.nuxt.err) || r.name !== e.name, this._paramChanged = !this._routeChanged && r.path !== e.path, this._queryChanged = !this._paramChanged && r.fullPath !== e.fullPath, this._diffQuery = this._queryChanged ? Object(m.i)(e.query, r.query) : [], (this._routeChanged || this._paramChanged) && this.$loading.start && !this.$loading.manual && this.$loading.start(), t.prev = 5, !this._queryChanged) {
                                            t.next = 12;
                                            break
                                        }
                                        return t.next = 9, Object(m.r)(e, (function(t, e) {
                                            return {
                                                Component: t,
                                                instance: e
                                            }
                                        }));
                                    case 9:
                                        n = t.sent, n.some((function(t) {
                                            var o = t.Component,
                                                n = t.instance,
                                                l = o.options.watchQuery;
                                            return !0 === l || (Array.isArray(l) ? l.some((function(t) {
                                                return f._diffQuery[t]
                                            })) : "function" == typeof l && l.apply(n, [e.query, r.query]))
                                        })) && this.$loading.start && !this.$loading.manual && this.$loading.start();
                                    case 12:
                                        o(), t.next = 26;
                                        break;
                                    case 15:
                                        if (t.prev = 15, t.t0 = t.catch(5), l = t.t0 || {}, d = l.statusCode || l.status || l.response && l.response.status || 500, c = l.message || "", !/^Loading( CSS)? chunk (\d)+ failed\./.test(c)) {
                                            t.next = 23;
                                            break
                                        }
                                        return window.location.reload(!0), t.abrupt("return");
                                    case 23:
                                        this.error({
                                            statusCode: d,
                                            message: c
                                        }), this.$nuxt.$emit("routeChanged", e, r, l), o();
                                    case 26:
                                    case "end":
                                        return t.stop()
                                }
                            }), t, this, [
                                [5, 15]
                            ])
                        })))).apply(this, arguments)
                    }

                    function E(t, e) {
                        return _.serverRendered && e && Object(m.b)(t, e), t._Ctor = t, t
                    }

                    function S(t, e, r, o) {
                        var n = this,
                            l = [],
                            c = !1;
                        if (void 0 !== r && (l = [], (r = Object(m.s)(r)).options.middleware && (l = l.concat(r.options.middleware)), t.forEach((function(t) {
                                t.options.middleware && (l = l.concat(t.options.middleware))
                            }))), l = l.map((function(t) {
                                return "function" == typeof t ? t : ("function" != typeof d.a[t] && (c = !0, n.error({
                                    statusCode: 500,
                                    message: "Unknown middleware " + t
                                })), d.a[t])
                            })), !c) return Object(m.o)(l, e, o)
                    }

                    function R(t, e, r, o) {
                        return A.apply(this, arguments)
                    }

                    function A() {
                        return A = Object(o.a)(regeneratorRuntime.mark((function t(e, r, n, l) {
                            var d, f, h, v, y, _, C, j, $, z, E, R, A, T, P, M = this;
                            return regeneratorRuntime.wrap((function(t) {
                                for (;;) switch (t.prev = t.next) {
                                    case 0:
                                        if (!1 !== this._routeChanged || !1 !== this._paramChanged || !1 !== this._queryChanged) {
                                            t.next = 2;
                                            break
                                        }
                                        return t.abrupt("return", n());
                                    case 2:
                                        return !1, e === r ? (k = [], !0) : (d = [], k = Object(m.g)(r, d).map((function(t, i) {
                                            return Object(m.c)(r.matched[d[i]].path)(r.params)
                                        }))), f = !1, h = function(path) {
                                            r.path === path.path && M.$loading.finish && M.$loading.finish(), r.path !== path.path && M.$loading.pause && M.$loading.pause(), f || (f = !0, n(path))
                                        }, t.next = 8, Object(m.t)(w, {
                                            route: e,
                                            from: r,
                                            error: function(t) {
                                                l.aborted || w.nuxt.error.call(M, t)
                                            },
                                            next: h.bind(this)
                                        });
                                    case 8:
                                        if (this._dateLastError = w.nuxt.dateErr, this._hadError = Boolean(w.nuxt.err), v = [], (y = Object(m.g)(e, v)).length) {
                                            t.next = 33;
                                            break
                                        }
                                        return t.next = 15, S.call(this, y, w.context, void 0, l);
                                    case 15:
                                        if (!f) {
                                            t.next = 17;
                                            break
                                        }
                                        return t.abrupt("return");
                                    case 17:
                                        if (!l.aborted) {
                                            t.next = 20;
                                            break
                                        }
                                        return n(!1), t.abrupt("return");
                                    case 20:
                                        return _ = (c.a.options || c.a).layout, t.next = 23, this.loadLayout("function" == typeof _ ? _.call(c.a, w.context) : _);
                                    case 23:
                                        return C = t.sent, t.next = 26, S.call(this, y, w.context, C, l);
                                    case 26:
                                        if (!f) {
                                            t.next = 28;
                                            break
                                        }
                                        return t.abrupt("return");
                                    case 28:
                                        if (!l.aborted) {
                                            t.next = 31;
                                            break
                                        }
                                        return n(!1), t.abrupt("return");
                                    case 31:
                                        return w.context.error({
                                            statusCode: 404,
                                            message: "This page could not be found"
                                        }), t.abrupt("return", n());
                                    case 33:
                                        return y.forEach((function(t) {
                                            t._Ctor && t._Ctor.options && (t.options.asyncData = t._Ctor.options.asyncData, t.options.fetch = t._Ctor.options.fetch)
                                        })), this.setTransitions(O(y, e, r)), t.prev = 35, t.next = 38, S.call(this, y, w.context, void 0, l);
                                    case 38:
                                        if (!f) {
                                            t.next = 40;
                                            break
                                        }
                                        return t.abrupt("return");
                                    case 40:
                                        if (!l.aborted) {
                                            t.next = 43;
                                            break
                                        }
                                        return n(!1), t.abrupt("return");
                                    case 43:
                                        if (!w.context._errored) {
                                            t.next = 45;
                                            break
                                        }
                                        return t.abrupt("return", n());
                                    case 45:
                                        return "function" == typeof(j = y[0].options.layout) && (j = j(w.context)), t.next = 49, this.loadLayout(j);
                                    case 49:
                                        return j = t.sent, t.next = 52, S.call(this, y, w.context, j, l);
                                    case 52:
                                        if (!f) {
                                            t.next = 54;
                                            break
                                        }
                                        return t.abrupt("return");
                                    case 54:
                                        if (!l.aborted) {
                                            t.next = 57;
                                            break
                                        }
                                        return n(!1), t.abrupt("return");
                                    case 57:
                                        if (!w.context._errored) {
                                            t.next = 59;
                                            break
                                        }
                                        return t.abrupt("return", n());
                                    case 59:
                                        $ = !0, t.prev = 60, z = x(y), t.prev = 62, z.s();
                                    case 64:
                                        if ((E = z.n()).done) {
                                            t.next = 75;
                                            break
                                        }
                                        if ("function" == typeof(R = E.value).options.validate) {
                                            t.next = 68;
                                            break
                                        }
                                        return t.abrupt("continue", 73);
                                    case 68:
                                        return t.next = 70, R.options.validate(w.context);
                                    case 70:
                                        if ($ = t.sent) {
                                            t.next = 73;
                                            break
                                        }
                                        return t.abrupt("break", 75);
                                    case 73:
                                        t.next = 64;
                                        break;
                                    case 75:
                                        t.next = 80;
                                        break;
                                    case 77:
                                        t.prev = 77, t.t0 = t.catch(62), z.e(t.t0);
                                    case 80:
                                        return t.prev = 80, z.f(), t.finish(80);
                                    case 83:
                                        t.next = 89;
                                        break;
                                    case 85:
                                        return t.prev = 85, t.t1 = t.catch(60), this.error({
                                            statusCode: t.t1.statusCode || "500",
                                            message: t.t1.message
                                        }), t.abrupt("return", n());
                                    case 89:
                                        if ($) {
                                            t.next = 92;
                                            break
                                        }
                                        return this.error({
                                            statusCode: 404,
                                            message: "This page could not be found"
                                        }), t.abrupt("return", n());
                                    case 92:
                                        return t.next = 94, Promise.all(y.map(function() {
                                            var t = Object(o.a)(regeneratorRuntime.mark((function t(o, i) {
                                                var n, l, d, c, f, h, x, y, p;
                                                return regeneratorRuntime.wrap((function(t) {
                                                    for (;;) switch (t.prev = t.next) {
                                                        case 0:
                                                            if (o._path = Object(m.c)(e.matched[v[i]].path)(e.params), o._dataRefresh = !1, n = o._path !== k[i], M._routeChanged && n ? o._dataRefresh = !0 : M._paramChanged && n ? (l = o.options.watchParam, o._dataRefresh = !1 !== l) : M._queryChanged && (!0 === (d = o.options.watchQuery) ? o._dataRefresh = !0 : Array.isArray(d) ? o._dataRefresh = d.some((function(t) {
                                                                    return M._diffQuery[t]
                                                                })) : "function" == typeof d && (A || (A = Object(m.h)(e)), o._dataRefresh = d.apply(A[i], [e.query, r.query]))), M._hadError || !M._isMounted || o._dataRefresh) {
                                                                t.next = 6;
                                                                break
                                                            }
                                                            return t.abrupt("return");
                                                        case 6:
                                                            return c = [], f = o.options.asyncData && "function" == typeof o.options.asyncData, h = Boolean(o.options.fetch) && o.options.fetch.length, x = f && h ? 30 : 45, f && ((y = Object(m.q)(o.options.asyncData, w.context)).then((function(t) {
                                                                Object(m.b)(o, t), M.$loading.increase && M.$loading.increase(x)
                                                            })), c.push(y)), M.$loading.manual = !1 === o.options.loading, h && ((p = o.options.fetch(w.context)) && (p instanceof Promise || "function" == typeof p.then) || (p = Promise.resolve(p)), p.then((function(t) {
                                                                M.$loading.increase && M.$loading.increase(x)
                                                            })), c.push(p)), t.abrupt("return", Promise.all(c));
                                                        case 14:
                                                        case "end":
                                                            return t.stop()
                                                    }
                                                }), t)
                                            })));
                                            return function(e, r) {
                                                return t.apply(this, arguments)
                                            }
                                        }()));
                                    case 94:
                                        if (f) {
                                            t.next = 100;
                                            break
                                        }
                                        if (this.$loading.finish && !this.$loading.manual && this.$loading.finish(), !l.aborted) {
                                            t.next = 99;
                                            break
                                        }
                                        return n(!1), t.abrupt("return");
                                    case 99:
                                        n();
                                    case 100:
                                        t.next = 119;
                                        break;
                                    case 102:
                                        if (t.prev = 102, t.t2 = t.catch(35), !l.aborted) {
                                            t.next = 107;
                                            break
                                        }
                                        return n(!1), t.abrupt("return");
                                    case 107:
                                        if ("ERR_REDIRECT" !== (T = t.t2 || {}).message) {
                                            t.next = 110;
                                            break
                                        }
                                        return t.abrupt("return", this.$nuxt.$emit("routeChanged", e, r, T));
                                    case 110:
                                        return k = [], Object(m.k)(T), "function" == typeof(P = (c.a.options || c.a).layout) && (P = P(w.context)), t.next = 116, this.loadLayout(P);
                                    case 116:
                                        this.error(T), this.$nuxt.$emit("routeChanged", e, r, T), n();
                                    case 119:
                                    case "end":
                                        return t.stop()
                                }
                            }), t, this, [
                                [35, 102],
                                [60, 85],
                                [62, 77, 80, 83]
                            ])
                        }))), A.apply(this, arguments)
                    }

                    function T(t, r) {
                        Object(m.d)(t, (function(t, r, o, l) {
                            return "object" !== Object(e.a)(t) || t.options || ((t = n.a.extend(t))._Ctor = t, o.components[l] = t), t
                        }))
                    }

                    function P(t) {
                        var e = Boolean(this.$options.nuxt.err);
                        this._hadError && this._dateLastError === this.$options.nuxt.dateErr && (e = !1);
                        var r = e ? (c.a.options || c.a).layout : t.matched[0].components.default.options.layout;
                        "function" == typeof r && (r = r(w.context)), this.setLayout(r)
                    }

                    function M(t) {
                        t._hadError && t._dateLastError === t.$options.nuxt.dateErr && t.error()
                    }

                    function N(t, e) {
                        var r = this;
                        if (!1 !== this._routeChanged || !1 !== this._paramChanged || !1 !== this._queryChanged) {
                            var o = Object(m.h)(t),
                                l = Object(m.g)(t),
                                d = !1;
                            n.a.nextTick((function() {
                                o.forEach((function(t, i) {
                                    if (t && !t._isDestroyed && t.constructor._dataRefresh && l[i] === t.constructor && !0 !== t.$vnode.data.keepAlive && "function" == typeof t.constructor.options.data) {
                                        var e = t.constructor.options.data.call(t);
                                        for (var r in e) n.a.set(t.$data, r, e[r]);
                                        d = !0
                                    }
                                })), d && window.$nuxt.$nextTick((function() {
                                    window.$nuxt.$emit("triggerScroll")
                                })), M(r)
                            }))
                        }
                    }

                    function L(t) {
                        window.onNuxtReadyCbs.forEach((function(e) {
                            "function" == typeof e && e(t)
                        })), "function" == typeof window._onNuxtLoaded && window._onNuxtLoaded(t), y.afterEach((function(e, r) {
                            n.a.nextTick((function() {
                                return t.$nuxt.$emit("routeChanged", e, r)
                            }))
                        }))
                    }

                    function I() {
                        return I = Object(o.a)(regeneratorRuntime.mark((function t(e) {
                            var r, l, d, c, f, h, x;
                            return regeneratorRuntime.wrap((function(t) {
                                for (;;) switch (t.prev = t.next) {
                                    case 0:
                                        return w = e.app, y = e.router, e.store, r = new n.a(w), l = _.layout || "default", t.next = 7, r.loadLayout(l);
                                    case 7:
                                        return r.setLayout(l), d = function() {
                                            r.$mount("#__nuxt"), y.afterEach(T), y.afterEach(P.bind(r)), y.afterEach(N.bind(r)), n.a.nextTick((function() {
                                                L(r)
                                            }))
                                        }, t.next = 11, Promise.all((v = w.context.route, Object(m.d)(v, function() {
                                            var t = Object(o.a)(regeneratorRuntime.mark((function t(e, r, o, n, l) {
                                                var d;
                                                return regeneratorRuntime.wrap((function(t) {
                                                    for (;;) switch (t.prev = t.next) {
                                                        case 0:
                                                            if ("function" != typeof e || e.options) {
                                                                t.next = 4;
                                                                break
                                                            }
                                                            return t.next = 3, e();
                                                        case 3:
                                                            e = t.sent;
                                                        case 4:
                                                            return d = E(Object(m.s)(e), _.data ? _.data[l] : null), o.components[n] = d, t.abrupt("return", d);
                                                        case 7:
                                                        case "end":
                                                            return t.stop()
                                                    }
                                                }), t)
                                            })));
                                            return function(e, r, o, n, l) {
                                                return t.apply(this, arguments)
                                            }
                                        }())));
                                    case 11:
                                        if (c = t.sent, r.setTransitions = r.$options.nuxt.setTransitions.bind(r), c.length && (r.setTransitions(O(c, y.currentRoute)), k = y.currentRoute.matched.map((function(t) {
                                                return Object(m.c)(t.path)(y.currentRoute.params)
                                            }))), r.$loading = {}, _.error && r.error(_.error), y.beforeEach($.bind(r)), f = null, h = R.bind(r), y.beforeEach((function(t, e, r) {
                                                f && (f.aborted = !0), h(t, e, r, f = {
                                                    aborted: !1
                                                })
                                            })), !_.serverRendered || !Object(m.n)(_.routePath, r.context.route.path)) {
                                            t.next = 22;
                                            break
                                        }
                                        return t.abrupt("return", d());
                                    case 22:
                                        return x = function() {
                                            T(y.currentRoute, y.currentRoute), P.call(r, y.currentRoute), M(r), d()
                                        }, t.next = 25, new Promise((function(t) {
                                            return setTimeout(t, 0)
                                        }));
                                    case 25:
                                        R.call(r, y.currentRoute, y.currentRoute, (function(path) {
                                            if (path) {
                                                var t = y.afterEach((function(e, r) {
                                                    t(), x()
                                                }));
                                                y.push(path, void 0, (function(t) {
                                                    t && j(t)
                                                }))
                                            } else x()
                                        }), {
                                            aborted: !1
                                        });
                                    case 26:
                                    case "end":
                                        return t.stop()
                                }
                                var v
                            }), t)
                        }))), I.apply(this, arguments)
                    }
                    Object(c.b)(null, _.config).then((function(t) {
                        return I.apply(this, arguments)
                    })).catch(j)
                }.call(this, r(44))
        },
        246: function(t, e, r) {
            "use strict";
            r.r(e), e.default = function(t) {
                if (!t.store.state.user) return t.redirect("/game/login")
            }
        },
        270: function(t, e, r) {
            "use strict";
            r(190)
        },
        271: function(t, e, r) {
            var o = r(103)((function(i) {
                return i[1]
            }));
            o.push([t.i, ".__nuxt-error-page{align-items:center;background:#f7f8fb;color:#47494e;display:flex;flex-direction:column;font-family:sans-serif;font-weight:100!important;justify-content:center;padding:1rem;text-align:center;-ms-text-size-adjust:100%;-webkit-text-size-adjust:100%;-webkit-font-smoothing:antialiased;bottom:0;left:0;position:absolute;right:0;top:0}.__nuxt-error-page .error{max-width:450px}.__nuxt-error-page .title{color:#47494e;font-size:1.5rem;margin-bottom:8px;margin-top:15px}.__nuxt-error-page .description{color:#7f828b;line-height:21px;margin-bottom:10px}.__nuxt-error-page a{color:#7f828b!important;-webkit-text-decoration:none;text-decoration:none}.__nuxt-error-page .logo{bottom:12px;left:12px;position:fixed}", ""]), o.locals = {}, t.exports = o
        },
        272: function(t, e, r) {
            "use strict";
            r(191)
        },
        273: function(t, e, r) {
            var o = r(103)((function(i) {
                return i[1]
            }));
            o.push([t.i, ".nuxt-progress{background-color:#000;height:2px;left:0;opacity:1;position:fixed;right:0;top:0;transition:width .1s,opacity .4s;width:0;z-index:999999}.nuxt-progress.nuxt-progress-notransition{transition:none}.nuxt-progress-failed{background-color:red}", ""]), o.locals = {}, t.exports = o
        },
        274: function(t, e, r) {
            var content = r(275);
            content.__esModule && (content = content.default), "string" == typeof content && (content = [
                [t.i, content, ""]
            ]), content.locals && (t.exports = content.locals);
            (0, r(106).default)("084cc1ec", content, !0, {
                sourceMap: !1
            })
        },
        275: function(t, e, r) {
            var o = r(103)((function(i) {
                return i[1]
            }));
            o.push([t.i, "/*!\n * Bootstrap v4.4.1 (https://getbootstrap.com/)\n * Copyright 2011-2019 The Bootstrap Authors\n * Copyright 2011-2019 Twitter, Inc.\n * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)\n */:root{--blue:#007bff;--indigo:#6610f2;--purple:#6f42c1;--pink:#e83e8c;--red:#dc3545;--orange:#fd7e14;--yellow:#ffc107;--green:#28a745;--teal:#20c997;--cyan:#17a2b8;--white:#fff;--gray:#6c757d;--gray-dark:#343a40;--primary:#007bff;--secondary:#6c757d;--success:#28a745;--info:#17a2b8;--warning:#ffc107;--danger:#dc3545;--light:#f8f9fa;--dark:#343a40;--breakpoint-xs:0;--breakpoint-sm:576px;--breakpoint-md:768px;--breakpoint-lg:992px;--breakpoint-xl:1200px;--font-family-sans-serif:-apple-system,BlinkMacSystemFont,\"Segoe UI\",Roboto,\"Helvetica Neue\",Arial,\"Noto Sans\",sans-serif,\"Apple Color Emoji\",\"Segoe UI Emoji\",\"Segoe UI Symbol\",\"Noto Color Emoji\";--font-family-monospace:SFMono-Regular,Menlo,Monaco,Consolas,\"Liberation Mono\",\"Courier New\",monospace}*,:after,:before{box-sizing:border-box}html{font-family:sans-serif;line-height:1.15;-webkit-text-size-adjust:100%;-webkit-tap-highlight-color:transparent}article,aside,figcaption,figure,footer,header,hgroup,main,nav,section{display:block}body{background-color:#fff;color:#212529;font-family:-apple-system,BlinkMacSystemFont,\"Segoe UI\",Roboto,\"Helvetica Neue\",Arial,\"Noto Sans\",sans-serif,\"Apple Color Emoji\",\"Segoe UI Emoji\",\"Segoe UI Symbol\",\"Noto Color Emoji\";font-size:1rem;font-weight:400;line-height:1.5;margin:0;text-align:left}[tabindex=\"-1\"]:focus:not(:focus-visible){outline:0!important}hr{box-sizing:content-box;height:0;overflow:visible}h1,h2,h3,h4,h5,h6{margin-bottom:.5rem;margin-top:0}p{margin-bottom:1rem;margin-top:0}abbr[data-original-title],abbr[title]{border-bottom:0;cursor:help;-webkit-text-decoration:underline;-webkit-text-decoration:underline dotted;text-decoration:underline;text-decoration:underline dotted;-webkit-text-decoration-skip-ink:none;text-decoration-skip-ink:none}address{font-style:normal;line-height:inherit}address,dl,ol,ul{margin-bottom:1rem}dl,ol,ul{margin-top:0}ol ol,ol ul,ul ol,ul ul{margin-bottom:0}dt{font-weight:700}dd{margin-bottom:.5rem;margin-left:0}blockquote{margin:0 0 1rem}b,strong{font-weight:bolder}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-.25em}sup{top:-.5em}a{background-color:transparent;color:#007bff;-webkit-text-decoration:none;text-decoration:none}a:hover{color:#0056b3;-webkit-text-decoration:underline;text-decoration:underline}a:not([href]),a:not([href]):hover{color:inherit;-webkit-text-decoration:none;text-decoration:none}code,kbd,pre,samp{font-family:SFMono-Regular,Menlo,Monaco,Consolas,\"Liberation Mono\",\"Courier New\",monospace;font-size:1em}pre{margin-bottom:1rem;margin-top:0;overflow:auto}figure{margin:0 0 1rem}img{border-style:none}img,svg{vertical-align:middle}svg{overflow:hidden}table{border-collapse:collapse}caption{caption-side:bottom;color:#6c757d;padding-bottom:.75rem;padding-top:.75rem;text-align:left}th{text-align:inherit}label{display:inline-block;margin-bottom:.5rem}button{border-radius:0}button:focus{outline:1px dotted;outline:5px auto -webkit-focus-ring-color}button,input,optgroup,select,textarea{font-family:inherit;font-size:inherit;line-height:inherit;margin:0}button,input{overflow:visible}button,select{text-transform:none}select{word-wrap:normal}[type=button],[type=reset],[type=submit],button{-webkit-appearance:button}[type=button]:not(:disabled),[type=reset]:not(:disabled),[type=submit]:not(:disabled),button:not(:disabled){cursor:pointer}[type=button]::-moz-focus-inner,[type=reset]::-moz-focus-inner,[type=submit]::-moz-focus-inner,button::-moz-focus-inner{border-style:none;padding:0}input[type=checkbox],input[type=radio]{box-sizing:border-box;padding:0}input[type=date],input[type=datetime-local],input[type=month],input[type=time]{-webkit-appearance:listbox}textarea{overflow:auto;resize:vertical}fieldset{border:0;margin:0;min-width:0;padding:0}legend{color:inherit;display:block;font-size:1.5rem;line-height:inherit;margin-bottom:.5rem;max-width:100%;padding:0;white-space:normal;width:100%}progress{vertical-align:baseline}[type=number]::-webkit-inner-spin-button,[type=number]::-webkit-outer-spin-button{height:auto}[type=search]{-webkit-appearance:none;outline-offset:-2px}[type=search]::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}output{display:inline-block}summary{cursor:pointer;display:list-item}template{display:none}[hidden]{display:none!important}.h1,.h2,.h3,.h4,.h5,.h6,h1,h2,h3,h4,h5,h6{font-weight:500;line-height:1.2;margin-bottom:.5rem}.h1,h1{font-size:2.5rem}.h2,h2{font-size:2rem}.h3,h3{font-size:1.75rem}.h4,h4{font-size:1.5rem}.h5,h5{font-size:1.25rem}.h6,h6{font-size:1rem}.lead{font-size:1.25rem;font-weight:300}.display-1{font-size:6rem}.display-1,.display-2{font-weight:300;line-height:1.2}.display-2{font-size:5.5rem}.display-3{font-size:4.5rem}.display-3,.display-4{font-weight:300;line-height:1.2}.display-4{font-size:3.5rem}hr{border:0;border-top:1px solid rgba(0,0,0,.1);margin-bottom:1rem;margin-top:1rem}.small,small{font-size:80%;font-weight:400}.mark,mark{background-color:#fcf8e3;padding:.2em}.list-inline,.list-unstyled{list-style:none;padding-left:0}.list-inline-item{display:inline-block}.list-inline-item:not(:last-child){margin-right:.5rem}.initialism{font-size:90%;text-transform:uppercase}.blockquote{font-size:1.25rem;margin-bottom:1rem}.blockquote-footer{color:#6c757d;display:block;font-size:80%}.blockquote-footer:before{content:\"\\2014\\00A0\"}.img-fluid,.img-thumbnail{height:auto;max-width:100%}.img-thumbnail{background-color:#fff;border:1px solid #dee2e6;border-radius:.25rem;padding:.25rem}.figure{display:inline-block}.figure-img{line-height:1;margin-bottom:.5rem}.figure-caption{color:#6c757d;font-size:90%}code{color:#e83e8c;font-size:87.5%;word-wrap:break-word}a>code{color:inherit}kbd{background-color:#212529;border-radius:.2rem;color:#fff;font-size:87.5%;padding:.2rem .4rem}kbd kbd{font-size:100%;font-weight:700;padding:0}pre{color:#212529;display:block;font-size:87.5%}pre code{color:inherit;font-size:inherit;word-break:normal}.pre-scrollable{max-height:340px;overflow-y:scroll}.container{margin-left:auto;margin-right:auto;padding-left:15px;padding-right:15px;width:100%}@media (min-width:576px){.container{max-width:540px}}@media (min-width:768px){.container{max-width:720px}}@media (min-width:992px){.container{max-width:960px}}@media (min-width:1200px){.container{max-width:1140px}}.container-fluid,.container-lg,.container-md,.container-sm,.container-xl{margin-left:auto;margin-right:auto;padding-left:15px;padding-right:15px;width:100%}@media (min-width:576px){.container,.container-sm{max-width:540px}}@media (min-width:768px){.container,.container-md,.container-sm{max-width:720px}}@media (min-width:992px){.container,.container-lg,.container-md,.container-sm{max-width:960px}}@media (min-width:1200px){.container,.container-lg,.container-md,.container-sm,.container-xl{max-width:1140px}}.row{display:flex;flex-wrap:wrap;margin-left:-15px;margin-right:-15px}.no-gutters{margin-left:0;margin-right:0}.no-gutters>.col,.no-gutters>[class*=col-]{padding-left:0;padding-right:0}.col,.col-1,.col-10,.col-11,.col-12,.col-2,.col-3,.col-4,.col-5,.col-6,.col-7,.col-8,.col-9,.col-auto,.col-lg,.col-lg-1,.col-lg-10,.col-lg-11,.col-lg-12,.col-lg-2,.col-lg-3,.col-lg-4,.col-lg-5,.col-lg-6,.col-lg-7,.col-lg-8,.col-lg-9,.col-lg-auto,.col-md,.col-md-1,.col-md-10,.col-md-11,.col-md-12,.col-md-2,.col-md-3,.col-md-4,.col-md-5,.col-md-6,.col-md-7,.col-md-8,.col-md-9,.col-md-auto,.col-sm,.col-sm-1,.col-sm-10,.col-sm-11,.col-sm-12,.col-sm-2,.col-sm-3,.col-sm-4,.col-sm-5,.col-sm-6,.col-sm-7,.col-sm-8,.col-sm-9,.col-sm-auto,.col-xl,.col-xl-1,.col-xl-10,.col-xl-11,.col-xl-12,.col-xl-2,.col-xl-3,.col-xl-4,.col-xl-5,.col-xl-6,.col-xl-7,.col-xl-8,.col-xl-9,.col-xl-auto{padding-left:15px;padding-right:15px;position:relative;width:100%}.col{flex-basis:0;flex-grow:1;max-width:100%}.row-cols-1>*{flex:0 0 100%;max-width:100%}.row-cols-2>*{flex:0 0 50%;max-width:50%}.row-cols-3>*{flex:0 0 33.333333%;max-width:33.333333%}.row-cols-4>*{flex:0 0 25%;max-width:25%}.row-cols-5>*{flex:0 0 20%;max-width:20%}.row-cols-6>*{flex:0 0 16.666667%;max-width:16.666667%}.col-auto{flex:0 0 auto;max-width:100%;width:auto}.col-1{flex:0 0 8.333333%;max-width:8.333333%}.col-2{flex:0 0 16.666667%;max-width:16.666667%}.col-3{flex:0 0 25%;max-width:25%}.col-4{flex:0 0 33.333333%;max-width:33.333333%}.col-5{flex:0 0 41.666667%;max-width:41.666667%}.col-6{flex:0 0 50%;max-width:50%}.col-7{flex:0 0 58.333333%;max-width:58.333333%}.col-8{flex:0 0 66.666667%;max-width:66.666667%}.col-9{flex:0 0 75%;max-width:75%}.col-10{flex:0 0 83.333333%;max-width:83.333333%}.col-11{flex:0 0 91.666667%;max-width:91.666667%}.col-12{flex:0 0 100%;max-width:100%}.order-first{order:-1}.order-last{order:13}.order-0{order:0}.order-1{order:1}.order-2{order:2}.order-3{order:3}.order-4{order:4}.order-5{order:5}.order-6{order:6}.order-7{order:7}.order-8{order:8}.order-9{order:9}.order-10{order:10}.order-11{order:11}.order-12{order:12}.offset-1{margin-left:8.333333%}.offset-2{margin-left:16.666667%}.offset-3{margin-left:25%}.offset-4{margin-left:33.333333%}.offset-5{margin-left:41.666667%}.offset-6{margin-left:50%}.offset-7{margin-left:58.333333%}.offset-8{margin-left:66.666667%}.offset-9{margin-left:75%}.offset-10{margin-left:83.333333%}.offset-11{margin-left:91.666667%}@media (min-width:576px){.col-sm{flex-basis:0;flex-grow:1;max-width:100%}.row-cols-sm-1>*{flex:0 0 100%;max-width:100%}.row-cols-sm-2>*{flex:0 0 50%;max-width:50%}.row-cols-sm-3>*{flex:0 0 33.333333%;max-width:33.333333%}.row-cols-sm-4>*{flex:0 0 25%;max-width:25%}.row-cols-sm-5>*{flex:0 0 20%;max-width:20%}.row-cols-sm-6>*{flex:0 0 16.666667%;max-width:16.666667%}.col-sm-auto{flex:0 0 auto;max-width:100%;width:auto}.col-sm-1{flex:0 0 8.333333%;max-width:8.333333%}.col-sm-2{flex:0 0 16.666667%;max-width:16.666667%}.col-sm-3{flex:0 0 25%;max-width:25%}.col-sm-4{flex:0 0 33.333333%;max-width:33.333333%}.col-sm-5{flex:0 0 41.666667%;max-width:41.666667%}.col-sm-6{flex:0 0 50%;max-width:50%}.col-sm-7{flex:0 0 58.333333%;max-width:58.333333%}.col-sm-8{flex:0 0 66.666667%;max-width:66.666667%}.col-sm-9{flex:0 0 75%;max-width:75%}.col-sm-10{flex:0 0 83.333333%;max-width:83.333333%}.col-sm-11{flex:0 0 91.666667%;max-width:91.666667%}.col-sm-12{flex:0 0 100%;max-width:100%}.order-sm-first{order:-1}.order-sm-last{order:13}.order-sm-0{order:0}.order-sm-1{order:1}.order-sm-2{order:2}.order-sm-3{order:3}.order-sm-4{order:4}.order-sm-5{order:5}.order-sm-6{order:6}.order-sm-7{order:7}.order-sm-8{order:8}.order-sm-9{order:9}.order-sm-10{order:10}.order-sm-11{order:11}.order-sm-12{order:12}.offset-sm-0{margin-left:0}.offset-sm-1{margin-left:8.333333%}.offset-sm-2{margin-left:16.666667%}.offset-sm-3{margin-left:25%}.offset-sm-4{margin-left:33.333333%}.offset-sm-5{margin-left:41.666667%}.offset-sm-6{margin-left:50%}.offset-sm-7{margin-left:58.333333%}.offset-sm-8{margin-left:66.666667%}.offset-sm-9{margin-left:75%}.offset-sm-10{margin-left:83.333333%}.offset-sm-11{margin-left:91.666667%}}@media (min-width:768px){.col-md{flex-basis:0;flex-grow:1;max-width:100%}.row-cols-md-1>*{flex:0 0 100%;max-width:100%}.row-cols-md-2>*{flex:0 0 50%;max-width:50%}.row-cols-md-3>*{flex:0 0 33.333333%;max-width:33.333333%}.row-cols-md-4>*{flex:0 0 25%;max-width:25%}.row-cols-md-5>*{flex:0 0 20%;max-width:20%}.row-cols-md-6>*{flex:0 0 16.666667%;max-width:16.666667%}.col-md-auto{flex:0 0 auto;max-width:100%;width:auto}.col-md-1{flex:0 0 8.333333%;max-width:8.333333%}.col-md-2{flex:0 0 16.666667%;max-width:16.666667%}.col-md-3{flex:0 0 25%;max-width:25%}.col-md-4{flex:0 0 33.333333%;max-width:33.333333%}.col-md-5{flex:0 0 41.666667%;max-width:41.666667%}.col-md-6{flex:0 0 50%;max-width:50%}.col-md-7{flex:0 0 58.333333%;max-width:58.333333%}.col-md-8{flex:0 0 66.666667%;max-width:66.666667%}.col-md-9{flex:0 0 75%;max-width:75%}.col-md-10{flex:0 0 83.333333%;max-width:83.333333%}.col-md-11{flex:0 0 91.666667%;max-width:91.666667%}.col-md-12{flex:0 0 100%;max-width:100%}.order-md-first{order:-1}.order-md-last{order:13}.order-md-0{order:0}.order-md-1{order:1}.order-md-2{order:2}.order-md-3{order:3}.order-md-4{order:4}.order-md-5{order:5}.order-md-6{order:6}.order-md-7{order:7}.order-md-8{order:8}.order-md-9{order:9}.order-md-10{order:10}.order-md-11{order:11}.order-md-12{order:12}.offset-md-0{margin-left:0}.offset-md-1{margin-left:8.333333%}.offset-md-2{margin-left:16.666667%}.offset-md-3{margin-left:25%}.offset-md-4{margin-left:33.333333%}.offset-md-5{margin-left:41.666667%}.offset-md-6{margin-left:50%}.offset-md-7{margin-left:58.333333%}.offset-md-8{margin-left:66.666667%}.offset-md-9{margin-left:75%}.offset-md-10{margin-left:83.333333%}.offset-md-11{margin-left:91.666667%}}@media (min-width:992px){.col-lg{flex-basis:0;flex-grow:1;max-width:100%}.row-cols-lg-1>*{flex:0 0 100%;max-width:100%}.row-cols-lg-2>*{flex:0 0 50%;max-width:50%}.row-cols-lg-3>*{flex:0 0 33.333333%;max-width:33.333333%}.row-cols-lg-4>*{flex:0 0 25%;max-width:25%}.row-cols-lg-5>*{flex:0 0 20%;max-width:20%}.row-cols-lg-6>*{flex:0 0 16.666667%;max-width:16.666667%}.col-lg-auto{flex:0 0 auto;max-width:100%;width:auto}.col-lg-1{flex:0 0 8.333333%;max-width:8.333333%}.col-lg-2{flex:0 0 16.666667%;max-width:16.666667%}.col-lg-3{flex:0 0 25%;max-width:25%}.col-lg-4{flex:0 0 33.333333%;max-width:33.333333%}.col-lg-5{flex:0 0 41.666667%;max-width:41.666667%}.col-lg-6{flex:0 0 50%;max-width:50%}.col-lg-7{flex:0 0 58.333333%;max-width:58.333333%}.col-lg-8{flex:0 0 66.666667%;max-width:66.666667%}.col-lg-9{flex:0 0 75%;max-width:75%}.col-lg-10{flex:0 0 83.333333%;max-width:83.333333%}.col-lg-11{flex:0 0 91.666667%;max-width:91.666667%}.col-lg-12{flex:0 0 100%;max-width:100%}.order-lg-first{order:-1}.order-lg-last{order:13}.order-lg-0{order:0}.order-lg-1{order:1}.order-lg-2{order:2}.order-lg-3{order:3}.order-lg-4{order:4}.order-lg-5{order:5}.order-lg-6{order:6}.order-lg-7{order:7}.order-lg-8{order:8}.order-lg-9{order:9}.order-lg-10{order:10}.order-lg-11{order:11}.order-lg-12{order:12}.offset-lg-0{margin-left:0}.offset-lg-1{margin-left:8.333333%}.offset-lg-2{margin-left:16.666667%}.offset-lg-3{margin-left:25%}.offset-lg-4{margin-left:33.333333%}.offset-lg-5{margin-left:41.666667%}.offset-lg-6{margin-left:50%}.offset-lg-7{margin-left:58.333333%}.offset-lg-8{margin-left:66.666667%}.offset-lg-9{margin-left:75%}.offset-lg-10{margin-left:83.333333%}.offset-lg-11{margin-left:91.666667%}}@media (min-width:1200px){.col-xl{flex-basis:0;flex-grow:1;max-width:100%}.row-cols-xl-1>*{flex:0 0 100%;max-width:100%}.row-cols-xl-2>*{flex:0 0 50%;max-width:50%}.row-cols-xl-3>*{flex:0 0 33.333333%;max-width:33.333333%}.row-cols-xl-4>*{flex:0 0 25%;max-width:25%}.row-cols-xl-5>*{flex:0 0 20%;max-width:20%}.row-cols-xl-6>*{flex:0 0 16.666667%;max-width:16.666667%}.col-xl-auto{flex:0 0 auto;max-width:100%;width:auto}.col-xl-1{flex:0 0 8.333333%;max-width:8.333333%}.col-xl-2{flex:0 0 16.666667%;max-width:16.666667%}.col-xl-3{flex:0 0 25%;max-width:25%}.col-xl-4{flex:0 0 33.333333%;max-width:33.333333%}.col-xl-5{flex:0 0 41.666667%;max-width:41.666667%}.col-xl-6{flex:0 0 50%;max-width:50%}.col-xl-7{flex:0 0 58.333333%;max-width:58.333333%}.col-xl-8{flex:0 0 66.666667%;max-width:66.666667%}.col-xl-9{flex:0 0 75%;max-width:75%}.col-xl-10{flex:0 0 83.333333%;max-width:83.333333%}.col-xl-11{flex:0 0 91.666667%;max-width:91.666667%}.col-xl-12{flex:0 0 100%;max-width:100%}.order-xl-first{order:-1}.order-xl-last{order:13}.order-xl-0{order:0}.order-xl-1{order:1}.order-xl-2{order:2}.order-xl-3{order:3}.order-xl-4{order:4}.order-xl-5{order:5}.order-xl-6{order:6}.order-xl-7{order:7}.order-xl-8{order:8}.order-xl-9{order:9}.order-xl-10{order:10}.order-xl-11{order:11}.order-xl-12{order:12}.offset-xl-0{margin-left:0}.offset-xl-1{margin-left:8.333333%}.offset-xl-2{margin-left:16.666667%}.offset-xl-3{margin-left:25%}.offset-xl-4{margin-left:33.333333%}.offset-xl-5{margin-left:41.666667%}.offset-xl-6{margin-left:50%}.offset-xl-7{margin-left:58.333333%}.offset-xl-8{margin-left:66.666667%}.offset-xl-9{margin-left:75%}.offset-xl-10{margin-left:83.333333%}.offset-xl-11{margin-left:91.666667%}}.table{color:#212529;margin-bottom:1rem;width:100%}.table td,.table th{border-top:1px solid #dee2e6;padding:.75rem;vertical-align:top}.table thead th{border-bottom:2px solid #dee2e6;vertical-align:bottom}.table tbody+tbody{border-top:2px solid #dee2e6}.table-sm td,.table-sm th{padding:.3rem}.table-bordered,.table-bordered td,.table-bordered th{border:1px solid #dee2e6}.table-bordered thead td,.table-bordered thead th{border-bottom-width:2px}.table-borderless tbody+tbody,.table-borderless td,.table-borderless th,.table-borderless thead th{border:0}.table-striped tbody tr:nth-of-type(odd){background-color:rgba(0,0,0,.05)}.table-hover tbody tr:hover{background-color:rgba(0,0,0,.075);color:#212529}.table-primary,.table-primary>td,.table-primary>th{background-color:#b8daff}.table-primary tbody+tbody,.table-primary td,.table-primary th,.table-primary thead th{border-color:#7abaff}.table-hover .table-primary:hover,.table-hover .table-primary:hover>td,.table-hover .table-primary:hover>th{background-color:#9fcdff}.table-secondary,.table-secondary>td,.table-secondary>th{background-color:#d6d8db}.table-secondary tbody+tbody,.table-secondary td,.table-secondary th,.table-secondary thead th{border-color:#b3b7bb}.table-hover .table-secondary:hover,.table-hover .table-secondary:hover>td,.table-hover .table-secondary:hover>th{background-color:#c8cbcf}.table-success,.table-success>td,.table-success>th{background-color:#c3e6cb}.table-success tbody+tbody,.table-success td,.table-success th,.table-success thead th{border-color:#8fd19e}.table-hover .table-success:hover,.table-hover .table-success:hover>td,.table-hover .table-success:hover>th{background-color:#b1dfbb}.table-info,.table-info>td,.table-info>th{background-color:#bee5eb}.table-info tbody+tbody,.table-info td,.table-info th,.table-info thead th{border-color:#86cfda}.table-hover .table-info:hover,.table-hover .table-info:hover>td,.table-hover .table-info:hover>th{background-color:#abdde5}.table-warning,.table-warning>td,.table-warning>th{background-color:#ffeeba}.table-warning tbody+tbody,.table-warning td,.table-warning th,.table-warning thead th{border-color:#ffdf7e}.table-hover .table-warning:hover,.table-hover .table-warning:hover>td,.table-hover .table-warning:hover>th{background-color:#ffe8a1}.table-danger,.table-danger>td,.table-danger>th{background-color:#f5c6cb}.table-danger tbody+tbody,.table-danger td,.table-danger th,.table-danger thead th{border-color:#ed969e}.table-hover .table-danger:hover,.table-hover .table-danger:hover>td,.table-hover .table-danger:hover>th{background-color:#f1b0b7}.table-light,.table-light>td,.table-light>th{background-color:#fdfdfe}.table-light tbody+tbody,.table-light td,.table-light th,.table-light thead th{border-color:#fbfcfc}.table-hover .table-light:hover,.table-hover .table-light:hover>td,.table-hover .table-light:hover>th{background-color:#ececf6}.table-dark,.table-dark>td,.table-dark>th{background-color:#c6c8ca}.table-dark tbody+tbody,.table-dark td,.table-dark th,.table-dark thead th{border-color:#95999c}.table-hover .table-dark:hover,.table-hover .table-dark:hover>td,.table-hover .table-dark:hover>th{background-color:#b9bbbe}.table-active,.table-active>td,.table-active>th,.table-hover .table-active:hover,.table-hover .table-active:hover>td,.table-hover .table-active:hover>th{background-color:rgba(0,0,0,.075)}.table .thead-dark th{background-color:#343a40;border-color:#454d55;color:#fff}.table .thead-light th{background-color:#e9ecef;border-color:#dee2e6;color:#495057}.table-dark{background-color:#343a40;color:#fff}.table-dark td,.table-dark th,.table-dark thead th{border-color:#454d55}.table-dark.table-bordered{border:0}.table-dark.table-striped tbody tr:nth-of-type(odd){background-color:hsla(0,0%,100%,.05)}.table-dark.table-hover tbody tr:hover{background-color:hsla(0,0%,100%,.075);color:#fff}@media (max-width:575.98px){.table-responsive-sm{display:block;overflow-x:auto;width:100%;-webkit-overflow-scrolling:touch}.table-responsive-sm>.table-bordered{border:0}}@media (max-width:767.98px){.table-responsive-md{display:block;overflow-x:auto;width:100%;-webkit-overflow-scrolling:touch}.table-responsive-md>.table-bordered{border:0}}@media (max-width:991.98px){.table-responsive-lg{display:block;overflow-x:auto;width:100%;-webkit-overflow-scrolling:touch}.table-responsive-lg>.table-bordered{border:0}}@media (max-width:1199.98px){.table-responsive-xl{display:block;overflow-x:auto;width:100%;-webkit-overflow-scrolling:touch}.table-responsive-xl>.table-bordered{border:0}}.table-responsive{display:block;overflow-x:auto;width:100%;-webkit-overflow-scrolling:touch}.table-responsive>.table-bordered{border:0}.form-control{background-clip:padding-box;background-color:#fff;border:1px solid #ced4da;border-radius:.25rem;color:#495057;display:block;font-size:1rem;font-weight:400;height:calc(1.5em + .75rem + 2px);line-height:1.5;padding:.375rem .75rem;transition:border-color .15s ease-in-out,box-shadow .15s ease-in-out;width:100%}@media (prefers-reduced-motion:reduce){.form-control{transition:none}}.form-control::-ms-expand{background-color:transparent;border:0}.form-control:-moz-focusring{color:transparent;text-shadow:0 0 0 #495057}.form-control:focus{background-color:#fff;border-color:#80bdff;box-shadow:0 0 0 .2rem rgba(0,123,255,.25);color:#495057;outline:0}.form-control::-moz-placeholder{color:#6c757d;opacity:1}.form-control::placeholder{color:#6c757d;opacity:1}.form-control:disabled,.form-control[readonly]{background-color:#e9ecef;opacity:1}select.form-control:focus::-ms-value{background-color:#fff;color:#495057}.form-control-file,.form-control-range{display:block;width:100%}.col-form-label{font-size:inherit;line-height:1.5;margin-bottom:0;padding-bottom:calc(.375rem + 1px);padding-top:calc(.375rem + 1px)}.col-form-label-lg{font-size:1.25rem;line-height:1.5;padding-bottom:calc(.5rem + 1px);padding-top:calc(.5rem + 1px)}.col-form-label-sm{font-size:.875rem;line-height:1.5;padding-bottom:calc(.25rem + 1px);padding-top:calc(.25rem + 1px)}.form-control-plaintext{background-color:transparent;border:solid transparent;border-width:1px 0;color:#212529;display:block;font-size:1rem;line-height:1.5;margin-bottom:0;padding:.375rem 0;width:100%}.form-control-plaintext.form-control-lg,.form-control-plaintext.form-control-sm{padding-left:0;padding-right:0}.form-control-sm{border-radius:.2rem;font-size:.875rem;height:calc(1.5em + .5rem + 2px);line-height:1.5;padding:.25rem .5rem}.form-control-lg{border-radius:.3rem;font-size:1.25rem;height:calc(1.5em + 1rem + 2px);line-height:1.5;padding:.5rem 1rem}select.form-control[multiple],select.form-control[size],textarea.form-control{height:auto}.form-group{margin-bottom:1rem}.form-text{display:block;margin-top:.25rem}.form-row{display:flex;flex-wrap:wrap;margin-left:-5px;margin-right:-5px}.form-row>.col,.form-row>[class*=col-]{padding-left:5px;padding-right:5px}.form-check{display:block;padding-left:1.25rem;position:relative}.form-check-input{margin-left:-1.25rem;margin-top:.3rem;position:absolute}.form-check-input:disabled~.form-check-label,.form-check-input[disabled]~.form-check-label{color:#6c757d}.form-check-label{margin-bottom:0}.form-check-inline{align-items:center;display:inline-flex;margin-right:.75rem;padding-left:0}.form-check-inline .form-check-input{margin-left:0;margin-right:.3125rem;margin-top:0;position:static}.valid-feedback{color:#28a745;display:none;font-size:80%;margin-top:.25rem;width:100%}.valid-tooltip{background-color:rgba(40,167,69,.9);border-radius:.25rem;color:#fff;display:none;font-size:.875rem;line-height:1.5;margin-top:.1rem;max-width:100%;padding:.25rem .5rem;position:absolute;top:100%;z-index:5}.is-valid~.valid-feedback,.is-valid~.valid-tooltip,.was-validated :valid~.valid-feedback,.was-validated :valid~.valid-tooltip{display:block}.form-control.is-valid,.was-validated .form-control:valid{background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='8' height='8'%3E%3Cpath fill='%2328a745' d='M2.3 6.73.6 4.53c-.4-1.04.46-1.4 1.1-.8l1.1 1.4 3.4-3.8c.6-.63 1.6-.27 1.2.7l-4 4.6c-.43.5-.8.4-1.1.1'/%3E%3C/svg%3E\");background-position:right calc(.375em + .1875rem) center;background-repeat:no-repeat;background-size:calc(.75em + .375rem) calc(.75em + .375rem);border-color:#28a745;padding-right:calc(1.5em + .75rem)}.form-control.is-valid:focus,.was-validated .form-control:valid:focus{border-color:#28a745;box-shadow:0 0 0 .2rem rgba(40,167,69,.25)}.was-validated textarea.form-control:valid,textarea.form-control.is-valid{background-position:top calc(.375em + .1875rem) right calc(.375em + .1875rem);padding-right:calc(1.5em + .75rem)}.custom-select.is-valid,.was-validated .custom-select:valid{background:url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='4' height='5'%3E%3Cpath fill='%23343a40' d='M2 0 0 2h4zm0 5L0 3h4z'/%3E%3C/svg%3E\") no-repeat right .75rem center/8px 10px,url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='8' height='8'%3E%3Cpath fill='%2328a745' d='M2.3 6.73.6 4.53c-.4-1.04.46-1.4 1.1-.8l1.1 1.4 3.4-3.8c.6-.63 1.6-.27 1.2.7l-4 4.6c-.43.5-.8.4-1.1.1'/%3E%3C/svg%3E\") #fff no-repeat center right 1.75rem/calc(.75em + .375rem) calc(.75em + .375rem);border-color:#28a745;padding-right:calc(.75em + 2.3125rem)}.custom-select.is-valid:focus,.was-validated .custom-select:valid:focus{border-color:#28a745;box-shadow:0 0 0 .2rem rgba(40,167,69,.25)}.form-check-input.is-valid~.form-check-label,.was-validated .form-check-input:valid~.form-check-label{color:#28a745}.form-check-input.is-valid~.valid-feedback,.form-check-input.is-valid~.valid-tooltip,.was-validated .form-check-input:valid~.valid-feedback,.was-validated .form-check-input:valid~.valid-tooltip{display:block}.custom-control-input.is-valid~.custom-control-label,.was-validated .custom-control-input:valid~.custom-control-label{color:#28a745}.custom-control-input.is-valid~.custom-control-label:before,.was-validated .custom-control-input:valid~.custom-control-label:before{border-color:#28a745}.custom-control-input.is-valid:checked~.custom-control-label:before,.was-validated .custom-control-input:valid:checked~.custom-control-label:before{background-color:#34ce57;border-color:#34ce57}.custom-control-input.is-valid:focus~.custom-control-label:before,.was-validated .custom-control-input:valid:focus~.custom-control-label:before{box-shadow:0 0 0 .2rem rgba(40,167,69,.25)}.custom-control-input.is-valid:focus:not(:checked)~.custom-control-label:before,.was-validated .custom-control-input:valid:focus:not(:checked)~.custom-control-label:before{border-color:#28a745}.custom-file-input.is-valid~.custom-file-label,.was-validated .custom-file-input:valid~.custom-file-label{border-color:#28a745}.custom-file-input.is-valid:focus~.custom-file-label,.was-validated .custom-file-input:valid:focus~.custom-file-label{border-color:#28a745;box-shadow:0 0 0 .2rem rgba(40,167,69,.25)}.invalid-feedback{color:#dc3545;display:none;font-size:80%;margin-top:.25rem;width:100%}.invalid-tooltip{background-color:rgba(220,53,69,.9);border-radius:.25rem;color:#fff;display:none;font-size:.875rem;line-height:1.5;margin-top:.1rem;max-width:100%;padding:.25rem .5rem;position:absolute;top:100%;z-index:5}.is-invalid~.invalid-feedback,.is-invalid~.invalid-tooltip,.was-validated :invalid~.invalid-feedback,.was-validated :invalid~.invalid-tooltip{display:block}.form-control.is-invalid,.was-validated .form-control:invalid{background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' fill='none' stroke='%23dc3545'%3E%3Ccircle cx='6' cy='6' r='4.5'/%3E%3Cpath stroke-linejoin='round' d='M5.8 3.6h.4L6 6.5z'/%3E%3Ccircle cx='6' cy='8.2' r='.6' fill='%23dc3545' stroke='none'/%3E%3C/svg%3E\");background-position:right calc(.375em + .1875rem) center;background-repeat:no-repeat;background-size:calc(.75em + .375rem) calc(.75em + .375rem);border-color:#dc3545;padding-right:calc(1.5em + .75rem)}.form-control.is-invalid:focus,.was-validated .form-control:invalid:focus{border-color:#dc3545;box-shadow:0 0 0 .2rem rgba(220,53,69,.25)}.was-validated textarea.form-control:invalid,textarea.form-control.is-invalid{background-position:top calc(.375em + .1875rem) right calc(.375em + .1875rem);padding-right:calc(1.5em + .75rem)}.custom-select.is-invalid,.was-validated .custom-select:invalid{background:url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='4' height='5'%3E%3Cpath fill='%23343a40' d='M2 0 0 2h4zm0 5L0 3h4z'/%3E%3C/svg%3E\") no-repeat right .75rem center/8px 10px,url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' fill='none' stroke='%23dc3545'%3E%3Ccircle cx='6' cy='6' r='4.5'/%3E%3Cpath stroke-linejoin='round' d='M5.8 3.6h.4L6 6.5z'/%3E%3Ccircle cx='6' cy='8.2' r='.6' fill='%23dc3545' stroke='none'/%3E%3C/svg%3E\") #fff no-repeat center right 1.75rem/calc(.75em + .375rem) calc(.75em + .375rem);border-color:#dc3545;padding-right:calc(.75em + 2.3125rem)}.custom-select.is-invalid:focus,.was-validated .custom-select:invalid:focus{border-color:#dc3545;box-shadow:0 0 0 .2rem rgba(220,53,69,.25)}.form-check-input.is-invalid~.form-check-label,.was-validated .form-check-input:invalid~.form-check-label{color:#dc3545}.form-check-input.is-invalid~.invalid-feedback,.form-check-input.is-invalid~.invalid-tooltip,.was-validated .form-check-input:invalid~.invalid-feedback,.was-validated .form-check-input:invalid~.invalid-tooltip{display:block}.custom-control-input.is-invalid~.custom-control-label,.was-validated .custom-control-input:invalid~.custom-control-label{color:#dc3545}.custom-control-input.is-invalid~.custom-control-label:before,.was-validated .custom-control-input:invalid~.custom-control-label:before{border-color:#dc3545}.custom-control-input.is-invalid:checked~.custom-control-label:before,.was-validated .custom-control-input:invalid:checked~.custom-control-label:before{background-color:#e4606d;border-color:#e4606d}.custom-control-input.is-invalid:focus~.custom-control-label:before,.was-validated .custom-control-input:invalid:focus~.custom-control-label:before{box-shadow:0 0 0 .2rem rgba(220,53,69,.25)}.custom-control-input.is-invalid:focus:not(:checked)~.custom-control-label:before,.was-validated .custom-control-input:invalid:focus:not(:checked)~.custom-control-label:before{border-color:#dc3545}.custom-file-input.is-invalid~.custom-file-label,.was-validated .custom-file-input:invalid~.custom-file-label{border-color:#dc3545}.custom-file-input.is-invalid:focus~.custom-file-label,.was-validated .custom-file-input:invalid:focus~.custom-file-label{border-color:#dc3545;box-shadow:0 0 0 .2rem rgba(220,53,69,.25)}.form-inline{align-items:center;display:flex;flex-flow:row wrap}.form-inline .form-check{width:100%}@media (min-width:576px){.form-inline label{justify-content:center}.form-inline .form-group,.form-inline label{align-items:center;display:flex;margin-bottom:0}.form-inline .form-group{flex:0 0 auto;flex-flow:row wrap}.form-inline .form-control{display:inline-block;vertical-align:middle;width:auto}.form-inline .form-control-plaintext{display:inline-block}.form-inline .custom-select,.form-inline .input-group{width:auto}.form-inline .form-check{align-items:center;display:flex;justify-content:center;padding-left:0;width:auto}.form-inline .form-check-input{flex-shrink:0;margin-left:0;margin-right:.25rem;margin-top:0;position:relative}.form-inline .custom-control{align-items:center;justify-content:center}.form-inline .custom-control-label{margin-bottom:0}}.btn{background-color:transparent;border:1px solid transparent;border-radius:.25rem;color:#212529;cursor:pointer;display:inline-block;font-size:1rem;font-weight:400;line-height:1.5;padding:.375rem .75rem;text-align:center;transition:color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out;-webkit-user-select:none;-moz-user-select:none;user-select:none;vertical-align:middle}@media (prefers-reduced-motion:reduce){.btn{transition:none}}.btn:hover{color:#212529;-webkit-text-decoration:none;text-decoration:none}.btn.focus,.btn:focus{box-shadow:0 0 0 .2rem rgba(0,123,255,.25);outline:0}.btn.disabled,.btn:disabled{opacity:.65}a.btn.disabled,fieldset:disabled a.btn{pointer-events:none}.btn-primary{background-color:#007bff;border-color:#007bff;color:#fff}.btn-primary.focus,.btn-primary:focus,.btn-primary:hover{background-color:#0069d9;border-color:#0062cc;color:#fff}.btn-primary.focus,.btn-primary:focus{box-shadow:0 0 0 .2rem rgba(38,143,255,.5)}.btn-primary.disabled,.btn-primary:disabled{background-color:#007bff;border-color:#007bff;color:#fff}.btn-primary:not(:disabled):not(.disabled).active,.btn-primary:not(:disabled):not(.disabled):active,.show>.btn-primary.dropdown-toggle{background-color:#0062cc;border-color:#005cbf;color:#fff}.btn-primary:not(:disabled):not(.disabled).active:focus,.btn-primary:not(:disabled):not(.disabled):active:focus,.show>.btn-primary.dropdown-toggle:focus{box-shadow:0 0 0 .2rem rgba(38,143,255,.5)}.btn-secondary{background-color:#6c757d;border-color:#6c757d;color:#fff}.btn-secondary.focus,.btn-secondary:focus,.btn-secondary:hover{background-color:#5a6268;border-color:#545b62;color:#fff}.btn-secondary.focus,.btn-secondary:focus{box-shadow:0 0 0 .2rem hsla(208,6%,54%,.5)}.btn-secondary.disabled,.btn-secondary:disabled{background-color:#6c757d;border-color:#6c757d;color:#fff}.btn-secondary:not(:disabled):not(.disabled).active,.btn-secondary:not(:disabled):not(.disabled):active,.show>.btn-secondary.dropdown-toggle{background-color:#545b62;border-color:#4e555b;color:#fff}.btn-secondary:not(:disabled):not(.disabled).active:focus,.btn-secondary:not(:disabled):not(.disabled):active:focus,.show>.btn-secondary.dropdown-toggle:focus{box-shadow:0 0 0 .2rem hsla(208,6%,54%,.5)}.btn-success{background-color:#28a745;border-color:#28a745;color:#fff}.btn-success.focus,.btn-success:focus,.btn-success:hover{background-color:#218838;border-color:#1e7e34;color:#fff}.btn-success.focus,.btn-success:focus{box-shadow:0 0 0 .2rem rgba(72,180,97,.5)}.btn-success.disabled,.btn-success:disabled{background-color:#28a745;border-color:#28a745;color:#fff}.btn-success:not(:disabled):not(.disabled).active,.btn-success:not(:disabled):not(.disabled):active,.show>.btn-success.dropdown-toggle{background-color:#1e7e34;border-color:#1c7430;color:#fff}.btn-success:not(:disabled):not(.disabled).active:focus,.btn-success:not(:disabled):not(.disabled):active:focus,.show>.btn-success.dropdown-toggle:focus{box-shadow:0 0 0 .2rem rgba(72,180,97,.5)}.btn-info{background-color:#17a2b8;border-color:#17a2b8;color:#fff}.btn-info.focus,.btn-info:focus,.btn-info:hover{background-color:#138496;border-color:#117a8b;color:#fff}.btn-info.focus,.btn-info:focus{box-shadow:0 0 0 .2rem rgba(58,176,195,.5)}.btn-info.disabled,.btn-info:disabled{background-color:#17a2b8;border-color:#17a2b8;color:#fff}.btn-info:not(:disabled):not(.disabled).active,.btn-info:not(:disabled):not(.disabled):active,.show>.btn-info.dropdown-toggle{background-color:#117a8b;border-color:#10707f;color:#fff}.btn-info:not(:disabled):not(.disabled).active:focus,.btn-info:not(:disabled):not(.disabled):active:focus,.show>.btn-info.dropdown-toggle:focus{box-shadow:0 0 0 .2rem rgba(58,176,195,.5)}.btn-warning{background-color:#ffc107;border-color:#ffc107;color:#212529}.btn-warning.focus,.btn-warning:focus,.btn-warning:hover{background-color:#e0a800;border-color:#d39e00;color:#212529}.btn-warning.focus,.btn-warning:focus{box-shadow:0 0 0 .2rem rgba(222,170,12,.5)}.btn-warning.disabled,.btn-warning:disabled{background-color:#ffc107;border-color:#ffc107;color:#212529}.btn-warning:not(:disabled):not(.disabled).active,.btn-warning:not(:disabled):not(.disabled):active,.show>.btn-warning.dropdown-toggle{background-color:#d39e00;border-color:#c69500;color:#212529}.btn-warning:not(:disabled):not(.disabled).active:focus,.btn-warning:not(:disabled):not(.disabled):active:focus,.show>.btn-warning.dropdown-toggle:focus{box-shadow:0 0 0 .2rem rgba(222,170,12,.5)}.btn-danger{background-color:#dc3545;border-color:#dc3545;color:#fff}.btn-danger.focus,.btn-danger:focus,.btn-danger:hover{background-color:#c82333;border-color:#bd2130;color:#fff}.btn-danger.focus,.btn-danger:focus{box-shadow:0 0 0 .2rem rgba(225,83,97,.5)}.btn-danger.disabled,.btn-danger:disabled{background-color:#dc3545;border-color:#dc3545;color:#fff}.btn-danger:not(:disabled):not(.disabled).active,.btn-danger:not(:disabled):not(.disabled):active,.show>.btn-danger.dropdown-toggle{background-color:#bd2130;border-color:#b21f2d;color:#fff}.btn-danger:not(:disabled):not(.disabled).active:focus,.btn-danger:not(:disabled):not(.disabled):active:focus,.show>.btn-danger.dropdown-toggle:focus{box-shadow:0 0 0 .2rem rgba(225,83,97,.5)}.btn-light{background-color:#f8f9fa;border-color:#f8f9fa;color:#212529}.btn-light.focus,.btn-light:focus,.btn-light:hover{background-color:#e2e6ea;border-color:#dae0e5;color:#212529}.btn-light.focus,.btn-light:focus{box-shadow:0 0 0 .2rem hsla(220,4%,85%,.5)}.btn-light.disabled,.btn-light:disabled{background-color:#f8f9fa;border-color:#f8f9fa;color:#212529}.btn-light:not(:disabled):not(.disabled).active,.btn-light:not(:disabled):not(.disabled):active,.show>.btn-light.dropdown-toggle{background-color:#dae0e5;border-color:#d3d9df;color:#212529}.btn-light:not(:disabled):not(.disabled).active:focus,.btn-light:not(:disabled):not(.disabled):active:focus,.show>.btn-light.dropdown-toggle:focus{box-shadow:0 0 0 .2rem hsla(220,4%,85%,.5)}.btn-dark{background-color:#343a40;border-color:#343a40;color:#fff}.btn-dark.focus,.btn-dark:focus,.btn-dark:hover{background-color:#23272b;border-color:#1d2124;color:#fff}.btn-dark.focus,.btn-dark:focus{box-shadow:0 0 0 .2rem rgba(82,88,93,.5)}.btn-dark.disabled,.btn-dark:disabled{background-color:#343a40;border-color:#343a40;color:#fff}.btn-dark:not(:disabled):not(.disabled).active,.btn-dark:not(:disabled):not(.disabled):active,.show>.btn-dark.dropdown-toggle{background-color:#1d2124;border-color:#171a1d;color:#fff}.btn-dark:not(:disabled):not(.disabled).active:focus,.btn-dark:not(:disabled):not(.disabled):active:focus,.show>.btn-dark.dropdown-toggle:focus{box-shadow:0 0 0 .2rem rgba(82,88,93,.5)}.btn-outline-primary{border-color:#007bff;color:#007bff}.btn-outline-primary:hover{background-color:#007bff;border-color:#007bff;color:#fff}.btn-outline-primary.focus,.btn-outline-primary:focus{box-shadow:0 0 0 .2rem rgba(0,123,255,.5)}.btn-outline-primary.disabled,.btn-outline-primary:disabled{background-color:transparent;color:#007bff}.btn-outline-primary:not(:disabled):not(.disabled).active,.btn-outline-primary:not(:disabled):not(.disabled):active,.show>.btn-outline-primary.dropdown-toggle{background-color:#007bff;border-color:#007bff;color:#fff}.btn-outline-primary:not(:disabled):not(.disabled).active:focus,.btn-outline-primary:not(:disabled):not(.disabled):active:focus,.show>.btn-outline-primary.dropdown-toggle:focus{box-shadow:0 0 0 .2rem rgba(0,123,255,.5)}.btn-outline-secondary{border-color:#6c757d;color:#6c757d}.btn-outline-secondary:hover{background-color:#6c757d;border-color:#6c757d;color:#fff}.btn-outline-secondary.focus,.btn-outline-secondary:focus{box-shadow:0 0 0 .2rem hsla(208,7%,46%,.5)}.btn-outline-secondary.disabled,.btn-outline-secondary:disabled{background-color:transparent;color:#6c757d}.btn-outline-secondary:not(:disabled):not(.disabled).active,.btn-outline-secondary:not(:disabled):not(.disabled):active,.show>.btn-outline-secondary.dropdown-toggle{background-color:#6c757d;border-color:#6c757d;color:#fff}.btn-outline-secondary:not(:disabled):not(.disabled).active:focus,.btn-outline-secondary:not(:disabled):not(.disabled):active:focus,.show>.btn-outline-secondary.dropdown-toggle:focus{box-shadow:0 0 0 .2rem hsla(208,7%,46%,.5)}.btn-outline-success{border-color:#28a745;color:#28a745}.btn-outline-success:hover{background-color:#28a745;border-color:#28a745;color:#fff}.btn-outline-success.focus,.btn-outline-success:focus{box-shadow:0 0 0 .2rem rgba(40,167,69,.5)}.btn-outline-success.disabled,.btn-outline-success:disabled{background-color:transparent;color:#28a745}.btn-outline-success:not(:disabled):not(.disabled).active,.btn-outline-success:not(:disabled):not(.disabled):active,.show>.btn-outline-success.dropdown-toggle{background-color:#28a745;border-color:#28a745;color:#fff}.btn-outline-success:not(:disabled):not(.disabled).active:focus,.btn-outline-success:not(:disabled):not(.disabled):active:focus,.show>.btn-outline-success.dropdown-toggle:focus{box-shadow:0 0 0 .2rem rgba(40,167,69,.5)}.btn-outline-info{border-color:#17a2b8;color:#17a2b8}.btn-outline-info:hover{background-color:#17a2b8;border-color:#17a2b8;color:#fff}.btn-outline-info.focus,.btn-outline-info:focus{box-shadow:0 0 0 .2rem rgba(23,162,184,.5)}.btn-outline-info.disabled,.btn-outline-info:disabled{background-color:transparent;color:#17a2b8}.btn-outline-info:not(:disabled):not(.disabled).active,.btn-outline-info:not(:disabled):not(.disabled):active,.show>.btn-outline-info.dropdown-toggle{background-color:#17a2b8;border-color:#17a2b8;color:#fff}.btn-outline-info:not(:disabled):not(.disabled).active:focus,.btn-outline-info:not(:disabled):not(.disabled):active:focus,.show>.btn-outline-info.dropdown-toggle:focus{box-shadow:0 0 0 .2rem rgba(23,162,184,.5)}.btn-outline-warning{border-color:#ffc107;color:#ffc107}.btn-outline-warning:hover{background-color:#ffc107;border-color:#ffc107;color:#212529}.btn-outline-warning.focus,.btn-outline-warning:focus{box-shadow:0 0 0 .2rem rgba(255,193,7,.5)}.btn-outline-warning.disabled,.btn-outline-warning:disabled{background-color:transparent;color:#ffc107}.btn-outline-warning:not(:disabled):not(.disabled).active,.btn-outline-warning:not(:disabled):not(.disabled):active,.show>.btn-outline-warning.dropdown-toggle{background-color:#ffc107;border-color:#ffc107;color:#212529}.btn-outline-warning:not(:disabled):not(.disabled).active:focus,.btn-outline-warning:not(:disabled):not(.disabled):active:focus,.show>.btn-outline-warning.dropdown-toggle:focus{box-shadow:0 0 0 .2rem rgba(255,193,7,.5)}.btn-outline-danger{border-color:#dc3545;color:#dc3545}.btn-outline-danger:hover{background-color:#dc3545;border-color:#dc3545;color:#fff}.btn-outline-danger.focus,.btn-outline-danger:focus{box-shadow:0 0 0 .2rem rgba(220,53,69,.5)}.btn-outline-danger.disabled,.btn-outline-danger:disabled{background-color:transparent;color:#dc3545}.btn-outline-danger:not(:disabled):not(.disabled).active,.btn-outline-danger:not(:disabled):not(.disabled):active,.show>.btn-outline-danger.dropdown-toggle{background-color:#dc3545;border-color:#dc3545;color:#fff}.btn-outline-danger:not(:disabled):not(.disabled).active:focus,.btn-outline-danger:not(:disabled):not(.disabled):active:focus,.show>.btn-outline-danger.dropdown-toggle:focus{box-shadow:0 0 0 .2rem rgba(220,53,69,.5)}.btn-outline-light{border-color:#f8f9fa;color:#f8f9fa}.btn-outline-light:hover{background-color:#f8f9fa;border-color:#f8f9fa;color:#212529}.btn-outline-light.focus,.btn-outline-light:focus{box-shadow:0 0 0 .2rem rgba(248,249,250,.5)}.btn-outline-light.disabled,.btn-outline-light:disabled{background-color:transparent;color:#f8f9fa}.btn-outline-light:not(:disabled):not(.disabled).active,.btn-outline-light:not(:disabled):not(.disabled):active,.show>.btn-outline-light.dropdown-toggle{background-color:#f8f9fa;border-color:#f8f9fa;color:#212529}.btn-outline-light:not(:disabled):not(.disabled).active:focus,.btn-outline-light:not(:disabled):not(.disabled):active:focus,.show>.btn-outline-light.dropdown-toggle:focus{box-shadow:0 0 0 .2rem rgba(248,249,250,.5)}.btn-outline-dark{border-color:#343a40;color:#343a40}.btn-outline-dark:hover{background-color:#343a40;border-color:#343a40;color:#fff}.btn-outline-dark.focus,.btn-outline-dark:focus{box-shadow:0 0 0 .2rem rgba(52,58,64,.5)}.btn-outline-dark.disabled,.btn-outline-dark:disabled{background-color:transparent;color:#343a40}.btn-outline-dark:not(:disabled):not(.disabled).active,.btn-outline-dark:not(:disabled):not(.disabled):active,.show>.btn-outline-dark.dropdown-toggle{background-color:#343a40;border-color:#343a40;color:#fff}.btn-outline-dark:not(:disabled):not(.disabled).active:focus,.btn-outline-dark:not(:disabled):not(.disabled):active:focus,.show>.btn-outline-dark.dropdown-toggle:focus{box-shadow:0 0 0 .2rem rgba(52,58,64,.5)}.btn-link{color:#007bff;font-weight:400;-webkit-text-decoration:none;text-decoration:none}.btn-link:hover{color:#0056b3}.btn-link.focus,.btn-link:focus,.btn-link:hover{-webkit-text-decoration:underline;text-decoration:underline}.btn-link.focus,.btn-link:focus{box-shadow:none}.btn-link.disabled,.btn-link:disabled{color:#6c757d;pointer-events:none}.btn-group-lg>.btn,.btn-lg{border-radius:.3rem;font-size:1.25rem;line-height:1.5;padding:.5rem 1rem}.btn-group-sm>.btn,.btn-sm{border-radius:.2rem;font-size:.875rem;line-height:1.5;padding:.25rem .5rem}.btn-block{display:block;width:100%}.btn-block+.btn-block{margin-top:.5rem}input[type=button].btn-block,input[type=reset].btn-block,input[type=submit].btn-block{width:100%}.fade{transition:opacity .15s linear}@media (prefers-reduced-motion:reduce){.fade{transition:none}}.fade:not(.show){opacity:0}.collapse:not(.show){display:none}.collapsing{height:0;overflow:hidden;position:relative;transition:height .35s ease}@media (prefers-reduced-motion:reduce){.collapsing{transition:none}}.dropdown,.dropleft,.dropright,.dropup{position:relative}.dropdown-toggle{white-space:nowrap}.dropdown-toggle:after{border-bottom:0;border-left:.3em solid transparent;border-right:.3em solid transparent;border-top:.3em solid;content:\"\";display:inline-block;margin-left:.255em;vertical-align:.255em}.dropdown-toggle:empty:after{margin-left:0}.dropdown-menu{background-clip:padding-box;background-color:#fff;border:1px solid rgba(0,0,0,.15);border-radius:.25rem;color:#212529;display:none;float:left;font-size:1rem;left:0;list-style:none;margin:.125rem 0 0;min-width:10rem;padding:.5rem 0;position:absolute;text-align:left;top:100%;z-index:1000}.dropdown-menu-left{left:0;right:auto}.dropdown-menu-right{left:auto;right:0}@media (min-width:576px){.dropdown-menu-sm-left{left:0;right:auto}.dropdown-menu-sm-right{left:auto;right:0}}@media (min-width:768px){.dropdown-menu-md-left{left:0;right:auto}.dropdown-menu-md-right{left:auto;right:0}}@media (min-width:992px){.dropdown-menu-lg-left{left:0;right:auto}.dropdown-menu-lg-right{left:auto;right:0}}@media (min-width:1200px){.dropdown-menu-xl-left{left:0;right:auto}.dropdown-menu-xl-right{left:auto;right:0}}.dropup .dropdown-menu{bottom:100%;margin-bottom:.125rem;margin-top:0;top:auto}.dropup .dropdown-toggle:after{border-bottom:.3em solid;border-left:.3em solid transparent;border-right:.3em solid transparent;border-top:0;content:\"\";display:inline-block;margin-left:.255em;vertical-align:.255em}.dropup .dropdown-toggle:empty:after{margin-left:0}.dropright .dropdown-menu{left:100%;margin-left:.125rem;margin-top:0;right:auto;top:0}.dropright .dropdown-toggle:after{border-bottom:.3em solid transparent;border-left:.3em solid;border-right:0;border-top:.3em solid transparent;content:\"\";display:inline-block;margin-left:.255em;vertical-align:.255em}.dropright .dropdown-toggle:empty:after{margin-left:0}.dropright .dropdown-toggle:after{vertical-align:0}.dropleft .dropdown-menu{left:auto;margin-right:.125rem;margin-top:0;right:100%;top:0}.dropleft .dropdown-toggle:after{content:\"\";display:inline-block;display:none;margin-left:.255em;vertical-align:.255em}.dropleft .dropdown-toggle:before{border-bottom:.3em solid transparent;border-right:.3em solid;border-top:.3em solid transparent;content:\"\";display:inline-block;margin-right:.255em;vertical-align:.255em}.dropleft .dropdown-toggle:empty:after{margin-left:0}.dropleft .dropdown-toggle:before{vertical-align:0}.dropdown-menu[x-placement^=bottom],.dropdown-menu[x-placement^=left],.dropdown-menu[x-placement^=right],.dropdown-menu[x-placement^=top]{bottom:auto;right:auto}.dropdown-divider{border-top:1px solid #e9ecef;height:0;margin:.5rem 0;overflow:hidden}.dropdown-item{background-color:transparent;border:0;clear:both;color:#212529;display:block;font-weight:400;padding:.25rem 1.5rem;text-align:inherit;white-space:nowrap;width:100%}.dropdown-item:focus,.dropdown-item:hover{background-color:#f8f9fa;color:#16181b;-webkit-text-decoration:none;text-decoration:none}.dropdown-item.active,.dropdown-item:active{background-color:#007bff;color:#fff;-webkit-text-decoration:none;text-decoration:none}.dropdown-item.disabled,.dropdown-item:disabled{background-color:transparent;color:#6c757d;pointer-events:none}.dropdown-menu.show{display:block}.dropdown-header{color:#6c757d;display:block;font-size:.875rem;margin-bottom:0;padding:.5rem 1.5rem;white-space:nowrap}.dropdown-item-text{color:#212529;display:block;padding:.25rem 1.5rem}.btn-group,.btn-group-vertical{display:inline-flex;position:relative;vertical-align:middle}.btn-group-vertical>.btn,.btn-group>.btn{flex:1 1 auto;position:relative}.btn-group-vertical>.btn.active,.btn-group-vertical>.btn:active,.btn-group-vertical>.btn:focus,.btn-group-vertical>.btn:hover,.btn-group>.btn.active,.btn-group>.btn:active,.btn-group>.btn:focus,.btn-group>.btn:hover{z-index:1}.btn-toolbar{display:flex;flex-wrap:wrap;justify-content:flex-start}.btn-toolbar .input-group{width:auto}.btn-group>.btn-group:not(:first-child),.btn-group>.btn:not(:first-child){margin-left:-1px}.btn-group>.btn-group:not(:last-child)>.btn,.btn-group>.btn:not(:last-child):not(.dropdown-toggle){border-bottom-right-radius:0;border-top-right-radius:0}.btn-group>.btn-group:not(:first-child)>.btn,.btn-group>.btn:not(:first-child){border-bottom-left-radius:0;border-top-left-radius:0}.dropdown-toggle-split{padding-left:.5625rem;padding-right:.5625rem}.dropdown-toggle-split:after,.dropright .dropdown-toggle-split:after,.dropup .dropdown-toggle-split:after{margin-left:0}.dropleft .dropdown-toggle-split:before{margin-right:0}.btn-group-sm>.btn+.dropdown-toggle-split,.btn-sm+.dropdown-toggle-split{padding-left:.375rem;padding-right:.375rem}.btn-group-lg>.btn+.dropdown-toggle-split,.btn-lg+.dropdown-toggle-split{padding-left:.75rem;padding-right:.75rem}.btn-group-vertical{align-items:flex-start;flex-direction:column;justify-content:center}.btn-group-vertical>.btn,.btn-group-vertical>.btn-group{width:100%}.btn-group-vertical>.btn-group:not(:first-child),.btn-group-vertical>.btn:not(:first-child){margin-top:-1px}.btn-group-vertical>.btn-group:not(:last-child)>.btn,.btn-group-vertical>.btn:not(:last-child):not(.dropdown-toggle){border-bottom-left-radius:0;border-bottom-right-radius:0}.btn-group-vertical>.btn-group:not(:first-child)>.btn,.btn-group-vertical>.btn:not(:first-child){border-top-left-radius:0;border-top-right-radius:0}.btn-group-toggle>.btn,.btn-group-toggle>.btn-group>.btn{margin-bottom:0}.btn-group-toggle>.btn input[type=checkbox],.btn-group-toggle>.btn input[type=radio],.btn-group-toggle>.btn-group>.btn input[type=checkbox],.btn-group-toggle>.btn-group>.btn input[type=radio]{position:absolute;clip:rect(0,0,0,0);pointer-events:none}.input-group{align-items:stretch;display:flex;flex-wrap:wrap;position:relative;width:100%}.input-group>.custom-file,.input-group>.custom-select,.input-group>.form-control,.input-group>.form-control-plaintext{flex:1 1 0%;margin-bottom:0;min-width:0;position:relative}.input-group>.custom-file+.custom-file,.input-group>.custom-file+.custom-select,.input-group>.custom-file+.form-control,.input-group>.custom-select+.custom-file,.input-group>.custom-select+.custom-select,.input-group>.custom-select+.form-control,.input-group>.form-control+.custom-file,.input-group>.form-control+.custom-select,.input-group>.form-control+.form-control,.input-group>.form-control-plaintext+.custom-file,.input-group>.form-control-plaintext+.custom-select,.input-group>.form-control-plaintext+.form-control{margin-left:-1px}.input-group>.custom-file .custom-file-input:focus~.custom-file-label,.input-group>.custom-select:focus,.input-group>.form-control:focus{z-index:3}.input-group>.custom-file .custom-file-input:focus{z-index:4}.input-group>.custom-select:not(:last-child),.input-group>.form-control:not(:last-child){border-bottom-right-radius:0;border-top-right-radius:0}.input-group>.custom-select:not(:first-child),.input-group>.form-control:not(:first-child){border-bottom-left-radius:0;border-top-left-radius:0}.input-group>.custom-file{align-items:center;display:flex}.input-group>.custom-file:not(:last-child) .custom-file-label,.input-group>.custom-file:not(:last-child) .custom-file-label:after{border-bottom-right-radius:0;border-top-right-radius:0}.input-group>.custom-file:not(:first-child) .custom-file-label{border-bottom-left-radius:0;border-top-left-radius:0}.input-group-append,.input-group-prepend{display:flex}.input-group-append .btn,.input-group-prepend .btn{position:relative;z-index:2}.input-group-append .btn:focus,.input-group-prepend .btn:focus{z-index:3}.input-group-append .btn+.btn,.input-group-append .btn+.input-group-text,.input-group-append .input-group-text+.btn,.input-group-append .input-group-text+.input-group-text,.input-group-prepend .btn+.btn,.input-group-prepend .btn+.input-group-text,.input-group-prepend .input-group-text+.btn,.input-group-prepend .input-group-text+.input-group-text{margin-left:-1px}.input-group-prepend{margin-right:-1px}.input-group-append{margin-left:-1px}.input-group-text{align-items:center;background-color:#e9ecef;border:1px solid #ced4da;border-radius:.25rem;color:#495057;display:flex;font-size:1rem;font-weight:400;line-height:1.5;margin-bottom:0;padding:.375rem .75rem;text-align:center;white-space:nowrap}.input-group-text input[type=checkbox],.input-group-text input[type=radio]{margin-top:0}.input-group-lg>.custom-select,.input-group-lg>.form-control:not(textarea){height:calc(1.5em + 1rem + 2px)}.input-group-lg>.custom-select,.input-group-lg>.form-control,.input-group-lg>.input-group-append>.btn,.input-group-lg>.input-group-append>.input-group-text,.input-group-lg>.input-group-prepend>.btn,.input-group-lg>.input-group-prepend>.input-group-text{border-radius:.3rem;font-size:1.25rem;line-height:1.5;padding:.5rem 1rem}.input-group-sm>.custom-select,.input-group-sm>.form-control:not(textarea){height:calc(1.5em + .5rem + 2px)}.input-group-sm>.custom-select,.input-group-sm>.form-control,.input-group-sm>.input-group-append>.btn,.input-group-sm>.input-group-append>.input-group-text,.input-group-sm>.input-group-prepend>.btn,.input-group-sm>.input-group-prepend>.input-group-text{border-radius:.2rem;font-size:.875rem;line-height:1.5;padding:.25rem .5rem}.input-group-lg>.custom-select,.input-group-sm>.custom-select{padding-right:1.75rem}.input-group>.input-group-append:last-child>.btn:not(:last-child):not(.dropdown-toggle),.input-group>.input-group-append:last-child>.input-group-text:not(:last-child),.input-group>.input-group-append:not(:last-child)>.btn,.input-group>.input-group-append:not(:last-child)>.input-group-text,.input-group>.input-group-prepend>.btn,.input-group>.input-group-prepend>.input-group-text{border-bottom-right-radius:0;border-top-right-radius:0}.input-group>.input-group-append>.btn,.input-group>.input-group-append>.input-group-text,.input-group>.input-group-prepend:first-child>.btn:not(:first-child),.input-group>.input-group-prepend:first-child>.input-group-text:not(:first-child),.input-group>.input-group-prepend:not(:first-child)>.btn,.input-group>.input-group-prepend:not(:first-child)>.input-group-text{border-bottom-left-radius:0;border-top-left-radius:0}.custom-control{display:block;min-height:1.5rem;padding-left:1.5rem;position:relative}.custom-control-inline{display:inline-flex;margin-right:1rem}.custom-control-input{height:1.25rem;left:0;opacity:0;position:absolute;width:1rem;z-index:-1}.custom-control-input:checked~.custom-control-label:before{background-color:#007bff;border-color:#007bff;color:#fff}.custom-control-input:focus~.custom-control-label:before{box-shadow:0 0 0 .2rem rgba(0,123,255,.25)}.custom-control-input:focus:not(:checked)~.custom-control-label:before{border-color:#80bdff}.custom-control-input:not(:disabled):active~.custom-control-label:before{background-color:#b3d7ff;border-color:#b3d7ff;color:#fff}.custom-control-input:disabled~.custom-control-label,.custom-control-input[disabled]~.custom-control-label{color:#6c757d}.custom-control-input:disabled~.custom-control-label:before,.custom-control-input[disabled]~.custom-control-label:before{background-color:#e9ecef}.custom-control-label{margin-bottom:0;position:relative;vertical-align:top}.custom-control-label:before{background-color:#fff;border:1px solid #adb5bd;pointer-events:none}.custom-control-label:after,.custom-control-label:before{content:\"\";display:block;height:1rem;left:-1.5rem;position:absolute;top:.25rem;width:1rem}.custom-control-label:after{background:no-repeat 50%/50% 50%}.custom-checkbox .custom-control-label:before{border-radius:.25rem}.custom-checkbox .custom-control-input:checked~.custom-control-label:after{background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='8' height='8'%3E%3Cpath fill='%23fff' d='m6.564.75-3.59 3.612-1.538-1.55L0 4.26l2.974 2.99L8 2.193z'/%3E%3C/svg%3E\")}.custom-checkbox .custom-control-input:indeterminate~.custom-control-label:before{background-color:#007bff;border-color:#007bff}.custom-checkbox .custom-control-input:indeterminate~.custom-control-label:after{background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='4' height='4'%3E%3Cpath stroke='%23fff' d='M0 2h4'/%3E%3C/svg%3E\")}.custom-checkbox .custom-control-input:disabled:checked~.custom-control-label:before{background-color:rgba(0,123,255,.5)}.custom-checkbox .custom-control-input:disabled:indeterminate~.custom-control-label:before{background-color:rgba(0,123,255,.5)}.custom-radio .custom-control-label:before{border-radius:50%}.custom-radio .custom-control-input:checked~.custom-control-label:after{background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='-4 -4 8 8'%3E%3Ccircle r='3' fill='%23fff'/%3E%3C/svg%3E\")}.custom-radio .custom-control-input:disabled:checked~.custom-control-label:before{background-color:rgba(0,123,255,.5)}.custom-switch{padding-left:2.25rem}.custom-switch .custom-control-label:before{border-radius:.5rem;left:-2.25rem;pointer-events:all;width:1.75rem}.custom-switch .custom-control-label:after{background-color:#adb5bd;border-radius:.5rem;height:calc(1rem - 4px);left:calc(-2.25rem + 2px);top:calc(.25rem + 2px);transition:transform .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out;width:calc(1rem - 4px)}@media (prefers-reduced-motion:reduce){.custom-switch .custom-control-label:after{transition:none}}.custom-switch .custom-control-input:checked~.custom-control-label:after{background-color:#fff;transform:translateX(.75rem)}.custom-switch .custom-control-input:disabled:checked~.custom-control-label:before{background-color:rgba(0,123,255,.5)}.custom-select{-webkit-appearance:none;-moz-appearance:none;appearance:none;background:#fff url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='4' height='5'%3E%3Cpath fill='%23343a40' d='M2 0 0 2h4zm0 5L0 3h4z'/%3E%3C/svg%3E\") no-repeat right .75rem center/8px 10px;border:1px solid #ced4da;border-radius:.25rem;color:#495057;display:inline-block;font-size:1rem;font-weight:400;height:calc(1.5em + .75rem + 2px);line-height:1.5;padding:.375rem 1.75rem .375rem .75rem;vertical-align:middle;width:100%}.custom-select:focus{border-color:#80bdff;box-shadow:0 0 0 .2rem rgba(0,123,255,.25);outline:0}.custom-select:focus::-ms-value{background-color:#fff;color:#495057}.custom-select[multiple],.custom-select[size]:not([size=\"1\"]){background-image:none;height:auto;padding-right:.75rem}.custom-select:disabled{background-color:#e9ecef;color:#6c757d}.custom-select::-ms-expand{display:none}.custom-select:-moz-focusring{color:transparent;text-shadow:0 0 0 #495057}.custom-select-sm{font-size:.875rem;height:calc(1.5em + .5rem + 2px);padding-bottom:.25rem;padding-left:.5rem;padding-top:.25rem}.custom-select-lg{font-size:1.25rem;height:calc(1.5em + 1rem + 2px);padding-bottom:.5rem;padding-left:1rem;padding-top:.5rem}.custom-file{display:inline-block;margin-bottom:0}.custom-file,.custom-file-input{height:calc(1.5em + .75rem + 2px);position:relative;width:100%}.custom-file-input{margin:0;opacity:0;z-index:2}.custom-file-input:focus~.custom-file-label{border-color:#80bdff;box-shadow:0 0 0 .2rem rgba(0,123,255,.25)}.custom-file-input:disabled~.custom-file-label,.custom-file-input[disabled]~.custom-file-label{background-color:#e9ecef}.custom-file-input:lang(en)~.custom-file-label:after{content:\"Browse\"}.custom-file-input~.custom-file-label[data-browse]:after{content:attr(data-browse)}.custom-file-label{background-color:#fff;border:1px solid #ced4da;border-radius:.25rem;font-weight:400;height:calc(1.5em + .75rem + 2px);left:0;z-index:1}.custom-file-label,.custom-file-label:after{color:#495057;line-height:1.5;padding:.375rem .75rem;position:absolute;right:0;top:0}.custom-file-label:after{background-color:#e9ecef;border-left:inherit;border-radius:0 .25rem .25rem 0;bottom:0;content:\"Browse\";display:block;height:calc(1.5em + .75rem);z-index:3}.custom-range{-webkit-appearance:none;-moz-appearance:none;appearance:none;background-color:transparent;height:1.4rem;padding:0;width:100%}.custom-range:focus{outline:0}.custom-range:focus::-webkit-slider-thumb{box-shadow:0 0 0 1px #fff,0 0 0 .2rem rgba(0,123,255,.25)}.custom-range:focus::-moz-range-thumb{box-shadow:0 0 0 1px #fff,0 0 0 .2rem rgba(0,123,255,.25)}.custom-range:focus::-ms-thumb{box-shadow:0 0 0 1px #fff,0 0 0 .2rem rgba(0,123,255,.25)}.custom-range::-moz-focus-outer{border:0}.custom-range::-webkit-slider-thumb{-webkit-appearance:none;appearance:none;background-color:#007bff;border:0;border-radius:1rem;height:1rem;margin-top:-.25rem;-webkit-transition:background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out;transition:background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out;width:1rem}@media (prefers-reduced-motion:reduce){.custom-range::-webkit-slider-thumb{-webkit-transition:none;transition:none}}.custom-range::-webkit-slider-thumb:active{background-color:#b3d7ff}.custom-range::-webkit-slider-runnable-track{background-color:#dee2e6;border-color:transparent;border-radius:1rem;color:transparent;cursor:pointer;height:.5rem;width:100%}.custom-range::-moz-range-thumb{-moz-appearance:none;appearance:none;background-color:#007bff;border:0;border-radius:1rem;height:1rem;-moz-transition:background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out;transition:background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out;width:1rem}@media (prefers-reduced-motion:reduce){.custom-range::-moz-range-thumb{-moz-transition:none;transition:none}}.custom-range::-moz-range-thumb:active{background-color:#b3d7ff}.custom-range::-moz-range-track{background-color:#dee2e6;border-color:transparent;border-radius:1rem;color:transparent;cursor:pointer;height:.5rem;width:100%}.custom-range::-ms-thumb{appearance:none;background-color:#007bff;border:0;border-radius:1rem;height:1rem;margin-left:.2rem;margin-right:.2rem;margin-top:0;-ms-transition:background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out;transition:background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out;width:1rem}@media (prefers-reduced-motion:reduce){.custom-range::-ms-thumb{-ms-transition:none;transition:none}}.custom-range::-ms-thumb:active{background-color:#b3d7ff}.custom-range::-ms-track{background-color:transparent;border-color:transparent;border-width:.5rem;color:transparent;cursor:pointer;height:.5rem;width:100%}.custom-range::-ms-fill-lower,.custom-range::-ms-fill-upper{background-color:#dee2e6;border-radius:1rem}.custom-range::-ms-fill-upper{margin-right:15px}.custom-range:disabled::-webkit-slider-thumb{background-color:#adb5bd}.custom-range:disabled::-webkit-slider-runnable-track{cursor:default}.custom-range:disabled::-moz-range-thumb{background-color:#adb5bd}.custom-range:disabled::-moz-range-track{cursor:default}.custom-range:disabled::-ms-thumb{background-color:#adb5bd}.custom-control-label:before,.custom-file-label,.custom-select{transition:background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out}@media (prefers-reduced-motion:reduce){.custom-control-label:before,.custom-file-label,.custom-select{transition:none}}.nav{display:flex;flex-wrap:wrap;list-style:none;margin-bottom:0;padding-left:0}.nav-link{display:block;padding:.5rem 1rem}.nav-link:focus,.nav-link:hover{-webkit-text-decoration:none;text-decoration:none}.nav-link.disabled{color:#6c757d;cursor:default;pointer-events:none}.nav-tabs{border-bottom:1px solid #dee2e6}.nav-tabs .nav-item{margin-bottom:-1px}.nav-tabs .nav-link{border:1px solid transparent;border-top-left-radius:.25rem;border-top-right-radius:.25rem}.nav-tabs .nav-link:focus,.nav-tabs .nav-link:hover{border-color:#e9ecef #e9ecef #dee2e6}.nav-tabs .nav-link.disabled{background-color:transparent;border-color:transparent;color:#6c757d}.nav-tabs .nav-item.show .nav-link,.nav-tabs .nav-link.active{background-color:#fff;border-color:#dee2e6 #dee2e6 #fff;color:#495057}.nav-tabs .dropdown-menu{border-top-left-radius:0;border-top-right-radius:0;margin-top:-1px}.nav-pills .nav-link{border-radius:.25rem}.nav-pills .nav-link.active,.nav-pills .show>.nav-link{background-color:#007bff;color:#fff}.nav-fill .nav-item{flex:1 1 auto;text-align:center}.nav-justified .nav-item{flex-basis:0;flex-grow:1;text-align:center}.tab-content>.tab-pane{display:none}.tab-content>.active{display:block}.navbar{padding:.5rem 1rem;position:relative}.navbar,.navbar .container,.navbar .container-fluid,.navbar .container-lg,.navbar .container-md,.navbar .container-sm,.navbar .container-xl{align-items:center;display:flex;flex-wrap:wrap;justify-content:space-between}.navbar-brand{display:inline-block;font-size:1.25rem;line-height:inherit;margin-right:1rem;padding-bottom:.3125rem;padding-top:.3125rem;white-space:nowrap}.navbar-brand:focus,.navbar-brand:hover{-webkit-text-decoration:none;text-decoration:none}.navbar-nav{display:flex;flex-direction:column;list-style:none;margin-bottom:0;padding-left:0}.navbar-nav .nav-link{padding-left:0;padding-right:0}.navbar-nav .dropdown-menu{float:none;position:static}.navbar-text{display:inline-block;padding-bottom:.5rem;padding-top:.5rem}.navbar-collapse{align-items:center;flex-basis:100%;flex-grow:1}.navbar-toggler{background-color:transparent;border:1px solid transparent;border-radius:.25rem;font-size:1.25rem;line-height:1;padding:.25rem .75rem}.navbar-toggler:focus,.navbar-toggler:hover{-webkit-text-decoration:none;text-decoration:none}.navbar-toggler-icon{background:no-repeat 50%;background-size:100% 100%;content:\"\";display:inline-block;height:1.5em;vertical-align:middle;width:1.5em}@media (max-width:575.98px){.navbar-expand-sm>.container,.navbar-expand-sm>.container-fluid,.navbar-expand-sm>.container-lg,.navbar-expand-sm>.container-md,.navbar-expand-sm>.container-sm,.navbar-expand-sm>.container-xl{padding-left:0;padding-right:0}}@media (min-width:576px){.navbar-expand-sm{flex-flow:row nowrap;justify-content:flex-start}.navbar-expand-sm .navbar-nav{flex-direction:row}.navbar-expand-sm .navbar-nav .dropdown-menu{position:absolute}.navbar-expand-sm .navbar-nav .nav-link{padding-left:.5rem;padding-right:.5rem}.navbar-expand-sm>.container,.navbar-expand-sm>.container-fluid,.navbar-expand-sm>.container-lg,.navbar-expand-sm>.container-md,.navbar-expand-sm>.container-sm,.navbar-expand-sm>.container-xl{flex-wrap:nowrap}.navbar-expand-sm .navbar-collapse{display:flex!important;flex-basis:auto}.navbar-expand-sm .navbar-toggler{display:none}}@media (max-width:767.98px){.navbar-expand-md>.container,.navbar-expand-md>.container-fluid,.navbar-expand-md>.container-lg,.navbar-expand-md>.container-md,.navbar-expand-md>.container-sm,.navbar-expand-md>.container-xl{padding-left:0;padding-right:0}}@media (min-width:768px){.navbar-expand-md{flex-flow:row nowrap;justify-content:flex-start}.navbar-expand-md .navbar-nav{flex-direction:row}.navbar-expand-md .navbar-nav .dropdown-menu{position:absolute}.navbar-expand-md .navbar-nav .nav-link{padding-left:.5rem;padding-right:.5rem}.navbar-expand-md>.container,.navbar-expand-md>.container-fluid,.navbar-expand-md>.container-lg,.navbar-expand-md>.container-md,.navbar-expand-md>.container-sm,.navbar-expand-md>.container-xl{flex-wrap:nowrap}.navbar-expand-md .navbar-collapse{display:flex!important;flex-basis:auto}.navbar-expand-md .navbar-toggler{display:none}}@media (max-width:991.98px){.navbar-expand-lg>.container,.navbar-expand-lg>.container-fluid,.navbar-expand-lg>.container-lg,.navbar-expand-lg>.container-md,.navbar-expand-lg>.container-sm,.navbar-expand-lg>.container-xl{padding-left:0;padding-right:0}}@media (min-width:992px){.navbar-expand-lg{flex-flow:row nowrap;justify-content:flex-start}.navbar-expand-lg .navbar-nav{flex-direction:row}.navbar-expand-lg .navbar-nav .dropdown-menu{position:absolute}.navbar-expand-lg .navbar-nav .nav-link{padding-left:.5rem;padding-right:.5rem}.navbar-expand-lg>.container,.navbar-expand-lg>.container-fluid,.navbar-expand-lg>.container-lg,.navbar-expand-lg>.container-md,.navbar-expand-lg>.container-sm,.navbar-expand-lg>.container-xl{flex-wrap:nowrap}.navbar-expand-lg .navbar-collapse{display:flex!important;flex-basis:auto}.navbar-expand-lg .navbar-toggler{display:none}}@media (max-width:1199.98px){.navbar-expand-xl>.container,.navbar-expand-xl>.container-fluid,.navbar-expand-xl>.container-lg,.navbar-expand-xl>.container-md,.navbar-expand-xl>.container-sm,.navbar-expand-xl>.container-xl{padding-left:0;padding-right:0}}@media (min-width:1200px){.navbar-expand-xl{flex-flow:row nowrap;justify-content:flex-start}.navbar-expand-xl .navbar-nav{flex-direction:row}.navbar-expand-xl .navbar-nav .dropdown-menu{position:absolute}.navbar-expand-xl .navbar-nav .nav-link{padding-left:.5rem;padding-right:.5rem}.navbar-expand-xl>.container,.navbar-expand-xl>.container-fluid,.navbar-expand-xl>.container-lg,.navbar-expand-xl>.container-md,.navbar-expand-xl>.container-sm,.navbar-expand-xl>.container-xl{flex-wrap:nowrap}.navbar-expand-xl .navbar-collapse{display:flex!important;flex-basis:auto}.navbar-expand-xl .navbar-toggler{display:none}}.navbar-expand{flex-flow:row nowrap;justify-content:flex-start}.navbar-expand>.container,.navbar-expand>.container-fluid,.navbar-expand>.container-lg,.navbar-expand>.container-md,.navbar-expand>.container-sm,.navbar-expand>.container-xl{padding-left:0;padding-right:0}.navbar-expand .navbar-nav{flex-direction:row}.navbar-expand .navbar-nav .dropdown-menu{position:absolute}.navbar-expand .navbar-nav .nav-link{padding-left:.5rem;padding-right:.5rem}.navbar-expand>.container,.navbar-expand>.container-fluid,.navbar-expand>.container-lg,.navbar-expand>.container-md,.navbar-expand>.container-sm,.navbar-expand>.container-xl{flex-wrap:nowrap}.navbar-expand .navbar-collapse{display:flex!important;flex-basis:auto}.navbar-expand .navbar-toggler{display:none}.navbar-light .navbar-brand,.navbar-light .navbar-brand:focus,.navbar-light .navbar-brand:hover{color:rgba(0,0,0,.9)}.navbar-light .navbar-nav .nav-link{color:rgba(0,0,0,.5)}.navbar-light .navbar-nav .nav-link:focus,.navbar-light .navbar-nav .nav-link:hover{color:rgba(0,0,0,.7)}.navbar-light .navbar-nav .nav-link.disabled{color:rgba(0,0,0,.3)}.navbar-light .navbar-nav .active>.nav-link,.navbar-light .navbar-nav .nav-link.active,.navbar-light .navbar-nav .nav-link.show,.navbar-light .navbar-nav .show>.nav-link{color:rgba(0,0,0,.9)}.navbar-light .navbar-toggler{border-color:rgba(0,0,0,.1);color:rgba(0,0,0,.5)}.navbar-light .navbar-toggler-icon{background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='30' height='30'%3E%3Cpath stroke='rgba(0, 0, 0, 0.5)' stroke-linecap='round' stroke-miterlimit='10' stroke-width='2' d='M4 7h22M4 15h22M4 23h22'/%3E%3C/svg%3E\")}.navbar-light .navbar-text{color:rgba(0,0,0,.5)}.navbar-light .navbar-text a,.navbar-light .navbar-text a:focus,.navbar-light .navbar-text a:hover{color:rgba(0,0,0,.9)}.navbar-dark .navbar-brand,.navbar-dark .navbar-brand:focus,.navbar-dark .navbar-brand:hover{color:#fff}.navbar-dark .navbar-nav .nav-link{color:hsla(0,0%,100%,.5)}.navbar-dark .navbar-nav .nav-link:focus,.navbar-dark .navbar-nav .nav-link:hover{color:hsla(0,0%,100%,.75)}.navbar-dark .navbar-nav .nav-link.disabled{color:hsla(0,0%,100%,.25)}.navbar-dark .navbar-nav .active>.nav-link,.navbar-dark .navbar-nav .nav-link.active,.navbar-dark .navbar-nav .nav-link.show,.navbar-dark .navbar-nav .show>.nav-link{color:#fff}.navbar-dark .navbar-toggler{border-color:hsla(0,0%,100%,.1);color:hsla(0,0%,100%,.5)}.navbar-dark .navbar-toggler-icon{background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='30' height='30'%3E%3Cpath stroke='rgba(255, 255, 255, 0.5)' stroke-linecap='round' stroke-miterlimit='10' stroke-width='2' d='M4 7h22M4 15h22M4 23h22'/%3E%3C/svg%3E\")}.navbar-dark .navbar-text{color:hsla(0,0%,100%,.5)}.navbar-dark .navbar-text a,.navbar-dark .navbar-text a:focus,.navbar-dark .navbar-text a:hover{color:#fff}.card{display:flex;flex-direction:column;min-width:0;position:relative;word-wrap:break-word;background-clip:border-box;background-color:#fff;border:1px solid rgba(0,0,0,.125);border-radius:.25rem}.card>hr{margin-left:0;margin-right:0}.card>.list-group:first-child .list-group-item:first-child{border-top-left-radius:.25rem;border-top-right-radius:.25rem}.card>.list-group:last-child .list-group-item:last-child{border-bottom-left-radius:.25rem;border-bottom-right-radius:.25rem}.card-body{flex:1 1 auto;min-height:1px;padding:1.25rem}.card-title{margin-bottom:.75rem}.card-subtitle{margin-top:-.375rem}.card-subtitle,.card-text:last-child{margin-bottom:0}.card-link:hover{-webkit-text-decoration:none;text-decoration:none}.card-link+.card-link{margin-left:1.25rem}.card-header{background-color:rgba(0,0,0,.03);border-bottom:1px solid rgba(0,0,0,.125);margin-bottom:0;padding:.75rem 1.25rem}.card-header:first-child{border-radius:calc(.25rem - 1px) calc(.25rem - 1px) 0 0}.card-header+.list-group .list-group-item:first-child{border-top:0}.card-footer{background-color:rgba(0,0,0,.03);border-top:1px solid rgba(0,0,0,.125);padding:.75rem 1.25rem}.card-footer:last-child{border-radius:0 0 calc(.25rem - 1px) calc(.25rem - 1px)}.card-header-tabs{border-bottom:0;margin-bottom:-.75rem}.card-header-pills,.card-header-tabs{margin-left:-.625rem;margin-right:-.625rem}.card-img-overlay{bottom:0;left:0;padding:1.25rem;position:absolute;right:0;top:0}.card-img,.card-img-bottom,.card-img-top{flex-shrink:0;width:100%}.card-img,.card-img-top{border-top-left-radius:calc(.25rem - 1px);border-top-right-radius:calc(.25rem - 1px)}.card-img,.card-img-bottom{border-bottom-left-radius:calc(.25rem - 1px);border-bottom-right-radius:calc(.25rem - 1px)}.card-deck .card{margin-bottom:15px}@media (min-width:576px){.card-deck{display:flex;flex-flow:row wrap;margin-left:-15px;margin-right:-15px}.card-deck .card{flex:1 0 0%;margin-bottom:0;margin-left:15px;margin-right:15px}}.card-group>.card{margin-bottom:15px}@media (min-width:576px){.card-group{display:flex;flex-flow:row wrap}.card-group>.card{flex:1 0 0%;margin-bottom:0}.card-group>.card+.card{border-left:0;margin-left:0}.card-group>.card:not(:last-child){border-bottom-right-radius:0;border-top-right-radius:0}.card-group>.card:not(:last-child) .card-header,.card-group>.card:not(:last-child) .card-img-top{border-top-right-radius:0}.card-group>.card:not(:last-child) .card-footer,.card-group>.card:not(:last-child) .card-img-bottom{border-bottom-right-radius:0}.card-group>.card:not(:first-child){border-bottom-left-radius:0;border-top-left-radius:0}.card-group>.card:not(:first-child) .card-header,.card-group>.card:not(:first-child) .card-img-top{border-top-left-radius:0}.card-group>.card:not(:first-child) .card-footer,.card-group>.card:not(:first-child) .card-img-bottom{border-bottom-left-radius:0}}.card-columns .card{margin-bottom:.75rem}@media (min-width:576px){.card-columns{-moz-column-count:3;column-count:3;-moz-column-gap:1.25rem;column-gap:1.25rem;orphans:1;widows:1}.card-columns .card{display:inline-block;width:100%}}.accordion>.card{overflow:hidden}.accordion>.card:not(:last-of-type){border-bottom:0;border-bottom-left-radius:0;border-bottom-right-radius:0}.accordion>.card:not(:first-of-type){border-top-left-radius:0;border-top-right-radius:0}.accordion>.card>.card-header{border-radius:0;margin-bottom:-1px}.breadcrumb{background-color:#e9ecef;border-radius:.25rem;display:flex;flex-wrap:wrap;list-style:none;margin-bottom:1rem;padding:.75rem 1rem}.breadcrumb-item+.breadcrumb-item{padding-left:.5rem}.breadcrumb-item+.breadcrumb-item:before{color:#6c757d;content:\"/\";display:inline-block;padding-right:.5rem}.breadcrumb-item+.breadcrumb-item:hover:before{-webkit-text-decoration:underline;text-decoration:underline;-webkit-text-decoration:none;text-decoration:none}.breadcrumb-item.active{color:#6c757d}.pagination{border-radius:.25rem;display:flex;list-style:none;padding-left:0}.page-link{background-color:#fff;border:1px solid #dee2e6;color:#007bff;display:block;line-height:1.25;margin-left:-1px;padding:.5rem .75rem;position:relative}.page-link:hover{background-color:#e9ecef;border-color:#dee2e6;color:#0056b3;-webkit-text-decoration:none;text-decoration:none;z-index:2}.page-link:focus{box-shadow:0 0 0 .2rem rgba(0,123,255,.25);outline:0;z-index:3}.page-item:first-child .page-link{border-bottom-left-radius:.25rem;border-top-left-radius:.25rem;margin-left:0}.page-item:last-child .page-link{border-bottom-right-radius:.25rem;border-top-right-radius:.25rem}.page-item.active .page-link{background-color:#007bff;border-color:#007bff;color:#fff;z-index:3}.page-item.disabled .page-link{background-color:#fff;border-color:#dee2e6;color:#6c757d;cursor:auto;pointer-events:none}.pagination-lg .page-link{font-size:1.25rem;line-height:1.5;padding:.75rem 1.5rem}.pagination-lg .page-item:first-child .page-link{border-bottom-left-radius:.3rem;border-top-left-radius:.3rem}.pagination-lg .page-item:last-child .page-link{border-bottom-right-radius:.3rem;border-top-right-radius:.3rem}.pagination-sm .page-link{font-size:.875rem;line-height:1.5;padding:.25rem .5rem}.pagination-sm .page-item:first-child .page-link{border-bottom-left-radius:.2rem;border-top-left-radius:.2rem}.pagination-sm .page-item:last-child .page-link{border-bottom-right-radius:.2rem;border-top-right-radius:.2rem}.badge{border-radius:.25rem;display:inline-block;font-size:75%;font-weight:700;line-height:1;padding:.25em .4em;text-align:center;transition:color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out;vertical-align:baseline;white-space:nowrap}@media (prefers-reduced-motion:reduce){.badge{transition:none}}a.badge:focus,a.badge:hover{-webkit-text-decoration:none;text-decoration:none}.badge:empty{display:none}.btn .badge{position:relative;top:-1px}.badge-pill{border-radius:10rem;padding-left:.6em;padding-right:.6em}.badge-primary{background-color:#007bff;color:#fff}a.badge-primary:focus,a.badge-primary:hover{background-color:#0062cc;color:#fff}a.badge-primary.focus,a.badge-primary:focus{box-shadow:0 0 0 .2rem rgba(0,123,255,.5);outline:0}.badge-secondary{background-color:#6c757d;color:#fff}a.badge-secondary:focus,a.badge-secondary:hover{background-color:#545b62;color:#fff}a.badge-secondary.focus,a.badge-secondary:focus{box-shadow:0 0 0 .2rem hsla(208,7%,46%,.5);outline:0}.badge-success{background-color:#28a745;color:#fff}a.badge-success:focus,a.badge-success:hover{background-color:#1e7e34;color:#fff}a.badge-success.focus,a.badge-success:focus{box-shadow:0 0 0 .2rem rgba(40,167,69,.5);outline:0}.badge-info{background-color:#17a2b8;color:#fff}a.badge-info:focus,a.badge-info:hover{background-color:#117a8b;color:#fff}a.badge-info.focus,a.badge-info:focus{box-shadow:0 0 0 .2rem rgba(23,162,184,.5);outline:0}.badge-warning{background-color:#ffc107;color:#212529}a.badge-warning:focus,a.badge-warning:hover{background-color:#d39e00;color:#212529}a.badge-warning.focus,a.badge-warning:focus{box-shadow:0 0 0 .2rem rgba(255,193,7,.5);outline:0}.badge-danger{background-color:#dc3545;color:#fff}a.badge-danger:focus,a.badge-danger:hover{background-color:#bd2130;color:#fff}a.badge-danger.focus,a.badge-danger:focus{box-shadow:0 0 0 .2rem rgba(220,53,69,.5);outline:0}.badge-light{background-color:#f8f9fa;color:#212529}a.badge-light:focus,a.badge-light:hover{background-color:#dae0e5;color:#212529}a.badge-light.focus,a.badge-light:focus{box-shadow:0 0 0 .2rem rgba(248,249,250,.5);outline:0}.badge-dark{background-color:#343a40;color:#fff}a.badge-dark:focus,a.badge-dark:hover{background-color:#1d2124;color:#fff}a.badge-dark.focus,a.badge-dark:focus{box-shadow:0 0 0 .2rem rgba(52,58,64,.5);outline:0}.jumbotron{background-color:#e9ecef;border-radius:.3rem;margin-bottom:2rem;padding:2rem 1rem}@media (min-width:576px){.jumbotron{padding:4rem 2rem}}.jumbotron-fluid{border-radius:0;padding-left:0;padding-right:0}.alert{border:1px solid transparent;border-radius:.25rem;margin-bottom:1rem;padding:.75rem 1.25rem;position:relative}.alert-heading{color:inherit}.alert-link{font-weight:700}.alert-dismissible{padding-right:4rem}.alert-dismissible .close{color:inherit;padding:.75rem 1.25rem;position:absolute;right:0;top:0}.alert-primary{background-color:#cce5ff;border-color:#b8daff;color:#004085}.alert-primary hr{border-top-color:#9fcdff}.alert-primary .alert-link{color:#002752}.alert-secondary{background-color:#e2e3e5;border-color:#d6d8db;color:#383d41}.alert-secondary hr{border-top-color:#c8cbcf}.alert-secondary .alert-link{color:#202326}.alert-success{background-color:#d4edda;border-color:#c3e6cb;color:#155724}.alert-success hr{border-top-color:#b1dfbb}.alert-success .alert-link{color:#0b2e13}.alert-info{background-color:#d1ecf1;border-color:#bee5eb;color:#0c5460}.alert-info hr{border-top-color:#abdde5}.alert-info .alert-link{color:#062c33}.alert-warning{background-color:#fff3cd;border-color:#ffeeba;color:#856404}.alert-warning hr{border-top-color:#ffe8a1}.alert-warning .alert-link{color:#533f03}.alert-danger{background-color:#f8d7da;border-color:#f5c6cb;color:#721c24}.alert-danger hr{border-top-color:#f1b0b7}.alert-danger .alert-link{color:#491217}.alert-light{background-color:#fefefe;border-color:#fdfdfe;color:#818182}.alert-light hr{border-top-color:#ececf6}.alert-light .alert-link{color:#686868}.alert-dark{background-color:#d6d8d9;border-color:#c6c8ca;color:#1b1e21}.alert-dark hr{border-top-color:#b9bbbe}.alert-dark .alert-link{color:#040505}@keyframes progress-bar-stripes{0%{background-position:1rem 0}to{background-position:0 0}}.progress{background-color:#e9ecef;border-radius:.25rem;font-size:.75rem;height:1rem}.progress,.progress-bar{display:flex;overflow:hidden}.progress-bar{background-color:#007bff;color:#fff;flex-direction:column;justify-content:center;text-align:center;transition:width .6s ease;white-space:nowrap}@media (prefers-reduced-motion:reduce){.progress-bar{transition:none}}.progress-bar-striped{background-image:linear-gradient(45deg,hsla(0,0%,100%,.15) 25%,transparent 0,transparent 50%,hsla(0,0%,100%,.15) 0,hsla(0,0%,100%,.15) 75%,transparent 0,transparent);background-size:1rem 1rem}.progress-bar-animated{animation:progress-bar-stripes 1s linear infinite}@media (prefers-reduced-motion:reduce){.progress-bar-animated{animation:none}}.media{align-items:flex-start;display:flex}.media-body{flex:1}.list-group{display:flex;flex-direction:column;margin-bottom:0;padding-left:0}.list-group-item-action{color:#495057;text-align:inherit;width:100%}.list-group-item-action:focus,.list-group-item-action:hover{background-color:#f8f9fa;color:#495057;-webkit-text-decoration:none;text-decoration:none;z-index:1}.list-group-item-action:active{background-color:#e9ecef;color:#212529}.list-group-item{background-color:#fff;border:1px solid rgba(0,0,0,.125);display:block;padding:.75rem 1.25rem;position:relative}.list-group-item:first-child{border-top-left-radius:.25rem;border-top-right-radius:.25rem}.list-group-item:last-child{border-bottom-left-radius:.25rem;border-bottom-right-radius:.25rem}.list-group-item.disabled,.list-group-item:disabled{background-color:#fff;color:#6c757d;pointer-events:none}.list-group-item.active{background-color:#007bff;border-color:#007bff;color:#fff;z-index:2}.list-group-item+.list-group-item{border-top-width:0}.list-group-item+.list-group-item.active{border-top-width:1px;margin-top:-1px}.list-group-horizontal{flex-direction:row}.list-group-horizontal .list-group-item:first-child{border-bottom-left-radius:.25rem;border-top-right-radius:0}.list-group-horizontal .list-group-item:last-child{border-bottom-left-radius:0;border-top-right-radius:.25rem}.list-group-horizontal .list-group-item.active{margin-top:0}.list-group-horizontal .list-group-item+.list-group-item{border-left-width:0;border-top-width:1px}.list-group-horizontal .list-group-item+.list-group-item.active{border-left-width:1px;margin-left:-1px}@media (min-width:576px){.list-group-horizontal-sm{flex-direction:row}.list-group-horizontal-sm .list-group-item:first-child{border-bottom-left-radius:.25rem;border-top-right-radius:0}.list-group-horizontal-sm .list-group-item:last-child{border-bottom-left-radius:0;border-top-right-radius:.25rem}.list-group-horizontal-sm .list-group-item.active{margin-top:0}.list-group-horizontal-sm .list-group-item+.list-group-item{border-left-width:0;border-top-width:1px}.list-group-horizontal-sm .list-group-item+.list-group-item.active{border-left-width:1px;margin-left:-1px}}@media (min-width:768px){.list-group-horizontal-md{flex-direction:row}.list-group-horizontal-md .list-group-item:first-child{border-bottom-left-radius:.25rem;border-top-right-radius:0}.list-group-horizontal-md .list-group-item:last-child{border-bottom-left-radius:0;border-top-right-radius:.25rem}.list-group-horizontal-md .list-group-item.active{margin-top:0}.list-group-horizontal-md .list-group-item+.list-group-item{border-left-width:0;border-top-width:1px}.list-group-horizontal-md .list-group-item+.list-group-item.active{border-left-width:1px;margin-left:-1px}}@media (min-width:992px){.list-group-horizontal-lg{flex-direction:row}.list-group-horizontal-lg .list-group-item:first-child{border-bottom-left-radius:.25rem;border-top-right-radius:0}.list-group-horizontal-lg .list-group-item:last-child{border-bottom-left-radius:0;border-top-right-radius:.25rem}.list-group-horizontal-lg .list-group-item.active{margin-top:0}.list-group-horizontal-lg .list-group-item+.list-group-item{border-left-width:0;border-top-width:1px}.list-group-horizontal-lg .list-group-item+.list-group-item.active{border-left-width:1px;margin-left:-1px}}@media (min-width:1200px){.list-group-horizontal-xl{flex-direction:row}.list-group-horizontal-xl .list-group-item:first-child{border-bottom-left-radius:.25rem;border-top-right-radius:0}.list-group-horizontal-xl .list-group-item:last-child{border-bottom-left-radius:0;border-top-right-radius:.25rem}.list-group-horizontal-xl .list-group-item.active{margin-top:0}.list-group-horizontal-xl .list-group-item+.list-group-item{border-left-width:0;border-top-width:1px}.list-group-horizontal-xl .list-group-item+.list-group-item.active{border-left-width:1px;margin-left:-1px}}.list-group-flush .list-group-item{border-left-width:0;border-radius:0;border-right-width:0}.list-group-flush .list-group-item:first-child{border-top-width:0}.list-group-flush:last-child .list-group-item:last-child{border-bottom-width:0}.list-group-item-primary{background-color:#b8daff;color:#004085}.list-group-item-primary.list-group-item-action:focus,.list-group-item-primary.list-group-item-action:hover{background-color:#9fcdff;color:#004085}.list-group-item-primary.list-group-item-action.active{background-color:#004085;border-color:#004085;color:#fff}.list-group-item-secondary{background-color:#d6d8db;color:#383d41}.list-group-item-secondary.list-group-item-action:focus,.list-group-item-secondary.list-group-item-action:hover{background-color:#c8cbcf;color:#383d41}.list-group-item-secondary.list-group-item-action.active{background-color:#383d41;border-color:#383d41;color:#fff}.list-group-item-success{background-color:#c3e6cb;color:#155724}.list-group-item-success.list-group-item-action:focus,.list-group-item-success.list-group-item-action:hover{background-color:#b1dfbb;color:#155724}.list-group-item-success.list-group-item-action.active{background-color:#155724;border-color:#155724;color:#fff}.list-group-item-info{background-color:#bee5eb;color:#0c5460}.list-group-item-info.list-group-item-action:focus,.list-group-item-info.list-group-item-action:hover{background-color:#abdde5;color:#0c5460}.list-group-item-info.list-group-item-action.active{background-color:#0c5460;border-color:#0c5460;color:#fff}.list-group-item-warning{background-color:#ffeeba;color:#856404}.list-group-item-warning.list-group-item-action:focus,.list-group-item-warning.list-group-item-action:hover{background-color:#ffe8a1;color:#856404}.list-group-item-warning.list-group-item-action.active{background-color:#856404;border-color:#856404;color:#fff}.list-group-item-danger{background-color:#f5c6cb;color:#721c24}.list-group-item-danger.list-group-item-action:focus,.list-group-item-danger.list-group-item-action:hover{background-color:#f1b0b7;color:#721c24}.list-group-item-danger.list-group-item-action.active{background-color:#721c24;border-color:#721c24;color:#fff}.list-group-item-light{background-color:#fdfdfe;color:#818182}.list-group-item-light.list-group-item-action:focus,.list-group-item-light.list-group-item-action:hover{background-color:#ececf6;color:#818182}.list-group-item-light.list-group-item-action.active{background-color:#818182;border-color:#818182;color:#fff}.list-group-item-dark{background-color:#c6c8ca;color:#1b1e21}.list-group-item-dark.list-group-item-action:focus,.list-group-item-dark.list-group-item-action:hover{background-color:#b9bbbe;color:#1b1e21}.list-group-item-dark.list-group-item-action.active{background-color:#1b1e21;border-color:#1b1e21;color:#fff}.close{color:#000;float:right;font-size:1.5rem;font-weight:700;line-height:1;opacity:.5;text-shadow:0 1px 0 #fff}.close:hover{color:#000;-webkit-text-decoration:none;text-decoration:none}.close:not(:disabled):not(.disabled):focus,.close:not(:disabled):not(.disabled):hover{opacity:.75}button.close{-webkit-appearance:none;-moz-appearance:none;appearance:none;background-color:transparent;border:0;padding:0}a.close.disabled{pointer-events:none}.toast{-webkit-backdrop-filter:blur(10px);backdrop-filter:blur(10px);background-clip:padding-box;background-color:hsla(0,0%,100%,.85);border:1px solid rgba(0,0,0,.1);border-radius:.25rem;box-shadow:0 .25rem .75rem rgba(0,0,0,.1);font-size:.875rem;max-width:350px;opacity:0;overflow:hidden}.toast:not(:last-child){margin-bottom:.75rem}.toast.showing{opacity:1}.toast.show{display:block;opacity:1}.toast.hide{display:none}.toast-header{align-items:center;background-clip:padding-box;background-color:hsla(0,0%,100%,.85);border-bottom:1px solid rgba(0,0,0,.05);color:#6c757d;display:flex;padding:.25rem .75rem}.toast-body{padding:.75rem}.modal-open{overflow:hidden}.modal-open .modal{overflow-x:hidden;overflow-y:auto}.modal{display:none;height:100%;left:0;outline:0;overflow:hidden;position:fixed;top:0;width:100%;z-index:1050}.modal-dialog{margin:.5rem;pointer-events:none;position:relative;width:auto}.modal.fade .modal-dialog{transform:translateY(-50px);transition:transform .3s ease-out}@media (prefers-reduced-motion:reduce){.modal.fade .modal-dialog{transition:none}}.modal.show .modal-dialog{transform:none}.modal.modal-static .modal-dialog{transform:scale(1.02)}.modal-dialog-scrollable{display:flex;max-height:calc(100% - 1rem)}.modal-dialog-scrollable .modal-content{max-height:calc(100vh - 1rem);overflow:hidden}.modal-dialog-scrollable .modal-footer,.modal-dialog-scrollable .modal-header{flex-shrink:0}.modal-dialog-scrollable .modal-body{overflow-y:auto}.modal-dialog-centered{align-items:center;display:flex;min-height:calc(100% - 1rem)}.modal-dialog-centered:before{content:\"\";display:block;height:calc(100vh - 1rem)}.modal-dialog-centered.modal-dialog-scrollable{flex-direction:column;height:100%;justify-content:center}.modal-dialog-centered.modal-dialog-scrollable .modal-content{max-height:none}.modal-dialog-centered.modal-dialog-scrollable:before{content:none}.modal-content{background-clip:padding-box;background-color:#fff;border:1px solid rgba(0,0,0,.2);border-radius:.3rem;display:flex;flex-direction:column;outline:0;pointer-events:auto;position:relative;width:100%}.modal-backdrop{background-color:#000;height:100vh;left:0;position:fixed;top:0;width:100vw;z-index:1040}.modal-backdrop.fade{opacity:0}.modal-backdrop.show{opacity:.5}.modal-header{align-items:flex-start;border-bottom:1px solid #dee2e6;border-top-left-radius:calc(.3rem - 1px);border-top-right-radius:calc(.3rem - 1px);display:flex;justify-content:space-between;padding:1rem}.modal-header .close{margin:-1rem -1rem -1rem auto;padding:1rem}.modal-title{line-height:1.5;margin-bottom:0}.modal-body{flex:1 1 auto;padding:1rem;position:relative}.modal-footer{align-items:center;border-bottom-left-radius:calc(.3rem - 1px);border-bottom-right-radius:calc(.3rem - 1px);border-top:1px solid #dee2e6;display:flex;flex-wrap:wrap;justify-content:flex-end;padding:.75rem}.modal-footer>*{margin:.25rem}.modal-scrollbar-measure{height:50px;overflow:scroll;position:absolute;top:-9999px;width:50px}@media (min-width:576px){.modal-dialog{margin:1.75rem auto;max-width:500px}.modal-dialog-scrollable{max-height:calc(100% - 3.5rem)}.modal-dialog-scrollable .modal-content{max-height:calc(100vh - 3.5rem)}.modal-dialog-centered{min-height:calc(100% - 3.5rem)}.modal-dialog-centered:before{height:calc(100vh - 3.5rem)}.modal-sm{max-width:300px}}@media (min-width:992px){.modal-lg,.modal-xl{max-width:800px}}@media (min-width:1200px){.modal-xl{max-width:1140px}}.tooltip{display:block;font-family:-apple-system,BlinkMacSystemFont,\"Segoe UI\",Roboto,\"Helvetica Neue\",Arial,\"Noto Sans\",sans-serif,\"Apple Color Emoji\",\"Segoe UI Emoji\",\"Segoe UI Symbol\",\"Noto Color Emoji\";font-size:.875rem;font-style:normal;font-weight:400;letter-spacing:normal;line-break:auto;line-height:1.5;margin:0;position:absolute;text-align:left;text-align:start;-webkit-text-decoration:none;text-decoration:none;text-shadow:none;text-transform:none;white-space:normal;word-break:normal;word-spacing:normal;z-index:1070;word-wrap:break-word;opacity:0}.tooltip.show{opacity:.9}.tooltip .arrow{display:block;height:.4rem;position:absolute;width:.8rem}.tooltip .arrow:before{border-color:transparent;border-style:solid;content:\"\";position:absolute}.bs-tooltip-auto[x-placement^=top],.bs-tooltip-top{padding:.4rem 0}.bs-tooltip-auto[x-placement^=top] .arrow,.bs-tooltip-top .arrow{bottom:0}.bs-tooltip-auto[x-placement^=top] .arrow:before,.bs-tooltip-top .arrow:before{border-top-color:#000;border-width:.4rem .4rem 0;top:0}.bs-tooltip-auto[x-placement^=right],.bs-tooltip-right{padding:0 .4rem}.bs-tooltip-auto[x-placement^=right] .arrow,.bs-tooltip-right .arrow{height:.8rem;left:0;width:.4rem}.bs-tooltip-auto[x-placement^=right] .arrow:before,.bs-tooltip-right .arrow:before{border-right-color:#000;border-width:.4rem .4rem .4rem 0;right:0}.bs-tooltip-auto[x-placement^=bottom],.bs-tooltip-bottom{padding:.4rem 0}.bs-tooltip-auto[x-placement^=bottom] .arrow,.bs-tooltip-bottom .arrow{top:0}.bs-tooltip-auto[x-placement^=bottom] .arrow:before,.bs-tooltip-bottom .arrow:before{border-bottom-color:#000;border-width:0 .4rem .4rem;bottom:0}.bs-tooltip-auto[x-placement^=left],.bs-tooltip-left{padding:0 .4rem}.bs-tooltip-auto[x-placement^=left] .arrow,.bs-tooltip-left .arrow{height:.8rem;right:0;width:.4rem}.bs-tooltip-auto[x-placement^=left] .arrow:before,.bs-tooltip-left .arrow:before{border-left-color:#000;border-width:.4rem 0 .4rem .4rem;left:0}.tooltip-inner{background-color:#000;border-radius:.25rem;color:#fff;max-width:200px;padding:.25rem .5rem;text-align:center}.popover{font-family:-apple-system,BlinkMacSystemFont,\"Segoe UI\",Roboto,\"Helvetica Neue\",Arial,\"Noto Sans\",sans-serif,\"Apple Color Emoji\",\"Segoe UI Emoji\",\"Segoe UI Symbol\",\"Noto Color Emoji\";font-size:.875rem;font-style:normal;font-weight:400;left:0;letter-spacing:normal;line-break:auto;line-height:1.5;max-width:276px;text-align:left;text-align:start;-webkit-text-decoration:none;text-decoration:none;text-shadow:none;text-transform:none;top:0;white-space:normal;word-break:normal;word-spacing:normal;z-index:1060;word-wrap:break-word;background-clip:padding-box;background-color:#fff;border:1px solid rgba(0,0,0,.2);border-radius:.3rem}.popover,.popover .arrow{display:block;position:absolute}.popover .arrow{height:.5rem;margin:0 .3rem;width:1rem}.popover .arrow:after,.popover .arrow:before{border-color:transparent;border-style:solid;content:\"\";display:block;position:absolute}.bs-popover-auto[x-placement^=top],.bs-popover-top{margin-bottom:.5rem}.bs-popover-auto[x-placement^=top]>.arrow,.bs-popover-top>.arrow{bottom:calc(-.5rem - 1px)}.bs-popover-auto[x-placement^=top]>.arrow:before,.bs-popover-top>.arrow:before{border-top-color:rgba(0,0,0,.25);border-width:.5rem .5rem 0;bottom:0}.bs-popover-auto[x-placement^=top]>.arrow:after,.bs-popover-top>.arrow:after{border-top-color:#fff;border-width:.5rem .5rem 0;bottom:1px}.bs-popover-auto[x-placement^=right],.bs-popover-right{margin-left:.5rem}.bs-popover-auto[x-placement^=right]>.arrow,.bs-popover-right>.arrow{height:1rem;left:calc(-.5rem - 1px);margin:.3rem 0;width:.5rem}.bs-popover-auto[x-placement^=right]>.arrow:before,.bs-popover-right>.arrow:before{border-right-color:rgba(0,0,0,.25);border-width:.5rem .5rem .5rem 0;left:0}.bs-popover-auto[x-placement^=right]>.arrow:after,.bs-popover-right>.arrow:after{border-right-color:#fff;border-width:.5rem .5rem .5rem 0;left:1px}.bs-popover-auto[x-placement^=bottom],.bs-popover-bottom{margin-top:.5rem}.bs-popover-auto[x-placement^=bottom]>.arrow,.bs-popover-bottom>.arrow{top:calc(-.5rem - 1px)}.bs-popover-auto[x-placement^=bottom]>.arrow:before,.bs-popover-bottom>.arrow:before{border-bottom-color:rgba(0,0,0,.25);border-width:0 .5rem .5rem;top:0}.bs-popover-auto[x-placement^=bottom]>.arrow:after,.bs-popover-bottom>.arrow:after{border-bottom-color:#fff;border-width:0 .5rem .5rem;top:1px}.bs-popover-auto[x-placement^=bottom] .popover-header:before,.bs-popover-bottom .popover-header:before{border-bottom:1px solid #f7f7f7;content:\"\";display:block;left:50%;margin-left:-.5rem;position:absolute;top:0;width:1rem}.bs-popover-auto[x-placement^=left],.bs-popover-left{margin-right:.5rem}.bs-popover-auto[x-placement^=left]>.arrow,.bs-popover-left>.arrow{height:1rem;margin:.3rem 0;right:calc(-.5rem - 1px);width:.5rem}.bs-popover-auto[x-placement^=left]>.arrow:before,.bs-popover-left>.arrow:before{border-left-color:rgba(0,0,0,.25);border-width:.5rem 0 .5rem .5rem;right:0}.bs-popover-auto[x-placement^=left]>.arrow:after,.bs-popover-left>.arrow:after{border-left-color:#fff;border-width:.5rem 0 .5rem .5rem;right:1px}.popover-header{background-color:#f7f7f7;border-bottom:1px solid #ebebeb;border-top-left-radius:calc(.3rem - 1px);border-top-right-radius:calc(.3rem - 1px);font-size:1rem;margin-bottom:0;padding:.5rem .75rem}.popover-header:empty{display:none}.popover-body{color:#212529;padding:.5rem .75rem}.carousel{position:relative}.carousel.pointer-event{touch-action:pan-y}.carousel-inner{overflow:hidden;position:relative;width:100%}.carousel-inner:after{clear:both;content:\"\";display:block}.carousel-item{backface-visibility:hidden;display:none;float:left;margin-right:-100%;position:relative;transition:transform .6s ease-in-out;width:100%}@media (prefers-reduced-motion:reduce){.carousel-item{transition:none}}.carousel-item-next,.carousel-item-prev,.carousel-item.active{display:block}.active.carousel-item-right,.carousel-item-next:not(.carousel-item-left){transform:translateX(100%)}.active.carousel-item-left,.carousel-item-prev:not(.carousel-item-right){transform:translateX(-100%)}.carousel-fade .carousel-item{opacity:0;transform:none;transition-property:opacity}.carousel-fade .carousel-item-next.carousel-item-left,.carousel-fade .carousel-item-prev.carousel-item-right,.carousel-fade .carousel-item.active{opacity:1;z-index:1}.carousel-fade .active.carousel-item-left,.carousel-fade .active.carousel-item-right{opacity:0;transition:opacity 0s .6s;z-index:0}@media (prefers-reduced-motion:reduce){.carousel-fade .active.carousel-item-left,.carousel-fade .active.carousel-item-right{transition:none}}.carousel-control-next,.carousel-control-prev{align-items:center;bottom:0;color:#fff;display:flex;justify-content:center;opacity:.5;position:absolute;text-align:center;top:0;transition:opacity .15s ease;width:15%;z-index:1}@media (prefers-reduced-motion:reduce){.carousel-control-next,.carousel-control-prev{transition:none}}.carousel-control-next:focus,.carousel-control-next:hover,.carousel-control-prev:focus,.carousel-control-prev:hover{color:#fff;opacity:.9;outline:0;-webkit-text-decoration:none;text-decoration:none}.carousel-control-prev{left:0}.carousel-control-next{right:0}.carousel-control-next-icon,.carousel-control-prev-icon{background:no-repeat 50%/100% 100%;display:inline-block;height:20px;width:20px}.carousel-control-prev-icon{background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='8' height='8' fill='%23fff'%3E%3Cpath d='m5.25 0-4 4 4 4 1.5-1.5L4.25 4l2.5-2.5z'/%3E%3C/svg%3E\")}.carousel-control-next-icon{background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='8' height='8' fill='%23fff'%3E%3Cpath d='m2.75 0-1.5 1.5L3.75 4l-2.5 2.5L2.75 8l4-4z'/%3E%3C/svg%3E\")}.carousel-indicators{bottom:0;display:flex;justify-content:center;left:0;list-style:none;margin-left:15%;margin-right:15%;padding-left:0;position:absolute;right:0;z-index:15}.carousel-indicators li{background-clip:padding-box;background-color:#fff;border-bottom:10px solid transparent;border-top:10px solid transparent;box-sizing:content-box;cursor:pointer;flex:0 1 auto;height:3px;margin-left:3px;margin-right:3px;opacity:.5;text-indent:-999px;transition:opacity .6s ease;width:30px}@media (prefers-reduced-motion:reduce){.carousel-indicators li{transition:none}}.carousel-indicators .active{opacity:1}.carousel-caption{bottom:20px;color:#fff;left:15%;padding-bottom:20px;padding-top:20px;position:absolute;right:15%;text-align:center;z-index:10}@keyframes spinner-border{to{transform:rotate(1turn)}}.spinner-border{animation:spinner-border .75s linear infinite;border:.25em solid;border-radius:50%;border-right:.25em solid transparent;display:inline-block;height:2rem;vertical-align:text-bottom;width:2rem}.spinner-border-sm{border-width:.2em;height:1rem;width:1rem}@keyframes spinner-grow{0%{transform:scale(0)}50%{opacity:1}}.spinner-grow{animation:spinner-grow .75s linear infinite;background-color:currentColor;border-radius:50%;display:inline-block;height:2rem;opacity:0;vertical-align:text-bottom;width:2rem}.spinner-grow-sm{height:1rem;width:1rem}.align-baseline{vertical-align:baseline!important}.align-top{vertical-align:top!important}.align-middle{vertical-align:middle!important}.align-bottom{vertical-align:bottom!important}.align-text-bottom{vertical-align:text-bottom!important}.align-text-top{vertical-align:text-top!important}.bg-primary{background-color:#007bff!important}a.bg-primary:focus,a.bg-primary:hover,button.bg-primary:focus,button.bg-primary:hover{background-color:#0062cc!important}.bg-secondary{background-color:#6c757d!important}a.bg-secondary:focus,a.bg-secondary:hover,button.bg-secondary:focus,button.bg-secondary:hover{background-color:#545b62!important}.bg-success{background-color:#28a745!important}a.bg-success:focus,a.bg-success:hover,button.bg-success:focus,button.bg-success:hover{background-color:#1e7e34!important}.bg-info{background-color:#17a2b8!important}a.bg-info:focus,a.bg-info:hover,button.bg-info:focus,button.bg-info:hover{background-color:#117a8b!important}.bg-warning{background-color:#ffc107!important}a.bg-warning:focus,a.bg-warning:hover,button.bg-warning:focus,button.bg-warning:hover{background-color:#d39e00!important}.bg-danger{background-color:#dc3545!important}a.bg-danger:focus,a.bg-danger:hover,button.bg-danger:focus,button.bg-danger:hover{background-color:#bd2130!important}.bg-light{background-color:#f8f9fa!important}a.bg-light:focus,a.bg-light:hover,button.bg-light:focus,button.bg-light:hover{background-color:#dae0e5!important}.bg-dark{background-color:#343a40!important}a.bg-dark:focus,a.bg-dark:hover,button.bg-dark:focus,button.bg-dark:hover{background-color:#1d2124!important}.bg-white{background-color:#fff!important}.bg-transparent{background-color:transparent!important}.border{border:1px solid #dee2e6!important}.border-top{border-top:1px solid #dee2e6!important}.border-right{border-right:1px solid #dee2e6!important}.border-bottom{border-bottom:1px solid #dee2e6!important}.border-left{border-left:1px solid #dee2e6!important}.border-0{border:0!important}.border-top-0{border-top:0!important}.border-right-0{border-right:0!important}.border-bottom-0{border-bottom:0!important}.border-left-0{border-left:0!important}.border-primary{border-color:#007bff!important}.border-secondary{border-color:#6c757d!important}.border-success{border-color:#28a745!important}.border-info{border-color:#17a2b8!important}.border-warning{border-color:#ffc107!important}.border-danger{border-color:#dc3545!important}.border-light{border-color:#f8f9fa!important}.border-dark{border-color:#343a40!important}.border-white{border-color:#fff!important}.rounded-sm{border-radius:.2rem!important}.rounded{border-radius:.25rem!important}.rounded-top{border-top-left-radius:.25rem!important}.rounded-right,.rounded-top{border-top-right-radius:.25rem!important}.rounded-bottom,.rounded-right{border-bottom-right-radius:.25rem!important}.rounded-bottom,.rounded-left{border-bottom-left-radius:.25rem!important}.rounded-left{border-top-left-radius:.25rem!important}.rounded-lg{border-radius:.3rem!important}.rounded-circle{border-radius:50%!important}.rounded-pill{border-radius:50rem!important}.rounded-0{border-radius:0!important}.clearfix:after{clear:both;content:\"\";display:block}.d-none{display:none!important}.d-inline{display:inline!important}.d-inline-block{display:inline-block!important}.d-block{display:block!important}.d-table{display:table!important}.d-table-row{display:table-row!important}.d-table-cell{display:table-cell!important}.d-flex{display:flex!important}.d-inline-flex{display:inline-flex!important}@media (min-width:576px){.d-sm-none{display:none!important}.d-sm-inline{display:inline!important}.d-sm-inline-block{display:inline-block!important}.d-sm-block{display:block!important}.d-sm-table{display:table!important}.d-sm-table-row{display:table-row!important}.d-sm-table-cell{display:table-cell!important}.d-sm-flex{display:flex!important}.d-sm-inline-flex{display:inline-flex!important}}@media (min-width:768px){.d-md-none{display:none!important}.d-md-inline{display:inline!important}.d-md-inline-block{display:inline-block!important}.d-md-block{display:block!important}.d-md-table{display:table!important}.d-md-table-row{display:table-row!important}.d-md-table-cell{display:table-cell!important}.d-md-flex{display:flex!important}.d-md-inline-flex{display:inline-flex!important}}@media (min-width:992px){.d-lg-none{display:none!important}.d-lg-inline{display:inline!important}.d-lg-inline-block{display:inline-block!important}.d-lg-block{display:block!important}.d-lg-table{display:table!important}.d-lg-table-row{display:table-row!important}.d-lg-table-cell{display:table-cell!important}.d-lg-flex{display:flex!important}.d-lg-inline-flex{display:inline-flex!important}}@media (min-width:1200px){.d-xl-none{display:none!important}.d-xl-inline{display:inline!important}.d-xl-inline-block{display:inline-block!important}.d-xl-block{display:block!important}.d-xl-table{display:table!important}.d-xl-table-row{display:table-row!important}.d-xl-table-cell{display:table-cell!important}.d-xl-flex{display:flex!important}.d-xl-inline-flex{display:inline-flex!important}}@media print{.d-print-none{display:none!important}.d-print-inline{display:inline!important}.d-print-inline-block{display:inline-block!important}.d-print-block{display:block!important}.d-print-table{display:table!important}.d-print-table-row{display:table-row!important}.d-print-table-cell{display:table-cell!important}.d-print-flex{display:flex!important}.d-print-inline-flex{display:inline-flex!important}}.embed-responsive{display:block;overflow:hidden;padding:0;position:relative;width:100%}.embed-responsive:before{content:\"\";display:block}.embed-responsive .embed-responsive-item,.embed-responsive embed,.embed-responsive iframe,.embed-responsive object,.embed-responsive video{border:0;bottom:0;height:100%;left:0;position:absolute;top:0;width:100%}.embed-responsive-21by9:before{padding-top:42.857143%}.embed-responsive-16by9:before{padding-top:56.25%}.embed-responsive-4by3:before{padding-top:75%}.embed-responsive-1by1:before{padding-top:100%}.flex-row{flex-direction:row!important}.flex-column{flex-direction:column!important}.flex-row-reverse{flex-direction:row-reverse!important}.flex-column-reverse{flex-direction:column-reverse!important}.flex-wrap{flex-wrap:wrap!important}.flex-nowrap{flex-wrap:nowrap!important}.flex-wrap-reverse{flex-wrap:wrap-reverse!important}.flex-fill{flex:1 1 auto!important}.flex-grow-0{flex-grow:0!important}.flex-grow-1{flex-grow:1!important}.flex-shrink-0{flex-shrink:0!important}.flex-shrink-1{flex-shrink:1!important}.justify-content-start{justify-content:flex-start!important}.justify-content-end{justify-content:flex-end!important}.justify-content-center{justify-content:center!important}.justify-content-between{justify-content:space-between!important}.justify-content-around{justify-content:space-around!important}.align-items-start{align-items:flex-start!important}.align-items-end{align-items:flex-end!important}.align-items-center{align-items:center!important}.align-items-baseline{align-items:baseline!important}.align-items-stretch{align-items:stretch!important}.align-content-start{align-content:flex-start!important}.align-content-end{align-content:flex-end!important}.align-content-center{align-content:center!important}.align-content-between{align-content:space-between!important}.align-content-around{align-content:space-around!important}.align-content-stretch{align-content:stretch!important}.align-self-auto{align-self:auto!important}.align-self-start{align-self:flex-start!important}.align-self-end{align-self:flex-end!important}.align-self-center{align-self:center!important}.align-self-baseline{align-self:baseline!important}.align-self-stretch{align-self:stretch!important}@media (min-width:576px){.flex-sm-row{flex-direction:row!important}.flex-sm-column{flex-direction:column!important}.flex-sm-row-reverse{flex-direction:row-reverse!important}.flex-sm-column-reverse{flex-direction:column-reverse!important}.flex-sm-wrap{flex-wrap:wrap!important}.flex-sm-nowrap{flex-wrap:nowrap!important}.flex-sm-wrap-reverse{flex-wrap:wrap-reverse!important}.flex-sm-fill{flex:1 1 auto!important}.flex-sm-grow-0{flex-grow:0!important}.flex-sm-grow-1{flex-grow:1!important}.flex-sm-shrink-0{flex-shrink:0!important}.flex-sm-shrink-1{flex-shrink:1!important}.justify-content-sm-start{justify-content:flex-start!important}.justify-content-sm-end{justify-content:flex-end!important}.justify-content-sm-center{justify-content:center!important}.justify-content-sm-between{justify-content:space-between!important}.justify-content-sm-around{justify-content:space-around!important}.align-items-sm-start{align-items:flex-start!important}.align-items-sm-end{align-items:flex-end!important}.align-items-sm-center{align-items:center!important}.align-items-sm-baseline{align-items:baseline!important}.align-items-sm-stretch{align-items:stretch!important}.align-content-sm-start{align-content:flex-start!important}.align-content-sm-end{align-content:flex-end!important}.align-content-sm-center{align-content:center!important}.align-content-sm-between{align-content:space-between!important}.align-content-sm-around{align-content:space-around!important}.align-content-sm-stretch{align-content:stretch!important}.align-self-sm-auto{align-self:auto!important}.align-self-sm-start{align-self:flex-start!important}.align-self-sm-end{align-self:flex-end!important}.align-self-sm-center{align-self:center!important}.align-self-sm-baseline{align-self:baseline!important}.align-self-sm-stretch{align-self:stretch!important}}@media (min-width:768px){.flex-md-row{flex-direction:row!important}.flex-md-column{flex-direction:column!important}.flex-md-row-reverse{flex-direction:row-reverse!important}.flex-md-column-reverse{flex-direction:column-reverse!important}.flex-md-wrap{flex-wrap:wrap!important}.flex-md-nowrap{flex-wrap:nowrap!important}.flex-md-wrap-reverse{flex-wrap:wrap-reverse!important}.flex-md-fill{flex:1 1 auto!important}.flex-md-grow-0{flex-grow:0!important}.flex-md-grow-1{flex-grow:1!important}.flex-md-shrink-0{flex-shrink:0!important}.flex-md-shrink-1{flex-shrink:1!important}.justify-content-md-start{justify-content:flex-start!important}.justify-content-md-end{justify-content:flex-end!important}.justify-content-md-center{justify-content:center!important}.justify-content-md-between{justify-content:space-between!important}.justify-content-md-around{justify-content:space-around!important}.align-items-md-start{align-items:flex-start!important}.align-items-md-end{align-items:flex-end!important}.align-items-md-center{align-items:center!important}.align-items-md-baseline{align-items:baseline!important}.align-items-md-stretch{align-items:stretch!important}.align-content-md-start{align-content:flex-start!important}.align-content-md-end{align-content:flex-end!important}.align-content-md-center{align-content:center!important}.align-content-md-between{align-content:space-between!important}.align-content-md-around{align-content:space-around!important}.align-content-md-stretch{align-content:stretch!important}.align-self-md-auto{align-self:auto!important}.align-self-md-start{align-self:flex-start!important}.align-self-md-end{align-self:flex-end!important}.align-self-md-center{align-self:center!important}.align-self-md-baseline{align-self:baseline!important}.align-self-md-stretch{align-self:stretch!important}}@media (min-width:992px){.flex-lg-row{flex-direction:row!important}.flex-lg-column{flex-direction:column!important}.flex-lg-row-reverse{flex-direction:row-reverse!important}.flex-lg-column-reverse{flex-direction:column-reverse!important}.flex-lg-wrap{flex-wrap:wrap!important}.flex-lg-nowrap{flex-wrap:nowrap!important}.flex-lg-wrap-reverse{flex-wrap:wrap-reverse!important}.flex-lg-fill{flex:1 1 auto!important}.flex-lg-grow-0{flex-grow:0!important}.flex-lg-grow-1{flex-grow:1!important}.flex-lg-shrink-0{flex-shrink:0!important}.flex-lg-shrink-1{flex-shrink:1!important}.justify-content-lg-start{justify-content:flex-start!important}.justify-content-lg-end{justify-content:flex-end!important}.justify-content-lg-center{justify-content:center!important}.justify-content-lg-between{justify-content:space-between!important}.justify-content-lg-around{justify-content:space-around!important}.align-items-lg-start{align-items:flex-start!important}.align-items-lg-end{align-items:flex-end!important}.align-items-lg-center{align-items:center!important}.align-items-lg-baseline{align-items:baseline!important}.align-items-lg-stretch{align-items:stretch!important}.align-content-lg-start{align-content:flex-start!important}.align-content-lg-end{align-content:flex-end!important}.align-content-lg-center{align-content:center!important}.align-content-lg-between{align-content:space-between!important}.align-content-lg-around{align-content:space-around!important}.align-content-lg-stretch{align-content:stretch!important}.align-self-lg-auto{align-self:auto!important}.align-self-lg-start{align-self:flex-start!important}.align-self-lg-end{align-self:flex-end!important}.align-self-lg-center{align-self:center!important}.align-self-lg-baseline{align-self:baseline!important}.align-self-lg-stretch{align-self:stretch!important}}@media (min-width:1200px){.flex-xl-row{flex-direction:row!important}.flex-xl-column{flex-direction:column!important}.flex-xl-row-reverse{flex-direction:row-reverse!important}.flex-xl-column-reverse{flex-direction:column-reverse!important}.flex-xl-wrap{flex-wrap:wrap!important}.flex-xl-nowrap{flex-wrap:nowrap!important}.flex-xl-wrap-reverse{flex-wrap:wrap-reverse!important}.flex-xl-fill{flex:1 1 auto!important}.flex-xl-grow-0{flex-grow:0!important}.flex-xl-grow-1{flex-grow:1!important}.flex-xl-shrink-0{flex-shrink:0!important}.flex-xl-shrink-1{flex-shrink:1!important}.justify-content-xl-start{justify-content:flex-start!important}.justify-content-xl-end{justify-content:flex-end!important}.justify-content-xl-center{justify-content:center!important}.justify-content-xl-between{justify-content:space-between!important}.justify-content-xl-around{justify-content:space-around!important}.align-items-xl-start{align-items:flex-start!important}.align-items-xl-end{align-items:flex-end!important}.align-items-xl-center{align-items:center!important}.align-items-xl-baseline{align-items:baseline!important}.align-items-xl-stretch{align-items:stretch!important}.align-content-xl-start{align-content:flex-start!important}.align-content-xl-end{align-content:flex-end!important}.align-content-xl-center{align-content:center!important}.align-content-xl-between{align-content:space-between!important}.align-content-xl-around{align-content:space-around!important}.align-content-xl-stretch{align-content:stretch!important}.align-self-xl-auto{align-self:auto!important}.align-self-xl-start{align-self:flex-start!important}.align-self-xl-end{align-self:flex-end!important}.align-self-xl-center{align-self:center!important}.align-self-xl-baseline{align-self:baseline!important}.align-self-xl-stretch{align-self:stretch!important}}.float-left{float:left!important}.float-right{float:right!important}.float-none{float:none!important}@media (min-width:576px){.float-sm-left{float:left!important}.float-sm-right{float:right!important}.float-sm-none{float:none!important}}@media (min-width:768px){.float-md-left{float:left!important}.float-md-right{float:right!important}.float-md-none{float:none!important}}@media (min-width:992px){.float-lg-left{float:left!important}.float-lg-right{float:right!important}.float-lg-none{float:none!important}}@media (min-width:1200px){.float-xl-left{float:left!important}.float-xl-right{float:right!important}.float-xl-none{float:none!important}}.overflow-auto{overflow:auto!important}.overflow-hidden{overflow:hidden!important}.position-static{position:static!important}.position-relative{position:relative!important}.position-absolute{position:absolute!important}.position-fixed{position:fixed!important}.position-sticky{position:sticky!important}.fixed-top{top:0}.fixed-bottom,.fixed-top{left:0;position:fixed;right:0;z-index:1030}.fixed-bottom{bottom:0}@supports (position:sticky){.sticky-top{position:sticky;top:0;z-index:1020}}.sr-only{height:1px;margin:-1px;overflow:hidden;padding:0;position:absolute;width:1px;clip:rect(0,0,0,0);border:0;white-space:nowrap}.sr-only-focusable:active,.sr-only-focusable:focus{height:auto;overflow:visible;position:static;width:auto;clip:auto;white-space:normal}.shadow-sm{box-shadow:0 .125rem .25rem rgba(0,0,0,.075)!important}.shadow{box-shadow:0 .5rem 1rem rgba(0,0,0,.15)!important}.shadow-lg{box-shadow:0 1rem 3rem rgba(0,0,0,.175)!important}.shadow-none{box-shadow:none!important}.w-25{width:25%!important}.w-50{width:50%!important}.w-75{width:75%!important}.w-100{width:100%!important}.w-auto{width:auto!important}.h-25{height:25%!important}.h-50{height:50%!important}.h-75{height:75%!important}.h-100{height:100%!important}.h-auto{height:auto!important}.mw-100{max-width:100%!important}.mh-100{max-height:100%!important}.min-vw-100{min-width:100vw!important}.min-vh-100{min-height:100vh!important}.vw-100{width:100vw!important}.vh-100{height:100vh!important}.stretched-link:after{background-color:transparent;bottom:0;content:\"\";left:0;pointer-events:auto;position:absolute;right:0;top:0;z-index:1}.m-0{margin:0!important}.mt-0,.my-0{margin-top:0!important}.mr-0,.mx-0{margin-right:0!important}.mb-0,.my-0{margin-bottom:0!important}.ml-0,.mx-0{margin-left:0!important}.m-1{margin:.25rem!important}.mt-1,.my-1{margin-top:.25rem!important}.mr-1,.mx-1{margin-right:.25rem!important}.mb-1,.my-1{margin-bottom:.25rem!important}.ml-1,.mx-1{margin-left:.25rem!important}.m-2{margin:.5rem!important}.mt-2,.my-2{margin-top:.5rem!important}.mr-2,.mx-2{margin-right:.5rem!important}.mb-2,.my-2{margin-bottom:.5rem!important}.ml-2,.mx-2{margin-left:.5rem!important}.m-3{margin:1rem!important}.mt-3,.my-3{margin-top:1rem!important}.mr-3,.mx-3{margin-right:1rem!important}.mb-3,.my-3{margin-bottom:1rem!important}.ml-3,.mx-3{margin-left:1rem!important}.m-4{margin:1.5rem!important}.mt-4,.my-4{margin-top:1.5rem!important}.mr-4,.mx-4{margin-right:1.5rem!important}.mb-4,.my-4{margin-bottom:1.5rem!important}.ml-4,.mx-4{margin-left:1.5rem!important}.m-5{margin:3rem!important}.mt-5,.my-5{margin-top:3rem!important}.mr-5,.mx-5{margin-right:3rem!important}.mb-5,.my-5{margin-bottom:3rem!important}.ml-5,.mx-5{margin-left:3rem!important}.p-0{padding:0!important}.pt-0,.py-0{padding-top:0!important}.pr-0,.px-0{padding-right:0!important}.pb-0,.py-0{padding-bottom:0!important}.pl-0,.px-0{padding-left:0!important}.p-1{padding:.25rem!important}.pt-1,.py-1{padding-top:.25rem!important}.pr-1,.px-1{padding-right:.25rem!important}.pb-1,.py-1{padding-bottom:.25rem!important}.pl-1,.px-1{padding-left:.25rem!important}.p-2{padding:.5rem!important}.pt-2,.py-2{padding-top:.5rem!important}.pr-2,.px-2{padding-right:.5rem!important}.pb-2,.py-2{padding-bottom:.5rem!important}.pl-2,.px-2{padding-left:.5rem!important}.p-3{padding:1rem!important}.pt-3,.py-3{padding-top:1rem!important}.pr-3,.px-3{padding-right:1rem!important}.pb-3,.py-3{padding-bottom:1rem!important}.pl-3,.px-3{padding-left:1rem!important}.p-4{padding:1.5rem!important}.pt-4,.py-4{padding-top:1.5rem!important}.pr-4,.px-4{padding-right:1.5rem!important}.pb-4,.py-4{padding-bottom:1.5rem!important}.pl-4,.px-4{padding-left:1.5rem!important}.p-5{padding:3rem!important}.pt-5,.py-5{padding-top:3rem!important}.pr-5,.px-5{padding-right:3rem!important}.pb-5,.py-5{padding-bottom:3rem!important}.pl-5,.px-5{padding-left:3rem!important}.m-n1{margin:-.25rem!important}.mt-n1,.my-n1{margin-top:-.25rem!important}.mr-n1,.mx-n1{margin-right:-.25rem!important}.mb-n1,.my-n1{margin-bottom:-.25rem!important}.ml-n1,.mx-n1{margin-left:-.25rem!important}.m-n2{margin:-.5rem!important}.mt-n2,.my-n2{margin-top:-.5rem!important}.mr-n2,.mx-n2{margin-right:-.5rem!important}.mb-n2,.my-n2{margin-bottom:-.5rem!important}.ml-n2,.mx-n2{margin-left:-.5rem!important}.m-n3{margin:-1rem!important}.mt-n3,.my-n3{margin-top:-1rem!important}.mr-n3,.mx-n3{margin-right:-1rem!important}.mb-n3,.my-n3{margin-bottom:-1rem!important}.ml-n3,.mx-n3{margin-left:-1rem!important}.m-n4{margin:-1.5rem!important}.mt-n4,.my-n4{margin-top:-1.5rem!important}.mr-n4,.mx-n4{margin-right:-1.5rem!important}.mb-n4,.my-n4{margin-bottom:-1.5rem!important}.ml-n4,.mx-n4{margin-left:-1.5rem!important}.m-n5{margin:-3rem!important}.mt-n5,.my-n5{margin-top:-3rem!important}.mr-n5,.mx-n5{margin-right:-3rem!important}.mb-n5,.my-n5{margin-bottom:-3rem!important}.ml-n5,.mx-n5{margin-left:-3rem!important}.m-auto{margin:auto!important}.mt-auto,.my-auto{margin-top:auto!important}.mr-auto,.mx-auto{margin-right:auto!important}.mb-auto,.my-auto{margin-bottom:auto!important}.ml-auto,.mx-auto{margin-left:auto!important}@media (min-width:576px){.m-sm-0{margin:0!important}.mt-sm-0,.my-sm-0{margin-top:0!important}.mr-sm-0,.mx-sm-0{margin-right:0!important}.mb-sm-0,.my-sm-0{margin-bottom:0!important}.ml-sm-0,.mx-sm-0{margin-left:0!important}.m-sm-1{margin:.25rem!important}.mt-sm-1,.my-sm-1{margin-top:.25rem!important}.mr-sm-1,.mx-sm-1{margin-right:.25rem!important}.mb-sm-1,.my-sm-1{margin-bottom:.25rem!important}.ml-sm-1,.mx-sm-1{margin-left:.25rem!important}.m-sm-2{margin:.5rem!important}.mt-sm-2,.my-sm-2{margin-top:.5rem!important}.mr-sm-2,.mx-sm-2{margin-right:.5rem!important}.mb-sm-2,.my-sm-2{margin-bottom:.5rem!important}.ml-sm-2,.mx-sm-2{margin-left:.5rem!important}.m-sm-3{margin:1rem!important}.mt-sm-3,.my-sm-3{margin-top:1rem!important}.mr-sm-3,.mx-sm-3{margin-right:1rem!important}.mb-sm-3,.my-sm-3{margin-bottom:1rem!important}.ml-sm-3,.mx-sm-3{margin-left:1rem!important}.m-sm-4{margin:1.5rem!important}.mt-sm-4,.my-sm-4{margin-top:1.5rem!important}.mr-sm-4,.mx-sm-4{margin-right:1.5rem!important}.mb-sm-4,.my-sm-4{margin-bottom:1.5rem!important}.ml-sm-4,.mx-sm-4{margin-left:1.5rem!important}.m-sm-5{margin:3rem!important}.mt-sm-5,.my-sm-5{margin-top:3rem!important}.mr-sm-5,.mx-sm-5{margin-right:3rem!important}.mb-sm-5,.my-sm-5{margin-bottom:3rem!important}.ml-sm-5,.mx-sm-5{margin-left:3rem!important}.p-sm-0{padding:0!important}.pt-sm-0,.py-sm-0{padding-top:0!important}.pr-sm-0,.px-sm-0{padding-right:0!important}.pb-sm-0,.py-sm-0{padding-bottom:0!important}.pl-sm-0,.px-sm-0{padding-left:0!important}.p-sm-1{padding:.25rem!important}.pt-sm-1,.py-sm-1{padding-top:.25rem!important}.pr-sm-1,.px-sm-1{padding-right:.25rem!important}.pb-sm-1,.py-sm-1{padding-bottom:.25rem!important}.pl-sm-1,.px-sm-1{padding-left:.25rem!important}.p-sm-2{padding:.5rem!important}.pt-sm-2,.py-sm-2{padding-top:.5rem!important}.pr-sm-2,.px-sm-2{padding-right:.5rem!important}.pb-sm-2,.py-sm-2{padding-bottom:.5rem!important}.pl-sm-2,.px-sm-2{padding-left:.5rem!important}.p-sm-3{padding:1rem!important}.pt-sm-3,.py-sm-3{padding-top:1rem!important}.pr-sm-3,.px-sm-3{padding-right:1rem!important}.pb-sm-3,.py-sm-3{padding-bottom:1rem!important}.pl-sm-3,.px-sm-3{padding-left:1rem!important}.p-sm-4{padding:1.5rem!important}.pt-sm-4,.py-sm-4{padding-top:1.5rem!important}.pr-sm-4,.px-sm-4{padding-right:1.5rem!important}.pb-sm-4,.py-sm-4{padding-bottom:1.5rem!important}.pl-sm-4,.px-sm-4{padding-left:1.5rem!important}.p-sm-5{padding:3rem!important}.pt-sm-5,.py-sm-5{padding-top:3rem!important}.pr-sm-5,.px-sm-5{padding-right:3rem!important}.pb-sm-5,.py-sm-5{padding-bottom:3rem!important}.pl-sm-5,.px-sm-5{padding-left:3rem!important}.m-sm-n1{margin:-.25rem!important}.mt-sm-n1,.my-sm-n1{margin-top:-.25rem!important}.mr-sm-n1,.mx-sm-n1{margin-right:-.25rem!important}.mb-sm-n1,.my-sm-n1{margin-bottom:-.25rem!important}.ml-sm-n1,.mx-sm-n1{margin-left:-.25rem!important}.m-sm-n2{margin:-.5rem!important}.mt-sm-n2,.my-sm-n2{margin-top:-.5rem!important}.mr-sm-n2,.mx-sm-n2{margin-right:-.5rem!important}.mb-sm-n2,.my-sm-n2{margin-bottom:-.5rem!important}.ml-sm-n2,.mx-sm-n2{margin-left:-.5rem!important}.m-sm-n3{margin:-1rem!important}.mt-sm-n3,.my-sm-n3{margin-top:-1rem!important}.mr-sm-n3,.mx-sm-n3{margin-right:-1rem!important}.mb-sm-n3,.my-sm-n3{margin-bottom:-1rem!important}.ml-sm-n3,.mx-sm-n3{margin-left:-1rem!important}.m-sm-n4{margin:-1.5rem!important}.mt-sm-n4,.my-sm-n4{margin-top:-1.5rem!important}.mr-sm-n4,.mx-sm-n4{margin-right:-1.5rem!important}.mb-sm-n4,.my-sm-n4{margin-bottom:-1.5rem!important}.ml-sm-n4,.mx-sm-n4{margin-left:-1.5rem!important}.m-sm-n5{margin:-3rem!important}.mt-sm-n5,.my-sm-n5{margin-top:-3rem!important}.mr-sm-n5,.mx-sm-n5{margin-right:-3rem!important}.mb-sm-n5,.my-sm-n5{margin-bottom:-3rem!important}.ml-sm-n5,.mx-sm-n5{margin-left:-3rem!important}.m-sm-auto{margin:auto!important}.mt-sm-auto,.my-sm-auto{margin-top:auto!important}.mr-sm-auto,.mx-sm-auto{margin-right:auto!important}.mb-sm-auto,.my-sm-auto{margin-bottom:auto!important}.ml-sm-auto,.mx-sm-auto{margin-left:auto!important}}@media (min-width:768px){.m-md-0{margin:0!important}.mt-md-0,.my-md-0{margin-top:0!important}.mr-md-0,.mx-md-0{margin-right:0!important}.mb-md-0,.my-md-0{margin-bottom:0!important}.ml-md-0,.mx-md-0{margin-left:0!important}.m-md-1{margin:.25rem!important}.mt-md-1,.my-md-1{margin-top:.25rem!important}.mr-md-1,.mx-md-1{margin-right:.25rem!important}.mb-md-1,.my-md-1{margin-bottom:.25rem!important}.ml-md-1,.mx-md-1{margin-left:.25rem!important}.m-md-2{margin:.5rem!important}.mt-md-2,.my-md-2{margin-top:.5rem!important}.mr-md-2,.mx-md-2{margin-right:.5rem!important}.mb-md-2,.my-md-2{margin-bottom:.5rem!important}.ml-md-2,.mx-md-2{margin-left:.5rem!important}.m-md-3{margin:1rem!important}.mt-md-3,.my-md-3{margin-top:1rem!important}.mr-md-3,.mx-md-3{margin-right:1rem!important}.mb-md-3,.my-md-3{margin-bottom:1rem!important}.ml-md-3,.mx-md-3{margin-left:1rem!important}.m-md-4{margin:1.5rem!important}.mt-md-4,.my-md-4{margin-top:1.5rem!important}.mr-md-4,.mx-md-4{margin-right:1.5rem!important}.mb-md-4,.my-md-4{margin-bottom:1.5rem!important}.ml-md-4,.mx-md-4{margin-left:1.5rem!important}.m-md-5{margin:3rem!important}.mt-md-5,.my-md-5{margin-top:3rem!important}.mr-md-5,.mx-md-5{margin-right:3rem!important}.mb-md-5,.my-md-5{margin-bottom:3rem!important}.ml-md-5,.mx-md-5{margin-left:3rem!important}.p-md-0{padding:0!important}.pt-md-0,.py-md-0{padding-top:0!important}.pr-md-0,.px-md-0{padding-right:0!important}.pb-md-0,.py-md-0{padding-bottom:0!important}.pl-md-0,.px-md-0{padding-left:0!important}.p-md-1{padding:.25rem!important}.pt-md-1,.py-md-1{padding-top:.25rem!important}.pr-md-1,.px-md-1{padding-right:.25rem!important}.pb-md-1,.py-md-1{padding-bottom:.25rem!important}.pl-md-1,.px-md-1{padding-left:.25rem!important}.p-md-2{padding:.5rem!important}.pt-md-2,.py-md-2{padding-top:.5rem!important}.pr-md-2,.px-md-2{padding-right:.5rem!important}.pb-md-2,.py-md-2{padding-bottom:.5rem!important}.pl-md-2,.px-md-2{padding-left:.5rem!important}.p-md-3{padding:1rem!important}.pt-md-3,.py-md-3{padding-top:1rem!important}.pr-md-3,.px-md-3{padding-right:1rem!important}.pb-md-3,.py-md-3{padding-bottom:1rem!important}.pl-md-3,.px-md-3{padding-left:1rem!important}.p-md-4{padding:1.5rem!important}.pt-md-4,.py-md-4{padding-top:1.5rem!important}.pr-md-4,.px-md-4{padding-right:1.5rem!important}.pb-md-4,.py-md-4{padding-bottom:1.5rem!important}.pl-md-4,.px-md-4{padding-left:1.5rem!important}.p-md-5{padding:3rem!important}.pt-md-5,.py-md-5{padding-top:3rem!important}.pr-md-5,.px-md-5{padding-right:3rem!important}.pb-md-5,.py-md-5{padding-bottom:3rem!important}.pl-md-5,.px-md-5{padding-left:3rem!important}.m-md-n1{margin:-.25rem!important}.mt-md-n1,.my-md-n1{margin-top:-.25rem!important}.mr-md-n1,.mx-md-n1{margin-right:-.25rem!important}.mb-md-n1,.my-md-n1{margin-bottom:-.25rem!important}.ml-md-n1,.mx-md-n1{margin-left:-.25rem!important}.m-md-n2{margin:-.5rem!important}.mt-md-n2,.my-md-n2{margin-top:-.5rem!important}.mr-md-n2,.mx-md-n2{margin-right:-.5rem!important}.mb-md-n2,.my-md-n2{margin-bottom:-.5rem!important}.ml-md-n2,.mx-md-n2{margin-left:-.5rem!important}.m-md-n3{margin:-1rem!important}.mt-md-n3,.my-md-n3{margin-top:-1rem!important}.mr-md-n3,.mx-md-n3{margin-right:-1rem!important}.mb-md-n3,.my-md-n3{margin-bottom:-1rem!important}.ml-md-n3,.mx-md-n3{margin-left:-1rem!important}.m-md-n4{margin:-1.5rem!important}.mt-md-n4,.my-md-n4{margin-top:-1.5rem!important}.mr-md-n4,.mx-md-n4{margin-right:-1.5rem!important}.mb-md-n4,.my-md-n4{margin-bottom:-1.5rem!important}.ml-md-n4,.mx-md-n4{margin-left:-1.5rem!important}.m-md-n5{margin:-3rem!important}.mt-md-n5,.my-md-n5{margin-top:-3rem!important}.mr-md-n5,.mx-md-n5{margin-right:-3rem!important}.mb-md-n5,.my-md-n5{margin-bottom:-3rem!important}.ml-md-n5,.mx-md-n5{margin-left:-3rem!important}.m-md-auto{margin:auto!important}.mt-md-auto,.my-md-auto{margin-top:auto!important}.mr-md-auto,.mx-md-auto{margin-right:auto!important}.mb-md-auto,.my-md-auto{margin-bottom:auto!important}.ml-md-auto,.mx-md-auto{margin-left:auto!important}}@media (min-width:992px){.m-lg-0{margin:0!important}.mt-lg-0,.my-lg-0{margin-top:0!important}.mr-lg-0,.mx-lg-0{margin-right:0!important}.mb-lg-0,.my-lg-0{margin-bottom:0!important}.ml-lg-0,.mx-lg-0{margin-left:0!important}.m-lg-1{margin:.25rem!important}.mt-lg-1,.my-lg-1{margin-top:.25rem!important}.mr-lg-1,.mx-lg-1{margin-right:.25rem!important}.mb-lg-1,.my-lg-1{margin-bottom:.25rem!important}.ml-lg-1,.mx-lg-1{margin-left:.25rem!important}.m-lg-2{margin:.5rem!important}.mt-lg-2,.my-lg-2{margin-top:.5rem!important}.mr-lg-2,.mx-lg-2{margin-right:.5rem!important}.mb-lg-2,.my-lg-2{margin-bottom:.5rem!important}.ml-lg-2,.mx-lg-2{margin-left:.5rem!important}.m-lg-3{margin:1rem!important}.mt-lg-3,.my-lg-3{margin-top:1rem!important}.mr-lg-3,.mx-lg-3{margin-right:1rem!important}.mb-lg-3,.my-lg-3{margin-bottom:1rem!important}.ml-lg-3,.mx-lg-3{margin-left:1rem!important}.m-lg-4{margin:1.5rem!important}.mt-lg-4,.my-lg-4{margin-top:1.5rem!important}.mr-lg-4,.mx-lg-4{margin-right:1.5rem!important}.mb-lg-4,.my-lg-4{margin-bottom:1.5rem!important}.ml-lg-4,.mx-lg-4{margin-left:1.5rem!important}.m-lg-5{margin:3rem!important}.mt-lg-5,.my-lg-5{margin-top:3rem!important}.mr-lg-5,.mx-lg-5{margin-right:3rem!important}.mb-lg-5,.my-lg-5{margin-bottom:3rem!important}.ml-lg-5,.mx-lg-5{margin-left:3rem!important}.p-lg-0{padding:0!important}.pt-lg-0,.py-lg-0{padding-top:0!important}.pr-lg-0,.px-lg-0{padding-right:0!important}.pb-lg-0,.py-lg-0{padding-bottom:0!important}.pl-lg-0,.px-lg-0{padding-left:0!important}.p-lg-1{padding:.25rem!important}.pt-lg-1,.py-lg-1{padding-top:.25rem!important}.pr-lg-1,.px-lg-1{padding-right:.25rem!important}.pb-lg-1,.py-lg-1{padding-bottom:.25rem!important}.pl-lg-1,.px-lg-1{padding-left:.25rem!important}.p-lg-2{padding:.5rem!important}.pt-lg-2,.py-lg-2{padding-top:.5rem!important}.pr-lg-2,.px-lg-2{padding-right:.5rem!important}.pb-lg-2,.py-lg-2{padding-bottom:.5rem!important}.pl-lg-2,.px-lg-2{padding-left:.5rem!important}.p-lg-3{padding:1rem!important}.pt-lg-3,.py-lg-3{padding-top:1rem!important}.pr-lg-3,.px-lg-3{padding-right:1rem!important}.pb-lg-3,.py-lg-3{padding-bottom:1rem!important}.pl-lg-3,.px-lg-3{padding-left:1rem!important}.p-lg-4{padding:1.5rem!important}.pt-lg-4,.py-lg-4{padding-top:1.5rem!important}.pr-lg-4,.px-lg-4{padding-right:1.5rem!important}.pb-lg-4,.py-lg-4{padding-bottom:1.5rem!important}.pl-lg-4,.px-lg-4{padding-left:1.5rem!important}.p-lg-5{padding:3rem!important}.pt-lg-5,.py-lg-5{padding-top:3rem!important}.pr-lg-5,.px-lg-5{padding-right:3rem!important}.pb-lg-5,.py-lg-5{padding-bottom:3rem!important}.pl-lg-5,.px-lg-5{padding-left:3rem!important}.m-lg-n1{margin:-.25rem!important}.mt-lg-n1,.my-lg-n1{margin-top:-.25rem!important}.mr-lg-n1,.mx-lg-n1{margin-right:-.25rem!important}.mb-lg-n1,.my-lg-n1{margin-bottom:-.25rem!important}.ml-lg-n1,.mx-lg-n1{margin-left:-.25rem!important}.m-lg-n2{margin:-.5rem!important}.mt-lg-n2,.my-lg-n2{margin-top:-.5rem!important}.mr-lg-n2,.mx-lg-n2{margin-right:-.5rem!important}.mb-lg-n2,.my-lg-n2{margin-bottom:-.5rem!important}.ml-lg-n2,.mx-lg-n2{margin-left:-.5rem!important}.m-lg-n3{margin:-1rem!important}.mt-lg-n3,.my-lg-n3{margin-top:-1rem!important}.mr-lg-n3,.mx-lg-n3{margin-right:-1rem!important}.mb-lg-n3,.my-lg-n3{margin-bottom:-1rem!important}.ml-lg-n3,.mx-lg-n3{margin-left:-1rem!important}.m-lg-n4{margin:-1.5rem!important}.mt-lg-n4,.my-lg-n4{margin-top:-1.5rem!important}.mr-lg-n4,.mx-lg-n4{margin-right:-1.5rem!important}.mb-lg-n4,.my-lg-n4{margin-bottom:-1.5rem!important}.ml-lg-n4,.mx-lg-n4{margin-left:-1.5rem!important}.m-lg-n5{margin:-3rem!important}.mt-lg-n5,.my-lg-n5{margin-top:-3rem!important}.mr-lg-n5,.mx-lg-n5{margin-right:-3rem!important}.mb-lg-n5,.my-lg-n5{margin-bottom:-3rem!important}.ml-lg-n5,.mx-lg-n5{margin-left:-3rem!important}.m-lg-auto{margin:auto!important}.mt-lg-auto,.my-lg-auto{margin-top:auto!important}.mr-lg-auto,.mx-lg-auto{margin-right:auto!important}.mb-lg-auto,.my-lg-auto{margin-bottom:auto!important}.ml-lg-auto,.mx-lg-auto{margin-left:auto!important}}@media (min-width:1200px){.m-xl-0{margin:0!important}.mt-xl-0,.my-xl-0{margin-top:0!important}.mr-xl-0,.mx-xl-0{margin-right:0!important}.mb-xl-0,.my-xl-0{margin-bottom:0!important}.ml-xl-0,.mx-xl-0{margin-left:0!important}.m-xl-1{margin:.25rem!important}.mt-xl-1,.my-xl-1{margin-top:.25rem!important}.mr-xl-1,.mx-xl-1{margin-right:.25rem!important}.mb-xl-1,.my-xl-1{margin-bottom:.25rem!important}.ml-xl-1,.mx-xl-1{margin-left:.25rem!important}.m-xl-2{margin:.5rem!important}.mt-xl-2,.my-xl-2{margin-top:.5rem!important}.mr-xl-2,.mx-xl-2{margin-right:.5rem!important}.mb-xl-2,.my-xl-2{margin-bottom:.5rem!important}.ml-xl-2,.mx-xl-2{margin-left:.5rem!important}.m-xl-3{margin:1rem!important}.mt-xl-3,.my-xl-3{margin-top:1rem!important}.mr-xl-3,.mx-xl-3{margin-right:1rem!important}.mb-xl-3,.my-xl-3{margin-bottom:1rem!important}.ml-xl-3,.mx-xl-3{margin-left:1rem!important}.m-xl-4{margin:1.5rem!important}.mt-xl-4,.my-xl-4{margin-top:1.5rem!important}.mr-xl-4,.mx-xl-4{margin-right:1.5rem!important}.mb-xl-4,.my-xl-4{margin-bottom:1.5rem!important}.ml-xl-4,.mx-xl-4{margin-left:1.5rem!important}.m-xl-5{margin:3rem!important}.mt-xl-5,.my-xl-5{margin-top:3rem!important}.mr-xl-5,.mx-xl-5{margin-right:3rem!important}.mb-xl-5,.my-xl-5{margin-bottom:3rem!important}.ml-xl-5,.mx-xl-5{margin-left:3rem!important}.p-xl-0{padding:0!important}.pt-xl-0,.py-xl-0{padding-top:0!important}.pr-xl-0,.px-xl-0{padding-right:0!important}.pb-xl-0,.py-xl-0{padding-bottom:0!important}.pl-xl-0,.px-xl-0{padding-left:0!important}.p-xl-1{padding:.25rem!important}.pt-xl-1,.py-xl-1{padding-top:.25rem!important}.pr-xl-1,.px-xl-1{padding-right:.25rem!important}.pb-xl-1,.py-xl-1{padding-bottom:.25rem!important}.pl-xl-1,.px-xl-1{padding-left:.25rem!important}.p-xl-2{padding:.5rem!important}.pt-xl-2,.py-xl-2{padding-top:.5rem!important}.pr-xl-2,.px-xl-2{padding-right:.5rem!important}.pb-xl-2,.py-xl-2{padding-bottom:.5rem!important}.pl-xl-2,.px-xl-2{padding-left:.5rem!important}.p-xl-3{padding:1rem!important}.pt-xl-3,.py-xl-3{padding-top:1rem!important}.pr-xl-3,.px-xl-3{padding-right:1rem!important}.pb-xl-3,.py-xl-3{padding-bottom:1rem!important}.pl-xl-3,.px-xl-3{padding-left:1rem!important}.p-xl-4{padding:1.5rem!important}.pt-xl-4,.py-xl-4{padding-top:1.5rem!important}.pr-xl-4,.px-xl-4{padding-right:1.5rem!important}.pb-xl-4,.py-xl-4{padding-bottom:1.5rem!important}.pl-xl-4,.px-xl-4{padding-left:1.5rem!important}.p-xl-5{padding:3rem!important}.pt-xl-5,.py-xl-5{padding-top:3rem!important}.pr-xl-5,.px-xl-5{padding-right:3rem!important}.pb-xl-5,.py-xl-5{padding-bottom:3rem!important}.pl-xl-5,.px-xl-5{padding-left:3rem!important}.m-xl-n1{margin:-.25rem!important}.mt-xl-n1,.my-xl-n1{margin-top:-.25rem!important}.mr-xl-n1,.mx-xl-n1{margin-right:-.25rem!important}.mb-xl-n1,.my-xl-n1{margin-bottom:-.25rem!important}.ml-xl-n1,.mx-xl-n1{margin-left:-.25rem!important}.m-xl-n2{margin:-.5rem!important}.mt-xl-n2,.my-xl-n2{margin-top:-.5rem!important}.mr-xl-n2,.mx-xl-n2{margin-right:-.5rem!important}.mb-xl-n2,.my-xl-n2{margin-bottom:-.5rem!important}.ml-xl-n2,.mx-xl-n2{margin-left:-.5rem!important}.m-xl-n3{margin:-1rem!important}.mt-xl-n3,.my-xl-n3{margin-top:-1rem!important}.mr-xl-n3,.mx-xl-n3{margin-right:-1rem!important}.mb-xl-n3,.my-xl-n3{margin-bottom:-1rem!important}.ml-xl-n3,.mx-xl-n3{margin-left:-1rem!important}.m-xl-n4{margin:-1.5rem!important}.mt-xl-n4,.my-xl-n4{margin-top:-1.5rem!important}.mr-xl-n4,.mx-xl-n4{margin-right:-1.5rem!important}.mb-xl-n4,.my-xl-n4{margin-bottom:-1.5rem!important}.ml-xl-n4,.mx-xl-n4{margin-left:-1.5rem!important}.m-xl-n5{margin:-3rem!important}.mt-xl-n5,.my-xl-n5{margin-top:-3rem!important}.mr-xl-n5,.mx-xl-n5{margin-right:-3rem!important}.mb-xl-n5,.my-xl-n5{margin-bottom:-3rem!important}.ml-xl-n5,.mx-xl-n5{margin-left:-3rem!important}.m-xl-auto{margin:auto!important}.mt-xl-auto,.my-xl-auto{margin-top:auto!important}.mr-xl-auto,.mx-xl-auto{margin-right:auto!important}.mb-xl-auto,.my-xl-auto{margin-bottom:auto!important}.ml-xl-auto,.mx-xl-auto{margin-left:auto!important}}.text-monospace{font-family:SFMono-Regular,Menlo,Monaco,Consolas,\"Liberation Mono\",\"Courier New\",monospace!important}.text-justify{text-align:justify!important}.text-wrap{white-space:normal!important}.text-nowrap{white-space:nowrap!important}.text-truncate{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.text-left{text-align:left!important}.text-right{text-align:right!important}.text-center{text-align:center!important}@media (min-width:576px){.text-sm-left{text-align:left!important}.text-sm-right{text-align:right!important}.text-sm-center{text-align:center!important}}@media (min-width:768px){.text-md-left{text-align:left!important}.text-md-right{text-align:right!important}.text-md-center{text-align:center!important}}@media (min-width:992px){.text-lg-left{text-align:left!important}.text-lg-right{text-align:right!important}.text-lg-center{text-align:center!important}}@media (min-width:1200px){.text-xl-left{text-align:left!important}.text-xl-right{text-align:right!important}.text-xl-center{text-align:center!important}}.text-lowercase{text-transform:lowercase!important}.text-uppercase{text-transform:uppercase!important}.text-capitalize{text-transform:capitalize!important}.font-weight-light{font-weight:300!important}.font-weight-lighter{font-weight:lighter!important}.font-weight-normal{font-weight:400!important}.font-weight-bold{font-weight:700!important}.font-weight-bolder{font-weight:bolder!important}.font-italic{font-style:italic!important}.text-white{color:#fff!important}.text-primary{color:#007bff!important}a.text-primary:focus,a.text-primary:hover{color:#0056b3!important}.text-secondary{color:#6c757d!important}a.text-secondary:focus,a.text-secondary:hover{color:#494f54!important}.text-success{color:#28a745!important}a.text-success:focus,a.text-success:hover{color:#19692c!important}.text-info{color:#17a2b8!important}a.text-info:focus,a.text-info:hover{color:#0f6674!important}.text-warning{color:#ffc107!important}a.text-warning:focus,a.text-warning:hover{color:#ba8b00!important}.text-danger{color:#dc3545!important}a.text-danger:focus,a.text-danger:hover{color:#a71d2a!important}.text-light{color:#f8f9fa!important}a.text-light:focus,a.text-light:hover{color:#cbd3da!important}.text-dark{color:#343a40!important}a.text-dark:focus,a.text-dark:hover{color:#121416!important}.text-body{color:#212529!important}.text-muted{color:#6c757d!important}.text-black-50{color:rgba(0,0,0,.5)!important}.text-white-50{color:hsla(0,0%,100%,.5)!important}.text-hide{background-color:transparent;border:0;color:transparent;font:0/0 a;text-shadow:none}.text-decoration-none{-webkit-text-decoration:none!important;text-decoration:none!important}.text-break{word-break:break-word!important;word-wrap:break-word!important}.text-reset{color:inherit!important}.visible{visibility:visible!important}.invisible{visibility:hidden!important}@media print{*,:after,:before{box-shadow:none!important;text-shadow:none!important}a:not(.btn){-webkit-text-decoration:underline;text-decoration:underline}abbr[title]:after{content:\" (\" attr(title) \")\"}pre{white-space:pre-wrap!important}blockquote,pre{border:1px solid #adb5bd;page-break-inside:avoid}thead{display:table-header-group}img,tr{page-break-inside:avoid}h2,h3,p{orphans:3;widows:3}h2,h3{page-break-after:avoid}@page{size:a3}.container,body{min-width:992px!important}.navbar{display:none}.badge{border:1px solid #000}.table{border-collapse:collapse!important}.table td,.table th{background-color:#fff!important}.table-bordered td,.table-bordered th{border:1px solid #dee2e6!important}.table-dark{color:inherit}.table-dark tbody+tbody,.table-dark td,.table-dark th,.table-dark thead th{border-color:#dee2e6}.table .thead-dark th{border-color:#dee2e6;color:inherit}}", ""]), o.locals = {}, t.exports = o
        },
        276: function(t, e, r) {
            var content = r(277);
            content.__esModule && (content = content.default), "string" == typeof content && (content = [
                [t.i, content, ""]
            ]), content.locals && (t.exports = content.locals);
            (0, r(106).default)("f8abca28", content, !0, {
                sourceMap: !1
            })
        },
        277: function(t, e, r) {
            var o = r(103)((function(i) {
                return i[1]
            }));
            o.push([t.i, 'body{background-color:#000;color:#fff;font-family:"Kanit"}h1{font-size:1.4rem}h2{font-size:1.3rem}@media (max-width:767.98px){body{font-size:.7rem}h1{font-size:1.1rem}h2{font-size:1rem}.btn{font-size:.7rem}}.bg-navy{background-color:#011b47}.bg-blue{background-color:#002b74}.bg-yellow{background-color:#ffbe00}.text-yellow{color:#ffbe00}.banner-bottom{bottom:0;position:fixed;width:100%}.banner-bottom>.wrapper{margin:0 auto;max-width:728px}.banner-left,.banner-right{max-width:272px;position:absolute;top:50px;width:35%}.banner-left{left:0}.banner-right{right:0;text-align:right}.btn-close{background-color:red;color:#fff}', ""]), o.locals = {}, t.exports = o
        },
        278: function(t, e, r) {
            t.exports = r.p + "img/bn15.50e50b7.gif"
        },
        279: function(t, e, r) {
            "use strict";
            r.r(e), r.d(e, "state", (function() {
                return n
            })), r.d(e, "mutations", (function() {
                return l
            })), r.d(e, "actions", (function() {
                return d
            }));
            var o = r(11),
                n = (r(49), function() {
                    return {
                        user: null
                    }
                }),
                l = {
                    setUser: function(t, e) {
                        t.user = e || null
                    }
                },
                d = {
                    nuxtServerInit: function(t, e) {
                        return Object(o.a)(regeneratorRuntime.mark((function r() {
                            var o;
                            return regeneratorRuntime.wrap((function(r) {
                                for (;;) switch (r.prev = r.next) {
                                    case 0:
                                        return r.next = 2, e.$axios.$get("/api/auth/session").catch((function(t) {
                                            console.log(t)
                                        }));
                                    case 2:
                                        (o = r.sent) && t.commit("setUser", o);
                                    case 4:
                                    case "end":
                                        return r.stop()
                                }
                            }), r)
                        })))()
                    }
                }
        },
        31: function(t, e, r) {
            "use strict";
            r.d(e, "b", (function() {
                return It
            })), r.d(e, "a", (function() {
                return T
            }));
            r(32), r(43), r(79), r(80), r(65), r(39);
            var o = r(11),
                n = r(26),
                l = (r(49), r(54), r(40), r(20), r(27), r(81), r(1)),
                d = r(82),
                m = r(201),
                c = r(139),
                f = r.n(c),
                h = r(66),
                x = r.n(h),
                v = (r(41), r(42), r(140)),
                w = r(30),
                y = r(0);
            r(266);
            "scrollRestoration" in window.history && (Object(y.u)("manual"), window.addEventListener("beforeunload", (function() {
                Object(y.u)("auto")
            })), window.addEventListener("load", (function() {
                Object(y.u)("manual")
            })));

            function k(t, e) {
                var r = Object.keys(t);
                if (Object.getOwnPropertySymbols) {
                    var o = Object.getOwnPropertySymbols(t);
                    e && (o = o.filter((function(e) {
                        return Object.getOwnPropertyDescriptor(t, e).enumerable
                    }))), r.push.apply(r, o)
                }
                return r
            }

            function _(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var r = null != arguments[e] ? arguments[e] : {};
                    e % 2 ? k(Object(r), !0).forEach((function(e) {
                        Object(n.a)(t, e, r[e])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r)) : k(Object(r)).forEach((function(e) {
                        Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(r, e))
                    }))
                }
                return t
            }
            var C = function() {};
            l.a.use(v.a);
            var j = {
                mode: "history",
                base: "/",
                linkActiveClass: "nuxt-link-active",
                linkExactActiveClass: "nuxt-link-exact-active",
                scrollBehavior: function(t, e, r) {
                    var o = !1,
                        n = t !== e;
                    r ? o = r : n && function(t) {
                        var e = Object(y.g)(t);
                        if (1 === e.length) {
                            var r = e[0].options;
                            return !1 !== (void 0 === r ? {} : r).scrollToTop
                        }
                        return e.some((function(t) {
                            var e = t.options;
                            return e && e.scrollToTop
                        }))
                    }(t) && (o = {
                        x: 0,
                        y: 0
                    });
                    var l = window.$nuxt;
                    return (!n || t.path === e.path && t.hash !== e.hash) && l.$nextTick((function() {
                        return l.$emit("triggerScroll")
                    })), new Promise((function(e) {
                        l.$once("triggerScroll", (function() {
                            if (t.hash) {
                                var r = t.hash;
                                void 0 !== window.CSS && void 0 !== window.CSS.escape && (r = "#" + window.CSS.escape(r.substr(1)));
                                try {
                                    var n = document.querySelector(r);
                                    if (n) {
                                        var l;
                                        o = {
                                            selector: r
                                        };
                                        var d = Number(null === (l = getComputedStyle(n)["scroll-margin-top"]) || void 0 === l ? void 0 : l.replace("px", ""));
                                        d && (o.offset = {
                                            y: d
                                        })
                                    }
                                } catch (t) {
                                    console.warn("Failed to save scroll position. Please add CSS.escape() polyfill (https://github.com/mathiasbynens/CSS.escape).")
                                }
                            }
                            e(o)
                        }))
                    }))
                },
                routes: [{
                    path: "/game",
                    component: function() {
                        return Object(y.m)(r.e(5).then(r.bind(null, 301)))
                    },
                    name: "game"
                }, {
                    path: "/iframe",
                    component: function() {
                        return Object(y.m)(r.e(8).then(r.bind(null, 302)))
                    },
                    name: "iframe"
                }, {
                    path: "/tded",
                    component: function() {
                        return Object(y.m)(r.e(11).then(r.bind(null, 303)))
                    },
                    name: "tded"
                }, {
                    path: "/game/history",
                    component: function() {
                        return Object(y.m)(r.e(3).then(r.bind(null, 304)))
                    },
                    name: "game-history"
                }, {
                    path: "/game/howto",
                    component: function() {
                        return Object(y.m)(r.e(4).then(r.bind(null, 305)))
                    },
                    name: "game-howto"
                }, {
                    path: "/game/login",
                    component: function() {
                        return Object(y.m)(r.e(6).then(r.bind(null, 306)))
                    },
                    name: "game-login"
                }, {
                    path: "/game/rank",
                    component: function() {
                        return Object(y.m)(r.e(7).then(r.bind(null, 307)))
                    },
                    name: "game-rank"
                }, {
                    path: "/",
                    component: function() {
                        return Object(y.m)(r.e(9).then(r.bind(null, 308)))
                    },
                    name: "index"
                }, {
                    path: "/game/history/id/:id?",
                    component: function() {
                        return Object(y.m)(r.e(2).then(r.bind(null, 309)))
                    },
                    name: "game-history-id-id"
                }, {
                    path: "/liveodds/:id?",
                    component: function() {
                        return Object(y.m)(r.e(10).then(r.bind(null, 310)))
                    },
                    name: "liveodds-id"
                }],
                fallback: !1
            };

            function O(t, e) {
                var base = e._app && e._app.basePath || j.base,
                    r = new v.a(_(_({}, j), {}, {
                        base: base
                    })),
                    o = r.push;
                r.push = function(t) {
                    var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : C,
                        r = arguments.length > 2 ? arguments[2] : void 0;
                    return o.call(this, t, e, r)
                };
                var n = r.resolve.bind(r);
                return r.resolve = function(t, e, r) {
                    return "string" == typeof t && (t = Object(w.c)(t)), n(t, e, r)
                }, r
            }
            var z = {
                    name: "NuxtChild",
                    functional: !0,
                    props: {
                        nuxtChildKey: {
                            type: String,
                            default: ""
                        },
                        keepAlive: Boolean,
                        keepAliveProps: {
                            type: Object,
                            default: void 0
                        }
                    },
                    render: function(t, e) {
                        var r = e.parent,
                            data = e.data,
                            o = e.props,
                            n = r.$createElement;
                        data.nuxtChild = !0;
                        for (var l = r, d = r.$nuxt.nuxt.transitions, m = r.$nuxt.nuxt.defaultTransition, c = 0; r;) r.$vnode && r.$vnode.data.nuxtChild && c++, r = r.$parent;
                        data.nuxtChildDepth = c;
                        var f = d[c] || m,
                            h = {};
                        E.forEach((function(t) {
                            void 0 !== f[t] && (h[t] = f[t])
                        }));
                        var x = {};
                        S.forEach((function(t) {
                            "function" == typeof f[t] && (x[t] = f[t].bind(l))
                        }));
                        var v = x.beforeEnter;
                        if (x.beforeEnter = function(t) {
                                if (window.$nuxt.$nextTick((function() {
                                        window.$nuxt.$emit("triggerScroll")
                                    })), v) return v.call(l, t)
                            }, !1 === f.css) {
                            var w = x.leave;
                            (!w || w.length < 2) && (x.leave = function(t, e) {
                                w && w.call(l, t), l.$nextTick(e)
                            })
                        }
                        var y = n("routerView", data);
                        return o.keepAlive && (y = n("keep-alive", {
                            props: o.keepAliveProps
                        }, [y])), n("transition", {
                            props: h,
                            on: x
                        }, [y])
                    }
                },
                E = ["name", "mode", "appear", "css", "type", "duration", "enterClass", "leaveClass", "appearClass", "enterActiveClass", "enterActiveClass", "leaveActiveClass", "appearActiveClass", "enterToClass", "leaveToClass", "appearToClass"],
                S = ["beforeEnter", "enter", "afterEnter", "enterCancelled", "beforeLeave", "leave", "afterLeave", "leaveCancelled", "beforeAppear", "appear", "afterAppear", "appearCancelled"],
                R = {
                    name: "NuxtError",
                    props: {
                        error: {
                            type: Object,
                            default: null
                        }
                    },
                    computed: {
                        statusCode: function() {
                            return this.error && this.error.statusCode || 500
                        },
                        message: function() {
                            return this.error.message || "Error"
                        }
                    },
                    head: function() {
                        return {
                            title: this.message,
                            meta: [{
                                name: "viewport",
                                content: "width=device-width,initial-scale=1.0,minimum-scale=1.0"
                            }]
                        }
                    }
                },
                A = (r(270), r(8)),
                T = Object(A.a)(R, (function() {
                    var t = this,
                        e = t._self._c;
                    return e("div", {
                        staticClass: "__nuxt-error-page"
                    }, [e("div", {
                        staticClass: "error"
                    }, [e("svg", {
                        attrs: {
                            xmlns: "http://www.w3.org/2000/svg",
                            width: "90",
                            height: "90",
                            fill: "#DBE1EC",
                            viewBox: "0 0 48 48"
                        }
                    }, [e("path", {
                        attrs: {
                            d: "M22 30h4v4h-4zm0-16h4v12h-4zm1.99-10C12.94 4 4 12.95 4 24s8.94 20 19.99 20S44 35.05 44 24 35.04 4 23.99 4zM24 40c-8.84 0-16-7.16-16-16S15.16 8 24 8s16 7.16 16 16-7.16 16-16 16z"
                        }
                    })]), t._v(" "), e("div", {
                        staticClass: "title"
                    }, [t._v(t._s(t.message))]), t._v(" "), 404 === t.statusCode ? e("p", {
                        staticClass: "description"
                    }, [void 0 === t.$route ? e("a", {
                        staticClass: "error-link",
                        attrs: {
                            href: "/"
                        }
                    }) : e("NuxtLink", {
                        staticClass: "error-link",
                        attrs: {
                            to: "/"
                        }
                    }, [t._v("Back to the home page")])], 1) : t._e(), t._v(" "), t._m(0)])])
                }), [function() {
                    var t = this._self._c;
                    return t("div", {
                        staticClass: "logo"
                    }, [t("a", {
                        attrs: {
                            href: "https://nuxtjs.org",
                            target: "_blank",
                            rel: "noopener"
                        }
                    }, [this._v("Nuxt")])])
                }], !1, null, null, null).exports,
                P = r(19),
                M = (r(33), {
                    name: "Nuxt",
                    components: {
                        NuxtChild: z,
                        NuxtError: T
                    },
                    props: {
                        nuxtChildKey: {
                            type: String,
                            default: void 0
                        },
                        keepAlive: Boolean,
                        keepAliveProps: {
                            type: Object,
                            default: void 0
                        },
                        name: {
                            type: String,
                            default: "default"
                        }
                    },
                    errorCaptured: function(t) {
                        this.displayingNuxtError && (this.errorFromNuxtError = t, this.$forceUpdate())
                    },
                    computed: {
                        routerViewKey: function() {
                            if (void 0 !== this.nuxtChildKey || this.$route.matched.length > 1) return this.nuxtChildKey || Object(y.c)(this.$route.matched[0].path)(this.$route.params);
                            var t = Object(P.a)(this.$route.matched, 1)[0];
                            if (!t) return this.$route.path;
                            var e = t.components.default;
                            if (e && e.options) {
                                var r = e.options;
                                if (r.key) return "function" == typeof r.key ? r.key(this.$route) : r.key
                            }
                            return /\/$/.test(t.path) ? this.$route.path : this.$route.path.replace(/\/$/, "")
                        }
                    },
                    beforeCreate: function() {
                        l.a.util.defineReactive(this, "nuxt", this.$root.$options.nuxt)
                    },
                    render: function(t) {
                        var e = this;
                        return this.nuxt.err ? this.errorFromNuxtError ? (this.$nextTick((function() {
                            return e.errorFromNuxtError = !1
                        })), t("div", {}, [t("h2", "An error occurred while showing the error page"), t("p", "Unfortunately an error occurred and while showing the error page another error occurred"), t("p", "Error details: ".concat(this.errorFromNuxtError.toString())), t("nuxt-link", {
                            props: {
                                to: "/"
                            }
                        }, "Go back to home")])) : (this.displayingNuxtError = !0, this.$nextTick((function() {
                            return e.displayingNuxtError = !1
                        })), t(T, {
                            props: {
                                error: this.nuxt.err
                            }
                        })) : t("NuxtChild", {
                            key: this.routerViewKey,
                            props: this.$props
                        })
                    }
                }),
                N = (r(50), r(51), r(52), r(53), r(84), {
                    name: "NuxtLoading",
                    data: function() {
                        return {
                            percent: 0,
                            show: !1,
                            canSucceed: !0,
                            reversed: !1,
                            skipTimerCount: 0,
                            rtl: !1,
                            throttle: 200,
                            duration: 5e3,
                            continuous: !1
                        }
                    },
                    computed: {
                        left: function() {
                            return !(!this.continuous && !this.rtl) && (this.rtl ? this.reversed ? "0px" : "auto" : this.reversed ? "auto" : "0px")
                        }
                    },
                    beforeDestroy: function() {
                        this.clear()
                    },
                    methods: {
                        clear: function() {
                            clearInterval(this._timer), clearTimeout(this._throttle), clearTimeout(this._hide), this._timer = null
                        },
                        start: function() {
                            var t = this;
                            return this.clear(), this.percent = 0, this.reversed = !1, this.skipTimerCount = 0, this.canSucceed = !0, this.throttle ? this._throttle = setTimeout((function() {
                                return t.startTimer()
                            }), this.throttle) : this.startTimer(), this
                        },
                        set: function(t) {
                            return this.show = !0, this.canSucceed = !0, this.percent = Math.min(100, Math.max(0, Math.floor(t))), this
                        },
                        get: function() {
                            return this.percent
                        },
                        increase: function(t) {
                            return this.percent = Math.min(100, Math.floor(this.percent + t)), this
                        },
                        decrease: function(t) {
                            return this.percent = Math.max(0, Math.floor(this.percent - t)), this
                        },
                        pause: function() {
                            return clearInterval(this._timer), this
                        },
                        resume: function() {
                            return this.startTimer(), this
                        },
                        finish: function() {
                            return this.percent = this.reversed ? 0 : 100, this.hide(), this
                        },
                        hide: function() {
                            var t = this;
                            return this.clear(), this._hide = setTimeout((function() {
                                t.show = !1, t.$nextTick((function() {
                                    t.percent = 0, t.reversed = !1
                                }))
                            }), 500), this
                        },
                        fail: function(t) {
                            return this.canSucceed = !1, this
                        },
                        startTimer: function() {
                            var t = this;
                            this.show || (this.show = !0), void 0 === this._cut && (this._cut = 1e4 / Math.floor(this.duration)), this._timer = setInterval((function() {
                                t.skipTimerCount > 0 ? t.skipTimerCount-- : (t.reversed ? t.decrease(t._cut) : t.increase(t._cut), t.continuous && (t.percent >= 100 || t.percent <= 0) && (t.skipTimerCount = 1, t.reversed = !t.reversed))
                            }), 100)
                        }
                    },
                    render: function(t) {
                        var e = t(!1);
                        return this.show && (e = t("div", {
                            staticClass: "nuxt-progress",
                            class: {
                                "nuxt-progress-notransition": this.skipTimerCount > 0, "nuxt-progress-failed": !this.canSucceed
                            },
                            style: {
                                width: this.percent + "%",
                                left: this.left
                            }
                        })), e
                    }
                }),
                L = (r(272), Object(A.a)(N, undefined, undefined, !1, null, null, null).exports),
                I = (r(274), r(276), [function() {
                    var t = this,
                        e = t._self._c;
                    return e("nav", {
                        staticClass: "navbar navbar-expand-md bg-navy"
                    }, [e("div", {
                        staticClass: "container"
                    }, [e("a", {
                        staticClass: "navbar-brand",
                        attrs: {
                            href: "/"
                        }
                    }, [e("img", {
                        attrs: {
                            src: r(104),
                            width: "150",
                            alt: "rakalai"
                        }
                    })]), t._v(" "), e("button", {
                        staticClass: "navbar-toggler border-secondary",
                        attrs: {
                            type: "button",
                            "data-toggle": "collapse",
                            "data-target": "#navBar",
                            "aria-controls": "navBar",
                            "aria-expanded": "false",
                            "aria-label": "Toggle navigation"
                        }
                    }, [e("i", {
                        staticClass: "fas fa-bars text-yellow"
                    })]), t._v(" "), e("div", {
                        staticClass: "collapse navbar-collapse",
                        attrs: {
                            id: "navBar"
                        }
                    }, [e("ul", {
                        staticClass: "navbar-nav ml-auto"
                    }, [e("li", {
                        staticClass: "nav-item"
                    }, [e("a", {
                        staticClass: "nav-link text-yellow",
                        attrs: {
                            href: "/"
                        }
                    }, [t._v("ราคาบอล")])]), t._v(" "), e("li", {
                        staticClass: "nav-item"
                    }, [e("a", {
                        staticClass: "nav-link text-white",
                        attrs: {
                            href: "https://goal.co/วิเคราะห์บอลคืนนี้/",
                            target: "_blank"
                        }
                    }, [t._v("วิเคราะห์บอล")])]), t._v(" "), e("li", {
                        staticClass: "nav-item"
                    }, [e("a", {
                        staticClass: "nav-link text-white",
                        attrs: {
                            href: "/game"
                        }
                    }, [t._v("เกมทายผลบอล")])])])])])])
                }, function() {
                    var t = this,
                        e = t._self._c;
                    return e("div", {
                        staticClass: "container"
                    }, [e("div", {
                        staticClass: "row"
                    }, [e("div", {
                        staticClass: "col"
                    }, [e("div", {
                        staticClass: "carousel slide",
                        attrs: {
                            id: "carouselHeader",
                            "data-ride": "carousel"
                        }
                    }, [e("div", {
                        staticClass: "carousel-inner"
                    }, [e("div", {
                        staticClass: "carousel-item active"
                    }, [e("img", {
                        staticClass: "d-block w-100",
                        attrs: {
                            src: r(105),
                            alt: "rakalai"
                        }
                    })])])])])]), t._v(" "), e("div", {
                        staticClass: "row"
                    }, [e("div", {
                        staticClass: "col mb-3"
                    }, [e("div", {
                        staticClass: "bg-navy p-3"
                    }, [e("h1", {
                        staticClass: "text-yellow"
                    }, [t._v("ตารางบอลวันนี้ ราคาบอลไหล ผลบอลสด")]), t._v(" "), e("p", [t._v("เว็บไซต์ที่รวบรวมราคาบอลวันนี้ ราคาบอลไหล ราคาบอลสด อัตราต่อรองฟุตบอล เรตบอล วันนี้ ปัจจุบัน ล่วงหน้ ผลบอลสดพร้อมราคาบอล อัตราต่อรอง และตารางบอลทุกลีก ทั่วโลก บอลไหล ราคาบอลปัจจุบัน ราคาบอลล่วงหน้า ราคาบอลสูงต่ำ ตารางเปรียบเทียบราคาบอล ราคาบอลไทย ต่างประเทศ และทุกลีกทั่วโลก ตารางราคาบอล และรวมตารางการแข่งขันฟุตบอล โปรแกรมบอลวันนี้ ตารางบอลล่าสุด ตารางบอลพรีเมียร์ลีก ตารางการแข่งล่วงหน้า รายงาน ผลบอลสดพร้อมราคาบอล อัตราต่อรอง")])])])])])
                }, function() {
                    var t = this,
                        e = t._self._c;
                    return e("footer", {
                        staticClass: "container"
                    }, [e("div", {
                        staticClass: "row"
                    }, [e("div", {
                        staticClass: "col-12"
                    }, [e("div", {
                        staticClass: "bg-navy"
                    }, [e("h3", {
                        staticClass: "p-2 my-0"
                    }, [e("i", {
                        staticClass: "fas fa-exchange-alt text-yellow"
                    }), t._v("ราคาบอลไหล แนวทางวิเคราะห์บอล")])]), t._v(" "), e("div", {
                        staticClass: "w-100 bg-yellow",
                        staticStyle: {
                            height: "4px"
                        }
                    })]), t._v(" "), e("div", {
                        staticClass: "col-12"
                    }, [e("p", [t._v("rakalai.com เว็บไซต์รวมราคาบอลวันนี้ ราคาไหล ราคาบอลไหล ราคาบอลไหลวันนี้ ราคาบอลไหลปัจจุบัน ราคาบอลไหลล่วงหน้า ราคาบอลสด ตารางบอลสด ตารางบอลพรีเมียร์ลีก โปรแกรมฟุตบอลวันนี้ อัตราต่อรอง ผลบอลสด รายงานบอลสด ตารางราคาบอล รวมโปรแกรมการแข่งฟุตบอล พรีเมียร์ลีกอังกฤษ ยูฟ่าแชมป์เปี้ยนส์ลีก ยูโรปาลีก ลาลีกา บุนเดสลีกา ลีกเอง รวมทั้ง ราคาบอลไทย ไทยพรีเมียร์ลีก ไทยลีก และอื่นๆอีกมากมาย")])])])])
                }]),
                D = [function() {
                    var t = this._self._c;
                    return t("div", {
                        staticClass: "container"
                    }, [t("div", {
                        staticClass: "row"
                    }, [t("div", {
                        staticClass: "col-12 my-1"
                    }, [t("a", {
                        attrs: {
                            href: "https://www.lotto69up.com/register/login69",
                            target: "_blank"
                        }
                    }, [t("img", {
                        staticClass: "img-fluid mx-auto d-block",
                        attrs: {
                            src: r(278),
                            alt: "rakalai"
                        }
                    })])])])])
                }],
                U = Object(A.a)({}, (function() {
                    this._self._c;
                    return this._m(0)
                }), D, !1, null, null, null).exports,
                B = {
                    mounted: function() {}
                },
                F = Object(A.a)(B, (function() {
                    return (0, this._self._c)("div")
                }), [], !1, null, null, null).exports,
                H = {
                    mounted: function() {
                        $(".banner-bottom .btn-close").on("click", (function() {
                            $(".banner-bottom").hide()
                        }))
                    }
                },
                K = {
                    mounted: function() {
                        $(".banner-left .btn-close").on("click", (function() {
                            $(".banner-left").hide()
                        })), $(window).on("scroll", (function() {
                            var t = $(this).scrollTop();
                            t < 50 || $(".banner-left").css("top", t)
                        }))
                    }
                },
                X = {
                    mounted: function() {
                        $(".banner-right .btn-close").on("click", (function() {
                            $(".banner-right").hide()
                        })), $(window).on("scroll", (function() {
                            var t = $(this).scrollTop();
                            t < 50 || $(".banner-right").css("top", t)
                        }))
                    }
                },
                J = {
                    components: {
                        banners: U,
                        bannerspopup: F,
                        bannersbottom: Object(A.a)(H, (function() {
                            return (0, this._self._c)("div", {
                                staticClass: "banner-bottom"
                            })
                        }), [], !1, null, null, null).exports,
                        bannersleft: Object(A.a)(K, (function() {
                            return (0, this._self._c)("div", {
                                staticClass: "banner-left"
                            })
                        }), [], !1, null, null, null).exports,
                        bannersright: Object(A.a)(X, (function() {
                            return (0, this._self._c)("div", {
                                staticClass: "banner-right"
                            })
                        }), [], !1, null, null, null).exports
                    }
                },
                Q = Object(A.a)(J, (function() {
                    var t = this,
                        e = t._self._c;
                    return e("div", [t._m(0), t._v(" "), e("div", {
                        staticClass: "w-100 bg-yellow",
                        staticStyle: {
                            height: "4px"
                        }
                    }), t._v(" "), t._m(1), t._v(" "), e("client-only", [e("banners"), t._v(" "), e("bannerspopup")], 1), t._v(" "), e("nuxt"), t._v(" "), t._m(2), t._v(" "), e("client-only", [e("bannersbottom"), t._v(" "), e("bannersleft"), t._v(" "), e("bannersright")], 1)], 1)
                }), I, !1, null, null, null).exports,
                V = [function() {
                    var t = this,
                        e = t._self._c;
                    return e("nav", {
                        staticClass: "navbar navbar-expand-md bg-navy"
                    }, [e("div", {
                        staticClass: "container"
                    }, [e("a", {
                        staticClass: "navbar-brand",
                        attrs: {
                            href: "/"
                        }
                    }, [e("img", {
                        attrs: {
                            src: r(104),
                            width: "150",
                            alt: "rakalai"
                        }
                    })]), t._v(" "), e("button", {
                        staticClass: "navbar-toggler border-secondary",
                        attrs: {
                            type: "button",
                            "data-toggle": "collapse",
                            "data-target": "#navBar",
                            "aria-controls": "navBar",
                            "aria-expanded": "false",
                            "aria-label": "Toggle navigation"
                        }
                    }, [e("i", {
                        staticClass: "fas fa-bars text-yellow"
                    })]), t._v(" "), e("div", {
                        staticClass: "collapse navbar-collapse",
                        attrs: {
                            id: "navBar"
                        }
                    }, [e("ul", {
                        staticClass: "navbar-nav ml-auto"
                    }, [e("li", {
                        staticClass: "nav-item"
                    }, [e("a", {
                        staticClass: "nav-link text-white",
                        attrs: {
                            href: "/"
                        }
                    }, [t._v("ราคาบอล")])]), t._v(" "), e("li", {
                        staticClass: "nav-item"
                    }, [e("a", {
                        staticClass: "nav-link text-white",
                        attrs: {
                            href: "/tded"
                        }
                    }, [t._v("ทีเด็ดบอล")])]), t._v(" "), e("li", {
                        staticClass: "nav-item"
                    }, [e("a", {
                        staticClass: "nav-link text-yellow",
                        attrs: {
                            href: "/game"
                        }
                    }, [t._v("เกมทายผลบอล")])])])])])])
                }, function() {
                    var t = this,
                        e = t._self._c;
                    return e("div", {
                        staticClass: "container"
                    }, [e("div", {
                        staticClass: "row"
                    }, [e("div", {
                        staticClass: "col"
                    }, [e("div", {
                        staticClass: "carousel slide",
                        attrs: {
                            id: "carouselHeader",
                            "data-ride": "carousel"
                        }
                    }, [e("div", {
                        staticClass: "carousel-inner"
                    }, [e("div", {
                        staticClass: "carousel-item active"
                    }, [e("img", {
                        staticClass: "d-block w-100",
                        attrs: {
                            src: r(105),
                            alt: "rakalai"
                        }
                    })])])])])]), t._v(" "), e("div", {
                        staticClass: "row"
                    }, [e("div", {
                        staticClass: "col mb-3"
                    }, [e("div", {
                        staticClass: "bg-navy p-3"
                    }, [e("h1", {
                        staticClass: "text-yellow"
                    }, [t._v("ตารางราคาบอลวันนี้ ราคาไหล ราคาบอลไหล วันนี้ ปัจจุบัน ล่วงหน้า ราคาบอลสด อัตราต่อรองฟุตบอล เรตบอล ผลบอลสดพร้อมราคาบอล อัตราต่อรอง และตารางบอลทุกลีก ทั่วโลก")]), t._v(" "), e("p", [t._v("เว็บไซต์ที่รวบรวมราคาบอลวันนี้ ราคาบอลไหล ราคาบอลสด บอลไหล ราคาบอลปัจจุบัน ราคาบอลล่วงหน้า ราคาบอลสูงต่ำ ตารางเปรียบเทียบราคาบอล ราคาบอลไทย ต่างประเทศ และทุกลีกทั่วโลก ตารางราคาบอล และรวมตารางการแข่งขันฟุตบอล โปรแกรมบอลวันนี้ ตารางบอลล่าสุด ตารางบอลพรีเมียร์ลีก ตารางการแข่งล่วงหน้า รายงาน ผลบอลสดพร้อมราคาบอล อัตราต่อรอง")])])])])])
                }, function() {
                    var t = this,
                        e = t._self._c;
                    return e("footer", {
                        staticClass: "container"
                    }, [e("div", {
                        staticClass: "row"
                    }, [e("div", {
                        staticClass: "col-12"
                    }, [e("div", {
                        staticClass: "bg-navy"
                    }, [e("h2", {
                        staticClass: "p-2 my-0"
                    }, [e("i", {
                        staticClass: "fas fa-exchange-alt text-yellow"
                    }), t._v(" ราคาบอลไหล")])]), t._v(" "), e("div", {
                        staticClass: "w-100 bg-yellow",
                        staticStyle: {
                            height: "4px"
                        }
                    })]), t._v(" "), e("div", {
                        staticClass: "col-12"
                    }, [e("p", [t._v("rakalai.com เว็บไซต์รวมราคาบอลวันนี้ ราคาไหล ราคาบอลไหล ราคาบอลไหลวันนี้ ราคาบอลไหลปัจจุบัน ราคาบอลไหลล่วงหน้า ราคาบอลสด ตารางบอลสด ตารางบอลพรีเมียร์ลีก โปรแกรมฟุตบอลวันนี้ อัตราต่อรอง ผลบอลสด รายงานบอลสด ตารางราคาบอล รวมโปรแกรมการแข่งฟุตบอล พรีเมียร์ลีกอังกฤษ ยูฟ่าแชมป์เปี้ยนส์ลีก ยูโรปาลีก ลาลีกา บุนเดสลีกา ลีกเอง รวมทั้ง ราคาบอลไทย ไทยพรีเมียร์ลีก ไทยลีก และอื่นๆอีกมากมาย")])])])])
                }],
                G = {
                    components: {
                        banners: U,
                        bannerspopup: F
                    }
                },
                W = Object(A.a)(G, (function() {
                    var t = this,
                        e = t._self._c;
                    return e("div", [t._m(0), t._v(" "), e("div", {
                        staticClass: "w-100 bg-yellow",
                        staticStyle: {
                            height: "4px"
                        }
                    }), t._v(" "), t._m(1), t._v(" "), e("client-only", [e("banners"), t._v(" "), e("bannerspopup")], 1), t._v(" "), e("nuxt"), t._v(" "), t._m(2)], 1)
                }), V, !1, null, null, null).exports,
                iframe = Object(A.a)({}, (function() {
                    var t = this._self._c;
                    return t("div", [t("nuxt")], 1)
                }), [], !1, null, null, null).exports,
                Y = [function() {
                    var t = this,
                        e = t._self._c;
                    return e("nav", {
                        staticClass: "navbar navbar-expand-md bg-navy"
                    }, [e("div", {
                        staticClass: "container"
                    }, [e("a", {
                        staticClass: "navbar-brand",
                        attrs: {
                            href: "/"
                        }
                    }, [e("img", {
                        attrs: {
                            src: r(104),
                            width: "150",
                            alt: "rakalai"
                        }
                    })]), t._v(" "), e("button", {
                        staticClass: "navbar-toggler border-secondary",
                        attrs: {
                            type: "button",
                            "data-toggle": "collapse",
                            "data-target": "#navBar",
                            "aria-controls": "navBar",
                            "aria-expanded": "false",
                            "aria-label": "Toggle navigation"
                        }
                    }, [e("i", {
                        staticClass: "fas fa-bars text-yellow"
                    })]), t._v(" "), e("div", {
                        staticClass: "collapse navbar-collapse",
                        attrs: {
                            id: "navBar"
                        }
                    }, [e("ul", {
                        staticClass: "navbar-nav ml-auto"
                    }, [e("li", {
                        staticClass: "nav-item"
                    }, [e("a", {
                        staticClass: "nav-link text-yellow",
                        attrs: {
                            href: "/"
                        }
                    }, [t._v("ราคาบอล")])]), t._v(" "), e("li", {
                        staticClass: "nav-item"
                    }, [e("a", {
                        staticClass: "nav-link text-white",
                        attrs: {
                            href: "/tded"
                        }
                    }, [t._v("ทีเด็ดบอล")])]), t._v(" "), e("li", {
                        staticClass: "nav-item"
                    }, [e("a", {
                        staticClass: "nav-link text-white",
                        attrs: {
                            href: "/game"
                        }
                    }, [t._v("เกมทายผลบอล")])])])])])])
                }, function() {
                    var t = this,
                        e = t._self._c;
                    return e("div", {
                        staticClass: "container"
                    }, [e("div", {
                        staticClass: "row"
                    }, [e("div", {
                        staticClass: "col"
                    }, [e("div", {
                        staticClass: "carousel slide",
                        attrs: {
                            id: "carouselHeader",
                            "data-ride": "carousel"
                        }
                    }, [e("div", {
                        staticClass: "carousel-inner"
                    }, [e("div", {
                        staticClass: "carousel-item active"
                    }, [e("img", {
                        staticClass: "d-block w-100",
                        attrs: {
                            src: r(105),
                            alt: "rakalai"
                        }
                    })])])])])]), t._v(" "), e("div", {
                        staticClass: "row"
                    }, [e("div", {
                        staticClass: "col mb-3"
                    }, [e("div", {
                        staticClass: "bg-navy p-3"
                    }, [e("h1", {
                        staticClass: "text-yellow"
                    }, [t._v("ราคาบอล Sbobet (สโบเบ็ต) ตารางเปรียบเทียบราคาบอล ตารางบอลไหล ราคาบอล ราคาบอลไหล ราคาบอลไหลวันนี้ ราคาบอลไหลปัจจุบัน ราคาบอลไหลล่วงหน้า ราคาบอลสด อัตราต่อรอง ผลบอลสด ตารางราคาบอล รวมตารางการแข่งขันฟุตบอลทุกทีม")]), t._v(" "), e("p", [t._v("เว็บไซต์ที่รวบรวมราคาบอล Sbobet สโบเบ็ต เปรียบเทียบ ราคาบอลไหล ราคาบอลสด ราคาบอลปัจจุบัน ราคาบอลล่วงหน้า ราคาสูงต่ำ ตารางราคาบอล และรวมตารางการแข่งขัน โปรแกรมแข่งขัน ตารางบอลล่าสุด ตารางการแข่งล่วงหน้า รายงานผลการแข่งขัน ทีมเหย้า ทีมเยือน")])])])])])
                }, function() {
                    var t = this,
                        e = t._self._c;
                    return e("footer", {
                        staticClass: "container"
                    }, [e("div", {
                        staticClass: "row"
                    }, [e("div", {
                        staticClass: "col-12"
                    }, [e("div", {
                        staticClass: "bg-navy"
                    }, [e("h2", {
                        staticClass: "p-2 my-0"
                    }, [e("i", {
                        staticClass: "fas fa-exchange-alt text-yellow"
                    }), t._v(" ราคาบอล sbobet")])]), t._v(" "), e("div", {
                        staticClass: "w-100 bg-yellow",
                        staticStyle: {
                            height: "4px"
                        }
                    })]), t._v(" "), e("div", {
                        staticClass: "col-12"
                    }, [e("p", [t._v("rakalai.com sbobet รวมราคาบอล ราคาไหล ราคาบอลไหล ราคาบอลไหลวันนี้ ราคาบอลไหลปัจจุบัน ราคาบอลไหลล่วงหน้า ราคาบอลสด ตารางบอลสด อัตราต่อรอง ผลบอลสด รายงานบอลสด ตารางราคาบอล รวมโปรแกรมการแข่งฟุตบอล")])])])])
                }],
                Z = {
                    components: {
                        banners: U,
                        bannerspopup: F
                    }
                },
                tt = Object(A.a)(Z, (function() {
                    var t = this,
                        e = t._self._c;
                    return e("div", [t._m(0), t._v(" "), e("div", {
                        staticClass: "w-100 bg-yellow",
                        staticStyle: {
                            height: "4px"
                        }
                    }), t._v(" "), t._m(1), t._v(" "), e("client-only", [e("banners"), t._v(" "), e("bannerspopup")], 1), t._v(" "), e("nuxt"), t._v(" "), t._m(2)], 1)
                }), Y, !1, null, null, null).exports,
                et = [function() {
                    var t = this,
                        e = t._self._c;
                    return e("nav", {
                        staticClass: "navbar navbar-expand-md bg-navy"
                    }, [e("div", {
                        staticClass: "container"
                    }, [e("a", {
                        staticClass: "navbar-brand",
                        attrs: {
                            href: "/"
                        }
                    }, [e("img", {
                        attrs: {
                            src: r(104),
                            width: "150",
                            alt: "rakalai"
                        }
                    })]), t._v(" "), e("button", {
                        staticClass: "navbar-toggler border-secondary",
                        attrs: {
                            type: "button",
                            "data-toggle": "collapse",
                            "data-target": "#navBar",
                            "aria-controls": "navBar",
                            "aria-expanded": "false",
                            "aria-label": "Toggle navigation"
                        }
                    }, [e("i", {
                        staticClass: "fas fa-bars text-yellow"
                    })]), t._v(" "), e("div", {
                        staticClass: "collapse navbar-collapse",
                        attrs: {
                            id: "navBar"
                        }
                    }, [e("ul", {
                        staticClass: "navbar-nav ml-auto"
                    }, [e("li", {
                        staticClass: "nav-item"
                    }, [e("a", {
                        staticClass: "nav-link text-white",
                        attrs: {
                            href: "/"
                        }
                    }, [t._v("ราคาบอล")])]), t._v(" "), e("li", {
                        staticClass: "nav-item"
                    }, [e("a", {
                        staticClass: "nav-link text-yellow",
                        attrs: {
                            href: "/tded"
                        }
                    }, [t._v("ทีเด็ดบอล")])]), t._v(" "), e("li", {
                        staticClass: "nav-item"
                    }, [e("a", {
                        staticClass: "nav-link text-white",
                        attrs: {
                            href: "/game"
                        }
                    }, [t._v("เกมทายผลบอล")])])])])])])
                }, function() {
                    var t = this,
                        e = t._self._c;
                    return e("div", {
                        staticClass: "container"
                    }, [e("div", {
                        staticClass: "row"
                    }, [e("div", {
                        staticClass: "col"
                    }, [e("div", {
                        staticClass: "carousel slide",
                        attrs: {
                            id: "carouselHeader",
                            "data-ride": "carousel"
                        }
                    }, [e("div", {
                        staticClass: "carousel-inner"
                    }, [e("div", {
                        staticClass: "carousel-item active"
                    }, [e("img", {
                        staticClass: "d-block w-100",
                        attrs: {
                            src: r(105),
                            alt: "rakalai"
                        }
                    })])])])])]), t._v(" "), e("div", {
                        staticClass: "row"
                    }, [e("div", {
                        staticClass: "col mb-3"
                    }, [e("div", {
                        staticClass: "bg-navy p-3"
                    }, [e("h1", {
                        staticClass: "text-yellow"
                    }, [t._v("ทีเด็ดบอล วันนี้ ทีเด้ดเต็ง 1 คู่เน้นๆ รวมทั้งทีเด็ดบอลชุดVIP ระดับ 5 ดาว")]), t._v(" "), e("p", [t._v("ทีเด็ดบอล คือ คู่เด็ดที่เซียนบอลให้เหล่าคอบอลได้ติดตามเก่าในแต่ละวัน โดยจะผ่านการวิเคราะห์บอล มาอย่างดีจากเหล่าเซียนบอลทั้งหลาย เพื่อให้ทุกท่านสามารถเลือกและติดตามเพื่อเป็นแนวทางในการวิเคราะห์บอลในแต่ละวันได้ โดยๆทั่วไปแล้ว ทีเด็ดบอลบอลที่นิยมนั้นมี 3 รูปแบบด้วยกัน ทีเด็ดบอลเต็ง หรือบอลเดี่ยว ที่จะเน้นไปที่การเลือกคู่เดียวเน้นๆ ชัวร์ๆ ทีเด็ดบอลสเต็ป หรือบอลชุด จะเป็นการให้อย่างต่ำอย่างน้อย 3 คู่ 5 คู่ แล้วแต่เซียน แต่ละสำนัก โดยบอลสเต็ปเป็นที่นิยมเป็นอย่างมาก เพราะคุ้มค่าที่จะลงทุน และสุดท้ายทีเด็ดบอลสูงต่ำ เป็นการทายผลบอลที่นับรวมจากผลประตูทั้งสองฝั่งรวมกัน")]), t._v(" "), e("p", [t._v("คอบอลทุกท่านสามารถติดตามทีเด็ดบอลวันนี้ แม่นๆ ที่การันตี ฟันธงจากเซียนบอลตัวยง ได้ที่เว็บไซต์ Rakalai.com ของเรา ที่ได้การอัพเดทให้ทุกท่านได้รับชมกันในทุกวัน พร้อมทั้งนี้ยังมีราคาบอล อัตราต่อรอง พร้อมทั้งข้อมูลก่อนแข่งของทั้งสองทีมให้ได้ทำการวิเคราะห์กันอีกด้วย")])])])])])
                }, function() {
                    var t = this,
                        e = t._self._c;
                    return e("footer", {
                        staticClass: "container"
                    }, [e("div", {
                        staticClass: "row"
                    }, [e("div", {
                        staticClass: "col-12"
                    }, [e("div", {
                        staticClass: "bg-navy"
                    }, [e("h2", {
                        staticClass: "p-2 my-0"
                    }, [e("i", {
                        staticClass: "fas fa-exchange-alt text-yellow"
                    }), t._v(" ราคาบอลไหล")])]), t._v(" "), e("div", {
                        staticClass: "w-100 bg-yellow",
                        staticStyle: {
                            height: "4px"
                        }
                    })]), t._v(" "), e("div", {
                        staticClass: "col-12"
                    }, [e("p", [t._v("rakalai.com เว็บไซต์รวมราคาบอลวันนี้ ราคาไหล ราคาบอลไหล ราคาบอลไหลวันนี้ ราคาบอลไหลปัจจุบัน ราคาบอลไหลล่วงหน้า ราคาบอลสด ตารางบอลสด ตารางบอลพรีเมียร์ลีก โปรแกรมฟุตบอลวันนี้ อัตราต่อรอง ผลบอลสด รายงานบอลสด ตารางราคาบอล รวมโปรแกรมการแข่งฟุตบอล พรีเมียร์ลีกอังกฤษ ยูฟ่าแชมป์เปี้ยนส์ลีก ยูโรปาลีก ลาลีกา บุนเดสลีกา ลีกเอง รวมทั้ง ราคาบอลไทย ไทยพรีเมียร์ลีก ไทยลีก และอื่นๆอีกมากมาย")])])])])
                }],
                ot = {
                    components: {
                        banners: U,
                        bannerspopup: F
                    }
                },
                nt = Object(A.a)(ot, (function() {
                    var t = this,
                        e = t._self._c;
                    return e("div", [t._m(0), t._v(" "), e("div", {
                        staticClass: "w-100 bg-yellow",
                        staticStyle: {
                            height: "4px"
                        }
                    }), t._v(" "), t._m(1), t._v(" "), e("client-only", [e("banners"), t._v(" "), e("bannerspopup")], 1), t._v(" "), e("nuxt"), t._v(" "), t._m(2)], 1)
                }), et, !1, null, null, null).exports;

            function at(t, e) {
                var r = "undefined" != typeof Symbol && t[Symbol.iterator] || t["@@iterator"];
                if (!r) {
                    if (Array.isArray(t) || (r = function(t, e) {
                            if (!t) return;
                            if ("string" == typeof t) return it(t, e);
                            var r = Object.prototype.toString.call(t).slice(8, -1);
                            "Object" === r && t.constructor && (r = t.constructor.name);
                            if ("Map" === r || "Set" === r) return Array.from(t);
                            if ("Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return it(t, e)
                        }(t)) || e && t && "number" == typeof t.length) {
                        r && (t = r);
                        var i = 0,
                            o = function() {};
                        return {
                            s: o,
                            n: function() {
                                return i >= t.length ? {
                                    done: !0
                                } : {
                                    done: !1,
                                    value: t[i++]
                                }
                            },
                            e: function(t) {
                                throw t
                            },
                            f: o
                        }
                    }
                    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }
                var n, l = !0,
                    d = !1;
                return {
                    s: function() {
                        r = r.call(t)
                    },
                    n: function() {
                        var t = r.next();
                        return l = t.done, t
                    },
                    e: function(t) {
                        d = !0, n = t
                    },
                    f: function() {
                        try {
                            l || null == r.return || r.return()
                        } finally {
                            if (d) throw n
                        }
                    }
                }
            }

            function it(t, e) {
                (null == e || e > t.length) && (e = t.length);
                for (var i = 0, r = new Array(e); i < e; i++) r[i] = t[i];
                return r
            }
            var lt = {
                    _default: Object(y.s)(Q),
                    _game: Object(y.s)(W),
                    _iframe: Object(y.s)(iframe),
                    _liveodds: Object(y.s)(tt),
                    _tded: Object(y.s)(nt)
                },
                st = {
                    render: function(t, e) {
                        var r = t("NuxtLoading", {
                                ref: "loading"
                            }),
                            o = t(this.layout || "nuxt"),
                            n = t("div", {
                                domProps: {
                                    id: "__layout"
                                },
                                key: this.layoutName
                            }, [o]),
                            l = t("transition", {
                                props: {
                                    name: "layout",
                                    mode: "out-in"
                                },
                                on: {
                                    beforeEnter: function(t) {
                                        window.$nuxt.$nextTick((function() {
                                            window.$nuxt.$emit("triggerScroll")
                                        }))
                                    }
                                }
                            }, [n]);
                        return t("div", {
                            domProps: {
                                id: "__nuxt"
                            }
                        }, [r, l])
                    },
                    data: function() {
                        return {
                            isOnline: !0,
                            layout: null,
                            layoutName: "",
                            nbFetching: 0
                        }
                    },
                    beforeCreate: function() {
                        l.a.util.defineReactive(this, "nuxt", this.$options.nuxt)
                    },
                    created: function() {
                        this.$root.$options.$nuxt = this, window.$nuxt = this, this.refreshOnlineStatus(), window.addEventListener("online", this.refreshOnlineStatus), window.addEventListener("offline", this.refreshOnlineStatus), this.error = this.nuxt.error, this.context = this.$options.context
                    },
                    mounted: function() {
                        var t = this;
                        return Object(o.a)(regeneratorRuntime.mark((function e() {
                            return regeneratorRuntime.wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        t.$loading = t.$refs.loading;
                                    case 1:
                                    case "end":
                                        return e.stop()
                                }
                            }), e)
                        })))()
                    },
                    watch: {
                        "nuxt.err": "errorChanged"
                    },
                    computed: {
                        isOffline: function() {
                            return !this.isOnline
                        },
                        isFetching: function() {
                            return this.nbFetching > 0
                        }
                    },
                    methods: {
                        refreshOnlineStatus: function() {
                            void 0 === window.navigator.onLine ? this.isOnline = !0 : this.isOnline = window.navigator.onLine
                        },
                        refresh: function() {
                            var t = this;
                            return Object(o.a)(regeneratorRuntime.mark((function e() {
                                var r, n;
                                return regeneratorRuntime.wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            if ((r = Object(y.h)(t.$route)).length) {
                                                e.next = 3;
                                                break
                                            }
                                            return e.abrupt("return");
                                        case 3:
                                            return t.$loading.start(), n = r.map(function() {
                                                var e = Object(o.a)(regeneratorRuntime.mark((function e(r) {
                                                    var p, o, n, component;
                                                    return regeneratorRuntime.wrap((function(e) {
                                                        for (;;) switch (e.prev = e.next) {
                                                            case 0:
                                                                return p = [], r.$options.fetch && r.$options.fetch.length && p.push(Object(y.q)(r.$options.fetch, t.context)), r.$options.asyncData && p.push(Object(y.q)(r.$options.asyncData, t.context).then((function(t) {
                                                                    for (var e in t) l.a.set(r.$data, e, t[e])
                                                                }))), e.next = 5, Promise.all(p);
                                                            case 5:
                                                                p = [], r.$fetch && p.push(r.$fetch()), o = at(Object(y.e)(r.$vnode.componentInstance));
                                                                try {
                                                                    for (o.s(); !(n = o.n()).done;) component = n.value, p.push(component.$fetch())
                                                                } catch (t) {
                                                                    o.e(t)
                                                                } finally {
                                                                    o.f()
                                                                }
                                                                return e.abrupt("return", Promise.all(p));
                                                            case 10:
                                                            case "end":
                                                                return e.stop()
                                                        }
                                                    }), e)
                                                })));
                                                return function(t) {
                                                    return e.apply(this, arguments)
                                                }
                                            }()), e.prev = 5, e.next = 8, Promise.all(n);
                                        case 8:
                                            e.next = 15;
                                            break;
                                        case 10:
                                            e.prev = 10, e.t0 = e.catch(5), t.$loading.fail(e.t0), Object(y.k)(e.t0), t.error(e.t0);
                                        case 15:
                                            t.$loading.finish();
                                        case 16:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e, null, [
                                    [5, 10]
                                ])
                            })))()
                        },
                        errorChanged: function() {
                            if (this.nuxt.err) {
                                this.$loading && (this.$loading.fail && this.$loading.fail(this.nuxt.err), this.$loading.finish && this.$loading.finish());
                                var t = (T.options || T).layout;
                                "function" == typeof t && (t = t(this.context)), this.setLayout(t)
                            }
                        },
                        setLayout: function(t) {
                            return t && lt["_" + t] || (t = "default"), this.layoutName = t, this.layout = lt["_" + t], this.layout
                        },
                        loadLayout: function(t) {
                            return t && lt["_" + t] || (t = "default"), Promise.resolve(lt["_" + t])
                        }
                    },
                    components: {
                        NuxtLoading: L
                    }
                };
            l.a.use(d.a);
            var mt = {};
            (mt = function(t, e) {
                if ((t = t.default || t).commit) throw new Error("[nuxt] ".concat(e, " should export a method that returns a Vuex instance."));
                return "function" != typeof t && (t = Object.assign({}, t)),
                    function(t, e) {
                        if (t.state && "function" != typeof t.state) {
                            console.warn("'state' should be a method that returns an object in ".concat(e));
                            var r = Object.assign({}, t.state);
                            t = Object.assign({}, t, {
                                state: function() {
                                    return r
                                }
                            })
                        }
                        return t
                    }(t, e)
            }(r(279), "store/index.js")).modules = mt.modules || {};
            var ct = mt instanceof Function ? mt : function() {
                return new d.a.Store(Object.assign({
                    strict: !1
                }, mt))
            };
            var pt = r(83),
                ut = r.n(pt),
                ft = r(15);
            r(100);

            function bt(t) {
                return null !== t && "object" === Object(ft.a)(t)
            }

            function gt(t, e) {
                var r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : ".",
                    o = arguments.length > 3 ? arguments[3] : void 0;
                if (!bt(e)) return gt(t, {}, r, o);
                var n = Object.assign({}, e);
                for (var l in t)
                    if ("__proto__" !== l && "constructor" !== l) {
                        var d = t[l];
                        null != d && (o && o(n, l, d, r) || (Array.isArray(d) && Array.isArray(n[l]) ? n[l] = n[l].concat(d) : bt(d) && bt(n[l]) ? n[l] = gt(d, n[l], (r ? "".concat(r, ".") : "") + l.toString(), o) : n[l] = d))
                    }
                return n
            }

            function ht(t) {
                return function() {
                    for (var e = arguments.length, r = new Array(e), o = 0; o < e; o++) r[o] = arguments[o];
                    return r.reduce((function(p, e) {
                        return gt(p, e, "", t)
                    }), {})
                }
            }
            var xt = ht();

            function vt(t, e) {
                var r = Object.keys(t);
                if (Object.getOwnPropertySymbols) {
                    var o = Object.getOwnPropertySymbols(t);
                    e && (o = o.filter((function(e) {
                        return Object.getOwnPropertyDescriptor(t, e).enumerable
                    }))), r.push.apply(r, o)
                }
                return r
            }

            function wt(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var r = null != arguments[e] ? arguments[e] : {};
                    e % 2 ? vt(Object(r), !0).forEach((function(e) {
                        Object(n.a)(t, e, r[e])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r)) : vt(Object(r)).forEach((function(e) {
                        Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(r, e))
                    }))
                }
                return t
            }

            function yt(t, e) {
                var r = "undefined" != typeof Symbol && t[Symbol.iterator] || t["@@iterator"];
                if (!r) {
                    if (Array.isArray(t) || (r = function(t, e) {
                            if (!t) return;
                            if ("string" == typeof t) return kt(t, e);
                            var r = Object.prototype.toString.call(t).slice(8, -1);
                            "Object" === r && t.constructor && (r = t.constructor.name);
                            if ("Map" === r || "Set" === r) return Array.from(t);
                            if ("Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return kt(t, e)
                        }(t)) || e && t && "number" == typeof t.length) {
                        r && (t = r);
                        var i = 0,
                            o = function() {};
                        return {
                            s: o,
                            n: function() {
                                return i >= t.length ? {
                                    done: !0
                                } : {
                                    done: !1,
                                    value: t[i++]
                                }
                            },
                            e: function(t) {
                                throw t
                            },
                            f: o
                        }
                    }
                    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }
                var n, l = !0,
                    d = !1;
                return {
                    s: function() {
                        r = r.call(t)
                    },
                    n: function() {
                        var t = r.next();
                        return l = t.done, t
                    },
                    e: function(t) {
                        d = !0, n = t
                    },
                    f: function() {
                        try {
                            l || null == r.return || r.return()
                        } finally {
                            if (d) throw n
                        }
                    }
                }
            }

            function kt(t, e) {
                (null == e || e > t.length) && (e = t.length);
                for (var i = 0, r = new Array(e); i < e; i++) r[i] = t[i];
                return r
            }
            xt.fn = ht((function(t, e, r, o) {
                if (void 0 !== t[e] && "function" == typeof r) return t[e] = r(t[e]), !0
            })), xt.arrayFn = ht((function(t, e, r, o) {
                if (Array.isArray(t[e]) && "function" == typeof r) return t[e] = r(t[e]), !0
            })), xt.extend = ht;
            for (var _t = {
                    setBaseURL: function(t) {
                        this.defaults.baseURL = t
                    },
                    setHeader: function(t, e) {
                        var r, o = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "common",
                            n = yt(Array.isArray(o) ? o : [o]);
                        try {
                            for (n.s(); !(r = n.n()).done;) {
                                var l = r.value;
                                e ? this.defaults.headers[l][t] = e : delete this.defaults.headers[l][t]
                            }
                        } catch (t) {
                            n.e(t)
                        } finally {
                            n.f()
                        }
                    },
                    setToken: function(t, e) {
                        var r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "common",
                            o = t ? (e ? e + " " : "") + t : null;
                        this.setHeader("Authorization", o, r)
                    },
                    onRequest: function(t) {
                        this.interceptors.request.use((function(e) {
                            return t(e) || e
                        }))
                    },
                    onResponse: function(t) {
                        this.interceptors.response.use((function(e) {
                            return t(e) || e
                        }))
                    },
                    onRequestError: function(t) {
                        this.interceptors.request.use(void 0, (function(e) {
                            return t(e) || Promise.reject(e)
                        }))
                    },
                    onResponseError: function(t) {
                        this.interceptors.response.use(void 0, (function(e) {
                            return t(e) || Promise.reject(e)
                        }))
                    },
                    onError: function(t) {
                        this.onRequestError(t), this.onResponseError(t)
                    },
                    create: function(t) {
                        return $t(xt(t, this.defaults))
                    }
                }, Ct = function() {
                    var t = Ot[jt];
                    _t["$" + t] = function() {
                        return this[t].apply(this, arguments).then((function(t) {
                            return t && t.data
                        }))
                    }
                }, jt = 0, Ot = ["request", "delete", "get", "head", "options", "post", "put", "patch"]; jt < Ot.length; jt++) Ct();
            var $t = function(t) {
                    var e = ut.a.create(t);
                    return e.CancelToken = ut.a.CancelToken, e.isCancel = ut.a.isCancel,
                        function(t) {
                            for (var e in _t) t[e] = _t[e].bind(t)
                        }(e), e.onRequest((function(t) {
                            t.headers = wt(wt({}, e.defaults.headers.common), t.headers)
                        })), zt(e), Et(e), e
                },
                zt = function(t) {
                    t.onRequest((function(t) {
                        void 0 === t.withCredentials && (/^https?:\/\//i.test(t.url) && 0 !== t.url.indexOf(t.baseURL) || (t.withCredentials = !0))
                    }))
                },
                Et = function(t) {
                    var e = {
                            finish: function() {},
                            start: function() {},
                            fail: function() {},
                            set: function() {}
                        },
                        r = function() {
                            var t = "undefined" != typeof window && window.$nuxt;
                            return t && t.$loading && t.$loading.set ? t.$loading : e
                        },
                        o = 0;
                    t.onRequest((function(t) {
                        t && !1 === t.progress || o++
                    })), t.onResponse((function(t) {
                        t && t.config && !1 === t.config.progress || --o <= 0 && (o = 0, r().finish())
                    })), t.onError((function(t) {
                        t && t.config && !1 === t.config.progress || (o--, ut.a.isCancel(t) ? o <= 0 && (o = 0, r().finish()) : (r().fail(), r().finish()))
                    }));
                    var n = function(t) {
                        if (o && t.total) {
                            var progress = 100 * t.loaded / (t.total * o);
                            r().set(Math.min(100, progress))
                        }
                    };
                    t.defaults.onUploadProgress = n, t.defaults.onDownloadProgress = n
                },
                St = function(t, e) {
                    var r = t.$config && t.$config.axios || {},
                        o = r.browserBaseURL || r.browserBaseUrl || r.baseURL || r.baseUrl || "/";
                    var n = $t({
                        baseURL: o,
                        headers: {
                            common: {
                                Accept: "application/json, text/plain, */*"
                            },
                            delete: {},
                            get: {},
                            head: {},
                            post: {},
                            put: {},
                            patch: {}
                        }
                    });
                    t.$axios = n, e("axios", n)
                },
                Rt = function() {
                    var i, s, t, e, a, r;
                    i = window, s = document, t = "script", e = "ga", i.GoogleAnalyticsObject = e, i[e] = i[e] || function() {
                        (i[e].q = i[e].q || []).push(arguments)
                    }, i[e].l = 1 * new Date, a = s.createElement(t), r = s.getElementsByTagName(t)[0], a.async = 1, a.src = "https://www.google-analytics.com/analytics.js", r.parentNode.insertBefore(a, r), ga("create", "UA-123889459-10", "auto"), ga("send", "pageview")
                },
                At = function() {
                    var t, s, e, r, o;
                    window.fbAsyncInit = function() {
                        FB.init({
                            xfbml: !0,
                            version: "v6.0"
                        })
                    }, t = document, s = "script", e = "facebook-jssdk", o = t.getElementsByTagName(s)[0], t.getElementById(e) || ((r = t.createElement(s)).id = e, r.src = "https://connect.facebook.net/th_TH/sdk/xfbml.customerchat.js", o.parentNode.insertBefore(r, o))
                };

            function Tt(t, e) {
                var r = Object.keys(t);
                if (Object.getOwnPropertySymbols) {
                    var o = Object.getOwnPropertySymbols(t);
                    e && (o = o.filter((function(e) {
                        return Object.getOwnPropertyDescriptor(t, e).enumerable
                    }))), r.push.apply(r, o)
                }
                return r
            }

            function Pt(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var r = null != arguments[e] ? arguments[e] : {};
                    e % 2 ? Tt(Object(r), !0).forEach((function(e) {
                        Object(n.a)(t, e, r[e])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r)) : Tt(Object(r)).forEach((function(e) {
                        Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(r, e))
                    }))
                }
                return t
            }
            l.a.component(f.a.name, f.a), l.a.component(x.a.name, Pt(Pt({}, x.a), {}, {
                render: function(t, e) {
                    return x.a._warned || (x.a._warned = !0, console.warn("<no-ssr> has been deprecated and will be removed in Nuxt 3, please use <client-only> instead")), x.a.render(t, e)
                }
            })), l.a.component(z.name, z), l.a.component("NChild", z), l.a.component(M.name, M), Object.defineProperty(l.a.prototype, "$nuxt", {
                get: function() {
                    var t = this.$root ? this.$root.$options.$nuxt : null;
                    return t || "undefined" == typeof window ? t : window.$nuxt
                },
                configurable: !0
            }), l.a.use(m.a, {
                keyName: "head",
                attribute: "data-n-head",
                ssrAttribute: "data-n-head-ssr",
                tagIDKeyName: "hid"
            });
            var Mt = {
                    name: "page",
                    mode: "out-in",
                    appear: !1,
                    appearClass: "appear",
                    appearActiveClass: "appear-active",
                    appearToClass: "appear-to"
                },
                Nt = d.a.Store.prototype.registerModule;

            function Lt(path, t) {
                var e = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                    r = Array.isArray(path) ? !!path.reduce((function(t, path) {
                        return t && t[path]
                    }), this.state) : path in this.state;
                return Nt.call(this, path, t, Pt({
                    preserveState: r
                }, e))
            }

            function It(t) {
                return Dt.apply(this, arguments)
            }

            function Dt() {
                return Dt = Object(o.a)(regeneratorRuntime.mark((function t(e) {
                    var r, n, d, m, c, f, path, h, x = arguments;
                    return regeneratorRuntime.wrap((function(t) {
                        for (;;) switch (t.prev = t.next) {
                            case 0:
                                return h = function(t, e) {
                                    if (!t) throw new Error("inject(key, value) has no key provided");
                                    if (void 0 === e) throw new Error("inject('".concat(t, "', value) has no value provided"));
                                    m[t = "$" + t] = e, m.context[t] || (m.context[t] = e), n[t] = m[t];
                                    var r = "__nuxt_" + t + "_installed__";
                                    l.a[r] || (l.a[r] = !0, l.a.use((function() {
                                        Object.prototype.hasOwnProperty.call(l.a.prototype, t) || Object.defineProperty(l.a.prototype, t, {
                                            get: function() {
                                                return this.$root.$options[t]
                                            }
                                        })
                                    })))
                                }, r = x.length > 1 && void 0 !== x[1] ? x[1] : {}, n = ct(e), t.next = 5, O(0, r);
                            case 5:
                                return d = t.sent, n.$router = d, n.registerModule = Lt, m = Pt({
                                    head: {
                                        title: "ราคาบอลไหล ราคาบอลวันนี้ ล่าสุด เรตบอล อัตราต่อรอง แฮนดิแคป 1x2 สูงต่ำ",
                                        meta: [{
                                            charset: "utf-8"
                                        }, {
                                            name: "viewport",
                                            content: "width=device-width, initial-scale=1"
                                        }, {
                                            name: "description",
                                            content: "ตารางบอลวันนี้ ราคาไหล บอลแฮนดิแคป ราคาบอลไหล ราคาบอลสูงต่ำ 1x2 รวบรวมไว้ทุกราคาของบ่อนพนันเจ้าดัง ทั้งราคาบอลไทย และราคาบอลต่างประเทศ ผลบอลสดพร้อมราคา"
                                        }, {
                                            name: "google-site-verification",
                                            content: "Ju6Tp5Pu9cWC3tlr3DlMoaciLgqpzxJMfpanNbsQn0M"
                                        }],
                                        link: [{
                                            rel: "stylesheet",
                                            href: "https://fonts.googleapis.com/css?family=Kanit&display=swap"
                                        }, {
                                            rel: "stylesheet",
                                            href: "https://use.fontawesome.com/releases/v5.11.2/css/all.css"
                                        }, {
                                            rel: "shortcut icon",
                                            href: "/images/favicon.png",
                                            type: "image/png"
                                        }],
                                        script: [{
                                            src: "/js/jquery-3.4.1.min.js",
                                            body: !0
                                        }, {
                                            src: "/js/bootstrap.bundle.min.js",
                                            body: !0
                                        }],
                                        style: []
                                    },
                                    store: n,
                                    router: d,
                                    nuxt: {
                                        defaultTransition: Mt,
                                        transitions: [Mt],
                                        setTransitions: function(t) {
                                            return Array.isArray(t) || (t = [t]), t = t.map((function(t) {
                                                return t = t ? "string" == typeof t ? Object.assign({}, Mt, {
                                                    name: t
                                                }) : Object.assign({}, Mt, t) : Mt
                                            })), this.$options.nuxt.transitions = t, t
                                        },
                                        err: null,
                                        dateErr: null,
                                        error: function(t) {
                                            t = t || null, m.context._errored = Boolean(t), t = t ? Object(y.p)(t) : null;
                                            var r = m.nuxt;
                                            return this && (r = this.nuxt || this.$options.nuxt), r.dateErr = Date.now(), r.err = t, e && (e.nuxt.error = t), t
                                        }
                                    }
                                }, st), n.app = m, c = e ? e.next : function(t) {
                                    return m.router.push(t)
                                }, e ? f = d.resolve(e.url).route : (path = Object(y.f)(d.options.base, d.options.mode), f = d.resolve(path).route), t.next = 14, Object(y.t)(m, {
                                    store: n,
                                    route: f,
                                    next: c,
                                    error: m.nuxt.error.bind(m),
                                    payload: e ? e.payload : void 0,
                                    req: e ? e.req : void 0,
                                    res: e ? e.res : void 0,
                                    beforeRenderFns: e ? e.beforeRenderFns : void 0,
                                    beforeSerializeFns: e ? e.beforeSerializeFns : void 0,
                                    ssrContext: e
                                });
                            case 14:
                                if (h("config", r), window.__NUXT__ && window.__NUXT__.state && n.replaceState(window.__NUXT__.state), "function" != typeof St) {
                                    t.next = 20;
                                    break
                                }
                                return t.next = 20, St(m.context, h);
                            case 20:
                                if ("function" != typeof Rt) {
                                    t.next = 23;
                                    break
                                }
                                return t.next = 23, Rt(m.context, h);
                            case 23:
                                if ("function" != typeof At) {
                                    t.next = 26;
                                    break
                                }
                                return t.next = 26, At(m.context, h);
                            case 26:
                                return t.next = 29, new Promise((function(t, e) {
                                    if (!d.resolve(m.context.route.fullPath).route.matched.length) return t();
                                    d.replace(m.context.route.fullPath, t, (function(r) {
                                        if (!r._isRouter) return e(r);
                                        if (2 !== r.type) return t();
                                        var n = d.afterEach(function() {
                                            var e = Object(o.a)(regeneratorRuntime.mark((function e(r, o) {
                                                return regeneratorRuntime.wrap((function(e) {
                                                    for (;;) switch (e.prev = e.next) {
                                                        case 0:
                                                            return e.next = 3, Object(y.j)(r);
                                                        case 3:
                                                            m.context.route = e.sent, m.context.params = r.params || {}, m.context.query = r.query || {}, n(), t();
                                                        case 8:
                                                        case "end":
                                                            return e.stop()
                                                    }
                                                }), e)
                                            })));
                                            return function(t, r) {
                                                return e.apply(this, arguments)
                                            }
                                        }())
                                    }))
                                }));
                            case 29:
                                return t.abrupt("return", {
                                    store: n,
                                    app: m,
                                    router: d
                                });
                            case 30:
                            case "end":
                                return t.stop()
                        }
                    }), t)
                }))), Dt.apply(this, arguments)
            }
        },
        66: function(t, e, r) {
            "use strict";
            var o = {
                name: "NoSsr",
                functional: !0,
                props: {
                    placeholder: String,
                    placeholderTag: {
                        type: String,
                        default: "div"
                    }
                },
                render: function(t, e) {
                    var r = e.parent,
                        o = e.slots,
                        n = e.props,
                        l = o(),
                        d = l.default;
                    void 0 === d && (d = []);
                    var m = l.placeholder;
                    return r._isMounted ? d : (r.$once("hook:mounted", (function() {
                        r.$forceUpdate()
                    })), n.placeholderTag && (n.placeholder || m) ? t(n.placeholderTag, {
                        class: ["no-ssr-placeholder"]
                    }, n.placeholder || m) : d.length > 0 ? d.map((function() {
                        return t(!1)
                    })) : t(!1))
                }
            };
            t.exports = o
        }
    },
    [
        [205, 12, 1]
    ]
]);