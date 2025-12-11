import { useEffect } from "react";
import { useLocation } from "wouter";

const ScrollToTop = () => {
	const [location] = useLocation();

	useEffect(() => {
		// Delay scroll to allow rendering
		setTimeout(() => {
			window.scrollTo(0, 0);
		}, 0);
	}, [location]);

	return null;
};

export default ScrollToTop;
