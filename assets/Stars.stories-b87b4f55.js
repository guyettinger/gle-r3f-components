import{P as B,u as x,D as d,M as D,V as N,j as u,s as M,C as W}from"./react-three-fiber.esm-4fee7c38.js";import{r as e}from"./index-76fb7be0.js";import{v as R,m as k,i as I}from"./index-0332b2ed.esm-4227e939.js";import{_ as g}from"./extends-98964cd2.js";import"./_commonjsHelpers-de833af9.js";const S=R>=154?"opaque_fragment":"output_fragment";class $ extends B{constructor(r){super(r),this.onBeforeCompile=(a,s)=>{const{isWebGL2:o}=s.capabilities;a.fragmentShader=a.fragmentShader.replace(`#include <${S}>`,`
        ${o?`#include <${S}>`:`#extension GL_OES_standard_derivatives : enable
#include <${S}>`}
      vec2 cxy = 2.0 * gl_PointCoord - 1.0;
      float r = dot(cxy, cxy);
      float delta = fwidth(r);     
      float mask = 1.0 - smoothstep(1.0 - delta, 1.0 + delta, r);
      gl_FragColor = vec4(gl_FragColor.rgb, mask * gl_FragColor.a );
      #include <tonemapping_fragment>
      #include <${R>=154?"colorspace_fragment":"encodings_fragment"}>
      `)}}}const G=e.forwardRef((t,r)=>{const[a]=e.useState(()=>new $(null));return e.createElement("primitive",g({},t,{object:a,ref:r,attach:"material"}))});let c,f;const j=e.createContext(null),E=new D,w=new N,q=e.forwardRef(({children:t,range:r,limit:a=1e3,...s},o)=>{const n=e.useRef(null),[l,p]=e.useState([]),[[i,y,b]]=e.useState(()=>[new Float32Array(a*3),Float32Array.from({length:a*3},()=>1),Float32Array.from({length:a},()=>1)]);e.useEffect(()=>{n.current.geometry.attributes.position.needsUpdate=!0}),x(()=>{for(n.current.updateMatrix(),n.current.updateMatrixWorld(),E.copy(n.current.matrixWorld).invert(),n.current.geometry.drawRange.count=Math.min(a,r!==void 0?r:a,l.length),c=0;c<l.length;c++)f=l[c].current,f.getWorldPosition(w).applyMatrix4(E),w.toArray(i,c*3),n.current.geometry.attributes.position.needsUpdate=!0,f.matrixWorldNeedsUpdate=!0,f.color.toArray(y,c*3),n.current.geometry.attributes.color.needsUpdate=!0,b.set([f.size],c),n.current.geometry.attributes.size.needsUpdate=!0});const U=e.useMemo(()=>({getParent:()=>n,subscribe:C=>(p(_=>[..._,C]),()=>p(_=>_.filter(F=>F.current!==C.current)))}),[]);return e.createElement("points",g({userData:{instances:l},matrixAutoUpdate:!1,ref:k([o,n]),raycast:()=>null},s),e.createElement("bufferGeometry",null,e.createElement("bufferAttribute",{attach:"attributes-position",count:i.length/3,array:i,itemSize:3,usage:d}),e.createElement("bufferAttribute",{attach:"attributes-color",count:y.length/3,array:y,itemSize:3,usage:d}),e.createElement("bufferAttribute",{attach:"attributes-size",count:b.length,array:b,itemSize:1,usage:d})),e.createElement(j.Provider,{value:U},t))}),L=e.forwardRef(({children:t,positions:r,colors:a,sizes:s,stride:o=3,...n},l)=>{const p=e.useRef(null);return x(()=>{const i=p.current.geometry.attributes;i.position.needsUpdate=!0,a&&(i.color.needsUpdate=!0),s&&(i.size.needsUpdate=!0)}),e.createElement("points",g({ref:k([l,p])},n),e.createElement("bufferGeometry",null,e.createElement("bufferAttribute",{attach:"attributes-position",count:r.length/o,array:r,itemSize:o,usage:d}),a&&e.createElement("bufferAttribute",{attach:"attributes-color",count:a.length/o,array:a,itemSize:3,usage:d}),s&&e.createElement("bufferAttribute",{attach:"attributes-size",count:s.length/o,array:s,itemSize:1,usage:d})),t)}),O=e.forwardRef((t,r)=>t.positions instanceof Float32Array?e.createElement(L,g({},t,{ref:r})):e.createElement(q,g({},t,{ref:r}))),h=t=>{const r=e.useRef(null),[a]=e.useState(()=>I(new Float32Array(5e3),{radius:1.5}));return x((s,o)=>{const n=r==null?void 0:r.current;n&&(n.rotation.x-=o/10,n.rotation.y-=o/15)}),u("group",{rotation:[0,0,Math.PI/4],children:u(O,{ref:r,positions:a,stride:3,frustumCulled:!1,...t,children:u(G,{transparent:!0,color:"#013062",size:.005,sizeAttenuation:!0,depthWrite:!1})})})};try{h.displayName="Stars",h.__docgenInfo={description:"",displayName:"Stars",props:{}}}catch{}const V=M(W)`
  position: fixed !important;
  z-index: -1;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: linear-gradient(0deg, #000000, #013062);
`,v=({children:t})=>u(V,{className:"gle-background-canvas",camera:{position:[0,0,1]},children:t});try{v.displayName="CanvasBackground",v.__docgenInfo={description:"",displayName:"CanvasBackground",props:{}}}catch{}const Y={component:h,title:"gle-r3f-components/Stars",argTypes:{}},T=M.div`
  width: 100vw;
  height: 100vh;
`,m=t=>u(T,{children:u(v,{children:u(h,{})})});m.args={};var A,P,z;m.parameters={...m.parameters,docs:{...(A=m.parameters)==null?void 0:A.docs,source:{originalSource:`(args: StarsProps) => {
  return <StarsContainer>
            <CanvasBackground>
                <Stars />
            </CanvasBackground>
        </StarsContainer>;
}`,...(z=(P=m.parameters)==null?void 0:P.docs)==null?void 0:z.source}}};const Z=["Default"];export{m as Default,Z as __namedExportsOrder,Y as default};
//# sourceMappingURL=Stars.stories-b87b4f55.js.map
