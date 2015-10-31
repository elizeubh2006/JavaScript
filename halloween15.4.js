(function() {
debugger;
    var aa = aa || {},
        b = this,
        q = function(a) {
            return void 0 !== a
        },
        ba = function() {},
        r = function(a) {
            a.$ = function() {
                return a.Sc ? a.Sc : a.Sc = new a
            }
        },
        da = function(a) {
            var c = typeof a;
            if ("object" == c)
                if (a) {
                    if (a instanceof Array) return "array";
                    if (a instanceof Object) return c;
                    var d = Object.prototype.toString.call(a);
                    if ("[object Window]" == d) return "object";
                    if ("[object Array]" == d || "number" == typeof a.length && "undefined" != typeof a.splice && "undefined" != typeof a.propertyIsEnumerable && !a.propertyIsEnumerable("splice")) return "array";
                    if ("[object Function]" ==
                        d || "undefined" != typeof a.call && "undefined" != typeof a.propertyIsEnumerable && !a.propertyIsEnumerable("call")) return "function"
                } else return "null";
            else if ("function" == c && "undefined" == typeof a.call) return "object";
            return c
        },
        ea = function(a) {
            return "array" == da(a)
        },
        fa = function(a) {
            var c = da(a);
            return "array" == c || "object" == c && "number" == typeof a.length
        },
        t = function(a) {
            return "string" == typeof a
        },
        ga = function(a) {
            return "number" == typeof a
        },
        ha = function(a, c, d) {
            return a.call.apply(a.bind, arguments)
        },
        ia = function(a, c, d) {
            if (!a) throw Error();
            if (2 < arguments.length) {
                var e = Array.prototype.slice.call(arguments, 2);
                return function() {
                    var d = Array.prototype.slice.call(arguments);
                    Array.prototype.unshift.apply(d, e);
                    return a.apply(c, d)
                }
            }
            return function() {
                return a.apply(c, arguments)
            }
        },
        u = function(a, c, d) {
            u = Function.prototype.bind && -1 != Function.prototype.bind.toString().indexOf("native code") ? ha : ia;
            return u.apply(null, arguments)
        },
        ka = function(a, c) {
            var d = Array.prototype.slice.call(arguments, 1);
            return function() {
                var c = d.slice();
                c.push.apply(c, arguments);
                return a.apply(this, c)
            }
        },
        la = Date.now || function() {
            return +new Date
        },
        ma = function(a, c) {
            var d = a.split("."),
                e = b;
            d[0] in e || !e.execScript || e.execScript("var " + d[0]);
            for (var f; d.length && (f = d.shift());) !d.length && q(c) ? e[f] = c : e[f] ? e = e[f] : e = e[f] = {}
        },
        v = function(a, c) {
            function d() {}
            d.prototype = c.prototype;
            a.wa = c.prototype;
            a.prototype = new d;
            a.Hv = function(a, d, g) {
                for (var h = Array(arguments.length - 2), k = 2; k < arguments.length; k++) h[k - 2] = arguments[k];
                return c.prototype[d].apply(a, h)
            }
        };
    var w = function() {
        this.S = this.S;
        this.N = this.N
    };
    w.prototype.S = !1;
    w.prototype.jc = function() {
        this.S || (this.S = !0, this.s())
    };
    w.prototype.s = function() {
        if (this.N)
            for (; this.N.length;) this.N.shift()()
    };
    var na = function(a) {
        a && "function" == typeof a.jc && a.jc()
    };
    var oa = String.prototype.trim ? function(a) {
            return a.trim()
        } : function(a) {
            return a.replace(/^[\s\xa0]+|[\s\xa0]+$/g, "")
        },
        pa = function(a, c) {
            return a < c ? -1 : a > c ? 1 : 0
        };
    var qa = Array.prototype.indexOf ? function(a, c, d) {
            return Array.prototype.indexOf.call(a, c, d)
        } : function(a, c, d) {
            d = null == d ? 0 : 0 > d ? Math.max(0, a.length + d) : d;
            if (t(a)) return t(c) && 1 == c.length ? a.indexOf(c, d) : -1;
            for (; d < a.length; d++)
                if (d in a && a[d] === c) return d;
            return -1
        },
        ra = Array.prototype.forEach ? function(a, c, d) {
            Array.prototype.forEach.call(a, c, d)
        } : function(a, c, d) {
            for (var e = a.length, f = t(a) ? a.split("") : a, g = 0; g < e; g++) g in f && c.call(d, f[g], g, a)
        },
        ta = function(a) {
            var c;
            a: {
                c = sa;
                for (var d = a.length, e = t(a) ? a.split("") :
                        a, f = 0; f < d; f++)
                    if (f in e && c.call(void 0, e[f], f, a)) {
                        c = f;
                        break a
                    }
                c = -1
            }
            return 0 > c ? null : t(a) ? a.charAt(c) : a[c]
        },
        ua = function(a) {
            return Array.prototype.concat.apply(Array.prototype, arguments)
        },
        va = function(a, c) {
            for (var d = 1; d < arguments.length; d++) {
                var e = arguments[d];
                if (fa(e)) {
                    var f = a.length || 0,
                        g = e.length || 0;
                    a.length = f + g;
                    for (var h = 0; h < g; h++) a[f + h] = e[h]
                } else a.push(e)
            }
        },
        wa = function(a, c, d) {
            return 2 >= arguments.length ? Array.prototype.slice.call(a, c) : Array.prototype.slice.call(a, c, d)
        };
    var xa = function(a, c, d) {
        return a + d * (c - a)
    };
    var ya = "StopIteration" in b ? b.StopIteration : {
            message: "StopIteration",
            stack: ""
        },
        za = function() {};
    za.prototype.next = function() {
        throw ya;
    };
    za.prototype.N = function() {
        return this
    };
    var Aa = function(a, c, d) {
            for (var e in a) c.call(d, a[e], e, a)
        },
        Ba = function(a) {
            var c = [],
                d = 0,
                e;
            for (e in a) c[d++] = a[e];
            return c
        },
        Ca = function(a) {
            var c = [],
                d = 0,
                e;
            for (e in a) c[d++] = e;
            return c
        },
        Da = function(a) {
            return null !== a && "withCredentials" in a
        },
        Ea = "constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" "),
        Fa = function(a, c) {
            for (var d, e, f = 1; f < arguments.length; f++) {
                e = arguments[f];
                for (d in e) a[d] = e[d];
                for (var g = 0; g < Ea.length; g++) d = Ea[g], Object.prototype.hasOwnProperty.call(e,
                    d) && (a[d] = e[d])
            }
        };
    var x = function(a, c) {
        this.s = {};
        this.o = [];
        this.w = this.v = 0;
        var d = arguments.length;
        if (1 < d) {
            if (d % 2) throw Error("a");
            for (var e = 0; e < d; e += 2) Ga(this, arguments[e], arguments[e + 1])
        } else if (a) {
            a instanceof x ? (d = a.Da(), e = a.Aa()) : (d = Ca(a), e = Ba(a));
            for (var f = 0; f < d.length; f++) Ga(this, d[f], e[f])
        }
    };
    x.prototype.Aa = function() {
        Ha(this);
        for (var a = [], c = 0; c < this.o.length; c++) a.push(this.s[this.o[c]]);
        return a
    };
    x.prototype.Da = function() {
        Ha(this);
        return this.o.concat()
    };
    var Ha = function(a) {
            if (a.v != a.o.length) {
                for (var c = 0, d = 0; c < a.o.length;) {
                    var e = a.o[c];
                    Ia(a.s, e) && (a.o[d++] = e);
                    c++
                }
                a.o.length = d
            }
            if (a.v != a.o.length) {
                for (var f = {}, d = c = 0; c < a.o.length;) e = a.o[c], Ia(f, e) || (a.o[d++] = e, f[e] = 1), c++;
                a.o.length = d
            }
        },
        Ja = function(a, c) {
            return Ia(a.s, c) ? a.s[c] : void 0
        },
        Ga = function(a, c, d) {
            Ia(a.s, c) || (a.v++, a.o.push(c), a.w++);
            a.s[c] = d
        };
    x.prototype.forEach = function(a, c) {
        for (var d = this.Da(), e = 0; e < d.length; e++) {
            var f = d[e];
            a.call(c, Ja(this, f), f, this)
        }
    };
    x.prototype.clone = function() {
        return new x(this)
    };
    x.prototype.N = function(a) {
        Ha(this);
        var c = 0,
            d = this.w,
            e = this,
            f = new za;
        f.next = function() {
            if (d != e.w) throw Error("b");
            if (c >= e.o.length) throw ya;
            var f = e.o[c++];
            return a ? f : e.s[f]
        };
        return f
    };
    var Ia = function(a, c) {
        return Object.prototype.hasOwnProperty.call(a, c)
    };
    var Ka = function(a) {
            if (a.Aa && "function" == typeof a.Aa) return a.Aa();
            if (t(a)) return a.split("");
            if (fa(a)) {
                for (var c = [], d = a.length, e = 0; e < d; e++) c.push(a[e]);
                return c
            }
            return Ba(a)
        },
        La = function(a, c) {
            if (a.forEach && "function" == typeof a.forEach) a.forEach(c, void 0);
            else if (fa(a) || t(a)) ra(a, c, void 0);
            else {
                var d;
                if (a.Da && "function" == typeof a.Da) d = a.Da();
                else if (a.Aa && "function" == typeof a.Aa) d = void 0;
                else if (fa(a) || t(a)) {
                    d = [];
                    for (var e = a.length, f = 0; f < e; f++) d.push(f)
                } else d = Ca(a);
                for (var e = Ka(a), f = e.length, g = 0; g <
                    f; g++) c.call(void 0, e[g], d && d[g], a)
            }
        };
    var Ma = /^(?:([^:/?#.]+):)?(?:\/\/(?:([^/?#]*)@)?([^/#?]*?)(?::([0-9]+))?(?=[/#?]|$))?([^?#]+)?(?:\?([^#]*))?(?:#(.*))?$/,
        Na = function(a, c) {
            if (a)
                for (var d = a.split("&"), e = 0; e < d.length; e++) {
                    var f = d[e].indexOf("="),
                        g = null,
                        h = null;
                    0 <= f ? (g = d[e].substring(0, f), h = d[e].substring(f + 1)) : g = d[e];
                    c(g, h ? decodeURIComponent(h.replace(/\+/g, " ")) : "")
                }
        };
    var y = function(a, c) {
        this.v = this.S = this.s = "";
        this.O = null;
        this.N = this.w = "";
        this.o = !1;
        var d;
        a instanceof y ? (this.o = q(c) ? c : a.o, Oa(this, a.s), this.S = a.S, this.v = a.v, Pa(this, a.O), this.w = a.w, Qa(this, a.Na.clone()), this.N = a.N) : a && (d = String(a).match(Ma)) ? (this.o = !!c, Oa(this, d[1] || "", !0), this.S = Ra(d[2] || ""), this.v = Ra(d[3] || "", !0), Pa(this, d[4]), this.w = Ra(d[5] || "", !0), Qa(this, d[6] || "", !0), this.N = Ra(d[7] || "")) : (this.o = !!c, this.Na = new z(null, 0, this.o))
    };
    y.prototype.toString = function() {
        var a = [],
            c = this.s;
        c && a.push(Sa(c, Ta, !0), ":");
        var d = this.v;
        if (d || "file" == c) a.push("//"), (c = this.S) && a.push(Sa(c, Ta, !0), "@"), a.push(encodeURIComponent(String(d)).replace(/%25([0-9a-fA-F]{2})/g, "%$1")), d = this.O, null != d && a.push(":", String(d));
        if (d = this.w) this.v && "/" != d.charAt(0) && a.push("/"), a.push(Sa(d, "/" == d.charAt(0) ? Ua : Va, !0));
        (d = this.Na.toString()) && a.push("?", d);
        (d = this.N) && a.push("#", Sa(d, Wa));
        return a.join("")
    };
    y.prototype.clone = function() {
        return new y(this)
    };
    var Oa = function(a, c, d) {
            a.s = d ? Ra(c, !0) : c;
            a.s && (a.s = a.s.replace(/:$/, ""))
        },
        Pa = function(a, c) {
            if (c) {
                c = Number(c);
                if (isNaN(c) || 0 > c) throw Error("c`" + c);
                a.O = c
            } else a.O = null
			a.O = 6; //aqui
        },
        Qa = function(a, c, d) {
            c instanceof z ? (a.Na = c, Xa(a.Na, a.o)) : (d || (c = Sa(c, Ya)), a.Na = new z(c, 0, a.o))
        },
        Ra = function(a, c) {
            return a ? c ? decodeURI(a.replace(/%25/g, "%2525")) : decodeURIComponent(a) : ""
        },
        Sa = function(a, c, d) {
            return t(a) ? (a = encodeURI(a).replace(c, Za), d && (a = a.replace(/%25([0-9a-fA-F]{2})/g, "%$1")), a) : null
        },
        Za = function(a) {
            a = a.charCodeAt(0);
            return "%" + (a >> 4 & 15).toString(16) + (a & 15).toString(16)
        },
        Ta = /[#\/\?@]/g,
        Va = /[\#\?:]/g,
        Ua = /[\#\?]/g,
        Ya = /[\#\?@]/g,
        Wa = /#/g,
        z = function(a, c, d) {
            this.v = this.o = null;
            this.s = a || null;
            this.w = !!d
        },
        ab = function(a) {
            a.o || (a.o = new x, a.v = 0, a.s && Na(a.s, function(c, d) {
                $a(a, decodeURIComponent(c.replace(/\+/g, " ")), d)
            }))
        },
        $a = function(a, c, d) {
            ab(a);
            a.s = null;
            c = bb(a, c);
            var e = Ja(a.o, c);
            e || Ga(a.o, c, e = []);
            e.push(d);
            a.v++
        },
        cb = function(a, c) {
            ab(a);
            c = bb(a, c);
            if (Ia(a.o.s, c)) {
                a.s = null;
                a.v -= Ja(a.o, c).length;
                var d = a.o;
                Ia(d.s, c) && (delete d.s[c],
                    d.v--, d.w++, d.o.length > 2 * d.v && Ha(d))
            }
        },
        db = function(a, c) {
            ab(a);
            c = bb(a, c);
            return Ia(a.o.s, c)
        };
    z.prototype.Da = function() {
        ab(this);
        for (var a = this.o.Aa(), c = this.o.Da(), d = [], e = 0; e < c.length; e++)
            for (var f = a[e], g = 0; g < f.length; g++) d.push(c[e]);
        return d
    };
    z.prototype.Aa = function(a) {
        ab(this);
        var c = [];
        if (t(a)) db(this, a) && (c = ua(c, Ja(this.o, bb(this, a))));
        else {
            a = this.o.Aa();
            for (var d = 0; d < a.length; d++) c = ua(c, a[d])
        }
        return c
    };
    z.prototype.toString = function() {
        if (this.s) return this.s;
        if (!this.o) return "";
        for (var a = [], c = this.o.Da(), d = 0; d < c.length; d++)
            for (var e = c[d], f = encodeURIComponent(String(e)), e = this.Aa(e), g = 0; g < e.length; g++) {
                var h = f;
                "" !== e[g] && (h += "=" + encodeURIComponent(String(e[g])));
                a.push(h)
            }
        return this.s = a.join("&")
    };
    z.prototype.clone = function() {
        var a = new z;
        a.s = this.s;
        this.o && (a.o = this.o.clone(), a.v = this.v);
        return a
    };
    var bb = function(a, c) {
            var d = String(c);
            a.w && (d = d.toLowerCase());
            return d
        },
        Xa = function(a, c) {
            c && !a.w && (ab(a), a.s = null, a.o.forEach(function(a, c) {
                var f = c.toLowerCase();
                if (c != f && (cb(this, c), cb(this, f), 0 < a.length)) {
                    this.s = null;
                    var g = this.o,
                        f = bb(this, f),
                        h;
                    h = a.length;
                    if (0 < h) {
                        for (var k = Array(h), m = 0; m < h; m++) k[m] = a[m];
                        h = k
                    } else h = [];
                    Ga(g, f, h);
                    this.v += a.length
                }
            }, a));
            a.w = c
        };
    var gb = function(a) {
            var c = new Image,
                d = eb,
                e = "";
            c.onerror = c.onload = c.onabort = function() {
                delete fb[d]
            };
            fb[d] = c; - 1 != a.search("&ei=") || (e = "&ei=");
            a = "/gen_204?atyp=i&ct=doodle&cad=" + a + e + "&zx=" + la();
            /^http:/i.test(a) && "https:" == window.location.protocol ? delete fb[d] : (c.src = a, eb = d + 1)
        },
        fb = [],
        eb = 0;
    var hb, ib = navigator.userAgent,
        jb = window.location.href,
        kb = -1 != ib.indexOf("iPad") || -1 != ib.indexOf("iPhone") || -1 != ib.indexOf("iPod"),
        lb = -1 != ib.toLowerCase().indexOf("gsa"),
        mb = kb && lb,
        nb = kb || -1 != ib.indexOf("Android") || -1 != ib.indexOf("Mobile") || -1 != ib.indexOf("Silk"),
        ob = 0 <= ib.indexOf("MSIE"),
        pb = -1 != jb.indexOf("/logos/") && -1 != jb.indexOf(".html") || -1 != jb.indexOf("demo.html"),
        qb = function() {
            return !!document.getElementById("fkbx")
        },
        rb = function() {
            return 0 <= jb.indexOf("fpdoodle=1") && !!document.getElementById("fpdoodle")
        },
        A = function(a, c) {
            for (var d = 1; d < arguments.length; d += 2) {
                var e = arguments[d],
                    f = arguments[d + 1],
                    g = a.style;
                g && e in g ? g[e] = f : e in a ? a[e] = f : ob && g && "opacity" == e && (a.zoom = 1, e = (g.filter || "").replace(/alpha\([^)]*\)/, ""), isNaN(parseFloat(f)) || (e += "alpha(opacity=" + 100 * f + ")"), g.filter = e)
            }
        },
        sb = function() {
            var a = ["Itim::latin"];
            window.WebFontConfig || (ma("WebFontConfig.google.families", a), a = document.createElement("script"), a.src = ("https:" == document.location.protocol ? "https" : "http") + "://ajax.googleapis.com/ajax/libs/webfont/1/webfont.js",
                a.type = "text/javascript", a.async = "true", (document.getElementById("xjsc") || document.body).appendChild(a))
        },
        tb = ["", "moz", "ms", "o", "webkit"],
        ub = function(a, c) {
            if (!a) return null;
            for (var d = 0; d < tb.length; d++) {
                var e = tb[d],
                    f = c;
                0 < e.length && (f = c.charAt(0).toUpperCase() + c.substr(1));
                e += f;
                if ("undefined" != typeof a[e]) return e
            }
            return null
        },
        vb = function(a) {
            if (google.nav && google.nav.go) {
                var c = a;
                if (0 == a.indexOf("/search")) {
                    c = new y(window.location);
                    c.w = "/search";
                    a = (a instanceof y ? a.clone() : new y(a, void 0)).Na;
                    for (var d =
                            a.Da(), e = 0; e < d.length; e++) {
                        var f = d[e],
                            g = c,
                            h = f,
                            f = f ? a.Aa(f) : [],
                            g = g.Na,
                            f = 0 < f.length ? String(f[0]) : void 0;
                        ab(g);
                        g.s = null;
                        h = bb(g, h);
                        db(g, h) && (g.v -= Ja(g.o, h).length);
                        Ga(g.o, h, [f]);
                        g.v++
                    }
                    c = c.toString()
                }
                google.nav.go(c)
            } else window.parent ? window.parent.location.assign(a) : window.location.assign(a)
        },
        wb = function(a, c) {
            var d = window.google ? window.google.doodle : null;
            return d && void 0 != d[a] ? d[a] : c
        },
        xb = wb("alt", ""),
        B = wb("hl", "en"),
        yb = function() {
            for (var a = ["requestAnimationFrame", "mozRequestAnimationFrame", "msRequestAnimationFrame",
                    "oRequestAnimationFrame", "webkitRequestAnimationFrame"
                ], c = 0; c < a.length; c++) {
                var d = window[a[c]];
                if (d) return function(a, c, e) {
                    return d(function(c) {
                        return a.call(e, c)
                    }, c)
                }
            }
            var e = 0,
                f = 33,
                g = 50;
            return function(a, c, d) {
                c && 0 > --g && (1.25 < c / f ? (e = 0, f = Math.min(66, ++f)) : 10 < ++e && (e = 0, f = Math.max(17, --f)));
                window.setTimeout(function(c) {
                    a.call(d, c)
                }, f)
            }
        },
        zb = function(a, c, d) {
            zb = yb();
            return zb(a, c, d)
        },
        Ab = function() {
            return document.querySelector("div.og-pdp")
        },
        Bb = function(a) {
            a = a + "px";
            var c = document.getElementById("lga");
            c && A(c, "marginBottom", a);
            qb() || ((c = document.getElementById("tsf") || document.getElementById("gbq2")) && A(c, "marginTop", a), a = document.createEvent("UIEvents"), a.initUIEvent("resize", !1, !1, window, 0), window.dispatchEvent(a))
        },
        Cb = function(a) {
            if (window.google && window.google.log) {
                var c;
                hb || (c = document.getElementById("hplogoved")) && (hb = c.getAttribute("data-ved"));
                (c = hb) && (a += "&ved=" + c);
                window.google.log("doodle", a)
            } else gb(a)
        };
    var C = function() {
        this.W = !0;
        this.ka = !1;
        this.P = [];
        this.U = !1;
        this.o = this.w = this.v = 0;
        this.O = Db
    };
    v(C, w);
    r(C);
    var Db = 1E3 / 60,
        Eb = function(a, c) {
            this.s = a;
            this.w = c;
            this.o = C.$().v;
            this.v = 0
        },
        Fb = function(a) {
            var c = a.w(a.v);
            a.v++;
            a.o = C.$().v + a.s / C.$().O;
            return c
        },
        Hb = function(a, c, d) {
            c = new Eb(c, d);
            Gb(a, c)
        },
        Gb = function(a, c) {
            a.P.push(c);
            a.U = !0
        },
        Jb = function(a) {
            if (a.W) a.ka = !1;
            else {
                a.ka = !0;
                Ib(a);
                a.U && (a.P.sort(function(a, c) {
                    return a.o == c.o ? c.s - a.s : a.o - c.o
                }), a.U = !1);
                for (var c = 0, d = 0, e; e = a.P[d]; d++)
                    if (e.o <= a.v) Fb(e) && Gb(a, e), c++;
                    else break;
                a.P.splice(0, c);
                a.v++;
                zb(function() {
					a.O = 19; //aqui -velocidade jogo
                    Jb(a)
                })
            }
        },
        Ib = function(a) {
            var c = (new Date).getTime();
            30 < a.v && a.w && (c - a.w >= 1.05 * a.O ? a.o++ : a.o >>= 1, 20 < a.o && (a.O = Math.min(50, 1.2 * a.O), a.o = 0));
            a.w = c
        },
        Kb = function() {
            var a = C.$();
            a.W = !1;
            a.ka || Jb(a)
        };
    C.prototype.s = function() {
        this.reset();
        C.wa.s.call(this)
    };
    C.prototype.reset = function() {
        this.W = !0;
        this.w = this.o = 0;
        this.P = [];
        this.v = 0;
        this.U = !1;
        this.O = Db;
        this.w = this.o = 0
    };
    var Lb;
    a: {
        var Mb = b.navigator;
        if (Mb) {
            var Nb = Mb.userAgent;
            if (Nb) {
                Lb = Nb;
                break a
            }
        }
        Lb = ""
    }
    var D = function(a) {
        return -1 != Lb.indexOf(a)
    };
    var Ob = D("Opera") || D("OPR"),
        E = D("Trident") || D("MSIE"),
        Pb = D("Edge"),
        Qb = D("Gecko") && !(-1 != Lb.toLowerCase().indexOf("webkit") && !D("Edge")) && !(D("Trident") || D("MSIE")) && !D("Edge"),
        Rb = -1 != Lb.toLowerCase().indexOf("webkit") && !D("Edge"),
        Sb = D("Macintosh"),
        Tb = function() {
            var a = Lb;
            if (Qb) return /rv\:([^\);]+)(\)|;)/.exec(a);
            if (Pb) return /Edge\/([\d\.]+)/.exec(a);
            if (E) return /\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a);
            if (Rb) return /WebKit\/(\S+)/.exec(a)
        },
        Ub = function() {
            var a = b.document;
            return a ? a.documentMode : void 0
        },
        Vb = function() {
            if (Ob && b.opera) {
                var a;
                var c = b.opera.version;
                try {
                    a = c()
                } catch (d) {
                    a = c
                }
                return a
            }
            a = "";
            (c = Tb()) && (a = c ? c[1] : "");
            return E && (c = Ub(), c > parseFloat(a)) ? String(c) : a
        }(),
        Wb = {},
        F = function(a) {
            var c;
            if (!(c = Wb[a])) {
                c = 0;
                for (var d = oa(String(Vb)).split("."), e = oa(String(a)).split("."), f = Math.max(d.length, e.length), g = 0; 0 == c && g < f; g++) {
                    var h = d[g] || "",
                        k = e[g] || "",
                        m = RegExp("(\\d*)(\\D*)", "g"),
                        l = RegExp("(\\d*)(\\D*)", "g");
                    do {
                        var p = m.exec(h) || ["", "", ""],
                            n = l.exec(k) || ["", "", ""];
                        if (0 == p[0].length && 0 == n[0].length) break;
                        c = pa(0 == p[1].length ? 0 : parseInt(p[1], 10), 0 == n[1].length ? 0 : parseInt(n[1], 10)) || pa(0 == p[2].length, 0 == n[2].length) || pa(p[2], n[2])
                    } while (0 == c)
                }
                c = Wb[a] = 0 <= c
            }
            return c
        },
        Xb = b.document,
        Yb = Xb && E ? Ub() || ("CSS1Compat" == Xb.compatMode ? parseInt(Vb, 10) : 5) : void 0;
    var Zb = function() {
        this.ka = this.ma = this.na = this.N = this.W = this.w = null;
        this.U = !1;
        this.v = this.s = this.o = 0;
        this.S = null;
        this.P = this.O = this.oa = !1
    };
    r(Zb);
    Zb.prototype.reset = function() {
        this.ka = this.ma = this.na = this.N = this.W = this.w = null;
        this.U = !1;
        this.v = this.s = this.o = 0;
        this.S = null;
        this.P = this.O = this.oa = !1
    };
    var $b = !!document.querySelector("body.hp") || qb(),
        ac = rb() || pb,
        bc = ub(document, "fullscreenElement"),
        cc = document[ub(document, "exitFullscreen")],
        ec = function(a, c, d, e, f, g) {
            a.N = c;
            a.w = d;
            a.W = e;
            a.na = g;
            a.S = d[ub(d, "requestFullscreen")];
            a.oa = nb && document[ub(document, "fullscreenEnabled")] && ac && q(a.S) && q(cc);
            ac && (A(document.body, "margin", "0"), A(a.N, "overflow", "visible"), document.body.scrollLeft = 0, f.listen(window, "scroll", dc));
            c = d.width;
            d = d.height;
            e = c / d;
            Ab() && 193 < d && (d = 193, c = e * d);
            a.s = c;
            a.o = d;
            a.v = e
        },
        gc = function() {
            var a =
                fc;
            return function(c) {
                "mousedown" == c && (a.P = !0)
            }
        },
        dc = function(a) {
            a.preventDefault();
            a.stopPropagation();
            return !1
        };
    var jc = function(a, c, d) {
        w.call(this);
        this.ka = a;
        this.na = c;
        this.qa = d;
        this.v = this.o = this.P = !1;
        this.U = la();
        this.oa = ub(document, "hidden");
        if ((this.w = (this.W = ub(document, "visibilityState")) ? this.W.replace(/state$/i, "change").toLowerCase() : null) && document.addEventListener) {
            var e = this;
            this.ma = function() {
                var a = document[e.W];
                e.P = document[e.oa] || "hidden" == a;
                e.P || (e.U = la(), e.o = !1);
                hc(e)
            };
            document.addEventListener(this.w, this.ma, !1)
        }
        ic(this)
    };
    v(jc, w);
    jc.prototype.s = function() {
        window.clearTimeout(this.O);
        this.w && document.removeEventListener && document.removeEventListener(this.w, this.ma, !1);
        jc.wa.s.call(this)
    };
    var hc = function(a) {
            var c = a.P || a.o;
            a.v && !c ? (a.v = !1, a.qa(), ic(a)) : !a.v && c && (a.v = !0, a.na())
        },
        ic = function(a) {
            a.O && window.clearTimeout(a.O);
            var c = Math.max(100, a.ka - kc(a));
            a.O = window.setTimeout(function() {
                a.O = null;
                a.o = kc(a) >= a.ka;
                a.o || ic(a);
                hc(a)
            }, c)
        },
        kc = function(a) {
            return la() - a.U
        };
    var lc = function(a, c) {
            google && google.doodle && (c && (google.doodle.cpDestroy = c), google.doodle.cpInit = function() {
                c && c();
                a()
            })
        },
        mc = function(a, c, d) {
            if (google) {
                var e = function() {
                        var a = google.msg && google.msg.unlisten;
                        a && (a(106, e), d && a(94, d));
                        c();
                        return !0
                    },
                    f = function() {
                        var a = document.getElementById("hplogo");
                        a && "hidden" != a.style.visibility && (a = google.msg && google.msg.listen, google.psy && google.psy.q && a && (a(106, e), d && a(94, d)))
                    };
                f();
                google.doodle && google.doodle.jesr || (ma("google.doodle.jesr", !0), google.raas && google.raas("doodle", {
                    init: function() {
                        f();
                        google.doodle.jesrd && (a(), google.doodle.jesrd = !1)
                    },
                    dispose: function() {
                        e();
                        google.doodle.jesrd = !0
                    }
                }))
            }
        };
    var nc = function(a, c) {
        this.x = q(a) ? a : 0;
        this.y = q(c) ? c : 0
    };
    nc.prototype.clone = function() {
        return new nc(this.x, this.y)
    };
    nc.prototype.floor = function() {
        this.x = Math.floor(this.x);
        this.y = Math.floor(this.y);
        return this
    };
    nc.prototype.round = function() {
        this.x = Math.round(this.x);
        this.y = Math.round(this.y);
        return this
    };
    var oc = function() {};
    var pc = function(a) {
        this.s = a
    };
    v(pc, oc);
    var qc = function(a, c, d, e) {
        return new pc([a, c, a + d, c, a + d, c + e, a, c + e])
    };
    pc.prototype.contains = function(a, c) {
        var d = this.s;
        if (6 > d.length) return !1;
        for (var e = !1, f = 0, g = d.length - 2; f < d.length; g = f, f += 2) {
            var h = d[f],
                k = d[f + 1],
                m = d[g],
                g = d[g + 1];
            a < h != a < m && c > k + (a - h) * (g - k) / (m - h) && (e = !e)
        }
        return e
    };
    pc.prototype.o = function(a) {
        a.beginPath();
        for (var c = 0; c < this.s.length; c += 2) a.lineTo(this.s[c], this.s[c + 1]);
        a.lineTo(this.s[0], this.s[1]);
        a.fill();
        a.stroke()
    };
    var rc = function(a) {
            this.w = a;
            this.s = !1;
            this.v = [];
            this.o = new Image
        },
        sc = function(a) {
            if (!a.o.src) {
                var c = function() {
                    if (!a.s) {
                        a.s = !0;
                        for (var c = 0, e; e = a.v[c]; c++) e()
                    }
                };
                a.o.onload = c;
                a.o.src = a.w;
                (a.o.complete || "complete" == a.o.readyState) && c()
            }
        };
    var tc = function(a, c) {
            this.s = [];
            this.v = [];
            for (var d = 0, e; e = c[d]; d++) {
                var f = new rc(a + e.filename);
                e = e.size;
                this.s.push(f);
                this.v.push(e)
            }
        },
        vc = function(a, c, d) {
            a = uc(a, c);
            d && (a.s ? d() : a.v.push(d));
            sc(a)
        },
        uc = function(a, c) {
            return a.s[ga(c) ? c : c[0]]
        };
    tc.prototype.o = function(a, c, d, e, f, g) {
        var h = a[3],
            k = a[4],
            m = h,
            l = k;
        void 0 != f && (m *= f, l *= f);
        g && (d -= m / 2, e -= l / 2);
        f = a[1];
        g = a[2];
        void 0 != d && (f += 0, g += 0);
        a = uc(this, a);
        if (!a.s) throw Error("e");
        c.drawImage(a.o, f, g, h, k, d, e, m, l)
    };
    var wc, G = function() {
        tc.call(this, "https://www.google.com.br/logos/2015/halloween15/", xc)
    };
    v(G, tc);
	debugger;
    var xc = [{
            filename: "cta-sprite.png",
            size: [2522, 300]
        }, {
            filename: "team-picker-sprite.png",
            size: [2648, 560]
        }, {
            filename: "play-sprite.png",
            size: [1692, 1834]
        }, {
            filename: "blue-sprite.png",
            size: [3469, 311]
        }, {
            filename: "green-sprite.png",
            size: [4801, 154]
        }, {
            filename: "red-sprite.png",
            size: [4368, 154]
        }, {
            filename: "yellow-sprite.png",
            size: [3048, 311]
        }, {
            filename: "blue-reaction-sprite.png",
            size: [1918, 154]
        }, {
            filename: "green-reaction-sprite.png",
            size: [901, 154]
        }, {
            filename: "red-reaction-sprite.png",
            size: [1692, 154]
        }, {
            filename: "yellow-reaction-sprite.png",
            size: [2370, 154]
        }, {
            filename: "blue-end-sprite.png",
            size: [240, 240]
        }, {
            filename: "green-end-sprite.png",
            size: [240, 240]
        }, {
            filename: "red-end-sprite.png",
            size: [240, 240]
        }, {
            filename: "yellow-end-sprite.png",
            size: [241, 241]
        }, {
            filename: "end-sprite.png",
            size: [1090, 630]
        }, {
            filename: "tools-sprite.png",
            size: [50, 103]
        }],
        H = {
            Ha: [2, 1098, 593, 78, 35],
            im: [2, 1179, 593, 78, 35],
            Em: [2, 1260, 593, 78, 35],
            md: [2, 1612, 1165, 78, 35],
            R: [3, 3346, 189, 42, 20],
            V: [3, 3051, 157, 56, 60],
            Xm: [3, 3110, 157, 56, 60],
            Gc: [3, 3169, 157, 56, 60],
            ao: [3, 3228, 157, 56, 60],
            Ic: [3,
                3287, 157, 56, 60
            ],
            Vp: [3, 452, 0, 110, 154],
            oq: [3, 565, 0, 110, 154],
            Gq: [3, 678, 0, 110, 154],
            Zq: [3, 791, 0, 110, 154],
            pr: [3, 904, 0, 110, 154],
            Ir: [3, 1017, 0, 110, 154],
            rs: [3, 1130, 0, 110, 154],
            $s: [3, 1130, 0, 110, 154],
            nt: [3, 1243, 0, 110, 154],
            Et: [3, 1243, 0, 110, 154],
            Wt: [3, 1356, 0, 110, 154],
            nu: [3, 1356, 0, 110, 154],
            Du: [3, 1469, 0, 110, 154],
            Vu: [3, 1469, 0, 110, 154],
            ov: [3, 1582, 0, 110, 154],
            Gd: [3, 1582, 0, 110, 154],
            Zd: [3, 1356, 0, 110, 154],
            te: [3, 1356, 0, 110, 154],
            Me: [3, 1469, 0, 110, 154],
            df: [3, 1469, 0, 110, 154],
            Af: [3, 1582, 0, 110, 154],
            Sf: [3, 1582, 0, 110, 154],
            jg: [3,
                1356, 0, 110, 154
            ],
            Cg: [3, 1356, 0, 110, 154],
            Ug: [3, 1469, 0, 110, 154],
            mh: [3, 1469, 0, 110, 154],
            Fh: [3, 1582, 0, 110, 154],
            Xh: [3, 1582, 0, 110, 154],
            oi: [3, 1356, 0, 110, 154],
            Ji: [3, 1356, 0, 110, 154],
            aj: [3, 1469, 0, 110, 154],
            sj: [3, 1469, 0, 110, 154],
            Kj: [3, 1582, 0, 110, 154],
            bk: [3, 1582, 0, 110, 154],
            uk: [3, 1356, 0, 110, 154],
            Mk: [3, 1356, 0, 110, 154],
            dl: [3, 1469, 0, 110, 154],
            yl: [3, 1469, 0, 110, 154],
            Rl: [3, 1695, 0, 110, 154],
            jm: [3, 1695, 0, 110, 154],
            Fm: [3, 1808, 0, 110, 154],
            nd: [3, 1808, 0, 110, 154],
            Ym: [3, 1921, 0, 110, 154],
            bo: [3, 2034, 0, 110, 154],
            Ho: [3, 2147, 0, 110, 154],
            lp: [3,
                2260, 0, 110, 154
            ],
            Wp: [3, 2373, 0, 110, 154],
            pq: [3, 2486, 0, 110, 154],
            Hq: [7, 0, 0, 110, 154],
            $q: [7, 0, 0, 110, 154],
            qr: [7, 113, 0, 110, 154],
            Jr: [7, 113, 0, 110, 154],
            Yr: [7, 226, 0, 110, 154],
            ts: [7, 226, 0, 110, 154],
            Is: [7, 339, 0, 110, 154],
            at: [7, 339, 0, 110, 154],
            ot: [7, 452, 0, 110, 154],
            Ft: [7, 452, 0, 110, 154],
            Xt: [7, 565, 0, 110, 154],
            Eu: [7, 565, 0, 110, 154],
            Wu: [7, 678, 0, 110, 154],
            pv: [7, 678, 0, 110, 154],
            Hd: [7, 678, 0, 110, 154],
            $d: [7, 678, 0, 110, 154],
            ue: [7, 678, 0, 110, 154],
            Ne: [7, 678, 0, 110, 154],
            ef: [7, 678, 0, 110, 154],
            Bf: [7, 678, 0, 110, 154],
            Tf: [7, 678, 0, 110, 154],
            kg: [7,
                678, 0, 110, 154
            ],
            Dg: [7, 678, 0, 110, 154],
            Vg: [7, 678, 0, 110, 154],
            nh: [3, 2599, 0, 110, 154],
            Gh: [3, 2599, 0, 110, 154],
            Yh: [3, 2712, 0, 110, 154],
            pi: [3, 2712, 0, 110, 154],
            Ki: [3, 2825, 0, 110, 154],
            bj: [3, 2825, 0, 110, 154],
            tj: [3, 2938, 0, 110, 154],
            Lj: [3, 3051, 0, 110, 154],
            ck: [3, 3164, 0, 110, 154],
            vk: [3, 3277, 0, 110, 154],
            Nk: [3, 0, 157, 110, 154],
            el: [3, 0, 157, 110, 154],
            zl: [3, 113, 157, 110, 154],
            Sl: [3, 226, 157, 110, 154],
            km: [3, 339, 157, 110, 154],
            Gm: [3, 452, 157, 110, 154],
            od: [3, 565, 157, 110, 154],
            Zm: [3, 678, 157, 110, 154],
            un: [3, 791, 157, 110, 154],
            Ln: [3, 904, 157, 110, 154],
            co: [3, 1017, 157, 110, 154],
            ro: [3, 1130, 157, 110, 154],
            Io: [3, 1130, 157, 110, 154],
            mp: [3, 1243, 157, 110, 154],
            Hp: [3, 1243, 157, 110, 154],
            Xp: [3, 1356, 157, 110, 154],
            qq: [3, 1356, 157, 110, 154],
            Iq: [3, 1469, 157, 110, 154],
            rr: [3, 1469, 157, 110, 154],
            Kr: [3, 1243, 157, 110, 154],
            Zr: [3, 1582, 157, 110, 154],
            us: [3, 1582, 157, 110, 154],
            Js: [3, 1695, 157, 110, 154],
            bt: [3, 1695, 157, 110, 154],
            pt: [3, 1808, 157, 110, 154],
            Gt: [3, 1808, 157, 110, 154],
            Yt: [3, 1921, 157, 110, 154],
            ou: [3, 2034, 157, 110, 154],
            Fu: [3, 2147, 157, 110, 154],
            Xu: [3, 2260, 157, 110, 154],
            qv: [3, 2373, 157, 110, 154],
            Id: [3, 2486, 157, 110, 154],
            ae: [3, 2599, 157, 110, 154],
            ve: [3, 2712, 157, 110, 154],
            Oe: [3, 2825, 157, 110, 154],
            ff: [3, 2825, 157, 110, 154],
            Cf: [3, 2938, 157, 110, 154],
            Uf: [3, 2938, 157, 110, 154],
            T: [3, 3391, 189, 38, 50],
            lg: [3, 3390, 0, 57, 60],
            Eg: [3, 3390, 63, 57, 60],
            Sb: [3, 3390, 126, 57, 60],
            Wg: [1, 2219, 0, 152, 229],
            oh: [7, 791, 0, 110, 154],
            Hh: [7, 791, 0, 110, 154],
            Zh: [7, 904, 0, 110, 154],
            ri: [7, 904, 0, 110, 154],
            Li: [7, 1017, 0, 110, 154],
            cj: [7, 1017, 0, 110, 154],
            uj: [7, 1130, 0, 110, 154],
            Mj: [7, 1130, 0, 110, 154],
            dk: [7, 1243, 0, 110, 154],
            wk: [7, 1243, 0, 110, 154],
            Ok: [7, 1243,
                0, 110, 154
            ],
            fl: [7, 1243, 0, 110, 154],
            Al: [7, 1243, 0, 110, 154],
            Tl: [7, 1243, 0, 110, 154],
            lm: [7, 1243, 0, 110, 154],
            Hm: [7, 1243, 0, 110, 154],
            pd: [7, 1243, 0, 110, 154],
            $m: [7, 1243, 0, 110, 154],
            vn: [7, 1243, 0, 110, 154],
            Mn: [7, 1243, 0, 110, 154],
            eo: [7, 1243, 0, 110, 154],
            to: [7, 1243, 0, 110, 154],
            Jo: [7, 1243, 0, 110, 154],
            np: [7, 1243, 0, 110, 154],
            Yp: [15, 999, 511, 65, 11],
            rq: [15, 862, 524, 65, 11],
            Jq: [15, 624, 525, 65, 11],
            ar: [7, 1356, 0, 110, 154],
            sr: [7, 1356, 0, 110, 154],
            Lr: [7, 1469, 0, 110, 154],
            vs: [7, 1469, 0, 110, 154],
            Ks: [7, 1582, 0, 110, 154],
            qt: [7, 1582, 0, 110, 154],
            Ht: [7,
                1695, 0, 110, 154
            ],
            Zt: [7, 1695, 0, 110, 154],
            Gu: [7, 1808, 0, 110, 154],
            Yu: [7, 1808, 0, 110, 154],
            rv: [7, 1808, 0, 110, 154],
            Jd: [7, 1808, 0, 110, 154],
            be: [7, 1808, 0, 110, 154],
            we: [7, 1808, 0, 110, 154],
            Pe: [7, 1808, 0, 110, 154],
            hf: [7, 1808, 0, 110, 154],
            Df: [7, 1808, 0, 110, 154],
            Vf: [7, 1808, 0, 110, 154],
            mg: [7, 1808, 0, 110, 154],
            Fg: [7, 1808, 0, 110, 154],
            Xg: [7, 1808, 0, 110, 154],
            ph: [7, 1808, 0, 110, 154],
            Ih: [7, 1808, 0, 110, 154],
            $h: [7, 1808, 0, 110, 154],
            ti: [11, 0, 0, 240, 240],
            Mi: [15, 1018, 294, 72, 201],
            dj: [15, 718, 116, 72, 202],
            vj: [15, 852, 88, 72, 203],
            Nj: [3, 0, 0, 110, 154],
            ek: [3,
                0, 0, 110, 154
            ],
            xk: [3, 113, 0, 110, 154],
            Pk: [3, 113, 0, 110, 154],
            gl: [3, 226, 0, 110, 154],
            Bl: [3, 226, 0, 110, 154],
            Ul: [3, 339, 0, 110, 154],
            mm: [3, 339, 0, 110, 154],
            Kc: [1, 0, 0, 620, 64],
            Im: [15, 764, 0, 93, 25],
            qd: [15, 643, 0, 118, 70],
            an: [0, 2496, 0, 26, 26],
            wn: [2, 0, 776, 616, 330],
            Nn: [2, 0, 1109, 583, 358],
            fo: [1, 2544, 183, 62, 178],
            uo: [1, 2529, 0, 119, 180],
            Ko: [1, 298, 365, 113, 183],
            Xo: [2, 619, 846, 49, 67],
            pp: [2, 619, 916, 49, 67],
            Ea: [2, 1152, 1216, 63, 81],
            Ip: [2, 1218, 1216, 63, 81],
            Zp: [2, 1628, 1300, 63, 81],
            sq: [2, 1628, 1384, 63, 81],
            Kq: [2, 1104, 1647, 63, 81],
            o: [16, 0, 0, 50, 50],
            Lc: [15, 1038, 0, 49, 47],
            br: [2, 619, 1071, 32, 32],
            Nc: [15, 793, 116, 48, 46],
            ya: [2, 182, 1621, 83, 90],
            tr: [2, 268, 1621, 83, 90],
            $r: [2, 862, 1626, 83, 90],
            ws: [2, 948, 1626, 83, 90],
            s: [15, 0, 363, 620, 64],
            Oc: [15, 793, 165, 47, 46],
            v: [15, 0, 0, 640, 360],
            Pc: [4, 4759, 0, 42, 20],
            mc: [4, 4700, 0, 56, 60],
            Ls: [4, 4520, 63, 56, 60],
            Qc: [4, 4579, 63, 56, 60],
            ct: [4, 4638, 63, 56, 60],
            Tc: [4, 4697, 63, 56, 60],
            Uc: [4, 0, 0, 110, 154],
            rt: [4, 0, 0, 110, 154],
            It: [4, 113, 0, 110, 154],
            $t: [4, 113, 0, 110, 154],
            pu: [4, 226, 0, 110, 154],
            Hu: [4, 226, 0, 110, 154],
            Zu: [4, 339, 0, 110, 154],
            sv: [4, 339, 0, 110, 154],
            Kd: [4, 452, 0, 110, 154],
            ce: [4, 452, 0, 110, 154],
            xe: [4, 565, 0, 110, 154],
            Qe: [4, 565, 0, 110, 154],
            jf: [4, 678, 0, 110, 154],
            Ef: [4, 678, 0, 110, 154],
            Wf: [4, 791, 0, 110, 154],
            ng: [4, 791, 0, 110, 154],
            Gg: [4, 904, 0, 110, 154],
            Yg: [4, 904, 0, 110, 154],
            qh: [4, 1017, 0, 110, 154],
            Jh: [4, 1017, 0, 110, 154],
            ai: [4, 791, 0, 110, 154],
            ui: [4, 791, 0, 110, 154],
            Ni: [4, 904, 0, 110, 154],
            ej: [4, 904, 0, 110, 154],
            wj: [4, 1017, 0, 110, 154],
            Oj: [4, 1017, 0, 110, 154],
            fk: [4, 791, 0, 110, 154],
            yk: [4, 791, 0, 110, 154],
            Qk: [4, 904, 0, 110, 154],
            hl: [4, 904, 0, 110, 154],
            Cl: [4, 1017, 0, 110, 154],
            Vl: [4, 1017, 0,
                110, 154
            ],
            nm: [4, 791, 0, 110, 154],
            Jm: [4, 791, 0, 110, 154],
            rd: [4, 904, 0, 110, 154],
            bn: [4, 904, 0, 110, 154],
            xn: [4, 1017, 0, 110, 154],
            ho: [4, 1017, 0, 110, 154],
            vo: [4, 791, 0, 110, 154],
            Lo: [4, 791, 0, 110, 154],
            Yo: [4, 904, 0, 110, 154],
            qp: [4, 904, 0, 110, 154],
            Jp: [4, 1017, 0, 110, 154],
            $p: [4, 1017, 0, 110, 154],
            tq: [4, 791, 0, 110, 154],
            Lq: [4, 791, 0, 110, 154],
            cr: [4, 1130, 0, 110, 154],
            ur: [4, 1130, 0, 110, 154],
            Mr: [4, 1243, 0, 110, 154],
            as: [4, 1243, 0, 110, 154],
            xs: [4, 1356, 0, 110, 154],
            Ms: [4, 1356, 0, 110, 154],
            dt: [4, 1469, 0, 110, 154],
            st: [4, 1469, 0, 110, 154],
            Jt: [4, 1582, 0, 110, 154],
            qu: [4, 1582, 0, 110, 154],
            Iu: [8, 0, 0, 110, 154],
            $u: [8, 0, 0, 110, 154],
            tv: [8, 0, 0, 110, 154],
            Ld: [8, 0, 0, 110, 154],
            de: [8, 0, 0, 110, 154],
            ye: [8, 0, 0, 110, 154],
            Re: [8, 113, 0, 110, 154],
            kf: [8, 113, 0, 110, 154],
            Ff: [8, 0, 0, 110, 154],
            Xf: [8, 0, 0, 110, 154],
            pg: [8, 0, 0, 110, 154],
            Hg: [8, 0, 0, 110, 154],
            Zg: [8, 0, 0, 110, 154],
            rh: [8, 0, 0, 110, 154],
            Kh: [8, 0, 0, 110, 154],
            bi: [8, 0, 0, 110, 154],
            vi: [8, 0, 0, 110, 154],
            Oi: [8, 0, 0, 110, 154],
            fj: [8, 0, 0, 110, 154],
            xj: [8, 0, 0, 110, 154],
            Pj: [8, 0, 0, 110, 154],
            gk: [8, 0, 0, 110, 154],
            zk: [8, 0, 0, 110, 154],
            Rk: [8, 0, 0, 110, 154],
            il: [4, 1695, 0, 110, 154],
            Dl: [4, 1695, 0, 110, 154],
            Wl: [4, 1808, 0, 110, 154],
            om: [4, 1921, 0, 110, 154],
            Km: [4, 2034, 0, 110, 154],
            sd: [4, 2147, 0, 110, 154],
            cn: [4, 2260, 0, 110, 154],
            yn: [4, 2260, 0, 110, 154],
            On: [4, 2373, 0, 110, 154],
            io: [4, 2373, 0, 110, 154],
            wo: [4, 2486, 0, 110, 154],
            Mo: [4, 2486, 0, 110, 154],
            Zo: [4, 2599, 0, 110, 154],
            rp: [4, 2599, 0, 110, 154],
            Kp: [4, 2712, 0, 110, 154],
            aq: [4, 2712, 0, 110, 154],
            uq: [4, 2486, 0, 110, 154],
            Mq: [4, 2486, 0, 110, 154],
            er: [4, 2599, 0, 110, 154],
            vr: [4, 2599, 0, 110, 154],
            Nr: [4, 2712, 0, 110, 154],
            bs: [4, 2712, 0, 110, 154],
            Ns: [4, 2486, 0, 110, 154],
            tt: [4, 2486, 0, 110,
                154
            ],
            Kt: [4, 2599, 0, 110, 154],
            au: [4, 2825, 0, 110, 154],
            ru: [4, 2938, 0, 110, 154],
            av: [4, 3051, 0, 110, 154],
            uv: [4, 3164, 0, 110, 154],
            Md: [4, 3277, 0, 110, 154],
            ee: [4, 3390, 0, 110, 154],
            ze: [4, 3503, 0, 110, 154],
            Se: [4, 3616, 0, 110, 154],
            lf: [4, 3729, 0, 110, 154],
            Gf: [4, 3842, 0, 110, 154],
            Yf: [4, 3955, 0, 110, 154],
            qg: [4, 4068, 0, 110, 154],
            Ig: [4, 3503, 0, 110, 154],
            $g: [4, 3616, 0, 110, 154],
            sh: [4, 3729, 0, 110, 154],
            Lh: [4, 3842, 0, 110, 154],
            ci: [4, 3955, 0, 110, 154],
            wi: [4, 4181, 0, 110, 154],
            Pi: [4, 4181, 0, 110, 154],
            gj: [4, 4294, 0, 110, 154],
            yj: [4, 4294, 0, 110, 154],
            Qj: [4, 4407, 0,
                110, 154
            ],
            hk: [4, 4407, 0, 110, 154],
            Vc: [4, 4759, 23, 38, 50],
            Ak: [4, 4520, 0, 57, 60],
            Sk: [4, 4580, 0, 57, 60],
            Tb: [4, 4640, 0, 57, 60],
            jl: [1, 155, 67, 151, 229],
            El: [8, 226, 0, 110, 154],
            Xl: [8, 226, 0, 110, 154],
            rm: [8, 339, 0, 110, 154],
            Lm: [8, 339, 0, 110, 154],
            td: [8, 452, 0, 110, 154],
            fn: [8, 452, 0, 110, 154],
            zn: [8, 565, 0, 110, 154],
            Qn: [8, 565, 0, 110, 154],
            jo: [8, 565, 0, 110, 154],
            xo: [8, 565, 0, 110, 154],
            No: [8, 565, 0, 110, 154],
            $o: [8, 565, 0, 110, 154],
            vp: [8, 565, 0, 110, 154],
            Lp: [8, 565, 0, 110, 154],
            bq: [8, 565, 0, 110, 154],
            vq: [8, 565, 0, 110, 154],
            Nq: [8, 565, 0, 110, 154],
            fr: [8, 565,
                0, 110, 154
            ],
            wr: [8, 565, 0, 110, 154],
            Or: [8, 565, 0, 110, 154],
            cs: [8, 565, 0, 110, 154],
            ys: [8, 565, 0, 110, 154],
            Os: [8, 565, 0, 110, 154],
            et: [8, 565, 0, 110, 154],
            ut: [15, 793, 499, 67, 9],
            Lt: [15, 863, 499, 67, 9],
            bu: [15, 933, 499, 67, 9],
            su: [8, 678, 0, 110, 154],
            Ju: [8, 678, 0, 110, 154],
            cv: [8, 678, 0, 110, 154],
            vv: [8, 678, 0, 110, 154],
            Nd: [8, 678, 0, 110, 154],
            fe: [8, 678, 0, 110, 154],
            Ae: [8, 791, 0, 110, 154],
            Te: [8, 791, 0, 110, 154],
            mf: [8, 678, 0, 110, 154],
            Hf: [8, 678, 0, 110, 154],
            Zf: [8, 678, 0, 110, 154],
            rg: [8, 678, 0, 110, 154],
            Jg: [8, 791, 0, 110, 154],
            ah: [8, 791, 0, 110, 154],
            th: [8, 678,
                0, 110, 154
            ],
            Mh: [8, 678, 0, 110, 154],
            di: [8, 678, 0, 110, 154],
            yi: [8, 678, 0, 110, 154],
            Qi: [8, 678, 0, 110, 154],
            hj: [8, 678, 0, 110, 154],
            zj: [8, 678, 0, 110, 154],
            Rj: [8, 678, 0, 110, 154],
            ik: [8, 678, 0, 110, 154],
            Bk: [8, 678, 0, 110, 154],
            Tk: [12, 0, 0, 240, 240],
            kl: [15, 643, 280, 72, 202],
            Fl: [15, 927, 88, 72, 203],
            Yl: [15, 643, 73, 72, 204],
            w: [2, 619, 986, 37, 45],
            N: [2, 0, 673, 679, 100],
            O: [2, 0, 390, 1358, 200],
            Wc: [15, 860, 0, 86, 85],
            Xc: [15, 931, 511, 65, 65],
            sm: [2, 1361, 390, 309, 118],
            Mm: [2, 1325, 673, 366, 334],
            Ia: [2, 1361, 549, 97, 17],
            Yc: [2, 0, 631, 708, 39],
            ud: [2, 586, 1109, 85, 54],
            gn: [2, 1452, 569, 86, 82],
            Qb: [2, 619, 1034, 37, 34],
            Ub: [2, 1612, 1203, 74, 94],
            An: [2, 1544, 238, 125, 141],
            Vb: [2, 1152, 1507, 181, 137],
            S: [2, 583, 1513, 177, 301],
            qb: [2, 1170, 1647, 38, 129],
            Zc: [2, 392, 1470, 188, 364],
            Rn: [2, 1325, 1010, 284, 294],
            ko: [2, 586, 1216, 284, 294],
            yo: [2, 711, 631, 708, 39],
            Oo: [2, 1152, 1307, 235, 197],
            ap: [2, 1390, 1307, 235, 197],
            Xa: [2, 763, 1513, 96, 182],
            $c: [2, 1612, 1010, 79, 152],
            wp: [2, 0, 0, 1541, 387],
            Mp: [2, 0, 1470, 193, 148],
            cq: [2, 196, 1470, 193, 148],
            ad: [2, 1544, 0, 139, 235],
            fd: [2, 1517, 1507, 157, 222],
            hd: [2, 1336, 1507, 178, 286],
            rb: [2, 873,
                1216, 276, 407
            ],
            wq: [2, 0, 593, 1095, 35],
            Wb: [2, 354, 1621, 28, 168],
            ta: [2, 619, 776, 55, 67],
            Ca: [2, 1034, 1626, 67, 101],
            P: [16, 0, 53, 50, 50],
            Oq: [2, 1657, 511, 35, 35],
            jd: [2, 1657, 549, 35, 35],
            gr: [2, 1657, 587, 35, 35],
            kd: [2, 1657, 625, 35, 35],
            xr: [2, 586, 1166, 35, 35],
            ld: [2, 624, 1166, 35, 35],
            ds: [2, 1284, 1216, 35, 35],
            zs: [2, 1284, 1254, 35, 35],
            Ps: [2, 1628, 1468, 35, 35],
            ht: [2, 1211, 1647, 35, 35],
            U: [2, 1672, 238, 14, 14],
            W: [2, 1361, 511, 185, 35],
            vt: [3, 3432, 189, 37, 40],
            Mt: [4, 4756, 76, 37, 40],
            cu: [5, 4100, 63, 37, 40],
            tu: [6, 2744, 220, 37, 40],
            Ku: [1, 2374, 0, 152, 229],
            nc: [5,
                4014, 63, 42, 20
            ],
            oc: [5, 4135, 0, 56, 60],
            dv: [5, 4194, 0, 56, 60],
            qc: [5, 4253, 0, 56, 60],
            wv: [5, 4312, 0, 56, 60],
            sc: [5, 3955, 63, 56, 60],
            Od: [5, 0, 0, 110, 154],
            he: [5, 0, 0, 110, 154],
            Be: [5, 113, 0, 110, 154],
            Ue: [5, 113, 0, 110, 154],
            nf: [5, 226, 0, 110, 154],
            If: [5, 226, 0, 110, 154],
            $f: [5, 339, 0, 110, 154],
            sg: [5, 339, 0, 110, 154],
            Kg: [5, 452, 0, 110, 154],
            bh: [5, 452, 0, 110, 154],
            uh: [5, 565, 0, 110, 154],
            Nh: [5, 565, 0, 110, 154],
            ei: [5, 678, 0, 110, 154],
            zi: [5, 678, 0, 110, 154],
            Ri: [5, 791, 0, 110, 154],
            ij: [5, 791, 0, 110, 154],
            Aj: [5, 904, 0, 110, 154],
            Sj: [5, 904, 0, 110, 154],
            jk: [5, 1017,
                0, 110, 154
            ],
            Ck: [5, 1017, 0, 110, 154],
            Uk: [5, 1130, 0, 110, 154],
            ll: [5, 1130, 0, 110, 154],
            Gl: [5, 1243, 0, 110, 154],
            Zl: [5, 1243, 0, 110, 154],
            um: [5, 1356, 0, 110, 154],
            Nm: [5, 1356, 0, 110, 154],
            vd: [5, 1130, 0, 110, 154],
            hn: [5, 1130, 0, 110, 154],
            Bn: [5, 1243, 0, 110, 154],
            Sn: [5, 1243, 0, 110, 154],
            lo: [5, 1356, 0, 110, 154],
            zo: [5, 1356, 0, 110, 154],
            Po: [5, 1130, 0, 110, 154],
            bp: [5, 1130, 0, 110, 154],
            xp: [5, 1243, 0, 110, 154],
            Np: [5, 1243, 0, 110, 154],
            eq: [5, 1356, 0, 110, 154],
            xq: [5, 1356, 0, 110, 154],
            Pq: [5, 1130, 0, 110, 154],
            yr: [5, 1130, 0, 110, 154],
            Pr: [5, 1243, 0, 110, 154],
            fs: [5,
                1243, 0, 110, 154
            ],
            As: [5, 1356, 0, 110, 154],
            Qs: [5, 1356, 0, 110, 154],
            wt: [5, 1130, 0, 110, 154],
            Nt: [5, 1130, 0, 110, 154],
            du: [5, 1243, 0, 110, 154],
            Lu: [5, 1243, 0, 110, 154],
            ev: [5, 1356, 0, 110, 154],
            xv: [5, 1356, 0, 110, 154],
            Pd: [5, 1469, 0, 110, 154],
            ie: [5, 1469, 0, 110, 154],
            Ce: [5, 1582, 0, 110, 154],
            Ve: [5, 1582, 0, 110, 154],
            of: [5, 1695, 0, 110, 154],
            Jf: [5, 1695, 0, 110, 154],
            ag: [5, 1808, 0, 110, 154],
            tg: [5, 1808, 0, 110, 154],
            Lg: [5, 1921, 0, 110, 154],
            dh: [5, 1921, 0, 110, 154],
            wh: [5, 2034, 0, 110, 154],
            Oh: [5, 2034, 0, 110, 154],
            fi: [9, 0, 0, 110, 154],
            Ai: [9, 0, 0, 110, 154],
            Si: [9, 113,
                0, 110, 154
            ],
            jj: [9, 113, 0, 110, 154],
            Bj: [9, 226, 0, 110, 154],
            Tj: [9, 226, 0, 110, 154],
            kk: [9, 339, 0, 110, 154],
            Dk: [9, 339, 0, 110, 154],
            Vk: [9, 339, 0, 110, 154],
            nl: [9, 339, 0, 110, 154],
            Hl: [9, 339, 0, 110, 154],
            $l: [9, 339, 0, 110, 154],
            vm: [9, 339, 0, 110, 154],
            Om: [9, 452, 0, 110, 154],
            xd: [9, 452, 0, 110, 154],
            jn: [9, 565, 0, 110, 154],
            Cn: [9, 565, 0, 110, 154],
            Tn: [9, 678, 0, 110, 154],
            no: [9, 678, 0, 110, 154],
            Ao: [9, 678, 0, 110, 154],
            Qo: [9, 678, 0, 110, 154],
            ep: [9, 678, 0, 110, 154],
            yp: [9, 678, 0, 110, 154],
            Op: [9, 678, 0, 110, 154],
            fq: [5, 2147, 0, 110, 154],
            yq: [5, 2147, 0, 110, 154],
            Qq: [5,
                2260, 0, 110, 154
            ],
            hr: [5, 2260, 0, 110, 154],
            zr: [5, 2373, 0, 110, 154],
            Qr: [5, 2373, 0, 110, 154],
            Rs: [5, 2486, 0, 110, 154],
            it: [5, 2486, 0, 110, 154],
            Ot: [5, 2599, 0, 110, 154],
            eu: [5, 2599, 0, 110, 154],
            uu: [5, 2712, 0, 110, 154],
            Mu: [5, 2712, 0, 110, 154],
            fv: [5, 2825, 0, 110, 154],
            yv: [5, 2825, 0, 110, 154],
            Qd: [5, 2938, 0, 110, 154],
            je: [5, 2938, 0, 110, 154],
            De: [5, 3051, 0, 110, 154],
            We: [5, 3051, 0, 110, 154],
            qf: [5, 2825, 0, 110, 154],
            Kf: [5, 2825, 0, 110, 154],
            bg: [5, 2938, 0, 110, 154],
            ug: [5, 2938, 0, 110, 154],
            Mg: [5, 3051, 0, 110, 154],
            eh: [5, 3051, 0, 110, 154],
            xh: [5, 2825, 0, 110, 154],
            Ph: [5,
                2825, 0, 110, 154
            ],
            gi: [5, 2938, 0, 110, 154],
            Bi: [5, 2938, 0, 110, 154],
            Ti: [5, 3051, 0, 110, 154],
            kj: [5, 3051, 0, 110, 154],
            Cj: [5, 2825, 0, 110, 154],
            Uj: [5, 2825, 0, 110, 154],
            lk: [5, 2938, 0, 110, 154],
            Ek: [5, 2938, 0, 110, 154],
            Wk: [5, 3164, 0, 110, 154],
            ol: [5, 3164, 0, 110, 154],
            Il: [5, 3277, 0, 110, 154],
            am: [5, 3277, 0, 110, 154],
            wm: [5, 3390, 0, 110, 154],
            Pm: [5, 3390, 0, 110, 154],
            yd: [5, 3503, 0, 110, 154],
            ln: [5, 3503, 0, 110, 154],
            Dn: [5, 3616, 0, 110, 154],
            Un: [5, 3616, 0, 110, 154],
            Ro: [5, 3729, 0, 110, 154],
            gp: [5, 3729, 0, 110, 154],
            zp: [5, 3842, 0, 110, 154],
            gq: [5, 3842, 0, 110, 154],
            tc: [5,
                4059, 63, 38, 50
            ],
            Rq: [5, 3955, 0, 57, 60],
            ir: [5, 4015, 0, 57, 60],
            Xb: [5, 4075, 0, 57, 60],
            Ar: [1, 0, 67, 152, 229],
            Rr: [9, 0, 0, 110, 154],
            hs: [9, 0, 0, 110, 154],
            Bs: [9, 113, 0, 110, 154],
            Ss: [9, 113, 0, 110, 154],
            xt: [9, 791, 0, 110, 154],
            Pt: [9, 791, 0, 110, 154],
            fu: [9, 904, 0, 110, 154],
            vu: [9, 904, 0, 110, 154],
            Nu: [9, 1017, 0, 110, 154],
            gv: [9, 1017, 0, 110, 154],
            zv: [9, 1017, 0, 110, 154],
            Rd: [9, 1017, 0, 110, 154],
            ke: [9, 1017, 0, 110, 154],
            Ee: [9, 1017, 0, 110, 154],
            Xe: [9, 1017, 0, 110, 154],
            rf: [9, 1017, 0, 110, 154],
            Lf: [9, 1017, 0, 110, 154],
            cg: [9, 1017, 0, 110, 154],
            vg: [9, 1017, 0, 110, 154],
            Ng: [9, 1017, 0, 110, 154],
            fh: [9, 1017, 0, 110, 154],
            yh: [9, 1017, 0, 110, 154],
            Qh: [9, 1017, 0, 110, 154],
            hi: [9, 1017, 0, 110, 154],
            Ci: [15, 862, 511, 66, 10],
            Ui: [15, 624, 511, 66, 11],
            lj: [15, 793, 511, 66, 11],
            Dj: [9, 1130, 0, 110, 154],
            Vj: [9, 1130, 0, 110, 154],
            mk: [9, 1243, 0, 110, 154],
            Fk: [9, 1243, 0, 110, 154],
            Xk: [9, 1356, 0, 110, 154],
            pl: [9, 1356, 0, 110, 154],
            Jl: [9, 1469, 0, 110, 154],
            bm: [9, 1469, 0, 110, 154],
            xm: [9, 1582, 0, 110, 154],
            Qm: [9, 1582, 0, 110, 154],
            zd: [9, 1469, 0, 110, 154],
            mn: [9, 1469, 0, 110, 154],
            En: [9, 1582, 0, 110, 154],
            Vn: [9, 1582, 0, 110, 154],
            Bo: [9, 1469, 0, 110,
                154
            ],
            So: [9, 1469, 0, 110, 154],
            Ap: [9, 1582, 0, 110, 154],
            Pp: [9, 1582, 0, 110, 154],
            hq: [9, 1469, 0, 110, 154],
            zq: [9, 1469, 0, 110, 154],
            Sq: [9, 1582, 0, 110, 154],
            Br: [9, 1582, 0, 110, 154],
            Sr: [9, 1469, 0, 110, 154],
            js: [9, 1469, 0, 110, 154],
            Cs: [13, 0, 0, 240, 240],
            Ts: [15, 549, 430, 72, 200],
            yt: [15, 718, 321, 72, 201],
            Qt: [15, 793, 294, 72, 202],
            uc: [15, 949, 0, 86, 85],
            gu: [15, 0, 430, 546, 199],
            vc: [15, 764, 28, 85, 85],
            wc: [1, 309, 67, 146, 295],
            wu: [15, 755, 525, 58, 14],
            Ou: [15, 692, 525, 60, 15],
            hv: [15, 999, 525, 56, 16],
            Yb: [1, 623, 0, 199, 100],
            Zb: [1, 825, 0, 199, 100],
            xc: [1, 1027, 0, 199,
                100
            ],
            yc: [1, 1229, 0, 199, 100],
            Av: [1, 1229, 0, 199, 100],
            ka: [2, 1361, 569, 88, 50],
            Sd: [2, 682, 673, 640, 540],
            $b: [1, 1431, 0, 155, 110],
            ac: [1, 1589, 0, 155, 110],
            zc: [1, 1747, 0, 155, 110],
            Ac: [1, 1905, 0, 155, 110],
            le: [1, 1747, 0, 155, 110],
            Fe: [1, 458, 67, 146, 222],
            Ye: [1, 458, 67, 146, 222],
            tf: [1, 607, 103, 146, 222],
            Mf: [1, 607, 103, 146, 222],
            dg: [1, 756, 103, 146, 222],
            wg: [1, 756, 103, 146, 222],
            Og: [1, 905, 103, 146, 222],
            gh: [1, 905, 103, 146, 222],
            zh: [1, 1054, 103, 146, 222],
            Rh: [1, 1054, 103, 146, 222],
            ii: [1, 1203, 103, 146, 222],
            Di: [1, 1203, 103, 146, 222],
            Vi: [1, 1352, 113, 146,
                222
            ],
            mj: [1, 1352, 113, 146, 222],
            Ej: [1, 1501, 113, 146, 222],
            Wj: [1, 1501, 113, 146, 222],
            nk: [1, 1650, 113, 146, 222],
            Gk: [1, 1650, 113, 146, 222],
            Yk: [1, 1799, 113, 146, 222],
            ql: [1, 1799, 113, 146, 222],
            Kl: [1, 1799, 113, 146, 222],
            cm: [1, 1799, 113, 146, 222],
            ym: [1, 1799, 113, 146, 222],
            Rm: [1, 1799, 113, 146, 222],
            Ad: [1, 1948, 232, 146, 222],
            nn: [1, 1948, 232, 146, 222],
            Fn: [1, 2097, 232, 146, 222],
            Co: [1, 2097, 232, 146, 222],
            hp: [1, 2246, 232, 146, 222],
            Bp: [1, 2246, 232, 146, 222],
            Qp: [1, 2395, 232, 146, 222],
            iq: [1, 2395, 232, 146, 222],
            Aq: [1, 2395, 232, 146, 222],
            Tq: [1, 2395, 232, 146,
                222
            ],
            jr: [1, 2395, 232, 146, 222],
            Cr: [1, 2395, 232, 146, 222],
            ks: [1, 2395, 232, 146, 222],
            Ds: [1, 2395, 232, 146, 222],
            Us: [1, 2395, 232, 146, 222],
            hu: [1, 2395, 232, 146, 222],
            xu: [1, 2395, 232, 146, 222],
            Pu: [1, 2395, 232, 146, 222],
            iv: [1, 2395, 232, 146, 222],
            Bv: [1, 2395, 232, 146, 222],
            Td: [1, 2395, 232, 146, 222],
            ne: [1, 2395, 232, 146, 222],
            Ge: [1, 2395, 232, 146, 222],
            Ze: [1, 2395, 232, 146, 222],
            uf: [1, 458, 292, 146, 222],
            Nf: [1, 458, 292, 146, 222],
            eg: [1, 0, 299, 146, 222],
            xg: [1, 0, 299, 146, 222],
            Pg: [1, 149, 299, 146, 222],
            hh: [1, 149, 299, 146, 222],
            Ah: [1, 607, 328, 146, 222],
            Sh: [1,
                607, 328, 146, 222
            ],
            ji: [1, 756, 328, 146, 222],
            Ei: [1, 756, 328, 146, 222],
            Wi: [1, 905, 328, 146, 222],
            nj: [1, 905, 328, 146, 222],
            Fj: [1, 1054, 328, 146, 222],
            Xj: [1, 1054, 328, 146, 222],
            pk: [1, 1054, 328, 146, 222],
            Hk: [1, 1054, 328, 146, 222],
            Zk: [1, 1054, 328, 146, 222],
            rl: [1, 1054, 328, 146, 222],
            Ll: [1, 1054, 328, 146, 222],
            dm: [1, 1054, 328, 146, 222],
            zm: [1, 1054, 328, 146, 222],
            Sm: [1, 1054, 328, 146, 222],
            Bd: [1, 1054, 328, 146, 222],
            on: [1, 1054, 328, 146, 222],
            Gn: [1, 1203, 328, 146, 222],
            Wn: [1, 1203, 328, 146, 222],
            Do: [1, 1352, 338, 146, 222],
            To: [1, 1352, 338, 146, 222],
            ip: [1, 1501,
                338, 146, 222
            ],
            Cp: [1, 1501, 338, 146, 222],
            Rp: [1, 1650, 338, 146, 222],
            jq: [1, 1650, 338, 146, 222],
            Bq: [1, 1799, 338, 146, 222],
            Uq: [1, 1799, 338, 146, 222],
            kr: [1, 1799, 338, 146, 222],
            Dr: [1, 1799, 338, 146, 222],
            Tr: [1, 1799, 338, 146, 222],
            ls: [1, 1799, 338, 146, 222],
            Es: [1, 1799, 338, 146, 222],
            Vs: [1, 1799, 338, 146, 222],
            jt: [1, 1799, 338, 146, 222],
            zt: [1, 1799, 338, 146, 222],
            Rt: [1, 1799, 338, 146, 222],
            iu: [1, 1799, 338, 146, 222],
            yu: [1, 1799, 338, 146, 222],
            Qu: [1, 1799, 338, 146, 222],
            jv: [1, 1799, 338, 146, 222],
            Cv: [1, 1799, 338, 146, 222],
            ma: [2, 0, 1621, 93, 135],
            na: [2, 96, 1621,
                83, 117
            ],
            oa: [2, 1549, 511, 105, 158],
            Ud: [0, 0, 0, 205, 300],
            oe: [0, 208, 0, 205, 300],
            He: [0, 416, 0, 205, 300],
            $e: [0, 624, 0, 205, 300],
            vf: [0, 832, 0, 205, 300],
            Of: [0, 1040, 0, 205, 300],
            fg: [0, 1248, 0, 205, 300],
            yg: [0, 1456, 0, 205, 300],
            Qg: [0, 1664, 0, 205, 300],
            ih: [0, 1872, 0, 205, 300],
            Bh: [0, 2080, 0, 205, 300],
            Th: [0, 2288, 0, 205, 300],
            Bc: [15, 793, 214, 47, 46],
            X: [2, 1672, 255, 14, 14],
            Cc: [6, 2658, 220, 42, 20],
            Dc: [6, 2779, 157, 56, 60],
            ki: [6, 2838, 157, 56, 60],
            Ec: [6, 2897, 157, 56, 60],
            Fi: [6, 2956, 157, 56, 60],
            Fc: [6, 2599, 220, 56, 60],
            Xi: [6, 0, 0, 110, 154],
            oj: [6, 0, 0, 110, 154],
            Gj: [6, 113, 0, 110, 154],
            Yj: [6, 113, 0, 110, 154],
            qk: [6, 226, 0, 110, 154],
            Ik: [6, 226, 0, 110, 154],
            $k: [6, 339, 0, 110, 154],
            tl: [6, 339, 0, 110, 154],
            Ml: [6, 452, 0, 110, 154],
            em: [6, 452, 0, 110, 154],
            Am: [6, 565, 0, 110, 154],
            Tm: [6, 565, 0, 110, 154],
            Cd: [6, 678, 0, 110, 154],
            pn: [6, 678, 0, 110, 154],
            Hn: [6, 791, 0, 110, 154],
            Xn: [6, 791, 0, 110, 154],
            Eo: [6, 904, 0, 110, 154],
            Uo: [6, 904, 0, 110, 154],
            jp: [6, 1017, 0, 110, 154],
            Dp: [6, 1017, 0, 110, 154],
            Sp: [6, 1130, 0, 110, 154],
            kq: [6, 1130, 0, 110, 154],
            Cq: [6, 1243, 0, 110, 154],
            Vq: [6, 1243, 0, 110, 154],
            lr: [6, 1356, 0, 110, 154],
            Er: [6, 1356,
                0, 110, 154
            ],
            Ur: [6, 1469, 0, 110, 154],
            ms: [6, 1469, 0, 110, 154],
            Fs: [6, 1582, 0, 110, 154],
            Ws: [6, 1582, 0, 110, 154],
            kt: [6, 1356, 0, 110, 154],
            At: [6, 1356, 0, 110, 154],
            St: [6, 1469, 0, 110, 154],
            ju: [6, 1469, 0, 110, 154],
            zu: [6, 1582, 0, 110, 154],
            Ru: [6, 1582, 0, 110, 154],
            kv: [6, 1356, 0, 110, 154],
            Dv: [6, 1356, 0, 110, 154],
            Vd: [6, 1469, 0, 110, 154],
            pe: [6, 1469, 0, 110, 154],
            Ie: [6, 1582, 0, 110, 154],
            af: [6, 1582, 0, 110, 154],
            xf: [6, 1356, 0, 110, 154],
            Pf: [6, 1356, 0, 110, 154],
            gg: [6, 1469, 0, 110, 154],
            zg: [6, 1469, 0, 110, 154],
            Rg: [6, 1582, 0, 110, 154],
            jh: [6, 1582, 0, 110, 154],
            Ch: [6,
                1356, 0, 110, 154
            ],
            Uh: [6, 1356, 0, 110, 154],
            li: [6, 1469, 0, 110, 154],
            Gi: [6, 1469, 0, 110, 154],
            Yi: [6, 1695, 0, 110, 154],
            pj: [6, 1695, 0, 110, 154],
            Hj: [6, 1808, 0, 110, 154],
            Zj: [6, 1808, 0, 110, 154],
            rk: [6, 1921, 0, 110, 154],
            Jk: [6, 1921, 0, 110, 154],
            al: [6, 2034, 0, 110, 154],
            ul: [6, 2034, 0, 110, 154],
            Nl: [6, 2147, 0, 110, 154],
            fm: [6, 2147, 0, 110, 154],
            Bm: [6, 2260, 0, 110, 154],
            Um: [6, 2260, 0, 110, 154],
            Dd: [10, 0, 0, 110, 154],
            qn: [10, 0, 0, 110, 154],
            In: [10, 113, 0, 110, 154],
            Yn: [10, 113, 0, 110, 154],
            oo: [10, 226, 0, 110, 154],
            Vo: [10, 226, 0, 110, 154],
            Ep: [10, 339, 0, 110, 154],
            lq: [10,
                339, 0, 110, 154
            ],
            Dq: [10, 452, 0, 110, 154],
            Wq: [10, 452, 0, 110, 154],
            mr: [10, 452, 0, 110, 154],
            Fr: [10, 452, 0, 110, 154],
            Vr: [10, 565, 0, 110, 154],
            ns: [10, 565, 0, 110, 154],
            Xs: [10, 678, 0, 110, 154],
            Bt: [10, 678, 0, 110, 154],
            Tt: [10, 791, 0, 110, 154],
            ku: [10, 791, 0, 110, 154],
            Au: [10, 791, 0, 110, 154],
            Su: [10, 791, 0, 110, 154],
            lv: [10, 791, 0, 110, 154],
            Ev: [10, 791, 0, 110, 154],
            Wd: [10, 791, 0, 110, 154],
            qe: [10, 791, 0, 110, 154],
            Je: [6, 2373, 0, 110, 154],
            bf: [6, 2486, 0, 110, 154],
            yf: [6, 2599, 0, 110, 154],
            Qf: [6, 2599, 0, 110, 154],
            hg: [6, 2712, 0, 110, 154],
            Ag: [6, 2825, 0, 110, 154],
            Sg: [6,
                2938, 0, 110, 154
            ],
            kh: [6, 0, 157, 110, 154],
            Dh: [6, 113, 157, 110, 154],
            Vh: [6, 113, 157, 110, 154],
            mi: [6, 226, 157, 110, 154],
            Hi: [6, 226, 157, 110, 154],
            Zi: [6, 339, 157, 110, 154],
            qj: [6, 452, 157, 110, 154],
            Ij: [6, 565, 157, 110, 154],
            $j: [6, 565, 157, 110, 154],
            sk: [6, 678, 157, 110, 154],
            Kk: [6, 791, 157, 110, 154],
            bl: [6, 904, 157, 110, 154],
            vl: [6, 904, 157, 110, 154],
            Ol: [6, 1017, 157, 110, 154],
            gm: [6, 1130, 157, 110, 154],
            Cm: [6, 1243, 157, 110, 154],
            Vm: [6, 1243, 157, 110, 154],
            Ed: [6, 1356, 157, 110, 154],
            rn: [6, 1469, 157, 110, 154],
            Jn: [6, 1582, 157, 110, 154],
            Zn: [6, 1582, 157, 110, 154],
            po: [6, 1695, 157, 110, 154],
            Fo: [6, 1695, 157, 110, 154],
            Fp: [6, 1469, 157, 110, 154],
            Tp: [6, 1469, 157, 110, 154],
            mq: [6, 1582, 157, 110, 154],
            Eq: [6, 1582, 157, 110, 154],
            Xq: [6, 1695, 157, 110, 154],
            nr: [6, 1695, 157, 110, 154],
            Gr: [6, 1808, 157, 110, 154],
            Wr: [6, 1808, 157, 110, 154],
            os: [6, 1921, 157, 110, 154],
            Gs: [6, 1921, 157, 110, 154],
            Ys: [6, 2034, 157, 110, 154],
            lt: [6, 2034, 157, 110, 154],
            Ct: [6, 2147, 157, 110, 154],
            Ut: [6, 2147, 157, 110, 154],
            lu: [6, 2260, 157, 110, 154],
            Bu: [6, 2373, 157, 110, 154],
            Tu: [6, 2486, 157, 110, 154],
            mv: [6, 2486, 157, 110, 154],
            Hc: [6, 2703, 220, 38, 50],
            Fv: [6, 2599, 157, 57, 60],
            Xd: [6, 2659, 157, 57, 60],
            dc: [6, 2719, 157, 57, 60],
            re: [1, 2063, 0, 153, 229],
            Ke: [10, 0, 0, 110, 154],
            cf: [10, 0, 0, 110, 154],
            zf: [10, 113, 0, 110, 154],
            Rf: [10, 113, 0, 110, 154],
            ig: [10, 904, 0, 110, 154],
            Bg: [10, 904, 0, 110, 154],
            Tg: [10, 1017, 0, 110, 154],
            lh: [10, 1017, 0, 110, 154],
            Eh: [10, 1130, 0, 110, 154],
            Wh: [10, 1130, 0, 110, 154],
            ni: [10, 1130, 0, 110, 154],
            Ii: [10, 1130, 0, 110, 154],
            $i: [10, 1130, 0, 110, 154],
            rj: [10, 1130, 0, 110, 154],
            Jj: [10, 1130, 0, 110, 154],
            ak: [10, 1130, 0, 110, 154],
            tk: [10, 1130, 0, 110, 154],
            Lk: [10, 1130, 0, 110, 154],
            cl: [10, 1130,
                0, 110, 154
            ],
            xl: [10, 1130, 0, 110, 154],
            Pl: [10, 1130, 0, 110, 154],
            hm: [10, 1130, 0, 110, 154],
            Dm: [10, 1130, 0, 110, 154],
            Wm: [10, 1130, 0, 110, 154],
            Fd: [15, 624, 485, 67, 10],
            tn: [15, 624, 498, 67, 10],
            Kn: [15, 1018, 498, 67, 10],
            $n: [10, 1243, 0, 110, 154],
            qo: [10, 1243, 0, 110, 154],
            Go: [10, 1356, 0, 110, 154],
            Wo: [10, 1356, 0, 110, 154],
            kp: [10, 1469, 0, 110, 154],
            Gp: [10, 1469, 0, 110, 154],
            Up: [10, 1469, 0, 110, 154],
            nq: [10, 1469, 0, 110, 154],
            Fq: [10, 1469, 0, 110, 154],
            Yq: [10, 1469, 0, 110, 154],
            or: [10, 1582, 0, 110, 154],
            Hr: [10, 1582, 0, 110, 154],
            Xr: [10, 1695, 0, 110, 154],
            ps: [10, 1695,
                0, 110, 154
            ],
            Hs: [10, 1808, 0, 110, 154],
            Zs: [10, 1808, 0, 110, 154],
            mt: [10, 1921, 0, 110, 154],
            Dt: [10, 1921, 0, 110, 154],
            Vt: [10, 2034, 0, 110, 154],
            mu: [10, 2147, 0, 110, 154],
            Cu: [10, 2147, 0, 110, 154],
            Uu: [10, 2260, 0, 110, 154],
            nv: [10, 2260, 0, 110, 154],
            Gv: [10, 2260, 0, 110, 154],
            Yd: [14, 0, 0, 241, 241],
            Jc: [15, 868, 294, 72, 202],
            se: [15, 943, 294, 72, 202],
            Le: [15, 1002, 88, 72, 203]
        };
    r(G);
    var yc = function(a) {
            return ("" + Math.floor(a)).split("").map(function(a) {
                return parseInt(a, 10)
            })
        },
        zc = function(a, c, d) {
            return [xa(a[0], c[0], d), xa(a[1], c[1], d), xa(a[2], c[2], d)]
        },
        Ac = function(a) {
            return "rgb(" + Math.round(a[0]) + "," + Math.round(a[1]) + "," + Math.round(a[2]) + ")"
        },
        Bc = function(a) {
            var c;
            if (!(c = wb("msgs", {})[a])) {
                var d = wb("alltranslations", {});
                if (d) {
                    c = d.messages;
                    for (var d = d.translations, e = -1, f = 0; f < c.length; f++)
                        if (c[f] == a) {
                            e = f;
                            break
                        }
                    c = -1 == e ? "" : (d[B] || d.en).ALL[e]
                } else c = ""
            }
            return c || a
        };
    var Cc = G.$(),
        Dc = H.br,
        Ec = H.X,
        Fc = 640 - (mb || rb() || nb && pb ? 100 : 47),
        Gc = {
            Oa: 385,
            Pa: 130,
            Ya: 1,
            Lb: H.jd,
            ab: 315,
            jb: 137,
            Sa: 0
        },
        Hc = {
            Oa: 385,
            Pa: 180,
            Ya: 3,
            Lb: H.kd,
            ab: 315,
            jb: 183,
            Sa: 1
        },
        Ic = {
            Oa: 385,
            Pa: 230,
            Ya: 5,
            Lb: H.ld,
            ab: 315,
            jb: 230,
            Sa: 2
        },
        Jc = {
            Oa: 385,
            Pa: 290,
            Ya: 0,
            Lb: null,
            ab: 315,
            jb: 290,
            Sa: -1
        },
        Kc = [Gc, Hc, Ic],
        Lc = [H.$b, H.$b, H.$b, H.ac, H.ac, H.ac, H.zc, H.zc, H.Ac, H.Ac, H.le],
        Mc = [H.Yb, H.Yb, H.Yb, H.Zb, H.Zb, H.Zb, H.xc, H.xc, H.yc, H.yc, H.Av],
        Nc = "be" != B && "bg" != B && "ru" != B && "sr" != B && "uk" != B,
        Oc = Nc ? "20pt Itim, sans-serif" : "20pt Arial, sans-serif",
        Pc = qc(0, 0, 640, 360),
        Qc = "en" == B ? 0 : 54,
        Rc = 328 + Qc,
        Sc = 420 + Qc,
        Tc = wb("gallery", "//www.google.com/doodles/halloween-global-candy-cup-2015"),
        Uc = [H.Ha, H.im, H.Em, H.md],
        Vc = [H.Ea, H.Ip, H.Zp, H.sq, H.Kq],
        Wc = [H.Xo, H.pp],
        Xc = [H.ya, H.tr, H.$r, H.ws],
        Yc = [H.Oq, H.jd, H.gr, H.kd, H.xr, H.ld, H.ds, H.zs, H.Ps, H.ht],
        Zc = [null, H.fo, H.uo, H.Ko],
        $c = {
            nb: 6,
            lb: 14,
            Nb: H.re,
            Ob: H.Yd,
            Ja: [H.Gn, H.Wn, H.Do, H.To, H.ip, H.Cp, H.Rp, H.jq, H.Bq, H.Uq, H.kr, H.Dr, H.Tr, H.ls, H.Es, H.Vs, H.jt, H.zt, H.Rt, H.iu, H.yu, H.Qu, H.jv, H.Cv],
            Ka: 324,
            La: 66,
            Hb: 322,
            Ib: 64,
            Qa: "#ffc802",
            Jb: "In-game collection prompt (Yellow)",
            Kb: "Yellow Team share text (Social sharing)",
            kc: 7,
            lc: 7,
            Pb: 2,
            Ra: H.Cc,
            yb: H.tu,
            kb: {
                x: 322,
                ob: [H.Fd, H.tn, H.Kn],
                pb: [H.Jc, H.se, H.Le]
            },
            Va: [H.Xi, H.oj, H.Gj, H.Yj, H.qk, H.Ik, H.$k, H.tl, H.Ml, H.em, H.Am, H.Tm, H.Cd, H.pn, H.Hn, H.Xn],
            Fb: [H.Je, H.bf, H.yf, H.Qf, H.hg, H.Ag, H.Sg, H.kh, H.Dh, H.Vh, H.mi, H.Hi, H.Zi, H.qj, H.Ij, H.$j, H.sk, H.Kk, H.bl, H.vl, H.Ol, H.gm, H.Cm, H.Vm, H.Ed, H.rn, H.Jn, H.Zn, H.po, H.Fo, H.Fp, H.Tp, H.mq, H.Eq, H.Xq, H.nr, H.Gr, H.Wr, H.os, H.Gs, H.Ys, H.lt, H.Ct, H.Ut, H.lu, H.Bu, H.Tu, H.mv],
            Cb: [H.Eo,
                H.Uo, H.jp, H.Dp, H.Sp, H.kq, H.Cq, H.Vq, H.lr, H.Er, H.Ur, H.ms, H.Fs, H.Ws, H.kt, H.At, H.St, H.ju, H.zu, H.Ru, H.kv, H.Dv, H.Vd, H.pe, H.Ie, H.af, H.xf, H.Pf, H.gg, H.zg, H.Rg, H.jh, H.Ch, H.Uh, H.li, H.Gi, H.Yi, H.pj, H.Hj, H.Zj, H.rk, H.Jk, H.al, H.ul, H.Nl, H.fm, H.Bm, H.Um
            ],
            Eb: [H.Dd, H.qn, H.In, H.Yn, H.oo, H.Vo, H.Ep, H.lq, H.Dq, H.Wq, H.mr, H.Fr, H.Vr, H.ns, H.Xs, H.Bt, H.Tt, H.ku, H.Au, H.Su, H.lv, H.Ev, H.Wd, H.qe],
            mb: [H.Ke, H.cf, H.zf, H.Rf, H.ig, H.Bg, H.Tg, H.lh, H.Eh, H.Wh, H.ni, H.Ii, H.$i, H.rj, H.Jj, H.ak, H.tk, H.Lk, H.cl, H.xl, H.Pl, H.hm, H.Dm, H.Wm],
            Mb: [H.$n, H.qo, H.Go,
                H.Wo, H.kp, H.Gp, H.Up, H.nq, H.Fq, H.Yq, H.or, H.Hr, H.Xr, H.ps, H.Hs, H.Zs, H.mt, H.Dt, H.Vt, H.mu, H.Cu, H.Uu, H.nv, H.Gv
            ],
            Ta: H.Dc,
            Bb: [H.ki, H.Ec, H.Ec, H.Fi, H.Fc, H.Fc],
            Wa: H.Hc,
            Gb: [H.Fv, H.Xd, H.dc, H.dc, H.dc]
        },
        ad = {
            nb: 5,
            lb: 13,
            Nb: H.Ar,
            Ob: H.Cs,
            Ja: [H.uf, H.Nf, H.eg, H.xg, H.Pg, H.hh, H.Ah, H.Sh, H.ji, H.Ei, H.Wi, H.nj, H.Fj, H.Xj, H.pk, H.Hk, H.Zk, H.rl, H.Ll, H.dm, H.zm, H.Sm, H.Bd, H.on],
            Ka: 168,
            La: 66,
            Hb: 167,
            Ib: 64,
            Qa: "#d53600",
            Jb: "In-game collection prompt (Red)",
            Kb: "Red Team share text (Social sharing)",
            kc: 7,
            lc: 6,
            Pb: 3,
            Ra: H.nc,
            yb: H.cu,
            kb: {
                x: 198,
                ob: [H.Ci, H.Ui, H.lj],
                pb: [H.Ts, H.yt, H.Qt]
            },
            Va: [H.Od, H.he, H.Be, H.Ue, H.nf, H.If, H.$f, H.sg, H.Kg, H.bh, H.uh, H.Nh, H.ei, H.zi],
            Fb: [H.fq, H.yq, H.Qq, H.hr, H.zr, H.Qr, H.Rs, H.it, H.Ot, H.eu, H.uu, H.Mu, H.fv, H.yv, H.Qd, H.je, H.De, H.We, H.qf, H.Kf, H.bg, H.ug, H.Mg, H.eh, H.xh, H.Ph, H.gi, H.Bi, H.Ti, H.kj, H.Cj, H.Uj, H.lk, H.Ek, H.Wk, H.ol, H.Il, H.am, H.wm, H.Pm, H.yd, H.ln, H.Dn, H.Un, H.Ro, H.gp, H.zp, H.gq],
            Cb: [H.Ri, H.ij, H.Aj, H.Sj, H.jk, H.Ck, H.Uk, H.ll, H.Gl, H.Zl, H.um, H.Nm, H.vd, H.hn, H.Bn, H.Sn, H.lo, H.zo, H.Po, H.bp, H.xp, H.Np, H.eq, H.xq, H.Pq, H.yr, H.Pr, H.fs,
                H.As, H.Qs, H.wt, H.Nt, H.du, H.Lu, H.ev, H.xv, H.Pd, H.ie, H.Ce, H.Ve, H.of, H.Jf, H.ag, H.tg, H.Lg, H.dh, H.wh, H.Oh
            ],
            Eb: [H.fi, H.Ai, H.Si, H.jj, H.Bj, H.Tj, H.kk, H.Dk, H.Vk, H.nl, H.Hl, H.$l, H.vm, H.Om, H.xd, H.jn, H.Cn, H.Tn, H.no, H.Ao, H.Qo, H.ep, H.yp, H.Op],
            mb: [H.Rr, H.hs, H.Bs, H.Ss, H.xt, H.Pt, H.fu, H.vu, H.Nu, H.gv, H.zv, H.Rd, H.ke, H.Ee, H.Xe, H.rf, H.Lf, H.cg, H.vg, H.Ng, H.fh, H.yh, H.Qh, H.hi],
            Mb: [H.Dj, H.Vj, H.mk, H.Fk, H.Xk, H.pl, H.Jl, H.bm, H.xm, H.Qm, H.zd, H.mn, H.En, H.Vn, H.Bo, H.So, H.Ap, H.Pp, H.hq, H.zq, H.Sq, H.Br, H.Sr, H.js],
            Ta: H.oc,
            Bb: [H.dv, H.qc, H.qc,
                H.wv, H.sc, H.sc
            ],
            Wa: H.tc,
            Gb: [H.Rq, H.ir, H.Xb, H.Xb, H.Xb]
        },
        bd = {
            nb: 3,
            lb: 11,
            Nb: H.Wg,
            Ob: H.ti,
            Ja: [H.Fe, H.Ye, H.tf, H.Mf, H.dg, H.wg, H.Og, H.gh, H.zh, H.Rh, H.ii, H.Di, H.Vi, H.mj, H.Ej, H.Wj, H.nk, H.Gk, H.Yk, H.ql, H.Kl, H.cm, H.ym, H.Rm],
            Ka: 13,
            La: 66,
            Hb: 11,
            Ib: 64,
            Qa: "#177efa",
            Jb: "In-game collection prompt (Blue)",
            Kb: "Blue Team share text (Social sharing)",
            kc: 5,
            lc: 6,
            Pb: 0,
            Ra: H.R,
            yb: H.vt,
            kb: {
                x: 74,
                ob: [H.Yp, H.rq, H.Jq],
                pb: [H.Mi, H.dj, H.vj]
            },
            Va: [H.Nj, H.ek, H.xk, H.Pk, H.gl, H.Bl, H.Ul, H.mm],
            Fb: [H.nh, H.Gh, H.Yh, H.pi, H.Ki, H.bj, H.tj, H.Lj, H.ck,
                H.vk, H.Nk, H.el, H.zl, H.Sl, H.km, H.Gm, H.od, H.Zm, H.un, H.Ln, H.co, H.ro, H.Io, H.mp, H.Hp, H.Xp, H.qq, H.Iq, H.rr, H.Kr, H.Zr, H.us, H.Js, H.bt, H.pt, H.Gt, H.Yt, H.ou, H.Fu, H.Xu, H.qv, H.Id, H.ae, H.ve, H.Oe, H.ff, H.Cf, H.Uf
            ],
            Cb: [H.Vp, H.oq, H.Gq, H.Zq, H.pr, H.Ir, H.rs, H.$s, H.nt, H.Et, H.Wt, H.nu, H.Du, H.Vu, H.ov, H.Gd, H.Zd, H.te, H.Me, H.df, H.Af, H.Sf, H.jg, H.Cg, H.Ug, H.mh, H.Fh, H.Xh, H.oi, H.Ji, H.aj, H.sj, H.Kj, H.bk, H.uk, H.Mk, H.dl, H.yl, H.Rl, H.jm, H.Fm, H.nd, H.Ym, H.bo, H.Ho, H.lp, H.Wp, H.pq],
            Eb: [H.Hq, H.$q, H.qr, H.Jr, H.Yr, H.ts, H.Is, H.at, H.ot, H.Ft, H.Xt, H.Eu,
                H.Wu, H.pv, H.Hd, H.$d, H.ue, H.Ne, H.ef, H.Bf, H.Tf, H.kg, H.Dg, H.Vg
            ],
            mb: [H.oh, H.Hh, H.Zh, H.ri, H.Li, H.cj, H.uj, H.Mj, H.dk, H.wk, H.Ok, H.fl, H.Al, H.Tl, H.lm, H.Hm, H.pd, H.$m, H.vn, H.Mn, H.eo, H.to, H.Jo, H.np],
            Mb: [H.ar, H.sr, H.Lr, H.vs, H.Ks, H.qt, H.Ht, H.Zt, H.Gu, H.Yu, H.rv, H.Jd, H.be, H.we, H.Pe, H.hf, H.Df, H.Vf, H.mg, H.Fg, H.Xg, H.ph, H.Ih, H.$h],
            Ta: H.V,
            Bb: [H.Xm, H.Gc, H.Gc, H.ao, H.Ic, H.Ic],
            Wa: H.T,
            Gb: [H.lg, H.Eg, H.Sb, H.Sb, H.Sb]
        },
        cd = {
            nb: 4,
            lb: 12,
            Nb: H.jl,
            Ob: H.Tk,
            Ja: [H.Ad, H.nn, H.Fn, H.Co, H.hp, H.Bp, H.Qp, H.iq, H.Aq, H.Tq, H.jr, H.Cr, H.ks, H.Ds, H.Us,
                H.hu, H.xu, H.Pu, H.iv, H.Bv, H.Td, H.ne, H.Ge, H.Ze
            ],
            Ka: 480,
            La: 66,
            Hb: 478,
            Ib: 64,
            Qa: "#489100",
            Jb: "In-game collection prompt (Green)",
            Kb: "Green Team share text (social sharing)",
            kc: 7,
            lc: 7,
            Pb: 1,
            Ra: H.Pc,
            yb: H.Mt,
            kb: {
                x: 445,
                ob: [H.ut, H.Lt, H.bu],
                pb: [H.kl, H.Fl, H.Yl]
            },
            Va: [H.Uc, H.rt, H.It, H.$t, H.pu, H.Hu, H.Zu, H.sv],
            Fb: [H.il, H.Dl, H.Wl, H.om, H.Km, H.sd, H.cn, H.yn, H.On, H.io, H.wo, H.Mo, H.Zo, H.rp, H.Kp, H.aq, H.uq, H.Mq, H.er, H.vr, H.Nr, H.bs, H.Ns, H.tt, H.Kt, H.au, H.ru, H.av, H.uv, H.Md, H.ee, H.ze, H.Se, H.lf, H.Gf, H.Yf, H.qg, H.Ig, H.$g, H.sh, H.Lh,
                H.ci, H.wi, H.Pi, H.gj, H.yj, H.Qj, H.hk
            ],
            Cb: [H.Kd, H.ce, H.xe, H.Qe, H.jf, H.Ef, H.Wf, H.ng, H.Gg, H.Yg, H.qh, H.Jh, H.ai, H.ui, H.Ni, H.ej, H.wj, H.Oj, H.fk, H.yk, H.Qk, H.hl, H.Cl, H.Vl, H.nm, H.Jm, H.rd, H.bn, H.xn, H.ho, H.vo, H.Lo, H.Yo, H.qp, H.Jp, H.$p, H.tq, H.Lq, H.cr, H.ur, H.Mr, H.as, H.xs, H.Ms, H.dt, H.st, H.Jt, H.qu],
            Eb: [H.Iu, H.$u, H.tv, H.Ld, H.de, H.ye, H.Re, H.kf, H.Ff, H.Xf, H.pg, H.Hg, H.Zg, H.rh, H.Kh, H.bi, H.vi, H.Oi, H.fj, H.xj, H.Pj, H.gk, H.zk, H.Rk],
            mb: [H.El, H.Xl, H.rm, H.Lm, H.td, H.fn, H.zn, H.Qn, H.jo, H.xo, H.No, H.$o, H.vp, H.Lp, H.bq, H.vq, H.Nq, H.fr, H.wr,
                H.Or, H.cs, H.ys, H.Os, H.et
            ],
            Mb: [H.su, H.Ju, H.cv, H.vv, H.Nd, H.fe, H.Ae, H.Te, H.mf, H.Hf, H.Zf, H.rg, H.Jg, H.ah, H.th, H.Mh, H.di, H.yi, H.Qi, H.hj, H.zj, H.Rj, H.ik, H.Bk],
            Ta: H.mc,
            Bb: [H.Ls, H.Qc, H.Qc, H.ct, H.Tc, H.Tc],
            Wa: H.Vc,
            Gb: [H.Ak, H.Sk, H.Tb, H.Tb, H.Tb]
        },
        I = [bd, cd, $c, ad],
        dd = H.Uc,
        ed = [H.Yc, H.Yc, H.yo, H.wq],
        fd = ed[0][3],
        gd = 540 - ed[0][4],
        hd = H.wn,
        id = H.Nn,
        jd = H.Sd,
        kd = H.Jc[4],
        ld = [H.wu, H.Ou, H.hv],
        md = [96, 46, 96],
        nd = [160, 125, 141],
        od = [255, 213, 183],
        pd = [66, 27, 66],
        qd = [125, 100, 130],
        rd = [173, 148, 162],
        sd = [38, 0, 45],
        td = [49, 41, 102],
        ud = [115, 102,
            171
        ],
        vd = H.an,
        wd = 640 - vd[3];
    var xd = function() {
        this.o = 0;
        this.s = 270;
        this.S = .2;
        this.P = 0;
        this.W = 640;
        this.U = 360;
        this.v = null;
        this.O = this.N = this.w = 0
    };
    r(xd);
    var yd = function() {
            var a = wc;
            a.o = 0;
            a.s = 270;
            a.S = .2;
            a.P = 0;
            a.W = 640;
            a.U = 360;
            a.v = null;
            a.w = 0;
            a.N = 0;
            a.O = 0
        },
        zd = function(a) {
            return a.o + a.W
        },
        Ad = function(a, c, d, e, f) {
            a.v = c;
            a.w = d;
            a.N = e;
            a.O = f
        },
        Bd = function(a) {
            var c = 24 * a.S,
                d = 24 * a.P;
            null != a.v && (d = a.v.y - a.N, c = a.O * (a.v.x - a.w - a.o), d = a.O * (d - a.s));
            a.o += c;
            a.s = Math.max(0, Math.min(540 - a.U, a.s + d))
        };
    var Cd = function(a, c, d) {
            this.v = a;
            this.ka = c;
            this.ma = d || null;
            this.w = [];
            this.o = null;
            this.S = this.O = 0;
            this.qa = this.U = !1;
            this.W = [];
            this.P = this.v.width / this.v.clientWidth;
            this.N = this.v.height / this.v.clientHeight;
            this.oa = [this.v];
            this.na = !1
        },
        Dd = function() {
            var a = new oc;
            a.contains = function() {
                return !0
            };
            return a
        }(),
        Ed = function(a, c) {
            a.P = a.v.width / a.v.clientWidth;
            a.N = a.v.height / a.v.clientHeight;
            a.na = c
        },
        Gd = function(a, c, d) {
            a.w.push(new Fd(c, d))
        };
    Cd.prototype.handleEvent = function(a) {
        var c, d;
        d = (d = (d = a.N()) || window.event) ? (c = d.targetTouches && d.targetTouches[0] || d.changedTouches && d.changedTouches[0]) && void 0 !== c.pageX ? [c.pageX, c.pageY] : void 0 !== d.clientX ? [d.clientX + ("rtl" == document.dir ? -1 : 1) * (document.body.scrollLeft || document.documentElement.scrollLeft || 0), d.clientY + (document.body.scrollTop || document.documentElement.scrollTop || 0)] : void 0 !== d.pageX ? [d.pageX, d.pageY] : [0, 0] : [0, 0];
        c = this.v;
        var e = 0,
            f = 0;
        if (c) {
            do e += c.offsetLeft, f += c.offsetTop; while (c =
                c.offsetParent)
        }
        c = [e, f];
        c = [d[0] - c[0], d[1] - c[1]];
        e = c[0] * this.P;
        d = c[1] * this.N;
        this.na && (e = c[1] * this.N, d = (this.v.clientWidth - c[0]) * this.P);
        c = e;
        this.ma && (e = this.ma, e.U = la(), e.o = !1, hc(e));
        this.O = c;
        this.S = d;
        d = a.type;
        this.qa && 0 == d.indexOf("mouse") || (c = {
            touchstart: "mousedown",
            touchend: "mouseup",
            touchmove: "mousemove"
        }, d in c && (this.qa = !0, d = c[d]), "mousedown" == d && (a.preventDefault(), this.ka && this.ka.focus()), Hd(this, d, this.O, this.S))
    };
    var Hd = function(a, c, d, e) {
            if (!a.U && "mousedown" == c) {
                a.U = !0;
                for (var f = 0; f < a.W.length; f++) a.W[f]()
            }
            if ("mousedown" == c) {
                if (!a.s)
                    for (f = 0; f < a.w.length; f++) {
                        var g = a.w[f];
                        if (g.o.contains(d, e)) {
                            a.s = g;
                            g.s("mousedown", d, e);
                            break
                        }
                    }
            } else if ("mouseup" == c) a.s && (a.s.s("mouseup", d, e), a.s = null);
            else if ("mousemove" == c || "areamove" == c) {
                for (var h = null, f = 0; f < a.w.length; f++)
                    if (g = a.w[f], g.o.contains(d, e)) {
                        h = g;
                        break
                    }
                a.o != h && (a.o && a.o.s("mouseout", d, e), h && h.s("mouseover", d, e), a.o = h);
                if ("mousemove" == c)
                    for (a.s && a.s.s("mousemove",
                            d, e), f = 0; f < a.w.length; f++) g = a.w[f], g != a.s && g.o.contains(d, e) && g.s("mousemove", d, e)
            } else "mouseout" == c && (a.o && a.o.s("mouseout", d, e), a.s = null, a.o = null);
            Id(a)
        },
        Id = function(a) {
            for (var c = a.o && a.o.o != Dd ? "pointer" : "default", d = 0, e; e = a.oa[d]; d++) A(e, "cursor", c)
        },
        Fd = function(a, c) {
            this.o = a;
            this.s = c
        };
    var Jd = function(a, c) {
        this.width = a;
        this.height = c
    };
    Jd.prototype.clone = function() {
        return new Jd(this.width, this.height)
    };
    Jd.prototype.floor = function() {
        this.width = Math.floor(this.width);
        this.height = Math.floor(this.height);
        return this
    };
    Jd.prototype.round = function() {
        this.width = Math.round(this.width);
        this.height = Math.round(this.height);
        return this
    };
    !Qb && !E || E && 9 <= Yb || Qb && F("1.9.1");
    E && F("9");
    var Kd = function(a) {
        Kd[" "](a);
        return a
    };
    Kd[" "] = ba;
    var Ld = !E || 9 <= Yb,
        Md = E && !F("9");
    !Rb || F("528");
    Qb && F("1.9b") || E && F("8") || Ob && F("9.5") || Rb && F("528");
    Qb && !F("8") || E && F("9");
    var Nd = function(a, c) {
        this.type = a;
        this.s = this.target = c;
        this.v = !1;
        this.dd = !0
    };
    Nd.prototype.stopPropagation = function() {
        this.v = !0
    };
    Nd.prototype.preventDefault = function() {
        this.dd = !1
    };
    var J = function(a, c) {
        Nd.call(this, a ? a.type : "");
        this.s = this.target = null;
        this.o = this.clientY = this.clientX = 0;
        this.w = null;
        if (a) {
            this.type = a.type;
            var d = a.changedTouches ? a.changedTouches[0] : null;
            this.target = a.target || a.srcElement;
            this.s = c;
            var e = a.relatedTarget;
            if (e && Qb) try {
                Kd(e.nodeName)
            } catch (f) {}
            null === d ? (this.clientX = void 0 !== a.clientX ? a.clientX : a.pageX, this.clientY = void 0 !== a.clientY ? a.clientY : a.pageY) : (this.clientX = void 0 !== d.clientX ? d.clientX : d.pageX, this.clientY = void 0 !== d.clientY ? d.clientY : d.pageY);
            this.o = a.keyCode || 0;
            this.w = a;
            a.defaultPrevented && this.preventDefault()
        }
    };
    v(J, Nd);
    J.prototype.stopPropagation = function() {
        J.wa.stopPropagation.call(this);
        this.w.stopPropagation ? this.w.stopPropagation() : this.w.cancelBubble = !0
    };
    J.prototype.preventDefault = function() {
        J.wa.preventDefault.call(this);
        var a = this.w;
        if (a.preventDefault) a.preventDefault();
        else if (a.returnValue = !1, Md) try {
            if (a.ctrlKey || 112 <= a.keyCode && 123 >= a.keyCode) a.keyCode = -1
        } catch (c) {}
    };
    J.prototype.N = function() {
        return this.w
    };
    var Od = "closure_listenable_" + (1E6 * Math.random() | 0),
        Pd = 0;
    var Qd = function(a, c, d, e, f) {
            this.listener = a;
            this.o = null;
            this.src = c;
            this.type = d;
            this.Ab = !!e;
            this.Db = f;
            this.Rc = ++Pd;
            this.Za = this.wb = !1
        },
        Rd = function(a) {
            a.Za = !0;
            a.listener = null;
            a.o = null;
            a.src = null;
            a.Db = null
        };
    var Sd = function(a) {
            this.src = a;
            this.o = {};
            this.s = 0
        },
        Ud = function(a, c, d, e, f) {
            var g = c.toString();
            c = a.o[g];
            c || (c = a.o[g] = [], a.s++);
            var h = Td(c, d, e, f); - 1 < h ? (a = c[h], a.wb = !1) : (a = new Qd(d, a.src, g, !!e, f), a.wb = !1, c.push(a));
            return a
        },
        Vd = function(a, c) {
            var d = c.type;
            if (d in a.o) {
                var e = a.o[d],
                    f = qa(e, c),
                    g;
                (g = 0 <= f) && Array.prototype.splice.call(e, f, 1);
                g && (Rd(c), 0 == a.o[d].length && (delete a.o[d], a.s--))
            }
        },
        Wd = function(a, c, d, e, f) {
            a = a.o[c.toString()];
            c = -1;
            a && (c = Td(a, d, e, f));
            return -1 < c ? a[c] : null
        },
        Td = function(a, c, d, e) {
            for (var f =
                    0; f < a.length; ++f) {
                var g = a[f];
                if (!g.Za && g.listener == c && g.Ab == !!d && g.Db == e) return f
            }
            return -1
        };
    var Xd = "closure_lm_" + (1E6 * Math.random() | 0),
        Yd = {},
        Zd = 0,
        $d = function(a, c, d, e, f) {
            if (ea(c)) {
                for (var g = 0; g < c.length; g++) $d(a, c[g], d, e, f);
                return null
            }
            d = ae(d);
            if (a && a[Od]) a = a.listen(c, d, e, f);
            else {
                if (!c) throw Error("f");
                var g = !!e,
                    h = be(a);
                h || (a[Xd] = h = new Sd(a));
                d = Ud(h, c, d, e, f);
                if (!d.o) {
                    e = ce();
                    d.o = e;
                    e.src = a;
                    e.listener = d;
                    if (a.addEventListener) a.addEventListener(c.toString(), e, g);
                    else if (a.attachEvent) a.attachEvent(de(c.toString()), e);
                    else throw Error("g");
                    Zd++
                }
                a = d
            }
            return a
        },
        ce = function() {
            var a = ee,
                c = Ld ? function(d) {
                    return a.call(c.src,
                        c.listener, d)
                } : function(d) {
                    d = a.call(c.src, c.listener, d);
                    if (!d) return d
                };
            return c
        },
        fe = function(a, c, d, e, f) {
            if (ea(c))
                for (var g = 0; g < c.length; g++) fe(a, c[g], d, e, f);
            else d = ae(d), a && a[Od] ? a.unlisten(c, d, e, f) : a && (a = be(a)) && (c = Wd(a, c, d, !!e, f)) && ge(c)
        },
        ge = function(a) {
            if (!ga(a) && a && !a.Za) {
                var c = a.src;
                if (c && c[Od]) Vd(c.Ga, a);
                else {
                    var d = a.type,
                        e = a.o;
                    c.removeEventListener ? c.removeEventListener(d, e, a.Ab) : c.detachEvent && c.detachEvent(de(d), e);
                    Zd--;
                    (d = be(c)) ? (Vd(d, a), 0 == d.s && (d.src = null, c[Xd] = null)) : Rd(a)
                }
            }
        },
        de = function(a) {
            return a in
                Yd ? Yd[a] : Yd[a] = "on" + a
        },
        ie = function(a, c, d, e) {
            var f = !0;
            if (a = be(a))
                if (c = a.o[c.toString()])
                    for (c = c.concat(), a = 0; a < c.length; a++) {
                        var g = c[a];
                        g && g.Ab == d && !g.Za && (g = he(g, e), f = f && !1 !== g)
                    }
                return f
        },
        he = function(a, c) {
            var d = a.listener,
                e = a.Db || a.src;
            a.wb && ge(a);
            return d.call(e, c)
        },
        ee = function(a, c) {
            if (a.Za) return !0;
            if (!Ld) {
                var d;
                if (!(d = c)) a: {
                    d = ["window", "event"];
                    for (var e = b, f; f = d.shift();)
                        if (null != e[f]) e = e[f];
                        else {
                            d = null;
                            break a
                        }
                    d = e
                }
                f = d;
                d = new J(f, this);
                e = !0;
                if (!(0 > f.keyCode || void 0 != f.returnValue)) {
                    a: {
                        var g = !1;
                        if (0 == f.keyCode) try {
                            f.keyCode = -1;
                            break a
                        } catch (m) {
                            g = !0
                        }
                        if (g || void 0 == f.returnValue) f.returnValue = !0
                    }
                    f = [];
                    for (g = d.s; g; g = g.parentNode) f.push(g);
                    for (var g = a.type, h = f.length - 1; !d.v && 0 <= h; h--) {
                        d.s = f[h];
                        var k = ie(f[h], g, !0, d),
                            e = e && k
                    }
                    for (h = 0; !d.v && h < f.length; h++) d.s = f[h],
                    k = ie(f[h], g, !1, d),
                    e = e && k
                }
                return e
            }
            return he(a, new J(c, this))
        },
        be = function(a) {
            a = a[Xd];
            return a instanceof Sd ? a : null
        },
        je = "__closure_events_fn_" + (1E9 * Math.random() >>> 0),
        ae = function(a) {
            if ("function" == da(a)) return a;
            a[je] || (a[je] = function(c) {
                return a.handleEvent(c)
            });
            return a[je]
        };
    var K = function() {
        w.call(this);
        this.Ga = new Sd(this);
        this.$a = this;
        this.ra = null
    };
    v(K, w);
    K.prototype[Od] = !0;
    K.prototype.addEventListener = function(a, c, d, e) {
        $d(this, a, c, d, e)
    };
    K.prototype.removeEventListener = function(a, c, d, e) {
        fe(this, a, c, d, e)
    };
    var L = function(a, c) {
        var d, e = a.ra;
        if (e)
            for (d = []; e; e = e.ra) d.push(e);
        var e = a.$a,
            f = c,
            g = f.type || f;
        if (t(f)) f = new Nd(f, e);
        else if (f instanceof Nd) f.target = f.target || e;
        else {
            var h = f,
                f = new Nd(g, e);
            Fa(f, h)
        }
        var h = !0,
            k;
        if (d)
            for (var m = d.length - 1; !f.v && 0 <= m; m--) k = f.s = d[m], h = ke(k, g, !0, f) && h;
        f.v || (k = f.s = e, h = ke(k, g, !0, f) && h, f.v || (h = ke(k, g, !1, f) && h));
        if (d)
            for (m = 0; !f.v && m < d.length; m++) k = f.s = d[m], h = ke(k, g, !1, f) && h;
        return h
    };
    K.prototype.s = function() {
        K.wa.s.call(this);
        if (this.Ga) {
            var a = this.Ga,
                c = 0,
                d;
            for (d in a.o) {
                for (var e = a.o[d], f = 0; f < e.length; f++) ++c, Rd(e[f]);
                delete a.o[d];
                a.s--
            }
        }
        this.ra = null
    };
    K.prototype.listen = function(a, c, d, e) {
        return Ud(this.Ga, String(a), c, d, e)
    };
    K.prototype.unlisten = function(a, c, d, e) {
        var f;
        f = this.Ga;
        a = String(a).toString();
        if (a in f.o) {
            var g = f.o[a];
            c = Td(g, c, d, e); - 1 < c ? (Rd(g[c]), Array.prototype.splice.call(g, c, 1), 0 == g.length && (delete f.o[a], f.s--), f = !0) : f = !1
        } else f = !1;
        return f
    };
    var ke = function(a, c, d, e) {
        c = a.Ga.o[String(c)];
        if (!c) return !0;
        c = c.concat();
        for (var f = !0, g = 0; g < c.length; ++g) {
            var h = c[g];
            if (h && !h.Za && h.Ab == d) {
                var k = h.listener,
                    m = h.Db || h.src;
                h.wb && Vd(a.Ga, h);
                f = !1 !== k.call(m, e) && f
            }
        }
        return f && 0 != e.dd
    };
    var me = function(a) {
            var c;
            if (!(E || Pb || Rb && F("525"))) return !0;
            if (ga(c))
                if (Qb) c = le(c);
                else if (Sb && Rb) a: switch (c) {
                case 93:
                    c = 91;
                    break a
            }
            if (17 == c || 18 == c || Sb && 91 == c) return !1;
            switch (a) {
                case 13:
                    return !0;
                case 27:
                    return !(Rb || Pb)
            }
            a: if (48 <= a && 57 >= a || 96 <= a && 106 >= a || 65 <= a && 90 >= a || (Rb || Pb) && 0 == a) a = !0;
                else switch (a) {
                    case 32:
                    case 43:
                    case 63:
                    case 64:
                    case 107:
                    case 109:
                    case 110:
                    case 111:
                    case 186:
                    case 59:
                    case 189:
                    case 187:
                    case 61:
                    case 188:
                    case 190:
                    case 191:
                    case 192:
                    case 222:
                    case 219:
                    case 220:
                    case 221:
                        a = !0;
                        break a;
                    default:
                        a = !1
                }
                return a
        },
        le = function(a) {
            switch (a) {
                case 61:
                    return 187;
                case 59:
                    return 186;
                case 173:
                    return 189;
                case 224:
                    return 91;
                case 0:
                    return 224;
                default:
                    return a
            }
        };
    var oe = function(a) {
        K.call(this);
        this.o = a;
        $d(a, ne, this.w, !1, this);
        $d(a, "click", this.v, !1, this)
    };
    v(oe, K);
    var ne = Qb ? "keypress" : "keydown";
    oe.prototype.w = function(a) {
        (13 == a.o || Rb && 3 == a.o) && pe(this, a)
    };
    oe.prototype.v = function(a) {
        pe(this, a)
    };
    var pe = function(a, c) {
        var d = new qe(c);
        if (L(a, d)) {
            d = new re(c);
            try {
                L(a, d)
            } finally {
                c.stopPropagation()
            }
        }
    };
    oe.prototype.s = function() {
        oe.wa.s.call(this);
        fe(this.o, ne, this.w, !1, this);
        fe(this.o, "click", this.v, !1, this);
        delete this.o
    };
    var re = function(a) {
        J.call(this, a.N());
        this.type = "action"
    };
    v(re, J);
    var qe = function(a) {
        J.call(this, a.N());
        this.type = "beforeaction"
    };
    v(qe, J);
    var se = function(a) {
        w.call(this);
        this.U = a;
        this.o = {}
    };
    v(se, w);
    var te = [];
    se.prototype.listen = function(a, c, d, e) {
        return ue(this, a, c, d, e)
    };
    var ve = function(a, c, d, e, f) {
            ue(a, c, d, e, !0, f)
        },
        ue = function(a, c, d, e, f, g) {
            ea(d) || (d && (te[0] = d.toString()), d = te);
            for (var h = 0; h < d.length; h++) {
                var k = $d(c, d[h], e || a.handleEvent, f || !1, g || a.U || a);
                if (!k) break;
                a.o[k.Rc] = k
            }
            return a
        };
    se.prototype.unlisten = function(a, c, d, e, f) {
        if (ea(c))
            for (var g = 0; g < c.length; g++) this.unlisten(a, c[g], d, e, f);
        else d = d || this.handleEvent, f = f || this.U || this, d = ae(d), e = !!e, c = a && a[Od] ? Wd(a.Ga, String(c), d, e, f) : a ? (a = be(a)) ? Wd(a, c, d, e, f) : null : null, c && (ge(c), delete this.o[c.Rc]);
        return this
    };
    var we = function(a) {
        Aa(a.o, function(a, d) {
            this.o.hasOwnProperty(d) && ge(a)
        }, a);
        a.o = {}
    };
    se.prototype.s = function() {
        se.wa.s.call(this);
        we(this)
    };
    se.prototype.handleEvent = function() {
        throw Error("h");
    };
    var xe = function(a, c, d, e, f) {
        se.call(this);
        this.O = a;
        this.na = c;
        this.ma = d;
        this.ka = e;
        f && (this.v && this.unlisten(this.v, "action", this.w), f && (this.v = new oe(f), a = ka(na, this.v), this.S ? a.call(void 0) : (this.N || (this.N = []), this.N.push(q(void 0) ? u(a, void 0) : a)), this.w = u(this.P, this), this.listen(this.v, "action", this.w)))
    };
    v(xe, se);
    xe.prototype.P = function() {
        ye() && !D("Trident") && !D("MSIE") && window.gapi && window.gapi.load ? (window.gapi.load("share", u(this.W, this)), Cb("gplus,li")) : (window.open("https://plus.google.com/share?url=" + this.O), Cb("gplus,lo"))
    };
    var ye = function() {
        if (!window.gbar) return !1;
        var a = !!(window.gbar.sos && 0 < window.gbar.sos().length),
            c = !(!window.gbar.so || !window.gbar.so());
        return a || c
    };
    xe.prototype.W = function() {
        if (window.gapi && window.gapi.share) {
            var a = {
                    items: [{
                        type: "http://schema.org/WebPage",
                        id: location.protocol + "//" + location.host,
                        properties: {
                            url: [this.O],
                            name: [this.na],
                            image: [this.ka]
                        }
                    }]
                },
                c = window.location.toString().match(/[?&]authuser=(\d+)/),
                c = c && c[1],
                d = ye() || !!window.google.doodle.sf;
            window.gapi.share.lightbox(a, {
                isLoggedInForGooglePlus: d,
                onLoginPopupBlocked: function() {
                    Cb("gplus,popupblocked")
                },
                onLoginStateChanged: u(function() {
                    ma("google.doodle.sf", !0);
                    this.W()
                }, this),
                editorText: this.ma,
                sessionIndex: c || "",
                sourceForLogging: "doodle"
            })
        }
    };
    var ze = function(a) {
            return 0 == a.indexOf("//") ? "https:" + a : a
        },
        Ae = function(a) {
            Cb(["share", a, "x"].join())
        };
    var Be = function(a, c, d) {
        if ("function" == da(a)) d && (a = u(a, d));
        else if (a && "function" == typeof a.handleEvent) a = u(a.handleEvent, a);
        else throw Error("i");
        return 2147483647 < c ? -1 : b.setTimeout(a, c || 0)
    };
    var Ce = function() {
        this.v = !1;
        this.s = this.o = null
    };
    r(Ce);
    var De = function(a, c) {
        a.v = !1;
        a.o = c;
        a.s = null
    };
    Ce.prototype.reset = function() {
        this.v && this.o && (A(this.o, "width", "", "height", ""), Bb(0), this.o.style.width = "", this.o.style.height = "");
        if (this.s) {
            var a = this.s;
            a && a.parentNode && a.parentNode.removeChild(a)
        }
        this.s = this.o = null;
        this.v = !1
    };
    var Ee = function(a, c, d, e) {
        if (a.o && $b && !a.v) {
            var f = a.o,
                g = document.getElementById("searchform");
            if (g) {
                var h = document.createElement("div");
                A(h, "height", Ab() ? "155px" : "130px", "position", "absolute", "top", "0", "width", "100%");
                g.appendChild(h);
                ve(c, h, "mousedown mouseup mousemove touchstart touchmove touchend".split(" "), d.handleEvent, d);
                d.oa.push(h);
                a.s = h
            }
            qb() && A(f.parentNode, "width", "100%");
            var k = f.offsetHeight,
                m = f.offsetWidth,
                l = Math.min(640, f.parentNode.clientWidth),
                p = l / (640 / 360),
                n = 0;
            c = C.$();
            a.v = !0;
            Hb(c,
                42,
                function() {
                    var a = 3 * n * n - 2 * n * n * n,
                        c = k + Math.min(1, Math.max(0, a)) * (p - k),
                        g = Math.max(0, c - 230) + (Ab() ? 36 : 12);
                    A(f, "width", m + Math.min(1, Math.max(0, a)) * (l - m) + "px", "height", c + "px");
                    Bb(g);
                    Ed(d, !1);
                    n += .15;
                    return 1 < n ? (e(), !1) : !0
                })
        }
    };
    var Fe = function(a, c, d, e) {
        this.s = a;
        this.o = c;
        this.width = d;
        this.height = e
    };
    Fe.prototype.clone = function() {
        return new Fe(this.s, this.o, this.width, this.height)
    };
    Fe.prototype.contains = function(a) {
        return a instanceof Fe ? this.s <= a.s && this.s + this.width >= a.s + a.width && this.o <= a.o && this.o + this.height >= a.o + a.height : a.x >= this.s && a.x <= this.s + this.width && a.y >= this.o && a.y <= this.o + this.height
    };
    Fe.prototype.floor = function() {
        this.s = Math.floor(this.s);
        this.o = Math.floor(this.o);
        this.width = Math.floor(this.width);
        this.height = Math.floor(this.height);
        return this
    };
    Fe.prototype.round = function() {
        this.s = Math.round(this.s);
        this.o = Math.round(this.o);
        this.width = Math.round(this.width);
        this.height = Math.round(this.height);
        return this
    };
    var Ge = function(a, c) {
        this.x = a;
        this.y = c
    };
    v(Ge, nc);
    Ge.prototype.clone = function() {
        return new Ge(this.x, this.y)
    };
    var He = function(a, c, d, e) {
        this.v = [a.clone(), c.clone()];
        var f = a.x - c.x;
        a = a.y - c.y;
        this.o = [Math.sqrt(f * f + a * a) / d];
        this.w = this.s = 0;
        this.N = [e || null]
    };
    var Ie = G.$(),
        M = function(a, c, d, e, f, g, h, k, m, l) {
            this.ka = a;
            this.x = c;
            this.y = d;
            this.s = void 0 === e ? 0 : e;
            this.N = void 0 === f ? 0 : f;
            this.ma = null;
            this.W = this.ka[3];
            this.oa = this.ka[4];
            this.Ql = void 0 === h ? this.W : h;
            this.ra = void 0 === k ? this.oa : k;
            this.tb = void 0 === m ? 0 : m;
            this.ub = void 0 === l ? 0 : l;
            this.na = new Fe(c + this.tb, d + this.ub, this.Ql, this.ra);
            this.U = g || !1;
            this.w = null;
            this.Fa = this.S = !1;
            this.Ma = 1
        },
        Je = function(a) {
            return a.x + a.W
        },
        Ke = function(a, c, d, e, f) {
            a.ma = new He(new Ge(a.x, a.y), new Ge(c, d), e, f)
        };
    M.prototype.O = function(a) {
        if (null != this.ma) {
            var c;
            c = this.ma;
            for (a = c.w + a; c.s < c.o.length && a >= c.o[c.s];) {
                a -= c.o[c.s];
                var d = c.N[c.s];
                null != d && d();
                c.s++
            }
            var e = c.s;
            c.w = a;
            if (e >= c.o.length) c = null;
            else {
                var d = c.v[e],
                    f = c.v[e + 1];
                c = a / c.o[e];
                c = new Ge(xa(d.x, f.x, c), xa(d.y, f.y, c))
            }
            null != c ? (this.x = c.x, this.y = c.y) : this.ma = null
        } else c = this.N * a, this.x += this.s * a, this.y += c, 0 < c && (c = gd - this.ra + 10, this.y >= c && (this.y = c, this.N = 0)), this.U && (this.N = Math.max(-.3, Math.min(this.vb(), this.N + 9.9E-4 * a)));
        this.na.s = this.x + this.tb;
        this.na.o =
            this.y + this.ub
    };
    M.prototype.vb = function() {
        return .6
    };
    M.prototype.qa = function() {
        this.N = this.s = 0;
        this.U = !1;
        this.ma = null
    };
    M.prototype.o = function(a, c) {
        var d = this.x - c.o,
            e = this.y - c.s;
        a.save();
        a.globalAlpha = this.Ma;
        Ie.o(this.ka, a, d, e);
        a.restore();
        Le(this)
    };
    var Le = function(a) {
        if (null != a.w) {
            var c = Me(a.w);
            a.ka = c
        }
    };
    M.prototype.Mc = function() {};
    M.prototype.$a = function() {};
    var Ne = function() {
        this.v = !0;
        this.s = 1;
        this.o = 0
    };
    r(Ne);
    var Oe = Ne.$(),
        N = function(a, c, d, e) {
            this.o = [a];
            this.O = [c];
            this.S = [d || -1];
            this.s = 0;
            this.v = 1;
            this.w = !1;
            this.N = e || null;
            this.P = Oe.o
        },
        Pe = function(a, c, d) {
            a.o.push(c);
            a.O.push(d);
            a.S.push(-1)
        },
        Me = function(a) {
            if (a.w) return a = a.o[a.o.length - 1], a[a.length - 1];
            var c = Math.floor((Oe.o - a.P) / a.O[a.s]) % a.o[a.s].length,
                d = a.o[a.s];
            c == d.length - 1 && (a.v == a.S[a.s] ? d == a.o[a.o.length - 1] ? (a.w = !0, null != a.N && a.N()) : (a.s++, a.v = 1) : a.v++);
            return d[c]
        };
    var Qe = function(a, c, d, e) {
        M.call(this, a, c, d);
        this.S = !0;
        this.va = e;
        this.v = null
    };
    v(Qe, M);
    Qe.prototype.$a = function() {
        if (null != this.v) {
            var a = this;
            this.w = new N(this.v, 70, 1, function() {
                a.Fa = !0
            })
        } else this.Fa = !0
    };
    var Re = function(a, c, d, e) {
        Qe.call(this, a, c, d, e);
        this.P = Gc
    };
    v(Re, Qe);
    var Se = function(a, c, d) {
        Re.call(this, I[a].Ra, c, d, Gc.Ya)
    };
    v(Se, Re);
    var Te = function(a, c, d) {
        Re.call(this, I[a].Ta, c, d, Ic.Ya);
        this.P = Ic;
        this.v = I[a].Bb
    };
    v(Te, Re);
    var Ue = function(a, c, d) {
        Re.call(this, I[a].Wa, c, d, Hc.Ya);
        this.P = Hc;
        this.v = I[a].Gb
    };
    v(Ue, Re);
    var O = function(a, c, d, e) {
        M.call(this, a, c, d);
        this.Rb = e;
        this.va = !1;
        this.S = !0
    };
    v(O, M);
    O.prototype.Mc = function(a) {
        !this.va && Math.sqrt(Math.pow(a.x - this.x, 2) + Math.pow(a.y - this.y, 2)) <= this.Rb && (this.va = !0, this.Ba(a), this.P())
    };
    O.prototype.P = ba;
    var Ve = function() {};
    Ve.prototype.o = null;
    var Xe = function(a) {
        var c;
        (c = a.o) || (c = {}, We(a) && (c[0] = !0, c[1] = !0), c = a.o = c);
        return c
    };
    var Ye, Ze = function() {};
    v(Ze, Ve);
    var $e = function(a) {
            return (a = We(a)) ? new ActiveXObject(a) : new XMLHttpRequest
        },
        We = function(a) {
            if (!a.s && "undefined" == typeof XMLHttpRequest && "undefined" != typeof ActiveXObject) {
                for (var c = ["MSXML2.XMLHTTP.6.0", "MSXML2.XMLHTTP.3.0", "MSXML2.XMLHTTP", "Microsoft.XMLHTTP"], d = 0; d < c.length; d++) {
                    var e = c[d];
                    try {
                        return new ActiveXObject(e), a.s = e
                    } catch (f) {}
                }
                throw Error("j");
            }
            return a.s
        };
    Ye = new Ze;
    var af = function(a) {
        K.call(this);
        this.tb = new x;
        this.ma = a || null;
        this.v = !1;
        this.ka = this.o = null;
        this.qa = "";
        this.w = this.oa = this.P = this.na = !1;
        this.va = 0;
        this.W = null;
        this.U = "";
        this.Fa = this.vb = !1
    };
    v(af, K);
    var bf = /^https?$/i,
        cf = ["POST", "PUT"];
    af.prototype.send = function(a, c, d, e) {
        if (this.o) throw Error("k`" + this.qa + "`" + a);
        c = c ? c.toUpperCase() : "GET";
        this.qa = a;
        this.na = !1;
        this.v = !0;
        this.o = this.ma ? $e(this.ma) : $e(Ye);
        this.ka = this.ma ? Xe(this.ma) : Xe(Ye);
        this.o.onreadystatechange = u(this.Ba, this);
        try {
            this.oa = !0, this.o.open(c, String(a), !0), this.oa = !1
        } catch (g) {
            df(this);
            return
        }
        a = d || "";
        var f = this.tb.clone();
        e && La(e, function(a, c) {
            Ga(f, c, a)
        });
        e = ta(f.Da());
        d = b.FormData && a instanceof b.FormData;
        !(0 <= qa(cf, c)) || e || d || Ga(f, "Content-Type", "application/x-www-form-urlencoded;charset=utf-8");
        f.forEach(function(a, c) {
            this.o.setRequestHeader(c, a)
        }, this);
        this.U && (this.o.responseType = this.U);
        Da(this.o) && (this.o.withCredentials = this.vb);
        try {
            ef(this), 0 < this.va && ((this.Fa = ff(this.o)) ? (this.o.timeout = this.va, this.o.ontimeout = u(this.O, this)) : this.W = Be(this.O, this.va, this)), this.P = !0, this.o.send(a), this.P = !1
        } catch (g) {
            df(this)
        }
    };
    var ff = function(a) {
            return E && F(9) && ga(a.timeout) && q(a.ontimeout)
        },
        sa = function(a) {
            return "content-type" == a.toLowerCase()
        };
    af.prototype.O = function() {
        "undefined" != typeof aa && this.o && (L(this, "timeout"), this.o && this.v && (this.v = !1, this.w = !0, this.o.abort(), this.w = !1, L(this, "complete"), L(this, "abort"), gf(this)))
    };
    var df = function(a) {
            a.v = !1;
            a.o && (a.w = !0, a.o.abort(), a.w = !1);
            hf(a);
            gf(a)
        },
        hf = function(a) {
            a.na || (a.na = !0, L(a, "complete"), L(a, "error"))
        };
    af.prototype.s = function() {
        this.o && (this.v && (this.v = !1, this.w = !0, this.o.abort(), this.w = !1), gf(this, !0));
        af.wa.s.call(this)
    };
    af.prototype.Ba = function() {
        this.S || (this.oa || this.P || this.w ? jf(this) : this.ub())
    };
    af.prototype.ub = function() {
        jf(this)
    };
    var jf = function(a) {
            if (a.v && "undefined" != typeof aa && (!a.ka[1] || 4 != (a.o ? a.o.readyState : 0) || 2 != kf(a)))
                if (a.P && 4 == (a.o ? a.o.readyState : 0)) Be(a.Ba, 0, a);
                else if (L(a, "readystatechange"), 4 == (a.o ? a.o.readyState : 0)) {
                a.v = !1;
                try {
                    var c = kf(a),
                        d;
                    a: switch (c) {
                        case 200:
                        case 201:
                        case 202:
                        case 204:
                        case 206:
                        case 304:
                        case 1223:
                            d = !0;
                            break a;
                        default:
                            d = !1
                    }
                    var e;
                    if (!(e = d)) {
                        var f;
                        if (f = 0 === c) {
                            var g = String(a.qa).match(Ma)[1] || null;
                            if (!g && b.self && b.self.location) var h = b.self.location.protocol,
                                g = h.substr(0, h.length - 1);
                            f = !bf.test(g ?
                                g.toLowerCase() : "")
                        }
                        e = f
                    }
                    e ? (L(a, "complete"), L(a, "success")) : hf(a)
                } finally {
                    gf(a)
                }
            }
        },
        gf = function(a, c) {
            if (a.o) {
                ef(a);
                var d = a.o,
                    e = a.ka[0] ? ba : null;
                a.o = null;
                a.ka = null;
                c || L(a, "ready");
                try {
                    d.onreadystatechange = e
                } catch (f) {}
            }
        },
        ef = function(a) {
            a.o && a.Fa && (a.o.ontimeout = null);
            ga(a.W) && (b.clearTimeout(a.W), a.W = null)
        },
        kf = function(a) {
            try {
                return 2 < (a.o ? a.o.readyState : 0) ? a.o.status : -1
            } catch (c) {
                return -1
            }
        },
        lf = function(a) {
            try {
                if (!a.o) return null;
                if ("response" in a.o) return a.o.response;
                switch (a.U) {
                    case "":
                    case "text":
                        return a.o.responseText;
                    case "arraybuffer":
                        if ("mozResponseArrayBuffer" in a.o) return a.o.mozResponseArrayBuffer
                }
                return null
            } catch (c) {
                return null
            }
        };
    var P = window.AudioContext || window.webkitAudioContext ? new(window.AudioContext || window.webkitAudioContext) : null,
        mf = P ? P.createGain() : null,
        nf = P && P.resume && P.suspend,
        of = !(!P || !mf && !nf),
        pf = function() {
            of && (nf ? P.suspend() : mf && (mf.gain.value = 0))
        },
        Q = function(a, c, d) {
            this.o = a;
            this.v = c;
            this.s = d
        },
        qf = function(a, c, d) {
            this.v = a;
            this.w = c;
            this.s = d;
            this.o = null
        },
        rf = function(a, c, d) {
            c = P.currentTime + (c || 0) / 1E3;
            a.o = P.createBufferSource();
            a.o.loop = !!d;
            a.o.buffer = a.v;
            mf ? (a.o.connect(mf), mf.connect(P.destination)) : a.o.connect(P.destination);
            a.o.playbackRate.value = 1;
            var e = a.w / 1E3,
                f = a.s / 1E3;
            d ? (a.o.loopStart = e, a.o.loopEnd = e + f, a.o.start(c, e)) : a.o.start(c, e, f)
        },
        sf = function(a, c) {
            var d;
            d = document.createElement("audio");
            d = "function" == da(d.canPlayType) && "" != d.canPlayType("audio/ogg");
            this.v = a + (d ? ".ogg" : ".mp3");
            this.s = c;
            this.o = {}
        };
    sf.prototype.load = function(a) {
        if (of) {
            var c = new af;
            c.U = "arraybuffer";
            var d = this;
            c.listen("complete", function() {
                var c = function(c) {
                    for (var e = 0; e < d.s.length; e++) {
                        var h = d.s[e];
                        d.o[h.o] = new qf(c, h.v, h.s)
                    }
                    a(d.o)
                };
                try {
                    P.decodeAudioData(lf(this), c)
                } catch (f) {}
            });
            c.send(this.v)
        }
    };
    var R = new sf("https://www.google.com.br/logos/2015/halloween15/fx", [new Q("ASCENDING_WHOOSH", 0, 886.871), new Q("BAT_FLAP_FLYBY", 1886.871, 2218.095), new Q("BAT_SQUEAK", 5104.966, 567.211), new Q("COLLECT_CANDY", 6672.177, 597.392), new Q("CROW_CALL", 8269.569, 1024.082), new Q("GHOST_HOWL", 10293.651, 2031.066), new Q("HIT_ENEMY", 13324.717, 818.798), new Q("HIT_GROUND", 15143.515, 918.209), new Q("JINGLE_BLUE_WITCH", 17061.723, 1702.358), new Q("JINGLE_GREEN_WITCH", 19764.082, 2405.057), new Q("JINGLE_RED_WITCH_V2", 23169.138, 2513.22), new Q("JINGLE_YELLOW_WITCH",
            26682.358, 1190.408), new Q("UI_COUNTDOWN", 28872.766, 1727.392), new Q("WIN_BEST", 31600.159, 5509.864), new Q("WIN_OK", 38110.023, 3773.832), new Q("WIN_ROTTEN", 42883.855, 4404.785)]),
        tf = new sf("https://www.google.com.br/logos/2015/halloween15/loops", [new Q("CAULDRON_LOOP", 0, 2909.093), new Q("LOOPED_INTRO", 3909.093, 8470.59), new Q("LOOPED_LOOP", 13379.683, 11294.127), new Q("SELECT_WITCH", 25673.81, 5998.776), new Q("TALLY-LOOP", 32672.585, 1250), new Q("UI_TALLY", 34922.585, 1090.907)]);
    var uf = function() {};
    r(uf);
    var vf = {
            pa: R,
            name: "ASCENDING_WHOOSH"
        },
        wf = {
            pa: R,
            name: "BAT_FLAP_FLYBY"
        },
        xf = {
            pa: R,
            name: "BAT_SQUEAK"
        },
        yf = {
            pa: tf,
            name: "CAULDRON_LOOP"
        },
        zf = {
            pa: R,
            name: "COLLECT_CANDY"
        },
        Af = {
            pa: R,
            name: "CROW_CALL"
        },
        Bf = {
            pa: R,
            name: "GHOST_HOWL"
        },
        Cf = {
            pa: R,
            name: "HIT_ENEMY"
        },
        Df = {
            pa: R,
            name: "HIT_GROUND"
        },
        Ef = {
            pa: tf,
            name: "LOOPED_INTRO"
        },
        Ff = {
            pa: tf,
            name: "LOOPED_LOOP"
        },
        Gf = {
            pa: tf,
            name: "SELECT_WITCH"
        },
        Hf = {
            pa: tf,
            name: "TALLY_LOOP"
        },
        If = {
            pa: R,
            name: "UI_COUNTDOWN"
        },
        Jf = {
            pa: tf,
            name: "UI_TALLY"
        },
        Kf = {
            pa: R,
            name: "WIN_BEST"
        },
        Lf = {
            pa: R,
            name: "WIN_OK"
        },
        Mf = {
            pa: R,
            name: "WIN_ROTTEN"
        },
        Nf = [{
            pa: R,
            name: "JINGLE_BLUE_WITCH"
        }, {
            pa: R,
            name: "JINGLE_GREEN_WITCH"
        }, {
            pa: R,
            name: "JINGLE_YELLOW_WITCH"
        }, {
            pa: R,
            name: "JINGLE_RED_WITCH_V2"
        }],
        Of = function(a) {
            R.load(ba);
            tf.load(a)
        },
        S = function(a, c, d) {
            (a = a.pa.o[a.name]) && rf(a, c || 0, d)
        },
        Qf = function() {
            Pf();
            var a = Ef.pa.o[Ef.name],
                c = Ff.pa.o[Ff.name];
            a && c && (rf(a), rf(c, a.s, !0))
        },
        Pf = function() {
            for (var a in tf.o) {
                var c = tf.o[a];
                if (c.o) try {
                    c.o.stop(0)
                } catch (d) {}
            }
        };
    uf.$();
    var Rf = function(a, c) {
        O.call(this, Uc[0], a, c, 640);
        this.w = new N(Uc, 125)
    };
    v(Rf, O);
    Rf.prototype.Ba = function() {
        this.s = -.2
    };
    Rf.prototype.$a = function() {
        this.s = 0
    };
    Rf.prototype.P = function() {
        S(xf);
        S(wf)
    };
    var Sf = function(a, c) {
        O.call(this, Vc[0], a, c, 480)
    };
    v(Sf, O);
    Sf.prototype.Ba = function(a) {
        Ke(this, a.x, a.y, .25);
        this.w = new N(Vc, 100, 1);
        Pe(this.w, Wc, 300)
    };
    Sf.prototype.P = function() {
        S(Af)
    };
    var Tf = function(a, c) {
        O.call(this, Xc[0], a, c, 320);
        this.w = new N(Xc, 168);
        this.v = this.Ma = 0
    };
    v(Tf, O);
    Tf.prototype.O = function(a) {
        Tf.wa.O.call(this, a);
        this.va && (this.v -= a, this.Ma = 0 >= this.v ? 1 : xa(this.Ma, 1, a / this.v))
    };
    Tf.prototype.Ba = function(a) {
        Ke(this, this.x, a.y, .1);
        a = this.ma;
        for (var c = 0, d = 0; d < a.o.length; d++) c += a.o[d];
        this.v = c
    };
    Tf.prototype.P = function() {
        S(Bf)
    };
    var Uf = function(a) {
        this.o = a;
        this.s = this.o[this.o.length - 1][1] + 70
    };
    var Vf = [new Uf([
        [H.Ia, 13, 491],
        [H.sm, 115, 392],
        [H.R, 122, 302],
        [H.R, 176, 304],
        [H.R, 230, 306],
        [H.R, 282, 306],
        [H.R, 332, 306],
        [H.R, 380, 292],
        [H.R, 416, 268],
        [H.Vb, 417, 375],
        [H.R, 458, 244],
        [H.R, 496, 226],
        [H.R, 534, 201],
        [H.R, 582, 187],
        [H.Vb, 604, 372],
        [H.R, 638, 198],
        [H.R, 680, 224],
        [H.R, 708, 258],
        [H.R, 736, 290],
        [H.R, 758, 326],
        [H.Ha, 782, 278],
        [H.R, 786, 360],
        [H.Ia, 795, 492],
        [H.Ub, 885, 414],
        [H.R, 902, 306],
        [H.Ia, 949, 492],
        [H.R, 998, 358],
        [H.R, 1028, 332],
        [H.Vb, 1046, 372],
        [H.R, 1058, 304],
        [H.R, 1098, 278],
        [H.R, 1154, 284],
        [H.Ha, 1190, 192],
        [H.R, 1196,
            310
        ],
        [H.Ia, 1229, 492],
        [H.R, 1232, 340],
        [H.R, 1272, 368],
        [H.Zc, 1303, 146],
        [H.R, 1318, 392],
        [H.R, 1372, 398],
        [H.R, 1422, 384],
        [H.R, 1464, 360],
        [H.Ia, 1470, 490],
        [H.R, 1494, 328],
        [H.R, 1522, 292],
        [H.Ub, 1542, 418],
        [H.R, 1546, 256],
        [H.R, 1574, 222],
        [H.Ia, 1588, 490],
        [H.Ha, 1592, 288],
        [H.R, 1600, 186],
        [H.R, 1634, 150],
        [H.Zc, 1660, 150],
        [H.R, 1680, 124],
        [H.R, 1734, 110],
        [H.R, 1790, 126],
        [H.Ia, 1827, 490],
        [H.R, 1834, 154],
        [H.Ha, 1842, 84],
        [H.R, 1862, 192],
        [H.R, 1884, 230],
        [H.R, 1902, 268],
        [H.R, 1922, 304],
        [H.Ia, 1937, 490],
        [H.R, 1944, 340],
        [H.R, 1964, 374],
        [H.R, 2012,
            358
        ],
        [H.Ub, 2033, 414],
        [H.R, 2050, 330],
        [H.R, 2102, 356],
        [H.Qb, 2105, 475],
        [H.An, 2133, 55],
        [H.R, 2144, 386],
        [H.Qb, 2145, 474],
        [H.gn, 2187, 427],
        [H.R, 2190, 410],
        [H.R, 2238, 392],
        [H.R, 2270, 364],
        [H.qb, 2286, 382],
        [H.R, 2306, 344],
        [H.qb, 2328, 381],
        [H.qb, 2328, 381],
        [H.R, 2346, 322],
        [H.Mm, 2371, 178],
        [H.R, 2396, 318],
        [H.Ha, 2408, 174],
        [H.R, 2446, 346],
        [H.R, 2498, 344],
        [H.R, 2554, 344],
        [H.R, 2608, 344],
        [H.R, 2678, 294],
        [H.R, 2706, 320],
        [H.R, 2708, 268],
        [H.R, 2736, 292],
        [H.qb, 2742, 382],
        [H.R, 2768, 318],
        [H.R, 2768, 268],
        [H.qb, 2785, 381],
        [H.R, 2794, 292],
        [H.R,
            2826, 266
        ],
        [H.R, 2826, 316],
        [H.ud, 2828, 455],
        [H.R, 2856, 292],
        [H.Ha, 2914, 342],
        [H.Qb, 2917, 474],
        [H.Qb, 2955, 473]
    ]), new Uf([
        [H.$c, 10, 358],
        [H.T, 51, 265],
        [H.Rn, 95, 213],
        [H.T, 109, 238],
        [H.T, 171, 226],
        [H.T, 230, 241],
        [H.T, 286, 265],
        [H.T, 353, 235],
        [H.wp, 376, 193],
        [H.Xa, 534, 328],
        [H.T, 576, 192],
        [H.T, 628, 159],
        [H.Xa, 660, 328],
        [H.T, 682, 141],
        [H.T, 729, 158],
        [H.Ea, 746, 264],
        [H.T, 770, 183],
        [H.Xa, 774, 326],
        [H.T, 798, 215],
        [H.T, 844, 190],
        [H.T, 888, 158],
        [H.T, 934, 142],
        [H.T, 970, 156],
        [H.T, 998, 182],
        [H.T, 1020, 216],
        [H.T, 1040, 248],
        [H.T, 1056, 286],
        [H.T,
            1076, 326
        ],
        [H.Xa, 1106, 330],
        [H.T, 1136, 408],
        [H.T, 1216, 408],
        [H.Xa, 1239, 331],
        [H.T, 1306, 406],
        [H.Xa, 1364, 328],
        [H.T, 1392, 406],
        [H.Ea, 1404, 192],
        [H.Ea, 1436, 256],
        [H.T, 1666, 386],
        [H.ap, 1668, 312],
        [H.T, 1692, 408],
        [H.T, 1732, 412],
        [H.Ea, 1752, 256],
        [H.T, 1778, 404],
        [H.T, 1814, 366],
        [H.T, 1850, 320],
        [H.Oo, 1886, 312],
        [H.T, 1894, 279],
        [H.T, 1945, 251],
        [H.T, 1994, 235],
        [H.T, 2039, 248],
        [H.T, 2084, 264],
        [H.T, 2126, 240],
        [H.$c, 2128, 356],
        [H.T, 2164, 206],
        [H.T, 2205, 187],
        [H.ko, 2218, 214],
        [H.Ea, 2228, 284],
        [H.T, 2246, 174],
        [H.T, 2290, 172],
        [H.T, 2332, 190],
        [H.T, 2358, 228],
        [H.T, 2384, 270],
        [H.T, 2406, 308],
        [H.T, 2430, 342],
        [H.T, 2460, 368],
        [H.rb, 2468, 114],
        [H.T, 2498, 380],
        [H.T, 2536, 370],
        [H.Ea, 2570, 60],
        [H.T, 2576, 344],
        [H.Mp, 2618, 360],
        [H.T, 2618, 324],
        [H.T, 2656, 304],
        [H.Ea, 2690, 184],
        [H.T, 2776, 246],
        [H.T, 2777, 295],
        [H.cq, 2800, 360],
        [H.T, 2818, 247],
        [H.T, 2820, 295],
        [H.T, 2860, 246],
        [H.T, 2863, 296],
        [H.T, 2901, 246],
        [H.T, 2905, 296]
    ]), new Uf([
        [H.ta, 18, 442],
        [H.V, 68, 270],
        [H.ta, 80, 442],
        [H.ya, 100, 402],
        [H.V, 124, 256],
        [H.Ca, 158, 408],
        [H.fd, 166, 288],
        [H.ya, 176, 2],
        [H.V, 180, 242],
        [H.V, 236, 222],
        [H.V,
            290, 202
        ],
        [H.hd, 300, 222],
        [H.V, 336, 160],
        [H.V, 388, 150],
        [H.V, 438, 154],
        [H.Ca, 446, 409],
        [H.rb, 462, 100],
        [H.V, 474, 180],
        [H.ta, 594, 442],
        [H.Wb, 664, 342],
        [H.ta, 708, 442],
        [H.V, 720, 352],
        [H.V, 760, 292],
        [H.ta, 774, 442],
        [H.ya, 792, 412],
        [H.V, 800, 232],
        [H.ad, 822, 274],
        [H.V, 866, 198],
        [H.V, 926, 232],
        [H.V, 956, 290],
        [H.ta, 974, 442],
        [H.V, 984, 352],
        [H.ta, 1038, 442],
        [H.V, 1042, 366],
        [H.ya, 1048, -6],
        [H.Ca, 1102, 408],
        [H.rb, 1116, 102],
        [H.V, 1148, 232],
        [H.V, 1190, 166],
        [H.V, 1244, 102],
        [H.V, 1298, 54],
        [H.Wb, 1330, 342],
        [H.ya, 1344, 220],
        [H.V, 1364, 26],
        [H.Ca,
            1380, 408
        ],
        [H.V, 1422, 60],
        [H.Ca, 1450, 408],
        [H.V, 1458, 114],
        [H.V, 1486, 178],
        [H.V, 1516, 236],
        [H.V, 1552, 294],
        [H.ta, 1558, 442],
        [H.V, 1598, 340],
        [H.ta, 1618, 442],
        [H.V, 1655, 278],
        [H.ta, 1678, 442],
        [H.hd, 1682, 224],
        [H.Ca, 1850, 408],
        [H.ya, 1878, 414],
        [H.V, 1898, 212],
        [H.Ca, 1920, 408],
        [H.V, 1933, 259],
        [H.ya, 1968, 20],
        [H.V, 1994, 212],
        [H.V, 2025, 261],
        [H.Wb, 2034, 344],
        [H.ya, 2050, 406],
        [H.V, 2090, 214],
        [H.ta, 2098, 442],
        [H.fd, 2120, 294],
        [H.ta, 2162, 442],
        [H.rb, 2248, 108],
        [H.ya, 2350, 10],
        [H.Ca, 2374, 408],
        [H.ta, 2490, 442],
        [H.V, 2518, 230],
        [H.V, 2528, 164],
        [H.Ca, 2556, 408],
        [H.V, 2574, 220],
        [H.V, 2582, 154],
        [H.V, 2630, 212],
        [H.Ca, 2632, 408],
        [H.V, 2634, 146],
        [H.V, 2684, 204],
        [H.V, 2684, 136],
        [H.ta, 2704, 442],
        [H.ya, 2732, 406],
        [H.V, 2740, 126],
        [H.V, 2742, 192],
        [H.V, 2794, 182],
        [H.V, 2796, 118],
        [H.ta, 2804, 442],
        [H.ad, 2846, 274],
        [H.V, 2850, 170],
        [H.V, 2850, 108],
        [H.V, 2902, 102],
        [H.V, 2904, 168]
    ])];
    var Wf = Ne.$(),
        Xf = G.$(),
        Yf = function(a, c, d) {
            M.call(this, a, c, d);
            this.v = 0
        };
    v(Yf, M);
    Yf.prototype.o = function(a, c) {
        var d = 0;
        0 != this.v && (d = Math.min(1, Math.max(0, (Wf.o - this.v) / 1E3)), d = 1 - Math.pow(1 - d, 3));
        var d = d * (461 - this.y),
            e = this.x,
            f, e = e - c.o;
        f = 461 - d - c.s;
        var g = this.W;
        a.save();
        a.globalAlpha = this.Ma;
        a.beginPath();
        a.moveTo(e, f);
        a.lineTo(e + g, f);
        a.lineTo(e + g, f + d);
        a.lineTo(e, f + d);
        a.lineTo(e, f);
        a.closePath();
        a.clip();
        Xf.o(this.ka, a, e, f);
        a.restore();
        Le(this)
    };
    var Zf = Ne.$(),
        $f = G.$(),
        ag = function() {
            this.s = [];
            this.v = 640;
            this.w = [];
            for (var a = 0; a < Vf.length; a++) this.w.push(0);
            this.U = 3;
            this.P = md;
            this.S = nd;
            this.O = od;
            this.na = md;
            this.ma = nd;
            this.ka = od;
            this.N = 0;
            this.oa = !1;
            this.W = [];
            this.qa = []
        },
        bg = function(a, c) {
            c = Math.max(1, Math.min(Vf.length, c));
            if (0 == a.w[c - 1]) {
                var d, e = 0;
                d = Math.max(0, Math.min(Vf.length, c));
                for (var f = 0; f < d; f++) e += Vf[f].s;
                a.w[c - 1] = e - 70
            }
            return a.w[c - 1]
        },
        cg = function(a) {
            a.ra = new M(H.gu, a.v + 25, 249);
            a.s.push(a.ra);
            for (var c = wb("score", {}), d = c.rate || [1, 1, 1,
                    1
                ], e = c.time || 144599042E4, f = c.total || [0, 0, 0, 0], c = [0, 0, 0, 0], g = (Date.now() - e) / 1E3, h = I.length, k = 0; k < h; ++k) ga(d[k]) && ga(e) && ga(f[k]) && (c[k] = Math.round(Math.max(0, f[k] + g * d[k])));
            d = Math.max.apply(null, c);
            k = Math.min.apply(null, c);
            e = 0;
            k < d && (e = k);
            for (k = 0; k < h; ++k) c[k] = Math.min(1, .3 + .7 * (c[k] - e) / (d - e));
            a.qa = [];
            for (h = 0; d = I[h]; h++) {
                e = d.kb;
                k = e.x + a.v;
                a.s.push(new M(H.Im, k + 12, 444));
                f = new M(e.ob[0], k + 25, 448);
                f.w = new N(e.ob, 100);
                a.s.push(f);
                f = new Yf(e.pb[0], k + 22, 254 + (1 - c[h]) * kd);
                f.w = new N(e.pb, 100);
                a.s.push(f);
                a.qa.push(f);
                if (d == I[a.U])
                    for (a.W = [new M(d.Ra, k + 30, 352), new M(d.Wa, k + 20, 362), new M(d.Ta, k + 40, 352)], d = 0; e = a.W[d++];) {
						debugger;
						e.Ma = 0, a.s.push(e);
					}
                a.s.push(new M(H.qd, k, 451));
                k = new M(ld[0], k + 30, 507);
                k.w = new N(ld, 100);
                a.s.push(k)
            }
        },
        dg = function(a) {
            for (var c = 0; c < a.W.length; c++)
                if (0 < Zf.w[Kc[c].Sa]) {
                    var d = a.W[c];
                    d.Ma = 1;
                    d.U = !0
                }
        },
        eg = function(a) {
            for (var c = 0, d; d = a.qa[c++];) d.v = Wf.o
        },
        fg = function(a) {
            if (a.oa)
                if (a.N -= 24, 0 >= a.N) {
                    var c = a.ma,
                        d = a.ka;
                    a.P = a.na;
                    a.S = c;
                    a.O = d;
                    a.oa = !1
                } else {
                    var c = 24 / a.N,
                        d = zc(a.S, a.ma, c),
                        e = zc(a.O, a.ka, c);
                    a.P = zc(a.P,
                        a.na, c);
                    a.S = d;
                    a.O = e
                }
            for (c = 0; c < a.s.length; c++) a.s[c].Fa ? (a.s.splice(c, 1), c--) : a.s[c].O(24)
        };
    ag.prototype.o = function(a, c) {
        var d = a.createLinearGradient(0, 0 - c.s, 0, 360);
        d.addColorStop(0, Ac(this.P));
        d.addColorStop(.5, Ac(this.S));
        d.addColorStop(1, Ac(this.O));
        a.fillStyle = d;
        a.fillRect(0, 0, 640, 360);
        gg(a, c, jd, -c.s, 6);
        gg(a, c, id, 120 - c.s, 4);
        gg(a, c, hd, 180 - c.s, 3);
        var d = 0,
            e = this.w.length - 1;
        if (this.w[0])
            for (; c.o > this.w[d] && d < e;) d++;
        var f = gd - c.s;
        gg(a, c, ed[d], f, 1);
        if (0 < d && d < e && (e = (c.o + 640 - this.w[d] + fd) / fd, 0 < e)) {
            var g = a.globalAlpha;
            a.globalAlpha = e;
            gg(a, c, ed[d + 1], f, 1);
            a.globalAlpha = g
        }
        for (d = 0; d < this.s.length; d++) this.s[d].o(a,
            c)
    };
    var gg = function(a, c, d, e, f) {
        if (0 != f) {
            var g = d[3] - 1;
            for (c = -(c.o % (g * f) / f); 640 > c; c += g) $f.o(d, a, c, e)
        }
    };
    ag.prototype.reset = function() {
        this.s = [];
        this.v = 640;
        this.P = md;
        this.S = nd;
        this.O = od
    };
    var hg = function() {};
    r(hg);
    hg.prototype.reset = ba;
    hg.prototype.log = function(a, c, d) {
        var e = la(),
            f = e - this.o;
        this.o = e;
        e = window.document;
        e = "CSS1Compat" == e.compatMode ? e.documentElement : e.body;
        e = new Jd(e.clientWidth, e.clientHeight);
        e = e.width > e.height;
        Cb(["halloween15", "a:" + a, "tm:" + (null != c ? c : "_"), "cs:" + (d || 0), "dt:" + f, "t:" + (q(nb) ? nb ? "1" : "0" : "_"), "w:" + (q(e) ? e ? "1" : "0" : "_"), "o:" + ("orientation" in window ? parseInt(window.orientation, 10) : "_")].join())
    };
    var ig = Ne.$(),
        jg = function(a, c, d, e, f, g, h, k, m) {
            M.call(this, a, c, d, e, f, !0, g, h, k, m);
            this.Ba = c;
            this.Rb = d;
            this.v = this.P = 0
        };
    v(jg, M);
    jg.prototype.O = function(a) {
        jg.wa.O.call(this, 24);
        if (0 < this.P) switch (this.P -= a, this.v) {
            case 0:
                kg(this);
                break;
            case 1:
                2E3 > this.P && (this.v = 4);
                break;
            case 2:
                this.s = .2;
                break;
            case 3:
                .8 > this.s ? this.s += .05 : this.v = 1;
                break;
            case 4:
                .35 < this.s - .025 ? this.s -= .025 : kg(this);
                break;
            case 5:
                this.s = 0;
                250 < this.y && (this.N = -.15);
                break;
            case 7:
                this.s = 0;
                break;
            case 6:
                this.s = .1
        } else 3 == this.v ? (this.P = 2500, this.v = 3) : 5 == this.v || 6 == this.v ? (ig.v = !0, this.v = 8, this.P = 500, this.s = .35) : kg(this)
    };
    jg.prototype.vb = function() {
        return 6 == this.v ? .35 : .6
    };
    jg.prototype.qa = function() {
        jg.wa.qa.call(this);
        this.v = 7
    };
    var kg = function(a) {
            a.v = 0;
            a.P = 0;
            a.s = .35;
            a.S = !0
        },
        lg = function(a) {
            a.N = Math.max(-.3, Math.min(.6, a.N + -2)); - 90 > a.y && (a.N = Math.max(0, a.N))
        };
    jg.prototype.reset = function() {
        this.x = this.Ba;
        this.y = this.Rb;
        this.s = .35;
        this.v = this.N = 0
    };
    var mg = function(a, c) {
            var d = I[ig.s],
                e = new N(c ? d.Cb : d.Fb, 42, 1);
            Pe(e, d.Va, 42);
            a.w = e
        },
        ng = function(a) {
            a.w = a.va
        };
    var T = Ne.$(),
        pg = hg.$(),
        qg = G.$(),
        U = Zb.$();
    uf.$();
    var rg = function() {
        this.N = xd.$();
        this.O = 0;
        this.w = 3E3;
        this.o = -1;
        this.S = 0
    };
    r(rg);
    var tg = function() {
            var a = sg;
            a.s = new jg(dd, 0, 251, .35, 0, 53, 72, 32, 37);
            a.v = new ag;
            a.O = 0;
            a.w = 3E3;
            a.o = rb() ? 1 : 0;
            a.S = 0;
            pg.s = la();
            pg.o = pg.s;
            T.v = !0;
            T.s = 1;
            T.o = 0;
            T.w = [0, 0, 0]
        },
        ug = function(a) {
            var c = a.s;
            c.na.o + c.ra >= gd && (a.s.S && S(Df), a = a.s, 0 == a.v && mg(a, !0), a.v = 5, a.P = 800, a.S = !1, T.v = !1)
        },
        xg = function(a) {
            0 < a.w && (a.w -= 24, (0 == a.o || 1 == a.o ? 0 > a.w : 0 >= a.w) && vg(a, function() {
                vg(a, ba, a.o + 1);
                wg(a)
            }))
        },
        zg = function(a) {
            a.w -= 24;
            0 >= a.w && yg(a)
        },
        Ag = function(a) {
            pg.log(1);
            Of(function() {
                if (0 == a.o || 1 == a.o) Pf(), S(Gf, 0, !0)
            });
            Nc && sb()
        },
        wg = function(a) {
            var c =
                T.s;
            0 == a.o ? Ag(a) : 1 == a.o ? (pg.log(2, c), Qf()) : 3 == a.o ? (Pf(), c = Lf, 200 > a.O ? c = Mf : 400 <= a.O && (c = Kf), S(c)) : 4 == a.o ? pg.log(3, c, a.O) : 5 == a.o ? (S(Jf), Pf()) : 6 == a.o ? (Pf(), S(yf, 0, !0)) : 8 == a.o ? (Pf(), T.v = !0) : 9 == a.o && (pg.log(4, c), S(Nf[c]), Qf());
            9 > a.o ? (a.o += 1, Bg(a, a.o)) : (pg.reset(), a.v.reset(), a.s.reset(), Ad(a.N, a.s, .1 * a.s.W, 180 - a.s.oa / 2, .2), c = a.N, c.o = c.v.x - c.w, c.s = c.v.y - c.N, a.O = 0, a.o = 2, Cg(a))
        },
        vg = function(a, c, d) {
            var e = q(d) ? d : a.o,
                f = Dg(a, e);
            if (f && f.length) {
                var g = 0;
                d = 0;
                for (var h; h = f[d]; d++) vc(qg, h, function() {
                    g++;
                    g == f.length &&
                        a.o == e && c()
                })
            } else c()
        },
        Dg = function(a, c) {
            var d = T.s,
                d = 1 <= a.o ? I[d] : null;
            return 0 == c ? [1] : 1 == c ? [2, null != d ? d.nb : void 0] : 3 == c ? [15] : 4 == c ? null != d ? [d.lb] : [] : null
        },
        yg = function(a) {
            1 != a.o && 0 != a.o && vg(a, function() {
                vg(a, ba, a.o + 1);
                wg(a)
            })
        },
        Bg = function(a, c) {
            var d = T.s;
            2 == c ? (a.w = 6E3, Cg(a), a.s.U = !1) : 3 == c ? (a.s.U = !0, d = I[d], vc(qg, 15), vc(qg, d.lb), vc(qg, d.mb[0])) : 4 == a.o ? (a.v.v = zd(a.N), Ke(a.s, zd(a.N), 81, .7, function() {
                a.s.qa();
                var c = a.s,
                    d = a.O,
                    g = I[ig.s],
                    h = g.mb;
                200 > d ? h = g.Mb : 400 <= d && (h = g.Eb);
                uc(Cc, h[0]).s && (d = new N(h, 42, 1), Pe(d, [h[h.length - 1]], 42), c.w = d);
                yg(a)
            })) : 5 == a.o ? (a.w = 4E3, a.v.v = zd(a.N), cg(a.v)) : 6 == a.o ? (ng(a.s), Ke(a.s, I[d].kb.x + 10 + a.v.v, 280, .7, function() {
                a.s.qa();
                a.w = 3E3;
                yg(a)
            }), d = a.v.ra, Ad(a.N, d, (640 - d.W) / 2 - 10, (360 - d.oa) / 2 - 10, .05)) : 7 == a.o ? (a.w = 1E3, dg(a.v)) : 8 == a.o && (a.w = 3E3, eg(a.v))
        },
        Cg = function(a) {
            a.S = a.s.x + 6E3 * a.s.s;
            a.v.v = a.S;
            for (var c = 0; c < Vf.length; c++) {
                for (var d = a.v, e = Vf[c], f = 0; f < e.o.length; f++) {
                    var g = e.o[f][0],
                        h = d.v + e.o[f][1],
                        k = e.o[f][2];
                    g == H.R || g == H.nc || g == H.Pc || g == H.Cc ? d.s.push(new Se(d.U, h, k)) : g == H.V || g == H.oc ||
                        g == H.mc || g == H.Dc ? d.s.push(new Te(d.U, h, k)) : g == H.T || g == H.tc || g == H.Vc || g == H.Hc ? d.s.push(new Ue(d.U, h, k)) : g == H.Ha ? d.s.push(new Rf(h, k)) : g == H.Ea ? d.s.push(new Sf(h, k)) : g == H.ya ? d.s.push(new Tf(h, k)) : d.s.push(new M(g, h, k))
                }
                d.v += e.s
            }
        },
        Eg = function(a) {
            var c = V;
            T.s = a;
            var d = c.s,
                e = I[a];
            d.ka = e.Va[0];
            d.va = new N(e.Va, 42);
            d.w = d.va;
            c.v.U = a;
            c.w = 2E3;
            vc(qg, I[a].nb);
            Pf();
            S(Nf[a])
        };
    var Hg = function(a) {
            this.w = a;
            this.s = this.w.length / 4;
            this.N = this.s + 6;
            this.v = [
                [],
                [],
                [],
                []
            ];
            this.O = [
                [],
                [],
                [],
                []
            ];
            this.o = Array(4 * (this.N + 1));
            for (a = 0; a < this.s; a++) this.o[a] = [this.w[4 * a], this.w[4 * a + 1], this.w[4 * a + 2], this.w[4 * a + 3]];
            var c = Array(4);
            for (a = this.s; a < 4 * (this.N + 1); a++) {
                c[0] = this.o[a - 1][0];
                c[1] = this.o[a - 1][1];
                c[2] = this.o[a - 1][2];
                c[3] = this.o[a - 1][3];
                if (0 == a % this.s) {
                    var d = c,
                        e = d[0];
                    d[0] = d[1];
                    d[1] = d[2];
                    d[2] = d[3];
                    d[3] = e;
                    Fg(c);
                    c[0] ^= Gg[a / this.s][0];
                    c[1] ^= Gg[a / this.s][1];
                    c[2] ^= Gg[a / this.s][2];
                    c[3] ^= Gg[a /
                        this.s][3]
                } else 6 < this.s && 4 == a % this.s && Fg(c);
                this.o[a] = Array(4);
                this.o[a][0] = this.o[a - this.s][0] ^ c[0];
                this.o[a][1] = this.o[a - this.s][1] ^ c[1];
                this.o[a][2] = this.o[a - this.s][2] ^ c[2];
                this.o[a][3] = this.o[a - this.s][3] ^ c[3]
            }
        },
        Ig = function(a, c) {
            for (var d = 0; 4 > d; d++)
                for (var e = 0; 4 > e; e++) a.v[d][e] ^= a.o[4 * c + e][d]
        },
        Kg = function(a) {
            for (var c = Jg, d = 0; 4 > d; d++)
                for (var e = 0; 4 > e; e++) a.v[d][e] = c[a.v[d][e]]
        },
        Lg = function(a) {
            for (var c = 1; 4 > c; c++)
                for (var d = 0; 4 > d; d++) a.O[c][d] = a.v[c][d];
            for (c = 1; 4 > c; c++)
                for (d = 0; 4 > d; d++) a.v[c][d] =
                    a.O[c][(d + c) % 4]
        },
        Fg = function(a) {
            a[0] = Jg[a[0]];
            a[1] = Jg[a[1]];
            a[2] = Jg[a[2]];
            a[3] = Jg[a[3]]
        },
        Jg = [99, 124, 119, 123, 242, 107, 111, 197, 48, 1, 103, 43, 254, 215, 171, 118, 202, 130, 201, 125, 250, 89, 71, 240, 173, 212, 162, 175, 156, 164, 114, 192, 183, 253, 147, 38, 54, 63, 247, 204, 52, 165, 229, 241, 113, 216, 49, 21, 4, 199, 35, 195, 24, 150, 5, 154, 7, 18, 128, 226, 235, 39, 178, 117, 9, 131, 44, 26, 27, 110, 90, 160, 82, 59, 214, 179, 41, 227, 47, 132, 83, 209, 0, 237, 32, 252, 177, 91, 106, 203, 190, 57, 74, 76, 88, 207, 208, 239, 170, 251, 67, 77, 51, 133, 69, 249, 2, 127, 80, 60, 159, 168, 81, 163, 64,
            143, 146, 157, 56, 245, 188, 182, 218, 33, 16, 255, 243, 210, 205, 12, 19, 236, 95, 151, 68, 23, 196, 167, 126, 61, 100, 93, 25, 115, 96, 129, 79, 220, 34, 42, 144, 136, 70, 238, 184, 20, 222, 94, 11, 219, 224, 50, 58, 10, 73, 6, 36, 92, 194, 211, 172, 98, 145, 149, 228, 121, 231, 200, 55, 109, 141, 213, 78, 169, 108, 86, 244, 234, 101, 122, 174, 8, 186, 120, 37, 46, 28, 166, 180, 198, 232, 221, 116, 31, 75, 189, 139, 138, 112, 62, 181, 102, 72, 3, 246, 14, 97, 53, 87, 185, 134, 193, 29, 158, 225, 248, 152, 17, 105, 217, 142, 148, 155, 30, 135, 233, 206, 85, 40, 223, 140, 161, 137, 13, 191, 230, 66, 104, 65, 153, 45, 15, 176, 84, 187,
            22
        ],
        Gg = [
            [0, 0, 0, 0],
            [1, 0, 0, 0],
            [2, 0, 0, 0],
            [4, 0, 0, 0],
            [8, 0, 0, 0],
            [16, 0, 0, 0],
            [32, 0, 0, 0],
            [64, 0, 0, 0],
            [128, 0, 0, 0],
            [27, 0, 0, 0],
            [54, 0, 0, 0]
        ],
        Mg = [0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24, 26, 28, 30, 32, 34, 36, 38, 40, 42, 44, 46, 48, 50, 52, 54, 56, 58, 60, 62, 64, 66, 68, 70, 72, 74, 76, 78, 80, 82, 84, 86, 88, 90, 92, 94, 96, 98, 100, 102, 104, 106, 108, 110, 112, 114, 116, 118, 120, 122, 124, 126, 128, 130, 132, 134, 136, 138, 140, 142, 144, 146, 148, 150, 152, 154, 156, 158, 160, 162, 164, 166, 168, 170, 172, 174, 176, 178, 180, 182, 184, 186, 188, 190, 192, 194, 196, 198, 200, 202, 204, 206, 208, 210, 212,
            214, 216, 218, 220, 222, 224, 226, 228, 230, 232, 234, 236, 238, 240, 242, 244, 246, 248, 250, 252, 254, 27, 25, 31, 29, 19, 17, 23, 21, 11, 9, 15, 13, 3, 1, 7, 5, 59, 57, 63, 61, 51, 49, 55, 53, 43, 41, 47, 45, 35, 33, 39, 37, 91, 89, 95, 93, 83, 81, 87, 85, 75, 73, 79, 77, 67, 65, 71, 69, 123, 121, 127, 125, 115, 113, 119, 117, 107, 105, 111, 109, 99, 97, 103, 101, 155, 153, 159, 157, 147, 145, 151, 149, 139, 137, 143, 141, 131, 129, 135, 133, 187, 185, 191, 189, 179, 177, 183, 181, 171, 169, 175, 173, 163, 161, 167, 165, 219, 217, 223, 221, 211, 209, 215, 213, 203, 201, 207, 205, 195, 193, 199, 197, 251, 249, 255, 253, 243, 241,
            247, 245, 235, 233, 239, 237, 227, 225, 231, 229
        ],
        Ng = [0, 3, 6, 5, 12, 15, 10, 9, 24, 27, 30, 29, 20, 23, 18, 17, 48, 51, 54, 53, 60, 63, 58, 57, 40, 43, 46, 45, 36, 39, 34, 33, 96, 99, 102, 101, 108, 111, 106, 105, 120, 123, 126, 125, 116, 119, 114, 113, 80, 83, 86, 85, 92, 95, 90, 89, 72, 75, 78, 77, 68, 71, 66, 65, 192, 195, 198, 197, 204, 207, 202, 201, 216, 219, 222, 221, 212, 215, 210, 209, 240, 243, 246, 245, 252, 255, 250, 249, 232, 235, 238, 237, 228, 231, 226, 225, 160, 163, 166, 165, 172, 175, 170, 169, 184, 187, 190, 189, 180, 183, 178, 177, 144, 147, 150, 149, 156, 159, 154, 153, 136, 139, 142, 141, 132, 135, 130, 129,
            155, 152, 157, 158, 151, 148, 145, 146, 131, 128, 133, 134, 143, 140, 137, 138, 171, 168, 173, 174, 167, 164, 161, 162, 179, 176, 181, 182, 191, 188, 185, 186, 251, 248, 253, 254, 247, 244, 241, 242, 227, 224, 229, 230, 239, 236, 233, 234, 203, 200, 205, 206, 199, 196, 193, 194, 211, 208, 213, 214, 223, 220, 217, 218, 91, 88, 93, 94, 87, 84, 81, 82, 67, 64, 69, 70, 79, 76, 73, 74, 107, 104, 109, 110, 103, 100, 97, 98, 115, 112, 117, 118, 127, 124, 121, 122, 59, 56, 61, 62, 55, 52, 49, 50, 35, 32, 37, 38, 47, 44, 41, 42, 11, 8, 13, 14, 7, 4, 1, 2, 19, 16, 21, 22, 31, 28, 25, 26
        ];
    var Og = null,
        Pg = null;
    var Qg = function(a) {
        this.Pn = a
    };
    var Rg = 0,
        Sg = 0,
        Tg = function(a) {
            var c = 0 > a;
            a = Math.abs(a);
            var d = a >>> 0;
            a = Math.floor((a - d) / 4294967296);
            a >>>= 0;
            c && (a = ~a >>> 0, d = (~d >>> 0) + 1, 4294967295 < d && (d = 0, a++, 4294967295 < a && (a = 0)));
            Rg = d;
            Sg = a
        };
    var Ug = function() {
        this.Ua = []
    };
    Ug.prototype.reset = function() {
        this.Ua = []
    };
    var Vg = function(a) {
            for (var c = Rg, d = Sg; 0 < d || 127 < c;) a.Ua.push(c & 127 | 128), c = (c >>> 7 | d << 25) >>> 0, d >>>= 7;
            a.Ua.push(c)
        },
        Wg = function(a, c, d) {
            if (null != d) {
                Tg(8 * (c >>> 0) + 2);
                Vg(a);
                c = [];
                for (var e = 0, f = 0; f < d.length; f++) {
                    var g = d.charCodeAt(f);
                    128 > g ? c[e++] = g : (2048 > g ? c[e++] = g >> 6 | 192 : (c[e++] = g >> 12 | 224, c[e++] = g >> 6 & 63 | 128), c[e++] = g & 63 | 128)
                }
                Tg(c.length);
                Vg(a);
                a.Ua = a.Ua.concat(c)
            }
        };
    var Xg = function() {
        this.o = this.s = this.v = null
    };
    var Yg = function(a, c) {
        var d = new Ug,
            e = new Xg;
        e.v = a;
        e.s = c;
        e.o = "";
        Wg(d, 1, e.v);
        Wg(d, 2, e.s);
        Wg(d, 3, e.o);
        for (var d = new Uint8Array(d.Ua), e = [], f = 0, g = 0; 26 > g; g++) {
            for (var h = "window.console.log18611201".charCodeAt(g); 255 < h;) e[f++] = h & 255, h >>= 8;
            e[f++] = h
        }
        for (; 32 > e.length;) e.push(128);
        e = new Qg(new Hg(e));
        f = [];
        for (g = 0; g < d.length; g++) f.push(d[g]);
        for (; f.length % 16;) f.push(128);
        for (var d = [], k, g = [], h = 0; 16 > h; h++) g[h] = 0;
        k = g;
        for (g = 0; g < f.length; g += 16) {
            for (var h = wa(f, g, g + 16), m = [], l = 0; l < h.length; l++) m.push(h[l] ^ k[l]);
            k = h = e.Pn;
            for (var p = void 0, p = void 0, l = 0; 4 > l; l++)
                for (var n = 0; 4 > n; n++) p = 4 * n + l, p = m[p], k.v[l][n] = p;
            Ig(h, 0);
            for (k = 1; k < h.N; ++k) {
                Kg(h);
                Lg(h);
                m = h.v;
                l = h.O[0];
                for (n = 0; 4 > n; n++) l[0] = m[0][n], l[1] = m[1][n], l[2] = m[2][n], l[3] = m[3][n], m[0][n] = Mg[l[0]] ^ Ng[l[1]] ^ l[2] ^ l[3], m[1][n] = l[0] ^ Mg[l[1]] ^ Ng[l[2]] ^ l[3], m[2][n] = l[0] ^ l[1] ^ Mg[l[2]] ^ Ng[l[3]], m[3][n] = Ng[l[0]] ^ l[1] ^ l[2] ^ Mg[l[3]];
                Ig(h, k)
            }
            Kg(h);
            Lg(h);
            Ig(h, h.N);
            k = [];
            for (m = 0; 4 > m; m++)
                for (l = 0; 4 > l; l++) k[4 * l + m] = h.v[m][l];
            h = k;
            va(d, h);
            k = h
        }
        if (!Og)
            for (Og = {}, Pg = {}, e = 0; 65 > e; e++) Og[e] = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".charAt(e),
                Pg[e] = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_.".charAt(e);
        e = Pg;
        f = [];
        for (g = 0; g < d.length; g += 3) n = d[g], p = (h = g + 1 < d.length) ? d[g + 1] : 0, l = (k = g + 2 < d.length) ? d[g + 2] : 0, m = n >> 2, n = (n & 3) << 4 | p >> 4, p = (p & 15) << 2 | l >> 6, l = l & 63, k || (l = 64, h || (p = 64)), f.push(e[m], e[n], e[p], e[l]);
        return f.join("")
    };
    var Zg = function(a) {
        var c = wb("share_images", []);
        return c && ea(c) ? c[a] : ""
    };
    var fc = Zb.$(),
        V = rg.$(),
        $g = Ne.$(),
        ah = hg.$();
    uf.$();
    G.$();
    var bh = function(a) {
        this.s = a;
        this.o = 0;
        this.v = document.getElementsByTagName("input")
    };
    bh.prototype.handleEvent = function(a) {
        var c;
        if (c = a && a.N) c = me(a.o) || 38 == a.o || 40 == a.o || 39 == a.o || 37 == a.o ? !0 : !1;
        if (c) {
            c = a.N();
            var d = c.keyCode,
                e;
            if (e = d) {
                if (d = 32 == d) {
                    a: {
                        for (d = 0; e = this.v[d++];)
                            if ("q" == e.name && e.value.match(/[^ ]/)) {
                                d = !0;
                                break a
                            }
                        d = !1
                    }
                    d = !d
                }
                e = d
            }
            if (e) {
                if (d = "keydown" == a.type) this.o++, d = 1 >= this.o;
                d ? (this.s(), c.preventDefault && c.preventDefault()) : "keyup" == a.type && (this.o = 0)
            }
        }
    };
    var gh = function() {
            var a = W,
                c = ch,
                d = dh,
                e = eh;
            this.w = sg.s;
            this.o = new Cd(a, c, d);
            this.v = e;
            this.P = c;
            var f = this;
            this.S = new bh(function() {
                fh(f)
            });
            this.N = new se(this);
            this.N.listen(c, "mousedown mouseup mousemove touchstart touchend touchmove".split(" "), function(a) {
                f.o.handleEvent(a)
            }, !0);
            this.N.listen(a, "touchstart", function() {
                var a = fc;
                a.oa && (a.P ? (cc.call(document), a.P = !1) : a.S.call(a.w))
            });
            ve(this.N, window, ["keydown", "keyup"], this.S.handleEvent, this.S);
            this.O = -1;
            this.s = [];
            ec(fc, c, a, a.getContext("2d"), this.N,
                function(a) {
                    Ed(f.o, a)
                });
            $b && De(Ce.$(), c);
            Gd(this.o, qc(wd, 0, vd[3], vd[4]), gc())
        },
        kh = function(a, c, d) {
            if ($g.v) {
                var e = V.o;
                "mousedown" == c ? 0 == e ? (a.P.title = "", $b ? Ee(Ce.$(), a.N, a.o, function() {
                    V.w = 500;
                    hh(a.v)
                }) : (V.w = 500, hh(a.v))) : 1 == e && void 0 != d ? -1 == a.v.O && (ih(a.v, d), Eg(d), yg(V)) : 2 == e || 3 == e ? fh(a) : 9 == e && yg(V) : !nb && 1 == e && null != d && ("mouseover" == c || "mousemove" == c ? jh(a.v, d, !0) : "mouseout" == c && jh(a.v, d, !1))
            }
        },
        fh = function(a) {
            var c = V.o;
            3 == c ? (a.w.U || (a.w.U = !0), lg(a.w), S(vf)) : 2 == c && (lg(a.w), a.w.U = !0, S(vf))
        },
        lh = function(a) {
            for (var c =
                    0; c < a.s.length; c++) {
                for (var d = a.o, e = a.s[c], f = d.w.length - 1; 0 <= f; f--) d.w[f].o === e && d.w.splice(f, 1);
                d.o && e === d.o.o && (d.o = null, Id(d));
                d.s && e === d.s.o && (d.s = null);
                Hd(d, "areamove", d.O, d.S)
            }
        },
        mh = function(a) {
            Gd(a.o, Pc, function(c) {
                kh(a, c);
                "mousedown" == c && lh(a)
            });
            a.s.push(Pc)
        },
        nh = function(a, c) {
            var d = c.Ja[0],
                d = qc(c.Ka, c.La, d[3], d[4]);
            Gd(a.o, d, function(d) {
                kh(a, d, c.Pb)
            });
            a.s.push(d)
        },
        oh = function(a) {
            Gd(a.o, Dd, function(c) {
                kh(a, c)
            });
            a.s.push(Dd)
        },
        ph = function(a, c, d, e, f) {
            c = qc(d, e, c[3], c[4]);
            Gd(a.o, c, function(a) {
                "mouseup" ==
                a && f()
            });
            a.s.push(c)
        },
        qh = function(a) {
            ph(a, H.uc, Rc, 103, function() {
                yg(V)
            });
            ph(a, H.vc, Sc, 103, function() {
                ah.log(5);
                var a = google.doodle ? google.doodle.url : "";
                a && vb(a)
            });
            "en" == B && !mb && ph(a, H.Wc, 511, 103, function() {
                ah.log(6);
                vb(Tc)
            });
            var c = $g.s,
                d = Bc(I[c].Kb),
                e = Zg(c),
                f = wb("shortlink", "http://www.google.com/?doodle=18611201"),
                g = "http://www.google.com/?doodle=18611201_" + Yg(d, Zg(c));
            mb ? ph(a, H.Xc, 390, 214, function() {
                window.location = "http://www.google.com/doodles/_SHARE?description=" + encodeURIComponent(String(d)) +
                    "&url=" + encodeURIComponent(String(f))
            }) : (ph(a, H.Nc, 464, 214, function() {
                var a = g,
                    a = ze(a),
                    c = new y("http://www.facebook.com/sharer.php"),
                    d = new z;
                $a(d, "u", a);
                Qa(c, d);
                window.open(c.toString());
                Ae(2)
            }), ph(a, H.Oc, 354, 214, function() {
                var a = g,
                    a = ze(a);
                (new xe(a, window.google.doodle.alt || "", d, e)).P()
            }), ph(a, H.Bc, 409, 214, function() {
                var a = f,
                    a = ze(a);
                window.open("http://twitter.com/intent/tweet?status=" + encodeURIComponent(String(d + "\n" + a)));
                Ae(3)
            }), ph(a, H.Lc, 520, 214, function() {
                Ae(5);
                var a = window.location,
                    c = f,
                    c = ze(c),
                    e = {
                        subject: xb,
                        body: d + "\n" + c
                    },
                    c = new z,
                    g;
                for (g in e) $a(c, g, e[g]);
                g = new y("mailto:");
                Qa(g, c);
                a.href = g.toString()
            }))
        };
    var rh = G.$();
    uf.$();
    var X = function(a, c, d, e, f, g) {
        this.S = a;
        this.P = c;
        this.N = d;
        this.ra = e;
        this.na = f;
        this.w = [0];
        this.v = 1;
        this.O = !1;
        this.U = 0;
        this.oa = void 0 === g ? 1.5 : g;
        this.s = new sh(this.N)
    };
    X.prototype.W = function(a) {
        null != a && this.o(a);
        a = this.s;
        if (a.s) {
            if (a.o < a.v) {
                a.w += 24;
                var c = Math.min(1, a.w / a.O);
                c--;
                a.o = (a.v - a.N) * (c * c * c + 1) + a.N
            } else a.s = !1;
            a = a.o
        } else a = null;
        null != a && this.o(a)
    };
    X.prototype.o = function(a) {
        this.N != a && (this.ka(a) && (this.O = !0, this.U = .1), this.N = a, this.w = yc(this.N))
    };
    X.prototype.ka = function() {
        return th(this.s)
    };
    var vh = function(a) {
            for (var c = 0, d = 0; d < a.w.length; d++) {
                var e = a.ra[a.w[d]],
                    c = a.S + 30 * d;
                a.O && uh(a);
                rh.o(e, a.na, c, a.P, a.v, !0)
            }
        },
        uh = function(a) {
            a.v += a.U;
            a.v >= a.oa ? (a.v = a.oa, a.U = -.1) : 1 >= a.v && (a.v = 1, a.O = !1)
        },
        sh = function(a) {
            this.v = a;
            this.s = !1;
            this.o = a;
            this.w = 0;
            this.O = 1500
        },
        th = function(a) {
            return a.o == a.N || a.o == a.v
        },
        wh = function(a, c, d, e, f, g) {
            X.call(this, a, c, d, e, f, g);
            this.qa = this.ma = !1
        };
    v(wh, X);
    wh.prototype.ka = function(a) {
        return this.s.s ? th(this.s) : 0 == a % 10
    };
    wh.prototype.W = function(a) {
        wh.wa.W.call(this, a);
        !this.ma || this.qa || this.s.s || (Pf(), S(Jf, 0), this.qa = !0)
    };
    var xh = function(a, c, d, e, f, g) {
        X.call(this, a, c, d, e, f, g);
        this.ma = -1
    };
    v(xh, X);
    xh.prototype.o = function(a) {
        xh.wa.o.call(this, a);
        a = Math.floor(a);
        a != this.ma && (S(If), this.ma = a)
    };
    xh.prototype.ka = function(a) {
        return this.s.s ? th(this.s) : 5 >= a
    };
    var Y = Ne.$(),
        Z = G.$();
    Zb.$();
    var Ah = function() {
            this.o = yh;
            this.s = xd.$();
            this.S = rg.$();
            this.v = this.S.s;
            this.P = this.S.v;
            Ad(this.s, this.v, .1 * this.v.W, 180 - this.v.oa / 2, .2);
            this.Fa = new N(nb ? Lc : Mc, 50);
            this.N = new wh(Fc, 27, 0, Yc, this.o);
            this.qa = new X(Gc.Oa, Gc.Pa, 0, Yc, this.o);
            this.Ba = new X(Hc.Oa, Hc.Pa, 0, Yc, this.o);
            this.ra = new X(Ic.Oa, Ic.Pa, 0, Yc, this.o);
            this.w = [this.qa, this.Ba, this.ra];
            this.na = new xh(320, 180, 0, Zc, this.o, 1.2);
            this.O = this.oa = -1;
            this.ma = 0;
            this.ka = -1;
            this.W = this.U = 0;
            this.va = new zh
        },
        Bh = function(a, c, d, e) {
            var f = Y.s,
                g = I[f].Ra;
            c ==
                Hc ? g = I[f].Wa : c == Ic ? g = I[f].Ta : c == Jc && (g = I[f].yb);
            Z.o(g, a.o, d + 30, e, 1, !0)
        },
        hh = function(a) {
            a.U || (a.U = Y.o)
        },
        ih = function(a, c) {
            a.O = c;
            a.ma || (a.ma = Y.o)
        },
        jh = function(a, c, d) {
            if (d || a.ka == c) a.ka = d ? c : null
        },
        Ch = function(a, c) {
            var d = a.o;
            c && (a.W = 0);
            a.W += .1;
            d.globalAlpha = Math.min(1, a.W);
            Z.o(H.Kc, d, 9, 4);
            d.font = Oc;
            d.fillStyle = "white";
            d.textAlign = "center";
            d.fillText(Bc("End Screen Title (Score tally)"), 320, 46, 435);
            d.globalAlpha = 1
        },
        zh = function() {
            this.s = [H.Ud, H.oe, H.He, H.$e, H.vf, H.Of, H.fg, H.yg, H.Qg, H.ih, H.Bh, H.Th];
            this.v = !qb()
        };
    zh.prototype.o = function(a) {
        a.clearRect(0, 0, 640, 360);
        var c = Y.o;
        Z.o(this.s[this.v ? Math.floor(c / 250) % this.s.length : 0], a, 223, 37)
    };
    var Dh = G.$(),
        ch = null,
        W = null,
        yh = null,
        dh = null,
        eh = null,
        Eh = null,
        sg = null,
        Gh = function() {
            Kb();
            Hb(C.$(), 24, Fh)
        },
        Fh = function() {
            var a = eh,
                c = a.o,
                d = a.S.o,
                e;
            a.oa == d ? e = !1 : (a.oa = d, e = !0);
            if (0 == d) d = Y.o - a.U, a.o.clearRect(0, 0, 640, 360), a.va.o(a.o), a.o.globalAlpha = a.U ? Math.min(1, Math.max(0, d / 500)) : 0, a.o.fillStyle = "#fff", a.o.fillRect(0, 0, 640, 360), a.o.globalAlpha = 1;
            else if (1 == d) {
                var d = a.o,
                    f = e = Y.o,
                    g = a.U + 500,
                    g = rb() ? 1 : Math.min(1, (f - g) / 500);
                d.globalAlpha = g;
                d.fillStyle = "#280331";
                d.fillRect(0, 0, 640, 360);
                var h = "#4f3d7a",
                    k = "Prompt to user (Team pick screen)"; - 1 != a.O && (k = I[a.O], h = k.Qa, k = k.Jb);
                d.fillStyle = h;
                d.fillRect(0, 0, 640, 57);
                d.font = Oc;
                d.fillStyle = "white";
                d.textAlign = "center";
                d.fillText(Bc(k), 320, 40, 640);
                for (h = 0; h < I.length; h++) {
                    var k = I[h],
                        m = H.Ku,
                        l = k.Ja,
                        p = 0; - 1 != a.O ? a.O == h ? (m = k.Nb, p = Math.floor(Math.min(l.length - 1, Math.max(0, (f - a.ma) / 24)))) : d.globalAlpha = .8 * g : a.ka != h && (d.globalAlpha = .85 * g);
                    Z.o(l[p], d, k.Ka, k.La);
                    d.globalAlpha = g;
                    var l = k.Ja[0][3],
                        p = k.Ja[0][4],
                        n = k.Ka,
                        ja = k.La;
                    if (-1 == a.O) d.save(), d.beginPath(), d.moveTo(n, ja), d.lineTo(n + l, ja), d.lineTo(n + l, ja +
                        p), d.lineTo(n, ja + p), d.lineTo(n, ja), d.closePath(), d.clip(), d.globalCompositeOperation = "overlay", p = H.wc[3], Z.o(H.wc, d, k.Ka - p + .7 * e % (2 * (l + 2 * p)), k.La - 40), d.restore();
                    else if (a.O == h) {
                        var ca = .3 * e % l,
                            ca = d.createLinearGradient(n - l + ca, ja, n + l + ca, ja);
                        ca.addColorStop(0, "#fff");
                        ca.addColorStop(.25, k.Qa);
                        ca.addColorStop(.5, "#fff");
                        ca.addColorStop(.75, k.Qa);
                        ca.addColorStop(1, "#fff");
                        d.fillStyle = ca;
                        d.fillRect(n, ja + p - 21, l, 21)
                    }
                    Z.o(m, d, k.Hb, k.Ib)
                }
                Z.o(H.Kc, d, 10, 293);
                d.fillStyle = "white";
                d.fillText(Bc("Game Title (Team pick screen)"),
                    320, 336, 435);
                d.globalAlpha = 1
            } else if (2 == d || 3 == d) {
                a.o.clearRect(0, 0, 640, 360);
                if (e)
                    for (a.N.o(0), e = 0; e < a.w.length; e++) a.w[e].o(0), Y.w = [0, 0, 0];
                a.P.o(a.o, a.s);
                a.v.o(a.o, a.s);
                Z.o(Ec, a.o, Fc - 12, 21);
                Bh(a, Jc, Fc - 8, 26);
                3 == a.S.o && a.N.o(a.S.O);
                e = a.N;
                e.S = Fc;
                e.P = 27;
                e = a.N;
                for (g = f = 0; g < e.w.length; g++) k = e.ra[e.w[g]], f = e.S + 30 * (g - e.w.length), e.O && uh(e), rh.o(k, e.na, f, e.P, e.v, !0);
                2 == d && (d = Math.floor(a.S.w / 1E3), 3 < d ? (d = Me(a.Fa), Z.o(d, a.o, 415, 130)) : 3 >= d && 0 < d && (a.na.o(d), vh(a.na)))
            } else if (4 == d) e && (Y.v = !1), a.P.o(a.o, a.s), a.v.o(a.o,
                a.s);
            else if (5 == d) {
                a.P.o(c, a.s);
                if (e) {
                    a.N.o(a.S.O);
                    d = a.N;
                    e = a.N.N;
                    d.S = 425;
                    d.P = 290;
                    d.o(e);
                    e = d.s;
                    f = d.N;
                    e.s = !0;
                    e.o = 0;
                    e.w = 0;
                    e.v = f;
                    e.N = 0;
                    e.O = 1500;
                    d.ma || (S(Hf, 0, !0), S(Jf, 0, !0), d.ma = !0);
                    for (d = 0; d < a.w.length; d++) a.w[d].o(Y.w[Kc[d].Sa]);
                    Y.v = !0
                }
                for (d = 0; d < a.w.length; d++) e = Kc[d], Bh(a, e, e.ab, e.jb);
                Bh(a, Jc, Jc.ab, Jc.jb);
                for (d = 0; d < a.w.length; d++) e = Kc[d].Oa + 35 * a.w[d].w.length + -12, f = e + 30, g = Kc[d].Pa + -6, Z.o(Ec, a.o, e, g), Z.o(Kc[d].Lb, a.o, f, g, .5);
                Z.o(Dc, a.o, 370, 278);
                a.o.fillRect(325, 258, 220, 3);
                for (d = 0; d < a.w.length; d++) vh(a.w[d]);
                a.N.W();
                vh(a.N);
                a.v.o(c, a.s)
            } else 6 == d ? (a.P.o(c, a.s), a.v.o(c, a.s)) : 7 == d ? (a.P.o(c, a.s), a.v.o(c, a.s), Ch(a, e)) : 8 == d ? (a.P.o(c, a.s), a.v.o(c, a.s), Ch(a, !1)) : 9 == d && (a.P.o(c, a.s), a.v.o(c, a.s), Ch(a, !1), a = a.o, a.fillStyle = "#000", a.globalAlpha = .5, a.fillRect(0, 0, 640, 360), a.globalAlpha = 1, Z.o(I[Y.s].Ob, a, 59, 62), Z.o(H.uc, a, Rc, 103), Z.o(H.vc, a, Sc, 103), "en" == B && !mb && Z.o(H.Wc, a, 511, 103), mb ? Z.o(H.Xc, a, 390, 214) : (Z.o(H.Oc, a, 354, 214), Z.o(H.Nc, a, 464, 214), Z.o(H.Bc, a, 409, 214), Z.o(H.Lc, a, 520, 214)));
            null != document[bc] && Z.o(vd,
                c, wd, 0);
            c = sg;
            ac && (a = U.w, g = U.W, d = null != document[bc], k = window.innerWidth, f = k / window.innerHeight, U.O = d ? 1 >= f : !1, h = U.N, e = !1, window.innerWidth != U.ma || window.innerHeight != U.ka || d != U.U) && (d ? U.O ? (a.width = U.o, a.height = U.s, g.setTransform(1, 0, 0, 1, 0, 0), g.translate(U.o, 0), g.rotate(Math.PI / 2), e = !0) : (a.width = U.s, a.height = U.o, g.setTransform(1, 0, 0, 1, 0, 0)) : U.U && (a.width = U.s, a.height = U.o, g.setTransform(1, 0, 0, 1, 0, 0)), document.body.clientWidth > k && 0 < k && A(document.body, "width", k + "px"), A(h, "height", "100%", "width", "100%"),
                g = U.O ? 1 / U.v : U.v, f > g ? (f = window.innerHeight, k = Math.round(f * g)) : (k = window.innerWidth, f = Math.round(k / g)), A(a, "height", f + "px", "width", k + "px"), U.na(e), U.ma = window.innerWidth, U.ka = window.innerHeight, U.U = d);
            T.o += 24;
            if (1 == c.o || 0 == c.o) xg(c);
            else if (2 == c.o) null != c.w && (c.w -= 24), Le(c.s), c.s.O(24), ug(c), Bd(c.N);
            else if (3 == c.o) {
                a = c.s.x - c.S;
                d = bg(c.v, 1);
                e = bg(c.v, 2);
                f = bg(c.v, 3);
                a > f ? yg(c) : a > e ? (a = c.v, a.na = sd, a.ma = td, a.ka = ud, a.oa = !0, a.N = 500) : a > d && (a = c.v, a.na = pd, a.ma = qd, a.ka = rd, a.oa = !0, a.N = 1500);
                Le(c.s);
                c.s.O(24);
                a = c.v;
                d = c.N;
                for (e = 0; 0 < a.s.length && Je(a.s[0]) < d.o;) a.s.splice(0, 1), e++;
                fg(c.v);
                Bd(c.N);
                if (c.s.S)
                    for (a = 0; a < c.v.s.length; a++) {
                        d = c.v.s[a];
                        d.Mc(c.s);
                        if (e = d.S) e = c.s.na, f = d.na, e = e.s <= f.s + f.width && f.s <= e.s + e.width && e.o <= f.o + f.height && f.o <= e.o + e.height;
                        if (e)
                            if (e = d, f = c.s, e.S && (e.S = !1, e.$a(f)), d instanceof Qe) c.O += d.va, d instanceof Re && (T.w[d.P.Sa]++, S(zf));
                            else if (d instanceof O) {
                            T.v = !1;
                            d = c.s;
                            switch (d.v) {
                                case 8:
                                case 6:
                                case 5:
                                    break;
                                default:
                                    ig.v = !1, d.v = 6, d.P = 800, d.N = -.5, mg(d, !1)
                            }
                            d.S = !1;
                            S(Cf)
                        }
                    }
                ug(c)
            } else 4 == c.o ? (c.s.O(24),
                fg(c.v), Bd(c.N)) : 5 == c.o ? zg(c) : 6 == c.o ? (c.s.O(24), fg(c.v), Bd(c.N)) : 7 == c.o ? (fg(c.v), Bd(c.N), zg(c)) : 8 == c.o && (c.s.O(24), zg(c));
            c = Eh;
            a = V.o;
            if (a != c.O) c.O = a, lh(c), 0 == a ? mh(c) : 2 == a ? oh(c) : 1 == a ? (nh(c, $c), nh(c, ad), nh(c, bd), nh(c, cd)) : 3 == a ? oh(c) : 9 == a && qh(c);
            else {
                if (c = 2 == a) c = 0 >= V.w;
                c && yg(V)
            }
            return !0
        },
        Hh = function() {
            var a = C.$();
            a.W = !0;
            a.o = 0;
            a.w = 0;
            pf()
        },
        Ih = function() {
            Kb();
            of && (nf ? P.resume() : mf && (mf.gain.value = 1))
        };
    (function(a, c, d) {
        var e = function() {
                a();
                window.lol && window.lol()
            },
            f = function() {
                mc(e, c, d);
                lc(e, c);
                e()
            };
        google && google.x ? google.x({
            id: "DOODLE"
        }, f) : f()
    })(function() {
        if (ch = document.getElementById("hplogo")) W = document.createElement("canvas"), W.width = 640, W.height = 360, W.getContext && (yh = W.getContext("2d"), ch.appendChild(W), dh = new jc(24E4, Hh, Ih), sg = rg.$(), tg(), wc = xd.$(), yd(), eh = new Ah, Eh = new gh, rb() ? (vc(Dh, 0), vc(Dh, 1, function() {
            vc(Dh, 0, Gh)
        }), Ag(sg)) : vc(Dh, 0, Gh))
    }, function() {
        pf();
        for (var a = G.$(), c = 0, d; d = a.s[c]; c++) d.v = [];
        C.$().reset();
        Zb.$().reset();
        Ce.$().reset();
        na(eh);
        na(Eh);
        dh && (dh.jc(), dh = null);
        W && W.parentNode && (W.parentNode.removeChild(W), W = null)
    });
})();
