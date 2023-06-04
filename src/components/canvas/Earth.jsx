import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import CanvasLoader from "../Loader";

const Earth = () => {
	const gundam = useGLTF("./gundam_unicorn/scene.gltf");
	return (
		<mesh>
			<hemisphereLight intensity={0.25} groundColor="black" />
			<pointLight intensity={0.2} />
			<spotLight
				position={[-20, 50, 10]}
				angle={0.3}
				penumbra={0}
				intensity={0.5}
			/>
			<primitive
				object={gundam.scene}
				scale={1.7}
				position-y={-2.5}
				position-x={10}
			/>
		</mesh>
	);
};

const EarthCanvas = () => {
	return (
		<div className="w-full h-auto absolute inset-0 z-[-1]">
			<Canvas
				shadows
				frameLoop="demand"
				gl={{ preserveDrawingBuffer: true }}
				camera={{ fov: 50, near: 0.1, far: 100, position: [15, 1, 1] }}>
				<Suspense fallback={<CanvasLoader />}>
					<OrbitControls
						autoRotate
						autoRotateSpeed={5}
						enableZoom={false}
						maxPolarAngle={Math.PI / 2}
						minPolarAngle={Math.PI / 2}
					/>
					<Earth />
				</Suspense>
				<Preload all />
			</Canvas>
		</div>
	);
};
export default EarthCanvas;
