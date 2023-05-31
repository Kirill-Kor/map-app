"use strict";(self.webpackChunkmap_app=self.webpackChunkmap_app||[]).push([[4e3],{14e3:function(e,t,r){r.d(t,{q:function(){return q}});var n=r(29439),i=r(1413),s=r(37762),u=r(74165),a=r(15861),c=r(43144),o=r(15671),l=r(63780),p=r(10064),f=r(84652),h=r(92026),d=r(18759),y=r(66978),x=r(68860),m=r(41414),v=r(65156),g=r(376),b=r(77981),k=r(91340),S=r(92975),_=r(83406),Z=r(33392),w=r(19995),R=r(60480),F=r(99987),Q=r(77095),I=r(20311),C=r(31904),E=r(52410),A=r(819),P=r(67080);var G="feature-store:unsupported-query",T=new d.WJ(2e6),O=0,q=function(){function e(t){var r=this;(0,o.Z)(this,e),this._geometryQueryCache=null,this._changeHandle=null,this.capabilities={query:R.g},this.geometryType=t.geometryType,this.hasM=!!t.hasM,this.hasZ=!!t.hasZ,this.objectIdField=t.objectIdField,this.spatialReference=t.spatialReference,this.definitionExpression=t.definitionExpression,this.featureStore=t.featureStore,this.aggregateAdapter=t.aggregateAdapter,this._changeHandle=this.featureStore.events.on("changed",(function(){return r.clearCache()})),this.timeInfo=t.timeInfo,t.cacheSpatialQueries&&(this._geometryQueryCache=new d.Xq(O+++"$$",T)),this.fieldsIndex=new E.Z(t.fields),t.scheduler&&t.priority&&(this._frameTask=t.scheduler.registerTask(t.priority))}return(0,c.Z)(e,[{key:"destroy",value:function(){this._frameTask=(0,h.hw)(this._frameTask),this.clearCache(),(0,h.SC)(this._geometryQueryCache),this._changeHandle=(0,h.hw)(this._changeHandle),(0,h.SC)(this.fieldsIndex)}},{key:"featureAdapter",get:function(){return this.featureStore.featureAdapter}},{key:"clearCache",value:function(){var e;null!==(e=this._geometryQueryCache)&&void 0!==e&&e.clear(),this._allFeaturesPromise=null,this._timeExtentPromise=null}},{key:"executeQuery",value:function(){var e=(0,a.Z)((0,u.Z)().mark((function e(t,r){return(0,u.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,this._executeQuery(t,{},r);case 3:return e.abrupt("return",e.sent.createQueryResponse());case 6:if(e.prev=6,e.t0=e.catch(0),e.t0===C.vF){e.next=10;break}throw e.t0;case 10:return e.abrupt("return",new F.y([],t,this).createQueryResponse());case 11:case"end":return e.stop()}}),e,this,[[0,6]])})));return function(t,r){return e.apply(this,arguments)}}()},{key:"executeQueryForCount",value:function(){var e=(0,a.Z)((0,u.Z)().mark((function e(){var t,r,n=arguments;return(0,u.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=n.length>0&&void 0!==n[0]?n[0]:{},r=n.length>1?n[1]:void 0,e.prev=2,e.next=5,this._executeQuery(t,{returnGeometry:!1,returnCentroid:!1,outSR:null},r);case 5:return e.abrupt("return",e.sent.createQueryResponseForCount());case 8:if(e.prev=8,e.t0=e.catch(2),e.t0===C.vF){e.next=12;break}throw e.t0;case 12:return e.abrupt("return",0);case 13:case"end":return e.stop()}}),e,this,[[2,8]])})));return function(){return e.apply(this,arguments)}}()},{key:"executeQueryForExtent",value:function(){var e=(0,a.Z)((0,u.Z)().mark((function e(t,r){var n,i,s;return(0,u.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.outSR,e.prev=1,e.next=4,this._executeQuery(t,{returnGeometry:!0,returnCentroid:!1,outSR:null},r);case 4:if(i=e.sent,s=i.size){e.next=8;break}return e.abrupt("return",{count:0,extent:null});case 8:return e.t0=s,e.next=11,this._getBounds(i.items,i.spatialReference,n||this.spatialReference);case 11:return e.t1=e.sent,e.abrupt("return",{count:e.t0,extent:e.t1});case 15:if(e.prev=15,e.t2=e.catch(1),e.t2!==C.vF){e.next=19;break}return e.abrupt("return",{count:0,extent:null});case 19:throw e.t2;case 20:case"end":return e.stop()}}),e,this,[[1,15]])})));return function(t,r){return e.apply(this,arguments)}}()},{key:"executeQueryForIds",value:function(){var e=(0,a.Z)((0,u.Z)().mark((function e(t,r){return(0,u.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",this.executeQueryForIdSet(t,r).then((function(e){return Array.from(e)})));case 1:case"end":return e.stop()}}),e,this)})));return function(t,r){return e.apply(this,arguments)}}()},{key:"executeQueryForIdSet",value:function(){var e=(0,a.Z)((0,u.Z)().mark((function e(t,r){var n,i,a;return(0,u.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,this._executeQuery(t,{returnGeometry:!0,returnCentroid:!1,outSR:null},r);case 3:return n=e.sent,i=n.items,a=new Set,e.next=8,this._reschedule((function(){var e,t=(0,s.Z)(i);try{for(t.s();!(e=t.n()).done;){var r=e.value;a.add(n.featureAdapter.getObjectId(r))}}catch(u){t.e(u)}finally{t.f()}}),r);case 8:return e.abrupt("return",a);case 11:if(e.prev=11,e.t0=e.catch(0),e.t0!==C.vF){e.next=15;break}return e.abrupt("return",new Set);case 15:throw e.t0;case 16:case"end":return e.stop()}}),e,this,[[0,11]])})));return function(t,r){return e.apply(this,arguments)}}()},{key:"executeQueryForSnapping",value:function(){var e=(0,a.Z)((0,u.Z)().mark((function e(t,r){var n,s,a,c,o,l,p,f,d,y,x,m,v,g,_=this;return(0,u.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n=t.point,s=t.distance,t.types!==F.r.NONE){e.next=3;break}return e.abrupt("return",{candidates:[]});case 3:return e.next=5,this._reschedule((function(){return _._checkQuerySupport(t.query)}),r);case 5:if(a=e.sent,c=!(0,S.fS)(n.spatialReference,this.spatialReference),e.t0=c,!e.t0){e.next=11;break}return e.next=11,(0,w._W)(n.spatialReference,this.spatialReference);case 11:if(o="number"==typeof s?s:s.x,l="number"==typeof s?s:s.y,p={xmin:n.x-o,xmax:n.x+o,ymin:n.y-l,ymax:n.y+l,spatialReference:n.spatialReference},f=c?(0,w.iV)(p,this.spatialReference):p){e.next=14;break}return e.abrupt("return",{candidates:[]});case 14:return e.next=16,(0,k.aX)((0,b.im)(n),null,{signal:r});case 16:return d=e.sent[0],e.next=19,(0,k.aX)((0,b.im)(f),null,{signal:r});case 19:if(y=e.sent[0],!(0,h.Wi)(d)&&!(0,h.Wi)(y)){e.next=22;break}return e.abrupt("return",{candidates:[]});case 22:return e.t1=F.y,e.next=25,this._reschedule((function(){return _._searchFeatures(_._getQueryBBoxes(y.toJSON()))}),r);case 25:return e.t2=e.sent,e.t3=a,e.t4=this,x=new e.t1(e.t2,e.t3,e.t4),e.next=31,this._reschedule((function(){return _._executeObjectIdsQuery(x)}),r);case 31:return e.next=33,this._reschedule((function(){return _._executeTimeQuery(x)}),r);case 33:return e.next=35,this._reschedule((function(){return _._executeAttributesQuery(x)}),r);case 35:return m=d.toJSON(),v=c?(0,w.iV)(m,this.spatialReference):m,g=c?Math.max(f.xmax-f.xmin,f.ymax-f.ymin)/2:s,e.abrupt("return",x.createSnappingResponse((0,i.Z)((0,i.Z)({},t),{},{point:v,distance:g}),n.spatialReference));case 37:case"end":return e.stop()}}),e,this)})));return function(t,r){return e.apply(this,arguments)}}()},{key:"executeQueryForLatestObservations",value:function(){var e=(0,a.Z)((0,u.Z)().mark((function e(t,r){var n,i=this;return(0,u.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(this.timeInfo&&this.timeInfo.trackIdField){e.next=2;break}throw new p.Z(G,"Missing timeInfo or timeInfo.trackIdField",{query:t,timeInfo:this.timeInfo});case 2:return e.prev=2,e.next=5,this._executeQuery(t,{},r);case 5:return n=e.sent,e.next=8,this._reschedule((function(){return i._filterLatest(n)}),r);case 8:return e.abrupt("return",n.createQueryResponse());case 11:if(e.prev=11,e.t0=e.catch(2),e.t0===C.vF){e.next=15;break}throw e.t0;case 15:return e.abrupt("return",new F.y([],t,this).createQueryResponse());case 16:case"end":return e.stop()}}),e,this,[[2,11]])})));return function(t,r){return e.apply(this,arguments)}}()},{key:"executeQueryForSummaryStatistics",value:function(){var e=(0,a.Z)((0,u.Z)().mark((function e(){var t,r,n,i,s,a,c=arguments;return(0,u.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=c.length>0&&void 0!==c[0]?c[0]:{},n=c.length>2?c[2]:void 0,i=(r=c.length>1?c[1]:void 0).field,s=r.normalizationField,a=r.valueExpression,e.next=6,this._getQueryEngineResultForStats(t,{field:i,normalizationField:s,valueExpression:a},n);case 6:return e.abrupt("return",e.sent.createSummaryStatisticsResponse(r));case 7:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"executeQueryForUniqueValues",value:function(){var e=(0,a.Z)((0,u.Z)().mark((function e(){var t,r,n,i,s,a,c,o=arguments;return(0,u.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=o.length>0&&void 0!==o[0]?o[0]:{},n=o.length>2?o[2]:void 0,i=(r=o.length>1?o[1]:void 0).field,s=r.field2,a=r.field3,c=r.valueExpression,e.next=6,this._getQueryEngineResultForStats(t,{field:i,field2:s,field3:a,valueExpression:c},n);case 6:return e.abrupt("return",e.sent.createUniqueValuesResponse(r));case 7:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"executeQueryForClassBreaks",value:function(){var e=(0,a.Z)((0,u.Z)().mark((function e(){var t,r,n,i,s,a,c=arguments;return(0,u.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=c.length>0&&void 0!==c[0]?c[0]:{},n=c.length>2?c[2]:void 0,i=(r=c.length>1?c[1]:void 0).field,s=r.normalizationField,a=r.valueExpression,e.next=6,this._getQueryEngineResultForStats(t,{field:i,normalizationField:s,valueExpression:a},n);case 6:return e.abrupt("return",e.sent.createClassBreaksResponse(r));case 7:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"executeQueryForHistogram",value:function(){var e=(0,a.Z)((0,u.Z)().mark((function e(){var t,r,n,i,s,a,c=arguments;return(0,u.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=c.length>0&&void 0!==c[0]?c[0]:{},n=c.length>2?c[2]:void 0,i=(r=c.length>1?c[1]:void 0).field,s=r.normalizationField,a=r.valueExpression,e.next=6,this._getQueryEngineResultForStats(t,{field:i,normalizationField:s,valueExpression:a},n);case 6:return e.abrupt("return",e.sent.createHistogramResponse(r));case 7:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"fetchRecomputedExtents",value:function(){var e=(0,a.Z)((0,u.Z)().mark((function e(t){var r,i,s,a;return(0,u.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.t0=Promise,!("getFullExtent"in this.featureStore)||!this.featureStore.getFullExtent){e.next=5;break}e.t1=Promise.resolve(this.featureStore.getFullExtent(this.spatialReference)),e.next=12;break;case 5:return e.t2=this,e.next=8,this._getAllFeatures();case 8:e.t3=e.sent,e.t4=this.spatialReference,e.t5=this.spatialReference,e.t1=e.t2._getBounds.call(e.t2,e.t3,e.t4,e.t5);case 12:return e.t6=e.t1,e.t7=(0,h.pC)(this._timeExtentPromise)?this._timeExtentPromise:this._timeExtentPromise=(0,I.R)(this.timeInfo,this.featureStore),e.t8=[e.t6,e.t7],e.next=17,e.t0.all.call(e.t0,e.t8);case 17:return r=e.sent,i=(0,n.Z)(r,2),s=i[0],a=i[1],e.abrupt("return",((0,y.k_)(t),{fullExtent:s,timeExtent:a}));case 22:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"_getBounds",value:function(){var e=(0,a.Z)((0,u.Z)().mark((function e(t,r,n){var i,s,a,c,o,l;return(0,u.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=(0,m.t8)((0,m.Ue)(),m.Gv),e.next=3,this.featureStore.forEachBounds(t,(function(e){return(0,m.TC)(i,e)}));case 3:return s={xmin:i[0],ymin:i[1],xmax:i[3],ymax:i[4],spatialReference:(0,C.S2)(this.spatialReference)},this.hasZ&&isFinite(i[2])&&isFinite(i[5])&&(s.zmin=i[2],s.zmax=i[5]),(a=(0,w.iV)(s,r,n)).spatialReference=(0,C.S2)(n),a.xmax-a.xmin==0&&(c=(0,x.c9)(a.spatialReference),a.xmin-=c,a.xmax+=c),a.ymax-a.ymin==0&&(o=(0,x.c9)(a.spatialReference),a.ymin-=o,a.ymax+=o),this.hasZ&&null!=a.zmin&&null!=a.zmax&&a.zmax-a.zmin==0&&(l=(0,x.c9)(a.spatialReference),a.zmin-=l,a.zmax+=l),e.abrupt("return",a);case 10:case"end":return e.stop()}}),e,this)})));return function(t,r,n){return e.apply(this,arguments)}}()},{key:"_schedule",value:function(){var e=(0,a.Z)((0,u.Z)().mark((function e(t,r){return(0,u.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",(0,h.pC)(this._frameTask)?this._frameTask.schedule(t,r):t(P.G5));case 1:case"end":return e.stop()}}),e,this)})));return function(t,r){return e.apply(this,arguments)}}()},{key:"_reschedule",value:function(){var e=(0,a.Z)((0,u.Z)().mark((function e(t,r){return(0,u.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",(0,h.pC)(this._frameTask)?this._frameTask.reschedule(t,r):t(P.G5));case 1:case"end":return e.stop()}}),e,this)})));return function(t,r){return e.apply(this,arguments)}}()},{key:"_getAllFeaturesQueryEngineResult",value:function(){var e=(0,a.Z)((0,u.Z)().mark((function e(t){return(0,u.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=F.y,e.next=3,this._getAllFeatures();case 3:return e.t1=e.sent,e.t2=t,e.t3=this,e.abrupt("return",new e.t0(e.t1,e.t2,e.t3));case 7:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"_getAllFeatures",value:function(){var e=(0,a.Z)((0,u.Z)().mark((function e(){var t,r,n,i=this;return(0,u.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return(0,h.Wi)(this._allFeaturesPromise)&&(t=[],this._allFeaturesPromise=(0,a.Z)((0,u.Z)().mark((function e(){return(0,u.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.featureStore.forEach((function(e){return t.push(e)}));case 2:case"end":return e.stop()}}),e)})))().then((function(){return t}))),r=this._allFeaturesPromise,e.next=4,r;case 4:return n=e.sent,e.abrupt("return",r===this._allFeaturesPromise?n.slice():this._getAllFeatures());case 6:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"_executeQuery",value:function(){var e=(0,a.Z)((0,u.Z)().mark((function e(t,r,n){var s,a,c=this;return(0,u.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=(0,f.d9)(t),e.next=3,this._schedule((function(){return(0,C.Up)(t,c.definitionExpression,c.spatialReference)}),n);case 3:return t=e.sent,e.next=6,this._reschedule((function(){return c._checkQuerySupport(t)}),n);case 6:return t=e.sent,t=(0,i.Z)((0,i.Z)({},t),r),e.next=10,this._reschedule((function(){return c._executeSceneFilterQuery(t,n)}),n);case 10:return s=e.sent,e.next=13,this._reschedule((function(){return c._executeGeometryQuery(t,s,n)}),n);case 13:return a=e.sent,e.next=16,this._reschedule((function(){return c._executeAggregateIdsQuery(a)}),n);case 16:return e.next=18,this._reschedule((function(){return c._executeObjectIdsQuery(a)}),n);case 18:return e.next=20,this._reschedule((function(){return c._executeTimeQuery(a)}),n);case 20:return e.next=22,this._reschedule((function(){return c._executeAttributesQuery(a)}),n);case 22:return e.abrupt("return",a);case 23:case"end":return e.stop()}}),e,this)})));return function(t,r,n){return e.apply(this,arguments)}}()},{key:"_executeSceneFilterQuery",value:function(){var e=(0,a.Z)((0,u.Z)().mark((function e(t,r){var n,i,c,o,l,p,f,d,y,x,m,v,g,b,k,_,Z,R,I=this;return(0,u.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(0,h.Wi)(t.sceneFilter)){e.next=2;break}return e.abrupt("return",null);case 2:if(n=t.outSR,i=t.returnGeometry,c=t.returnCentroid,o=this.featureStore.featureSpatialReference,l=t.sceneFilter.geometry,p=(0,h.Wi)(o)||(0,S.fS)(o,l.spatialReference)?l:(0,w.iV)(l,o)){e.next=5;break}return e.abrupt("return",null);case 5:return f=i||c,d=(0,S.JY)(n)&&!(0,S.fS)(this.spatialReference,n)&&f?function(){var e=(0,a.Z)((0,u.Z)().mark((function e(t){return(0,u.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",I._project(t,n));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}():function(e){return e},y=this.featureAdapter,e.next=10,this._reschedule((function(){return I._searchFeatures(I._getQueryBBoxes(p))}),r);case 10:if(x=e.sent,"disjoint"!==t.sceneFilter.spatialRelationship){e.next=24;break}if(x.length){e.next=14;break}return e.abrupt("return",null);case 14:m=new Set,v=(0,s.Z)(x);try{for(v.s();!(g=v.n()).done;)b=g.value,m.add(y.getObjectId(b))}catch(C){v.e(C)}finally{v.f()}return e.next=19,this._reschedule((function(){return I._getAllFeatures()}),r);case 19:return k=e.sent,e.next=22,this._reschedule((0,a.Z)((0,u.Z)().mark((function e(){var n,i,s;return(0,u.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,Q.cW)("esriSpatialRelDisjoint",p,I.geometryType,I.hasZ,I.hasM);case 2:return n=e.sent,i=function(e){return!m.has(y.getObjectId(e))||n(y.getGeometry(e))},e.next=6,I._runSpatialFilter(k,i,r);case 6:return s=e.sent,e.abrupt("return",new F.y(s,t,I));case 8:case"end":return e.stop()}}),e)}))),r);case 22:return _=e.sent,e.abrupt("return",d(_));case 24:if(x.length){e.next=26;break}return e.abrupt("return",new F.y([],t,this));case 26:if(!this._canExecuteSinglePass(p,t)){e.next=28;break}return e.abrupt("return",d(new F.y(x,t,this)));case 28:return e.next=30,(0,Q.cW)("esriSpatialRelContains",p,this.geometryType,this.hasZ,this.hasM);case 30:return Z=e.sent,e.next=33,this._runSpatialFilter(x,(function(e){return Z(y.getGeometry(e))}),r);case 33:return R=e.sent,e.abrupt("return",d(new F.y(R,t,this)));case 35:case"end":return e.stop()}}),e,this)})));return function(t,r){return e.apply(this,arguments)}}()},{key:"_executeGeometryQuery",value:function(){var e=(0,a.Z)((0,u.Z)().mark((function e(t,r,n){var i,c,o,p,f,d,y,x,m,v,g,b,k,_,Z,R,I,C,E,A,P,G,T,O,q,j=this;return(0,u.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(0,h.pC)(r)||0!==r.items.length){e.next=2;break}return e.abrupt("return",r);case 2:if(t=(0,h.pC)(r)?r.query:t,c=(i=t).geometry,o=i.outSR,p=i.spatialRel,f=i.returnGeometry,d=i.returnCentroid,y=this.featureStore.featureSpatialReference,x=!c||(0,h.Wi)(y)||(0,S.fS)(y,c.spatialReference)?c:(0,w.iV)(c,y),m=f||d,v=(0,S.JY)(o)&&!(0,S.fS)(this.spatialReference,o),g=this._geometryQueryCache&&(0,h.Wi)(r)?v&&m?JSON.stringify({originalFilterGeometry:c,spatialRelationship:p,outSpatialReference:o}):JSON.stringify({originalFilterGeometry:c,spatialRelationship:p}):null,b=g?this._geometryQueryCache.get(g):null,!(0,h.pC)(b)){e.next=6;break}return e.abrupt("return",new F.y(b,t,this));case 6:if(k=function(){var e=(0,a.Z)((0,u.Z)().mark((function e(t){return(0,u.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.t0=v&&m,!e.t0){e.next=4;break}return e.next=4,j._project(t,o);case 4:return g&&j._geometryQueryCache.put(g,t.items,t.items.length+1),e.abrupt("return",t);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),x){e.next=18;break}if(e.t0=k,!(0,h.pC)(r)){e.next=13;break}e.t1=r,e.next=16;break;case 13:return e.next=15,this._getAllFeaturesQueryEngineResult(t);case 15:e.t1=e.sent;case 16:return e.t2=e.t1,e.abrupt("return",(0,e.t0)(e.t2));case 18:return _=this.featureAdapter,e.next=21,this._reschedule((function(){return j._searchFeatures(j._getQueryBBoxes(c))}),n);case 21:if(Z=e.sent,"esriSpatialRelDisjoint"!==p){e.next=49;break}if(Z.length){e.next=34;break}if(e.t3=k,!(0,h.pC)(r)){e.next=29;break}e.t4=r,e.next=32;break;case 29:return e.next=31,this._getAllFeaturesQueryEngineResult(t);case 31:e.t4=e.sent;case 32:return e.t5=e.t4,e.abrupt("return",(0,e.t3)(e.t5));case 34:R=new Set,I=(0,s.Z)(Z);try{for(I.s();!(C=I.n()).done;)E=C.value,R.add(_.getObjectId(E))}catch(M){I.e(M)}finally{I.f()}if(!(0,h.pC)(r)){e.next=41;break}e.t6=r.items,e.next=44;break;case 41:return e.next=43,this._reschedule((function(){return j._getAllFeatures()}),n);case 43:e.t6=e.sent;case 44:return A=e.t6,e.next=47,this._reschedule((0,a.Z)((0,u.Z)().mark((function e(){var r,i,s;return(0,u.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,Q.cW)(p,x,j.geometryType,j.hasZ,j.hasM);case 2:return r=e.sent,i=function(e){return!R.has(_.getObjectId(e))||r(_.getGeometry(e))},e.next=6,j._runSpatialFilter(A,i,n);case 6:return s=e.sent,e.abrupt("return",new F.y(s,t,j));case 8:case"end":return e.stop()}}),e)}))),n);case 47:return P=e.sent,e.abrupt("return",k(P));case 49:if((0,h.pC)(r)&&(G=new l.SO,Z=Z.filter((function(e){return(0,l.cq)(r.items,e,r.items.length,G)>=0}))),Z.length){e.next=53;break}return T=new F.y([],t,this),e.abrupt("return",(g&&this._geometryQueryCache.put(g,T.items,1),T));case 53:if(!this._canExecuteSinglePass(x,t)){e.next=55;break}return e.abrupt("return",k(new F.y(Z,t,this)));case 55:return e.next=57,(0,Q.cW)(p,x,this.geometryType,this.hasZ,this.hasM);case 57:return O=e.sent,e.next=60,this._runSpatialFilter(Z,(function(e){return O(_.getGeometry(e))}),n);case 60:return q=e.sent,e.abrupt("return",k(new F.y(q,t,this)));case 62:case"end":return e.stop()}}),e,this)})));return function(t,r,n){return e.apply(this,arguments)}}()},{key:"_executeAggregateIdsQuery",value:function(e){if(0!==e.items.length&&e.query.aggregateIds&&e.query.aggregateIds.length&&!(0,h.Wi)(this.aggregateAdapter)){var t,r=new Set,n=(0,s.Z)(e.query.aggregateIds);try{for(n.s();!(t=n.n()).done;){var i=t.value;this.aggregateAdapter.getFeatureObjectIds(i).forEach((function(e){return r.add(e)}))}}catch(a){n.e(a)}finally{n.f()}var u=this.featureAdapter.getObjectId;e.items=e.items.filter((function(e){return r.has(u(e))}))}}},{key:"_executeObjectIdsQuery",value:function(e){if(0!==e.items.length&&e.query.objectIds&&e.query.objectIds.length){var t=new Set(e.query.objectIds),r=this.featureAdapter.getObjectId;e.items=e.items.filter((function(e){return t.has(r(e))}))}}},{key:"_executeTimeQuery",value:function(e){if(0!==e.items.length){var t=(0,I.y)(this.timeInfo,e.query.timeExtent,this.featureAdapter);(0,h.Wi)(t)||(e.items=e.items.filter(t))}}},{key:"_executeAttributesQuery",value:function(e){var t=this;if(0!==e.items.length){var r=(0,Z.Jc)(e.query.where,this.fieldsIndex);if(r){if(!r.isStandardized)throw new TypeError("Where clause is not standardized");e.items=e.items.filter((function(e){return r.testFeature(e,t.featureAdapter)}))}}}},{key:"_runSpatialFilter",value:function(){var e=(0,a.Z)((0,u.Z)().mark((function e(t,r,n){var i,s,c,o=this;return(0,u.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r){e.next=2;break}return e.abrupt("return",t);case 2:if(!(0,h.Wi)(this._frameTask)){e.next=4;break}return e.abrupt("return",t.filter((function(e){return r(e)})));case 4:return i=0,s=new Array,c=function(){var e=(0,a.Z)((0,u.Z)().mark((function e(a){var l;return(0,u.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(i<t.length)){e.next=9;break}if(l=t[i++],r(l)&&(s.push(l),a.madeProgress()),e.t0=a.done,!e.t0){e.next=7;break}return e.next=7,o._reschedule((function(e){return c(e)}),n);case 7:e.next=0;break;case 9:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),e.abrupt("return",this._reschedule((function(e){return c(e)}),n).then((function(){return s})));case 7:case"end":return e.stop()}}),e,this)})));return function(t,r,n){return e.apply(this,arguments)}}()},{key:"_filterLatest",value:function(e){var t,r=this.timeInfo,n=r.trackIdField,i=r.startTimeField,u=r.endTimeField||i,a=new Map,c=this.featureAdapter.getAttribute,o=(0,s.Z)(e.items);try{for(o.s();!(t=o.n()).done;){var l=t.value,p=c(l,n),f=c(l,u),h=a.get(p);(!h||f>c(h,u))&&a.set(p,l)}}catch(d){o.e(d)}finally{o.f()}e.items=Array.from(a.values())}},{key:"_canExecuteSinglePass",value:function(e,t){var r=t.spatialRel;return(0,Q.hN)(e)&&("esriSpatialRelEnvelopeIntersects"===r||"esriGeometryPoint"===this.geometryType&&("esriSpatialRelIntersects"===r||"esriSpatialRelContains"===r||"esriSpatialRelWithin"===r))}},{key:"_project",value:function(){var e=(0,a.Z)((0,u.Z)().mark((function e(t,r){var n,i,s=this;return(0,u.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r&&!(0,S.fS)(this.spatialReference,r)){e.next=2;break}return e.abrupt("return",t);case 2:return n=this.featureAdapter,e.next=5,(0,w.oj)(t.items.map((function(e){return(0,C.Op)(s.geometryType,s.hasZ,s.hasM,n.getGeometry(e))})),this.spatialReference,r);case 5:return i=e.sent,e.abrupt("return",(t.items=i.map((function(e,r){return n.cloneWithGeometry(t.items[r],(0,_.GH)(e,s.hasZ,s.hasM))})),t));case 7:case"end":return e.stop()}}),e,this)})));return function(t,r){return e.apply(this,arguments)}}()},{key:"_getQueryBBoxes",value:function(e){if((0,Q.hN)(e)){if((0,b.YX)(e))return[(0,v.al)(e.xmin,e.ymin,e.xmax,e.ymax)];if((0,b.oU)(e))return e.rings.map((function(e){return(0,v.al)(Math.min(e[0][0],e[2][0]),Math.min(e[0][1],e[2][1]),Math.max(e[0][0],e[2][0]),Math.max(e[0][1],e[2][1]))}))}return[(0,g.$P)((0,v.Ue)(),e)]}},{key:"_searchFeatures",value:function(){var e=(0,a.Z)((0,u.Z)().mark((function e(t){var r,n,i=this;return(0,u.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=new Set,e.next=3,Promise.all(t.map((function(e){return i.featureStore.forEachInBounds(e,(function(e){return r.add(e)}))})));case 3:return n=Array.from(r.values()),e.abrupt("return",(r.clear(),n));case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},{key:"_checkStatisticsSupport",value:function(){var e=(0,a.Z)((0,u.Z)().mark((function e(t,r){var n;return(0,u.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!((null!==(n=t.distance)&&void 0!==n?n:0)<0||null!=t.geometryPrecision||t.multipatchOption||t.pixelSize||t.relationParam||t.text||t.outStatistics||t.groupByFieldsForStatistics||t.having||t.orderByFields)){e.next=2;break}throw new p.Z(G,"Unsupported query options",{query:t});case 2:return e.abrupt("return",(this._checkAttributesQuerySupport(t),Promise.all([this._checkStatisticsParamsSupport(r),(0,Q.P0)(t,this.geometryType,this.spatialReference),(0,w._W)(this.spatialReference,t.outSR)]).then((function(){return t}))));case 3:case"end":return e.stop()}}),e,this)})));return function(t,r){return e.apply(this,arguments)}}()},{key:"_checkStatisticsParamsSupport",value:function(){var e=(0,a.Z)((0,u.Z)().mark((function e(t){var r,n,i;return(0,u.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r=[],!t.valueExpression){e.next=7;break}return e.next=4,(0,A.LC)();case 4:n=e.sent,i=n.arcadeUtils,r=i.extractFieldNames(t.valueExpression);case 7:if(t.field&&r.push(t.field),t.field2&&r.push(t.field2),t.field3&&r.push(t.field3),t.normalizationField&&r.push(t.normalizationField),r.length){e.next=9;break}throw new p.Z(G,"params should have at least a field or valueExpression",{params:t});case 9:(0,Z.Of)(this.fieldsIndex,r,"params contains missing fields");case 10:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"_checkQuerySupport",value:function(){var e=(0,a.Z)((0,u.Z)().mark((function e(t){var r;return(0,u.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!((null!==(r=t.distance)&&void 0!==r?r:0)<0||null!=t.geometryPrecision||t.multipatchOption||t.pixelSize||t.relationParam||t.text)){e.next=2;break}throw new p.Z(G,"Unsupported query options",{query:t});case 2:return e.abrupt("return",(this._checkAttributesQuerySupport(t),this._checkStatisticsQuerySupport(t),Promise.all([(0,Q.P0)(t,this.geometryType,this.spatialReference),(0,w._W)(this.spatialReference,t.outSR)]).then((function(){return t}))));case 3:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"_checkAttributesQuerySupport",value:function(e){var t=e.outFields,r=e.orderByFields,n=e.returnDistinctValues,i=e.outStatistics,s=i?i.map((function(e){return e.outStatisticFieldName&&e.outStatisticFieldName.toLowerCase()})).filter(Boolean):[];if(r&&r.length>0){var u=" asc",a=" desc",c=r.map((function(e){var t=e.toLowerCase();return t.includes(u)?t.split(u)[0]:t.includes(a)?t.split(a)[0]:e})).filter((function(e){return!s.includes(e)}));(0,Z.Of)(this.fieldsIndex,c,"orderByFields contains missing fields")}if(t&&t.length>0)(0,Z.Of)(this.fieldsIndex,t,"outFields contains missing fields");else if(n)throw new p.Z(G,"outFields should be specified for returnDistinctValues",{query:e});(0,Z.hO)(this.fieldsIndex,e.where)}},{key:"_checkStatisticsQuerySupport",value:function(e){var t=e.outStatistics,r=e.groupByFieldsForStatistics,n=e.having,i=r&&r.length,u=t&&t.length;if(n){if(!i||!u)throw new p.Z(G,"outStatistics and groupByFieldsForStatistics should be specified with having",{query:e});(0,Z.z4)(this.fieldsIndex,n,t)}if(u){if(!function(e){return null!=e&&e.every((function(e){return"exceedslimit"!==e.statisticType}))}(t))return;var a=t.map((function(e){return e.onStatisticField})).filter(Boolean);(0,Z.Of)(this.fieldsIndex,a,"onStatisticFields contains missing fields"),i&&(0,Z.Of)(this.fieldsIndex,r,"groupByFieldsForStatistics contains missing fields");var c,o=(0,s.Z)(t);try{for(o.s();!(c=o.n()).done;){var l=c.value,f=l.onStatisticField,h=l.statisticType;if("percentile_disc"!==h&&"percentile_cont"!==h||!("statisticParameters"in l)){if("count"!==h&&f&&(0,Z.G3)(f,this.fieldsIndex))throw new p.Z(G,"outStatistics contains non-numeric fields",{definition:l,query:e})}else if(!l.statisticParameters)throw new p.Z(G,"statisticParamters should be set for percentile type",{definition:l,query:e})}}catch(d){o.e(d)}finally{o.f()}}}},{key:"_getQueryEngineResultForStats",value:function(){var e=(0,a.Z)((0,u.Z)().mark((function e(t,r,n){var i,s,a=this;return(0,u.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=(0,f.d9)(t),e.prev=1,e.next=4,this._schedule((function(){return(0,C.Up)(t,a.definitionExpression,a.spatialReference)}),n);case 4:return t=e.sent,e.next=7,this._reschedule((function(){return a._checkStatisticsSupport(t,r)}),n);case 7:return t=e.sent,e.next=10,this._reschedule((function(){return a._executeSceneFilterQuery(t,n)}),n);case 10:return i=e.sent,e.next=13,this._reschedule((function(){return a._executeGeometryQuery(t,i,n)}),n);case 13:return s=e.sent,e.next=16,this._reschedule((function(){return a._executeAggregateIdsQuery(s)}),n);case 16:return e.next=18,this._reschedule((function(){return a._executeObjectIdsQuery(s)}),n);case 18:return e.next=20,this._reschedule((function(){return a._executeTimeQuery(s)}),n);case 20:return e.next=22,this._reschedule((function(){return a._executeAttributesQuery(s)}),n);case 22:return e.abrupt("return",s);case 25:if(e.prev=25,e.t0=e.catch(1),e.t0===C.vF){e.next=29;break}throw e.t0;case 29:return e.abrupt("return",new F.y([],t,this));case 30:case"end":return e.stop()}}),e,this,[[1,25]])})));return function(t,r,n){return e.apply(this,arguments)}}()}]),e}()},60480:function(e,t,r){r.d(t,{g:function(){return n}});var n={supportsStatistics:!0,supportsPercentileStatistics:!0,supportsSpatialAggregationStatistics:!1,supportedSpatialAggregationStatistics:{envelope:!1,centroid:!1,convexHull:!1},supportsCentroid:!0,supportsCacheHint:!1,supportsDistance:!0,supportsDistinct:!0,supportsExtent:!0,supportsGeometryProperties:!1,supportsHavingClause:!0,supportsOrderBy:!0,supportsPagination:!0,supportsQuantization:!0,supportsQuantizationEditMode:!1,supportsQueryGeometry:!0,supportsResultType:!1,supportsSqlExpression:!0,supportsMaxRecordCountFactor:!1,supportsStandardizedQueriesOnly:!0,supportsTopFeaturesQuery:!1,supportsQueryByOthers:!0,supportsHistoricMoment:!1,supportsFormatPBF:!1,supportsDisjointSpatialRelationship:!0,supportsDefaultSpatialReference:!1,supportsFullTextSearch:!1,supportsCompactGeometry:!1,maxRecordCountFactor:void 0,maxRecordCount:void 0,standardMaxRecordCount:void 0,tileMaxRecordCount:void 0}},77095:function(e,t,r){r.d(t,{hN:function(){return Q},P0:function(){return R},cW:function(){return w}});var n=r(74165),i=r(37762),s=r(15861),u=r(10064),a=r(34066),c=r(66504);var o=r(77981),l=r(92975);function p(e,t){return e?t?4:3:t?3:2}function f(e,t,r,n,i,s){var u=p(i,s),a=n.coords,c=n.lengths;if(!c)return!1;for(var o=0,l=0;o<c.length;o++,l+=u)if(!h(e,t,r,a[l],a[l+1]))return!1;return!0}function h(e,t,r,n,s){if(!e)return!1;var u,a=p(t,r),c=e.coords,o=e.lengths,l=!1,f=0,h=(0,i.Z)(o);try{for(h.s();!(u=h.n()).done;){var y=u.value;l=d(l,c,a,f,y,n,s),f+=y*a}}catch(x){h.e(x)}finally{h.f()}return l}function d(e,t,r,n,i,s,u){for(var a=e,c=n,o=n,l=n+i*r;o<l;o+=r){(c=o+r)===l&&(c=n);var p=t[o],f=t[o+1],h=t[c],d=t[c+1];(f<u&&d>=u||d<u&&f>=u)&&p+(u-f)/(d-f)*(h-p)<s&&(a=!a)}return a}var y=r(83406),x=r(80457),m=r(19995),v=r(31904),g="feature-store:unsupported-query",b={esriSpatialRelIntersects:"intersects",esriSpatialRelContains:"contains",esriSpatialRelCrosses:"crosses",esriSpatialRelDisjoint:"disjoint",esriSpatialRelEnvelopeIntersects:"intersects",esriSpatialRelIndexIntersects:null,esriSpatialRelOverlaps:"overlaps",esriSpatialRelTouches:"touches",esriSpatialRelWithin:"within",esriSpatialRelRelation:null},k={spatialRelationship:{esriSpatialRelIntersects:!0,esriSpatialRelContains:!0,esriSpatialRelWithin:!0,esriSpatialRelCrosses:!0,esriSpatialRelDisjoint:!0,esriSpatialRelTouches:!0,esriSpatialRelOverlaps:!0,esriSpatialRelEnvelopeIntersects:!0,esriSpatialRelIndexIntersects:!1,esriSpatialRelRelation:!1},queryGeometry:{esriGeometryPoint:!0,esriGeometryMultipoint:!0,esriGeometryPolyline:!0,esriGeometryPolygon:!0,esriGeometryEnvelope:!0},layerGeometry:{esriGeometryPoint:!0,esriGeometryMultipoint:!0,esriGeometryPolyline:!0,esriGeometryPolygon:!0,esriGeometryEnvelope:!1}};function S(e){return null!=e&&!0===k.spatialRelationship[e]}function _(e){return null!=e&&!0===k.queryGeometry[(0,o.Ji)(e)]}function Z(e){return null!=e&&!0===k.layerGeometry[e]}function w(e,t,n,i,s){if((0,o.oU)(t)&&"esriGeometryPoint"===n&&("esriSpatialRelIntersects"===e||"esriSpatialRelContains"===e)){var u=(0,y.Uy)(new x.Z,t,!1,!1);return Promise.resolve((function(e){return function(e,t,r,n){return h(e,t,r,n.coords[0],n.coords[1])}(u,!1,!1,e)}))}if((0,o.oU)(t)&&"esriGeometryMultipoint"===n){var l=(0,y.Uy)(new x.Z,t,!1,!1);if("esriSpatialRelContains"===e)return Promise.resolve((function(e){return f(l,!1,!1,e,i,s)}))}if((0,o.YX)(t)&&"esriGeometryPoint"===n&&("esriSpatialRelIntersects"===e||"esriSpatialRelContains"===e))return Promise.resolve((function(e){return(0,a.aV)(t,(0,v.Op)(n,i,s,e))}));if((0,o.YX)(t)&&"esriGeometryMultipoint"===n&&"esriSpatialRelContains"===e)return Promise.resolve((function(e){return(0,a.lQ)(t,(0,v.Op)(n,i,s,e))}));if((0,o.YX)(t)&&"esriSpatialRelIntersects"===e){var p=function(e){return"mesh"===e?c.h_:(0,c.IY)(e)}(n);return Promise.resolve((function(e){return p(t,(0,v.Op)(n,i,s,e))}))}return Promise.all([r.e(9058),r.e(3645)]).then(r.bind(r,50309)).then((function(r){var u=r[b[e]].bind(null,t.spatialReference,t);return function(e){return u((0,v.Op)(n,i,s,e))}}))}function R(e,t,r){return F.apply(this,arguments)}function F(){return F=(0,s.Z)((0,n.Z)().mark((function e(t,r,i){var s,a;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(s=t.spatialRel,!(a=t.geometry)){e.next=11;break}if(S(s)){e.next=4;break}throw new u.Z(g,"Unsupported query spatial relationship",{query:t});case 4:if(!(0,l.JY)(a.spatialReference)||!(0,l.JY)(i)){e.next=11;break}if(_(a)){e.next=7;break}throw new u.Z(g,"Unsupported query geometry type",{query:t});case 7:if(Z(r)){e.next=9;break}throw new u.Z(g,"Unsupported layer geometry type",{query:t});case 9:if(!t.outSR){e.next=11;break}return e.abrupt("return",(0,m._W)(t.geometry&&t.geometry.spatialReference,t.outSR));case 11:case"end":return e.stop()}}),e)}))),F.apply(this,arguments)}function Q(e){if((0,o.YX)(e))return!0;if((0,o.oU)(e)){var t,r=(0,i.Z)(e.rings);try{for(r.s();!(t=r.n()).done;){var n=t.value;if(5!==n.length)return!1;if(n[0][0]!==n[1][0]||n[0][0]!==n[4][0]||n[2][0]!==n[3][0]||n[0][1]!==n[3][1]||n[0][1]!==n[4][1]||n[1][1]!==n[2][1])return!1}}catch(s){r.e(s)}finally{r.f()}return!0}return!1}},20311:function(e,t,r){r.d(t,{R:function(){return s},y:function(){return a}});var n=r(74165),i=r(15861);function s(e,t){return u.apply(this,arguments)}function u(){return u=(0,i.Z)((0,n.Z)().mark((function e(t,r){var i,s,u,a,c,o;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t){e.next=2;break}return e.abrupt("return",null);case 2:if(i=r.featureAdapter,s=t.startTimeField,u=t.endTimeField,a=Number.POSITIVE_INFINITY,c=Number.NEGATIVE_INFINITY,!s||!u){e.next=9;break}return e.next=7,r.forEach((function(e){var t=i.getAttribute(e,s),r=i.getAttribute(e,u);null==t||isNaN(t)||(a=Math.min(a,t)),null==r||isNaN(r)||(c=Math.max(c,r))}));case 7:e.next=12;break;case 9:return o=s||u,e.next=12,r.forEach((function(e){var t=i.getAttribute(e,o);null==t||isNaN(t)||(a=Math.min(a,t),c=Math.max(c,t))}));case 12:return e.abrupt("return",{start:a,end:c});case 13:case"end":return e.stop()}}),e)}))),u.apply(this,arguments)}function a(e,t,r){if(!t||!e)return null;var n=e.startTimeField,i=e.endTimeField;if(!n&&!i)return null;var s=t.start,u=t.end;return null===s&&null===u?null:void 0===s&&void 0===u?function(){return!1}:n&&i?function(e,t,r,n,i){return null!=n&&null!=i?function(s){var u=e.getAttribute(s,t),a=e.getAttribute(s,r);return(null==u||u<=i)&&(null==a||a>=n)}:null!=n?function(t){var i=e.getAttribute(t,r);return null==i||i>=n}:null!=i?function(r){var n=e.getAttribute(r,t);return null==n||n<=i}:void 0}(r,n,i,s,u):function(e,t,r,n){return null!=r&&null!=n&&r===n?function(n){return e.getAttribute(n,t)===r}:null!=r&&null!=n?function(i){var s=e.getAttribute(i,t);return s>=r&&s<=n}:null!=r?function(n){return e.getAttribute(n,t)>=r}:null!=n?function(r){return e.getAttribute(r,t)<=n}:void 0}(r,n||i,s,u)}}}]);
//# sourceMappingURL=4000.f61a213f.chunk.js.map