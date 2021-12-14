(this["webpackJsonpgoit-react-hw-03-phonebook"]=this["webpackJsonpgoit-react-hw-03-phonebook"]||[]).push([[0],{10:function(t,e,n){t.exports={Contact__list:"PhoneBook_Contact__list__39gFN",Contact__item:"PhoneBook_Contact__item__3HOKz",Button__remove:"PhoneBook_Button__remove__J888H"}},12:function(t,e,n){t.exports={Filter__search:"Filter_Filter__search__26RSF",Filter__input:"Filter_Filter__input__3v6lu"}},2:function(t,e,n){t.exports={Forma:"InputPhonebook_Forma__3orIP",Forma__input:"InputPhonebook_Forma__input__1es7_",nameinput:"InputPhonebook_nameinput__3g3SN",Button__form:"InputPhonebook_Button__form__3p6Qc"}},20:function(t,e,n){},23:function(t,e,n){"use strict";n.r(e);var a=n(1),o=n.n(a),c=n(13),r=n.n(c),s=(n(20),n(14)),i=n(15),l=n(6),u=n(7),_=n(9),m=n(8),b=n(5),h=n(2),d=n.n(h),j=n(4),p=n(10),f=n.n(p),O=n(0),v=function(t){var e=t.contacts,n=void 0===e?[]:e,a=t.delContact;return Object(O.jsx)("ul",{className:f.a.Contact__list,children:n.map((function(t){return Object(O.jsxs)("li",{className:f.a.Contact__item,children:[Object(O.jsxs)("span",{children:[t.name," : ",t.number]}),Object(O.jsx)("button",{type:"button",onClick:function(){return a(t.id)},className:f.a.Button__remove,children:"Remove"})]},t.id)}))})},C=function(t){Object(_.a)(n,t);var e=Object(m.a)(n);function n(){var t;Object(l.a)(this,n);for(var a=arguments.length,o=new Array(a),c=0;c<a;c++)o[c]=arguments[c];return(t=e.call.apply(e,[this].concat(o))).state={name:"",number:""},t.handleInputChange=function(e){var n=e.target,a=n.name,o=n.value;t.setState(Object(b.a)({},a,o))},t.handleSubmit=function(e){e.preventDefault(),t.props.onSubmit(t.state),t.onContactsItem(),t.reset()},t.onContactsItem=function(){t.setState({contacts:[t.state.name,t.state.number]})},t.reset=function(){t.setState({name:"",number:""})},t}return Object(u.a)(n,[{key:"render",value:function(){var t=this.state,e=t.name,n=t.number;return Object(O.jsx)(O.Fragment,{children:Object(O.jsxs)("form",{onSubmit:this.handleSubmit,className:d.a.Forma,children:[Object(O.jsx)("label",{className:d.a.nameinput}),"Name",Object(O.jsx)("input",{className:d.a.Forma__input,id:Object(j.a)(),type:"text",name:"name",value:e,placeholder:"Ivan Petrov",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0,onChange:this.handleInputChange}),Object(O.jsx)("label",{className:d.a.nameinput}),"Number",Object(O.jsx)("input",{className:d.a.Forma__input,id:Object(j.a)(),type:"text",name:"number",value:n,placeholder:"+380990000000",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0,onChange:this.handleInputChange}),Object(O.jsx)("button",{type:"submit",className:d.a.Button__form,children:"Add Contact"})]})})}}]),n}(a.Component),x=n(12),g=n.n(x),N=function(t){var e=t.filterContact,n=t.value;return Object(O.jsx)("div",{children:Object(O.jsxs)("form",{className:g.a.Filter__search,children:[Object(O.jsx)("label",{children:"Search"}),Object(O.jsx)("input",{className:g.a.Filter__input,value:n,onChange:e,placeholder:"Enter your name"})]})})},F=n(3),S=n.n(F),k=function(t){Object(_.a)(n,t);var e=Object(m.a)(n);function n(){var t;Object(l.a)(this,n);for(var a=arguments.length,o=new Array(a),c=0;c<a;c++)o[c]=arguments[c];return(t=e.call.apply(e,[this].concat(o))).state={contacts:[],filter:""},t.componentDidMount=function(){var e=localStorage.getItem("contacts"),n=JSON.parse(e);n&&t.setState({contacts:n})},t.onSubmit=function(e){var n={id:Object(j.a)(),name:e.name,number:e.number};if(t.availabilityContact(n.name))return alert("Name ".concat(n.name,"already on your list\n      "));t.setState((function(t){return{contacts:[].concat(Object(i.a)(t.contacts),[Object(s.a)({},n)])}}))},t.availabilityContact=function(e){return t.state.contacts.find((function(t){return t.name===e}))},t.delContact=function(e){t.setState((function(t){return{contacts:t.contacts.filter((function(t){return t.id!==e}))}})),window.localStorage.removeItem("contacts")},t.filterContact=function(e){t.setState({filter:e.target.value})},t}return Object(u.a)(n,[{key:"componentDidUpdate",value:function(t){t&&window.localStorage.setItem("contacts",JSON.stringify(this.state.contacts))}},{key:"render",value:function(){var t=this.state,e=t.contacts,n=t.filter,a=n.toLowerCase(),o=e.filter((function(t){return t.name.toLowerCase().includes(a)}));return Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)("div",{className:S.a.PhoneBookBlock,children:Object(O.jsx)(C,{onSubmit:this.onSubmit})}),Object(O.jsxs)("div",{children:[Object(O.jsxs)("div",{children:[Object(O.jsx)("h2",{className:S.a.Contacts__title,children:"Contacts"}),e.length>0?Object(O.jsx)(N,{filterContact:this.filterContact,value:n}):Object(O.jsx)("p",{className:S.a.Filter__text,children:"No contacts\ud83d\ude41"})]}),Object(O.jsx)(v,{contacts:o,delContact:this.delContact})]})]})}}]),n}(a.Component);var y=function(){return Object(O.jsx)("div",{className:S.a.Container,children:Object(O.jsx)(k,{})})};n(22);r.a.render(Object(O.jsx)(o.a.StrictMode,{children:Object(O.jsx)(y,{})}),document.getElementById("root"))},3:function(t,e,n){t.exports={Container:"PhoneBook_Container__2wQ_Z",Contacts__title:"PhoneBook_Contacts__title__1uPsK",Filter__text:"PhoneBook_Filter__text__3_4v4"}}},[[23,1,2]]]);
//# sourceMappingURL=main.a6e7eac7.chunk.js.map