(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{154:function(a,s,t){"use strict";t.r(s);var e=t(0),r=Object(e.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var a=this,s=a.$createElement,t=a._self._c||s;return t("div",{staticClass:"content"},[t("h1",{attrs:{id:"js循环语句中的性能分析"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#js循环语句中的性能分析","aria-hidden":"true"}},[a._v("#")]),a._v(" JS循环语句中的性能分析")]),a._v(" "),t("p",[a._v("循环相同的次数，执行同一个操作，（这里都是简单赋值操作）测试每一种循环所需要的时间尽量不要用for…in来循环数组，因为在数组中自定义的属性，也会在循环中遍历到，而且性能极差，用for…of本身是不能直接遍历对象的，需要使用Object.keys()方法将对象属性转化成可循环列表，for…of来循环数组的时候，好像只能获取到相应的key无法获取到Index，这个问题很尴尬。")]),a._v(" "),t("h2",{attrs:{id:"遍历种类"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#遍历种类","aria-hidden":"true"}},[a._v("#")]),a._v(" 遍历种类")]),a._v(" "),t("h3",{attrs:{id:"数组"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#数组","aria-hidden":"true"}},[a._v("#")]),a._v(" 数组")]),a._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("for\nwhile\nforach\nfor…in\nfor…of\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br"),t("span",{staticClass:"line-number"},[a._v("2")]),t("br"),t("span",{staticClass:"line-number"},[a._v("3")]),t("br"),t("span",{staticClass:"line-number"},[a._v("4")]),t("br"),t("span",{staticClass:"line-number"},[a._v("5")]),t("br")])]),t("h3",{attrs:{id:"对象"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#对象","aria-hidden":"true"}},[a._v("#")]),a._v(" 对象")]),a._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("for…in\nfor…of\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br"),t("span",{staticClass:"line-number"},[a._v("2")]),t("br")])]),t("h2",{attrs:{id:"结论"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#结论","aria-hidden":"true"}},[a._v("#")]),a._v(" 结论")]),a._v(" "),t("ul",[t("li",[t("p",[a._v("对于数组来说无论遍历的数量级大小，性能总是以下排名，其中前三个在千万级的循环次数中，差别不是很大:")]),a._v(" "),t("div",{staticClass:"tip custom-block"},[t("p",{staticClass:"custom-block-title"},[a._v("TIP")]),a._v(" "),t("p",[a._v("for > for..of > while > forach > for…in,")])])]),a._v(" "),t("li",[t("p",[a._v("对于对象来说，性能\nfor…of > for…in\n相同数量级的item遍历，数组的遍历时间是远远小于对象的遍历时间的\n如果可以选择的话，应该尽量选用数组存储变量而不是使用对象")])])])])}],!1,null,null,null);r.options.__file="fenxi.md";s.default=r.exports}}]);