#!/usr/bin/env node
!function(e,t){"use strict";e.which=e.which||{};var n,s=function(){return m.__string_rec(this,"")},r=r||{};class i{constructor(e,t){this.r=new RegExp(e,t.split("u").join(""))}match(e){return this.r.global&&(this.r.lastIndex=0),this.r.m=this.r.exec(e),this.r.s=e,null!=this.r.m}matched(e){if(null!=this.r.m&&e>=0&&e<this.r.m.length)return this.r.m[e];throw h.thrown("EReg::matched")}}i.__name__=!0;class l{static cca(e,t){let n=e.charCodeAt(t);if(n==n)return n}static substr(e,t,n){if(null==n)n=e.length;else if(n<0){if(0!=t)return"";n=e.length+n}return e.substr(t,n)}static now(){return Date.now()}}l.__name__=!0;class a{static array(e){let t=[],n=ie(e);for(;n.hasNext();)t.push(n.next());return t}static iter(e,t){let n=ie(e);for(;n.hasNext();)t(n.next())}static fold(e,t,n){let s=ie(e);for(;s.hasNext();)n=t(s.next(),n);return n}static find(e,t){let n=ie(e);for(;n.hasNext();){let e=n.next();if(t(e))return e}return null}}a.__name__=!0,Math.__name__=!0;class c{static string(e){return m.__string_rec(e,"")}static parseInt(e){if(null!=e){let t=0,n=e.length;for(;t<n;){let n=t++,s=e.charCodeAt(n);if(s<=8||s>=14&&32!=s&&45!=s){let t=e.charCodeAt(n+1),s=parseInt(e,120==t||88==t?16:10);return isNaN(s)?null:s}}}return null}}c.__name__=!0;class u{static startsWith(e,t){return e.length>=t.length&&0==e.lastIndexOf(t,0)}static isSpace(e,t){let n=l.cca(e,t);return n>8&&n<14||32==n}static ltrim(e){let t=e.length,n=0;for(;n<t&&u.isSpace(e,n);)++n;return n>0?l.substr(e,n,t-n):e}static rtrim(e){let t=e.length,n=0;for(;n<t&&u.isSpace(e,t-n-1);)++n;return n>0?l.substr(e,0,t-n):e}static trim(e){return u.ltrim(u.rtrim(e))}static lpad(e,t,n){if(t.length<=0)return e;let s="";for(n-=e.length;s.length<n;)s+=null==t?"null":""+t;return s+=null==e?"null":""+e,s}static replace(e,t,n){return e.split(t).join(n)}}u.__name__=!0;class o{static println(e){process.stdout.write(c.string(e)),process.stdout.write("\n")}static systemName(){let e=process.platform;switch(e){case"darwin":return"Mac";case"freebsd":return"BSD";case"linux":return"Linux";case"win32":return"Windows";default:return e}}}o.__name__=!0;r["haxe.StackItem"]={__ename__:!0,__constructs__:["CFunction","Module","FilePos","Method","LocalFunction"],CFunction:{_hx_index:0,__enum__:"haxe.StackItem",toString:s},Module:(n=function(e){return{_hx_index:1,m:e,__enum__:"haxe.StackItem",toString:s}},n.__params__=["m"],n),FilePos:(n=function(e,t,n,r){return{_hx_index:2,s:e,file:t,line:n,column:r,__enum__:"haxe.StackItem",toString:s}},n.__params__=["s","file","line","column"],n),Method:(n=function(e,t){return{_hx_index:3,classname:e,method:t,__enum__:"haxe.StackItem",toString:s}},n.__params__=["classname","method"],n),LocalFunction:(n=function(e){return{_hx_index:4,v:e,__enum__:"haxe.StackItem",toString:s}},n.__params__=["v"],n)};class h extends Error{constructor(e,t,n){super(e),this.message=e,this.__previousException=t,this.__nativeException=null!=n?n:this}unwrap(){return this.__nativeException}toString(){return this.get_message()}get_message(){return this.message}get_native(){return this.__nativeException}static caught(e){return e instanceof h?e:e instanceof Error?new h(e.message,null,e):new _(e,null,e)}static thrown(e){if(e instanceof h)return e.get_native();if(e instanceof Error)return e;return new _(e)}}h.__name__=!0;class _ extends h{constructor(e,t,n){super(String(e),t,n),this.value=e}unwrap(){return this.value}}_.__name__=!0;class d{constructor(e){switch(e){case".":case"..":return this.dir=e,void(this.file="")}let t=e.lastIndexOf("/"),n=e.lastIndexOf("\\");t<n?(this.dir=l.substr(e,0,n),e=l.substr(e,n+1,null),this.backslash=!0):n<t?(this.dir=l.substr(e,0,t),e=l.substr(e,t+1,null)):this.dir=null;let s=e.lastIndexOf(".");-1!=s?(this.ext=l.substr(e,s+1,null),this.file=l.substr(e,0,s)):(this.ext=null,this.file=e)}static extension(e){let t=new d(e);return null==t.ext?"":t.ext}static join(e){let t=[],n=0;for(;n<e.length;){let s=e[n];++n,null!=s&&""!=s&&t.push(s)}if(0==t.length)return"";let s=t[0],r=1,i=t.length;for(;r<i;)s=d.addTrailingSlash(s),s+=t[r++];return d.normalize(s)}static normalize(e){if("/"==(e=e.split("\\").join("/")))return"/";let t=[],n=0,s=e.split("/");for(;n<s.length;){let r=s[n];++n,".."==r&&t.length>0&&".."!=t[t.length-1]?t.pop():""==r?(t.length>0||47==l.cca(e,0))&&t.push(r):"."!=r&&t.push(r)}let r="",i=!1,a=!1,c=0,u=t.join("/");for(;c<u.length;){let e=u,t=c++,n=e.charCodeAt(t);n>=55296&&n<=56319&&(n=n-55232<<10|1023&e.charCodeAt(t+1));n>=65536&&++c;let s=n;switch(s){case 47:if(i){let e=s;i=!1,a&&(r+="/",a=!1),r+=String.fromCodePoint(e)}else a=!0;break;case 58:r+=":",i=!0;break;default:let e=s;i=!1,a&&(r+="/",a=!1),r+=String.fromCodePoint(e)}}return r}static addTrailingSlash(e){if(0==e.length)return"/";let t=e.lastIndexOf("/"),n=e.lastIndexOf("\\");return t<n?n!=e.length-1?e+"\\":e:t!=e.length-1?e+"/":e}static isAbsolute(e){return!!u.startsWith(e,"/")||(":"==e.charAt(1)||!!u.startsWith(e,"\\\\"))}}d.__name__=!0;class f{constructor(e){this.current=0,this.array=e}hasNext(){return this.current<this.array.length}next(){return this.array[this.current++]}}f.__name__=!0;class m{static __string_rec(e,t){if(null==e)return"null";if(t.length>=5)return"<...>";let n=typeof e;switch("function"==n&&(e.__name__||e.__ename__)&&(n="object"),n){case"function":return"<function>";case"object":if(e.__enum__){let n=r[e.__enum__],s=n.__constructs__[e._hx_index],i=n[s];return i.__params__?(t+="\t",s+"("+function(n){let s=[];{let n=0,r=i.__params__;for(;n<r.length;){let i=r[n];n+=1,s.push(m.__string_rec(e[i],t))}}return s}().join(",")+")"):s}if(e instanceof Array){let n="[";t+="\t";let s=0,r=e.length;for(;s<r;){let r=s++;n+=(r>0?",":"")+m.__string_rec(e[r],t)}return n+="]",n}let n;try{n=e.toString}catch(e){return"???"}if(null!=n&&n!=Object.toString&&"function"==typeof n){let t=e.toString();if("[object Object]"!=t)return t}let s="{\n";t+="\t";let i=null!=e.hasOwnProperty,l=null;for(l in e)i&&!e.hasOwnProperty(l)||"prototype"!=l&&"__class__"!=l&&"__super__"!=l&&"__interfaces__"!=l&&"__properties__"!=l&&(2!=s.length&&(s+=", \n"),s+=t+l+" : "+m.__string_rec(e[l],t));return s+="\n"+(t=t.substring(1))+"}",s;case"string":return e;default:return String(e)}}}m.__name__=!0;var p=require("child_process"),g=require("fs"),w=require("util"),x=require("buffer").Buffer;class b{constructor(){}asResolved(e){return Promise.resolve(e)}}b.__name__=!0;class k{static resolve(e){return k.factory.asResolved(e)}static then(e,t,n){return e.then(t,n)}}class v{static all(e){return Promise.all(a.array(e))}static catch_(e,t){return e.catch(t)}}v.__name__=!0;class y{static exit(e){switch(e._hx_index){case 0:process.exit(0);break;case 1:let t=e.failure,n=t.message;null!=t.data&&(n+=", "+c.string(t.data)),process.stdout.write(c.string(n)),process.stdout.write("\n");let s=t.code;process.exit(s)}}}y.__name__=!0;class S{constructor(e){this.buffer=e}}S.__name__=!0;class N{static get(){return null==N.doc&&(N.doc={doc:" Find the instances of an executable in the system path. ",commands:[{isDefault:!0,isSub:!1,names:[],doc:" <command> : The name of the command to find. "}],flags:[{names:["--all"],aliases:["a"],doc:" List all instances of executables found (instead of just the first one). "},{names:["--help"],aliases:["h"],doc:" Output usage information. "},{names:["--silent"],aliases:["s"],doc:" Silence the output, just return the exit code (0 if any executable is found, otherwise 1). "},{names:["--version"],aliases:["v"],doc:" Output the version number. "}]}),N.doc}}N.__name__=!0;class F{constructor(e,t,n){this.command=e,this.prompt=t,this.hasFlags=n}processArgs(e){let t=this;return this.hasFlags?q.catchExceptions((function(){let n=F.expandAssignments(e),s=[],r=0,i=!1;for(;r<n.length;){let e=n[r];if("--"==e)i=!0,++r;else if(i||45!=l.cca(e,0))s.push(e),++r;else{let s=t.processFlag(n,r);if(-1==s){if(45==l.cca(e,1))throw h.thrown('Unrecognized flag "'+e+'"');{let s=t.processAlias(n,r);if(-1==s)throw h.thrown('Unrecognized alias "'+e+'"');r+=s+1}}else r+=s+1}}return s}),null,{fileName:"tink/cli/Router.hx",lineNumber:25,className:"tink.cli.Router",methodName:"processArgs"}):H.Success(e)}processFlag(e,t){return-1}processAlias(e,t){return-1}static expandAssignments(e){let t=[],n=!0,s=0;for(;s<e.length;){let r=e[s];if(++s,"--"==r&&(n=!1),n){let e=r.indexOf("="),n=l.cca(r,1),s=l.cca(r,0);null==s?t.push(r):45==s?null==n?t.push(r):45==n&&-1!=e?(t.push(l.substr(r,0,e)),t.push(l.substr(r,e+1,null))):t.push(r):t.push(r)}else t.push(r)}return t}}F.__name__=!0;class A extends F{constructor(e,t){super(e,t,!0)}process(e){let t=this;if(null==e[0]){let n,s=this.processArgs(e);switch(s._hx_index){case 0:n=s.data;break;case 1:return new L(new z(H.Failure(s.failure)))}return J.next(this.promptRequired(),(function(e){return t.run_run(n)}))}{let n,s=this.processArgs(e);switch(s._hx_index){case 0:n=s.data;break;case 1:return new L(new z(H.Failure(s.failure)))}return J.next(this.promptRequired(),(function(e){return t.run_run(n)}))}}processFlag(e,t){switch(e[t]){case"--all":this.command.all=!0;break;case"--help":this.command.help=!0;break;case"--silent":this.command.silent=!0;break;case"--version":this.command.version=!0;break;default:return-1}return t-t}processAlias(e,t){let n=e[t],s=1,r=n.length;for(;s<r;){let e=s++,t=l.cca(n,e);if(null==t)throw h.thrown("Invalid alias '-"+n.charAt(e)+"'");switch(t){case 97:this.command.all=!0;break;case 104:this.command.help=!0;break;case 115:this.command.silent=!0;break;case 118:this.command.version=!0;break;default:throw h.thrown("Invalid alias '-"+n.charAt(e)+"'")}}return t-t}promptRequired(){return M.async((function(e){e(H.Success(T.Noise))}))}run_run(e){return e.length<0?new L(new z(H.Failure(new q(null,"Insufficient arguments. Expected: 0, Got: "+e.length,{fileName:"src/which/Program.hx",lineNumber:45,className:"tink.cli.Router0",methodName:"run_run"})))):J.noise(this.command.run(e.slice(0,e.length)))}}A.__name__=!0;class E{constructor(e){this.re=new i("^\\s*\\*?\\s{0,2}(.*)$",""),this.root=e}format(e){let t="",n=this;t+="\n";let s=this.formatDoc(e.doc);null!=s&&(t+=c.string(s+"\n\n"));let r=e.commands,i=[],l=0;for(;l<r.length;){let e=r[l];++l,e.isDefault||i.push(e)}null!=this.root&&(t+=c.string("  Usage: "+this.root+"\n"));let o=a.find(e.commands,(function(e){return e.isDefault}));if(null!=o){let e=this.formatDoc(o.doc);null!=e&&(t+=c.string(this.indent(e,4)+"\n\n"))}if(i.length>0){let e=a.fold(i,(function(e,t){let n=0,s=e.names;for(;n<s.length;){let e=s[n];++n,e.length>t&&(t=e.length)}return t}),0);null!=this.root&&(t+=c.string("  Usage: "+this.root+" <subcommand>\n")),t+=c.string("    Subcommands:\n");let s=function(s,r){null==r&&(r="(doc missing)"),t+=c.string(n.indent(u.lpad(s," ",e)+" : "+u.trim(n.indent(r,e+3)),6)+"\n")},r=0;for(;r<i.length;){let e=i[r];++r;let t=e.names[0];if(s(t,this.formatDoc(e.doc)),e.names.length>1){let n=1,r=e.names.length;for(;n<r;)s(e.names[n++],"Alias of "+t)}}}if(e.flags.length>0){let s=function(e){let t=e.names.join(", ");if(e.aliases.length>0){let n=e.aliases,s=new Array(n.length),r=0,i=n.length;for(;r<i;){let e=r++;s[e]="-"+n[e]}t+=", "+s.join(", ")}return t},r=a.fold(e.flags,(function(e,t){let n=s(e);return n.length>t&&(t=n.length),t}),0),i=function(e,s){null==s&&(s=""),t+=c.string(n.indent(u.lpad(e," ",r)+" : "+u.trim(n.indent(s,r+3)),6)+"\n")};t=(t+="\n")+c.string("  Flags:\n");let l=0,o=e.flags;for(;l<o.length;){let e=o[l];++l,i(s(e),this.formatDoc(e.doc))}}return t}indent(e,t){let n=e.split("\n"),s=new Array(n.length),r=0,i=n.length;for(;r<i;){let e=r++;s[e]=u.lpad(""," ",t)+n[e]}return s.join("\n")}formatDoc(e){let t=this;if(null==e)return null;let n=e.split("\n"),s=u.trim,r=new Array(n.length),i=0,l=n.length;for(;i<l;){let e=i++;r[e]=s(n[e])}let a=r;for(;""==a[0];)a=a.slice(1);for(;""==a[a.length-1];)a.pop();let c=new Array(a.length),o=0,h=a.length;for(;o<h;){let e=o++,n=a[e];c[e]=t.re.match(n)?t.re.matched(1):n}return c.join("\n")}}E.__name__=!0;class j{constructor(e,t){this.source=e,this.sink=t}}j.__name__=!0;class I extends j{constructor(){let e=process.stdin,t=null;t={},super(K.wrap("stdin",e,t.chunkSize,t.onEnd),G.wrap("stdout",process.stdout))}}I.__name__=!0;class P{constructor(e,t){this.trials=e,this.proxy=t??new I}}P.__name__=!0;class W{static invoke(e,t){if(W.depth<500)W.depth++,e(t),W.depth--;else{let n=e,s=function(e){W.invoke(n,e)},r=t;W.defer((function(){s(r)}))}}static fromNiladic(e){return e}static defer(e){process.nextTick(e)}}class C{constructor(e){this.f=e}cancel(){null!=this.f&&(this.f(),this.f=null)}}C.__name__=!0;class O{constructor(e,t){this.dissolved=!1,this.a=e,this.b=t}cancel(){if(!this.dissolved){this.dissolved=!0;let e=this.a;null!=e&&e.cancel();let t=this.b;null!=t&&t.cancel(),this.a=null,this.b=null}}}O.__name__=!0;class D{constructor(e,t){if(null==e)throw h.thrown("callback expected but null received");this.cb=e,this.list=t}cancel(){if(null!=this.list){let e=this.list;this.cb=null,this.list=null,--e.used<e.used>>1&&e.compact()}}}D.__name__=!0;class R{constructor(){this.busy=!1,this.queue=[],this.used=0,this.cells=[]}ondrain(){}invoke(e,t){if(this.busy){let n=le(this,this.invoke),s=e,r=t,i=function(){n(s,r)};this.queue.push(i)}else{this.busy=!0;let n=this.cells.length,s=0;for(;s<n;){let t=this.cells[s++];null!=t.list&&W.invoke(t.cb,e)}if(this.busy=!1,t){let e=this.cells.length-n,t=0;for(;t<n;){let e=this.cells[t++];e.cb=null,e.list=null}let s=0;for(;s<e;){let e=s++;this.cells[e]=this.cells[n+e]}this.resize(e)}else this.used<this.cells.length&&this.compact();this.queue.length>0&&this.queue.shift()()}}compact(){if(!this.busy)if(0==this.used)this.resize(0),this.ondrain();else{let e=0,t=0,n=this.cells.length;for(;t<n;){let n=t++,s=this.cells[n];if(null!=s.cb&&(e!=n&&(this.cells[e]=s),++e==this.used))break}this.resize(this.used)}}resize(e){this.cells.length=e}}R.__name__=!0;class q{constructor(e,t,n){null==e&&(e=500),this.isTinkError=!0,this.code=e,this.message=t,this.pos=n,this.exceptionStack=[],this.callStack=[]}static withData(e,t,n,s){return q.typed(e,t,n,s)}static typed(e,t,n,s){let r=new q(e,t,s);return r.data=n,r}static asError(e){return null!=e&&e.isTinkError?e:null}static catchExceptions(e,t,n){try{return H.Success(e())}catch(e){let s=h.caught(e).unwrap(),r=q.asError(s);return H.Failure(r??(null==t?q.withData(null,"Unexpected Error",s,n):t(s)))}}}q.__name__=!0;var T=r["tink.core.Noise"]={__ename__:!0,__constructs__:["Noise"],Noise:{_hx_index:0,__enum__:"tink.core.Noise",toString:s}};class z{constructor(e){this.value=e}get(){return this.value}}z.__name__=!0;class L{constructor(e){this.value=e}flatMap(e){let t=this;return new B((function(n){return e(t.value.get()).handle(n)}))}handle(e){return W.invoke(e,this.value.get()),null}eager(){return this}gather(){return this}}L.__name__=!0;class M{static first(e,t){let n=new U,s=e.handle(le(n,n.trigger)),r=t.handle(le(n,n.trigger)),i=n;if(null!=s){let e=s;i.handle((function(t){e.cancel()}))}if(null!=r){let e=r;i.handle((function(t){e.cancel()}))}return i}static flatten(e){return new B((function(t){let n=null;return new O(e.handle((function(e){n=e.handle(t)})),new C((function(){null!=n&&n.cancel()})))}))}static ofJsPromise(e){return M.async((function(t){e.then((function(e){t(H.Success(e))})).catch((function(e){t(H.Failure(q.withData(null,e.message,e,{fileName:"tink/core/Future.hx",lineNumber:89,className:"tink.core._Future.Future_Impl_",methodName:"ofJsPromise"})))}))}))}static async(e,t){if(null==t&&(t=!1),t)return new B((function(t){return e(t),null}));{let t=new U;return W.invoke(e,le(t,t.trigger)),t}}}class U{constructor(){this.list=new R}handle(e){let t=this.list;if(null==t)return W.invoke(e,this.result),null;{let n=new D(e,t);return t.cells.push(n),t.used++,n}}flatMap(e){if(null==this.list)return e(this.result);{let t=new U,n=this.list,s=new D((function(n){e(n).handle(le(t,t.trigger))}),n);return n.cells.push(s),n.used++,t}}gather(){return this}eager(){return this}trigger(e){if(null==this.list)return!1;{let t=this.list;return this.list=null,this.result=e,t.invoke(e,!0),!0}}}U.__name__=!0;class B{constructor(e){this.suspended=!0;let t=this;this.wakeup=e,this.callbacks=new R,this.callbacks.ondrain=function(){if(null!=t.callbacks){t.suspended=!0;let e=t.link;null!=e&&e.cancel(),t.link=null}}}trigger(e){let t=this.callbacks;null!=t&&(this.callbacks=null,this.suspended=!1,this.result=e,this.link=null,this.wakeup=null,t.invoke(e,!0))}handle(e){if(null==this.callbacks)return W.invoke(e,this.result),null;{let t=this.callbacks,n=new D(e,t);return t.cells.push(n),t.used++,this.suspended&&(this.suspended=!1,this.link=this.wakeup(le(this,this.trigger))),n}}map(e){let t=this;return new B((function(n){return t.handle((function(t){n(e(t))}))}))}flatMap(e){return M.flatten(this.map(e))}gather(){return this}eager(){return this.handle(W.fromNiladic((function(){}))),this}}B.__name__=!0;var H=r["tink.core.Outcome"]={__ename__:!0,__constructs__:["Success","Failure"],Success:(n=function(e){return{_hx_index:0,data:e,__enum__:"tink.core.Outcome",toString:s}},n.__params__=["data"],n),Failure:(n=function(e){return{_hx_index:1,failure:e,__enum__:"tink.core.Outcome",toString:s}},n.__params__=["failure"],n)};class J{static noise(e){return J.next(e,(function(e){return new L(new z(H.Success(T.Noise)))}))}static next(e,t,n){null==n&&(n=!0);let s=n;null==n&&(s=!0);let r=e.flatMap((function(e){switch(e._hx_index){case 0:return t(e.data);case 1:return new L(new z(H.Failure(e.failure)))}}));return s?r.gather():r}}class ${}$.__name__=!0;class X{constructor(){}}X.__name__=!0;class Y extends X{constructor(e){super(),this.upcoming=e}}Y.__name__=!0;class G extends ${constructor(e){super(),this.target=e}static wrap(e,t){return new G(new V(e,t))}}G.__name__=!0;class K extends Y{constructor(e){super(M.async((function(t){e.read().handle((function(n){let s,r=t;switch(n._hx_index){case 0:let t=n.data;s=null==t?Z.End:Z.Link(t,new K(e));break;case 1:s=Z.Fail(n.failure)}r(s)}))}),!0))}static wrap(e,t,n,s){return new K(new Q(e,t,n,s))}}K.__name__=!0;class Q{constructor(e,t,n,s){this.name=e,this.native=t,this.chunkSize=n,this.end=M.async((function(n){t.once("end",(function(){n(H.Success(null))})),t.once("error",(function(t){n(H.Failure(new q(null,t.code+" - Failed reading from "+e+" because "+t.message,{fileName:"tink/io/nodejs/WrappedReadable.hx",lineNumber:22,className:"tink.io.nodejs.WrappedReadable",methodName:"new"})))}))})).eager(),null!=s&&this.end.handle(W.fromNiladic((function(){process.nextTick(s)})))}read(){let e=this;return M.first(M.async((function(t){let n=null;n=function(){try{let s=e.native.read(e.chunkSize);if(null==s)e.native.once("readable",n);else{let e="string"==typeof s?new x(s):s;t(H.Success(new S(e)))}}catch(n){let s=h.caught(n).unwrap();t(H.Failure(q.withData(null,"Error while reading from "+e.name,s,{fileName:"tink/io/nodejs/WrappedReadable.hx",lineNumber:48,className:"tink.io.nodejs.WrappedReadable",methodName:"read"})))}},n()})),this.end)}}Q.__name__=!0;class V{constructor(e,t){this.name=e,this.native=t,this.ended=M.async((function(e){t.once("end",(function(){e(H.Success(!1))})),t.once("finish",(function(){e(H.Success(!1))})),t.once("close",(function(){e(H.Success(!1))})),t.on("error",(function(t){e(H.Failure(new q(null,t.code+": "+t.message,{fileName:"tink/io/nodejs/WrappedWritable.hx",lineNumber:24,className:"tink.io.nodejs.WrappedWritable",methodName:"new"})))}))}))}}V.__name__=!0;var Z=r["tink.streams.Step"]={__ename__:!0,__constructs__:["Link","Fail","End"],Link:(n=function(e,t){return{_hx_index:0,value:e,next:t,__enum__:"tink.streams.Step",toString:s}},n.__params__=["value","next"],n),Fail:(n=function(e){return{_hx_index:1,e,__enum__:"tink.streams.Step",toString:s}},n.__params__=["e"],n),End:{_hx_index:2,__enum__:"tink.streams.Step",toString:s}};class ee{constructor(e){let t,n=ee.get_isWindows()?";":":",s=process.env.PATHEXT;if(null!=s){let e=s.split(n),r=new Array(e.length),i=0,l=e.length;for(;i<l;){let t=i++;r[t]=e[t].toLowerCase()}t=r}else t=[".exe",".cmd",".bat",".com"];this.extensions=t;let r=process.env.PATH;if(this.path=null!=r?r.split(n):[],null!=e){if(null!=e.extensions){let t=e.extensions,n=new Array(t.length),s=0,r=t.length;for(;s<r;){let e=s++;n[e]=t[e].toLowerCase()}this.extensions=n}null!=e.path&&(this.path=e.path)}}find(e){let t=this,n=(ee.get_isWindows()?[process.cwd()]:[]).concat(this.path),s=new Array(n.length),r=0,i=n.length;for(;r<i;){let i=r++;s[i]=t.findExecutables(n[i],e)}return k.then(v.all(s),(function(e){let n=t,s=[],r=0;for(;r<e.length;){let t=ie(e[r++]);for(;t.hasNext();)s.push(t.next())}return n.arrayUnique(s)}))}isExecutable(e){let t=this;return w.promisify(g.stat)(e).then((function(n){return n.isFile()?ee.get_isWindows()?k.resolve(t.checkFileExtension(e)):t.checkFilePermissions(n):k.resolve(!1)})).catch((function(e){return!1}))}arrayUnique(e){let t=[],n=0;for(;n<e.length;){let s=e[n];++n,t.includes(s)||t.push(s)}return t}checkFileExtension(e){let t=this.extensions,n="."+d.extension(e).toLowerCase();return t.includes(n)}checkFilePermissions(e){let t=-1;return k.then(k.then(k.then(k.resolve(0!=(1&e.mode)),(function(t){return t||0==(8&e.mode)?k.resolve(t):k.then(se.get_gid(),(function(t){return e.gid==t}))})),(function(n){return n||0==(64&e.mode)?k.resolve(n):k.then(se.get_uid(),(function(n){return t=n,e.uid==n}))})),(function(n){return n||0==(72&e.mode)?n:0==t}))}findExecutables(e,t){let n=this,s=d.isAbsolute(e)?e:d.join([process.cwd(),e]),r=[""].concat(ee.get_isWindows()?this.extensions:[]),i=new Array(r.length),l=0,a=r.length;for(;l<a;){let e=l++;i[e]=u.replace(d.join([s,""+t+r[e]]),"/",ee.get_isWindows()?"\\":"/")}let c=i,o=new Array(c.length),h=0,_=c.length;for(;h<_;){let e=h++;o[e]=n.isExecutable(c[e])}return k.then(v.all(o),(function(e){let t=[],n=0;for(;n<e.length;)e[n++]&&t.push(c[n-1]);return t}))}static get_isWindows(){if("Windows"!=o.systemName()){let e=process.env.OSTYPE;return"cygwin"==e||"msys"==e}return!0}}e.which.Finder=ee,ee.__name__=!0;class te extends h{constructor(e,t,n){super('Command "'+e+'" not found.',n),this.command=e,this.finder=t}}e.which.FinderException=te,te.__name__=!0;class ne{static which(e,t){let n=null!=t&&null!=t.all&&t.all,s=null!=t&&null!=t.onError?t.onError:null,r=new ee(t);return k.then(r.find(e),(function(t){if(t.length>0)return n?t:t[0];if(null!=s)return s(e);throw new te(e,r)}))}}e.which.FinderTools=ne,ne.__name__=!0;class se{static get_gid(){return"function"==typeof le(n=process,n.getgid)?k.resolve(process.getgid()):se.getProcessId("g")}static get_uid(){return"function"==typeof le(n=process,n.getuid)?k.resolve(process.getuid()):se.getProcessId("u")}static getProcessId(e){return ee.get_isWindows()?k.resolve(-1):w.promisify(p.exec)("id -"+e).then((function(e){let t=c.parseInt(e.stdout);return null!=t?t:-1}))}}se.__name__=!0;class re{constructor(){this.version=!1,this.silent=!1,this.help=!1,this.all=!1}run(e){let t=this;if(this.help){let e=(new E).format(N.get());process.stdout.write(c.string(e)),process.stdout.write("\n"),process.exit(0)}return this.version&&(process.stdout.write("1.0.0"),process.stdout.write("\n"),process.exit(0)),(0==e.length||"1"==process.env.HAXELIB_RUN&&1==e.length)&&(process.stdout.write("You must provide the name of a command to find."),process.stdout.write("\n"),process.exit(64)),M.ofJsPromise(v.catch_(k.then(ne.which(e[0],{all:this.all}),(function(e){t.silent||("string"==typeof e&&(e=[e]),a.iter(e,o.println))})),(function(n){if(n instanceof te){if(!t.silent){let t='No "'+e[0]+'" in ('+n.finder.path.join(ee.get_isWindows()?";":":")+").";process.stdout.write(c.string(t)),process.stdout.write("\n")}process.exit(1)}else process.stdout.write(c.string(n)),process.stdout.write("\n"),process.exit(2)})))}static main(){process.title="Which.hx",new A(new re,new P(5)).process(process.argv.slice(2)).handle(y.exit)}}function ie(e){return e instanceof Array?new f(e):e.iterator()}function le(e,n){return null==n?null:(null==n.__id__&&(n.__id__=t.$haxeUID++),null==e.hx__closures__?e.hx__closures__={}:s=e.hx__closures__[n.__id__],null==s&&(s=n.bind(e),e.hx__closures__[n.__id__]=s),s);var s}re.__name__=!0,t.$haxeUID|=0,"undefined"!=typeof performance&&"function"==typeof performance.now&&(l.now=performance.now.bind(performance)),null==String.fromCodePoint&&(String.fromCodePoint=function(e){return e<65536?String.fromCharCode(e):String.fromCharCode(55232+(e>>10))+String.fromCharCode(56320+(1023&e))}),String.__name__=!0,Array.__name__=!0,m.__toStr={}.toString,k.factory=new b,W.depth=0,re.main()}("undefined"!=typeof exports?exports:"undefined"!=typeof window?window:"undefined"!=typeof self?self:this,"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:this);
