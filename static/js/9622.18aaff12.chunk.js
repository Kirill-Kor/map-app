"use strict";(self.webpackChunkmap_app=self.webpackChunkmap_app||[]).push([[9622],{69622:function(e,t,r){r.r(t),r.d(t,{default:function(){return ie}});var n=r(1413),i=r(74165),a=r(15861),o=r(97326),l=r(11752),y=r(61120),u=r(37762),s=r(15671),p=r(43144),c=r(60136),f=r(29388),d=r(27366),v=(r(59486),r(52639)),m=(r(51508),r(40281)),b=r(10064),h=r(84652),g=r(92026),S=r(97642),C=r(18202),O=r(51370),_=r(49861),k=(r(25243),r(38511)),Z=r(69912),w=r(31201),N=r(52587),x=r(65156),J=r(91340),L=r(92975),M=r(64326),T=(r(63780),r(68748)),I=r(30651),R=r(6693),E=r(56811),j=r(78983),D=r(64575),G=function(e){(0,c.Z)(r,e);var t=(0,f.Z)(r);function r(e){var n;return(0,s.Z)(this,r),(n=t.call(this,e)).elevationInfo=null,n.graphics=new j.J,n.screenSizePerspectiveEnabled=!0,n.type="graphics",n.internal=!1,n}return(0,p.Z)(r,[{key:"destroy",value:function(){this.removeAll(),this.graphics.destroy()}},{key:"add",value:function(e){return this.graphics.add(e),this}},{key:"addMany",value:function(e){return this.graphics.addMany(e),this}},{key:"removeAll",value:function(){return this.graphics.removeAll(),this}},{key:"remove",value:function(e){this.graphics.remove(e)}},{key:"removeMany",value:function(e){this.graphics.removeMany(e)}},{key:"on",value:function(e,t){return(0,l.Z)((0,y.Z)(r.prototype),"on",this).call(this,e,t)}},{key:"graphicChanged",value:function(e){this.emit("graphic-update",e)}}]),r}((0,R.h)((0,E.M)(I.Z)));(0,d._)([(0,_.Cb)({type:D.Z})],G.prototype,"elevationInfo",void 0),(0,d._)([(0,_.Cb)((0,T.z)(j.J,"graphics"))],G.prototype,"graphics",void 0),(0,d._)([(0,_.Cb)({type:["show","hide"]})],G.prototype,"listMode",void 0),(0,d._)([(0,_.Cb)()],G.prototype,"screenSizePerspectiveEnabled",void 0),(0,d._)([(0,_.Cb)({readOnly:!0})],G.prototype,"type",void 0),(0,d._)([(0,_.Cb)({constructOnly:!0})],G.prototype,"internal",void 0);var P=G=(0,d._)([(0,Z.j)("esri.layers.GraphicsLayer")],G),z=r(25820),W=r(6061),F=r(29598),B=r(83040),A=r(61459),H=r(16851),X=r(16072),q=r(58009),U=r(78952),V=r(53866);function K(e){return"markup"===e.featureCollectionType||e.layers.some((function(e){return null!=e.layerDefinition.visibilityField||!Q(e)}))}function Q(e){var t,r=e.layerDefinition,n=e.featureSet,i=null!==(t=r.geometryType)&&void 0!==t?t:n.geometryType;return re.find((function(e){var t,n,a;return i===e.geometryTypeJSON&&(null===(t=r.drawingInfo)||void 0===t||null===(n=t.renderer)||void 0===n||null===(a=n.symbol)||void 0===a?void 0:a.type)===e.identifyingSymbol.type}))}function Y(){return new V.Z({xmin:-180,ymin:-90,xmax:180,ymax:90})}var $=new B.Z({name:"OBJECTID",alias:"OBJECTID",type:"oid",nullable:!1,editable:!1}),ee=new B.Z({name:"title",alias:"Title",type:"string",nullable:!0,editable:!0}),te=function(e){(0,c.Z)(r,e);var t=(0,f.Z)(r);function r(e){var n;return(0,s.Z)(this,r),(n=t.call(this,e)).visibilityMode="inherited",n}return(0,p.Z)(r,[{key:"initialize",value:function(){var e,t=this,r=(0,u.Z)(this.graphics);try{for(r.s();!(e=r.n()).done;){e.value.sourceLayer=this.layer}}catch(n){r.e(n)}finally{r.f()}this.graphics.on("after-add",(function(e){e.item.sourceLayer=t.layer})),this.graphics.on("after-remove",(function(e){e.item.sourceLayer=null}))}},{key:"fullExtent",get:function(){var e,t=null===(e=this.layer)||void 0===e?void 0:e.spatialReference,r=this.fullBounds;return t?(0,g.Wi)(r)?(0,N.dz)(Y(),t).geometry:(0,x.HH)(r,t):null}},{key:"fullBounds",get:function(){var e,t=null===(e=this.layer)||void 0===e?void 0:e.spatialReference;if(!t)return null;var r=(0,x.cS)();return this.graphics.forEach((function(e){var n=(0,g.pC)(e.geometry)?(0,N.dz)(e.geometry,t).geometry:null;(0,g.pC)(n)&&(0,x.jn)(r,"point"===n.type?n:n.extent,r)})),(0,x.fS)(r,x.Gv)?null:r}},{key:"sublayers",get:function(){return this.graphics}}]),r}(P);(0,d._)([(0,_.Cb)({readOnly:!0})],te.prototype,"fullExtent",null),(0,d._)([(0,_.Cb)({readOnly:!0})],te.prototype,"fullBounds",null),(0,d._)([(0,_.Cb)({readOnly:!0})],te.prototype,"sublayers",null),(0,d._)([(0,_.Cb)()],te.prototype,"layer",void 0),(0,d._)([(0,_.Cb)()],te.prototype,"layerId",void 0),(0,d._)([(0,_.Cb)({readOnly:!0})],te.prototype,"visibilityMode",void 0),te=(0,d._)([(0,Z.j)("esri.layers.MapNotesLayer.MapNotesSublayer")],te);var re=[{geometryType:"polygon",geometryTypeJSON:"esriGeometryPolygon",id:"polygonLayer",layerId:0,title:"Polygons",identifyingSymbol:(new A.Z).toJSON()},{geometryType:"polyline",geometryTypeJSON:"esriGeometryPolyline",id:"polylineLayer",layerId:1,title:"Polylines",identifyingSymbol:(new H.Z).toJSON()},{geometryType:"multipoint",geometryTypeJSON:"esriGeometryMultipoint",id:"multipointLayer",layerId:2,title:"Multipoints",identifyingSymbol:(new X.Z).toJSON()},{geometryType:"point",geometryTypeJSON:"esriGeometryPoint",id:"pointLayer",layerId:3,title:"Points",identifyingSymbol:(new X.Z).toJSON()},{geometryType:"point",geometryTypeJSON:"esriGeometryPoint",id:"textLayer",layerId:4,title:"Text",identifyingSymbol:(new q.Z).toJSON()}],ne=function(e){(0,c.Z)(r,e);var t=(0,f.Z)(r);function r(e){var n;return(0,s.Z)(this,r),(n=t.call(this,e)).capabilities={operations:{supportsMapNotesEditing:!0}},n.featureCollections=null,n.featureCollectionJSON=null,n.featureCollectionType="notes",n.legendEnabled=!1,n.listMode="hide-children",n.minScale=0,n.maxScale=0,n.spatialReference=U.Z.WGS84,n.sublayers=new m.Z(re.map((function(e){return new te({id:e.id,layerId:e.layerId,title:e.title,layer:(0,o.Z)(n)})}))),n.title="Map Notes",n.type="map-notes",n.visibilityMode="inherited",n}return(0,p.Z)(r,[{key:"readCapabilities",value:function(e,t,r){return{operations:{supportsMapNotesEditing:!K(t)&&"portal-item"!==(null===r||void 0===r?void 0:r.origin)}}}},{key:"readFeatureCollections",value:function(e,t,r){if(!K(t))return null;var n=t.layers.map((function(e){var t=new M.default;return t.read(e,r),t}));return new m.Z({items:n})}},{key:"readLegacyfeatureCollectionJSON",value:function(e,t){return K(t)?(0,h.d9)(t.featureCollection):null}},{key:"fullExtent",get:function(){var e,t=this.spatialReference,r=(0,x.cS)();return(0,g.pC)(this.sublayers)?this.sublayers.forEach((function(e){var t=e.fullBounds;return(0,g.pC)(t)?(0,x.jn)(r,t,r):r}),r):null!==(e=this.featureCollectionJSON)&&void 0!==e&&e.layers.some((function(e){return e.layerDefinition.extent}))&&this.featureCollectionJSON.layers.forEach((function(e){var n=(0,N.dz)(e.layerDefinition.extent,t).geometry;(0,g.pC)(n)&&(0,x.jn)(r,n,r)})),(0,x.fS)(r,x.Gv)?(0,N.dz)(Y(),t).geometry:(0,x.HH)(r,t)}},{key:"readMinScale",value:function(e,t){var r,n=(0,u.Z)(t.layers);try{for(n.s();!(r=n.n()).done;){var i=r.value;if(null!=i.layerDefinition.minScale)return i.layerDefinition.minScale}}catch(a){n.e(a)}finally{n.f()}return 0}},{key:"readMaxScale",value:function(e,t){var r,n=(0,u.Z)(t.layers);try{for(n.s();!(r=n.n()).done;){var i=r.value;if(null!=i.layerDefinition.maxScale)return i.layerDefinition.maxScale}}catch(a){n.e(a)}finally{n.f()}return 0}},{key:"multipointLayer",get:function(){return this._findSublayer("multipointLayer")}},{key:"pointLayer",get:function(){return this._findSublayer("pointLayer")}},{key:"polygonLayer",get:function(){return this._findSublayer("polygonLayer")}},{key:"polylineLayer",get:function(){return this._findSublayer("polylineLayer")}},{key:"readSpatialReference",value:function(e,t){return t.layers.length?U.Z.fromJSON(t.layers[0].layerDefinition.spatialReference):U.Z.WGS84}},{key:"readSublayers",value:function(e,t,r){if(K(t))return null;var n,i=[],a=t.layers.reduce((function(e,t){var r;return Math.max(e,null!==(r=t.layerDefinition.id)&&void 0!==r?r:-1)}),-1)+1,o=(0,u.Z)(t.layers);try{for(o.s();!(n=o.n()).done;){var l,y=n.value,s=y.layerDefinition,p=y.featureSet,c=null!==(l=s.id)&&void 0!==l?l:a++,f=Q(y);if((0,g.pC)(f)){var d=new te({id:f.id,title:s.name,layerId:c,layer:this,graphics:p.features.map((function(e){var t=e.geometry,r=e.symbol,n=e.attributes,i=e.popupInfo;return v.Z.fromJSON({attributes:n,geometry:t,symbol:r,popupTemplate:i})}))});i.push(d)}}}catch(b){o.e(b)}finally{o.f()}return new m.Z(i)}},{key:"writeSublayers",value:function(e,t,r,n){var i,a=this,o=this.minScale,l=this.maxScale;if(!(0,g.Wi)(e)){var y=e.some((function(e){return e.graphics.length>0}));if(this.capabilities.operations.supportsMapNotesEditing){var s,p=[],c=this.spatialReference.toJSON(),f=(0,u.Z)(e);try{e:for(f.s();!(s=f.n()).done;){var d,v=s.value,m=(0,u.Z)(v.graphics);try{for(m.s();!(d=m.n()).done;){var h=d.value;if((0,g.pC)(h.geometry)){c=h.geometry.spatialReference.toJSON();break e}}}catch(k){m.e(k)}finally{m.f()}}}catch(k){f.e(k)}finally{f.f()}for(var S=function(){var t=_[O],r=e.find((function(e){return t.id===e.id}));a._writeMapNoteSublayer(p,r,t,o,l,c,n)},O=0,_=re;O<_.length;O++)S();(0,C.RB)("featureCollection.layers",p,t)}else y&&(null===n||void 0===n||null===(i=n.messages)||void 0===i||i.push(new b.Z("map-notes-layer:editing-not-supported","New map notes cannot be added to this layer")))}}},{key:"textLayer",get:function(){return this._findSublayer("textLayer")}},{key:"load",value:function(e){return this.addResolvingPromise(this.loadFromPortal({supportedTypes:["Feature Collection"]},e)),Promise.resolve(this)}},{key:"read",value:function(e,t){"featureCollection"in e&&(e=(0,h.d9)(e),Object.assign(e,e.featureCollection)),(0,l.Z)((0,y.Z)(r.prototype),"read",this).call(this,e,t)}},{key:"beforeSave",value:function(){var e=(0,a.Z)((0,i.Z)().mark((function e(){var t,r,n,a,o,l,y,s,p,c;return(0,i.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(0,g.Wi)(this.sublayers)){e.next=2;break}return e.abrupt("return");case 2:t=null,r=[],n=(0,u.Z)(this.sublayers),e.prev=5,n.s();case 7:if((a=n.n()).done){e.next=40;break}o=a.value,l=(0,u.Z)(o.graphics),e.prev=10,l.s();case 12:if((y=l.n()).done){e.next=30;break}if(s=y.value,!(0,g.pC)(s.geometry)){e.next=28;break}if(p=s.geometry,!t){e.next=26;break}if(e.t0=(0,L.fS)(p.spatialReference,t),e.t0){e.next=24;break}if(e.t1=(0,N.Up)(p.spatialReference,t)||(0,N.kR)(),e.t1){e.next=23;break}return e.next=23,(0,N.zD)();case 23:s.geometry=(0,N.iV)(p,t);case 24:e.next=27;break;case 26:t=p.spatialReference;case 27:r.push(s);case 28:e.next=12;break;case 30:e.next=35;break;case 32:e.prev=32,e.t2=e.catch(10),l.e(e.t2);case 35:return e.prev=35,l.f(),e.finish(35);case 38:e.next=7;break;case 40:e.next=45;break;case 42:e.prev=42,e.t3=e.catch(5),n.e(e.t3);case 45:return e.prev=45,n.f(),e.finish(45);case 48:return e.next=50,(0,J.aX)(r.map((function(e){return e.geometry})));case 50:c=e.sent,r.forEach((function(e,t){return e.geometry=c[t]}));case 52:case"end":return e.stop()}}),e,this,[[5,42,45,48],[10,32,35,38]])})));return function(){return e.apply(this,arguments)}}()},{key:"_findSublayer",value:function(e){var t,r;return(0,g.Wi)(this.sublayers)?null:null!==(t=null===(r=this.sublayers)||void 0===r?void 0:r.find((function(t){return t.id===e})))&&void 0!==t?t:null}},{key:"_writeMapNoteSublayer",value:function(e,t,r,n,i,a,o){var l=[];if(!(0,g.Wi)(t)){var y,s=(0,u.Z)(t.graphics);try{for(s.s();!(y=s.n()).done;){var p=y.value;this._writeMapNote(l,p,r.geometryType,o)}}catch(c){s.e(c)}finally{s.f()}this._normalizeObjectIds(l,$),e.push({layerDefinition:{name:t.title,drawingInfo:{renderer:{type:"simple",symbol:(0,h.d9)(r.identifyingSymbol)}},id:t.layerId,geometryType:r.geometryTypeJSON,minScale:n,maxScale:i,objectIdField:"OBJECTID",fields:[$.toJSON(),ee.toJSON()],spatialReference:a},featureSet:{features:l,geometryType:r.geometryTypeJSON}})}}},{key:"_writeMapNote",value:function(e,t,r,i){var a,o;if(!(0,g.Wi)(t)){var l=t.geometry,y=t.symbol,u=t.popupTemplate;if(!(0,g.Wi)(l))if(l.type===r)if((0,g.Wi)(y))null===i||void 0===i||null===(o=i.messages)||void 0===o||o.push(new O.Z("map-notes-layer:no-symbol","Skipping map notes with no symbol",{graphic:t}));else{var s={attributes:(0,n.Z)({},t.attributes),geometry:l.toJSON(),symbol:y.toJSON()};(0,g.pC)(u)&&(s.popupInfo=u.toJSON()),e.push(s)}else null===i||void 0===i||null===(a=i.messages)||void 0===a||a.push(new O.Z("map-notes-layer:invalid-geometry-type",'Geometry "'.concat(l.type,'" cannot be saved in "').concat(r,'" layer'),{graphic:t}))}}},{key:"_normalizeObjectIds",value:function(e,t){var r,n=t.name,i=(0,z.S)(n,e)+1,a=new Set,o=(0,u.Z)(e);try{for(o.s();!(r=o.n()).done;){var l=r.value;l.attributes||(l.attributes={});var y=l.attributes;(null==y[n]||a.has(y[n]))&&(y[n]=i++),a.add(y[n])}}catch(s){o.e(s)}finally{o.f()}}}]),r}((0,R.h)((0,E.M)((0,W.q)((0,F.I)((0,S.R)(I.Z))))));(0,d._)([(0,_.Cb)({readOnly:!0})],ne.prototype,"capabilities",void 0),(0,d._)([(0,k.r)(["portal-item","web-map"],"capabilities",["layers"])],ne.prototype,"readCapabilities",null),(0,d._)([(0,_.Cb)({readOnly:!0})],ne.prototype,"featureCollections",void 0),(0,d._)([(0,k.r)(["web-map","portal-item"],"featureCollections",["layers"])],ne.prototype,"readFeatureCollections",null),(0,d._)([(0,_.Cb)({readOnly:!0,json:{origins:{"web-map":{write:{enabled:!0,target:"featureCollection"}}}}})],ne.prototype,"featureCollectionJSON",void 0),(0,d._)([(0,k.r)(["web-map","portal-item"],"featureCollectionJSON",["featureCollection"])],ne.prototype,"readLegacyfeatureCollectionJSON",null),(0,d._)([(0,_.Cb)({readOnly:!0,json:{read:!0,write:{enabled:!0,ignoreOrigin:!0}}})],ne.prototype,"featureCollectionType",void 0),(0,d._)([(0,_.Cb)({readOnly:!0})],ne.prototype,"fullExtent",null),(0,d._)([(0,_.Cb)({readOnly:!0,json:{origins:{"web-map":{write:{target:"featureCollection.showLegend",overridePolicy:function(){return{enabled:null!=this.featureCollectionJSON}}}}}}})],ne.prototype,"legendEnabled",void 0),(0,d._)([(0,_.Cb)({type:["show","hide","hide-children"]})],ne.prototype,"listMode",void 0),(0,d._)([(0,_.Cb)({type:Number,nonNullable:!0,json:{write:!1}})],ne.prototype,"minScale",void 0),(0,d._)([(0,k.r)(["web-map","portal-item"],"minScale",["layers"])],ne.prototype,"readMinScale",null),(0,d._)([(0,_.Cb)({type:Number,nonNullable:!0,json:{write:!1}})],ne.prototype,"maxScale",void 0),(0,d._)([(0,k.r)(["web-map","portal-item"],"maxScale",["layers"])],ne.prototype,"readMaxScale",null),(0,d._)([(0,_.Cb)({readOnly:!0})],ne.prototype,"multipointLayer",null),(0,d._)([(0,_.Cb)({value:"ArcGISFeatureLayer",type:["ArcGISFeatureLayer"]})],ne.prototype,"operationalLayerType",void 0),(0,d._)([(0,_.Cb)({readOnly:!0})],ne.prototype,"pointLayer",null),(0,d._)([(0,_.Cb)({readOnly:!0})],ne.prototype,"polygonLayer",null),(0,d._)([(0,_.Cb)({readOnly:!0})],ne.prototype,"polylineLayer",null),(0,d._)([(0,_.Cb)({type:U.Z})],ne.prototype,"spatialReference",void 0),(0,d._)([(0,k.r)(["web-map","portal-item"],"spatialReference",["layers"])],ne.prototype,"readSpatialReference",null),(0,d._)([(0,_.Cb)({readOnly:!0,json:{origins:{"web-map":{write:{ignoreOrigin:!0}}}}})],ne.prototype,"sublayers",void 0),(0,d._)([(0,k.r)("web-map","sublayers",["layers"])],ne.prototype,"readSublayers",null),(0,d._)([(0,w.c)("web-map","sublayers")],ne.prototype,"writeSublayers",null),(0,d._)([(0,_.Cb)({readOnly:!0})],ne.prototype,"textLayer",null),(0,d._)([(0,_.Cb)()],ne.prototype,"title",void 0),(0,d._)([(0,_.Cb)({readOnly:!0,json:{read:!1}})],ne.prototype,"type",void 0);var ie=ne=(0,d._)([(0,Z.j)("esri.layers.MapNotesLayer")],ne)},25820:function(e,t,r){r.d(t,{S:function(){return a},X:function(){return i}});var n=r(37762),i=1;function a(e,t){var r,i=0,a=(0,n.Z)(t);try{for(a.s();!(r=a.n()).done;){var o,l=null===(o=r.value.attributes)||void 0===o?void 0:o[e];"number"==typeof l&&isFinite(l)&&(i=Math.max(i,l))}}catch(y){a.e(y)}finally{a.f()}return i}}}]);
//# sourceMappingURL=9622.18aaff12.chunk.js.map