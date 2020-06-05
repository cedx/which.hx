#!/usr/bin/env node
module.exports=function(e,t){"use strict";var n={};function __webpack_require__(t){if(n[t]){return n[t].exports}var i=n[t]={i:t,l:false,exports:{}};var s=true;try{e[t].call(i.exports,i,i.exports,__webpack_require__);s=false}finally{if(s)delete n[t]}i.l=true;return i.exports}__webpack_require__.ab=__dirname+"/";function startup(){return __webpack_require__(190)}return startup()}({129:function(e){e.exports=require("child_process")},190:function(e,t,n){(function(e,t){"use strict";e["which"]=e["which"]||{};var i=function(){return js_Boot.__string_rec(this,"")},s=s||{},r;class EReg{constructor(e,t){this.r=new RegExp(e,t.split("u").join(""))}match(e){if(this.r.global){this.r.lastIndex=0}this.r.m=this.r.exec(e);this.r.s=e;return this.r.m!=null}matched(e){if(this.r.m!=null&&e>=0&&e<this.r.m.length){return this.r.m[e]}else{throw haxe_Exception.thrown("EReg::matched")}}}EReg.__name__=true;class HxOverrides{static cca(e,t){let n=e.charCodeAt(t);if(n!=n){return undefined}return n}static substr(e,t,n){if(n==null){n=e.length}else if(n<0){if(t==0){n=e.length+n}else{return""}}return e.substr(t,n)}static now(){return Date.now()}}HxOverrides.__name__=true;class Lambda{static array(e){let t=[];let n=$getIterator(e);while(n.hasNext())t.push(n.next());return t}static fold(e,t,n){let i=$getIterator(e);while(i.hasNext())n=t(i.next(),n);return n}static find(e,t){let n=$getIterator(e);while(n.hasNext()){let e=n.next();if(t(e)){return e}}return null}}Lambda.__name__=true;Math.__name__=true;class Program{constructor(){this.version=false;this.silent=false;this.help=false;this.all=false}run(e){if(this.help){let e=(new tink_cli_doc_DefaultFormatter).format(tink_cli_Doc0.get());process.stdout.write(Std.string(e));process.stdout.write("\n");return}if(this.version){process.stdout.write("1.0.0");process.stdout.write("\n");return}process.stdout.write("Program path:");process.stdout.write("\n");let t=__filename;process.stdout.write(Std.string(t));process.stdout.write("\n")}static main(){new tink_cli_Router0(new Program,new tink_cli_prompt_RetryPrompt(5)).process(process.argv.slice(2)).handle(tink_Cli.exit)}}e["Program"]=Program;Program.__name__=true;class Std{static string(e){return js_Boot.__string_rec(e,"")}static parseInt(e){if(e!=null){let t=0;let n=e.length;while(t<n){let n=t++;let i=e.charCodeAt(n);if(i<=8||i>=14&&i!=32&&i!=45){let t=e.charCodeAt(n+1);let i=parseInt(e,t==120||t==88?16:10);if(isNaN(i)){return null}else{return i}}}}return null}}Std.__name__=true;class StringTools{static startsWith(e,t){if(e.length>=t.length){return e.lastIndexOf(t,0)==0}else{return false}}static isSpace(e,t){let n=HxOverrides.cca(e,t);if(!(n>8&&n<14)){return n==32}else{return true}}static ltrim(e){let t=e.length;let n=0;while(n<t&&StringTools.isSpace(e,n))++n;if(n>0){return HxOverrides.substr(e,n,t-n)}else{return e}}static rtrim(e){let t=e.length;let n=0;while(n<t&&StringTools.isSpace(e,t-n-1))++n;if(n>0){return HxOverrides.substr(e,0,t-n)}else{return e}}static trim(e){return StringTools.ltrim(StringTools.rtrim(e))}static lpad(e,t,n){if(t.length<=0){return e}let i="";n-=e.length;while(i.length<n)i+=t==null?"null":""+t;i+=e==null?"null":""+e;return i}static replace(e,t,n){return e.split(t).join(n)}}StringTools.__name__=true;class Sys{static systemName(){let e=process.platform;switch(e){case"darwin":return"Mac";case"freebsd":return"BSD";case"linux":return"Linux";case"win32":return"Windows";default:return e}}}Sys.__name__=true;var l=s["haxe.StackItem"]={__ename__:true,__constructs__:["CFunction","Module","FilePos","Method","LocalFunction"],CFunction:{_hx_index:0,__enum__:"haxe.StackItem",toString:i},Module:(r=function(e){return{_hx_index:1,m:e,__enum__:"haxe.StackItem",toString:i}},r.__params__=["m"],r),FilePos:(r=function(e,t,n,s){return{_hx_index:2,s:e,file:t,line:n,column:s,__enum__:"haxe.StackItem",toString:i}},r.__params__=["s","file","line","column"],r),Method:(r=function(e,t){return{_hx_index:3,classname:e,method:t,__enum__:"haxe.StackItem",toString:i}},r.__params__=["classname","method"],r),LocalFunction:(r=function(e){return{_hx_index:4,v:e,__enum__:"haxe.StackItem",toString:i}},r.__params__=["v"],r)};class haxe_Exception extends Error{constructor(e,t,n){super(e);this.message=e;this.__previousException=t;this.__nativeException=n!=null?n:this}unwrap(){return this.__nativeException}get_native(){return this.__nativeException}static caught(e){if(e instanceof haxe_Exception){return e}else if(e instanceof Error){return new haxe_Exception(e.message,null,e)}else{return new haxe_ValueException(e,null,e)}}static thrown(e){if(e instanceof haxe_Exception){return e.get_native()}else if(e instanceof Error){return e}else{let t=new haxe_ValueException(e);return t}}}haxe_Exception.__name__=true;class haxe_ValueException extends haxe_Exception{constructor(e,t,n){super(String(e),t,n);this.value=e}unwrap(){return this.value}}haxe_ValueException.__name__=true;class haxe_io_Path{constructor(e){switch(e){case".":case"..":this.dir=e;this.file="";return}let t=e.lastIndexOf("/");let n=e.lastIndexOf("\\");if(t<n){this.dir=HxOverrides.substr(e,0,n);e=HxOverrides.substr(e,n+1,null);this.backslash=true}else if(n<t){this.dir=HxOverrides.substr(e,0,t);e=HxOverrides.substr(e,t+1,null)}else{this.dir=null}let i=e.lastIndexOf(".");if(i!=-1){this.ext=HxOverrides.substr(e,i+1,null);this.file=HxOverrides.substr(e,0,i)}else{this.ext=null;this.file=e}}static extension(e){let t=new haxe_io_Path(e);if(t.ext==null){return""}return t.ext}static join(e){let t=[];let n=0;while(n<e.length){let i=e[n];++n;if(i!=null&&i!=""){t.push(i)}}if(t.length==0){return""}let i=t[0];let s=1;let r=t.length;while(s<r){i=haxe_io_Path.addTrailingSlash(i);i+=t[s++]}return haxe_io_Path.normalize(i)}static normalize(e){let t="/";e=e.split("\\").join(t);if(e==t){return t}let n=[];let i=0;let s=e.split(t);while(i<s.length){let t=s[i];++i;if(t==".."&&n.length>0&&n[n.length-1]!=".."){n.pop()}else if(t==""){if(n.length>0||HxOverrides.cca(e,0)==47){n.push(t)}}else if(t!="."){n.push(t)}}let r="";let l=false;let o=false;let u=0;let c=n.join(t);while(u<c.length){let e=c;let t=u++;let n=e.charCodeAt(t);if(n>=55296&&n<=56319){n=n-55232<<10|e.charCodeAt(t+1)&1023}let i=n;if(i>=65536){++u}let s=i;switch(s){case 47:if(!l){o=true}else{let e=s;l=false;if(o){r+="/";o=false}r+=String.fromCodePoint(e)}break;case 58:r+=":";l=true;break;default:let e=s;l=false;if(o){r+="/";o=false}r+=String.fromCodePoint(e)}}return r}static addTrailingSlash(e){if(e.length==0){return"/"}let t=e.lastIndexOf("/");let n=e.lastIndexOf("\\");if(t<n){if(n!=e.length-1){return e+"\\"}else{return e}}else if(t!=e.length-1){return e+"/"}else{return e}}static isAbsolute(e){if(StringTools.startsWith(e,"/")){return true}if(e.charAt(1)==":"){return true}if(StringTools.startsWith(e,"\\\\")){return true}return false}}haxe_io_Path.__name__=true;class haxe_iterators_ArrayIterator{constructor(e){this.current=0;this.array=e}hasNext(){return this.current<this.array.length}next(){return this.array[this.current++]}}haxe_iterators_ArrayIterator.__name__=true;class js_Boot{static __string_rec(e,t){if(e==null){return"null"}if(t.length>=5){return"<...>"}let n=typeof e;if(n=="function"&&(e.__name__||e.__ename__)){n="object"}switch(n){case"function":return"<function>";case"object":if(e.__enum__){let n=s[e.__enum__];let i=n.__constructs__[e._hx_index];let r=n[i];if(r.__params__){t=t+"\t";return i+"("+function(n){var i;let s=[];{let n=0;let i=r.__params__;while(true){if(!(n<i.length)){break}let r=i[n];n=n+1;s.push(js_Boot.__string_rec(e[r],t))}}i=s;return i}(this).join(",")+")"}else{return i}}if(e instanceof Array){let n="[";t+="\t";let i=0;let s=e.length;while(i<s){let s=i++;n+=(s>0?",":"")+js_Boot.__string_rec(e[s],t)}n+="]";return n}let i;try{i=e.toString}catch(e){return"???"}if(i!=null&&i!=Object.toString&&typeof i=="function"){let t=e.toString();if(t!="[object Object]"){return t}}let r="{\n";t+="\t";let l=e.hasOwnProperty!=null;let o=null;for(o in e){if(l&&!e.hasOwnProperty(o)){continue}if(o=="prototype"||o=="__class__"||o=="__super__"||o=="__interfaces__"||o=="__properties__"){continue}if(r.length!=2){r+=", \n"}r+=t+o+" : "+js_Boot.__string_rec(e[o],t)}t=t.substring(1);r+="\n"+t+"}";return r;case"string":return e;default:return String(e)}}}js_Boot.__name__=true;var o=n(129);var u=n(747);var c=n(669);var a=n(293).Buffer;class thenshim_js_JSPromiseFactory{constructor(){}asResolved(e){return Promise.resolve(e)}}thenshim_js_JSPromiseFactory.__name__=true;class thenshim_Promise{static resolve(e){return thenshim_Promise.factory.asResolved(e)}static then(e,t,n){return e.then(t,n)}}class thenshim_PromiseTools{static all(e){return Promise.all(Lambda.array(e))}}thenshim_PromiseTools.__name__=true;class tink_Cli{static exit(e){switch(e._hx_index){case 0:process.exit(0);break;case 1:let t=e.failure;let n=t.message;if(t.data!=null){n+=", "+Std.string(t.data)}process.stdout.write(Std.string(n));process.stdout.write("\n");let i=t.code;process.exit(i);break}}}tink_Cli.__name__=true;class tink_chunk_nodejs_BufferChunk{constructor(e){this.buffer=e}}tink_chunk_nodejs_BufferChunk.__name__=true;class tink_cli_Doc0{static get(){if(tink_cli_Doc0.doc==null){tink_cli_Doc0.doc={doc:" Find the instances of an executable in the system path. ",commands:[{isDefault:true,isSub:false,names:[],doc:" Executes this program. "}],flags:[{names:["--all"],aliases:["a"],doc:" List all instances of executables found (instead of just the first one). "},{names:["--help"],aliases:["h"],doc:" Output usage information. "},{names:["--silent"],aliases:["s"],doc:" Silence the output, just return the exit code (0 if any executable is found, otherwise 1). "},{names:["--version"],aliases:["v"],doc:" Output the version number. "}]}}return tink_cli_Doc0.doc}}tink_cli_Doc0.__name__=true;class tink_cli_Router{constructor(e,t,n){this.command=e;this.prompt=t;this.hasFlags=n}processArgs(e){let t=this;if(!this.hasFlags){return h.Success(e)}else{return tink_core_TypedError.catchExceptions(function(){let n=tink_cli_Router.expandAssignments(e);let i=[];let s=0;let r=false;while(s<n.length){let e=n[s];if(e=="--"){r=true;++s}else if(!r&&HxOverrides.cca(e,0)==45){let i=t.processFlag(n,s);if(i==-1){if(HxOverrides.cca(e,1)!=45){let i=t.processAlias(n,s);if(i==-1){throw haxe_Exception.thrown('Unrecognized alias "'+e+'"')}else{s+=i+1}}else{throw haxe_Exception.thrown('Unrecognized flag "'+e+'"')}}else{s+=i+1}}else{i.push(e);++s}}return i},null,{fileName:"tink/cli/Router.hx",lineNumber:25,className:"tink.cli.Router",methodName:"processArgs"})}}processFlag(e,t){return-1}processAlias(e,t){return-1}static expandAssignments(e){let t=[];let n=true;let i=0;while(i<e.length){let s=e[i];++i;if(s=="--"){n=false}if(!n){t.push(s)}else{let e=s.indexOf("=");let n=HxOverrides.cca(s,1);let i=HxOverrides.cca(s,0);if(i==null){t.push(s)}else if(i==45){if(n==null){t.push(s)}else if(n==45){if(e!=-1){t.push(HxOverrides.substr(s,0,e));t.push(HxOverrides.substr(s,e+1,null))}else{t.push(s)}}else{t.push(s)}}else{t.push(s)}}}return t}}tink_cli_Router.__name__=true;class tink_cli_Router0 extends tink_cli_Router{constructor(e,t){super(e,t,true)}process(e){let t=this;if(e[0]==null){let n;let i=this.processArgs(e);switch(i._hx_index){case 0:n=i.data;break;case 1:return new tink_core__$Future_SyncFuture(new tink_core__$Lazy_LazyConst(h.Failure(i.failure)))}return tink_core_Promise.next(this.promptRequired(),function(e){return t.run_run(n)})}else{let n;let i=this.processArgs(e);switch(i._hx_index){case 0:n=i.data;break;case 1:return new tink_core__$Future_SyncFuture(new tink_core__$Lazy_LazyConst(h.Failure(i.failure)))}return tink_core_Promise.next(this.promptRequired(),function(e){return t.run_run(n)})}}processFlag(e,t){switch(e[t]){case"--all":this.command.all=true;break;case"--help":this.command.help=true;break;case"--silent":this.command.silent=true;break;case"--version":this.command.version=true;break;default:return-1}return t-t}processAlias(e,t){let n=e[t];let i=1;let s=n.length;while(i<s){let e=i++;let t=HxOverrides.cca(n,e);if(t==null){throw haxe_Exception.thrown("Invalid alias '-"+n.charAt(e)+"'")}else{switch(t){case 97:this.command.all=true;break;case 104:this.command.help=true;break;case 115:this.command.silent=true;break;case 118:this.command.version=true;break;default:throw haxe_Exception.thrown("Invalid alias '-"+n.charAt(e)+"'")}}}return t-t}promptRequired(){return tink_core_Future.async(function(e){e(h.Success(_.Noise))})}run_run(e){if(e.length<0){return new tink_core__$Future_SyncFuture(new tink_core__$Lazy_LazyConst(h.Failure(new tink_core_TypedError(null,"Insufficient arguments. Expected: "+0+", Got: "+e.length,{fileName:"src/Program.hx",lineNumber:28,className:"tink.cli.Router0",methodName:"run_run"}))))}this.command.run(e.slice(0,e.length));return new tink_core__$Future_SyncFuture(new tink_core__$Lazy_LazyConst(h.Success(_.Noise)))}}tink_cli_Router0.__name__=true;class tink_cli_doc_DefaultFormatter{constructor(e){this.re=new EReg("^\\s*\\*?\\s{0,2}(.*)$","");this.root=e}format(e){let t="";let n=this;t+="\n";let i=this.formatDoc(e.doc);if(i!=null){t+=Std.string(""+i+"\n"+"\n")}let s=e.commands;let r=[];let l=0;while(l<s.length){let e=s[l];++l;if(!e.isDefault){r.push(e)}}if(this.root!=null){t+=Std.string("  Usage: "+this.root+"\n")}let o=Lambda.find(e.commands,function(e){return e.isDefault});if(o!=null){let e=this.formatDoc(o.doc);if(e!=null){t+=Std.string(this.indent(e,4)+"\n"+"\n")}}if(r.length>0){let e=Lambda.fold(r,function(e,t){let n=0;let i=e.names;while(n<i.length){let e=i[n];++n;if(e.length>t){t=e.length}}return t},0);if(this.root!=null){t+=Std.string("  Usage: "+this.root+" <subcommand>"+"\n")}t+=Std.string("    Subcommands:"+"\n");let i=function(i,s){if(s==null){s="(doc missing)"}t+=Std.string(n.indent(StringTools.lpad(i," ",e)+" : "+StringTools.trim(n.indent(s,e+3)),6)+"\n")};let s=0;while(s<r.length){let e=r[s];++s;let t=e.names[0];i(t,this.formatDoc(e.doc));if(e.names.length>1){let n=1;let s=e.names.length;while(n<s)i(e.names[n++],"Alias of "+t)}}}if(e.flags.length>0){let i=function(e){let t=e.names.join(", ");if(e.aliases.length>0){let n=e.aliases;let i=new Array(n.length);let s=0;let r=n.length;while(s<r){let e=s++;i[e]="-"+n[e]}t+=", "+i.join(", ")}return t};let s=Lambda.fold(e.flags,function(e,t){let n=i(e);if(n.length>t){t=n.length}return t},0);let r=function(e,i){if(i==null){i=""}t+=Std.string(n.indent(StringTools.lpad(e," ",s)+" : "+StringTools.trim(n.indent(i,s+3)),6)+"\n")};t=(t+="\n")+Std.string("  Flags:"+"\n");let l=0;let o=e.flags;while(l<o.length){let e=o[l];++l;r(i(e),this.formatDoc(e.doc))}}return t}indent(e,t){let n=e.split("\n");let i=new Array(n.length);let s=0;let r=n.length;while(s<r){let e=s++;i[e]=StringTools.lpad(""," ",t)+n[e]}return i.join("\n")}formatDoc(e){let t=this;if(e==null){return null}let n=e.split("\n");let i=StringTools.trim;let s=new Array(n.length);let r=0;let l=n.length;while(r<l){let e=r++;s[e]=i(n[e])}let o=s;while(o[0]=="")o=o.slice(1);while(o[o.length-1]=="")o.pop();let u=new Array(o.length);let c=0;let a=o.length;while(c<a){let e=c++;let n=o[e];u[e]=t.re.match(n)?t.re.matched(1):n}return u.join("\n")}}tink_cli_doc_DefaultFormatter.__name__=true;class tink_cli_prompt_IoPrompt{constructor(e,t){this.source=e;this.sink=t}}tink_cli_prompt_IoPrompt.__name__=true;class tink_cli_prompt_NodePrompt extends tink_cli_prompt_IoPrompt{constructor(){let e=process.stdin;let t=null;t={};super(tink_io_nodejs_NodejsSource.wrap("stdin",e,t.chunkSize,t.onEnd),tink_io_nodejs_NodejsSink.wrap("stdout",process.stdout))}}tink_cli_prompt_NodePrompt.__name__=true;class tink_cli_prompt_RetryPrompt{constructor(e,t){this.trials=e;this.proxy=t==null?new tink_cli_prompt_NodePrompt:t}}tink_cli_prompt_RetryPrompt.__name__=true;class tink_core_Callback{static invoke(e,t){if(tink_core_Callback.depth<500){tink_core_Callback.depth++;e(t);tink_core_Callback.depth--}else{let n=e;let i=function(e){tink_core_Callback.invoke(n,e)};let s=t;tink_core_Callback.defer(function(){i(s)})}}static fromNiladic(e){return e}static defer(e){process.nextTick(e)}}class tink_core_SimpleLink{constructor(e){this.f=e}cancel(){if(this.f!=null){this.f();this.f=null}}}tink_core_SimpleLink.__name__=true;class tink_core__$Callback_LinkPair{constructor(e,t){this.dissolved=false;this.a=e;this.b=t}cancel(){if(!this.dissolved){this.dissolved=true;let e=this.a;if(e!=null){e.cancel()}let t=this.b;if(t!=null){t.cancel()}this.a=null;this.b=null}}}tink_core__$Callback_LinkPair.__name__=true;class tink_core__$Callback_ListCell{constructor(e,t){if(e==null){throw haxe_Exception.thrown("callback expected but null received")}this.cb=e;this.list=t}cancel(){if(this.list!=null){let e=this.list;this.cb=null;this.list=null;if(--e.used<e.used>>1){e.compact()}}}}tink_core__$Callback_ListCell.__name__=true;class tink_core_CallbackList{constructor(){this.busy=false;this.queue=[];this.used=0;this.cells=[]}ondrain(){}invoke(e,t){if(this.busy){let n=$bind(this,this.invoke);let i=e;let s=t;let r=function(){n(i,s)};this.queue.push(r)}else{this.busy=true;let n=this.cells.length;let i=0;while(i<n){let t=this.cells[i++];if(t.list!=null){tink_core_Callback.invoke(t.cb,e)}}this.busy=false;if(t){let e=this.cells.length-n;let t=0;while(t<n){let e=this.cells[t++];e.cb=null;e.list=null}let i=0;while(i<e){let e=i++;this.cells[e]=this.cells[n+e]}this.resize(e)}else if(this.used<this.cells.length){this.compact()}if(this.queue.length>0){this.queue.shift()()}}}compact(){if(this.busy){return}else if(this.used==0){this.resize(0);this.ondrain()}else{let e=0;let t=0;let n=this.cells.length;while(t<n){let n=t++;let i=this.cells[n];if(i.cb!=null){if(e!=n){this.cells[e]=i}if(++e==this.used){break}}}this.resize(this.used)}}resize(e){this.cells.length=e}}tink_core_CallbackList.__name__=true;class tink_core_TypedError{constructor(e,t,n){if(e==null){e=500}this.isTinkError=true;this.code=e;this.message=t;this.pos=n;this.exceptionStack=[];this.callStack=[]}static withData(e,t,n,i){return tink_core_TypedError.typed(e,t,n,i)}static typed(e,t,n,i){let s=new tink_core_TypedError(e,t,i);s.data=n;return s}static asError(e){if(e!=null&&e.isTinkError){return e}else{return null}}static catchExceptions(e,t,n){try{return h.Success(e())}catch(e){let i=haxe_Exception.caught(e).unwrap();let s=tink_core_TypedError.asError(i);return h.Failure(s==null?t==null?tink_core_TypedError.withData(null,"Unexpected Error",i,n):t(i):s)}}}tink_core_TypedError.__name__=true;var _=s["tink.core.Noise"]={__ename__:true,__constructs__:["Noise"],Noise:{_hx_index:0,__enum__:"tink.core.Noise",toString:i}};class tink_core__$Lazy_LazyConst{constructor(e){this.value=e}get(){return this.value}}tink_core__$Lazy_LazyConst.__name__=true;class tink_core__$Future_SyncFuture{constructor(e){this.value=e}flatMap(e){let t=this;return new tink_core__$Future_SuspendableFuture(function(n){return e(t.value.get()).handle(n)})}handle(e){tink_core_Callback.invoke(e,this.value.get());return null}eager(){return this}gather(){return this}}tink_core__$Future_SyncFuture.__name__=true;class tink_core_Future{static first(e,t){let n=new tink_core_FutureTrigger;let i=e.handle($bind(n,n.trigger));let s=t.handle($bind(n,n.trigger));let r=n;if(i!=null){let e=i;r.handle(function(t){e.cancel()})}if(s!=null){let e=s;r.handle(function(t){e.cancel()})}return r}static flatten(e){return new tink_core__$Future_SuspendableFuture(function(t){let n=null;return new tink_core__$Callback_LinkPair(e.handle(function(e){n=e.handle(t)}),new tink_core_SimpleLink(function(){if(n!=null){n.cancel()}}))})}static async(e,t){if(t==null){t=false}if(t){return new tink_core__$Future_SuspendableFuture(function(t){e(t);return null})}else{let t=new tink_core_FutureTrigger;tink_core_Callback.invoke(e,$bind(t,t.trigger));return t}}}class tink_core_FutureTrigger{constructor(){this.list=new tink_core_CallbackList}handle(e){let t=this.list;if(t==null){tink_core_Callback.invoke(e,this.result);return null}else{let n=new tink_core__$Callback_ListCell(e,t);t.cells.push(n);t.used++;return n}}flatMap(e){if(this.list==null){return e(this.result)}else{let t=new tink_core_FutureTrigger;let n=this.list;let i=new tink_core__$Callback_ListCell(function(n){e(n).handle($bind(t,t.trigger))},n);n.cells.push(i);n.used++;return t}}gather(){return this}eager(){return this}trigger(e){if(this.list==null){return false}else{let t=this.list;this.list=null;this.result=e;t.invoke(e,true);return true}}}tink_core_FutureTrigger.__name__=true;class tink_core__$Future_SuspendableFuture{constructor(e){this.suspended=true;let t=this;this.wakeup=e;this.callbacks=new tink_core_CallbackList;this.callbacks.ondrain=function(){if(t.callbacks!=null){t.suspended=true;let e=t.link;if(e!=null){e.cancel()}t.link=null}}}trigger(e){let t=this.callbacks;if(t!=null){this.callbacks=null;this.suspended=false;this.result=e;this.link=null;this.wakeup=null;t.invoke(e,true)}}handle(e){if(this.callbacks==null){tink_core_Callback.invoke(e,this.result);return null}else{let t=this.callbacks;let n=new tink_core__$Callback_ListCell(e,t);t.cells.push(n);t.used++;if(this.suspended){this.suspended=false;this.link=this.wakeup($bind(this,this.trigger))}return n}}map(e){let t=this;return new tink_core__$Future_SuspendableFuture(function(n){return t.handle(function(t){n(e(t))})})}flatMap(e){return tink_core_Future.flatten(this.map(e))}gather(){return this}eager(){this.handle(tink_core_Callback.fromNiladic(function(){}));return this}}tink_core__$Future_SuspendableFuture.__name__=true;var h=s["tink.core.Outcome"]={__ename__:true,__constructs__:["Success","Failure"],Success:(r=function(e){return{_hx_index:0,data:e,__enum__:"tink.core.Outcome",toString:i}},r.__params__=["data"],r),Failure:(r=function(e){return{_hx_index:1,failure:e,__enum__:"tink.core.Outcome",toString:i}},r.__params__=["failure"],r)};class tink_core_Promise{static next(e,t,n){if(n==null){n=true}let i=n;if(n==null){i=true}let s=e.flatMap(function(e){switch(e._hx_index){case 0:return t(e.data);case 1:return new tink_core__$Future_SyncFuture(new tink_core__$Lazy_LazyConst(h.Failure(e.failure)))}});if(i){return s.gather()}else{return s}}}class tink_io_SinkBase{}tink_io_SinkBase.__name__=true;class tink_streams_StreamBase{constructor(){}}tink_streams_StreamBase.__name__=true;class tink_streams_Generator extends tink_streams_StreamBase{constructor(e){super();this.upcoming=e}}tink_streams_Generator.__name__=true;class tink_io_nodejs_NodejsSink extends tink_io_SinkBase{constructor(e){super();this.target=e}static wrap(e,t){return new tink_io_nodejs_NodejsSink(new tink_io_nodejs_WrappedWritable(e,t))}}tink_io_nodejs_NodejsSink.__name__=true;class tink_io_nodejs_NodejsSource extends tink_streams_Generator{constructor(e){super(tink_core_Future.async(function(t){e.read().handle(function(n){let i=t;let s;switch(n._hx_index){case 0:let t=n.data;s=t==null?f.End:f.Link(t,new tink_io_nodejs_NodejsSource(e));break;case 1:s=f.Fail(n.failure);break}i(s)})},true))}static wrap(e,t,n,i){return new tink_io_nodejs_NodejsSource(new tink_io_nodejs_WrappedReadable(e,t,n,i))}}tink_io_nodejs_NodejsSource.__name__=true;class tink_io_nodejs_WrappedReadable{constructor(e,t,n,i){this.name=e;this.native=t;this.chunkSize=n;this.end=tink_core_Future.async(function(n){t.once("end",function(){n(h.Success(null))});t.once("error",function(t){n(h.Failure(new tink_core_TypedError(null,""+t.code+" - Failed reading from "+e+" because "+t.message,{fileName:"tink/io/nodejs/WrappedReadable.hx",lineNumber:22,className:"tink.io.nodejs.WrappedReadable",methodName:"new"})))})}).eager();if(i!=null){this.end.handle(tink_core_Callback.fromNiladic(function(){process.nextTick(i)}))}}read(){let e=this;return tink_core_Future.first(tink_core_Future.async(function(t){let n=null;n=function(){try{let i=e.native.read(e.chunkSize);if(i==null){e.native.once("readable",n)}else{let e=typeof i=="string"?new a(i):i;t(h.Success(new tink_chunk_nodejs_BufferChunk(e)))}}catch(n){let i=haxe_Exception.caught(n).unwrap();t(h.Failure(tink_core_TypedError.withData(null,"Error while reading from "+e.name,i,{fileName:"tink/io/nodejs/WrappedReadable.hx",lineNumber:48,className:"tink.io.nodejs.WrappedReadable",methodName:"read"})))}};n()}),this.end)}}tink_io_nodejs_WrappedReadable.__name__=true;class tink_io_nodejs_WrappedWritable{constructor(e,t){this.name=e;this.native=t;this.ended=tink_core_Future.async(function(e){t.once("end",function(){e(h.Success(false))});t.once("finish",function(){e(h.Success(false))});t.once("close",function(){e(h.Success(false))});t.on("error",function(t){e(h.Failure(new tink_core_TypedError(null,""+t.code+": "+t.message,{fileName:"tink/io/nodejs/WrappedWritable.hx",lineNumber:24,className:"tink.io.nodejs.WrappedWritable",methodName:"new"})))})})}}tink_io_nodejs_WrappedWritable.__name__=true;var f=s["tink.streams.Step"]={__ename__:true,__constructs__:["Link","Fail","End"],Link:(r=function(e,t){return{_hx_index:0,value:e,next:t,__enum__:"tink.streams.Step",toString:i}},r.__params__=["value","next"],r),Fail:(r=function(e){return{_hx_index:1,e:e,__enum__:"tink.streams.Step",toString:i}},r.__params__=["e"],r),End:{_hx_index:2,__enum__:"tink.streams.Step",toString:i}};class which_Finder{constructor(e){this.pathSeparator=which_Finder.get_isWindows()?";":":";let t;if(which_Finder.get_isWindows()){let e=process.env["PATHEXT"].split(this.pathSeparator);let n=new Array(e.length);let i=0;let s=e.length;while(i<s){let t=i++;n[t]=e[t].toLowerCase()}t=n}else{t=[]}this.extensions=t;this.path=process.env["PATH"].split(this.pathSeparator);if(e!=null){if(e.extensions!=null){this.extensions=e.extensions}if(e.path!=null){this.path=e.path}if(e.pathSeparator!=null){this.pathSeparator=e.pathSeparator}}}find(e){let t=this;let n=this.path;let i=new Array(n.length);let s=0;let r=n.length;while(s<r){let r=s++;i[r]=t.findExecutables(n[r],e)}return thenshim_Promise.then(thenshim_PromiseTools.all(i),function(e){let t=[];let n=0;while(n<e.length){let i=$getIterator(e[n++]);while(i.hasNext())t.push(i.next())}return t})}isExecutable(e){let t=this;return c.promisify(u.stat)(e).then(function(n){if(n.isFile()){if(which_Finder.get_isWindows()){return thenshim_Promise.resolve(t.checkFileExtension(e))}else{return t.checkFilePermissions(n)}}else{return thenshim_Promise.resolve(false)}}).catch(function(e){return false})}checkFileExtension(e){let t=haxe_io_Path.extension(e).toLowerCase();if(t.length>0){return this.extensions.includes("."+t)}else{return false}}checkFilePermissions(e){let t=-1;return thenshim_Promise.then(thenshim_Promise.then(thenshim_Promise.then(thenshim_Promise.resolve((e.mode&1)!=0),function(t){if(t||(e.mode&8)==0){return thenshim_Promise.resolve(t)}else{return thenshim_Promise.then(which_Process.get_gid(),function(t){return e.gid==t})}}),function(n){if(n||(e.mode&64)==0){return thenshim_Promise.resolve(n)}else{return thenshim_Promise.then(which_Process.get_uid(),function(n){t=n;return e.uid==n})}}),function(n){if(n||(e.mode&72)==0){return n}else{return t==0}})}findExecutables(e,t){let n=this;let i=haxe_io_Path.isAbsolute(e)?e:haxe_io_Path.join([process.cwd(),e]);let s=[""].concat(this.extensions);let r=new Array(s.length);let l=0;let o=s.length;while(l<o){let e=l++;r[e]=StringTools.replace(haxe_io_Path.join([i,""+t+s[e]]),"/",which_Finder.get_isWindows()?"\\":"/")}let u=r;let c=new Array(u.length);let a=0;let _=u.length;while(a<_){let e=a++;c[e]=n.isExecutable(u[e])}return thenshim_Promise.then(thenshim_PromiseTools.all(c),function(e){let t=[];let n=0;while(n<e.length)if(e[n++]){t.push(u[n-1])}return t})}static get_isWindows(){if(Sys.systemName()=="Windows"){return true}let e=process.env["OSTYPE"];if(e!="cygwin"){return e=="msys"}else{return true}}}e["which"]["Finder"]=which_Finder;which_Finder.__name__=true;class which_FinderException extends haxe_Exception{constructor(e,t,n,i){if(n==null){n=""}super(n,i);this.command=e;this.finder=t}}e["which"]["FinderException"]=which_FinderException;which_FinderException.__name__=true;class which_Process{static get_gid(){if(typeof(r=process,$bind(r,r.getgid))=="function"){return thenshim_Promise.resolve(process.getgid())}return which_Process.getProcessId("g")}static get_uid(){if(typeof(r=process,$bind(r,r.getuid))=="function"){return thenshim_Promise.resolve(process.getuid())}return which_Process.getProcessId("u")}static getProcessId(e){if(which_Finder.get_isWindows()){return thenshim_Promise.resolve(-1)}return c.promisify(o.exec)("id -"+e).then(function(e){let t=Std.parseInt(e.stdout);if(t!=null){return t}else{return-1}})}}which_Process.__name__=true;function $getIterator(e){if(e instanceof Array)return new haxe_iterators_ArrayIterator(e);else return e.iterator()}function $bind(e,n){if(n==null)return null;if(n.__id__==null)n.__id__=t.$haxeUID++;var i;if(e.hx__closures__==null)e.hx__closures__={};else i=e.hx__closures__[n.__id__];if(i==null){i=n.bind(e);e.hx__closures__[n.__id__]=i}return i}t.$haxeUID|=0;if(typeof performance!="undefined"?typeof performance.now=="function":false){HxOverrides.now=performance.now.bind(performance)}if(String.fromCodePoint==null)String.fromCodePoint=function(e){return e<65536?String.fromCharCode(e):String.fromCharCode((e>>10)+55232)+String.fromCharCode((e&1023)+56320)};String.__name__=true;Array.__name__=true;js_Boot.__toStr={}.toString;thenshim_Promise.factory=new thenshim_js_JSPromiseFactory;tink_core_Callback.depth=0;Program.main()})(true?t:undefined,typeof window!="undefined"?window:typeof global!="undefined"?global:typeof self!="undefined"?self:this)},293:function(e){e.exports=require("buffer")},669:function(e){e.exports=require("util")},747:function(e){e.exports=require("fs")}});
