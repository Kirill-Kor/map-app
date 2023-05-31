"use strict";(self.webpackChunkmap_app=self.webpackChunkmap_app||[]).push([[5064],{5064:function(e,t,r){r.r(t),r.d(t,{default:function(){return se}});var n=r(37762),o=r(74165),i=r(15861),s=r(1413),u=r(15671),a=r(43144),l=r(97326),p=r(11752),c=r(61120),d=r(60136),y=r(29388),f=r(27366),h=(r(59486),r(44055)),v=(r(94931),r(78451),r(98689),r(57823),r(32066),r(49018),r(34999),r(28189),r(9014),r(40464)),m=r(92026),b=r(97642),g=r(66978),_=r(35995),Z=r(49861),C=(r(25243),r(63780),r(69912)),S=r(27823),x=r(30651),k=r(10064),F=r(93169),O=r(54472),I=r(32718),E=r(31009),R=r(63543),N=r(49818),w=r(53866),j=r(80885),J="esri.layers.graphics.sources.GeoJSONSource",P=I.Z.getLogger(J),q=function(e){(0,d.Z)(r,e);var t=(0,y.Z)(r);function r(){var e;return(0,u.Z)(this,r),(e=t.apply(this,arguments)).type="geojson",e.refresh=(0,g.Ds)(function(){var t=(0,i.Z)((0,o.Z)().mark((function t(r){var n,i,s;return(0,o.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.load();case 2:return t.next=4,e._connection.invoke("refresh",r);case 4:return n=t.sent,i=n.extent,s=n.timeExtent,t.abrupt("return",(e.sourceJSON.extent=i,s&&(e.sourceJSON.timeInfo.timeExtent=[s.start,s.end]),{dataChanged:!0,updates:{extent:e.sourceJSON.extent,timeInfo:e.sourceJSON.timeInfo}}));case 8:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()),e}return(0,a.Z)(r,[{key:"load",value:function(e){var t=(0,m.pC)(e)?e.signal:null;return this.addResolvingPromise(this._startWorker(t)),Promise.resolve(this)}},{key:"destroy",value:function(){var e;null!==(e=this._connection)&&void 0!==e&&e.close(),this._connection=null}},{key:"applyEdits",value:function(e){var t=this;return this.load().then((function(){return t._applyEdits(e)}))}},{key:"openPorts",value:function(){var e=this;return this.load().then((function(){return e._connection.openPorts()}))}},{key:"queryFeatures",value:function(e){var t=this,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return this.load(r).then((function(){return t._connection.invoke("queryFeatures",e?e.toJSON():null,r)})).then((function(e){return N.Z.fromJSON(e)}))}},{key:"queryFeaturesJSON",value:function(e){var t=this,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return this.load(r).then((function(){return t._connection.invoke("queryFeatures",e?e.toJSON():null,r)}))}},{key:"queryFeatureCount",value:function(e){var t=this,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return this.load(r).then((function(){return t._connection.invoke("queryFeatureCount",e?e.toJSON():null,r)}))}},{key:"queryObjectIds",value:function(e){var t=this,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return this.load(r).then((function(){return t._connection.invoke("queryObjectIds",e?e.toJSON():null,r)}))}},{key:"queryExtent",value:function(e){var t=this,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return this.load(r).then((function(){return t._connection.invoke("queryExtent",e?e.toJSON():null,r)})).then((function(e){return{count:e.count,extent:w.Z.fromJSON(e.extent)}}))}},{key:"querySnapping",value:function(e){var t=this,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return this.load(r).then((function(){return t._connection.invoke("querySnapping",e,r)}))}},{key:"_applyEdits",value:function(e){var t=this;if(!this._connection)throw new k.Z("geojson-layer-source:edit-failure","Memory source not loaded");var r=this.layer.objectIdField,o=[],i=[],s=[];if(e.addFeatures){var u,a=(0,n.Z)(e.addFeatures);try{for(a.s();!(u=a.n()).done;){var l=u.value;o.push(this._serializeFeature(l))}}catch(v){a.e(v)}finally{a.f()}}if(e.deleteFeatures){var p,c=(0,n.Z)(e.deleteFeatures);try{for(c.s();!(p=c.n()).done;){var d=p.value;"objectId"in d&&null!=d.objectId?i.push(d.objectId):"attributes"in d&&null!=d.attributes[r]&&i.push(d.attributes[r])}}catch(v){c.e(v)}finally{c.f()}}if(e.updateFeatures){var y,f=(0,n.Z)(e.updateFeatures);try{for(f.s();!(y=f.n()).done;){var h=y.value;s.push(this._serializeFeature(h))}}catch(v){f.e(v)}finally{f.f()}}return this._connection.invoke("applyEdits",{adds:o,updates:s,deletes:i}).then((function(e){var r=e.extent,n=e.timeExtent,o=e.featureEditResults;return t.sourceJSON.extent=r,n&&(t.sourceJSON.timeInfo.timeExtent=[n.start,n.end]),t._createEditsResult(o)}))}},{key:"_createEditsResult",value:function(e){return{addFeatureResults:e.addResults?e.addResults.map(this._createFeatureEditResult,this):[],updateFeatureResults:e.updateResults?e.updateResults.map(this._createFeatureEditResult,this):[],deleteFeatureResults:e.deleteResults?e.deleteResults.map(this._createFeatureEditResult,this):[],addAttachmentResults:[],updateAttachmentResults:[],deleteAttachmentResults:[]}}},{key:"_createFeatureEditResult",value:function(e){var t=!0===e.success?null:e.error||{code:void 0,description:void 0};return{objectId:e.objectId,globalId:e.globalId,error:t?new k.Z("geojson-layer-source:edit-failure",t.description,{code:t.code}):null}}},{key:"_serializeFeature",value:function(e){var t=e.attributes,r=this._geometryForSerialization(e);return r?{geometry:r.toJSON(),attributes:t}:{attributes:t}}},{key:"_geometryForSerialization",value:function(e){var t=e.geometry;return(0,m.Wi)(t)?null:"mesh"===t.type||"extent"===t.type?j.Z.fromExtent(t.extent):t}},{key:"_startWorker",value:function(){var e=(0,i.Z)((0,o.Z)().mark((function e(t){var r,i,s,u,a,l,p,c,d,y,f,h,v,m,b;return(0,o.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,E.bA)("GeoJSONSourceWorker",{strategy:(0,F.Z)("feature-layers-workers")?"dedicated":"local",signal:t});case 2:return this._connection=e.sent,r=this.layer,i=r.fields,s=r.spatialReference,u=r.hasZ,a=r.geometryType,l=r.objectIdField,p=r.url,c=r.timeInfo,d=r.customParameters,y="defaults"===this.layer.originOf("spatialReference"),f={url:p,customParameters:d,fields:i&&i.map((function(e){return e.toJSON()})),geometryType:S.M.toJSON(a),hasZ:u,objectIdField:l,timeInfo:c?c.toJSON():null,spatialReference:y?null:s&&s.toJSON()},e.next=16,this._connection.invoke("load",f,{signal:t});case 16:h=e.sent,v=(0,n.Z)(h.warnings);try{for(v.s();!(m=v.n()).done;)b=m.value,P.warn(b.message,{layer:this.layer,warning:b})}catch(o){v.e(o)}finally{v.f()}h.featureErrors.length&&P.warn("Encountered ".concat(h.featureErrors.length," validation errors while loading features"),h.featureErrors),this.sourceJSON=h.layerDefinition,this.capabilities=(0,R.MS)(this.sourceJSON.hasZ,!0);case 20:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()}]),r}(O.Z);(0,f._)([(0,Z.Cb)()],q.prototype,"capabilities",void 0),(0,f._)([(0,Z.Cb)()],q.prototype,"type",void 0),(0,f._)([(0,Z.Cb)({constructOnly:!0})],q.prototype,"layer",void 0),(0,f._)([(0,Z.Cb)()],q.prototype,"sourceJSON",void 0),q=(0,f._)([(0,C.j)(J)],q);var T=r(6693),D=r(46671),Q=r(7632),A=r(64390),G=r(6061),M=r(94207),z=r(29598),U=r(71684),B=r(56811),H=r(99063),L=r(45948),V=r(12224),W=r(87165),$=r(83040),Y=r(25610),K=r(80031),X=r(77748),ee=r(85116),te=r(86638),re=r(81085),ne=r(78952),oe=(0,Y.v)(),ie=function(e){(0,d.Z)(f,e);var t=(0,y.Z)(f);function f(e){var r;return(0,u.Z)(this,f),(r=t.call(this,e)).copyright=null,r.definitionExpression=null,r.displayField=null,r.editingEnabled=!1,r.elevationInfo=null,r.fields=null,r.fieldsIndex=null,r.fullExtent=null,r.geometryType=null,r.hasZ=void 0,r.labelsVisible=!0,r.labelingInfo=null,r.legendEnabled=!0,r.objectIdField=null,r.operationalLayerType="GeoJSON",r.popupEnabled=!0,r.popupTemplate=null,r.screenSizePerspectiveEnabled=!0,r.source=new q({layer:(0,l.Z)(r)}),r.spatialReference=ne.Z.WGS84,r.templates=null,r.title="GeoJSON",r.type="geojson",r.typeIdField=null,r.types=null,r}return(0,a.Z)(f,[{key:"destroy",value:function(){var e;null===(e=this.source)||void 0===e||e.destroy()}},{key:"load",value:function(e){var t=this,r=this.loadFromPortal({supportedTypes:["GeoJson"],supportsData:!1},e).catch(g.r9).then((function(){return t.source.load(e)})).then((function(){t.read(t.source.sourceJSON,{origin:"service",url:t.parsedUrl}),t.revert(["objectIdField","fields","timeInfo"],"service"),(0,K.YN)(t.renderer,t.fieldsIndex),(0,K.UF)(t.timeInfo,t.fieldsIndex)}));return this.addResolvingPromise(r),Promise.resolve(this)}},{key:"capabilities",get:function(){return this.source?this.source.capabilities:null}},{key:"createQueryVersion",get:function(){return this.commitProperty("definitionExpression"),this.commitProperty("timeExtent"),this.commitProperty("timeOffset"),this.commitProperty("geometryType"),this.commitProperty("capabilities"),(this._get("createQueryVersion")||0)+1}},{key:"defaultPopupTemplate",get:function(){return this.createPopupTemplate()}},{key:"isTable",get:function(){return this.loaded&&null==this.geometryType}},{key:"parsedUrl",get:function(){return this.url?(0,_.mN)(this.url):null}},{key:"renderer",set:function(e){(0,K.YN)(e,this.fieldsIndex),this._set("renderer",e)}},{key:"url",set:function(e){if(e){var t=(0,_.mN)(e);this._set("url",t.path),t.query&&(this.customParameters=(0,s.Z)((0,s.Z)({},this.customParameters),t.query))}else this._set("url",e)}},{key:"applyEdits",value:function(){var e=(0,i.Z)((0,o.Z)().mark((function e(t,n){var i,s;return(0,o.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,r.e(10).then(r.bind(r,80010));case 2:return i=e.sent,e.next=5,this.load();case 5:return e.next=7,i.applyEdits(this,this.source,t,n);case 7:return s=e.sent,e.abrupt("return",(this.read({extent:this.source.sourceJSON.extent,timeInfo:this.source.sourceJSON.timeInfo},{origin:"service",ignoreDefaults:!0}),s));case 9:case"end":return e.stop()}}),e,this)})));return function(t,r){return e.apply(this,arguments)}}()},{key:"on",value:function(e,t){return(0,p.Z)((0,c.Z)(f.prototype),"on",this).call(this,e,t)}},{key:"createPopupTemplate",value:function(e){return(0,re.eZ)(this,e)}},{key:"createQuery",value:function(){var e=new te.Z,t=this.get("capabilities.data");e.returnGeometry=!0,t&&t.supportsZ&&(e.returnZ=!0),e.outFields=["*"],e.where=this.definitionExpression||"1=1";var r=this.timeOffset,n=this.timeExtent;return e.timeExtent=null!=r&&null!=n?n.offset(-r.value,r.unit):n||null,e}},{key:"getFieldDomain",value:function(e,t){var r,n=this,o=!1,i=t&&t.feature,s=i&&i.attributes,u=this.typeIdField&&s&&s[this.typeIdField];return null!=u&&this.types&&(o=this.types.some((function(t){return t.id==u&&((r=t.domains&&t.domains[e])&&"inherited"===r.type&&(r=n._getLayerDomain(e)),!0)}))),o||r||(r=this._getLayerDomain(e)),r}},{key:"getField",value:function(e){return this.fieldsIndex.get(e)}},{key:"queryFeatures",value:function(e,t){var r=this;return this.load().then((function(){return r.source.queryFeatures(te.Z.from(e)||r.createQuery(),t)})).then((function(e){if(null!==e&&void 0!==e&&e.features){var t,o=(0,n.Z)(e.features);try{for(o.s();!(t=o.n()).done;){var i=t.value;i.layer=i.sourceLayer=r}}catch(s){o.e(s)}finally{o.f()}}return e}))}},{key:"queryObjectIds",value:function(e,t){var r=this;return this.load().then((function(){return r.source.queryObjectIds(te.Z.from(e)||r.createQuery(),t)}))}},{key:"queryFeatureCount",value:function(e,t){var r=this;return this.load().then((function(){return r.source.queryFeatureCount(te.Z.from(e)||r.createQuery(),t)}))}},{key:"queryExtent",value:function(e,t){var r=this;return this.load().then((function(){return r.source.queryExtent(te.Z.from(e)||r.createQuery(),t)}))}},{key:"hasDataChanged",value:function(){var e=(0,i.Z)((0,o.Z)().mark((function e(){var t,r,n;return(0,o.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,this.source.refresh(this.customParameters);case 3:return t=e.sent,r=t.dataChanged,n=t.updates,e.abrupt("return",((0,m.pC)(n)&&this.read(n,{origin:"service",url:this.parsedUrl,ignoreDefaults:!0}),r));case 9:e.prev=9,e.t0=e.catch(0);case 11:return e.abrupt("return",!1);case 12:case"end":return e.stop()}}),e,this,[[0,9]])})));return function(){return e.apply(this,arguments)}}()},{key:"_getLayerDomain",value:function(e){if(!this.fields)return null;var t=null;return this.fields.some((function(r){return r.name===e&&(t=r.domain),!!t})),t}}]),f}((0,M.c)((0,D.N)((0,A.M)((0,Q.b)((0,T.h)((0,H.n)((0,B.M)((0,U.Q)((0,G.q)((0,z.I)((0,b.R)(x.Z))))))))))));(0,f._)([(0,Z.Cb)({readOnly:!0,json:{read:!1,write:!1}})],ie.prototype,"capabilities",null),(0,f._)([(0,Z.Cb)({type:String})],ie.prototype,"copyright",void 0),(0,f._)([(0,Z.Cb)({readOnly:!0})],ie.prototype,"createQueryVersion",null),(0,f._)([(0,Z.Cb)({readOnly:!0})],ie.prototype,"defaultPopupTemplate",null),(0,f._)([(0,Z.Cb)({type:String,json:{name:"layerDefinition.definitionExpression",write:{enabled:!0,allowNull:!0}}})],ie.prototype,"definitionExpression",void 0),(0,f._)([(0,Z.Cb)({type:String})],ie.prototype,"displayField",void 0),(0,f._)([(0,Z.Cb)({type:Boolean})],ie.prototype,"editingEnabled",void 0),(0,f._)([(0,Z.Cb)(L.PV)],ie.prototype,"elevationInfo",void 0),(0,f._)([(0,Z.Cb)({type:[$.Z],json:{name:"layerDefinition.fields",write:{ignoreOrigin:!0,isRequired:!0},origins:{service:{name:"fields"}}}})],ie.prototype,"fields",void 0),(0,f._)([(0,Z.Cb)(oe.fieldsIndex)],ie.prototype,"fieldsIndex",void 0),(0,f._)([(0,Z.Cb)({type:w.Z,json:{name:"extent"}})],ie.prototype,"fullExtent",void 0),(0,f._)([(0,Z.Cb)({type:["point","polygon","polyline","multipoint"],json:{read:{reader:S.M.read}}})],ie.prototype,"geometryType",void 0),(0,f._)([(0,Z.Cb)({type:Boolean})],ie.prototype,"hasZ",void 0),(0,f._)([(0,Z.Cb)(L.id)],ie.prototype,"id",void 0),(0,f._)([(0,Z.Cb)({type:Boolean,readOnly:!0})],ie.prototype,"isTable",null),(0,f._)([(0,Z.Cb)(L.iR)],ie.prototype,"labelsVisible",void 0),(0,f._)([(0,Z.Cb)({type:[X.Z],json:{name:"layerDefinition.drawingInfo.labelingInfo",read:{reader:ee.r},write:!0}})],ie.prototype,"labelingInfo",void 0),(0,f._)([(0,Z.Cb)(L.rn)],ie.prototype,"legendEnabled",void 0),(0,f._)([(0,Z.Cb)({type:["show","hide"]})],ie.prototype,"listMode",void 0),(0,f._)([(0,Z.Cb)({type:String,json:{name:"layerDefinition.objectIdField",write:{ignoreOrigin:!0,isRequired:!0},origins:{service:{name:"objectIdField"}}}})],ie.prototype,"objectIdField",void 0),(0,f._)([(0,Z.Cb)(L.Oh)],ie.prototype,"opacity",void 0),(0,f._)([(0,Z.Cb)({type:["GeoJSON"]})],ie.prototype,"operationalLayerType",void 0),(0,f._)([(0,Z.Cb)({readOnly:!0})],ie.prototype,"parsedUrl",null),(0,f._)([(0,Z.Cb)(L.C_)],ie.prototype,"popupEnabled",void 0),(0,f._)([(0,Z.Cb)({type:h.Z,json:{name:"popupInfo",write:!0}})],ie.prototype,"popupTemplate",void 0),(0,f._)([(0,Z.Cb)({types:v.A,json:{name:"layerDefinition.drawingInfo.renderer",write:!0,origins:{service:{name:"drawingInfo.renderer"},"web-scene":{types:v.o}}}})],ie.prototype,"renderer",null),(0,f._)([(0,Z.Cb)(L.YI)],ie.prototype,"screenSizePerspectiveEnabled",void 0),(0,f._)([(0,Z.Cb)({readOnly:!0})],ie.prototype,"source",void 0),(0,f._)([(0,Z.Cb)({type:ne.Z})],ie.prototype,"spatialReference",void 0),(0,f._)([(0,Z.Cb)({type:[V.Z]})],ie.prototype,"templates",void 0),(0,f._)([(0,Z.Cb)()],ie.prototype,"title",void 0),(0,f._)([(0,Z.Cb)({json:{read:!1},readOnly:!0})],ie.prototype,"type",void 0),(0,f._)([(0,Z.Cb)({type:String,readOnly:!0})],ie.prototype,"typeIdField",void 0),(0,f._)([(0,Z.Cb)({type:[W.Z]})],ie.prototype,"types",void 0),(0,f._)([(0,Z.Cb)(L.HQ)],ie.prototype,"url",null);var se=ie=(0,f._)([(0,C.j)("esri.layers.GeoJSONLayer")],ie)},60480:function(e,t,r){r.d(t,{g:function(){return n}});var n={supportsStatistics:!0,supportsPercentileStatistics:!0,supportsSpatialAggregationStatistics:!1,supportedSpatialAggregationStatistics:{envelope:!1,centroid:!1,convexHull:!1},supportsCentroid:!0,supportsCacheHint:!1,supportsDistance:!0,supportsDistinct:!0,supportsExtent:!0,supportsGeometryProperties:!1,supportsHavingClause:!0,supportsOrderBy:!0,supportsPagination:!0,supportsQuantization:!0,supportsQuantizationEditMode:!1,supportsQueryGeometry:!0,supportsResultType:!1,supportsSqlExpression:!0,supportsMaxRecordCountFactor:!1,supportsStandardizedQueriesOnly:!0,supportsTopFeaturesQuery:!1,supportsQueryByOthers:!0,supportsHistoricMoment:!1,supportsFormatPBF:!1,supportsDisjointSpatialRelationship:!0,supportsDefaultSpatialReference:!1,supportsFullTextSearch:!1,supportsCompactGeometry:!1,maxRecordCountFactor:void 0,maxRecordCount:void 0,standardMaxRecordCount:void 0,tileMaxRecordCount:void 0}},63543:function(e,t,r){r.d(t,{Dm:function(){return d},Hq:function(){return y},MS:function(){return f},bU:function(){return l}});var n=r(4942),o=r(1413),i=r(93169),s=r(84652),u=r(60480),a=r(76115);function l(e){return{renderer:{type:"simple",symbol:"esriGeometryPoint"===e||"esriGeometryMultipoint"===e?a.I4:"esriGeometryPolyline"===e?a.ET:a.lF}}}var p=/^[_$a-zA-Z][_$a-zA-Z0-9]*$/,c=1;function d(e,t){if((0,i.Z)("esri-csp-restrictions"))return function(){return(0,o.Z)((0,n.Z)({},t,null),e)};try{var r="this.".concat(t," = null;");for(var s in e)r+="this".concat(p.test(s)?".".concat(s):'["'.concat(s,'"]')," = ").concat(JSON.stringify(e[s]),";");var u=new Function("\n      return class AttributesClass$".concat(c++," {\n        constructor() {\n          ").concat(r,";\n        }\n      }\n    "))();return function(){return new u}}catch(a){return function(){return(0,o.Z)((0,n.Z)({},t,null),e)}}}function y(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return[{name:"New Feature",description:"",prototype:{attributes:(0,s.d9)(e)}}]}function f(e,t){return{analytics:{supportsCacheHint:!1},attachment:null,data:{isVersioned:!1,supportsAttachment:!1,supportsM:!1,supportsZ:e},metadata:{supportsAdvancedFieldProperties:!1},operations:{supportsCalculate:!1,supportsTruncate:!1,supportsValidateSql:!1,supportsAdd:t,supportsDelete:t,supportsEditing:t,supportsChangeTracking:!1,supportsQuery:!0,supportsQueryAnalytics:!1,supportsQueryAttachments:!1,supportsQueryTopFeatures:!1,supportsResizeAttachments:!1,supportsSync:!1,supportsUpdate:t,supportsExceedsLimitStatistics:!0},query:u.g,queryRelated:{supportsCount:!0,supportsOrderBy:!0,supportsPagination:!0,supportsCacheHint:!1},queryTopFeatures:{supportsCacheHint:!1},editing:{supportsGeometryUpdate:t,supportsGlobalId:!1,supportsReturnServiceEditsInSourceSpatialReference:!1,supportsRollbackOnFailure:!1,supportsUpdateWithoutM:!1,supportsUploadWithItemId:!1,supportsDeleteByAnonymous:!1,supportsDeleteByOthers:!1,supportsUpdateByAnonymous:!1,supportsUpdateByOthers:!1}}}}}]);
//# sourceMappingURL=5064.c279035d.chunk.js.map