import { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

import CanvasLoader from "../Loader";

const Computers = ({ isMobile }) => {
	const computer = useGLTF("./desktop_pc/scene.gltf");

	return (
		<mesh>
			<hemisphereLight intensity={0.1} groundColor="black" />
			<pointLight intensity={0.5} />
			<spotLight
				position={[-20, 50, 10]}
				angle={0.12}
				penumbra={1}
				intensity={1}
				castShadow
				shadow-mapSize={1024}
			/>
			<primitive
				object={computer.scene}
				scale={isMobile ? 2.5 : 3}
				position={isMobile ? [-1, -4.5, 0] : [-1, -5, 0]}
			/>
		</mesh>
	);
};

const ComputerCanvas = () => {
	const [isMobile, setIsMobile] = useState(false);

	useEffect(() => {
		//listener for changes to the screen size
		const mediaQuery = window.matchMedia("(max-width:500px)");
		//set the initial value
		setIsMobile(mediaQuery.matches);
		//define callback function to handle change to the media query
		const handleMediaQueryChange = (event) => {
			setIsMobile(event.matches);
		};
		//add the callback as a listener for chanfe
		mediaQuery.addEventListener("change", handleMediaQueryChange);

		//remove the listener when component is unmounted
		return () => {
			mediaQuery.removeEventListener("change", handleMediaQueryChange);
		};
	}, []);

	return (
		<Canvas
			frameloop="demand"
			shadows
			camera={{ position: [20, 3, 5], fov: 25 }}
			gl={{ preservedDrawingBuffer: true }}>
			<Suspense fallback={<CanvasLoader />}>
				<OrbitControls
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
