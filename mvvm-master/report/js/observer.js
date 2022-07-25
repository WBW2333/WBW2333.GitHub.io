/* automatically generated by JSCoverage - do not edit */
try {
  if (typeof top === 'object' && top !== null && typeof top.opener === 'object' && top.opener !== null) {
    // this is a browser window that was opened from another window

    if (! top.opener._$jscoverage) {
      top.opener._$jscoverage = {};
    }
  }
}
catch (e) {}

try {
  if (typeof top === 'object' && top !== null) {
    // this is a browser window

    try {
      if (typeof top.opener === 'object' && top.opener !== null && top.opener._$jscoverage) {
        top._$jscoverage = top.opener._$jscoverage;
      }
    }
    catch (e) {}

    if (! top._$jscoverage) {
      top._$jscoverage = {};
    }
  }
}
catch (e) {}

try {
  if (typeof top === 'object' && top !== null && top._$jscoverage) {
    _$jscoverage = top._$jscoverage;
  }
}
catch (e) {}
if (typeof _$jscoverage !== 'object') {
  _$jscoverage = {};
}
if (! _$jscoverage['js/observer.js']) {
  _$jscoverage['js/observer.js'] = [];
  _$jscoverage['js/observer.js'][1] = 0;
  _$jscoverage['js/observer.js'][2] = 0;
  _$jscoverage['js/observer.js'][3] = 0;
  _$jscoverage['js/observer.js'][6] = 0;
  _$jscoverage['js/observer.js'][9] = 0;
  _$jscoverage['js/observer.js'][10] = 0;
  _$jscoverage['js/observer.js'][11] = 0;
  _$jscoverage['js/observer.js'][15] = 0;
  _$jscoverage['js/observer.js'][19] = 0;
  _$jscoverage['js/observer.js'][20] = 0;
  _$jscoverage['js/observer.js'][22] = 0;
  _$jscoverage['js/observer.js'][26] = 0;
  _$jscoverage['js/observer.js'][27] = 0;
  _$jscoverage['js/observer.js'][28] = 0;
  _$jscoverage['js/observer.js'][30] = 0;
  _$jscoverage['js/observer.js'][33] = 0;
  _$jscoverage['js/observer.js'][34] = 0;
  _$jscoverage['js/observer.js'][35] = 0;
  _$jscoverage['js/observer.js'][37] = 0;
  _$jscoverage['js/observer.js'][39] = 0;
  _$jscoverage['js/observer.js'][41] = 0;
  _$jscoverage['js/observer.js'][47] = 0;
  _$jscoverage['js/observer.js'][48] = 0;
  _$jscoverage['js/observer.js'][49] = 0;
  _$jscoverage['js/observer.js'][51] = 0;
}
_$jscoverage['js/observer.js'].source = ["<span class=\"k\">function</span> Observer<span class=\"k\">(</span>data<span class=\"k\">)</span> <span class=\"k\">{</span>","    <span class=\"k\">this</span><span class=\"k\">.</span>data <span class=\"k\">=</span> data<span class=\"k\">;</span>","    <span class=\"k\">this</span><span class=\"k\">.</span>walk<span class=\"k\">(</span>data<span class=\"k\">);</span>","<span class=\"k\">}</span>","","Observer<span class=\"k\">.</span>prototype <span class=\"k\">=</span> <span class=\"k\">{</span>","    constructor<span class=\"k\">:</span> Observer<span class=\"k\">,</span>","    walk<span class=\"k\">:</span> <span class=\"k\">function</span><span class=\"k\">(</span>data<span class=\"k\">)</span> <span class=\"k\">{</span>","        <span class=\"k\">var</span> me <span class=\"k\">=</span> <span class=\"k\">this</span><span class=\"k\">;</span>","        Object<span class=\"k\">.</span>keys<span class=\"k\">(</span>data<span class=\"k\">).</span>forEach<span class=\"k\">(</span><span class=\"k\">function</span><span class=\"k\">(</span>key<span class=\"k\">)</span> <span class=\"k\">{</span>","            me<span class=\"k\">.</span>convert<span class=\"k\">(</span>key<span class=\"k\">,</span> data<span class=\"k\">[</span>key<span class=\"k\">]);</span>","        <span class=\"k\">}</span><span class=\"k\">);</span>","    <span class=\"k\">}</span><span class=\"k\">,</span>","    convert<span class=\"k\">:</span> <span class=\"k\">function</span><span class=\"k\">(</span>key<span class=\"k\">,</span> val<span class=\"k\">)</span> <span class=\"k\">{</span>","        <span class=\"k\">this</span><span class=\"k\">.</span>defineReactive<span class=\"k\">(</span><span class=\"k\">this</span><span class=\"k\">.</span>data<span class=\"k\">,</span> key<span class=\"k\">,</span> val<span class=\"k\">);</span>","    <span class=\"k\">}</span><span class=\"k\">,</span>","","    defineReactive<span class=\"k\">:</span> <span class=\"k\">function</span><span class=\"k\">(</span>data<span class=\"k\">,</span> key<span class=\"k\">,</span> val<span class=\"k\">)</span> <span class=\"k\">{</span>","        <span class=\"k\">var</span> dep <span class=\"k\">=</span> <span class=\"k\">new</span> Dep<span class=\"k\">();</span>","        <span class=\"k\">var</span> childObj <span class=\"k\">=</span> observe<span class=\"k\">(</span>val<span class=\"k\">);</span>","","        Object<span class=\"k\">.</span>defineProperty<span class=\"k\">(</span>data<span class=\"k\">,</span> key<span class=\"k\">,</span> <span class=\"k\">{</span>","            enumerable<span class=\"k\">:</span> <span class=\"k\">true</span><span class=\"k\">,</span> <span class=\"c\">// &#229;&#143;&#175;&#230;&#158;&#154;&#228;&#184;&#190;</span>","            configurable<span class=\"k\">:</span> <span class=\"k\">false</span><span class=\"k\">,</span> <span class=\"c\">// &#228;&#184;&#141;&#232;&#131;&#189;&#229;&#134;&#141;define</span>","            get<span class=\"k\">:</span> <span class=\"k\">function</span><span class=\"k\">()</span> <span class=\"k\">{</span>","                console<span class=\"k\">.</span>log<span class=\"k\">(</span><span class=\"s\">\"get option is made by observer\"</span><span class=\"k\">)</span>","                <span class=\"k\">if</span> <span class=\"k\">(</span>Dep<span class=\"k\">.</span>target<span class=\"k\">)</span> <span class=\"k\">{</span>","                    dep<span class=\"k\">.</span>depend<span class=\"k\">();</span>","                <span class=\"k\">}</span>","                <span class=\"k\">return</span> val<span class=\"k\">;</span>","            <span class=\"k\">}</span><span class=\"k\">,</span>","            set<span class=\"k\">:</span> <span class=\"k\">function</span><span class=\"k\">(</span>newVal<span class=\"k\">)</span> <span class=\"k\">{</span>","                console<span class=\"k\">.</span>log<span class=\"k\">(</span><span class=\"s\">\"set is made by observer\"</span><span class=\"k\">)</span>","                <span class=\"k\">if</span> <span class=\"k\">(</span>newVal <span class=\"k\">===</span> val<span class=\"k\">)</span> <span class=\"k\">{</span>","                    <span class=\"k\">return</span><span class=\"k\">;</span>","                <span class=\"k\">}</span>","                val <span class=\"k\">=</span> newVal<span class=\"k\">;</span>","                <span class=\"c\">// &#230;&#150;&#176;&#231;&#154;&#132;&#229;&#128;&#188;&#230;&#152;&#175;object&#231;&#154;&#132;&#232;&#175;&#157;&#239;&#188;&#140;&#232;&#191;&#155;&#232;&#161;&#140;&#231;&#155;&#145;&#229;&#144;&#172;</span>","                childObj <span class=\"k\">=</span> observe<span class=\"k\">(</span>newVal<span class=\"k\">);</span>","                <span class=\"c\">// &#233;&#128;&#154;&#231;&#159;&#165;&#232;&#174;&#162;&#233;&#152;&#133;&#232;&#128;&#133;</span>","                dep<span class=\"k\">.</span>notify<span class=\"k\">();</span>","            <span class=\"k\">}</span>","        <span class=\"k\">}</span><span class=\"k\">);</span>","    <span class=\"k\">}</span>","<span class=\"k\">}</span><span class=\"k\">;</span>","","<span class=\"k\">function</span> observe<span class=\"k\">(</span>value<span class=\"k\">,</span> vm<span class=\"k\">)</span> <span class=\"k\">{</span>","    <span class=\"k\">if</span> <span class=\"k\">(!</span>value <span class=\"k\">||</span> <span class=\"k\">typeof</span> value <span class=\"k\">!==</span> <span class=\"s\">'object'</span><span class=\"k\">)</span> <span class=\"k\">{</span>","        <span class=\"k\">return</span><span class=\"k\">;</span>","    <span class=\"k\">}</span>","    <span class=\"k\">return</span> <span class=\"k\">new</span> Observer<span class=\"k\">(</span>value<span class=\"k\">);</span>","<span class=\"k\">}</span>"];
_$jscoverage['js/observer.js'][1]++;
function Observer(data) {
  _$jscoverage['js/observer.js'][2]++;
  this.data = data;
  _$jscoverage['js/observer.js'][3]++;
  this.walk(data);
}
_$jscoverage['js/observer.js'][6]++;
Observer.prototype = {constructor: Observer, walk: (function (data) {
  _$jscoverage['js/observer.js'][9]++;
  var me = this;
  _$jscoverage['js/observer.js'][10]++;
  Object.keys(data).forEach((function (key) {
  _$jscoverage['js/observer.js'][11]++;
  me.convert(key, data[key]);
}));
}), convert: (function (key, val) {
  _$jscoverage['js/observer.js'][15]++;
  this.defineReactive(this.data, key, val);
}), defineReactive: (function (data, key, val) {
  _$jscoverage['js/observer.js'][19]++;
  var dep = new Dep();
  _$jscoverage['js/observer.js'][20]++;
  var childObj = observe(val);
  _$jscoverage['js/observer.js'][22]++;
  Object.defineProperty(data, key, {enumerable: true, configurable: false, get: (function () {
  _$jscoverage['js/observer.js'][26]++;
  console.log("get option is made by observer");
  _$jscoverage['js/observer.js'][27]++;
  if (Dep.target) {
    _$jscoverage['js/observer.js'][28]++;
    dep.depend();
  }
  _$jscoverage['js/observer.js'][30]++;
  return val;
}), set: (function (newVal) {
  _$jscoverage['js/observer.js'][33]++;
  console.log("set is made by observer");
  _$jscoverage['js/observer.js'][34]++;
  if ((newVal === val)) {
    _$jscoverage['js/observer.js'][35]++;
    return;
  }
  _$jscoverage['js/observer.js'][37]++;
  val = newVal;
  _$jscoverage['js/observer.js'][39]++;
  childObj = observe(newVal);
  _$jscoverage['js/observer.js'][41]++;
  dep.notify();
})});
})};
_$jscoverage['js/observer.js'][47]++;
function observe(value, vm) {
  _$jscoverage['js/observer.js'][48]++;
  if (((! value) || ((typeof value) !== "object"))) {
    _$jscoverage['js/observer.js'][49]++;
    return;
  }
  _$jscoverage['js/observer.js'][51]++;
  return new Observer(value);
}
