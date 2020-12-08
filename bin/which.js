#!/usr/bin/env node
!function(e,t){"use strict";e.which=e.which||{};var n,s=function(){return x.__string_rec(this,"")},r=r||{};class i{constructor(e,t){this.r=new RegExp(e,t.split("u").join(""))}match(e){return this.r.global&&(this.r.lastIndex=0),this.r.m=this.r.exec(e),this.r.s=e,null!=this.r.m}matched(e){if(null!=this.r.m&&e>=0&&e<this.r.m.length)return this.r.m[e];throw _.thrown("EReg::matched")}}i.__name__=!0;class l{static cca(e,t){let n=e.charCodeAt(t);if(n==n)return n}static substr(e,t,n){if(null==n)n=e.length;else if(n<0){if(0!=t)return"";n=e.length+n}return e.substr(t,n)}static now(){return Date.now()}}l.__name__=!0;class a{static iter(e,t){let n=xe(e);for(;n.hasNext();)t(n.next())}static fold(e,t,n){let s=xe(e);for(;s.hasNext();)n=t(s.next(),n);return n}static find(e,t){let n=xe(e);for(;n.hasNext();){let e=n.next();if(t(e))return e}return null}}a.__name__=!0,Math.__name__=!0;class c{static string(e){return x.__string_rec(e,"")}static parseInt(e){if(null!=e){let t=0,n=e.length;for(;t<n;){let n=t++,s=e.charCodeAt(n);if(s<=8||s>=14&&32!=s&&45!=s){let t=e.charCodeAt(n+1),s=parseInt(e,120==t||88==t?16:10);return isNaN(s)?null:s}}}return null}}c.__name__=!0;class u{static isSpace(e,t){let n=l.cca(e,t);return n>8&&n<14||32==n}static ltrim(e){let t=e.length,n=0;for(;n<t&&u.isSpace(e,n);)++n;return n>0?l.substr(e,n,t-n):e}static rtrim(e){let t=e.length,n=0;for(;n<t&&u.isSpace(e,t-n-1);)++n;return n>0?l.substr(e,0,t-n):e}static trim(e){return u.ltrim(u.rtrim(e))}static lpad(e,t,n){if(t.length<=0)return e;let s="";for(n-=e.length;s.length<n;)s+=null==t?"null":""+t;return s+=null==e?"null":""+e,s}static replace(e,t,n){return e.split(t).join(n)}}u.__name__=!0;class o{static println(e){process.stdout.write(c.string(e)),process.stdout.write("\n")}static systemName(){let e=process.platform;switch(e){case"darwin":return"Mac";case"freebsd":return"BSD";case"linux":return"Linux";case"win32":return"Windows";default:return e}}}o.__name__=!0;class h{constructor(e,t){this.exitTrigger=new G;let n=this;this.process=b.spawn(e,t),this.stdin=ie.wrap("stdin",this.process.stdin);let s=null;s={},this.stderr=le.wrap("stderr",this.process.stderr,s.chunkSize,s.onEnd);let r=null;r={},this.stdout=le.wrap("stdout",this.process.stdout,r.chunkSize,r.onEnd),this.process.on("exit",(function(e,t){n.exitTrigger.trigger(e)}))}exitCode(){return this.exitTrigger}close(){}}h.__name__=!0;r["haxe.StackItem"]={__ename__:!0,__constructs__:["CFunction","Module","FilePos","Method","LocalFunction"],CFunction:{_hx_index:0,__enum__:"haxe.StackItem",toString:s},Module:(n=function(e){return{_hx_index:1,m:e,__enum__:"haxe.StackItem",toString:s}},n.__params__=["m"],n),FilePos:(n=function(e,t,n,r){return{_hx_index:2,s:e,file:t,line:n,column:r,__enum__:"haxe.StackItem",toString:s}},n.__params__=["s","file","line","column"],n),Method:(n=function(e,t){return{_hx_index:3,classname:e,method:t,__enum__:"haxe.StackItem",toString:s}},n.__params__=["classname","method"],n),LocalFunction:(n=function(e){return{_hx_index:4,v:e,__enum__:"haxe.StackItem",toString:s}},n.__params__=["v"],n)};class _ extends Error{constructor(e,t,n){super(e),this.message=e,this.__previousException=t,this.__nativeException=null!=n?n:this}unwrap(){return this.__nativeException}get_native(){return this.__nativeException}static caught(e){return e instanceof _?e:e instanceof Error?new _(e.message,null,e):new f(e,null,e)}static thrown(e){if(e instanceof _)return e.get_native();if(e instanceof Error)return e;return new f(e)}}_.__name__=!0;class f extends _{constructor(e,t,n){super(String(e),t,n),this.value=e}unwrap(){return this.value}}f.__name__=!0;class d{constructor(e){this.length=e.byteLength,this.b=new Uint8Array(e),this.b.bufferValue=e,e.hxBytes=this,e.bytes=this.b}blit(e,t,n,s){if(e<0||n<0||s<0||e+s>this.length||n+s>t.length)throw _.thrown(g.OutsideBounds);0==n&&s==t.b.byteLength?this.b.set(t.b,e):this.b.set(t.b.subarray(n,n+s),e)}getString(e,t,n){if(e<0||t<0||e+t>this.length)throw _.thrown(g.OutsideBounds);null==n&&(n=m.UTF8);let s="",r=this.b,i=e,l=e+t;switch(n._hx_index){case 0:for(;i<l;){let e=r[i++];if(e<128){if(0==e)break;s+=String.fromCodePoint(e)}else if(e<224){let t=(63&e)<<6|127&r[i++];s+=String.fromCodePoint(t)}else if(e<240){let t=(31&e)<<12|(127&r[i++])<<6|127&r[i++];s+=String.fromCodePoint(t)}else{let t=(15&e)<<18|(127&r[i++])<<12|(127&r[i++])<<6|127&r[i++];s+=String.fromCodePoint(t)}}break;case 1:for(;i<l;){let e=r[i++]|r[i++]<<8;s+=String.fromCodePoint(e)}}return s}toString(){return this.getString(0,this.length)}static ofData(e){let t=e.hxBytes;return null!=t?t:new d(e)}}d.__name__=!0;var m=r["haxe.io.Encoding"]={__ename__:!0,__constructs__:["UTF8","RawNative"],UTF8:{_hx_index:0,__enum__:"haxe.io.Encoding",toString:s},RawNative:{_hx_index:1,__enum__:"haxe.io.Encoding",toString:s}},g=r["haxe.io.Error"]={__ename__:!0,__constructs__:["Blocked","Overflow","OutsideBounds","Custom"],Blocked:{_hx_index:0,__enum__:"haxe.io.Error",toString:s},Overflow:{_hx_index:1,__enum__:"haxe.io.Error",toString:s},OutsideBounds:{_hx_index:2,__enum__:"haxe.io.Error",toString:s},Custom:(n=function(e){return{_hx_index:3,e,__enum__:"haxe.io.Error",toString:s}},n.__params__=["e"],n)};class p{constructor(e){switch(e){case".":case"..":return this.dir=e,void(this.file="")}let t=e.lastIndexOf("/"),n=e.lastIndexOf("\\");t<n?(this.dir=l.substr(e,0,n),e=l.substr(e,n+1,null),this.backslash=!0):n<t?(this.dir=l.substr(e,0,t),e=l.substr(e,t+1,null)):this.dir=null;let s=e.lastIndexOf(".");-1!=s?(this.ext=l.substr(e,s+1,null),this.file=l.substr(e,0,s)):(this.ext=null,this.file=e)}static extension(e){let t=new p(e);return null==t.ext?"":t.ext}static join(e){let t=[],n=0;for(;n<e.length;){let s=e[n];++n,null!=s&&""!=s&&t.push(s)}if(0==t.length)return"";let s=t[0],r=1,i=t.length;for(;r<i;)s=p.addTrailingSlash(s),s+=t[r++];return p.normalize(s)}static normalize(e){let t="/";if((e=e.split("\\").join(t))==t)return t;let n=[],s=0,r=e.split(t);for(;s<r.length;){let t=r[s];++s,".."==t&&n.length>0&&".."!=n[n.length-1]?n.pop():""==t?(n.length>0||47==l.cca(e,0))&&n.push(t):"."!=t&&n.push(t)}let i="",a=!1,c=!1,u=0,o=n.join(t);for(;u<o.length;){let e=o,t=u++,n=e.charCodeAt(t);n>=55296&&n<=56319&&(n=n-55232<<10|1023&e.charCodeAt(t+1));n>=65536&&++u;let s=n;switch(s){case 47:if(a){let e=s;a=!1,c&&(i+="/",c=!1),i+=String.fromCodePoint(e)}else c=!0;break;case 58:i+=":",a=!0;break;default:let e=s;a=!1,c&&(i+="/",c=!1),i+=String.fromCodePoint(e)}}return i}static addTrailingSlash(e){if(0==e.length)return"/";let t=e.lastIndexOf("/"),n=e.lastIndexOf("\\");return t<n?n!=e.length-1?e+"\\":e:t!=e.length-1?e+"/":e}}p.__name__=!0;class w{constructor(e){this.current=0,this.array=e}hasNext(){return this.current<this.array.length}next(){return this.array[this.current++]}}w.__name__=!0;class x{static __string_rec(e,t){if(null==e)return"null";if(t.length>=5)return"<...>";let n=typeof e;switch("function"==n&&(e.__name__||e.__ename__)&&(n="object"),n){case"function":return"<function>";case"object":if(e.__enum__){let n=r[e.__enum__],s=n.__constructs__[e._hx_index],i=n[s];return i.__params__?(t+="\t",s+"("+function(n){let s=[];{let n=0,r=i.__params__;for(;n<r.length;){let i=r[n];n+=1,s.push(x.__string_rec(e[i],t))}}return s}().join(",")+")"):s}if(e instanceof Array){let n="[";t+="\t";let s=0,r=e.length;for(;s<r;){let r=s++;n+=(r>0?",":"")+x.__string_rec(e[r],t)}return n+="]",n}let n;try{n=e.toString}catch(e){return"???"}if(null!=n&&n!=Object.toString&&"function"==typeof n){let t=e.toString();if("[object Object]"!=t)return t}let s="{\n";t+="\t";let i=null!=e.hasOwnProperty,l=null;for(l in e)i&&!e.hasOwnProperty(l)||"prototype"!=l&&"__class__"!=l&&"__super__"!=l&&"__interfaces__"!=l&&"__properties__"!=l&&(2!=s.length&&(s+=", \n"),s+=t+l+" : "+x.__string_rec(e[l],t));return s+="\n"+(t=t.substring(1))+"}",s;case"string":return e;default:return String(e)}}}x.__name__=!0;var b=require("child_process"),k=require("fs"),S=require("path"),y=require("util"),v=require("buffer").Buffer;class N{static bytesOfBuffer(e){let t=Object.create(d.prototype);return t.length=e.byteLength,t.b=e,e.bufferValue=e,e.hxBytes=t,e.bytes=e,t}}N.__name__=!0;class F{flatten(e){}}F.__name__=!0;class C extends F{constructor(){super()}getLength(){return 0}blitTo(e,t){}toString(){return""}}C.__name__=!0;class E{static concat(e,t){return O.cons(e,t)}static catChunk(e,t){return E.concat(e,t)}}class P{static exit(e){switch(e._hx_index){case 0:process.exit(0);break;case 1:let t=e.failure,n=t.message;null!=t.data&&(n+=", "+c.string(t.data)),process.stdout.write(c.string(n)),process.stdout.write("\n");let s=t.code;process.exit(s)}}}P.__name__=!0;class A extends F{constructor(e,t,n){super(),this.data=e,this.from=t,this.to=n}flatten(e){e.push(this)}getLength(){return this.to-this.from}blitTo(e,t){null==this.wrapped&&(this.wrapped=d.ofData(this.data)),e.blit(t,this.wrapped,this.from,this.to-this.from)}toString(){return null==this.wrapped&&(this.wrapped=d.ofData(this.data)),this.wrapped.getString(this.from,this.to-this.from)}static of(e){if(0==e.length)return E.EMPTY;let t=new A(e.b.bufferValue,0,e.length);return t.wrapped=e,t}}A.__name__=!0;class O extends F{constructor(){super()}getLength(){return this.length}flatten(e){let t=0,n=this.chunks;for(;t<n.length;)n[t++].flatten(e)}blitTo(e,t){let n=0,s=this.chunks.length;for(;n<s;){let s=n++;this.chunks[s].blitTo(e,t+this.offsets[s])}}toString(){return this.toBytes().toString()}toBytes(){let e=new d(new ArrayBuffer(this.length));return this.blitTo(e,0),e}static asCompound(e){return e instanceof O?e:null}static cons(e,t){let n=t.getLength();if(0==e.getLength())return 0==n?E.EMPTY:t;if(0==n)return e;{let n=O.asCompound(t),s=O.asCompound(e);if(null==s){if(null==n)return O.create([e,t],2);if(n.depth<100)return O.create([e,t],n.depth+1);{let e=[];return n.flatten(e),t.flatten(e),O.create(e,2)}}if(null==n){if(s.depth<100)return O.create([e,t],s.depth+1);{let e=[];return s.flatten(e),t.flatten(e),O.create(e,2)}}{let e=s.depth>n.depth?s.depth:n.depth;return O.create(s.chunks.concat(n.chunks),e)}}}static create(e,t){let n=new O,s=[0],r=0,i=0;for(;i<e.length;)s.push(r+=e[i++].getLength());return n.chunks=e,n.offsets=s,n.length=r,n.depth=t,n}}O.__name__=!0;class T{constructor(e){this.buffer=e}flatten(e){A.of(this.toBytes()).flatten(e)}getLength(){return this.buffer.length}toString(){return this.buffer.toString()}toBytes(){let e=T.alloc(this.buffer.length);return this.buffer.copy(e),N.bytesOfBuffer(e)}blitTo(e,t){let n=e.b;this.buffer.copy(v.from(n.buffer,n.byteOffset,e.length),t)}}T.__name__=!0;class I{static get(){return null==I.doc&&(I.doc={doc:" Find the instances of an executable in the system path. ",commands:[{isDefault:!0,isSub:!1,names:[],doc:" <command> : The name of the command to find. "}],flags:[{names:["--all"],aliases:["a"],doc:" List all instances of executables found (instead of just the first one). "},{names:["--help"],aliases:["h"],doc:" Output usage information. "},{names:["--version"],aliases:["v"],doc:" Output the version number. "}]}),I.doc}}I.__name__=!0;class R{constructor(e,t,n){this.command=e,this.prompt=t,this.hasFlags=n}processArgs(e){let t=this;return this.hasFlags?Y.catchExceptions((function(){let n=R.expandAssignments(e),s=[],r=0,i=!1;for(;r<n.length;){let e=n[r];if("--"==e)i=!0,++r;else if(i||45!=l.cca(e,0))s.push(e),++r;else{let s=t.processFlag(n,r);if(-1==s){if(45==l.cca(e,1))throw _.thrown('Unrecognized flag "'+e+'"');{let s=t.processAlias(n,r);if(-1==s)throw _.thrown('Unrecognized alias "'+e+'"');r+=s+1}}else r+=s+1}}return s}),null,{fileName:"tink/cli/Router.hx",lineNumber:25,className:"tink.cli.Router",methodName:"processArgs"}):Z.Success(e)}processFlag(e,t){return-1}processAlias(e,t){return-1}static expandAssignments(e){let t=[],n=!0,s=0;for(;s<e.length;){let r=e[s];if(++s,"--"==r&&(n=!1),n){let e=r.indexOf("="),n=l.cca(r,1),s=l.cca(r,0);null==s?t.push(r):45==s?null==n?t.push(r):45==n&&-1!=e?(t.push(l.substr(r,0,e)),t.push(l.substr(r,e+1,null))):t.push(r):t.push(r)}else t.push(r)}return t}}R.__name__=!0;class j extends R{constructor(e,t){super(e,t,!0)}process(e){let t=this;if(null==e[0]){let n,s=this.processArgs(e);switch(s._hx_index){case 0:n=s.data;break;case 1:return new $(new V(Z.Failure(s.failure)))}return ee.next(this.promptRequired(),(function(e){return t.run_run(n)}))}{let n,s=this.processArgs(e);switch(s._hx_index){case 0:n=s.data;break;case 1:return new $(new V(Z.Failure(s.failure)))}return ee.next(this.promptRequired(),(function(e){return t.run_run(n)}))}}processFlag(e,t){switch(e[t]){case"--all":this.command.all=!0;break;case"--help":this.command.help=!0;break;case"--version":this.command.version=!0;break;default:return-1}return t-t}processAlias(e,t){let n=e[t],s=1,r=n.length;for(;s<r;){let e=s++,t=l.cca(n,e);if(null==t)throw _.thrown("Invalid alias '-"+n.charAt(e)+"'");switch(t){case 97:this.command.all=!0;break;case 104:this.command.help=!0;break;case 118:this.command.version=!0;break;default:throw _.thrown("Invalid alias '-"+n.charAt(e)+"'")}}return t-t}promptRequired(){return X.async((function(e){e(Z.Success(J.Noise))}))}run_run(e){return e.length<0?new $(new V(Z.Failure(new Y(null,"Insufficient arguments. Expected: 0, Got: "+e.length,{fileName:"src/which/Program.hx",lineNumber:38,className:"tink.cli.Router0",methodName:"run_run"})))):this.command.run(e.slice(0,e.length))}}j.__name__=!0;class B{constructor(e){this.re=new i("^\\s*\\*?\\s{0,2}(.*)$",""),this.root=e}format(e){let t="",n=this;t+="\n";let s=this.formatDoc(e.doc);null!=s&&(t+=c.string(s+"\n\n"));let r=e.commands,i=[],l=0;for(;l<r.length;){let e=r[l];++l,e.isDefault||i.push(e)}null!=this.root&&(t+=c.string("  Usage: "+this.root+"\n"));let o=a.find(e.commands,(function(e){return e.isDefault}));if(null!=o){let e=this.formatDoc(o.doc);null!=e&&(t+=c.string(this.indent(e,4)+"\n\n"))}if(i.length>0){let e=a.fold(i,(function(e,t){let n=0,s=e.names;for(;n<s.length;){let e=s[n];++n,e.length>t&&(t=e.length)}return t}),0);null!=this.root&&(t+=c.string("  Usage: "+this.root+" <subcommand>\n")),t+=c.string("    Subcommands:\n");let s=function(s,r){null==r&&(r="(doc missing)"),t+=c.string(n.indent(u.lpad(s," ",e)+" : "+u.trim(n.indent(r,e+3)),6)+"\n")},r=0;for(;r<i.length;){let e=i[r];++r;let t=e.names[0];if(s(t,this.formatDoc(e.doc)),e.names.length>1){let n=1,r=e.names.length;for(;n<r;)s(e.names[n++],"Alias of "+t)}}}if(e.flags.length>0){let s=function(e){let t=e.names.join(", ");if(e.aliases.length>0){let n=e.aliases,s=new Array(n.length),r=0,i=n.length;for(;r<i;){let e=r++;s[e]="-"+n[e]}t+=", "+s.join(", ")}return t},r=a.fold(e.flags,(function(e,t){let n=s(e);return n.length>t&&(t=n.length),t}),0),i=function(e,s){null==s&&(s=""),t+=c.string(n.indent(u.lpad(e," ",r)+" : "+u.trim(n.indent(s,r+3)),6)+"\n")};t=(t+="\n")+c.string("  Flags:\n");let l=0,o=e.flags;for(;l<o.length;){let e=o[l];++l,i(s(e),this.formatDoc(e.doc))}}return t}indent(e,t){let n=e.split("\n"),s=new Array(n.length),r=0,i=n.length;for(;r<i;){let e=r++;s[e]=u.lpad(""," ",t)+n[e]}return s.join("\n")}formatDoc(e){let t=this;if(null==e)return null;let n=e.split("\n"),s=u.trim,r=new Array(n.length),i=0,l=n.length;for(;i<l;){let e=i++;r[e]=s(n[e])}let a=r;for(;""==a[0];)a=a.slice(1);for(;""==a[a.length-1];)a.pop();let c=new Array(a.length),o=0,h=a.length;for(;o<h;){let e=o++,n=a[e];c[e]=t.re.match(n)?t.re.matched(1):n}return c.join("\n")}}B.__name__=!0;class D{constructor(e,t){this.source=e,this.sink=t}}D.__name__=!0;class L extends D{constructor(){let e=process.stdin,t=null;t={},super(le.wrap("stdin",e,t.chunkSize,t.onEnd),ie.wrap("stdout",process.stdout))}}L.__name__=!0;class W{constructor(e,t){this.trials=e,this.proxy=t??new L}}W.__name__=!0;class U{static invoke(e,t){if(U.depth<500)U.depth++,e(t),U.depth--;else{let n=e,s=function(e){U.invoke(n,e)},r=t;U.defer((function(){s(r)}))}}static fromNiladic(e){return e}static defer(e){process.nextTick(e)}}class M{constructor(e){this.f=e}cancel(){null!=this.f&&(this.f(),this.f=null)}}M.__name__=!0;class q{constructor(e,t){this.dissolved=!1,this.a=e,this.b=t}cancel(){if(!this.dissolved){this.dissolved=!0;let e=this.a;null!=e&&e.cancel();let t=this.b;null!=t&&t.cancel(),this.a=null,this.b=null}}}q.__name__=!0;class z{constructor(e,t){if(null==e)throw _.thrown("callback expected but null received");this.cb=e,this.list=t}cancel(){if(null!=this.list){let e=this.list;this.cb=null,this.list=null,--e.used<=e.cells.length>>1&&e.compact()}}}z.__name__=!0;class H{constructor(){this.busy=!1,this.queue=[],this.used=0,this.cells=[]}ondrain(){}onfill(){}invoke(e,t){if(this.busy){let n=be(this,this.invoke),s=e,r=t,i=function(){n(s,r)};this.queue.push(i)}else{this.busy=!0;let n=this.cells.length,s=0;for(;s<n;){let t=this.cells[s++];null!=t.list&&U.invoke(t.cb,e)}if(this.busy=!1,t){let e=this.cells.length-n,t=0;for(;t<n;){let e=this.cells[t++];e.cb=null,e.list=null}let s=0;for(;s<e;){let e=s++;this.cells[e]=this.cells[n+e]}this.resize(e)}else this.used<this.cells.length&&this.compact();this.queue.length>0&&this.queue.shift()()}}compact(){if(!this.busy)if(0==this.used)this.resize(0),this.ondrain();else{let e=0,t=0,n=this.cells.length;for(;t<n;){let n=t++,s=this.cells[n];if(null!=s.cb&&(e!=n&&(this.cells[e]=s),++e==this.used))break}this.resize(this.used)}}resize(e){this.cells.length=e}}H.__name__=!0;class Y{constructor(e,t,n){null==e&&(e=500),this.isTinkError=!0,this.code=e,this.message=t,this.pos=n,this.exceptionStack=[],this.callStack=[]}static withData(e,t,n,s){return Y.typed(e,t,n,s)}static typed(e,t,n,s){let r=new Y(e,t,s);return r.data=n,r}static asError(e){return null!=e&&e.isTinkError?e:null}static catchExceptions(e,t,n){try{return Z.Success(e())}catch(e){let s=_.caught(e).unwrap(),r=Y.asError(s);return Z.Failure(r??(null==t?Y.withData(null,"Unexpected Error",s,n):t(s)))}}}Y.__name__=!0;var J=r["tink.core.Noise"]={__ename__:!0,__constructs__:["Noise"],Noise:{_hx_index:0,__enum__:"tink.core.Noise",toString:s}};class V{constructor(e){this.value=e}get(){return this.value}map(e){let t=this;return new Q((function(){return e(t.value)}))}}V.__name__=!0;class ${constructor(e){this.value=e}map(e){return new $(this.value.map(e))}flatMap(e){let t=this;return new K((function(n){return e(t.value.get()).handle(n)}))}handle(e){return U.invoke(e,this.value.get()),null}eager(){return this}gather(){return this}}$.__name__=!0;class X{static first(e,t){let n=new G,s=e.handle(be(n,n.trigger)),r=t.handle(be(n,n.trigger)),i=n;if(null!=s){let e=s;i.handle((function(t){e.cancel()}))}if(null!=r){let e=r;i.handle((function(t){e.cancel()}))}return i}static next(e,t){return e.flatMap((function(e){return t(e)}))}static flatten(e){return new K((function(t){let n=null;return new q(e.handle((function(e){n=e.handle(t)})),new M((function(){null!=n&&n.cancel()})))}))}static ofJsPromise(e){return X.async((function(t){e.then((function(e){t(Z.Success(e))})).catch((function(e){t(Z.Failure(Y.withData(null,e.message,e,{fileName:"tink/core/Future.hx",lineNumber:89,className:"tink.core._Future.Future_Impl_",methodName:"ofJsPromise"})))}))}))}static async(e,t){if(null==t&&(t=!1),t)return new K((function(t){return e(t),null}));{let t=new G;return U.invoke(e,be(t,t.trigger)),t}}}class G{constructor(){this.list=new H}handle(e){let t=this.list;if(null==t)return U.invoke(e,this.result),null;{let n=new z(e,t);return t.cells.push(n),0==t.used++&&t.onfill(),n}}map(e){if(null==this.list)return new $(new V(e(this.result)));{let t=new G,n=this.list,s=new z((function(n){t.trigger(e(n))}),n);return n.cells.push(s),0==n.used++&&n.onfill(),t}}flatMap(e){if(null==this.list)return e(this.result);{let t=new G,n=this.list,s=new z((function(n){e(n).handle(be(t,t.trigger))}),n);return n.cells.push(s),0==n.used++&&n.onfill(),t}}gather(){return this}eager(){return this}trigger(e){if(null==this.list)return!1;{let t=this.list;return this.list=null,this.result=e,t.invoke(e,!0),!0}}}G.__name__=!0;class K{constructor(e){this.suspended=!0;let t=this;this.wakeup=e,this.callbacks=new H,this.callbacks.ondrain=function(){if(null!=t.callbacks){t.suspended=!0;let e=t.link;null!=e&&e.cancel(),t.link=null}}}trigger(e){let t=this.callbacks;null!=t&&(this.callbacks=null,this.suspended=!1,this.result=e,this.link=null,this.wakeup=null,t.invoke(e,!0))}handle(e){if(null==this.callbacks)return U.invoke(e,this.result),null;{let t=this.callbacks,n=new z(e,t);return t.cells.push(n),0==t.used++&&t.onfill(),this.suspended&&(this.suspended=!1,this.link=this.wakeup(be(this,this.trigger))),n}}map(e){let t=this;return new K((function(n){return t.handle((function(t){n(e(t))}))}))}flatMap(e){return X.flatten(this.map(e))}gather(){return this}eager(){return this.handle(U.fromNiladic((function(){}))),this}}K.__name__=!0;class Q{constructor(e){this.f=e}get(){return null!=this.f&&(this.result=this.f(),this.f=null),this.result}map(e){let t=this;return new Q((function(){return e(t.get())}))}}Q.__name__=!0;var Z=r["tink.core.Outcome"]={__ename__:!0,__constructs__:["Success","Failure"],Success:(n=function(e){return{_hx_index:0,data:e,__enum__:"tink.core.Outcome",toString:s}},n.__params__=["data"],n),Failure:(n=function(e){return{_hx_index:1,failure:e,__enum__:"tink.core.Outcome",toString:s}},n.__params__=["failure"],n)};class ee{static next(e,t,n){null==n&&(n=!0);let s=n;null==n&&(s=!0);let r=e.flatMap((function(e){switch(e._hx_index){case 0:return t(e.data);case 1:return new $(new V(Z.Failure(e.failure)))}}));return s?r.gather():r}static inParallel(e,t,n){return 0==e.length?new $(new V(Z.Success([]))):X.async((function(n){let s,r,i=[],l=e.length,a=null,c=[],u=!1,o=0;s=0,r=e;let h=null,_=function(e){null==a?u=!0:null!=a&&a.cancel(),n(e)};for(h=function(){o+=1;let e=o-1;s+=1,c.push(r[s-1].handle((function(t){switch(t._hx_index){case 0:!function(e,t){i[e]=t,0==(l-=1)?_(Z.Success(i)):s<r.length&&l>0&&h()}(e,t.data);break;case 1:n=t.failure,l=0,_(Z.Failure(n))}var n})))};;){let e;if(e=s<r.length&&l>0&&(null==t||(t-=1)+1>0),!e)break;h()}a=class{static fromMany(e){return new M((function(){if(null!=e){let t=0;for(;t<e.length;){let n=e[t];++t,null!=n&&n.cancel()}}else e=null}))}}.fromMany(c),u&&null!=a&&a.cancel()}),n)}}class te{}te.__name__=!0;class ne{constructor(){}reduce(e,t){let n=this;return X.async((function(s){n.forEach(class{static ofUnknown(e){return e}}.ofUnknown((function(n){return t(e,n).map((function(t){switch(t._hx_index){case 0:return e=t.result,ue.Resume;case 1:return ue.Clog(t.e)}})).gather()}))).handle((function(t){switch(t._hx_index){case 0:throw _.thrown("assert");case 1:s(_e.Crashed(t.error,t.at));break;case 2:s(_e.Failed(t.error));break;case 3:s(_e.Reduced(e))}}))}),!0)}forEach(e){throw _.thrown("not implemented")}}ne.__name__=!0;class se{static all(e){return class{static concatAll(e){return e.reduce(E.EMPTY,class{static ofSafe(e){return e}}.ofSafe((function(e,t){return new $(new V(he.Progress(E.catChunk(e,t))))})))}}.concatAll(e).map((function(e){switch(e._hx_index){case 1:return Z.Failure(e.error);case 2:return Z.Success(e.result)}})).gather()}}se.__name__=!0;class re extends ne{constructor(e){super(),this.upcoming=e}forEach(e){let t=this;return X.async((function(n){t.upcoming.handle((function(s){switch(s._hx_index){case 0:let r=s.next;e(s.value).handle((function(s){switch(s._hx_index){case 0:n(oe.Halted(t));break;case 1:n(oe.Halted(r));break;case 2:r.forEach(e).handle(n);break;case 3:n(oe.Clogged(s.e,t))}}));break;case 1:n(oe.Failed(s.e));break;case 2:n(oe.Depleted)}}))}),!0)}}re.__name__=!0;class ie extends te{constructor(e){super(),this.target=e}static wrap(e,t){return new ie(new ce(e,t))}}ie.__name__=!0;class le extends re{constructor(e){super(X.async((function(t){e.read().handle((function(n){let s,r=t;switch(n._hx_index){case 0:let t=n.data;s=null==t?fe.End:fe.Link(t,new le(e));break;case 1:s=fe.Fail(n.failure)}r(s)}))}),!0))}static wrap(e,t,n,s){return new le(new ae(e,t,n,s))}}le.__name__=!0;class ae{constructor(e,t,n,s){this.name=e,this.native=t,this.chunkSize=n,this.end=X.async((function(n){t.once("end",(function(){n(Z.Success(null))})),t.once("error",(function(t){n(Z.Failure(new Y(null,t.code+" - Failed reading from "+e+" because "+t.message,{fileName:"tink/io/nodejs/WrappedReadable.hx",lineNumber:22,className:"tink.io.nodejs.WrappedReadable",methodName:"new"})))}))})).eager(),null!=s&&this.end.handle(U.fromNiladic((function(){process.nextTick(s)})))}read(){let e=this;return X.first(X.async((function(t){let n=null;n=function(){try{let s=e.native.read(e.chunkSize);if(null==s)e.native.once("readable",n);else{let e="string"==typeof s?new v(s):s;t(Z.Success(new T(e)))}}catch(n){let s=_.caught(n).unwrap();t(Z.Failure(Y.withData(null,"Error while reading from "+e.name,s,{fileName:"tink/io/nodejs/WrappedReadable.hx",lineNumber:48,className:"tink.io.nodejs.WrappedReadable",methodName:"read"})))}},n()})),this.end)}}ae.__name__=!0;class ce{constructor(e,t){this.name=e,this.native=t,this.ended=X.async((function(e){t.once("end",(function(){e(Z.Success(!1))})),t.once("finish",(function(){e(Z.Success(!1))})),t.once("close",(function(){e(Z.Success(!1))})),t.on("error",(function(t){e(Z.Failure(new Y(null,t.code+": "+t.message,{fileName:"tink/io/nodejs/WrappedWritable.hx",lineNumber:24,className:"tink.io.nodejs.WrappedWritable",methodName:"new"})))}))}))}}ce.__name__=!0;var ue=r["tink.streams.Handled"]={__ename__:!0,__constructs__:["BackOff","Finish","Resume","Clog"],BackOff:{_hx_index:0,__enum__:"tink.streams.Handled",toString:s},Finish:{_hx_index:1,__enum__:"tink.streams.Handled",toString:s},Resume:{_hx_index:2,__enum__:"tink.streams.Handled",toString:s},Clog:(n=function(e){return{_hx_index:3,e,__enum__:"tink.streams.Handled",toString:s}},n.__params__=["e"],n)},oe=r["tink.streams.Conclusion"]={__ename__:!0,__constructs__:["Halted","Clogged","Failed","Depleted"],Halted:(n=function(e){return{_hx_index:0,rest:e,__enum__:"tink.streams.Conclusion",toString:s}},n.__params__=["rest"],n),Clogged:(n=function(e,t){return{_hx_index:1,error:e,at:t,__enum__:"tink.streams.Conclusion",toString:s}},n.__params__=["error","at"],n),Failed:(n=function(e){return{_hx_index:2,error:e,__enum__:"tink.streams.Conclusion",toString:s}},n.__params__=["error"],n),Depleted:{_hx_index:3,__enum__:"tink.streams.Conclusion",toString:s}},he=r["tink.streams.ReductionStep"]={__ename__:!0,__constructs__:["Progress","Crash"],Progress:(n=function(e){return{_hx_index:0,result:e,__enum__:"tink.streams.ReductionStep",toString:s}},n.__params__=["result"],n),Crash:(n=function(e){return{_hx_index:1,e,__enum__:"tink.streams.ReductionStep",toString:s}},n.__params__=["e"],n)},_e=r["tink.streams.Reduction"]={__ename__:!0,__constructs__:["Crashed","Failed","Reduced"],Crashed:(n=function(e,t){return{_hx_index:0,error:e,at:t,__enum__:"tink.streams.Reduction",toString:s}},n.__params__=["error","at"],n),Failed:(n=function(e){return{_hx_index:1,error:e,__enum__:"tink.streams.Reduction",toString:s}},n.__params__=["error"],n),Reduced:(n=function(e){return{_hx_index:2,result:e,__enum__:"tink.streams.Reduction",toString:s}},n.__params__=["result"],n)};var fe=r["tink.streams.Step"]={__ename__:!0,__constructs__:["Link","Fail","End"],Link:(n=function(e,t){return{_hx_index:0,value:e,next:t,__enum__:"tink.streams.Step",toString:s}},n.__params__=["value","next"],n),Fail:(n=function(e){return{_hx_index:1,e,__enum__:"tink.streams.Step",toString:s}},n.__params__=["e"],n),End:{_hx_index:2,__enum__:"tink.streams.Step",toString:s}};class de{constructor(e){let t,n=de.get_isWindows()?";":":",s=process.env.PATHEXT;if(null!=s){let e=s.split(n),r=new Array(e.length),i=0,l=e.length;for(;i<l;){let t=i++;r[t]=e[t].toLowerCase()}t=r}else t=[".exe",".cmd",".bat",".com"];this.extensions=t;let r=process.env.PATH;if(this.path=null!=r?r.split(n):[],null!=e){if(null!=e.extensions){let t=e.extensions,n=new Array(t.length),s=0,r=t.length;for(;s<r;){let e=s++;n[e]=t[e].toLowerCase()}this.extensions=n}null!=e.path&&(this.path=e.path)}}find(e){let t=this,n=(de.get_isWindows()?[process.cwd()]:[]).concat(this.path),s=new Array(n.length),r=0,i=n.length;for(;r<i;){let i=r++;s[i]=t.findExecutables(n[i],e)}return ee.next(ee.inParallel(s),(function(e){let n=t,s=[],r=0;for(;r<e.length;){let t=xe(e[r++]);for(;t.hasNext();)s.push(t.next())}return new $(new V(Z.Success(n.arrayUnique(s))))}))}isExecutable(e){let t=this;return X.ofJsPromise(y.promisify(k.stat)(e).then((function(n){return n.isFile()?de.get_isWindows()?new $(new V(Z.Success(t.checkFileExtension(e)))):t.checkFilePermissions(n):new $(new V(Z.Success(!1)))})).catch((function(e){return!1})))}arrayUnique(e){let t=[],n=0;for(;n<e.length;){let s=e[n];++n,t.includes(s)||t.push(s)}return t}checkFileExtension(e){let t=this.extensions,n="."+p.extension(e).toLowerCase();return t.includes(n)}checkFilePermissions(e){let t=-1;return ee.next(ee.next(X.next(new $(new V(0!=(1&e.mode))),(function(t){return t||0==(8&e.mode)?new $(new V(Z.Success(t))):ee.next(pe.get_gid(),(function(t){return new $(new V(Z.Success(e.gid==t)))}))})),(function(n){return n||0==(64&e.mode)?new $(new V(Z.Success(n))):ee.next(pe.get_uid(),(function(n){return t=n,new $(new V(Z.Success(e.uid==n)))}))})),(function(n){return n||0==(72&e.mode)?new $(new V(Z.Success(n))):new $(new V(Z.Success(0==t)))}))}findExecutables(e,t){let n=this,s=S.resolve(e),r=[""].concat(de.get_isWindows()?this.extensions:[]),i=new Array(r.length),l=0,a=r.length;for(;l<a;){let e=l++;i[e]=u.replace(p.join([s,""+t+r[e]]),"/",de.get_isWindows()?"\\":"/")}let c=i,o=new Array(c.length),h=0,_=c.length;for(;h<_;){let e=h++;o[e]=n.isExecutable(c[e])}return ee.next(ee.inParallel(o),(function(e){let t=[],n=0;for(;n<e.length;)e[n++]&&t.push(c[n-1]);return new $(new V(Z.Success(t)))}))}static get_isWindows(){if("Windows"!=o.systemName()){let e=process.env.OSTYPE;return"cygwin"==e||"msys"==e}return!0}}e.which.Finder=de,de.__name__=!0;class me extends _{constructor(e,t,n){super('Command "'+e+'" not found.',n),this.command=e,this.finder=t}}e.which.FinderException=me,me.__name__=!0;class ge{static which(e,t){let n=new de(t);return ee.next(n.find(e),(function(t){return t.length>0?new $(new V(Z.Success(t))):new $(new V(Z.Failure(new Y(404,'No "'+e+'" in ('+n.path.join(de.get_isWindows()?";":":")+").",{fileName:"src/which/FinderTools.hx",lineNumber:15,className:"which.FinderTools",methodName:"which"}))))}))}static whichOne(e,t){return ee.next(ge.which(e,t),(function(e){return new $(new V(Z.Success(e[0])))}))}}e.which.FinderTools=ge,ge.__name__=!0;class pe{static get_gid(){return"function"==typeof be(n=process,n.getgid)?new $(new V(Z.Success(process.getgid()))):pe.getProcessId("g")}static get_uid(){return"function"==typeof be(n=process,n.getuid)?new $(new V(Z.Success(process.getuid()))):pe.getProcessId("u")}static getProcessId(e){if(de.get_isWindows())return new $(new V(Z.Failure(new Y(405,"Not supported on Windows platform.",{fileName:"src/which/Process.hx",lineNumber:41,className:"which.Process",methodName:"getProcessId"}))));let t=new h("id",["-"+e]);return ee.next(X.next(t.exitCode(),(function(e){return 0!=e?new $(new V(Z.Failure(new Y(null,"Process exited with a non-zero code.",{fileName:"src/which/Process.hx",lineNumber:45,className:"which.Process",methodName:"getProcessId"})))):ee.next(se.all(t.stdout),(function(e){let t=c.parseInt(u.rtrim(e.toString()));return new $(new V(null!=t?Z.Success(t):Z.Failure(new Y(null,"Unable to parse the process output.",{fileName:"src/which/Process.hx",lineNumber:47,className:"which.Process",methodName:"getProcessId"}))))}))})),(function(e){return t.close(),new $(new V(Z.Success(e)))}))}}pe.__name__=!0;class we{constructor(){this.version=!1,this.help=!1,this.all=!1}run(e){if(this.help||this.version){let e=this.help?(new B).format(I.get()):"2.0.0";return process.stdout.write(c.string(e)),process.stdout.write("\n"),new $(new V(Z.Success(J.Noise)))}return e.length<1||"1"==process.env.HAXELIB_RUN&&e.length<2?new $(new V(Z.Failure(new Y(400,"You must provide the name of a command to find.",{fileName:"src/which/Program.hx",lineNumber:46,className:"which.Program",methodName:"run"})))):ee.next(this.all?ge.which(e[0]):ee.next(ge.whichOne(e[0]),(function(e){return new $(new V(Z.Success([e])))})),(function(e){return a.iter(e,o.println),new $(new V(Z.Success(J.Noise)))}))}static main(){process.title="Which.hx",new j(new we,new W(5)).process(process.argv.slice(2)).handle(P.exit)}}function xe(e){return e instanceof Array?new w(e):e.iterator()}function be(e,n){return null==n?null:(null==n.__id__&&(n.__id__=t.$haxeUID++),null==e.hx__closures__?e.hx__closures__={}:s=e.hx__closures__[n.__id__],null==s&&(s=n.bind(e),e.hx__closures__[n.__id__]=s),s);var s}we.__name__=!0,t.$haxeUID|=0,"undefined"!=typeof performance&&"function"==typeof performance.now&&(l.now=performance.now.bind(performance)),null==String.fromCodePoint&&(String.fromCodePoint=function(e){return e<65536?String.fromCharCode(e):String.fromCharCode(55232+(e>>10))+String.fromCharCode(56320+(1023&e))}),String.__name__=!0,Array.__name__=!0,x.__toStr={}.toString,E.EMPTY=new C,T.alloc="allocUnsafe"in Buffer?v.allocUnsafe:function(e){return new v(e)},U.depth=0,we.main()}("undefined"!=typeof exports?exports:"undefined"!=typeof window?window:"undefined"!=typeof self?self:this,"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:this);
