(function(){"use strict";function e(e){return(e=String(e)).charAt(0).toUpperCase()+e.slice(1)}function t(e,t,i){var r={"10.0":"10",6.4:"10 Technical Preview",6.3:"8.1",6.2:"8",6.1:"Server 2008 R2 / 7","6.0":"Server 2008 / Vista",5.2:"Server 2003 / XP 64-bit",5.1:"XP",5.01:"2000 SP1","5.0":"2000","4.0":"NT","4.90":"ME"};return t&&i&&/^Win/i.test(e)&&!/^Windows Phone /i.test(e)&&(r=r[/[\d.]+$/.exec(e)])&&(e="Windows "+r),e=String(e),t&&i&&(e=e.replace(RegExp(t,"i"),i)),e=n(e.replace(/ ce$/i," CE").replace(/\bhpw/i,"web").replace(/\bMacintosh\b/,"Mac OS").replace(/_PowerPC\b/i," OS").replace(/\b(OS X) [^ \d]+/i,"$1").replace(/\bMac (OS X)\b/,"$1").replace(/\/(\d)/," $1").replace(/_/g,".").replace(/(?: BePC|[ .]*fc[ \d.]+)$/i,"").replace(/\bx86\.64\b/gi,"x86_64").replace(/\b(Windows Phone) OS\b/,"$1").replace(/\b(Chrome OS \w+) [\d.]+\b/,"$1").split(" on ")[0])}function i(e,t){var i=-1,n=e?e.length:0;if("number"==typeof n&&n>-1&&n<=h)for(;++i<n;)t(e[i],i,e);else r(e,t)}function n(t){return t=b(t),/^(?:webOS|i(?:OS|P))/.test(t)?t:e(t)}function r(e,t){for(var i in e)y.call(e,i)&&t(e[i],i,e)}function o(t){return null==t?e(t):M.call(t).slice(8,-1)}function a(e,t){var i=null!=e?typeof e[t]:"number";return!(/^(?:boolean|number|string|undefined)$/.test(i)||"object"==i&&!e[t])}function l(e){return String(e).replace(/([ -])(?!$)/g,"$1?")}function s(e,t){var n=null;return i(e,function(i,r){n=t(n,i,r,e)}),n}function b(e){return String(e).replace(/^ +| +$/g,"")}function c(e){function i(t){return s(t,function(t,i){var r=i.pattern||l(i);return!t&&(t=RegExp("\\b"+r+" *\\d+[.\\w_]*","i").exec(e)||RegExp("\\b"+r+" *\\w+-[\\w]*","i").exec(e)||RegExp("\\b"+r+"(?:; *(?:[a-z]+[_-])?[a-z]+\\d+|[^ ();-]*)","i").exec(e))&&((t=String(i.label&&!RegExp(r,"i").test(i.label)?i.label:t).split("/"))[1]&&!/[\d.]+/.test(t[0])&&(t[0]+=" "+t[1]),i=i.label||i,t=n(t[0].replace(RegExp(r,"i"),i).replace(RegExp("; *(?:"+i+"[_-])?","i")," ").replace(RegExp("("+i+")[-_.]?(\\w)","i"),"$1 $2"))),t})}function p(){return this.description||""}var f=u,S=e&&"object"==typeof e&&"String"!=o(e);S&&(f=e,e=null);var x=f.navigator||{},h=x.userAgent||"";e||(e=h);var O,y,v=S||g==d,w=S?!!x.likeChrome:/\bChrome\b/.test(e)&&!/internal|\n/i.test(M.toString()),P=S?"Object":"ScriptBridgingProxyObject",E=S?"Object":"Environment",k=S&&f.java?"JavaPackage":o(f.java),C=S?"Object":"RuntimeObject",W=/\bJava/.test(k)&&f.java,B=W&&o(f.environment)==E,I=W?"a":"α",A=W?"b":"β",R=f.document||{},T=f.operamini||f.opera,F=m.test(F=S&&T?T["[[Class]]"]:o(T))?F:T=null,G=e,$=[],j=null,X=e==h,N=X&&T&&"function"==typeof T.version&&T.version(),K=function(t){return s(t,function(t,i){return t||RegExp("\\b"+(i.pattern||l(i))+"\\b","i").exec(e)&&(i.label||i)})}([{label:"EdgeHTML",pattern:"Edge"},"Trident",{label:"WebKit",pattern:"AppleWebKit"},"iCab","Presto","NetFront","Tasman","KHTML","Gecko"]),V=function(t){return s(t,function(t,i){return t||RegExp("\\b"+(i.pattern||l(i))+"\\b","i").exec(e)&&(i.label||i)})}(["Adobe AIR","Arora","Avant Browser","Breach","Camino","Electron","Epiphany","Fennec","Flock","Galeon","GreenBrowser","iCab","Iceweasel","K-Meleon","Konqueror","Lunascape","Maxthon",{label:"Microsoft Edge",pattern:"Edge"},"Midori","Nook Browser","PaleMoon","PhantomJS","Raven","Rekonq","RockMelt",{label:"Samsung Internet",pattern:"SamsungBrowser"},"SeaMonkey",{label:"Silk",pattern:"(?:Cloud9|Silk-Accelerated)"},"Sleipnir","SlimBrowser",{label:"SRWare Iron",pattern:"Iron"},"Sunrise","Swiftfox","Waterfox","WebPositive","Opera Mini",{label:"Opera Mini",pattern:"OPiOS"},"Opera",{label:"Opera",pattern:"OPR"},"Chrome",{label:"Chrome Mobile",pattern:"(?:CriOS|CrMo)"},{label:"Firefox",pattern:"(?:Firefox|Minefield)"},{label:"Firefox for iOS",pattern:"FxiOS"},{label:"IE",pattern:"IEMobile"},{label:"IE",pattern:"MSIE"},"Safari"]),z=i([{label:"BlackBerry",pattern:"BB10"},"BlackBerry",{label:"Galaxy S",pattern:"GT-I9000"},{label:"Galaxy S2",pattern:"GT-I9100"},{label:"Galaxy S3",pattern:"GT-I9300"},{label:"Galaxy S4",pattern:"GT-I9500"},{label:"Galaxy S5",pattern:"SM-G900"},{label:"Galaxy S6",pattern:"SM-G920"},{label:"Galaxy S6 Edge",pattern:"SM-G925"},{label:"Galaxy S7",pattern:"SM-G930"},{label:"Galaxy S7 Edge",pattern:"SM-G935"},"Google TV","Lumia","iPad","iPod","iPhone","Kindle",{label:"Kindle Fire",pattern:"(?:Cloud9|Silk-Accelerated)"},"Nexus","Nook","PlayBook","PlayStation Vita","PlayStation","TouchPad","Transformer",{label:"Wii U",pattern:"WiiU"},"Wii","Xbox One",{label:"Xbox 360",pattern:"Xbox"},"Xoom"]),L=function(t){return s(t,function(t,i,n){return t||(i[z]||i[/^[a-z]+(?: +[a-z]+\b)*/i.exec(z)]||RegExp("\\b"+l(n)+"(?:\\b|\\w*\\d)","i").exec(e))&&n})}({Apple:{iPad:1,iPhone:1,iPod:1},Archos:{},Amazon:{Kindle:1,"Kindle Fire":1},Asus:{Transformer:1},"Barnes & Noble":{Nook:1},BlackBerry:{PlayBook:1},Google:{"Google TV":1,Nexus:1},HP:{TouchPad:1},HTC:{},LG:{},Microsoft:{Xbox:1,"Xbox One":1},Motorola:{Xoom:1},Nintendo:{"Wii U":1,Wii:1},Nokia:{Lumia:1},Samsung:{"Galaxy S":1,"Galaxy S2":1,"Galaxy S3":1,"Galaxy S4":1},Sony:{PlayStation:1,"PlayStation Vita":1}}),_=function(i){return s(i,function(i,n){var r=n.pattern||l(n);return!i&&(i=RegExp("\\b"+r+"(?:/[\\d.]+|[ \\w.]*)","i").exec(e))&&(i=t(i,r,n.label||n)),i})}(["Windows Phone","Android","CentOS",{label:"Chrome OS",pattern:"CrOS"},"Debian","Fedora","FreeBSD","Gentoo","Haiku","Kubuntu","Linux Mint","OpenBSD","Red Hat","SuSE","Ubuntu","Xubuntu","Cygwin","Symbian OS","hpwOS","webOS ","webOS","Tablet OS","Tizen","Linux","Mac OS X","Macintosh","Mac","Windows 98;","Windows "]);if(K&&(K=[K]),L&&!z&&(z=i([L])),(O=/\bGoogle TV\b/.exec(z))&&(z=O[0]),/\bSimulator\b/i.test(e)&&(z=(z?z+" ":"")+"Simulator"),"Opera Mini"==V&&/\bOPiOS\b/.test(e)&&$.push("running in Turbo/Uncompressed mode"),"IE"==V&&/\blike iPhone OS\b/.test(e)?(L=(O=c(e.replace(/like iPhone OS/,""))).manufacturer,z=O.product):/^iP/.test(z)?(V||(V="Safari"),_="iOS"+((O=/ OS ([\d_]+)/i.exec(e))?" "+O[1].replace(/_/g,"."):"")):"Konqueror"!=V||/buntu/i.test(_)?L&&"Google"!=L&&(/Chrome/.test(V)&&!/\bMobile Safari\b/i.test(e)||/\bVita\b/.test(z))||/\bAndroid\b/.test(_)&&/^Chrome/.test(V)&&/\bVersion\//i.test(e)?(V="Android Browser",_=/\bAndroid\b/.test(_)?_:"Android"):"Silk"==V?(/\bMobi/i.test(e)||(_="Android",$.unshift("desktop mode")),/Accelerated *= *true/i.test(e)&&$.unshift("accelerated")):"PaleMoon"==V&&(O=/\bFirefox\/([\d.]+)\b/.exec(e))?$.push("identifying as Firefox "+O[1]):"Firefox"==V&&(O=/\b(Mobile|Tablet|TV)\b/i.exec(e))?(_||(_="Firefox OS"),z||(z=O[1])):!V||(O=!/\bMinefield\b/i.test(e)&&/\b(?:Firefox|Safari)\b/.exec(V))?(V&&!z&&/[\/,]|^[^(]+?\)/.test(e.slice(e.indexOf(O+"/")+8))&&(V=null),(O=z||L||_)&&(z||L||/\b(?:Android|Symbian OS|Tablet OS|webOS)\b/.test(_))&&(V=/[a-z]+(?: Hat)?/i.exec(/\bAndroid\b/.test(_)?_:O)+" Browser")):"Electron"==V&&(O=(/\bChrome\/([\d.]+)\b/.exec(e)||0)[1])&&$.push("Chromium "+O):_="Kubuntu",N||(N=function(t){return s(t,function(t,i){return t||(RegExp(i+"(?:-[\\d.]+/|(?: for [\\w-]+)?[ /-])([\\d.]+[^ ();/_-]*)","i").exec(e)||0)[1]||null})}(["(?:Cloud9|CriOS|CrMo|Edge|FxiOS|IEMobile|Iron|Opera ?Mini|OPiOS|OPR|Raven|SamsungBrowser|Silk(?!/[\\d.]+$))","Version",l(V),"(?:Firefox|Minefield|NetFront)"])),(O="iCab"==K&&parseFloat(N)>3&&"WebKit"||/\bOpera\b/.test(V)&&(/\bOPR\b/.test(e)?"Blink":"Presto")||/\b(?:Midori|Nook|Safari)\b/i.test(e)&&!/^(?:Trident|EdgeHTML)$/.test(K)&&"WebKit"||!K&&/\bMSIE\b/i.test(e)&&("Mac OS"==_?"Tasman":"Trident")||"WebKit"==K&&/\bPlayStation\b(?! Vita\b)/i.test(V)&&"NetFront")&&(K=[O]),"IE"==V&&(O=(/; *(?:XBLWP|ZuneWP)(\d+)/i.exec(e)||0)[1])?(V+=" Mobile",_="Windows Phone "+(/\+$/.test(O)?O:O+".x"),$.unshift("desktop mode")):/\bWPDesktop\b/i.test(e)?(V="IE Mobile",_="Windows Phone 8.x",$.unshift("desktop mode"),N||(N=(/\brv:([\d.]+)/.exec(e)||0)[1])):"IE"!=V&&"Trident"==K&&(O=/\brv:([\d.]+)/.exec(e))&&(V&&$.push("identifying as "+V+(N?" "+N:"")),V="IE",N=O[1]),X){if(a(f,"global"))if(W&&(G=(O=W.lang.System).getProperty("os.arch"),_=_||O.getProperty("os.name")+" "+O.getProperty("os.version")),v&&a(f,"system")&&(O=[f.system])[0]){_||(_=O[0].os||null);try{O[1]=f.require("ringo/engine").version,N=O[1].join("."),V="RingoJS"}catch(e){O[0].global.system==f.system&&(V="Narwhal")}}else"object"==typeof f.process&&!f.process.browser&&(O=f.process)?("object"==typeof O.versions&&("string"==typeof O.versions.electron?($.push("Node "+O.versions.node),V="Electron",N=O.versions.electron):"string"==typeof O.versions.nw&&($.push("Chromium "+N,"Node "+O.versions.node),V="NW.js",N=O.versions.nw)),V||(V="Node.js",G=O.arch,_=O.platform,N=(N=/[\d.]+/.exec(O.version))?N[0]:"unknown")):B&&(V="Rhino");else o(O=f.runtime)==P?(V="Adobe AIR",_=O.flash.system.Capabilities.os):o(O=f.phantom)==C?(V="PhantomJS",N=(O=O.version||null)&&O.major+"."+O.minor+"."+O.patch):"number"==typeof R.documentMode&&(O=/\bTrident\/(\d+)/i.exec(e))?(N=[N,R.documentMode],(O=+O[1]+4)!=N[1]&&($.push("IE "+N[1]+" mode"),K&&(K[1]=""),N[1]=O),N="IE"==V?String(N[1].toFixed(1)):N[0]):"number"==typeof R.documentMode&&/^(?:Chrome|Firefox)\b/.test(V)&&($.push("masking as "+V+" "+N),V="IE",N="11.0",K=["Trident"],_="Windows");_=_&&n(_)}if(N&&(O=/(?:[ab]|dp|pre|[ab]\d+pre)(?:\d+\+?)?$/i.exec(N)||/(?:alpha|beta)(?: ?\d)?/i.exec(e+";"+(X&&x.appMinorVersion))||/\bMinefield\b/i.test(e)&&"a")&&(j=/b/i.test(O)?"beta":"alpha",N=N.replace(RegExp(O+"\\+?$"),"")+("beta"==j?A:I)+(/\d+\+?/.exec(O)||"")),"Fennec"==V||"Firefox"==V&&/\b(?:Android|Firefox OS)\b/.test(_))V="Firefox Mobile";else if("Maxthon"==V&&N)N=N.replace(/\.[\d.]+/,".x");else if(/\bXbox\b/i.test(z))"Xbox 360"==z&&(_=null),"Xbox 360"==z&&/\bIEMobile\b/.test(e)&&$.unshift("mobile mode");else if(!/^(?:Chrome|IE|Opera)$/.test(V)&&(!V||z||/Browser|Mobi/.test(V))||"Windows CE"!=_&&!/Mobi/i.test(e))if("IE"==V&&X)try{null===f.external&&$.unshift("platform preview")}catch(e){$.unshift("embedded")}else(/\bBlackBerry\b/.test(z)||/\bBB10\b/.test(e))&&(O=(RegExp(z.replace(/ +/g," *")+"/([.\\d]+)","i").exec(e)||0)[1]||N)?(_=((O=[O,/BB10/.test(e)])[1]?(z=null,L="BlackBerry"):"Device Software")+" "+O[0],N=null):this!=r&&"Wii"!=z&&(X&&T||/Opera/.test(V)&&/\b(?:MSIE|Firefox)\b/i.test(e)||"Firefox"==V&&/\bOS X (?:\d+\.){2,}/.test(_)||"IE"==V&&(_&&!/^Win/.test(_)&&N>5.5||/\bWindows XP\b/.test(_)&&N>8||8==N&&!/\bTrident\b/.test(e)))&&!m.test(O=c.call(r,e.replace(m,"")+";"))&&O.name&&(O="ing as "+O.name+((O=O.version)?" "+O:""),m.test(V)?(/\bIE\b/.test(O)&&"Mac OS"==_&&(_=null),O="identify"+O):(O="mask"+O,V=F?n(F.replace(/([a-z])([A-Z])/g,"$1 $2")):"Opera",/\bIE\b/.test(O)&&(_=null),X||(N=null)),K=["Presto"],$.push(O));else V+=" Mobile";(O=(/\bAppleWebKit\/([\d.]+\+?)/i.exec(e)||0)[1])&&(O=[parseFloat(O.replace(/\.(\d)$/,".0$1")),O],"Safari"==V&&"+"==O[1].slice(-1)?(V="WebKit Nightly",j="alpha",N=O[1].slice(0,-1)):N!=O[1]&&N!=(O[2]=(/\bSafari\/([\d.]+\+?)/i.exec(e)||0)[1])||(N=null),O[1]=(/\bChrome\/([\d.]+)/i.exec(e)||0)[1],537.36==O[0]&&537.36==O[2]&&parseFloat(O[1])>=28&&"WebKit"==K&&(K=["Blink"]),X&&(w||O[1])?(K&&(K[1]="like Chrome"),O=O[1]||(O=O[0],O<530?1:O<532?2:O<532.05?3:O<533?4:O<534.03?5:O<534.07?6:O<534.1?7:O<534.13?8:O<534.16?9:O<534.24?10:O<534.3?11:O<535.01?12:O<535.02?"13+":O<535.07?15:O<535.11?16:O<535.19?17:O<536.05?18:O<536.1?19:O<537.01?20:O<537.11?"21+":O<537.13?23:O<537.18?24:O<537.24?25:O<537.36?26:"Blink"!=K?"27":"28")):(K&&(K[1]="like Safari"),O=O[0],O=O<400?1:O<500?2:O<526?3:O<533?4:O<534?"4+":O<535?5:O<537?6:O<538?7:O<601?8:"8"),K&&(K[1]+=" "+(O+="number"==typeof O?".x":/[.+]/.test(O)?"":"+")),"Safari"==V&&(!N||parseInt(N)>45)&&(N=O)),"Opera"==V&&(O=/\bzbov|zvav$/.exec(_))?(V+=" ",$.unshift("desktop mode"),"zvav"==O?(V+="Mini",N=null):V+="Mobile",_=_.replace(RegExp(" *"+O+"$"),"")):"Safari"==V&&/\bChrome\b/.exec(K&&K[1])&&($.unshift("desktop mode"),V="Chrome Mobile",N=null,/\bOS X\b/.test(_)?(L="Apple",_="iOS 4.3+"):_=null),N&&0==N.indexOf(O=/[\d.]+$/.exec(_))&&e.indexOf("/"+O+"-")>-1&&(_=b(_.replace(O,""))),K&&!/\b(?:Avant|Nook)\b/.test(V)&&(/Browser|Lunascape|Maxthon/.test(V)||"Safari"!=V&&/^iOS/.test(_)&&/\bSafari\b/.test(K[1])||/^(?:Adobe|Arora|Breach|Midori|Opera|Phantom|Rekonq|Rock|Samsung Internet|Sleipnir|Web)/.test(V)&&K[1])&&(O=K[K.length-1])&&$.push(O),$.length&&($=["("+$.join("; ")+")"]),L&&z&&z.indexOf(L)<0&&$.push("on "+L),z&&$.push((/^on /.test($[$.length-1])?"":"on ")+z),_&&(O=/ ([\d.+]+)$/.exec(_),y=O&&"/"==_.charAt(_.length-O[0].length-1),_={architecture:32,family:O&&!y?_.replace(O[0],""):_,version:O?O[1]:null,toString:function(){var e=this.version;return this.family+(e&&!y?" "+e:"")+(64==this.architecture?" 64-bit":"")}}),(O=/\b(?:AMD|IA|Win|WOW|x86_|x)64\b/i.exec(G))&&!/\bi686\b/i.test(G)?(_&&(_.architecture=64,_.family=_.family.replace(RegExp(" *"+O),"")),V&&(/\bWOW64\b/i.test(e)||X&&/\w(?:86|32)$/.test(x.cpuClass||x.platform)&&!/\bWin64; x64\b/i.test(e))&&$.unshift("32-bit")):_&&/^OS X/.test(_.family)&&"Chrome"==V&&parseFloat(N)>=39&&(_.architecture=64),e||(e=null);var H={};return H.description=e,H.layout=K&&K[0],H.manufacturer=L,H.name=V,H.prerelease=j,H.product=z,H.ua=e,H.version=V&&N,H.os=_||{architecture:null,family:null,version:null,toString:function(){return"null"}},H.parse=c,H.toString=p,H.version&&$.unshift(N),H.name&&$.unshift(V),_&&V&&(_!=String(_).split(" ")[0]||_!=V.split(" ")[0]&&!z)&&$.push(z?"("+_+")":"on "+_),$.length&&(H.description=$.join(" ")),H}var p={function:!0,object:!0},u=p[typeof window]&&window||this,d=u,f=p[typeof exports]&&exports,S=p[typeof module]&&module&&!module.nodeType&&module,x=f&&S&&"object"==typeof global&&global;!x||x.global!==x&&x.window!==x&&x.self!==x||(u=x);var h=Math.pow(2,53)-1,m=/\bOpera/,g=this,O=Object.prototype,y=O.hasOwnProperty,M=O.toString,v=c();"function"==typeof define&&"object"==typeof define.amd&&define.amd?(u.platform=v,define(function(){return v})):f&&S?r(v,function(e,t){f[t]=e}):u.platform=v}).call(this);
function $error(ex) {
  var
    _toString = Object.prototype.toString,
    UNKNOWN_FUNCTION = '?',
    chrome = /^\s*at (.*?) ?\(?((?:file|https?|chrome-extension):.*?):(\d+)(?::(\d+))?\)?\s*$/i,
    gecko = /^\s*(.*?)(?:\((.*?)\))?@?((?:file|https?|chrome):.*?):(\d+)(?::(\d+))?\s*$/i,
    winjs = /^\s*at (?:((?:\[object object\])?.+) )?\(?((?:ms-appx|http|https):.*?):(\d+)(?::(\d+))?\)?\s*$/i,
    stack = [],
    parts,
    element,
    lines,
    html = ex,
    reportBody
  ;
  if (typeof ex === 'string') return out();
  if (_toString.call(ex) == '[object Arguments]') {
    html = ex[0];
    if (ex[1] && typeof ex[1] === 'string' && ex[2] && ex[3]) {
      ex = {
        message: ex[0] + '',
        stack: ex[1] + ':' + ex[2] + ':' + ex[3]
      }
    } else if (ex[0] && typeof ex[0] === 'object' && typeof ex[0].stack === 'string') {
      ex = ex[0];
    } else if (ex[4] && typeof ex[4] === 'object' && typeof ex[4].stack === 'string') {
      ex = ex[4];
    }
  }
  if (!ex.stack) return out();
  lines = lines || ex.stack.split('\n')
  function out() {
    var at = '@';
    return {
      html: html,
      name: ex.name,
      message: ex.message,
      stack: stack,
      reportBody: reportBody,
      reportLink: '/bug.php?report='+encodeURIComponent(reportBody)
    };
  }
  for (var i = 0, j = lines.length; i < j; ++i) {
    if ((parts = gecko.exec(lines[i]))) {
      element = {
        'url': parts[3],
        'func': parts[1] || UNKNOWN_FUNCTION,
        'args': parts[2] ? parts[2].split(',') : '',
        'line': +parts[4],
        'column': parts[5] ? +parts[5] : null
      };
    } else if ((parts = chrome.exec(lines[i]))) {
      element = {
        'url': parts[2],
        'func': parts[1] || UNKNOWN_FUNCTION,
        'line': +parts[3],
        'column': parts[4] ? +parts[4] : null
      };
    } else if ((parts = winjs.exec(lines[i]))) {
      element = {
      'url': parts[2],
      'func': parts[1] || UNKNOWN_FUNCTION,
      'line': +parts[3],
      'column': parts[4] ? +parts[4] : null
      };
    } else {
      continue;
    }
    stack.push(element);
  }
  if (!stack.length) return out(ex);
  if (!stack[0].column && typeof ex.columnNumber !== 'undefined') { stack[0].column = ex.columnNumber + 1; }
  reportBody = platform.description + '\nuserAgent: ' + navigator.userAgent + '\n#' + (ex.name ? ex.name + ' ' : '') + ex.message;
  html = (ex.name ? '<strong>' + ex.name + '</strong> ' : '') + ex.message;
  for (var i = 0, l = stack.length; i < l; i++) {
    var st = stack[i];
    reportBody += '\n' + st.func + ' -> ' + st.url+':'+st.line+':'+st.column;
    var func = String(st.func)
            .replace(/&/g, '&amp;')
            .replace(/"/g, '&quot;')
            .replace(/'/g, '&#39;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;');
    html += '\n'+func+' <a href="'+st.url+':'+st.line+':'+st.column+'">'+st.url+':'+st.line+':'+st.column+'</a>'
  }
  return out(html)
}