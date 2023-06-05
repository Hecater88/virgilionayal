import { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

import CanvasLoader from "../Loader";
import useIsMobile from "../../hooks/useIsMobile";

const Computers = ({ isMobile }) => {
	const computer = useGLTF("./desktop_pc/scene.gltf");

	return (
		<mesh>
			<hemisphereLight intensity={0.1} groundColor="black" />
			<pointLight intensity={0.5} />
			<spotLight
				position={isMobile ? [20, 50, 10] : [-20, 50, 10]}
				angle={0.3}
				penumbra={1}
				intensity={1}
				castShadow
				shadow-mapSize={1024}
			/>
			<primitive
				rotation={[0, 90, 0]}
				object={computer.scene}
				scale={isMobile ? 2.5 : 3}
				position={isMobile ? [2, -5, 0] : [-1, -5, 0]}
			/>
		</mesh>
	);
};

const ComputerCanvas = () => {
	const isMobile = useIsMobile();

	return (
		<Canvas
			frameloop="demand"
			shadows
			camera={{ position: [20, 3, 5], fov: 25 }}
			gl={{ preservedDrawingBuffer: true }}>
			<Suspense fallback={<CanvasLoader />}>
				<OrbitControls
					autoRotate
					enableZoom={false}
					maxPolarAngle={Math.PI / 2}
					minPolarAngle={Math.PI / 2}
				/>
				<Computers isMobile={isMobile} />
			</Suspense>
			<Preload all />
		</Canvas>
	);
};

export default ComputerCanvas;
