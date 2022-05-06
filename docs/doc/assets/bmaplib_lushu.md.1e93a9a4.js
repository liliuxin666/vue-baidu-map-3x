import{_ as x}from"./chunks/preload-helper.9b025449.js";import{r as t,g as T,c as S,d as n,a as b,w as V,t as B,k,v as P,l as g,b as v,f as m,o as h,h as C,i as A,j as D}from"./app.ea622ec2.js";const N=v('<h1 id="\u8DEF\u4E66" tabindex="-1">\u8DEF\u4E66 <a class="header-anchor" href="#\u8DEF\u4E66" aria-hidden="true">#</a></h1><p><code>bml-lushu</code> \u662F\u7528\u6765\u8FD8\u539F\u884C\u8FDB\u8F68\u8FF9\u7684\u7EC4\u4EF6\u3002</p><h2 id="\u5C5E\u6027" tabindex="-1">\u5C5E\u6027 <a class="header-anchor" href="#\u5C5E\u6027" aria-hidden="true">#</a></h2><table><thead><tr><th>\u5C5E\u6027\u540D</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th><th>\u63CF\u8FF0</th></tr></thead><tbody><tr><td>play</td><td>Boolean</td><td>true</td><td>\u662F\u5426\u884C\u8FDB</td></tr><tr><td>path</td><td>Array[<code>{lng, lat}</code>]</td><td>[]</td><td>\u6784\u6210\u8DEF\u7EBF\u7684\u5750\u6807\u70B9\u6570\u7EC4</td></tr><tr><td>landmarkPois</td><td>Array[<code>{lng, lat, html, pauseTime}</code>]</td><td>[]</td><td>\u8981\u5728\u8986\u76D6\u7269\u79FB\u52A8\u8FC7\u7A0B\u4E2D\u663E\u793A\u7684\u7279\u6B8A\u70B9</td></tr><tr><td>icon</td><td>Icon</td><td></td><td>\u8986\u76D6\u7269\u7684\u56FE\u6807</td></tr><tr><td>speed</td><td>Number</td><td>4000</td><td>\u8986\u76D6\u7269\u79FB\u52A8\u901F\u5EA6</td></tr><tr><td>autoView</td><td>Boolean</td><td>false</td><td>\u662F\u5426\u81EA\u52A8\u8C03\u6574\u8DEF\u7EBF\u89C6\u91CE</td></tr><tr><td>rotation</td><td>Boolean</td><td>false</td><td>\u79FB\u52A8\u7269\u4F53\u662F\u5426\u968F\u8DEF\u5F84\u65CB\u8F6C\u671D\u5411</td></tr><tr><td>infoWindow</td><td>Boolean</td><td>true</td><td>\u662F\u5426\u5F00\u542F\u79FB\u52A8\u7269\u4F53\u4E0A\u7684\u4FE1\u606F\u7A97\u4F53</td></tr><tr><td>content</td><td>String</td><td></td><td>\u4FE1\u606F\u7A97\u4F53\u4E2D\u7684\u5185\u5BB9\uFF0C\u65E0\u5185\u5BB9\u5219\u4E0D\u663E\u793A\u4FE1\u606F\u7A97\u4F53</td></tr></tbody></table><h2 id="\u4E8B\u4EF6" tabindex="-1">\u4E8B\u4EF6 <a class="header-anchor" href="#\u4E8B\u4EF6" aria-hidden="true">#</a></h2><table><thead><tr><th>\u4E8B\u4EF6\u540D</th><th>\u53C2\u6570</th><th>\u63CF\u8FF0</th></tr></thead><tbody><tr><td>start</td><td>this</td><td>\u5F00\u59CB\u79FB\u52A8</td></tr><tr><td>stop</td><td>this</td><td>\u505C\u6B62\u672C\u6B21\u79FB\u52A8</td></tr><tr><td>pause</td><td>this</td><td>\u6682\u505C\u79FB\u52A8</td></tr></tbody></table><h2 id="\u793A\u4F8B" tabindex="-1">\u793A\u4F8B <a class="header-anchor" href="#\u793A\u4F8B" aria-hidden="true">#</a></h2><h3 id="\u8FD8\u539F\u5929\u5B89\u95E8\u5230\u767E\u5EA6\u5927\u53A6\u7684\u9A7E\u8F66\u8DEF\u5F84" tabindex="-1">\u8FD8\u539F\u5929\u5B89\u95E8\u5230\u767E\u5EA6\u5927\u53A6\u7684\u9A7E\u8F66\u8DEF\u5F84 <a class="header-anchor" href="#\u8FD8\u539F\u5929\u5B89\u95E8\u5230\u767E\u5EA6\u5927\u53A6\u7684\u9A7E\u8F66\u8DEF\u5F84" aria-hidden="true">#</a></h3>',8),I=n("thead",null,[n("tr",null,[n("th",null,"\u64CD\u4F5C"),n("th",null,"\u65CB\u8F6C"),n("th",null,"\u884C\u8FDB\u901F\u5EA6"),n("th",null,"\u7A97\u4F53\u5185\u5BB9")])],-1),R=v(`<div class="language-html line-numbers-mode"><pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>baidu-map</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>map<span class="token punctuation">&quot;</span></span> <span class="token attr-name">:center</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>{lng: 116.404, lat: 39.915}<span class="token punctuation">&quot;</span></span> <span class="token attr-name">:zoom</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>11<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>bm-driving</span> <span class="token attr-name">start</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>\u5929\u5B89\u95E8<span class="token punctuation">&quot;</span></span> <span class="token attr-name">end</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>\u767E\u5EA6\u5927\u53A6<span class="token punctuation">&quot;</span></span> <span class="token attr-name">@searchcomplete</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>handleSearchComplete<span class="token punctuation">&quot;</span></span> <span class="token attr-name">:panel</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>false<span class="token punctuation">&quot;</span></span> <span class="token attr-name">:autoViewport</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>true<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>bm-driving</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>bml-lushu</span> <span class="token attr-name">@start</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>changeBtnText(<span class="token punctuation">&#39;</span>pause<span class="token punctuation">&#39;</span>)<span class="token punctuation">&quot;</span></span> <span class="token attr-name">@stop</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>changeBtnText(<span class="token punctuation">&#39;</span>play_arrow<span class="token punctuation">&#39;</span>)<span class="token punctuation">&quot;</span></span> <span class="token attr-name">@pause</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>changeBtnText(<span class="token punctuation">&#39;</span>play_arrow<span class="token punctuation">&#39;</span>)<span class="token punctuation">&quot;</span></span> <span class="token attr-name">:path</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>path<span class="token punctuation">&quot;</span></span> <span class="token attr-name">:rotation</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>rotation<span class="token punctuation">&quot;</span></span> <span class="token attr-name">:content</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>content<span class="token punctuation">&quot;</span></span> <span class="token attr-name">:infoWindow</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>true<span class="token punctuation">&quot;</span></span> <span class="token attr-name">:speed</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>speed<span class="token punctuation">&quot;</span></span> <span class="token attr-name">:icon</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>icon<span class="token punctuation">&quot;</span></span> <span class="token attr-name">:play</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>play<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>bml-lushu</span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>baidu-map</span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>table</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>thead</span><span class="token punctuation">&gt;</span></span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>tr</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>th</span><span class="token punctuation">&gt;</span></span>\u64CD\u4F5C<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>th</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>th</span><span class="token punctuation">&gt;</span></span>\u65CB\u8F6C<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>th</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>th</span><span class="token punctuation">&gt;</span></span>\u884C\u8FDB\u901F\u5EA6<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>th</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>th</span><span class="token punctuation">&gt;</span></span>\u7A97\u4F53\u5185\u5BB9<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>th</span><span class="token punctuation">&gt;</span></span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>tr</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>thead</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>tbody</span><span class="token punctuation">&gt;</span></span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>tr</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>td</span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>toggle<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>{{btnText}}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>td</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>td</span><span class="token punctuation">&gt;</span></span>
              <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">v-model</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>rotation<span class="token punctuation">&quot;</span></span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>radio<span class="token punctuation">&quot;</span></span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>lushu<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>td</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>td</span><span class="token punctuation">&gt;</span></span>
              <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">v-model.number</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>speed<span class="token punctuation">&quot;</span></span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>text<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>td</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>td</span><span class="token punctuation">&gt;</span></span>
              <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">v-model</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>content<span class="token punctuation">&quot;</span></span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>text<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>td</span><span class="token punctuation">&gt;</span></span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>tr</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>tbody</span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>table</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>


<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">setup</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">import</span> <span class="token punctuation">{</span> ref <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span>  BmlLushu <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;/components&#39;</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> btnText <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token string">&#39;play_arrow&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> path <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> rotation <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> play <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token boolean">false</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> content <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token string">&#39;\u4E00\u8A00\u4E0D\u5408\u5C31\u5F00\u8F66&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> speed <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token number">5000</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> icon <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">url</span><span class="token operator">:</span> <span class="token string">&#39;http://api.map.baidu.com/library/LuShu/1.2/examples/car.png&#39;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">size</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">width</span><span class="token operator">:</span> <span class="token number">52</span><span class="token punctuation">,</span>
    <span class="token literal-property property">height</span><span class="token operator">:</span> <span class="token number">26</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">opts</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">anchor</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">width</span><span class="token operator">:</span> <span class="token number">27</span><span class="token punctuation">,</span>
      <span class="token literal-property property">height</span><span class="token operator">:</span> <span class="token number">13</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> <span class="token function-variable function">changeBtnText</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">val</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  btnText<span class="token punctuation">.</span>value <span class="token operator">=</span> val
  <span class="token keyword">if</span> <span class="token punctuation">(</span>val <span class="token operator">===</span> <span class="token string">&#39;play_arrow&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    play<span class="token punctuation">.</span>value <span class="token operator">=</span> <span class="token boolean">false</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> <span class="token function-variable function">toggle</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  play<span class="token punctuation">.</span>value <span class="token operator">=</span> <span class="token operator">!</span>play<span class="token punctuation">.</span>value
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> <span class="token function-variable function">handleSearchComplete</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">res</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  path<span class="token punctuation">.</span>value <span class="token operator">=</span> res<span class="token punctuation">.</span><span class="token function">getPlan</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">getRoute</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">getPath</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br><span class="line-number">64</span><br><span class="line-number">65</span><br><span class="line-number">66</span><br><span class="line-number">67</span><br><span class="line-number">68</span><br><span class="line-number">69</span><br><span class="line-number">70</span><br><span class="line-number">71</span><br><span class="line-number">72</span><br><span class="line-number">73</span><br><span class="line-number">74</span><br></div></div>`,1),M='{"title":"\u8DEF\u4E66","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u5C5E\u6027","slug":"\u5C5E\u6027"},{"level":2,"title":"\u4E8B\u4EF6","slug":"\u4E8B\u4EF6"},{"level":2,"title":"\u793A\u4F8B","slug":"\u793A\u4F8B"},{"level":3,"title":"\u8FD8\u539F\u5929\u5B89\u95E8\u5230\u767E\u5EA6\u5927\u53A6\u7684\u9A7E\u8F66\u8DEF\u5F84","slug":"\u8FD8\u539F\u5929\u5B89\u95E8\u5230\u767E\u5EA6\u5927\u53A6\u7684\u9A7E\u8F66\u8DEF\u5F84"}],"relativePath":"bmaplib/lushu.md"}',E={},U=Object.assign(E,{setup(L){const i=t("play_arrow"),d=t([]),o=t(!0),e=t(!1),l=t("\u4E00\u8A00\u4E0D\u5408\u5C31\u5F00\u8F66"),c=t(5e3),q=t({url:"http://api.map.baidu.com/library/LuShu/1.2/examples/car.png",size:{width:52,height:26},opts:{anchor:{width:27,height:13}}}),u=t(null);T(()=>{x(()=>import("./chunks/Lushu.262f3a64.js"),["assets/chunks/Lushu.262f3a64.js","assets/app.ea622ec2.js"]).then(p=>{u.value=p.default})});const r=p=>{i.value=p,p==="play_arrow"&&(e.value=!1)},y=()=>{e.value=!e.value},f=p=>{d.value=p.getPlan(0).getRoute(0).getPath()};return(p,a)=>{const _=m("bm-driving"),w=m("baidu-map");return h(),S("div",null,[N,n("div",null,[b(w,{class:"map",center:{lng:116.404,lat:39.915},zoom:11},{default:V(()=>[b(_,{start:"\u5929\u5B89\u95E8",end:"\u767E\u5EA6\u5927\u53A6",onSearchcomplete:f,panel:!1,autoViewport:!0}),u.value?(h(),C(A(u.value),{key:0,onStart:a[0]||(a[0]=s=>r("pause")),onStop:a[1]||(a[1]=s=>r("play_arrow")),onPause:a[2]||(a[2]=s=>r("play_arrow")),path:d.value,rotation:o.value,content:l.value,infoWindow:!0,speed:c.value,icon:q.value,play:e.value},null,8,["path","rotation","content","speed","icon","play"])):D("",!0)]),_:1},8,["center"]),n("table",null,[I,n("tbody",null,[n("tr",null,[n("td",null,[n("span",{onClick:y},B(i.value),1)]),n("td",null,[k(n("input",{"onUpdate:modelValue":a[3]||(a[3]=s=>o.value=s),type:"radio",name:"lushu"},null,512),[[P,o.value]])]),n("td",null,[k(n("input",{"onUpdate:modelValue":a[4]||(a[4]=s=>c.value=s),type:"text"},null,512),[[g,c.value,void 0,{number:!0}]])]),n("td",null,[k(n("input",{"onUpdate:modelValue":a[5]||(a[5]=s=>l.value=s),type:"text"},null,512),[[g,l.value]])])])])])]),R])}}});export{M as __pageData,U as default};
