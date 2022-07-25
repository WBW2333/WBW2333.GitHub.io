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
if (! _$jscoverage['js/watcher.js']) {
  _$jscoverage['js/watcher.js'] = [];
  _$jscoverage['js/watcher.js'][1] = 0;
  _$jscoverage['js/watcher.js'][2] = 0;
  _$jscoverage['js/watcher.js'][3] = 0;
  _$jscoverage['js/watcher.js'][4] = 0;
  _$jscoverage['js/watcher.js'][5] = 0;
  _$jscoverage['js/watcher.js'][7] = 0;
  _$jscoverage['js/watcher.js'][8] = 0;
  _$jscoverage['js/watcher.js'][11] = 0;
  _$jscoverage['js/watcher.js'][13] = 0;
  _$jscoverage['js/watcher.js'][16] = 0;
  _$jscoverage['js/watcher.js'][19] = 0;
  _$jscoverage['js/watcher.js'][22] = 0;
  _$jscoverage['js/watcher.js'][23] = 0;
  _$jscoverage['js/watcher.js'][24] = 0;
  _$jscoverage['js/watcher.js'][25] = 0;
  _$jscoverage['js/watcher.js'][26] = 0;
  _$jscoverage['js/watcher.js'][44] = 0;
  _$jscoverage['js/watcher.js'][45] = 0;
  _$jscoverage['js/watcher.js'][46] = 0;
  _$jscoverage['js/watcher.js'][50] = 0;
  _$jscoverage['js/watcher.js'][51] = 0;
  _$jscoverage['js/watcher.js'][52] = 0;
  _$jscoverage['js/watcher.js'][53] = 0;
  _$jscoverage['js/watcher.js'][57] = 0;
  _$jscoverage['js/watcher.js'][59] = 0;
  _$jscoverage['js/watcher.js'][61] = 0;
  _$jscoverage['js/watcher.js'][62] = 0;
  _$jscoverage['js/watcher.js'][63] = 0;
  _$jscoverage['js/watcher.js'][64] = 0;
  _$jscoverage['js/watcher.js'][66] = 0;
}
_$jscoverage['js/watcher.js'].source = ["<span class=\"k\">function</span> Watcher<span class=\"k\">(</span>vm<span class=\"k\">,</span> expOrFn<span class=\"k\">,</span> cb<span class=\"k\">)</span> <span class=\"k\">{</span> <span class=\"c\">//&#228;&#188;&#160;&#233;&#128;&#146;&#231;&#154;&#132;&#229;&#143;&#130;&#230;&#149;&#176;&#239;&#188;&#140;vm&#230;&#152;&#175;mvvm&#230;&#161;&#134;&#230;&#158;&#182;&#229;&#175;&#185;&#232;&#177;&#161;&#239;&#188;&#140;expOrFn&#230;&#152;&#175;&#228;&#188;&#160;&#233;&#128;&#146;&#231;&#154;&#132;&#228;&#184;&#128;&#228;&#184;&#170;&#229;&#135;&#189;&#230;&#149;&#176;</span>","    <span class=\"k\">this</span><span class=\"k\">.</span>cb <span class=\"k\">=</span> cb<span class=\"k\">;</span>","    <span class=\"k\">this</span><span class=\"k\">.</span>vm <span class=\"k\">=</span> vm<span class=\"k\">;</span>","    <span class=\"k\">this</span><span class=\"k\">.</span>expOrFn <span class=\"k\">=</span> expOrFn<span class=\"k\">;</span>","    <span class=\"k\">this</span><span class=\"k\">.</span>depIds <span class=\"k\">=</span> <span class=\"k\">{}</span><span class=\"k\">;</span>","","    <span class=\"k\">if</span> <span class=\"k\">(</span><span class=\"k\">typeof</span> expOrFn <span class=\"k\">===</span> <span class=\"s\">'function'</span><span class=\"k\">)</span> <span class=\"k\">{</span>","        <span class=\"k\">this</span><span class=\"k\">.</span>getter <span class=\"k\">=</span> expOrFn<span class=\"k\">;</span>","    <span class=\"k\">}</span>","    <span class=\"k\">else</span> <span class=\"k\">{</span>","        <span class=\"k\">this</span><span class=\"k\">.</span>getter <span class=\"k\">=</span> <span class=\"k\">this</span><span class=\"k\">.</span>parseGetter<span class=\"k\">(</span>expOrFn<span class=\"k\">.</span>trim<span class=\"k\">());</span>","    <span class=\"k\">}</span>","    <span class=\"k\">this</span><span class=\"k\">.</span>value <span class=\"k\">=</span> <span class=\"k\">this</span><span class=\"k\">.</span>get<span class=\"k\">();</span>","<span class=\"k\">}</span>","","Watcher<span class=\"k\">.</span>prototype <span class=\"k\">=</span> <span class=\"k\">{</span>","    constructor<span class=\"k\">:</span> Watcher<span class=\"k\">,</span>","    update<span class=\"k\">:</span> <span class=\"k\">function</span><span class=\"k\">()</span> <span class=\"k\">{</span>","        <span class=\"k\">this</span><span class=\"k\">.</span>run<span class=\"k\">();</span>","    <span class=\"k\">}</span><span class=\"k\">,</span>","    run<span class=\"k\">:</span> <span class=\"k\">function</span><span class=\"k\">()</span> <span class=\"k\">{</span>","        <span class=\"k\">var</span> value <span class=\"k\">=</span> <span class=\"k\">this</span><span class=\"k\">.</span>get<span class=\"k\">();</span>","        <span class=\"k\">var</span> oldVal <span class=\"k\">=</span> <span class=\"k\">this</span><span class=\"k\">.</span>value<span class=\"k\">;</span>","        <span class=\"k\">if</span> <span class=\"k\">(</span>value <span class=\"k\">!==</span> oldVal<span class=\"k\">)</span> <span class=\"k\">{</span>","            <span class=\"k\">this</span><span class=\"k\">.</span>value <span class=\"k\">=</span> value<span class=\"k\">;</span>","            <span class=\"k\">this</span><span class=\"k\">.</span>cb<span class=\"k\">.</span>call<span class=\"k\">(</span><span class=\"k\">this</span><span class=\"k\">.</span>vm<span class=\"k\">,</span> value<span class=\"k\">,</span> oldVal<span class=\"k\">);</span>","        <span class=\"k\">}</span>","    <span class=\"k\">}</span><span class=\"k\">,</span>","    addDep<span class=\"k\">:</span> <span class=\"k\">function</span><span class=\"k\">(</span>dep<span class=\"k\">)</span> <span class=\"k\">{</span> <span class=\"c\">//&#230;&#183;&#187;&#229;&#138;&#160;&#232;&#174;&#162;&#233;&#152;&#133;&#232;&#128;&#133;dep</span>","        <span class=\"c\">// 1. &#230;&#175;&#143;&#230;&#172;&#161;&#232;&#176;&#131;&#231;&#148;&#168;run()&#231;&#154;&#132;&#230;&#151;&#182;&#229;&#128;&#153;&#228;&#188;&#154;&#232;&#167;&#166;&#229;&#143;&#145;&#231;&#155;&#184;&#229;&#186;&#148;&#229;&#177;&#158;&#230;&#128;&#167;&#231;&#154;&#132;getter</span>","        <span class=\"c\">// getter&#233;&#135;&#140;&#233;&#157;&#162;&#228;&#188;&#154;&#232;&#167;&#166;&#229;&#143;&#145;dep.depend()&#239;&#188;&#140;&#231;&#187;&#167;&#232;&#128;&#140;&#232;&#167;&#166;&#229;&#143;&#145;&#232;&#191;&#153;&#233;&#135;&#140;&#231;&#154;&#132;addDep</span>","        <span class=\"c\">// 2. &#229;&#129;&#135;&#229;&#166;&#130;&#231;&#155;&#184;&#229;&#186;&#148;&#229;&#177;&#158;&#230;&#128;&#167;&#231;&#154;&#132;dep.id&#229;&#183;&#178;&#231;&#187;&#143;&#229;&#156;&#168;&#229;&#189;&#147;&#229;&#137;&#141;watcher&#231;&#154;&#132;depIds&#233;&#135;&#140;&#239;&#188;&#140;&#232;&#175;&#180;&#230;&#152;&#142;&#228;&#184;&#141;&#230;&#152;&#175;&#228;&#184;&#128;&#228;&#184;&#170;&#230;&#150;&#176;&#231;&#154;&#132;&#229;&#177;&#158;&#230;&#128;&#167;&#239;&#188;&#140;&#228;&#187;&#133;&#228;&#187;&#133;&#230;&#152;&#175;&#230;&#148;&#185;&#229;&#143;&#152;&#228;&#186;&#134;&#229;&#133;&#182;&#229;&#128;&#188;&#232;&#128;&#140;&#229;&#183;&#178;</span>","        <span class=\"c\">// &#229;&#136;&#153;&#228;&#184;&#141;&#233;&#156;&#128;&#232;&#166;&#129;&#229;&#176;&#134;&#229;&#189;&#147;&#229;&#137;&#141;watcher&#230;&#183;&#187;&#229;&#138;&#160;&#229;&#136;&#176;&#232;&#175;&#165;&#229;&#177;&#158;&#230;&#128;&#167;&#231;&#154;&#132;dep&#233;&#135;&#140;</span>","        <span class=\"c\">// 3. &#229;&#129;&#135;&#229;&#166;&#130;&#231;&#155;&#184;&#229;&#186;&#148;&#229;&#177;&#158;&#230;&#128;&#167;&#230;&#152;&#175;&#230;&#150;&#176;&#231;&#154;&#132;&#229;&#177;&#158;&#230;&#128;&#167;&#239;&#188;&#140;&#229;&#136;&#153;&#229;&#176;&#134;&#229;&#189;&#147;&#229;&#137;&#141;watcher&#230;&#183;&#187;&#229;&#138;&#160;&#229;&#136;&#176;&#230;&#150;&#176;&#229;&#177;&#158;&#230;&#128;&#167;&#231;&#154;&#132;dep&#233;&#135;&#140;</span>","        <span class=\"c\">// &#229;&#166;&#130;&#233;&#128;&#154;&#232;&#191;&#135; vm.child = {name: 'a'} &#230;&#148;&#185;&#229;&#143;&#152;&#228;&#186;&#134; child.name &#231;&#154;&#132;&#229;&#128;&#188;&#239;&#188;&#140;child.name &#229;&#176;&#177;&#230;&#152;&#175;&#228;&#184;&#170;&#230;&#150;&#176;&#229;&#177;&#158;&#230;&#128;&#167;</span>","        <span class=\"c\">// &#229;&#136;&#153;&#233;&#156;&#128;&#232;&#166;&#129;&#229;&#176;&#134;&#229;&#189;&#147;&#229;&#137;&#141;watcher(child.name)&#229;&#138;&#160;&#229;&#133;&#165;&#229;&#136;&#176;&#230;&#150;&#176;&#231;&#154;&#132; child.name &#231;&#154;&#132;dep&#233;&#135;&#140;</span>","        <span class=\"c\">// &#229;&#155;&#160;&#228;&#184;&#186;&#230;&#173;&#164;&#230;&#151;&#182; child.name &#230;&#152;&#175;&#228;&#184;&#170;&#230;&#150;&#176;&#229;&#128;&#188;&#239;&#188;&#140;&#228;&#185;&#139;&#229;&#137;&#141;&#231;&#154;&#132; setter&#227;&#128;&#129;dep &#233;&#131;&#189;&#229;&#183;&#178;&#231;&#187;&#143;&#229;&#164;&#177;&#230;&#149;&#136;&#239;&#188;&#140;&#229;&#166;&#130;&#230;&#158;&#156;&#228;&#184;&#141;&#230;&#138;&#138; watcher &#229;&#138;&#160;&#229;&#133;&#165;&#229;&#136;&#176;&#230;&#150;&#176;&#231;&#154;&#132; child.name &#231;&#154;&#132;dep&#228;&#184;&#173;</span>","        <span class=\"c\">// &#233;&#128;&#154;&#232;&#191;&#135; child.name = xxx &#232;&#181;&#139;&#229;&#128;&#188;&#231;&#154;&#132;&#230;&#151;&#182;&#229;&#128;&#153;&#239;&#188;&#140;&#229;&#175;&#185;&#229;&#186;&#148;&#231;&#154;&#132; watcher &#229;&#176;&#177;&#230;&#148;&#182;&#228;&#184;&#141;&#229;&#136;&#176;&#233;&#128;&#154;&#231;&#159;&#165;&#239;&#188;&#140;&#231;&#173;&#137;&#228;&#186;&#142;&#229;&#164;&#177;&#230;&#149;&#136;&#228;&#186;&#134;</span>","        <span class=\"c\">// 4. &#230;&#175;&#143;&#228;&#184;&#170;&#229;&#173;&#144;&#229;&#177;&#158;&#230;&#128;&#167;&#231;&#154;&#132;watcher&#229;&#156;&#168;&#230;&#183;&#187;&#229;&#138;&#160;&#229;&#136;&#176;&#229;&#173;&#144;&#229;&#177;&#158;&#230;&#128;&#167;&#231;&#154;&#132;dep&#231;&#154;&#132;&#229;&#144;&#140;&#230;&#151;&#182;&#239;&#188;&#140;&#228;&#185;&#159;&#228;&#188;&#154;&#230;&#183;&#187;&#229;&#138;&#160;&#229;&#136;&#176;&#231;&#136;&#182;&#229;&#177;&#158;&#230;&#128;&#167;&#231;&#154;&#132;dep</span>","        <span class=\"c\">// &#231;&#155;&#145;&#229;&#144;&#172;&#229;&#173;&#144;&#229;&#177;&#158;&#230;&#128;&#167;&#231;&#154;&#132;&#229;&#144;&#140;&#230;&#151;&#182;&#231;&#155;&#145;&#229;&#144;&#172;&#231;&#136;&#182;&#229;&#177;&#158;&#230;&#128;&#167;&#231;&#154;&#132;&#229;&#143;&#152;&#230;&#155;&#180;&#239;&#188;&#140;&#232;&#191;&#153;&#230;&#160;&#183;&#239;&#188;&#140;&#231;&#136;&#182;&#229;&#177;&#158;&#230;&#128;&#167;&#230;&#148;&#185;&#229;&#143;&#152;&#230;&#151;&#182;&#239;&#188;&#140;&#229;&#173;&#144;&#229;&#177;&#158;&#230;&#128;&#167;&#231;&#154;&#132;watcher&#228;&#185;&#159;&#232;&#131;&#189;&#230;&#148;&#182;&#229;&#136;&#176;&#233;&#128;&#154;&#231;&#159;&#165;&#232;&#191;&#155;&#232;&#161;&#140;update</span>","        <span class=\"c\">// &#232;&#191;&#153;&#228;&#184;&#128;&#230;&#173;&#165;&#230;&#152;&#175;&#229;&#156;&#168; this.get() --&gt; this.getVMVal() &#233;&#135;&#140;&#233;&#157;&#162;&#229;&#174;&#140;&#230;&#136;&#144;&#239;&#188;&#140;forEach&#230;&#151;&#182;&#228;&#188;&#154;&#228;&#187;&#142;&#231;&#136;&#182;&#231;&#186;&#167;&#229;&#188;&#128;&#229;&#167;&#139;&#229;&#143;&#150;&#229;&#128;&#188;&#239;&#188;&#140;&#233;&#151;&#180;&#230;&#142;&#165;&#232;&#176;&#131;&#231;&#148;&#168;&#228;&#186;&#134;&#229;&#174;&#131;&#231;&#154;&#132;getter</span>","        <span class=\"c\">// &#232;&#167;&#166;&#229;&#143;&#145;&#228;&#186;&#134;addDep(), &#229;&#156;&#168;&#230;&#149;&#180;&#228;&#184;&#170;forEach&#232;&#191;&#135;&#231;&#168;&#139;&#239;&#188;&#140;&#229;&#189;&#147;&#229;&#137;&#141;wacher&#233;&#131;&#189;&#228;&#188;&#154;&#229;&#138;&#160;&#229;&#133;&#165;&#229;&#136;&#176;&#230;&#175;&#143;&#228;&#184;&#170;&#231;&#136;&#182;&#231;&#186;&#167;&#232;&#191;&#135;&#231;&#168;&#139;&#229;&#177;&#158;&#230;&#128;&#167;&#231;&#154;&#132;dep</span>","        <span class=\"c\">// &#228;&#190;&#139;&#229;&#166;&#130;&#239;&#188;&#154;&#229;&#189;&#147;&#229;&#137;&#141;watcher&#231;&#154;&#132;&#230;&#152;&#175;'child.child.name', &#233;&#130;&#163;&#228;&#185;&#136;child, child.child, child.child.name&#232;&#191;&#153;&#228;&#184;&#137;&#228;&#184;&#170;&#229;&#177;&#158;&#230;&#128;&#167;&#231;&#154;&#132;dep&#233;&#131;&#189;&#228;&#188;&#154;&#229;&#138;&#160;&#229;&#133;&#165;&#229;&#189;&#147;&#229;&#137;&#141;watcher</span>","        <span class=\"k\">if</span> <span class=\"k\">(!</span><span class=\"k\">this</span><span class=\"k\">.</span>depIds<span class=\"k\">.</span>hasOwnProperty<span class=\"k\">(</span>dep<span class=\"k\">.</span>id<span class=\"k\">))</span> <span class=\"k\">{</span>","            dep<span class=\"k\">.</span>addSub<span class=\"k\">(</span><span class=\"k\">this</span><span class=\"k\">);</span>","            <span class=\"k\">this</span><span class=\"k\">.</span>depIds<span class=\"k\">[</span>dep<span class=\"k\">.</span>id<span class=\"k\">]</span> <span class=\"k\">=</span> dep<span class=\"k\">;</span>","        <span class=\"k\">}</span>","    <span class=\"k\">}</span><span class=\"k\">,</span>","    get<span class=\"k\">:</span> <span class=\"k\">function</span><span class=\"k\">()</span> <span class=\"k\">{</span>","        Dep<span class=\"k\">.</span>target <span class=\"k\">=</span> <span class=\"k\">this</span><span class=\"k\">;</span>","        <span class=\"k\">var</span> value <span class=\"k\">=</span> <span class=\"k\">this</span><span class=\"k\">.</span>getter<span class=\"k\">.</span>call<span class=\"k\">(</span><span class=\"k\">this</span><span class=\"k\">.</span>vm<span class=\"k\">,</span> <span class=\"k\">this</span><span class=\"k\">.</span>vm<span class=\"k\">);</span>","        Dep<span class=\"k\">.</span>target <span class=\"k\">=</span> <span class=\"k\">null</span><span class=\"k\">;</span>","        <span class=\"k\">return</span> value<span class=\"k\">;</span>","    <span class=\"k\">}</span><span class=\"k\">,</span>","","    parseGetter<span class=\"k\">:</span> <span class=\"k\">function</span><span class=\"k\">(</span>exp<span class=\"k\">)</span> <span class=\"k\">{</span>","        <span class=\"k\">if</span> <span class=\"k\">(</span><span class=\"s\">/[^\\w.$]/</span><span class=\"k\">.</span>test<span class=\"k\">(</span>exp<span class=\"k\">))</span> <span class=\"k\">return</span><span class=\"k\">;</span>","","        <span class=\"k\">var</span> exps <span class=\"k\">=</span> exp<span class=\"k\">.</span>split<span class=\"k\">(</span><span class=\"s\">'.'</span><span class=\"k\">);</span>","","        <span class=\"k\">return</span> <span class=\"k\">function</span><span class=\"k\">(</span>obj<span class=\"k\">)</span> <span class=\"k\">{</span>","            <span class=\"k\">for</span> <span class=\"k\">(</span><span class=\"k\">var</span> i <span class=\"k\">=</span> <span class=\"s\">0</span><span class=\"k\">,</span> len <span class=\"k\">=</span> exps<span class=\"k\">.</span>length<span class=\"k\">;</span> i <span class=\"k\">&lt;</span> len<span class=\"k\">;</span> i<span class=\"k\">++)</span> <span class=\"k\">{</span>","                <span class=\"k\">if</span> <span class=\"k\">(!</span>obj<span class=\"k\">)</span> <span class=\"k\">return</span><span class=\"k\">;</span>","                obj <span class=\"k\">=</span> obj<span class=\"k\">[</span>exps<span class=\"k\">[</span>i<span class=\"k\">]];</span>","            <span class=\"k\">}</span>","            <span class=\"k\">return</span> obj<span class=\"k\">;</span>","        <span class=\"k\">}</span>","    <span class=\"k\">}</span>","<span class=\"k\">}</span><span class=\"k\">;</span>"];
_$jscoverage['js/watcher.js'][1]++;
function Watcher(vm, expOrFn, cb) {
  _$jscoverage['js/watcher.js'][2]++;
  this.cb = cb;
  _$jscoverage['js/watcher.js'][3]++;
  this.vm = vm;
  _$jscoverage['js/watcher.js'][4]++;
  this.expOrFn = expOrFn;
  _$jscoverage['js/watcher.js'][5]++;
  this.depIds = {};
  _$jscoverage['js/watcher.js'][7]++;
  if (((typeof expOrFn) === "function")) {
    _$jscoverage['js/watcher.js'][8]++;
    this.getter = expOrFn;
  }
  else {
    _$jscoverage['js/watcher.js'][11]++;
    this.getter = this.parseGetter(expOrFn.trim());
  }
  _$jscoverage['js/watcher.js'][13]++;
  this.value = this.get();
}
_$jscoverage['js/watcher.js'][16]++;
Watcher.prototype = {constructor: Watcher, update: (function () {
  _$jscoverage['js/watcher.js'][19]++;
  this.run();
}), run: (function () {
  _$jscoverage['js/watcher.js'][22]++;
  var value = this.get();
  _$jscoverage['js/watcher.js'][23]++;
  var oldVal = this.value;
  _$jscoverage['js/watcher.js'][24]++;
  if ((value !== oldVal)) {
    _$jscoverage['js/watcher.js'][25]++;
    this.value = value;
    _$jscoverage['js/watcher.js'][26]++;
    this.cb.call(this.vm, value, oldVal);
  }
}), addDep: (function (dep) {
  _$jscoverage['js/watcher.js'][44]++;
  if ((! this.depIds.hasOwnProperty(dep.id))) {
    _$jscoverage['js/watcher.js'][45]++;
    dep.addSub(this);
    _$jscoverage['js/watcher.js'][46]++;
    this.depIds[dep.id] = dep;
  }
}), get: (function () {
  _$jscoverage['js/watcher.js'][50]++;
  Dep.target = this;
  _$jscoverage['js/watcher.js'][51]++;
  var value = this.getter.call(this.vm, this.vm);
  _$jscoverage['js/watcher.js'][52]++;
  Dep.target = null;
  _$jscoverage['js/watcher.js'][53]++;
  return value;
}), parseGetter: (function (exp) {
  _$jscoverage['js/watcher.js'][57]++;
  if (/[^\w.$]/.test(exp)) {
    _$jscoverage['js/watcher.js'][57]++;
    return;
  }
  _$jscoverage['js/watcher.js'][59]++;
  var exps = exp.split(".");
  _$jscoverage['js/watcher.js'][61]++;
  return (function (obj) {
  _$jscoverage['js/watcher.js'][62]++;
  for (var i = 0, len = exps.length; (i < len); (i++)) {
    _$jscoverage['js/watcher.js'][63]++;
    if ((! obj)) {
      _$jscoverage['js/watcher.js'][63]++;
      return;
    }
    _$jscoverage['js/watcher.js'][64]++;
    obj = obj[exps[i]];
}
  _$jscoverage['js/watcher.js'][66]++;
  return obj;
});
})};
