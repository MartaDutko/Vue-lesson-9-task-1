(function(){"use strict";var e={4232:function(e,t,n){var a=n(9242),r=n(3396);function o(e,t){const n=(0,r.up)("router-link"),a=(0,r.up)("router-view");return(0,r.wg)(),(0,r.iD)(r.HY,null,[(0,r._)("nav",null,[(0,r.Wm)(n,{to:"/"},{default:(0,r.w5)((()=>[(0,r.Uk)("Home")])),_:1}),(0,r.Uk)(" | "),(0,r.Wm)(n,{to:"/about"},{default:(0,r.w5)((()=>[(0,r.Uk)("About")])),_:1}),(0,r.Uk)(" | "),(0,r.Wm)(n,{to:"/info_contacts"},{default:(0,r.w5)((()=>[(0,r.Uk)("Інформація про контакти")])),_:1})]),(0,r.Wm)(a)],64)}var l=n(89);const s={},u=(0,l.Z)(s,[["render",o]]);var i=u,c=n(2483);const m={class:"home"};function p(e,t,n,a,o,l){const s=(0,r.up)("company-manager");return(0,r.wg)(),(0,r.iD)("div",m,[(0,r.Wm)(s)])}const d={class:"wrapper"},y={class:"createCompanyBtn"};function f(e,t,n,a,o,l){const s=(0,r.up)("company-filters"),u=(0,r.up)("companies-list");return(0,r.wg)(),(0,r.iD)("div",d,[(0,r.Wm)(s),(0,r.Wm)(u,{companyData:e.getFilterList},null,8,["companyData"]),(0,r._)("div",y,[(0,r._)("button",{class:"create",onClick:t[0]||(t[0]=(...e)=>l.onCreate&&l.onCreate(...e))},"Create Company")])])}n(560);var v=n(65);const b=(0,r._)("h3",null,"Filters",-1),h={class:"filter__block"};function w(e,t,n,o,l,s){return(0,r.wg)(),(0,r.iD)("div",null,[b,(0,r._)("div",h,[(0,r._)("label",null,[(0,r.Uk)(" Company "),(0,r.wy)((0,r._)("input",{"onUpdate:modelValue":t[0]||(t[0]=e=>s.companyValue=e),type:"text"},null,512),[[a.nr,s.companyValue]])]),(0,r._)("label",null,[(0,r.Uk)(" Level "),(0,r.wy)((0,r._)("input",{"onUpdate:modelValue":t[1]||(t[1]=e=>s.levelValue=e),type:"text"},null,512),[[a.nr,s.levelValue]])]),(0,r._)("label",null,[(0,r.Uk)(" Year "),(0,r.wy)((0,r._)("input",{"onUpdate:modelValue":t[2]||(t[2]=e=>s.yearValue=e),type:"number"},null,512),[[a.nr,s.yearValue]])]),(0,r._)("label",null,[(0,r.Uk)(" Owner "),(0,r.wy)((0,r._)("input",{"onUpdate:modelValue":t[3]||(t[3]=e=>s.ownerValue=e),type:"text"},null,512),[[a.nr,s.ownerValue]])])])])}var V={name:"CompanyFilters",computed:{...(0,v.Se)(["getCompanyValuestate","getLevelValuestate","getYearValuestate","getOwnerValuestate"]),companyValue:{get(){return this.getCompanyValuestate},set(e){return this.setCompanyValuestate(e)}},levelValue:{get(){return this.getLevelValuestate},set(e){return this.setLevelValuestate(e)}},yearValue:{get(){return this.getYearValuestate},set(e){return this.setYearValue(e)}},ownerValue:{get(){return this.getOwnerValuestate},set(e){return this.setOwnerValuestate(e)}}},methods:{...(0,v.nv)(["setCompanyValuestate","setLevelValuestate","setYearValue","setOwnerValuestate"])}};const O=(0,l.Z)(V,[["render",w]]);var _=O;const C=e=>((0,r.dD)("data-v-ec4240d2"),e=e(),(0,r.Cn)(),e),g=C((()=>(0,r._)("hr",null,null,-1))),U=C((()=>(0,r._)("h3",null,"Companies list",-1))),k={class:"wrapper__list"},L=C((()=>(0,r._)("hr",null,null,-1)));function j(e,t,n,a,o,l){const s=(0,r.up)("company-item");return(0,r.wg)(),(0,r.iD)(r.HY,null,[g,U,(0,r._)("div",k,[((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(n.companyData,(e=>((0,r.wg)(),(0,r.iD)("div",{key:e.id,class:"block-item"},[(0,r.Wm)(s,{"company-info":e},null,8,["company-info"])])))),128))]),L],64)}var D=n(7139);const E={class:"company-info"},I={class:"block-btn"};function S(e,t,n,a,o,l){return(0,r.wg)(),(0,r.iD)("div",E,[(0,r._)("span",null,(0,D.zw)(n.companyInfo.companyName),1),(0,r._)("span",null,(0,D.zw)(n.companyInfo.level),1),(0,r._)("span",null,(0,D.zw)(n.companyInfo.taxation),1),(0,r._)("span",null,(0,D.zw)(n.companyInfo.yearOfEstablishment),1),(0,r._)("span",null,(0,D.zw)(n.companyInfo.owner),1),(0,r._)("div",I,[(0,r._)("button",{class:"btn-delete",onClick:t[0]||(t[0]=e=>l.onDelete(n.companyInfo.id))},"Delit"),(0,r._)("button",{class:"btn-edit",onClick:t[1]||(t[1]=e=>l.onEdit(n.companyInfo.id))},"Edit")])])}var x={name:"CompanyItem",props:{companyInfo:{type:Object,default:()=>({})}},methods:{...(0,v.nv)(["deleteUser"]),onDelete(e){console.log(e),this.deleteUser(e)},onEdit(e){this.$router.push({name:"company",params:{id:e}})}}};const N=(0,l.Z)(x,[["render",S],["__scopeId","data-v-19d45c02"]]);var Y=N,M={name:"CompaniesList",components:{CompanyItem:Y},props:{companyData:{type:Array,default:()=>[]}}};const W=(0,l.Z)(M,[["render",j],["__scopeId","data-v-ec4240d2"]]);var Z=W,F={name:"CompanyManager",components:{CompanyFilters:_,CompaniesList:Z},computed:{...(0,v.Se)(["getFilterList"])},methods:{onCreate(){this.$router.push({name:"company"})}}};const B=(0,l.Z)(F,[["render",f],["__scopeId","data-v-e2ededae"]]);var z=B,H={name:"HomeView",components:{CompanyManager:z}};const T=(0,l.Z)(H,[["render",p]]);var $=T;const A={class:"about"},J=(0,r._)("h1",null,"This is an about page",-1),P=[J];function G(e,t,n,a,o,l){return(0,r.wg)(),(0,r.iD)("div",A,P)}var K={name:"AboutView"};const q=(0,l.Z)(K,[["render",G]]);var Q=q;const R=(0,r._)("p",null,"My contacts",-1),X=[R];function ee(e,t,n,a,o,l){return(0,r.wg)(),(0,r.iD)("div",null,X)}var te={name:"InfoContact"};const ne=(0,l.Z)(te,[["render",ee]]);var ae=ne;const re={class:"block__form"};function oe(e,t,n,o,l,s){return(0,r.wg)(),(0,r.iD)("div",re,[(0,r._)("label",null,[(0,r.Uk)(" Company "),(0,r.wy)((0,r._)("input",{"onUpdate:modelValue":t[0]||(t[0]=e=>l.currentObject.companyName=e),type:"text"},null,512),[[a.nr,l.currentObject.companyName]])]),(0,r._)("label",null,[(0,r.Uk)(" Level "),(0,r.wy)((0,r._)("input",{"onUpdate:modelValue":t[1]||(t[1]=e=>l.currentObject.level=e),type:"text"},null,512),[[a.nr,l.currentObject.level]])]),(0,r._)("label",null,[(0,r.Uk)(" Year "),(0,r.wy)((0,r._)("input",{"onUpdate:modelValue":t[2]||(t[2]=e=>l.currentObject.yearOfEstablishment=e),type:"number"},null,512),[[a.nr,l.currentObject.yearOfEstablishment]])]),(0,r._)("label",null,[(0,r.Uk)(" Owner "),(0,r.wy)((0,r._)("input",{"onUpdate:modelValue":t[3]||(t[3]=e=>l.currentObject.owner=e),type:"text"},null,512),[[a.nr,l.currentObject.owner]])]),s.userId?((0,r.wg)(),(0,r.iD)("button",{key:0,class:"btn",onClick:t[4]||(t[4]=(...e)=>s.onSave&&s.onSave(...e))},"Save")):((0,r.wg)(),(0,r.iD)("button",{key:1,class:"btn",onClick:t[5]||(t[5]=(...e)=>s.onCreate&&s.onCreate(...e))},"Create"))])}var le={name:"CompanyEdition",data(){return{currentObject:{companyName:null,level:null,yearOfEstablishment:null,owner:null}}},computed:{...(0,v.Se)(["getUserById"]),userId(){return this.$route.params.id},isEmpty(){let{companyName:e,level:t,yearOfEstablishment:n,owner:a}=this.currentObject;return e&&t&&n&&a}},methods:{...(0,v.nv)(["editUser","createUser"]),onSave(){this.editUser(this.currentObject),this.$router.push({name:"home"})},onCreate(){this.isEmpty&&(this.currentObject={...this.currentObject,id:(new Date).getMilliseconds()},this.createUser(this.currentObject),this.$router.push({name:"home"}))}},created(){this.currentObject=this.getUserById(this.userId)}};const se=(0,l.Z)(le,[["render",oe],["__scopeId","data-v-2e24b89f"]]);var ue=se;const ie=[{path:"/",name:"home",component:$},{path:"/about",name:"about",component:Q},{path:"/info_contacts",name:"informationContacts",component:ae},{path:"/company/:id?",name:"company",component:ue}],ce=(0,c.p7)({history:(0,c.PO)("/Vue-lesson-9-task-1/"),routes:ie});var me=ce,pe=(0,v.MT)({state:{companiesList:[{id:1,companyName:"Company A",level:"M",yearOfEstablishment:2005,owner:"John Doe"},{id:2,companyName:"Company B",level:"L",yearOfEstablishment:1998,owner:"Jane Smith"},{id:3,companyName:"Company C",level:"S",yearOfEstablishment:2010,owner:"Sam Joson"},{id:4,companyName:"Company D",level:"M",yearOfEstablishment:2002,owner:"Emily Davis"},{id:5,companyName:"Company E",level:"L",yearOfEstablishment:1995,owner:"Liss Wilson"},{id:6,companyName:"Company F",level:"S",yearOfEstablishment:2012,owner:"Sarah Brown"},{id:7,companyName:"Company G",level:"M",yearOfEstablishment:2008,owner:"David Taylor"}],filterObj:{companyValue:null,levelValue:null,yearValue:null,ownerValue:null}},getters:{getCompanyValuestate:e=>e.filterObj.companyValue,getLevelValuestate:e=>e.filterObj.levelValue,getYearValuestate:e=>e.filterObj.yearValue,getOwnerValuestate:e=>e.filterObj.ownerValue,getFilterList:({filterObj:e,companiesList:t})=>{const{companyValue:n,levelValue:a,yearValue:r,ownerValue:o}=e;return n||a||r||o?t.filter((e=>(!n||e.companyName.toLowerCase().includes(n.toLowerCase()))&&(!a||e.level.toLowerCase()===a.toLowerCase())&&(!r||e.yearOfEstablishment.toString().includes(r.toString()))&&(!o||e.owner.toLowerCase().includes(o.toLowerCase())))):t},getCompaniesList:({companiesList:e})=>e,getUserById:e=>t=>({...e.companiesList.find((e=>e.id==t))})},mutations:{setCompanyValuestate(e,t){e.filterObj.companyValue=t},setLevelValuestate(e,t){e.filterObj.levelValue=t},setYearValue(e,t){e.filterObj.yearValue=t},setOwnerValuestate(e,t){e.filterObj.ownerValue=t},editUser(e,t){let n=e.companiesList.findIndex((e=>e.id===t.id));e.companiesList[n]={...t}},createUser(e,t){e.companiesList.push({...t})},deleteUser(e,t){e.companiesList=e.companiesList.filter((e=>e.id!==t))}},actions:{setCompanyValuestate({commit:e},t){e("setCompanyValuestate",t)},setLevelValuestate({commit:e},t){e("setLevelValuestate",t)},setYearValue({commit:e},t){e("setYearValue",t)},setOwnerValuestate({commit:e},t){e("setOwnerValuestate",t)},editUser({commit:e},t){e("editUser",t)},createUser({commit:e},t){e("createUser",t)},deleteUser({commit:e},t){e("deleteUser",t)}},modules:{}});(0,a.ri)(i).use(pe).use(me).mount("#app")}},t={};function n(a){var r=t[a];if(void 0!==r)return r.exports;var o=t[a]={exports:{}};return e[a].call(o.exports,o,o.exports,n),o.exports}n.m=e,function(){var e=[];n.O=function(t,a,r,o){if(!a){var l=1/0;for(c=0;c<e.length;c++){a=e[c][0],r=e[c][1],o=e[c][2];for(var s=!0,u=0;u<a.length;u++)(!1&o||l>=o)&&Object.keys(n.O).every((function(e){return n.O[e](a[u])}))?a.splice(u--,1):(s=!1,o<l&&(l=o));if(s){e.splice(c--,1);var i=r();void 0!==i&&(t=i)}}return t}o=o||0;for(var c=e.length;c>0&&e[c-1][2]>o;c--)e[c]=e[c-1];e[c]=[a,r,o]}}(),function(){n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,{a:t}),t}}(),function(){n.d=function(e,t){for(var a in t)n.o(t,a)&&!n.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:t[a]})}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={143:0};n.O.j=function(t){return 0===e[t]};var t=function(t,a){var r,o,l=a[0],s=a[1],u=a[2],i=0;if(l.some((function(t){return 0!==e[t]}))){for(r in s)n.o(s,r)&&(n.m[r]=s[r]);if(u)var c=u(n)}for(t&&t(a);i<l.length;i++)o=l[i],n.o(e,o)&&e[o]&&e[o][0](),e[o]=0;return n.O(c)},a=self["webpackChunktask_2"]=self["webpackChunktask_2"]||[];a.forEach(t.bind(null,0)),a.push=t.bind(null,a.push.bind(a))}();var a=n.O(void 0,[998],(function(){return n(4232)}));a=n.O(a)})();
//# sourceMappingURL=app.d59683ab.js.map