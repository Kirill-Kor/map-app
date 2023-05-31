"use strict";(self.webpackChunkmap_app=self.webpackChunkmap_app||[]).push([[3715],{48734:function(n,e,t){function r(n){switch(n){case"u8":case"i8":return 1;case"u16":case"i16":return 2;case"u32":case"i32":case"f32":return 4;case"f64":return 8}}function E(n){switch(n){case"u8":case"u16":case"u32":return!1;case"i8":case"i16":case"i32":case"f32":case"f64":return!0}}function _(n){switch(n){case"u8":case"u16":case"u32":case"i8":case"i16":case"i32":return!0;case"f32":case"f64":return!1}}function i(n){switch(n){case"u8":return 255;case"u16":return 65535;case"u32":return 4294967295;case"i8":return 127;case"i16":return 32767;case"i32":return 2147483647;case"f32":return 3402823e32;case"f64":return 179769e303}}t.d(e,{B3:function(){return E},Op:function(){return i},U:function(){return _},n1:function(){return r}})},35888:function(n,e,t){t.d(e,{d:function(){return _}});var r=t(16889),E=t(72838);function _(n,e,t){var _,u=Array.isArray(n),N=u?n.length/e:n.byteLength/(4*e),o=u?n:new Uint32Array(n,0,N*e),a=null!==(_=null===t||void 0===t?void 0:t.minReduction)&&void 0!==_?_:0,f=(null===t||void 0===t?void 0:t.originalIndices)||null,O=f?f.length:0,I=(null===t||void 0===t?void 0:t.componentOffsets)||null,S=0;if(I)for(var c=0;c<I.length-1;c++){var C=I[c+1]-I[c];C>S&&(S=C)}else S=N;var s=Math.floor(1.1*S)+1;(null==R||R.length<2*s)&&(R=new Uint32Array((0,r.Sf)(2*s)));for(var L=0;L<2*s;L++)R[L]=0;for(var D=0,U=!!I&&!!f,l=U?O:N,M=(0,E.$z)(N/3),P=new Uint32Array(O),G=1.96,F=0!==a?Math.ceil(4*G*G/(a*a)*a*(1-a)):l,B=1,v=I?I[1]:l,d=0;d<l;d++){if(d===F){var h=1-D/d;if(h+G*Math.sqrt(h*(1-h)/d)<a)return null;F*=2}if(d===v){for(var H=0;H<2*s;H++)R[H]=0;if(f)for(var p=I[B-1];p<I[B];p++)P[p]=M[f[p]];v=I[++B]}for(var g=U?f[d]:d,y=g*e,m=A(o,y,e),V=m%s,w=D;0!==R[2*V+1];){if(R[2*V]===m){var Y=R[2*V+1]-1;if(i(o,y,Y*e,e)){w=M[Y];break}}++V>=s&&(V-=s)}w===D&&(R[2*V]=m,R[2*V+1]=g+1,D++),M[g]=w}if(0!==a&&1-D/N<a)return null;if(U){for(var X=I[B-1];X<P.length;X++)P[X]=M[f[X]];M=(0,E.mi)(P)}var b=u?new Array(D):new Uint32Array(D*e);D=0;for(var k=0;k<l;k++)M[k]===D&&(T(o,(U?f[k]:k)*e,b,D*e,e),D++);if(f&&!U){for(var W=new Uint32Array(O),x=0;x<W.length;x++)W[x]=M[f[x]];M=(0,E.mi)(W)}return{buffer:Array.isArray(b)?b:b.buffer,indices:M,uniqueCount:D}}function i(n,e,t,r){for(var E=0;E<r;E++)if(n[e+E]!==n[t+E])return!1;return!0}function T(n,e,t,r,E){for(var _=0;_<E;_++)t[r+_]=n[e+_]}function A(n,e,t){for(var r=0,E=0;E<t;E++)r=(r=n[e+E]+r|0)+(r<<11)+(r>>>2)|0;return r>>>0}var R=null},55158:function(n,e,t){t.d(e,{U$:function(){return u}});var r=t(37762),E=t(15671),_=t(43144),i=t(25158),T=t(48734),A=function(){function n(e,t){(0,E.Z)(this,n),this.layout=e,this.buffer="number"==typeof t?new ArrayBuffer(t*e.stride):t;var _,i=(0,r.Z)(e.fieldNames);try{for(i.s();!(_=i.n()).done;){var T=_.value,A=e.fields.get(T);this[T]=new A.constructor(this.buffer,A.offset,this.stride)}}catch(R){i.e(R)}finally{i.f()}}return(0,_.Z)(n,[{key:"stride",get:function(){return this.layout.stride}},{key:"count",get:function(){return this.buffer.byteLength/this.stride}},{key:"byteLength",get:function(){return this.buffer.byteLength}},{key:"getField",value:function(n,e){var t=this[n];return t&&t.elementCount===e.ElementCount&&t.elementType===e.ElementType?t:null}},{key:"slice",value:function(e,t){return new n(this.layout,this.buffer.slice(e*this.stride,t*this.stride))}},{key:"copyFrom",value:function(n,e,t,r){var E=this.stride;if(E%4==0){var _=new Uint32Array(n.buffer,e*E,r*E/4);new Uint32Array(this.buffer,t*E,r*E/4).set(_)}else{var i=new Uint8Array(n.buffer,e*E,r*E);new Uint8Array(this.buffer,t*E,r*E).set(i)}}}]),n}(),R=function(){function n(){(0,E.Z)(this,n),this.stride=0,this.fields=new Map,this.fieldNames=[]}return(0,_.Z)(n,[{key:"vec2f",value:function(n,e){return this._appendField(n,i.Eu,e),this}},{key:"vec2f64",value:function(n,e){return this._appendField(n,i.q6,e),this}},{key:"vec3f",value:function(n,e){return this._appendField(n,i.ct,e),this}},{key:"vec3f64",value:function(n,e){return this._appendField(n,i.fP,e),this}},{key:"vec4f",value:function(n,e){return this._appendField(n,i.ek,e),this}},{key:"vec4f64",value:function(n,e){return this._appendField(n,i.Cd,e),this}},{key:"mat3f",value:function(n,e){return this._appendField(n,i.gK,e),this}},{key:"mat3f64",value:function(n,e){return this._appendField(n,i.ey,e),this}},{key:"mat4f",value:function(n,e){return this._appendField(n,i.bj,e),this}},{key:"mat4f64",value:function(n,e){return this._appendField(n,i.O1,e),this}},{key:"vec4u8",value:function(n,e){return this._appendField(n,i.mc,e),this}},{key:"f32",value:function(n,e){return this._appendField(n,i.ly,e),this}},{key:"f64",value:function(n,e){return this._appendField(n,i.oS,e),this}},{key:"u8",value:function(n,e){return this._appendField(n,i.D_,e),this}},{key:"u16",value:function(n,e){return this._appendField(n,i.av,e),this}},{key:"i8",value:function(n,e){return this._appendField(n,i.Hz,e),this}},{key:"vec2i8",value:function(n,e){return this._appendField(n,i.Vs,e),this}},{key:"vec2i16",value:function(n,e){return this._appendField(n,i.or,e),this}},{key:"vec2u8",value:function(n,e){return this._appendField(n,i.xA,e),this}},{key:"vec4u16",value:function(n,e){return this._appendField(n,i.v6,e),this}},{key:"u32",value:function(n,e){return this._appendField(n,i.Nu,e),this}},{key:"_appendField",value:function(n,e,t){var r=e.ElementCount*(0,T.n1)(e.ElementType),E=this.stride;this.fields.set(n,{size:r,constructor:e,offset:E,optional:t}),this.stride+=r,this.fieldNames.push(n)}},{key:"alignTo",value:function(n){return this.stride=Math.floor((this.stride+n-1)/n)*n,this}},{key:"hasField",value:function(n){return this.fieldNames.includes(n)}},{key:"createBuffer",value:function(n){return new A(this,n)}},{key:"createView",value:function(n){return new A(this,n)}},{key:"clone",value:function(){var e=new n;return e.stride=this.stride,e.fields=new Map,this.fields.forEach((function(n,t){return e.fields.set(t,n)})),e.fieldNames=this.fieldNames.slice(),e.BufferType=this.BufferType,e}}]),n}();function u(){return new R}},50256:function(n,e,t){t.d(e,{K:function(){return _}});var r=t(8548),E=t(61109);function _(n){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,t=n.stride;return n.fieldNames.filter((function(e){var t=n.fields.get(e).optional;return!(t&&t.glPadding)})).map((function(r){var _=n.fields.get(r),T=_.constructor.ElementCount,A=i(_.constructor.ElementType),R=_.offset,u=!(!_.optional||!_.optional.glNormalized);return new E.G(r,T,A,R,t,u,e)}))}function i(n){var e=T[n];if(e)return e;throw new Error("BufferType not supported in WebGL")}var T={u8:r.g.UNSIGNED_BYTE,u16:r.g.UNSIGNED_SHORT,u32:r.g.UNSIGNED_INT,i8:r.g.BYTE,i16:r.g.SHORT,i32:r.g.INT,f32:r.g.FLOAT}},72838:function(n,e,t){t.d(e,{$z:function(){return i},DX:function(){return N},mi:function(){return _},p:function(){return u}});var r=t(37762),E=t(18722);function _(n){if(Array.isArray(n)){if(n.length<E.DB)return n;var e,t=(0,r.Z)(n);try{for(t.s();!(e=t.n()).done;){if(e.value>=65536)return new Uint32Array(n)}}catch(T){t.e(T)}finally{t.f()}return new Uint16Array(n)}if(n.length<E.DB)return Array.from(n);if(n.BYTES_PER_ELEMENT===Uint16Array.BYTES_PER_ELEMENT)return n;var _,i=(0,r.Z)(n);try{for(i.s();!(_=i.n()).done;){if(_.value>=65536)return n}}catch(T){i.e(T)}finally{i.f()}return new Uint16Array(n)}function i(n){var e=3*n;return e<=E.DB?new Array(e):e<=65536?new Uint16Array(e):new Uint32Array(e)}var T=function(){for(var n=new Uint32Array(131072),e=0;e<n.length;++e)n[e]=e;return n}(),A=[0],R=function(){for(var n=new Uint16Array(65536),e=0;e<n.length;++e)n[e]=e;return n}();function u(n){if(1===n)return A;if(n<E.DB)return Array.from(new Uint16Array(R.buffer,0,n));if(n<R.length)return new Uint16Array(R.buffer,0,n);if(n>T.length){var e=Math.max(2*T.length,n);T=new Uint32Array(e);for(var t=0;t<T.length;t++)T[t]=t}return new Uint32Array(T.buffer,0,n)}function N(n){if(1===n)return A;if(n<E.DB)return Array.from(new Uint16Array(R.buffer,0,n));if(n<R.length)return new Uint16Array(R.slice(0,n));if(n>T.length){for(var e=new Uint32Array(n),t=0;t<e.length;t++)e[t]=t;return e}return new Uint32Array(T.slice(0,n))}},4760:function(n,e,t){var r;t.d(e,{T:function(){return r}}),function(n){n.POSITION="position",n.NORMAL="normal",n.UV0="uv0",n.AUXPOS1="auxpos1",n.AUXPOS2="auxpos2",n.COLOR="color",n.SYMBOLCOLOR="symbolColor",n.SIZE="size",n.TANGENT="tangent",n.OFFSET="offset",n.SUBDIVISIONFACTOR="subdivisionFactor",n.COLORFEATUREATTRIBUTE="colorFeatureAttribute",n.SIZEFEATUREATTRIBUTE="sizeFeatureAttribute",n.OPACITYFEATUREATTRIBUTE="opacityFeatureAttribute",n.DISTANCETOSTART="distanceToStart",n.UVMAPSPACE="uvMapSpace",n.BOUNDINGRECT="boundingRect",n.UVREGION="uvRegion",n.NORMALCOMPRESSED="normalCompressed",n.PROFILERIGHT="profileRight",n.PROFILEUP="profileUp",n.PROFILEVERTEXANDNORMAL="profileVertexAndNormal",n.FEATUREVALUE="featureValue",n.MODELORIGINHI="modelOriginHi",n.MODELORIGINLO="modelOriginLo",n.MODEL="model",n.MODELNORMAL="modelNormal",n.INSTANCECOLOR="instanceColor",n.INSTANCEFEATUREATTRIBUTE="instanceFeatureAttribute",n.LOCALTRANSFORM="localTransform",n.GLOBALTRANSFORM="globalTransform",n.BOUNDINGSPHERE="boundingSphere",n.MODELORIGIN="modelOrigin",n.MODELSCALEFACTORS="modelScaleFactors",n.FEATUREATTRIBUTE="featureAttribute",n.STATE="state",n.LODLEVEL="lodLevel",n.POSITION0="position0",n.POSITION1="position1",n.NORMALA="normalA",n.NORMALB="normalB",n.COMPONENTINDEX="componentIndex",n.VARIANTOFFSET="variantOffset",n.VARIANTSTROKE="variantStroke",n.VARIANTEXTENSION="variantExtension",n.U8PADDING="u8padding",n.U16PADDING="u16padding",n.SIDENESS="sideness",n.START="start",n.END="end",n.UP="up",n.EXTRUDE="extrude",n.OBJECTANDLAYERIDCOLOR="objectAndLayerIdColor",n.OBJECTANDLAYERIDCOLOR_INSTANCED="objectAndLayerIdColor_instanced"}(r||(r={}))},67009:function(n,e,t){t.d(e,{Hr:function(){return u},dG:function(){return R},tf:function(){return i}});var r=t(50256),E=t(55158),_=t(4760),i=(0,E.U$)().vec3f(_.T.POSITION).u16(_.T.COMPONENTINDEX).u16(_.T.U16PADDING),T=(0,E.U$)().vec2u8(_.T.SIDENESS),A=((0,r.K)(T),(0,E.U$)().vec3f(_.T.POSITION0).vec3f(_.T.POSITION1).u16(_.T.COMPONENTINDEX).u8(_.T.VARIANTOFFSET,{glNormalized:!0}).u8(_.T.VARIANTSTROKE).u8(_.T.VARIANTEXTENSION,{glNormalized:!0}).u8(_.T.U8PADDING,{glPadding:!0}).u16(_.T.U16PADDING,{glPadding:!0})),R=A.clone().vec3f(_.T.NORMAL),u=A.clone().vec3f(_.T.NORMALA).vec3f(_.T.NORMALB);new Map([[_.T.POSITION0,0],[_.T.POSITION1,1],[_.T.COMPONENTINDEX,2],[_.T.VARIANTOFFSET,3],[_.T.VARIANTSTROKE,4],[_.T.VARIANTEXTENSION,5],[_.T.NORMAL,6],[_.T.NORMALA,6],[_.T.NORMALB,7],[_.T.SIDENESS,8]])},10662:function(n,e,t){t.d(e,{n:function(){return u}});var r,E,_=t(63780),i=t(16889),T=t(11186),A=t(71353),R=-1;function u(n,e,t){var r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:I,E=n.vertices.position,A=n.vertices.componentIndex,u=(0,i.Vl)(r.anglePlanar),O=(0,i.Vl)(r.angleSignificantEdge),S=Math.cos(O),c=Math.cos(u),C=f.edge,s=C.position0,L=C.position1,D=C.faceNormal0,U=C.faceNormal1,l=a(n),M=function(n){for(var e=n.faces.length/3,t=n.faces,r=n.neighbors,E=0,_=0;_<e;_++){var i=r[3*_+0],T=r[3*_+1],A=r[3*_+2],u=t[3*_+0],N=t[3*_+1],o=t[3*_+2];E+=i===R||u<N?1:0,E+=T===R||N<o?1:0,E+=A===R||o<u?1:0}for(var a=new Int32Array(4*E),f=0,O=0;O<e;O++){var I=r[3*O+0],S=r[3*O+1],c=r[3*O+2],C=t[3*O+0],s=t[3*O+1],L=t[3*O+2];(I===R||C<s)&&(a[f++]=C,a[f++]=s,a[f++]=O,a[f++]=I),(S===R||s<L)&&(a[f++]=s,a[f++]=L,a[f++]=O,a[f++]=S),(c===R||L<C)&&(a[f++]=L,a[f++]=C,a[f++]=O,a[f++]=c)}return a}(n),P=M.length/4,G=e.allocate(P),F=0,B=P,v=t.allocate(B),d=0,h=0,H=0,p=(0,_.w6)(0,P),g=new Float32Array(P);g.forEach((function(n,e,t){E.getVec(M[4*e+0],s),E.getVec(M[4*e+1],L),t[e]=(0,T.i)(s,L)})),p.sort((function(n,e){return g[e]-g[n]}));for(var y,m=new Array,V=new Array,w=0;w<P;w++){var Y=p[w],X=g[Y],b=M[4*Y+0],k=M[4*Y+1],W=M[4*Y+2],x=M[4*Y+3],Z=x===R;if(E.getVec(b,s),E.getVec(k,L),Z)(0,T.s)(D,l[3*W+0],l[3*W+1],l[3*W+2]),(0,T.c)(U,D),C.componentIndex=A.get(b),C.cosAngle=(0,T.e)(D,U);else{if((0,T.s)(D,l[3*W+0],l[3*W+1],l[3*W+2]),(0,T.s)(U,l[3*x+0],l[3*x+1],l[3*x+2]),C.componentIndex=A.get(b),C.cosAngle=(0,T.e)(D,U),y=c,C.cosAngle>y)continue;C.cosAngle<-.9999&&(0,T.c)(U,D)}h+=X,H++,Z||N(C,S)?(e.write(G,F++,C),m.push(X)):o(C,u)&&(t.write(v,d++,C),V.push(X))}var K=new Float32Array(m.reverse()),z=new Float32Array(V.reverse());return{regular:{instancesData:e.trim(G,F),lodInfo:{lengths:K}},silhouette:{instancesData:t.trim(v,d),lodInfo:{lengths:z}},averageEdgeLength:h/H}}function N(n,e){return n.cosAngle<e}function o(n,e){var t=(0,i.ZF)(n.cosAngle),r=f.fwd,E=f.ortho;return(0,T.r)(r,n.position1,n.position0),t*((0,T.e)((0,T.f)(E,n.faceNormal0,n.faceNormal1),r)>0?-1:1)>e}function a(n){for(var e=n.faces.length/3,t=n.vertices.position,r=n.faces,E=O.v0,_=O.v1,i=O.v2,A=new Float32Array(3*e),R=0;R<e;R++){var u=r[3*R+0],N=r[3*R+1],o=r[3*R+2];t.getVec(u,E),t.getVec(N,_),t.getVec(o,i),(0,T.b)(_,_,E),(0,T.b)(i,i,E),(0,T.f)(E,_,i),(0,T.n)(E,E),A[3*R+0]=E[0],A[3*R+1]=E[1],A[3*R+2]=E[2]}return A}(E=r||(r={}))[E.SOLID=0]="SOLID",E[E.SKETCH=1]="SKETCH";var f={edge:{position0:(0,A.c)(),position1:(0,A.c)(),faceNormal0:(0,A.c)(),faceNormal1:(0,A.c)(),componentIndex:0,cosAngle:0},ortho:(0,A.c)(),fwd:(0,A.c)()},O={v0:(0,A.c)(),v1:(0,A.c)(),v2:(0,A.c)()},I={anglePlanar:4,angleSignificantEdge:35}},83715:function(n,e,t){t.d(e,{Kl:function(){return G},n_:function(){return H},kY:function(){return F},Yr:function(){return h}});var r=t(43144),E=t(15671),_=t(35888);function i(n,e,t){for(var r=e/3,E=new Uint32Array(t+1),_=new Uint32Array(t+1),i=function(n,e){n<e?E[n+1]++:_[e+1]++},T=0;T<r;T++){var A=n[3*T],R=n[3*T+1],u=n[3*T+2];i(A,R),i(R,u),i(u,A)}for(var N=0,o=0,a=0;a<t;a++){var f=E[a+1],O=_[a+1];E[a+1]=N,_[a+1]=o,N+=f,o+=O}for(var I=new Uint32Array(6*r),S=E[t],c=function(n,e,t){if(n<e){var r=E[n+1]++;I[2*r]=e,I[2*r+1]=t}else{var i=_[e+1]++;I[2*S+2*i]=n,I[2*S+2*i+1]=t}},C=0;C<r;C++){var s=n[3*C],L=n[3*C+1],D=n[3*C+2];c(s,L,C),c(L,D,C),c(D,s,C)}for(var U=function(n,e){for(var t=2*n,r=e-n,E=1;E<r;E++){for(var _=I[t+2*E],i=I[t+2*E+1],T=E-1;T>=0&&I[t+2*T]>_;T--)I[t+2*T+2]=I[t+2*T],I[t+2*T+3]=I[t+2*T+1];I[t+2*T+2]=_,I[t+2*T+3]=i}},l=0;l<t;l++)U(E[l],E[l+1]),U(S+_[l],S+_[l+1]);for(var M=new Int32Array(3*r),P=function(e,t){return e===n[3*t]?0:e===n[3*t+1]?1:e===n[3*t+2]?2:-1},G=function(n,e){var t=P(n,e);M[3*e+t]=-1},F=function(n,e,t,r){var E=P(n,e);M[3*e+E]=r;var _=P(t,r);M[3*r+_]=e},B=0;B<t;B++){for(var v=E[B],d=E[B+1],h=_[B],H=_[B+1];v<d&&h<H;){var p=I[2*v],g=I[2*S+2*h];p===g?(F(B,I[2*v+1],g,I[2*S+2*h+1]),v++,h++):p<g?(G(B,I[2*v+1]),v++):(G(g,I[2*S+2*h+1]),h++)}for(;v<d;)G(B,I[2*v+1]),v++;for(;h<H;)G(I[2*S+2*h],I[2*S+2*h+1]),h++}return M}var T=t(55158),A=t(4760),R=t(67009),u=t(84936),N=t(11186),o=t(71353),a=t(50256),f=function(){function n(){(0,E.Z)(this,n)}return(0,r.Z)(n,[{key:"updateSettings",value:function(n){this.settings=n,this._edgeHashFunction=n.reducedPrecision?C:c}},{key:"write",value:function(n,e,t){var r=this._edgeHashFunction(t);M.seed=r;var E=M.getIntRange(0,255),_=M.getIntRange(0,this.settings.variants-1),i=M.getFloat(),T=255*(.5*function(n,e){var t=n<0?-1:1;return Math.pow(Math.abs(n),e)*t}(-(1-Math.min(i/.7,1))+Math.max(0,i-.7)/(1-.7),1.2)+.5);n.position0.setVec(e,t.position0),n.position1.setVec(e,t.position1),n.componentIndex.set(e,t.componentIndex),n.variantOffset.set(e,E),n.variantStroke.set(e,_),n.variantExtension.set(e,T)}},{key:"trim",value:function(n,e){return n.slice(0,e)}}]),n}(),O=new Float32Array(6),I=new Uint32Array(O.buffer),S=new Uint32Array(1);function c(n){var e=O;e[0]=n.position0[0],e[1]=n.position0[1],e[2]=n.position0[2],e[3]=n.position1[0],e[4]=n.position1[1],e[5]=n.position1[2],S[0]=5381;for(var t=0;t<I.length;t++)S[0]=31*S[0]+I[t];return S[0]}function C(n){var e=O;e[0]=L(n.position0[0]),e[1]=L(n.position0[1]),e[2]=L(n.position0[2]),e[3]=L(n.position1[0]),e[4]=L(n.position1[1]),e[5]=L(n.position1[2]),S[0]=5381;for(var t=0;t<I.length;t++)S[0]=31*S[0]+I[t];return S[0]}var s=1e4;function L(n){return Math.round(n*s)/s}var D=function(){function n(){(0,E.Z)(this,n),this._commonWriter=new f}return(0,r.Z)(n,[{key:"updateSettings",value:function(n){this._commonWriter.updateSettings(n)}},{key:"allocate",value:function(n){return R.dG.createBuffer(n)}},{key:"write",value:function(n,e,t){this._commonWriter.write(n,e,t),(0,N.a)(l,t.faceNormal0,t.faceNormal1),(0,N.n)(l,l),n.normal.setVec(e,l)}},{key:"trim",value:function(n,e){return this._commonWriter.trim(n,e)}}]),n}();D.Layout=R.dG,D.glLayout=(0,a.K)(R.dG,1);var U=function(){function n(){(0,E.Z)(this,n),this._commonWriter=new f}return(0,r.Z)(n,[{key:"updateSettings",value:function(n){this._commonWriter.updateSettings(n)}},{key:"allocate",value:function(n){return R.Hr.createBuffer(n)}},{key:"write",value:function(n,e,t){this._commonWriter.write(n,e,t),n.normalA.setVec(e,t.faceNormal0),n.normalB.setVec(e,t.faceNormal1)}},{key:"trim",value:function(n,e){return this._commonWriter.trim(n,e)}}]),n}();U.Layout=R.Hr,U.glLayout=(0,a.K)(R.Hr,1);var l=(0,o.c)(),M=new u.Z,P=t(10662);function G(n){var e=F(n.data,n.skipDeduplicate,n.indices,n.indicesLength);return v.updateSettings(n.writerSettings),d.updateSettings(n.writerSettings),(0,P.n)(e,v,d)}function F(n,e,t,r){if(e){var E=i(t,r,n.count);return new B(t,r,E,n)}var T=(0,_.d)(n.buffer,n.stride/4,{originalIndices:t,originalIndicesLength:r}),A=i(T.indices,r,T.uniqueCount);return{faces:T.indices,facesLength:T.indices.length,neighbors:A,vertices:R.tf.createView(T.buffer)}}var B=(0,r.Z)((function n(e,t,r,_){(0,E.Z)(this,n),this.faces=e,this.facesLength=t,this.neighbors=r,this.vertices=_})),v=new D,d=new U,h=(0,T.U$)().vec3f(A.T.POSITION0).vec3f(A.T.POSITION1),H=(0,T.U$)().vec3f(A.T.POSITION0).vec3f(A.T.POSITION1).u16(A.T.COMPONENTINDEX).u16(A.T.U16PADDING,{glPadding:!0})},61109:function(n,e,t){t.d(e,{G:function(){return _}});var r=t(43144),E=t(15671),_=(0,r.Z)((function n(e,t,r,_,i){var T=arguments.length>5&&void 0!==arguments[5]&&arguments[5],A=arguments.length>6&&void 0!==arguments[6]?arguments[6]:0;(0,E.Z)(this,n),this.name=e,this.count=t,this.type=r,this.offset=_,this.stride=i,this.normalized=T,this.divisor=A}))},8548:function(n,e,t){var r,E,_,i,T,A,R,u,N,o,a,f,O,I,S,c,C,s,L,D,U,l;t.d(e,{Br:function(){return c},Ho:function(){return L},LR:function(){return A},Ld:function(){return G},Lm:function(){return U},Lu:function(){return g},MX:function(){return E},No:function(){return O},OU:function(){return l},Se:function(){return B},Tg:function(){return C},V7:function(){return H},VI:function(){return I},VY:function(){return P},Wf:function(){return R},Y5:function(){return h},_g:function(){return M},cw:function(){return a},db:function(){return i},e8:function(){return f},g:function(){return u},l1:function(){return s},lP:function(){return S},lk:function(){return r},q_:function(){return F},qi:function(){return D},w0:function(){return T},wb:function(){return N},xS:function(){return o},zi:function(){return _}}),function(n){n[n.DEPTH_BUFFER_BIT=256]="DEPTH_BUFFER_BIT",n[n.STENCIL_BUFFER_BIT=1024]="STENCIL_BUFFER_BIT",n[n.COLOR_BUFFER_BIT=16384]="COLOR_BUFFER_BIT"}(r||(r={})),function(n){n[n.POINTS=0]="POINTS",n[n.LINES=1]="LINES",n[n.LINE_LOOP=2]="LINE_LOOP",n[n.LINE_STRIP=3]="LINE_STRIP",n[n.TRIANGLES=4]="TRIANGLES",n[n.TRIANGLE_STRIP=5]="TRIANGLE_STRIP",n[n.TRIANGLE_FAN=6]="TRIANGLE_FAN"}(E||(E={})),function(n){n[n.ZERO=0]="ZERO",n[n.ONE=1]="ONE",n[n.SRC_COLOR=768]="SRC_COLOR",n[n.ONE_MINUS_SRC_COLOR=769]="ONE_MINUS_SRC_COLOR",n[n.SRC_ALPHA=770]="SRC_ALPHA",n[n.ONE_MINUS_SRC_ALPHA=771]="ONE_MINUS_SRC_ALPHA",n[n.DST_ALPHA=772]="DST_ALPHA",n[n.ONE_MINUS_DST_ALPHA=773]="ONE_MINUS_DST_ALPHA",n[n.DST_COLOR=774]="DST_COLOR",n[n.ONE_MINUS_DST_COLOR=775]="ONE_MINUS_DST_COLOR",n[n.SRC_ALPHA_SATURATE=776]="SRC_ALPHA_SATURATE",n[n.CONSTANT_COLOR=32769]="CONSTANT_COLOR",n[n.ONE_MINUS_CONSTANT_COLOR=32770]="ONE_MINUS_CONSTANT_COLOR",n[n.CONSTANT_ALPHA=32771]="CONSTANT_ALPHA",n[n.ONE_MINUS_CONSTANT_ALPHA=32772]="ONE_MINUS_CONSTANT_ALPHA"}(_||(_={})),function(n){n[n.ADD=32774]="ADD",n[n.SUBTRACT=32778]="SUBTRACT",n[n.REVERSE_SUBTRACT=32779]="REVERSE_SUBTRACT"}(i||(i={})),function(n){n[n.ARRAY_BUFFER=34962]="ARRAY_BUFFER",n[n.ELEMENT_ARRAY_BUFFER=34963]="ELEMENT_ARRAY_BUFFER",n[n.UNIFORM_BUFFER=35345]="UNIFORM_BUFFER",n[n.PIXEL_PACK_BUFFER=35051]="PIXEL_PACK_BUFFER",n[n.PIXEL_UNPACK_BUFFER=35052]="PIXEL_UNPACK_BUFFER",n[n.COPY_READ_BUFFER=36662]="COPY_READ_BUFFER",n[n.COPY_WRITE_BUFFER=36663]="COPY_WRITE_BUFFER"}(T||(T={})),function(n){n[n.FRONT=1028]="FRONT",n[n.BACK=1029]="BACK",n[n.FRONT_AND_BACK=1032]="FRONT_AND_BACK"}(A||(A={})),function(n){n[n.CW=2304]="CW",n[n.CCW=2305]="CCW"}(R||(R={})),function(n){n[n.BYTE=5120]="BYTE",n[n.UNSIGNED_BYTE=5121]="UNSIGNED_BYTE",n[n.SHORT=5122]="SHORT",n[n.UNSIGNED_SHORT=5123]="UNSIGNED_SHORT",n[n.INT=5124]="INT",n[n.UNSIGNED_INT=5125]="UNSIGNED_INT",n[n.FLOAT=5126]="FLOAT"}(u||(u={})),function(n){n[n.NEVER=512]="NEVER",n[n.LESS=513]="LESS",n[n.EQUAL=514]="EQUAL",n[n.LEQUAL=515]="LEQUAL",n[n.GREATER=516]="GREATER",n[n.NOTEQUAL=517]="NOTEQUAL",n[n.GEQUAL=518]="GEQUAL",n[n.ALWAYS=519]="ALWAYS"}(N||(N={})),function(n){n[n.ZERO=0]="ZERO",n[n.KEEP=7680]="KEEP",n[n.REPLACE=7681]="REPLACE",n[n.INCR=7682]="INCR",n[n.DECR=7683]="DECR",n[n.INVERT=5386]="INVERT",n[n.INCR_WRAP=34055]="INCR_WRAP",n[n.DECR_WRAP=34056]="DECR_WRAP"}(o||(o={})),function(n){n[n.NEAREST=9728]="NEAREST",n[n.LINEAR=9729]="LINEAR",n[n.NEAREST_MIPMAP_NEAREST=9984]="NEAREST_MIPMAP_NEAREST",n[n.LINEAR_MIPMAP_NEAREST=9985]="LINEAR_MIPMAP_NEAREST",n[n.NEAREST_MIPMAP_LINEAR=9986]="NEAREST_MIPMAP_LINEAR",n[n.LINEAR_MIPMAP_LINEAR=9987]="LINEAR_MIPMAP_LINEAR"}(a||(a={})),function(n){n[n.CLAMP_TO_EDGE=33071]="CLAMP_TO_EDGE",n[n.REPEAT=10497]="REPEAT",n[n.MIRRORED_REPEAT=33648]="MIRRORED_REPEAT"}(f||(f={})),function(n){n[n.TEXTURE_2D=3553]="TEXTURE_2D",n[n.TEXTURE_CUBE_MAP=34067]="TEXTURE_CUBE_MAP",n[n.TEXTURE_3D=32879]="TEXTURE_3D",n[n.TEXTURE_CUBE_MAP_POSITIVE_X=34069]="TEXTURE_CUBE_MAP_POSITIVE_X",n[n.TEXTURE_CUBE_MAP_NEGATIVE_X=34070]="TEXTURE_CUBE_MAP_NEGATIVE_X",n[n.TEXTURE_CUBE_MAP_POSITIVE_Y=34071]="TEXTURE_CUBE_MAP_POSITIVE_Y",n[n.TEXTURE_CUBE_MAP_NEGATIVE_Y=34072]="TEXTURE_CUBE_MAP_NEGATIVE_Y",n[n.TEXTURE_CUBE_MAP_POSITIVE_Z=34073]="TEXTURE_CUBE_MAP_POSITIVE_Z",n[n.TEXTURE_CUBE_MAP_NEGATIVE_Z=34074]="TEXTURE_CUBE_MAP_NEGATIVE_Z",n[n.TEXTURE_2D_ARRAY=35866]="TEXTURE_2D_ARRAY"}(O||(O={})),function(n){n[n.DEPTH_COMPONENT=6402]="DEPTH_COMPONENT",n[n.DEPTH_STENCIL=34041]="DEPTH_STENCIL",n[n.ALPHA=6406]="ALPHA",n[n.RGB=6407]="RGB",n[n.RGBA=6408]="RGBA",n[n.LUMINANCE=6409]="LUMINANCE",n[n.LUMINANCE_ALPHA=6410]="LUMINANCE_ALPHA",n[n.RED=6403]="RED",n[n.RG=33319]="RG",n[n.RED_INTEGER=36244]="RED_INTEGER",n[n.RG_INTEGER=33320]="RG_INTEGER",n[n.RGB_INTEGER=36248]="RGB_INTEGER",n[n.RGBA_INTEGER=36249]="RGBA_INTEGER"}(I||(I={})),function(n){n[n.RGBA4=32854]="RGBA4",n[n.R16F=33325]="R16F",n[n.RG16F=33327]="RG16F",n[n.RGB32F=34837]="RGB32F",n[n.RGBA16F=34842]="RGBA16F",n[n.R32F=33326]="R32F",n[n.RG32F=33328]="RG32F",n[n.RGBA32F=34836]="RGBA32F",n[n.R11F_G11F_B10F=35898]="R11F_G11F_B10F",n[n.RGB8=32849]="RGB8",n[n.RGBA8=32856]="RGBA8",n[n.RGB5_A1=32855]="RGB5_A1",n[n.R8=33321]="R8",n[n.RG8=33323]="RG8",n[n.R8I=33329]="R8I",n[n.R8UI=33330]="R8UI",n[n.R16I=33331]="R16I",n[n.R16UI=33332]="R16UI",n[n.R32I=33333]="R32I",n[n.R32UI=33334]="R32UI",n[n.RG8I=33335]="RG8I",n[n.RG8UI=33336]="RG8UI",n[n.RG16I=33337]="RG16I",n[n.RG16UI=33338]="RG16UI",n[n.RG32I=33339]="RG32I",n[n.RG32UI=33340]="RG32UI",n[n.RGB16F=34843]="RGB16F",n[n.RGB9_E5=35901]="RGB9_E5",n[n.SRGB8=35905]="SRGB8",n[n.SRGB8_ALPHA8=35907]="SRGB8_ALPHA8",n[n.RGB565=36194]="RGB565",n[n.RGBA32UI=36208]="RGBA32UI",n[n.RGB32UI=36209]="RGB32UI",n[n.RGBA16UI=36214]="RGBA16UI",n[n.RGB16UI=36215]="RGB16UI",n[n.RGBA8UI=36220]="RGBA8UI",n[n.RGB8UI=36221]="RGB8UI",n[n.RGBA32I=36226]="RGBA32I",n[n.RGB32I=36227]="RGB32I",n[n.RGBA16I=36232]="RGBA16I",n[n.RGB16I=36233]="RGB16I",n[n.RGBA8I=36238]="RGBA8I",n[n.RGB8I=36239]="RGB8I",n[n.R8_SNORM=36756]="R8_SNORM",n[n.RG8_SNORM=36757]="RG8_SNORM",n[n.RGB8_SNORM=36758]="RGB8_SNORM",n[n.RGBA8_SNORM=36759]="RGBA8_SNORM",n[n.RGB10_A2=32857]="RGB10_A2",n[n.RGB10_A2UI=36975]="RGB10_A2UI"}(S||(S={})),function(n){n[n.FLOAT=5126]="FLOAT",n[n.UNSIGNED_BYTE=5121]="UNSIGNED_BYTE",n[n.UNSIGNED_INT_24_8=34042]="UNSIGNED_INT_24_8",n[n.UNSIGNED_SHORT_4_4_4_4=32819]="UNSIGNED_SHORT_4_4_4_4",n[n.UNSIGNED_SHORT_5_5_5_1=32820]="UNSIGNED_SHORT_5_5_5_1",n[n.UNSIGNED_SHORT_5_6_5=33635]="UNSIGNED_SHORT_5_6_5",n[n.BYTE=5120]="BYTE",n[n.UNSIGNED_SHORT=5123]="UNSIGNED_SHORT",n[n.SHORT=5122]="SHORT",n[n.UNSIGNED_INT=5125]="UNSIGNED_INT",n[n.INT=5124]="INT",n[n.HALF_FLOAT=5131]="HALF_FLOAT",n[n.UNSIGNED_INT_2_10_10_10_REV=33640]="UNSIGNED_INT_2_10_10_10_REV",n[n.UNSIGNED_INT_10F_11F_11F_REV=35899]="UNSIGNED_INT_10F_11F_11F_REV",n[n.UNSIGNED_INT_5_9_9_9_REV=35902]="UNSIGNED_INT_5_9_9_9_REV",n[n.FLOAT_32_UNSIGNED_INT_24_8_REV=36269]="FLOAT_32_UNSIGNED_INT_24_8_REV"}(c||(c={})),function(n){n[n.DEPTH_COMPONENT16=33189]="DEPTH_COMPONENT16",n[n.STENCIL_INDEX8=36168]="STENCIL_INDEX8",n[n.DEPTH_STENCIL=34041]="DEPTH_STENCIL",n[n.DEPTH_COMPONENT24=33190]="DEPTH_COMPONENT24",n[n.DEPTH_COMPONENT32F=36012]="DEPTH_COMPONENT32F",n[n.DEPTH24_STENCIL8=35056]="DEPTH24_STENCIL8",n[n.DEPTH32F_STENCIL8=36013]="DEPTH32F_STENCIL8"}(C||(C={})),function(n){n[n.STATIC_DRAW=35044]="STATIC_DRAW",n[n.DYNAMIC_DRAW=35048]="DYNAMIC_DRAW",n[n.STREAM_DRAW=35040]="STREAM_DRAW",n[n.STATIC_READ=35045]="STATIC_READ",n[n.DYNAMIC_READ=35049]="DYNAMIC_READ",n[n.STREAM_READ=35041]="STREAM_READ",n[n.STATIC_COPY=35046]="STATIC_COPY",n[n.DYNAMIC_COPY=35050]="DYNAMIC_COPY",n[n.STREAM_COPY=35042]="STREAM_COPY"}(s||(s={})),function(n){n[n.FRAGMENT_SHADER=35632]="FRAGMENT_SHADER",n[n.VERTEX_SHADER=35633]="VERTEX_SHADER"}(L||(L={})),function(n){n[n.FRAMEBUFFER=36160]="FRAMEBUFFER",n[n.READ_FRAMEBUFFER=36008]="READ_FRAMEBUFFER",n[n.DRAW_FRAMEBUFFER=36009]="DRAW_FRAMEBUFFER"}(D||(D={})),function(n){n[n.TEXTURE=0]="TEXTURE",n[n.RENDER_BUFFER=1]="RENDER_BUFFER",n[n.CUBEMAP=2]="CUBEMAP"}(U||(U={})),function(n){n[n.NONE=0]="NONE",n[n.DEPTH_RENDER_BUFFER=1]="DEPTH_RENDER_BUFFER",n[n.STENCIL_RENDER_BUFFER=2]="STENCIL_RENDER_BUFFER",n[n.DEPTH_STENCIL_RENDER_BUFFER=3]="DEPTH_STENCIL_RENDER_BUFFER",n[n.DEPTH_STENCIL_TEXTURE=4]="DEPTH_STENCIL_TEXTURE"}(l||(l={}));var M,P,G=33984;!function(n){n[n.Texture=0]="Texture",n[n.BufferObject=1]="BufferObject",n[n.VertexArrayObject=2]="VertexArrayObject",n[n.Shader=3]="Shader",n[n.Program=4]="Program",n[n.FramebufferObject=5]="FramebufferObject",n[n.Renderbuffer=6]="Renderbuffer",n[n.Sync=7]="Sync",n[n.COUNT=8]="COUNT"}(M||(M={})),function(n){n[n.COLOR_ATTACHMENT0=36064]="COLOR_ATTACHMENT0",n[n.COLOR_ATTACHMENT1=36065]="COLOR_ATTACHMENT1",n[n.COLOR_ATTACHMENT2=36066]="COLOR_ATTACHMENT2",n[n.COLOR_ATTACHMENT3=36067]="COLOR_ATTACHMENT3",n[n.COLOR_ATTACHMENT4=36068]="COLOR_ATTACHMENT4",n[n.COLOR_ATTACHMENT5=36069]="COLOR_ATTACHMENT5",n[n.COLOR_ATTACHMENT6=36070]="COLOR_ATTACHMENT6",n[n.COLOR_ATTACHMENT7=36071]="COLOR_ATTACHMENT7",n[n.COLOR_ATTACHMENT8=36072]="COLOR_ATTACHMENT8",n[n.COLOR_ATTACHMENT9=36073]="COLOR_ATTACHMENT9",n[n.COLOR_ATTACHMENT10=36074]="COLOR_ATTACHMENT10",n[n.COLOR_ATTACHMENT11=36075]="COLOR_ATTACHMENT11",n[n.COLOR_ATTACHMENT12=36076]="COLOR_ATTACHMENT12",n[n.COLOR_ATTACHMENT13=36077]="COLOR_ATTACHMENT13",n[n.COLOR_ATTACHMENT14=36078]="COLOR_ATTACHMENT14",n[n.COLOR_ATTACHMENT15=36079]="COLOR_ATTACHMENT15"}(P||(P={}));var F,B,v,d,h,H,p,g=33306;!function(n){n[n.COMPRESSED_RGB_S3TC_DXT1_EXT=33776]="COMPRESSED_RGB_S3TC_DXT1_EXT",n[n.COMPRESSED_RGBA_S3TC_DXT1_EXT=33777]="COMPRESSED_RGBA_S3TC_DXT1_EXT",n[n.COMPRESSED_RGBA_S3TC_DXT3_EXT=33778]="COMPRESSED_RGBA_S3TC_DXT3_EXT",n[n.COMPRESSED_RGBA_S3TC_DXT5_EXT=33779]="COMPRESSED_RGBA_S3TC_DXT5_EXT",n[n.COMPRESSED_R11_EAC=37488]="COMPRESSED_R11_EAC",n[n.COMPRESSED_SIGNED_R11_EAC=37489]="COMPRESSED_SIGNED_R11_EAC",n[n.COMPRESSED_RG11_EAC=37490]="COMPRESSED_RG11_EAC",n[n.COMPRESSED_SIGNED_RG11_EAC=37491]="COMPRESSED_SIGNED_RG11_EAC",n[n.COMPRESSED_RGB8_ETC2=37492]="COMPRESSED_RGB8_ETC2",n[n.COMPRESSED_SRGB8_ETC2=37493]="COMPRESSED_SRGB8_ETC2",n[n.COMPRESSED_RGB8_PUNCHTHROUGH_ALPHA1_ETC2=37494]="COMPRESSED_RGB8_PUNCHTHROUGH_ALPHA1_ETC2",n[n.COMPRESSED_SRGB8_PUNCHTHROUGH_ALPHA1_ETC2=37495]="COMPRESSED_SRGB8_PUNCHTHROUGH_ALPHA1_ETC2",n[n.COMPRESSED_RGBA8_ETC2_EAC=37496]="COMPRESSED_RGBA8_ETC2_EAC",n[n.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC=37497]="COMPRESSED_SRGB8_ALPHA8_ETC2_EAC"}(F||(F={})),function(n){n[n.FLOAT=5126]="FLOAT",n[n.FLOAT_VEC2=35664]="FLOAT_VEC2",n[n.FLOAT_VEC3=35665]="FLOAT_VEC3",n[n.FLOAT_VEC4=35666]="FLOAT_VEC4",n[n.INT=5124]="INT",n[n.INT_VEC2=35667]="INT_VEC2",n[n.INT_VEC3=35668]="INT_VEC3",n[n.INT_VEC4=35669]="INT_VEC4",n[n.BOOL=35670]="BOOL",n[n.BOOL_VEC2=35671]="BOOL_VEC2",n[n.BOOL_VEC3=35672]="BOOL_VEC3",n[n.BOOL_VEC4=35673]="BOOL_VEC4",n[n.FLOAT_MAT2=35674]="FLOAT_MAT2",n[n.FLOAT_MAT3=35675]="FLOAT_MAT3",n[n.FLOAT_MAT4=35676]="FLOAT_MAT4",n[n.SAMPLER_2D=35678]="SAMPLER_2D",n[n.SAMPLER_CUBE=35680]="SAMPLER_CUBE",n[n.UNSIGNED_INT=5125]="UNSIGNED_INT",n[n.UNSIGNED_INT_VEC2=36294]="UNSIGNED_INT_VEC2",n[n.UNSIGNED_INT_VEC3=36295]="UNSIGNED_INT_VEC3",n[n.UNSIGNED_INT_VEC4=36296]="UNSIGNED_INT_VEC4",n[n.FLOAT_MAT2x3=35685]="FLOAT_MAT2x3",n[n.FLOAT_MAT2x4=35686]="FLOAT_MAT2x4",n[n.FLOAT_MAT3x2=35687]="FLOAT_MAT3x2",n[n.FLOAT_MAT3x4=35688]="FLOAT_MAT3x4",n[n.FLOAT_MAT4x2=35689]="FLOAT_MAT4x2",n[n.FLOAT_MAT4x3=35690]="FLOAT_MAT4x3",n[n.SAMPLER_3D=35679]="SAMPLER_3D",n[n.SAMPLER_2D_SHADOW=35682]="SAMPLER_2D_SHADOW",n[n.SAMPLER_2D_ARRAY=36289]="SAMPLER_2D_ARRAY",n[n.SAMPLER_2D_ARRAY_SHADOW=36292]="SAMPLER_2D_ARRAY_SHADOW",n[n.SAMPLER_CUBE_SHADOW=36293]="SAMPLER_CUBE_SHADOW",n[n.INT_SAMPLER_2D=36298]="INT_SAMPLER_2D",n[n.INT_SAMPLER_3D=36299]="INT_SAMPLER_3D",n[n.INT_SAMPLER_CUBE=36300]="INT_SAMPLER_CUBE",n[n.INT_SAMPLER_2D_ARRAY=36303]="INT_SAMPLER_2D_ARRAY",n[n.UNSIGNED_INT_SAMPLER_2D=36306]="UNSIGNED_INT_SAMPLER_2D",n[n.UNSIGNED_INT_SAMPLER_3D=36307]="UNSIGNED_INT_SAMPLER_3D",n[n.UNSIGNED_INT_SAMPLER_CUBE=36308]="UNSIGNED_INT_SAMPLER_CUBE",n[n.UNSIGNED_INT_SAMPLER_2D_ARRAY=36311]="UNSIGNED_INT_SAMPLER_2D_ARRAY"}(B||(B={})),function(n){n[n.OBJECT_TYPE=37138]="OBJECT_TYPE",n[n.SYNC_CONDITION=37139]="SYNC_CONDITION",n[n.SYNC_STATUS=37140]="SYNC_STATUS",n[n.SYNC_FLAGS=37141]="SYNC_FLAGS"}(v||(v={})),function(n){n[n.UNSIGNALED=37144]="UNSIGNALED",n[n.SIGNALED=37145]="SIGNALED"}(d||(d={})),function(n){n[n.ALREADY_SIGNALED=37146]="ALREADY_SIGNALED",n[n.TIMEOUT_EXPIRED=37147]="TIMEOUT_EXPIRED",n[n.CONDITION_SATISFIED=37148]="CONDITION_SATISFIED",n[n.WAIT_FAILED=37149]="WAIT_FAILED"}(h||(h={})),function(n){n[n.SYNC_GPU_COMMANDS_COMPLETE=37143]="SYNC_GPU_COMMANDS_COMPLETE"}(H||(H={})),function(n){n[n.SYNC_FLUSH_COMMANDS_BIT=1]="SYNC_FLUSH_COMMANDS_BIT"}(p||(p={}))}}]);
//# sourceMappingURL=3715.0c190e56.chunk.js.map