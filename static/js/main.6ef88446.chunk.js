;(this['webpackJsonp@react-zhihu/app'] =
  this['webpackJsonp@react-zhihu/app'] || []).push([
  [0],
  {
    56: function (e, t, n) {
      'use strict'
      n.r(t)
      var r = n(0),
        a = n.n(r),
        c = n(19),
        o = n.n(c),
        i = n(1),
        l = n(7),
        s = n(21),
        u = n(26)
      var b,
        p = Object(u.a)('div', { target: 'e14xsiis0' })({
          name: '1i9mmk',
          styles:
            'flex:1;display:flex;flex-direction:column;justify-content:center;align-items:center;padding-bottom:60px',
        }),
        d = n(25)
      var f = Object(i.d)(
          b ||
            (b = Object(s.a)([
              '\n  from {\n    transform: rotate(0)\n  }\n  to {\n    transform: rotate(360deg)\n  }\n',
            ]))
        ),
        m = {
          name: '1xn3ydt',
          styles:
            'code{background-color:whitesmoke;color:slategray;border-radius:2px;padding:4px 8px;font-size:14px;}',
        }
      var h = function () {
        return Object(i.c)(
          p,
          { className: 'HomePage', css: m },
          Object(i.c)(d.a, {
            size: '8rem',
            color: 'royalblue',
            css: Object(i.b)('animation:', f, ' 4s linear infinite;', ''),
          }),
          Object(i.c)('h2', null, 'Cra Template Popular'),
          Object(i.c)(
            'code',
            null,
            'yarn create react-app --template ',
            Object(i.c)('strong', null, 'popular')
          )
        )
      }
      var g = function () {
        return Object(i.c)(
          p,
          { className: 'NotfoundPage' },
          Object(i.c)('p', null, 'Page not found.')
        )
      }
      var j = {
          name: '1846q8t',
          styles:
            'background-color:white;border-bottom:1px solid whitesmoke;min-height:50px;display:flex;justify-content:center;overflow-x:auto;padding:8px 0',
        },
        O = {
          name: 'at713n',
          styles:
            "color:lightslategray;font-size:15px;padding:8px 18px;margin:0 12px;position:relative;display:flex;align-items:center;font-weight:bold;transition:0.2s;&[aria-current='page']{color:whitesmoke;background-color:slategrey;border-radius:100px;}",
        }
      var v = function (e) {
        var t = e.children,
          n = a.a.Children.toArray(t.props.children)
        return Object(i.c)(
          'nav',
          { className: 'Navigation', css: j },
          n.map(function (e) {
            var t = e.props,
              n = t.path,
              r = t.label
            if (e.props.default) return null
            if (void 0 === e.props.path)
              throw new Error(''.concat(e.type.name, ' should have path prop.'))
            return Object(i.c)(
              l.a,
              { to: n, key: n, css: O },
              null !== r && void 0 !== r ? r : e.type.name
            )
          })
        )
      }
      var y = function (e) {
          var t = e.children
          return Object(i.c)(a.a.Fragment, null, Object(i.c)(v, null, t), t)
        },
        x = n(27),
        k = n(22),
        w = ['children']
      function C(e) {
        var t = e.children,
          n = Object(x.a)(e, w)
        return Object(k.jsx)(
          'button',
          Object.assign({ type: 'button', className: 'Button' }, n, {
            children: t,
          }),
          void 0
        )
      }
      var N = function () {
        return Object(i.c)(
          p,
          { className: 'SecondPage' },
          Object(i.c)('h1', null, 'SecondPage'),
          Object(i.c)(C, null, 'Click Me')
        )
      }
      var P = function () {
          return Object(i.c)(
            l.b,
            { id: 'router' },
            Object(i.c)(
              y,
              { path: '/' },
              Object(i.c)(h, { path: '/', label: 'Home' }),
              Object(i.c)(N, { path: 'second', label: 'Second' }),
              Object(i.c)(g, { default: !0 })
            )
          )
        },
        S = n(24)
      var z = {
          name: 'qc0av3',
          styles:
            'html{box-sizing:border-box;}*,*:before,*:after{box-sizing:inherit;}',
        },
        F = Object(i.b)(
          Object(S.a)(),
          ' ',
          z,
          "html,body,#root,#router{height:100%;}body{font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Oxygen,Ubuntu,Cantarell,'Open Sans','Helvetica Neue',sans-serif;}#router,div[tabindex='-1']{display:flex;flex-direction:column;flex:1;}button{border:none;cursor:pointer;&:active{opacity:0.5;}}a{color:currentColor;text-decoration:none;&:active{opacity:0.5;}}"
        ),
        B = n(23)
      var H = function (e) {
        var t = e.children
        return Object(i.c)(B.a, { reachHistory: l.c }, t)
      }
      var I = function () {
          return Object(i.c)(
            H,
            null,
            Object(i.c)(i.a, { styles: F }),
            Object(i.c)(P, null)
          )
        },
        M = function (e) {
          e &&
            e instanceof Function &&
            n
              .e(3)
              .then(n.bind(null, 57))
              .then(function (t) {
                var n = t.getCLS,
                  r = t.getFID,
                  a = t.getFCP,
                  c = t.getLCP,
                  o = t.getTTFB
                n(e), r(e), a(e), c(e), o(e)
              })
        }
      o.a.render(
        Object(i.c)(a.a.StrictMode, null, Object(i.c)(I, null)),
        document.getElementById('root')
      ),
        M()
    },
  },
  [[56, 1, 2]],
])
//# sourceMappingURL=main.6ef88446.chunk.js.map
