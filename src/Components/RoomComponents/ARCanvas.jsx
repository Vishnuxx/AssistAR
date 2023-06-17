import { Canvas } from "@react-three/fiber";
import { ZapparCamera, ZapparCanvas } from "@zappar/zappar-react-three-fiber";
import { useRef } from "react";

import ARCamera from "./ARCamera";

function ARCanvas() {
  const trackerref = useRef();
  return (
    <>
      <ZapparCanvas>
        <ZapparCamera />
      </ZapparCanvas>
      <Canvas style={{ position: "absolute", zIndex: 0 }}>
        <ARCamera enableTracking={true}></ARCamera>

        <group ref={trackerref}>
          <pointLight></pointLight>
          <mesh position={[0, 0, -10]}>
            <boxGeometry></boxGeometry>
            <meshBasicMaterial></meshBasicMaterial>
          </mesh>
        </group>
      </Canvas>
    </>
  );
}

export default ARCanvas;
