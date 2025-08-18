import { Canvas } from "@react-three/fiber";
import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";

const Model = ({
  url,
  scale,
  position,
  rotation,
}: {
  url: string;
  scale: number;
  position: number[];
  rotation: number[];
}) => {
  const groupRef = useRef(null);
  const { scene } = useGLTF(url);
  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.position.y = Math.sin(state.clock.elapsedTime) * 0.5; // Rotate the model slowly
      groupRef.current.rotation.y = Math.sin(state.clock.elapsedTime) * 0.5; // Rotate the model slowly
    }
    // You can add animations or effects here if needed
  });
  return (
    <group ref={groupRef}>
      <primitive
        object={scene}
        scale={scale}
        position={position}
        rotation={rotation}
      />
    </group>
  );
};

export default function ThreeModel() {
  return (
    <div className="w-full h-[500px]">
      <Canvas camera={{ position: [8, 1, 2], fov: 50 }}>
        <ambientLight intensity={3} />
        <Model
          url="/assets/scene.gltf"
          scale={1.5}
          position={[0.3, 0.2, 0]}
          rotation={[0, 1, 1]}
        />
      </Canvas>
    </div>
  );
}
