#!/usr/bin/env node
!function(e,t){"use strict";e.which=e.which||{};var n,r=function(){return b.__string_rec(this,"")},s=s||{};class i{constructor(e,t){this.r=new RegExp(e,t.split("u").join(""))}match(e){return this.r.global&&(this.r.lastIndex=0),this.r.m=this.r.exec(e),this.r.s=e,null!=this.r.m}matched(e){if(null!=this.r.m&&e>=0&&e<this.r.m.length)return this.r.m[e];throw d.thrown("EReg::matched")}}i.__name__=!0;class a{static cca(e,t){let n=e.charCodeAt(t);if(n==n)return n}static substr(e,t,n){if(null==n)n=e.length;else if(n<0){if(0!=t)return"";n=e.length+n}return e.substr(t,n)}static now(){return Date.now()}}a.__name__=!0;class l{static iter(e,t){let n=Pe(e);for(;n.hasNext();)t(n.next())}static fold(e,t,n){let r=Pe(e);for(;r.hasNext();)n=t(r.next(),n);return n}static find(e,t){let n=Pe(e);for(;n.hasNext();){let e=n.next();if(t(e))return e}return null}}l.__name__=!0,Math.__name__=!0;class c{static string(e){return b.__string_rec(e,"")}static parseInt(e){if(null!=e){let t=0,n=e.length;for(;t<n;){let n=t++,r=e.charCodeAt(n);if(r<=8||r>=14&&32!=r&&45!=r){let t=e.charCodeAt(n+1),r=parseInt(e,120==t||88==t?16:10);return isNaN(r)?null:r}}}return null}}c.__name__=!0;class u{static startsWith(e,t){return e.length>=t.length&&0==e.lastIndexOf(t,0)}static isSpace(e,t){let n=a.cca(e,t);return n>8&&n<14||32==n}static ltrim(e){let t=e.length,n=0;for(;n<t&&u.isSpace(e,n);)++n;return n>0?a.substr(e,n,t-n):e}static rtrim(e){let t=e.length,n=0;for(;n<t&&u.isSpace(e,t-n-1);)++n;return n>0?a.substr(e,0,t-n):e}static trim(e){return u.ltrim(u.rtrim(e))}static lpad(e,t,n){if(t.length<=0)return e;let r="";for(n-=e.length;r.length<n;)r+=null==t?"null":""+t;return r+=null==e?"null":""+e,r}static replace(e,t,n){return e.split(t).join(n)}}u.__name__=!0;class o{static println(e){process.stdout.write(c.string(e)),process.stdout.write("\n")}static systemName(){let e=process.platform;switch(e){case"darwin":return"Mac";case"freebsd":return"BSD";case"linux":return"Linux";case"win32":return"Windows";default:return e}}}o.__name__=!0;class _{static exists(e){let t=new G;return k.stat(e,(function(e,n){t.trigger(null==e)})),t}static stat(e){let t=new G;return k.stat(e,(function(e,n){t.trigger(null==e?Q.Success({gid:n.gid,uid:n.uid,atime:n.atime,mtime:n.mtime,ctime:n.ctime,size:0|n.size,dev:n.dev,ino:0|n.ino,nlink:n.nlink,rdev:n.rdev,mode:n.mode}):Q.Failure(q.withData(null,e.message,e,{fileName:"asys/FileSystem.hx",lineNumber:53,className:"asys.FileSystem",methodName:"stat"})))})),t}static absolutePath(e){return w.isAbsolute(e)?e:w.join([process.cwd(),e])}static isDirectory(e){let t=new G;return k.stat(e,(function(e,n){t.trigger(null==e&&n.isDirectory())})),t}}_.__name__=!0;class h{constructor(e,t){this.exitTrigger=new G;let n=this;this.process=S.spawn(e,t),this.stdin=ie.wrap("stdin",this.process.stdin);let r=null;r={},this.stderr=ae.wrap("stderr",this.process.stderr,r.chunkSize,r.onEnd);let s=null;s={},this.stdout=ae.wrap("stdout",this.process.stdout,s.chunkSize,s.onEnd),this.process.on("exit",(function(e,t){n.exitTrigger.trigger(e)}))}exitCode(){return this.exitTrigger}close(){}}h.__name__=!0;s["haxe.StackItem"]={__ename__:!0,__constructs__:["CFunction","Module","FilePos","Method","LocalFunction"],CFunction:{_hx_index:0,__enum__:"haxe.StackItem",toString:r},Module:(n=function(e){return{_hx_index:1,m:e,__enum__:"haxe.StackItem",toString:r}},n.__params__=["m"],n),FilePos:(n=function(e,t,n,s){return{_hx_index:2,s:e,file:t,line:n,column:s,__enum__:"haxe.StackItem",toString:r}},n.__params__=["s","file","line","column"],n),Method:(n=function(e,t){return{_hx_index:3,classname:e,method:t,__enum__:"haxe.StackItem",toString:r}},n.__params__=["classname","method"],n),LocalFunction:(n=function(e){return{_hx_index:4,v:e,__enum__:"haxe.StackItem",toString:r}},n.__params__=["v"],n)};class d extends Error{constructor(e,t,n){super(e),this.message=e,this.__previousException=t,this.__nativeException=null!=n?n:this}unwrap(){return this.__nativeException}get_native(){return this.__nativeException}static caught(e){return e instanceof d?e:e instanceof Error?new d(e.message,null,e):new f(e,null,e)}static thrown(e){if(e instanceof d)return e.get_native();if(e instanceof Error)return e;return new f(e)}}d.__name__=!0;class f extends d{constructor(e,t,n){super(String(e),t,n),this.value=e}unwrap(){return this.value}}f.__name__=!0;s["haxe.ds.Option"]={__ename__:!0,__constructs__:["Some","None"],Some:(n=function(e){return{_hx_index:0,v:e,__enum__:"haxe.ds.Option",toString:r}},n.__params__=["v"],n),None:{_hx_index:1,__enum__:"haxe.ds.Option",toString:r}};class m{constructor(e){this.length=e.byteLength,this.b=new Uint8Array(e),this.b.bufferValue=e,e.hxBytes=this,e.bytes=this.b}blit(e,t,n,r){if(e<0||n<0||r<0||e+r>this.length||n+r>t.length)throw d.thrown(p.OutsideBounds);0==n&&r==t.b.byteLength?this.b.set(t.b,e):this.b.set(t.b.subarray(n,n+r),e)}getString(e,t,n){if(e<0||t<0||e+t>this.length)throw d.thrown(p.OutsideBounds);null==n&&(n=g.UTF8);let r="",s=this.b,i=e,a=e+t;switch(n._hx_index){case 0:for(;i<a;){let e=s[i++];if(e<128){if(0==e)break;r+=String.fromCodePoint(e)}else if(e<224){let t=(63&e)<<6|127&s[i++];r+=String.fromCodePoint(t)}else if(e<240){let t=(31&e)<<12|(127&s[i++])<<6|127&s[i++];r+=String.fromCodePoint(t)}else{let t=(15&e)<<18|(127&s[i++])<<12|(127&s[i++])<<6|127&s[i++];r+=String.fromCodePoint(t)}}break;case 1:for(;i<a;){let e=s[i++]|s[i++]<<8;r+=String.fromCodePoint(e)}}return r}toString(){return this.getString(0,this.length)}static ofData(e){let t=e.hxBytes;return null!=t?t:new m(e)}}m.__name__=!0;var g=s["haxe.io.Encoding"]={__ename__:!0,__constructs__:["UTF8","RawNative"],UTF8:{_hx_index:0,__enum__:"haxe.io.Encoding",toString:r},RawNative:{_hx_index:1,__enum__:"haxe.io.Encoding",toString:r}},p=s["haxe.io.Error"]={__ename__:!0,__constructs__:["Blocked","Overflow","OutsideBounds","Custom"],Blocked:{_hx_index:0,__enum__:"haxe.io.Error",toString:r},Overflow:{_hx_index:1,__enum__:"haxe.io.Error",toString:r},OutsideBounds:{_hx_index:2,__enum__:"haxe.io.Error",toString:r},Custom:(n=function(e){return{_hx_index:3,e,__enum__:"haxe.io.Error",toString:r}},n.__params__=["e"],n)};class w{constructor(e){switch(e){case".":case"..":return this.dir=e,void(this.file="")}let t=e.lastIndexOf("/"),n=e.lastIndexOf("\\");t<n?(this.dir=a.substr(e,0,n),e=a.substr(e,n+1,null),this.backslash=!0):n<t?(this.dir=a.substr(e,0,t),e=a.substr(e,t+1,null)):this.dir=null;let r=e.lastIndexOf(".");-1!=r?(this.ext=a.substr(e,r+1,null),this.file=a.substr(e,0,r)):(this.ext=null,this.file=e)}static extension(e){let t=new w(e);return null==t.ext?"":t.ext}static join(e){let t=[],n=0;for(;n<e.length;){let r=e[n];++n,null!=r&&""!=r&&t.push(r)}if(0==t.length)return"";let r=t[0],s=1,i=t.length;for(;s<i;)r=w.addTrailingSlash(r),r+=t[s++];return w.normalize(r)}static normalize(e){let t="/";if((e=e.split("\\").join(t))==t)return t;let n=[],r=0,s=e.split(t);for(;r<s.length;){let t=s[r];++r,".."==t&&n.length>0&&".."!=n[n.length-1]?n.pop():""==t?(n.length>0||47==a.cca(e,0))&&n.push(t):"."!=t&&n.push(t)}let i="",l=!1,c=!1,u=0,o=n.join(t);for(;u<o.length;){let e=o,t=u++,n=e.charCodeAt(t);n>=55296&&n<=56319&&(n=n-55232<<10|1023&e.charCodeAt(t+1));n>=65536&&++u;let r=n;switch(r){case 47:if(l){let e=r;l=!1,c&&(i+="/",c=!1),i+=String.fromCodePoint(e)}else c=!0;break;case 58:i+=":",l=!0;break;default:let e=r;l=!1,c&&(i+="/",c=!1),i+=String.fromCodePoint(e)}}return i}static addTrailingSlash(e){if(0==e.length)return"/";let t=e.lastIndexOf("/"),n=e.lastIndexOf("\\");return t<n?n!=e.length-1?e+"\\":e:t!=e.length-1?e+"/":e}static isAbsolute(e){return!!u.startsWith(e,"/")||(":"==e.charAt(1)||!!u.startsWith(e,"\\\\"))}}w.__name__=!0;class x{constructor(e){this.current=0,this.array=e}hasNext(){return this.current<this.array.length}next(){return this.array[this.current++]}}x.__name__=!0;class b{static __string_rec(e,t){if(null==e)return"null";if(t.length>=5)return"<...>";let n=typeof e;switch("function"==n&&(e.__name__||e.__ename__)&&(n="object"),n){case"function":return"<function>";case"object":if(e.__enum__){let n=s[e.__enum__],r=n.__constructs__[e._hx_index],i=n[r];return i.__params__?(t+="\t",r+"("+function(n){let r=[];{let n=0,s=i.__params__;for(;n<s.length;){let i=s[n];n+=1,r.push(b.__string_rec(e[i],t))}}return r}().join(",")+")"):r}if(e instanceof Array){let n="[";t+="\t";let r=0,s=e.length;for(;r<s;){let s=r++;n+=(s>0?",":"")+b.__string_rec(e[s],t)}return n+="]",n}let n;try{n=e.toString}catch(e){return"???"}if(null!=n&&n!=Object.toString&&"function"==typeof n){let t=e.toString();if("[object Object]"!=t)return t}let r="{\n";t+="\t";let i=null!=e.hasOwnProperty,a=null;for(a in e)i&&!e.hasOwnProperty(a)||"prototype"!=a&&"__class__"!=a&&"__super__"!=a&&"__interfaces__"!=a&&"__properties__"!=a&&(2!=r.length&&(r+=", \n"),r+=t+a+" : "+b.__string_rec(e[a],t));return r+="\n"+(t=t.substring(1))+"}",r;case"string":return e;default:return String(e)}}}b.__name__=!0;var S=require("child_process"),k=require("fs"),y=require("buffer").Buffer;class N{static bytesOfBuffer(e){let t=Object.create(m.prototype);return t.length=e.byteLength,t.b=e,e.bufferValue=e,e.hxBytes=t,e.bytes=e,t}}N.__name__=!0;class v{flatten(e){}}v.__name__=!0;class F extends v{constructor(){super()}getLength(){return 0}blitTo(e,t){}toString(){return""}}F.__name__=!0;class E{static concat(e,t){return R.cons(e,t)}static catChunk(e,t){return E.concat(e,t)}}class C{static exit(e){switch(e._hx_index){case 0:process.exit(0);break;case 1:let t=e.failure,n=t.message;null!=t.data&&(n+=", "+c.string(t.data)),process.stdout.write(c.string(n)),process.stdout.write("\n");let r=t.code;process.exit(r)}}}C.__name__=!0;class P extends v{constructor(e,t,n){super(),this.data=e,this.from=t,this.to=n}flatten(e){e.push(this)}getLength(){return this.to-this.from}blitTo(e,t){null==this.wrapped&&(this.wrapped=m.ofData(this.data)),e.blit(t,this.wrapped,this.from,this.to-this.from)}toString(){return null==this.wrapped&&(this.wrapped=m.ofData(this.data)),this.wrapped.getString(this.from,this.to-this.from)}static of(e){if(0==e.length)return E.EMPTY;let t=new P(e.b.bufferValue,0,e.length);return t.wrapped=e,t}}P.__name__=!0;class R extends v{constructor(){super()}getLength(){return this.length}flatten(e){let t=0,n=this.chunks;for(;t<n.length;)n[t++].flatten(e)}blitTo(e,t){let n=0,r=this.chunks.length;for(;n<r;){let r=n++;this.chunks[r].blitTo(e,t+this.offsets[r])}}toString(){return this.toBytes().toString()}toBytes(){let e=new m(new ArrayBuffer(this.length));return this.blitTo(e,0),e}static asCompound(e){return e instanceof R?e:null}static cons(e,t){let n=t.getLength();if(0==e.getLength())return 0==n?E.EMPTY:t;if(0==n)return e;{let n=R.asCompound(t),r=R.asCompound(e);if(null==r){if(null==n)return R.create([e,t],2);if(n.depth<100)return R.create([e,t],n.depth+1);{let e=[];return n.flatten(e),t.flatten(e),R.create(e,2)}}if(null==n){if(r.depth<100)return R.create([e,t],r.depth+1);{let e=[];return r.flatten(e),t.flatten(e),R.create(e,2)}}{let e=r.depth>n.depth?r.depth:n.depth;return R.create(r.chunks.concat(n.chunks),e)}}}static create(e,t){let n=new R,r=[0],s=0,i=0;for(;i<e.length;)r.push(s+=e[i++].getLength());return n.chunks=e,n.offsets=r,n.length=s,n.depth=t,n}}R.__name__=!0;class A{constructor(e){this.buffer=e}flatten(e){P.of(this.toBytes()).flatten(e)}getLength(){return this.buffer.length}toString(){return this.buffer.toString()}toBytes(){let e=A.alloc(this.buffer.length);return this.buffer.copy(e),N.bytesOfBuffer(e)}blitTo(e,t){let n=e.b;this.buffer.copy(y.from(n.buffer,n.byteOffset,e.length),t)}}A.__name__=!0;class O{static get(){return null==O.doc&&(O.doc={doc:" Find the instances of an executable in the system path. ",commands:[{isDefault:!0,isSub:!1,names:[],doc:" <command> : The name of the command to find. "}],flags:[{names:["--all"],aliases:["a"],doc:" List all instances of executables found (instead of just the first one). "},{names:["--help"],aliases:["h"],doc:" Output usage information. "},{names:["--version"],aliases:["v"],doc:" Output the version number. "}]}),O.doc}}O.__name__=!0;class T{constructor(e,t,n){this.command=e,this.prompt=t,this.hasFlags=n}processArgs(e){let t=this;return this.hasFlags?q.catchExceptions((function(){let n=T.expandAssignments(e),r=[],s=0,i=!1;for(;s<n.length;){let e=n[s];if("--"==e)i=!0,++s;else if(i||45!=a.cca(e,0))r.push(e),++s;else{let r=t.processFlag(n,s);if(-1==r){if(45==a.cca(e,1))throw d.thrown('Unrecognized flag "'+e+'"');{let r=t.processAlias(n,s);if(-1==r)throw d.thrown('Unrecognized alias "'+e+'"');s+=r+1}}else s+=r+1}}return r}),null,{fileName:"tink/cli/Router.hx",lineNumber:25,className:"tink.cli.Router",methodName:"processArgs"}):Q.Success(e)}processFlag(e,t){return-1}processAlias(e,t){return-1}static expandAssignments(e){let t=[],n=!0,r=0;for(;r<e.length;){let s=e[r];if(++r,"--"==s&&(n=!1),n){let e=s.indexOf("="),n=a.cca(s,1),r=a.cca(s,0);null==r?t.push(s):45==r?null==n?t.push(s):45==n&&-1!=e?(t.push(a.substr(s,0,e)),t.push(a.substr(s,e+1,null))):t.push(s):t.push(s)}else t.push(s)}return t}}T.__name__=!0;class D extends T{constructor(e,t){super(e,t,!0)}process(e){let t=this;if(null==e[0]){let n,r=this.processArgs(e);switch(r._hx_index){case 0:n=r.data;break;case 1:return new $(new V(Q.Failure(r.failure)))}return Z.next(this.promptRequired(),(function(e){return t.run_run(n)}))}{let n,r=this.processArgs(e);switch(r._hx_index){case 0:n=r.data;break;case 1:return new $(new V(Q.Failure(r.failure)))}return Z.next(this.promptRequired(),(function(e){return t.run_run(n)}))}}processFlag(e,t){switch(e[t]){case"--all":this.command.all=!0;break;case"--help":this.command.help=!0;break;case"--version":this.command.version=!0;break;default:return-1}return t-t}processAlias(e,t){let n=e[t],r=1,s=n.length;for(;r<s;){let e=r++,t=a.cca(n,e);if(null==t)throw d.thrown("Invalid alias '-"+n.charAt(e)+"'");switch(t){case 97:this.command.all=!0;break;case 104:this.command.help=!0;break;case 118:this.command.version=!0;break;default:throw d.thrown("Invalid alias '-"+n.charAt(e)+"'")}}return t-t}promptRequired(){return X.async((function(e){e(Q.Success(Y.Noise))}))}run_run(e){return e.length<0?new $(new V(Q.Failure(new q(null,"Insufficient arguments. Expected: 0, Got: "+e.length,{fileName:"src/which/Program.hx",lineNumber:39,className:"tink.cli.Router0",methodName:"run_run"})))):this.command.run(e.slice(0,e.length))}}D.__name__=!0;class I{constructor(e){this.re=new i("^\\s*\\*?\\s{0,2}(.*)$",""),this.root=e}format(e){let t="",n=this;t+="\n";let r=this.formatDoc(e.doc);null!=r&&(t+=c.string(r+"\n\n"));let s=e.commands,i=[],a=0;for(;a<s.length;){let e=s[a];++a,e.isDefault||i.push(e)}null!=this.root&&(t+=c.string("  Usage: "+this.root+"\n"));let o=l.find(e.commands,(function(e){return e.isDefault}));if(null!=o){let e=this.formatDoc(o.doc);null!=e&&(t+=c.string(this.indent(e,4)+"\n\n"))}if(i.length>0){let e=l.fold(i,(function(e,t){let n=0,r=e.names;for(;n<r.length;){let e=r[n];++n,e.length>t&&(t=e.length)}return t}),0);null!=this.root&&(t+=c.string("  Usage: "+this.root+" <subcommand>\n")),t+=c.string("    Subcommands:\n");let r=function(r,s){null==s&&(s="(doc missing)"),t+=c.string(n.indent(u.lpad(r," ",e)+" : "+u.trim(n.indent(s,e+3)),6)+"\n")},s=0;for(;s<i.length;){let e=i[s];++s;let t=e.names[0];if(r(t,this.formatDoc(e.doc)),e.names.length>1){let n=1,s=e.names.length;for(;n<s;)r(e.names[n++],"Alias of "+t)}}}if(e.flags.length>0){let r=function(e){let t=e.names.join(", ");if(e.aliases.length>0){let n=e.aliases,r=new Array(n.length),s=0,i=n.length;for(;s<i;){let e=s++;r[e]="-"+n[e]}t+=", "+r.join(", ")}return t},s=l.fold(e.flags,(function(e,t){let n=r(e);return n.length>t&&(t=n.length),t}),0),i=function(e,r){null==r&&(r=""),t+=c.string(n.indent(u.lpad(e," ",s)+" : "+u.trim(n.indent(r,s+3)),6)+"\n")};t=(t+="\n")+c.string("  Flags:\n");let a=0,o=e.flags;for(;a<o.length;){let e=o[a];++a,i(r(e),this.formatDoc(e.doc))}}return t}indent(e,t){let n=e.split("\n"),r=new Array(n.length),s=0,i=n.length;for(;s<i;){let e=s++;r[e]=u.lpad(""," ",t)+n[e]}return r.join("\n")}formatDoc(e){let t=this;if(null==e)return null;let n=e.split("\n"),r=u.trim,s=new Array(n.length),i=0,a=n.length;for(;i<a;){let e=i++;s[e]=r(n[e])}let l=s;for(;""==l[0];)l=l.slice(1);for(;""==l[l.length-1];)l.pop();let c=new Array(l.length),o=0,_=l.length;for(;o<_;){let e=o++,n=l[e];c[e]=t.re.match(n)?t.re.matched(1):n}return c.join("\n")}}I.__name__=!0;class j{constructor(e,t){this.source=e,this.sink=t}}j.__name__=!0;class W extends j{constructor(){let e=process.stdin,t=null;t={},super(ae.wrap("stdin",e,t.chunkSize,t.onEnd),ie.wrap("stdout",process.stdout))}}W.__name__=!0;class B{constructor(e,t){this.trials=e,this.proxy=t??new W}}B.__name__=!0;class L{static invoke(e,t){if(L.depth<500)L.depth++,e(t),L.depth--;else{let n=e,r=function(e){L.invoke(n,e)},s=t;L.defer((function(){r(s)}))}}static fromNiladic(e){return e}static defer(e){process.nextTick(e)}}class U{constructor(e){this.f=e}cancel(){null!=this.f&&(this.f(),this.f=null)}}U.__name__=!0;class z{constructor(e,t){this.dissolved=!1,this.a=e,this.b=t}cancel(){if(!this.dissolved){this.dissolved=!0;let e=this.a;null!=e&&e.cancel();let t=this.b;null!=t&&t.cancel(),this.a=null,this.b=null}}}z.__name__=!0;class M{constructor(e,t){if(null==e)throw d.thrown("callback expected but null received");this.cb=e,this.list=t}cancel(){if(null!=this.list){let e=this.list;this.cb=null,this.list=null,--e.used<=e.cells.length>>1&&e.compact()}}}M.__name__=!0;class H{constructor(){this.busy=!1,this.queue=[],this.used=0,this.cells=[]}ondrain(){}onfill(){}invoke(e,t){if(this.busy){let n=Re(this,this.invoke),r=e,s=t,i=function(){n(r,s)};this.queue.push(i)}else{this.busy=!0;let n=this.cells.length,r=0;for(;r<n;){let t=this.cells[r++];null!=t.list&&L.invoke(t.cb,e)}if(this.busy=!1,t){let e=this.cells.length-n,t=0;for(;t<n;){let e=this.cells[t++];e.cb=null,e.list=null}let r=0;for(;r<e;){let e=r++;this.cells[e]=this.cells[n+e]}this.resize(e)}else this.used<this.cells.length&&this.compact();this.queue.length>0&&this.queue.shift()()}}compact(){if(!this.busy)if(0==this.used)this.resize(0),this.ondrain();else{let e=0,t=0,n=this.cells.length;for(;t<n;){let n=t++,r=this.cells[n];if(null!=r.cb&&(e!=n&&(this.cells[e]=r),++e==this.used))break}this.resize(this.used)}}resize(e){this.cells.length=e}}H.__name__=!0;class q{constructor(e,t,n){null==e&&(e=500),this.isTinkError=!0,this.code=e,this.message=t,this.pos=n,this.exceptionStack=[],this.callStack=[]}static withData(e,t,n,r){return q.typed(e,t,n,r)}static typed(e,t,n,r){let s=new q(e,t,r);return s.data=n,s}static asError(e){return null!=e&&e.isTinkError?e:null}static catchExceptions(e,t,n){try{return Q.Success(e())}catch(e){let r=d.caught(e).unwrap(),s=q.asError(r);return Q.Failure(s??(null==t?q.withData(null,"Unexpected Error",r,n):t(r)))}}}q.__name__=!0;var Y=s["tink.core.Noise"]={__ename__:!0,__constructs__:["Noise"],Noise:{_hx_index:0,__enum__:"tink.core.Noise",toString:r}};class V{constructor(e){this.value=e}get(){return this.value}map(e){let t=this;return new K((function(){return e(t.value)}))}}V.__name__=!0;class ${constructor(e){this.value=e}map(e){return new $(this.value.map(e))}flatMap(e){let t=this;return new J((function(n){return e(t.value.get()).handle(n)}))}handle(e){return L.invoke(e,this.value.get()),null}eager(){return this}gather(){return this}}$.__name__=!0;class X{static first(e,t){let n=new G,r=e.handle(Re(n,n.trigger)),s=t.handle(Re(n,n.trigger)),i=n;if(null!=r){let e=r;i.handle((function(t){e.cancel()}))}if(null!=s){let e=s;i.handle((function(t){e.cancel()}))}return i}static next(e,t){return e.flatMap((function(e){return t(e)}))}static flatten(e){return new J((function(t){let n=null;return new z(e.handle((function(e){n=e.handle(t)})),new U((function(){null!=n&&n.cancel()})))}))}static async(e,t){if(null==t&&(t=!1),t)return new J((function(t){return e(t),null}));{let t=new G;return L.invoke(e,Re(t,t.trigger)),t}}}class G{constructor(){this.list=new H}handle(e){let t=this.list;if(null==t)return L.invoke(e,this.result),null;{let n=new M(e,t);return t.cells.push(n),0==t.used++&&t.onfill(),n}}map(e){if(null==this.list)return new $(new V(e(this.result)));{let t=new G,n=this.list,r=new M((function(n){t.trigger(e(n))}),n);return n.cells.push(r),0==n.used++&&n.onfill(),t}}flatMap(e){if(null==this.list)return e(this.result);{let t=new G,n=this.list,r=new M((function(n){e(n).handle(Re(t,t.trigger))}),n);return n.cells.push(r),0==n.used++&&n.onfill(),t}}gather(){return this}eager(){return this}trigger(e){if(null==this.list)return!1;{let t=this.list;return this.list=null,this.result=e,t.invoke(e,!0),!0}}}G.__name__=!0;class J{constructor(e){this.suspended=!0;let t=this;this.wakeup=e,this.callbacks=new H,this.callbacks.ondrain=function(){if(null!=t.callbacks){t.suspended=!0;let e=t.link;null!=e&&e.cancel(),t.link=null}}}trigger(e){let t=this.callbacks;null!=t&&(this.callbacks=null,this.suspended=!1,this.result=e,this.link=null,this.wakeup=null,t.invoke(e,!0))}handle(e){if(null==this.callbacks)return L.invoke(e,this.result),null;{let t=this.callbacks,n=new M(e,t);return t.cells.push(n),0==t.used++&&t.onfill(),this.suspended&&(this.suspended=!1,this.link=this.wakeup(Re(this,this.trigger))),n}}map(e){let t=this;return new J((function(n){return t.handle((function(t){n(e(t))}))}))}flatMap(e){return X.flatten(this.map(e))}gather(){return this}eager(){return this.handle(L.fromNiladic((function(){}))),this}}J.__name__=!0;class K{constructor(e){this.f=e}get(){return null!=this.f&&(this.result=this.f(),this.f=null),this.result}map(e){let t=this;return new K((function(){return e(t.get())}))}}K.__name__=!0;var Q=s["tink.core.Outcome"]={__ename__:!0,__constructs__:["Success","Failure"],Success:(n=function(e){return{_hx_index:0,data:e,__enum__:"tink.core.Outcome",toString:r}},n.__params__=["data"],n),Failure:(n=function(e){return{_hx_index:1,failure:e,__enum__:"tink.core.Outcome",toString:r}},n.__params__=["failure"],n)};class Z{static next(e,t,n){null==n&&(n=!0);let r=n;null==n&&(r=!0);let s=e.flatMap((function(e){switch(e._hx_index){case 0:return t(e.data);case 1:return new $(new V(Q.Failure(e.failure)))}}));return r?s.gather():s}}class ee{}ee.__name__=!0;class te{constructor(){}get_depleted(){return!1}regroup(e){return new de(this,e)}filter(e){return this.regroup(e)}append(e){return this.get_depleted()?e:he.of([this,e])}decompose(e){this.get_depleted()||e.push(this)}reduce(e,t){let n=this;return X.async((function(r){n.forEach(be.ofUnknown((function(n){return t(e,n).map((function(t){switch(t._hx_index){case 0:return e=t.result,fe.Resume;case 1:return fe.Clog(t.e)}})).gather()}))).handle((function(t){switch(t._hx_index){case 0:throw d.thrown("assert");case 1:r(pe.Crashed(t.error,t.at));break;case 2:r(pe.Failed(t.error));break;case 3:r(pe.Reduced(e))}}))}),!0)}forEach(e){throw d.thrown("not implemented")}}te.__name__=!0;class ne extends te{constructor(){super()}get_depleted(){return!0}forEach(e){return new $(new V(me.Depleted))}static make(){return ne.inst}}ne.__name__=!0;class re{static all(e){return class{static concatAll(e){return e.reduce(E.EMPTY,class{static ofSafe(e){return e}}.ofSafe((function(e,t){return new $(new V(ge.Progress(E.catChunk(e,t))))})))}}.concatAll(e).map((function(e){switch(e._hx_index){case 1:return Q.Failure(e.error);case 2:return Q.Success(e.result)}})).gather()}}re.__name__=!0;class se extends te{constructor(e){super(),this.upcoming=e}forEach(e){let t=this;return X.async((function(n){t.upcoming.handle((function(r){switch(r._hx_index){case 0:let s=r.next;e(r.value).handle((function(r){switch(r._hx_index){case 0:n(me.Halted(t));break;case 1:n(me.Halted(s));break;case 2:s.forEach(e).handle(n);break;case 3:n(me.Clogged(r.e,t))}}));break;case 1:n(me.Failed(r.e));break;case 2:n(me.Depleted)}}))}),!0)}static stream(e){return new se(X.async(e,!0))}}se.__name__=!0;class ie extends ee{constructor(e){super(),this.target=e}static wrap(e,t){return new ie(new ce(e,t))}}ie.__name__=!0;class ae extends se{constructor(e){super(X.async((function(t){e.read().handle((function(n){let r,s=t;switch(n._hx_index){case 0:let t=n.data;r=null==t?ke.End:ke.Link(t,new ae(e));break;case 1:r=ke.Fail(n.failure)}s(r)}))}),!0))}static wrap(e,t,n,r){return new ae(new le(e,t,n,r))}}ae.__name__=!0;class le{constructor(e,t,n,r){this.name=e,this.native=t,this.chunkSize=n,this.end=X.async((function(n){t.once("end",(function(){n(Q.Success(null))})),t.once("error",(function(t){n(Q.Failure(new q(null,t.code+" - Failed reading from "+e+" because "+t.message,{fileName:"tink/io/nodejs/WrappedReadable.hx",lineNumber:22,className:"tink.io.nodejs.WrappedReadable",methodName:"new"})))}))})).eager(),null!=r&&this.end.handle(L.fromNiladic((function(){process.nextTick(r)})))}read(){let e=this;return X.first(X.async((function(t){let n=null;n=function(){try{let r=e.native.read(e.chunkSize);if(null==r)e.native.once("readable",n);else{let e="string"==typeof r?new y(r):r;t(Q.Success(new A(e)))}}catch(n){let r=d.caught(n).unwrap();t(Q.Failure(q.withData(null,"Error while reading from "+e.name,r,{fileName:"tink/io/nodejs/WrappedReadable.hx",lineNumber:48,className:"tink.io.nodejs.WrappedReadable",methodName:"read"})))}},n()})),this.end)}}le.__name__=!0;class ce{constructor(e,t){this.name=e,this.native=t,this.ended=X.async((function(e){t.once("end",(function(){e(Q.Success(!1))})),t.once("finish",(function(){e(Q.Success(!1))})),t.once("close",(function(){e(Q.Success(!1))})),t.on("error",(function(t){e(Q.Failure(new q(null,t.code+": "+t.message,{fileName:"tink/io/nodejs/WrappedWritable.hx",lineNumber:24,className:"tink.io.nodejs.WrappedWritable",methodName:"new"})))}))}))}}ce.__name__=!0;class ue{static single(e){return new xe(new V(e))}static ofIterator(e){let t=null;return t=function(n){n(e.hasNext()?ke.Link(e.next(),se.stream(t)):ke.End)},se.stream(t)}static flatten(e){return new Se(e)}static ofError(e){return new we(e)}}var oe=s["tink.streams.RegroupStatus"]={__ename__:!0,__constructs__:["Flowing","Errored","Ended"],Flowing:{_hx_index:0,__enum__:"tink.streams.RegroupStatus",toString:r},Errored:(n=function(e){return{_hx_index:1,e,__enum__:"tink.streams.RegroupStatus",toString:r}},n.__params__=["e"],n),Ended:{_hx_index:2,__enum__:"tink.streams.RegroupStatus",toString:r}},_e=s["tink.streams.RegroupResult"]={__ename__:!0,__constructs__:["Converted","Terminated","Untouched","Errored"],Converted:(n=function(e){return{_hx_index:0,data:e,__enum__:"tink.streams.RegroupResult",toString:r}},n.__params__=["data"],n),Terminated:(n=function(e){return{_hx_index:1,data:e,__enum__:"tink.streams.RegroupResult",toString:r}},n.__params__=["data"],n),Untouched:{_hx_index:2,__enum__:"tink.streams.RegroupResult",toString:r},Errored:(n=function(e){return{_hx_index:3,e,__enum__:"tink.streams.RegroupResult",toString:r}},n.__params__=["e"],n)};class he extends te{constructor(e){super(),this.parts=e}get_depleted(){switch(this.parts.length){case 0:return!0;case 1:return this.parts[0].get_depleted();default:return!1}}decompose(e){let t=0,n=this.parts;for(;t<n.length;)n[t++].decompose(e)}forEach(e){let t=this.parts,n=e;return X.async((function(e){he.consumeParts(t,n,e)}))}static consumeParts(e,t,n){0==e.length?n(me.Depleted):e[0].forEach(t).handle((function(r){switch(r._hx_index){case 0:(e=e.slice())[0]=r.rest,n(me.Halted(new he(e)));break;case 1:let s=r.at;s.get_depleted()?e=e.slice(1):(e=e.slice())[0]=s,n(me.Clogged(r.error,new he(e)));break;case 2:n(me.Failed(r.error));break;case 3:he.consumeParts(e.slice(1),t,n)}}))}static of(e){let t=[],n=0;for(;n<e.length;)e[n++].decompose(t);return 0==t.length?ne.inst:new he(t)}}he.__name__=!0;class de extends he{constructor(e,t,n){null==n&&(n=ne.inst);let r=null,s=!1,i=[];super([n,ue.flatten(e.forEach(be.ofUnknown((function(e){return i.push(e),t.apply(i,oe.Flowing).map((function(e){switch(e._hx_index){case 0:return r=e.data,fe.Finish;case 1:let t=e.data;return r=0==t._hx_index?t.v:new K(ne.make).get(),s=!0,fe.Finish;case 2:return fe.Resume;case 3:return fe.Clog(e.e)}})).gather()}))).map((function(e){switch(e._hx_index){case 0:return s?r:new de(e.rest,t,r);case 1:return new we(e.error);case 2:return ue.ofError(e.error);case 3:return 0==i.length?ne.inst:ue.flatten(t.apply(i,oe.Ended).map((function(e){switch(e._hx_index){case 0:return e.data;case 1:let t=e.data;return 0==t._hx_index?t.v:new K(ne.make).get();case 2:return ne.inst;case 3:return ue.ofError(e.e)}})).gather())}})).gather())])}}de.__name__=!0;var fe=s["tink.streams.Handled"]={__ename__:!0,__constructs__:["BackOff","Finish","Resume","Clog"],BackOff:{_hx_index:0,__enum__:"tink.streams.Handled",toString:r},Finish:{_hx_index:1,__enum__:"tink.streams.Handled",toString:r},Resume:{_hx_index:2,__enum__:"tink.streams.Handled",toString:r},Clog:(n=function(e){return{_hx_index:3,e,__enum__:"tink.streams.Handled",toString:r}},n.__params__=["e"],n)},me=s["tink.streams.Conclusion"]={__ename__:!0,__constructs__:["Halted","Clogged","Failed","Depleted"],Halted:(n=function(e){return{_hx_index:0,rest:e,__enum__:"tink.streams.Conclusion",toString:r}},n.__params__=["rest"],n),Clogged:(n=function(e,t){return{_hx_index:1,error:e,at:t,__enum__:"tink.streams.Conclusion",toString:r}},n.__params__=["error","at"],n),Failed:(n=function(e){return{_hx_index:2,error:e,__enum__:"tink.streams.Conclusion",toString:r}},n.__params__=["error"],n),Depleted:{_hx_index:3,__enum__:"tink.streams.Conclusion",toString:r}},ge=s["tink.streams.ReductionStep"]={__ename__:!0,__constructs__:["Progress","Crash"],Progress:(n=function(e){return{_hx_index:0,result:e,__enum__:"tink.streams.ReductionStep",toString:r}},n.__params__=["result"],n),Crash:(n=function(e){return{_hx_index:1,e,__enum__:"tink.streams.ReductionStep",toString:r}},n.__params__=["e"],n)},pe=s["tink.streams.Reduction"]={__ename__:!0,__constructs__:["Crashed","Failed","Reduced"],Crashed:(n=function(e,t){return{_hx_index:0,error:e,at:t,__enum__:"tink.streams.Reduction",toString:r}},n.__params__=["error","at"],n),Failed:(n=function(e){return{_hx_index:1,error:e,__enum__:"tink.streams.Reduction",toString:r}},n.__params__=["error"],n),Reduced:(n=function(e){return{_hx_index:2,result:e,__enum__:"tink.streams.Reduction",toString:r}},n.__params__=["result"],n)};class we extends te{constructor(e){super(),this.error=e}forEach(e){return new $(new V(me.Failed(this.error)))}}we.__name__=!0;class xe extends te{constructor(e){super(),this.value=e}forEach(e){let t=this;return e(this.value.get()).map((function(e){switch(e._hx_index){case 0:return me.Halted(t);case 1:return me.Halted(ne.inst);case 2:return me.Depleted;case 3:return me.Clogged(e.e,t)}})).gather()}}xe.__name__=!0;class be{static ofSafe(e){return e}static ofUnknown(e){return e}}class Se extends te{constructor(e){super(),this.f=e}forEach(e){let t=this;return X.async((function(n){t.f.handle((function(t){t.forEach(e).handle(n)}))}))}}Se.__name__=!0;var ke=s["tink.streams.Step"]={__ename__:!0,__constructs__:["Link","Fail","End"],Link:(n=function(e,t){return{_hx_index:0,value:e,next:t,__enum__:"tink.streams.Step",toString:r}},n.__params__=["value","next"],n),Fail:(n=function(e){return{_hx_index:1,e,__enum__:"tink.streams.Step",toString:r}},n.__params__=["e"],n),End:{_hx_index:2,__enum__:"tink.streams.Step",toString:r}};class ye{constructor(e){let t,n=ye.get_isWindows()?";":":",r=process.env.PATHEXT;if(null!=r){let e=r.split(n),s=new Array(e.length),i=0,a=e.length;for(;i<a;){let t=i++;s[t]=e[t].toLowerCase()}t=s}else t=[".exe",".cmd",".bat",".com"];this.extensions=t;let s=process.env.PATH;if(this.path=null!=s?s.split(n):[],null!=e){if(null!=e.extensions){let t=e.extensions,n=new Array(t.length),r=0,s=t.length;for(;r<s;){let e=r++;n[e]=t[e].toLowerCase()}this.extensions=n}null!=e.path&&(this.path=e.path)}}find(e){let t=ne.inst,n=0,r=(ye.get_isWindows()?[process.cwd()]:[]).concat(this.path);for(;n<r.length;)t=t.append(this.findExecutables(r[n++],e));return t}isExecutable(e){let t=this;return Z.next(Z.next(X.next(_.exists(e),(function(t){return t?_.isDirectory(e).map(Q.Success).gather():new $(new V(Q.Failure(new q(404,e,{fileName:"src/which/Finder.hx",lineNumber:66,className:"which.Finder",methodName:"isExecutable"}))))})),(function(t){return new $(new V(t?Q.Failure(new q(422,e,{fileName:"src/which/Finder.hx",lineNumber:67,className:"which.Finder",methodName:"isExecutable"})):Q.Success(e)))})),(function(n){return ye.get_isWindows()?new $(new V(Q.Success(t.checkFileExtension(e)))):Z.next(_.stat(e),Re(t,t.checkFilePermissions))}))}checkFileExtension(e){let t=this.extensions,n="."+w.extension(e).toLowerCase();return t.includes(n)}checkFilePermissions(e){let t=-1;return Z.next(Z.next(X.next(new $(new V(0!=(1&e.mode))),(function(t){return t||0==(8&e.mode)?new $(new V(Q.Success(t))):Z.next(Ee.get_gid(),(function(t){return new $(new V(Q.Success(e.gid==t)))}))})),(function(n){return n||0==(64&e.mode)?new $(new V(Q.Success(n))):Z.next(Ee.get_uid(),(function(n){return t=n,new $(new V(Q.Success(e.uid==n)))}))})),(function(n){return n||0==(72&e.mode)?new $(new V(Q.Success(n))):new $(new V(Q.Success(0==t)))}))}findExecutables(e,t){let n=this,r=_.absolutePath(e),s=[""].concat(ye.get_isWindows()?this.extensions:[]),i=new Array(s.length),a=0,l=s.length;for(;a<l;){let e=a++;i[e]=u.replace(w.join([r,""+t+s[e]]),"/",ye.get_isWindows()?"\\":"/")}return ue.ofIterator(new x(i)).filter(class{static ofAsync(e){return{apply:function(t,n){return e(t[0]).map((function(e){return _e.Converted(e?ue.single(t[0]):ne.inst)})).gather()}}}}.ofAsync((function(e){return n.isExecutable(e).flatMap((function(e){switch(e._hx_index){case 0:return new $(new V(e.data));case 1:return new $(new V(!1))}})).gather()})))}static get_isWindows(){if("Windows"!=o.systemName()){let e=process.env.OSTYPE;return"cygwin"==e||"msys"==e}return!0}}e.which.Finder=ye,ye.__name__=!0;class Ne extends d{constructor(e,t,n){super('No "'+e+'" in ('+t.path.join(ye.get_isWindows()?";":":")+").",n),this.command=e,this.finder=t}}e.which.FinderException=Ne,Ne.__name__=!0;class ve{constructor(e,t){this.command=e,this.finder=t}all(){let e=[],t=this;return X.next(this.finder.find(this.command).forEach(be.ofSafe((function(t){return e.includes(t)||e.push(t),new $(new V(fe.Resume))}))),(function(n){return e.length>0?new $(new V(Q.Success(e))):new $(new V(Q.Failure(new q(404,'No "'+t.command+'" in ('+t.finder.path.join(ye.get_isWindows()?";":":")+").",{fileName:"src/which/FinderTools.hx",lineNumber:30,className:"which.FinderStream",methodName:"all"}))))}))}first(){let e="",t=this;return X.next(this.finder.find(this.command).forEach(be.ofSafe((function(t){return e=t,new $(new V(fe.Finish))}))),(function(n){return e.length>0?new $(new V(Q.Success(e))):new $(new V(Q.Failure(new q(404,'No "'+t.command+'" in ('+t.finder.path.join(ye.get_isWindows()?";":":")+").",{fileName:"src/which/FinderTools.hx",lineNumber:39,className:"which.FinderStream",methodName:"first"}))))}))}}e.which.FinderStream=ve,ve.__name__=!0;class Fe{static which(e,t){return new ve(e,new ye(t))}}e.which.FinderTools=Fe,Fe.__name__=!0;class Ee{static get_gid(){return"function"==typeof Re(n=process,n.getgid)?new $(new V(Q.Success(process.getgid()))):Ee.getProcessId("g")}static get_uid(){return"function"==typeof Re(n=process,n.getuid)?new $(new V(Q.Success(process.getuid()))):Ee.getProcessId("u")}static getProcessId(e){if(ye.get_isWindows())return new $(new V(Q.Failure(new q(405,"Not supported on Windows platform.",{fileName:"src/which/Process.hx",lineNumber:41,className:"which.Process",methodName:"getProcessId"}))));let t=new h("id",["-"+e]);return Z.next(X.next(t.exitCode(),(function(e){return 0!=e?new $(new V(Q.Failure(new q(null,"Process exited with a non-zero code.",{fileName:"src/which/Process.hx",lineNumber:45,className:"which.Process",methodName:"getProcessId"})))):Z.next(re.all(t.stdout),(function(e){let t=c.parseInt(u.rtrim(e.toString()));return new $(new V(null!=t?Q.Success(t):Q.Failure(new q(null,"Unable to parse the process output.",{fileName:"src/which/Process.hx",lineNumber:47,className:"which.Process",methodName:"getProcessId"}))))}))})),(function(e){return t.close(),new $(new V(Q.Success(e)))}))}}Ee.__name__=!0;class Ce{constructor(){this.version=!1,this.help=!1,this.all=!1}run(e){if(this.help||this.version){let e=this.help?(new I).format(O.get()):"2.0.2";return process.stdout.write(c.string(e)),process.stdout.write("\n"),new $(new V(Q.Success(Y.Noise)))}return e.length<1||"1"==process.env.HAXELIB_RUN&&e.length<2?new $(new V(Q.Failure(new q(400,"You must provide the name of a command to find.",{fileName:"src/which/Program.hx",lineNumber:47,className:"which.Program",methodName:"run"})))):Z.next(this.all?Fe.which(e[0]).all():Z.next(Fe.which(e[0]).first(),(function(e){return new $(new V(Q.Success([e])))})),(function(e){return l.iter(e,o.println),new $(new V(Q.Success(Y.Noise)))}))}static main(){process.title="Which.hx",new D(new Ce,new B(5)).process(process.argv.slice(2)).handle(C.exit)}}function Pe(e){return e instanceof Array?new x(e):e.iterator()}function Re(e,n){return null==n?null:(null==n.__id__&&(n.__id__=t.$haxeUID++),null==e.hx__closures__?e.hx__closures__={}:r=e.hx__closures__[n.__id__],null==r&&(r=n.bind(e),e.hx__closures__[n.__id__]=r),r);var r}Ce.__name__=!0,t.$haxeUID|=0,"undefined"!=typeof performance&&"function"==typeof performance.now&&(a.now=performance.now.bind(performance)),null==String.fromCodePoint&&(String.fromCodePoint=function(e){return e<65536?String.fromCharCode(e):String.fromCharCode(55232+(e>>10))+String.fromCharCode(56320+(1023&e))}),String.__name__=!0,Array.__name__=!0,Date.__name__="Date",b.__toStr={}.toString,E.EMPTY=new F,A.alloc="allocUnsafe"in Buffer?y.allocUnsafe:function(e){return new y(e)},L.depth=0,ne.inst=new ne,Ce.main()}("undefined"!=typeof exports?exports:"undefined"!=typeof window?window:"undefined"!=typeof self?self:this,"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:this);
