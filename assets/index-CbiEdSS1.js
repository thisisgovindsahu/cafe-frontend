(function () {
  const a = document.createElement("link").relList;
  if (a && a.supports && a.supports("modulepreload")) return;
  for (const r of document.querySelectorAll('link[rel="modulepreload"]')) i(r);
  new MutationObserver((r) => {
    for (const o of r)
      if (o.type === "childList")
        for (const h of o.addedNodes)
          h.tagName === "LINK" && h.rel === "modulepreload" && i(h);
  }).observe(document, { childList: !0, subtree: !0 });
  function u(r) {
    const o = {};
    return (
      r.integrity && (o.integrity = r.integrity),
      r.referrerPolicy && (o.referrerPolicy = r.referrerPolicy),
      r.crossOrigin === "use-credentials"
        ? (o.credentials = "include")
        : r.crossOrigin === "anonymous"
        ? (o.credentials = "omit")
        : (o.credentials = "same-origin"),
      o
    );
  }
  function i(r) {
    if (r.ep) return;
    r.ep = !0;
    const o = u(r);
    fetch(r.href, o);
  }
})();
var qo = { exports: {} },
  eu = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Fp;
function Pv() {
  if (Fp) return eu;
  Fp = 1;
  var s = Symbol.for("react.transitional.element"),
    a = Symbol.for("react.fragment");
  function u(i, r, o) {
    var h = null;
    if (
      (o !== void 0 && (h = "" + o),
      r.key !== void 0 && (h = "" + r.key),
      "key" in r)
    ) {
      o = {};
      for (var d in r) d !== "key" && (o[d] = r[d]);
    } else o = r;
    return (
      (r = o.ref),
      { $$typeof: s, type: i, key: h, ref: r !== void 0 ? r : null, props: o }
    );
  }
  return (eu.Fragment = a), (eu.jsx = u), (eu.jsxs = u), eu;
}
var $p;
function Wv() {
  return $p || (($p = 1), (qo.exports = Pv())), qo.exports;
}
var O = Wv(),
  Yo = { exports: {} },
  ot = {};
/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Pp;
function Iv() {
  if (Pp) return ot;
  Pp = 1;
  var s = Symbol.for("react.transitional.element"),
    a = Symbol.for("react.portal"),
    u = Symbol.for("react.fragment"),
    i = Symbol.for("react.strict_mode"),
    r = Symbol.for("react.profiler"),
    o = Symbol.for("react.consumer"),
    h = Symbol.for("react.context"),
    d = Symbol.for("react.forward_ref"),
    p = Symbol.for("react.suspense"),
    m = Symbol.for("react.memo"),
    y = Symbol.for("react.lazy"),
    v = Symbol.iterator;
  function S(w) {
    return w === null || typeof w != "object"
      ? null
      : ((w = (v && w[v]) || w["@@iterator"]),
        typeof w == "function" ? w : null);
  }
  var T = {
      isMounted: function () {
        return !1;
      },
      enqueueForceUpdate: function () {},
      enqueueReplaceState: function () {},
      enqueueSetState: function () {},
    },
    x = Object.assign,
    b = {};
  function E(w, J, P) {
    (this.props = w),
      (this.context = J),
      (this.refs = b),
      (this.updater = P || T);
  }
  (E.prototype.isReactComponent = {}),
    (E.prototype.setState = function (w, J) {
      if (typeof w != "object" && typeof w != "function" && w != null)
        throw Error(
          "takes an object of state variables to update or a function which returns an object of state variables."
        );
      this.updater.enqueueSetState(this, w, J, "setState");
    }),
    (E.prototype.forceUpdate = function (w) {
      this.updater.enqueueForceUpdate(this, w, "forceUpdate");
    });
  function A() {}
  A.prototype = E.prototype;
  function N(w, J, P) {
    (this.props = w),
      (this.context = J),
      (this.refs = b),
      (this.updater = P || T);
  }
  var M = (N.prototype = new A());
  (M.constructor = N), x(M, E.prototype), (M.isPureReactComponent = !0);
  var G = Array.isArray,
    U = { H: null, A: null, T: null, S: null, V: null },
    X = Object.prototype.hasOwnProperty;
  function k(w, J, P, W, et, ft) {
    return (
      (P = ft.ref),
      { $$typeof: s, type: w, key: J, ref: P !== void 0 ? P : null, props: ft }
    );
  }
  function F(w, J) {
    return k(w.type, J, void 0, void 0, void 0, w.props);
  }
  function K(w) {
    return typeof w == "object" && w !== null && w.$$typeof === s;
  }
  function ut(w) {
    var J = { "=": "=0", ":": "=2" };
    return (
      "$" +
      w.replace(/[=:]/g, function (P) {
        return J[P];
      })
    );
  }
  var mt = /\/+/g;
  function st(w, J) {
    return typeof w == "object" && w !== null && w.key != null
      ? ut("" + w.key)
      : J.toString(36);
  }
  function bt() {}
  function zt(w) {
    switch (w.status) {
      case "fulfilled":
        return w.value;
      case "rejected":
        throw w.reason;
      default:
        switch (
          (typeof w.status == "string"
            ? w.then(bt, bt)
            : ((w.status = "pending"),
              w.then(
                function (J) {
                  w.status === "pending" &&
                    ((w.status = "fulfilled"), (w.value = J));
                },
                function (J) {
                  w.status === "pending" &&
                    ((w.status = "rejected"), (w.reason = J));
                }
              )),
          w.status)
        ) {
          case "fulfilled":
            return w.value;
          case "rejected":
            throw w.reason;
        }
    }
    throw w;
  }
  function gt(w, J, P, W, et) {
    var ft = typeof w;
    (ft === "undefined" || ft === "boolean") && (w = null);
    var rt = !1;
    if (w === null) rt = !0;
    else
      switch (ft) {
        case "bigint":
        case "string":
        case "number":
          rt = !0;
          break;
        case "object":
          switch (w.$$typeof) {
            case s:
            case a:
              rt = !0;
              break;
            case y:
              return (rt = w._init), gt(rt(w._payload), J, P, W, et);
          }
      }
    if (rt)
      return (
        (et = et(w)),
        (rt = W === "" ? "." + st(w, 0) : W),
        G(et)
          ? ((P = ""),
            rt != null && (P = rt.replace(mt, "$&/") + "/"),
            gt(et, J, P, "", function (kn) {
              return kn;
            }))
          : et != null &&
            (K(et) &&
              (et = F(
                et,
                P +
                  (et.key == null || (w && w.key === et.key)
                    ? ""
                    : ("" + et.key).replace(mt, "$&/") + "/") +
                  rt
              )),
            J.push(et)),
        1
      );
    rt = 0;
    var we = W === "" ? "." : W + ":";
    if (G(w))
      for (var Ut = 0; Ut < w.length; Ut++)
        (W = w[Ut]), (ft = we + st(W, Ut)), (rt += gt(W, J, P, ft, et));
    else if (((Ut = S(w)), typeof Ut == "function"))
      for (w = Ut.call(w), Ut = 0; !(W = w.next()).done; )
        (W = W.value), (ft = we + st(W, Ut++)), (rt += gt(W, J, P, ft, et));
    else if (ft === "object") {
      if (typeof w.then == "function") return gt(zt(w), J, P, W, et);
      throw (
        ((J = String(w)),
        Error(
          "Objects are not valid as a React child (found: " +
            (J === "[object Object]"
              ? "object with keys {" + Object.keys(w).join(", ") + "}"
              : J) +
            "). If you meant to render a collection of children, use an array instead."
        ))
      );
    }
    return rt;
  }
  function q(w, J, P) {
    if (w == null) return w;
    var W = [],
      et = 0;
    return (
      gt(w, W, "", "", function (ft) {
        return J.call(P, ft, et++);
      }),
      W
    );
  }
  function $(w) {
    if (w._status === -1) {
      var J = w._result;
      (J = J()),
        J.then(
          function (P) {
            (w._status === 0 || w._status === -1) &&
              ((w._status = 1), (w._result = P));
          },
          function (P) {
            (w._status === 0 || w._status === -1) &&
              ((w._status = 2), (w._result = P));
          }
        ),
        w._status === -1 && ((w._status = 0), (w._result = J));
    }
    if (w._status === 1) return w._result.default;
    throw w._result;
  }
  var tt =
    typeof reportError == "function"
      ? reportError
      : function (w) {
          if (
            typeof window == "object" &&
            typeof window.ErrorEvent == "function"
          ) {
            var J = new window.ErrorEvent("error", {
              bubbles: !0,
              cancelable: !0,
              message:
                typeof w == "object" &&
                w !== null &&
                typeof w.message == "string"
                  ? String(w.message)
                  : String(w),
              error: w,
            });
            if (!window.dispatchEvent(J)) return;
          } else if (
            typeof process == "object" &&
            typeof process.emit == "function"
          ) {
            process.emit("uncaughtException", w);
            return;
          }
          console.error(w);
        };
  function xt() {}
  return (
    (ot.Children = {
      map: q,
      forEach: function (w, J, P) {
        q(
          w,
          function () {
            J.apply(this, arguments);
          },
          P
        );
      },
      count: function (w) {
        var J = 0;
        return (
          q(w, function () {
            J++;
          }),
          J
        );
      },
      toArray: function (w) {
        return (
          q(w, function (J) {
            return J;
          }) || []
        );
      },
      only: function (w) {
        if (!K(w))
          throw Error(
            "React.Children.only expected to receive a single React element child."
          );
        return w;
      },
    }),
    (ot.Component = E),
    (ot.Fragment = u),
    (ot.Profiler = r),
    (ot.PureComponent = N),
    (ot.StrictMode = i),
    (ot.Suspense = p),
    (ot.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = U),
    (ot.__COMPILER_RUNTIME = {
      __proto__: null,
      c: function (w) {
        return U.H.useMemoCache(w);
      },
    }),
    (ot.cache = function (w) {
      return function () {
        return w.apply(null, arguments);
      };
    }),
    (ot.cloneElement = function (w, J, P) {
      if (w == null)
        throw Error(
          "The argument must be a React element, but you passed " + w + "."
        );
      var W = x({}, w.props),
        et = w.key,
        ft = void 0;
      if (J != null)
        for (rt in (J.ref !== void 0 && (ft = void 0),
        J.key !== void 0 && (et = "" + J.key),
        J))
          !X.call(J, rt) ||
            rt === "key" ||
            rt === "__self" ||
            rt === "__source" ||
            (rt === "ref" && J.ref === void 0) ||
            (W[rt] = J[rt]);
      var rt = arguments.length - 2;
      if (rt === 1) W.children = P;
      else if (1 < rt) {
        for (var we = Array(rt), Ut = 0; Ut < rt; Ut++)
          we[Ut] = arguments[Ut + 2];
        W.children = we;
      }
      return k(w.type, et, void 0, void 0, ft, W);
    }),
    (ot.createContext = function (w) {
      return (
        (w = {
          $$typeof: h,
          _currentValue: w,
          _currentValue2: w,
          _threadCount: 0,
          Provider: null,
          Consumer: null,
        }),
        (w.Provider = w),
        (w.Consumer = { $$typeof: o, _context: w }),
        w
      );
    }),
    (ot.createElement = function (w, J, P) {
      var W,
        et = {},
        ft = null;
      if (J != null)
        for (W in (J.key !== void 0 && (ft = "" + J.key), J))
          X.call(J, W) &&
            W !== "key" &&
            W !== "__self" &&
            W !== "__source" &&
            (et[W] = J[W]);
      var rt = arguments.length - 2;
      if (rt === 1) et.children = P;
      else if (1 < rt) {
        for (var we = Array(rt), Ut = 0; Ut < rt; Ut++)
          we[Ut] = arguments[Ut + 2];
        et.children = we;
      }
      if (w && w.defaultProps)
        for (W in ((rt = w.defaultProps), rt))
          et[W] === void 0 && (et[W] = rt[W]);
      return k(w, ft, void 0, void 0, null, et);
    }),
    (ot.createRef = function () {
      return { current: null };
    }),
    (ot.forwardRef = function (w) {
      return { $$typeof: d, render: w };
    }),
    (ot.isValidElement = K),
    (ot.lazy = function (w) {
      return { $$typeof: y, _payload: { _status: -1, _result: w }, _init: $ };
    }),
    (ot.memo = function (w, J) {
      return { $$typeof: m, type: w, compare: J === void 0 ? null : J };
    }),
    (ot.startTransition = function (w) {
      var J = U.T,
        P = {};
      U.T = P;
      try {
        var W = w(),
          et = U.S;
        et !== null && et(P, W),
          typeof W == "object" &&
            W !== null &&
            typeof W.then == "function" &&
            W.then(xt, tt);
      } catch (ft) {
        tt(ft);
      } finally {
        U.T = J;
      }
    }),
    (ot.unstable_useCacheRefresh = function () {
      return U.H.useCacheRefresh();
    }),
    (ot.use = function (w) {
      return U.H.use(w);
    }),
    (ot.useActionState = function (w, J, P) {
      return U.H.useActionState(w, J, P);
    }),
    (ot.useCallback = function (w, J) {
      return U.H.useCallback(w, J);
    }),
    (ot.useContext = function (w) {
      return U.H.useContext(w);
    }),
    (ot.useDebugValue = function () {}),
    (ot.useDeferredValue = function (w, J) {
      return U.H.useDeferredValue(w, J);
    }),
    (ot.useEffect = function (w, J, P) {
      var W = U.H;
      if (typeof P == "function")
        throw Error(
          "useEffect CRUD overload is not enabled in this build of React."
        );
      return W.useEffect(w, J);
    }),
    (ot.useId = function () {
      return U.H.useId();
    }),
    (ot.useImperativeHandle = function (w, J, P) {
      return U.H.useImperativeHandle(w, J, P);
    }),
    (ot.useInsertionEffect = function (w, J) {
      return U.H.useInsertionEffect(w, J);
    }),
    (ot.useLayoutEffect = function (w, J) {
      return U.H.useLayoutEffect(w, J);
    }),
    (ot.useMemo = function (w, J) {
      return U.H.useMemo(w, J);
    }),
    (ot.useOptimistic = function (w, J) {
      return U.H.useOptimistic(w, J);
    }),
    (ot.useReducer = function (w, J, P) {
      return U.H.useReducer(w, J, P);
    }),
    (ot.useRef = function (w) {
      return U.H.useRef(w);
    }),
    (ot.useState = function (w) {
      return U.H.useState(w);
    }),
    (ot.useSyncExternalStore = function (w, J, P) {
      return U.H.useSyncExternalStore(w, J, P);
    }),
    (ot.useTransition = function () {
      return U.H.useTransition();
    }),
    (ot.version = "19.1.0"),
    ot
  );
}
var Wp;
function Cf() {
  return Wp || ((Wp = 1), (Yo.exports = Iv())), Yo.exports;
}
var H = Cf(),
  Xo = { exports: {} },
  nu = {},
  Go = { exports: {} },
  Vo = {};
/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Ip;
function t1() {
  return (
    Ip ||
      ((Ip = 1),
      (function (s) {
        function a(q, $) {
          var tt = q.length;
          q.push($);
          t: for (; 0 < tt; ) {
            var xt = (tt - 1) >>> 1,
              w = q[xt];
            if (0 < r(w, $)) (q[xt] = $), (q[tt] = w), (tt = xt);
            else break t;
          }
        }
        function u(q) {
          return q.length === 0 ? null : q[0];
        }
        function i(q) {
          if (q.length === 0) return null;
          var $ = q[0],
            tt = q.pop();
          if (tt !== $) {
            q[0] = tt;
            t: for (var xt = 0, w = q.length, J = w >>> 1; xt < J; ) {
              var P = 2 * (xt + 1) - 1,
                W = q[P],
                et = P + 1,
                ft = q[et];
              if (0 > r(W, tt))
                et < w && 0 > r(ft, W)
                  ? ((q[xt] = ft), (q[et] = tt), (xt = et))
                  : ((q[xt] = W), (q[P] = tt), (xt = P));
              else if (et < w && 0 > r(ft, tt))
                (q[xt] = ft), (q[et] = tt), (xt = et);
              else break t;
            }
          }
          return $;
        }
        function r(q, $) {
          var tt = q.sortIndex - $.sortIndex;
          return tt !== 0 ? tt : q.id - $.id;
        }
        if (
          ((s.unstable_now = void 0),
          typeof performance == "object" &&
            typeof performance.now == "function")
        ) {
          var o = performance;
          s.unstable_now = function () {
            return o.now();
          };
        } else {
          var h = Date,
            d = h.now();
          s.unstable_now = function () {
            return h.now() - d;
          };
        }
        var p = [],
          m = [],
          y = 1,
          v = null,
          S = 3,
          T = !1,
          x = !1,
          b = !1,
          E = !1,
          A = typeof setTimeout == "function" ? setTimeout : null,
          N = typeof clearTimeout == "function" ? clearTimeout : null,
          M = typeof setImmediate < "u" ? setImmediate : null;
        function G(q) {
          for (var $ = u(m); $ !== null; ) {
            if ($.callback === null) i(m);
            else if ($.startTime <= q)
              i(m), ($.sortIndex = $.expirationTime), a(p, $);
            else break;
            $ = u(m);
          }
        }
        function U(q) {
          if (((b = !1), G(q), !x))
            if (u(p) !== null) (x = !0), X || ((X = !0), st());
            else {
              var $ = u(m);
              $ !== null && gt(U, $.startTime - q);
            }
        }
        var X = !1,
          k = -1,
          F = 5,
          K = -1;
        function ut() {
          return E ? !0 : !(s.unstable_now() - K < F);
        }
        function mt() {
          if (((E = !1), X)) {
            var q = s.unstable_now();
            K = q;
            var $ = !0;
            try {
              t: {
                (x = !1), b && ((b = !1), N(k), (k = -1)), (T = !0);
                var tt = S;
                try {
                  e: {
                    for (
                      G(q), v = u(p);
                      v !== null && !(v.expirationTime > q && ut());

                    ) {
                      var xt = v.callback;
                      if (typeof xt == "function") {
                        (v.callback = null), (S = v.priorityLevel);
                        var w = xt(v.expirationTime <= q);
                        if (((q = s.unstable_now()), typeof w == "function")) {
                          (v.callback = w), G(q), ($ = !0);
                          break e;
                        }
                        v === u(p) && i(p), G(q);
                      } else i(p);
                      v = u(p);
                    }
                    if (v !== null) $ = !0;
                    else {
                      var J = u(m);
                      J !== null && gt(U, J.startTime - q), ($ = !1);
                    }
                  }
                  break t;
                } finally {
                  (v = null), (S = tt), (T = !1);
                }
                $ = void 0;
              }
            } finally {
              $ ? st() : (X = !1);
            }
          }
        }
        var st;
        if (typeof M == "function")
          st = function () {
            M(mt);
          };
        else if (typeof MessageChannel < "u") {
          var bt = new MessageChannel(),
            zt = bt.port2;
          (bt.port1.onmessage = mt),
            (st = function () {
              zt.postMessage(null);
            });
        } else
          st = function () {
            A(mt, 0);
          };
        function gt(q, $) {
          k = A(function () {
            q(s.unstable_now());
          }, $);
        }
        (s.unstable_IdlePriority = 5),
          (s.unstable_ImmediatePriority = 1),
          (s.unstable_LowPriority = 4),
          (s.unstable_NormalPriority = 3),
          (s.unstable_Profiling = null),
          (s.unstable_UserBlockingPriority = 2),
          (s.unstable_cancelCallback = function (q) {
            q.callback = null;
          }),
          (s.unstable_forceFrameRate = function (q) {
            0 > q || 125 < q
              ? console.error(
                  "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
                )
              : (F = 0 < q ? Math.floor(1e3 / q) : 5);
          }),
          (s.unstable_getCurrentPriorityLevel = function () {
            return S;
          }),
          (s.unstable_next = function (q) {
            switch (S) {
              case 1:
              case 2:
              case 3:
                var $ = 3;
                break;
              default:
                $ = S;
            }
            var tt = S;
            S = $;
            try {
              return q();
            } finally {
              S = tt;
            }
          }),
          (s.unstable_requestPaint = function () {
            E = !0;
          }),
          (s.unstable_runWithPriority = function (q, $) {
            switch (q) {
              case 1:
              case 2:
              case 3:
              case 4:
              case 5:
                break;
              default:
                q = 3;
            }
            var tt = S;
            S = q;
            try {
              return $();
            } finally {
              S = tt;
            }
          }),
          (s.unstable_scheduleCallback = function (q, $, tt) {
            var xt = s.unstable_now();
            switch (
              (typeof tt == "object" && tt !== null
                ? ((tt = tt.delay),
                  (tt = typeof tt == "number" && 0 < tt ? xt + tt : xt))
                : (tt = xt),
              q)
            ) {
              case 1:
                var w = -1;
                break;
              case 2:
                w = 250;
                break;
              case 5:
                w = 1073741823;
                break;
              case 4:
                w = 1e4;
                break;
              default:
                w = 5e3;
            }
            return (
              (w = tt + w),
              (q = {
                id: y++,
                callback: $,
                priorityLevel: q,
                startTime: tt,
                expirationTime: w,
                sortIndex: -1,
              }),
              tt > xt
                ? ((q.sortIndex = tt),
                  a(m, q),
                  u(p) === null &&
                    q === u(m) &&
                    (b ? (N(k), (k = -1)) : (b = !0), gt(U, tt - xt)))
                : ((q.sortIndex = w),
                  a(p, q),
                  x || T || ((x = !0), X || ((X = !0), st()))),
              q
            );
          }),
          (s.unstable_shouldYield = ut),
          (s.unstable_wrapCallback = function (q) {
            var $ = S;
            return function () {
              var tt = S;
              S = $;
              try {
                return q.apply(this, arguments);
              } finally {
                S = tt;
              }
            };
          });
      })(Vo)),
    Vo
  );
}
var t0;
function e1() {
  return t0 || ((t0 = 1), (Go.exports = t1())), Go.exports;
}
var Qo = { exports: {} },
  oe = {};
/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var e0;
function n1() {
  if (e0) return oe;
  e0 = 1;
  var s = Cf();
  function a(p) {
    var m = "https://react.dev/errors/" + p;
    if (1 < arguments.length) {
      m += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var y = 2; y < arguments.length; y++)
        m += "&args[]=" + encodeURIComponent(arguments[y]);
    }
    return (
      "Minified React error #" +
      p +
      "; visit " +
      m +
      " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
    );
  }
  function u() {}
  var i = {
      d: {
        f: u,
        r: function () {
          throw Error(a(522));
        },
        D: u,
        C: u,
        L: u,
        m: u,
        X: u,
        S: u,
        M: u,
      },
      p: 0,
      findDOMNode: null,
    },
    r = Symbol.for("react.portal");
  function o(p, m, y) {
    var v =
      3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
      $$typeof: r,
      key: v == null ? null : "" + v,
      children: p,
      containerInfo: m,
      implementation: y,
    };
  }
  var h = s.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
  function d(p, m) {
    if (p === "font") return "";
    if (typeof m == "string") return m === "use-credentials" ? m : "";
  }
  return (
    (oe.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = i),
    (oe.createPortal = function (p, m) {
      var y =
        2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
      if (!m || (m.nodeType !== 1 && m.nodeType !== 9 && m.nodeType !== 11))
        throw Error(a(299));
      return o(p, m, null, y);
    }),
    (oe.flushSync = function (p) {
      var m = h.T,
        y = i.p;
      try {
        if (((h.T = null), (i.p = 2), p)) return p();
      } finally {
        (h.T = m), (i.p = y), i.d.f();
      }
    }),
    (oe.preconnect = function (p, m) {
      typeof p == "string" &&
        (m
          ? ((m = m.crossOrigin),
            (m =
              typeof m == "string"
                ? m === "use-credentials"
                  ? m
                  : ""
                : void 0))
          : (m = null),
        i.d.C(p, m));
    }),
    (oe.prefetchDNS = function (p) {
      typeof p == "string" && i.d.D(p);
    }),
    (oe.preinit = function (p, m) {
      if (typeof p == "string" && m && typeof m.as == "string") {
        var y = m.as,
          v = d(y, m.crossOrigin),
          S = typeof m.integrity == "string" ? m.integrity : void 0,
          T = typeof m.fetchPriority == "string" ? m.fetchPriority : void 0;
        y === "style"
          ? i.d.S(p, typeof m.precedence == "string" ? m.precedence : void 0, {
              crossOrigin: v,
              integrity: S,
              fetchPriority: T,
            })
          : y === "script" &&
            i.d.X(p, {
              crossOrigin: v,
              integrity: S,
              fetchPriority: T,
              nonce: typeof m.nonce == "string" ? m.nonce : void 0,
            });
      }
    }),
    (oe.preinitModule = function (p, m) {
      if (typeof p == "string")
        if (typeof m == "object" && m !== null) {
          if (m.as == null || m.as === "script") {
            var y = d(m.as, m.crossOrigin);
            i.d.M(p, {
              crossOrigin: y,
              integrity: typeof m.integrity == "string" ? m.integrity : void 0,
              nonce: typeof m.nonce == "string" ? m.nonce : void 0,
            });
          }
        } else m == null && i.d.M(p);
    }),
    (oe.preload = function (p, m) {
      if (
        typeof p == "string" &&
        typeof m == "object" &&
        m !== null &&
        typeof m.as == "string"
      ) {
        var y = m.as,
          v = d(y, m.crossOrigin);
        i.d.L(p, y, {
          crossOrigin: v,
          integrity: typeof m.integrity == "string" ? m.integrity : void 0,
          nonce: typeof m.nonce == "string" ? m.nonce : void 0,
          type: typeof m.type == "string" ? m.type : void 0,
          fetchPriority:
            typeof m.fetchPriority == "string" ? m.fetchPriority : void 0,
          referrerPolicy:
            typeof m.referrerPolicy == "string" ? m.referrerPolicy : void 0,
          imageSrcSet:
            typeof m.imageSrcSet == "string" ? m.imageSrcSet : void 0,
          imageSizes: typeof m.imageSizes == "string" ? m.imageSizes : void 0,
          media: typeof m.media == "string" ? m.media : void 0,
        });
      }
    }),
    (oe.preloadModule = function (p, m) {
      if (typeof p == "string")
        if (m) {
          var y = d(m.as, m.crossOrigin);
          i.d.m(p, {
            as: typeof m.as == "string" && m.as !== "script" ? m.as : void 0,
            crossOrigin: y,
            integrity: typeof m.integrity == "string" ? m.integrity : void 0,
          });
        } else i.d.m(p);
    }),
    (oe.requestFormReset = function (p) {
      i.d.r(p);
    }),
    (oe.unstable_batchedUpdates = function (p, m) {
      return p(m);
    }),
    (oe.useFormState = function (p, m, y) {
      return h.H.useFormState(p, m, y);
    }),
    (oe.useFormStatus = function () {
      return h.H.useHostTransitionStatus();
    }),
    (oe.version = "19.1.0"),
    oe
  );
}
var n0;
function a1() {
  if (n0) return Qo.exports;
  n0 = 1;
  function s() {
    if (
      !(
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
      )
    )
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s);
      } catch (a) {
        console.error(a);
      }
  }
  return s(), (Qo.exports = n1()), Qo.exports;
}
/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var a0;
function l1() {
  if (a0) return nu;
  a0 = 1;
  var s = e1(),
    a = Cf(),
    u = a1();
  function i(t) {
    var e = "https://react.dev/errors/" + t;
    if (1 < arguments.length) {
      e += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var n = 2; n < arguments.length; n++)
        e += "&args[]=" + encodeURIComponent(arguments[n]);
    }
    return (
      "Minified React error #" +
      t +
      "; visit " +
      e +
      " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
    );
  }
  function r(t) {
    return !(!t || (t.nodeType !== 1 && t.nodeType !== 9 && t.nodeType !== 11));
  }
  function o(t) {
    var e = t,
      n = t;
    if (t.alternate) for (; e.return; ) e = e.return;
    else {
      t = e;
      do (e = t), (e.flags & 4098) !== 0 && (n = e.return), (t = e.return);
      while (t);
    }
    return e.tag === 3 ? n : null;
  }
  function h(t) {
    if (t.tag === 13) {
      var e = t.memoizedState;
      if (
        (e === null && ((t = t.alternate), t !== null && (e = t.memoizedState)),
        e !== null)
      )
        return e.dehydrated;
    }
    return null;
  }
  function d(t) {
    if (o(t) !== t) throw Error(i(188));
  }
  function p(t) {
    var e = t.alternate;
    if (!e) {
      if (((e = o(t)), e === null)) throw Error(i(188));
      return e !== t ? null : t;
    }
    for (var n = t, l = e; ; ) {
      var c = n.return;
      if (c === null) break;
      var f = c.alternate;
      if (f === null) {
        if (((l = c.return), l !== null)) {
          n = l;
          continue;
        }
        break;
      }
      if (c.child === f.child) {
        for (f = c.child; f; ) {
          if (f === n) return d(c), t;
          if (f === l) return d(c), e;
          f = f.sibling;
        }
        throw Error(i(188));
      }
      if (n.return !== l.return) (n = c), (l = f);
      else {
        for (var g = !1, _ = c.child; _; ) {
          if (_ === n) {
            (g = !0), (n = c), (l = f);
            break;
          }
          if (_ === l) {
            (g = !0), (l = c), (n = f);
            break;
          }
          _ = _.sibling;
        }
        if (!g) {
          for (_ = f.child; _; ) {
            if (_ === n) {
              (g = !0), (n = f), (l = c);
              break;
            }
            if (_ === l) {
              (g = !0), (l = f), (n = c);
              break;
            }
            _ = _.sibling;
          }
          if (!g) throw Error(i(189));
        }
      }
      if (n.alternate !== l) throw Error(i(190));
    }
    if (n.tag !== 3) throw Error(i(188));
    return n.stateNode.current === n ? t : e;
  }
  function m(t) {
    var e = t.tag;
    if (e === 5 || e === 26 || e === 27 || e === 6) return t;
    for (t = t.child; t !== null; ) {
      if (((e = m(t)), e !== null)) return e;
      t = t.sibling;
    }
    return null;
  }
  var y = Object.assign,
    v = Symbol.for("react.element"),
    S = Symbol.for("react.transitional.element"),
    T = Symbol.for("react.portal"),
    x = Symbol.for("react.fragment"),
    b = Symbol.for("react.strict_mode"),
    E = Symbol.for("react.profiler"),
    A = Symbol.for("react.provider"),
    N = Symbol.for("react.consumer"),
    M = Symbol.for("react.context"),
    G = Symbol.for("react.forward_ref"),
    U = Symbol.for("react.suspense"),
    X = Symbol.for("react.suspense_list"),
    k = Symbol.for("react.memo"),
    F = Symbol.for("react.lazy"),
    K = Symbol.for("react.activity"),
    ut = Symbol.for("react.memo_cache_sentinel"),
    mt = Symbol.iterator;
  function st(t) {
    return t === null || typeof t != "object"
      ? null
      : ((t = (mt && t[mt]) || t["@@iterator"]),
        typeof t == "function" ? t : null);
  }
  var bt = Symbol.for("react.client.reference");
  function zt(t) {
    if (t == null) return null;
    if (typeof t == "function")
      return t.$$typeof === bt ? null : t.displayName || t.name || null;
    if (typeof t == "string") return t;
    switch (t) {
      case x:
        return "Fragment";
      case E:
        return "Profiler";
      case b:
        return "StrictMode";
      case U:
        return "Suspense";
      case X:
        return "SuspenseList";
      case K:
        return "Activity";
    }
    if (typeof t == "object")
      switch (t.$$typeof) {
        case T:
          return "Portal";
        case M:
          return (t.displayName || "Context") + ".Provider";
        case N:
          return (t._context.displayName || "Context") + ".Consumer";
        case G:
          var e = t.render;
          return (
            (t = t.displayName),
            t ||
              ((t = e.displayName || e.name || ""),
              (t = t !== "" ? "ForwardRef(" + t + ")" : "ForwardRef")),
            t
          );
        case k:
          return (
            (e = t.displayName || null), e !== null ? e : zt(t.type) || "Memo"
          );
        case F:
          (e = t._payload), (t = t._init);
          try {
            return zt(t(e));
          } catch {}
      }
    return null;
  }
  var gt = Array.isArray,
    q = a.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
    $ = u.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
    tt = { pending: !1, data: null, method: null, action: null },
    xt = [],
    w = -1;
  function J(t) {
    return { current: t };
  }
  function P(t) {
    0 > w || ((t.current = xt[w]), (xt[w] = null), w--);
  }
  function W(t, e) {
    w++, (xt[w] = t.current), (t.current = e);
  }
  var et = J(null),
    ft = J(null),
    rt = J(null),
    we = J(null);
  function Ut(t, e) {
    switch ((W(rt, e), W(ft, t), W(et, null), e.nodeType)) {
      case 9:
      case 11:
        t = (t = e.documentElement) && (t = t.namespaceURI) ? Tp(t) : 0;
        break;
      default:
        if (((t = e.tagName), (e = e.namespaceURI)))
          (e = Tp(e)), (t = Ep(e, t));
        else
          switch (t) {
            case "svg":
              t = 1;
              break;
            case "math":
              t = 2;
              break;
            default:
              t = 0;
          }
    }
    P(et), W(et, t);
  }
  function kn() {
    P(et), P(ft), P(rt);
  }
  function Ts(t) {
    t.memoizedState !== null && W(we, t);
    var e = et.current,
      n = Ep(e, t.type);
    e !== n && (W(ft, t), W(et, n));
  }
  function Du(t) {
    ft.current === t && (P(et), P(ft)),
      we.current === t && (P(we), ($i._currentValue = tt));
  }
  var Es = Object.prototype.hasOwnProperty,
    Os = s.unstable_scheduleCallback,
    Rs = s.unstable_cancelCallback,
    Dg = s.unstable_shouldYield,
    Cg = s.unstable_requestPaint,
    rn = s.unstable_now,
    Ng = s.unstable_getCurrentPriorityLevel,
    ah = s.unstable_ImmediatePriority,
    lh = s.unstable_UserBlockingPriority,
    Cu = s.unstable_NormalPriority,
    Mg = s.unstable_LowPriority,
    ih = s.unstable_IdlePriority,
    zg = s.log,
    Ug = s.unstable_setDisableYieldValue,
    li = null,
    De = null;
  function Zn(t) {
    if (
      (typeof zg == "function" && Ug(t),
      De && typeof De.setStrictMode == "function")
    )
      try {
        De.setStrictMode(li, t);
      } catch {}
  }
  var Ce = Math.clz32 ? Math.clz32 : Lg,
    jg = Math.log,
    Bg = Math.LN2;
  function Lg(t) {
    return (t >>>= 0), t === 0 ? 32 : (31 - ((jg(t) / Bg) | 0)) | 0;
  }
  var Nu = 256,
    Mu = 4194304;
  function Oa(t) {
    var e = t & 42;
    if (e !== 0) return e;
    switch (t & -t) {
      case 1:
        return 1;
      case 2:
        return 2;
      case 4:
        return 4;
      case 8:
        return 8;
      case 16:
        return 16;
      case 32:
        return 32;
      case 64:
        return 64;
      case 128:
        return 128;
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return t & 4194048;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        return t & 62914560;
      case 67108864:
        return 67108864;
      case 134217728:
        return 134217728;
      case 268435456:
        return 268435456;
      case 536870912:
        return 536870912;
      case 1073741824:
        return 0;
      default:
        return t;
    }
  }
  function zu(t, e, n) {
    var l = t.pendingLanes;
    if (l === 0) return 0;
    var c = 0,
      f = t.suspendedLanes,
      g = t.pingedLanes;
    t = t.warmLanes;
    var _ = l & 134217727;
    return (
      _ !== 0
        ? ((l = _ & ~f),
          l !== 0
            ? (c = Oa(l))
            : ((g &= _),
              g !== 0
                ? (c = Oa(g))
                : n || ((n = _ & ~t), n !== 0 && (c = Oa(n)))))
        : ((_ = l & ~f),
          _ !== 0
            ? (c = Oa(_))
            : g !== 0
            ? (c = Oa(g))
            : n || ((n = l & ~t), n !== 0 && (c = Oa(n)))),
      c === 0
        ? 0
        : e !== 0 &&
          e !== c &&
          (e & f) === 0 &&
          ((f = c & -c),
          (n = e & -e),
          f >= n || (f === 32 && (n & 4194048) !== 0))
        ? e
        : c
    );
  }
  function ii(t, e) {
    return (t.pendingLanes & ~(t.suspendedLanes & ~t.pingedLanes) & e) === 0;
  }
  function Hg(t, e) {
    switch (t) {
      case 1:
      case 2:
      case 4:
      case 8:
      case 64:
        return e + 250;
      case 16:
      case 32:
      case 128:
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return e + 5e3;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        return -1;
      case 67108864:
      case 134217728:
      case 268435456:
      case 536870912:
      case 1073741824:
        return -1;
      default:
        return -1;
    }
  }
  function uh() {
    var t = Nu;
    return (Nu <<= 1), (Nu & 4194048) === 0 && (Nu = 256), t;
  }
  function rh() {
    var t = Mu;
    return (Mu <<= 1), (Mu & 62914560) === 0 && (Mu = 4194304), t;
  }
  function As(t) {
    for (var e = [], n = 0; 31 > n; n++) e.push(t);
    return e;
  }
  function ui(t, e) {
    (t.pendingLanes |= e),
      e !== 268435456 &&
        ((t.suspendedLanes = 0), (t.pingedLanes = 0), (t.warmLanes = 0));
  }
  function qg(t, e, n, l, c, f) {
    var g = t.pendingLanes;
    (t.pendingLanes = n),
      (t.suspendedLanes = 0),
      (t.pingedLanes = 0),
      (t.warmLanes = 0),
      (t.expiredLanes &= n),
      (t.entangledLanes &= n),
      (t.errorRecoveryDisabledLanes &= n),
      (t.shellSuspendCounter = 0);
    var _ = t.entanglements,
      R = t.expirationTimes,
      j = t.hiddenUpdates;
    for (n = g & ~n; 0 < n; ) {
      var V = 31 - Ce(n),
        Z = 1 << V;
      (_[V] = 0), (R[V] = -1);
      var B = j[V];
      if (B !== null)
        for (j[V] = null, V = 0; V < B.length; V++) {
          var L = B[V];
          L !== null && (L.lane &= -536870913);
        }
      n &= ~Z;
    }
    l !== 0 && sh(t, l, 0),
      f !== 0 && c === 0 && t.tag !== 0 && (t.suspendedLanes |= f & ~(g & ~e));
  }
  function sh(t, e, n) {
    (t.pendingLanes |= e), (t.suspendedLanes &= ~e);
    var l = 31 - Ce(e);
    (t.entangledLanes |= e),
      (t.entanglements[l] = t.entanglements[l] | 1073741824 | (n & 4194090));
  }
  function ch(t, e) {
    var n = (t.entangledLanes |= e);
    for (t = t.entanglements; n; ) {
      var l = 31 - Ce(n),
        c = 1 << l;
      (c & e) | (t[l] & e) && (t[l] |= e), (n &= ~c);
    }
  }
  function ws(t) {
    switch (t) {
      case 2:
        t = 1;
        break;
      case 8:
        t = 4;
        break;
      case 32:
        t = 16;
        break;
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        t = 128;
        break;
      case 268435456:
        t = 134217728;
        break;
      default:
        t = 0;
    }
    return t;
  }
  function Ds(t) {
    return (
      (t &= -t),
      2 < t ? (8 < t ? ((t & 134217727) !== 0 ? 32 : 268435456) : 8) : 2
    );
  }
  function oh() {
    var t = $.p;
    return t !== 0 ? t : ((t = window.event), t === void 0 ? 32 : Vp(t.type));
  }
  function Yg(t, e) {
    var n = $.p;
    try {
      return ($.p = t), e();
    } finally {
      $.p = n;
    }
  }
  var Kn = Math.random().toString(36).slice(2),
    se = "__reactFiber$" + Kn,
    ge = "__reactProps$" + Kn,
    al = "__reactContainer$" + Kn,
    Cs = "__reactEvents$" + Kn,
    Xg = "__reactListeners$" + Kn,
    Gg = "__reactHandles$" + Kn,
    fh = "__reactResources$" + Kn,
    ri = "__reactMarker$" + Kn;
  function Ns(t) {
    delete t[se], delete t[ge], delete t[Cs], delete t[Xg], delete t[Gg];
  }
  function ll(t) {
    var e = t[se];
    if (e) return e;
    for (var n = t.parentNode; n; ) {
      if ((e = n[al] || n[se])) {
        if (
          ((n = e.alternate),
          e.child !== null || (n !== null && n.child !== null))
        )
          for (t = wp(t); t !== null; ) {
            if ((n = t[se])) return n;
            t = wp(t);
          }
        return e;
      }
      (t = n), (n = t.parentNode);
    }
    return null;
  }
  function il(t) {
    if ((t = t[se] || t[al])) {
      var e = t.tag;
      if (e === 5 || e === 6 || e === 13 || e === 26 || e === 27 || e === 3)
        return t;
    }
    return null;
  }
  function si(t) {
    var e = t.tag;
    if (e === 5 || e === 26 || e === 27 || e === 6) return t.stateNode;
    throw Error(i(33));
  }
  function ul(t) {
    var e = t[fh];
    return (
      e ||
        (e = t[fh] =
          { hoistableStyles: new Map(), hoistableScripts: new Map() }),
      e
    );
  }
  function It(t) {
    t[ri] = !0;
  }
  var hh = new Set(),
    dh = {};
  function Ra(t, e) {
    rl(t, e), rl(t + "Capture", e);
  }
  function rl(t, e) {
    for (dh[t] = e, t = 0; t < e.length; t++) hh.add(e[t]);
  }
  var Vg = RegExp(
      "^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"
    ),
    mh = {},
    ph = {};
  function Qg(t) {
    return Es.call(ph, t)
      ? !0
      : Es.call(mh, t)
      ? !1
      : Vg.test(t)
      ? (ph[t] = !0)
      : ((mh[t] = !0), !1);
  }
  function Uu(t, e, n) {
    if (Qg(e))
      if (n === null) t.removeAttribute(e);
      else {
        switch (typeof n) {
          case "undefined":
          case "function":
          case "symbol":
            t.removeAttribute(e);
            return;
          case "boolean":
            var l = e.toLowerCase().slice(0, 5);
            if (l !== "data-" && l !== "aria-") {
              t.removeAttribute(e);
              return;
            }
        }
        t.setAttribute(e, "" + n);
      }
  }
  function ju(t, e, n) {
    if (n === null) t.removeAttribute(e);
    else {
      switch (typeof n) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          t.removeAttribute(e);
          return;
      }
      t.setAttribute(e, "" + n);
    }
  }
  function xn(t, e, n, l) {
    if (l === null) t.removeAttribute(n);
    else {
      switch (typeof l) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          t.removeAttribute(n);
          return;
      }
      t.setAttributeNS(e, n, "" + l);
    }
  }
  var Ms, yh;
  function sl(t) {
    if (Ms === void 0)
      try {
        throw Error();
      } catch (n) {
        var e = n.stack.trim().match(/\n( *(at )?)/);
        (Ms = (e && e[1]) || ""),
          (yh =
            -1 <
            n.stack.indexOf(`
    at`)
              ? " (<anonymous>)"
              : -1 < n.stack.indexOf("@")
              ? "@unknown:0:0"
              : "");
      }
    return (
      `
` +
      Ms +
      t +
      yh
    );
  }
  var zs = !1;
  function Us(t, e) {
    if (!t || zs) return "";
    zs = !0;
    var n = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      var l = {
        DetermineComponentFrameRoot: function () {
          try {
            if (e) {
              var Z = function () {
                throw Error();
              };
              if (
                (Object.defineProperty(Z.prototype, "props", {
                  set: function () {
                    throw Error();
                  },
                }),
                typeof Reflect == "object" && Reflect.construct)
              ) {
                try {
                  Reflect.construct(Z, []);
                } catch (L) {
                  var B = L;
                }
                Reflect.construct(t, [], Z);
              } else {
                try {
                  Z.call();
                } catch (L) {
                  B = L;
                }
                t.call(Z.prototype);
              }
            } else {
              try {
                throw Error();
              } catch (L) {
                B = L;
              }
              (Z = t()) &&
                typeof Z.catch == "function" &&
                Z.catch(function () {});
            }
          } catch (L) {
            if (L && B && typeof L.stack == "string") return [L.stack, B.stack];
          }
          return [null, null];
        },
      };
      l.DetermineComponentFrameRoot.displayName = "DetermineComponentFrameRoot";
      var c = Object.getOwnPropertyDescriptor(
        l.DetermineComponentFrameRoot,
        "name"
      );
      c &&
        c.configurable &&
        Object.defineProperty(l.DetermineComponentFrameRoot, "name", {
          value: "DetermineComponentFrameRoot",
        });
      var f = l.DetermineComponentFrameRoot(),
        g = f[0],
        _ = f[1];
      if (g && _) {
        var R = g.split(`
`),
          j = _.split(`
`);
        for (
          c = l = 0;
          l < R.length && !R[l].includes("DetermineComponentFrameRoot");

        )
          l++;
        for (; c < j.length && !j[c].includes("DetermineComponentFrameRoot"); )
          c++;
        if (l === R.length || c === j.length)
          for (
            l = R.length - 1, c = j.length - 1;
            1 <= l && 0 <= c && R[l] !== j[c];

          )
            c--;
        for (; 1 <= l && 0 <= c; l--, c--)
          if (R[l] !== j[c]) {
            if (l !== 1 || c !== 1)
              do
                if ((l--, c--, 0 > c || R[l] !== j[c])) {
                  var V =
                    `
` + R[l].replace(" at new ", " at ");
                  return (
                    t.displayName &&
                      V.includes("<anonymous>") &&
                      (V = V.replace("<anonymous>", t.displayName)),
                    V
                  );
                }
              while (1 <= l && 0 <= c);
            break;
          }
      }
    } finally {
      (zs = !1), (Error.prepareStackTrace = n);
    }
    return (n = t ? t.displayName || t.name : "") ? sl(n) : "";
  }
  function kg(t) {
    switch (t.tag) {
      case 26:
      case 27:
      case 5:
        return sl(t.type);
      case 16:
        return sl("Lazy");
      case 13:
        return sl("Suspense");
      case 19:
        return sl("SuspenseList");
      case 0:
      case 15:
        return Us(t.type, !1);
      case 11:
        return Us(t.type.render, !1);
      case 1:
        return Us(t.type, !0);
      case 31:
        return sl("Activity");
      default:
        return "";
    }
  }
  function gh(t) {
    try {
      var e = "";
      do (e += kg(t)), (t = t.return);
      while (t);
      return e;
    } catch (n) {
      return (
        `
Error generating stack: ` +
        n.message +
        `
` +
        n.stack
      );
    }
  }
  function ke(t) {
    switch (typeof t) {
      case "bigint":
      case "boolean":
      case "number":
      case "string":
      case "undefined":
        return t;
      case "object":
        return t;
      default:
        return "";
    }
  }
  function _h(t) {
    var e = t.type;
    return (
      (t = t.nodeName) &&
      t.toLowerCase() === "input" &&
      (e === "checkbox" || e === "radio")
    );
  }
  function Zg(t) {
    var e = _h(t) ? "checked" : "value",
      n = Object.getOwnPropertyDescriptor(t.constructor.prototype, e),
      l = "" + t[e];
    if (
      !t.hasOwnProperty(e) &&
      typeof n < "u" &&
      typeof n.get == "function" &&
      typeof n.set == "function"
    ) {
      var c = n.get,
        f = n.set;
      return (
        Object.defineProperty(t, e, {
          configurable: !0,
          get: function () {
            return c.call(this);
          },
          set: function (g) {
            (l = "" + g), f.call(this, g);
          },
        }),
        Object.defineProperty(t, e, { enumerable: n.enumerable }),
        {
          getValue: function () {
            return l;
          },
          setValue: function (g) {
            l = "" + g;
          },
          stopTracking: function () {
            (t._valueTracker = null), delete t[e];
          },
        }
      );
    }
  }
  function Bu(t) {
    t._valueTracker || (t._valueTracker = Zg(t));
  }
  function vh(t) {
    if (!t) return !1;
    var e = t._valueTracker;
    if (!e) return !0;
    var n = e.getValue(),
      l = "";
    return (
      t && (l = _h(t) ? (t.checked ? "true" : "false") : t.value),
      (t = l),
      t !== n ? (e.setValue(t), !0) : !1
    );
  }
  function Lu(t) {
    if (
      ((t = t || (typeof document < "u" ? document : void 0)), typeof t > "u")
    )
      return null;
    try {
      return t.activeElement || t.body;
    } catch {
      return t.body;
    }
  }
  var Kg = /[\n"\\]/g;
  function Ze(t) {
    return t.replace(Kg, function (e) {
      return "\\" + e.charCodeAt(0).toString(16) + " ";
    });
  }
  function js(t, e, n, l, c, f, g, _) {
    (t.name = ""),
      g != null &&
      typeof g != "function" &&
      typeof g != "symbol" &&
      typeof g != "boolean"
        ? (t.type = g)
        : t.removeAttribute("type"),
      e != null
        ? g === "number"
          ? ((e === 0 && t.value === "") || t.value != e) &&
            (t.value = "" + ke(e))
          : t.value !== "" + ke(e) && (t.value = "" + ke(e))
        : (g !== "submit" && g !== "reset") || t.removeAttribute("value"),
      e != null
        ? Bs(t, g, ke(e))
        : n != null
        ? Bs(t, g, ke(n))
        : l != null && t.removeAttribute("value"),
      c == null && f != null && (t.defaultChecked = !!f),
      c != null &&
        (t.checked = c && typeof c != "function" && typeof c != "symbol"),
      _ != null &&
      typeof _ != "function" &&
      typeof _ != "symbol" &&
      typeof _ != "boolean"
        ? (t.name = "" + ke(_))
        : t.removeAttribute("name");
  }
  function bh(t, e, n, l, c, f, g, _) {
    if (
      (f != null &&
        typeof f != "function" &&
        typeof f != "symbol" &&
        typeof f != "boolean" &&
        (t.type = f),
      e != null || n != null)
    ) {
      if (!((f !== "submit" && f !== "reset") || e != null)) return;
      (n = n != null ? "" + ke(n) : ""),
        (e = e != null ? "" + ke(e) : n),
        _ || e === t.value || (t.value = e),
        (t.defaultValue = e);
    }
    (l = l ?? c),
      (l = typeof l != "function" && typeof l != "symbol" && !!l),
      (t.checked = _ ? t.checked : !!l),
      (t.defaultChecked = !!l),
      g != null &&
        typeof g != "function" &&
        typeof g != "symbol" &&
        typeof g != "boolean" &&
        (t.name = g);
  }
  function Bs(t, e, n) {
    (e === "number" && Lu(t.ownerDocument) === t) ||
      t.defaultValue === "" + n ||
      (t.defaultValue = "" + n);
  }
  function cl(t, e, n, l) {
    if (((t = t.options), e)) {
      e = {};
      for (var c = 0; c < n.length; c++) e["$" + n[c]] = !0;
      for (n = 0; n < t.length; n++)
        (c = e.hasOwnProperty("$" + t[n].value)),
          t[n].selected !== c && (t[n].selected = c),
          c && l && (t[n].defaultSelected = !0);
    } else {
      for (n = "" + ke(n), e = null, c = 0; c < t.length; c++) {
        if (t[c].value === n) {
          (t[c].selected = !0), l && (t[c].defaultSelected = !0);
          return;
        }
        e !== null || t[c].disabled || (e = t[c]);
      }
      e !== null && (e.selected = !0);
    }
  }
  function Sh(t, e, n) {
    if (
      e != null &&
      ((e = "" + ke(e)), e !== t.value && (t.value = e), n == null)
    ) {
      t.defaultValue !== e && (t.defaultValue = e);
      return;
    }
    t.defaultValue = n != null ? "" + ke(n) : "";
  }
  function xh(t, e, n, l) {
    if (e == null) {
      if (l != null) {
        if (n != null) throw Error(i(92));
        if (gt(l)) {
          if (1 < l.length) throw Error(i(93));
          l = l[0];
        }
        n = l;
      }
      n == null && (n = ""), (e = n);
    }
    (n = ke(e)),
      (t.defaultValue = n),
      (l = t.textContent),
      l === n && l !== "" && l !== null && (t.value = l);
  }
  function ol(t, e) {
    if (e) {
      var n = t.firstChild;
      if (n && n === t.lastChild && n.nodeType === 3) {
        n.nodeValue = e;
        return;
      }
    }
    t.textContent = e;
  }
  var Jg = new Set(
    "animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(
      " "
    )
  );
  function Th(t, e, n) {
    var l = e.indexOf("--") === 0;
    n == null || typeof n == "boolean" || n === ""
      ? l
        ? t.setProperty(e, "")
        : e === "float"
        ? (t.cssFloat = "")
        : (t[e] = "")
      : l
      ? t.setProperty(e, n)
      : typeof n != "number" || n === 0 || Jg.has(e)
      ? e === "float"
        ? (t.cssFloat = n)
        : (t[e] = ("" + n).trim())
      : (t[e] = n + "px");
  }
  function Eh(t, e, n) {
    if (e != null && typeof e != "object") throw Error(i(62));
    if (((t = t.style), n != null)) {
      for (var l in n)
        !n.hasOwnProperty(l) ||
          (e != null && e.hasOwnProperty(l)) ||
          (l.indexOf("--") === 0
            ? t.setProperty(l, "")
            : l === "float"
            ? (t.cssFloat = "")
            : (t[l] = ""));
      for (var c in e)
        (l = e[c]), e.hasOwnProperty(c) && n[c] !== l && Th(t, c, l);
    } else for (var f in e) e.hasOwnProperty(f) && Th(t, f, e[f]);
  }
  function Ls(t) {
    if (t.indexOf("-") === -1) return !1;
    switch (t) {
      case "annotation-xml":
      case "color-profile":
      case "font-face":
      case "font-face-src":
      case "font-face-uri":
      case "font-face-format":
      case "font-face-name":
      case "missing-glyph":
        return !1;
      default:
        return !0;
    }
  }
  var Fg = new Map([
      ["acceptCharset", "accept-charset"],
      ["htmlFor", "for"],
      ["httpEquiv", "http-equiv"],
      ["crossOrigin", "crossorigin"],
      ["accentHeight", "accent-height"],
      ["alignmentBaseline", "alignment-baseline"],
      ["arabicForm", "arabic-form"],
      ["baselineShift", "baseline-shift"],
      ["capHeight", "cap-height"],
      ["clipPath", "clip-path"],
      ["clipRule", "clip-rule"],
      ["colorInterpolation", "color-interpolation"],
      ["colorInterpolationFilters", "color-interpolation-filters"],
      ["colorProfile", "color-profile"],
      ["colorRendering", "color-rendering"],
      ["dominantBaseline", "dominant-baseline"],
      ["enableBackground", "enable-background"],
      ["fillOpacity", "fill-opacity"],
      ["fillRule", "fill-rule"],
      ["floodColor", "flood-color"],
      ["floodOpacity", "flood-opacity"],
      ["fontFamily", "font-family"],
      ["fontSize", "font-size"],
      ["fontSizeAdjust", "font-size-adjust"],
      ["fontStretch", "font-stretch"],
      ["fontStyle", "font-style"],
      ["fontVariant", "font-variant"],
      ["fontWeight", "font-weight"],
      ["glyphName", "glyph-name"],
      ["glyphOrientationHorizontal", "glyph-orientation-horizontal"],
      ["glyphOrientationVertical", "glyph-orientation-vertical"],
      ["horizAdvX", "horiz-adv-x"],
      ["horizOriginX", "horiz-origin-x"],
      ["imageRendering", "image-rendering"],
      ["letterSpacing", "letter-spacing"],
      ["lightingColor", "lighting-color"],
      ["markerEnd", "marker-end"],
      ["markerMid", "marker-mid"],
      ["markerStart", "marker-start"],
      ["overlinePosition", "overline-position"],
      ["overlineThickness", "overline-thickness"],
      ["paintOrder", "paint-order"],
      ["panose-1", "panose-1"],
      ["pointerEvents", "pointer-events"],
      ["renderingIntent", "rendering-intent"],
      ["shapeRendering", "shape-rendering"],
      ["stopColor", "stop-color"],
      ["stopOpacity", "stop-opacity"],
      ["strikethroughPosition", "strikethrough-position"],
      ["strikethroughThickness", "strikethrough-thickness"],
      ["strokeDasharray", "stroke-dasharray"],
      ["strokeDashoffset", "stroke-dashoffset"],
      ["strokeLinecap", "stroke-linecap"],
      ["strokeLinejoin", "stroke-linejoin"],
      ["strokeMiterlimit", "stroke-miterlimit"],
      ["strokeOpacity", "stroke-opacity"],
      ["strokeWidth", "stroke-width"],
      ["textAnchor", "text-anchor"],
      ["textDecoration", "text-decoration"],
      ["textRendering", "text-rendering"],
      ["transformOrigin", "transform-origin"],
      ["underlinePosition", "underline-position"],
      ["underlineThickness", "underline-thickness"],
      ["unicodeBidi", "unicode-bidi"],
      ["unicodeRange", "unicode-range"],
      ["unitsPerEm", "units-per-em"],
      ["vAlphabetic", "v-alphabetic"],
      ["vHanging", "v-hanging"],
      ["vIdeographic", "v-ideographic"],
      ["vMathematical", "v-mathematical"],
      ["vectorEffect", "vector-effect"],
      ["vertAdvY", "vert-adv-y"],
      ["vertOriginX", "vert-origin-x"],
      ["vertOriginY", "vert-origin-y"],
      ["wordSpacing", "word-spacing"],
      ["writingMode", "writing-mode"],
      ["xmlnsXlink", "xmlns:xlink"],
      ["xHeight", "x-height"],
    ]),
    $g =
      /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
  function Hu(t) {
    return $g.test("" + t)
      ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')"
      : t;
  }
  var Hs = null;
  function qs(t) {
    return (
      (t = t.target || t.srcElement || window),
      t.correspondingUseElement && (t = t.correspondingUseElement),
      t.nodeType === 3 ? t.parentNode : t
    );
  }
  var fl = null,
    hl = null;
  function Oh(t) {
    var e = il(t);
    if (e && (t = e.stateNode)) {
      var n = t[ge] || null;
      t: switch (((t = e.stateNode), e.type)) {
        case "input":
          if (
            (js(
              t,
              n.value,
              n.defaultValue,
              n.defaultValue,
              n.checked,
              n.defaultChecked,
              n.type,
              n.name
            ),
            (e = n.name),
            n.type === "radio" && e != null)
          ) {
            for (n = t; n.parentNode; ) n = n.parentNode;
            for (
              n = n.querySelectorAll(
                'input[name="' + Ze("" + e) + '"][type="radio"]'
              ),
                e = 0;
              e < n.length;
              e++
            ) {
              var l = n[e];
              if (l !== t && l.form === t.form) {
                var c = l[ge] || null;
                if (!c) throw Error(i(90));
                js(
                  l,
                  c.value,
                  c.defaultValue,
                  c.defaultValue,
                  c.checked,
                  c.defaultChecked,
                  c.type,
                  c.name
                );
              }
            }
            for (e = 0; e < n.length; e++)
              (l = n[e]), l.form === t.form && vh(l);
          }
          break t;
        case "textarea":
          Sh(t, n.value, n.defaultValue);
          break t;
        case "select":
          (e = n.value), e != null && cl(t, !!n.multiple, e, !1);
      }
    }
  }
  var Ys = !1;
  function Rh(t, e, n) {
    if (Ys) return t(e, n);
    Ys = !0;
    try {
      var l = t(e);
      return l;
    } finally {
      if (
        ((Ys = !1),
        (fl !== null || hl !== null) &&
          (Tr(), fl && ((e = fl), (t = hl), (hl = fl = null), Oh(e), t)))
      )
        for (e = 0; e < t.length; e++) Oh(t[e]);
    }
  }
  function ci(t, e) {
    var n = t.stateNode;
    if (n === null) return null;
    var l = n[ge] || null;
    if (l === null) return null;
    n = l[e];
    t: switch (e) {
      case "onClick":
      case "onClickCapture":
      case "onDoubleClick":
      case "onDoubleClickCapture":
      case "onMouseDown":
      case "onMouseDownCapture":
      case "onMouseMove":
      case "onMouseMoveCapture":
      case "onMouseUp":
      case "onMouseUpCapture":
      case "onMouseEnter":
        (l = !l.disabled) ||
          ((t = t.type),
          (l = !(
            t === "button" ||
            t === "input" ||
            t === "select" ||
            t === "textarea"
          ))),
          (t = !l);
        break t;
      default:
        t = !1;
    }
    if (t) return null;
    if (n && typeof n != "function") throw Error(i(231, e, typeof n));
    return n;
  }
  var Tn = !(
      typeof window > "u" ||
      typeof window.document > "u" ||
      typeof window.document.createElement > "u"
    ),
    Xs = !1;
  if (Tn)
    try {
      var oi = {};
      Object.defineProperty(oi, "passive", {
        get: function () {
          Xs = !0;
        },
      }),
        window.addEventListener("test", oi, oi),
        window.removeEventListener("test", oi, oi);
    } catch {
      Xs = !1;
    }
  var Jn = null,
    Gs = null,
    qu = null;
  function Ah() {
    if (qu) return qu;
    var t,
      e = Gs,
      n = e.length,
      l,
      c = "value" in Jn ? Jn.value : Jn.textContent,
      f = c.length;
    for (t = 0; t < n && e[t] === c[t]; t++);
    var g = n - t;
    for (l = 1; l <= g && e[n - l] === c[f - l]; l++);
    return (qu = c.slice(t, 1 < l ? 1 - l : void 0));
  }
  function Yu(t) {
    var e = t.keyCode;
    return (
      "charCode" in t
        ? ((t = t.charCode), t === 0 && e === 13 && (t = 13))
        : (t = e),
      t === 10 && (t = 13),
      32 <= t || t === 13 ? t : 0
    );
  }
  function Xu() {
    return !0;
  }
  function wh() {
    return !1;
  }
  function _e(t) {
    function e(n, l, c, f, g) {
      (this._reactName = n),
        (this._targetInst = c),
        (this.type = l),
        (this.nativeEvent = f),
        (this.target = g),
        (this.currentTarget = null);
      for (var _ in t)
        t.hasOwnProperty(_) && ((n = t[_]), (this[_] = n ? n(f) : f[_]));
      return (
        (this.isDefaultPrevented = (
          f.defaultPrevented != null ? f.defaultPrevented : f.returnValue === !1
        )
          ? Xu
          : wh),
        (this.isPropagationStopped = wh),
        this
      );
    }
    return (
      y(e.prototype, {
        preventDefault: function () {
          this.defaultPrevented = !0;
          var n = this.nativeEvent;
          n &&
            (n.preventDefault
              ? n.preventDefault()
              : typeof n.returnValue != "unknown" && (n.returnValue = !1),
            (this.isDefaultPrevented = Xu));
        },
        stopPropagation: function () {
          var n = this.nativeEvent;
          n &&
            (n.stopPropagation
              ? n.stopPropagation()
              : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0),
            (this.isPropagationStopped = Xu));
        },
        persist: function () {},
        isPersistent: Xu,
      }),
      e
    );
  }
  var Aa = {
      eventPhase: 0,
      bubbles: 0,
      cancelable: 0,
      timeStamp: function (t) {
        return t.timeStamp || Date.now();
      },
      defaultPrevented: 0,
      isTrusted: 0,
    },
    Gu = _e(Aa),
    fi = y({}, Aa, { view: 0, detail: 0 }),
    Pg = _e(fi),
    Vs,
    Qs,
    hi,
    Vu = y({}, fi, {
      screenX: 0,
      screenY: 0,
      clientX: 0,
      clientY: 0,
      pageX: 0,
      pageY: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      getModifierState: Zs,
      button: 0,
      buttons: 0,
      relatedTarget: function (t) {
        return t.relatedTarget === void 0
          ? t.fromElement === t.srcElement
            ? t.toElement
            : t.fromElement
          : t.relatedTarget;
      },
      movementX: function (t) {
        return "movementX" in t
          ? t.movementX
          : (t !== hi &&
              (hi && t.type === "mousemove"
                ? ((Vs = t.screenX - hi.screenX), (Qs = t.screenY - hi.screenY))
                : (Qs = Vs = 0),
              (hi = t)),
            Vs);
      },
      movementY: function (t) {
        return "movementY" in t ? t.movementY : Qs;
      },
    }),
    Dh = _e(Vu),
    Wg = y({}, Vu, { dataTransfer: 0 }),
    Ig = _e(Wg),
    t_ = y({}, fi, { relatedTarget: 0 }),
    ks = _e(t_),
    e_ = y({}, Aa, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
    n_ = _e(e_),
    a_ = y({}, Aa, {
      clipboardData: function (t) {
        return "clipboardData" in t ? t.clipboardData : window.clipboardData;
      },
    }),
    l_ = _e(a_),
    i_ = y({}, Aa, { data: 0 }),
    Ch = _e(i_),
    u_ = {
      Esc: "Escape",
      Spacebar: " ",
      Left: "ArrowLeft",
      Up: "ArrowUp",
      Right: "ArrowRight",
      Down: "ArrowDown",
      Del: "Delete",
      Win: "OS",
      Menu: "ContextMenu",
      Apps: "ContextMenu",
      Scroll: "ScrollLock",
      MozPrintableKey: "Unidentified",
    },
    r_ = {
      8: "Backspace",
      9: "Tab",
      12: "Clear",
      13: "Enter",
      16: "Shift",
      17: "Control",
      18: "Alt",
      19: "Pause",
      20: "CapsLock",
      27: "Escape",
      32: " ",
      33: "PageUp",
      34: "PageDown",
      35: "End",
      36: "Home",
      37: "ArrowLeft",
      38: "ArrowUp",
      39: "ArrowRight",
      40: "ArrowDown",
      45: "Insert",
      46: "Delete",
      112: "F1",
      113: "F2",
      114: "F3",
      115: "F4",
      116: "F5",
      117: "F6",
      118: "F7",
      119: "F8",
      120: "F9",
      121: "F10",
      122: "F11",
      123: "F12",
      144: "NumLock",
      145: "ScrollLock",
      224: "Meta",
    },
    s_ = {
      Alt: "altKey",
      Control: "ctrlKey",
      Meta: "metaKey",
      Shift: "shiftKey",
    };
  function c_(t) {
    var e = this.nativeEvent;
    return e.getModifierState
      ? e.getModifierState(t)
      : (t = s_[t])
      ? !!e[t]
      : !1;
  }
  function Zs() {
    return c_;
  }
  var o_ = y({}, fi, {
      key: function (t) {
        if (t.key) {
          var e = u_[t.key] || t.key;
          if (e !== "Unidentified") return e;
        }
        return t.type === "keypress"
          ? ((t = Yu(t)), t === 13 ? "Enter" : String.fromCharCode(t))
          : t.type === "keydown" || t.type === "keyup"
          ? r_[t.keyCode] || "Unidentified"
          : "";
      },
      code: 0,
      location: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      repeat: 0,
      locale: 0,
      getModifierState: Zs,
      charCode: function (t) {
        return t.type === "keypress" ? Yu(t) : 0;
      },
      keyCode: function (t) {
        return t.type === "keydown" || t.type === "keyup" ? t.keyCode : 0;
      },
      which: function (t) {
        return t.type === "keypress"
          ? Yu(t)
          : t.type === "keydown" || t.type === "keyup"
          ? t.keyCode
          : 0;
      },
    }),
    f_ = _e(o_),
    h_ = y({}, Vu, {
      pointerId: 0,
      width: 0,
      height: 0,
      pressure: 0,
      tangentialPressure: 0,
      tiltX: 0,
      tiltY: 0,
      twist: 0,
      pointerType: 0,
      isPrimary: 0,
    }),
    Nh = _e(h_),
    d_ = y({}, fi, {
      touches: 0,
      targetTouches: 0,
      changedTouches: 0,
      altKey: 0,
      metaKey: 0,
      ctrlKey: 0,
      shiftKey: 0,
      getModifierState: Zs,
    }),
    m_ = _e(d_),
    p_ = y({}, Aa, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
    y_ = _e(p_),
    g_ = y({}, Vu, {
      deltaX: function (t) {
        return "deltaX" in t
          ? t.deltaX
          : "wheelDeltaX" in t
          ? -t.wheelDeltaX
          : 0;
      },
      deltaY: function (t) {
        return "deltaY" in t
          ? t.deltaY
          : "wheelDeltaY" in t
          ? -t.wheelDeltaY
          : "wheelDelta" in t
          ? -t.wheelDelta
          : 0;
      },
      deltaZ: 0,
      deltaMode: 0,
    }),
    __ = _e(g_),
    v_ = y({}, Aa, { newState: 0, oldState: 0 }),
    b_ = _e(v_),
    S_ = [9, 13, 27, 32],
    Ks = Tn && "CompositionEvent" in window,
    di = null;
  Tn && "documentMode" in document && (di = document.documentMode);
  var x_ = Tn && "TextEvent" in window && !di,
    Mh = Tn && (!Ks || (di && 8 < di && 11 >= di)),
    zh = " ",
    Uh = !1;
  function jh(t, e) {
    switch (t) {
      case "keyup":
        return S_.indexOf(e.keyCode) !== -1;
      case "keydown":
        return e.keyCode !== 229;
      case "keypress":
      case "mousedown":
      case "focusout":
        return !0;
      default:
        return !1;
    }
  }
  function Bh(t) {
    return (t = t.detail), typeof t == "object" && "data" in t ? t.data : null;
  }
  var dl = !1;
  function T_(t, e) {
    switch (t) {
      case "compositionend":
        return Bh(e);
      case "keypress":
        return e.which !== 32 ? null : ((Uh = !0), zh);
      case "textInput":
        return (t = e.data), t === zh && Uh ? null : t;
      default:
        return null;
    }
  }
  function E_(t, e) {
    if (dl)
      return t === "compositionend" || (!Ks && jh(t, e))
        ? ((t = Ah()), (qu = Gs = Jn = null), (dl = !1), t)
        : null;
    switch (t) {
      case "paste":
        return null;
      case "keypress":
        if (!(e.ctrlKey || e.altKey || e.metaKey) || (e.ctrlKey && e.altKey)) {
          if (e.char && 1 < e.char.length) return e.char;
          if (e.which) return String.fromCharCode(e.which);
        }
        return null;
      case "compositionend":
        return Mh && e.locale !== "ko" ? null : e.data;
      default:
        return null;
    }
  }
  var O_ = {
    color: !0,
    date: !0,
    datetime: !0,
    "datetime-local": !0,
    email: !0,
    month: !0,
    number: !0,
    password: !0,
    range: !0,
    search: !0,
    tel: !0,
    text: !0,
    time: !0,
    url: !0,
    week: !0,
  };
  function Lh(t) {
    var e = t && t.nodeName && t.nodeName.toLowerCase();
    return e === "input" ? !!O_[t.type] : e === "textarea";
  }
  function Hh(t, e, n, l) {
    fl ? (hl ? hl.push(l) : (hl = [l])) : (fl = l),
      (e = Dr(e, "onChange")),
      0 < e.length &&
        ((n = new Gu("onChange", "change", null, n, l)),
        t.push({ event: n, listeners: e }));
  }
  var mi = null,
    pi = null;
  function R_(t) {
    _p(t, 0);
  }
  function Qu(t) {
    var e = si(t);
    if (vh(e)) return t;
  }
  function qh(t, e) {
    if (t === "change") return e;
  }
  var Yh = !1;
  if (Tn) {
    var Js;
    if (Tn) {
      var Fs = "oninput" in document;
      if (!Fs) {
        var Xh = document.createElement("div");
        Xh.setAttribute("oninput", "return;"),
          (Fs = typeof Xh.oninput == "function");
      }
      Js = Fs;
    } else Js = !1;
    Yh = Js && (!document.documentMode || 9 < document.documentMode);
  }
  function Gh() {
    mi && (mi.detachEvent("onpropertychange", Vh), (pi = mi = null));
  }
  function Vh(t) {
    if (t.propertyName === "value" && Qu(pi)) {
      var e = [];
      Hh(e, pi, t, qs(t)), Rh(R_, e);
    }
  }
  function A_(t, e, n) {
    t === "focusin"
      ? (Gh(), (mi = e), (pi = n), mi.attachEvent("onpropertychange", Vh))
      : t === "focusout" && Gh();
  }
  function w_(t) {
    if (t === "selectionchange" || t === "keyup" || t === "keydown")
      return Qu(pi);
  }
  function D_(t, e) {
    if (t === "click") return Qu(e);
  }
  function C_(t, e) {
    if (t === "input" || t === "change") return Qu(e);
  }
  function N_(t, e) {
    return (t === e && (t !== 0 || 1 / t === 1 / e)) || (t !== t && e !== e);
  }
  var Ne = typeof Object.is == "function" ? Object.is : N_;
  function yi(t, e) {
    if (Ne(t, e)) return !0;
    if (
      typeof t != "object" ||
      t === null ||
      typeof e != "object" ||
      e === null
    )
      return !1;
    var n = Object.keys(t),
      l = Object.keys(e);
    if (n.length !== l.length) return !1;
    for (l = 0; l < n.length; l++) {
      var c = n[l];
      if (!Es.call(e, c) || !Ne(t[c], e[c])) return !1;
    }
    return !0;
  }
  function Qh(t) {
    for (; t && t.firstChild; ) t = t.firstChild;
    return t;
  }
  function kh(t, e) {
    var n = Qh(t);
    t = 0;
    for (var l; n; ) {
      if (n.nodeType === 3) {
        if (((l = t + n.textContent.length), t <= e && l >= e))
          return { node: n, offset: e - t };
        t = l;
      }
      t: {
        for (; n; ) {
          if (n.nextSibling) {
            n = n.nextSibling;
            break t;
          }
          n = n.parentNode;
        }
        n = void 0;
      }
      n = Qh(n);
    }
  }
  function Zh(t, e) {
    return t && e
      ? t === e
        ? !0
        : t && t.nodeType === 3
        ? !1
        : e && e.nodeType === 3
        ? Zh(t, e.parentNode)
        : "contains" in t
        ? t.contains(e)
        : t.compareDocumentPosition
        ? !!(t.compareDocumentPosition(e) & 16)
        : !1
      : !1;
  }
  function Kh(t) {
    t =
      t != null &&
      t.ownerDocument != null &&
      t.ownerDocument.defaultView != null
        ? t.ownerDocument.defaultView
        : window;
    for (var e = Lu(t.document); e instanceof t.HTMLIFrameElement; ) {
      try {
        var n = typeof e.contentWindow.location.href == "string";
      } catch {
        n = !1;
      }
      if (n) t = e.contentWindow;
      else break;
      e = Lu(t.document);
    }
    return e;
  }
  function $s(t) {
    var e = t && t.nodeName && t.nodeName.toLowerCase();
    return (
      e &&
      ((e === "input" &&
        (t.type === "text" ||
          t.type === "search" ||
          t.type === "tel" ||
          t.type === "url" ||
          t.type === "password")) ||
        e === "textarea" ||
        t.contentEditable === "true")
    );
  }
  var M_ = Tn && "documentMode" in document && 11 >= document.documentMode,
    ml = null,
    Ps = null,
    gi = null,
    Ws = !1;
  function Jh(t, e, n) {
    var l =
      n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
    Ws ||
      ml == null ||
      ml !== Lu(l) ||
      ((l = ml),
      "selectionStart" in l && $s(l)
        ? (l = { start: l.selectionStart, end: l.selectionEnd })
        : ((l = (
            (l.ownerDocument && l.ownerDocument.defaultView) ||
            window
          ).getSelection()),
          (l = {
            anchorNode: l.anchorNode,
            anchorOffset: l.anchorOffset,
            focusNode: l.focusNode,
            focusOffset: l.focusOffset,
          })),
      (gi && yi(gi, l)) ||
        ((gi = l),
        (l = Dr(Ps, "onSelect")),
        0 < l.length &&
          ((e = new Gu("onSelect", "select", null, e, n)),
          t.push({ event: e, listeners: l }),
          (e.target = ml))));
  }
  function wa(t, e) {
    var n = {};
    return (
      (n[t.toLowerCase()] = e.toLowerCase()),
      (n["Webkit" + t] = "webkit" + e),
      (n["Moz" + t] = "moz" + e),
      n
    );
  }
  var pl = {
      animationend: wa("Animation", "AnimationEnd"),
      animationiteration: wa("Animation", "AnimationIteration"),
      animationstart: wa("Animation", "AnimationStart"),
      transitionrun: wa("Transition", "TransitionRun"),
      transitionstart: wa("Transition", "TransitionStart"),
      transitioncancel: wa("Transition", "TransitionCancel"),
      transitionend: wa("Transition", "TransitionEnd"),
    },
    Is = {},
    Fh = {};
  Tn &&
    ((Fh = document.createElement("div").style),
    "AnimationEvent" in window ||
      (delete pl.animationend.animation,
      delete pl.animationiteration.animation,
      delete pl.animationstart.animation),
    "TransitionEvent" in window || delete pl.transitionend.transition);
  function Da(t) {
    if (Is[t]) return Is[t];
    if (!pl[t]) return t;
    var e = pl[t],
      n;
    for (n in e) if (e.hasOwnProperty(n) && n in Fh) return (Is[t] = e[n]);
    return t;
  }
  var $h = Da("animationend"),
    Ph = Da("animationiteration"),
    Wh = Da("animationstart"),
    z_ = Da("transitionrun"),
    U_ = Da("transitionstart"),
    j_ = Da("transitioncancel"),
    Ih = Da("transitionend"),
    td = new Map(),
    tc =
      "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
        " "
      );
  tc.push("scrollEnd");
  function nn(t, e) {
    td.set(t, e), Ra(e, [t]);
  }
  var ed = new WeakMap();
  function Ke(t, e) {
    if (typeof t == "object" && t !== null) {
      var n = ed.get(t);
      return n !== void 0
        ? n
        : ((e = { value: t, source: e, stack: gh(e) }), ed.set(t, e), e);
    }
    return { value: t, source: e, stack: gh(e) };
  }
  var Je = [],
    yl = 0,
    ec = 0;
  function ku() {
    for (var t = yl, e = (ec = yl = 0); e < t; ) {
      var n = Je[e];
      Je[e++] = null;
      var l = Je[e];
      Je[e++] = null;
      var c = Je[e];
      Je[e++] = null;
      var f = Je[e];
      if (((Je[e++] = null), l !== null && c !== null)) {
        var g = l.pending;
        g === null ? (c.next = c) : ((c.next = g.next), (g.next = c)),
          (l.pending = c);
      }
      f !== 0 && nd(n, c, f);
    }
  }
  function Zu(t, e, n, l) {
    (Je[yl++] = t),
      (Je[yl++] = e),
      (Je[yl++] = n),
      (Je[yl++] = l),
      (ec |= l),
      (t.lanes |= l),
      (t = t.alternate),
      t !== null && (t.lanes |= l);
  }
  function nc(t, e, n, l) {
    return Zu(t, e, n, l), Ku(t);
  }
  function gl(t, e) {
    return Zu(t, null, null, e), Ku(t);
  }
  function nd(t, e, n) {
    t.lanes |= n;
    var l = t.alternate;
    l !== null && (l.lanes |= n);
    for (var c = !1, f = t.return; f !== null; )
      (f.childLanes |= n),
        (l = f.alternate),
        l !== null && (l.childLanes |= n),
        f.tag === 22 &&
          ((t = f.stateNode), t === null || t._visibility & 1 || (c = !0)),
        (t = f),
        (f = f.return);
    return t.tag === 3
      ? ((f = t.stateNode),
        c &&
          e !== null &&
          ((c = 31 - Ce(n)),
          (t = f.hiddenUpdates),
          (l = t[c]),
          l === null ? (t[c] = [e]) : l.push(e),
          (e.lane = n | 536870912)),
        f)
      : null;
  }
  function Ku(t) {
    if (50 < Gi) throw ((Gi = 0), (so = null), Error(i(185)));
    for (var e = t.return; e !== null; ) (t = e), (e = t.return);
    return t.tag === 3 ? t.stateNode : null;
  }
  var _l = {};
  function B_(t, e, n, l) {
    (this.tag = t),
      (this.key = n),
      (this.sibling =
        this.child =
        this.return =
        this.stateNode =
        this.type =
        this.elementType =
          null),
      (this.index = 0),
      (this.refCleanup = this.ref = null),
      (this.pendingProps = e),
      (this.dependencies =
        this.memoizedState =
        this.updateQueue =
        this.memoizedProps =
          null),
      (this.mode = l),
      (this.subtreeFlags = this.flags = 0),
      (this.deletions = null),
      (this.childLanes = this.lanes = 0),
      (this.alternate = null);
  }
  function Me(t, e, n, l) {
    return new B_(t, e, n, l);
  }
  function ac(t) {
    return (t = t.prototype), !(!t || !t.isReactComponent);
  }
  function En(t, e) {
    var n = t.alternate;
    return (
      n === null
        ? ((n = Me(t.tag, e, t.key, t.mode)),
          (n.elementType = t.elementType),
          (n.type = t.type),
          (n.stateNode = t.stateNode),
          (n.alternate = t),
          (t.alternate = n))
        : ((n.pendingProps = e),
          (n.type = t.type),
          (n.flags = 0),
          (n.subtreeFlags = 0),
          (n.deletions = null)),
      (n.flags = t.flags & 65011712),
      (n.childLanes = t.childLanes),
      (n.lanes = t.lanes),
      (n.child = t.child),
      (n.memoizedProps = t.memoizedProps),
      (n.memoizedState = t.memoizedState),
      (n.updateQueue = t.updateQueue),
      (e = t.dependencies),
      (n.dependencies =
        e === null ? null : { lanes: e.lanes, firstContext: e.firstContext }),
      (n.sibling = t.sibling),
      (n.index = t.index),
      (n.ref = t.ref),
      (n.refCleanup = t.refCleanup),
      n
    );
  }
  function ad(t, e) {
    t.flags &= 65011714;
    var n = t.alternate;
    return (
      n === null
        ? ((t.childLanes = 0),
          (t.lanes = e),
          (t.child = null),
          (t.subtreeFlags = 0),
          (t.memoizedProps = null),
          (t.memoizedState = null),
          (t.updateQueue = null),
          (t.dependencies = null),
          (t.stateNode = null))
        : ((t.childLanes = n.childLanes),
          (t.lanes = n.lanes),
          (t.child = n.child),
          (t.subtreeFlags = 0),
          (t.deletions = null),
          (t.memoizedProps = n.memoizedProps),
          (t.memoizedState = n.memoizedState),
          (t.updateQueue = n.updateQueue),
          (t.type = n.type),
          (e = n.dependencies),
          (t.dependencies =
            e === null
              ? null
              : { lanes: e.lanes, firstContext: e.firstContext })),
      t
    );
  }
  function Ju(t, e, n, l, c, f) {
    var g = 0;
    if (((l = t), typeof t == "function")) ac(t) && (g = 1);
    else if (typeof t == "string")
      g = Hv(t, n, et.current)
        ? 26
        : t === "html" || t === "head" || t === "body"
        ? 27
        : 5;
    else
      t: switch (t) {
        case K:
          return (t = Me(31, n, e, c)), (t.elementType = K), (t.lanes = f), t;
        case x:
          return Ca(n.children, c, f, e);
        case b:
          (g = 8), (c |= 24);
          break;
        case E:
          return (
            (t = Me(12, n, e, c | 2)), (t.elementType = E), (t.lanes = f), t
          );
        case U:
          return (t = Me(13, n, e, c)), (t.elementType = U), (t.lanes = f), t;
        case X:
          return (t = Me(19, n, e, c)), (t.elementType = X), (t.lanes = f), t;
        default:
          if (typeof t == "object" && t !== null)
            switch (t.$$typeof) {
              case A:
              case M:
                g = 10;
                break t;
              case N:
                g = 9;
                break t;
              case G:
                g = 11;
                break t;
              case k:
                g = 14;
                break t;
              case F:
                (g = 16), (l = null);
                break t;
            }
          (g = 29),
            (n = Error(i(130, t === null ? "null" : typeof t, ""))),
            (l = null);
      }
    return (
      (e = Me(g, n, e, c)), (e.elementType = t), (e.type = l), (e.lanes = f), e
    );
  }
  function Ca(t, e, n, l) {
    return (t = Me(7, t, l, e)), (t.lanes = n), t;
  }
  function lc(t, e, n) {
    return (t = Me(6, t, null, e)), (t.lanes = n), t;
  }
  function ic(t, e, n) {
    return (
      (e = Me(4, t.children !== null ? t.children : [], t.key, e)),
      (e.lanes = n),
      (e.stateNode = {
        containerInfo: t.containerInfo,
        pendingChildren: null,
        implementation: t.implementation,
      }),
      e
    );
  }
  var vl = [],
    bl = 0,
    Fu = null,
    $u = 0,
    Fe = [],
    $e = 0,
    Na = null,
    On = 1,
    Rn = "";
  function Ma(t, e) {
    (vl[bl++] = $u), (vl[bl++] = Fu), (Fu = t), ($u = e);
  }
  function ld(t, e, n) {
    (Fe[$e++] = On), (Fe[$e++] = Rn), (Fe[$e++] = Na), (Na = t);
    var l = On;
    t = Rn;
    var c = 32 - Ce(l) - 1;
    (l &= ~(1 << c)), (n += 1);
    var f = 32 - Ce(e) + c;
    if (30 < f) {
      var g = c - (c % 5);
      (f = (l & ((1 << g) - 1)).toString(32)),
        (l >>= g),
        (c -= g),
        (On = (1 << (32 - Ce(e) + c)) | (n << c) | l),
        (Rn = f + t);
    } else (On = (1 << f) | (n << c) | l), (Rn = t);
  }
  function uc(t) {
    t.return !== null && (Ma(t, 1), ld(t, 1, 0));
  }
  function rc(t) {
    for (; t === Fu; )
      (Fu = vl[--bl]), (vl[bl] = null), ($u = vl[--bl]), (vl[bl] = null);
    for (; t === Na; )
      (Na = Fe[--$e]),
        (Fe[$e] = null),
        (Rn = Fe[--$e]),
        (Fe[$e] = null),
        (On = Fe[--$e]),
        (Fe[$e] = null);
  }
  var pe = null,
    Xt = null,
    Et = !1,
    za = null,
    sn = !1,
    sc = Error(i(519));
  function Ua(t) {
    var e = Error(i(418, ""));
    throw (bi(Ke(e, t)), sc);
  }
  function id(t) {
    var e = t.stateNode,
      n = t.type,
      l = t.memoizedProps;
    switch (((e[se] = t), (e[ge] = l), n)) {
      case "dialog":
        yt("cancel", e), yt("close", e);
        break;
      case "iframe":
      case "object":
      case "embed":
        yt("load", e);
        break;
      case "video":
      case "audio":
        for (n = 0; n < Qi.length; n++) yt(Qi[n], e);
        break;
      case "source":
        yt("error", e);
        break;
      case "img":
      case "image":
      case "link":
        yt("error", e), yt("load", e);
        break;
      case "details":
        yt("toggle", e);
        break;
      case "input":
        yt("invalid", e),
          bh(
            e,
            l.value,
            l.defaultValue,
            l.checked,
            l.defaultChecked,
            l.type,
            l.name,
            !0
          ),
          Bu(e);
        break;
      case "select":
        yt("invalid", e);
        break;
      case "textarea":
        yt("invalid", e), xh(e, l.value, l.defaultValue, l.children), Bu(e);
    }
    (n = l.children),
      (typeof n != "string" && typeof n != "number" && typeof n != "bigint") ||
      e.textContent === "" + n ||
      l.suppressHydrationWarning === !0 ||
      xp(e.textContent, n)
        ? (l.popover != null && (yt("beforetoggle", e), yt("toggle", e)),
          l.onScroll != null && yt("scroll", e),
          l.onScrollEnd != null && yt("scrollend", e),
          l.onClick != null && (e.onclick = Cr),
          (e = !0))
        : (e = !1),
      e || Ua(t);
  }
  function ud(t) {
    for (pe = t.return; pe; )
      switch (pe.tag) {
        case 5:
        case 13:
          sn = !1;
          return;
        case 27:
        case 3:
          sn = !0;
          return;
        default:
          pe = pe.return;
      }
  }
  function _i(t) {
    if (t !== pe) return !1;
    if (!Et) return ud(t), (Et = !0), !1;
    var e = t.tag,
      n;
    if (
      ((n = e !== 3 && e !== 27) &&
        ((n = e === 5) &&
          ((n = t.type),
          (n =
            !(n !== "form" && n !== "button") || Oo(t.type, t.memoizedProps))),
        (n = !n)),
      n && Xt && Ua(t),
      ud(t),
      e === 13)
    ) {
      if (((t = t.memoizedState), (t = t !== null ? t.dehydrated : null), !t))
        throw Error(i(317));
      t: {
        for (t = t.nextSibling, e = 0; t; ) {
          if (t.nodeType === 8)
            if (((n = t.data), n === "/$")) {
              if (e === 0) {
                Xt = ln(t.nextSibling);
                break t;
              }
              e--;
            } else (n !== "$" && n !== "$!" && n !== "$?") || e++;
          t = t.nextSibling;
        }
        Xt = null;
      }
    } else
      e === 27
        ? ((e = Xt), oa(t.type) ? ((t = Do), (Do = null), (Xt = t)) : (Xt = e))
        : (Xt = pe ? ln(t.stateNode.nextSibling) : null);
    return !0;
  }
  function vi() {
    (Xt = pe = null), (Et = !1);
  }
  function rd() {
    var t = za;
    return (
      t !== null &&
        (Se === null ? (Se = t) : Se.push.apply(Se, t), (za = null)),
      t
    );
  }
  function bi(t) {
    za === null ? (za = [t]) : za.push(t);
  }
  var cc = J(null),
    ja = null,
    An = null;
  function Fn(t, e, n) {
    W(cc, e._currentValue), (e._currentValue = n);
  }
  function wn(t) {
    (t._currentValue = cc.current), P(cc);
  }
  function oc(t, e, n) {
    for (; t !== null; ) {
      var l = t.alternate;
      if (
        ((t.childLanes & e) !== e
          ? ((t.childLanes |= e), l !== null && (l.childLanes |= e))
          : l !== null && (l.childLanes & e) !== e && (l.childLanes |= e),
        t === n)
      )
        break;
      t = t.return;
    }
  }
  function fc(t, e, n, l) {
    var c = t.child;
    for (c !== null && (c.return = t); c !== null; ) {
      var f = c.dependencies;
      if (f !== null) {
        var g = c.child;
        f = f.firstContext;
        t: for (; f !== null; ) {
          var _ = f;
          f = c;
          for (var R = 0; R < e.length; R++)
            if (_.context === e[R]) {
              (f.lanes |= n),
                (_ = f.alternate),
                _ !== null && (_.lanes |= n),
                oc(f.return, n, t),
                l || (g = null);
              break t;
            }
          f = _.next;
        }
      } else if (c.tag === 18) {
        if (((g = c.return), g === null)) throw Error(i(341));
        (g.lanes |= n),
          (f = g.alternate),
          f !== null && (f.lanes |= n),
          oc(g, n, t),
          (g = null);
      } else g = c.child;
      if (g !== null) g.return = c;
      else
        for (g = c; g !== null; ) {
          if (g === t) {
            g = null;
            break;
          }
          if (((c = g.sibling), c !== null)) {
            (c.return = g.return), (g = c);
            break;
          }
          g = g.return;
        }
      c = g;
    }
  }
  function Si(t, e, n, l) {
    t = null;
    for (var c = e, f = !1; c !== null; ) {
      if (!f) {
        if ((c.flags & 524288) !== 0) f = !0;
        else if ((c.flags & 262144) !== 0) break;
      }
      if (c.tag === 10) {
        var g = c.alternate;
        if (g === null) throw Error(i(387));
        if (((g = g.memoizedProps), g !== null)) {
          var _ = c.type;
          Ne(c.pendingProps.value, g.value) ||
            (t !== null ? t.push(_) : (t = [_]));
        }
      } else if (c === we.current) {
        if (((g = c.alternate), g === null)) throw Error(i(387));
        g.memoizedState.memoizedState !== c.memoizedState.memoizedState &&
          (t !== null ? t.push($i) : (t = [$i]));
      }
      c = c.return;
    }
    t !== null && fc(e, t, n, l), (e.flags |= 262144);
  }
  function Pu(t) {
    for (t = t.firstContext; t !== null; ) {
      if (!Ne(t.context._currentValue, t.memoizedValue)) return !0;
      t = t.next;
    }
    return !1;
  }
  function Ba(t) {
    (ja = t),
      (An = null),
      (t = t.dependencies),
      t !== null && (t.firstContext = null);
  }
  function ce(t) {
    return sd(ja, t);
  }
  function Wu(t, e) {
    return ja === null && Ba(t), sd(t, e);
  }
  function sd(t, e) {
    var n = e._currentValue;
    if (((e = { context: e, memoizedValue: n, next: null }), An === null)) {
      if (t === null) throw Error(i(308));
      (An = e),
        (t.dependencies = { lanes: 0, firstContext: e }),
        (t.flags |= 524288);
    } else An = An.next = e;
    return n;
  }
  var L_ =
      typeof AbortController < "u"
        ? AbortController
        : function () {
            var t = [],
              e = (this.signal = {
                aborted: !1,
                addEventListener: function (n, l) {
                  t.push(l);
                },
              });
            this.abort = function () {
              (e.aborted = !0),
                t.forEach(function (n) {
                  return n();
                });
            };
          },
    H_ = s.unstable_scheduleCallback,
    q_ = s.unstable_NormalPriority,
    Pt = {
      $$typeof: M,
      Consumer: null,
      Provider: null,
      _currentValue: null,
      _currentValue2: null,
      _threadCount: 0,
    };
  function hc() {
    return { controller: new L_(), data: new Map(), refCount: 0 };
  }
  function xi(t) {
    t.refCount--,
      t.refCount === 0 &&
        H_(q_, function () {
          t.controller.abort();
        });
  }
  var Ti = null,
    dc = 0,
    Sl = 0,
    xl = null;
  function Y_(t, e) {
    if (Ti === null) {
      var n = (Ti = []);
      (dc = 0),
        (Sl = yo()),
        (xl = {
          status: "pending",
          value: void 0,
          then: function (l) {
            n.push(l);
          },
        });
    }
    return dc++, e.then(cd, cd), e;
  }
  function cd() {
    if (--dc === 0 && Ti !== null) {
      xl !== null && (xl.status = "fulfilled");
      var t = Ti;
      (Ti = null), (Sl = 0), (xl = null);
      for (var e = 0; e < t.length; e++) (0, t[e])();
    }
  }
  function X_(t, e) {
    var n = [],
      l = {
        status: "pending",
        value: null,
        reason: null,
        then: function (c) {
          n.push(c);
        },
      };
    return (
      t.then(
        function () {
          (l.status = "fulfilled"), (l.value = e);
          for (var c = 0; c < n.length; c++) (0, n[c])(e);
        },
        function (c) {
          for (l.status = "rejected", l.reason = c, c = 0; c < n.length; c++)
            (0, n[c])(void 0);
        }
      ),
      l
    );
  }
  var od = q.S;
  q.S = function (t, e) {
    typeof e == "object" &&
      e !== null &&
      typeof e.then == "function" &&
      Y_(t, e),
      od !== null && od(t, e);
  };
  var La = J(null);
  function mc() {
    var t = La.current;
    return t !== null ? t : Mt.pooledCache;
  }
  function Iu(t, e) {
    e === null ? W(La, La.current) : W(La, e.pool);
  }
  function fd() {
    var t = mc();
    return t === null ? null : { parent: Pt._currentValue, pool: t };
  }
  var Ei = Error(i(460)),
    hd = Error(i(474)),
    tr = Error(i(542)),
    pc = { then: function () {} };
  function dd(t) {
    return (t = t.status), t === "fulfilled" || t === "rejected";
  }
  function er() {}
  function md(t, e, n) {
    switch (
      ((n = t[n]),
      n === void 0 ? t.push(e) : n !== e && (e.then(er, er), (e = n)),
      e.status)
    ) {
      case "fulfilled":
        return e.value;
      case "rejected":
        throw ((t = e.reason), yd(t), t);
      default:
        if (typeof e.status == "string") e.then(er, er);
        else {
          if (((t = Mt), t !== null && 100 < t.shellSuspendCounter))
            throw Error(i(482));
          (t = e),
            (t.status = "pending"),
            t.then(
              function (l) {
                if (e.status === "pending") {
                  var c = e;
                  (c.status = "fulfilled"), (c.value = l);
                }
              },
              function (l) {
                if (e.status === "pending") {
                  var c = e;
                  (c.status = "rejected"), (c.reason = l);
                }
              }
            );
        }
        switch (e.status) {
          case "fulfilled":
            return e.value;
          case "rejected":
            throw ((t = e.reason), yd(t), t);
        }
        throw ((Oi = e), Ei);
    }
  }
  var Oi = null;
  function pd() {
    if (Oi === null) throw Error(i(459));
    var t = Oi;
    return (Oi = null), t;
  }
  function yd(t) {
    if (t === Ei || t === tr) throw Error(i(483));
  }
  var $n = !1;
  function yc(t) {
    t.updateQueue = {
      baseState: t.memoizedState,
      firstBaseUpdate: null,
      lastBaseUpdate: null,
      shared: { pending: null, lanes: 0, hiddenCallbacks: null },
      callbacks: null,
    };
  }
  function gc(t, e) {
    (t = t.updateQueue),
      e.updateQueue === t &&
        (e.updateQueue = {
          baseState: t.baseState,
          firstBaseUpdate: t.firstBaseUpdate,
          lastBaseUpdate: t.lastBaseUpdate,
          shared: t.shared,
          callbacks: null,
        });
  }
  function Pn(t) {
    return { lane: t, tag: 0, payload: null, callback: null, next: null };
  }
  function Wn(t, e, n) {
    var l = t.updateQueue;
    if (l === null) return null;
    if (((l = l.shared), (Ot & 2) !== 0)) {
      var c = l.pending;
      return (
        c === null ? (e.next = e) : ((e.next = c.next), (c.next = e)),
        (l.pending = e),
        (e = Ku(t)),
        nd(t, null, n),
        e
      );
    }
    return Zu(t, l, e, n), Ku(t);
  }
  function Ri(t, e, n) {
    if (
      ((e = e.updateQueue), e !== null && ((e = e.shared), (n & 4194048) !== 0))
    ) {
      var l = e.lanes;
      (l &= t.pendingLanes), (n |= l), (e.lanes = n), ch(t, n);
    }
  }
  function _c(t, e) {
    var n = t.updateQueue,
      l = t.alternate;
    if (l !== null && ((l = l.updateQueue), n === l)) {
      var c = null,
        f = null;
      if (((n = n.firstBaseUpdate), n !== null)) {
        do {
          var g = {
            lane: n.lane,
            tag: n.tag,
            payload: n.payload,
            callback: null,
            next: null,
          };
          f === null ? (c = f = g) : (f = f.next = g), (n = n.next);
        } while (n !== null);
        f === null ? (c = f = e) : (f = f.next = e);
      } else c = f = e;
      (n = {
        baseState: l.baseState,
        firstBaseUpdate: c,
        lastBaseUpdate: f,
        shared: l.shared,
        callbacks: l.callbacks,
      }),
        (t.updateQueue = n);
      return;
    }
    (t = n.lastBaseUpdate),
      t === null ? (n.firstBaseUpdate = e) : (t.next = e),
      (n.lastBaseUpdate = e);
  }
  var vc = !1;
  function Ai() {
    if (vc) {
      var t = xl;
      if (t !== null) throw t;
    }
  }
  function wi(t, e, n, l) {
    vc = !1;
    var c = t.updateQueue;
    $n = !1;
    var f = c.firstBaseUpdate,
      g = c.lastBaseUpdate,
      _ = c.shared.pending;
    if (_ !== null) {
      c.shared.pending = null;
      var R = _,
        j = R.next;
      (R.next = null), g === null ? (f = j) : (g.next = j), (g = R);
      var V = t.alternate;
      V !== null &&
        ((V = V.updateQueue),
        (_ = V.lastBaseUpdate),
        _ !== g &&
          (_ === null ? (V.firstBaseUpdate = j) : (_.next = j),
          (V.lastBaseUpdate = R)));
    }
    if (f !== null) {
      var Z = c.baseState;
      (g = 0), (V = j = R = null), (_ = f);
      do {
        var B = _.lane & -536870913,
          L = B !== _.lane;
        if (L ? (St & B) === B : (l & B) === B) {
          B !== 0 && B === Sl && (vc = !0),
            V !== null &&
              (V = V.next =
                {
                  lane: 0,
                  tag: _.tag,
                  payload: _.payload,
                  callback: null,
                  next: null,
                });
          t: {
            var it = t,
              at = _;
            B = e;
            var Dt = n;
            switch (at.tag) {
              case 1:
                if (((it = at.payload), typeof it == "function")) {
                  Z = it.call(Dt, Z, B);
                  break t;
                }
                Z = it;
                break t;
              case 3:
                it.flags = (it.flags & -65537) | 128;
              case 0:
                if (
                  ((it = at.payload),
                  (B = typeof it == "function" ? it.call(Dt, Z, B) : it),
                  B == null)
                )
                  break t;
                Z = y({}, Z, B);
                break t;
              case 2:
                $n = !0;
            }
          }
          (B = _.callback),
            B !== null &&
              ((t.flags |= 64),
              L && (t.flags |= 8192),
              (L = c.callbacks),
              L === null ? (c.callbacks = [B]) : L.push(B));
        } else
          (L = {
            lane: B,
            tag: _.tag,
            payload: _.payload,
            callback: _.callback,
            next: null,
          }),
            V === null ? ((j = V = L), (R = Z)) : (V = V.next = L),
            (g |= B);
        if (((_ = _.next), _ === null)) {
          if (((_ = c.shared.pending), _ === null)) break;
          (L = _),
            (_ = L.next),
            (L.next = null),
            (c.lastBaseUpdate = L),
            (c.shared.pending = null);
        }
      } while (!0);
      V === null && (R = Z),
        (c.baseState = R),
        (c.firstBaseUpdate = j),
        (c.lastBaseUpdate = V),
        f === null && (c.shared.lanes = 0),
        (ua |= g),
        (t.lanes = g),
        (t.memoizedState = Z);
    }
  }
  function gd(t, e) {
    if (typeof t != "function") throw Error(i(191, t));
    t.call(e);
  }
  function _d(t, e) {
    var n = t.callbacks;
    if (n !== null)
      for (t.callbacks = null, t = 0; t < n.length; t++) gd(n[t], e);
  }
  var Tl = J(null),
    nr = J(0);
  function vd(t, e) {
    (t = jn), W(nr, t), W(Tl, e), (jn = t | e.baseLanes);
  }
  function bc() {
    W(nr, jn), W(Tl, Tl.current);
  }
  function Sc() {
    (jn = nr.current), P(Tl), P(nr);
  }
  var In = 0,
    ht = null,
    At = null,
    Kt = null,
    ar = !1,
    El = !1,
    Ha = !1,
    lr = 0,
    Di = 0,
    Ol = null,
    G_ = 0;
  function Qt() {
    throw Error(i(321));
  }
  function xc(t, e) {
    if (e === null) return !1;
    for (var n = 0; n < e.length && n < t.length; n++)
      if (!Ne(t[n], e[n])) return !1;
    return !0;
  }
  function Tc(t, e, n, l, c, f) {
    return (
      (In = f),
      (ht = e),
      (e.memoizedState = null),
      (e.updateQueue = null),
      (e.lanes = 0),
      (q.H = t === null || t.memoizedState === null ? nm : am),
      (Ha = !1),
      (f = n(l, c)),
      (Ha = !1),
      El && (f = Sd(e, n, l, c)),
      bd(t),
      f
    );
  }
  function bd(t) {
    q.H = or;
    var e = At !== null && At.next !== null;
    if (((In = 0), (Kt = At = ht = null), (ar = !1), (Di = 0), (Ol = null), e))
      throw Error(i(300));
    t === null ||
      te ||
      ((t = t.dependencies), t !== null && Pu(t) && (te = !0));
  }
  function Sd(t, e, n, l) {
    ht = t;
    var c = 0;
    do {
      if ((El && (Ol = null), (Di = 0), (El = !1), 25 <= c))
        throw Error(i(301));
      if (((c += 1), (Kt = At = null), t.updateQueue != null)) {
        var f = t.updateQueue;
        (f.lastEffect = null),
          (f.events = null),
          (f.stores = null),
          f.memoCache != null && (f.memoCache.index = 0);
      }
      (q.H = F_), (f = e(n, l));
    } while (El);
    return f;
  }
  function V_() {
    var t = q.H,
      e = t.useState()[0];
    return (
      (e = typeof e.then == "function" ? Ci(e) : e),
      (t = t.useState()[0]),
      (At !== null ? At.memoizedState : null) !== t && (ht.flags |= 1024),
      e
    );
  }
  function Ec() {
    var t = lr !== 0;
    return (lr = 0), t;
  }
  function Oc(t, e, n) {
    (e.updateQueue = t.updateQueue), (e.flags &= -2053), (t.lanes &= ~n);
  }
  function Rc(t) {
    if (ar) {
      for (t = t.memoizedState; t !== null; ) {
        var e = t.queue;
        e !== null && (e.pending = null), (t = t.next);
      }
      ar = !1;
    }
    (In = 0), (Kt = At = ht = null), (El = !1), (Di = lr = 0), (Ol = null);
  }
  function ve() {
    var t = {
      memoizedState: null,
      baseState: null,
      baseQueue: null,
      queue: null,
      next: null,
    };
    return Kt === null ? (ht.memoizedState = Kt = t) : (Kt = Kt.next = t), Kt;
  }
  function Jt() {
    if (At === null) {
      var t = ht.alternate;
      t = t !== null ? t.memoizedState : null;
    } else t = At.next;
    var e = Kt === null ? ht.memoizedState : Kt.next;
    if (e !== null) (Kt = e), (At = t);
    else {
      if (t === null)
        throw ht.alternate === null ? Error(i(467)) : Error(i(310));
      (At = t),
        (t = {
          memoizedState: At.memoizedState,
          baseState: At.baseState,
          baseQueue: At.baseQueue,
          queue: At.queue,
          next: null,
        }),
        Kt === null ? (ht.memoizedState = Kt = t) : (Kt = Kt.next = t);
    }
    return Kt;
  }
  function Ac() {
    return { lastEffect: null, events: null, stores: null, memoCache: null };
  }
  function Ci(t) {
    var e = Di;
    return (
      (Di += 1),
      Ol === null && (Ol = []),
      (t = md(Ol, t, e)),
      (e = ht),
      (Kt === null ? e.memoizedState : Kt.next) === null &&
        ((e = e.alternate),
        (q.H = e === null || e.memoizedState === null ? nm : am)),
      t
    );
  }
  function ir(t) {
    if (t !== null && typeof t == "object") {
      if (typeof t.then == "function") return Ci(t);
      if (t.$$typeof === M) return ce(t);
    }
    throw Error(i(438, String(t)));
  }
  function wc(t) {
    var e = null,
      n = ht.updateQueue;
    if ((n !== null && (e = n.memoCache), e == null)) {
      var l = ht.alternate;
      l !== null &&
        ((l = l.updateQueue),
        l !== null &&
          ((l = l.memoCache),
          l != null &&
            (e = {
              data: l.data.map(function (c) {
                return c.slice();
              }),
              index: 0,
            })));
    }
    if (
      (e == null && (e = { data: [], index: 0 }),
      n === null && ((n = Ac()), (ht.updateQueue = n)),
      (n.memoCache = e),
      (n = e.data[e.index]),
      n === void 0)
    )
      for (n = e.data[e.index] = Array(t), l = 0; l < t; l++) n[l] = ut;
    return e.index++, n;
  }
  function Dn(t, e) {
    return typeof e == "function" ? e(t) : e;
  }
  function ur(t) {
    var e = Jt();
    return Dc(e, At, t);
  }
  function Dc(t, e, n) {
    var l = t.queue;
    if (l === null) throw Error(i(311));
    l.lastRenderedReducer = n;
    var c = t.baseQueue,
      f = l.pending;
    if (f !== null) {
      if (c !== null) {
        var g = c.next;
        (c.next = f.next), (f.next = g);
      }
      (e.baseQueue = c = f), (l.pending = null);
    }
    if (((f = t.baseState), c === null)) t.memoizedState = f;
    else {
      e = c.next;
      var _ = (g = null),
        R = null,
        j = e,
        V = !1;
      do {
        var Z = j.lane & -536870913;
        if (Z !== j.lane ? (St & Z) === Z : (In & Z) === Z) {
          var B = j.revertLane;
          if (B === 0)
            R !== null &&
              (R = R.next =
                {
                  lane: 0,
                  revertLane: 0,
                  action: j.action,
                  hasEagerState: j.hasEagerState,
                  eagerState: j.eagerState,
                  next: null,
                }),
              Z === Sl && (V = !0);
          else if ((In & B) === B) {
            (j = j.next), B === Sl && (V = !0);
            continue;
          } else
            (Z = {
              lane: 0,
              revertLane: j.revertLane,
              action: j.action,
              hasEagerState: j.hasEagerState,
              eagerState: j.eagerState,
              next: null,
            }),
              R === null ? ((_ = R = Z), (g = f)) : (R = R.next = Z),
              (ht.lanes |= B),
              (ua |= B);
          (Z = j.action),
            Ha && n(f, Z),
            (f = j.hasEagerState ? j.eagerState : n(f, Z));
        } else
          (B = {
            lane: Z,
            revertLane: j.revertLane,
            action: j.action,
            hasEagerState: j.hasEagerState,
            eagerState: j.eagerState,
            next: null,
          }),
            R === null ? ((_ = R = B), (g = f)) : (R = R.next = B),
            (ht.lanes |= Z),
            (ua |= Z);
        j = j.next;
      } while (j !== null && j !== e);
      if (
        (R === null ? (g = f) : (R.next = _),
        !Ne(f, t.memoizedState) && ((te = !0), V && ((n = xl), n !== null)))
      )
        throw n;
      (t.memoizedState = f),
        (t.baseState = g),
        (t.baseQueue = R),
        (l.lastRenderedState = f);
    }
    return c === null && (l.lanes = 0), [t.memoizedState, l.dispatch];
  }
  function Cc(t) {
    var e = Jt(),
      n = e.queue;
    if (n === null) throw Error(i(311));
    n.lastRenderedReducer = t;
    var l = n.dispatch,
      c = n.pending,
      f = e.memoizedState;
    if (c !== null) {
      n.pending = null;
      var g = (c = c.next);
      do (f = t(f, g.action)), (g = g.next);
      while (g !== c);
      Ne(f, e.memoizedState) || (te = !0),
        (e.memoizedState = f),
        e.baseQueue === null && (e.baseState = f),
        (n.lastRenderedState = f);
    }
    return [f, l];
  }
  function xd(t, e, n) {
    var l = ht,
      c = Jt(),
      f = Et;
    if (f) {
      if (n === void 0) throw Error(i(407));
      n = n();
    } else n = e();
    var g = !Ne((At || c).memoizedState, n);
    g && ((c.memoizedState = n), (te = !0)), (c = c.queue);
    var _ = Od.bind(null, l, c, t);
    if (
      (Ni(2048, 8, _, [t]),
      c.getSnapshot !== e || g || (Kt !== null && Kt.memoizedState.tag & 1))
    ) {
      if (
        ((l.flags |= 2048),
        Rl(9, rr(), Ed.bind(null, l, c, n, e), null),
        Mt === null)
      )
        throw Error(i(349));
      f || (In & 124) !== 0 || Td(l, e, n);
    }
    return n;
  }
  function Td(t, e, n) {
    (t.flags |= 16384),
      (t = { getSnapshot: e, value: n }),
      (e = ht.updateQueue),
      e === null
        ? ((e = Ac()), (ht.updateQueue = e), (e.stores = [t]))
        : ((n = e.stores), n === null ? (e.stores = [t]) : n.push(t));
  }
  function Ed(t, e, n, l) {
    (e.value = n), (e.getSnapshot = l), Rd(e) && Ad(t);
  }
  function Od(t, e, n) {
    return n(function () {
      Rd(e) && Ad(t);
    });
  }
  function Rd(t) {
    var e = t.getSnapshot;
    t = t.value;
    try {
      var n = e();
      return !Ne(t, n);
    } catch {
      return !0;
    }
  }
  function Ad(t) {
    var e = gl(t, 2);
    e !== null && Le(e, t, 2);
  }
  function Nc(t) {
    var e = ve();
    if (typeof t == "function") {
      var n = t;
      if (((t = n()), Ha)) {
        Zn(!0);
        try {
          n();
        } finally {
          Zn(!1);
        }
      }
    }
    return (
      (e.memoizedState = e.baseState = t),
      (e.queue = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: Dn,
        lastRenderedState: t,
      }),
      e
    );
  }
  function wd(t, e, n, l) {
    return (t.baseState = n), Dc(t, At, typeof l == "function" ? l : Dn);
  }
  function Q_(t, e, n, l, c) {
    if (cr(t)) throw Error(i(485));
    if (((t = e.action), t !== null)) {
      var f = {
        payload: c,
        action: t,
        next: null,
        isTransition: !0,
        status: "pending",
        value: null,
        reason: null,
        listeners: [],
        then: function (g) {
          f.listeners.push(g);
        },
      };
      q.T !== null ? n(!0) : (f.isTransition = !1),
        l(f),
        (n = e.pending),
        n === null
          ? ((f.next = e.pending = f), Dd(e, f))
          : ((f.next = n.next), (e.pending = n.next = f));
    }
  }
  function Dd(t, e) {
    var n = e.action,
      l = e.payload,
      c = t.state;
    if (e.isTransition) {
      var f = q.T,
        g = {};
      q.T = g;
      try {
        var _ = n(c, l),
          R = q.S;
        R !== null && R(g, _), Cd(t, e, _);
      } catch (j) {
        Mc(t, e, j);
      } finally {
        q.T = f;
      }
    } else
      try {
        (f = n(c, l)), Cd(t, e, f);
      } catch (j) {
        Mc(t, e, j);
      }
  }
  function Cd(t, e, n) {
    n !== null && typeof n == "object" && typeof n.then == "function"
      ? n.then(
          function (l) {
            Nd(t, e, l);
          },
          function (l) {
            return Mc(t, e, l);
          }
        )
      : Nd(t, e, n);
  }
  function Nd(t, e, n) {
    (e.status = "fulfilled"),
      (e.value = n),
      Md(e),
      (t.state = n),
      (e = t.pending),
      e !== null &&
        ((n = e.next),
        n === e ? (t.pending = null) : ((n = n.next), (e.next = n), Dd(t, n)));
  }
  function Mc(t, e, n) {
    var l = t.pending;
    if (((t.pending = null), l !== null)) {
      l = l.next;
      do (e.status = "rejected"), (e.reason = n), Md(e), (e = e.next);
      while (e !== l);
    }
    t.action = null;
  }
  function Md(t) {
    t = t.listeners;
    for (var e = 0; e < t.length; e++) (0, t[e])();
  }
  function zd(t, e) {
    return e;
  }
  function Ud(t, e) {
    if (Et) {
      var n = Mt.formState;
      if (n !== null) {
        t: {
          var l = ht;
          if (Et) {
            if (Xt) {
              e: {
                for (var c = Xt, f = sn; c.nodeType !== 8; ) {
                  if (!f) {
                    c = null;
                    break e;
                  }
                  if (((c = ln(c.nextSibling)), c === null)) {
                    c = null;
                    break e;
                  }
                }
                (f = c.data), (c = f === "F!" || f === "F" ? c : null);
              }
              if (c) {
                (Xt = ln(c.nextSibling)), (l = c.data === "F!");
                break t;
              }
            }
            Ua(l);
          }
          l = !1;
        }
        l && (e = n[0]);
      }
    }
    return (
      (n = ve()),
      (n.memoizedState = n.baseState = e),
      (l = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: zd,
        lastRenderedState: e,
      }),
      (n.queue = l),
      (n = Id.bind(null, ht, l)),
      (l.dispatch = n),
      (l = Nc(!1)),
      (f = Lc.bind(null, ht, !1, l.queue)),
      (l = ve()),
      (c = { state: e, dispatch: null, action: t, pending: null }),
      (l.queue = c),
      (n = Q_.bind(null, ht, c, f, n)),
      (c.dispatch = n),
      (l.memoizedState = t),
      [e, n, !1]
    );
  }
  function jd(t) {
    var e = Jt();
    return Bd(e, At, t);
  }
  function Bd(t, e, n) {
    if (
      ((e = Dc(t, e, zd)[0]),
      (t = ur(Dn)[0]),
      typeof e == "object" && e !== null && typeof e.then == "function")
    )
      try {
        var l = Ci(e);
      } catch (g) {
        throw g === Ei ? tr : g;
      }
    else l = e;
    e = Jt();
    var c = e.queue,
      f = c.dispatch;
    return (
      n !== e.memoizedState &&
        ((ht.flags |= 2048), Rl(9, rr(), k_.bind(null, c, n), null)),
      [l, f, t]
    );
  }
  function k_(t, e) {
    t.action = e;
  }
  function Ld(t) {
    var e = Jt(),
      n = At;
    if (n !== null) return Bd(e, n, t);
    Jt(), (e = e.memoizedState), (n = Jt());
    var l = n.queue.dispatch;
    return (n.memoizedState = t), [e, l, !1];
  }
  function Rl(t, e, n, l) {
    return (
      (t = { tag: t, create: n, deps: l, inst: e, next: null }),
      (e = ht.updateQueue),
      e === null && ((e = Ac()), (ht.updateQueue = e)),
      (n = e.lastEffect),
      n === null
        ? (e.lastEffect = t.next = t)
        : ((l = n.next), (n.next = t), (t.next = l), (e.lastEffect = t)),
      t
    );
  }
  function rr() {
    return { destroy: void 0, resource: void 0 };
  }
  function Hd() {
    return Jt().memoizedState;
  }
  function sr(t, e, n, l) {
    var c = ve();
    (l = l === void 0 ? null : l),
      (ht.flags |= t),
      (c.memoizedState = Rl(1 | e, rr(), n, l));
  }
  function Ni(t, e, n, l) {
    var c = Jt();
    l = l === void 0 ? null : l;
    var f = c.memoizedState.inst;
    At !== null && l !== null && xc(l, At.memoizedState.deps)
      ? (c.memoizedState = Rl(e, f, n, l))
      : ((ht.flags |= t), (c.memoizedState = Rl(1 | e, f, n, l)));
  }
  function qd(t, e) {
    sr(8390656, 8, t, e);
  }
  function Yd(t, e) {
    Ni(2048, 8, t, e);
  }
  function Xd(t, e) {
    return Ni(4, 2, t, e);
  }
  function Gd(t, e) {
    return Ni(4, 4, t, e);
  }
  function Vd(t, e) {
    if (typeof e == "function") {
      t = t();
      var n = e(t);
      return function () {
        typeof n == "function" ? n() : e(null);
      };
    }
    if (e != null)
      return (
        (t = t()),
        (e.current = t),
        function () {
          e.current = null;
        }
      );
  }
  function Qd(t, e, n) {
    (n = n != null ? n.concat([t]) : null), Ni(4, 4, Vd.bind(null, e, t), n);
  }
  function zc() {}
  function kd(t, e) {
    var n = Jt();
    e = e === void 0 ? null : e;
    var l = n.memoizedState;
    return e !== null && xc(e, l[1]) ? l[0] : ((n.memoizedState = [t, e]), t);
  }
  function Zd(t, e) {
    var n = Jt();
    e = e === void 0 ? null : e;
    var l = n.memoizedState;
    if (e !== null && xc(e, l[1])) return l[0];
    if (((l = t()), Ha)) {
      Zn(!0);
      try {
        t();
      } finally {
        Zn(!1);
      }
    }
    return (n.memoizedState = [l, e]), l;
  }
  function Uc(t, e, n) {
    return n === void 0 || (In & 1073741824) !== 0
      ? (t.memoizedState = e)
      : ((t.memoizedState = n), (t = Fm()), (ht.lanes |= t), (ua |= t), n);
  }
  function Kd(t, e, n, l) {
    return Ne(n, e)
      ? n
      : Tl.current !== null
      ? ((t = Uc(t, n, l)), Ne(t, e) || (te = !0), t)
      : (In & 42) === 0
      ? ((te = !0), (t.memoizedState = n))
      : ((t = Fm()), (ht.lanes |= t), (ua |= t), e);
  }
  function Jd(t, e, n, l, c) {
    var f = $.p;
    $.p = f !== 0 && 8 > f ? f : 8;
    var g = q.T,
      _ = {};
    (q.T = _), Lc(t, !1, e, n);
    try {
      var R = c(),
        j = q.S;
      if (
        (j !== null && j(_, R),
        R !== null && typeof R == "object" && typeof R.then == "function")
      ) {
        var V = X_(R, l);
        Mi(t, e, V, Be(t));
      } else Mi(t, e, l, Be(t));
    } catch (Z) {
      Mi(t, e, { then: function () {}, status: "rejected", reason: Z }, Be());
    } finally {
      ($.p = f), (q.T = g);
    }
  }
  function Z_() {}
  function jc(t, e, n, l) {
    if (t.tag !== 5) throw Error(i(476));
    var c = Fd(t).queue;
    Jd(
      t,
      c,
      e,
      tt,
      n === null
        ? Z_
        : function () {
            return $d(t), n(l);
          }
    );
  }
  function Fd(t) {
    var e = t.memoizedState;
    if (e !== null) return e;
    e = {
      memoizedState: tt,
      baseState: tt,
      baseQueue: null,
      queue: {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: Dn,
        lastRenderedState: tt,
      },
      next: null,
    };
    var n = {};
    return (
      (e.next = {
        memoizedState: n,
        baseState: n,
        baseQueue: null,
        queue: {
          pending: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: Dn,
          lastRenderedState: n,
        },
        next: null,
      }),
      (t.memoizedState = e),
      (t = t.alternate),
      t !== null && (t.memoizedState = e),
      e
    );
  }
  function $d(t) {
    var e = Fd(t).next.queue;
    Mi(t, e, {}, Be());
  }
  function Bc() {
    return ce($i);
  }
  function Pd() {
    return Jt().memoizedState;
  }
  function Wd() {
    return Jt().memoizedState;
  }
  function K_(t) {
    for (var e = t.return; e !== null; ) {
      switch (e.tag) {
        case 24:
        case 3:
          var n = Be();
          t = Pn(n);
          var l = Wn(e, t, n);
          l !== null && (Le(l, e, n), Ri(l, e, n)),
            (e = { cache: hc() }),
            (t.payload = e);
          return;
      }
      e = e.return;
    }
  }
  function J_(t, e, n) {
    var l = Be();
    (n = {
      lane: l,
      revertLane: 0,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }),
      cr(t)
        ? tm(e, n)
        : ((n = nc(t, e, n, l)), n !== null && (Le(n, t, l), em(n, e, l)));
  }
  function Id(t, e, n) {
    var l = Be();
    Mi(t, e, n, l);
  }
  function Mi(t, e, n, l) {
    var c = {
      lane: l,
      revertLane: 0,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    };
    if (cr(t)) tm(e, c);
    else {
      var f = t.alternate;
      if (
        t.lanes === 0 &&
        (f === null || f.lanes === 0) &&
        ((f = e.lastRenderedReducer), f !== null)
      )
        try {
          var g = e.lastRenderedState,
            _ = f(g, n);
          if (((c.hasEagerState = !0), (c.eagerState = _), Ne(_, g)))
            return Zu(t, e, c, 0), Mt === null && ku(), !1;
        } catch {
        } finally {
        }
      if (((n = nc(t, e, c, l)), n !== null))
        return Le(n, t, l), em(n, e, l), !0;
    }
    return !1;
  }
  function Lc(t, e, n, l) {
    if (
      ((l = {
        lane: 2,
        revertLane: yo(),
        action: l,
        hasEagerState: !1,
        eagerState: null,
        next: null,
      }),
      cr(t))
    ) {
      if (e) throw Error(i(479));
    } else (e = nc(t, n, l, 2)), e !== null && Le(e, t, 2);
  }
  function cr(t) {
    var e = t.alternate;
    return t === ht || (e !== null && e === ht);
  }
  function tm(t, e) {
    El = ar = !0;
    var n = t.pending;
    n === null ? (e.next = e) : ((e.next = n.next), (n.next = e)),
      (t.pending = e);
  }
  function em(t, e, n) {
    if ((n & 4194048) !== 0) {
      var l = e.lanes;
      (l &= t.pendingLanes), (n |= l), (e.lanes = n), ch(t, n);
    }
  }
  var or = {
      readContext: ce,
      use: ir,
      useCallback: Qt,
      useContext: Qt,
      useEffect: Qt,
      useImperativeHandle: Qt,
      useLayoutEffect: Qt,
      useInsertionEffect: Qt,
      useMemo: Qt,
      useReducer: Qt,
      useRef: Qt,
      useState: Qt,
      useDebugValue: Qt,
      useDeferredValue: Qt,
      useTransition: Qt,
      useSyncExternalStore: Qt,
      useId: Qt,
      useHostTransitionStatus: Qt,
      useFormState: Qt,
      useActionState: Qt,
      useOptimistic: Qt,
      useMemoCache: Qt,
      useCacheRefresh: Qt,
    },
    nm = {
      readContext: ce,
      use: ir,
      useCallback: function (t, e) {
        return (ve().memoizedState = [t, e === void 0 ? null : e]), t;
      },
      useContext: ce,
      useEffect: qd,
      useImperativeHandle: function (t, e, n) {
        (n = n != null ? n.concat([t]) : null),
          sr(4194308, 4, Vd.bind(null, e, t), n);
      },
      useLayoutEffect: function (t, e) {
        return sr(4194308, 4, t, e);
      },
      useInsertionEffect: function (t, e) {
        sr(4, 2, t, e);
      },
      useMemo: function (t, e) {
        var n = ve();
        e = e === void 0 ? null : e;
        var l = t();
        if (Ha) {
          Zn(!0);
          try {
            t();
          } finally {
            Zn(!1);
          }
        }
        return (n.memoizedState = [l, e]), l;
      },
      useReducer: function (t, e, n) {
        var l = ve();
        if (n !== void 0) {
          var c = n(e);
          if (Ha) {
            Zn(!0);
            try {
              n(e);
            } finally {
              Zn(!1);
            }
          }
        } else c = e;
        return (
          (l.memoizedState = l.baseState = c),
          (t = {
            pending: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: t,
            lastRenderedState: c,
          }),
          (l.queue = t),
          (t = t.dispatch = J_.bind(null, ht, t)),
          [l.memoizedState, t]
        );
      },
      useRef: function (t) {
        var e = ve();
        return (t = { current: t }), (e.memoizedState = t);
      },
      useState: function (t) {
        t = Nc(t);
        var e = t.queue,
          n = Id.bind(null, ht, e);
        return (e.dispatch = n), [t.memoizedState, n];
      },
      useDebugValue: zc,
      useDeferredValue: function (t, e) {
        var n = ve();
        return Uc(n, t, e);
      },
      useTransition: function () {
        var t = Nc(!1);
        return (
          (t = Jd.bind(null, ht, t.queue, !0, !1)),
          (ve().memoizedState = t),
          [!1, t]
        );
      },
      useSyncExternalStore: function (t, e, n) {
        var l = ht,
          c = ve();
        if (Et) {
          if (n === void 0) throw Error(i(407));
          n = n();
        } else {
          if (((n = e()), Mt === null)) throw Error(i(349));
          (St & 124) !== 0 || Td(l, e, n);
        }
        c.memoizedState = n;
        var f = { value: n, getSnapshot: e };
        return (
          (c.queue = f),
          qd(Od.bind(null, l, f, t), [t]),
          (l.flags |= 2048),
          Rl(9, rr(), Ed.bind(null, l, f, n, e), null),
          n
        );
      },
      useId: function () {
        var t = ve(),
          e = Mt.identifierPrefix;
        if (Et) {
          var n = Rn,
            l = On;
          (n = (l & ~(1 << (32 - Ce(l) - 1))).toString(32) + n),
            (e = "«" + e + "R" + n),
            (n = lr++),
            0 < n && (e += "H" + n.toString(32)),
            (e += "»");
        } else (n = G_++), (e = "«" + e + "r" + n.toString(32) + "»");
        return (t.memoizedState = e);
      },
      useHostTransitionStatus: Bc,
      useFormState: Ud,
      useActionState: Ud,
      useOptimistic: function (t) {
        var e = ve();
        e.memoizedState = e.baseState = t;
        var n = {
          pending: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: null,
          lastRenderedState: null,
        };
        return (
          (e.queue = n),
          (e = Lc.bind(null, ht, !0, n)),
          (n.dispatch = e),
          [t, e]
        );
      },
      useMemoCache: wc,
      useCacheRefresh: function () {
        return (ve().memoizedState = K_.bind(null, ht));
      },
    },
    am = {
      readContext: ce,
      use: ir,
      useCallback: kd,
      useContext: ce,
      useEffect: Yd,
      useImperativeHandle: Qd,
      useInsertionEffect: Xd,
      useLayoutEffect: Gd,
      useMemo: Zd,
      useReducer: ur,
      useRef: Hd,
      useState: function () {
        return ur(Dn);
      },
      useDebugValue: zc,
      useDeferredValue: function (t, e) {
        var n = Jt();
        return Kd(n, At.memoizedState, t, e);
      },
      useTransition: function () {
        var t = ur(Dn)[0],
          e = Jt().memoizedState;
        return [typeof t == "boolean" ? t : Ci(t), e];
      },
      useSyncExternalStore: xd,
      useId: Pd,
      useHostTransitionStatus: Bc,
      useFormState: jd,
      useActionState: jd,
      useOptimistic: function (t, e) {
        var n = Jt();
        return wd(n, At, t, e);
      },
      useMemoCache: wc,
      useCacheRefresh: Wd,
    },
    F_ = {
      readContext: ce,
      use: ir,
      useCallback: kd,
      useContext: ce,
      useEffect: Yd,
      useImperativeHandle: Qd,
      useInsertionEffect: Xd,
      useLayoutEffect: Gd,
      useMemo: Zd,
      useReducer: Cc,
      useRef: Hd,
      useState: function () {
        return Cc(Dn);
      },
      useDebugValue: zc,
      useDeferredValue: function (t, e) {
        var n = Jt();
        return At === null ? Uc(n, t, e) : Kd(n, At.memoizedState, t, e);
      },
      useTransition: function () {
        var t = Cc(Dn)[0],
          e = Jt().memoizedState;
        return [typeof t == "boolean" ? t : Ci(t), e];
      },
      useSyncExternalStore: xd,
      useId: Pd,
      useHostTransitionStatus: Bc,
      useFormState: Ld,
      useActionState: Ld,
      useOptimistic: function (t, e) {
        var n = Jt();
        return At !== null
          ? wd(n, At, t, e)
          : ((n.baseState = t), [t, n.queue.dispatch]);
      },
      useMemoCache: wc,
      useCacheRefresh: Wd,
    },
    Al = null,
    zi = 0;
  function fr(t) {
    var e = zi;
    return (zi += 1), Al === null && (Al = []), md(Al, t, e);
  }
  function Ui(t, e) {
    (e = e.props.ref), (t.ref = e !== void 0 ? e : null);
  }
  function hr(t, e) {
    throw e.$$typeof === v
      ? Error(i(525))
      : ((t = Object.prototype.toString.call(e)),
        Error(
          i(
            31,
            t === "[object Object]"
              ? "object with keys {" + Object.keys(e).join(", ") + "}"
              : t
          )
        ));
  }
  function lm(t) {
    var e = t._init;
    return e(t._payload);
  }
  function im(t) {
    function e(C, D) {
      if (t) {
        var z = C.deletions;
        z === null ? ((C.deletions = [D]), (C.flags |= 16)) : z.push(D);
      }
    }
    function n(C, D) {
      if (!t) return null;
      for (; D !== null; ) e(C, D), (D = D.sibling);
      return null;
    }
    function l(C) {
      for (var D = new Map(); C !== null; )
        C.key !== null ? D.set(C.key, C) : D.set(C.index, C), (C = C.sibling);
      return D;
    }
    function c(C, D) {
      return (C = En(C, D)), (C.index = 0), (C.sibling = null), C;
    }
    function f(C, D, z) {
      return (
        (C.index = z),
        t
          ? ((z = C.alternate),
            z !== null
              ? ((z = z.index), z < D ? ((C.flags |= 67108866), D) : z)
              : ((C.flags |= 67108866), D))
          : ((C.flags |= 1048576), D)
      );
    }
    function g(C) {
      return t && C.alternate === null && (C.flags |= 67108866), C;
    }
    function _(C, D, z, Q) {
      return D === null || D.tag !== 6
        ? ((D = lc(z, C.mode, Q)), (D.return = C), D)
        : ((D = c(D, z)), (D.return = C), D);
    }
    function R(C, D, z, Q) {
      var I = z.type;
      return I === x
        ? V(C, D, z.props.children, Q, z.key)
        : D !== null &&
          (D.elementType === I ||
            (typeof I == "object" &&
              I !== null &&
              I.$$typeof === F &&
              lm(I) === D.type))
        ? ((D = c(D, z.props)), Ui(D, z), (D.return = C), D)
        : ((D = Ju(z.type, z.key, z.props, null, C.mode, Q)),
          Ui(D, z),
          (D.return = C),
          D);
    }
    function j(C, D, z, Q) {
      return D === null ||
        D.tag !== 4 ||
        D.stateNode.containerInfo !== z.containerInfo ||
        D.stateNode.implementation !== z.implementation
        ? ((D = ic(z, C.mode, Q)), (D.return = C), D)
        : ((D = c(D, z.children || [])), (D.return = C), D);
    }
    function V(C, D, z, Q, I) {
      return D === null || D.tag !== 7
        ? ((D = Ca(z, C.mode, Q, I)), (D.return = C), D)
        : ((D = c(D, z)), (D.return = C), D);
    }
    function Z(C, D, z) {
      if (
        (typeof D == "string" && D !== "") ||
        typeof D == "number" ||
        typeof D == "bigint"
      )
        return (D = lc("" + D, C.mode, z)), (D.return = C), D;
      if (typeof D == "object" && D !== null) {
        switch (D.$$typeof) {
          case S:
            return (
              (z = Ju(D.type, D.key, D.props, null, C.mode, z)),
              Ui(z, D),
              (z.return = C),
              z
            );
          case T:
            return (D = ic(D, C.mode, z)), (D.return = C), D;
          case F:
            var Q = D._init;
            return (D = Q(D._payload)), Z(C, D, z);
        }
        if (gt(D) || st(D))
          return (D = Ca(D, C.mode, z, null)), (D.return = C), D;
        if (typeof D.then == "function") return Z(C, fr(D), z);
        if (D.$$typeof === M) return Z(C, Wu(C, D), z);
        hr(C, D);
      }
      return null;
    }
    function B(C, D, z, Q) {
      var I = D !== null ? D.key : null;
      if (
        (typeof z == "string" && z !== "") ||
        typeof z == "number" ||
        typeof z == "bigint"
      )
        return I !== null ? null : _(C, D, "" + z, Q);
      if (typeof z == "object" && z !== null) {
        switch (z.$$typeof) {
          case S:
            return z.key === I ? R(C, D, z, Q) : null;
          case T:
            return z.key === I ? j(C, D, z, Q) : null;
          case F:
            return (I = z._init), (z = I(z._payload)), B(C, D, z, Q);
        }
        if (gt(z) || st(z)) return I !== null ? null : V(C, D, z, Q, null);
        if (typeof z.then == "function") return B(C, D, fr(z), Q);
        if (z.$$typeof === M) return B(C, D, Wu(C, z), Q);
        hr(C, z);
      }
      return null;
    }
    function L(C, D, z, Q, I) {
      if (
        (typeof Q == "string" && Q !== "") ||
        typeof Q == "number" ||
        typeof Q == "bigint"
      )
        return (C = C.get(z) || null), _(D, C, "" + Q, I);
      if (typeof Q == "object" && Q !== null) {
        switch (Q.$$typeof) {
          case S:
            return (
              (C = C.get(Q.key === null ? z : Q.key) || null), R(D, C, Q, I)
            );
          case T:
            return (
              (C = C.get(Q.key === null ? z : Q.key) || null), j(D, C, Q, I)
            );
          case F:
            var dt = Q._init;
            return (Q = dt(Q._payload)), L(C, D, z, Q, I);
        }
        if (gt(Q) || st(Q)) return (C = C.get(z) || null), V(D, C, Q, I, null);
        if (typeof Q.then == "function") return L(C, D, z, fr(Q), I);
        if (Q.$$typeof === M) return L(C, D, z, Wu(D, Q), I);
        hr(D, Q);
      }
      return null;
    }
    function it(C, D, z, Q) {
      for (
        var I = null, dt = null, nt = D, lt = (D = 0), ne = null;
        nt !== null && lt < z.length;
        lt++
      ) {
        nt.index > lt ? ((ne = nt), (nt = null)) : (ne = nt.sibling);
        var Tt = B(C, nt, z[lt], Q);
        if (Tt === null) {
          nt === null && (nt = ne);
          break;
        }
        t && nt && Tt.alternate === null && e(C, nt),
          (D = f(Tt, D, lt)),
          dt === null ? (I = Tt) : (dt.sibling = Tt),
          (dt = Tt),
          (nt = ne);
      }
      if (lt === z.length) return n(C, nt), Et && Ma(C, lt), I;
      if (nt === null) {
        for (; lt < z.length; lt++)
          (nt = Z(C, z[lt], Q)),
            nt !== null &&
              ((D = f(nt, D, lt)),
              dt === null ? (I = nt) : (dt.sibling = nt),
              (dt = nt));
        return Et && Ma(C, lt), I;
      }
      for (nt = l(nt); lt < z.length; lt++)
        (ne = L(nt, C, lt, z[lt], Q)),
          ne !== null &&
            (t &&
              ne.alternate !== null &&
              nt.delete(ne.key === null ? lt : ne.key),
            (D = f(ne, D, lt)),
            dt === null ? (I = ne) : (dt.sibling = ne),
            (dt = ne));
      return (
        t &&
          nt.forEach(function (pa) {
            return e(C, pa);
          }),
        Et && Ma(C, lt),
        I
      );
    }
    function at(C, D, z, Q) {
      if (z == null) throw Error(i(151));
      for (
        var I = null, dt = null, nt = D, lt = (D = 0), ne = null, Tt = z.next();
        nt !== null && !Tt.done;
        lt++, Tt = z.next()
      ) {
        nt.index > lt ? ((ne = nt), (nt = null)) : (ne = nt.sibling);
        var pa = B(C, nt, Tt.value, Q);
        if (pa === null) {
          nt === null && (nt = ne);
          break;
        }
        t && nt && pa.alternate === null && e(C, nt),
          (D = f(pa, D, lt)),
          dt === null ? (I = pa) : (dt.sibling = pa),
          (dt = pa),
          (nt = ne);
      }
      if (Tt.done) return n(C, nt), Et && Ma(C, lt), I;
      if (nt === null) {
        for (; !Tt.done; lt++, Tt = z.next())
          (Tt = Z(C, Tt.value, Q)),
            Tt !== null &&
              ((D = f(Tt, D, lt)),
              dt === null ? (I = Tt) : (dt.sibling = Tt),
              (dt = Tt));
        return Et && Ma(C, lt), I;
      }
      for (nt = l(nt); !Tt.done; lt++, Tt = z.next())
        (Tt = L(nt, C, lt, Tt.value, Q)),
          Tt !== null &&
            (t &&
              Tt.alternate !== null &&
              nt.delete(Tt.key === null ? lt : Tt.key),
            (D = f(Tt, D, lt)),
            dt === null ? (I = Tt) : (dt.sibling = Tt),
            (dt = Tt));
      return (
        t &&
          nt.forEach(function ($v) {
            return e(C, $v);
          }),
        Et && Ma(C, lt),
        I
      );
    }
    function Dt(C, D, z, Q) {
      if (
        (typeof z == "object" &&
          z !== null &&
          z.type === x &&
          z.key === null &&
          (z = z.props.children),
        typeof z == "object" && z !== null)
      ) {
        switch (z.$$typeof) {
          case S:
            t: {
              for (var I = z.key; D !== null; ) {
                if (D.key === I) {
                  if (((I = z.type), I === x)) {
                    if (D.tag === 7) {
                      n(C, D.sibling),
                        (Q = c(D, z.props.children)),
                        (Q.return = C),
                        (C = Q);
                      break t;
                    }
                  } else if (
                    D.elementType === I ||
                    (typeof I == "object" &&
                      I !== null &&
                      I.$$typeof === F &&
                      lm(I) === D.type)
                  ) {
                    n(C, D.sibling),
                      (Q = c(D, z.props)),
                      Ui(Q, z),
                      (Q.return = C),
                      (C = Q);
                    break t;
                  }
                  n(C, D);
                  break;
                } else e(C, D);
                D = D.sibling;
              }
              z.type === x
                ? ((Q = Ca(z.props.children, C.mode, Q, z.key)),
                  (Q.return = C),
                  (C = Q))
                : ((Q = Ju(z.type, z.key, z.props, null, C.mode, Q)),
                  Ui(Q, z),
                  (Q.return = C),
                  (C = Q));
            }
            return g(C);
          case T:
            t: {
              for (I = z.key; D !== null; ) {
                if (D.key === I)
                  if (
                    D.tag === 4 &&
                    D.stateNode.containerInfo === z.containerInfo &&
                    D.stateNode.implementation === z.implementation
                  ) {
                    n(C, D.sibling),
                      (Q = c(D, z.children || [])),
                      (Q.return = C),
                      (C = Q);
                    break t;
                  } else {
                    n(C, D);
                    break;
                  }
                else e(C, D);
                D = D.sibling;
              }
              (Q = ic(z, C.mode, Q)), (Q.return = C), (C = Q);
            }
            return g(C);
          case F:
            return (I = z._init), (z = I(z._payload)), Dt(C, D, z, Q);
        }
        if (gt(z)) return it(C, D, z, Q);
        if (st(z)) {
          if (((I = st(z)), typeof I != "function")) throw Error(i(150));
          return (z = I.call(z)), at(C, D, z, Q);
        }
        if (typeof z.then == "function") return Dt(C, D, fr(z), Q);
        if (z.$$typeof === M) return Dt(C, D, Wu(C, z), Q);
        hr(C, z);
      }
      return (typeof z == "string" && z !== "") ||
        typeof z == "number" ||
        typeof z == "bigint"
        ? ((z = "" + z),
          D !== null && D.tag === 6
            ? (n(C, D.sibling), (Q = c(D, z)), (Q.return = C), (C = Q))
            : (n(C, D), (Q = lc(z, C.mode, Q)), (Q.return = C), (C = Q)),
          g(C))
        : n(C, D);
    }
    return function (C, D, z, Q) {
      try {
        zi = 0;
        var I = Dt(C, D, z, Q);
        return (Al = null), I;
      } catch (nt) {
        if (nt === Ei || nt === tr) throw nt;
        var dt = Me(29, nt, null, C.mode);
        return (dt.lanes = Q), (dt.return = C), dt;
      } finally {
      }
    };
  }
  var wl = im(!0),
    um = im(!1),
    Pe = J(null),
    cn = null;
  function ta(t) {
    var e = t.alternate;
    W(Wt, Wt.current & 1),
      W(Pe, t),
      cn === null &&
        (e === null || Tl.current !== null || e.memoizedState !== null) &&
        (cn = t);
  }
  function rm(t) {
    if (t.tag === 22) {
      if ((W(Wt, Wt.current), W(Pe, t), cn === null)) {
        var e = t.alternate;
        e !== null && e.memoizedState !== null && (cn = t);
      }
    } else ea();
  }
  function ea() {
    W(Wt, Wt.current), W(Pe, Pe.current);
  }
  function Cn(t) {
    P(Pe), cn === t && (cn = null), P(Wt);
  }
  var Wt = J(0);
  function dr(t) {
    for (var e = t; e !== null; ) {
      if (e.tag === 13) {
        var n = e.memoizedState;
        if (
          n !== null &&
          ((n = n.dehydrated), n === null || n.data === "$?" || wo(n))
        )
          return e;
      } else if (e.tag === 19 && e.memoizedProps.revealOrder !== void 0) {
        if ((e.flags & 128) !== 0) return e;
      } else if (e.child !== null) {
        (e.child.return = e), (e = e.child);
        continue;
      }
      if (e === t) break;
      for (; e.sibling === null; ) {
        if (e.return === null || e.return === t) return null;
        e = e.return;
      }
      (e.sibling.return = e.return), (e = e.sibling);
    }
    return null;
  }
  function Hc(t, e, n, l) {
    (e = t.memoizedState),
      (n = n(l, e)),
      (n = n == null ? e : y({}, e, n)),
      (t.memoizedState = n),
      t.lanes === 0 && (t.updateQueue.baseState = n);
  }
  var qc = {
    enqueueSetState: function (t, e, n) {
      t = t._reactInternals;
      var l = Be(),
        c = Pn(l);
      (c.payload = e),
        n != null && (c.callback = n),
        (e = Wn(t, c, l)),
        e !== null && (Le(e, t, l), Ri(e, t, l));
    },
    enqueueReplaceState: function (t, e, n) {
      t = t._reactInternals;
      var l = Be(),
        c = Pn(l);
      (c.tag = 1),
        (c.payload = e),
        n != null && (c.callback = n),
        (e = Wn(t, c, l)),
        e !== null && (Le(e, t, l), Ri(e, t, l));
    },
    enqueueForceUpdate: function (t, e) {
      t = t._reactInternals;
      var n = Be(),
        l = Pn(n);
      (l.tag = 2),
        e != null && (l.callback = e),
        (e = Wn(t, l, n)),
        e !== null && (Le(e, t, n), Ri(e, t, n));
    },
  };
  function sm(t, e, n, l, c, f, g) {
    return (
      (t = t.stateNode),
      typeof t.shouldComponentUpdate == "function"
        ? t.shouldComponentUpdate(l, f, g)
        : e.prototype && e.prototype.isPureReactComponent
        ? !yi(n, l) || !yi(c, f)
        : !0
    );
  }
  function cm(t, e, n, l) {
    (t = e.state),
      typeof e.componentWillReceiveProps == "function" &&
        e.componentWillReceiveProps(n, l),
      typeof e.UNSAFE_componentWillReceiveProps == "function" &&
        e.UNSAFE_componentWillReceiveProps(n, l),
      e.state !== t && qc.enqueueReplaceState(e, e.state, null);
  }
  function qa(t, e) {
    var n = e;
    if ("ref" in e) {
      n = {};
      for (var l in e) l !== "ref" && (n[l] = e[l]);
    }
    if ((t = t.defaultProps)) {
      n === e && (n = y({}, n));
      for (var c in t) n[c] === void 0 && (n[c] = t[c]);
    }
    return n;
  }
  var mr =
    typeof reportError == "function"
      ? reportError
      : function (t) {
          if (
            typeof window == "object" &&
            typeof window.ErrorEvent == "function"
          ) {
            var e = new window.ErrorEvent("error", {
              bubbles: !0,
              cancelable: !0,
              message:
                typeof t == "object" &&
                t !== null &&
                typeof t.message == "string"
                  ? String(t.message)
                  : String(t),
              error: t,
            });
            if (!window.dispatchEvent(e)) return;
          } else if (
            typeof process == "object" &&
            typeof process.emit == "function"
          ) {
            process.emit("uncaughtException", t);
            return;
          }
          console.error(t);
        };
  function om(t) {
    mr(t);
  }
  function fm(t) {
    console.error(t);
  }
  function hm(t) {
    mr(t);
  }
  function pr(t, e) {
    try {
      var n = t.onUncaughtError;
      n(e.value, { componentStack: e.stack });
    } catch (l) {
      setTimeout(function () {
        throw l;
      });
    }
  }
  function dm(t, e, n) {
    try {
      var l = t.onCaughtError;
      l(n.value, {
        componentStack: n.stack,
        errorBoundary: e.tag === 1 ? e.stateNode : null,
      });
    } catch (c) {
      setTimeout(function () {
        throw c;
      });
    }
  }
  function Yc(t, e, n) {
    return (
      (n = Pn(n)),
      (n.tag = 3),
      (n.payload = { element: null }),
      (n.callback = function () {
        pr(t, e);
      }),
      n
    );
  }
  function mm(t) {
    return (t = Pn(t)), (t.tag = 3), t;
  }
  function pm(t, e, n, l) {
    var c = n.type.getDerivedStateFromError;
    if (typeof c == "function") {
      var f = l.value;
      (t.payload = function () {
        return c(f);
      }),
        (t.callback = function () {
          dm(e, n, l);
        });
    }
    var g = n.stateNode;
    g !== null &&
      typeof g.componentDidCatch == "function" &&
      (t.callback = function () {
        dm(e, n, l),
          typeof c != "function" &&
            (ra === null ? (ra = new Set([this])) : ra.add(this));
        var _ = l.stack;
        this.componentDidCatch(l.value, {
          componentStack: _ !== null ? _ : "",
        });
      });
  }
  function $_(t, e, n, l, c) {
    if (
      ((n.flags |= 32768),
      l !== null && typeof l == "object" && typeof l.then == "function")
    ) {
      if (
        ((e = n.alternate),
        e !== null && Si(e, n, c, !0),
        (n = Pe.current),
        n !== null)
      ) {
        switch (n.tag) {
          case 13:
            return (
              cn === null ? oo() : n.alternate === null && Gt === 0 && (Gt = 3),
              (n.flags &= -257),
              (n.flags |= 65536),
              (n.lanes = c),
              l === pc
                ? (n.flags |= 16384)
                : ((e = n.updateQueue),
                  e === null ? (n.updateQueue = new Set([l])) : e.add(l),
                  ho(t, l, c)),
              !1
            );
          case 22:
            return (
              (n.flags |= 65536),
              l === pc
                ? (n.flags |= 16384)
                : ((e = n.updateQueue),
                  e === null
                    ? ((e = {
                        transitions: null,
                        markerInstances: null,
                        retryQueue: new Set([l]),
                      }),
                      (n.updateQueue = e))
                    : ((n = e.retryQueue),
                      n === null ? (e.retryQueue = new Set([l])) : n.add(l)),
                  ho(t, l, c)),
              !1
            );
        }
        throw Error(i(435, n.tag));
      }
      return ho(t, l, c), oo(), !1;
    }
    if (Et)
      return (
        (e = Pe.current),
        e !== null
          ? ((e.flags & 65536) === 0 && (e.flags |= 256),
            (e.flags |= 65536),
            (e.lanes = c),
            l !== sc && ((t = Error(i(422), { cause: l })), bi(Ke(t, n))))
          : (l !== sc && ((e = Error(i(423), { cause: l })), bi(Ke(e, n))),
            (t = t.current.alternate),
            (t.flags |= 65536),
            (c &= -c),
            (t.lanes |= c),
            (l = Ke(l, n)),
            (c = Yc(t.stateNode, l, c)),
            _c(t, c),
            Gt !== 4 && (Gt = 2)),
        !1
      );
    var f = Error(i(520), { cause: l });
    if (
      ((f = Ke(f, n)),
      Xi === null ? (Xi = [f]) : Xi.push(f),
      Gt !== 4 && (Gt = 2),
      e === null)
    )
      return !0;
    (l = Ke(l, n)), (n = e);
    do {
      switch (n.tag) {
        case 3:
          return (
            (n.flags |= 65536),
            (t = c & -c),
            (n.lanes |= t),
            (t = Yc(n.stateNode, l, t)),
            _c(n, t),
            !1
          );
        case 1:
          if (
            ((e = n.type),
            (f = n.stateNode),
            (n.flags & 128) === 0 &&
              (typeof e.getDerivedStateFromError == "function" ||
                (f !== null &&
                  typeof f.componentDidCatch == "function" &&
                  (ra === null || !ra.has(f)))))
          )
            return (
              (n.flags |= 65536),
              (c &= -c),
              (n.lanes |= c),
              (c = mm(c)),
              pm(c, t, n, l),
              _c(n, c),
              !1
            );
      }
      n = n.return;
    } while (n !== null);
    return !1;
  }
  var ym = Error(i(461)),
    te = !1;
  function le(t, e, n, l) {
    e.child = t === null ? um(e, null, n, l) : wl(e, t.child, n, l);
  }
  function gm(t, e, n, l, c) {
    n = n.render;
    var f = e.ref;
    if ("ref" in l) {
      var g = {};
      for (var _ in l) _ !== "ref" && (g[_] = l[_]);
    } else g = l;
    return (
      Ba(e),
      (l = Tc(t, e, n, g, f, c)),
      (_ = Ec()),
      t !== null && !te
        ? (Oc(t, e, c), Nn(t, e, c))
        : (Et && _ && uc(e), (e.flags |= 1), le(t, e, l, c), e.child)
    );
  }
  function _m(t, e, n, l, c) {
    if (t === null) {
      var f = n.type;
      return typeof f == "function" &&
        !ac(f) &&
        f.defaultProps === void 0 &&
        n.compare === null
        ? ((e.tag = 15), (e.type = f), vm(t, e, f, l, c))
        : ((t = Ju(n.type, null, l, e, e.mode, c)),
          (t.ref = e.ref),
          (t.return = e),
          (e.child = t));
    }
    if (((f = t.child), !Jc(t, c))) {
      var g = f.memoizedProps;
      if (
        ((n = n.compare), (n = n !== null ? n : yi), n(g, l) && t.ref === e.ref)
      )
        return Nn(t, e, c);
    }
    return (
      (e.flags |= 1),
      (t = En(f, l)),
      (t.ref = e.ref),
      (t.return = e),
      (e.child = t)
    );
  }
  function vm(t, e, n, l, c) {
    if (t !== null) {
      var f = t.memoizedProps;
      if (yi(f, l) && t.ref === e.ref)
        if (((te = !1), (e.pendingProps = l = f), Jc(t, c)))
          (t.flags & 131072) !== 0 && (te = !0);
        else return (e.lanes = t.lanes), Nn(t, e, c);
    }
    return Xc(t, e, n, l, c);
  }
  function bm(t, e, n) {
    var l = e.pendingProps,
      c = l.children,
      f = t !== null ? t.memoizedState : null;
    if (l.mode === "hidden") {
      if ((e.flags & 128) !== 0) {
        if (((l = f !== null ? f.baseLanes | n : n), t !== null)) {
          for (c = e.child = t.child, f = 0; c !== null; )
            (f = f | c.lanes | c.childLanes), (c = c.sibling);
          e.childLanes = f & ~l;
        } else (e.childLanes = 0), (e.child = null);
        return Sm(t, e, l, n);
      }
      if ((n & 536870912) !== 0)
        (e.memoizedState = { baseLanes: 0, cachePool: null }),
          t !== null && Iu(e, f !== null ? f.cachePool : null),
          f !== null ? vd(e, f) : bc(),
          rm(e);
      else
        return (
          (e.lanes = e.childLanes = 536870912),
          Sm(t, e, f !== null ? f.baseLanes | n : n, n)
        );
    } else
      f !== null
        ? (Iu(e, f.cachePool), vd(e, f), ea(), (e.memoizedState = null))
        : (t !== null && Iu(e, null), bc(), ea());
    return le(t, e, c, n), e.child;
  }
  function Sm(t, e, n, l) {
    var c = mc();
    return (
      (c = c === null ? null : { parent: Pt._currentValue, pool: c }),
      (e.memoizedState = { baseLanes: n, cachePool: c }),
      t !== null && Iu(e, null),
      bc(),
      rm(e),
      t !== null && Si(t, e, l, !0),
      null
    );
  }
  function yr(t, e) {
    var n = e.ref;
    if (n === null) t !== null && t.ref !== null && (e.flags |= 4194816);
    else {
      if (typeof n != "function" && typeof n != "object") throw Error(i(284));
      (t === null || t.ref !== n) && (e.flags |= 4194816);
    }
  }
  function Xc(t, e, n, l, c) {
    return (
      Ba(e),
      (n = Tc(t, e, n, l, void 0, c)),
      (l = Ec()),
      t !== null && !te
        ? (Oc(t, e, c), Nn(t, e, c))
        : (Et && l && uc(e), (e.flags |= 1), le(t, e, n, c), e.child)
    );
  }
  function xm(t, e, n, l, c, f) {
    return (
      Ba(e),
      (e.updateQueue = null),
      (n = Sd(e, l, n, c)),
      bd(t),
      (l = Ec()),
      t !== null && !te
        ? (Oc(t, e, f), Nn(t, e, f))
        : (Et && l && uc(e), (e.flags |= 1), le(t, e, n, f), e.child)
    );
  }
  function Tm(t, e, n, l, c) {
    if ((Ba(e), e.stateNode === null)) {
      var f = _l,
        g = n.contextType;
      typeof g == "object" && g !== null && (f = ce(g)),
        (f = new n(l, f)),
        (e.memoizedState =
          f.state !== null && f.state !== void 0 ? f.state : null),
        (f.updater = qc),
        (e.stateNode = f),
        (f._reactInternals = e),
        (f = e.stateNode),
        (f.props = l),
        (f.state = e.memoizedState),
        (f.refs = {}),
        yc(e),
        (g = n.contextType),
        (f.context = typeof g == "object" && g !== null ? ce(g) : _l),
        (f.state = e.memoizedState),
        (g = n.getDerivedStateFromProps),
        typeof g == "function" && (Hc(e, n, g, l), (f.state = e.memoizedState)),
        typeof n.getDerivedStateFromProps == "function" ||
          typeof f.getSnapshotBeforeUpdate == "function" ||
          (typeof f.UNSAFE_componentWillMount != "function" &&
            typeof f.componentWillMount != "function") ||
          ((g = f.state),
          typeof f.componentWillMount == "function" && f.componentWillMount(),
          typeof f.UNSAFE_componentWillMount == "function" &&
            f.UNSAFE_componentWillMount(),
          g !== f.state && qc.enqueueReplaceState(f, f.state, null),
          wi(e, l, f, c),
          Ai(),
          (f.state = e.memoizedState)),
        typeof f.componentDidMount == "function" && (e.flags |= 4194308),
        (l = !0);
    } else if (t === null) {
      f = e.stateNode;
      var _ = e.memoizedProps,
        R = qa(n, _);
      f.props = R;
      var j = f.context,
        V = n.contextType;
      (g = _l), typeof V == "object" && V !== null && (g = ce(V));
      var Z = n.getDerivedStateFromProps;
      (V =
        typeof Z == "function" ||
        typeof f.getSnapshotBeforeUpdate == "function"),
        (_ = e.pendingProps !== _),
        V ||
          (typeof f.UNSAFE_componentWillReceiveProps != "function" &&
            typeof f.componentWillReceiveProps != "function") ||
          ((_ || j !== g) && cm(e, f, l, g)),
        ($n = !1);
      var B = e.memoizedState;
      (f.state = B),
        wi(e, l, f, c),
        Ai(),
        (j = e.memoizedState),
        _ || B !== j || $n
          ? (typeof Z == "function" && (Hc(e, n, Z, l), (j = e.memoizedState)),
            (R = $n || sm(e, n, R, l, B, j, g))
              ? (V ||
                  (typeof f.UNSAFE_componentWillMount != "function" &&
                    typeof f.componentWillMount != "function") ||
                  (typeof f.componentWillMount == "function" &&
                    f.componentWillMount(),
                  typeof f.UNSAFE_componentWillMount == "function" &&
                    f.UNSAFE_componentWillMount()),
                typeof f.componentDidMount == "function" &&
                  (e.flags |= 4194308))
              : (typeof f.componentDidMount == "function" &&
                  (e.flags |= 4194308),
                (e.memoizedProps = l),
                (e.memoizedState = j)),
            (f.props = l),
            (f.state = j),
            (f.context = g),
            (l = R))
          : (typeof f.componentDidMount == "function" && (e.flags |= 4194308),
            (l = !1));
    } else {
      (f = e.stateNode),
        gc(t, e),
        (g = e.memoizedProps),
        (V = qa(n, g)),
        (f.props = V),
        (Z = e.pendingProps),
        (B = f.context),
        (j = n.contextType),
        (R = _l),
        typeof j == "object" && j !== null && (R = ce(j)),
        (_ = n.getDerivedStateFromProps),
        (j =
          typeof _ == "function" ||
          typeof f.getSnapshotBeforeUpdate == "function") ||
          (typeof f.UNSAFE_componentWillReceiveProps != "function" &&
            typeof f.componentWillReceiveProps != "function") ||
          ((g !== Z || B !== R) && cm(e, f, l, R)),
        ($n = !1),
        (B = e.memoizedState),
        (f.state = B),
        wi(e, l, f, c),
        Ai();
      var L = e.memoizedState;
      g !== Z ||
      B !== L ||
      $n ||
      (t !== null && t.dependencies !== null && Pu(t.dependencies))
        ? (typeof _ == "function" && (Hc(e, n, _, l), (L = e.memoizedState)),
          (V =
            $n ||
            sm(e, n, V, l, B, L, R) ||
            (t !== null && t.dependencies !== null && Pu(t.dependencies)))
            ? (j ||
                (typeof f.UNSAFE_componentWillUpdate != "function" &&
                  typeof f.componentWillUpdate != "function") ||
                (typeof f.componentWillUpdate == "function" &&
                  f.componentWillUpdate(l, L, R),
                typeof f.UNSAFE_componentWillUpdate == "function" &&
                  f.UNSAFE_componentWillUpdate(l, L, R)),
              typeof f.componentDidUpdate == "function" && (e.flags |= 4),
              typeof f.getSnapshotBeforeUpdate == "function" &&
                (e.flags |= 1024))
            : (typeof f.componentDidUpdate != "function" ||
                (g === t.memoizedProps && B === t.memoizedState) ||
                (e.flags |= 4),
              typeof f.getSnapshotBeforeUpdate != "function" ||
                (g === t.memoizedProps && B === t.memoizedState) ||
                (e.flags |= 1024),
              (e.memoizedProps = l),
              (e.memoizedState = L)),
          (f.props = l),
          (f.state = L),
          (f.context = R),
          (l = V))
        : (typeof f.componentDidUpdate != "function" ||
            (g === t.memoizedProps && B === t.memoizedState) ||
            (e.flags |= 4),
          typeof f.getSnapshotBeforeUpdate != "function" ||
            (g === t.memoizedProps && B === t.memoizedState) ||
            (e.flags |= 1024),
          (l = !1));
    }
    return (
      (f = l),
      yr(t, e),
      (l = (e.flags & 128) !== 0),
      f || l
        ? ((f = e.stateNode),
          (n =
            l && typeof n.getDerivedStateFromError != "function"
              ? null
              : f.render()),
          (e.flags |= 1),
          t !== null && l
            ? ((e.child = wl(e, t.child, null, c)),
              (e.child = wl(e, null, n, c)))
            : le(t, e, n, c),
          (e.memoizedState = f.state),
          (t = e.child))
        : (t = Nn(t, e, c)),
      t
    );
  }
  function Em(t, e, n, l) {
    return vi(), (e.flags |= 256), le(t, e, n, l), e.child;
  }
  var Gc = {
    dehydrated: null,
    treeContext: null,
    retryLane: 0,
    hydrationErrors: null,
  };
  function Vc(t) {
    return { baseLanes: t, cachePool: fd() };
  }
  function Qc(t, e, n) {
    return (t = t !== null ? t.childLanes & ~n : 0), e && (t |= We), t;
  }
  function Om(t, e, n) {
    var l = e.pendingProps,
      c = !1,
      f = (e.flags & 128) !== 0,
      g;
    if (
      ((g = f) ||
        (g =
          t !== null && t.memoizedState === null ? !1 : (Wt.current & 2) !== 0),
      g && ((c = !0), (e.flags &= -129)),
      (g = (e.flags & 32) !== 0),
      (e.flags &= -33),
      t === null)
    ) {
      if (Et) {
        if ((c ? ta(e) : ea(), Et)) {
          var _ = Xt,
            R;
          if ((R = _)) {
            t: {
              for (R = _, _ = sn; R.nodeType !== 8; ) {
                if (!_) {
                  _ = null;
                  break t;
                }
                if (((R = ln(R.nextSibling)), R === null)) {
                  _ = null;
                  break t;
                }
              }
              _ = R;
            }
            _ !== null
              ? ((e.memoizedState = {
                  dehydrated: _,
                  treeContext: Na !== null ? { id: On, overflow: Rn } : null,
                  retryLane: 536870912,
                  hydrationErrors: null,
                }),
                (R = Me(18, null, null, 0)),
                (R.stateNode = _),
                (R.return = e),
                (e.child = R),
                (pe = e),
                (Xt = null),
                (R = !0))
              : (R = !1);
          }
          R || Ua(e);
        }
        if (
          ((_ = e.memoizedState),
          _ !== null && ((_ = _.dehydrated), _ !== null))
        )
          return wo(_) ? (e.lanes = 32) : (e.lanes = 536870912), null;
        Cn(e);
      }
      return (
        (_ = l.children),
        (l = l.fallback),
        c
          ? (ea(),
            (c = e.mode),
            (_ = gr({ mode: "hidden", children: _ }, c)),
            (l = Ca(l, c, n, null)),
            (_.return = e),
            (l.return = e),
            (_.sibling = l),
            (e.child = _),
            (c = e.child),
            (c.memoizedState = Vc(n)),
            (c.childLanes = Qc(t, g, n)),
            (e.memoizedState = Gc),
            l)
          : (ta(e), kc(e, _))
      );
    }
    if (
      ((R = t.memoizedState), R !== null && ((_ = R.dehydrated), _ !== null))
    ) {
      if (f)
        e.flags & 256
          ? (ta(e), (e.flags &= -257), (e = Zc(t, e, n)))
          : e.memoizedState !== null
          ? (ea(), (e.child = t.child), (e.flags |= 128), (e = null))
          : (ea(),
            (c = l.fallback),
            (_ = e.mode),
            (l = gr({ mode: "visible", children: l.children }, _)),
            (c = Ca(c, _, n, null)),
            (c.flags |= 2),
            (l.return = e),
            (c.return = e),
            (l.sibling = c),
            (e.child = l),
            wl(e, t.child, null, n),
            (l = e.child),
            (l.memoizedState = Vc(n)),
            (l.childLanes = Qc(t, g, n)),
            (e.memoizedState = Gc),
            (e = c));
      else if ((ta(e), wo(_))) {
        if (((g = _.nextSibling && _.nextSibling.dataset), g)) var j = g.dgst;
        (g = j),
          (l = Error(i(419))),
          (l.stack = ""),
          (l.digest = g),
          bi({ value: l, source: null, stack: null }),
          (e = Zc(t, e, n));
      } else if (
        (te || Si(t, e, n, !1), (g = (n & t.childLanes) !== 0), te || g)
      ) {
        if (
          ((g = Mt),
          g !== null &&
            ((l = n & -n),
            (l = (l & 42) !== 0 ? 1 : ws(l)),
            (l = (l & (g.suspendedLanes | n)) !== 0 ? 0 : l),
            l !== 0 && l !== R.retryLane))
        )
          throw ((R.retryLane = l), gl(t, l), Le(g, t, l), ym);
        _.data === "$?" || oo(), (e = Zc(t, e, n));
      } else
        _.data === "$?"
          ? ((e.flags |= 192), (e.child = t.child), (e = null))
          : ((t = R.treeContext),
            (Xt = ln(_.nextSibling)),
            (pe = e),
            (Et = !0),
            (za = null),
            (sn = !1),
            t !== null &&
              ((Fe[$e++] = On),
              (Fe[$e++] = Rn),
              (Fe[$e++] = Na),
              (On = t.id),
              (Rn = t.overflow),
              (Na = e)),
            (e = kc(e, l.children)),
            (e.flags |= 4096));
      return e;
    }
    return c
      ? (ea(),
        (c = l.fallback),
        (_ = e.mode),
        (R = t.child),
        (j = R.sibling),
        (l = En(R, { mode: "hidden", children: l.children })),
        (l.subtreeFlags = R.subtreeFlags & 65011712),
        j !== null ? (c = En(j, c)) : ((c = Ca(c, _, n, null)), (c.flags |= 2)),
        (c.return = e),
        (l.return = e),
        (l.sibling = c),
        (e.child = l),
        (l = c),
        (c = e.child),
        (_ = t.child.memoizedState),
        _ === null
          ? (_ = Vc(n))
          : ((R = _.cachePool),
            R !== null
              ? ((j = Pt._currentValue),
                (R = R.parent !== j ? { parent: j, pool: j } : R))
              : (R = fd()),
            (_ = { baseLanes: _.baseLanes | n, cachePool: R })),
        (c.memoizedState = _),
        (c.childLanes = Qc(t, g, n)),
        (e.memoizedState = Gc),
        l)
      : (ta(e),
        (n = t.child),
        (t = n.sibling),
        (n = En(n, { mode: "visible", children: l.children })),
        (n.return = e),
        (n.sibling = null),
        t !== null &&
          ((g = e.deletions),
          g === null ? ((e.deletions = [t]), (e.flags |= 16)) : g.push(t)),
        (e.child = n),
        (e.memoizedState = null),
        n);
  }
  function kc(t, e) {
    return (
      (e = gr({ mode: "visible", children: e }, t.mode)),
      (e.return = t),
      (t.child = e)
    );
  }
  function gr(t, e) {
    return (
      (t = Me(22, t, null, e)),
      (t.lanes = 0),
      (t.stateNode = {
        _visibility: 1,
        _pendingMarkers: null,
        _retryCache: null,
        _transitions: null,
      }),
      t
    );
  }
  function Zc(t, e, n) {
    return (
      wl(e, t.child, null, n),
      (t = kc(e, e.pendingProps.children)),
      (t.flags |= 2),
      (e.memoizedState = null),
      t
    );
  }
  function Rm(t, e, n) {
    t.lanes |= e;
    var l = t.alternate;
    l !== null && (l.lanes |= e), oc(t.return, e, n);
  }
  function Kc(t, e, n, l, c) {
    var f = t.memoizedState;
    f === null
      ? (t.memoizedState = {
          isBackwards: e,
          rendering: null,
          renderingStartTime: 0,
          last: l,
          tail: n,
          tailMode: c,
        })
      : ((f.isBackwards = e),
        (f.rendering = null),
        (f.renderingStartTime = 0),
        (f.last = l),
        (f.tail = n),
        (f.tailMode = c));
  }
  function Am(t, e, n) {
    var l = e.pendingProps,
      c = l.revealOrder,
      f = l.tail;
    if ((le(t, e, l.children, n), (l = Wt.current), (l & 2) !== 0))
      (l = (l & 1) | 2), (e.flags |= 128);
    else {
      if (t !== null && (t.flags & 128) !== 0)
        t: for (t = e.child; t !== null; ) {
          if (t.tag === 13) t.memoizedState !== null && Rm(t, n, e);
          else if (t.tag === 19) Rm(t, n, e);
          else if (t.child !== null) {
            (t.child.return = t), (t = t.child);
            continue;
          }
          if (t === e) break t;
          for (; t.sibling === null; ) {
            if (t.return === null || t.return === e) break t;
            t = t.return;
          }
          (t.sibling.return = t.return), (t = t.sibling);
        }
      l &= 1;
    }
    switch ((W(Wt, l), c)) {
      case "forwards":
        for (n = e.child, c = null; n !== null; )
          (t = n.alternate),
            t !== null && dr(t) === null && (c = n),
            (n = n.sibling);
        (n = c),
          n === null
            ? ((c = e.child), (e.child = null))
            : ((c = n.sibling), (n.sibling = null)),
          Kc(e, !1, c, n, f);
        break;
      case "backwards":
        for (n = null, c = e.child, e.child = null; c !== null; ) {
          if (((t = c.alternate), t !== null && dr(t) === null)) {
            e.child = c;
            break;
          }
          (t = c.sibling), (c.sibling = n), (n = c), (c = t);
        }
        Kc(e, !0, n, null, f);
        break;
      case "together":
        Kc(e, !1, null, null, void 0);
        break;
      default:
        e.memoizedState = null;
    }
    return e.child;
  }
  function Nn(t, e, n) {
    if (
      (t !== null && (e.dependencies = t.dependencies),
      (ua |= e.lanes),
      (n & e.childLanes) === 0)
    )
      if (t !== null) {
        if ((Si(t, e, n, !1), (n & e.childLanes) === 0)) return null;
      } else return null;
    if (t !== null && e.child !== t.child) throw Error(i(153));
    if (e.child !== null) {
      for (
        t = e.child, n = En(t, t.pendingProps), e.child = n, n.return = e;
        t.sibling !== null;

      )
        (t = t.sibling),
          (n = n.sibling = En(t, t.pendingProps)),
          (n.return = e);
      n.sibling = null;
    }
    return e.child;
  }
  function Jc(t, e) {
    return (t.lanes & e) !== 0
      ? !0
      : ((t = t.dependencies), !!(t !== null && Pu(t)));
  }
  function P_(t, e, n) {
    switch (e.tag) {
      case 3:
        Ut(e, e.stateNode.containerInfo),
          Fn(e, Pt, t.memoizedState.cache),
          vi();
        break;
      case 27:
      case 5:
        Ts(e);
        break;
      case 4:
        Ut(e, e.stateNode.containerInfo);
        break;
      case 10:
        Fn(e, e.type, e.memoizedProps.value);
        break;
      case 13:
        var l = e.memoizedState;
        if (l !== null)
          return l.dehydrated !== null
            ? (ta(e), (e.flags |= 128), null)
            : (n & e.child.childLanes) !== 0
            ? Om(t, e, n)
            : (ta(e), (t = Nn(t, e, n)), t !== null ? t.sibling : null);
        ta(e);
        break;
      case 19:
        var c = (t.flags & 128) !== 0;
        if (
          ((l = (n & e.childLanes) !== 0),
          l || (Si(t, e, n, !1), (l = (n & e.childLanes) !== 0)),
          c)
        ) {
          if (l) return Am(t, e, n);
          e.flags |= 128;
        }
        if (
          ((c = e.memoizedState),
          c !== null &&
            ((c.rendering = null), (c.tail = null), (c.lastEffect = null)),
          W(Wt, Wt.current),
          l)
        )
          break;
        return null;
      case 22:
      case 23:
        return (e.lanes = 0), bm(t, e, n);
      case 24:
        Fn(e, Pt, t.memoizedState.cache);
    }
    return Nn(t, e, n);
  }
  function wm(t, e, n) {
    if (t !== null)
      if (t.memoizedProps !== e.pendingProps) te = !0;
      else {
        if (!Jc(t, n) && (e.flags & 128) === 0) return (te = !1), P_(t, e, n);
        te = (t.flags & 131072) !== 0;
      }
    else (te = !1), Et && (e.flags & 1048576) !== 0 && ld(e, $u, e.index);
    switch (((e.lanes = 0), e.tag)) {
      case 16:
        t: {
          t = e.pendingProps;
          var l = e.elementType,
            c = l._init;
          if (((l = c(l._payload)), (e.type = l), typeof l == "function"))
            ac(l)
              ? ((t = qa(l, t)), (e.tag = 1), (e = Tm(null, e, l, t, n)))
              : ((e.tag = 0), (e = Xc(null, e, l, t, n)));
          else {
            if (l != null) {
              if (((c = l.$$typeof), c === G)) {
                (e.tag = 11), (e = gm(null, e, l, t, n));
                break t;
              } else if (c === k) {
                (e.tag = 14), (e = _m(null, e, l, t, n));
                break t;
              }
            }
            throw ((e = zt(l) || l), Error(i(306, e, "")));
          }
        }
        return e;
      case 0:
        return Xc(t, e, e.type, e.pendingProps, n);
      case 1:
        return (l = e.type), (c = qa(l, e.pendingProps)), Tm(t, e, l, c, n);
      case 3:
        t: {
          if ((Ut(e, e.stateNode.containerInfo), t === null))
            throw Error(i(387));
          l = e.pendingProps;
          var f = e.memoizedState;
          (c = f.element), gc(t, e), wi(e, l, null, n);
          var g = e.memoizedState;
          if (
            ((l = g.cache),
            Fn(e, Pt, l),
            l !== f.cache && fc(e, [Pt], n, !0),
            Ai(),
            (l = g.element),
            f.isDehydrated)
          )
            if (
              ((f = { element: l, isDehydrated: !1, cache: g.cache }),
              (e.updateQueue.baseState = f),
              (e.memoizedState = f),
              e.flags & 256)
            ) {
              e = Em(t, e, l, n);
              break t;
            } else if (l !== c) {
              (c = Ke(Error(i(424)), e)), bi(c), (e = Em(t, e, l, n));
              break t;
            } else {
              switch (((t = e.stateNode.containerInfo), t.nodeType)) {
                case 9:
                  t = t.body;
                  break;
                default:
                  t = t.nodeName === "HTML" ? t.ownerDocument.body : t;
              }
              for (
                Xt = ln(t.firstChild),
                  pe = e,
                  Et = !0,
                  za = null,
                  sn = !0,
                  n = um(e, null, l, n),
                  e.child = n;
                n;

              )
                (n.flags = (n.flags & -3) | 4096), (n = n.sibling);
            }
          else {
            if ((vi(), l === c)) {
              e = Nn(t, e, n);
              break t;
            }
            le(t, e, l, n);
          }
          e = e.child;
        }
        return e;
      case 26:
        return (
          yr(t, e),
          t === null
            ? (n = Mp(e.type, null, e.pendingProps, null))
              ? (e.memoizedState = n)
              : Et ||
                ((n = e.type),
                (t = e.pendingProps),
                (l = Nr(rt.current).createElement(n)),
                (l[se] = e),
                (l[ge] = t),
                ue(l, n, t),
                It(l),
                (e.stateNode = l))
            : (e.memoizedState = Mp(
                e.type,
                t.memoizedProps,
                e.pendingProps,
                t.memoizedState
              )),
          null
        );
      case 27:
        return (
          Ts(e),
          t === null &&
            Et &&
            ((l = e.stateNode = Dp(e.type, e.pendingProps, rt.current)),
            (pe = e),
            (sn = !0),
            (c = Xt),
            oa(e.type) ? ((Do = c), (Xt = ln(l.firstChild))) : (Xt = c)),
          le(t, e, e.pendingProps.children, n),
          yr(t, e),
          t === null && (e.flags |= 4194304),
          e.child
        );
      case 5:
        return (
          t === null &&
            Et &&
            ((c = l = Xt) &&
              ((l = Ov(l, e.type, e.pendingProps, sn)),
              l !== null
                ? ((e.stateNode = l),
                  (pe = e),
                  (Xt = ln(l.firstChild)),
                  (sn = !1),
                  (c = !0))
                : (c = !1)),
            c || Ua(e)),
          Ts(e),
          (c = e.type),
          (f = e.pendingProps),
          (g = t !== null ? t.memoizedProps : null),
          (l = f.children),
          Oo(c, f) ? (l = null) : g !== null && Oo(c, g) && (e.flags |= 32),
          e.memoizedState !== null &&
            ((c = Tc(t, e, V_, null, null, n)), ($i._currentValue = c)),
          yr(t, e),
          le(t, e, l, n),
          e.child
        );
      case 6:
        return (
          t === null &&
            Et &&
            ((t = n = Xt) &&
              ((n = Rv(n, e.pendingProps, sn)),
              n !== null
                ? ((e.stateNode = n), (pe = e), (Xt = null), (t = !0))
                : (t = !1)),
            t || Ua(e)),
          null
        );
      case 13:
        return Om(t, e, n);
      case 4:
        return (
          Ut(e, e.stateNode.containerInfo),
          (l = e.pendingProps),
          t === null ? (e.child = wl(e, null, l, n)) : le(t, e, l, n),
          e.child
        );
      case 11:
        return gm(t, e, e.type, e.pendingProps, n);
      case 7:
        return le(t, e, e.pendingProps, n), e.child;
      case 8:
        return le(t, e, e.pendingProps.children, n), e.child;
      case 12:
        return le(t, e, e.pendingProps.children, n), e.child;
      case 10:
        return (
          (l = e.pendingProps),
          Fn(e, e.type, l.value),
          le(t, e, l.children, n),
          e.child
        );
      case 9:
        return (
          (c = e.type._context),
          (l = e.pendingProps.children),
          Ba(e),
          (c = ce(c)),
          (l = l(c)),
          (e.flags |= 1),
          le(t, e, l, n),
          e.child
        );
      case 14:
        return _m(t, e, e.type, e.pendingProps, n);
      case 15:
        return vm(t, e, e.type, e.pendingProps, n);
      case 19:
        return Am(t, e, n);
      case 31:
        return (
          (l = e.pendingProps),
          (n = e.mode),
          (l = { mode: l.mode, children: l.children }),
          t === null
            ? ((n = gr(l, n)),
              (n.ref = e.ref),
              (e.child = n),
              (n.return = e),
              (e = n))
            : ((n = En(t.child, l)),
              (n.ref = e.ref),
              (e.child = n),
              (n.return = e),
              (e = n)),
          e
        );
      case 22:
        return bm(t, e, n);
      case 24:
        return (
          Ba(e),
          (l = ce(Pt)),
          t === null
            ? ((c = mc()),
              c === null &&
                ((c = Mt),
                (f = hc()),
                (c.pooledCache = f),
                f.refCount++,
                f !== null && (c.pooledCacheLanes |= n),
                (c = f)),
              (e.memoizedState = { parent: l, cache: c }),
              yc(e),
              Fn(e, Pt, c))
            : ((t.lanes & n) !== 0 && (gc(t, e), wi(e, null, null, n), Ai()),
              (c = t.memoizedState),
              (f = e.memoizedState),
              c.parent !== l
                ? ((c = { parent: l, cache: l }),
                  (e.memoizedState = c),
                  e.lanes === 0 &&
                    (e.memoizedState = e.updateQueue.baseState = c),
                  Fn(e, Pt, l))
                : ((l = f.cache),
                  Fn(e, Pt, l),
                  l !== c.cache && fc(e, [Pt], n, !0))),
          le(t, e, e.pendingProps.children, n),
          e.child
        );
      case 29:
        throw e.pendingProps;
    }
    throw Error(i(156, e.tag));
  }
  function Mn(t) {
    t.flags |= 4;
  }
  function Dm(t, e) {
    if (e.type !== "stylesheet" || (e.state.loading & 4) !== 0)
      t.flags &= -16777217;
    else if (((t.flags |= 16777216), !Lp(e))) {
      if (
        ((e = Pe.current),
        e !== null &&
          ((St & 4194048) === St
            ? cn !== null
            : ((St & 62914560) !== St && (St & 536870912) === 0) || e !== cn))
      )
        throw ((Oi = pc), hd);
      t.flags |= 8192;
    }
  }
  function _r(t, e) {
    e !== null && (t.flags |= 4),
      t.flags & 16384 &&
        ((e = t.tag !== 22 ? rh() : 536870912), (t.lanes |= e), (Ml |= e));
  }
  function ji(t, e) {
    if (!Et)
      switch (t.tailMode) {
        case "hidden":
          e = t.tail;
          for (var n = null; e !== null; )
            e.alternate !== null && (n = e), (e = e.sibling);
          n === null ? (t.tail = null) : (n.sibling = null);
          break;
        case "collapsed":
          n = t.tail;
          for (var l = null; n !== null; )
            n.alternate !== null && (l = n), (n = n.sibling);
          l === null
            ? e || t.tail === null
              ? (t.tail = null)
              : (t.tail.sibling = null)
            : (l.sibling = null);
      }
  }
  function Lt(t) {
    var e = t.alternate !== null && t.alternate.child === t.child,
      n = 0,
      l = 0;
    if (e)
      for (var c = t.child; c !== null; )
        (n |= c.lanes | c.childLanes),
          (l |= c.subtreeFlags & 65011712),
          (l |= c.flags & 65011712),
          (c.return = t),
          (c = c.sibling);
    else
      for (c = t.child; c !== null; )
        (n |= c.lanes | c.childLanes),
          (l |= c.subtreeFlags),
          (l |= c.flags),
          (c.return = t),
          (c = c.sibling);
    return (t.subtreeFlags |= l), (t.childLanes = n), e;
  }
  function W_(t, e, n) {
    var l = e.pendingProps;
    switch ((rc(e), e.tag)) {
      case 31:
      case 16:
      case 15:
      case 0:
      case 11:
      case 7:
      case 8:
      case 12:
      case 9:
      case 14:
        return Lt(e), null;
      case 1:
        return Lt(e), null;
      case 3:
        return (
          (n = e.stateNode),
          (l = null),
          t !== null && (l = t.memoizedState.cache),
          e.memoizedState.cache !== l && (e.flags |= 2048),
          wn(Pt),
          kn(),
          n.pendingContext &&
            ((n.context = n.pendingContext), (n.pendingContext = null)),
          (t === null || t.child === null) &&
            (_i(e)
              ? Mn(e)
              : t === null ||
                (t.memoizedState.isDehydrated && (e.flags & 256) === 0) ||
                ((e.flags |= 1024), rd())),
          Lt(e),
          null
        );
      case 26:
        return (
          (n = e.memoizedState),
          t === null
            ? (Mn(e),
              n !== null ? (Lt(e), Dm(e, n)) : (Lt(e), (e.flags &= -16777217)))
            : n
            ? n !== t.memoizedState
              ? (Mn(e), Lt(e), Dm(e, n))
              : (Lt(e), (e.flags &= -16777217))
            : (t.memoizedProps !== l && Mn(e), Lt(e), (e.flags &= -16777217)),
          null
        );
      case 27:
        Du(e), (n = rt.current);
        var c = e.type;
        if (t !== null && e.stateNode != null) t.memoizedProps !== l && Mn(e);
        else {
          if (!l) {
            if (e.stateNode === null) throw Error(i(166));
            return Lt(e), null;
          }
          (t = et.current),
            _i(e) ? id(e) : ((t = Dp(c, l, n)), (e.stateNode = t), Mn(e));
        }
        return Lt(e), null;
      case 5:
        if ((Du(e), (n = e.type), t !== null && e.stateNode != null))
          t.memoizedProps !== l && Mn(e);
        else {
          if (!l) {
            if (e.stateNode === null) throw Error(i(166));
            return Lt(e), null;
          }
          if (((t = et.current), _i(e))) id(e);
          else {
            switch (((c = Nr(rt.current)), t)) {
              case 1:
                t = c.createElementNS("http://www.w3.org/2000/svg", n);
                break;
              case 2:
                t = c.createElementNS("http://www.w3.org/1998/Math/MathML", n);
                break;
              default:
                switch (n) {
                  case "svg":
                    t = c.createElementNS("http://www.w3.org/2000/svg", n);
                    break;
                  case "math":
                    t = c.createElementNS(
                      "http://www.w3.org/1998/Math/MathML",
                      n
                    );
                    break;
                  case "script":
                    (t = c.createElement("div")),
                      (t.innerHTML = "<script></script>"),
                      (t = t.removeChild(t.firstChild));
                    break;
                  case "select":
                    (t =
                      typeof l.is == "string"
                        ? c.createElement("select", { is: l.is })
                        : c.createElement("select")),
                      l.multiple
                        ? (t.multiple = !0)
                        : l.size && (t.size = l.size);
                    break;
                  default:
                    t =
                      typeof l.is == "string"
                        ? c.createElement(n, { is: l.is })
                        : c.createElement(n);
                }
            }
            (t[se] = e), (t[ge] = l);
            t: for (c = e.child; c !== null; ) {
              if (c.tag === 5 || c.tag === 6) t.appendChild(c.stateNode);
              else if (c.tag !== 4 && c.tag !== 27 && c.child !== null) {
                (c.child.return = c), (c = c.child);
                continue;
              }
              if (c === e) break t;
              for (; c.sibling === null; ) {
                if (c.return === null || c.return === e) break t;
                c = c.return;
              }
              (c.sibling.return = c.return), (c = c.sibling);
            }
            e.stateNode = t;
            t: switch ((ue(t, n, l), n)) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                t = !!l.autoFocus;
                break t;
              case "img":
                t = !0;
                break t;
              default:
                t = !1;
            }
            t && Mn(e);
          }
        }
        return Lt(e), (e.flags &= -16777217), null;
      case 6:
        if (t && e.stateNode != null) t.memoizedProps !== l && Mn(e);
        else {
          if (typeof l != "string" && e.stateNode === null) throw Error(i(166));
          if (((t = rt.current), _i(e))) {
            if (
              ((t = e.stateNode),
              (n = e.memoizedProps),
              (l = null),
              (c = pe),
              c !== null)
            )
              switch (c.tag) {
                case 27:
                case 5:
                  l = c.memoizedProps;
              }
            (t[se] = e),
              (t = !!(
                t.nodeValue === n ||
                (l !== null && l.suppressHydrationWarning === !0) ||
                xp(t.nodeValue, n)
              )),
              t || Ua(e);
          } else (t = Nr(t).createTextNode(l)), (t[se] = e), (e.stateNode = t);
        }
        return Lt(e), null;
      case 13:
        if (
          ((l = e.memoizedState),
          t === null ||
            (t.memoizedState !== null && t.memoizedState.dehydrated !== null))
        ) {
          if (((c = _i(e)), l !== null && l.dehydrated !== null)) {
            if (t === null) {
              if (!c) throw Error(i(318));
              if (
                ((c = e.memoizedState),
                (c = c !== null ? c.dehydrated : null),
                !c)
              )
                throw Error(i(317));
              c[se] = e;
            } else
              vi(),
                (e.flags & 128) === 0 && (e.memoizedState = null),
                (e.flags |= 4);
            Lt(e), (c = !1);
          } else
            (c = rd()),
              t !== null &&
                t.memoizedState !== null &&
                (t.memoizedState.hydrationErrors = c),
              (c = !0);
          if (!c) return e.flags & 256 ? (Cn(e), e) : (Cn(e), null);
        }
        if ((Cn(e), (e.flags & 128) !== 0)) return (e.lanes = n), e;
        if (
          ((n = l !== null), (t = t !== null && t.memoizedState !== null), n)
        ) {
          (l = e.child),
            (c = null),
            l.alternate !== null &&
              l.alternate.memoizedState !== null &&
              l.alternate.memoizedState.cachePool !== null &&
              (c = l.alternate.memoizedState.cachePool.pool);
          var f = null;
          l.memoizedState !== null &&
            l.memoizedState.cachePool !== null &&
            (f = l.memoizedState.cachePool.pool),
            f !== c && (l.flags |= 2048);
        }
        return (
          n !== t && n && (e.child.flags |= 8192),
          _r(e, e.updateQueue),
          Lt(e),
          null
        );
      case 4:
        return kn(), t === null && bo(e.stateNode.containerInfo), Lt(e), null;
      case 10:
        return wn(e.type), Lt(e), null;
      case 19:
        if ((P(Wt), (c = e.memoizedState), c === null)) return Lt(e), null;
        if (((l = (e.flags & 128) !== 0), (f = c.rendering), f === null))
          if (l) ji(c, !1);
          else {
            if (Gt !== 0 || (t !== null && (t.flags & 128) !== 0))
              for (t = e.child; t !== null; ) {
                if (((f = dr(t)), f !== null)) {
                  for (
                    e.flags |= 128,
                      ji(c, !1),
                      t = f.updateQueue,
                      e.updateQueue = t,
                      _r(e, t),
                      e.subtreeFlags = 0,
                      t = n,
                      n = e.child;
                    n !== null;

                  )
                    ad(n, t), (n = n.sibling);
                  return W(Wt, (Wt.current & 1) | 2), e.child;
                }
                t = t.sibling;
              }
            c.tail !== null &&
              rn() > Sr &&
              ((e.flags |= 128), (l = !0), ji(c, !1), (e.lanes = 4194304));
          }
        else {
          if (!l)
            if (((t = dr(f)), t !== null)) {
              if (
                ((e.flags |= 128),
                (l = !0),
                (t = t.updateQueue),
                (e.updateQueue = t),
                _r(e, t),
                ji(c, !0),
                c.tail === null &&
                  c.tailMode === "hidden" &&
                  !f.alternate &&
                  !Et)
              )
                return Lt(e), null;
            } else
              2 * rn() - c.renderingStartTime > Sr &&
                n !== 536870912 &&
                ((e.flags |= 128), (l = !0), ji(c, !1), (e.lanes = 4194304));
          c.isBackwards
            ? ((f.sibling = e.child), (e.child = f))
            : ((t = c.last),
              t !== null ? (t.sibling = f) : (e.child = f),
              (c.last = f));
        }
        return c.tail !== null
          ? ((e = c.tail),
            (c.rendering = e),
            (c.tail = e.sibling),
            (c.renderingStartTime = rn()),
            (e.sibling = null),
            (t = Wt.current),
            W(Wt, l ? (t & 1) | 2 : t & 1),
            e)
          : (Lt(e), null);
      case 22:
      case 23:
        return (
          Cn(e),
          Sc(),
          (l = e.memoizedState !== null),
          t !== null
            ? (t.memoizedState !== null) !== l && (e.flags |= 8192)
            : l && (e.flags |= 8192),
          l
            ? (n & 536870912) !== 0 &&
              (e.flags & 128) === 0 &&
              (Lt(e), e.subtreeFlags & 6 && (e.flags |= 8192))
            : Lt(e),
          (n = e.updateQueue),
          n !== null && _r(e, n.retryQueue),
          (n = null),
          t !== null &&
            t.memoizedState !== null &&
            t.memoizedState.cachePool !== null &&
            (n = t.memoizedState.cachePool.pool),
          (l = null),
          e.memoizedState !== null &&
            e.memoizedState.cachePool !== null &&
            (l = e.memoizedState.cachePool.pool),
          l !== n && (e.flags |= 2048),
          t !== null && P(La),
          null
        );
      case 24:
        return (
          (n = null),
          t !== null && (n = t.memoizedState.cache),
          e.memoizedState.cache !== n && (e.flags |= 2048),
          wn(Pt),
          Lt(e),
          null
        );
      case 25:
        return null;
      case 30:
        return null;
    }
    throw Error(i(156, e.tag));
  }
  function I_(t, e) {
    switch ((rc(e), e.tag)) {
      case 1:
        return (
          (t = e.flags), t & 65536 ? ((e.flags = (t & -65537) | 128), e) : null
        );
      case 3:
        return (
          wn(Pt),
          kn(),
          (t = e.flags),
          (t & 65536) !== 0 && (t & 128) === 0
            ? ((e.flags = (t & -65537) | 128), e)
            : null
        );
      case 26:
      case 27:
      case 5:
        return Du(e), null;
      case 13:
        if (
          (Cn(e), (t = e.memoizedState), t !== null && t.dehydrated !== null)
        ) {
          if (e.alternate === null) throw Error(i(340));
          vi();
        }
        return (
          (t = e.flags), t & 65536 ? ((e.flags = (t & -65537) | 128), e) : null
        );
      case 19:
        return P(Wt), null;
      case 4:
        return kn(), null;
      case 10:
        return wn(e.type), null;
      case 22:
      case 23:
        return (
          Cn(e),
          Sc(),
          t !== null && P(La),
          (t = e.flags),
          t & 65536 ? ((e.flags = (t & -65537) | 128), e) : null
        );
      case 24:
        return wn(Pt), null;
      case 25:
        return null;
      default:
        return null;
    }
  }
  function Cm(t, e) {
    switch ((rc(e), e.tag)) {
      case 3:
        wn(Pt), kn();
        break;
      case 26:
      case 27:
      case 5:
        Du(e);
        break;
      case 4:
        kn();
        break;
      case 13:
        Cn(e);
        break;
      case 19:
        P(Wt);
        break;
      case 10:
        wn(e.type);
        break;
      case 22:
      case 23:
        Cn(e), Sc(), t !== null && P(La);
        break;
      case 24:
        wn(Pt);
    }
  }
  function Bi(t, e) {
    try {
      var n = e.updateQueue,
        l = n !== null ? n.lastEffect : null;
      if (l !== null) {
        var c = l.next;
        n = c;
        do {
          if ((n.tag & t) === t) {
            l = void 0;
            var f = n.create,
              g = n.inst;
            (l = f()), (g.destroy = l);
          }
          n = n.next;
        } while (n !== c);
      }
    } catch (_) {
      Ct(e, e.return, _);
    }
  }
  function na(t, e, n) {
    try {
      var l = e.updateQueue,
        c = l !== null ? l.lastEffect : null;
      if (c !== null) {
        var f = c.next;
        l = f;
        do {
          if ((l.tag & t) === t) {
            var g = l.inst,
              _ = g.destroy;
            if (_ !== void 0) {
              (g.destroy = void 0), (c = e);
              var R = n,
                j = _;
              try {
                j();
              } catch (V) {
                Ct(c, R, V);
              }
            }
          }
          l = l.next;
        } while (l !== f);
      }
    } catch (V) {
      Ct(e, e.return, V);
    }
  }
  function Nm(t) {
    var e = t.updateQueue;
    if (e !== null) {
      var n = t.stateNode;
      try {
        _d(e, n);
      } catch (l) {
        Ct(t, t.return, l);
      }
    }
  }
  function Mm(t, e, n) {
    (n.props = qa(t.type, t.memoizedProps)), (n.state = t.memoizedState);
    try {
      n.componentWillUnmount();
    } catch (l) {
      Ct(t, e, l);
    }
  }
  function Li(t, e) {
    try {
      var n = t.ref;
      if (n !== null) {
        switch (t.tag) {
          case 26:
          case 27:
          case 5:
            var l = t.stateNode;
            break;
          case 30:
            l = t.stateNode;
            break;
          default:
            l = t.stateNode;
        }
        typeof n == "function" ? (t.refCleanup = n(l)) : (n.current = l);
      }
    } catch (c) {
      Ct(t, e, c);
    }
  }
  function on(t, e) {
    var n = t.ref,
      l = t.refCleanup;
    if (n !== null)
      if (typeof l == "function")
        try {
          l();
        } catch (c) {
          Ct(t, e, c);
        } finally {
          (t.refCleanup = null),
            (t = t.alternate),
            t != null && (t.refCleanup = null);
        }
      else if (typeof n == "function")
        try {
          n(null);
        } catch (c) {
          Ct(t, e, c);
        }
      else n.current = null;
  }
  function zm(t) {
    var e = t.type,
      n = t.memoizedProps,
      l = t.stateNode;
    try {
      t: switch (e) {
        case "button":
        case "input":
        case "select":
        case "textarea":
          n.autoFocus && l.focus();
          break t;
        case "img":
          n.src ? (l.src = n.src) : n.srcSet && (l.srcset = n.srcSet);
      }
    } catch (c) {
      Ct(t, t.return, c);
    }
  }
  function Fc(t, e, n) {
    try {
      var l = t.stateNode;
      bv(l, t.type, n, e), (l[ge] = e);
    } catch (c) {
      Ct(t, t.return, c);
    }
  }
  function Um(t) {
    return (
      t.tag === 5 ||
      t.tag === 3 ||
      t.tag === 26 ||
      (t.tag === 27 && oa(t.type)) ||
      t.tag === 4
    );
  }
  function $c(t) {
    t: for (;;) {
      for (; t.sibling === null; ) {
        if (t.return === null || Um(t.return)) return null;
        t = t.return;
      }
      for (
        t.sibling.return = t.return, t = t.sibling;
        t.tag !== 5 && t.tag !== 6 && t.tag !== 18;

      ) {
        if (
          (t.tag === 27 && oa(t.type)) ||
          t.flags & 2 ||
          t.child === null ||
          t.tag === 4
        )
          continue t;
        (t.child.return = t), (t = t.child);
      }
      if (!(t.flags & 2)) return t.stateNode;
    }
  }
  function Pc(t, e, n) {
    var l = t.tag;
    if (l === 5 || l === 6)
      (t = t.stateNode),
        e
          ? (n.nodeType === 9
              ? n.body
              : n.nodeName === "HTML"
              ? n.ownerDocument.body
              : n
            ).insertBefore(t, e)
          : ((e =
              n.nodeType === 9
                ? n.body
                : n.nodeName === "HTML"
                ? n.ownerDocument.body
                : n),
            e.appendChild(t),
            (n = n._reactRootContainer),
            n != null || e.onclick !== null || (e.onclick = Cr));
    else if (
      l !== 4 &&
      (l === 27 && oa(t.type) && ((n = t.stateNode), (e = null)),
      (t = t.child),
      t !== null)
    )
      for (Pc(t, e, n), t = t.sibling; t !== null; )
        Pc(t, e, n), (t = t.sibling);
  }
  function vr(t, e, n) {
    var l = t.tag;
    if (l === 5 || l === 6)
      (t = t.stateNode), e ? n.insertBefore(t, e) : n.appendChild(t);
    else if (
      l !== 4 &&
      (l === 27 && oa(t.type) && (n = t.stateNode), (t = t.child), t !== null)
    )
      for (vr(t, e, n), t = t.sibling; t !== null; )
        vr(t, e, n), (t = t.sibling);
  }
  function jm(t) {
    var e = t.stateNode,
      n = t.memoizedProps;
    try {
      for (var l = t.type, c = e.attributes; c.length; )
        e.removeAttributeNode(c[0]);
      ue(e, l, n), (e[se] = t), (e[ge] = n);
    } catch (f) {
      Ct(t, t.return, f);
    }
  }
  var zn = !1,
    kt = !1,
    Wc = !1,
    Bm = typeof WeakSet == "function" ? WeakSet : Set,
    ee = null;
  function tv(t, e) {
    if (((t = t.containerInfo), (To = Lr), (t = Kh(t)), $s(t))) {
      if ("selectionStart" in t)
        var n = { start: t.selectionStart, end: t.selectionEnd };
      else
        t: {
          n = ((n = t.ownerDocument) && n.defaultView) || window;
          var l = n.getSelection && n.getSelection();
          if (l && l.rangeCount !== 0) {
            n = l.anchorNode;
            var c = l.anchorOffset,
              f = l.focusNode;
            l = l.focusOffset;
            try {
              n.nodeType, f.nodeType;
            } catch {
              n = null;
              break t;
            }
            var g = 0,
              _ = -1,
              R = -1,
              j = 0,
              V = 0,
              Z = t,
              B = null;
            e: for (;;) {
              for (
                var L;
                Z !== n || (c !== 0 && Z.nodeType !== 3) || (_ = g + c),
                  Z !== f || (l !== 0 && Z.nodeType !== 3) || (R = g + l),
                  Z.nodeType === 3 && (g += Z.nodeValue.length),
                  (L = Z.firstChild) !== null;

              )
                (B = Z), (Z = L);
              for (;;) {
                if (Z === t) break e;
                if (
                  (B === n && ++j === c && (_ = g),
                  B === f && ++V === l && (R = g),
                  (L = Z.nextSibling) !== null)
                )
                  break;
                (Z = B), (B = Z.parentNode);
              }
              Z = L;
            }
            n = _ === -1 || R === -1 ? null : { start: _, end: R };
          } else n = null;
        }
      n = n || { start: 0, end: 0 };
    } else n = null;
    for (
      Eo = { focusedElem: t, selectionRange: n }, Lr = !1, ee = e;
      ee !== null;

    )
      if (
        ((e = ee), (t = e.child), (e.subtreeFlags & 1024) !== 0 && t !== null)
      )
        (t.return = e), (ee = t);
      else
        for (; ee !== null; ) {
          switch (((e = ee), (f = e.alternate), (t = e.flags), e.tag)) {
            case 0:
              break;
            case 11:
            case 15:
              break;
            case 1:
              if ((t & 1024) !== 0 && f !== null) {
                (t = void 0),
                  (n = e),
                  (c = f.memoizedProps),
                  (f = f.memoizedState),
                  (l = n.stateNode);
                try {
                  var it = qa(n.type, c, n.elementType === n.type);
                  (t = l.getSnapshotBeforeUpdate(it, f)),
                    (l.__reactInternalSnapshotBeforeUpdate = t);
                } catch (at) {
                  Ct(n, n.return, at);
                }
              }
              break;
            case 3:
              if ((t & 1024) !== 0) {
                if (
                  ((t = e.stateNode.containerInfo), (n = t.nodeType), n === 9)
                )
                  Ao(t);
                else if (n === 1)
                  switch (t.nodeName) {
                    case "HEAD":
                    case "HTML":
                    case "BODY":
                      Ao(t);
                      break;
                    default:
                      t.textContent = "";
                  }
              }
              break;
            case 5:
            case 26:
            case 27:
            case 6:
            case 4:
            case 17:
              break;
            default:
              if ((t & 1024) !== 0) throw Error(i(163));
          }
          if (((t = e.sibling), t !== null)) {
            (t.return = e.return), (ee = t);
            break;
          }
          ee = e.return;
        }
  }
  function Lm(t, e, n) {
    var l = n.flags;
    switch (n.tag) {
      case 0:
      case 11:
      case 15:
        aa(t, n), l & 4 && Bi(5, n);
        break;
      case 1:
        if ((aa(t, n), l & 4))
          if (((t = n.stateNode), e === null))
            try {
              t.componentDidMount();
            } catch (g) {
              Ct(n, n.return, g);
            }
          else {
            var c = qa(n.type, e.memoizedProps);
            e = e.memoizedState;
            try {
              t.componentDidUpdate(c, e, t.__reactInternalSnapshotBeforeUpdate);
            } catch (g) {
              Ct(n, n.return, g);
            }
          }
        l & 64 && Nm(n), l & 512 && Li(n, n.return);
        break;
      case 3:
        if ((aa(t, n), l & 64 && ((t = n.updateQueue), t !== null))) {
          if (((e = null), n.child !== null))
            switch (n.child.tag) {
              case 27:
              case 5:
                e = n.child.stateNode;
                break;
              case 1:
                e = n.child.stateNode;
            }
          try {
            _d(t, e);
          } catch (g) {
            Ct(n, n.return, g);
          }
        }
        break;
      case 27:
        e === null && l & 4 && jm(n);
      case 26:
      case 5:
        aa(t, n), e === null && l & 4 && zm(n), l & 512 && Li(n, n.return);
        break;
      case 12:
        aa(t, n);
        break;
      case 13:
        aa(t, n),
          l & 4 && Ym(t, n),
          l & 64 &&
            ((t = n.memoizedState),
            t !== null &&
              ((t = t.dehydrated),
              t !== null && ((n = cv.bind(null, n)), Av(t, n))));
        break;
      case 22:
        if (((l = n.memoizedState !== null || zn), !l)) {
          (e = (e !== null && e.memoizedState !== null) || kt), (c = zn);
          var f = kt;
          (zn = l),
            (kt = e) && !f ? la(t, n, (n.subtreeFlags & 8772) !== 0) : aa(t, n),
            (zn = c),
            (kt = f);
        }
        break;
      case 30:
        break;
      default:
        aa(t, n);
    }
  }
  function Hm(t) {
    var e = t.alternate;
    e !== null && ((t.alternate = null), Hm(e)),
      (t.child = null),
      (t.deletions = null),
      (t.sibling = null),
      t.tag === 5 && ((e = t.stateNode), e !== null && Ns(e)),
      (t.stateNode = null),
      (t.return = null),
      (t.dependencies = null),
      (t.memoizedProps = null),
      (t.memoizedState = null),
      (t.pendingProps = null),
      (t.stateNode = null),
      (t.updateQueue = null);
  }
  var jt = null,
    be = !1;
  function Un(t, e, n) {
    for (n = n.child; n !== null; ) qm(t, e, n), (n = n.sibling);
  }
  function qm(t, e, n) {
    if (De && typeof De.onCommitFiberUnmount == "function")
      try {
        De.onCommitFiberUnmount(li, n);
      } catch {}
    switch (n.tag) {
      case 26:
        kt || on(n, e),
          Un(t, e, n),
          n.memoizedState
            ? n.memoizedState.count--
            : n.stateNode && ((n = n.stateNode), n.parentNode.removeChild(n));
        break;
      case 27:
        kt || on(n, e);
        var l = jt,
          c = be;
        oa(n.type) && ((jt = n.stateNode), (be = !1)),
          Un(t, e, n),
          Zi(n.stateNode),
          (jt = l),
          (be = c);
        break;
      case 5:
        kt || on(n, e);
      case 6:
        if (
          ((l = jt),
          (c = be),
          (jt = null),
          Un(t, e, n),
          (jt = l),
          (be = c),
          jt !== null)
        )
          if (be)
            try {
              (jt.nodeType === 9
                ? jt.body
                : jt.nodeName === "HTML"
                ? jt.ownerDocument.body
                : jt
              ).removeChild(n.stateNode);
            } catch (f) {
              Ct(n, e, f);
            }
          else
            try {
              jt.removeChild(n.stateNode);
            } catch (f) {
              Ct(n, e, f);
            }
        break;
      case 18:
        jt !== null &&
          (be
            ? ((t = jt),
              Ap(
                t.nodeType === 9
                  ? t.body
                  : t.nodeName === "HTML"
                  ? t.ownerDocument.body
                  : t,
                n.stateNode
              ),
              tu(t))
            : Ap(jt, n.stateNode));
        break;
      case 4:
        (l = jt),
          (c = be),
          (jt = n.stateNode.containerInfo),
          (be = !0),
          Un(t, e, n),
          (jt = l),
          (be = c);
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        kt || na(2, n, e), kt || na(4, n, e), Un(t, e, n);
        break;
      case 1:
        kt ||
          (on(n, e),
          (l = n.stateNode),
          typeof l.componentWillUnmount == "function" && Mm(n, e, l)),
          Un(t, e, n);
        break;
      case 21:
        Un(t, e, n);
        break;
      case 22:
        (kt = (l = kt) || n.memoizedState !== null), Un(t, e, n), (kt = l);
        break;
      default:
        Un(t, e, n);
    }
  }
  function Ym(t, e) {
    if (
      e.memoizedState === null &&
      ((t = e.alternate),
      t !== null &&
        ((t = t.memoizedState), t !== null && ((t = t.dehydrated), t !== null)))
    )
      try {
        tu(t);
      } catch (n) {
        Ct(e, e.return, n);
      }
  }
  function ev(t) {
    switch (t.tag) {
      case 13:
      case 19:
        var e = t.stateNode;
        return e === null && (e = t.stateNode = new Bm()), e;
      case 22:
        return (
          (t = t.stateNode),
          (e = t._retryCache),
          e === null && (e = t._retryCache = new Bm()),
          e
        );
      default:
        throw Error(i(435, t.tag));
    }
  }
  function Ic(t, e) {
    var n = ev(t);
    e.forEach(function (l) {
      var c = ov.bind(null, t, l);
      n.has(l) || (n.add(l), l.then(c, c));
    });
  }
  function ze(t, e) {
    var n = e.deletions;
    if (n !== null)
      for (var l = 0; l < n.length; l++) {
        var c = n[l],
          f = t,
          g = e,
          _ = g;
        t: for (; _ !== null; ) {
          switch (_.tag) {
            case 27:
              if (oa(_.type)) {
                (jt = _.stateNode), (be = !1);
                break t;
              }
              break;
            case 5:
              (jt = _.stateNode), (be = !1);
              break t;
            case 3:
            case 4:
              (jt = _.stateNode.containerInfo), (be = !0);
              break t;
          }
          _ = _.return;
        }
        if (jt === null) throw Error(i(160));
        qm(f, g, c),
          (jt = null),
          (be = !1),
          (f = c.alternate),
          f !== null && (f.return = null),
          (c.return = null);
      }
    if (e.subtreeFlags & 13878)
      for (e = e.child; e !== null; ) Xm(e, t), (e = e.sibling);
  }
  var an = null;
  function Xm(t, e) {
    var n = t.alternate,
      l = t.flags;
    switch (t.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        ze(e, t),
          Ue(t),
          l & 4 && (na(3, t, t.return), Bi(3, t), na(5, t, t.return));
        break;
      case 1:
        ze(e, t),
          Ue(t),
          l & 512 && (kt || n === null || on(n, n.return)),
          l & 64 &&
            zn &&
            ((t = t.updateQueue),
            t !== null &&
              ((l = t.callbacks),
              l !== null &&
                ((n = t.shared.hiddenCallbacks),
                (t.shared.hiddenCallbacks = n === null ? l : n.concat(l)))));
        break;
      case 26:
        var c = an;
        if (
          (ze(e, t),
          Ue(t),
          l & 512 && (kt || n === null || on(n, n.return)),
          l & 4)
        ) {
          var f = n !== null ? n.memoizedState : null;
          if (((l = t.memoizedState), n === null))
            if (l === null)
              if (t.stateNode === null) {
                t: {
                  (l = t.type),
                    (n = t.memoizedProps),
                    (c = c.ownerDocument || c);
                  e: switch (l) {
                    case "title":
                      (f = c.getElementsByTagName("title")[0]),
                        (!f ||
                          f[ri] ||
                          f[se] ||
                          f.namespaceURI === "http://www.w3.org/2000/svg" ||
                          f.hasAttribute("itemprop")) &&
                          ((f = c.createElement(l)),
                          c.head.insertBefore(
                            f,
                            c.querySelector("head > title")
                          )),
                        ue(f, l, n),
                        (f[se] = t),
                        It(f),
                        (l = f);
                      break t;
                    case "link":
                      var g = jp("link", "href", c).get(l + (n.href || ""));
                      if (g) {
                        for (var _ = 0; _ < g.length; _++)
                          if (
                            ((f = g[_]),
                            f.getAttribute("href") ===
                              (n.href == null || n.href === ""
                                ? null
                                : n.href) &&
                              f.getAttribute("rel") ===
                                (n.rel == null ? null : n.rel) &&
                              f.getAttribute("title") ===
                                (n.title == null ? null : n.title) &&
                              f.getAttribute("crossorigin") ===
                                (n.crossOrigin == null ? null : n.crossOrigin))
                          ) {
                            g.splice(_, 1);
                            break e;
                          }
                      }
                      (f = c.createElement(l)),
                        ue(f, l, n),
                        c.head.appendChild(f);
                      break;
                    case "meta":
                      if (
                        (g = jp("meta", "content", c).get(
                          l + (n.content || "")
                        ))
                      ) {
                        for (_ = 0; _ < g.length; _++)
                          if (
                            ((f = g[_]),
                            f.getAttribute("content") ===
                              (n.content == null ? null : "" + n.content) &&
                              f.getAttribute("name") ===
                                (n.name == null ? null : n.name) &&
                              f.getAttribute("property") ===
                                (n.property == null ? null : n.property) &&
                              f.getAttribute("http-equiv") ===
                                (n.httpEquiv == null ? null : n.httpEquiv) &&
                              f.getAttribute("charset") ===
                                (n.charSet == null ? null : n.charSet))
                          ) {
                            g.splice(_, 1);
                            break e;
                          }
                      }
                      (f = c.createElement(l)),
                        ue(f, l, n),
                        c.head.appendChild(f);
                      break;
                    default:
                      throw Error(i(468, l));
                  }
                  (f[se] = t), It(f), (l = f);
                }
                t.stateNode = l;
              } else Bp(c, t.type, t.stateNode);
            else t.stateNode = Up(c, l, t.memoizedProps);
          else
            f !== l
              ? (f === null
                  ? n.stateNode !== null &&
                    ((n = n.stateNode), n.parentNode.removeChild(n))
                  : f.count--,
                l === null
                  ? Bp(c, t.type, t.stateNode)
                  : Up(c, l, t.memoizedProps))
              : l === null &&
                t.stateNode !== null &&
                Fc(t, t.memoizedProps, n.memoizedProps);
        }
        break;
      case 27:
        ze(e, t),
          Ue(t),
          l & 512 && (kt || n === null || on(n, n.return)),
          n !== null && l & 4 && Fc(t, t.memoizedProps, n.memoizedProps);
        break;
      case 5:
        if (
          (ze(e, t),
          Ue(t),
          l & 512 && (kt || n === null || on(n, n.return)),
          t.flags & 32)
        ) {
          c = t.stateNode;
          try {
            ol(c, "");
          } catch (L) {
            Ct(t, t.return, L);
          }
        }
        l & 4 &&
          t.stateNode != null &&
          ((c = t.memoizedProps), Fc(t, c, n !== null ? n.memoizedProps : c)),
          l & 1024 && (Wc = !0);
        break;
      case 6:
        if ((ze(e, t), Ue(t), l & 4)) {
          if (t.stateNode === null) throw Error(i(162));
          (l = t.memoizedProps), (n = t.stateNode);
          try {
            n.nodeValue = l;
          } catch (L) {
            Ct(t, t.return, L);
          }
        }
        break;
      case 3:
        if (
          ((Ur = null),
          (c = an),
          (an = Mr(e.containerInfo)),
          ze(e, t),
          (an = c),
          Ue(t),
          l & 4 && n !== null && n.memoizedState.isDehydrated)
        )
          try {
            tu(e.containerInfo);
          } catch (L) {
            Ct(t, t.return, L);
          }
        Wc && ((Wc = !1), Gm(t));
        break;
      case 4:
        (l = an),
          (an = Mr(t.stateNode.containerInfo)),
          ze(e, t),
          Ue(t),
          (an = l);
        break;
      case 12:
        ze(e, t), Ue(t);
        break;
      case 13:
        ze(e, t),
          Ue(t),
          t.child.flags & 8192 &&
            (t.memoizedState !== null) !=
              (n !== null && n.memoizedState !== null) &&
            (io = rn()),
          l & 4 &&
            ((l = t.updateQueue),
            l !== null && ((t.updateQueue = null), Ic(t, l)));
        break;
      case 22:
        c = t.memoizedState !== null;
        var R = n !== null && n.memoizedState !== null,
          j = zn,
          V = kt;
        if (
          ((zn = j || c),
          (kt = V || R),
          ze(e, t),
          (kt = V),
          (zn = j),
          Ue(t),
          l & 8192)
        )
          t: for (
            e = t.stateNode,
              e._visibility = c ? e._visibility & -2 : e._visibility | 1,
              c && (n === null || R || zn || kt || Ya(t)),
              n = null,
              e = t;
            ;

          ) {
            if (e.tag === 5 || e.tag === 26) {
              if (n === null) {
                R = n = e;
                try {
                  if (((f = R.stateNode), c))
                    (g = f.style),
                      typeof g.setProperty == "function"
                        ? g.setProperty("display", "none", "important")
                        : (g.display = "none");
                  else {
                    _ = R.stateNode;
                    var Z = R.memoizedProps.style,
                      B =
                        Z != null && Z.hasOwnProperty("display")
                          ? Z.display
                          : null;
                    _.style.display =
                      B == null || typeof B == "boolean" ? "" : ("" + B).trim();
                  }
                } catch (L) {
                  Ct(R, R.return, L);
                }
              }
            } else if (e.tag === 6) {
              if (n === null) {
                R = e;
                try {
                  R.stateNode.nodeValue = c ? "" : R.memoizedProps;
                } catch (L) {
                  Ct(R, R.return, L);
                }
              }
            } else if (
              ((e.tag !== 22 && e.tag !== 23) ||
                e.memoizedState === null ||
                e === t) &&
              e.child !== null
            ) {
              (e.child.return = e), (e = e.child);
              continue;
            }
            if (e === t) break t;
            for (; e.sibling === null; ) {
              if (e.return === null || e.return === t) break t;
              n === e && (n = null), (e = e.return);
            }
            n === e && (n = null),
              (e.sibling.return = e.return),
              (e = e.sibling);
          }
        l & 4 &&
          ((l = t.updateQueue),
          l !== null &&
            ((n = l.retryQueue),
            n !== null && ((l.retryQueue = null), Ic(t, n))));
        break;
      case 19:
        ze(e, t),
          Ue(t),
          l & 4 &&
            ((l = t.updateQueue),
            l !== null && ((t.updateQueue = null), Ic(t, l)));
        break;
      case 30:
        break;
      case 21:
        break;
      default:
        ze(e, t), Ue(t);
    }
  }
  function Ue(t) {
    var e = t.flags;
    if (e & 2) {
      try {
        for (var n, l = t.return; l !== null; ) {
          if (Um(l)) {
            n = l;
            break;
          }
          l = l.return;
        }
        if (n == null) throw Error(i(160));
        switch (n.tag) {
          case 27:
            var c = n.stateNode,
              f = $c(t);
            vr(t, f, c);
            break;
          case 5:
            var g = n.stateNode;
            n.flags & 32 && (ol(g, ""), (n.flags &= -33));
            var _ = $c(t);
            vr(t, _, g);
            break;
          case 3:
          case 4:
            var R = n.stateNode.containerInfo,
              j = $c(t);
            Pc(t, j, R);
            break;
          default:
            throw Error(i(161));
        }
      } catch (V) {
        Ct(t, t.return, V);
      }
      t.flags &= -3;
    }
    e & 4096 && (t.flags &= -4097);
  }
  function Gm(t) {
    if (t.subtreeFlags & 1024)
      for (t = t.child; t !== null; ) {
        var e = t;
        Gm(e),
          e.tag === 5 && e.flags & 1024 && e.stateNode.reset(),
          (t = t.sibling);
      }
  }
  function aa(t, e) {
    if (e.subtreeFlags & 8772)
      for (e = e.child; e !== null; ) Lm(t, e.alternate, e), (e = e.sibling);
  }
  function Ya(t) {
    for (t = t.child; t !== null; ) {
      var e = t;
      switch (e.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
          na(4, e, e.return), Ya(e);
          break;
        case 1:
          on(e, e.return);
          var n = e.stateNode;
          typeof n.componentWillUnmount == "function" && Mm(e, e.return, n),
            Ya(e);
          break;
        case 27:
          Zi(e.stateNode);
        case 26:
        case 5:
          on(e, e.return), Ya(e);
          break;
        case 22:
          e.memoizedState === null && Ya(e);
          break;
        case 30:
          Ya(e);
          break;
        default:
          Ya(e);
      }
      t = t.sibling;
    }
  }
  function la(t, e, n) {
    for (n = n && (e.subtreeFlags & 8772) !== 0, e = e.child; e !== null; ) {
      var l = e.alternate,
        c = t,
        f = e,
        g = f.flags;
      switch (f.tag) {
        case 0:
        case 11:
        case 15:
          la(c, f, n), Bi(4, f);
          break;
        case 1:
          if (
            (la(c, f, n),
            (l = f),
            (c = l.stateNode),
            typeof c.componentDidMount == "function")
          )
            try {
              c.componentDidMount();
            } catch (j) {
              Ct(l, l.return, j);
            }
          if (((l = f), (c = l.updateQueue), c !== null)) {
            var _ = l.stateNode;
            try {
              var R = c.shared.hiddenCallbacks;
              if (R !== null)
                for (c.shared.hiddenCallbacks = null, c = 0; c < R.length; c++)
                  gd(R[c], _);
            } catch (j) {
              Ct(l, l.return, j);
            }
          }
          n && g & 64 && Nm(f), Li(f, f.return);
          break;
        case 27:
          jm(f);
        case 26:
        case 5:
          la(c, f, n), n && l === null && g & 4 && zm(f), Li(f, f.return);
          break;
        case 12:
          la(c, f, n);
          break;
        case 13:
          la(c, f, n), n && g & 4 && Ym(c, f);
          break;
        case 22:
          f.memoizedState === null && la(c, f, n), Li(f, f.return);
          break;
        case 30:
          break;
        default:
          la(c, f, n);
      }
      e = e.sibling;
    }
  }
  function to(t, e) {
    var n = null;
    t !== null &&
      t.memoizedState !== null &&
      t.memoizedState.cachePool !== null &&
      (n = t.memoizedState.cachePool.pool),
      (t = null),
      e.memoizedState !== null &&
        e.memoizedState.cachePool !== null &&
        (t = e.memoizedState.cachePool.pool),
      t !== n && (t != null && t.refCount++, n != null && xi(n));
  }
  function eo(t, e) {
    (t = null),
      e.alternate !== null && (t = e.alternate.memoizedState.cache),
      (e = e.memoizedState.cache),
      e !== t && (e.refCount++, t != null && xi(t));
  }
  function fn(t, e, n, l) {
    if (e.subtreeFlags & 10256)
      for (e = e.child; e !== null; ) Vm(t, e, n, l), (e = e.sibling);
  }
  function Vm(t, e, n, l) {
    var c = e.flags;
    switch (e.tag) {
      case 0:
      case 11:
      case 15:
        fn(t, e, n, l), c & 2048 && Bi(9, e);
        break;
      case 1:
        fn(t, e, n, l);
        break;
      case 3:
        fn(t, e, n, l),
          c & 2048 &&
            ((t = null),
            e.alternate !== null && (t = e.alternate.memoizedState.cache),
            (e = e.memoizedState.cache),
            e !== t && (e.refCount++, t != null && xi(t)));
        break;
      case 12:
        if (c & 2048) {
          fn(t, e, n, l), (t = e.stateNode);
          try {
            var f = e.memoizedProps,
              g = f.id,
              _ = f.onPostCommit;
            typeof _ == "function" &&
              _(
                g,
                e.alternate === null ? "mount" : "update",
                t.passiveEffectDuration,
                -0
              );
          } catch (R) {
            Ct(e, e.return, R);
          }
        } else fn(t, e, n, l);
        break;
      case 13:
        fn(t, e, n, l);
        break;
      case 23:
        break;
      case 22:
        (f = e.stateNode),
          (g = e.alternate),
          e.memoizedState !== null
            ? f._visibility & 2
              ? fn(t, e, n, l)
              : Hi(t, e)
            : f._visibility & 2
            ? fn(t, e, n, l)
            : ((f._visibility |= 2),
              Dl(t, e, n, l, (e.subtreeFlags & 10256) !== 0)),
          c & 2048 && to(g, e);
        break;
      case 24:
        fn(t, e, n, l), c & 2048 && eo(e.alternate, e);
        break;
      default:
        fn(t, e, n, l);
    }
  }
  function Dl(t, e, n, l, c) {
    for (c = c && (e.subtreeFlags & 10256) !== 0, e = e.child; e !== null; ) {
      var f = t,
        g = e,
        _ = n,
        R = l,
        j = g.flags;
      switch (g.tag) {
        case 0:
        case 11:
        case 15:
          Dl(f, g, _, R, c), Bi(8, g);
          break;
        case 23:
          break;
        case 22:
          var V = g.stateNode;
          g.memoizedState !== null
            ? V._visibility & 2
              ? Dl(f, g, _, R, c)
              : Hi(f, g)
            : ((V._visibility |= 2), Dl(f, g, _, R, c)),
            c && j & 2048 && to(g.alternate, g);
          break;
        case 24:
          Dl(f, g, _, R, c), c && j & 2048 && eo(g.alternate, g);
          break;
        default:
          Dl(f, g, _, R, c);
      }
      e = e.sibling;
    }
  }
  function Hi(t, e) {
    if (e.subtreeFlags & 10256)
      for (e = e.child; e !== null; ) {
        var n = t,
          l = e,
          c = l.flags;
        switch (l.tag) {
          case 22:
            Hi(n, l), c & 2048 && to(l.alternate, l);
            break;
          case 24:
            Hi(n, l), c & 2048 && eo(l.alternate, l);
            break;
          default:
            Hi(n, l);
        }
        e = e.sibling;
      }
  }
  var qi = 8192;
  function Cl(t) {
    if (t.subtreeFlags & qi)
      for (t = t.child; t !== null; ) Qm(t), (t = t.sibling);
  }
  function Qm(t) {
    switch (t.tag) {
      case 26:
        Cl(t),
          t.flags & qi &&
            t.memoizedState !== null &&
            Yv(an, t.memoizedState, t.memoizedProps);
        break;
      case 5:
        Cl(t);
        break;
      case 3:
      case 4:
        var e = an;
        (an = Mr(t.stateNode.containerInfo)), Cl(t), (an = e);
        break;
      case 22:
        t.memoizedState === null &&
          ((e = t.alternate),
          e !== null && e.memoizedState !== null
            ? ((e = qi), (qi = 16777216), Cl(t), (qi = e))
            : Cl(t));
        break;
      default:
        Cl(t);
    }
  }
  function km(t) {
    var e = t.alternate;
    if (e !== null && ((t = e.child), t !== null)) {
      e.child = null;
      do (e = t.sibling), (t.sibling = null), (t = e);
      while (t !== null);
    }
  }
  function Yi(t) {
    var e = t.deletions;
    if ((t.flags & 16) !== 0) {
      if (e !== null)
        for (var n = 0; n < e.length; n++) {
          var l = e[n];
          (ee = l), Km(l, t);
        }
      km(t);
    }
    if (t.subtreeFlags & 10256)
      for (t = t.child; t !== null; ) Zm(t), (t = t.sibling);
  }
  function Zm(t) {
    switch (t.tag) {
      case 0:
      case 11:
      case 15:
        Yi(t), t.flags & 2048 && na(9, t, t.return);
        break;
      case 3:
        Yi(t);
        break;
      case 12:
        Yi(t);
        break;
      case 22:
        var e = t.stateNode;
        t.memoizedState !== null &&
        e._visibility & 2 &&
        (t.return === null || t.return.tag !== 13)
          ? ((e._visibility &= -3), br(t))
          : Yi(t);
        break;
      default:
        Yi(t);
    }
  }
  function br(t) {
    var e = t.deletions;
    if ((t.flags & 16) !== 0) {
      if (e !== null)
        for (var n = 0; n < e.length; n++) {
          var l = e[n];
          (ee = l), Km(l, t);
        }
      km(t);
    }
    for (t = t.child; t !== null; ) {
      switch (((e = t), e.tag)) {
        case 0:
        case 11:
        case 15:
          na(8, e, e.return), br(e);
          break;
        case 22:
          (n = e.stateNode),
            n._visibility & 2 && ((n._visibility &= -3), br(e));
          break;
        default:
          br(e);
      }
      t = t.sibling;
    }
  }
  function Km(t, e) {
    for (; ee !== null; ) {
      var n = ee;
      switch (n.tag) {
        case 0:
        case 11:
        case 15:
          na(8, n, e);
          break;
        case 23:
        case 22:
          if (n.memoizedState !== null && n.memoizedState.cachePool !== null) {
            var l = n.memoizedState.cachePool.pool;
            l != null && l.refCount++;
          }
          break;
        case 24:
          xi(n.memoizedState.cache);
      }
      if (((l = n.child), l !== null)) (l.return = n), (ee = l);
      else
        t: for (n = t; ee !== null; ) {
          l = ee;
          var c = l.sibling,
            f = l.return;
          if ((Hm(l), l === n)) {
            ee = null;
            break t;
          }
          if (c !== null) {
            (c.return = f), (ee = c);
            break t;
          }
          ee = f;
        }
    }
  }
  var nv = {
      getCacheForType: function (t) {
        var e = ce(Pt),
          n = e.data.get(t);
        return n === void 0 && ((n = t()), e.data.set(t, n)), n;
      },
    },
    av = typeof WeakMap == "function" ? WeakMap : Map,
    Ot = 0,
    Mt = null,
    pt = null,
    St = 0,
    Rt = 0,
    je = null,
    ia = !1,
    Nl = !1,
    no = !1,
    jn = 0,
    Gt = 0,
    ua = 0,
    Xa = 0,
    ao = 0,
    We = 0,
    Ml = 0,
    Xi = null,
    Se = null,
    lo = !1,
    io = 0,
    Sr = 1 / 0,
    xr = null,
    ra = null,
    ie = 0,
    sa = null,
    zl = null,
    Ul = 0,
    uo = 0,
    ro = null,
    Jm = null,
    Gi = 0,
    so = null;
  function Be() {
    if ((Ot & 2) !== 0 && St !== 0) return St & -St;
    if (q.T !== null) {
      var t = Sl;
      return t !== 0 ? t : yo();
    }
    return oh();
  }
  function Fm() {
    We === 0 && (We = (St & 536870912) === 0 || Et ? uh() : 536870912);
    var t = Pe.current;
    return t !== null && (t.flags |= 32), We;
  }
  function Le(t, e, n) {
    ((t === Mt && (Rt === 2 || Rt === 9)) || t.cancelPendingCommit !== null) &&
      (jl(t, 0), ca(t, St, We, !1)),
      ui(t, n),
      ((Ot & 2) === 0 || t !== Mt) &&
        (t === Mt &&
          ((Ot & 2) === 0 && (Xa |= n), Gt === 4 && ca(t, St, We, !1)),
        hn(t));
  }
  function $m(t, e, n) {
    if ((Ot & 6) !== 0) throw Error(i(327));
    var l = (!n && (e & 124) === 0 && (e & t.expiredLanes) === 0) || ii(t, e),
      c = l ? uv(t, e) : fo(t, e, !0),
      f = l;
    do {
      if (c === 0) {
        Nl && !l && ca(t, e, 0, !1);
        break;
      } else {
        if (((n = t.current.alternate), f && !lv(n))) {
          (c = fo(t, e, !1)), (f = !1);
          continue;
        }
        if (c === 2) {
          if (((f = e), t.errorRecoveryDisabledLanes & f)) var g = 0;
          else
            (g = t.pendingLanes & -536870913),
              (g = g !== 0 ? g : g & 536870912 ? 536870912 : 0);
          if (g !== 0) {
            e = g;
            t: {
              var _ = t;
              c = Xi;
              var R = _.current.memoizedState.isDehydrated;
              if ((R && (jl(_, g).flags |= 256), (g = fo(_, g, !1)), g !== 2)) {
                if (no && !R) {
                  (_.errorRecoveryDisabledLanes |= f), (Xa |= f), (c = 4);
                  break t;
                }
                (f = Se),
                  (Se = c),
                  f !== null && (Se === null ? (Se = f) : Se.push.apply(Se, f));
              }
              c = g;
            }
            if (((f = !1), c !== 2)) continue;
          }
        }
        if (c === 1) {
          jl(t, 0), ca(t, e, 0, !0);
          break;
        }
        t: {
          switch (((l = t), (f = c), f)) {
            case 0:
            case 1:
              throw Error(i(345));
            case 4:
              if ((e & 4194048) !== e) break;
            case 6:
              ca(l, e, We, !ia);
              break t;
            case 2:
              Se = null;
              break;
            case 3:
            case 5:
              break;
            default:
              throw Error(i(329));
          }
          if ((e & 62914560) === e && ((c = io + 300 - rn()), 10 < c)) {
            if ((ca(l, e, We, !ia), zu(l, 0, !0) !== 0)) break t;
            l.timeoutHandle = Op(
              Pm.bind(null, l, n, Se, xr, lo, e, We, Xa, Ml, ia, f, 2, -0, 0),
              c
            );
            break t;
          }
          Pm(l, n, Se, xr, lo, e, We, Xa, Ml, ia, f, 0, -0, 0);
        }
      }
      break;
    } while (!0);
    hn(t);
  }
  function Pm(t, e, n, l, c, f, g, _, R, j, V, Z, B, L) {
    if (
      ((t.timeoutHandle = -1),
      (Z = e.subtreeFlags),
      (Z & 8192 || (Z & 16785408) === 16785408) &&
        ((Fi = { stylesheets: null, count: 0, unsuspend: qv }),
        Qm(e),
        (Z = Xv()),
        Z !== null))
    ) {
      (t.cancelPendingCommit = Z(
        lp.bind(null, t, e, f, n, l, c, g, _, R, V, 1, B, L)
      )),
        ca(t, f, g, !j);
      return;
    }
    lp(t, e, f, n, l, c, g, _, R);
  }
  function lv(t) {
    for (var e = t; ; ) {
      var n = e.tag;
      if (
        (n === 0 || n === 11 || n === 15) &&
        e.flags & 16384 &&
        ((n = e.updateQueue), n !== null && ((n = n.stores), n !== null))
      )
        for (var l = 0; l < n.length; l++) {
          var c = n[l],
            f = c.getSnapshot;
          c = c.value;
          try {
            if (!Ne(f(), c)) return !1;
          } catch {
            return !1;
          }
        }
      if (((n = e.child), e.subtreeFlags & 16384 && n !== null))
        (n.return = e), (e = n);
      else {
        if (e === t) break;
        for (; e.sibling === null; ) {
          if (e.return === null || e.return === t) return !0;
          e = e.return;
        }
        (e.sibling.return = e.return), (e = e.sibling);
      }
    }
    return !0;
  }
  function ca(t, e, n, l) {
    (e &= ~ao),
      (e &= ~Xa),
      (t.suspendedLanes |= e),
      (t.pingedLanes &= ~e),
      l && (t.warmLanes |= e),
      (l = t.expirationTimes);
    for (var c = e; 0 < c; ) {
      var f = 31 - Ce(c),
        g = 1 << f;
      (l[f] = -1), (c &= ~g);
    }
    n !== 0 && sh(t, n, e);
  }
  function Tr() {
    return (Ot & 6) === 0 ? (Vi(0), !1) : !0;
  }
  function co() {
    if (pt !== null) {
      if (Rt === 0) var t = pt.return;
      else (t = pt), (An = ja = null), Rc(t), (Al = null), (zi = 0), (t = pt);
      for (; t !== null; ) Cm(t.alternate, t), (t = t.return);
      pt = null;
    }
  }
  function jl(t, e) {
    var n = t.timeoutHandle;
    n !== -1 && ((t.timeoutHandle = -1), xv(n)),
      (n = t.cancelPendingCommit),
      n !== null && ((t.cancelPendingCommit = null), n()),
      co(),
      (Mt = t),
      (pt = n = En(t.current, null)),
      (St = e),
      (Rt = 0),
      (je = null),
      (ia = !1),
      (Nl = ii(t, e)),
      (no = !1),
      (Ml = We = ao = Xa = ua = Gt = 0),
      (Se = Xi = null),
      (lo = !1),
      (e & 8) !== 0 && (e |= e & 32);
    var l = t.entangledLanes;
    if (l !== 0)
      for (t = t.entanglements, l &= e; 0 < l; ) {
        var c = 31 - Ce(l),
          f = 1 << c;
        (e |= t[c]), (l &= ~f);
      }
    return (jn = e), ku(), n;
  }
  function Wm(t, e) {
    (ht = null),
      (q.H = or),
      e === Ei || e === tr
        ? ((e = pd()), (Rt = 3))
        : e === hd
        ? ((e = pd()), (Rt = 4))
        : (Rt =
            e === ym
              ? 8
              : e !== null &&
                typeof e == "object" &&
                typeof e.then == "function"
              ? 6
              : 1),
      (je = e),
      pt === null && ((Gt = 1), pr(t, Ke(e, t.current)));
  }
  function Im() {
    var t = q.H;
    return (q.H = or), t === null ? or : t;
  }
  function tp() {
    var t = q.A;
    return (q.A = nv), t;
  }
  function oo() {
    (Gt = 4),
      ia || ((St & 4194048) !== St && Pe.current !== null) || (Nl = !0),
      ((ua & 134217727) === 0 && (Xa & 134217727) === 0) ||
        Mt === null ||
        ca(Mt, St, We, !1);
  }
  function fo(t, e, n) {
    var l = Ot;
    Ot |= 2;
    var c = Im(),
      f = tp();
    (Mt !== t || St !== e) && ((xr = null), jl(t, e)), (e = !1);
    var g = Gt;
    t: do
      try {
        if (Rt !== 0 && pt !== null) {
          var _ = pt,
            R = je;
          switch (Rt) {
            case 8:
              co(), (g = 6);
              break t;
            case 3:
            case 2:
            case 9:
            case 6:
              Pe.current === null && (e = !0);
              var j = Rt;
              if (((Rt = 0), (je = null), Bl(t, _, R, j), n && Nl)) {
                g = 0;
                break t;
              }
              break;
            default:
              (j = Rt), (Rt = 0), (je = null), Bl(t, _, R, j);
          }
        }
        iv(), (g = Gt);
        break;
      } catch (V) {
        Wm(t, V);
      }
    while (!0);
    return (
      e && t.shellSuspendCounter++,
      (An = ja = null),
      (Ot = l),
      (q.H = c),
      (q.A = f),
      pt === null && ((Mt = null), (St = 0), ku()),
      g
    );
  }
  function iv() {
    for (; pt !== null; ) ep(pt);
  }
  function uv(t, e) {
    var n = Ot;
    Ot |= 2;
    var l = Im(),
      c = tp();
    Mt !== t || St !== e
      ? ((xr = null), (Sr = rn() + 500), jl(t, e))
      : (Nl = ii(t, e));
    t: do
      try {
        if (Rt !== 0 && pt !== null) {
          e = pt;
          var f = je;
          e: switch (Rt) {
            case 1:
              (Rt = 0), (je = null), Bl(t, e, f, 1);
              break;
            case 2:
            case 9:
              if (dd(f)) {
                (Rt = 0), (je = null), np(e);
                break;
              }
              (e = function () {
                (Rt !== 2 && Rt !== 9) || Mt !== t || (Rt = 7), hn(t);
              }),
                f.then(e, e);
              break t;
            case 3:
              Rt = 7;
              break t;
            case 4:
              Rt = 5;
              break t;
            case 7:
              dd(f)
                ? ((Rt = 0), (je = null), np(e))
                : ((Rt = 0), (je = null), Bl(t, e, f, 7));
              break;
            case 5:
              var g = null;
              switch (pt.tag) {
                case 26:
                  g = pt.memoizedState;
                case 5:
                case 27:
                  var _ = pt;
                  if (!g || Lp(g)) {
                    (Rt = 0), (je = null);
                    var R = _.sibling;
                    if (R !== null) pt = R;
                    else {
                      var j = _.return;
                      j !== null ? ((pt = j), Er(j)) : (pt = null);
                    }
                    break e;
                  }
              }
              (Rt = 0), (je = null), Bl(t, e, f, 5);
              break;
            case 6:
              (Rt = 0), (je = null), Bl(t, e, f, 6);
              break;
            case 8:
              co(), (Gt = 6);
              break t;
            default:
              throw Error(i(462));
          }
        }
        rv();
        break;
      } catch (V) {
        Wm(t, V);
      }
    while (!0);
    return (
      (An = ja = null),
      (q.H = l),
      (q.A = c),
      (Ot = n),
      pt !== null ? 0 : ((Mt = null), (St = 0), ku(), Gt)
    );
  }
  function rv() {
    for (; pt !== null && !Dg(); ) ep(pt);
  }
  function ep(t) {
    var e = wm(t.alternate, t, jn);
    (t.memoizedProps = t.pendingProps), e === null ? Er(t) : (pt = e);
  }
  function np(t) {
    var e = t,
      n = e.alternate;
    switch (e.tag) {
      case 15:
      case 0:
        e = xm(n, e, e.pendingProps, e.type, void 0, St);
        break;
      case 11:
        e = xm(n, e, e.pendingProps, e.type.render, e.ref, St);
        break;
      case 5:
        Rc(e);
      default:
        Cm(n, e), (e = pt = ad(e, jn)), (e = wm(n, e, jn));
    }
    (t.memoizedProps = t.pendingProps), e === null ? Er(t) : (pt = e);
  }
  function Bl(t, e, n, l) {
    (An = ja = null), Rc(e), (Al = null), (zi = 0);
    var c = e.return;
    try {
      if ($_(t, c, e, n, St)) {
        (Gt = 1), pr(t, Ke(n, t.current)), (pt = null);
        return;
      }
    } catch (f) {
      if (c !== null) throw ((pt = c), f);
      (Gt = 1), pr(t, Ke(n, t.current)), (pt = null);
      return;
    }
    e.flags & 32768
      ? (Et || l === 1
          ? (t = !0)
          : Nl || (St & 536870912) !== 0
          ? (t = !1)
          : ((ia = t = !0),
            (l === 2 || l === 9 || l === 3 || l === 6) &&
              ((l = Pe.current),
              l !== null && l.tag === 13 && (l.flags |= 16384))),
        ap(e, t))
      : Er(e);
  }
  function Er(t) {
    var e = t;
    do {
      if ((e.flags & 32768) !== 0) {
        ap(e, ia);
        return;
      }
      t = e.return;
      var n = W_(e.alternate, e, jn);
      if (n !== null) {
        pt = n;
        return;
      }
      if (((e = e.sibling), e !== null)) {
        pt = e;
        return;
      }
      pt = e = t;
    } while (e !== null);
    Gt === 0 && (Gt = 5);
  }
  function ap(t, e) {
    do {
      var n = I_(t.alternate, t);
      if (n !== null) {
        (n.flags &= 32767), (pt = n);
        return;
      }
      if (
        ((n = t.return),
        n !== null &&
          ((n.flags |= 32768), (n.subtreeFlags = 0), (n.deletions = null)),
        !e && ((t = t.sibling), t !== null))
      ) {
        pt = t;
        return;
      }
      pt = t = n;
    } while (t !== null);
    (Gt = 6), (pt = null);
  }
  function lp(t, e, n, l, c, f, g, _, R) {
    t.cancelPendingCommit = null;
    do Or();
    while (ie !== 0);
    if ((Ot & 6) !== 0) throw Error(i(327));
    if (e !== null) {
      if (e === t.current) throw Error(i(177));
      if (
        ((f = e.lanes | e.childLanes),
        (f |= ec),
        qg(t, n, f, g, _, R),
        t === Mt && ((pt = Mt = null), (St = 0)),
        (zl = e),
        (sa = t),
        (Ul = n),
        (uo = f),
        (ro = c),
        (Jm = l),
        (e.subtreeFlags & 10256) !== 0 || (e.flags & 10256) !== 0
          ? ((t.callbackNode = null),
            (t.callbackPriority = 0),
            fv(Cu, function () {
              return cp(), null;
            }))
          : ((t.callbackNode = null), (t.callbackPriority = 0)),
        (l = (e.flags & 13878) !== 0),
        (e.subtreeFlags & 13878) !== 0 || l)
      ) {
        (l = q.T), (q.T = null), (c = $.p), ($.p = 2), (g = Ot), (Ot |= 4);
        try {
          tv(t, e, n);
        } finally {
          (Ot = g), ($.p = c), (q.T = l);
        }
      }
      (ie = 1), ip(), up(), rp();
    }
  }
  function ip() {
    if (ie === 1) {
      ie = 0;
      var t = sa,
        e = zl,
        n = (e.flags & 13878) !== 0;
      if ((e.subtreeFlags & 13878) !== 0 || n) {
        (n = q.T), (q.T = null);
        var l = $.p;
        $.p = 2;
        var c = Ot;
        Ot |= 4;
        try {
          Xm(e, t);
          var f = Eo,
            g = Kh(t.containerInfo),
            _ = f.focusedElem,
            R = f.selectionRange;
          if (
            g !== _ &&
            _ &&
            _.ownerDocument &&
            Zh(_.ownerDocument.documentElement, _)
          ) {
            if (R !== null && $s(_)) {
              var j = R.start,
                V = R.end;
              if ((V === void 0 && (V = j), "selectionStart" in _))
                (_.selectionStart = j),
                  (_.selectionEnd = Math.min(V, _.value.length));
              else {
                var Z = _.ownerDocument || document,
                  B = (Z && Z.defaultView) || window;
                if (B.getSelection) {
                  var L = B.getSelection(),
                    it = _.textContent.length,
                    at = Math.min(R.start, it),
                    Dt = R.end === void 0 ? at : Math.min(R.end, it);
                  !L.extend && at > Dt && ((g = Dt), (Dt = at), (at = g));
                  var C = kh(_, at),
                    D = kh(_, Dt);
                  if (
                    C &&
                    D &&
                    (L.rangeCount !== 1 ||
                      L.anchorNode !== C.node ||
                      L.anchorOffset !== C.offset ||
                      L.focusNode !== D.node ||
                      L.focusOffset !== D.offset)
                  ) {
                    var z = Z.createRange();
                    z.setStart(C.node, C.offset),
                      L.removeAllRanges(),
                      at > Dt
                        ? (L.addRange(z), L.extend(D.node, D.offset))
                        : (z.setEnd(D.node, D.offset), L.addRange(z));
                  }
                }
              }
            }
            for (Z = [], L = _; (L = L.parentNode); )
              L.nodeType === 1 &&
                Z.push({ element: L, left: L.scrollLeft, top: L.scrollTop });
            for (
              typeof _.focus == "function" && _.focus(), _ = 0;
              _ < Z.length;
              _++
            ) {
              var Q = Z[_];
              (Q.element.scrollLeft = Q.left), (Q.element.scrollTop = Q.top);
            }
          }
          (Lr = !!To), (Eo = To = null);
        } finally {
          (Ot = c), ($.p = l), (q.T = n);
        }
      }
      (t.current = e), (ie = 2);
    }
  }
  function up() {
    if (ie === 2) {
      ie = 0;
      var t = sa,
        e = zl,
        n = (e.flags & 8772) !== 0;
      if ((e.subtreeFlags & 8772) !== 0 || n) {
        (n = q.T), (q.T = null);
        var l = $.p;
        $.p = 2;
        var c = Ot;
        Ot |= 4;
        try {
          Lm(t, e.alternate, e);
        } finally {
          (Ot = c), ($.p = l), (q.T = n);
        }
      }
      ie = 3;
    }
  }
  function rp() {
    if (ie === 4 || ie === 3) {
      (ie = 0), Cg();
      var t = sa,
        e = zl,
        n = Ul,
        l = Jm;
      (e.subtreeFlags & 10256) !== 0 || (e.flags & 10256) !== 0
        ? (ie = 5)
        : ((ie = 0), (zl = sa = null), sp(t, t.pendingLanes));
      var c = t.pendingLanes;
      if (
        (c === 0 && (ra = null),
        Ds(n),
        (e = e.stateNode),
        De && typeof De.onCommitFiberRoot == "function")
      )
        try {
          De.onCommitFiberRoot(li, e, void 0, (e.current.flags & 128) === 128);
        } catch {}
      if (l !== null) {
        (e = q.T), (c = $.p), ($.p = 2), (q.T = null);
        try {
          for (var f = t.onRecoverableError, g = 0; g < l.length; g++) {
            var _ = l[g];
            f(_.value, { componentStack: _.stack });
          }
        } finally {
          (q.T = e), ($.p = c);
        }
      }
      (Ul & 3) !== 0 && Or(),
        hn(t),
        (c = t.pendingLanes),
        (n & 4194090) !== 0 && (c & 42) !== 0
          ? t === so
            ? Gi++
            : ((Gi = 0), (so = t))
          : (Gi = 0),
        Vi(0);
    }
  }
  function sp(t, e) {
    (t.pooledCacheLanes &= e) === 0 &&
      ((e = t.pooledCache), e != null && ((t.pooledCache = null), xi(e)));
  }
  function Or(t) {
    return ip(), up(), rp(), cp();
  }
  function cp() {
    if (ie !== 5) return !1;
    var t = sa,
      e = uo;
    uo = 0;
    var n = Ds(Ul),
      l = q.T,
      c = $.p;
    try {
      ($.p = 32 > n ? 32 : n), (q.T = null), (n = ro), (ro = null);
      var f = sa,
        g = Ul;
      if (((ie = 0), (zl = sa = null), (Ul = 0), (Ot & 6) !== 0))
        throw Error(i(331));
      var _ = Ot;
      if (
        ((Ot |= 4),
        Zm(f.current),
        Vm(f, f.current, g, n),
        (Ot = _),
        Vi(0, !1),
        De && typeof De.onPostCommitFiberRoot == "function")
      )
        try {
          De.onPostCommitFiberRoot(li, f);
        } catch {}
      return !0;
    } finally {
      ($.p = c), (q.T = l), sp(t, e);
    }
  }
  function op(t, e, n) {
    (e = Ke(n, e)),
      (e = Yc(t.stateNode, e, 2)),
      (t = Wn(t, e, 2)),
      t !== null && (ui(t, 2), hn(t));
  }
  function Ct(t, e, n) {
    if (t.tag === 3) op(t, t, n);
    else
      for (; e !== null; ) {
        if (e.tag === 3) {
          op(e, t, n);
          break;
        } else if (e.tag === 1) {
          var l = e.stateNode;
          if (
            typeof e.type.getDerivedStateFromError == "function" ||
            (typeof l.componentDidCatch == "function" &&
              (ra === null || !ra.has(l)))
          ) {
            (t = Ke(n, t)),
              (n = mm(2)),
              (l = Wn(e, n, 2)),
              l !== null && (pm(n, l, e, t), ui(l, 2), hn(l));
            break;
          }
        }
        e = e.return;
      }
  }
  function ho(t, e, n) {
    var l = t.pingCache;
    if (l === null) {
      l = t.pingCache = new av();
      var c = new Set();
      l.set(e, c);
    } else (c = l.get(e)), c === void 0 && ((c = new Set()), l.set(e, c));
    c.has(n) ||
      ((no = !0), c.add(n), (t = sv.bind(null, t, e, n)), e.then(t, t));
  }
  function sv(t, e, n) {
    var l = t.pingCache;
    l !== null && l.delete(e),
      (t.pingedLanes |= t.suspendedLanes & n),
      (t.warmLanes &= ~n),
      Mt === t &&
        (St & n) === n &&
        (Gt === 4 || (Gt === 3 && (St & 62914560) === St && 300 > rn() - io)
          ? (Ot & 2) === 0 && jl(t, 0)
          : (ao |= n),
        Ml === St && (Ml = 0)),
      hn(t);
  }
  function fp(t, e) {
    e === 0 && (e = rh()), (t = gl(t, e)), t !== null && (ui(t, e), hn(t));
  }
  function cv(t) {
    var e = t.memoizedState,
      n = 0;
    e !== null && (n = e.retryLane), fp(t, n);
  }
  function ov(t, e) {
    var n = 0;
    switch (t.tag) {
      case 13:
        var l = t.stateNode,
          c = t.memoizedState;
        c !== null && (n = c.retryLane);
        break;
      case 19:
        l = t.stateNode;
        break;
      case 22:
        l = t.stateNode._retryCache;
        break;
      default:
        throw Error(i(314));
    }
    l !== null && l.delete(e), fp(t, n);
  }
  function fv(t, e) {
    return Os(t, e);
  }
  var Rr = null,
    Ll = null,
    mo = !1,
    Ar = !1,
    po = !1,
    Ga = 0;
  function hn(t) {
    t !== Ll &&
      t.next === null &&
      (Ll === null ? (Rr = Ll = t) : (Ll = Ll.next = t)),
      (Ar = !0),
      mo || ((mo = !0), dv());
  }
  function Vi(t, e) {
    if (!po && Ar) {
      po = !0;
      do
        for (var n = !1, l = Rr; l !== null; ) {
          if (t !== 0) {
            var c = l.pendingLanes;
            if (c === 0) var f = 0;
            else {
              var g = l.suspendedLanes,
                _ = l.pingedLanes;
              (f = (1 << (31 - Ce(42 | t) + 1)) - 1),
                (f &= c & ~(g & ~_)),
                (f = f & 201326741 ? (f & 201326741) | 1 : f ? f | 2 : 0);
            }
            f !== 0 && ((n = !0), pp(l, f));
          } else
            (f = St),
              (f = zu(
                l,
                l === Mt ? f : 0,
                l.cancelPendingCommit !== null || l.timeoutHandle !== -1
              )),
              (f & 3) === 0 || ii(l, f) || ((n = !0), pp(l, f));
          l = l.next;
        }
      while (n);
      po = !1;
    }
  }
  function hv() {
    hp();
  }
  function hp() {
    Ar = mo = !1;
    var t = 0;
    Ga !== 0 && (Sv() && (t = Ga), (Ga = 0));
    for (var e = rn(), n = null, l = Rr; l !== null; ) {
      var c = l.next,
        f = dp(l, e);
      f === 0
        ? ((l.next = null),
          n === null ? (Rr = c) : (n.next = c),
          c === null && (Ll = n))
        : ((n = l), (t !== 0 || (f & 3) !== 0) && (Ar = !0)),
        (l = c);
    }
    Vi(t);
  }
  function dp(t, e) {
    for (
      var n = t.suspendedLanes,
        l = t.pingedLanes,
        c = t.expirationTimes,
        f = t.pendingLanes & -62914561;
      0 < f;

    ) {
      var g = 31 - Ce(f),
        _ = 1 << g,
        R = c[g];
      R === -1
        ? ((_ & n) === 0 || (_ & l) !== 0) && (c[g] = Hg(_, e))
        : R <= e && (t.expiredLanes |= _),
        (f &= ~_);
    }
    if (
      ((e = Mt),
      (n = St),
      (n = zu(
        t,
        t === e ? n : 0,
        t.cancelPendingCommit !== null || t.timeoutHandle !== -1
      )),
      (l = t.callbackNode),
      n === 0 ||
        (t === e && (Rt === 2 || Rt === 9)) ||
        t.cancelPendingCommit !== null)
    )
      return (
        l !== null && l !== null && Rs(l),
        (t.callbackNode = null),
        (t.callbackPriority = 0)
      );
    if ((n & 3) === 0 || ii(t, n)) {
      if (((e = n & -n), e === t.callbackPriority)) return e;
      switch ((l !== null && Rs(l), Ds(n))) {
        case 2:
        case 8:
          n = lh;
          break;
        case 32:
          n = Cu;
          break;
        case 268435456:
          n = ih;
          break;
        default:
          n = Cu;
      }
      return (
        (l = mp.bind(null, t)),
        (n = Os(n, l)),
        (t.callbackPriority = e),
        (t.callbackNode = n),
        e
      );
    }
    return (
      l !== null && l !== null && Rs(l),
      (t.callbackPriority = 2),
      (t.callbackNode = null),
      2
    );
  }
  function mp(t, e) {
    if (ie !== 0 && ie !== 5)
      return (t.callbackNode = null), (t.callbackPriority = 0), null;
    var n = t.callbackNode;
    if (Or() && t.callbackNode !== n) return null;
    var l = St;
    return (
      (l = zu(
        t,
        t === Mt ? l : 0,
        t.cancelPendingCommit !== null || t.timeoutHandle !== -1
      )),
      l === 0
        ? null
        : ($m(t, l, e),
          dp(t, rn()),
          t.callbackNode != null && t.callbackNode === n
            ? mp.bind(null, t)
            : null)
    );
  }
  function pp(t, e) {
    if (Or()) return null;
    $m(t, e, !0);
  }
  function dv() {
    Tv(function () {
      (Ot & 6) !== 0 ? Os(ah, hv) : hp();
    });
  }
  function yo() {
    return Ga === 0 && (Ga = uh()), Ga;
  }
  function yp(t) {
    return t == null || typeof t == "symbol" || typeof t == "boolean"
      ? null
      : typeof t == "function"
      ? t
      : Hu("" + t);
  }
  function gp(t, e) {
    var n = e.ownerDocument.createElement("input");
    return (
      (n.name = e.name),
      (n.value = e.value),
      t.id && n.setAttribute("form", t.id),
      e.parentNode.insertBefore(n, e),
      (t = new FormData(t)),
      n.parentNode.removeChild(n),
      t
    );
  }
  function mv(t, e, n, l, c) {
    if (e === "submit" && n && n.stateNode === c) {
      var f = yp((c[ge] || null).action),
        g = l.submitter;
      g &&
        ((e = (e = g[ge] || null)
          ? yp(e.formAction)
          : g.getAttribute("formAction")),
        e !== null && ((f = e), (g = null)));
      var _ = new Gu("action", "action", null, l, c);
      t.push({
        event: _,
        listeners: [
          {
            instance: null,
            listener: function () {
              if (l.defaultPrevented) {
                if (Ga !== 0) {
                  var R = g ? gp(c, g) : new FormData(c);
                  jc(
                    n,
                    { pending: !0, data: R, method: c.method, action: f },
                    null,
                    R
                  );
                }
              } else
                typeof f == "function" &&
                  (_.preventDefault(),
                  (R = g ? gp(c, g) : new FormData(c)),
                  jc(
                    n,
                    { pending: !0, data: R, method: c.method, action: f },
                    f,
                    R
                  ));
            },
            currentTarget: c,
          },
        ],
      });
    }
  }
  for (var go = 0; go < tc.length; go++) {
    var _o = tc[go],
      pv = _o.toLowerCase(),
      yv = _o[0].toUpperCase() + _o.slice(1);
    nn(pv, "on" + yv);
  }
  nn($h, "onAnimationEnd"),
    nn(Ph, "onAnimationIteration"),
    nn(Wh, "onAnimationStart"),
    nn("dblclick", "onDoubleClick"),
    nn("focusin", "onFocus"),
    nn("focusout", "onBlur"),
    nn(z_, "onTransitionRun"),
    nn(U_, "onTransitionStart"),
    nn(j_, "onTransitionCancel"),
    nn(Ih, "onTransitionEnd"),
    rl("onMouseEnter", ["mouseout", "mouseover"]),
    rl("onMouseLeave", ["mouseout", "mouseover"]),
    rl("onPointerEnter", ["pointerout", "pointerover"]),
    rl("onPointerLeave", ["pointerout", "pointerover"]),
    Ra(
      "onChange",
      "change click focusin focusout input keydown keyup selectionchange".split(
        " "
      )
    ),
    Ra(
      "onSelect",
      "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
        " "
      )
    ),
    Ra("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]),
    Ra(
      "onCompositionEnd",
      "compositionend focusout keydown keypress keyup mousedown".split(" ")
    ),
    Ra(
      "onCompositionStart",
      "compositionstart focusout keydown keypress keyup mousedown".split(" ")
    ),
    Ra(
      "onCompositionUpdate",
      "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
    );
  var Qi =
      "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
        " "
      ),
    gv = new Set(
      "beforetoggle cancel close invalid load scroll scrollend toggle"
        .split(" ")
        .concat(Qi)
    );
  function _p(t, e) {
    e = (e & 4) !== 0;
    for (var n = 0; n < t.length; n++) {
      var l = t[n],
        c = l.event;
      l = l.listeners;
      t: {
        var f = void 0;
        if (e)
          for (var g = l.length - 1; 0 <= g; g--) {
            var _ = l[g],
              R = _.instance,
              j = _.currentTarget;
            if (((_ = _.listener), R !== f && c.isPropagationStopped()))
              break t;
            (f = _), (c.currentTarget = j);
            try {
              f(c);
            } catch (V) {
              mr(V);
            }
            (c.currentTarget = null), (f = R);
          }
        else
          for (g = 0; g < l.length; g++) {
            if (
              ((_ = l[g]),
              (R = _.instance),
              (j = _.currentTarget),
              (_ = _.listener),
              R !== f && c.isPropagationStopped())
            )
              break t;
            (f = _), (c.currentTarget = j);
            try {
              f(c);
            } catch (V) {
              mr(V);
            }
            (c.currentTarget = null), (f = R);
          }
      }
    }
  }
  function yt(t, e) {
    var n = e[Cs];
    n === void 0 && (n = e[Cs] = new Set());
    var l = t + "__bubble";
    n.has(l) || (vp(e, t, 2, !1), n.add(l));
  }
  function vo(t, e, n) {
    var l = 0;
    e && (l |= 4), vp(n, t, l, e);
  }
  var wr = "_reactListening" + Math.random().toString(36).slice(2);
  function bo(t) {
    if (!t[wr]) {
      (t[wr] = !0),
        hh.forEach(function (n) {
          n !== "selectionchange" && (gv.has(n) || vo(n, !1, t), vo(n, !0, t));
        });
      var e = t.nodeType === 9 ? t : t.ownerDocument;
      e === null || e[wr] || ((e[wr] = !0), vo("selectionchange", !1, e));
    }
  }
  function vp(t, e, n, l) {
    switch (Vp(e)) {
      case 2:
        var c = Qv;
        break;
      case 8:
        c = kv;
        break;
      default:
        c = Uo;
    }
    (n = c.bind(null, e, n, t)),
      (c = void 0),
      !Xs ||
        (e !== "touchstart" && e !== "touchmove" && e !== "wheel") ||
        (c = !0),
      l
        ? c !== void 0
          ? t.addEventListener(e, n, { capture: !0, passive: c })
          : t.addEventListener(e, n, !0)
        : c !== void 0
        ? t.addEventListener(e, n, { passive: c })
        : t.addEventListener(e, n, !1);
  }
  function So(t, e, n, l, c) {
    var f = l;
    if ((e & 1) === 0 && (e & 2) === 0 && l !== null)
      t: for (;;) {
        if (l === null) return;
        var g = l.tag;
        if (g === 3 || g === 4) {
          var _ = l.stateNode.containerInfo;
          if (_ === c) break;
          if (g === 4)
            for (g = l.return; g !== null; ) {
              var R = g.tag;
              if ((R === 3 || R === 4) && g.stateNode.containerInfo === c)
                return;
              g = g.return;
            }
          for (; _ !== null; ) {
            if (((g = ll(_)), g === null)) return;
            if (((R = g.tag), R === 5 || R === 6 || R === 26 || R === 27)) {
              l = f = g;
              continue t;
            }
            _ = _.parentNode;
          }
        }
        l = l.return;
      }
    Rh(function () {
      var j = f,
        V = qs(n),
        Z = [];
      t: {
        var B = td.get(t);
        if (B !== void 0) {
          var L = Gu,
            it = t;
          switch (t) {
            case "keypress":
              if (Yu(n) === 0) break t;
            case "keydown":
            case "keyup":
              L = f_;
              break;
            case "focusin":
              (it = "focus"), (L = ks);
              break;
            case "focusout":
              (it = "blur"), (L = ks);
              break;
            case "beforeblur":
            case "afterblur":
              L = ks;
              break;
            case "click":
              if (n.button === 2) break t;
            case "auxclick":
            case "dblclick":
            case "mousedown":
            case "mousemove":
            case "mouseup":
            case "mouseout":
            case "mouseover":
            case "contextmenu":
              L = Dh;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              L = Ig;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              L = m_;
              break;
            case $h:
            case Ph:
            case Wh:
              L = n_;
              break;
            case Ih:
              L = y_;
              break;
            case "scroll":
            case "scrollend":
              L = Pg;
              break;
            case "wheel":
              L = __;
              break;
            case "copy":
            case "cut":
            case "paste":
              L = l_;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              L = Nh;
              break;
            case "toggle":
            case "beforetoggle":
              L = b_;
          }
          var at = (e & 4) !== 0,
            Dt = !at && (t === "scroll" || t === "scrollend"),
            C = at ? (B !== null ? B + "Capture" : null) : B;
          at = [];
          for (var D = j, z; D !== null; ) {
            var Q = D;
            if (
              ((z = Q.stateNode),
              (Q = Q.tag),
              (Q !== 5 && Q !== 26 && Q !== 27) ||
                z === null ||
                C === null ||
                ((Q = ci(D, C)), Q != null && at.push(ki(D, Q, z))),
              Dt)
            )
              break;
            D = D.return;
          }
          0 < at.length &&
            ((B = new L(B, it, null, n, V)),
            Z.push({ event: B, listeners: at }));
        }
      }
      if ((e & 7) === 0) {
        t: {
          if (
            ((B = t === "mouseover" || t === "pointerover"),
            (L = t === "mouseout" || t === "pointerout"),
            B &&
              n !== Hs &&
              (it = n.relatedTarget || n.fromElement) &&
              (ll(it) || it[al]))
          )
            break t;
          if (
            (L || B) &&
            ((B =
              V.window === V
                ? V
                : (B = V.ownerDocument)
                ? B.defaultView || B.parentWindow
                : window),
            L
              ? ((it = n.relatedTarget || n.toElement),
                (L = j),
                (it = it ? ll(it) : null),
                it !== null &&
                  ((Dt = o(it)),
                  (at = it.tag),
                  it !== Dt || (at !== 5 && at !== 27 && at !== 6)) &&
                  (it = null))
              : ((L = null), (it = j)),
            L !== it)
          ) {
            if (
              ((at = Dh),
              (Q = "onMouseLeave"),
              (C = "onMouseEnter"),
              (D = "mouse"),
              (t === "pointerout" || t === "pointerover") &&
                ((at = Nh),
                (Q = "onPointerLeave"),
                (C = "onPointerEnter"),
                (D = "pointer")),
              (Dt = L == null ? B : si(L)),
              (z = it == null ? B : si(it)),
              (B = new at(Q, D + "leave", L, n, V)),
              (B.target = Dt),
              (B.relatedTarget = z),
              (Q = null),
              ll(V) === j &&
                ((at = new at(C, D + "enter", it, n, V)),
                (at.target = z),
                (at.relatedTarget = Dt),
                (Q = at)),
              (Dt = Q),
              L && it)
            )
              e: {
                for (at = L, C = it, D = 0, z = at; z; z = Hl(z)) D++;
                for (z = 0, Q = C; Q; Q = Hl(Q)) z++;
                for (; 0 < D - z; ) (at = Hl(at)), D--;
                for (; 0 < z - D; ) (C = Hl(C)), z--;
                for (; D--; ) {
                  if (at === C || (C !== null && at === C.alternate)) break e;
                  (at = Hl(at)), (C = Hl(C));
                }
                at = null;
              }
            else at = null;
            L !== null && bp(Z, B, L, at, !1),
              it !== null && Dt !== null && bp(Z, Dt, it, at, !0);
          }
        }
        t: {
          if (
            ((B = j ? si(j) : window),
            (L = B.nodeName && B.nodeName.toLowerCase()),
            L === "select" || (L === "input" && B.type === "file"))
          )
            var I = qh;
          else if (Lh(B))
            if (Yh) I = C_;
            else {
              I = w_;
              var dt = A_;
            }
          else
            (L = B.nodeName),
              !L ||
              L.toLowerCase() !== "input" ||
              (B.type !== "checkbox" && B.type !== "radio")
                ? j && Ls(j.elementType) && (I = qh)
                : (I = D_);
          if (I && (I = I(t, j))) {
            Hh(Z, I, n, V);
            break t;
          }
          dt && dt(t, B, j),
            t === "focusout" &&
              j &&
              B.type === "number" &&
              j.memoizedProps.value != null &&
              Bs(B, "number", B.value);
        }
        switch (((dt = j ? si(j) : window), t)) {
          case "focusin":
            (Lh(dt) || dt.contentEditable === "true") &&
              ((ml = dt), (Ps = j), (gi = null));
            break;
          case "focusout":
            gi = Ps = ml = null;
            break;
          case "mousedown":
            Ws = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            (Ws = !1), Jh(Z, n, V);
            break;
          case "selectionchange":
            if (M_) break;
          case "keydown":
          case "keyup":
            Jh(Z, n, V);
        }
        var nt;
        if (Ks)
          t: {
            switch (t) {
              case "compositionstart":
                var lt = "onCompositionStart";
                break t;
              case "compositionend":
                lt = "onCompositionEnd";
                break t;
              case "compositionupdate":
                lt = "onCompositionUpdate";
                break t;
            }
            lt = void 0;
          }
        else
          dl
            ? jh(t, n) && (lt = "onCompositionEnd")
            : t === "keydown" &&
              n.keyCode === 229 &&
              (lt = "onCompositionStart");
        lt &&
          (Mh &&
            n.locale !== "ko" &&
            (dl || lt !== "onCompositionStart"
              ? lt === "onCompositionEnd" && dl && (nt = Ah())
              : ((Jn = V),
                (Gs = "value" in Jn ? Jn.value : Jn.textContent),
                (dl = !0))),
          (dt = Dr(j, lt)),
          0 < dt.length &&
            ((lt = new Ch(lt, t, null, n, V)),
            Z.push({ event: lt, listeners: dt }),
            nt
              ? (lt.data = nt)
              : ((nt = Bh(n)), nt !== null && (lt.data = nt)))),
          (nt = x_ ? T_(t, n) : E_(t, n)) &&
            ((lt = Dr(j, "onBeforeInput")),
            0 < lt.length &&
              ((dt = new Ch("onBeforeInput", "beforeinput", null, n, V)),
              Z.push({ event: dt, listeners: lt }),
              (dt.data = nt))),
          mv(Z, t, j, n, V);
      }
      _p(Z, e);
    });
  }
  function ki(t, e, n) {
    return { instance: t, listener: e, currentTarget: n };
  }
  function Dr(t, e) {
    for (var n = e + "Capture", l = []; t !== null; ) {
      var c = t,
        f = c.stateNode;
      if (
        ((c = c.tag),
        (c !== 5 && c !== 26 && c !== 27) ||
          f === null ||
          ((c = ci(t, n)),
          c != null && l.unshift(ki(t, c, f)),
          (c = ci(t, e)),
          c != null && l.push(ki(t, c, f))),
        t.tag === 3)
      )
        return l;
      t = t.return;
    }
    return [];
  }
  function Hl(t) {
    if (t === null) return null;
    do t = t.return;
    while (t && t.tag !== 5 && t.tag !== 27);
    return t || null;
  }
  function bp(t, e, n, l, c) {
    for (var f = e._reactName, g = []; n !== null && n !== l; ) {
      var _ = n,
        R = _.alternate,
        j = _.stateNode;
      if (((_ = _.tag), R !== null && R === l)) break;
      (_ !== 5 && _ !== 26 && _ !== 27) ||
        j === null ||
        ((R = j),
        c
          ? ((j = ci(n, f)), j != null && g.unshift(ki(n, j, R)))
          : c || ((j = ci(n, f)), j != null && g.push(ki(n, j, R)))),
        (n = n.return);
    }
    g.length !== 0 && t.push({ event: e, listeners: g });
  }
  var _v = /\r\n?/g,
    vv = /\u0000|\uFFFD/g;
  function Sp(t) {
    return (typeof t == "string" ? t : "" + t)
      .replace(
        _v,
        `
`
      )
      .replace(vv, "");
  }
  function xp(t, e) {
    return (e = Sp(e)), Sp(t) === e;
  }
  function Cr() {}
  function wt(t, e, n, l, c, f) {
    switch (n) {
      case "children":
        typeof l == "string"
          ? e === "body" || (e === "textarea" && l === "") || ol(t, l)
          : (typeof l == "number" || typeof l == "bigint") &&
            e !== "body" &&
            ol(t, "" + l);
        break;
      case "className":
        ju(t, "class", l);
        break;
      case "tabIndex":
        ju(t, "tabindex", l);
        break;
      case "dir":
      case "role":
      case "viewBox":
      case "width":
      case "height":
        ju(t, n, l);
        break;
      case "style":
        Eh(t, l, f);
        break;
      case "data":
        if (e !== "object") {
          ju(t, "data", l);
          break;
        }
      case "src":
      case "href":
        if (l === "" && (e !== "a" || n !== "href")) {
          t.removeAttribute(n);
          break;
        }
        if (
          l == null ||
          typeof l == "function" ||
          typeof l == "symbol" ||
          typeof l == "boolean"
        ) {
          t.removeAttribute(n);
          break;
        }
        (l = Hu("" + l)), t.setAttribute(n, l);
        break;
      case "action":
      case "formAction":
        if (typeof l == "function") {
          t.setAttribute(
            n,
            "javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')"
          );
          break;
        } else
          typeof f == "function" &&
            (n === "formAction"
              ? (e !== "input" && wt(t, e, "name", c.name, c, null),
                wt(t, e, "formEncType", c.formEncType, c, null),
                wt(t, e, "formMethod", c.formMethod, c, null),
                wt(t, e, "formTarget", c.formTarget, c, null))
              : (wt(t, e, "encType", c.encType, c, null),
                wt(t, e, "method", c.method, c, null),
                wt(t, e, "target", c.target, c, null)));
        if (l == null || typeof l == "symbol" || typeof l == "boolean") {
          t.removeAttribute(n);
          break;
        }
        (l = Hu("" + l)), t.setAttribute(n, l);
        break;
      case "onClick":
        l != null && (t.onclick = Cr);
        break;
      case "onScroll":
        l != null && yt("scroll", t);
        break;
      case "onScrollEnd":
        l != null && yt("scrollend", t);
        break;
      case "dangerouslySetInnerHTML":
        if (l != null) {
          if (typeof l != "object" || !("__html" in l)) throw Error(i(61));
          if (((n = l.__html), n != null)) {
            if (c.children != null) throw Error(i(60));
            t.innerHTML = n;
          }
        }
        break;
      case "multiple":
        t.multiple = l && typeof l != "function" && typeof l != "symbol";
        break;
      case "muted":
        t.muted = l && typeof l != "function" && typeof l != "symbol";
        break;
      case "suppressContentEditableWarning":
      case "suppressHydrationWarning":
      case "defaultValue":
      case "defaultChecked":
      case "innerHTML":
      case "ref":
        break;
      case "autoFocus":
        break;
      case "xlinkHref":
        if (
          l == null ||
          typeof l == "function" ||
          typeof l == "boolean" ||
          typeof l == "symbol"
        ) {
          t.removeAttribute("xlink:href");
          break;
        }
        (n = Hu("" + l)),
          t.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", n);
        break;
      case "contentEditable":
      case "spellCheck":
      case "draggable":
      case "value":
      case "autoReverse":
      case "externalResourcesRequired":
      case "focusable":
      case "preserveAlpha":
        l != null && typeof l != "function" && typeof l != "symbol"
          ? t.setAttribute(n, "" + l)
          : t.removeAttribute(n);
        break;
      case "inert":
      case "allowFullScreen":
      case "async":
      case "autoPlay":
      case "controls":
      case "default":
      case "defer":
      case "disabled":
      case "disablePictureInPicture":
      case "disableRemotePlayback":
      case "formNoValidate":
      case "hidden":
      case "loop":
      case "noModule":
      case "noValidate":
      case "open":
      case "playsInline":
      case "readOnly":
      case "required":
      case "reversed":
      case "scoped":
      case "seamless":
      case "itemScope":
        l && typeof l != "function" && typeof l != "symbol"
          ? t.setAttribute(n, "")
          : t.removeAttribute(n);
        break;
      case "capture":
      case "download":
        l === !0
          ? t.setAttribute(n, "")
          : l !== !1 &&
            l != null &&
            typeof l != "function" &&
            typeof l != "symbol"
          ? t.setAttribute(n, l)
          : t.removeAttribute(n);
        break;
      case "cols":
      case "rows":
      case "size":
      case "span":
        l != null &&
        typeof l != "function" &&
        typeof l != "symbol" &&
        !isNaN(l) &&
        1 <= l
          ? t.setAttribute(n, l)
          : t.removeAttribute(n);
        break;
      case "rowSpan":
      case "start":
        l == null || typeof l == "function" || typeof l == "symbol" || isNaN(l)
          ? t.removeAttribute(n)
          : t.setAttribute(n, l);
        break;
      case "popover":
        yt("beforetoggle", t), yt("toggle", t), Uu(t, "popover", l);
        break;
      case "xlinkActuate":
        xn(t, "http://www.w3.org/1999/xlink", "xlink:actuate", l);
        break;
      case "xlinkArcrole":
        xn(t, "http://www.w3.org/1999/xlink", "xlink:arcrole", l);
        break;
      case "xlinkRole":
        xn(t, "http://www.w3.org/1999/xlink", "xlink:role", l);
        break;
      case "xlinkShow":
        xn(t, "http://www.w3.org/1999/xlink", "xlink:show", l);
        break;
      case "xlinkTitle":
        xn(t, "http://www.w3.org/1999/xlink", "xlink:title", l);
        break;
      case "xlinkType":
        xn(t, "http://www.w3.org/1999/xlink", "xlink:type", l);
        break;
      case "xmlBase":
        xn(t, "http://www.w3.org/XML/1998/namespace", "xml:base", l);
        break;
      case "xmlLang":
        xn(t, "http://www.w3.org/XML/1998/namespace", "xml:lang", l);
        break;
      case "xmlSpace":
        xn(t, "http://www.w3.org/XML/1998/namespace", "xml:space", l);
        break;
      case "is":
        Uu(t, "is", l);
        break;
      case "innerText":
      case "textContent":
        break;
      default:
        (!(2 < n.length) ||
          (n[0] !== "o" && n[0] !== "O") ||
          (n[1] !== "n" && n[1] !== "N")) &&
          ((n = Fg.get(n) || n), Uu(t, n, l));
    }
  }
  function xo(t, e, n, l, c, f) {
    switch (n) {
      case "style":
        Eh(t, l, f);
        break;
      case "dangerouslySetInnerHTML":
        if (l != null) {
          if (typeof l != "object" || !("__html" in l)) throw Error(i(61));
          if (((n = l.__html), n != null)) {
            if (c.children != null) throw Error(i(60));
            t.innerHTML = n;
          }
        }
        break;
      case "children":
        typeof l == "string"
          ? ol(t, l)
          : (typeof l == "number" || typeof l == "bigint") && ol(t, "" + l);
        break;
      case "onScroll":
        l != null && yt("scroll", t);
        break;
      case "onScrollEnd":
        l != null && yt("scrollend", t);
        break;
      case "onClick":
        l != null && (t.onclick = Cr);
        break;
      case "suppressContentEditableWarning":
      case "suppressHydrationWarning":
      case "innerHTML":
      case "ref":
        break;
      case "innerText":
      case "textContent":
        break;
      default:
        if (!dh.hasOwnProperty(n))
          t: {
            if (
              n[0] === "o" &&
              n[1] === "n" &&
              ((c = n.endsWith("Capture")),
              (e = n.slice(2, c ? n.length - 7 : void 0)),
              (f = t[ge] || null),
              (f = f != null ? f[n] : null),
              typeof f == "function" && t.removeEventListener(e, f, c),
              typeof l == "function")
            ) {
              typeof f != "function" &&
                f !== null &&
                (n in t
                  ? (t[n] = null)
                  : t.hasAttribute(n) && t.removeAttribute(n)),
                t.addEventListener(e, l, c);
              break t;
            }
            n in t
              ? (t[n] = l)
              : l === !0
              ? t.setAttribute(n, "")
              : Uu(t, n, l);
          }
    }
  }
  function ue(t, e, n) {
    switch (e) {
      case "div":
      case "span":
      case "svg":
      case "path":
      case "a":
      case "g":
      case "p":
      case "li":
        break;
      case "img":
        yt("error", t), yt("load", t);
        var l = !1,
          c = !1,
          f;
        for (f in n)
          if (n.hasOwnProperty(f)) {
            var g = n[f];
            if (g != null)
              switch (f) {
                case "src":
                  l = !0;
                  break;
                case "srcSet":
                  c = !0;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  throw Error(i(137, e));
                default:
                  wt(t, e, f, g, n, null);
              }
          }
        c && wt(t, e, "srcSet", n.srcSet, n, null),
          l && wt(t, e, "src", n.src, n, null);
        return;
      case "input":
        yt("invalid", t);
        var _ = (f = g = c = null),
          R = null,
          j = null;
        for (l in n)
          if (n.hasOwnProperty(l)) {
            var V = n[l];
            if (V != null)
              switch (l) {
                case "name":
                  c = V;
                  break;
                case "type":
                  g = V;
                  break;
                case "checked":
                  R = V;
                  break;
                case "defaultChecked":
                  j = V;
                  break;
                case "value":
                  f = V;
                  break;
                case "defaultValue":
                  _ = V;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  if (V != null) throw Error(i(137, e));
                  break;
                default:
                  wt(t, e, l, V, n, null);
              }
          }
        bh(t, f, _, R, j, g, c, !1), Bu(t);
        return;
      case "select":
        yt("invalid", t), (l = g = f = null);
        for (c in n)
          if (n.hasOwnProperty(c) && ((_ = n[c]), _ != null))
            switch (c) {
              case "value":
                f = _;
                break;
              case "defaultValue":
                g = _;
                break;
              case "multiple":
                l = _;
              default:
                wt(t, e, c, _, n, null);
            }
        (e = f),
          (n = g),
          (t.multiple = !!l),
          e != null ? cl(t, !!l, e, !1) : n != null && cl(t, !!l, n, !0);
        return;
      case "textarea":
        yt("invalid", t), (f = c = l = null);
        for (g in n)
          if (n.hasOwnProperty(g) && ((_ = n[g]), _ != null))
            switch (g) {
              case "value":
                l = _;
                break;
              case "defaultValue":
                c = _;
                break;
              case "children":
                f = _;
                break;
              case "dangerouslySetInnerHTML":
                if (_ != null) throw Error(i(91));
                break;
              default:
                wt(t, e, g, _, n, null);
            }
        xh(t, l, c, f), Bu(t);
        return;
      case "option":
        for (R in n)
          if (n.hasOwnProperty(R) && ((l = n[R]), l != null))
            switch (R) {
              case "selected":
                t.selected =
                  l && typeof l != "function" && typeof l != "symbol";
                break;
              default:
                wt(t, e, R, l, n, null);
            }
        return;
      case "dialog":
        yt("beforetoggle", t), yt("toggle", t), yt("cancel", t), yt("close", t);
        break;
      case "iframe":
      case "object":
        yt("load", t);
        break;
      case "video":
      case "audio":
        for (l = 0; l < Qi.length; l++) yt(Qi[l], t);
        break;
      case "image":
        yt("error", t), yt("load", t);
        break;
      case "details":
        yt("toggle", t);
        break;
      case "embed":
      case "source":
      case "link":
        yt("error", t), yt("load", t);
      case "area":
      case "base":
      case "br":
      case "col":
      case "hr":
      case "keygen":
      case "meta":
      case "param":
      case "track":
      case "wbr":
      case "menuitem":
        for (j in n)
          if (n.hasOwnProperty(j) && ((l = n[j]), l != null))
            switch (j) {
              case "children":
              case "dangerouslySetInnerHTML":
                throw Error(i(137, e));
              default:
                wt(t, e, j, l, n, null);
            }
        return;
      default:
        if (Ls(e)) {
          for (V in n)
            n.hasOwnProperty(V) &&
              ((l = n[V]), l !== void 0 && xo(t, e, V, l, n, void 0));
          return;
        }
    }
    for (_ in n)
      n.hasOwnProperty(_) && ((l = n[_]), l != null && wt(t, e, _, l, n, null));
  }
  function bv(t, e, n, l) {
    switch (e) {
      case "div":
      case "span":
      case "svg":
      case "path":
      case "a":
      case "g":
      case "p":
      case "li":
        break;
      case "input":
        var c = null,
          f = null,
          g = null,
          _ = null,
          R = null,
          j = null,
          V = null;
        for (L in n) {
          var Z = n[L];
          if (n.hasOwnProperty(L) && Z != null)
            switch (L) {
              case "checked":
                break;
              case "value":
                break;
              case "defaultValue":
                R = Z;
              default:
                l.hasOwnProperty(L) || wt(t, e, L, null, l, Z);
            }
        }
        for (var B in l) {
          var L = l[B];
          if (((Z = n[B]), l.hasOwnProperty(B) && (L != null || Z != null)))
            switch (B) {
              case "type":
                f = L;
                break;
              case "name":
                c = L;
                break;
              case "checked":
                j = L;
                break;
              case "defaultChecked":
                V = L;
                break;
              case "value":
                g = L;
                break;
              case "defaultValue":
                _ = L;
                break;
              case "children":
              case "dangerouslySetInnerHTML":
                if (L != null) throw Error(i(137, e));
                break;
              default:
                L !== Z && wt(t, e, B, L, l, Z);
            }
        }
        js(t, g, _, R, j, V, f, c);
        return;
      case "select":
        L = g = _ = B = null;
        for (f in n)
          if (((R = n[f]), n.hasOwnProperty(f) && R != null))
            switch (f) {
              case "value":
                break;
              case "multiple":
                L = R;
              default:
                l.hasOwnProperty(f) || wt(t, e, f, null, l, R);
            }
        for (c in l)
          if (
            ((f = l[c]),
            (R = n[c]),
            l.hasOwnProperty(c) && (f != null || R != null))
          )
            switch (c) {
              case "value":
                B = f;
                break;
              case "defaultValue":
                _ = f;
                break;
              case "multiple":
                g = f;
              default:
                f !== R && wt(t, e, c, f, l, R);
            }
        (e = _),
          (n = g),
          (l = L),
          B != null
            ? cl(t, !!n, B, !1)
            : !!l != !!n &&
              (e != null ? cl(t, !!n, e, !0) : cl(t, !!n, n ? [] : "", !1));
        return;
      case "textarea":
        L = B = null;
        for (_ in n)
          if (
            ((c = n[_]),
            n.hasOwnProperty(_) && c != null && !l.hasOwnProperty(_))
          )
            switch (_) {
              case "value":
                break;
              case "children":
                break;
              default:
                wt(t, e, _, null, l, c);
            }
        for (g in l)
          if (
            ((c = l[g]),
            (f = n[g]),
            l.hasOwnProperty(g) && (c != null || f != null))
          )
            switch (g) {
              case "value":
                B = c;
                break;
              case "defaultValue":
                L = c;
                break;
              case "children":
                break;
              case "dangerouslySetInnerHTML":
                if (c != null) throw Error(i(91));
                break;
              default:
                c !== f && wt(t, e, g, c, l, f);
            }
        Sh(t, B, L);
        return;
      case "option":
        for (var it in n)
          if (
            ((B = n[it]),
            n.hasOwnProperty(it) && B != null && !l.hasOwnProperty(it))
          )
            switch (it) {
              case "selected":
                t.selected = !1;
                break;
              default:
                wt(t, e, it, null, l, B);
            }
        for (R in l)
          if (
            ((B = l[R]),
            (L = n[R]),
            l.hasOwnProperty(R) && B !== L && (B != null || L != null))
          )
            switch (R) {
              case "selected":
                t.selected =
                  B && typeof B != "function" && typeof B != "symbol";
                break;
              default:
                wt(t, e, R, B, l, L);
            }
        return;
      case "img":
      case "link":
      case "area":
      case "base":
      case "br":
      case "col":
      case "embed":
      case "hr":
      case "keygen":
      case "meta":
      case "param":
      case "source":
      case "track":
      case "wbr":
      case "menuitem":
        for (var at in n)
          (B = n[at]),
            n.hasOwnProperty(at) &&
              B != null &&
              !l.hasOwnProperty(at) &&
              wt(t, e, at, null, l, B);
        for (j in l)
          if (
            ((B = l[j]),
            (L = n[j]),
            l.hasOwnProperty(j) && B !== L && (B != null || L != null))
          )
            switch (j) {
              case "children":
              case "dangerouslySetInnerHTML":
                if (B != null) throw Error(i(137, e));
                break;
              default:
                wt(t, e, j, B, l, L);
            }
        return;
      default:
        if (Ls(e)) {
          for (var Dt in n)
            (B = n[Dt]),
              n.hasOwnProperty(Dt) &&
                B !== void 0 &&
                !l.hasOwnProperty(Dt) &&
                xo(t, e, Dt, void 0, l, B);
          for (V in l)
            (B = l[V]),
              (L = n[V]),
              !l.hasOwnProperty(V) ||
                B === L ||
                (B === void 0 && L === void 0) ||
                xo(t, e, V, B, l, L);
          return;
        }
    }
    for (var C in n)
      (B = n[C]),
        n.hasOwnProperty(C) &&
          B != null &&
          !l.hasOwnProperty(C) &&
          wt(t, e, C, null, l, B);
    for (Z in l)
      (B = l[Z]),
        (L = n[Z]),
        !l.hasOwnProperty(Z) ||
          B === L ||
          (B == null && L == null) ||
          wt(t, e, Z, B, l, L);
  }
  var To = null,
    Eo = null;
  function Nr(t) {
    return t.nodeType === 9 ? t : t.ownerDocument;
  }
  function Tp(t) {
    switch (t) {
      case "http://www.w3.org/2000/svg":
        return 1;
      case "http://www.w3.org/1998/Math/MathML":
        return 2;
      default:
        return 0;
    }
  }
  function Ep(t, e) {
    if (t === 0)
      switch (e) {
        case "svg":
          return 1;
        case "math":
          return 2;
        default:
          return 0;
      }
    return t === 1 && e === "foreignObject" ? 0 : t;
  }
  function Oo(t, e) {
    return (
      t === "textarea" ||
      t === "noscript" ||
      typeof e.children == "string" ||
      typeof e.children == "number" ||
      typeof e.children == "bigint" ||
      (typeof e.dangerouslySetInnerHTML == "object" &&
        e.dangerouslySetInnerHTML !== null &&
        e.dangerouslySetInnerHTML.__html != null)
    );
  }
  var Ro = null;
  function Sv() {
    var t = window.event;
    return t && t.type === "popstate"
      ? t === Ro
        ? !1
        : ((Ro = t), !0)
      : ((Ro = null), !1);
  }
  var Op = typeof setTimeout == "function" ? setTimeout : void 0,
    xv = typeof clearTimeout == "function" ? clearTimeout : void 0,
    Rp = typeof Promise == "function" ? Promise : void 0,
    Tv =
      typeof queueMicrotask == "function"
        ? queueMicrotask
        : typeof Rp < "u"
        ? function (t) {
            return Rp.resolve(null).then(t).catch(Ev);
          }
        : Op;
  function Ev(t) {
    setTimeout(function () {
      throw t;
    });
  }
  function oa(t) {
    return t === "head";
  }
  function Ap(t, e) {
    var n = e,
      l = 0,
      c = 0;
    do {
      var f = n.nextSibling;
      if ((t.removeChild(n), f && f.nodeType === 8))
        if (((n = f.data), n === "/$")) {
          if (0 < l && 8 > l) {
            n = l;
            var g = t.ownerDocument;
            if ((n & 1 && Zi(g.documentElement), n & 2 && Zi(g.body), n & 4))
              for (n = g.head, Zi(n), g = n.firstChild; g; ) {
                var _ = g.nextSibling,
                  R = g.nodeName;
                g[ri] ||
                  R === "SCRIPT" ||
                  R === "STYLE" ||
                  (R === "LINK" && g.rel.toLowerCase() === "stylesheet") ||
                  n.removeChild(g),
                  (g = _);
              }
          }
          if (c === 0) {
            t.removeChild(f), tu(e);
            return;
          }
          c--;
        } else
          n === "$" || n === "$?" || n === "$!"
            ? c++
            : (l = n.charCodeAt(0) - 48);
      else l = 0;
      n = f;
    } while (n);
    tu(e);
  }
  function Ao(t) {
    var e = t.firstChild;
    for (e && e.nodeType === 10 && (e = e.nextSibling); e; ) {
      var n = e;
      switch (((e = e.nextSibling), n.nodeName)) {
        case "HTML":
        case "HEAD":
        case "BODY":
          Ao(n), Ns(n);
          continue;
        case "SCRIPT":
        case "STYLE":
          continue;
        case "LINK":
          if (n.rel.toLowerCase() === "stylesheet") continue;
      }
      t.removeChild(n);
    }
  }
  function Ov(t, e, n, l) {
    for (; t.nodeType === 1; ) {
      var c = n;
      if (t.nodeName.toLowerCase() !== e.toLowerCase()) {
        if (!l && (t.nodeName !== "INPUT" || t.type !== "hidden")) break;
      } else if (l) {
        if (!t[ri])
          switch (e) {
            case "meta":
              if (!t.hasAttribute("itemprop")) break;
              return t;
            case "link":
              if (
                ((f = t.getAttribute("rel")),
                f === "stylesheet" && t.hasAttribute("data-precedence"))
              )
                break;
              if (
                f !== c.rel ||
                t.getAttribute("href") !==
                  (c.href == null || c.href === "" ? null : c.href) ||
                t.getAttribute("crossorigin") !==
                  (c.crossOrigin == null ? null : c.crossOrigin) ||
                t.getAttribute("title") !== (c.title == null ? null : c.title)
              )
                break;
              return t;
            case "style":
              if (t.hasAttribute("data-precedence")) break;
              return t;
            case "script":
              if (
                ((f = t.getAttribute("src")),
                (f !== (c.src == null ? null : c.src) ||
                  t.getAttribute("type") !== (c.type == null ? null : c.type) ||
                  t.getAttribute("crossorigin") !==
                    (c.crossOrigin == null ? null : c.crossOrigin)) &&
                  f &&
                  t.hasAttribute("async") &&
                  !t.hasAttribute("itemprop"))
              )
                break;
              return t;
            default:
              return t;
          }
      } else if (e === "input" && t.type === "hidden") {
        var f = c.name == null ? null : "" + c.name;
        if (c.type === "hidden" && t.getAttribute("name") === f) return t;
      } else return t;
      if (((t = ln(t.nextSibling)), t === null)) break;
    }
    return null;
  }
  function Rv(t, e, n) {
    if (e === "") return null;
    for (; t.nodeType !== 3; )
      if (
        ((t.nodeType !== 1 || t.nodeName !== "INPUT" || t.type !== "hidden") &&
          !n) ||
        ((t = ln(t.nextSibling)), t === null)
      )
        return null;
    return t;
  }
  function wo(t) {
    return (
      t.data === "$!" ||
      (t.data === "$?" && t.ownerDocument.readyState === "complete")
    );
  }
  function Av(t, e) {
    var n = t.ownerDocument;
    if (t.data !== "$?" || n.readyState === "complete") e();
    else {
      var l = function () {
        e(), n.removeEventListener("DOMContentLoaded", l);
      };
      n.addEventListener("DOMContentLoaded", l), (t._reactRetry = l);
    }
  }
  function ln(t) {
    for (; t != null; t = t.nextSibling) {
      var e = t.nodeType;
      if (e === 1 || e === 3) break;
      if (e === 8) {
        if (
          ((e = t.data),
          e === "$" || e === "$!" || e === "$?" || e === "F!" || e === "F")
        )
          break;
        if (e === "/$") return null;
      }
    }
    return t;
  }
  var Do = null;
  function wp(t) {
    t = t.previousSibling;
    for (var e = 0; t; ) {
      if (t.nodeType === 8) {
        var n = t.data;
        if (n === "$" || n === "$!" || n === "$?") {
          if (e === 0) return t;
          e--;
        } else n === "/$" && e++;
      }
      t = t.previousSibling;
    }
    return null;
  }
  function Dp(t, e, n) {
    switch (((e = Nr(n)), t)) {
      case "html":
        if (((t = e.documentElement), !t)) throw Error(i(452));
        return t;
      case "head":
        if (((t = e.head), !t)) throw Error(i(453));
        return t;
      case "body":
        if (((t = e.body), !t)) throw Error(i(454));
        return t;
      default:
        throw Error(i(451));
    }
  }
  function Zi(t) {
    for (var e = t.attributes; e.length; ) t.removeAttributeNode(e[0]);
    Ns(t);
  }
  var Ie = new Map(),
    Cp = new Set();
  function Mr(t) {
    return typeof t.getRootNode == "function"
      ? t.getRootNode()
      : t.nodeType === 9
      ? t
      : t.ownerDocument;
  }
  var Bn = $.d;
  $.d = { f: wv, r: Dv, D: Cv, C: Nv, L: Mv, m: zv, X: jv, S: Uv, M: Bv };
  function wv() {
    var t = Bn.f(),
      e = Tr();
    return t || e;
  }
  function Dv(t) {
    var e = il(t);
    e !== null && e.tag === 5 && e.type === "form" ? $d(e) : Bn.r(t);
  }
  var ql = typeof document > "u" ? null : document;
  function Np(t, e, n) {
    var l = ql;
    if (l && typeof e == "string" && e) {
      var c = Ze(e);
      (c = 'link[rel="' + t + '"][href="' + c + '"]'),
        typeof n == "string" && (c += '[crossorigin="' + n + '"]'),
        Cp.has(c) ||
          (Cp.add(c),
          (t = { rel: t, crossOrigin: n, href: e }),
          l.querySelector(c) === null &&
            ((e = l.createElement("link")),
            ue(e, "link", t),
            It(e),
            l.head.appendChild(e)));
    }
  }
  function Cv(t) {
    Bn.D(t), Np("dns-prefetch", t, null);
  }
  function Nv(t, e) {
    Bn.C(t, e), Np("preconnect", t, e);
  }
  function Mv(t, e, n) {
    Bn.L(t, e, n);
    var l = ql;
    if (l && t && e) {
      var c = 'link[rel="preload"][as="' + Ze(e) + '"]';
      e === "image" && n && n.imageSrcSet
        ? ((c += '[imagesrcset="' + Ze(n.imageSrcSet) + '"]'),
          typeof n.imageSizes == "string" &&
            (c += '[imagesizes="' + Ze(n.imageSizes) + '"]'))
        : (c += '[href="' + Ze(t) + '"]');
      var f = c;
      switch (e) {
        case "style":
          f = Yl(t);
          break;
        case "script":
          f = Xl(t);
      }
      Ie.has(f) ||
        ((t = y(
          {
            rel: "preload",
            href: e === "image" && n && n.imageSrcSet ? void 0 : t,
            as: e,
          },
          n
        )),
        Ie.set(f, t),
        l.querySelector(c) !== null ||
          (e === "style" && l.querySelector(Ki(f))) ||
          (e === "script" && l.querySelector(Ji(f))) ||
          ((e = l.createElement("link")),
          ue(e, "link", t),
          It(e),
          l.head.appendChild(e)));
    }
  }
  function zv(t, e) {
    Bn.m(t, e);
    var n = ql;
    if (n && t) {
      var l = e && typeof e.as == "string" ? e.as : "script",
        c =
          'link[rel="modulepreload"][as="' + Ze(l) + '"][href="' + Ze(t) + '"]',
        f = c;
      switch (l) {
        case "audioworklet":
        case "paintworklet":
        case "serviceworker":
        case "sharedworker":
        case "worker":
        case "script":
          f = Xl(t);
      }
      if (
        !Ie.has(f) &&
        ((t = y({ rel: "modulepreload", href: t }, e)),
        Ie.set(f, t),
        n.querySelector(c) === null)
      ) {
        switch (l) {
          case "audioworklet":
          case "paintworklet":
          case "serviceworker":
          case "sharedworker":
          case "worker":
          case "script":
            if (n.querySelector(Ji(f))) return;
        }
        (l = n.createElement("link")),
          ue(l, "link", t),
          It(l),
          n.head.appendChild(l);
      }
    }
  }
  function Uv(t, e, n) {
    Bn.S(t, e, n);
    var l = ql;
    if (l && t) {
      var c = ul(l).hoistableStyles,
        f = Yl(t);
      e = e || "default";
      var g = c.get(f);
      if (!g) {
        var _ = { loading: 0, preload: null };
        if ((g = l.querySelector(Ki(f)))) _.loading = 5;
        else {
          (t = y({ rel: "stylesheet", href: t, "data-precedence": e }, n)),
            (n = Ie.get(f)) && Co(t, n);
          var R = (g = l.createElement("link"));
          It(R),
            ue(R, "link", t),
            (R._p = new Promise(function (j, V) {
              (R.onload = j), (R.onerror = V);
            })),
            R.addEventListener("load", function () {
              _.loading |= 1;
            }),
            R.addEventListener("error", function () {
              _.loading |= 2;
            }),
            (_.loading |= 4),
            zr(g, e, l);
        }
        (g = { type: "stylesheet", instance: g, count: 1, state: _ }),
          c.set(f, g);
      }
    }
  }
  function jv(t, e) {
    Bn.X(t, e);
    var n = ql;
    if (n && t) {
      var l = ul(n).hoistableScripts,
        c = Xl(t),
        f = l.get(c);
      f ||
        ((f = n.querySelector(Ji(c))),
        f ||
          ((t = y({ src: t, async: !0 }, e)),
          (e = Ie.get(c)) && No(t, e),
          (f = n.createElement("script")),
          It(f),
          ue(f, "link", t),
          n.head.appendChild(f)),
        (f = { type: "script", instance: f, count: 1, state: null }),
        l.set(c, f));
    }
  }
  function Bv(t, e) {
    Bn.M(t, e);
    var n = ql;
    if (n && t) {
      var l = ul(n).hoistableScripts,
        c = Xl(t),
        f = l.get(c);
      f ||
        ((f = n.querySelector(Ji(c))),
        f ||
          ((t = y({ src: t, async: !0, type: "module" }, e)),
          (e = Ie.get(c)) && No(t, e),
          (f = n.createElement("script")),
          It(f),
          ue(f, "link", t),
          n.head.appendChild(f)),
        (f = { type: "script", instance: f, count: 1, state: null }),
        l.set(c, f));
    }
  }
  function Mp(t, e, n, l) {
    var c = (c = rt.current) ? Mr(c) : null;
    if (!c) throw Error(i(446));
    switch (t) {
      case "meta":
      case "title":
        return null;
      case "style":
        return typeof n.precedence == "string" && typeof n.href == "string"
          ? ((e = Yl(n.href)),
            (n = ul(c).hoistableStyles),
            (l = n.get(e)),
            l ||
              ((l = { type: "style", instance: null, count: 0, state: null }),
              n.set(e, l)),
            l)
          : { type: "void", instance: null, count: 0, state: null };
      case "link":
        if (
          n.rel === "stylesheet" &&
          typeof n.href == "string" &&
          typeof n.precedence == "string"
        ) {
          t = Yl(n.href);
          var f = ul(c).hoistableStyles,
            g = f.get(t);
          if (
            (g ||
              ((c = c.ownerDocument || c),
              (g = {
                type: "stylesheet",
                instance: null,
                count: 0,
                state: { loading: 0, preload: null },
              }),
              f.set(t, g),
              (f = c.querySelector(Ki(t))) &&
                !f._p &&
                ((g.instance = f), (g.state.loading = 5)),
              Ie.has(t) ||
                ((n = {
                  rel: "preload",
                  as: "style",
                  href: n.href,
                  crossOrigin: n.crossOrigin,
                  integrity: n.integrity,
                  media: n.media,
                  hrefLang: n.hrefLang,
                  referrerPolicy: n.referrerPolicy,
                }),
                Ie.set(t, n),
                f || Lv(c, t, n, g.state))),
            e && l === null)
          )
            throw Error(i(528, ""));
          return g;
        }
        if (e && l !== null) throw Error(i(529, ""));
        return null;
      case "script":
        return (
          (e = n.async),
          (n = n.src),
          typeof n == "string" &&
          e &&
          typeof e != "function" &&
          typeof e != "symbol"
            ? ((e = Xl(n)),
              (n = ul(c).hoistableScripts),
              (l = n.get(e)),
              l ||
                ((l = {
                  type: "script",
                  instance: null,
                  count: 0,
                  state: null,
                }),
                n.set(e, l)),
              l)
            : { type: "void", instance: null, count: 0, state: null }
        );
      default:
        throw Error(i(444, t));
    }
  }
  function Yl(t) {
    return 'href="' + Ze(t) + '"';
  }
  function Ki(t) {
    return 'link[rel="stylesheet"][' + t + "]";
  }
  function zp(t) {
    return y({}, t, { "data-precedence": t.precedence, precedence: null });
  }
  function Lv(t, e, n, l) {
    t.querySelector('link[rel="preload"][as="style"][' + e + "]")
      ? (l.loading = 1)
      : ((e = t.createElement("link")),
        (l.preload = e),
        e.addEventListener("load", function () {
          return (l.loading |= 1);
        }),
        e.addEventListener("error", function () {
          return (l.loading |= 2);
        }),
        ue(e, "link", n),
        It(e),
        t.head.appendChild(e));
  }
  function Xl(t) {
    return '[src="' + Ze(t) + '"]';
  }
  function Ji(t) {
    return "script[async]" + t;
  }
  function Up(t, e, n) {
    if ((e.count++, e.instance === null))
      switch (e.type) {
        case "style":
          var l = t.querySelector('style[data-href~="' + Ze(n.href) + '"]');
          if (l) return (e.instance = l), It(l), l;
          var c = y({}, n, {
            "data-href": n.href,
            "data-precedence": n.precedence,
            href: null,
            precedence: null,
          });
          return (
            (l = (t.ownerDocument || t).createElement("style")),
            It(l),
            ue(l, "style", c),
            zr(l, n.precedence, t),
            (e.instance = l)
          );
        case "stylesheet":
          c = Yl(n.href);
          var f = t.querySelector(Ki(c));
          if (f) return (e.state.loading |= 4), (e.instance = f), It(f), f;
          (l = zp(n)),
            (c = Ie.get(c)) && Co(l, c),
            (f = (t.ownerDocument || t).createElement("link")),
            It(f);
          var g = f;
          return (
            (g._p = new Promise(function (_, R) {
              (g.onload = _), (g.onerror = R);
            })),
            ue(f, "link", l),
            (e.state.loading |= 4),
            zr(f, n.precedence, t),
            (e.instance = f)
          );
        case "script":
          return (
            (f = Xl(n.src)),
            (c = t.querySelector(Ji(f)))
              ? ((e.instance = c), It(c), c)
              : ((l = n),
                (c = Ie.get(f)) && ((l = y({}, n)), No(l, c)),
                (t = t.ownerDocument || t),
                (c = t.createElement("script")),
                It(c),
                ue(c, "link", l),
                t.head.appendChild(c),
                (e.instance = c))
          );
        case "void":
          return null;
        default:
          throw Error(i(443, e.type));
      }
    else
      e.type === "stylesheet" &&
        (e.state.loading & 4) === 0 &&
        ((l = e.instance), (e.state.loading |= 4), zr(l, n.precedence, t));
    return e.instance;
  }
  function zr(t, e, n) {
    for (
      var l = n.querySelectorAll(
          'link[rel="stylesheet"][data-precedence],style[data-precedence]'
        ),
        c = l.length ? l[l.length - 1] : null,
        f = c,
        g = 0;
      g < l.length;
      g++
    ) {
      var _ = l[g];
      if (_.dataset.precedence === e) f = _;
      else if (f !== c) break;
    }
    f
      ? f.parentNode.insertBefore(t, f.nextSibling)
      : ((e = n.nodeType === 9 ? n.head : n), e.insertBefore(t, e.firstChild));
  }
  function Co(t, e) {
    t.crossOrigin == null && (t.crossOrigin = e.crossOrigin),
      t.referrerPolicy == null && (t.referrerPolicy = e.referrerPolicy),
      t.title == null && (t.title = e.title);
  }
  function No(t, e) {
    t.crossOrigin == null && (t.crossOrigin = e.crossOrigin),
      t.referrerPolicy == null && (t.referrerPolicy = e.referrerPolicy),
      t.integrity == null && (t.integrity = e.integrity);
  }
  var Ur = null;
  function jp(t, e, n) {
    if (Ur === null) {
      var l = new Map(),
        c = (Ur = new Map());
      c.set(n, l);
    } else (c = Ur), (l = c.get(n)), l || ((l = new Map()), c.set(n, l));
    if (l.has(t)) return l;
    for (
      l.set(t, null), n = n.getElementsByTagName(t), c = 0;
      c < n.length;
      c++
    ) {
      var f = n[c];
      if (
        !(
          f[ri] ||
          f[se] ||
          (t === "link" && f.getAttribute("rel") === "stylesheet")
        ) &&
        f.namespaceURI !== "http://www.w3.org/2000/svg"
      ) {
        var g = f.getAttribute(e) || "";
        g = t + g;
        var _ = l.get(g);
        _ ? _.push(f) : l.set(g, [f]);
      }
    }
    return l;
  }
  function Bp(t, e, n) {
    (t = t.ownerDocument || t),
      t.head.insertBefore(
        n,
        e === "title" ? t.querySelector("head > title") : null
      );
  }
  function Hv(t, e, n) {
    if (n === 1 || e.itemProp != null) return !1;
    switch (t) {
      case "meta":
      case "title":
        return !0;
      case "style":
        if (
          typeof e.precedence != "string" ||
          typeof e.href != "string" ||
          e.href === ""
        )
          break;
        return !0;
      case "link":
        if (
          typeof e.rel != "string" ||
          typeof e.href != "string" ||
          e.href === "" ||
          e.onLoad ||
          e.onError
        )
          break;
        switch (e.rel) {
          case "stylesheet":
            return (
              (t = e.disabled), typeof e.precedence == "string" && t == null
            );
          default:
            return !0;
        }
      case "script":
        if (
          e.async &&
          typeof e.async != "function" &&
          typeof e.async != "symbol" &&
          !e.onLoad &&
          !e.onError &&
          e.src &&
          typeof e.src == "string"
        )
          return !0;
    }
    return !1;
  }
  function Lp(t) {
    return !(t.type === "stylesheet" && (t.state.loading & 3) === 0);
  }
  var Fi = null;
  function qv() {}
  function Yv(t, e, n) {
    if (Fi === null) throw Error(i(475));
    var l = Fi;
    if (
      e.type === "stylesheet" &&
      (typeof n.media != "string" || matchMedia(n.media).matches !== !1) &&
      (e.state.loading & 4) === 0
    ) {
      if (e.instance === null) {
        var c = Yl(n.href),
          f = t.querySelector(Ki(c));
        if (f) {
          (t = f._p),
            t !== null &&
              typeof t == "object" &&
              typeof t.then == "function" &&
              (l.count++, (l = jr.bind(l)), t.then(l, l)),
            (e.state.loading |= 4),
            (e.instance = f),
            It(f);
          return;
        }
        (f = t.ownerDocument || t),
          (n = zp(n)),
          (c = Ie.get(c)) && Co(n, c),
          (f = f.createElement("link")),
          It(f);
        var g = f;
        (g._p = new Promise(function (_, R) {
          (g.onload = _), (g.onerror = R);
        })),
          ue(f, "link", n),
          (e.instance = f);
      }
      l.stylesheets === null && (l.stylesheets = new Map()),
        l.stylesheets.set(e, t),
        (t = e.state.preload) &&
          (e.state.loading & 3) === 0 &&
          (l.count++,
          (e = jr.bind(l)),
          t.addEventListener("load", e),
          t.addEventListener("error", e));
    }
  }
  function Xv() {
    if (Fi === null) throw Error(i(475));
    var t = Fi;
    return (
      t.stylesheets && t.count === 0 && Mo(t, t.stylesheets),
      0 < t.count
        ? function (e) {
            var n = setTimeout(function () {
              if ((t.stylesheets && Mo(t, t.stylesheets), t.unsuspend)) {
                var l = t.unsuspend;
                (t.unsuspend = null), l();
              }
            }, 6e4);
            return (
              (t.unsuspend = e),
              function () {
                (t.unsuspend = null), clearTimeout(n);
              }
            );
          }
        : null
    );
  }
  function jr() {
    if ((this.count--, this.count === 0)) {
      if (this.stylesheets) Mo(this, this.stylesheets);
      else if (this.unsuspend) {
        var t = this.unsuspend;
        (this.unsuspend = null), t();
      }
    }
  }
  var Br = null;
  function Mo(t, e) {
    (t.stylesheets = null),
      t.unsuspend !== null &&
        (t.count++,
        (Br = new Map()),
        e.forEach(Gv, t),
        (Br = null),
        jr.call(t));
  }
  function Gv(t, e) {
    if (!(e.state.loading & 4)) {
      var n = Br.get(t);
      if (n) var l = n.get(null);
      else {
        (n = new Map()), Br.set(t, n);
        for (
          var c = t.querySelectorAll(
              "link[data-precedence],style[data-precedence]"
            ),
            f = 0;
          f < c.length;
          f++
        ) {
          var g = c[f];
          (g.nodeName === "LINK" || g.getAttribute("media") !== "not all") &&
            (n.set(g.dataset.precedence, g), (l = g));
        }
        l && n.set(null, l);
      }
      (c = e.instance),
        (g = c.getAttribute("data-precedence")),
        (f = n.get(g) || l),
        f === l && n.set(null, c),
        n.set(g, c),
        this.count++,
        (l = jr.bind(this)),
        c.addEventListener("load", l),
        c.addEventListener("error", l),
        f
          ? f.parentNode.insertBefore(c, f.nextSibling)
          : ((t = t.nodeType === 9 ? t.head : t),
            t.insertBefore(c, t.firstChild)),
        (e.state.loading |= 4);
    }
  }
  var $i = {
    $$typeof: M,
    Provider: null,
    Consumer: null,
    _currentValue: tt,
    _currentValue2: tt,
    _threadCount: 0,
  };
  function Vv(t, e, n, l, c, f, g, _) {
    (this.tag = 1),
      (this.containerInfo = t),
      (this.pingCache = this.current = this.pendingChildren = null),
      (this.timeoutHandle = -1),
      (this.callbackNode =
        this.next =
        this.pendingContext =
        this.context =
        this.cancelPendingCommit =
          null),
      (this.callbackPriority = 0),
      (this.expirationTimes = As(-1)),
      (this.entangledLanes =
        this.shellSuspendCounter =
        this.errorRecoveryDisabledLanes =
        this.expiredLanes =
        this.warmLanes =
        this.pingedLanes =
        this.suspendedLanes =
        this.pendingLanes =
          0),
      (this.entanglements = As(0)),
      (this.hiddenUpdates = As(null)),
      (this.identifierPrefix = l),
      (this.onUncaughtError = c),
      (this.onCaughtError = f),
      (this.onRecoverableError = g),
      (this.pooledCache = null),
      (this.pooledCacheLanes = 0),
      (this.formState = _),
      (this.incompleteTransitions = new Map());
  }
  function Hp(t, e, n, l, c, f, g, _, R, j, V, Z) {
    return (
      (t = new Vv(t, e, n, g, _, R, j, Z)),
      (e = 1),
      f === !0 && (e |= 24),
      (f = Me(3, null, null, e)),
      (t.current = f),
      (f.stateNode = t),
      (e = hc()),
      e.refCount++,
      (t.pooledCache = e),
      e.refCount++,
      (f.memoizedState = { element: l, isDehydrated: n, cache: e }),
      yc(f),
      t
    );
  }
  function qp(t) {
    return t ? ((t = _l), t) : _l;
  }
  function Yp(t, e, n, l, c, f) {
    (c = qp(c)),
      l.context === null ? (l.context = c) : (l.pendingContext = c),
      (l = Pn(e)),
      (l.payload = { element: n }),
      (f = f === void 0 ? null : f),
      f !== null && (l.callback = f),
      (n = Wn(t, l, e)),
      n !== null && (Le(n, t, e), Ri(n, t, e));
  }
  function Xp(t, e) {
    if (((t = t.memoizedState), t !== null && t.dehydrated !== null)) {
      var n = t.retryLane;
      t.retryLane = n !== 0 && n < e ? n : e;
    }
  }
  function zo(t, e) {
    Xp(t, e), (t = t.alternate) && Xp(t, e);
  }
  function Gp(t) {
    if (t.tag === 13) {
      var e = gl(t, 67108864);
      e !== null && Le(e, t, 67108864), zo(t, 67108864);
    }
  }
  var Lr = !0;
  function Qv(t, e, n, l) {
    var c = q.T;
    q.T = null;
    var f = $.p;
    try {
      ($.p = 2), Uo(t, e, n, l);
    } finally {
      ($.p = f), (q.T = c);
    }
  }
  function kv(t, e, n, l) {
    var c = q.T;
    q.T = null;
    var f = $.p;
    try {
      ($.p = 8), Uo(t, e, n, l);
    } finally {
      ($.p = f), (q.T = c);
    }
  }
  function Uo(t, e, n, l) {
    if (Lr) {
      var c = jo(l);
      if (c === null) So(t, e, l, Hr, n), Qp(t, l);
      else if (Kv(c, t, e, n, l)) l.stopPropagation();
      else if ((Qp(t, l), e & 4 && -1 < Zv.indexOf(t))) {
        for (; c !== null; ) {
          var f = il(c);
          if (f !== null)
            switch (f.tag) {
              case 3:
                if (((f = f.stateNode), f.current.memoizedState.isDehydrated)) {
                  var g = Oa(f.pendingLanes);
                  if (g !== 0) {
                    var _ = f;
                    for (_.pendingLanes |= 2, _.entangledLanes |= 2; g; ) {
                      var R = 1 << (31 - Ce(g));
                      (_.entanglements[1] |= R), (g &= ~R);
                    }
                    hn(f), (Ot & 6) === 0 && ((Sr = rn() + 500), Vi(0));
                  }
                }
                break;
              case 13:
                (_ = gl(f, 2)), _ !== null && Le(_, f, 2), Tr(), zo(f, 2);
            }
          if (((f = jo(l)), f === null && So(t, e, l, Hr, n), f === c)) break;
          c = f;
        }
        c !== null && l.stopPropagation();
      } else So(t, e, l, null, n);
    }
  }
  function jo(t) {
    return (t = qs(t)), Bo(t);
  }
  var Hr = null;
  function Bo(t) {
    if (((Hr = null), (t = ll(t)), t !== null)) {
      var e = o(t);
      if (e === null) t = null;
      else {
        var n = e.tag;
        if (n === 13) {
          if (((t = h(e)), t !== null)) return t;
          t = null;
        } else if (n === 3) {
          if (e.stateNode.current.memoizedState.isDehydrated)
            return e.tag === 3 ? e.stateNode.containerInfo : null;
          t = null;
        } else e !== t && (t = null);
      }
    }
    return (Hr = t), null;
  }
  function Vp(t) {
    switch (t) {
      case "beforetoggle":
      case "cancel":
      case "click":
      case "close":
      case "contextmenu":
      case "copy":
      case "cut":
      case "auxclick":
      case "dblclick":
      case "dragend":
      case "dragstart":
      case "drop":
      case "focusin":
      case "focusout":
      case "input":
      case "invalid":
      case "keydown":
      case "keypress":
      case "keyup":
      case "mousedown":
      case "mouseup":
      case "paste":
      case "pause":
      case "play":
      case "pointercancel":
      case "pointerdown":
      case "pointerup":
      case "ratechange":
      case "reset":
      case "resize":
      case "seeked":
      case "submit":
      case "toggle":
      case "touchcancel":
      case "touchend":
      case "touchstart":
      case "volumechange":
      case "change":
      case "selectionchange":
      case "textInput":
      case "compositionstart":
      case "compositionend":
      case "compositionupdate":
      case "beforeblur":
      case "afterblur":
      case "beforeinput":
      case "blur":
      case "fullscreenchange":
      case "focus":
      case "hashchange":
      case "popstate":
      case "select":
      case "selectstart":
        return 2;
      case "drag":
      case "dragenter":
      case "dragexit":
      case "dragleave":
      case "dragover":
      case "mousemove":
      case "mouseout":
      case "mouseover":
      case "pointermove":
      case "pointerout":
      case "pointerover":
      case "scroll":
      case "touchmove":
      case "wheel":
      case "mouseenter":
      case "mouseleave":
      case "pointerenter":
      case "pointerleave":
        return 8;
      case "message":
        switch (Ng()) {
          case ah:
            return 2;
          case lh:
            return 8;
          case Cu:
          case Mg:
            return 32;
          case ih:
            return 268435456;
          default:
            return 32;
        }
      default:
        return 32;
    }
  }
  var Lo = !1,
    fa = null,
    ha = null,
    da = null,
    Pi = new Map(),
    Wi = new Map(),
    ma = [],
    Zv =
      "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(
        " "
      );
  function Qp(t, e) {
    switch (t) {
      case "focusin":
      case "focusout":
        fa = null;
        break;
      case "dragenter":
      case "dragleave":
        ha = null;
        break;
      case "mouseover":
      case "mouseout":
        da = null;
        break;
      case "pointerover":
      case "pointerout":
        Pi.delete(e.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        Wi.delete(e.pointerId);
    }
  }
  function Ii(t, e, n, l, c, f) {
    return t === null || t.nativeEvent !== f
      ? ((t = {
          blockedOn: e,
          domEventName: n,
          eventSystemFlags: l,
          nativeEvent: f,
          targetContainers: [c],
        }),
        e !== null && ((e = il(e)), e !== null && Gp(e)),
        t)
      : ((t.eventSystemFlags |= l),
        (e = t.targetContainers),
        c !== null && e.indexOf(c) === -1 && e.push(c),
        t);
  }
  function Kv(t, e, n, l, c) {
    switch (e) {
      case "focusin":
        return (fa = Ii(fa, t, e, n, l, c)), !0;
      case "dragenter":
        return (ha = Ii(ha, t, e, n, l, c)), !0;
      case "mouseover":
        return (da = Ii(da, t, e, n, l, c)), !0;
      case "pointerover":
        var f = c.pointerId;
        return Pi.set(f, Ii(Pi.get(f) || null, t, e, n, l, c)), !0;
      case "gotpointercapture":
        return (
          (f = c.pointerId), Wi.set(f, Ii(Wi.get(f) || null, t, e, n, l, c)), !0
        );
    }
    return !1;
  }
  function kp(t) {
    var e = ll(t.target);
    if (e !== null) {
      var n = o(e);
      if (n !== null) {
        if (((e = n.tag), e === 13)) {
          if (((e = h(n)), e !== null)) {
            (t.blockedOn = e),
              Yg(t.priority, function () {
                if (n.tag === 13) {
                  var l = Be();
                  l = ws(l);
                  var c = gl(n, l);
                  c !== null && Le(c, n, l), zo(n, l);
                }
              });
            return;
          }
        } else if (e === 3 && n.stateNode.current.memoizedState.isDehydrated) {
          t.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
          return;
        }
      }
    }
    t.blockedOn = null;
  }
  function qr(t) {
    if (t.blockedOn !== null) return !1;
    for (var e = t.targetContainers; 0 < e.length; ) {
      var n = jo(t.nativeEvent);
      if (n === null) {
        n = t.nativeEvent;
        var l = new n.constructor(n.type, n);
        (Hs = l), n.target.dispatchEvent(l), (Hs = null);
      } else return (e = il(n)), e !== null && Gp(e), (t.blockedOn = n), !1;
      e.shift();
    }
    return !0;
  }
  function Zp(t, e, n) {
    qr(t) && n.delete(e);
  }
  function Jv() {
    (Lo = !1),
      fa !== null && qr(fa) && (fa = null),
      ha !== null && qr(ha) && (ha = null),
      da !== null && qr(da) && (da = null),
      Pi.forEach(Zp),
      Wi.forEach(Zp);
  }
  function Yr(t, e) {
    t.blockedOn === e &&
      ((t.blockedOn = null),
      Lo ||
        ((Lo = !0),
        s.unstable_scheduleCallback(s.unstable_NormalPriority, Jv)));
  }
  var Xr = null;
  function Kp(t) {
    Xr !== t &&
      ((Xr = t),
      s.unstable_scheduleCallback(s.unstable_NormalPriority, function () {
        Xr === t && (Xr = null);
        for (var e = 0; e < t.length; e += 3) {
          var n = t[e],
            l = t[e + 1],
            c = t[e + 2];
          if (typeof l != "function") {
            if (Bo(l || n) === null) continue;
            break;
          }
          var f = il(n);
          f !== null &&
            (t.splice(e, 3),
            (e -= 3),
            jc(f, { pending: !0, data: c, method: n.method, action: l }, l, c));
        }
      }));
  }
  function tu(t) {
    function e(R) {
      return Yr(R, t);
    }
    fa !== null && Yr(fa, t),
      ha !== null && Yr(ha, t),
      da !== null && Yr(da, t),
      Pi.forEach(e),
      Wi.forEach(e);
    for (var n = 0; n < ma.length; n++) {
      var l = ma[n];
      l.blockedOn === t && (l.blockedOn = null);
    }
    for (; 0 < ma.length && ((n = ma[0]), n.blockedOn === null); )
      kp(n), n.blockedOn === null && ma.shift();
    if (((n = (t.ownerDocument || t).$$reactFormReplay), n != null))
      for (l = 0; l < n.length; l += 3) {
        var c = n[l],
          f = n[l + 1],
          g = c[ge] || null;
        if (typeof f == "function") g || Kp(n);
        else if (g) {
          var _ = null;
          if (f && f.hasAttribute("formAction")) {
            if (((c = f), (g = f[ge] || null))) _ = g.formAction;
            else if (Bo(c) !== null) continue;
          } else _ = g.action;
          typeof _ == "function" ? (n[l + 1] = _) : (n.splice(l, 3), (l -= 3)),
            Kp(n);
        }
      }
  }
  function Ho(t) {
    this._internalRoot = t;
  }
  (Gr.prototype.render = Ho.prototype.render =
    function (t) {
      var e = this._internalRoot;
      if (e === null) throw Error(i(409));
      var n = e.current,
        l = Be();
      Yp(n, l, t, e, null, null);
    }),
    (Gr.prototype.unmount = Ho.prototype.unmount =
      function () {
        var t = this._internalRoot;
        if (t !== null) {
          this._internalRoot = null;
          var e = t.containerInfo;
          Yp(t.current, 2, null, t, null, null), Tr(), (e[al] = null);
        }
      });
  function Gr(t) {
    this._internalRoot = t;
  }
  Gr.prototype.unstable_scheduleHydration = function (t) {
    if (t) {
      var e = oh();
      t = { blockedOn: null, target: t, priority: e };
      for (var n = 0; n < ma.length && e !== 0 && e < ma[n].priority; n++);
      ma.splice(n, 0, t), n === 0 && kp(t);
    }
  };
  var Jp = a.version;
  if (Jp !== "19.1.0") throw Error(i(527, Jp, "19.1.0"));
  $.findDOMNode = function (t) {
    var e = t._reactInternals;
    if (e === void 0)
      throw typeof t.render == "function"
        ? Error(i(188))
        : ((t = Object.keys(t).join(",")), Error(i(268, t)));
    return (
      (t = p(e)),
      (t = t !== null ? m(t) : null),
      (t = t === null ? null : t.stateNode),
      t
    );
  };
  var Fv = {
    bundleType: 0,
    version: "19.1.0",
    rendererPackageName: "react-dom",
    currentDispatcherRef: q,
    reconcilerVersion: "19.1.0",
  };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var Vr = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!Vr.isDisabled && Vr.supportsFiber)
      try {
        (li = Vr.inject(Fv)), (De = Vr);
      } catch {}
  }
  return (
    (nu.createRoot = function (t, e) {
      if (!r(t)) throw Error(i(299));
      var n = !1,
        l = "",
        c = om,
        f = fm,
        g = hm,
        _ = null;
      return (
        e != null &&
          (e.unstable_strictMode === !0 && (n = !0),
          e.identifierPrefix !== void 0 && (l = e.identifierPrefix),
          e.onUncaughtError !== void 0 && (c = e.onUncaughtError),
          e.onCaughtError !== void 0 && (f = e.onCaughtError),
          e.onRecoverableError !== void 0 && (g = e.onRecoverableError),
          e.unstable_transitionCallbacks !== void 0 &&
            (_ = e.unstable_transitionCallbacks)),
        (e = Hp(t, 1, !1, null, null, n, l, c, f, g, _, null)),
        (t[al] = e.current),
        bo(t),
        new Ho(e)
      );
    }),
    (nu.hydrateRoot = function (t, e, n) {
      if (!r(t)) throw Error(i(299));
      var l = !1,
        c = "",
        f = om,
        g = fm,
        _ = hm,
        R = null,
        j = null;
      return (
        n != null &&
          (n.unstable_strictMode === !0 && (l = !0),
          n.identifierPrefix !== void 0 && (c = n.identifierPrefix),
          n.onUncaughtError !== void 0 && (f = n.onUncaughtError),
          n.onCaughtError !== void 0 && (g = n.onCaughtError),
          n.onRecoverableError !== void 0 && (_ = n.onRecoverableError),
          n.unstable_transitionCallbacks !== void 0 &&
            (R = n.unstable_transitionCallbacks),
          n.formState !== void 0 && (j = n.formState)),
        (e = Hp(t, 1, !0, e, n ?? null, l, c, f, g, _, R, j)),
        (e.context = qp(null)),
        (n = e.current),
        (l = Be()),
        (l = ws(l)),
        (c = Pn(l)),
        (c.callback = null),
        Wn(n, c, l),
        (n = l),
        (e.current.lanes = n),
        ui(e, n),
        hn(e),
        (t[al] = e.current),
        bo(t),
        new Gr(e)
      );
    }),
    (nu.version = "19.1.0"),
    nu
  );
}
var l0;
function i1() {
  if (l0) return Xo.exports;
  l0 = 1;
  function s() {
    if (
      !(
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
      )
    )
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s);
      } catch (a) {
        console.error(a);
      }
  }
  return s(), (Xo.exports = l1()), Xo.exports;
}
var u1 = i1();
const Nf = H.createContext(),
  r1 = ({ children: s }) => {
    const [a, u] = H.useState([]);
    return (
      H.useEffect(() => {
        const i = localStorage.getItem("cart");
        i && u(JSON.parse(i));
      }, []),
      O.jsx(Nf.Provider, { value: [a, u], children: s })
    );
  },
  os = () => H.useContext(Nf);
var au = {},
  i0;
function s1() {
  if (i0) return au;
  (i0 = 1),
    Object.defineProperty(au, "__esModule", { value: !0 }),
    (au.parse = h),
    (au.serialize = m);
  const s = /^[\u0021-\u003A\u003C\u003E-\u007E]+$/,
    a = /^[\u0021-\u003A\u003C-\u007E]*$/,
    u =
      /^([.]?[a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)([.][a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)*$/i,
    i = /^[\u0020-\u003A\u003D-\u007E]*$/,
    r = Object.prototype.toString,
    o = (() => {
      const S = function () {};
      return (S.prototype = Object.create(null)), S;
    })();
  function h(S, T) {
    const x = new o(),
      b = S.length;
    if (b < 2) return x;
    const E = (T == null ? void 0 : T.decode) || y;
    let A = 0;
    do {
      const N = S.indexOf("=", A);
      if (N === -1) break;
      const M = S.indexOf(";", A),
        G = M === -1 ? b : M;
      if (N > G) {
        A = S.lastIndexOf(";", N - 1) + 1;
        continue;
      }
      const U = d(S, A, N),
        X = p(S, N, U),
        k = S.slice(U, X);
      if (x[k] === void 0) {
        let F = d(S, N + 1, G),
          K = p(S, G, F);
        const ut = E(S.slice(F, K));
        x[k] = ut;
      }
      A = G + 1;
    } while (A < b);
    return x;
  }
  function d(S, T, x) {
    do {
      const b = S.charCodeAt(T);
      if (b !== 32 && b !== 9) return T;
    } while (++T < x);
    return x;
  }
  function p(S, T, x) {
    for (; T > x; ) {
      const b = S.charCodeAt(--T);
      if (b !== 32 && b !== 9) return T + 1;
    }
    return x;
  }
  function m(S, T, x) {
    const b = (x == null ? void 0 : x.encode) || encodeURIComponent;
    if (!s.test(S)) throw new TypeError(`argument name is invalid: ${S}`);
    const E = b(T);
    if (!a.test(E)) throw new TypeError(`argument val is invalid: ${T}`);
    let A = S + "=" + E;
    if (!x) return A;
    if (x.maxAge !== void 0) {
      if (!Number.isInteger(x.maxAge))
        throw new TypeError(`option maxAge is invalid: ${x.maxAge}`);
      A += "; Max-Age=" + x.maxAge;
    }
    if (x.domain) {
      if (!u.test(x.domain))
        throw new TypeError(`option domain is invalid: ${x.domain}`);
      A += "; Domain=" + x.domain;
    }
    if (x.path) {
      if (!i.test(x.path))
        throw new TypeError(`option path is invalid: ${x.path}`);
      A += "; Path=" + x.path;
    }
    if (x.expires) {
      if (!v(x.expires) || !Number.isFinite(x.expires.valueOf()))
        throw new TypeError(`option expires is invalid: ${x.expires}`);
      A += "; Expires=" + x.expires.toUTCString();
    }
    if (
      (x.httpOnly && (A += "; HttpOnly"),
      x.secure && (A += "; Secure"),
      x.partitioned && (A += "; Partitioned"),
      x.priority)
    )
      switch (
        typeof x.priority == "string" ? x.priority.toLowerCase() : void 0
      ) {
        case "low":
          A += "; Priority=Low";
          break;
        case "medium":
          A += "; Priority=Medium";
          break;
        case "high":
          A += "; Priority=High";
          break;
        default:
          throw new TypeError(`option priority is invalid: ${x.priority}`);
      }
    if (x.sameSite)
      switch (
        typeof x.sameSite == "string" ? x.sameSite.toLowerCase() : x.sameSite
      ) {
        case !0:
        case "strict":
          A += "; SameSite=Strict";
          break;
        case "lax":
          A += "; SameSite=Lax";
          break;
        case "none":
          A += "; SameSite=None";
          break;
        default:
          throw new TypeError(`option sameSite is invalid: ${x.sameSite}`);
      }
    return A;
  }
  function y(S) {
    if (S.indexOf("%") === -1) return S;
    try {
      return decodeURIComponent(S);
    } catch {
      return S;
    }
  }
  function v(S) {
    return r.call(S) === "[object Date]";
  }
  return au;
}
s1();
/**
 * react-router v7.5.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ var u0 = "popstate";
function c1(s = {}) {
  function a(i, r) {
    let { pathname: o, search: h, hash: d } = i.location;
    return uf(
      "",
      { pathname: o, search: h, hash: d },
      (r.state && r.state.usr) || null,
      (r.state && r.state.key) || "default"
    );
  }
  function u(i, r) {
    return typeof r == "string" ? r : hu(r);
  }
  return f1(a, u, null, s);
}
function Yt(s, a) {
  if (s === !1 || s === null || typeof s > "u") throw new Error(a);
}
function vn(s, a) {
  if (!s) {
    typeof console < "u" && console.warn(a);
    try {
      throw new Error(a);
    } catch {}
  }
}
function o1() {
  return Math.random().toString(36).substring(2, 10);
}
function r0(s, a) {
  return { usr: s.state, key: s.key, idx: a };
}
function uf(s, a, u = null, i) {
  return {
    pathname: typeof s == "string" ? s : s.pathname,
    search: "",
    hash: "",
    ...(typeof a == "string" ? ti(a) : a),
    state: u,
    key: (a && a.key) || i || o1(),
  };
}
function hu({ pathname: s = "/", search: a = "", hash: u = "" }) {
  return (
    a && a !== "?" && (s += a.charAt(0) === "?" ? a : "?" + a),
    u && u !== "#" && (s += u.charAt(0) === "#" ? u : "#" + u),
    s
  );
}
function ti(s) {
  let a = {};
  if (s) {
    let u = s.indexOf("#");
    u >= 0 && ((a.hash = s.substring(u)), (s = s.substring(0, u)));
    let i = s.indexOf("?");
    i >= 0 && ((a.search = s.substring(i)), (s = s.substring(0, i))),
      s && (a.pathname = s);
  }
  return a;
}
function f1(s, a, u, i = {}) {
  let { window: r = document.defaultView, v5Compat: o = !1 } = i,
    h = r.history,
    d = "POP",
    p = null,
    m = y();
  m == null && ((m = 0), h.replaceState({ ...h.state, idx: m }, ""));
  function y() {
    return (h.state || { idx: null }).idx;
  }
  function v() {
    d = "POP";
    let E = y(),
      A = E == null ? null : E - m;
    (m = E), p && p({ action: d, location: b.location, delta: A });
  }
  function S(E, A) {
    d = "PUSH";
    let N = uf(b.location, E, A);
    m = y() + 1;
    let M = r0(N, m),
      G = b.createHref(N);
    try {
      h.pushState(M, "", G);
    } catch (U) {
      if (U instanceof DOMException && U.name === "DataCloneError") throw U;
      r.location.assign(G);
    }
    o && p && p({ action: d, location: b.location, delta: 1 });
  }
  function T(E, A) {
    d = "REPLACE";
    let N = uf(b.location, E, A);
    m = y();
    let M = r0(N, m),
      G = b.createHref(N);
    h.replaceState(M, "", G),
      o && p && p({ action: d, location: b.location, delta: 0 });
  }
  function x(E) {
    let A = r.location.origin !== "null" ? r.location.origin : r.location.href,
      N = typeof E == "string" ? E : hu(E);
    return (
      (N = N.replace(/ $/, "%20")),
      Yt(
        A,
        `No window.location.(origin|href) available to create URL for href: ${N}`
      ),
      new URL(N, A)
    );
  }
  let b = {
    get action() {
      return d;
    },
    get location() {
      return s(r, h);
    },
    listen(E) {
      if (p) throw new Error("A history only accepts one active listener");
      return (
        r.addEventListener(u0, v),
        (p = E),
        () => {
          r.removeEventListener(u0, v), (p = null);
        }
      );
    },
    createHref(E) {
      return a(r, E);
    },
    createURL: x,
    encodeLocation(E) {
      let A = x(E);
      return { pathname: A.pathname, search: A.search, hash: A.hash };
    },
    push: S,
    replace: T,
    go(E) {
      return h.go(E);
    },
  };
  return b;
}
function X0(s, a, u = "/") {
  return h1(s, a, u, !1);
}
function h1(s, a, u, i) {
  let r = typeof a == "string" ? ti(a) : a,
    o = Xn(r.pathname || "/", u);
  if (o == null) return null;
  let h = G0(s);
  d1(h);
  let d = null;
  for (let p = 0; d == null && p < h.length; ++p) {
    let m = E1(o);
    d = x1(h[p], m, i);
  }
  return d;
}
function G0(s, a = [], u = [], i = "") {
  let r = (o, h, d) => {
    let p = {
      relativePath: d === void 0 ? o.path || "" : d,
      caseSensitive: o.caseSensitive === !0,
      childrenIndex: h,
      route: o,
    };
    p.relativePath.startsWith("/") &&
      (Yt(
        p.relativePath.startsWith(i),
        `Absolute route path "${p.relativePath}" nested under path "${i}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`
      ),
      (p.relativePath = p.relativePath.slice(i.length)));
    let m = Yn([i, p.relativePath]),
      y = u.concat(p);
    o.children &&
      o.children.length > 0 &&
      (Yt(
        o.index !== !0,
        `Index routes must not have child routes. Please remove all child routes from route path "${m}".`
      ),
      G0(o.children, a, y, m)),
      !(o.path == null && !o.index) &&
        a.push({ path: m, score: b1(m, o.index), routesMeta: y });
  };
  return (
    s.forEach((o, h) => {
      var d;
      if (o.path === "" || !((d = o.path) != null && d.includes("?"))) r(o, h);
      else for (let p of V0(o.path)) r(o, h, p);
    }),
    a
  );
}
function V0(s) {
  let a = s.split("/");
  if (a.length === 0) return [];
  let [u, ...i] = a,
    r = u.endsWith("?"),
    o = u.replace(/\?$/, "");
  if (i.length === 0) return r ? [o, ""] : [o];
  let h = V0(i.join("/")),
    d = [];
  return (
    d.push(...h.map((p) => (p === "" ? o : [o, p].join("/")))),
    r && d.push(...h),
    d.map((p) => (s.startsWith("/") && p === "" ? "/" : p))
  );
}
function d1(s) {
  s.sort((a, u) =>
    a.score !== u.score
      ? u.score - a.score
      : S1(
          a.routesMeta.map((i) => i.childrenIndex),
          u.routesMeta.map((i) => i.childrenIndex)
        )
  );
}
var m1 = /^:[\w-]+$/,
  p1 = 3,
  y1 = 2,
  g1 = 1,
  _1 = 10,
  v1 = -2,
  s0 = (s) => s === "*";
function b1(s, a) {
  let u = s.split("/"),
    i = u.length;
  return (
    u.some(s0) && (i += v1),
    a && (i += y1),
    u
      .filter((r) => !s0(r))
      .reduce((r, o) => r + (m1.test(o) ? p1 : o === "" ? g1 : _1), i)
  );
}
function S1(s, a) {
  return s.length === a.length && s.slice(0, -1).every((i, r) => i === a[r])
    ? s[s.length - 1] - a[a.length - 1]
    : 0;
}
function x1(s, a, u = !1) {
  let { routesMeta: i } = s,
    r = {},
    o = "/",
    h = [];
  for (let d = 0; d < i.length; ++d) {
    let p = i[d],
      m = d === i.length - 1,
      y = o === "/" ? a : a.slice(o.length) || "/",
      v = ts(
        { path: p.relativePath, caseSensitive: p.caseSensitive, end: m },
        y
      ),
      S = p.route;
    if (
      (!v &&
        m &&
        u &&
        !i[i.length - 1].route.index &&
        (v = ts(
          { path: p.relativePath, caseSensitive: p.caseSensitive, end: !1 },
          y
        )),
      !v)
    )
      return null;
    Object.assign(r, v.params),
      h.push({
        params: r,
        pathname: Yn([o, v.pathname]),
        pathnameBase: w1(Yn([o, v.pathnameBase])),
        route: S,
      }),
      v.pathnameBase !== "/" && (o = Yn([o, v.pathnameBase]));
  }
  return h;
}
function ts(s, a) {
  typeof s == "string" && (s = { path: s, caseSensitive: !1, end: !0 });
  let [u, i] = T1(s.path, s.caseSensitive, s.end),
    r = a.match(u);
  if (!r) return null;
  let o = r[0],
    h = o.replace(/(.)\/+$/, "$1"),
    d = r.slice(1);
  return {
    params: i.reduce((m, { paramName: y, isOptional: v }, S) => {
      if (y === "*") {
        let x = d[S] || "";
        h = o.slice(0, o.length - x.length).replace(/(.)\/+$/, "$1");
      }
      const T = d[S];
      return (
        v && !T ? (m[y] = void 0) : (m[y] = (T || "").replace(/%2F/g, "/")), m
      );
    }, {}),
    pathname: o,
    pathnameBase: h,
    pattern: s,
  };
}
function T1(s, a = !1, u = !0) {
  vn(
    s === "*" || !s.endsWith("*") || s.endsWith("/*"),
    `Route path "${s}" will be treated as if it were "${s.replace(
      /\*$/,
      "/*"
    )}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${s.replace(
      /\*$/,
      "/*"
    )}".`
  );
  let i = [],
    r =
      "^" +
      s
        .replace(/\/*\*?$/, "")
        .replace(/^\/*/, "/")
        .replace(/[\\.*+^${}|()[\]]/g, "\\$&")
        .replace(
          /\/:([\w-]+)(\?)?/g,
          (h, d, p) => (
            i.push({ paramName: d, isOptional: p != null }),
            p ? "/?([^\\/]+)?" : "/([^\\/]+)"
          )
        );
  return (
    s.endsWith("*")
      ? (i.push({ paramName: "*" }),
        (r += s === "*" || s === "/*" ? "(.*)$" : "(?:\\/(.+)|\\/*)$"))
      : u
      ? (r += "\\/*$")
      : s !== "" && s !== "/" && (r += "(?:(?=\\/|$))"),
    [new RegExp(r, a ? void 0 : "i"), i]
  );
}
function E1(s) {
  try {
    return s
      .split("/")
      .map((a) => decodeURIComponent(a).replace(/\//g, "%2F"))
      .join("/");
  } catch (a) {
    return (
      vn(
        !1,
        `The URL path "${s}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${a}).`
      ),
      s
    );
  }
}
function Xn(s, a) {
  if (a === "/") return s;
  if (!s.toLowerCase().startsWith(a.toLowerCase())) return null;
  let u = a.endsWith("/") ? a.length - 1 : a.length,
    i = s.charAt(u);
  return i && i !== "/" ? null : s.slice(u) || "/";
}
function O1(s, a = "/") {
  let {
    pathname: u,
    search: i = "",
    hash: r = "",
  } = typeof s == "string" ? ti(s) : s;
  return {
    pathname: u ? (u.startsWith("/") ? u : R1(u, a)) : a,
    search: D1(i),
    hash: C1(r),
  };
}
function R1(s, a) {
  let u = a.replace(/\/+$/, "").split("/");
  return (
    s.split("/").forEach((r) => {
      r === ".." ? u.length > 1 && u.pop() : r !== "." && u.push(r);
    }),
    u.length > 1 ? u.join("/") : "/"
  );
}
function ko(s, a, u, i) {
  return `Cannot include a '${s}' character in a manually specified \`to.${a}\` field [${JSON.stringify(
    i
  )}].  Please separate it out to the \`to.${u}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`;
}
function A1(s) {
  return s.filter(
    (a, u) => u === 0 || (a.route.path && a.route.path.length > 0)
  );
}
function Q0(s) {
  let a = A1(s);
  return a.map((u, i) => (i === a.length - 1 ? u.pathname : u.pathnameBase));
}
function k0(s, a, u, i = !1) {
  let r;
  typeof s == "string"
    ? (r = ti(s))
    : ((r = { ...s }),
      Yt(
        !r.pathname || !r.pathname.includes("?"),
        ko("?", "pathname", "search", r)
      ),
      Yt(
        !r.pathname || !r.pathname.includes("#"),
        ko("#", "pathname", "hash", r)
      ),
      Yt(!r.search || !r.search.includes("#"), ko("#", "search", "hash", r)));
  let o = s === "" || r.pathname === "",
    h = o ? "/" : r.pathname,
    d;
  if (h == null) d = u;
  else {
    let v = a.length - 1;
    if (!i && h.startsWith("..")) {
      let S = h.split("/");
      for (; S[0] === ".."; ) S.shift(), (v -= 1);
      r.pathname = S.join("/");
    }
    d = v >= 0 ? a[v] : "/";
  }
  let p = O1(r, d),
    m = h && h !== "/" && h.endsWith("/"),
    y = (o || h === ".") && u.endsWith("/");
  return !p.pathname.endsWith("/") && (m || y) && (p.pathname += "/"), p;
}
var Yn = (s) => s.join("/").replace(/\/\/+/g, "/"),
  w1 = (s) => s.replace(/\/+$/, "").replace(/^\/*/, "/"),
  D1 = (s) => (!s || s === "?" ? "" : s.startsWith("?") ? s : "?" + s),
  C1 = (s) => (!s || s === "#" ? "" : s.startsWith("#") ? s : "#" + s);
function N1(s) {
  return (
    s != null &&
    typeof s.status == "number" &&
    typeof s.statusText == "string" &&
    typeof s.internal == "boolean" &&
    "data" in s
  );
}
var Z0 = ["POST", "PUT", "PATCH", "DELETE"];
new Set(Z0);
var M1 = ["GET", ...Z0];
new Set(M1);
var ei = H.createContext(null);
ei.displayName = "DataRouter";
var fs = H.createContext(null);
fs.displayName = "DataRouterState";
var K0 = H.createContext({ isTransitioning: !1 });
K0.displayName = "ViewTransition";
var z1 = H.createContext(new Map());
z1.displayName = "Fetchers";
var U1 = H.createContext(null);
U1.displayName = "Await";
var Sn = H.createContext(null);
Sn.displayName = "Navigation";
var Su = H.createContext(null);
Su.displayName = "Location";
var Qn = H.createContext({ outlet: null, matches: [], isDataRoute: !1 });
Qn.displayName = "Route";
var Mf = H.createContext(null);
Mf.displayName = "RouteError";
function j1(s, { relative: a } = {}) {
  Yt(
    xu(),
    "useHref() may be used only in the context of a <Router> component."
  );
  let { basename: u, navigator: i } = H.useContext(Sn),
    { hash: r, pathname: o, search: h } = Eu(s, { relative: a }),
    d = o;
  return (
    u !== "/" && (d = o === "/" ? u : Yn([u, o])),
    i.createHref({ pathname: d, search: h, hash: r })
  );
}
function xu() {
  return H.useContext(Su) != null;
}
function el() {
  return (
    Yt(
      xu(),
      "useLocation() may be used only in the context of a <Router> component."
    ),
    H.useContext(Su).location
  );
}
var J0 =
  "You should call navigate() in a React.useEffect(), not when your component is first rendered.";
function F0(s) {
  H.useContext(Sn).static || H.useLayoutEffect(s);
}
function Tu() {
  let { isDataRoute: s } = H.useContext(Qn);
  return s ? J1() : B1();
}
function B1() {
  Yt(
    xu(),
    "useNavigate() may be used only in the context of a <Router> component."
  );
  let s = H.useContext(ei),
    { basename: a, navigator: u } = H.useContext(Sn),
    { matches: i } = H.useContext(Qn),
    { pathname: r } = el(),
    o = JSON.stringify(Q0(i)),
    h = H.useRef(!1);
  return (
    F0(() => {
      h.current = !0;
    }),
    H.useCallback(
      (p, m = {}) => {
        if ((vn(h.current, J0), !h.current)) return;
        if (typeof p == "number") {
          u.go(p);
          return;
        }
        let y = k0(p, JSON.parse(o), r, m.relative === "path");
        s == null &&
          a !== "/" &&
          (y.pathname = y.pathname === "/" ? a : Yn([a, y.pathname])),
          (m.replace ? u.replace : u.push)(y, m.state, m);
      },
      [a, u, o, r, s]
    )
  );
}
H.createContext(null);
function Eu(s, { relative: a } = {}) {
  let { matches: u } = H.useContext(Qn),
    { pathname: i } = el(),
    r = JSON.stringify(Q0(u));
  return H.useMemo(() => k0(s, JSON.parse(r), i, a === "path"), [s, r, i, a]);
}
function L1(s, a) {
  return $0(s, a);
}
function $0(s, a, u, i) {
  var N;
  Yt(
    xu(),
    "useRoutes() may be used only in the context of a <Router> component."
  );
  let { navigator: r, static: o } = H.useContext(Sn),
    { matches: h } = H.useContext(Qn),
    d = h[h.length - 1],
    p = d ? d.params : {},
    m = d ? d.pathname : "/",
    y = d ? d.pathnameBase : "/",
    v = d && d.route;
  {
    let M = (v && v.path) || "";
    P0(
      m,
      !v || M.endsWith("*") || M.endsWith("*?"),
      `You rendered descendant <Routes> (or called \`useRoutes()\`) at "${m}" (under <Route path="${M}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${M}"> to <Route path="${
        M === "/" ? "*" : `${M}/*`
      }">.`
    );
  }
  let S = el(),
    T;
  if (a) {
    let M = typeof a == "string" ? ti(a) : a;
    Yt(
      y === "/" || ((N = M.pathname) == null ? void 0 : N.startsWith(y)),
      `When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${y}" but pathname "${M.pathname}" was given in the \`location\` prop.`
    ),
      (T = M);
  } else T = S;
  let x = T.pathname || "/",
    b = x;
  if (y !== "/") {
    let M = y.replace(/^\//, "").split("/");
    b = "/" + x.replace(/^\//, "").split("/").slice(M.length).join("/");
  }
  let E =
    !o && u && u.matches && u.matches.length > 0
      ? u.matches
      : X0(s, { pathname: b });
  vn(
    v || E != null,
    `No routes matched location "${T.pathname}${T.search}${T.hash}" `
  ),
    vn(
      E == null ||
        E[E.length - 1].route.element !== void 0 ||
        E[E.length - 1].route.Component !== void 0 ||
        E[E.length - 1].route.lazy !== void 0,
      `Matched leaf route at location "${T.pathname}${T.search}${T.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`
    );
  let A = G1(
    E &&
      E.map((M) =>
        Object.assign({}, M, {
          params: Object.assign({}, p, M.params),
          pathname: Yn([
            y,
            r.encodeLocation
              ? r.encodeLocation(M.pathname).pathname
              : M.pathname,
          ]),
          pathnameBase:
            M.pathnameBase === "/"
              ? y
              : Yn([
                  y,
                  r.encodeLocation
                    ? r.encodeLocation(M.pathnameBase).pathname
                    : M.pathnameBase,
                ]),
        })
      ),
    h,
    u,
    i
  );
  return a && A
    ? H.createElement(
        Su.Provider,
        {
          value: {
            location: {
              pathname: "/",
              search: "",
              hash: "",
              state: null,
              key: "default",
              ...T,
            },
            navigationType: "POP",
          },
        },
        A
      )
    : A;
}
function H1() {
  let s = K1(),
    a = N1(s)
      ? `${s.status} ${s.statusText}`
      : s instanceof Error
      ? s.message
      : JSON.stringify(s),
    u = s instanceof Error ? s.stack : null,
    i = "rgba(200,200,200, 0.5)",
    r = { padding: "0.5rem", backgroundColor: i },
    o = { padding: "2px 4px", backgroundColor: i },
    h = null;
  return (
    console.error("Error handled by React Router default ErrorBoundary:", s),
    (h = H.createElement(
      H.Fragment,
      null,
      H.createElement("p", null, "💿 Hey developer 👋"),
      H.createElement(
        "p",
        null,
        "You can provide a way better UX than this when your app throws errors by providing your own ",
        H.createElement("code", { style: o }, "ErrorBoundary"),
        " or",
        " ",
        H.createElement("code", { style: o }, "errorElement"),
        " prop on your route."
      )
    )),
    H.createElement(
      H.Fragment,
      null,
      H.createElement("h2", null, "Unexpected Application Error!"),
      H.createElement("h3", { style: { fontStyle: "italic" } }, a),
      u ? H.createElement("pre", { style: r }, u) : null,
      h
    )
  );
}
var q1 = H.createElement(H1, null),
  Y1 = class extends H.Component {
    constructor(s) {
      super(s),
        (this.state = {
          location: s.location,
          revalidation: s.revalidation,
          error: s.error,
        });
    }
    static getDerivedStateFromError(s) {
      return { error: s };
    }
    static getDerivedStateFromProps(s, a) {
      return a.location !== s.location ||
        (a.revalidation !== "idle" && s.revalidation === "idle")
        ? { error: s.error, location: s.location, revalidation: s.revalidation }
        : {
            error: s.error !== void 0 ? s.error : a.error,
            location: a.location,
            revalidation: s.revalidation || a.revalidation,
          };
    }
    componentDidCatch(s, a) {
      console.error(
        "React Router caught the following error during render",
        s,
        a
      );
    }
    render() {
      return this.state.error !== void 0
        ? H.createElement(
            Qn.Provider,
            { value: this.props.routeContext },
            H.createElement(Mf.Provider, {
              value: this.state.error,
              children: this.props.component,
            })
          )
        : this.props.children;
    }
  };
function X1({ routeContext: s, match: a, children: u }) {
  let i = H.useContext(ei);
  return (
    i &&
      i.static &&
      i.staticContext &&
      (a.route.errorElement || a.route.ErrorBoundary) &&
      (i.staticContext._deepestRenderedBoundaryId = a.route.id),
    H.createElement(Qn.Provider, { value: s }, u)
  );
}
function G1(s, a = [], u = null, i = null) {
  if (s == null) {
    if (!u) return null;
    if (u.errors) s = u.matches;
    else if (a.length === 0 && !u.initialized && u.matches.length > 0)
      s = u.matches;
    else return null;
  }
  let r = s,
    o = u == null ? void 0 : u.errors;
  if (o != null) {
    let p = r.findIndex(
      (m) => m.route.id && (o == null ? void 0 : o[m.route.id]) !== void 0
    );
    Yt(
      p >= 0,
      `Could not find a matching route for errors on route IDs: ${Object.keys(
        o
      ).join(",")}`
    ),
      (r = r.slice(0, Math.min(r.length, p + 1)));
  }
  let h = !1,
    d = -1;
  if (u)
    for (let p = 0; p < r.length; p++) {
      let m = r[p];
      if (
        ((m.route.HydrateFallback || m.route.hydrateFallbackElement) && (d = p),
        m.route.id)
      ) {
        let { loaderData: y, errors: v } = u,
          S =
            m.route.loader &&
            !y.hasOwnProperty(m.route.id) &&
            (!v || v[m.route.id] === void 0);
        if (m.route.lazy || S) {
          (h = !0), d >= 0 ? (r = r.slice(0, d + 1)) : (r = [r[0]]);
          break;
        }
      }
    }
  return r.reduceRight((p, m, y) => {
    let v,
      S = !1,
      T = null,
      x = null;
    u &&
      ((v = o && m.route.id ? o[m.route.id] : void 0),
      (T = m.route.errorElement || q1),
      h &&
        (d < 0 && y === 0
          ? (P0(
              "route-fallback",
              !1,
              "No `HydrateFallback` element provided to render during initial hydration"
            ),
            (S = !0),
            (x = null))
          : d === y &&
            ((S = !0), (x = m.route.hydrateFallbackElement || null))));
    let b = a.concat(r.slice(0, y + 1)),
      E = () => {
        let A;
        return (
          v
            ? (A = T)
            : S
            ? (A = x)
            : m.route.Component
            ? (A = H.createElement(m.route.Component, null))
            : m.route.element
            ? (A = m.route.element)
            : (A = p),
          H.createElement(X1, {
            match: m,
            routeContext: { outlet: p, matches: b, isDataRoute: u != null },
            children: A,
          })
        );
      };
    return u && (m.route.ErrorBoundary || m.route.errorElement || y === 0)
      ? H.createElement(Y1, {
          location: u.location,
          revalidation: u.revalidation,
          component: T,
          error: v,
          children: E(),
          routeContext: { outlet: null, matches: b, isDataRoute: !0 },
        })
      : E();
  }, null);
}
function zf(s) {
  return `${s} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`;
}
function V1(s) {
  let a = H.useContext(ei);
  return Yt(a, zf(s)), a;
}
function Q1(s) {
  let a = H.useContext(fs);
  return Yt(a, zf(s)), a;
}
function k1(s) {
  let a = H.useContext(Qn);
  return Yt(a, zf(s)), a;
}
function Uf(s) {
  let a = k1(s),
    u = a.matches[a.matches.length - 1];
  return (
    Yt(
      u.route.id,
      `${s} can only be used on routes that contain a unique "id"`
    ),
    u.route.id
  );
}
function Z1() {
  return Uf("useRouteId");
}
function K1() {
  var i;
  let s = H.useContext(Mf),
    a = Q1("useRouteError"),
    u = Uf("useRouteError");
  return s !== void 0 ? s : (i = a.errors) == null ? void 0 : i[u];
}
function J1() {
  let { router: s } = V1("useNavigate"),
    a = Uf("useNavigate"),
    u = H.useRef(!1);
  return (
    F0(() => {
      u.current = !0;
    }),
    H.useCallback(
      async (r, o = {}) => {
        vn(u.current, J0),
          u.current &&
            (typeof r == "number"
              ? s.navigate(r)
              : await s.navigate(r, { fromRouteId: a, ...o }));
      },
      [s, a]
    )
  );
}
var c0 = {};
function P0(s, a, u) {
  !a && !c0[s] && ((c0[s] = !0), vn(!1, u));
}
H.memo(F1);
function F1({ routes: s, future: a, state: u }) {
  return $0(s, void 0, u, a);
}
function Ln(s) {
  Yt(
    !1,
    "A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>."
  );
}
function $1({
  basename: s = "/",
  children: a = null,
  location: u,
  navigationType: i = "POP",
  navigator: r,
  static: o = !1,
}) {
  Yt(
    !xu(),
    "You cannot render a <Router> inside another <Router>. You should never have more than one in your app."
  );
  let h = s.replace(/^\/*/, "/"),
    d = H.useMemo(
      () => ({ basename: h, navigator: r, static: o, future: {} }),
      [h, r, o]
    );
  typeof u == "string" && (u = ti(u));
  let {
      pathname: p = "/",
      search: m = "",
      hash: y = "",
      state: v = null,
      key: S = "default",
    } = u,
    T = H.useMemo(() => {
      let x = Xn(p, h);
      return x == null
        ? null
        : {
            location: { pathname: x, search: m, hash: y, state: v, key: S },
            navigationType: i,
          };
    }, [h, p, m, y, v, S, i]);
  return (
    vn(
      T != null,
      `<Router basename="${h}"> is not able to match the URL "${p}${m}${y}" because it does not start with the basename, so the <Router> won't render anything.`
    ),
    T == null
      ? null
      : H.createElement(
          Sn.Provider,
          { value: d },
          H.createElement(Su.Provider, { children: a, value: T })
        )
  );
}
function P1({ children: s, location: a }) {
  return L1(rf(s), a);
}
function rf(s, a = []) {
  let u = [];
  return (
    H.Children.forEach(s, (i, r) => {
      if (!H.isValidElement(i)) return;
      let o = [...a, r];
      if (i.type === H.Fragment) {
        u.push.apply(u, rf(i.props.children, o));
        return;
      }
      Yt(
        i.type === Ln,
        `[${
          typeof i.type == "string" ? i.type : i.type.name
        }] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`
      ),
        Yt(
          !i.props.index || !i.props.children,
          "An index route cannot have child routes."
        );
      let h = {
        id: i.props.id || o.join("-"),
        caseSensitive: i.props.caseSensitive,
        element: i.props.element,
        Component: i.props.Component,
        index: i.props.index,
        path: i.props.path,
        loader: i.props.loader,
        action: i.props.action,
        hydrateFallbackElement: i.props.hydrateFallbackElement,
        HydrateFallback: i.props.HydrateFallback,
        errorElement: i.props.errorElement,
        ErrorBoundary: i.props.ErrorBoundary,
        hasErrorBoundary:
          i.props.hasErrorBoundary === !0 ||
          i.props.ErrorBoundary != null ||
          i.props.errorElement != null,
        shouldRevalidate: i.props.shouldRevalidate,
        handle: i.props.handle,
        lazy: i.props.lazy,
      };
      i.props.children && (h.children = rf(i.props.children, o)), u.push(h);
    }),
    u
  );
}
var Zr = "get",
  Kr = "application/x-www-form-urlencoded";
function hs(s) {
  return s != null && typeof s.tagName == "string";
}
function W1(s) {
  return hs(s) && s.tagName.toLowerCase() === "button";
}
function I1(s) {
  return hs(s) && s.tagName.toLowerCase() === "form";
}
function tb(s) {
  return hs(s) && s.tagName.toLowerCase() === "input";
}
function eb(s) {
  return !!(s.metaKey || s.altKey || s.ctrlKey || s.shiftKey);
}
function nb(s, a) {
  return s.button === 0 && (!a || a === "_self") && !eb(s);
}
var Qr = null;
function ab() {
  if (Qr === null)
    try {
      new FormData(document.createElement("form"), 0), (Qr = !1);
    } catch {
      Qr = !0;
    }
  return Qr;
}
var lb = new Set([
  "application/x-www-form-urlencoded",
  "multipart/form-data",
  "text/plain",
]);
function Zo(s) {
  return s != null && !lb.has(s)
    ? (vn(
        !1,
        `"${s}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${Kr}"`
      ),
      null)
    : s;
}
function ib(s, a) {
  let u, i, r, o, h;
  if (I1(s)) {
    let d = s.getAttribute("action");
    (i = d ? Xn(d, a) : null),
      (u = s.getAttribute("method") || Zr),
      (r = Zo(s.getAttribute("enctype")) || Kr),
      (o = new FormData(s));
  } else if (W1(s) || (tb(s) && (s.type === "submit" || s.type === "image"))) {
    let d = s.form;
    if (d == null)
      throw new Error(
        'Cannot submit a <button> or <input type="submit"> without a <form>'
      );
    let p = s.getAttribute("formaction") || d.getAttribute("action");
    if (
      ((i = p ? Xn(p, a) : null),
      (u = s.getAttribute("formmethod") || d.getAttribute("method") || Zr),
      (r =
        Zo(s.getAttribute("formenctype")) ||
        Zo(d.getAttribute("enctype")) ||
        Kr),
      (o = new FormData(d, s)),
      !ab())
    ) {
      let { name: m, type: y, value: v } = s;
      if (y === "image") {
        let S = m ? `${m}.` : "";
        o.append(`${S}x`, "0"), o.append(`${S}y`, "0");
      } else m && o.append(m, v);
    }
  } else {
    if (hs(s))
      throw new Error(
        'Cannot submit element that is not <form>, <button>, or <input type="submit|image">'
      );
    (u = Zr), (i = null), (r = Kr), (h = s);
  }
  return (
    o && r === "text/plain" && ((h = o), (o = void 0)),
    { action: i, method: u.toLowerCase(), encType: r, formData: o, body: h }
  );
}
function jf(s, a) {
  if (s === !1 || s === null || typeof s > "u") throw new Error(a);
}
async function ub(s, a) {
  if (s.id in a) return a[s.id];
  try {
    let u = await import(s.module);
    return (a[s.id] = u), u;
  } catch (u) {
    return (
      console.error(
        `Error loading route module \`${s.module}\`, reloading page...`
      ),
      console.error(u),
      window.__reactRouterContext && window.__reactRouterContext.isSpaMode,
      window.location.reload(),
      new Promise(() => {})
    );
  }
}
function rb(s) {
  return s == null
    ? !1
    : s.href == null
    ? s.rel === "preload" &&
      typeof s.imageSrcSet == "string" &&
      typeof s.imageSizes == "string"
    : typeof s.rel == "string" && typeof s.href == "string";
}
async function sb(s, a, u) {
  let i = await Promise.all(
    s.map(async (r) => {
      let o = a.routes[r.route.id];
      if (o) {
        let h = await ub(o, u);
        return h.links ? h.links() : [];
      }
      return [];
    })
  );
  return hb(
    i
      .flat(1)
      .filter(rb)
      .filter((r) => r.rel === "stylesheet" || r.rel === "preload")
      .map((r) =>
        r.rel === "stylesheet"
          ? { ...r, rel: "prefetch", as: "style" }
          : { ...r, rel: "prefetch" }
      )
  );
}
function o0(s, a, u, i, r, o) {
  let h = (p, m) => (u[m] ? p.route.id !== u[m].route.id : !0),
    d = (p, m) => {
      var y;
      return (
        u[m].pathname !== p.pathname ||
        (((y = u[m].route.path) == null ? void 0 : y.endsWith("*")) &&
          u[m].params["*"] !== p.params["*"])
      );
    };
  return o === "assets"
    ? a.filter((p, m) => h(p, m) || d(p, m))
    : o === "data"
    ? a.filter((p, m) => {
        var v;
        let y = i.routes[p.route.id];
        if (!y || !y.hasLoader) return !1;
        if (h(p, m) || d(p, m)) return !0;
        if (p.route.shouldRevalidate) {
          let S = p.route.shouldRevalidate({
            currentUrl: new URL(r.pathname + r.search + r.hash, window.origin),
            currentParams: ((v = u[0]) == null ? void 0 : v.params) || {},
            nextUrl: new URL(s, window.origin),
            nextParams: p.params,
            defaultShouldRevalidate: !0,
          });
          if (typeof S == "boolean") return S;
        }
        return !0;
      })
    : [];
}
function cb(s, a, { includeHydrateFallback: u } = {}) {
  return ob(
    s
      .map((i) => {
        let r = a.routes[i.route.id];
        if (!r) return [];
        let o = [r.module];
        return (
          r.clientActionModule && (o = o.concat(r.clientActionModule)),
          r.clientLoaderModule && (o = o.concat(r.clientLoaderModule)),
          u &&
            r.hydrateFallbackModule &&
            (o = o.concat(r.hydrateFallbackModule)),
          r.imports && (o = o.concat(r.imports)),
          o
        );
      })
      .flat(1)
  );
}
function ob(s) {
  return [...new Set(s)];
}
function fb(s) {
  let a = {},
    u = Object.keys(s).sort();
  for (let i of u) a[i] = s[i];
  return a;
}
function hb(s, a) {
  let u = new Set();
  return (
    new Set(a),
    s.reduce((i, r) => {
      let o = JSON.stringify(fb(r));
      return u.has(o) || (u.add(o), i.push({ key: o, link: r })), i;
    }, [])
  );
}
function db(s, a) {
  let u =
    typeof s == "string"
      ? new URL(
          s,
          typeof window > "u" ? "server://singlefetch/" : window.location.origin
        )
      : s;
  return (
    u.pathname === "/"
      ? (u.pathname = "_root.data")
      : a && Xn(u.pathname, a) === "/"
      ? (u.pathname = `${a.replace(/\/$/, "")}/_root.data`)
      : (u.pathname = `${u.pathname.replace(/\/$/, "")}.data`),
    u
  );
}
function W0() {
  let s = H.useContext(ei);
  return (
    jf(
      s,
      "You must render this element inside a <DataRouterContext.Provider> element"
    ),
    s
  );
}
function mb() {
  let s = H.useContext(fs);
  return (
    jf(
      s,
      "You must render this element inside a <DataRouterStateContext.Provider> element"
    ),
    s
  );
}
var Bf = H.createContext(void 0);
Bf.displayName = "FrameworkContext";
function I0() {
  let s = H.useContext(Bf);
  return (
    jf(s, "You must render this element inside a <HydratedRouter> element"), s
  );
}
function pb(s, a) {
  let u = H.useContext(Bf),
    [i, r] = H.useState(!1),
    [o, h] = H.useState(!1),
    {
      onFocus: d,
      onBlur: p,
      onMouseEnter: m,
      onMouseLeave: y,
      onTouchStart: v,
    } = a,
    S = H.useRef(null);
  H.useEffect(() => {
    if ((s === "render" && h(!0), s === "viewport")) {
      let b = (A) => {
          A.forEach((N) => {
            h(N.isIntersecting);
          });
        },
        E = new IntersectionObserver(b, { threshold: 0.5 });
      return (
        S.current && E.observe(S.current),
        () => {
          E.disconnect();
        }
      );
    }
  }, [s]),
    H.useEffect(() => {
      if (i) {
        let b = setTimeout(() => {
          h(!0);
        }, 100);
        return () => {
          clearTimeout(b);
        };
      }
    }, [i]);
  let T = () => {
      r(!0);
    },
    x = () => {
      r(!1), h(!1);
    };
  return u
    ? s !== "intent"
      ? [o, S, {}]
      : [
          o,
          S,
          {
            onFocus: lu(d, T),
            onBlur: lu(p, x),
            onMouseEnter: lu(m, T),
            onMouseLeave: lu(y, x),
            onTouchStart: lu(v, T),
          },
        ]
    : [!1, S, {}];
}
function lu(s, a) {
  return (u) => {
    s && s(u), u.defaultPrevented || a(u);
  };
}
function yb({ page: s, ...a }) {
  let { router: u } = W0(),
    i = H.useMemo(() => X0(u.routes, s, u.basename), [u.routes, s, u.basename]);
  return i ? H.createElement(_b, { page: s, matches: i, ...a }) : null;
}
function gb(s) {
  let { manifest: a, routeModules: u } = I0(),
    [i, r] = H.useState([]);
  return (
    H.useEffect(() => {
      let o = !1;
      return (
        sb(s, a, u).then((h) => {
          o || r(h);
        }),
        () => {
          o = !0;
        }
      );
    }, [s, a, u]),
    i
  );
}
function _b({ page: s, matches: a, ...u }) {
  let i = el(),
    { manifest: r, routeModules: o } = I0(),
    { basename: h } = W0(),
    { loaderData: d, matches: p } = mb(),
    m = H.useMemo(() => o0(s, a, p, r, i, "data"), [s, a, p, r, i]),
    y = H.useMemo(() => o0(s, a, p, r, i, "assets"), [s, a, p, r, i]),
    v = H.useMemo(() => {
      if (s === i.pathname + i.search + i.hash) return [];
      let x = new Set(),
        b = !1;
      if (
        (a.forEach((A) => {
          var M;
          let N = r.routes[A.route.id];
          !N ||
            !N.hasLoader ||
            ((!m.some((G) => G.route.id === A.route.id) &&
              A.route.id in d &&
              (M = o[A.route.id]) != null &&
              M.shouldRevalidate) ||
            N.hasClientLoader
              ? (b = !0)
              : x.add(A.route.id));
        }),
        x.size === 0)
      )
        return [];
      let E = db(s, h);
      return (
        b &&
          x.size > 0 &&
          E.searchParams.set(
            "_routes",
            a
              .filter((A) => x.has(A.route.id))
              .map((A) => A.route.id)
              .join(",")
          ),
        [E.pathname + E.search]
      );
    }, [h, d, i, r, m, a, s, o]),
    S = H.useMemo(() => cb(y, r), [y, r]),
    T = gb(y);
  return H.createElement(
    H.Fragment,
    null,
    v.map((x) =>
      H.createElement("link", {
        key: x,
        rel: "prefetch",
        as: "fetch",
        href: x,
        ...u,
      })
    ),
    S.map((x) =>
      H.createElement("link", { key: x, rel: "modulepreload", href: x, ...u })
    ),
    T.map(({ key: x, link: b }) => H.createElement("link", { key: x, ...b }))
  );
}
function vb(...s) {
  return (a) => {
    s.forEach((u) => {
      typeof u == "function" ? u(a) : u != null && (u.current = a);
    });
  };
}
var ty =
  typeof window < "u" &&
  typeof window.document < "u" &&
  typeof window.document.createElement < "u";
try {
  ty && (window.__reactRouterVersion = "7.5.0");
} catch {}
function bb({ basename: s, children: a, window: u }) {
  let i = H.useRef();
  i.current == null && (i.current = c1({ window: u, v5Compat: !0 }));
  let r = i.current,
    [o, h] = H.useState({ action: r.action, location: r.location }),
    d = H.useCallback(
      (p) => {
        H.startTransition(() => h(p));
      },
      [h]
    );
  return (
    H.useLayoutEffect(() => r.listen(d), [r, d]),
    H.createElement($1, {
      basename: s,
      children: a,
      location: o.location,
      navigationType: o.action,
      navigator: r,
    })
  );
}
var ey = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,
  Ou = H.forwardRef(function (
    {
      onClick: a,
      discover: u = "render",
      prefetch: i = "none",
      relative: r,
      reloadDocument: o,
      replace: h,
      state: d,
      target: p,
      to: m,
      preventScrollReset: y,
      viewTransition: v,
      ...S
    },
    T
  ) {
    let { basename: x } = H.useContext(Sn),
      b = typeof m == "string" && ey.test(m),
      E,
      A = !1;
    if (typeof m == "string" && b && ((E = m), ty))
      try {
        let K = new URL(window.location.href),
          ut = m.startsWith("//") ? new URL(K.protocol + m) : new URL(m),
          mt = Xn(ut.pathname, x);
        ut.origin === K.origin && mt != null
          ? (m = mt + ut.search + ut.hash)
          : (A = !0);
      } catch {
        vn(
          !1,
          `<Link to="${m}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`
        );
      }
    let N = j1(m, { relative: r }),
      [M, G, U] = pb(i, S),
      X = Tb(m, {
        replace: h,
        state: d,
        target: p,
        preventScrollReset: y,
        relative: r,
        viewTransition: v,
      });
    function k(K) {
      a && a(K), K.defaultPrevented || X(K);
    }
    let F = H.createElement("a", {
      ...S,
      ...U,
      href: E || N,
      onClick: A || o ? a : k,
      ref: vb(T, G),
      target: p,
      "data-discover": !b && u === "render" ? "true" : void 0,
    });
    return M && !b
      ? H.createElement(H.Fragment, null, F, H.createElement(yb, { page: N }))
      : F;
  });
Ou.displayName = "Link";
var ya = H.forwardRef(function (
  {
    "aria-current": a = "page",
    caseSensitive: u = !1,
    className: i = "",
    end: r = !1,
    style: o,
    to: h,
    viewTransition: d,
    children: p,
    ...m
  },
  y
) {
  let v = Eu(h, { relative: m.relative }),
    S = el(),
    T = H.useContext(fs),
    { navigator: x, basename: b } = H.useContext(Sn),
    E = T != null && wb(v) && d === !0,
    A = x.encodeLocation ? x.encodeLocation(v).pathname : v.pathname,
    N = S.pathname,
    M =
      T && T.navigation && T.navigation.location
        ? T.navigation.location.pathname
        : null;
  u ||
    ((N = N.toLowerCase()),
    (M = M ? M.toLowerCase() : null),
    (A = A.toLowerCase())),
    M && b && (M = Xn(M, b) || M);
  const G = A !== "/" && A.endsWith("/") ? A.length - 1 : A.length;
  let U = N === A || (!r && N.startsWith(A) && N.charAt(G) === "/"),
    X =
      M != null &&
      (M === A || (!r && M.startsWith(A) && M.charAt(A.length) === "/")),
    k = { isActive: U, isPending: X, isTransitioning: E },
    F = U ? a : void 0,
    K;
  typeof i == "function"
    ? (K = i(k))
    : (K = [
        i,
        U ? "active" : null,
        X ? "pending" : null,
        E ? "transitioning" : null,
      ]
        .filter(Boolean)
        .join(" "));
  let ut = typeof o == "function" ? o(k) : o;
  return H.createElement(
    Ou,
    {
      ...m,
      "aria-current": F,
      className: K,
      ref: y,
      style: ut,
      to: h,
      viewTransition: d,
    },
    typeof p == "function" ? p(k) : p
  );
});
ya.displayName = "NavLink";
var Sb = H.forwardRef(
  (
    {
      discover: s = "render",
      fetcherKey: a,
      navigate: u,
      reloadDocument: i,
      replace: r,
      state: o,
      method: h = Zr,
      action: d,
      onSubmit: p,
      relative: m,
      preventScrollReset: y,
      viewTransition: v,
      ...S
    },
    T
  ) => {
    let x = Rb(),
      b = Ab(d, { relative: m }),
      E = h.toLowerCase() === "get" ? "get" : "post",
      A = typeof d == "string" && ey.test(d),
      N = (M) => {
        if ((p && p(M), M.defaultPrevented)) return;
        M.preventDefault();
        let G = M.nativeEvent.submitter,
          U = (G == null ? void 0 : G.getAttribute("formmethod")) || h;
        x(G || M.currentTarget, {
          fetcherKey: a,
          method: U,
          navigate: u,
          replace: r,
          state: o,
          relative: m,
          preventScrollReset: y,
          viewTransition: v,
        });
      };
    return H.createElement("form", {
      ref: T,
      method: E,
      action: b,
      onSubmit: i ? p : N,
      ...S,
      "data-discover": !A && s === "render" ? "true" : void 0,
    });
  }
);
Sb.displayName = "Form";
function xb(s) {
  return `${s} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`;
}
function ny(s) {
  let a = H.useContext(ei);
  return Yt(a, xb(s)), a;
}
function Tb(
  s,
  {
    target: a,
    replace: u,
    state: i,
    preventScrollReset: r,
    relative: o,
    viewTransition: h,
  } = {}
) {
  let d = Tu(),
    p = el(),
    m = Eu(s, { relative: o });
  return H.useCallback(
    (y) => {
      if (nb(y, a)) {
        y.preventDefault();
        let v = u !== void 0 ? u : hu(p) === hu(m);
        d(s, {
          replace: v,
          state: i,
          preventScrollReset: r,
          relative: o,
          viewTransition: h,
        });
      }
    },
    [p, d, m, u, i, a, s, r, o, h]
  );
}
var Eb = 0,
  Ob = () => `__${String(++Eb)}__`;
function Rb() {
  let { router: s } = ny("useSubmit"),
    { basename: a } = H.useContext(Sn),
    u = Z1();
  return H.useCallback(
    async (i, r = {}) => {
      let { action: o, method: h, encType: d, formData: p, body: m } = ib(i, a);
      if (r.navigate === !1) {
        let y = r.fetcherKey || Ob();
        await s.fetch(y, u, r.action || o, {
          preventScrollReset: r.preventScrollReset,
          formData: p,
          body: m,
          formMethod: r.method || h,
          formEncType: r.encType || d,
          flushSync: r.flushSync,
        });
      } else
        await s.navigate(r.action || o, {
          preventScrollReset: r.preventScrollReset,
          formData: p,
          body: m,
          formMethod: r.method || h,
          formEncType: r.encType || d,
          replace: r.replace,
          state: r.state,
          fromRouteId: u,
          flushSync: r.flushSync,
          viewTransition: r.viewTransition,
        });
    },
    [s, a, u]
  );
}
function Ab(s, { relative: a } = {}) {
  let { basename: u } = H.useContext(Sn),
    i = H.useContext(Qn);
  Yt(i, "useFormAction must be used inside a RouteContext");
  let [r] = i.matches.slice(-1),
    o = { ...Eu(s || ".", { relative: a }) },
    h = el();
  if (s == null) {
    o.search = h.search;
    let d = new URLSearchParams(o.search),
      p = d.getAll("index");
    if (p.some((y) => y === "")) {
      d.delete("index"),
        p.filter((v) => v).forEach((v) => d.append("index", v));
      let y = d.toString();
      o.search = y ? `?${y}` : "";
    }
  }
  return (
    (!s || s === ".") &&
      r.route.index &&
      (o.search = o.search ? o.search.replace(/^\?/, "?index&") : "?index"),
    u !== "/" && (o.pathname = o.pathname === "/" ? u : Yn([u, o.pathname])),
    hu(o)
  );
}
function wb(s, a = {}) {
  let u = H.useContext(K0);
  Yt(
    u != null,
    "`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?"
  );
  let { basename: i } = ny("useViewTransitionState"),
    r = Eu(s, { relative: a.relative });
  if (!u.isTransitioning) return !1;
  let o = Xn(u.currentLocation.pathname, i) || u.currentLocation.pathname,
    h = Xn(u.nextLocation.pathname, i) || u.nextLocation.pathname;
  return ts(r.pathname, h) != null || ts(r.pathname, o) != null;
}
new TextEncoder();
function Hn(s) {
  if (s === void 0)
    throw new ReferenceError(
      "this hasn't been initialised - super() hasn't been called"
    );
  return s;
}
function ay(s, a) {
  (s.prototype = Object.create(a.prototype)),
    (s.prototype.constructor = s),
    (s.__proto__ = a);
}
/*!
 * GSAP 3.12.7
 * https://gsap.com
 *
 * @license Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
 */ var Xe = {
    autoSleep: 120,
    force3D: "auto",
    nullTargetWarn: 1,
    units: { lineHeight: "" },
  },
  Jl = { duration: 0.5, overwrite: !1, delay: 0 },
  Lf,
  re,
  Bt,
  gn = 1e8,
  de = 1 / gn,
  sf = Math.PI * 2,
  Db = sf / 4,
  Cb = 0,
  ly = Math.sqrt,
  Nb = Math.cos,
  Mb = Math.sin,
  ae = function (a) {
    return typeof a == "string";
  },
  Vt = function (a) {
    return typeof a == "function";
  },
  Gn = function (a) {
    return typeof a == "number";
  },
  Hf = function (a) {
    return typeof a > "u";
  },
  bn = function (a) {
    return typeof a == "object";
  },
  xe = function (a) {
    return a !== !1;
  },
  qf = function () {
    return typeof window < "u";
  },
  kr = function (a) {
    return Vt(a) || ae(a);
  },
  iy =
    (typeof ArrayBuffer == "function" && ArrayBuffer.isView) || function () {},
  me = Array.isArray,
  cf = /(?:-?\.?\d|\.)+/gi,
  uy = /[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,
  Vl = /[-+=.]*\d+[.e-]*\d*[a-z%]*/g,
  Ko = /[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,
  ry = /[+-]=-?[.\d]+/,
  sy = /[^,'"\[\]\s]+/gi,
  zb = /^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,
  Ht,
  mn,
  of,
  Yf,
  Ve = {},
  es = {},
  cy,
  oy = function (a) {
    return (es = Fl(a, Ve)) && Ae;
  },
  Xf = function (a, u) {
    return console.warn(
      "Invalid property",
      a,
      "set to",
      u,
      "Missing plugin? gsap.registerPlugin()"
    );
  },
  du = function (a, u) {
    return !u && console.warn(a);
  },
  fy = function (a, u) {
    return (a && (Ve[a] = u) && es && (es[a] = u)) || Ve;
  },
  mu = function () {
    return 0;
  },
  Ub = { suppressEvents: !0, isStart: !0, kill: !1 },
  Jr = { suppressEvents: !0, kill: !1 },
  jb = { suppressEvents: !0 },
  Gf = {},
  ba = [],
  ff = {},
  hy,
  He = {},
  Jo = {},
  f0 = 30,
  Fr = [],
  Vf = "",
  Qf = function (a) {
    var u = a[0],
      i,
      r;
    if ((bn(u) || Vt(u) || (a = [a]), !(i = (u._gsap || {}).harness))) {
      for (r = Fr.length; r-- && !Fr[r].targetTest(u); );
      i = Fr[r];
    }
    for (r = a.length; r--; )
      (a[r] && (a[r]._gsap || (a[r]._gsap = new By(a[r], i)))) ||
        a.splice(r, 1);
    return a;
  },
  Ja = function (a) {
    return a._gsap || Qf(en(a))[0]._gsap;
  },
  dy = function (a, u, i) {
    return (i = a[u]) && Vt(i)
      ? a[u]()
      : (Hf(i) && a.getAttribute && a.getAttribute(u)) || i;
  },
  Te = function (a, u) {
    return (a = a.split(",")).forEach(u) || a;
  },
  Zt = function (a) {
    return Math.round(a * 1e5) / 1e5 || 0;
  },
  $t = function (a) {
    return Math.round(a * 1e7) / 1e7 || 0;
  },
  kl = function (a, u) {
    var i = u.charAt(0),
      r = parseFloat(u.substr(2));
    return (
      (a = parseFloat(a)),
      i === "+" ? a + r : i === "-" ? a - r : i === "*" ? a * r : a / r
    );
  },
  Bb = function (a, u) {
    for (var i = u.length, r = 0; a.indexOf(u[r]) < 0 && ++r < i; );
    return r < i;
  },
  ns = function () {
    var a = ba.length,
      u = ba.slice(0),
      i,
      r;
    for (ff = {}, ba.length = 0, i = 0; i < a; i++)
      (r = u[i]),
        r && r._lazy && (r.render(r._lazy[0], r._lazy[1], !0)._lazy = 0);
  },
  my = function (a, u, i, r) {
    ba.length && !re && ns(),
      a.render(u, i, re && u < 0 && (a._initted || a._startAt)),
      ba.length && !re && ns();
  },
  py = function (a) {
    var u = parseFloat(a);
    return (u || u === 0) && (a + "").match(sy).length < 2
      ? u
      : ae(a)
      ? a.trim()
      : a;
  },
  yy = function (a) {
    return a;
  },
  Qe = function (a, u) {
    for (var i in u) i in a || (a[i] = u[i]);
    return a;
  },
  Lb = function (a) {
    return function (u, i) {
      for (var r in i)
        r in u || (r === "duration" && a) || r === "ease" || (u[r] = i[r]);
    };
  },
  Fl = function (a, u) {
    for (var i in u) a[i] = u[i];
    return a;
  },
  h0 = function s(a, u) {
    for (var i in u)
      i !== "__proto__" &&
        i !== "constructor" &&
        i !== "prototype" &&
        (a[i] = bn(u[i]) ? s(a[i] || (a[i] = {}), u[i]) : u[i]);
    return a;
  },
  as = function (a, u) {
    var i = {},
      r;
    for (r in a) r in u || (i[r] = a[r]);
    return i;
  },
  cu = function (a) {
    var u = a.parent || Ht,
      i = a.keyframes ? Lb(me(a.keyframes)) : Qe;
    if (xe(a.inherit))
      for (; u; ) i(a, u.vars.defaults), (u = u.parent || u._dp);
    return a;
  },
  Hb = function (a, u) {
    for (var i = a.length, r = i === u.length; r && i-- && a[i] === u[i]; );
    return i < 0;
  },
  gy = function (a, u, i, r, o) {
    var h = a[r],
      d;
    if (o) for (d = u[o]; h && h[o] > d; ) h = h._prev;
    return (
      h ? ((u._next = h._next), (h._next = u)) : ((u._next = a[i]), (a[i] = u)),
      u._next ? (u._next._prev = u) : (a[r] = u),
      (u._prev = h),
      (u.parent = u._dp = a),
      u
    );
  },
  ds = function (a, u, i, r) {
    i === void 0 && (i = "_first"), r === void 0 && (r = "_last");
    var o = u._prev,
      h = u._next;
    o ? (o._next = h) : a[i] === u && (a[i] = h),
      h ? (h._prev = o) : a[r] === u && (a[r] = o),
      (u._next = u._prev = u.parent = null);
  },
  xa = function (a, u) {
    a.parent &&
      (!u || a.parent.autoRemoveChildren) &&
      a.parent.remove &&
      a.parent.remove(a),
      (a._act = 0);
  },
  Fa = function (a, u) {
    if (a && (!u || u._end > a._dur || u._start < 0))
      for (var i = a; i; ) (i._dirty = 1), (i = i.parent);
    return a;
  },
  qb = function (a) {
    for (var u = a.parent; u && u.parent; )
      (u._dirty = 1), u.totalDuration(), (u = u.parent);
    return a;
  },
  hf = function (a, u, i, r) {
    return (
      a._startAt &&
      (re
        ? a._startAt.revert(Jr)
        : (a.vars.immediateRender && !a.vars.autoRevert) ||
          a._startAt.render(u, !0, r))
    );
  },
  Yb = function s(a) {
    return !a || (a._ts && s(a.parent));
  },
  d0 = function (a) {
    return a._repeat ? $l(a._tTime, (a = a.duration() + a._rDelay)) * a : 0;
  },
  $l = function (a, u) {
    var i = Math.floor((a = $t(a / u)));
    return a && i === a ? i - 1 : i;
  },
  ls = function (a, u) {
    return (
      (a - u._start) * u._ts +
      (u._ts >= 0 ? 0 : u._dirty ? u.totalDuration() : u._tDur)
    );
  },
  ms = function (a) {
    return (a._end = $t(
      a._start + (a._tDur / Math.abs(a._ts || a._rts || de) || 0)
    ));
  },
  ps = function (a, u) {
    var i = a._dp;
    return (
      i &&
        i.smoothChildTiming &&
        a._ts &&
        ((a._start = $t(
          i._time -
            (a._ts > 0
              ? u / a._ts
              : ((a._dirty ? a.totalDuration() : a._tDur) - u) / -a._ts)
        )),
        ms(a),
        i._dirty || Fa(i, a)),
      a
    );
  },
  _y = function (a, u) {
    var i;
    if (
      ((u._time ||
        (!u._dur && u._initted) ||
        (u._start < a._time && (u._dur || !u.add))) &&
        ((i = ls(a.rawTime(), u)),
        (!u._dur || Ru(0, u.totalDuration(), i) - u._tTime > de) &&
          u.render(i, !0)),
      Fa(a, u)._dp && a._initted && a._time >= a._dur && a._ts)
    ) {
      if (a._dur < a.duration())
        for (i = a; i._dp; )
          i.rawTime() >= 0 && i.totalTime(i._tTime), (i = i._dp);
      a._zTime = -1e-8;
    }
  },
  pn = function (a, u, i, r) {
    return (
      u.parent && xa(u),
      (u._start = $t(
        (Gn(i) ? i : i || a !== Ht ? tn(a, i, u) : a._time) + u._delay
      )),
      (u._end = $t(
        u._start + (u.totalDuration() / Math.abs(u.timeScale()) || 0)
      )),
      gy(a, u, "_first", "_last", a._sort ? "_start" : 0),
      df(u) || (a._recent = u),
      r || _y(a, u),
      a._ts < 0 && ps(a, a._tTime),
      a
    );
  },
  vy = function (a, u) {
    return (
      (Ve.ScrollTrigger || Xf("scrollTrigger", u)) &&
      Ve.ScrollTrigger.create(u, a)
    );
  },
  by = function (a, u, i, r, o) {
    if ((Zf(a, u, o), !a._initted)) return 1;
    if (
      !i &&
      a._pt &&
      !re &&
      ((a._dur && a.vars.lazy !== !1) || (!a._dur && a.vars.lazy)) &&
      hy !== qe.frame
    )
      return ba.push(a), (a._lazy = [o, r]), 1;
  },
  Xb = function s(a) {
    var u = a.parent;
    return u && u._ts && u._initted && !u._lock && (u.rawTime() < 0 || s(u));
  },
  df = function (a) {
    var u = a.data;
    return u === "isFromStart" || u === "isStart";
  },
  Gb = function (a, u, i, r) {
    var o = a.ratio,
      h =
        u < 0 ||
        (!u &&
          ((!a._start && Xb(a) && !(!a._initted && df(a))) ||
            ((a._ts < 0 || a._dp._ts < 0) && !df(a))))
          ? 0
          : 1,
      d = a._rDelay,
      p = 0,
      m,
      y,
      v;
    if (
      (d &&
        a._repeat &&
        ((p = Ru(0, a._tDur, u)),
        (y = $l(p, d)),
        a._yoyo && y & 1 && (h = 1 - h),
        y !== $l(a._tTime, d) &&
          ((o = 1 - h), a.vars.repeatRefresh && a._initted && a.invalidate())),
      h !== o || re || r || a._zTime === de || (!u && a._zTime))
    ) {
      if (!a._initted && by(a, u, r, i, p)) return;
      for (
        v = a._zTime,
          a._zTime = u || (i ? de : 0),
          i || (i = u && !v),
          a.ratio = h,
          a._from && (h = 1 - h),
          a._time = 0,
          a._tTime = p,
          m = a._pt;
        m;

      )
        m.r(h, m.d), (m = m._next);
      u < 0 && hf(a, u, i, !0),
        a._onUpdate && !i && Ye(a, "onUpdate"),
        p && a._repeat && !i && a.parent && Ye(a, "onRepeat"),
        (u >= a._tDur || u < 0) &&
          a.ratio === h &&
          (h && xa(a, 1),
          !i &&
            !re &&
            (Ye(a, h ? "onComplete" : "onReverseComplete", !0),
            a._prom && a._prom()));
    } else a._zTime || (a._zTime = u);
  },
  Vb = function (a, u, i) {
    var r;
    if (i > u)
      for (r = a._first; r && r._start <= i; ) {
        if (r.data === "isPause" && r._start > u) return r;
        r = r._next;
      }
    else
      for (r = a._last; r && r._start >= i; ) {
        if (r.data === "isPause" && r._start < u) return r;
        r = r._prev;
      }
  },
  Pl = function (a, u, i, r) {
    var o = a._repeat,
      h = $t(u) || 0,
      d = a._tTime / a._tDur;
    return (
      d && !r && (a._time *= h / a._dur),
      (a._dur = h),
      (a._tDur = o ? (o < 0 ? 1e10 : $t(h * (o + 1) + a._rDelay * o)) : h),
      d > 0 && !r && ps(a, (a._tTime = a._tDur * d)),
      a.parent && ms(a),
      i || Fa(a.parent, a),
      a
    );
  },
  m0 = function (a) {
    return a instanceof ye ? Fa(a) : Pl(a, a._dur);
  },
  Qb = { _start: 0, endTime: mu, totalDuration: mu },
  tn = function s(a, u, i) {
    var r = a.labels,
      o = a._recent || Qb,
      h = a.duration() >= gn ? o.endTime(!1) : a._dur,
      d,
      p,
      m;
    return ae(u) && (isNaN(u) || u in r)
      ? ((p = u.charAt(0)),
        (m = u.substr(-1) === "%"),
        (d = u.indexOf("=")),
        p === "<" || p === ">"
          ? (d >= 0 && (u = u.replace(/=/, "")),
            (p === "<" ? o._start : o.endTime(o._repeat >= 0)) +
              (parseFloat(u.substr(1)) || 0) *
                (m ? (d < 0 ? o : i).totalDuration() / 100 : 1))
          : d < 0
          ? (u in r || (r[u] = h), r[u])
          : ((p = parseFloat(u.charAt(d - 1) + u.substr(d + 1))),
            m && i && (p = (p / 100) * (me(i) ? i[0] : i).totalDuration()),
            d > 1 ? s(a, u.substr(0, d - 1), i) + p : h + p))
      : u == null
      ? h
      : +u;
  },
  ou = function (a, u, i) {
    var r = Gn(u[1]),
      o = (r ? 2 : 1) + (a < 2 ? 0 : 1),
      h = u[o],
      d,
      p;
    if ((r && (h.duration = u[1]), (h.parent = i), a)) {
      for (d = h, p = i; p && !("immediateRender" in d); )
        (d = p.vars.defaults || {}), (p = xe(p.vars.inherit) && p.parent);
      (h.immediateRender = xe(d.immediateRender)),
        a < 2 ? (h.runBackwards = 1) : (h.startAt = u[o - 1]);
    }
    return new Ft(u[0], h, u[o + 1]);
  },
  Ea = function (a, u) {
    return a || a === 0 ? u(a) : u;
  },
  Ru = function (a, u, i) {
    return i < a ? a : i > u ? u : i;
  },
  fe = function (a, u) {
    return !ae(a) || !(u = zb.exec(a)) ? "" : u[1];
  },
  kb = function (a, u, i) {
    return Ea(i, function (r) {
      return Ru(a, u, r);
    });
  },
  mf = [].slice,
  Sy = function (a, u) {
    return (
      a &&
      bn(a) &&
      "length" in a &&
      ((!u && !a.length) || (a.length - 1 in a && bn(a[0]))) &&
      !a.nodeType &&
      a !== mn
    );
  },
  Zb = function (a, u, i) {
    return (
      i === void 0 && (i = []),
      a.forEach(function (r) {
        var o;
        return (ae(r) && !u) || Sy(r, 1)
          ? (o = i).push.apply(o, en(r))
          : i.push(r);
      }) || i
    );
  },
  en = function (a, u, i) {
    return Bt && !u && Bt.selector
      ? Bt.selector(a)
      : ae(a) && !i && (of || !Wl())
      ? mf.call((u || Yf).querySelectorAll(a), 0)
      : me(a)
      ? Zb(a, i)
      : Sy(a)
      ? mf.call(a, 0)
      : a
      ? [a]
      : [];
  },
  pf = function (a) {
    return (
      (a = en(a)[0] || du("Invalid scope") || {}),
      function (u) {
        var i = a.current || a.nativeElement || a;
        return en(
          u,
          i.querySelectorAll
            ? i
            : i === a
            ? du("Invalid scope") || Yf.createElement("div")
            : a
        );
      }
    );
  },
  xy = function (a) {
    return a.sort(function () {
      return 0.5 - Math.random();
    });
  },
  Ty = function (a) {
    if (Vt(a)) return a;
    var u = bn(a) ? a : { each: a },
      i = $a(u.ease),
      r = u.from || 0,
      o = parseFloat(u.base) || 0,
      h = {},
      d = r > 0 && r < 1,
      p = isNaN(r) || d,
      m = u.axis,
      y = r,
      v = r;
    return (
      ae(r)
        ? (y = v = { center: 0.5, edges: 0.5, end: 1 }[r] || 0)
        : !d && p && ((y = r[0]), (v = r[1])),
      function (S, T, x) {
        var b = (x || u).length,
          E = h[b],
          A,
          N,
          M,
          G,
          U,
          X,
          k,
          F,
          K;
        if (!E) {
          if (((K = u.grid === "auto" ? 0 : (u.grid || [1, gn])[1]), !K)) {
            for (
              k = -1e8;
              k < (k = x[K++].getBoundingClientRect().left) && K < b;

            );
            K < b && K--;
          }
          for (
            E = h[b] = [],
              A = p ? Math.min(K, b) * y - 0.5 : r % K,
              N = K === gn ? 0 : p ? (b * v) / K - 0.5 : (r / K) | 0,
              k = 0,
              F = gn,
              X = 0;
            X < b;
            X++
          )
            (M = (X % K) - A),
              (G = N - ((X / K) | 0)),
              (E[X] = U = m ? Math.abs(m === "y" ? G : M) : ly(M * M + G * G)),
              U > k && (k = U),
              U < F && (F = U);
          r === "random" && xy(E),
            (E.max = k - F),
            (E.min = F),
            (E.v = b =
              (parseFloat(u.amount) ||
                parseFloat(u.each) *
                  (K > b
                    ? b - 1
                    : m
                    ? m === "y"
                      ? b / K
                      : K
                    : Math.max(K, b / K)) ||
                0) * (r === "edges" ? -1 : 1)),
            (E.b = b < 0 ? o - b : o),
            (E.u = fe(u.amount || u.each) || 0),
            (i = i && b < 0 ? zy(i) : i);
        }
        return (
          (b = (E[S] - E.min) / E.max || 0),
          $t(E.b + (i ? i(b) : b) * E.v) + E.u
        );
      }
    );
  },
  yf = function (a) {
    var u = Math.pow(10, ((a + "").split(".")[1] || "").length);
    return function (i) {
      var r = $t(Math.round(parseFloat(i) / a) * a * u);
      return (r - (r % 1)) / u + (Gn(i) ? 0 : fe(i));
    };
  },
  Ey = function (a, u) {
    var i = me(a),
      r,
      o;
    return (
      !i &&
        bn(a) &&
        ((r = i = a.radius || gn),
        a.values
          ? ((a = en(a.values)), (o = !Gn(a[0])) && (r *= r))
          : (a = yf(a.increment))),
      Ea(
        u,
        i
          ? Vt(a)
            ? function (h) {
                return (o = a(h)), Math.abs(o - h) <= r ? o : h;
              }
            : function (h) {
                for (
                  var d = parseFloat(o ? h.x : h),
                    p = parseFloat(o ? h.y : 0),
                    m = gn,
                    y = 0,
                    v = a.length,
                    S,
                    T;
                  v--;

                )
                  o
                    ? ((S = a[v].x - d), (T = a[v].y - p), (S = S * S + T * T))
                    : (S = Math.abs(a[v] - d)),
                    S < m && ((m = S), (y = v));
                return (
                  (y = !r || m <= r ? a[y] : h),
                  o || y === h || Gn(h) ? y : y + fe(h)
                );
              }
          : yf(a)
      )
    );
  },
  Oy = function (a, u, i, r) {
    return Ea(me(a) ? !u : i === !0 ? !!(i = 0) : !r, function () {
      return me(a)
        ? a[~~(Math.random() * a.length)]
        : (i = i || 1e-5) &&
            (r = i < 1 ? Math.pow(10, (i + "").length - 2) : 1) &&
            Math.floor(
              Math.round((a - i / 2 + Math.random() * (u - a + i * 0.99)) / i) *
                i *
                r
            ) / r;
    });
  },
  Kb = function () {
    for (var a = arguments.length, u = new Array(a), i = 0; i < a; i++)
      u[i] = arguments[i];
    return function (r) {
      return u.reduce(function (o, h) {
        return h(o);
      }, r);
    };
  },
  Jb = function (a, u) {
    return function (i) {
      return a(parseFloat(i)) + (u || fe(i));
    };
  },
  Fb = function (a, u, i) {
    return Ay(a, u, 0, 1, i);
  },
  Ry = function (a, u, i) {
    return Ea(i, function (r) {
      return a[~~u(r)];
    });
  },
  $b = function s(a, u, i) {
    var r = u - a;
    return me(a)
      ? Ry(a, s(0, a.length), u)
      : Ea(i, function (o) {
          return ((r + ((o - a) % r)) % r) + a;
        });
  },
  Pb = function s(a, u, i) {
    var r = u - a,
      o = r * 2;
    return me(a)
      ? Ry(a, s(0, a.length - 1), u)
      : Ea(i, function (h) {
          return (h = (o + ((h - a) % o)) % o || 0), a + (h > r ? o - h : h);
        });
  },
  pu = function (a) {
    for (var u = 0, i = "", r, o, h, d; ~(r = a.indexOf("random(", u)); )
      (h = a.indexOf(")", r)),
        (d = a.charAt(r + 7) === "["),
        (o = a.substr(r + 7, h - r - 7).match(d ? sy : cf)),
        (i +=
          a.substr(u, r - u) + Oy(d ? o : +o[0], d ? 0 : +o[1], +o[2] || 1e-5)),
        (u = h + 1);
    return i + a.substr(u, a.length - u);
  },
  Ay = function (a, u, i, r, o) {
    var h = u - a,
      d = r - i;
    return Ea(o, function (p) {
      return i + (((p - a) / h) * d || 0);
    });
  },
  Wb = function s(a, u, i, r) {
    var o = isNaN(a + u)
      ? 0
      : function (T) {
          return (1 - T) * a + T * u;
        };
    if (!o) {
      var h = ae(a),
        d = {},
        p,
        m,
        y,
        v,
        S;
      if ((i === !0 && (r = 1) && (i = null), h))
        (a = { p: a }), (u = { p: u });
      else if (me(a) && !me(u)) {
        for (y = [], v = a.length, S = v - 2, m = 1; m < v; m++)
          y.push(s(a[m - 1], a[m]));
        v--,
          (o = function (x) {
            x *= v;
            var b = Math.min(S, ~~x);
            return y[b](x - b);
          }),
          (i = u);
      } else r || (a = Fl(me(a) ? [] : {}, a));
      if (!y) {
        for (p in u) kf.call(d, a, p, "get", u[p]);
        o = function (x) {
          return Ff(x, d) || (h ? a.p : a);
        };
      }
    }
    return Ea(i, o);
  },
  p0 = function (a, u, i) {
    var r = a.labels,
      o = gn,
      h,
      d,
      p;
    for (h in r)
      (d = r[h] - u),
        d < 0 == !!i && d && o > (d = Math.abs(d)) && ((p = h), (o = d));
    return p;
  },
  Ye = function (a, u, i) {
    var r = a.vars,
      o = r[u],
      h = Bt,
      d = a._ctx,
      p,
      m,
      y;
    if (o)
      return (
        (p = r[u + "Params"]),
        (m = r.callbackScope || a),
        i && ba.length && ns(),
        d && (Bt = d),
        (y = p ? o.apply(m, p) : o.call(m)),
        (Bt = h),
        y
      );
  },
  ru = function (a) {
    return (
      xa(a),
      a.scrollTrigger && a.scrollTrigger.kill(!!re),
      a.progress() < 1 && Ye(a, "onInterrupt"),
      a
    );
  },
  Ql,
  wy = [],
  Dy = function (a) {
    if (a)
      if (((a = (!a.name && a.default) || a), qf() || a.headless)) {
        var u = a.name,
          i = Vt(a),
          r =
            u && !i && a.init
              ? function () {
                  this._props = [];
                }
              : a,
          o = {
            init: mu,
            render: Ff,
            add: kf,
            kill: mS,
            modifier: dS,
            rawVars: 0,
          },
          h = {
            targetTest: 0,
            get: 0,
            getSetter: Jf,
            aliases: {},
            register: 0,
          };
        if ((Wl(), a !== r)) {
          if (He[u]) return;
          Qe(r, Qe(as(a, o), h)),
            Fl(r.prototype, Fl(o, as(a, h))),
            (He[(r.prop = u)] = r),
            a.targetTest && (Fr.push(r), (Gf[u] = 1)),
            (u =
              (u === "css" ? "CSS" : u.charAt(0).toUpperCase() + u.substr(1)) +
              "Plugin");
        }
        fy(u, r), a.register && a.register(Ae, r, Ee);
      } else wy.push(a);
  },
  Nt = 255,
  su = {
    aqua: [0, Nt, Nt],
    lime: [0, Nt, 0],
    silver: [192, 192, 192],
    black: [0, 0, 0],
    maroon: [128, 0, 0],
    teal: [0, 128, 128],
    blue: [0, 0, Nt],
    navy: [0, 0, 128],
    white: [Nt, Nt, Nt],
    olive: [128, 128, 0],
    yellow: [Nt, Nt, 0],
    orange: [Nt, 165, 0],
    gray: [128, 128, 128],
    purple: [128, 0, 128],
    green: [0, 128, 0],
    red: [Nt, 0, 0],
    pink: [Nt, 192, 203],
    cyan: [0, Nt, Nt],
    transparent: [Nt, Nt, Nt, 0],
  },
  Fo = function (a, u, i) {
    return (
      (a += a < 0 ? 1 : a > 1 ? -1 : 0),
      ((a * 6 < 1
        ? u + (i - u) * a * 6
        : a < 0.5
        ? i
        : a * 3 < 2
        ? u + (i - u) * (2 / 3 - a) * 6
        : u) *
        Nt +
        0.5) |
        0
    );
  },
  Cy = function (a, u, i) {
    var r = a ? (Gn(a) ? [a >> 16, (a >> 8) & Nt, a & Nt] : 0) : su.black,
      o,
      h,
      d,
      p,
      m,
      y,
      v,
      S,
      T,
      x;
    if (!r) {
      if ((a.substr(-1) === "," && (a = a.substr(0, a.length - 1)), su[a]))
        r = su[a];
      else if (a.charAt(0) === "#") {
        if (
          (a.length < 6 &&
            ((o = a.charAt(1)),
            (h = a.charAt(2)),
            (d = a.charAt(3)),
            (a =
              "#" +
              o +
              o +
              h +
              h +
              d +
              d +
              (a.length === 5 ? a.charAt(4) + a.charAt(4) : ""))),
          a.length === 9)
        )
          return (
            (r = parseInt(a.substr(1, 6), 16)),
            [r >> 16, (r >> 8) & Nt, r & Nt, parseInt(a.substr(7), 16) / 255]
          );
        (a = parseInt(a.substr(1), 16)), (r = [a >> 16, (a >> 8) & Nt, a & Nt]);
      } else if (a.substr(0, 3) === "hsl") {
        if (((r = x = a.match(cf)), !u))
          (p = (+r[0] % 360) / 360),
            (m = +r[1] / 100),
            (y = +r[2] / 100),
            (h = y <= 0.5 ? y * (m + 1) : y + m - y * m),
            (o = y * 2 - h),
            r.length > 3 && (r[3] *= 1),
            (r[0] = Fo(p + 1 / 3, o, h)),
            (r[1] = Fo(p, o, h)),
            (r[2] = Fo(p - 1 / 3, o, h));
        else if (~a.indexOf("="))
          return (r = a.match(uy)), i && r.length < 4 && (r[3] = 1), r;
      } else r = a.match(cf) || su.transparent;
      r = r.map(Number);
    }
    return (
      u &&
        !x &&
        ((o = r[0] / Nt),
        (h = r[1] / Nt),
        (d = r[2] / Nt),
        (v = Math.max(o, h, d)),
        (S = Math.min(o, h, d)),
        (y = (v + S) / 2),
        v === S
          ? (p = m = 0)
          : ((T = v - S),
            (m = y > 0.5 ? T / (2 - v - S) : T / (v + S)),
            (p =
              v === o
                ? (h - d) / T + (h < d ? 6 : 0)
                : v === h
                ? (d - o) / T + 2
                : (o - h) / T + 4),
            (p *= 60)),
        (r[0] = ~~(p + 0.5)),
        (r[1] = ~~(m * 100 + 0.5)),
        (r[2] = ~~(y * 100 + 0.5))),
      i && r.length < 4 && (r[3] = 1),
      r
    );
  },
  Ny = function (a) {
    var u = [],
      i = [],
      r = -1;
    return (
      a.split(Sa).forEach(function (o) {
        var h = o.match(Vl) || [];
        u.push.apply(u, h), i.push((r += h.length + 1));
      }),
      (u.c = i),
      u
    );
  },
  y0 = function (a, u, i) {
    var r = "",
      o = (a + r).match(Sa),
      h = u ? "hsla(" : "rgba(",
      d = 0,
      p,
      m,
      y,
      v;
    if (!o) return a;
    if (
      ((o = o.map(function (S) {
        return (
          (S = Cy(S, u, 1)) &&
          h +
            (u ? S[0] + "," + S[1] + "%," + S[2] + "%," + S[3] : S.join(",")) +
            ")"
        );
      })),
      i && ((y = Ny(a)), (p = i.c), p.join(r) !== y.c.join(r)))
    )
      for (m = a.replace(Sa, "1").split(Vl), v = m.length - 1; d < v; d++)
        r +=
          m[d] +
          (~p.indexOf(d)
            ? o.shift() || h + "0,0,0,0)"
            : (y.length ? y : o.length ? o : i).shift());
    if (!m)
      for (m = a.split(Sa), v = m.length - 1; d < v; d++) r += m[d] + o[d];
    return r + m[v];
  },
  Sa = (function () {
    var s =
        "(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",
      a;
    for (a in su) s += "|" + a + "\\b";
    return new RegExp(s + ")", "gi");
  })(),
  Ib = /hsl[a]?\(/,
  My = function (a) {
    var u = a.join(" "),
      i;
    if (((Sa.lastIndex = 0), Sa.test(u)))
      return (
        (i = Ib.test(u)),
        (a[1] = y0(a[1], i)),
        (a[0] = y0(a[0], i, Ny(a[1]))),
        !0
      );
  },
  yu,
  qe = (function () {
    var s = Date.now,
      a = 500,
      u = 33,
      i = s(),
      r = i,
      o = 1e3 / 240,
      h = o,
      d = [],
      p,
      m,
      y,
      v,
      S,
      T,
      x = function b(E) {
        var A = s() - r,
          N = E === !0,
          M,
          G,
          U,
          X;
        if (
          ((A > a || A < 0) && (i += A - u),
          (r += A),
          (U = r - i),
          (M = U - h),
          (M > 0 || N) &&
            ((X = ++v.frame),
            (S = U - v.time * 1e3),
            (v.time = U = U / 1e3),
            (h += M + (M >= o ? 4 : o - M)),
            (G = 1)),
          N || (p = m(b)),
          G)
        )
          for (T = 0; T < d.length; T++) d[T](U, S, X, E);
      };
    return (
      (v = {
        time: 0,
        frame: 0,
        tick: function () {
          x(!0);
        },
        deltaRatio: function (E) {
          return S / (1e3 / (E || 60));
        },
        wake: function () {
          cy &&
            (!of &&
              qf() &&
              ((mn = of = window),
              (Yf = mn.document || {}),
              (Ve.gsap = Ae),
              (mn.gsapVersions || (mn.gsapVersions = [])).push(Ae.version),
              oy(es || mn.GreenSockGlobals || (!mn.gsap && mn) || {}),
              wy.forEach(Dy)),
            (y = typeof requestAnimationFrame < "u" && requestAnimationFrame),
            p && v.sleep(),
            (m =
              y ||
              function (E) {
                return setTimeout(E, (h - v.time * 1e3 + 1) | 0);
              }),
            (yu = 1),
            x(2));
        },
        sleep: function () {
          (y ? cancelAnimationFrame : clearTimeout)(p), (yu = 0), (m = mu);
        },
        lagSmoothing: function (E, A) {
          (a = E || 1 / 0), (u = Math.min(A || 33, a));
        },
        fps: function (E) {
          (o = 1e3 / (E || 240)), (h = v.time * 1e3 + o);
        },
        add: function (E, A, N) {
          var M = A
            ? function (G, U, X, k) {
                E(G, U, X, k), v.remove(M);
              }
            : E;
          return v.remove(E), d[N ? "unshift" : "push"](M), Wl(), M;
        },
        remove: function (E, A) {
          ~(A = d.indexOf(E)) && d.splice(A, 1) && T >= A && T--;
        },
        _listeners: d,
      }),
      v
    );
  })(),
  Wl = function () {
    return !yu && qe.wake();
  },
  _t = {},
  tS = /^[\d.\-M][\d.\-,\s]/,
  eS = /["']/g,
  nS = function (a) {
    for (
      var u = {},
        i = a.substr(1, a.length - 3).split(":"),
        r = i[0],
        o = 1,
        h = i.length,
        d,
        p,
        m;
      o < h;
      o++
    )
      (p = i[o]),
        (d = o !== h - 1 ? p.lastIndexOf(",") : p.length),
        (m = p.substr(0, d)),
        (u[r] = isNaN(m) ? m.replace(eS, "").trim() : +m),
        (r = p.substr(d + 1).trim());
    return u;
  },
  aS = function (a) {
    var u = a.indexOf("(") + 1,
      i = a.indexOf(")"),
      r = a.indexOf("(", u);
    return a.substring(u, ~r && r < i ? a.indexOf(")", i + 1) : i);
  },
  lS = function (a) {
    var u = (a + "").split("("),
      i = _t[u[0]];
    return i && u.length > 1 && i.config
      ? i.config.apply(
          null,
          ~a.indexOf("{") ? [nS(u[1])] : aS(a).split(",").map(py)
        )
      : _t._CE && tS.test(a)
      ? _t._CE("", a)
      : i;
  },
  zy = function (a) {
    return function (u) {
      return 1 - a(1 - u);
    };
  },
  Uy = function s(a, u) {
    for (var i = a._first, r; i; )
      i instanceof ye
        ? s(i, u)
        : i.vars.yoyoEase &&
          (!i._yoyo || !i._repeat) &&
          i._yoyo !== u &&
          (i.timeline
            ? s(i.timeline, u)
            : ((r = i._ease),
              (i._ease = i._yEase),
              (i._yEase = r),
              (i._yoyo = u))),
        (i = i._next);
  },
  $a = function (a, u) {
    return (a && (Vt(a) ? a : _t[a] || lS(a))) || u;
  },
  nl = function (a, u, i, r) {
    i === void 0 &&
      (i = function (p) {
        return 1 - u(1 - p);
      }),
      r === void 0 &&
        (r = function (p) {
          return p < 0.5 ? u(p * 2) / 2 : 1 - u((1 - p) * 2) / 2;
        });
    var o = { easeIn: u, easeOut: i, easeInOut: r },
      h;
    return (
      Te(a, function (d) {
        (_t[d] = Ve[d] = o), (_t[(h = d.toLowerCase())] = i);
        for (var p in o)
          _t[
            h + (p === "easeIn" ? ".in" : p === "easeOut" ? ".out" : ".inOut")
          ] = _t[d + "." + p] = o[p];
      }),
      o
    );
  },
  jy = function (a) {
    return function (u) {
      return u < 0.5 ? (1 - a(1 - u * 2)) / 2 : 0.5 + a((u - 0.5) * 2) / 2;
    };
  },
  $o = function s(a, u, i) {
    var r = u >= 1 ? u : 1,
      o = (i || (a ? 0.3 : 0.45)) / (u < 1 ? u : 1),
      h = (o / sf) * (Math.asin(1 / r) || 0),
      d = function (y) {
        return y === 1 ? 1 : r * Math.pow(2, -10 * y) * Mb((y - h) * o) + 1;
      },
      p =
        a === "out"
          ? d
          : a === "in"
          ? function (m) {
              return 1 - d(1 - m);
            }
          : jy(d);
    return (
      (o = sf / o),
      (p.config = function (m, y) {
        return s(a, m, y);
      }),
      p
    );
  },
  Po = function s(a, u) {
    u === void 0 && (u = 1.70158);
    var i = function (h) {
        return h ? --h * h * ((u + 1) * h + u) + 1 : 0;
      },
      r =
        a === "out"
          ? i
          : a === "in"
          ? function (o) {
              return 1 - i(1 - o);
            }
          : jy(i);
    return (
      (r.config = function (o) {
        return s(a, o);
      }),
      r
    );
  };
Te("Linear,Quad,Cubic,Quart,Quint,Strong", function (s, a) {
  var u = a < 5 ? a + 1 : a;
  nl(
    s + ",Power" + (u - 1),
    a
      ? function (i) {
          return Math.pow(i, u);
        }
      : function (i) {
          return i;
        },
    function (i) {
      return 1 - Math.pow(1 - i, u);
    },
    function (i) {
      return i < 0.5
        ? Math.pow(i * 2, u) / 2
        : 1 - Math.pow((1 - i) * 2, u) / 2;
    }
  );
});
_t.Linear.easeNone = _t.none = _t.Linear.easeIn;
nl("Elastic", $o("in"), $o("out"), $o());
(function (s, a) {
  var u = 1 / a,
    i = 2 * u,
    r = 2.5 * u,
    o = function (d) {
      return d < u
        ? s * d * d
        : d < i
        ? s * Math.pow(d - 1.5 / a, 2) + 0.75
        : d < r
        ? s * (d -= 2.25 / a) * d + 0.9375
        : s * Math.pow(d - 2.625 / a, 2) + 0.984375;
    };
  nl(
    "Bounce",
    function (h) {
      return 1 - o(1 - h);
    },
    o
  );
})(7.5625, 2.75);
nl("Expo", function (s) {
  return Math.pow(2, 10 * (s - 1)) * s + s * s * s * s * s * s * (1 - s);
});
nl("Circ", function (s) {
  return -(ly(1 - s * s) - 1);
});
nl("Sine", function (s) {
  return s === 1 ? 1 : -Nb(s * Db) + 1;
});
nl("Back", Po("in"), Po("out"), Po());
_t.SteppedEase =
  _t.steps =
  Ve.SteppedEase =
    {
      config: function (a, u) {
        a === void 0 && (a = 1);
        var i = 1 / a,
          r = a + (u ? 0 : 1),
          o = u ? 1 : 0,
          h = 1 - de;
        return function (d) {
          return (((r * Ru(0, h, d)) | 0) + o) * i;
        };
      },
    };
Jl.ease = _t["quad.out"];
Te(
  "onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",
  function (s) {
    return (Vf += s + "," + s + "Params,");
  }
);
var By = function (a, u) {
    (this.id = Cb++),
      (a._gsap = this),
      (this.target = a),
      (this.harness = u),
      (this.get = u ? u.get : dy),
      (this.set = u ? u.getSetter : Jf);
  },
  gu = (function () {
    function s(u) {
      (this.vars = u),
        (this._delay = +u.delay || 0),
        (this._repeat = u.repeat === 1 / 0 ? -2 : u.repeat || 0) &&
          ((this._rDelay = u.repeatDelay || 0),
          (this._yoyo = !!u.yoyo || !!u.yoyoEase)),
        (this._ts = 1),
        Pl(this, +u.duration, 1, 1),
        (this.data = u.data),
        Bt && ((this._ctx = Bt), Bt.data.push(this)),
        yu || qe.wake();
    }
    var a = s.prototype;
    return (
      (a.delay = function (i) {
        return i || i === 0
          ? (this.parent &&
              this.parent.smoothChildTiming &&
              this.startTime(this._start + i - this._delay),
            (this._delay = i),
            this)
          : this._delay;
      }),
      (a.duration = function (i) {
        return arguments.length
          ? this.totalDuration(
              this._repeat > 0 ? i + (i + this._rDelay) * this._repeat : i
            )
          : this.totalDuration() && this._dur;
      }),
      (a.totalDuration = function (i) {
        return arguments.length
          ? ((this._dirty = 0),
            Pl(
              this,
              this._repeat < 0
                ? i
                : (i - this._repeat * this._rDelay) / (this._repeat + 1)
            ))
          : this._tDur;
      }),
      (a.totalTime = function (i, r) {
        if ((Wl(), !arguments.length)) return this._tTime;
        var o = this._dp;
        if (o && o.smoothChildTiming && this._ts) {
          for (ps(this, i), !o._dp || o.parent || _y(o, this); o && o.parent; )
            o.parent._time !==
              o._start +
                (o._ts >= 0
                  ? o._tTime / o._ts
                  : (o.totalDuration() - o._tTime) / -o._ts) &&
              o.totalTime(o._tTime, !0),
              (o = o.parent);
          !this.parent &&
            this._dp.autoRemoveChildren &&
            ((this._ts > 0 && i < this._tDur) ||
              (this._ts < 0 && i > 0) ||
              (!this._tDur && !i)) &&
            pn(this._dp, this, this._start - this._delay);
        }
        return (
          (this._tTime !== i ||
            (!this._dur && !r) ||
            (this._initted && Math.abs(this._zTime) === de) ||
            (!i && !this._initted && (this.add || this._ptLookup))) &&
            (this._ts || (this._pTime = i), my(this, i, r)),
          this
        );
      }),
      (a.time = function (i, r) {
        return arguments.length
          ? this.totalTime(
              Math.min(this.totalDuration(), i + d0(this)) %
                (this._dur + this._rDelay) || (i ? this._dur : 0),
              r
            )
          : this._time;
      }),
      (a.totalProgress = function (i, r) {
        return arguments.length
          ? this.totalTime(this.totalDuration() * i, r)
          : this.totalDuration()
          ? Math.min(1, this._tTime / this._tDur)
          : this.rawTime() >= 0 && this._initted
          ? 1
          : 0;
      }),
      (a.progress = function (i, r) {
        return arguments.length
          ? this.totalTime(
              this.duration() *
                (this._yoyo && !(this.iteration() & 1) ? 1 - i : i) +
                d0(this),
              r
            )
          : this.duration()
          ? Math.min(1, this._time / this._dur)
          : this.rawTime() > 0
          ? 1
          : 0;
      }),
      (a.iteration = function (i, r) {
        var o = this.duration() + this._rDelay;
        return arguments.length
          ? this.totalTime(this._time + (i - 1) * o, r)
          : this._repeat
          ? $l(this._tTime, o) + 1
          : 1;
      }),
      (a.timeScale = function (i, r) {
        if (!arguments.length) return this._rts === -1e-8 ? 0 : this._rts;
        if (this._rts === i) return this;
        var o =
          this.parent && this._ts ? ls(this.parent._time, this) : this._tTime;
        return (
          (this._rts = +i || 0),
          (this._ts = this._ps || i === -1e-8 ? 0 : this._rts),
          this.totalTime(Ru(-Math.abs(this._delay), this._tDur, o), r !== !1),
          ms(this),
          qb(this)
        );
      }),
      (a.paused = function (i) {
        return arguments.length
          ? (this._ps !== i &&
              ((this._ps = i),
              i
                ? ((this._pTime =
                    this._tTime || Math.max(-this._delay, this.rawTime())),
                  (this._ts = this._act = 0))
                : (Wl(),
                  (this._ts = this._rts),
                  this.totalTime(
                    this.parent && !this.parent.smoothChildTiming
                      ? this.rawTime()
                      : this._tTime || this._pTime,
                    this.progress() === 1 &&
                      Math.abs(this._zTime) !== de &&
                      (this._tTime -= de)
                  ))),
            this)
          : this._ps;
      }),
      (a.startTime = function (i) {
        if (arguments.length) {
          this._start = i;
          var r = this.parent || this._dp;
          return (
            r && (r._sort || !this.parent) && pn(r, this, i - this._delay), this
          );
        }
        return this._start;
      }),
      (a.endTime = function (i) {
        return (
          this._start +
          (xe(i) ? this.totalDuration() : this.duration()) /
            Math.abs(this._ts || 1)
        );
      }),
      (a.rawTime = function (i) {
        var r = this.parent || this._dp;
        return r
          ? i &&
            (!this._ts ||
              (this._repeat && this._time && this.totalProgress() < 1))
            ? this._tTime % (this._dur + this._rDelay)
            : this._ts
            ? ls(r.rawTime(i), this)
            : this._tTime
          : this._tTime;
      }),
      (a.revert = function (i) {
        i === void 0 && (i = jb);
        var r = re;
        return (
          (re = i),
          (this._initted || this._startAt) &&
            (this.timeline && this.timeline.revert(i),
            this.totalTime(-0.01, i.suppressEvents)),
          this.data !== "nested" && i.kill !== !1 && this.kill(),
          (re = r),
          this
        );
      }),
      (a.globalTime = function (i) {
        for (var r = this, o = arguments.length ? i : r.rawTime(); r; )
          (o = r._start + o / (Math.abs(r._ts) || 1)), (r = r._dp);
        return !this.parent && this._sat ? this._sat.globalTime(i) : o;
      }),
      (a.repeat = function (i) {
        return arguments.length
          ? ((this._repeat = i === 1 / 0 ? -2 : i), m0(this))
          : this._repeat === -2
          ? 1 / 0
          : this._repeat;
      }),
      (a.repeatDelay = function (i) {
        if (arguments.length) {
          var r = this._time;
          return (this._rDelay = i), m0(this), r ? this.time(r) : this;
        }
        return this._rDelay;
      }),
      (a.yoyo = function (i) {
        return arguments.length ? ((this._yoyo = i), this) : this._yoyo;
      }),
      (a.seek = function (i, r) {
        return this.totalTime(tn(this, i), xe(r));
      }),
      (a.restart = function (i, r) {
        return (
          this.play().totalTime(i ? -this._delay : 0, xe(r)),
          this._dur || (this._zTime = -1e-8),
          this
        );
      }),
      (a.play = function (i, r) {
        return i != null && this.seek(i, r), this.reversed(!1).paused(!1);
      }),
      (a.reverse = function (i, r) {
        return (
          i != null && this.seek(i || this.totalDuration(), r),
          this.reversed(!0).paused(!1)
        );
      }),
      (a.pause = function (i, r) {
        return i != null && this.seek(i, r), this.paused(!0);
      }),
      (a.resume = function () {
        return this.paused(!1);
      }),
      (a.reversed = function (i) {
        return arguments.length
          ? (!!i !== this.reversed() &&
              this.timeScale(-this._rts || (i ? -1e-8 : 0)),
            this)
          : this._rts < 0;
      }),
      (a.invalidate = function () {
        return (this._initted = this._act = 0), (this._zTime = -1e-8), this;
      }),
      (a.isActive = function () {
        var i = this.parent || this._dp,
          r = this._start,
          o;
        return !!(
          !i ||
          (this._ts &&
            this._initted &&
            i.isActive() &&
            (o = i.rawTime(!0)) >= r &&
            o < this.endTime(!0) - de)
        );
      }),
      (a.eventCallback = function (i, r, o) {
        var h = this.vars;
        return arguments.length > 1
          ? (r
              ? ((h[i] = r),
                o && (h[i + "Params"] = o),
                i === "onUpdate" && (this._onUpdate = r))
              : delete h[i],
            this)
          : h[i];
      }),
      (a.then = function (i) {
        var r = this;
        return new Promise(function (o) {
          var h = Vt(i) ? i : yy,
            d = function () {
              var m = r.then;
              (r.then = null),
                Vt(h) && (h = h(r)) && (h.then || h === r) && (r.then = m),
                o(h),
                (r.then = m);
            };
          (r._initted && r.totalProgress() === 1 && r._ts >= 0) ||
          (!r._tTime && r._ts < 0)
            ? d()
            : (r._prom = d);
        });
      }),
      (a.kill = function () {
        ru(this);
      }),
      s
    );
  })();
Qe(gu.prototype, {
  _time: 0,
  _start: 0,
  _end: 0,
  _tTime: 0,
  _tDur: 0,
  _dirty: 0,
  _repeat: 0,
  _yoyo: !1,
  parent: null,
  _initted: !1,
  _rDelay: 0,
  _ts: 1,
  _dp: 0,
  ratio: 0,
  _zTime: -1e-8,
  _prom: 0,
  _ps: !1,
  _rts: 1,
});
var ye = (function (s) {
  ay(a, s);
  function a(i, r) {
    var o;
    return (
      i === void 0 && (i = {}),
      (o = s.call(this, i) || this),
      (o.labels = {}),
      (o.smoothChildTiming = !!i.smoothChildTiming),
      (o.autoRemoveChildren = !!i.autoRemoveChildren),
      (o._sort = xe(i.sortChildren)),
      Ht && pn(i.parent || Ht, Hn(o), r),
      i.reversed && o.reverse(),
      i.paused && o.paused(!0),
      i.scrollTrigger && vy(Hn(o), i.scrollTrigger),
      o
    );
  }
  var u = a.prototype;
  return (
    (u.to = function (r, o, h) {
      return ou(0, arguments, this), this;
    }),
    (u.from = function (r, o, h) {
      return ou(1, arguments, this), this;
    }),
    (u.fromTo = function (r, o, h, d) {
      return ou(2, arguments, this), this;
    }),
    (u.set = function (r, o, h) {
      return (
        (o.duration = 0),
        (o.parent = this),
        cu(o).repeatDelay || (o.repeat = 0),
        (o.immediateRender = !!o.immediateRender),
        new Ft(r, o, tn(this, h), 1),
        this
      );
    }),
    (u.call = function (r, o, h) {
      return pn(this, Ft.delayedCall(0, r, o), h);
    }),
    (u.staggerTo = function (r, o, h, d, p, m, y) {
      return (
        (h.duration = o),
        (h.stagger = h.stagger || d),
        (h.onComplete = m),
        (h.onCompleteParams = y),
        (h.parent = this),
        new Ft(r, h, tn(this, p)),
        this
      );
    }),
    (u.staggerFrom = function (r, o, h, d, p, m, y) {
      return (
        (h.runBackwards = 1),
        (cu(h).immediateRender = xe(h.immediateRender)),
        this.staggerTo(r, o, h, d, p, m, y)
      );
    }),
    (u.staggerFromTo = function (r, o, h, d, p, m, y, v) {
      return (
        (d.startAt = h),
        (cu(d).immediateRender = xe(d.immediateRender)),
        this.staggerTo(r, o, d, p, m, y, v)
      );
    }),
    (u.render = function (r, o, h) {
      var d = this._time,
        p = this._dirty ? this.totalDuration() : this._tDur,
        m = this._dur,
        y = r <= 0 ? 0 : $t(r),
        v = this._zTime < 0 != r < 0 && (this._initted || !m),
        S,
        T,
        x,
        b,
        E,
        A,
        N,
        M,
        G,
        U,
        X,
        k;
      if (
        (this !== Ht && y > p && r >= 0 && (y = p), y !== this._tTime || h || v)
      ) {
        if (
          (d !== this._time &&
            m &&
            ((y += this._time - d), (r += this._time - d)),
          (S = y),
          (G = this._start),
          (M = this._ts),
          (A = !M),
          v && (m || (d = this._zTime), (r || !o) && (this._zTime = r)),
          this._repeat)
        ) {
          if (
            ((X = this._yoyo),
            (E = m + this._rDelay),
            this._repeat < -1 && r < 0)
          )
            return this.totalTime(E * 100 + r, o, h);
          if (
            ((S = $t(y % E)),
            y === p
              ? ((b = this._repeat), (S = m))
              : ((U = $t(y / E)),
                (b = ~~U),
                b && b === U && ((S = m), b--),
                S > m && (S = m)),
            (U = $l(this._tTime, E)),
            !d &&
              this._tTime &&
              U !== b &&
              this._tTime - U * E - this._dur <= 0 &&
              (U = b),
            X && b & 1 && ((S = m - S), (k = 1)),
            b !== U && !this._lock)
          ) {
            var F = X && U & 1,
              K = F === (X && b & 1);
            if (
              (b < U && (F = !F),
              (d = F ? 0 : y % m ? m : y),
              (this._lock = 1),
              (this.render(d || (k ? 0 : $t(b * E)), o, !m)._lock = 0),
              (this._tTime = y),
              !o && this.parent && Ye(this, "onRepeat"),
              this.vars.repeatRefresh && !k && (this.invalidate()._lock = 1),
              (d && d !== this._time) ||
                A !== !this._ts ||
                (this.vars.onRepeat && !this.parent && !this._act))
            )
              return this;
            if (
              ((m = this._dur),
              (p = this._tDur),
              K &&
                ((this._lock = 2),
                (d = F ? m : -1e-4),
                this.render(d, !0),
                this.vars.repeatRefresh && !k && this.invalidate()),
              (this._lock = 0),
              !this._ts && !A)
            )
              return this;
            Uy(this, k);
          }
        }
        if (
          (this._hasPause &&
            !this._forcing &&
            this._lock < 2 &&
            ((N = Vb(this, $t(d), $t(S))), N && (y -= S - (S = N._start))),
          (this._tTime = y),
          (this._time = S),
          (this._act = !M),
          this._initted ||
            ((this._onUpdate = this.vars.onUpdate),
            (this._initted = 1),
            (this._zTime = r),
            (d = 0)),
          !d && S && !o && !b && (Ye(this, "onStart"), this._tTime !== y))
        )
          return this;
        if (S >= d && r >= 0)
          for (T = this._first; T; ) {
            if (
              ((x = T._next), (T._act || S >= T._start) && T._ts && N !== T)
            ) {
              if (T.parent !== this) return this.render(r, o, h);
              if (
                (T.render(
                  T._ts > 0
                    ? (S - T._start) * T._ts
                    : (T._dirty ? T.totalDuration() : T._tDur) +
                        (S - T._start) * T._ts,
                  o,
                  h
                ),
                S !== this._time || (!this._ts && !A))
              ) {
                (N = 0), x && (y += this._zTime = -1e-8);
                break;
              }
            }
            T = x;
          }
        else {
          T = this._last;
          for (var ut = r < 0 ? r : S; T; ) {
            if (((x = T._prev), (T._act || ut <= T._end) && T._ts && N !== T)) {
              if (T.parent !== this) return this.render(r, o, h);
              if (
                (T.render(
                  T._ts > 0
                    ? (ut - T._start) * T._ts
                    : (T._dirty ? T.totalDuration() : T._tDur) +
                        (ut - T._start) * T._ts,
                  o,
                  h || (re && (T._initted || T._startAt))
                ),
                S !== this._time || (!this._ts && !A))
              ) {
                (N = 0), x && (y += this._zTime = ut ? -1e-8 : de);
                break;
              }
            }
            T = x;
          }
        }
        if (
          N &&
          !o &&
          (this.pause(),
          (N.render(S >= d ? 0 : -1e-8)._zTime = S >= d ? 1 : -1),
          this._ts)
        )
          return (this._start = G), ms(this), this.render(r, o, h);
        this._onUpdate && !o && Ye(this, "onUpdate", !0),
          ((y === p && this._tTime >= this.totalDuration()) || (!y && d)) &&
            (G === this._start || Math.abs(M) !== Math.abs(this._ts)) &&
            (this._lock ||
              ((r || !m) &&
                ((y === p && this._ts > 0) || (!y && this._ts < 0)) &&
                xa(this, 1),
              !o &&
                !(r < 0 && !d) &&
                (y || d || !p) &&
                (Ye(
                  this,
                  y === p && r >= 0 ? "onComplete" : "onReverseComplete",
                  !0
                ),
                this._prom &&
                  !(y < p && this.timeScale() > 0) &&
                  this._prom())));
      }
      return this;
    }),
    (u.add = function (r, o) {
      var h = this;
      if ((Gn(o) || (o = tn(this, o, r)), !(r instanceof gu))) {
        if (me(r))
          return (
            r.forEach(function (d) {
              return h.add(d, o);
            }),
            this
          );
        if (ae(r)) return this.addLabel(r, o);
        if (Vt(r)) r = Ft.delayedCall(0, r);
        else return this;
      }
      return this !== r ? pn(this, r, o) : this;
    }),
    (u.getChildren = function (r, o, h, d) {
      r === void 0 && (r = !0),
        o === void 0 && (o = !0),
        h === void 0 && (h = !0),
        d === void 0 && (d = -1e8);
      for (var p = [], m = this._first; m; )
        m._start >= d &&
          (m instanceof Ft
            ? o && p.push(m)
            : (h && p.push(m), r && p.push.apply(p, m.getChildren(!0, o, h)))),
          (m = m._next);
      return p;
    }),
    (u.getById = function (r) {
      for (var o = this.getChildren(1, 1, 1), h = o.length; h--; )
        if (o[h].vars.id === r) return o[h];
    }),
    (u.remove = function (r) {
      return ae(r)
        ? this.removeLabel(r)
        : Vt(r)
        ? this.killTweensOf(r)
        : (r.parent === this && ds(this, r),
          r === this._recent && (this._recent = this._last),
          Fa(this));
    }),
    (u.totalTime = function (r, o) {
      return arguments.length
        ? ((this._forcing = 1),
          !this._dp &&
            this._ts &&
            (this._start = $t(
              qe.time -
                (this._ts > 0
                  ? r / this._ts
                  : (this.totalDuration() - r) / -this._ts)
            )),
          s.prototype.totalTime.call(this, r, o),
          (this._forcing = 0),
          this)
        : this._tTime;
    }),
    (u.addLabel = function (r, o) {
      return (this.labels[r] = tn(this, o)), this;
    }),
    (u.removeLabel = function (r) {
      return delete this.labels[r], this;
    }),
    (u.addPause = function (r, o, h) {
      var d = Ft.delayedCall(0, o || mu, h);
      return (
        (d.data = "isPause"), (this._hasPause = 1), pn(this, d, tn(this, r))
      );
    }),
    (u.removePause = function (r) {
      var o = this._first;
      for (r = tn(this, r); o; )
        o._start === r && o.data === "isPause" && xa(o), (o = o._next);
    }),
    (u.killTweensOf = function (r, o, h) {
      for (var d = this.getTweensOf(r, h), p = d.length; p--; )
        ga !== d[p] && d[p].kill(r, o);
      return this;
    }),
    (u.getTweensOf = function (r, o) {
      for (var h = [], d = en(r), p = this._first, m = Gn(o), y; p; )
        p instanceof Ft
          ? Bb(p._targets, d) &&
            (m
              ? (!ga || (p._initted && p._ts)) &&
                p.globalTime(0) <= o &&
                p.globalTime(p.totalDuration()) > o
              : !o || p.isActive()) &&
            h.push(p)
          : (y = p.getTweensOf(d, o)).length && h.push.apply(h, y),
          (p = p._next);
      return h;
    }),
    (u.tweenTo = function (r, o) {
      o = o || {};
      var h = this,
        d = tn(h, r),
        p = o,
        m = p.startAt,
        y = p.onStart,
        v = p.onStartParams,
        S = p.immediateRender,
        T,
        x = Ft.to(
          h,
          Qe(
            {
              ease: o.ease || "none",
              lazy: !1,
              immediateRender: !1,
              time: d,
              overwrite: "auto",
              duration:
                o.duration ||
                Math.abs(
                  (d - (m && "time" in m ? m.time : h._time)) / h.timeScale()
                ) ||
                de,
              onStart: function () {
                if ((h.pause(), !T)) {
                  var E =
                    o.duration ||
                    Math.abs(
                      (d - (m && "time" in m ? m.time : h._time)) /
                        h.timeScale()
                    );
                  x._dur !== E && Pl(x, E, 0, 1).render(x._time, !0, !0),
                    (T = 1);
                }
                y && y.apply(x, v || []);
              },
            },
            o
          )
        );
      return S ? x.render(0) : x;
    }),
    (u.tweenFromTo = function (r, o, h) {
      return this.tweenTo(o, Qe({ startAt: { time: tn(this, r) } }, h));
    }),
    (u.recent = function () {
      return this._recent;
    }),
    (u.nextLabel = function (r) {
      return r === void 0 && (r = this._time), p0(this, tn(this, r));
    }),
    (u.previousLabel = function (r) {
      return r === void 0 && (r = this._time), p0(this, tn(this, r), 1);
    }),
    (u.currentLabel = function (r) {
      return arguments.length
        ? this.seek(r, !0)
        : this.previousLabel(this._time + de);
    }),
    (u.shiftChildren = function (r, o, h) {
      h === void 0 && (h = 0);
      for (var d = this._first, p = this.labels, m; d; )
        d._start >= h && ((d._start += r), (d._end += r)), (d = d._next);
      if (o) for (m in p) p[m] >= h && (p[m] += r);
      return Fa(this);
    }),
    (u.invalidate = function (r) {
      var o = this._first;
      for (this._lock = 0; o; ) o.invalidate(r), (o = o._next);
      return s.prototype.invalidate.call(this, r);
    }),
    (u.clear = function (r) {
      r === void 0 && (r = !0);
      for (var o = this._first, h; o; ) (h = o._next), this.remove(o), (o = h);
      return (
        this._dp && (this._time = this._tTime = this._pTime = 0),
        r && (this.labels = {}),
        Fa(this)
      );
    }),
    (u.totalDuration = function (r) {
      var o = 0,
        h = this,
        d = h._last,
        p = gn,
        m,
        y,
        v;
      if (arguments.length)
        return h.timeScale(
          (h._repeat < 0 ? h.duration() : h.totalDuration()) /
            (h.reversed() ? -r : r)
        );
      if (h._dirty) {
        for (v = h.parent; d; )
          (m = d._prev),
            d._dirty && d.totalDuration(),
            (y = d._start),
            y > p && h._sort && d._ts && !h._lock
              ? ((h._lock = 1), (pn(h, d, y - d._delay, 1)._lock = 0))
              : (p = y),
            y < 0 &&
              d._ts &&
              ((o -= y),
              ((!v && !h._dp) || (v && v.smoothChildTiming)) &&
                ((h._start += y / h._ts), (h._time -= y), (h._tTime -= y)),
              h.shiftChildren(-y, !1, -1 / 0),
              (p = 0)),
            d._end > o && d._ts && (o = d._end),
            (d = m);
        Pl(h, h === Ht && h._time > o ? h._time : o, 1, 1), (h._dirty = 0);
      }
      return h._tDur;
    }),
    (a.updateRoot = function (r) {
      if ((Ht._ts && (my(Ht, ls(r, Ht)), (hy = qe.frame)), qe.frame >= f0)) {
        f0 += Xe.autoSleep || 120;
        var o = Ht._first;
        if ((!o || !o._ts) && Xe.autoSleep && qe._listeners.length < 2) {
          for (; o && !o._ts; ) o = o._next;
          o || qe.sleep();
        }
      }
    }),
    a
  );
})(gu);
Qe(ye.prototype, { _lock: 0, _hasPause: 0, _forcing: 0 });
var iS = function (a, u, i, r, o, h, d) {
    var p = new Ee(this._pt, a, u, 0, 1, Gy, null, o),
      m = 0,
      y = 0,
      v,
      S,
      T,
      x,
      b,
      E,
      A,
      N;
    for (
      p.b = i,
        p.e = r,
        i += "",
        r += "",
        (A = ~r.indexOf("random(")) && (r = pu(r)),
        h && ((N = [i, r]), h(N, a, u), (i = N[0]), (r = N[1])),
        S = i.match(Ko) || [];
      (v = Ko.exec(r));

    )
      (x = v[0]),
        (b = r.substring(m, v.index)),
        T ? (T = (T + 1) % 5) : b.substr(-5) === "rgba(" && (T = 1),
        x !== S[y++] &&
          ((E = parseFloat(S[y - 1]) || 0),
          (p._pt = {
            _next: p._pt,
            p: b || y === 1 ? b : ",",
            s: E,
            c: x.charAt(1) === "=" ? kl(E, x) - E : parseFloat(x) - E,
            m: T && T < 4 ? Math.round : 0,
          }),
          (m = Ko.lastIndex));
    return (
      (p.c = m < r.length ? r.substring(m, r.length) : ""),
      (p.fp = d),
      (ry.test(r) || A) && (p.e = 0),
      (this._pt = p),
      p
    );
  },
  kf = function (a, u, i, r, o, h, d, p, m, y) {
    Vt(r) && (r = r(o || 0, a, h));
    var v = a[u],
      S =
        i !== "get"
          ? i
          : Vt(v)
          ? m
            ? a[
                u.indexOf("set") || !Vt(a["get" + u.substr(3)])
                  ? u
                  : "get" + u.substr(3)
              ](m)
            : a[u]()
          : v,
      T = Vt(v) ? (m ? oS : Yy) : Kf,
      x;
    if (
      (ae(r) &&
        (~r.indexOf("random(") && (r = pu(r)),
        r.charAt(1) === "=" &&
          ((x = kl(S, r) + (fe(S) || 0)), (x || x === 0) && (r = x))),
      !y || S !== r || gf)
    )
      return !isNaN(S * r) && r !== ""
        ? ((x = new Ee(
            this._pt,
            a,
            u,
            +S || 0,
            r - (S || 0),
            typeof v == "boolean" ? hS : Xy,
            0,
            T
          )),
          m && (x.fp = m),
          d && x.modifier(d, this, a),
          (this._pt = x))
        : (!v && !(u in a) && Xf(u, r),
          iS.call(this, a, u, S, r, T, p || Xe.stringFilter, m));
  },
  uS = function (a, u, i, r, o) {
    if (
      (Vt(a) && (a = fu(a, o, u, i, r)),
      !bn(a) || (a.style && a.nodeType) || me(a) || iy(a))
    )
      return ae(a) ? fu(a, o, u, i, r) : a;
    var h = {},
      d;
    for (d in a) h[d] = fu(a[d], o, u, i, r);
    return h;
  },
  Ly = function (a, u, i, r, o, h) {
    var d, p, m, y;
    if (
      He[a] &&
      (d = new He[a]()).init(
        o,
        d.rawVars ? u[a] : uS(u[a], r, o, h, i),
        i,
        r,
        h
      ) !== !1 &&
      ((i._pt = p = new Ee(i._pt, o, a, 0, 1, d.render, d, 0, d.priority)),
      i !== Ql)
    )
      for (m = i._ptLookup[i._targets.indexOf(o)], y = d._props.length; y--; )
        m[d._props[y]] = p;
    return d;
  },
  ga,
  gf,
  Zf = function s(a, u, i) {
    var r = a.vars,
      o = r.ease,
      h = r.startAt,
      d = r.immediateRender,
      p = r.lazy,
      m = r.onUpdate,
      y = r.runBackwards,
      v = r.yoyoEase,
      S = r.keyframes,
      T = r.autoRevert,
      x = a._dur,
      b = a._startAt,
      E = a._targets,
      A = a.parent,
      N = A && A.data === "nested" ? A.vars.targets : E,
      M = a._overwrite === "auto" && !Lf,
      G = a.timeline,
      U,
      X,
      k,
      F,
      K,
      ut,
      mt,
      st,
      bt,
      zt,
      gt,
      q,
      $;
    if (
      (G && (!S || !o) && (o = "none"),
      (a._ease = $a(o, Jl.ease)),
      (a._yEase = v ? zy($a(v === !0 ? o : v, Jl.ease)) : 0),
      v &&
        a._yoyo &&
        !a._repeat &&
        ((v = a._yEase), (a._yEase = a._ease), (a._ease = v)),
      (a._from = !G && !!r.runBackwards),
      !G || (S && !r.stagger))
    ) {
      if (
        ((st = E[0] ? Ja(E[0]).harness : 0),
        (q = st && r[st.prop]),
        (U = as(r, Gf)),
        b &&
          (b._zTime < 0 && b.progress(1),
          u < 0 && y && d && !T ? b.render(-1, !0) : b.revert(y && x ? Jr : Ub),
          (b._lazy = 0)),
        h)
      ) {
        if (
          (xa(
            (a._startAt = Ft.set(
              E,
              Qe(
                {
                  data: "isStart",
                  overwrite: !1,
                  parent: A,
                  immediateRender: !0,
                  lazy: !b && xe(p),
                  startAt: null,
                  delay: 0,
                  onUpdate:
                    m &&
                    function () {
                      return Ye(a, "onUpdate");
                    },
                  stagger: 0,
                },
                h
              )
            ))
          ),
          (a._startAt._dp = 0),
          (a._startAt._sat = a),
          u < 0 && (re || (!d && !T)) && a._startAt.revert(Jr),
          d && x && u <= 0 && i <= 0)
        ) {
          u && (a._zTime = u);
          return;
        }
      } else if (y && x && !b) {
        if (
          (u && (d = !1),
          (k = Qe(
            {
              overwrite: !1,
              data: "isFromStart",
              lazy: d && !b && xe(p),
              immediateRender: d,
              stagger: 0,
              parent: A,
            },
            U
          )),
          q && (k[st.prop] = q),
          xa((a._startAt = Ft.set(E, k))),
          (a._startAt._dp = 0),
          (a._startAt._sat = a),
          u < 0 && (re ? a._startAt.revert(Jr) : a._startAt.render(-1, !0)),
          (a._zTime = u),
          !d)
        )
          s(a._startAt, de, de);
        else if (!u) return;
      }
      for (
        a._pt = a._ptCache = 0, p = (x && xe(p)) || (p && !x), X = 0;
        X < E.length;
        X++
      ) {
        if (
          ((K = E[X]),
          (mt = K._gsap || Qf(E)[X]._gsap),
          (a._ptLookup[X] = zt = {}),
          ff[mt.id] && ba.length && ns(),
          (gt = N === E ? X : N.indexOf(K)),
          st &&
            (bt = new st()).init(K, q || U, a, gt, N) !== !1 &&
            ((a._pt = F =
              new Ee(a._pt, K, bt.name, 0, 1, bt.render, bt, 0, bt.priority)),
            bt._props.forEach(function (tt) {
              zt[tt] = F;
            }),
            bt.priority && (ut = 1)),
          !st || q)
        )
          for (k in U)
            He[k] && (bt = Ly(k, U, a, gt, K, N))
              ? bt.priority && (ut = 1)
              : (zt[k] = F =
                  kf.call(a, K, k, "get", U[k], gt, N, 0, r.stringFilter));
        a._op && a._op[X] && a.kill(K, a._op[X]),
          M &&
            a._pt &&
            ((ga = a),
            Ht.killTweensOf(K, zt, a.globalTime(u)),
            ($ = !a.parent),
            (ga = 0)),
          a._pt && p && (ff[mt.id] = 1);
      }
      ut && Vy(a), a._onInit && a._onInit(a);
    }
    (a._onUpdate = m),
      (a._initted = (!a._op || a._pt) && !$),
      S && u <= 0 && G.render(gn, !0, !0);
  },
  rS = function (a, u, i, r, o, h, d, p) {
    var m = ((a._pt && a._ptCache) || (a._ptCache = {}))[u],
      y,
      v,
      S,
      T;
    if (!m)
      for (
        m = a._ptCache[u] = [], S = a._ptLookup, T = a._targets.length;
        T--;

      ) {
        if (((y = S[T][u]), y && y.d && y.d._pt))
          for (y = y.d._pt; y && y.p !== u && y.fp !== u; ) y = y._next;
        if (!y)
          return (
            (gf = 1),
            (a.vars[u] = "+=0"),
            Zf(a, d),
            (gf = 0),
            p ? du(u + " not eligible for reset") : 1
          );
        m.push(y);
      }
    for (T = m.length; T--; )
      (v = m[T]),
        (y = v._pt || v),
        (y.s = (r || r === 0) && !o ? r : y.s + (r || 0) + h * y.c),
        (y.c = i - y.s),
        v.e && (v.e = Zt(i) + fe(v.e)),
        v.b && (v.b = y.s + fe(v.b));
  },
  sS = function (a, u) {
    var i = a[0] ? Ja(a[0]).harness : 0,
      r = i && i.aliases,
      o,
      h,
      d,
      p;
    if (!r) return u;
    o = Fl({}, u);
    for (h in r)
      if (h in o) for (p = r[h].split(","), d = p.length; d--; ) o[p[d]] = o[h];
    return o;
  },
  cS = function (a, u, i, r) {
    var o = u.ease || r || "power1.inOut",
      h,
      d;
    if (me(u))
      (d = i[a] || (i[a] = [])),
        u.forEach(function (p, m) {
          return d.push({ t: (m / (u.length - 1)) * 100, v: p, e: o });
        });
    else
      for (h in u)
        (d = i[h] || (i[h] = [])),
          h === "ease" || d.push({ t: parseFloat(a), v: u[h], e: o });
  },
  fu = function (a, u, i, r, o) {
    return Vt(a)
      ? a.call(u, i, r, o)
      : ae(a) && ~a.indexOf("random(")
      ? pu(a)
      : a;
  },
  Hy = Vf + "repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",
  qy = {};
Te(Hy + ",id,stagger,delay,duration,paused,scrollTrigger", function (s) {
  return (qy[s] = 1);
});
var Ft = (function (s) {
  ay(a, s);
  function a(i, r, o, h) {
    var d;
    typeof r == "number" && ((o.duration = r), (r = o), (o = null)),
      (d = s.call(this, h ? r : cu(r)) || this);
    var p = d.vars,
      m = p.duration,
      y = p.delay,
      v = p.immediateRender,
      S = p.stagger,
      T = p.overwrite,
      x = p.keyframes,
      b = p.defaults,
      E = p.scrollTrigger,
      A = p.yoyoEase,
      N = r.parent || Ht,
      M = (me(i) || iy(i) ? Gn(i[0]) : "length" in r) ? [i] : en(i),
      G,
      U,
      X,
      k,
      F,
      K,
      ut,
      mt;
    if (
      ((d._targets = M.length
        ? Qf(M)
        : du(
            "GSAP target " + i + " not found. https://gsap.com",
            !Xe.nullTargetWarn
          ) || []),
      (d._ptLookup = []),
      (d._overwrite = T),
      x || S || kr(m) || kr(y))
    ) {
      if (
        ((r = d.vars),
        (G = d.timeline =
          new ye({
            data: "nested",
            defaults: b || {},
            targets: N && N.data === "nested" ? N.vars.targets : M,
          })),
        G.kill(),
        (G.parent = G._dp = Hn(d)),
        (G._start = 0),
        S || kr(m) || kr(y))
      ) {
        if (((k = M.length), (ut = S && Ty(S)), bn(S)))
          for (F in S) ~Hy.indexOf(F) && (mt || (mt = {}), (mt[F] = S[F]));
        for (U = 0; U < k; U++)
          (X = as(r, qy)),
            (X.stagger = 0),
            A && (X.yoyoEase = A),
            mt && Fl(X, mt),
            (K = M[U]),
            (X.duration = +fu(m, Hn(d), U, K, M)),
            (X.delay = (+fu(y, Hn(d), U, K, M) || 0) - d._delay),
            !S &&
              k === 1 &&
              X.delay &&
              ((d._delay = y = X.delay), (d._start += y), (X.delay = 0)),
            G.to(K, X, ut ? ut(U, K, M) : 0),
            (G._ease = _t.none);
        G.duration() ? (m = y = 0) : (d.timeline = 0);
      } else if (x) {
        cu(Qe(G.vars.defaults, { ease: "none" })),
          (G._ease = $a(x.ease || r.ease || "none"));
        var st = 0,
          bt,
          zt,
          gt;
        if (me(x))
          x.forEach(function (q) {
            return G.to(M, q, ">");
          }),
            G.duration();
        else {
          X = {};
          for (F in x)
            F === "ease" || F === "easeEach" || cS(F, x[F], X, x.easeEach);
          for (F in X)
            for (
              bt = X[F].sort(function (q, $) {
                return q.t - $.t;
              }),
                st = 0,
                U = 0;
              U < bt.length;
              U++
            )
              (zt = bt[U]),
                (gt = {
                  ease: zt.e,
                  duration: ((zt.t - (U ? bt[U - 1].t : 0)) / 100) * m,
                }),
                (gt[F] = zt.v),
                G.to(M, gt, st),
                (st += gt.duration);
          G.duration() < m && G.to({}, { duration: m - G.duration() });
        }
      }
      m || d.duration((m = G.duration()));
    } else d.timeline = 0;
    return (
      T === !0 && !Lf && ((ga = Hn(d)), Ht.killTweensOf(M), (ga = 0)),
      pn(N, Hn(d), o),
      r.reversed && d.reverse(),
      r.paused && d.paused(!0),
      (v ||
        (!m &&
          !x &&
          d._start === $t(N._time) &&
          xe(v) &&
          Yb(Hn(d)) &&
          N.data !== "nested")) &&
        ((d._tTime = -1e-8), d.render(Math.max(0, -y) || 0)),
      E && vy(Hn(d), E),
      d
    );
  }
  var u = a.prototype;
  return (
    (u.render = function (r, o, h) {
      var d = this._time,
        p = this._tDur,
        m = this._dur,
        y = r < 0,
        v = r > p - de && !y ? p : r < de ? 0 : r,
        S,
        T,
        x,
        b,
        E,
        A,
        N,
        M,
        G;
      if (!m) Gb(this, r, o, h);
      else if (
        v !== this._tTime ||
        !r ||
        h ||
        (!this._initted && this._tTime) ||
        (this._startAt && this._zTime < 0 !== y) ||
        this._lazy
      ) {
        if (((S = v), (M = this.timeline), this._repeat)) {
          if (((b = m + this._rDelay), this._repeat < -1 && y))
            return this.totalTime(b * 100 + r, o, h);
          if (
            ((S = $t(v % b)),
            v === p
              ? ((x = this._repeat), (S = m))
              : ((E = $t(v / b)),
                (x = ~~E),
                x && x === E ? ((S = m), x--) : S > m && (S = m)),
            (A = this._yoyo && x & 1),
            A && ((G = this._yEase), (S = m - S)),
            (E = $l(this._tTime, b)),
            S === d && !h && this._initted && x === E)
          )
            return (this._tTime = v), this;
          x !== E &&
            (M && this._yEase && Uy(M, A),
            this.vars.repeatRefresh &&
              !A &&
              !this._lock &&
              S !== b &&
              this._initted &&
              ((this._lock = h = 1),
              (this.render($t(b * x), !0).invalidate()._lock = 0)));
        }
        if (!this._initted) {
          if (by(this, y ? r : S, h, o, v)) return (this._tTime = 0), this;
          if (d !== this._time && !(h && this.vars.repeatRefresh && x !== E))
            return this;
          if (m !== this._dur) return this.render(r, o, h);
        }
        if (
          ((this._tTime = v),
          (this._time = S),
          !this._act && this._ts && ((this._act = 1), (this._lazy = 0)),
          (this.ratio = N = (G || this._ease)(S / m)),
          this._from && (this.ratio = N = 1 - N),
          S && !d && !o && !x && (Ye(this, "onStart"), this._tTime !== v))
        )
          return this;
        for (T = this._pt; T; ) T.r(N, T.d), (T = T._next);
        (M && M.render(r < 0 ? r : M._dur * M._ease(S / this._dur), o, h)) ||
          (this._startAt && (this._zTime = r)),
          this._onUpdate &&
            !o &&
            (y && hf(this, r, o, h), Ye(this, "onUpdate")),
          this._repeat &&
            x !== E &&
            this.vars.onRepeat &&
            !o &&
            this.parent &&
            Ye(this, "onRepeat"),
          (v === this._tDur || !v) &&
            this._tTime === v &&
            (y && !this._onUpdate && hf(this, r, !0, !0),
            (r || !m) &&
              ((v === this._tDur && this._ts > 0) || (!v && this._ts < 0)) &&
              xa(this, 1),
            !o &&
              !(y && !d) &&
              (v || d || A) &&
              (Ye(this, v === p ? "onComplete" : "onReverseComplete", !0),
              this._prom && !(v < p && this.timeScale() > 0) && this._prom()));
      }
      return this;
    }),
    (u.targets = function () {
      return this._targets;
    }),
    (u.invalidate = function (r) {
      return (
        (!r || !this.vars.runBackwards) && (this._startAt = 0),
        (this._pt = this._op = this._onUpdate = this._lazy = this.ratio = 0),
        (this._ptLookup = []),
        this.timeline && this.timeline.invalidate(r),
        s.prototype.invalidate.call(this, r)
      );
    }),
    (u.resetTo = function (r, o, h, d, p) {
      yu || qe.wake(), this._ts || this.play();
      var m = Math.min(this._dur, (this._dp._time - this._start) * this._ts),
        y;
      return (
        this._initted || Zf(this, m),
        (y = this._ease(m / this._dur)),
        rS(this, r, o, h, d, y, m, p)
          ? this.resetTo(r, o, h, d, 1)
          : (ps(this, 0),
            this.parent ||
              gy(
                this._dp,
                this,
                "_first",
                "_last",
                this._dp._sort ? "_start" : 0
              ),
            this.render(0))
      );
    }),
    (u.kill = function (r, o) {
      if ((o === void 0 && (o = "all"), !r && (!o || o === "all")))
        return (
          (this._lazy = this._pt = 0),
          this.parent
            ? ru(this)
            : this.scrollTrigger && this.scrollTrigger.kill(!!re),
          this
        );
      if (this.timeline) {
        var h = this.timeline.totalDuration();
        return (
          this.timeline.killTweensOf(r, o, ga && ga.vars.overwrite !== !0)
            ._first || ru(this),
          this.parent &&
            h !== this.timeline.totalDuration() &&
            Pl(this, (this._dur * this.timeline._tDur) / h, 0, 1),
          this
        );
      }
      var d = this._targets,
        p = r ? en(r) : d,
        m = this._ptLookup,
        y = this._pt,
        v,
        S,
        T,
        x,
        b,
        E,
        A;
      if ((!o || o === "all") && Hb(d, p))
        return o === "all" && (this._pt = 0), ru(this);
      for (
        v = this._op = this._op || [],
          o !== "all" &&
            (ae(o) &&
              ((b = {}),
              Te(o, function (N) {
                return (b[N] = 1);
              }),
              (o = b)),
            (o = sS(d, o))),
          A = d.length;
        A--;

      )
        if (~p.indexOf(d[A])) {
          (S = m[A]),
            o === "all"
              ? ((v[A] = o), (x = S), (T = {}))
              : ((T = v[A] = v[A] || {}), (x = o));
          for (b in x)
            (E = S && S[b]),
              E &&
                ((!("kill" in E.d) || E.d.kill(b) === !0) && ds(this, E, "_pt"),
                delete S[b]),
              T !== "all" && (T[b] = 1);
        }
      return this._initted && !this._pt && y && ru(this), this;
    }),
    (a.to = function (r, o) {
      return new a(r, o, arguments[2]);
    }),
    (a.from = function (r, o) {
      return ou(1, arguments);
    }),
    (a.delayedCall = function (r, o, h, d) {
      return new a(o, 0, {
        immediateRender: !1,
        lazy: !1,
        overwrite: !1,
        delay: r,
        onComplete: o,
        onReverseComplete: o,
        onCompleteParams: h,
        onReverseCompleteParams: h,
        callbackScope: d,
      });
    }),
    (a.fromTo = function (r, o, h) {
      return ou(2, arguments);
    }),
    (a.set = function (r, o) {
      return (o.duration = 0), o.repeatDelay || (o.repeat = 0), new a(r, o);
    }),
    (a.killTweensOf = function (r, o, h) {
      return Ht.killTweensOf(r, o, h);
    }),
    a
  );
})(gu);
Qe(Ft.prototype, { _targets: [], _lazy: 0, _startAt: 0, _op: 0, _onInit: 0 });
Te("staggerTo,staggerFrom,staggerFromTo", function (s) {
  Ft[s] = function () {
    var a = new ye(),
      u = mf.call(arguments, 0);
    return u.splice(s === "staggerFromTo" ? 5 : 4, 0, 0), a[s].apply(a, u);
  };
});
var Kf = function (a, u, i) {
    return (a[u] = i);
  },
  Yy = function (a, u, i) {
    return a[u](i);
  },
  oS = function (a, u, i, r) {
    return a[u](r.fp, i);
  },
  fS = function (a, u, i) {
    return a.setAttribute(u, i);
  },
  Jf = function (a, u) {
    return Vt(a[u]) ? Yy : Hf(a[u]) && a.setAttribute ? fS : Kf;
  },
  Xy = function (a, u) {
    return u.set(u.t, u.p, Math.round((u.s + u.c * a) * 1e6) / 1e6, u);
  },
  hS = function (a, u) {
    return u.set(u.t, u.p, !!(u.s + u.c * a), u);
  },
  Gy = function (a, u) {
    var i = u._pt,
      r = "";
    if (!a && u.b) r = u.b;
    else if (a === 1 && u.e) r = u.e;
    else {
      for (; i; )
        (r =
          i.p +
          (i.m ? i.m(i.s + i.c * a) : Math.round((i.s + i.c * a) * 1e4) / 1e4) +
          r),
          (i = i._next);
      r += u.c;
    }
    u.set(u.t, u.p, r, u);
  },
  Ff = function (a, u) {
    for (var i = u._pt; i; ) i.r(a, i.d), (i = i._next);
  },
  dS = function (a, u, i, r) {
    for (var o = this._pt, h; o; )
      (h = o._next), o.p === r && o.modifier(a, u, i), (o = h);
  },
  mS = function (a) {
    for (var u = this._pt, i, r; u; )
      (r = u._next),
        (u.p === a && !u.op) || u.op === a
          ? ds(this, u, "_pt")
          : u.dep || (i = 1),
        (u = r);
    return !i;
  },
  pS = function (a, u, i, r) {
    r.mSet(a, u, r.m.call(r.tween, i, r.mt), r);
  },
  Vy = function (a) {
    for (var u = a._pt, i, r, o, h; u; ) {
      for (i = u._next, r = o; r && r.pr > u.pr; ) r = r._next;
      (u._prev = r ? r._prev : h) ? (u._prev._next = u) : (o = u),
        (u._next = r) ? (r._prev = u) : (h = u),
        (u = i);
    }
    a._pt = o;
  },
  Ee = (function () {
    function s(u, i, r, o, h, d, p, m, y) {
      (this.t = i),
        (this.s = o),
        (this.c = h),
        (this.p = r),
        (this.r = d || Xy),
        (this.d = p || this),
        (this.set = m || Kf),
        (this.pr = y || 0),
        (this._next = u),
        u && (u._prev = this);
    }
    var a = s.prototype;
    return (
      (a.modifier = function (i, r, o) {
        (this.mSet = this.mSet || this.set),
          (this.set = pS),
          (this.m = i),
          (this.mt = o),
          (this.tween = r);
      }),
      s
    );
  })();
Te(
  Vf +
    "parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger",
  function (s) {
    return (Gf[s] = 1);
  }
);
Ve.TweenMax = Ve.TweenLite = Ft;
Ve.TimelineLite = Ve.TimelineMax = ye;
Ht = new ye({
  sortChildren: !1,
  defaults: Jl,
  autoRemoveChildren: !0,
  id: "root",
  smoothChildTiming: !0,
});
Xe.stringFilter = My;
var Pa = [],
  $r = {},
  yS = [],
  g0 = 0,
  gS = 0,
  Wo = function (a) {
    return ($r[a] || yS).map(function (u) {
      return u();
    });
  },
  _f = function () {
    var a = Date.now(),
      u = [];
    a - g0 > 2 &&
      (Wo("matchMediaInit"),
      Pa.forEach(function (i) {
        var r = i.queries,
          o = i.conditions,
          h,
          d,
          p,
          m;
        for (d in r)
          (h = mn.matchMedia(r[d]).matches),
            h && (p = 1),
            h !== o[d] && ((o[d] = h), (m = 1));
        m && (i.revert(), p && u.push(i));
      }),
      Wo("matchMediaRevert"),
      u.forEach(function (i) {
        return i.onMatch(i, function (r) {
          return i.add(null, r);
        });
      }),
      (g0 = a),
      Wo("matchMedia"));
  },
  Qy = (function () {
    function s(u, i) {
      (this.selector = i && pf(i)),
        (this.data = []),
        (this._r = []),
        (this.isReverted = !1),
        (this.id = gS++),
        u && this.add(u);
    }
    var a = s.prototype;
    return (
      (a.add = function (i, r, o) {
        Vt(i) && ((o = r), (r = i), (i = Vt));
        var h = this,
          d = function () {
            var m = Bt,
              y = h.selector,
              v;
            return (
              m && m !== h && m.data.push(h),
              o && (h.selector = pf(o)),
              (Bt = h),
              (v = r.apply(h, arguments)),
              Vt(v) && h._r.push(v),
              (Bt = m),
              (h.selector = y),
              (h.isReverted = !1),
              v
            );
          };
        return (
          (h.last = d),
          i === Vt
            ? d(h, function (p) {
                return h.add(null, p);
              })
            : i
            ? (h[i] = d)
            : d
        );
      }),
      (a.ignore = function (i) {
        var r = Bt;
        (Bt = null), i(this), (Bt = r);
      }),
      (a.getTweens = function () {
        var i = [];
        return (
          this.data.forEach(function (r) {
            return r instanceof s
              ? i.push.apply(i, r.getTweens())
              : r instanceof Ft &&
                  !(r.parent && r.parent.data === "nested") &&
                  i.push(r);
          }),
          i
        );
      }),
      (a.clear = function () {
        this._r.length = this.data.length = 0;
      }),
      (a.kill = function (i, r) {
        var o = this;
        if (
          (i
            ? (function () {
                for (var d = o.getTweens(), p = o.data.length, m; p--; )
                  (m = o.data[p]),
                    m.data === "isFlip" &&
                      (m.revert(),
                      m.getChildren(!0, !0, !1).forEach(function (y) {
                        return d.splice(d.indexOf(y), 1);
                      }));
                for (
                  d
                    .map(function (y) {
                      return {
                        g:
                          y._dur ||
                          y._delay ||
                          (y._sat && !y._sat.vars.immediateRender)
                            ? y.globalTime(0)
                            : -1 / 0,
                        t: y,
                      };
                    })
                    .sort(function (y, v) {
                      return v.g - y.g || -1 / 0;
                    })
                    .forEach(function (y) {
                      return y.t.revert(i);
                    }),
                    p = o.data.length;
                  p--;

                )
                  (m = o.data[p]),
                    m instanceof ye
                      ? m.data !== "nested" &&
                        (m.scrollTrigger && m.scrollTrigger.revert(), m.kill())
                      : !(m instanceof Ft) && m.revert && m.revert(i);
                o._r.forEach(function (y) {
                  return y(i, o);
                }),
                  (o.isReverted = !0);
              })()
            : this.data.forEach(function (d) {
                return d.kill && d.kill();
              }),
          this.clear(),
          r)
        )
          for (var h = Pa.length; h--; )
            Pa[h].id === this.id && Pa.splice(h, 1);
      }),
      (a.revert = function (i) {
        this.kill(i || {});
      }),
      s
    );
  })(),
  _S = (function () {
    function s(u) {
      (this.contexts = []), (this.scope = u), Bt && Bt.data.push(this);
    }
    var a = s.prototype;
    return (
      (a.add = function (i, r, o) {
        bn(i) || (i = { matches: i });
        var h = new Qy(0, o || this.scope),
          d = (h.conditions = {}),
          p,
          m,
          y;
        Bt && !h.selector && (h.selector = Bt.selector),
          this.contexts.push(h),
          (r = h.add("onMatch", r)),
          (h.queries = i);
        for (m in i)
          m === "all"
            ? (y = 1)
            : ((p = mn.matchMedia(i[m])),
              p &&
                (Pa.indexOf(h) < 0 && Pa.push(h),
                (d[m] = p.matches) && (y = 1),
                p.addListener
                  ? p.addListener(_f)
                  : p.addEventListener("change", _f)));
        return (
          y &&
            r(h, function (v) {
              return h.add(null, v);
            }),
          this
        );
      }),
      (a.revert = function (i) {
        this.kill(i || {});
      }),
      (a.kill = function (i) {
        this.contexts.forEach(function (r) {
          return r.kill(i, !0);
        });
      }),
      s
    );
  })(),
  is = {
    registerPlugin: function () {
      for (var a = arguments.length, u = new Array(a), i = 0; i < a; i++)
        u[i] = arguments[i];
      u.forEach(function (r) {
        return Dy(r);
      });
    },
    timeline: function (a) {
      return new ye(a);
    },
    getTweensOf: function (a, u) {
      return Ht.getTweensOf(a, u);
    },
    getProperty: function (a, u, i, r) {
      ae(a) && (a = en(a)[0]);
      var o = Ja(a || {}).get,
        h = i ? yy : py;
      return (
        i === "native" && (i = ""),
        a &&
          (u
            ? h(((He[u] && He[u].get) || o)(a, u, i, r))
            : function (d, p, m) {
                return h(((He[d] && He[d].get) || o)(a, d, p, m));
              })
      );
    },
    quickSetter: function (a, u, i) {
      if (((a = en(a)), a.length > 1)) {
        var r = a.map(function (y) {
            return Ae.quickSetter(y, u, i);
          }),
          o = r.length;
        return function (y) {
          for (var v = o; v--; ) r[v](y);
        };
      }
      a = a[0] || {};
      var h = He[u],
        d = Ja(a),
        p = (d.harness && (d.harness.aliases || {})[u]) || u,
        m = h
          ? function (y) {
              var v = new h();
              (Ql._pt = 0),
                v.init(a, i ? y + i : y, Ql, 0, [a]),
                v.render(1, v),
                Ql._pt && Ff(1, Ql);
            }
          : d.set(a, p);
      return h
        ? m
        : function (y) {
            return m(a, p, i ? y + i : y, d, 1);
          };
    },
    quickTo: function (a, u, i) {
      var r,
        o = Ae.to(
          a,
          Qe(
            ((r = {}), (r[u] = "+=0.1"), (r.paused = !0), (r.stagger = 0), r),
            i || {}
          )
        ),
        h = function (p, m, y) {
          return o.resetTo(u, p, m, y);
        };
      return (h.tween = o), h;
    },
    isTweening: function (a) {
      return Ht.getTweensOf(a, !0).length > 0;
    },
    defaults: function (a) {
      return a && a.ease && (a.ease = $a(a.ease, Jl.ease)), h0(Jl, a || {});
    },
    config: function (a) {
      return h0(Xe, a || {});
    },
    registerEffect: function (a) {
      var u = a.name,
        i = a.effect,
        r = a.plugins,
        o = a.defaults,
        h = a.extendTimeline;
      (r || "").split(",").forEach(function (d) {
        return (
          d && !He[d] && !Ve[d] && du(u + " effect requires " + d + " plugin.")
        );
      }),
        (Jo[u] = function (d, p, m) {
          return i(en(d), Qe(p || {}, o), m);
        }),
        h &&
          (ye.prototype[u] = function (d, p, m) {
            return this.add(Jo[u](d, bn(p) ? p : (m = p) && {}, this), m);
          });
    },
    registerEase: function (a, u) {
      _t[a] = $a(u);
    },
    parseEase: function (a, u) {
      return arguments.length ? $a(a, u) : _t;
    },
    getById: function (a) {
      return Ht.getById(a);
    },
    exportRoot: function (a, u) {
      a === void 0 && (a = {});
      var i = new ye(a),
        r,
        o;
      for (
        i.smoothChildTiming = xe(a.smoothChildTiming),
          Ht.remove(i),
          i._dp = 0,
          i._time = i._tTime = Ht._time,
          r = Ht._first;
        r;

      )
        (o = r._next),
          (u ||
            !(
              !r._dur &&
              r instanceof Ft &&
              r.vars.onComplete === r._targets[0]
            )) &&
            pn(i, r, r._start - r._delay),
          (r = o);
      return pn(Ht, i, 0), i;
    },
    context: function (a, u) {
      return a ? new Qy(a, u) : Bt;
    },
    matchMedia: function (a) {
      return new _S(a);
    },
    matchMediaRefresh: function () {
      return (
        Pa.forEach(function (a) {
          var u = a.conditions,
            i,
            r;
          for (r in u) u[r] && ((u[r] = !1), (i = 1));
          i && a.revert();
        }) || _f()
      );
    },
    addEventListener: function (a, u) {
      var i = $r[a] || ($r[a] = []);
      ~i.indexOf(u) || i.push(u);
    },
    removeEventListener: function (a, u) {
      var i = $r[a],
        r = i && i.indexOf(u);
      r >= 0 && i.splice(r, 1);
    },
    utils: {
      wrap: $b,
      wrapYoyo: Pb,
      distribute: Ty,
      random: Oy,
      snap: Ey,
      normalize: Fb,
      getUnit: fe,
      clamp: kb,
      splitColor: Cy,
      toArray: en,
      selector: pf,
      mapRange: Ay,
      pipe: Kb,
      unitize: Jb,
      interpolate: Wb,
      shuffle: xy,
    },
    install: oy,
    effects: Jo,
    ticker: qe,
    updateRoot: ye.updateRoot,
    plugins: He,
    globalTimeline: Ht,
    core: {
      PropTween: Ee,
      globals: fy,
      Tween: Ft,
      Timeline: ye,
      Animation: gu,
      getCache: Ja,
      _removeLinkedListItem: ds,
      reverting: function () {
        return re;
      },
      context: function (a) {
        return a && Bt && (Bt.data.push(a), (a._ctx = Bt)), Bt;
      },
      suppressOverwrites: function (a) {
        return (Lf = a);
      },
    },
  };
Te("to,from,fromTo,delayedCall,set,killTweensOf", function (s) {
  return (is[s] = Ft[s]);
});
qe.add(ye.updateRoot);
Ql = is.to({}, { duration: 0 });
var vS = function (a, u) {
    for (var i = a._pt; i && i.p !== u && i.op !== u && i.fp !== u; )
      i = i._next;
    return i;
  },
  bS = function (a, u) {
    var i = a._targets,
      r,
      o,
      h;
    for (r in u)
      for (o = i.length; o--; )
        (h = a._ptLookup[o][r]),
          h &&
            (h = h.d) &&
            (h._pt && (h = vS(h, r)),
            h && h.modifier && h.modifier(u[r], a, i[o], r));
  },
  Io = function (a, u) {
    return {
      name: a,
      rawVars: 1,
      init: function (r, o, h) {
        h._onInit = function (d) {
          var p, m;
          if (
            (ae(o) &&
              ((p = {}),
              Te(o, function (y) {
                return (p[y] = 1);
              }),
              (o = p)),
            u)
          ) {
            p = {};
            for (m in o) p[m] = u(o[m]);
            o = p;
          }
          bS(d, o);
        };
      },
    };
  },
  Ae =
    is.registerPlugin(
      {
        name: "attr",
        init: function (a, u, i, r, o) {
          var h, d, p;
          this.tween = i;
          for (h in u)
            (p = a.getAttribute(h) || ""),
              (d = this.add(
                a,
                "setAttribute",
                (p || 0) + "",
                u[h],
                r,
                o,
                0,
                0,
                h
              )),
              (d.op = h),
              (d.b = p),
              this._props.push(h);
        },
        render: function (a, u) {
          for (var i = u._pt; i; )
            re ? i.set(i.t, i.p, i.b, i) : i.r(a, i.d), (i = i._next);
        },
      },
      {
        name: "endArray",
        init: function (a, u) {
          for (var i = u.length; i--; )
            this.add(a, i, a[i] || 0, u[i], 0, 0, 0, 0, 0, 1);
        },
      },
      Io("roundProps", yf),
      Io("modifiers"),
      Io("snap", Ey)
    ) || is;
Ft.version = ye.version = Ae.version = "3.12.7";
cy = 1;
qf() && Wl();
_t.Power0;
_t.Power1;
_t.Power2;
_t.Power3;
_t.Power4;
_t.Linear;
_t.Quad;
_t.Cubic;
_t.Quart;
_t.Quint;
_t.Strong;
_t.Elastic;
_t.Back;
_t.SteppedEase;
_t.Bounce;
_t.Sine;
_t.Expo;
_t.Circ;
/*!
 * CSSPlugin 3.12.7
 * https://gsap.com
 *
 * Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
 */ var _0,
  _a,
  Zl,
  $f,
  Za,
  v0,
  Pf,
  SS = function () {
    return typeof window < "u";
  },
  Vn = {},
  ka = 180 / Math.PI,
  Kl = Math.PI / 180,
  Gl = Math.atan2,
  b0 = 1e8,
  Wf = /([A-Z])/g,
  xS = /(left|right|width|margin|padding|x)/i,
  TS = /[\s,\(]\S/,
  yn = {
    autoAlpha: "opacity,visibility",
    scale: "scaleX,scaleY",
    alpha: "opacity",
  },
  vf = function (a, u) {
    return u.set(u.t, u.p, Math.round((u.s + u.c * a) * 1e4) / 1e4 + u.u, u);
  },
  ES = function (a, u) {
    return u.set(
      u.t,
      u.p,
      a === 1 ? u.e : Math.round((u.s + u.c * a) * 1e4) / 1e4 + u.u,
      u
    );
  },
  OS = function (a, u) {
    return u.set(
      u.t,
      u.p,
      a ? Math.round((u.s + u.c * a) * 1e4) / 1e4 + u.u : u.b,
      u
    );
  },
  RS = function (a, u) {
    var i = u.s + u.c * a;
    u.set(u.t, u.p, ~~(i + (i < 0 ? -0.5 : 0.5)) + u.u, u);
  },
  ky = function (a, u) {
    return u.set(u.t, u.p, a ? u.e : u.b, u);
  },
  Zy = function (a, u) {
    return u.set(u.t, u.p, a !== 1 ? u.b : u.e, u);
  },
  AS = function (a, u, i) {
    return (a.style[u] = i);
  },
  wS = function (a, u, i) {
    return a.style.setProperty(u, i);
  },
  DS = function (a, u, i) {
    return (a._gsap[u] = i);
  },
  CS = function (a, u, i) {
    return (a._gsap.scaleX = a._gsap.scaleY = i);
  },
  NS = function (a, u, i, r, o) {
    var h = a._gsap;
    (h.scaleX = h.scaleY = i), h.renderTransform(o, h);
  },
  MS = function (a, u, i, r, o) {
    var h = a._gsap;
    (h[u] = i), h.renderTransform(o, h);
  },
  qt = "transform",
  Oe = qt + "Origin",
  zS = function s(a, u) {
    var i = this,
      r = this.target,
      o = r.style,
      h = r._gsap;
    if (a in Vn && o) {
      if (((this.tfm = this.tfm || {}), a !== "transform"))
        (a = yn[a] || a),
          ~a.indexOf(",")
            ? a.split(",").forEach(function (d) {
                return (i.tfm[d] = qn(r, d));
              })
            : (this.tfm[a] = h.x ? h[a] : qn(r, a)),
          a === Oe && (this.tfm.zOrigin = h.zOrigin);
      else
        return yn.transform.split(",").forEach(function (d) {
          return s.call(i, d, u);
        });
      if (this.props.indexOf(qt) >= 0) return;
      h.svg &&
        ((this.svgo = r.getAttribute("data-svg-origin")),
        this.props.push(Oe, u, "")),
        (a = qt);
    }
    (o || u) && this.props.push(a, u, o[a]);
  },
  Ky = function (a) {
    a.translate &&
      (a.removeProperty("translate"),
      a.removeProperty("scale"),
      a.removeProperty("rotate"));
  },
  US = function () {
    var a = this.props,
      u = this.target,
      i = u.style,
      r = u._gsap,
      o,
      h;
    for (o = 0; o < a.length; o += 3)
      a[o + 1]
        ? a[o + 1] === 2
          ? u[a[o]](a[o + 2])
          : (u[a[o]] = a[o + 2])
        : a[o + 2]
        ? (i[a[o]] = a[o + 2])
        : i.removeProperty(
            a[o].substr(0, 2) === "--"
              ? a[o]
              : a[o].replace(Wf, "-$1").toLowerCase()
          );
    if (this.tfm) {
      for (h in this.tfm) r[h] = this.tfm[h];
      r.svg &&
        (r.renderTransform(),
        u.setAttribute("data-svg-origin", this.svgo || "")),
        (o = Pf()),
        (!o || !o.isStart) &&
          !i[qt] &&
          (Ky(i),
          r.zOrigin &&
            i[Oe] &&
            ((i[Oe] += " " + r.zOrigin + "px"),
            (r.zOrigin = 0),
            r.renderTransform()),
          (r.uncache = 1));
    }
  },
  Jy = function (a, u) {
    var i = { target: a, props: [], revert: US, save: zS };
    return (
      a._gsap || Ae.core.getCache(a),
      u &&
        a.style &&
        a.nodeType &&
        u.split(",").forEach(function (r) {
          return i.save(r);
        }),
      i
    );
  },
  Fy,
  bf = function (a, u) {
    var i = _a.createElementNS
      ? _a.createElementNS(
          (u || "http://www.w3.org/1999/xhtml").replace(/^https/, "http"),
          a
        )
      : _a.createElement(a);
    return i && i.style ? i : _a.createElement(a);
  },
  _n = function s(a, u, i) {
    var r = getComputedStyle(a);
    return (
      r[u] ||
      r.getPropertyValue(u.replace(Wf, "-$1").toLowerCase()) ||
      r.getPropertyValue(u) ||
      (!i && s(a, Il(u) || u, 1)) ||
      ""
    );
  },
  S0 = "O,Moz,ms,Ms,Webkit".split(","),
  Il = function (a, u, i) {
    var r = u || Za,
      o = r.style,
      h = 5;
    if (a in o && !i) return a;
    for (
      a = a.charAt(0).toUpperCase() + a.substr(1);
      h-- && !(S0[h] + a in o);

    );
    return h < 0 ? null : (h === 3 ? "ms" : h >= 0 ? S0[h] : "") + a;
  },
  Sf = function () {
    SS() &&
      window.document &&
      ((_0 = window),
      (_a = _0.document),
      (Zl = _a.documentElement),
      (Za = bf("div") || { style: {} }),
      bf("div"),
      (qt = Il(qt)),
      (Oe = qt + "Origin"),
      (Za.style.cssText =
        "border-width:0;line-height:0;position:absolute;padding:0"),
      (Fy = !!Il("perspective")),
      (Pf = Ae.core.reverting),
      ($f = 1));
  },
  x0 = function (a) {
    var u = a.ownerSVGElement,
      i = bf(
        "svg",
        (u && u.getAttribute("xmlns")) || "http://www.w3.org/2000/svg"
      ),
      r = a.cloneNode(!0),
      o;
    (r.style.display = "block"), i.appendChild(r), Zl.appendChild(i);
    try {
      o = r.getBBox();
    } catch {}
    return i.removeChild(r), Zl.removeChild(i), o;
  },
  T0 = function (a, u) {
    for (var i = u.length; i--; )
      if (a.hasAttribute(u[i])) return a.getAttribute(u[i]);
  },
  $y = function (a) {
    var u, i;
    try {
      u = a.getBBox();
    } catch {
      (u = x0(a)), (i = 1);
    }
    return (
      (u && (u.width || u.height)) || i || (u = x0(a)),
      u && !u.width && !u.x && !u.y
        ? {
            x: +T0(a, ["x", "cx", "x1"]) || 0,
            y: +T0(a, ["y", "cy", "y1"]) || 0,
            width: 0,
            height: 0,
          }
        : u
    );
  },
  Py = function (a) {
    return !!(a.getCTM && (!a.parentNode || a.ownerSVGElement) && $y(a));
  },
  Ia = function (a, u) {
    if (u) {
      var i = a.style,
        r;
      u in Vn && u !== Oe && (u = qt),
        i.removeProperty
          ? ((r = u.substr(0, 2)),
            (r === "ms" || u.substr(0, 6) === "webkit") && (u = "-" + u),
            i.removeProperty(
              r === "--" ? u : u.replace(Wf, "-$1").toLowerCase()
            ))
          : i.removeAttribute(u);
    }
  },
  va = function (a, u, i, r, o, h) {
    var d = new Ee(a._pt, u, i, 0, 1, h ? Zy : ky);
    return (a._pt = d), (d.b = r), (d.e = o), a._props.push(i), d;
  },
  E0 = { deg: 1, rad: 1, turn: 1 },
  jS = { grid: 1, flex: 1 },
  Ta = function s(a, u, i, r) {
    var o = parseFloat(i) || 0,
      h = (i + "").trim().substr((o + "").length) || "px",
      d = Za.style,
      p = xS.test(u),
      m = a.tagName.toLowerCase() === "svg",
      y = (m ? "client" : "offset") + (p ? "Width" : "Height"),
      v = 100,
      S = r === "px",
      T = r === "%",
      x,
      b,
      E,
      A;
    if (r === h || !o || E0[r] || E0[h]) return o;
    if (
      (h !== "px" && !S && (o = s(a, u, i, "px")),
      (A = a.getCTM && Py(a)),
      (T || h === "%") && (Vn[u] || ~u.indexOf("adius")))
    )
      return (
        (x = A ? a.getBBox()[p ? "width" : "height"] : a[y]),
        Zt(T ? (o / x) * v : (o / 100) * x)
      );
    if (
      ((d[p ? "width" : "height"] = v + (S ? h : r)),
      (b =
        (r !== "rem" && ~u.indexOf("adius")) ||
        (r === "em" && a.appendChild && !m)
          ? a
          : a.parentNode),
      A && (b = (a.ownerSVGElement || {}).parentNode),
      (!b || b === _a || !b.appendChild) && (b = _a.body),
      (E = b._gsap),
      E && T && E.width && p && E.time === qe.time && !E.uncache)
    )
      return Zt((o / E.width) * v);
    if (T && (u === "height" || u === "width")) {
      var N = a.style[u];
      (a.style[u] = v + r), (x = a[y]), N ? (a.style[u] = N) : Ia(a, u);
    } else
      (T || h === "%") &&
        !jS[_n(b, "display")] &&
        (d.position = _n(a, "position")),
        b === a && (d.position = "static"),
        b.appendChild(Za),
        (x = Za[y]),
        b.removeChild(Za),
        (d.position = "absolute");
    return (
      p && T && ((E = Ja(b)), (E.time = qe.time), (E.width = b[y])),
      Zt(S ? (x * o) / v : x && o ? (v / x) * o : 0)
    );
  },
  qn = function (a, u, i, r) {
    var o;
    return (
      $f || Sf(),
      u in yn &&
        u !== "transform" &&
        ((u = yn[u]), ~u.indexOf(",") && (u = u.split(",")[0])),
      Vn[u] && u !== "transform"
        ? ((o = vu(a, r)),
          (o =
            u !== "transformOrigin"
              ? o[u]
              : o.svg
              ? o.origin
              : rs(_n(a, Oe)) + " " + o.zOrigin + "px"))
        : ((o = a.style[u]),
          (!o || o === "auto" || r || ~(o + "").indexOf("calc(")) &&
            (o =
              (us[u] && us[u](a, u, i)) ||
              _n(a, u) ||
              dy(a, u) ||
              (u === "opacity" ? 1 : 0))),
      i && !~(o + "").trim().indexOf(" ") ? Ta(a, u, o, i) + i : o
    );
  },
  BS = function (a, u, i, r) {
    if (!i || i === "none") {
      var o = Il(u, a, 1),
        h = o && _n(a, o, 1);
      h && h !== i
        ? ((u = o), (i = h))
        : u === "borderColor" && (i = _n(a, "borderTopColor"));
    }
    var d = new Ee(this._pt, a.style, u, 0, 1, Gy),
      p = 0,
      m = 0,
      y,
      v,
      S,
      T,
      x,
      b,
      E,
      A,
      N,
      M,
      G,
      U;
    if (
      ((d.b = i),
      (d.e = r),
      (i += ""),
      (r += ""),
      r === "auto" &&
        ((b = a.style[u]),
        (a.style[u] = r),
        (r = _n(a, u) || r),
        b ? (a.style[u] = b) : Ia(a, u)),
      (y = [i, r]),
      My(y),
      (i = y[0]),
      (r = y[1]),
      (S = i.match(Vl) || []),
      (U = r.match(Vl) || []),
      U.length)
    ) {
      for (; (v = Vl.exec(r)); )
        (E = v[0]),
          (N = r.substring(p, v.index)),
          x
            ? (x = (x + 1) % 5)
            : (N.substr(-5) === "rgba(" || N.substr(-5) === "hsla(") && (x = 1),
          E !== (b = S[m++] || "") &&
            ((T = parseFloat(b) || 0),
            (G = b.substr((T + "").length)),
            E.charAt(1) === "=" && (E = kl(T, E) + G),
            (A = parseFloat(E)),
            (M = E.substr((A + "").length)),
            (p = Vl.lastIndex - M.length),
            M ||
              ((M = M || Xe.units[u] || G),
              p === r.length && ((r += M), (d.e += M))),
            G !== M && (T = Ta(a, u, b, M) || 0),
            (d._pt = {
              _next: d._pt,
              p: N || m === 1 ? N : ",",
              s: T,
              c: A - T,
              m: (x && x < 4) || u === "zIndex" ? Math.round : 0,
            }));
      d.c = p < r.length ? r.substring(p, r.length) : "";
    } else d.r = u === "display" && r === "none" ? Zy : ky;
    return ry.test(r) && (d.e = 0), (this._pt = d), d;
  },
  O0 = { top: "0%", bottom: "100%", left: "0%", right: "100%", center: "50%" },
  LS = function (a) {
    var u = a.split(" "),
      i = u[0],
      r = u[1] || "50%";
    return (
      (i === "top" || i === "bottom" || r === "left" || r === "right") &&
        ((a = i), (i = r), (r = a)),
      (u[0] = O0[i] || i),
      (u[1] = O0[r] || r),
      u.join(" ")
    );
  },
  HS = function (a, u) {
    if (u.tween && u.tween._time === u.tween._dur) {
      var i = u.t,
        r = i.style,
        o = u.u,
        h = i._gsap,
        d,
        p,
        m;
      if (o === "all" || o === !0) (r.cssText = ""), (p = 1);
      else
        for (o = o.split(","), m = o.length; --m > -1; )
          (d = o[m]),
            Vn[d] && ((p = 1), (d = d === "transformOrigin" ? Oe : qt)),
            Ia(i, d);
      p &&
        (Ia(i, qt),
        h &&
          (h.svg && i.removeAttribute("transform"),
          (r.scale = r.rotate = r.translate = "none"),
          vu(i, 1),
          (h.uncache = 1),
          Ky(r)));
    }
  },
  us = {
    clearProps: function (a, u, i, r, o) {
      if (o.data !== "isFromStart") {
        var h = (a._pt = new Ee(a._pt, u, i, 0, 0, HS));
        return (h.u = r), (h.pr = -10), (h.tween = o), a._props.push(i), 1;
      }
    },
  },
  _u = [1, 0, 0, 1, 0, 0],
  Wy = {},
  Iy = function (a) {
    return a === "matrix(1, 0, 0, 1, 0, 0)" || a === "none" || !a;
  },
  R0 = function (a) {
    var u = _n(a, qt);
    return Iy(u) ? _u : u.substr(7).match(uy).map(Zt);
  },
  If = function (a, u) {
    var i = a._gsap || Ja(a),
      r = a.style,
      o = R0(a),
      h,
      d,
      p,
      m;
    return i.svg && a.getAttribute("transform")
      ? ((p = a.transform.baseVal.consolidate().matrix),
        (o = [p.a, p.b, p.c, p.d, p.e, p.f]),
        o.join(",") === "1,0,0,1,0,0" ? _u : o)
      : (o === _u &&
          !a.offsetParent &&
          a !== Zl &&
          !i.svg &&
          ((p = r.display),
          (r.display = "block"),
          (h = a.parentNode),
          (!h || (!a.offsetParent && !a.getBoundingClientRect().width)) &&
            ((m = 1), (d = a.nextElementSibling), Zl.appendChild(a)),
          (o = R0(a)),
          p ? (r.display = p) : Ia(a, "display"),
          m &&
            (d
              ? h.insertBefore(a, d)
              : h
              ? h.appendChild(a)
              : Zl.removeChild(a))),
        u && o.length > 6 ? [o[0], o[1], o[4], o[5], o[12], o[13]] : o);
  },
  xf = function (a, u, i, r, o, h) {
    var d = a._gsap,
      p = o || If(a, !0),
      m = d.xOrigin || 0,
      y = d.yOrigin || 0,
      v = d.xOffset || 0,
      S = d.yOffset || 0,
      T = p[0],
      x = p[1],
      b = p[2],
      E = p[3],
      A = p[4],
      N = p[5],
      M = u.split(" "),
      G = parseFloat(M[0]) || 0,
      U = parseFloat(M[1]) || 0,
      X,
      k,
      F,
      K;
    i
      ? p !== _u &&
        (k = T * E - x * b) &&
        ((F = G * (E / k) + U * (-b / k) + (b * N - E * A) / k),
        (K = G * (-x / k) + U * (T / k) - (T * N - x * A) / k),
        (G = F),
        (U = K))
      : ((X = $y(a)),
        (G = X.x + (~M[0].indexOf("%") ? (G / 100) * X.width : G)),
        (U = X.y + (~(M[1] || M[0]).indexOf("%") ? (U / 100) * X.height : U))),
      r || (r !== !1 && d.smooth)
        ? ((A = G - m),
          (N = U - y),
          (d.xOffset = v + (A * T + N * b) - A),
          (d.yOffset = S + (A * x + N * E) - N))
        : (d.xOffset = d.yOffset = 0),
      (d.xOrigin = G),
      (d.yOrigin = U),
      (d.smooth = !!r),
      (d.origin = u),
      (d.originIsAbsolute = !!i),
      (a.style[Oe] = "0px 0px"),
      h &&
        (va(h, d, "xOrigin", m, G),
        va(h, d, "yOrigin", y, U),
        va(h, d, "xOffset", v, d.xOffset),
        va(h, d, "yOffset", S, d.yOffset)),
      a.setAttribute("data-svg-origin", G + " " + U);
  },
  vu = function (a, u) {
    var i = a._gsap || new By(a);
    if ("x" in i && !u && !i.uncache) return i;
    var r = a.style,
      o = i.scaleX < 0,
      h = "px",
      d = "deg",
      p = getComputedStyle(a),
      m = _n(a, Oe) || "0",
      y,
      v,
      S,
      T,
      x,
      b,
      E,
      A,
      N,
      M,
      G,
      U,
      X,
      k,
      F,
      K,
      ut,
      mt,
      st,
      bt,
      zt,
      gt,
      q,
      $,
      tt,
      xt,
      w,
      J,
      P,
      W,
      et,
      ft;
    return (
      (y = v = S = b = E = A = N = M = G = 0),
      (T = x = 1),
      (i.svg = !!(a.getCTM && Py(a))),
      p.translate &&
        ((p.translate !== "none" ||
          p.scale !== "none" ||
          p.rotate !== "none") &&
          (r[qt] =
            (p.translate !== "none"
              ? "translate3d(" +
                (p.translate + " 0 0").split(" ").slice(0, 3).join(", ") +
                ") "
              : "") +
            (p.rotate !== "none" ? "rotate(" + p.rotate + ") " : "") +
            (p.scale !== "none"
              ? "scale(" + p.scale.split(" ").join(",") + ") "
              : "") +
            (p[qt] !== "none" ? p[qt] : "")),
        (r.scale = r.rotate = r.translate = "none")),
      (k = If(a, i.svg)),
      i.svg &&
        (i.uncache
          ? ((tt = a.getBBox()),
            (m = i.xOrigin - tt.x + "px " + (i.yOrigin - tt.y) + "px"),
            ($ = ""))
          : ($ = !u && a.getAttribute("data-svg-origin")),
        xf(a, $ || m, !!$ || i.originIsAbsolute, i.smooth !== !1, k)),
      (U = i.xOrigin || 0),
      (X = i.yOrigin || 0),
      k !== _u &&
        ((mt = k[0]),
        (st = k[1]),
        (bt = k[2]),
        (zt = k[3]),
        (y = gt = k[4]),
        (v = q = k[5]),
        k.length === 6
          ? ((T = Math.sqrt(mt * mt + st * st)),
            (x = Math.sqrt(zt * zt + bt * bt)),
            (b = mt || st ? Gl(st, mt) * ka : 0),
            (N = bt || zt ? Gl(bt, zt) * ka + b : 0),
            N && (x *= Math.abs(Math.cos(N * Kl))),
            i.svg &&
              ((y -= U - (U * mt + X * bt)), (v -= X - (U * st + X * zt))))
          : ((ft = k[6]),
            (W = k[7]),
            (w = k[8]),
            (J = k[9]),
            (P = k[10]),
            (et = k[11]),
            (y = k[12]),
            (v = k[13]),
            (S = k[14]),
            (F = Gl(ft, P)),
            (E = F * ka),
            F &&
              ((K = Math.cos(-F)),
              (ut = Math.sin(-F)),
              ($ = gt * K + w * ut),
              (tt = q * K + J * ut),
              (xt = ft * K + P * ut),
              (w = gt * -ut + w * K),
              (J = q * -ut + J * K),
              (P = ft * -ut + P * K),
              (et = W * -ut + et * K),
              (gt = $),
              (q = tt),
              (ft = xt)),
            (F = Gl(-bt, P)),
            (A = F * ka),
            F &&
              ((K = Math.cos(-F)),
              (ut = Math.sin(-F)),
              ($ = mt * K - w * ut),
              (tt = st * K - J * ut),
              (xt = bt * K - P * ut),
              (et = zt * ut + et * K),
              (mt = $),
              (st = tt),
              (bt = xt)),
            (F = Gl(st, mt)),
            (b = F * ka),
            F &&
              ((K = Math.cos(F)),
              (ut = Math.sin(F)),
              ($ = mt * K + st * ut),
              (tt = gt * K + q * ut),
              (st = st * K - mt * ut),
              (q = q * K - gt * ut),
              (mt = $),
              (gt = tt)),
            E &&
              Math.abs(E) + Math.abs(b) > 359.9 &&
              ((E = b = 0), (A = 180 - A)),
            (T = Zt(Math.sqrt(mt * mt + st * st + bt * bt))),
            (x = Zt(Math.sqrt(q * q + ft * ft))),
            (F = Gl(gt, q)),
            (N = Math.abs(F) > 2e-4 ? F * ka : 0),
            (G = et ? 1 / (et < 0 ? -et : et) : 0)),
        i.svg &&
          (($ = a.getAttribute("transform")),
          (i.forceCSS = a.setAttribute("transform", "") || !Iy(_n(a, qt))),
          $ && a.setAttribute("transform", $))),
      Math.abs(N) > 90 &&
        Math.abs(N) < 270 &&
        (o
          ? ((T *= -1), (N += b <= 0 ? 180 : -180), (b += b <= 0 ? 180 : -180))
          : ((x *= -1), (N += N <= 0 ? 180 : -180))),
      (u = u || i.uncache),
      (i.x =
        y -
        ((i.xPercent =
          y &&
          ((!u && i.xPercent) ||
            (Math.round(a.offsetWidth / 2) === Math.round(-y) ? -50 : 0)))
          ? (a.offsetWidth * i.xPercent) / 100
          : 0) +
        h),
      (i.y =
        v -
        ((i.yPercent =
          v &&
          ((!u && i.yPercent) ||
            (Math.round(a.offsetHeight / 2) === Math.round(-v) ? -50 : 0)))
          ? (a.offsetHeight * i.yPercent) / 100
          : 0) +
        h),
      (i.z = S + h),
      (i.scaleX = Zt(T)),
      (i.scaleY = Zt(x)),
      (i.rotation = Zt(b) + d),
      (i.rotationX = Zt(E) + d),
      (i.rotationY = Zt(A) + d),
      (i.skewX = N + d),
      (i.skewY = M + d),
      (i.transformPerspective = G + h),
      (i.zOrigin = parseFloat(m.split(" ")[2]) || (!u && i.zOrigin) || 0) &&
        (r[Oe] = rs(m)),
      (i.xOffset = i.yOffset = 0),
      (i.force3D = Xe.force3D),
      (i.renderTransform = i.svg ? YS : Fy ? tg : qS),
      (i.uncache = 0),
      i
    );
  },
  rs = function (a) {
    return (a = a.split(" "))[0] + " " + a[1];
  },
  tf = function (a, u, i) {
    var r = fe(u);
    return Zt(parseFloat(u) + parseFloat(Ta(a, "x", i + "px", r))) + r;
  },
  qS = function (a, u) {
    (u.z = "0px"),
      (u.rotationY = u.rotationX = "0deg"),
      (u.force3D = 0),
      tg(a, u);
  },
  Va = "0deg",
  iu = "0px",
  Qa = ") ",
  tg = function (a, u) {
    var i = u || this,
      r = i.xPercent,
      o = i.yPercent,
      h = i.x,
      d = i.y,
      p = i.z,
      m = i.rotation,
      y = i.rotationY,
      v = i.rotationX,
      S = i.skewX,
      T = i.skewY,
      x = i.scaleX,
      b = i.scaleY,
      E = i.transformPerspective,
      A = i.force3D,
      N = i.target,
      M = i.zOrigin,
      G = "",
      U = (A === "auto" && a && a !== 1) || A === !0;
    if (M && (v !== Va || y !== Va)) {
      var X = parseFloat(y) * Kl,
        k = Math.sin(X),
        F = Math.cos(X),
        K;
      (X = parseFloat(v) * Kl),
        (K = Math.cos(X)),
        (h = tf(N, h, k * K * -M)),
        (d = tf(N, d, -Math.sin(X) * -M)),
        (p = tf(N, p, F * K * -M + M));
    }
    E !== iu && (G += "perspective(" + E + Qa),
      (r || o) && (G += "translate(" + r + "%, " + o + "%) "),
      (U || h !== iu || d !== iu || p !== iu) &&
        (G +=
          p !== iu || U
            ? "translate3d(" + h + ", " + d + ", " + p + ") "
            : "translate(" + h + ", " + d + Qa),
      m !== Va && (G += "rotate(" + m + Qa),
      y !== Va && (G += "rotateY(" + y + Qa),
      v !== Va && (G += "rotateX(" + v + Qa),
      (S !== Va || T !== Va) && (G += "skew(" + S + ", " + T + Qa),
      (x !== 1 || b !== 1) && (G += "scale(" + x + ", " + b + Qa),
      (N.style[qt] = G || "translate(0, 0)");
  },
  YS = function (a, u) {
    var i = u || this,
      r = i.xPercent,
      o = i.yPercent,
      h = i.x,
      d = i.y,
      p = i.rotation,
      m = i.skewX,
      y = i.skewY,
      v = i.scaleX,
      S = i.scaleY,
      T = i.target,
      x = i.xOrigin,
      b = i.yOrigin,
      E = i.xOffset,
      A = i.yOffset,
      N = i.forceCSS,
      M = parseFloat(h),
      G = parseFloat(d),
      U,
      X,
      k,
      F,
      K;
    (p = parseFloat(p)),
      (m = parseFloat(m)),
      (y = parseFloat(y)),
      y && ((y = parseFloat(y)), (m += y), (p += y)),
      p || m
        ? ((p *= Kl),
          (m *= Kl),
          (U = Math.cos(p) * v),
          (X = Math.sin(p) * v),
          (k = Math.sin(p - m) * -S),
          (F = Math.cos(p - m) * S),
          m &&
            ((y *= Kl),
            (K = Math.tan(m - y)),
            (K = Math.sqrt(1 + K * K)),
            (k *= K),
            (F *= K),
            y &&
              ((K = Math.tan(y)),
              (K = Math.sqrt(1 + K * K)),
              (U *= K),
              (X *= K))),
          (U = Zt(U)),
          (X = Zt(X)),
          (k = Zt(k)),
          (F = Zt(F)))
        : ((U = v), (F = S), (X = k = 0)),
      ((M && !~(h + "").indexOf("px")) || (G && !~(d + "").indexOf("px"))) &&
        ((M = Ta(T, "x", h, "px")), (G = Ta(T, "y", d, "px"))),
      (x || b || E || A) &&
        ((M = Zt(M + x - (x * U + b * k) + E)),
        (G = Zt(G + b - (x * X + b * F) + A))),
      (r || o) &&
        ((K = T.getBBox()),
        (M = Zt(M + (r / 100) * K.width)),
        (G = Zt(G + (o / 100) * K.height))),
      (K =
        "matrix(" + U + "," + X + "," + k + "," + F + "," + M + "," + G + ")"),
      T.setAttribute("transform", K),
      N && (T.style[qt] = K);
  },
  XS = function (a, u, i, r, o) {
    var h = 360,
      d = ae(o),
      p = parseFloat(o) * (d && ~o.indexOf("rad") ? ka : 1),
      m = p - r,
      y = r + m + "deg",
      v,
      S;
    return (
      d &&
        ((v = o.split("_")[1]),
        v === "short" &&
          ((m %= h), m !== m % (h / 2) && (m += m < 0 ? h : -360)),
        v === "cw" && m < 0
          ? (m = ((m + h * b0) % h) - ~~(m / h) * h)
          : v === "ccw" && m > 0 && (m = ((m - h * b0) % h) - ~~(m / h) * h)),
      (a._pt = S = new Ee(a._pt, u, i, r, m, ES)),
      (S.e = y),
      (S.u = "deg"),
      a._props.push(i),
      S
    );
  },
  A0 = function (a, u) {
    for (var i in u) a[i] = u[i];
    return a;
  },
  GS = function (a, u, i) {
    var r = A0({}, i._gsap),
      o = "perspective,force3D,transformOrigin,svgOrigin",
      h = i.style,
      d,
      p,
      m,
      y,
      v,
      S,
      T,
      x;
    r.svg
      ? ((m = i.getAttribute("transform")),
        i.setAttribute("transform", ""),
        (h[qt] = u),
        (d = vu(i, 1)),
        Ia(i, qt),
        i.setAttribute("transform", m))
      : ((m = getComputedStyle(i)[qt]),
        (h[qt] = u),
        (d = vu(i, 1)),
        (h[qt] = m));
    for (p in Vn)
      (m = r[p]),
        (y = d[p]),
        m !== y &&
          o.indexOf(p) < 0 &&
          ((T = fe(m)),
          (x = fe(y)),
          (v = T !== x ? Ta(i, p, m, x) : parseFloat(m)),
          (S = parseFloat(y)),
          (a._pt = new Ee(a._pt, d, p, v, S - v, vf)),
          (a._pt.u = x || 0),
          a._props.push(p));
    A0(d, r);
  };
Te("padding,margin,Width,Radius", function (s, a) {
  var u = "Top",
    i = "Right",
    r = "Bottom",
    o = "Left",
    h = (a < 3 ? [u, i, r, o] : [u + o, u + i, r + i, r + o]).map(function (d) {
      return a < 2 ? s + d : "border" + d + s;
    });
  us[a > 1 ? "border" + s : s] = function (d, p, m, y, v) {
    var S, T;
    if (arguments.length < 4)
      return (
        (S = h.map(function (x) {
          return qn(d, x, m);
        })),
        (T = S.join(" ")),
        T.split(S[0]).length === 5 ? S[0] : T
      );
    (S = (y + "").split(" ")),
      (T = {}),
      h.forEach(function (x, b) {
        return (T[x] = S[b] = S[b] || S[((b - 1) / 2) | 0]);
      }),
      d.init(p, T, v);
  };
});
var eg = {
  name: "css",
  register: Sf,
  targetTest: function (a) {
    return a.style && a.nodeType;
  },
  init: function (a, u, i, r, o) {
    var h = this._props,
      d = a.style,
      p = i.vars.startAt,
      m,
      y,
      v,
      S,
      T,
      x,
      b,
      E,
      A,
      N,
      M,
      G,
      U,
      X,
      k,
      F;
    $f || Sf(),
      (this.styles = this.styles || Jy(a)),
      (F = this.styles.props),
      (this.tween = i);
    for (b in u)
      if (b !== "autoRound" && ((y = u[b]), !(He[b] && Ly(b, u, i, r, a, o)))) {
        if (
          ((T = typeof y),
          (x = us[b]),
          T === "function" && ((y = y.call(i, r, a, o)), (T = typeof y)),
          T === "string" && ~y.indexOf("random(") && (y = pu(y)),
          x)
        )
          x(this, a, b, y, i) && (k = 1);
        else if (b.substr(0, 2) === "--")
          (m = (getComputedStyle(a).getPropertyValue(b) + "").trim()),
            (y += ""),
            (Sa.lastIndex = 0),
            Sa.test(m) || ((E = fe(m)), (A = fe(y))),
            A ? E !== A && (m = Ta(a, b, m, A) + A) : E && (y += E),
            this.add(d, "setProperty", m, y, r, o, 0, 0, b),
            h.push(b),
            F.push(b, 0, d[b]);
        else if (T !== "undefined") {
          if (
            (p && b in p
              ? ((m = typeof p[b] == "function" ? p[b].call(i, r, a, o) : p[b]),
                ae(m) && ~m.indexOf("random(") && (m = pu(m)),
                fe(m + "") ||
                  m === "auto" ||
                  (m += Xe.units[b] || fe(qn(a, b)) || ""),
                (m + "").charAt(1) === "=" && (m = qn(a, b)))
              : (m = qn(a, b)),
            (S = parseFloat(m)),
            (N = T === "string" && y.charAt(1) === "=" && y.substr(0, 2)),
            N && (y = y.substr(2)),
            (v = parseFloat(y)),
            b in yn &&
              (b === "autoAlpha" &&
                (S === 1 && qn(a, "visibility") === "hidden" && v && (S = 0),
                F.push("visibility", 0, d.visibility),
                va(
                  this,
                  d,
                  "visibility",
                  S ? "inherit" : "hidden",
                  v ? "inherit" : "hidden",
                  !v
                )),
              b !== "scale" &&
                b !== "transform" &&
                ((b = yn[b]), ~b.indexOf(",") && (b = b.split(",")[0]))),
            (M = b in Vn),
            M)
          ) {
            if (
              (this.styles.save(b),
              G ||
                ((U = a._gsap),
                (U.renderTransform && !u.parseTransform) ||
                  vu(a, u.parseTransform),
                (X = u.smoothOrigin !== !1 && U.smooth),
                (G = this._pt =
                  new Ee(this._pt, d, qt, 0, 1, U.renderTransform, U, 0, -1)),
                (G.dep = 1)),
              b === "scale")
            )
              (this._pt = new Ee(
                this._pt,
                U,
                "scaleY",
                U.scaleY,
                (N ? kl(U.scaleY, N + v) : v) - U.scaleY || 0,
                vf
              )),
                (this._pt.u = 0),
                h.push("scaleY", b),
                (b += "X");
            else if (b === "transformOrigin") {
              F.push(Oe, 0, d[Oe]),
                (y = LS(y)),
                U.svg
                  ? xf(a, y, 0, X, 0, this)
                  : ((A = parseFloat(y.split(" ")[2]) || 0),
                    A !== U.zOrigin && va(this, U, "zOrigin", U.zOrigin, A),
                    va(this, d, b, rs(m), rs(y)));
              continue;
            } else if (b === "svgOrigin") {
              xf(a, y, 1, X, 0, this);
              continue;
            } else if (b in Wy) {
              XS(this, U, b, S, N ? kl(S, N + y) : y);
              continue;
            } else if (b === "smoothOrigin") {
              va(this, U, "smooth", U.smooth, y);
              continue;
            } else if (b === "force3D") {
              U[b] = y;
              continue;
            } else if (b === "transform") {
              GS(this, y, a);
              continue;
            }
          } else b in d || (b = Il(b) || b);
          if (M || ((v || v === 0) && (S || S === 0) && !TS.test(y) && b in d))
            (E = (m + "").substr((S + "").length)),
              v || (v = 0),
              (A = fe(y) || (b in Xe.units ? Xe.units[b] : E)),
              E !== A && (S = Ta(a, b, m, A)),
              (this._pt = new Ee(
                this._pt,
                M ? U : d,
                b,
                S,
                (N ? kl(S, N + v) : v) - S,
                !M && (A === "px" || b === "zIndex") && u.autoRound !== !1
                  ? RS
                  : vf
              )),
              (this._pt.u = A || 0),
              E !== A && A !== "%" && ((this._pt.b = m), (this._pt.r = OS));
          else if (b in d) BS.call(this, a, b, m, N ? N + y : y);
          else if (b in a) this.add(a, b, m || a[b], N ? N + y : y, r, o);
          else if (b !== "parseTransform") {
            Xf(b, y);
            continue;
          }
          M ||
            (b in d
              ? F.push(b, 0, d[b])
              : typeof a[b] == "function"
              ? F.push(b, 2, a[b]())
              : F.push(b, 1, m || a[b])),
            h.push(b);
        }
      }
    k && Vy(this);
  },
  render: function (a, u) {
    if (u.tween._time || !Pf())
      for (var i = u._pt; i; ) i.r(a, i.d), (i = i._next);
    else u.styles.revert();
  },
  get: qn,
  aliases: yn,
  getSetter: function (a, u, i) {
    var r = yn[u];
    return (
      r && r.indexOf(",") < 0 && (u = r),
      u in Vn && u !== Oe && (a._gsap.x || qn(a, "x"))
        ? i && v0 === i
          ? u === "scale"
            ? CS
            : DS
          : (v0 = i || {}) && (u === "scale" ? NS : MS)
        : a.style && !Hf(a.style[u])
        ? AS
        : ~u.indexOf("-")
        ? wS
        : Jf(a, u)
    );
  },
  core: { _removeProperty: Ia, _getMatrix: If },
};
Ae.utils.checkPrefix = Il;
Ae.core.getStyleSaver = Jy;
(function (s, a, u, i) {
  var r = Te(s + "," + a + "," + u, function (o) {
    Vn[o] = 1;
  });
  Te(a, function (o) {
    (Xe.units[o] = "deg"), (Wy[o] = 1);
  }),
    (yn[r[13]] = s + "," + a),
    Te(i, function (o) {
      var h = o.split(":");
      yn[h[1]] = r[h[0]];
    });
})(
  "x,y,z,scale,scaleX,scaleY,xPercent,yPercent",
  "rotation,rotationX,rotationY,skewX,skewY",
  "transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective",
  "0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY"
);
Te(
  "x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",
  function (s) {
    Xe.units[s] = "px";
  }
);
Ae.registerPlugin(eg);
var Tf = Ae.registerPlugin(eg) || Ae;
Tf.core.Tween;
function ng(s, a) {
  return function () {
    return s.apply(a, arguments);
  };
}
const { toString: VS } = Object.prototype,
  { getPrototypeOf: th } = Object,
  ys = ((s) => (a) => {
    const u = VS.call(a);
    return s[u] || (s[u] = u.slice(8, -1).toLowerCase());
  })(Object.create(null)),
  un = (s) => ((s = s.toLowerCase()), (a) => ys(a) === s),
  gs = (s) => (a) => typeof a === s,
  { isArray: ni } = Array,
  bu = gs("undefined");
function QS(s) {
  return (
    s !== null &&
    !bu(s) &&
    s.constructor !== null &&
    !bu(s.constructor) &&
    Ge(s.constructor.isBuffer) &&
    s.constructor.isBuffer(s)
  );
}
const ag = un("ArrayBuffer");
function kS(s) {
  let a;
  return (
    typeof ArrayBuffer < "u" && ArrayBuffer.isView
      ? (a = ArrayBuffer.isView(s))
      : (a = s && s.buffer && ag(s.buffer)),
    a
  );
}
const ZS = gs("string"),
  Ge = gs("function"),
  lg = gs("number"),
  _s = (s) => s !== null && typeof s == "object",
  KS = (s) => s === !0 || s === !1,
  Pr = (s) => {
    if (ys(s) !== "object") return !1;
    const a = th(s);
    return (
      (a === null ||
        a === Object.prototype ||
        Object.getPrototypeOf(a) === null) &&
      !(Symbol.toStringTag in s) &&
      !(Symbol.iterator in s)
    );
  },
  JS = un("Date"),
  FS = un("File"),
  $S = un("Blob"),
  PS = un("FileList"),
  WS = (s) => _s(s) && Ge(s.pipe),
  IS = (s) => {
    let a;
    return (
      s &&
      ((typeof FormData == "function" && s instanceof FormData) ||
        (Ge(s.append) &&
          ((a = ys(s)) === "formdata" ||
            (a === "object" &&
              Ge(s.toString) &&
              s.toString() === "[object FormData]"))))
    );
  },
  tx = un("URLSearchParams"),
  [ex, nx, ax, lx] = ["ReadableStream", "Request", "Response", "Headers"].map(
    un
  ),
  ix = (s) =>
    s.trim ? s.trim() : s.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
function Au(s, a, { allOwnKeys: u = !1 } = {}) {
  if (s === null || typeof s > "u") return;
  let i, r;
  if ((typeof s != "object" && (s = [s]), ni(s)))
    for (i = 0, r = s.length; i < r; i++) a.call(null, s[i], i, s);
  else {
    const o = u ? Object.getOwnPropertyNames(s) : Object.keys(s),
      h = o.length;
    let d;
    for (i = 0; i < h; i++) (d = o[i]), a.call(null, s[d], d, s);
  }
}
function ig(s, a) {
  a = a.toLowerCase();
  const u = Object.keys(s);
  let i = u.length,
    r;
  for (; i-- > 0; ) if (((r = u[i]), a === r.toLowerCase())) return r;
  return null;
}
const Ka =
    typeof globalThis < "u"
      ? globalThis
      : typeof self < "u"
      ? self
      : typeof window < "u"
      ? window
      : global,
  ug = (s) => !bu(s) && s !== Ka;
function Ef() {
  const { caseless: s } = (ug(this) && this) || {},
    a = {},
    u = (i, r) => {
      const o = (s && ig(a, r)) || r;
      Pr(a[o]) && Pr(i)
        ? (a[o] = Ef(a[o], i))
        : Pr(i)
        ? (a[o] = Ef({}, i))
        : ni(i)
        ? (a[o] = i.slice())
        : (a[o] = i);
    };
  for (let i = 0, r = arguments.length; i < r; i++)
    arguments[i] && Au(arguments[i], u);
  return a;
}
const ux = (s, a, u, { allOwnKeys: i } = {}) => (
    Au(
      a,
      (r, o) => {
        u && Ge(r) ? (s[o] = ng(r, u)) : (s[o] = r);
      },
      { allOwnKeys: i }
    ),
    s
  ),
  rx = (s) => (s.charCodeAt(0) === 65279 && (s = s.slice(1)), s),
  sx = (s, a, u, i) => {
    (s.prototype = Object.create(a.prototype, i)),
      (s.prototype.constructor = s),
      Object.defineProperty(s, "super", { value: a.prototype }),
      u && Object.assign(s.prototype, u);
  },
  cx = (s, a, u, i) => {
    let r, o, h;
    const d = {};
    if (((a = a || {}), s == null)) return a;
    do {
      for (r = Object.getOwnPropertyNames(s), o = r.length; o-- > 0; )
        (h = r[o]), (!i || i(h, s, a)) && !d[h] && ((a[h] = s[h]), (d[h] = !0));
      s = u !== !1 && th(s);
    } while (s && (!u || u(s, a)) && s !== Object.prototype);
    return a;
  },
  ox = (s, a, u) => {
    (s = String(s)),
      (u === void 0 || u > s.length) && (u = s.length),
      (u -= a.length);
    const i = s.indexOf(a, u);
    return i !== -1 && i === u;
  },
  fx = (s) => {
    if (!s) return null;
    if (ni(s)) return s;
    let a = s.length;
    if (!lg(a)) return null;
    const u = new Array(a);
    for (; a-- > 0; ) u[a] = s[a];
    return u;
  },
  hx = (
    (s) => (a) =>
      s && a instanceof s
  )(typeof Uint8Array < "u" && th(Uint8Array)),
  dx = (s, a) => {
    const i = (s && s[Symbol.iterator]).call(s);
    let r;
    for (; (r = i.next()) && !r.done; ) {
      const o = r.value;
      a.call(s, o[0], o[1]);
    }
  },
  mx = (s, a) => {
    let u;
    const i = [];
    for (; (u = s.exec(a)) !== null; ) i.push(u);
    return i;
  },
  px = un("HTMLFormElement"),
  yx = (s) =>
    s.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g, function (u, i, r) {
      return i.toUpperCase() + r;
    }),
  w0 = (
    ({ hasOwnProperty: s }) =>
    (a, u) =>
      s.call(a, u)
  )(Object.prototype),
  gx = un("RegExp"),
  rg = (s, a) => {
    const u = Object.getOwnPropertyDescriptors(s),
      i = {};
    Au(u, (r, o) => {
      let h;
      (h = a(r, o, s)) !== !1 && (i[o] = h || r);
    }),
      Object.defineProperties(s, i);
  },
  _x = (s) => {
    rg(s, (a, u) => {
      if (Ge(s) && ["arguments", "caller", "callee"].indexOf(u) !== -1)
        return !1;
      const i = s[u];
      if (Ge(i)) {
        if (((a.enumerable = !1), "writable" in a)) {
          a.writable = !1;
          return;
        }
        a.set ||
          (a.set = () => {
            throw Error("Can not rewrite read-only method '" + u + "'");
          });
      }
    });
  },
  vx = (s, a) => {
    const u = {},
      i = (r) => {
        r.forEach((o) => {
          u[o] = !0;
        });
      };
    return ni(s) ? i(s) : i(String(s).split(a)), u;
  },
  bx = () => {},
  Sx = (s, a) => (s != null && Number.isFinite((s = +s)) ? s : a);
function xx(s) {
  return !!(
    s &&
    Ge(s.append) &&
    s[Symbol.toStringTag] === "FormData" &&
    s[Symbol.iterator]
  );
}
const Tx = (s) => {
    const a = new Array(10),
      u = (i, r) => {
        if (_s(i)) {
          if (a.indexOf(i) >= 0) return;
          if (!("toJSON" in i)) {
            a[r] = i;
            const o = ni(i) ? [] : {};
            return (
              Au(i, (h, d) => {
                const p = u(h, r + 1);
                !bu(p) && (o[d] = p);
              }),
              (a[r] = void 0),
              o
            );
          }
        }
        return i;
      };
    return u(s, 0);
  },
  Ex = un("AsyncFunction"),
  Ox = (s) => s && (_s(s) || Ge(s)) && Ge(s.then) && Ge(s.catch),
  sg = ((s, a) =>
    s
      ? setImmediate
      : a
      ? ((u, i) => (
          Ka.addEventListener(
            "message",
            ({ source: r, data: o }) => {
              r === Ka && o === u && i.length && i.shift()();
            },
            !1
          ),
          (r) => {
            i.push(r), Ka.postMessage(u, "*");
          }
        ))(`axios@${Math.random()}`, [])
      : (u) => setTimeout(u))(
    typeof setImmediate == "function",
    Ge(Ka.postMessage)
  ),
  Rx =
    typeof queueMicrotask < "u"
      ? queueMicrotask.bind(Ka)
      : (typeof process < "u" && process.nextTick) || sg,
  Y = {
    isArray: ni,
    isArrayBuffer: ag,
    isBuffer: QS,
    isFormData: IS,
    isArrayBufferView: kS,
    isString: ZS,
    isNumber: lg,
    isBoolean: KS,
    isObject: _s,
    isPlainObject: Pr,
    isReadableStream: ex,
    isRequest: nx,
    isResponse: ax,
    isHeaders: lx,
    isUndefined: bu,
    isDate: JS,
    isFile: FS,
    isBlob: $S,
    isRegExp: gx,
    isFunction: Ge,
    isStream: WS,
    isURLSearchParams: tx,
    isTypedArray: hx,
    isFileList: PS,
    forEach: Au,
    merge: Ef,
    extend: ux,
    trim: ix,
    stripBOM: rx,
    inherits: sx,
    toFlatObject: cx,
    kindOf: ys,
    kindOfTest: un,
    endsWith: ox,
    toArray: fx,
    forEachEntry: dx,
    matchAll: mx,
    isHTMLForm: px,
    hasOwnProperty: w0,
    hasOwnProp: w0,
    reduceDescriptors: rg,
    freezeMethods: _x,
    toObjectSet: vx,
    toCamelCase: yx,
    noop: bx,
    toFiniteNumber: Sx,
    findKey: ig,
    global: Ka,
    isContextDefined: ug,
    isSpecCompliantForm: xx,
    toJSONObject: Tx,
    isAsyncFn: Ex,
    isThenable: Ox,
    setImmediate: sg,
    asap: Rx,
  };
function ct(s, a, u, i, r) {
  Error.call(this),
    Error.captureStackTrace
      ? Error.captureStackTrace(this, this.constructor)
      : (this.stack = new Error().stack),
    (this.message = s),
    (this.name = "AxiosError"),
    a && (this.code = a),
    u && (this.config = u),
    i && (this.request = i),
    r && ((this.response = r), (this.status = r.status ? r.status : null));
}
Y.inherits(ct, Error, {
  toJSON: function () {
    return {
      message: this.message,
      name: this.name,
      description: this.description,
      number: this.number,
      fileName: this.fileName,
      lineNumber: this.lineNumber,
      columnNumber: this.columnNumber,
      stack: this.stack,
      config: Y.toJSONObject(this.config),
      code: this.code,
      status: this.status,
    };
  },
});
const cg = ct.prototype,
  og = {};
[
  "ERR_BAD_OPTION_VALUE",
  "ERR_BAD_OPTION",
  "ECONNABORTED",
  "ETIMEDOUT",
  "ERR_NETWORK",
  "ERR_FR_TOO_MANY_REDIRECTS",
  "ERR_DEPRECATED",
  "ERR_BAD_RESPONSE",
  "ERR_BAD_REQUEST",
  "ERR_CANCELED",
  "ERR_NOT_SUPPORT",
  "ERR_INVALID_URL",
].forEach((s) => {
  og[s] = { value: s };
});
Object.defineProperties(ct, og);
Object.defineProperty(cg, "isAxiosError", { value: !0 });
ct.from = (s, a, u, i, r, o) => {
  const h = Object.create(cg);
  return (
    Y.toFlatObject(
      s,
      h,
      function (p) {
        return p !== Error.prototype;
      },
      (d) => d !== "isAxiosError"
    ),
    ct.call(h, s.message, a, u, i, r),
    (h.cause = s),
    (h.name = s.name),
    o && Object.assign(h, o),
    h
  );
};
const Ax = null;
function Of(s) {
  return Y.isPlainObject(s) || Y.isArray(s);
}
function fg(s) {
  return Y.endsWith(s, "[]") ? s.slice(0, -2) : s;
}
function D0(s, a, u) {
  return s
    ? s
        .concat(a)
        .map(function (r, o) {
          return (r = fg(r)), !u && o ? "[" + r + "]" : r;
        })
        .join(u ? "." : "")
    : a;
}
function wx(s) {
  return Y.isArray(s) && !s.some(Of);
}
const Dx = Y.toFlatObject(Y, {}, null, function (a) {
  return /^is[A-Z]/.test(a);
});
function vs(s, a, u) {
  if (!Y.isObject(s)) throw new TypeError("target must be an object");
  (a = a || new FormData()),
    (u = Y.toFlatObject(
      u,
      { metaTokens: !0, dots: !1, indexes: !1 },
      !1,
      function (b, E) {
        return !Y.isUndefined(E[b]);
      }
    ));
  const i = u.metaTokens,
    r = u.visitor || y,
    o = u.dots,
    h = u.indexes,
    p = (u.Blob || (typeof Blob < "u" && Blob)) && Y.isSpecCompliantForm(a);
  if (!Y.isFunction(r)) throw new TypeError("visitor must be a function");
  function m(x) {
    if (x === null) return "";
    if (Y.isDate(x)) return x.toISOString();
    if (!p && Y.isBlob(x))
      throw new ct("Blob is not supported. Use a Buffer instead.");
    return Y.isArrayBuffer(x) || Y.isTypedArray(x)
      ? p && typeof Blob == "function"
        ? new Blob([x])
        : Buffer.from(x)
      : x;
  }
  function y(x, b, E) {
    let A = x;
    if (x && !E && typeof x == "object") {
      if (Y.endsWith(b, "{}"))
        (b = i ? b : b.slice(0, -2)), (x = JSON.stringify(x));
      else if (
        (Y.isArray(x) && wx(x)) ||
        ((Y.isFileList(x) || Y.endsWith(b, "[]")) && (A = Y.toArray(x)))
      )
        return (
          (b = fg(b)),
          A.forEach(function (M, G) {
            !(Y.isUndefined(M) || M === null) &&
              a.append(
                h === !0 ? D0([b], G, o) : h === null ? b : b + "[]",
                m(M)
              );
          }),
          !1
        );
    }
    return Of(x) ? !0 : (a.append(D0(E, b, o), m(x)), !1);
  }
  const v = [],
    S = Object.assign(Dx, {
      defaultVisitor: y,
      convertValue: m,
      isVisitable: Of,
    });
  function T(x, b) {
    if (!Y.isUndefined(x)) {
      if (v.indexOf(x) !== -1)
        throw Error("Circular reference detected in " + b.join("."));
      v.push(x),
        Y.forEach(x, function (A, N) {
          (!(Y.isUndefined(A) || A === null) &&
            r.call(a, A, Y.isString(N) ? N.trim() : N, b, S)) === !0 &&
            T(A, b ? b.concat(N) : [N]);
        }),
        v.pop();
    }
  }
  if (!Y.isObject(s)) throw new TypeError("data must be an object");
  return T(s), a;
}
function C0(s) {
  const a = {
    "!": "%21",
    "'": "%27",
    "(": "%28",
    ")": "%29",
    "~": "%7E",
    "%20": "+",
    "%00": "\0",
  };
  return encodeURIComponent(s).replace(/[!'()~]|%20|%00/g, function (i) {
    return a[i];
  });
}
function eh(s, a) {
  (this._pairs = []), s && vs(s, this, a);
}
const hg = eh.prototype;
hg.append = function (a, u) {
  this._pairs.push([a, u]);
};
hg.toString = function (a) {
  const u = a
    ? function (i) {
        return a.call(this, i, C0);
      }
    : C0;
  return this._pairs
    .map(function (r) {
      return u(r[0]) + "=" + u(r[1]);
    }, "")
    .join("&");
};
function Cx(s) {
  return encodeURIComponent(s)
    .replace(/%3A/gi, ":")
    .replace(/%24/g, "$")
    .replace(/%2C/gi, ",")
    .replace(/%20/g, "+")
    .replace(/%5B/gi, "[")
    .replace(/%5D/gi, "]");
}
function dg(s, a, u) {
  if (!a) return s;
  const i = (u && u.encode) || Cx;
  Y.isFunction(u) && (u = { serialize: u });
  const r = u && u.serialize;
  let o;
  if (
    (r
      ? (o = r(a, u))
      : (o = Y.isURLSearchParams(a) ? a.toString() : new eh(a, u).toString(i)),
    o)
  ) {
    const h = s.indexOf("#");
    h !== -1 && (s = s.slice(0, h)),
      (s += (s.indexOf("?") === -1 ? "?" : "&") + o);
  }
  return s;
}
class N0 {
  constructor() {
    this.handlers = [];
  }
  use(a, u, i) {
    return (
      this.handlers.push({
        fulfilled: a,
        rejected: u,
        synchronous: i ? i.synchronous : !1,
        runWhen: i ? i.runWhen : null,
      }),
      this.handlers.length - 1
    );
  }
  eject(a) {
    this.handlers[a] && (this.handlers[a] = null);
  }
  clear() {
    this.handlers && (this.handlers = []);
  }
  forEach(a) {
    Y.forEach(this.handlers, function (i) {
      i !== null && a(i);
    });
  }
}
const mg = {
    silentJSONParsing: !0,
    forcedJSONParsing: !0,
    clarifyTimeoutError: !1,
  },
  Nx = typeof URLSearchParams < "u" ? URLSearchParams : eh,
  Mx = typeof FormData < "u" ? FormData : null,
  zx = typeof Blob < "u" ? Blob : null,
  Ux = {
    isBrowser: !0,
    classes: { URLSearchParams: Nx, FormData: Mx, Blob: zx },
    protocols: ["http", "https", "file", "blob", "url", "data"],
  },
  nh = typeof window < "u" && typeof document < "u",
  Rf = (typeof navigator == "object" && navigator) || void 0,
  jx =
    nh &&
    (!Rf || ["ReactNative", "NativeScript", "NS"].indexOf(Rf.product) < 0),
  Bx =
    typeof WorkerGlobalScope < "u" &&
    self instanceof WorkerGlobalScope &&
    typeof self.importScripts == "function",
  Lx = (nh && window.location.href) || "http://localhost",
  Hx = Object.freeze(
    Object.defineProperty(
      {
        __proto__: null,
        hasBrowserEnv: nh,
        hasStandardBrowserEnv: jx,
        hasStandardBrowserWebWorkerEnv: Bx,
        navigator: Rf,
        origin: Lx,
      },
      Symbol.toStringTag,
      { value: "Module" }
    )
  ),
  he = { ...Hx, ...Ux };
function qx(s, a) {
  return vs(
    s,
    new he.classes.URLSearchParams(),
    Object.assign(
      {
        visitor: function (u, i, r, o) {
          return he.isNode && Y.isBuffer(u)
            ? (this.append(i, u.toString("base64")), !1)
            : o.defaultVisitor.apply(this, arguments);
        },
      },
      a
    )
  );
}
function Yx(s) {
  return Y.matchAll(/\w+|\[(\w*)]/g, s).map((a) =>
    a[0] === "[]" ? "" : a[1] || a[0]
  );
}
function Xx(s) {
  const a = {},
    u = Object.keys(s);
  let i;
  const r = u.length;
  let o;
  for (i = 0; i < r; i++) (o = u[i]), (a[o] = s[o]);
  return a;
}
function pg(s) {
  function a(u, i, r, o) {
    let h = u[o++];
    if (h === "__proto__") return !0;
    const d = Number.isFinite(+h),
      p = o >= u.length;
    return (
      (h = !h && Y.isArray(r) ? r.length : h),
      p
        ? (Y.hasOwnProp(r, h) ? (r[h] = [r[h], i]) : (r[h] = i), !d)
        : ((!r[h] || !Y.isObject(r[h])) && (r[h] = []),
          a(u, i, r[h], o) && Y.isArray(r[h]) && (r[h] = Xx(r[h])),
          !d)
    );
  }
  if (Y.isFormData(s) && Y.isFunction(s.entries)) {
    const u = {};
    return (
      Y.forEachEntry(s, (i, r) => {
        a(Yx(i), r, u, 0);
      }),
      u
    );
  }
  return null;
}
function Gx(s, a, u) {
  if (Y.isString(s))
    try {
      return (a || JSON.parse)(s), Y.trim(s);
    } catch (i) {
      if (i.name !== "SyntaxError") throw i;
    }
  return (u || JSON.stringify)(s);
}
const wu = {
  transitional: mg,
  adapter: ["xhr", "http", "fetch"],
  transformRequest: [
    function (a, u) {
      const i = u.getContentType() || "",
        r = i.indexOf("application/json") > -1,
        o = Y.isObject(a);
      if ((o && Y.isHTMLForm(a) && (a = new FormData(a)), Y.isFormData(a)))
        return r ? JSON.stringify(pg(a)) : a;
      if (
        Y.isArrayBuffer(a) ||
        Y.isBuffer(a) ||
        Y.isStream(a) ||
        Y.isFile(a) ||
        Y.isBlob(a) ||
        Y.isReadableStream(a)
      )
        return a;
      if (Y.isArrayBufferView(a)) return a.buffer;
      if (Y.isURLSearchParams(a))
        return (
          u.setContentType(
            "application/x-www-form-urlencoded;charset=utf-8",
            !1
          ),
          a.toString()
        );
      let d;
      if (o) {
        if (i.indexOf("application/x-www-form-urlencoded") > -1)
          return qx(a, this.formSerializer).toString();
        if ((d = Y.isFileList(a)) || i.indexOf("multipart/form-data") > -1) {
          const p = this.env && this.env.FormData;
          return vs(
            d ? { "files[]": a } : a,
            p && new p(),
            this.formSerializer
          );
        }
      }
      return o || r ? (u.setContentType("application/json", !1), Gx(a)) : a;
    },
  ],
  transformResponse: [
    function (a) {
      const u = this.transitional || wu.transitional,
        i = u && u.forcedJSONParsing,
        r = this.responseType === "json";
      if (Y.isResponse(a) || Y.isReadableStream(a)) return a;
      if (a && Y.isString(a) && ((i && !this.responseType) || r)) {
        const h = !(u && u.silentJSONParsing) && r;
        try {
          return JSON.parse(a);
        } catch (d) {
          if (h)
            throw d.name === "SyntaxError"
              ? ct.from(d, ct.ERR_BAD_RESPONSE, this, null, this.response)
              : d;
        }
      }
      return a;
    },
  ],
  timeout: 0,
  xsrfCookieName: "XSRF-TOKEN",
  xsrfHeaderName: "X-XSRF-TOKEN",
  maxContentLength: -1,
  maxBodyLength: -1,
  env: { FormData: he.classes.FormData, Blob: he.classes.Blob },
  validateStatus: function (a) {
    return a >= 200 && a < 300;
  },
  headers: {
    common: {
      Accept: "application/json, text/plain, */*",
      "Content-Type": void 0,
    },
  },
};
Y.forEach(["delete", "get", "head", "post", "put", "patch"], (s) => {
  wu.headers[s] = {};
});
const Vx = Y.toObjectSet([
    "age",
    "authorization",
    "content-length",
    "content-type",
    "etag",
    "expires",
    "from",
    "host",
    "if-modified-since",
    "if-unmodified-since",
    "last-modified",
    "location",
    "max-forwards",
    "proxy-authorization",
    "referer",
    "retry-after",
    "user-agent",
  ]),
  Qx = (s) => {
    const a = {};
    let u, i, r;
    return (
      s &&
        s
          .split(
            `
`
          )
          .forEach(function (h) {
            (r = h.indexOf(":")),
              (u = h.substring(0, r).trim().toLowerCase()),
              (i = h.substring(r + 1).trim()),
              !(!u || (a[u] && Vx[u])) &&
                (u === "set-cookie"
                  ? a[u]
                    ? a[u].push(i)
                    : (a[u] = [i])
                  : (a[u] = a[u] ? a[u] + ", " + i : i));
          }),
      a
    );
  },
  M0 = Symbol("internals");
function uu(s) {
  return s && String(s).trim().toLowerCase();
}
function Wr(s) {
  return s === !1 || s == null ? s : Y.isArray(s) ? s.map(Wr) : String(s);
}
function kx(s) {
  const a = Object.create(null),
    u = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
  let i;
  for (; (i = u.exec(s)); ) a[i[1]] = i[2];
  return a;
}
const Zx = (s) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(s.trim());
function ef(s, a, u, i, r) {
  if (Y.isFunction(i)) return i.call(this, a, u);
  if ((r && (a = u), !!Y.isString(a))) {
    if (Y.isString(i)) return a.indexOf(i) !== -1;
    if (Y.isRegExp(i)) return i.test(a);
  }
}
function Kx(s) {
  return s
    .trim()
    .toLowerCase()
    .replace(/([a-z\d])(\w*)/g, (a, u, i) => u.toUpperCase() + i);
}
function Jx(s, a) {
  const u = Y.toCamelCase(" " + a);
  ["get", "set", "has"].forEach((i) => {
    Object.defineProperty(s, i + u, {
      value: function (r, o, h) {
        return this[i].call(this, a, r, o, h);
      },
      configurable: !0,
    });
  });
}
let Re = class {
  constructor(a) {
    a && this.set(a);
  }
  set(a, u, i) {
    const r = this;
    function o(d, p, m) {
      const y = uu(p);
      if (!y) throw new Error("header name must be a non-empty string");
      const v = Y.findKey(r, y);
      (!v || r[v] === void 0 || m === !0 || (m === void 0 && r[v] !== !1)) &&
        (r[v || p] = Wr(d));
    }
    const h = (d, p) => Y.forEach(d, (m, y) => o(m, y, p));
    if (Y.isPlainObject(a) || a instanceof this.constructor) h(a, u);
    else if (Y.isString(a) && (a = a.trim()) && !Zx(a)) h(Qx(a), u);
    else if (Y.isHeaders(a)) for (const [d, p] of a.entries()) o(p, d, i);
    else a != null && o(u, a, i);
    return this;
  }
  get(a, u) {
    if (((a = uu(a)), a)) {
      const i = Y.findKey(this, a);
      if (i) {
        const r = this[i];
        if (!u) return r;
        if (u === !0) return kx(r);
        if (Y.isFunction(u)) return u.call(this, r, i);
        if (Y.isRegExp(u)) return u.exec(r);
        throw new TypeError("parser must be boolean|regexp|function");
      }
    }
  }
  has(a, u) {
    if (((a = uu(a)), a)) {
      const i = Y.findKey(this, a);
      return !!(i && this[i] !== void 0 && (!u || ef(this, this[i], i, u)));
    }
    return !1;
  }
  delete(a, u) {
    const i = this;
    let r = !1;
    function o(h) {
      if (((h = uu(h)), h)) {
        const d = Y.findKey(i, h);
        d && (!u || ef(i, i[d], d, u)) && (delete i[d], (r = !0));
      }
    }
    return Y.isArray(a) ? a.forEach(o) : o(a), r;
  }
  clear(a) {
    const u = Object.keys(this);
    let i = u.length,
      r = !1;
    for (; i--; ) {
      const o = u[i];
      (!a || ef(this, this[o], o, a, !0)) && (delete this[o], (r = !0));
    }
    return r;
  }
  normalize(a) {
    const u = this,
      i = {};
    return (
      Y.forEach(this, (r, o) => {
        const h = Y.findKey(i, o);
        if (h) {
          (u[h] = Wr(r)), delete u[o];
          return;
        }
        const d = a ? Kx(o) : String(o).trim();
        d !== o && delete u[o], (u[d] = Wr(r)), (i[d] = !0);
      }),
      this
    );
  }
  concat(...a) {
    return this.constructor.concat(this, ...a);
  }
  toJSON(a) {
    const u = Object.create(null);
    return (
      Y.forEach(this, (i, r) => {
        i != null && i !== !1 && (u[r] = a && Y.isArray(i) ? i.join(", ") : i);
      }),
      u
    );
  }
  [Symbol.iterator]() {
    return Object.entries(this.toJSON())[Symbol.iterator]();
  }
  toString() {
    return Object.entries(this.toJSON()).map(([a, u]) => a + ": " + u).join(`
`);
  }
  get [Symbol.toStringTag]() {
    return "AxiosHeaders";
  }
  static from(a) {
    return a instanceof this ? a : new this(a);
  }
  static concat(a, ...u) {
    const i = new this(a);
    return u.forEach((r) => i.set(r)), i;
  }
  static accessor(a) {
    const i = (this[M0] = this[M0] = { accessors: {} }).accessors,
      r = this.prototype;
    function o(h) {
      const d = uu(h);
      i[d] || (Jx(r, h), (i[d] = !0));
    }
    return Y.isArray(a) ? a.forEach(o) : o(a), this;
  }
};
Re.accessor([
  "Content-Type",
  "Content-Length",
  "Accept",
  "Accept-Encoding",
  "User-Agent",
  "Authorization",
]);
Y.reduceDescriptors(Re.prototype, ({ value: s }, a) => {
  let u = a[0].toUpperCase() + a.slice(1);
  return {
    get: () => s,
    set(i) {
      this[u] = i;
    },
  };
});
Y.freezeMethods(Re);
function nf(s, a) {
  const u = this || wu,
    i = a || u,
    r = Re.from(i.headers);
  let o = i.data;
  return (
    Y.forEach(s, function (d) {
      o = d.call(u, o, r.normalize(), a ? a.status : void 0);
    }),
    r.normalize(),
    o
  );
}
function yg(s) {
  return !!(s && s.__CANCEL__);
}
function ai(s, a, u) {
  ct.call(this, s ?? "canceled", ct.ERR_CANCELED, a, u),
    (this.name = "CanceledError");
}
Y.inherits(ai, ct, { __CANCEL__: !0 });
function gg(s, a, u) {
  const i = u.config.validateStatus;
  !u.status || !i || i(u.status)
    ? s(u)
    : a(
        new ct(
          "Request failed with status code " + u.status,
          [ct.ERR_BAD_REQUEST, ct.ERR_BAD_RESPONSE][
            Math.floor(u.status / 100) - 4
          ],
          u.config,
          u.request,
          u
        )
      );
}
function Fx(s) {
  const a = /^([-+\w]{1,25})(:?\/\/|:)/.exec(s);
  return (a && a[1]) || "";
}
function $x(s, a) {
  s = s || 10;
  const u = new Array(s),
    i = new Array(s);
  let r = 0,
    o = 0,
    h;
  return (
    (a = a !== void 0 ? a : 1e3),
    function (p) {
      const m = Date.now(),
        y = i[o];
      h || (h = m), (u[r] = p), (i[r] = m);
      let v = o,
        S = 0;
      for (; v !== r; ) (S += u[v++]), (v = v % s);
      if (((r = (r + 1) % s), r === o && (o = (o + 1) % s), m - h < a)) return;
      const T = y && m - y;
      return T ? Math.round((S * 1e3) / T) : void 0;
    }
  );
}
function Px(s, a) {
  let u = 0,
    i = 1e3 / a,
    r,
    o;
  const h = (m, y = Date.now()) => {
    (u = y), (r = null), o && (clearTimeout(o), (o = null)), s.apply(null, m);
  };
  return [
    (...m) => {
      const y = Date.now(),
        v = y - u;
      v >= i
        ? h(m, y)
        : ((r = m),
          o ||
            (o = setTimeout(() => {
              (o = null), h(r);
            }, i - v)));
    },
    () => r && h(r),
  ];
}
const ss = (s, a, u = 3) => {
    let i = 0;
    const r = $x(50, 250);
    return Px((o) => {
      const h = o.loaded,
        d = o.lengthComputable ? o.total : void 0,
        p = h - i,
        m = r(p),
        y = h <= d;
      i = h;
      const v = {
        loaded: h,
        total: d,
        progress: d ? h / d : void 0,
        bytes: p,
        rate: m || void 0,
        estimated: m && d && y ? (d - h) / m : void 0,
        event: o,
        lengthComputable: d != null,
        [a ? "download" : "upload"]: !0,
      };
      s(v);
    }, u);
  },
  z0 = (s, a) => {
    const u = s != null;
    return [(i) => a[0]({ lengthComputable: u, total: s, loaded: i }), a[1]];
  },
  U0 =
    (s) =>
    (...a) =>
      Y.asap(() => s(...a)),
  Wx = he.hasStandardBrowserEnv
    ? ((s, a) => (u) => (
        (u = new URL(u, he.origin)),
        s.protocol === u.protocol &&
          s.host === u.host &&
          (a || s.port === u.port)
      ))(
        new URL(he.origin),
        he.navigator && /(msie|trident)/i.test(he.navigator.userAgent)
      )
    : () => !0,
  Ix = he.hasStandardBrowserEnv
    ? {
        write(s, a, u, i, r, o) {
          const h = [s + "=" + encodeURIComponent(a)];
          Y.isNumber(u) && h.push("expires=" + new Date(u).toGMTString()),
            Y.isString(i) && h.push("path=" + i),
            Y.isString(r) && h.push("domain=" + r),
            o === !0 && h.push("secure"),
            (document.cookie = h.join("; "));
        },
        read(s) {
          const a = document.cookie.match(
            new RegExp("(^|;\\s*)(" + s + ")=([^;]*)")
          );
          return a ? decodeURIComponent(a[3]) : null;
        },
        remove(s) {
          this.write(s, "", Date.now() - 864e5);
        },
      }
    : {
        write() {},
        read() {
          return null;
        },
        remove() {},
      };
function tT(s) {
  return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(s);
}
function eT(s, a) {
  return a ? s.replace(/\/?\/$/, "") + "/" + a.replace(/^\/+/, "") : s;
}
function _g(s, a, u) {
  let i = !tT(a);
  return s && (i || u == !1) ? eT(s, a) : a;
}
const j0 = (s) => (s instanceof Re ? { ...s } : s);
function tl(s, a) {
  a = a || {};
  const u = {};
  function i(m, y, v, S) {
    return Y.isPlainObject(m) && Y.isPlainObject(y)
      ? Y.merge.call({ caseless: S }, m, y)
      : Y.isPlainObject(y)
      ? Y.merge({}, y)
      : Y.isArray(y)
      ? y.slice()
      : y;
  }
  function r(m, y, v, S) {
    if (Y.isUndefined(y)) {
      if (!Y.isUndefined(m)) return i(void 0, m, v, S);
    } else return i(m, y, v, S);
  }
  function o(m, y) {
    if (!Y.isUndefined(y)) return i(void 0, y);
  }
  function h(m, y) {
    if (Y.isUndefined(y)) {
      if (!Y.isUndefined(m)) return i(void 0, m);
    } else return i(void 0, y);
  }
  function d(m, y, v) {
    if (v in a) return i(m, y);
    if (v in s) return i(void 0, m);
  }
  const p = {
    url: o,
    method: o,
    data: o,
    baseURL: h,
    transformRequest: h,
    transformResponse: h,
    paramsSerializer: h,
    timeout: h,
    timeoutMessage: h,
    withCredentials: h,
    withXSRFToken: h,
    adapter: h,
    responseType: h,
    xsrfCookieName: h,
    xsrfHeaderName: h,
    onUploadProgress: h,
    onDownloadProgress: h,
    decompress: h,
    maxContentLength: h,
    maxBodyLength: h,
    beforeRedirect: h,
    transport: h,
    httpAgent: h,
    httpsAgent: h,
    cancelToken: h,
    socketPath: h,
    responseEncoding: h,
    validateStatus: d,
    headers: (m, y, v) => r(j0(m), j0(y), v, !0),
  };
  return (
    Y.forEach(Object.keys(Object.assign({}, s, a)), function (y) {
      const v = p[y] || r,
        S = v(s[y], a[y], y);
      (Y.isUndefined(S) && v !== d) || (u[y] = S);
    }),
    u
  );
}
const vg = (s) => {
    const a = tl({}, s);
    let {
      data: u,
      withXSRFToken: i,
      xsrfHeaderName: r,
      xsrfCookieName: o,
      headers: h,
      auth: d,
    } = a;
    (a.headers = h = Re.from(h)),
      (a.url = dg(
        _g(a.baseURL, a.url, a.allowAbsoluteUrls),
        s.params,
        s.paramsSerializer
      )),
      d &&
        h.set(
          "Authorization",
          "Basic " +
            btoa(
              (d.username || "") +
                ":" +
                (d.password ? unescape(encodeURIComponent(d.password)) : "")
            )
        );
    let p;
    if (Y.isFormData(u)) {
      if (he.hasStandardBrowserEnv || he.hasStandardBrowserWebWorkerEnv)
        h.setContentType(void 0);
      else if ((p = h.getContentType()) !== !1) {
        const [m, ...y] = p
          ? p
              .split(";")
              .map((v) => v.trim())
              .filter(Boolean)
          : [];
        h.setContentType([m || "multipart/form-data", ...y].join("; "));
      }
    }
    if (
      he.hasStandardBrowserEnv &&
      (i && Y.isFunction(i) && (i = i(a)), i || (i !== !1 && Wx(a.url)))
    ) {
      const m = r && o && Ix.read(o);
      m && h.set(r, m);
    }
    return a;
  },
  nT = typeof XMLHttpRequest < "u",
  aT =
    nT &&
    function (s) {
      return new Promise(function (u, i) {
        const r = vg(s);
        let o = r.data;
        const h = Re.from(r.headers).normalize();
        let { responseType: d, onUploadProgress: p, onDownloadProgress: m } = r,
          y,
          v,
          S,
          T,
          x;
        function b() {
          T && T(),
            x && x(),
            r.cancelToken && r.cancelToken.unsubscribe(y),
            r.signal && r.signal.removeEventListener("abort", y);
        }
        let E = new XMLHttpRequest();
        E.open(r.method.toUpperCase(), r.url, !0), (E.timeout = r.timeout);
        function A() {
          if (!E) return;
          const M = Re.from(
              "getAllResponseHeaders" in E && E.getAllResponseHeaders()
            ),
            U = {
              data:
                !d || d === "text" || d === "json"
                  ? E.responseText
                  : E.response,
              status: E.status,
              statusText: E.statusText,
              headers: M,
              config: s,
              request: E,
            };
          gg(
            function (k) {
              u(k), b();
            },
            function (k) {
              i(k), b();
            },
            U
          ),
            (E = null);
        }
        "onloadend" in E
          ? (E.onloadend = A)
          : (E.onreadystatechange = function () {
              !E ||
                E.readyState !== 4 ||
                (E.status === 0 &&
                  !(E.responseURL && E.responseURL.indexOf("file:") === 0)) ||
                setTimeout(A);
            }),
          (E.onabort = function () {
            E &&
              (i(new ct("Request aborted", ct.ECONNABORTED, s, E)), (E = null));
          }),
          (E.onerror = function () {
            i(new ct("Network Error", ct.ERR_NETWORK, s, E)), (E = null);
          }),
          (E.ontimeout = function () {
            let G = r.timeout
              ? "timeout of " + r.timeout + "ms exceeded"
              : "timeout exceeded";
            const U = r.transitional || mg;
            r.timeoutErrorMessage && (G = r.timeoutErrorMessage),
              i(
                new ct(
                  G,
                  U.clarifyTimeoutError ? ct.ETIMEDOUT : ct.ECONNABORTED,
                  s,
                  E
                )
              ),
              (E = null);
          }),
          o === void 0 && h.setContentType(null),
          "setRequestHeader" in E &&
            Y.forEach(h.toJSON(), function (G, U) {
              E.setRequestHeader(U, G);
            }),
          Y.isUndefined(r.withCredentials) ||
            (E.withCredentials = !!r.withCredentials),
          d && d !== "json" && (E.responseType = r.responseType),
          m && (([S, x] = ss(m, !0)), E.addEventListener("progress", S)),
          p &&
            E.upload &&
            (([v, T] = ss(p)),
            E.upload.addEventListener("progress", v),
            E.upload.addEventListener("loadend", T)),
          (r.cancelToken || r.signal) &&
            ((y = (M) => {
              E &&
                (i(!M || M.type ? new ai(null, s, E) : M),
                E.abort(),
                (E = null));
            }),
            r.cancelToken && r.cancelToken.subscribe(y),
            r.signal &&
              (r.signal.aborted ? y() : r.signal.addEventListener("abort", y)));
        const N = Fx(r.url);
        if (N && he.protocols.indexOf(N) === -1) {
          i(new ct("Unsupported protocol " + N + ":", ct.ERR_BAD_REQUEST, s));
          return;
        }
        E.send(o || null);
      });
    },
  lT = (s, a) => {
    const { length: u } = (s = s ? s.filter(Boolean) : []);
    if (a || u) {
      let i = new AbortController(),
        r;
      const o = function (m) {
        if (!r) {
          (r = !0), d();
          const y = m instanceof Error ? m : this.reason;
          i.abort(
            y instanceof ct ? y : new ai(y instanceof Error ? y.message : y)
          );
        }
      };
      let h =
        a &&
        setTimeout(() => {
          (h = null), o(new ct(`timeout ${a} of ms exceeded`, ct.ETIMEDOUT));
        }, a);
      const d = () => {
        s &&
          (h && clearTimeout(h),
          (h = null),
          s.forEach((m) => {
            m.unsubscribe
              ? m.unsubscribe(o)
              : m.removeEventListener("abort", o);
          }),
          (s = null));
      };
      s.forEach((m) => m.addEventListener("abort", o));
      const { signal: p } = i;
      return (p.unsubscribe = () => Y.asap(d)), p;
    }
  },
  iT = function* (s, a) {
    let u = s.byteLength;
    if (u < a) {
      yield s;
      return;
    }
    let i = 0,
      r;
    for (; i < u; ) (r = i + a), yield s.slice(i, r), (i = r);
  },
  uT = async function* (s, a) {
    for await (const u of rT(s)) yield* iT(u, a);
  },
  rT = async function* (s) {
    if (s[Symbol.asyncIterator]) {
      yield* s;
      return;
    }
    const a = s.getReader();
    try {
      for (;;) {
        const { done: u, value: i } = await a.read();
        if (u) break;
        yield i;
      }
    } finally {
      await a.cancel();
    }
  },
  B0 = (s, a, u, i) => {
    const r = uT(s, a);
    let o = 0,
      h,
      d = (p) => {
        h || ((h = !0), i && i(p));
      };
    return new ReadableStream(
      {
        async pull(p) {
          try {
            const { done: m, value: y } = await r.next();
            if (m) {
              d(), p.close();
              return;
            }
            let v = y.byteLength;
            if (u) {
              let S = (o += v);
              u(S);
            }
            p.enqueue(new Uint8Array(y));
          } catch (m) {
            throw (d(m), m);
          }
        },
        cancel(p) {
          return d(p), r.return();
        },
      },
      { highWaterMark: 2 }
    );
  },
  bs =
    typeof fetch == "function" &&
    typeof Request == "function" &&
    typeof Response == "function",
  bg = bs && typeof ReadableStream == "function",
  sT =
    bs &&
    (typeof TextEncoder == "function"
      ? (
          (s) => (a) =>
            s.encode(a)
        )(new TextEncoder())
      : async (s) => new Uint8Array(await new Response(s).arrayBuffer())),
  Sg = (s, ...a) => {
    try {
      return !!s(...a);
    } catch {
      return !1;
    }
  },
  cT =
    bg &&
    Sg(() => {
      let s = !1;
      const a = new Request(he.origin, {
        body: new ReadableStream(),
        method: "POST",
        get duplex() {
          return (s = !0), "half";
        },
      }).headers.has("Content-Type");
      return s && !a;
    }),
  L0 = 64 * 1024,
  Af = bg && Sg(() => Y.isReadableStream(new Response("").body)),
  cs = { stream: Af && ((s) => s.body) };
bs &&
  ((s) => {
    ["text", "arrayBuffer", "blob", "formData", "stream"].forEach((a) => {
      !cs[a] &&
        (cs[a] = Y.isFunction(s[a])
          ? (u) => u[a]()
          : (u, i) => {
              throw new ct(
                `Response type '${a}' is not supported`,
                ct.ERR_NOT_SUPPORT,
                i
              );
            });
    });
  })(new Response());
const oT = async (s) => {
    if (s == null) return 0;
    if (Y.isBlob(s)) return s.size;
    if (Y.isSpecCompliantForm(s))
      return (
        await new Request(he.origin, { method: "POST", body: s }).arrayBuffer()
      ).byteLength;
    if (Y.isArrayBufferView(s) || Y.isArrayBuffer(s)) return s.byteLength;
    if ((Y.isURLSearchParams(s) && (s = s + ""), Y.isString(s)))
      return (await sT(s)).byteLength;
  },
  fT = async (s, a) => {
    const u = Y.toFiniteNumber(s.getContentLength());
    return u ?? oT(a);
  },
  hT =
    bs &&
    (async (s) => {
      let {
        url: a,
        method: u,
        data: i,
        signal: r,
        cancelToken: o,
        timeout: h,
        onDownloadProgress: d,
        onUploadProgress: p,
        responseType: m,
        headers: y,
        withCredentials: v = "same-origin",
        fetchOptions: S,
      } = vg(s);
      m = m ? (m + "").toLowerCase() : "text";
      let T = lT([r, o && o.toAbortSignal()], h),
        x;
      const b =
        T &&
        T.unsubscribe &&
        (() => {
          T.unsubscribe();
        });
      let E;
      try {
        if (
          p &&
          cT &&
          u !== "get" &&
          u !== "head" &&
          (E = await fT(y, i)) !== 0
        ) {
          let U = new Request(a, { method: "POST", body: i, duplex: "half" }),
            X;
          if (
            (Y.isFormData(i) &&
              (X = U.headers.get("content-type")) &&
              y.setContentType(X),
            U.body)
          ) {
            const [k, F] = z0(E, ss(U0(p)));
            i = B0(U.body, L0, k, F);
          }
        }
        Y.isString(v) || (v = v ? "include" : "omit");
        const A = "credentials" in Request.prototype;
        x = new Request(a, {
          ...S,
          signal: T,
          method: u.toUpperCase(),
          headers: y.normalize().toJSON(),
          body: i,
          duplex: "half",
          credentials: A ? v : void 0,
        });
        let N = await fetch(x);
        const M = Af && (m === "stream" || m === "response");
        if (Af && (d || (M && b))) {
          const U = {};
          ["status", "statusText", "headers"].forEach((K) => {
            U[K] = N[K];
          });
          const X = Y.toFiniteNumber(N.headers.get("content-length")),
            [k, F] = (d && z0(X, ss(U0(d), !0))) || [];
          N = new Response(
            B0(N.body, L0, k, () => {
              F && F(), b && b();
            }),
            U
          );
        }
        m = m || "text";
        let G = await cs[Y.findKey(cs, m) || "text"](N, s);
        return (
          !M && b && b(),
          await new Promise((U, X) => {
            gg(U, X, {
              data: G,
              headers: Re.from(N.headers),
              status: N.status,
              statusText: N.statusText,
              config: s,
              request: x,
            });
          })
        );
      } catch (A) {
        throw (
          (b && b(),
          A && A.name === "TypeError" && /fetch/i.test(A.message)
            ? Object.assign(new ct("Network Error", ct.ERR_NETWORK, s, x), {
                cause: A.cause || A,
              })
            : ct.from(A, A && A.code, s, x))
        );
      }
    }),
  wf = { http: Ax, xhr: aT, fetch: hT };
Y.forEach(wf, (s, a) => {
  if (s) {
    try {
      Object.defineProperty(s, "name", { value: a });
    } catch {}
    Object.defineProperty(s, "adapterName", { value: a });
  }
});
const H0 = (s) => `- ${s}`,
  dT = (s) => Y.isFunction(s) || s === null || s === !1,
  xg = {
    getAdapter: (s) => {
      s = Y.isArray(s) ? s : [s];
      const { length: a } = s;
      let u, i;
      const r = {};
      for (let o = 0; o < a; o++) {
        u = s[o];
        let h;
        if (
          ((i = u),
          !dT(u) && ((i = wf[(h = String(u)).toLowerCase()]), i === void 0))
        )
          throw new ct(`Unknown adapter '${h}'`);
        if (i) break;
        r[h || "#" + o] = i;
      }
      if (!i) {
        const o = Object.entries(r).map(
          ([d, p]) =>
            `adapter ${d} ` +
            (p === !1
              ? "is not supported by the environment"
              : "is not available in the build")
        );
        let h = a
          ? o.length > 1
            ? `since :
` +
              o.map(H0).join(`
`)
            : " " + H0(o[0])
          : "as no adapter specified";
        throw new ct(
          "There is no suitable adapter to dispatch the request " + h,
          "ERR_NOT_SUPPORT"
        );
      }
      return i;
    },
    adapters: wf,
  };
function af(s) {
  if (
    (s.cancelToken && s.cancelToken.throwIfRequested(),
    s.signal && s.signal.aborted)
  )
    throw new ai(null, s);
}
function q0(s) {
  return (
    af(s),
    (s.headers = Re.from(s.headers)),
    (s.data = nf.call(s, s.transformRequest)),
    ["post", "put", "patch"].indexOf(s.method) !== -1 &&
      s.headers.setContentType("application/x-www-form-urlencoded", !1),
    xg
      .getAdapter(s.adapter || wu.adapter)(s)
      .then(
        function (i) {
          return (
            af(s),
            (i.data = nf.call(s, s.transformResponse, i)),
            (i.headers = Re.from(i.headers)),
            i
          );
        },
        function (i) {
          return (
            yg(i) ||
              (af(s),
              i &&
                i.response &&
                ((i.response.data = nf.call(
                  s,
                  s.transformResponse,
                  i.response
                )),
                (i.response.headers = Re.from(i.response.headers)))),
            Promise.reject(i)
          );
        }
      )
  );
}
const Tg = "1.8.4",
  Ss = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach(
  (s, a) => {
    Ss[s] = function (i) {
      return typeof i === s || "a" + (a < 1 ? "n " : " ") + s;
    };
  }
);
const Y0 = {};
Ss.transitional = function (a, u, i) {
  function r(o, h) {
    return (
      "[Axios v" +
      Tg +
      "] Transitional option '" +
      o +
      "'" +
      h +
      (i ? ". " + i : "")
    );
  }
  return (o, h, d) => {
    if (a === !1)
      throw new ct(
        r(h, " has been removed" + (u ? " in " + u : "")),
        ct.ERR_DEPRECATED
      );
    return (
      u &&
        !Y0[h] &&
        ((Y0[h] = !0),
        console.warn(
          r(
            h,
            " has been deprecated since v" +
              u +
              " and will be removed in the near future"
          )
        )),
      a ? a(o, h, d) : !0
    );
  };
};
Ss.spelling = function (a) {
  return (u, i) => (console.warn(`${i} is likely a misspelling of ${a}`), !0);
};
function mT(s, a, u) {
  if (typeof s != "object")
    throw new ct("options must be an object", ct.ERR_BAD_OPTION_VALUE);
  const i = Object.keys(s);
  let r = i.length;
  for (; r-- > 0; ) {
    const o = i[r],
      h = a[o];
    if (h) {
      const d = s[o],
        p = d === void 0 || h(d, o, s);
      if (p !== !0)
        throw new ct("option " + o + " must be " + p, ct.ERR_BAD_OPTION_VALUE);
      continue;
    }
    if (u !== !0) throw new ct("Unknown option " + o, ct.ERR_BAD_OPTION);
  }
}
const Ir = { assertOptions: mT, validators: Ss },
  dn = Ir.validators;
let Wa = class {
  constructor(a) {
    (this.defaults = a),
      (this.interceptors = { request: new N0(), response: new N0() });
  }
  async request(a, u) {
    try {
      return await this._request(a, u);
    } catch (i) {
      if (i instanceof Error) {
        let r = {};
        Error.captureStackTrace
          ? Error.captureStackTrace(r)
          : (r = new Error());
        const o = r.stack ? r.stack.replace(/^.+\n/, "") : "";
        try {
          i.stack
            ? o &&
              !String(i.stack).endsWith(o.replace(/^.+\n.+\n/, "")) &&
              (i.stack +=
                `
` + o)
            : (i.stack = o);
        } catch {}
      }
      throw i;
    }
  }
  _request(a, u) {
    typeof a == "string" ? ((u = u || {}), (u.url = a)) : (u = a || {}),
      (u = tl(this.defaults, u));
    const { transitional: i, paramsSerializer: r, headers: o } = u;
    i !== void 0 &&
      Ir.assertOptions(
        i,
        {
          silentJSONParsing: dn.transitional(dn.boolean),
          forcedJSONParsing: dn.transitional(dn.boolean),
          clarifyTimeoutError: dn.transitional(dn.boolean),
        },
        !1
      ),
      r != null &&
        (Y.isFunction(r)
          ? (u.paramsSerializer = { serialize: r })
          : Ir.assertOptions(
              r,
              { encode: dn.function, serialize: dn.function },
              !0
            )),
      u.allowAbsoluteUrls !== void 0 ||
        (this.defaults.allowAbsoluteUrls !== void 0
          ? (u.allowAbsoluteUrls = this.defaults.allowAbsoluteUrls)
          : (u.allowAbsoluteUrls = !0)),
      Ir.assertOptions(
        u,
        {
          baseUrl: dn.spelling("baseURL"),
          withXsrfToken: dn.spelling("withXSRFToken"),
        },
        !0
      ),
      (u.method = (u.method || this.defaults.method || "get").toLowerCase());
    let h = o && Y.merge(o.common, o[u.method]);
    o &&
      Y.forEach(
        ["delete", "get", "head", "post", "put", "patch", "common"],
        (x) => {
          delete o[x];
        }
      ),
      (u.headers = Re.concat(h, o));
    const d = [];
    let p = !0;
    this.interceptors.request.forEach(function (b) {
      (typeof b.runWhen == "function" && b.runWhen(u) === !1) ||
        ((p = p && b.synchronous), d.unshift(b.fulfilled, b.rejected));
    });
    const m = [];
    this.interceptors.response.forEach(function (b) {
      m.push(b.fulfilled, b.rejected);
    });
    let y,
      v = 0,
      S;
    if (!p) {
      const x = [q0.bind(this), void 0];
      for (
        x.unshift.apply(x, d),
          x.push.apply(x, m),
          S = x.length,
          y = Promise.resolve(u);
        v < S;

      )
        y = y.then(x[v++], x[v++]);
      return y;
    }
    S = d.length;
    let T = u;
    for (v = 0; v < S; ) {
      const x = d[v++],
        b = d[v++];
      try {
        T = x(T);
      } catch (E) {
        b.call(this, E);
        break;
      }
    }
    try {
      y = q0.call(this, T);
    } catch (x) {
      return Promise.reject(x);
    }
    for (v = 0, S = m.length; v < S; ) y = y.then(m[v++], m[v++]);
    return y;
  }
  getUri(a) {
    a = tl(this.defaults, a);
    const u = _g(a.baseURL, a.url, a.allowAbsoluteUrls);
    return dg(u, a.params, a.paramsSerializer);
  }
};
Y.forEach(["delete", "get", "head", "options"], function (a) {
  Wa.prototype[a] = function (u, i) {
    return this.request(
      tl(i || {}, { method: a, url: u, data: (i || {}).data })
    );
  };
});
Y.forEach(["post", "put", "patch"], function (a) {
  function u(i) {
    return function (o, h, d) {
      return this.request(
        tl(d || {}, {
          method: a,
          headers: i ? { "Content-Type": "multipart/form-data" } : {},
          url: o,
          data: h,
        })
      );
    };
  }
  (Wa.prototype[a] = u()), (Wa.prototype[a + "Form"] = u(!0));
});
let pT = class Eg {
  constructor(a) {
    if (typeof a != "function")
      throw new TypeError("executor must be a function.");
    let u;
    this.promise = new Promise(function (o) {
      u = o;
    });
    const i = this;
    this.promise.then((r) => {
      if (!i._listeners) return;
      let o = i._listeners.length;
      for (; o-- > 0; ) i._listeners[o](r);
      i._listeners = null;
    }),
      (this.promise.then = (r) => {
        let o;
        const h = new Promise((d) => {
          i.subscribe(d), (o = d);
        }).then(r);
        return (
          (h.cancel = function () {
            i.unsubscribe(o);
          }),
          h
        );
      }),
      a(function (o, h, d) {
        i.reason || ((i.reason = new ai(o, h, d)), u(i.reason));
      });
  }
  throwIfRequested() {
    if (this.reason) throw this.reason;
  }
  subscribe(a) {
    if (this.reason) {
      a(this.reason);
      return;
    }
    this._listeners ? this._listeners.push(a) : (this._listeners = [a]);
  }
  unsubscribe(a) {
    if (!this._listeners) return;
    const u = this._listeners.indexOf(a);
    u !== -1 && this._listeners.splice(u, 1);
  }
  toAbortSignal() {
    const a = new AbortController(),
      u = (i) => {
        a.abort(i);
      };
    return (
      this.subscribe(u),
      (a.signal.unsubscribe = () => this.unsubscribe(u)),
      a.signal
    );
  }
  static source() {
    let a;
    return {
      token: new Eg(function (r) {
        a = r;
      }),
      cancel: a,
    };
  }
};
function yT(s) {
  return function (u) {
    return s.apply(null, u);
  };
}
function gT(s) {
  return Y.isObject(s) && s.isAxiosError === !0;
}
const Df = {
  Continue: 100,
  SwitchingProtocols: 101,
  Processing: 102,
  EarlyHints: 103,
  Ok: 200,
  Created: 201,
  Accepted: 202,
  NonAuthoritativeInformation: 203,
  NoContent: 204,
  ResetContent: 205,
  PartialContent: 206,
  MultiStatus: 207,
  AlreadyReported: 208,
  ImUsed: 226,
  MultipleChoices: 300,
  MovedPermanently: 301,
  Found: 302,
  SeeOther: 303,
  NotModified: 304,
  UseProxy: 305,
  Unused: 306,
  TemporaryRedirect: 307,
  PermanentRedirect: 308,
  BadRequest: 400,
  Unauthorized: 401,
  PaymentRequired: 402,
  Forbidden: 403,
  NotFound: 404,
  MethodNotAllowed: 405,
  NotAcceptable: 406,
  ProxyAuthenticationRequired: 407,
  RequestTimeout: 408,
  Conflict: 409,
  Gone: 410,
  LengthRequired: 411,
  PreconditionFailed: 412,
  PayloadTooLarge: 413,
  UriTooLong: 414,
  UnsupportedMediaType: 415,
  RangeNotSatisfiable: 416,
  ExpectationFailed: 417,
  ImATeapot: 418,
  MisdirectedRequest: 421,
  UnprocessableEntity: 422,
  Locked: 423,
  FailedDependency: 424,
  TooEarly: 425,
  UpgradeRequired: 426,
  PreconditionRequired: 428,
  TooManyRequests: 429,
  RequestHeaderFieldsTooLarge: 431,
  UnavailableForLegalReasons: 451,
  InternalServerError: 500,
  NotImplemented: 501,
  BadGateway: 502,
  ServiceUnavailable: 503,
  GatewayTimeout: 504,
  HttpVersionNotSupported: 505,
  VariantAlsoNegotiates: 506,
  InsufficientStorage: 507,
  LoopDetected: 508,
  NotExtended: 510,
  NetworkAuthenticationRequired: 511,
};
Object.entries(Df).forEach(([s, a]) => {
  Df[a] = s;
});
function Og(s) {
  const a = new Wa(s),
    u = ng(Wa.prototype.request, a);
  return (
    Y.extend(u, Wa.prototype, a, { allOwnKeys: !0 }),
    Y.extend(u, a, null, { allOwnKeys: !0 }),
    (u.create = function (r) {
      return Og(tl(s, r));
    }),
    u
  );
}
const vt = Og(wu);
vt.Axios = Wa;
vt.CanceledError = ai;
vt.CancelToken = pT;
vt.isCancel = yg;
vt.VERSION = Tg;
vt.toFormData = vs;
vt.AxiosError = ct;
vt.Cancel = vt.CanceledError;
vt.all = function (a) {
  return Promise.all(a);
};
vt.spread = yT;
vt.isAxiosError = gT;
vt.mergeConfig = tl;
vt.AxiosHeaders = Re;
vt.formToJSON = (s) => pg(Y.isHTMLForm(s) ? new FormData(s) : s);
vt.getAdapter = xg.getAdapter;
vt.HttpStatusCode = Df;
vt.default = vt;
const {
    Axios: NT,
    AxiosError: MT,
    CanceledError: zT,
    isCancel: UT,
    CancelToken: jT,
    VERSION: BT,
    all: LT,
    Cancel: HT,
    isAxiosError: qT,
    spread: YT,
    toFormData: XT,
    AxiosHeaders: GT,
    HttpStatusCode: VT,
    formToJSON: QT,
    getAdapter: kT,
    mergeConfig: ZT,
  } = vt,
  xs = ({ name: s }) => {
    const [a] = H.useContext(Nf),
      u = JSON.parse(localStorage.getItem("user")),
      i = Tu(),
      r = H.useRef(),
      o = () => {
        Tf.to(r.current, { transform: "translateX(0%)", duration: 0.2 });
      },
      h = () => {
        Tf.to(r.current, { transform: "translateX(100%)", duration: 0.2 });
      },
      d = async () => {
        try {
          const { data: p } = await vt.post(
            "https://menuapi.webbsp.in/components/routes/users/logout.php"
          );
          p != null &&
            p.success &&
            (i("/loginpage"), localStorage.removeItem("user"));
        } catch (p) {
          console.log(p);
        }
      };
    return O.jsxs(O.Fragment, {
      children: [
        O.jsx("nav", {
          id: "nav",
          className: "bg-[#444] shadow-sm fixed top-0 left-0 w-full z-2",
          children: O.jsx("div", {
            className: "max-full mx-auto",
            children: O.jsxs("div", {
              className:
                "flex justify-between md:justify-around h-16 md:h-20 w-full ",
              children: [
                O.jsx("div", {
                  className: "flex items-center cursor-pointer",
                  children: O.jsx("h2", {
                    className:
                      "text-[20px] md:text-3xl font-semibold text-white",
                    children: s,
                  }),
                }),
                O.jsx("div", {
                  className:
                    "flex items-center space-x-8 text-[18px] md:text-3xl",
                  children:
                    window.innerWidth >= 700
                      ? u
                        ? O.jsxs("div", {
                            className: "nav-right flex items-center gap-8",
                            children: [
                              O.jsxs("div", {
                                className:
                                  "nav-links text-[20px] flex gap-8 item-center",
                                children: [
                                  O.jsx(ya, {
                                    className: "nav-link",
                                    to: "/",
                                    children: "Home",
                                  }),
                                  O.jsx(ya, {
                                    className: "link",
                                    to: "/dashboard",
                                    children: "Dashboard",
                                  }),
                                  O.jsxs(ya, {
                                    className: "link",
                                    to: "/cartpage",
                                    children: [
                                      "Cart (",
                                      a == null ? void 0 : a.length,
                                      ")",
                                    ],
                                  }),
                                ],
                              }),
                              O.jsx("div", {
                                id: "logout-btn",
                                className: "text-[21px]",
                                onClick: (p) => {
                                  d();
                                },
                                children: O.jsx("span", { children: "Logout" }),
                              }),
                            ],
                          })
                        : O.jsxs(ya, {
                            to: "/cartpage",
                            className: "text-white hover:text-blue-600",
                            children: [
                              "Cart ",
                              O.jsx("i", {
                                className: "ri-shopping-cart-line",
                              }),
                              " (",
                              a == null ? void 0 : a.length,
                              ")",
                            ],
                          })
                      : O.jsx("i", {
                          className: "ri-menu-fill text-2xl",
                          onClick: (p) => {
                            o();
                          },
                        }),
                }),
              ],
            }),
          }),
        }),
        O.jsxs("div", {
          ref: r,
          id: "side-menu",
          className: "flex flex-col items-end gap-10",
          children: [
            O.jsx("div", {
              className: "back-btn",
              onClick: (p) => {
                h();
              },
              children: "Back",
            }),
            O.jsxs("div", {
              className: "menu-links flex flex-col gap-10 text-[18px]",
              children: [
                O.jsx(ya, { to: "/", children: "Home" }),
                O.jsx(ya, { to: "/dashboard", children: "Dashboard" }),
                O.jsx(ya, { to: "/cartpage", children: "Cart" }),
              ],
            }),
            O.jsx("div", {
              id: "menu-logout-btn",
              className: "text-[20px] bg-[yellow] text-black rounded-2xl",
              children: O.jsx("span", { children: "Logout" }),
            }),
          ],
        }),
      ],
    });
  };
function Rg(s, a) {
  const [u, i] = H.useState(a);
  return (
    H.useEffect(() => {
      const o = JSON.parse(localStorage.getItem(s));
      o ? i(o) : localStorage.setItem(s, JSON.stringify(a));
    }, []),
    [
      u,
      (o) => {
        typeof o == "function"
          ? localStorage.setItem(s, JSON.stringify(o(u)))
          : localStorage.setItem(s, JSON.stringify(o)),
          i(o);
      },
    ]
  );
}
const _T = () => {
    const [s, a] = Rg("categories", []),
      u = async () => {
        try {
          const { data: i } = await vt.get(
            "https://menuapi.webbsp.in/components/routes/categories/categories.php"
          );
          i != null && i.success
            ? a(i == null ? void 0 : i.data)
            : console.log("Server Problem");
        } catch (i) {
          console.error("Error fetching categories:", i);
        }
      };
    return (
      H.useEffect(() => {
        u();
      }, []),
      (s == null ? void 0 : s.length) === 0
        ? O.jsx("h1", { children: "No categories found." })
        : O.jsxs("div", {
            className:
              "categories-container w-full flex items-center gap-[50px] fixed top-16 md:top-20 h-20 left-0 ",
            children: [
              O.jsx("span", { children: "All" }),
              s == null
                ? void 0
                : s.map((i) =>
                    O.jsx(
                      "span",
                      { className: "category text-nowrap", children: i.name },
                      i.id
                    )
                  ),
            ],
          })
    );
  },
  vT = ({
    showDetails: s,
    showAddButtons: a,
    addBtnClass: u,
    addBtnContent: i,
    showSingleBtn: r,
    singleBtnContent: o,
    showMenipulateBtn: h,
  }) => {
    const [d, p] = Rg("products", []),
      [m, y] = os(),
      v = async () => {
        try {
          const { data: T } = await vt.get(
            "https://menuapi.webbsp.in/components/routes/products/products.php"
          );
          T != null && T.success
            ? p(T == null ? void 0 : T.data)
            : console.log("Server Problem");
        } catch (T) {
          console.error("Error fetching products:", T);
        }
      };
    H.useEffect(() => {
      v();
    }, []);
    const S = (T, x) => {
      let b = {
        id: T.id,
        name: T.name,
        image: T.image,
        category: T.category,
        price_type: T.price_type,
      };
      x.target.parentNode.classList.contains("full-price-content")
        ? (b = { ...b, full_price: T.full_price })
        : (b = { ...b, half_price: T.half_price }),
        y((E) => [...E, b]),
        localStorage.setItem("cart", JSON.stringify([...m, b]));
    };
    return (d == null ? void 0 : d.length) === 0
      ? O.jsx("h1", { children: "No products found." })
      : O.jsx("div", {
          className: "products-container",
          children:
            d == null
              ? void 0
              : d.map((T) =>
                  O.jsxs(
                    "div",
                    {
                      className: "product",
                      children: [
                        O.jsx("div", {
                          className: "product-image",
                          children: O.jsx("img", {
                            src: `https://menuapi.webbsp.in/uploaded_files/${T.image}`,
                            alt: T.name,
                          }),
                        }),
                        O.jsxs("div", {
                          className: "product-info",
                          children: [
                            O.jsx("h2", {
                              className: "product-name",
                              children: T.name,
                            }),
                            s
                              ? T.price_type === "single"
                                ? O.jsxs("div", {
                                    className: "full-price-content",
                                    children: [
                                      O.jsxs("p", {
                                        className: "product-price",
                                        children: ["Rs.", T.full_price],
                                      }),
                                      a
                                        ? O.jsx("button", {
                                            onClick: (x) => {
                                              S(T, x);
                                            },
                                            className: u,
                                            children: i,
                                          })
                                        : "",
                                    ],
                                  })
                                : O.jsxs(O.Fragment, {
                                    children: [
                                      O.jsxs("div", {
                                        className: "half-price-content",
                                        children: [
                                          O.jsxs("p", {
                                            className: "product-price",
                                            children: [
                                              O.jsx("span", {
                                                children: "Half",
                                              }),
                                              " Rs.",
                                              T.half_price,
                                            ],
                                          }),
                                          a
                                            ? O.jsx("button", {
                                                onClick: (x) => {
                                                  S(T, x);
                                                },
                                                className: u,
                                                children: i,
                                              })
                                            : "",
                                        ],
                                      }),
                                      O.jsxs("div", {
                                        className: "full-price-content",
                                        children: [
                                          O.jsxs("p", {
                                            className: "product-price",
                                            children: [
                                              O.jsx("span", {
                                                children: "Full",
                                              }),
                                              " Rs.",
                                              T.full_price,
                                            ],
                                          }),
                                          a
                                            ? O.jsx("button", {
                                                onClick: (x) => {
                                                  S(T, x);
                                                },
                                                className: u,
                                                children: i,
                                              })
                                            : "",
                                        ],
                                      }),
                                    ],
                                  })
                              : "",
                          ],
                        }),
                        r ? O.jsx("button", { children: o }) : "",
                        h
                          ? O.jsxs("div", {
                              className: "edit-buttons",
                              children: [
                                O.jsx("button", {
                                  className: "update-btn",
                                  children: "Update",
                                }),
                                O.jsx("button", {
                                  className: "delete-btn",
                                  children: "Delete",
                                }),
                              ],
                            })
                          : "",
                      ],
                    },
                    T.id
                  )
                ),
        });
  },
  Ag = ({ setDisplayForm: s }) => {
    const [a] = os(),
      u = () => {
        let r = 0;
        return (
          a.forEach((o) => {
            r += parseInt(o.half_price ? o.half_price : o.full_price);
          }),
          r
        );
      },
      i = (r) => {
        s(!0);
      };
    return a != null && a.length
      ? O.jsxs("div", {
          className:
            "proceed-container w-full h-20 bg-[#333] flex justify-between items-center fixed left-0 bottom-0 ",
          children: [
            O.jsxs("b", {
              className: "text-4xl",
              children: ["Total Rs.", u()],
            }),
            O.jsx("span", {
              className: "proceed-btn text-2xl",
              onClick: (r) => i(),
              children: "Proceed",
            }),
          ],
        })
      : O.jsx("span", {});
  },
  wg = ({ dispalyForm: s, setDisplayForm: a }) => {
    const [u, i] = H.useState(""),
      [r, o] = H.useState(""),
      [h, d] = H.useState(!1),
      [p, m] = H.useState(!1),
      [y, v] = os(),
      S = Tu(),
      x = {
        products: y,
        tableNumber: r,
        buyer: u,
        total: (() => {
          let A = 0;
          return (
            y.forEach((N) => {
              A += parseInt(N.half_price ? N.half_price : N.full_price);
            }),
            A
          );
        })(),
      },
      b = (A) => {
        A.target.classList.contains("order-form") && a(!1);
      },
      E = async (A) => {
        if ((A.preventDefault(), r === "")) {
          d(!0);
          return;
        } else d(!1);
        try {
          m(!0);
          const { data: N } = await vt.post(
            "https://menuapi.webbsp.in/components/routes/orders/create.php",
            x
          );
          N.success &&
            (m(!1),
            a(!1),
            v([]),
            localStorage.setItem("cart", JSON.stringify([])),
            S("/"));
        } catch (N) {
          console.log(N);
        }
      };
    return O.jsx("div", {
      className: `order-form h-full w-full ${s ? "flex" : "hidden"}`,
      onClick: (A) => b(A),
      children: O.jsxs("div", {
        id: "form",
        className: "w-[80%] md:w-[70%] lg:w-[60%] xl:w-[50%] 2xl:w-[50%]",
        children: [
          O.jsx("h2", { children: "Done Your Order" }),
          O.jsxs("form", {
            action: "",
            children: [
              O.jsxs("div", {
                children: [
                  O.jsx("label", {
                    htmlFor: "#name",
                    children: "Name: (Optional)",
                  }),
                  O.jsx("br", {}),
                  " ",
                  O.jsx("br", {}),
                  O.jsx("input", {
                    type: "text",
                    id: "name",
                    placeholder: "Enter your Name (Optional)",
                    value: u,
                    onChange: (A) => {
                      A.target.value === "authpage" && S("/loginpage"),
                        i(A.target.value);
                    },
                  }),
                ],
              }),
              O.jsxs("div", {
                className: "relative",
                children: [
                  O.jsx("label", {
                    htmlFor: "#table-number",
                    children: "Table No:",
                  }),
                  " ",
                  O.jsx("br", {}),
                  O.jsx("span", {
                    className: "table-no-validate",
                    style: { display: `${h ? "unset" : "none"}` },
                    children: "Table No. is Required",
                  }),
                  O.jsx("br", {}),
                  O.jsx("input", {
                    type: "number",
                    id: "table-number",
                    placeholder: "Enter your Table No.",
                    value: r,
                    onChange: (A) => {
                      o(A.target.value), d(!1);
                    },
                  }),
                ],
              }),
              O.jsx("div", {
                children: p
                  ? O.jsx("span", { className: "loader" })
                  : O.jsx("input", {
                      type: "button",
                      id: "confirm-btn",
                      value: "Order",
                      onClick: (A) => E(A),
                    }),
              }),
            ],
          }),
        ],
      }),
    });
  },
  bT = () => {
    const [s, a] = H.useState(!1);
    return O.jsxs(O.Fragment, {
      children: [
        O.jsxs("header", {
          children: [O.jsx(xs, { name: "Your Logo" }), O.jsx(_T, {})],
        }),
        O.jsx("main", {
          children: O.jsx(vT, {
            showDetails: !0,
            showAddButtons: !0,
            addBtnClass: "add-to-cart-btn",
            addBtnContent: "Add",
          }),
        }),
        O.jsx("footer", { children: O.jsx(Ag, { setDisplayForm: a }) }),
        O.jsx(wg, { dispalyForm: s, setDisplayForm: a }),
      ],
    });
  },
  ST = () => O.jsx(O.Fragment, { children: O.jsx(bT, {}) }),
  xT = () => {
    const [s, a] = os(),
      [u, i] = H.useState(!1),
      r = (o) => {
        try {
          let h = [...s];
          const d = h.findIndex((p) => p.id === o.id);
          h.splice(d, 1), a(h), localStorage.setItem("cart", JSON.stringify(h));
        } catch (h) {
          console.log(h);
        }
      };
    return O.jsxs(O.Fragment, {
      children: [
        O.jsx(xs, { name: "Your Logo" }),
        O.jsx("div", {
          className: "products-container",
          children:
            s != null && s.length
              ? s == null
                ? void 0
                : s
                    .slice()
                    .reverse()
                    .map((o, h) =>
                      O.jsxs(
                        "div",
                        {
                          className: "product",
                          children: [
                            O.jsx("div", {
                              className: "product-image",
                              children: O.jsx("img", {
                                src: `https://menuapi.webbsp.in/uploaded_files/${o.image}`,
                                alt: o.name,
                              }),
                            }),
                            O.jsxs("div", {
                              className: "product-info",
                              children: [
                                O.jsxs("h2", {
                                  className: "product-name",
                                  children: [
                                    o.price_type === "single"
                                      ? ""
                                      : o.half_price
                                      ? "Half"
                                      : "Full",
                                    " ",
                                    o.name,
                                  ],
                                }),
                                O.jsxs("div", {
                                  className: "flex justify-center gap-5",
                                  children: [
                                    O.jsxs("p", {
                                      children: [
                                        "Rs.",
                                        o.half_price
                                          ? o.half_price
                                          : o.full_price,
                                      ],
                                    }),
                                    O.jsx("p", { children: o.category }),
                                  ],
                                }),
                                O.jsx("div", {
                                  className: "remove-btn",
                                  children: O.jsx("button", {
                                    onClick: (d) => r(o),
                                    children: "Remove",
                                  }),
                                }),
                              ],
                            }),
                          ],
                        },
                        h
                      )
                    )
              : O.jsx("span", { children: "Cart is empty!" }),
        }),
        O.jsx("footer", { children: O.jsx(Ag, { setDisplayForm: i }) }),
        O.jsx(wg, { dispalyForm: u, setDisplayForm: i }),
      ],
    });
  },
  TT = () => {
    const [s, a] = H.useState(""),
      [u, i] = H.useState(""),
      [r, o] = H.useState(""),
      h = Tu(),
      d = H.useRef(),
      p = new FormData(d.current),
      m = async () => {
        try {
          const { data: y } = await vt.post(
            "https://menuapi.webbsp.in/components/routes/users/register.php",
            p
          );
          y.success && h("/loginpage");
        } catch (y) {
          console.log(y);
        }
      };
    return O.jsxs(O.Fragment, {
      children: [
        O.jsx(xs, { name: "Logo name" }),
        O.jsx("main", {
          id: "user-auth",
          children: O.jsxs("div", {
            className:
              "auth-container w-[90%] sm:w-[80%] md:w-[70%] lg:w-[60%] xl:w-[800px] ",
            children: [
              O.jsx("h1", {
                className: "text-2xl",
                children: "User Registration",
              }),
              O.jsxs("form", {
                ref: d,
                id: "registerForm",
                className: "",
                children: [
                  O.jsxs("div", {
                    children: [
                      O.jsx("label", {
                        className: "",
                        htmlFor: "name",
                        children: "Full Name",
                      }),
                      O.jsx("input", {
                        value: s,
                        type: "text",
                        id: "name",
                        name: "name",
                        placeholder: "Enter your full name",
                        required: !0,
                        onChange: (y) => {
                          a(y.target.value);
                        },
                      }),
                    ],
                  }),
                  O.jsxs("div", {
                    children: [
                      O.jsx("label", {
                        className: "",
                        htmlFor: "phone",
                        children: "Phone Number",
                      }),
                      O.jsx("input", {
                        value: u,
                        type: "tel",
                        id: "phone",
                        name: "phone",
                        placeholder: "Enter your phone number",
                        required: !0,
                        onChange: (y) => {
                          i(y.target.value);
                        },
                      }),
                    ],
                  }),
                  O.jsxs("div", {
                    children: [
                      O.jsx("label", {
                        className: "",
                        htmlFor: "password",
                        children: "Password",
                      }),
                      O.jsx("input", {
                        value: r,
                        type: "password",
                        id: "password",
                        name: "password",
                        placeholder: "Enter your password",
                        required: !0,
                        onChange: (y) => {
                          o(y.target.value);
                        },
                      }),
                    ],
                  }),
                  O.jsx("button", {
                    className: "",
                    type: "button",
                    onClick: (y) => {
                      y.preventDefault(), m();
                    },
                    children: "Register",
                  }),
                ],
              }),
              " ",
              O.jsx("br", {}),
              O.jsxs(Ou, {
                to: "/loginpage",
                id: "bottom-link",
                className: "",
                children: [
                  "Already have an account? ",
                  O.jsx("span", { children: "Login account." }),
                ],
              }),
            ],
          }),
        }),
      ],
    });
  },
  ET = () => {
    var p;
    const [s, a] = H.useState(""),
      [u, i] = H.useState(""),
      r = H.useRef(),
      o = new FormData(r.current),
      h = Tu(),
      d = async () => {
        try {
          const { data: m } = await vt.post(
            "https://menuapi.webbsp.in/components/routes/users/login.php",
            o
          );
          m != null &&
            m.success &&
            (localStorage.setItem("user", JSON.stringify(m.data)), h("/"));
        } catch (m) {
          console.log(m);
        }
      };
    return O.jsx("main", {
      id: "user-auth",
      children: O.jsxs("div", {
        className:
          "auth-container w-[90%] sm:w-[80%] md:w-[70%] lg:w-[60%] xl:w-[600px]",
        children: [
          O.jsx("h1", { className: "text-2xl", children: "User Login" }),
          O.jsxs("form", {
            ref: r,
            id: "login-form",
            children: [
              O.jsx("label", { htmlFor: "phone", children: "Phone Number" }),
              O.jsx("input", {
                type: "number",
                id: "phone",
                name: "phone",
                placeholder: "Enter your phone number",
                required: !0,
                value: s,
                onChange: (m) => {
                  a(m.target.value);
                },
              }),
              O.jsx("label", { htmlFor: "password", children: "Password" }),
              O.jsx("input", {
                type: "password",
                id: "password",
                name: "password",
                placeholder: "Enter your password",
                required: !0,
                value: u,
                onChange: (m) => {
                  i(m.target.value);
                },
              }),
              O.jsx("button", {
                type: "button",
                onClick: (m) => {
                  m.preventDefault(), d();
                },
                children: "Login",
              }),
            ],
          }),
          localStorage.getItem("user")
            ? ((p = JSON.parse(localStorage.getItem("user"))) == null
                ? void 0
                : p.role) === 2
              ? O.jsxs(Ou, {
                  id: "bottom-link",
                  to: "/registerpage",
                  children: [
                    "Don't have an account? ",
                    O.jsx("span", { children: "Register account." }),
                  ],
                })
              : O.jsx("span", {})
            : O.jsx("span", {}),
        ],
      }),
    });
  },
  lf = [
    { name: "Categories", path: "/dashboard/categories" },
    { name: "Products", path: "/dashboard/products" },
    { name: "Orders", path: "/dashboard/orders" },
    { name: "Orders Histories", path: "/dashboard/orders-histories" },
    { name: "Users", path: "/dashboard/users" },
  ],
  OT = () => {
    const s = JSON.parse(localStorage.getItem("user"));
    return s
      ? O.jsx("div", {
          id: "dashboard-page",
          children: O.jsxs("div", {
            className: "dashboard",
            children: [
              O.jsx("h1", { className: "text-3xl", children: "Admin Panel" }),
              O.jsxs("main", {
                className: "main-content",
                children: [
                  O.jsxs("h1", {
                    children: [
                      "Welcome ",
                      O.jsx("span", {
                        id: "name",
                        children: s == null ? void 0 : s.name,
                      }),
                      " to the Admin Dashboard",
                    ],
                  }),
                  O.jsx("ul", {
                    className: "dashboard-links",
                    children:
                      lf == null
                        ? void 0
                        : lf.map((a, u) =>
                            O.jsx(Ou, { to: a.path, children: a.name }, u)
                          ),
                  }),
                ],
              }),
            ],
          }),
        })
      : O.jsx("h1", {
          id: "dashboard-page",
          className: "text-2xl",
          children: "You are not authorized to visit this page!",
        });
  },
  RT = () => {
    var U;
    const s = H.useRef(),
      a = H.useRef(),
      u = H.useRef(),
      i =
        (U = JSON.parse(localStorage.getItem("user"))) == null ? void 0 : U.id,
      r = JSON.parse(localStorage.getItem("user")),
      [o, h] = H.useState(!0),
      [d, p] = H.useState(""),
      [m, y] = H.useState(""),
      [v, S] = H.useState(""),
      [T, x] = H.useState(!0),
      [b, E] = H.useState(JSON.parse(localStorage.getItem("categories"))),
      A = async () => {
        try {
          const { data: X } = await vt.get(
            "https://menuapi.webbsp.in/components/routes/categories/categories.php"
          );
          X != null && X.success && E(X.data);
        } catch (X) {
          console.log(X);
        }
      };
    H.useEffect(() => {
      A();
    }, []);
    const N = async () => {
        try {
          x(!1);
          const { data: X } = await vt.post(
            "https://menuapi.webbsp.in/components/routes/categories/create.php",
            { aid: i, name: d }
          );
          X != null && X.success && (x(!0), p(""), A());
        } catch (X) {
          console.log(X);
        }
      },
      M = async (X) => {
        try {
          x(!1);
          const { data: k } = await vt.delete(
            `https://menuapi.webbsp.in/components/routes/categories/delete.php?id=${X}`,
            { params: { aid: i } }
          );
          k != null && k.success && (x(!0), A());
        } catch (k) {
          console.log(k);
        }
      },
      G = async (X) => {
        try {
          x(!1);
          const { data: k } = await vt.post(
            `https://menuapi.webbsp.in/components/routes/categories/update.php?id=${X}`,
            { aid: i, name: m }
          );
          k != null && k.success && (x(!0), y(""), S(""), A());
        } catch (k) {
          console.log(k);
        }
      };
    return O.jsx("div", {
      id: "admin-categories-page",
      children: r
        ? (r == null ? void 0 : r.role) < 2
          ? O.jsx("h2", {
              className: "text-2xl",
              children: "You are not authorized to visit this page!",
            })
          : O.jsxs("div", {
              className: "container",
              children: [
                O.jsx("h1", {
                  className: "text-[18px] font-[600]",
                  children: "Manage Categories",
                }),
                O.jsx("br", {}),
                o
                  ? O.jsxs("form", {
                      ref: s,
                      id: "create-form",
                      className: "md:w-[500px]",
                      children: [
                        O.jsx("input", {
                          type: "text",
                          id: "create-name",
                          name: "categoryName",
                          placeholder: "Create new category",
                          required: !0,
                          value: d,
                          onChange: (X) => {
                            p(X.target.value);
                          },
                        }),
                        T
                          ? O.jsx("button", {
                              type: "submit",
                              onClick: (X) => {
                                X.preventDefault(), N();
                              },
                              children: "Create",
                            })
                          : O.jsx("span", { className: "loader" }),
                      ],
                    })
                  : O.jsxs("form", {
                      ref: a,
                      id: "update-form",
                      className: "md:w-[500px]",
                      children: [
                        O.jsx("input", {
                          type: "text",
                          id: "category-name",
                          name: "categoryName",
                          placeholder: "Update category",
                          required: !0,
                          value: m,
                          onChange: (X) => {
                            y(X.target.value);
                          },
                        }),
                        T
                          ? O.jsx("button", {
                              type: "submit",
                              onClick: (X) => {
                                X.preventDefault(), G(v);
                              },
                              children: "Update",
                            })
                          : O.jsx("span", { className: "loader" }),
                      ],
                    }),
                O.jsx("h2", { children: "All Categories" }),
                O.jsxs("table", {
                  id: "categories-table",
                  children: [
                    O.jsx("thead", {
                      children: O.jsxs("tr", {
                        children: [
                          O.jsx("th", { children: "S.N" }),
                          O.jsx("th", { children: "Category Name" }),
                          O.jsx("th", { children: "Actions" }),
                        ],
                      }),
                    }),
                    O.jsx("tbody", {
                      ref: u,
                      children:
                        b == null
                          ? void 0
                          : b.map((X, k) =>
                              O.jsxs(
                                "tr",
                                {
                                  children: [
                                    O.jsxs("td", { children: [k + 1, "."] }),
                                    O.jsx("td", { children: X.name }),
                                    O.jsxs("td", {
                                      className: "actions",
                                      children: [
                                        O.jsx("button", {
                                          className: "update",
                                          onClick: (F) => {
                                            h(!1), y(X.name), S(X.id);
                                          },
                                          children: "Update",
                                        }),
                                        T
                                          ? O.jsx("button", {
                                              className: "delete",
                                              onClick: (F) => {
                                                M(X.id);
                                              },
                                              children: "Delete",
                                            })
                                          : O.jsx("span", {
                                              className: "loader",
                                            }),
                                      ],
                                    }),
                                  ],
                                },
                                X.id
                              )
                            ),
                    }),
                  ],
                }),
              ],
            })
        : O.jsx("h2", {
            className: "text-2xl",
            children: "You are not authorized to visit this page!",
          }),
    });
  },
  AT = () => {
    var p;
    const [s, a] = H.useState([]),
      u =
        (p = JSON.parse(localStorage.getItem("user"))) == null ? void 0 : p.id,
      [i, r] = H.useState(!1),
      o = async () => {
        try {
          const { data: m } = await vt.get(
            `https://menuapi.webbsp.in/components/routes/orders/orders.php?aid=${u}`
          );
          m != null && m.success && a(m == null ? void 0 : m.data);
        } catch (m) {
          console.log(m);
        }
      };
    H.useEffect(() => {
      o();
    }, []);
    const h = async (m) => {
        try {
          await vt.post(
            "https://menuapi.webbsp.in/components/routes/order-histories/create.php",
            { aid: u, history: m }
          );
        } catch (y) {
          console.log(y);
        }
      },
      d = async (m) => {
        try {
          r(!0);
          const { data: y } = await vt.delete(
            `https://menuapi.webbsp.in/components/routes/orders/delete.php?aid=${u}&orderid=${m}`
          );
          y != null &&
            y.success &&
            (r(!1), a((v) => v.filter((S) => S.id !== m)));
        } catch (y) {
          console.log(y);
        }
      };
    return O.jsx("div", {
      id: "admin-orders-page",
      children: O.jsx("div", {
        id: "orders-container",
        children:
          s != null && s.length
            ? s.map((m) =>
                O.jsxs(
                  "div",
                  {
                    className: "order-card relative",
                    children: [
                      O.jsx("h2", { children: "Customer details" }),
                      O.jsxs("div", {
                        className: "order-card-body",
                        children: [
                          O.jsxs("p", {
                            children: ["Customer name: ", m.buyer],
                          }),
                          O.jsxs("p", {
                            children: ["Customer table no: ", m.tableNumber],
                          }),
                        ],
                      }),
                      " ",
                      O.jsx("br", {}),
                      O.jsx("h2", { children: "Ordered items" }),
                      " ",
                      O.jsx("br", {}),
                      O.jsx("div", {
                        className: "order-card-footer",
                        children: m.products.map((y, v) => {
                          var S, T;
                          return O.jsxs(
                            "div",
                            {
                              className: "order-item",
                              children: [
                                O.jsxs("p", {
                                  children: [
                                    "Item name:",
                                    " ",
                                    y.price_type === "single"
                                      ? ""
                                      : y.half_price
                                      ? "Half"
                                      : "Full",
                                    " ",
                                    y.name,
                                  ],
                                }),
                                O.jsxs("p", {
                                  children: [
                                    "Item price: Rs.",
                                    y.half_price
                                      ? (S = y.half_price) == null
                                        ? void 0
                                        : S.slice(-3)
                                      : (T = y.full_price) == null
                                      ? void 0
                                      : T.slice(-3),
                                  ],
                                }),
                              ],
                            },
                            v
                          );
                        }),
                      }),
                      " ",
                      O.jsx("br", {}),
                      O.jsxs("div", {
                        className: "bottom-content",
                        children: [
                          O.jsxs("h3", { children: ["Total: Rs.", m.total] }),
                          i
                            ? O.jsx("span", {
                                className: "loader absolute right-0",
                              })
                            : O.jsx("button", {
                                onClick: () => {
                                  h(m), d(m.id);
                                },
                                children: "Done",
                              }),
                        ],
                      }),
                    ],
                  },
                  m.id
                )
              )
            : O.jsx("div", {
                className: "no-orders",
                children: O.jsx("h2", { children: "No orders found" }),
              }),
      }),
    });
  },
  wT = () => {
    var o;
    const [s, a] = H.useState([]),
      u =
        (o = JSON.parse(localStorage.getItem("user"))) == null ? void 0 : o.id,
      i = async () => {
        try {
          const { data: h } = await vt.get(
            `https://menuapi.webbsp.in/components/routes/order-histories/histories.php?aid=${u}`
          );
          h != null && h.success && a(h == null ? void 0 : h.data);
        } catch (h) {
          console.log(h);
        }
      };
    H.useEffect(() => {
      i();
    }, []);
    const r = async (h) => {
      try {
        const { data: d } = await vt.delete(
          `https://menuapi.webbsp.in/components/routes/order-histories/delete.php?aid=${u}&historyid=${h}`
        );
        d != null && d.success && a((p) => p.filter((m) => m.id !== h));
      } catch (d) {
        console.log(d);
      }
    };
    return O.jsx("div", {
      id: "histories-page",
      className: "",
      children:
        (s == null ? void 0 : s.length) > 0
          ? O.jsx("div", {
              className: "histories-container flex gap-4 flex-wrap",
              children: s.map((h) => {
                const d = JSON.parse(h.history);
                return O.jsxs(
                  "div",
                  {
                    className: "order-card",
                    children: [
                      O.jsx("h2", { children: "Customer details" }),
                      O.jsx("br", {}),
                      O.jsxs("div", {
                        className: "order-card-body",
                        children: [
                          O.jsxs("p", {
                            children: [
                              "Customer name: ",
                              d == null ? void 0 : d.buyer,
                            ],
                          }),
                          O.jsxs("p", {
                            children: [
                              "Customer table no: ",
                              d == null ? void 0 : d.tableNumber,
                            ],
                          }),
                        ],
                      }),
                      O.jsx("br", {}),
                      O.jsx("h2", { children: "Ordered items" }),
                      O.jsx("br", {}),
                      O.jsx("div", {
                        className: "order-card-footer",
                        children:
                          d == null
                            ? void 0
                            : d.products.map((p, m) => {
                                var y;
                                return O.jsxs(
                                  "div",
                                  {
                                    className: "order-item",
                                    children: [
                                      O.jsxs("p", {
                                        children: [
                                          p.price_type === "single"
                                            ? ""
                                            : p.half_price
                                            ? "Half"
                                            : "Full",
                                          " ",
                                          p.name,
                                        ],
                                      }),
                                      O.jsxs("p", {
                                        children: [
                                          "Item price: Rs.",
                                          p.half_price
                                            ? p.half_price.substring(
                                                p.half_price.length - 3
                                              )
                                            : (y = p.full_price) == null
                                            ? void 0
                                            : y.substring(
                                                p.full_price.length - 3
                                              ),
                                        ],
                                      }),
                                    ],
                                  },
                                  m
                                );
                              }),
                      }),
                      O.jsx("br", {}),
                      O.jsxs("div", {
                        className: "bottom-content-h",
                        children: [
                          O.jsxs("h3", {
                            children: [
                              "Total: Rs.",
                              d == null ? void 0 : d.total,
                            ],
                          }),
                          O.jsx("button", {
                            id: "delete-btn",
                            onClick: (p) => {
                              r(h.id);
                            },
                            children: "Delete",
                          }),
                        ],
                      }),
                    ],
                  },
                  h.id
                );
              }),
            })
          : O.jsx("p", { children: "No histories found." }),
    });
  };
u1.createRoot(document.getElementById("root")).render(
  O.jsx(H.StrictMode, {
    children: O.jsx(r1, {
      children: O.jsxs(bb, {
        children: [
          O.jsx(xs, { name: "Your Logo" }),
          O.jsxs(P1, {
            children: [
              O.jsx(Ln, { path: "/", element: O.jsx(ST, {}) }),
              O.jsx(Ln, { path: "/cartpage", element: O.jsx(xT, {}) }),
              O.jsx(Ln, { path: "/registerpage", element: O.jsx(TT, {}) }),
              O.jsx(Ln, { path: "/loginpage", element: O.jsx(ET, {}) }),
              O.jsx(Ln, { path: "/dashboard", element: O.jsx(OT, {}) }),
              O.jsx(Ln, {
                path: "/dashboard/categories",
                element: O.jsx(RT, {}),
              }),
              O.jsx(Ln, { path: "/dashboard/orders", element: O.jsx(AT, {}) }),
              O.jsx(Ln, {
                path: "/dashboard/orders-histories",
                element: O.jsx(wT, {}),
              }),
            ],
          }),
        ],
      }),
    }),
  })
);
