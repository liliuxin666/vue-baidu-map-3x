import{r as i,c as d,a,w as n,b as D,d as s,e as o,f as t,o as F}from"./app.ea622ec2.js";const k=D('<h1 id="\u70B9" tabindex="-1">\u70B9 <a class="header-anchor" href="#\u70B9" aria-hidden="true">#</a></h1><p><code>BmMarker</code></p><h2 id="\u5C5E\u6027" tabindex="-1">\u5C5E\u6027 <a class="header-anchor" href="#\u5C5E\u6027" aria-hidden="true">#</a></h2><table><thead><tr><th>\u5C5E\u6027\u540D</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th><th>\u63CF\u8FF0</th></tr></thead><tbody><tr><td>position</td><td>Point</td><td></td><td>\u6807\u6CE8\u7684\u4F4D\u7F6E</td></tr><tr><td>offset</td><td>Size</td><td></td><td>\u6807\u6CE8\u7684\u4F4D\u7F6E\u504F\u79FB\u503C</td></tr><tr><td>icon</td><td>Icon</td><td></td><td>\u6807\u6CE8\u6240\u7528\u7684\u56FE\u6807\u5BF9\u8C61</td></tr><tr><td>massClear</td><td>Boolean</td><td>true</td><td>\u662F\u5426\u5728\u8C03\u7528map.clearOverlays\u6E05\u9664\u6B64\u8986\u76D6\u7269</td></tr><tr><td>dragging</td><td>Boolean</td><td>false</td><td>\u662F\u5426\u542F\u7528\u62D6\u62FD</td></tr><tr><td>clicking</td><td>Boolean</td><td>true</td><td>\u662F\u5426\u54CD\u5E94\u70B9\u51FB\u4E8B\u4EF6</td></tr><tr><td>raiseOnDrag</td><td>Boolean</td><td>false</td><td>\u62D6\u62FD\u6807\u6CE8\u65F6\uFF0C\u6807\u6CE8\u662F\u5426\u5F00\u542F\u79BB\u5F00\u5730\u56FE\u8868\u9762\u6548\u679C</td></tr><tr><td>draggingCursor</td><td>String</td><td></td><td>\u62D6\u62FD\u6807\u6CE8\u65F6\u7684\u9F20\u6807\u6307\u9488\u6837\u5F0F\u3002\u6B64\u5C5E\u6027\u503C\u9700\u9075\u5FAACSS\u7684cursor\u5C5E\u6027\u89C4\u8303</td></tr><tr><td>rotation</td><td>Number</td><td></td><td>\u65CB\u8F6C\u89D2\u5EA6</td></tr><tr><td>shadow</td><td>Icon</td><td></td><td>\u9634\u5F71\u56FE\u6807</td></tr><tr><td>title</td><td>String</td><td></td><td>\u9F20\u6807\u79FB\u5230marker\u4E0A\u7684\u663E\u793A\u5185\u5BB9</td></tr><tr><td>label</td><td>Label</td><td></td><td>\u4E3A\u6807\u6CE8\u6DFB\u52A0\u6587\u672C\u6807\u6CE8</td></tr><tr><td>animation</td><td>String</td><td></td><td>\u52A8\u753B\u6548\u679C</td></tr><tr><td>top</td><td>Boolean</td><td>false</td><td>\u5C06\u6807\u6CE8\u7F6E\u4E8E\u5176\u4ED6\u6807\u6CE8\u4E4B\u4E0A\u3002\u9ED8\u8BA4\u60C5\u51B5\u4E0B\uFF0C\u7EAC\u5EA6\u8F83\u4F4E\u7684\u6807\u6CE8\u4F1A\u8986\u76D6\u5728\u7EAC\u5EA6\u8F83\u9AD8\u7684\u6807\u6CE8\u4E4B\u4E0A\uFF0C\u4ECE\u800C\u5F62\u6210\u4E00\u79CD\u7ACB\u4F53\u6548\u679C\u3002\u901A\u8FC7\u6B64\u65B9\u6CD5\u53EF\u4F7F\u67D0\u4E2A\u6807\u6CE8\u8986\u76D6\u5728\u5176\u4ED6\u6240\u6709\u6807\u6CE8\u4E4B\u4E0A\u3002\u6CE8\u610F\uFF1A\u5982\u679C\u5728\u591A\u4E2A\u6807\u6CE8\u5BF9\u8C61\u4E0A\u8C03\u7528\u6B64\u65B9\u6CD5\uFF0C\u5219\u8FD9\u4E9B\u6807\u6CE8\u4F9D\u65E7\u6309\u7167\u7EAC\u5EA6\u4EA7\u751F\u9ED8\u8BA4\u7684\u8986\u76D6\u6548\u679C\u3002</td></tr><tr><td>zIndex</td><td>Number</td><td>0</td><td>\u8BBE\u7F6E\u8986\u76D6\u7269\u7684zIndex</td></tr></tbody></table><h2 id="\u4E8B\u4EF6" tabindex="-1">\u4E8B\u4EF6 <a class="header-anchor" href="#\u4E8B\u4EF6" aria-hidden="true">#</a></h2><table><thead><tr><th>\u4E8B\u4EF6\u540D</th><th>\u53C2\u6570</th><th>\u63CF\u8FF0</th></tr></thead><tbody><tr><td>click</td><td><code>event{type, target}</code></td><td>\u70B9\u51FB\u6807\u6CE8\u56FE\u6807\u540E\u4F1A\u89E6\u53D1\u6B64\u4E8B\u4EF6</td></tr><tr><td>dblclick</td><td><code>event{type, target, point,pixel}</code></td><td>\u53CC\u51FB\u6807\u6CE8\u56FE\u6807\u540E\u4F1A\u89E6\u53D1\u6B64\u4E8B\u4EF6</td></tr><tr><td>mousedown</td><td><code>event{type, target, point,pixel}</code></td><td>\u9F20\u6807\u5728\u6807\u6CE8\u56FE\u4E0A\u6309\u4E0B\u89E6\u53D1\u6B64\u4E8B\u4EF6</td></tr><tr><td>mouseup</td><td><code>event{type, target, point,pixel}</code></td><td>\u9F20\u6807\u5728\u6807\u6CE8\u56FE\u4E0A\u91CA\u653E\u89E6\u53D1\u6B64\u4E8B\u4EF6</td></tr><tr><td>mouseout</td><td><code>event{type, target, point,pixel}</code></td><td>\u9F20\u6807\u79BB\u5F00\u6807\u6CE8\u65F6\u89E6\u53D1\u6B64\u4E8B\u4EF6</td></tr><tr><td>mouseover</td><td><code>event{type, target, point,pixel}</code></td><td>\u5F53\u9F20\u6807\u8FDB\u5165\u6807\u6CE8\u56FE\u6807\u533A\u57DF\u65F6\u4F1A\u89E6\u53D1\u6B64\u4E8B\u4EF6</td></tr><tr><td>remove</td><td><code>event{type, target}</code></td><td>\u79FB\u9664\u6807\u6CE8\u65F6\u89E6\u53D1</td></tr><tr><td>infowindowclose</td><td><code>event{type, target}</code></td><td>\u4FE1\u606F\u7A97\u5728\u6B64\u6807\u6CE8\u4E0A\u5173\u95ED\u65F6\u89E6\u53D1\u6B64\u4E8B\u4EF6</td></tr><tr><td>infowindowopen</td><td><code>event{type, target}</code></td><td>\u4FE1\u606F\u7A97\u5728\u6B64\u6807\u6CE8\u4E0A\u6253\u5F00\u65F6\u89E6\u53D1\u6B64\u4E8B\u4EF6</td></tr><tr><td>dragstart</td><td><code>event{type, target}</code></td><td>\u5F00\u59CB\u62D6\u62FD\u6807\u6CE8\u65F6\u89E6\u53D1\u6B64\u4E8B\u4EF6</td></tr><tr><td>dragging</td><td><code>event{type, target, pixel, point}</code></td><td>\u62D6\u62FD\u6807\u6CE8\u8FC7\u7A0B\u4E2D\u89E6\u53D1\u6B64\u4E8B\u4EF6</td></tr><tr><td>dragend</td><td><code>event{type, target, pixel, point}</code></td><td>\u62D6\u62FD\u7ED3\u675F\u65F6\u89E6\u53D1\u6B64\u4E8B\u4EF6</td></tr><tr><td>rightclick</td><td><code>event{type, target}</code></td><td>\u53F3\u952E\u70B9\u51FB\u6807\u6CE8\u65F6\u89E6\u53D1\u6B64\u4E8B\u4EF6</td></tr></tbody></table><h2 id="\u793A\u4F8B" tabindex="-1">\u793A\u4F8B <a class="header-anchor" href="#\u793A\u4F8B" aria-hidden="true">#</a></h2><h3 id="\u5728\u5730\u56FE\u4E2D\u5FC3\u6DFB\u52A0\u53EF\u62D6\u52A8\u7684\u8DF3\u8DC3\u70B9\u6807\u8BB0" tabindex="-1">\u5728\u5730\u56FE\u4E2D\u5FC3\u6DFB\u52A0\u53EF\u62D6\u52A8\u7684\u8DF3\u8DC3\u70B9\u6807\u8BB0 <a class="header-anchor" href="#\u5728\u5730\u56FE\u4E2D\u5FC3\u6DFB\u52A0\u53EF\u62D6\u52A8\u7684\u8DF3\u8DC3\u70B9\u6807\u8BB0" aria-hidden="true">#</a></h3>',8),m=s("h3",{id:"\u6DFB\u52A0\u4E00\u4E2A\u81EA\u5B9A\u4E49\u56FE\u6807\u7684\u70B9",tabindex:"-1"},[o("\u6DFB\u52A0\u4E00\u4E2A\u81EA\u5B9A\u4E49\u56FE\u6807\u7684\u70B9 "),s("a",{class:"header-anchor",href:"#\u6DFB\u52A0\u4E00\u4E2A\u81EA\u5B9A\u4E49\u56FE\u6807\u7684\u70B9","aria-hidden":"true"},"#")],-1),g=s("h3",{id:"\u70B9\u51FB-marker-\u5F39\u51FA-infowindow",tabindex:"-1"},[o("\u70B9\u51FB Marker \u5F39\u51FA InfoWindow "),s("a",{class:"header-anchor",href:"#\u70B9\u51FB-marker-\u5F39\u51FA-infowindow","aria-hidden":"true"},"#")],-1),b=o("\u6211\u7231\u5317\u4EAC\u5929\u5B89\u95E8"),_='{"title":"\u70B9","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u5C5E\u6027","slug":"\u5C5E\u6027"},{"level":2,"title":"\u4E8B\u4EF6","slug":"\u4E8B\u4EF6"},{"level":2,"title":"\u793A\u4F8B","slug":"\u793A\u4F8B"},{"level":3,"title":"\u5728\u5730\u56FE\u4E2D\u5FC3\u6DFB\u52A0\u53EF\u62D6\u52A8\u7684\u8DF3\u8DC3\u70B9\u6807\u8BB0","slug":"\u5728\u5730\u56FE\u4E2D\u5FC3\u6DFB\u52A0\u53EF\u62D6\u52A8\u7684\u8DF3\u8DC3\u70B9\u6807\u8BB0"},{"level":3,"title":"\u6DFB\u52A0\u4E00\u4E2A\u81EA\u5B9A\u4E49\u56FE\u6807\u7684\u70B9","slug":"\u6DFB\u52A0\u4E00\u4E2A\u81EA\u5B9A\u4E49\u56FE\u6807\u7684\u70B9"},{"level":3,"title":"\u70B9\u51FB Marker \u5F39\u51FA InfoWindow","slug":"\u70B9\u51FB-marker-\u5F39\u51FA-infowindow"}],"relativePath":"overlay/marker.md"}',h={},w=Object.assign(h,{setup(A){const p=i(!0),c=()=>{p.value=!1},l=()=>{p.value=!0};return(v,f)=>{const u=t("bm-label"),e=t("bm-marker"),E=t("baidu-map"),C=t("RunCode"),r=t("bm-info-window");return F(),d("div",null,[k,a(C,{highligh:"%3Cdiv%20class%3D%22language-html%20line-numbers-mode%22%3E%3Cpre%20v-pre%3E%3Ccode%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%3C%2Fspan%3Etemplate%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%20%20%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%3C%2Fspan%3Ediv%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%20%20%20%20%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%3C%2Fspan%3Ebaidu-map%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20attr-name%22%3Eclass%3C%2Fspan%3E%3Cspan%20class%3D%22token%20attr-value%22%3E%3Cspan%20class%3D%22token%20punctuation%20attr-equals%22%3E%3D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3Emap%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20attr-name%22%3E%3Acenter%3C%2Fspan%3E%3Cspan%20class%3D%22token%20attr-value%22%3E%3Cspan%20class%3D%22token%20punctuation%20attr-equals%22%3E%3D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E%7Blng%3A%20116.404%2C%20lat%3A%2039.915%7D%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20attr-name%22%3E%3Azoom%3C%2Fspan%3E%3Cspan%20class%3D%22token%20attr-value%22%3E%3Cspan%20class%3D%22token%20punctuation%20attr-equals%22%3E%3D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E15%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%20%20%20%20%20%20%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%3C%2Fspan%3Ebm-marker%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20attr-name%22%3E%3Aposition%3C%2Fspan%3E%3Cspan%20class%3D%22token%20attr-value%22%3E%3Cspan%20class%3D%22token%20punctuation%20attr-equals%22%3E%3D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E%7Blng%3A%20116.404%2C%20lat%3A%2039.915%7D%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20attr-name%22%3E%3Adragging%3C%2Fspan%3E%3Cspan%20class%3D%22token%20attr-value%22%3E%3Cspan%20class%3D%22token%20punctuation%20attr-equals%22%3E%3D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3Etrue%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20attr-name%22%3Eanimation%3C%2Fspan%3E%3Cspan%20class%3D%22token%20attr-value%22%3E%3Cspan%20class%3D%22token%20punctuation%20attr-equals%22%3E%3D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3EBMAP_ANIMATION_BOUNCE%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%20%20%20%20%20%20%20%20%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%3C%2Fspan%3Ebm-label%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20attr-name%22%3Econtent%3C%2Fspan%3E%3Cspan%20class%3D%22token%20attr-value%22%3E%3Cspan%20class%3D%22token%20punctuation%20attr-equals%22%3E%3D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E%E6%88%91%E7%88%B1%E5%8C%97%E4%BA%AC%E5%A4%A9%E5%AE%89%E9%97%A8%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20attr-name%22%3E%3AlabelStyle%3C%2Fspan%3E%3Cspan%20class%3D%22token%20attr-value%22%3E%3Cspan%20class%3D%22token%20punctuation%20attr-equals%22%3E%3D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E%7Bcolor%3A%20%3Cspan%20class%3D%22token%20punctuation%22%3E'%3C%2Fspan%3Ered%3Cspan%20class%3D%22token%20punctuation%22%3E'%3C%2Fspan%3E%2C%20fontSize%20%3A%20%3Cspan%20class%3D%22token%20punctuation%22%3E'%3C%2Fspan%3E24px%3Cspan%20class%3D%22token%20punctuation%22%3E'%3C%2Fspan%3E%7D%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20attr-name%22%3E%3Aoffset%3C%2Fspan%3E%3Cspan%20class%3D%22token%20attr-value%22%3E%3Cspan%20class%3D%22token%20punctuation%20attr-equals%22%3E%3D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E%7Bwidth%3A%20-35%2C%20height%3A%2030%7D%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%2F%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%20%20%20%20%20%20%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%2F%3C%2Fspan%3Ebm-marker%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%20%20%20%20%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%2F%3C%2Fspan%3Ebaidu-map%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%20%20%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%2F%3C%2Fspan%3Ediv%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%2F%3C%2Fspan%3Etemplate%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%3C%2Fcode%3E%3C%2Fpre%3E%0A%3Cdiv%20class%3D%22line-numbers-wrapper%22%3E%3Cspan%20class%3D%22line-number%22%3E1%3C%2Fspan%3E%3Cbr%3E%3Cspan%20class%3D%22line-number%22%3E2%3C%2Fspan%3E%3Cbr%3E%3Cspan%20class%3D%22line-number%22%3E3%3C%2Fspan%3E%3Cbr%3E%3Cspan%20class%3D%22line-number%22%3E4%3C%2Fspan%3E%3Cbr%3E%3Cspan%20class%3D%22line-number%22%3E5%3C%2Fspan%3E%3Cbr%3E%3Cspan%20class%3D%22line-number%22%3E6%3C%2Fspan%3E%3Cbr%3E%3Cspan%20class%3D%22line-number%22%3E7%3C%2Fspan%3E%3Cbr%3E%3Cspan%20class%3D%22line-number%22%3E8%3C%2Fspan%3E%3Cbr%3E%3Cspan%20class%3D%22line-number%22%3E9%3C%2Fspan%3E%3Cbr%3E%3C%2Fdiv%3E%3C%2Fdiv%3E"},{default:n(()=>[s("div",null,[a(E,{class:"map",center:{lng:116.404,lat:39.915},zoom:15},{default:n(()=>[a(e,{position:{lng:116.404,lat:39.915},dragging:!0,animation:"BMAP_ANIMATION_BOUNCE"},{default:n(()=>[a(u,{content:"\u6211\u7231\u5317\u4EAC\u5929\u5B89\u95E8",labelStyle:{color:"red",fontSize:"24px"},offset:{width:-35,height:30}})]),_:1},8,["position"])]),_:1},8,["center"])])]),_:1}),m,a(C,{highligh:"%3Cdiv%20class%3D%22language-html%20line-numbers-mode%22%3E%3Cpre%20v-pre%3E%3Ccode%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%3C%2Fspan%3Etemplate%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%20%20%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%3C%2Fspan%3Ediv%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%20%20%20%20%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%3C%2Fspan%3Ebaidu-map%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20attr-name%22%3Eclass%3C%2Fspan%3E%3Cspan%20class%3D%22token%20attr-value%22%3E%3Cspan%20class%3D%22token%20punctuation%20attr-equals%22%3E%3D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3Emap%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20attr-name%22%3E%3Acenter%3C%2Fspan%3E%3Cspan%20class%3D%22token%20attr-value%22%3E%3Cspan%20class%3D%22token%20punctuation%20attr-equals%22%3E%3D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E%7Blng%3A%20116.404%2C%20lat%3A%2039.915%7D%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20attr-name%22%3E%3Azoom%3C%2Fspan%3E%3Cspan%20class%3D%22token%20attr-value%22%3E%3Cspan%20class%3D%22token%20punctuation%20attr-equals%22%3E%3D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E15%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%20%20%20%20%20%20%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%3C%2Fspan%3Ebm-marker%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20attr-name%22%3E%3Aposition%3C%2Fspan%3E%3Cspan%20class%3D%22token%20attr-value%22%3E%3Cspan%20class%3D%22token%20punctuation%20attr-equals%22%3E%3D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E%7Blng%3A%20116.404%2C%20lat%3A%2039.915%7D%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20attr-name%22%3E%3Adragging%3C%2Fspan%3E%3Cspan%20class%3D%22token%20attr-value%22%3E%3Cspan%20class%3D%22token%20punctuation%20attr-equals%22%3E%3D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3Etrue%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20attr-name%22%3E%3Aicon%3C%2Fspan%3E%3Cspan%20class%3D%22token%20attr-value%22%3E%3Cspan%20class%3D%22token%20punctuation%20attr-equals%22%3E%3D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E%7Burl%3A%20%3Cspan%20class%3D%22token%20punctuation%22%3E'%3C%2Fspan%3Ehttp%3A%2F%2Fdeveloper.baidu.com%2Fmap%2Fjsdemo%2Fimg%2Ffox.gif%3Cspan%20class%3D%22token%20punctuation%22%3E'%3C%2Fspan%3E%2C%20size%3A%20%7Bwidth%3A%20300%2C%20height%3A%20157%7D%7D%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%2F%3C%2Fspan%3Ebm-marker%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%20%20%20%20%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%2F%3C%2Fspan%3Ebaidu-map%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%20%20%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%2F%3C%2Fspan%3Ediv%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%2F%3C%2Fspan%3Etemplate%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%3C%2Fcode%3E%3C%2Fpre%3E%0A%3Cdiv%20class%3D%22line-numbers-wrapper%22%3E%3Cspan%20class%3D%22line-number%22%3E1%3C%2Fspan%3E%3Cbr%3E%3Cspan%20class%3D%22line-number%22%3E2%3C%2Fspan%3E%3Cbr%3E%3Cspan%20class%3D%22line-number%22%3E3%3C%2Fspan%3E%3Cbr%3E%3Cspan%20class%3D%22line-number%22%3E4%3C%2Fspan%3E%3Cbr%3E%3Cspan%20class%3D%22line-number%22%3E5%3C%2Fspan%3E%3Cbr%3E%3Cspan%20class%3D%22line-number%22%3E6%3C%2Fspan%3E%3Cbr%3E%3Cspan%20class%3D%22line-number%22%3E7%3C%2Fspan%3E%3Cbr%3E%3C%2Fdiv%3E%3C%2Fdiv%3E"},{default:n(()=>[s("div",null,[a(E,{class:"map",center:{lng:116.404,lat:39.915},zoom:15},{default:n(()=>[a(e,{position:{lng:116.404,lat:39.915},dragging:!0,icon:{url:"http://developer.baidu.com/map/jsdemo/img/fox.gif",size:{width:300,height:157}}},null,8,["position","icon"])]),_:1},8,["center"])])]),_:1}),g,a(C,{highligh:"%3Cdiv%20class%3D%22language-html%20line-numbers-mode%22%3E%3Cpre%20v-pre%3E%3Ccode%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%3C%2Fspan%3Etemplate%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%20%20%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%3C%2Fspan%3Ediv%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%20%20%20%20%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%3C%2Fspan%3Ebaidu-map%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20attr-name%22%3Eclass%3C%2Fspan%3E%3Cspan%20class%3D%22token%20attr-value%22%3E%3Cspan%20class%3D%22token%20punctuation%20attr-equals%22%3E%3D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3Emap%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20attr-name%22%3E%3Acenter%3C%2Fspan%3E%3Cspan%20class%3D%22token%20attr-value%22%3E%3Cspan%20class%3D%22token%20punctuation%20attr-equals%22%3E%3D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E%7Blng%3A%20116.404%2C%20lat%3A%2039.915%7D%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20attr-name%22%3E%3Azoom%3C%2Fspan%3E%3Cspan%20class%3D%22token%20attr-value%22%3E%3Cspan%20class%3D%22token%20punctuation%20attr-equals%22%3E%3D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E15%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%20%20%20%20%20%20%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%3C%2Fspan%3Ebm-marker%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20attr-name%22%3E%3Aposition%3C%2Fspan%3E%3Cspan%20class%3D%22token%20attr-value%22%3E%3Cspan%20class%3D%22token%20punctuation%20attr-equals%22%3E%3D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E%7Blng%3A%20116.404%2C%20lat%3A%2039.915%7D%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20attr-name%22%3E%3Adragging%3C%2Fspan%3E%3Cspan%20class%3D%22token%20attr-value%22%3E%3Cspan%20class%3D%22token%20punctuation%20attr-equals%22%3E%3D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3Etrue%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20attr-name%22%3E%40click%3C%2Fspan%3E%3Cspan%20class%3D%22token%20attr-value%22%3E%3Cspan%20class%3D%22token%20punctuation%20attr-equals%22%3E%3D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3EinfoWindowOpen%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%20%20%20%20%20%20%20%20%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%3C%2Fspan%3Ebm-info-window%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20attr-name%22%3E%3Ashow%3C%2Fspan%3E%3Cspan%20class%3D%22token%20attr-value%22%3E%3Cspan%20class%3D%22token%20punctuation%20attr-equals%22%3E%3D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3Eshow%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20attr-name%22%3E%40close%3C%2Fspan%3E%3Cspan%20class%3D%22token%20attr-value%22%3E%3Cspan%20class%3D%22token%20punctuation%20attr-equals%22%3E%3D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3EinfoWindowClose%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20attr-name%22%3E%40open%3C%2Fspan%3E%3Cspan%20class%3D%22token%20attr-value%22%3E%3Cspan%20class%3D%22token%20punctuation%20attr-equals%22%3E%3D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3EinfoWindowOpen%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%E6%88%91%E7%88%B1%E5%8C%97%E4%BA%AC%E5%A4%A9%E5%AE%89%E9%97%A8%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%2F%3C%2Fspan%3Ebm-info-window%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%20%20%20%20%20%20%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%2F%3C%2Fspan%3Ebm-marker%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%20%20%20%20%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%2F%3C%2Fspan%3Ebaidu-map%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%20%20%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%2F%3C%2Fspan%3Ediv%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%2F%3C%2Fspan%3Etemplate%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%0A%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%3C%2Fspan%3Escript%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20attr-name%22%3Esetup%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%3Cspan%20class%3D%22token%20script%22%3E%3Cspan%20class%3D%22token%20language-javascript%22%3E%0A%3Cspan%20class%3D%22token%20keyword%22%3Eimport%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20punctuation%22%3E%7B%3C%2Fspan%3E%20ref%20%3Cspan%20class%3D%22token%20punctuation%22%3E%7D%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20keyword%22%3Efrom%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20string%22%3E'vue'%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3B%3C%2Fspan%3E%0A%0A%3Cspan%20class%3D%22token%20keyword%22%3Econst%3C%2Fspan%3E%20show%20%3Cspan%20class%3D%22token%20operator%22%3E%3D%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20function%22%3Eref%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E(%3C%2Fspan%3E%3Cspan%20class%3D%22token%20boolean%22%3Etrue%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E)%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3B%3C%2Fspan%3E%0A%0A%3Cspan%20class%3D%22token%20keyword%22%3Econst%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20function-variable%20function%22%3EinfoWindowClose%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20operator%22%3E%3D%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20punctuation%22%3E(%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E)%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20operator%22%3E%3D%3E%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20punctuation%22%3E%7B%3C%2Fspan%3E%0A%20%20show%3Cspan%20class%3D%22token%20punctuation%22%3E.%3C%2Fspan%3Evalue%20%3Cspan%20class%3D%22token%20operator%22%3E%3D%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20boolean%22%3Efalse%3C%2Fspan%3E%0A%3Cspan%20class%3D%22token%20punctuation%22%3E%7D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3B%3C%2Fspan%3E%0A%3Cspan%20class%3D%22token%20keyword%22%3Econst%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20function-variable%20function%22%3EinfoWindowOpen%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20operator%22%3E%3D%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20punctuation%22%3E(%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E)%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20operator%22%3E%3D%3E%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20punctuation%22%3E%7B%3C%2Fspan%3E%0A%20%20show%3Cspan%20class%3D%22token%20punctuation%22%3E.%3C%2Fspan%3Evalue%20%3Cspan%20class%3D%22token%20operator%22%3E%3D%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20boolean%22%3Etrue%3C%2Fspan%3E%0A%3Cspan%20class%3D%22token%20punctuation%22%3E%7D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3B%3C%2Fspan%3E%0A%3C%2Fspan%3E%3C%2Fspan%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%2F%3C%2Fspan%3Escript%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%3C%2Fcode%3E%3C%2Fpre%3E%0A%3Cdiv%20class%3D%22line-numbers-wrapper%22%3E%3Cspan%20class%3D%22line-number%22%3E1%3C%2Fspan%3E%3Cbr%3E%3Cspan%20class%3D%22line-number%22%3E2%3C%2Fspan%3E%3Cbr%3E%3Cspan%20class%3D%22line-number%22%3E3%3C%2Fspan%3E%3Cbr%3E%3Cspan%20class%3D%22line-number%22%3E4%3C%2Fspan%3E%3Cbr%3E%3Cspan%20class%3D%22line-number%22%3E5%3C%2Fspan%3E%3Cbr%3E%3Cspan%20class%3D%22line-number%22%3E6%3C%2Fspan%3E%3Cbr%3E%3Cspan%20class%3D%22line-number%22%3E7%3C%2Fspan%3E%3Cbr%3E%3Cspan%20class%3D%22line-number%22%3E8%3C%2Fspan%3E%3Cbr%3E%3Cspan%20class%3D%22line-number%22%3E9%3C%2Fspan%3E%3Cbr%3E%3Cspan%20class%3D%22line-number%22%3E10%3C%2Fspan%3E%3Cbr%3E%3Cspan%20class%3D%22line-number%22%3E11%3C%2Fspan%3E%3Cbr%3E%3Cspan%20class%3D%22line-number%22%3E12%3C%2Fspan%3E%3Cbr%3E%3Cspan%20class%3D%22line-number%22%3E13%3C%2Fspan%3E%3Cbr%3E%3Cspan%20class%3D%22line-number%22%3E14%3C%2Fspan%3E%3Cbr%3E%3Cspan%20class%3D%22line-number%22%3E15%3C%2Fspan%3E%3Cbr%3E%3Cspan%20class%3D%22line-number%22%3E16%3C%2Fspan%3E%3Cbr%3E%3Cspan%20class%3D%22line-number%22%3E17%3C%2Fspan%3E%3Cbr%3E%3Cspan%20class%3D%22line-number%22%3E18%3C%2Fspan%3E%3Cbr%3E%3Cspan%20class%3D%22line-number%22%3E19%3C%2Fspan%3E%3Cbr%3E%3Cspan%20class%3D%22line-number%22%3E20%3C%2Fspan%3E%3Cbr%3E%3Cspan%20class%3D%22line-number%22%3E21%3C%2Fspan%3E%3Cbr%3E%3Cspan%20class%3D%22line-number%22%3E22%3C%2Fspan%3E%3Cbr%3E%3C%2Fdiv%3E%3C%2Fdiv%3E"},{default:n(()=>[s("div",null,[a(E,{class:"map",center:{lng:116.404,lat:39.915},zoom:15},{default:n(()=>[a(e,{position:{lng:116.404,lat:39.915},dragging:!0,onClick:l},{default:n(()=>[a(r,{show:p.value,onClose:c,onOpen:l},{default:n(()=>[b]),_:1},8,["show"])]),_:1},8,["position"])]),_:1},8,["center"])])]),_:1})])}}});export{_ as __pageData,w as default};
