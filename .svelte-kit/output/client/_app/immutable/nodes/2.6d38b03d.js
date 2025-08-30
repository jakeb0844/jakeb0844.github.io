import {
  s as K,
  d as B,
  c as Z,
  e as $,
  f as H,
  h as he,
  u as de,
  i as me,
  j as _e,
  q as ee,
  n as z,
  o as pe,
} from "../chunks/scheduler.f361f0d6.js";
import {
  S as Q,
  i as Y,
  r as U,
  u as W,
  v as F,
  d as T,
  t as j,
  w as X,
  e as te,
  a as D,
  p as ve,
  b as be,
  f as d,
  g as y,
  s as S,
  h as C,
  c as x,
  j as I,
  k as h,
  m as V,
  n as R,
  y as w,
  o as L,
  G as A,
  I as ke,
  H as we,
  C as ye,
  l as J,
} from "../chunks/index.4f6c82e9.js";
import { g as Ce, a as De, t as le } from "../chunks/bundle-mjs.127fa181.js";
import { F as Ie } from "../chunks/Frame.321f75c8.js";
import { e as re } from "../chunks/each.68ac915f.js";
function Ee(a) {
  let e;
  const t = a[10].default,
    l = he(t, a, a[16], null);
  return {
    c() {
      l && l.c();
    },
    l(r) {
      l && l.l(r);
    },
    m(r, s) {
      l && l.m(r, s), (e = !0);
    },
    p(r, s) {
      l &&
        l.p &&
        (!e || s & 65536) &&
        de(l, t, r, r[16], e ? _e(t, r[16], s, null) : me(r[16]), null);
    },
    i(r) {
      e || (T(l, r), (e = !0));
    },
    o(r) {
      j(l, r), (e = !1);
    },
    d(r) {
      l && l.d(r);
    },
  };
}
function Se(a) {
  let e, t, l, r, s;
  const n = a[10].default,
    c = he(n, a, a[16], null);
  return {
    c() {
      (e = y("img")), (l = S()), (r = y("div")), c && c.c(), this.h();
    },
    l(i) {
      (e = C(i, "IMG", { class: !0, src: !0, alt: !0 })),
        (l = x(i)),
        (r = C(i, "DIV", { class: !0 }));
      var o = I(r);
      c && c.l(o), o.forEach(d), this.h();
    },
    h() {
      h(e, "class", a[4]),
        ee(e.src, (t = a[1])) || h(e, "src", t),
        h(e, "alt", ""),
        h(r, "class", a[2]);
    },
    m(i, o) {
      D(i, e, o), D(i, l, o), D(i, r, o), c && c.m(r, null), (s = !0);
    },
    p(i, o) {
      (!s || o & 16) && h(e, "class", i[4]),
        (!s || (o & 2 && !ee(e.src, (t = i[1])))) && h(e, "src", t),
        c &&
          c.p &&
          (!s || o & 65536) &&
          de(c, n, i, i[16], s ? _e(n, i[16], o, null) : me(i[16]), null),
        (!s || o & 4) && h(r, "class", i[2]);
    },
    i(i) {
      s || (T(c, i), (s = !0));
    },
    o(i) {
      j(c, i), (s = !1);
    },
    d(i) {
      i && (d(e), d(l), d(r)), c && c.d(i);
    },
  };
}
function xe(a) {
  let e, t, l, r;
  const s = [Se, Ee],
    n = [];
  function c(i, o) {
    return i[1] ? 0 : 1;
  }
  return (
    (e = c(a)),
    (t = n[e] = s[e](a)),
    {
      c() {
        t.c(), (l = te());
      },
      l(i) {
        t.l(i), (l = te());
      },
      m(i, o) {
        n[e].m(i, o), D(i, l, o), (r = !0);
      },
      p(i, o) {
        let f = e;
        (e = c(i)),
          e === f
            ? n[e].p(i, o)
            : (ve(),
              j(n[f], 1, 1, () => {
                n[f] = null;
              }),
              be(),
              (t = n[e]),
              t ? t.p(i, o) : ((t = n[e] = s[e](i)), t.c()),
              T(t, 1),
              t.m(l.parentNode, l));
      },
      i(i) {
        r || (T(t), (r = !0));
      },
      o(i) {
        j(t), (r = !1);
      },
      d(i) {
        i && d(l), n[e].d(i);
      },
    }
  );
}
function Te(a) {
  let e, t;
  const l = [
    { tag: a[0] ? "a" : "div" },
    { rounded: !0 },
    { shadow: !0 },
    { border: !0 },
    { href: a[0] },
    a[5],
    { class: a[3] },
  ];
  let r = { $$slots: { default: [xe] }, $$scope: { ctx: a } };
  for (let s = 0; s < l.length; s += 1) r = B(r, l[s]);
  return (
    (e = new Ie({ props: r })),
    e.$on("click", a[11]),
    e.$on("focusin", a[12]),
    e.$on("focusout", a[13]),
    e.$on("mouseenter", a[14]),
    e.$on("mouseleave", a[15]),
    {
      c() {
        U(e.$$.fragment);
      },
      l(s) {
        W(e.$$.fragment, s);
      },
      m(s, n) {
        F(e, s, n), (t = !0);
      },
      p(s, [n]) {
        const c =
          n & 41
            ? Ce(l, [
                n & 1 && { tag: s[0] ? "a" : "div" },
                l[1],
                l[2],
                l[3],
                n & 1 && { href: s[0] },
                n & 32 && De(s[5]),
                n & 8 && { class: s[3] },
              ])
            : {};
        n & 65558 && (c.$$scope = { dirty: n, ctx: s }), e.$set(c);
      },
      i(s) {
        t || (T(e.$$.fragment, s), (t = !0));
      },
      o(s) {
        j(e.$$.fragment, s), (t = !1);
      },
      d(s) {
        X(e, s);
      },
    }
  );
}
function je(a, e, t) {
  const l = ["href", "horizontal", "reverse", "img", "padding", "size"];
  let r = Z(e, l),
    { $$slots: s = {}, $$scope: n } = e,
    { href: c = void 0 } = e,
    { horizontal: i = !1 } = e,
    { reverse: o = !1 } = e,
    { img: f = void 0 } = e,
    { padding: m = "lg" } = e,
    { size: p = "sm" } = e;
  const E = {
      none: "",
      xs: "p-2",
      sm: "p-4",
      md: "p-4 sm:p-5",
      lg: "p-4 sm:p-6",
      xl: "p-4 sm:p-8",
    },
    k = {
      none: "",
      xs: "max-w-xs",
      sm: "max-w-sm",
      md: "max-w-xl",
      lg: "max-w-2xl",
      xl: "max-w-screen-xl",
    };
  let u, _, g;
  function v(b) {
    H.call(this, a, b);
  }
  function P(b) {
    H.call(this, a, b);
  }
  function M(b) {
    H.call(this, a, b);
  }
  function q(b) {
    H.call(this, a, b);
  }
  function ge(b) {
    H.call(this, a, b);
  }
  return (
    (a.$$set = (b) => {
      t(19, (e = B(B({}, e), $(b)))),
        t(5, (r = Z(e, l))),
        "href" in b && t(0, (c = b.href)),
        "horizontal" in b && t(6, (i = b.horizontal)),
        "reverse" in b && t(7, (o = b.reverse)),
        "img" in b && t(1, (f = b.img)),
        "padding" in b && t(8, (m = b.padding)),
        "size" in b && t(9, (p = b.size)),
        "$$scope" in b && t(16, (n = b.$$scope));
    }),
    (a.$$.update = () => {
      a.$$.dirty & 256 && t(2, (u = E[m])),
        t(
          3,
          (_ = le(
            "flex w-full",
            k[p],
            o ? "flex-col-reverse" : "flex-col",
            i && (o ? "md:flex-row-reverse" : "md:flex-row"),
            c && "hover:bg-gray-100 dark:hover:bg-gray-700",
            !f && u,
            e.class
          ))
        ),
        a.$$.dirty & 192 &&
          t(
            4,
            (g = le(
              o ? "rounded-b-lg" : "rounded-t-lg",
              i && "object-cover w-full h-96 md:h-auto md:w-48 md:rounded-none",
              i && (o ? "md:rounded-e-lg" : "md:rounded-s-lg")
            ))
          );
    }),
    (e = $(e)),
    [c, f, u, _, g, r, i, o, m, p, s, v, P, M, q, ge, n]
  );
}
class se extends Q {
  constructor(e) {
    super(),
      Y(this, e, je, Te, K, {
        href: 0,
        horizontal: 6,
        reverse: 7,
        img: 1,
        padding: 8,
        size: 9,
      });
  }
}
function ne(a, e, t) {
  const l = a.slice();
  return (l[12] = e[t]), l;
}
function ae(a) {
  let e,
    t = a[4] && a[4].length && ie(a);
  return {
    c() {
      (e = y("div")), t && t.c(), this.h();
    },
    l(l) {
      e = C(l, "DIV", { class: !0 });
      var r = I(e);
      t && t.l(r), r.forEach(d), this.h();
    },
    h() {
      h(
        e,
        "class",
        "overflow-hidden p-2 mb-4 text-sm bg-white rounded border border-gray-200 dark:border-gray-700 dark:bg-gray-800"
      );
    },
    m(l, r) {
      D(l, e, r), t && t.m(e, null);
    },
    p(l, r) {
      l[4] && l[4].length
        ? t
          ? t.p(l, r)
          : ((t = ie(l)), t.c(), t.m(e, null))
        : t && (t.d(1), (t = null));
    },
    d(l) {
      l && d(e), t && t.d();
    },
  };
}
function ie(a) {
  var n;
  let e,
    t,
    l = ((n = a[4][a[3]]) == null ? void 0 : n.title) + "",
    r,
    s;
  return {
    c() {
      (e = y("a")), (t = y("span")), (r = V(l)), this.h();
    },
    l(c) {
      e = C(c, "A", { class: !0, href: !0, target: !0, rel: !0 });
      var i = I(e);
      t = C(i, "SPAN", { class: !0 });
      var o = I(t);
      (r = R(o, l)), o.forEach(d), i.forEach(d), this.h();
    },
    h() {
      var c;
      h(t, "class", "ticker-text line-clamp-1 svelte-mgkgu5"),
        h(e, "class", "flex gap-2 items-center whitespace-nowrap"),
        h(e, "href", (s = (c = a[4][a[3]]) == null ? void 0 : c.link)),
        h(e, "target", "_blank"),
        h(e, "rel", "noopener noreferrer");
    },
    m(c, i) {
      D(c, e, i), w(e, t), w(t, r);
    },
    p(c, i) {
      var o, f;
      i & 24 &&
        l !== (l = ((o = c[4][c[3]]) == null ? void 0 : o.title) + "") &&
        L(r, l),
        i & 24 &&
          s !== (s = (f = c[4][c[3]]) == null ? void 0 : f.link) &&
          h(e, "href", s);
    },
    d(c) {
      c && d(e);
    },
  };
}
function Ve(a) {
  let e,
    t = "No news available.";
  return {
    c() {
      (e = y("div")), (e.textContent = t), this.h();
    },
    l(l) {
      (e = C(l, "DIV", { class: !0, "data-svelte-h": !0 })),
        A(e) !== "svelte-1tsmw37" && (e.textContent = t),
        this.h();
    },
    h() {
      h(e, "class", "text-gray-600 dark:text-gray-300");
    },
    m(l, r) {
      D(l, e, r);
    },
    p: z,
    d(l) {
      l && d(e);
    },
  };
}
function Re(a) {
  let e,
    t = "Loading news…";
  return {
    c() {
      (e = y("div")), (e.textContent = t), this.h();
    },
    l(l) {
      (e = C(l, "DIV", { class: !0, "data-svelte-h": !0 })),
        A(e) !== "svelte-kwfyjd" && (e.textContent = t),
        this.h();
    },
    h() {
      h(e, "class", "text-gray-600 dark:text-gray-300");
    },
    m(l, r) {
      D(l, e, r);
    },
    p: z,
    d(l) {
      l && d(e);
    },
  };
}
function ze(a) {
  let e,
    t = re(a[2]),
    l = [];
  for (let r = 0; r < t.length; r += 1) l[r] = fe(ne(a, t, r));
  return {
    c() {
      e = y("div");
      for (let r = 0; r < l.length; r += 1) l[r].c();
      this.h();
    },
    l(r) {
      e = C(r, "DIV", { class: !0 });
      var s = I(e);
      for (let n = 0; n < l.length; n += 1) l[n].l(s);
      s.forEach(d), this.h();
    },
    h() {
      h(e, "class", "grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3");
    },
    m(r, s) {
      D(r, e, s);
      for (let n = 0; n < l.length; n += 1) l[n] && l[n].m(e, null);
    },
    p(r, s) {
      if (s & 6) {
        t = re(r[2]);
        let n;
        for (n = 0; n < t.length; n += 1) {
          const c = ne(r, t, n);
          l[n] ? l[n].p(c, s) : ((l[n] = fe(c)), l[n].c(), l[n].m(e, null));
        }
        for (; n < l.length; n += 1) l[n].d(1);
        l.length = t.length;
      }
    },
    d(r) {
      r && d(e), ke(l, r);
    },
  };
}
function oe(a) {
  let e,
    t = new Date(a[12].pubDate).toLocaleString() + "",
    l;
  return {
    c() {
      (e = y("div")), (l = V(t)), this.h();
    },
    l(r) {
      e = C(r, "DIV", { class: !0 });
      var s = I(e);
      (l = R(s, t)), s.forEach(d), this.h();
    },
    h() {
      h(e, "class", "mt-1 text-xs text-gray-500");
    },
    m(r, s) {
      D(r, e, s), w(e, l);
    },
    p(r, s) {
      s & 4 &&
        t !== (t = new Date(r[12].pubDate).toLocaleString() + "") &&
        L(l, t);
    },
    d(r) {
      r && d(e);
    },
  };
}
function ce(a) {
  let e,
    t,
    l = a[12].description + "";
  return {
    c() {
      (e = y("div")), (t = new we(!1)), this.h();
    },
    l(r) {
      e = C(r, "DIV", { class: !0 });
      var s = I(e);
      (t = ye(s, !1)), s.forEach(d), this.h();
    },
    h() {
      (t.a = null), h(e, "class", "mt-2 line-clamp-3 svelte-mgkgu5");
    },
    m(r, s) {
      D(r, e, s), t.m(l, e);
    },
    p(r, s) {
      s & 4 && l !== (l = r[12].description + "") && t.p(l);
    },
    d(r) {
      r && d(e);
    },
  };
}
function fe(a) {
  let e,
    t,
    l = a[12].title + "",
    r,
    s,
    n,
    c,
    i,
    o,
    f,
    m,
    p,
    E,
    k,
    u = a[12].pubDate && oe(a),
    _ = a[12].description && ce(a);
  return {
    c() {
      (e = y("div")),
        (t = y("a")),
        (r = V(l)),
        (n = S()),
        u && u.c(),
        (c = S()),
        _ && _.c(),
        (i = S()),
        (o = y("div")),
        (f = y("a")),
        (m = V(a[1])),
        (p = V(" →")),
        (k = S()),
        this.h();
    },
    l(g) {
      e = C(g, "DIV", { class: !0 });
      var v = I(e);
      t = C(v, "A", { class: !0, href: !0, rel: !0, target: !0 });
      var P = I(t);
      (r = R(P, l)),
        P.forEach(d),
        (n = x(v)),
        u && u.l(v),
        (c = x(v)),
        _ && _.l(v),
        (i = x(v)),
        (o = C(v, "DIV", { class: !0 }));
      var M = I(o);
      f = C(M, "A", { class: !0, href: !0, rel: !0, target: !0 });
      var q = I(f);
      (m = R(q, a[1])),
        (p = R(q, " →")),
        q.forEach(d),
        M.forEach(d),
        (k = x(v)),
        v.forEach(d),
        this.h();
    },
    h() {
      h(
        t,
        "class",
        "text-base font-semibold text-blue-700 line-clamp-2 hover:underline dark:text-blue-400 svelte-mgkgu5"
      ),
        h(t, "href", (s = a[12].link)),
        h(t, "rel", "noopener noreferrer"),
        h(t, "target", "_blank"),
        h(
          f,
          "class",
          "text-xs text-blue-600 hover:underline dark:text-blue-300"
        ),
        h(f, "href", (E = a[12].link)),
        h(f, "rel", "noopener noreferrer"),
        h(f, "target", "_blank"),
        h(o, "class", "mt-3"),
        h(
          e,
          "class",
          "flex flex-col p-3 h-full text-sm rounded-lg border border-gray-200 dark:border-gray-700"
        );
    },
    m(g, v) {
      D(g, e, v),
        w(e, t),
        w(t, r),
        w(e, n),
        u && u.m(e, null),
        w(e, c),
        _ && _.m(e, null),
        w(e, i),
        w(e, o),
        w(o, f),
        w(f, m),
        w(f, p),
        w(e, k);
    },
    p(g, v) {
      v & 4 && l !== (l = g[12].title + "") && L(r, l),
        v & 4 && s !== (s = g[12].link) && h(t, "href", s),
        g[12].pubDate
          ? u
            ? u.p(g, v)
            : ((u = oe(g)), u.c(), u.m(e, c))
          : u && (u.d(1), (u = null)),
        g[12].description
          ? _
            ? _.p(g, v)
            : ((_ = ce(g)), _.c(), _.m(e, i))
          : _ && (_.d(1), (_ = null)),
        v & 2 && L(m, g[1]),
        v & 4 && E !== (E = g[12].link) && h(f, "href", E);
    },
    d(g) {
      g && d(e), u && u.d(), _ && _.d();
    },
  };
}
function Ae(a) {
  let e,
    t,
    l,
    r,
    s,
    n = ((a[4] && a[4].length) || (a[2] && a[2].length)) && ae(a);
  function c(f, m) {
    return f[2] && f[2].length ? ze : f[5] ? Ve : Re;
  }
  let i = c(a),
    o = i(a);
  return {
    c() {
      (e = y("div")),
        n && n.c(),
        (t = S()),
        (l = y("h2")),
        (r = V(a[0])),
        (s = S()),
        o.c(),
        this.h();
    },
    l(f) {
      e = C(f, "DIV", { class: !0 });
      var m = I(e);
      n && n.l(m), (t = x(m)), (l = C(m, "H2", { class: !0 }));
      var p = I(l);
      (r = R(p, a[0])),
        p.forEach(d),
        (s = x(m)),
        o.l(m),
        m.forEach(d),
        this.h();
    },
    h() {
      h(l, "class", "mb-4 text-2xl font-bold text-gray-900 dark:text-white"),
        h(e, "class", "mx-auto max-w-5xl");
    },
    m(f, m) {
      D(f, e, m),
        n && n.m(e, null),
        w(e, t),
        w(e, l),
        w(l, r),
        w(e, s),
        o.m(e, null);
    },
    p(f, [m]) {
      (f[4] && f[4].length) || (f[2] && f[2].length)
        ? n
          ? n.p(f, m)
          : ((n = ae(f)), n.c(), n.m(e, t))
        : n && (n.d(1), (n = null)),
        m & 1 && L(r, f[0]),
        i === (i = c(f)) && o
          ? o.p(f, m)
          : (o.d(1), (o = i(f)), o && (o.c(), o.m(e, null)));
    },
    i: z,
    o: z,
    d(f) {
      f && d(e), n && n.d(), o.d();
    },
  };
}
const qe = "https://www.wowhead.com/news/rss/all";
function He(a) {
  if (!a) return [];
  try {
    const t = new DOMParser().parseFromString(a, "application/xml");
    if (t.querySelector("parsererror")) throw new Error("XML parse error");
    return Array.from(t.querySelectorAll("item")).map((r) => {
      var o, f, m, p;
      const s =
          ((o = r.querySelector("title")) == null ? void 0 : o.textContent) ||
          "",
        n =
          ((f = r.querySelector("link")) == null ? void 0 : f.textContent) ||
          "",
        c =
          ((m = r.querySelector("pubDate")) == null ? void 0 : m.textContent) ||
          "",
        i =
          ((p = r.querySelector("description")) == null
            ? void 0
            : p.textContent) || "";
      return {
        title: G(s),
        link: n.trim(),
        pubDate: c ? new Date(c).toISOString() : "",
        description: i,
      };
    });
  } catch {
    const t = [],
      l = a.match(/<item[\s\S]*?<\/item>/g) || [];
    for (const r of l) {
      const s = N(r, "title"),
        n = N(r, "link"),
        c = N(r, "pubDate"),
        i = Le(N(r, "description"));
      t.push({
        title: G(s),
        link: (n == null ? void 0 : n.trim()) || "",
        pubDate: c ? new Date(c).toISOString() : "",
        description: G(i),
      });
    }
    return t;
  }
}
function N(a, e) {
  const t = new RegExp(`<${e}>([\\s\\S]*?)<\\/${e}>`, "i"),
    l = a.match(t);
  if (l && l[1]) return l[1];
  const r = new RegExp(`<${e}><!\\[CDATA\\[([\\s\\S]*?)\\]\\]><\\/${e}>`, "i"),
    s = a.match(r);
  return s && s[1] ? s[1] : "";
}
function Le(a) {
  if (!a) return "";
  let e = a;
  return (
    e.startsWith("<![CDATA[") && (e = e.slice(9)),
    e.endsWith("]]>") && (e = e.slice(0, -3)),
    e
  );
}
function G(a) {
  return a
    ? a
        .replace(/&amp;/g, "&")
        .replace(/&lt;/g, "<")
        .replace(/&gt;/g, ">")
        .replace(/&quot;/g, '"')
        .replace(/&#39;/g, "'")
    : "";
}
async function Pe(a) {
  const e = [
      async (r, s) =>
        O(`https://r.jina.ai/http/${r.replace(/^https?:\/\//, "")}`, s),
      async (r, s) =>
        O(`https://api.allorigins.win/raw?url=${encodeURIComponent(r)}`, s),
      async (r, s) => O(`https://cors.isomorphic-git.org/${r}`, s),
      async (r, s) => O(`https://corsproxy.io/?${encodeURIComponent(r)}`, s),
      async (r, s) =>
        ue(
          `https://api.allorigins.win/get?url=${encodeURIComponent(r)}`,
          s,
          (n) => ({ xml: n && n.contents })
        ),
      async (r, s) =>
        ue(
          `https://api.rss2json.com/v1/api.json?rss_url=${encodeURIComponent(
            r
          )}`,
          s,
          (n) => ({ json: n })
        ),
    ],
    t = [];
  let l = !1;
  return new Promise((r, s) => {
    let n = e.length;
    const c = (i) => {
      (n -= 1), !l && n === 0 && s(new Error("CORS fetch failed"));
    };
    for (const i of e) {
      const o = new AbortController();
      t.push(o),
        i(a, o.signal)
          .then((f) => {
            l ||
              !f ||
              ((l = !0),
              t.forEach((m) => {
                try {
                  m.abort();
                } catch {}
              }),
              r(f));
          })
          .catch(() => c())
          .finally(() => {
            l || c();
          }),
        setTimeout(() => {
          try {
            o.abort();
          } catch {}
        }, 6e3);
    }
  });
}
async function O(a, e) {
  const t = await fetch(a, {
    headers: { accept: "application/rss+xml, text/xml, */*" },
    cache: "no-store",
    signal: e,
  });
  if (!t.ok) throw new Error(`HTTP ${t.status}`);
  const l = await t.text();
  if (!l) throw new Error("Empty XML");
  return { xml: l };
}
async function ue(a, e, t) {
  const l = await fetch(a, {
    headers: { accept: "application/json" },
    cache: "no-store",
    signal: e,
  });
  if (!l.ok) throw new Error(`HTTP ${l.status}`);
  const r = await l.json(),
    s = t(r);
  if (!s || (!s.xml && !s.json)) throw new Error("Invalid JSON");
  return s;
}
function Me(a, e, t) {
  let { items: l = [] } = e,
    { title: r = "Wowhead News" } = e,
    { linkText: s = "Read more" } = e,
    n = l,
    c = 0,
    i = [],
    o,
    f,
    m = !1;
  async function p() {
    try {
      const u = await Pe(qe);
      let _ = [];
      u && u.xml
        ? (_ = He(u.xml).slice(0, 24))
        : u &&
          u.json &&
          u.json.items &&
          (_ = (u.json.items || [])
            .map((g) => ({
              title: G(g.title || ""),
              link: (g.link || "").trim(),
              pubDate: g.pubDate ? new Date(g.pubDate).toISOString() : "",
              description: g.description || "",
            }))
            .slice(0, 24)),
        _ && _.length && (t(2, (n = _)), t(4, (i = _)));
    } catch {}
    t(5, (m = !0));
  }
  function E() {
    (!i || i.length === 0) && t(4, (i = n)),
      clearInterval(o),
      (o = setInterval(() => {
        !i || i.length === 0 || t(3, (c = (c + 1) % i.length));
      }, 5e3));
  }
  function k() {
    clearInterval(f),
      (f = setInterval(() => {
        p();
      }, 6e4));
  }
  return (
    pe(
      () => (
        p().then(() => E()),
        k(),
        () => {
          clearInterval(o), clearInterval(f);
        }
      )
    ),
    (a.$$set = (u) => {
      "items" in u && t(6, (l = u.items)),
        "title" in u && t(0, (r = u.title)),
        "linkText" in u && t(1, (s = u.linkText));
    }),
    [r, s, n, c, i, m, l]
  );
}
class Ne extends Q {
  constructor(e) {
    super(), Y(this, e, Me, Ae, K, { items: 6, title: 0, linkText: 1 });
  }
}
function Oe(a) {
  let e,
    t = "Trinket Tier List",
    l,
    r,
    s = `Stay up-to-date with the latest trinket rankings and make informed decisions
          about your gear choices.`;
  return {
    c() {
      (e = y("h3")),
        (e.textContent = t),
        (l = S()),
        (r = y("p")),
        (r.textContent = s),
        this.h();
    },
    l(n) {
      (e = C(n, "H3", { class: !0, "data-svelte-h": !0 })),
        A(e) !== "svelte-1s57avv" && (e.textContent = t),
        (l = x(n)),
        (r = C(n, "P", { class: !0, "data-svelte-h": !0 })),
        A(r) !== "svelte-1bmz5ei" && (r.textContent = s),
        this.h();
    },
    h() {
      h(e, "class", "mb-2 text-xl font-bold text-gray-900 dark:text-white"),
        h(r, "class", "text-gray-700 dark:text-gray-400");
    },
    m(n, c) {
      D(n, e, c), D(n, l, c), D(n, r, c);
    },
    p: z,
    d(n) {
      n && (d(e), d(l), d(r));
    },
  };
}
function Ue(a) {
  let e,
    t = "Test";
  return {
    c() {
      (e = y("h3")), (e.textContent = t), this.h();
    },
    l(l) {
      (e = C(l, "H3", { class: !0, "data-svelte-h": !0 })),
        A(e) !== "svelte-ca3da8" && (e.textContent = t),
        this.h();
    },
    h() {
      h(e, "class", "mb-2 text-xl font-bold text-gray-900 dark:text-white");
    },
    m(l, r) {
      D(l, e, r);
    },
    p: z,
    d(l) {
      l && d(e);
    },
  };
}
function We(a) {
  let e,
    t,
    l = "",
    r,
    s,
    n,
    c,
    i,
    o,
    f,
    m,
    p,
    E;
  return (
    (n = new Ne({
      props: { title: "Wowhead News", linkText: "Continue reading" },
    })),
    (f = new se({
      props: {
        href: "/trinkets",
        $$slots: { default: [Oe] },
        $$scope: { ctx: a },
      },
    })),
    (p = new se({
      props: { href: "#", $$slots: { default: [Ue] }, $$scope: { ctx: a } },
    })),
    {
      c() {
        (e = y("div")),
          (t = y("div")),
          (t.innerHTML = l),
          (r = S()),
          (s = y("div")),
          U(n.$$.fragment),
          (c = S()),
          (i = y("div")),
          (o = y("div")),
          U(f.$$.fragment),
          (m = S()),
          U(p.$$.fragment),
          this.h();
      },
      l(k) {
        e = C(k, "DIV", { class: !0 });
        var u = I(e);
        (t = C(u, "DIV", { class: !0, style: !0, "data-svelte-h": !0 })),
          A(t) !== "svelte-pfnfk2" && (t.innerHTML = l),
          (r = x(u)),
          (s = C(u, "DIV", { class: !0 }));
        var _ = I(s);
        W(n.$$.fragment, _),
          _.forEach(d),
          (c = x(u)),
          (i = C(u, "DIV", { class: !0 }));
        var g = I(i);
        o = C(g, "DIV", { class: !0 });
        var v = I(o);
        W(f.$$.fragment, v),
          (m = x(v)),
          W(p.$$.fragment, v),
          v.forEach(d),
          g.forEach(d),
          u.forEach(d),
          this.h();
      },
      h() {
        h(t, "class", "relative h-[400px] mb-12 overflow-hidden"),
          J(t, "background-image", "url('wow-background.jpg')"),
          J(t, "background-size", "cover"),
          J(t, "background-position", "center"),
          h(s, "class", "px-6 w-full"),
          h(
            o,
            "class",
            "grid grid-cols-1 gap-6 mb-12 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
          ),
          h(i, "class", "px-6 w-full"),
          h(e, "class", "min-h-screen");
      },
      m(k, u) {
        D(k, e, u),
          w(e, t),
          w(e, r),
          w(e, s),
          F(n, s, null),
          w(e, c),
          w(e, i),
          w(i, o),
          F(f, o, null),
          w(o, m),
          F(p, o, null),
          (E = !0);
      },
      p(k, [u]) {
        const _ = {};
        u & 1 && (_.$$scope = { dirty: u, ctx: k }), f.$set(_);
        const g = {};
        u & 1 && (g.$$scope = { dirty: u, ctx: k }), p.$set(g);
      },
      i(k) {
        E ||
          (T(n.$$.fragment, k),
          T(f.$$.fragment, k),
          T(p.$$.fragment, k),
          (E = !0));
      },
      o(k) {
        j(n.$$.fragment, k), j(f.$$.fragment, k), j(p.$$.fragment, k), (E = !1);
      },
      d(k) {
        k && d(e), X(n), X(f), X(p);
      },
    }
  );
}
class Ke extends Q {
  constructor(e) {
    super(), Y(this, e, null, We, K, {});
  }
}
export { Ke as component };
