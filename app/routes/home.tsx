import type { Route } from "./+types/home";
import Hero from "~/home/hero";
import Intro from "~/home/intro";

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


  </main>;
}
