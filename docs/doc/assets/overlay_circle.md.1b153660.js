import{r as c,c as l,a as t,w as e,b as r,f as s,o as u,d}from"./app.ea622ec2.js";const i=r('<h1 id="\u5706\u5F62" tabindex="-1">\u5706\u5F62 <a class="header-anchor" href="#\u5706\u5F62" aria-hidden="true">#</a></h1><p><code>BmCircle</code> \u5706\u5F62\u8986\u76D6\u7269\u7EC4\u4EF6\u7531\u4E8E\u5185\u90E8\u5B9E\u73B0\u6240\u5C40\u9650\uFF0C\u5728\u53EF\u7F16\u8F91\u72B6\u6001\u4E0B\u8FDB\u884C\u53CC\u5411\u7ED1\u5B9A\u65F6\u66F4\u65B0 model \u4F1A\u91CD\u7F6E\u7EC4\u4EF6\u72B6\u6001\u3002</p><h2 id="\u5C5E\u6027" tabindex="-1">\u5C5E\u6027 <a class="header-anchor" href="#\u5C5E\u6027" aria-hidden="true">#</a></h2><table><thead><tr><th>\u5C5E\u6027\u540D</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th><th>\u63CF\u8FF0</th></tr></thead><tbody><tr><td>center</td><td>Point</td><td></td><td>\u5706\u5FC3\uFF0C\u662F\u5706\u5F62\u4E2D\u5FC3\u70B9\u5750\u6807</td></tr><tr><td>radius</td><td>Number</td><td></td><td>\u534A\u5F84\uFF0C\u5355\u4F4D\u4E3A\u7C73</td></tr><tr><td>strokeColor</td><td>String</td><td></td><td>\u6298\u7EBF\u989C\u8272</td></tr><tr><td>strokeWeight</td><td>Number</td><td></td><td>\u6298\u7EBF\u7684\u5BBD\u5EA6\uFF0C\u4EE5\u50CF\u7D20\u4E3A\u5355\u4F4D</td></tr><tr><td>strokeOpacity</td><td>Number</td><td></td><td>\u6298\u7EBF\u7684\u900F\u660E\u5EA6\uFF0C\u53D6\u503C\u8303\u56F40 - 1</td></tr><tr><td>strokeStyle</td><td>String</td><td>&#39;solid&#39;</td><td>\u6298\u7EBF\u7684\u6837\u5F0F\uFF0Csolid\u6216dashed</td></tr><tr><td>fillColor</td><td>String</td><td></td><td>\u586B\u5145\u989C\u8272\u3002\u5F53\u53C2\u6570\u4E3A\u7A7A\u65F6\uFF0C\u6298\u7EBF\u8986\u76D6\u7269\u5C06\u6CA1\u6709\u586B\u5145\u6548\u679C</td></tr><tr><td>fillOpacity</td><td>Number</td><td></td><td>\u586B\u5145\u7684\u900F\u660E\u5EA6\uFF0C\u53D6\u503C\u8303\u56F40 - 1</td></tr><tr><td>massClear</td><td>Boolean</td><td>true</td><td>\u662F\u5426\u5728\u8C03\u7528map.clearOverlays\u6E05\u9664\u6B64\u8986\u76D6\u7269</td></tr><tr><td>editing</td><td>Boolean</td><td>false</td><td>\u662F\u5426\u542F\u7528\u7EBF\u7F16\u8F91</td></tr><tr><td>clicking</td><td>Boolean</td><td>true</td><td>\u662F\u5426\u54CD\u5E94\u70B9\u51FB\u4E8B\u4EF6</td></tr></tbody></table><h2 id="\u4E8B\u4EF6" tabindex="-1">\u4E8B\u4EF6 <a class="header-anchor" href="#\u4E8B\u4EF6" aria-hidden="true">#</a></h2><table><thead><tr><th>\u4E8B\u4EF6\u540D</th><th>\u53C2\u6570</th><th>\u63CF\u8FF0</th></tr></thead><tbody><tr><td>click</td><td><code>event{type, target, point, pixel}</code></td><td>\u9F20\u6807\u70B9\u51FB\u5706\u5F62\u540E\u4F1A\u89E6\u53D1\u6B64\u4E8B\u4EF6</td></tr><tr><td>dblclick</td><td><code>event{type, target, point, pixel}</code></td><td>\u9F20\u6807\u53CC\u51FB\u5706\u5F62\u540E\u4F1A\u89E6\u53D1\u6B64\u4E8B\u4EF6</td></tr><tr><td>mousedown</td><td><code>event{type, target, point, pixel}</code></td><td>\u9F20\u6807\u5728\u5706\u5F62\u4E0A\u6309\u4E0B\u89E6\u53D1\u6B64\u4E8B\u4EF6</td></tr><tr><td>mouseup</td><td><code>event{type, target, point, pixel}</code></td><td>\u9F20\u6807\u5728\u5706\u5F62\u91CA\u653E\u89E6\u53D1\u6B64\u4E8B\u4EF6</td></tr><tr><td>mouseout</td><td><code>event{type, target, point, pixel}</code></td><td>\u9F20\u6807\u79BB\u5F00\u5706\u5F62\u65F6\u89E6\u53D1\u6B64\u4E8B\u4EF6</td></tr><tr><td>mouseover</td><td><code>event{type, target, point, pixel}</code></td><td>\u5F53\u9F20\u6807\u8FDB\u5165\u5706\u5F62\u533A\u57DF\u65F6\u4F1A\u89E6\u53D1\u6B64\u4E8B\u4EF6</td></tr><tr><td>remove</td><td><code>event{type, target}</code></td><td>\u79FB\u9664\u5706\u5F62\u65F6\u89E6\u53D1\u6B64\u4E8B\u4EF6</td></tr><tr><td>lineupdate</td><td><code>event{type, target}</code></td><td>\u5706\u5F62\u8986\u76D6\u7269\u7684\u5C5E\u6027\u53D1\u751F\u53D8\u5316\u65F6\u89E6\u53D1\u6B64\u4E8B\u4EF6</td></tr></tbody></table><h2 id="\u793A\u4F8B" tabindex="-1">\u793A\u4F8B <a class="header-anchor" href="#\u793A\u4F8B" aria-hidden="true">#</a></h2><h3 id="\u5728\u5730\u56FE\u4E2D\u6DFB\u52A0\u5706\u5F62" tabindex="-1">\u5728\u5730\u56FE\u4E2D\u6DFB\u52A0\u5706\u5F62 <a class="header-anchor" href="#\u5728\u5730\u56FE\u4E2D\u6DFB\u52A0\u5706\u5F62" aria-hidden="true">#</a></h3>',8),m='{"title":"\u5706\u5F62","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u5C5E\u6027","slug":"\u5C5E\u6027"},{"level":2,"title":"\u4E8B\u4EF6","slug":"\u4E8B\u4EF6"},{"level":2,"title":"\u793A\u4F8B","slug":"\u793A\u4F8B"},{"level":3,"title":"\u5728\u5730\u56FE\u4E2D\u6DFB\u52A0\u5706\u5F62","slug":"\u5728\u5730\u56FE\u4E2D\u6DFB\u52A0\u5706\u5F62"}],"relativePath":"overlay/circle.md"}',D={},h=Object.assign(D,{setup(F){const a=c({center:{lng:116.404,lat:39.915},radius:500}),p=n=>{a.value.center=n.target.getCenter(),a.value.radius=n.target.getRadius()};return(n,k)=>{const C=s("bm-circle"),E=s("baidu-map"),o=s("RunCode");return u(),l("div",null,[i,t(o,{highligh:"%3Cdiv%20class%3D%22language-html%20line-numbers-mode%22%3E%3Cpre%20v-pre%3E%3Ccode%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%3C%2Fspan%3Etemplate%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%20%20%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%3C%2Fspan%3Ediv%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%20%20%20%20%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%3C%2Fspan%3Ebaidu-map%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20attr-name%22%3Eclass%3C%2Fspan%3E%3Cspan%20class%3D%22token%20attr-value%22%3E%3Cspan%20class%3D%22token%20punctuation%20attr-equals%22%3E%3D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3Emap%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20attr-name%22%3E%3Acenter%3C%2Fspan%3E%3Cspan%20class%3D%22token%20attr-value%22%3E%3Cspan%20class%3D%22token%20punctuation%20attr-equals%22%3E%3D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E%7Blng%3A%20116.404%2C%20lat%3A%2039.915%7D%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20attr-name%22%3E%3Azoom%3C%2Fspan%3E%3Cspan%20class%3D%22token%20attr-value%22%3E%3Cspan%20class%3D%22token%20punctuation%20attr-equals%22%3E%3D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E15%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%20%20%20%20%20%20%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%3C%2Fspan%3Ebm-circle%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20attr-name%22%3E%3Acenter%3C%2Fspan%3E%3Cspan%20class%3D%22token%20attr-value%22%3E%3Cspan%20class%3D%22token%20punctuation%20attr-equals%22%3E%3D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3EcirclePath.center%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20attr-name%22%3E%3Aradius%3C%2Fspan%3E%3Cspan%20class%3D%22token%20attr-value%22%3E%3Cspan%20class%3D%22token%20punctuation%20attr-equals%22%3E%3D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3EcirclePath.radius%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20attr-name%22%3Estroke-color%3C%2Fspan%3E%3Cspan%20class%3D%22token%20attr-value%22%3E%3Cspan%20class%3D%22token%20punctuation%20attr-equals%22%3E%3D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3Eblue%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20attr-name%22%3E%3Astroke-opacity%3C%2Fspan%3E%3Cspan%20class%3D%22token%20attr-value%22%3E%3Cspan%20class%3D%22token%20punctuation%20attr-equals%22%3E%3D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E0.5%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20attr-name%22%3E%3Astroke-weight%3C%2Fspan%3E%3Cspan%20class%3D%22token%20attr-value%22%3E%3Cspan%20class%3D%22token%20punctuation%20attr-equals%22%3E%3D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E2%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20attr-name%22%3E%40lineupdate%3C%2Fspan%3E%3Cspan%20class%3D%22token%20attr-value%22%3E%3Cspan%20class%3D%22token%20punctuation%20attr-equals%22%3E%3D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3EupdateCirclePath%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20attr-name%22%3E%3Aediting%3C%2Fspan%3E%3Cspan%20class%3D%22token%20attr-value%22%3E%3Cspan%20class%3D%22token%20punctuation%20attr-equals%22%3E%3D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3Etrue%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%2F%3C%2Fspan%3Ebm-circle%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%20%20%20%20%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%2F%3C%2Fspan%3Ebaidu-map%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%20%20%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%2F%3C%2Fspan%3Ediv%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%2F%3C%2Fspan%3Etemplate%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%0A%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%3C%2Fspan%3Escript%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20attr-name%22%3Esetup%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%3Cspan%20class%3D%22token%20script%22%3E%3Cspan%20class%3D%22token%20language-javascript%22%3E%0A%3Cspan%20class%3D%22token%20keyword%22%3Eimport%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20punctuation%22%3E%7B%3C%2Fspan%3E%20ref%20%3Cspan%20class%3D%22token%20punctuation%22%3E%7D%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20keyword%22%3Efrom%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20string%22%3E'vue'%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3B%3C%2Fspan%3E%0A%0A%3Cspan%20class%3D%22token%20keyword%22%3Econst%3C%2Fspan%3E%20circlePath%20%3Cspan%20class%3D%22token%20operator%22%3E%3D%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20function%22%3Eref%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E(%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%7B%3C%2Fspan%3E%0A%20%20%3Cspan%20class%3D%22token%20literal-property%20property%22%3Ecenter%3C%2Fspan%3E%3Cspan%20class%3D%22token%20operator%22%3E%3A%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20punctuation%22%3E%7B%3C%2Fspan%3E%0A%20%20%20%20%3Cspan%20class%3D%22token%20literal-property%20property%22%3Elng%3C%2Fspan%3E%3Cspan%20class%3D%22token%20operator%22%3E%3A%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20number%22%3E116.404%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%2C%3C%2Fspan%3E%0A%20%20%20%20%3Cspan%20class%3D%22token%20literal-property%20property%22%3Elat%3C%2Fspan%3E%3Cspan%20class%3D%22token%20operator%22%3E%3A%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20number%22%3E39.915%3C%2Fspan%3E%0A%20%20%3Cspan%20class%3D%22token%20punctuation%22%3E%7D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%2C%3C%2Fspan%3E%0A%20%20%3Cspan%20class%3D%22token%20literal-property%20property%22%3Eradius%3C%2Fspan%3E%3Cspan%20class%3D%22token%20operator%22%3E%3A%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20number%22%3E500%3C%2Fspan%3E%0A%3Cspan%20class%3D%22token%20punctuation%22%3E%7D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E)%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3B%3C%2Fspan%3E%0A%0A%3Cspan%20class%3D%22token%20keyword%22%3Econst%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20function-variable%20function%22%3EupdateCirclePath%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20operator%22%3E%3D%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20punctuation%22%3E(%3C%2Fspan%3E%3Cspan%20class%3D%22token%20parameter%22%3Ee%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E)%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20operator%22%3E%3D%3E%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20punctuation%22%3E%7B%3C%2Fspan%3E%0A%20%20circlePath%3Cspan%20class%3D%22token%20punctuation%22%3E.%3C%2Fspan%3Evalue%3Cspan%20class%3D%22token%20punctuation%22%3E.%3C%2Fspan%3Ecenter%20%3Cspan%20class%3D%22token%20operator%22%3E%3D%3C%2Fspan%3E%20e%3Cspan%20class%3D%22token%20punctuation%22%3E.%3C%2Fspan%3Etarget%3Cspan%20class%3D%22token%20punctuation%22%3E.%3C%2Fspan%3E%3Cspan%20class%3D%22token%20function%22%3EgetCenter%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E(%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E)%3C%2Fspan%3E%0A%20%20circlePath%3Cspan%20class%3D%22token%20punctuation%22%3E.%3C%2Fspan%3Evalue%3Cspan%20class%3D%22token%20punctuation%22%3E.%3C%2Fspan%3Eradius%20%3Cspan%20class%3D%22token%20operator%22%3E%3D%3C%2Fspan%3E%20e%3Cspan%20class%3D%22token%20punctuation%22%3E.%3C%2Fspan%3Etarget%3Cspan%20class%3D%22token%20punctuation%22%3E.%3C%2Fspan%3E%3Cspan%20class%3D%22token%20function%22%3EgetRadius%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E(%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E)%3C%2Fspan%3E%0A%3Cspan%20class%3D%22token%20punctuation%22%3E%7D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3B%3C%2Fspan%3E%0A%3C%2Fspan%3E%3C%2Fspan%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%2F%3C%2Fspan%3Escript%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%3C%2Fcode%3E%3C%2Fpre%3E%0A%3Cdiv%20class%3D%22line-numbers-wrapper%22%3E%3Cspan%20class%3D%22line-number%22%3E1%3C%2Fspan%3E%3Cbr%3E%3Cspan%20class%3D%22line-number%22%3E2%3C%2Fspan%3E%3Cbr%3E%3Cspan%20class%3D%22line-number%22%3E3%3C%2Fspan%3E%3Cbr%3E%3Cspan%20class%3D%22line-number%22%3E4%3C%2Fspan%3E%3Cbr%3E%3Cspan%20class%3D%22line-number%22%3E5%3C%2Fspan%3E%3Cbr%3E%3Cspan%20class%3D%22line-number%22%3E6%3C%2Fspan%3E%3Cbr%3E%3Cspan%20class%3D%22line-number%22%3E7%3C%2Fspan%3E%3Cbr%3E%3Cspan%20class%3D%22line-number%22%3E8%3C%2Fspan%3E%3Cbr%3E%3Cspan%20class%3D%22line-number%22%3E9%3C%2Fspan%3E%3Cbr%3E%3Cspan%20class%3D%22line-number%22%3E10%3C%2Fspan%3E%3Cbr%3E%3Cspan%20class%3D%22line-number%22%3E11%3C%2Fspan%3E%3Cbr%3E%3Cspan%20class%3D%22line-number%22%3E12%3C%2Fspan%3E%3Cbr%3E%3Cspan%20class%3D%22line-number%22%3E13%3C%2Fspan%3E%3Cbr%3E%3Cspan%20class%3D%22line-number%22%3E14%3C%2Fspan%3E%3Cbr%3E%3Cspan%20class%3D%22line-number%22%3E15%3C%2Fspan%3E%3Cbr%3E%3Cspan%20class%3D%22line-number%22%3E16%3C%2Fspan%3E%3Cbr%3E%3Cspan%20class%3D%22line-number%22%3E17%3C%2Fspan%3E%3Cbr%3E%3Cspan%20class%3D%22line-number%22%3E18%3C%2Fspan%3E%3Cbr%3E%3Cspan%20class%3D%22line-number%22%3E19%3C%2Fspan%3E%3Cbr%3E%3Cspan%20class%3D%22line-number%22%3E20%3C%2Fspan%3E%3Cbr%3E%3Cspan%20class%3D%22line-number%22%3E21%3C%2Fspan%3E%3Cbr%3E%3Cspan%20class%3D%22line-number%22%3E22%3C%2Fspan%3E%3Cbr%3E%3Cspan%20class%3D%22line-number%22%3E23%3C%2Fspan%3E%3Cbr%3E%3Cspan%20class%3D%22line-number%22%3E24%3C%2Fspan%3E%3Cbr%3E%3C%2Fdiv%3E%3C%2Fdiv%3E"},{default:e(()=>[d("div",null,[t(E,{class:"map",center:{lng:116.404,lat:39.915},zoom:15},{default:e(()=>[t(C,{center:a.value.center,radius:a.value.radius,"stroke-color":"blue","stroke-opacity":.5,"stroke-weight":2,onLineupdate:p,editing:!0},null,8,["center","radius","stroke-opacity"])]),_:1},8,["center"])])]),_:1})])}}});export{m as __pageData,h as default};
