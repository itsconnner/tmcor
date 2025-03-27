/* SPDX-License-Identifier: GPL-3.0-or-later */
/*
 * Copyright 2025 Yeyang Wang <autumnlikegirl@gmail.com>
 * With contributions from Jiamu Sun <barroit@linux.com>
 */

export default function C(...names)
{
	return names.filter(Boolean).join(' ');
}
