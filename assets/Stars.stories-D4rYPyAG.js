import{j as c}from"./jsx-runtime-D_zvdyIk.js";import{P as U,u as v,D as f,a as F,V as I,d as R,C as $}from"./styled-components.browser.esm-DjhikqQ8.js";import{r as e}from"./index-0yr9KlQE.js";import{v as k,i as B}from"./constants-CiqoOa7P.js";import{_ as g}from"./extends-CF3RwP-h.js";const x=k>=154?"opaque_fragment":"output_fragment";class D extends U{constructor(t){super(t),this.onBeforeCompile=(r,s)=>{const{isWebGL2:o}=s.capabilities;r.fragmentShader=r.fragmentShader.replace(`#include <${x}>`,`
        ${o?`#include <${x}>`:`#extension GL_OES_standard_derivatives : enable
#include <${x}>`}
      vec2 cxy = 2.0 * gl_PointCoord - 1.0;
      float r = dot(cxy, cxy);
      float delta = fwidth(r);     
      float mask = 1.0 - smoothstep(1.0 - delta, 1.0 + delta, r);
      gl_FragColor = vec4(gl_FragColor.rgb, mask * gl_FragColor.a );
      #include <tonemapping_fragment>
      #include <${k>=154?"colorspace_fragment":"encodings_fragment"}>
      `)}}}const q=e.forwardRef((n,t)=>{const[r]=e.useState(()=>new D(null));return e.createElement("primitive",g({},n,{object:r,ref:t,attach:"material"}))});let u,m;const N=e.createContext(null),C=new F,E=new I,W=e.forwardRef(({children:n,range:t,limit:r=1e3,...s},o)=>{const a=e.useRef(null);e.useImperativeHandle(o,()=>a.current,[]);const[l,d]=e.useState([]),[[i,h,y]]=e.useState(()=>[new Float32Array(r*3),Float32Array.from({length:r*3},()=>1),Float32Array.from({length:r},()=>1)]);e.useEffect(()=>{a.current.geometry.attributes.position.needsUpdate=!0}),v(()=>{for(a.current.updateMatrix(),a.current.updateMatrixWorld(),C.copy(a.current.matrixWorld).invert(),a.current.geometry.drawRange.count=Math.min(r,t!==void 0?t:r,l.length),u=0;u<l.length;u++)m=l[u].current,m.getWorldPosition(E).applyMatrix4(C),E.toArray(i,u*3),a.current.geometry.attributes.position.needsUpdate=!0,m.matrixWorldNeedsUpdate=!0,m.color.toArray(h,u*3),a.current.geometry.attributes.color.needsUpdate=!0,y.set([m.size],u),a.current.geometry.attributes.size.needsUpdate=!0});const M=e.useMemo(()=>({getParent:()=>a,subscribe:_=>(d(b=>[...b,_]),()=>d(b=>b.filter(j=>j.current!==_.current)))}),[]);return e.createElement("points",g({userData:{instances:l},matrixAutoUpdate:!1,ref:a,raycast:()=>null},s),e.createElement("bufferGeometry",null,e.createElement("bufferAttribute",{attach:"attributes-position",count:i.length/3,array:i,itemSize:3,usage:f}),e.createElement("bufferAttribute",{attach:"attributes-color",count:h.length/3,array:h,itemSize:3,usage:f}),e.createElement("bufferAttribute",{attach:"attributes-size",count:y.length,array:y,itemSize:1,usage:f})),e.createElement(N.Provider,{value:M},n))}),T=e.forwardRef(({children:n,positions:t,colors:r,sizes:s,stride:o=3,...a},l)=>{const d=e.useRef(null);return e.useImperativeHandle(l,()=>d.current,[]),v(()=>{const i=d.current.geometry.attributes;i.position.needsUpdate=!0,r&&(i.color.needsUpdate=!0),s&&(i.size.needsUpdate=!0)}),e.createElement("points",g({ref:d},a),e.createElement("bufferGeometry",null,e.createElement("bufferAttribute",{attach:"attributes-position",count:t.length/o,array:t,itemSize:o,usage:f}),r&&e.createElement("bufferAttribute",{attach:"attributes-color",count:r.length/o,array:r,itemSize:3,usage:f}),s&&e.createElement("bufferAttribute",{attach:"attributes-size",count:s.length/o,array:s,itemSize:1,usage:f})),n)}),G=e.forwardRef((n,t)=>n.positions instanceof Float32Array?e.createElement(T,g({},n,{ref:t})):e.createElement(W,g({},n,{ref:t}))),S=({pointColor:n="#013062"})=>{const t=e.useRef(null),[r]=e.useState(()=>B(new Float32Array(5e3),{radius:1.5}));return v((s,o)=>{const a=t==null?void 0:t.current;a&&(a.rotation.x-=o/10,a.rotation.y-=o/15)}),c.jsx("group",{rotation:[0,0,Math.PI/4],children:c.jsx(G,{ref:t,positions:r,stride:3,frustumCulled:!1,children:c.jsx(q,{transparent:!0,color:n,size:.005,sizeAttenuation:!0,depthWrite:!1})})})};S.__docgenInfo={description:"",methods:[],displayName:"Stars",props:{pointColor:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"#013062"',computed:!1}}}};const V=R($)`
  position: fixed !important;
  z-index: -1;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: ${n=>n.$backgroundStyle||"linear-gradient(0deg, #000000, #013062)"}; 
`,z=({children:n,background:t="linear-gradient(0deg, #000000, #013062)"})=>c.jsx(V,{$backgroundStyle:t,className:"gle-background-canvas",camera:{position:[0,0,1]},children:n});z.__docgenInfo={description:"",methods:[],displayName:"CanvasBackground",props:{children:{required:!1,tsType:{name:"ReactNode"},description:""},background:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"linear-gradient(0deg, #000000, #013062)"',computed:!1}}}};const X={component:S,title:"gle-r3f-components/Stars",argTypes:{}},H=R.div`
  width: 100vw;
  height: 100vh; 
`,p=({})=>c.jsx(H,{children:c.jsx(z,{children:c.jsx(S,{})})});p.args={};p.__docgenInfo={description:"",methods:[],displayName:"Default",props:{pointColor:{required:!1,tsType:{name:"string"},description:""}}};var w,A,P;p.parameters={...p.parameters,docs:{...(w=p.parameters)==null?void 0:w.docs,source:{originalSource:`({}: StarsProps) => {
  return <StarsContainer>
            <CanvasBackground>
                <Stars />
            </CanvasBackground>
        </StarsContainer>;
}`,...(P=(A=p.parameters)==null?void 0:A.docs)==null?void 0:P.source}}};const Y=["Default"];export{p as Default,Y as __namedExportsOrder,X as default};
