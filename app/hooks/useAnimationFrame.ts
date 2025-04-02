
import { useEffect } from "react";

export default function useAnimationFrame(frameTime) {

	function animate(time: number) {
		frameTime(time)
		requestAnimationFrame(animate);
	}

	useEffect(() => {
		const id = requestAnimationFrame(animate);

		return () => cancelAnimationFrame(id);
	}, []);
}
