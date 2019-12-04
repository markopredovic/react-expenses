(this["webpackJsonpreact-expenses"]=this["webpackJsonpreact-expenses"]||[]).push([[0],{148:function(e,t,a){"use strict";a.r(t);var n={};a.r(n),a.d(n,"getList",(function(){return B})),a.d(n,"add",(function(){return G})),a.d(n,"remove",(function(){return V})),a.d(n,"filter",(function(){return W}));var r=a(0),l=a.n(r),s=a(32),c=a.n(s),o=(a(71),a(28)),u=a(18),i=(a(72),Object(r.createContext)({expenses:[],list:function(){},add:function(){}})),m=a(29),p=a(25),d=a(60);function E(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function v(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?E(a,!0).forEach((function(t){Object(d.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):E(a).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var f={expenses:[],month:-1,year:(new Date).getFullYear(),lang:"rs"},g=function(e,t){return v({},e,{expenses:[].concat(Object(p.a)(e.expenses),Object(p.a)(t.payload)),month:-1,year:(new Date).getFullYear()})},x=function(e,t){return v({},e,{expenses:[].concat(Object(p.a)(e.expenses),[t])})},y=function(e,t){return v({},e,{month:t.filter.month,year:t.filter.year})},b=function(e,t){var a=e.expenses.filter((function(e){return e.id!==t}));return v({},e,{expenses:a})},h=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:f,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"LIST_ALL_EXPENSES":return g(e,t);case"ADD_EXPENSE":return x(e,t.payload);case"FILTER_EXPENSES":return y(e,t.payload);case"REMOVE_EXPENSE":return b(e,t.payload);case"CHANGE_LANG":return v({},e,{lang:t.payload});default:return e}},N=function(e){var t=Object(r.useReducer)(h),a=Object(m.a)(t,2),n=a[0],l=a[1];Object(r.useEffect)((function(){s()}),[]);var s=function(){var t=e.getList();t&&l({type:"LIST_ALL_EXPENSES",payload:t})};return{state:n,add:function(t){try{e.add(t)}catch(a){}l({type:"ADD_EXPENSE",payload:t})},filter:function(e){l({type:"FILTER_EXPENSES",payload:{filter:e}})},remove:function(t){e.remove(t),l({type:"REMOVE_EXPENSE",payload:t})},changeLang:function(e){l({type:"CHANGE_LANG",payload:e})}}},O=a(9),j=a.n(O),S=a(53),w=function(){var e=new j.a({en:{expenseList:"Expense List",addExpense:"Add Expense"},rs:{expenseList:"Lista troskova",addExpense:"Dodaj troskove"}}),t=Object(r.useContext)(i);t.state&&e.setLanguage(t.state.lang);var a=e.getLanguage();return l.a.createElement("header",null,l.a.createElement("nav",null,l.a.createElement("ul",null,l.a.createElement("li",null,l.a.createElement(o.b,{to:"/react-expenses",exact:!0,activeClassName:"is-active-link"},e.expenseList)),l.a.createElement("li",null,l.a.createElement(o.b,{to:"/react-expenses/add-expense",exact:!0,activeClassName:"is-active-link"},e.addExpense)))),l.a.createElement("div",{className:"l-lang"},l.a.createElement("ul",null,"en"===a&&l.a.createElement("li",null,l.a.createElement("span",{onClick:function(){return t.changeLang("rs")},className:"rs"===a?"active-lang":""},l.a.createElement(S.a,{code:"rs",svg:!0}))),"rs"===a&&l.a.createElement("li",null,l.a.createElement("span",{onClick:function(){return t.changeLang("en")},className:"en"===a?"active-lang":""},l.a.createElement(S.a,{code:"us",svg:!0}))))))},L=function(){var e=new j.a({en:{developedBy:"Developed By"},rs:{developedBy:"Napravio"}}),t=Object(r.useContext)(i);return t.state&&e.setLanguage(t.state.lang),l.a.createElement("footer",null,l.a.createElement("div",{className:"l-content"},e.developedBy," ",l.a.createElement("a",{href:"https://markoni.codes"},"markoni.codes")))},D=function(){var e=new j.a({en:{selectDate:"Select date filter:",month:"month",year:"year",all:"All",may:"May",submit:"submit"},rs:{selectDate:"Filtriraj troskove po datumu:",month:"mesec",year:"godina",all:"Sve",may:"Maj",submit:"primeni"}}),t=Object(r.useContext)(i),a=Object(r.useRef)(null),n=Object(r.useRef)(null);t.state&&e.setLanguage(t.state.lang),Object(r.useEffect)((function(){a.current.value=t.state?t.state.month:-1,n.current.value=t.state?t.state.year:-1}),[t.state]);return l.a.createElement(l.a.Fragment,null,l.a.createElement("form",{className:"l-filter",onSubmit:function(e){e.preventDefault(),(-1!==a.current.value||-1!==n.current.value)&&t.filter({month:parseInt(a.current.value),year:parseInt(n.current.value)})}},l.a.createElement("span",null,e.selectDate),l.a.createElement("div",{className:"l-fields"},l.a.createElement("div",{className:"l-select"},l.a.createElement("span",null,e.month,":"),l.a.createElement("select",{name:"expenses-month",onChange:function(e){},ref:a,style:{marginRight:"20px"}},l.a.createElement("option",{value:"-1"},e.all),l.a.createElement("option",{value:"0"},"Jan"),l.a.createElement("option",{value:"1"},"Feb"),l.a.createElement("option",{value:"2"},"Mar"),l.a.createElement("option",{value:"3"},"Apr"),l.a.createElement("option",{value:"4"},e.may),l.a.createElement("option",{value:"5"},"Jun"),l.a.createElement("option",{value:"6"},"Jul"),l.a.createElement("option",{value:"7"},"Avg"),l.a.createElement("option",{value:"8"},"Sep"),l.a.createElement("option",{value:"9"},"Okt"),l.a.createElement("option",{value:"10"},"Nov"),l.a.createElement("option",{value:"11"},"Dec"))),l.a.createElement("div",{className:"l-select"},l.a.createElement("span",null,e.year,":"),l.a.createElement("select",{name:"expenses-year",ref:n},l.a.createElement("option",{value:"-1"},e.all),l.a.createElement("option",{value:"2019"},"2019"),l.a.createElement("option",{value:"2020"},"2020")))),l.a.createElement("div",{className:"l-action"},l.a.createElement("button",{type:"submit"},e.submit))))},k=function(e){var t=null;try{t=window.localStorage.getItem(e)}catch(a){return null}return JSON.parse(t)},A=function(e,t){var a=JSON.stringify(t);window.localStorage.setItem(e,a)},P=function(e,t){return new Date(e.date)>new Date(t.date)?-1:1},M=function(e,t){var a=null;return"en"===e&&(a=["January","February","March","April","May","June","July","August","September","October","November","December"][t]),"rs"===e&&(a=["Januar","Februar","Mart","April","Maj","Jun","Jul","Avgust","Septembar","Oktobar","Novembar","Decembar"][t]),a},C=a(65),F=function(e){var t,a=e.expense,n=Object(r.useContext)(i);return l.a.createElement("li",null,l.a.createElement("span",{className:"expense-date"},(t=a.date,new Date(t).toLocaleDateString("sr-SR"))),l.a.createElement("span",{className:"expense-price"},a.price.toFixed(2)),l.a.createElement("span",{className:"expense-name"},a.name),l.a.createElement("span",{className:"expense-delete",onClick:function(){return n.remove(a.id)}},l.a.createElement(C.a,null)))},T=function(){var e=new j.a({en:{expensesAllTime:"All time expenses",expensesWholeYear:"Expenses for whole {0} year",expensesMonthForAllYears:"Expenses for {0} month for all years",expensesForMonthYear:"Expenses for {0} month for {1} year"},rs:{expensesAllTime:"Troskovi za celokupan period",expensesWholeYear:"Troskovi za celu {0} godinu",expensesMonthForAllYears:"Troskovi za {0} mesec za sve godine",expensesForMonthYear:"Troskovi za {0} mesec za {1} godinu"}}),t=Object(r.useContext)(i);return t.state&&e.setLanguage(t.state.lang),l.a.createElement("div",{className:"l-expenses-header"},function(a,n){var r=null;return null===a&&null===n?null:(-1===a&&-1===n&&(r=e.expensesAllTime),-1===a&&-1!==n&&(r=e.formatString(e.expensesWholeYear,l.a.createElement("span",{className:"m-bold m-beige"},n))),-1!==a&&-1===n&&(r=e.formatString(e.expensesMonthForAllYears,l.a.createElement("span",{className:"m-bold m-beige"},M(t.state.lang,a)))),-1!==a&&-1!==n&&(r=e.formatString(e.expensesForMonthYear,l.a.createElement("span",{className:"m-bold m-beige"},M(t.state&&t.state.lang,a)),l.a.createElement("span",{className:"m-bold m-beige"},n))),r)}(t.state&&t.state.month,t.state&&t.state.year))},_=a(62),J=function(){var e=new j.a({en:{total:"Total"},rs:{total:"Ukupno"}}),t=Object(r.useContext)(i);t.state&&e.setLanguage(t.state.lang);var a,n=t.state?function(e,t){var a=t.month,n=t.year;return-1===a&&-1===n?e.sort(P):e.filter((function(e){var t=new Date(e.date).getMonth(),r=new Date(e.date).getFullYear();return-1===a?n===r:-1===n?a===t:a===t&&n===r})).sort(P)}(t.state.expenses,{month:t.state.month,year:t.state.year}):[];return l.a.createElement("main",null,t.state&&l.a.createElement(D,null),t.state&&l.a.createElement(T,null),l.a.createElement(_.Scrollbars,{style:{height:"310px",marginBottom:"5px"}},l.a.createElement("ul",{className:"l-expenses-list"},t.state?n.map((function(e,t){return l.a.createElement(F,{key:t,expense:e})})):"Loading ...")),l.a.createElement("div",{className:"l-total"},e.total,":"," ",l.a.createElement("span",{className:"m-bold m-beige"},(a=n,a.reduce((function(e,t){return e+t.price}),0)).toFixed(2))))},R=a(33),Y=a.n(R),I=(a(95),a(64)),z=a(30);Object(R.registerLocale)("rs",I.a);var X=function(){var e=new j.a({en:{addExpenseName:"add expense name",addExpenseValue:"add expense value",submit:"add",emptyName:"empty expense name",emptyPrice:"empty expense value",selectDate:"Date:",expenseAdded:"Expense added to list"},rs:{addExpenseName:"naziv utroska",addExpenseValue:"potrosena vrednost",submit:"dodaj",emptyName:"prazan naziv utroska",emptyPrice:"prazna vrednost utroska",selectDate:"Datum:",expenseAdded:"Utrosak dodat u listu"}}),t=Object(r.useState)(null),a=Object(m.a)(t,2),n=a[0],s=a[1],c=Object(r.useContext)(i);c.state&&e.setLanguage(c.state.lang);var o=e.getLanguage(),u=Object(r.useRef)(null),p=Object(r.useRef)(null),d=Object(r.useState)(new Date),E=Object(m.a)(d,2),v=E[0],f=E[1],g=function(){var e={};return e.id=Math.round(1e6*Math.random()),e.name=p.current.value,e.price=parseInt(u.current.value),e.date=v,e},x=function(){var t={};return""===p.current.value&&(t.emptyName=e.emptyName),""===u.current.value&&(t.emptyPrice=e.emptyPrice),s(t),t};return l.a.createElement("main",null,l.a.createElement("div",{className:"l-add-expense-form"},l.a.createElement("form",{onSubmit:function(t){t.preventDefault();var a=x();if(0===Object.keys(a).length){var n=g();c.add(n),z.ToastsStore.success(e.expenseAdded),p.current.value="",u.current.value=""}}},l.a.createElement("div",{className:"l-fields"},l.a.createElement("div",{className:"l-field"},l.a.createElement("input",{type:"text",name:"expense",ref:p,placeholder:e.addExpenseName}),n&&l.a.createElement("span",{className:"m-inline-error"},n.emptyName)),l.a.createElement("div",{className:"l-field"},l.a.createElement("input",{type:"text",name:"expense",ref:u,placeholder:e.addExpenseValue}),n&&l.a.createElement("span",{className:"m-inline-error"},n.emptyPrice))),l.a.createElement("div",{className:"l-fields"},l.a.createElement("span",{style:{marginRight:"10px"}},e.selectDate),l.a.createElement(Y.a,{locale:"en"===o?"en":"rs",selected:v,onChange:function(e){f(e)},dateFormat:"MMMM d, yyyy"})),l.a.createElement("button",{type:"submit"},e.submit))),l.a.createElement(z.ToastsContainer,{store:z.ToastsStore,position:z.ToastsContainerPosition.TOP_RIGHT}))},B=function(){return k("react_expenses")},G=function(e){var t=k("react_expenses"),a=t?[].concat(Object(p.a)(t),[e]):[e];return A("react_expenses",a),a},V=function(e){var t=k("react_expenses").filter((function(t){return t.id!==e}));return A("react_expenses",t),t},W=function(){};var H=function(){var e=N(n),t=e.state,a=e.add,r=e.remove,s=e.filter,c=e.changeLang;return l.a.createElement("div",{className:"l-app"},l.a.createElement(i.Provider,{value:{state:t,add:a,remove:r,filter:s,changeLang:c}},l.a.createElement(o.a,null,l.a.createElement(w,null),l.a.createElement(u.c,null,l.a.createElement(u.a,{path:"/react-expenses",exact:!0,component:J}),l.a.createElement(u.a,{path:"/react-expenses/add-expense",exact:!0,component:X})),l.a.createElement(L,null))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(l.a.createElement(H,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},66:function(e,t,a){e.exports=a(148)},71:function(e,t,a){},72:function(e,t,a){}},[[66,1,2]]]);
//# sourceMappingURL=main.1ba8aaa0.chunk.js.map