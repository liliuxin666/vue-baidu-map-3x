import{n as z,z as B}from"../app.ea622ec2.js";var A={exports:{}};(function(y,x){(function(m,u){y.exports=u()})(z,function(){function m(o,l,g){var t,e,a=o.prototype,n=new Function;n.prototype=l.prototype,e=o.prototype=new n;for(t in a)e[t]=a[t];o.prototype.constructor=o,o.superClass=l.prototype,typeof g=="string"&&(e._className=g)}var u=function(){var o=function(e){var a={data:[],heatmap:e};this.max=1,this.get=function(n){return a[n]},this.set=function(n,i){a[n]=i}};o.prototype={addDataPoint:function(t,e){if(!(t<0||e<0)){var a=this,n=a.get("heatmap"),i=a.get("data");if(i[t]||(i[t]=[]),i[t][e]||(i[t][e]=0),i[t][e]+=arguments.length<3?1:arguments[2],a.set("data",i),a.max<i[t][e]){n.get("actx").clearRect(0,0,n.get("width"),n.get("height")),a.setDataSet({max:i[t][e],data:i},!0);return}n.drawAlpha(t,e,i[t][e],!0)}},setDataSet:function(t,e){var a=this,n=a.get("heatmap"),i=[],s=t.data,r=s.length;if(n.clear(),this.max=t.max,n.get("legend")&&n.get("legend").update(t.max),e!=null&&e){for(var d in s)if(d!==void 0)for(var h in s[d])h!==void 0&&n.drawAlpha(d,h,s[d][h],!1)}else for(;r--;){var p=s[r];n.drawAlpha(p.x,p.y,p.count,!1),i[p.x]||(i[p.x]=[]),i[p.x][p.y]||(i[p.x][p.y]=0),i[p.x][p.y]=p.count}n.colorize(),this.set("data",s)},exportDataSet:function(){var t=this,e=t.get("data"),a=[];for(var n in e)if(n!==void 0)for(var i in e[n])i!==void 0&&a.push({x:parseInt(n,10),y:parseInt(i,10),count:e[n][i]});return{max:t.max,data:a}},generateRandomDataSet:function(t){var e=this.get("heatmap"),a=e.get("width"),n=e.get("height"),i={},s=Math.floor(Math.random()*1e3+1);i.max=s;for(var r=[];t--;)r.push({x:Math.floor(Math.random()*a+1),y:Math.floor(Math.random()*n+1),count:Math.floor(Math.random()*s+1)});i.data=r,this.setDataSet(i)}};var l=function(e){this.config=e;var a={element:null,labelsEl:null,gradientCfg:null,ctx:null};this.get=function(n){return a[n]},this.set=function(n,i){a[n]=i},this.init()};l.prototype={init:function(){var t=this,e=t.config,a=e.title||"Legend",n=e.position,i=e.offset||10;e.gradient;var s=document.createElement("ul"),r,d,h="";t.processGradientObject(),n.indexOf("t")>-1?h+="top:"+i+"px;":h+="bottom:"+i+"px;",n.indexOf("l")>-1?h+="left:"+i+"px;":h+="right:"+i+"px;",r=document.createElement("div"),r.style.cssText="border-radius:5px;position:absolute;"+h+"font-family:Helvetica; width:256px;z-index:10000000000; background:rgba(255,255,255,1);padding:10px;border:1px solid black;margin:0;",r.innerHTML="<h3 style='padding:0;margin:0;text-align:center;font-size:16px;'>"+a+"</h3>",s.style.cssText="position:relative;font-size:12px;display:block;list-style:none;list-style-type:none;margin:0;height:15px;",d=document.createElement("div"),d.style.cssText=["position:relative;display:block;width:256px;height:15px;border-bottom:1px solid black; background-image:url(",t.createGradientImage(),");"].join(""),r.appendChild(s),r.appendChild(d),t.set("element",r),t.set("labelsEl",s),t.update(1)},processGradientObject:function(){var t=this,e=this.config.gradient,a=[];for(var n in e)e.hasOwnProperty(n)&&a.push({stop:n,value:e[n]});a.sort(function(i,s){return i.stop-s.stop}),a.unshift({stop:0,value:"rgba(0,0,0,0)"}),t.set("gradientArr",a)},createGradientImage:function(){var t=this,e=t.get("gradientArr"),a=e.length,n=document.createElement("canvas"),i=n.getContext("2d"),s;n.width="256",n.height="15",s=i.createLinearGradient(0,5,256,10);for(var r=0;r<a;r++)s.addColorStop(1/(a-1)*r,e[r].value);i.fillStyle=s,i.fillRect(0,5,256,10),i.strokeStyle="black",i.beginPath();for(var r=0;r<a;r++)i.moveTo((1/(a-1)*r*256>>0)+.5,0),i.lineTo((1/(a-1)*r*256>>0)+.5,r==0?15:5);return i.moveTo(255.5,0),i.lineTo(255.5,15),i.moveTo(255.5,4.5),i.lineTo(0,4.5),i.stroke(),t.set("ctx",i),n.toDataURL()},getElement:function(){return this.get("element")},update:function(t){for(var e=this,a=e.get("gradientArr"),n=e.get("ctx"),i=e.get("labelsEl"),s,r="",d,h=0;h<a.length;h++)s=t*a[h].stop>>0,d=n.measureText(s).width/2>>0,h==0&&(d=0),h==a.length-1&&(d*=2),r+='<li style="position:absolute;left:'+(((1/(a.length-1)*h*256||0)>>0)-d+.5)+'px">'+s+"</li>";i.innerHTML=r}};var g=function(e){var a={radius:40,element:{},canvas:{},acanvas:{},ctx:{},actx:{},legend:null,visible:!0,width:0,height:0,max:!1,gradient:!1,opacity:180,premultiplyAlpha:!1,bounds:{l:1e3,r:0,t:1e3,b:0},debug:!1};this.store=new o(this),this.get=function(n){return a[n]},this.set=function(n,i){a[n]=i},this.configure(e),this.init()};return g.prototype={configure:function(t){var e=this;if(e.set("radius",t.radius||40),e.set("element",t.element instanceof Object?t.element:document.getElementById(t.element)),e.set("visible",t.visible!=null?t.visible:!0),e.set("max",t.max||!1),e.set("gradient",t.gradient||{.45:"rgb(0,0,255)",.55:"rgb(0,255,255)",.65:"rgb(0,255,0)",.95:"yellow",1:"rgb(255,0,0)"}),e.set("opacity",parseInt(255/(100/t.opacity),10)||180),e.set("width",t.width||0),e.set("height",t.height||0),e.set("debug",t.debug),t.legend){var a=t.legend;a.gradient=e.get("gradient"),e.set("legend",new l(a))}},resize:function(){var t=this,e=t.get("element"),a=t.get("canvas"),n=t.get("acanvas");a.width=n.width=t.get("width")||e.style.width.replace(/px/,"")||t.getWidth(e),this.set("width",a.width),a.height=n.height=t.get("height")||e.style.height.replace(/px/,"")||t.getHeight(e),this.set("height",a.height)},init:function(){var t=this,e=document.createElement("canvas"),a=document.createElement("canvas"),n=e.getContext("2d"),i=a.getContext("2d"),s=t.get("element");t.initColorPalette(),t.set("canvas",e),t.set("ctx",n),t.set("acanvas",a),t.set("actx",i),t.resize(),e.style.cssText=a.style.cssText="position:absolute;top:0;left:0;z-index:10000000;",t.get("visible")||(e.style.display="none"),s.appendChild(e),t.get("legend")&&s.appendChild(t.get("legend").getElement()),t.get("debug")&&document.body.appendChild(a),i.shadowOffsetX=15e3,i.shadowOffsetY=15e3,i.shadowBlur=15},initColorPalette:function(){var t=this,e=document.createElement("canvas"),a=t.get("gradient"),n,i,s;e.width="1",e.height="256",n=e.getContext("2d"),i=n.createLinearGradient(0,0,1,256),s=n.getImageData(0,0,1,1),s.data[0]=s.data[3]=64,s.data[1]=s.data[2]=0,n.putImageData(s,0,0),s=n.getImageData(0,0,1,1),t.set("premultiplyAlpha",s.data[0]<60||s.data[0]>70);for(var r in a)i.addColorStop(r,a[r]);n.fillStyle=i,n.fillRect(0,0,1,256),t.set("gradient",n.getImageData(0,0,1,256).data)},getWidth:function(t){var e=t.offsetWidth;return t.style.paddingLeft&&(e+=t.style.paddingLeft),t.style.paddingRight&&(e+=t.style.paddingRight),e},getHeight:function(t){var e=t.offsetHeight;return t.style.paddingTop&&(e+=t.style.paddingTop),t.style.paddingBottom&&(e+=t.style.paddingBottom),e},colorize:function(t,e){var a=this,n=a.get("width"),i=a.get("radius"),s=a.get("height"),r=a.get("actx"),d=a.get("ctx"),h=i*3,p=a.get("premultiplyAlpha"),w=a.get("gradient"),O=a.get("opacity"),b=a.get("bounds"),_,T,E,S,f,M,I,P,D;t!=null&&e!=null?(t+h>n&&(t=n-h),t<0&&(t=0),e<0&&(e=0),e+h>s&&(e=s-h),_=t,T=e,S=t+h,E=e+h):(b.l<0?_=0:_=b.l,b.r>n?S=n:S=b.r,b.t<0?T=0:T=b.t,b.b>s?E=s:E=b.b),f=r.getImageData(_,T,S-_,E-T),M=f.data.length;for(var v=3;v<M;v+=4)I=f.data[v],P=I*4,!!P&&(D=I<O?I:O,f.data[v-3]=w[P],f.data[v-2]=w[P+1],f.data[v-1]=w[P+2],p&&(f.data[v-3]/=255/D,f.data[v-2]/=255/D,f.data[v-1]/=255/D),f.data[v]=D);d.putImageData(f,_,T)},drawAlpha:function(t,e,a,n){var i=this,s=i.get("radius"),r=i.get("actx");i.get("max");var d=i.get("bounds"),h=t-1.5*s>>0,p=e-1.5*s>>0,w=t+1.5*s>>0,O=e+1.5*s>>0;r.shadowColor="rgba(0,0,0,"+(a?a/i.store.max:"0.1")+")",r.shadowOffsetX=15e3,r.shadowOffsetY=15e3,r.shadowBlur=15,r.beginPath(),r.arc(t-15e3,e-15e3,s,0,Math.PI*2,!0),r.closePath(),r.fill(),n?i.colorize(h,p):(h<d.l&&(d.l=h),p<d.t&&(d.t=p),w>d.r&&(d.r=w),O>d.b&&(d.b=O))},toggleDisplay:function(){var t=this,e=t.get("visible"),a=t.get("canvas");e?a.style.display="none":a.style.display="block",t.set("visible",!e)},getImageData:function(){return this.get("canvas").toDataURL()},clear:function(){var t=this,e=t.get("width"),a=t.get("height");t.store.set("data",[]),t.get("ctx").clearRect(0,0,e,a),t.get("actx").clearRect(0,0,e,a)},cleanup:function(){var t=this;t.get("element").removeChild(t.get("canvas"))}},{create:function(t){return new g(t)},util:{mousePosition:function(t){var e,a;if(t.layerX?(e=t.layerX,a=t.layerY):t.offsetX&&(e=t.offsetX,a=t.offsetY),typeof e!="undefined")return[e,a]}}}}(),c=function(o){try{BMap}catch{throw Error("Baidu Map JS API is not ready yet!")}if(!c._isExtended){c._isExtended=!0,m(c,BMap.Overlay,"HeatmapOverlay");var l=new c(o);this.__proto__=l.__proto__}this.conf=o,this.heatmap=null,this.latlngs=[],this.bounds=null,this._moveendHandler=this._moveendHandler.bind(this)};return c.prototype.initialize=function(o){this._map=o;var l=document.createElement("div");return l.style.position="absolute",l.style.top=0,l.style.left=0,l.style.border=0,l.style.width=this._map.getSize().width+"px",l.style.height=this._map.getSize().height+"px",this.conf.element=l,o.getPanes().mapPane.appendChild(l),this.heatmap=u.create(this.conf),this._div=l,l},c.prototype.draw=function(){var o=this._map.getBounds();if(!o.equals(this.bounds)){this.bounds=o;var l=this._map.pointToOverlayPixel(o.getNorthEast()),g=this._map.pointToOverlayPixel(o.getSouthWest());if(!(!l||!g)){var t=l.y,e=g.x,a=g.y-l.y,n=l.x-g.x;if(this.conf.element.style.left=e+"px",this.conf.element.style.top=t+"px",this.conf.element.style.width=n+"px",this.conf.element.style.height=a+"px",this.heatmap.store.get("heatmap").resize(),this.latlngs.length>0){this.heatmap.clear();for(var i=this.latlngs.length,s={max:this.heatmap.store.max,data:[]};i--;){var r=this.latlngs[i].latlng;if(!!o.containsPoint(r)){var d=this._map.pointToOverlayPixel(r),h=new BMap.Pixel(d.x-e,d.y-t),p=this.pixelTransform(h);s.data.push({x:p.x,y:p.y,count:this.latlngs[i].c})}}this.heatmap.store.setDataSet(s)}}}},c.prototype.pixelTransform=function(o){for(var l=this.heatmap.get("width"),g=this.heatmap.get("height");o.x<0;)o.x+=l;for(;o.x>l;)o.x-=l;for(;o.y<0;)o.y+=g;for(;o.y>g;)o.y-=g;return o.x=o.x>>0,o.y=o.y>>0,o},c.prototype._moveendHandler=function(o){this.setDataSet(this._data),delete this._data,this._map.removeEventListener("moveend",this._moveendHandler)},c.prototype.setDataSet=function(o){if(!!this._map){var l=this._map.getBounds(),g=this._map.pointToOverlayPixel(l.getNorthEast()),t=this._map.pointToOverlayPixel(l.getSouthWest());(!g||!t)&&(this._data=o,this._map.addEventListener("moveend",this._moveendHandler));var e={max:o.max,data:[]},a=o.data,n=a.length;for(this.latlngs=[];n--;){var i=new BMap.Point(a[n].lng,a[n].lat);if(this.latlngs.push({latlng:i,c:a[n].count}),!!l.containsPoint(i)){var s=this._map.pointToOverlayPixel(i),r=this._map.pointToOverlayPixel(l.getSouthWest()).x,d=this._map.pointToOverlayPixel(l.getNorthEast()).y,h=new BMap.Pixel(s.x-r,s.y-d),p=this.pixelTransform(h);e.data.push({x:p.x,y:p.y,count:a[n].count})}}this.heatmap.clear(),this.heatmap.store.setDataSet(e)}},c.prototype.addDataPoint=function(o,l,g){var t=new BMap.Point(o,l),e=this.pixelTransform(this._map.pointToOverlayPixel(t));this.heatmap.store.addDataPoint(e.x,e.y,g),this.latlngs.push({latlng:t,c:g})},c.prototype.toggle=function(){this.heatmap.toggleDisplay()},c})})(A);var H=A.exports;const L={name:"bml-heatmap",render(){},mixins:[B("overlay")],props:{data:{type:Array,default:Array},max:{type:Number},radius:{type:Number},gradient:{type:Object},opacity:{type:Number}},watch:{data:{handler(){this.reload()},deep:!0},max(){this.reload()},radius(y){const{originInstance:x,opacity:m,gradient:u}=this;x.setOptions({radius:y,opacity:m,gradient:u})},gradient:{handler(y){const{originInstance:x,radius:m,opacity:u}=this;x.setOptions({radius:m,opacity:u,gradient:y})},deep:!0},opacity(y){const{originInstance:x,radius:m,gradient:u}=this;x.setOptions({radius:m,opacity:y,gradient:u})}},methods:{load(){const{map:y,data:x,max:m,radius:u,opacity:c,gradient:o}=this,l=this.originInstance=new H({radius:u,opacity:c,gradient:o});y.addOverlay(l),l.setDataSet({data:x,max:m})}}};export{L as default};
