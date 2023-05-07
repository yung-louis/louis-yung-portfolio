import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import React, { Suspense, useRef } from "react";
import { ThreeDMenuItem } from "../../components/ThreeDMenuItem";
import { useNavigate } from "react-router-dom";
import { Text3D, Center, Sphere } from "@react-three/drei";
import THREE, { BackSide, TextureLoader, RepeatWrapping, Vector2 } from "three";

const ThreeDHome: React.FC = () => {
    return (
        <div style={{ width: "100%", height: "100%" }}>
            <Canvas flat linear camera={{ position: [0, 0, 15], fov: 45 }}>
                <Suspense fallback={null}>
                    <ThreeDMenu />
                </Suspense>
            </Canvas>
        </div>
    );
};

const ThreeDMenu: React.FC = () => {
    const navigate = useNavigate();

    const spaceTexture = useLoader(
        TextureLoader,
        process.env.PUBLIC_URL + "/assets/textures/space.jpg"
    );

    const text = useRef<THREE.Group>(null!);
    const sphere = useRef<THREE.Mesh>(null!);
    spaceTexture.repeat = new Vector2(4, 1);
    spaceTexture.wrapS = RepeatWrapping;
    spaceTexture.wrapT = RepeatWrapping;

    useFrame((_state, delta) => {
        sphere.current.rotation.y += delta / 25;
        sphere.current.rotation.x += delta / 50;
    });

    return (
        <>
            <ambientLight intensity={1} />
            <directionalLight intensity={0.8} />
            <Sphere
                getObjectsByProperty={undefined}
                getVertexPosition={undefined}
                ref={sphere}
                scale={20}
            >
                <meshStandardMaterial side={BackSide} map={spaceTexture} />
            </Sphere>
            <Center
                position={[0, 3, 0]}
                rotation={[0, 0.2, 0]}
                scale={0.5}
                ref={text}
                getObjectsByProperty={undefined}
            >
                <Text3D
                    scale={1}
                    font={
                        process.env.PUBLIC_URL +
                        "/assets/fonts/Roboto_Regular.json"
                    }
                    getObjectsByProperty={undefined}
                    getVertexPosition={undefined}
                >
                    Louis' Porfolio
                </Text3D>
            </Center>
            <ThreeDMenuItem
                model={process.env.PUBLIC_URL + "/assets/models/sarcomere.gltf"}
                position={[0, 0, 3.5]}
                text={"SarcoSim"}
                onClick={() => navigate("/sarcosim")}
                textOffset={0.4}
                menuHitBoxSize={[4, 1]}
            />
        </>
    );
};

export default ThreeDHome;
