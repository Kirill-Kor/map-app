"use strict";(self.webpackChunkmap_app=self.webpackChunkmap_app||[]).push([[3684],{53684:function(e,n,r){r.r(n),r.d(n,{default:function(){return V}});var t=r(74165),i=r(37762),a=r(15861),o=r(15671),l=r(43144),s=r(60136),u=r(29388),p=r(27366),h=r(44055),c=r(40281),y=r(94172),f=(r(32718),r(25243),r(63780),r(10064),r(93169),r(69912)),d=r(34999),v=r(9014),g=r(49818),w=r(95986),m=r(75391),Z=r(34035),b=r(67581),_=function(e){(0,s.Z)(r,e);var n=(0,u.Z)(r);function r(){var e;return(0,o.Z)(this,r),(e=n.apply(this,arguments))._graphicsViewMap={},e._popupTemplates=new Map,e.graphicsViews=[],e}return(0,l.Z)(r,[{key:"hitTest",value:function(){var e=(0,a.Z)((0,t.Z)().mark((function e(n,r){var a,o=this;return(0,t.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(this.graphicsViews.length){e.next=2;break}return e.abrupt("return",null);case 2:return a=this.layer,e.abrupt("return",this.graphicsViews.reverse().map((function(e){var r,t=o._popupTemplates.get(e),l=e.hitTest(n),s=(0,i.Z)(l);try{for(s.s();!(r=s.n()).done;){var u=r.value;u.layer=a,u.sourceLayer=a,u.popupTemplate=t}}catch(p){s.e(p)}finally{s.f()}return l})).flat().map((function(e){return{type:"graphic",graphic:e,layer:a,mapPoint:n}})));case 4:case"end":return e.stop()}}),e,this)})));return function(n,r){return e.apply(this,arguments)}}()},{key:"update",value:function(e){if(this.graphicsViews){var n,r=(0,i.Z)(this.graphicsViews);try{for(r.s();!(n=r.n()).done;){n.value.processUpdate(e)}}catch(t){r.e(t)}finally{r.f()}}}},{key:"attach",value:function(){var e=this;this.addAttachHandles([(0,y.YP)((function(){var n;return null===(n=e.layer)||void 0===n?void 0:n.featureCollections}),(function(n){e._clear();var r,t=(0,i.Z)(n);try{for(t.s();!(r=t.n()).done;){var a=r.value,o=a.popupInfo,l=a.featureSet,s=a.layerDefinition,u=g.Z.fromJSON(l),p=new c.Z(u.features),y=s.drawingInfo,f=o?h.Z.fromJSON(o):null,d=(0,v.i)(y.renderer),w=new Z.Z({requestUpdateCallback:function(){return e.requestUpdate()},view:e.view,graphics:p,renderer:d,container:new m.Z(e.view.featuresTilingScheme)});e._graphicsViewMap[u.geometryType]=w,e._popupTemplates.set(w,f),"polygon"!==u.geometryType||e.layer.polygonSymbol?"polyline"!==u.geometryType||e.layer.lineSymbol?"point"!==u.geometryType||e.layer.pointSymbol||(e.layer.pointSymbol=d.symbol):e.layer.lineSymbol=d.symbol:e.layer.polygonSymbol=d.symbol,e.graphicsViews.push(w),e.container.addChild(w.container)}}catch(b){t.e(b)}finally{t.f()}}),y.nn),(0,y.YP)((function(){var n;return null===(n=e.layer)||void 0===n?void 0:n.polygonSymbol}),(function(n){e._graphicsViewMap.polygon.renderer=new d.Z({symbol:n})}),y.nn),(0,y.YP)((function(){var n;return null===(n=e.layer)||void 0===n?void 0:n.lineSymbol}),(function(n){e._graphicsViewMap.polyline.renderer=new d.Z({symbol:n})}),y.nn),(0,y.YP)((function(){var n;return null===(n=e.layer)||void 0===n?void 0:n.pointSymbol}),(function(n){e._graphicsViewMap.point.renderer=new d.Z({symbol:n})}),y.nn)])}},{key:"detach",value:function(){this._clear()}},{key:"moveStart",value:function(){}},{key:"moveEnd",value:function(){}},{key:"viewChange",value:function(){var e,n=(0,i.Z)(this.graphicsViews);try{for(n.s();!(e=n.n()).done;){e.value.viewChange()}}catch(r){n.e(r)}finally{n.f()}}},{key:"_clear",value:function(){this.container.removeAllChildren();var e,n=(0,i.Z)(this.graphicsViews);try{for(n.s();!(e=n.n()).done;){e.value.destroy()}}catch(r){n.e(r)}finally{n.f()}this._graphicsViewMap={},this._popupTemplates.clear(),this.graphicsViews.length=0}}]),r}((0,w.y)(b.Z)),V=_=(0,p._)([(0,f.j)("esri.views.2d.layers.GeoRSSLayerView2D")],_)},75391:function(e,n,r){r.d(n,{Z:function(){return p}});var t=r(15671),i=r(43144),a=r(11752),o=r(61120),l=r(60136),s=r(29388),u=r(80613),p=function(e){(0,l.Z)(r,e);var n=(0,s.Z)(r);function r(){return(0,t.Z)(this,r),n.apply(this,arguments)}return(0,i.Z)(r,[{key:"renderChildren",value:function(e){this.attributeView.update(),this.children.some((function(e){return e.hasData}))&&(this.attributeView.bindTextures(e.context,!1),(0,a.Z)((0,o.Z)(r.prototype),"renderChildren",this).call(this,e),e.drawPhase===u.jx.MAP&&this._renderChildren(e),this.hasHighlight()&&e.drawPhase===u.jx.HIGHLIGHT&&this._renderHighlight(e),this._boundsRenderer&&this._boundsRenderer.doRender(e))}},{key:"_renderHighlight",value:function(e){var n=e.painter.effects.highlight;n.bind(e),this._renderChildren(e,n.defines),n.draw(e),n.unbind()}}]),r}(r(82022).Z)}}]);
//# sourceMappingURL=3684.c5904676.chunk.js.map