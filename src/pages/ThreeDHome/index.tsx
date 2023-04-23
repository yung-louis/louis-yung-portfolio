import { Canvas } from "@react-three/fiber";
import React, { Suspense } from "react";
import { ThreeDObject } from "../../components/ThreeDObject";

const ThreeDHome: React.FC = () => {
    return (
        <>
            <Canvas>
                <Suspense fallback={null}>
                    <ambientLight />
                    <ThreeDObject
                        model="models/sarcomere.gltf"
                        texture="textures/stexture.png"
                        position={[0, 0, 3.5]}
                    />
                </Suspense>
            </Canvas>
        </>
    );
};

export default ThreeDHome;
