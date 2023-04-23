import React, { useRef, useState } from "react";
import { useFrame, useLoader, extend } from "@react-three/fiber";
import { Plane } from "@react-three/drei";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { TextureLoader } from "three";
extend({ Plane });

interface ThreeDObjectProps {
    model: string;
    texture: string;
    position: number[];
}

const ThreeDObject: React.FC<ThreeDObjectProps> = ({
    model,
    texture,
    position,
}) => {
    const gltf = useLoader(GLTFLoader, model);
    const colorMap = useLoader(TextureLoader, texture);
    const mesh = useRef<THREE.Mesh>(null!);
    const [hovered, setHover] = useState(false);

    useFrame((_state, delta) => {
        mesh.current.rotation.x += delta;
    });

    return (
        <>
            <Plane
                onPointerOver={(_event: any) => setHover(true)}
                onPointerOut={(_event: any) => setHover(false)}
                getObjectsByProperty={gltf.scene}
                args={[13, 2]}
                getVertexPosition={position}
            />
            <primitive
                ref={mesh}
                map={colorMap}
                object={gltf.scene}
                scale={hovered ? 1.15 : 1}
                position={position}
            />
        </>
    );
};

export { ThreeDObject };
