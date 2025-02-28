"use client";
import Introduction from "./pages/introduction";
import Experience from "./pages/experience";
import Projects from "./pages/projects";
import Medium from "./pages/medium";
import Hobbies from "./pages/hobbies";
import Skills from "./pages/skills";
import { useEffect } from "react";

export default function Home() {
	return (
		<main className="flex flex-col bg-black text-white 2xl:px-[20%]">
			<Introduction />
			<Experience />
			<Projects />
			<Medium />
			<Skills />
			<Hobbies />
		</main>
	);
}
