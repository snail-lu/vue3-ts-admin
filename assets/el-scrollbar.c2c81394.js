import{bm as A,M as v,L as C}from"./index.f77a03fa.js";var N=/\s/;function $(n){for(var r=n.length;r--&&N.test(n.charAt(r)););return r}var B=/^\s+/;function R(n){return n&&n.slice(0,$(n)+1).replace(B,"")}var S=0/0,F=/^[-+]0x[0-9a-f]+$/i,_=/^0b[01]+$/i,j=/^0o[0-7]+$/i,D=parseInt;function k(n){if(typeof n=="number")return n;if(A(n))return S;if(v(n)){var r=typeof n.valueOf=="function"?n.valueOf():n;n=v(r)?r+"":r}if(typeof n!="string")return n===0?n:+n;n=R(n);var t=_.test(n);return t||j.test(n)?D(n.slice(2),t?2:8):F.test(n)?S:+n}var H=function(){return C.Date.now()};const h=H;var P="Expected a function",U=Math.max,X=Math.min;function z(n,r,t){var u,c,l,s,i,f,o=0,b=!1,d=!1,T=!0;if(typeof n!="function")throw new TypeError(P);r=k(r)||0,v(t)&&(b=!!t.leading,d="maxWait"in t,l=d?U(k(t.maxWait)||0,r):l,T="trailing"in t?!!t.trailing:T);function x(e){var a=u,m=c;return u=c=void 0,o=e,s=n.apply(m,a),s}function W(e){return o=e,i=setTimeout(g,r),b?x(e):s}function L(e){var a=e-f,m=e-o,E=r-a;return d?X(E,l-m):E}function p(e){var a=e-f,m=e-o;return f===void 0||a>=r||a<0||d&&m>=l}function g(){var e=h();if(p(e))return y(e);i=setTimeout(g,L(e))}function y(e){return i=void 0,T&&u?x(e):(u=c=void 0,s)}function M(){i!==void 0&&clearTimeout(i),o=0,u=f=c=i=void 0}function O(){return i===void 0?s:y(h())}function I(){var e=h(),a=p(e);if(u=arguments,c=this,f=e,a){if(i===void 0)return W(f);if(d)return clearTimeout(i),i=setTimeout(g,r),x(f)}return i===void 0&&(i=setTimeout(g,r)),s}return I.cancel=M,I.flush=O,I}export{z as d};