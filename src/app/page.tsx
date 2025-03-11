"use client";
import Introduction from "./pages/introduction";
import Experience from "./pages/experience";
import Projects from "./pages/projects";
import Medium from "./pages/medium";
import Skills from "./pages/skills";
import Contact from "./pages/contact";

export default function Home() {
	return (
		<main className="flex flex-col bg-gradient-to-b from-[rgba(17,107,125,1)] to-[rgba(2,0,36,1)]  text-white 2xl:px-[20%]">
			<Introduction />
			<Experience />
			<Projects />
			<Medium />
			<Skills />
			<Contact />
		</main>
	);
}
