"use client";
import Introduction from "./pages/introduction";
import Experience from "./pages/experience";
import Projects from "./pages/projects";
import Medium from "./pages/medium";
import Skills from "./pages/skills";
import Contact from "./pages/contact";
import ParticleBackground from "./components/ParticleBackground";
export default function Home() {
	return (
		<main className="flex flex-col bg-gradient-to-b from-[rgba(17,107,125,0.95)] to-[rgba(2,0,36,0.98)] text-white 2xl:px-[20%] relative min-h-screen">
			<ParticleBackground />
			<Introduction />
			<Experience />
			<Projects />
			<Medium />
			<Skills />
			<Contact />
		</main>
	);
}
