/* SPDX-License-Identifier: GPL-3.0-or-later */
/*
 * Copyright 2025 Yeyang Wang <autumnlikegirl@gmail.com>
 * With contributions from Jiamu Sun <barroit@linux.com>
 */

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
