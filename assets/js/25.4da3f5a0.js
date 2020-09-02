(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{352:function(t,e,o){},405:function(t,e,o){"use strict";var i=o(352);o.n(i).a},475:function(t,e,o){"use strict";o.r(e);var i=o(0),n={data:function(){return{option1:{direction:"top",align:"left",text:"上左"},option2:{direction:"top",align:"center",text:"上中"},option3:{direction:"top",align:"right",text:"上右"},option4:{direction:"left",align:"top",text:"左上"},option5:{direction:"left",align:"center",text:"左中"},option6:{direction:"left",align:"bottom",text:"左下"},option7:{direction:"right",align:"top",text:"右上"},option8:{direction:"right",align:"center",text:"右中"},option9:{direction:"right",align:"bottom",text:"右下"},option10:{direction:"bottom",align:"left",text:"下左"},option11:{direction:"bottom",align:"center",text:"下中"},option12:{direction:"bottom",align:"right",text:"下右"},option13:{direction:"bottom",align:"left",html:"<em>我是带em标签的字符串</em>"},option14:{direction:"bottom",align:"left",component:new i.default({data:function(){return{a:"组件"}},render:function(t){return t("Wb-button",{},["我是".concat(this.a)])}})},option15:{text:"确认删除吗？",confirm:!0,onOk:function(){_this.$Toast("点击了确定")},onCancel:function(){_this.$Toast("点击了取消")}}}},methods:{}},l=(o(405),o(43)),a=Object(l.a)(n,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[o("h1",{attrs:{id:"tooltip-文本提示"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#tooltip-文本提示"}},[t._v("#")]),t._v(" Tooltip 文本提示")]),t._v(" "),o("h2",{attrs:{id:"概述"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#概述"}},[t._v("#")]),t._v(" 概述")]),t._v(" "),o("p",[t._v("文字提示气泡框，在鼠标悬停时显示，代替了系统的title提示。")]),t._v(" "),o("h2",{attrs:{id:"代码示例"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#代码示例"}},[t._v("#")]),t._v(" 代码示例")]),t._v(" "),o("ClientOnly",[o("row",[o("cell",{staticClass:"pr-20",attrs:{span:"12"}},[o("componetTemplate",{attrs:{title:"基础用法",template:"ui/templates/tooltip/1.html"},scopedSlots:t._u([{key:"demo",fn:function(){return[o("span",{directives:[{name:"tooltip",rawName:"v-tooltip",value:"这里是提示文字",expression:"'这里是提示文字'"}]},[t._v("当鼠标经过这段文字时，会显示一个气泡框")])]},proxy:!0},{key:"description",fn:function(){return[o("p",[t._v("最简单的用法。")])]},proxy:!0}])}),t._v(" "),o("componetTemplate",{attrs:{title:"html字符串",template:"ui/templates/tooltip/2.html"},scopedSlots:t._u([{key:"demo",fn:function(){return[o("span",{directives:[{name:"tooltip",rawName:"v-tooltip",value:t.option13,expression:"option13"}]},[t._v("当鼠标经过这段文字时，会显示一个内容是html的气泡框")])]},proxy:!0},{key:"description",fn:function(){return[o("p",[t._v("提示内容可以是html结构的字符串。")])]},proxy:!0}])}),t._v(" "),o("componetTemplate",{attrs:{title:"confirm模式",template:"ui/templates/tooltip/3.html"},scopedSlots:t._u([{key:"demo",fn:function(){return[o("span",{directives:[{name:"tooltip",rawName:"v-tooltip",value:t.option15,expression:"option15"}]},[t._v("当鼠标经过这段文字时，会显示一个内容是询问的气泡框")])]},proxy:!0},{key:"description",fn:function(){return[o("p",[t._v("提示内容是一个confirm框。")])]},proxy:!0}])})],1),t._v(" "),o("cell",{staticClass:"pl-20",attrs:{span:"12"}},[o("componetTemplate",{attrs:{title:"提示位置",template:"ui/templates/tooltip/4.html"},scopedSlots:t._u([{key:"demo",fn:function(){return[o("div",{staticClass:"swap"},[o("div",{staticClass:"top"},[o("Wb-button",{directives:[{name:"tooltip",rawName:"v-tooltip",value:t.option1,expression:"option1"}]},[t._v("上左")]),t._v(" "),o("Wb-button",{directives:[{name:"tooltip",rawName:"v-tooltip",value:t.option2,expression:"option2"}]},[t._v("上中")]),t._v(" "),o("Wb-button",{directives:[{name:"tooltip",rawName:"v-tooltip",value:t.option3,expression:"option3"}]},[t._v("上右")])],1),t._v(" "),o("div",{staticClass:"center"},[o("div",{staticClass:"center-left"},[o("Wb-button",{directives:[{name:"tooltip",rawName:"v-tooltip",value:t.option4,expression:"option4"}]},[t._v("左上")]),t._v(" "),o("Wb-button",{directives:[{name:"tooltip",rawName:"v-tooltip",value:t.option5,expression:"option5"}]},[t._v("左中")]),t._v(" "),o("Wb-button",{directives:[{name:"tooltip",rawName:"v-tooltip",value:t.option6,expression:"option6"}]},[t._v("左下")])],1),t._v(" "),o("div",{staticClass:"center-right"},[o("Wb-button",{directives:[{name:"tooltip",rawName:"v-tooltip",value:t.option7,expression:"option7"}]},[t._v("右上")]),t._v(" "),o("Wb-button",{directives:[{name:"tooltip",rawName:"v-tooltip",value:t.option8,expression:"option8"}]},[t._v("右中")]),t._v(" "),o("Wb-button",{directives:[{name:"tooltip",rawName:"v-tooltip",value:t.option9,expression:"option9"}]},[t._v("右下")])],1)]),t._v(" "),o("div",{staticClass:"bottom"},[o("Wb-button",{directives:[{name:"tooltip",rawName:"v-tooltip",value:t.option10,expression:"option10"}]},[t._v("下左")]),t._v(" "),o("Wb-button",{directives:[{name:"tooltip",rawName:"v-tooltip",value:t.option11,expression:"option11"}]},[t._v("下中")]),t._v(" "),o("Wb-button",{directives:[{name:"tooltip",rawName:"v-tooltip",value:t.option12,expression:"option12"}]},[t._v("下右")])],1)])]},proxy:!0},{key:"description",fn:function(){return[o("p",[t._v("提供12个不同的方向显示Tooltip，具体配置可查看API。")])]},proxy:!0}])}),t._v(" "),o("componetTemplate",{attrs:{title:"自定义组件",template:"ui/templates/tooltip/5.html"},scopedSlots:t._u([{key:"demo",fn:function(){return[o("span",{directives:[{name:"tooltip",rawName:"v-tooltip",value:t.option14,expression:"option14"}]},[t._v("当鼠标经过这段文字时，会显示一个内容是组件的气泡框")])]},proxy:!0},{key:"description",fn:function(){return[o("p",[t._v("提示内容可以是自定义的组件。")])]},proxy:!0}])})],1)],1)],1),t._v(" "),o("h2",{attrs:{id:"api"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#api"}},[t._v("#")]),t._v(" API")]),t._v(" "),o("h3",{attrs:{id:"props"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#props"}},[t._v("#")]),t._v(" Props")]),t._v(" "),o("table",[o("thead",[o("tr",[o("th",{staticStyle:{"text-align":"left"}},[t._v("属性")]),t._v(" "),o("th",{staticStyle:{"text-align":"left"}},[t._v("说明")]),t._v(" "),o("th",{staticStyle:{"text-align":"left"}},[t._v("类型")]),t._v(" "),o("th",{staticStyle:{"text-align":"left"}},[t._v("默认值")])])]),t._v(" "),o("tbody",[o("tr",[o("td",{staticStyle:{"text-align":"left"}},[t._v("text")]),t._v(" "),o("td",{staticStyle:{"text-align":"left"}},[t._v("提示的内容")]),t._v(" "),o("td",{staticStyle:{"text-align":"left"}},[t._v("String")]),t._v(" "),o("td",{staticStyle:{"text-align":"left"}},[t._v("null")])]),t._v(" "),o("tr",[o("td",{staticStyle:{"text-align":"left"}},[t._v("html")]),t._v(" "),o("td",{staticStyle:{"text-align":"left"}},[t._v("提示的内容，是html结构的字符串")]),t._v(" "),o("td",{staticStyle:{"text-align":"left"}},[t._v("String")]),t._v(" "),o("td",{staticStyle:{"text-align":"left"}},[t._v("null")])]),t._v(" "),o("tr",[o("td",{staticStyle:{"text-align":"left"}},[t._v("component")]),t._v(" "),o("td",{staticStyle:{"text-align":"left"}},[t._v("提示的内容，是一个vue组件")]),t._v(" "),o("td",{staticStyle:{"text-align":"left"}},[t._v("Object")]),t._v(" "),o("td",{staticStyle:{"text-align":"left"}},[t._v("400")])]),t._v(" "),o("tr",[o("td",{staticStyle:{"text-align":"left"}},[t._v("direction")]),t._v(" "),o("td",{staticStyle:{"text-align":"left"}},[t._v("提示的朝向，相对于dom来说，可选值有"),o("code",[t._v("left")]),t._v("、"),o("code",[t._v("right")]),t._v("、"),o("code",[t._v("top")]),t._v("、"),o("code",[t._v("bottom")])]),t._v(" "),o("td",{staticStyle:{"text-align":"left"}},[t._v("String")]),t._v(" "),o("td",{staticStyle:{"text-align":"left"}},[o("code",[t._v("bottom")])])]),t._v(" "),o("tr",[o("td",{staticStyle:{"text-align":"left"}},[t._v("align")]),t._v(" "),o("td",{staticStyle:{"text-align":"left"}},[t._v("提示内容相对于dom的位置，可选值有"),o("code",[t._v("top")]),t._v("、"),o("code",[t._v("bottom")]),t._v("、"),o("code",[t._v("center")]),t._v("、"),o("code",[t._v("right")]),t._v("、"),o("code",[t._v("left")])]),t._v(" "),o("td",{staticStyle:{"text-align":"left"}},[t._v("String")]),t._v(" "),o("td",{staticStyle:{"text-align":"left"}},[o("code",[t._v("center")])])]),t._v(" "),o("tr",[o("td",{staticStyle:{"text-align":"left"}},[t._v("confirm")]),t._v(" "),o("td",{staticStyle:{"text-align":"left"}},[t._v("是否是询问模式")]),t._v(" "),o("td",{staticStyle:{"text-align":"left"}},[t._v("Boolean")]),t._v(" "),o("td",{staticStyle:{"text-align":"left"}},[t._v("false")])]),t._v(" "),o("tr",[o("td",{staticStyle:{"text-align":"left"}},[t._v("onOk")]),t._v(" "),o("td",{staticStyle:{"text-align":"left"}},[t._v("当询问模式时，点击确认按钮触发的函数")]),t._v(" "),o("td",{staticStyle:{"text-align":"left"}},[t._v("Function")]),t._v(" "),o("td",{staticStyle:{"text-align":"left"}},[t._v("null")])]),t._v(" "),o("tr",[o("td",{staticStyle:{"text-align":"left"}},[t._v("onCancel")]),t._v(" "),o("td",{staticStyle:{"text-align":"left"}},[t._v("当询问模式时，点击取消按钮触发的函数")]),t._v(" "),o("td",{staticStyle:{"text-align":"left"}},[t._v("Function")]),t._v(" "),o("td",{staticStyle:{"text-align":"left"}},[t._v("null")])])])])],1)}),[],!1,null,null,null);e.default=a.exports}}]);