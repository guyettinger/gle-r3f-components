import{P as F,u as x,D as p,a as B,V as $,j as u,s as z,C as I}from"./react-three-fiber.esm-886f195d.js";import{r as e}from"./index-76fb7be0.js";import{v as M,i as D}from"./constants-92ff30e1.js";import{_ as g}from"./extends-98964cd2.js";import"./_commonjsHelpers-de833af9.js";const v=M>=154?"opaque_fragment":"output_fragment";class N extends F{constructor(t){super(t),this.onBeforeCompile=(a,s)=>{const{isWebGL2:o}=s.capabilities;a.fragmentShader=a.fragmentShader.replace(`#include <${v}>`,`
        ${o?`#include <${v}>`:`#extension GL_OES_standard_derivatives : enable
#include <${v}>`}
      vec2 cxy = 2.0 * gl_PointCoord - 1.0;
      float r = dot(cxy, cxy);
      float delta = fwidth(r);     
      float mask = 1.0 - smoothstep(1.0 - delta, 1.0 + delta, r);
      gl_FragColor = vec4(gl_FragColor.rgb, mask * gl_FragColor.a );
      #include <tonemapping_fragment>
      #include <${M>=154?"colorspace_fragment":"encodings_fragment"}>
      `)}}}const W=e.forwardRef((r,t)=>{const[a]=e.useState(()=>new N(null));return e.createElement("primitive",g({},r,{object:a,ref:t,attach:"material"}))});let c,m;const q=e.createContext(null),E=new B,w=new $,G=e.forwardRef(({children:r,range:t,limit:a=1e3,...s},o)=>{const n=e.useRef(null);e.useImperativeHandle(o,()=>n.current,[]);const[l,d]=e.useState([]),[[i,h,b]]=e.useState(()=>[new Float32Array(a*3),Float32Array.from({length:a*3},()=>1),Float32Array.from({length:a},()=>1)]);e.useEffect(()=>{n.current.geometry.attributes.position.needsUpdate=!0}),x(()=>{for(n.current.updateMatrix(),n.current.updateMatrixWorld(),E.copy(n.current.matrixWorld).invert(),n.current.geometry.drawRange.count=Math.min(a,t!==void 0?t:a,l.length),c=0;c<l.length;c++)m=l[c].current,m.getWorldPosition(w).applyMatrix4(E),w.toArray(i,c*3),n.current.geometry.attributes.position.needsUpdate=!0,m.matrixWorldNeedsUpdate=!0,m.color.toArray(h,c*3),n.current.geometry.attributes.color.needsUpdate=!0,b.set([m.size],c),n.current.geometry.attributes.size.needsUpdate=!0});const R=e.useMemo(()=>({getParent:()=>n,subscribe:C=>(d(_=>[..._,C]),()=>d(_=>_.filter(U=>U.current!==C.current)))}),[]);return e.createElement("points",g({userData:{instances:l},matrixAutoUpdate:!1,ref:n,raycast:()=>null},s),e.createElement("bufferGeometry",null,e.createElement("bufferAttribute",{attach:"attributes-position",count:i.length/3,array:i,itemSize:3,usage:p}),e.createElement("bufferAttribute",{attach:"attributes-color",count:h.length/3,array:h,itemSize:3,usage:p}),e.createElement("bufferAttribute",{attach:"attributes-size",count:b.length,array:b,itemSize:1,usage:p})),e.createElement(q.Provider,{value:R},r))}),V=e.forwardRef(({children:r,positions:t,colors:a,sizes:s,stride:o=3,...n},l)=>{const d=e.useRef(null);return e.useImperativeHandle(l,()=>d.current,[]),x(()=>{const i=d.current.geometry.attributes;i.position.needsUpdate=!0,a&&(i.color.needsUpdate=!0),s&&(i.size.needsUpdate=!0)}),e.createElement("points",g({ref:d},n),e.createElement("bufferGeometry",null,e.createElement("bufferAttribute",{attach:"attributes-position",count:t.length/o,array:t,itemSize:o,usage:p}),a&&e.createElement("bufferAttribute",{attach:"attributes-color",count:a.length/o,array:a,itemSize:3,usage:p}),s&&e.createElement("bufferAttribute",{attach:"attributes-size",count:s.length/o,array:s,itemSize:1,usage:p})),r)}),j=e.forwardRef((r,t)=>r.positions instanceof Float32Array?e.createElement(V,g({},r,{ref:t})):e.createElement(G,g({},r,{ref:t}))),y=({pointColor:r="#013062"})=>{const t=e.useRef(null),[a]=e.useState(()=>D(new Float32Array(5e3),{radius:1.5}));return x((s,o)=>{const n=t==null?void 0:t.current;n&&(n.rotation.x-=o/10,n.rotation.y-=o/15)}),u("group",{rotation:[0,0,Math.PI/4],children:u(j,{ref:t,positions:a,stride:3,frustumCulled:!1,children:u(W,{transparent:!0,color:r,size:.005,sizeAttenuation:!0,depthWrite:!1})})})};try{y.displayName="Stars",y.__docgenInfo={description:"",displayName:"Stars",props:{pointColor:{defaultValue:{value:"#013062"},description:"",name:"pointColor",required:!1,type:{name:"string"}}}}}catch{}const H=z(I)`
  position: fixed !important;
  z-index: -1;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: ${r=>r.$backgroundStyle||"linear-gradient(0deg, #000000, #013062)"}; 
`,S=({children:r,background:t="linear-gradient(0deg, #000000, #013062)"})=>u(H,{$backgroundStyle:t,className:"gle-background-canvas",camera:{position:[0,0,1]},children:r});try{S.displayName="CanvasBackground",S.__docgenInfo={description:"",displayName:"CanvasBackground",props:{background:{defaultValue:{value:"linear-gradient(0deg, #000000, #013062)"},description:"",name:"background",required:!1,type:{name:"string"}}}}}catch{}const X={component:y,title:"gle-r3f-components/Stars",argTypes:{}},L=z.div`
  width: 100vw;
  height: 100vh; 
`,f=({})=>u(L,{children:u(S,{children:u(y,{})})});f.args={};var A,k,P;f.parameters={...f.parameters,docs:{...(A=f.parameters)==null?void 0:A.docs,source:{originalSource:`({}: StarsProps) => {
  return <StarsContainer>
            <CanvasBackground>
                <Stars />
            </CanvasBackground>
        </StarsContainer>;
}`,...(P=(k=f.parameters)==null?void 0:k.docs)==null?void 0:P.source}}};const Y=["Default"];export{f as Default,Y as __namedExportsOrder,X as default};
//# sourceMappingURL=Stars.stories-c11e7bd9.js.map
