webpackJsonp([2],{"9uzf":function(t,i){},JPEZ:function(t,i,e){"use strict";Object.defineProperty(i,"__esModule",{value:!0});var n={components:{FilterItem:e("iexJ").a},data:function(){return{levelArr:[{id:1,name:"高一"},{id:2,name:"高二"},{id:3,name:"高三"}],subjectArr:[{id:0,name:"优惠套餐"},{id:1,name:"语文"},{id:2,name:"数学"},{id:3,name:"英语"},{id:4,name:"物理"},{id:5,name:"化学"}],courseList:[{id:1,title:"2020-2021 高二数学",image:"./static/images/3.png",zhishidian:127,jingpin:233,peitao:35,version:"人教版本",validDate:"2015-5-9",price:34,oldPrice:55,buyCount:155,rate:100},{id:1,title:"2020-2021 高二数学",image:"./static/images/3.png",zhishidian:127,jingpin:233,peitao:35,version:"人教版本",validDate:"2015-5-9",price:34,oldPrice:55,buyCount:155,rate:100}]}},created:function(){},methods:{levelChange:function(t){console.log(t)},subjectChange:function(t){console.log(t)}}},s={render:function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",{staticClass:"course-center"},[e("FilterItem",{attrs:{filterName:"年级",filterData:t.levelArr},on:{"filterCondition-change":t.levelChange}}),t._v(" "),e("FilterItem",{attrs:{filterName:"科目",filterData:t.subjectArr},on:{"filterCondition-change":t.subjectChange}}),t._v(" "),e("div",{staticClass:"course-list"},t._l(t.courseList,function(i,n){return e("div",{key:n,staticClass:"course-card"},[e("img",{attrs:{src:i.image}}),t._v(" "),e("div",{staticClass:"right-box"},[e("h3",[t._v(t._s(i.title))]),t._v(" "),e("div",{staticClass:"info text-placeholder"},[e("p",[t._v("\n            课程包含：知识点讲解 "),e("b",[t._v(t._s(i.zhishidian)+"个")]),t._v(" / 精品题目\n            "),e("b",[t._v(t._s(i.jingpin)+"道")]),t._v(" / 配套同类题\n            "),e("b",[t._v(t._s(i.peitao)+"道")])]),t._v(" "),e("p",[t._v("课程层次：")]),t._v(" "),e("p",{staticClass:"ellipsis"},[t._v("课程版本："+t._s(i.version))]),t._v(" "),e("p",[t._v("有效期至："+t._s(i.validDate))])]),t._v(" "),e("div",{staticClass:"price-area flex flex-v-center"},[e("div",{staticClass:"flex1"},[e("span",{staticClass:"price"},[t._v("￥"+t._s(i.price))]),t._v(" "),e("span",{staticClass:"old-price"},[t._v("原价：￥"+t._s(i.oldPrice))])]),t._v(" "),e("div",[t._v("\n            购买人数 "),e("span",{staticClass:"text-red"},[t._v(t._s(i.buyCount)+"人")]),t._v(" /\n            好评率 "),e("span",{staticClass:"text-red"},[t._v(t._s(i.rate)+"%")])]),t._v(" "),e("div",[e("el-button",{attrs:{type:"warning",icon:"el-icon-shopping-cart-2"}},[t._v("加入购物车")]),t._v(" "),e("el-button",{attrs:{type:"info"}},[t._v("课程更新中")])],1)])])])}),0)],1)},staticRenderFns:[]};var a=e("VU/8")(n,s,!1,function(t){e("KXf7")},null,null);i.default=a.exports},KXf7:function(t,i){},iexJ:function(t,i,e){"use strict";var n={name:"FilterItem",props:{filterName:"",filterData:{type:Array,default:function(){return[]}},isMulti:{type:Boolean,default:function(){return!1}}},data:function(){return{filterCondition:[]}},mounted:function(){},methods:{chose:function(t){-1!=this.filterCondition.indexOf(t.id)||(this.isMulti||(this.filterCondition=[]),this.filterCondition.push(t.id));for(var i=[],e=0;e<this.filterData.length;e++)this.filterCondition.includes(this.filterData[e].id)&&i.push(this.filterData[e]);this.$emit("filterCondition-change",i)}},updated:function(){},watch:{filterData:function(t,i){this.init&&(this.filterCondition=[],i.length&&this.$emit("filterCondition-change",[]),this.init=!1)}}},s={render:function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",{staticClass:"components-filter-item"},[e("div",{staticClass:"container flex flex-v-center"},[e("div",[e("span",{staticClass:"condition-title m-r-8",attrs:{title:t.filterName}},[e("span",{staticClass:"filter-name"},[t._v(t._s(t.filterName))])])]),t._v(" "),e("div",{ref:"itemContainer",staticClass:"flex-1 flex flex-wrap"},t._l(t.filterData,function(i){return e("span",{key:i.id,staticClass:"condition-item",class:{active:t.filterCondition.includes(i.id)},on:{click:function(e){return t.chose(i)}}},[t._v(t._s(i.name))])}),0)])])},staticRenderFns:[]};var a=e("VU/8")(n,s,!1,function(t){e("9uzf")},null,null);i.a=a.exports}});