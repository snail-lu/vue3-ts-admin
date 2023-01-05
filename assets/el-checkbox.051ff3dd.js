import{bv as O,j as G,a6 as oe,a8 as te,k as g,bw as R,bl as E,a0 as D,l as A,a1 as T,$ as U,C as B,a2 as $,bx as se,a3 as j,a4 as P,aU as K,af as q,a as F,ag as W,u as z,o as x,q as H,s as J,g as M,an as S,by as I,e,c as y,a$ as L,n as h,r as w,ae as ue,i as Q,t as X,f as V,v as Y,_ as N,h as ie,x as re,a5 as de,w as ce,am as Z}from"./index.1cefbf14.js";const be={modelValue:{type:Array,default:()=>[]},disabled:Boolean,min:{type:Number,default:void 0},max:{type:Number,default:void 0},size:O,id:{type:String,default:void 0},label:{type:String,default:void 0},fill:{type:String,default:void 0},textColor:{type:String,default:void 0},tag:{type:String,default:"div"},validateEvent:{type:Boolean,default:!0}},_={modelValue:{type:[Number,String,Boolean],default:()=>{}},label:{type:[String,Boolean,Number,Object]},indeterminate:Boolean,disabled:Boolean,checked:Boolean,name:{type:String,default:void 0},trueLabel:{type:[String,Number],default:void 0},falseLabel:{type:[String,Number],default:void 0},id:{type:String,default:void 0},controls:{type:String,default:void 0},border:Boolean,size:O,tabindex:[String,Number],validateEvent:{type:Boolean,default:!0}},C=()=>{const n=G(oe,{}),r=G(te,{}),t=G("CheckboxGroup",{}),i=g(()=>t&&(t==null?void 0:t.name)==="ElCheckboxGroup"),c=g(()=>r.size);return{isGroup:i,checkboxGroup:t,elForm:n,elFormItemSize:c,elFormItem:r}},ve=(n,{elFormItem:r})=>{const{inputId:t,isLabeledByFormItem:i}=R(n,{formItemContext:r});return{isLabeledByFormItem:i,groupId:t}},me=n=>{const r=B(!1),{emit:t}=K(),{isGroup:i,checkboxGroup:c,elFormItem:m}=C(),v=B(!1);return{model:g({get(){var s,u;return i.value?(s=c.modelValue)==null?void 0:s.value:(u=n.modelValue)!=null?u:r.value},set(s){var u;i.value&&Array.isArray(s)?(v.value=c.max!==void 0&&s.length>c.max.value,v.value===!1&&((u=c==null?void 0:c.changeEvent)==null||u.call(c,s))):(t(E,s),r.value=s)}}),isGroup:i,isLimitExceeded:v,elFormItem:m}},fe=(n,r,{model:t})=>{const{isGroup:i,checkboxGroup:c}=C(),m=B(!1),v=$(c==null?void 0:c.checkboxGroupSize,{prop:!0}),p=g(()=>{const l=t.value;return se(l)==="[object Boolean]"?l:Array.isArray(l)?l.includes(n.label):l!=null?l===n.trueLabel:!!l}),s=$(g(()=>{var l;return i.value?(l=c==null?void 0:c.checkboxGroupSize)==null?void 0:l.value:void 0})),u=g(()=>!!(r.default||n.label));return{isChecked:p,focus:m,size:v,checkboxSize:s,hasOwnLabel:u}},pe=(n,{model:r,isChecked:t})=>{const{elForm:i,isGroup:c,checkboxGroup:m}=C(),v=g(()=>{var s,u;const l=(s=m.max)==null?void 0:s.value,k=(u=m.min)==null?void 0:u.value;return!!(l||k)&&r.value.length>=l&&!t.value||r.value.length<=k&&t.value});return{isDisabled:g(()=>{var s,u;const l=n.disabled||(i==null?void 0:i.disabled);return(u=c.value?((s=m.disabled)==null?void 0:s.value)||l||v.value:l)!=null?u:!1}),isLimitDisabled:v}},ke=(n,{model:r})=>{function t(){Array.isArray(r.value)&&!r.value.includes(n.label)?r.value.push(n.label):r.value=n.trueLabel||!0}n.checked&&t()},he=(n,{model:r,isLimitExceeded:t,hasOwnLabel:i,isDisabled:c,isLabeledByFormItem:m})=>{const{elFormItem:v,checkboxGroup:p}=C(),{emit:s}=K();function u(a){var d,f;return a===n.trueLabel||a===!0?(d=n.trueLabel)!=null?d:!0:(f=n.falseLabel)!=null?f:!1}function l(a,d){s("change",u(a),d)}function k(a){if(t.value)return;const d=a.target;s("change",u(d.checked),a)}async function b(a){t.value||!i.value&&!c.value&&m.value&&(r.value=u([!1,n.falseLabel].includes(r.value)),await q(),l(r.value,a))}const o=g(()=>{var a;return((a=p.validateEvent)==null?void 0:a.value)||n.validateEvent});return j(()=>n.modelValue,()=>{var a;o.value&&((a=v==null?void 0:v.validate)==null||a.call(v,"change").catch(d=>P()))}),{handleChange:k,onClickRoot:b}},ee={[E]:n=>D(n)||A(n)||T(n),change:n=>D(n)||A(n)||T(n)},ge={[E]:n=>U(n),change:n=>U(n)},ae=(n,r)=>{const{model:t,isGroup:i,isLimitExceeded:c,elFormItem:m}=me(n),{focus:v,size:p,isChecked:s,checkboxSize:u,hasOwnLabel:l}=fe(n,r,{model:t}),{isDisabled:k}=pe(n,{model:t,isChecked:s}),{inputId:b,isLabeledByFormItem:o}=R(n,{formItemContext:m,disableIdGeneration:l,disableIdManagement:i}),{handleChange:a,onClickRoot:d}=he(n,{model:t,isLimitExceeded:c,hasOwnLabel:l,isDisabled:k,isLabeledByFormItem:o});return ke(n,{model:t}),{elFormItem:m,inputId:b,isLabeledByFormItem:o,isChecked:s,isDisabled:k,isGroup:i,checkboxSize:u,hasOwnLabel:l,model:t,handleChange:a,onClickRoot:d,focus:v,size:p}},xe=["tabindex","role","aria-checked"],ye=["id","aria-hidden","name","tabindex","disabled","true-value","false-value"],Ce=["id","aria-hidden","disabled","value","name","tabindex"],Se={name:"ElCheckbox"},Ie=F({...Se,props:_,emits:ee,setup(n){const r=n,t=W(),{inputId:i,isLabeledByFormItem:c,isChecked:m,isDisabled:v,checkboxSize:p,hasOwnLabel:s,model:u,handleChange:l,onClickRoot:k,focus:b}=ae(r,t),o=z("checkbox");return(a,d)=>(x(),H(Y(!e(s)&&e(c)?"span":"label"),{class:h([e(o).b(),e(o).m(e(p)),e(o).is("disabled",e(v)),e(o).is("bordered",a.border),e(o).is("checked",e(m))]),"aria-controls":a.indeterminate?a.controls:null,onClick:e(k)},{default:J(()=>[M("span",{class:h([e(o).e("input"),e(o).is("disabled",e(v)),e(o).is("checked",e(m)),e(o).is("indeterminate",a.indeterminate),e(o).is("focus",e(b))]),tabindex:a.indeterminate?0:void 0,role:a.indeterminate?"checkbox":void 0,"aria-checked":a.indeterminate?"mixed":void 0},[a.trueLabel||a.falseLabel?S((x(),y("input",{key:0,id:e(i),"onUpdate:modelValue":d[0]||(d[0]=f=>L(u)?u.value=f:null),class:h(e(o).e("original")),type:"checkbox","aria-hidden":a.indeterminate?"true":"false",name:a.name,tabindex:a.tabindex,disabled:e(v),"true-value":a.trueLabel,"false-value":a.falseLabel,onChange:d[1]||(d[1]=(...f)=>e(l)&&e(l)(...f)),onFocus:d[2]||(d[2]=f=>b.value=!0),onBlur:d[3]||(d[3]=f=>b.value=!1)},null,42,ye)),[[I,e(u)]]):S((x(),y("input",{key:1,id:e(i),"onUpdate:modelValue":d[4]||(d[4]=f=>L(u)?u.value=f:null),class:h(e(o).e("original")),type:"checkbox","aria-hidden":a.indeterminate?"true":"false",disabled:e(v),value:a.label,name:a.name,tabindex:a.tabindex,onChange:d[5]||(d[5]=(...f)=>e(l)&&e(l)(...f)),onFocus:d[6]||(d[6]=f=>b.value=!0),onBlur:d[7]||(d[7]=f=>b.value=!1)},null,42,Ce)),[[I,e(u)]]),M("span",{class:h(e(o).e("inner"))},null,2)],10,xe),e(s)?(x(),y("span",{key:0,class:h(e(o).e("label"))},[w(a.$slots,"default"),a.$slots.default?V("v-if",!0):(x(),y(ue,{key:0},[Q(X(a.label),1)],64))],2)):V("v-if",!0)]),_:3},8,["class","aria-controls","onClick"]))}});var Le=N(Ie,[["__file","/home/runner/work/element-plus/element-plus/packages/components/checkbox/src/checkbox.vue"]]);const Ee=["name","tabindex","disabled","true-value","false-value"],Ge=["name","tabindex","disabled","value"],Be={name:"ElCheckboxButton"},$e=F({...Be,props:_,emits:ee,setup(n){const r=n,t=W(),{focus:i,isChecked:c,isDisabled:m,size:v,model:p,handleChange:s}=ae(r,t),{checkboxGroup:u}=C(),l=z("checkbox"),k=g(()=>{var b,o,a,d;const f=(o=(b=u==null?void 0:u.fill)==null?void 0:b.value)!=null?o:"";return{backgroundColor:f,borderColor:f,color:(d=(a=u==null?void 0:u.textColor)==null?void 0:a.value)!=null?d:"",boxShadow:f?`-1px 0 0 0 ${f}`:void 0}});return(b,o)=>(x(),y("label",{class:h([e(l).b("button"),e(l).bm("button",e(v)),e(l).is("disabled",e(m)),e(l).is("checked",e(c)),e(l).is("focus",e(i))])},[b.trueLabel||b.falseLabel?S((x(),y("input",{key:0,"onUpdate:modelValue":o[0]||(o[0]=a=>L(p)?p.value=a:null),class:h(e(l).be("button","original")),type:"checkbox",name:b.name,tabindex:b.tabindex,disabled:e(m),"true-value":b.trueLabel,"false-value":b.falseLabel,onChange:o[1]||(o[1]=(...a)=>e(s)&&e(s)(...a)),onFocus:o[2]||(o[2]=a=>i.value=!0),onBlur:o[3]||(o[3]=a=>i.value=!1)},null,42,Ee)),[[I,e(p)]]):S((x(),y("input",{key:1,"onUpdate:modelValue":o[4]||(o[4]=a=>L(p)?p.value=a:null),class:h(e(l).be("button","original")),type:"checkbox",name:b.name,tabindex:b.tabindex,disabled:e(m),value:b.label,onChange:o[5]||(o[5]=(...a)=>e(s)&&e(s)(...a)),onFocus:o[6]||(o[6]=a=>i.value=!0),onBlur:o[7]||(o[7]=a=>i.value=!1)},null,42,Ge)),[[I,e(p)]]),b.$slots.default||b.label?(x(),y("span",{key:2,class:h(e(l).be("button","inner")),style:ie(e(c)?e(k):void 0)},[w(b.$slots,"default",{},()=>[Q(X(b.label),1)])],6)):V("v-if",!0)],2))}});var le=N($e,[["__file","/home/runner/work/element-plus/element-plus/packages/components/checkbox/src/checkbox-button.vue"]]);const Ve={name:"ElCheckboxGroup"},Fe=F({...Ve,props:be,emits:ge,setup(n,{emit:r}){const t=n,{elFormItem:i}=C(),{groupId:c,isLabeledByFormItem:m}=ve(t,{elFormItem:i}),v=$(),p=z("checkbox"),s=l=>{r(E,l),q(()=>{r("change",l)})},u=g({get(){return t.modelValue},set(l){s(l)}});return re("CheckboxGroup",{name:"ElCheckboxGroup",modelValue:u,...de(t),checkboxGroupSize:v,changeEvent:s}),j(()=>t.modelValue,()=>{var l;t.validateEvent&&((l=i.validate)==null||l.call(i,"change").catch(k=>P()))}),(l,k)=>(x(),H(Y(l.tag),{id:e(c),class:h(e(p).b("group")),role:"group","aria-label":e(m)?void 0:l.label||"checkbox-group","aria-labelledby":e(m)?e(i).labelId:void 0},{default:J(()=>[w(l.$slots,"default")]),_:3},8,["id","class","aria-label","aria-labelledby"]))}});var ne=N(Fe,[["__file","/home/runner/work/element-plus/element-plus/packages/components/checkbox/src/checkbox-group.vue"]]);const we=ce(Le,{CheckboxButton:le,CheckboxGroup:ne});Z(le);const Ne=Z(ne);export{we as E,Ne as a};
