(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{44:function(n,e,t){n.exports=t(57)},56:function(n,e,t){},57:function(n,e,t){"use strict";t.r(e);var r=t(0),a=t.n(r),c=t(19),o=t.n(c),u=t(8),i=t(17),l=t(10),s=t(6),p=t(12),f=t(34),d=t(40),m=[],b=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:m,e=arguments.length>1?arguments[1]:void 0,t=e.type,r=e.posts;switch(t){case"FETCH_POSTS_SUCCESS":return Object(d.a)(r);default:return n}},h={},v=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:h,e=arguments.length>1?arguments[1]:void 0,t=e.type,r=e.post;switch(t){case"FETCH_CURRENT_POST_SUCCESS":return r;default:return n}},g=t(37),E=Object(s.b)({hashType:"slash"}),O=p.d,j=function(n){return Object(p.e)((e=E,Object(p.c)({router:Object(i.b)(e),blogList:b,currentPost:v})),n,O(Object(p.a)(Object(f.a)(E),g.a)));var e}({}),x=t(2),y=t(3);function k(){var n=Object(x.a)(["\n  background: #3f51b5;\n  padding: 15px;\n  @media (min-width: 768px) {\n    padding: 60px;\n  }\n"]);return k=function(){return n},n}function C(){var n=Object(x.a)(["\n  font-size: 36px;\n  text-align: center;\n  color: #fff;\n"]);return C=function(){return n},n}var S=y.a.h1(C()),w=y.a.header(k()),P=function(){return a.a.createElement(w,null,a.a.createElement(S,null,"Jon ",a.a.createElement("span",{style:{color:"#e91e63"}},"Blog")," Test - Hello here!"))};function T(){var n=Object(x.a)(["\n  padding: 15px;\n  background: #d2d2fd;\n"]);return T=function(){return n},n}function _(){var n=Object(x.a)(["\n  font-size: 18px;\n  font-weight: 600;\n  text-transform: uppercase;\n  text-align: center;\n  display: block;\n  color: #3f51b5;\n"]);return _=function(){return n},n}var z=y.a.span(_()),U=y.a.footer(T()),F=function(){return a.a.createElement(U,null,a.a.createElement(z,null,"By Alex Komarevich 2019"))};function H(){var n=Object(x.a)(["\n  background: #eaeaea;\n"]);return H=function(){return n},n}var I=y.a.div(H()),L=function(n){var e=n.children;return a.a.createElement(I,null,a.a.createElement(P,null),e,a.a.createElement(F,null))},J=t(16),R=t.n(J),A=t(20),B=t(21),D=t(22),M=t(24),N=t(23),G=t(25),K=t(14);function q(){var n=Object(x.a)(["\n  color: #3f51b5;\n  font-size: 18px;\n  display: inline-block;\n  padding: 0 0 10px 0;\n  &:hover {\n    color: #e91e63;\n  }\n"]);return q=function(){return n},n}function Q(){var n=Object(x.a)(["\n  color: #e91e63;\n  font-size: 22px;\n  margin: 0 0 15px 0;\n"]);return Q=function(){return n},n}function V(){var n=Object(x.a)(["\n  background: #eaeaea;\n  padding: 40px;\n  border: 20px solid #e91e63;\n  @media (min-width: 768px) {\n    margin: 60px;\n  }\n"]);return V=function(){return n},n}var W=y.a.div(V()),X=y.a.h2(Q()),Y=y.a.span(q()),Z=function(n){function e(){return Object(B.a)(this,e),Object(M.a)(this,Object(N.a)(e).apply(this,arguments))}return Object(G.a)(e,n),Object(D.a)(e,[{key:"componentDidMount",value:function(){var n=Object(A.a)(R.a.mark(function n(){var e;return R.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return e=this.props.fetchPosts,n.next=3,fetch("https://simple-blog-api.crew.red/posts").then(function(n){return n.json()}).then(function(n){return e(n)});case 3:case"end":return n.stop()}},n,this)}));return function(){return n.apply(this,arguments)}}()},{key:"render",value:function(){var n=this.props.blogList;return a.a.createElement(W,null,a.a.createElement(X,null,"Latest Posts"),n&&a.a.createElement("ul",null,n.map(function(n,e){return a.a.createElement("li",{key:n.id},a.a.createElement(K.a,{to:"/posts/".concat(n.id)},a.a.createElement(Y,null,n.title)))})))}}]),e}(r.Component),$=Object(l.c)(function(n){return{blogList:n.blogList}},{fetchPosts:function(n){return{type:"FETCH_POSTS_SUCCESS",posts:n}}})(Z),nn=function(){return a.a.createElement(L,null,a.a.createElement($,null))};function en(){var n=Object(x.a)(["\n  color: #000;\n"]);return en=function(){return n},n}function tn(){var n=Object(x.a)(["\n  background-color: #718792;\n  border: 2px solid #29434e;\n  padding: 20px;\n  margin: 20px 0;\n"]);return tn=function(){return n},n}function rn(){var n=Object(x.a)(["\n  background-color: #ccc;\n  border: 5px solid #e91e63;\n  padding: 20px;\n  margin: 20px 0;\n"]);return rn=function(){return n},n}var an=y.a.div(rn()),cn=y.a.div(tn()),on=y.a.p(en()),un=function(n){var e=n.comments;return a.a.createElement(an,null,e.map(function(n,e){return a.a.createElement(cn,{key:n.id},a.a.createElement(on,null,n.body))}))},ln=t(41);function sn(){var n=Object(x.a)(["\n  display: flex\n  justify-content: center\n  align-items: stretch\n  background-color: #455a64\n  color: #fff\n  text-transform: uppercase\n  border: 0\n  outline: none\n  border-radius: 3px\n  margin: 0\n  transition: all 0.3s\n  font-size: 16px\n  padding: 10px\n  cursor: pointer\n  &:hover {\n    background-color: #e91e63;\n  }\n"]);return sn=function(){return n},n}function pn(){var n=Object(x.a)(["\n  background-color: #29434e;\n  border: 5px solid #718792;\n  color: #fff;\n  padding: 15px;\n  margin: 20px 0;\n  width: 100%;\n"]);return pn=function(){return n},n}function fn(){var n=Object(x.a)(["\n  color: #3f51b5;\n  margin: 30px 0 0 0;\n"]);return fn=function(){return n},n}var dn=y.a.h5(fn()),mn=y.a.textarea(pn()),bn=y.a.button(sn()),hn=Object(u.f)(function(n){n.comments;var e=n.match.params.postId,t=Object(r.useState)(""),c=Object(ln.a)(t,2),o=c[0],u=c[1];return a.a.createElement(a.a.Fragment,null,a.a.createElement(dn,null,"Add Comment"),a.a.createElement(mn,{onChange:function(n){return console.log(o),u(n.target.value)},value:o}),a.a.createElement(bn,{onClick:function(n){fetch("https://simple-blog-api.crew.red/comments",{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify({postId:+e,body:o})}).then(function(){return u("")})}},"Submit"))});function vn(){var n=Object(x.a)(["\n  background-color: #ccc;\n  padding: 20px;\n"]);return vn=function(){return n},n}function gn(){var n=Object(x.a)(["\n  color: #000;\n  font-size: 16px;\n"]);return gn=function(){return n},n}function En(){var n=Object(x.a)(["\n  color: #e91e63;\n  font-size: 22px;\n  margin: 0 0 15px 0;\n"]);return En=function(){return n},n}function On(){var n=Object(x.a)(["\n  background: #eaeaea;\n  padding: 40px;\n  border: 20px solid #e91e63;\n  @media (min-width: 768px) {\n    margin: 60px;\n  }\n"]);return On=function(){return n},n}var jn=y.a.div(On()),xn=y.a.h2(En()),yn=y.a.p(gn()),kn=y.a.div(vn()),Cn=function(n){function e(){return Object(B.a)(this,e),Object(M.a)(this,Object(N.a)(e).apply(this,arguments))}return Object(G.a)(e,n),Object(D.a)(e,[{key:"getCurrentPost",value:function(){var n=Object(A.a)(R.a.mark(function n(e){var t,r;return R.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return t=e.fetchCurrentPost,r=e.match.params.postId,n.next=3,fetch("https://simple-blog-api.crew.red/posts/".concat(r,"?_embed=comments")).then(function(n){return n.json()}).then(function(n){return t(n)});case 3:case"end":return n.stop()}},n)}));return function(e){return n.apply(this,arguments)}}()},{key:"componentDidMount",value:function(){this.getCurrentPost(this.props)}},{key:"componentDidUpdate",value:function(n,e){this.props.currentPost!==n.currentPost&&this.getCurrentPost(this.props)}},{key:"render",value:function(){var n=this.props.currentPost,e=n.comments;return a.a.createElement(jn,null,a.a.createElement(K.a,{to:"/"},"Go Home"),n&&a.a.createElement(a.a.Fragment,null,a.a.createElement(kn,null,a.a.createElement(xn,null,n.title),a.a.createElement(yn,null,n.body)),e&&e.length>0?a.a.createElement(un,{comments:e}):null,a.a.createElement(hn,null)))}}]),e}(r.Component),Sn=Object(u.f)(Object(l.c)(function(n){return{currentPost:n.currentPost}},{fetchCurrentPost:function(n){return{type:"FETCH_CURRENT_POST_SUCCESS",post:n}}})(Cn)),wn=function(){return a.a.createElement(L,null,a.a.createElement(Sn,null))};t(56);o.a.render(a.a.createElement(l.a,{store:j},a.a.createElement(i.a,{history:E},a.a.createElement(u.c,null,a.a.createElement(u.a,{exact:!0,path:"/",component:nn}),a.a.createElement(u.a,{path:"/posts/:postId",component:wn}),a.a.createElement(u.a,{render:function(){return a.a.createElement("div",null,"Miss")}})))),document.getElementById("root"))}},[[44,1,2]]]);
//# sourceMappingURL=main.78a5dd0e.chunk.js.map