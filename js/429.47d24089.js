(self["webpackChunkwillykidd_github_io"]=self["webpackChunkwillykidd_github_io"]||[]).push([[429],{7460:function(t,e){var n,s,i;
/* @license
Papa Parse
v5.4.0
https://github.com/mholt/PapaParse
License: MIT
*/!function(o,r){s=[],n=r,i="function"===typeof n?n.apply(e,s):n,void 0===i||(t.exports=i)}(0,(function t(){"use strict";var e="undefined"!=typeof self?self:"undefined"!=typeof window?window:void 0!==e?e:{},n=!e.document&&!!e.postMessage,s=e.IS_PAPA_WORKER||!1,i={},o=0,r={parse:function(n,s){var a=(s=s||{}).dynamicTyping||!1;if(y(a)&&(s.dynamicTypingFunction=a,a={}),s.dynamicTyping=a,s.transform=!!y(s.transform)&&s.transform,s.worker&&r.WORKERS_SUPPORTED){var h=function(){if(!r.WORKERS_SUPPORTED)return!1;var n,s,a=(n=e.URL||e.webkitURL||null,s=t.toString(),r.BLOB_URL||(r.BLOB_URL=n.createObjectURL(new Blob(["var global = (function() { if (typeof self !== 'undefined') { return self; } if (typeof window !== 'undefined') { return window; } if (typeof global !== 'undefined') { return global; } return {}; })(); global.IS_PAPA_WORKER=true; ","(",s,")();"],{type:"text/javascript"})))),h=new e.Worker(a);return h.onmessage=m,h.id=o++,i[h.id]=h}();return h.userStep=s.step,h.userChunk=s.chunk,h.userComplete=s.complete,h.userError=s.error,s.step=y(s.step),s.chunk=y(s.chunk),s.complete=y(s.complete),s.error=y(s.error),delete s.worker,void h.postMessage({input:n,config:s,workerId:h.id})}var d=null;return r.NODE_STREAM_INPUT,"string"==typeof n?(n=function(t){return 65279===t.charCodeAt(0)?t.slice(1):t}(n),d=s.download?new p(s):new l(s)):!0===n.readable&&y(n.read)&&y(n.on)?d=new u(s):(e.File&&n instanceof File||n instanceof Object)&&(d=new c(s)),d.stream(n)},unparse:function(t,e){var n=!1,s=!0,i=",",o="\r\n",a='"',h=a+a,p=!1,c=null,l=!1;!function(){if("object"==typeof e){if("string"!=typeof e.delimiter||r.BAD_DELIMITERS.filter((function(t){return-1!==e.delimiter.indexOf(t)})).length||(i=e.delimiter),("boolean"==typeof e.quotes||"function"==typeof e.quotes||Array.isArray(e.quotes))&&(n=e.quotes),"boolean"!=typeof e.skipEmptyLines&&"string"!=typeof e.skipEmptyLines||(p=e.skipEmptyLines),"string"==typeof e.newline&&(o=e.newline),"string"==typeof e.quoteChar&&(a=e.quoteChar),"boolean"==typeof e.header&&(s=e.header),Array.isArray(e.columns)){if(0===e.columns.length)throw new Error("Option columns is empty");c=e.columns}void 0!==e.escapeChar&&(h=e.escapeChar+a),("boolean"==typeof e.escapeFormulae||e.escapeFormulae instanceof RegExp)&&(l=e.escapeFormulae instanceof RegExp?e.escapeFormulae:/^[=+\-@\t\r].*$/)}}();var u=new RegExp(f(a),"g");if("string"==typeof t&&(t=JSON.parse(t)),Array.isArray(t)){if(!t.length||Array.isArray(t[0]))return d(null,t,p);if("object"==typeof t[0])return d(c||Object.keys(t[0]),t,p)}else if("object"==typeof t)return"string"==typeof t.data&&(t.data=JSON.parse(t.data)),Array.isArray(t.data)&&(t.fields||(t.fields=t.meta&&t.meta.fields||c),t.fields||(t.fields=Array.isArray(t.data[0])?t.fields:"object"==typeof t.data[0]?Object.keys(t.data[0]):[]),Array.isArray(t.data[0])||"object"==typeof t.data[0]||(t.data=[t.data])),d(t.fields||[],t.data||[],p);throw new Error("Unable to serialize unrecognized input");function d(t,e,n){var r="";"string"==typeof t&&(t=JSON.parse(t)),"string"==typeof e&&(e=JSON.parse(e));var a=Array.isArray(t)&&0<t.length,h=!Array.isArray(e[0]);if(a&&s){for(var p=0;p<t.length;p++)0<p&&(r+=i),r+=g(t[p],p);0<e.length&&(r+=o)}for(var c=0;c<e.length;c++){var l=a?t.length:e[c].length,u=!1,d=a?0===Object.keys(e[c]).length:0===e[c].length;if(n&&!a&&(u="greedy"===n?""===e[c].join("").trim():1===e[c].length&&0===e[c][0].length),"greedy"===n&&a){for(var f=[],m=0;m<l;m++){var _=h?t[m]:m;f.push(e[c][_])}u=""===f.join("").trim()}if(!u){for(var j=0;j<l;j++){0<j&&!d&&(r+=i);var A=a&&h?t[j]:j;r+=g(e[c][A],j)}c<e.length-1&&(!n||0<l&&!d)&&(r+=o)}}return r}function g(t,e){if(null==t)return"";if(t.constructor===Date)return JSON.stringify(t).slice(1,25);var s=!1;l&&"string"==typeof t&&l.test(t)&&(t="'"+t,s=!0);var o=t.toString().replace(u,h);return(s=s||!0===n||"function"==typeof n&&n(t,e)||Array.isArray(n)&&n[e]||function(t,e){for(var n=0;n<e.length;n++)if(-1<t.indexOf(e[n]))return!0;return!1}(o,r.BAD_DELIMITERS)||-1<o.indexOf(i)||" "===o.charAt(0)||" "===o.charAt(o.length-1))?a+o+a:o}}};if(r.RECORD_SEP=String.fromCharCode(30),r.UNIT_SEP=String.fromCharCode(31),r.BYTE_ORDER_MARK="\ufeff",r.BAD_DELIMITERS=["\r","\n",'"',r.BYTE_ORDER_MARK],r.WORKERS_SUPPORTED=!n&&!!e.Worker,r.NODE_STREAM_INPUT=1,r.LocalChunkSize=10485760,r.RemoteChunkSize=5242880,r.DefaultDelimiter=",",r.Parser=g,r.ParserHandle=d,r.NetworkStreamer=p,r.FileStreamer=c,r.StringStreamer=l,r.ReadableStreamStreamer=u,e.jQuery){var a=e.jQuery;a.fn.parse=function(t){var n=t.config||{},s=[];return this.each((function(t){if("INPUT"!==a(this).prop("tagName").toUpperCase()||"file"!==a(this).attr("type").toLowerCase()||!e.FileReader||!this.files||0===this.files.length)return!0;for(var i=0;i<this.files.length;i++)s.push({file:this.files[i],inputElem:this,instanceConfig:a.extend({},n)})})),i(),this;function i(){if(0!==s.length){var e,n,i,h,p=s[0];if(y(t.before)){var c=t.before(p.file,p.inputElem);if("object"==typeof c){if("abort"===c.action)return e="AbortError",n=p.file,i=p.inputElem,h=c.reason,void(y(t.error)&&t.error({name:e},n,i,h));if("skip"===c.action)return void o();"object"==typeof c.config&&(p.instanceConfig=a.extend(p.instanceConfig,c.config))}else if("skip"===c)return void o()}var l=p.instanceConfig.complete;p.instanceConfig.complete=function(t){y(l)&&l(t,p.file,p.inputElem),o()},r.parse(p.file,p.instanceConfig)}else y(t.complete)&&t.complete()}function o(){s.splice(0,1),i()}}}function h(t){this._handle=null,this._finished=!1,this._completed=!1,this._halted=!1,this._input=null,this._baseIndex=0,this._partialLine="",this._rowCount=0,this._start=0,this._nextChunk=null,this.isFirstChunk=!0,this._completeResults={data:[],errors:[],meta:{}},function(t){var e=A(t);e.chunkSize=parseInt(e.chunkSize),t.step||t.chunk||(e.chunkSize=null),this._handle=new d(e),(this._handle.streamer=this)._config=e}.call(this,t),this.parseChunk=function(t,n){if(this.isFirstChunk&&y(this._config.beforeFirstChunk)){var i=this._config.beforeFirstChunk(t);void 0!==i&&(t=i)}this.isFirstChunk=!1,this._halted=!1;var o=this._partialLine+t;this._partialLine="";var a=this._handle.parse(o,this._baseIndex,!this._finished);if(!this._handle.paused()&&!this._handle.aborted()){var h=a.meta.cursor;this._finished||(this._partialLine=o.substring(h-this._baseIndex),this._baseIndex=h),a&&a.data&&(this._rowCount+=a.data.length);var p=this._finished||this._config.preview&&this._rowCount>=this._config.preview;if(s)e.postMessage({results:a,workerId:r.WORKER_ID,finished:p});else if(y(this._config.chunk)&&!n){if(this._config.chunk(a,this._handle),this._handle.paused()||this._handle.aborted())return void(this._halted=!0);a=void 0,this._completeResults=void 0}return this._config.step||this._config.chunk||(this._completeResults.data=this._completeResults.data.concat(a.data),this._completeResults.errors=this._completeResults.errors.concat(a.errors),this._completeResults.meta=a.meta),this._completed||!p||!y(this._config.complete)||a&&a.meta.aborted||(this._config.complete(this._completeResults,this._input),this._completed=!0),p||a&&a.meta.paused||this._nextChunk(),a}this._halted=!0},this._sendError=function(t){y(this._config.error)?this._config.error(t):s&&this._config.error&&e.postMessage({workerId:r.WORKER_ID,error:t,finished:!1})}}function p(t){var e;(t=t||{}).chunkSize||(t.chunkSize=r.RemoteChunkSize),h.call(this,t),this._nextChunk=n?function(){this._readChunk(),this._chunkLoaded()}:function(){this._readChunk()},this.stream=function(t){this._input=t,this._nextChunk()},this._readChunk=function(){if(this._finished)this._chunkLoaded();else{if(e=new XMLHttpRequest,this._config.withCredentials&&(e.withCredentials=this._config.withCredentials),n||(e.onload=C(this._chunkLoaded,this),e.onerror=C(this._chunkError,this)),e.open(this._config.downloadRequestBody?"POST":"GET",this._input,!n),this._config.downloadRequestHeaders){var t=this._config.downloadRequestHeaders;for(var s in t)e.setRequestHeader(s,t[s])}if(this._config.chunkSize){var i=this._start+this._config.chunkSize-1;e.setRequestHeader("Range","bytes="+this._start+"-"+i)}try{e.send(this._config.downloadRequestBody)}catch(t){this._chunkError(t.message)}n&&0===e.status&&this._chunkError()}},this._chunkLoaded=function(){4===e.readyState&&(e.status<200||400<=e.status?this._chunkError():(this._start+=this._config.chunkSize?this._config.chunkSize:e.responseText.length,this._finished=!this._config.chunkSize||this._start>=function(t){var e=t.getResponseHeader("Content-Range");return null===e?-1:parseInt(e.substring(e.lastIndexOf("/")+1))}(e),this.parseChunk(e.responseText)))},this._chunkError=function(t){var n=e.statusText||t;this._sendError(new Error(n))}}function c(t){var e,n;(t=t||{}).chunkSize||(t.chunkSize=r.LocalChunkSize),h.call(this,t);var s="undefined"!=typeof FileReader;this.stream=function(t){this._input=t,n=t.slice||t.webkitSlice||t.mozSlice,s?((e=new FileReader).onload=C(this._chunkLoaded,this),e.onerror=C(this._chunkError,this)):e=new FileReaderSync,this._nextChunk()},this._nextChunk=function(){this._finished||this._config.preview&&!(this._rowCount<this._config.preview)||this._readChunk()},this._readChunk=function(){var t=this._input;if(this._config.chunkSize){var i=Math.min(this._start+this._config.chunkSize,this._input.size);t=n.call(t,this._start,i)}var o=e.readAsText(t,this._config.encoding);s||this._chunkLoaded({target:{result:o}})},this._chunkLoaded=function(t){this._start+=this._config.chunkSize,this._finished=!this._config.chunkSize||this._start>=this._input.size,this.parseChunk(t.target.result)},this._chunkError=function(){this._sendError(e.error)}}function l(t){var e;h.call(this,t=t||{}),this.stream=function(t){return e=t,this._nextChunk()},this._nextChunk=function(){if(!this._finished){var t,n=this._config.chunkSize;return n?(t=e.substring(0,n),e=e.substring(n)):(t=e,e=""),this._finished=!e,this.parseChunk(t)}}}function u(t){h.call(this,t=t||{});var e=[],n=!0,s=!1;this.pause=function(){h.prototype.pause.apply(this,arguments),this._input.pause()},this.resume=function(){h.prototype.resume.apply(this,arguments),this._input.resume()},this.stream=function(t){this._input=t,this._input.on("data",this._streamData),this._input.on("end",this._streamEnd),this._input.on("error",this._streamError)},this._checkIsFinished=function(){s&&1===e.length&&(this._finished=!0)},this._nextChunk=function(){this._checkIsFinished(),e.length?this.parseChunk(e.shift()):n=!0},this._streamData=C((function(t){try{e.push("string"==typeof t?t:t.toString(this._config.encoding)),n&&(n=!1,this._checkIsFinished(),this.parseChunk(e.shift()))}catch(t){this._streamError(t)}}),this),this._streamError=C((function(t){this._streamCleanUp(),this._sendError(t)}),this),this._streamEnd=C((function(){this._streamCleanUp(),s=!0,this._streamData("")}),this),this._streamCleanUp=C((function(){this._input.removeListener("data",this._streamData),this._input.removeListener("end",this._streamEnd),this._input.removeListener("error",this._streamError)}),this)}function d(t){var e,n,s,i=Math.pow(2,53),o=-i,a=/^\s*-?(\d+\.?|\.\d+|\d+\.\d+)([eE][-+]?\d+)?\s*$/,h=/^((\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d\.\d+([+-][0-2]\d:[0-5]\d|Z))|(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d([+-][0-2]\d:[0-5]\d|Z))|(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d([+-][0-2]\d:[0-5]\d|Z)))$/,p=this,c=0,l=0,u=!1,d=!1,m=[],_={data:[],errors:[],meta:{}};if(y(t.step)){var j=t.step;t.step=function(e){if(_=e,v())S();else{if(S(),0===_.data.length)return;c+=e.data.length,t.preview&&c>t.preview?n.abort():(_.data=_.data[0],j(_,p))}}}function C(e){return"greedy"===t.skipEmptyLines?""===e.join("").trim():1===e.length&&0===e[0].length}function S(){return _&&s&&(w("Delimiter","UndetectableDelimiter","Unable to auto-detect delimiting character; defaulted to '"+r.DefaultDelimiter+"'"),s=!1),t.skipEmptyLines&&(_.data=_.data.filter((function(t){return!C(t)}))),v()&&function(){if(_)if(Array.isArray(_.data[0])){for(var e=0;v()&&e<_.data.length;e++)_.data[e].forEach(n);_.data.splice(0,1)}else _.data.forEach(n);function n(e,n){y(t.transformHeader)&&(e=t.transformHeader(e,n)),m.push(e)}}(),function(){if(!_||!t.header&&!t.dynamicTyping&&!t.transform)return _;function e(e,n){var s,i=t.header?{}:[];for(s=0;s<e.length;s++){var o=s,r=e[s];t.header&&(o=s>=m.length?"__parsed_extra":m[s]),t.transform&&(r=t.transform(r,o)),r=k(o,r),"__parsed_extra"===o?(i[o]=i[o]||[],i[o].push(r)):i[o]=r}return t.header&&(s>m.length?w("FieldMismatch","TooManyFields","Too many fields: expected "+m.length+" fields but parsed "+s,l+n):s<m.length&&w("FieldMismatch","TooFewFields","Too few fields: expected "+m.length+" fields but parsed "+s,l+n)),i}var n=1;return!_.data.length||Array.isArray(_.data[0])?(_.data=_.data.map(e),n=_.data.length):_.data=e(_.data,0),t.header&&_.meta&&(_.meta.fields=m),l+=n,_}()}function v(){return t.header&&0===m.length}function k(e,n){return s=e,t.dynamicTypingFunction&&void 0===t.dynamicTyping[s]&&(t.dynamicTyping[s]=t.dynamicTypingFunction(s)),!0===(t.dynamicTyping[s]||t.dynamicTyping)?"true"===n||"TRUE"===n||"false"!==n&&"FALSE"!==n&&(function(t){if(a.test(t)){var e=parseFloat(t);if(o<e&&e<i)return!0}return!1}(n)?parseFloat(n):h.test(n)?new Date(n):""===n?null:n):n;var s}function w(t,e,n,s){var i={type:t,code:e,message:n};void 0!==s&&(i.row=s),_.errors.push(i)}this.parse=function(i,o,a){var h=t.quoteChar||'"';if(t.newline||(t.newline=function(t,e){t=t.substring(0,1048576);var n=new RegExp(f(e)+"([^]*?)"+f(e),"gm"),s=(t=t.replace(n,"")).split("\r"),i=t.split("\n"),o=1<i.length&&i[0].length<s[0].length;if(1===s.length||o)return"\n";for(var r=0,a=0;a<s.length;a++)"\n"===s[a][0]&&r++;return r>=s.length/2?"\r\n":"\r"}(i,h)),s=!1,t.delimiter)y(t.delimiter)&&(t.delimiter=t.delimiter(i),_.meta.delimiter=t.delimiter);else{var p=function(e,n,s,i,o){var a,h,p,c;o=o||[",","\t","|",";",r.RECORD_SEP,r.UNIT_SEP];for(var l=0;l<o.length;l++){var u=o[l],d=0,f=0,m=0;p=void 0;for(var _=new g({comments:i,delimiter:u,newline:n,preview:10}).parse(e),j=0;j<_.data.length;j++)if(s&&C(_.data[j]))m++;else{var A=_.data[j].length;f+=A,void 0!==p?0<A&&(d+=Math.abs(A-p),p=A):p=A}0<_.data.length&&(f/=_.data.length-m),(void 0===h||d<=h)&&(void 0===c||c<f)&&1.99<f&&(h=d,a=u,c=f)}return{successful:!!(t.delimiter=a),bestDelimiter:a}}(i,t.newline,t.skipEmptyLines,t.comments,t.delimitersToGuess);p.successful?t.delimiter=p.bestDelimiter:(s=!0,t.delimiter=r.DefaultDelimiter),_.meta.delimiter=t.delimiter}var c=A(t);return t.preview&&t.header&&c.preview++,e=i,n=new g(c),_=n.parse(e,o,a),S(),u?{meta:{paused:!0}}:_||{meta:{paused:!1}}},this.paused=function(){return u},this.pause=function(){u=!0,n.abort(),e=y(t.chunk)?"":e.substring(n.getCharIndex())},this.resume=function(){p.streamer._halted?(u=!1,p.streamer.parseChunk(e,!0)):setTimeout(p.resume,3)},this.aborted=function(){return d},this.abort=function(){d=!0,n.abort(),_.meta.aborted=!0,y(t.complete)&&t.complete(_),e=""}}function f(t){return t.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")}function g(t){var e,n=(t=t||{}).delimiter,s=t.newline,i=t.comments,o=t.step,a=t.preview,h=t.fastMode,p=e=void 0===t.quoteChar||null===t.quoteChar?'"':t.quoteChar;if(void 0!==t.escapeChar&&(p=t.escapeChar),("string"!=typeof n||-1<r.BAD_DELIMITERS.indexOf(n))&&(n=","),i===n)throw new Error("Comment character same as delimiter");!0===i?i="#":("string"!=typeof i||-1<r.BAD_DELIMITERS.indexOf(i))&&(i=!1),"\n"!==s&&"\r"!==s&&"\r\n"!==s&&(s="\n");var c=0,l=!1;this.parse=function(r,u,d){if("string"!=typeof r)throw new Error("Input must be a string");var g=r.length,m=n.length,_=s.length,j=i.length,A=y(o),C=[],S=[],v=[],k=c=0;if(!r)return X();if(t.header){var w=r.split(s)[0].split(n),E=[],R={},b=!1;for(var B in w){var M=w[B];y(t.transformHeader)&&(M=t.transformHeader(M,B));var L=M,H=R[M]||0;0<H&&(b=!0,L=M+"_"+H),R[M]=H+1,E.push(L)}if(b){var D=r.split(s);D[0]=E.join(n),r=D.join(s)}}if(h||!1!==h&&-1===r.indexOf(e)){for(var P=r.split(s),T=0;T<P.length;T++){if(v=P[T],c+=v.length,T!==P.length-1)c+=s.length;else if(d)return X();if(!i||v.substring(0,j)!==i){if(A){if(C=[],I(v.split(n)),J(),l)return X()}else I(v.split(n));if(a&&a<=T)return C=C.slice(0,a),X(!0)}}return X()}for(var N=r.indexOf(n,c),U=r.indexOf(s,c),O=new RegExp(f(p)+f(e),"g"),G=r.indexOf(e,c);;)if(r[c]!==e)if(i&&0===v.length&&r.substring(c,c+j)===i){if(-1===U)return X();c=U+_,U=r.indexOf(s,c),N=r.indexOf(n,c)}else if(-1!==N&&(N<U||-1===U))v.push(r.substring(c,N)),c=N+m,N=r.indexOf(n,c);else{if(-1===U)break;if(v.push(r.substring(c,U)),V(U+_),A&&(J(),l))return X();if(a&&C.length>=a)return X(!0)}else for(G=c,c++;;){if(-1===(G=r.indexOf(e,G+1)))return d||S.push({type:"Quotes",code:"MissingQuotes",message:"Quoted field unterminated",row:C.length,index:c}),z();if(G===g-1)return z(r.substring(c,G).replace(O,e));if(e!==p||r[G+1]!==p){if(e===p||0===G||r[G-1]!==p){-1!==N&&N<G+1&&(N=r.indexOf(n,G+1)),-1!==U&&U<G+1&&(U=r.indexOf(s,G+1));var F=K(-1===U?N:Math.min(N,U));if(r.substr(G+1+F,m)===n){v.push(r.substring(c,G).replace(O,e)),r[c=G+1+F+m]!==e&&(G=r.indexOf(e,c)),N=r.indexOf(n,c),U=r.indexOf(s,c);break}var x=K(U);if(r.substring(G+1+x,G+1+x+_)===s){if(v.push(r.substring(c,G).replace(O,e)),V(G+1+x+_),N=r.indexOf(n,c),G=r.indexOf(e,c),A&&(J(),l))return X();if(a&&C.length>=a)return X(!0);break}S.push({type:"Quotes",code:"InvalidQuotes",message:"Trailing quote on quoted field is malformed",row:C.length,index:c}),G++}}else G++}return z();function I(t){C.push(t),k=c}function K(t){var e=0;if(-1!==t){var n=r.substring(G+1,t);n&&""===n.trim()&&(e=n.length)}return e}function z(t){return d||(void 0===t&&(t=r.substring(c)),v.push(t),c=g,I(v),A&&J()),X()}function V(t){c=t,I(v),v=[],U=r.indexOf(s,c)}function X(t){return{data:C,errors:S,meta:{delimiter:n,linebreak:s,aborted:l,truncated:!!t,cursor:k+(u||0)}}}function J(){o(X()),C=[],S=[]}},this.abort=function(){l=!0},this.getCharIndex=function(){return c}}function m(t){var e=t.data,n=i[e.workerId],s=!1;if(e.error)n.userError(e.error,e.file);else if(e.results&&e.results.data){var o={abort:function(){s=!0,_(e.workerId,{data:[],errors:[],meta:{aborted:!0}})},pause:j,resume:j};if(y(n.userStep)){for(var r=0;r<e.results.data.length&&(n.userStep({data:e.results.data[r],errors:e.results.errors,meta:e.results.meta},o),!s);r++);delete e.results}else y(n.userChunk)&&(n.userChunk(e.results,o,e.file),delete e.results)}e.finished&&!s&&_(e.workerId,e.results)}function _(t,e){var n=i[t];y(n.userComplete)&&n.userComplete(e),n.terminate(),delete i[t]}function j(){throw new Error("Not implemented.")}function A(t){if("object"!=typeof t||null===t)return t;var e=Array.isArray(t)?[]:{};for(var n in t)e[n]=A(t[n]);return e}function C(t,e){return function(){t.apply(e,arguments)}}function y(t){return"function"==typeof t}return s&&(e.onmessage=function(t){var n=t.data;if(void 0===r.WORKER_ID&&n&&(r.WORKER_ID=n.workerId),"string"==typeof n.input)e.postMessage({workerId:r.WORKER_ID,results:r.parse(n.input,n.config),finished:!0});else if(e.File&&n.input instanceof File||n.input instanceof Object){var s=r.parse(n.input,n.config);s&&e.postMessage({workerId:r.WORKER_ID,results:s,finished:!0})}}),(p.prototype=Object.create(h.prototype)).constructor=p,(c.prototype=Object.create(h.prototype)).constructor=c,(l.prototype=Object.create(l.prototype)).constructor=l,(u.prototype=Object.create(h.prototype)).constructor=u,r}))},3429:function(t,e,n){"use strict";n.r(e),n.d(e,{default:function(){return b}});var s=n(6252),i=n(2262),o=n(3577),r=n(2049),a=n(8549),h="right",p=n(7460),c=n.n(p);const l=t=>((0,s.dD)("data-v-00a169be"),t=t(),(0,s.Cn)(),t),u={style:{padding:"2rem 4rem 1rem 4rem"}},d=l((()=>(0,s._)("h2",{class:"text"},[(0,s.Uk)(" Flight Log "),(0,s._)("img",{style:{display:"inline",width:"35px"},src:r,alt:"plane"})],-1))),f=l((()=>(0,s._)("br",null,null,-1))),g=l((()=>(0,s._)("h6",{class:"text"},"Hover on reg, airline and airport code to see details!",-1))),m={class:"ft-container"},_={key:0},j={style:{"text-decoration":"underline"}},A={key:1},C={style:{"text-decoration":"underline"}},y={key:2},S=["href"],v={key:3},k={created:function(){this.parseFile()},methods:{parseFile(){console.log("PARSING"),c().parse(this.raw,{header:!0,skipEmptyLines:!0,complete:t=>{this.content=t}})}},mounted(){document.title="Flight Log"},data(){let t={};const e={AAL:"American Airlines",AMU:"Air Macau",ARG:"Aerolíneas Argentinas",CCA:"Air China",CDG:"Shandong Airlines",CES:"China Eastern Airlines",CHH:"Hainan Airlines",CPA:"Cathay Pacific",CQH:"Spring Airlines",CSH:"Shanghai Airlines",CSN:"China Southern Airlines",CXA:"Xiamen Air",DKH:"Juneyao Airlines",DSM:"LATAM Argentina",GAP:"AirPhil Express",HDA:"Dragon Air",JBU:"JetBlue",MXY:"Breeze Airways",PAL:"Philippine Airlines",RLH:"Ruili Airlines",THY:"Turkish Airlines"},n={AEP:"Buenos Aires Aeroparque Jorge Newbery",BKK:"Bangkok Suvarnabhumi",BOS:"Boston Logan",CAN:"Guangzhou Baiyun",CLT:"Charlotte Douglas",DLU:"Dali Huangcaoba",DTW:"Detroit Metropolitan",DYG:"Zhangjiajie Hehua",EZE:"Buenos Aires Ministro Pistarini",FTE:"El Calafate",GRU:"São Paulo Guarulhos",HKG:"Hong Kong Chek Lap Kok",IST:"Istanbul",IGR:"Cataratas del Iguazú",JJN:"Quanzhou Jinjiang",KMG:"Kunming Changshui",LAX:"Los Angeles",MFM:"Macau",MNL:"Manila Ninoy Aquino",MPH:"Catican/Boracay",PVD:"Rhode Island T.F. Green",PVG:"Shanghai Pudong",SEA:"Seattle Tacoma",SHA:"Shanghai Hongqiao",SZX:"Shenzhen Bao'an",TFU:"Chengdu Tianfu",USH:"Ushuaia Malvinas Argentinas",WUX:"Sunan Shuofang",XMN:"Xiamen Gaoqi",XIY:"Xi'an Xianyang",ZHA:"Zhanjiang"},s="Date,Flight,Reg,From,To,Dist,Dep,Arr,Airline,Aircraft,Seat\n2023/11/28,AA1254,N576UW|https://cdn.jetphotos.com/400/5/62545_1605700249.jpg|https://cdn.jetphotos.com/full/5/62545_1605700249.jpg,CLT,PVD,683,07:31,08:57,AAL,A321,14F\n2023/11/27,AA611,N563UW|https://cdn.jetphotos.com/400/5/21866_1566281141.jpg|https://cdn.jetphotos.com/full/5/21866_1566281141.jpg,SEA,CLT,2275,22:22,05:38,AAL,A321,21F\n2023/11/22,B6197,N961JT|https://cdn.jetphotos.com/400/6/466794_1693976928.jpg|https://cdn.jetphotos.com/full/6/466794_1693976928.jpg,BOS,SEA,2489,20:22,23:19,JBU,A321,16F\n2023/09/08,B62036,N3125J|https://cdn.jetphotos.com/400/6/640394_1693483459.jpg|https://cdn.jetphotos.com/full/6/640394_1693483459.jpg,DTW,BOS,621,09:09,10:33,JBU,A223,18F\n2023/09/02,B61037,N318JB|https://cdn.jetphotos.com/400/6/90637_1652053492.jpg|https://cdn.jetphotos.com/full/6/90637_1652053492.jpg,BOS,DTW,621,17:26,19:12,JBU,E190,6D\n2023/08/30,MX701,N216BZ|https://cdn.jetphotos.com/400/5/1226511_1688864273.jpg|https://cdn.jetphotos.com/full/5/1226511_1688864273.jpg,LAX,PVD,2587,12:26,20:23,MXY,A223,5A\n2023/08/11,PR102,RP-C7777|https://cdn.jetphotos.com/400/5/96935_1652696389.jpg|https://cdn.jetphotos.com/full/5/96935_1652696389.jpg,MNL,LAX,7296,22:39,20:11,PAL,B77W,51A\n2023/08/11,PR357,RP-C9907|https://cdn.jetphotos.com/400/5/99578_1512987831.jpg|https://cdn.jetphotos.com/full/5/99578_1512987831.jpg,JJN,MNL,729,15:22,17:50,PAL,A321,43K\n2023/07/06,HO1060,B-8587|https://cdn.jetphotos.com/400/5/23047_1573133699.jpg|https://cdn.jetphotos.com/full/5/23047_1573133699.jpg,TFU,SHA,1006,20:48,22:56,DKH,A321,34A\n2023/06/30,HO1059,B-8068|https://cdn.jetphotos.com/400/6/48107_1625045717.jpg|https://cdn.jetphotos.com/full/6/48107_1625045717.jpg,SHA,TFU,1107,17:24,20:05,DKH,A321,41K\n2023/05/15,9C8922,B-6852|https://cdn.jetphotos.com/400/5/83777_1559148550.jpg|https://cdn.jetphotos.com/full/5/83777_1559148550.jpg,HKG,PVG,772,18:05,20:11,CQH,A320,7A\n2023/05/12,CX365,B-LAA|https://cdn.jetphotos.com/400/5/1606889_1686112376.jpg|https://cdn.jetphotos.com/full/5/1606889_1686112376.jpg,PVG,HKG,779,10:06,12:16,CPA,A333,54K\n2021/05/07,DR5310,B-7866|https://cdn.jetphotos.com/400/6/99111_1621348608.jpg|https://cdn.jetphotos.com/full/6/99111_1621348608.jpg,XIY,WUX,606,11:38,14:05,RLH,B738,7A\n2021/05/04,CZ5791,B-6135|https://cdn.jetphotos.com/400/6/76682_1645366796.jpg|https://cdn.jetphotos.com/full/6/76682_1645366796.jpg,PVG,XIY,688,10:22,12:40,CSN,A332,45K\n2020/02/02,MU506,B-6926|https://cdn.jetphotos.com/400/5/66757_1582880782.jpg|https://cdn.jetphotos.com/full/5/66757_1582880782.jpg,HKG,PVG,781,20:20,22:54,CES,A321,35A\n2020/02/02,TK70,TC-LJE|https://cdn.jetphotos.com/400/5/16090_1580077654.jpg|https://cdn.jetphotos.com/full/5/16090_1580077654.jpg,IST,HKG,4980,02:00,17:00,THY,B77W,16A\n2020/02/01,TK16,TC-JJU|https://cdn.jetphotos.com/400/6/11623_1585460432.jpg|https://cdn.jetphotos.com/full/6/11623_1585460432.jpg,GRU,IST,6569,04:05,22:30,THY,B77W,41K\n2020/02/02,TK16,TC-JJU|https://cdn.jetphotos.com/400/5/23788_1596117261.jpg|https://cdn.jetphotos.com/full/5/23788_1596117261.jpg,EZE,GRU,1071,23:50,02:25,THY,B77W,44K\n2020/01/29,AR1897,LV-GVC|https://cdn.jetphotos.com/400/6/74980_1535416733.jpg|https://cdn.jetphotos.com/full/6/74980_1535416733.jpg,USH,AEP,1481,15:20,18:40,ARG,B738,20F\n2020/01/26,LA7741,LV-BHU|https://cdn.jetphotos.com/400/5/18980_1565738801.jpg|https://cdn.jetphotos.com/full/5/18980_1565738801.jpg,FTE,USH,353,12:20,13:14,DSM,A320,12A\n2020/01/23,LA7732,LV-BFO|https://cdn.jetphotos.com/400/5/44799_1497677728.jpg|https://cdn.jetphotos.com/full/5/44799_1497677728.jpg,AEP,FTE,1287,08:35,11:35,DSM,A320,3L\n2020/01/19,LA7507,LV-FUX|https://cdn.jetphotos.com/400/6/20116_1558931099.jpg|https://cdn.jetphotos.com/full/6/20116_1558931099.jpg,IGR,AEP,654,16:18,17:34,DSM,A320,5L\n2020/01/17,LA7508,LV-BRA|https://cdn.jetphotos.com/400/6/66313_1591416668.jpg|https://cdn.jetphotos.com/full/6/66313_1591416668.jpg,AEP,IGR,654,19:10,20:48,DSM,A320,8L\n2020/01/02,TK15,TC-JJG|https://cdn.jetphotos.com/400/5/97795_1574616837.jpg|https://cdn.jetphotos.com/full/5/97795_1574616837.jpg,GRU,EZE,1071,19:30,22:25,THY,B77W,35A\n2020/01/02,TK16,TC-JJG|https://cdn.jetphotos.com/400/5/11944_1593669951.jpg|https://cdn.jetphotos.com/full/5/11944_1593669951.jpg,IST,GRU,6569,10:10,18:05,THY,B77W,35A\n2020/01/01,TK27,TC-JJM|https://cdn.jetphotos.com/400/6/60357_1555094481.jpg|https://cdn.jetphotos.com/full/6/60357_1555094481.jpg,PVG,IST,4988,23:05,06:15,THY,B77W,33K\n2019/08/29,9C8838,B-8370|https://cdn.jetphotos.com/400/5/43386_1572049955.jpg|https://cdn.jetphotos.com/full/5/43386_1572049955.jpg,XMN,SHA,500,14:55,16:45,CQH,A320,6E\n2019/07/10,9C8856,B-6751|https://cdn.jetphotos.com/400/6/19520_1562586205.jpg|https://cdn.jetphotos.com/full/6/19520_1562586205.jpg,CAN,SHA,731,16:10,18:30,CQH,A320,NA\n2019/07/06,HU7208,B-1133|https://cdn.jetphotos.com/400/5/13829_1581584836.jpg|https://cdn.jetphotos.com/full/5/13829_1581584836.jpg,PVG,SZX,767,11:55,14:30,CHH,B789,42A\n2019/06/15,CZ3908,B-6059|https://cdn.jetphotos.com/400/6/38670_1548129801.jpg|https://cdn.jetphotos.com/full/6/38670_1548129801.jpg,SHA,PEK,669,11:45,14:10,CSN,A332,40K\n2018/08/05,HU7141,B-1543|https://cdn.jetphotos.com/400/6/31332_1529068246.jpg|https://cdn.jetphotos.com/full/6/31332_1529068246.jpg,CAN,PVG,748,12:35,14:55,CHH,B789,44J\n2018/07/31,MU5315,B-1320|https://cdn.jetphotos.com/400/5/59368_1521874266.jpg|https://cdn.jetphotos.com/full/5/59368_1521874266.jpg,SHA,CAN,731,19:30,21:50,CES,B738,36K\n2017/07/15,HU7207,B-1501|https://cdn.jetphotos.com/400/5/17741_1595344859.jpg|https://cdn.jetphotos.com/full/5/17741_1595344859.jpg,SZX,PVG,767,08:20,10:40,CHH,B738,39A\n2017/07/09,CA1893,B-1833|https://cdn.jetphotos.com/400/6/86211_1529521353.jpg|https://cdn.jetphotos.com/full/6/86211_1529521353.jpg,PVG,SZX,767,07:25,10:00,CCA,A321,32A\n2016/07/04,FM9452,B-2567|https://cdn.jetphotos.com/400/5/34480_1500116963.jpg|https://cdn.jetphotos.com/full/5/34480_1500116963.jpg,KMG,SHA,1210,13:45,17:10,CSH,B763,35J\n2016/07/03,MU5944,B-5809|https://cdn.jetphotos.com/400/4/14636_1394874374.jpg|https://cdn.jetphotos.com/full/4/14636_1394874374.jpg,DLU,KMG,158,17:30,18:25,CES,B737,38A\n2016/06/30,MU5941,B-5256|https://cdn.jetphotos.com/400/5/43513_1514700825.jpg|https://cdn.jetphotos.com/full/5/43513_1514700825.jpg,KMG,DLU,158,09:05,09:50,CES,B737,37L\n2016/06/29,HO1121,B-6572|https://cdn.jetphotos.com/400/5/58278_1410430837.jpg|https://cdn.jetphotos.com/full/5/58278_1410430837.jpg,SHA,KMG,1210,08:35,11:50,DKH,A320,8A\n2015/10/06,MF8372,B-2869|https://cdn.jetphotos.com/400/6/22788_1529043616.jpg|https://cdn.jetphotos.com/full/6/22788_1529043616.jpg,KMG,DLU,752,13:30,16:05,CXA,B752,61A\n2015/10/03,FM9387,B-5261|https://cdn.jetphotos.com/400/5/39035_1542637481.jpg|https://cdn.jetphotos.com/full/5/39035_1542637481.jpg,PVG,ZHA,987,16:35,19:25,CSH,B737,35A\n2015/08/28,FM9344,B-1720|https://cdn.jetphotos.com/400/6/94581_1479140592.jpg|https://cdn.jetphotos.com/full/6/94581_1479140592.jpg,DYG,PVG,693,20:45,22:40,CSH,B738,34A\n2015/08/24,FM9343,B-5131|https://cdn.jetphotos.com/400/5/85827_1476071738.jpg|https://cdn.jetphotos.com/full/5/85827_1476071738.jpg,PVG,DYG,693,20:05,22:55,CSH,B738,34A\n2015/08/22,9C8838,B-6301|https://cdn.jetphotos.com/400/5/36428_1578705790.jpg|https://cdn.jetphotos.com/full/5/36428_1578705790.jpg,XMN,SHA,500,15:05,17:00,CQH,A320,N/A\n2015/08/17,SC4942,B-5348|https://cdn.jetphotos.com/400/5/89469_1545554789.jpg|https://cdn.jetphotos.com/full/5/89469_1545554789.jpg,PVG,XMN,500,11:25,13:20,CDG,B738,16A\n2014/07/02,MF8567,B-5028|https://cdn.jetphotos.com/400/5/36550_1522996209.jpg|https://cdn.jetphotos.com/full/5/36550_1522996209.jpg,XMN,SHA,500,11:00,12:30,CXA,B737,46L\n2014/06/27,MF8412,B-5602|https://cdn.jetphotos.com/400/5/64242_1592820324.jpg|https://cdn.jetphotos.com/full/5/64242_1592820324.jpg,SHA,XMN,500,11:20,12:50,CXA,B738,N/A\n2013/07/04,FM542,B-2566|https://cdn.jetphotos.com/400/5/67154_1579517515.jpg|https://cdn.jetphotos.com/full/5/67154_1579517515.jpg,BKK,PVG,1802,16:50,22:10,CSH,B763,35J\n2013/06/30,MU547,B-6052|https://cdn.jetphotos.com/400/3/86796_1328658765.jpg|https://cdn.jetphotos.com/full/3/86796_1328658765.jpg,PVG,BKK,1802,21:40,00:55,CES,A346,N/A\n2011/07/12,MU2008,N/A|https://cdn.jetphotos.com/400/2/94371_1210260562.jpg|https://cdn.jetphotos.com/full/2/94371_1210260562.jpg,MFM,PVG,803,16:00,18:10,CES,A320,N/A\n2011/07/07,MU2007,N/A|https://cdn.jetphotos.com/400/3/95532_1315723769.jpg|https://cdn.jetphotos.com/full/3/95532_1315723769.jpg,PVG,MFM,803,12:25,15:00,CES,A320,N/A\n2011/01/29,PR336,N/A|https://cdn.jetphotos.com/400/4/69641_1355460611.jpg|https://cdn.jetphotos.com/full/4/69641_1355460611.jpg,MNL,PVG,1152,12:05,15:50,PAL,A333,N/A\n2011/01/20,PR337,N/A|https://cdn.jetphotos.com/400/2/58434_1264343842.jpg|https://cdn.jetphotos.com/full/2/58434_1264343842.jpg,PVG,MNL,1152,16:55,20:50,PAL,A320,N/A\n2010/10/06,KA892,N/A|https://cdn.jetphotos.com/400/4/42302_1339158842.jpg|https://cdn.jetphotos.com/full/4/42302_1339158842.jpg,HKG,PVG,781,16:00,18:40,HDA,A321,N/A\n2010/10/06,CX906,N/A|https://cdn.jetphotos.com/400/6/51688_1444341754.jpg|https://cdn.jetphotos.com/full/6/51688_1444341754.jpg,MNL,HKG,??,10:50,13:30,CPA,A343,N/A\n2010/10/05,2P74,N/A|https://cdn.jetphotos.com/400/5/53328_1457690683.jpg|https://cdn.jetphotos.com/full/5/53328_1457690683.jpg,MPH,MNL,??,??,??,GAP,Dash8-300,N/A\n2010/10/03,2P??,RP-C3016|https://cdn.jetphotos.com/400/3/92542_1334287404.jpg|https://cdn.jetphotos.com/full/3/92542_1334287404.jpg,MNL,MPH,??,??,??,GAP,Dash8-300,N/A\n2010/10/02,CX918,N/A|https://cdn.jetphotos.com/400/6/79922_1417706255.jpg|https://cdn.jetphotos.com/full/6/79922_1417706255.jpg,HKG,MNL,712,14:20,16:35,CPA,B744,N/A\n2010/10/02,KA831,B-HYF|https://cdn.jetphotos.com/400/1/27982_1299503451.jpg|https://cdn.jetphotos.com/full/1/27982_1299503451.jpg,PVG,HKG,781,08:40,11:35,HDA,A333,N/A\n2010/08/31,PR336,N/A|https://cdn.jetphotos.com/400/4/79172_1321131511.jpg|https://cdn.jetphotos.com/full/4/79172_1321131511.jpg,MNL,PVG,1152,12:05,15:50,PAL,A333,N/A\n2010/08/26,PR337,N/A|https://cdn.jetphotos.com/400/6/17299_1586238940.jpg|https://cdn.jetphotos.com/full/6/17299_1586238940.jpg,PVG,MNL,1152,16:55,20:50,PAL,A333,N/A\n2010/06/29,NX110,N/A|https://cdn.jetphotos.com/400/2/49528_1214997745.jpg|https://cdn.jetphotos.com/full/2/49528_1214997745.jpg,MFM,PVG,803,??,??,AMU,A319,N/A\n2010/06/25,NX107,N/A|https://cdn.jetphotos.com/400/1/56248_1117980108.jpg|https://cdn.jetphotos.com/full/1/56248_1117980108.jpg,PVG,MFM,803,??,??,AMU,A319,N/A";return{raw:s,content:t,airlines:e,airports:n}}};var w=Object.assign(k,{__name:"FlightLog",setup(t){return(t,e)=>{const n=(0,s.Q2)("tooltip");return(0,s.wg)(),(0,s.iD)("div",u,[d,f,g,(0,s._)("div",m,[(0,s.Wm)((0,i.SU)(a.Sx),{class:"flight-table",hover:"",striped:"",borderless:""},{default:(0,s.w5)((()=>[(0,s.Wm)((0,i.SU)(a.V),null,{default:(0,s.w5)((()=>[(0,s.Wm)((0,i.SU)(a.T6),null,{default:(0,s.w5)((()=>[(0,s.Wm)((0,i.SU)(a.is),{scope:"col"},{default:(0,s.w5)((()=>[(0,s.Uk)("#")])),_:1}),((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(t.content.meta.fields,((t,e)=>((0,s.wg)(),(0,s.j4)((0,i.SU)(a.is),{scope:"col",key:"header-"+e},{default:(0,s.w5)((()=>[(0,s.Uk)((0,o.zw)(t.replace(/\s/g,"")),1)])),_:2},1024)))),128))])),_:1})])),_:1}),(0,s.Wm)((0,i.SU)(a.NR),null,{default:(0,s.w5)((()=>[((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(t.content.data,((e,r)=>((0,s.wg)(),(0,s.j4)((0,i.SU)(a.T6),{key:"row-"+r},{default:(0,s.w5)((()=>[(0,s.Wm)((0,i.SU)(a.is),null,{default:(0,s.w5)((()=>[(0,s.Uk)((0,o.zw)(r+1),1)])),_:2},1024),((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(t.content.meta.fields,((e,p)=>((0,s.wg)(),(0,s.j4)((0,i.SU)(a.NN),{key:"row-"+r+"-column-"+p},{default:(0,s.w5)((()=>["Airline"==e?((0,s.wg)(),(0,s.iD)("div",_,[(0,s.wy)(((0,s.wg)(),(0,s.iD)("div",j,[(0,s.Uk)((0,o.zw)(t.content.data[r][e].replace(/\s/g,"")),1)])),[[n,{content:t.airlines[t.content.data[r][e]],html:!0,placement:(0,i.SU)(h)}]])])):"From"==e||"To"==e?((0,s.wg)(),(0,s.iD)("div",A,[(0,s.wy)(((0,s.wg)(),(0,s.iD)("div",C,[(0,s.Uk)((0,o.zw)(t.content.data[r][e].replace(/\s/g,"")),1)])),[[n,{content:t.airports[t.content.data[r][e]],html:!0,placement:(0,i.SU)(h)}]])])):"Reg"==e?((0,s.wg)(),(0,s.iD)("div",y,[(0,s.wy)(((0,s.wg)(),(0,s.iD)("div",null,[(0,s._)("a",{href:t.content.data[r][e].split("|")[2]},[(0,s._)("span",null,(0,o.zw)(t.content.data[r][e].split("|")[0]),1)],8,S)])),[[n,{content:"<div><img src="+t.content.data[r][e].split("|")[1]+"></div>",html:!0,placement:(0,i.SU)(h)}]])])):((0,s.wg)(),(0,s.iD)("div",v,(0,o.zw)(t.content.data[r][e].replace(/\s/g,"")),1))])),_:2},1024)))),128))])),_:2},1024)))),128))])),_:1})])),_:1})])])}}}),E=n(3744);const R=(0,E.Z)(w,[["__scopeId","data-v-00a169be"]]);var b=R}}]);
//# sourceMappingURL=429.47d24089.js.map