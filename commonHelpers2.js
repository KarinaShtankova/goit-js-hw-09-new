import"./assets/modulepreload-polyfill-ec808ebb.js";const t=document.querySelector(".feedback-form");t.addEventListener("input",r);const o="feedback-form-state";let n,l;const s={email:"",message:""};function r(a){n=a.target.type,l=a.target.value,n==="email"?s.email=l:n==="textarea"&&(s.message=l),localStorage.setItem(o,JSON.stringify(s))}t.addEventListener("submit",f);const c=localStorage.getItem(o),e=JSON.parse(c),m=t.elements.message;m.value=e!=null?e.message:"";const i=t.elements.email;i.value=e!=null?e.email:"";function f(a){a.preventDefault();const u={email:i.value,message:m.value};console.log(u),localStorage.removeItem(o),t.reset()}
//# sourceMappingURL=commonHelpers2.js.map
