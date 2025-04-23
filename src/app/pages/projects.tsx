'use client';
import ExperienceCard from "../components/ExperienceCard";
import projects from "../../data/projects.json";
import SectionTitle from "../components/SectionTitle";
import PageLayout from "../components/PageLayout";

const Projects = () => {
	return (
		<PageLayout>
			<SectionTitle title="Projects" />

			<div className="w-full max-w-6xl px-4 lg:px-16 pb-20">
				<div className="relative">
					{projects.map((project, index) => (
						<ExperienceCard
							key={index}
							{...project}
							index={index}
						/>
					))}
				</div>
			</div>
		</PageLayout>
	);
};

export default Projects;
