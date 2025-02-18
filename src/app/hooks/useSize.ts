import { useEffect, useState } from "react";

export enum ScreenSize {
	MOBILE,
	TABLET,
	PC,
}

export const useSize = () => {
	const [deviceType, setDeviceType] = useState(ScreenSize.MOBILE);

	useEffect(() => {
		const handleResize = () => {
			const width = window.innerWidth;
			if (width <= 768) {
				setDeviceType(ScreenSize.MOBILE);
			} else if (width > 768 && width <= 1200) {
				setDeviceType(ScreenSize.TABLET);
			} else {
				setDeviceType(ScreenSize.PC);
			}
		};

		handleResize();

		window.addEventListener("resize", handleResize);

		return () => {
			console.log("removed");
			window.removeEventListener("resize", handleResize);
		};
	}, []);

	return deviceType;
};
