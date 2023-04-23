import { Canvas } from "@react-three/fiber";
import React, { Suspense } from "react";
import { ThreeDMenuItem } from "../../components/ThreeDMenuItem";
import { useNavigate } from "react-router-dom";
import { Text3D, Center } from "@react-three/drei";

const ThreeDHome: React.FC = () => {
    const navigate = useNavigate();
    return (
        <>
            <Canvas>
                <Suspense fallback={null}>
                    <ambientLight intensity={0.5} />
                    <directionalLight intensity={0.8} />
                    <Center
                        position={[0, 4, 0]}
                        getObjectsByProperty={undefined}
                    >
                        <Text3D
                            scale={1}
                            font={"/Roboto_Regular.json"}
                            getObjectsByProperty={undefined}
                            getVertexPosition={undefined}
                        >
                            Louis' Porfolio
                        </Text3D>
                    </Center>
                    <ThreeDMenuItem
                        model="models/sarcomere.gltf"
                        position={[0, 0, 3.5]}
                        text={"SarcoSim"}
                        onClick={() => navigate("/sarcosim")}
                        textOffset={0.3}
                        menuHitBoxSize={[4.5, 1]}
                    />
                </Suspense>
            </Canvas>
        </>
    );
};

export default ThreeDHome;
