! function(t) {
    var e = {};

    function n(r) {
        if (e[r]) return e[r].exports;
        var i = e[r] = {
            i: r,
            l: !1,
            exports: {}
        };
        return t[r].call(i.exports, i, i.exports, n), i.l = !0, i.exports
    }
    n.m = t, n.c = e, n.d = function(t, e, r) {
        n.o(t, e) || Object.defineProperty(t, e, {
            enumerable: !0,
            get: r
        })
    }, n.r = function(t) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(t, "__esModule", {
            value: !0
        })
    }, n.t = function(t, e) {
        if (1 & e && (t = n(t)), 8 & e) return t;
        if (4 & e && "object" == typeof t && t && t.__esModule) return t;
        var r = Object.create(null);
        if (n.r(r), Object.defineProperty(r, "default", {
                enumerable: !0,
                value: t
            }), 2 & e && "string" != typeof t)
            for (var i in t) n.d(r, i, function(e) {
                return t[e]
            }.bind(null, i));
        return r
    }, n.n = function(t) {
        var e = t && t.__esModule ? function() {
            return t.default
        } : function() {
            return t
        };
        return n.d(e, "a", e), e
    }, n.o = function(t, e) {
        return Object.prototype.hasOwnProperty.call(t, e)
    }, n.p = "", n(n.s = 43)
}([
    function(t, e, n) {
        "use strict";
        (function(t, n) {
            /*!
             * Vue.js v2.6.10
             * (c) 2014-2019 Evan You
             * Released under the MIT License.
             */
            var r = Object.freeze({});

            function i(t) {
                return null == t
            }

            function a(t) {
                return null != t
            }

            function o(t) {
                return !0 === t
            }

            function s(t) {
                return "string" == typeof t || "number" == typeof t || "symbol" == typeof t || "boolean" == typeof t
            }

            function l(t) {
                return null !== t && "object" == typeof t
            }
            var u = Object.prototype.toString;

            function c(t) {
                return "[object Object]" === u.call(t)
            }

            function h(t) {
                return "[object RegExp]" === u.call(t)
            }

            function p(t) {
                var e = parseFloat(String(t));
                return e >= 0 && Math.floor(e) === e && isFinite(t)
            }

            function f(t) {
                return a(t) && "function" == typeof t.then && "function" == typeof t.catch
            }

            function d(t) {
                return null == t ? "" : Array.isArray(t) || c(t) && t.toString === u ? JSON.stringify(t, null, 2) : String(t)
            }

            function m(t) {
                var e = parseFloat(t);
                return isNaN(e) ? t : e
            }

            function g(t, e) {
                for (var n = Object.create(null), r = t.split(","), i = 0; i < r.length; i++) n[r[i]] = !0;
                return e ? function(t) {
                    return n[t.toLowerCase()]
                } : function(t) {
                    return n[t]
                }
            }
            var v = g("slot,component", !0),
                y = g("key,ref,slot,slot-scope,is");

            function b(t, e) {
                if (t.length) {
                    var n = t.indexOf(e);
                    if (n > -1) return t.splice(n, 1)
                }
            }
            var w = Object.prototype.hasOwnProperty;

            function C(t, e) {
                return w.call(t, e)
            }

            function _(t) {
                var e = Object.create(null);
                return function(n) {
                    return e[n] || (e[n] = t(n))
                }
            }
            var S = /-(\w)/g,
                x = _(function(t) {
                    return t.replace(S, function(t, e) {
                        return e ? e.toUpperCase() : ""
                    })
                }),
                k = _(function(t) {
                    return t.charAt(0).toUpperCase() + t.slice(1)
                }),
                T = /\B([A-Z])/g,
                O = _(function(t) {
                    return t.replace(T, "-$1").toLowerCase()
                });
            var E = Function.prototype.bind ? function(t, e) {
                return t.bind(e)
            } : function(t, e) {
                function n(n) {
                    var r = arguments.length;
                    return r ? r > 1 ? t.apply(e, arguments) : t.call(e, n) : t.call(e)
                }
                return n._length = t.length, n
            };

            function A(t, e) {
                e = e || 0;
                for (var n = t.length - e, r = new Array(n); n--;) r[n] = t[n + e];
                return r
            }

            function N(t, e) {
                for (var n in e) t[n] = e[n];
                return t
            }

            function I(t) {
                for (var e = {}, n = 0; n < t.length; n++) t[n] && N(e, t[n]);
                return e
            }

            function P(t, e, n) {}
            var $ = function(t, e, n) {
                    return !1
                },
                F = function(t) {
                    return t
                };

            function M(t, e) {
                if (t === e) return !0;
                var n = l(t),
                    r = l(e);
                if (!n || !r) return !n && !r && String(t) === String(e);
                try {
                    var i = Array.isArray(t),
                        a = Array.isArray(e);
                    if (i && a) return t.length === e.length && t.every(function(t, n) {
                        return M(t, e[n])
                    });
                    if (t instanceof Date && e instanceof Date) return t.getTime() === e.getTime();
                    if (i || a) return !1;
                    var o = Object.keys(t),
                        s = Object.keys(e);
                    return o.length === s.length && o.every(function(n) {
                        return M(t[n], e[n])
                    })
                } catch (t) {
                    return !1
                }
            }

            function L(t, e) {
                for (var n = 0; n < t.length; n++)
                    if (M(t[n], e)) return n;
                return -1
            }

            function D(t) {
                var e = !1;
                return function() {
                    e || (e = !0, t.apply(this, arguments))
                }
            }
            var j = "data-server-rendered",
                V = ["component", "directive", "filter"],
                R = ["beforeCreate", "created", "beforeMount", "mounted", "beforeUpdate", "updated", "beforeDestroy", "destroyed", "activated", "deactivated", "errorCaptured", "serverPrefetch"],
                z = {
                    optionMergeStrategies: Object.create(null),
                    silent: !1,
                    productionTip: !1,
                    devtools: !1,
                    performance: !1,
                    errorHandler: null,
                    warnHandler: null,
                    ignoredElements: [],
                    keyCodes: Object.create(null),
                    isReservedTag: $,
                    isReservedAttr: $,
                    isUnknownElement: $,
                    getTagNamespace: P,
                    parsePlatformTagName: F,
                    mustUseProp: $,
                    async: !0,
                    _lifecycleHooks: R
                },
                B = /a-zA-Z\u00B7\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u037D\u037F-\u1FFF\u200C-\u200D\u203F-\u2040\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD/;

            function W(t, e, n, r) {
                Object.defineProperty(t, e, {
                    value: n,
                    enumerable: !!r,
                    writable: !0,
                    configurable: !0
                })
            }
            var G = new RegExp("[^" + B.source + ".$_\\d]");
            var q, U = "__proto__" in {},
                H = "undefined" != typeof window,
                J = "undefined" != typeof WXEnvironment && !!WXEnvironment.platform,
                K = J && WXEnvironment.platform.toLowerCase(),
                Z = H && window.navigator.userAgent.toLowerCase(),
                X = Z && /msie|trident/.test(Z),
                Y = Z && Z.indexOf("msie 9.0") > 0,
                Q = Z && Z.indexOf("edge/") > 0,
                tt = (Z && Z.indexOf("android"), Z && /iphone|ipad|ipod|ios/.test(Z) || "ios" === K),
                et = (Z && /chrome\/\d+/.test(Z), Z && /phantomjs/.test(Z), Z && Z.match(/firefox\/(\d+)/)),
                nt = {}.watch,
                rt = !1;
            if (H) try {
                var it = {};
                Object.defineProperty(it, "passive", {
                    get: function() {
                        rt = !0
                    }
                }), window.addEventListener("test-passive", null, it)
            } catch (t) {}
            var at = function() {
                    return void 0 === q && (q = !H && !J && void 0 !== t && (t.process && "server" === t.process.env.VUE_ENV)), q
                },
                ot = H && window.__VUE_DEVTOOLS_GLOBAL_HOOK__;

            function st(t) {
                return "function" == typeof t && /native code/.test(t.toString())
            }
            var lt, ut = "undefined" != typeof Symbol && st(Symbol) && "undefined" != typeof Reflect && st(Reflect.ownKeys);
            lt = "undefined" != typeof Set && st(Set) ? Set : function() {
                function t() {
                    this.set = Object.create(null)
                }
                return t.prototype.has = function(t) {
                    return !0 === this.set[t]
                }, t.prototype.add = function(t) {
                    this.set[t] = !0
                }, t.prototype.clear = function() {
                    this.set = Object.create(null)
                }, t
            }();
            var ct = P,
                ht = 0,
                pt = function() {
                    this.id = ht++, this.subs = []
                };
            pt.prototype.addSub = function(t) {
                this.subs.push(t)
            }, pt.prototype.removeSub = function(t) {
                b(this.subs, t)
            }, pt.prototype.depend = function() {
                pt.target && pt.target.addDep(this)
            }, pt.prototype.notify = function() {
                var t = this.subs.slice();
                for (var e = 0, n = t.length; e < n; e++) t[e].update()
            }, pt.target = null;
            var ft = [];

            function dt(t) {
                ft.push(t), pt.target = t
            }

            function mt() {
                ft.pop(), pt.target = ft[ft.length - 1]
            }
            var gt = function(t, e, n, r, i, a, o, s) {
                    this.tag = t, this.data = e, this.children = n, this.text = r, this.elm = i, this.ns = void 0, this.context = a, this.fnContext = void 0, this.fnOptions = void 0, this.fnScopeId = void 0, this.key = e && e.key, this.componentOptions = o, this.componentInstance = void 0, this.parent = void 0, this.raw = !1, this.isStatic = !1, this.isRootInsert = !0, this.isComment = !1, this.isCloned = !1, this.isOnce = !1, this.asyncFactory = s, this.asyncMeta = void 0, this.isAsyncPlaceholder = !1
                },
                vt = {
                    child: {
                        configurable: !0
                    }
                };
            vt.child.get = function() {
                return this.componentInstance
            }, Object.defineProperties(gt.prototype, vt);
            var yt = function(t) {
                void 0 === t && (t = "");
                var e = new gt;
                return e.text = t, e.isComment = !0, e
            };

            function bt(t) {
                return new gt(void 0, void 0, void 0, String(t))
            }

            function wt(t) {
                var e = new gt(t.tag, t.data, t.children && t.children.slice(), t.text, t.elm, t.context, t.componentOptions, t.asyncFactory);
                return e.ns = t.ns, e.isStatic = t.isStatic, e.key = t.key, e.isComment = t.isComment, e.fnContext = t.fnContext, e.fnOptions = t.fnOptions, e.fnScopeId = t.fnScopeId, e.asyncMeta = t.asyncMeta, e.isCloned = !0, e
            }
            var Ct = Array.prototype,
                _t = Object.create(Ct);
            ["push", "pop", "shift", "unshift", "splice", "sort", "reverse"].forEach(function(t) {
                var e = Ct[t];
                W(_t, t, function() {
                    for (var n = [], r = arguments.length; r--;) n[r] = arguments[r];
                    var i, a = e.apply(this, n),
                        o = this.__ob__;
                    switch (t) {
                        case "push":
                        case "unshift":
                            i = n;
                            break;
                        case "splice":
                            i = n.slice(2)
                    }
                    return i && o.observeArray(i), o.dep.notify(), a
                })
            });
            var St = Object.getOwnPropertyNames(_t),
                xt = !0;

            function kt(t) {
                xt = t
            }
            var Tt = function(t) {
                var e;
                this.value = t, this.dep = new pt, this.vmCount = 0, W(t, "__ob__", this), Array.isArray(t) ? (U ? (e = _t, t.__proto__ = e) : function(t, e, n) {
                    for (var r = 0, i = n.length; r < i; r++) {
                        var a = n[r];
                        W(t, a, e[a])
                    }
                }(t, _t, St), this.observeArray(t)) : this.walk(t)
            };

            function Ot(t, e) {
                var n;
                if (l(t) && !(t instanceof gt)) return C(t, "__ob__") && t.__ob__ instanceof Tt ? n = t.__ob__ : xt && !at() && (Array.isArray(t) || c(t)) && Object.isExtensible(t) && !t._isVue && (n = new Tt(t)), e && n && n.vmCount++, n
            }

            function Et(t, e, n, r, i) {
                var a = new pt,
                    o = Object.getOwnPropertyDescriptor(t, e);
                if (!o || !1 !== o.configurable) {
                    var s = o && o.get,
                        l = o && o.set;
                    s && !l || 2 !== arguments.length || (n = t[e]);
                    var u = !i && Ot(n);
                    Object.defineProperty(t, e, {
                        enumerable: !0,
                        configurable: !0,
                        get: function() {
                            var e = s ? s.call(t) : n;
                            return pt.target && (a.depend(), u && (u.dep.depend(), Array.isArray(e) && function t(e) {
                                for (var n = void 0, r = 0, i = e.length; r < i; r++)(n = e[r]) && n.__ob__ && n.__ob__.dep.depend(), Array.isArray(n) && t(n)
                            }(e))), e
                        },
                        set: function(e) {
                            var r = s ? s.call(t) : n;
                            e === r || e != e && r != r || s && !l || (l ? l.call(t, e) : n = e, u = !i && Ot(e), a.notify())
                        }
                    })
                }
            }

            function At(t, e, n) {
                if (Array.isArray(t) && p(e)) return t.length = Math.max(t.length, e), t.splice(e, 1, n), n;
                if (e in t && !(e in Object.prototype)) return t[e] = n, n;
                var r = t.__ob__;
                return t._isVue || r && r.vmCount ? n : r ? (Et(r.value, e, n), r.dep.notify(), n) : (t[e] = n, n)
            }

            function Nt(t, e) {
                if (Array.isArray(t) && p(e)) t.splice(e, 1);
                else {
                    var n = t.__ob__;
                    t._isVue || n && n.vmCount || C(t, e) && (delete t[e], n && n.dep.notify())
                }
            }
            Tt.prototype.walk = function(t) {
                for (var e = Object.keys(t), n = 0; n < e.length; n++) Et(t, e[n])
            }, Tt.prototype.observeArray = function(t) {
                for (var e = 0, n = t.length; e < n; e++) Ot(t[e])
            };
            var It = z.optionMergeStrategies;

            function Pt(t, e) {
                if (!e) return t;
                for (var n, r, i, a = ut ? Reflect.ownKeys(e) : Object.keys(e), o = 0; o < a.length; o++) "__ob__" !== (n = a[o]) && (r = t[n], i = e[n], C(t, n) ? r !== i && c(r) && c(i) && Pt(r, i) : At(t, n, i));
                return t
            }

            function $t(t, e, n) {
                return n ? function() {
                    var r = "function" == typeof e ? e.call(n, n) : e,
                        i = "function" == typeof t ? t.call(n, n) : t;
                    return r ? Pt(r, i) : i
                } : e ? t ? function() {
                    return Pt("function" == typeof e ? e.call(this, this) : e, "function" == typeof t ? t.call(this, this) : t)
                } : e : t
            }

            function Ft(t, e) {
                var n = e ? t ? t.concat(e) : Array.isArray(e) ? e : [e] : t;
                return n ? function(t) {
                    for (var e = [], n = 0; n < t.length; n++) - 1 === e.indexOf(t[n]) && e.push(t[n]);
                    return e
                }(n) : n
            }

            function Mt(t, e, n, r) {
                var i = Object.create(t || null);
                return e ? N(i, e) : i
            }
            It.data = function(t, e, n) {
                return n ? $t(t, e, n) : e && "function" != typeof e ? t : $t(t, e)
            }, R.forEach(function(t) {
                It[t] = Ft
            }), V.forEach(function(t) {
                It[t + "s"] = Mt
            }), It.watch = function(t, e, n, r) {
                if (t === nt && (t = void 0), e === nt && (e = void 0), !e) return Object.create(t || null);
                if (!t) return e;
                var i = {};
                for (var a in N(i, t), e) {
                    var o = i[a],
                        s = e[a];
                    o && !Array.isArray(o) && (o = [o]), i[a] = o ? o.concat(s) : Array.isArray(s) ? s : [s]
                }
                return i
            }, It.props = It.methods = It.inject = It.computed = function(t, e, n, r) {
                if (!t) return e;
                var i = Object.create(null);
                return N(i, t), e && N(i, e), i
            }, It.provide = $t;
            var Lt = function(t, e) {
                return void 0 === e ? t : e
            };

            function Dt(t, e, n) {
                if ("function" == typeof e && (e = e.options), function(t, e) {
                        var n = t.props;
                        if (n) {
                            var r, i, a = {};
                            if (Array.isArray(n))
                                for (r = n.length; r--;) "string" == typeof(i = n[r]) && (a[x(i)] = {
                                    type: null
                                });
                            else if (c(n))
                                for (var o in n) i = n[o], a[x(o)] = c(i) ? i : {
                                    type: i
                                };
                            t.props = a
                        }
                    }(e), function(t, e) {
                        var n = t.inject;
                        if (n) {
                            var r = t.inject = {};
                            if (Array.isArray(n))
                                for (var i = 0; i < n.length; i++) r[n[i]] = {
                                    from: n[i]
                                };
                            else if (c(n))
                                for (var a in n) {
                                    var o = n[a];
                                    r[a] = c(o) ? N({
                                        from: a
                                    }, o) : {
                                        from: o
                                    }
                                }
                        }
                    }(e), function(t) {
                        var e = t.directives;
                        if (e)
                            for (var n in e) {
                                var r = e[n];
                                "function" == typeof r && (e[n] = {
                                    bind: r,
                                    update: r
                                })
                            }
                    }(e), !e._base && (e.extends && (t = Dt(t, e.extends, n)), e.mixins))
                    for (var r = 0, i = e.mixins.length; r < i; r++) t = Dt(t, e.mixins[r], n);
                var a, o = {};
                for (a in t) s(a);
                for (a in e) C(t, a) || s(a);

                function s(r) {
                    var i = It[r] || Lt;
                    o[r] = i(t[r], e[r], n, r)
                }
                return o
            }

            function jt(t, e, n, r) {
                if ("string" == typeof n) {
                    var i = t[e];
                    if (C(i, n)) return i[n];
                    var a = x(n);
                    if (C(i, a)) return i[a];
                    var o = k(a);
                    return C(i, o) ? i[o] : i[n] || i[a] || i[o]
                }
            }

            function Vt(t, e, n, r) {
                var i = e[t],
                    a = !C(n, t),
                    o = n[t],
                    s = Bt(Boolean, i.type);
                if (s > -1)
                    if (a && !C(i, "default")) o = !1;
                    else if ("" === o || o === O(t)) {
                        var l = Bt(String, i.type);
                        (l < 0 || s < l) && (o = !0)
                    }
                if (void 0 === o) {
                    o = function(t, e, n) {
                        if (!C(e, "default")) return;
                        var r = e.default;
                        0;
                        if (t && t.$options.propsData && void 0 === t.$options.propsData[n] && void 0 !== t._props[n]) return t._props[n];
                        return "function" == typeof r && "Function" !== Rt(e.type) ? r.call(t) : r
                    }(r, i, t);
                    var u = xt;
                    kt(!0), Ot(o), kt(u)
                }
                return o
            }

            function Rt(t) {
                var e = t && t.toString().match(/^\s*function (\w+)/);
                return e ? e[1] : ""
            }

            function zt(t, e) {
                return Rt(t) === Rt(e)
            }

            function Bt(t, e) {
                if (!Array.isArray(e)) return zt(e, t) ? 0 : -1;
                for (var n = 0, r = e.length; n < r; n++)
                    if (zt(e[n], t)) return n;
                return -1
            }

            function Wt(t, e, n) {
                dt();
                try {
                    if (e)
                        for (var r = e; r = r.$parent;) {
                            var i = r.$options.errorCaptured;
                            if (i)
                                for (var a = 0; a < i.length; a++) try {
                                    if (!1 === i[a].call(r, t, e, n)) return
                                } catch (t) {
                                    qt(t, r, "errorCaptured hook")
                                }
                        }
                    qt(t, e, n)
                } finally {
                    mt()
                }
            }

            function Gt(t, e, n, r, i) {
                var a;
                try {
                    (a = n ? t.apply(e, n) : t.call(e)) && !a._isVue && f(a) && !a._handled && (a.catch(function(t) {
                        return Wt(t, r, i + " (Promise/async)")
                    }), a._handled = !0)
                } catch (t) {
                    Wt(t, r, i)
                }
                return a
            }

            function qt(t, e, n) {
                if (z.errorHandler) try {
                    return z.errorHandler.call(null, t, e, n)
                } catch (e) {
                    e !== t && Ut(e, null, "config.errorHandler")
                }
                Ut(t, e, n)
            }

            function Ut(t, e, n) {
                if (!H && !J || "undefined" == typeof console) throw t;
                console.error(t)
            }
            var Ht, Jt = !1,
                Kt = [],
                Zt = !1;

            function Xt() {
                Zt = !1;
                var t = Kt.slice(0);
                Kt.length = 0;
                for (var e = 0; e < t.length; e++) t[e]()
            }
            if ("undefined" != typeof Promise && st(Promise)) {
                var Yt = Promise.resolve();
                Ht = function() {
                    Yt.then(Xt), tt && setTimeout(P)
                }, Jt = !0
            } else if (X || "undefined" == typeof MutationObserver || !st(MutationObserver) && "[object MutationObserverConstructor]" !== MutationObserver.toString()) Ht = void 0 !== n && st(n) ? function() {
                n(Xt)
            } : function() {
                setTimeout(Xt, 0)
            };
            else {
                var Qt = 1,
                    te = new MutationObserver(Xt),
                    ee = document.createTextNode(String(Qt));
                te.observe(ee, {
                    characterData: !0
                }), Ht = function() {
                    Qt = (Qt + 1) % 2, ee.data = String(Qt)
                }, Jt = !0
            }

            function ne(t, e) {
                var n;
                if (Kt.push(function() {
                        if (t) try {
                            t.call(e)
                        } catch (t) {
                            Wt(t, e, "nextTick")
                        } else n && n(e)
                    }), Zt || (Zt = !0, Ht()), !t && "undefined" != typeof Promise) return new Promise(function(t) {
                    n = t
                })
            }
            var re = new lt;

            function ie(t) {
                ! function t(e, n) {
                    var r, i;
                    var a = Array.isArray(e);
                    if (!a && !l(e) || Object.isFrozen(e) || e instanceof gt) return;
                    if (e.__ob__) {
                        var o = e.__ob__.dep.id;
                        if (n.has(o)) return;
                        n.add(o)
                    }
                    if (a)
                        for (r = e.length; r--;) t(e[r], n);
                    else
                        for (i = Object.keys(e), r = i.length; r--;) t(e[i[r]], n)
                }(t, re), re.clear()
            }
            var ae = _(function(t) {
                var e = "&" === t.charAt(0),
                    n = "~" === (t = e ? t.slice(1) : t).charAt(0),
                    r = "!" === (t = n ? t.slice(1) : t).charAt(0);
                return {
                    name: t = r ? t.slice(1) : t,
                    once: n,
                    capture: r,
                    passive: e
                }
            });

            function oe(t, e) {
                function n() {
                    var t = arguments,
                        r = n.fns;
                    if (!Array.isArray(r)) return Gt(r, null, arguments, e, "v-on handler");
                    for (var i = r.slice(), a = 0; a < i.length; a++) Gt(i[a], null, t, e, "v-on handler")
                }
                return n.fns = t, n
            }

            function se(t, e, n, r, a, s) {
                var l, u, c, h;
                for (l in t) u = t[l], c = e[l], h = ae(l), i(u) || (i(c) ? (i(u.fns) && (u = t[l] = oe(u, s)), o(h.once) && (u = t[l] = a(h.name, u, h.capture)), n(h.name, u, h.capture, h.passive, h.params)) : u !== c && (c.fns = u, t[l] = c));
                for (l in e) i(t[l]) && r((h = ae(l)).name, e[l], h.capture)
            }

            function le(t, e, n) {
                var r;
                t instanceof gt && (t = t.data.hook || (t.data.hook = {}));
                var s = t[e];

                function l() {
                    n.apply(this, arguments), b(r.fns, l)
                }
                i(s) ? r = oe([l]) : a(s.fns) && o(s.merged) ? (r = s).fns.push(l) : r = oe([s, l]), r.merged = !0, t[e] = r
            }

            function ue(t, e, n, r, i) {
                if (a(e)) {
                    if (C(e, n)) return t[n] = e[n], i || delete e[n], !0;
                    if (C(e, r)) return t[n] = e[r], i || delete e[r], !0
                }
                return !1
            }

            function ce(t) {
                return s(t) ? [bt(t)] : Array.isArray(t) ? function t(e, n) {
                    var r = [];
                    var l, u, c, h;
                    for (l = 0; l < e.length; l++) i(u = e[l]) || "boolean" == typeof u || (c = r.length - 1, h = r[c], Array.isArray(u) ? u.length > 0 && (he((u = t(u, (n || "") + "_" + l))[0]) && he(h) && (r[c] = bt(h.text + u[0].text), u.shift()), r.push.apply(r, u)) : s(u) ? he(h) ? r[c] = bt(h.text + u) : "" !== u && r.push(bt(u)) : he(u) && he(h) ? r[c] = bt(h.text + u.text) : (o(e._isVList) && a(u.tag) && i(u.key) && a(n) && (u.key = "__vlist" + n + "_" + l + "__"), r.push(u)));
                    return r
                }(t) : void 0
            }

            function he(t) {
                return a(t) && a(t.text) && !1 === t.isComment
            }

            function pe(t, e) {
                if (t) {
                    for (var n = Object.create(null), r = ut ? Reflect.ownKeys(t) : Object.keys(t), i = 0; i < r.length; i++) {
                        var a = r[i];
                        if ("__ob__" !== a) {
                            for (var o = t[a].from, s = e; s;) {
                                if (s._provided && C(s._provided, o)) {
                                    n[a] = s._provided[o];
                                    break
                                }
                                s = s.$parent
                            }
                            if (!s)
                                if ("default" in t[a]) {
                                    var l = t[a].default;
                                    n[a] = "function" == typeof l ? l.call(e) : l
                                } else 0
                        }
                    }
                    return n
                }
            }

            function fe(t, e) {
                if (!t || !t.length) return {};
                for (var n = {}, r = 0, i = t.length; r < i; r++) {
                    var a = t[r],
                        o = a.data;
                    if (o && o.attrs && o.attrs.slot && delete o.attrs.slot, a.context !== e && a.fnContext !== e || !o || null == o.slot)(n.default || (n.default = [])).push(a);
                    else {
                        var s = o.slot,
                            l = n[s] || (n[s] = []);
                        "template" === a.tag ? l.push.apply(l, a.children || []) : l.push(a)
                    }
                }
                for (var u in n) n[u].every(de) && delete n[u];
                return n
            }

            function de(t) {
                return t.isComment && !t.asyncFactory || " " === t.text
            }

            function me(t, e, n) {
                var i, a = Object.keys(e).length > 0,
                    o = t ? !!t.$stable : !a,
                    s = t && t.$key;
                if (t) {
                    if (t._normalized) return t._normalized;
                    if (o && n && n !== r && s === n.$key && !a && !n.$hasNormal) return n;
                    for (var l in i = {}, t) t[l] && "$" !== l[0] && (i[l] = ge(e, l, t[l]))
                } else i = {};
                for (var u in e) u in i || (i[u] = ve(e, u));
                return t && Object.isExtensible(t) && (t._normalized = i), W(i, "$stable", o), W(i, "$key", s), W(i, "$hasNormal", a), i
            }

            function ge(t, e, n) {
                var r = function() {
                    var t = arguments.length ? n.apply(null, arguments) : n({});
                    return (t = t && "object" == typeof t && !Array.isArray(t) ? [t] : ce(t)) && (0 === t.length || 1 === t.length && t[0].isComment) ? void 0 : t
                };
                return n.proxy && Object.defineProperty(t, e, {
                    get: r,
                    enumerable: !0,
                    configurable: !0
                }), r
            }

            function ve(t, e) {
                return function() {
                    return t[e]
                }
            }

            function ye(t, e) {
                var n, r, i, o, s;
                if (Array.isArray(t) || "string" == typeof t)
                    for (n = new Array(t.length), r = 0, i = t.length; r < i; r++) n[r] = e(t[r], r);
                else if ("number" == typeof t)
                    for (n = new Array(t), r = 0; r < t; r++) n[r] = e(r + 1, r);
                else if (l(t))
                    if (ut && t[Symbol.iterator]) {
                        n = [];
                        for (var u = t[Symbol.iterator](), c = u.next(); !c.done;) n.push(e(c.value, n.length)), c = u.next()
                    } else
                        for (o = Object.keys(t), n = new Array(o.length), r = 0, i = o.length; r < i; r++) s = o[r], n[r] = e(t[s], s, r);
                return a(n) || (n = []), n._isVList = !0, n
            }

            function be(t, e, n, r) {
                var i, a = this.$scopedSlots[t];
                a ? (n = n || {}, r && (n = N(N({}, r), n)), i = a(n) || e) : i = this.$slots[t] || e;
                var o = n && n.slot;
                return o ? this.$createElement("template", {
                    slot: o
                }, i) : i
            }

            function we(t) {
                return jt(this.$options, "filters", t) || F
            }

            function Ce(t, e) {
                return Array.isArray(t) ? -1 === t.indexOf(e) : t !== e
            }

            function _e(t, e, n, r, i) {
                var a = z.keyCodes[e] || n;
                return i && r && !z.keyCodes[e] ? Ce(i, r) : a ? Ce(a, t) : r ? O(r) !== e : void 0
            }

            function Se(t, e, n, r, i) {
                if (n)
                    if (l(n)) {
                        var a;
                        Array.isArray(n) && (n = I(n));
                        var o = function(o) {
                            if ("class" === o || "style" === o || y(o)) a = t;
                            else {
                                var s = t.attrs && t.attrs.type;
                                a = r || z.mustUseProp(e, s, o) ? t.domProps || (t.domProps = {}) : t.attrs || (t.attrs = {})
                            }
                            var l = x(o),
                                u = O(o);
                            l in a || u in a || (a[o] = n[o], i && ((t.on || (t.on = {}))["update:" + o] = function(t) {
                                n[o] = t
                            }))
                        };
                        for (var s in n) o(s)
                    } else;
                return t
            }

            function xe(t, e) {
                var n = this._staticTrees || (this._staticTrees = []),
                    r = n[t];
                return r && !e ? r : (Te(r = n[t] = this.$options.staticRenderFns[t].call(this._renderProxy, null, this), "__static__" + t, !1), r)
            }

            function ke(t, e, n) {
                return Te(t, "__once__" + e + (n ? "_" + n : ""), !0), t
            }

            function Te(t, e, n) {
                if (Array.isArray(t))
                    for (var r = 0; r < t.length; r++) t[r] && "string" != typeof t[r] && Oe(t[r], e + "_" + r, n);
                else Oe(t, e, n)
            }

            function Oe(t, e, n) {
                t.isStatic = !0, t.key = e, t.isOnce = n
            }

            function Ee(t, e) {
                if (e)
                    if (c(e)) {
                        var n = t.on = t.on ? N({}, t.on) : {};
                        for (var r in e) {
                            var i = n[r],
                                a = e[r];
                            n[r] = i ? [].concat(i, a) : a
                        }
                    } else;
                return t
            }

            function Ae(t, e, n, r) {
                e = e || {
                    $stable: !n
                };
                for (var i = 0; i < t.length; i++) {
                    var a = t[i];
                    Array.isArray(a) ? Ae(a, e, n) : a && (a.proxy && (a.fn.proxy = !0), e[a.key] = a.fn)
                }
                return r && (e.$key = r), e
            }

            function Ne(t, e) {
                for (var n = 0; n < e.length; n += 2) {
                    var r = e[n];
                    "string" == typeof r && r && (t[e[n]] = e[n + 1])
                }
                return t
            }

            function Ie(t, e) {
                return "string" == typeof t ? e + t : t
            }

            function Pe(t) {
                t._o = ke, t._n = m, t._s = d, t._l = ye, t._t = be, t._q = M, t._i = L, t._m = xe, t._f = we, t._k = _e, t._b = Se, t._v = bt, t._e = yt, t._u = Ae, t._g = Ee, t._d = Ne, t._p = Ie
            }

            function $e(t, e, n, i, a) {
                var s, l = this,
                    u = a.options;
                C(i, "_uid") ? (s = Object.create(i))._original = i : (s = i, i = i._original);
                var c = o(u._compiled),
                    h = !c;
                this.data = t, this.props = e, this.children = n, this.parent = i, this.listeners = t.on || r, this.injections = pe(u.inject, i), this.slots = function() {
                    return l.$slots || me(t.scopedSlots, l.$slots = fe(n, i)), l.$slots
                }, Object.defineProperty(this, "scopedSlots", {
                    enumerable: !0,
                    get: function() {
                        return me(t.scopedSlots, this.slots())
                    }
                }), c && (this.$options = u, this.$slots = this.slots(), this.$scopedSlots = me(t.scopedSlots, this.$slots)), u._scopeId ? this._c = function(t, e, n, r) {
                    var a = Be(s, t, e, n, r, h);
                    return a && !Array.isArray(a) && (a.fnScopeId = u._scopeId, a.fnContext = i), a
                } : this._c = function(t, e, n, r) {
                    return Be(s, t, e, n, r, h)
                }
            }

            function Fe(t, e, n, r, i) {
                var a = wt(t);
                return a.fnContext = n, a.fnOptions = r, e.slot && ((a.data || (a.data = {})).slot = e.slot), a
            }

            function Me(t, e) {
                for (var n in e) t[x(n)] = e[n]
            }
            Pe($e.prototype);
            var Le = {
                    init: function(t, e) {
                        if (t.componentInstance && !t.componentInstance._isDestroyed && t.data.keepAlive) {
                            var n = t;
                            Le.prepatch(n, n)
                        } else {
                            (t.componentInstance = function(t, e) {
                                var n = {
                                        _isComponent: !0,
                                        _parentVnode: t,
                                        parent: e
                                    },
                                    r = t.data.inlineTemplate;
                                a(r) && (n.render = r.render, n.staticRenderFns = r.staticRenderFns);
                                return new t.componentOptions.Ctor(n)
                            }(t, Ye)).$mount(e ? t.elm : void 0, e)
                        }
                    },
                    prepatch: function(t, e) {
                        var n = e.componentOptions;
                        ! function(t, e, n, i, a) {
                            0;
                            var o = i.data.scopedSlots,
                                s = t.$scopedSlots,
                                l = !!(o && !o.$stable || s !== r && !s.$stable || o && t.$scopedSlots.$key !== o.$key),
                                u = !!(a || t.$options._renderChildren || l);
                            t.$options._parentVnode = i, t.$vnode = i, t._vnode && (t._vnode.parent = i);
                            if (t.$options._renderChildren = a, t.$attrs = i.data.attrs || r, t.$listeners = n || r, e && t.$options.props) {
                                kt(!1);
                                for (var c = t._props, h = t.$options._propKeys || [], p = 0; p < h.length; p++) {
                                    var f = h[p],
                                        d = t.$options.props;
                                    c[f] = Vt(f, d, e, t)
                                }
                                kt(!0), t.$options.propsData = e
                            }
                            n = n || r;
                            var m = t.$options._parentListeners;
                            t.$options._parentListeners = n, Xe(t, n, m), u && (t.$slots = fe(a, i.context), t.$forceUpdate());
                            0
                        }(e.componentInstance = t.componentInstance, n.propsData, n.listeners, e, n.children)
                    },
                    insert: function(t) {
                        var e, n = t.context,
                            r = t.componentInstance;
                        r._isMounted || (r._isMounted = !0, nn(r, "mounted")), t.data.keepAlive && (n._isMounted ? ((e = r)._inactive = !1, an.push(e)) : en(r, !0))
                    },
                    destroy: function(t) {
                        var e = t.componentInstance;
                        e._isDestroyed || (t.data.keepAlive ? function t(e, n) {
                            if (n && (e._directInactive = !0, tn(e))) return;
                            if (!e._inactive) {
                                e._inactive = !0;
                                for (var r = 0; r < e.$children.length; r++) t(e.$children[r]);
                                nn(e, "deactivated")
                            }
                        }(e, !0) : e.$destroy())
                    }
                },
                De = Object.keys(Le);

            function je(t, e, n, s, u) {
                if (!i(t)) {
                    var c = n.$options._base;
                    if (l(t) && (t = c.extend(t)), "function" == typeof t) {
                        var h;
                        if (i(t.cid) && void 0 === (t = function(t, e) {
                                if (o(t.error) && a(t.errorComp)) return t.errorComp;
                                if (a(t.resolved)) return t.resolved;
                                var n = Ge;
                                n && a(t.owners) && -1 === t.owners.indexOf(n) && t.owners.push(n);
                                if (o(t.loading) && a(t.loadingComp)) return t.loadingComp;
                                if (n && !a(t.owners)) {
                                    var r = t.owners = [n],
                                        s = !0,
                                        u = null,
                                        c = null;
                                    n.$on("hook:destroyed", function() {
                                        return b(r, n)
                                    });
                                    var h = function(t) {
                                            for (var e = 0, n = r.length; e < n; e++) r[e].$forceUpdate();
                                            t && (r.length = 0, null !== u && (clearTimeout(u), u = null), null !== c && (clearTimeout(c), c = null))
                                        },
                                        p = D(function(n) {
                                            t.resolved = qe(n, e), s ? r.length = 0 : h(!0)
                                        }),
                                        d = D(function(e) {
                                            a(t.errorComp) && (t.error = !0, h(!0))
                                        }),
                                        m = t(p, d);
                                    return l(m) && (f(m) ? i(t.resolved) && m.then(p, d) : f(m.component) && (m.component.then(p, d), a(m.error) && (t.errorComp = qe(m.error, e)), a(m.loading) && (t.loadingComp = qe(m.loading, e), 0 === m.delay ? t.loading = !0 : u = setTimeout(function() {
                                        u = null, i(t.resolved) && i(t.error) && (t.loading = !0, h(!1))
                                    }, m.delay || 200)), a(m.timeout) && (c = setTimeout(function() {
                                        c = null, i(t.resolved) && d(null)
                                    }, m.timeout)))), s = !1, t.loading ? t.loadingComp : t.resolved
                                }
                            }(h = t, c))) return function(t, e, n, r, i) {
                            var a = yt();
                            return a.asyncFactory = t, a.asyncMeta = {
                                data: e,
                                context: n,
                                children: r,
                                tag: i
                            }, a
                        }(h, e, n, s, u);
                        e = e || {}, kn(t), a(e.model) && function(t, e) {
                            var n = t.model && t.model.prop || "value",
                                r = t.model && t.model.event || "input";
                            (e.attrs || (e.attrs = {}))[n] = e.model.value;
                            var i = e.on || (e.on = {}),
                                o = i[r],
                                s = e.model.callback;
                            a(o) ? (Array.isArray(o) ? -1 === o.indexOf(s) : o !== s) && (i[r] = [s].concat(o)) : i[r] = s
                        }(t.options, e);
                        var p = function(t, e, n) {
                            var r = e.options.props;
                            if (!i(r)) {
                                var o = {},
                                    s = t.attrs,
                                    l = t.props;
                                if (a(s) || a(l))
                                    for (var u in r) {
                                        var c = O(u);
                                        ue(o, l, u, c, !0) || ue(o, s, u, c, !1)
                                    }
                                return o
                            }
                        }(e, t);
                        if (o(t.options.functional)) return function(t, e, n, i, o) {
                            var s = t.options,
                                l = {},
                                u = s.props;
                            if (a(u))
                                for (var c in u) l[c] = Vt(c, u, e || r);
                            else a(n.attrs) && Me(l, n.attrs), a(n.props) && Me(l, n.props);
                            var h = new $e(n, l, o, i, t),
                                p = s.render.call(null, h._c, h);
                            if (p instanceof gt) return Fe(p, n, h.parent, s);
                            if (Array.isArray(p)) {
                                for (var f = ce(p) || [], d = new Array(f.length), m = 0; m < f.length; m++) d[m] = Fe(f[m], n, h.parent, s);
                                return d
                            }
                        }(t, p, e, n, s);
                        var d = e.on;
                        if (e.on = e.nativeOn, o(t.options.abstract)) {
                            var m = e.slot;
                            e = {}, m && (e.slot = m)
                        }! function(t) {
                            for (var e = t.hook || (t.hook = {}), n = 0; n < De.length; n++) {
                                var r = De[n],
                                    i = e[r],
                                    a = Le[r];
                                i === a || i && i._merged || (e[r] = i ? Ve(a, i) : a)
                            }
                        }(e);
                        var g = t.options.name || u;
                        return new gt("vue-component-" + t.cid + (g ? "-" + g : ""), e, void 0, void 0, void 0, n, {
                            Ctor: t,
                            propsData: p,
                            listeners: d,
                            tag: u,
                            children: s
                        }, h)
                    }
                }
            }

            function Ve(t, e) {
                var n = function(n, r) {
                    t(n, r), e(n, r)
                };
                return n._merged = !0, n
            }
            var Re = 1,
                ze = 2;

            function Be(t, e, n, r, u, c) {
                return (Array.isArray(n) || s(n)) && (u = r, r = n, n = void 0), o(c) && (u = ze),
                    function(t, e, n, r, s) {
                        if (a(n) && a(n.__ob__)) return yt();
                        a(n) && a(n.is) && (e = n.is);
                        if (!e) return yt();
                        0;
                        Array.isArray(r) && "function" == typeof r[0] && ((n = n || {}).scopedSlots = {
                            default: r[0]
                        }, r.length = 0);
                        s === ze ? r = ce(r) : s === Re && (r = function(t) {
                            for (var e = 0; e < t.length; e++)
                                if (Array.isArray(t[e])) return Array.prototype.concat.apply([], t);
                            return t
                        }(r));
                        var u, c;
                        if ("string" == typeof e) {
                            var h;
                            c = t.$vnode && t.$vnode.ns || z.getTagNamespace(e), u = z.isReservedTag(e) ? new gt(z.parsePlatformTagName(e), n, r, void 0, void 0, t) : n && n.pre || !a(h = jt(t.$options, "components", e)) ? new gt(e, n, r, void 0, void 0, t) : je(h, n, t, r, e)
                        } else u = je(e, n, t, r);
                        return Array.isArray(u) ? u : a(u) ? (a(c) && function t(e, n, r) {
                            e.ns = n;
                            "foreignObject" === e.tag && (n = void 0, r = !0);
                            if (a(e.children))
                                for (var s = 0, l = e.children.length; s < l; s++) {
                                    var u = e.children[s];
                                    a(u.tag) && (i(u.ns) || o(r) && "svg" !== u.tag) && t(u, n, r)
                                }
                        }(u, c), a(n) && function(t) {
                            l(t.style) && ie(t.style);
                            l(t.class) && ie(t.class)
                        }(n), u) : yt()
                    }(t, e, n, r, u)
            }
            var We, Ge = null;

            function qe(t, e) {
                return (t.__esModule || ut && "Module" === t[Symbol.toStringTag]) && (t = t.default), l(t) ? e.extend(t) : t
            }

            function Ue(t) {
                return t.isComment && t.asyncFactory
            }

            function He(t) {
                if (Array.isArray(t))
                    for (var e = 0; e < t.length; e++) {
                        var n = t[e];
                        if (a(n) && (a(n.componentOptions) || Ue(n))) return n
                    }
            }

            function Je(t, e) {
                We.$on(t, e)
            }

            function Ke(t, e) {
                We.$off(t, e)
            }

            function Ze(t, e) {
                var n = We;
                return function r() {
                    null !== e.apply(null, arguments) && n.$off(t, r)
                }
            }

            function Xe(t, e, n) {
                We = t, se(e, n || {}, Je, Ke, Ze, t), We = void 0
            }
            var Ye = null;

            function Qe(t) {
                var e = Ye;
                return Ye = t,
                    function() {
                        Ye = e
                    }
            }

            function tn(t) {
                for (; t && (t = t.$parent);)
                    if (t._inactive) return !0;
                return !1
            }

            function en(t, e) {
                if (e) {
                    if (t._directInactive = !1, tn(t)) return
                } else if (t._directInactive) return;
                if (t._inactive || null === t._inactive) {
                    t._inactive = !1;
                    for (var n = 0; n < t.$children.length; n++) en(t.$children[n]);
                    nn(t, "activated")
                }
            }

            function nn(t, e) {
                dt();
                var n = t.$options[e],
                    r = e + " hook";
                if (n)
                    for (var i = 0, a = n.length; i < a; i++) Gt(n[i], t, null, t, r);
                t._hasHookEvent && t.$emit("hook:" + e), mt()
            }
            var rn = [],
                an = [],
                on = {},
                sn = !1,
                ln = !1,
                un = 0;
            var cn = 0,
                hn = Date.now;
            if (H && !X) {
                var pn = window.performance;
                pn && "function" == typeof pn.now && hn() > document.createEvent("Event").timeStamp && (hn = function() {
                    return pn.now()
                })
            }

            function fn() {
                var t, e;
                for (cn = hn(), ln = !0, rn.sort(function(t, e) {
                    return t.id - e.id
                }), un = 0; un < rn.length; un++)(t = rn[un]).before && t.before(), e = t.id, on[e] = null, t.run();
                var n = an.slice(),
                    r = rn.slice();
                un = rn.length = an.length = 0, on = {}, sn = ln = !1,
                    function(t) {
                        for (var e = 0; e < t.length; e++) t[e]._inactive = !0, en(t[e], !0)
                    }(n),
                    function(t) {
                        var e = t.length;
                        for (; e--;) {
                            var n = t[e],
                                r = n.vm;
                            r._watcher === n && r._isMounted && !r._isDestroyed && nn(r, "updated")
                        }
                    }(r), ot && z.devtools && ot.emit("flush")
            }
            var dn = 0,
                mn = function(t, e, n, r, i) {
                    this.vm = t, i && (t._watcher = this), t._watchers.push(this), r ? (this.deep = !!r.deep, this.user = !!r.user, this.lazy = !!r.lazy, this.sync = !!r.sync, this.before = r.before) : this.deep = this.user = this.lazy = this.sync = !1, this.cb = n, this.id = ++dn, this.active = !0, this.dirty = this.lazy, this.deps = [], this.newDeps = [], this.depIds = new lt, this.newDepIds = new lt, this.expression = "", "function" == typeof e ? this.getter = e : (this.getter = function(t) {
                        if (!G.test(t)) {
                            var e = t.split(".");
                            return function(t) {
                                for (var n = 0; n < e.length; n++) {
                                    if (!t) return;
                                    t = t[e[n]]
                                }
                                return t
                            }
                        }
                    }(e), this.getter || (this.getter = P)), this.value = this.lazy ? void 0 : this.get()
                };
            mn.prototype.get = function() {
                var t;
                dt(this);
                var e = this.vm;
                try {
                    t = this.getter.call(e, e)
                } catch (t) {
                    if (!this.user) throw t;
                    Wt(t, e, 'getter for watcher "' + this.expression + '"')
                } finally {
                    this.deep && ie(t), mt(), this.cleanupDeps()
                }
                return t
            }, mn.prototype.addDep = function(t) {
                var e = t.id;
                this.newDepIds.has(e) || (this.newDepIds.add(e), this.newDeps.push(t), this.depIds.has(e) || t.addSub(this))
            }, mn.prototype.cleanupDeps = function() {
                for (var t = this.deps.length; t--;) {
                    var e = this.deps[t];
                    this.newDepIds.has(e.id) || e.removeSub(this)
                }
                var n = this.depIds;
                this.depIds = this.newDepIds, this.newDepIds = n, this.newDepIds.clear(), n = this.deps, this.deps = this.newDeps, this.newDeps = n, this.newDeps.length = 0
            }, mn.prototype.update = function() {
                this.lazy ? this.dirty = !0 : this.sync ? this.run() : function(t) {
                    var e = t.id;
                    if (null == on[e]) {
                        if (on[e] = !0, ln) {
                            for (var n = rn.length - 1; n > un && rn[n].id > t.id;) n--;
                            rn.splice(n + 1, 0, t)
                        } else rn.push(t);
                        sn || (sn = !0, ne(fn))
                    }
                }(this)
            }, mn.prototype.run = function() {
                if (this.active) {
                    var t = this.get();
                    if (t !== this.value || l(t) || this.deep) {
                        var e = this.value;
                        if (this.value = t, this.user) try {
                            this.cb.call(this.vm, t, e)
                        } catch (t) {
                            Wt(t, this.vm, 'callback for watcher "' + this.expression + '"')
                        } else this.cb.call(this.vm, t, e)
                    }
                }
            }, mn.prototype.evaluate = function() {
                this.value = this.get(), this.dirty = !1
            }, mn.prototype.depend = function() {
                for (var t = this.deps.length; t--;) this.deps[t].depend()
            }, mn.prototype.teardown = function() {
                if (this.active) {
                    this.vm._isBeingDestroyed || b(this.vm._watchers, this);
                    for (var t = this.deps.length; t--;) this.deps[t].removeSub(this);
                    this.active = !1
                }
            };
            var gn = {
                enumerable: !0,
                configurable: !0,
                get: P,
                set: P
            };

            function vn(t, e, n) {
                gn.get = function() {
                    return this[e][n]
                }, gn.set = function(t) {
                    this[e][n] = t
                }, Object.defineProperty(t, n, gn)
            }

            function yn(t) {
                t._watchers = [];
                var e = t.$options;
                e.props && function(t, e) {
                    var n = t.$options.propsData || {},
                        r = t._props = {},
                        i = t.$options._propKeys = [];
                    t.$parent && kt(!1);
                    var a = function(a) {
                        i.push(a);
                        var o = Vt(a, e, n, t);
                        Et(r, a, o), a in t || vn(t, "_props", a)
                    };
                    for (var o in e) a(o);
                    kt(!0)
                }(t, e.props), e.methods && function(t, e) {
                    t.$options.props;
                    for (var n in e) t[n] = "function" != typeof e[n] ? P : E(e[n], t)
                }(t, e.methods), e.data ? function(t) {
                    var e = t.$options.data;
                    c(e = t._data = "function" == typeof e ? function(t, e) {
                        dt();
                        try {
                            return t.call(e, e)
                        } catch (t) {
                            return Wt(t, e, "data()"), {}
                        } finally {
                            mt()
                        }
                    }(e, t) : e || {}) || (e = {});
                    var n = Object.keys(e),
                        r = t.$options.props,
                        i = (t.$options.methods, n.length);
                    for (; i--;) {
                        var a = n[i];
                        0, r && C(r, a) || (o = void 0, 36 !== (o = (a + "").charCodeAt(0)) && 95 !== o && vn(t, "_data", a))
                    }
                    var o;
                    Ot(e, !0)
                }(t) : Ot(t._data = {}, !0), e.computed && function(t, e) {
                    var n = t._computedWatchers = Object.create(null),
                        r = at();
                    for (var i in e) {
                        var a = e[i],
                            o = "function" == typeof a ? a : a.get;
                        0, r || (n[i] = new mn(t, o || P, P, bn)), i in t || wn(t, i, a)
                    }
                }(t, e.computed), e.watch && e.watch !== nt && function(t, e) {
                    for (var n in e) {
                        var r = e[n];
                        if (Array.isArray(r))
                            for (var i = 0; i < r.length; i++) Sn(t, n, r[i]);
                        else Sn(t, n, r)
                    }
                }(t, e.watch)
            }
            var bn = {
                lazy: !0
            };

            function wn(t, e, n) {
                var r = !at();
                "function" == typeof n ? (gn.get = r ? Cn(e) : _n(n), gn.set = P) : (gn.get = n.get ? r && !1 !== n.cache ? Cn(e) : _n(n.get) : P, gn.set = n.set || P), Object.defineProperty(t, e, gn)
            }

            function Cn(t) {
                return function() {
                    var e = this._computedWatchers && this._computedWatchers[t];
                    if (e) return e.dirty && e.evaluate(), pt.target && e.depend(), e.value
                }
            }

            function _n(t) {
                return function() {
                    return t.call(this, this)
                }
            }

            function Sn(t, e, n, r) {
                return c(n) && (r = n, n = n.handler), "string" == typeof n && (n = t[n]), t.$watch(e, n, r)
            }
            var xn = 0;

            function kn(t) {
                var e = t.options;
                if (t.super) {
                    var n = kn(t.super);
                    if (n !== t.superOptions) {
                        t.superOptions = n;
                        var r = function(t) {
                            var e, n = t.options,
                                r = t.sealedOptions;
                            for (var i in n) n[i] !== r[i] && (e || (e = {}), e[i] = n[i]);
                            return e
                        }(t);
                        r && N(t.extendOptions, r), (e = t.options = Dt(n, t.extendOptions)).name && (e.components[e.name] = t)
                    }
                }
                return e
            }

            function Tn(t) {
                this._init(t)
            }

            function On(t) {
                t.cid = 0;
                var e = 1;
                t.extend = function(t) {
                    t = t || {};
                    var n = this,
                        r = n.cid,
                        i = t._Ctor || (t._Ctor = {});
                    if (i[r]) return i[r];
                    var a = t.name || n.options.name;
                    var o = function(t) {
                        this._init(t)
                    };
                    return (o.prototype = Object.create(n.prototype)).constructor = o, o.cid = e++, o.options = Dt(n.options, t), o.super = n, o.options.props && function(t) {
                        var e = t.options.props;
                        for (var n in e) vn(t.prototype, "_props", n)
                    }(o), o.options.computed && function(t) {
                        var e = t.options.computed;
                        for (var n in e) wn(t.prototype, n, e[n])
                    }(o), o.extend = n.extend, o.mixin = n.mixin, o.use = n.use, V.forEach(function(t) {
                        o[t] = n[t]
                    }), a && (o.options.components[a] = o), o.superOptions = n.options, o.extendOptions = t, o.sealedOptions = N({}, o.options), i[r] = o, o
                }
            }

            function En(t) {
                return t && (t.Ctor.options.name || t.tag)
            }

            function An(t, e) {
                return Array.isArray(t) ? t.indexOf(e) > -1 : "string" == typeof t ? t.split(",").indexOf(e) > -1 : !!h(t) && t.test(e)
            }

            function Nn(t, e) {
                var n = t.cache,
                    r = t.keys,
                    i = t._vnode;
                for (var a in n) {
                    var o = n[a];
                    if (o) {
                        var s = En(o.componentOptions);
                        s && !e(s) && In(n, a, r, i)
                    }
                }
            }

            function In(t, e, n, r) {
                var i = t[e];
                !i || r && i.tag === r.tag || i.componentInstance.$destroy(), t[e] = null, b(n, e)
            }! function(t) {
                t.prototype._init = function(t) {
                    var e = this;
                    e._uid = xn++, e._isVue = !0, t && t._isComponent ? function(t, e) {
                        var n = t.$options = Object.create(t.constructor.options),
                            r = e._parentVnode;
                        n.parent = e.parent, n._parentVnode = r;
                        var i = r.componentOptions;
                        n.propsData = i.propsData, n._parentListeners = i.listeners, n._renderChildren = i.children, n._componentTag = i.tag, e.render && (n.render = e.render, n.staticRenderFns = e.staticRenderFns)
                    }(e, t) : e.$options = Dt(kn(e.constructor), t || {}, e), e._renderProxy = e, e._self = e,
                        function(t) {
                            var e = t.$options,
                                n = e.parent;
                            if (n && !e.abstract) {
                                for (; n.$options.abstract && n.$parent;) n = n.$parent;
                                n.$children.push(t)
                            }
                            t.$parent = n, t.$root = n ? n.$root : t, t.$children = [], t.$refs = {}, t._watcher = null, t._inactive = null, t._directInactive = !1, t._isMounted = !1, t._isDestroyed = !1, t._isBeingDestroyed = !1
                        }(e),
                        function(t) {
                            t._events = Object.create(null), t._hasHookEvent = !1;
                            var e = t.$options._parentListeners;
                            e && Xe(t, e)
                        }(e),
                        function(t) {
                            t._vnode = null, t._staticTrees = null;
                            var e = t.$options,
                                n = t.$vnode = e._parentVnode,
                                i = n && n.context;
                            t.$slots = fe(e._renderChildren, i), t.$scopedSlots = r, t._c = function(e, n, r, i) {
                                return Be(t, e, n, r, i, !1)
                            }, t.$createElement = function(e, n, r, i) {
                                return Be(t, e, n, r, i, !0)
                            };
                            var a = n && n.data;
                            Et(t, "$attrs", a && a.attrs || r, null, !0), Et(t, "$listeners", e._parentListeners || r, null, !0)
                        }(e), nn(e, "beforeCreate"),
                        function(t) {
                            var e = pe(t.$options.inject, t);
                            e && (kt(!1), Object.keys(e).forEach(function(n) {
                                Et(t, n, e[n])
                            }), kt(!0))
                        }(e), yn(e),
                        function(t) {
                            var e = t.$options.provide;
                            e && (t._provided = "function" == typeof e ? e.call(t) : e)
                        }(e), nn(e, "created"), e.$options.el && e.$mount(e.$options.el)
                }
            }(Tn),
                function(t) {
                    var e = {
                            get: function() {
                                return this._data
                            }
                        },
                        n = {
                            get: function() {
                                return this._props
                            }
                        };
                    Object.defineProperty(t.prototype, "$data", e), Object.defineProperty(t.prototype, "$props", n), t.prototype.$set = At, t.prototype.$delete = Nt, t.prototype.$watch = function(t, e, n) {
                        if (c(e)) return Sn(this, t, e, n);
                        (n = n || {}).user = !0;
                        var r = new mn(this, t, e, n);
                        if (n.immediate) try {
                            e.call(this, r.value)
                        } catch (t) {
                            Wt(t, this, 'callback for immediate watcher "' + r.expression + '"')
                        }
                        return function() {
                            r.teardown()
                        }
                    }
                }(Tn),
                function(t) {
                    var e = /^hook:/;
                    t.prototype.$on = function(t, n) {
                        var r = this;
                        if (Array.isArray(t))
                            for (var i = 0, a = t.length; i < a; i++) r.$on(t[i], n);
                        else(r._events[t] || (r._events[t] = [])).push(n), e.test(t) && (r._hasHookEvent = !0);
                        return r
                    }, t.prototype.$once = function(t, e) {
                        var n = this;

                        function r() {
                            n.$off(t, r), e.apply(n, arguments)
                        }
                        return r.fn = e, n.$on(t, r), n
                    }, t.prototype.$off = function(t, e) {
                        var n = this;
                        if (!arguments.length) return n._events = Object.create(null), n;
                        if (Array.isArray(t)) {
                            for (var r = 0, i = t.length; r < i; r++) n.$off(t[r], e);
                            return n
                        }
                        var a, o = n._events[t];
                        if (!o) return n;
                        if (!e) return n._events[t] = null, n;
                        for (var s = o.length; s--;)
                            if ((a = o[s]) === e || a.fn === e) {
                                o.splice(s, 1);
                                break
                            }
                        return n
                    }, t.prototype.$emit = function(t) {
                        var e = this._events[t];
                        if (e) {
                            e = e.length > 1 ? A(e) : e;
                            for (var n = A(arguments, 1), r = 'event handler for "' + t + '"', i = 0, a = e.length; i < a; i++) Gt(e[i], this, n, this, r)
                        }
                        return this
                    }
                }(Tn),
                function(t) {
                    t.prototype._update = function(t, e) {
                        var n = this,
                            r = n.$el,
                            i = n._vnode,
                            a = Qe(n);
                        n._vnode = t, n.$el = i ? n.__patch__(i, t) : n.__patch__(n.$el, t, e, !1), a(), r && (r.__vue__ = null), n.$el && (n.$el.__vue__ = n), n.$vnode && n.$parent && n.$vnode === n.$parent._vnode && (n.$parent.$el = n.$el)
                    }, t.prototype.$forceUpdate = function() {
                        this._watcher && this._watcher.update()
                    }, t.prototype.$destroy = function() {
                        var t = this;
                        if (!t._isBeingDestroyed) {
                            nn(t, "beforeDestroy"), t._isBeingDestroyed = !0;
                            var e = t.$parent;
                            !e || e._isBeingDestroyed || t.$options.abstract || b(e.$children, t), t._watcher && t._watcher.teardown();
                            for (var n = t._watchers.length; n--;) t._watchers[n].teardown();
                            t._data.__ob__ && t._data.__ob__.vmCount--, t._isDestroyed = !0, t.__patch__(t._vnode, null), nn(t, "destroyed"), t.$off(), t.$el && (t.$el.__vue__ = null), t.$vnode && (t.$vnode.parent = null)
                        }
                    }
                }(Tn),
                function(t) {
                    Pe(t.prototype), t.prototype.$nextTick = function(t) {
                        return ne(t, this)
                    }, t.prototype._render = function() {
                        var t, e = this,
                            n = e.$options,
                            r = n.render,
                            i = n._parentVnode;
                        i && (e.$scopedSlots = me(i.data.scopedSlots, e.$slots, e.$scopedSlots)), e.$vnode = i;
                        try {
                            Ge = e, t = r.call(e._renderProxy, e.$createElement)
                        } catch (n) {
                            Wt(n, e, "render"), t = e._vnode
                        } finally {
                            Ge = null
                        }
                        return Array.isArray(t) && 1 === t.length && (t = t[0]), t instanceof gt || (t = yt()), t.parent = i, t
                    }
                }(Tn);
            var Pn = [String, RegExp, Array],
                $n = {
                    KeepAlive: {
                        name: "keep-alive",
                        abstract: !0,
                        props: {
                            include: Pn,
                            exclude: Pn,
                            max: [String, Number]
                        },
                        created: function() {
                            this.cache = Object.create(null), this.keys = []
                        },
                        destroyed: function() {
                            for (var t in this.cache) In(this.cache, t, this.keys)
                        },
                        mounted: function() {
                            var t = this;
                            this.$watch("include", function(e) {
                                Nn(t, function(t) {
                                    return An(e, t)
                                })
                            }), this.$watch("exclude", function(e) {
                                Nn(t, function(t) {
                                    return !An(e, t)
                                })
                            })
                        },
                        render: function() {
                            var t = this.$slots.default,
                                e = He(t),
                                n = e && e.componentOptions;
                            if (n) {
                                var r = En(n),
                                    i = this.include,
                                    a = this.exclude;
                                if (i && (!r || !An(i, r)) || a && r && An(a, r)) return e;
                                var o = this.cache,
                                    s = this.keys,
                                    l = null == e.key ? n.Ctor.cid + (n.tag ? "::" + n.tag : "") : e.key;
                                o[l] ? (e.componentInstance = o[l].componentInstance, b(s, l), s.push(l)) : (o[l] = e, s.push(l), this.max && s.length > parseInt(this.max) && In(o, s[0], s, this._vnode)), e.data.keepAlive = !0
                            }
                            return e || t && t[0]
                        }
                    }
                };
            ! function(t) {
                var e = {
                    get: function() {
                        return z
                    }
                };
                Object.defineProperty(t, "config", e), t.util = {
                    warn: ct,
                    extend: N,
                    mergeOptions: Dt,
                    defineReactive: Et
                }, t.set = At, t.delete = Nt, t.nextTick = ne, t.observable = function(t) {
                    return Ot(t), t
                }, t.options = Object.create(null), V.forEach(function(e) {
                    t.options[e + "s"] = Object.create(null)
                }), t.options._base = t, N(t.options.components, $n),
                    function(t) {
                        t.use = function(t) {
                            var e = this._installedPlugins || (this._installedPlugins = []);
                            if (e.indexOf(t) > -1) return this;
                            var n = A(arguments, 1);
                            return n.unshift(this), "function" == typeof t.install ? t.install.apply(t, n) : "function" == typeof t && t.apply(null, n), e.push(t), this
                        }
                    }(t),
                    function(t) {
                        t.mixin = function(t) {
                            return this.options = Dt(this.options, t), this
                        }
                    }(t), On(t),
                    function(t) {
                        V.forEach(function(e) {
                            t[e] = function(t, n) {
                                return n ? ("component" === e && c(n) && (n.name = n.name || t, n = this.options._base.extend(n)), "directive" === e && "function" == typeof n && (n = {
                                    bind: n,
                                    update: n
                                }), this.options[e + "s"][t] = n, n) : this.options[e + "s"][t]
                            }
                        })
                    }(t)
            }(Tn), Object.defineProperty(Tn.prototype, "$isServer", {
                get: at
            }), Object.defineProperty(Tn.prototype, "$ssrContext", {
                get: function() {
                    return this.$vnode && this.$vnode.ssrContext
                }
            }), Object.defineProperty(Tn, "FunctionalRenderContext", {
                value: $e
            }), Tn.version = "2.6.10";
            var Fn = g("style,class"),
                Mn = g("input,textarea,option,select,progress"),
                Ln = function(t, e, n) {
                    return "value" === n && Mn(t) && "button" !== e || "selected" === n && "option" === t || "checked" === n && "input" === t || "muted" === n && "video" === t
                },
                Dn = g("contenteditable,draggable,spellcheck"),
                jn = g("events,caret,typing,plaintext-only"),
                Vn = function(t, e) {
                    return Gn(e) || "false" === e ? "false" : "contenteditable" === t && jn(e) ? e : "true"
                },
                Rn = g("allowfullscreen,async,autofocus,autoplay,checked,compact,controls,declare,default,defaultchecked,defaultmuted,defaultselected,defer,disabled,enabled,formnovalidate,hidden,indeterminate,inert,ismap,itemscope,loop,multiple,muted,nohref,noresize,noshade,novalidate,nowrap,open,pauseonexit,readonly,required,reversed,scoped,seamless,selected,sortable,translate,truespeed,typemustmatch,visible"),
                zn = "http://www.w3.org/1999/xlink",
                Bn = function(t) {
                    return ":" === t.charAt(5) && "xlink" === t.slice(0, 5)
                },
                Wn = function(t) {
                    return Bn(t) ? t.slice(6, t.length) : ""
                },
                Gn = function(t) {
                    return null == t || !1 === t
                };

            function qn(t) {
                for (var e = t.data, n = t, r = t; a(r.componentInstance);)(r = r.componentInstance._vnode) && r.data && (e = Un(r.data, e));
                for (; a(n = n.parent);) n && n.data && (e = Un(e, n.data));
                return function(t, e) {
                    if (a(t) || a(e)) return Hn(t, Jn(e));
                    return ""
                }(e.staticClass, e.class)
            }

            function Un(t, e) {
                return {
                    staticClass: Hn(t.staticClass, e.staticClass),
                    class: a(t.class) ? [t.class, e.class] : e.class
                }
            }

            function Hn(t, e) {
                return t ? e ? t + " " + e : t : e || ""
            }

            function Jn(t) {
                return Array.isArray(t) ? function(t) {
                    for (var e, n = "", r = 0, i = t.length; r < i; r++) a(e = Jn(t[r])) && "" !== e && (n && (n += " "), n += e);
                    return n
                }(t) : l(t) ? function(t) {
                    var e = "";
                    for (var n in t) t[n] && (e && (e += " "), e += n);
                    return e
                }(t) : "string" == typeof t ? t : ""
            }
            var Kn = {
                    svg: "http://www.w3.org/2000/svg",
                    math: "http://www.w3.org/1998/Math/MathML"
                },
                Zn = g("html,body,base,head,link,meta,style,title,address,article,aside,footer,header,h1,h2,h3,h4,h5,h6,hgroup,nav,section,div,dd,dl,dt,figcaption,figure,picture,hr,img,li,main,ol,p,pre,ul,a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,rtc,ruby,s,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,embed,object,param,source,canvas,script,noscript,del,ins,caption,col,colgroup,table,thead,tbody,td,th,tr,button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,output,progress,select,textarea,details,dialog,menu,menuitem,summary,content,element,shadow,template,blockquote,iframe,tfoot"),
                Xn = g("svg,animate,circle,clippath,cursor,defs,desc,ellipse,filter,font-face,foreignObject,g,glyph,image,line,marker,mask,missing-glyph,path,pattern,polygon,polyline,rect,switch,symbol,text,textpath,tspan,use,view", !0),
                Yn = function(t) {
                    return Zn(t) || Xn(t)
                };

            function Qn(t) {
                return Xn(t) ? "svg" : "math" === t ? "math" : void 0
            }
            var tr = Object.create(null);
            var er = g("text,number,password,search,email,tel,url");

            function nr(t) {
                if ("string" == typeof t) {
                    var e = document.querySelector(t);
                    return e || document.createElement("div")
                }
                return t
            }
            var rr = Object.freeze({
                    createElement: function(t, e) {
                        var n = document.createElement(t);
                        return "select" !== t ? n : (e.data && e.data.attrs && void 0 !== e.data.attrs.multiple && n.setAttribute("multiple", "multiple"), n)
                    },
                    createElementNS: function(t, e) {
                        return document.createElementNS(Kn[t], e)
                    },
                    createTextNode: function(t) {
                        return document.createTextNode(t)
                    },
                    createComment: function(t) {
                        return document.createComment(t)
                    },
                    insertBefore: function(t, e, n) {
                        t.insertBefore(e, n)
                    },
                    removeChild: function(t, e) {
                        t.removeChild(e)
                    },
                    appendChild: function(t, e) {
                        t.appendChild(e)
                    },
                    parentNode: function(t) {
                        return t.parentNode
                    },
                    nextSibling: function(t) {
                        return t.nextSibling
                    },
                    tagName: function(t) {
                        return t.tagName
                    },
                    setTextContent: function(t, e) {
                        t.textContent = e
                    },
                    setStyleScope: function(t, e) {
                        t.setAttribute(e, "")
                    }
                }),
                ir = {
                    create: function(t, e) {
                        ar(e)
                    },
                    update: function(t, e) {
                        t.data.ref !== e.data.ref && (ar(t, !0), ar(e))
                    },
                    destroy: function(t) {
                        ar(t, !0)
                    }
                };

            function ar(t, e) {
                var n = t.data.ref;
                if (a(n)) {
                    var r = t.context,
                        i = t.componentInstance || t.elm,
                        o = r.$refs;
                    e ? Array.isArray(o[n]) ? b(o[n], i) : o[n] === i && (o[n] = void 0) : t.data.refInFor ? Array.isArray(o[n]) ? o[n].indexOf(i) < 0 && o[n].push(i) : o[n] = [i] : o[n] = i
                }
            }
            var or = new gt("", {}, []),
                sr = ["create", "activate", "update", "remove", "destroy"];

            function lr(t, e) {
                return t.key === e.key && (t.tag === e.tag && t.isComment === e.isComment && a(t.data) === a(e.data) && function(t, e) {
                    if ("input" !== t.tag) return !0;
                    var n, r = a(n = t.data) && a(n = n.attrs) && n.type,
                        i = a(n = e.data) && a(n = n.attrs) && n.type;
                    return r === i || er(r) && er(i)
                }(t, e) || o(t.isAsyncPlaceholder) && t.asyncFactory === e.asyncFactory && i(e.asyncFactory.error))
            }

            function ur(t, e, n) {
                var r, i, o = {};
                for (r = e; r <= n; ++r) a(i = t[r].key) && (o[i] = r);
                return o
            }
            var cr = {
                create: hr,
                update: hr,
                destroy: function(t) {
                    hr(t, or)
                }
            };

            function hr(t, e) {
                (t.data.directives || e.data.directives) && function(t, e) {
                    var n, r, i, a = t === or,
                        o = e === or,
                        s = fr(t.data.directives, t.context),
                        l = fr(e.data.directives, e.context),
                        u = [],
                        c = [];
                    for (n in l) r = s[n], i = l[n], r ? (i.oldValue = r.value, i.oldArg = r.arg, mr(i, "update", e, t), i.def && i.def.componentUpdated && c.push(i)) : (mr(i, "bind", e, t), i.def && i.def.inserted && u.push(i));
                    if (u.length) {
                        var h = function() {
                            for (var n = 0; n < u.length; n++) mr(u[n], "inserted", e, t)
                        };
                        a ? le(e, "insert", h) : h()
                    }
                    c.length && le(e, "postpatch", function() {
                        for (var n = 0; n < c.length; n++) mr(c[n], "componentUpdated", e, t)
                    });
                    if (!a)
                        for (n in s) l[n] || mr(s[n], "unbind", t, t, o)
                }(t, e)
            }
            var pr = Object.create(null);

            function fr(t, e) {
                var n, r, i = Object.create(null);
                if (!t) return i;
                for (n = 0; n < t.length; n++)(r = t[n]).modifiers || (r.modifiers = pr), i[dr(r)] = r, r.def = jt(e.$options, "directives", r.name);
                return i
            }

            function dr(t) {
                return t.rawName || t.name + "." + Object.keys(t.modifiers || {}).join(".")
            }

            function mr(t, e, n, r, i) {
                var a = t.def && t.def[e];
                if (a) try {
                    a(n.elm, t, n, r, i)
                } catch (r) {
                    Wt(r, n.context, "directive " + t.name + " " + e + " hook")
                }
            }
            var gr = [ir, cr];

            function vr(t, e) {
                var n = e.componentOptions;
                if (!(a(n) && !1 === n.Ctor.options.inheritAttrs || i(t.data.attrs) && i(e.data.attrs))) {
                    var r, o, s = e.elm,
                        l = t.data.attrs || {},
                        u = e.data.attrs || {};
                    for (r in a(u.__ob__) && (u = e.data.attrs = N({}, u)), u) o = u[r], l[r] !== o && yr(s, r, o);
                    for (r in (X || Q) && u.value !== l.value && yr(s, "value", u.value), l) i(u[r]) && (Bn(r) ? s.removeAttributeNS(zn, Wn(r)) : Dn(r) || s.removeAttribute(r))
                }
            }

            function yr(t, e, n) {
                t.tagName.indexOf("-") > -1 ? br(t, e, n) : Rn(e) ? Gn(n) ? t.removeAttribute(e) : (n = "allowfullscreen" === e && "EMBED" === t.tagName ? "true" : e, t.setAttribute(e, n)) : Dn(e) ? t.setAttribute(e, Vn(e, n)) : Bn(e) ? Gn(n) ? t.removeAttributeNS(zn, Wn(e)) : t.setAttributeNS(zn, e, n) : br(t, e, n)
            }

            function br(t, e, n) {
                if (Gn(n)) t.removeAttribute(e);
                else {
                    if (X && !Y && "TEXTAREA" === t.tagName && "placeholder" === e && "" !== n && !t.__ieph) {
                        var r = function(e) {
                            e.stopImmediatePropagation(), t.removeEventListener("input", r)
                        };
                        t.addEventListener("input", r), t.__ieph = !0
                    }
                    t.setAttribute(e, n)
                }
            }
            var wr = {
                create: vr,
                update: vr
            };

            function Cr(t, e) {
                var n = e.elm,
                    r = e.data,
                    o = t.data;
                if (!(i(r.staticClass) && i(r.class) && (i(o) || i(o.staticClass) && i(o.class)))) {
                    var s = qn(e),
                        l = n._transitionClasses;
                    a(l) && (s = Hn(s, Jn(l))), s !== n._prevClass && (n.setAttribute("class", s), n._prevClass = s)
                }
            }
            var _r, Sr, xr, kr, Tr, Or, Er = {
                    create: Cr,
                    update: Cr
                },
                Ar = /[\w).+\-_$\]]/;

            function Nr(t) {
                var e, n, r, i, a, o = !1,
                    s = !1,
                    l = !1,
                    u = !1,
                    c = 0,
                    h = 0,
                    p = 0,
                    f = 0;
                for (r = 0; r < t.length; r++)
                    if (n = e, e = t.charCodeAt(r), o) 39 === e && 92 !== n && (o = !1);
                    else if (s) 34 === e && 92 !== n && (s = !1);
                    else if (l) 96 === e && 92 !== n && (l = !1);
                    else if (u) 47 === e && 92 !== n && (u = !1);
                    else if (124 !== e || 124 === t.charCodeAt(r + 1) || 124 === t.charCodeAt(r - 1) || c || h || p) {
                        switch (e) {
                            case 34:
                                s = !0;
                                break;
                            case 39:
                                o = !0;
                                break;
                            case 96:
                                l = !0;
                                break;
                            case 40:
                                p++;
                                break;
                            case 41:
                                p--;
                                break;
                            case 91:
                                h++;
                                break;
                            case 93:
                                h--;
                                break;
                            case 123:
                                c++;
                                break;
                            case 125:
                                c--
                        }
                        if (47 === e) {
                            for (var d = r - 1, m = void 0; d >= 0 && " " === (m = t.charAt(d)); d--);
                            m && Ar.test(m) || (u = !0)
                        }
                    } else void 0 === i ? (f = r + 1, i = t.slice(0, r).trim()) : g();

                function g() {
                    (a || (a = [])).push(t.slice(f, r).trim()), f = r + 1
                }
                if (void 0 === i ? i = t.slice(0, r).trim() : 0 !== f && g(), a)
                    for (r = 0; r < a.length; r++) i = Ir(i, a[r]);
                return i
            }

            function Ir(t, e) {
                var n = e.indexOf("(");
                if (n < 0) return '_f("' + e + '")(' + t + ")";
                var r = e.slice(0, n),
                    i = e.slice(n + 1);
                return '_f("' + r + '")(' + t + (")" !== i ? "," + i : i)
            }

            function Pr(t, e) {
                console.error("[Vue compiler]: " + t)
            }

            function $r(t, e) {
                return t ? t.map(function(t) {
                    return t[e]
                }).filter(function(t) {
                    return t
                }) : []
            }

            function Fr(t, e, n, r, i) {
                (t.props || (t.props = [])).push(Wr({
                    name: e,
                    value: n,
                    dynamic: i
                }, r)), t.plain = !1
            }

            function Mr(t, e, n, r, i) {
                (i ? t.dynamicAttrs || (t.dynamicAttrs = []) : t.attrs || (t.attrs = [])).push(Wr({
                    name: e,
                    value: n,
                    dynamic: i
                }, r)), t.plain = !1
            }

            function Lr(t, e, n, r) {
                t.attrsMap[e] = n, t.attrsList.push(Wr({
                    name: e,
                    value: n
                }, r))
            }

            function Dr(t, e, n, r, i, a, o, s) {
                (t.directives || (t.directives = [])).push(Wr({
                    name: e,
                    rawName: n,
                    value: r,
                    arg: i,
                    isDynamicArg: a,
                    modifiers: o
                }, s)), t.plain = !1
            }

            function jr(t, e, n) {
                return n ? "_p(" + e + ',"' + t + '")' : t + e
            }

            function Vr(t, e, n, i, a, o, s, l) {
                var u;
                (i = i || r).right ? l ? e = "(" + e + ")==='click'?'contextmenu':(" + e + ")" : "click" === e && (e = "contextmenu", delete i.right) : i.middle && (l ? e = "(" + e + ")==='click'?'mouseup':(" + e + ")" : "click" === e && (e = "mouseup")), i.capture && (delete i.capture, e = jr("!", e, l)), i.once && (delete i.once, e = jr("~", e, l)), i.passive && (delete i.passive, e = jr("&", e, l)), i.native ? (delete i.native, u = t.nativeEvents || (t.nativeEvents = {})) : u = t.events || (t.events = {});
                var c = Wr({
                    value: n.trim(),
                    dynamic: l
                }, s);
                i !== r && (c.modifiers = i);
                var h = u[e];
                Array.isArray(h) ? a ? h.unshift(c) : h.push(c) : u[e] = h ? a ? [c, h] : [h, c] : c, t.plain = !1
            }

            function Rr(t, e, n) {
                var r = zr(t, ":" + e) || zr(t, "v-bind:" + e);
                if (null != r) return Nr(r);
                if (!1 !== n) {
                    var i = zr(t, e);
                    if (null != i) return JSON.stringify(i)
                }
            }

            function zr(t, e, n) {
                var r;
                if (null != (r = t.attrsMap[e]))
                    for (var i = t.attrsList, a = 0, o = i.length; a < o; a++)
                        if (i[a].name === e) {
                            i.splice(a, 1);
                            break
                        }
                return n && delete t.attrsMap[e], r
            }

            function Br(t, e) {
                for (var n = t.attrsList, r = 0, i = n.length; r < i; r++) {
                    var a = n[r];
                    if (e.test(a.name)) return n.splice(r, 1), a
                }
            }

            function Wr(t, e) {
                return e && (null != e.start && (t.start = e.start), null != e.end && (t.end = e.end)), t
            }

            function Gr(t, e, n) {
                var r = n || {},
                    i = r.number,
                    a = "$$v";
                r.trim && (a = "(typeof $$v === 'string'? $$v.trim(): $$v)"), i && (a = "_n(" + a + ")");
                var o = qr(e, a);
                t.model = {
                    value: "(" + e + ")",
                    expression: JSON.stringify(e),
                    callback: "function ($$v) {" + o + "}"
                }
            }

            function qr(t, e) {
                var n = function(t) {
                    if (t = t.trim(), _r = t.length, t.indexOf("[") < 0 || t.lastIndexOf("]") < _r - 1) return (kr = t.lastIndexOf(".")) > -1 ? {
                        exp: t.slice(0, kr),
                        key: '"' + t.slice(kr + 1) + '"'
                    } : {
                        exp: t,
                        key: null
                    };
                    Sr = t, kr = Tr = Or = 0;
                    for (; !Hr();) Jr(xr = Ur()) ? Zr(xr) : 91 === xr && Kr(xr);
                    return {
                        exp: t.slice(0, Tr),
                        key: t.slice(Tr + 1, Or)
                    }
                }(t);
                return null === n.key ? t + "=" + e : "$set(" + n.exp + ", " + n.key + ", " + e + ")"
            }

            function Ur() {
                return Sr.charCodeAt(++kr)
            }

            function Hr() {
                return kr >= _r
            }

            function Jr(t) {
                return 34 === t || 39 === t
            }

            function Kr(t) {
                var e = 1;
                for (Tr = kr; !Hr();)
                    if (Jr(t = Ur())) Zr(t);
                    else if (91 === t && e++, 93 === t && e--, 0 === e) {
                        Or = kr;
                        break
                    }
            }

            function Zr(t) {
                for (var e = t; !Hr() && (t = Ur()) !== e;);
            }
            var Xr, Yr = "__r",
                Qr = "__c";

            function ti(t, e, n) {
                var r = Xr;
                return function i() {
                    null !== e.apply(null, arguments) && ri(t, i, n, r)
                }
            }
            var ei = Jt && !(et && Number(et[1]) <= 53);

            function ni(t, e, n, r) {
                if (ei) {
                    var i = cn,
                        a = e;
                    e = a._wrapper = function(t) {
                        if (t.target === t.currentTarget || t.timeStamp >= i || t.timeStamp <= 0 || t.target.ownerDocument !== document) return a.apply(this, arguments)
                    }
                }
                Xr.addEventListener(t, e, rt ? {
                    capture: n,
                    passive: r
                } : n)
            }

            function ri(t, e, n, r) {
                (r || Xr).removeEventListener(t, e._wrapper || e, n)
            }

            function ii(t, e) {
                if (!i(t.data.on) || !i(e.data.on)) {
                    var n = e.data.on || {},
                        r = t.data.on || {};
                    Xr = e.elm,
                        function(t) {
                            if (a(t[Yr])) {
                                var e = X ? "change" : "input";
                                t[e] = [].concat(t[Yr], t[e] || []), delete t[Yr]
                            }
                            a(t[Qr]) && (t.change = [].concat(t[Qr], t.change || []), delete t[Qr])
                        }(n), se(n, r, ni, ri, ti, e.context), Xr = void 0
                }
            }
            var ai, oi = {
                create: ii,
                update: ii
            };

            function si(t, e) {
                if (!i(t.data.domProps) || !i(e.data.domProps)) {
                    var n, r, o = e.elm,
                        s = t.data.domProps || {},
                        l = e.data.domProps || {};
                    for (n in a(l.__ob__) && (l = e.data.domProps = N({}, l)), s) n in l || (o[n] = "");
                    for (n in l) {
                        if (r = l[n], "textContent" === n || "innerHTML" === n) {
                            if (e.children && (e.children.length = 0), r === s[n]) continue;
                            1 === o.childNodes.length && o.removeChild(o.childNodes[0])
                        }
                        if ("value" === n && "PROGRESS" !== o.tagName) {
                            o._value = r;
                            var u = i(r) ? "" : String(r);
                            li(o, u) && (o.value = u)
                        } else if ("innerHTML" === n && Xn(o.tagName) && i(o.innerHTML)) {
                            (ai = ai || document.createElement("div")).innerHTML = "<svg>" + r + "</svg>";
                            for (var c = ai.firstChild; o.firstChild;) o.removeChild(o.firstChild);
                            for (; c.firstChild;) o.appendChild(c.firstChild)
                        } else if (r !== s[n]) try {
                            o[n] = r
                        } catch (t) {}
                    }
                }
            }

            function li(t, e) {
                return !t.composing && ("OPTION" === t.tagName || function(t, e) {
                    var n = !0;
                    try {
                        n = document.activeElement !== t
                    } catch (t) {}
                    return n && t.value !== e
                }(t, e) || function(t, e) {
                    var n = t.value,
                        r = t._vModifiers;
                    if (a(r)) {
                        if (r.number) return m(n) !== m(e);
                        if (r.trim) return n.trim() !== e.trim()
                    }
                    return n !== e
                }(t, e))
            }
            var ui = {
                    create: si,
                    update: si
                },
                ci = _(function(t) {
                    var e = {},
                        n = /:(.+)/;
                    return t.split(/;(?![^(]*\))/g).forEach(function(t) {
                        if (t) {
                            var r = t.split(n);
                            r.length > 1 && (e[r[0].trim()] = r[1].trim())
                        }
                    }), e
                });

            function hi(t) {
                var e = pi(t.style);
                return t.staticStyle ? N(t.staticStyle, e) : e
            }

            function pi(t) {
                return Array.isArray(t) ? I(t) : "string" == typeof t ? ci(t) : t
            }
            var fi, di = /^--/,
                mi = /\s*!important$/,
                gi = function(t, e, n) {
                    if (di.test(e)) t.style.setProperty(e, n);
                    else if (mi.test(n)) t.style.setProperty(O(e), n.replace(mi, ""), "important");
                    else {
                        var r = yi(e);
                        if (Array.isArray(n))
                            for (var i = 0, a = n.length; i < a; i++) t.style[r] = n[i];
                        else t.style[r] = n
                    }
                },
                vi = ["Webkit", "Moz", "ms"],
                yi = _(function(t) {
                    if (fi = fi || document.createElement("div").style, "filter" !== (t = x(t)) && t in fi) return t;
                    for (var e = t.charAt(0).toUpperCase() + t.slice(1), n = 0; n < vi.length; n++) {
                        var r = vi[n] + e;
                        if (r in fi) return r
                    }
                });

            function bi(t, e) {
                var n = e.data,
                    r = t.data;
                if (!(i(n.staticStyle) && i(n.style) && i(r.staticStyle) && i(r.style))) {
                    var o, s, l = e.elm,
                        u = r.staticStyle,
                        c = r.normalizedStyle || r.style || {},
                        h = u || c,
                        p = pi(e.data.style) || {};
                    e.data.normalizedStyle = a(p.__ob__) ? N({}, p) : p;
                    var f = function(t, e) {
                        var n, r = {};
                        if (e)
                            for (var i = t; i.componentInstance;)(i = i.componentInstance._vnode) && i.data && (n = hi(i.data)) && N(r, n);
                        (n = hi(t.data)) && N(r, n);
                        for (var a = t; a = a.parent;) a.data && (n = hi(a.data)) && N(r, n);
                        return r
                    }(e, !0);
                    for (s in h) i(f[s]) && gi(l, s, "");
                    for (s in f)(o = f[s]) !== h[s] && gi(l, s, null == o ? "" : o)
                }
            }
            var wi = {
                    create: bi,
                    update: bi
                },
                Ci = /\s+/;

            function _i(t, e) {
                if (e && (e = e.trim()))
                    if (t.classList) e.indexOf(" ") > -1 ? e.split(Ci).forEach(function(e) {
                        return t.classList.add(e)
                    }) : t.classList.add(e);
                    else {
                        var n = " " + (t.getAttribute("class") || "") + " ";
                        n.indexOf(" " + e + " ") < 0 && t.setAttribute("class", (n + e).trim())
                    }
            }

            function Si(t, e) {
                if (e && (e = e.trim()))
                    if (t.classList) e.indexOf(" ") > -1 ? e.split(Ci).forEach(function(e) {
                        return t.classList.remove(e)
                    }) : t.classList.remove(e), t.classList.length || t.removeAttribute("class");
                    else {
                        for (var n = " " + (t.getAttribute("class") || "") + " ", r = " " + e + " "; n.indexOf(r) >= 0;) n = n.replace(r, " ");
                        (n = n.trim()) ? t.setAttribute("class", n): t.removeAttribute("class")
                    }
            }

            function xi(t) {
                if (t) {
                    if ("object" == typeof t) {
                        var e = {};
                        return !1 !== t.css && N(e, ki(t.name || "v")), N(e, t), e
                    }
                    return "string" == typeof t ? ki(t) : void 0
                }
            }
            var ki = _(function(t) {
                    return {
                        enterClass: t + "-enter",
                        enterToClass: t + "-enter-to",
                        enterActiveClass: t + "-enter-active",
                        leaveClass: t + "-leave",
                        leaveToClass: t + "-leave-to",
                        leaveActiveClass: t + "-leave-active"
                    }
                }),
                Ti = H && !Y,
                Oi = "transition",
                Ei = "animation",
                Ai = "transition",
                Ni = "transitionend",
                Ii = "animation",
                Pi = "animationend";
            Ti && (void 0 === window.ontransitionend && void 0 !== window.onwebkittransitionend && (Ai = "WebkitTransition", Ni = "webkitTransitionEnd"), void 0 === window.onanimationend && void 0 !== window.onwebkitanimationend && (Ii = "WebkitAnimation", Pi = "webkitAnimationEnd"));
            var $i = H ? window.requestAnimationFrame ? window.requestAnimationFrame.bind(window) : setTimeout : function(t) {
                return t()
            };

            function Fi(t) {
                $i(function() {
                    $i(t)
                })
            }

            function Mi(t, e) {
                var n = t._transitionClasses || (t._transitionClasses = []);
                n.indexOf(e) < 0 && (n.push(e), _i(t, e))
            }

            function Li(t, e) {
                t._transitionClasses && b(t._transitionClasses, e), Si(t, e)
            }

            function Di(t, e, n) {
                var r = Vi(t, e),
                    i = r.type,
                    a = r.timeout,
                    o = r.propCount;
                if (!i) return n();
                var s = i === Oi ? Ni : Pi,
                    l = 0,
                    u = function() {
                        t.removeEventListener(s, c), n()
                    },
                    c = function(e) {
                        e.target === t && ++l >= o && u()
                    };
                setTimeout(function() {
                    l < o && u()
                }, a + 1), t.addEventListener(s, c)
            }
            var ji = /\b(transform|all)(,|$)/;

            function Vi(t, e) {
                var n, r = window.getComputedStyle(t),
                    i = (r[Ai + "Delay"] || "").split(", "),
                    a = (r[Ai + "Duration"] || "").split(", "),
                    o = Ri(i, a),
                    s = (r[Ii + "Delay"] || "").split(", "),
                    l = (r[Ii + "Duration"] || "").split(", "),
                    u = Ri(s, l),
                    c = 0,
                    h = 0;
                return e === Oi ? o > 0 && (n = Oi, c = o, h = a.length) : e === Ei ? u > 0 && (n = Ei, c = u, h = l.length) : h = (n = (c = Math.max(o, u)) > 0 ? o > u ? Oi : Ei : null) ? n === Oi ? a.length : l.length : 0, {
                    type: n,
                    timeout: c,
                    propCount: h,
                    hasTransform: n === Oi && ji.test(r[Ai + "Property"])
                }
            }

            function Ri(t, e) {
                for (; t.length < e.length;) t = t.concat(t);
                return Math.max.apply(null, e.map(function(e, n) {
                    return zi(e) + zi(t[n])
                }))
            }

            function zi(t) {
                return 1e3 * Number(t.slice(0, -1).replace(",", "."))
            }

            function Bi(t, e) {
                var n = t.elm;
                a(n._leaveCb) && (n._leaveCb.cancelled = !0, n._leaveCb());
                var r = xi(t.data.transition);
                if (!i(r) && !a(n._enterCb) && 1 === n.nodeType) {
                    for (var o = r.css, s = r.type, u = r.enterClass, c = r.enterToClass, h = r.enterActiveClass, p = r.appearClass, f = r.appearToClass, d = r.appearActiveClass, g = r.beforeEnter, v = r.enter, y = r.afterEnter, b = r.enterCancelled, w = r.beforeAppear, C = r.appear, _ = r.afterAppear, S = r.appearCancelled, x = r.duration, k = Ye, T = Ye.$vnode; T && T.parent;) k = T.context, T = T.parent;
                    var O = !k._isMounted || !t.isRootInsert;
                    if (!O || C || "" === C) {
                        var E = O && p ? p : u,
                            A = O && d ? d : h,
                            N = O && f ? f : c,
                            I = O && w || g,
                            P = O && "function" == typeof C ? C : v,
                            $ = O && _ || y,
                            F = O && S || b,
                            M = m(l(x) ? x.enter : x);
                        0;
                        var L = !1 !== o && !Y,
                            j = qi(P),
                            V = n._enterCb = D(function() {
                                L && (Li(n, N), Li(n, A)), V.cancelled ? (L && Li(n, E), F && F(n)) : $ && $(n), n._enterCb = null
                            });
                        t.data.show || le(t, "insert", function() {
                            var e = n.parentNode,
                                r = e && e._pending && e._pending[t.key];
                            r && r.tag === t.tag && r.elm._leaveCb && r.elm._leaveCb(), P && P(n, V)
                        }), I && I(n), L && (Mi(n, E), Mi(n, A), Fi(function() {
                            Li(n, E), V.cancelled || (Mi(n, N), j || (Gi(M) ? setTimeout(V, M) : Di(n, s, V)))
                        })), t.data.show && (e && e(), P && P(n, V)), L || j || V()
                    }
                }
            }

            function Wi(t, e) {
                var n = t.elm;
                a(n._enterCb) && (n._enterCb.cancelled = !0, n._enterCb());
                var r = xi(t.data.transition);
                if (i(r) || 1 !== n.nodeType) return e();
                if (!a(n._leaveCb)) {
                    var o = r.css,
                        s = r.type,
                        u = r.leaveClass,
                        c = r.leaveToClass,
                        h = r.leaveActiveClass,
                        p = r.beforeLeave,
                        f = r.leave,
                        d = r.afterLeave,
                        g = r.leaveCancelled,
                        v = r.delayLeave,
                        y = r.duration,
                        b = !1 !== o && !Y,
                        w = qi(f),
                        C = m(l(y) ? y.leave : y);
                    0;
                    var _ = n._leaveCb = D(function() {
                        n.parentNode && n.parentNode._pending && (n.parentNode._pending[t.key] = null), b && (Li(n, c), Li(n, h)), _.cancelled ? (b && Li(n, u), g && g(n)) : (e(), d && d(n)), n._leaveCb = null
                    });
                    v ? v(S) : S()
                }

                function S() {
                    _.cancelled || (!t.data.show && n.parentNode && ((n.parentNode._pending || (n.parentNode._pending = {}))[t.key] = t), p && p(n), b && (Mi(n, u), Mi(n, h), Fi(function() {
                        Li(n, u), _.cancelled || (Mi(n, c), w || (Gi(C) ? setTimeout(_, C) : Di(n, s, _)))
                    })), f && f(n, _), b || w || _())
                }
            }

            function Gi(t) {
                return "number" == typeof t && !isNaN(t)
            }

            function qi(t) {
                if (i(t)) return !1;
                var e = t.fns;
                return a(e) ? qi(Array.isArray(e) ? e[0] : e) : (t._length || t.length) > 1
            }

            function Ui(t, e) {
                !0 !== e.data.show && Bi(e)
            }
            var Hi = function(t) {
                var e, n, r = {},
                    l = t.modules,
                    u = t.nodeOps;
                for (e = 0; e < sr.length; ++e)
                    for (r[sr[e]] = [], n = 0; n < l.length; ++n) a(l[n][sr[e]]) && r[sr[e]].push(l[n][sr[e]]);

                function c(t) {
                    var e = u.parentNode(t);
                    a(e) && u.removeChild(e, t)
                }

                function h(t, e, n, i, s, l, c) {
                    if (a(t.elm) && a(l) && (t = l[c] = wt(t)), t.isRootInsert = !s, ! function(t, e, n, i) {
                            var s = t.data;
                            if (a(s)) {
                                var l = a(t.componentInstance) && s.keepAlive;
                                if (a(s = s.hook) && a(s = s.init) && s(t, !1), a(t.componentInstance)) return p(t, e), f(n, t.elm, i), o(l) && function(t, e, n, i) {
                                    for (var o, s = t; s.componentInstance;)
                                        if (s = s.componentInstance._vnode, a(o = s.data) && a(o = o.transition)) {
                                            for (o = 0; o < r.activate.length; ++o) r.activate[o](or, s);
                                            e.push(s);
                                            break
                                        }
                                    f(n, t.elm, i)
                                }(t, e, n, i), !0
                            }
                        }(t, e, n, i)) {
                        var h = t.data,
                            m = t.children,
                            g = t.tag;
                        a(g) ? (t.elm = t.ns ? u.createElementNS(t.ns, g) : u.createElement(g, t), y(t), d(t, m, e), a(h) && v(t, e), f(n, t.elm, i)) : o(t.isComment) ? (t.elm = u.createComment(t.text), f(n, t.elm, i)) : (t.elm = u.createTextNode(t.text), f(n, t.elm, i))
                    }
                }

                function p(t, e) {
                    a(t.data.pendingInsert) && (e.push.apply(e, t.data.pendingInsert), t.data.pendingInsert = null), t.elm = t.componentInstance.$el, m(t) ? (v(t, e), y(t)) : (ar(t), e.push(t))
                }

                function f(t, e, n) {
                    a(t) && (a(n) ? u.parentNode(n) === t && u.insertBefore(t, e, n) : u.appendChild(t, e))
                }

                function d(t, e, n) {
                    if (Array.isArray(e))
                        for (var r = 0; r < e.length; ++r) h(e[r], n, t.elm, null, !0, e, r);
                    else s(t.text) && u.appendChild(t.elm, u.createTextNode(String(t.text)))
                }

                function m(t) {
                    for (; t.componentInstance;) t = t.componentInstance._vnode;
                    return a(t.tag)
                }

                function v(t, n) {
                    for (var i = 0; i < r.create.length; ++i) r.create[i](or, t);
                    a(e = t.data.hook) && (a(e.create) && e.create(or, t), a(e.insert) && n.push(t))
                }

                function y(t) {
                    var e;
                    if (a(e = t.fnScopeId)) u.setStyleScope(t.elm, e);
                    else
                        for (var n = t; n;) a(e = n.context) && a(e = e.$options._scopeId) && u.setStyleScope(t.elm, e), n = n.parent;
                    a(e = Ye) && e !== t.context && e !== t.fnContext && a(e = e.$options._scopeId) && u.setStyleScope(t.elm, e)
                }

                function b(t, e, n, r, i, a) {
                    for (; r <= i; ++r) h(n[r], a, t, e, !1, n, r)
                }

                function w(t) {
                    var e, n, i = t.data;
                    if (a(i))
                        for (a(e = i.hook) && a(e = e.destroy) && e(t), e = 0; e < r.destroy.length; ++e) r.destroy[e](t);
                    if (a(e = t.children))
                        for (n = 0; n < t.children.length; ++n) w(t.children[n])
                }

                function C(t, e, n, r) {
                    for (; n <= r; ++n) {
                        var i = e[n];
                        a(i) && (a(i.tag) ? (_(i), w(i)) : c(i.elm))
                    }
                }

                function _(t, e) {
                    if (a(e) || a(t.data)) {
                        var n, i = r.remove.length + 1;
                        for (a(e) ? e.listeners += i : e = function(t, e) {
                            function n() {
                                0 == --n.listeners && c(t)
                            }
                            return n.listeners = e, n
                        }(t.elm, i), a(n = t.componentInstance) && a(n = n._vnode) && a(n.data) && _(n, e), n = 0; n < r.remove.length; ++n) r.remove[n](t, e);
                        a(n = t.data.hook) && a(n = n.remove) ? n(t, e) : e()
                    } else c(t.elm)
                }

                function S(t, e, n, r) {
                    for (var i = n; i < r; i++) {
                        var o = e[i];
                        if (a(o) && lr(t, o)) return i
                    }
                }

                function x(t, e, n, s, l, c) {
                    if (t !== e) {
                        a(e.elm) && a(s) && (e = s[l] = wt(e));
                        var p = e.elm = t.elm;
                        if (o(t.isAsyncPlaceholder)) a(e.asyncFactory.resolved) ? O(t.elm, e, n) : e.isAsyncPlaceholder = !0;
                        else if (o(e.isStatic) && o(t.isStatic) && e.key === t.key && (o(e.isCloned) || o(e.isOnce))) e.componentInstance = t.componentInstance;
                        else {
                            var f, d = e.data;
                            a(d) && a(f = d.hook) && a(f = f.prepatch) && f(t, e);
                            var g = t.children,
                                v = e.children;
                            if (a(d) && m(e)) {
                                for (f = 0; f < r.update.length; ++f) r.update[f](t, e);
                                a(f = d.hook) && a(f = f.update) && f(t, e)
                            }
                            i(e.text) ? a(g) && a(v) ? g !== v && function(t, e, n, r, o) {
                                for (var s, l, c, p = 0, f = 0, d = e.length - 1, m = e[0], g = e[d], v = n.length - 1, y = n[0], w = n[v], _ = !o; p <= d && f <= v;) i(m) ? m = e[++p] : i(g) ? g = e[--d] : lr(m, y) ? (x(m, y, r, n, f), m = e[++p], y = n[++f]) : lr(g, w) ? (x(g, w, r, n, v), g = e[--d], w = n[--v]) : lr(m, w) ? (x(m, w, r, n, v), _ && u.insertBefore(t, m.elm, u.nextSibling(g.elm)), m = e[++p], w = n[--v]) : lr(g, y) ? (x(g, y, r, n, f), _ && u.insertBefore(t, g.elm, m.elm), g = e[--d], y = n[++f]) : (i(s) && (s = ur(e, p, d)), i(l = a(y.key) ? s[y.key] : S(y, e, p, d)) ? h(y, r, t, m.elm, !1, n, f) : lr(c = e[l], y) ? (x(c, y, r, n, f), e[l] = void 0, _ && u.insertBefore(t, c.elm, m.elm)) : h(y, r, t, m.elm, !1, n, f), y = n[++f]);
                                p > d ? b(t, i(n[v + 1]) ? null : n[v + 1].elm, n, f, v, r) : f > v && C(0, e, p, d)
                            }(p, g, v, n, c) : a(v) ? (a(t.text) && u.setTextContent(p, ""), b(p, null, v, 0, v.length - 1, n)) : a(g) ? C(0, g, 0, g.length - 1) : a(t.text) && u.setTextContent(p, "") : t.text !== e.text && u.setTextContent(p, e.text), a(d) && a(f = d.hook) && a(f = f.postpatch) && f(t, e)
                        }
                    }
                }

                function k(t, e, n) {
                    if (o(n) && a(t.parent)) t.parent.data.pendingInsert = e;
                    else
                        for (var r = 0; r < e.length; ++r) e[r].data.hook.insert(e[r])
                }
                var T = g("attrs,class,staticClass,staticStyle,key");

                function O(t, e, n, r) {
                    var i, s = e.tag,
                        l = e.data,
                        u = e.children;
                    if (r = r || l && l.pre, e.elm = t, o(e.isComment) && a(e.asyncFactory)) return e.isAsyncPlaceholder = !0, !0;
                    if (a(l) && (a(i = l.hook) && a(i = i.init) && i(e, !0), a(i = e.componentInstance))) return p(e, n), !0;
                    if (a(s)) {
                        if (a(u))
                            if (t.hasChildNodes())
                                if (a(i = l) && a(i = i.domProps) && a(i = i.innerHTML)) {
                                    if (i !== t.innerHTML) return !1
                                } else {
                                    for (var c = !0, h = t.firstChild, f = 0; f < u.length; f++) {
                                        if (!h || !O(h, u[f], n, r)) {
                                            c = !1;
                                            break
                                        }
                                        h = h.nextSibling
                                    }
                                    if (!c || h) return !1
                                } else d(e, u, n); if (a(l)) {
                            var m = !1;
                            for (var g in l)
                                if (!T(g)) {
                                    m = !0, v(e, n);
                                    break
                                }!m && l.class && ie(l.class)
                        }
                    } else t.data !== e.text && (t.data = e.text);
                    return !0
                }
                return function(t, e, n, s) {
                    if (!i(e)) {
                        var l, c = !1,
                            p = [];
                        if (i(t)) c = !0, h(e, p);
                        else {
                            var f = a(t.nodeType);
                            if (!f && lr(t, e)) x(t, e, p, null, null, s);
                            else {
                                if (f) {
                                    if (1 === t.nodeType && t.hasAttribute(j) && (t.removeAttribute(j), n = !0), o(n) && O(t, e, p)) return k(e, p, !0), t;
                                    l = t, t = new gt(u.tagName(l).toLowerCase(), {}, [], void 0, l)
                                }
                                var d = t.elm,
                                    g = u.parentNode(d);
                                if (h(e, p, d._leaveCb ? null : g, u.nextSibling(d)), a(e.parent))
                                    for (var v = e.parent, y = m(e); v;) {
                                        for (var b = 0; b < r.destroy.length; ++b) r.destroy[b](v);
                                        if (v.elm = e.elm, y) {
                                            for (var _ = 0; _ < r.create.length; ++_) r.create[_](or, v);
                                            var S = v.data.hook.insert;
                                            if (S.merged)
                                                for (var T = 1; T < S.fns.length; T++) S.fns[T]()
                                        } else ar(v);
                                        v = v.parent
                                    }
                                a(g) ? C(0, [t], 0, 0) : a(t.tag) && w(t)
                            }
                        }
                        return k(e, p, c), e.elm
                    }
                    a(t) && w(t)
                }
            }({
                nodeOps: rr,
                modules: [wr, Er, oi, ui, wi, H ? {
                    create: Ui,
                    activate: Ui,
                    remove: function(t, e) {
                        !0 !== t.data.show ? Wi(t, e) : e()
                    }
                } : {}].concat(gr)
            });
            Y && document.addEventListener("selectionchange", function() {
                var t = document.activeElement;
                t && t.vmodel && ea(t, "input")
            });
            var Ji = {
                inserted: function(t, e, n, r) {
                    "select" === n.tag ? (r.elm && !r.elm._vOptions ? le(n, "postpatch", function() {
                        Ji.componentUpdated(t, e, n)
                    }) : Ki(t, e, n.context), t._vOptions = [].map.call(t.options, Yi)) : ("textarea" === n.tag || er(t.type)) && (t._vModifiers = e.modifiers, e.modifiers.lazy || (t.addEventListener("compositionstart", Qi), t.addEventListener("compositionend", ta), t.addEventListener("change", ta), Y && (t.vmodel = !0)))
                },
                componentUpdated: function(t, e, n) {
                    if ("select" === n.tag) {
                        Ki(t, e, n.context);
                        var r = t._vOptions,
                            i = t._vOptions = [].map.call(t.options, Yi);
                        if (i.some(function(t, e) {
                                return !M(t, r[e])
                            }))(t.multiple ? e.value.some(function(t) {
                            return Xi(t, i)
                        }) : e.value !== e.oldValue && Xi(e.value, i)) && ea(t, "change")
                    }
                }
            };

            function Ki(t, e, n) {
                Zi(t, e, n), (X || Q) && setTimeout(function() {
                    Zi(t, e, n)
                }, 0)
            }

            function Zi(t, e, n) {
                var r = e.value,
                    i = t.multiple;
                if (!i || Array.isArray(r)) {
                    for (var a, o, s = 0, l = t.options.length; s < l; s++)
                        if (o = t.options[s], i) a = L(r, Yi(o)) > -1, o.selected !== a && (o.selected = a);
                        else if (M(Yi(o), r)) return void(t.selectedIndex !== s && (t.selectedIndex = s));
                    i || (t.selectedIndex = -1)
                }
            }

            function Xi(t, e) {
                return e.every(function(e) {
                    return !M(e, t)
                })
            }

            function Yi(t) {
                return "_value" in t ? t._value : t.value
            }

            function Qi(t) {
                t.target.composing = !0
            }

            function ta(t) {
                t.target.composing && (t.target.composing = !1, ea(t.target, "input"))
            }

            function ea(t, e) {
                var n = document.createEvent("HTMLEvents");
                n.initEvent(e, !0, !0), t.dispatchEvent(n)
            }

            function na(t) {
                return !t.componentInstance || t.data && t.data.transition ? t : na(t.componentInstance._vnode)
            }
            var ra = {
                    model: Ji,
                    show: {
                        bind: function(t, e, n) {
                            var r = e.value,
                                i = (n = na(n)).data && n.data.transition,
                                a = t.__vOriginalDisplay = "none" === t.style.display ? "" : t.style.display;
                            r && i ? (n.data.show = !0, Bi(n, function() {
                                t.style.display = a
                            })) : t.style.display = r ? a : "none"
                        },
                        update: function(t, e, n) {
                            var r = e.value;
                            !r != !e.oldValue && ((n = na(n)).data && n.data.transition ? (n.data.show = !0, r ? Bi(n, function() {
                                t.style.display = t.__vOriginalDisplay
                            }) : Wi(n, function() {
                                t.style.display = "none"
                            })) : t.style.display = r ? t.__vOriginalDisplay : "none")
                        },
                        unbind: function(t, e, n, r, i) {
                            i || (t.style.display = t.__vOriginalDisplay)
                        }
                    }
                },
                ia = {
                    name: String,
                    appear: Boolean,
                    css: Boolean,
                    mode: String,
                    type: String,
                    enterClass: String,
                    leaveClass: String,
                    enterToClass: String,
                    leaveToClass: String,
                    enterActiveClass: String,
                    leaveActiveClass: String,
                    appearClass: String,
                    appearActiveClass: String,
                    appearToClass: String,
                    duration: [Number, String, Object]
                };

            function aa(t) {
                var e = t && t.componentOptions;
                return e && e.Ctor.options.abstract ? aa(He(e.children)) : t
            }

            function oa(t) {
                var e = {},
                    n = t.$options;
                for (var r in n.propsData) e[r] = t[r];
                var i = n._parentListeners;
                for (var a in i) e[x(a)] = i[a];
                return e
            }

            function sa(t, e) {
                if (/\d-keep-alive$/.test(e.tag)) return t("keep-alive", {
                    props: e.componentOptions.propsData
                })
            }
            var la = function(t) {
                    return t.tag || Ue(t)
                },
                ua = function(t) {
                    return "show" === t.name
                },
                ca = {
                    name: "transition",
                    props: ia,
                    abstract: !0,
                    render: function(t) {
                        var e = this,
                            n = this.$slots.default;
                        if (n && (n = n.filter(la)).length) {
                            0;
                            var r = this.mode;
                            0;
                            var i = n[0];
                            if (function(t) {
                                    for (; t = t.parent;)
                                        if (t.data.transition) return !0
                                }(this.$vnode)) return i;
                            var a = aa(i);
                            if (!a) return i;
                            if (this._leaving) return sa(t, i);
                            var o = "__transition-" + this._uid + "-";
                            a.key = null == a.key ? a.isComment ? o + "comment" : o + a.tag : s(a.key) ? 0 === String(a.key).indexOf(o) ? a.key : o + a.key : a.key;
                            var l = (a.data || (a.data = {})).transition = oa(this),
                                u = this._vnode,
                                c = aa(u);
                            if (a.data.directives && a.data.directives.some(ua) && (a.data.show = !0), c && c.data && ! function(t, e) {
                                    return e.key === t.key && e.tag === t.tag
                                }(a, c) && !Ue(c) && (!c.componentInstance || !c.componentInstance._vnode.isComment)) {
                                var h = c.data.transition = N({}, l);
                                if ("out-in" === r) return this._leaving = !0, le(h, "afterLeave", function() {
                                    e._leaving = !1, e.$forceUpdate()
                                }), sa(t, i);
                                if ("in-out" === r) {
                                    if (Ue(a)) return u;
                                    var p, f = function() {
                                        p()
                                    };
                                    le(l, "afterEnter", f), le(l, "enterCancelled", f), le(h, "delayLeave", function(t) {
                                        p = t
                                    })
                                }
                            }
                            return i
                        }
                    }
                },
                ha = N({
                    tag: String,
                    moveClass: String
                }, ia);

            function pa(t) {
                t.elm._moveCb && t.elm._moveCb(), t.elm._enterCb && t.elm._enterCb()
            }

            function fa(t) {
                t.data.newPos = t.elm.getBoundingClientRect()
            }

            function da(t) {
                var e = t.data.pos,
                    n = t.data.newPos,
                    r = e.left - n.left,
                    i = e.top - n.top;
                if (r || i) {
                    t.data.moved = !0;
                    var a = t.elm.style;
                    a.transform = a.WebkitTransform = "translate(" + r + "px," + i + "px)", a.transitionDuration = "0s"
                }
            }
            delete ha.mode;
            var ma = {
                Transition: ca,
                TransitionGroup: {
                    props: ha,
                    beforeMount: function() {
                        var t = this,
                            e = this._update;
                        this._update = function(n, r) {
                            var i = Qe(t);
                            t.__patch__(t._vnode, t.kept, !1, !0), t._vnode = t.kept, i(), e.call(t, n, r)
                        }
                    },
                    render: function(t) {
                        for (var e = this.tag || this.$vnode.data.tag || "span", n = Object.create(null), r = this.prevChildren = this.children, i = this.$slots.default || [], a = this.children = [], o = oa(this), s = 0; s < i.length; s++) {
                            var l = i[s];
                            if (l.tag)
                                if (null != l.key && 0 !== String(l.key).indexOf("__vlist")) a.push(l), n[l.key] = l, (l.data || (l.data = {})).transition = o;
                                else;
                        }
                        if (r) {
                            for (var u = [], c = [], h = 0; h < r.length; h++) {
                                var p = r[h];
                                p.data.transition = o, p.data.pos = p.elm.getBoundingClientRect(), n[p.key] ? u.push(p) : c.push(p)
                            }
                            this.kept = t(e, null, u), this.removed = c
                        }
                        return t(e, null, a)
                    },
                    updated: function() {
                        var t = this.prevChildren,
                            e = this.moveClass || (this.name || "v") + "-move";
                        t.length && this.hasMove(t[0].elm, e) && (t.forEach(pa), t.forEach(fa), t.forEach(da), this._reflow = document.body.offsetHeight, t.forEach(function(t) {
                            if (t.data.moved) {
                                var n = t.elm,
                                    r = n.style;
                                Mi(n, e), r.transform = r.WebkitTransform = r.transitionDuration = "", n.addEventListener(Ni, n._moveCb = function t(r) {
                                    r && r.target !== n || r && !/transform$/.test(r.propertyName) || (n.removeEventListener(Ni, t), n._moveCb = null, Li(n, e))
                                })
                            }
                        }))
                    },
                    methods: {
                        hasMove: function(t, e) {
                            if (!Ti) return !1;
                            if (this._hasMove) return this._hasMove;
                            var n = t.cloneNode();
                            t._transitionClasses && t._transitionClasses.forEach(function(t) {
                                Si(n, t)
                            }), _i(n, e), n.style.display = "none", this.$el.appendChild(n);
                            var r = Vi(n);
                            return this.$el.removeChild(n), this._hasMove = r.hasTransform
                        }
                    }
                }
            };
            Tn.config.mustUseProp = Ln, Tn.config.isReservedTag = Yn, Tn.config.isReservedAttr = Fn, Tn.config.getTagNamespace = Qn, Tn.config.isUnknownElement = function(t) {
                if (!H) return !0;
                if (Yn(t)) return !1;
                if (t = t.toLowerCase(), null != tr[t]) return tr[t];
                var e = document.createElement(t);
                return t.indexOf("-") > -1 ? tr[t] = e.constructor === window.HTMLUnknownElement || e.constructor === window.HTMLElement : tr[t] = /HTMLUnknownElement/.test(e.toString())
            }, N(Tn.options.directives, ra), N(Tn.options.components, ma), Tn.prototype.__patch__ = H ? Hi : P, Tn.prototype.$mount = function(t, e) {
                return function(t, e, n) {
                    var r;
                    return t.$el = e, t.$options.render || (t.$options.render = yt), nn(t, "beforeMount"), r = function() {
                        t._update(t._render(), n)
                    }, new mn(t, r, P, {
                        before: function() {
                            t._isMounted && !t._isDestroyed && nn(t, "beforeUpdate")
                        }
                    }, !0), n = !1, null == t.$vnode && (t._isMounted = !0, nn(t, "mounted")), t
                }(this, t = t && H ? nr(t) : void 0, e)
            }, H && setTimeout(function() {
                z.devtools && ot && ot.emit("init", Tn)
            }, 0);
            var ga = /\{\{((?:.|\r?\n)+?)\}\}/g,
                va = /[-.*+?^${}()|[\]\/\\]/g,
                ya = _(function(t) {
                    var e = t[0].replace(va, "\\$&"),
                        n = t[1].replace(va, "\\$&");
                    return new RegExp(e + "((?:.|\\n)+?)" + n, "g")
                });
            var ba = {
                staticKeys: ["staticClass"],
                transformNode: function(t, e) {
                    e.warn;
                    var n = zr(t, "class");
                    n && (t.staticClass = JSON.stringify(n));
                    var r = Rr(t, "class", !1);
                    r && (t.classBinding = r)
                },
                genData: function(t) {
                    var e = "";
                    return t.staticClass && (e += "staticClass:" + t.staticClass + ","), t.classBinding && (e += "class:" + t.classBinding + ","), e
                }
            };
            var wa, Ca = {
                    staticKeys: ["staticStyle"],
                    transformNode: function(t, e) {
                        e.warn;
                        var n = zr(t, "style");
                        n && (t.staticStyle = JSON.stringify(ci(n)));
                        var r = Rr(t, "style", !1);
                        r && (t.styleBinding = r)
                    },
                    genData: function(t) {
                        var e = "";
                        return t.staticStyle && (e += "staticStyle:" + t.staticStyle + ","), t.styleBinding && (e += "style:(" + t.styleBinding + "),"), e
                    }
                },
                _a = function(t) {
                    return (wa = wa || document.createElement("div")).innerHTML = t, wa.textContent
                },
                Sa = g("area,base,br,col,embed,frame,hr,img,input,isindex,keygen,link,meta,param,source,track,wbr"),
                xa = g("colgroup,dd,dt,li,options,p,td,tfoot,th,thead,tr,source"),
                ka = g("address,article,aside,base,blockquote,body,caption,col,colgroup,dd,details,dialog,div,dl,dt,fieldset,figcaption,figure,footer,form,h1,h2,h3,h4,h5,h6,head,header,hgroup,hr,html,legend,li,menuitem,meta,optgroup,option,param,rp,rt,source,style,summary,tbody,td,tfoot,th,thead,title,tr,track"),
                Ta = /^\s*([^\s"'<>\/=]+)(?:\s*(=)\s*(?:"([^"]*)"+|'([^']*)'+|([^\s"'=<>`]+)))?/,
                Oa = /^\s*((?:v-[\w-]+:|@|:|#)\[[^=]+\][^\s"'<>\/=]*)(?:\s*(=)\s*(?:"([^"]*)"+|'([^']*)'+|([^\s"'=<>`]+)))?/,
                Ea = "[a-zA-Z_][\\-\\.0-9_a-zA-Z" + B.source + "]*",
                Aa = "((?:" + Ea + "\\:)?" + Ea + ")",
                Na = new RegExp("^<" + Aa),
                Ia = /^\s*(\/?)>/,
                Pa = new RegExp("^<\\/" + Aa + "[^>]*>"),
                $a = /^<!DOCTYPE [^>]+>/i,
                Fa = /^<!\--/,
                Ma = /^<!\[/,
                La = g("script,style,textarea", !0),
                Da = {},
                ja = {
                    "&lt;": "<",
                    "&gt;": ">",
                    "&quot;": '"',
                    "&amp;": "&",
                    "&#10;": "\n",
                    "&#9;": "\t",
                    "&#39;": "'"
                },
                Va = /&(?:lt|gt|quot|amp|#39);/g,
                Ra = /&(?:lt|gt|quot|amp|#39|#10|#9);/g,
                za = g("pre,textarea", !0),
                Ba = function(t, e) {
                    return t && za(t) && "\n" === e[0]
                };

            function Wa(t, e) {
                var n = e ? Ra : Va;
                return t.replace(n, function(t) {
                    return ja[t]
                })
            }
            var Ga, qa, Ua, Ha, Ja, Ka, Za, Xa, Ya = /^@|^v-on:/,
                Qa = /^v-|^@|^:/,
                to = /([\s\S]*?)\s+(?:in|of)\s+([\s\S]*)/,
                eo = /,([^,\}\]]*)(?:,([^,\}\]]*))?$/,
                no = /^\(|\)$/g,
                ro = /^\[.*\]$/,
                io = /:(.*)$/,
                ao = /^:|^\.|^v-bind:/,
                oo = /\.[^.\]]+(?=[^\]]*$)/g,
                so = /^v-slot(:|$)|^#/,
                lo = /[\r\n]/,
                uo = /\s+/g,
                co = _(_a),
                ho = "_empty_";

            function po(t, e, n) {
                return {
                    type: 1,
                    tag: t,
                    attrsList: e,
                    attrsMap: wo(e),
                    rawAttrsMap: {},
                    parent: n,
                    children: []
                }
            }

            function fo(t, e) {
                Ga = e.warn || Pr, Ka = e.isPreTag || $, Za = e.mustUseProp || $, Xa = e.getTagNamespace || $;
                var n = e.isReservedTag || $;
                (function(t) {
                    return !!t.component || !n(t.tag)
                }), Ua = $r(e.modules, "transformNode"), Ha = $r(e.modules, "preTransformNode"), Ja = $r(e.modules, "postTransformNode"), qa = e.delimiters;
                var r, i, a = [],
                    o = !1 !== e.preserveWhitespace,
                    s = e.whitespace,
                    l = !1,
                    u = !1;

                function c(t) {
                    if (h(t), l || t.processed || (t = mo(t, e)), a.length || t === r || r.if && (t.elseif || t.else) && vo(r, {
                            exp: t.elseif,
                            block: t
                        }), i && !t.forbidden)
                        if (t.elseif || t.else) o = t, (s = function(t) {
                            var e = t.length;
                            for (; e--;) {
                                if (1 === t[e].type) return t[e];
                                t.pop()
                            }
                        }(i.children)) && s.if && vo(s, {
                            exp: o.elseif,
                            block: o
                        });
                        else {
                            if (t.slotScope) {
                                var n = t.slotTarget || '"default"';
                                (i.scopedSlots || (i.scopedSlots = {}))[n] = t
                            }
                            i.children.push(t), t.parent = i
                        }
                    var o, s;
                    t.children = t.children.filter(function(t) {
                        return !t.slotScope
                    }), h(t), t.pre && (l = !1), Ka(t.tag) && (u = !1);
                    for (var c = 0; c < Ja.length; c++) Ja[c](t, e)
                }

                function h(t) {
                    if (!u)
                        for (var e;
                             (e = t.children[t.children.length - 1]) && 3 === e.type && " " === e.text;) t.children.pop()
                }
                return function(t, e) {
                    for (var n, r, i = [], a = e.expectHTML, o = e.isUnaryTag || $, s = e.canBeLeftOpenTag || $, l = 0; t;) {
                        if (n = t, r && La(r)) {
                            var u = 0,
                                c = r.toLowerCase(),
                                h = Da[c] || (Da[c] = new RegExp("([\\s\\S]*?)(</" + c + "[^>]*>)", "i")),
                                p = t.replace(h, function(t, n, r) {
                                    return u = r.length, La(c) || "noscript" === c || (n = n.replace(/<!\--([\s\S]*?)-->/g, "$1").replace(/<!\[CDATA\[([\s\S]*?)]]>/g, "$1")), Ba(c, n) && (n = n.slice(1)), e.chars && e.chars(n), ""
                                });
                            l += t.length - p.length, t = p, T(c, l - u, l)
                        } else {
                            var f = t.indexOf("<");
                            if (0 === f) {
                                if (Fa.test(t)) {
                                    var d = t.indexOf("--\x3e");
                                    if (d >= 0) {
                                        e.shouldKeepComment && e.comment(t.substring(4, d), l, l + d + 3), S(d + 3);
                                        continue
                                    }
                                }
                                if (Ma.test(t)) {
                                    var m = t.indexOf("]>");
                                    if (m >= 0) {
                                        S(m + 2);
                                        continue
                                    }
                                }
                                var g = t.match($a);
                                if (g) {
                                    S(g[0].length);
                                    continue
                                }
                                var v = t.match(Pa);
                                if (v) {
                                    var y = l;
                                    S(v[0].length), T(v[1], y, l);
                                    continue
                                }
                                var b = x();
                                if (b) {
                                    k(b), Ba(b.tagName, t) && S(1);
                                    continue
                                }
                            }
                            var w = void 0,
                                C = void 0,
                                _ = void 0;
                            if (f >= 0) {
                                for (C = t.slice(f); !(Pa.test(C) || Na.test(C) || Fa.test(C) || Ma.test(C) || (_ = C.indexOf("<", 1)) < 0);) f += _, C = t.slice(f);
                                w = t.substring(0, f)
                            }
                            f < 0 && (w = t), w && S(w.length), e.chars && w && e.chars(w, l - w.length, l)
                        } if (t === n) {
                            e.chars && e.chars(t);
                            break
                        }
                    }

                    function S(e) {
                        l += e, t = t.substring(e)
                    }

                    function x() {
                        var e = t.match(Na);
                        if (e) {
                            var n, r, i = {
                                tagName: e[1],
                                attrs: [],
                                start: l
                            };
                            for (S(e[0].length); !(n = t.match(Ia)) && (r = t.match(Oa) || t.match(Ta));) r.start = l, S(r[0].length), r.end = l, i.attrs.push(r);
                            if (n) return i.unarySlash = n[1], S(n[0].length), i.end = l, i
                        }
                    }

                    function k(t) {
                        var n = t.tagName,
                            l = t.unarySlash;
                        a && ("p" === r && ka(n) && T(r), s(n) && r === n && T(n));
                        for (var u = o(n) || !!l, c = t.attrs.length, h = new Array(c), p = 0; p < c; p++) {
                            var f = t.attrs[p],
                                d = f[3] || f[4] || f[5] || "",
                                m = "a" === n && "href" === f[1] ? e.shouldDecodeNewlinesForHref : e.shouldDecodeNewlines;
                            h[p] = {
                                name: f[1],
                                value: Wa(d, m)
                            }
                        }
                        u || (i.push({
                            tag: n,
                            lowerCasedTag: n.toLowerCase(),
                            attrs: h,
                            start: t.start,
                            end: t.end
                        }), r = n), e.start && e.start(n, h, u, t.start, t.end)
                    }

                    function T(t, n, a) {
                        var o, s;
                        if (null == n && (n = l), null == a && (a = l), t)
                            for (s = t.toLowerCase(), o = i.length - 1; o >= 0 && i[o].lowerCasedTag !== s; o--);
                        else o = 0; if (o >= 0) {
                            for (var u = i.length - 1; u >= o; u--) e.end && e.end(i[u].tag, n, a);
                            i.length = o, r = o && i[o - 1].tag
                        } else "br" === s ? e.start && e.start(t, [], !0, n, a) : "p" === s && (e.start && e.start(t, [], !1, n, a), e.end && e.end(t, n, a))
                    }
                    T()
                }(t, {
                    warn: Ga,
                    expectHTML: e.expectHTML,
                    isUnaryTag: e.isUnaryTag,
                    canBeLeftOpenTag: e.canBeLeftOpenTag,
                    shouldDecodeNewlines: e.shouldDecodeNewlines,
                    shouldDecodeNewlinesForHref: e.shouldDecodeNewlinesForHref,
                    shouldKeepComment: e.comments,
                    outputSourceRange: e.outputSourceRange,
                    start: function(t, n, o, s, h) {
                        var p = i && i.ns || Xa(t);
                        X && "svg" === p && (n = function(t) {
                            for (var e = [], n = 0; n < t.length; n++) {
                                var r = t[n];
                                Co.test(r.name) || (r.name = r.name.replace(_o, ""), e.push(r))
                            }
                            return e
                        }(n));
                        var f, d = po(t, n, i);
                        p && (d.ns = p), "style" !== (f = d).tag && ("script" !== f.tag || f.attrsMap.type && "text/javascript" !== f.attrsMap.type) || at() || (d.forbidden = !0);
                        for (var m = 0; m < Ha.length; m++) d = Ha[m](d, e) || d;
                        l || (! function(t) {
                            null != zr(t, "v-pre") && (t.pre = !0)
                        }(d), d.pre && (l = !0)), Ka(d.tag) && (u = !0), l ? function(t) {
                            var e = t.attrsList,
                                n = e.length;
                            if (n)
                                for (var r = t.attrs = new Array(n), i = 0; i < n; i++) r[i] = {
                                    name: e[i].name,
                                    value: JSON.stringify(e[i].value)
                                }, null != e[i].start && (r[i].start = e[i].start, r[i].end = e[i].end);
                            else t.pre || (t.plain = !0)
                        }(d) : d.processed || (go(d), function(t) {
                            var e = zr(t, "v-if");
                            if (e) t.if = e, vo(t, {
                                exp: e,
                                block: t
                            });
                            else {
                                null != zr(t, "v-else") && (t.else = !0);
                                var n = zr(t, "v-else-if");
                                n && (t.elseif = n)
                            }
                        }(d), function(t) {
                            null != zr(t, "v-once") && (t.once = !0)
                        }(d)), r || (r = d), o ? c(d) : (i = d, a.push(d))
                    },
                    end: function(t, e, n) {
                        var r = a[a.length - 1];
                        a.length -= 1, i = a[a.length - 1], c(r)
                    },
                    chars: function(t, e, n) {
                        if (i && (!X || "textarea" !== i.tag || i.attrsMap.placeholder !== t)) {
                            var r, a, c, h = i.children;
                            if (t = u || t.trim() ? "script" === (r = i).tag || "style" === r.tag ? t : co(t) : h.length ? s ? "condense" === s && lo.test(t) ? "" : " " : o ? " " : "" : "") u || "condense" !== s || (t = t.replace(uo, " ")), !l && " " !== t && (a = function(t, e) {
                                var n = e ? ya(e) : ga;
                                if (n.test(t)) {
                                    for (var r, i, a, o = [], s = [], l = n.lastIndex = 0; r = n.exec(t);) {
                                        (i = r.index) > l && (s.push(a = t.slice(l, i)), o.push(JSON.stringify(a)));
                                        var u = Nr(r[1].trim());
                                        o.push("_s(" + u + ")"), s.push({
                                            "@binding": u
                                        }), l = i + r[0].length
                                    }
                                    return l < t.length && (s.push(a = t.slice(l)), o.push(JSON.stringify(a))), {
                                        expression: o.join("+"),
                                        tokens: s
                                    }
                                }
                            }(t, qa)) ? c = {
                                type: 2,
                                expression: a.expression,
                                tokens: a.tokens,
                                text: t
                            } : " " === t && h.length && " " === h[h.length - 1].text || (c = {
                                type: 3,
                                text: t
                            }), c && h.push(c)
                        }
                    },
                    comment: function(t, e, n) {
                        if (i) {
                            var r = {
                                type: 3,
                                text: t,
                                isComment: !0
                            };
                            0, i.children.push(r)
                        }
                    }
                }), r
            }

            function mo(t, e) {
                var n, r;
                ! function(t) {
                    var e = Rr(t, "key");
                    if (e) {
                        t.key = e
                    }
                }(t), t.plain = !t.key && !t.scopedSlots && !t.attrsList.length, (r = Rr(n = t, "ref")) && (n.ref = r, n.refInFor = function(t) {
                    for (var e = t; e;) {
                        if (void 0 !== e.for) return !0;
                        e = e.parent
                    }
                    return !1
                }(n)),
                    function(t) {
                        var e;
                        "template" === t.tag ? (e = zr(t, "scope"), t.slotScope = e || zr(t, "slot-scope")) : (e = zr(t, "slot-scope")) && (t.slotScope = e);
                        var n = Rr(t, "slot");
                        n && (t.slotTarget = '""' === n ? '"default"' : n, t.slotTargetDynamic = !(!t.attrsMap[":slot"] && !t.attrsMap["v-bind:slot"]), "template" === t.tag || t.slotScope || Mr(t, "slot", n, function(t, e) {
                            return t.rawAttrsMap[":" + e] || t.rawAttrsMap["v-bind:" + e] || t.rawAttrsMap[e]
                        }(t, "slot")));
                        if ("template" === t.tag) {
                            var r = Br(t, so);
                            if (r) {
                                0;
                                var i = yo(r),
                                    a = i.name,
                                    o = i.dynamic;
                                t.slotTarget = a, t.slotTargetDynamic = o, t.slotScope = r.value || ho
                            }
                        } else {
                            var s = Br(t, so);
                            if (s) {
                                0;
                                var l = t.scopedSlots || (t.scopedSlots = {}),
                                    u = yo(s),
                                    c = u.name,
                                    h = u.dynamic,
                                    p = l[c] = po("template", [], t);
                                p.slotTarget = c, p.slotTargetDynamic = h, p.children = t.children.filter(function(t) {
                                    if (!t.slotScope) return t.parent = p, !0
                                }), p.slotScope = s.value || ho, t.children = [], t.plain = !1
                            }
                        }
                    }(t),
                    function(t) {
                        "slot" === t.tag && (t.slotName = Rr(t, "name"))
                    }(t),
                    function(t) {
                        var e;
                        (e = Rr(t, "is")) && (t.component = e);
                        null != zr(t, "inline-template") && (t.inlineTemplate = !0)
                    }(t);
                for (var i = 0; i < Ua.length; i++) t = Ua[i](t, e) || t;
                return function(t) {
                    var e, n, r, i, a, o, s, l, u = t.attrsList;
                    for (e = 0, n = u.length; e < n; e++) {
                        if (r = i = u[e].name, a = u[e].value, Qa.test(r))
                            if (t.hasBindings = !0, (o = bo(r.replace(Qa, ""))) && (r = r.replace(oo, "")), ao.test(r)) r = r.replace(ao, ""), a = Nr(a), (l = ro.test(r)) && (r = r.slice(1, -1)), o && (o.prop && !l && "innerHtml" === (r = x(r)) && (r = "innerHTML"), o.camel && !l && (r = x(r)), o.sync && (s = qr(a, "$event"), l ? Vr(t, '"update:"+(' + r + ")", s, null, !1, 0, u[e], !0) : (Vr(t, "update:" + x(r), s, null, !1, 0, u[e]), O(r) !== x(r) && Vr(t, "update:" + O(r), s, null, !1, 0, u[e])))), o && o.prop || !t.component && Za(t.tag, t.attrsMap.type, r) ? Fr(t, r, a, u[e], l) : Mr(t, r, a, u[e], l);
                            else if (Ya.test(r)) r = r.replace(Ya, ""), (l = ro.test(r)) && (r = r.slice(1, -1)), Vr(t, r, a, o, !1, 0, u[e], l);
                            else {
                                var c = (r = r.replace(Qa, "")).match(io),
                                    h = c && c[1];
                                l = !1, h && (r = r.slice(0, -(h.length + 1)), ro.test(h) && (h = h.slice(1, -1), l = !0)), Dr(t, r, i, a, h, l, o, u[e])
                            } else Mr(t, r, JSON.stringify(a), u[e]), !t.component && "muted" === r && Za(t.tag, t.attrsMap.type, r) && Fr(t, r, "true", u[e])
                    }
                }(t), t
            }

            function go(t) {
                var e;
                if (e = zr(t, "v-for")) {
                    var n = function(t) {
                        var e = t.match(to);
                        if (!e) return;
                        var n = {};
                        n.for = e[2].trim();
                        var r = e[1].trim().replace(no, ""),
                            i = r.match(eo);
                        i ? (n.alias = r.replace(eo, "").trim(), n.iterator1 = i[1].trim(), i[2] && (n.iterator2 = i[2].trim())) : n.alias = r;
                        return n
                    }(e);
                    n && N(t, n)
                }
            }

            function vo(t, e) {
                t.ifConditions || (t.ifConditions = []), t.ifConditions.push(e)
            }

            function yo(t) {
                var e = t.name.replace(so, "");
                return e || "#" !== t.name[0] && (e = "default"), ro.test(e) ? {
                    name: e.slice(1, -1),
                    dynamic: !0
                } : {
                    name: '"' + e + '"',
                    dynamic: !1
                }
            }

            function bo(t) {
                var e = t.match(oo);
                if (e) {
                    var n = {};
                    return e.forEach(function(t) {
                        n[t.slice(1)] = !0
                    }), n
                }
            }

            function wo(t) {
                for (var e = {}, n = 0, r = t.length; n < r; n++) e[t[n].name] = t[n].value;
                return e
            }
            var Co = /^xmlns:NS\d+/,
                _o = /^NS\d+:/;

            function So(t) {
                return po(t.tag, t.attrsList.slice(), t.parent)
            }
            var xo = [ba, Ca, {
                preTransformNode: function(t, e) {
                    if ("input" === t.tag) {
                        var n, r = t.attrsMap;
                        if (!r["v-model"]) return;
                        if ((r[":type"] || r["v-bind:type"]) && (n = Rr(t, "type")), r.type || n || !r["v-bind"] || (n = "(" + r["v-bind"] + ").type"), n) {
                            var i = zr(t, "v-if", !0),
                                a = i ? "&&(" + i + ")" : "",
                                o = null != zr(t, "v-else", !0),
                                s = zr(t, "v-else-if", !0),
                                l = So(t);
                            go(l), Lr(l, "type", "checkbox"), mo(l, e), l.processed = !0, l.if = "(" + n + ")==='checkbox'" + a, vo(l, {
                                exp: l.if,
                                block: l
                            });
                            var u = So(t);
                            zr(u, "v-for", !0), Lr(u, "type", "radio"), mo(u, e), vo(l, {
                                exp: "(" + n + ")==='radio'" + a,
                                block: u
                            });
                            var c = So(t);
                            return zr(c, "v-for", !0), Lr(c, ":type", n), mo(c, e), vo(l, {
                                exp: i,
                                block: c
                            }), o ? l.else = !0 : s && (l.elseif = s), l
                        }
                    }
                }
            }];
            var ko, To, Oo = {
                    expectHTML: !0,
                    modules: xo,
                    directives: {
                        model: function(t, e, n) {
                            n;
                            var r = e.value,
                                i = e.modifiers,
                                a = t.tag,
                                o = t.attrsMap.type;
                            if (t.component) return Gr(t, r, i), !1;
                            if ("select" === a)! function(t, e, n) {
                                var r = 'var $$selectedVal = Array.prototype.filter.call($event.target.options,function(o){return o.selected}).map(function(o){var val = "_value" in o ? o._value : o.value;return ' + (n && n.number ? "_n(val)" : "val") + "});";
                                r = r + " " + qr(e, "$event.target.multiple ? $$selectedVal : $$selectedVal[0]"), Vr(t, "change", r, null, !0)
                            }(t, r, i);
                            else if ("input" === a && "checkbox" === o)! function(t, e, n) {
                                var r = n && n.number,
                                    i = Rr(t, "value") || "null",
                                    a = Rr(t, "true-value") || "true",
                                    o = Rr(t, "false-value") || "false";
                                Fr(t, "checked", "Array.isArray(" + e + ")?_i(" + e + "," + i + ")>-1" + ("true" === a ? ":(" + e + ")" : ":_q(" + e + "," + a + ")")), Vr(t, "change", "var $$a=" + e + ",$$el=$event.target,$$c=$$el.checked?(" + a + "):(" + o + ");if(Array.isArray($$a)){var $$v=" + (r ? "_n(" + i + ")" : i) + ",$$i=_i($$a,$$v);if($$el.checked){$$i<0&&(" + qr(e, "$$a.concat([$$v])") + ")}else{$$i>-1&&(" + qr(e, "$$a.slice(0,$$i).concat($$a.slice($$i+1))") + ")}}else{" + qr(e, "$$c") + "}", null, !0)
                            }(t, r, i);
                            else if ("input" === a && "radio" === o)! function(t, e, n) {
                                var r = n && n.number,
                                    i = Rr(t, "value") || "null";
                                Fr(t, "checked", "_q(" + e + "," + (i = r ? "_n(" + i + ")" : i) + ")"), Vr(t, "change", qr(e, i), null, !0)
                            }(t, r, i);
                            else if ("input" === a || "textarea" === a)! function(t, e, n) {
                                var r = t.attrsMap.type,
                                    i = n || {},
                                    a = i.lazy,
                                    o = i.number,
                                    s = i.trim,
                                    l = !a && "range" !== r,
                                    u = a ? "change" : "range" === r ? Yr : "input",
                                    c = "$event.target.value";
                                s && (c = "$event.target.value.trim()"), o && (c = "_n(" + c + ")");
                                var h = qr(e, c);
                                l && (h = "if($event.target.composing)return;" + h), Fr(t, "value", "(" + e + ")"), Vr(t, u, h, null, !0), (s || o) && Vr(t, "blur", "$forceUpdate()")
                            }(t, r, i);
                            else if (!z.isReservedTag(a)) return Gr(t, r, i), !1;
                            return !0
                        },
                        text: function(t, e) {
                            e.value && Fr(t, "textContent", "_s(" + e.value + ")", e)
                        },
                        html: function(t, e) {
                            e.value && Fr(t, "innerHTML", "_s(" + e.value + ")", e)
                        }
                    },
                    isPreTag: function(t) {
                        return "pre" === t
                    },
                    isUnaryTag: Sa,
                    mustUseProp: Ln,
                    canBeLeftOpenTag: xa,
                    isReservedTag: Yn,
                    getTagNamespace: Qn,
                    staticKeys: function(t) {
                        return t.reduce(function(t, e) {
                            return t.concat(e.staticKeys || [])
                        }, []).join(",")
                    }(xo)
                },
                Eo = _(function(t) {
                    return g("type,tag,attrsList,attrsMap,plain,parent,children,attrs,start,end,rawAttrsMap" + (t ? "," + t : ""))
                });

            function Ao(t, e) {
                t && (ko = Eo(e.staticKeys || ""), To = e.isReservedTag || $, function t(e) {
                    e.static = function(t) {
                        if (2 === t.type) return !1;
                        if (3 === t.type) return !0;
                        return !(!t.pre && (t.hasBindings || t.if || t.for || v(t.tag) || !To(t.tag) || function(t) {
                            for (; t.parent;) {
                                if ("template" !== (t = t.parent).tag) return !1;
                                if (t.for) return !0
                            }
                            return !1
                        }(t) || !Object.keys(t).every(ko)))
                    }(e);
                    if (1 === e.type) {
                        if (!To(e.tag) && "slot" !== e.tag && null == e.attrsMap["inline-template"]) return;
                        for (var n = 0, r = e.children.length; n < r; n++) {
                            var i = e.children[n];
                            t(i), i.static || (e.static = !1)
                        }
                        if (e.ifConditions)
                            for (var a = 1, o = e.ifConditions.length; a < o; a++) {
                                var s = e.ifConditions[a].block;
                                t(s), s.static || (e.static = !1)
                            }
                    }
                }(t), function t(e, n) {
                    if (1 === e.type) {
                        if ((e.static || e.once) && (e.staticInFor = n), e.static && e.children.length && (1 !== e.children.length || 3 !== e.children[0].type)) return void(e.staticRoot = !0);
                        if (e.staticRoot = !1, e.children)
                            for (var r = 0, i = e.children.length; r < i; r++) t(e.children[r], n || !!e.for);
                        if (e.ifConditions)
                            for (var a = 1, o = e.ifConditions.length; a < o; a++) t(e.ifConditions[a].block, n)
                    }
                }(t, !1))
            }
            var No = /^([\w$_]+|\([^)]*?\))\s*=>|^function\s*(?:[\w$]+)?\s*\(/,
                Io = /\([^)]*?\);*$/,
                Po = /^[A-Za-z_$][\w$]*(?:\.[A-Za-z_$][\w$]*|\['[^']*?']|\["[^"]*?"]|\[\d+]|\[[A-Za-z_$][\w$]*])*$/,
                $o = {
                    esc: 27,
                    tab: 9,
                    enter: 13,
                    space: 32,
                    up: 38,
                    left: 37,
                    right: 39,
                    down: 40,
                    delete: [8, 46]
                },
                Fo = {
                    esc: ["Esc", "Escape"],
                    tab: "Tab",
                    enter: "Enter",
                    space: [" ", "Spacebar"],
                    up: ["Up", "ArrowUp"],
                    left: ["Left", "ArrowLeft"],
                    right: ["Right", "ArrowRight"],
                    down: ["Down", "ArrowDown"],
                    delete: ["Backspace", "Delete", "Del"]
                },
                Mo = function(t) {
                    return "if(" + t + ")return null;"
                },
                Lo = {
                    stop: "$event.stopPropagation();",
                    prevent: "$event.preventDefault();",
                    self: Mo("$event.target !== $event.currentTarget"),
                    ctrl: Mo("!$event.ctrlKey"),
                    shift: Mo("!$event.shiftKey"),
                    alt: Mo("!$event.altKey"),
                    meta: Mo("!$event.metaKey"),
                    left: Mo("'button' in $event && $event.button !== 0"),
                    middle: Mo("'button' in $event && $event.button !== 1"),
                    right: Mo("'button' in $event && $event.button !== 2")
                };

            function Do(t, e) {
                var n = e ? "nativeOn:" : "on:",
                    r = "",
                    i = "";
                for (var a in t) {
                    var o = jo(t[a]);
                    t[a] && t[a].dynamic ? i += a + "," + o + "," : r += '"' + a + '":' + o + ","
                }
                return r = "{" + r.slice(0, -1) + "}", i ? n + "_d(" + r + ",[" + i.slice(0, -1) + "])" : n + r
            }

            function jo(t) {
                if (!t) return "function(){}";
                if (Array.isArray(t)) return "[" + t.map(function(t) {
                    return jo(t)
                }).join(",") + "]";
                var e = Po.test(t.value),
                    n = No.test(t.value),
                    r = Po.test(t.value.replace(Io, ""));
                if (t.modifiers) {
                    var i = "",
                        a = "",
                        o = [];
                    for (var s in t.modifiers)
                        if (Lo[s]) a += Lo[s], $o[s] && o.push(s);
                        else if ("exact" === s) {
                            var l = t.modifiers;
                            a += Mo(["ctrl", "shift", "alt", "meta"].filter(function(t) {
                                return !l[t]
                            }).map(function(t) {
                                return "$event." + t + "Key"
                            }).join("||"))
                        } else o.push(s);
                    return o.length && (i += function(t) {
                        return "if(!$event.type.indexOf('key')&&" + t.map(Vo).join("&&") + ")return null;"
                    }(o)), a && (i += a), "function($event){" + i + (e ? "return " + t.value + "($event)" : n ? "return (" + t.value + ")($event)" : r ? "return " + t.value : t.value) + "}"
                }
                return e || n ? t.value : "function($event){" + (r ? "return " + t.value : t.value) + "}"
            }

            function Vo(t) {
                var e = parseInt(t, 10);
                if (e) return "$event.keyCode!==" + e;
                var n = $o[t],
                    r = Fo[t];
                return "_k($event.keyCode," + JSON.stringify(t) + "," + JSON.stringify(n) + ",$event.key," + JSON.stringify(r) + ")"
            }
            var Ro = {
                    on: function(t, e) {
                        t.wrapListeners = function(t) {
                            return "_g(" + t + "," + e.value + ")"
                        }
                    },
                    bind: function(t, e) {
                        t.wrapData = function(n) {
                            return "_b(" + n + ",'" + t.tag + "'," + e.value + "," + (e.modifiers && e.modifiers.prop ? "true" : "false") + (e.modifiers && e.modifiers.sync ? ",true" : "") + ")"
                        }
                    },
                    cloak: P
                },
                zo = function(t) {
                    this.options = t, this.warn = t.warn || Pr, this.transforms = $r(t.modules, "transformCode"), this.dataGenFns = $r(t.modules, "genData"), this.directives = N(N({}, Ro), t.directives);
                    var e = t.isReservedTag || $;
                    this.maybeComponent = function(t) {
                        return !!t.component || !e(t.tag)
                    }, this.onceId = 0, this.staticRenderFns = [], this.pre = !1
                };

            function Bo(t, e) {
                var n = new zo(e);
                return {
                    render: "with(this){return " + (t ? Wo(t, n) : '_c("div")') + "}",
                    staticRenderFns: n.staticRenderFns
                }
            }

            function Wo(t, e) {
                if (t.parent && (t.pre = t.pre || t.parent.pre), t.staticRoot && !t.staticProcessed) return Go(t, e);
                if (t.once && !t.onceProcessed) return qo(t, e);
                if (t.for && !t.forProcessed) return Ho(t, e);
                if (t.if && !t.ifProcessed) return Uo(t, e);
                if ("template" !== t.tag || t.slotTarget || e.pre) {
                    if ("slot" === t.tag) return function(t, e) {
                        var n = t.slotName || '"default"',
                            r = Xo(t, e),
                            i = "_t(" + n + (r ? "," + r : ""),
                            a = t.attrs || t.dynamicAttrs ? ts((t.attrs || []).concat(t.dynamicAttrs || []).map(function(t) {
                                return {
                                    name: x(t.name),
                                    value: t.value,
                                    dynamic: t.dynamic
                                }
                            })) : null,
                            o = t.attrsMap["v-bind"];
                        !a && !o || r || (i += ",null");
                        a && (i += "," + a);
                        o && (i += (a ? "" : ",null") + "," + o);
                        return i + ")"
                    }(t, e);
                    var n;
                    if (t.component) n = function(t, e, n) {
                        var r = e.inlineTemplate ? null : Xo(e, n, !0);
                        return "_c(" + t + "," + Jo(e, n) + (r ? "," + r : "") + ")"
                    }(t.component, t, e);
                    else {
                        var r;
                        (!t.plain || t.pre && e.maybeComponent(t)) && (r = Jo(t, e));
                        var i = t.inlineTemplate ? null : Xo(t, e, !0);
                        n = "_c('" + t.tag + "'" + (r ? "," + r : "") + (i ? "," + i : "") + ")"
                    }
                    for (var a = 0; a < e.transforms.length; a++) n = e.transforms[a](t, n);
                    return n
                }
                return Xo(t, e) || "void 0"
            }

            function Go(t, e) {
                t.staticProcessed = !0;
                var n = e.pre;
                return t.pre && (e.pre = t.pre), e.staticRenderFns.push("with(this){return " + Wo(t, e) + "}"), e.pre = n, "_m(" + (e.staticRenderFns.length - 1) + (t.staticInFor ? ",true" : "") + ")"
            }

            function qo(t, e) {
                if (t.onceProcessed = !0, t.if && !t.ifProcessed) return Uo(t, e);
                if (t.staticInFor) {
                    for (var n = "", r = t.parent; r;) {
                        if (r.for) {
                            n = r.key;
                            break
                        }
                        r = r.parent
                    }
                    return n ? "_o(" + Wo(t, e) + "," + e.onceId+++"," + n + ")" : Wo(t, e)
                }
                return Go(t, e)
            }

            function Uo(t, e, n, r) {
                return t.ifProcessed = !0,
                    function t(e, n, r, i) {
                        if (!e.length) return i || "_e()";
                        var a = e.shift();
                        return a.exp ? "(" + a.exp + ")?" + o(a.block) + ":" + t(e, n, r, i) : "" + o(a.block);

                        function o(t) {
                            return r ? r(t, n) : t.once ? qo(t, n) : Wo(t, n)
                        }
                    }(t.ifConditions.slice(), e, n, r)
            }

            function Ho(t, e, n, r) {
                var i = t.for,
                    a = t.alias,
                    o = t.iterator1 ? "," + t.iterator1 : "",
                    s = t.iterator2 ? "," + t.iterator2 : "";
                return t.forProcessed = !0, (r || "_l") + "((" + i + "),function(" + a + o + s + "){return " + (n || Wo)(t, e) + "})"
            }

            function Jo(t, e) {
                var n = "{",
                    r = function(t, e) {
                        var n = t.directives;
                        if (!n) return;
                        var r, i, a, o, s = "directives:[",
                            l = !1;
                        for (r = 0, i = n.length; r < i; r++) {
                            a = n[r], o = !0;
                            var u = e.directives[a.name];
                            u && (o = !!u(t, a, e.warn)), o && (l = !0, s += '{name:"' + a.name + '",rawName:"' + a.rawName + '"' + (a.value ? ",value:(" + a.value + "),expression:" + JSON.stringify(a.value) : "") + (a.arg ? ",arg:" + (a.isDynamicArg ? a.arg : '"' + a.arg + '"') : "") + (a.modifiers ? ",modifiers:" + JSON.stringify(a.modifiers) : "") + "},")
                        }
                        if (l) return s.slice(0, -1) + "]"
                    }(t, e);
                r && (n += r + ","), t.key && (n += "key:" + t.key + ","), t.ref && (n += "ref:" + t.ref + ","), t.refInFor && (n += "refInFor:true,"), t.pre && (n += "pre:true,"), t.component && (n += 'tag:"' + t.tag + '",');
                for (var i = 0; i < e.dataGenFns.length; i++) n += e.dataGenFns[i](t);
                if (t.attrs && (n += "attrs:" + ts(t.attrs) + ","), t.props && (n += "domProps:" + ts(t.props) + ","), t.events && (n += Do(t.events, !1) + ","), t.nativeEvents && (n += Do(t.nativeEvents, !0) + ","), t.slotTarget && !t.slotScope && (n += "slot:" + t.slotTarget + ","), t.scopedSlots && (n += function(t, e, n) {
                        var r = t.for || Object.keys(e).some(function(t) {
                                var n = e[t];
                                return n.slotTargetDynamic || n.if || n.for || Ko(n)
                            }),
                            i = !!t.if;
                        if (!r)
                            for (var a = t.parent; a;) {
                                if (a.slotScope && a.slotScope !== ho || a.for) {
                                    r = !0;
                                    break
                                }
                                a.if && (i = !0), a = a.parent
                            }
                        var o = Object.keys(e).map(function(t) {
                            return Zo(e[t], n)
                        }).join(",");
                        return "scopedSlots:_u([" + o + "]" + (r ? ",null,true" : "") + (!r && i ? ",null,false," + function(t) {
                            var e = 5381,
                                n = t.length;
                            for (; n;) e = 33 * e ^ t.charCodeAt(--n);
                            return e >>> 0
                        }(o) : "") + ")"
                    }(t, t.scopedSlots, e) + ","), t.model && (n += "model:{value:" + t.model.value + ",callback:" + t.model.callback + ",expression:" + t.model.expression + "},"), t.inlineTemplate) {
                    var a = function(t, e) {
                        var n = t.children[0];
                        0;
                        if (n && 1 === n.type) {
                            var r = Bo(n, e.options);
                            return "inlineTemplate:{render:function(){" + r.render + "},staticRenderFns:[" + r.staticRenderFns.map(function(t) {
                                return "function(){" + t + "}"
                            }).join(",") + "]}"
                        }
                    }(t, e);
                    a && (n += a + ",")
                }
                return n = n.replace(/,$/, "") + "}", t.dynamicAttrs && (n = "_b(" + n + ',"' + t.tag + '",' + ts(t.dynamicAttrs) + ")"), t.wrapData && (n = t.wrapData(n)), t.wrapListeners && (n = t.wrapListeners(n)), n
            }

            function Ko(t) {
                return 1 === t.type && ("slot" === t.tag || t.children.some(Ko))
            }

            function Zo(t, e) {
                var n = t.attrsMap["slot-scope"];
                if (t.if && !t.ifProcessed && !n) return Uo(t, e, Zo, "null");
                if (t.for && !t.forProcessed) return Ho(t, e, Zo);
                var r = t.slotScope === ho ? "" : String(t.slotScope),
                    i = "function(" + r + "){return " + ("template" === t.tag ? t.if && n ? "(" + t.if+")?" + (Xo(t, e) || "undefined") + ":undefined" : Xo(t, e) || "undefined" : Wo(t, e)) + "}",
                    a = r ? "" : ",proxy:true";
                return "{key:" + (t.slotTarget || '"default"') + ",fn:" + i + a + "}"
            }

            function Xo(t, e, n, r, i) {
                var a = t.children;
                if (a.length) {
                    var o = a[0];
                    if (1 === a.length && o.for && "template" !== o.tag && "slot" !== o.tag) {
                        var s = n ? e.maybeComponent(o) ? ",1" : ",0" : "";
                        return "" + (r || Wo)(o, e) + s
                    }
                    var l = n ? function(t, e) {
                            for (var n = 0, r = 0; r < t.length; r++) {
                                var i = t[r];
                                if (1 === i.type) {
                                    if (Yo(i) || i.ifConditions && i.ifConditions.some(function(t) {
                                            return Yo(t.block)
                                        })) {
                                        n = 2;
                                        break
                                    }(e(i) || i.ifConditions && i.ifConditions.some(function(t) {
                                        return e(t.block)
                                    })) && (n = 1)
                                }
                            }
                            return n
                        }(a, e.maybeComponent) : 0,
                        u = i || Qo;
                    return "[" + a.map(function(t) {
                        return u(t, e)
                    }).join(",") + "]" + (l ? "," + l : "")
                }
            }

            function Yo(t) {
                return void 0 !== t.for || "template" === t.tag || "slot" === t.tag
            }

            function Qo(t, e) {
                return 1 === t.type ? Wo(t, e) : 3 === t.type && t.isComment ? (r = t, "_e(" + JSON.stringify(r.text) + ")") : "_v(" + (2 === (n = t).type ? n.expression : es(JSON.stringify(n.text))) + ")";
                var n, r
            }

            function ts(t) {
                for (var e = "", n = "", r = 0; r < t.length; r++) {
                    var i = t[r],
                        a = es(i.value);
                    i.dynamic ? n += i.name + "," + a + "," : e += '"' + i.name + '":' + a + ","
                }
                return e = "{" + e.slice(0, -1) + "}", n ? "_d(" + e + ",[" + n.slice(0, -1) + "])" : e
            }

            function es(t) {
                return t.replace(/\u2028/g, "\\u2028").replace(/\u2029/g, "\\u2029")
            }
            new RegExp("\\b" + "do,if,for,let,new,try,var,case,else,with,await,break,catch,class,const,super,throw,while,yield,delete,export,import,return,switch,default,extends,finally,continue,debugger,function,arguments".split(",").join("\\b|\\b") + "\\b"), new RegExp("\\b" + "delete,typeof,void".split(",").join("\\s*\\([^\\)]*\\)|\\b") + "\\s*\\([^\\)]*\\)");

            function ns(t, e) {
                try {
                    return new Function(t)
                } catch (n) {
                    return e.push({
                        err: n,
                        code: t
                    }), P
                }
            }

            function rs(t) {
                var e = Object.create(null);
                return function(n, r, i) {
                    (r = N({}, r)).warn;
                    delete r.warn;
                    var a = r.delimiters ? String(r.delimiters) + n : n;
                    if (e[a]) return e[a];
                    var o = t(n, r);
                    var s = {},
                        l = [];
                    return s.render = ns(o.render, l), s.staticRenderFns = o.staticRenderFns.map(function(t) {
                        return ns(t, l)
                    }), e[a] = s
                }
            }
            var is, as, os = (is = function(t, e) {
                    var n = fo(t.trim(), e);
                    !1 !== e.optimize && Ao(n, e);
                    var r = Bo(n, e);
                    return {
                        ast: n,
                        render: r.render,
                        staticRenderFns: r.staticRenderFns
                    }
                }, function(t) {
                    function e(e, n) {
                        var r = Object.create(t),
                            i = [],
                            a = [];
                        if (n)
                            for (var o in n.modules && (r.modules = (t.modules || []).concat(n.modules)), n.directives && (r.directives = N(Object.create(t.directives || null), n.directives)), n) "modules" !== o && "directives" !== o && (r[o] = n[o]);
                        r.warn = function(t, e, n) {
                            (n ? a : i).push(t)
                        };
                        var s = is(e.trim(), r);
                        return s.errors = i, s.tips = a, s
                    }
                    return {
                        compile: e,
                        compileToFunctions: rs(e)
                    }
                })(Oo),
                ss = (os.compile, os.compileToFunctions);

            function ls(t) {
                return (as = as || document.createElement("div")).innerHTML = t ? '<a href="\n"/>' : '<div a="\n"/>', as.innerHTML.indexOf("&#10;") > 0
            }
            var us = !!H && ls(!1),
                cs = !!H && ls(!0),
                hs = _(function(t) {
                    var e = nr(t);
                    return e && e.innerHTML
                }),
                ps = Tn.prototype.$mount;
            Tn.prototype.$mount = function(t, e) {
                if ((t = t && nr(t)) === document.body || t === document.documentElement) return this;
                var n = this.$options;
                if (!n.render) {
                    var r = n.template;
                    if (r)
                        if ("string" == typeof r) "#" === r.charAt(0) && (r = hs(r));
                        else {
                            if (!r.nodeType) return this;
                            r = r.innerHTML
                        } else t && (r = function(t) {
                        if (t.outerHTML) return t.outerHTML;
                        var e = document.createElement("div");
                        return e.appendChild(t.cloneNode(!0)), e.innerHTML
                    }(t)); if (r) {
                        0;
                        var i = ss(r, {
                                outputSourceRange: !1,
                                shouldDecodeNewlines: us,
                                shouldDecodeNewlinesForHref: cs,
                                delimiters: n.delimiters,
                                comments: n.comments
                            }, this),
                            a = i.render,
                            o = i.staticRenderFns;
                        n.render = a, n.staticRenderFns = o
                    }
                }
                return ps.call(this, t, e)
            }, Tn.compile = ss, e.a = Tn
        }).call(this, n(2), n(16).setImmediate)
    },
    function(t, e, n) {
        (function(e) {
            ! function() {
                "use strict";
                var n;

                function r() {}(n = r).prototype.getItem = function(t) {
                    return this.hasOwnProperty(t) ? String(this[t]) : null
                }, n.prototype.setItem = function(t, e) {
                    this[t] = String(e)
                }, n.prototype.removeItem = function(t) {
                    delete this[t]
                }, n.prototype.clear = function() {
                    var t = this;
                    Object.keys(t).forEach(function(e) {
                        t[e] = void 0, delete t[e]
                    })
                }, n.prototype.key = function(t) {
                    return t = t || 0, Object.keys(this)[t]
                }, n.prototype.__defineGetter__("length", function() {
                    return Object.keys(this).length
                }), e.localStorage ? t.exports = localStorage : t.exports = new r
            }()
        }).call(this, n(2))
    },
    function(t, e) {
        var n;
        n = function() {
            return this
        }();
        try {
            n = n || new Function("return this")()
        } catch (t) {
            "object" == typeof window && (n = window)
        }
        t.exports = n
    },
    function(t, e, n) {
        "use strict";
        var r, i, a, o = n(29),
            s = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ_-";

        function l() {
            a = !1
        }

        function u(t) {
            if (t) {
                if (t !== r) {
                    if (t.length !== s.length) throw new Error("Custom alphabet for shortid must be " + s.length + " unique characters. You submitted " + t.length + " characters: " + t);
                    var e = t.split("").filter(function(t, e, n) {
                        return e !== n.lastIndexOf(t)
                    });
                    if (e.length) throw new Error("Custom alphabet for shortid must be " + s.length + " unique characters. These characters were not unique: " + e.join(", "));
                    r = t, l()
                }
            } else r !== s && (r = s, l())
        }

        function c() {
            return a || (a = function() {
                r || u(s);
                for (var t, e = r.split(""), n = [], i = o.nextValue(); e.length > 0;) i = o.nextValue(), t = Math.floor(i * e.length), n.push(e.splice(t, 1)[0]);
                return n.join("")
            }())
        }
        t.exports = {
            get: function() {
                return r || s
            },
            characters: function(t) {
                return u(t), r
            },
            seed: function(t) {
                o.seed(t), i !== t && (l(), i = t)
            },
            lookup: function(t) {
                return c()[t]
            },
            shuffled: c
        }
    },
    function(t, e, n) {
        var r;
        (function() {
            var i;
            i = this, void 0 === (r = function() {
                return t = i, e = function() {
                    var e, n, r, i, a, o, s = [],
                        l = s.concat,
                        u = s.filter,
                        c = s.slice,
                        h = t.document,
                        p = {},
                        f = {},
                        d = {
                            "column-count": 1,
                            columns: 1,
                            "font-weight": 1,
                            "line-height": 1,
                            opacity: 1,
                            "z-index": 1,
                            zoom: 1
                        },
                        m = /^\s*<(\w+|!)[^>]*>/,
                        g = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
                        v = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
                        y = /^(?:body|html)$/i,
                        b = /([A-Z])/g,
                        w = ["val", "css", "html", "text", "data", "width", "height", "offset"],
                        C = h.createElement("table"),
                        _ = h.createElement("tr"),
                        S = {
                            tr: h.createElement("tbody"),
                            tbody: C,
                            thead: C,
                            tfoot: C,
                            td: _,
                            th: _,
                            "*": h.createElement("div")
                        },
                        x = /complete|loaded|interactive/,
                        k = /^[\w-]*$/,
                        T = {},
                        O = T.toString,
                        E = {},
                        A = h.createElement("div"),
                        N = {
                            tabindex: "tabIndex",
                            readonly: "readOnly",
                            for: "htmlFor",
                            class: "className",
                            maxlength: "maxLength",
                            cellspacing: "cellSpacing",
                            cellpadding: "cellPadding",
                            rowspan: "rowSpan",
                            colspan: "colSpan",
                            usemap: "useMap",
                            frameborder: "frameBorder",
                            contenteditable: "contentEditable"
                        },
                        I = Array.isArray || function(t) {
                            return t instanceof Array
                        };

                    function P(t) {
                        return null == t ? String(t) : T[O.call(t)] || "object"
                    }

                    function $(t) {
                        return "function" == P(t)
                    }

                    function F(t) {
                        return null != t && t == t.window
                    }

                    function M(t) {
                        return null != t && t.nodeType == t.DOCUMENT_NODE
                    }

                    function L(t) {
                        return "object" == P(t)
                    }

                    function D(t) {
                        return L(t) && !F(t) && Object.getPrototypeOf(t) == Object.prototype
                    }

                    function j(t) {
                        var e = !!t && "length" in t && t.length,
                            n = r.type(t);
                        return "function" != n && !F(t) && ("array" == n || 0 === e || "number" == typeof e && e > 0 && e - 1 in t)
                    }

                    function V(t) {
                        return t.replace(/::/g, "/").replace(/([A-Z]+)([A-Z][a-z])/g, "$1_$2").replace(/([a-z\d])([A-Z])/g, "$1_$2").replace(/_/g, "-").toLowerCase()
                    }

                    function R(t) {
                        return t in f ? f[t] : f[t] = new RegExp("(^|\\s)" + t + "(\\s|$)")
                    }

                    function z(t, e) {
                        return "number" != typeof e || d[V(t)] ? e : e + "px"
                    }

                    function B(t) {
                        return "children" in t ? c.call(t.children) : r.map(t.childNodes, function(t) {
                            if (1 == t.nodeType) return t
                        })
                    }

                    function W(t, e) {
                        var n, r = t ? t.length : 0;
                        for (n = 0; n < r; n++) this[n] = t[n];
                        this.length = r, this.selector = e || ""
                    }

                    function G(t, e) {
                        return null == e ? r(t) : r(t).filter(e)
                    }

                    function q(t, e, n, r) {
                        return $(e) ? e.call(t, n, r) : e
                    }

                    function U(t, e, n) {
                        null == n ? t.removeAttribute(e) : t.setAttribute(e, n)
                    }

                    function H(t, n) {
                        var r = t.className || "",
                            i = r && r.baseVal !== e;
                        if (n === e) return i ? r.baseVal : r;
                        i ? r.baseVal = n : t.className = n
                    }

                    function J(t) {
                        try {
                            return t ? "true" == t || "false" != t && ("null" == t ? null : +t + "" == t ? +t : /^[\[\{]/.test(t) ? r.parseJSON(t) : t) : t
                        } catch (e) {
                            return t
                        }
                    }
                    return E.matches = function(t, e) {
                        if (!e || !t || 1 !== t.nodeType) return !1;
                        var n = t.matches || t.webkitMatchesSelector || t.mozMatchesSelector || t.oMatchesSelector || t.matchesSelector;
                        if (n) return n.call(t, e);
                        var r, i = t.parentNode,
                            a = !i;
                        return a && (i = A).appendChild(t), r = ~E.qsa(i, e).indexOf(t), a && A.removeChild(t), r
                    }, a = function(t) {
                        return t.replace(/-+(.)?/g, function(t, e) {
                            return e ? e.toUpperCase() : ""
                        })
                    }, o = function(t) {
                        return u.call(t, function(e, n) {
                            return t.indexOf(e) == n
                        })
                    }, E.fragment = function(t, n, i) {
                        var a, o, s;
                        return g.test(t) && (a = r(h.createElement(RegExp.$1))), a || (t.replace && (t = t.replace(v, "<$1></$2>")), n === e && (n = m.test(t) && RegExp.$1), n in S || (n = "*"), (s = S[n]).innerHTML = "" + t, a = r.each(c.call(s.childNodes), function() {
                            s.removeChild(this)
                        })), D(i) && (o = r(a), r.each(i, function(t, e) {
                            w.indexOf(t) > -1 ? o[t](e) : o.attr(t, e)
                        })), a
                    }, E.Z = function(t, e) {
                        return new W(t, e)
                    }, E.isZ = function(t) {
                        return t instanceof E.Z
                    }, E.init = function(t, n) {
                        var i, a;
                        if (!t) return E.Z();
                        if ("string" == typeof t)
                            if ("<" == (t = t.trim())[0] && m.test(t)) i = E.fragment(t, RegExp.$1, n), t = null;
                            else {
                                if (n !== e) return r(n).find(t);
                                i = E.qsa(h, t)
                            } else {
                            if ($(t)) return r(h).ready(t);
                            if (E.isZ(t)) return t;
                            if (I(t)) a = t, i = u.call(a, function(t) {
                                return null != t
                            });
                            else if (L(t)) i = [t], t = null;
                            else if (m.test(t)) i = E.fragment(t.trim(), RegExp.$1, n), t = null;
                            else {
                                if (n !== e) return r(n).find(t);
                                i = E.qsa(h, t)
                            }
                        }
                        return E.Z(i, t)
                    }, (r = function(t, e) {
                        return E.init(t, e)
                    }).extend = function(t) {
                        var r, i = c.call(arguments, 1);
                        return "boolean" == typeof t && (r = t, t = i.shift()), i.forEach(function(i) {
                            ! function t(r, i, a) {
                                for (n in i) a && (D(i[n]) || I(i[n])) ? (D(i[n]) && !D(r[n]) && (r[n] = {}), I(i[n]) && !I(r[n]) && (r[n] = []), t(r[n], i[n], a)) : i[n] !== e && (r[n] = i[n])
                            }(t, i, r)
                        }), t
                    }, E.qsa = function(t, e) {
                        var n, r = "#" == e[0],
                            i = !r && "." == e[0],
                            a = r || i ? e.slice(1) : e,
                            o = k.test(a);
                        return t.getElementById && o && r ? (n = t.getElementById(a)) ? [n] : [] : 1 !== t.nodeType && 9 !== t.nodeType && 11 !== t.nodeType ? [] : c.call(o && !r && t.getElementsByClassName ? i ? t.getElementsByClassName(a) : t.getElementsByTagName(e) : t.querySelectorAll(e))
                    }, r.contains = h.documentElement.contains ? function(t, e) {
                        return t !== e && t.contains(e)
                    } : function(t, e) {
                        for (; e && (e = e.parentNode);)
                            if (e === t) return !0;
                        return !1
                    }, r.type = P, r.isFunction = $, r.isWindow = F, r.isArray = I, r.isPlainObject = D, r.isEmptyObject = function(t) {
                        var e;
                        for (e in t) return !1;
                        return !0
                    }, r.isNumeric = function(t) {
                        var e = Number(t),
                            n = typeof t;
                        return null != t && "boolean" != n && ("string" != n || t.length) && !isNaN(e) && isFinite(e) || !1
                    }, r.inArray = function(t, e, n) {
                        return s.indexOf.call(e, t, n)
                    }, r.camelCase = a, r.trim = function(t) {
                        return null == t ? "" : String.prototype.trim.call(t)
                    }, r.uuid = 0, r.support = {}, r.expr = {}, r.noop = function() {}, r.map = function(t, e) {
                        var n, i, a, o, s = [];
                        if (j(t))
                            for (i = 0; i < t.length; i++) null != (n = e(t[i], i)) && s.push(n);
                        else
                            for (a in t) null != (n = e(t[a], a)) && s.push(n);
                        return (o = s).length > 0 ? r.fn.concat.apply([], o) : o
                    }, r.each = function(t, e) {
                        var n, r;
                        if (j(t)) {
                            for (n = 0; n < t.length; n++)
                                if (!1 === e.call(t[n], n, t[n])) return t
                        } else
                            for (r in t)
                                if (!1 === e.call(t[r], r, t[r])) return t; return t
                    }, r.grep = function(t, e) {
                        return u.call(t, e)
                    }, t.JSON && (r.parseJSON = JSON.parse), r.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function(t, e) {
                        T["[object " + e + "]"] = e.toLowerCase()
                    }), r.fn = {
                        constructor: E.Z,
                        length: 0,
                        forEach: s.forEach,
                        reduce: s.reduce,
                        push: s.push,
                        sort: s.sort,
                        splice: s.splice,
                        indexOf: s.indexOf,
                        concat: function() {
                            var t, e, n = [];
                            for (t = 0; t < arguments.length; t++) e = arguments[t], n[t] = E.isZ(e) ? e.toArray() : e;
                            return l.apply(E.isZ(this) ? this.toArray() : this, n)
                        },
                        map: function(t) {
                            return r(r.map(this, function(e, n) {
                                return t.call(e, n, e)
                            }))
                        },
                        slice: function() {
                            return r(c.apply(this, arguments))
                        },
                        ready: function(t) {
                            return x.test(h.readyState) && h.body ? t(r) : h.addEventListener("DOMContentLoaded", function() {
                                t(r)
                            }, !1), this
                        },
                        get: function(t) {
                            return t === e ? c.call(this) : this[t >= 0 ? t : t + this.length]
                        },
                        toArray: function() {
                            return this.get()
                        },
                        size: function() {
                            return this.length
                        },
                        remove: function() {
                            return this.each(function() {
                                null != this.parentNode && this.parentNode.removeChild(this)
                            })
                        },
                        each: function(t) {
                            return s.every.call(this, function(e, n) {
                                return !1 !== t.call(e, n, e)
                            }), this
                        },
                        filter: function(t) {
                            return $(t) ? this.not(this.not(t)) : r(u.call(this, function(e) {
                                return E.matches(e, t)
                            }))
                        },
                        add: function(t, e) {
                            return r(o(this.concat(r(t, e))))
                        },
                        is: function(t) {
                            return this.length > 0 && E.matches(this[0], t)
                        },
                        not: function(t) {
                            var n = [];
                            if ($(t) && t.call !== e) this.each(function(e) {
                                t.call(this, e) || n.push(this)
                            });
                            else {
                                var i = "string" == typeof t ? this.filter(t) : j(t) && $(t.item) ? c.call(t) : r(t);
                                this.forEach(function(t) {
                                    i.indexOf(t) < 0 && n.push(t)
                                })
                            }
                            return r(n)
                        },
                        has: function(t) {
                            return this.filter(function() {
                                return L(t) ? r.contains(this, t) : r(this).find(t).size()
                            })
                        },
                        eq: function(t) {
                            return -1 === t ? this.slice(t) : this.slice(t, +t + 1)
                        },
                        first: function() {
                            var t = this[0];
                            return t && !L(t) ? t : r(t)
                        },
                        last: function() {
                            var t = this[this.length - 1];
                            return t && !L(t) ? t : r(t)
                        },
                        find: function(t) {
                            var e = this;
                            return t ? "object" == typeof t ? r(t).filter(function() {
                                var t = this;
                                return s.some.call(e, function(e) {
                                    return r.contains(e, t)
                                })
                            }) : 1 == this.length ? r(E.qsa(this[0], t)) : this.map(function() {
                                return E.qsa(this, t)
                            }) : r()
                        },
                        closest: function(t, e) {
                            var n = [],
                                i = "object" == typeof t && r(t);
                            return this.each(function(r, a) {
                                for (; a && !(i ? i.indexOf(a) >= 0 : E.matches(a, t));) a = a !== e && !M(a) && a.parentNode;
                                a && n.indexOf(a) < 0 && n.push(a)
                            }), r(n)
                        },
                        parents: function(t) {
                            for (var e = [], n = this; n.length > 0;) n = r.map(n, function(t) {
                                if ((t = t.parentNode) && !M(t) && e.indexOf(t) < 0) return e.push(t), t
                            });
                            return G(e, t)
                        },
                        parent: function(t) {
                            return G(o(this.pluck("parentNode")), t)
                        },
                        children: function(t) {
                            return G(this.map(function() {
                                return B(this)
                            }), t)
                        },
                        contents: function() {
                            return this.map(function() {
                                return this.contentDocument || c.call(this.childNodes)
                            })
                        },
                        siblings: function(t) {
                            return G(this.map(function(t, e) {
                                return u.call(B(e.parentNode), function(t) {
                                    return t !== e
                                })
                            }), t)
                        },
                        empty: function() {
                            return this.each(function() {
                                this.innerHTML = ""
                            })
                        },
                        pluck: function(t) {
                            return r.map(this, function(e) {
                                return e[t]
                            })
                        },
                        show: function() {
                            return this.each(function() {
                                var t, e, n;
                                "none" == this.style.display && (this.style.display = ""), "none" == getComputedStyle(this, "").getPropertyValue("display") && (this.style.display = (t = this.nodeName, p[t] || (e = h.createElement(t), h.body.appendChild(e), n = getComputedStyle(e, "").getPropertyValue("display"), e.parentNode.removeChild(e), "none" == n && (n = "block"), p[t] = n), p[t]))
                            })
                        },
                        replaceWith: function(t) {
                            return this.before(t).remove()
                        },
                        wrap: function(t) {
                            var e = $(t);
                            if (this[0] && !e) var n = r(t).get(0),
                                i = n.parentNode || this.length > 1;
                            return this.each(function(a) {
                                r(this).wrapAll(e ? t.call(this, a) : i ? n.cloneNode(!0) : n)
                            })
                        },
                        wrapAll: function(t) {
                            if (this[0]) {
                                var e;
                                for (r(this[0]).before(t = r(t));
                                     (e = t.children()).length;) t = e.first();
                                r(t).append(this)
                            }
                            return this
                        },
                        wrapInner: function(t) {
                            var e = $(t);
                            return this.each(function(n) {
                                var i = r(this),
                                    a = i.contents(),
                                    o = e ? t.call(this, n) : t;
                                a.length ? a.wrapAll(o) : i.append(o)
                            })
                        },
                        unwrap: function() {
                            return this.parent().each(function() {
                                r(this).replaceWith(r(this).children())
                            }), this
                        },
                        clone: function() {
                            return this.map(function() {
                                return this.cloneNode(!0)
                            })
                        },
                        hide: function() {
                            return this.css("display", "none")
                        },
                        toggle: function(t) {
                            return this.each(function() {
                                var n = r(this);
                                (t === e ? "none" == n.css("display") : t) ? n.show(): n.hide()
                            })
                        },
                        prev: function(t) {
                            return r(this.pluck("previousElementSibling")).filter(t || "*")
                        },
                        next: function(t) {
                            return r(this.pluck("nextElementSibling")).filter(t || "*")
                        },
                        html: function(t) {
                            return 0 in arguments ? this.each(function(e) {
                                var n = this.innerHTML;
                                r(this).empty().append(q(this, t, e, n))
                            }) : 0 in this ? this[0].innerHTML : null
                        },
                        text: function(t) {
                            return 0 in arguments ? this.each(function(e) {
                                var n = q(this, t, e, this.textContent);
                                this.textContent = null == n ? "" : "" + n
                            }) : 0 in this ? this.pluck("textContent").join("") : null
                        },
                        attr: function(t, r) {
                            var i;
                            return "string" != typeof t || 1 in arguments ? this.each(function(e) {
                                if (1 === this.nodeType)
                                    if (L(t))
                                        for (n in t) U(this, n, t[n]);
                                    else U(this, t, q(this, r, e, this.getAttribute(t)))
                            }) : 0 in this && 1 == this[0].nodeType && null != (i = this[0].getAttribute(t)) ? i : e
                        },
                        removeAttr: function(t) {
                            return this.each(function() {
                                1 === this.nodeType && t.split(" ").forEach(function(t) {
                                    U(this, t)
                                }, this)
                            })
                        },
                        prop: function(t, e) {
                            return t = N[t] || t, 1 in arguments ? this.each(function(n) {
                                this[t] = q(this, e, n, this[t])
                            }) : this[0] && this[0][t]
                        },
                        removeProp: function(t) {
                            return t = N[t] || t, this.each(function() {
                                delete this[t]
                            })
                        },
                        data: function(t, n) {
                            var r = "data-" + t.replace(b, "-$1").toLowerCase(),
                                i = 1 in arguments ? this.attr(r, n) : this.attr(r);
                            return null !== i ? J(i) : e
                        },
                        val: function(t) {
                            return 0 in arguments ? (null == t && (t = ""), this.each(function(e) {
                                this.value = q(this, t, e, this.value)
                            })) : this[0] && (this[0].multiple ? r(this[0]).find("option").filter(function() {
                                return this.selected
                            }).pluck("value") : this[0].value)
                        },
                        offset: function(e) {
                            if (e) return this.each(function(t) {
                                var n = r(this),
                                    i = q(this, e, t, n.offset()),
                                    a = n.offsetParent().offset(),
                                    o = {
                                        top: i.top - a.top,
                                        left: i.left - a.left
                                    };
                                "static" == n.css("position") && (o.position = "relative"), n.css(o)
                            });
                            if (!this.length) return null;
                            if (h.documentElement !== this[0] && !r.contains(h.documentElement, this[0])) return {
                                top: 0,
                                left: 0
                            };
                            var n = this[0].getBoundingClientRect();
                            return {
                                left: n.left + t.pageXOffset,
                                top: n.top + t.pageYOffset,
                                width: Math.round(n.width),
                                height: Math.round(n.height)
                            }
                        },
                        css: function(t, e) {
                            if (arguments.length < 2) {
                                var i = this[0];
                                if ("string" == typeof t) {
                                    if (!i) return;
                                    return i.style[a(t)] || getComputedStyle(i, "").getPropertyValue(t)
                                }
                                if (I(t)) {
                                    if (!i) return;
                                    var o = {},
                                        s = getComputedStyle(i, "");
                                    return r.each(t, function(t, e) {
                                        o[e] = i.style[a(e)] || s.getPropertyValue(e)
                                    }), o
                                }
                            }
                            var l = "";
                            if ("string" == P(t)) e || 0 === e ? l = V(t) + ":" + z(t, e) : this.each(function() {
                                this.style.removeProperty(V(t))
                            });
                            else
                                for (n in t) t[n] || 0 === t[n] ? l += V(n) + ":" + z(n, t[n]) + ";" : this.each(function() {
                                    this.style.removeProperty(V(n))
                                });
                            return this.each(function() {
                                this.style.cssText += ";" + l
                            })
                        },
                        index: function(t) {
                            return t ? this.indexOf(r(t)[0]) : this.parent().children().indexOf(this[0])
                        },
                        hasClass: function(t) {
                            return !!t && s.some.call(this, function(t) {
                                return this.test(H(t))
                            }, R(t))
                        },
                        addClass: function(t) {
                            return t ? this.each(function(e) {
                                if ("className" in this) {
                                    i = [];
                                    var n = H(this),
                                        a = q(this, t, e, n);
                                    a.split(/\s+/g).forEach(function(t) {
                                        r(this).hasClass(t) || i.push(t)
                                    }, this), i.length && H(this, n + (n ? " " : "") + i.join(" "))
                                }
                            }) : this
                        },
                        removeClass: function(t) {
                            return this.each(function(n) {
                                if ("className" in this) {
                                    if (t === e) return H(this, "");
                                    i = H(this), q(this, t, n, i).split(/\s+/g).forEach(function(t) {
                                        i = i.replace(R(t), " ")
                                    }), H(this, i.trim())
                                }
                            })
                        },
                        toggleClass: function(t, n) {
                            return t ? this.each(function(i) {
                                var a = r(this),
                                    o = q(this, t, i, H(this));
                                o.split(/\s+/g).forEach(function(t) {
                                    (n === e ? !a.hasClass(t) : n) ? a.addClass(t): a.removeClass(t)
                                })
                            }) : this
                        },
                        scrollTop: function(t) {
                            if (this.length) {
                                var n = "scrollTop" in this[0];
                                return t === e ? n ? this[0].scrollTop : this[0].pageYOffset : this.each(n ? function() {
                                    this.scrollTop = t
                                } : function() {
                                    this.scrollTo(this.scrollX, t)
                                })
                            }
                        },
                        scrollLeft: function(t) {
                            if (this.length) {
                                var n = "scrollLeft" in this[0];
                                return t === e ? n ? this[0].scrollLeft : this[0].pageXOffset : this.each(n ? function() {
                                    this.scrollLeft = t
                                } : function() {
                                    this.scrollTo(t, this.scrollY)
                                })
                            }
                        },
                        position: function() {
                            if (this.length) {
                                var t = this[0],
                                    e = this.offsetParent(),
                                    n = this.offset(),
                                    i = y.test(e[0].nodeName) ? {
                                        top: 0,
                                        left: 0
                                    } : e.offset();
                                return n.top -= parseFloat(r(t).css("margin-top")) || 0, n.left -= parseFloat(r(t).css("margin-left")) || 0, i.top += parseFloat(r(e[0]).css("border-top-width")) || 0, i.left += parseFloat(r(e[0]).css("border-left-width")) || 0, {
                                    top: n.top - i.top,
                                    left: n.left - i.left
                                }
                            }
                        },
                        offsetParent: function() {
                            return this.map(function() {
                                for (var t = this.offsetParent || h.body; t && !y.test(t.nodeName) && "static" == r(t).css("position");) t = t.offsetParent;
                                return t
                            })
                        }
                    }, r.fn.detach = r.fn.remove, ["width", "height"].forEach(function(t) {
                        var n = t.replace(/./, function(t) {
                            return t[0].toUpperCase()
                        });
                        r.fn[t] = function(i) {
                            var a, o = this[0];
                            return i === e ? F(o) ? o["inner" + n] : M(o) ? o.documentElement["scroll" + n] : (a = this.offset()) && a[t] : this.each(function(e) {
                                (o = r(this)).css(t, q(this, i, e, o[t]()))
                            })
                        }
                    }), ["after", "prepend", "before", "append"].forEach(function(n, i) {
                        var a = i % 2;
                        r.fn[n] = function() {
                            var n, o, s = r.map(arguments, function(t) {
                                    var i = [];
                                    return "array" == (n = P(t)) ? (t.forEach(function(t) {
                                        return t.nodeType !== e ? i.push(t) : r.zepto.isZ(t) ? i = i.concat(t.get()) : void(i = i.concat(E.fragment(t)))
                                    }), i) : "object" == n || null == t ? t : E.fragment(t)
                                }),
                                l = this.length > 1;
                            return s.length < 1 ? this : this.each(function(e, n) {
                                o = a ? n : n.parentNode, n = 0 == i ? n.nextSibling : 1 == i ? n.firstChild : 2 == i ? n : null;
                                var u = r.contains(h.documentElement, o);
                                s.forEach(function(e) {
                                    if (l) e = e.cloneNode(!0);
                                    else if (!o) return r(e).remove();
                                    o.insertBefore(e, n), u && function t(e, n) {
                                        n(e);
                                        for (var r = 0, i = e.childNodes.length; r < i; r++) t(e.childNodes[r], n)
                                    }(e, function(e) {
                                        if (!(null == e.nodeName || "SCRIPT" !== e.nodeName.toUpperCase() || e.type && "text/javascript" !== e.type || e.src)) {
                                            var n = e.ownerDocument ? e.ownerDocument.defaultView : t;
                                            n.eval.call(n, e.innerHTML)
                                        }
                                    })
                                })
                            })
                        }, r.fn[a ? n + "To" : "insert" + (i ? "Before" : "After")] = function(t) {
                            return r(t)[n](this), this
                        }
                    }), E.Z.prototype = W.prototype = r.fn, E.uniq = o, E.deserializeValue = J, r.zepto = E, r
                }(), t.Zepto = e, void 0 === t.$ && (t.$ = e),
                    function(e) {
                        var n, r = 1,
                            i = Array.prototype.slice,
                            a = e.isFunction,
                            o = function(t) {
                                return "string" == typeof t
                            },
                            s = {},
                            l = {},
                            u = "onfocusin" in t,
                            c = {
                                focus: "focusin",
                                blur: "focusout"
                            },
                            h = {
                                mouseenter: "mouseover",
                                mouseleave: "mouseout"
                            };

                        function p(t) {
                            return t._zid || (t._zid = r++)
                        }

                        function f(t, e, n, r) {
                            if ((e = d(e)).ns) var i = (a = e.ns, new RegExp("(?:^| )" + a.replace(" ", " .* ?") + "(?: |$)"));
                            var a;
                            return (s[p(t)] || []).filter(function(t) {
                                return t && (!e.e || t.e == e.e) && (!e.ns || i.test(t.ns)) && (!n || p(t.fn) === p(n)) && (!r || t.sel == r)
                            })
                        }

                        function d(t) {
                            var e = ("" + t).split(".");
                            return {
                                e: e[0],
                                ns: e.slice(1).sort().join(" ")
                            }
                        }

                        function m(t, e) {
                            return t.del && !u && t.e in c || !!e
                        }

                        function g(t) {
                            return h[t] || u && c[t] || t
                        }

                        function v(t, r, i, a, o, l, u) {
                            var c = p(t),
                                f = s[c] || (s[c] = []);
                            r.split(/\s/).forEach(function(r) {
                                if ("ready" == r) return e(document).ready(i);
                                var s = d(r);
                                s.fn = i, s.sel = o, s.e in h && (i = function(t) {
                                    var n = t.relatedTarget;
                                    if (!n || n !== this && !e.contains(this, n)) return s.fn.apply(this, arguments)
                                }), s.del = l;
                                var c = l || i;
                                s.proxy = function(e) {
                                    if (!(e = S(e)).isImmediatePropagationStopped()) {
                                        e.data = a;
                                        var r = c.apply(t, e._args == n ? [e] : [e].concat(e._args));
                                        return !1 === r && (e.preventDefault(), e.stopPropagation()), r
                                    }
                                }, s.i = f.length, f.push(s), "addEventListener" in t && t.addEventListener(g(s.e), s.proxy, m(s, u))
                            })
                        }

                        function y(t, e, n, r, i) {
                            var a = p(t);
                            (e || "").split(/\s/).forEach(function(e) {
                                f(t, e, n, r).forEach(function(e) {
                                    delete s[a][e.i], "removeEventListener" in t && t.removeEventListener(g(e.e), e.proxy, m(e, i))
                                })
                            })
                        }
                        l.click = l.mousedown = l.mouseup = l.mousemove = "MouseEvents", e.event = {
                            add: v,
                            remove: y
                        }, e.proxy = function(t, n) {
                            var r = 2 in arguments && i.call(arguments, 2);
                            if (a(t)) {
                                var s = function() {
                                    return t.apply(n, r ? r.concat(i.call(arguments)) : arguments)
                                };
                                return s._zid = p(t), s
                            }
                            if (o(n)) return r ? (r.unshift(t[n], t), e.proxy.apply(null, r)) : e.proxy(t[n], t);
                            throw new TypeError("expected function")
                        }, e.fn.bind = function(t, e, n) {
                            return this.on(t, e, n)
                        }, e.fn.unbind = function(t, e) {
                            return this.off(t, e)
                        }, e.fn.one = function(t, e, n, r) {
                            return this.on(t, e, n, r, 1)
                        };
                        var b = function() {
                                return !0
                            },
                            w = function() {
                                return !1
                            },
                            C = /^([A-Z]|returnValue$|layer[XY]$|webkitMovement[XY]$)/,
                            _ = {
                                preventDefault: "isDefaultPrevented",
                                stopImmediatePropagation: "isImmediatePropagationStopped",
                                stopPropagation: "isPropagationStopped"
                            };

                        function S(t, r) {
                            return !r && t.isDefaultPrevented || (r || (r = t), e.each(_, function(e, n) {
                                var i = r[e];
                                t[e] = function() {
                                    return this[n] = b, i && i.apply(r, arguments)
                                }, t[n] = w
                            }), t.timeStamp || (t.timeStamp = Date.now()), (r.defaultPrevented !== n ? r.defaultPrevented : "returnValue" in r ? !1 === r.returnValue : r.getPreventDefault && r.getPreventDefault()) && (t.isDefaultPrevented = b)), t
                        }

                        function x(t) {
                            var e, r = {
                                originalEvent: t
                            };
                            for (e in t) C.test(e) || t[e] === n || (r[e] = t[e]);
                            return S(r, t)
                        }
                        e.fn.delegate = function(t, e, n) {
                            return this.on(e, t, n)
                        }, e.fn.undelegate = function(t, e, n) {
                            return this.off(e, t, n)
                        }, e.fn.live = function(t, n) {
                            return e(document.body).delegate(this.selector, t, n), this
                        }, e.fn.die = function(t, n) {
                            return e(document.body).undelegate(this.selector, t, n), this
                        }, e.fn.on = function(t, r, s, l, u) {
                            var c, h, p = this;
                            return t && !o(t) ? (e.each(t, function(t, e) {
                                p.on(t, r, s, e, u)
                            }), p) : (o(r) || a(l) || !1 === l || (l = s, s = r, r = n), l !== n && !1 !== s || (l = s, s = n), !1 === l && (l = w), p.each(function(n, a) {
                                u && (c = function(t) {
                                    return y(a, t.type, l), l.apply(this, arguments)
                                }), r && (h = function(t) {
                                    var n, o = e(t.target).closest(r, a).get(0);
                                    if (o && o !== a) return n = e.extend(x(t), {
                                        currentTarget: o,
                                        liveFired: a
                                    }), (c || l).apply(o, [n].concat(i.call(arguments, 1)))
                                }), v(a, t, l, s, r, h || c)
                            }))
                        }, e.fn.off = function(t, r, i) {
                            var s = this;
                            return t && !o(t) ? (e.each(t, function(t, e) {
                                s.off(t, r, e)
                            }), s) : (o(r) || a(i) || !1 === i || (i = r, r = n), !1 === i && (i = w), s.each(function() {
                                y(this, t, i, r)
                            }))
                        }, e.fn.trigger = function(t, n) {
                            return (t = o(t) || e.isPlainObject(t) ? e.Event(t) : S(t))._args = n, this.each(function() {
                                t.type in c && "function" == typeof this[t.type] ? this[t.type]() : "dispatchEvent" in this ? this.dispatchEvent(t) : e(this).triggerHandler(t, n)
                            })
                        }, e.fn.triggerHandler = function(t, n) {
                            var r, i;
                            return this.each(function(a, s) {
                                (r = x(o(t) ? e.Event(t) : t))._args = n, r.target = s, e.each(f(s, t.type || t), function(t, e) {
                                    if (i = e.proxy(r), r.isImmediatePropagationStopped()) return !1
                                })
                            }), i
                        }, "focusin focusout focus blur load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select keydown keypress keyup error".split(" ").forEach(function(t) {
                            e.fn[t] = function(e) {
                                return 0 in arguments ? this.bind(t, e) : this.trigger(t)
                            }
                        }), e.Event = function(t, e) {
                            o(t) || (t = (e = t).type);
                            var n = document.createEvent(l[t] || "Events"),
                                r = !0;
                            if (e)
                                for (var i in e) "bubbles" == i ? r = !!e[i] : n[i] = e[i];
                            return n.initEvent(t, r, !0), S(n)
                        }
                    }(e),
                    function(e) {
                        var n, r, i = +new Date,
                            a = t.document,
                            o = /<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,
                            s = /^(?:text|application)\/javascript/i,
                            l = /^(?:text|application)\/xml/i,
                            u = "application/json",
                            c = "text/html",
                            h = /^\s*$/,
                            p = a.createElement("a");

                        function f(t, n, r, i) {
                            if (t.global) return function(t, n, r) {
                                var i = e.Event(n);
                                return e(t).trigger(i, r), !i.isDefaultPrevented()
                            }(n || a, r, i)
                        }

                        function d(t, e) {
                            var n = e.context;
                            if (!1 === e.beforeSend.call(n, t, e) || !1 === f(e, n, "ajaxBeforeSend", [t, e])) return !1;
                            f(e, n, "ajaxSend", [t, e])
                        }

                        function m(t, e, n, r) {
                            var i = n.context;
                            n.success.call(i, t, "success", e), r && r.resolveWith(i, [t, "success", e]), f(n, i, "ajaxSuccess", [e, n, t]), v("success", e, n)
                        }

                        function g(t, e, n, r, i) {
                            var a = r.context;
                            r.error.call(a, n, e, t), i && i.rejectWith(a, [n, e, t]), f(r, a, "ajaxError", [n, r, t || e]), v(e, n, r)
                        }

                        function v(t, n, r) {
                            var i = r.context;
                            r.complete.call(i, n, t), f(r, i, "ajaxComplete", [n, r]),
                                function(t) {
                                    t.global && !--e.active && f(t, null, "ajaxStop")
                                }(r)
                        }

                        function y() {}

                        function b(t, e) {
                            return "" == e ? t : (t + "&" + e).replace(/[&?]{1,2}/, "?")
                        }

                        function w(t, n, r, i) {
                            return e.isFunction(n) && (i = r, r = n, n = void 0), e.isFunction(r) || (i = r, r = void 0), {
                                url: t,
                                data: n,
                                success: r,
                                dataType: i
                            }
                        }
                        p.href = t.location.href, e.active = 0, e.ajaxJSONP = function(n, r) {
                            if (!("type" in n)) return e.ajax(n);
                            var o, s, l = n.jsonpCallback,
                                u = (e.isFunction(l) ? l() : l) || "Zepto" + i++,
                                c = a.createElement("script"),
                                h = t[u],
                                p = function(t) {
                                    e(c).triggerHandler("error", t || "abort")
                                },
                                f = {
                                    abort: p
                                };
                            return r && r.promise(f), e(c).on("load error", function(i, a) {
                                clearTimeout(s), e(c).off().remove(), "error" != i.type && o ? m(o[0], f, n, r) : g(null, a || "error", f, n, r), t[u] = h, o && e.isFunction(h) && h(o[0]), h = o = void 0
                            }), !1 === d(f, n) ? (p("abort"), f) : (t[u] = function() {
                                o = arguments
                            }, c.src = n.url.replace(/\?(.+)=\?/, "?$1=" + u), a.head.appendChild(c), n.timeout > 0 && (s = setTimeout(function() {
                                p("timeout")
                            }, n.timeout)), f)
                        }, e.ajaxSettings = {
                            type: "GET",
                            beforeSend: y,
                            success: y,
                            error: y,
                            complete: y,
                            context: null,
                            global: !0,
                            xhr: function() {
                                return new t.XMLHttpRequest
                            },
                            accepts: {
                                script: "text/javascript, application/javascript, application/x-javascript",
                                json: u,
                                xml: "application/xml, text/xml",
                                html: c,
                                text: "text/plain"
                            },
                            crossDomain: !1,
                            timeout: 0,
                            processData: !0,
                            cache: !0,
                            dataFilter: y
                        }, e.ajax = function(i) {
                            var o, v, w = e.extend({}, i || {}),
                                C = e.Deferred && e.Deferred();
                            for (n in e.ajaxSettings) void 0 === w[n] && (w[n] = e.ajaxSettings[n]);
                            ! function(t) {
                                t.global && 0 == e.active++ && f(t, null, "ajaxStart")
                            }(w), w.crossDomain || ((o = a.createElement("a")).href = w.url, o.href = o.href, w.crossDomain = p.protocol + "//" + p.host != o.protocol + "//" + o.host), w.url || (w.url = t.location.toString()), (v = w.url.indexOf("#")) > -1 && (w.url = w.url.slice(0, v)),
                                function(t) {
                                    t.processData && t.data && "string" != e.type(t.data) && (t.data = e.param(t.data, t.traditional)), !t.data || t.type && "GET" != t.type.toUpperCase() && "jsonp" != t.dataType || (t.url = b(t.url, t.data), t.data = void 0)
                                }(w);
                            var _ = w.dataType,
                                S = /\?.+=\?/.test(w.url);
                            if (S && (_ = "jsonp"), !1 !== w.cache && (i && !0 === i.cache || "script" != _ && "jsonp" != _) || (w.url = b(w.url, "_=" + Date.now())), "jsonp" == _) return S || (w.url = b(w.url, w.jsonp ? w.jsonp + "=?" : !1 === w.jsonp ? "" : "callback=?")), e.ajaxJSONP(w, C);
                            var x, k = w.accepts[_],
                                T = {},
                                O = function(t, e) {
                                    T[t.toLowerCase()] = [t, e]
                                },
                                E = /^([\w-]+:)\/\//.test(w.url) ? RegExp.$1 : t.location.protocol,
                                A = w.xhr(),
                                N = A.setRequestHeader;
                            if (C && C.promise(A), w.crossDomain || O("X-Requested-With", "XMLHttpRequest"), O("Accept", k || "*/*"), (k = w.mimeType || k) && (k.indexOf(",") > -1 && (k = k.split(",", 2)[0]), A.overrideMimeType && A.overrideMimeType(k)), (w.contentType || !1 !== w.contentType && w.data && "GET" != w.type.toUpperCase()) && O("Content-Type", w.contentType || "application/x-www-form-urlencoded"), w.headers)
                                for (r in w.headers) O(r, w.headers[r]);
                            if (A.setRequestHeader = O, A.onreadystatechange = function() {
                                    if (4 == A.readyState) {
                                        A.onreadystatechange = y, clearTimeout(x);
                                        var t, n = !1;
                                        if (A.status >= 200 && A.status < 300 || 304 == A.status || 0 == A.status && "file:" == E) {
                                            if (_ = _ || ((r = w.mimeType || A.getResponseHeader("content-type")) && (r = r.split(";", 2)[0]), r && (r == c ? "html" : r == u ? "json" : s.test(r) ? "script" : l.test(r) && "xml") || "text"), "arraybuffer" == A.responseType || "blob" == A.responseType) t = A.response;
                                            else {
                                                t = A.responseText;
                                                try {
                                                    t = function(t, e, n) {
                                                        if (n.dataFilter == y) return t;
                                                        var r = n.context;
                                                        return n.dataFilter.call(r, t, e)
                                                    }(t, _, w), "script" == _ ? (0, eval)(t) : "xml" == _ ? t = A.responseXML : "json" == _ && (t = h.test(t) ? null : e.parseJSON(t))
                                                } catch (t) {
                                                    n = t
                                                }
                                                if (n) return g(n, "parsererror", A, w, C)
                                            }
                                            m(t, A, w, C)
                                        } else g(A.statusText || null, A.status ? "error" : "abort", A, w, C)
                                    }
                                    var r
                                }, !1 === d(A, w)) return A.abort(), g(null, "abort", A, w, C), A;
                            var I = !("async" in w) || w.async;
                            if (A.open(w.type, w.url, I, w.username, w.password), w.xhrFields)
                                for (r in w.xhrFields) A[r] = w.xhrFields[r];
                            for (r in T) N.apply(A, T[r]);
                            return w.timeout > 0 && (x = setTimeout(function() {
                                A.onreadystatechange = y, A.abort(), g(null, "timeout", A, w, C)
                            }, w.timeout)), A.send(w.data ? w.data : null), A
                        }, e.get = function() {
                            return e.ajax(w.apply(null, arguments))
                        }, e.post = function() {
                            var t = w.apply(null, arguments);
                            return t.type = "POST", e.ajax(t)
                        }, e.getJSON = function() {
                            var t = w.apply(null, arguments);
                            return t.dataType = "json", e.ajax(t)
                        }, e.fn.load = function(t, n, r) {
                            if (!this.length) return this;
                            var i, a = this,
                                s = t.split(/\s/),
                                l = w(t, n, r),
                                u = l.success;
                            return s.length > 1 && (l.url = s[0], i = s[1]), l.success = function(t) {
                                a.html(i ? e("<div>").html(t.replace(o, "")).find(i) : t), u && u.apply(a, arguments)
                            }, e.ajax(l), this
                        };
                        var C = encodeURIComponent;
                        e.param = function(t, n) {
                            var r = [];
                            return r.add = function(t, n) {
                                e.isFunction(n) && (n = n()), null == n && (n = ""), this.push(C(t) + "=" + C(n))
                            },
                                function t(n, r, i, a) {
                                    var o, s = e.isArray(r),
                                        l = e.isPlainObject(r);
                                    e.each(r, function(r, u) {
                                        o = e.type(u), a && (r = i ? a : a + "[" + (l || "object" == o || "array" == o ? r : "") + "]"), !a && s ? n.add(u.name, u.value) : "array" == o || !i && "object" == o ? t(n, u, i, r) : n.add(r, u)
                                    })
                                }(r, t, n), r.join("&").replace(/%20/g, "+")
                        }
                    }(e), (n = e).fn.serializeArray = function() {
                    var t, e, r = [],
                        i = function(e) {
                            if (e.forEach) return e.forEach(i);
                            r.push({
                                name: t,
                                value: e
                            })
                        };
                    return this[0] && n.each(this[0].elements, function(r, a) {
                        e = a.type, (t = a.name) && "fieldset" != a.nodeName.toLowerCase() && !a.disabled && "submit" != e && "reset" != e && "button" != e && "file" != e && ("radio" != e && "checkbox" != e || a.checked) && i(n(a).val())
                    }), r
                }, n.fn.serialize = function() {
                    var t = [];
                    return this.serializeArray().forEach(function(e) {
                        t.push(encodeURIComponent(e.name) + "=" + encodeURIComponent(e.value))
                    }), t.join("&")
                }, n.fn.submit = function(t) {
                    if (0 in arguments) this.bind("submit", t);
                    else if (this.length) {
                        var e = n.Event("submit");
                        this.eq(0).trigger(e), e.isDefaultPrevented() || this.get(0).submit()
                    }
                    return this
                },
                    function() {
                        try {
                            getComputedStyle(void 0)
                        } catch (n) {
                            var e = getComputedStyle;
                            t.getComputedStyle = function(t, n) {
                                try {
                                    return e(t, n)
                                } catch (t) {
                                    return null
                                }
                            }
                        }
                    }(), e;
                var t, e, n
            }.call(e, n, e, t)) || (t.exports = r)
        }).call(window)
    },
    function(t, e, n) {
        "use strict";
        var r = n(36),
            i = n(40),
            a = [].slice,
            o = ["keyword", "gray", "hex"],
            s = {};
        Object.keys(i).forEach(function(t) {
            s[a.call(i[t].labels).sort().join("")] = t
        });
        var l = {};

        function u(t, e) {
            if (!(this instanceof u)) return new u(t, e);
            if (e && e in o && (e = null), e && !(e in i)) throw new Error("Unknown model: " + e);
            var n, c;
            if (null == t) this.model = "rgb", this.color = [0, 0, 0], this.valpha = 1;
            else if (t instanceof u) this.model = t.model, this.color = t.color.slice(), this.valpha = t.valpha;
            else if ("string" == typeof t) {
                var h = r.get(t);
                if (null === h) throw new Error("Unable to parse color from string: " + t);
                this.model = h.model, c = i[this.model].channels, this.color = h.value.slice(0, c), this.valpha = "number" == typeof h.value[c] ? h.value[c] : 1
            } else if (t.length) {
                this.model = e || "rgb", c = i[this.model].channels;
                var f = a.call(t, 0, c);
                this.color = p(f, c), this.valpha = "number" == typeof t[c] ? t[c] : 1
            } else if ("number" == typeof t) t &= 16777215, this.model = "rgb", this.color = [t >> 16 & 255, t >> 8 & 255, 255 & t], this.valpha = 1;
            else {
                this.valpha = 1;
                var d = Object.keys(t);
                "alpha" in t && (d.splice(d.indexOf("alpha"), 1), this.valpha = "number" == typeof t.alpha ? t.alpha : 0);
                var m = d.sort().join("");
                if (!(m in s)) throw new Error("Unable to parse color from object: " + JSON.stringify(t));
                this.model = s[m];
                var g = i[this.model].labels,
                    v = [];
                for (n = 0; n < g.length; n++) v.push(t[g[n]]);
                this.color = p(v)
            } if (l[this.model])
                for (c = i[this.model].channels, n = 0; n < c; n++) {
                    var y = l[this.model][n];
                    y && (this.color[n] = y(this.color[n]))
                }
            this.valpha = Math.max(0, Math.min(1, this.valpha)), Object.freeze && Object.freeze(this)
        }

        function c(t, e, n) {
            return (t = Array.isArray(t) ? t : [t]).forEach(function(t) {
                (l[t] || (l[t] = []))[e] = n
            }), t = t[0],
                function(r) {
                    var i;
                    return arguments.length ? (n && (r = n(r)), (i = this[t]()).color[e] = r, i) : (i = this[t]().color[e], n && (i = n(i)), i)
                }
        }

        function h(t) {
            return function(e) {
                return Math.max(0, Math.min(t, e))
            }
        }

        function p(t, e) {
            for (var n = 0; n < e; n++) "number" != typeof t[n] && (t[n] = 0);
            return t
        }
        u.prototype = {
            toString: function() {
                return this.string()
            },
            toJSON: function() {
                return this[this.model]()
            },
            string: function(t) {
                var e = this.model in r.to ? this : this.rgb(),
                    n = 1 === (e = e.round("number" == typeof t ? t : 1)).valpha ? e.color : e.color.concat(this.valpha);
                return r.to[e.model](n)
            },
            percentString: function(t) {
                var e = this.rgb().round("number" == typeof t ? t : 1),
                    n = 1 === e.valpha ? e.color : e.color.concat(this.valpha);
                return r.to.rgb.percent(n)
            },
            array: function() {
                return 1 === this.valpha ? this.color.slice() : this.color.concat(this.valpha)
            },
            object: function() {
                for (var t = {}, e = i[this.model].channels, n = i[this.model].labels, r = 0; r < e; r++) t[n[r]] = this.color[r];
                return 1 !== this.valpha && (t.alpha = this.valpha), t
            },
            unitArray: function() {
                var t = this.rgb().color;
                return t[0] /= 255, t[1] /= 255, t[2] /= 255, 1 !== this.valpha && t.push(this.valpha), t
            },
            unitObject: function() {
                var t = this.rgb().object();
                return t.r /= 255, t.g /= 255, t.b /= 255, 1 !== this.valpha && (t.alpha = this.valpha), t
            },
            round: function(t) {
                return t = Math.max(t || 0, 0), new u(this.color.map(function(t) {
                    return function(e) {
                        return function(t, e) {
                            return Number(t.toFixed(e))
                        }(e, t)
                    }
                }(t)).concat(this.valpha), this.model)
            },
            alpha: function(t) {
                return arguments.length ? new u(this.color.concat(Math.max(0, Math.min(1, t))), this.model) : this.valpha
            },
            red: c("rgb", 0, h(255)),
            green: c("rgb", 1, h(255)),
            blue: c("rgb", 2, h(255)),
            hue: c(["hsl", "hsv", "hsl", "hwb", "hcg"], 0, function(t) {
                return (t % 360 + 360) % 360
            }),
            saturationl: c("hsl", 1, h(100)),
            lightness: c("hsl", 2, h(100)),
            saturationv: c("hsv", 1, h(100)),
            value: c("hsv", 2, h(100)),
            chroma: c("hcg", 1, h(100)),
            gray: c("hcg", 2, h(100)),
            white: c("hwb", 1, h(100)),
            wblack: c("hwb", 2, h(100)),
            cyan: c("cmyk", 0, h(100)),
            magenta: c("cmyk", 1, h(100)),
            yellow: c("cmyk", 2, h(100)),
            black: c("cmyk", 3, h(100)),
            x: c("xyz", 0, h(100)),
            y: c("xyz", 1, h(100)),
            z: c("xyz", 2, h(100)),
            l: c("lab", 0, h(100)),
            a: c("lab", 1),
            b: c("lab", 2),
            keyword: function(t) {
                return arguments.length ? new u(t) : i[this.model].keyword(this.color)
            },
            hex: function(t) {
                return arguments.length ? new u(t) : r.to.hex(this.rgb().round().color)
            },
            rgbNumber: function() {
                var t = this.rgb().color;
                return (255 & t[0]) << 16 | (255 & t[1]) << 8 | 255 & t[2]
            },
            luminosity: function() {
                for (var t = this.rgb().color, e = [], n = 0; n < t.length; n++) {
                    var r = t[n] / 255;
                    e[n] = r <= .03928 ? r / 12.92 : Math.pow((r + .055) / 1.055, 2.4)
                }
                return .2126 * e[0] + .7152 * e[1] + .0722 * e[2]
            },
            contrast: function(t) {
                var e = this.luminosity(),
                    n = t.luminosity();
                return e > n ? (e + .05) / (n + .05) : (n + .05) / (e + .05)
            },
            level: function(t) {
                var e = this.contrast(t);
                return e >= 7.1 ? "AAA" : e >= 4.5 ? "AA" : ""
            },
            isDark: function() {
                var t = this.rgb().color;
                return (299 * t[0] + 587 * t[1] + 114 * t[2]) / 1e3 < 128
            },
            isLight: function() {
                return !this.isDark()
            },
            negate: function() {
                for (var t = this.rgb(), e = 0; e < 3; e++) t.color[e] = 255 - t.color[e];
                return t
            },
            lighten: function(t) {
                var e = this.hsl();
                return e.color[2] += e.color[2] * t, e
            },
            darken: function(t) {
                var e = this.hsl();
                return e.color[2] -= e.color[2] * t, e
            },
            saturate: function(t) {
                var e = this.hsl();
                return e.color[1] += e.color[1] * t, e
            },
            desaturate: function(t) {
                var e = this.hsl();
                return e.color[1] -= e.color[1] * t, e
            },
            whiten: function(t) {
                var e = this.hwb();
                return e.color[1] += e.color[1] * t, e
            },
            blacken: function(t) {
                var e = this.hwb();
                return e.color[2] += e.color[2] * t, e
            },
            grayscale: function() {
                var t = this.rgb().color,
                    e = .3 * t[0] + .59 * t[1] + .11 * t[2];
                return u.rgb(e, e, e)
            },
            fade: function(t) {
                return this.alpha(this.valpha - this.valpha * t)
            },
            opaquer: function(t) {
                return this.alpha(this.valpha + this.valpha * t)
            },
            rotate: function(t) {
                var e = this.hsl(),
                    n = e.color[0];
                return n = (n = (n + t) % 360) < 0 ? 360 + n : n, e.color[0] = n, e
            },
            mix: function(t, e) {
                if (!t || !t.rgb) throw new Error('Argument to "mix" was not a Color instance, but rather an instance of ' + typeof t);
                var n = t.rgb(),
                    r = this.rgb(),
                    i = void 0 === e ? .5 : e,
                    a = 2 * i - 1,
                    o = n.alpha() - r.alpha(),
                    s = ((a * o == -1 ? a : (a + o) / (1 + a * o)) + 1) / 2,
                    l = 1 - s;
                return u.rgb(s * n.red() + l * r.red(), s * n.green() + l * r.green(), s * n.blue() + l * r.blue(), n.alpha() * i + r.alpha() * (1 - i))
            }
        }, Object.keys(i).forEach(function(t) {
            if (-1 === o.indexOf(t)) {
                var e = i[t].channels;
                u.prototype[t] = function() {
                    if (this.model === t) return new u(this);
                    if (arguments.length) return new u(arguments, t);
                    var n, r = "number" == typeof arguments[e] ? e : this.valpha;
                    return new u((n = i[this.model][t].raw(this.color), Array.isArray(n) ? n : [n]).concat(r), t)
                }, u[t] = function(n) {
                    return "number" == typeof n && (n = p(a.call(arguments), e)), new u(n, t)
                }
            }
        }), t.exports = u
    },
    function(t, e) {
        t.exports = function(t) {
            var e = typeof t;
            return null != t && ("object" == e || "function" == e)
        }
    },
    function(t, e, n) {
        var r, i;
        /*!
         * JavaScript Cookie v2.2.1
         * https://github.com/js-cookie/js-cookie
         *
         * Copyright 2006, 2015 Klaus Hartl & Fagner Brack
         * Released under the MIT license
         */
        ! function(a) {
            if (void 0 === (i = "function" == typeof(r = a) ? r.call(e, n, e, t) : r) || (t.exports = i), !0, t.exports = a(), !!0) {
                var o = window.Cookies,
                    s = window.Cookies = a();
                s.noConflict = function() {
                    return window.Cookies = o, s
                }
            }
        }(function() {
            function t() {
                for (var t = 0, e = {}; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var r in n) e[r] = n[r]
                }
                return e
            }

            function e(t) {
                return t.replace(/(%[0-9A-Z]{2})+/g, decodeURIComponent)
            }
            return function n(r) {
                function i() {}

                function a(e, n, a) {
                    if ("undefined" != typeof document) {
                        "number" == typeof(a = t({
                            path: "/"
                        }, i.defaults, a)).expires && (a.expires = new Date(1 * new Date + 864e5 * a.expires)), a.expires = a.expires ? a.expires.toUTCString() : "";
                        try {
                            var o = JSON.stringify(n);
                            /^[\{\[]/.test(o) && (n = o)
                        } catch (t) {}
                        n = r.write ? r.write(n, e) : encodeURIComponent(String(n)).replace(/%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g, decodeURIComponent), e = encodeURIComponent(String(e)).replace(/%(23|24|26|2B|5E|60|7C)/g, decodeURIComponent).replace(/[\(\)]/g, escape);
                        var s = "";
                        for (var l in a) a[l] && (s += "; " + l, !0 !== a[l] && (s += "=" + a[l].split(";")[0]));
                        return document.cookie = e + "=" + n + s
                    }
                }

                function o(t, n) {
                    if ("undefined" != typeof document) {
                        for (var i = {}, a = document.cookie ? document.cookie.split("; ") : [], o = 0; o < a.length; o++) {
                            var s = a[o].split("="),
                                l = s.slice(1).join("=");
                            n || '"' !== l.charAt(0) || (l = l.slice(1, -1));
                            try {
                                var u = e(s[0]);
                                if (l = (r.read || r)(l, u) || e(l), n) try {
                                    l = JSON.parse(l)
                                } catch (t) {}
                                if (i[u] = l, t === u) break
                            } catch (t) {}
                        }
                        return t ? i[t] : i
                    }
                }
                return i.set = a, i.get = function(t) {
                    return o(t, !1)
                }, i.getJSON = function(t) {
                    return o(t, !0)
                }, i.remove = function(e, n) {
                    a(e, "", t(n, {
                        expires: -1
                    }))
                }, i.defaults = {}, i.withConverter = n, i
            }(function() {})
        })
    },
    function(t, e, n) {
        var r = n(21),
            i = "object" == typeof self && self && self.Object === Object && self,
            a = r || i || Function("return this")();
        t.exports = a
    },
    function(t, e, n) {
        var r = n(8).Symbol;
        t.exports = r
    },
    function(t, e, n) {
        var r = n(41),
            i = {};
        for (var a in r) r.hasOwnProperty(a) && (i[r[a]] = a);
        var o = t.exports = {
            rgb: {
                channels: 3,
                labels: "rgb"
            },
            hsl: {
                channels: 3,
                labels: "hsl"
            },
            hsv: {
                channels: 3,
                labels: "hsv"
            },
            hwb: {
                channels: 3,
                labels: "hwb"
            },
            cmyk: {
                channels: 4,
                labels: "cmyk"
            },
            xyz: {
                channels: 3,
                labels: "xyz"
            },
            lab: {
                channels: 3,
                labels: "lab"
            },
            lch: {
                channels: 3,
                labels: "lch"
            },
            hex: {
                channels: 1,
                labels: ["hex"]
            },
            keyword: {
                channels: 1,
                labels: ["keyword"]
            },
            ansi16: {
                channels: 1,
                labels: ["ansi16"]
            },
            ansi256: {
                channels: 1,
                labels: ["ansi256"]
            },
            hcg: {
                channels: 3,
                labels: ["h", "c", "g"]
            },
            apple: {
                channels: 3,
                labels: ["r16", "g16", "b16"]
            },
            gray: {
                channels: 1,
                labels: ["gray"]
            }
        };
        for (var s in o)
            if (o.hasOwnProperty(s)) {
                if (!("channels" in o[s])) throw new Error("missing channels property: " + s);
                if (!("labels" in o[s])) throw new Error("missing channel labels property: " + s);
                if (o[s].labels.length !== o[s].channels) throw new Error("channel and label counts mismatch: " + s);
                var l = o[s].channels,
                    u = o[s].labels;
                delete o[s].channels, delete o[s].labels, Object.defineProperty(o[s], "channels", {
                    value: l
                }), Object.defineProperty(o[s], "labels", {
                    value: u
                })
            }
        o.rgb.hsl = function(t) {
            var e, n, r = t[0] / 255,
                i = t[1] / 255,
                a = t[2] / 255,
                o = Math.min(r, i, a),
                s = Math.max(r, i, a),
                l = s - o;
            return s === o ? e = 0 : r === s ? e = (i - a) / l : i === s ? e = 2 + (a - r) / l : a === s && (e = 4 + (r - i) / l), (e = Math.min(60 * e, 360)) < 0 && (e += 360), n = (o + s) / 2, [e, 100 * (s === o ? 0 : n <= .5 ? l / (s + o) : l / (2 - s - o)), 100 * n]
        }, o.rgb.hsv = function(t) {
            var e, n, r, i, a, o = t[0] / 255,
                s = t[1] / 255,
                l = t[2] / 255,
                u = Math.max(o, s, l),
                c = u - Math.min(o, s, l),
                h = function(t) {
                    return (u - t) / 6 / c + .5
                };
            return 0 === c ? i = a = 0 : (a = c / u, e = h(o), n = h(s), r = h(l), o === u ? i = r - n : s === u ? i = 1 / 3 + e - r : l === u && (i = 2 / 3 + n - e), i < 0 ? i += 1 : i > 1 && (i -= 1)), [360 * i, 100 * a, 100 * u]
        }, o.rgb.hwb = function(t) {
            var e = t[0],
                n = t[1],
                r = t[2];
            return [o.rgb.hsl(t)[0], 100 * (1 / 255 * Math.min(e, Math.min(n, r))), 100 * (r = 1 - 1 / 255 * Math.max(e, Math.max(n, r)))]
        }, o.rgb.cmyk = function(t) {
            var e, n = t[0] / 255,
                r = t[1] / 255,
                i = t[2] / 255;
            return [100 * ((1 - n - (e = Math.min(1 - n, 1 - r, 1 - i))) / (1 - e) || 0), 100 * ((1 - r - e) / (1 - e) || 0), 100 * ((1 - i - e) / (1 - e) || 0), 100 * e]
        }, o.rgb.keyword = function(t) {
            var e = i[t];
            if (e) return e;
            var n, a, o, s = 1 / 0;
            for (var l in r)
                if (r.hasOwnProperty(l)) {
                    var u = r[l],
                        c = (a = t, o = u, Math.pow(a[0] - o[0], 2) + Math.pow(a[1] - o[1], 2) + Math.pow(a[2] - o[2], 2));
                    c < s && (s = c, n = l)
                }
            return n
        }, o.keyword.rgb = function(t) {
            return r[t]
        }, o.rgb.xyz = function(t) {
            var e = t[0] / 255,
                n = t[1] / 255,
                r = t[2] / 255;
            return [100 * (.4124 * (e = e > .04045 ? Math.pow((e + .055) / 1.055, 2.4) : e / 12.92) + .3576 * (n = n > .04045 ? Math.pow((n + .055) / 1.055, 2.4) : n / 12.92) + .1805 * (r = r > .04045 ? Math.pow((r + .055) / 1.055, 2.4) : r / 12.92)), 100 * (.2126 * e + .7152 * n + .0722 * r), 100 * (.0193 * e + .1192 * n + .9505 * r)]
        }, o.rgb.lab = function(t) {
            var e = o.rgb.xyz(t),
                n = e[0],
                r = e[1],
                i = e[2];
            return r /= 100, i /= 108.883, n = (n /= 95.047) > .008856 ? Math.pow(n, 1 / 3) : 7.787 * n + 16 / 116, [116 * (r = r > .008856 ? Math.pow(r, 1 / 3) : 7.787 * r + 16 / 116) - 16, 500 * (n - r), 200 * (r - (i = i > .008856 ? Math.pow(i, 1 / 3) : 7.787 * i + 16 / 116))]
        }, o.hsl.rgb = function(t) {
            var e, n, r, i, a, o = t[0] / 360,
                s = t[1] / 100,
                l = t[2] / 100;
            if (0 === s) return [a = 255 * l, a, a];
            e = 2 * l - (n = l < .5 ? l * (1 + s) : l + s - l * s), i = [0, 0, 0];
            for (var u = 0; u < 3; u++)(r = o + 1 / 3 * -(u - 1)) < 0 && r++, r > 1 && r--, a = 6 * r < 1 ? e + 6 * (n - e) * r : 2 * r < 1 ? n : 3 * r < 2 ? e + (n - e) * (2 / 3 - r) * 6 : e, i[u] = 255 * a;
            return i
        }, o.hsl.hsv = function(t) {
            var e = t[0],
                n = t[1] / 100,
                r = t[2] / 100,
                i = n,
                a = Math.max(r, .01);
            return n *= (r *= 2) <= 1 ? r : 2 - r, i *= a <= 1 ? a : 2 - a, [e, 100 * (0 === r ? 2 * i / (a + i) : 2 * n / (r + n)), 100 * ((r + n) / 2)]
        }, o.hsv.rgb = function(t) {
            var e = t[0] / 60,
                n = t[1] / 100,
                r = t[2] / 100,
                i = Math.floor(e) % 6,
                a = e - Math.floor(e),
                o = 255 * r * (1 - n),
                s = 255 * r * (1 - n * a),
                l = 255 * r * (1 - n * (1 - a));
            switch (r *= 255, i) {
                case 0:
                    return [r, l, o];
                case 1:
                    return [s, r, o];
                case 2:
                    return [o, r, l];
                case 3:
                    return [o, s, r];
                case 4:
                    return [l, o, r];
                case 5:
                    return [r, o, s]
            }
        }, o.hsv.hsl = function(t) {
            var e, n, r, i = t[0],
                a = t[1] / 100,
                o = t[2] / 100,
                s = Math.max(o, .01);
            return r = (2 - a) * o, n = a * s, [i, 100 * (n = (n /= (e = (2 - a) * s) <= 1 ? e : 2 - e) || 0), 100 * (r /= 2)]
        }, o.hwb.rgb = function(t) {
            var e, n, r, i, a, o, s, l = t[0] / 360,
                u = t[1] / 100,
                c = t[2] / 100,
                h = u + c;
            switch (h > 1 && (u /= h, c /= h), r = 6 * l - (e = Math.floor(6 * l)), 0 != (1 & e) && (r = 1 - r), i = u + r * ((n = 1 - c) - u), e) {
                default:
                case 6:
                case 0:
                    a = n,
                        o = i,
                        s = u;
                    break;
                case 1:
                    a = i, o = n, s = u;
                    break;
                case 2:
                    a = u, o = n, s = i;
                    break;
                case 3:
                    a = u, o = i, s = n;
                    break;
                case 4:
                    a = i, o = u, s = n;
                    break;
                case 5:
                    a = n, o = u, s = i
            }
            return [255 * a, 255 * o, 255 * s]
        }, o.cmyk.rgb = function(t) {
            var e = t[0] / 100,
                n = t[1] / 100,
                r = t[2] / 100,
                i = t[3] / 100;
            return [255 * (1 - Math.min(1, e * (1 - i) + i)), 255 * (1 - Math.min(1, n * (1 - i) + i)), 255 * (1 - Math.min(1, r * (1 - i) + i))]
        }, o.xyz.rgb = function(t) {
            var e, n, r, i = t[0] / 100,
                a = t[1] / 100,
                o = t[2] / 100;
            return n = -.9689 * i + 1.8758 * a + .0415 * o, r = .0557 * i + -.204 * a + 1.057 * o, e = (e = 3.2406 * i + -1.5372 * a + -.4986 * o) > .0031308 ? 1.055 * Math.pow(e, 1 / 2.4) - .055 : 12.92 * e, n = n > .0031308 ? 1.055 * Math.pow(n, 1 / 2.4) - .055 : 12.92 * n, r = r > .0031308 ? 1.055 * Math.pow(r, 1 / 2.4) - .055 : 12.92 * r, [255 * (e = Math.min(Math.max(0, e), 1)), 255 * (n = Math.min(Math.max(0, n), 1)), 255 * (r = Math.min(Math.max(0, r), 1))]
        }, o.xyz.lab = function(t) {
            var e = t[0],
                n = t[1],
                r = t[2];
            return n /= 100, r /= 108.883, e = (e /= 95.047) > .008856 ? Math.pow(e, 1 / 3) : 7.787 * e + 16 / 116, [116 * (n = n > .008856 ? Math.pow(n, 1 / 3) : 7.787 * n + 16 / 116) - 16, 500 * (e - n), 200 * (n - (r = r > .008856 ? Math.pow(r, 1 / 3) : 7.787 * r + 16 / 116))]
        }, o.lab.xyz = function(t) {
            var e, n, r, i = t[0];
            e = t[1] / 500 + (n = (i + 16) / 116), r = n - t[2] / 200;
            var a = Math.pow(n, 3),
                o = Math.pow(e, 3),
                s = Math.pow(r, 3);
            return n = a > .008856 ? a : (n - 16 / 116) / 7.787, e = o > .008856 ? o : (e - 16 / 116) / 7.787, r = s > .008856 ? s : (r - 16 / 116) / 7.787, [e *= 95.047, n *= 100, r *= 108.883]
        }, o.lab.lch = function(t) {
            var e, n = t[0],
                r = t[1],
                i = t[2];
            return (e = 360 * Math.atan2(i, r) / 2 / Math.PI) < 0 && (e += 360), [n, Math.sqrt(r * r + i * i), e]
        }, o.lch.lab = function(t) {
            var e, n = t[0],
                r = t[1];
            return e = t[2] / 360 * 2 * Math.PI, [n, r * Math.cos(e), r * Math.sin(e)]
        }, o.rgb.ansi16 = function(t) {
            var e = t[0],
                n = t[1],
                r = t[2],
                i = 1 in arguments ? arguments[1] : o.rgb.hsv(t)[2];
            if (0 === (i = Math.round(i / 50))) return 30;
            var a = 30 + (Math.round(r / 255) << 2 | Math.round(n / 255) << 1 | Math.round(e / 255));
            return 2 === i && (a += 60), a
        }, o.hsv.ansi16 = function(t) {
            return o.rgb.ansi16(o.hsv.rgb(t), t[2])
        }, o.rgb.ansi256 = function(t) {
            var e = t[0],
                n = t[1],
                r = t[2];
            return e === n && n === r ? e < 8 ? 16 : e > 248 ? 231 : Math.round((e - 8) / 247 * 24) + 232 : 16 + 36 * Math.round(e / 255 * 5) + 6 * Math.round(n / 255 * 5) + Math.round(r / 255 * 5)
        }, o.ansi16.rgb = function(t) {
            var e = t % 10;
            if (0 === e || 7 === e) return t > 50 && (e += 3.5), [e = e / 10.5 * 255, e, e];
            var n = .5 * (1 + ~~(t > 50));
            return [(1 & e) * n * 255, (e >> 1 & 1) * n * 255, (e >> 2 & 1) * n * 255]
        }, o.ansi256.rgb = function(t) {
            if (t >= 232) {
                var e = 10 * (t - 232) + 8;
                return [e, e, e]
            }
            var n;
            return t -= 16, [Math.floor(t / 36) / 5 * 255, Math.floor((n = t % 36) / 6) / 5 * 255, n % 6 / 5 * 255]
        }, o.rgb.hex = function(t) {
            var e = (((255 & Math.round(t[0])) << 16) + ((255 & Math.round(t[1])) << 8) + (255 & Math.round(t[2]))).toString(16).toUpperCase();
            return "000000".substring(e.length) + e
        }, o.hex.rgb = function(t) {
            var e = t.toString(16).match(/[a-f0-9]{6}|[a-f0-9]{3}/i);
            if (!e) return [0, 0, 0];
            var n = e[0];
            3 === e[0].length && (n = n.split("").map(function(t) {
                return t + t
            }).join(""));
            var r = parseInt(n, 16);
            return [r >> 16 & 255, r >> 8 & 255, 255 & r]
        }, o.rgb.hcg = function(t) {
            var e, n = t[0] / 255,
                r = t[1] / 255,
                i = t[2] / 255,
                a = Math.max(Math.max(n, r), i),
                o = Math.min(Math.min(n, r), i),
                s = a - o;
            return e = s <= 0 ? 0 : a === n ? (r - i) / s % 6 : a === r ? 2 + (i - n) / s : 4 + (n - r) / s + 4, e /= 6, [360 * (e %= 1), 100 * s, 100 * (s < 1 ? o / (1 - s) : 0)]
        }, o.hsl.hcg = function(t) {
            var e = t[1] / 100,
                n = t[2] / 100,
                r = 1,
                i = 0;
            return (r = n < .5 ? 2 * e * n : 2 * e * (1 - n)) < 1 && (i = (n - .5 * r) / (1 - r)), [t[0], 100 * r, 100 * i]
        }, o.hsv.hcg = function(t) {
            var e = t[1] / 100,
                n = t[2] / 100,
                r = e * n,
                i = 0;
            return r < 1 && (i = (n - r) / (1 - r)), [t[0], 100 * r, 100 * i]
        }, o.hcg.rgb = function(t) {
            var e = t[0] / 360,
                n = t[1] / 100,
                r = t[2] / 100;
            if (0 === n) return [255 * r, 255 * r, 255 * r];
            var i, a = [0, 0, 0],
                o = e % 1 * 6,
                s = o % 1,
                l = 1 - s;
            switch (Math.floor(o)) {
                case 0:
                    a[0] = 1, a[1] = s, a[2] = 0;
                    break;
                case 1:
                    a[0] = l, a[1] = 1, a[2] = 0;
                    break;
                case 2:
                    a[0] = 0, a[1] = 1, a[2] = s;
                    break;
                case 3:
                    a[0] = 0, a[1] = l, a[2] = 1;
                    break;
                case 4:
                    a[0] = s, a[1] = 0, a[2] = 1;
                    break;
                default:
                    a[0] = 1, a[1] = 0, a[2] = l
            }
            return i = (1 - n) * r, [255 * (n * a[0] + i), 255 * (n * a[1] + i), 255 * (n * a[2] + i)]
        }, o.hcg.hsv = function(t) {
            var e = t[1] / 100,
                n = e + t[2] / 100 * (1 - e),
                r = 0;
            return n > 0 && (r = e / n), [t[0], 100 * r, 100 * n]
        }, o.hcg.hsl = function(t) {
            var e = t[1] / 100,
                n = t[2] / 100 * (1 - e) + .5 * e,
                r = 0;
            return n > 0 && n < .5 ? r = e / (2 * n) : n >= .5 && n < 1 && (r = e / (2 * (1 - n))), [t[0], 100 * r, 100 * n]
        }, o.hcg.hwb = function(t) {
            var e = t[1] / 100,
                n = e + t[2] / 100 * (1 - e);
            return [t[0], 100 * (n - e), 100 * (1 - n)]
        }, o.hwb.hcg = function(t) {
            var e = t[1] / 100,
                n = 1 - t[2] / 100,
                r = n - e,
                i = 0;
            return r < 1 && (i = (n - r) / (1 - r)), [t[0], 100 * r, 100 * i]
        }, o.apple.rgb = function(t) {
            return [t[0] / 65535 * 255, t[1] / 65535 * 255, t[2] / 65535 * 255]
        }, o.rgb.apple = function(t) {
            return [t[0] / 255 * 65535, t[1] / 255 * 65535, t[2] / 255 * 65535]
        }, o.gray.rgb = function(t) {
            return [t[0] / 100 * 255, t[0] / 100 * 255, t[0] / 100 * 255]
        }, o.gray.hsl = o.gray.hsv = function(t) {
            return [0, 0, t[0]]
        }, o.gray.hwb = function(t) {
            return [0, 100, t[0]]
        }, o.gray.cmyk = function(t) {
            return [0, 0, 0, t[0]]
        }, o.gray.lab = function(t) {
            return [t[0], 0, 0]
        }, o.gray.hex = function(t) {
            var e = 255 & Math.round(t[0] / 100 * 255),
                n = ((e << 16) + (e << 8) + e).toString(16).toUpperCase();
            return "000000".substring(n.length) + n
        }, o.rgb.gray = function(t) {
            return [(t[0] + t[1] + t[2]) / 3 / 255 * 100]
        }
    },
    function(t, e, n) {
        var r = n(19),
            i = n(6),
            a = "Expected a function";
        t.exports = function(t, e, n) {
            var o = !0,
                s = !0;
            if ("function" != typeof t) throw new TypeError(a);
            return i(n) && (o = "leading" in n ? !!n.leading : o, s = "trailing" in n ? !!n.trailing : s), r(t, e, {
                leading: o,
                maxWait: e,
                trailing: s
            })
        }
    },
    function(t, e, n) {
        "use strict";
        t.exports = n(28)
    },
    function(t, e, n) {
        (function(e) {
            ! function(e) {
                "use strict";
                var n = {
                    newline: /^\n+/,
                    code: /^( {4}[^\n]+\n*)+/,
                    fences: g,
                    hr: /^ {0,3}((?:- *){3,}|(?:_ *){3,}|(?:\* *){3,})(?:\n+|$)/,
                    heading: /^ *(#{1,6}) *([^\n]+?) *(?:#+ *)?(?:\n+|$)/,
                    nptable: g,
                    blockquote: /^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/,
                    list: /^( {0,3})(bull) [\s\S]+?(?:hr|def|\n{2,}(?! )(?!\1bull )\n*|\s*$)/,
                    html: "^ {0,3}(?:<(script|pre|style)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?\\?>\\n*|<![A-Z][\\s\\S]*?>\\n*|<!\\[CDATA\\[[\\s\\S]*?\\]\\]>\\n*|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:\\n{2,}|$)|<(?!script|pre|style)([a-z][\\w-]*)(?:attribute)*? */?>(?=\\h*\\n)[\\s\\S]*?(?:\\n{2,}|$)|</(?!script|pre|style)[a-z][\\w-]*\\s*>(?=\\h*\\n)[\\s\\S]*?(?:\\n{2,}|$))",
                    def: /^ {0,3}\[(label)\]: *\n? *<?([^\s>]+)>?(?:(?: +\n? *| *\n *)(title))? *(?:\n+|$)/,
                    table: g,
                    lheading: /^([^\n]+)\n *(=|-){2,} *(?:\n+|$)/,
                    paragraph: /^([^\n]+(?:\n(?!hr|heading|lheading| {0,3}>|<\/?(?:tag)(?: +|\n|\/?>)|<(?:script|pre|style|!--))[^\n]+)*)/,
                    text: /^[^\n]+/
                };

                function r(t) {
                    this.tokens = [], this.tokens.links = Object.create(null), this.options = t || C.defaults, this.rules = n.normal, this.options.pedantic ? this.rules = n.pedantic : this.options.gfm && (this.options.tables ? this.rules = n.tables : this.rules = n.gfm)
                }
                n._label = /(?!\s*\])(?:\\[\[\]]|[^\[\]])+/, n._title = /(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/, n.def = p(n.def).replace("label", n._label).replace("title", n._title).getRegex(), n.bullet = /(?:[*+-]|\d{1,9}\.)/, n.item = /^( *)(bull) ?[^\n]*(?:\n(?!\1bull ?)[^\n]*)*/, n.item = p(n.item, "gm").replace(/bull/g, n.bullet).getRegex(), n.list = p(n.list).replace(/bull/g, n.bullet).replace("hr", "\\n+(?=\\1?(?:(?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$))").replace("def", "\\n+(?=" + n.def.source + ")").getRegex(), n._tag = "address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|section|source|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul", n._comment = /<!--(?!-?>)[\s\S]*?-->/, n.html = p(n.html, "i").replace("comment", n._comment).replace("tag", n._tag).replace("attribute", / +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/).getRegex(), n.paragraph = p(n.paragraph).replace("hr", n.hr).replace("heading", n.heading).replace("lheading", n.lheading).replace("tag", n._tag).getRegex(), n.blockquote = p(n.blockquote).replace("paragraph", n.paragraph).getRegex(), n.normal = v({}, n), n.gfm = v({}, n.normal, {
                    fences: /^ {0,3}(`{3,}|~{3,})([^`\n]*)\n(?:|([\s\S]*?)\n)(?: {0,3}\1[~`]* *(?:\n+|$)|$)/,
                    paragraph: /^/,
                    heading: /^ *(#{1,6}) +([^\n]+?) *#* *(?:\n+|$)/
                }), n.gfm.paragraph = p(n.paragraph).replace("(?!", "(?!" + n.gfm.fences.source.replace("\\1", "\\2") + "|" + n.list.source.replace("\\1", "\\3") + "|").getRegex(), n.tables = v({}, n.gfm, {
                    nptable: /^ *([^|\n ].*\|.*)\n *([-:]+ *\|[-| :]*)(?:\n((?:.*[^>\n ].*(?:\n|$))*)\n*|$)/,
                    table: /^ *\|(.+)\n *\|?( *[-:]+[-| :]*)(?:\n((?: *[^>\n ].*(?:\n|$))*)\n*|$)/
                }), n.pedantic = v({}, n.normal, {
                    html: p("^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:\"[^\"]*\"|'[^']*'|\\s[^'\"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))").replace("comment", n._comment).replace(/tag/g, "(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b").getRegex(),
                    def: /^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/
                }), r.rules = n, r.lex = function(t, e) {
                    return new r(e).lex(t)
                }, r.prototype.lex = function(t) {
                    return t = t.replace(/\r\n|\r/g, "\n").replace(/\t/g, "    ").replace(/\u00a0/g, " ").replace(/\u2424/g, "\n"), this.token(t, !0)
                }, r.prototype.token = function(t, e) {
                    var r, i, a, o, s, l, u, c, h, p, f, d, m, g, v, w;
                    for (t = t.replace(/^ +$/gm, ""); t;)
                        if ((a = this.rules.newline.exec(t)) && (t = t.substring(a[0].length), a[0].length > 1 && this.tokens.push({
                                type: "space"
                            })), a = this.rules.code.exec(t)) t = t.substring(a[0].length), a = a[0].replace(/^ {4}/gm, ""), this.tokens.push({
                            type: "code",
                            text: this.options.pedantic ? a : b(a, "\n")
                        });
                        else if (a = this.rules.fences.exec(t)) t = t.substring(a[0].length), this.tokens.push({
                            type: "code",
                            lang: a[2] ? a[2].trim() : a[2],
                            text: a[3] || ""
                        });
                        else if (a = this.rules.heading.exec(t)) t = t.substring(a[0].length), this.tokens.push({
                            type: "heading",
                            depth: a[1].length,
                            text: a[2]
                        });
                        else if (e && (a = this.rules.nptable.exec(t)) && (l = {
                                type: "table",
                                header: y(a[1].replace(/^ *| *\| *$/g, "")),
                                align: a[2].replace(/^ *|\| *$/g, "").split(/ *\| */),
                                cells: a[3] ? a[3].replace(/\n$/, "").split("\n") : []
                            }).header.length === l.align.length) {
                            for (t = t.substring(a[0].length), f = 0; f < l.align.length; f++) /^ *-+: *$/.test(l.align[f]) ? l.align[f] = "right" : /^ *:-+: *$/.test(l.align[f]) ? l.align[f] = "center" : /^ *:-+ *$/.test(l.align[f]) ? l.align[f] = "left" : l.align[f] = null;
                            for (f = 0; f < l.cells.length; f++) l.cells[f] = y(l.cells[f], l.header.length);
                            this.tokens.push(l)
                        } else if (a = this.rules.hr.exec(t)) t = t.substring(a[0].length), this.tokens.push({
                            type: "hr"
                        });
                        else if (a = this.rules.blockquote.exec(t)) t = t.substring(a[0].length), this.tokens.push({
                            type: "blockquote_start"
                        }), a = a[0].replace(/^ *> ?/gm, ""), this.token(a, e), this.tokens.push({
                            type: "blockquote_end"
                        });
                        else if (a = this.rules.list.exec(t)) {
                            for (t = t.substring(a[0].length), u = {
                                type: "list_start",
                                ordered: g = (o = a[2]).length > 1,
                                start: g ? +o : "",
                                loose: !1
                            }, this.tokens.push(u), c = [], r = !1, m = (a = a[0].match(this.rules.item)).length, f = 0; f < m; f++) p = (l = a[f]).length, ~(l = l.replace(/^ *([*+-]|\d+\.) */, "")).indexOf("\n ") && (p -= l.length, l = this.options.pedantic ? l.replace(/^ {1,4}/gm, "") : l.replace(new RegExp("^ {1," + p + "}", "gm"), "")), f !== m - 1 && (s = n.bullet.exec(a[f + 1])[0], (o.length > 1 ? 1 === s.length : s.length > 1 || this.options.smartLists && s !== o) && (t = a.slice(f + 1).join("\n") + t, f = m - 1)), i = r || /\n\n(?!\s*$)/.test(l), f !== m - 1 && (r = "\n" === l.charAt(l.length - 1), i || (i = r)), i && (u.loose = !0), w = void 0, (v = /^\[[ xX]\] /.test(l)) && (w = " " !== l[1], l = l.replace(/^\[[ xX]\] +/, "")), h = {
                                type: "list_item_start",
                                task: v,
                                checked: w,
                                loose: i
                            }, c.push(h), this.tokens.push(h), this.token(l, !1), this.tokens.push({
                                type: "list_item_end"
                            });
                            if (u.loose)
                                for (m = c.length, f = 0; f < m; f++) c[f].loose = !0;
                            this.tokens.push({
                                type: "list_end"
                            })
                        } else if (a = this.rules.html.exec(t)) t = t.substring(a[0].length), this.tokens.push({
                            type: this.options.sanitize ? "paragraph" : "html",
                            pre: !this.options.sanitizer && ("pre" === a[1] || "script" === a[1] || "style" === a[1]),
                            text: a[0]
                        });
                        else if (e && (a = this.rules.def.exec(t))) t = t.substring(a[0].length), a[3] && (a[3] = a[3].substring(1, a[3].length - 1)), d = a[1].toLowerCase().replace(/\s+/g, " "), this.tokens.links[d] || (this.tokens.links[d] = {
                            href: a[2],
                            title: a[3]
                        });
                        else if (e && (a = this.rules.table.exec(t)) && (l = {
                                type: "table",
                                header: y(a[1].replace(/^ *| *\| *$/g, "")),
                                align: a[2].replace(/^ *|\| *$/g, "").split(/ *\| */),
                                cells: a[3] ? a[3].replace(/(?: *\| *)?\n$/, "").split("\n") : []
                            }).header.length === l.align.length) {
                            for (t = t.substring(a[0].length), f = 0; f < l.align.length; f++) /^ *-+: *$/.test(l.align[f]) ? l.align[f] = "right" : /^ *:-+: *$/.test(l.align[f]) ? l.align[f] = "center" : /^ *:-+ *$/.test(l.align[f]) ? l.align[f] = "left" : l.align[f] = null;
                            for (f = 0; f < l.cells.length; f++) l.cells[f] = y(l.cells[f].replace(/^ *\| *| *\| *$/g, ""), l.header.length);
                            this.tokens.push(l)
                        } else if (a = this.rules.lheading.exec(t)) t = t.substring(a[0].length), this.tokens.push({
                            type: "heading",
                            depth: "=" === a[2] ? 1 : 2,
                            text: a[1]
                        });
                        else if (e && (a = this.rules.paragraph.exec(t))) t = t.substring(a[0].length), this.tokens.push({
                            type: "paragraph",
                            text: "\n" === a[1].charAt(a[1].length - 1) ? a[1].slice(0, -1) : a[1]
                        });
                        else if (a = this.rules.text.exec(t)) t = t.substring(a[0].length), this.tokens.push({
                            type: "text",
                            text: a[0]
                        });
                        else if (t) throw new Error("Infinite loop on byte: " + t.charCodeAt(0));
                    return this.tokens
                };
                var i = {
                    escape: /^\\([!"#$%&'()*+,\-.\/:;<=>?@\[\]\\^_`{|}~])/,
                    autolink: /^<(scheme:[^\s\x00-\x1f<>]*|email)>/,
                    url: g,
                    tag: "^comment|^</[a-zA-Z][\\w:-]*\\s*>|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>",
                    link: /^!?\[(label)\]\(href(?:\s+(title))?\s*\)/,
                    reflink: /^!?\[(label)\]\[(?!\s*\])((?:\\[\[\]]?|[^\[\]\\])+)\]/,
                    nolink: /^!?\[(?!\s*\])((?:\[[^\[\]]*\]|\\[\[\]]|[^\[\]])*)\](?:\[\])?/,
                    strong: /^__([^\s_])__(?!_)|^\*\*([^\s*])\*\*(?!\*)|^__([^\s][\s\S]*?[^\s])__(?!_)|^\*\*([^\s][\s\S]*?[^\s])\*\*(?!\*)/,
                    em: /^_([^\s_])_(?!_)|^\*([^\s*"<\[])\*(?!\*)|^_([^\s][\s\S]*?[^\s_])_(?!_|[^\spunctuation])|^_([^\s_][\s\S]*?[^\s])_(?!_|[^\spunctuation])|^\*([^\s"<\[][\s\S]*?[^\s*])\*(?!\*)|^\*([^\s*"<\[][\s\S]*?[^\s])\*(?!\*)/,
                    code: /^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/,
                    br: /^( {2,}|\\)\n(?!\s*$)/,
                    del: g,
                    text: /^(`+|[^`])[\s\S]*?(?=[\\<!\[`*]|\b_| {2,}\n|$)/
                };

                function a(t, e) {
                    if (this.options = e || C.defaults, this.links = t, this.rules = i.normal, this.renderer = this.options.renderer || new o, this.renderer.options = this.options, !this.links) throw new Error("Tokens array requires a `links` property.");
                    this.options.pedantic ? this.rules = i.pedantic : this.options.gfm && (this.options.breaks ? this.rules = i.breaks : this.rules = i.gfm)
                }

                function o(t) {
                    this.options = t || C.defaults
                }

                function s() {}

                function l(t) {
                    this.tokens = [], this.token = null, this.options = t || C.defaults, this.options.renderer = this.options.renderer || new o, this.renderer = this.options.renderer, this.renderer.options = this.options, this.slugger = new u
                }

                function u() {
                    this.seen = {}
                }

                function c(t, e) {
                    if (e) {
                        if (c.escapeTest.test(t)) return t.replace(c.escapeReplace, function(t) {
                            return c.replacements[t]
                        })
                    } else if (c.escapeTestNoEncode.test(t)) return t.replace(c.escapeReplaceNoEncode, function(t) {
                        return c.replacements[t]
                    });
                    return t
                }

                function h(t) {
                    return t.replace(/&(#(?:\d+)|(?:#x[0-9A-Fa-f]+)|(?:\w+));?/gi, function(t, e) {
                        return "colon" === (e = e.toLowerCase()) ? ":" : "#" === e.charAt(0) ? "x" === e.charAt(1) ? String.fromCharCode(parseInt(e.substring(2), 16)) : String.fromCharCode(+e.substring(1)) : ""
                    })
                }

                function p(t, e) {
                    return t = t.source || t, e = e || "", {
                        replace: function(e, n) {
                            return n = (n = n.source || n).replace(/(^|[^\[])\^/g, "$1"), t = t.replace(e, n), this
                        },
                        getRegex: function() {
                            return new RegExp(t, e)
                        }
                    }
                }

                function f(t, e, n) {
                    if (t) {
                        try {
                            var r = decodeURIComponent(h(n)).replace(/[^\w:]/g, "").toLowerCase()
                        } catch (t) {
                            return null
                        }
                        if (0 === r.indexOf("javascript:") || 0 === r.indexOf("vbscript:") || 0 === r.indexOf("data:")) return null
                    }
                    e && !m.test(n) && (n = function(t, e) {
                        d[" " + t] || (/^[^:]+:\/*[^\/]*$/.test(t) ? d[" " + t] = t + "/" : d[" " + t] = b(t, "/", !0));
                        return t = d[" " + t], "//" === e.slice(0, 2) ? t.replace(/:[\s\S]*/, ":") + e : "/" === e.charAt(0) ? t.replace(/(:\/*[^\/]*)[\s\S]*/, "$1") + e : t + e
                    }(e, n));
                    try {
                        n = encodeURI(n).replace(/%25/g, "%")
                    } catch (t) {
                        return null
                    }
                    return n
                }
                i._punctuation = "!\"#$%&'()*+,\\-./:;<=>?@\\[^_{|}~", i.em = p(i.em).replace(/punctuation/g, i._punctuation).getRegex(), i._escapes = /\\([!"#$%&'()*+,\-.\/:;<=>?@\[\]\\^_`{|}~])/g, i._scheme = /[a-zA-Z][a-zA-Z0-9+.-]{1,31}/, i._email = /[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/, i.autolink = p(i.autolink).replace("scheme", i._scheme).replace("email", i._email).getRegex(), i._attribute = /\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/, i.tag = p(i.tag).replace("comment", n._comment).replace("attribute", i._attribute).getRegex(), i._label = /(?:\[[^\[\]]*\]|\\[\[\]]?|`[^`]*`|[^\[\]\\])*?/, i._href = /\s*(<(?:\\[<>]?|[^\s<>\\])*>|[^\s\x00-\x1f]*)/, i._title = /"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/, i.link = p(i.link).replace("label", i._label).replace("href", i._href).replace("title", i._title).getRegex(), i.reflink = p(i.reflink).replace("label", i._label).getRegex(), i.normal = v({}, i), i.pedantic = v({}, i.normal, {
                    strong: /^__(?=\S)([\s\S]*?\S)__(?!_)|^\*\*(?=\S)([\s\S]*?\S)\*\*(?!\*)/,
                    em: /^_(?=\S)([\s\S]*?\S)_(?!_)|^\*(?=\S)([\s\S]*?\S)\*(?!\*)/,
                    link: p(/^!?\[(label)\]\((.*?)\)/).replace("label", i._label).getRegex(),
                    reflink: p(/^!?\[(label)\]\s*\[([^\]]*)\]/).replace("label", i._label).getRegex()
                }), i.gfm = v({}, i.normal, {
                    escape: p(i.escape).replace("])", "~|])").getRegex(),
                    _extended_email: /[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/,
                    url: /^((?:ftp|https?):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/,
                    _backpedal: /(?:[^?!.,:;*_~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_~)]+(?!$))+/,
                    del: /^~+(?=\S)([\s\S]*?\S)~+/,
                    text: p(i.text).replace("]|", "~]|").replace("|$", "|https?://|ftp://|www\\.|[a-zA-Z0-9.!#$%&'*+/=?^_`{\\|}~-]+@|$").getRegex()
                }), i.gfm.url = p(i.gfm.url, "i").replace("email", i.gfm._extended_email).getRegex(), i.breaks = v({}, i.gfm, {
                    br: p(i.br).replace("{2,}", "*").getRegex(),
                    text: p(i.gfm.text).replace("{2,}", "*").getRegex()
                }), a.rules = i, a.output = function(t, e, n) {
                    return new a(e, n).output(t)
                }, a.prototype.output = function(t) {
                    for (var e, n, r, i, o, s, l = ""; t;)
                        if (o = this.rules.escape.exec(t)) t = t.substring(o[0].length), l += c(o[1]);
                        else if (o = this.rules.tag.exec(t))!this.inLink && /^<a /i.test(o[0]) ? this.inLink = !0 : this.inLink && /^<\/a>/i.test(o[0]) && (this.inLink = !1), !this.inRawBlock && /^<(pre|code|kbd|script)(\s|>)/i.test(o[0]) ? this.inRawBlock = !0 : this.inRawBlock && /^<\/(pre|code|kbd|script)(\s|>)/i.test(o[0]) && (this.inRawBlock = !1), t = t.substring(o[0].length), l += this.options.sanitize ? this.options.sanitizer ? this.options.sanitizer(o[0]) : c(o[0]) : o[0];
                        else if (o = this.rules.link.exec(t)) {
                            var u = w(o[2], "()");
                            if (u > -1) {
                                var h = o[2].length - u;
                                o[2] = o[2].substring(0, u), o[0] = o[0].substring(0, o[0].length - h)
                            }
                            t = t.substring(o[0].length), this.inLink = !0, r = o[2], this.options.pedantic ? (e = /^([^'"]*[^\s])\s+(['"])(.*)\2/.exec(r)) ? (r = e[1], i = e[3]) : i = "" : i = o[3] ? o[3].slice(1, -1) : "", r = r.trim().replace(/^<([\s\S]*)>$/, "$1"), l += this.outputLink(o, {
                                href: a.escapes(r),
                                title: a.escapes(i)
                            }), this.inLink = !1
                        } else if ((o = this.rules.reflink.exec(t)) || (o = this.rules.nolink.exec(t))) {
                            if (t = t.substring(o[0].length), e = (o[2] || o[1]).replace(/\s+/g, " "), !(e = this.links[e.toLowerCase()]) || !e.href) {
                                l += o[0].charAt(0), t = o[0].substring(1) + t;
                                continue
                            }
                            this.inLink = !0, l += this.outputLink(o, e), this.inLink = !1
                        } else if (o = this.rules.strong.exec(t)) t = t.substring(o[0].length), l += this.renderer.strong(this.output(o[4] || o[3] || o[2] || o[1]));
                        else if (o = this.rules.em.exec(t)) t = t.substring(o[0].length), l += this.renderer.em(this.output(o[6] || o[5] || o[4] || o[3] || o[2] || o[1]));
                        else if (o = this.rules.code.exec(t)) t = t.substring(o[0].length), l += this.renderer.codespan(c(o[2].trim(), !0));
                        else if (o = this.rules.br.exec(t)) t = t.substring(o[0].length), l += this.renderer.br();
                        else if (o = this.rules.del.exec(t)) t = t.substring(o[0].length), l += this.renderer.del(this.output(o[1]));
                        else if (o = this.rules.autolink.exec(t)) t = t.substring(o[0].length), r = "@" === o[2] ? "mailto:" + (n = c(this.mangle(o[1]))) : n = c(o[1]), l += this.renderer.link(r, null, n);
                        else if (this.inLink || !(o = this.rules.url.exec(t))) {
                            if (o = this.rules.text.exec(t)) t = t.substring(o[0].length), this.inRawBlock ? l += this.renderer.text(o[0]) : l += this.renderer.text(c(this.smartypants(o[0])));
                            else if (t) throw new Error("Infinite loop on byte: " + t.charCodeAt(0))
                        } else {
                            if ("@" === o[2]) r = "mailto:" + (n = c(o[0]));
                            else {
                                do {
                                    s = o[0], o[0] = this.rules._backpedal.exec(o[0])[0]
                                } while (s !== o[0]);
                                n = c(o[0]), r = "www." === o[1] ? "http://" + n : n
                            }
                            t = t.substring(o[0].length), l += this.renderer.link(r, null, n)
                        }
                    return l
                }, a.escapes = function(t) {
                    return t ? t.replace(a.rules._escapes, "$1") : t
                }, a.prototype.outputLink = function(t, e) {
                    var n = e.href,
                        r = e.title ? c(e.title) : null;
                    return "!" !== t[0].charAt(0) ? this.renderer.link(n, r, this.output(t[1])) : this.renderer.image(n, r, c(t[1]))
                }, a.prototype.smartypants = function(t) {
                    return this.options.smartypants ? t.replace(/---/g, "—").replace(/--/g, "–").replace(/(^|[-\u2014\/(\[{"\s])'/g, "$1‘").replace(/'/g, "’").replace(/(^|[-\u2014\/(\[{\u2018\s])"/g, "$1“").replace(/"/g, "”").replace(/\.{3}/g, "…") : t
                }, a.prototype.mangle = function(t) {
                    if (!this.options.mangle) return t;
                    for (var e, n = "", r = t.length, i = 0; i < r; i++) e = t.charCodeAt(i), Math.random() > .5 && (e = "x" + e.toString(16)), n += "&#" + e + ";";
                    return n
                }, o.prototype.code = function(t, e, n) {
                    var r = (e || "").match(/\S*/)[0];
                    if (this.options.highlight) {
                        var i = this.options.highlight(t, r);
                        null != i && i !== t && (n = !0, t = i)
                    }
                    return r ? '<pre><code class="' + this.options.langPrefix + c(r, !0) + '">' + (n ? t : c(t, !0)) + "</code></pre>\n" : "<pre><code>" + (n ? t : c(t, !0)) + "</code></pre>"
                }, o.prototype.blockquote = function(t) {
                    return "<blockquote>\n" + t + "</blockquote>\n"
                }, o.prototype.html = function(t) {
                    return t
                }, o.prototype.heading = function(t, e, n, r) {
                    return this.options.headerIds ? "<h" + e + ' id="' + this.options.headerPrefix + r.slug(n) + '">' + t + "</h" + e + ">\n" : "<h" + e + ">" + t + "</h" + e + ">\n"
                }, o.prototype.hr = function() {
                    return this.options.xhtml ? "<hr/>\n" : "<hr>\n"
                }, o.prototype.list = function(t, e, n) {
                    var r = e ? "ol" : "ul";
                    return "<" + r + (e && 1 !== n ? ' start="' + n + '"' : "") + ">\n" + t + "</" + r + ">\n"
                }, o.prototype.listitem = function(t) {
                    return "<li>" + t + "</li>\n"
                }, o.prototype.checkbox = function(t) {
                    return "<input " + (t ? 'checked="" ' : "") + 'disabled="" type="checkbox"' + (this.options.xhtml ? " /" : "") + "> "
                }, o.prototype.paragraph = function(t) {
                    return "<p>" + t + "</p>\n"
                }, o.prototype.table = function(t, e) {
                    return e && (e = "<tbody>" + e + "</tbody>"), "<table>\n<thead>\n" + t + "</thead>\n" + e + "</table>\n"
                }, o.prototype.tablerow = function(t) {
                    return "<tr>\n" + t + "</tr>\n"
                }, o.prototype.tablecell = function(t, e) {
                    var n = e.header ? "th" : "td";
                    return (e.align ? "<" + n + ' align="' + e.align + '">' : "<" + n + ">") + t + "</" + n + ">\n"
                }, o.prototype.strong = function(t) {
                    return "<strong>" + t + "</strong>"
                }, o.prototype.em = function(t) {
                    return "<em>" + t + "</em>"
                }, o.prototype.codespan = function(t) {
                    return "<code>" + t + "</code>"
                }, o.prototype.br = function() {
                    return this.options.xhtml ? "<br/>" : "<br>"
                }, o.prototype.del = function(t) {
                    return "<del>" + t + "</del>"
                }, o.prototype.link = function(t, e, n) {
                    if (null === (t = f(this.options.sanitize, this.options.baseUrl, t))) return n;
                    var r = '<a href="' + c(t) + '"';
                    return e && (r += ' title="' + e + '"'), r += ">" + n + "</a>"
                }, o.prototype.image = function(t, e, n) {
                    if (null === (t = f(this.options.sanitize, this.options.baseUrl, t))) return n;
                    var r = '<img src="' + t + '" alt="' + n + '"';
                    return e && (r += ' title="' + e + '"'), r += this.options.xhtml ? "/>" : ">"
                }, o.prototype.text = function(t) {
                    return t
                }, s.prototype.strong = s.prototype.em = s.prototype.codespan = s.prototype.del = s.prototype.text = function(t) {
                    return t
                }, s.prototype.link = s.prototype.image = function(t, e, n) {
                    return "" + n
                }, s.prototype.br = function() {
                    return ""
                }, l.parse = function(t, e) {
                    return new l(e).parse(t)
                }, l.prototype.parse = function(t) {
                    this.inline = new a(t.links, this.options), this.inlineText = new a(t.links, v({}, this.options, {
                        renderer: new s
                    })), this.tokens = t.reverse();
                    for (var e = ""; this.next();) e += this.tok();
                    return e
                }, l.prototype.next = function() {
                    return this.token = this.tokens.pop()
                }, l.prototype.peek = function() {
                    return this.tokens[this.tokens.length - 1] || 0
                }, l.prototype.parseText = function() {
                    for (var t = this.token.text;
                         "text" === this.peek().type;) t += "\n" + this.next().text;
                    return this.inline.output(t)
                }, l.prototype.tok = function() {
                    switch (this.token.type) {
                        case "space":
                            return "";
                        case "hr":
                            return this.renderer.hr();
                        case "heading":
                            return this.renderer.heading(this.inline.output(this.token.text), this.token.depth, h(this.inlineText.output(this.token.text)), this.slugger);
                        case "code":
                            return this.renderer.code(this.token.text, this.token.lang, this.token.escaped);
                        case "table":
                            var t, e, n, r, i = "",
                                a = "";
                            for (n = "", t = 0; t < this.token.header.length; t++) n += this.renderer.tablecell(this.inline.output(this.token.header[t]), {
                                header: !0,
                                align: this.token.align[t]
                            });
                            for (i += this.renderer.tablerow(n), t = 0; t < this.token.cells.length; t++) {
                                for (e = this.token.cells[t], n = "", r = 0; r < e.length; r++) n += this.renderer.tablecell(this.inline.output(e[r]), {
                                    header: !1,
                                    align: this.token.align[r]
                                });
                                a += this.renderer.tablerow(n)
                            }
                            return this.renderer.table(i, a);
                        case "blockquote_start":
                            for (a = "";
                                 "blockquote_end" !== this.next().type;) a += this.tok();
                            return this.renderer.blockquote(a);
                        case "list_start":
                            a = "";
                            for (var o = this.token.ordered, s = this.token.start;
                                 "list_end" !== this.next().type;) a += this.tok();
                            return this.renderer.list(a, o, s);
                        case "list_item_start":
                            a = "";
                            var l = this.token.loose;
                            for (this.token.task && (a += this.renderer.checkbox(this.token.checked));
                                 "list_item_end" !== this.next().type;) a += l || "text" !== this.token.type ? this.tok() : this.parseText();
                            return this.renderer.listitem(a);
                        case "html":
                            return this.renderer.html(this.token.text);
                        case "paragraph":
                            return this.renderer.paragraph(this.inline.output(this.token.text));
                        case "text":
                            return this.renderer.paragraph(this.parseText());
                        default:
                            var u = 'Token with "' + this.token.type + '" type was not found.';
                            if (!this.options.silent) throw new Error(u);
                            console.log(u)
                    }
                }, u.prototype.slug = function(t) {
                    var e = t.toLowerCase().trim().replace(/[\u2000-\u206F\u2E00-\u2E7F\\'!"#$%&()*+,.\/:;<=>?@[\]^`{|}~]/g, "").replace(/\s/g, "-");
                    if (this.seen.hasOwnProperty(e)) {
                        var n = e;
                        do {
                            this.seen[n]++, e = n + "-" + this.seen[n]
                        } while (this.seen.hasOwnProperty(e))
                    }
                    return this.seen[e] = 0, e
                }, c.escapeTest = /[&<>"']/, c.escapeReplace = /[&<>"']/g, c.replacements = {
                    "&": "&amp;",
                    "<": "&lt;",
                    ">": "&gt;",
                    '"': "&quot;",
                    "'": "&#39;"
                }, c.escapeTestNoEncode = /[<>"']|&(?!#?\w+;)/, c.escapeReplaceNoEncode = /[<>"']|&(?!#?\w+;)/g;
                var d = {},
                    m = /^$|^[a-z][a-z0-9+.-]*:|^[?#]/i;

                function g() {}

                function v(t) {
                    for (var e, n, r = 1; r < arguments.length; r++)
                        for (n in e = arguments[r]) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
                    return t
                }

                function y(t, e) {
                    var n = t.replace(/\|/g, function(t, e, n) {
                            for (var r = !1, i = e; --i >= 0 && "\\" === n[i];) r = !r;
                            return r ? "|" : " |"
                        }).split(/ \|/),
                        r = 0;
                    if (n.length > e) n.splice(e);
                    else
                        for (; n.length < e;) n.push("");
                    for (; r < n.length; r++) n[r] = n[r].trim().replace(/\\\|/g, "|");
                    return n
                }

                function b(t, e, n) {
                    if (0 === t.length) return "";
                    for (var r = 0; r < t.length;) {
                        var i = t.charAt(t.length - r - 1);
                        if (i !== e || n) {
                            if (i === e || !n) break;
                            r++
                        } else r++
                    }
                    return t.substr(0, t.length - r)
                }

                function w(t, e) {
                    if (-1 === t.indexOf(e[1])) return -1;
                    for (var n = 0, r = 0; r < t.length; r++)
                        if ("\\" === t[r]) r++;
                        else if (t[r] === e[0]) n++;
                        else if (t[r] === e[1] && --n < 0) return r;
                    return -1
                }

                function C(t, e, n) {
                    if (null == t) throw new Error("marked(): input parameter is undefined or null");
                    if ("string" != typeof t) throw new Error("marked(): input parameter is of type " + Object.prototype.toString.call(t) + ", string expected");
                    if (n || "function" == typeof e) {
                        n || (n = e, e = null);
                        var i, a, o = (e = v({}, C.defaults, e || {})).highlight,
                            s = 0;
                        try {
                            i = r.lex(t, e)
                        } catch (t) {
                            return n(t)
                        }
                        a = i.length;
                        var u = function(t) {
                            if (t) return e.highlight = o, n(t);
                            var r;
                            try {
                                r = l.parse(i, e)
                            } catch (e) {
                                t = e
                            }
                            return e.highlight = o, t ? n(t) : n(null, r)
                        };
                        if (!o || o.length < 3) return u();
                        if (delete e.highlight, !a) return u();
                        for (; s < i.length; s++)! function(t) {
                            "code" !== t.type ? --a || u() : o(t.text, t.lang, function(e, n) {
                                return e ? u(e) : null == n || n === t.text ? --a || u() : (t.text = n, t.escaped = !0, void(--a || u()))
                            })
                        }(i[s])
                    } else try {
                        return e && (e = v({}, C.defaults, e)), l.parse(r.lex(t, e), e)
                    } catch (t) {
                        if (t.message += "\nPlease report this to https://github.com/markedjs/marked.", (e || C.defaults).silent) return "<p>An error occurred:</p><pre>" + c(t.message + "", !0) + "</pre>";
                        throw t
                    }
                }
                g.exec = g, C.options = C.setOptions = function(t) {
                    return v(C.defaults, t), C
                }, C.getDefaults = function() {
                    return {
                        baseUrl: null,
                        breaks: !1,
                        gfm: !0,
                        headerIds: !0,
                        headerPrefix: "",
                        highlight: null,
                        langPrefix: "language-",
                        mangle: !0,
                        pedantic: !1,
                        renderer: new o,
                        sanitize: !1,
                        sanitizer: null,
                        silent: !1,
                        smartLists: !1,
                        smartypants: !1,
                        tables: !0,
                        xhtml: !1
                    }
                }, C.defaults = C.getDefaults(), C.Parser = l, C.parser = l.parse, C.Renderer = o, C.TextRenderer = s, C.Lexer = r, C.lexer = r.lex, C.InlineLexer = a, C.inlineLexer = a.output, C.Slugger = u, C.parse = C, t.exports = C
            }(this || "undefined" != typeof window && window)
        }).call(this, n(2))
    },
    function(t, e, n) {
        ! function(t) {
            "use strict";
            class e {
                constructor() {
                    if (this._components = [], this._componentsString = null, this._isRelative = !1, "string" == typeof arguments[0]) {
                        let t = arguments[0];
                        this.componentsString = t
                    } else if (arguments[0] instanceof e.Component && arguments[1] instanceof e) {
                        let t = arguments[0],
                            e = arguments[1];
                        this._components.push(t), this._components = this._components.concat(e._components)
                    } else if (arguments[0] instanceof Array) {
                        let t = arguments[0],
                            e = !!arguments[1];
                        this._components = this._components.concat(t), this._isRelative = e
                    }
                }
                get isRelative() {
                    return this._isRelative
                }
                get componentCount() {
                    return this._components.length
                }
                get head() {
                    return this._components.length > 0 ? this._components[0] : null
                }
                get tail() {
                    if (this._components.length >= 2) {
                        let t = this._components.slice(1, this._components.length);
                        return new e(t)
                    }
                    return e.self
                }
                get length() {
                    return this._components.length
                }
                get lastComponent() {
                    let t = this._components.length - 1;
                    return t >= 0 ? this._components[t] : null
                }
                get containsNamedComponent() {
                    for (let t = 0, e = this._components.length; t < e; t++)
                        if (!this._components[t].isIndex) return !0;
                    return !1
                }
                static get self() {
                    let t = new e;
                    return t._isRelative = !0, t
                }
                GetComponent(t) {
                    return this._components[t]
                }
                PathByAppendingPath(t) {
                    let n = new e,
                        r = 0;
                    for (let e = 0; e < t._components.length && t._components[e].isParent; ++e) r++;
                    for (let t = 0; t < this._components.length - r; ++t) n._components.push(this._components[t]);
                    for (let e = r; e < t._components.length; ++e) n._components.push(t._components[e]);
                    return n
                }
                get componentsString() {
                    return null == this._componentsString && (this._componentsString = this._components.join("."), this.isRelative && (this._componentsString = "." + this._componentsString)), this._componentsString
                }
                set componentsString(t) {
                    if (this._components.length = 0, this._componentsString = t, null == this._componentsString || "" == this._componentsString) return;
                    "." == this._componentsString[0] && (this._isRelative = !0, this._componentsString = this._componentsString.substring(1));
                    let n = this._componentsString.split(".");
                    for (let t of n) /^(\-|\+)?([0-9]+|Infinity)$/.test(t) ? this._components.push(new e.Component(parseInt(t))) : this._components.push(new e.Component(t))
                }
                toString() {
                    return this.componentsString
                }
                Equals(t) {
                    if (null == t) return !1;
                    if (t._components.length != this._components.length) return !1;
                    if (t.isRelative != this.isRelative) return !1;
                    for (let e = 0, n = t._components.length; e < n; e++)
                        if (!t._components[e].Equals(this._components[e])) return !1;
                    return !0
                }
                PathByAppendingComponent(t) {
                    let n = new e;
                    return n._components.push.apply(n._components, this._components), n._components.push(t), n
                }
            }
            var n, r, i;

            function a(t, e) {
                return t instanceof e ? c(t) : null
            }

            function o(t, e) {
                if (t instanceof e) return c(t);
                throw new Error(`${t} is not of type ${e}`)
            }

            function s(t) {
                if ("number" == typeof t) return t;
                throw new Error(`${t} is not a number`)
            }

            function l(t) {
                return t.hasValidName && t.name ? t : null
            }

            function u(t) {
                return void 0 === t ? null : t
            }

            function c(t, e) {
                return t
            }
            e.parentId = "^",
                function(t) {
                    class e {
                        constructor(t) {
                            this.index = -1, this.name = null, "string" == typeof t ? this.name = t : this.index = t
                        }
                        get isIndex() {
                            return this.index >= 0
                        }
                        get isParent() {
                            return this.name == t.parentId
                        }
                        static ToParent() {
                            return new e(t.parentId)
                        }
                        toString() {
                            return this.isIndex ? this.index.toString() : this.name
                        }
                        Equals(t) {
                            return null != t && t.isIndex == this.isIndex && (this.isIndex ? this.index == t.index : this.name == t.name)
                        }
                    }
                    t.Component = e
                }(e || (e = {})),
                function(t) {
                    function e(t, e) {
                        if (!t) throw void 0 !== e && console.warn(e), console.trace && console.trace(), ""
                    }
                    t.AssertType = function(t, n, r) {
                        e(t instanceof n, r)
                    }, t.Assert = e
                }(n || (n = {}));
            class h extends Error {}

            function p(t) {
                throw new h(`${t} is null or undefined`)
            }
            class f {
                constructor() {
                    this.parent = null, this._debugMetadata = null, this._path = null
                }
                get debugMetadata() {
                    return null === this._debugMetadata && this.parent ? this.parent.debugMetadata : this._debugMetadata
                }
                set debugMetadata(t) {
                    this._debugMetadata = t
                }
                get ownDebugMetadata() {
                    return this._debugMetadata
                }
                DebugLineNumberOfPath(t) {
                    if (null === t) return null;
                    let e = this.rootContentContainer;
                    if (e) {
                        let n = e.ContentAtPath(t).obj;
                        if (n) {
                            let t = n.debugMetadata;
                            if (null !== t) return t.startLineNumber
                        }
                    }
                    return null
                }
                get path() {
                    if (null == this._path)
                        if (null == this.parent) this._path = new e;
                        else {
                            let t = [],
                                n = this,
                                r = a(n.parent, E);
                            for (; null !== r;) {
                                let i = l(n);
                                null != i && i.hasValidName ? t.unshift(new e.Component(i.name)) : t.unshift(new e.Component(r.content.indexOf(n))), n = r, r = a(r.parent, E)
                            }
                            this._path = new e(t)
                        }
                    return this._path
                }
                ResolvePath(t) {
                    if (null === t) return p("path");
                    if (t.isRelative) {
                        let e = a(this, E);
                        return null === e && (n.Assert(null !== this.parent, "Can't resolve relative path because we don't have a parent"), e = a(this.parent, E), n.Assert(null !== e, "Expected parent to be a container"), n.Assert(t.GetComponent(0).isParent), t = t.tail), null === e ? p("nearestContainer") : e.ContentAtPath(t)
                    } {
                        let e = this.rootContentContainer;
                        return null === e ? p("contentContainer") : e.ContentAtPath(t)
                    }
                }
                ConvertPathToRelative(t) {
                    let n = this.path,
                        r = Math.min(t.length, n.length),
                        i = -1;
                    for (let e = 0; e < r; ++e) {
                        let r = n.GetComponent(e),
                            a = t.GetComponent(e);
                        if (!r.Equals(a)) break;
                        i = e
                    }
                    if (-1 == i) return t;
                    let a = n.componentCount - 1 - i,
                        o = [];
                    for (let t = 0; t < a; ++t) o.push(e.Component.ToParent());
                    for (let e = i + 1; e < t.componentCount; ++e) o.push(t.GetComponent(e));
                    return new e(o, !0)
                }
                CompactPathString(t) {
                    let e = null,
                        n = null;
                    return t.isRelative ? (n = t.componentsString, e = this.path.PathByAppendingPath(t).componentsString) : (n = this.ConvertPathToRelative(t).componentsString, e = t.componentsString), n.length < e.length ? n : e
                }
                get rootContentContainer() {
                    let t = this;
                    for (; t.parent;) t = t.parent;
                    return a(t, E)
                }
                Copy() {
                    throw Error("Not Implemented: Doesn't support copying")
                }
                SetChild(t, e, n) {
                    t[e] && (t[e] = null), t[e] = n, t[e] && (t[e].parent = this)
                }
            }
            class d {
                constructor(t) {
                    t = void 0 !== t ? t.toString() : "", this.string = t
                }
                get Length() {
                    return this.string.length
                }
                Append(t) {
                    null !== t && (this.string += t)
                }
                AppendLine(t) {
                    void 0 !== t && this.Append(t), this.string += "\n"
                }
                AppendFormat(t, ...e) {
                this.string += t.replace(/{(\d+)}/g, (t, n) => void 0 !== e[n] ? e[n] : t)
            }
            toString() {
                return this.string
            }
        }
            class m {
                constructor() {
                    if (this.originName = null, this.itemName = null, void 0 !== arguments[1]) {
                        let t = arguments[0],
                            e = arguments[1];
                        this.originName = t, this.itemName = e
                    } else if (arguments[0]) {
                        let t = arguments[0].toString().split(".");
                        this.originName = t[0], this.itemName = t[1]
                    }
                }
                static get Null() {
                    return new m(null, null)
                }
                get isNull() {
                    return null == this.originName && null == this.itemName
                }
                get fullName() {
                    return (null !== this.originName ? this.originName : "?") + "." + this.itemName
                }
                toString() {
                    return this.fullName
                }
                Equals(t) {
                    if (t instanceof m) {
                        let e = t;
                        return e.itemName == this.itemName && e.originName == this.originName
                    }
                    return !1
                }
                copy() {
                    return new m(this.originName, this.itemName)
                }
                serialized() {
                    return JSON.stringify({
                        originName: this.originName,
                        itemName: this.itemName
                    })
                }
                static fromSerializedKey(t) {
                    let e = JSON.parse(t);
                    if (!m.isLikeInkListItem(e)) return m.Null;
                    let n = e;
                    return new m(n.originName, n.itemName)
                }
                static isLikeInkListItem(t) {
                    return !("object" != typeof t || !t.hasOwnProperty("originName") || !t.hasOwnProperty("itemName") || "string" != typeof t.originName && null !== typeof t.originName || "string" != typeof t.itemName && null !== typeof t.itemName)
                }
            }
            class g extends Map {
                constructor() {
                    if (super((() => arguments[0] instanceof g ? arguments[0] : void 0)()), this.origins = null, this._originNames = [], arguments[0] instanceof g) {
                        let t = arguments[0];
                        t._originNames && (this._originNames = t._originNames.slice())
                    } else if ("string" == typeof arguments[0]) {
                        let t = arguments[0],
                            e = arguments[1];
                        this.SetInitialOriginName(t);
                        let n = e.listDefinitions.TryListGetDefinition(t, null);
                        if (!n.exists) throw new Error("InkList origin could not be found in story when constructing new list: " + t);
                        this.origins = [n.result]
                    } else if ("object" == typeof arguments[0] && arguments[0].hasOwnProperty("Key") && arguments[0].hasOwnProperty("Value")) {
                        let t = arguments[0];
                        this.Add(t.Key, t.Value)
                    }
                }
                AddItem(t) {
                    if (t instanceof m) {
                        let e = t;
                        if (null == e.originName) return void this.AddItem(e.itemName);
                        if (null === this.origins) return p("this.origins");
                        for (let t of this.origins)
                            if (t.name == e.originName) {
                                let n = t.TryGetValueForItem(e, 0);
                                if (n.exists) return void this.Add(e, n.result);
                                throw new Error("Could not add the item " + e + " to this list because it doesn't exist in the original list definition in ink.")
                            }
                        throw new Error("Failed to add item to list because the item was from a new list definition that wasn't previously known to this list. Only items from previously known lists can be used, so that the int value can be found.")
                    } {
                        let e = t,
                            n = null;
                        if (null === this.origins) return p("this.origins");
                        for (let t of this.origins) {
                            if (null === e) return p("itemName");
                            if (t.ContainsItemWithName(e)) {
                                if (null != n) throw new Error("Could not add the item " + e + " to this list because it could come from either " + t.name + " or " + n.name);
                                n = t
                            }
                        }
                        if (null == n) throw new Error("Could not add the item " + e + " to this list because it isn't known to any list definitions previously associated with this list.");
                        let r = new m(n.name, e),
                            i = n.ValueForItem(r);
                        this.Add(r, i)
                    }
                }
                ContainsItemNamed(t) {
                    for (let [e, n] of this)
                        if (m.fromSerializedKey(e).itemName == t) return !0;
                    return !1
                }
                ContainsKey(t) {
                    return this.has(t.serialized())
                }
                Add(t, e) {
                    let n = t.serialized();
                    if (this.has(n)) throw new Error(`The Map already contains an entry for ${t}`);
                    this.set(n, e)
                }
                Remove(t) {
                    return this.delete(t.serialized())
                }
                get Count() {
                    return this.size
                }
                get originOfMaxItem() {
                    if (null == this.origins) return null;
                    let t = this.maxItem.Key.originName,
                        e = null;
                    return this.origins.every(n => n.name != t || (e = n, !1)), e
                }
                get originNames() {
                    if (this.Count > 0) {
                        null == this._originNames && this.Count > 0 ? this._originNames = [] : (this._originNames || (this._originNames = []), this._originNames.length = 0);
                        for (let [t, e] of this) {
                            let e = m.fromSerializedKey(t);
                            if (null === e.originName) return p("item.originName");
                            this._originNames.push(e.originName)
                        }
                    }
                    return this._originNames
                }
                SetInitialOriginName(t) {
                    this._originNames = [t]
                }
                SetInitialOriginNames(t) {
                    this._originNames = null == t ? null : t.slice()
                }
                get maxItem() {
                    let t = {
                        Key: m.Null,
                        Value: 0
                    };
                    for (let [e, n] of this) {
                        let r = m.fromSerializedKey(e);
                        (t.Key.isNull || n > t.Value) && (t = {
                            Key: r,
                            Value: n
                        })
                    }
                    return t
                }
                get minItem() {
                    let t = {
                        Key: m.Null,
                        Value: 0
                    };
                    for (let [e, n] of this) {
                        let r = m.fromSerializedKey(e);
                        (t.Key.isNull || n < t.Value) && (t = {
                            Key: r,
                            Value: n
                        })
                    }
                    return t
                }
                get inverse() {
                    let t = new g;
                    if (null != this.origins)
                        for (let e of this.origins)
                            for (let [n, r] of e.items) {
                                let e = m.fromSerializedKey(n);
                                this.ContainsKey(e) || t.Add(e, r)
                            }
                    return t
                }
                get all() {
                    let t = new g;
                    if (null != this.origins)
                        for (let e of this.origins)
                            for (let [n, r] of e.items) {
                                let e = m.fromSerializedKey(n);
                                t.set(e.serialized(), r)
                            }
                    return t
                }
                Union(t) {
                    let e = new g(this);
                    for (let [n, r] of t) e.set(n, r);
                    return e
                }
                Intersect(t) {
                    let e = new g;
                    for (let [n, r] of this) t.has(n) && e.set(n, r);
                    return e
                }
                Without(t) {
                    let e = new g(this);
                    for (let [n, r] of t) e.delete(n);
                    return e
                }
                Contains(t) {
                    for (let [e, n] of t)
                        if (!this.has(e)) return !1;
                    return !0
                }
                GreaterThan(t) {
                    return 0 != this.Count && (0 == t.Count || this.minItem.Value > t.maxItem.Value)
                }
                GreaterThanOrEquals(t) {
                    return 0 != this.Count && (0 == t.Count || this.minItem.Value >= t.minItem.Value && this.maxItem.Value >= t.maxItem.Value)
                }
                LessThan(t) {
                    return 0 != t.Count && (0 == this.Count || this.maxItem.Value < t.minItem.Value)
                }
                LessThanOrEquals(t) {
                    return 0 != t.Count && (0 == this.Count || this.maxItem.Value <= t.maxItem.Value && this.minItem.Value <= t.minItem.Value)
                }
                MaxAsList() {
                    return this.Count > 0 ? new g(this.maxItem) : new g
                }
                MinAsList() {
                    return this.Count > 0 ? new g(this.minItem) : new g
                }
                ListWithSubRange(t, e) {
                    if (0 == this.Count) return new g;
                    let n = this.orderedItems,
                        r = 0,
                        i = Number.MAX_SAFE_INTEGER;
                    Number.isInteger(t) ? r = t : t instanceof g && t.Count > 0 && (r = t.minItem.Value), Number.isInteger(e) ? i = e : t instanceof g && t.Count > 0 && (i = e.maxItem.Value);
                    let a = new g;
                    a.SetInitialOriginNames(this.originNames);
                    for (let t of n) t.Value >= r && t.Value <= i && a.Add(t.Key, t.Value);
                    return a
                }
                Equals(t) {
                    if (t instanceof g == 0) return !1;
                    if (t.Count != this.Count) return !1;
                    for (let [e, n] of this)
                        if (!t.has(e)) return !1;
                    return !0
                }
                get orderedItems() {
                    let t = new Array;
                    for (let [e, n] of this) {
                        let r = m.fromSerializedKey(e);
                        t.push({
                            Key: r,
                            Value: n
                        })
                    }
                    return t.sort((t, e) => null === t.Key.originName ? p("x.Key.originName") : null === e.Key.originName ? p("y.Key.originName") : t.Value == e.Value ? t.Key.originName.localeCompare(e.Key.originName) : t.Value < e.Value ? -1 : t.Value > e.Value ? 1 : 0), t
                }
                toString() {
                    let t = this.orderedItems,
                        e = new d;
                    for (let n = 0; n < t.length; n++) {
                        n > 0 && e.Append(", ");
                        let r = t[n].Key;
                        if (null === r.itemName) return p("item.itemName");
                        e.Append(r.itemName)
                    }
                    return e.toString()
                }
                valueOf() {
                    return NaN
                }
            }
            class v extends Error {
                constructor(t) {
                    super(t), this.useEndLineNumber = !1, this.message = t, this.name = "StoryException"
                }
            }

            function y(t, e, n) {
                if (null === t) return {
                    result: n,
                    exists: !1
                };
                let r = t.get(e);
                return r ? {
                    result: r,
                    exists: !0
                } : {
                    result: n,
                    exists: !1
                }
            }
            class b extends f {
                static Create(t) {
                    return "boolean" == typeof t && (t = t ? 1 : 0), Number.isInteger(Number(t)) ? new C(Number(t)) : isNaN(t) ? "string" == typeof t ? new S(String(t)) : t instanceof e ? new x(o(t, e)) : t instanceof g ? new T(o(t, g)) : null : new _(Number(t))
                }
                Copy() {
                    return o(b.Create(this), f)
                }
                BadCastException(t) {
                    return new v("Can't cast " + this.valueObject + " from " + this.valueType + " to " + t)
                }
            }
            class w extends b {
                constructor(t) {
                    super(), this.value = t
                }
                get valueObject() {
                    return this.value
                }
                toString() {
                    return null === this.value ? p("Value.value") : this.value.toString()
                }
            }
            class C extends w {
                constructor(t) {
                    super(t || 0)
                }
                get isTruthy() {
                    return 0 != this.value
                }
                get valueType() {
                    return r.Int
                }
                Cast(t) {
                    if (null === this.value) return p("Value.value");
                    if (t == this.valueType) return this;
                    if (t == r.Float) return new _(this.value);
                    if (t == r.String) return new S("" + this.value);
                    throw this.BadCastException(t)
                }
            }
            class _ extends w {
                constructor(t) {
                    super(t || 0)
                }
                get isTruthy() {
                    return 0 != this.value
                }
                get valueType() {
                    return r.Float
                }
                Cast(t) {
                    if (null === this.value) return p("Value.value");
                    if (t == this.valueType) return this;
                    if (t == r.Int) return new C(this.value);
                    if (t == r.String) return new S("" + this.value);
                    throw this.BadCastException(t)
                }
            }
            class S extends w {
                constructor(t) {
                    if (super(t || ""), this._isNewline = "\n" == this.value, this._isInlineWhitespace = !0, null === this.value) return p("Value.value");
                    this.value.length > 0 && this.value.split("").every(t => " " == t || "\t" == t || (this._isInlineWhitespace = !1, !1))
                }
                get valueType() {
                    return r.String
                }
                get isTruthy() {
                    return null === this.value ? p("Value.value") : this.value.length > 0
                }
                get isNewline() {
                    return this._isNewline
                }
                get isInlineWhitespace() {
                    return this._isInlineWhitespace
                }
                get isNonWhitespace() {
                    return !this.isNewline && !this.isInlineWhitespace
                }
                Cast(t) {
                    if (t == this.valueType) return this;
                    if (t == r.Int) {
                        let e = function(t, e = 0) {
                            let n = parseInt(t);
                            return Number.isNaN(n) ? {
                                result: e,
                                exists: !1
                            } : {
                                result: n,
                                exists: !0
                            }
                        }(this.value);
                        if (e.exists) return new C(e.result);
                        throw this.BadCastException(t)
                    }
                    if (t == r.Float) {
                        let e = function(t, e = 0) {
                            let n = parseFloat(t);
                            return Number.isNaN(n) ? {
                                result: e,
                                exists: !1
                            } : {
                                result: n,
                                exists: !0
                            }
                        }(this.value);
                        if (e.exists) return new _(e.result);
                        throw this.BadCastException(t)
                    }
                    throw this.BadCastException(t)
                }
            }
            class x extends w {
                constructor(t) {
                    super(t)
                }
                get valueType() {
                    return r.DivertTarget
                }
                get targetPath() {
                    return null === this.value ? p("Value.value") : this.value
                }
                set targetPath(t) {
                    this.value = t
                }
                get isTruthy() {
                    throw new Error("Shouldn't be checking the truthiness of a divert target")
                }
                Cast(t) {
                    if (t == this.valueType) return this;
                    throw this.BadCastException(t)
                }
                toString() {
                    return "DivertTargetValue(" + this.targetPath + ")"
                }
            }
            class k extends w {
                constructor(t, e = -1) {
                    super(t), this._contextIndex = e
                }
                get contextIndex() {
                    return this._contextIndex
                }
                set contextIndex(t) {
                    this._contextIndex = t
                }
                get variableName() {
                    return null === this.value ? p("Value.value") : this.value
                }
                set variableName(t) {
                    this.value = t
                }
                get valueType() {
                    return r.VariablePointer
                }
                get isTruthy() {
                    throw new Error("Shouldn't be checking the truthiness of a variable pointer")
                }
                Cast(t) {
                    if (t == this.valueType) return this;
                    throw this.BadCastException(t)
                }
                toString() {
                    return "VariablePointerValue(" + this.variableName + ")"
                }
                Copy() {
                    return new k(this.variableName, this.contextIndex)
                }
            }
            class T extends w {
                get isTruthy() {
                    return null === this.value ? p("this.value") : this.value.Count > 0
                }
                get valueType() {
                    return r.List
                }
                Cast(t) {
                    if (null === this.value) return p("Value.value");
                    if (t == r.Int) {
                        let t = this.value.maxItem;
                        return t.Key.isNull ? new C(0) : new C(t.Value)
                    }
                    if (t == r.Float) {
                        let t = this.value.maxItem;
                        return t.Key.isNull ? new _(0) : new _(t.Value)
                    }
                    if (t == r.String) {
                        let t = this.value.maxItem;
                        return t.Key.isNull ? new S("") : new S(t.Key.toString())
                    }
                    if (t == this.valueType) return this;
                    throw this.BadCastException(t)
                }
                constructor(t, e) {
                    super(null), t || e ? t instanceof g ? this.value = new g(t) : t instanceof m && "number" == typeof e && (this.value = new g({
                        Key: t,
                        Value: e
                    })) : this.value = new g
                }
                static RetainListOriginsForAssignment(t, e) {
                    let n = a(t, T),
                        r = a(e, T);
                    return r && null === r.value ? p("newList.value") : n && null === n.value ? p("oldList.value") : void(n && r && 0 == r.value.Count && r.value.SetInitialOriginNames(n.value.originNames))
                }
            }! function(t) {
                t[t.Int = 0] = "Int", t[t.Float = 1] = "Float", t[t.List = 2] = "List", t[t.String = 3] = "String", t[t.DivertTarget = 4] = "DivertTarget", t[t.VariablePointer = 5] = "VariablePointer"
            }(r || (r = {}));
            class O {
                constructor() {
                    this.obj = null, this.approximate = !1
                }
                get correctObj() {
                    return this.approximate ? null : this.obj
                }
                get container() {
                    return this.obj instanceof E ? this.obj : null
                }
                copy() {
                    let t = new O;
                    return t.obj = this.obj, t.approximate = this.approximate, t
                }
            }
            class E extends f {
                constructor() {
                    super(...arguments), this.name = "", this._content = [], this.namedContent = new Map, this.visitsShouldBeCounted = !1, this.turnIndexShouldBeCounted = !1, this.countingAtStartOnly = !1, this._pathToFirstLeafContent = null
                }
                get hasValidName() {
                    return null != this.name && this.name.length > 0
                }
                get content() {
                    return this._content
                }
                set content(t) {
                    this.AddContent(t)
                }
                get namedOnlyContent() {
                    let t = new Map;
                    for (let [e, n] of this.namedContent) {
                        let r = o(n, f);
                        t.set(e, r)
                    }
                    for (let e of this.content) {
                        let n = l(e);
                        null != n && n.hasValidName && t.delete(n.name)
                    }
                    return 0 == t.size && (t = null), t
                }
                set namedOnlyContent(t) {
                    let e = this.namedOnlyContent;
                    if (null != e)
                        for (let [t, n] of e) this.namedContent.delete(t);
                    if (null != t)
                        for (let [e, n] of t) {
                            let t = l(n);
                            null != t && this.AddToNamedContentOnly(t)
                        }
                }
                get countFlags() {
                    let t = 0;
                    return this.visitsShouldBeCounted && (t |= E.CountFlags.Visits), this.turnIndexShouldBeCounted && (t |= E.CountFlags.Turns), this.countingAtStartOnly && (t |= E.CountFlags.CountStartOnly), t == E.CountFlags.CountStartOnly && (t = 0), t
                }
                set countFlags(t) {
                    let e = t;
                    (e & E.CountFlags.Visits) > 0 && (this.visitsShouldBeCounted = !0), (e & E.CountFlags.Turns) > 0 && (this.turnIndexShouldBeCounted = !0), (e & E.CountFlags.CountStartOnly) > 0 && (this.countingAtStartOnly = !0)
                }
                get pathToFirstLeafContent() {
                    return null == this._pathToFirstLeafContent && (this._pathToFirstLeafContent = this.path.PathByAppendingPath(this.internalPathToFirstLeafContent)), this._pathToFirstLeafContent
                }
                get internalPathToFirstLeafContent() {
                    let t = [],
                        n = this;
                    for (; n instanceof E;) n.content.length > 0 && (t.push(new e.Component(0)), n = n.content[0]);
                    return new e(t)
                }
                AddContent(t) {
                    if (t instanceof Array) {
                        let e = t;
                        for (let t of e) this.AddContent(t)
                    } else {
                        let e = t;
                        if (this._content.push(e), e.parent) throw new Error("content is already in " + e.parent);
                        e.parent = this, this.TryAddNamedContent(e)
                    }
                }
                TryAddNamedContent(t) {
                    let e = l(t);
                    null != e && e.hasValidName && this.AddToNamedContentOnly(e)
                }
                AddToNamedContentOnly(t) {
                    n.AssertType(t, f, "Can only add Runtime.Objects to a Runtime.Container"), o(t, f).parent = this, this.namedContent.set(t.name, t)
                }
                ContentAtPath(t, e = 0, n = -1) {
                    -1 == n && (n = t.length);
                    let r = new O;
                    r.approximate = !1;
                    let i = this,
                        o = this;
                    for (let s = e; s < n; ++s) {
                        let e = t.GetComponent(s);
                        if (null == i) {
                            r.approximate = !0;
                            break
                        }
                        let n = i.ContentWithPathComponent(e);
                        if (null == n) {
                            r.approximate = !0;
                            break
                        }
                        o = n, i = a(n, E)
                    }
                    return r.obj = o, r
                }
                InsertContent(t, e) {
                    if (this.content[e] = t, t.parent) throw new Error("content is already in " + t.parent);
                    t.parent = this, this.TryAddNamedContent(t)
                }
                AddContentsOfContainer(t) {
                    this.content = this.content.concat(t.content);
                    for (let e of t.content) e.parent = this, this.TryAddNamedContent(e)
                }
                ContentWithPathComponent(t) {
                    if (t.isIndex) return t.index >= 0 && t.index < this.content.length ? this.content[t.index] : null;
                    if (t.isParent) return this.parent; {
                        if (null === t.name) return p("component.name");
                        let e = y(this.namedContent, t.name, null);
                        return e.exists ? o(e.result, f) : null
                    }
                }
                BuildStringOfHierarchy() {
                    let t;
                    if (0 == arguments.length) return t = new d, this.BuildStringOfHierarchy(t, 0, null), t.toString();
                    t = arguments[0];
                    let e = arguments[1],
                        r = arguments[2];

                    function i() {
                        for (let n = 0; n < 4 * e; ++n) t.Append(" ")
                    }
                    i(), t.Append("["), this.hasValidName && t.AppendFormat(" ({0})", this.name), this == r && t.Append("  <---"), t.AppendLine(), e++;
                    for (let n = 0; n < this.content.length; ++n) {
                        let a = this.content[n];
                        a instanceof E ? a.BuildStringOfHierarchy(t, e, r) : (i(), a instanceof S ? (t.Append('"'), t.Append(a.toString().replace("\n", "\\n")), t.Append('"')) : t.Append(a.toString())), n != this.content.length - 1 && t.Append(","), a instanceof E || a != r || t.Append("  <---"), t.AppendLine()
                    }
                    let a = new Map;
                    for (let [t, e] of this.namedContent) this.content.indexOf(o(e, f)) >= 0 || a.set(t, e);
                    if (a.size > 0) {
                        i(), t.AppendLine("-- named: --");
                        for (let [i, o] of a) n.AssertType(o, E, "Can only print out named Containers"), o.BuildStringOfHierarchy(t, e, r), t.AppendLine()
                    }
                    e--, i(), t.Append("]")
                }
            }! function(t) {
                let e;
                ! function(t) {
                    t[t.Visits = 1] = "Visits", t[t.Turns = 2] = "Turns", t[t.CountStartOnly = 4] = "CountStartOnly"
                }(e = t.CountFlags || (t.CountFlags = {}))
            }(E || (E = {}));
            class A extends f {
                toString() {
                    return "Glue"
                }
            }
            class N extends f {
                get commandType() {
                    return this._commandType
                }
                constructor(t = N.CommandType.NotSet) {
                    super(), this._commandType = t
                }
                Copy() {
                    return new N(this.commandType)
                }
                static EvalStart() {
                    return new N(N.CommandType.EvalStart)
                }
                static EvalOutput() {
                    return new N(N.CommandType.EvalOutput)
                }
                static EvalEnd() {
                    return new N(N.CommandType.EvalEnd)
                }
                static Duplicate() {
                    return new N(N.CommandType.Duplicate)
                }
                static PopEvaluatedValue() {
                    return new N(N.CommandType.PopEvaluatedValue)
                }
                static PopFunction() {
                    return new N(N.CommandType.PopFunction)
                }
                static PopTunnel() {
                    return new N(N.CommandType.PopTunnel)
                }
                static BeginString() {
                    return new N(N.CommandType.BeginString)
                }
                static EndString() {
                    return new N(N.CommandType.EndString)
                }
                static NoOp() {
                    return new N(N.CommandType.NoOp)
                }
                static ChoiceCount() {
                    return new N(N.CommandType.ChoiceCount)
                }
                static Turns() {
                    return new N(N.CommandType.Turns)
                }
                static TurnsSince() {
                    return new N(N.CommandType.TurnsSince)
                }
                static ReadCount() {
                    return new N(N.CommandType.ReadCount)
                }
                static Random() {
                    return new N(N.CommandType.Random)
                }
                static SeedRandom() {
                    return new N(N.CommandType.SeedRandom)
                }
                static VisitIndex() {
                    return new N(N.CommandType.VisitIndex)
                }
                static SequenceShuffleIndex() {
                    return new N(N.CommandType.SequenceShuffleIndex)
                }
                static StartThread() {
                    return new N(N.CommandType.StartThread)
                }
                static Done() {
                    return new N(N.CommandType.Done)
                }
                static End() {
                    return new N(N.CommandType.End)
                }
                static ListFromInt() {
                    return new N(N.CommandType.ListFromInt)
                }
                static ListRange() {
                    return new N(N.CommandType.ListRange)
                }
                static ListRandom() {
                    return new N(N.CommandType.ListRandom)
                }
                toString() {
                    return this.commandType.toString()
                }
            }! function(t) {
                let e;
                ! function(t) {
                    t[t.NotSet = -1] = "NotSet", t[t.EvalStart = 0] = "EvalStart", t[t.EvalOutput = 1] = "EvalOutput", t[t.EvalEnd = 2] = "EvalEnd", t[t.Duplicate = 3] = "Duplicate", t[t.PopEvaluatedValue = 4] = "PopEvaluatedValue", t[t.PopFunction = 5] = "PopFunction", t[t.PopTunnel = 6] = "PopTunnel", t[t.BeginString = 7] = "BeginString", t[t.EndString = 8] = "EndString", t[t.NoOp = 9] = "NoOp", t[t.ChoiceCount = 10] = "ChoiceCount", t[t.Turns = 11] = "Turns", t[t.TurnsSince = 12] = "TurnsSince", t[t.Random = 13] = "Random", t[t.SeedRandom = 14] = "SeedRandom", t[t.VisitIndex = 15] = "VisitIndex", t[t.SequenceShuffleIndex = 16] = "SequenceShuffleIndex", t[t.StartThread = 17] = "StartThread", t[t.Done = 18] = "Done", t[t.End = 19] = "End", t[t.ListFromInt = 20] = "ListFromInt", t[t.ListRange = 21] = "ListRange", t[t.ListRandom = 22] = "ListRandom", t[t.ReadCount = 23] = "ReadCount", t[t.TOTAL_VALUES = 24] = "TOTAL_VALUES"
                }(e = t.CommandType || (t.CommandType = {}))
            }(N || (N = {})),
                function(t) {
                    t[t.Tunnel = 0] = "Tunnel", t[t.Function = 1] = "Function", t[t.FunctionEvaluationFromGame = 2] = "FunctionEvaluationFromGame"
                }(i || (i = {}));
            class I {
                constructor() {
                    this.container = null, this.index = -1, 2 === arguments.length && (this.container = arguments[0], this.index = arguments[1])
                }
                Resolve() {
                    return this.index < 0 ? this.container : null == this.container ? null : 0 == this.container.content.length ? this.container : this.index >= this.container.content.length ? null : this.container.content[this.index]
                }
                get isNull() {
                    return null == this.container
                }
                get path() {
                    return this.isNull ? null : this.index >= 0 ? this.container.path.PathByAppendingComponent(new e.Component(this.index)) : this.container.path
                }
                toString() {
                    return this.container ? "Ink Pointer -> " + this.container.path.toString() + " -- index " + this.index : "Ink Pointer (null)"
                }
                copy() {
                    return new I(this.container, this.index)
                }
                static StartOf(t) {
                    return new I(t, 0)
                }
                static get Null() {
                    return new I(null, -1)
                }
            }
            class P extends f {
                constructor(t) {
                    super(), this._targetPath = null, this._targetPointer = I.Null, this.variableDivertName = null, this.pushesToStack = !1, this.stackPushType = 0, this.isExternal = !1, this.externalArgs = 0, this.isConditional = !1, this.pushesToStack = !1, void 0 !== t && (this.pushesToStack = !0, this.stackPushType = t)
                }
                get targetPath() {
                    if (null != this._targetPath && this._targetPath.isRelative) {
                        let t = this.targetPointer.Resolve();
                        t && (this._targetPath = t.path)
                    }
                    return this._targetPath
                }
                set targetPath(t) {
                    this._targetPath = t, this._targetPointer = I.Null
                }
                get targetPointer() {
                    if (this._targetPointer.isNull) {
                        let t = this.ResolvePath(this._targetPath).obj;
                        if (null === this._targetPath) return p("this._targetPath");
                        if (null === this._targetPath.lastComponent) return p("this._targetPath.lastComponent");
                        if (this._targetPath.lastComponent.isIndex) {
                            if (null === t) return p("targetObj");
                            this._targetPointer.container = t.parent instanceof E ? t.parent : null, this._targetPointer.index = this._targetPath.lastComponent.index
                        } else this._targetPointer = I.StartOf(t instanceof E ? t : null)
                    }
                    return this._targetPointer.copy()
                }
                get targetPathString() {
                    return null == this.targetPath ? null : this.CompactPathString(this.targetPath)
                }
                set targetPathString(t) {
                    this.targetPath = null == t ? null : new e(t)
                }
                get hasVariableTarget() {
                    return null != this.variableDivertName
                }
                Equals(t) {
                    let e = t;
                    return e instanceof P && this.hasVariableTarget == e.hasVariableTarget && (this.hasVariableTarget ? this.variableDivertName == e.variableDivertName : null === this.targetPath ? p("this.targetPath") : this.targetPath.Equals(e.targetPath))
                }
                toString() {
                    if (this.hasVariableTarget) return "Divert(variable: " + this.variableDivertName + ")";
                    if (null == this.targetPath) return "Divert(null)"; {
                        let t = new d,
                            e = this.targetPath.toString();
                        return t.Append("Divert"), this.isConditional && t.Append("?"), this.pushesToStack && (this.stackPushType == i.Function ? t.Append(" function") : t.Append(" tunnel")), t.Append(" -> "), t.Append(this.targetPathString), t.Append(" ("), t.Append(e), t.Append(")"), t.toString()
                    }
                }
            }
            class $ extends f {
                constructor(t = !0) {
                    super(), this._pathOnChoice = null, this.hasCondition = !1, this.hasStartContent = !1, this.hasChoiceOnlyContent = !1, this.isInvisibleDefault = !1, this.onceOnly = !0, this.onceOnly = t
                }
                get pathOnChoice() {
                    if (null != this._pathOnChoice && this._pathOnChoice.isRelative) {
                        let t = this.choiceTarget;
                        t && (this._pathOnChoice = t.path)
                    }
                    return this._pathOnChoice
                }
                set pathOnChoice(t) {
                    this._pathOnChoice = t
                }
                get choiceTarget() {
                    return null === this._pathOnChoice ? p("ChoicePoint._pathOnChoice") : this.ResolvePath(this._pathOnChoice).container
                }
                get pathStringOnChoice() {
                    return null === this.pathOnChoice ? p("ChoicePoint.pathOnChoice") : this.CompactPathString(this.pathOnChoice)
                }
                set pathStringOnChoice(t) {
                    this.pathOnChoice = new e(t)
                }
                get flags() {
                    let t = 0;
                    return this.hasCondition && (t |= 1), this.hasStartContent && (t |= 2), this.hasChoiceOnlyContent && (t |= 4), this.isInvisibleDefault && (t |= 8), this.onceOnly && (t |= 16), t
                }
                set flags(t) {
                    this.hasCondition = (1 & t) > 0, this.hasStartContent = (2 & t) > 0, this.hasChoiceOnlyContent = (4 & t) > 0, this.isInvisibleDefault = (8 & t) > 0, this.onceOnly = (16 & t) > 0
                }
                toString() {
                    return null === this.pathOnChoice ? p("ChoicePoint.pathOnChoice") : "Choice: -> " + this.pathOnChoice.toString()
                }
            }
            class F extends f {
                constructor(t = null) {
                    super(), this.pathForCount = null, this.name = t
                }
                get containerForCount() {
                    return null === this.pathForCount ? null : this.ResolvePath(this.pathForCount).container
                }
                get pathStringForCount() {
                    return null === this.pathForCount ? null : this.CompactPathString(this.pathForCount)
                }
                set pathStringForCount(t) {
                    this.pathForCount = null === t ? null : new e(t)
                }
                toString() {
                    return null != this.name ? "var(" + this.name + ")" : "read_count(" + this.pathStringForCount + ")"
                }
            }
            class M extends f {
                constructor(t, e) {
                    super(), this.variableName = t || null, this.isNewDeclaration = !!e, this.isGlobal = !1
                }
                toString() {
                    return "VarAssign to " + this.variableName
                }
            }
            class L extends f {}
            class D extends f {
                constructor() {
                    if (super(), this._name = null, this._numberOfParameters = 0, this._prototype = null, this._isPrototype = !1, this._operationFuncs = null, 0 === arguments.length) D.GenerateNativeFunctionsIfNecessary();
                    else if (1 === arguments.length) {
                        let t = arguments[0];
                        D.GenerateNativeFunctionsIfNecessary(), this.name = t
                    } else if (2 === arguments.length) {
                        let t = arguments[0],
                            e = arguments[1];
                        this._isPrototype = !0, this.name = t, this.numberOfParameters = e
                    }
                }
                static CallWithName(t) {
                    return new D(t)
                }
                static CallExistsWithName(t) {
                    return this.GenerateNativeFunctionsIfNecessary(), this._nativeFunctions.get(t)
                }
                get name() {
                    return null === this._name ? p("NativeFunctionCall._name") : this._name
                }
                set name(t) {
                    this._name = t, this._isPrototype || (null === D._nativeFunctions ? p("NativeFunctionCall._nativeFunctions") : this._prototype = D._nativeFunctions.get(this._name) || null)
                }
                get numberOfParameters() {
                    return this._prototype ? this._prototype.numberOfParameters : this._numberOfParameters
                }
                set numberOfParameters(t) {
                    this._numberOfParameters = t
                }
                Call(t) {
                    if (this._prototype) return this._prototype.Call(t);
                    if (this.numberOfParameters != t.length) throw new Error("Unexpected number of parameters");
                    let e = !1;
                    for (let n of t) {
                        if (n instanceof L) throw new v('Attempting to perform operation on a void value. Did you forget to "return" a value from a function you called here?');
                        n instanceof T && (e = !0)
                    }
                    if (2 == t.length && e) return this.CallBinaryListOperation(t);
                    let n = this.CoerceValuesToSingleType(t),
                        i = n[0].valueType;
                    return i == r.Int ? this.CallType(n) : i == r.Float ? this.CallType(n) : i == r.String ? this.CallType(n) : i == r.DivertTarget ? this.CallType(n) : i == r.List ? this.CallType(n) : null
                }
                CallType(t) {
                    let e = o(t[0], w),
                        n = e.valueType,
                        r = e,
                        i = t.length;
                    if (2 == i || 1 == i) {
                        if (null === this._operationFuncs) return p("NativeFunctionCall._operationFuncs");
                        let e = this._operationFuncs.get(n);
                        if (!e) throw new v("Cannot perform operation " + this.name + " on " + n);
                        if (2 == i) {
                            let n = o(t[1], w),
                                i = e;
                            if (null === r.value || null === n.value) return p("NativeFunctionCall.Call BinaryOp values");
                            let a = i(r.value, n.value);
                            return w.Create(a)
                        } {
                            let t = e;
                            if (null === r.value) return p("NativeFunctionCall.Call UnaryOp value");
                            let n = t(r.value);
                            return w.Create(n)
                        }
                    }
                    throw new Error("Unexpected number of parameters to NativeFunctionCall: " + t.length)
                }
                CallBinaryListOperation(t) {
                    if (("+" == this.name || "-" == this.name) && t[0] instanceof T && t[1] instanceof C) return this.CallListIncrementOperation(t);
                    let e = o(t[0], w),
                        n = o(t[1], w);
                    if (!("&&" != this.name && "||" != this.name || e.valueType == r.List && n.valueType == r.List)) {
                        if (null === this._operationFuncs) return p("NativeFunctionCall._operationFuncs");
                        let t = this._operationFuncs.get(r.Int);
                        if (null === t) return p("NativeFunctionCall.CallBinaryListOperation op");
                        let i = t(e.isTruthy ? 1 : 0, n.isTruthy ? 1 : 0);
                        return new C(i)
                    }
                    if (e.valueType == r.List && n.valueType == r.List) return this.CallType([e, n]);
                    throw new v("Can not call use " + this.name + " operation on " + e.valueType + " and " + n.valueType)
                }
                CallListIncrementOperation(t) {
                    let e = o(t[0], T),
                        n = o(t[1], C),
                        i = new g;
                    if (null === e.value) return p("NativeFunctionCall.CallListIncrementOperation listVal.value");
                    for (let [t, a] of e.value) {
                        let o = m.fromSerializedKey(t);
                        if (null === this._operationFuncs) return p("NativeFunctionCall._operationFuncs");
                        let s = this._operationFuncs.get(r.Int);
                        if (null === n.value) return p("NativeFunctionCall.CallListIncrementOperation intVal.value");
                        let l = s(a, n.value),
                            u = null;
                        if (null === e.value.origins) return p("NativeFunctionCall.CallListIncrementOperation listVal.value.origins");
                        for (let t of e.value.origins)
                            if (t.name == o.originName) {
                                u = t;
                                break
                            }
                        if (null != u) {
                            let t = u.TryGetItemWithValue(l, m.Null);
                            t.exists && i.Add(t.result, l)
                        }
                    }
                    return new T(i)
                }
                CoerceValuesToSingleType(t) {
                    let e = r.Int,
                        n = null;
                    for (let i of t) {
                        let t = o(i, w);
                        t.valueType > e && (e = t.valueType), t.valueType == r.List && (n = a(t, T))
                    }
                    let i = [];
                    if (r[e] == r[r.List])
                        for (let e of t) {
                            let t = o(e, w);
                            if (t.valueType == r.List) i.push(t);
                            else {
                                if (t.valueType != r.Int) throw new v("Cannot mix Lists and " + t.valueType + " values in this operation"); {
                                    let e = parseInt(t.valueObject);
                                    if (null === (n = o(n, T)).value) return p("NativeFunctionCall.CoerceValuesToSingleType specialCaseList.value");
                                    let r = n.value.originOfMaxItem;
                                    if (null === r) return p("NativeFunctionCall.CoerceValuesToSingleType list");
                                    let a = r.TryGetItemWithValue(e, m.Null);
                                    if (!a.exists) throw new v("Could not find List item with the value " + e + " in " + r.name); {
                                        let t = new T(a.result, e);
                                        i.push(t)
                                    }
                                }
                            }
                        } else
                        for (let n of t) {
                            let t = o(n, w).Cast(e);
                            i.push(t)
                        }
                    return i
                }
                static Identity(t) {
                    return t
                }
                static GenerateNativeFunctionsIfNecessary() {
                    if (null == this._nativeFunctions) {
                        this._nativeFunctions = new Map, this.AddIntBinaryOp(this.Add, (t, e) => t + e), this.AddIntBinaryOp(this.Subtract, (t, e) => t - e), this.AddIntBinaryOp(this.Multiply, (t, e) => t * e), this.AddIntBinaryOp(this.Divide, (t, e) => Math.round(t / e)), this.AddIntBinaryOp(this.Mod, (t, e) => t % e), this.AddIntUnaryOp(this.Negate, t => -t), this.AddIntBinaryOp(this.Equal, (t, e) => t == e ? 1 : 0), this.AddIntBinaryOp(this.Greater, (t, e) => t > e ? 1 : 0), this.AddIntBinaryOp(this.Less, (t, e) => t < e ? 1 : 0), this.AddIntBinaryOp(this.GreaterThanOrEquals, (t, e) => t >= e ? 1 : 0), this.AddIntBinaryOp(this.LessThanOrEquals, (t, e) => t <= e ? 1 : 0), this.AddIntBinaryOp(this.NotEquals, (t, e) => t != e ? 1 : 0), this.AddIntUnaryOp(this.Not, t => 0 == t ? 1 : 0), this.AddIntBinaryOp(this.And, (t, e) => 0 != t && 0 != e ? 1 : 0), this.AddIntBinaryOp(this.Or, (t, e) => 0 != t || 0 != e ? 1 : 0), this.AddIntBinaryOp(this.Max, (t, e) => Math.max(t, e)), this.AddIntBinaryOp(this.Min, (t, e) => Math.min(t, e)), this.AddIntBinaryOp(this.Pow, (t, e) => Math.pow(t, e)), this.AddIntUnaryOp(this.Floor, D.Identity), this.AddIntUnaryOp(this.Ceiling, D.Identity), this.AddIntUnaryOp(this.Int, D.Identity), this.AddIntUnaryOp(this.Float, t => t), this.AddFloatBinaryOp(this.Add, (t, e) => t + e), this.AddFloatBinaryOp(this.Subtract, (t, e) => t - e), this.AddFloatBinaryOp(this.Multiply, (t, e) => t * e), this.AddFloatBinaryOp(this.Divide, (t, e) => t / e), this.AddFloatBinaryOp(this.Mod, (t, e) => t % e), this.AddFloatUnaryOp(this.Negate, t => -t), this.AddFloatBinaryOp(this.Equal, (t, e) => t == e ? 1 : 0), this.AddFloatBinaryOp(this.Greater, (t, e) => t > e ? 1 : 0), this.AddFloatBinaryOp(this.Less, (t, e) => t < e ? 1 : 0), this.AddFloatBinaryOp(this.GreaterThanOrEquals, (t, e) => t >= e ? 1 : 0), this.AddFloatBinaryOp(this.LessThanOrEquals, (t, e) => t <= e ? 1 : 0), this.AddFloatBinaryOp(this.NotEquals, (t, e) => t != e ? 1 : 0), this.AddFloatUnaryOp(this.Not, t => 0 == t ? 1 : 0), this.AddFloatBinaryOp(this.And, (t, e) => 0 != t && 0 != e ? 1 : 0), this.AddFloatBinaryOp(this.Or, (t, e) => 0 != t || 0 != e ? 1 : 0), this.AddFloatBinaryOp(this.Max, (t, e) => Math.max(t, e)), this.AddFloatBinaryOp(this.Min, (t, e) => Math.min(t, e)), this.AddFloatBinaryOp(this.Pow, (t, e) => Math.pow(t, e)), this.AddFloatUnaryOp(this.Floor, t => Math.floor(t)), this.AddFloatUnaryOp(this.Ceiling, t => Math.ceil(t)), this.AddFloatUnaryOp(this.Int, t => Math.floor(t)), this.AddFloatUnaryOp(this.Float, D.Identity), this.AddStringBinaryOp(this.Add, (t, e) => t + e), this.AddStringBinaryOp(this.Equal, (t, e) => t === e ? 1 : 0), this.AddStringBinaryOp(this.NotEquals, (t, e) => t !== e ? 1 : 0), this.AddStringBinaryOp(this.Has, (t, e) => t.includes(e) ? 1 : 0), this.AddStringBinaryOp(this.Hasnt, (t, e) => t.includes(e) ? 0 : 1), this.AddListBinaryOp(this.Add, (t, e) => t.Union(e)), this.AddListBinaryOp(this.Subtract, (t, e) => t.Without(e)), this.AddListBinaryOp(this.Has, (t, e) => t.Contains(e) ? 1 : 0), this.AddListBinaryOp(this.Hasnt, (t, e) => t.Contains(e) ? 0 : 1), this.AddListBinaryOp(this.Intersect, (t, e) => t.Intersect(e)), this.AddListBinaryOp(this.Equal, (t, e) => t.Equals(e) ? 1 : 0), this.AddListBinaryOp(this.Greater, (t, e) => t.GreaterThan(e) ? 1 : 0), this.AddListBinaryOp(this.Less, (t, e) => t.LessThan(e) ? 1 : 0), this.AddListBinaryOp(this.GreaterThanOrEquals, (t, e) => t.GreaterThanOrEquals(e) ? 1 : 0), this.AddListBinaryOp(this.LessThanOrEquals, (t, e) => t.LessThanOrEquals(e) ? 1 : 0), this.AddListBinaryOp(this.NotEquals, (t, e) => t.Equals(e) ? 0 : 1), this.AddListBinaryOp(this.And, (t, e) => t.Count > 0 && e.Count > 0 ? 1 : 0), this.AddListBinaryOp(this.Or, (t, e) => t.Count > 0 || e.Count > 0 ? 1 : 0), this.AddListUnaryOp(this.Not, t => 0 == t.Count ? 1 : 0), this.AddListUnaryOp(this.Invert, t => t.inverse), this.AddListUnaryOp(this.All, t => t.all), this.AddListUnaryOp(this.ListMin, t => t.MinAsList()), this.AddListUnaryOp(this.ListMax, t => t.MaxAsList()), this.AddListUnaryOp(this.Count, t => t.Count), this.AddListUnaryOp(this.ValueOfList, t => t.maxItem.Value);
                        let t = (t, e) => t.Equals(e) ? 1 : 0,
                            e = (t, e) => t.Equals(e) ? 0 : 1;
                        this.AddOpToNativeFunc(this.Equal, 2, r.DivertTarget, t), this.AddOpToNativeFunc(this.NotEquals, 2, r.DivertTarget, e)
                    }
                }
                AddOpFuncForType(t, e) {
                    null == this._operationFuncs && (this._operationFuncs = new Map), this._operationFuncs.set(t, e)
                }
                static AddOpToNativeFunc(t, e, n, r) {
                    if (null === this._nativeFunctions) return p("NativeFunctionCall._nativeFunctions");
                    let i = this._nativeFunctions.get(t);
                    i || (i = new D(t, e), this._nativeFunctions.set(t, i)), i.AddOpFuncForType(n, r)
                }
                static AddIntBinaryOp(t, e) {
                    this.AddOpToNativeFunc(t, 2, r.Int, e)
                }
                static AddIntUnaryOp(t, e) {
                    this.AddOpToNativeFunc(t, 1, r.Int, e)
                }
                static AddFloatBinaryOp(t, e) {
                    this.AddOpToNativeFunc(t, 2, r.Float, e)
                }
                static AddFloatUnaryOp(t, e) {
                    this.AddOpToNativeFunc(t, 1, r.Float, e)
                }
                static AddStringBinaryOp(t, e) {
                    this.AddOpToNativeFunc(t, 2, r.String, e)
                }
                static AddListBinaryOp(t, e) {
                    this.AddOpToNativeFunc(t, 2, r.List, e)
                }
                static AddListUnaryOp(t, e) {
                    this.AddOpToNativeFunc(t, 1, r.List, e)
                }
                toString() {
                    return 'Native "' + this.name + '"'
                }
            }
            D.Add = "+", D.Subtract = "-", D.Divide = "/", D.Multiply = "*", D.Mod = "%", D.Negate = "_", D.Equal = "==", D.Greater = ">", D.Less = "<", D.GreaterThanOrEquals = ">=", D.LessThanOrEquals = "<=", D.NotEquals = "!=", D.Not = "!", D.And = "&&", D.Or = "||", D.Min = "MIN", D.Max = "MAX", D.Pow = "POW", D.Floor = "FLOOR", D.Ceiling = "CEILING", D.Int = "INT", D.Float = "FLOAT", D.Has = "?", D.Hasnt = "!?", D.Intersect = "^", D.ListMin = "LIST_MIN", D.ListMax = "LIST_MAX", D.All = "LIST_ALL", D.Count = "LIST_COUNT", D.ValueOfList = "LIST_VALUE", D.Invert = "LIST_INVERT", D._nativeFunctions = null;
            class j extends f {
                constructor(t) {
                    super(), this.text = t.toString() || ""
                }
                toString() {
                    return "# " + this.text
                }
            }
            class V extends f {
                constructor() {
                    super(...arguments), this.text = "", this.index = 0, this.threadAtGeneration = null, this.sourcePath = "", this.targetPath = null, this.isInvisibleDefault = !1, this.originalThreadIndex = 0
                }
                get pathStringOnChoice() {
                    return null === this.targetPath ? p("Choice.targetPath") : this.targetPath.toString()
                }
                set pathStringOnChoice(t) {
                    this.targetPath = new e(t)
                }
            }
            class R {
                constructor(t, e) {
                    this._name = t || "", this._items = null, this._itemNameToValues = e || new Map
                }
                get name() {
                    return this._name
                }
                get items() {
                    if (null == this._items) {
                        this._items = new Map;
                        for (let [t, e] of this._itemNameToValues) {
                            let n = new m(this.name, t);
                            this._items.set(n.serialized(), e)
                        }
                    }
                    return this._items
                }
                ValueForItem(t) {
                    if (!t.itemName) return 0;
                    let e = this._itemNameToValues.get(t.itemName);
                    return void 0 !== e ? e : 0
                }
                ContainsItem(t) {
                    return !!t.itemName && t.originName == this.name && this._itemNameToValues.has(t.itemName)
                }
                ContainsItemWithName(t) {
                    return this._itemNameToValues.has(t)
                }
                TryGetItemWithValue(t, e) {
                    for (let [e, n] of this._itemNameToValues)
                        if (n == t) return {
                            result: new m(this.name, e),
                            exists: !0
                        };
                    return {
                        result: m.Null,
                        exists: !1
                    }
                }
                TryGetValueForItem(t, e) {
                    if (!t.itemName) return {
                        result: 0,
                        exists: !1
                    };
                    let n = this._itemNameToValues.get(t.itemName);
                    return n ? {
                        result: n,
                        exists: !0
                    } : {
                        result: 0,
                        exists: !1
                    }
                }
            }
            class z {
                constructor(t) {
                    this._lists = new Map, this._allUnambiguousListValueCache = new Map;
                    for (let e of t) {
                        this._lists.set(e.name, e);
                        for (let [t, n] of e.items) {
                            let e = m.fromSerializedKey(t),
                                r = new T(e, n);
                            if (!e.itemName) throw new Error("item.itemName is null or undefined.");
                            this._allUnambiguousListValueCache.set(e.itemName, r), this._allUnambiguousListValueCache.set(e.fullName, r)
                        }
                    }
                }
                get lists() {
                    let t = [];
                    for (let [e, n] of this._lists) t.push(n);
                    return t
                }
                TryListGetDefinition(t, e) {
                    if (null === t) return {
                        result: e,
                        exists: !1
                    };
                    let n = this._lists.get(t);
                    return n ? {
                        result: n,
                        exists: !0
                    } : {
                        result: e,
                        exists: !1
                    }
                }
                FindSingleItemListWithName(t) {
                    if (null === t) return p("name");
                    let e = this._allUnambiguousListValueCache.get(t);
                    return void 0 !== e ? e : null
                }
            }
            class B {
                static ListToJArray(t) {
                    let e = [];
                    for (let n of t) e.push(this.RuntimeObjectToJToken(n));
                    return e
                }
                static JArrayToRuntimeObjList(t, e = !1) {
                    let n = t.length;
                    e && n--;
                    let r = [];
                    for (let e = 0; e < n; e++) {
                        let n = t[e],
                            i = this.JTokenToRuntimeObject(n);
                        if (null === i) return p("runtimeObj");
                        r.push(i)
                    }
                    return r
                }
                static DictionaryRuntimeObjsToJObject(t) {
                    let e = {};
                    for (let [n, r] of t) {
                        let t = a(r, f);
                        null != t && (e[n] = this.RuntimeObjectToJToken(t))
                    }
                    return e
                }
                static JObjectToDictionaryRuntimeObjs(t) {
                    let e = new Map;
                    for (let n in t)
                        if (t.hasOwnProperty(n)) {
                            let r = this.JTokenToRuntimeObject(t[n]);
                            if (null === r) return p("inkObject");
                            e.set(n, r)
                        }
                    return e
                }
                static JObjectToIntDictionary(t) {
                    let e = new Map;
                    for (let n in t) t.hasOwnProperty(n) && e.set(n, parseInt(t[n]));
                    return e
                }
                static IntDictionaryToJObject(t) {
                    let e = {};
                    for (let [n, r] of t) e[n] = s(r);
                    return e
                }
                static JTokenToRuntimeObject(t) {
                    if ("number" == typeof t && !isNaN(t)) return w.Create(t);
                    if ("string" == typeof t) {
                        let e = t.toString(),
                            n = e[0];
                        if ("^" == n) return new S(e.substring(1));
                        if ("\n" == n && 1 == e.length) return new S("\n");
                        if ("<>" == e) return new A;
                        for (let t = 0; t < B._controlCommandNames.length; ++t)
                            if (e == B._controlCommandNames[t]) return new N(t);
                        if ("L^" == e && (e = "^"), D.CallExistsWithName(e)) return D.CallWithName(e);
                        if ("->->" == e) return N.PopTunnel();
                        if ("~ret" == e) return N.PopFunction();
                        if ("void" == e) return new L
                    }
                    if ("object" == typeof t && t instanceof Array == 0) {
                        let n, r = t;
                        if (r["^->"]) return n = r["^->"], new x(new e(n.toString()));
                        if (r["^var"]) {
                            n = r["^var"];
                            let t = new k(n.toString());
                            return "ci" in r && (n = r.ci, t.contextIndex = parseInt(n)), t
                        }
                        let a = !1,
                            o = !1,
                            s = i.Function,
                            l = !1;
                        if ((n = r["->"]) ? a = !0 : (n = r["f()"]) ? (a = !0, o = !0, s = i.Function) : (n = r["->t->"]) ? (a = !0, o = !0, s = i.Tunnel) : (n = r["x()"]) && (a = !0, l = !0, o = !1, s = i.Function), a) {
                            let t = new P;
                            t.pushesToStack = o, t.stackPushType = s, t.isExternal = l;
                            let e = n.toString();
                            return (n = r.var) ? t.variableDivertName = e : t.targetPathString = e, t.isConditional = !!r.c, l && (n = r.exArgs) && (t.externalArgs = parseInt(n)), t
                        }
                        if (n = r["*"]) {
                            let t = new $;
                            return t.pathStringOnChoice = n.toString(), (n = r.flg) && (t.flags = parseInt(n)), t
                        }
                        if (n = r["VAR?"]) return new F(n.toString());
                        if (n = r["CNT?"]) {
                            let t = new F;
                            return t.pathStringForCount = n.toString(), t
                        }
                        let u = !1,
                            c = !1;
                        if ((n = r["VAR="]) ? (u = !0, c = !0) : (n = r["temp="]) && (u = !0, c = !1), u) {
                            let t = n.toString(),
                                e = !r.re,
                                i = new M(t, e);
                            return i.isGlobal = c, i
                        }
                        if (void 0 !== r["#"]) return n = r["#"], new j(n.toString());
                        if (n = r.list) {
                            let t = n,
                                e = new g;
                            if (n = r.origins) {
                                let t = n;
                                e.SetInitialOriginNames(t)
                            }
                            for (let n in t)
                                if (t.hasOwnProperty(n)) {
                                    let r = t[n],
                                        i = new m(n),
                                        a = parseInt(r);
                                    e.Add(i, a)
                                }
                            return new T(e)
                        }
                        if (null != r.originalChoicePath) return this.JObjectToChoice(r)
                    }
                    if (t instanceof Array) return this.JArrayToContainer(t);
                    if (null == t) return null;
                    throw new Error("Failed to convert token to runtime object: " + JSON.stringify(t))
                }
                static RuntimeObjectToJToken(t) {
                    let e = a(t, E);
                    if (e) return this.ContainerToJArray(e);
                    let n = a(t, P);
                    if (n) {
                        let t, e = "->";
                        n.isExternal ? e = "x()" : n.pushesToStack && (n.stackPushType == i.Function ? e = "f()" : n.stackPushType == i.Tunnel && (e = "->t->")), t = n.hasVariableTarget ? n.variableDivertName : n.targetPathString;
                        let r = {};
                        return r[e] = t, n.hasVariableTarget && (r.var = !0), n.isConditional && (r.c = !0), n.externalArgs > 0 && (r.exArgs = n.externalArgs), r
                    }
                    let r = a(t, $);
                    if (r) {
                        let t = {};
                        return t["*"] = r.pathStringOnChoice, t.flg = r.flags, t
                    }
                    let o = a(t, C);
                    if (o) return o.value;
                    let s = a(t, _);
                    if (s) return s.value;
                    let l = a(t, S);
                    if (l) return l.isNewline ? "\n" : "^" + l.value;
                    let u = a(t, T);
                    if (u) return this.InkListToJObject(u);
                    let c = a(t, x);
                    if (c) {
                        let t = {};
                        return null === c.value ? p("divTargetVal.value") : (t["^->"] = c.value.componentsString, t)
                    }
                    let h = a(t, k);
                    if (h) {
                        let t = {};
                        return t["^var"] = h.value, t.ci = h.contextIndex, t
                    }
                    if (a(t, A)) return "<>";
                    let f = a(t, N);
                    if (f) return B._controlCommandNames[f.commandType];
                    let d = a(t, D);
                    if (d) {
                        let t = d.name;
                        return "^" == t && (t = "L^"), t
                    }
                    let m = a(t, F);
                    if (m) {
                        let t = {},
                            e = m.pathStringForCount;
                        return null != e ? t["CNT?"] = e : t["VAR?"] = m.name, t
                    }
                    let g = a(t, M);
                    if (g) {
                        let t = {};
                        return t[g.isGlobal ? "VAR=" : "temp="] = g.variableName, g.isNewDeclaration || (t.re = !0), t
                    }
                    if (a(t, L)) return "void";
                    let v = a(t, j);
                    if (v) {
                        let t = {};
                        return t["#"] = v.text, t
                    }
                    let y = a(t, V);
                    if (y) return this.ChoiceToJObject(y);
                    throw new Error("Failed to convert runtime object to Json token: " + t)
                }
                static ContainerToJArray(t) {
                    let e = this.ListToJArray(t.content),
                        n = t.namedOnlyContent,
                        r = t.countFlags;
                    if (null != n && n.size > 0 || r > 0 || null != t.name) {
                        let i;
                        if (null != n) {
                            i = this.DictionaryRuntimeObjsToJObject(n);
                            for (let t in i)
                                if (i.hasOwnProperty(t)) {
                                    let e = i[t];
                                    if (null != e) {
                                        let t = e[e.length - 1];
                                        null != t && (delete t["#n"], 0 == Object.keys(t).length && (e[e.length - 1] = null))
                                    }
                                }
                        } else i = {};
                        r > 0 && (i["#f"] = r), null != t.name && (i["#n"] = t.name), e.push(i)
                    } else e.push(null);
                    return e
                }
                static JArrayToContainer(t) {
                    let e = new E;
                    e.content = this.JArrayToRuntimeObjList(t, !0);
                    let n = t[t.length - 1];
                    if (null != n) {
                        let t = new Map;
                        for (let r in n)
                            if ("#f" == r) e.countFlags = parseInt(n[r]);
                            else if ("#n" == r) e.name = n[r].toString();
                            else {
                                let e = this.JTokenToRuntimeObject(n[r]),
                                    i = a(e, E);
                                i && (i.name = r), t.set(r, e)
                            }
                        e.namedOnlyContent = t
                    }
                    return e
                }
                static JObjectToChoice(t) {
                    let e = new V;
                    return e.text = t.text.toString(), e.index = parseInt(t.index), e.sourcePath = t.originalChoicePath.toString(), e.originalThreadIndex = parseInt(t.originalThreadIndex), e.pathStringOnChoice = t.targetPath.toString(), e
                }
                static ChoiceToJObject(t) {
                    let e = {};
                    return e.text = t.text, e.index = t.index, e.originalChoicePath = t.sourcePath, e.originalThreadIndex = t.originalThreadIndex, e.targetPath = t.pathStringOnChoice, e
                }
                static InkListToJObject(t) {
                    let e = t.value;
                    if (null === e) return p("rawList");
                    let n = {},
                        r = {};
                    for (let [t, n] of e) r[m.fromSerializedKey(t).toString()] = n;
                    return n.list = r, 0 == e.Count && null != e.originNames && e.originNames.length > 0 && (n.origins = e.originNames), n
                }
                static ListDefinitionsToJToken(t) {
                    let e = {};
                    for (let n of t.lists) {
                        let t = {};
                        for (let [e, r] of n.items) {
                            let n = m.fromSerializedKey(e);
                            if (null === n.itemName) return p("item.itemName");
                            t[n.itemName] = r
                        }
                        e[n.name] = t
                    }
                    return e
                }
                static JTokenToListDefinitions(t) {
                    let e = t,
                        n = [];
                    for (let t in e)
                        if (e.hasOwnProperty(t)) {
                            let r = t.toString(),
                                i = e[t],
                                a = new Map;
                            for (let n in i)
                                if (e.hasOwnProperty(t)) {
                                    let t = i[n];
                                    a.set(n, parseInt(t))
                                }
                            let o = new R(r, a);
                            n.push(o)
                        }
                    return new z(n)
                }
            }
            B._controlCommandNames = (() => {
                let t = [];
            t[N.CommandType.EvalStart] = "ev", t[N.CommandType.EvalOutput] = "out", t[N.CommandType.EvalEnd] = "/ev", t[N.CommandType.Duplicate] = "du", t[N.CommandType.PopEvaluatedValue] = "pop", t[N.CommandType.PopFunction] = "~ret", t[N.CommandType.PopTunnel] = "->->", t[N.CommandType.BeginString] = "str", t[N.CommandType.EndString] = "/str", t[N.CommandType.NoOp] = "nop", t[N.CommandType.ChoiceCount] = "choiceCnt", t[N.CommandType.Turns] = "turn", t[N.CommandType.TurnsSince] = "turns", t[N.CommandType.ReadCount] = "readc", t[N.CommandType.Random] = "rnd", t[N.CommandType.SeedRandom] = "srnd", t[N.CommandType.VisitIndex] = "visit", t[N.CommandType.SequenceShuffleIndex] = "seq", t[N.CommandType.StartThread] = "thread", t[N.CommandType.Done] = "done", t[N.CommandType.End] = "end", t[N.CommandType.ListFromInt] = "listInt", t[N.CommandType.ListRange] = "range", t[N.CommandType.ListRandom] = "lrnd";
            for (let e = 0; e < N.CommandType.TOTAL_VALUES; ++e)
                if (null == t[e]) throw new Error("Control command not accounted for in serialisation");
            return t
        })();
            class W {
                constructor() {
                    if (this._threadCounter = 0, arguments[0] instanceof E || null === arguments[0]) {
                        let t = arguments[0];
                        this._threads = [], this._threads.push(new W.Thread), this._threads[0].callstack.push(new W.Element(i.Tunnel, I.StartOf(t)))
                    } else {
                        let t = arguments[0];
                        this._threads = [];
                        for (let e of t._threads) this._threads.push(e.Copy())
                    }
                }
                get elements() {
                    return this.callStack
                }
                get depth() {
                    return this.elements.length
                }
                get currentElement() {
                    let t = this._threads[this._threads.length - 1].callstack;
                    return t[t.length - 1]
                }
                get currentElementIndex() {
                    return this.callStack.length - 1
                }
                get currentThread() {
                    return this._threads[this._threads.length - 1]
                }
                set currentThread(t) {
                    n.Assert(1 == this._threads.length, "Shouldn't be directly setting the current thread when we have a stack of them"), this._threads.length = 0, this._threads.push(t)
                }
                get canPop() {
                    return this.callStack.length > 1
                }
                SetJsonToken(t, e) {
                    this._threads.length = 0;
                    let n = t.threads;
                    for (let t of n) {
                        let n = t,
                            r = new W.Thread(n, e);
                        this._threads.push(r)
                    }
                    this._threadCounter = parseInt(t.threadCounter)
                }
                GetJsonToken() {
                    let t = {},
                        e = [];
                    for (let t of this._threads) e.push(t.jsonToken);
                    return t.threads = e, t.threadCounter = this._threadCounter, t
                }
                PushThread() {
                    let t = this.currentThread.Copy();
                    this._threadCounter++, t.threadIndex = this._threadCounter, this._threads.push(t)
                }
                PopThread() {
                    if (!this.canPopThread) throw new Error("Can't pop thread");
                    this._threads.splice(this._threads.indexOf(this.currentThread), 1)
                }
                get canPopThread() {
                    return this._threads.length > 1 && !this.elementIsEvaluateFromGame
                }
                get elementIsEvaluateFromGame() {
                    return this.currentElement.type == i.FunctionEvaluationFromGame
                }
                Push(t, e = 0, n = 0) {
                    let r = new W.Element(t, this.currentElement.currentPointer, !1);
                    r.evaluationStackHeightWhenPushed = e, r.functionStartInOutputStream = n, this.callStack.push(r)
                }
                CanPop(t = null) {
                    return !!this.canPop && (null == t || this.currentElement.type == t)
                }
                Pop(t = null) {
                    if (!this.CanPop(t)) throw new Error("Mismatched push/pop in Callstack");
                    this.callStack.pop()
                }
                GetTemporaryVariableWithName(t, e = -1) {
                    -1 == e && (e = this.currentElementIndex + 1);
                    let n = y(this.callStack[e - 1].temporaryVariables, t, null);
                    return n.exists ? n.result : null
                }
                SetTemporaryVariable(t, e, n, r = -1) {
                    -1 == r && (r = this.currentElementIndex + 1);
                    let i = this.callStack[r - 1];
                    if (!n && !i.temporaryVariables.get(t)) throw new v("Could not find temporary variable to set: " + t);
                    let a = y(i.temporaryVariables, t, null);
                    a.exists && T.RetainListOriginsForAssignment(a.result, e), i.temporaryVariables.set(t, e)
                }
                ContextForVariableNamed(t) {
                    return this.currentElement.temporaryVariables.get(t) ? this.currentElementIndex + 1 : 0
                }
                ThreadWithIndex(t) {
                    return this._threads.filter(e => {
                        if (e.threadIndex == t) return e
                })[0]
                }
                get callStack() {
                    return this.currentThread.callstack
                }
                get callStackTrace() {
                    let t = new d;
                    for (let e = 0; e < this._threads.length; e++) {
                        let n = this._threads[e],
                            r = e == this._threads.length - 1;
                        t.AppendFormat("=== THREAD {0}/{1} {2}===\n", e + 1, this._threads.length, r ? "(current) " : "");
                        for (let e = 0; e < n.callstack.length; e++) {
                            n.callstack[e].type == i.Function ? t.Append("  [FUNCTION] ") : t.Append("  [TUNNEL] ");
                            let r = n.callstack[e].currentPointer;
                            if (!r.isNull) {
                                if (t.Append("<SOMEWHERE IN "), null === r.container) return p("pointer.container");
                                t.Append(r.container.path.toString()), t.AppendLine(">")
                            }
                        }
                    }
                    return t.toString()
                }
            }! function(t) {
                class n {
                    constructor(t, e, n = !1) {
                        this.evaluationStackHeightWhenPushed = 0, this.functionStartInOutputStream = 0, this.currentPointer = e.copy(), this.inExpressionEvaluation = n, this.temporaryVariables = new Map, this.type = t
                    }
                    Copy() {
                        let t = new n(this.type, this.currentPointer, this.inExpressionEvaluation);
                        return t.temporaryVariables = new Map(this.temporaryVariables), t.evaluationStackHeightWhenPushed = this.evaluationStackHeightWhenPushed, t.functionStartInOutputStream = this.functionStartInOutputStream, t
                    }
                }
                t.Element = n;
                class r {
                    constructor() {
                        if (this.threadIndex = 0, this.previousPointer = I.Null, this.callstack = [], arguments[0] && arguments[1]) {
                            let t = arguments[0],
                                r = arguments[1];
                            this.threadIndex = parseInt(t.threadIndex);
                            let i = t.callstack;
                            for (let t of i) {
                                let i, a = t,
                                    o = parseInt(a.type),
                                    s = I.Null,
                                    l = a.cPath;
                                if (void 0 !== l) {
                                    i = l.toString();
                                    let t = r.ContentAtPath(new e(i));
                                    if (s.container = t.container, s.index = parseInt(a.idx), null == t.obj) throw new Error("When loading state, internal story location couldn't be found: " + i + ". Has the story changed since this save data was created?");
                                    if (t.approximate) {
                                        if (null === s.container) return p("pointer.container");
                                        r.Warning("When loading state, exact internal story location couldn't be found: '" + i + "', so it was approximated to '" + s.container.path.toString() + "' to recover. Has the story changed since this save data was created?")
                                    }
                                }
                                let u = !!a.exp,
                                    c = new n(o, s, u),
                                    h = a.temp;
                                c.temporaryVariables = B.JObjectToDictionaryRuntimeObjs(h), this.callstack.push(c)
                            }
                            let a = t.previousContentObject;
                            if (void 0 !== a) {
                                let t = new e(a.toString());
                                this.previousPointer = r.PointerAtPath(t)
                            }
                        }
                    }
                    Copy() {
                        let t = new r;
                        t.threadIndex = this.threadIndex;
                        for (let e of this.callstack) t.callstack.push(e.Copy());
                        return t.previousPointer = this.previousPointer.copy(), t
                    }
                    get jsonToken() {
                        let t = {},
                            e = [];
                        for (let t of this.callstack) {
                            let n = {};
                            if (!t.currentPointer.isNull) {
                                if (null === t.currentPointer.container) return p("el.currentPointer.container");
                                n.cPath = t.currentPointer.container.path.componentsString, n.idx = t.currentPointer.index
                            }
                            n.exp = t.inExpressionEvaluation, n.type = t.type, n.temp = B.DictionaryRuntimeObjsToJObject(t.temporaryVariables), e.push(n)
                        }
                        if (t.callstack = e, t.threadIndex = this.threadIndex, !this.previousPointer.isNull) {
                            let e = this.previousPointer.Resolve();
                            if (null === e) return p("this.previousPointer.Resolve()");
                            t.previousContentObject = e.path.toString()
                        }
                        return t
                    }
                }
                t.Thread = r
            }(W || (W = {}));
            class G {
                constructor(t, e) {
                    this.variableChangedEventCallbacks = [], this._batchObservingVariableChanges = !1, this._defaultGlobalVariables = new Map, this._changedVariables = new Set, this._globalVariables = new Map, this._callStack = t, this._listDefsOrigin = e;
                    try {
                        return new Proxy(this, {
                                get: (t, e) => e in t ? t[e] : t.$(e),
                            set: (t, e, n) => (e in t ? t[e] = n : t.$(e, n), !0)
                    })
                    } catch (t) {}
                }
                variableChangedEvent(t, e) {
                    for (let n of this.variableChangedEventCallbacks) n(t, e)
                }
                get batchObservingVariableChanges() {
                    return this._batchObservingVariableChanges
                }
                set batchObservingVariableChanges(t) {
                    if (this._batchObservingVariableChanges = t, t) this._changedVariables = new Set;
                    else if (null != this._changedVariables)
                        for (let t of this._changedVariables) {
                            let e = this._globalVariables.get(t);
                            e ? this.variableChangedEvent(t, e) : p("currentValue")
                        }
                }
                get callStack() {
                    return this._callStack
                }
                set callStack(t) {
                    this._callStack = t
                }
                $(t, e) {
                    if (void 0 === e) {
                        let e = this._globalVariables.get(t);
                        return void 0 === e && (e = this._defaultGlobalVariables.get(t)), void 0 !== e ? e.valueObject : null
                    } {
                        if (void 0 === this._defaultGlobalVariables.get(t)) throw new v("Cannot assign to a variable (" + t + ") that hasn't been declared in the story");
                        let n = w.Create(e);
                        if (null == n) throw new v(null == e ? "Cannot pass null to VariableState" : "Invalid value passed to VariableState: " + e.toString());
                        this.SetGlobal(t, n)
                    }
                }
                CopyFrom(t) {
                    if (this._globalVariables = new Map(t._globalVariables), this._defaultGlobalVariables = new Map(t._defaultGlobalVariables), this.variableChangedEvent = t.variableChangedEvent, t.batchObservingVariableChanges != this.batchObservingVariableChanges)
                        if (t.batchObservingVariableChanges) {
                            if (this._batchObservingVariableChanges = !0, null === t._changedVariables) return p("toCopy._changedVariables");
                            this._changedVariables = new Set(t._changedVariables)
                        } else this._batchObservingVariableChanges = !1, this._changedVariables = null
                }
                get jsonToken() {
                    return B.DictionaryRuntimeObjsToJObject(this._globalVariables)
                }
                set jsonToken(t) {
                    this._globalVariables = B.JObjectToDictionaryRuntimeObjs(t)
                }
                TryGetDefaultVariableValue(t) {
                    let e = y(this._defaultGlobalVariables, t, null);
                    return e.exists ? e.result : null
                }
                GlobalVariableExistsWithName(t) {
                    return this._globalVariables.has(t)
                }
                GetVariableWithName(t, e = -1) {
                    let n = this.GetRawVariableWithName(t, e),
                        r = a(n, k);
                    return null !== r && (n = this.ValueAtVariablePointer(r)), n
                }
                GetRawVariableWithName(t, e) {
                    let n = null;
                    if (0 == e || -1 == e) {
                        let e = y(this._globalVariables, t, null);
                        if (e.exists) return e.result;
                        if (null === this._listDefsOrigin) return p("VariablesState._listDefsOrigin");
                        let n = this._listDefsOrigin.FindSingleItemListWithName(t);
                        if (n) return n
                    }
                    return n = this._callStack.GetTemporaryVariableWithName(t, e)
                }
                ValueAtVariablePointer(t) {
                    return this.GetVariableWithName(t.variableName, t.contextIndex)
                }
                Assign(t, e) {
                    let n = t.variableName;
                    if (null === n) return p("name");
                    let r = -1,
                        i = !1;
                    if (i = t.isNewDeclaration ? t.isGlobal : this._globalVariables.has(n), t.isNewDeclaration) {
                        let t = a(e, k);
                        null !== t && (e = this.ResolveVariablePointer(t))
                    } else {
                        let t = null;
                        do {
                            null != (t = a(this.GetRawVariableWithName(n, r), k)) && (n = t.variableName, i = 0 == (r = t.contextIndex))
                        } while (null != t)
                    }
                    i ? this.SetGlobal(n, e) : this._callStack.SetTemporaryVariable(n, e, t.isNewDeclaration, r)
                }
                SnapshotDefaultGlobals() {
                    this._defaultGlobalVariables = new Map(this._globalVariables)
                }
                RetainListOriginsForAssignment(t, e) {
                    let n = o(t, T),
                        r = o(e, T);
                    n.value && r.value && 0 == r.value.Count && r.value.SetInitialOriginNames(n.value.originNames)
                }
                SetGlobal(t, e) {
                    let n = y(this._globalVariables, t, null);
                    if (n.exists && T.RetainListOriginsForAssignment(n.result, e), null === t) return p("variableName");
                    if (this._globalVariables.set(t, e), null != this.variableChangedEvent && e !== n.result)
                        if (this.batchObservingVariableChanges) {
                            if (null === this._changedVariables) return p("this._changedVariables");
                            this._changedVariables.add(t)
                        } else this.variableChangedEvent(t, e)
                }
                ResolveVariablePointer(t) {
                    let e = t.contextIndex; - 1 == e && (e = this.GetContextIndexOfVariableNamed(t.variableName));
                    let n = a(this.GetRawVariableWithName(t.variableName, e), k);
                    return null != n ? n : new k(t.variableName, e)
                }
                GetContextIndexOfVariableNamed(t) {
                    return this._globalVariables.get(t) ? 0 : this._callStack.currentElementIndex
                }
                ObserveVariableChange(t) {
                    this.variableChangedEventCallbacks.push(t)
                }
            }
            class q {
                constructor(t) {
                    this.seed = t % 2147483647, this.seed <= 0 && (this.seed += 2147483646)
                }
                next() {
                    return this.seed = 16807 * this.seed % 2147483647
                }
                nextFloat() {
                    return (this.next() - 1) / 2147483646
                }
            }
            class U {
                constructor(t) {
                    this.kInkSaveStateVersion = 8, this.kMinCompatibleLoadVersion = 8, this._currentErrors = null, this._currentWarnings = null, this.divertedPointer = I.Null, this._currentTurnIndex = 0, this.storySeed = 0, this.previousRandom = 0, this.didSafeExit = !1, this._currentText = null, this._currentTags = null, this._outputStreamTextDirty = !0, this._outputStreamTagsDirty = !0, this.story = t, this._outputStream = [], this.OutputStreamDirty(), this._evaluationStack = [], this.callStack = new W(t.rootContentContainer), this._variablesState = new G(this.callStack, t.listDefinitions), this._visitCounts = new Map, this._turnIndices = new Map, this._currentTurnIndex = -1;
                    let e = (new Date).getTime();
                    this.storySeed = new q(e).next() % 100, this.previousRandom = 0, this._currentChoices = [], this.GoToStart()
                }
                ToJson(t = !1) {
                    return JSON.stringify(this.jsonToken, null, t ? 2 : 0)
                }
                toJson(t = !1) {
                    return this.ToJson(t)
                }
                LoadJson(t) {
                    this.jsonToken = JSON.parse(t)
                }
                VisitCountAtPathString(t) {
                    let e = y(this.visitCounts, t, null);
                    return e.exists ? e.result : 0
                }
                get callstackDepth() {
                    return this.callStack.depth
                }
                get outputStream() {
                    return this._outputStream
                }
                get currentChoices() {
                    return this.canContinue ? [] : this._currentChoices
                }
                get generatedChoices() {
                    return this._currentChoices
                }
                get currentErrors() {
                    return this._currentErrors
                }
                get currentWarnings() {
                    return this._currentWarnings
                }
                get variablesState() {
                    return this._variablesState
                }
                get evaluationStack() {
                    return this._evaluationStack
                }
                get visitCounts() {
                    return this._visitCounts
                }
                get turnIndices() {
                    return this._turnIndices
                }
                get currentTurnIndex() {
                    return this._currentTurnIndex
                }
                get currentPathString() {
                    let t = this.currentPointer;
                    return t.isNull ? null : null === t.path ? p("pointer.path") : t.path.toString()
                }
                get currentPointer() {
                    return this.callStack.currentElement.currentPointer.copy()
                }
                set currentPointer(t) {
                    this.callStack.currentElement.currentPointer = t.copy()
                }
                get previousPointer() {
                    return this.callStack.currentThread.previousPointer.copy()
                }
                set previousPointer(t) {
                    this.callStack.currentThread.previousPointer = t.copy()
                }
                get canContinue() {
                    return !this.currentPointer.isNull && !this.hasError
                }
                get hasError() {
                    return null != this.currentErrors && this.currentErrors.length > 0
                }
                get hasWarning() {
                    return null != this.currentWarnings && this.currentWarnings.length > 0
                }
                get currentText() {
                    if (this._outputStreamTextDirty) {
                        let t = new d;
                        for (let e of this._outputStream) {
                            let n = a(e, S);
                            null !== n && t.Append(n.value)
                        }
                        this._currentText = this.CleanOutputWhitespace(t.toString()), this._outputStreamTextDirty = !1
                    }
                    return this._currentText
                }
                CleanOutputWhitespace(t) {
                    let e = new d,
                        n = -1,
                        r = 0;
                    for (let i = 0; i < t.length; i++) {
                        let a = t.charAt(i),
                            o = " " == a || "\t" == a;
                        o && -1 == n && (n = i), o || ("\n" != a && n > 0 && n != r && e.Append(" "), n = -1), "\n" == a && (r = i + 1), o || e.Append(a)
                    }
                    return e.toString()
                }
                get currentTags() {
                    if (this._outputStreamTagsDirty) {
                        this._currentTags = [];
                        for (let t of this._outputStream) {
                            let e = a(t, j);
                            null !== e && this._currentTags.push(e.text)
                        }
                        this._outputStreamTagsDirty = !1
                    }
                    return this._currentTags
                }
                get inExpressionEvaluation() {
                    return this.callStack.currentElement.inExpressionEvaluation
                }
                set inExpressionEvaluation(t) {
                    this.callStack.currentElement.inExpressionEvaluation = t
                }
                GoToStart() {
                    this.callStack.currentElement.currentPointer = I.StartOf(this.story.mainContentContainer)
                }
                Copy() {
                    let t = new U(this.story);
                    return t.outputStream.push.apply(t.outputStream, this._outputStream), this.OutputStreamDirty(), t._currentChoices.push.apply(t._currentChoices, this._currentChoices), this.hasError && (t._currentErrors = [], t._currentErrors.push.apply(t._currentErrors, this.currentErrors || [])), this.hasWarning && (t._currentWarnings = [], t._currentWarnings.push.apply(t._currentWarnings, this.currentWarnings || [])), t.callStack = new W(this.callStack), t._variablesState = new G(t.callStack, this.story.listDefinitions), t.variablesState.CopyFrom(this.variablesState), t.evaluationStack.push.apply(t.evaluationStack, this.evaluationStack), this.divertedPointer.isNull || (t.divertedPointer = this.divertedPointer.copy()), t.previousPointer = this.previousPointer.copy(), t._visitCounts = new Map(this.visitCounts), t._turnIndices = new Map(this.turnIndices), t._currentTurnIndex = this.currentTurnIndex, t.storySeed = this.storySeed, t.previousRandom = this.previousRandom, t.didSafeExit = this.didSafeExit, t
                }
                get jsonToken() {
                    let t, e = {};
                    for (let e of this._currentChoices) {
                        if (null === e.threadAtGeneration) return p("c.threadAtGeneration");
                        e.originalThreadIndex = e.threadAtGeneration.threadIndex, null == this.callStack.ThreadWithIndex(e.originalThreadIndex) && (null == t && (t = new Map), t[e.originalThreadIndex.toString()] = e.threadAtGeneration.jsonToken)
                    }
                    if (null != t && (e.choiceThreads = t), e.callstackThreads = this.callStack.GetJsonToken(), e.variablesState = this.variablesState.jsonToken, e.evalStack = B.ListToJArray(this.evaluationStack), e.outputStream = B.ListToJArray(this._outputStream), e.currentChoices = B.ListToJArray(this._currentChoices), !this.divertedPointer.isNull) {
                        if (null === this.divertedPointer.path) return p("this.divertedPointer.path");
                        e.currentDivertTarget = this.divertedPointer.path.componentsString
                    }
                    return e.visitCounts = B.IntDictionaryToJObject(this.visitCounts), e.turnIndices = B.IntDictionaryToJObject(this.turnIndices), e.turnIdx = this.currentTurnIndex, e.storySeed = this.storySeed, e.previousRandom = this.previousRandom, e.inkSaveVersion = this.kInkSaveStateVersion, e.inkFormatVersion = this.story.inkVersionCurrent, e
                }
                set jsonToken(t) {
                    let n = t,
                        r = n.inkSaveVersion;
                    if (null == r) throw new v("ink save format incorrect, can't load.");
                    if (parseInt(r) < this.kMinCompatibleLoadVersion) throw new v("Ink save format isn't compatible with the current version (saw '" + r + "', but minimum is " + this.kMinCompatibleLoadVersion + "), so can't load.");
                    this.callStack.SetJsonToken(n.callstackThreads, this.story), this.variablesState.jsonToken = n.variablesState, this._evaluationStack = B.JArrayToRuntimeObjList(n.evalStack), this._outputStream = B.JArrayToRuntimeObjList(n.outputStream), this.OutputStreamDirty(), this._currentChoices = B.JArrayToRuntimeObjList(n.currentChoices);
                    let i = n.currentDivertTarget;
                    if (null != i) {
                        let t = new e(i.toString());
                        this.divertedPointer = this.story.PointerAtPath(t)
                    }
                    this._visitCounts = B.JObjectToIntDictionary(n.visitCounts), this._turnIndices = B.JObjectToIntDictionary(n.turnIndices), this._currentTurnIndex = parseInt(n.turnIdx), this.storySeed = parseInt(n.storySeed), this.previousRandom = parseInt(n.previousRandom);
                    let a = n.choiceThreads;
                    for (let t of this._currentChoices) {
                        let e = this.callStack.ThreadWithIndex(t.originalThreadIndex);
                        if (null != e) t.threadAtGeneration = e.Copy();
                        else {
                            let e = a[t.originalThreadIndex.toString()];
                            t.threadAtGeneration = new W.Thread(e, this.story)
                        }
                    }
                }
                ResetErrors() {
                    this._currentErrors = null, this._currentWarnings = null
                }
                ResetOutput(t = null) {
                    this._outputStream.length = 0, null !== t && this._outputStream.push.apply(this._outputStream, t), this.OutputStreamDirty()
                }
                PushToOutputStream(t) {
                    let e = a(t, S);
                    if (null !== e) {
                        let t = this.TrySplittingHeadTailWhitespace(e);
                        if (null !== t) {
                            for (let e of t) this.PushToOutputStreamIndividual(e);
                            return void this.OutputStreamDirty()
                        }
                    }
                    this.PushToOutputStreamIndividual(t), this.OutputStreamDirty()
                }
                PopFromOutputStream(t) {
                    this.outputStream.splice(this.outputStream.length - t, t), this.OutputStreamDirty()
                }
                TrySplittingHeadTailWhitespace(t) {
                    let e = t.value;
                    if (null === e) return p("single.value");
                    let n = -1,
                        r = -1;
                    for (let t = 0; t < e.length; ++t) {
                        let i = e[t];
                        if ("\n" != i) {
                            if (" " == i || "\t" == i) continue;
                            break
                        } - 1 == n && (n = t), r = t
                    }
                    let i = -1,
                        a = -1;
                    for (let t = 0; t < e.length; ++t) {
                        let n = e[t];
                        if ("\n" != n) {
                            if (" " == n || "\t" == n) continue;
                            break
                        } - 1 == i && (i = t), a = t
                    }
                    if (-1 == n && -1 == i) return null;
                    let o = [],
                        s = 0,
                        l = e.length;
                    if (-1 != n) {
                        if (n > 0) {
                            let t = new S(e.substring(0, n));
                            o.push(t)
                        }
                        o.push(new S("\n")), s = r + 1
                    }
                    if (-1 != i && (l = a), l > s) {
                        let t = e.substring(s, l - s);
                        o.push(new S(t))
                    }
                    if (-1 != i && a > r && (o.push(new S("\n")), i < e.length - 1)) {
                        let t = e.length - i - 1,
                            n = new S(e.substring(i + 1, t));
                        o.push(n)
                    }
                    return o
                }
                PushToOutputStreamIndividual(t) {
                    let e = a(t, A),
                        n = a(t, S),
                        r = !0;
                    if (e) this.TrimNewlinesFromOutputStream(), r = !0;
                    else if (n) {
                        let t = -1,
                            e = this.callStack.currentElement;
                        e.type == i.Function && (t = e.functionStartInOutputStream);
                        let a = -1;
                        for (let e = this._outputStream.length - 1; e >= 0; e--) {
                            let n = this._outputStream[e],
                                r = n instanceof N ? n : null;
                            if (null != (n instanceof A ? n : null)) {
                                a = e;
                                break
                            }
                            if (null != r && r.commandType == N.CommandType.BeginString) {
                                e >= t && (t = -1);
                                break
                            }
                        }
                        let o = -1;
                        if (-1 != (o = -1 != a && -1 != t ? Math.min(t, a) : -1 != a ? a : t)) {
                            if (n.isNewline) r = !1;
                            else if (n.isNonWhitespace && (a > -1 && this.RemoveExistingGlue(), t > -1)) {
                                let t = this.callStack.elements;
                                for (let e = t.length - 1; e >= 0; e--) {
                                    let n = t[e];
                                    if (n.type != i.Function) break;
                                    n.functionStartInOutputStream = -1
                                }
                            }
                        } else n.isNewline && (!this.outputStreamEndsInNewline && this.outputStreamContainsContent || (r = !1))
                    }
                    if (r) {
                        if (null === t) return p("obj");
                        this._outputStream.push(t), this.OutputStreamDirty()
                    }
                }
                TrimNewlinesFromOutputStream() {
                    let t = -1,
                        e = this._outputStream.length - 1;
                    for (; e >= 0;) {
                        let n = this._outputStream[e],
                            r = a(n, N),
                            i = a(n, S);
                        if (null != r || null != i && i.isNonWhitespace) break;
                        null != i && i.isNewline && (t = e), e--
                    }
                    if (t >= 0)
                        for (e = t; e < this._outputStream.length;) a(this._outputStream[e], S) ? this._outputStream.splice(e, 1) : e++;
                    this.OutputStreamDirty()
                }
                RemoveExistingGlue() {
                    for (let t = this._outputStream.length - 1; t >= 0; t--) {
                        let e = this._outputStream[t];
                        if (e instanceof A) this._outputStream.splice(t, 1);
                        else if (e instanceof N) break
                    }
                    this.OutputStreamDirty()
                }
                get outputStreamEndsInNewline() {
                    if (this._outputStream.length > 0)
                        for (let t = this._outputStream.length - 1; t >= 0 && !(this._outputStream[t] instanceof N); t--) {
                            let e = this._outputStream[t];
                            if (e instanceof S) {
                                if (e.isNewline) return !0;
                                if (e.isNonWhitespace) break
                            }
                        }
                    return !1
                }
                get outputStreamContainsContent() {
                    for (let t = 0; t < this._outputStream.length; t++)
                        if (this._outputStream[t] instanceof S) return !0;
                    return !1
                }
                get inStringEvaluation() {
                    for (let t = this._outputStream.length - 1; t >= 0; t--) {
                        let e = a(this._outputStream[t], N);
                        if (e instanceof N && e.commandType == N.CommandType.BeginString) return !0
                    }
                    return !1
                }
                PushEvaluationStack(t) {
                    let e = a(t, T);
                    if (e) {
                        let t = e.value;
                        if (null === t) return p("rawList");
                        if (null != t.originNames) {
                            t.origins || (t.origins = []), t.origins.length = 0;
                            for (let e of t.originNames) {
                                if (null === this.story.listDefinitions) return p("StoryState.story.listDefinitions");
                                let n = this.story.listDefinitions.TryListGetDefinition(e, null);
                                if (null === n.result) return p("StoryState def.result");
                                t.origins.indexOf(n.result) < 0 && t.origins.push(n.result)
                            }
                        }
                    }
                    if (null === t) return p("obj");
                    this.evaluationStack.push(t)
                }
                PopEvaluationStack(t) {
                    if (void 0 === t) return u(this.evaluationStack.pop());
                    if (t > this.evaluationStack.length) throw new Error("trying to pop too many objects");
                    return u(this.evaluationStack.splice(this.evaluationStack.length - t, t))
                }
                PeekEvaluationStack() {
                    return this.evaluationStack[this.evaluationStack.length - 1]
                }
                ForceEnd() {
                    for (; this.callStack.canPopThread;) this.callStack.PopThread();
                    for (; this.callStack.canPop;) this.PopCallStack();
                    this._currentChoices.length = 0, this.currentPointer = I.Null, this.previousPointer = I.Null, this.didSafeExit = !0
                }
                TrimWhitespaceFromFunctionEnd() {
                    n.Assert(this.callStack.currentElement.type == i.Function);
                    let t = this.callStack.currentElement.functionStartInOutputStream; - 1 == t && (t = 0);
                    for (let e = this._outputStream.length - 1; e >= t; e--) {
                        let t = this._outputStream[e],
                            n = a(t, S),
                            r = a(t, N);
                        if (null != n) {
                            if (r) break;
                            if (!n.isNewline && !n.isInlineWhitespace) break;
                            this._outputStream.splice(e, 1), this.OutputStreamDirty()
                        }
                    }
                }
                PopCallStack(t = null) {
                    this.callStack.currentElement.type == i.Function && this.TrimWhitespaceFromFunctionEnd(), this.callStack.Pop(t)
                }
                SetChosenPath(t, e) {
                    this._currentChoices.length = 0;
                    let n = this.story.PointerAtPath(t);
                    n.isNull || -1 != n.index || (n.index = 0), this.currentPointer = n, e && this._currentTurnIndex++
                }
                StartFunctionEvaluationFromGame(t, e) {
                    this.callStack.Push(i.FunctionEvaluationFromGame, this.evaluationStack.length), this.callStack.currentElement.currentPointer = I.StartOf(t), this.PassArgumentsToEvaluationStack(e)
                }
                PassArgumentsToEvaluationStack(t) {
                    if (null != t)
                        for (let e = 0; e < t.length; e++) {
                            if ("number" != typeof t[e] && "string" != typeof t[e]) throw new Error("ink arguments when calling EvaluateFunction / ChoosePathStringWithParameters  must be int, float or string");
                            this.PushEvaluationStack(w.Create(t[e]))
                        }
                }
                TryExitFunctionEvaluationFromGame() {
                    return this.callStack.currentElement.type == i.FunctionEvaluationFromGame && (this.currentPointer = I.Null, this.didSafeExit = !0, !0)
                }
                CompleteFunctionEvaluationFromGame() {
                    if (this.callStack.currentElement.type != i.FunctionEvaluationFromGame) throw new v("Expected external function evaluation to be complete. Stack trace: " + this.callStack.callStackTrace);
                    let t = this.callStack.currentElement.evaluationStackHeightWhenPushed,
                        e = null;
                    for (; this.evaluationStack.length > t;) {
                        let t = this.PopEvaluationStack();
                        null === e && (e = t)
                    }
                    if (this.PopCallStack(i.FunctionEvaluationFromGame), e) {
                        if (e instanceof L) return null;
                        let t = o(e, w);
                        return t.valueType == r.DivertTarget ? t.valueObject.toString() : t.valueObject
                    }
                    return null
                }
                AddError(t, e) {
                    e ? (null == this._currentWarnings && (this._currentWarnings = []), this._currentWarnings.push(t)) : (null == this._currentErrors && (this._currentErrors = []), this._currentErrors.push(t))
                }
                OutputStreamDirty() {
                    this._outputStreamTextDirty = !0, this._outputStreamTagsDirty = !0
                }
            }
            class H {
                constructor() {
                    this.startTime = void 0
                }
                get ElapsedMilliseconds() {
                    return void 0 === this.startTime ? 0 : (new Date).getTime() - this.startTime
                }
                Start() {
                    this.startTime = (new Date).getTime()
                }
                Stop() {
                    this.startTime = void 0
                }
            }
            Number.isInteger || (Number.isInteger = function(t) {
                return "number" == typeof t && isFinite(t) && t > -9007199254740992 && t < 9007199254740992 && Math.floor(t) === t
            });
            class J extends f {
                constructor() {
                    let t;
                    super(), this.inkVersionCurrent = 19, this.inkVersionMinimumCompatible = 18, this._prevContainers = [], this.allowExternalFunctionFallbacks = !1, this._listDefinitions = null, this._variableObservers = null, this._hasValidatedExternals = !1, this._temporaryEvaluationContainer = null, this._asyncContinueActive = !1, this._stateAtLastNewline = null, this._recursiveContinueCount = 0, this._profiler = null;
                    let e = null,
                        n = null;
                    if (arguments[0] instanceof E) t = arguments[0], void 0 !== arguments[1] && (e = arguments[1]), this._mainContentContainer = t;
                    else if ("string" == typeof arguments[0]) {
                        let t = arguments[0];
                        n = JSON.parse(t)
                    } else n = arguments[0]; if (null != e && (this._listDefinitions = new z(e)), this._externals = new Map, null !== n) {
                        let t = n,
                            e = t.inkVersion;
                        if (null == e) throw new Error("ink version number not found. Are you sure it's a valid .ink.json file?");
                        let r = parseInt(e);
                        if (r > this.inkVersionCurrent) throw new Error("Version of ink used to build story was newer than the current version of the engine");
                        if (r < this.inkVersionMinimumCompatible) throw new Error("Version of ink used to build story is too old to be loaded by this version of the engine");
                        r != this.inkVersionCurrent && console.warn("WARNING: Version of ink used to build story doesn't match current version of engine. Non-critical, but recommend synchronising.");
                        let i, a = t.root;
                        if (null == a) throw new Error("Root node for ink not found. Are you sure it's a valid .ink.json file?");
                        (i = t.listDefs) && (this._listDefinitions = B.JTokenToListDefinitions(i)), this._mainContentContainer = o(B.JTokenToRuntimeObject(a), E), this.ResetState()
                    }
                }
                get currentChoices() {
                    let t = [];
                    if (null === this._state) return p("this._state");
                    for (let e of this._state.currentChoices) e.isInvisibleDefault || (e.index = t.length, t.push(e));
                    return t
                }
                get currentText() {
                    return this.IfAsyncWeCant("call currentText since it's a work in progress"), this.state.currentText
                }
                get currentTags() {
                    return this.IfAsyncWeCant("call currentTags since it's a work in progress"), this.state.currentTags
                }
                get currentErrors() {
                    return this.state.currentErrors
                }
                get currentWarnings() {
                    return this.state.currentWarnings
                }
                get hasError() {
                    return this.state.hasError
                }
                get hasWarning() {
                    return this.state.hasWarning
                }
                get variablesState() {
                    return this.state.variablesState
                }
                get listDefinitions() {
                    return this._listDefinitions
                }
                get state() {
                    return this._state
                }
                StartProfiling() {}
                EndProfiling() {}
                ToJsonString() {
                    let t = B.RuntimeObjectToJToken(this._mainContentContainer),
                        e = {};
                    return e.inkVersion = this.inkVersionCurrent, e.root = t, null != this._listDefinitions && (e.listDefs = B.ListDefinitionsToJToken(this._listDefinitions)), JSON.stringify(e)
                }
                ResetState() {
                    this.IfAsyncWeCant("ResetState"), this._state = new U(this), this._state.variablesState.ObserveVariableChange(this.VariableStateDidChangeEvent.bind(this)), this.ResetGlobals()
                }
                ResetErrors() {
                    if (null === this._state) return p("this._state");
                    this._state.ResetErrors()
                }
                ResetCallstack() {
                    if (this.IfAsyncWeCant("ResetCallstack"), null === this._state) return p("this._state");
                    this._state.ForceEnd()
                }
                ResetGlobals() {
                    if (this._mainContentContainer.namedContent.get("global decl")) {
                        let t = this.state.currentPointer.copy();
                        this.ChoosePath(new e("global decl"), !1), this.ContinueInternal(), this.state.currentPointer = t
                    }
                    this.state.variablesState.SnapshotDefaultGlobals()
                }
                Continue() {
                    return this.ContinueAsync(0), this.currentText
                }
                get canContinue() {
                    return this.state.canContinue
                }
                get asyncContinueComplete() {
                    return !this._asyncContinueActive
                }
                ContinueAsync(t) {
                    this._hasValidatedExternals || this.ValidateExternalBindings(), this.ContinueInternal(t)
                }
                ContinueInternal(t = 0) {
                    null != this._profiler && this._profiler.PreContinue();
                    let e = t > 0;
                    if (this._recursiveContinueCount++, !this._asyncContinueActive) {
                        if (this._asyncContinueActive = e, !this.canContinue) throw new v("Can't continue - should check canContinue before calling Continue");
                        this._state.didSafeExit = !1, this._state.ResetOutput(), 1 == this._recursiveContinueCount && (this._state.variablesState.batchObservingVariableChanges = !0)
                    }
                    let n = new H;
                    n.Start();
                    let r = !1;
                    do {
                        try {
                            r = this.ContinueSingleStep()
                        } catch (t) {
                            if (!(t instanceof v)) throw t;
                            this.AddError(t.message, void 0, t.useEndLineNumber);
                            break
                        }
                        if (r) break;
                        if (this._asyncContinueActive && n.ElapsedMilliseconds > t) break
                    } while (this.canContinue);
                    n.Stop(), !r && this.canContinue || (null != this._stateAtLastNewline && (this.RestoreStateSnapshot(this._stateAtLastNewline), this._stateAtLastNewline = null), this.canContinue || (this.state.callStack.canPopThread && this.AddError("Thread available to pop, threads should always be flat by the end of evaluation?"), 0 != this.state.generatedChoices.length || this.state.didSafeExit || null != this._temporaryEvaluationContainer || (this.state.callStack.CanPop(i.Tunnel) ? this.AddError("unexpectedly reached end of content. Do you need a '->->' to return from a tunnel?") : this.state.callStack.CanPop(i.Function) ? this.AddError("unexpectedly reached end of content. Do you need a '~ return'?") : this.state.callStack.canPop ? this.AddError("unexpectedly reached end of content for unknown reason. Please debug compiler!") : this.AddError("ran out of content. Do you need a '-> DONE' or '-> END'?"))), this.state.didSafeExit = !1, 1 == this._recursiveContinueCount && (this._state.variablesState.batchObservingVariableChanges = !1), this._asyncContinueActive = !1), this._recursiveContinueCount--, null != this._profiler && this._profiler.PostContinue()
                }
                ContinueSingleStep() {
                    if (null != this._profiler && this._profiler.PreStep(), this.Step(), null != this._profiler && this._profiler.PostStep(), this.canContinue || this.state.callStack.elementIsEvaluateFromGame || this.TryFollowDefaultInvisibleChoice(), null != this._profiler && this._profiler.PreSnapshot(), !this.state.inStringEvaluation) {
                        if (null != this._stateAtLastNewline) {
                            if (null === this._stateAtLastNewline.currentTags) return p("this._stateAtLastNewline.currentTags");
                            if (null === this.state.currentTags) return p("this.state.currentTags");
                            let t = this.CalculateNewlineOutputStateChange(this._stateAtLastNewline.currentText, this.state.currentText, this._stateAtLastNewline.currentTags.length, this.state.currentTags.length);
                            if (t == J.OutputStateChange.ExtendedBeyondNewline) return this.RestoreStateSnapshot(this._stateAtLastNewline), !0;
                            t == J.OutputStateChange.NewlineRemoved && (this._stateAtLastNewline = null)
                        }
                        this.state.outputStreamEndsInNewline && (this.canContinue ? null == this._stateAtLastNewline && (this._stateAtLastNewline = this.StateSnapshot()) : this._stateAtLastNewline = null)
                    }
                    return null != this._profiler && this._profiler.PostSnapshot(), !1
                }
                CalculateNewlineOutputStateChange(t, e, n, r) {
                    if (null === t) return p("prevText");
                    if (null === e) return p("currText");
                    let i = e.length >= t.length && "\n" == e.charAt(t.length - 1);
                    if (n == r && t.length == e.length && i) return J.OutputStateChange.NoChange;
                    if (!i) return J.OutputStateChange.NewlineRemoved;
                    if (r > n) return J.OutputStateChange.ExtendedBeyondNewline;
                    for (let n = t.length; n < e.length; n++) {
                        let t = e.charAt(n);
                        if (" " != t && "\t" != t) return J.OutputStateChange.ExtendedBeyondNewline
                    }
                    return J.OutputStateChange.NoChange
                }
                ContinueMaximally() {
                    this.IfAsyncWeCant("ContinueMaximally");
                    let t = new d;
                    for (; this.canContinue;) t.Append(this.Continue());
                    return t.toString()
                }
                ContentAtPath(t) {
                    return this.mainContentContainer.ContentAtPath(t)
                }
                KnotContainerWithName(t) {
                    let e = this.mainContentContainer.namedContent.get(t);
                    return e instanceof E ? e : null
                }
                PointerAtPath(t) {
                    if (0 == t.length) return I.Null;
                    let e = new I,
                        n = t.length,
                        r = null;
                    return null === t.lastComponent ? p("path.lastComponent") : (t.lastComponent.isIndex ? (n = t.length - 1, r = this.mainContentContainer.ContentAtPath(t, void 0, n), e.container = r.container, e.index = t.lastComponent.index) : (r = this.mainContentContainer.ContentAtPath(t), e.container = r.container, e.index = -1), null == r.obj || r.obj == this.mainContentContainer && n > 0 ? this.Error("Failed to find content at path '" + t + "', and no approximation of it was possible.") : r.approximate && this.Warning("Failed to find content at path '" + t + "', so it was approximated to: '" + r.obj.path + "'."), e)
                }
                StateSnapshot() {
                    return this.state.Copy()
                }
                RestoreStateSnapshot(t) {
                    this._state = t
                }
                Step() {
                    let t = !0,
                        e = this.state.currentPointer.copy();
                    if (e.isNull) return;
                    let n = a(e.Resolve(), E);
                    for (; n && (this.VisitContainer(n, !0), 0 != n.content.length);) n = a((e = I.StartOf(n)).Resolve(), E);
                    this.state.currentPointer = e.copy(), null != this._profiler && this._profiler.Step(this.state.callStack);
                    let r = e.Resolve(),
                        i = this.PerformLogicAndFlowControl(r);
                    if (this.state.currentPointer.isNull) return;
                    i && (t = !1);
                    let o = a(r, $);
                    if (o) {
                        let e = this.ProcessChoice(o);
                        e && this.state.generatedChoices.push(e), r = null, t = !1
                    }
                    if (r instanceof E && (t = !1), t) {
                        let t = a(r, k);
                        if (t && -1 == t.contextIndex) {
                            let e = this.state.callStack.ContextForVariableNamed(t.variableName);
                            r = new k(t.variableName, e)
                        }
                        this.state.inExpressionEvaluation ? this.state.PushEvaluationStack(r) : this.state.PushToOutputStream(r)
                    }
                    this.NextContent();
                    let s = a(r, N);
                    s && s.commandType == N.CommandType.StartThread && this.state.callStack.PushThread()
                }
                VisitContainer(t, e) {
                    t.countingAtStartOnly && !e || (t.visitsShouldBeCounted && this.IncrementVisitCountForContainer(t), t.turnIndexShouldBeCounted && this.RecordTurnIndexVisitToContainer(t))
                }
                VisitChangedContainersDueToDivert() {
                    let t = this.state.previousPointer.copy(),
                        e = this.state.currentPointer.copy();
                    if (e.isNull || -1 == e.index) return;
                    if (this._prevContainers.length = 0, !t.isNull) {
                        let e = a(t.Resolve(), E) || a(t.container, E);
                        for (; e;) this._prevContainers.push(e), e = a(e.parent, E)
                    }
                    let n = e.Resolve();
                    if (null == n) return;
                    let r = a(n.parent, E);
                    for (; r && (this._prevContainers.indexOf(r) < 0 || r.countingAtStartOnly);) {
                        let t = r.content.length > 0 && n == r.content[0];
                        this.VisitContainer(r, t), n = r, r = a(r.parent, E)
                    }
                }
                ProcessChoice(t) {
                    let e = !0;
                    if (t.hasCondition) {
                        let t = this.state.PopEvaluationStack();
                        this.IsTruthy(t) || (e = !1)
                    }
                    let n = "",
                        r = "";
                    if (t.hasChoiceOnlyContent && (r = o(this.state.PopEvaluationStack(), S).value || ""), t.hasStartContent && (n = o(this.state.PopEvaluationStack(), S).value || ""), t.onceOnly && this.VisitCountForContainer(t.choiceTarget) > 0 && (e = !1), !e) return null;
                    let i = new V;
                    return i.targetPath = t.pathOnChoice, i.sourcePath = t.path.toString(), i.isInvisibleDefault = t.isInvisibleDefault, i.threadAtGeneration = this.state.callStack.currentThread.Copy(), i.text = (n + r).replace(/^[ \t]+|[ \t]+$/g, ""), i
                }
                IsTruthy(t) {
                    if (t instanceof w) {
                        let e = t;
                        if (e instanceof x) {
                            let t = e;
                            return this.Error("Shouldn't use a divert target (to " + t.targetPath + ") as a conditional value. Did you intend a function call 'likeThis()' or a read count check 'likeThis'? (no arrows)"), !1
                        }
                        return e.isTruthy
                    }
                    return !1
                }
                PerformLogicAndFlowControl(t) {
                    if (null == t) return !1;
                    if (t instanceof P) {
                        let e = t;
                        if (e.isConditional) {
                            let t = this.state.PopEvaluationStack();
                            if (!this.IsTruthy(t)) return !0
                        }
                        if (e.hasVariableTarget) {
                            let t = e.variableDivertName,
                                n = this.state.variablesState.GetVariableWithName(t);
                            if (null == n) this.Error("Tried to divert using a target from a variable that could not be found (" + t + ")");
                            else if (!(n instanceof x)) {
                                let e = a(n, C),
                                    r = "Tried to divert to a target from a variable, but the variable (" + t + ") didn't contain a divert target, it ";
                                e instanceof C && 0 == e.value ? r += "was empty/null (the value 0)." : r += "contained '" + n + "'.", this.Error(r)
                            }
                            let r = o(n, x);
                            this.state.divertedPointer = this.PointerAtPath(r.targetPath)
                        } else {
                            if (e.isExternal) return this.CallExternalFunction(e.targetPathString, e.externalArgs), !0;
                            this.state.divertedPointer = e.targetPointer.copy()
                        }
                        return e.pushesToStack && this.state.callStack.Push(e.stackPushType, void 0, this.state.outputStream.length), this.state.divertedPointer.isNull && !e.isExternal && (e && e.debugMetadata && null != e.debugMetadata.sourceName ? this.Error("Divert target doesn't exist: " + e.debugMetadata.sourceName) : this.Error("Divert resolution failed: " + e)), !0
                    }
                    if (t instanceof N) {
                        let e = t;
                        switch (e.commandType) {
                            case N.CommandType.EvalStart:
                                this.Assert(!1 === this.state.inExpressionEvaluation, "Already in expression evaluation?"), this.state.inExpressionEvaluation = !0;
                                break;
                            case N.CommandType.EvalEnd:
                                this.Assert(!0 === this.state.inExpressionEvaluation, "Not in expression evaluation mode"), this.state.inExpressionEvaluation = !1;
                                break;
                            case N.CommandType.EvalOutput:
                                if (this.state.evaluationStack.length > 0) {
                                    let t = this.state.PopEvaluationStack();
                                    if (!(t instanceof L)) {
                                        let e = new S(t.toString());
                                        this.state.PushToOutputStream(e)
                                    }
                                }
                                break;
                            case N.CommandType.NoOp:
                                break;
                            case N.CommandType.Duplicate:
                                this.state.PushEvaluationStack(this.state.PeekEvaluationStack());
                                break;
                            case N.CommandType.PopEvaluatedValue:
                                this.state.PopEvaluationStack();
                                break;
                            case N.CommandType.PopFunction:
                            case N.CommandType.PopTunnel:
                                let t = e.commandType == N.CommandType.PopFunction ? i.Function : i.Tunnel,
                                    n = null;
                                if (t == i.Tunnel) {
                                    let t = this.state.PopEvaluationStack();
                                    null === (n = a(t, x)) && this.Assert(t instanceof L, "Expected void if ->-> doesn't override target")
                                }
                                if (this.state.TryExitFunctionEvaluationFromGame()) break;
                                if (this.state.callStack.currentElement.type == t && this.state.callStack.canPop) this.state.PopCallStack(), n && (this.state.divertedPointer = this.PointerAtPath(n.targetPath));
                                else {
                                    let e = new Map;
                                    e.set(i.Function, "function return statement (~ return)"), e.set(i.Tunnel, "tunnel onwards statement (->->)");
                                    let n = e.get(this.state.callStack.currentElement.type);
                                    this.state.callStack.canPop || (n = "end of flow (-> END or choice)");
                                    let r = "Found " + e.get(t) + ", when expected " + n;
                                    this.Error(r)
                                }
                                break;
                            case N.CommandType.BeginString:
                                this.state.PushToOutputStream(e), this.Assert(!0 === this.state.inExpressionEvaluation, "Expected to be in an expression when evaluating a string"), this.state.inExpressionEvaluation = !1;
                                break;
                            case N.CommandType.EndString:
                                let r = [],
                                    s = 0;
                                for (let t = this.state.outputStream.length - 1; t >= 0; --t) {
                                    let e = this.state.outputStream[t];
                                    s++;
                                    let n = a(e, N);
                                    if (n && n.commandType == N.CommandType.BeginString) break;
                                    e instanceof S && r.push(e)
                                }
                                this.state.PopFromOutputStream(s), r = r.reverse();
                                let l = new d;
                                for (let t of r) l.Append(t.toString());
                                this.state.inExpressionEvaluation = !0, this.state.PushEvaluationStack(new S(l.toString()));
                                break;
                            case N.CommandType.ChoiceCount:
                                let u = this.state.generatedChoices.length;
                                this.state.PushEvaluationStack(new C(u));
                                break;
                            case N.CommandType.Turns:
                                this.state.PushEvaluationStack(new C(this.state.currentTurnIndex + 1));
                                break;
                            case N.CommandType.TurnsSince:
                            case N.CommandType.ReadCount:
                                let c = this.state.PopEvaluationStack();
                                if (!(c instanceof x)) {
                                    let t = "";
                                    c instanceof C && (t = ". Did you accidentally pass a read count ('knot_name') instead of a target ('-> knot_name')?"), this.Error("TURNS_SINCE / READ_COUNT expected a divert target (knot, stitch, label name), but saw " + c + t);
                                    break
                                }
                                let h, f = o(c, x),
                                    y = a(this.ContentAtPath(f.targetPath).correctObj, E);
                                null != y ? h = e.commandType == N.CommandType.TurnsSince ? this.TurnsSinceForContainer(y) : this.VisitCountForContainer(y) : (h = e.commandType == N.CommandType.TurnsSince ? -1 : 0, this.Warning("Failed to find container for " + e.toString() + " lookup at " + f.targetPath.toString())), this.state.PushEvaluationStack(new C(h));
                                break;
                            case N.CommandType.Random:
                            {
                                let t = a(this.state.PopEvaluationStack(), C),
                                    e = a(this.state.PopEvaluationStack(), C);
                                if (null == e || e instanceof C == 0) return this.Error("Invalid value for minimum parameter of RANDOM(min, max)");
                                if (null == t || e instanceof C == 0) return this.Error("Invalid value for maximum parameter of RANDOM(min, max)");
                                if (null === t.value) return p("maxInt.value");
                                if (null === e.value) return p("minInt.value");
                                let n = t.value - e.value + 1;
                                n <= 0 && this.Error("RANDOM was called with minimum as " + e.value + " and maximum as " + t.value + ". The maximum must be larger");
                                let r = this.state.storySeed + this.state.previousRandom,
                                    i = new q(r).next(),
                                    o = i % n + e.value;
                                this.state.PushEvaluationStack(new C(o)), this.state.previousRandom = i;
                                break
                            }
                            case N.CommandType.SeedRandom:
                                let b = a(this.state.PopEvaluationStack(), C);
                                if (null == b || b instanceof C == 0) return this.Error("Invalid value passed to SEED_RANDOM");
                                if (null === b.value) return p("minInt.value");
                                this.state.storySeed = b.value, this.state.previousRandom = 0, this.state.PushEvaluationStack(new L);
                                break;
                            case N.CommandType.VisitIndex:
                                let _ = this.VisitCountForContainer(this.state.currentPointer.container) - 1;
                                this.state.PushEvaluationStack(new C(_));
                                break;
                            case N.CommandType.SequenceShuffleIndex:
                                let k = this.NextSequenceShuffleIndex();
                                this.state.PushEvaluationStack(new C(k));
                                break;
                            case N.CommandType.StartThread:
                                break;
                            case N.CommandType.Done:
                                this.state.callStack.canPopThread ? this.state.callStack.PopThread() : (this.state.didSafeExit = !0, this.state.currentPointer = I.Null);
                                break;
                            case N.CommandType.End:
                                this.state.ForceEnd();
                                break;
                            case N.CommandType.ListFromInt:
                                let O = a(this.state.PopEvaluationStack(), C),
                                    A = o(this.state.PopEvaluationStack(), S);
                                if (null === O) throw new v("Passed non-integer when creating a list element from a numerical value.");
                                let P = null;
                                if (null === this.listDefinitions) return p("this.listDefinitions");
                                let $ = this.listDefinitions.TryListGetDefinition(A.value, null);
                                if (!$.exists) throw new v("Failed to find LIST called " + A.value); {
                                if (null === O.value) return p("minInt.value");
                                let t = $.result.TryGetItemWithValue(O.value, m.Null);
                                t.exists && (P = new T(t.result, O.value))
                            }
                                null == P && (P = new T), this.state.PushEvaluationStack(P);
                                break;
                            case N.CommandType.ListRange:
                                let F = a(this.state.PopEvaluationStack(), w),
                                    M = a(this.state.PopEvaluationStack(), w),
                                    D = a(this.state.PopEvaluationStack(), T);
                                if (null === D || null === M || null === F) throw new v("Expected list, minimum and maximum for LIST_RANGE");
                                if (null === D.value) return p("targetList.value");
                                let j = D.value.ListWithSubRange(M.valueObject, F.valueObject);
                                this.state.PushEvaluationStack(new T(j));
                                break;
                            case N.CommandType.ListRandom:
                            {
                                let t = this.state.PopEvaluationStack();
                                if (null === t) throw new v("Expected list for LIST_RANDOM");
                                let e = t.value,
                                    n = null;
                                if (null === e) throw p("list");
                                if (0 == e.Count) n = new g;
                                else {
                                    let t = this.state.storySeed + this.state.previousRandom,
                                        r = new q(t).next(),
                                        i = r % e.Count,
                                        a = e.entries();
                                    for (let t = 0; t <= i - 1; t++) a.next();
                                    let o = a.next().value,
                                        s = {
                                            Key: m.fromSerializedKey(o[0]),
                                            Value: o[1]
                                        };
                                    if (null === s.Key.originName) return p("randomItem.Key.originName");
                                    (n = new g(s.Key.originName, this)).Add(s.Key, s.Value), this.state.previousRandom = r
                                }
                                this.state.PushEvaluationStack(new T(n));
                                break
                            }
                            default:
                                this.Error("unhandled ControlCommand: " + e)
                        }
                        return !0
                    }
                    if (t instanceof M) {
                        let e = t,
                            n = this.state.PopEvaluationStack();
                        return this.state.variablesState.Assign(e, n), !0
                    }
                    if (t instanceof F) {
                        let e = t,
                            n = null;
                        if (null != e.pathForCount) {
                            let t = e.containerForCount,
                                r = this.VisitCountForContainer(t);
                            n = new C(r)
                        } else if (null == (n = this.state.variablesState.GetVariableWithName(e.name))) {
                            let t = this.state.variablesState.TryGetDefaultVariableValue(e.name);
                            null != t ? (this.Warning("Variable not found in save state: '" + e.name + "', but seems to have been newly created. Assigning value from latest ink's declaration: " + t), n = t, this.state.variablesState.SetGlobal(e.name, n)) : (this.Warning("Variable not found: '" + e.name + "'. Using default value of 0 (false). This can happen with temporary variables if the declaration hasn't yet been hit."), n = new C(0))
                        }
                        return this.state.PushEvaluationStack(n), !0
                    }
                    if (t instanceof D) {
                        let e = t,
                            n = this.state.PopEvaluationStack(e.numberOfParameters),
                            r = e.Call(n);
                        return this.state.PushEvaluationStack(r), !0
                    }
                    return !1
                }
                ChoosePathString(t, n = !0, r = []) {
                    if (this.IfAsyncWeCant("call ChoosePathString right now"), n) this.ResetCallstack();
                    else if (this.state.callStack.currentElement.type == i.Function) {
                        let e = "",
                            n = this.state.callStack.currentElement.currentPointer.container;
                        throw null != n && (e = "(" + n.path.toString() + ") "), new Error("Story was running a function " + e + "when you called ChoosePathString(" + t + ") - this is almost certainly not not what you want! Full stack trace: \n" + this.state.callStack.callStackTrace)
                    }
                    this.state.PassArgumentsToEvaluationStack(r), this.ChoosePath(new e(t))
                }
                IfAsyncWeCant(t) {
                    if (this._asyncContinueActive) throw new Error("Can't " + t + ". Story is in the middle of a ContinueAsync(). Make more ContinueAsync() calls or a single Continue() call beforehand.")
                }
                ChoosePath(t, e = !0) {
                    this.state.SetChosenPath(t, e), this.VisitChangedContainersDueToDivert()
                }
                ChooseChoiceIndex(t) {
                    t = t;
                    let e = this.currentChoices;
                    this.Assert(t >= 0 && t < e.length, "choice out of range");
                    let n = e[t];
                    return null === n.threadAtGeneration ? p("choiceToChoose.threadAtGeneration") : null === n.targetPath ? p("choiceToChoose.targetPath") : (this.state.callStack.currentThread = n.threadAtGeneration, void this.ChoosePath(n.targetPath))
                }
                HasFunction(t) {
                    try {
                        return null != this.KnotContainerWithName(t)
                    } catch (t) {
                        return !1
                    }
                }
                EvaluateFunction(t, e = [], n = !1) {
                    if (this.IfAsyncWeCant("evaluate a function"), null == t) throw new Error("Function is null");
                    if ("" == t || "" == t.trim()) throw new Error("Function is empty or white space.");
                    let r = this.KnotContainerWithName(t);
                    if (null == r) throw new Error("Function doesn't exist: '" + t + "'");
                    let i = [];
                    i.push.apply(i, this.state.outputStream), this._state.ResetOutput(), this.state.StartFunctionEvaluationFromGame(r, e);
                    let a = new d;
                    for (; this.canContinue;) a.Append(this.Continue());
                    let o = a.toString();
                    this._state.ResetOutput(i);
                    let s = this.state.CompleteFunctionEvaluationFromGame();
                    return n ? {
                        returned: s,
                        output: o
                    } : s
                }
                EvaluateExpression(t) {
                    let e = this.state.callStack.elements.length;
                    this.state.callStack.Push(i.Tunnel), this._temporaryEvaluationContainer = t, this.state.GoToStart();
                    let n = this.state.evaluationStack.length;
                    return this.Continue(), this._temporaryEvaluationContainer = null, this.state.callStack.elements.length > e && this.state.PopCallStack(), this.state.evaluationStack.length > n ? this.state.PopEvaluationStack() : null
                }
                CallExternalFunction(t, e) {
                    if (null === t) return p("funcName");
                    let n = this._externals.get(t),
                        r = null;
                    if (void 0 === n) {
                        if (this.allowExternalFunctionFallbacks) return r = this.KnotContainerWithName(t), this.Assert(null !== r, "Trying to call EXTERNAL function '" + t + "' which has not been bound, and fallback ink function could not be found."), this.state.callStack.Push(i.Function, void 0, this.state.outputStream.length), void(this.state.divertedPointer = I.StartOf(r));
                        this.Assert(!1, "Trying to call EXTERNAL function '" + t + "' which has not been bound (and ink fallbacks disabled).")
                    }
                    let a = [];
                    for (let t = 0; t < e; ++t) {
                        let t = o(this.state.PopEvaluationStack(), w).valueObject;
                        a.push(t)
                    }
                    a.reverse();
                    let s = n(a),
                        l = null;
                    null != s ? (l = w.Create(s), this.Assert(null !== l, "Could not create ink value from returned object of type " + typeof s)) : l = new L, this.state.PushEvaluationStack(l)
                }
                BindExternalFunctionGeneral(t, e) {
                    this.IfAsyncWeCant("bind an external function"), this.Assert(!this._externals.has(t), "Function '" + t + "' has already been bound."), this._externals.set(t, e)
                }
                TryCoerce(t) {
                    return t
                }
                BindExternalFunction(t, e) {
                    this.Assert(null != e, "Can't bind a null function"), this.BindExternalFunctionGeneral(t, t => {
                        this.Assert(t.length >= e.length, "External function expected " + e.length + " arguments");
                    let n = [];
                    for (let e = 0, r = t.length; e < r; e++) n[e] = this.TryCoerce(t[e]);
                    return e.apply(null, n)
                })
                }
                UnbindExternalFunction(t) {
                    this.IfAsyncWeCant("unbind an external a function"), this.Assert(this._externals.has(t), "Function '" + t + "' has not been bound."), this._externals.delete(t)
                }
                ValidateExternalBindings() {
                    let t = null,
                        e = null,
                        n = arguments[1] || new Set;
                    if (arguments[0] instanceof E && (t = arguments[0]), arguments[0] instanceof f && (e = arguments[0]), null === t && null === e)
                        if (this.ValidateExternalBindings(this._mainContentContainer, n), this._hasValidatedExternals = !0, 0 == n.size) this._hasValidatedExternals = !0;
                        else {
                            let t = "Error: Missing function binding for external";
                            t += n.size > 1 ? "s" : "", t += ": '", t += Array.from(n).join("', '"), t += "' ", t += this.allowExternalFunctionFallbacks ? ", and no fallback ink function found." : " (ink fallbacks disabled)", this.Error(t)
                        } else if (null != t) {
                        for (let e of t.content) {
                            let t = e;
                            null != t && t.hasValidName || this.ValidateExternalBindings(e, n)
                        }
                        for (let [e, r] of t.namedContent) this.ValidateExternalBindings(a(r, f), n)
                    } else if (null != e) {
                        let t = a(e, P);
                        if (t && t.isExternal) {
                            let e = t.targetPathString;
                            if (null === e) return p("name");
                            this._externals.has(e) || this.allowExternalFunctionFallbacks && this.mainContentContainer.namedContent.has(e) || n.add(e)
                        }
                    }
                }
                ObserveVariable(t, e) {
                    if (this.IfAsyncWeCant("observe a new variable"), null === this._variableObservers && (this._variableObservers = new Map), !this.state.variablesState.GlobalVariableExistsWithName(t)) throw new v("Cannot observe variable '" + t + "' because it wasn't declared in the ink story.");
                    this._variableObservers.has(t) ? this._variableObservers.get(t).push(e) : this._variableObservers.set(t, [e])
                }
                ObserveVariables(t, e) {
                    for (let n = 0, r = t.length; n < r; n++) this.ObserveVariable(t[n], e[n])
                }
                RemoveVariableObserver(t, e) {
                    if (this.IfAsyncWeCant("remove a variable observer"), null !== this._variableObservers)
                        if (void 0 !== e) {
                            if (this._variableObservers.has(e)) {
                                let n = this._variableObservers.get(e);
                                n.splice(n.indexOf(t), 1)
                            }
                        } else {
                            let e = this._variableObservers.keys();
                            for (let n of e) {
                                let e = this._variableObservers.get(n);
                                e.splice(e.indexOf(t), 1)
                            }
                        }
                }
                VariableStateDidChangeEvent(t, e) {
                    if (null === this._variableObservers) return;
                    let n = this._variableObservers.get(t);
                    if (void 0 !== n) {
                        if (!(e instanceof w)) throw new Error("Tried to get the value of a variable that isn't a standard type");
                        let r = o(e, w);
                        for (let e of n) e(t, r.valueObject)
                    }
                }
                get globalTags() {
                    return this.TagsAtStartOfFlowContainerWithPathString("")
                }
                TagsForContentAtPath(t) {
                    return this.TagsAtStartOfFlowContainerWithPathString(t)
                }
                TagsAtStartOfFlowContainerWithPathString(t) {
                    let n = new e(t),
                        r = this.ContentAtPath(n).container;
                    if (null === r) return p("flowContainer");
                    for (;;) {
                        let t = r.content[0];
                        if (!(t instanceof E)) break;
                        r = t
                    }
                    let i = null;
                    for (let t of r.content) {
                        let e = a(t, j);
                        if (!e) break;
                        null == i && (i = []), i.push(e.text)
                    }
                    return i
                }
                BuildStringOfHierarchy() {
                    let t = new d;
                    return this.mainContentContainer.BuildStringOfHierarchy(t, 0, this.state.currentPointer.Resolve()), t.toString()
                }
                BuildStringOfContainer(t) {
                    let e = new d;
                    return t.BuildStringOfHierarchy(e, 0, this.state.currentPointer.Resolve()), e.toString()
                }
                NextContent() {
                    if (this.state.previousPointer = this.state.currentPointer.copy(), (this.state.divertedPointer.isNull || (this.state.currentPointer = this.state.divertedPointer.copy(), this.state.divertedPointer = I.Null, this.VisitChangedContainersDueToDivert(), this.state.currentPointer.isNull)) && !this.IncrementContentPointer()) {
                        let t = !1;
                        this.state.callStack.CanPop(i.Function) ? (this.state.PopCallStack(i.Function), this.state.inExpressionEvaluation && this.state.PushEvaluationStack(new L), t = !0) : this.state.callStack.canPopThread ? (this.state.callStack.PopThread(), t = !0) : this.state.TryExitFunctionEvaluationFromGame(), t && !this.state.currentPointer.isNull && this.NextContent()
                    }
                }
                IncrementContentPointer() {
                    let t = !0,
                        e = this.state.callStack.currentElement.currentPointer.copy();
                    if (e.index++, null === e.container) return p("pointer.container");
                    for (; e.index >= e.container.content.length;) {
                        t = !1;
                        let n = a(e.container.parent, E);
                        if (n instanceof E == 0) break;
                        let r = n.content.indexOf(e.container);
                        if (-1 == r) break;
                        if ((e = new I(n, r)).index++, t = !0, null === e.container) return p("pointer.container")
                    }
                    return t || (e = I.Null), this.state.callStack.currentElement.currentPointer = e.copy(), t
                }
                TryFollowDefaultInvisibleChoice() {
                    let t = this._state.currentChoices,
                        e = t.filter(t => t.isInvisibleDefault);
                    if (0 == e.length || t.length > e.length) return !1;
                    let n = e[0];
                    return null === n.targetPath ? p("choice.targetPath") : null === n.threadAtGeneration ? p("choice.threadAtGeneration") : (this.state.callStack.currentThread = n.threadAtGeneration, this.ChoosePath(n.targetPath, !1), !0)
                }
                VisitCountForContainer(t) {
                    if (null === t) return p("container");
                    if (!t.visitsShouldBeCounted) return console.warn("Read count for target (" + t.name + " - on " + t.debugMetadata + ") unknown. The story may need to be compiled with countAllVisits flag (-c)."), 0;
                    let e = 0,
                        n = t.path.toString();
                    return e = this.state.visitCounts.get(n) || e
                }
                IncrementVisitCountForContainer(t) {
                    let e = 0,
                        n = t.path.toString();
                    this.state.visitCounts.has(n) && (e = this.state.visitCounts.get(n)), e++, this.state.visitCounts.set(n, e)
                }
                RecordTurnIndexVisitToContainer(t) {
                    let e = t.path.toString();
                    this.state.turnIndices.set(e, this.state.currentTurnIndex)
                }
                TurnsSinceForContainer(t) {
                    t.turnIndexShouldBeCounted || this.Error("TURNS_SINCE() for target (" + t.name + " - on " + t.debugMetadata + ") unknown. The story may need to be compiled with countAllVisits flag (-c).");
                    let e = t.path.toString(),
                        n = this.state.turnIndices.get(e);
                    return void 0 !== n ? this.state.currentTurnIndex - n : -1
                }
                NextSequenceShuffleIndex() {
                    let t = a(this.state.PopEvaluationStack(), C);
                    if (!(t instanceof C)) return this.Error("expected number of elements in sequence for shuffle index"), 0;
                    let e = this.state.currentPointer.container;
                    if (null === e) return p("seqContainer");
                    if (null === t.value) return p("numElementsIntVal.value");
                    let n = t.value,
                        r = o(this.state.PopEvaluationStack(), C).value;
                    if (null === r) return p("seqCount");
                    let i = r / n,
                        s = r % n,
                        l = e.path.toString(),
                        u = 0;
                    for (let t = 0, e = l.length; t < e; t++) u += l.charCodeAt(t) || 0;
                    let c = u + i + this.state.storySeed,
                        h = new q(Math.floor(c)),
                        f = [];
                    for (let t = 0; t < n; ++t) f.push(t);
                    for (let t = 0; t <= s; ++t) {
                        let e = h.next() % f.length,
                            n = f[e];
                        if (f.splice(e, 1), t == s) return n
                    }
                    throw new Error("Should never reach here")
                }
                Error(t, e = !1) {
                    let n = new v(t);
                    throw n.useEndLineNumber = e, n
                }
                Warning(t) {
                    this.AddError(t, !0)
                }
                AddError(t, e = !1, n = !1) {
                    let r = this.currentDebugMetadata,
                        i = e ? "WARNING" : "ERROR";
                    if (null != r) {
                        let e = n ? r.endLineNumber : r.startLineNumber;
                        t = "RUNTIME " + i + ": '" + r.fileName + "' line " + e + ": " + t
                    } else t = this.state.currentPointer.isNull ? "RUNTIME " + i + ": " + t : "RUNTIME " + i + ": (" + this.state.currentPointer + "): " + t;
                    this.state.AddError(t, e), e || this.state.ForceEnd()
                }
                Assert(t, e = null) {
                    if (0 == t) throw null == e && (e = "Story assert"), new Error(e + " " + this.currentDebugMetadata)
                }
                get currentDebugMetadata() {
                    let t, e = this.state.currentPointer;
                    if (!e.isNull && null !== e.Resolve() && null !== (t = e.Resolve().debugMetadata)) return t;
                    for (let n = this.state.callStack.elements.length - 1; n >= 0; --n)
                        if (!(e = this.state.callStack.elements[n].currentPointer).isNull && null !== e.Resolve() && null !== (t = e.Resolve().debugMetadata)) return t;
                    for (let e = this.state.outputStream.length - 1; e >= 0; --e)
                        if (null !== (t = this.state.outputStream[e].debugMetadata)) return t;
                    return null
                }
                get mainContentContainer() {
                    return this._temporaryEvaluationContainer ? this._temporaryEvaluationContainer : this._mainContentContainer
                }
            }! function(t) {
                let e;
                ! function(t) {
                    t[t.NoChange = 0] = "NoChange", t[t.ExtendedBeyondNewline = 1] = "ExtendedBeyondNewline", t[t.NewlineRemoved = 2] = "NewlineRemoved"
                }(e = t.OutputStateChange || (t.OutputStateChange = {}))
            }(J || (J = {})), t.Story = J, t.InkList = g, Object.defineProperty(t, "__esModule", {
                value: !0
            })
        }(e)
    },
    function(t, e, n) {},
    function(t, e, n) {
        (function(t) {
            var r = void 0 !== t && t || "undefined" != typeof self && self || window,
                i = Function.prototype.apply;

            function a(t, e) {
                this._id = t, this._clearFn = e
            }
            e.setTimeout = function() {
                return new a(i.call(setTimeout, r, arguments), clearTimeout)
            }, e.setInterval = function() {
                return new a(i.call(setInterval, r, arguments), clearInterval)
            }, e.clearTimeout = e.clearInterval = function(t) {
                t && t.close()
            }, a.prototype.unref = a.prototype.ref = function() {}, a.prototype.close = function() {
                this._clearFn.call(r, this._id)
            }, e.enroll = function(t, e) {
                clearTimeout(t._idleTimeoutId), t._idleTimeout = e
            }, e.unenroll = function(t) {
                clearTimeout(t._idleTimeoutId), t._idleTimeout = -1
            }, e._unrefActive = e.active = function(t) {
                clearTimeout(t._idleTimeoutId);
                var e = t._idleTimeout;
                e >= 0 && (t._idleTimeoutId = setTimeout(function() {
                    t._onTimeout && t._onTimeout()
                }, e))
            }, n(17), e.setImmediate = "undefined" != typeof self && self.setImmediate || void 0 !== t && t.setImmediate || this && this.setImmediate, e.clearImmediate = "undefined" != typeof self && self.clearImmediate || void 0 !== t && t.clearImmediate || this && this.clearImmediate
        }).call(this, n(2))
    },
    function(t, e, n) {
        (function(t, e) {
            ! function(t, n) {
                "use strict";
                if (!t.setImmediate) {
                    var r, i, a, o, s, l = 1,
                        u = {},
                        c = !1,
                        h = t.document,
                        p = Object.getPrototypeOf && Object.getPrototypeOf(t);
                    p = p && p.setTimeout ? p : t, "[object process]" === {}.toString.call(t.process) ? r = function(t) {
                        e.nextTick(function() {
                            d(t)
                        })
                    } : ! function() {
                        if (t.postMessage && !t.importScripts) {
                            var e = !0,
                                n = t.onmessage;
                            return t.onmessage = function() {
                                e = !1
                            }, t.postMessage("", "*"), t.onmessage = n, e
                        }
                    }() ? t.MessageChannel ? ((a = new MessageChannel).port1.onmessage = function(t) {
                        d(t.data)
                    }, r = function(t) {
                        a.port2.postMessage(t)
                    }) : h && "onreadystatechange" in h.createElement("script") ? (i = h.documentElement, r = function(t) {
                        var e = h.createElement("script");
                        e.onreadystatechange = function() {
                            d(t), e.onreadystatechange = null, i.removeChild(e), e = null
                        }, i.appendChild(e)
                    }) : r = function(t) {
                        setTimeout(d, 0, t)
                    } : (o = "setImmediate$" + Math.random() + "$", s = function(e) {
                        e.source === t && "string" == typeof e.data && 0 === e.data.indexOf(o) && d(+e.data.slice(o.length))
                    }, t.addEventListener ? t.addEventListener("message", s, !1) : t.attachEvent("onmessage", s), r = function(e) {
                        t.postMessage(o + e, "*")
                    }), p.setImmediate = function(t) {
                        "function" != typeof t && (t = new Function("" + t));
                        for (var e = new Array(arguments.length - 1), n = 0; n < e.length; n++) e[n] = arguments[n + 1];
                        var i = {
                            callback: t,
                            args: e
                        };
                        return u[l] = i, r(l), l++
                    }, p.clearImmediate = f
                }

                function f(t) {
                    delete u[t]
                }

                function d(t) {
                    if (c) setTimeout(d, 0, t);
                    else {
                        var e = u[t];
                        if (e) {
                            c = !0;
                            try {
                                ! function(t) {
                                    var e = t.callback,
                                        r = t.args;
                                    switch (r.length) {
                                        case 0:
                                            e();
                                            break;
                                        case 1:
                                            e(r[0]);
                                            break;
                                        case 2:
                                            e(r[0], r[1]);
                                            break;
                                        case 3:
                                            e(r[0], r[1], r[2]);
                                            break;
                                        default:
                                            e.apply(n, r)
                                    }
                                }(e)
                            } finally {
                                f(t), c = !1
                            }
                        }
                    }
                }
            }("undefined" == typeof self ? void 0 === t ? this : t : self)
        }).call(this, n(2), n(18))
    },
    function(t, e) {
        var n, r, i = t.exports = {};

        function a() {
            throw new Error("setTimeout has not been defined")
        }

        function o() {
            throw new Error("clearTimeout has not been defined")
        }

        function s(t) {
            if (n === setTimeout) return setTimeout(t, 0);
            if ((n === a || !n) && setTimeout) return n = setTimeout, setTimeout(t, 0);
            try {
                return n(t, 0)
            } catch (e) {
                try {
                    return n.call(null, t, 0)
                } catch (e) {
                    return n.call(this, t, 0)
                }
            }
        }! function() {
            try {
                n = "function" == typeof setTimeout ? setTimeout : a
            } catch (t) {
                n = a
            }
            try {
                r = "function" == typeof clearTimeout ? clearTimeout : o
            } catch (t) {
                r = o
            }
        }();
        var l, u = [],
            c = !1,
            h = -1;

        function p() {
            c && l && (c = !1, l.length ? u = l.concat(u) : h = -1, u.length && f())
        }

        function f() {
            if (!c) {
                var t = s(p);
                c = !0;
                for (var e = u.length; e;) {
                    for (l = u, u = []; ++h < e;) l && l[h].run();
                    h = -1, e = u.length
                }
                l = null, c = !1,
                    function(t) {
                        if (r === clearTimeout) return clearTimeout(t);
                        if ((r === o || !r) && clearTimeout) return r = clearTimeout, clearTimeout(t);
                        try {
                            r(t)
                        } catch (e) {
                            try {
                                return r.call(null, t)
                            } catch (e) {
                                return r.call(this, t)
                            }
                        }
                    }(t)
            }
        }

        function d(t, e) {
            this.fun = t, this.array = e
        }

        function m() {}
        i.nextTick = function(t) {
            var e = new Array(arguments.length - 1);
            if (arguments.length > 1)
                for (var n = 1; n < arguments.length; n++) e[n - 1] = arguments[n];
            u.push(new d(t, e)), 1 !== u.length || c || s(f)
        }, d.prototype.run = function() {
            this.fun.apply(null, this.array)
        }, i.title = "browser", i.browser = !0, i.env = {}, i.argv = [], i.version = "", i.versions = {}, i.on = m, i.addListener = m, i.once = m, i.off = m, i.removeListener = m, i.removeAllListeners = m, i.emit = m, i.prependListener = m, i.prependOnceListener = m, i.listeners = function(t) {
            return []
        }, i.binding = function(t) {
            throw new Error("process.binding is not supported")
        }, i.cwd = function() {
            return "/"
        }, i.chdir = function(t) {
            throw new Error("process.chdir is not supported")
        }, i.umask = function() {
            return 0
        }
    },
    function(t, e, n) {
        var r = n(6),
            i = n(20),
            a = n(22),
            o = "Expected a function",
            s = Math.max,
            l = Math.min;
        t.exports = function(t, e, n) {
            var u, c, h, p, f, d, m = 0,
                g = !1,
                v = !1,
                y = !0;
            if ("function" != typeof t) throw new TypeError(o);

            function b(e) {
                var n = u,
                    r = c;
                return u = c = void 0, m = e, p = t.apply(r, n)
            }

            function w(t) {
                var n = t - d;
                return void 0 === d || n >= e || n < 0 || v && t - m >= h
            }

            function C() {
                var t = i();
                if (w(t)) return _(t);
                f = setTimeout(C, function(t) {
                    var n = e - (t - d);
                    return v ? l(n, h - (t - m)) : n
                }(t))
            }

            function _(t) {
                return f = void 0, y && u ? b(t) : (u = c = void 0, p)
            }

            function S() {
                var t = i(),
                    n = w(t);
                if (u = arguments, c = this, d = t, n) {
                    if (void 0 === f) return function(t) {
                        return m = t, f = setTimeout(C, e), g ? b(t) : p
                    }(d);
                    if (v) return f = setTimeout(C, e), b(d)
                }
                return void 0 === f && (f = setTimeout(C, e)), p
            }
            return e = a(e) || 0, r(n) && (g = !!n.leading, h = (v = "maxWait" in n) ? s(a(n.maxWait) || 0, e) : h, y = "trailing" in n ? !!n.trailing : y), S.cancel = function() {
                void 0 !== f && clearTimeout(f), m = 0, u = d = c = f = void 0
            }, S.flush = function() {
                return void 0 === f ? p : _(i())
            }, S
        }
    },
    function(t, e, n) {
        var r = n(8);
        t.exports = function() {
            return r.Date.now()
        }
    },
    function(t, e, n) {
        (function(e) {
            var n = "object" == typeof e && e && e.Object === Object && e;
            t.exports = n
        }).call(this, n(2))
    },
    function(t, e, n) {
        var r = n(6),
            i = n(23),
            a = NaN,
            o = /^\s+|\s+$/g,
            s = /^[-+]0x[0-9a-f]+$/i,
            l = /^0b[01]+$/i,
            u = /^0o[0-7]+$/i,
            c = parseInt;
        t.exports = function(t) {
            if ("number" == typeof t) return t;
            if (i(t)) return a;
            if (r(t)) {
                var e = "function" == typeof t.valueOf ? t.valueOf() : t;
                t = r(e) ? e + "" : e
            }
            if ("string" != typeof t) return 0 === t ? t : +t;
            t = t.replace(o, "");
            var n = l.test(t);
            return n || u.test(t) ? c(t.slice(2), n ? 2 : 8) : s.test(t) ? a : +t
        }
    },
    function(t, e, n) {
        var r = n(24),
            i = n(27),
            a = "[object Symbol]";
        t.exports = function(t) {
            return "symbol" == typeof t || i(t) && r(t) == a
        }
    },
    function(t, e, n) {
        var r = n(9),
            i = n(25),
            a = n(26),
            o = "[object Null]",
            s = "[object Undefined]",
            l = r ? r.toStringTag : void 0;
        t.exports = function(t) {
            return null == t ? void 0 === t ? s : o : l && l in Object(t) ? i(t) : a(t)
        }
    },
    function(t, e, n) {
        var r = n(9),
            i = Object.prototype,
            a = i.hasOwnProperty,
            o = i.toString,
            s = r ? r.toStringTag : void 0;
        t.exports = function(t) {
            var e = a.call(t, s),
                n = t[s];
            try {
                t[s] = void 0;
                var r = !0
            } catch (t) {}
            var i = o.call(t);
            return r && (e ? t[s] = n : delete t[s]), i
        }
    },
    function(t, e) {
        var n = Object.prototype.toString;
        t.exports = function(t) {
            return n.call(t)
        }
    },
    function(t, e) {
        t.exports = function(t) {
            return null != t && "object" == typeof t
        }
    },
    function(t, e, n) {
        "use strict";
        var r = n(3),
            i = n(30),
            a = n(34),
            o = n(35) || 0;

        function s() {
            return i(o)
        }
        t.exports = s, t.exports.generate = s, t.exports.seed = function(e) {
            return r.seed(e), t.exports
        }, t.exports.worker = function(e) {
            return o = e, t.exports
        }, t.exports.characters = function(t) {
            return void 0 !== t && r.characters(t), r.shuffled()
        }, t.exports.isValid = a
    },
    function(t, e, n) {
        "use strict";
        var r = 1;
        t.exports = {
            nextValue: function() {
                return (r = (9301 * r + 49297) % 233280) / 233280
            },
            seed: function(t) {
                r = t
            }
        }
    },
    function(t, e, n) {
        "use strict";
        var r, i, a = n(31),
            o = (n(3), 1459707606518),
            s = 6;
        t.exports = function(t) {
            var e = "",
                n = Math.floor(.001 * (Date.now() - o));
            return n === i ? r++ : (r = 0, i = n), e += a(s), e += a(t), r > 0 && (e += a(r)), e += a(n)
        }
    },
    function(t, e, n) {
        "use strict";
        var r = n(3),
            i = n(32),
            a = n(33);
        t.exports = function(t) {
            for (var e, n = 0, o = ""; !e;) o += a(i, r.get(), 1), e = t < Math.pow(16, n + 1), n++;
            return o
        }
    },
    function(t, e, n) {
        "use strict";
        var r, i = "object" == typeof window && (window.crypto || window.msCrypto);
        r = i && i.getRandomValues ? function(t) {
            return i.getRandomValues(new Uint8Array(t))
        } : function(t) {
            for (var e = [], n = 0; n < t; n++) e.push(Math.floor(256 * Math.random()));
            return e
        }, t.exports = r
    },
    function(t, e) {
        t.exports = function(t, e, n) {
            for (var r = (2 << Math.log(e.length - 1) / Math.LN2) - 1, i = Math.ceil(1.6 * r * n / e.length), a = "";;)
                for (var o = t(i), s = 0; s < i; s++) {
                    var l = o[s] & r;
                    if (e[l] && (a += e[l]).length === n) return a
                }
        }
    },
    function(t, e, n) {
        "use strict";
        var r = n(3);
        t.exports = function(t) {
            return !(!t || "string" != typeof t || t.length < 6 || new RegExp("[^" + r.get().replace(/[|\\{}()[\]^$+*?.-]/g, "\\$&") + "]").test(t))
        }
    },
    function(t, e, n) {
        "use strict";
        t.exports = 0
    },
    function(t, e, n) {
        var r = n(37),
            i = n(38),
            a = {};
        for (var o in r) r.hasOwnProperty(o) && (a[r[o]] = o);
        var s = t.exports = {
            to: {},
            get: {}
        };

        function l(t, e, n) {
            return Math.min(Math.max(e, t), n)
        }

        function u(t) {
            var e = t.toString(16).toUpperCase();
            return e.length < 2 ? "0" + e : e
        }
        s.get = function(t) {
            var e, n;
            switch (t.substring(0, 3).toLowerCase()) {
                case "hsl":
                    e = s.get.hsl(t), n = "hsl";
                    break;
                case "hwb":
                    e = s.get.hwb(t), n = "hwb";
                    break;
                default:
                    e = s.get.rgb(t), n = "rgb"
            }
            return e ? {
                model: n,
                value: e
            } : null
        }, s.get.rgb = function(t) {
            if (!t) return null;
            var e, n, i, a = [0, 0, 0, 1];
            if (e = t.match(/^#([a-f0-9]{6})([a-f0-9]{2})?$/i)) {
                for (i = e[2], e = e[1], n = 0; n < 3; n++) {
                    var o = 2 * n;
                    a[n] = parseInt(e.slice(o, o + 2), 16)
                }
                i && (a[3] = Math.round(parseInt(i, 16) / 255 * 100) / 100)
            } else if (e = t.match(/^#([a-f0-9]{3,4})$/i)) {
                for (i = (e = e[1])[3], n = 0; n < 3; n++) a[n] = parseInt(e[n] + e[n], 16);
                i && (a[3] = Math.round(parseInt(i + i, 16) / 255 * 100) / 100)
            } else if (e = t.match(/^rgba?\(\s*([+-]?\d+)\s*,\s*([+-]?\d+)\s*,\s*([+-]?\d+)\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)$/)) {
                for (n = 0; n < 3; n++) a[n] = parseInt(e[n + 1], 0);
                e[4] && (a[3] = parseFloat(e[4]))
            } else {
                if (!(e = t.match(/^rgba?\(\s*([+-]?[\d\.]+)\%\s*,\s*([+-]?[\d\.]+)\%\s*,\s*([+-]?[\d\.]+)\%\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)$/))) return (e = t.match(/(\D+)/)) ? "transparent" === e[1] ? [0, 0, 0, 0] : (a = r[e[1]]) ? (a[3] = 1, a) : null : null;
                for (n = 0; n < 3; n++) a[n] = Math.round(2.55 * parseFloat(e[n + 1]));
                e[4] && (a[3] = parseFloat(e[4]))
            }
            for (n = 0; n < 3; n++) a[n] = l(a[n], 0, 255);
            return a[3] = l(a[3], 0, 1), a
        }, s.get.hsl = function(t) {
            if (!t) return null;
            var e = t.match(/^hsla?\(\s*([+-]?(?:\d*\.)?\d+)(?:deg)?\s*,\s*([+-]?[\d\.]+)%\s*,\s*([+-]?[\d\.]+)%\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)$/);
            if (e) {
                var n = parseFloat(e[4]);
                return [(parseFloat(e[1]) + 360) % 360, l(parseFloat(e[2]), 0, 100), l(parseFloat(e[3]), 0, 100), l(isNaN(n) ? 1 : n, 0, 1)]
            }
            return null
        }, s.get.hwb = function(t) {
            if (!t) return null;
            var e = t.match(/^hwb\(\s*([+-]?\d*[\.]?\d+)(?:deg)?\s*,\s*([+-]?[\d\.]+)%\s*,\s*([+-]?[\d\.]+)%\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)$/);
            if (e) {
                var n = parseFloat(e[4]);
                return [(parseFloat(e[1]) % 360 + 360) % 360, l(parseFloat(e[2]), 0, 100), l(parseFloat(e[3]), 0, 100), l(isNaN(n) ? 1 : n, 0, 1)]
            }
            return null
        }, s.to.hex = function() {
            var t = i(arguments);
            return "#" + u(t[0]) + u(t[1]) + u(t[2]) + (t[3] < 1 ? u(Math.round(255 * t[3])) : "")
        }, s.to.rgb = function() {
            var t = i(arguments);
            return t.length < 4 || 1 === t[3] ? "rgb(" + Math.round(t[0]) + ", " + Math.round(t[1]) + ", " + Math.round(t[2]) + ")" : "rgba(" + Math.round(t[0]) + ", " + Math.round(t[1]) + ", " + Math.round(t[2]) + ", " + t[3] + ")"
        }, s.to.rgb.percent = function() {
            var t = i(arguments),
                e = Math.round(t[0] / 255 * 100),
                n = Math.round(t[1] / 255 * 100),
                r = Math.round(t[2] / 255 * 100);
            return t.length < 4 || 1 === t[3] ? "rgb(" + e + "%, " + n + "%, " + r + "%)" : "rgba(" + e + "%, " + n + "%, " + r + "%, " + t[3] + ")"
        }, s.to.hsl = function() {
            var t = i(arguments);
            return t.length < 4 || 1 === t[3] ? "hsl(" + t[0] + ", " + t[1] + "%, " + t[2] + "%)" : "hsla(" + t[0] + ", " + t[1] + "%, " + t[2] + "%, " + t[3] + ")"
        }, s.to.hwb = function() {
            var t = i(arguments),
                e = "";
            return t.length >= 4 && 1 !== t[3] && (e = ", " + t[3]), "hwb(" + t[0] + ", " + t[1] + "%, " + t[2] + "%" + e + ")"
        }, s.to.keyword = function(t) {
            return a[t.slice(0, 3)]
        }
    },
    function(t, e, n) {
        "use strict";
        t.exports = {
            aliceblue: [240, 248, 255],
            antiquewhite: [250, 235, 215],
            aqua: [0, 255, 255],
            aquamarine: [127, 255, 212],
            azure: [240, 255, 255],
            beige: [245, 245, 220],
            bisque: [255, 228, 196],
            black: [0, 0, 0],
            blanchedalmond: [255, 235, 205],
            blue: [0, 0, 255],
            blueviolet: [138, 43, 226],
            brown: [165, 42, 42],
            burlywood: [222, 184, 135],
            cadetblue: [95, 158, 160],
            chartreuse: [127, 255, 0],
            chocolate: [210, 105, 30],
            coral: [255, 127, 80],
            cornflowerblue: [100, 149, 237],
            cornsilk: [255, 248, 220],
            crimson: [220, 20, 60],
            cyan: [0, 255, 255],
            darkblue: [0, 0, 139],
            darkcyan: [0, 139, 139],
            darkgoldenrod: [184, 134, 11],
            darkgray: [169, 169, 169],
            darkgreen: [0, 100, 0],
            darkgrey: [169, 169, 169],
            darkkhaki: [189, 183, 107],
            darkmagenta: [139, 0, 139],
            darkolivegreen: [85, 107, 47],
            darkorange: [255, 140, 0],
            darkorchid: [153, 50, 204],
            darkred: [139, 0, 0],
            darksalmon: [233, 150, 122],
            darkseagreen: [143, 188, 143],
            darkslateblue: [72, 61, 139],
            darkslategray: [47, 79, 79],
            darkslategrey: [47, 79, 79],
            darkturquoise: [0, 206, 209],
            darkviolet: [148, 0, 211],
            deeppink: [255, 20, 147],
            deepskyblue: [0, 191, 255],
            dimgray: [105, 105, 105],
            dimgrey: [105, 105, 105],
            dodgerblue: [30, 144, 255],
            firebrick: [178, 34, 34],
            floralwhite: [255, 250, 240],
            forestgreen: [34, 139, 34],
            fuchsia: [255, 0, 255],
            gainsboro: [220, 220, 220],
            ghostwhite: [248, 248, 255],
            gold: [255, 215, 0],
            goldenrod: [218, 165, 32],
            gray: [128, 128, 128],
            green: [0, 128, 0],
            greenyellow: [173, 255, 47],
            grey: [128, 128, 128],
            honeydew: [240, 255, 240],
            hotpink: [255, 105, 180],
            indianred: [205, 92, 92],
            indigo: [75, 0, 130],
            ivory: [255, 255, 240],
            khaki: [240, 230, 140],
            lavender: [230, 230, 250],
            lavenderblush: [255, 240, 245],
            lawngreen: [124, 252, 0],
            lemonchiffon: [255, 250, 205],
            lightblue: [173, 216, 230],
            lightcoral: [240, 128, 128],
            lightcyan: [224, 255, 255],
            lightgoldenrodyellow: [250, 250, 210],
            lightgray: [211, 211, 211],
            lightgreen: [144, 238, 144],
            lightgrey: [211, 211, 211],
            lightpink: [255, 182, 193],
            lightsalmon: [255, 160, 122],
            lightseagreen: [32, 178, 170],
            lightskyblue: [135, 206, 250],
            lightslategray: [119, 136, 153],
            lightslategrey: [119, 136, 153],
            lightsteelblue: [176, 196, 222],
            lightyellow: [255, 255, 224],
            lime: [0, 255, 0],
            limegreen: [50, 205, 50],
            linen: [250, 240, 230],
            magenta: [255, 0, 255],
            maroon: [128, 0, 0],
            mediumaquamarine: [102, 205, 170],
            mediumblue: [0, 0, 205],
            mediumorchid: [186, 85, 211],
            mediumpurple: [147, 112, 219],
            mediumseagreen: [60, 179, 113],
            mediumslateblue: [123, 104, 238],
            mediumspringgreen: [0, 250, 154],
            mediumturquoise: [72, 209, 204],
            mediumvioletred: [199, 21, 133],
            midnightblue: [25, 25, 112],
            mintcream: [245, 255, 250],
            mistyrose: [255, 228, 225],
            moccasin: [255, 228, 181],
            navajowhite: [255, 222, 173],
            navy: [0, 0, 128],
            oldlace: [253, 245, 230],
            olive: [128, 128, 0],
            olivedrab: [107, 142, 35],
            orange: [255, 165, 0],
            orangered: [255, 69, 0],
            orchid: [218, 112, 214],
            palegoldenrod: [238, 232, 170],
            palegreen: [152, 251, 152],
            paleturquoise: [175, 238, 238],
            palevioletred: [219, 112, 147],
            papayawhip: [255, 239, 213],
            peachpuff: [255, 218, 185],
            peru: [205, 133, 63],
            pink: [255, 192, 203],
            plum: [221, 160, 221],
            powderblue: [176, 224, 230],
            purple: [128, 0, 128],
            rebeccapurple: [102, 51, 153],
            red: [255, 0, 0],
            rosybrown: [188, 143, 143],
            royalblue: [65, 105, 225],
            saddlebrown: [139, 69, 19],
            salmon: [250, 128, 114],
            sandybrown: [244, 164, 96],
            seagreen: [46, 139, 87],
            seashell: [255, 245, 238],
            sienna: [160, 82, 45],
            silver: [192, 192, 192],
            skyblue: [135, 206, 235],
            slateblue: [106, 90, 205],
            slategray: [112, 128, 144],
            slategrey: [112, 128, 144],
            snow: [255, 250, 250],
            springgreen: [0, 255, 127],
            steelblue: [70, 130, 180],
            tan: [210, 180, 140],
            teal: [0, 128, 128],
            thistle: [216, 191, 216],
            tomato: [255, 99, 71],
            turquoise: [64, 224, 208],
            violet: [238, 130, 238],
            wheat: [245, 222, 179],
            white: [255, 255, 255],
            whitesmoke: [245, 245, 245],
            yellow: [255, 255, 0],
            yellowgreen: [154, 205, 50]
        }
    },
    function(t, e, n) {
        "use strict";
        var r = n(39),
            i = Array.prototype.concat,
            a = Array.prototype.slice,
            o = t.exports = function(t) {
                for (var e = [], n = 0, o = t.length; n < o; n++) {
                    var s = t[n];
                    r(s) ? e = i.call(e, a.call(s)) : e.push(s)
                }
                return e
            };
        o.wrap = function(t) {
            return function() {
                return t(o(arguments))
            }
        }
    },
    function(t, e) {
        t.exports = function(t) {
            return !(!t || "string" == typeof t) && (t instanceof Array || Array.isArray(t) || t.length >= 0 && (t.splice instanceof Function || Object.getOwnPropertyDescriptor(t, t.length - 1) && "String" !== t.constructor.name))
        }
    },
    function(t, e, n) {
        var r = n(10),
            i = n(42),
            a = {};
        Object.keys(r).forEach(function(t) {
            a[t] = {}, Object.defineProperty(a[t], "channels", {
                value: r[t].channels
            }), Object.defineProperty(a[t], "labels", {
                value: r[t].labels
            });
            var e = i(t);
            Object.keys(e).forEach(function(n) {
                var r = e[n];
                a[t][n] = function(t) {
                    var e = function(e) {
                        if (null == e) return e;
                        arguments.length > 1 && (e = Array.prototype.slice.call(arguments));
                        var n = t(e);
                        if ("object" == typeof n)
                            for (var r = n.length, i = 0; i < r; i++) n[i] = Math.round(n[i]);
                        return n
                    };
                    return "conversion" in t && (e.conversion = t.conversion), e
                }(r), a[t][n].raw = function(t) {
                    var e = function(e) {
                        return null == e ? e : (arguments.length > 1 && (e = Array.prototype.slice.call(arguments)), t(e))
                    };
                    return "conversion" in t && (e.conversion = t.conversion), e
                }(r)
            })
        }), t.exports = a
    },
    function(t, e, n) {
        "use strict";
        t.exports = {
            aliceblue: [240, 248, 255],
            antiquewhite: [250, 235, 215],
            aqua: [0, 255, 255],
            aquamarine: [127, 255, 212],
            azure: [240, 255, 255],
            beige: [245, 245, 220],
            bisque: [255, 228, 196],
            black: [0, 0, 0],
            blanchedalmond: [255, 235, 205],
            blue: [0, 0, 255],
            blueviolet: [138, 43, 226],
            brown: [165, 42, 42],
            burlywood: [222, 184, 135],
            cadetblue: [95, 158, 160],
            chartreuse: [127, 255, 0],
            chocolate: [210, 105, 30],
            coral: [255, 127, 80],
            cornflowerblue: [100, 149, 237],
            cornsilk: [255, 248, 220],
            crimson: [220, 20, 60],
            cyan: [0, 255, 255],
            darkblue: [0, 0, 139],
            darkcyan: [0, 139, 139],
            darkgoldenrod: [184, 134, 11],
            darkgray: [169, 169, 169],
            darkgreen: [0, 100, 0],
            darkgrey: [169, 169, 169],
            darkkhaki: [189, 183, 107],
            darkmagenta: [139, 0, 139],
            darkolivegreen: [85, 107, 47],
            darkorange: [255, 140, 0],
            darkorchid: [153, 50, 204],
            darkred: [139, 0, 0],
            darksalmon: [233, 150, 122],
            darkseagreen: [143, 188, 143],
            darkslateblue: [72, 61, 139],
            darkslategray: [47, 79, 79],
            darkslategrey: [47, 79, 79],
            darkturquoise: [0, 206, 209],
            darkviolet: [148, 0, 211],
            deeppink: [255, 20, 147],
            deepskyblue: [0, 191, 255],
            dimgray: [105, 105, 105],
            dimgrey: [105, 105, 105],
            dodgerblue: [30, 144, 255],
            firebrick: [178, 34, 34],
            floralwhite: [255, 250, 240],
            forestgreen: [34, 139, 34],
            fuchsia: [255, 0, 255],
            gainsboro: [220, 220, 220],
            ghostwhite: [248, 248, 255],
            gold: [255, 215, 0],
            goldenrod: [218, 165, 32],
            gray: [128, 128, 128],
            green: [0, 128, 0],
            greenyellow: [173, 255, 47],
            grey: [128, 128, 128],
            honeydew: [240, 255, 240],
            hotpink: [255, 105, 180],
            indianred: [205, 92, 92],
            indigo: [75, 0, 130],
            ivory: [255, 255, 240],
            khaki: [240, 230, 140],
            lavender: [230, 230, 250],
            lavenderblush: [255, 240, 245],
            lawngreen: [124, 252, 0],
            lemonchiffon: [255, 250, 205],
            lightblue: [173, 216, 230],
            lightcoral: [240, 128, 128],
            lightcyan: [224, 255, 255],
            lightgoldenrodyellow: [250, 250, 210],
            lightgray: [211, 211, 211],
            lightgreen: [144, 238, 144],
            lightgrey: [211, 211, 211],
            lightpink: [255, 182, 193],
            lightsalmon: [255, 160, 122],
            lightseagreen: [32, 178, 170],
            lightskyblue: [135, 206, 250],
            lightslategray: [119, 136, 153],
            lightslategrey: [119, 136, 153],
            lightsteelblue: [176, 196, 222],
            lightyellow: [255, 255, 224],
            lime: [0, 255, 0],
            limegreen: [50, 205, 50],
            linen: [250, 240, 230],
            magenta: [255, 0, 255],
            maroon: [128, 0, 0],
            mediumaquamarine: [102, 205, 170],
            mediumblue: [0, 0, 205],
            mediumorchid: [186, 85, 211],
            mediumpurple: [147, 112, 219],
            mediumseagreen: [60, 179, 113],
            mediumslateblue: [123, 104, 238],
            mediumspringgreen: [0, 250, 154],
            mediumturquoise: [72, 209, 204],
            mediumvioletred: [199, 21, 133],
            midnightblue: [25, 25, 112],
            mintcream: [245, 255, 250],
            mistyrose: [255, 228, 225],
            moccasin: [255, 228, 181],
            navajowhite: [255, 222, 173],
            navy: [0, 0, 128],
            oldlace: [253, 245, 230],
            olive: [128, 128, 0],
            olivedrab: [107, 142, 35],
            orange: [255, 165, 0],
            orangered: [255, 69, 0],
            orchid: [218, 112, 214],
            palegoldenrod: [238, 232, 170],
            palegreen: [152, 251, 152],
            paleturquoise: [175, 238, 238],
            palevioletred: [219, 112, 147],
            papayawhip: [255, 239, 213],
            peachpuff: [255, 218, 185],
            peru: [205, 133, 63],
            pink: [255, 192, 203],
            plum: [221, 160, 221],
            powderblue: [176, 224, 230],
            purple: [128, 0, 128],
            rebeccapurple: [102, 51, 153],
            red: [255, 0, 0],
            rosybrown: [188, 143, 143],
            royalblue: [65, 105, 225],
            saddlebrown: [139, 69, 19],
            salmon: [250, 128, 114],
            sandybrown: [244, 164, 96],
            seagreen: [46, 139, 87],
            seashell: [255, 245, 238],
            sienna: [160, 82, 45],
            silver: [192, 192, 192],
            skyblue: [135, 206, 235],
            slateblue: [106, 90, 205],
            slategray: [112, 128, 144],
            slategrey: [112, 128, 144],
            snow: [255, 250, 250],
            springgreen: [0, 255, 127],
            steelblue: [70, 130, 180],
            tan: [210, 180, 140],
            teal: [0, 128, 128],
            thistle: [216, 191, 216],
            tomato: [255, 99, 71],
            turquoise: [64, 224, 208],
            violet: [238, 130, 238],
            wheat: [245, 222, 179],
            white: [255, 255, 255],
            whitesmoke: [245, 245, 245],
            yellow: [255, 255, 0],
            yellowgreen: [154, 205, 50]
        }
    },
    function(t, e, n) {
        var r = n(10);

        function i(t) {
            var e = function() {
                    for (var t = {}, e = Object.keys(r), n = e.length, i = 0; i < n; i++) t[e[i]] = {
                        distance: -1,
                        parent: null
                    };
                    return t
                }(),
                n = [t];
            for (e[t].distance = 0; n.length;)
                for (var i = n.pop(), a = Object.keys(r[i]), o = a.length, s = 0; s < o; s++) {
                    var l = a[s],
                        u = e[l]; - 1 === u.distance && (u.distance = e[i].distance + 1, u.parent = i, n.unshift(l))
                }
            return e
        }

        function a(t, e) {
            return function(n) {
                return e(t(n))
            }
        }

        function o(t, e) {
            for (var n = [e[t].parent, t], i = r[e[t].parent][t], o = e[t].parent; e[o].parent;) n.unshift(e[o].parent), i = a(r[e[o].parent][o], i), o = e[o].parent;
            return i.conversion = n, i
        }
        t.exports = function(t) {
            for (var e = i(t), n = {}, r = Object.keys(e), a = r.length, s = 0; s < a; s++) {
                var l = r[s];
                null !== e[l].parent && (n[l] = o(l, e))
            }
            return n
        }
    },
    function(t, e, n) {
        "use strict";
        n.r(e);
        n(15);
        var r = n(0),
            i = n(7),
            a = n.n(i),
            o = "home-lang";

        function s() {
            return (a.a.get(o) || navigator.language || navigator.userLanguage).indexOf("zh") > -1 ? "zh" : "en"
        }
        r.a.component("status-time", {
            template: "<span>{{ formattedTime }}</span>",
            data: function() {
                return {
                    time: new Date,
                    lang: s()
                }
            },
            computed: {
                formattedTime: function() {
                    var t = "",
                        e = this.time.getHours();
                    "zh" === this.lang && (t += e > 4 && e < 12 ? "上午" : e >= 12 && e < 14 ? "中午" : e > 14 && e < 18 ? "下午" : "晚上");
                    var n = this.time.getMinutes();
                    return t += " " + e + ":" + (n = (n < 10 ? "0" : "") + n)
                }
            },
            created: function() {
                var t = this;
                setInterval(function() {
                    t.time = new Date
                }, 1e3)
            }
        }), r.a.component("status-signal", {
            template: '<div>\n            <span id="system-status-signal">\n                <span v-for="(signal, index) in signals"\n                    class="signal"\n                    v-bind:class="{ \'on\': signal, [\'signal-\' + (index + 1)]: true }">\n                </span>\n            </span>\n            <span id="system-status-connection">{{ connection }}</span>\n        </div>',
            data: function() {
                return {
                    signals: [1, 1, 1, 0],
                    connection: "Wifi"
                }
            },
            created: function() {
                var t = this;
                setInterval(function() {
                    t.setSignals(), t.setConnect()
                }, 5e3)
            },
            methods: {
                setSignals: function() {
                    for (var t = Math.min(Math.floor(10 * Math.random() + 1), 4), e = [1, 1, 1, 1], n = 0; n < 4; ++n) e[n] = n < t ? 1 : 0;
                    this.signals = e
                },
                setConnect: function() {
                    var t = navigator.connection;
                    t && "wifi" !== t.type ? this.connection = t.effectiveType.toUpperCase() : this.connection = "Wifi"
                }
            }
        });
        var l = "light",
            u = "medium",
            c = "dark",
            h = {
                birthday2020: {
                    name: {
                        zh: "2020 生日",
                        en: "Birthday 2020"
                    },
                    pos: [2, 5],
                    logoTheme: l,
                    link: "./birthday2020/"
                },
                douban: {
                    name: {
                        zh: "豆瓣",
                        en: "Douban"
                    },
                    pos: [0, 0],
                    logoTheme: u,
                    link: "https://www.douban.com/people/ovilia1024/"
                },
                bilibili: {
                    name: {
                        zh: "Bilibili",
                        en: "Bilibili"
                    },
                    pos: [1, 0],
                    logoTheme: c,
                    link: "https://space.bilibili.com/369508085/#/"
                },
                dribbble: {
                    name: {
                        zh: "Dribbble",
                        en: "Dribbble"
                    },
                    pos: [2, 0],
                    logoTheme: u,
                    link: "https://dribbble.com/wenli"
                },
                gooday: {
                    name: {
                        zh: "牙哈哈",
                        en: "Gooday"
                    },
                    pos: [3, 0],
                    logoTheme: l,
                    link: "http://zhangwenli.com/gooday/?ref=home2019"
                },
                wechat: {
                    name: {
                        zh: "微信",
                        en: "Wechat"
                    },
                    pos: [0, 1],
                    logoTheme: c
                },
                weibo: {
                    name: {
                        zh: "微博",
                        en: "Weibo"
                    },
                    pos: [1, 1],
                    logoTheme: l,
                    link: "https://www.weibo.com/xing276469464?topnav=1&wvr=6&topsug=1&is_all=1"
                },
                zhifubao: {
                    name: {
                        zh: "送羡辙一本书",
                        en: "Zhifubao"
                    },
                    pos: [2, 1],
                    logoTheme: u,
                    appStatusTheme: c
                },
                zhihu: {
                    name: {
                        zh: "知乎",
                        en: "Zhihu"
                    },
                    pos: [3, 1],
                    logoTheme: l,
                    link: "https://www.zhihu.com/people/ovilia"
                },
                github: {
                    name: {
                        zh: "GitHub",
                        en: "GitHub"
                    },
                    pos: [0, 2],
                    logoTheme: l,
                    link: "https://github.com/shuaizengMU"
                },
                source: {
                    name: {
                        zh: "查看源码",
                        en: "Source"
                    },
                    pos: [0, 2],
                    logoTheme: l,
                    link: "https://github.com/shuaizengMU"
                },
                email: {
                    name: {
                        zh: "Email",
                        en: "Email"
                    },
                    pos: [1, 2],
                    logoTheme: u,
                    appStatusTheme: l,
                    link: "mailto:me@zhangwenli.com"
                },
                music: {
                    name: {
                        zh: "音乐",
                        en: "Music"
                    },
                    pos: [2, 2],
                    logoTheme: l,
                    appStatusTheme: l
                },
                album: {
                    name: {
                        zh: "相册",
                        en: "Album"
                    },
                    pos: [1, 3],
                    logoTheme: l,
                    appStatusTheme: l
                },
                blog: {
                    name: {
                        zh: "博客",
                        en: "Blog"
                    },
                    pos: [3, 2],
                    logoTheme: l,
                    link: "http://zhangwenli.com/blog/?ref=home2019"
                },
                wedding: {
                    name: {
                        zh: "在线婚礼",
                        en: "Wedding"
                    },
                    pos: [0, 3],
                    logoTheme: c,
                    link: "https://umeecorn.com/wedding/?ref=home2019"
                },
                calendar: {
                    name: {
                        zh: "2019字体日历",
                        en: "2019 Calendar"
                    },
                    pos: [3, 3],
                    logoTheme: u,
                    link: "http://zhangwenli.com/2019-typography-calendar/?ref=home2019"
                },
                lipstick: {
                    name: {
                        zh: "口红可视化",
                        en: "Lipsticks"
                    },
                    pos: [0, 4],
                    logoTheme: l,
                    link: "http://zhangwenli.com/lipstick/?ref=home2019"
                },
                moonight: {
                    name: {
                        zh: "音频可视化",
                        en: "Moonight"
                    },
                    pos: [1, 4],
                    logoTheme: l,
                    link: "https://github.com/Ovilia/moonight/?ref=home2019"
                },
                polyvia: {
                    name: {
                        zh: "Low Poly",
                        en: "Low Poly"
                    },
                    pos: [2, 4],
                    logoTheme: u,
                    link: "https://github.com/Ovilia/Polyvia/?ref=home2019"
                },
                ectheme: {
                    name: {
                        zh: "主题编辑器",
                        en: "Theme Editor"
                    },
                    pos: [3, 4],
                    logoTheme: c,
                    link: "https://github.com/Ovilia/ECharts-Theme-Builder"
                },
                ecsunburst: {
                    name: {
                        zh: "旭日图",
                        en: "Sunburst"
                    },
                    pos: [0, 5],
                    logoTheme: c,
                    link: "https://echarts.apache.org/examples/zh/index.html#chart-type-sunburst"
                },
                ecliquidfill: {
                    name: {
                        zh: "水球图",
                        en: "LiquidFill"
                    },
                    pos: [1, 5],
                    logoTheme: u,
                    link: "https://ecomfe.github.io/echarts-liquidfill/example/"
                },
                ecbot: {
                    name: {
                        zh: "Issue 机器人",
                        en: "Issue Bot"
                    },
                    pos: [2, 5],
                    logoTheme: l,
                    link: "https://github.com/Ovilia/echarts-robot"
                },
                2014: {
                    name: {
                        zh: "2014",
                        en: "2014"
                    },
                    pos: [0, 6],
                    logoTheme: c,
                    link: "http://zhangwenli.com/2014/?ref=home2019"
                },
                2015: {
                    name: {
                        zh: "2015",
                        en: "2015"
                    },
                    pos: [1, 6],
                    logoTheme: u,
                    link: "http://zhangwenli.com/2015/?ref=home2019"
                },
                2016: {
                    name: {
                        zh: "2016",
                        en: "2016"
                    },
                    pos: [2, 6],
                    logoTheme: c,
                    link: "http://zhangwenli.com/2016/?ref=home2019"
                },
                2017: {
                    name: {
                        zh: "2017",
                        en: "2017"
                    },
                    pos: [3, 6],
                    logoTheme: u,
                    link: "http://zhangwenli.com/2017/?ref=home2019"
                },
                comment: {
                    name: {
                        zh: "留言",
                        en: "Comments"
                    },
                    pos: [3, 5],
                    logoTheme: c,
                    appStatusTheme: c
                }
            },
            p = Math.ceil(48 / 28),
            f = {
                primary: "#786f69",
                primaryLight: "#d1c4af",
                primaryDark: "#585356",
                primaryDarker: "#504a4b",
                primaryDarkest: "#413a3b",
                secondaryLight: "#a39990",
                secondaryDark: "#585153",
                secondaryDarkest: "#363132",
                appGroup: "#948A84",
                appGroupTitle: "#8B817E"
            };
        f.bg = {
            lightest: f.primaryLight,
            lighter: "#bab3ac",
            light: f.secondaryLight,
            medium: f.primary,
            mediumDarker: "#8e8781",
            dark: f.primaryDarkest
        }, f.head = {
            light: f.appGroupTitle,
            medium: f.primary,
            dark: f.primaryDarkest
        }, f.border = f.primaryDarker, f.borderLight = f.primary, f.borderDarker = f.secondaryDarkest, f.palette = [f.primary, f.primaryLight, f.primaryDark, f.primaryDarker, f.primaryDarkest, f.secondaryLight, f.secondaryDark, f.secondaryDarkest];
        var d = f;

        function m(t) {
            var e;
            return "number" == typeof t ? e = [t, t, t, t] : 4 === t.length ? e = t : 3 === t.length ? e = [t[0], t[1], t[2], t[1]] : 2 === t.length ? e = [t[0], t[1], t[0], t[1]] : 1 === t.length ? e = [t[0], t[0], t[0], t[0]] : (console.warn("Error value form", t), e = [0, 0, 0, 0]), e
        }

        function g(t, e) {
            var n = document.createElement("canvas");
            return n.width = t, n.height = e, n
        }

        function v(t) {
            var e = g(t.width, t.height),
                n = e.getContext("2d");
            n.webkitImageSmoothingEnabled = !1, n.imageSmoothingEnabled = !1, n.mozImageSmoothingEnabled = !1, n.msImageSmoothingEnabled = !1;
            var r = null == t.pixelSize ? p : t.pixelSize,
                i = m(t.margin || 0),
                a = r * i[0],
                o = e.width - r * i[1],
                s = e.height - r * i[2],
                l = r * i[3],
                u = m(t.radius);
            if (t.borderColor) {
                var c = m(t.borderSize || 1),
                    h = [c[0] * r, c[1] * r, c[2] * r, c[3] * r];
                y(n, l, a, o - l, s - a, u, t.borderColor, r);
                var f = [Math.max(u[0] - 1, 0), Math.max(u[1] - 1, 0), Math.max(u[2] - 1, 0), Math.max(u[3] - 1, 0)];
                y(n, l + h[3], a + h[0], o - l - h[1] - h[3], s - a - h[0] - h[2], f, t.fillColor, r)
            } else y(n, l, a, o - l, s - a, u, t.fillColor, r);
            return e.toDataURL()
        }

        function y(t, e, n, r, i, a, o, s) {
            var l = e + r,
                u = n + i;
            t.fillStyle = o, t.beginPath(), t.moveTo(e, n + s * a[0]);
            for (var c = 0; c < a[0]; ++c) t.lineTo(e + s * (c + 1), n + s * (a[0] - c)), t.lineTo(e + s * (c + 1), n + s * (a[0] - c - 1));
            t.lineTo(l - s * a[1], n);
            for (var h = 0; h < a[1]; ++h) t.lineTo(l - s * (a[1] - h), n + s * (h + 1)), t.lineTo(l - s * (a[1] - h - 1), n + s * (h + 1));
            t.lineTo(l, u - s * a[2]);
            for (var p = 0; p < a[2]; ++p) t.lineTo(l - s * (p + 1), u - s * (a[2] - p)), t.lineTo(l - s * (p + 1), u - s * (a[2] - p - 1));
            t.lineTo(e + s * a[3], u);
            for (var f = 0; f < a[3]; ++f) t.lineTo(e + s * (a[3] - f), u - s * (f + 1)), t.lineTo(e + s * (a[3] - f - 1), u - s * (f + 1));
            t.closePath(), t.fill()
        }
        r.a.component("app", {
            props: {
                appId: {
                    type: String,
                    default: ""
                }
            },
            template: '<div class="app" v-if="icons[appId]">\n            <a class="app-icon" @click="appClick" draggable="false"\n                :href="icons[appId].link || \'javascript:;\'"\n                :target="icons[appId].link ? \'_blank\' : \'_self\'">\n                <div class="app-msg-counter pixel-img" v-if="msgCount"\n                    :style="{\'background-image\': \'url(\' + countBgImg + \')\'}">\n                    {{ msgCount }}\n                </div>\n                <div class="app-img-container">\n                    <div class="img app-img-content" :style="{\'background-position\': appContentImagePosition}"></div>\n                    <div class="img app-img-bg" :class="icons[appId].logoTheme"></div>\n                </div>\n            </a>\n            <div class="app-name">{{ icons[appId].name[lang] }}</div>\n        </div>',
            data: function() {
                return {
                    icons: h,
                    isWechatOpened: !1,
                    isZhifubaoOpened: !1,
                    countBgImg: "",
                    lang: s()
                }
            },
            computed: {
                appContentImagePosition: function() {
                    var t = h[this.appId].pos;
                    return 48 * -t[0] + "px " + 48 * -t[1] + "px"
                },
                msgCount: function() {
                    return "wechat" === this.appId ? this.isWechatOpened ? 0 : 1 : "zhifubao" === this.appId ? this.isZhifubaoOpened ? 0 : 1 : 0
                }
            },
            mounted: function() {
                this.countBgImg = v({
                    width: 20,
                    height: 20,
                    radius: 3,
                    fillColor: d.primaryLight,
                    borderColor: d.primaryDark,
                    borderSize: 1,
                    margin: 0
                })
            },
            methods: {
                appClick: function(t) {
                    _gaq.push(["_trackEvent", "Home", "appClick", this.appId]), h[this.appId].link || ("wechat" === this.appId ? this.isWechatOpened = !0 : "zhifubao" === this.appId && (this.isZhifubaoOpened = !0), this.$root.$emit("open-app", this.appId, t))
                }
            }
        }), r.a.component("app-group", {
            props: {
                apps: {
                    type: Array,
                    default: function() {
                        return []
                    }
                },
                title: {
                    type: Object,
                    default: ""
                }
            },
            template: '<div class="app-group" :style="{\'background-image\': \'url(\' + appGroupImg + \')\'}">\n            <div class="app-group-title" :style="{\'background-image\': \'url(\' + appGroupTitleImg + \')\'}">{{ title[lang] }}</div>\n            <div class="app-group-content">\n                <app v-for="appId in apps" :app-id="appId" :key="appId"></app>\n            </div>\n        </div>',
            data: function() {
                return {
                    appGroupImg: "",
                    appGroupTitleImg: "",
                    lang: s()
                }
            },
            computed: {},
            methods: {
                resize: function() {
                    var t = this.$el;
                    this.appGroupImg = v({
                        width: t.clientWidth,
                        height: t.clientHeight,
                        radius: 2,
                        fillColor: d.appGroup
                    });
                    var e = t.getElementsByClassName("app-group-title")[0];
                    this.appGroupTitleImg = v({
                        width: e.clientWidth,
                        height: e.clientHeight,
                        radius: [2, 2, 0, 0],
                        fillColor: d.appGroupTitle
                    })
                }
            },
            mounted: function() {
                this.resize(), window.addEventListener("resize", this.resize)
            }
        }), r.a.component("slider-page", {
            props: {
                appGroups: {
                    type: Array,
                    default: function() {
                        return []
                    }
                }
            },
            data: function() {
                return {
                    lang: s()
                }
            },
            template: '<div class="slider-page">\n            <app-group v-for="group in appGroups" :key="group.title[lang]"\n                :apps="group.apps" :title="group.title">\n            </app-group>\n        </div>'
        }), r.a.component("slider", {
            props: {
                pages: {
                    type: Array,
                    default: function() {
                        return []
                    }
                }
            },
            data: function() {
                return {
                    isMouseDown: !1,
                    pageId: 0,
                    pageContainer: null,
                    lastMoveX: null,
                    lastDownX: null
                }
            },
            template: '<div class="slider"\n            @mousedown="mouseDown" @mousemove="mouseMove" @mouseup="mouseUp" @mouseleave="mouseUp"\n            @touchstart="touchStart" @touchmove="touchMove" @touchend="touchEnd"\n            :style="">\n            <div class="slider-page-container">\n                <slider-page v-for="page in pages" :key="page.id"\n                    :app-groups="page.groups">\n                </slider-page>\n            </div>\n            <div class="slider-control" ref="ctrl">\n                <span class="slider-control-btn" v-for="page in pages" :key="page.id">\n                </span>\n            </div>\n        </div>',
            methods: {
                mouseDown: function(t) {
                    this.isMouseDown = !0, this.lastMoveX = t.clientX, this.lastDownX = t.clientX
                },
                touchStart: function(t) {
                    this.mouseDown(t.touches[0])
                },
                mouseMove: function(t) {
                    this.isMouseDown && (this.scrollBy(this.lastMoveX - t.clientX), this.lastMoveX = t.clientX)
                },
                touchMove: function(t) {
                    this.mouseMove(t.changedTouches[0])
                },
                mouseUp: function(t) {
                    this.isMouseDown && (this.lastDownX - t.clientX > 50 ? ++this.pageId : this.lastDownX - t.clientX < -50 && --this.pageId, this.pageId < 0 && (this.pageId = 0), this.scrollToPage(this.pageId), this.isMouseDown = !1, this.lastDownX = null, this.lastMoveX = null)
                },
                touchEnd: function() {
                    this.mouseUp(event.changedTouches[0])
                },
                scrollBy: function(t) {
                    this.pageContainer.scrollLeft += t
                },
                scrollToPage: function(t) {
                    this.pageContainer.style.transition = "1s";
                    var e = document.getElementsByClassName("slider-page")[0].clientWidth;
                    this.pageContainer.scrollLeft = e * t;
                    var n = this.$refs.ctrl;
                    if (t < n.childNodes.length)
                        for (var r = 0; r < n.childNodes.length; ++r) n.childNodes[r].className = r === t ? "slider-control-btn selected" : "slider-control-btn"
                }
            },
            mounted: function() {
                this.pageContainer = this.$el.getElementsByClassName("slider-page-container")[0], this.scrollToPage(0)
            }
        }), r.a.component("inapp", {
            props: {
                appId: {
                    type: String,
                    default: ""
                }
            },
            template: '<div class="mobile-in-app" :class="\'status-theme-\' + icons[appId].appStatusTheme"\n            :style="{\'background-image\': \'url(\' + bodyBgImg + \')\'}">\n            <div class="mobile-head" :style="{\'background-image\': \'url(\' + headBgImg + \')\'}">\n                <div class="mobile-head-center">{{ icons[appId].name[lang] }}</div>\n                <div class="mobile-head-right">\n                    <a class="btn-close" @click="exit()">\n                        <span v-if="lang === \'en\'">Back</span>\n                        <span v-if="lang !== \'en\'">返回</span>\n                    </a>\n                </div>\n            </div>\n            <div class="mobile-body">\n                <app-album v-if="appId === \'album\'"></app-album>\n                <app-comment v-if="appId === \'comment\'"></app-comment>\n                <app-wechat v-if="appId === \'wechat\'"></app-wechat>\n                <app-zhifubao v-if="appId === \'zhifubao\'"></app-zhifubao>\n            </div>\n        </div>',
            data: function() {
                return {
                    lang: s(),
                    openPosition: [0, 0],
                    icons: h,
                    headBgImg: "",
                    bodyBgImg: ""
                }
            },
            computed: {},
            methods: {
                exit: function() {
                    this.$emit("exit")
                },
                setOpenPosition: function(t, e) {
                    this.openPosition = [t, e]
                },
                resize: function() {
                    var t = this.$el,
                        e = h[this.appId].appBgTheme,
                        n = function() {
                            switch (e) {
                                case l:
                                    return d.bg.lightest;
                                case u:
                                    return d.bg.medium;
                                case c:
                                    return d.bg.dark;
                                default:
                                    return d.bg.light
                            }
                        }();
                    this.bodyBgImg = v({
                        width: t.clientWidth,
                        height: t.clientHeight,
                        radius: 2,
                        fillColor: n,
                        margin: 1
                    });
                    var r = this.$el.getElementsByClassName("mobile-head")[0],
                        i = h[this.appId].appStatusTheme,
                        a = function() {
                            switch (i) {
                                case l:
                                    return d.head.light;
                                case u:
                                    return d.head.medium;
                                case c:
                                default:
                                    return d.head.dark
                            }
                        }();
                    this.headBgImg = v({
                        width: r.clientWidth,
                        height: r.clientHeight,
                        radius: [2, 2, 0, 0],
                        fillColor: a,
                        margin: [1, 1, 0, 1]
                    })
                }
            },
            mounted: function() {
                this.resize(), window.addEventListener("resize", this.resize)
            }
        });
        var b = "xianzhe",
            w = "audience",
            C = (r.a.component("msg", {
                props: {
                    message: {
                        type: Object,
                        default: function() {}
                    },
                    needResize: {
                        type: Boolean,
                        default: !1
                    },
                    ignoreAnimation: {
                        type: Boolean,
                        default: !1
                    }
                },
                template: '<div class="msg-row" :class="\'msg-\' + message.author">\n            <div class="msg" ref="msg" :style="{\'background-image\': \'url(\' + bgImg + \')\'}"\n                v-html="msgContent">\n            </div>\n        </div>',
                data: function() {
                    return {
                        bgImg: "",
                        msgContent: ""
                    }
                },
                watch: {
                    needResize: function(t) {
                        t && this.resize()
                    },
                    msgContent: function() {
                        var t = this;
                        this.$nextTick(function() {
                            t.resize()
                        })
                    }
                },
                methods: {
                    resize: function() {
                        var t = this.message.author === b,
                            e = this.$refs.msg;
                        e && (this.bgImg = v({
                            width: e.clientWidth,
                            height: e.clientHeight,
                            radius: t ? [0, 3, 3, 3] : [3, 0, 3, 3],
                            fillColor: t ? d.bg.lightest : d.bg.mediumDarker,
                            borderColor: t ? "#948a7c" : "#645f5b"
                        })), this.$emit("resized")
                    }
                },
                mounted: function() {
                    var t = this;
                    this.ignoreAnimation || this.message.author !== b ? this.msgContent = this.message.content : (this.msgContent = ".", setTimeout(function() {
                        t.msgContent = ".."
                    }, 500), setTimeout(function() {
                        t.msgContent = "..."
                    }, 1e3), setTimeout(function() {
                        t.msgContent = t.message.content
                    }, 1500)), setTimeout(function() {
                        t.resize()
                    }, 300), window.addEventListener("resize", this.resize)
                }
            }), n(11)),
            _ = n.n(C),
            S = n(1),
            x = n.n(S),
            k = n(12),
            T = n.n(k);
        var O = n(13),
            E = n.n(O);

        function A(t, e) {
            for (var n = 0; n < e.length; n++) {
                var r = e[n];
                r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
            }
        }
        var N = function() {
                function t(e, n) {
                    ! function(t, e) {
                        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                    }(this, t), this.id = T.a.generate(), this.author = e, this.isFromJson = !1;
                    var r = E()(n || "");
                    if (r.indexOf("$$$PAY_BY_ZHIFUBAO$$$") > -1) this.content = '<div class="wechat-pay-img pay-with-zhifubao"></div>';
                    else if (r.indexOf("$$$PAY_BY_WECHAT$$$") > -1) this.content = '<div class="wechat-pay-img pay-with-wechat"></div>';
                    else {
                        var i = new RegExp("<a ");
                        this.content = r.replace(i, '<a target="_blank" ')
                    }
                }
                var e, n, r;
                return e = t, (n = [{
                    key: "isSame",
                    value: function(t) {
                        return t.content === this.content && t.author === this.author
                    }
                }, {
                    key: "toJson",
                    value: function() {
                        return {
                            id: this.id,
                            author: this.author,
                            content: this.content
                        }
                    }
                }, {
                    key: "fromJson",
                    value: function(t) {
                        return this.id = t.id, this.author = t.author, this.content = t.content, this.isFromJson = !0, this
                    }
                }]) && A(e.prototype, n), r && A(e, r), t
            }(),
            I = 86400,
            P = "messages",
            F = "cacheTime";

        function M() {
            var t = parseInt(localStorage.getItem(F)),
                e = Date.now(),
                n = localStorage.getItem(P);
            return t && e - t > 1e3 * I || !t && n
        }
        r.a.component("msg-container", {
            props: {
                choices: {
                    type: Array,
                    default: function() {
                        return []
                    }
                },
                isDialogOver: {
                    type: Boolean,
                    default: !1
                }
            },
            template: '<div class="msg-container">\n            <div class="content-above-input">\n                <msg v-for="(message, id) in messages" @resized="scrollBottom()"\n                    :message="message" :key="message.id" :ignoreAnimation="message.isFromJson"\n                    :needResize="id === 0 && onMounted">\n                </msg>\n            </div>\n\n            <bottom-input :choices="choices" :isDialogOver="isDialogOver"\n                @respond="respond">\n            </bottom-input>\n        </div>',
            data: function() {
                return {
                    onMounted: !1,
                    messages: []
                }
            },
            methods: {
                respond: function(t) {
                    this.$emit("respond", t)
                },
                appendMessage: function(t) {
                    this.messages.length && this.messages[this.messages.length - 1].isSame(t) || (this.messages.push(t), this.saveMessages())
                },
                scrollBottom: _()(function() {
                    var t = $(".msg-container");
                    t && t.length && t.scrollTop(t[0].scrollHeight - t.height())
                }, 1e3),
                saveMessages: function() {
                    var t = this.messages.map(function(t) {
                        return t.toJson()
                    });
                    try {
                        var e = JSON.stringify(t);
                        x.a.setItem(P, e)
                    } catch (t) {
                        console.warn(t)
                    }
                },
                loadMessages: function() {
                    var t = x.a.getItem(P);
                    try {
                        var e = JSON.parse(t) || [];
                        this.messages = e.map(function(t) {
                            return (new N).fromJson(t)
                        })
                    } catch (t) {
                        console.warn(t)
                    }
                },
                purgeStorage: function() {
                    x.a.setItem(P, null)
                }
            },
            created: function() {
                var t = this;
                M() ? this.purgeStorage() : this.loadMessages(), this.$nextTick(function() {
                    return t.scrollBottom()
                })
            },
            mounted: function() {
                var t = this;
                setTimeout(function() {
                    t.onMounted = !0
                }, 300)
            }
        });
        var L = n(4),
            D = n.n(L),
            j = n(14);

        function V(t, e) {
            for (var n = 0; n < e.length; n++) {
                var r = e[n];
                r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
            }
        }
        var R = function() {
            function t() {
                ! function(t, e) {
                    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                }(this, t), this.story = null, this.fileName = null
            }
            var e, n, r;
            return e = t, (n = [{
                key: "load",
                value: function(t, e) {
                    var n = this;
                    this.fileName = t, M() && this.purgeState();
                    L.getJSON("".concat("dist/", "assets/dialogs/").concat(t, ".json"), function(t) {
                        var r;
                        n.story = new j.Story(t), n.hasState() && n.loadState(), r = Date.now(), localStorage.setItem(F, r), "function" == typeof e && e()
                    })
                }
            }, {
                key: "getNext",
                value: function() {
                    return this.story.canContinue ? (this.saveState(), this.story.Continue()) : null
                }
            }, {
                key: "saveState",
                value: function() {
                    var t = this.story.state.ToJson();
                    x.a.setItem(z(this.fileName), t)
                }
            }, {
                key: "loadState",
                value: function() {
                    var t = x.a.getItem(z(this.fileName));
                    return !(!t || "null" === t) && (this.story.state.LoadJson(t), !0)
                }
            }, {
                key: "hasState",
                value: function() {
                    var t = x.a.getItem(z(this.fileName));
                    return t && "null" !== t
                }
            }, {
                key: "purgeState",
                value: function() {
                    x.a.setItem(z(this.fileName), null)
                }
            }]) && V(e.prototype, n), r && V(e, r), t
        }();

        function z(t) {
            return t ? "inkState" + t : (console.warn("No fileName in getStateKey"), "")
        }
        r.a.component("ink-msg-container", {
            props: {
                inkFileName: {
                    type: String,
                    default: ""
                }
            },
            template: '<div class="ink-msg-container">\n            <msg-container ref="msgContainer" :choices="choices" :isDialogOver="isDialogOver"\n                @respond="respond">\n            </msg-container>\n        </div>',
            data: function() {
                return {
                    inkDialog: null,
                    choices: [],
                    isDialogOver: !1,
                    isFirstMessage: !0
                }
            },
            methods: {
                runNext: function() {
                    var t = this,
                        e = this.inkDialog.getNext();
                    if (e) {
                        var n = this.inkDialog.story.currentTags.indexOf("xianzhe") > -1 ? b : w;
                        n === w ? (this.appendMessage(new N(n, e)), this.runNext()) : this.isFirstMessage ? (this.appendMessage(new N(n, e)), this.runNext(), this.isFirstMessage = !1) : function r() {
                            setTimeout(function() {
                                t.appendMessage(new N(n, e)), (e = t.inkDialog.getNext()) ? r() : t.runNext()
                            }, 2e3)
                        }()
                    }
                    this.choices = this.inkDialog.story.currentChoices, e || this.choices.length || (this.isDialogOver = !0)
                },
                appendMessage: function(t) {
                    this.$refs.msgContainer && this.$refs.msgContainer.appendMessage(t)
                },
                respond: function(t) {
                    this.inkDialog.story.ChooseChoiceIndex(t.index), this.runNext()
                }
            },
            created: function() {
                var t = this;
                this.inkDialog = new R, setTimeout(function() {
                    t.inkDialog.load(t.inkFileName, function(e) {
                        e || t.runNext()
                    })
                }, 300)
            }
        }), r.a.component("bottom-input", {
            props: {
                choices: {
                    type: Array,
                    default: function() {
                        return []
                    }
                },
                isDialogOver: {
                    type: Boolean,
                    default: !1
                }
            },
            template: '<div class="bottom-input" :class="{\'has-prompt\': isPromptOpen}"\n            :style="{\'background-image\': \'url(\' + bgImg + \')\', \'height\': promptHeight + \'px\'}">\n            <div class="input-prompt" ref="content" v-if="isPromptOpen && choices.length">\n                <div class="input-prompt-head">\n                    <div class="say-something">说点什么……</div>\n                    <a class="close-btn" @click="togglePrompt(false)"></a>\n                </div>\n                <div class="input-prompt-body">\n                    <ul class="choices">\n                        <li v-for="choice in choices">\n                            <a @click="respond(choice)">{{ choice.text }}</a>\n                        </li>\n                    </ul>\n                    \x3c!--div class="next-topic"\n                        v-if="!lastDialog || !lastDialog.responses">\n                        <ul class="topics">\n                            <li v-for="topic in nextTopics">\n                                <a @click="ask(topic)">{{ topic.brief }}</a>\n                            </li>\n                        </ul>\n                    </div--\x3e\n                </div>\n            </div>\n            <div class="input-hint say-something" v-if="!isPromptOpen"\n                @click="togglePrompt(true)"\n                :class="{\'clickable\': !isXianzheTyping }">\n                <span v-if="!isDialogOver && choices.length">说点什么……</span>\n                <span v-if="!isDialogOver && !choices.length">等待羡辙回复……</span>\n                <span v-if="isDialogOver">笨笨下线了，过些时候再来看看吧！</span>\n            </div>\n        </div>',
            data: function() {
                return {
                    bgImg: "",
                    isXianzheTyping: !1,
                    isPromptOpen: !1,
                    promptHeight: 45
                }
            },
            watch: {
                isDialogOver: function(t) {
                    t && (this.isPromptOpen = !1)
                }
            },
            methods: {
                togglePrompt: function(t) {
                    var e = this;
                    !this.choices.length && t || (this.isPromptOpen = t, this.$nextTick(function() {
                        e.resize()
                    }))
                },
                respond: function(t) {
                    var e = this;
                    this.isPromptOpen = !1, _gaq.push(["_trackEvent", "Home", "respond", t]), this.$emit("respond", t), this.$nextTick(function() {
                        e.resize()
                    })
                },
                resize: function() {
                    this.promptHeight = this.$refs.content ? this.$refs.content.clientHeight : 45, this.bgImg = v({
                        width: this.$el.clientWidth,
                        height: this.promptHeight,
                        radius: [0, 0, 2, 2],
                        fillColor: d.bg.lighter,
                        borderSize: [0, 1, 1, 1],
                        borderColor: d.border
                    });
                    var t = D()(".content-above-input");
                    if (t.length) {
                        t.attr("style", "bottom: ".concat(this.promptHeight, "px"));
                        var e = t[0].scrollHeight - t.height() - t.scrollTop(),
                            n = Date.now();
                        requestAnimationFrame(function r() {
                            var i = (Date.now() - n) / 250;
                            t.scrollTop(t.scrollTop() + e * i), i > 0 && requestAnimationFrame(r)
                        })
                    }
                }
            },
            mounted: function() {
                this.resize(), window.addEventListener("resize", this.resize)
            }
        }), r.a.component("fullscreen-img", {
            props: {},
            template: '<div class="fullscreen-img">\n            <div class="fullscreen-mask"></div>\n            <slot></slot>\n            <a class="fullscreen-close" href="javascript:;" @click="close()"></a>\n        </div>',
            data: function() {
                return {}
            },
            methods: {
                close: function() {
                    this.$emit("close")
                }
            },
            mounted: function() {}
        });
        var B = [{
                title: {
                    zh: "旅行",
                    en: "Travel"
                },
                photos: [ "assets/album/travel/travel3.JPG", "assets/album/travel/travel4.JPG", "assets/album/travel/travel1.jpg", "assets/album/travel/travel2.jpg"]
            }, {
                title: {
                    zh: "吃喝",
                    en: "Food"
                },
                photos: ["assets/album/food/drink.jpg", "assets/album/food/drink2.jpg", "assets/album/food/eat.jpg", "assets/album/food/fun.jpg"]
            }, {
                title: {
                    zh: "好友",
                    en: "Friends"
                },
                photos: ["assets/album/friends/seeu1.JPG", "assets/album/friends/seeu2.JPG" ]
            }, {
                title: {
                    zh: "自拍",
                    en: "Selfie"
                },
                photos: ["assets/album/benben/benben.jpg", "assets/album/benben/benben.png", "assets/album/benben/benben3.jpg", "assets/album/benben/cat.jpg", "assets/album/benben/omg.jpg"]
            }],
            W = n(5),
            G = n.n(W);

        function q(t, e, n) {
            "hsv" === n ? (t.hsv(), e.hsv()) : "hsl" === n ? (t.hsl(), e.hsl()) : "rgb" !== n && console.warn("Color space " + n + " is not supported. Use RGB now.");
            const r = t.color,
                i = e.color;
            return (r[0] - i[0]) * (r[0] - i[0]) + (r[1] - i[1]) * (r[1] - i[1]) + (r[2] - i[2]) * (r[2] - i[2])
        }

        function U(t, e) {
            const n = document.createElement("canvas");
            return n.width = t, n.height = e, n
        }

        function H(t, e) {
            for (var n = 0; n < e.length; n++) {
                var r = e[n];
                r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
            }
        }
        var J = new(function() {
                function t() {
                    ! function(t, e) {
                        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                    }(this, t)
                }
                var e, n, r;
                return e = t, (n = [{
                    key: "doSunglass",
                    value: function(t, e, n) {
                        var r = this._resize(t, e, n);
                        Date.now();
                        return function(t, e, n) {
                            e || (e = ["#fff", "#999", "#555", "#222"]), n || (n = "rgb");
                            const r = t.width,
                                i = t.height;
                            if (!r || !i) throw "Image should have width and height.";
                            let a, o;
                            if (t instanceof Image)(o = (a = U(r, i)).getContext("2d")).drawImage(t, 0, 0);
                            else {
                                if (!(t instanceof HTMLCanvasElement)) throw "Image should be instance of Image or HTMLCanvasElement";
                                o = (a = t).getContext("2d")
                            }
                            const s = U(r, i),
                                l = s.getContext("2d"),
                                u = o.getImageData(0, 0, r, i).data,
                                c = l.createImageData(r, i),
                                h = c.data;
                            for (let t = 0, r = u.length; t < r; t += 4) {
                                const r = u[t + 3] / 255,
                                    i = u[t] * r + 0,
                                    a = u[t + 1] * r + 0,
                                    o = u[t + 2] * r + 0;
                                let s = Number.MAX_VALUE,
                                    l = null;
                                for (let t = 0; t < e.length; ++t) {
                                    const r = q(G.a.rgb(i, a, o), G()(e[t]), n);
                                    r < s && (s = r, l = t)
                                }
                                const c = G()(e[l]);
                                h[t] = c.color[0], h[t + 1] = c.color[1], h[t + 2] = c.color[2], h[t + 3] = 255
                            }
                            return l.putImageData(c, 0, 0), s
                        }(r, d.palette).toDataURL()
                    }
                }, {
                    key: "_resize",
                    value: function(t, e, n) {
                        var r = g(e, n);
                        return r.getContext("2d").drawImage(t, 0, 0, e, n), r
                    }
                }, {
                    key: "_getImageCanvas",
                    value: function(t) {
                        return this._resize(t, t.width, t.height)
                    }
                }]) && H(e.prototype, n), r && H(e, r), t
            }()),
            K = (r.a.component("app-album", {
                template: '<div class="app-album mobile-body-content padding" :class="{scroll: !openedImgSrc}">\n            <div class="album-group" v-for="group in photos">\n                <h3>{{ group.title[lang] }}</h3>\n                <div class="album-group-content">\n                    <div class="album-photo" v-for="photo in group.photos">\n                        <a class="album-photo-img pixel-img"\n                            :style="{ \'background-image\': photo.thumbnail ? \'url(\' + photo.thumbnail + \')\' : \'transparent\' }"\n                            @click="openImage(photo)">\n                        </a>\n                    </div>\n                </div>\n            </div>\n            <fullscreen-img :src="openedImgSrc" v-if="openedImgSrc" @close="closeOpenedImg()">\n                <img class="fullscreen-content" :src="openedImgSrc">\n                <canvas v-if="hasThumbnailCanvas" ref="thumbnailCanvas" class="fullscreen-content pixel-img"></canvas>\n            </fullscreen-img>\n        </div>',
                data: function() {
                    return {
                        photos: [],
                        openedImgSrc: null,
                        hasThumbnailCanvas: !1,
                        lang: s()
                    }
                },
                methods: {
                    openImage: function(t) {
                        var e = this;
                        this.openedImgSrc = t.src, this.hasThumbnailCanvas = !0, x.a.setItem("albumScrollTop", $(".app-album").scrollTop()), $(".app-album").scrollTop(0), this.$nextTick(function() {
                            var n = e.$refs.thumbnailCanvas;
                            n.width = t.thumbnailWidth, n.height = t.thumbnailHeight;
                            var r = n.getContext("2d"),
                                i = new Image;
                            i.onload = function() {
                                r.drawImage(i, 0, 0), r.globalCompositeOperation = "destination-out";
                                var t = Date.now(),
                                    a = 0;
                                setTimeout(function() {
                                    ! function i() {
                                        ++a;
                                        for (var o = r.getImageData(0, 0, n.width, n.height), s = o.data, l = n.width * n.height / 1e3 * a, u = 0; u < l; ++u) s[4 * Math.floor(Math.random() * n.width * n.height) + 3] = 0;
                                        r.putImageData(o, 0, 0), Date.now() - t < 1e3 ? requestAnimationFrame(i) : e.hasThumbnailCanvas = !1
                                    }()
                                }, 300)
                            }, i.src = t.thumbnail
                        })
                    },
                    closeOpenedImg: function() {
                        this.openedImgSrc = null;
                        var t = x.a.getItem("albumScrollTop");
                        t = t ? parseInt(t) : 0, $(".app-album").scrollTop(t)
                    }
                },
                mounted: function() {
                    this.photos = B.map(function(t) {
                        var e = Object.assign({}, t);
                        return e.photos = e.photos.map(function(t) {
                            return {
                                src: "dist/" + t,
                                thumbnail: null
                            }
                        }), e.photos.forEach(function(t) {
                            var e = new Image;
                            e.onload = function() {
                                var n = e.width,
                                    r = e.height;
                                n > r ? (n *= 32 / r, r = 32) : (r *= 32 / n, n = 32), t.thumbnailWidth = n, t.thumbnailHeight = r, t.thumbnail = J.doSunglass(e, n, r)
                            }, e.src = t.src
                        }), e
                    })
                }
            }), r.a.component("app-wechat", {
                template: '<div>\n            <div class="app-wechat mobile-body-content scroll">\n                <ink-msg-container ink-file-name="wechat"></ink-msg-container>\n            </div>\n        </div>',
                data: function() {
                    return {}
                },
                methods: {},
                created: function() {}
            }), r.a.component("app-zhifubao", {
                template: '<div class="app-gooday mobile-body-content padding scroll">\n            <div class="zhifubao-container">\n                <div class="zhifubao-note">\n                    <div>如果你觉得我的网站对你有帮助或启发</div>\n                    <div>可以送我一本想读的书哦！</div>\n                </div>\n                <img class="zhifubao-img" src="'.concat("dist/", 'assets/pay-zhifubao.png">\n                <div class="zhifubao-note">或支付宝转账至 me@zhangwenli.com</div>\n            </div>\n            <div class="zhifubao-about">\n                送羡辙任意一本书，即可在下一个圣诞节的时候，收到一张羡辙自制的圣诞明信片。Email 邮寄地址、邮编、收件人至 <a href="mailto:me@zhangwenli.com">me@zhangwenli.com</a> 领取。\n            </div>\n        </div>'),
                data: function() {
                    return {}
                },
                methods: {}
            }), r.a.component("app-comment", {
                template: '<div class="app-comment mobile-body-content padding scroll">\n            <div id="disqus_thread"></div>\n            <div class="dsq-brlink">留言可能需要科学的上网方式，如果无法访问，欢迎<a href="mailto:zhangwenli.com">给我发邮件</a>，或在 <a href="https://github.com/Ovilia/ovilia.github.io/issues/10">GitHub issue</a> 中反馈意见。</div>\n        </div>',
                data: function() {
                    return {}
                },
                mounted: function() {
                    var t = document.createElement("script");
                    t.type = "text/javascript", t.async = !0, t.src = "//wenli.disqus.com/embed.js", (document.getElementsByTagName("head")[0] || document.getElementsByTagName("body")[0]).appendChild(t)
                },
                methods: {}
            }), [{
                id: 0,
                groups: [{
                    title: {
                        zh: "App 作品",
                        en: "Apps"
                    },
                    apps: ["birthday2020"]
                },
                    //     {
                    //     title: {
                    //         zh: "网页作品",
                    //         en: "Websites"
                    //     },
                    //     apps: ["wedding", "lipstick", "polyvia", "moonight"]
                    // }, {
                    //     title: {
                    //         zh: "ECharts 相关",
                    //         en: "ECharts"
                    //     },
                    //     apps: ["ecsunburst", "ecliquidfill", "ectheme", "ecbot"]
                    // }
                ]
            }, {
                id: 1,
                groups: [{
                    title: {
                        zh: "社交网络账号",
                        en: "Social Networks"
                    },
                    apps: ["github", "dribbble", "weibo", "douban", "zhihu", "bilibili"]
                }, {
                    title: {
                        zh: "旧版个人网站",
                        en: "Old Versions"
                    },
                    apps: ["2014", "2015", "2016", "2017"]
                }]
            }, {
                id: 2,
                groups: [{
                    title: {
                        zh: "其他",
                        en: "Others"
                    },
                    apps: ["blog", "email", "comment"]
                }]
            }]);
        var Z = .3,
            X = function t() {
                ! function(t, e) {
                    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                }(this, t), this.data = {
                    lang: s(),
                    inApp: !1,
                    statusTheme: "default",
                    lastAppOpenPosition: [0, 0],
                    openedAppId: null,
                    pages: K,
                    appDefaultBgImg: "",
                    appLightBgImg: "",
                    outAppBottomImg: ""
                }, this.vm = new r.a({
                    el: "#content",
                    data: this.data,
                    computed: {
                        appBgImg: function() {
                            return this.appDefaultBgImg
                        }
                    },
                    methods: {
                        openApp: function(t, e) {
                            var n = this;
                            this.inApp = !0, this.openedAppId = t, this.$nextTick(function() {
                                var r = document.getElementById("mobile"),
                                    i = r.offsetLeft,
                                    a = r.offsetTop;
                                n.statusTheme = h[t].appStatusTheme || "dark";
                                var o = e.clientX - i,
                                    s = e.clientY - a;
                                Y(o, s, "0", "0", "0", "0", "0", "100%", "100%", "1"), n.lastAppOpenPosition = [o, s]
                            })
                        },
                        exitApp: function() {
                            var t = this;
                            Y("0", "0", "100%", "100%", "1", this.lastAppOpenPosition[0] + "px", this.lastAppOpenPosition[1] + "px", "0", "0", "0"), setTimeout(function() {
                                t.inApp = !1, t.statusTheme = "default", t.openedAppId = null
                            }, 1e3 * Z)
                        },
                        changeLang: function() {
                            ! function(t) {
                                a.a.set(o, t), location.href = location.href
                            }("en" === this.lang ? "zh" : "en")
                        },
                        resize: function() {
                            var t = document.getElementById("mobile");
                            this.appLightBgImg = v({
                                width: t.clientWidth,
                                height: t.clientHeight,
                                radius: 3,
                                fillColor: d.bg.light,
                                borderColor: d.border
                            }), this.appDefaultBgImg = v({
                                width: t.clientWidth,
                                height: t.clientHeight,
                                radius: 3,
                                fillColor: d.bg.light,
                                borderColor: d.border
                            });
                            var e = document.getElementById("mobile-out-app-bottom");
                            this.outAppBottomImg = v({
                                width: e.clientWidth,
                                height: e.clientHeight,
                                radius: [0, 0, 2, 2],
                                fillColor: d.appGroup,
                                margin: [0, 1, 1, 1]
                            })
                        }
                    },
                    created: function() {
                        var t = this;
                        this.$root.$on("open-app", function(e, n) {
                            t.openApp(e, n)
                        })
                    },
                    mounted: function() {
                        this.resize(), window.addEventListener("resize", this.resize)
                    }
                })
            };

        function Y(t, e, n, r, i, a, o, s, l, u) {
            var c = document.getElementsByClassName("mobile-in-app")[0];
            c.style["transition-duration"] = "0", c.style.left = t + "px", c.style.top = e + "px", c.style.width = n, c.style.height = r, c.style.opacity = i, setTimeout(function() {
                c.style["transition-duration"] = Z + "s", c.style.left = a, c.style.top = o, c.style.width = s, c.style.height = l, c.style.opacity = u
            })
        }

        function Q() {
            var t = document.getElementById("mobile");
            if (window.innerWidth < 480) return t.style.width = "100%", t.style.height = "100%", t.style.marginLeft = "-50%", t.style.marginTop = "0", void(t.style.top = "0");
            var e = window.innerWidth - 30,
                n = window.innerHeight - 30;
            e / n > 750 / 1334 ? e = Math.round(n * (750 / 1334)) : n = Math.round(e / (750 / 1334)), t.style.width = e + "px", t.style.height = n + "px", t.style.marginLeft = "-" + e / 2 + "px", t.style.marginTop = "-" + n / 2 + "px", t.style.top = "50%"
        }
        Q(), window.addEventListener("resize", Q), new X
    }
]);