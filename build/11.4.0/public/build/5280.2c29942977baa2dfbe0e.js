"use strict";(self.webpackChunkgrafana=self.webpackChunkgrafana||[]).push([[5280],{55280:(tr,ue,ee)=>{ee.r(ue),ee.d(ue,{default:()=>ze});var N=ee(96540),xe=ee(95806);const Ne=(0,xe.I)("div")({name:"NumberOverlayEditorStyle",class:"gdg-n15fjm3e",propsAsIs:!1});function ne(e,r){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&r.indexOf(n)<0&&(t[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,n=Object.getOwnPropertySymbols(e);a<n.length;a++)r.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(t[n[a]]=e[n[a]]);return t}var X;(function(e){e.event="event",e.props="prop"})(X||(X={}));function L(){}function U(e){return!!(e||"").match(/\d/)}function Y(e){return e==null}function fe(e){return typeof e=="number"&&isNaN(e)}function le(e){return e.replace(/[-[\]/{}()*+?.\\^$|]/g,"\\$&")}function De(e){switch(e){case"lakh":return/(\d+?)(?=(\d\d)+(\d)(?!\d))(\.\d+)?/g;case"wan":return/(\d)(?=(\d{4})+(?!\d))/g;case"thousand":default:return/(\d)(?=(\d{3})+(?!\d))/g}}function Ce(e,r,t){var n=De(t),a=e.search(/[1-9]/);return a=a===-1?e.length:a,e.substring(0,a)+e.substring(a,e.length).replace(n,"$1"+r)}function Ee(e){var r=(0,N.useRef)(e);r.current=e;var t=(0,N.useRef)(function(){for(var n=[],a=arguments.length;a--;)n[a]=arguments[a];return r.current.apply(r,n)});return t.current}function ie(e,r){r===void 0&&(r=!0);var t=e[0]==="-",n=t&&r;e=e.replace("-","");var a=e.split("."),i=a[0],o=a[1]||"";return{beforeDecimal:i,afterDecimal:o,hasNegation:t,addNegation:n}}function Ie(e){if(!e)return e;var r=e[0]==="-";r&&(e=e.substring(1,e.length));var t=e.split("."),n=t[0].replace(/^0+/,"")||"0",a=t[1]||"";return(r?"-":"")+n+(a?"."+a:"")}function ve(e,r,t){for(var n="",a=t?"0":"",i=0;i<=r-1;i++)n+=e[i]||a;return n}function se(e,r){return Array(r+1).join(e)}function ce(e){var r=e+"",t=r[0]==="-"?"-":"";t&&(r=r.substring(1));var n=r.split(/[eE]/g),a=n[0],i=n[1];if(i=Number(i),!i)return t+a;a=a.replace(".","");var o=1+i,s=a.length;return o<0?a="0."+se("0",Math.abs(o))+a:o>=s?a=a+se("0",o-s):a=(a.substring(0,o)||"0")+"."+a.substring(o),t+a}function de(e,r,t){if(["","-"].indexOf(e)!==-1)return e;var n=(e.indexOf(".")!==-1||t)&&r,a=ie(e),i=a.beforeDecimal,o=a.afterDecimal,s=a.hasNegation,m=parseFloat("0."+(o||"0")),p=o.length<=r?"0."+o:m.toFixed(r),f=p.split("."),l=i.split("").reverse().reduce(function(g,y,I){return g.length>I?(Number(g[0])+Number(y)).toString()+g.substring(1,g.length):y+g},f[0]),u=ve(f[1]||"",r,t),d=s?"-":"",S=n?".":"";return""+d+l+S+u}function K(e,r){if(e.value=e.value,e!==null){if(e.createTextRange){var t=e.createTextRange();return t.move("character",r),t.select(),!0}return e.selectionStart||e.selectionStart===0?(e.focus(),e.setSelectionRange(r,r),!0):(e.focus(),!1)}}function Ve(e,r){for(var t=0,n=0,a=e.length,i=r.length;e[t]===r[t]&&t<a;)t++;for(;e[a-1-n]===r[i-1-n]&&i-n>t&&a-n>t;)n++;return{from:{start:t,end:a-n},to:{start:t,end:i-n}}}function Fe(e,r,t){return Math.min(Math.max(e,r),t)}function ge(e){return Math.max(e.selectionStart,e.selectionEnd)}function Re(){return typeof navigator<"u"&&!(navigator.platform&&/iPhone|iPod/.test(navigator.platform))}function me(e){return{from:{start:0,end:0},to:{start:0,end:e.length},lastValue:""}}function he(e,r){return e===void 0&&(e=" "),typeof e=="string"?e:e[r]||" "}function Ae(e,r,t,n,a,i){var o=a.findIndex(function(V){return V}),s=e.slice(0,o);!r&&!t.startsWith(s)&&(t=s+t,n=n+s.length);for(var m=t.length,p=e.length,f={},l=new Array(m),u=0;u<m;u++){l[u]=-1;for(var d=0,S=p;d<S;d++)if(t[u]===e[d]&&f[d]!==!0){l[u]=d,f[d]=!0;break}}for(var g=n;g<m&&(l[g]===-1||!i(t[g]));)g++;var y=g===m||l[g]===-1?p:l[g];for(g=n-1;g>0&&l[g]===-1;)g--;var I=g===-1||l[g]===-1?0:l[g]+1;return I>y?y:n-I<y-n?I:y}function re(e,r,t,n){var a=e.length;if(r=Fe(r,0,a),n==="left"){for(;r>=0&&!t[r];)r--;r===-1&&(r=t.indexOf(!0))}else{for(;r<=a&&!t[r];)r++;r>a&&(r=t.lastIndexOf(!0))}return r===-1&&(r=a),r}function Oe(e){for(var r=Array.from({length:e.length+1}).map(function(){return!0}),t=0,n=r.length;t<n;t++)r[t]=!!(U(e[t])||U(e[t-1]));return r}function Se(e,r,t,n,a,i){i===void 0&&(i=L);var o=(0,N.useRef)(),s=Ee(function(u){var d,S;return Y(u)||fe(u)?(S="",d=""):typeof u=="number"||t?(S=typeof u=="number"?ce(u):u,d=n(S)):(S=a(u,void 0),d=u),{formattedValue:d,numAsString:S}}),m=(0,N.useState)(function(){return s(r)}),p=m[0],f=m[1],l=function(u,d){f({formattedValue:u.formattedValue,numAsString:u.value}),i(u,d)};return(0,N.useMemo)(function(){Y(e)?o.current=void 0:(o.current=s(e),f(o.current))},[e,s]),[p,l]}function Be(e){return e.replace(/[^0-9]/g,"")}function Te(e){return e}function ye(e){var r=e.type;r===void 0&&(r="text");var t=e.displayType;t===void 0&&(t="input");var n=e.customInput,a=e.renderText,i=e.getInputRef,o=e.format;o===void 0&&(o=Te);var s=e.removeFormatting;s===void 0&&(s=Be);var m=e.defaultValue,p=e.valueIsNumericString,f=e.onValueChange,l=e.isAllowed,u=e.onChange;u===void 0&&(u=L);var d=e.onKeyDown;d===void 0&&(d=L);var S=e.onMouseUp;S===void 0&&(S=L);var g=e.onFocus;g===void 0&&(g=L);var y=e.onBlur;y===void 0&&(y=L);var I=e.value,V=e.getCaretBoundary;V===void 0&&(V=Oe);var A=e.isValidInputCharacter;A===void 0&&(A=U);var P=ne(e,["type","displayType","customInput","renderText","getInputRef","format","removeFormatting","defaultValue","valueIsNumericString","onValueChange","isAllowed","onChange","onKeyDown","onMouseUp","onFocus","onBlur","value","getCaretBoundary","isValidInputCharacter"]),G=Se(I,m,!!p,o,s,f),Z=G[0],O=Z.formattedValue,H=Z.numAsString,W=G[1],M=(0,N.useRef)(),J=function(v,c){M.current=v.formattedValue,W(v,c)};(0,N.useEffect)(function(){var v=o(H);if(M.current===void 0||v!==M.current){var c=b.current,h=s(v,void 0);j({formattedValue:v,numAsString:h,input:c,setCaretPosition:!0,source:X.props,event:void 0})}});var Q=(0,N.useState)(!1),z=Q[0],w=Q[1],b=(0,N.useRef)(null),B=(0,N.useRef)({setCaretTimeout:null,focusTimeout:null});(0,N.useEffect)(function(){return w(!0),function(){clearTimeout(B.current.setCaretTimeout),clearTimeout(B.current.focusTimeout)}},[]);var D=o,_=function(v,c){var h=parseFloat(c);return{formattedValue:v,value:c,floatValue:isNaN(h)?void 0:h}},F=function(v,c,h){K(v,c),B.current.setCaretTimeout=setTimeout(function(){v.value===h&&K(v,c)},0)},T=function(v,c,h){return re(v,c,V(v),h)},$=function(v,c,h){var C=V(c),E=Ae(c,O,v,h,C,A);return E=re(c,E,C),E},j=function(v){var c=v.formattedValue;c===void 0&&(c="");var h=v.input,C=v.setCaretPosition;C===void 0&&(C=!0);var E=v.source,x=v.event,R=v.numAsString,k=v.caretPos;if(h){if(k===void 0&&C){var q=v.inputValue||h.value,oe=ge(h);h.value=c,k=$(q,c,oe)}h.value=c,C&&k!==void 0&&F(h,k,c)}c!==O&&J(_(c,R),{event:x,source:E})},ae=function(v,c,h){var C=Ve(O,v),E=Object.assign(Object.assign({},C),{lastValue:O}),x=s(v,E),R=D(x);if(x=s(R,void 0),l&&!l(_(R,x))){var k=c.target,q=ge(k),oe=$(v,O,q);return F(k,oe,O),!1}return j({formattedValue:R,numAsString:x,inputValue:v,event:c,source:h,setCaretPosition:!0,input:c.target}),!0},Je=function(v){var c=v.target,h=c.value,C=ae(h,v,X.event);C&&u(v)},Qe=function(v){var c=v.target,h=v.key,C=c.selectionStart,E=c.selectionEnd,x=c.value;x===void 0&&(x="");var R;if(h==="ArrowLeft"||h==="Backspace"?R=Math.max(C-1,0):h==="ArrowRight"?R=Math.min(C+1,x.length):h==="Delete"&&(R=C),R===void 0||C!==E){d(v);return}var k=R;if(h==="ArrowLeft"||h==="ArrowRight"){var q=h==="ArrowLeft"?"left":"right";k=T(x,R,q)}else h==="Delete"&&!A(x[R])?k=T(x,R,"right"):h==="Backspace"&&!A(x[R])&&(k=T(x,R,"left"));k!==R&&F(c,k,x),v.isUnitTestRun&&F(c,k,x),d(v)},Xe=function(v){var c=v.target,h=c.selectionStart,C=c.selectionEnd,E=c.value;if(E===void 0&&(E=""),h===C){var x=T(E,h);x!==h&&F(c,x,E)}S(v)},Ye=function(v){v.persist&&v.persist();var c=v.target;b.current=c,B.current.focusTimeout=setTimeout(function(){var h=c.selectionStart,C=c.selectionEnd,E=c.value;E===void 0&&(E="");var x=T(E,h);x!==h&&!(h===0&&C===E.length)&&F(c,x,E),g(v)},0)},qe=function(v){b.current=null,clearTimeout(B.current.focusTimeout),clearTimeout(B.current.setCaretTimeout),y(v)},er=z&&Re()?"numeric":void 0,be=Object.assign({inputMode:er},P,{type:r,value:O,onChange:Je,onKeyDown:Qe,onMouseUp:Xe,onFocus:Ye,onBlur:qe});if(t==="text")return a?N.createElement(N.Fragment,null,a(O,P)||null):N.createElement("span",Object.assign({},P,{ref:i}),O);if(n){var rr=n;return N.createElement(rr,Object.assign({},be,{ref:i}))}return N.createElement("input",Object.assign({},be,{ref:i}))}function pe(e,r){var t=r.decimalScale,n=r.fixedDecimalScale,a=r.prefix;a===void 0&&(a="");var i=r.suffix;i===void 0&&(i="");var o=r.allowNegative,s=r.thousandsGroupStyle;if(s===void 0&&(s="thousand"),e===""||e==="-")return e;var m=te(r),p=m.thousandSeparator,f=m.decimalSeparator,l=t!==0&&e.indexOf(".")!==-1||t&&n,u=ie(e,o),d=u.beforeDecimal,S=u.afterDecimal,g=u.addNegation;return t!==void 0&&(S=ve(S,t,!!n)),p&&(d=Ce(d,p,s)),a&&(d=a+d),i&&(S=S+i),g&&(d="-"+d),e=d+(l&&f||"")+S,e}function te(e){var r=e.decimalSeparator;r===void 0&&(r=".");var t=e.thousandSeparator,n=e.allowedDecimalSeparators;return t===!0&&(t=","),n||(n=[r,"."]),{decimalSeparator:r,thousandSeparator:t,allowedDecimalSeparators:n}}function ke(e,r){e===void 0&&(e="");var t=new RegExp("(-)"),n=new RegExp("(-)(.)*(-)"),a=t.test(e),i=n.test(e);return e=e.replace(/-/g,""),a&&!i&&r&&(e="-"+e),e}function Pe(e,r){return new RegExp("(^-)|[0-9]|"+le(e),r?"g":void 0)}function je(e,r,t){var n;r===void 0&&(r=me(e));var a=t.allowNegative,i=t.prefix;i===void 0&&(i="");var o=t.suffix;o===void 0&&(o="");var s=t.decimalScale,m=r.from,p=r.to,f=p.start,l=p.end,u=te(t),d=u.allowedDecimalSeparators,S=u.decimalSeparator,g=e[l]===S;if(U(e)&&(e===i||e===o)&&r.lastValue==="")return e;if(l-f===1&&d.indexOf(e[f])!==-1){var y=s===0?"":S;e=e.substring(0,f)+y+e.substring(f+1,e.length)}var I=function(D,_,F){var T=!1,$=!1;i.startsWith("-")?T=!1:D.startsWith("--")?(T=!1,$=!0):o.startsWith("-")&&D.length===o.length?T=!1:D[0]==="-"&&(T=!0);var j=T?1:0;return $&&(j=2),j&&(D=D.substring(j),_-=j,F-=j),{value:D,start:_,end:F,hasNegation:T}},V=I(e,f,l),A=V.hasNegation;n=V,e=n.value,f=n.start,l=n.end;var P=I(r.lastValue,m.start,m.end),G=P.start,Z=P.end,O=P.value,H=e.substring(f,l);e.length&&O.length&&(G>O.length-o.length||Z<i.length)&&!(H&&o.startsWith(H))&&(e=O);var W=0;e.startsWith(i)?W+=i.length:f<i.length&&(W=f),e=e.substring(W),l-=W;var M=e.length,J=e.length-o.length;e.endsWith(o)?M=J:(l>J||l>e.length-o.length)&&(M=l),e=e.substring(0,M),e=ke(A?"-"+e:e,a),e=(e.match(Pe(S,!0))||[]).join("");var Q=e.indexOf(S);e=e.replace(new RegExp(le(S),"g"),function(D,_){return _===Q?".":""});var z=ie(e,a),w=z.beforeDecimal,b=z.afterDecimal,B=z.addNegation;return p.end-p.start<m.end-m.start&&w===""&&g&&!parseFloat(b)&&(e=B?"-":""),e}function Me(e,r){var t=r.prefix;t===void 0&&(t="");var n=r.suffix;n===void 0&&(n="");var a=Array.from({length:e.length+1}).map(function(){return!0}),i=e[0]==="-";a.fill(!1,0,t.length+(i?1:0));var o=e.length;return a.fill(!1,o-n.length+1,o+1),a}function Le(e){var r=te(e),t=r.thousandSeparator,n=r.decimalSeparator,a=e.prefix;a===void 0&&(a="");var i=e.allowNegative;if(i===void 0&&(i=!0),t===n)throw new Error(`
        Decimal separator can't be same as thousand separator.
        thousandSeparator: `+t+` (thousandSeparator = {true} is same as thousandSeparator = ",")
        decimalSeparator: `+n+` (default value for decimalSeparator is .)
     `);return a.startsWith("-")&&i&&(console.error(`
      Prefix can't start with '-' when allowNegative is true.
      prefix: `+a+`
      allowNegative: `+i+`
    `),i=!1),Object.assign(Object.assign({},e),{allowNegative:i})}function _e(e){e=Le(e);var r=e.decimalSeparator;r===void 0&&(r=".");var t=e.allowedDecimalSeparators,n=e.thousandsGroupStyle,a=e.suffix,i=e.allowNegative,o=e.allowLeadingZeros,s=e.onKeyDown;s===void 0&&(s=L);var m=e.onBlur;m===void 0&&(m=L);var p=e.thousandSeparator,f=e.decimalScale,l=e.fixedDecimalScale,u=e.prefix;u===void 0&&(u="");var d=e.defaultValue,S=e.value,g=e.valueIsNumericString,y=e.onValueChange,I=ne(e,["decimalSeparator","allowedDecimalSeparators","thousandsGroupStyle","suffix","allowNegative","allowLeadingZeros","onKeyDown","onBlur","thousandSeparator","decimalScale","fixedDecimalScale","prefix","defaultValue","value","valueIsNumericString","onValueChange"]),V=function(w){return pe(w,e)},A=function(w,b){return je(w,b,e)},P=g;Y(S)?Y(d)||(P=g??typeof d=="number"):P=g??typeof S=="number";var G=function(w){return Y(w)||fe(w)?w:(typeof w=="number"&&(w=ce(w)),P&&typeof f=="number"?de(w,f,!!l):w)},Z=Se(G(S),G(d),!!P,V,A,y),O=Z[0],H=O.numAsString,W=O.formattedValue,M=Z[1],J=function(w){var b=w.target,B=w.key,D=b.selectionStart,_=b.selectionEnd,F=b.value;if(F===void 0&&(F=""),D!==_){s(w);return}B==="Backspace"&&F[0]==="-"&&D===u.length+1&&i&&K(b,1);var T=te(e),$=T.decimalSeparator,j=T.allowedDecimalSeparators;B==="Backspace"&&F[D-1]===$&&f&&l&&(K(b,D-1),w.preventDefault()),j?.includes(B)&&F[D]===$&&K(b,D+1);var ae=p===!0?",":p;B==="Backspace"&&F[D-1]===ae&&K(b,D-1),B==="Delete"&&F[D]===ae&&K(b,D+1),s(w)},Q=function(w){var b=H;if(b.match(/\d/g)||(b=""),o||(b=Ie(b)),l&&f&&(b=de(b,f,l)),b!==H){var B=pe(b,e);M({formattedValue:B,value:b,floatValue:parseFloat(b)},{event:w,source:X.event})}m(w)},z=function(w){return w===r?!0:U(w)};return Object.assign(Object.assign({},I),{value:W,valueIsNumericString:!1,isValidInputCharacter:z,onValueChange:M,format:V,removeFormatting:A,getCaretBoundary:function(w){return Me(w,e)},onKeyDown:J,onBlur:Q})}function Ke(e){var r=_e(e);return N.createElement(ye,Object.assign({},r))}function We(e,r){var t=r.format,n=r.allowEmptyFormatting,a=r.mask,i=r.patternChar;if(i===void 0&&(i="#"),e===""&&!n)return"";for(var o=0,s=t.split(""),m=0,p=t.length;m<p;m++)t[m]===i&&(s[m]=e[o]||he(a,o),o+=1);return s.join("")}function $e(e,r,t){r===void 0&&(r=me(e));var n=t.format,a=t.patternChar;a===void 0&&(a="#");var i=r.from,o=r.to,s=r.lastValue;s===void 0&&(s="");var m=function(y){return n[y]===a},p=function(y,I){for(var V="",A=0;A<y.length;A++)m(I+A)&&U(y[A])&&(V+=y[A]);return V},f=function(y){return y.replace(/[^0-9]/g,"")};if(!n.match(/\d/))return f(e);if(s===""&&e.length===n.length){for(var l="",u=0;u<e.length;u++)if(m(u))U(e[u])&&(l+=e[u]);else if(e[u]!==n[u])return f(e);return l}var d=s.substring(0,i.start),S=e.substring(o.start,o.end),g=s.substring(i.end);return""+p(d,0)+f(S)+p(g,i.end)}function Ue(e,r){var t=r.format,n=r.mask,a=r.patternChar;a===void 0&&(a="#");var i=Array.from({length:e.length+1}).map(function(){return!0}),o=0,s=-1,m={};t.split("").forEach(function(u,d){var S=void 0;u===a&&(o++,S=he(n,o-1),s===-1&&e[d]===S&&(s=d)),m[d]=S});for(var p=function(u){return t[u]===a&&e[u]!==m[u]},f=0,l=i.length;f<l;f++)i[f]=f===s||p(f)||p(f-1);return i[t.indexOf(a)]=!0,i}function Ge(e){var r=e.mask;if(r){var t=r==="string"?r:r.toString();if(t.match(/\d/g))throw new Error("Mask "+r+" should not contain numeric character;")}}function Ze(e){var r=e.mask,t=e.allowEmptyFormatting,n=e.format,a=e.inputMode;a===void 0&&(a="numeric");var i=e.onKeyDown;i===void 0&&(i=L);var o=e.patternChar;o===void 0&&(o="#");var s=ne(e,["mask","allowEmptyFormatting","format","inputMode","onKeyDown","patternChar"]);Ge(e);var m=function(f){return Ue(f,e)},p=function(f){var l=f.key,u=f.target,d=u.selectionStart,S=u.selectionEnd,g=u.value;if(d!==S){i(f);return}var y=d;if(l==="Backspace"||l==="Delete"){var I="right";if(l==="Backspace"){for(;y>0&&n[y-1]!==o;)y--;I="left"}else{for(var V=n.length;y<V&&n[y]!==o;)y++;I="right"}y=re(g,y,m(g),I)}else n[y]!==o&&l!=="ArrowLeft"&&l!=="ArrowRight"&&(y=re(g,y+1,m(g),"right"));y!==d&&K(u,y),i(f)};return Object.assign(Object.assign({},s),{inputMode:a,format:function(f){return We(f,e)},removeFormatting:function(f,l){return $e(f,l,e)},getCaretBoundary:m,onKeyDown:p})}function ar(e){var r=Ze(e);return React.createElement(ye,Object.assign({},r))}function we(){return Intl.NumberFormat()?.formatToParts(1.1)?.find(t=>t.type==="decimal")?.value??"."}function He(){return we()==="."?",":"."}const ze=e=>{const{value:r,onChange:t,disabled:n,highlight:a,validatedSelection:i,fixedDecimals:o,allowNegative:s,thousandSeparator:m,decimalSeparator:p}=e,f=N.useRef();return N.useLayoutEffect(()=>{if(i!==void 0){const l=typeof i=="number"?[i,null]:i;f.current?.setSelectionRange(l[0],l[1])}},[i]),N.createElement(Ne,null,N.createElement(Ke,{autoFocus:!0,getInputRef:f,className:"gdg-input",onFocus:l=>l.target.setSelectionRange(a?0:l.target.value.length,l.target.value.length),disabled:n===!0,decimalScale:o,allowNegative:s,thousandSeparator:m??He(),decimalSeparator:p??we(),value:Object.is(r,-0)?"-":r??"",onValueChange:t}))}}}]);

//# sourceMappingURL=5280.2c29942977baa2dfbe0e.js.map