import{P as B,u as x,D as d,a as $,V as D,j as u,s as z,C as N}from"./react-three-fiber.esm-af5de61a.js";import{r as e}from"./index-76fb7be0.js";import{v as R,m as M,i as W}from"./index-0332b2ed.esm-559105d7.js";import{_ as g}from"./extends-98964cd2.js";import"./_commonjsHelpers-de833af9.js";const S=R>=154?"opaque_fragment":"output_fragment";class I extends B{constructor(t){super(t),this.onBeforeCompile=(a,s)=>{const{isWebGL2:o}=s.capabilities;a.fragmentShader=a.fragmentShader.replace(`#include <${S}>`,`
        ${o?`#include <${S}>`:`#extension GL_OES_standard_derivatives : enable
#include <${S}>`}
      vec2 cxy = 2.0 * gl_PointCoord - 1.0;
      float r = dot(cxy, cxy);
      float delta = fwidth(r);     
      float mask = 1.0 - smoothstep(1.0 - delta, 1.0 + delta, r);
      gl_FragColor = vec4(gl_FragColor.rgb, mask * gl_FragColor.a );
      #include <tonemapping_fragment>
      #include <${R>=154?"colorspace_fragment":"encodings_fragment"}>
      `)}}}const q=e.forwardRef((r,t)=>{const[a]=e.useState(()=>new I(null));return e.createElement("primitive",g({},r,{object:a,ref:t,attach:"material"}))});let c,f;const G=e.createContext(null),E=new $,w=new D,V=e.forwardRef(({children:r,range:t,limit:a=1e3,...s},o)=>{const n=e.useRef(null),[l,p]=e.useState([]),[[i,h,b]]=e.useState(()=>[new Float32Array(a*3),Float32Array.from({length:a*3},()=>1),Float32Array.from({length:a},()=>1)]);e.useEffect(()=>{n.current.geometry.attributes.position.needsUpdate=!0}),x(()=>{for(n.current.updateMatrix(),n.current.updateMatrixWorld(),E.copy(n.current.matrixWorld).invert(),n.current.geometry.drawRange.count=Math.min(a,t!==void 0?t:a,l.length),c=0;c<l.length;c++)f=l[c].current,f.getWorldPosition(w).applyMatrix4(E),w.toArray(i,c*3),n.current.geometry.attributes.position.needsUpdate=!0,f.matrixWorldNeedsUpdate=!0,f.color.toArray(h,c*3),n.current.geometry.attributes.color.needsUpdate=!0,b.set([f.size],c),n.current.geometry.attributes.size.needsUpdate=!0});const U=e.useMemo(()=>({getParent:()=>n,subscribe:C=>(p(_=>[..._,C]),()=>p(_=>_.filter(F=>F.current!==C.current)))}),[]);return e.createElement("points",g({userData:{instances:l},matrixAutoUpdate:!1,ref:M([o,n]),raycast:()=>null},s),e.createElement("bufferGeometry",null,e.createElement("bufferAttribute",{attach:"attributes-position",count:i.length/3,array:i,itemSize:3,usage:d}),e.createElement("bufferAttribute",{attach:"attributes-color",count:h.length/3,array:h,itemSize:3,usage:d}),e.createElement("bufferAttribute",{attach:"attributes-size",count:b.length,array:b,itemSize:1,usage:d})),e.createElement(G.Provider,{value:U},r))}),j=e.forwardRef(({children:r,positions:t,colors:a,sizes:s,stride:o=3,...n},l)=>{const p=e.useRef(null);return x(()=>{const i=p.current.geometry.attributes;i.position.needsUpdate=!0,a&&(i.color.needsUpdate=!0),s&&(i.size.needsUpdate=!0)}),e.createElement("points",g({ref:M([l,p])},n),e.createElement("bufferGeometry",null,e.createElement("bufferAttribute",{attach:"attributes-position",count:t.length/o,array:t,itemSize:o,usage:d}),a&&e.createElement("bufferAttribute",{attach:"attributes-color",count:a.length/o,array:a,itemSize:3,usage:d}),s&&e.createElement("bufferAttribute",{attach:"attributes-size",count:s.length/o,array:s,itemSize:1,usage:d})),r)}),L=e.forwardRef((r,t)=>r.positions instanceof Float32Array?e.createElement(j,g({},r,{ref:t})):e.createElement(V,g({},r,{ref:t}))),y=({pointColor:r="#013062"})=>{const t=e.useRef(null),[a]=e.useState(()=>W(new Float32Array(5e3),{radius:1.5}));return x((s,o)=>{const n=t==null?void 0:t.current;n&&(n.rotation.x-=o/10,n.rotation.y-=o/15)}),u("group",{rotation:[0,0,Math.PI/4],children:u(L,{ref:t,positions:a,stride:3,frustumCulled:!1,children:u(q,{transparent:!0,color:r,size:.005,sizeAttenuation:!0,depthWrite:!1})})})};try{y.displayName="Stars",y.__docgenInfo={description:"",displayName:"Stars",props:{pointColor:{defaultValue:{value:"#013062"},description:"",name:"pointColor",required:!1,type:{name:"string"}}}}}catch{}const O=z(N)`
  position: fixed !important;
  z-index: -1;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: ${r=>r.$backgroundStyle||"linear-gradient(0deg, #000000, #013062)"}; 
`,v=({children:r,background:t="linear-gradient(0deg, #000000, #013062)"})=>u(O,{$backgroundStyle:t,className:"gle-background-canvas",camera:{position:[0,0,1]},children:r});try{v.displayName="CanvasBackground",v.__docgenInfo={description:"",displayName:"CanvasBackground",props:{background:{defaultValue:{value:"linear-gradient(0deg, #000000, #013062)"},description:"",name:"background",required:!1,type:{name:"string"}}}}}catch{}const Y={component:y,title:"gle-r3f-components/Stars",argTypes:{}},T=z.div`
  width: 100vw;
  height: 100vh; 
`,m=({})=>u(T,{children:u(v,{children:u(y,{})})});m.args={};var A,k,P;m.parameters={...m.parameters,docs:{...(A=m.parameters)==null?void 0:A.docs,source:{originalSource:`({}: StarsProps) => {
  return <StarsContainer>
            <CanvasBackground>
                <Stars />
            </CanvasBackground>
        </StarsContainer>;
}`,...(P=(k=m.parameters)==null?void 0:k.docs)==null?void 0:P.source}}};const Z=["Default"];export{m as Default,Z as __namedExportsOrder,Y as default};
//# sourceMappingURL=Stars.stories-2fd2c526.js.map
