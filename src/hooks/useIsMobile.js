import { useState, useEffect } from "react";

const useIsMobile = () => {
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
	return isMobile;
};
export default useIsMobile;
