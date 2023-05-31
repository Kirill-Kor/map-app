"use strict";(self.webpackChunkmap_app=self.webpackChunkmap_app||[]).push([[3558],{73558:function(i,e,t){t.r(e),t.d(e,{default:function(){return m}});var r=t(37762),n=t(74165),h=t(15861),a=t(15671),s=t(43144),u=t(60136),c=t(29388),l=t(27366),o=t(52639),p=t(40281),g=t(92026),d=t(49861),f=(t(25243),t(63780),t(69912)),v=t(95986),y=t(75391),w=t(34035),_=t(67581),Z={remove:function(){},pause:function(){},resume:function(){}},k=function(i){(0,u.Z)(t,i);var e=(0,c.Z)(t);function t(){var i;return(0,a.Z)(this,t),(i=e.apply(this,arguments))._highlightIds=new Map,i}return(0,s.Z)(t,[{key:"attach",value:function(){var i=this;this.graphicsView=new w.Z({requestUpdateCallback:function(){return i.requestUpdate()},view:this.view,graphics:this.layer.graphics,container:new y.Z(this.view.featuresTilingScheme)}),this._updateHighlight(),this.container.addChild(this.graphicsView.container),this.addAttachHandles(this.layer.on("graphic-update",this.graphicsView.graphicUpdateHandler))}},{key:"detach",value:function(){this.container.removeAllChildren(),this.graphicsView=(0,g.SC)(this.graphicsView)}},{key:"hitTest",value:function(){var i=(0,h.Z)((0,n.Z)().mark((function i(e){var t=this;return(0,n.Z)().wrap((function(i){for(;;)switch(i.prev=i.next){case 0:return i.abrupt("return",this.graphicsView?this.graphicsView.hitTest(e).map((function(i){return{type:"graphic",graphic:i,mapPoint:e,layer:t.layer}})):null);case 1:case"end":return i.stop()}}),i,this)})));return function(e){return i.apply(this,arguments)}}()},{key:"fetchPopupFeatures",value:function(){var i=(0,h.Z)((0,n.Z)().mark((function i(e){return(0,n.Z)().wrap((function(i){for(;;)switch(i.prev=i.next){case 0:return i.abrupt("return",this.graphicsView?this.graphicsView.hitTest(e).filter((function(i){return!!i.popupTemplate})):[]);case 1:case"end":return i.stop()}}),i,this)})));return function(e){return i.apply(this,arguments)}}()},{key:"queryGraphics",value:function(){return Promise.resolve(this.graphicsView.graphics)}},{key:"update",value:function(i){this.graphicsView.processUpdate(i)}},{key:"moveStart",value:function(){}},{key:"viewChange",value:function(){this.graphicsView.viewChange()}},{key:"moveEnd",value:function(){}},{key:"isUpdating",value:function(){return!this.graphicsView||this.graphicsView.updating}},{key:"highlight",value:function(i){var e,t,r=this;"number"==typeof i?t=[i]:i instanceof o.Z?t=[i.uid]:Array.isArray(i)&&i.length>0?t="number"==typeof i[0]?i:i.map((function(i){return i&&i.uid})):p.Z.isCollection(i)&&i.length>0&&(t=i.map((function(i){return i&&i.uid})).toArray());var n=null===(e=t)||void 0===e?void 0:e.filter(g.pC);return null!==n&&void 0!==n&&n.length?(this._addHighlight(n),{remove:function(){return r._removeHighlight(n)}}):Z}},{key:"_addHighlight",value:function(i){var e,t=(0,r.Z)(i);try{for(t.s();!(e=t.n()).done;){var n=e.value;if(this._highlightIds.has(n)){var h=this._highlightIds.get(n);this._highlightIds.set(n,h+1)}else this._highlightIds.set(n,1)}}catch(a){t.e(a)}finally{t.f()}this._updateHighlight()}},{key:"_removeHighlight",value:function(i){var e,t=(0,r.Z)(i);try{for(t.s();!(e=t.n()).done;){var n=e.value;if(this._highlightIds.has(n)){var h=this._highlightIds.get(n)-1;0===h?this._highlightIds.delete(n):this._highlightIds.set(n,h)}}}catch(a){t.e(a)}finally{t.f()}this._updateHighlight()}},{key:"_updateHighlight",value:function(){var i;null===(i=this.graphicsView)||void 0===i||i.setHighlight(Array.from(this._highlightIds.keys()))}}]),t}((0,v.y)(_.Z));(0,l._)([(0,d.Cb)()],k.prototype,"graphicsView",void 0);var m=k=(0,l._)([(0,f.j)("esri.views.2d.layers.GraphicsLayerView2D")],k)},75391:function(i,e,t){t.d(e,{Z:function(){return l}});var r=t(15671),n=t(43144),h=t(11752),a=t(61120),s=t(60136),u=t(29388),c=t(80613),l=function(i){(0,s.Z)(t,i);var e=(0,u.Z)(t);function t(){return(0,r.Z)(this,t),e.apply(this,arguments)}return(0,n.Z)(t,[{key:"renderChildren",value:function(i){this.attributeView.update(),this.children.some((function(i){return i.hasData}))&&(this.attributeView.bindTextures(i.context,!1),(0,h.Z)((0,a.Z)(t.prototype),"renderChildren",this).call(this,i),i.drawPhase===c.jx.MAP&&this._renderChildren(i),this.hasHighlight()&&i.drawPhase===c.jx.HIGHLIGHT&&this._renderHighlight(i),this._boundsRenderer&&this._boundsRenderer.doRender(i))}},{key:"_renderHighlight",value:function(i){var e=i.painter.effects.highlight;e.bind(i),this._renderChildren(i,e.defines),e.draw(i),e.unbind()}}]),t}(t(82022).Z)}}]);
//# sourceMappingURL=3558.81167e88.chunk.js.map