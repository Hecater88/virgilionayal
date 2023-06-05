import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import {
	Decal,
	Float,
	OrbitControls,
	Preload,
	useTexture,
} from "@react-three/drei";

import CanvasLoader from "../Loader";

const Ball = (props) => {
	const [decal] = useTexture([props.imgUrl]);

	return (
		<mesh castShadow receiveShadow scale={2.75}>
			<hemisphereLight intensity={1} groundColor="black" />
			<icosahedronGeometry radius={1} />
			<meshStandardMaterial
				color="#fff8eb"
				polygonOffset
				polygonOffsetFactor={-5}
				flatShading
			/>
			<Decal
				position={[0, 0, 1]}
				rotation={[2 * Math.PI, 0, 6.25]}
				scale={1.3}
				map={decal}
				flatShading
			/>
		</mesh>
	);
};

const BallCanvas = ({ icon }) => {
	var speed = Math.random() < 0.5 ? -5 : 5;
	return (
		<Canvas frameloop="demand" dpr={[1, 2]}>
			<Suspense fallback={<CanvasLoader />}>
				<OrbitControls
					autoRotate
					autoRotateSpeed={speed}
					enableZoom={false}
					maxPolarAngle={Math.PI / 2}
					minPolarAngle={Math.PI / 2}
				/>
				<Ball imgUrl={icon} />
			</Suspense>

			<Preload all />
		</Canvas>
	);
};

export default BallCanvas;
