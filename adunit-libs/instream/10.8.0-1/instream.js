 
/**
 * UAParser.js v0.7.12
 * Lightweight JavaScript-based User-Agent string parser
 * https://github.com/faisalman/ua-parser-js
 *
 * Copyright © 2012-2016 Faisal Salman <fyzlman@gmail.com>
 * Dual licensed under GPLv2 & MIT
 */(function(e,t){"use strict";var n="0.7.12",r="",i="?",s="function",o="undefined",u="object",a="string",f="major",l="model",c="name",h="type",p="vendor",d="version",v="architecture",m="console",g="mobile",y="tablet",b="smarttv",w="wearable",E="embedded",S={extend:function(e,t){var n={};for(var r in e)t[r]&&t[r].length%2===0?n[r]=t[r].concat(e[r]):n[r]=e[r];return n},has:function(e,t){return typeof e=="string"?t.toLowerCase().indexOf(e.toLowerCase())!==-1:!1},lowerize:function(e){return e.toLowerCase()},major:function(e){return typeof e===a?e.replace(/[^\d\.]/g,"").split(".")[0]:t},trim:function(e){return e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"")}},x={rgx:function(){var e,n=0,r,i,a,f,l,c,h=arguments;while(n<h.length&&!l){var p=h[n],d=h[n+1];if(typeof e===o){e={};for(a in d)d.hasOwnProperty(a)&&(f=d[a],typeof f===u?e[f[0]]=t:e[f]=t)}r=i=0;while(r<p.length&&!l){l=p[r++].exec(this.getUA());if(!!l)for(a=0;a<d.length;a++)c=l[++i],f=d[a],typeof f===u&&f.length>0?f.length==2?typeof f[1]==s?e[f[0]]=f[1].call(this,c):e[f[0]]=f[1]:f.length==3?typeof f[1]===s&&(!f[1].exec||!f[1].test)?e[f[0]]=c?f[1].call(this,c,f[2]):t:e[f[0]]=c?c.replace(f[1],f[2]):t:f.length==4&&(e[f[0]]=c?f[3].call(this,c.replace(f[1],f[2])):t):e[f]=c?c:t}n+=2}return e},str:function(e,n){for(var r in n)if(typeof n[r]===u&&n[r].length>0){for(var s=0;s<n[r].length;s++)if(S.has(n[r][s],e))return r===i?t:r}else if(S.has(n[r],e))return r===i?t:r;return e}},T={browser:{oldsafari:{version:{"1.0":"/8",1.2:"/1",1.3:"/3","2.0":"/412","2.0.2":"/416","2.0.3":"/417","2.0.4":"/419","?":"/"}}},device:{amazon:{model:{"Fire Phone":["SD","KF"]}},sprint:{model:{"Evo Shift 4G":"7373KT"},vendor:{HTC:"APA",Sprint:"Sprint"}}},os:{windows:{version:{ME:"4.90","NT 3.11":"NT3.51","NT 4.0":"NT4.0",2e3:"NT 5.0",XP:["NT 5.1","NT 5.2"],Vista:"NT 6.0",7:"NT 6.1",8:"NT 6.2",8.1:"NT 6.3",10:["NT 6.4","NT 10.0"],RT:"ARM"}}}},N={browser:[[/(opera\smini)\/([\w\.-]+)/i,/(opera\s[mobiletab]+).+version\/([\w\.-]+)/i,/(opera).+version\/([\w\.]+)/i,/(opera)[\/\s]+([\w\.]+)/i],[c,d],[/(opios)[\/\s]+([\w\.]+)/i],[[c,"Opera Mini"],d],[/\s(opr)\/([\w\.]+)/i],[[c,"Opera"],d],[/(kindle)\/([\w\.]+)/i,/(lunascape|maxthon|netfront|jasmine|blazer)[\/\s]?([\w\.]+)*/i,/(avant\s|iemobile|slim|baidu)(?:browser)?[\/\s]?([\w\.]*)/i,/(?:ms|\()(ie)\s([\w\.]+)/i,/(rekonq)\/([\w\.]+)*/i,/(chromium|flock|rockmelt|midori|epiphany|silk|skyfire|ovibrowser|bolt|iron|vivaldi|iridium|phantomjs)\/([\w\.-]+)/i],[c,d],[/(trident).+rv[:\s]([\w\.]+).+like\sgecko/i],[[c,"IE"],d],[/(edge)\/((\d+)?[\w\.]+)/i],[c,d],[/(yabrowser)\/([\w\.]+)/i],[[c,"Yandex"],d],[/(comodo_dragon)\/([\w\.]+)/i],[[c,/_/g," "],d],[/(micromessenger)\/([\w\.]+)/i],[[c,"WeChat"],d],[/xiaomi\/miuibrowser\/([\w\.]+)/i],[d,[c,"MIUI Browser"]],[/\swv\).+(chrome)\/([\w\.]+)/i],[[c,/(.+)/,"$1 WebView"],d],[/android.+samsungbrowser\/([\w\.]+)/i,/android.+version\/([\w\.]+)\s+(?:mobile\s?safari|safari)*/i],[d,[c,"Android Browser"]],[/(chrome|omniweb|arora|[tizenoka]{5}\s?browser)\/v?([\w\.]+)/i,/(qqbrowser)[\/\s]?([\w\.]+)/i],[c,d],[/(uc\s?browser)[\/\s]?([\w\.]+)/i,/ucweb.+(ucbrowser)[\/\s]?([\w\.]+)/i,/juc.+(ucweb)[\/\s]?([\w\.]+)/i],[[c,"UCBrowser"],d],[/(dolfin)\/([\w\.]+)/i],[[c,"Dolphin"],d],[/((?:android.+)crmo|crios)\/([\w\.]+)/i],[[c,"Chrome"],d],[/;fbav\/([\w\.]+);/i],[d,[c,"Facebook"]],[/fxios\/([\w\.-]+)/i],[d,[c,"Firefox"]],[/version\/([\w\.]+).+?mobile\/\w+\s(safari)/i],[d,[c,"Mobile Safari"]],[/version\/([\w\.]+).+?(mobile\s?safari|safari)/i],[d,c],[/webkit.+?(mobile\s?safari|safari)(\/[\w\.]+)/i],[c,[d,x.str,T.browser.oldsafari.version]],[/(konqueror)\/([\w\.]+)/i,/(webkit|khtml)\/([\w\.]+)/i],[c,d],[/(navigator|netscape)\/([\w\.-]+)/i],[[c,"Netscape"],d],[/(swiftfox)/i,/(icedragon|iceweasel|camino|chimera|fennec|maemo\sbrowser|minimo|conkeror)[\/\s]?([\w\.\+]+)/i,/(firefox|seamonkey|k-meleon|icecat|iceape|firebird|phoenix)\/([\w\.-]+)/i,/(mozilla)\/([\w\.]+).+rv\:.+gecko\/\d+/i,/(polaris|lynx|dillo|icab|doris|amaya|w3m|netsurf|sleipnir)[\/\s]?([\w\.]+)/i,/(links)\s\(([\w\.]+)/i,/(gobrowser)\/?([\w\.]+)*/i,/(ice\s?browser)\/v?([\w\._]+)/i,/(mosaic)[\/\s]([\w\.]+)/i],[c,d]],cpu:[[/(?:(amd|x(?:(?:86|64)[_-])?|wow|win)64)[;\)]/i],[[v,"amd64"]],[/(ia32(?=;))/i],[[v,S.lowerize]],[/((?:i[346]|x)86)[;\)]/i],[[v,"ia32"]],[/windows\s(ce|mobile);\sppc;/i],[[v,"arm"]],[/((?:ppc|powerpc)(?:64)?)(?:\smac|;|\))/i],[[v,/ower/,"",S.lowerize]],[/(sun4\w)[;\)]/i],[[v,"sparc"]],[/((?:avr32|ia64(?=;))|68k(?=\))|arm(?:64|(?=v\d+;))|(?=atmel\s)avr|(?:irix|mips|sparc)(?:64)?(?=;)|pa-risc)/i],[[v,S.lowerize]]],device:[[/\((ipad|playbook);[\w\s\);-]+(rim|apple)/i],[l,p,[h,y]],[/applecoremedia\/[\w\.]+ \((ipad)/],[l,[p,"Apple"],[h,y]],[/(apple\s{0,1}tv)/i],[[l,"Apple TV"],[p,"Apple"]],[/(archos)\s(gamepad2?)/i,/(hp).+(touchpad)/i,/(hp).+(tablet)/i,/(kindle)\/([\w\.]+)/i,/\s(nook)[\w\s]+build\/(\w+)/i,/(dell)\s(strea[kpr\s\d]*[\dko])/i],[p,l,[h,y]],[/(kf[A-z]+)\sbuild\/[\w\.]+.*silk\//i],[l,[p,"Amazon"],[h,y]],[/(sd|kf)[0349hijorstuw]+\sbuild\/[\w\.]+.*silk\//i],[[l,x.str,T.device.amazon.model],[p,"Amazon"],[h,g]],[/\((ip[honed|\s\w*]+);.+(apple)/i],[l,p,[h,g]],[/\((ip[honed|\s\w*]+);/i],[l,[p,"Apple"],[h,g]],[/(blackberry)[\s-]?(\w+)/i,/(blackberry|benq|palm(?=\-)|sonyericsson|acer|asus|dell|huawei|meizu|motorola|polytron)[\s_-]?([\w-]+)*/i,/(hp)\s([\w\s]+\w)/i,/(asus)-?(\w+)/i],[p,l,[h,g]],[/\(bb10;\s(\w+)/i],[l,[p,"BlackBerry"],[h,g]],[/android.+(transfo[prime\s]{4,10}\s\w+|eeepc|slider\s\w+|nexus 7|padfone)/i],[l,[p,"Asus"],[h,y]],[/(sony)\s(tablet\s[ps])\sbuild\//i,/(sony)?(?:sgp.+)\sbuild\//i],[[p,"Sony"],[l,"Xperia Tablet"],[h,y]],[/(?:sony)?(?:(?:(?:c|d)\d{4})|(?:so[-l].+))\sbuild\//i],[[p,"Sony"],[l,"Xperia Phone"],[h,g]],[/\s(ouya)\s/i,/(nintendo)\s([wids3u]+)/i],[p,l,[h,m]],[/android.+;\s(shield)\sbuild/i],[l,[p,"Nvidia"],[h,m]],[/(playstation\s[34portablevi]+)/i],[l,[p,"Sony"],[h,m]],[/(sprint\s(\w+))/i],[[p,x.str,T.device.sprint.vendor],[l,x.str,T.device.sprint.model],[h,g]],[/(lenovo)\s?(S(?:5000|6000)+(?:[-][\w+]))/i],[p,l,[h,y]],[/(htc)[;_\s-]+([\w\s]+(?=\))|\w+)*/i,/(zte)-(\w+)*/i,/(alcatel|geeksphone|huawei|lenovo|nexian|panasonic|(?=;\s)sony)[_\s-]?([\w-]+)*/i],[p,[l,/_/g," "],[h,g]],[/(nexus\s9)/i],[l,[p,"HTC"],[h,y]],[/(nexus\s6p)/i],[l,[p,"Huawei"],[h,g]],[/(microsoft);\s(lumia[\s\w]+)/i],[p,l,[h,g]],[/[\s\(;](xbox(?:\sone)?)[\s\);]/i],[l,[p,"Microsoft"],[h,m]],[/(kin\.[onetw]{3})/i],[[l,/\./g," "],[p,"Microsoft"],[h,g]],[/\s(milestone|droid(?:[2-4x]|\s(?:bionic|x2|pro|razr))?(:?\s4g)?)[\w\s]+build\//i,/mot[\s-]?(\w+)*/i,/(XT\d{3,4}) build\//i,/(nexus\s6)/i],[l,[p,"Motorola"],[h,g]],[/android.+\s(mz60\d|xoom[\s2]{0,2})\sbuild\//i],[l,[p,"Motorola"],[h,y]],[/hbbtv\/\d+\.\d+\.\d+\s+\([\w\s]*;\s*(\w[^;]*);([^;]*)/i],[[p,S.trim],[l,S.trim],[h,b]],[/hbbtv.+maple;(\d+)/i],[[l,/^/,"SmartTV"],[p,"Samsung"],[h,b]],[/\(dtv[\);].+(aquos)/i],[l,[p,"Sharp"],[h,b]],[/android.+((sch-i[89]0\d|shw-m380s|gt-p\d{4}|gt-n\d+|sgh-t8[56]9|nexus 10))/i,/((SM-T\w+))/i],[[p,"Samsung"],l,[h,y]],[/smart-tv.+(samsung)/i],[p,[h,b],l],[/((s[cgp]h-\w+|gt-\w+|galaxy\snexus|sm-\w[\w\d]+))/i,/(sam[sung]*)[\s-]*(\w+-?[\w-]*)*/i,/sec-((sgh\w+))/i],[[p,"Samsung"],l,[h,g]],[/sie-(\w+)*/i],[l,[p,"Siemens"],[h,g]],[/(maemo|nokia).*(n900|lumia\s\d+)/i,/(nokia)[\s_-]?([\w-]+)*/i],[[p,"Nokia"],l,[h,g]],[/android\s3\.[\s\w;-]{10}(a\d{3})/i],[l,[p,"Acer"],[h,y]],[/android\s3\.[\s\w;-]{10}(lg?)-([06cv9]{3,4})/i],[[p,"LG"],l,[h,y]],[/(lg) netcast\.tv/i],[p,l,[h,b]],[/(nexus\s[45])/i,/lg[e;\s\/-]+(\w+)*/i],[l,[p,"LG"],[h,g]],[/android.+(ideatab[a-z0-9\-\s]+)/i],[l,[p,"Lenovo"],[h,y]],[/linux;.+((jolla));/i],[p,l,[h,g]],[/((pebble))app\/[\d\.]+\s/i],[p,l,[h,w]],[/android.+;\s(glass)\s\d/i],[l,[p,"Google"],[h,w]],[/android.+(\w+)\s+build\/hm\1/i,/android.+(hm[\s\-_]*note?[\s_]*(?:\d\w)?)\s+build/i,/android.+(mi[\s\-_]*(?:one|one[\s_]plus|note lte)?[\s_]*(?:\d\w)?)\s+build/i],[[l,/_/g," "],[p,"Xiaomi"],[h,g]],[/android.+a000(1)\s+build/i],[l,[p,"OnePlus"],[h,g]],[/\s(tablet)[;\/]/i,/\s(mobile)(?:[;\/]|\ssafari)/i],[[h,S.lowerize],p,l]],engine:[[/windows.+\sedge\/([\w\.]+)/i],[d,[c,"EdgeHTML"]],[/(presto)\/([\w\.]+)/i,/(webkit|trident|netfront|netsurf|amaya|lynx|w3m)\/([\w\.]+)/i,/(khtml|tasman|links)[\/\s]\(?([\w\.]+)/i,/(icab)[\/\s]([23]\.[\d\.]+)/i],[c,d],[/rv\:([\w\.]+).*(gecko)/i],[d,c]],os:[[/microsoft\s(windows)\s(vista|xp)/i],[c,d],[/(windows)\snt\s6\.2;\s(arm)/i,/(windows\sphone(?:\sos)*)[\s\/]?([\d\.\s]+\w)*/i,/(windows\smobile|windows)[\s\/]?([ntce\d\.\s]+\w)/i],[c,[d,x.str,T.os.windows.version]],[/(win(?=3|9|n)|win\s9x\s)([nt\d\.]+)/i],[[c,"Windows"],[d,x.str,T.os.windows.version]],[/\((bb)(10);/i],[[c,"BlackBerry"],d],[/(blackberry)\w*\/?([\w\.]+)*/i,/(tizen)[\/\s]([\w\.]+)/i,/(android|webos|palm\sos|qnx|bada|rim\stablet\sos|meego|contiki)[\/\s-]?([\w\.]+)*/i,/linux;.+(sailfish);/i],[c,d],[/(symbian\s?os|symbos|s60(?=;))[\/\s-]?([\w\.]+)*/i],[[c,"Symbian"],d],[/\((series40);/i],[c],[/mozilla.+\(mobile;.+gecko.+firefox/i],[[c,"Firefox OS"],d],[/(nintendo|playstation)\s([wids34portablevu]+)/i,/(mint)[\/\s\(]?(\w+)*/i,/(mageia|vectorlinux)[;\s]/i,/(joli|[kxln]?ubuntu|debian|[open]*suse|gentoo|(?=\s)arch|slackware|fedora|mandriva|centos|pclinuxos|redhat|zenwalk|linpus)[\/\s-]?(?!chrom)([\w\.-]+)*/i,/(hurd|linux)\s?([\w\.]+)*/i,/(gnu)\s?([\w\.]+)*/i],[c,d],[/(cros)\s[\w]+\s([\w\.]+\w)/i],[[c,"Chromium OS"],d],[/(sunos)\s?([\w\.]+\d)*/i],[[c,"Solaris"],d],[/\s([frentopc-]{0,4}bsd|dragonfly)\s?([\w\.]+)*/i],[c,d],[/(haiku)\s(\w+)/i],[c,d],[/(ip[honead]+)(?:.*os\s([\w]+)*\slike\smac|;\sopera)/i],[[c,"iOS"],[d,/_/g,"."]],[/(mac\sos\sx)\s?([\w\s\.]+\w)*/i,/(macintosh|mac(?=_powerpc)\s)/i],[[c,"Mac OS"],[d,/_/g,"."]],[/((?:open)?solaris)[\/\s-]?([\w\.]+)*/i,/(aix)\s((\d)(?=\.|\)|\s)[\w\.]*)*/i,/(plan\s9|minix|beos|os\/2|amigaos|morphos|risc\sos|openvms)/i,/(unix)\s?([\w\.]+)*/i],[c,d]]},C=function(t,n){if(this instanceof C){var i=t||(e&&e.navigator&&e.navigator.userAgent?e.navigator.userAgent:r),s=n?S.extend(N,n):N;return this.getBrowser=function(){var e=x.rgx.apply(this,s.browser);return e.major=S.major(e.version),e},this.getCPU=function(){return x.rgx.apply(this,s.cpu)},this.getDevice=function(){return x.rgx.apply(this,s.device)},this.getEngine=function(){return x.rgx.apply(this,s.engine)},this.getOS=function(){return x.rgx.apply(this,s.os)},this.getResult=function(){return{ua:this.getUA(),browser:this.getBrowser(),engine:this.getEngine(),os:this.getOS(),device:this.getDevice(),cpu:this.getCPU()}},this.getUA=function(){return i},this.setUA=function(e){return i=e,this},this}return(new C(t,n)).getResult()};C.VERSION=n,C.BROWSER={NAME:c,MAJOR:f,VERSION:d},C.CPU={ARCHITECTURE:v},C.DEVICE={MODEL:l,VENDOR:p,TYPE:h,CONSOLE:m,MOBILE:g,SMARTTV:b,TABLET:y,WEARABLE:w,EMBEDDED:E},C.ENGINE={NAME:c,VERSION:d},C.OS={NAME:c,VERSION:d},typeof exports!==o?(typeof module!==o&&module.exports&&(exports=module.exports=C),exports.UAParser=C):typeof define===s&&define.amd?define(function(){return C}):e.UAParser=C;var k=e.jQuery||e.Zepto;if(typeof k!==o){var L=new C;k.ua=L.getResult(),k.ua.get=function(){return L.getUA()},k.ua.set=function(e){L.setUA(e);var t=L.getResult();for(var n in t)k.ua[n]=t[n]}}})(typeof window=="object"?window:this);
/*
  Exponential unified platform
  Copyright 2013 Exponential! Inc. All rights reserved.
  Licensed under the BSD License.
  http://exponential.com/license/
  This plugin will return instance of framebuster class.
 */
(function(W, EU) {
    "use strict";

    /*
     * Please define all private variable here
     */
    var windowContext,
        toString = Object.prototype.toString,
        slice = Array.prototype.slice,
        hasProp = Object.prototype.hasOwnProperty,
        typeOf = function typeOf(type) {
            var regEx = new RegExp('\\[object ' + type + '\\]', 'i');

            return function(variable) {
                return regEx.test(toString.call(variable));
            };
        },
        console = console || {},
        noop = function noop() {},
        consoleMethodList = ['log', 'warn', 'info', 'error', 'trace', 'clear'],
        hasOwnProperty, extend, isString, isArray, isFunction, isObject, isNumber,
        isBoolean, isUndefined, isNull, doesExists, doesNotExists, ajax, ajaxGet, ajaxPost, toArray, assert, each, debounce, deepObjectExtend;

    //populate console with noop methods if method not present from the list already
    consoleMethodList.forEach(function(method) {
        if (!console[method]) {
            console[method] = noop;
        }
    });

    function Utility() {
        this.win = window;
        this.doc = window.document;
        this.windowCtx = window;
    }

    var p = Utility.prototype;


    /**
     * @function
     */
    isString = p.isString = typeOf('String');

    /**
     * @function
     */
    isFunction = p.isFunction = typeOf('Function');

    /**
     * @function
     */
    isObject = p.isObject = typeOf('Object');

    /**
     * @function
     */
    isArray = p.isArray = typeOf('Array');

    /**
     * @function
     */
    isBoolean = p.isBoolean = typeOf('Boolean');

    /**
     * @function
     */
    isNumber = p.isNumber = typeOf('Number');

    /**
     * @function
     */
    isUndefined = p.isUndefined = typeOf('Undefined');

    /**
     * @function
     */
    isNull = p.isNull = typeOf('Null');

    /**
     * @function
     */
    doesExists = p.doesExists = function doesExists(val) {
        return !(isUndefined(val) || isNull(val));
    };

    /**
     * @function
     */
    doesNotExists = p.doesNotExists = function doesNotExists(val) {
        return !doesExists(val);
    };

    /**
     * @function
     */
    hasOwnProperty = p.hasProperty = function hasOwnProperty(obj, prop) {
        return hasProp.call(obj, prop);
    };

    /**
     * Converts Array LIKE objects to Array
     *
     * @param obj {Object}: Array LIKE object
     * @return {Array}: Array
     */
    toArray = p.toArray = function(obj) {
        return slice.call(obj, 0);
    };

    /**
     * Changes first letters of space separated string to capital
     * e.g. utility.toCapital('text to be camel case') //TextToBeCamelCase
     *
     * @param str {String}: to be converted to camel case
     * @return {String}: converted string
     */
    p.toCapital = function toCapital(str) {
        return str.replace(/(?:^\w|[A-Z]|\b\w|\s+)/g, function(match, index) {
            if (+match === 0) return ""; // or if (/\s+/.test(match)) for white spaces
            return match.toUpperCase();
        });
    };

    /**
     * Basic implementation of deprecate
     * TODO:Enhance the deprecator
     *
     * @param msg {String}: Warning message
     * @return {undefined}
     */
    p.deprecate = function deprecate(msg) {
        console.warn(msg);
    };

    /**
     * This method provides a way to access properties of the sub-level using dot separated strings
     *
     * @param obj {Object}: Of which property is to be accessed
     * @param propStr {String}: a hierarchical string to access the property value
     * @return {*} Value of the property hierarchy
     */
    p.getProperty = function getProperty(obj, propStr) {
        if (!/(\(|\))/ig.test(propStr)) {
            propStr = '["' + propStr.replace(/[.]/g, '"]["') + '"]';

            return new Function('o', 'return o' + propStr)(obj); //jshint ignore: line
        } else {
            console.warn('Please provide a valid property accessor');
        }
    };

    /**
     * This method help compose series of functions
     *
     * @return {undefined}
     */
    p.compose = function() {
        var funcs = arguments,
            length = funcs.length;
        return function() {
            var idx = length - 1,
                result = funcs[idx].apply(this, arguments);
            while (idx--) {
                result = funcs[idx].call(this, result);
            }
            return result;
        };
    };

    /**
     * This method helps curry a function
     *
     * @param fn {Function}: Function to be curried
     * @return {undefined}
     */
    p.curry = function(fn) {
        var numargs = fn.length;

        function createRecurser(acc) {
            return function() {
                var args = [].slice.call(arguments);
                return recurse(acc, args);
            };
        }

        function recurse(acc, args) {
            /*jshint validthis: true*/
            var newacc = acc.concat(args);

            if (newacc.length < numargs) {
                return createRecurser(newacc);
            }

            return fn.apply(this, newacc);
        }

        return createRecurser([]);
    };

    /**
     * Uitlity to loop through objects (similar to Array.prototype.forEach)
     *
     * @param obj {Object}: Object to loop through
     * @param callback {Function}: Callback method to be called on every item
     * @return {undefined}
     */
    each = p.each = function(obj, callback) {
        var i;

        assert(isObject(obj), 'each Can only be called on Object');
        assert(isFunction(callback), 'Provide a callback');

        for (i in obj) {
            if (hasOwnProperty(obj, i)) {
                callback(obj[i], i, obj);
            }
        }
    };

    p.setWindowContext = function(W) {
        windowContext = W || windowContext;
    };

    p.getWindowContext = function() {
        return windowContext;
    };

    /**
     * query parameter parser
     *
     * @param paramStr {String}: An optional parameter string
     *                         (If not passed `location.search` will be used by
     *                          default)
     * @return {Object}: A map of parsed query parameters
     */
    p.getQueryParamter = function getQueryParamter(paramStr) {

        paramStr = paramStr || windowContext.location.search;
        paramStr = paramStr.indexOf('?') === 0 ? paramStr.substring(1) :
            paramStr;

        var cache = getQueryParamter.cache || (getQueryParamter.cache = {}),
            paramMap = cache[paramStr],
            paramList = paramStr.split('&');

        if (!paramMap) {
            paramMap = {};
            paramList.forEach(function(val) {
                val = val.split('=');
                paramMap[decodeURIComponent(val[0])] = decodeURIComponent(val[1]);
            });

            getQueryParamter.cache[paramStr] = paramMap;
        }

        return getQueryParamter.cache[paramStr];
    };

    /**
     * Method to assert statements
     *
     * @param test {Function | *}: test to perform to check assertion
     * @param msg {String}: Message if the assertion fails
     * @throws Error
     */
    assert = p.assert = function assert(test, msg) {
        var exception = false;

        if (isFunction(test)) {
            exception = !test();
        } else {
            exception = !test;
        }

        if (exception) {
            throw new Error('Assertion Failed: ' + msg);
        }
    };

    p.getRunTimeAdConfig = function(ad_sec_cfg, tag_options, name) {
        var value = tag_options[name] ? tag_options[name] : ad_sec_cfg.teaser[name];
        return value;
    };

    p.getElement = function(id, win) {
        if (typeof win !== "undefined") {
            return win.document.getElementById(id);
        }

        return windowContext.document.getElementById(id);
    };

    p.isCrossDomain = function() {
        try {
            return window.self !== window.top;
        } catch (e) {
            return true;
        }
    };

    /**
     * Extends the properties of parent object to child object.
     * If property is already present in child and is of type Function
     * adds an _super accessor to access parent's method (base method).
     *
     * @param child {Object}
     * @param parent {Object}
     * @return {Object} Returns an extended object
     */
    extend = p.extend = function(child, parent) {
        var closure = function(p, fn) {
            return function() {
                var tmp = child._super;

                child._super = parent[p];

                var ret = fn.apply(child, arguments);

                child._super = tmp;

                return ret;
            };
        };

        for (var name in parent) {
            child[name] = (hasOwnProperty(child, name) &&
                    isFunction(child[name]) &&
                    isFunction(parent[name])) ?
                closure(name, child[name]) :
                hasOwnProperty(child, name) ?
                child[name] : isArray(parent[name]) ?
                parent[name].concat() :
                isObject(parent[name]) ?
                extend(parent[name], {}) :
                parent[name];
        }

        return child;
    };

    p.deepObjectExtend = deepObjectExtend = function deepObjectExtend (target, source) {
        for (var prop in source) {
            if (source.hasOwnProperty(prop)) {
                if (target[prop] && typeof source[prop] === 'object') {
                    deepObjectExtend(target[prop], source[prop]);
                }
                else {
                    target[prop] = source[prop];
                }
            }
        }
        return target;
    };

    /**
     * This method does inheriting of methods and properties
     *
     * @param child {Object}: Generally this is the prototype object
     * @param parent {Object}: New method object
     * @return {child} Child with inherited methods and properties
     */
    p.inherit = function inherit(child, parent) {
        var closure = function(p, fn) {
            return function() {
                var tmp = this._super;

                this._super = fn;

                var ret = parent[p].apply(this, arguments);

                this._super = tmp;

                return ret;
            };
        };

        for (var name in parent) {
            child[name] = (isFunction(child[name]) &&
                    isFunction(parent[name])) ?
                closure(name, child[name]) :
                parent[name];
        }

        return child;
    };

    /**
     * No operations method
     *
     * @return {undefined}
     */
    p.noop = function() {};

    //TODO: Needs enhancement to handle more complex scenarios
    /**
     * Facade for making ajax calls
     *
     * @param url {String}: Valid url of the resource
     * @param method {String}: type of request to the server
     * @param params {*}: data to send to the server
     * @callback cb: Callback to be called after the resource is loaded
     * @return {undefined}
     */
    ajax = p.ajax = function(url, method, params, cb, avoidScriptParsing, finalCallback) {
        var xhr = new XMLHttpRequest(),
            oldWrite = document.write; //jshint ignore: line

        xhr.open('GET', url, true);

        xhr.onreadystatechange = function() {
            //cover status code ranging from 200 to 399
            //which covers cached response, successful response
            //moved permanently or temporarily etc.
            //400 and beyond is error
            if (xhr.status >= 200 && xhr.status < 400 && xhr.readyState === 4) {
                var div = document.createElement('div'), //stub div to write the response data
                    scripts, scriptLen, loadedCount = 0,
                    i = 0,
                    executeCallback = function executeCallback() {
                        if (loadedCount === scriptLen) {
                            //once done with the script processing call the callback with
                            //response and the xhr object
                            // cb(div.innerHTML, xhr);
                            finalCallback(div.innerHTML);
                            document.write = oldWrite; //jshint ignore: line
                        }
                    };

                // writing the response to the div
                div.innerHTML = xhr.responseText;
                // to avoid parsing of script -- changes by anup
                if (!avoidScriptParsing) {
                    //gather all the script tags that came in response
                    scripts = div.getElementsByTagName('script');
                    scripts = Array.prototype.slice.call(scripts, 0);

                    scriptLen = scripts.length;

                    document.write = function(param) { //jshint ignore: line
                        var div = document.createElement('div');

                        div.innerHTML = param;

                        param = div.childNodes[0];

                        scripts.splice(i, 0, param);
                        scriptLen++;

                    };

                    var done = function() {
                        var script = scripts[i];

                        if (!script) {
                            //done loading all script do nothing
                            return;
                        }

                        i++;

                        //scripts don't execute if appended using innerHTML
                        //hence extract them and append them with a new script tag
                        //for them to get executed and then remove the original one's
                        var sTag = document.createElement('script'),
                            attr = script.attributes,
                            len = attr.length,
                            j;

                        for (j = 0; j < len; j++) {
                            sTag.setAttributeNode(attr[j].cloneNode(true));
                        }

                        if (script.src) {
                            sTag.src = script.src;
                            sTag.onload = function scriptLoadedCheck() {
                                done();
                                ++loadedCount;
                                executeCallback();
                            };

                            sTag.onerror = function scriptLoadError() {
                                throw new Error('Failed to load the script');
                            };

                            document.body.appendChild(sTag);
                        } else {
                            sTag.innerHTML = script.innerHTML;
                            document.body.appendChild(sTag);

                            done();
                            ++loadedCount;
                            // executeCallback();
                        }

                        script.parentNode.removeChild(script);
                    };

                    done();
                }


                cb(div.innerHTML, xhr);
            }
        };

        xhr.send(params);
    };

    /**
     * Makes an Ajax call with method "GET" always
     *
     * @param url {String}: Valid url of the resource
     * @callback cb: Callback to be called after the resource is loaded
     * @return {undefined}
     */
    ajaxGet = p.ajax.get = function(url, cb, avoidScriptParsing, finalCallback, params) {
        this(url, 'GET', params, cb, avoidScriptParsing, finalCallback);
    };

    /**
     * Makes an Ajax call with method "POST" always
     *
     * @param url {String}: Valid url of the resource
     * @param params {*}: Data to send to the server
     * @callback cb: Callback to be called after the resource is loaded
     * @return {undefined}
     */
    ajaxPost = p.ajax.post = function(url, params, cb, avoidScriptParsing, finalCallback) {
        this(url, 'POST', params, cb, avoidScriptParsing, finalCallback);
    };

    /**
     * Debounce the function call
     *
     * @param fn {Function}: Function to be debounced
     * @param wait {Number}: wait before function call (milliseconds)
     * @return {Function}
     */
    debounce = p.debounce = function(fn, wait, context) {
        var timerId;

        return function de() {
            context = context || this;

            var args = arguments,
                cb = function() {
                    timerId = null;
                    fn.apply(context, args);
                };

            window.clearTimeout(timerId);
            timerId = window.setTimeout(cb, wait);
        };
    };

    p.createSameDomainIframeNode = function(iframeID, width, height, callback, tracker) {
        var rnd = (new Date()).getTime() % 20000001 + parseInt(Math.random() * 10000, 10);
        var win = windowContext;
        iframeID += rnd;
        if (!win.document.getElementById(iframeID)) {
            var iframe = document.createElement('iframe');
            iframe.setAttribute("frameBorder", "0");
            iframe.setAttribute("allowtransparency", "true");
            iframe.setAttribute("marginheight", "0");
            iframe.setAttribute("marginwidth", "0");
            iframe.setAttribute("scrolling", "no");
            iframe.setAttribute("width", width);
            iframe.setAttribute("height", height);
            iframe.setAttribute("hspace", "0");
            iframe.setAttribute("vspace", "0");
            iframe.setAttribute("id", iframeID);
            if (width === 0 && height === 0) {
                iframe.setAttribute("style", "position:absolute; top:-15000px; left:-15000px;");
            }
            win.document.body.appendChild(iframe);
        }
        setTimeout((function(val) {
            var frame = windowContext.document.getElementById(iframeID);
            callback(frame, val);
        }(tracker)), 10);
    };

    p.writeContentInIframe = function(iframeNode, content) {
        var win = windowContext;
        if (iframeNode) {
            var idoc = iframeNode.contentWindow;

            idoc.contents = content;

            /*jshint scripturl: true*/
            idoc.location.replace('javascript:window["contents"]');
        }
    };

    p.createElement = function(type, attrs, style) {
        var ele = document.createElement(type),
            attr_name;

        for (attr_name in attrs) {
            ele.setAttribute(attr_name, attrs[attr_name]);
        }
        if (style) {
            ele.setAttribute('style', style);
        }
        return ele;
    };

    p.setStyle = function(ele, attrs) {
        var attr_name;

        for (attr_name in attrs) {
            ele.style[attr_name] = attrs[attr_name];
        }
    };

    p.setAttribute = function(ele, attrs) {
        var attr_name;

        for (attr_name in attrs) {
            ele.setAttribute(attr_name, attrs[attr_name]);
        }
    };

    p.insertChild = function(parent, elementObj, afterElement) {
        if (parent || elementObj) {
            return;
        } else if (typeof(elementObj) === "string" && (typeof(afterElement) === "undefined" || typeof(afterElement) === null)) {
            parent.innerHTML = elementObj;
        } else if (typeof(afterElement) === "undefined" || typeof(afterElement) === null) {
            parent.appendChild(elementObj);
        } else if (typeof(afterElement) !== "undefined" && typeof(afterElement) !== null) {
            parent.insertBefore(elementObj, afterElement);
        }
    };

    p.getBody = function() {
        return this.doc.body || this.doc.documentElement;
    };

    p.override = function(target, source) {
        var key;

        for (key in target) {
            if (source[key] && target.hasOwnProperty(key)) {
                target[key] = source[key];
            }
        }
    };

    p.attachEvent = function(ele, event_name, callback) {
        if (window.addEventListener) {
            ele.addEventListener(event_name, callback, false);
        } else if (window.attachEvent) {
            ele.attachEvent("on" + event_name, callback);
        } else if (window.onLoad) {
            ele[event_name] = callback;
        }
    };

    p.detachEvent = function(ele, event_name, callback) {
        if (window.removeEventListener) {
            ele.removeEventListener(event_name, callback, false);
        } else {
            ele.detachEvent("on" + event_name, callback);
        }
    };

    p.createCustomEvent = function(el, eventType) {
        var customEvent;
        if (el.createEvent) {
            customEvent = el.createEvent('HTMLEvents');
            customEvent.initEvent(eventType, true, true);
        } else if (el.createEventObject) { // IE < 9
            customEvent = el.createEventObject();
            customEvent.eventType = eventType;
        }
        customEvent.eventName = eventType;
        return customEvent;
    };

    p.triggerCustomEvent = function(el, event) {
        if (el.dispatchEvent) {
            //                    alert('dipatchEvent defined');
            el.dispatchEvent(event);
        } else if (el.fireEvent && htmlEvents['on' + event.eventType]) { // IE < 9
            el.fireEvent('on' + event.eventType, event); // can trigger only real event (e.g. 'click')
        } else if (el[event]) {
            el[event]();
        } else if (el['on' + event.eventType]) {
            el['on' + event.eventType]();
        }
    };

    p.constructDefaultPath = function() {
        if (arguments.length) {
            var filePath = arguments[0];
            var media = arguments[1] || {};
            var dir = arguments[2] || "l";

            if ((/^http(s)*:\/\//i.test(filePath))) {
                return filePath;
            }
            if (media.dir && media.dir.indexOf("$") >= 0) {
                media.dir = "";
            }
            if (media.manifestDir && media.manifestDir.indexOf("$RICHMEDIA") >= 0) {
                media.manifestDir = "";
            }
            if (dir == "l") {
                return media.dir + filePath;
            }
            if (dir == "c") {
                return media.manifestDir + filePath;
            }

        }
    };

    p.constructMediaPaths = function(manifest, media, rendering_type) {
        if (media.dir == "$LOC$") {
            media.dir = "";
        }

        if (media.parseDir == "$LOCPARSE$") {
            media.parseDir = "";
        }

        if (media.manifestDir.indexOf("$RICHMEDIA") >= 0) {
            media.manifestDir = "";
        }

        manifest = manifest[rendering_type];

        var length = manifest.length;

        for (var i = 0; i < length; i++) {
            if (!(/^http(s)*:\/\//i.test(manifest[i].src)) && (!manifest[i].dir || manifest[i].dir === 'l')) {
                manifest[i].src = media.dir + manifest[i].src;
            } else if (!(/^http(s)*:\/\//i.test(manifest[i].src)) && manifest[i].dir === 'c') {
                manifest[i].src = media.manifestDir + manifest[i].src;
            }
        }
    };

    p.getCssPropertyValue = function(el, prop) {
        var value;
        var cssStyle;
        if (typeof(el) == 'undefined' || typeof(prop) == 'undefined') {
            return;
        }

        if (el.ownerDocument && el.ownerDocument.defaultView) {
            try {
                //cssStyle = this.doc.defaultView.getComputedStyle(el, "");
                cssStyle = el.ownerDocument.defaultView.getComputedStyle(el, null);
            } catch (e) {}
            if (cssStyle) {
                //value = cssStyle.getPropertyValue( name ) || cssStyle[ name ];
                value = cssStyle.getPropertyValue(prop) || cssStyle[prop];
            }
        } else {
            value = el.currentStyle[prop];
        }

        return value;
    };

    p.isFloatNeeded = function(element) {
        var isFloatNeeded = false;

        while (element && element.parentNode) {
            if (element.tagName.toString().toLowerCase() === "body") {
                break;
            }

            element = element.parentNode;

            var overflow = this.getCssProperty(element, "overflow");

            if (overflow === undefined || overflow === "" || overflow === null || typeof(overflow) === "undefined") {
                overflow = this.getCssProperty(element, "overflowX");

                if (overflow === undefined || overflow === "" || overflow === null || typeof(overflow) === "undefined") {
                    overflow = this.getCssProperty(element, "overflowY");
                }
            }

            if (overflow === "hidden" || overflow === "scroll" || overflow === "auto") {
                isFloatNeeded = true;
                break;
            } else {
                var position = this.getCssProperty(element, "position");

                if (position !== undefined && position !== "" && position !== null && typeof(position) !== "undefined" && position === "relative") {
                    isFloatNeeded = true;
                    break;
                }
            }
        }

        return isFloatNeeded;
    };

    p.getCssProperty = function(el, prop) {
        var value;
        var cssStyle;
        if (typeof(el) == "undefined" || typeof(prop) == "undefined") {
            return;
        }
        if (el.ownerDocument && el.ownerDocument.defaultView) {
            try {
                cssStyle = el.ownerDocument.defaultView.getComputedStyle(el, null);

            } catch (e) {}
            if (cssStyle) {
                value = cssStyle.getPropertyValue(prop) || cssStyle[prop];
            }
        } else {
            value = el.currentStyle[prop];
        }
        return value;
    };

    p.getElementWidth = function(element) {
        return element.clientWidth;
    };

    p.getElementHeight = function(element) {
        return element.clientHeight;
    };

    p.getElementPosition = function(element, win) {
        try {
            var elementPosition = {};
            if (typeof(element.getBoundingClientRect) !== "undefined") {
                elementPosition = element.getBoundingClientRect();
            }
            return elementPosition;
        } catch (e) {}

    };

    //for both Chrome/Mozilla & IE/Opera
    p.getElementOffset = function(element) {
        var elementX = 0;
        var elementY = 0;
        while (element) {
            elementX += element.offsetLeft;
            elementY += element.offsetTop;
            element = element.offsetParent;
        }
        return {
            "x": elementX,
            "y": elementY
        };
    };

    p.getElementCordinate = function(element) {
        var t = {};
        var cordinate = this.getElementOffset(element);
        t.topLeft = {
            "x": cordinate.x,
            "y": cordinate.y
        };
        t.topRight = {
            "x": (cordinate.x + 970),
            "y": cordinate.y
        };
        t.bottomLeft = {
            'x': cordinate.x,
            'y': cordinate.y + 250
        };
        t.bottomRight = {
            'x': cordinate.x + 970,
            'y': cordinate.y + 250
        };
        t.width = 970;
        t.height = 250; // not able to get element height.
        return t;
    };

    p.isInView = function(element) {
        var tfPage = {};
        tfPage.topLeft = this.getViewportTopLeft();
        tfPage.topRight = this.getViewportTopRight();
        tfPage.bottomLeft = this.getViewportBottomLeft();
        var elementCordinate = this.getElementCordinate(element);
        return (tfPage.topLeft.x < elementCordinate.topRight.x &&
            tfPage.topRight.x > elementCordinate.topLeft.x &&
            tfPage.topLeft.y < elementCordinate.bottomLeft.y &&
            tfPage.bottomLeft.y > elementCordinate.topLeft.y);

    };

    p.getViewportTopLeft = function() {
        return {
            "x": this.getScrollX(),
            "y": this.getScrollY()
        };
    };

    p.getViewportTopRight = function() {
        return {
            "x": (this.getScrollX() + this.getViewportwidth()),
            "y": this.getScrollY()
        };
    };

    p.getViewportBottomLeft = function() {
        return {
            "x": this.getScrollX(),
            "y": (this.getScrollY() + this.getViewportHeight())
        };
    };

    p.getViewportBottomRight = function() {
        return {
            "x": (this.getScrollX() + this.getViewportwidth()),
            "y": (this.getScrollY() + this.getViewportHeight())
        };
    };

    p.getScrollX = function() {
        return (windowContext.pageXOffset !== undefined) ?
            windowContext.pageXOffset : (this.doc.documentElement || this.doc.body.parentNode || this.doc.body).scrollLeft;
    };

    p.getScrollY = function() {
        return (windowContext.pageYOffset !== undefined) ? windowContext.pageYOffset : (this.doc.documentElement || this.doc.body.parentNode || this.doc.body).scrollTop;
    };

    p.getViewportHeight = function() {
        return windowContext.innerHeight || windowContext.document.documentElement.clientHeight || windowContext.document.body.clientHeight;
    };

    p.getViewportwidth = function() {
        return windowContext.innerWidth || windowContext.document.documentElement.clientWidth || windowContext.document.body.clientWidth;
    };

    p.getScreenHeight = function() {
        return windowContext.screen.height;
    };

    p.removeProperty = function(element, property) {
        if (element.style.removeProperty) {
            element.style.removeProperty(property);
        } else {
            element.style.removeAttribute(property);
        }
    };

    /**
     * Utility method to move element to center
     * @param element {DOMElement}
     * @return top {String}
     */
    p.moveMainUnitToCenter = function(ele) {
        var top,
            eleHeight,
            vpHeight,
            eleTop;

        if (!ele)
            return;

        this.element = ele;
        this.divTop = this.getCssProperty(ele, 'top');
        if (this.VPMAnimIntervalId) {
            //Clear VPM animation interval
            windowContext.clearInterval(this.VPMAnimIntervalId);
            delete this.VPMAnimIntervalId;
        }

        //store existing location of scroll
        if (this.storeScrollX === undefined)
            this.storeScrollX = this.getScrollX();
        if (this.storeScrollY === undefined)
            this.storeScrollY = this.getScrollY();

        vpHeight = this.getViewportHeight();
        eleHeight = parseInt(this.getCssProperty(ele, 'height').split('px')[0]);
        //    eleTop = ele.getBoundingClientRect().top + this.getScrollY();
        //    top = (vpHeight < eleHeight) ? -eleTop : (vpHeight - eleHeight) / 2 - eleTop;
        top = vpHeight < eleHeight ? 0 : (vpHeight - eleHeight) / 2;
        ele.style.top = top + 'px';
    };

    /**
     * Utility method to disable page scroll
     */
    p.disableScroll = function(ele) {
        //    var containerDiv = this.getElement(id);
        this.divPosition = this.getCssProperty(ele, 'position');
        ele.style.position = 'fixed';
    };

    /**
     * Utility method to enable page scroll
     */
    p.enableScroll = function(ele) {
        //    var containerDiv = this.getElement(id);
        ele.style.position = this.divPosition;
        delete this.divPosition;
    };



    p.bringInView = function(ele) {
        var adEl = ele,
            viewPort = {},
            scrollVerticalBy = 0,
            scrollHorizontalBy = 0;


        viewPort.height = this.getViewportHeight();
        viewPort.width = this.getViewportwidth();
        viewPort.left = this.getScrollX();
        viewPort.top = this.getScrollY();
        if (this.isVerticalScrollbar) {
            viewPort.width -= 17;
        }
        if (this.isHorizontalScrollbar) {
            viewPort.height -= 17;
        }

        var adRect = this.getElementPosition(adEl);

        if (adRect.top < 0) {
            scrollVerticalBy = adRect.top;
        } else if (adRect.bottom > viewPort.height) {
            scrollVerticalBy = (adRect.bottom - viewPort.height);
        }
        if (adRect.left < 0) {
            scrollHorizontalBy = adRect.left;
        } else if (adRect.right > viewPort.width) {
            scrollHorizontalBy = (adRect.right - viewPort.width);
        }
        this.getWindowContext().scrollBy(scrollHorizontalBy, scrollVerticalBy);
    };

    /***
     *
     * @param url
     */
    p.getOrigin = function(url) {
        var match = url.match(/^(http?):\/\/([A-Z\d\.-]{2,})\.([A-Z]{2,})(:\d{2,4})?/i);
        return match[0];
    };

    /**
     * Utility method to reset the scroll and move page to its actual position
     */
    p.isVerticalScrollbar = function() {
        var root = windowContext.document.compatMode == 'BackCompat' ? windowContext.document.body : windowContext.document.documentElement;
        return root.scrollHeight > root.clientHeight;

    };

    p.isHorizontalScrollbar = function() {
        var root = windowContext.document.compatMode == 'BackCompat' ? windowContext.document.body : windowContext.document.documentElement;

        return root.scrollWidth > root.clientWidth;
    };

    p.resetScroll = function() {
        this.element.style.top = this.divTop;
        windowContext.scrollTo(this.storeScrollX, this.storeScrollY);

        delete this.storeScrollX;
        delete this.storeScrollY;
        delete this.element;
        delete this.divTop;
    };
    p.toUpperCase = function(str) {
        return str.toUpperCase();
    };

    p.getBrowserPrefix = function(elem, func) {
        var domPrefixes = 'Webkit Moz O ms Khtml'.split(' ');
        var prefix;
        for (var i = -1, len = domPrefixes.length; ++i < len;) {
            prefix = domPrefixes[i].toLowerCase();

            if (elem[prefix + func]) {
                // Webkit uses EnterFullScreen for video
                return prefix + func;
            }

        }
        return false;
    };
    p.charectorLimit = function(obj) {
        var max = parseInt(obj.max),
            min = parseInt(obj.min),
            current, text, original, hidden, temp;
        current = max;
        text = obj.text;
        temp = text;
        original = obj.container;
        hidden = document.createElement('div');
        hidden.id = "rm-test";
        hidden.style.width = original.offsetWidth;
        if (obj["white-space"]) {
            hidden.style.whiteSpace = obj["white-space"];
        }
        document.body.appendChild(hidden);
        setFortSize(current);
        hidden.innerText = text;
        while (current > min) {
            if (!checkForlimit()) {
                setText();
                break;
            }
            setFortSize(--current);
        }
        if (current <= min) {
            setText();
        }

        function setFortSize(val) {
            hidden.style.fontSize = val + "px";
        }

        function checkForlimit() {
            return original.offsetHeight < hidden.offsetHeight;
        }

        function setText() {
            if (original.offsetHeight < hidden.offsetHeight) {
                while (original.offsetHeight < hidden.offsetHeight) {
                    hidden.innerText = temp = temp.substr(0, temp.length - 1);
                }
                hidden.innerText = temp = temp.substr(0, temp.length - 3);
                hidden.innerText = hidden.innerText + "...";
            }
            original.children[0].innerText = hidden.innerText;
            original.style.fontSize = getFontSize();
        }

        function getFontSize() {
            return hidden.style.fontSize;
        }

        function countLines() {
            var divHeight = hidden.offsetHeight;
            var lineHeight = parseInt(hidden.style.lineHeight);
            var lines = divHeight / lineHeight;
            return lines;
        }
        hidden.parentNode.removeChild(hidden);
    };

    p.ObjToStyleString = function(style) {
        return JSON
            .stringify(style)
            .replace(/"/g, '')
            .replace(/,/g, ';')
            .replace(/^\{(.*)\}$/g, '$1');
    };

    p.moveVPMToCenter = function(ele, VPMSpeedPerMs) {
        if (!ele)
            return;

        var top,
            eleHeight,
            vpHeight,
            eleTop,
            scrollTop,
            temp,
            counter = 0,
            that = this;

        this.storeScrollX = this.getScrollX();
        this.storeScrollY = this.getScrollY();

        vpHeight = this.getViewportHeight();
        if (this.getCssProperty(ele, 'clipBottom')) {
            eleHeight = parseInt(this.getCssProperty(ele, 'clipBottom').split('px')[0]);
        } else {
            eleHeight = parseInt(this.getCssProperty(ele, 'clip').split(' ')[2].split('px')[0]);
        }
        eleTop = ele.getBoundingClientRect().top;

        if (vpHeight < eleHeight) {
            top = eleTop;
        } else {
            top = (vpHeight - eleHeight) / 2 - eleTop;
            top = -top;
        }

        temp = top > 0 ? top : -top;

        this.VPMAnimIntervalId = windowContext.setInterval(function() {
            if (counter <= temp) {
                counter += VPMSpeedPerMs;
                that.windowCtx.scrollBy(0, top >= 0 ? VPMSpeedPerMs : -VPMSpeedPerMs);
            } else {
                clearInterval(that.VPMAnimIntervalId);
            }
        }, 1);

    };

    EU.utility = EU.utility || new Utility();
})(window, (window.EU || (window.EU = {})));

(function(W, EU) {
    "use strict";

    var utility = EU.utility,
        extend = function extend(props) {
            props = props || {};

            var isSuperCalled = /this\._super\(.*\)/g.test((props.constructor || new Function()).toString()); //jshint ignore: line

            var _parent = this,
                Child = function() {
                    var ret,
                        tmp = this._super;
                    if (utility.hasProperty(props, 'constructor') && utility.isFunction(props.constructor)) {
                        if (isSuperCalled) {
                            this._super = _parent;
                        } else {
                            _parent.apply(this, arguments);
                        }

                        ret = props.constructor.apply(this, arguments);

                        this._super = tmp;
                    } else {
                        ret = _parent.apply(this, arguments);
                    }

                    return ret;
                },
                Surrogate = function() {
                    this.constructor = Child;
                };

            Surrogate.prototype = _parent.prototype;

            Child.prototype = new Surrogate();

            utility.inherit(Child.prototype, props);

            Child.extend = extend;

            return Child;
        };

    function CreateClass(props) {
        props = props || {};

        var Class;

        if (utility.hasProperty(props, 'constructor') && utility.isFunction(props.constructor)) {
            Class = props.constructor;
        } else {
            Class = function() {};
        }

        Class.prototype = utility.extend({}, props);

        Class.prototype.constructor = Class;

        Class.extend = extend;

        return Class;
    }

    EU.CreateClass = EU.CreateClass || CreateClass;
})(window, window.EU);

/*
 * Enum.js
 * Copyright (C) 2016 Sushil Chhetri <Sushil.Chhetri@exponential.com>
 */
(function(W, EU) {
    "use strict";

    function getKey(key) {
        return checkKey(key) ? key.match(/(.+)\((.+)\)/) : [key, key, undefined];
    }

    function checkKey(key) {
        return (/\((.+)\)/g).test(key);
    }

    function handleObjectEnum(enums) {
        //jshint validthis: true
        var eName;

        enums.enumList.forEach(function(item, i) {
            var keyList;
            if (utility.isObject(item)) {
                utility.each(item, function(val, key) {
                    keyList = getKey(key);
                    this[keyList[1]] = new EnumProp(key, keyList[1], keyList[2], enums, i, val);
                }.bind(this));
            } else {
                //treat it like string
                keyList = getKey(item);
                this[keyList[1]] = new EnumProp(item, keyList[1], keyList[2], enums, i);
            }
        }.bind(this));

        if (Object.freeze) {
            Object.freeze(this);
        }

        return this;
    }

    var utility = EU.utility;

    /**
     * e.g. 
     *      1. enums = {
                    enumList: ['NAME(Sushil)', 'LASTNAME(Chhetri)'],
                    name: null,
                    constructor: function (name) {
                        this.name = name;
                    }
                 };
     *      2. enums = {
                    enumList: [
                            {'NAME(Sushil)': {test: function () {}},
                            {'LASTNAME(Chhetri)': {test: function () {}}}
              ],
                    name: null,
                    constructor: function (name) {
                        this.name = name;
                    },
                    test: function () {}
                 };
     *      3. enums = {
                    enumList: [
                            {'NAME(Sushil)': {test: function () {}},
                            'LASTNAME(Chhetri)'
              ],
                    name: null,
                    constructor: function (name) {
                        this.name = name;
                    },
                    test: function () {}
                 };
     */
    function Enum(enums) {
        if (this instanceof Enum) {
            throw new Error('Cannot instantiate Enum');
        }

        return new _Enum(enums); //jshint ignore: line
    }

    function _Enum(enums) {
        //jshint validthis: true
        if (utility.isObject(enums)) {
            return handleObjectEnum.call(this, enums);
        }

        throw new Error('Not a valid type');
    }

    _Enum.prototype = {
        constructor: _Enum,

        values: function () {
            var list = [];

            utility.each(this, function (val) {
                list.push(val);
            });

            return list;
        }
    };

    function EnumProp(eName, _name, cParams, props, position, obj) {
        cParams = cParams || '';

        var args = cParams.indexOf(',') ? cParams.split(',') : cParams ? [cParams] : [],
            copy = utility.extend({}, props);

        delete copy.enumList;
        delete copy.constructor;

        if (utility.isObject(obj)) {
            utility.extend(this, obj);
        }

        // utility.extend(this, copy);

        this.getName = function() {
            return _name;
        };

        this.ordinal = function () {
            return position;
        };

        this.constructor = props.constructor || function() {};

        utility.each(copy, function (val, key) {
            if (utility.isFunction(val)) {
                copy[key] = val.bind(this);
            }

            if (!utility.hasProperty(this, key)) {
                this[key] = val;
            }
        }.bind(this));

        this._super = copy;

        this.constructor.apply(this, args);

        if (Object.freeze) {
            Object.freeze(this);
        }

        return this;
    }

    EU.Enum = EU.Enum || Enum;
})(window, window.EU);

/*
    Exponential unified platform
    Copyright 2013 Exponential! Inc. All rights reserved.
    Licensed under the BSD License.
    http://exponential.com/license/
    This plugin will return instance of eventManager class.
 */
(function(W, EU) {
    "use strict";

    var utility = EU.utility,
        handler = function(e) {
        try{
            var eData = utility.isObject(e.data) ? e.data : JSON.parse(e.data),
                eventName = utility.isString(eData) ? "" : eData.eventName;

            if(eData &&  eData.trust !== "erm"){
                // debugger;
                // console.log("untrusted data");
                // console.log(eData.type);
                return;
            }
            if (eventName) {
                // delete the event name from the data object
                delete eData.eventName;

                EU.EventManager.fire(eventName, eData);
            }
        }catch(e) {
           //throw e;
            console.log(e);
        }

        },
        /**
         * @class EventManager is a singleton base class
         */
        BaseEventManager = EU.CreateClass({
            __uidPrefix__: 'EventManager_',
            __uid__: 1,
            __listeners__: null,

            /**
             * Add event listener to the event
             *
             * @param eventName {!String}: Event name
             * @param handler {!Function}: Event handler for the corresponding event
             * @return id{!String}: Id for the event handler, this can be used
             *                      while removing the specific handler for an event
             */
            add: function add(eventName, handler) {
                utility.assert(eventName && utility.isString(eventName), 'expected type a non-empty String for eventName');

                utility.assert(handler && utility.isFunction(handler), 'expected type Function for handler');

                var listener = {
                        type: eventName,
                        handler: handler,
                        namespace: null,
                        id: (this.__uidPrefix__ + this.__uid__++)
                    },
                    eventNameDelimiter = '.',
                    list;

                // for events with namespace the format is type.namespace
                if (eventName.indexOf(eventNameDelimiter) > 0) {
                    list = eventName.split(eventNameDelimiter);
                    listener.type = list[0];
                    listener.namespace = list[1];
                }

                if (!this.__listeners__) {
                    this.__listeners__ = {};
                }

                if (!this.__listeners__[listener.type]) {
                    this.__listeners__[listener.type] = [];
                }

                this.__listeners__[listener.type].push(listener);

                return listener.id;
            },

            /**
             * remove
             *
             * @param eventName {!String}: Name of the event to be removed
             * @param handler {(Function | String)}: Optional parameter which
             *                                      is either the handler reference or ID
             *                                      if not present entire handler list is deleted
             * @return {undefined}
             */
            remove: function remove(eventName, handler) {
                utility.assert(eventName && utility.isString(eventName), 'expected type a non-empty String for eventName');

                // if listeners are not present just return
                if (!this.__listeners__) {
                    return;
                }

                var namespace, list, identifier, listeners, filterCallback,
                    eventNameDelimiter = '.',
                    diffNS;

                // for events with namespace the format is type.namespace
                if (eventName.indexOf(eventNameDelimiter) > 0) {
                    list = eventName.split(eventNameDelimiter);
                    eventName = list[0];
                    namespace = list[1];
                }

                identifier = (utility.isString(handler)) ? handler : null;
                listeners = this.__listeners__[eventName] || [];

                if (!listeners.length) {
                    return;
                }

                if (namespace) {
                    diffNS = function(ns) {
                        return namespace !== ns;
                    };

                    if (!identifier && !handler) {
                        filterCallback = function(item) {
                            return diffNS(item.namespace);
                        };
                    } else if (identifier) {
                        filterCallback = function(item) {
                            return diffNS(item.namespace) || item.id !== identifier;
                        };
                    } else if (handler) {
                        filterCallback = function(item) {
                            return diffNS(item.namespace) || item.handler !== handler;
                        };
                    }

                    this.__listeners__[eventName] = listeners.filter(filterCallback);

                    if (!this.__listeners__[eventName].length) {
                        delete this.__listeners__[eventName];
                    }

                    return;
                }

                if (identifier) {
                    this.__listeners__[eventName] = listeners.filter(function(item) {
                        return item.id !== identifier;
                    });

                    if (!this.__listeners__[eventName].length) {
                        delete this.__listeners__[eventName];
                    }

                } else if (handler) {
                    this.__listeners__[eventName] = listeners.filter(function(item) {
                        return item.handler !== handler;
                    });

                    if (!this.__listeners__[eventName].length) {
                        delete this.__listeners__[eventName];
                    }

                } else if (this.__listeners__[eventName] && this.__listeners__[eventName].length) {
                    delete this.__listeners__[eventName];
                }

                return;
            },

            /**
             * removeByNS
             *
             * @param namespace {!String}: Namespace of the events to be removed
             * @return {undefined}
             */
            removeByNS: function removeByNS(namespace) {
                utility.assert(namespace && utility.isString(namespace), 'expected type a non-empty String for namespace');

                var item,
                    filterCallback = function(item) {
                        return item.namespace !== namespace;
                    };

                for (item in this.__listeners__) {
                    if (hasOwnProperty(this.__listeners__, item)) {
                        this.__listeners__[item] = this.__listeners__[item].filter(filterCallback);

                        if (!this.__listeners__[item].length) {
                            delete this.__listeners__[item];
                        }
                    }
                }
            },

            /**
             * fire
             *
             * @param eventName {string}
             * @param args {array}
             * @return {undefined}
             */
            fire: function fire(eventName, args) {
                utility.assert(eventName && utility.isString(eventName), 'expected type a non-empty String for eventName');

                // if listeners are not present just return
                if (!this.__listeners__) {
                    return;
                }

                // if args is present and is not an array convert it to array
                if (arguments.length > 2 || !utility.isArray(args)) {
                    args = Array.prototype.slice.call(arguments, 1);
                }

                var namespace, list, listeners,
                    eventNameDelimiter = '.';

                // for events with namespace the format is type.namespace
                if (eventName.indexOf(eventNameDelimiter)) {
                    list = eventName.split(eventNameDelimiter);
                    eventName = list[0];
                    namespace = list[1];
                }

                // get the list of listener for the eventName
                listeners = this.__listeners__[eventName] || [];

                if (namespace) {
                    listeners = listeners.filter(function(item) {
                        return item.namespace === namespace;
                    });
                }

                if (listeners && listeners.length) {
                    this.__callAllHandlers__(eventName, listeners, args);
                }
            },

            __callAllHandlers__: function __callAllHandlers__(eventName, listeners, args) {
                var len = listeners.length,
                    listener, i;

                for (i = 0; i < len; i++) {
                    listener = listeners[i];

                    listener.handler.apply(this, args);
                }
            },

            once: function once(eventName, handler) {
                utility.assert(eventName && utility.isString(eventName), 'expected type a non-empty String for eventName');

                utility.assert(handler && utility.isFunction(handler), 'expected type Function for handler');

                var wrapper = function wrapper() {
                        handler.apply(null, arguments);

                        this.remove(eventName, handlerId);
                    }.bind(this),
                    handlerId;

                handlerId = this.add(eventName, wrapper);
            },

            addMessageListener: function(W) {
                W.removeEventListener('message', handler, false);
                W.addEventListener('message', handler, false);
            },

            _data: function(eventName) {
                utility.assert(eventName && utility.isString(eventName), 'expected type a non-empty String for eventName');

                var namespace, list, listeners,
                    eventNameDelimiter = '.';

                // for events with namespace the format is type.namespace
                if (eventName.indexOf(eventNameDelimiter)) {
                    list = eventName.split(eventNameDelimiter);
                    eventName = list[0];
                    namespace = list[1];
                }

                // get the list of listener for the eventName
                listeners = (this.__listeners__ && this.__listeners__[eventName]) || [];

                if (namespace) {
                    listeners = listeners.filter(function(item) {
                        return item.namespace === namespace;
                    });
                }

                return {
                    eventName: eventName,
                    handlers: listeners
                };
            }
        });

    //Expose Event manager in the core
    EU.EventManager = EU.EventManager || new BaseEventManager();

    EU.BaseEventManager = EU.BaseEventManager || BaseEventManager;

})(window, window.EU || (window.EU = {}));

/*
 * pluginManager.js
 * Copyright (C) 2015 Sushil Chhetri <Sushil.Chhetri@exponential.com>
 */
(function(W, EU) {
    "use strict";

    /**
     * @construcotr
     * @desc PluginManager: Handles Plugins dependency resolution and initiation
     *
     * @param name {String}: Name of the plugin
     * @param deps {Array | Null}: A list of dependencies of the plugin if present or else Null
     * @param def {Function}: Definition of the plugin
     * @param version {String}: Version of the plugin
     * @return {Object} Instance of the plugin
     */

    function PluginManager(name, deps, def, version) {
        this.name = name;
        this.deps = deps ? deps.slice(0) : deps;
        this.def = def;
        this.version = version;
    }

    PluginManager.prototype = {
        //make the construtor as Plugin Manager itself
        constructor: PluginManager,

        /**
         * Initializer for Plugins
         *
         * @param sandBox {Object}
         * @return {*} resolved executed definition
         */
        init: function(sandBox, pluginList) {
            if (pluginList) {
                this.pluginList = pluginList;
            }

            return this.resolveDeps(this, sandBox, this.pluginList);
        },

        /**
         * Resolves the dependencies of the demanded plugins
         *
         * @param plug {Object}: Plugin that is demanded
         * @param sandBox {Object}: Sandbox to send to the plugin
         * @return {*} Returns executed definition of plugin
         */
        resolveDeps: function(plug, sandBox, pluginList) {
            var arr = [sandBox], //sandBox is always the first item in the plugin's params list
                deps = plug.deps,
                len = deps ? deps.length : 0;

            if (len) {
                //loop through plug's dependencies
                deps.forEach(function(dep, index) {
                    dep = pluginList[dep];

                    if (dep) {
                        if (dep.deps && dep.deps.length) {
                            //recurse through to resolve all the hierarchical dependencies
                            //and add to the array
                            arr = arr.concat(this.resolveDeps(dep, sandBox, pluginList));
                        } else {
                            //no child dependencies execute definition and add to the array
                            arr.push(dep.def(sandBox));
                        }
                    }
                }.bind(plug));
            }

            //return executed definition with all the subsequent dependency resolved
            return plug.def.apply(null, arr);
        }
    };

    //expose PluginManager to EXPO
    EU.PluginManager = EU.PluginManager || PluginManager;
})(window, (window.EU || (window.EU = {})));

/*
 * core.js
 * Copyright (C) 2015 Sushil Chhetri <Sushil.Chhetri@exponential.com>
 */
(function(W, EU, EUC) {
    "use strict";

    var EMPTY_ARRAY = [],
        utility = EU.utility;

    var CommonEventManager;

    /**
     * A no operation function
     *
     * @return {undefined}
     */
    function noop() {}

    /**
     * makeKey
     *
     * @param name {String}
     * @param version {String}
     * @return {String} Concatinated String with "_" as delimiter
     */
    function makeKey(name, version) {
        return name + '_' + version;
    }

    /**
     * Get plugin info from adUnits list of dependencies
     * this is useful to know the version of plugin adUnit needs
     * when resolving the dependencies
     *
     * @param name {String}: Name of the plugin whose info is needed
     * @param adUnitsConfig {Object}: Adunit's config to get dependencies
     * @return {Object} Plugin information
     */
    function getPlugin(name, adUnitsConfig) {
        return adUnitsConfig.dependencies.filter(function(dep) {
            return dep.name === name;
        })[0];
    }

    EUC = W.EUC = EUC || EU.CreateClass({
        utility: utility,
        /**
         * @function
         */
        makeKey: makeKey,

        /**
         * Initializer to setup instance variables
         *
         * @return {undefined}
         */
        constructor: function Core() {
            this.adunits = {};
            this.plugins = {};
            this.dependenciesList = [];
        },

        /**
         * Initialize the core of the application
         * NOTE: it's just a noop for now
         *
         * @return {undefined}
         */
        initCore: noop,

        /**
         * A callback to be passed on to adUnit callback to initiate rendering of the adUnit
         *
         * @return {undefined}
         */
        rendererCallback: noop,

        /**
         * A callback to be passed after all dependencies have been resolved
         *
         * @return {undefined}
         */
        resolvedCallback: noop,

        /***
         * registers the plugins
         * @param name
         * @param deps
         * @param constuctor
         * @param version
         */
        registerPlugin: function registerPlugin(name, deps, constuctor, version) {
            var PluginManager = EU.PluginManager;

            if (this.utility.isString(constuctor)) {
                version = constuctor;
            }

            if (this.utility.isFunction(deps)) {
                constuctor = deps;
                deps = null;
            }

            if (this.utility.isString(deps)) {
                deps = [deps];
            }

            var pluginKey = makeKey(name, version);

            if (!this.plugins[pluginKey]) {
                this.plugins[pluginKey] = new PluginManager(name, deps, constuctor, version);
            }

            // this.resolvePlugin(name, version);
        },

        /**
         * Checks if a plugin is loaded
         *
         * @param item {Object}: contains the plugin's name and version
         * @return {Boolean}: TRUE if the plugin is already loaded
         */
        checkPluginLoaded: function checkPluginLoaded(item) {
            if (!this.plugins[makeKey(item.name, item.version)]) {
                return false;
            }
            return true;
        },

        /**
         * Resolve the dependencies from one adUnitConfig element
         *
         * @param adUnitconfig {Object}: Contains the adUnit config information
         * @return {undefined}
         */
        resolveAdUnitConfig: function resolveAdUnitConfig(adUnitConfig) {
            var pluginLoaded = false;
            if (!adUnitConfig.pluginsLoaded) {

                pluginLoaded = adUnitConfig.dependencies.every(this.checkPluginLoaded.bind(this));

                if (pluginLoaded) {
                    if (!adUnitConfig.pluginsLoaded) {
                        adUnitConfig.pluginsLoaded = true;

                        this.initiatePlugins(adUnitConfig);
                    }

                }
            }
        },

        /***
         *  resolves plugin dependency
         */
        resolvePlugin: function resolvePlugin() {
            this.utility.each(this.plugins, function(plugin, key) {
                if (!plugin.deps) {
                    return;
                }

                //remap the names to name+verison based on adUnit config
                plugin.deps = plugin.deps.map(function(dep) {
                    var gDeps = this.dependenciesList,
                        depObj;

                    depObj = gDeps.filter(function(gDep) {
                        return gDep.name === dep;
                    })[0];

                    return depObj ? makeKey(depObj.name, depObj.version) : dep;

                }.bind(this));
            }.bind(this));

            Object.keys(this.adunits).forEach(function(ad) {
                var pluginLoaded = true;

                var thisAdUnit = this.adunits[ad];
                this.resolveAdUnitConfig(thisAdUnit);
            }.bind(this));
        },

        /***
         *  initate plugins with the sandbox
         * @param adUnit
         */
        initiatePlugins: function initiatePlugins(adUnit) {
            var sandBox = {},
                renderer, windowContext;

            if (adUnit !== undefined) {
                sandBox.config = adUnit.config;
            }

            windowContext = this.bustFrame(sandBox);
            this.utility.setWindowContext(windowContext);

            //share single instance of baseEventManager
            if (!CommonEventManager) {
                CommonEventManager = EU.EventManager;
            }

            //setup event manager on the sandbox
            sandBox.baseEventManager = CommonEventManager;
            sandBox.utility = this.utility;
            CommonEventManager.addMessageListener(windowContext);

            // TODO remove this condition ASAP
            if (adUnit) {
                renderer = this.require('render', sandBox);
            }

            sandBox.isIFrame = true; //this.utility.isCrossDomain();
            adUnit.renderer = renderer;

            this.resolvedCallback(sandBox, renderer, adUnit);
        },

        bustFrame: function() {
            return W;
        },


        /**
         * Behaves like an entry point to use a plugin
         *
         * @param plugin {String}: Name of the plugin required
         * @param sandBox {Object}: Sandbox of the application
         * @return {*} Executed definition of the plugin
         */
        require: function require() {
            var sandBoxRef;
            return function require(plugin, sandBox) {
                if (sandBox) {
                    sandBoxRef = sandBox;
                }

                plugin = getPlugin(plugin, sandBoxRef.config);

                var key;

                if (plugin) {
                    key = makeKey(plugin.name, plugin.version);
                    return this.plugins[key].init(sandBoxRef, this.plugins);
                } else {
                    throw new ReferenceError('Unknown Dependency');
                }
            };
        }(),

        /***
         * file load sucess callback
         * @param event
         */
        sucessCallback: function sucessCallback(event) {},

        /***
         *  file error callback
         * @param event
         */
        errorCallback: function errorCallback(event) {},

        /***
         *
         * @param adunit_cfg {object}
         */
        constructMediaPath: function constructMediaPath(adunit_cfg) {
            if (adunit_cfg.richmediaCommonDir.indexOf("$RICHMEDIA") >= 0) {
                adunit_cfg.richmediaCommonDir = "";
            }

            var dependency = adunit_cfg.dependencies,
                cnt = dependency.length;

            if (cnt > 0) {
                for (var i = 0; i < cnt; i++) {
                    if (!(/^http(s)*:\/\//i.test(dependency[i].src))) {
                        dependency[i].src = adunit_cfg.richmediaCommonDir + dependency[i].src;
                    }
                }
            }
        },

        /**
         * Updates the existing dependencies list to store the union of new and old
         *
         * @param newList {Array}: List of adunit dependencies
         * @return {Array} Updated union list of dependencies
         */
        updateDependenciesList: function updateDependenciesList(newList) {
            return (this.dependenciesList = this.union(this.dependenciesList, newList));
        },

        /**
         * Gets Union of two arrays
         *
         * @param first {Array}
         * @param second {Array}
         * @return newList {Array}
         */
        union: function union(first, second) {
            var list = first.concat(second),
                newList = [],
                placeHolderMap = {},
                key;

            list.forEach(function(item) {
                key = this.makeKey(item.name, item.version);
                if (!this.utility.hasOwnProperty(placeHolderMap, this.makeKey(item.name, item.version))) {
                    placeHolderMap[key] = item;
                    newList.push(item);
                }
            }.bind(this));

            return newList;
        }
    });
})(window, window.EU, window.EUC);

/*
 * model.js
 * Copyright (C) 2015 Cosmin Simon <cosmin.simon@exponential.com>
 */
(function(W, EU) {
    "use strict";

    var EMPTY_OBJECT = {},
        utility = EU.utility,
        trackerMap = {
            'teaser.trackers.phaze.teaser_loading_loaded': true, // done
            'teaser.trackers.phaze.paused-teaser_vpm_closebtnclick': true,  //done
            'teaser.trackers.phaze.paused-teaser_mainunit_closebtnclick': true, //done
            'teaser.trackers.phaze.paused-collapse-teaser_vpm_closebtnclick': true, //done
            'teaser.trackers.phaze.paused-collapse-teaser_mainunit_closebtnclick': true, //done
            'teaser.trackers.phaze.paused-collapse-teaser_paused-teaser_transitioncomplete': true, // done
            'teaser.trackers.phaze.collapsedteaser_teaser_transitioncomplete': true, // done
            'teaser.trackers.phaze.collapsedteaser_mainunit_closevideo': true, // done
            'teaser.trackers.phaze.teaser_mainunit_closebtnclick': true, // not clear
            'teaser.trackers.phaze.teaser_vpm_closebtnclick': true, // not clear
            'teaser.trackers.phaze.teaser_mainunit_closevideo': true,

            'teaser.trackers.impression.imp': true
        },
        BaseModel = EU.CreateClass({
            constructor: function(data) {
                var attr = this.parse(data);
                this.attr = attr;
                this.init.apply(this, arguments);
            },

            /**
             * Initializer for the model
             *
             * @return {undefined}
             */
            init: utility.noop,

            /**
             * A parser method to transform the data
             *
             * @param data {Object}: data to be parsed
             * @return {Object}: Parsed data
             */
            parse: function(data) {
                return data;
            },

            /**
             * Sets value of the key
             *
             * @param key {String}: name of the property to be set
             * @param value {*}: value to be set
             * @return {undefined}
             */
            set: function set(key, value) {
                if (trackerMap[key]) {
                    this.firePixel(this.getTrackerObj(utility.getProperty(this.adConfig, key)));
                    trackerMap[key] = false;
                }

                this.attr[key] = value;
            },

            /**
             * An api to get the value of the key
             *
             * @param key {String}: name of the property who value is to be accessed
             * @return {*}: Value of the property
             */
            get: function get(key) {
                return this.attr[key];
            },

            getTrackerObj: function(obj) {
                var trackers = obj.trackers,
                    infoList;

                infoList = trackers.map(function(item, i) {
                    var info = {},
                        custom = info.custom = {};

                    info.pixel = item.pixel;
                    info.type = item.type;

                    if (obj.custom1) {
                        custom.custom1 = utility.isArray(obj.custom1) ? obj.custom1[i] : obj.custom1;

                        //if custom1 property has a value of undefined delete it
                        if (!custom.custom1) {
                            delete custom.custom1;
                        }
                    }

                    if (obj.custom2) {
                        custom.custom2 = obj.custom2;
                    }

                    return info;
                });

                return infoList;
            },

            /**
             * Build tracking information and sends it to server for tracking
             *
             * @param trackerObj {Object}: Tracker config map
             * @return {undefined}
             */
            firePixel: function firePixel(trackerList) {
                //if not an array cast it to array
                if (!utility.isArray(trackerList)) {
                    trackerList = [trackerList];
                }


                trackerList.forEach(function(trackerObj, i) {
                    this['pixelType' + utility.toCapital(trackerObj.type)](trackerObj);
                }.bind(this));
            },

            pixelTypeImg: function(obj) {
                var pixelInfo = this.adConfig.pixelInfo,
                    src = /^http|https?:\/\//i.test(obj.pixel) ? obj.pixel : 'http://' +
                    pixelInfo.host +
                    pixelInfo.insPrefixUrl +
                    pixelInfo.campaignName +
                    pixelInfo.insMidUrl +
                    obj.pixel + '&' +
                    this.serialize(obj.custom) +
                    pixelInfo.insSuffixUrl,
                    img;

                img = new Image();
                img.src = src;
            },

            pixelTypeJs: function(obj) {
                var id = 'JSPixelInfo',
                    callback = function(frame) {
                        utility.writeContentInIframe(frame, obj.pixel);
                    };

                utility.createSameDomainIframeNode(id, 0, 0, callback);
            },

            pixelTypeIframe: function(obj) {
                var id = 'IframePixelInfo',
                    callback = function(frame) {
                        frame.src = obj.pixel;
                    };

                utility.createSameDomainIframeNode(id, 0, 0, callback);
            },

            serialize: function(obj) {
                var query = [],
                    i;

                for (i in obj) {
                    if (utility.hasProperty(obj, i)) {
                        query.push(i + '=' + obj[i]);
                    }
                }

                return query.join('&');
            }
        });

    EU.BaseModel = EU.BaseModel || BaseModel;
})(window, window.EU);

(function (W, EU) {
	var utility = EU.utility,
	BaseRender = EU.CreateClass({
		initRender: utility.noop,
		constructor: utility.noop,
//		constructor: function(expo) {
//			this.expo = expo || {};
//		},
        withDiv: function(expo, element, src) {
            utility.ajax.get(src, function(data) {
                var div = document.createElement('div');

                div.innerHTML = data;

                element.appendChild(div);
            });
        },
		bindEventsToWrapper: function(elem) {
            elem.addEventListener('mouseover', this.handleTeaserInteractions.bind(this), false);
            elem.addEventListener('mouseout', this.handleTeaserInteractions.bind(this), false);
            elem.addEventListener('click', this.handleTeaserInteractions.bind(this), false);
        }
	});

	EU.BaseRender = EU.BaseRender || BaseRender;
})(window, window.EU);
/***
 * EXPO_PUB  sigleton object which has the context in the publisher context
 * resolves dependency of the plugins
 * and loads the creative context
 */
(function (W, EUC, EUP, EXPO_PUB) {
    "use strict";

    var EMPTY_ARRAY = [];
    EUP = W.EUP = EUP || EUC.extend({
            windowContext: W,
            renderedCount: 0,

            bustFrame: function (sandBox) {
                // TODO this is only for instream
                if (EXPO_PUB.vpaid) {
                    return W;
                }

                var frameBuster, windowContext = W;

                frameBuster = this.require('framebuster', sandBox);

                if (frameBuster.isInsideSameDomainIframe()) {
                    W.top.EU = W.EU;
                    W.top.EUC = W.EUC;
                    W.top.EUP = W.EUP;
                    W.top.EXPO_PUB = W.EXPO_PUB;
                    windowContext = W.top;
                }

                this.windowContext = windowContext;

                return windowContext;
            },
            /**
             * rendererCallback: Callback to initiate the render of adunit
             *
             * @param sandBox
             * @param renderer
             * @return {undefined}
             */
            rendererCallback: function rendererCallback(sandBox, renderer) {
                var Messages = this.require('messages', sandBox),
                    currentAd;

                this.pubModel.cookConfigData(sandBox.adConfig);
                sandBox.pubModel = this.pubModel;
                this.require('pubEventManager', sandBox).add(Messages.RENDERPROGRESSSTATUS.eventName, function (progress) {
                    if (!progress) {
                        var ads = Object.keys(this.adunits);
                        if (!EXPO_PUB.inProgress) {
                            ++this.renderedCount;
                        }

                        if (this.renderedCount < ads.length && !EXPO_PUB.inProgress) {
                            currentAd = this.adunits[ads[this.renderedCount]];
                            this.initPub(currentAd.config);
                        }
                    }
                }.bind(this));
                renderer.initRender();
            },

            resolvedCallback: function resolvedCallback(sandBox, renderer, adUnit) {

                //sandBox.config = adUnit.config;
                if (adUnit !== undefined) {
                    adUnit.config.init_load_callback(sandBox, this.rendererCallback.bind(this, sandBox, renderer));
                }
            },
            /***
             *  intialize the core of the publisher
             * @param config
             */
            initPub: function (config) {
                this.utility.assert(this.utility.isObject(config), 'expected type for config is Object');

                var Model = EXPO_PUB.Model;
                this.pubModel = new Model(config);

                var adConfigMap = this.adunits[config.name] = {};

                adConfigMap.config = config;
                adConfigMap.pluginsLoaded = false;
                adConfigMap.dependencies = config.dependencies;
                adConfigMap.animating = false;
                adConfigMap.canAnimate = true;
                adConfigMap.setAnimationState = function (value) {
                    adConfigMap.animating = value;
                    EXPO_PUB.notifyAdUnit(value);
                };

                this.notifyAdUnit = function (value) {
                    Object.keys(this.adunits).forEach(function (key) {
                        if (this.adunits[config.name] === this.adunits[key]) {
                            return;
                        }
                        if (value === true) {
                            this.adunits[key].canAnimate = false;
                        } else {
                            this.adunits[key].canAnimate = true;
                        }
                    }.bind(this));
                };

                this.updateDependenciesList(config.dependencies);

                this.resolvePlugin();
            },
            getContext: function () {
                return W;
            }
        });

    EXPO_PUB = W.EXPO_PUB = EXPO_PUB || new EUP();
    W.parent.postMessage('EXPO_PUB', '*');
}(window, window.EUC, window.EUP, window.EXPO_PUB));

(function(W, EU, EXPO_PUB) {
    "use strict";

    var utility = EU.utility,
        Model = EU.BaseModel.extend({
            init: function(pubConfig, adConfig) {
                this.adConfig = {};
                this.cookPubData(pubConfig);
                this._adConfig = adConfig;
            },

            /**
             * JSON information is copied into the adConfig object. Config data is
             * stored directly in adConfig with the same structure. If one element
             * exists, it is not overriden
             *
             * @param JSON {Object}: the config info in JSON format
             * @return {Object}: Object containing the config info, in same
             * structure as the JSON object
             */
            cookConfigData: function(data) {

                for (var k in data) {
                    if (this.adConfig[k] === undefined) {
                        this.adConfig[k] = data[k];
                    }
                }
            },

            /**
             * Data from index.html is stored inside this.adConfig.config
             *
             * @param paramName {paramType}: param description
             * @return {returnType}: return description
             */
            cookPubData: function(data) {
                if (this.adConfig.config === undefined) {
                    this.adConfig.config = {};
                }
                for (var k in data) {
                    this.adConfig.config[k] = data[k];
                }
            },

            /**
             * Configuration object is converted to string
             *
             * @return {String}: JSON formatted string from config
             */
            getConfigInJSON: function() {
                return JSON.stringify(this.adConfig);
            },

            getAdConfig: function() {
                var placeHolder = {};

                placeHolder = utility.extend(placeHolder, this.adConfig.config.teaser.trackers);
                this._adConfig.teaser.trackers = utility.extend(placeHolder, this._adConfig.teaser.trackers);
                this._adConfig.customTrackers = this.adConfig.config.customTrackers;
                this._adConfig.urlConfig = this.adConfig.config.urlConfig;
                this._adConfig.instreamConfig = this.adConfig.config.instreamConfig || {};
                this._adConfig.moat = this.adConfig.config.moat || {};
                this._adConfig.vizu = this.adConfig.config.vizu || {};
                return this._adConfig;
            }
        });

    EXPO_PUB.Model = EXPO_PUB.Model || Model;

})(window, window.EU, window.EXPO_PUB);

/*Copyright (c) 2011-2016 Moat Inc. All Rights Reserved.*/
function initMoatTracking(b,c,g,p){var l=document.createElement("script"),f={events:[],addEvent:function(a){d.sendEvent?(f.events&&(d.sendEvent(f.events),f.events=!1),d.sendEvent(a)):f.events.push(a)}},a=function(a){return function(){var d=-1,h;b&&b.getAdVolume&&(h=b.getAdVolume());"number"==typeof h&&!isNaN(h)&&0<=h&&(d=h);f.addEvent({type:a,adVolume:d});if(-1!==q.indexOf(a)&&b&&b.unsubscribe&&!n){n=!0;for(var c in e)if(e.hasOwnProperty&&e.hasOwnProperty(c))try{b.unsubscribe(e[c],c)}catch(g){}}}},
d={adData:{ids:g,vpaid:b,build:"cc07a80-clean"},dispatchEvent:f.addEvent};g="_moatApi"+Math.floor(1E8*Math.random());var e={AdStarted:a("AdStarted"),AdStopped:a("AdStopped"),AdSkipped:a("AdSkipped"),AdLoaded:a("AdLoaded"),AdLinearChange:a("AdLinearChange"),AdSizeChange:a("AdSizeChange"),AdExpandedChange:a("AdExpandedChange"),AdSkippableStateChange:a("AdSkippableStateChange"),AdDurationChange:a("AdDurationChange"),AdRemainingTimeChange:a("AdRemainingTimeChange"),AdVolumeChange:a("AdVolumeChange"),
AdImpression:a("AdImpression"),AdClickThru:a("AdClickThru"),AdInteraction:a("AdInteraction"),AdVideoStart:a("AdVideoStart"),AdVideoFirstQuartile:a("AdVideoFirstQuartile"),AdVideoMidpoint:a("AdVideoMidpoint"),AdVideoThirdQuartile:a("AdVideoThirdQuartile"),AdVideoComplete:a("AdVideoComplete"),AdUserAcceptInvitation:a("AdUserAcceptInvitation"),AdUserMinimize:a("AdUserMinimize"),AdUserClose:a("AdUserClose"),AdPaused:a("AdPaused"),AdPlaying:a("AdPlaying"),AdError:a("AdError")},n=!1,q=["AdStopped","AdSkipped",
"AdVideoComplete"];(function(){if(b&&b.subscribe)for(var a in e)e.hasOwnProperty&&e.hasOwnProperty(a)&&b.subscribe(e[a],a)})();var k,m;try{k=c.ownerDocument,m=k.defaultView||k.parentWindow}catch(r){k=document,m=window}m[g]=d;l.type="text/javascript";c&&c.insertBefore(l,c.childNodes[0]||null);l.src="https://z.moatads.com/"+p+"/moatvideo.js#"+g;return d};

(function(W, EU, EXPO_PUB) {
    "use strict";

    var render_version = '1.9.0';

    EXPO_PUB.registerPlugin('render', ['messages', 'dimensionHelper', 'framebuster', 'adChoice', 'pubEventManager', 'Peel', 'sniffer', 'InView'],
                         function(expo, Messages,   dimensionHelper,   frameBuster,   adChoice,   PubEventManager,   peel,   sniffer, InView) {
        var baseEventManager = expo.baseEventManager,
            utility = expo.utility,
            VPAID,
            HIGHEST_Z_INDEX = '99999999999999999999999', //TODO: This is absurd need to think of a realistic value
            render,
            adUnitClicked = false,
            parameters = {
                'VIZU_CAMPAIGN': 28621,
                'AD_IDENTIFIER': 'TestAd',
                'PLACEMENT_IDENTIFIER': 'placementIdMacro',
                'SITE_ID':'exponential'
            };
        var Render = EU.BaseRender.extend({

            /**
             * Initializer for the renderer
             *
             * @return {undefined}
             */
            windowContext: W,
            teaserIframeId: "",
            adContainer: "",
            iframe: "",
            adChoiceDivId: "",
            adChoiceDivContainer: "",
            gridDynamicDivStyle: "",
            resetLayoutTime: 8000,
            staticDivStyle: "",
            staticDiv: "",
            vpaidParent: W,
            peelContainer:"",
            browserName : (sniffer.getDeviceInfo()).browserName,
            vizuControlStopped: false,
            vizuControlShown: false,
           
            initRender: function() {
                VPAID = EXPO_PUB.vpaid;
                if (!this.getProgress()) {
                    this.setProgress(true);
                    var adUnitConfig = expo.adConfig,
                        handler, 
                        iframe, 
                        element, 
                        videoHandler, 
                        origin,
                        src = adUnitConfig.media.dir,
                        dim={},
                        initPosition;
                    this.loadCssDynamically();
                    this.gridDynamicDivStyle = "overflow:hidden;position:absolute;width:" + expo.pubModel.adConfig.mediaWidth + ";height:" + expo.pubModel.adConfig.mediaHeight + ";outline:"+ expo.adConfig.style.border+";";
                    this.staticDivStyle = "margin:0 auto;position:relative;visibility:visible;width:" + expo.pubModel.adConfig.mediaWidth + ";height:" + expo.pubModel.adConfig.mediaHeight + ";";
                    this.adChoiceDivId = "tfac_" + parseInt(expo.pubModel.adConfig.mediaWidth) + parseInt(expo.pubModel.adConfig.mediaHeight) + expo.pubModel.adConfig.uniqueId;
                    // TODO the adContainer is the slot provided by the vpaid player
                    this.adContainer = VPAID.slot;
                    this.enableMutedAttribute = true;
                    this.initMoat();
                    if (expo.pubModel.adConfig.config.vizu.enabled) {
                        this.vizuContainer = this.handleVizu(EXPO_PUB.vpaid.attributes.width, EXPO_PUB.vpaid.attributes.height, this);
                    }
                    expo.pubModel.adConfig.initPosition = {
                        left: 0,
                        top: 0,
                        width: VPAID.attributes.width,
                        height: VPAID.attributes.height,
                        clip: 'rect(0px '+ VPAID.attributes.width + 'px ' + VPAID.attributes.height + 'px 0px)'
                    };


                    this.teaserContainer = this.createTeaserContainerDiv(expo.pubModel.adConfig.initPosition);

                    this.expoContainer = this.createGridDiv(expo.pubModel.adConfig.initPosition);
                    this.teaserContainer.appendChild(this.expoContainer);
                    this.closediv = this.createCloseDiv(expo.pubModel.adConfig.initPosition);
                    var scaleObj = this.calculateScale(VPAID.attributes.width,VPAID.attributes.height,970,546)
                    if(this.browserName !== "firefox"){
                        this.wrapperContainerClick = this.createWrapperDiv({
                            clip : 'rect('+scaleObj.newTopPos+'px '+ 970 + 'px ' + 546 + 'px '+scaleObj.newLeftPos+'px)',
                            height : 970,
                            width : 546,
                            left: scaleObj.newLeftPos,
                            top : scaleObj.newTopPos
                        },scaleObj.scale,"clickdiv");
                        this.expoContainer.appendChild(this.wrapperContainerClick);
                        this.bindClickEventToWrapper(this.wrapperContainerClick);

                    }
                    //this.enableMutedAttribute = (parseInt(this.getBrowserVersion(),10) >= 66 && this.getBrowserInfo() === "Chrome") || (this.getBrowserInfo() === "Safari") ?true:false;
                    

                   // this.createViewabilityDivs(this.expoContainer);

                    if (expo.isIFrame) {
                        // TODO change this to a valid condition
                        if (true || !frameBuster.isCrossDomain()) {
                            origin = "*"; //utility.getOrigin(adUnitConfig.media.dir);
                            //EXPO_PUB.pubModel.adConfig.initPosition = dimensionHelper.getInitialPosition(EXPO_PUB.pubModel.adConfig);

                            this.iframe = this.withIframe(this.expoContainer, src);

                            dim.top =  0;//this.expansionData.mainUnitClip.top;
                            dim.left = 0;//this.expansionData.mainUnitClip.left;
                            dim.width = VPAID.attributes.width;//expo.adConfig.fullscreen.width;
                            dim.height = VPAID.attributes.height;

                            this.changeIframeDimension(dim);
                            handler = function(obj) {
                                var onlyStrings = false;
                                obj.trust= "erm";
                                try{window.postMessage({toString:function(){onlyStrings=true;}},"*");}catch(e){}

                                this.iframe.contentWindow.postMessage(onlyStrings===false?JSON.stringify(obj):obj, origin);
                            }.bind(this);
                        }
                    } else {
                        // this.expoContainer  this the container which we can control , hence the name expoController  plese feel free to change the name if required
                        this.withDiv(expo, this.expoContainer, src);

                        handler = function(obj) {
                            baseEventManager.fire(obj.eventName, obj);
                        };
                    }
//                    this.createBackGroundFadedDiv();


                    /* Not sure why was this present */
                    // handler = function(obj) {
                    //     baseEventManager.fire(obj.eventName, obj);
                    // };

                    baseEventManager.add(Messages.SENDCLICKCONFIG.eventName, function(data){
                        this.clickConfig = data.message;
                        this.handleCursor();
                    }.bind(this));

                    this.bindCommunications(expo, element, handler);

                }
            },

            handleVizu: function(w, h) {
                this.initVizuParams();
                var wrapperIframe = document.createElement('iframe');
                wrapperIframe.style.position = 'absolute';
                wrapperIframe.style.width = '300px';
                wrapperIframe.style.height = '300px';
                wrapperIframe.style.margin = '0px';
                wrapperIframe.style.padding = '0px';
                wrapperIframe.style.border = '0px';
                this.vizuTop = Math.floor((h - 300) / 2) + 'px';
                wrapperIframe.style.top = "-600px";
                wrapperIframe.style.left = Math.floor((w - 300) / 2) + 'px';
                wrapperIframe.style.zIndex = '10';
                // this seems to break vizu
                //wrapperIframe.style.display = "none";
                wrapperIframe.style.lineHeight = '0px';
                wrapperIframe.style.overflow = 'hidden';
                wrapperIframe.style.zIndex = '9999';
                wrapperIframe.setAttribute('width', '300px');
                wrapperIframe.setAttribute('height', '300px');
                wrapperIframe.setAttribute('scrolling', 'no');
                wrapperIframe.src = this.getVizuSurveyURL();
                //'https://secure-gl.imrworldwide.com/u/t/00/02/86/22/video_tag.html?cr=123&ce=examplesite&am=3&show=1&timer=1&view=300x300&r=2345';


                var teaserContainer = this.adContainer.children['_expo_pubFiles_'];
                teaserContainer.contentWindow.document.body.appendChild(wrapperIframe);

                teaserContainer.contentWindow.addEventListener('message', this.receiveVizuMsg.bind(this), false)

                return wrapperIframe;
            },

            getVizuSurveyURL: function() {
                
                var VIZU_SURVEY = EXPO_PUB.pubModel.adConfig.config.vizu.src || "//secure-gl.imrworldwide.com/u/t/##path##/video_tag.html?cr=AD_IDENTIFIER&ce=SITE_ID&am=3&show=1&view=300x300&#WILDCARD_PARAMS#r=RANDOM_NUMBER",
                body,URL_PARAMETERS = /\=([A-Z_]+)/g;
                this.setVizuParams();
                
                VIZU_SURVEY = VIZU_SURVEY.replace(URL_PARAMETERS, this.dynamicParameters);
                body = this.replaceQueryParams(VIZU_SURVEY);
                body = this.createSurveyURL(body, EXPO_PUB.pubModel.adConfig.config.vizu.vizuCampaign);
                return body + "&timer=1";
            },

            setVizuParams: function(){
                
                if (EXPO_PUB.pubModel.adConfig.config.vizu['adId']) {
                    parameters['AD_IDENTIFIER'] = EXPO_PUB.pubModel.adConfig.config.vizu['adId'];
                }
                if (EXPO_PUB.pubModel.adConfig.config.vizu['placementId']) {
                    parameters['PLACEMENT_IDENTIFIER'] = EXPO_PUB.pubModel.adConfig.config.vizu['placementId'];
                }
                if (EXPO_PUB.pubModel.adConfig.config.vizu["siteId"]) {
                    parameters["SITE_ID"] = EXPO_PUB.pubModel.adConfig.config.vizu["siteId"];
                }

            },

            createSurveyURL: function(survey, campaignId) {
                var campaignPath;
                while (campaignId.length < 8) {
                    campaignId = '0'+campaignId;
                }

                campaignPath = campaignId.match(/.{1,2}/g).join('/');
                return survey.split('##path##').join(campaignPath);
            },
             dynamicParameters:function() {
                var value;

                if (arguments[1] == 'RANDOM_NUMBER') {
                    value = '' + ((Math.random() * 1e4) >> 0);
                } else {
                    value = parameters[arguments[1]];
                }

                return '=' + value;
            },
            replaceQueryParams:function(str){
                var value,
                    vizuConfig = EXPO_PUB.pubModel.adConfig.config.vizu;
                if (vizuConfig['queryParam'] !== undefined) {
                    if(vizuConfig['queryParam']){
                        value = str.replace("#WILDCARD_PARAMS#",vizuConfig['queryParam'] +"&")
                    }else{
                        value = str.replace("#WILDCARD_PARAMS#",vizuConfig['queryParam'])
                    }

                }else{
                    value= str.replace("#WILDCARD_PARAMS#","")
                }
                return value;

            },
            initVizuParams: function() {
                this.vizuAdReady = false;
                this.vizuAdLoaded = false;
                this.vizuAdStopped = false;
                this.vizuEngaged = false;
            },

            receiveVizuMsg : function (m) {
                if (m.data.toLowerCase().indexOf('"type":"') > -1) {
                   // console.log('vizu message: ', m);
                    if (m.data.toLowerCase().indexOf('adready') > -1) {
                        this.vizuAdReady = true;
                        this.vizumessageInitAd();
                    }
                    if (m.data.toLowerCase().indexOf('adstopped') > -1) {
                        if (!this.vizuControlShown) {
                            baseEventManager.fire(Messages.SENDTOCREATIVE.eventName, {
                                eventName: Messages.FIREVIZUCONTROLPIXEL.eventName,
                                display:0
                            });
                        }
                        // ad stopped before ad started means NO SURVEY
                        this.vizuContainer.style.display = "none";
                        this.vizuAdStopped = true;
                        //debugger;
                        if (!this.vizuControlShown ||
                            (this.vizuControlShown &&  !EXPO_PUB.pubModel.adConfig.config.vizu.dontShowAdAfterControl)) {
                            // no control survey present
                            this.vizuControlStopped = true;
                            this.startAdFromVpaid();
                        } else {
                            VPAID['confirmOnceAdStopped'].apply(this,{});
                        }
                    }
                    if (m.data.toLowerCase().indexOf('adstarted') > -1) {
                        baseEventManager.fire(Messages.SENDTOCREATIVE.eventName, {
                            eventName: Messages.FIREVIZUCONTROLPIXEL.eventName,
                            display:1
                        });
                        VPAID['confirmAdStarted'].apply(this,[]);
                        if (this.showVizuAfterStart) {
                            this.vizuContainer.style.top = this.vizuTop;
                        } else {
                            this.vizuContainer.style.top = '-500px';
                            this.vizuAdStarted = true;
                        }
                        this.vizuContainer.style.opacity = 1;
                        this.vizuControlShown = true;
                    }
                    if (m.data.toLowerCase().indexOf('adloaded') > -1) {
                        // call ad started only if adLoaded is true
                        this.vizuAdLoaded = true;
                        this.vizuMessageStartAd();
                    }
                }

            },
            vizumessageInitAd: function() {
                this.vizuContainer.contentWindow.postMessage('{"type":"initad","uuid":""}', '*');
                this.vizuAdReady = true;

            },

            vizuMessageStartAd: function() {
                this.vizuContainer.style.top = this.vizuTop;
                this.vizuContainer.style.opacity = 0;
                this.vizuContainer.contentWindow.postMessage('{"type":"startad","uuid":""}', '*');
            },

            /*createViewabilityDivs : function(target){
                var point1, point2, point3;
                point1 = document.createElement('div');
                point2 = document.createElement('div');
                point3 = document.createElement('div');
                point1.id = 'expo_point1';
                point2.id = 'expo_point2';
                point3.id = 'expo_point3';
                var style = "position: absolute; width: 10px; height: 10px; opacity: 0; background-color: red; z-index: 10000;";
                point1.style.cssText =
                    point2.style.cssText =
                        point3.style.cssText = style;
                target.appendChild(point1);
                target.appendChild(point2);
                target.appendChild(point3);
            },*/

           /* createViewabilityFrame : function(expo){
                var templateSrc,templateName ;

                if (sniffer.deviceInfo.isSafari) {
                    templateSrc = expo.pubModel.adConfig.assetUrl + "safariViewabilityTemplate.html";
                    this.createIframe(templateSrc,"top");
                    this.createIframe(templateSrc,"center");
                    this.createIframe(templateSrc,"bottom");
                }
            },*/
            /*createIframe: function(src,position) {
                var iframe,adPosition;

                src =  src + "?id=" + position + "&rnd=" + expo.adConfig.id.replace(/\$/g, '');

                iframe = document.createElement("iframe");
                iframe.id = position;
                iframe.setAttribute("frameBorder", "0");
                iframe.setAttribute("marginheight", "0");
                iframe.setAttribute("marginwidth", "0");
                iframe.setAttribute("scrolling", "no");
                iframe.setAttribute("hspace", "0");
                iframe.setAttribute("vspace", "0");
                iframe.setAttribute("src", src);
                iframe.setAttribute("allowfullscreen", "true");
                switch (position)
                {
                    case 'top':
                        adPosition ="top:0px";
                        break;
                    case 'center':
                        adPosition ="top:50%;left:50%";
                        break;
                    case 'bottom':
                        adPosition ="bottom:0px;right:0px;";
                        break;

                }
                iframe.style.cssText = 'position:absolute;width:1px;height:1px;'+adPosition;
                this.teaserContainer.appendChild(iframe);
            },*/
            bindWrapperEvents : function () {

            },

            handleCursor : function () {
                if(this.clickConfig && this.clickConfig.url &&
                    this.clickConfig.url.toLowerCase().indexOf("replacethisurl.com") == -1){
                    this.wrapperContainer ? this.wrapperContainer.style.cursor = "pointer" : "";
                    this.wrapperContainerClick ? this.wrapperContainerClick.style.cursor = "pointer" : "";
                }

            },

            loadCssDynamically : function () {

                var fileName = (expo.pubModel.adConfig && expo.pubModel.adConfig.cssFile)? expo.pubModel.adConfig.cssFile :"";
                if(fileName){
                    var fileref=document.createElement("link");
                    fileref.setAttribute("rel", "stylesheet");
                    fileref.setAttribute("type", "text/css");
                    fileref.setAttribute("href", fileName);
                    document.getElementsByTagName("head")[0].appendChild(fileref)
                }
            },
            calculateScale: function(containerWidth,containerHeight,unitWidth,unitHeight) {
                var baseStats =  {};
                var scaleX = 1, scaleY = 1;
                scaleX = containerWidth / unitWidth;
                scaleY = containerHeight / unitHeight;
                baseStats.width = unitWidth;
                baseStats.height = unitHeight;
                baseStats.scaleX = scaleX;
                baseStats.scaleY = scaleY;
                baseStats.scale = (scaleX > scaleY) ? scaleY : scaleX;
                this.adUnitScale = baseStats.scale;
                var newLeftPos = Math.abs(Math.floor(((baseStats.width * baseStats.scale) - containerWidth)/2));
                var newTopPos = Math.abs(Math.floor(((baseStats.height * baseStats.scale) - containerHeight)/2));

                return {
                    newLeftPos : newLeftPos,
                    newTopPos : newTopPos,
                    scale: baseStats.scale
                };

            },
            initMoat : function () {
                if(!EXPO_PUB.vpaid.e9Present){
                    if(expo.pubModel.adConfig.config.moat.enabled && expo.pubModel.adConfig.isMoatEnabled){
                     var moatAPI = initMoatTracking(EXPO_PUB.eVpaid, EXPO_PUB.vpaid.slot, expo.pubModel.adConfig.config.moat.moatIds, expo.pubModel.adConfig.config.moat.pubId);
                    }   
                }
            },

            changeIframeDimension : function (value) {
                this.iframe.style.left = value.left +"px";
                this.iframe.style.top = value.top + "px";
                this.iframe.style.position = "absolute";
                this.iframe.style.overflow = "hidden";
                var scaleObj = this.calculateScale(VPAID.attributes.width,VPAID.attributes.height,970,546);
                this.iframe.style.webkitTransform = "scale(" + scaleObj.scale + ")";
                this.iframe.style.transform = "scale(" + scaleObj.scale + ")";
                this.iframe.style.left = scaleObj.newLeftPos + "px";
                this.iframe.style.top = scaleObj.newTopPos + "px";
                //this.iframe.style.transform = "scale(0.59707)";
                this.iframe.style.transformOrigin = "left top";
                this.changeCloseDivDimension({top:scaleObj.newTopPos,right:scaleObj.newLeftPos});
            },

            createBackGroundFadedDiv: function() {
                var fadeInDiv = document.createElement('div');
                var fadeInDivStyle = 'display: none; position: fixed; top: 0px; right: 0px; bottom: 0px; left: 0px; transition: opacity 1s linear; opacity: 0.5; z-index: 2147483625; background-color: rgb(0, 0, 0);';

                this.backGroundFadedDivId = "backGroundFadedDiv_" + expo.adConfig.id.replace(/\$/g, '');

                fadeInDiv.id = this.backGroundFadedDivId;

                EXPO_PUB.windowContext.document.body.appendChild(fadeInDiv);

                fadeInDiv.setAttribute('style', fadeInDivStyle);
            },

            createWrapperDiv: function(position,scale,id) {
                var element = document.createElement('div'),
                    adConfig = expo.adConfig,
                    closeWrapper, closeButton, dimension;

                //if (adConfig.mediaHeight === '250px' && adConfig.mediaWidth === '970px') {
                //    closeWrapper = document.createElement('div');
                //    closeButton = document.createElement('div');
                //
                //    closeWrapper.setAttribute('class', 'rm-rectangular-close-wrapper');
                //    closeWrapper.style.cssText = 'position: absolute; right: 0px; width: 57px; height: 20px; padding-top: 10px; display: block; z-index: 10;';
                //
                //    closeButton.setAttribute('class', 'rm-rectangCloseContainer');
                //    closeButton.style.cssText = 'width: 47px; height: 18px; padding-top: 2px; opacity: 0; cursor: pointer; display: block';
                //
                //    closeWrapper.appendChild(closeButton);
                //    closeWrapper.addEventListener('mouseover', this.handleTeaserInteractions.bind(this));
                //    closeWrapper.addEventListener('mouseout', this.handleTeaserInteractions.bind(this));
                //    closeButton.addEventListener('click', this.handleTeaserInteractions.bind(this));
                //
                //    this.teaserContainer.appendChild(closeWrapper);
                //}

                element.id = id? id : "wrapperDiv_" + expo.adConfig.id.replace(/\$/g, '');

                dimension = this.calculateWidthHeightFromClip(position.clip);

                this.setStyleForWrapperDiv(element, dimension,scale, id);


                return element;
            },

            setStyleForWrapperDiv: function(element, dimension,scale,id ) {
                element.style.cssText = '-webkit-transform-origin:left top;transform-origin:left top;position:absolute;z-index:10;width:' +
                    dimension.width + 'px;height:' + dimension.height + 'px; top: ' + dimension.top +
                    'px; left: ' + dimension.left + 'px; opacity: 0;';

                element.style.cssText = element.style.cssText +  "transform:scale("+scale+");";
                element.style.cssText = element.style.cssText +  "-webkit-transform:scale("+scale+");";
                // element.style.cssText = element.style.cssText +  "cursor:pointer;";

                id ? element.classList.add(id):"";


            },

            calculateWidthHeightFromClip: function(clip) {
                var clipVal = clip.match(/([0-9]|\.)+/g),
                    dimension = {
                        left: parseInt(clipVal[3]),
                        right: parseInt(clipVal[1]),
                        top: parseInt(clipVal[0]),
                        bottom: parseInt(clipVal[2]),
                        width: parseInt(clipVal[1]),
                        height: parseInt(clipVal[2])
                    };
                return dimension;
            },

            bindPeelEvents: function () {

                // window.addEventListener('load', function () {
                var tInt = null;
                // if(peel.isVisible()) {
                    // setTimeout(function () {
                        this.bindEventsToPeel();
                        // peel.hide();
                        baseEventManager.fire(Messages.SENDTOCREATIVE.eventName, {
                            eventName: Messages.PEELEVENTSBOUND.eventName
                        });
                        // this.bindEventsToWrapper(this.wrapperContainer);


                    // }.bind(this),0)    ;




            },

            // removeEventsFromPeel : function () {
            //     this.peelContainer.removeEventListener('mouseenter',this.mouseenterPeelEvt);
            //     this.peelContainer.removeEventListener('mouseout',this.mouseoutTeaserEvt);
            //     this.peelEventsRemoved = true;
            //     // this.peelContainer.removeEventListener(this.mouseenterPeelEvt);
            //     // this.peelContainer.removeEventListener(this.mouseenterPeelEvt);
            //
            //
            // },

            bindEventsToPeel: function() {
                this.mouseenterPeelEvt = this.handlePeelInteraction.bind(this,'mouseenter');
                this.mouseoutPeelEvt = this.handlePeelInteraction.bind(this,'mouseout');
                this.clickPeelEvt = this.handlePeelInteraction.bind(this,'click');
                this.mousemovePeelEvt = this.handlePeelInteraction.bind(this,'mousemove');

                this.peelContainer.addEventListener('mouseenter', this.mouseenterPeelEvt, false);
                this.peelContainer.addEventListener('mouseout', this.mouseoutPeelEvt, false);
                this.peelContainer.addEventListener('click', this.clickPeelEvt, false);
                this.peelContainer.addEventListener('mousemove', this.mousemovePeelEvt, false);
                this.peelEventsRemoved = false;


            },



            removeEventsFromWrapper : function () {
                this.wrapperContainer.removeEventListener('mouseenter',this.mouseenterTeaserEvt);
                this.wrapperContainer.removeEventListener('mouseout',this.mouseoutTeaserEvt);
                this.wrapperEventsRemoved = true;
            },

            bindMouseEventsToWrapper: function(elem) {
                this.mouseenterTeaserEvt = this.handleTeaserInteractions.bind(this);
                this.mouseoutTeaserEvt = this.handleTeaserInteractions.bind(this);
                this.mousemoveTeaserEvt = this.handleTeaserInteractions.bind(this);
                // setTimeout(function () {
                    elem.addEventListener('mouseenter', this.mouseenterTeaserEvt, false);
                    elem.addEventListener('mouseout', this.mouseoutTeaserEvt, false);
                    elem.addEventListener('mousemove', this.mousemoveTeaserEvt, false);
                // }.bind(this),200);



            },

            bindClickEventToWrapper: function (elem,fn) {

                this.clickTeaserEvt = fn ? fn.bind(this):this.handleTeaserInteractions.bind(this);
                this.handleCursor();
                elem.addEventListener('click', this.clickTeaserEvt, false);

            },





            createGridDiv: function(position) {
                var element = document.createElement('div');
                element.id = "gridDiv_" + expo.adConfig.id.replace(/\$/g, '');
                element.style.cssText = 'position:absolute;z-index:10;width:' + position.width + 'px;height:' + position.height + 'px;' +
                    'clip:' + position.clip + ';left:-' + position.left + 'px;top:-' + position.top + 'px';
                return element;
            },

            changeCloseDivDimension: function (pos) {
                this.closediv.style.top  = pos.top + 4.5 +"px";
                this.closediv.style.right = pos.right + 4.5 + "px";
                // this.closediv.style.backgroundColor = "#00ff00";
            },
            createCloseDiv: function (pos) {
                var div = document.createElement("rm_wrapper_close");
                div.classList.add("rm-closebutton-wrapper");
                var scaleObj = this.calculateScale(VPAID.attributes.width,VPAID.attributes.height,970,546);
                div.style.cssText = "transform-origin:right top ;transform: scale("+scaleObj.scale+");-webkit-transform:scale("+scaleObj.scale+");top:" + pos.top + 4.5 +"px;right:"+ 4.5 + "px;" ;
                div.addEventListener("click", function (e) {

                    baseEventManager.fire(Messages.SENDTOCREATIVE.eventName, {
                        eventName: Messages.SENDCLOSEINTERACTION.eventName,
                        name: e.name,
                        type: e.type
                    });
                });
                div.addEventListener("mouseenter", function (e) {
                    var evtFromEl = e.fromElement!==undefined ? e.fromElement: e.relatedTarget;
                    var evtToEl = e.toElement!==undefined ?e.toElement : e.target;
                    var fromElement;
                    var toElement;

                    fromElement = (evtFromEl && (evtFromEl.className || evtFromEl.id || evtFromEl.tagName.toLowerCase())) || 'null';
                    toElement = (evtToEl && (evtToEl.className || evtToEl.id || evtToEl.tagName.toLowerCase() ) ) || 'null';

                    baseEventManager.fire(Messages.SENDTOCREATIVE.eventName, {
                        eventName: Messages.SENDCLOSEINTERACTION.eventName,
                        name: e.name,
                        type: e.type,
                        eventContent: {
                            fromElement : fromElement,
                            toElement : toElement
                        }
                    });
                });
                div.addEventListener("mouseout", function (e) {
                    var evtFromEl = e.fromElement!==undefined ? e.fromElement: e.relatedTarget;
                    var evtToEl = e.toElement!==undefined ?e.toElement : e.target;
                    var fromElement;
                    var toElement;

                    fromElement = (evtFromEl && (evtFromEl.className || evtFromEl.id || evtFromEl.tagName.toLowerCase())) || 'null';
                    toElement = (evtToEl && (evtToEl.className || evtToEl.id || evtToEl.tagName.toLowerCase() ) ) || 'null';

                    baseEventManager.fire(Messages.SENDTOCREATIVE.eventName, {
                        eventName: Messages.SENDCLOSEINTERACTION.eventName,
                        name: e.name,
                        type: e.type,
                        eventContent: {
                            fromElement : fromElement,
                            toElement : toElement
                        }
                    });
                });
                this.expoContainer.appendChild(div);
                return div;
            },
            createTeaserContainerDiv: function(position) {
                var element = document.createElement('div'),
                    isFloatNeeded, appendFrame, frameElement;
                //frameElement = this.getFirstFrameLevel();
                element.id = "teaser_" + expo.adConfig.id.replace(/\$/g, '');
                // we are running in an iframe, positioned exactly over the video, so we can use 
                // top:0, left:0 and position absolute.
                element.style.cssText = 'position:absolute;top:0px;left:0px;width:' + VPAID.attributes.width + 'px;height:' + VPAID.attributes.height + 'px;' +
                    'overflow: hidden;margin-left: auto; margin-right: auto;margin:0 auto;outline :'+expo.adConfig.style.border +";";
                if (!this.adContainer) {
                }
                // for now assume adContainer contains only one iframe
                var teaserContainer = this.adContainer.children['_expo_pubFiles_'];//this.adContainer.getElementById('_expo_pubFiles_');
                //     iframeArr = this.adContainer.getElementsByTagName('iframe')
                // if (iframeArr.length) {
                //     teaserContainer = iframeArr[iframeArr.length-1];
                // }
                teaserContainer.contentWindow.document.body.appendChild(element);
                // TODO see about adchoice
                return element;
                this.adChoiceDivContainer = document.getElementById(this.adChoiceDivId);
                if (frameElement && frameBuster.isInsideSameDomainIframe()) {
                    appendFrame = this.appendContainerInIframe()(W, W.parent);
                    appendFrame.frameElement.parentElement.insertBefore(element, appendFrame.frameElement);
                    this.windowContext = utility.getWindowContext();

                    if (this.adChoiceDivContainer) {
                        adChoice.adChoiceMoveOut(element, this.adChoiceDivContainer);
                    }

                    this.hideCurrentFrame(appendFrame);
                }

                isFloatNeeded = utility.isFloatNeeded(frameElement || this.adContainer);
                if (isFloatNeeded) {
                    this.makeAdFloating(this.adContainer, element, this.getFirstFrameLevel());
                } else if (!frameElement) {
                    this.adContainer && this.adContainer.appendChild(element); //jshint ignore: line
                }

                return element;
            },
            getFirstFrameLevel: function() {
                if (W !== utility.getWindowContext()) {
                    while (W.parent !== W.top) {
                        W = W.parent;
                    }
                    return W.frameElement;
                }
            },
            makeAdFloating: function(element, markup, appendFrame) {
                var clone, frameElement = appendFrame,
                    offset = utility.getElementPosition(frameElement || element),
                    that, context;
                this.staticDiv = utility.createElement('div', {
                    id: "static_" + markup.id
                }, this.staticDivStyle);

                if (frameElement) {
                    frameElement.parentNode.insertBefore(this.staticDiv, frameElement); //make j.ad outside

                } else {
                    element.appendChild(this.staticDiv);
                }
                //_teaserContainerElement.setAttribute('style', _staticDivStyle);
                var ad_choice_div = utility.getWindowContext().document.getElementById(this.adChoiceDivId);
                if (ad_choice_div) {
                    var ad_choice_div_clone = ad_choice_div.cloneNode(true);
                    element.removeChild(ad_choice_div);
                    //clone.appendChild(ad_choice_div_clone);
                    markup.appendChild(ad_choice_div_clone);

                }

                context = utility.getWindowContext();
                context.document.body.appendChild(markup);
                markup.setAttribute('style', this.gridDynamicDivStyle + 'top:' + offset.top + 'px;left:' + offset.left + 'px;');
                that = this;
                var resetCloneNode = function() {
                    if (!that.isWindowOnloadFire) {
                        that.isWindowOnloadFire = true;
                        that.resetAdPosition();
                    }
                };
                utility.attachEvent(utility.getWindowContext(), "load", resetCloneNode);
                //utility.attachEvent(utility.getWindowContext(), "scroll", this.resetAdPosition.bind(this));
                this.cloneNodeDelay = this.resetLayoutTime;
                setTimeout(resetCloneNode, this.cloneNodeDelay);
                this.startTime = new Date().getTime();
                this.resetAdPositionTimer = setInterval(
                    function() {
                        if (new Date().getTime() - that.startTime > 300000) {
                            clearInterval(that.resetAdPositionTimer);
                        }
                        that.resetAdPosition();
                    }, 1000);
            },
            resetAdPosition: function() {
                var fixedDiv = utility.getWindowContext().document.getElementById("static_" + this.teaserContainer.id),
                    teaserDiv = utility.getWindowContext().document.getElementById(this.teaserContainer.id),
                    fixedDivPosition = utility.getElementPosition(fixedDiv, utility.getWindowContext()),
                    dynamicDivPosition = utility.getElementPosition(teaserDiv, utility.getWindowContext()),
                    pageOffset, pageLeftOffset;
                if (fixedDivPosition.left != dynamicDivPosition.left || fixedDivPosition.top != dynamicDivPosition.top) {
                    pageOffset = utility.getWindowContext().pageYOffset || utility.getWindowContext().document.body.scrollTop || utility.getWindowContext().document.documentElement.scrollTop;
                    teaserDiv.style.top = fixedDivPosition.top + pageOffset + "px";
                    pageLeftOffset = utility.getWindowContext().pageXOffset || utility.getWindowContext().document.body.scrollLeft || utility.getWindowContext().document.documentElement.scrollLeft;
                    teaserDiv.style.left = fixedDivPosition.left + pageLeftOffset + "px";

                }

            },
            hideCurrentFrame: function(appendFrame) {
                appendFrame.frameElement.style.display = "none";
            },
            setTeaserContainerDivPosition: function(appendFrame, element) {
                var top = appendFrame.frameElement.offsetTop,
                    left = appendFrame.frameElement.offsetLeft;
                element.style.cssText += "left:" + left + "px;top:" + top + "px";
            },
            appendContainerInIframe: function() {
                var current, parent;
                return function lookUpFrame(win, parentWin) {
                    if (win !== parentWin) {
                        current = win;
                        parent = parentWin;
                        return lookUpFrame(parent, parent.parent);
                    } else {
                        if (current) {
                            return current;
                        } else {
                            return win;
                        }
                    }
                };
            },

            handlePeelInteraction: function (data,e) {

                if(e.type === 'click') {
                    if(this.clickConfig && this.clickConfig.openUrl === true) {
                        alert('chk1')
						//window.open(this.clickConfig.url, "_blank");
                    }
                }

                var evtFromEl = e.fromElement!==undefined ? e.fromElement: e.relatedTarget;
                var evtToEl = e.toElement!==undefined ?e.toElement : e.target;
                var fromElement;
                var toElement;

                fromElement = (evtFromEl && (evtFromEl.className || evtFromEl.id || evtFromEl.tagName.toLowerCase())) || 'null';
                toElement = (evtToEl && (evtToEl.className || evtToEl.id || evtToEl.tagName.toLowerCase() ) ) || 'null';


                if(e.type === 'mousemove' ) {
                    if(fromElement == "clickdiv" || toElement == "clickdiv") {
                        this.removeClickDiv();
                        e.preventDefault();
                        e.stopPropagation();
                        e.preventBubble();
                        return;
                    }
                }

                if(e.type === 'mouseenter' ) {
                    if(fromElement == "clickdiv" || toElement == "clickdiv") {
                        this.removeClickDiv();
                        e.preventDefault();
                        e.stopPropagation();
                        e.preventBubble();
                        return;
                    }
                }
                baseEventManager.fire(Messages.SENDTOCREATIVE.eventName, {
                    eventName: Messages.PEELINTERACTION.eventName,
                    name: e.name,
                    type: e.type,
                    eventContent: {
                        fromElement : fromElement,
                        toElement : toElement
                    }
                });
            },


            handleUnmute: function(isActionHappened) {
                baseEventManager.fire(Messages.SENDTOCREATIVE.eventName, {
                    eventName: Messages.SENDUNMUTEINTERACTION.eventName,
                    isUserActionHappened : isActionHappened
                });
            },

            handleTeaserInteractions: function(e) {
                
                if(e.type === 'click') {
                    if(!this.enableMutedAttribute && this.clickConfig.openUrl){
                       if (!this.adUnitClicked) {
                        this.adUnitClicked = false;
                        this.handleUnmute(true);
                        return;
                     } 
                    }
                    
                    if(this.clickConfig.openUrl === true) {
                       //$$
					  // alert('chk2')
					   //window.open(this.clickConfig.url, "_blank");
                    }
                }
				return; //
				
                var targetElem = e.target,
                    targetElemClass = targetElem.getAttribute('class') || '';

                // commented to avoid calling this during VPM 3-stage animation
                //this.getPossibleExpansion();

                //TODO: get rid of this if-else hell
                e.name = "teaser_" + e.type;

                var evtFromEl = e.fromElement!==undefined ? e.fromElement: e.relatedTarget;
                var evtToEl = e.toElement!==undefined ?e.toElement : e.target;
                var fromElement;
                var toElement;

                fromElement = (evtFromEl && (evtFromEl.className || evtFromEl.id || evtFromEl.tagName.toLowerCase())) || 'null';
                toElement = (evtToEl && (evtToEl.className || evtToEl.id || evtToEl.tagName.toLowerCase() ) ) || 'null';

                //todo check for other ad expanded state
                baseEventManager.fire(Messages.SENDTOCREATIVE.eventName, {
                    eventName: Messages.TEASERINTERACTION.eventName,
                    name: e.name,
                    type: e.type,
                    eventContent: {
                        fromElement : fromElement,
                        toElement : toElement
                    }
                });

                var adUnit = EXPO_PUB.adunits[expo.pubModel.attr.name];
                if (adUnit.canAnimate) {
                    var timer = 0;
                    if (e.name === "teaser_mouseout") {
                        adUnit.setAnimationState(false);
                    }
                    baseEventManager.fire(Messages.SENDTOCREATIVE.eventName, {
                        eventName: Messages.CREATIVEINTREACTION.eventName,
                        name: e.name,
                        type: e.type
                    });
                }
            },


            /**
             * Sets up the place holder for adUnit. Gets the element, styles it
             *
             * @param selector {String}: Selector of the element
             * @param adUnitConfig {Object}: Configuration of the adUnit
             * @return element {Node}: Place holder element in which adUnit will be appended
             */
            setUpPlaceHolder: function(selector, adUnitConfig) {
                var element = document.querySelector(selector);

                //use cssText to avoid repaint
                element.style.cssText = "position: relative; width: " + adUnitConfig.mediaWidth +
                    "; height: " + adUnitConfig.mediaHeight;

                element.className = "animate";

                return element;
            },
            withIframe: function(element, src) {
                var referrer = document.referrer || document.location.href;
                var iframe;
                src = src + "&referrer=" + referrer;

                this.teaserIframeId = "appsnack_teaser_iframe_" + expo.pubModel.adConfig.id.replace(/\$/g, '');

                iframe = document.createElement('iframe');
                iframe.setAttribute("frameBorder", "0");
                iframe.setAttribute("allowtransparency", "true");
                iframe.setAttribute("marginheight", "0");
                iframe.setAttribute("marginwidth", "0");
                iframe.setAttribute("scrolling", "no");
                iframe.setAttribute("hspace", "0");
                iframe.setAttribute("vspace", "0");
                iframe.setAttribute("id", this.teaserIframeId);
                iframe.setAttribute("src", src);
                iframe.setAttribute("width", "970px");
                iframe.setAttribute("height", "546px");
                iframe.setAttribute('allowfullscreen', 'true');
                iframe.setAttribute("allow","autoplay");

                element.appendChild(iframe);

                return iframe;
            },

            /**
             * Create a div for adUnit to render
             *
             * @param expo {Object}: Sandbox containing info
             * @param element {Node}: Element in which div is to be appended
             * @param src {String}: Valid source to get the data from
             * @return {undefined}
             */
            withDiv: function(expo, element, src) {
                utility.ajax.get(src, function(data) {
                    var div = document.createElement('div');

                    div.innerHTML = data;

                    element.appendChild(div);
                });
            },

            showHideBackgroundDiv: function(message) {
                var backGroundDiv = this.windowContext.document.getElementById(this.backGroundFadedDivId);
                if (!backGroundDiv) {
                    return;
                }
                if (message.action) {
                    if (backGroundDiv.style.display === "block") {
                        return;
                    }

                    backGroundDiv.style.display = "block";
                    this.expoContainer.style.zIndex = backGroundDiv.style.zIndex + 10;
                    this.bringMainUnitInViewPort();
                    //this.expoContainer.style.clip = "";
                } else {
                    backGroundDiv.style.display = "none";
                    this.expoContainer.style.zIndex = 10;
                    this.resetGridDivPosition();
                    utility.enableScroll(this.expoContainer);
                }

            },
            resetGridDivPosition: function() {
                var gridDiv = this.expoContainer,
                    clip;
                if (utility.getCssPropertyValue(gridDiv, 'position') !== "absolute") {
                    clip = gridDiv.style.clip.match(/([0-9]|\.)+/g);
                    gridDiv.style.position = "absolute";
                    gridDiv.style.left = "-" + parseInt(clip[3]) + "px";
                    gridDiv.style.top = "-" + parseInt(clip[0]) + "px";
                    utility.removeProperty(gridDiv, 'bottom');
                    utility.removeProperty(gridDiv, 'right');
                }
            },
            bringMainUnitInViewPort: function() {
                var gridDiv = this.expoContainer;
                var fixedPos = utility.getElementOffset(gridDiv);
                var clip = gridDiv.style.clip.match(/([0-9]|\.)+/g);
                var computedPosition = utility.getElementPosition(gridDiv);
                var centerDivLeftPosition = parseInt(clip[3]) + parseInt(computedPosition.left);
                var centerDivrightPostion = centerDivLeftPosition + VPAID.attributes.width;
                var centerDivTopPosition = parseInt(clip[0]) + parseInt(computedPosition.top);
                var centerDivBottomPosition = computedPosition.top + VPAID.attributes.height;
                gridDiv.style.left = (fixedPos.x - utility.getScrollX()) + 'px';
                gridDiv.style.top = (fixedPos.y - utility.getScrollY()) + 'px';

                //Horizental left scroll
                if (centerDivLeftPosition < 0) {
                    gridDiv.style.left = -1 * parseInt(clip[3]) + 'px';
                }
                //Horizental right scroll
                if (centerDivrightPostion > utility.getViewportwidth()) {
                    utility.removeProperty(gridDiv, 'left');
                    gridDiv.style.right = -1 * (parseInt(gridDiv.style.width) - (parseInt(clip[1]))) + "px";
                }
                //Vertical Top Scroll
                if (centerDivTopPosition < 0) {

                    gridDiv.style.top = -1 * parseInt(clip[0]) + 'px';
                }
                //Vertical Bottom Scroll
                if (centerDivBottomPosition > utility.getViewportHeight()) {
                    utility.removeProperty(gridDiv, 'top');
                    gridDiv.style.bottom = -1 * (parseInt(gridDiv.style.height) - (parseInt(clip[2]))) + "px";

                }
                utility.disableScroll(gridDiv);

            },

            removeClickDiv : function () {
                if(this.browserName !== "firefox") {
                    this.wrapperContainerClick && this.wrapperContainerClick.removeEventListener('click',this.clickTeaserEvt);
                    this.wrapperContainerClick && this.wrapperContainerClick.parentNode.removeChild(this.wrapperContainerClick);
                    this.wrapperContainerClick = null;
                    this.handleCursor();
                }

            },

            handleAdunitState: function(dataObj) {
                var currentState = dataObj.currentState,
                    previousState = dataObj.previousState;
                var cssText = "";
                if (dataObj.transition === "transition" || dataObj.transition === "transitionFast") {
                    cssText += "overflow : visible;outline:0px";
                    adChoice.adChoiceHide(this.adChoiceDivId);
                    return cssText;
                }
                switch (currentState) {

                    case "COLLAPSED-TEASER":
                        adChoice.adChoiceShow(this.adChoiceDivId);
                        cssText += "height :90px;overflow : hidden;outline:" +expo.adConfig.style.border;
                        break;
                    case "PAUSED-COLLAPSED-TEASER":
                        adChoice.adChoiceShow(this.adChoiceDivId);
                        cssText += "height :90px;overflow : hidden;outline:"+expo.adConfig.style.border;
                        break;
                    case "VPM":
                        if (previousState === "COLLAPSED-TEASER") {
                            cssText += "height :250px;";
                        }
                        cssText += "overflow : visible;outline:0px";
                        adChoice.adChoiceHide(this.adChoiceDivId);
                        break;
                    case "PAUSED-TEASER":
                        adChoice.adChoiceShow(this.adChoiceDivId);
                        cssText += "overflow : hidden;outline:"+expo.adConfig.style.border;
                        break;
                    case "TEASER":
                        adChoice.adChoiceShow(this.adChoiceDivId);
                        cssText += "overflow : hidden;outline:"+expo.adConfig.style.border;
                        break;
                }
                return cssText;
            },


            getPossibleExpansion: function(obj) {
                var data = {},
                    width = expo.adConfig.mediaWidth,
                    height = expo.adConfig.mediaHeight,
                    flag = false;
                if (width === "970px" && height === "250px") {
                    flag = true;
                }
                data.possibleExpansion = {
                    left: 0,
                    top: 0,
                    bottom: 0,
                    right: 0
                };
                data.mainUnitClip = {
                    left: 0,
                    top: 0,
                    bottom: VPAID.attributes.height,
                    right: VPAID.attributes.width
                };

                baseEventManager.fire(Messages.SENDTOCREATIVE.eventName, {
                    eventName: Messages.SETPOSSIBLEEXPANSION.eventName,
                    eventObj: data
                });
            },

            handleDimensionChange: function(w,h,videMode) {
                var dim = {};
                dim.top = 0;
                dim.left = 0;
                dim.width = w;
                dim.height = h;
                VPAID.attributes.width = w;
                VPAID.attributes.height = h;
                var wrapperEl = "wrapperDiv_" + expo.adConfig.id.replace(/\$/g, '');
                this.wrapperContainer = this.wrapperContainer || document.getElementById(wrapperEl);

                // recalculatescale
                var scaleObj = this.calculateScale(VPAID.attributes.width,VPAID.attributes.height,970,546);
                this.changeIframeDimension(dim);


                this.closediv.style.top = scaleObj.newTopPos + 4.5 + "px";
                this.closediv.style.right = scaleObj.newLeftPos+  4.5 + "px";
                this.closediv.style.transform = "scale(" + scaleObj.scale + ")";
                this.closediv.style.webkitTransform = "scale(" + scaleObj.scale + ")";
            },

            removeEvents : function (el,evt,method) {
                el && el.removeEventListener(evt,method);
            },

            /**
             * Binds cross platform communication i.e. between Publisher and Creative
             *
             * @param expo {Object}: Sandbox containing info
             * @param element {Node}: Element containing the adUnit
             * @param handler {Function}: Handler to handle cross platform communication
             * @return {undefined}
             */
            bindCommunications: function(expo, element, handler) {
                var mergedData;
                baseEventManager = expo.baseEventManager;
                baseEventManager.add(Messages.GETINITIALDIMENSIONS.eventName, function(){
                    baseEventManager.fire(Messages.SENDTOCREATIVE.eventName, {
                        eventName: Messages.SETINITIALDIMENSIONS.eventName,
                        width:VPAID.attributes.width,
                        height:VPAID.attributes.height
                    });
                }.bind(this));

                baseEventManager.add(Messages.EVENTSMANAGE.eventName, function(message){
                    var message = message.message;
                    switch (message.target){
                        case 'teaser':
                            this.removeEvents(this.wrapperContainer,message.evt,this[message.evt+"TeaserEvt"]);
                            break;
                        case 'peel':
                            this.removeEvents(this.wrapperContainer,message.evt,this[message.evt+"PeelEvt"]);

                            break;

                    }
                }.bind(this));

                baseEventManager.once(Messages.MAINUNITLOAD.eventName, function(){
                    var obj = this.peelConfig;
                    var scaleObj = this.calculateScale(VPAID.attributes.width,VPAID.attributes.height,970,546);
                    peel.init(obj.eventObj,"#gridDiv_" + expo.adConfig.id.replace(/\$/g, ''));
                    this.peelContainer = document.getElementById('rm_peel_evt_holder');
                    this.peelwrapper = document.getElementById('rm_peel_wrapper_container');
                    this.peelwrapper.style.bottom = scaleObj.newTopPos + "px";
                    // this.peelContainer.style.overflow = "hidden";
                    peel.reset();



                    var scaleObj = this.calculateScale(VPAID.attributes.width,VPAID.attributes.height,970,546)
                    this.wrapperContainer = this.createWrapperDiv({
                        clip : 'rect('+scaleObj.newTopPos+'px '+ 970 + 'px ' + 546 + 'px '+scaleObj.newLeftPos+'px)',
                        height : 970,
                        width : 546,
                        left: scaleObj.newLeftPos,
                        top : scaleObj.newTopPos
                    },scaleObj.scale);
                    this.expoContainer.appendChild(this.wrapperContainer);


                    this.wrapperContainer.style.display = "none";
                    this.wrapperContainer.offsetHeight;
                    this.wrapperContainer.style.display = "";

                    // if(this.browserName !== "firefox") {
                        this.wrapperContainerClick && this.wrapperContainerClick.removeEventListener('click',this.clickTeaserEvt);
                    // }
                    this.bindClickEventToWrapper(this.wrapperContainer);
                    this.removeClickDiv();


                    // setTimeout(function () {
                        this.bindPeelEvents();
                        this.bindMouseEventsToWrapper(this.wrapperContainer);


                    // }.bind(this),500);

                    
                }.bind(this));

                baseEventManager.once(Messages.GETCREATIVECONFIG.eventName, function(obj) {
                    this.setProgress(false);
                    //we don't need unneccessary info to pass on to creative
                    expo.adConfig.eventName = Messages.CREATIVECONFIG.eventName;
                    this.pubModel = new EXPO_PUB.Model(expo.config, expo.adConfig);
                    this.pubModel._adConfig.initialPosition = expo.pubModel.adConfig.initPosition;
                    this.pubModel._adConfig.adPositon = utility.getElementOffset(this.teaserContainer);
                    this.pubModel._adConfig.wizardConfig = expo.wizardConfig;
                    mergedData = this.pubModel.getAdConfig();

                    // mergedData.instream = {
                    //     dimension: {
                    //         width:VPAID.attributes.width,
                    //         height:VPAID.attributes.height
                    //     }
                    // }

                    delete expo.adConfig.initWindow;

                    baseEventManager.fire(Messages.SENDTOCREATIVE.eventName, mergedData);

                    //baseEventManager.fire(Messages.SENDTOCREATIVE.eventName, this.pubModel.getAdConfig());
                }.bind(this));

                baseEventManager.add(Messages.SENDTOCREATIVE.eventName, handler);

                baseEventManager.once(Messages.GETID.eventName, function() {
                    baseEventManager.fire(Messages.SENDID.eventName, {
                        eventName: Messages.CONFIGUREID.eventName,
                        id: expo.adConfig.id,
                        adContainerId: '#gridDiv_' + expo.adConfig.id.replace(/\$/g, '')
                    });
                });

                baseEventManager.once(Messages.SENDID.eventName, handler);

                baseEventManager.add(Messages.MAINUNITBACKGROUNDDIV.eventName, function handleBackGroundDiv(data) {
                    this.showHideBackgroundDiv(data.message);
                }.bind(this));



                baseEventManager.add(Messages.GETPOSSIBLEEXPANSION.eventName, function(obj) {
                    this.getPossibleExpansion(obj);
                }.bind(this));

                baseEventManager.add(Messages.CALLVPAIDMETHOD.eventName, function(o) {
                    var obj = o;
                    var params = [];
                    if (obj.message) {
                        if (obj.message.methodName) {
                            obj = obj.message;
                        }
                    }
                    if(obj && obj.methodName){
                        params = obj.params || [];
                        VPAID[obj.methodName].apply(this,params);
                    }
                }.bind(this));

                baseEventManager.add(Messages.CALLPEELMETHOD.eventName, function(o) {

                    if(peel.element) {
                        var obj = o;
                        var params = [];
                        if (obj.message) {
                            if (obj.message.methodName) {
                                obj = obj.message;
                            }
                        }
                        if(obj && obj.methodName){
                            params = obj.params || [];
                            peel[obj.methodName].apply(peel,params);
                            // if(!peel.isVisible()) {
                            //     // this.removeEventsFromPeel();
                            // }else{
                            //     if(this.peelEventsRemoved == true) {
                            //         // this.bindMEventsToPeel();
                            //     }
                            // }
                        }
                    }

                }.bind(this));

                baseEventManager.add(Messages.UPDATEVPAIDATTRS.eventName, function(obj) {
                    VPAID.attributes[obj.message.attrName] = obj.message.attrValue;
                }.bind(this));

                baseEventManager.add(Messages.PROMISEEVENT.eventName, function(obj) {
                    this.enableMutedAttribute = obj.message.isresolved
                }.bind(this));

                baseEventManager.add(Messages.SETEXPOCONTAINERCLIP.eventName, function(obj) {
                    if (VPAID.attributes.width < utility.getViewportwidth() &&
                        VPAID.attributes.height < utility.getViewportHeight()) {
                        var teaser = this.windowContext.document.getElementById("teaser_" + expo.adConfig.id.replace(/\$/g, ''));
                        utility.bringInView(teaser);
                    }
                    //dimensionHelper.setcontainerClip(this.handleAdunitState(obj.message), obj.message, this.expoContainer, this.teaserContainer, this.staticDiv);
                    this.setStyleForWrapperDiv(this.wrapperContainer, this.calculateWidthHeightFromClip(obj.message.clip));
                }.bind(this));

                baseEventManager.add(Messages.CHANGEWRAPPERDISPLAY.eventName, function(e) {
                    this.wrapperContainer.style.display = e.message.display;
                }.bind(this));

                baseEventManager.add(Messages.CHANGECLOSEDISPLAY.eventName, function(e) {
                    // var closebtn = this.teaserContainer.querySelector('.rm-rectangular-close-wrapper');

                    if (this.closediv) {
                        this.closediv.style.display = e.message.display;
                    }
                }.bind(this));

                baseEventManager.add(Messages.SETHIGHZINDEXTOCONTAINER.eventName, function(e) {
                    this.teaserContainer.style.zIndex = e.message.setHigh ? HIGHEST_Z_INDEX : '';
                }.bind(this));

                baseEventManager.add(Messages.GETPEELCONFIG.eventName, function(obj){
                        this.peelConfig = obj;
                    // this.bindAllEvents();

                }.bind(this));

                baseEventManager.once(Messages.STARTTRACKING.eventName, function(obj) {
                    this.startTracking();
                }.bind(this));

                // These are callbacks from vpaid.js
                EXPO_PUB.vpaid.startAdFromVpaid = this.startAdFromVpaid.bind(this)
                EXPO_PUB.vpaid.resizeAd = this.resizeAdFromVpaid.bind(this);
                EXPO_PUB.vpaid.setAdVolume = this.setAdVolumeFromVpaid.bind(this);
                EXPO_PUB.vpaid.pauseAd= this.setTogglePauseVideoFromVpaid.bind(this);
                EXPO_PUB.vpaid.resumeAd= this.setTogglePauseVideoFromVpaid.bind(this);
            },

            startTracking: function() {
                // if (browserName === 'IE') {
                /*var offset = {
                    left: this.teaserContainer.getBoundingClientRect().left,
                    top: this.teaserContainer.parentElement.offsetTop
                };*/
                //if(expo.pubModel.adConfig.engagementType === "CPV") {
                //this.createViewabilityFrame(expo);
                //}
              
                 InView.subscribeElem(this.teaserContainer, "teaser", [0,1,50], (function (ratio) {
                    /*ratio = ratio * 1;
                    this.lastViewRatio = ratio;*/
                    baseEventManager.fire(Messages.SENDTOCREATIVE.eventName, {
                        eventName: Messages.ISINVIEW.eventName,
                        eventObj: ratio
                    });
                }).bind(this));

                /*InView.track(expo.adConfig.id.replace(/\$/g, ''), this.expoContainer, sniffer, offset, (function (ratio) {

                    ratio = ratio * 1;
                    this.lastViewRatio = ratio;
                    console.log(ratio);
                    baseEventManager.fire(Messages.SENDTOCREATIVE.eventName, {
                        eventName: Messages.ISINVIEW.eventName,
                        eventObj: ratio
                    });
                }).bind(this));*/


                //}
            },

            setTogglePauseVideoFromVpaid :function(bool){
                baseEventManager.fire(Messages.SENDTOCREATIVE.eventName, {
                    eventName: Messages.TOGGLEPAUSEFROMVPAID.eventName,
                    pause : bool
                });
            },

            
            startAdFromVpaid: function() {
                if (EXPO_PUB.pubModel.adConfig.config.vizu.enabled && !this.vizuControlStopped) {
                    if (this.vizuAdStarted) {
                        this.vizuContainer.style.top = this.vizuTop;
                    } else {
                        this.showVizuAfterStart = true;
                        //this.vizuMessageStartAd();
                    }
                } else {
                    baseEventManager.fire(Messages.SENDTOCREATIVE.eventName, {
                        eventName: Messages.STARTFROMVPAID.eventName
                    });
                }
            },

            resizeAdFromVpaid: function(w,h, viewMode) {
                this.expoContainer.style.width = w + 'px';
                this.expoContainer.style.height = h + 'px';
                this.expoContainer.style.clip = 'rect(0px '+ w + 'px ' + h + 'px 0px)';
                this.expoContainer.parentNode.style.width = w + 'px';
                this.expoContainer.parentNode.style.height = h + 'px';
                var scaleObj = this.calculateScale(VPAID.attributes.width,VPAID.attributes.height,970,546);
                if(this.peelwrapper){
                   this.peelwrapper.style.bottom = scaleObj.newTopPos + "px";
                }
                this.handleDimensionChange(w,h,viewMode);
                baseEventManager.fire(Messages.SENDTOCREATIVE.eventName, {
                    eventName: Messages.DIMENSIONCHANGE.eventName,
                    width: w,
                    height: h,
                    viewMode: viewMode
                });
            },

             getBrowserInfo : function () {
                var browserName = "";
                if((navigator.userAgent.indexOf("Opera") || navigator.userAgent.indexOf('OPR')) != -1 )
                {
                    browserName = "Opera";
                }
                else if(navigator.userAgent.indexOf("Chrome") != -1 )
                {
                    browserName = "Chrome";
                }
                else if(navigator.userAgent.indexOf("Safari") != -1)
                {
                    browserName = "Safari";
                }
                else if(navigator.userAgent.indexOf("Firefox") != -1 )
                {
                    browserName = "Firefox";
                }
                else if((navigator.userAgent.indexOf("MSIE") != -1 ) || (!!document.documentMode == true )) //IF IE > 10
                {
                    browserName = "IE" ;
                }
                return browserName ;
            },

             getBrowserVersion: function(){
                var ua=navigator.userAgent,tem,M=ua.match(/(opera|chrome|safari|firefox|msie|trident(?=\/))\/?\s*(\d+)/i) || [];
                if(/trident/i.test(M[1])){
                    tem=/\brv[ :]+(\d+)/g.exec(ua) || [];
                    return {name:'IE',version:(tem[1]||'')};
                }
                if(M[1]==='Chrome'){
                    tem=ua.match(/\bOPR|Edge\/(\d+)/)
                    if(tem!=null)   {return {name:'Opera', version:tem[1]};}
                }
                M=M[2]? [M[1], M[2]]: [navigator.appName, navigator.appVersion, '-?'];
                if((tem=ua.match(/version\/(\d+)/i))!=null) {M.splice(1,1,tem[1]);}
                return M[1];
            },


            setAdVolumeFromVpaid: function(vol) {
                baseEventManager.fire(Messages.SENDTOCREATIVE.eventName, {
                    eventName: Messages.VOLUMEFROMVPAID.eventName,
                    volume: vol
                });
            },

            setProgress: function(isInProgress) {
                EXPO_PUB.inProgress = isInProgress;
                PubEventManager.fire(Messages.RENDERPROGRESSSTATUS.eventName, isInProgress);
            },

            getProgress: function() {
                return !!EXPO_PUB.inProgress;
            }
        });

        return (render = new Render());
    }, render_version);
})(window, window.EU, window.EXPO_PUB);
/*
    Exponential unified platform
    Copyright 2013 Exponential! Inc. All rights reserved.
    Licensed under the BSD License.
    http://exponential.com/license/
    This plugin will return instance of framebuster class.
 */
(function(W, EXPO) {
    "use strict";

    var logger_version = '1.9.0';

    EXPO.registerPlugin('dummyLogger', function(expo) {
        /*
         * Please define all private variable here
         */
        function Logger() {}

        var p = Logger.prototype;

        p.debug = function() {};

        /*
         * return (boolean) true/false cross domain
         */
        p.fatal = p.debug = p.trace = p.warn = p.info = p.error = function() {
            try {
                if (console && console.log && console.log.apply) {
                    Array.prototype.unshift.call(arguments, "Report: ");

                }
            } catch (e) {}
        };

        return new Logger();
    }, logger_version);
})(window, window.EXPO_PUB);

(function(W, EXPO_CREATIVE, EXPO_PUB) {
    "use strict";

    var version = '1.0.0';

    function snifferDef(expo) {
        /*
         * Please define all private variable here
         */
        var user_agent = navigator.userAgent;
        var Sniffer = EU.CreateClass({
            deviceInfo: {},
            constructor: function() {
                this.UAParser = new UAParser();
                this.setParsedUA();
                this.parsedUA;
                this.setDeviceInfo();
            },
            setDeviceInfo: function () {
                var deviceInfo = {};
                var ua = navigator.userAgent;
                deviceInfo.deviceType = this.isTablet(ua) || this.checkIsMobile(ua) || this.isDesktop(ua) || "unknown";
                deviceInfo.osName = this.getOsInfo(ua, deviceInfo.deviceType);
                //It's throwing error on mac
                // deviceInfo.osVersion = this.getOsVersion(ua, deviceInfo.osName);
                deviceInfo.name = this.getDeviceName(ua);
                deviceInfo.browserName = this.getBrowserName(ua);
                deviceInfo.browserVersion = this.getBrowserVersion(ua);
                deviceInfo.isIEEdge =   this.isIEEdge(ua);
                deviceInfo.isChrome =   this.isChrome();
                deviceInfo.isSafari =   this.isSafari();
                deviceInfo.isIE =   this.isIE();
                this.deviceInfo = deviceInfo;


            },
            isTablet: function (ua) {
                var ua = ua.toLowerCase();
                var is_tablet = ua.match(/ipad/) || ua.match(/tablet/) || (ua.match(/linux/) && ua.match(/android/) && !ua.match(/mobile/)) || (ua.match(/kindle/) || ua.match(/kfot/) || ua.match(/silk/)) ? "tablet" : false;
                return is_tablet;
            },
            isDesktop: function (ua) {
                var is_desktop = ua.match(/Windows.(NT|XP|ME|9)/) && !ua.match(/Phone/i) || ua.match(/Win(9|.9|NT)/i) ||
                ua.match(/Macintosh|PowerPC/i) && !ua.match(/Silk/i) ||
                ua.match(/Linux/i) && ua.match(/X11/i) ||
                ua.match(/Solaris|SunOS|BSD/i) ? "desktop" : false;
                return is_desktop;
            },
            getBrowserName: function(ua) {
                //return "ie";
                return (ua.match(/Trident/i) && ua.match(/Trident/i)[0] || ua.match(/Edge/i) && ua.match(/Edge/i)[0]) ? 'ie' : 'unknown';
            },
            isChrome: function() {
                return  this.parsedUA.browser.name.toLowerCase() === "chrome" ? true : false;
            },
            isSafari: function() {
                return  this.parsedUA.browser.name.toLowerCase() === "safari" ? true : false;
            },
            isSafariGreaThanEqualTo11: function() {
                if (this.parsedUA.browser.name.toLowerCase() === "safari" && (parseInt(this.parsedUA.browser.major) >= 11)) {
                    return true;
                }
                return false;
            },
            isIEEdgeGreaThanEqualTo15: function() {
                if (this.parsedUA.browser.name.toLowerCase() === "edge" && (parseInt(this.parsedUA.browser.major) >= 15)) {
                    return true;
                }
                return false;
            },
            isIE: function() {
                return  (this.parsedUA.browser.name.toLowerCase() === "ie" ||this.parsedUA.browser.name.toLowerCase() === "edge") ? true : false;
            },
            isIEEdge: function(ua) {
                return  (ua.match(/Edge/i) && ua.match(/Edge/i)[0]) ? true : false;
            },

            getDeviceInfo: function() {
                return this.deviceInfo;
            },
            checkForSameOrign: function() {
                try {
                    return top.location.href;
                } catch (error) {
                    return false;
                }
            },

            getOsInfo :  function () {
                var OSName="Unknown OS";
                if (navigator.appVersion.indexOf("Win")!=-1) OSName="Windows";
                if (navigator.appVersion.indexOf("Mac")!=-1) OSName="MacOS";
                if (navigator.appVersion.indexOf("X11")!=-1) OSName="UNIX";
                if (navigator.appVersion.indexOf("Linux")!=-1) OSName="Linux";
                return OSName
            },

            getDeviceName: function (user_agent) {
                var useragent = user_agent.toLowerCase();
                var deviceNameMapping = {
                    'safari': 'samsung tablet',
                    'mobile safari': 'samsung mobile',
                    'ipod': 'ipod',
                    'iphone': 'iphone',
                    'ipad': 'ipad',
                    'nexus 7': 'nexus7',
                    'kfot': 'kindle fire',
                    'htc_one_v': 'htc one',
                    'nexus 10': 'nexus10'
                }
                var pattern = /mobile safari|safari|ipad|ipod|iphone|nexus 7|kfot|htc_one_v|nexus 10/;
                return deviceNameMapping[useragent.match(pattern)];
            },
            getBrowserVersion: function(ua){
                 return this.parsedUA.browser.major;
                //ua.match(/MSIE .+?;/)[0].replace('MSIE ','').replace(';','');
            },
            getBrowserInfo : function () {
                var browserName = "";
                if((navigator.userAgent.indexOf("Opera") || navigator.userAgent.indexOf('OPR')) != -1 )
                {
                    browserName = "Opera";
                }
                else if(navigator.userAgent.indexOf("Chrome") != -1 )
                {
                    browserName = "Chrome";
                }
                else if(navigator.userAgent.indexOf("Safari") != -1)
                {
                    browserName = "Safari";
                }
                else if(navigator.userAgent.indexOf("Firefox") != -1 )
                {
                    browserName = "Firefox";
                }
                else if((navigator.userAgent.indexOf("MSIE") != -1 ) || (!!document.documentMode == true )) //IF IE > 10
                {
                    browserName = "IE" ;
                }
                return browserName ;
            },

            isMobile: function() {
                return (this.deviceInfo.isMobile = navigator.userAgent.match(/Android/i) ||
                    navigator.userAgent.match(/BlackBerry/i) ||
                    navigator.userAgent.match(/iPhone|iPad|iPod/i) ||
                    navigator.userAgent.match(/Opera Mini/i) ||
                    navigator.userAgent.match(/IEMobile/i));
            },
            checkIsMobile: function (ua) {
                var ua = ua.toLowerCase();
                var is_mobile = ua.indexOf("mobile") > 0 && ua.indexOf("ipad") == -1 ? "mobile" : false;
                return is_mobile;
            },
            getParsedUA: function() {
                return this.parsedUA;
            },
            setParsedUA : function() {
                this.parsedUA = this.UAParser.getResult();
            }
        });


        return new Sniffer();
    }

    if (EXPO_CREATIVE) {
        EXPO_CREATIVE.registerPlugin('sniffer', snifferDef, version);
    }

    if (EXPO_PUB) {
        EXPO_PUB.registerPlugin('sniffer', snifferDef, version);
    }
})(window, window.EXPO_CREATIVE, window.EXPO_PUB);

(function(W, EU, EXPO_CREATIVE, EXPO_PUB) {
    "use strict";

    var version = "1.0.0";
    
    function InViewDef(sandbox, sniffer) {
        var utility = EU.utility,
          subscribedElem = {},
          W =  utility.getWindowContext(),
          rnd = sandbox.config.id;
          

      function DetectInview(elementToDetect) {
            /**
             * safariViewabilityHandller
             *
             * Method to detect in-view using viewabilityChanged event from safariViewability.html Iframe
             *
             * 
             *
             * @param callback
             * @returns {*}
             * @constructor
                     300 
                      _______________
                     |f1             |  
                     |               | 250
                     |     f2        |     
                     |_____________f3|  
                     
                     iframe position box model
                     f1 (0,0) 
                     f2 (125,125) 
                     f3 (250,250)
                    
             */
            var  SafariViewabilityHandller = function(inViewPercentages, callback){

              var percentage = 0,
                  lastVisiblePct = null,
                  setTimeoutID = 0,
                  initialLoad = false,
                  iframes = {
                      top:{inview:true},
                      center:{inview:true},
                      bottom:{inview:true}
                  },
                  _this = this,

                createViewabilityFrame = function(targetContainer){
                    var templateSrc,templateName;
                    templateSrc = (sandbox.config.assetUrl || "") + "safariViewabilityTemplate.html";
                    createIframe(targetContainer, templateSrc,"top");
                    createIframe(targetContainer, templateSrc,"center");
                    createIframe(targetContainer, templateSrc,"bottom");
                                  
                },

                createIframe = function(targetContainer, src,position) {
                  var iframe,adPosition;
                  src =  src + "?id=" + position + "&rnd=" + rnd;
                  iframe = document.createElement("iframe");
                  iframe.id = position;
                  iframe.setAttribute("frameBorder", "0");
                  iframe.setAttribute("marginheight", "0");
                  iframe.setAttribute("marginwidth", "0");
                  iframe.setAttribute("scrolling", "no");
                  iframe.setAttribute("hspace", "0");
                  iframe.setAttribute("vspace", "0");
                  iframe.setAttribute("src", src);
                  iframe.setAttribute("allowfullscreen", "true");
                  switch (position){
                      case 'top':
                          adPosition ="top:0px";
                          break;
                      case 'center':
                          adPosition ="top:50%;left:50%";
                          break;
                      case 'bottom':
                          adPosition ="bottom:0px;right:0px;";
                          break;

                  }

                  iframe.style.cssText = 'position:absolute;width:1px;height:1px;'+adPosition;
                  targetContainer.appendChild(iframe);

                },

                viewabilityChangeListener = function(e){
                  var data  = e.data;
                  // this is for multiple adunit
                  if(rnd !== data.rnd){
                          return;
                  }

                  if(data.eventName !== 'viewabilityChanged'){
                      return;
                  }

                  iframes[data.id].inview = data.inview;                    
                
                  if( ! iframes['top'].inview && ! iframes['bottom'].inview && ! iframes['center'].inview){
                      percentage = 0;
                  }
                  // either top or bottom is visible but center not visible
                  if((iframes['top'].inview ||  iframes['bottom'].inview) && ! iframes['center'].inview){
                      percentage = 1;
                  }
                  // either "top and center" or "bottom and center"  is visible 
                  if(    (iframes['top'].inview && iframes['center'].inview) 
                      || (iframes['bottom'].inview && iframes['center'].inview)){
                      percentage = 50;
                  }
                  // top bottom and cnetr is visbile
                  if(iframes['top'].inview && iframes['center'].inview && iframes['bottom'].inview){
                      percentage = 100;
                  }
                   // this is to ignore mutiple and wrong value in the initial load.

                  if(percentage !== lastVisiblePct){
                      if(!initialLoad){
                          clearTimeout(setTimeoutID);
                          setTimeoutID = setTimeout(function(){
                            lastVisiblePct = percentage;
                            initialLoad = true;
                            shouldFireCallback(inViewPercentages, percentage) && callback.call(_this, percentage);
                          }.bind(this),1000);
                      }
                      else {
                        lastVisiblePct = percentage;
                        shouldFireCallback(inViewPercentages, percentage) && callback.call(_this, percentage);
                      }  
                  } 
                };

              
              createViewabilityFrame(elementToDetect);
              
             
              W.addEventListener("message", viewabilityChangeListener, false);
        
              // event listener on brower tab switch
              W.document.addEventListener("visibilitychange",handleTabChange ,false); 

              function handleTabChange(){
                  if(document.hidden) {
                    callback.call(this, 0, true);
                  } else {
                    callback.call(this, percentage, true);
                  }                     
              }

              return {
                stopTracking: function(){
                  W.removeEventListener("message", viewabilityChangeListener, false);
                },
                stopHandlingVisibilityChange : function(){
                  W.document.removeEventListener("visibilitychange", handleTabChange, false);
                }

              }
                
            },



            /**
             * IO
             *
             * Method to detect in-view using Intersection Observer
             *
             * Available since Chrome-52
             *
             * @param callback
             * @returns {*}
             * @constructor
             */

            IO = function(inViewPercentages, callback){

              var threshold = utility.isArray(inViewPercentages) ? inViewPercentages.map(function(percent){return percent/100 }) : [(inViewPercentages/100)],
                visibleStatus = 0,
                ioOptions = {
                  rootMargin: '0px',
                  threshold:threshold,
                },
                observer = null;

              if(!('IntersectionObserver' in window)){
                console.log("Intersection observer not supported");
                return callback(false);
              } 

              observer = new IntersectionObserver(function(entries){
                
                entries.forEach(function(entry) {
                  visibleStatus = (entry.intersectionRatio*100);
                  callback.call(this, visibleStatus);
                });

              }, ioOptions);

              observer.observe(elementToDetect);
                
              W.document.addEventListener("visibilitychange", handleTabChange,false); 

              function handleTabChange(){
                  if(document.hidden) {
                    callback.call(this, 0, true);
                  } else {
                    callback.call(this, visibleStatus, true);
                  }                     
              }

                return {
                    stopTracking: function(){
                      observer.unobserve(elementToDetect);
                    },
                    stopHandlingVisibilityChange : function(){
                      W.document.removeEventListener("visibilitychange", handleTabChange, false);
                    }
                }
            },
            

            /**
             * EFP (Element From Point)
             * 
             * method is used to detect inview for IE browsers
             * 
             */
            EFP = function (inViewPercentages, callback){

              var lastVisiblePct = null,
                  targetContainer = null,
                  browserTabInview = true,
                  point1 = null,
                  point2 = null,
                  point3 = null,
                  config = {
                    offset: 10,
                    dispatched: null
                  },
                  setViewabilityPointsConfig = function(){
                      if(!isCrossDomain()){
                        createViewabilityDiv(elementToDetect);
                        config.width = parseInt(elementToDetect.style.width,10);
                        config.height = parseInt(elementToDetect.style.height,10);
                        point1 = document.getElementById('expo_point1'+rnd);
                        point2 = document.getElementById('expo_point2'+rnd);
                        point3 = document.getElementById('expo_point3'+rnd); 
                      }
                      else{
                        config.width = W.innerWidth;
                        config.height = W.innerHeight;
                      }
                  },

                  createViewabilityDiv  = function(targetContainer){
                    point1 = document.createElement('div');
                    point2 = document.createElement('div');
                    point3 = document.createElement('div');
                    point1.id = 'expo_point1' + rnd;
                    point2.id = 'expo_point2' + rnd;
                    point3.id = 'expo_point3' + rnd;

                    point1.style.cssText =
                      point2.style.cssText =
                        point3.style.cssText = "position: absolute; width: 10px; height: 10px; opacity: 0; z-index: 100;";

                    targetContainer.appendChild(point1);
                    targetContainer.appendChild(point2);
                    targetContainer.appendChild(point3);

                  },
                  fromPoint = function(x, y){
                      return W.document.elementFromPoint(x, y);
                  },
                  getTrakingPoints = function(){
                     if(isCrossDomain()){
                        return getTrakingPointsCrossDomain(); 
                     }
                     else{
                        return getTrakingPointsSameDomain();

                     }
                  },
                  getTrakingPointsSameDomain = function(){
                    var mid = parseInt(config.width / 2,10),
                      point1Rec = null, 
                      point2Rec = null, 
                      point3Rec = null;

                      point1.style.top = config.offset + "px";
                      point1.style.left = mid + "px";
                  
                      point2.style.left = mid + "px";
                      point2.style.top = parseInt(config.height / 2) + "px";

                      point3.style.left = mid + "px";
                      point3.style.top = parseInt(config.height - config.offset) + "px";

                      point1Rec = point1.getBoundingClientRect();
                      point2Rec = point2.getBoundingClientRect();
                      point3Rec = point3.getBoundingClientRect();

                      return {
                          top: fromPoint(point1Rec.left, point1Rec.top),
                          middle: fromPoint(point2Rec.left, point2Rec.top),
                          bottom: fromPoint(point3Rec.left, point3Rec.top)
                      }
                  },

                  getTrakingPointsCrossDomain = function(){
                    var mid = parseInt(config.width / 2,10);
                    return {
                        top: fromPoint(mid, config.offset),
                        middle: fromPoint(mid, parseInt(config.height / 2),10),
                        bottom: fromPoint(mid, parseInt(config.height - config.offset),10)
                    }
                  },

                  track = function(isTabChanged){
                    var pos = getTrakingPoints(),
                        percentage = 0;

                    if((pos.top || pos.bottom) && !pos.middle){
                        percentage = 1;
                    }else if(pos.top && pos.middle && pos.bottom){
                        percentage = 100;
                    }else if(pos.middle){
                        percentage = 50;
                    }else if(!pos.top && !pos.middle && !pos.bottom){
                        percentage = 0;
                    }

                    // making sure that callback only get called if visibility changes
                    if(lastVisiblePct == null){
                        lastVisiblePct = percentage;
                        // firing callback when it is equal to any of given inViewPercentages.
                        shouldFireCallback(inViewPercentages,percentage) && callback.call(this, percentage, isTabChanged);
                    }else if(lastVisiblePct !== percentage){
                        lastVisiblePct = percentage;
                        // firing callback when it is equal to any of given inViewPercentages.
                        shouldFireCallback(inViewPercentages,percentage) && callback.call(this, percentage, isTabChanged);
                    }
                    if(browserTabInview){
                      raf.start();
                    }
                    
                  },

                  raf = {
                      id: false,
                      start: function(isTabChanged){
                          browserTabInview = true;
                          if(this.id) W.cancelAnimationFrame(this.id);
                          this.id = W.requestAnimationFrame.call(W,track.bind(null,isTabChanged));
                      },
                      stop: function(isTabChanged){
                          if(this.id) W.cancelAnimationFrame(this.id);
                          lastVisiblePct = null;
                          browserTabInview = false;
                          callback.call(this, 0, isTabChanged);
                      }
                  };

                  setViewabilityPointsConfig();
                  raf.start();

                  W.document.addEventListener("visibilitychange", handleTabChange, false);
                
                  function handleTabChange(){
                      if(document.hidden){
                          raf.stop(true);
                      }else{
                          raf.start(true);
                      }                       
                  };

                  return {
                     stopHandlingVisibilityChange : function(){
                         W.document.removeEventListener("visibilitychange", handleTabChange, false);
                      },
                      stopTracking: function(){
                        raf.stop();
                      }
                  }

            },

            onbrowserTabSwitch = function(callback, ratio){
                if(document.hidden) {
                  callback.call(this, 0, true);
                } else {
                  callback.call(this, ratio, true);
                }
            },

            isCrossDomain = function(){
              try {
                  return window.self !== window.top;
              } catch (e) {
                  return true;
              }
            },

            // api to check whether to call given call back on the basis of given inViewPercentages
            shouldFireCallback = function(inViewPercentages, detectedPercentage){
                // checking whether given inViewPercentages is single value or array of value.
                if(utility.isArray(inViewPercentages)){
                  return inViewPercentages.some(function(percent){

                    return (detectedPercentage >= parseInt(percent,10));
                  });
                }
                else {
                  return detectedPercentage >= parseInt(inViewPercentages,10)?true:false;
                }
                
            };
          
            this.track = function(inViewPercentages, callback){
                if(!callback) throw new Error("Start callback is not defined");
                if(!inViewPercentages) throw new Error("inViewPercentages is not defined");

                if(sniffer.deviceInfo.isSafari){ 
                  return SafariViewabilityHandller.call(this, inViewPercentages, callback.bind(this));
                }
                else if(sniffer.deviceInfo.isIE && !sniffer.isIEEdgeGreaThanEqualTo15()){
                    return EFP.call(this, inViewPercentages, callback.bind(this));
                } else{
                    return IO.call(this, inViewPercentages, callback.bind(this));
                }                
            };

      }
      
      var InView = EU.CreateClass({
        
        /**
         * api to detect container element within viewport.
         * @param - element you want to detect. 
         *           callback - get view percentage of element in viewport.
         *          elementKey is any unique key which can be used later for unsubscribe the inview listener.
         */ 

          subscribeElem: function(element, elementKey, inviewPercentages, callback){
              var detectView = new DetectInview(element);
              subscribedElem[elementKey + rnd] = detectView.track(inviewPercentages, callback);
          },

        /**
         * api to unsubscribe element detection.
         */

          unsubscribeElem: function(elementKey){
             
              var subscribedElemKey = elementKey + rnd;
              if(subscribedElem[subscribedElemKey]){
                  subscribedElem[subscribedElemKey].stopTracking();
                  subscribedElem[subscribedElemKey].stopHandlingVisibilityChange();
                  delete subscribedElem[subscribedElemKey];
              } 
          },

        /**
         * 
         * api to getAll elements present within viewport.
         */
          getElementsInViewport: function(clas,view){
              var W =  utility.getWindowContext(),
                  inViewElements = [],
                  view  = view || W ,
                  winWidth = view.innerWidth,
                  winHeight = view.innerHeight,
                  centerElem = document.elementFromPoint(winWidth/2,winHeight/2);

              function checkWithinViewPort(elem,dir){
                  var elemCord = elem.getBoundingClientRect();
                  if(elemCord.bottom <= winHeight && elemCord.top >= 0){
                      inViewElements.push(elem.id);
                      if(elem[dir] && (elem[dir].className === clas)){
                          checkWithinViewPort(elem[dir],dir); 
                      }
                  }
              }

              checkWithinViewPort(centerElem,"nextElementSibling");
              checkWithinViewPort(centerElem.previousElementSibling,"previousElementSibling");
              return inViewElements;
          },

        /**
         * 
         * api to get view percentage of an element.
         */

          isElemInView:function(element,inViewPercent){
            inViewPercent = (inViewPercent === undefined) ? 0 : inViewPercent;
            var rect = element.getBoundingClientRect();
            var outViewPercent = 100 - inViewPercent;
            return (
                rect.top >= -((outViewPercent/100) * rect.height) && 
                rect.left >= -((outViewPercent/100) * rect.width) && 
                rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) + ((outViewPercent/100) * rect.height) &&
                rect.right <= (window.innerWidth || document.documentElement.clientWidth) + ((outViewPercent/100) * rect.width)
            );
          }
      });

      return new InView();
    
    }

    if (EXPO_CREATIVE) {
        EXPO_CREATIVE.registerPlugin("InView", ["sniffer"], InViewDef, version);
    }

    if (EXPO_PUB) {
        EXPO_PUB.registerPlugin("InView", ["sniffer"], InViewDef, version);        
    }
})(window, window.EU, window.EXPO_CREATIVE, window.EXPO_PUB);
/*
 * Template.js
 * Copyright (C) 2015 Mohan kumar <Mohan.Kumar@exponential.com>
 * credits John Resig
 */
(function (W, EXPO_CREATIVE, EXPO_PUB,  CM) {
    /* jshint ignore:start */
    "use strict";
    var version = "1.0.0";
    function templateEngineDef(sandBox) {
        var cache = {},
            TemplateEngine = EU.CreateClass({

                constructor :  function () {
                },

                tmpl : function tmpl(str, data){
                   
                // Figure out if we're getting a template, or if we need to
                // load the template - and be sure to cache the result.
                var fn = !/\W/.test(str) ?
                    cache[str] = cache[str] ||
                        tmpl(document.getElementById(str).innerHTML) :

                    // Generate a reusable function that will serve as a template
                    // generator (and which will be cached).
                    new Function("obj",
                        "var p=[],print=function(){p.push.apply(p,arguments);};" +

                            // Introduce the data as local variables using with(){}
                        "with(obj){p.push('" +

                            // Convert the template into pure JavaScript
                        str
                            .replace(/[\r\t\n]/g, " ")
                            .split("<%").join("\t")
                            .replace(/((^|%>)[^\t]*)'/g, "$1\r")
                            .replace(/\t=(.*?)%>/g, "',$1,'")
                            .split("\t").join("');")
                            .split("%>").join("p.push('")
                            .split("\r").join("\\'")
                        + "');}return p.join('');");

                // Provide some basic currying to the user
                return data ? fn( data ) : fn;
            }
        });
        return new TemplateEngine();
    };

    if (EXPO_CREATIVE) {
        EXPO_CREATIVE.registerPlugin('templateEngine', templateEngineDef, version);
    }

    if (EXPO_PUB) {
        EXPO_PUB.registerPlugin('templateEngine', templateEngineDef, version);
    }
    /* jshint ignore:end */
}(window, window.EXPO_CREATIVE, window.EXPO_PUB,window.CM));

/*
 * messages.js
 * Copyright (C) 2016 Sushil Chhetri <Sushil.Chhetri@exponential.com>
 */
(function(W, EU, EXPO_PUB, EXPO_CREATIVE) {
    "use strict";

    var version = '1.0.0';

    function messageDef(sandbox) {
        var id = sandbox.config.id,
            Messages = EU.Enum({
                enumList: [{
                    'GETCREATIVECONFIG': {
                        name: 'getCreativeConfig'
                    }
                }, {
                    'CREATIVECONFIG': {
                        name: 'creativeConfig'
                    }
                },{
                    "ISINVIEW": {
                        name: "isInView"
                    }

                },{
                    'SHOWVIZU': {
                        name: 'showVizu'
                    }
                },{
                    'LOADVIZU': {
                        name: 'loadVizu'
                    }
                }, {
                    "FIREVIZUCONTROLPIXEL": {
                        name: "fireVizuControlPixel"
                    }

                },{
                    "STARTTRACKING": {
                        name: "startTracking"
                    }

                },{
                    'MAINUNITLOAD': {
                        name: 'mainUnitLoad'
                    }
                }, {
                    'DIMENSIONCHANGE': {
                        name: 'dimensionChange'
                    }
                }, {
                    'STARTFROMVPAID': {
                        name: 'startFromVpaid'
                    }
                }, {
                    'VOLUMEFROMVPAID': {
                        name: 'volumeFromVpaid'
                    }
                },
                {
                    'TOGGLEPAUSEFROMVPAID': {
                        name: 'togglepauseFromVpaid'
                    }
                }, 
                {
                    'GETINITIALDIMENSIONS': {
                        name: 'getDimensions'
                    }
                }, {
                    'SETINITIALDIMENSIONS': {
                        name: 'setInitialDimensions'
                    }
                }, {
                    'SENDTOCREATIVE': {
                        name: 'sendToCreative'
                    }
                }, {
                    'SENDTOPUBLISHER': {
                        name: 'sendToPublisher'
                    }
                }, {
                    'VIDEOPLAY': {
                        name: 'videoPlay'
                    }
                }, {
                    'VIDEOPLAY': {
                        name: 'videoPlay'
                    }
                }, {
                    'GETID(true)': {
                        name: 'getId'
                    }
                }, {
                    'SENDID(true)': {
                        name: 'sendId'
                    }
                }, {
                    'CONFIGUREID(true)': {
                        name: 'configureId'
                    }
                }, {
                    'CREATIVELOADED(true)': {
                        name: 'creativeLoaded'
                    }
                }, {
                    'RENDERPROGRESSSTATUS(true)': {
                        name: 'renderProgressStatus'
                    }
                }, {
                    'GETPOSSIBLEEXPANSION': {
                        name: 'getPossibleExpansion'
                    }
                }, {
                    'SETPOSSIBLEEXPANSION': {
                        name: 'setPossibleExpansion'
                    }
                }, {
                    'SETEXPOCONTAINERCLIP': {
                        name: 'expandExpoContainer'
                    }
                }, {
                    'CREATIVEINTREACTION': {
                        name: 'creativeIntreaction'
                    }
                }, {
                    'HANDLETEASERINTERACTION': {
                        name: 'handleTeaserInteraction'
                    }
                }, {
                    'MAINUNITBACKGROUNDDIV': {
                        name: 'mainunitBackgroundDiv'
                    }
                }, {
                    'CHANGEWRAPPERDISPLAY': {
                        name: 'changeWrapperDisplay'
                    }
                }, {
                    'CHANGECLOSEDISPLAY': {
                        name: 'changeCloseDisplay'
                    }
                }, {
                    'SETHIGHZINDEXTOCONTAINER': {
                        name: 'setHighZIndexToContainer'
                    }
                },
                    {
                        'CHANGEIFRAMEDIMENSION': {
                            name: 'changeIframeDimension'
                        }
                    },
                    {
                        'RESETIFRAMEDIMENSION': {
                            name: 'resetIframeDimension'
                        }
                    },{
                        'MAINUNITHIDE': {
                            name: 'mainUnitHide'
                        }
                    },{
                        'IFRAMERESIZECLICK': {
                            name: 'iframeResizeClick'
                        }
                    },{
                        'CALLVPAIDMETHOD': {
                            name: 'callVpaidMethod'
                        }
                    },{
                        'UPDATEVPAIDATTRS': {
                            name: 'updateVpaidAttrs'
                        }
                    },{
                        'REQUESTVPAIDATTRS': {
                            name: 'updateVpaidAttrs'
                        }
                    },{
                        'GETVPAIDATTRS': {
                            name: 'updateVpaidAttrs'
                        }
                    },{
                        'PEELANIMATING': {
                            name: 'peelAnimating'
                        }
                    },{
                    'OPENURLCALLED': {
                            name: 'openUrlCalled'
                        }
                    },{
                        'ALLACTIVEPIXELSFIRED': {
                            name: 'allActivePixelsFired'
                        }
                    },
                    {
                        'GETPEELCONFIG': {
                            name: 'getPeelConfig'
                        }
                    },{
                        'CALLPEELMETHOD': {
                            name: 'callPeelMethod'
                        }
                    },{
                        'PEELINTERACTION': {
                            name: 'peelInteraction'
                        }
                    },{
                        'TEASERINTERACTION': {
                            name: 'teaserInteraction'
                        }
                    },{
                        'SENDCLICKCONFIG': {
                            name: 'sendClickConfig'
                        }
                    },{
                        'SENDCLOSEINTERACTION': {
                            name: 'sendCloseInteraction'
                        }
                    },{
                        'SENDUNMUTEINTERACTION': {
                            name: 'sendUnmuteInteraction'
                        }
                    },{
                        'EVENTSMANAGE': {
                            name: 'eventsManage'
                        }
                    },{
                        'DETACHEVENTS' : {
                            name : 'detachEvents'
                        }
                    },{
                        'PROMISEEVENT' : {
                            name : 'promisevent'
                        }
                    },{
                        'PEELEVENTSBOUND' : {
                            name : 'pp'
                        }
                    }],

                constructor: function(excludeId) {
                    this.eventName = excludeId ? this.name : (this.name + '.' + id);
                },

                getEventName: function() {
                    return this.eventName;
                }
            });

        return Messages;
    }

    if (EXPO_CREATIVE) {
        EXPO_CREATIVE.registerPlugin('messages', messageDef, version);
    }

    if (EXPO_PUB) {
        EXPO_PUB.registerPlugin('messages', messageDef, version);
    }
})(window, window.EU, window.EXPO_CREATIVE, window.EXPO_PUB);

/*
 * dimensionHelper.js
 * Copyright (C) 2016 Sushil Chhetri <Sushil.Chhetri@exponential.com>
 */
(function(W, EU, EXPO_PUB) {
    "use strict";

    EXPO_PUB.registerPlugin('dimensionHelper', function (sandbox) {
        var utility = sandbox.utility,
            DimensionHelper = EU.CreateClass({
                getInitialPosition: function (config) {
                    var fullScreenConfig = config.fullscreen,
                        teaserConfig = config.teaser;
                    var clip = "", clipProperties = {}, dimension = {};

                    dimension.width = EXPO_PUB.vpaid.width;//Math.max(2 * fullScreenConfig.width - teaserConfig.width, teaserConfig.width);
                    dimension.height = EXPO_PUB.vpaid.width;//Math.max(2 * fullScreenConfig.height - teaserConfig.height, teaserConfig.height);
                    // TODO take into account the aspect ratio, and position accordingly,
                    // leaving pillar or gutter space
                    dimension.left = 0;//(dimension.width - teaserConfig.width) / 2;
                    dimension.top = 0;//(dimension.height - teaserConfig.height) / 2;

                    clipProperties.left = dimension.left;
                    clipProperties.top  = dimension.top;
                    clipProperties.right = (Number(clipProperties.left) + Number(dimension.width));
                    clipProperties.bottom = (Number(clipProperties.top) + Number(dimension.height));
                    clip = "rect(" + clipProperties.top + "px " + clipProperties.right + "px " + clipProperties.bottom + "px " + clipProperties.left + "px)";
                    return {
                        clip : clip,
                        width : dimension.width,
                        height : dimension.height,
                        left : dimension.left,
                        top : dimension.top
                    };
                },

                getPossibleExpansion: function (container,flag) {
                    var staticDiv = container,
                        viewPort = {},
                        adPosition = utility.getElementOffset(staticDiv),
                        possibleDimension = {};
                    viewPort.height = utility.getViewportHeight();
                    viewPort.width = utility.getViewportwidth();
                    viewPort.left = utility.getScrollX();
                    viewPort.top = utility.getScrollY();
                    if (utility.isVerticalScrollbar) {
                        viewPort.width -= 17;
                    }

                    if (this.isHorizontalScrollbar) {
                        viewPort.height -= 17;
                    }
                    possibleDimension.left = adPosition.x - viewPort.left;
                    possibleDimension.right = viewPort.width - (possibleDimension.left + utility.getElementWidth(staticDiv));
                    possibleDimension.top = adPosition.y - viewPort.top;
                    if(flag){
                        possibleDimension.bottom = viewPort.height - (possibleDimension.top + 250);
                    }else {
                        possibleDimension.bottom = viewPort.height - (possibleDimension.top + utility.getElementHeight(staticDiv));
                    }
                    return possibleDimension;
                },
                //handleAdunitState : function (dataObj) {
                //    var currentState  = dataObj.currentState,previousState = dataObj.previousState;
                //    var cssText = "";
                //    if(dataObj.transition === "transition" || dataObj.transition === "transitionFast"){
                //        cssText += "overflow : visible;border:0px";
                //        return cssText;
                //    }
                //    switch (currentState) {
                //
                //        case "COLLAPSED-TEASER" :
                //            cssText  += "height :90px;overflow : hidden;border:1px solid black";
                //            break;
                //        case "PAUSED-COLLAPSE-TEASER":
                //            cssText  += "height :90px;overflow : hidden;border:1px solid black";
                //            break;
                //        case "VPM" :
                //            if(previousState === "COLLAPSED-TEASER"){
                //                cssText  += "height :250px;";
                //            }
                //            cssText += "overflow : visible;border:0px";
                //            break;
                //        case "PAUSED-TEASER" :
                //            cssText  += "overflow : hidden;border:1px solid black";
                //            break;
                //        case "TEASER" :
                //            cssText  += "overflow : hidden;border:1px solid black";
                //            break;
                //    }
                //    return cssText;
                //},
                setcontainerClip: function (adunitCss,data, expo_container,teaserContainer,starticDiv) {
                    var style = {},cssText = "";
                    style.clip = data.clip;
                    cssText += adunitCss;
                    for (var k in data.atr) {
                        style[k] = data.atr[k];
                    }
                    utility.setStyle(expo_container, style);
                    //adContainer.style.cssText = cssText;
                    teaserContainer.style.cssText += adunitCss;
                    if(starticDiv) {
                        starticDiv.style.cssText += adunitCss;
                    }
                },

                getMainUnitClip: function (possDim, config) {
                    var expandedClip = {},
                        _adCfg = config,
                        clip = _adCfg.initPosition.clip.match(/([0-9]|\.)+/g),
                        teaserClip = {
                            left: parseInt(clip[3]),
                            right: parseInt(clip[1]),
                            top: parseInt(clip[0]),
                            bottom: parseInt(clip[2])
                        },
                        reqspaceH = _adCfg.fullscreen.width - _adCfg.teaser.width,
                        reqspaceV = _adCfg.fullscreen.height - _adCfg.teaser.height,
                        diff;
                    if (possDim.left - reqspaceH >= possDim.right) {
                        expandedClip.left = teaserClip.left - reqspaceH;
                        expandedClip.right = teaserClip.right;
                    } else if (possDim.right - reqspaceH >= possDim.left) {
                        expandedClip.right = teaserClip.right + reqspaceH;
                        expandedClip.left = teaserClip.left;
                    } else {
                        diff = (possDim.left + possDim.right - reqspaceH) / 2;

                        if (((possDim.left - diff) + (possDim.right - diff)) == reqspaceH) {
                            expandedClip.left = teaserClip.left - (possDim.left - diff);
                            expandedClip.right = teaserClip.right + (possDim.right - diff);
                        } else {
                            expandedClip.left = teaserClip.left - possDim.left;
                            expandedClip.right = teaserClip.right + (reqspaceH - possDim.right);
                        }
                    }

                    if (reqspaceV >= 0) { //condition for expansion
                        if (possDim.top - reqspaceV >= possDim.bottom) {
                            expandedClip.top = teaserClip.top - reqspaceV;
                            expandedClip.bottom = teaserClip.bottom;
                        } else if (possDim.bottom - reqspaceV >= possDim.top) {
                            expandedClip.bottom = teaserClip.bottom + reqspaceV;
                            expandedClip.top = teaserClip.top;
                        } else {
                            diff = (possDim.top + possDim.bottom - reqspaceV) / 2;

                            if (((possDim.top - diff) + (possDim.bottom - diff)) == reqspaceV) {
                                expandedClip.top = teaserClip.top - (possDim.top - diff);
                                expandedClip.bottom = teaserClip.bottom + (possDim.bottom - diff);
                            } else {
                                expandedClip.top = teaserClip.top - possDim.top;
                                expandedClip.bottom = teaserClip.bottom + (reqspaceV - possDim.bottom);
                            }
                        }
                    } else {
                        if (possDim.top - reqspaceV <= possDim.bottom) {
                            expandedClip.top = teaserClip.top - reqspaceV;
                            expandedClip.bottom = teaserClip.bottom;
                        } else if (possDim.bottom - reqspaceV <= possDim.top) {
                            expandedClip.bottom = teaserClip.bottom + reqspaceV;
                            expandedClip.top = teaserClip.top;
                        } else {
                            diff = (possDim.top + possDim.bottom - reqspaceV) / 2;

                            if (((possDim.top - diff) + (possDim.bottom - diff)) === reqspaceV) {
                                expandedClip.top = teaserClip.top - (possDim.top - diff);
                                expandedClip.bottom = teaserClip.bottom + (possDim.bottom - diff);
                            } else {
                                expandedClip.top = teaserClip.top - possDim.top;
                                expandedClip.bottom = teaserClip.bottom + (reqspaceV - possDim.bottom);
                            }
                        }
                    }

                    return expandedClip;
                }
            });

        return (new DimensionHelper());
    }, '1.0.0');
})(window, window.EU, window.EXPO_PUB);

/*
    Exponential unified platform
    Copyright 2013 Exponential! Inc. All rights reserved.
    Licensed under the BSD License.
    http://exponential.com/license/
    This plugin will return instance of framebuster class.
 */
var frame_buster_version = '1.9.0';
EXPO_PUB.registerPlugin('framebuster', ['dummyLogger'], function(expo, log) {
    /*
     * Please define all private variable here
     */

    //log.debug("register framebuster plugin succefull===");

    function Framebuster() {
        this.isEnableFramebusing = true;
    }

    var p = Framebuster.prototype;

    /*
     * return (boolean) true/false cross domain
     */
    p.isInsideSameDomainIframe = function(win) {
        win = win || window;
        if (!this.isEnableFramebusing || this.isCrossDomain()) return false;
        var is_inside_same_domain_iframe = (top != win) ? true : false;
        return is_inside_same_domain_iframe;

    };

    p.isCrossDomain = function(win) {
        var appsnackCrossDomain = false;
        try {
            win = win || window;
            appsnackWindowObj = win;
            var dummy = top.location.href;
            if (typeof(dummy) == "undefined") {
                appsnackCrossDomain = true;
                throw "Error";
            }
        } catch (ex) {
            appsnackCrossDomain = true;
        }
        this.isSameDomain = !appsnackCrossDomain;
        return appsnackCrossDomain;
    };

    /*
     * return (boolean) true/false cross domain
     * @important : this api will be used by showcase,inapp etc
     */
    p.disableFramebusting = function() {
        this.isEnableFramebusing = false;
    };

    /*
     * @params is_enable (boolean) enable/disable framebusting
     * @return (object) window object to use
     */
    p.getWindowContext = function(win) {
        win = win || window;
        if (!this.isEnableFramebusing || this.isCrossDomain()) return win;
        var windowContext = (top != win) ? top : win;
        return windowContext;
    };
    return (expo.framebuster = new Framebuster());

}, frame_buster_version);

/*
 * selfServeAdapter.js
 * Copyright (C) 2015 mohan Kumar <mohan.kumar@exponential.com>
 */
var self_Serve_Adapter_version = '1.9.0';
EXPO_PUB.registerPlugin('selfServeAdapter', [], function(expo) {
    /*
     * Please define all private variable here
     */

    //log.debug("register framebuster plugin succefull===");

    function SelfServerAdapter() {
        this.keyReference = ["logo","970x250","728x90","300x250","300x600","160x600","trackers"];
    }

    var p = SelfServerAdapter.prototype;

    p.mergeData = function (widzardConfig , adConfig) {
            this.keyReference.forEach(function(key){
                if(key === "trackers"){
                   if( widzardConfig.teaser.execution.display.trackers && widzardConfig.teaser.execution.display.trackers.impression){
                       adConfig.teaser.trackers.impression.imp.trackers = widzardConfig.teaser.execution.display.trackers.impression;
                   }
                    if(widzardConfig.teaser.execution.display.trackers && widzardConfig.teaser.execution.display.trackers.engagement){
                        adConfig.fullscreen.trackers.engagement.eng.trackers = widzardConfig.teaser.execution.display.trackers.engagement;
                    }
                    if(widzardConfig.teaser.execution.display.trackers && widzardConfig.teaser.execution.display.trackers.deepEngagement){
                        adConfig.fullscreen.trackers.deepEngagement ={
                            'eng' : {

                            }
                        };
                        adConfig.fullscreen.trackers.deepEngagement.eng.trackers = widzardConfig.teaser.execution.display.trackers.deepEngagement;
                    }
                }else {
                    adConfig.teaser[key] = widzardConfig.teaser.execution.display[key];
                }
            });
           adConfig.mainunit = widzardConfig.mainunit;
           adConfig.defaults = widzardConfig.defaults;
           if(widzardConfig.defaults && widzardConfig.defaults.parameters.language){
               adConfig.locale = widzardConfig.defaults.parameters.language;
           }
           if(widzardConfig.defaults && widzardConfig.defaults.parameters.branding){
               adConfig.branding = widzardConfig.defaults.parameters.branding;
           }
        return adConfig
    };

    return (expo.SelfServerAdapter = new SelfServerAdapter());

}, self_Serve_Adapter_version);
/*
 * dimensionHelper.js
 */
(function(W, EU, EXPO_PUB) {
    "use strict";
var ad_choice_version = '1.9.0';
EXPO_PUB.registerPlugin('adChoice', function(expo) {
    /*
     * Please define all private variable here
     */
    var _utility = expo.utility
    function AdChoice() {
    }

    var p = AdChoice.prototype;
    p.adChoiceHide = function (divId) {
        var div_adChoice = _utility.getWindowContext().document.getElementById(divId);
        if (div_adChoice) {
            div_adChoice.style.display = "none";
        }
    };
    p.adChoiceShow = function (divId) {
        var div_adChoice = _utility.getWindowContext().document.getElementById(divId);
        if (div_adChoice) {
            div_adChoice.style.display = "";
        }
    };

    p.adChoiceMoveOut = function(container,adChoiceDiv) {

        var ad_choice_div_insideIframe = adChoiceDiv;
        if (ad_choice_div_insideIframe) {

            var isAdChoiceContentPopulated = function() {
                var img_divs = ad_choice_div_insideIframe.getElementsByTagName("img");
                if (img_divs && img_divs.length !== 0) {
                    var ad_choice_div_clone = ad_choice_div_insideIframe.cloneNode(true);
                    container.appendChild(ad_choice_div_clone);
					stopSetInterval();
                }
            }
            var setIntervalId = setInterval(isAdChoiceContentPopulated, 200);
            var stopSetInterval = function() {
                clearInterval(setIntervalId);
                _utility.getWindowContext().tf_e9AdChoice = W.tf_e9AdChoice;
            }
            setTimeout(stopSetInterval, 8000); //in case adchoice doesn't loaded properly need to stop setinterval.
            _utility.getWindowContext().tf_e9AdChoice = W.tf_e9AdChoice;
        }

    };

    return (expo.AdChoice = new AdChoice());

}, ad_choice_version);
})(window, window.EU, window.EXPO_PUB);
/*
 * eventManager.js
 * Copyright (C) 2015 Sushil Chhetri <Sushil.Chhetri@exponential.com>
 */
(function(W, EU, EXPO_PUB) {
    "use strict";

    var BaseEventManager = EU.BaseEventManager,
        pubEventManagerVersion = '1.0.0',
        PubEventManager, pubEventManager;

    /**
     * @extends {@link ../common/eventManager | EU.BaseEventManager}
     */
    PubEventManager = BaseEventManager.extend();
    pubEventManager = new PubEventManager();

    EXPO_PUB.registerPlugin('pubEventManager', function(sandbox) {
        return pubEventManager;
    }, pubEventManagerVersion);
})(window, window.EU, window.EXPO_PUB);


(function (W, EU, EXPO_PUB) {
    "use strict";

    var version = "1.0.0";

     function DynamicPeelDef(sandBox, templateEngine, domUtility){

        var  peelContainer = null,
             peelData = [], 
             commonElementClass = "", 
             peelDataIndex = 0, 
             surfacesMarkup = [],
             subSurfacesInDOM = [],
             surfacesXPathkeys = [],
             currentSurfaceData = [];
        
        var DynamicPeel = EU.CreateClass({

                constructor :  function () {
                },

                checkNextSurfaceType : function(surfacePtr, subSurfacePtr){

                    this.prepareCurrentSurfaceHtml(surfacePtr, subSurfacePtr); 
                
                    this.startSurfaceTransition(surfacePtr, subSurfacePtr);
                },

                prepareCurrentSurfaceHtml :function(surfacePtr, subSurfacePtr){

                    var parsedHtml = "", 
                        fontSize = null, 
                        currentSubSurface = null,
                        currentSurfaceMarkup = surfacesMarkup[surfacePtr]["markup"],
                        subContainerConfig = surfacesMarkup[surfacePtr]["subContainerConfig"],
                        currentSurfaceDataKeys = surfacesXPathkeys[peelDataIndex] && surfacesXPathkeys[peelDataIndex].split("."),

                        minFont = surfacesMarkup[surfacePtr].minFont || 9,
                        maxFont = surfacesMarkup[surfacePtr].maxFont || 14;



                    
                    // checking for type of surface
                    if(surfacesMarkup[surfacePtr].type === "static"){
                         this.appendHtml(peelContainer, surfacesMarkup[surfacePtr]["markup"]);
                    }else if(typeof(currentSurfaceDataKeys) !== "undefined"){
                        currentSurfaceData = this.getCurrentSurfaceData(peelData, currentSurfaceDataKeys);
                        parsedHtml =  templateEngine.tmpl(currentSurfaceMarkup, {data :currentSurfaceData[subSurfacePtr]});
                        this.appendHtml(peelContainer, parsedHtml);
                    }
                    
                    subSurfacesInDOM = peelContainer.children;

                    currentSubSurface = subSurfacesInDOM[subSurfacesInDOM.length-1];

                    currentSubSurface.setAttribute("class", commonElementClass); 

                    if(currentSubSurface){
                        this.calculateFontSize(currentSubSurface, minFont, maxFont, subContainerConfig);
                    }
                    
                },

                getCurrentSurfaceData : function(peelData, currentSurfaceDataKeys, subSurfacePtr){
                    for(var i=0; i<currentSurfaceDataKeys.length;i++){
                        peelData = peelData[currentSurfaceDataKeys[i]]
                    }
                    return peelData;
                },

                calculateFontSize :function(currentSubSurface, minFont, maxFont, subContainerConfig){

                    var fontSize = null,
                        minFontSize = maxFont,
                        subSurfaceChildrens =  Array.prototype.slice.call(currentSubSurface.children,0),
                        that = this,
                        currentSubSurfaceHeight = 0,
                        lineHeight = 1;

                    subSurfaceChildrens.map(function(textContainer, index){
                        
                        lineHeight = (subContainerConfig && subContainerConfig[index]) ? (subContainerConfig[index].lineHeight || 1): 1; 
                       
                        fontSize = that.calculateSubContainerFontSize.call(that,textContainer,minFont, maxFont, lineHeight);

                        if(fontSize < minFontSize){
                            minFontSize = fontSize;
                        }

                    });
                    if(maxFont === minFontSize){
                        currentSubSurface.style.lineHeight = "120%";
                    }
                    currentSubSurface.style.fontSize = minFontSize; 
                },

                calculateSubContainerFontSize :function(textContainer, minFont, maxFont, lineHeight){

                    var textArray = textContainer.textContent.split(" "),
                        dummyDiv = null,
                        textArrayIndex = 0,
                        textContainerStyle = textContainer.style,
                        textContainerWidth =  textContainer.offsetWidth,
                        lastIndex = 0,
                        styleObj = {
                            fontWeight : textContainerStyle.fontWeight,
                            fontfamily :textContainerStyle.fontFamily,
                            fontStyle : textContainerStyle.fontStyle
                        };
                        
                        // looping upto no of lines  allocated to each container.
                        for(var i = 0; i < lineHeight; i++){
                            
                            dummyDiv = this.createDummyDiv(maxFont, styleObj);
                        
                            while(dummyDiv.offsetWidth < (textContainerWidth) && textArrayIndex < (textArray.length)){
                                dummyDiv.textContent = dummyDiv.textContent + textArray[textArrayIndex] + " "; 
                                textArrayIndex++; 
                            }
                                   
                            textArrayIndex--;

                            if(dummyDiv.offsetWidth >= (textContainerWidth)){
                                lastIndex = dummyDiv.textContent.lastIndexOf(textArray[textArrayIndex]);
                                dummyDiv.textContent = dummyDiv.textContent.substring(0,lastIndex);
                                textArrayIndex--;
                            }

                            // checking text is coming in last line or not and adding peel ellipsis
                            if(i === lineHeight-1){
                                dummyDiv.textContent = dummyDiv.textContent + " ...";
                                if(dummyDiv.offsetWidth >= (textContainerWidth)){
                                    textArrayIndex--;
                                }
                            }
                            if(i < (lineHeight-1)){
                                textArrayIndex++;
                            }

                            peelContainer.removeChild(dummyDiv);
                        }
                    
                        if(textArrayIndex < (textArray.length-1) && minFont < maxFont){
                            return this.calculateSubContainerFontSize(textContainer, minFont, --maxFont, lineHeight);
                        }
                        else if(textArrayIndex < (textArray.length-1) || minFont === maxFont){
                            textArray = textArray.splice(0,textArrayIndex+1);
                            textContainer.textContent = textArray.join(" ") + " ..."; 
                            return maxFont;
                        }
                        else {
                             textArray = textArray.splice(0,textArrayIndex+1);
                             textContainer.textContent = textArray.join(" ");
                             return maxFont;
                        }   
                            
                },

                createDummyDiv :function(fontSize, styleObj){
                    var div = document.createElement("div"),
                        textNode = document.createTextNode(""),
                        divStyle =  div.style;
                    div.id = "dummyid";

                    divStyle.display = "inline-block"
                    divStyle.opacity = "0";
                    if(styleObj){
                        divStyle.fontWeight = styleObj.fontWeight;
                        divStyle.fontfamily = styleObj.fontfamily;
                        divStyle.fontStyle  =  styleObj.fontStyle;
                    }

                    divStyle.fontSize = fontSize;
                    peelContainer.appendChild(div);
                    div.appendChild(textNode);
                    return div;
                },

                appendHtml : function( element,  htmlString ) {
                    var div = document.createElement( "div");
                    div.innerHTML = htmlString;
                    element.appendChild(div.firstChild);
                },

                
                startSurfaceTransition :function(surfacePtr, subSurfacePtr){
                    // getting currently created surface stay duration

                    var stayduration = surfacesMarkup[surfacePtr].stayDuration || 1000;

                    if(subSurfacesInDOM.length > 1){
                        peelContainer.removeChild(subSurfacesInDOM[0]);
                    }

                    
                    
                    subSurfacesInDOM[0].style.opacity = "1";
                    if(peelContainer.offsetWidth === 0){
                        stayduration = 500;
                        subSurfacesInDOM[0].style.opacity = "0";
                    }

                    setTimeout(function(){
                        if((surfacesMarkup[surfacePtr].type === "static") || 
                            (subSurfacePtr === (surfacesMarkup[surfacePtr].subSurfaceMaxLength-1 || 0 )) 
                            || (subSurfacePtr === currentSurfaceData.length-1)){

                           if(surfacesMarkup[surfacePtr].type != "static"){
                               peelDataIndex = peelDataIndex + 1;
                           }
                           subSurfacePtr = -1;
                           surfacePtr = surfacePtr + 1;

                        }
                        
                        if(surfacePtr === surfacesMarkup.length){
                            surfacePtr = 0;
                            peelDataIndex = 0;
                        }

                        this.checkNextSurfaceType(surfacePtr, ++subSurfacePtr);

                    }.bind(this),stayduration);

                },

                render : function init(container, peelMarkupTemplate , peelDataJson){ 
                    var  surfacePtr = 0,
                         subSurfacePtr = 0;
                    
                    // dynamic peel container
                    peelContainer = container;

                    // surfaceMarkup array 
                    surfacesMarkup = peelMarkupTemplate.surfaces;
            
                    surfacesXPathkeys = peelMarkupTemplate.surfacesXpaths;

                    //dynamic peel data
                    peelData = peelDataJson;

                    commonElementClass = "transform-opacity rm-align-vertical-center surface-style";

                    // call to create prepare html for first Surface.
                    this.checkNextSurfaceType(surfacePtr, subSurfacePtr);
   
                }
                    
        });
        
        return new DynamicPeel();
    }

    EXPO_PUB.registerPlugin("DynamicPeel", ["templateEngine","domUtility"], DynamicPeelDef, version);

}(window, window.EU, window.EXPO_PUB));


(function(W, EU, EXPO_PUB) {
    "use strict";
    var version = "1.0.0";
    EXPO_PUB.registerPlugin('Peel', ['PeelModel', 'PeelView', 'PeelConfig'], function(sandBox, peelModel, peelView, peelConfig) {
        var Peel = EU.CreateClass({
            constructor: function() {
                this.id = 'Peel';
                this.appendTo="";
                this.objectConf = "";
                this.callStack = [];
            },

            init: function(obj, appendTo) {
                peelModel.setConfig(peelConfig);
                peelView.init(peelModel);
                this.onConfig(obj, appendTo);
                this.isHidden = true;
                //CM.requestConfig(componentKey);
            },
            render: function(appendTo, obj) {
                this.appendTo = appendTo;
                this.objectConf = obj;
                this.element = peelView.prepareHtml();
                peelView.render( appendTo,obj);
            },

            /***
             * exposed for action be the component Manager
             */
            hide : function () {
                this.element.style.display = "none";
                //this.element.style.top = "0px";
            },
            show : function () {
                this.element.style.display = "block";

            },

            destroy: function() {
                peelView.hideElements();
                this.element.parentNode.removeChild(this.element);
                this.element = null;
                //CM.destroyComponent(this);
            },

            reset: function () {
                peelView.reset();

            },

            isVisible : function () {
                // return !this.isHidden;
                return !(this.element.offsetParent === null || this.element.style.display == 'block');
            },



            onConfig: function(obj, appendTo) {
                peelModel.setlanguageString(obj.languageStr);
                peelModel.setAssetLocation(obj.location);
                peelModel.setPeelClientLogo(obj.logo);
                peelModel.setBrandingText(obj.branding);
                peelModel.setPeelCssText(obj.cssText);
                peelModel.setBrandingDuration(obj.duration);
                if (obj.dynamicPeelConfig && obj.dynamicPeelConfig.isEnabled) {
                    peelModel.setPeelDynamicConfig(obj.dynamicPeelConfig);
                    peelModel.setPeelDynamicData(obj.dynamicPeelData);
                }
                this.render(appendTo, obj.dimension);
            },
            pause : function () {
                peelView.pauseTeaser();
            },
            exitTeaserAnimation : function () {
                peelView.exitTeaserAnimation();
                //this.render(this.appendTo,this.objectConf);
            },
            entryPeelAnimation : function () {
                peelView.entryPeelAnimation();
                //this.render(this.appendTo,this.objectConf);
            },
            updateRemainingTime: function(remainingTime) {
                if(!peelModel.getShowRemainingTime()) {
                    return;
                }

                // TODO use language string
                peelView.displayRemainingTimeMessage(
                    remainingTime <= 5
                    ? Math.ceil( remainingTime )
                    : null
                );
            }
        });

        return new Peel();
    }, version);
}(window, window.EU, window.EXPO_PUB));

/***
 *  Model  class contains config which required to build the view
 */

(function(W, EU, EXPO_CREATIVE) {
    "use strict";
    var version = "1.0.0";
    EXPO_PUB.registerPlugin('PeelModel', function(sandbox) {
        var utility = sandbox.utility;
        var PeelModel = EU.CreateClass({
            constructor: function() {
                this.config = undefined;
            },

            setConfig: function(conf) {
                this.config =  utility.extend({},conf)|| {};
            },

            setlanguageString : function(langStr){
                this.config.languageText  = langStr;
                this.repaceHifen();
            },
            setAssetLocation : function (loc) {
                this.config.location = loc ? loc : "";
                this.setImageAssets();

            },

            setBrandingText : function(brndText){
                this.config.branding = brndText;
            },

            setBrandingDuration : function (duration) {
                this.config.brandingDuration = duration;
            },
            //hack

            repaceHifen : function (){
                Object.keys(this.config.languageText).forEach(function(key){
                    var replaceKey, temp = this.config.languageText[key];
                    delete  this.config.languageText[key];
                    replaceKey  = key.split('-').join("_");
                    this.config.languageText[replaceKey] = temp;

                }.bind(this));
            },

            getLanguageString: function() {
                return this.config.languageText;
            },

            getBrandingDuration : function () {
                return this.config.brandingDuration;
            },

            getBrandingText:function(){
                return this.config.branding;
            },

            getPeelClientLogo : function () {
                return this.config.logo;
            },

            setPeelCssText : function(cssText){
                 this.config.cssText = cssText;
            },
            getPeelCssText : function(){
                return this.config.cssText;
            },

            setPeelClientLogo : function (logo) {
                 this.config.logo = logo ;
            },

            setPeelDynamicConfig: function(obj) {
                this.config.peelDynamicConfig = obj;
            },

            setPeelDynamicData :function(obj){
                this.config.dynamicPeelData = obj;
            },

            getPeelDynamicConfig: function() {
                return this.config.peelDynamicConfig;
            },

            getPeelDynamicData: function() {
                return (this.config.dynamicPeelData || null);
            },

            getId: function() {
                return this.config.id;
            },

            getLan: function() {
                return this.config.lan;
            },
            getPeelContainerDimension: function(dim) {
                return this.config.peelContainerDimension[dim];
            },

            getEvents: function() {
                return this.config.events;
            },

            setImageAssets: function() {
                if(this.config.location){
                    Object.keys(this.config.assets).forEach(function(key){
                        this.config.assets[key] = this.config.location + this.config.assets[key];
                    }.bind(this));
                }
            },
            getImageAssets : function () {
              return  this.config.assets;
            },

            getShowRemainingTime: function() {
                return true;
            }

        });

        return new PeelModel();
    }, version);


}(window, window.EU, window.EXPO_CREATIVE));

/***
 * view class to construct view and perform animation
 * varriable animationHack  reference http://stackoverflow.com/questions/25900479/why-is-settimeout-needed-when-applying-a-class-for-my-transition-to-take-effect
 *
 */
(function(W, EU, EXPO_PUB) {
    "use strict";

    var version = "1.0.0";

    EXPO_PUB.registerPlugin('PeelView', ['domUtility', 'templateEngine','sniffer','DynamicPeel'], function(sandBox, domUtility, templateEngine,sniffer, DynamicPeel) {
        var evtContainer, peelContent, container, peelContainer,muteButton,
            handButton, replay, explore, cube, pauseFlag, prefix, whiteImage,
            showingRemainingTime = false, logo, exploreNow, contentStarting,
            that, moveBackwardTimer, cubeTimer, whiteImageContainer, dynamicPeelContainer;
        var utility = sandBox.utility,
            PeelView = EU.CreateClass({
                constructor: function() {},

                /***
                 * model injection
                 * @param model
                 */
                init: function(model) {
                    this.modelObj = model;
                    that = this;
                    this.exitAnimation;
                    this.animQueue = {};
                },

                /***
                 *  Prepares html which the language string
                 */
                prepareHtml: function() {
                    var data = {
                            languageStr: this.modelObj.getLanguageString(),
                            assets: this.modelObj.getImageAssets(),
                            utility: sandBox.utility,
                            logo: this.modelObj.getPeelClientLogo(),
                            teaserBranding: this.modelObj.getBrandingText()
                        },
                        htmlStr;
                    htmlStr  =  '<div id="rm_peel_wrapper_container" class="rm_peel_wrapper_container"> ' +
                        '<div id="rm_peel_evt_holder" class="rm-transform-class p1">'+
                        '</div>'+
                        '<div id="rm_peel_white_container">'+
                        '<img class="rm-white-image-scale " src="'+data.assets.whiteMC+'"> ' +
                        '</div>'+
                        '<div class="rm_handButton"> ' +
                        '<img src="'+data.assets.hand+'"> ' +
                        '</div>' +
                        '<div class="rm_peelContent rm-transform-class"> ' +
                        '<div class="rm_peeel_clientLogo"> ' +
                        '</div>' +
                        '<div class="rm_dynamic_peeel">' +
                        '</div>' +
                        '<div class="rm_peel_explore_now" style="font-size:'+data.languageStr.click_to_explore_now.fontSize+'px; line-height: ' +1.5 * data.languageStr.click_to_explore_now.fontSize +'px"> ' + utility.toUpperCase(data.languageStr.click_to_explore_now.text)+ '</div>' +
                        '<div class="rm_peel_cube">' +
                        '<div class="rm_flipper">' +
                        '<div class="verticleAlign" style="font-size:'+data.languageStr.rollover_to_explore.fontSize+'px"> ' + utility.toUpperCase(data.languageStr.rollover_to_explore.text)+
                        '</div>' +
                        '</div>' +
                        '<div class="rm_flop">' +
                        '<div style="font-size:'+data.languageStr.rollover_to_explore.fontSize+'px" class="verticleAlign">'+data.teaserBranding+'</div> ' +
                        '</div>' +
                        '</div>' +
                        '<div class="rm_content_starting"> ' +
                        '</div>' +
                        '<div class="rm_peel-replay"> ' +
                        '<div class="verticleAlign" style="font-size:'+data.languageStr.click_to_replay.fontSize+'px"> ' +
                        utility.toUpperCase(data.languageStr.click_to_replay.text) +
                        '</div>' +
                        '</div>' +
                        '</div>' +
                        '<div id="rm_peel_container" class="rm-transform-class "> ' +
                        '<img src="'+data.assets.peel_bg+'"> ' +
                        '</div> ' +

                        '</div>';
                    //htmlStr = templateEngine.tmpl("expo_peel", data);
                    that.element = document.createElement('div');
                    that.element.innerHTML = htmlStr;
                    return this.element.children[0];
                },

                /***
                 * To append view element to Dom
                 * @param element  the Element where the view is append to
                 * @param callBack to intimate the rendered event
                 */
                render: function(appendElement, config) {
                    var deviceInfo,brandingDiv,fontSize, flop, peelClientLogo, dynamicPeelConfig, dynamicPeelData;
                    that.appendTo = document.querySelector(appendElement);
                    that.appendTo.appendChild(that.element.children[0]);
                    container = document.getElementById('rm_peel_wrapper_container');
                    evtContainer = document.getElementById("rm_peel_evt_holder");
                    dynamicPeelContainer = container.querySelector(".rm_dynamic_peeel");
                    peelContainer = container.querySelector('#rm_peel_container');
                    peelContent = container.querySelector('.rm_peelContent');
                     peelClientLogo = peelContent.querySelector(".rm_peeel_clientLogo");
                    muteButton = container.querySelector('.rm_muteButton');
                    handButton = container.querySelector('.rm_handButton');
                    replay = container.querySelector(".rm_peel-replay");
                    //explore = peelContainer.querySelector('#rm_peelText');
                    cube = peelContent.querySelector('.rm_peel_cube');
                    whiteImage = container.querySelector('.rm-white-image-scale');
                    whiteImageContainer = container.querySelector('#rm_peel_white_container')
                    logo = peelContent.querySelector('.rm_peeel_clientLogo');
                    exploreNow = peelContent.querySelector('.rm_peel_explore_now');
                    contentStarting = peelContent.querySelector('.rm_content_starting');
                    flop = cube.querySelector('.rm_flop');
                    prefix = domUtility.vendorPrefix();
                    // if(config.dimension === "160x600"){
                    //     deviceInfo = sniffer.getDeviceInfo();
                    //     if(deviceInfo.browserName === "ie"   && !deviceInfo.isIEEdge){
                    //         container.classList.add('rm_peel_wrapper_container_ie_160X600');
                    //     } else{
                    //         container.classList.add('rm_peel_wrapper_container_scale_160X600');
                    //     }
                    // }
                   
                    fontSize = domUtility.calculateFontSize(that.modelObj.getBrandingText(),200,14,9);
                    brandingDiv = cube.querySelector('.rm_flop .verticleAlign');
                    brandingDiv.style.fontSize = fontSize + "px";
                    contentStarting.style.fontSize = this.modelObj.getLanguageString().content_starting_in.fontSize + "px";
                    exploreNow.style.fontSize = this.modelObj.getLanguageString().click_to_explore_now.fontSize + "px";

                    sandBox.utility.isString(that.modelObj.getBrandingText()) ? that.repeateAnimation(flop) : flop.style.opacity = "0";

                    that.initAnimation();


                    dynamicPeelConfig = this.modelObj.getPeelDynamicConfig();

                     dynamicPeelData = this.modelObj.getPeelDynamicData();
                
                   
                    if(dynamicPeelConfig && dynamicPeelConfig.isEnabled && dynamicPeelData){
                        if(dynamicPeelConfig.surfacesXpaths && dynamicPeelConfig.surfacesXpaths.length > 0){
                            //peelClientLogo = peelContent.querySelector(".rm_peeel_clientLogo");
                            peelClientLogo.style.display = "none";
                            DynamicPeel.render(dynamicPeelContainer, dynamicPeelConfig, dynamicPeelData);
                        }
                    }
                    var cssText='background-image: url("'+this.modelObj.config.logo+'");background-repeat: no-repeat;background-position: right;background-size: contain;'+this.modelObj.config.cssText;                    
                    peelClientLogo.style.cssText = cssText;
                    //setPeelStyle.call(this, config);
                },

                initAnimation: function() {
                    that.hideContent(peelContent);
                    that.hideContent(cube);
                    that.hideRemainingTime();
                    cube.classList.remove('hoverCube');
                    that.moveForward();
                    that.hideContent(replay);
                    peelContainer.addEventListener('webkitAnimationEnd', that.moveForward);
                    peelContainer.addEventListener('animationend', that.moveForward);
                },

                repeateAnimation: function (flop) {
                    this.peelTimmer = setInterval(function () {
                        if (!sandBox.utility.isString(that.modelObj.getBrandingText())) {
                            //that.moveBackWard();

                        } else {
                            if (flop.style.opacity === "1" || flop.style.opacity === "") {
                                flop.style.opacity = "0";
                            } else {
                                flop.style.opacity = "1";
                            }


                        }
                    }.bind(that), that.modelObj.getBrandingDuration());

                },

                hideContent: function(element) {
                    element.style.opacity = 0;
                },
                showContent: function(element) {
                    element.style.opacity = 1;
                },
                moveForward: function() {
                    var animationHack;
                    // prefix = prefix === "Moz"?"moz":prefix;
                    if (prefix) {
                        peelContainer.classList.remove('rm_peel_element_animation');
                        whiteImage.classList.remove('whiteAnimation');
                        that.showContent(peelContent);
                        //that.hideContent(explore);
                        // that.hideContent(muteButton);
                        that.hideContent(handButton);
                        that.showContent(cube);
                        animationHack = peelContainer.clientWidth;

                        container.removeEventListener('webkitTransitionEnd', that.opacityAnimationCallback);
                        container.removeEventListener('transitionend', that.opacityAnimationCallback);

                        peelContainer.removeEventListener('webkitAnimationEnd', that.moveForward);
                        peelContainer.removeEventListener('animationend', that.moveForward);

                        peelContainer.addEventListener('webkitTransitionEnd', that.cubeAnimation);
                        peelContainer.addEventListener('transitionend', that.cubeAnimation);

                        // TODO this is a fix for an IE issue. Fix the IE issue and remove this.
                        that.cubeAnimation();

                        EU.EventManager.fire("Peel_moveForwardStarted");
                        whiteImageContainer.style[prefix + "Transition"] =
                               (showingRemainingTime ? '.3s':'.5s')+' linear';

                        peelContainer.style[prefix + "Transform"] = "translate3d(-149px ,0 ,0)";
                        evtContainer.style[prefix + "Transform"] = "translate3d(-149px ,0 ,0)";
                        peelContent.style[prefix + "Transform"] = "translate3d(-149px ,0 ,0)";
                        whiteImageContainer.style[prefix + "Transform"] = "translate3d(-143px ,0 ,0)";
                        whiteImage.style[prefix + "Transform"] = "skewX(-7deg)";
                        animationHack = null;

                        //}, 0);
                    }
                },
                cubeAnimation: function() {
                    //container.style.opacity = 1;
                    peelContainer.classList.add("rm_peel_element_animation");
                    peelContainer.style.left = "6px";
                    pauseFlag = false;
                    /*
                    pauseFlag = false;
                    peelContainer.removeEventListener('webkitTransitionEnd', that.cubeAnimation);
                    peelContainer.removeEventListener('transitionend', that.cubeAnimation);
                    EU.EventManager.fire("Peel_moveForwardComplete");
                    //that.showContent(explore);
                    if(cubeTimer) {
                        clearTimeout(cubeTimer);
                        cubeTimer = null;
                    }
                    cubeTimer = setTimeout(function() {
                        if (pauseFlag) {
                            return;
                        }


                        if(!sandBox.utility.isString(that.modelObj.getBrandingText()))
                        {
                            that.moveBackWard();
                        
                        }else{
                            cube.classList.add('hoverCube');
                        }

                        cube.addEventListener('webkitTransitionEnd', that.moveBackWard);
                        cube.addEventListener('transitionend', that.moveBackWard);
                    }, 2000);
                    */
                },
                moveBackWard: function(cb,instant) {

                    var pauseDuration = instant === true? 0: 1000;
                    cube.removeEventListener('webkitTransitionEnd', that.moveBackWard);
                    cube.removeEventListener('transitionend', that.moveBackWard);
                    moveBackwardTimer = setTimeout(function (){
                        if (prefix) {
                            //that.showContent(explore);
                            evtContainer.style[prefix + "Transform"] = "translate3d(0px ,0 ,0)"
                            peelContainer.style[prefix + "Transform"] = "translate3d(0px ,0 ,0)";
                            peelContent.style[prefix + "Transform"] = "translate3d(0px ,0 ,0)";
                            whiteImageContainer.style[prefix + "Transform"] = "translate3d(0px ,0 ,0)";
                            whiteImage.style[prefix + "Transform"] = "skewX(-7deg)";

                            EU.EventManager.fire("Peel_moveBackwardStarted");
                            peelContainer.addEventListener('webkitTransitionEnd', that.scaleAnimation);
                            peelContainer.addEventListener('transitionend', that.scaleAnimation);
                            // if(cb && typeof cb =="function"){
                            //     peelContainer.addEventListener('webkitTransitionEnd', cb);
                            //     peelContainer.addEventListener('transitionend', cb);
                            // }

                        }
                    },pauseDuration);

                },

                scaleAnimation: function() {
                    // that.showContent(muteButton);
                    that.showContent(handButton);
                    peelContainer.removeEventListener('webkitTransitionEnd', that.scaleAnimation);
                    peelContainer.removeEventListener('transitionend', that.scaleAnimation);
                    EU.EventManager.fire("Peel_moveBackwardComplete");
                    peelContainer.classList.add('rm_peel_element_animation');
                    if(!whiteImage.classList.contains('whiteAnimation')){
                        whiteImage.classList.add('whiteAnimation');
                    }

                    that.initAnimation();
                },

                reset: function() {
                    that.resetAnimationTimers();
                    peelContainer.classList.remove('rm_peel_element_animation');
                    peelContainer.style.left = "149px";
                    whiteImage.classList.remove('whiteAnimation');
                    peelContainer.removeEventListener('webkitTransitionEnd', that.scaleAnimation);
                    peelContainer.removeEventListener('transitionend', that.scaleAnimation);
                    cube.removeEventListener('webkitTransitionEnd', that.moveBackWard);
                    cube.removeEventListener('transitionend', that.moveBackWard);
                    peelContainer.removeEventListener('webkitAnimationEnd', that.moveForward);
                    peelContainer.removeEventListener('animationend', that.moveForward);
                    peelContainer.removeEventListener('webkitTransitionEnd', that.cubeAnimation);
                    peelContainer.removeEventListener('transitionend', that.cubeAnimation);
                },

                resetAnimationTimers: function() {
                    if(moveBackwardTimer) {
                        clearTimeout(moveBackwardTimer);
                        moveBackwardTimer = null;
                    }

                    if(cubeTimer) {
                        clearTimeout(cubeTimer);
                        cubeTimer = null;
                    }
                },

                pause: function() {
                    var animationHack;
                    pauseFlag = true;
                    that.exitTeaserAnimation();
                    that.reset();
                    // container.style.display = "block";
                    //container.style.opacity = 1;
                    that.hideContent(peelContent);
                    that.hideContent(whiteImage);
                    that.hideContent(peelContainer);
                    // EU.EventManager.fire("Peel_hidden");
                    that.hideContent(cube);
                    // that.hideContent(muteButton);
                    that.hideContent(handButton);
                    peelContainer.classList.add('zeroTime');
                    peelContent.classList.add('zeroTime');
                    whiteImage.classList.add('zeroTime');
                    animationHack = peelContainer.clientWidth;
                    peelContainer.addEventListener('webkitTransitionEnd', that.pauseAnimation);
                    peelContainer.addEventListener('transitionend', that.pauseAnimation);
                    peelContainer.style[prefix + "Transform"] = "translate3d(100px ,0 ,0)";
                    peelContent.style[prefix + "Transform"] = "translate3d(100px ,0 ,0)";
                    whiteImageContainer.style[prefix + "Transform"] = "translate3d(100px ,0 ,0)";
                    whiteImage.style[prefix + "Transform"] = "skewX(-7deg)";
                    animationHack = null;
                },

                pauseAnimation: function() {
                    container.style.opacity = 1;
                    peelContainer.classList.remove('zeroTime');
                    peelContent.classList.remove('zeroTime');
                    whiteImage.classList.remove('zeroTime');
                    peelContainer.style[prefix + "Transition" + "Duration"] = '.3s';
                    peelContent.style[prefix + "Transition" + "Duration"] = '.3s';
                    whiteImageContainer.style[prefix + "Transition"] = '.3s linear';
                    that.hideContent(cube);
                    // that.hideContent(muteButton);
                    that.hideContent(handButton);
                    that.showContent(peelContent);
                    that.showContent(peelContainer);
                    // EU.EventManager.fire("Peel_visible");
                    that.showContent(whiteImage);
                    //that.showContent(explore);
                    peelContainer.classList.add('transition');
                    peelContent.classList.add('transition');
                    whiteImage.classList.add('transition');
                    peelContainer.style[prefix + "Transform"] = "translate3d(-149px ,0 ,0)";
                    peelContent.style[prefix + "Transform"] = "translate3d(-149px ,0 ,0)";
                    whiteImageContainer.style[prefix + "Transform"] = "translate3d(-149px ,0 ,0)";
                    whiteImage.style[prefix + "Transform"] = "skewX(-7deg)";
                    that.showContent(replay);
                    peelContainer.removeEventListener('webkitTransitionEnd', that.pauseAnimation);
                    peelContainer.removeEventListener('transitionend', that.pauseAnimation);

                    that.repeateAnimation(replay);
                },



                pauseTeaser: function() {
                    that.pause();
                },

                exitTeaserAnimation: function(animateOpacity, animatingCb , animatedCb) {
                    animateOpacity = (animateOpacity === undefined || animateOpacity === true)?true: false; // by default true

                    that.exitAnimation = true;
                    var animationHack ;
                    that.reset();
                    // that.hideContent(muteButton);
                    that.hideContent(handButton);
                    that.hideContent(peelContent);
                    peelContainer.style[prefix + "Transition" + "Duration"] = '.3s';
                    peelContent.style[prefix + "Transition" + "Duration"] = '.3s';
                    whiteImageContainer.style[prefix + "Transition"] = '.3s linear';
                    animationHack = peelContainer.clientWidth;
                    peelContainer.style[prefix + "Transform"] = "translate3d(90px ,0 ,0)";
                    peelContent.style[prefix + "Transform"] = "translate3d(90px ,0 ,0)";
                    whiteImageContainer.style[prefix + "Transform"] = "translate3d(90px ,0 ,0)";
                    whiteImage.style[prefix + "Transform"] = "skewX(-7deg)";
                    // evtContainer.style[prefix + "Transform"] = "translate3d(-90px ,0 ,0)";
                    // container.style.opacity = 0;
                    // container.style.display = "none";
                    if(animateOpacity){
                        EU.EventManager.fire("Peel_moveBackwardExitStarted");
                        container.addEventListener('webkitTransitionEnd', that.opacityAnimationCallback);
                        container.addEventListener('transitionend', that.opacityAnimationCallback);


                    }else{
                            typeof animatingCb === 'function'?animatingCb.call(this):"";
                            container.addEventListener('webkitTransitionEnd', function instantAnimEnd() {
                                container.removeEventListener('webkitTransitionEnd',instantAnimEnd, false);
                                typeof animatedCb === 'function'?animatedCb.call(this):"";
                                container.style.opacity = 0;
                                // container.style.display = "none";
                            });
                            container.addEventListener('transitionend', function instantAnimEnd() {
                                container.removeEventListener('transitionend',instantAnimEnd, false);
                                typeof animatedCb === 'function'?animatedCb.call(this):"";
                                container.style.opacity = 0;
                                // container.style.display = "none";
                            });


                    }



                    animationHack = null;
                    // var exitAnim = function () {
                    //     that.exitAnimation = true;
                    //     var animationHack ;
                    //     that.reset();
                    //     // that.hideContent(muteButton);
                    //     that.hideContent(handButton);
                    //     that.hideContent(peelContent);
                    //     peelContainer.style[prefix + "Transition" + "Duration"] = '.3s'
                    //     peelContent.style[prefix + "Transition" + "Duration"] = '.3s';
                    //     whiteImageContainer.style[prefix + "Transition"] = '.3s linear';
                    //     animationHack = peelContainer.clientWidth;
                    //     peelContainer.style[prefix + "Transform"] = "translate3d(90px ,0 ,0)";
                    //     peelContent.style[prefix + "Transform"] = "translate3d(90px ,0 ,0)";
                    //     whiteImageContainer.style[prefix + "Transform"] = "translate3d(90px ,0 ,0)";
                    whiteImage.style[prefix + "Transform"] = "skewX(-7deg)";
                    //     container.style.opacity = 0;
                    //     container.style.display = "none";
                    //
                    //     container.addEventListener('webkitTransitionEnd', that.opacityAnimationCallback);
                    //     container.addEventListener('transitionend', that.opacityAnimationCallback);
                    //     animationHack = null;
                    // };
                    // if(moveBack){
                    //     this.moveBackWard(function(){
                    //        exitAnim();
                    //     }.bind(this),true)
                    // }else{
                    //     exitAnim();
                    // }

                    //}, 0);

                },

                opacityAnimationCallback : function (){
                    // force current animationto complete
                    container.removeEventListener('webkitTransitionEnd', that.opacityAnimationCallback);
                    container.removeEventListener('transitionend', that.opacityAnimationCallback);
                    if (pauseFlag || !that.exitAnimation) {
                        return;
                    }
                    container.style.opacity = 0;
                    EU.EventManager.fire("Peel_moveBackwardExitComplete");
                    // container.style.display = "none";
                    //container.style.opacity = 1;

                },

                entryPeelAnimation: function() {
                    // container.style.opacity = 0;
                    // container.style.display = "none";


                    var animate = function() {
                        pauseFlag = true;
                        var animationHack ;
                        that.exitAnimation = false;
                        container.style.display = "block";
                        animationHack = container.clientWidth;
                        container.style.opacity = 1;
                        that.reset();
                        container.addEventListener('webkitTransitionEnd', that.endEntryPeelanim);
                        container.addEventListener('transitionend', that.endEntryPeelanim);

                        peelContainer.style[prefix + "Transform"] = "translate3d(0px ,0 ,0)";
                        peelContent.style[prefix + "Transform"] = "translate3d(0px ,0 ,0)";
                        whiteImageContainer.style[prefix + "Transform"] = "translate3d(0px ,0 ,0)";
                        whiteImage.style[prefix + "Transform"] = "skewX(-7deg)";

                        peelContainer.classList.add('rm_peel_element_animation');
                        if(!whiteImage.classList.contains('whiteAnimation')){
                            whiteImage.classList.add('whiteAnimation');
                        }
                        //that.showContent(explore);
                        // that.showContent(muteButton);
                        that.showContent(handButton);
                        that.showContent(peelContent);
                        peelContainer.style[prefix + "Transition" + "Duration"] = '.5s';
                        peelContent.style[prefix + "Transition" + "Duration"] = '.5s';
                        whiteImageContainer.style[prefix + "Transition"] = '.5s linear';
                        that.initAnimation();
                    };
                    if(!showingRemainingTime)  {
                        animate.call(this);
                    }else{
                        that.moveForward();
                    }


                },

                endEntryPeelanim : function () {
                    container.removeEventListener('webkitTransitionEnd', that.endEntryPeelanim);
                    container.removeEventListener('transitionend', that.endEntryPeelanim);
                    EU.EventManager.fire('Peel_moveForwardEntryComplete');

                },

                hideElements: function() {
                    that.hideContent(logo);
                },

                showRemainingTime: function() {
                    showingRemainingTime = true;
                    that.reset();
                    peelContainer.classList.add('rm_peel_element_animation');
                    that.showContent(container);
                    that.moveForward();
                    that.hideContent(logo);
                    // that.disableTransition(exploreNow,true);
                    that.hideContent(dynamicPeelContainer);
                    that.showContent(exploreNow);
                    that.showContent(contentStarting);

                    // that.hideContent(logo);
                    // that.showContent(exploreNow);

                },

                hideRemainingTime: function() {
                    showingRemainingTime = false;

                    that.showContent(logo);
                    that.hideContent(exploreNow);
                    that.hideContent(contentStarting);
                },

                disableTransition: function (elem,isDisabled) {
                    if(elem.classList.contains('disableTransition')){
                        !isDisabled?elem.classList.remove('disableTransition'):"";
                    }else{
                        isDisabled?elem.classList.add('disableTransition'):"";
                    }
                },

                displayRemainingTimeMessage: function(message) {
                    // this.reset();
                    var txt = "";
                    if(message) {
                        // this.reset();
                        var data = that.modelObj.getLanguageString();
                        if(!showingRemainingTime) {
                            // debugger;
                            that.showRemainingTime();
                        }
                        txt = data.content_starting_in.text +"  " + message;
                        contentStarting.innerHTML = txt.toUpperCase();
                    } else {
                        if(showingRemainingTime) {
                            that.hideRemainingTime();
                        }
                    }
                }

            });

        return new PeelView();
    }, version);

}(window, window.EU, window.EXPO_PUB));

/***
 * Config contains the dynamic values which required
 * for the peel component
 * @type {{id: string, events: {initialize: string, addedToDom: string, removedFromDom: string, clicked: string}, lan: string, languageText: {en: {EXPLORE: string, ROLLOVER_TO_EXPLORE: string, VDX_BY_Exponential: string}}, peelContainerDimension: {width: number, height: number}}}
 */

(function(W, EXPO_PUB) {
    "use strict";
    var version = "1.0.0";

    EXPO_PUB.registerPlugin('PeelConfig', function() {
        var PeelConfig = {

            id: 'peelContainer',

            events: {
                initialize: "initialize",
                addedToDom: "added to dom",
                removedFromDom: "removedFromDom",
                clicked: "clicked"
            },

            languageText: {
                "explore": "Explore",
                "rollover-to-explore": "Rollover to explore",
                "rollover-to-explore-now": "Rollover to explore now",
                "content-starting-in": "Content starting in",
                "click-to-replay" : "Click to replay",
                "VDX_BY_Exponential" :"VDX BY Exponential"
            },
            assets: {
                mute: "mute.gif",
                hand: "hand.png",
                backGroundImage: "bg.png",
                peel_dummy: "peel_dummy.png",
                whiteMC: "whiteMC.png",
                peel_bg: "peel_bg.png"
            },

            peelContainerDimension: {
                "160x600":{
                    width: 253,
                    height: 90
                },
                "300x250" :{
                    width: 253,
                    height: 90
                },
                "300x600":{
                    width: 253,
                    height: 90
                },
                "728x90":{
                    width: 253,
                    height: 90
                },
                "970x250":{
                    width: 253,
                    height: 90
                }

            }

        };

        return PeelConfig;

    }, version);
}(window, window.EXPO_PUB));

(function(W, EXPO_CREATIVE, EXPO_PUB) {
    "use strict";

    var version = '1.0.0';

    function domUtilityDef(expo) {
        /*
         * Please define all private variable here
         */
        var prefixMap = {
            'ms': 'ms',
            'moz': 'Moz',
            'webkit': 'Webkit'
        };
        var domUtility = EU.CreateClass({
            pfx  : ["webkit", "moz", "MS", "o", ""],
            customEvent : function (event, params) {
                try {
                    new CustomEvent('test');
                    return CustomEvent(event, params);
                } catch(e) {
                    // ignore this error and continue below
                }

                function customEvent ( event, params ) {
                    params = params || { bubbles: false, cancelable: false, detail: undefined };
                    var evt = document.createEvent( 'CustomEvent' );
                    evt.initCustomEvent( event, params.bubbles, params.cancelable, params.detail );
                    return evt;
                };

                customEvent.prototype = window.Event.prototype;
                return new customEvent(event,params);
            },
            hasClass : function (element, className) {
                if (element.classList) {
                    return element.classList.contains(className);
                }
                return (-1 < element.className.indexOf(className));
            },
            addClass : function (element, className) {
                if (element.classList) {
                    return element.classList.add(className);
                } else if (!this.hasClass(element, className)) {
                    var classes = element.className.split(" ");
                    classes.push(className);
                    element.className = classes.join(" ");
                }
                return element;
            },
            removeClass : function (element, className) {
                if (element.classList) {
                    return element.classList.remove(className);
                } else {
                    var classes = element.className.split(" ");
                    classes.push(className);
                    element.className = classes.join(" ");
                }
                return element;
            },
            addPrefixedEventListener : function (element, type, callback) {
                var i = 0;
                for (i = 0; i < this.pfx.length; i++) {
                    if (!this.pfx[i]) type = type;
                    element.addEventListener(this.pfx[i]+type, callback, false);
                }
            },
            removePrefixedEventListener : function (element , type, callback) {
                for (var p = 0; p < this.pfx.length; p++) {
                    if (!this.pfx[p]) type = type.toLowerCase();
                    element.removeEventListener(this.pfx[p]+type, callback, false);
                }
            },
            show : function(element) {
                element.style.display = "";
            },

            hide : function(element) {
                element.style.display = "none";
            },
            vendorPrefix : function (){
                var styles = window.getComputedStyle(document.documentElement, '');
                var pre = (Array.prototype.slice
                        .call(styles)
                        .join('')
                        .match(/-(moz|webkit|ms)-/) || (styles.OLink === '' && ['', 'o'])
                )[1];

                return  prefixMap[(pre || '').toLowerCase()];
            },
            addCssRules : function(selector, rules, /*Optional*/ sheetName) {
                // We want the last sheet so that rules are not overridden.
                var styleSheet = document.styleSheets[document.styleSheets.length - 1];
                if (sheetName) {
                    for (var i in document.styleSheets) {
                        if (document.styleSheets[i].href && document.styleSheets[i].href.indexOf(sheetName) > -1) {
                            styleSheet = document.styleSheets[i];
                            break;
                        }
                    }
                }
                if (typeof styleSheet === 'undefined' || styleSheet === null) {
                    var styleElement = document.createElement("style");
                    styleElement.type = "text/css";
                    document.head.appendChild(styleElement);
                    styleSheet = styleElement.sheet;
                }

                if (styleSheet) {
                    if (styleSheet.insertRule) {
                        var str = selector +  "{" + rules + "}";
                        styleSheet.insertRule(str, styleSheet.cssRules ? styleSheet.cssRules.length : 0);
                    }
                    else if (styleSheet.addRule)
                        styleSheet.addRule(selector, rules);
                }
            },
            isWebkitBrowser : function() {
                return (/WebKit/.test(navigator.userAgent));
            },
            attachEvent :function(element,type,callback){
                element.addEventListener(type,callback,false);
            },
            detachEvent : function(element,type,callback){
                element.removeEventListener('type',callback,false);
            },
            injectFont :function(fontDetailsObj,model) {
                var suffixes = {
                    eot: "embedded-opentype",
                    woff: "woff",
                    ttf: 'truetype',
                    svg : 'svg'
                };
                var styleArr = [];
                var styleText = "@font-face {\n";
                var fontPath = fontDetailsObj.fontBaseLoc;
                styleText = styleText + "font-family:" + "'" +  fontDetailsObj.fontName + "';\n";



                var fontFileObj = fontDetailsObj.files;
                var fileKeys = Object.keys(fontFileObj);
                for(var i=0;i<fileKeys.length;i++) {
                    var st = "";
                    st = i === 0 ? (st + "src:"):"";

                    var frag =  "url('"+ fontPath + fontFileObj[fileKeys[i]] + "?"
                        + fontDetailsObj.versionStr;
                    // var firstEnd = i===0? ( st + "#iefix" + "')") : (st+ "')");
                    st = i === 0? (st + frag +  "');\n"  + "src:" + frag +  "#iefix" + "')" ): st+ frag + "')";

                    st = st + " format('" + suffixes[fileKeys[i]] + "')";
                    styleArr.push(st);
                }


                styleText = styleText +styleArr.join(",\n");
                styleText = styleText + ";\nfont-weight: normal;\n"
                    + "font-style: normal; \n}";


                var styleObj = document.createElement("style");

                // var styleText = "@font-face { \n font-family: 'icomoon';\n" +
                //     "src:url('"+fontPath+"/icomoon.eot?po37ye');\n"+
                //     "src:url('"+fontPath+"/icomoon.eot?po37ye#iefix') format('embedded-opentype'),\n" +
                //     "url('"+fontPath+"/icomoon.ttf?po37ye') format('truetype'),\n"
                //     +"url('"+fontPath+"/icomoon.woff?po37ye') format('woff'),\n"
                //     + "url('"+fontPath+"/icomoon.svg?po37ye#icomoon') format('svg');\n"
                //     + "font-weight: normal;\n"
                //     + "font-style: normal; }";
                styleObj.type = 'text/css';
                if (styleObj.styleSheet){
                    styleObj.styleSheet.cssText = styleText;
                } else {
                    styleObj.appendChild(document.createTextNode(styleText));
                }


                document.getElementsByTagName('head')[0].appendChild(styleObj);
            },
            calculateFontSize : function(txtnode,maxNodeWidth,currentFontSize,minFontSize){
                var newSpan = document.createElement('span');
                newSpan.id = "dummyid";
                newSpan.style.opacity = "0";
                var textNode = document.createTextNode(txtnode);
                document.body.appendChild(newSpan);
                newSpan.appendChild(textNode);
                while (newSpan.offsetWidth > maxNodeWidth) {
                    currentFontSize --;
                    newSpan.style.fontSize = currentFontSize +"px";
                    if(currentFontSize === minFontSize){
                        break;
                    }
                }
                document.body.removeChild(newSpan);
                return currentFontSize;
            }


        });


        return new domUtility();
    }

    if (EXPO_CREATIVE) {
        EXPO_CREATIVE.registerPlugin('domUtility', domUtilityDef, version);
    }

    if (EXPO_PUB) {
        EXPO_PUB.registerPlugin('domUtility', domUtilityDef, version);
    }
})(window, window.EXPO_CREATIVE, window.EXPO_PUB);



