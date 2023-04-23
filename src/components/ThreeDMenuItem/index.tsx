import React, { useRef, useState } from "react";
import { useFrame, useLoader, extend } from "@react-three/fiber";
import { Plane, Text } from "@react-three/drei";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
extend({ Plane });

interface ThreeDMenuItemProps {
    model: string;
    position: number[];
    text: string;
    textOffset?: number;
    menuHitBoxSize: [width: number, height: number];
    showMenuHitBox?: boolean;
    onClick: () => void;
}

const ThreeDMenuItem: React.FC<ThreeDMenuItemProps> = ({
    model,
    position,
    text,
    textOffset,
    menuHitBoxSize,
    showMenuHitBox,
    onClick,
}) => {
    const gltf = useLoader(GLTFLoader, model);
    const mesh = useRef<THREE.Mesh>(null!);
    const [hovered, setHover] = useState(false);

    useFrame((_state, delta) => {
        mesh.current.rotation.x += delta;
    });

    return (
        <>
            <Text
                color="white"
                anchorX="center"
                anchorY="middle"
                getObjectsByProperty={undefined}
                getVertexPosition={undefined}
                scale={0.25}
                position={[
                    position[0],
                    position[1] + (textOffset ?? 0),
                    position[2] + 0.5,
                ]}
            >
                {text}
            </Text>
            <Plane
                onPointerOver={(_event: any) => setHover(true)}
                onPointerOut={(_event: any) => setHover(false)}
                args={menuHitBoxSize}
                onClick={onClick}
                position={[position[0], position[1], position[2]]}
                getObjectsByProperty={undefined}
                getVertexPosition={undefined}
            >
                <meshStandardMaterial
                    opacity={0}
                    transparent={showMenuHitBox === undefined ? true : false}
                    wireframe
                />
            </Plane>
            <primitive
                ref={mesh}
                object={gltf.scene}
                scale={hovered ? 1.15 : 1}
                position={position}
            />
        </>
    );
};

export { ThreeDMenuItem };
