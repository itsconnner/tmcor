import { useEffect } from "react";

export default function useAnimationFrame(cb) {
	function animate(time) {
		cb(time)
		requestAnimationFrame(animate);
	}

	useEffect(() => {
		const id = requestAnimationFrame(animate);

		return () => cancelAnimationFrame(id);
	}, []);
}
