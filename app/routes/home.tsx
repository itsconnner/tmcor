/* SPDX-License-Identifier: GPL-3.0-or-later */
/*
 * Copyright 2025 Yeyang Wang <autumnlikegirl@gmail.com>
 */

import type { Route } from "./+types/home";
import Hero from "~/home/hero";
import Intro from "~/home/intro";
import Game from "~/home/game";
import Video from "~/home/video";


export function meta({}: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Home() {
  return <main>

    <Hero/>
    <Intro/>
    <Game/>
    <Video/>
  </main>;
}
