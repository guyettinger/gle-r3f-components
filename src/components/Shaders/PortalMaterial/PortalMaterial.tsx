import { extend } from "@react-three/fiber";
import { Color } from "three";
import vertexShader from './PortalMaterial.vert';
import fragmentShader from './PortalMaterial.frag';
import { shaderMaterial } from "@react-three/drei";

const PortalMaterial = shaderMaterial(
    {
        uTime: 0,
        uColorStart: new Color('blue'),
        uColorEnd: new Color('white')
    },
    vertexShader,
    fragmentShader,
)

// shaderMaterial creates a THREE.ShaderMaterial, and auto-creates uniform setter/getters
// extend makes it available in JSX, in this case <portalMaterial />
extend({PortalMaterial})

export { PortalMaterial }