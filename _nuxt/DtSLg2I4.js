import{q as U,s,t as W,u as S,v as d,c as B,x as q,o as $,a as H,y as w}from"./Bbew42t6.js";import{t as L}from"./B-Sd5CxO.js";const F={key:0,style:{display:"none"}},R=["innerHTML"],V=["innerHTML"],Y=U({__name:"icon",props:{border:{type:Boolean,default:!1},fixedWidth:{type:Boolean,default:!1},flip:{type:[Boolean,String],default:!1,validator:o=>[!0,!1,"horizontal","vertical","both"].includes(o)},icon:{type:[Object,Array,String],required:!0},mask:{type:[Object,Array,String],default:null},maskId:{type:String,default:void 0},listItem:{type:Boolean,default:!1},pull:{type:String,default:void 0,validator:o=>["right","left"].includes(o)},pulse:{type:Boolean,default:!1},rotation:{type:[String,Number],default:void 0,validator:o=>[90,180,270].includes(Number.parseInt(o,10))},swapOpacity:{type:Boolean,default:!1},size:{type:String,default:void 0,validator:o=>["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"].includes(o)},spin:{type:Boolean,default:!1},transform:{type:[String,Object],default:void 0},symbol:{type:[Boolean,String],default:!1},title:{type:String,default:void 0},titleId:{type:String,default:void 0},inverse:{type:Boolean,default:!1},bounce:{type:Boolean,default:!1},shake:{type:Boolean,default:!1},beat:{type:Boolean,default:!1},fade:{type:Boolean,default:!1},beatFade:{type:Boolean,default:!1},spinPulse:{type:Boolean,default:!1},spinReverse:{type:Boolean,default:!1}},setup(o){const e=o,v=s(()=>x(e.icon)),m=s(()=>x(e.mask)),f=s(()=>{if(e.transform){const t=typeof e.transform!="object"?W.transform(e.transform):e.transform;if(t&&L(t))return I(t)}}),l=s(()=>S(v.value,{classes:g.value,title:e.title,titleId:e.titleId})),c=s(()=>S(m.value)),y=s(()=>{var a,n,i,r,u,p;const t={"aria-hidden":!0,"data-prefix":(a=l.value)==null?void 0:a.prefix,"data-icon":(n=l.value)==null?void 0:n.iconName,class:g.value,focusable:!1,role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:`0 0 ${(i=l.value)==null?void 0:i.icon[0]} ${(r=l.value)==null?void 0:r.icon[1]}`};return e.symbol&&(t.id=[(u=l.value)==null?void 0:u.prefix,"fa",(p=l.value)==null?void 0:p.iconName].join("-")),e.title&&(t["aria-labelledby"]=b.value),t}),h=s(()=>{const t=C();if(c.value){const a=e.maskId||c.value.iconName;return`<defs>
      <clipPath id="clip-${a}">
        <path fill="currentColor" d="${c.value.icon[4]}"></path>
      </clipPath>
      <mask id="mask-${a}" x="0" y="0" width="100%" height="100%" maskUnits="userSpaceOnUse" maskContentUnits="userSpaceOnUse">
        <rect x="0" y="0" width="100%" height="100%" fill="white"></rect>
        ${t}
      </mask>
    </defs>
    <rect fill="currentColor" clip-path="url(#clip-${a})" mask="url(#mask-${a})" x="0" y="0" width="100%" height="100%"></rect>`}return t}),g=s(()=>{const t={"fa-spin":e.spin,"fa-pulse":e.pulse,"fa-fw":e.fixedWidth,"fa-border":e.border,"fa-li":e.listItem,"fa-inverse":e.inverse,"fa-flip":e.flip===!0,"fa-flip-horizontal":e.flip==="horizontal"||e.flip==="both","fa-flip-vertical":e.flip==="vertical"||e.flip==="both",[`fa-${e.size}`]:e.size!==void 0,[`fa-rotate-${e.rotation}`]:e.rotation!==void 0,[`fa-pull-${e.pull}`]:e.pull!==void 0,"fa-swap-opacity":e.swapOpacity,"fa-bounce":e.bounce,"fa-shake":e.shake,"fa-beat":e.beat,"fa-fade":e.fade,"fa-beat-fade":e.beatFade,"fa-spin-pulse":e.spinPulse,"fa-spin-reverse":e.spinReverse},a=Object.keys(t).map(n=>t[n]?n:null).filter(n=>n);return[d.replacementClass,...a]}),b=s(()=>d.replacementClass+"-title-"+(e.titleId||z()));function x(t){if(t){if(typeof t=="string"){const a={solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab"};let n=a[d.styleDefault]||"fas",i=t.replace(/\bfa-/g,"");if(i.includes(" ")){const r=i.split(/\s+/);r[0]in a&&(n=a[r[0]]),i=r[1]}return{prefix:n,iconName:i}}if(Array.isArray(t)&&t.length===2)return{prefix:t[0],iconName:t[1]};if(typeof t=="object"&&"prefix"in t&&"iconName"in t)return t}}function I(t){var k;const n=((k=l.value)==null?void 0:k.icon[0])||512,i=t.x||0,r=t.y||0,u=t.size||0,p=t.rotate||0,N=t.flipX||0,_=t.flipY||0,j="translate(".concat(String(512/2)," 256)"),O="translate(".concat(String(i*32),", ").concat(String(r*32),") "),A="scale(".concat(String(u/16*(N?-1:1)),", ").concat(String(u/16*(_?-1:1)),") "),M="rotate(".concat(String(p)," 0 0)"),P="".concat(O," ").concat(A," ").concat(M),T="translate(".concat(String(n/2*-1)," -256)");return{outer:j,inner:P,path:T}}function z(){const t="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";let a=12,n="";for(;a-- >0;)n+=t[Math.random()*62|0];return n}function C(){const t=c.value?"black":"currentColor",a=[];let n=l.value.icon[4];return Array.isArray(n)||(n=[n]),n.forEach(i=>{a.push(`<path fill="${t}"${f.value?' transform="'+f.value.path+'"':""} d="${i}"></path>`)}),f.value&&(a.unshift(`<g transform="${f.value.outer}">`,`<g transform="${f.value.inner}">`),a.push("</g>","</g>")),e.title&&a.unshift(`<title id="${b.value}">${e.title}</title>`),a.join("")}return e.icon&&!l.value&&console.info("Could not find main icon",v.value),e.mask&&!c.value&&console.info("Could not find mask icon",m.value),(t,a)=>l.value&&o.symbol?($(),B("svg",F,[H("symbol",w(y.value,{innerHTML:h.value}),null,16,R)])):l.value?($(),B("svg",w({key:1},y.value,{innerHTML:h.value}),null,16,V)):q("",!0)}});export{Y as _};
