/*! lazysizes - v1.1.5 */
!function(a,b){var c=b(a,a.document);a.lazySizes=c,"object"==typeof module&&module.exports?module.exports=c:"function"==typeof define&&define.amd&&define(c)}(window,function(a,b){"use strict";if(b.getElementsByClassName){var c,d=b.documentElement,e=a.addEventListener,f=a.setTimeout,g=a.requestAnimationFrame||f,h=a.setImmediate||f,i=/^picture$/i,j=["load","error","lazyincluded","_lazyloaded"],k=function(a,b){var c=new RegExp("(\\s|^)"+b+"(\\s|$)");return a.className.match(c)&&c},l=function(a,b){k(a,b)||(a.className+=" "+b)},m=function(a,b){var c;(c=k(a,b))&&(a.className=a.className.replace(c," "))},n=function(a,b,c){var d=c?"addEventListener":"removeEventListener";c&&n(a,b),j.forEach(function(c){a[d](c,b)})},o=function(a,c,d,e,f){var g=b.createEvent("CustomEvent");return g.initCustomEvent(c,!e,!f,d||{}),a.dispatchEvent(g),g},p=function(b,d){var e;a.HTMLPictureElement||((e=a.picturefill||a.respimage||c.pf)?e({reevaluate:!0,elements:[b]}):d&&d.src&&(b.src=d.src))},q=function(a,b){return(getComputedStyle(a,null)||{})[b]},r=function(a,b,d){for(d=d||a.offsetWidth;d<c.minSize&&b&&!a._lazysizesWidth;)d=b.offsetWidth,b=b.parentNode;return d},s=function(b){var d,e=0,i=a.Date,j=function(){d=!1,e=i.now(),b()},k=function(){h(j)},l=function(){g(k)};return function(){if(!d){var a=c.throttle-(i.now()-e);d=!0,6>a&&(a=6),f(l,a)}}},t=function(){var h,j,r,t,v,w,x,y,z,A,B,C,D,E=/^img$/i,F=/^iframe$/i,G="onscroll"in a&&!/glebot/.test(navigator.userAgent),H=0,I=0,J=0,K=0,L=function(a){J--,a&&a.target&&n(a.target,L),(!a||0>J||!a.target)&&(J=0)},M=function(a,b){var c,d=a,e="hidden"!=q(a,"visibility");for(y-=b,B+=b,z-=b,A+=b;e&&(d=d.offsetParent);)e=(q(d,"opacity")||1)>0,e&&"visible"!=q(d,"overflow")&&(c=d.getBoundingClientRect(),e=A>c.left&&z<c.right&&B>c.top-1&&y<c.bottom+1);return e},N=function(){var a,b,d,e,f,g,i,k,l;if((v=c.loadMode)&&8>J&&(a=h.length)){for(b=0,K++,D>I&&1>J&&K>3&&v>2?(I=D,K=0):I=v>1&&K>2&&6>J?C:H;a>b;b++)if(h[b]&&!h[b]._lazyRace)if(G)if((k=h[b].getAttribute("data-expand"))&&(g=1*k)||(g=I),l!==g&&(w=innerWidth+g,x=innerHeight+g,i=-1*g,l=g),d=h[b].getBoundingClientRect(),(B=d.bottom)>=i&&(y=d.top)<=x&&(A=d.right)>=i&&(z=d.left)<=w&&(B||A||z||y)&&(r&&3>J&&!k&&(3>v||4>K)||M(h[b],g))){if(S(h[b]),f=!0,J>12)break;J>7&&(I=H)}else!f&&r&&!e&&3>J&&4>K&&v>2&&(j[0]||c.preloadAfterLoad)&&(j[0]||!k&&(B||A||z||y||"auto"!=h[b].getAttribute(c.sizesAttr)))&&(e=j[0]||h[b]);else S(h[b]);e&&!f&&S(e)}},O=s(N),P=function(a){l(a.target,c.loadedClass),m(a.target,c.loadingClass),n(a.target,P)},Q=function(a,b){try{a.contentWindow.location.replace(b)}catch(c){a.setAttribute("src",b)}},R=function(){var a,b=[],c=function(){for(;b.length;)b.shift()();a=!1};return function(d){b.push(d),a||(a=!0,g(c))}}(),S=function(a){var b,d,e,g,h,j,q,s,v,w,x,y,z=E.test(a.nodeName),A=z&&(a.getAttribute(c.sizesAttr)||a.getAttribute("sizes")),B="auto"==A;(!B&&r||!z||!a.src&&!a.srcset||a.complete||k(a,c.errorClass))&&(B&&(y=a.offsetWidth),a._lazyRace=!0,J++,R(function(){if(a._lazyRace&&delete a._lazyRace,m(a,c.lazyClass),!(v=o(a,"lazybeforeunveil")).defaultPrevented){if(A&&(B?(l(a,c.autosizesClass),u.updateElem(a,!0,y)):a.setAttribute("sizes",A)),j=a.getAttribute(c.srcsetAttr),h=a.getAttribute(c.srcAttr),z&&(q=a.parentNode,s=q&&i.test(q.nodeName||"")),w=v.detail.firesLoad||"src"in a&&(j||h||s),v={target:a},w&&(n(a,L,!0),clearTimeout(t),t=f(L,2500),l(a,c.loadingClass),n(a,P,!0)),s)for(b=q.getElementsByTagName("source"),d=0,e=b.length;e>d;d++)(x=c.customMedia[b[d].getAttribute("data-media")||b[d].getAttribute("media")])&&b[d].setAttribute("media",x),g=b[d].getAttribute(c.srcsetAttr),g&&b[d].setAttribute("srcset",g);j?a.setAttribute("srcset",j):h&&(F.test(a.nodeName)?Q(a,h):a.setAttribute("src",h)),(j||s)&&p(a,{src:h})}(!w||a.complete)&&(w?L(v):J--,P(v))}))},T=function(){if(!r){var a,b=function(){c.loadMode=3,O()};r=!0,c.loadMode=3,K++,e("scroll",function(){3==c.loadMode&&(c.loadMode=2),clearTimeout(a),a=f(b,99)},!0)}};return{_:function(){h=b.getElementsByClassName(c.lazyClass),j=b.getElementsByClassName(c.lazyClass+" "+c.preloadClass),C=c.expand,D=Math.round(C*c.expFactor),e("scroll",O,!0),e("resize",O,!0),a.MutationObserver?new MutationObserver(O).observe(d,{childList:!0,subtree:!0,attributes:!0}):(d.addEventListener("DOMNodeInserted",O,!0),d.addEventListener("DOMAttrModified",O,!0),setInterval(O,999)),e("hashchange",O,!0),["focus","mouseover","click","load","transitionend","animationend","webkitAnimationEnd"].forEach(function(a){b.addEventListener(a,O,!0)}),/d$|^c/.test(b.readyState)?T():(e("load",T),b.addEventListener("DOMContentLoaded",O),f(T,25e3)),O()},checkElems:O,unveil:S}}(),u=function(){var a,d=function(a,b,c){var d,e,f,g,h=a.parentNode;if(h&&(c=r(a,h,c),g=o(a,"lazybeforesizes",{width:c,dataAttr:!!b}),!g.defaultPrevented&&(c=g.detail.width,c&&c!==a._lazysizesWidth))){if(a._lazysizesWidth=c,c+="px",a.setAttribute("sizes",c),i.test(h.nodeName||""))for(d=h.getElementsByTagName("source"),e=0,f=d.length;f>e;e++)d[e].setAttribute("sizes",c);g.detail.dataAttr||p(a,g.detail)}},f=function(){var b,c=a.length;if(c)for(b=0;c>b;b++)d(a[b])},g=s(f);return{_:function(){a=b.getElementsByClassName(c.autosizesClass),e("resize",g)},checkElems:g,updateElem:d}}(),v=function(){v.i||(v.i=!0,u._(),t._())};return function(){var b,d={lazyClass:"lazy",loadedClass:"lazyloaded",loadingClass:"lazyloading",preloadClass:"lazypreload",errorClass:"lazyerror",autosizesClass:"lazyautosizes",srcAttr:"data-src",srcsetAttr:"data-srcset",sizesAttr:"data-sizes",minSize:40,customMedia:{},init:!0,expFactor:2,expand:200,loadMode:2,throttle:125};c=a.lazySizesConfig||a.lazysizesConfig||{};for(b in d)b in c||(c[b]=d[b]);a.lazySizesConfig=c,f(function(){c.init&&v()})}(),{cfg:c,autoSizer:u,loader:t,init:v,uP:p,aC:l,rC:m,hC:k,fire:o,gW:r}}});
/*! Related Post Widget for Blogger by Taufik Nurrohman => http://gplus.to/tovic */
var randomRelatedIndex,showRelatedPost;!function(e,t,a){var n={widgetTitle:"<h2>Related:</h2>",widgetStyle:2,homePage:"",numPosts:3,titleLength:"auto",thumbnailSize:70,noImage:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAIAAACQd1PeAAAAA3NCSVQICAjb4U/gAAAADElEQVQImWOor68HAAL+AX7vOF2TAAAAAElFTkSuQmCC",containerId:"related-post",newTabLink:!1,callBack:function(){}};for(var l in relatedPostConfig)n[l]="undefined"==relatedPostConfig[l]?n[l]:relatedPostConfig[l];var r=function(e){var n=t.createElement("script");n.type="text/javascript",n.async="true",n.src=e,a.appendChild(n)},i=function(e,t){return Math.floor(Math.random()*(t-e+1))+e},o=function(e){var t,a,n=e.length;if(0===n)return!1;for(;--n;)t=Math.floor(Math.random()*(n+1)),a=e[n],e[n]=e[t],e[t]=a;return e},s="object"==typeof labelArray&&labelArray.length>0?"/-/"+o(labelArray)[0]:"",d=function(e){var t=e.feed.openSearch$totalResults.$t-n.numPosts,a=i(1,t>0?t:1);r(n.homePage.replace(/\/$/,"")+"/feeds/posts/summary"+s+"?alt=json-in-script&orderby=updated&start-index="+a+"&max-results="+n.numPosts+"&callback=showRelatedPost")},m=function(e){var t,a,l,r,i=document.getElementById(n.containerId),s=o(e.feed.entry),d=n.widgetStyle,m=n.widgetTitle+'<ul class="related-post-style-'+d+'">',u=n.newTabLink?' target="_blank"':"",c='<span style="display:block;clear:both;"></span>';if(i){for(var h=0;h<n.numPosts&&h!=s.length;h++){a=s[h].title.$t,l="auto"!==n.titleLength&&n.titleLength<a.length?a.substring(0,n.titleLength)+"&hellip;":a,r="media$thumbnail"in s[h]&&n.thumbnailSize!==!1?s[h].media$thumbnail.url.replace(/\/s[0-9]+(\-c)?/,"/s"+n.thumbnailSize+"-c"):n.noImage;for(var A=0,g=s[h].link.length;g>A;A++)t="alternate"==s[h].link[A].rel?s[h].link[A].href:"#";2==d&&(m+='<li><img alt="" class="related-post-item-thumbnail" src="'+r+'" width="'+n.thumbnailSize+'" height="'+n.thumbnailSize+'"><span><a class="related-post-item-title" title="'+a+'" href="'+t+'"'+u+">"+l+"</a></span>"+c+"</li>")}i.innerHTML=m+="</ul>"+c,n.callBack()}};randomRelatedIndex=d,showRelatedPost=m,r(n.homePage.replace(/\/$/,"")+"/feeds/posts/summary"+s+"?alt=json-in-script&orderby=updated&max-results=17&callback=randomRelatedIndex")}(window,document,document.getElementsByTagName("head")[0]);
