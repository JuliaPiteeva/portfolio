(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{69:function(t,e,a){"use strict";a.d(e,"a",function(){return s});a(5);var s=function(t){var e=new FileReader;return new Promise(function(a,s){try{e.readAsDataURL(t),e.onloadend=function(){a(e.result)}}catch(t){throw new Error("Ошибка при чтении файла")}})}},79:function(t,e,a){},80:function(t,e,a){},81:function(t,e,a){},92:function(t,e,a){"use strict";var s=a(79);a.n(s).a},93:function(t,e,a){"use strict";var s=a(80);a.n(s).a},94:function(t,e,a){"use strict";var s=a(81);a.n(s).a},98:function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"revs container"},[t._m(0),t.blockAddRevsIsActive?a("div",{staticClass:"rev-add-wrapper"},[a("addRev",{on:{showBlockAddRevs:t.showBlockAddRevs}})],1):t._e(),a("ul",{staticClass:"rev__list"},[t.blockAddRevsIsActive?t._e():a("li",{staticClass:"rev-add-btn rev__item rev__item--add"},[a("label",{staticClass:"rev__add-label"},[a("div",{staticClass:"rev__add-visible"},[t._v("+")]),a("input",{staticClass:"rev__add-input",attrs:{type:"button"},on:{click:t.showBlockAddRevs}}),a("span",{staticClass:"rev__add-text"},[t._v("Добавить отзыв")])])]),t._l(t.reviews,function(t){return a("li",{key:t.id,staticClass:"rev__item"},[a("revsList",{attrs:{rev:t}})],1)})],2)])};s._withStripped=!0;var n=a(40),i=a.n(n),r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"rev-add"},[a("form",{staticClass:"rev-add__form",on:{submit:function(e){return e.preventDefault(),t.createNewRev(e)}}},[a("div",{staticClass:"rev-add__title"},[t._v("Новый отзыв")]),a("div",{staticClass:"rev-add__container"},[a("div",{staticClass:"rev-add__left"},[a("label",{staticClass:"rev-add__label"},[a("input",{staticClass:"rev-add__input",attrs:{type:"file"},on:{change:t.handleFileChange}}),a("div",{staticClass:"rev-add__img",class:{disabled:t.renderedPhoto.length},style:{backgroundImage:"url("+t.renderedPhoto+")"}},[a("div",{staticClass:"rev-add__icon"})]),a("span",{staticClass:"input rev-add__upload"},[t._v("Добавить фото")])])]),a("div",{staticClass:"rev-add__right"},[a("div",{staticClass:"rev-add__row"},[a("label",{staticClass:"rev-add__block"},[a("span",{staticClass:"rev__input-title"},[t._v("Имя автора")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.newRevData.name,expression:"newRevData.name"}],staticClass:"rev__input",attrs:{type:"text",required:""},domProps:{value:t.newRevData.name},on:{input:function(e){e.target.composing||t.$set(t.newRevData,"name",e.target.value)}}})]),a("label",{staticClass:"rev-add__block"},[a("span",{staticClass:"rev__input-title"},[t._v("Титул автора")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.newRevData.position,expression:"newRevData.position"}],staticClass:"rev__input",attrs:{type:"text",required:""},domProps:{value:t.newRevData.position},on:{input:function(e){e.target.composing||t.$set(t.newRevData,"position",e.target.value)}}})])]),a("label",{staticClass:"rev-add__block"},[a("span",{staticClass:"rev__input-title"},[t._v("Отзыв")]),a("textarea",{directives:[{name:"model",rawName:"v-model",value:t.newRevData.text,expression:"newRevData.text"}],staticClass:"rev__textarea rev__input",attrs:{type:"text",row:"3",required:""},domProps:{value:t.newRevData.text},on:{input:function(e){e.target.composing||t.$set(t.newRevData,"text",e.target.value)}}})]),a("div",{staticClass:"save-cancel__btns"},[a("button",{staticClass:"btn-cancel btn",attrs:{type:"button"},on:{click:function(e){return e.preventDefault(),t.$emit("showBlockAddRevs")}}},[t._v("Отмена")]),a("button",{staticClass:"btn",attrs:{type:"submit"}},[t._v("Сохранить")])])])])])])};r._withStripped=!0;var c=a(0),v=a.n(c),o=a(2),l=a.n(o),d=a(69),u=a(41),_={components:{},data:function(){return{newRevData:{name:"",position:"",text:"",photo:{}},renderedPhoto:""}},methods:i()({},Object(u.a)("reviews",["addReview"]),{handleFileChange:function(t){var e=this;this.newRevData.photo=t.target.files[0];var a=this.newRevData.photo;Object(d.a)(a).then(function(t){e.renderedPhoto=t})},createNewRev:function(){var t=this;return l()(v.a.mark(function e(){return v.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:try{t.addReview(t.newRevData),t.newRevData.name="",t.newRevData.position="",t.newRevData.text="",t.newRevData.photo=""}catch(t){}case 1:case"end":return e.stop()}},e)}))()}})},p=(a(92),a(6)),m=Object(p.a)(_,r,[],!1,null,null,null);m.options.__file="src/admin/components/addRev.vue";var w=m.exports,f=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"revs-wrap"},[a("div",{staticClass:"rev__row"},[t._m(0),a("div",{staticClass:"rev__info"},[a("h3",[t._v(t._s(t.rev.author))]),a("p",[t._v(t._s(t.rev.occ))])])]),a("div",{staticClass:"rev__content"},[a("p",[t._v(t._s(t.rev.text))])]),a("div",{staticClass:"rev__btns"},[t._m(1),a("label",{staticClass:"btn-label"},[a("span",{staticClass:"btn-text"},[t._v("Удалить")]),a("button",{staticClass:"cross",attrs:{type:"button"},on:{click:t.removeCurrentRev}})])])])};f._withStripped=!0;var h=a(20),b={components:{},props:{rev:Object},methods:i()({},Object(h.b)("reviews",["removeRev"]),{removeCurrentRev:function(){var t=this;return l()(v.a.mark(function e(){return v.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t.removeRev(t.rev);case 3:e.next=7;break;case 5:e.prev=5,e.t0=e.catch(0);case 7:case"end":return e.stop()}},e,null,[[0,5]])}))()}})},C=(a(93),Object(p.a)(b,f,[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"rev__img"},[e("img",{staticClass:"rev__icon"})])},function(){var t=this.$createElement,e=this._self._c||t;return e("label",{staticClass:"btn-label"},[e("span",{staticClass:"btn-text"},[this._v("Править")]),e("button",{staticClass:"edit edit--blue"})])}],!1,null,null,null));C.options.__file="src/admin/components/revsList.vue";var R={components:{revsList:C.exports,addRev:w},data:function(){return{blockAddRevsIsActive:!1}},computed:i()({},Object(u.c)("reviews",{reviews:function(t){return t.reviews}})),created:function(){this.fetchReviews()},methods:i()({},Object(u.a)("reviews",["fetchReviews"]),{showBlockAddRevs:function(){this.blockAddRevsIsActive=!this.blockAddRevsIsActive}})},x=(a(94),Object(p.a)(R,s,[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"block-title"},[e("div",{staticClass:"title"},[e("h1",[this._v('Блок "Отзывы"')])])])}],!1,null,null,null));x.options.__file="src/admin/components/reviews.vue";e.default=x.exports}}]);